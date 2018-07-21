import React, { Component } from "react";
import "./VideoBackground.css"

class VideoBackground extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://www.videvo.net/videvo_files/converted/2015_05/preview/FoodPack1_30_Videvo.mov44567.webm'
        }
    }

    render () {
        return (
            <video id="background-video" loop autoPlay muted className="fullscreen">
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        )
    }
};

export default VideoBackground;