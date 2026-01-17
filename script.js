function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function sendWhatsApp(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const product = document.getElementById("product").value;
    const quantity = document.getElementById("quantity").value;
    const message = document.getElementById("message").value;

    const text =
        `New Enquiry from Website\n\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Product: ${product}\n` +
        `Quantity: ${quantity}\n` +
        `Message: ${message}`;

    const businessNumber = "9188821318";

    const url = `https://wa.me/${businessNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
}
