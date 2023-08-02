import {React, useState} from "react";
import { Button } from "@material-ui/core";
import AddIcon from '@mui/icons-material/Add';
import Output from "./Output";

const Input = () => {

    const [item, setitem] = useState();
    const [listItem, setlistItem] = useState([]);

    const inputText = (event) => {
        setitem(event.target.value)
    }

    const listedItem = () => {
        if(item === '' || item === undefined){
            setlistItem((oldItem) => {
                return [...oldItem]
            })
        } else {
            setlistItem((oldItem) => {
                return [...oldItem, item]
            });
            setitem('');
        }
    }

    // const deletedItem = (id) => {
    //     console.log('hi')
    //     setlistItem((oldItem) => {
    //       return oldItem.filter((arrItem, index) => {
    //         return index !== id;
    //       })
    //     });
    //   }

    return(
        <>
            <div className="main">
                <div className="container">
                    <h1>Todo List</h1>
                    <div>
                        <input type='text' placeholder='Enter Item' onChange={inputText} value={item}/>
                        <Button className="btn" onClick={listedItem}>
                            <AddIcon />
                        </Button>
                    </div>
                </div>
                <ol>
                    {listItem.map((val, index) => {return <Output id={index} key={index} listItem={val} 
                    // onSelect={deletedItem}
                    />})}
                </ol>
            </div>
        </>
    )
}

export default Input;