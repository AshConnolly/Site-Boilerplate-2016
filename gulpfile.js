var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer')
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat');

const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

var siteroot = "app/";

gulp.task('sass', function() {
    return gulp.src(siteroot + 'sass/**/*.scss')
        .pipe(sass().on('error', sass.logError)) // Using gulp-sass + error handling
        .pipe(autoprefixer('last 2 versions'))
        //.pipe(minify())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});


gulp.task('js', function() {
  // set concat order to specified files then all other remaining.
  // return gulp.src([siteroot + 'js/arem.min.js', siteroot + 'js/rem.min.js', siteroot + 'js/*.js' ])

  // set concat order to specified files last, but all other files before specified ones.
  // return gulp.src([siteroot + 'js/*.js', siteroot + 'js/arem.min.js', siteroot + 'js/rem.min.js' ])
  return gulp.src(siteroot + 'js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'));
});

//image min - combines gifsicle, jpegtran, optipng, svgo
gulp.task('imgcomp', () => {
    return gulp.src(siteroot + 'img/**/*')
        .pipe(imagemin({
            optimizationLevel: 4,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/img'));
});



// Static server
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            //baseDir: ["app", "dist"] //location of site
            baseDir: "./" //location of site
        }
    });
});

// dynamic site
// gulp.task('browserSync', function() {
//     browserSync.init({
//         proxy: "http://localhost:8888/atomic-site-boilerplate/app" // Server link
//     });
// });

//below will watch files once the browsersync task is completed
gulp.task('watch', ['browserSync'], function() {
    gulp.watch(siteroot + 'sass/**/*.scss', ['sass']);
    gulp.watch(siteroot + '**/*.html', browserSync.reload);
    gulp.watch(siteroot + '**/*.php', browserSync.reload);
    gulp.watch(siteroot + 'js/**/*.js', browserSync.reload);
    // Other watchers
})

//spin up browsersync server, then run watch tasks
gulp.task('default', ['sass', 'js', 'browserSync', 'watch']);
