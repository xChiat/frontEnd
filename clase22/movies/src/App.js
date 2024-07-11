import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import GeneroComponent from './components/GeneroComponent';
import DirectorComponent from './components/DirectorComponent';
import PeliculasComponent from './components/PeliculasComponent';

const App = () => {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Navbar</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/genero">Genero</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/director">Director</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/peliculas">Películas</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container mt-4">
                    <Routes>
                        <Route path="/" exact element={<GeneroComponent />} />
                        <Route path="/genero" element={<GeneroComponent />} />
                        <Route path="/director" element={<DirectorComponent />} />
                        <Route path="/peliculas" element={<PeliculasComponent />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
