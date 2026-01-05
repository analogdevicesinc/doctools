import terser from '@rollup/plugin-terser'

let path = "adi_doctools/theme/harmonic"

export default [
  {
    input: `${path}/scripts/app.js`,
    output: {
      file: `${path}/static_common/app.umd.js`,
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
      file: `${path}/static_core/extra.umd.js`,
      format: "umd",
      name: "Extra",
      sourcemap: true
    },
    plugins: [
      terser()
    ]
  },
  {
    input: `${path}/scripts/doxygen.js`,
    output: {
      file: `${path}/static_core/doxygen.umd.js`,
      format: "umd",
      name: "Doxygen",
      sourcemap: true
    },
    plugins: [
      terser()
    ]
  },
]
