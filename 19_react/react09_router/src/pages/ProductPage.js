// import { useEffect, useState } from "react";
import ProductList from "./ProductList";

const ProductPage = (props) => {
  //구조분해할당
 const {products} = props;

 console.log(props.products[0].name);

  return (
    <main className="ProductPage">
      <div>여기는 상품 목록</div>
      <ProductList products={products} />
    </main>
  )
}

export default ProductPage;