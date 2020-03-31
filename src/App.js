import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Images from './Images';

const data = JSON.parse('[{"id":1,"url":"https:\/\/images.unsplash.com\/photo-1583129750939-be2b5cf2ebf2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ2MTQwfQ"},{"id":2,"url":"https:\/\/images.unsplash.com\/photo-1583155569589-da39b2d327e7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ2MTQwfQ"},{"id":3,"url":"https:\/\/images.unsplash.com\/photo-1583845112239-97ef1341b271?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ2MTQwfQ"},{"id":4,"url":"https:\/\/images.unsplash.com\/photo-1583131455094-37bdbd8d0ec6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ2MTQwfQ"},{"id":5,"url":"https:\/\/images.unsplash.com\/photo-1583186945822-c6f9a92ebc62?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ2MTQwfQ"},{"id":6,"url":"https:\/\/images.unsplash.com\/photo-1584874616492-1e354c7faaa6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ2MTQwfQ"},{"id":7,"url":"https:\/\/images.unsplash.com\/photo-1584581050726-c74977c26269?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ2MTQwfQ"}]');

function App() {
  const [images, setImages] = useState(data);
  
return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div className = "Main">
        < Images images={images} />
      </div>

    </div>
  );
}

export default App;
