import React from 'react'

import { useState, useEffect } from "react";

import axios from 'axios';

import MyForm from "../Notes/MyForm";
import MyHeader from "../Notes/MyHeader";
import BodyNotes from "../Notes/BodyNotes";

export default function Notes() {
    
    const [user, setUser] = useState(1);
    const [data, setData] = useState([]);
    
    const fetchData = async() => {
        let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setData(res.data);
    }
    
    useEffect(() => {
        fetchData();
    }, []);
    
    return (
        <div style={{ width: "100%" }}>
        <div style={{ display: "flex", width: "100%" }}>
        <MyForm data={data} setData={setData} />
        <MyHeader userNote={user} setUser={setUser} />
        </div>
        <BodyNotes data={data} user={user} />
        </div>
        )
    }
    