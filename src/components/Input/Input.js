import React, { Component } from 'react';
import styled from 'styled-components';

const InputField = styled.input`
  width: 100%;
  height: 80px;
  border: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  font-size: 48px;
  line-height: 57px;
  color: #C4C4C4;
  text-indent: 45px;
  outline: none;
  margin-bottom: 20px;
`

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      type: '' ,
      value: '',
      onChange: '',
      placeholder: '',
      required: '',
      onClick: ''
    }
  };

  render() {
    return (
        <InputField
            id={this.props.name}
            name={this.props.name}
            type={this.props.type}
            value={this.props.value}
            onChange={this.props.onChange}
            placeholder={this.props.placeholder}
            required={this.props.required}
            onClick={this.props.onClick}
        />
    );
  }
}

export default Input;