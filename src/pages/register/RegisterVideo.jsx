import React, {Fragment, useState} from 'react';
import {withNamespaces} from "react-i18next";
import Webcam from "react-webcam";

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
};

const RegisterVideo = () => {
    const [image, setImage] = useState()
    const webcamRef = React.useRef(null);
    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
        },
        [webcamRef]
    );

    return (
        <Fragment>
            <Webcam
                audio={false}
                height={720}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={1280}
                videoConstraints={videoConstraints}
            />
            <button onClick={()=>capture()}>Capture photo</button>

            <img src="" alt=""/>
        </Fragment>
    )
}

export default withNamespaces()(RegisterVideo);
