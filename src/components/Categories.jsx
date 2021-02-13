import React from "react";


export const Categories = (props) => {
    return (
        <>
            <div className="categories">
                <ul>
                    {
                        props.items.map((item, index) =>
                            <li
                                onClick={() => props.setActiveItem(index)}
                                key={`${item}_${index}`}
                                className={props.activeItem == index ? 'active' : ''}
                            >
                                {item}
                            </li>)
                    }
                </ul>
            </div>
        </>
    )
}