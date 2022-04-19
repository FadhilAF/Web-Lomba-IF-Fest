import React, { useLayoutEffect, useState } from "react";
import styles from "./Border.css";

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);

    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();

        return () => window.removeEventListener('resize', updateSize);
    }, []);//tidak usah depend ke 1 state
    return size;
}

const Border = () => {
    const [windowWidth, windowHeight] = useWindowSize();
    
    const spriteHeight = 100;
    const spriteRatio = 460/535;
    const spriteWidth = spriteHeight * spriteRatio;
    const spriteTotalWidth = Math.floor((windowWidth - 16)/spriteWidth) * spriteWidth;


    return (
        <div className="sprite-background">
            <div className="sprite" style={{width: `${spriteTotalWidth}px`, backgroundSize: `${spriteWidth}px ${spriteHeight}px`}}></div>
        </div>
    );
}

export default Border;