import { useEffect, useState } from "react";

export default function Windowtracker() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const getWidth = () => {
            console.log("effecting");
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", getWidth);

        return () => {
            console.log("clean");
            window.removeEventListener("resize", getWidth);
        };
    }, []);
    return <h1>Window width: {windowWidth}</h1>;
}
