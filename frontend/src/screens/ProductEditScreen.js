import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Message from '../components/Message'
import {
  listProductDetails,
  updateProduct,
} from '../state/actions/productAction'

import FormContainer from '../components/FormContainer'
import './index.home.css'
import Loader from '../components/Loader'
import { PRODUCT_UPDATE_RESET } from '../state/constants/productConstants'

const ProductEditScreen = ({ match, history }) => {
  const productId = match.params.id

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('')
  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState('')
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const productUpdate = useSelector((state) => state.productUpdate)
  const {
    loading: updateLoading,
    error: updateError,
    success: successUpdate,
  } = productUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({
        type: PRODUCT_UPDATE_RESET,
      })
      history.push('/admin/productlist')
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId))
      } else {
        setName(product.name)
        setPrice(product.price)
        setImage(product.image)
        setBrand(product.brand)
        setCategory(product.category)
        setCountInStock(product.countInStock)
        setDescription(product.description)
      }
    }
  }, [dispatch, product, history, productId, successUpdate])

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
      const { data } = await axios.post('/api/upload', formData, config)
      setImage(data)
      setUploading(false)
    } catch (error) {
      console.log(error)
      setUploading(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        image,
        brand,
        category,
        countInStock,
        description,
      }),
    )
  }

  return (
    <>
      <Link to="/admin/productlist" className="button is-light">
        Go Back
      </Link>
      <FormContainer>
        <h1 className="is-size-3">Edit Product</h1>
        {updateLoading && <Loader />}
        {updateError && (
          <Message variant="has-background-danger" error={updateError} />
        )}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message error={error} variant="has-background-danger" />
        ) : (
          <form className="form-container  mt-6" onSubmit={submitHandler}>
            <div id="name" className="field">
              <div className="control">
                <input
                  className="input extends-input"
                  type="name"
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div id="price" className="field">
              <div className="control">
                <input
                  className="input extends-input"
                  type="number"
                  placeholder="Price"
                  aria-placeholder="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
            </div>
            <div id="description" className="field">
              <div className="control">
                <textarea
                  className="textarea extends-input is-hovered"
                  type="text"
                  placeholder="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>
            </div>
            <div id="brand" className="field">
              <div className="control">
                <input
                  className="input extends-input"
                  type="text"
                  placeholder="brand"
                  aria-placeholder="brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  required
                />
              </div>
            </div>
            <div id="category" className="field">
              <div className="control">
                <input
                  className="input extends-input"
                  type="text"
                  placeholder="category"
                  aria-placeholder="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                />
              </div>
            </div>
            <div id="image-file" className="file has-name">
              <label className="file-label">
                <input
                  className="file-input"
                  onChange={uploadFileHandler}
                  type="file"
                  name="image"
                  id="image-file"
                />
                <span className={uploading ? 'is-loading' : 'file-cta'}>
                  <span className="file-icon">
                    <i className="fas fa-upload"></i>
                  </span>
                  <span className="file-label">Choose file</span>
                </span>
                <span className="file-name">{image}</span>
              </label>
            </div>
            <div id="countInStock" className="field">
              <div className="control">
                <input
                  className="input extends-input"
                  type="number"
                  placeholder="Count in Stock"
                  value={countInStock}
                  onChange={(e) => setCountInStock(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button
                  type="submit"
                  disabled={loading}
                  className={
                    loading
                      ? 'button disabled is-loading is-link is-fullwidth is-rounded'
                      : 'button is-link is-fullwidth is-rounded'
                  }
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        )}
      </FormContainer>
    </>
  )
}

export default ProductEditScreen
