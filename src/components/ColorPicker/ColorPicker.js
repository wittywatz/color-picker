import React, { Component } from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ColorWrapper = styled.input`
  margin: 1rem 1rem;
`;
const Header = styled.h1`
  font-style: italic;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;
export class ColorPicker extends Component {
  state = { color1: '#a46060', color2: '#c52020', copied: false };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { color1, color2 } = this.state;
    return (
      <div
        onClick={() => this.setState({ copied: false })}
        style={{
          backgroundImage: `linear-gradient(${color1},${color2})`,
          margin: '3rem 0',
          padding: '2rem 0',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
        }}
      >
        <Header>BACKGROUND COLOR PICKER</Header>
        <p style={{ marginBottom: '0px', padding: '0px' }}>Choose Background</p>
        <div>
          <ColorWrapper
            color1
            onChange={this.handleChange}
            type="color"
            value={this.state.color1}
            name="color1"
          />
          <ColorWrapper
            color2
            type="color"
            onChange={this.handleChange}
            value={this.state.color2}
            name="color2"
          />
        </div>
        <div onClick={(e) => e.stopPropagation()}>
          <CopyToClipboard
            text={`linear-gradient(${color1},${color2})`}
            onCopy={() => this.setState({ copied: !this.state.copied })}
          >
            <Header as={'h4'}>linear-gradient({`${color1},${color2}`})</Header>
          </CopyToClipboard>
          {this.state.copied ? (
            <span style={{ color: 'white' }}>Copied.</span>
          ) : null}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
