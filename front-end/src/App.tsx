
import './App.css'

function App() {
  type User = {
    name: string;
    age: number;
  };


  const user: User = {
    name: "Alice",
    age: 25,
  };

  return (
    <>
    <h1 className="text-3xl font-bold underline text-red-500">
      Hello {user.name}
    </h1>
    </>
  )
}

export default App
