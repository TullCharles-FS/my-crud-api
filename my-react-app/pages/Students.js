import React, {useEffect, useState} from "react";
import React, {Router, Routes, Route} from "react";

function App() {
  const [students, setStudents] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_BASE =
    process.env.NODE_ENV === "devlopment"
      ? `http://localhost:8000/api/v1`
      : process.env.REACT_APP_BASE_URL;

  let ignore = false;
  useEffect(() => {
    if (!ignore) {
      getStudents();
    }

    return () => {
      ignore = true;
    };
  }, []);

  const getStudents = async () => {
    setLoading(true);
    try {
      await fetch(`${API_BASE}/students`)
        .then((res) => res.json())
        .then((data) => {
          setStudents(data);
        });
    } catch (error) {
      setError(error.message || "Unexpected Error");
    } finally {
      setLoading(false);
    }
  };

  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    //const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  });

  return (
    <body className="App">
      <header className="App-header">
        <div>
          {currentUser === false ? <h2>Logged In</h2> : <h2>Logged out</h2>}
        </div>
        <div>
          <Routes>
            <Route path="/students/:id" exact element={<Student />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/" exact element={<Home />} />
          </Routes>
        </div>
      </header>
    </body>
  );
}

export default Students;
