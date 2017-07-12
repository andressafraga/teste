var gulp=require("gulp");
var sass=require("gulp-sass");


gulp.task("css",function(){
	gulp.src("scss/**/*.scss")
	.pipe(sass({outputStyle:"compressed"}))
	.pipe(gulp.dest("css/"));
})

gulp.task("watch",function(){
	gulp.watch("scss/**",["css"])
})