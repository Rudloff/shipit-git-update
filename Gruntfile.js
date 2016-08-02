/*jslint node: true*/
module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-jslint');

    grunt.initConfig({
        jslint: {
            Gruntfile: {
                src: 'Gruntfile.js'
            },
            tasks: {
                src: ['tasks/*.js', 'tasks/**/*.js']
            },
            index: {
                src: 'index.js'
            }
        }
    });

    grunt.registerTask('lint', ['jslint']);
};
