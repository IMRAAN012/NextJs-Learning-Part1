import Link from 'next/link'
function Blog() {
  return(
    <div>
    <h1>
      WELCOME TO THE BLOG PAGE
    </h1>
      <Link href='/'><a> MY HOME </a></Link>
      <div>
        <Link href='BLOG/first_blog'><a> MY first blog </a></Link>
      </div>
        <div>
          <Link href='BLOG/second_blog'><a> MY Second blog </a></Link>
        </div>
    </div>
  )
}
export default Blog
