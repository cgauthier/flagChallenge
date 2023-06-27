import React, { useState, useEffect } from "react";
import LoadingMessage from "./LoadingMessage";
import FlagList from "./FlagList";

function FlagListContainer() {
    const [flag, setFlag] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(
            "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/6c756d",
            {
                method: "GET"
            }
        )
            .then((response) => response.text())
            .then((data) => {
                setFlag(data);
                setLoading(false);
                console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);

    return <div>{loading ? <LoadingMessage /> : <FlagList flag={flag} />}</div>;
}

export default FlagListContainer;
