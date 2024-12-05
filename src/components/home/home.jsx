import "./home.css"
export function Home() {
  return (
    <div className="container-fluid">
      <h2 className="box bg-warning m-4"> <span className="bi bi-house-door-fill"></span> React Home</h2>
      <div className="alert alert-dismissible alert-success w-25 m-4">
      <h4>Welcome to React 18</h4>
      <p>JavaScript library for bulding Native and Web UI.</p>
      <button className="btn btn-success" data-bs-dismiss="alert">OK</button>
      </div>
    </div>
  );
}
