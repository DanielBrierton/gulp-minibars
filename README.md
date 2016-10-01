# gulp-minibars 🍸

Gulp plugin for [Minibars](https://github.com/PepsRyuu/minibars)

## Usage

Simply require this plugin and pipe your files through it in your Gulp task. There's only one option, `outputType`, which is the type of output you want. Allowed options are `amd`, `commonjs`, and `window`. `window` uses the filenames of your templates for function names attached to window.minibarsTemplates. So if your file is called `myTemplate.html`, you'll get a function at `window.minibarsTemplate.myTemplate`.

```javascript
var gulp = require('gulp');
var minibars = require('gulp-minibars');

gulp.task('generateTemplates', function () {
	return gulp.src('templates/*')
		.pipe(minibars({
			outputType: 'amd'
		}))
		.pipe(gulp.dest('dist/templates/'));
})
```

## Testing

Just run gulp, and it will create files of each type from the templates in the testTemplates folder. I might add actual automatic validation of these at some point.