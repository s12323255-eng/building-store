
window.addEventListener("scroll", () => {
    const btn = document.getElementById("toTop");
    btn.style.display = window.scrollY > 200 ? "block" : "none";
});

document.getElementById("toTop").onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

