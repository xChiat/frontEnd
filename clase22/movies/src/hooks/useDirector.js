import { useState, useEffect } from 'react';
import Director from '../class/Director';

function useDirector() {
    const [directores, setDirectores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            const storageDirectores = JSON.parse(localStorage.getItem("Directores"));
            if (storageDirectores) {
                setDirectores(storageDirectores.map(d => new Director(d._id, d._firstName, d._lastName, d._dob)));
            }
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }, []);

    const buscarDirector = (nombre) => {
        return directores.find(director => {
            const fullName = `${director.firstName.toLowerCase()} ${director.lastName.toLowerCase()}`;
            return fullName.includes(nombre.toLowerCase());
        });
    };

    const crearDirector = (nuevoDirector) => {
        const updatedDirectores = [...directores, nuevoDirector];
        setDirectores(updatedDirectores);
        localStorage.setItem("Directores", JSON.stringify(updatedDirectores.map(d => ({
            _id: d.id,
            _firstName: d.firstName,
            _lastName: d.lastName,
            _dob: d.dob
        }))));
    };

    const eliminarDirector = (nombre) => {
        console.log('Intentando eliminar director:', nombre);
        const updatedDirectores = directores.filter(director => {
            const fullName = `${director.firstName.toLowerCase()} ${director.lastName.toLowerCase()}`;
            console.log('Comparando:', fullName, 'con', nombre.toLowerCase());
            return fullName !== nombre.toLowerCase();
        });
        console.log('Directores actualizados:', updatedDirectores);
        setDirectores(updatedDirectores);
        localStorage.setItem("Directores", JSON.stringify(updatedDirectores.map(d => ({
            _id: d.id,
            _firstName: d.firstName,
            _lastName: d.lastName,
            _dob: d.dob
        }))));
        return updatedDirectores.length < directores.length;
    };

    return { directores, loading, error, buscarDirector, crearDirector, eliminarDirector };
}

export default useDirector;
