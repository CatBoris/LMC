var gulp = require('gulp'),
    spritesmith = require('gulp.spritesmith'),
    watch = require('gulp-watch');

gulp.task('sprite', function () {
  var spriteData = gulp.src('app/images/icons/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: '_sprite.scss',
    padding: 10,
    algorithm: 'binary-tree'
  }));
  spriteData.img.pipe(gulp.dest('app/images/'));
  spriteData.css.pipe(gulp.dest('app/src/scss/'));
});

gulp.task('watch', function() {
  gulp.watch('app/images/icons/**/*', ['sprite']);
});

gulp.task('default', ['sprite', 'watch']);
