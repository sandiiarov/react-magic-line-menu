import React, { Component } from 'react';
import { render } from 'react-dom';
import MagicLineMenu from '../src';
import Input from './Input';

const mainStyle = {
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const propsStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 100,
};

const headerStyle = {
  fontWeight: 100,
  textAlign: 'center',
  marginBottom: 50,
  borderBottom: '1px solid black',
};

const itemStyle = {
  padding: 10,
  cursor: 'pointer',
  fontSize: 20,
  fontWeight: 100,
};

class App extends Component {
  state = {
    active: 0,
    lineHeight: 1,
    lineColor: '#000000',
    duration: 500,
    easing: 'linear',
  };

  render() {
    return (
      <div style={mainStyle}>
        <div>
          <h1 style={headerStyle}>
            <span role="img" aria-label="Man Mage">
              🧙‍♂️
            </span>
            React Magic Line Menu
          </h1>
          <MagicLineMenu
            active={this.state.active}
            onItemClick={i => this.setState({ active: i })}
            lineHeight={this.state.lineHeight}
            lineColor={this.state.lineColor}
            duration={this.state.duration}
            easing={this.state.easing}
          >
            <div style={itemStyle}>HOME</div>
            <div style={itemStyle}>REACT</div>
            <div style={itemStyle}>MAGIC</div>
            <div style={itemStyle}>LINE</div>
            <div style={itemStyle}>MENU</div>
            <div style={itemStyle}>LONG NAME ITEM</div>
          </MagicLineMenu>
        </div>
        <div style={propsStyle}>
          <Input
            type="number"
            label="active: number"
            min="0"
            max="5"
            value={this.state.active}
            onChange={e => this.setState({ active: e.target.value })}
          />
          <Input
            type="text"
            disabled
            label="onItemClick: Function"
            value="(index) => this.setState({ active: index })"
          />
          <Input
            type="number"
            label="lineHeight?: number"
            min="0"
            value={this.state.lineHeight}
            onChange={e => this.setState({ lineHeight: e.target.value })}
          />
          <Input
            type="text"
            label="lineColor?: string"
            value={this.state.lineColor}
            onChange={e => this.setState({ lineColor: e.target.value })}
          />
          <Input
            type="number"
            label="duration?: number"
            min="0"
            value={this.state.duration}
            onChange={e => this.setState({ duration: e.target.value })}
          />
          <Input
            type="text"
            label="easing?: string"
            value={this.state.easing}
            onChange={e => this.setState({ easing: e.target.value })}
          />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
