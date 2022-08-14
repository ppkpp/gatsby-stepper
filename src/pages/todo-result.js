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

const TodoPageResult = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const formData = useSelector(state => state.formData);
    return ( 
        <div>
            <p> {JSON.stringify(formData)} </p>
        </div> 
    );
}

export default TodoPageResult;
