import React, { useState, useEffect } from "react";
import Header from "./Header";

// HELLLLOOOOO

function App() {
  const [bacon, setBacon] = useState(null);

  useEffect(() => {
    fetch("/bacon")
      .then((res) => res.json())
      .then((data) => setBacon(data));
  }, []);

  return (
    <>
      <Header />
      <div>{bacon ? bacon : `...where's my stuff?...`}</div>
    </>
  );
}

export default App;

// Testing

// I'm doing more work.
