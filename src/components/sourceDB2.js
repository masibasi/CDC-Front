import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Button } from "react-bootstrap";

export const SourceDB2 = () => {
    const [id, setId] = useState("0");
    const [title, setTitle] = useState("test");
    const [name, setName] = useState("Jimin");

    const postNewData = () => {
        const newData = {
            id: parseInt(id),
            title: title,
            name: name,
        };
        Axios.post("http://localhost:8080/api/new-data", newData)
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
            <h4>Create New Data In</h4>
            <h5>SourceDB.CUSTOM_TABLE</h5>
            <div className="inputs">
                <div className="inputWrapper">
                    id :
                    <input value={id} onChange={(e) => setId(e.target.value)} />
                </div>
                <div className="inputWrapper">
                    title :
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="inputWrapper">
                    name :
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <Button
                    onClick={postNewData}
                    className="createBtn"
                    variant="outline-success"
                >
                    Create Data
                </Button>
            </div>
        </div>
    );
};
