import {Link} from "react-router-dom";

import ".//App.css";

function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Login Screen</h1>
        <Link to="/dashboard">Dashboard</Link>
      </header>
    </div>
  );
}

export default Login;
