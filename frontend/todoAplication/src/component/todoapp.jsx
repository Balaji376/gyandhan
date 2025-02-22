import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShowData from './showdata';


const TodoApp = () => {
    const [tasks, setTasks] = useState([]);

    async function handleDelete(todoId) {
        try {
            await axios.delete(`https://backend1-1-8y9w.onrender.com/todo/delete/${todoId}`);
            alert("Todo Data Deleted successfully");
            getData();
        } catch (err) {
            console.error("Error deleting todo:", err);
            alert("Error In Deleting Todo");
        }
    }

    async function getData() {
        try {
            const res = await axios.get('https://backend1-5uha.onrender.com/todo/showall');
            setTasks(res.data);
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return <ShowData tasks={tasks} onDelete={handleDelete} />;
};

export default TodoApp;


