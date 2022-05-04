import React from 'react';

import VideoItem from './VideoItem'

class VideoList extends React.Component {

  // the following contains 3 ways of writing this component, two class components, one function component

  // method 1: doesn't work
  // constructor(props) {
  //   super(props);

  //   this.videolist = this.props.videos.map(video => {                   // method 1 doesn't work since looks like .map function running slower than render function,
  //                                                                       // so the right videolist value cannot pass to render function before render function get invoked.
  //                                                                       // We need to put .map function directly into render function (method 2)
  //     return <VideoItem key={video.id.videoId} video={video} />
  //   });
  // }

  // render() {
  //   console.log('ll', this.videolist)
  //   return (
  //     <div>
  //       {this.videolist}
  //     </div>
  //   )
  // }

  // NEW ADDED Method 4: return .map function directly in another function (renderVideos), and renderVideos function could be both arrow function and traditional function
  // renderVideos = () => {
  //   return this.props.videos.map(video => {
  //     return <VideoItem key={video.id.videoId} video={video} />
  //   });
  // }

  // render() {
  //   console.log('ll', this.videolist)
  //   return (
  //     <div>
  //       {this.renderVideos()}
  //     </div>
  //   )
  // }

  // Method 5: works well
  render() {
    const videosList = this.props.videos.map(video => {
      return <VideoItem key={video.id.videoId} onVideoSelect={this.props.onVideoSelect} video={video} />
      }
    )

    return (
      <div className="ui relaxed divided list">
        {videosList}
      </div>
    )
  }


  //method 2: works well
  // render() {
  //   return (
  //     <div className="ui relaxed divided list">
  //       {
  //         this.props.videos.map(video => {
  //           return <VideoItem key={video.id.videoId} onVideoSelect={this.props.onVideoSelect} video={video} />
  //           }
  //         )
  //       }
  //     </div>
  //   )
  // }
};

// method 3: functional component works well
// const VideoList = (props) => {
//   const videos = props.videos.map(video => {
//           return <VideoItem key={video.id.videoId} video={video} />})

//   return <div>
//     {videos}
//   </div>
// }

export default VideoList;