import React , {Component} from 'react';
import {Form,FormGroup,ControlLabel,Button,ButtonGroup} from 'react-bootstrap';


const Separator = () => {
    return <ControlLabel className='Stopwatch-number'> : </ControlLabel> ;
}

class Stopwatch extends Component {
    constructor(props){
        super(props);
        this.state = {
            tick : null,
            totalSeconds : 0
        };
    }

    incrementCount(){
        this.setState({
            totalSeconds : this.state.totalSeconds + 1
        });
    }

    getHours(){
        return parseInt(this.state.totalSeconds / 60/ 50) % 24 ;
    }

    getMinutes(){
        return parseInt(this.state.totalSeconds / 60) % 60;
    }

    getSeconds(){
        return this.state.totalSeconds % 60 ;
    }

    startCounter = () => {
        clearInterval(this.state.tick);
        this.setState({
            tick : null
        });
    }

    resumeCounter = () => {
        clearInterval(this.state.tick);
    }
}