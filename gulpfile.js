var gulp = require("gulp"),
    minifyCSS = require("gulp-minify-css"),
    rename = require("gulp-rename"),
    uglify = require("gulp-uglify"),
    concat = require("gulp-concat"),
    notify = require("gulp-notify");
gulp.task("minifycss",function(){
    return gulp.src(["css/*.css"])
        .pipe(concat("main.css"))
        .pipe(rename({suffix:".min"}))
        .pipe(minifyCSS())
        .pipe(gulp.dest("css/"))
        .pipe(notify({messafe:"ok!"}))                                
})
gulp.task("minify",function(){
    return gulp.src(["js/*.js"])
        .pipe(concat("main.js"))
        .pipe(rename({suffix:".min"}))
        .pipe(minifyCSS())
        .pipe(gulp.dest("js/"))
        .pipe(notify({messafe:"ok!"}))                                
})
    