import './index.css'
import Header from '../Header'

const Products = () => (
  <>
    <Header />
    <div className="product-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
        alt="products"
        className="product-img"
      />
    </div>
  </>
)

export default Products
