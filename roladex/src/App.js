import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav'
import CardHeader from './Components/CardHeader'
import CardInformation from './Components/CardInformation'
import CardInformation2 from './Components/CardInformation2'
import Footer from './Components/Footer'
import data from './data'

class App extends Component {
  constructor() {
    super()
    this.state = {
      personInfo: data,
      index: 0
    }
  }
  incrementIndex = ()  => {
    let copyIndex = this.state.index
    if (this.state.index === 24) {
      this.setState({index:0})
    } else {
      copyIndex ++
      this.setState({index:copyIndex})
    }
    
  }

  decreaseIndex = () => {
    let copyIndex = this.state.index
    if (this.state.index === 0) {
      this.setState({index:this.state.personInfo.length -1})
    } else{
      copyIndex --
      this.setState({index:copyIndex})
    }
  }
  
    render() {
      console.log(this.state.personInfo)
      return (
        <div className="App">
          <Nav />
          <div className="container">
            <div className="card">
              <CardHeader
                index ={this.state.index}
                personName ={this.state.personInfo[this.state.index].name}
                indexLength={this.state.personInfo.length} />
    
              <CardInformation 
               index ={this.state.index}
               personInfo={this.state.personInfo[this.state.index]} />
             
              <CardInformation2 
               index ={this.state.index}
               favMovies={this.state.personInfo[this.state.index].favoriteMovies}/>
    
            </div>
            <Footer
              addIndex={this.incrementIndex}
              minusIndex={this.decreaseIndex}
               />
          </div>
        </div>
      );
    }
}
export default App;
