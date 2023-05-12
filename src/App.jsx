import "./App.css";
import Card from "./components/card/Card";
import Counter from "./components/counter/Counter";
import products from "./data";
console.log(products);

function App() {
  return (
    <>
      {/* // <div className="grid grid-cols-4 gap-2">
    //   {products.map((product) => {
    //     return (
    //       <Card
    //         key={product.id}
    //         title={product.name}
    //         image={product.image}
    //         desc={product.desc}
    //       />
    //     );
    //   })} */}
      <Counter></Counter>
    </>
  );
}

export default App;
