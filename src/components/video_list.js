import React from 'react';
import VideoListItem from './video_list_item';

//To get the properties from parent components, pass props as an argument
//to this component
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return(
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;
