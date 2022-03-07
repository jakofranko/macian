module.exports = {
    plugins: [
        require('postcss-import')({}),
        require('mdcss')({
            theme: require('mdcss-theme-macian')({ macianLocation: './macian.min.css' }),
            destination: 'docs',
            assets: ['./macian.min.css']
        }),
        require('cssnano')({ preset: 'default' })
    ]
};
