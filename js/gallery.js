//Модальное окно
const imagesRef = document.querySelectorAll('.gallery__image');
const modaiRef = document.getElementById('modal-window');
const modalContentRef = document.getElementById('content');
const dataSource = [];
//const modalContentRef = galleryItems.original;
imagesRef.forEach(el => {
    dataSource.push(el.dataset.source);
  el.addEventListener('click', function (a) {
    modaiRef.style.display = 'block';
    modalContentRef.src = el.dataset.source;
  });
});

modaiRef.querySelector('.close').addEventListener('click', () => {
    modaiRef.style.display = 'none';
});

document.addEventListener('keydown', a => {
    const curreentIndex = dataSource.indexOf(modalContentRef.src)
    if (a.key === 'ArrowLeft') {
        leftClick(curreentIndex);
    } else if (a.key === 'ArrowRight') {
        rightClick(curreentIndex);
    }
}); 

function leftClick(curreentIndex) {
    let nextIndex = curreentIndex - 1;
    if (nextIndex == -1) {
        nextIndex = dataSource.length - 1;
    }
    modalContentRef.src = dataSource[nextIndex];
}

function rightClick(curreentIndex) {
    let nextIndex = curreentIndex + 1;
    if (nextIndex == dataSource.length) {
        nextIndex = 0;
    }
    modalContentRef.src = dataSource[nextIndex];}
