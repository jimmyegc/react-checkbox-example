import './App.css'
import { Checkbox } from './components/Checkbox'
import { Checkword } from './components/Checkword'
import { Hoc } from './components/hoc';
import { Users } from './components/Users'
import ProductCard from './ProductCard/ProductCard';
import { Product } from './types';
import useProduct from './useProduct';


const product: Product = {
  id: 1,
  image: 'https://iili.io/HCURIHu.jpg',
  title: 'Viston Earl Grey Tea',
  category: 'Black Tea',
  rating: { stars: 4, reviews: 4 },
  price: 8.95,
};

import React, { useState } from 'react';

// HOC que agrega la funcionalidad de conteo
const withCounter = (WrappedComponent) => {
  const WithCounter = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
      setCount(count + 1);
    };

    return <WrappedComponent handleClick={handleClick} count={count} />;
  };

  return WithCounter;
};

// ComponenteA sin la funcionalidad de conteo
const ComponenteA = ({ handleClick }) => {
  return <button onClick={handleClick}>Componente A</button>;
};

// ComponenteB sin la funcionalidad de conteo
const ComponenteB = ({ handleClick }) => {
  return <button onClick={handleClick}>Componente B</button>;
};

// Envolver ComponenteA y ComponenteB con el HOC
const ComponenteAConConteo = withCounter(ComponenteA);
const ComponenteBConConteo = withCounter(ComponenteB);

// Renderizar ComponenteA y ComponenteB con la funcionalidad de conteo agregada
export const App = () => {
  return (
    <>
      <br />

      <ComponenteAConConteo />
      <ComponenteBConConteo />
    </>
  );
};





function App2() {
  //  const { addToCart } = useProduct(product);


  return (
    <>
      {/* <Checkbox />
      <Checkword />
      <Users />
      <ProductCard
        product={product}
        image={<ProductCard.Image />}
        info={
          <ProductCard.Info>
            <ProductCard.Category />
            <ProductCard.Title />
            <ProductCard.Rating />
            <ProductCard.Price />
          </ProductCard.Info>
        }
        action={
          <ProductCard.Button onClick={addToCart}>Add to cart accion </ProductCard.Button>
        }
      /> */}
      <Hoc />
    </>
  )
}

//export default App
