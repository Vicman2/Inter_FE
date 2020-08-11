import React, {Component} from 'react';
import axios from 'axios'
import './App.css';
import Header from './component/Header/Header';
import Nav from './component/Nav/Nav';
import Products from './container/Products/products';

class  App extends Component  {
  state = {
    products : []
  }
  componentDidMount(){
    axios.get('https://tradex.itskillscenter.com/api/categories/groceries')
    .then(res => {
      console.log(res.data)
    })
  }
  render(){
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <main className="App_Dash">
          <Nav />
          <Products />
        </main>
      </div>
    );
  }
}

export default App;