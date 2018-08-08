import React, { Component } from 'react';
import {  Button, Overlay, Tooltip } from 'react-bootstrap';
import './LikeBtn.css'

class LikeBtn extends Component {

    state = {
        show: this.props.show,
        message: this.props.message
    }

    target = null;
  
    componentDidUpdate(prevProps) {
        if (this.props.show !== prevProps.show) {
            this.setState({
                show: this.props.show,
                message: this.props.message
            });
        }
    }

    render() {

        if(this.props.brewerId === sessionStorage.getItem('userID')){
            return ''
        }
        return (
            <div>
                <Button ref= {button => {this.target = button;}} onClick={this.props.addLike}>
                    Like
                </Button>
                <Overlay target={this.target} show={this.state.show} placement='right'>
                    <Tooltip id='overload-right' className='overlayAlert' >{this.state.message}</Tooltip>
                </Overlay>
            </div>
        );
    }
}
  
export default LikeBtn;