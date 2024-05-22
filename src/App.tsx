import { useState } from 'react';

// HOC que agrega la funcionalidad de conteo
const withCounter = (WrappedComponent) => {
  const WithCounter = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
      setCount(count + 1);
      console.log(count)
    };

    return <WrappedComponent handleClick={handleClick} count={count} />;
  };

  return WithCounter;
};

// ComponenteA sin la funcionalidad de conteo
const ComponenteA = ({ handleClick, count }) => {
  return <button onClick={handleClick}>Componente A {count} </button>;
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
      <h1>HOC</h1>
      <ComponenteAConConteo />
      <br />
      <ComponenteBConConteo />
    </>
  );
};


