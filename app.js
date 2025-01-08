import ui from 'litejs';

ui.router({
    '/': () => {
        document.getElementById('view').innerHTML = `
            <h1>Welcome to our website!</h1>
            <p>This is the Home page of our simple SPA using LiteJS.</p>
        `;
    },
    '/about': () => {
        document.getElementById('view').innerHTML = `
            <h1>About Us</h1>
            <p>We create simple and user-friendly web applications using LiteJS.</p>
        `;
    },
    '/contact': () => {
        document.getElementById('view').innerHTML = `
            <h1>Contact Us</h1>
            <p>Reach out to us at: <a href="mailto:example@example.com">example@example.com</a></p>
        `;
    }
});
