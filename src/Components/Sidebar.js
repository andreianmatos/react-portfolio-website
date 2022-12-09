import '../App.css';
import React from 'react';
import { SidebarData } from './SidebarData';

var current = "home";

function Sidebar() {
    return(
        <div className='Sidebar'>
            <ul className='SidebarList'>
                {SidebarData.map((val,key) =>  {
                    return (
                    <li 
                        key={key} 
                        className = "row"
                        id={current === val.title ? "active" : ""} //find way to check if in view
                        onClick={() => {
                            document.getElementById(val.title).scrollIntoView({ 
                                behavior: 'smooth' 
                            });
                            current = val.title;
                            //window.location.pathname = val.link;
                        }}
                    > 
                        <div id="icon">{val.icon}</div>
                        <div id="title">{val.title}</div>
                    </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Sidebar;