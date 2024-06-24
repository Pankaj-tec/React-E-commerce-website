import React from 'react'
import Layout from '../../components/Layout/Layout'
import { Link } from 'react-router-dom'
Link
const Cart = () => {
  return (
    <Layout>
      <Link to="/cart">cart</Link>
    </Layout>
  )
}

export default Cart