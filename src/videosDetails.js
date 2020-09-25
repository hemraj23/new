import React from 'react';

const VideoDetails = ({video}) =>{
    if(!video){
        return<div>Loading...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(videoSrc);

    return(
        <div className="videoContainer">
            <div className="row" >
                <div className="col-md-12">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe title="Video Title" class="embed-responsive-item" src= { videoSrc } allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            {/* <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p className="">{video.snippet.description}</p>
            </div> */}
        </div>
    );
}

export default VideoDetails;