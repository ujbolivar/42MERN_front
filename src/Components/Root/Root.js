import React from 'react';

import { Outlet } from 'react-router-dom';

import MyNav from "../Landing/MyNav";

function Root() {
    return (
        <div>
            <MyNav />
            <Outlet />
        </div>
    );
}

export default Root;