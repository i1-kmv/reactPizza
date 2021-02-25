import React, {useState} from 'react'
import {Header} from "./components/Header"
import {Home} from "./pages/Home"
import {Route} from "react-router-dom"
import {Cart} from "./pages/Cart"


function App() {

    const [pizzas, setPizzas] = useState([])

    React.useEffect(() => {
       fetch(`http://localhost:3000/db.json`).then((resp) => resp.json()).then(
           json => {
               setPizzas(json.pizzas)
           }
       )
    }, [])

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
