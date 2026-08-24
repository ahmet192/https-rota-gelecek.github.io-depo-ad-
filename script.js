const searchInput = document.querySelector('#courseSearch');
const cards = [...document.querySelectorAll('.course-card')];
const emptyState = document.querySelector('#emptyState');
const toast = document.querySelector('#toast');
let toastTimer;

searchInput.addEventListener('input', (event) => {
  const query = event.target.value.trim().toLocaleLowerCase('tr-TR');
  let visibleCount = 0;

  cards.forEach((card) => {
    const matches = card.dataset.course.toLocaleLowerCase('tr-TR').includes(query);
    card.hidden = !matches;
    if (matches) visibleCount += 1;
  });

  emptyState.hidden = visibleCount !== 0;
});

document.querySelectorAll('.start-button').forEach((button) => {
  button.addEventListener('click', () => {
    showToast(`${button.dataset.course} dersi hazırlanıyor. İlk konu yakında burada!`);
  });
});

document.querySelector('#profileButton').addEventListener('click', () => {
  showToast('Üyelik sistemi bir sonraki sürümde açılacak.');
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}
