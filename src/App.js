import React, { Component } from 'react';
import './App.css';

import Diagram from './containers/Diagram/Diagram';
import Button from '@material-ui/core/Button';

class App extends Component {
  state = {
    diagram: [0, 1, 2, 3, 4, 5, 6]
  };

  constructor(props) {
    super(props);
    this.state = {
      diagram: this.getRandomArray()
    };
    
  }

  getRandomArray() {
    let tmp = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

    tmp = tmp.map(data => {
      return Math.floor(Math.random() * Math.floor(100));
    });
    return tmp;
  }

  createRandomDiagram = (type) => {
    this.setState({diagram: this.getRandomArray()});
  }

  render() {
    return (
      <div className="App">
        <Button variant="contained" onClick={() => this.createRandomDiagram()} color="secondary" className="refresh-button">Обновить</Button>
        <Diagram name="Statistic" data={this.state.diagram}/>
      </div>
    );
  }
}

export default App;
