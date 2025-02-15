import { styled, Theme, CSSObject } from "@mui/material/styles";
import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";


import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import MuiDrawer from "@mui/material/Drawer";
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyIcon from '@mui/icons-material/Key';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useLocation, useParams } from "react-router-dom";
import { yammLogo } from "../../utils/icons";

const SideNav = () => {
	const drawerWidth = 210;

	const openedMixin = (theme: Theme): CSSObject => ({
		width: drawerWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		overflowX: "hidden",
	});

	const closedMixin = (theme: Theme): CSSObject => ({
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: "hidden",
		width: `calc(${theme.spacing(7)} + 1px)`,
		[theme.breakpoints.up("sm")]: {
			width: `calc(${theme.spacing(8)} + 1px)`,
		},
	});

	const DrawerHeader = styled("div")(({ theme }) => ({
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	}));

	const Drawer = styled(MuiDrawer, {
		shouldForwardProp: (prop) => prop !== "open",
	})(({ theme }) => ({
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: "nowrap",
		boxSizing: "border-box",
		variants: [
			{
				props: ({ open }) => open,
				style: {
					...openedMixin(theme),
					"& .MuiDrawer-paper": openedMixin(theme),
				},
			},
			{
				props: ({ open }) => !open,
				style: {
					...closedMixin(theme),
					"& .MuiDrawer-paper": closedMixin(theme),
				},
			},
		],
	}));

	const location = useLocation();	

    const navMenu = [
        {
            name: "Home",
            icon: <HomeIcon />,
            path: "/",
        },
        {
            name: "Orders",
            icon: <ListAltIcon />,
            path: "/orders",
        },
        {
            name: "Stores",
            icon: <LocalGroceryStoreIcon />,
            path: "#",
        },
        {
            name: "Reports",
            icon: <AssessmentIcon />,
            path: "#",
        },
        {
            name: "Permissions",
            icon: <KeyIcon />,
            path: "#",
        },
        {
            name: "Settings",
            icon: <SettingsIcon />,
            path: "#",
        }, 
        {
            name: "Logout",
            icon: <LogoutIcon />,
            path: "#",
        }
    ]

	return (
		<Drawer variant="permanent" open={true}>
			<DrawerHeader className="drawerHeader">
				<div className="logo">
					{yammLogo}
				</div>
			</DrawerHeader>
			<Divider />
			<List disablePadding>
				{navMenu?.slice(0, 4)?.map((item) => (
					<Link to={item?.path} key={item?.name}>
						<ListItem disablePadding sx={{ display: "block",backgroundColor: location.pathname === item?.path ? "rgba(0, 0, 0, 0.05)" : "", }}>
							<ListItemButton>
								<ListItemIcon>
									{item?.icon}
								</ListItemIcon>
								<ListItemText
									primary={item?.name}
								/>
							</ListItemButton>
						</ListItem>
					</Link>
				))}
			</List>
			<Divider />
			<List>
				{navMenu?.slice(4)?.map((item) => (
					<Link to={item?.path} key={item.name}>
						<ListItem disablePadding sx={{ display: "block" }}>
							<ListItemButton>
								<ListItemIcon>
									{item.icon}
								</ListItemIcon>
								<ListItemText
									primary={item.name}
                                />
							</ListItemButton>
						</ListItem>
					</Link>
				))}
			</List>
		</Drawer>
	);
};

export default SideNav;
