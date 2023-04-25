import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Button } from "react-bootstrap";

export const DelSourceDB1 = () => {
    const [accountId, setAccountId] = useState("0");
    const deletePostHandler = () => {
        Axios.post("http://localhost:8080/api/delete-account", {
            account_id: parseInt(accountId),
        })
            .then(function (response) {
                alert(response.data);
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div className="SourceDB">
            <h4>Delete Account In</h4>
            <h5> SourceDB.accounts</h5>
            <div className="inputs">
                <div className="inputWrapper">
                    account_id :
                    <input
                        value={accountId}
                        onChange={(e) => setAccountId(e.target.value)}
                    />
                </div>

                <Button
                    className="deleteBtn"
                    variant="outline-danger"
                    onClick={deletePostHandler}
                >
                    Delete Account
                </Button>
            </div>
        </div>
    );
};
