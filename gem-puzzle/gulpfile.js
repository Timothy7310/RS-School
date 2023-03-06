const {
    src,
    dest,
    watch,
    parallel,
    series
} = require('gulp');

const scss = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const critical = require('critical');
const svgo = require('gulp-svgo');


let crPages = ['index'];


function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'app/',
            routes: {
                '/node_modules': 'node_modules'
            }
        }
    });
}

function cleanDist() {
    return del('dist');
}



function scripts() {
    return src([
            'node_modules/swiper/swiper-bundle.min.js',
            'app/js/main.js'
        ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream());
}



function styles() {
    return src('app/scss/main.scss')
        .pipe(scss({
            outputStyle: 'compressed'
        }))
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
            // overrideBrowserslist: ['last 10 version'],
            grid: true
        }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream());
}



function criticalCSS(done) {
    crPages.forEach(async page => {
        await critical.generate({
            base: './dist/',
            src: `${page}.html`,
            css: ['css/style.min.css'],
            target: {
                css: `css/${page}-critical.css`,
                //uncritical: `css/${page}-async.css`
            },

            // Viewport width
            width: 1300,

            // Viewport height
            height: 800,

            include: [
                /footer/
            ]


        });
    });

    done();
}


function svgOpti() {
    return gulp.src('app/img/**/*.svg')
        .pipe(svgo())
        .pipe(gulp.dest('app/img/icons'));
}




function build() {
    return src([
            'app/css/style.min.css',
            'app/favicon/**/*',
            'app/fonts/**/*',
            'app/img/**/*',
            'app/js/main.min.js',
            'app/*.html'
        ], {
            base: 'app'
        })
        .pipe(dest('dist'));
}

function watching() {
    watch(['app/scss/**/*.scss'], styles);
    watch(['app/js/main.js'], scripts);
    watch(['app/*.html']).on('change', browserSync.reload);
}


exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.cleanDist = cleanDist;
exports.criticalCSS = criticalCSS;


exports.build = series(cleanDist, build);

// exports.svgBuild   = series(svgOpti, svgSprite);


exports.default = parallel(styles, scripts, browsersync, watching);