import '../App.css';
import React from 'react';
import { SidebarData } from './SidebarData';
import MenuIcon from '@mui/icons-material/Menu';

var currentDisplay = false;

function showSidebar() {
    console.log(currentDisplay)
    currentDisplay = !currentDisplay;
    document.getElementById('Sidebar').style.display = currentDisplay ? "block" : "none";
}

function Sidebar() {
    return(
        <div className='Sidebar'>
            <div className='mobile-Sidebar'>
                <button
                    className='mobile-Sidebar-btn'
                    onClick={showSidebar}
                >
                    <MenuIcon fontSize="large"/>
                </button>
            </div>
        <div className='pc-Sidebar' id="Sidebar">
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
        </div>
    )
}

export default Sidebar;