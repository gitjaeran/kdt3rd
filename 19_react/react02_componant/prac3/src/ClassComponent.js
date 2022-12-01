import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ClassComponent extends Component {
  render() {
    const { text, valid } = this.props;

    return (
      <>
      <div>{text}</div>
      <br />
      <button onClick={ valid }>콘솔 메세지</button>
      </>
    )
  }
};

export default ClassComponent;