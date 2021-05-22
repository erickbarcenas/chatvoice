import React, {useState} from 'react'
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition'
import {withNamespaces} from "react-i18next";
import { useHistory } from "react-router-dom";


const RegisterVoice=({t})=> {
    const {transcript, resetTranscript} = useSpeechRecognition({language: 'es-MX'})
    const [savedNotes, setSavedNotes] = useState([]);
    const history = useHistory();
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null;
    }
    const handleOnStart = () => {
        SpeechRecognition.startListening();
    }
    const handleReset = () => {
        resetTranscript();
    }
    const handleOnStop = () => {
        SpeechRecognition.stopListening();
        setSavedNotes([...savedNotes, transcript]);
        resetTranscript();
    }
    const handleContinue = () => {
        history.push('/register/verify');
    }
    const handleResetBio = () => {
        setSavedNotes([]);
    }
    return (
        <>
            <h1>¿Cuál es tu nombre?</h1>
            <div className="">
                {
                    savedNotes.length === 0 &&
                    <div className="sh_box_header">
                        {transcript ? <span>🔴</span> : <span>🎙️</span>}
                        <button onClick={() => handleOnStart()}>Iniciar</button>
                        <button onClick={() => handleOnStop()}>Guardar</button>
                        <button onClick={() => handleReset()}>Resetear</button>
                    </div>
                }
                <div className="box">
                    {transcript ? <><p>{transcript}</p><hr/></> : (
                        savedNotes.length === 0 &&
                        <>
                            <p className="sh_placeholder">Ej. en mis tiempo libres me gusta viajar</p>
                            <hr/>
                        </>
                    )}
                    {savedNotes.map((note, index) =>
                        <p key={index}>{note}</p>
                    )}
                </div>
                {
                    savedNotes.length > 0 &&
                    <>
                        <button className="sh_center sh_width" onClick={() => handleContinue()}>Continuar</button>
                        <button className="sh_center sh_width" onClick={() => handleResetBio()}>Cambiar
                            Nombre</button>
                    </>
                }
            </div>
        </>
    )
}

export default withNamespaces()(RegisterVoice);
