import React, {useState} from 'react'
import {Categories} from "../components/Categories";
import {SortPopup} from "../components/SortPopup";
import {PizzaBlock} from "../components/PizzaBlock";


export function Home(props) {
   const [activeItem, setActiveItem] = useState(0)

    console.log(props)
   return (
       <div className="container">
           <div className="content__top">
               <Categories setActiveItem = {(index) => setActiveItem(index)}
                           activeItem = {activeItem}
                           items={['Все','Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']}/>
               <SortPopup/>
           </div>
           <h2 className="content__title">Все пиццы</h2>
           <div className="content__items">
               {
                   props.items.map((obj) => <PizzaBlock key={obj.id} {...obj}/>)
               }
           </div>
       </div>
   )
}