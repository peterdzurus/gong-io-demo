
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/peter_dzurus/Git/gong-io-demo/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/peter_dzurus/Git/gong-io-demo/src/pages/index.js"))
}

