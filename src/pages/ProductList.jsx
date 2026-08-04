import SearchFilter from '../components/SearchFilter'
import CategoryFilter from '../components/CategoryFilter'
import { useCart } from '../context/CartContext'

const ProductList = () => {
  console.log(useCart())
  return (
    <>
    <div className="container mx-auto px-4 md:px-8 pt-8"></div>
      <SearchFilter />
      <CategoryFilter />
    </>
  )
}

export default ProductList