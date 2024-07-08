export async function fetchInitialPaletas() {
    const response = await fetch('http://10.58.17.14/p2c2/Paletas1.json');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.map(paleta => ({
        ...paleta,
        colores: paleta.colores || []
    }));
}