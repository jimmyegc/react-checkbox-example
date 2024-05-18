import { useUsers } from "../hooks/useUsers"

export const Users = () => {

  const { users } = useUsers()

  return <>
    <h1>Users</h1>
    <div style={{ textAlign: 'start' }}>
      {users.length > 0 &&
        users.map((user) => (
          <div key={user.id}>
            <li>{user.name}</li>
            <li>{user.email}</li>
          </div>
        ))
      }
    </div>
  </>
}