import React, { Component } from 'react';
import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';
import Typography from '@material-ui/core/Typography/Typography';
import DialogBox from '../../Dialog/Dialog';
import './ListItem.css';
import * as actionTypes from '../../../store/actions';
import { connect } from 'react-redux';

class ListItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            showDialog: false
        }
    }

    onClosed = () => {
        this.setState({showDialog: false})
    }

    onOpened = () => {
        this.setState({showDialog: true});
    }

    render(){

        
        const dialog = <DialogBox handleClose={this.onClosed} open={this.state.showDialog} description={this.props.description} title={this.props.title} /> 
    
        return(
            <div onClick={() => window.open(this.props.link, "_blank")}>
                <div className="listItem">
                    <Card>
                        <CardContent>
                            <Typography component="h2" gutterBottom>
                                {this.props.title}
                            </Typography>
                            <Typography component="p" style={{fontSize: "12px"}} gutterBottom color="primary">
                                {this.props.link}
                            </Typography><br />
                        </CardContent>
                        
                    </Card>
                </div>

                {dialog}
            </div>
        );
    }
    
};

const mapStateToProps = state => {
    return{
        showDialog: state.listItem.showDialog
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onDialogClosed: () => dispatch({type: actionTypes.ON_DIALOGUE_CLOSED}),
        onDialogOpened: () => dispatch({type: actionTypes.ON_DIALOGUE_OPEN})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);