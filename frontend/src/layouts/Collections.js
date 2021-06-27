import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Product from "../components/Product";
import { listAllProducts } from "../state/actions/productAction";

const Collections = ({ match, history, value }) => {
  const productListAll = useSelector((state) => state.productListAll);
  const { products, loading, error } = productListAll;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listAllProducts());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message error={error} />
      ) : (
        <div className="column push-up is-mobile back">
          <h3 className="is-size-3 has-text-centered back">{value}</h3>
          <div className="columns is-multiline back">
            {products
              .filter((product) => product.collectionsData === value)
              .map((collection) => (
                <div key={collection._id} className="column">
                  <Product
                    history={history}
                    match={match}
                    product={collection}
                  />
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Collections;
