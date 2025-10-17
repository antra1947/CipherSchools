import React, { useState, useEffect } from "react";
import axios from "axios";
import { Sandpack } from "@codesandbox/sandpack-react";

const BASE_URL = "https://cipherschools-jurf.onrender.com";

function App() {
  const [projects, setProjects] = useState([]);
  const [code, setCode] = useState(`export default function App() {
  return <h1>Hello CipherStudio!</h1>
}`);

 
  useEffect(() => {
    axios.get(`${BASE_URL}/api/projects`)
      .then(res => setProjects(res.data))
      .catch(err => console.log(err));
  }, []);

 
  const saveProject = async () => {
    try {
      await axios.post(`${BASE_URL}/api/projects`, {
        name: "MyProject",
        code,
      });
      alert("Project saved!");
      
      const res = await axios.get(`${BASE_URL}/api/projects`);
      setProjects(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to save project");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>CipherStudio IDE</h2>
      <Sandpack
        template="react"
        files={{
          "/App.js": code,
        }}
        options={{
          showLineNumbers: true,
          showTabs: true,
        }}
        onChange={(newCode) => setCode(newCode)}
      />
      <button onClick={saveProject} style={{ marginTop: 10 }}>Save Project</button>
      <h3>Saved Projects:</h3>
      <ul>
        {projects.map((p) => (
          <li key={p._id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
