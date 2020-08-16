
let project_folder = "build";
let source_folder = 'src';

let path = {
    build:{
        html: project_folder + '/',
        style: project_folder + '/assets/css/',
        js: project_folder + '/assets/js/',
        img: project_folder + '/assets/img/',
        fonts: project_folder + '/assets/fonts/',
        vendor: { css: project_folder + '/assets/vendor/css/', js: project_folder + '/assets/vendor/js/' },
    },
    src:{
        html: source_folder + '/pages/*.pug',
        style: source_folder + '/style/style.scss',
        js: source_folder + '/js/script.js',
        img: source_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
        fonts: source_folder + '/fonts/*',
        vendor: { css: source_folder + '/vendor/css/*', js: source_folder + '/vendor/js/*' },
    },
    watch:{
        html: source_folder + '/**/*.pug',
        style: source_folder + '/style/**/*.scss',
        components: source_folder + '/pages/**/*.{scss,pug,js}',
        js: source_folder + '/js/**/*.js',
        img: source_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
    },
    clean: "./" + project_folder + "/"

};

let {src, dest} = require('gulp'),
    gulp = require('gulp'),
    browsersync = require('browser-sync').create(),
    fileinclude = require('gulp-file-include'),
    typograf = require('gulp-typograf'),
    pug = require('gulp-pug'),
    del = require('del'),
    scss = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('cssnano'),
    group_media = require('gulp-group-css-media-queries'),
    imagemin = require('gulp-imagemin'),
    webp = require('gulp-webp'),
    webpack = require('webpack-stream'),
    webphtml = require('gulp-webp-html');






function browserSync(params) {
    browsersync.init({
        server:{
            baseDir: "./" + project_folder + "/"
        },
        port:3000,
        notify: false,
    })
}

function html() {
    return src(path.src.html)
        .pipe(pug())
        //.pipe(webphtml())
        .pipe(
            typograf({
                locale:['ru', 'en-US']
            }))
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}

function style() {
    return src(path.src.style)
        .pipe(
            scss({
                outputStyle:'expanded'
            })
        )
        .pipe(group_media())
        .pipe(
            autoprefixer({
                overrideBrowsersList: ['last 5 versions'],
                cascade: true
            }),
        )
        .pipe(postcss([
                cssnano()
        ])
        )
        .pipe(dest(path.build.style))
        .pipe(browsersync.stream())
}

function js() {
    return src(path.src.js)
        .pipe(webpack({
            mode: 'production',
            output:{
                filename:'script.js'
            }
        }))
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream())
}

function images() {
    return src(path.src.img)
        .pipe(
            webp({
                quality: 90
            })
        )
        .pipe(dest(path.build.img))
        .pipe(src(path.src.img))
        .pipe(
            imagemin({
                progressive: true,
                svgoPlugins: [{removeViewBox: false}],
                interliced: true,
                optimizationLevel: 3 //0 to 7
            })
        )
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream())
}

function fonts() {
    return src(path.src.fonts)
        .pipe(dest(path.build.fonts))
}

function vendors() {
        src(path.src.vendor.css)
        .pipe(dest(path.build.vendor.css));
    return src(path.src.vendor.js)
        .pipe(dest(path.build.vendor.js))
}

function watchFiles() {
    gulp.watch([path.watch.html],html);
    gulp.watch([path.watch.style],style);
    gulp.watch([path.watch.components],style);
    gulp.watch([path.watch.js],js);
    gulp.watch([path.watch.img],images);
}

function clean(){
    return del(path.clean);
}

let build = gulp.series(clean,  gulp.parallel(js,style,vendors,html,images,fonts));
let watch = gulp.parallel(build, watchFiles, browserSync);


exports.js = js;
exports.vendors = vendors;
exports.fonts = fonts;
exports.images = images;
exports.style  = style;
exports.html  = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;

