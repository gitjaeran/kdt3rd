import {Link} from 'react-router-dom'

const ProductItem = (props) => {
  const { product } = props;
  // console.log('ProductItem >>> ');
  // console.log(product);

  return (
    <Link className="ProductItem" to={'/product/' + product.id}>
    <ul>
      <li>상품명: {product.name}</li>
      {/* 상세설명을 80자로 제한 + 유저가 뒷내용이 더 있음을 알아볼 수 있도록 '...'추가 */}
      <li>상세설명: {product.body.slice(0, 80)}...</li>
    </ul>
    </Link>
  );
};

export default ProductItem;