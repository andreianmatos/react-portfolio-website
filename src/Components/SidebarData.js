import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon/>,
        link: "/Home",
    },
    {
        title: "About",
        icon: <PersonIcon/>,
        link: "/About",
    },
    {
        title: "Services",
        icon: <WorkOutlineIcon/>,
        link: "/Services",
    }, 
    {
        title: "Contact",
        icon: <EmailIcon/>,
        link: "/Contact",
    }
]

export default SidebarData;