import React, {Component} from 'react';

import Counter from './components/Counter';

class App extends Component {

  state = {
    count: 0
  };

  render() {
    const {count} = this.state;

    return (
      <div className="container">
        <Counter
          count={count}
          onCountDown={() => this.setState({count: count + 1})}
          onCountUp={() => this.setState({count: count - 1})}
        />
      </div>
    );
  }
}

export default App;
