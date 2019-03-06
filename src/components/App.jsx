import VideoList from './VideoList.js'
import VideoPlayer from './VideoPlayer.js'
import exampleVideoData from "../data/exampleVideoData.js";
import Search from './Search.js'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      current: exampleVideoData[0],
      videos: exampleVideoData,
    };
    this.handleTitleClick = this.handleTitleClick.bind(this)
  }

  handleTitleClick(video){
    this.setState({
      current: video
    })
    
  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.current} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} handleClick={this.handleTitleClick } />
          </div>
        </div>
      </div>
    )
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
