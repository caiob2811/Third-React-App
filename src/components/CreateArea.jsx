import React, {useState} from "react";
import Fab from '@mui/material/Fab';
import PostAddIcon from '@mui/icons-material/PostAdd';
import Zoom from '@mui/material/Zoom';

export default function CreateArea (props) {

    const [notas, setNotas] = useState({
        title: '',
        content: ''
    })

    const [expand, setExpand] = useState(false)

    function expansion () {
        setExpand(true)
    }

    function handleChange (event) {
        const {name, value} = event.target

        setNotas( (prevNotas) => {
            return {
                ...prevNotas,
                [name]: value
            }
        })
    }

    function submitNota (event) {
        props.onAdd(notas)

        event.preventDefault()

        setNotas ({
            title: '',
            content: ''
        })
    }

    return (
        <div>
        <form className="create-note">

            { expand ? <input name="title"
            placeholder="Título"
            value={notas.title}
            onChange={handleChange}
            /> : null
            } 

            <textarea name="content"
            placeholder="Conteúdo"
            value={notas.content}
            onChange={handleChange}
            onClick={expansion}
            rows={expand ? 3 : 1}
            />

            <Zoom in={true}>
                <Fab type="submit" 
                onClick={submitNota}>
                    <PostAddIcon/>
                </Fab>
            </Zoom>
        </form>
        </div>
    )
}