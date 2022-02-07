// NPM packages
const gulp = require('gulp'),
	sass = require('gulp-sass')(require('sass'));

function css() {
	return gulp
		.src(`src/style.scss`)
		.pipe(sass())
		.pipe(gulp.dest(`dist/style.css`));
}

gulp.task('default', gulp.series(css));
