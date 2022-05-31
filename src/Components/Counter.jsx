import React, { useState } from'react';

const Counter = function(){
    const [count,SetCount] = useState(0);
    function increment() {
        SetCount(count + 1)
        console.log(count);
      }
      function decrement() {
        SetCount(count - 1)
        console.log(count);
      }

    return(
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>Инкремент</button>
        <button onClick={decrement}>Декремент</button>
    </div>
    );
};
export default Counter;
