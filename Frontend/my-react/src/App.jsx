import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = { name, email };

    fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("User logged in successfully", data);
      });

    console.log("Your data is submitted", { name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username</label>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <label>Email</label>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default App;
