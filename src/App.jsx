/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";

// Components
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";

function App() {
	const [name, setName] = useState("");

	return (
		<div className='App'>
			<h1>React Router</h1>
			<BrowserRouter>
				<Navbar />
				<SearchForm />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/products/:id/info' element={<Info />} />
					<Route path='/products/:id' element={<Product />} />
					<Route path='/search' element={<Search />} />
					<Route path='/company' element={<Navigate to='/about' />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
