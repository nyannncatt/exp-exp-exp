document.addEventListener("DOMContentLoaded", function() {
  
    const accountsMenu = document.querySelector(".accounts-menu");

    accountsMenu.addEventListener("click", function(e) {
        e.preventDefault(); 
        const subMenu = this.nextElementSibling; 
        if (subMenu) {
            subMenu.classList.toggle("hidden");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {

    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

  
    document.addEventListener("mousemove", function (e) {
        cursor.style.left = e.pageX + "px";
        cursor.style.top = e.pageY + "px";
    });


    const links = document.querySelectorAll(".sidebar a");
    links.forEach(link => {
        link.addEventListener("mouseenter", function () {
            cursor.style.transform = "scale(1.5)";
            cursor.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        });

        link.addEventListener("mouseleave", function () {
            cursor.style.transform = "scale(1)";
            cursor.style.backgroundColor = "transparent";
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const dashboardTitle = document.querySelector(".sidebar h2");

    
    dashboardTitle.addEventListener("click", function () {
        sidebar.classList.toggle("minimized");
    });
});
