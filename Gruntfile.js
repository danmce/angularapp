/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        wiredep: {
            target: {
                src: 'src/index.html'
            }
        },
        clean: ['dist', '.tmp'],
        copy: {
            main: {
            expand: true,
            flatten: true,
            src: ['src/index.html'],
            dest: 'dist/'
            }
        },
        useminPrepare: {
            options: {
                dest: 'dist'
            },
            html: 'src/index.html'
        },
        usemin: {
            html: 'dist/index.html'
        }
    });


    // Default task.
    grunt.registerTask('default', [
        'clean',
        'wiredep',
        'copy',
        'useminPrepare',
        'concat',
        'uglify',
        'cssmin',
        'usemin'
    ]);

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-wiredep');
};

