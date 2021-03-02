import React, {useState} from 'react'
import {Header} from "./components/Header"
import {Home} from "./pages/Home"
import {Route} from "react-router-dom"
import {Cart} from "./pages/Cart"
import axios from "axios";


function App() {

    const [pizzas, setPizzas] = useState([])

    React.useEffect(() => {
        axios.get(`http://localhost:3000/db.json`).then(({data}) => {
            setPizzas(data.pizzas)
        })})


    return (
        <>
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route exact path='/' render={() => <Home items={pizzas}/>}/>
                    <Route exact path='/cart' render={() => <Cart/>}/>
                </div>
            </div>
        </>
    );
}

export default App;
