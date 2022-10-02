import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [fullnote, setfullnote] = useState({
    title: "",
    content: "",
  });
  const [isExpanded, setIsExpanded] = useState(false);

  function expand() {
    setIsExpanded(true);
  }

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
      <form className="create-note">
        {isExpanded && (
          <input
            value={fullnote.title}
            onChange={handleOnchange}
            name="title"
            placeholder="Title"
          />
        )}
        <textarea
          onClick={expand}
          value={fullnote.content}
          onChange={handleOnchange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
