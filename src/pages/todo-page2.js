import React from 'react';
import {
    useState
} from 'react';
import reduxStore from '../ReduxStore';
import {
    useSelector
} from 'react-redux';
import {
    createData, updateData
} from '../Actions/CounterAction';
import {
    Link
} from "gatsby"

const TodoPage1 = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const formData = useSelector(state => state.formData);
    return ( 
        <div>          
            <p> {JSON.stringify(formData)} </p>
            <label> Description </label> 
            <input value = {description} onInput = {e => setDescription(e.target.value)}/> 
            <button onClick = {() => reduxStore.dispatch(updateData({"description": description}))} > Update Data </button> 
            <br/>
             <Link to = "/todo-result"><button>Result </button> </Link>
        </div> 
    );
}

export default TodoPage1;
