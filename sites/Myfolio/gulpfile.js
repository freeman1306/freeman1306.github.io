'use strict';
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourceMaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssMin = require('gulp-minify-css'),
    rimRaf = require('rimraf'),
    browserSync = require('browser-sync'),
    imagemin = require('gulp-imagemin'),
    newer = require('gulp-newer'),
    reload = browserSync.reload;



var path = {
    build: {
        html: 'build',
        js: 'build/js/',
        css: 'build/style/',
        img: 'build/img/',
        fnts: 'build/fonts/',

    },
    src: {
        html: 'src/*.html',
        js: 'src/js/main.js',
        style: 'src/style/**/*.scss',
        img: 'src/img/**',
        fnts: 'src/fonts/**',


    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.scss',
        img: 'src/img/**',
        fnts: 'src/fonts/**',

    },
    clean: './build'
};

gulp.task('webserver', function () {
    browserSync({
        server: {
            baseDir: './build'
        },
        host: 'localhost',
        port: 8081,
        // tunnel: true
    });
});

gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({
            stream: true
        }));
})

gulp.task('imagemin', function () {
    gulp.src('src/img/**/*.{jpg,jpeg,png,gif,svg}')
        .pipe(newer('build/img/**'))
        .pipe(imagemin({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest('build/img'))
        .pipe(reload({
            stream: true
        }));
})

gulp.task('fonts', function (done) {
    gulp.src('src/fonts/**')

        .pipe(gulp.dest('build/fonts'));

    done();
});

gulp.task('js:build', function (done) {

    gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(sourceMaps.init())
        .pipe(uglify())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({
            stream: true
        }));

    done();

});

gulp.task('style:build', function (done) {
    gulp.src(path.src.style)
        .pipe(sourceMaps.init())
        .pipe(sass())
        .pipe(prefixer())
        .pipe(cssMin())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({
            stream: true
        }));
    done();
});



gulp.task('build', [
    'html:build', 'js:build', 'style:build', 'imagemin', 'fonts'
]);

gulp.task('watch', function () {
    watch([path.watch.js], function (ev, callback) {
        gulp.start('js:build');
    });
    watch([path.watch.html], function (ev, callback) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function (ev, callback) {
        gulp.start('style:build');
    });
    watch([path.watch.img], function (ev, callback) {
        gulp.start('imagemin');
    });
    watch([path.watch.fnts], function (ev, callback) {
        gulp.start('fonts');
    });

});

gulp.task('clean', function (callback) {
    rimRaf(path.clean, callback);
});

gulp.task('default', ['build', 'webserver', 'watch']);