import './App.css';
import Navbar from './component/Navbar';
import React, { Component } from 'react'
import News from './component/News';
import { 
  BrowserRouter as Router,
  Routes as Switch,
  Route 
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  apikey=process.env.REACT_APP_NEWS_API;

  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <div>
      <Router>
      <Navbar />
      
      <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
      <Switch>
          <Route exact path="/" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={5} country="in" category="general" page={1} />}></Route>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pageSize={5} country="in" category="entertainment" page={1} />}></Route>
          <Route exact path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey} key="business" pageSize={5} country="in" category="business" page={1} />}></Route>
          <Route exact path="/general" element={<News  setProgress={this.setProgress} apikey={this.apikey}key="general" pageSize={5} country="in" category="general" page={1} />}></Route>
          <Route exact path="/health" element={<News  setProgress={this.setProgress} apikey={this.apikey} key="health" pageSize={5} country="in" category="health" page={1} />}></Route>
          <Route exact path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey} key="science" pageSize={5} country="in" category="science" page={1} />}></Route>
          <Route exact path="/sport" element={<News setProgress={this.setProgress} apikey={this.apikey} key="sport" pageSize={5} country="in" category="sport" page={1} />}></Route>
          <Route exact path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey} key="technology" pageSize={5} country="in" category="technology" page={1} />}></Route>
      </Switch>
    </Router>
      </div>
    )
  }
}



