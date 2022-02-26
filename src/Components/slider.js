import React from 'react';
import styled from 'styled-components';

const sliderThumbStyles = (props) => (`
  width: 10px;
  height: 10px;
  background: ${props.color};
  cursor: pointer;
  border-radius: 50%;
  outline: 5px solid #333;
  opacity: ${props.opacity};
  -webkit-transition: .2s;
  transition: opacity .2s;
`);

const Styles = styled.div`
  display: flex;
  align-items: center;
  color: #888;
  margin-top: 2rem;
  margin-bottom: 2rem;
  .value {
    flex: 1;
    font-size: 2rem;
  }
  .slider {
    flex: 6;
    -webkit-appearance: none;
    width: 100%;
    height: 15px;
    border-radius: 5px;
    background: #efefef;
    outline: none;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${props => sliderThumbStyles(props)}
    }
    &::-moz-range-thumb {
      ${props => sliderThumbStyles(props)}
    }
  }
`;

export default class Slider extends React.Component {
  state = {
    value: 50,
    value2: 30,
    value3: 20
  }

  handleOnChange = (e) => this.setState({ value: e.target.value })

  render() {
    return (
      <>
      <Styles opacity={this.state.value > 10 ? (this.state.value / 100) : .1} color={this.props.color}>
        <input type="range" min={0} max={100} value={this.state.value} className="slider" onChange={this.handleOnChange} />
        <div className="value">{this.state.value}</div>
      </Styles>
      <Styles opacity={this.state.value2 > 10 ? (this.state.value2 / 100) : .1} color={this.props.color}>
          <input type="range" min={0} max={100} value={this.state.value2} className="slider" onChange={this.handleOnChange} />
          <div className="value">{this.state.value2}</div>
        </Styles>
        <Styles opacity={this.state.value3 > 10 ? (this.state.value3 / 100) : .1} color={this.props.color}>
        <input type="range" min={0} max={100} value={this.state.value3} className="slider" onChange={this.handleOnChange} />
        <div className="value">{this.state.value3}</div>
      </Styles>
      </>
    )
  }
}