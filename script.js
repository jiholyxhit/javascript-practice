// Add Navigation Bar (desktop ver.)
const headerNavs = [
    { title: '프런트 강좌는', link: '#about' },
    { title: 'HTML', link: '#html' },
    { title: 'CSS', link: '#css' },
    { title: '커리큘럼', link: '#curriculum' },
    { title: '문의하기', link: '#contact' }
  ];

const $headerNavUl = document.querySelector(".header__nav ul");

for (const nav of headerNavs){
    const $li = document.createElement("li");
    $li.classList.add("header__nav-item");

    const $a = document.createElement("a");
    $a.textContent = nav.title;
    $a.setAttribute("href", nav["link"]);

    $li.appendChild($a);
    $headerNavUl.appendChild($li);
}

// Add Navigation Bar Toggle (Mobile ver.)
$menuBtn = document.querySelector(".header__menu-btn");
$headerNav = document.querySelector(".header__nav");

$menuBtn.addEventListener("click", (e) => {
    $menuBtn.classList.toggle("on");
    $headerNav.classList.toggle("active");

    e.stopPropagation();
});

document
.querySelector("body")
.addEventListener("click", () => {
    $menuBtn.classList.remove("on");
    $headerNav.classList.remove("active");  
});

// About Elements
const aboutCards = [
    {
      img: './images/about_1.svg',
      title: '빠른 강의',
      descs: [
        '군더더기 없는 진행으로',
        '여러분의 시간을 절약합니다.'
      ]
    },
    {
      img: './images/about_2.svg',
      title: '손쉬운 학습',
      descs: [
        '강의 페이지를 활용해서',
        '편리하게 실습할 수 있습니다.'
      ]
    },
    {
      img: './images/about_2.svg',
      title: '플레이그라운드',
      descs: [
        '강의를 위해 제작한 도구가',
        '반복학습을 도와줍니다.'
      ]
    }
  ];


