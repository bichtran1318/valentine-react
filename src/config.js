// ========================================
// VALENTINE'S DAY - MILKY WAY THEME
// ========================================
// Edit this file to customize your website with your own content!

// Dynamically import all images from src/anh/
const imageModules = import.meta.glob('./anh/*.JPG', { eager: true });
const allImages = Object.values(imageModules).map(mod => mod.default);
const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

// Planet names for captions
const planetNames = [
  "Mercury", "Venus", "Earth", "Mars", "Jupiter",
  "Saturn", "Neptune", "Pluto", "Andromeda", "Orion",
  "Sirius", "Vega", "Polaris", "Rigel", "Altair",
  "Betelgeuse", "Proxima", "Kepler", "Titan", "Europa",
  "Ganymede", "Callisto", "Io", "Triton", "Charon",
  "Ceres", "Eris", "Haumea", "Makemake", "Sedna",
  "Quaoar", "Orcus", "Varuna", "Ixion", "Huya",
  "Deimos", "Phobos", "Miranda", "Ariel", "Umbriel",
  "Oberon", "Titania", "Proteus", "Nereid", "Larissa",
  "Puck", "Rhea", "Dione", "Tethys", "Enceladus",
  "Mimas", "Hyperion", "Iapetus", "Janus", "Epimetheus",
  "Pandora", "Prometheus", "Atlas", "Pan", "Thebe"
];

export const siteConfig = {
  // Main Title
  title: "Happy Valentine's Day, Trần Thị Bích",

  // Short message
  message: "Trần Thị Bích là vũ trụ, là những vì sao sáng :D",

  // All images for the grid (shuffled each load)
  images: shuffle(allImages).map((url, i) => ({
    id: i + 1,
    url,
    caption: planetNames[i] || `Star ${i + 1}`
  })),

  // Carousel images (8 random picks)
  carouselImages: shuffle(allImages).slice(0, 8),

  // Floating comet images (6 random picks)
  floatingImages: shuffle(allImages).slice(0, 6),

  // Love letter
  letterMessage: "Valentine năm nay anh không thể ở cạnh em, cũng chẳng kịp chuẩn bị món quà nào tử tế, có lẽ em còn đang giận anh… Xin lỗi Bích nhiều, không phải anh không muốn, mà anh chỉ muốn tự tay trao quà cho em thôi, muốn được nhìn thấy ánh mắt em sáng lên và nụ cười của em ngay lúc đó. Anh thiếu em một cái ôm thật lâu, một món quà thật đặc biệt, và cả Valentine này nữa. Chờ anh về nhé, anh sẽ bù gấp ba luôn. Yêu em nhiều.",

  // Quote
  quote: {
    text: "Trong cả vũ trụ bao la này, trái tim anh chỉ quay quanh một người — Trần Thị Bích :D",
    author: "Yêu em"
  },

  // Final message
  signature: "Gửi Trần Thị Bích — Người anh yêu nhất vũ trụ 🌌"
};

export default siteConfig;
