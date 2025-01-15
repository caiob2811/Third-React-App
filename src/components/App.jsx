import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

import CreateArea from "./CreateArea";

export default function App() {

   const [notas, setNotas] = useState([])

   function addNota (newNotes) {
    setNotas( (prevNotas) => {
        return [...prevNotas, newNotes]
    })
   }

   function deleteItem (id) {
    setNotas ( (prevNotas) => {
        return prevNotas.filter((notas, index) => {
            return index !== id
        })
    })
   }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNota} />
            {notas.map((noteItem, index ) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        onDelete={deleteItem}
                    />
                )
            })}
            <Footer />
        </div>
    )   
}
