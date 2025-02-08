document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let status = document.getElementById("form-status");

    if (name === "" || email === "" || message === "") {
        status.style.color = "red";
        status.textContent = "All fields are required!";
        return;
    }

    status.style.color = "green";
    status.textContent = "Message sent successfully!";
    
    // Simulating form submission reset
    setTimeout(() => {
        document.getElementById("contactForm").reset();
        status.textContent = "";
    }, 2000);
});
