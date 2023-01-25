import { useState } from "react";
import "./App.css";

function App() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  return (
    <div className="App">
      <form>
        <div className="containt-main">
          <label>First Name: </label>
          <input
            placeholder="search"
            type="text"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <p style={{ display: firstname.length > 2 ? "none" : "block" }}>
          First Name must be at least 2 characters
        </p>

        <div className="containt-main">
          <label>Last Name: </label>
          <input
            placeholder="search"
            type="text"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <p style={{ display: firstname.length > 2 ? "none" : "block" }}>
          Last Name must be at least 2 characters
        </p>

        <div className="containt-main">
          <label>Email: </label>
          <input
            placeholder="search"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <p style={{ display: email.length > 5 ? "none" : "block" }}>
          Email must be at least 5 characters
        </p>

        <div className="containt-main">
          <label>Confirm Password: </label>
          <input
            placeholder="search"
            type="text"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
          />
        </div>

        <p style={{ display: password1.length > 8 ? "none" : "block" }}>
          Password must be at least 8 characters
        </p>
        <p style={{ display: password1 === password2 ? "none" : "block" }}>
          Password must match
        </p>

        <div className="containt-main">
          <label>Password: </label>
          <input
            placeholder="search"
            type="text"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default App;
