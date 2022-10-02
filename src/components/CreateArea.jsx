import React, { useState } from "react";

function CreateArea(props) {
  const [fullnote, setfullnote] = useState({
    title: "",
    content: "",
  });

  function handleOnchange(event) {
    const { name, value } = event.target;
    setfullnote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  function submitNote(event) {
    event.preventDefault();
    props.onAdd(fullnote);
    setfullnote({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form>
        <input
          value={fullnote.title}
          onChange={handleOnchange}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={fullnote.content}
          onChange={handleOnchange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
