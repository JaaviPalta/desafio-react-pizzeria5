const Profile = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="card shadow-lg">
            <div className="card-body text-center">
              <h2 className="card-title mb-4">Perfil de Usuario</h2>
              <div className="mb-4">
                <p className="text-muted">Email:</p>
                <h5>usuario@pizzeria.com</h5>
              </div>
              <button className="btn btn-dark">
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
