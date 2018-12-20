import React, {Component} from 'react';

import CounterProvider from './components/Counter';
import Page from "./components/Page";

class App extends Component {
  render() {
    return (
      <CounterProvider>
        <Page/>
        <CounterProvider.Consumer>
          {counter =>
            <div className="counter">
              <button onClick={counter.decrement}>-</button>
              <span>{counter.count}</span>
              <button onClick={counter.increment}>+</button>
            </div>

          }
        </CounterProvider.Consumer>
      </CounterProvider>
    );
  }
}

export default App;
