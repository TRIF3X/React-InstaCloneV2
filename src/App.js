import React, { Component } from 'react';
import Header from './components/header/header.js'
import dummyData from './dummy-data/dummy-data.js'
import PostMap from './components/PostContainer/PostMap.js'

class App extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        search: '',
        data: [],
        searchData: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.setState({ data: dummyData })
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
    this.searchUser(this.state.search, this.state.data)
  }

  searchUser(name, data) {
    for (var i=0; i < data.length; i++) {
      if (data[i].username.includes(name)) {
          this.state.searchData.push(data[i]);
          if(this.state.searchData.includes(data[i], 1)) {
            this.state.searchData.splice(0, 1)
          }
      }
    }
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
              data={this.state.search === '' ? this.state.data: this.state.searchData}
            />
          </div>
      </div>
    );
  }
}

export default App;
