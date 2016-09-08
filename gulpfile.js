const gulp = require('gulp');
const changed = require('gulp-changed');
const print = require('gulp-print');

//====================================
// Ruta de destino
//====================================
const DEST = './dist';

//====================================
// funcion de copiado
//====================================
gulp.task('copyToDist', function() {
    console.log("Copiando archivos...");
    gulp.src([
        'index.html',
        '*paralimpicos/**/*.html',
        '*paralimpicos/**/*.css',
        '*paralimpicos/**/*.js',
        '*paralimpicos/**/*.json',
        '*paralimpicos/**/*.csv',
        '*paralimpicos/**/*.xml', // <- NO olvidar borrar la coma
        // es posible eliminar los siguientes archivos
        '*paralimpicos/**/*.png',
        '*paralimpicos/**/*.ico',
        '*paralimpicos/**/fonts/*',
        '*paralimpicos/**/img/*'
    ])
    .pipe(changed(DEST, {hasChanged: changed.compareSha1Digest}))
    .pipe(print())
    .pipe(gulp.dest(DEST));
});

//====================================
// Copiado activo
//====================================
gulp.task('watchCopyToDist',['copyToDist'], function() {
  gulp.watch([
      'index.html',
      '*paralimpicos/**/*.html',
      '*paralimpicos/**/*.css',
      '*paralimpicos/**/*.js',
      '*paralimpicos/**/*.json',
      '*paralimpicos/**/*.csv',
      '*paralimpicos/**/*.xml', // <- NO olvidar borrar la coma
      // es posible eliminar los siguientes archivos
      '*paralimpicos/**/*.png',
      '*paralimpicos/**/*.ico',
      '*paralimpicos/**/fonts/*',
      '*paralimpicos/**/img/*'
  ], ['copyToDist']);
});
