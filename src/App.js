import React, { useRef, useState } from 'react';
import PostList from './Components/PostList';
import Counter from './Components/Counter';
import './styles/app.css';
import MyButton from './Components/UI/button/MyButton';
import MyInput from './Components/UI/Input/MyInput';


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
  const [title, setTitle] = useState('');
  const bodyInputRef = useRef();
 //упавляемый инпут
  const addNewPost = function (e){
      e.preventDefault();
       console.log(title);
       console.log(bodyInputRef.current.value);
    }
  return (
    <div className="App">
      <form>
        {/* управляемый инпут */}
        <MyInput
        value={title} 
        onChange = {e=>setTitle(e.target.value)}
        type='text' 
        placeholder='Название поста' />
         {/* <input ref={bodyInputRef}/> */}
        
        {/* Не управляемы компонент инпут */}
        <MyInput 
        type='text' 
        placeholder='Описание поста'
        ref={bodyInputRef}
         /> 
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов 1" />
      <PostList posts={posts2} title="Список постов 2" />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
