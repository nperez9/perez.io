const imgs = document.querySelectorAll('img');
for (let i = 0; i < imgs.length; i++) {
  imgs[i].src = imgs[i].src.replace('1813', '1336');
}
