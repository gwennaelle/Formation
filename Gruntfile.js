module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.initConfig({
        htmlmin: {                                     // Task
          build: {                                      // Target
            options: {                                 // Target options
              removeComments: true,
              collapseWhitespace: true
            },
            files: [{
                expand: true,
                cwd: 'src',
                src: ['*.html'],
                dest: 'dist'
            }]
          }
        },
        cssmin: {
            target: {
              files: [{
                expand: true,
                cwd: 'src/assets/css/',
                src: ['*.css'],
                dest: 'dist',
                ext: '.min.css'
              }]
            }
          },
        uglify: {
            build: {
                files: [{
                    expand: true,
                    cwd: 'src/scripts/',
                    src: ['*.js'],
                    dest: 'dist'
                }]
            }
          },
          imagemin: {
            static: {
                options: {
                    optimizationLevel: 3,
                    svgoPlugins: [{removeViewBox: false}],
                    use: [mozjpeg()] // Example plugin usage
                }
            },
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist'
                }]
            }
        }
      });


    grunt.registerTask('test-grunt', () => {
        console.log('grunt ready')
    })

    grunt.registerTask('default', ['htmlmin','cssmin', 'uglify', 'imagemin'])
};