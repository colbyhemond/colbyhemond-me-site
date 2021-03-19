module.exports = {
    target: "serverless",
    webpack: (cfg, { isServer }) => {

        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
            cfg.node = {
              fs: 'empty'
            }
        }

        cfg.module.rules.push({test: /\.md$/, loader: 'frontmatter-markdown-loader', options: { mode: ['react-component'] }})

        return cfg;
    }
}