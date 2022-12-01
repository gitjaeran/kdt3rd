import React from 'react';

class ClassComponent extends React.Component {
  render() {
    const { name, student } = this.props;
    const teacher = 'Sean';

    return (
      <>
      <h1>Hello, {teacher}</h1>
      <p>여기는 Class Component!</p>
      <p>
        {this.props.name} 수업시간! {this.props.student}명입니다.
      </p>
      </>
    );
  }

  // static defaultProps =  {
  //   name: '얏호',
  // };

  // static propsTypes = {
  //   name: PropsTypes.string,
  //   student: PropsTypes.number.isRequired, 
  // };

}

ClassComponent.defaultProps = {
  name: '얏호',
};



export default ClassComponent;