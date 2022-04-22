const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Doc Z',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root:
          'C:\\Users\\Ronnie Atuhaire\\OneDrive\\Desktop\\Projects\\DocZ\\V1\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Doc Z',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root:
            'C:\\Users\\Ronnie Atuhaire\\OneDrive\\Desktop\\Projects\\DocZ\\V1',
          templates:
            'C:\\Users\\Ronnie Atuhaire\\OneDrive\\Desktop\\Projects\\DocZ\\V1\\node_modules\\docz-core\\dist\\templates',
          docz:
            'C:\\Users\\Ronnie Atuhaire\\OneDrive\\Desktop\\Projects\\DocZ\\V1\\.docz',
          cache:
            'C:\\Users\\Ronnie Atuhaire\\OneDrive\\Desktop\\Projects\\DocZ\\V1\\.docz\\.cache',
          app:
            'C:\\Users\\Ronnie Atuhaire\\OneDrive\\Desktop\\Projects\\DocZ\\V1\\.docz\\app',
          appPackageJson:
            'C:\\Users\\Ronnie Atuhaire\\OneDrive\\Desktop\\Projects\\DocZ\\V1\\package.json',
          appTsConfig:
            'C:\\Users\\Ronnie Atuhaire\\OneDrive\\Desktop\\Projects\\DocZ\\V1\\tsconfig.json',
          gatsbyConfig:
            'C:\\Users\\Ronnie Atuhaire\\OneDrive\\Desktop\\Projects\\DocZ\\V1\\gatsby-config.js',
          gatsbyBrowser:
            'C:\\Users\\Ronnie Atuhaire\\OneDrive\\Desktop\\Projects\\DocZ\\V1\\gatsby-browser.js',
          gatsbyNode:
            'C:\\Users\\Ronnie Atuhaire\\OneDrive\\Desktop\\Projects\\DocZ\\V1\\gatsby-node.js',
          gatsbySSR:
            'C:\\Users\\Ronnie Atuhaire\\OneDrive\\Desktop\\Projects\\DocZ\\V1\\gatsby-ssr.js',
          importsJs:
            'C:\\Users\\Ronnie Atuhaire\\OneDrive\\Desktop\\Projects\\DocZ\\V1\\.docz\\app\\imports.js',
          rootJs:
            'C:\\Users\\Ronnie Atuhaire\\OneDrive\\Desktop\\Projects\\DocZ\\V1\\.docz\\app\\root.jsx',
          indexJs:
            'C:\\Users\\Ronnie Atuhaire\\OneDrive\\Desktop\\Projects\\DocZ\\V1\\.docz\\app\\index.jsx',
          indexHtml:
            'C:\\Users\\Ronnie Atuhaire\\OneDrive\\Desktop\\Projects\\DocZ\\V1\\.docz\\app\\index.html',
          db:
            'C:\\Users\\Ronnie Atuhaire\\OneDrive\\Desktop\\Projects\\DocZ\\V1\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
