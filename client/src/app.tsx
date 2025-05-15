import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './app.css';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';
import Development from './pages/Development';
import Inspirations from './pages/Inspirations';
import NewInspiration from './pages/inspirations/new';

function App() {
    return (
	<>
	    <Header />
		<Routes>
		    <Route path="/" element={<Home />} />
		    <Route path="/about" element={<About />} />
		    <Route path="/blog" element={<Blog />} />
		    <Route path="/gallery" element={<Gallery />} />
		    <Route path="/development" element={<Development />} />
		    <Route path="/inspirations" element={<Inspirations />} />
		    <Route path="/inspirations/new" element={<NewInspiration />} />
		</Routes>
	    <Footer />
	</>
    );
}

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
	<BrowserRouter>
	    <App />
	</BrowserRouter>
    </React.StrictMode>
)
