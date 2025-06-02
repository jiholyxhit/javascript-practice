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