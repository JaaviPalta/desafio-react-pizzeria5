import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center text-center">
        <div className="col-12 col-md-6">
          <h1 className="display-1">404</h1>
          <h2 className="mb-4">Página No Encontrada</h2>
          <p className="text-muted mb-4">
            Lo sentimos, la página que buscas no existe.
          </p>
          <Link to="/" className="btn btn-dark btn-lg">
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
