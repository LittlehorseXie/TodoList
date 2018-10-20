let gulp = require('gulp');
let clean = require('gulp-clean');
let shell = require('gulp-shell');
let webpack = require('webpack');
let webpack_config = require('./webpack.config.js');

//Webpack编译
gulp.task('run', ['webpack'] ,shell.task(['npm run start']));
gulp.task('webpack', ['clean'], function(cb) {
     webpack(webpack_config, function(err, stats) {
        if(err) throw new Error(err);
        console.log(stats.compilation.fileDependencies);
        cb();
    });
});
gulp.task('clean', function(cb){
    return gulp.src('dist', {read: false}).pipe(clean());
    cb();
});

//NW打包
gulp.task('prod', ['clean-out'] ,shell.task(['npm run mw-prod']));
gulp.task('clean-out', function(cb){
    return gulp.src('out', {read: false}).pipe(clean());
    cb();
});