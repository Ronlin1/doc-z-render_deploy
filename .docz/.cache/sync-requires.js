

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---article-mdx": (preferDefault(require("C:\\Users\\Ronnie Atuhaire\\OneDrive\\Desktop\\Projects\\DocZ\\V1\\doc-z-render_deploy\\article.mdx"))),
  "component---cache-dev-404-page-js": (preferDefault(require("C:\\Users\\Ronnie Atuhaire\\OneDrive\\Desktop\\Projects\\DocZ\\V1\\doc-z-render_deploy\\.docz\\.cache\\dev-404-page.js"))),
  "component---index-mdx": (preferDefault(require("C:\\Users\\Ronnie Atuhaire\\OneDrive\\Desktop\\Projects\\DocZ\\V1\\doc-z-render_deploy\\index.mdx"))),
  "component---readme-md": (preferDefault(require("C:\\Users\\Ronnie Atuhaire\\OneDrive\\Desktop\\Projects\\DocZ\\V1\\doc-z-render_deploy\\README.md"))),
  "component---src-pages-404-js": (preferDefault(require("C:\\Users\\Ronnie Atuhaire\\OneDrive\\Desktop\\Projects\\DocZ\\V1\\doc-z-render_deploy\\.docz\\src\\pages\\404.js")))
}

