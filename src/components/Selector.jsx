import React from 'react';

const Selector = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired,
    type: React.PropTypes.string.isRequired,
    onSelected: React.PropTypes.func
  },

  getDefaultProps() {
    return {
      data: {},
      type: '',
      selected: null,
      onSelected: () => {}
    };
  },

  handleClick(i, e) {
    const {type, onSelected} = this.props;
    onSelected(type, i);
    e.preventDefault();
  },

  render() {
    const {data, type, selected} = this.props;

    return (
      <div className="selector">
        <span className="selector-label">{data.label}</span>
        <span className="selector-choiches">
          {data.values.map((value, i) => (
            <label key={i} onClick={this.handleClick.bind(this, i)}>
              <input type="radio" name={type} value={i} checked={selected === i}/>
              {value}
            </label>
          )
        )}
        </span>
        <span className="selector-selected">{selected !== null ? data.values[selected] : ''}</span>
      </div>
    );
  }
});

export default Selector;
