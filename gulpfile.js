var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var bs = require("browser-sync").create();
gulp.task('default',['clean'],function(){
    gulp.run(['less2css','js','html','watch']);
    gulp.src('./common/bootstrap/**/*.*').pipe(gulp.dest('./dist/common/bootstrap'));
    gulp.src('./images/**/*.*').pipe(gulp.dest('./dist/images'));
});
//压缩js文件
gulp.task('js',function(){
    return gulp.src('./app/**/*.js',{
        base:'./'
    })//.pipe($.uglify())
      .pipe(gulp.dest('./dist'))
      .pipe(bs.reload({stream:true}));
});
//压缩css文件
gulp.task('less2css',function(){
    return gulp.src(['./**/*.less','!node_modules/**/*.less'],{
        base:'./'
    })  .pipe($.plumber({
        errorHandler:$.notify.onError('Error:<%=error.message%>')
    }))
        .pipe($.less())
        //.pipe($.csso())
        .pipe($.rename({
            suffix:'.min'
        }))
        .pipe(gulp.dest('./dist'))
        .pipe(bs.reload({stream:true}));
});
//压缩HTML文件
gulp.task('html',function(){
    return gulp.src('./app/**/*.html')
        /*.pipe($.htmlMinify())*/
        .pipe(gulp.dest('./dist/app'))
        .pipe(bs.reload({stream:true}));
});

gulp.task('watch',function(){
    bs.init({
        proxy:"localhost"
    });
   gulp.watch('./**/*.less',['less2css']);
   gulp.watch('./app/**/*.js',['js']);
   gulp.watch('./app/**/*.html',['html']);
});
gulp.task('clean',function(){
    return gulp.src('./dist/*',{read:false})
        .pipe($.clean());
});