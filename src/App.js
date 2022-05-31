import React, { useState } from 'react';
import PostList from './Components/PostList';
import Counter from './Components/Counter';
import './styles/app.css';

function App() {

  // let likes = 33;


  const [posts, setPosts] = useState([
    { id: 1, title: 'Java', desc: 'Язык программирования 1' },
    { id: 2, title: 'Java Script', desc: 'Язык программирования 2' },
    { id: 3, title: 'Pyton', desc: 'Язык программирования 3' }]);
    const [posts2, setPosts2] = useState([
      { id: 1, title: 'Java 2', desc: 'Язык  1' },
      { id: 2, title: 'Java Script222', desc: 'Язык  2' },
      { id: 3, title: 'Pyton22', desc: 'Язык  3' }]);
  // const [value, setValue] = useState('Введите в ипут значение');
  // console.log(likes);
  // console.log(setLikes);

  return (
    <div className="App">
      <PostList posts={posts} title="Список постов 1"/>
      <PostList posts={posts2} title="Список постов 2"/>
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
