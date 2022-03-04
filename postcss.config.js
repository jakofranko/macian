module.exports = {
    plugins: [
        require('postcss-import')({}),
        require('mdcss')({ destination: 'docs', assets: ['./macian.min.css'] }),
        require('cssnano')({ preset: 'default' })
    ]
};
