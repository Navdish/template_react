import { Box, Stack } from '@mui/material';
import { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom';

// import Sidebar from './Sidebar';
// import Header from './Header';

interface SidebarLayoutProps {
    children?: ReactNode;
}

const SidebarLayout: FC<SidebarLayoutProps> = () => {
    return (
        <>
            <Box sx={{display:'grid',width:"100vw",height:"100vh",gridTemplateColumns:'20% 80%', backgroundColor:"#F6F8FF"}}>
                {/* <Sidebar/> */}
                <Stack width={'100%'} sx={{boxSizing:"border-box"}} >
                    {/* <Header/> */}
                    <Outlet />
                </Stack>
            </Box>
        </>
    )
}

export default SidebarLayout;