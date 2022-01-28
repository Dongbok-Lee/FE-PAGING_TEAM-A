const $modal = document.querySelector('#modal');
const $closeBtn = document.querySelector(".close_area");
const $modal_img = document.querySelector('.modal_img');
const $modal_content = document.querySelector('.modal_content');
const $modal_scene = document.querySelector('.modal_scene');
const $containter = document.querySelector('.container');
const $transBtn = document.querySelector('.transBtn');
const $movies = document.querySelector('.movies');
let $newImg = document.createElement('img');
let $newName = document.createElement('div');

let data = JSON.parse(JSON.stringify(Params));
let releasedLength = Object.keys(data["released"]).length;
let upcomingLength = Object.keys(data["upcoming"]).length;
let dramaLength = Object.keys(data["drama"]).length;

// 드래그 이벤트 관련 변수
let isMouseDown = false;
let startX, scrollLeft;

appendMovie("released", releasedLength);
appendMovie("upcoming", upcomingLength);
appendMovie("drama", upcomingLength);

function appendMovie(kind, length) { // 영화, 드라마 슬라이더 만드는 함수
  let $divide = document.createElement('div');
  let $movies = document.createElement('div');
  $divide.classList.add('divide');
  $movies.classList.add('movies');
  $containter.appendChild($divide);
  $containter.appendChild($movies);
  // 타이틀 넣기
  let movie_kind_name = document.createElement('div');
  movie_kind_name.classList.add('kind_name');
  movie_kind_name.classList.add('vitro');
  if (kind == 'released') {
    movie_kind_name.textContent = '개봉 완료 영화';
    $divide.appendChild(movie_kind_name);
  }
  if (kind == 'upcoming') {
    movie_kind_name.textContent = '개봉 예정 영화';
    $divide.appendChild(movie_kind_name);
  }
  if (kind == 'drama') {
    movie_kind_name.textContent = '드라마';
    $divide.appendChild(movie_kind_name);
  }

  // 영화 or 드라마 이미지들 넣기
  for (let i = 0; i < length; i++) {
    let movies_img = document.createElement('img');
    movies_img.src = `./img/movie/movie_${data[kind][i].source}.jpg`;

    let movies_div = document.createElement('div');
    movies_div.appendChild(movies_img);
    movies_div.classList.add(kind);
    $movies.appendChild(movies_div);
  }

  // 드래그 이벤트
  $movies.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    $movies.classList.add('active');

    startX = e.pageX - $movies.offsetLeft;
    scrollLeft = $movies.scrollLeft;
  });
  $movies.addEventListener('mouseleave', () => {
    isMouseDown = false;
    $movies.classList.remove('active');
  });
  $movies.addEventListener('mouseup', () => {
    isMouseDown = false;
    $movies.classList.remove('active');
  });
  $movies.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;

    e.preventDefault();
    const x = e.pageX - $movies.offsetLeft;
    const walk = (x - startX) * 1;
    $movies.scrollLeft = scrollLeft - walk;
  });
}


// 자식노드들 전부 삭제하는 함수
function removeChildAll(parent) {
  while (parent.hasChildNodes()) {
    parent.removeChild(parent.firstChild);
  }
}

// 모달 관련 클릭 이벤트
$closeBtn.addEventListener("click", e => {
  $modal.style.display = "none";
  $modal_img.removeChild(newImg);
  $modal_img.removeChild(newScene);
});
$modal.addEventListener("click", e => {
  const evTarget = e.target
  if (evTarget.classList.contains("modal_overlay")) {
    $modal.style.display = "none";
  }
});
window.addEventListener("keyup", e => {
  if ($modal.style.display === "flex" && e.key === "Escape") {
    $modal.style.display = "none";
  }
});