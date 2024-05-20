// import React from 'react';
import {Routes, Route} from 'react-router-dom';
import CreateBook from './pages/CreateBook';
import DeleteBook from './pages/DeleteBook';
import Home from './pages/Home';
import ShowBook from './pages/ShowBook';
import UpdateBook from './pages/UpdateBook';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/create-book' element={<CreateBook />}></Route>
      <Route path='/delete-book/:id' element={<DeleteBook />}></Route>
      <Route path='/update-book/:id' element={<UpdateBook />}></Route>
      <Route path='/show-book/:id' element={<ShowBook />}></Route>
    </Routes>
  )
};

export default App;