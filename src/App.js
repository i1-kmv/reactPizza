import React, {useState} from 'react';
import {Header} from "./components/Header";
import {Categories} from "./components/Categories";
import {SortPopup} from "./components/SortPopup";
import {Home} from "./pages/Home";
import {Route} from "react-router-dom";
import {Cart} from "./pages/Cart";


function App() {

    return (
        <>
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/cart' component={Cart}/>
                </div>
            </div>
        </>
    );
}

export default App;
