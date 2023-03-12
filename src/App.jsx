//import { useEffect, useState } from "react";
import { useState } from "react";
import "./App.css";
import Windowtracker from '../src/assets/components/Windowtracker'

export default function App() {
    // const [count, setCount] = useState(1);
    // const [starData, setStarData] = useState({});

    // useEffect(() => {
    //     fetch(`https://swapi.dev/api/people/${count}`)
    //         .then((res) => res.json())
    //         .then((data) => setStarData(data));
    // }, [count]);

    const [show, setShow] = useState(true);

    const toggle = () => {
        setShow(state => !state);
    };
    return (
        <div className="container">
            <button onClick={toggle}>Show window width</button>
            {show && <Windowtracker />}
            {/* <h1>Character id: {count}</h1>
            <div className="buttons">
                <button onClick={() => setCount(count - 1)}>
                    Previous Character
                </button>
                <button onClick={() => setCount(count + 1)}>
                    Next Character
                </button>
            </div>
            <div className="api-data">
                <pre>{JSON.stringify(starData, null, 2)}</pre>
            </div> */}
        </div>
    );
}
