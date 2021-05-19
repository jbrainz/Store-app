import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import Message from '../components/Message'
import Pagination from '../components/Pagination'
import './index.home.css'
import Loader from '../components/Loader'
import {
  listProducts,
  deleteProduct,
  createProduct,
} from '../state/actions/productAction'
import { PRODUCT_CREATE_RESET } from '../state/constants/productConstants'

const ProductListScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  const productDelete = useSelector((state) => state.productDelete)
  const { success, loading: loadingDelete, error: errorDelete } = productDelete

  const productCreate = useSelector((state) => state.productCreate)
  const {
    success: createSuccess,
    loading: createLoading,
    error: errorCreate,
    product,
  } = productCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET })

    if (!userInfo.isAdmin) {
      history.push('/login')
    }
    if (createSuccess) {
      history.push(`/admin/product/${product._id}/edit`)
    } else {
      dispatch(listProducts('', pageNumber))
    }
  }, [dispatch, userInfo, history, success, createSuccess, product, pageNumber])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteProduct(id))
    }
  }
  const createProductHandler = () => {
    dispatch(createProduct())
  }
  return (
    <>
      <div
        className="columns is-align-items-center"
        style={{ marginTop: '10rem' }}
      >
        <div className="column">
          <h1>Products</h1>
        </div>
        <div className="column has-text-right">
          <button
            className={
              createLoading
                ? 'is-rounded button is-danger is-outlined is-loading'
                : 'is-rounded button is-danger is-outlined'
            }
            style={{ color: 'white' }}
            onClick={createProductHandler}
          >
            <i className="fas fa-plus"></i> Create Product
          </button>
        </div>
      </div>
      <div>
        {errorDelete && <Message error={errorDelete} />}
        {errorCreate && <Message error={errorCreate} />}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message error={error} variant="has-background-danger" />
        ) : (
          <div className="table-container">
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>PRICE</th>
                  <th>CATEGORY</th>
                  <th>BRAND</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id}>
                    <td>{product._id}</td>
                    <td>{product.name}</td>
                    <td>${product.price}</td>
                    <td>{product.category}</td>
                    <td>{product.brand}</td>
                    <td className="is-flex">
                      <NavLink
                        to={`/admin/product/${product._id}/edit`}
                        className=" is-flex"
                      >
                        <button className="brd button is-link is-outlined">
                          <i className="fas fa-edit"></i>
                        </button>
                      </NavLink>
                      <button
                        className={
                          loadingDelete
                            ? 'brd button is-danger is-outlined is-loading'
                            : 'brd button is-danger is-outlined'
                        }
                        onClick={() => deleteHandler(product._id)}
                      >
                        <i className={'fas fa-trash'}></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination pages={pages} page={page} isAdmin={true} />
          </div>
        )}
      </div>
    </>
  )
}

export default ProductListScreen
