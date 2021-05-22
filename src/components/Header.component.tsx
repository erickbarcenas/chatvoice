import React from 'react';
import { Link, useHistory } from "react-router-dom";

import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from "@material-ui/core/IconButton";

const HeaderComponent = () => {
    //const history = useHistory();
    return(
        <div className="header">

            <Link to="/chatbot">
                <IconButton>
                    <ChatBubbleIcon className="header_icon" fontSize="large" />
                </IconButton>
            </Link>

            <Link to="/app">
                <img
                    className="header_logo"
                    src="images/logo.jpg"
                    alt="l52mas"
                />
            </Link>



            <Link to="/logout">
                <IconButton>
                    <ExitToAppIcon className="header_icon" fontSize="large" />
                </IconButton>
            </Link>
        </div>
    );
}

export default HeaderComponent;
