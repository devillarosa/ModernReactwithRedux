import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar.js'
import VideoList from './components/video_list.js'
const API_KEY = '' //Insert API_Key here


class App extends Component{
    constructor(props){
        super(props);
        
        this.state={ videos: [] };
        YTSearch(
                {key: API_KEY, term: 'surfboards'},
                (videos) => {this.setState( { videos }); // advance technique equivalent to {videos:videos},
                                                         // only if the variable is named the same as the key
                }
                );
    }

    render() {
        return (
                <div>
                    <SearchBar />
                    <VideoList videos={this.state.videos}/>
                </div>
               );
    }
}


// Create an instance of App and place it on the DOM's location
ReactDOM.render(<App />, document.querySelector('.container')); 
//Equivalent to ReactDOM.render(<App></App>, document.querySelector('.container'));
