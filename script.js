function assignRandomColors() {
  const colors = ["#fff9b1", "#f5f6f8", "#f5d128", "#d0e17a", "#a6ccf5", "#67c6c0", "#23bfe7", "#ff9d48", "#ea94bb", "#f16c7f", "#b384bb"];

  const notes = document.querySelectorAll('.note');

  notes.forEach((note) => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];

    colors.splice(randomIndex, 1);

    note.style.backgroundColor = randomColor;
  });
}



function assignRandomValues() {
  let notes = document.querySelectorAll('.note');
  notes[1] = '';
  console.log(notes);

  notes.forEach((note) => {
    const randomRotation = Math.floor(Math.random() * 11) - 3; // Random value between -10 and 10
    const randomTop = Math.random() * 1.5 + 0.1; // Random value between 0.1 and 1.6
    const randomLeft = Math.random() * 1.5 + 0.1; // Random value between 0.1 and 1.6

    note.style.transform = `rotate(${randomRotation}deg)`;
    note.style.top = `${randomTop}em`;
    // note.style.left = `${randomLeft}em`;
  });
}

assignRandomColors();
// assignRandomValues();


