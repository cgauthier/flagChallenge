import React, { useState, useEffect, useCallback } from "react";

const FlagMessage = (props) => {
    const [flagChar, setFlagChar] = useState("");
    const [indexCount, setIndexCount] = useState(0);
    const [flag] = useState(props.flag);
    const [flagStr, setFlagStr] = useState("");

    const increment = useCallback(() => {
        setIndexCount(indexCount + 1);
    }, [indexCount]);

    const getChar = useCallback(() => {
        setFlagChar(flag.charAt(indexCount));
    }, [flag, indexCount]);

    const concat = useCallback(() => {
        setFlagStr(flagStr + flagChar);
    }, [flagStr, flagChar]);

    useEffect(() => {
        const interval = setInterval(() => {
            increment();
            getChar();
            concat();
        }, 1000);

        if (flag.length === flagStr.length) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [concat, increment, getChar, flag, flagStr]);

    return (
        <div>
            <h2>Captured flag: {flagStr}</h2>
        </div>
    );
};

export default FlagMessage;
