import React from 'react';
import Typography from '@material-ui/core/Typography/Typography';

const blankQuery = (props) => {

    return(
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", height: "60vh" }}>
            <div style={{ textAlign: "center" }}>
                <p style={{ marginBottom: "15px" }}><span style={{ fontSize: "50px" }}>{props.emoji}</span></p>
                <Typography style={{fontSize: "24px"}} component="h1">
                    {props.message}
                </Typography>
            </div>
        </div>
    );

};

export default blankQuery;