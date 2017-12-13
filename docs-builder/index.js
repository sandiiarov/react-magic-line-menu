import React, { Component } from 'react';
import { render } from 'react-dom';
import MagicLineMenu from '../src';

const mainStyle = {
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const itemStyle = {
  padding: 10,
  cursor: 'pointer',
};

class App extends Component {
  state = {
    active: 0,
  };

  handleClick = index => {
    this.setState({ active: index });
  };

  render() {
    return (
      <div style={mainStyle}>
        <MagicLineMenu
          active={this.state.active}
          onItemClick={this.handleClick}
        >
          <div style={itemStyle}>HOME</div>
          <div style={itemStyle}>VIDEOS</div>
          <div style={itemStyle}>PLAYLISTS</div>
          <div style={itemStyle}>CHANNELS</div>
          <div style={itemStyle}>DISCUSSION</div>
          <div style={itemStyle}>ABOUT</div>
        </MagicLineMenu>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
