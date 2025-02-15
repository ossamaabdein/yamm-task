import React from 'react'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import { Toolbar, Typography } from '@mui/material';


interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }

  const AppBar = () => {
      const drawerWidth = 210;
      
      const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
      })<AppBarProps>(({ theme }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        variants: [
          {
            props: ({ open }) => open,
            style: {
              marginLeft: drawerWidth,
              width: `calc(100% - ${drawerWidth}px)`,
              transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
            },
          },
        ],
      }));
  return (
    <AppBar
    position="fixed"
    open={true}
    style={{ backgroundColor: "rgb(121, 78, 219)" }}
>
    <Toolbar>
        <Typography variant="h6" noWrap component="div">
            Yamm
        </Typography>
    </Toolbar>
</AppBar>
  )
}

export default AppBar