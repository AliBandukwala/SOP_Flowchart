import { Icon } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import logo from '../assets/logo.png'

// An Appbar for UI purposes
const Appbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Icon style={{width:"100px", height:"50px"}}>
                    <img alt="" src={logo} width="100px" height="50px" />
                </Icon>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign:"start", fontWeight:600, marginLeft:"10px" }}>
                    SOP Flowchart
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Appbar