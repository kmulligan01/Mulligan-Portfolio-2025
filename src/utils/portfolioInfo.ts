import prodCart from '../../public/productcart.jpg';

type Portfolio = {
    id: number;
    category: string;
    title: string;
    image: string;
    url: string;
    badge: string;
};

const portPieces: Portfolio[] = [
    {
        id: 1,
        category: "NextJS, Typescript",
        title: "Product Cart List",
        image: '/product-cart.png',
        url: 'https://cart-product-list.vercel.app/',
        badge: 'eCommerce Functionality'
    },
    {
        id: 2,
        category: "React, Material UI",
        title: "Whiskey Wave",
        image: "/ww.png",
        url: 'https://whiskey-wave.vercel.app/',
        badge: 'Interactive Slider'
    },
    {
        id: 3,
        category: "React, Tailwind",
        title: "WebTube",
        image: "webtube.png",
        url: 'https://webtube-six.vercel.app/',
        badge: 'React Context API'
    },

];

export default portPieces;
