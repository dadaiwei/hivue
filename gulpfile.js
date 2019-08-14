const gulp = require("gulp");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const cleanCss = require("gulp-clean-css");
const del = require("del");

gulp.task("scss", async () => {
  await gulp
    .src("packages/theme/index.scss")
    .pipe(sass())
    .pipe(concat("index.css"))
    .pipe(cleanCss())
    .pipe(gulp.dest("lib/theme"));
});

gulp.task("clean", async () => {
  del(["lib/theme", "lib/iconfont"]);
});

gulp.task("copy", async () => {
  await gulp
    .src([
      "packages/theme/iconfont/*.eot",
      "packages/theme/iconfont/*.svg",
      "packages/theme/iconfont/*.ttf",
      "packages/theme/iconfont/*.woff",
      "packages/theme/iconfont/*.woff2"
    ])
    .pipe(gulp.dest("lib/theme/iconfont"));
});

const finishGulp = (cb) => {
  cb();
  console.log("generate theme success!");
};

gulp.task("default", gulp.series("clean", "scss", "copy", finishGulp));
