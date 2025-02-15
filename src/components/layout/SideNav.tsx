import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import MuiDrawer from "@mui/material/Drawer";
import { IconButton } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyIcon from '@mui/icons-material/Key';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";

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
            path: "/",
        },
        {
            name: "Reports",
            icon: <AssessmentIcon />,
            path: "/",
        },
        {
            name: "Permissions",
            icon: <KeyIcon />,
            path: "/",
        },
        {
            name: "Settings",
            icon: <SettingsIcon />,
            path: "/",
        }, 
        {
            name: "Logout",
            icon: <LogoutIcon />,
            path: "/",
        }
    ]

	return (
		<Drawer variant="permanent" open={true}>
			<DrawerHeader className="drawerHeader">
				<div className="logo">
					<svg
						fill="none"
						height="29.4"
						width="100"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 371 117"
					>
						<g opacity="1">
							<path
								d="M205.013 28.5131C193.713 28.5131 186.113 33.8131 183.213 42.4131C182.913 43.3131 183.413 44.2131 184.313 44.4131L192.813 46.7131C193.613 46.9131 194.413 46.5131 194.713 45.7131C196.213 41.5131 199.713 38.9131 205.013 38.9131C211.113 38.9131 215.113 42.2131 215.113 47.7131C215.113 49.3131 213.613 50.5131 212.013 50.1131L210.613 49.8131C207.913 49.1131 205.113 48.8131 202.213 48.8131C190.613 48.8131 183.013 54.1131 183.013 64.6131C183.013 74.1131 190.713 79.9131 199.213 79.9131C205.313 79.9131 209.813 78.2131 213.013 74.8131C213.913 73.8131 215.513 74.5131 215.513 75.8131V77.3131C215.513 78.2131 216.213 78.9131 217.113 78.9131H226.113C227.013 78.9131 227.713 78.2131 227.713 77.3131V48.4131C227.713 35.6131 220.013 28.5131 205.013 28.5131ZM215.013 60.6131C215.013 66.3131 210.613 69.7131 204.513 69.7131C199.213 69.7131 196.513 67.4131 196.513 63.8131C196.513 59.9131 199.413 57.9131 204.313 57.9131C206.313 57.9131 208.913 58.4131 212.013 59.4131L215.013 60.3131V60.6131Z"
								fill="rgb(121, 78, 219)"
							></path>
							<path
								d="M343.313 28.5131C339.013 28.5131 335.313 29.9131 332.413 32.9131C330.713 34.7131 327.813 34.5131 326.213 32.7131C323.713 30.0131 320.313 28.6131 316.313 28.6131C311.213 28.6131 307.413 30.6131 304.913 34.4131C304.413 35.2131 304.113 36.0131 303.913 37.0131L303.313 40.2131C303.213 40.6131 302.613 40.6131 302.513 40.2131C300.713 31.5131 294.513 28.7131 287.613 28.7131C283.313 28.7131 279.613 30.1131 276.713 33.1131C275.013 34.9131 272.113 34.7131 270.413 32.9131C267.913 30.2131 264.513 28.8131 260.513 28.8131C256.513 28.8131 253.313 30.0131 250.813 32.5131C249.913 33.4131 248.313 32.8131 248.313 31.5131C248.313 30.6131 247.613 29.9131 246.713 29.9131H236.513C235.613 29.9131 234.913 30.6131 234.913 31.5131V77.6131C234.913 78.5131 235.613 79.2131 236.513 79.2131H246.713C247.613 79.2131 248.313 78.5131 248.313 77.6131V49.1131C248.313 43.2131 251.313 39.9131 255.613 39.9131C259.913 39.9131 262.913 42.8131 262.913 48.1131V77.3131C262.913 78.2131 263.613 78.9131 264.513 78.9131H274.613C275.513 78.9131 276.213 78.2131 276.213 77.3131V48.6131C276.213 42.9131 279.013 39.5131 283.513 39.5131C287.713 39.5131 290.813 42.6131 290.813 48.0131V77.2131C290.813 78.1131 291.513 78.8131 292.413 78.8131H302.613C303.513 78.8131 304.213 78.1131 304.213 77.2131V49.1131C304.213 43.2131 307.213 39.9131 311.513 39.9131C315.813 39.9131 318.813 42.8131 318.813 48.1131V77.3131C318.813 78.2131 319.513 78.9131 320.413 78.9131H330.513C331.413 78.9131 332.113 78.2131 332.113 77.3131V48.6131C332.113 42.9131 334.913 39.5131 339.413 39.5131C343.713 39.5131 346.713 42.6131 346.713 48.0131V77.2131C346.713 78.1131 347.413 78.8131 348.313 78.8131H358.513C359.413 78.8131 360.113 78.1131 360.113 77.2131V45.5131C359.713 34.7131 353.413 28.5131 343.313 28.5131Z"
								fill="rgb(121, 78, 219)"
							></path>
							<path
								d="M170.213 30.4131L159.413 52.8131C158.513 54.7131 155.813 54.7131 154.913 52.7131L144.813 30.4131C144.513 29.8131 144.013 29.5131 143.413 29.5131H132.913C131.813 29.5131 131.013 30.7131 131.513 31.7131L149.913 71.1131C150.113 71.5131 150.113 72.0131 149.913 72.4131L141.113 90.9131C140.613 91.9131 141.413 93.1131 142.513 93.1131H152.513C153.113 93.1131 153.613 92.8131 153.913 92.2131L183.013 31.7131C183.513 30.7131 182.713 29.5131 181.613 29.5131H171.613C171.113 29.5131 170.513 29.9131 170.213 30.4131Z"
								fill="rgb(121, 78, 219)"
							></path>
						</g>
						<g>
							<path
								d="M112.613 35.1131L95.613 90.4131C91.813 102.713 78.613 109.713 66.313 106.013L54.713 102.413C44.613 99.3131 38.113 89.9131 38.113 79.8131C40.813 79.7131 43.4131 78.9131 45.9131 77.6131L60.313 69.9131C69.613 65.0131 73.113 53.5131 68.213 44.2131L55.313 20.0131L56.0131 17.8131C59.8131 5.51306 73.013 -1.48693 85.313 2.21307L96.9131 5.81306C109.413 9.61306 116.413 22.8131 112.613 35.1131Z"
								fill="rgb(121, 78, 219)"
								stroke="transparent"
							></path>
							<path
								d="M60.5131 69.9131L46.113 77.6131C43.613 78.9131 40.913 79.6131 38.313 79.8131C38.313 77.6131 38.613 75.3131 39.313 73.1131L55.613 20.0131L68.5131 44.2131C73.3131 53.5131 69.7131 65.0131 60.5131 69.9131Z"
								fill="#FF8389"
								stroke="transparent"
							></path>
							<path
								d="M55.4131 20.0131L39.1131 73.1131C38.4131 75.3131 38.1131 77.6131 38.1131 79.8131C30.9131 80.2131 23.813 76.5131 20.313 69.7131L2.21306 35.6131C-2.68694 26.3131 0.813089 14.8131 10.1131 9.91307L24.5131 2.21307C33.8131 -2.68693 45.3131 0.813068 50.2131 10.1131L55.4131 20.0131Z"
								fill="#FFCD2E"
								stroke="transparent"
							></path>
							<path
								d="M11.9132 97.9131C11.0132 97.4131 10.4131 96.713 9.81311 95.813C9.31311 94.913 9.01318 94.013 9.01318 93.013C9.01318 92.013 9.31311 91.013 9.81311 90.213C10.3131 89.313 11.0132 88.7131 11.9132 88.1131C12.8132 87.6131 13.7131 87.313 14.7131 87.313C15.7131 87.313 16.7132 87.6131 17.5132 88.1131C18.4132 88.6131 19.0132 89.313 19.6132 90.213C20.1132 91.113 20.4132 92.013 20.4132 93.013C20.4132 94.313 20.0131 95.513 19.2131 96.513C18.9131 96.913 18.6131 97.2131 18.3131 97.4131C17.3131 98.2131 16.1131 98.6131 14.8131 98.6131C13.7131 98.7131 12.8132 98.4131 11.9132 97.9131ZM17.1132 97.213C17.8132 96.813 18.4131 96.213 18.8131 95.513C19.2131 94.813 19.4132 94.0131 19.4132 93.1131C19.4132 92.2131 19.2131 91.513 18.8131 90.713C18.4131 90.013 17.8132 89.413 17.1132 89.013C16.4132 88.613 15.6131 88.4131 14.8131 88.4131C14.0131 88.4131 13.2132 88.613 12.5132 89.013C11.8132 89.413 11.2131 90.013 10.8131 90.713C10.4131 91.413 10.2131 92.2131 10.2131 93.1131C10.2131 94.0131 10.4131 94.713 10.8131 95.513C11.2131 96.213 11.8132 96.813 12.5132 97.213C13.2132 97.613 14.0131 97.813 14.8131 97.813C15.6131 97.813 16.4132 97.613 17.1132 97.213ZM12.9132 95.6131C12.8132 95.5131 12.8131 95.5131 12.8131 95.4131V90.713C12.8131 90.613 12.8132 90.513 12.9132 90.513C13.0132 90.413 13.0132 90.4131 13.1132 90.4131H15.0132C15.6132 90.4131 16.1132 90.513 16.4132 90.813C16.8132 91.113 16.9132 91.5131 16.9132 92.1131C16.9132 92.5131 16.8132 92.8131 16.6132 93.1131C16.4132 93.4131 16.2131 93.613 15.8131 93.713L16.8131 95.313C16.8131 95.413 16.9132 95.413 16.9132 95.513C16.9132 95.613 16.9131 95.713 16.8131 95.713C16.7131 95.813 16.7132 95.813 16.6132 95.813H16.4132C16.2132 95.813 16.1132 95.713 16.0132 95.513L14.9132 93.813H13.6132V95.4131C13.6132 95.5131 13.6132 95.6131 13.5132 95.6131C13.4132 95.7131 13.4131 95.713 13.3131 95.713H13.1132C13.0132 95.713 12.9132 95.7131 12.9132 95.6131ZM14.9132 92.9131C15.7132 92.9131 16.0132 92.6131 16.0132 92.1131C16.0132 91.5131 15.6132 91.313 14.9132 91.313H13.6132V93.013H14.9132V92.9131Z"
								fill="currentColor"
								stroke="transparent"
							></path>
						</g>
					</svg>
				</div>
			</DrawerHeader>
			<Divider />
			<List>
				{navMenu?.slice(0, 4)?.map((item) => (
					<Link to={item?.path} key={item?.name}>
						<ListItem disablePadding sx={{ display: "block" }}>
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
