import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
      // this.handleClick = this.handleClick.bind(this);
      this.state= {
        loading: true,
        person: null
      };
  }
  handleClick() {
    let content= document.querySelector('#content')
    console.log('The link was clicked.', this);
}
  async componentDidMount(){
    const url = 'https://api.randomuser.me/';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({person: data.results[0], loading:false});
    console.log(data.results)
  }

render(){
  return (
    <div className="App">
        {this.state.loading || !this.state.person? <div>loading...</div> :
      <div>
        <h2>{this.state.person.name.title}</h2>
        <h3>{this.state.person.name.first}</h3>
        <h3>{this.state.person.name.last}</h3>
        <img src={this.state.person.picture.large} />
      </div>
      }

      </div>
    );
  }
}
export default App;
