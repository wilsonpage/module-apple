/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      version: '0.1.0',
      banner: '/*! <%= pkg.name %> - v<%= meta.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        'Wilson Page; Licensed MIT */'
    },
    min: {
      dist: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    compass: {
      prod: {
        src: 'src',
        dest: 'build',
        specify: 'src/<%= pkg.name %>.scss',
        outputstyle: 'expanded',
        importPath: './components'
      }
    },
    hogan: {
      mytarget : {
        compile : {
          templates : ["src/<%= pkg.name %>.ms"],
          output : "build/template.js",
          binderName: "hulk"
        }
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-hogan');
  grunt.loadNpmTasks('grunt-compass');

  // Default task.
  grunt.registerTask('default', 'hogan min compass:prod');
};
