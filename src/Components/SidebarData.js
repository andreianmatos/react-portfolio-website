import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

export const SidebarData = [
    {
        n: 0,
        title: "Home",
        icon: <HomeIcon/>,
        link: "/Home",
    },
    {
        n: 1,
        title: "About",
        icon: <PersonIcon/>,
        link: "/About",
    },
    {
        n: 2,
        title: "Services",
        icon: <WorkOutlineIcon/>,
        link: "/Services",
    }, 
    {
        n: 3,
        title: "Contact",
        icon: <EmailIcon/>,
        link: "/Contact",
    }
]

export default SidebarData;