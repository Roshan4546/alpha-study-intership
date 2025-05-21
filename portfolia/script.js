document.getElementById("contact-form").addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (name && email && message && phone) {
        alert(`Thank you, ${name}. Your message has been sent.`);
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
});
