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
    url: "/booking",
    link: "Booking",
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

export const whyChooseUs = [
  {
    icon: "/images/why-choose-us/1.svg",
    title: "Delicious Food",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "/images/why-choose-us/2.svg",
    title: "Cozy Place",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "/images/why-choose-us/3.svg",
    title: "Easy Payment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const menuCategory = [
  {
    id: "breakfast",
    category: "Breakfast",
    desc: "7 AM - 11 AM ONLY",
    bg: "bg-[url('/images/menu/breakfast.png')]",
    link: "/menu/breakfast",
    subcategories: [
      {
        name: "Pancake & Waffle",
        menus: [
          {
            img: "/images/menu/quinoa-salad.png",
            name: "Quinoa Beef Salad",
            desc: "Healthy yet delicate duet of red quinoa & stirred fried beef on the bed of fresh mix green salad.",
            price: 25,
          },
        ],
      },
    ],
  },
  {
    id: "all-day-breakfast",
    category: "All Day Breakfast",
    bg: "bg-[url('/images/menu/all-day-breakfast.png')]",
    link: "/menu/all-day-breakfast",
  },
  {
    id: "appetizer",
    category: "Appetizer",
    bg: "bg-[url('/images/menu/appetizer.png')]",
    link: "/menu/appetizer",
  },
  {
    id: "main-course",
    category: "Main Course",
    bg: "bg-[url('/images/menu/main-course.png')]",
    link: "/menu/main-course",
  },
  {
    id: "pasta-pizza",
    category: "Pasta & Pizza",
    bg: "bg-[url('/images/menu/pasta-pizza.png')]",
    link: "/menu/pasta-pizza",
  },
  {
    id: "rice-bowl",
    category: "Rice Bowl",
    bg: "bg-[url('/images/menu/rice-bowl.png')]",
    link: "/menu/rice-bowl",
  },
  {
    id: "desert",
    category: "Desert",
    bg: "bg-[url('/images/menu/desert.png')]",
    link: "/menu/desert",
  },
  {
    id: "drinks",
    category: "Drinks",
    bg: "bg-[url('/images/menu/drink.png')]",
    link: "/menu/drinks",
  },
];

export const testimonials = [
  {
    img: "/images/testimonials/james-hartono.png",
    name: "James Hartono",
    review: "Great service! Really enjoyed our visit.",
  },
  {
    img: "/images/testimonials/ica-rebecca.png",
    name: "Ica Rebecca",
    review: "Wow, what an amazing dining experience!",
  },
  {
    img: "/images/testimonials/amanda-rebecca.png",
    name: "Amanda Rebecca",
    review: "I had the most delightful experience dining at Jardin",
  },
  {
    img: "/images/testimonials/james-hartono.png",
    name: "Hartono James",
    review: "Great service! Really enjoyed our visit.",
  },
  {
    img: "/images/testimonials/ica-rebecca.png",
    name: "Rebecca Ica",
    review: "Wow, what an amazing dining experience!",
  },
  {
    img: "/images/testimonials/amanda-rebecca.png",
    name: "Rebecca Amanda",
    review: "I had the most delightful experience dining at Jardin",
  },
];

export const reviewAspects = [
  { icon: "/images/review/food.svg", name: "Food" },
  { icon: "/images/review/service.svg", name: "Service" },
  { icon: "/images/review/value.svg", name: "Value" },
  { icon: "/images/review/embience.svg", name: "Embience" },
];

export const profileTab = ["Profile", "History", "Voucher"];

export const voucher = [
  {
    percentage: 50,
    banner: "discount only for you",
  },
  {
    percentage: 25,
    banner: "you for only discount",
  },
  {
    percentage: 20,
    banner: "only discount for you",
  },
  {
    percentage: 10,
    banner: "for you discount only",
  },
];
