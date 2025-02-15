import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Orders from "./pages/Orders";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import Providers from "./Providers";
function App() {
	return (
		<Providers>
			<Router>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/orders" element={<Orders />} />
					</Routes>
				</Layout>
			</Router>
		</Providers>
	);
}

export default App;
