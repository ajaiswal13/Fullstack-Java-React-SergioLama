import React, { useEffect } from "react";
import { request } from "./axios_helper";
import { useState } from "react";
const AuthContent = () => {

    const [data, setData] = useState();

    const fetchData = async () => {
        const response = await request("GET", "/messages", {});
        setData(response.data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="row justify-content-md-center">
            <div className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">Backend response</h5>
                        <p className="card-text">Content:</p>
                        <ul>
                            {data && data.map((message) =>
                                <li key={message}>{message}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AuthContent;