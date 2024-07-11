import React, { useState } from 'react';
import useDirector from '../hooks/useDirector';
import Director from '../class/Director';

const DirectorComponent = () => {
    const { directores, loading, error, buscarDirector, crearDirector, eliminarDirector } = useDirector();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [searchName, setSearchName] = useState('');
    const [deleteName, setDeleteName] = useState('');
    const [resultadoBusqueda, setResultadoBusqueda] = useState(null);
    const [eliminacionExitosa, setEliminacionExitosa] = useState(false);
    const [errorBusqueda, setErrorBusqueda] = useState('');
    const [errorAgregar, setErrorAgregar] = useState('');

    const handleAgregar = (e) => {
        e.preventDefault();
        setErrorAgregar('');
        const nombreCompleto = `${firstName.toLowerCase()} ${lastName.toLowerCase()}`;
        const directorExistente = directores.find(director => {
            const fullName = `${director.firstName.toLowerCase()} ${director.lastName.toLowerCase()}`;
            return fullName === nombreCompleto;
        });
        if (directorExistente) {
            setErrorAgregar(`Ya existe un director llamado ${firstName} ${lastName}`);
        } else {
            const maxId = directores.length > 0 ? Math.max(...directores.map(d => d.id)) : 0;
            const nuevoDirector = new Director(maxId + 1, firstName, lastName, dob);
            crearDirector(nuevoDirector);
            setFirstName('');
            setLastName('');
            setDob('');
        }
    };

    const handleBuscar = (e) => {
        e.preventDefault();
        const director = buscarDirector(searchName);
        if (director) {
            setResultadoBusqueda(director);
            setErrorBusqueda('');
        } else {
            setResultadoBusqueda(null);
            setErrorBusqueda(`No existe ningún director llamado ${searchName}`);
        }
    };

    const handleEliminar = (e) => {
        e.preventDefault();
        const exito = eliminarDirector(deleteName);
        console.log('Eliminación exitosa:', exito);
        setDeleteName('');
        setEliminacionExitosa(exito);
    };

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="container-xl">
            <div className="row">
                <div className="col-8">
                    <h2>Director</h2>
                    <form onSubmit={handleAgregar}>
                        <div className='form-floating mb-3'>
                            <input
                                className="form-control"
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="Escriba el nombre del director"
                            />
                            <label htmlFor="floatingInput">Nombre</label>
                        </div>
                        <div className='form-floating mb-3'>
                            <input
                                className="form-control"
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Escriba el apellido del director"
                            />
                            <label htmlFor="floatingInput">Apellido</label>
                        </div>
                        <div className='form-floating mb-3'>
                            <input
                                className="form-control"
                                type="date"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                placeholder="Fecha de nacimiento"
                            />
                            <label htmlFor="floatingInput">Fecha de nacimiento</label>
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
                                    value={searchName}
                                    onChange={(e) => setSearchName(e.target.value)}
                                    placeholder="Nombre del director a encontrar"
                                />
                                <label htmlFor="floatingInput">Nombre del director a encontrar /Nombre Apellido/</label>
                            </div>
                            <button className="btn btn-primary mt-3" type="submit">Buscar</button>
                        </form>
                        {errorBusqueda && (
                            <div className="alert alert-danger mt-4">
                                {errorBusqueda}
                            </div>
                        )}
                        {resultadoBusqueda && (
                            <div className="mt-4">
                                <h4>Resultado búsqueda:</h4>
                                <p>ID: {resultadoBusqueda.id} Nombre: {resultadoBusqueda.firstName} {resultadoBusqueda.lastName} Fecha de Nacimiento: {resultadoBusqueda.dob}</p>
                            </div>
                        )}
                    </div>

                    <div className="mt-4">
                        <form onSubmit={handleEliminar}>
                            <div className='form-floating mb-3'>
                                <input
                                    className="form-control"
                                    type="text"
                                    value={deleteName}
                                    onChange={(e) => setDeleteName(e.target.value)}
                                    placeholder="Nombre del director a eliminar"
                                />
                                <label htmlFor="floatingInput">Nombre del director a eliminar /Nombre Apellido/</label>
                            </div>
                            <button className="btn btn-danger mt-3" type="submit">Eliminar</button>
                        </form>
                        {eliminacionExitosa && (
                            <div className="alert alert-success mt-4">
                                La eliminación del director ha sido exitosa.
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-4">
                    <table className="table mt-4">
                        <thead className="table table-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Fecha de Nacimiento</th>
                            </tr>
                        </thead>
                        <tbody>
                            {directores.map((director) => (
                                <tr key={director.id}>
                                    <td>{director.id}</td>
                                    <td>{director.firstName}</td>
                                    <td>{director.lastName}</td>
                                    <td>{director.dob}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DirectorComponent;
