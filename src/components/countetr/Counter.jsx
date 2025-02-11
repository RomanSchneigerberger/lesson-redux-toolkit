import React from 'react';
import { useDispatch } from 'react-redux';
import {increment, decrement, incrementByAmount} from '../../features/counterSlice'

const Counter = () => {

    //const count = useSelector((state)=>state.counter.value)  
    //<h2>счетчик: {count}</h2>

    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={()=>dispatch(increment())}>+1.</button>
            <button onClick={()=>dispatch(decrement())}>-1.</button>
            <button onClick={()=>dispatch(incrementByAmount(5))}>+5</button>
        </div>
    );
};

export default Counter;