const $body = document.querySelector("body");
const $modal = document.querySelector("#modal");
const $closeBtn = document.querySelector(".close_area");
const $modal_window = document.querySelector(".modal_window");
const $modal_area = document.querySelector(".modal_area");
const $modal_img = document.querySelector(".modal_img");
const $modal_content = document.querySelector(".modal_content");
const $modal_scene = document.querySelector(".modal_scene");
const $containter = document.querySelector(".container");
const $transBtn = document.querySelector(".transBtn");
const $movies = document.querySelector(".movies");

let newImg = document.createElement("img");
let newName = document.createElement("div");
let newRunningTime = document.createElement("div");
let newRating = document.createElement("div");
let newDirector = document.createElement("div");
let newAppearance = document.createElement("div");
let plotTemp = document.createElement("div");
let newPlot = document.createElement("div");
let newUpcomingday = document.createElement("div");
let newEpisodes = document.createElement("div");
let newChannel = document.createElement("div");

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

function appendMovie(kind, length) {
  // 영화, 드라마 슬라이더 만드는 함수
  let $divide = document.createElement("div");
  let $movies = document.createElement("div");
  $divide.classList.add("divide");
  $movies.classList.add("movies");
  $movies.classList.add(`${kind}`);
  $containter.appendChild($divide);
  $containter.appendChild($movies);
  // 타이틀 넣기
  let movie_kind_name = document.createElement("div");
  movie_kind_name.classList.add("kind_name");
  movie_kind_name.classList.add("vitro");
  if (kind == "released") {
    movie_kind_name.textContent = "개봉 완료 영화";
    $divide.appendChild(movie_kind_name);
  }
  if (kind == "upcoming") {
    movie_kind_name.textContent = "개봉 예정 영화";
    $divide.appendChild(movie_kind_name);
  }
  if (kind == "drama") {
    movie_kind_name.textContent = "드라마";
    $divide.appendChild(movie_kind_name);
  }

  // 영화 or 드라마 이미지들 넣기
  for (let i = 0; i < length; i++) {
    let movies_img = document.createElement("img");
    let movies_img_name = document.createElement("div");
    let movies_div = document.createElement("div");
    let imgSrc = `./img/movie/movie_${data[kind][i].source}.jpg`;
    movies_img.src = imgSrc;
    movies_img_name.textContent = `${data[kind][i].name}`;
    movies_img_name.classList.add("movies_img_name");

    movies_img.addEventListener("dblclick", () => {
      newImg.src = imgSrc;
      $modal_img.appendChild(newImg);
      if (kind == "released") {
        newName.textContent = `${data[kind][i].name}`;
        newRunningTime.textContent = `상영 시간: ${data[kind][i].runningtime}`;
        newRating.textContent = `평점: ${data[kind][i].rating}`;
        newDirector.textContent = `감독: ${data[kind][i].director}`;
        newAppearance.textContent = `출연진: ${data[kind][i].appearance}`;
        newPlot.textContent = `${data[kind][i].plot}`;
        plotTemp.textContent = "줄거리";
        plotTemp.style.paddingTop = "8px";
        plotTemp.style.paddingRight = "8px";
        plotTemp.style.paddingLeft = "8px";
        plotTemp.style.paddingBottom = "0";
        plotTemp.style.borderBottom = "none";
        $modal_content.appendChild(newName);
        $modal_content.appendChild(newRunningTime);
        $modal_content.appendChild(newRating);
        $modal_content.appendChild(newDirector);
        $modal_content.appendChild(newAppearance);
        $modal_content.appendChild(plotTemp);
        $modal_content.appendChild(newPlot);
      }
      if (kind == "upcoming") {
        newName.textContent = `${data[kind][i].name}`;
        newUpcomingday.textContent = `개봉 예정일: ${data[kind][i].upcomingDay}`;
        newDirector.textContent = `감독: ${data[kind][i].director}`;
        newAppearance.textContent = `출연진: ${data[kind][i].appearance}`;
        $modal_content.appendChild(newName);
        $modal_content.appendChild(newUpcomingday);
        $modal_content.appendChild(newDirector);
        $modal_content.appendChild(newAppearance);
      }

      if (kind == "drama") {
        newName.textContent = `${data[kind][i].name}`;
        newUpcomingday.textContent = `방영 예정일: ${data[kind][i].upcomingDay}`;
        newEpisodes.textContent = `에피소드: ${data[kind][i].episodes}`;
        newChannel.textContent = `방영 채널: ${data[kind][i].channel}`;
        newDirector.textContent = `감독: ${data[kind][i].director}`;
        newAppearance.textContent = `출연진: ${data[kind][i].appearance}`;
        newPlot.textContent = `${data[kind][i].plot}`;
        plotTemp.textContent = "줄거리";
        plotTemp.style.paddingTop = "8px";
        plotTemp.style.paddingRight = "8px";
        plotTemp.style.paddingLeft = "8px";
        plotTemp.style.paddingBottom = "0";
        plotTemp.style.borderBottom = "none";
        $modal_content.appendChild(newName);
        $modal_content.appendChild(newUpcomingday);
        $modal_content.appendChild(newEpisodes);
        $modal_content.appendChild(newChannel);
        $modal_content.appendChild(newDirector);
        $modal_content.appendChild(newAppearance);
        $modal_content.appendChild(plotTemp);
        $modal_content.appendChild(newPlot);
      }

      // 화면 스크롤 했을때 무조건 가운데에 모달 보이는 기능
      $modal.style.top = `${
        $modal.getBoundingClientRect().top / 2 + window.scrollY
      }px`;
      $modal.style.display = "flex";
      $body.classList.add("stop-scroll");
    });

    movies_div.append(movies_img);
    movies_div.append(movies_img_name);
    $movies.appendChild(movies_div);
  }

  // 드래그 이벤트
  $movies.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    $movies.classList.add("active");

    startX = e.pageX - $movies.offsetLeft;
    scrollLeft = $movies.scrollLeft;
  });
  $movies.addEventListener("mouseleave", () => {
    isMouseDown = false;
    $movies.classList.remove("active");
  });
  $movies.addEventListener("mouseup", () => {
    isMouseDown = false;
    $movies.classList.remove("active");
  });
  $movies.addEventListener("mousemove", (e) => {
    if (!isMouseDown) return;

    e.preventDefault();
    const x = e.pageX - $movies.offsetLeft;
    const walk = (x - startX) * 1;
    $movies.scrollLeft = scrollLeft - walk;
  });
}

// 모달 관련 클릭 이벤트
$closeBtn.addEventListener("click", (e) => {
  $modal.style.display = "none";
  $body.classList.remove("stop-scroll");
  removeChildAll($modal_content);
});
$modal.addEventListener("click", (e) => {
  const evTarget = e.target;
  if (evTarget.classList.contains("modal_overlay")) {
    $modal.style.display = "none";
    $body.classList.remove("stop-scroll");
    removeChildAll($modal_content);
  }
});
window.addEventListener("keyup", (e) => {
  if ($modal.style.display === "flex" && e.key === "Escape") {
    $modal.style.display = "none";
    $body.classList.remove("stop-scroll");
    removeChildAll($modal_content);
  }
});

// 자식 노드들 모두 삭제하는 함수
const removeChildAll = (parent) => {
  while (parent.hasChildNodes()) {
    parent.removeChild(parent.firstChild);
  }
};
