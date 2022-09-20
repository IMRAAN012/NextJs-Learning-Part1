import {useRouter} from 'next/router'

function ProductDetail () {
  const router = useRouter()
  const productid = router.query.productid
  return <h1> DETAILS ABOUT PRODUCT
              {productid} </h1>
}

export default ProductDetail
