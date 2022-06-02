import React, {useState}  from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/Input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = function({filter,setFilter}){
    
    return(
      <div>
      <MyInput
        value={filter.query}
        onChange={e => setFilter({ ...filter, query: e.target.value})}
        placeholder='Поиск'
      />
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({ ...filter, sort: selectedSort})}
        defaultValue='Сортировка по'
        options={
          [{ value: 'title', name: 'По названию' },
          { value: 'desc', name: 'По описанию' }]
        }
      />
    </div>
    );
};
export default PostFilter;
