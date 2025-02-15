import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from './AppBar';
import SideNav from './SideNav';

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar />
      <SideNav />
			<ToastContainer
				autoClose={2000}
				draggable={false}
				hideProgressBar={true}
				position="bottom-center"
				transition={Slide}
			/>
			<Box component="main" sx={{ flexGrow: 1, paddingX: 0, paddingY: 8 }}>
				{children}
			</Box>
		</Box>
	);
}
