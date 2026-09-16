document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");

  if (header) {
    const logo = document.createElement("div");
    logo.className = "logo";
    logo.innerHTML = `<a href="/">MyWebsite</a>`;

    const nav = document.createElement("nav");
    nav.innerHTML = `
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    `;

    header.appendChild(logo);
    header.appendChild(nav);
  }
});