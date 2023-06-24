import { useState } from "react";
import "./App.css";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "🥑", count: 0 },
    { id: 2, name: "🍇", count: 0 },
    { id: 3, name: "🥝", count: 0 }
  ]);

  function productCountIncrement(productID) {
    // Clone
    const productsClone = [...products];
    const index = productsClone.findIndex((p) => p.id === productID);

    // Edit
    productsClone[index] = { ...productsClone[index] };
    productsClone[index].count++;

    // Set
    setProducts(productsClone);
  }

  function productCountDecrement(productID) {
    // Clone
    const productsClone = [...products];
    const index = productsClone.findIndex((p) => p.id === productID);

    // Edit
    productsClone[index] = { ...productsClone[index] };
    if (productsClone[index].count > 0) {
      productsClone[index].count--;
    }

    // Set
    setProducts(productsClone);
  }

  function resetProduct(productID) {
    // Clone
    const productsClone = [...products];
    const index = productsClone.findIndex((p) => p.id === productID);

    // Edit
    productsClone[index] = { ...productsClone[index] };
    productsClone[index].count = 0;

    // Set
    setProducts(productsClone);
  }

  function resetAllProducts() {
    // Clone
    const productsClone = [...products];

    // Edit
    const productsCloneReset = productsClone.map((product) => {
      return { ...product, count: 0 };
    });

    // Set
    setProducts(productsCloneReset);
  }

  function delProduct(productID) {
    // Clone & Edit
    const productsClone = products.filter((p) => productID !== p.id);

    // Set
    setProducts(productsClone);
  }

  return (
    <>
      <ShoppingCart
        products={products}
        productCountIncrement={productCountIncrement}
        productCountDecrement={productCountDecrement}
        resetProduct={resetProduct}
        resetAllProducts={resetAllProducts}
        delProduct={delProduct}
      />
    </>
  );
}

export default App;
