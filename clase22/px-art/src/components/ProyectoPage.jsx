import React, { useEffect, useState } from 'react';

function ProyectoPage() {
    const [proyecto, setProyecto] = useState(null);
    const [paletas, setPaletas] = useState([]);

    useEffect(() => {
        try {
            const proyectoEnEdicion = localStorage.getItem('proyectoEnEdicion');
            const storedPaletas = localStorage.getItem('paletas');
            if (proyectoEnEdicion) {
                const parsedProyecto = JSON.parse(proyectoEnEdicion);
                setProyecto(parsedProyecto);
            } else {
                console.error("No project found in localStorage");
            }
            if (storedPaletas) {
                const parsedPaletas = JSON.parse(storedPaletas);
                setPaletas(parsedPaletas);
            } else {
                console.error("No palettes found in localStorage");
            }
        } catch (error) {
            console.error("Failed to parse project or palettes from localStorage:", error);
        }
    }, []);

    if (!proyecto) return <div>Loading...</div>;

    const dimensiones = proyecto._escena._pixeles;

    const renderGrid = () => {
        let rows = [];
        for (let i = 0; i < dimensiones; i++) {
            let row = [];
            for (let j = 0; j < dimensiones; j++) {
                row.push(<div key={`${i}-${j}`} className="grid-cell"></div>);
            }
            rows.push(<div key={i} className="grid-row">{row}</div>);
        }
        return rows;
    };

    return (
        <div className="container-xxl text-center">
            <div className="row">
                <div className="col-2">
                    <div className='result'>
                        <h5>Escenas</h5>
                        <p>{proyecto._escena._nombre} - {dimensiones} x {dimensiones} pixels</p>   
                    </div>
                </div>
                <div className="col-8">
                    <div className='cuadricula'>
                        <h5>{proyecto._escena._nombre}</h5>
                        <div className="grid-container">
                            {renderGrid()}
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className='result'>
                        <h5>Paleta Inicial</h5>
                        {proyecto._escena._paletas[0].colores.map((color, index) => (
                            <span
                                key={index}
                                style={{
                                    backgroundColor: color,
                                    width: '20px',
                                    height: '20px',
                                    display: 'inline-block',
                                    marginRight: '5px',
                                }}
                            ></span>
                        ))}
                    </div>
                    <div className='result'>
                        <h5 className="mt-3">Todas las Paletas</h5>
                        {paletas.map((paleta, paletaIndex) => (
                            <div key={paletaIndex}>
                                <hr />
                                <h6>{paleta.nombre}</h6>
                                {paleta.colores.map((color, colorIndex) => (
                                    <span
                                        key={colorIndex}
                                        style={{
                                            backgroundColor: color,
                                            width: '20px',
                                            height: '20px',
                                            display: 'inline-block',
                                            marginRight: '5px',
                                        }}
                                    ></span>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProyectoPage;