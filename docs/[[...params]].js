import Link from 'next/link'

import { useRouter } from 'next/router'

function Doc() {
  const router = useRouter()
  const { params = [] } = router.query
  console.log(params)

  if (params.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params[0]} and concept {params[1]}
      </h1>
    )
  } else if (params.length === 1) {
    return <h1>Viewing docs for feature {params[0]}</h1>
  } else if (params.length === 3) {
    return <h1>Viewing docs for feature {params[0]} and concept {params[1]} and example {params[2]}</h1>
  }

  return(
    <div>
      <Link href='/'><a> MY HOME </a></Link>
    <h1>Docs Home Page</h1>
    <Link href='/docs/1/2/3'><a> WATCHING 3 </a></Link>
      <div>
        <Link href='/docs/1/2'><a> WATCHING 2 </a></Link>
          <div>
            <Link href='/docs/1'><a> WATCHING 1 </a></Link>
          </div>
      </div>
    </div>
  )
}

export default Doc
