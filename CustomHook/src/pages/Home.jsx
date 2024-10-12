import useData from "../../customhook/useData";


function Home() {
 
  const { data,loading,error } = useData("https://dummyjson.com/products");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const products = data.products

  console.log(typeof products );

  return (
    <div>
      <h1>Data from API:</h1>
      {/* <pre>{data.map((item, idx) => {
        return <li>{item}</li>
      })}</pre> */}

      {products.map((item,idx)=>{
        return (
          <li key={idx}>
            {" "}
            {item.id} {item.description} {item.price} {item.category  }{" "}
          </li>
        );
      })}
    </div>
  );
}

export default Home;
