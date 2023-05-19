function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Random({ min, max }) {
  return (
    <p>
      Random value between {min} and {max} = {randomIntFromInterval(min, max)}
    </p>
  );
}

export default Random;
