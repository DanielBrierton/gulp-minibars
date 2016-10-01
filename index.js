var through = require('through2');
var gutil = require('gulp-util');
var minibars = require('minibars');

module.exports = function (options) {
    options = options || {};

    return through.obj(function (file, encoding, callback) {
        var template = file.contents.toString();
        var compiledTemplate = minibars.compile(template);
        var output = '';
        if (options.outputType === 'amd') {
            output = 'define(function() { return ' + compiledTemplate.toString() + ' })';
        } else if (options.outputType === 'commonjs') {
            output = 'module.exports = ' + compiledTemplate.toString();
        } else if (options.outputType === 'window') {
            var functionName = file.path.match(/([A-Za-z_][A-Za-z_0-9]+)(\..*)$/)[1];
            output = 'window.minibarsTemplates = window.minibarsTemplates || {};';
            output += 'window.minibarsTemplates.' + functionName + ' = ' + compiledTemplate.toString();
        } else {
            output = compiledTemplate.toString();
        }

        file.path = gutil.replaceExtension(file.path, '.js');
        file.contents = Buffer.from(output);
        callback(null, file);
    });
}
