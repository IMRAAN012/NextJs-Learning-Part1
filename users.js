import User from './/component/user'

function UserList({ users }) {
  return (
    <>
      <h1>List of users</h1>
      {users.map(user => {
        return (
          <div key={user.id}>
            <User user={user} />
          </div>
        )
      })}
    </>
  )
}

export default UserList
//It will run at build time in production and inside the function you can fetch external GetData
//and send it as props to the page.
export async function getStaticProps() {
//Inside the function we can make api request to the jsonplaceholder api for that we are using fetch api
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
//Then,we are converting the above response into json.
  const data = await response.json()
  //   console.log(data)

  return {
    props: {
      users: data
    }
  }
}
