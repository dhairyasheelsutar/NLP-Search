import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './pict_logo.png';

const header = (props) => {
    return(
        <div style={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar style={{display: "flex", justifyContent: "space-between"}}>
                    <img width="100" alt="Pict logo" src={logo} />
                    <Typography variant="h6">
                        <Link className="link" to="/">Document retrieval using NLP.</Link>       
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default header;