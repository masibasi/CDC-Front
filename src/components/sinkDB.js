import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Button } from "react-bootstrap";

export const SinkDB = () => {
    const [accounts, setAccounts] = useState(["loading"]);

    useEffect(() => {}, []);

    const getSinkAccounts = () => {
        Axios.get("http://localhost:8081/api/accounts").then((response) => {
            if (response.data) {
                console.log(response.data);
                setAccounts(response.data);
            } else {
                alert("failed to");
            }
        });
    };
    return (
        <div className="SinkDB">
            <h3>SinkDB Accounts : </h3>
            <div className="selectDB">
                {accounts.map((it) => {
                    return <p key={it.account_id}>{JSON.stringify(it)}</p>;
                })}
            </div>
            <Button variant="outline-warning" onClick={getSinkAccounts}>
                load sink data
            </Button>
        </div>
    );
};
