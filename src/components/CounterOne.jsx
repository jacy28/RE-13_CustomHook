import useCounter from "../hooks/useCounter";

const CounterOne = () => {
    const { count, increment, decrement, reset } = useCounter(0);

    return (
        <div className="p-4 m-4 bg-pink-300 shadow-lg rounded-2xl text-center">
            <h2 className="text-xl font-bold mb-2">Counter One: {count}</h2>
            <div className="space-x-2">
                <button onClick={increment} className="px-4 py-2 bg-green-500 text-white rounded-lg">➕ Increment</button>
                <button onClick={decrement} className="px-4 py-2 bg-red-500 text-white rounded-lg">➖ Decrement</button>
                <button onClick={reset} className="px-4 py-2 bg-gray-500 text-white rounded-lg">🔄 Reset</button>
            </div>
        </div>
    );
};

export default CounterOne;