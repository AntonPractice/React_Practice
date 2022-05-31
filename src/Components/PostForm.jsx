import React,  from'react';

const PostForm = function(){
    const [post, setPost] = useState({title:'',desc:''});
    return(
    <div>
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
    </div>
    );
};
export default PostForm;
