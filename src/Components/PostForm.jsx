import React, {useState}  from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/Input/MyInput';

const PostForm = function({create}){
    const [post, setPost] = useState({title:'',desc:''});
    const addNewPost = function (e){
      e.preventDefault();
      //более короткая конструкция будет ниже 
      //const newPost={ 
      //   id: Date.now(),
      //   title,
      //   desc
      // }
      //console.log(newPost);
     // setPosts([...posts,newPost]); более короткая конструкция будет ниже
     //вот эты конструкция --> 
        const newPost={ 
          ... post,
        id: Date.now()
        
      }
      create(newPost);
      // setTitle('');
      // setBody('');
      setPost({title:'',desc:''});
    }
    return(
         <form>
        {/* управляемый инпут */}
        <MyInput
        value={post.title} 
        onChange = {e=>setPost({...post, title: e.target.value})}
        type='text' 
        placeholder='Название поста' />
         {/* <input ref={bodyInputRef}/> */}
        
        {/* Не управляемы компонент инпут */}
        <MyInput 
        value={post.desc} 
        onChange = {e=>setPost({...post, desc: e.target.value})}

        type='text'
        placeholder='Текст поста' />
         
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
    );
};
export default PostForm;
