// import './VideoItem.css';
import React from 'react';

const VideoItem = ({video, onVideoSelect}) =>{
    return(
        <div className="col col-md-6 col-lg-3">
            <div onClick={()=>onVideoSelect(video)} className="video-item">
                <img alt={video.snippet.title} className ="img-fluid" src={video.snippet.thumbnails.medium.url} />
                <div className ="content">
                    <div className ="header">{video.snippet.title}</div>
                </div>
            </div>
        </div>
    );
}
export default VideoItem;