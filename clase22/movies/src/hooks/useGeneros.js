import { useState, useEffect } from 'react';
import { fetchInicialGeneros } from '../api/GeneroAPI';
import Genero from '../class/Genero';

function useGenero() {
    const [generos, setGeneros] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadGeneros() {
            try {
                const storageGeneros = JSON.parse(localStorage.getItem("Generos"));
                if (storageGeneros) {
                    setGeneros(storageGeneros.map(g => new Genero(g._id, g._name)));
                } else {
                    const data = await fetchInicialGeneros();
                    const generos = data.map(g => new Genero(g.id, g.name));
                    setGeneros(generos);
                    localStorage.setItem("Generos", JSON.stringify(generos.map(g => ({ _id: g.id, _name: g.name }))));
                }
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        }
        loadGeneros();
    }, []);

    const buscarGenero = (nombre) => {
        return generos.find(genero => genero.name.toLowerCase() === nombre.toLowerCase());
    };

    const crearGenero = (nuevoGenero) => {
        const updatedGeneros = [...generos, nuevoGenero];
        setGeneros(updatedGeneros);
        localStorage.setItem("Generos", JSON.stringify(updatedGeneros.map(g => ({ _id: g.id, _name: g.name }))));
    };

    const eliminarGenero = (nombre) => {
        const updatedGeneros = generos.filter(genero => genero.name.toLowerCase() !== nombre.toLowerCase());
        setGeneros(updatedGeneros);
        localStorage.setItem("Generos", JSON.stringify(updatedGeneros.map(g => ({ _id: g.id, _name: g.name }))));
    };

    return { generos, loading, error, buscarGenero, crearGenero, eliminarGenero };
}

export default useGenero;
