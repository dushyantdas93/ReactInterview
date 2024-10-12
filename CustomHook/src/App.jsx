import useData from "../customhook/useData.jsx";
import Home from "./pages/Home.jsx";

function App() {
  const { data, loading, error } = useData(
    "https://dummyjson.com/products/category-list"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(typeof data);

  return (
    <div>
      <h1>Data from API:</h1>
      <pre>{JSON.stringify(data)}</pre>
      <Home />
    </div>
  );
}

export default App;
