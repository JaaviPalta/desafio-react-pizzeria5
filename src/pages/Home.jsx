import { useState, useEffect } from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    const url = "http://localhost:5000/api/pizzas";
    const response = await fetch(url);
    const data = await response.json();
    setPizzas(data);
  };

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row justify-content-center g-4">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <CardPizza
                nombre={pizza.name}
                precio={pizza.precio}
                ingredientes={pizza.ingredientes}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
