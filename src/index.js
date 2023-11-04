import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePost from './pages/CreatePost.jsx';
import EditPosts from './pages/EditPosts.jsx';
import ReadPosts from './pages/ReadPosts.jsx';
import DetailView from './Components/DetailView.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index={true} path="/" element={<App />} />
        <Route index={false} path="/new" element={ <CreatePost /> } />
        <Route path="/explore" element={ < ReadPosts/> }/>
        <Route path="/explore/edit/:id" element={<EditPosts />} />
        <Route index={false} path="/explore/:id" element={<DetailView />} />
        
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
