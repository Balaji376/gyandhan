import React from 'react';



import TodoApp from './component/todoapp';
import EditData from './component/editData';
import { Route, Routes } from 'react-router-dom';
import CreateData from './component/addData';
import Navbar from './component/navbar';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" element={<TodoApp />} />
      <Route path="/create" element={<CreateData />} />
      <Route path="/edit/:id" element={<EditData />} />
    </Routes>
    </div>
    

  );
};

export default App;
