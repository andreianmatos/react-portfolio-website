import '../App.css';
import React from 'react';
import { SidebarData } from './SidebarData';

function Sidebar() {
    return(
        <div className='Sidebar'>
            <ul className='SidebarList'>
                {SidebarData.map((val,key) =>  {
                    return (
                    <li 
                        key={key} 
                        className = "row"
                        id="" 
                        onClick={() => {
                            document.getElementById(val.title).scrollIntoView({ 
                                behavior: 'smooth' 
                            });
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