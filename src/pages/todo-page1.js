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
            <label> Title </label> 
            <input value = {title} onInput = {e => setTitle(e.target.value)}/>
            <button onClick = {() => reduxStore.dispatch(createData({"title":title}))} > Create Data </button> 
            <br/>
             <Link to = "/todo-page2"><button >Page 2 </button> </Link>
        </div> 
    );
}
export default TodoPage1;
