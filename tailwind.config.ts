import type { Config } from 'tailwindcss'
import withMT from '@material-tailwind/react/utils/withMT';

const config: Config = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // plugins: [
  // require("@tailwindcss/typography"),
  // require("daisyui"),
  // 'prettier-plugin-tailwindcss'],
  // daisyUI config (optional - here are the default values)
  // daisyui: {
  //   themes: ["light", "dark", "cupcake","emerald"], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
  //   darkTheme: "dark", // name of one of the included themes for dark mode
  //   base: true, // applies background color and foreground color for root element by default
  //   styled: true, // include daisyUI colors and design decisions for all components
  //   utils: true, // adds responsive and modifier utility classes
  //   rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
  //   prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
  //   logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  // },
}
export default withMT(config)
