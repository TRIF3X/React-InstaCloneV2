import React, { Component } from 'react';
import Header from './components/header/header.js'
import dummyData from './dummy-data/dummy-data.js'
import PostMap from './components/PostContainer/PostMap.js'

class App extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        search: '',
        data: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.setState({ data: dummyData })
  }

  handleChange(e) {
    console.log(e)
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div className="App">
          <header className="mainHeadBar">
            <Header
            search={this.state.search}
            handleChange={this.handleChange}
            />
          </header>
          <div>
            <PostMap 
              data={this.state.data}
            />
          </div>
      </div>
    );
  }
}

export default App;
