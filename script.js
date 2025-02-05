document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "☰";
    toggleButton.classList.add("toggle-btn");
    document.body.appendChild(toggleButton);

    const sidebar = document.querySelector(".sidebar");
    const content = document.querySelector(".content");

    toggleButton.addEventListener("click", function() {
        sidebar.classList.toggle("hidden");
        if (sidebar.classList.contains("hidden")) {
            content.style.marginLeft = "20px"; // Adjust content width when sidebar is hidden
        } else {
            content.style.marginLeft = "270px"; // Reset content width when sidebar is shown
        }
    });
});