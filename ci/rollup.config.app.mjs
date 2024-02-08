import terser from '@rollup/plugin-terser'
import scss from "rollup-plugin-scss"

let path = "adi_doctools/theme/cosmic/"

export default [{
  input: `${path}/scripts/app.js`,
  output: {
    file: `${path}/static/app.umd.js`,
    format: "umd",
    name: "App",
    sourcemap: true
  },
  plugins: [
    terser(),
    scss({
      fileName: `style.min.css`,
      watch: `${path}/style`,
      outputStyle: 'compressed',
      sourceMap: true
    })
  ]
}]
