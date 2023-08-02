import React, { useState } from "react";
import Delete from "@mui/icons-material/Delete";
import CheckIcon from '@mui/icons-material/Check';

const Output = (props) => {

    const [line, setline] = useState(false);

    const completed = () => {
        setline(true)
    }

    return (
      <>
        <div className="todo_li">
          {/* <button className="btn" onClick={() => {props.onSelect(props.id)}}>
              <Delete />
          </button> */}
          <button className="btn" onClick={completed}>
              <CheckIcon />
          </button>
          <li style={{textDecoration: line ? 'line-through' : 'none', textDecorationColor: line ? 'red' : 'none'}}> {props.listItem} </li>
        </div>
      </>
    )
  }
  
  export default Output;