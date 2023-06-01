/**
 * 1. The content of the first div must be rgb(values from the props)
 * 2. el backgroundColor del primero hay que estabelcerlo en función de r,g,b
 * 3. El color hexadecimal, también hay que cambiarlo en función de r,g,b. Buscar una función que nos transforme de rgb a hexadecimal
 */
function BoxColor({ r, g, b }) {
  return (
    <div style={{ padding: '1rem', border: '1px solid black' }}>
      <div>
        <div>rgb(255,0,0)</div>
        <div>#ff0000</div>
      </div>
    </div>
  );
}

export default BoxColor;
