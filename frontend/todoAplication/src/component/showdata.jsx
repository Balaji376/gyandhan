import { useNavigate } from 'react-router-dom';
import '../style/showdata.css'

const ShowData = ({ tasks, onDelete }) => {
    const navigate = useNavigate();

    return (
        <div className="task-container">
        {tasks.map((ele) => (
            <div key={ele._id} className="task-card">
                <h3>Task: {ele.task}</h3>
                <p>Priority: {ele.priority}</p>
                <p>Status: {ele.status}</p>
                <button onClick={() => onDelete(ele._id)}>Delete</button>
                <button onClick={() => navigate(`/edit/${ele._id}`)}>Edit</button>
            </div>
        ))}
    </div>
    
    );
};

export default ShowData;

