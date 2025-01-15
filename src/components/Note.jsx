import React from "react";
import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Note(props) {

  function onDelete () {
    props.onDelete(props.id)
  }

    return (
        <div className="note">
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <Fab onClick={onDelete}>
            <DeleteIcon />
          </Fab>
        </div>
    )
}
