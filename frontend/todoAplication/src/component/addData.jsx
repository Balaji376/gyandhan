import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style/add.css'
const CreateData = () => {
    const navigate = useNavigate();
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async () => {
        if (!task || !priority || !status) {
            alert("Please fill all fields before creating a task!");
            return;
        }

        try {
            await axios.post('https://backend1-1-8y9w.onrender.com/todo/create', { task, priority, status });
            alert('Todo Data is Created');
            navigate('/');
        } catch (error) {
            console.error("Error creating task:", error.response?.data || error.message);
            alert('getting Error in AddTodo')
        }
    };

    return (
       <>
       <div className="Box1">
    <h2>Create Task</h2>
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
        <option value="">--Choose Priority--</option>
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
        <option value="">--Choose Status--</option>
        <option value="Not Started">Not Started</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
    </select>

    <button className="create-btn" onClick={handleSubmit}>Create Task</button>
</div>

<ul className="task-list">
    <li className="task-item">Task: Design Homepage</li>
    <li className="task-item">Priority: High</li>
    <li className="task-item">Status: In Progress</li>
</ul>
       </>
    );
};

export default CreateData;
