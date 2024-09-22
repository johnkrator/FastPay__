const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

if (mobileMenuButton && mobileMenu) {
    // Toggle the mobile menu visibility
    mobileMenuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
        // Optionally, you could also add an animation or transition class here for smoother opening/closing
    });
} else {
    console.error("Mobile menu button or menu not found");
}
