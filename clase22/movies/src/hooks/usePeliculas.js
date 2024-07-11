import { useState, useEffect } from 'react';
import Movie from '../class/Movie';

function usePeliculas() {
    const [peliculas, setPeliculas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            const storagePeliculas = JSON.parse(localStorage.getItem("Peliculas"));
            if (storagePeliculas) {
                setPeliculas(storagePeliculas.map(p => new Movie(p._id, p._title, p._year, p._duration, p._genres, p._director)));
            }
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }, []);

    const buscarPeliculasPorGenero = (genero) => {
        return peliculas.filter(pelicula => pelicula.genres.toLowerCase().includes(genero.toLowerCase()));
    };

    const buscarPeliculasPorDirector = (director) => {
        return peliculas.filter(pelicula => pelicula.director.toLowerCase().includes(director.toLowerCase()));
    };

    const crearPelicula = (nuevaPelicula) => {
        const updatedPeliculas = [...peliculas, nuevaPelicula];
        setPeliculas(updatedPeliculas);
        localStorage.setItem("Peliculas", JSON.stringify(updatedPeliculas.map(p => ({
            _id: p.id,
            _title: p.title,
            _year: p.year,
            _duration: p.duration,
            _genres: p.genres,
            _director: p.director
        }))));
    };

    const eliminarPelicula = (titulo) => {
        const updatedPeliculas = peliculas.filter(pelicula => pelicula.title.toLowerCase() !== titulo.toLowerCase());
        setPeliculas(updatedPeliculas);
        localStorage.setItem("Peliculas", JSON.stringify(updatedPeliculas.map(p => ({
            _id: p.id,
            _title: p.title,
            _year: p.year,
            _duration: p.duration,
            _genres: p.genres,
            _director: p.director
        }))));
    };

    return { peliculas, loading, error, buscarPeliculasPorGenero, buscarPeliculasPorDirector, crearPelicula, eliminarPelicula };
}

export default usePeliculas;
