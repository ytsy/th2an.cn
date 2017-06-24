var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
gulp.task('default',['clean'],function(){
    gulp.run(['less2css','js','html','watch']);
    return gulp.src('./common/bootstrap/**/*.*').pipe(gulp.dest('./dist/common/bootstrap'));
});
//压缩js文件
gulp.task('js',function(){
    return gulp.src('./app/**/*.js',{
        base:'./'
    }).pipe($.uglify())
      .pipe(gulp.dest('./dist'));
});
//压缩css文件
gulp.task('less2css',function(){
    return gulp.src(['./**/*.less','!node_modules/**/*.less'],{
        base:'./'
    })  .pipe($.plumber({
        errorHandler:$.notify.onError('Error:<%=error.message%>')
    }))
        .pipe($.less())
        .pipe($.csso())
        .pipe($.rename({
            suffix:'.min'
        }))
        .pipe(gulp.dest('./dist'));
});
//压缩HTML文件
gulp.task('html',function(){
    return gulp.src('./app/**/*.html')
        /*.pipe($.htmlMinify())*/
        .pipe(gulp.dest('./dist/app'));
});

gulp.task('watch',function(){
   gulp.watch('./app/**/*.less',['less2css']);
   gulp.watch('./app/**/*.js',['minjs']);
   gulp.watch('./app/**/*.html',['html']);
});
gulp.task('clean',function(){
    return gulp.src('./dist/*',{read:false})
        .pipe($.clean());
});