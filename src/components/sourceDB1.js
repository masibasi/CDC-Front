import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Button } from "react-bootstrap";

export const SourceDB1 = () => {
    const [accountId, setAccountId] = useState("000");
    const [roleId, setRoleId] = useState("Insert");
    const [userName, setUserName] = useState("From");
    const [userDescription, setUserDescription] = useState("React");
    const [updateDate, setUpdateDate] = useState("1111-11-11 10:11:12");

    const postSourceAccount = () => {
        const newAccount = {
            account_id: parseInt(accountId),
            role_id: roleId,
            user_name: userName,
            user_description: userDescription,
            update_date: updateDate,
        };
        Axios.post("http://localhost:8080/api/new-account", newAccount)
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
            <h4>Create New Account In</h4>
            <h5>SourceDB.accounts</h5>
            <div className="inputs">
                <div className="inputWrapper">
                    account_id :
                    <input
                        value={accountId}
                        onChange={(e) => setAccountId(e.target.value)}
                    />
                </div>
                <div className="inputWrapper">
                    role_id :
                    <input
                        value={roleId}
                        onChange={(e) => setRoleId(e.target.value)}
                    />
                </div>
                <div className="inputWrapper">
                    user_name :
                    <input
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div className="inputWrapper">
                    user_description :
                    <input
                        value={userDescription}
                        onChange={(e) => setUserDescription(e.target.value)}
                    />
                </div>
                <div className="inputWrapper">
                    update_date :
                    <input
                        value={updateDate}
                        onChange={(e) => setUpdateDate(e.target.value)}
                    />
                </div>
                <Button
                    className="createBtn"
                    variant="outline-success"
                    onClick={postSourceAccount}
                >
                    Create Account
                </Button>
            </div>
        </div>
    );
};
