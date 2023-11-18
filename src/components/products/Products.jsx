import { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import PRODUCTS from "../../product.json";

const Products = () => {
  let location = useLocation();
  let [products, setProducts] = useState(PRODUCTS);

  return (
    <main>
      <div className="products">
        {products.map.length > 0 &&
          products.map(product => (
            <Fragment key={product.id}>
              <div className="container">
                <figure>
                  <picture>
                    <img
                      src={product.image}
                      alt={product.title}
                      height={150}
                      width={150}
                    />
                  </picture>
                </figure>
              </div>
            </Fragment>
          ))}
      </div>
    </main>
  );
};

export default Products;
