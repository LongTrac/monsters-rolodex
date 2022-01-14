import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';



class App extends Component{

  constructor(){
    super();

    this.state = {
      monsters : [ ],
      searchField : ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()
      .then(users => this.setState({ monsters: users }))
    );
  }

  handleChangeMethod = e => {
    this.setState({searchField : e.target.value});
  };

  //Note for the search bar: everytime we type in something, a syntethic event will trigger causing the 
  // render method to rerun. This results in the change of the filterMonster list everytime 
  render(){
    // === const monster = this.state.monster and const searchField = this.state.searchField
    const {monsters, searchField} = this.state; 
    const filterMonster = monsters.filter( 
        monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      <div className="App">

        <h1>Robots Rolodex</h1>
        <SearchBox
          placeholder='search robot' 
          handleChange={this.handleChangeMethod}
        />  
        
        {/* call the card list component and pass the current state monsters list in as a prop */}
        <CardList monsters = {filterMonster}/> 

      </div>
    );
  }
}
export default App;
