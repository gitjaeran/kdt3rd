// 함수형
// function FuncComponent () {
//   const teacher = '션'

//   return (
//     <div>
//       <h1>Hi! {teacher}</h1>
//       <p>여기는 Functional Component</p>
//     </div>
//   )
// }

// export default FuncComponent;


//
import PropTypes from 'prop-types';


const FuncComponent = (props) => {
  // 왜 props로 가져와야 할까?
  // console.log(props); //{name: 'XXX'} = 객체로 찍힘

  const { name, student } = props;

  const teacher = '션'

  return (
    <div>
      <h1>Hi! {teacher}</h1>
      <p>여기는 Functional Component</p>

      {/* App.js(부모)에서 name 추가했던거 자식으로 가져오기! */}
      <p>
        <b>{props.name}</b> 수업시간! 학생수는 <b>{student}</b>명입니다!
        </p>
    </div>
  );
};

FuncComponent.defaultProps = {
  name: '얏호',
  default: 0,
};

//대소문자 구별 주의
FuncComponent.propTypes = {
  name: PropTypes.string,
  student: PropTypes.number,
};

export default FuncComponent;
