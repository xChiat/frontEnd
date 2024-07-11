import React, { useState } from 'react';
import usePeliculas from '../hooks/usePeliculas';
import useDirector from '../hooks/useDirector'; 
import useGenero from '../hooks/useGeneros'; 
import Movie from '../class/Movie';

const PeliculasComponent = () => {
    const { peliculas, loading, error, buscarPeliculasPorGenero, buscarPeliculasPorDirector, crearPelicula, eliminarPelicula } = usePeliculas();
    const { directores } = useDirector(); 
    const { generos } = useGenero(); 

    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [duration, setDuration] = useState('');
    const [genres, setGenres] = useState('');
    const [director, setDirector] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [searchType, setSearchType] = useState('genero'); // 'genero' o 'director'
    const [resultadosBusqueda, setResultadosBusqueda] = useState([]);
    const [errorBusqueda, setErrorBusqueda] = useState('');
    const [errorAgregar, setErrorAgregar] = useState('');

    const handleAgregar = (e) => {
        e.preventDefault();
        setErrorAgregar('');

        // Verificar existencia del director
        const directorExiste = directores.some(d => `${d.firstName} ${d.lastName}`.toLowerCase() === director.toLowerCase());
        if (!directorExiste) {
            setErrorAgregar(`El director ${director} no existe.`);
            return;
        }

        // Verificar existencia de los géneros
        const generosArray = genres.split(',').map(g => g.trim().toLowerCase());
        const generosValidos = generosArray.every(g => generos.some(gen => gen.name.toLowerCase() === g));
        if (!generosValidos) {
            setErrorAgregar(`Uno o más géneros no existen.`);
            return;
        }

        // Verificación del formato de duración
        let duracionEnMinutos;
        if (/^\d+$/.test(duration)) {
            // Si solo se introducen minutos
            duracionEnMinutos = parseInt(duration, 10);
        } else if (/^\d+:\d{2}$/.test(duration)) {
            // Si se introduce en formato horas:minutos
            const [horas, minutos] = duration.split(':').map(Number);
            duracionEnMinutos = horas * 60 + minutos;
        } else {
            setErrorAgregar('Formato de duración no válido. Use minutos totales o el formato horas:minutos.');
            return;
        }

        const nuevaPelicula = new Movie(peliculas.length + 1, title, year, duracionEnMinutos, genres, director);
        crearPelicula(nuevaPelicula);
        setTitle('');
        setYear('');
        setDuration('');
        setGenres('');
        setDirector('');
    };

    const handleBuscar = (e) => {
        e.preventDefault();
        let resultados;
        setErrorBusqueda('');
        if (searchType === 'genero') {
            resultados = buscarPeliculasPorGenero(searchTerm);
            if (resultados.length === 0) {
                setErrorBusqueda(`No existe ninguna película perteneciente al género ${searchTerm}`);
            }
        } else if (searchType === 'director') {
            resultados = buscarPeliculasPorDirector(searchTerm);
            if (resultados.length === 0) {
                setErrorBusqueda(`No existe ninguna película dirigida por ${searchTerm}`);
            }
        }
        setResultadosBusqueda(resultados);
    };

    const handleEliminar = (e) => {
        e.preventDefault();
        eliminarPelicula(title);
        setTitle('');
    };

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="container-xl">
            <div className="row">
                <div className="col-8">
                    <h2>Películas</h2>
                    <form onSubmit={handleAgregar}>
                        <div className='form-floating mb-3'>
                            <input
                                className="form-control"
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Título de la película"
                            />
                            <label htmlFor="floatingInput">Título</label>
                        </div>
                        <div className='form-floating mb-3'>
                            <input
                                className="form-control"
                                type="number"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                placeholder="Año"
                            />
                            <label htmlFor="floatingInput">Año</label>
                        </div>
                        <div className='form-floating mb-3'>
                            <input
                                className="form-control"
                                type="text"
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                                placeholder="Duración"
                            />
                            <label htmlFor="floatingInput">Duración (minutos totales o horas:minutos)</label>
                        </div>
                        <div className='form-floating mb-3'>
                            <input
                                className="form-control"
                                type="text"
                                value={genres}
                                onChange={(e) => setGenres(e.target.value)}
                                placeholder="Géneros"
                            />
                            <label htmlFor="floatingInput">Géneros</label>
                        </div>
                        <div className='form-floating mb-3'>
                            <input
                                className="form-control"
                                type="text"
                                value={director}
                                onChange={(e) => setDirector(e.target.value)}
                                placeholder="Director"
                            />
                            <label htmlFor="floatingInput">Director</label>
                        </div>
                        <button className="btn btn-secondary mt-3" type="submit">Agregar</button>
                    </form>
                    {errorAgregar && (
                        <div className="alert alert-danger mt-4">
                            {errorAgregar}
                        </div>
                    )}

                    <div className="mt-4">
                        <form onSubmit={handleBuscar}>
                            <div className='form-floating mb-3'>
                                <input
                                    className="form-control"
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Buscar"
                                />
                                <label htmlFor="floatingInput">Buscar</label>
                            </div>
                            <div className='form-floating mb-3'>
                                <select
                                    className="form-select"
                                    value={searchType}
                                    onChange={(e) => setSearchType(e.target.value)}
                                >
                                    <option value="genero">Género</option>
                                    <option value="director">Director</option>
                                </select>
                                <label htmlFor="floatingSelect">Tipo de búsqueda</label>
                            </div>
                            <button className="btn btn-primary mt-3" type="submit">Buscar</button>
                        </form>
                        {errorBusqueda && (
                            <div className="alert alert-danger mt-4">
                                {errorBusqueda}
                            </div>
                        )}
                        {resultadosBusqueda.length > 0 && (
                            <div className="mt-4">
                                <h4>Resultados de la búsqueda:</h4>
                                <ul>
                                    {resultadosBusqueda.map((pelicula) => (
                                        <li key={pelicula.id}>
                                            {pelicula.title} ({pelicula.year}) - {pelicula.duration} min - {pelicula.genres} - Dirigida por: {pelicula.director}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="mt-4">
                        <form onSubmit={handleEliminar}>
                            <div className='form-floating mb-3'>
                                <input
                                    className="form-control"
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Título de la película a eliminar"
                                />
                                <label htmlFor="floatingInput">Título de la película a eliminar</label>
                            </div>
                            <button className="btn btn-danger mt-3" type="submit">Eliminar</button>
                        </form>
                    </div>
                </div>
                <div className="col-4">
                    <table className="table mt-4">
                        <thead className="table table-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Título</th>
                                <th scope="col">Año</th>
                                <th scope="col">Duración</th>
                                <th scope="col">Géneros</th>
                                <th scope="col">Director</th>
                            </tr>
                        </thead>
                        <tbody>
                            {peliculas.map((pelicula) => (
                                <tr key={pelicula.id}>
                                    <td>{pelicula.id}</td>
                                    <td>{pelicula.title}</td>
                                    <td>{pelicula.year}</td>
                                    <td>{pelicula.duration}</td>
                                    <td>{pelicula.genres}</td>
                                    <td>{pelicula.director}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PeliculasComponent;
