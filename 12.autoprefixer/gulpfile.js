let { task, gulp, watch } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

task('styles', () => {
	gulp.src('css/style.css')
		.pipe(autoprefixer({ browsers: ['last 2 versions'] }))
		.pipe(gulp.dest('dist'));
});

watch('css/style.css', ['styles']);
