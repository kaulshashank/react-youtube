import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Search from 'youtube-api-search'; // npm module that works with Youtube Data API
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyCy-PBJaKDZwIKkHLBHfLYNnVtpyIr55cY";

// Function-based Component
// Function-based components do not contain a state
// const App = () => {
//   return (
//   <div>
//     <SearchBar />
//   </div>
//   );
// }

// Class-based Component
// Each class based coponent must have render()
// Each class based component has its own 'state' property
// State is managed within the class's constructor
// Change states within handlers only, not implicitly
// Handlers must be bound to the class using this.<handler>.bind(this)
// setState() lets you change the state
// Properties are available as an object within class based components
// ^similar to state
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.onVideoSelect = this.onVideoSelect.bind(this);

    this.videoSearch('runescape');
  }
  // Pass properties between components as shown in the VideoList comp.
  render() {
    const typed_term = _.debounce((term)=> { this.videoSearch(term)}, 300);

    return(
      <div>
        <SearchBar onSearchTermChange={typed_term}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }

  videoSearch(term) {
    Search({key: API_KEY, term: term}, (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }

  // Handler for selecting video
  onVideoSelect(event) {
    this.setState({selectedVideo: event});
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
