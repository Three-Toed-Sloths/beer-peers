import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import './FollowAlert.css';

class FollowAlert extends Component {

    state = {
        show: false,
        message: ''
    };

    componentDidUpdate(prevProps) {
        if (this.props.status !== prevProps.status) {
            this.setState({
                show: this.props.status,
                message: this.props.message
            });
        }
    }

    render() {
        if (this.state.show) {
            return (
                <Alert className='followAlert' bsStyle={this.props.class} onDismiss={this.props.closeAlert}>
                    <h4>{this.state.message}</h4>
                </Alert>
            );
        }
    //   return (<h4>“He was a wise man who invented beer.” - Plato</h4>)
        return ''
    }
}

export default FollowAlert;