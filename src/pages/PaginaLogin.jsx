import { useState } from 'react';

const PaginaLogin = () => {

  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault();

    if (!email.trim() || !contraseña.trim()) {
      setError('Todos los campos son obligatorios');
      setSuccess(false);
      return;
    }

    if (contraseña.length < 6) {
      setError('El contraseña debe tener al menos 6 caracteres');
      setSuccess(false);
      return;
    }

    setError('');
    setSuccess(true);

    setEmail('');
    setContraseña('');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Iniciar Sesión</h2>

              <form onSubmit={validarDatos}>

                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}

                {success && (
                  <div className="alert alert-success" role="alert">
                    ¡Inicio de sesión exitoso! Bienvenido de vuelta.
                  </div>
                )}

                <div className="form-group mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Ingresa tu email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="contraseña" className="form-label">Contraseña</label>
                  <input
                    type="password"
                    id="contraseña"
                    name="contraseña"
                    className="form-control"
                    placeholder="Ingresa tu contraseña"
                    onChange={(e) => setContraseña(e.target.value)}
                    value={contraseña}
                  />
                </div>

                <button type="submit" className="btn btn-dark w-100">
                  Iniciar Sesión
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginaLogin;
