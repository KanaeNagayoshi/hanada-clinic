const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('#gnav');
if (btn && nav) {
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
}
// 診療時間表：今日の曜日の列をハイライト（月=1 … 日=7）
const d = new Date().getDay();
const col = d === 0 ? 7 : d;
document.querySelectorAll('.hours tr').forEach((tr) => {
  if (tr.children[col]) tr.children[col].classList.add('today');
});
