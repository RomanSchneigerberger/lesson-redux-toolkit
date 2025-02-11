import { useSelector } from 'react-redux';


const ShowCounter = () => {
    const count = useSelector((state)=>state.counter.value) 
    return (
        <div>
            <h2>счетчик: {count}</h2>
        </div>
    );
};

export default ShowCounter;
