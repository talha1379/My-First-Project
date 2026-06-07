const watches = [
  { name: "Dress Watch", price: "PKR 5,999", image: "pic1.jpg" },
  { name: "Drive Watch", price: "PKR 6,999", image: "pic2.jpg" },
  { name: "Chronograph Watch", price: "PKR 4,699", image: "pic3.webp" },
  { name: "Field Watch", price: "PKR 7,000", image: "pic4.jpg" },
  { name: "Pilot Watch", price: "PKR 10,000", image: "pic5.webp" },
  { name: "GMT Watch", price: "3,000", image: "pic6.jpg" },
  { name: "Digital Watch", price: "PKR 3,500", image: "pic7.webp" },
  { name: "Smart Watch", price: "PKR 5,000", image: "pic8.jpg" },
];

const gallery = document.querySelector(".watch-gallery");

watches.forEach((watch) => {
  const card = document.createElement("div");
  card.classList.add("watch-card");
  card.innerHTML = `
        <img src="${watch.image}" alt="${watch.name}">
        <h2>${watch.name}</h2>
        <p>Price: ${watch.price}</p>
        <button>Buy Now</button>
    `;
  gallery.appendChild(card);
});
