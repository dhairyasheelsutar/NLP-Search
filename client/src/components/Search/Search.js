import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField/TextField';
import List from '../List/List';
import BlankQuery from '../BlankQuery/BlankQuery';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from '@material-ui/core';
import Select from '@material-ui/core/Select/Select';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import FormControl from '@material-ui/core/FormControl/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText/FormHelperText';
import './Search.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';


class Search extends Component {
   
    onSubmitForm = ($event) => {
        $event.preventDefault();

        if(this.props.value === ""){
            return;
        }

        this.props.onSubmitFormHandler();

        const data = {
            query: this.props.value
        };

        axios.post("http://localhost:8000/", data).then(response => {

            let projects = [];
            console.log(response);

            for(let i=0; i<response['data']['project'].length; i++){
                
                projects.push({
                    id: response['data']['project'][i],
                    title: response['data']['project'][i],
                    link: 'http://localhost:8000/NLP/reports/' + response['data']['file'][i]
                });
            }
        
            if(projects.length === 0){
                this.props.onNoResultsFound();
            }else{
                const response = projects;
                const iter = response.length >= this.props.selectBox.value ? this.props.selectBox.value : response.length;
                const selectedProjects = response.slice(0, iter);
                this.props.onResultsFound(projects, selectedProjects);
            }

            
        }).catch(error => {
            console.log(error);
            this.props.onRequestFailed();
        });
    }


    onChangeHandlerCount = ($event) => {

        const iter = this.props.response.length >= $event.target.value ? $event.target.value : this.props.response.length;
        const projects = this.props.response.slice(0, iter);
        this.props.onChangeSelectHandler(projects, $event.target.value);

    }

    render() { 

        let list = null;
        if(this.props.projects === null){
            list = <BlankQuery emoji="&#128515;" message="Hey there! Please search for project." />
        }else{
            list = <List projects={this.props.projects} />
        }

        if(this.props.requestFailed){
            list = <BlankQuery emoji="&#129301;" message="Something went wrong!" />
        }

        if(this.props.showProgress){
            list = (
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", height: "60vh"}}>
                    <div style={{textAlign: "center"}}>
                        <CircularProgress thickness="4.5" size="60px" variant="indeterminate" />
                    </div>
                </div>
            )
        }

        if(this.props.noResult){
            list = <BlankQuery emoji="&#128517;" message="No results found!" />
        }

        let searchQuery = null;
        if(this.props.searched){
            searchQuery = (
                <div className="d-flex justify-content-between">
                    <Typography component="h4" gutterBottom>
                        You searched for: <strong>{this.props.value}</strong>
                    </Typography>

                    <FormControl className="select">
                        <Select  
                                value={this.props.selectBox.value}
                                onChange={this.onChangeHandlerCount}>
                            <MenuItem value={5}>Five</MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={15}>Fifteen</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                        </Select>
                        <FormHelperText>Limit search results</FormHelperText>
                    </FormControl>
                </div>
            );
        }

        return ( 

            <div>
                <form onSubmit={this.onSubmitForm}>
                    <TextField
                        fullWidth
                        style={{ marginTop: "40px" }}
                        margin="normal"
                        type="search"
                        placeholder="Enter query"
                        label="Search"
                        variant="outlined"
                        value={this.props.value}
                        onChange={this.props.onChangeInputHandler}
                        
                    />
                </form><br />
                {searchQuery}
                {list}
            </div>
         ); 
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.search.value,
        projects: state.search.projects,
        response: state.search.response,
        requestFailed: state.search.requestFailed,
        showProgress: state.search.showProgress,
        noResult: state.search.noResult,
        searched: state.search.searched,
        selectBox: state.search.selectBox
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeInputHandler: ($event) => dispatch({type: actionTypes.INPUT_CHANGE, value: $event.target.value}),
        onSubmitFormHandler: () => dispatch({type: actionTypes.FORM_SUBMITTED}),
        onNoResultsFound: () => dispatch({type: actionTypes.NO_RESULTS_FOUND}),
        onResultsFound: (response, projects) => dispatch({type: actionTypes.ON_RESULTS_FOUND, value: {response: response, projects: projects}}),
        onRequestFailed: () => dispatch({type: actionTypes.ON_REQUEST_FAILED}),
        onChangeSelectHandler: (projects, value) => dispatch({type: actionTypes.SELECT_CHANGE, value: {projects: projects, value: value}})
    };
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Search);


