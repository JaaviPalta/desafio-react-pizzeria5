const Cart = ({ cart, setCart }) => {
  const tipoMoneda = (precio) => {
    return precio.toLocaleString('es-CL');
  };

  const aumentarCantidad = (id) => {
    setCart(cart.map(pizza =>
      pizza.id === id
        ? { ...pizza, count: pizza.count + 1 }
        : pizza
    ));
  };

  const disminuirCantidad = (id) => {
    const pizzaEnCarrito = cart.find(pizza => pizza.id === id);

    if (pizzaEnCarrito.count === 1) {

      setCart(cart.filter(pizza => pizza.id !== id));
    } else {
      setCart(cart.map(pizza =>
        pizza.id === id
          ? { ...pizza, count: pizza.count - 1 }
          : pizza
      ));
    }
  };

  const calcularTotal = () => {
    return cart.reduce((total, pizza) => total + (pizza.precio * pizza.count), 0);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Carrito de Compras</h2>

      {cart.length === 0 ? (
        <div className="alert alert-info">
          <p className="mb-0">El carrito está vacío</p>
        </div>
      ) : (
        <>
          <div className="row">
            {cart.map((pizza) => (
              <div key={pizza.id} className="col-12 mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-12 col-md-3">
                        <img
                          src={pizza.img}
                          alt={pizza.name}
                          className="img-fluid rounded"
                          style={{ maxHeight: '120px', objectFit: 'cover' }}
                        />
                      </div>
                      <div className="col-12 col-md-3">
                        <h5 className="mb-1">Pizza {pizza.name}</h5>
                      </div>
                      <div className="col-12 col-md-2">
                        <p className="mb-0">
                          <strong>Precio:</strong> ${tipoMoneda(pizza.precio)}
                        </p>
                      </div>
                      <div className="col-12 col-md-2">
                        <div className="d-flex align-items-center justify-content-center">
                          <button
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => disminuirCantidad(pizza.id)}
                          >
                            -
                          </button>
                          <span className="mx-3">
                            <strong>Cantidad: {pizza.count}</strong>
                          </span>
                          <button
                            className="btn btn-outline-success btn-sm"
                            onClick={() => aumentarCantidad(pizza.id)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="col-12 col-md-2 text-end">
                        <p className="mb-0">
                          <strong>Subtotal:</strong><br />
                          ${tipoMoneda(pizza.precio * pizza.count)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card mt-4">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="mb-0">Total de la compra:</h4>
                <h3 className="mb-0 text-success">${tipoMoneda(calcularTotal())}</h3>
              </div>
              <div className="text-end mt-3">
                <button className="btn btn-success btn-lg">
                  Pagar
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
