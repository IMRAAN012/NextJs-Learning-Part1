import {useRouter} from 'next/router'

function ReviewDetail () {
  const router = useRouter()
  const {productid,reviewid} = router.query
  return <h1> DETAILS ABOUT PRODUCT {productid}
              AND REVIEW IS {reviewid} </h1>
}

export default ReviewDetail
