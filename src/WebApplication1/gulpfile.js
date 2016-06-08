/// <binding BeforeBuild='clean' AfterBuild='min' Clean='clean' />
//var ts = require('gulp-typescript');
//var gulp = require('gulp');
//var clean = require('gulp-clean');

//var destPath = './wwwroot/libs/';

//// Delete the dist directory
//gulp.task('clean', function () {
//    return gulp.src(destPath)
//        .pipe(clean());
//});

//gulp.task("scriptsNStyles", () => {
//    gulp.src([
//            'es6-shim/es6-shim.min.js',
//            'systemjs/dist/system-polyfills.js',
//            'systemjs/dist/system.src.js',
//            'reflect-metadata/Reflect.js',
//            'rxjs/**',
//            'zone.js/dist/**',
//            '@angular/**',
//            'jquery/dist/jquery.*js',
//            'bootstrap/dist/js/bootstrap.*js',
//    ], {
//        cwd: "node_modules/**"
//    })
//        .pipe(gulp.dest("./wwwroot/libs"));

//    gulp.src([
//        'node_modules/bootstrap/dist/css/bootstrap.css'
//    ]).pipe(gulp.dest('./wwwroot/libs/css'));
//});

//var tsProject = ts.createProject('scripts/tsconfig.json');
//gulp.task('ts', function (done) {
//    //var tsResult = tsProject.src()
//    var tsResult = gulp.src([
//            "scripts/*.ts"
//    ])
//        .pipe(ts(tsProject), undefined, ts.reporter.fullReporter());
//    return tsResult.js.pipe(gulp.dest('./wwwroot/appScripts'));
//});

//gulp.task('watch', ['watch.ts']);

//gulp.task('watch.ts', ['ts'], function () {
//    return gulp.watch('scripts/*.ts', ['ts']);
//});

//gulp.task('default', ['scriptsNStyles', 'watch']);

/// <binding BeforeBuild='clean' AfterBuild='script, min' Clean='clean' />


//var gulp = require("gulp"),
//    rimraf = require("rimraf"), // rimraf is used to delete a folder
//    gulpRimraf = require("gulp-rimraf"), // to clean up multiple files we need to use gulp-rimraf
//    concat = require("gulp-concat"), 
//    cssmin = require("gulp-cssmin"), // generate min css
//    uglify = require("gulp-uglify"), //generate min js
//    ts = require("gulp-typescript"), //compile typescript
//    sourcemaps = require('gulp-sourcemaps'); // sourcemap to be able to debug the ts files


//var webroot = "./wwwroot/";

//var paths = { 
//     js: webroot + "js/**/*.js", 
//     minJs: webroot + "js/**/*.min.js", 
//     css: webroot + "css/**/*.css", 
//     minCss: webroot + "css/**/*.min.css", 
//     concatJsDest: webroot + "js/app.min.js", 
//     concatCssDest: webroot + "css/site.min.css", 
//     typescriptRoot: './scripts/', 
//     typescriptOut: webroot + 'js/', 
//     typescriptJs: './scripts/**/*.js', 
//     concatTsFileName: 'app.js' 
// }; 
 
//var tsProject = ts.createProject(paths.typescriptRoot + 'tsconfig.json'); // use tsconfig.json

//gulp.task("clean:js", function (cb) {
//    rimraf(paths.concatJsDest, cb);
//});

//gulp.task("clean:css", function (cb) {
//    rimraf(paths.concatCssDest, cb);
//});

//gulp.task("clean:tsout", function (cb) {
//    rimraf(paths.typescriptOut + paths.concatTsFileName, cb);
//});

//gulp.task("clean:scriptjs",
//    function () {
//        return gulp.src(paths.typescriptJs, { read: false })
//          .pipe(gulpRimraf());
//    });


//gulp.task("clean", ["clean:js", "clean:css", "clean:tsout", "clean:scriptjs"]);

//gulp.task("min:js", function () {
//    return gulp.src([paths.js, "!" + paths.minJs], {
//        base: "."
//    })
//      .pipe(concat(paths.concatJsDest))
//      .pipe(uglify())
//      .pipe(gulp.dest("."));
//});

//gulp.task("min:css", function () {
//    return gulp.src([paths.css, "!" + paths.minCss])
//      .pipe(concat(paths.concatCssDest))
//      .pipe(cssmin())
//      .pipe(gulp.dest("."));
//});

//gulp.task("min", ["min:js", "min:css"]);

//gulp.task("tsbuild", function () {
//    var tsResult = tsProject.src()
//        .pipe(sourcemaps.init())
//        .pipe(ts(tsProject)); // use tsconfig.json

//    return tsResult.js
//        .pipe(concat(paths.concatTsFileName))
//        .pipe(sourcemaps.write())
//        .pipe(gulp.dest(paths.typescriptOut));
//});

//gulp.task("watch:tsbuild", ['tsbuild'], function () {
//    gulp.watch(paths.typescriptRoot + '**/*.ts', ['tbbuild']);
//});
