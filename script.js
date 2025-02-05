document.addEventListener("DOMContentLoaded", function() {
    // Select the Accounts section
    const accountsMenu = document.querySelector(".accounts-menu");

    accountsMenu.addEventListener("click", function(e) {
        e.preventDefault(); // Prevents the default link behavior
        const subMenu = this.nextElementSibling; // Get the sub-menu (ul)
        if (subMenu) {
            subMenu.classList.toggle("hidden"); // Toggle visibility
        }
    });
});
