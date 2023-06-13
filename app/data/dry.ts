import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { TfiTwitter } from "react-icons/tfi";

export const navLink = [
  {
    url: "/",
    link: "Home",
  },
  {
    url: "/menu",
    link: "Menu",
  },
  {
    url: "/experience",
    link: "Experience",
  },
  {
    url: "/career",
    link: "Career",
  },
  {
    url: "/about",
    link: "About Us",
  },
];

export const heroCarousel = [
  {
    img: "/images/hero/carousel-1.webp",
    menu: "Cafe Breeze",
    ingredients: ["Espresso", "Milk", "Cream", "Mint"],
    price: 30,
  },
  {
    img: "/images/hero/carousel-2.webp",
    menu: "Big Breakfast",
    ingredients: ["Beef", "Mushroom", "Beans"],
    price: 60,
  },
  {
    img: "/images/hero/carousel-3.jpeg",
    menu: "Beef Burger",
    ingredients: ["Cheeseburger", "Egg", "Fries"],
    price: 59,
  },
];

export const menu = [
  {
    img: "/images/menu/teriyaki-bowl.png",
    name: "Chicken Teriyaki Bowl",
    desc: "Grilled Chicken Teriyaki Bowl paired with delicious teppan vegetables and sunny side up egg.",
    price: 32,
  },
  {
    img: "/images/menu/chicken-quesadilla.png",
    name: "Chicken Quesadilla",
    desc: "Packed with juicy chicken, bell-pepper, onion & melted mozzarella.",
    price: 28,
  },
  {
    img: "/images/menu/dori-ricebowl.png",
    name: "Dori Rice Bowl",
    desc: "Crispy Dori with cheese sauce on top, served with rice and fresh mix.",
    price: 35,
  },
  {
    img: "/images/menu/quinoa-salad.png",
    name: "Quinoa Beef Salad",
    desc: "Healthy yet delicate duet of red quinoa & stirred fried beef on the bed of fresh mix green salad.",
    price: 25,
  },
];

export const photoCarousel = [
  "/images/photo/carousel-1.jpg",
  "/images/photo/carousel-2.jpg",
  "/images/photo/carousel-3.jpg",
];

export const socials = [
  {
    icon: AiOutlineInstagram,
    url: "https://www.instagram.com/jardinbdg",
  },
  {
    icon: AiOutlineWhatsApp,
    url: "https://wa.me/6282217957112",
  },
  {
    icon: TfiTwitter,
    url: "https://www.twitter.com",
  },
];
