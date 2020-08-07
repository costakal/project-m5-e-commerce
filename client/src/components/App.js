import React, { useState, useEffect } from "react";
<<<<<<< Updated upstream

// HELLLLOOOOO
=======
>>>>>>> Stashed changes

function App() {
  const [bacon, setBacon] = useState(null);

  useEffect(() => {
    fetch("/bacon")
      .then((res) => res.json())
      .then((data) => setBacon(data));
  }, []);

  return <div>{bacon ? bacon : `...where's my stuff?...`}</div>;
}

export default App;

// Testing
