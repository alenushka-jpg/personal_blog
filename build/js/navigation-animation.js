const navItems=document.querySelectorAll(".navigation__li"),line=document.querySelector(".navigation__line");function setActiveNavItem(t){const e=t.getBoundingClientRect(),{width:n,left:i}=e;line.style.width=`${n}px`,line.style.transform=`translateX(${i}px)`}navItems.forEach((t=>{t.addEventListener("click",(function(t){t.preventDefault();setActiveNavItem(this)}))}));