/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      lineHeight : {
        square : 'square',
        roman : 'upper-roman',
      },
      boxShadow : {
        'suggest-product' : '0 0 9px rgba(0, 0, 0, 0.2)',
      },
      gridAutoRows : {
        '10' : 'repeat(10, minmax(0, 1fr))',
        'layout': '200px minmax(900px, 1fr) 100px',
      },
      backgroundColor: {
        main: "#ee3231",
        'overlay-70' : 'rgba(0,0,0,0,3)'
      },
      width: {
        main: "1200px",
      },
      inset : {
        'custom-top': 'calc(100% + 5px)'
      },
      textColor: {
        main: "#ee3231",

      },
      flex : {
        '2' : '2 2 0%',
        '3' : '3 3 0%',
        '4' : '4 4 0%',
        '5' : '5 5 0%',
        '6' : '6 6 0%',
        '7' : '7 7 0%',
        '8' : '8 8 0%',
        '9' : '9 9 0%'
      },
      keyframes: {
        "slide-top": {
          "0%": {
            "-webkit-transform": "translateY(20px)",
            transform: "translateY(20px)",
          },
          "100%": {
            "-webkit-transform": "translateY(0px)",
            transform: "translateY(0px)",
          },
        },
        "slide-left" : {
          "0%" : {
            "-webkit-transform": "translateX(400px)",
            transform: "translateX(400px)"
          },
          "100%" : {
            "-webkit-transform": "translateX(0px)",
            transform: "translateX(0px)"
          }
        },
        "slide-out-left" : {
          "0%" : {
            "-webkit-transform": "translateX(0)",
            transform: "translateX(0)",
            opacity: 1
          },
          "100%" : {
            "-webkit-transform": "translateX(-1000px)",
            transform: "translateX(-1000px)",
            opacity: 0
          }
        },
        "slide-tl" : {
          "0%" : {
            "-webkit-transform": "translateY(0) translateX(0)",
            transform: "translateY(0) translateX(0)"
          },
          "100%" : {
            "-webkit-transform" : "translateY(-100px) translateX(-100px)",
            transform: "translateY(-100px) translateX(-100px)"
          }
        },
        "slide-right" : {
         "0%" : {
            "-webkit-transform" : "translateX(0)",
            transform: "translateX(0)"
          },
          "100%" : {
            "-webkit-transform" : "translateX(400px)",
            transform: "translateX(400px)"
          }
        },
        "slide-right-menu" : {
         "0%" : {
            "-webkit-transform" : "translateX(-300px)",
            transform: "translateX(-300px)"
          },
          "100%" : {
            "-webkit-transform" : "translateX(0px)",
            transform: "translateX(0px)"
          }
        },
        "slide-top-new-arrivals": {
          "0%": {
            "-webkit-transform": "translateY(30px)",
            transform: "translateY(30px)",
          },
          "100%": {
            "-webkit-transform": "translateY(0px)",
            transform: "translateY(0px)",
          },
        },
        "slide-out-bottom" : {
          "0%" : {
            "-webkit-transform":"translateY(0)",
            "transform":"translateY(0)",
            "visibility" : "visible",
            "opacity" : '1'
          },
          "100%" : {
            "-webkit-transform":"translateY(20px)",
            "transform":"translateY(20px)",
            "visibility" : "hidden",
            "opacity":'0'
          }
        },
        "scale-out-center"  : {
          "0%" : {
            "-webkit-transform": "scale(1)",
            transform : "scale(1)",
            opacity: 1
          },
          "100%" : {
            "-webkit-transform": "scale(0)",
            transform: "scale(0)",
            opacity: 1
          }
        },
        "fade-out" : {
          "0%" : {
            opacity : 1,
            visibility : "visible"
          },
          "100%" : {
            opacity : 0,
            visibility : "hidden"
          }
        },
        "fade-out-bottom" : {
          "0%" : {
            opacity : 1,
            visibility : "visible",
            "-webkit-transform": "translateY(0)",
            transform: "translateY(0)"

          },
          "100%" : {
            opacity : 0,
            "-webkit-transform": "translateY(50px)",
            transform: "translateY(50px)",
            visibility : "hidden"
          }
        },
        "fade-in" : {
          "0%" : {
            "opacity" : '0',
            "visibility" : "hidden",
          },
          "100%" : {
            "opacity" : '1',
            "visibility" : "visible",
          }
        }
      },
      animation: {
        "slide-top": "slide-top 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "slide-top-new-arrivals" : "slide-top-new-arrivals 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "slide-out-bottom" : "slide-out-bottom 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "slide-left" : "slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "slide-out-left" : "slide-out-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "fade-out-bottom" : "fade-out-bottom 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "slide-right" : "slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "slide-right-menu" : "slide-right-menu 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "slide-tl" : "slide-tl 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "scale-out-center" : "scale-out-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
        "fade-out" : "fade-out 1s ease-out both",
        "fade-in" : "fade-in 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"
      },
      
    },
    fontFamily: {
      main: ["Poppins", "sans-serif"],
    },
  },
  plugins: ["@tailwindcss/line-clamp"],
};
