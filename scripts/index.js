const btn = document.getElementById('contratar');
btn.addEventListener('click', (e) => {
  removeButton(e);

}) 

function removeButton(t) {
  (t.target.style.opacity = 0),
    setTimeout(() => {
      (t.target.style.visibility = ""), (t.target.style.opacity = 1);
    }, 5e3);
}

// Pass in the id of an element
let confetti = new Confetti('contratar');

// Edit given parameters
confetti.setCount(75);
confetti.setSize(1);
confetti.setPower(25);
confetti.setFade(false);
confetti.destroyTarget(true);