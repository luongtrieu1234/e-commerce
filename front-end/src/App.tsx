import "./App.css";
import Home from "./features/Home";

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
      <h1 className="text-3xl font-bold text-red-500">Hello {user.name}</h1>
      <Home />
    </>
  );
}

export default App;
