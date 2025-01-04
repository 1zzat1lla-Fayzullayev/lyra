/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import axios from "axios";

function AdminPanel() {
  const [projectName, setProjectName] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [projectImage, setProjectImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://lyra-backend.onrender.com/api/projects", {
        name: projectName,
        link: projectLink,
        image: projectImage,
      });
      alert("project qowldi");
      setProjectName("");
      setProjectLink("");
      setProjectImage("");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Loyiha nomi:
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)} 
          />
        </label>
        <br />
        <label>
          Link:
          <input
            type="text"
            value={projectLink}
            onChange={(e) => setProjectLink(e.target.value)} 
          />
        </label>
        <br />
        <label>
          Rasm:
          <input
            type="text"
            value={projectImage}
            onChange={(e) => setProjectImage(e.target.value)} 
          />
        </label>
        <br />
        <button type="submit">Qo'shish</button>
      </form>
    </>
  );
}

export default AdminPanel;
