const $character_img = document.querySelectorAll(".character img");
const $modal = document.querySelector("#modal");
const $closeBtn = document.querySelector(".close_area");
const $modal_img = document.querySelector(".modal_img");
const $modal_content = document.querySelector(".modal_content");
const $modal_scene = document.querySelector(".modal_scene");
let data = JSON.parse(JSON.stringify(Params));
let newImg = document.createElement("img");
let newName = document.createElement("div");
let newBirthday = document.createElement("div");
let newHeight = document.createElement("div");
let newWeight = document.createElement("div");
let newDivision = document.createElement("div");
let newAppearance = document.createElement("div");
let appearanceTemp = document.createElement("div");
let newScene = document.createElement("img");

for (let i = 0; i < $character_img.length; i++) {
  $character_img[i].addEventListener("dblclick", (e) => {
    const temp = e.target.src;
    let heroname = temp.slice(temp.search("img") + 24, -4); // jpg, png

    newImg.src = `./img/character/character_${heroname}.jpg`;
    $modal_img.appendChild(newImg);

    newName.textContent = `이름: ${data[heroname].name} (${data[heroname].realname})`;
    newBirthday.textContent = `생년월일: ${data[heroname].birtyday}`;
    newHeight.textContent = `신장: ${data[heroname].height}`;
    newWeight.textContent = `무게: ${data[heroname].weight}`;
    newDivision.textContent = `소속: ${data[heroname].division}`;
    appearanceTemp.textContent = "출연 영화";
    newAppearance.textContent = `${data[heroname].appearance}`;
    appearanceTemp.style.borderBottom = "none";
    appearanceTemp.style.paddingTop = "8px";
    appearanceTemp.style.paddingRight = "8px";
    appearanceTemp.style.paddingLeft = "8px";
    appearanceTemp.style.paddingBottom = "0";
    newAppearance.style.borderBottom = "none";
    $modal_content.appendChild(newName);
    $modal_content.appendChild(newBirthday);
    $modal_content.appendChild(newHeight);
    $modal_content.appendChild(newWeight);
    $modal_content.appendChild(newDivision);
    $modal_content.appendChild(appearanceTemp);
    $modal_content.appendChild(newAppearance);

    newScene.src = `./img/character/character_${heroname}_scene.gif`;
    $modal_scene.appendChild(newScene);

    heroname = "";
    // 화면 스크롤 했을때 무조건 가운데에 모달 보이는 기능
    $modal.style.top = `${
      $modal.getBoundingClientRect().top / 2 + window.scrollY
    }px`;
    $modal.style.display = "flex";
  });
}

$closeBtn.addEventListener("click", (e) => {
  $modal.style.display = "none";
  $modal_img.removeChild(newImg);
  $modal_img.removeChild(newScene);
});
$modal.addEventListener("click", (e) => {
  const evTarget = e.target;
  if (evTarget.classList.contains("modal_overlay")) {
    $modal.style.display = "none";
  }
});
window.addEventListener("keyup", (e) => {
  if ($modal.style.display === "flex" && e.key === "Escape") {
    $modal.style.display = "none";
  }
});
