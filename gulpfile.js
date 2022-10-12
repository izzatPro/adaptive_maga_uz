var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});

gulp.task('styles', function(){
 return gulp.src("src/sass/*.+(scss || sass)")
 .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)).pipe(gulp.dest("src/css"))
 .pipe(browserSync.stream());
});
gulp.task('default', gulp.parallel('server', 'styles'));