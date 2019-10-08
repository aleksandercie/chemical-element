import React from 'react';
import './App.css';
import ListWrapper from './Components/ListWrapper/ListWrapper';
import SearchBox from './Components/SearchBox/SearchBox';
import { elements } from './data/elements';

class App extends React.Component {
  state = {
    elements: [...elements],
    searchElement: ''
  }

  handleInput = (e) => {
    this.setState({
      searchElement: e.target.value,
    })
  }

  render() {

    let filterElements = this.state.elements.filter((element)=>{
      return element.name.toLowerCase().includes(this.state.searchElement.toLowerCase());
    })

    return (
      <div className="app-component">
      <SearchBox handleInput={this.handleInput}/>
      <ListWrapper filterElements={filterElements}/>
      </div>
    )
  }
}
export default App;
