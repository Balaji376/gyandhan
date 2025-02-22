
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style/edit.css'

const EditData = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        async function fetchTask() {
            try {
                const res = await axios.get(`https://backend1-5uha.onrender.com/todo/${id}`);
                setTask(res.data.task);
                setPriority(res.data.priority);
                setStatus(res.data.status);
            } catch (error) {
                console.error("Error fetching task:", error);
            }
        }
        fetchTask();
    }, [id]);

    const handleSubmit = async () => {
        try {
            await axios.patch(`https://backend1-5uha.onrender.com/todo/update/${id}`, { task, priority, status });
            alert('Todo Data is Updated');
            navigate('/');
        } catch (error) {
            console.error("Error updating task:", error.response?.data || error.message);
        }
    };

    return (
        <div className="Box">
            <h2>Edit Task</h2>
            <label htmlFor="task">Task:</label>
            <input
                type="text"
                className="input-field"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />

            <label htmlFor="priority">Choose a priority:</label>
            <select
                className="select-field"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
            >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>

            <label htmlFor="status">Choose a status:</label>
            <select
                className="select-field"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            >
                <option value="Not Started">Not Started</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
            </select>

            <button className="update-btn" onClick={handleSubmit}>Update Task</button>
        </div>


    );
};

export default EditData;





