import React from 'react';
import './App.css';
import Header from './components/Header';
import UserBlogs from './components/UserBlog';
import BlogDetails from './components/BlogDetails';
import AddBlog from './components/AddBlog';
import { Routes, Route, useActionData } from 'react-router-dom';
import Blogs from './components/Blogs';
import Auth from './components/Auth';
import {useSelector} from 'react-redux';


function App() {

const isLoggedIn = useSelector(state=> state.isLoggedIn)
console.log(isLoggedIn)

  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path= "/blogs" element={<Blogs/>}></Route>
          <Route path="/myblogs" element={<UserBlogs/>}></Route>
          <Route path='/myBlogs/:id' element={<BlogDetails/>}></Route>
          <Route path='/blogs/add' element={<AddBlog/>}></Route>
        </Routes>
      </main>

    </React.Fragment>

  );
}

export default App;
