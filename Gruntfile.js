module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Remove built directory
    clean: {
      build: ['build/']
    },

    // Built stylesheets with less
    less: {
      build: {
        src: 'assets/less/*',
        dest: 'build/css/app.css'
      }
    },

    // Build the site using grunt-includes
    includes: {
      build: {
        cwd: 'site',
        src: [ '*.html', 'pages/*.html' ],
        dest: 'build/',
        options: {
          flatten: true,
          includePath: 'include',
          banner: '<!-- Site built using grunt includes! -->\n'
        }
      }
    }
  });

  // Load plugins used by this task gruntfile
  grunt.loadNpmTasks('grunt-includes');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Task definitions
  grunt.registerTask('build', ['clean', 'less', 'includes']);
  grunt.registerTask('default', ['build']);
};
