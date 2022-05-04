import React, {useEffect, useState} from 'react';
import SearchBar from './SearchBar';
// import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {


  const [selectedVideo, setSelectedVideo] = useState(null);

  const [videos, search] = useVideos('initial value')

  // also change value of selectedVideo, to make sure the large video player always updates as user search different videos
  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos])
  // setSelectedVideo(response.data.items[0]);


  return (
    <div className="ui container">
        <SearchBar onFormSubmit={search}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
            </div>
          </div>
        </div>
      </div>
  )

};

export default App;