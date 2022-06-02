import React, { useMemo, useState } from 'react';
import PostList from './Components/PostList';
import PostForm from './Components/PostForm';
import Counter from './Components/Counter';
import MySelect from './Components/UI/select/MySelect';

import './styles/app.css';
import MyInput from './Components/UI/Input/MyInput';
import PostFilter from './Components/PostFilter';



function App() {

  // let likes = 33;


  const [posts, setPosts] = useState([
    { id: 1, title: 'Ada', desc: 'Язык программирования 1' },
    { id: 2, title: 'Java Script', desc: 'Не Язык программирования 2' },
    { id: 3, title: 'Pyton', desc: 'Он Язык программирования 3' }]);
  // const [selectedSort, setSelectedSort] = useState('');
  // const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState({sort:'',query:''});
  // const [posts2, setPosts2] = useState([
  //   { id: 1, title: 'Java 2', desc: 'Язык  1' },
  //   { id: 2, title: 'Java Script222', desc: 'Язык  2' },
  //   { id: 3, title: 'Pyton22', desc: 'Язык  3' }]);
  // const [value, setValue] = useState('Введите в ипут значение');
  // console.log(likes);
  // console.log(setLikes);
  // const [title, setTitle] = useState('');
  // const [desc, setBody] = useState('');

  const createPost = function (newPost) {
    setPosts([...posts, newPost]);
  }


  const removePost = function (post) {
    setPosts(posts.filter(p => p.id !== post.id));
  }
  const sortedPosts = useMemo(()=>{
    console.log('отработала getSortedPosts useMemo')
    if(filter.sort){
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  },[filter.sort,posts]);
         
  const sortedAndSearchedPosts = useMemo(()=>{
    return sortedPosts.filter(post=> post.title.toLowerCase().includes(filter.query))
  },[filter.query, sortedPosts]);


  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 15px' }} />
      <PostFilter filter={filter} setFilter={setFilter}/>
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов 1" />
      {/* <PostList posts={posts2} title="Список постов 2" /> */}
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
