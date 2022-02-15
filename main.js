const scrollTopBtn = document.querySelector(".scrollToTop-btn");
window.addEventListener("scroll", function () {
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
}
);

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
);



const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
}
);

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
}
);

navItems.forEach(((navItems) => {
    navItems.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
}));
