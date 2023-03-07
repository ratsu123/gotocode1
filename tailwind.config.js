module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  purge: {
    content: [
      "./src/**/*.vue",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.html",
      "./src/**/*.pug",
      "./src/**/*.md",
      "./node_modules/tw-elements/dist/js/**/*.js",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'mainbg': 'url(./assets/bg/MainPage.jpg)',
        'mainMobBg': 'url(./assets/bg/mob-fist-page.svg)'
      },
      colors: {
        "pale-black": "rgb(64, 64, 86)",
        "light-purple": "rgb(88, 69, 207)",
        "light-gray": "rgb(168, 168, 168)",
        "almost-black": "rgb(22, 24, 29)",
        "grid-black": "rgb(20, 21, 24)",
        "almost-white": "rgb(248, 248, 248)",
        "bg-black": "#111214"
      },
      fontFamily: {
        SFBold: ["SF-Bold"],
        InterExtraBold: ["Inter-ExtraBold"],
        SFSemibold: ["SF-Semibold"],
        SFMedium: ['SF-Medium'],
        InterSemiBold: ['Inter-SemiBold'],
        SFRegular:['SF-Regular'],
        InterBold:['Inter-Bold']
      },
      container: {
        padding: '20px',
      },
    },
  },
  variants: {
    extend: {},
  },

  plugins: [
    function({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1024px",
          },
          "@screen xl": {
            maxWidth: "1100px",
          },
          "@screen 2xl": {
            maxWidth: "1100px",
          },
        },
      });
    },
    require("tw-elements/dist/plugin"),
  ],
};
