import React, {Component} from 'react';
import { withNamespaces } from 'react-i18next';
import {
    loadModels,
    getFullFaceDescription,
    createMatcher,
    isFaceDetectionModelLoaded
} from '../../components/api/face';
import DrawBox from '../../components/api/DrawBox';
import ShowDescriptors from '../../components/api/showDescriptors';
import * as JSON_PROFILE from '../../components/api/descriptor.json';
import testImg from '../../components/api/img/test.png';




const MaxWidth = 500;
const boxColor = '#BE80B5';

const INIT_STATE = {
    url: '',
    imageURL: '',
    fullDesc: [],
    imageDimension: {
        width: 300,
        height: 100
    },
    error: false,
    loading: false
};

class RegisterPicture extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ...INIT_STATE,
            faceMatcher: null,
            showDescriptors: false,
            WIDTH: null,
            HEIGHT: 0,
            isModelLoaded: !!isFaceDetectionModelLoaded()
        };
    }

    componentWillMount() {
        this.resetState();
        let _W = document.documentElement.clientWidth;
        if (_W > MaxWidth) _W = MaxWidth;
        this.setState({ WIDTH: _W });
        this.mounting();
    }

    mounting = async () => {
        await loadModels();
        await this.matcher();
        // await this.getImageDimension(testImg);
        // await this.setState({ imageURL: testImg, loading: true });
        // await this.handleImageChange(testImg);
    };

    matcher = async () => {
        const faceMatcher = await createMatcher(JSON_PROFILE);
        this.setState({ faceMatcher });
    };

    handleFileChange = async event => {
        this.resetState();
        await this.setState({
            imageURL: URL.createObjectURL(event.target.files[0]),
            loading: true
        });
        this.handleImageChange();
    };

    handleURLChange = event => {
        this.setState({ url: event.target.value });
    };

    handleButtonClick = async () => {
        this.resetState();
        let blob = await fetch(this.state.url)
            .then(r => r.blob())
            .catch(error => this.setState({ error }));
        if (!!blob && blob.type.includes('image')) {
            this.setState({
                imageURL: URL.createObjectURL(blob),
                loading: true
            });
            this.handleImageChange();
        }
    };

    handleImageChange = async (image = this.state.imageURL) => {
        await this.getImageDimension(image);
        await getFullFaceDescription(image).then(fullDesc => {
            console.log('============>',typeof(fullDesc));
            console.log('============>',fullDesc);
            this.setState({ fullDesc, loading: false });
        });
    };

    getImageDimension = imageURL => {
        let img = new Image();
        img.onload = () => {
            let HEIGHT = (this.state.WIDTH * img.height) / img.width;
            this.setState({
                HEIGHT,
                imageDimension: {
                    width: img.width,
                    height: img.height
                }
            });
        };
        img.src = imageURL;
    };

    handleDescriptorsCheck = event => {
        this.setState({ showDescriptors: event.target.checked });
    };

    resetState = () => {
        this.setState({ ...INIT_STATE });
    };
    render() {
        const {
            WIDTH,
            HEIGHT,
            imageURL,
            fullDesc,
            faceMatcher,
            showDescriptors,
            isModelLoaded,
            error,
            loading
        } = this.state;
        console.log(showDescriptors)

        // Display working status
        let status = <p>Status: Model Loaded = {isModelLoaded.toString()}</p>;
        if (!!error && error.toString() === 'TypeError: Failed to fetch') {
            status = (
                <p style={{ color: 'red' }}>Status: Error Failed to fetch Image URL</p>
            );
        } else if (loading) {
            status = <p style={{ color: 'blue' }}>Status: LOADING...</p>;
        } else if (!!fullDesc && !!imageURL && !loading) {
            if (fullDesc.length < 2)
                status = <p>Status: {fullDesc.length} Face Detect</p>;
            if (fullDesc.length > 1)
                status = <p>Status: {fullDesc.length} Faces Detect</p>;
        }

        // Loading Spinner
        let spinner = (
            <div className="sh_loading_api">
                <h3>Cargando...</h3>
            </div>
        );

        return (
            <div className="sh_container_api">
                {status}
                <div className="sh_container_rectangle"
                >
                    {!!imageURL ? (
                        <div>
                            <div style={{ position: 'absolute' }}>
                                <img className="sh_face sh__mtc" src={imageURL} alt="imageURL" />
                                <div>
                                    <input
                                        name="descriptors"
                                        type="checkbox"
                                        checked={this.state.showDescriptors}
                                        onChange={this.handleDescriptorsCheck}
                                    />
                                    <label>Show Descriptors</label>
                                </div>
                                {!!showDescriptors ? <ShowDescriptors fullDesc={fullDesc} /> : null}
                            </div>
                            {!!fullDesc ? (
                                <div style={{ position: 'absolute' }}>
                                    <DrawBox
                                        fullDesc={fullDesc}
                                        faceMatcher={faceMatcher}
                                        imageWidth={384}
                                        boxColor={boxColor}
                                    />
                                </div>
                            ) : null}
                        </div>
                    ) :  <div style={{ position: 'absolute' }}>

                        <img src="https://mcontreras.gob.mx/wp-content/uploads/2019/06/credencial_LMC_26-06-2019.png" className="sh_face" alt="Profile"/>
                        <p>VERIFICA TU IDENTIDAD</p>
                        <input
                            id="myFileUpload"
                            type="file"
                            onChange={this.handleFileChange}
                            accept=".jpg, .jpeg, .png"
                        />

                    </div>

                    }
                    {loading ? spinner : null}
                </div>
                <div>

                    <br />
                    {/*  <div className="URLInput">
            <input
              type="url"
              name="url"
              id="url"
              placeholder="Place your photo URL here (only .jpg, .jpeg, .png)"
              pattern="https://.*"
              size="30"
              onChange={this.handleURLChange}
            />
            <button onClick={this.handleButtonClick}>Upload</button>
          </div>*/}

                </div>
            </div>
        );
    }
}

export default withNamespaces()(RegisterPicture);
