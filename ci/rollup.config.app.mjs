import terser from '@rollup/plugin-terser'

let path = "adi_doctools/theme/cosmic"

export default [
  {
    input: `${path}/scripts/app.js`,
    output: {
      file: `${path}/static/app.umd.js`,
      format: "umd",
      name: "App",
      sourcemap: true,
    },
    plugins: [
      terser()
    ],
    // Treat all https:// as external
    external: (id) => /^https?:\/\//.test(id),
  },
  {
    input: `${path}/scripts/extra.js`,
    output: {
      file: `${path}/static/extra.umd.js`,
      format: "umd",
      name: "Extra",
      sourcemap: true
    },
    plugins: [
      terser()
    ]
  },
]
