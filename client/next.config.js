const withLess = require('@zeit/next-less')
const withCss = require('@zeit/next-css')

module.exports = withCss(withLess())

// {
//   ...withCss(withLess()),
//   async rewrites() {
//     return [
//       {
//         source: '/',
//         destination: '/articles',
//       },
//     ]
//   },
// }
