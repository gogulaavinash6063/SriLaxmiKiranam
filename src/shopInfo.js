// Edit shop details here. Everything on the site reads from this file.
export const shop = {
  name: "Sri Laxmi Kiranam",
  telugu: "శ్రీ లక్ష్మి కిరాణం",
  tagline: "Groceries, vegetables, snacks, cool drinks, pooja items, petrol and more.",

  address: {
    landmark: "Opposite Grama Panchayat Office",
    village: "Bhuttapur",
    mandal: "Dasturabad",
    district: "Nirmal",
    state: "Telangana",
    pincode: "504202",
  },

  // Optional: fill these in and they will appear on the site.
  phone: "",
  hours: "",

  mapLink: "https://maps.app.goo.gl/XzPrd6eswXkrfntBA",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.607494892669!2d78.92662417497746!3d19.08098738212464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcd6700322807ed%3A0x8a5dd5ba54b37d1b!2sSri%20Laxmi%20Kiranam!5e0!3m2!1sen!2sin!4v1793082154228!5m2!1sen!2sin",
};

export const addressLines = () => {
  const a = shop.address;
  return [
    a.landmark,
    `${a.village} Village, ${a.mandal} Mandal`,
    `${a.district} District, ${a.state} – ${a.pincode}`,
  ];
};

// icon = name used in components/CategoryIcon.jsx, tone = colour class in index.css
export const categories = [
  { name: "Vegetables", icon: "vegetables", tone: "green", items: "Fresh vegetables for your daily cooking." },
  { name: "Rice & grains", icon: "rice", tone: "yellow", items: "Rice, wheat, flour, millets and other grains." },
  { name: "Pulses & dal", icon: "pulses", tone: "orange", items: "Toor dal, moong, chana, urad and more." },
  { name: "Cooking oils", icon: "oil", tone: "yellow", items: "Sunflower, groundnut and other cooking oils." },
  {
    name: "Biscuits & snacks",
    icon: "snacks",
    tone: "red",
    items: "Biscuits in many brands and pack sizes, plus snacks for tea time.",
    note: "Snacks restocked twice a week",
    highlight: true,
  },
  { name: "Beverages", icon: "beverages", tone: "blue", items: "Maaza, Thums Up, Sprite, Diet Coke and more cool drinks." },
  { name: "Milk", icon: "milk", tone: "blue", items: "Packet milk for the day." },
  { name: "Household items", icon: "household", tone: "teal", items: "Cleaning and everyday items for the home." },
  { name: "Chocolates", icon: "chocolates", tone: "pink", items: "Chocolates and sweets for kids and gifting." },
  { name: "Spices", icon: "spices", tone: "red", items: "Whole and powdered spices for every kitchen." },
  { name: "Personal care", icon: "care", tone: "purple", items: "Soap, shampoo, toothpaste and daily care products." },
  { name: "Pooja samagri", icon: "pooja", tone: "orange", items: "Everything for daily pooja and festivals." },
  { name: "Crackers", icon: "crackers", tone: "pink", items: "Crackers for festivals and celebrations." },
  { name: "Petrol", icon: "petrol", tone: "teal", items: "Petrol available at the shop." },
  { name: "Binding wire", icon: "wire", tone: "purple", items: "For farm, construction and household work." },
];
