module.exports = {
    plugins: [
        require('postcss-import')({}),
        require('mdcss')({
            theme: require('mdcss-theme-macian'),
            destination: 'docs',
            assets: ['./macian.min.css']
        }),
        require('cssnano')({ preset: 'default' })
    ]
};
