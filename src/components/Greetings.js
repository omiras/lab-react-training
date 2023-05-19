function Greetings({ lang, children }) {
  let greeting = 'Hola';

  // Por ejemplo, si lang==='de' , la variable greeting debería tomar por valor 'Hallo'
  if (lang === 'de') {
    greeting = 'Hallo';
  } else if (lang == 'fr') {
    greeting = 'Bonjour';
  } else if (lang == 'en') {
    greeting = 'Hello';
  }

  return (
    <div style={{ border: '1px solid black' }}>
      <p>
        {greeting} {children}
      </p>
    </div>
  );
}

export default Greetings;
