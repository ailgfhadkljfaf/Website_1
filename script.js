document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    const validName = "Ray";
    const validEmail = "ray.zhao0311@gmail.com";

    if (name === validName && email === validEmail) {
        alert("Login successful!");
        document.querySelector(".secret").style.display = "block";
    } else {
        document.querySelector(".secret").style.display = "none";
        alert("Invalid name or email. Please try again.");
    }
});