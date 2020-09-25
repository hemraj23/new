import React from 'react';
import './App.css';
import SeachBar from './SearchBar';
import YouTube from './apis/Youtube';
import VideoList from './videoList';
import VideoDetails from './videosDetails';

class App extends React.Component{

  state = {videos : [], selectedVideo:null }

    componentDidMount(){
      this.onTermSubmit('google pie chart ');
    }

    onTermSubmit = async (term) =>{
      const response = await YouTube.get('search/',{
          params:{
              q:term
          }
      });
    
      //console.log(responce.data.items);
    
      this.setState({ 
          videos : response.data.items,
          selectedVideo : response.data.items[0]
      });
    } 

    onVideoSelect = (video) =>{
        this.setState({selectedVideo:video});
    }

  render(){
    return(
      <div className="App">
        <header>
          <div className="container-fluid"> 
            <SeachBar onFormSubmit={this.onTermSubmit} />
          </div>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="relativelistMain">
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
              </div>
            </div>
            
            <div className="col-md-12">
              <div className="latestEpisodeMain">
                <h4>Latest Episodes</h4>
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
