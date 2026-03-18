
import { useEffect, useState } from 'react'

export default function App() {
  const [users, setUsers] = useState([])
  const [name, setName] = useState("")

  async function load() {
    const res = await fetch("http://localhost:8000/users")
    setUsers(await res.json())
  }

  async function addUser() {
    await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({name})
    })
    setName("")
    load()
  }

  useEffect(() => { load() }, [])

  return (
    <div style={{padding:20}}>
      <h1>DIYHealth MVP</h1>
      <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name"/>
      <button onClick={addUser}>Add</button>

      <ul>
        {users.map(u => <li key={u.id}>{u.name}</li>)}
      </ul>
    </div>
  )
}
