import React from 'react';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button/Button';
import Dialog from '@material-ui/core/Dialog/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent/DialogContent';
import DialogActions from '@material-ui/core/DialogActions/DialogActions';;

const dialogBox = (props) => {

    return(
        <div>
            <Dialog open={props.open}>
                <DialogTitle id="customized-dialog-title" >
                    {props.title}
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                    {props.description}
                    </Typography>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={props.handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )

}

export default dialogBox;