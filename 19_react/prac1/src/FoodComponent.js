import './FoodComponent';
import './Food.css'

const FoodComponent = (props) => {
  const food = '복숭아'

  return (
    <h3 className='props'>맛있는 {food}</h3>
  )
}


FoodComponent.defaultProps = {
  name: '복숭아',
  // default: '복숭아',
};

export default FoodComponent;