import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Button } from "react-bootstrap";

export const SinkDB2 = () => {
    const [data, setData] = useState(["loading"]);

    useEffect(() => {}, []);

    const getSinkData = () => {
        Axios.get("http://localhost:8082/api/getdata").then((response) => {
            if (response.data) {
                console.log(response.data);
                setData(response.data);
            } else {
                alert("failed to");
            }
        });
    };
    return (
        <div
            style={{
                marginBottom: "60px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <h3>SinkDB2 CUSTOM_TABLE : </h3>
            <div
                style={{
                    textAlign: "left",
                    marginLeft: "15%",
                    marginRight: "10%",
                    marginBottom: "20px",
                }}
            >
                {data.map((it) => {
                    return <p>{JSON.stringify(it)}</p>;
                })}
            </div>
            <Button variant="outline-warning" onClick={getSinkData}>
                load sink data
            </Button>
        </div>
    );
};
