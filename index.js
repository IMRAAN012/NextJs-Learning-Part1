import Link from 'next/link'

function Home() {
  return(
    <div>
    <h1> HOME PAGE </h1>
      <Link href='/BLOG'><a> MY BLOG </a></Link>
      <div>
        <Link href='/docs'><a> MY DOCUMENTS </a></Link>
      </div>
    </div>




  )
}
export default Home
