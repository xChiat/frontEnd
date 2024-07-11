export async function fetchInicialGeneros() {
    const response = await fetch('http://localhost/p1c1/genero.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  }
  