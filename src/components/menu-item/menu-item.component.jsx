import React from 'react';
import './menu-item.scss'
import { useNavigate } from 'react-router-dom';

//Dynamically generate the title by passing it to this component as props
const MenuItem = ({title, imageUrl,size,linkUrl}) =>{
    let navigate = useNavigate();
    return(
        <div
        className={`${size} menu-item`}
        onClick={() => navigate(`/${linkUrl}`)} >
        
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