import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Orders from "./pages/Orders";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import Providers from "./Providers";
import OrderDetails from "./components/orders/OrderDetails";
function App() {
	return (
		<Providers>
			<Router>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/orders" element={<Orders />} />
						<Route path="/orders/:id" element={<OrderDetails />} />
					</Routes>
				</Layout>
			</Router>
		</Providers>
	);
}

export default App;
