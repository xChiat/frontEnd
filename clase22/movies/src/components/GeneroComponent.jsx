import React, { useState } from 'react';
import useGenero from '../hooks/useGeneros';
import Genero from '../class/Genero';

const GeneroComponent = () => {
    const { generos, loading, error, buscarGenero, crearGenero, eliminarGenero } = useGenero();
    const [nombreGenero, setNombreGenero] = useState('');
    const [resultadoBusqueda, setResultadoBusqueda] = useState(null);
    const [errorBusqueda, setErrorBusqueda] = useState('');
    const [errorEliminar, setErrorEliminar] = useState('');
    const [errorAgregar, setErrorAgregar] = useState('');

    const handleAgregar = (e) => {
        e.preventDefault();
        setErrorAgregar('');

        // Verificar si el género ya existe
        const generoExistente = buscarGenero(nombreGenero);
        if (generoExistente) {
            setErrorAgregar(`El género llamado ${nombreGenero} ya existe.`);
            return;
        }

        const maxId = generos.length > 0 ? Math.max(...generos.map(g => g.id)) : 0;
        const nuevoGenero = new Genero(maxId + 1, nombreGenero);
        crearGenero(nuevoGenero);
        setNombreGenero('');
    };

    const handleEliminar = (e) => {
        e.preventDefault();
        setErrorEliminar('');
        const genero = buscarGenero(nombreGenero);
        if (genero) {
            eliminarGenero(nombreGenero);
            setNombreGenero('');
        } else {
            setErrorEliminar(`No existe ningún género llamado ${nombreGenero}, por lo tanto no se puede eliminar`);
        }
    };

    const handleBuscar = (e) => {
        e.preventDefault();
        const genero = buscarGenero(nombreGenero);
        if (genero) {
            setResultadoBusqueda(genero);
            setErrorBusqueda('');
        } else {
            setResultadoBusqueda(null);
            setErrorBusqueda(`No existe ningún género llamado ${nombreGenero}`);
        }
        setNombreGenero('');
    };

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="container-xl">
            <div className="row">
                <div className="col-8">
                    <h2>Género</h2>
                    <form>
                        <div className='form-floating mb-3'>
                            <input
                                className="form-control"
                                type="text"
                                value={nombreGenero}
                                onChange={(e) => setNombreGenero(e.target.value)}
                                placeholder="Escriba el nombre del género"
                            />
                            <label htmlFor="floatingInput">Escriba el nombre del género</label>
                        </div>
                        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <button className="btn btn-secondary mt-3" onClick={handleAgregar}>Agregar</button>
                            <button className="btn btn-primary mt-3" onClick={handleBuscar}>Buscar</button>
                            <button className="btn btn-danger mt-3" onClick={handleEliminar}>Eliminar</button>
                        </div>
                    </form>
                    {errorAgregar && (
                        <div className="alert alert-danger mt-4">
                            {errorAgregar}
                        </div>
                    )}
                    {errorBusqueda && (
                        <div className="alert alert-danger mt-4">
                            {errorBusqueda}
                        </div>
                    )}
                    {errorEliminar && (
                        <div className="alert alert-danger mt-4">
                            {errorEliminar}
                        </div>
                    )}
                    {resultadoBusqueda && (
                        <div className="mt-4">
                            <h4>Resultado búsqueda:</h4>
                            <p>ID: {resultadoBusqueda.id} Género: {resultadoBusqueda.name}</p>
                        </div>
                    )}
                </div>
                <div className="col-4">
                    <table className="table mt-4">
                        <thead className="table table-dark">
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">Nombre</th>
                            </tr>
                        </thead>
                        <tbody>
                            {generos.map((genero) => (
                                <tr key={genero.id}>
                                    <td>{genero.id}</td>
                                    <td>{genero.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default GeneroComponent;
