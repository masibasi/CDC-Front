import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Button } from "react-bootstrap";

export const DelSourceDB2 = () => {
    const [id, setId] = useState("0");
    const deletePostHandler = () => {
        Axios.post("http://localhost:8080/api/delete-data", {
            id: parseInt(id),
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
            <h4>Delete Data In</h4>
            <h5> SourceDB.CUSTOM_TABLE</h5>
            <div className="inputs">
                <div className="inputWrapper">
                    id :
                    <input value={id} onChange={(e) => setId(e.target.value)} />
                </div>

                <Button
                    onClick={deletePostHandler}
                    className="deleteBtn"
                    variant="outline-danger"
                >
                    Delete Row
                </Button>
            </div>
        </div>
    );
};
