const App = () => {
  const email='anapliotisnick@gmail.com'
  const x=35
  const names=['Nick','Anna','John']
  
  return (
    <div>
      <div>Hello, {email}</div>
      <p>You are {x} years old.</p>
      <ul>
        {names.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App

// rafce