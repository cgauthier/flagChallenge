import React, { useState, useEffect, useCallback } from "react";
import FlagListItem from "./FlagListItem";

const FlagList = (props) => {
    const [indexCount, setIndexCount] = useState(0);
    const [flag] = useState(props.flag);
    const [letters] = useState([]);
    const increment = useCallback(() => {
        setIndexCount(indexCount + 1);
    }, [indexCount]);

    const getChar = useCallback(() => {
        const setLetters = (val) => {
            letters.push(val);
        };
        setLetters(flag.charAt(indexCount));
    }, [flag, indexCount, letters]);

    useEffect(() => {
        const interval = setInterval(() => {
            getChar();
            increment();
        }, 1000);

        if (flag.length === letters.length) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [increment, getChar, flag, letters]);

    const listItems = Object.values(letters).map((letter, idx) => (
        <FlagListItem key={idx} value={letter} />
    ));

    return (
        <div>
            <ul>{listItems}</ul>
        </div>
    );
};

export default FlagList;
