import ProductItem from './ProductItem';

const ProductList = (props) => {
  const { products } = props;
  console.log('ProductList >>> ');
  console.log(products); // []

  return (
    <div className="ProductList">
      {products.map((product) => {
        // product: products 배열의 원소
        return <ProductItem key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductList;