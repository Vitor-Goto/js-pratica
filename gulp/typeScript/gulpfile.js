const { series } = require ('gulp')
const gulp = require ('gulp')
const ts = require ('gulp-typescript')
const { isExportSpecifier } = require('typescript')
const tsProject = ts.createProject('tsconfig.json')

function padraoTS() {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('build'))
}

isExportSpecifier.default = series(padrao)