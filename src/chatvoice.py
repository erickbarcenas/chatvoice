#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# Ivan Vladimir Meza Ruiz 2018
# GPL 3.0

# imports
import argparse
import sys
import configparser
import os.path
import yaml

# local imports
import conversation
from audio import audio_close, audio_devices, list_voices

# load config
config = configparser.ConfigParser()
if os.path.exists("config.ini"):
    config.read('config.ini')

if __name__ == '__main__':
    p = argparse.ArgumentParser("preprocessing",add_help=False)
    p.add_argument("CONV",nargs='?',
            help="Conversation file")
    kargs,extra = p.parse_known_args()

    CONFIG='DEFAULT'
    if kargs.CONV:
        extra_settings=os.path.splitext(os.path.basename(kargs.CONV))[0]
        if extra_settings in config:
            CONFIG=extra_settings

    p = argparse.ArgumentParser("chatvoice")
    p.add_argument("CONV",nargs='?',
            help="Conversation file")
    g1 = p.add_argument_group('Information', 'Display alternative information')
    g1.add_argument("--print_config",
            action="store_true",
            help="Print values of config")
    g1.add_argument("--list_devices",
            action="store_true",
            help="List audio devices")
    g1.add_argument("--list_voices_local_tts",
            action="store_true",
            help="List voices from local TTS")
    g1.add_argument("--list_language_google_tts",
            action="store_true",
            help="List voices from local TTS")
    g11 = p.add_argument_group('Paths', 'Paths to auxiliary files')
    g11.add_argument("--audios_dir",
            default=config.get(CONFIG,'audios_dir',fallback='audios'),
            action="store",
            help="Prefix directory for audios [%(default)s]")
    g11.add_argument("--speech_recognition_dir",
            default=config.get(CONFIG,'speech_recognition_dir',fallback='speech_recognition'),
            action="store",
            help="Directory for audios for speech recognition [%(default)s]")
    g11.add_argument("--tts_dir",
            default=config.get(CONFIG,'tts_dir',fallback='tts'),
            action="store",
            help="Directory for audios for tts [%(default)s]")
    g11.add_argument("--is_filename",
            default=config.get(CONFIG,'is_filename',fallback='is.json'),
            action="store",
            help="File to save the Information State (remember) filename [%(default)s]")
    g11.add_argument("--audio_tts_db",
            default=config.get(CONFIG,'audio_tts_db',fallback='audios_tts.tinydb'),
            action="store",
            help="File to store information about the audios generated by the tts [%(default)s]")
    g12 = p.add_argument_group('Conversation', 'Conversation files')
    g12.add_argument("--generate_all_tts",
            default=config.get(CONFIG,'generate_all_tts',fallback=False),
            action="store",
            help="During tts generate all audios, do not use the database [%(default)s]")
    g12.add_argument("--remember_all",
            default=config.get(CONFIG,'remember_all',fallback=False),
            action="store",
            help="Remember all slots from conversation [%(default)s]")
    g2 = p.add_argument_group('Speech', 'Options to control speech processing [%(default)s]')
    g2.add_argument("--speech_recognition",
            default=config.getboolean(CONFIG,'speech_recognition',fallback=False),
            action="store_true",
            help="Activate speech recognition [%(default)s]")
    g2.add_argument("--google_tts",
            default=config.getboolean(CONFIG,'google_tts',fallback=False),
            action="store_true", dest="google_tts",
            help="Use google tts")
    g2.add_argument("--local_tts",
            default=config.getboolean(CONFIG,'local_tts',fallback=False),
            action="store_true", dest="local_tts",
            help="Use espeak local tts [%(default)s]")
    g2.add_argument("--local_tts_voice",
            default=config.get(CONFIG,'local_tts_voice',fallback='spanish-latin-am'),
            action="store_true", dest="local_tts",
            help="Use espeak local tts [%(default)s]")
    g2.add_argument("--google_tts_language",
            default=config.get(CONFIG,'google_tts_langage',fallback='es-us'),
            action="store_true", dest="local_tts",
            help="Use espeak local tts [%(default)s]")
    g3 = p.add_argument_group('Audio', 'Options to control audio')
    g3.add_argument("--samplerate",type=int,
            default=config.getint(CONFIG,'samplerate',fallback=44100),
            action="store", dest="samplerate",
            help=f"Samplerate [%(default)s]")
    g3.add_argument("--channels",type=int,
            default=config.getint(CONFIG,'channels',fallback=2),
            action="store",
            help=f"Number of channels microphone [%(default)s]")
    g3.add_argument("--device",
            default=config.getint(CONFIG,'device',fallback=None),
            action="store",
            help="Device number to connect audio [%(default)s]")
    g3.add_argument("--aggressiveness",
            default=config.getint(CONFIG,'aggressiveness',fallback=None),
            action="store",
            help="VAD aggressiveness [%(default)s]")
    p.add_argument("-v", "--verbose",
            action="store_true",
            help="Verbose mode [%(default)s]")

    args = p.parse_args(extra)

    # Modes that print alternative information
    if args.list_devices:
        for info in audio_devices():
            print(info)
        sys.exit()
    elif args.print_config:
        for sec in config:
            print(f'[{sec}]')
            for key,val in config[sec].items():
                print(f'{key}={val}')
            print()
        sys.exit()
    elif args.list_voices_local_tts:
        list_voices(engine='local')
        sys.exit()
    elif args.list_language_google_tts:
        list_voices(engine='google')
        sys.exit()

    if not kargs.CONV:
        print("No conversation file provided")
        p.print_usage()
        sys.exit()

    CONFIG=vars(args)
    CONFIG['main_path']=os.path.dirname(kargs.CONV)

    # Setting TTS
    if args.google_tts:
        CONFIG['tts']="google"
    elif args.local_tts:
        CONFIG['tts']="local"
    else:
        CONFIG['tts']=None

    # Main loop
    conversation = conversation.Conversation(
            filename=kargs.CONV,
            **CONFIG)
    conversation.execute()
