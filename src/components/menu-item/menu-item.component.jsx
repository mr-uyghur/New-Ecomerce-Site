import React from 'react';
import './menu-item.scss'

//Dynamically generate the title by passing it to this component as props
const MenuItem = ({title, imageUrl,size}) =>{
    return(
        <div
        className={`${size} menu-item`} >

        <div  
        style = {{
            backgroundImage : `url(${imageUrl})`
        }} 
        className = "background-image"
        >
            </div>
        
        <div className="content">
            <h1 className="title">
                {title.toUpperCase()}
            </h1>
            <span className="subtitle">Shop now</span>
        </div>
    </div>
    )

}

export default MenuItem