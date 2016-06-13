import React from 'react';
import Selector from './Selector.jsx';

const App = React.createClass({
  getInitialState() {
    return {
      selected: {}
    };
  },

  handleSelected(type, i) {
    const {selected} = this.state;
    selected[type] = i;

    this.setState({
      selected: selected
    });
  },

  render() {
    const {data} = this.props;
    const {selected} = this.state;

    return (
      <div>
        <header>
          <h1>Master Crime</h1>
        </header>
        <section>
          {Object.keys(data).map((key, i) => <Selector key={i} data={data[key]} type={key} selected={selected[key]} onSelected={this.handleSelected}/>)}
        </section>
        <div className="results">
          {Object.keys(data).length === Object.keys(selected).length ?
            Object.keys(data).map((key, i) => [data[key].label, data[key].values[selected[key]], ' '].join(' ')) : ''}
        </div>
      </div>
    );
  }
});

export default App;
