var gulp = require('gulp');
var filenames = require("gulp-filenames");
var print = require('gulp-print');
var fs = require('fs');

gulp.task('copy', function() {
    gulp.src('./*.html')
    fs.writeFile('filename.txt', 'contents', print());
    // .pipe(filenames('all','relative'))
    // Perform minification tasks, etc here
    gulp.pipe(gulp.dest('../../../../Users/Miguelo/Desktop/dropbox'));
});

gulp.task('taskname', function(cb){
  fs.writeFile('filename.txt', 'contents', cb);
});
