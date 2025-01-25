function toggleText(buttonId, contentId, className) {
    let button = document.getElementById(buttonId);
    let content = document.getElementById(contentId);

    button.addEventListener("click", () => {
        content.classList.toggle(className);
    });

    content.addEventListener("click", () => {
        content.classList.remove(className);
    });
}

toggleText("hideText_btn", "hideText", "show");
toggleText("hideText_btn1", "hideText1", "show1");
toggleText("hideText_btn2", "hideText2", "show2");


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
  
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
  });
