import './book.css';
import PropsTypes from 'prop-types';
import book from './book.jpg';

const BookComponent = (props) => {

  const { title, author, price, type } = props;

  return (
    <div className='container'>
      <h1>이번주 베스트셀러</h1>
      <img className='bookImg' src={book} />
      <h2>{title}</h2>
      <div>저자: {author}</div>
      <div>가격: {price}</div>
      <div>분야: {type}</div>
    </div>
  );
};


export default BookComponent;