import { useState, useEffect } from 'react';

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    const url = "http://localhost:5000/api/pizzas/p001";
    const response = await fetch(url);
    const data = await response.json();
    setPizza(data);
  };

  if (!pizza) {
    return <div className="container mt-5 text-center">Cargando...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow-lg">
            <img src={pizza.img} className="card-img-top" alt={pizza.name} />
            <div className="card-body">
              <h2 className="card-title text-center mb-3">{pizza.name}</h2>
              <hr />
              <p className="card-text text-muted">{pizza.desc}</p>
              <hr />
              <div className="mb-3">
                <h5>Ingredientes:</h5>
                <ul className="list-unstyled">
                  {pizza.ingredientes.map((ingredient, index) => (
                    <li key={index}>
                      🍕 {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="mb-0">Precio: ${pizza.precio.toLocaleString()}</h4>
                <button className="btn btn-dark">
                  Añadir 🛒
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
