import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { SourceDB1 } from "./components/sourceDB1";
import { SinkDB } from "./components/sinkDB";
import { SinkDB2 } from "./components/sinkDB2";
import Button from "react-bootstrap/Button";
import { DelSourceDB1 } from "./components/delSourceDB1";
import { SourceDB2 } from "./components/sourceDB2";
import { DelSourceDB2 } from "./components/delSourceDB2";

function App() {
    const [showSink1, setShowSink1] = useState(true);
    const [showSink2, setShowSink2] = useState(false);

    return (
        <div className="App">
            <h2 className="title">CDC Demo</h2>
            {/* <h4 className="description">
                {
                    "SourceDB -> Kafka Connect -> Kafka -> JDBC Connector -> SinkDB"
                }
            </h4> */}
            <div className="btnWrapper">
                <Button
                    onClick={() => {
                        setShowSink1(true);
                        setShowSink2(false);
                    }}
                    variant="outline-primary"
                >
                    Show Sink 1
                </Button>
                <Button
                    onClick={() => {
                        setShowSink1(false);
                        setShowSink2(true);
                    }}
                    variant="outline-primary"
                >
                    Show Sink 2
                </Button>
            </div>
            <div className="controlerWrapper">
                {showSink1 ? (
                    <>
                        <SourceDB1 /> <DelSourceDB1 />
                    </>
                ) : null}
                {showSink2 ? (
                    <>
                        <SourceDB2 />
                        <DelSourceDB2 />
                    </>
                ) : null}
            </div>

            <div className="dbDisplayWrapper">
                {showSink1 ? <SinkDB /> : null}
                {showSink2 ? <SinkDB2 /> : null}
            </div>
        </div>
    );
}

export default App;
