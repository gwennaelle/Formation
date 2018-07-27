module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-json-minification');

    grunt.initConfig({
        clean: {
            folder: ['dist/']
        },
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
                dest: 'dist/assets/css'
              }]
            }
          },
        uglify: {
            build: {
                files: [{
                    expand: true,
                    cwd: 'src/scripts/',
                    src: ['*.js'],
                    dest: 'dist/scripts'
                }]
            }
          },
        imagemin: {
            static: {
                options: {
                    optimizationLevel: 3,
                    svgoPlugins: [{removeViewBox: false}]
                },
                files: [{
                    expand: true,
                    cwd: 'src/assets/img/',
                    src: ['*.{png,jpg,gif}'],
                    dest: 'dist/assets/img'
                }]
            }
        },
        json_minification: {
            target: {
              files: [{
                expand: true,
                cwd: 'src/data',
                src: ['*.json', '!*.min.json'],
                dest: 'dist/data'
              }]
            }
          }          
      });


    grunt.registerTask('test-grunt', () => {
        console.log('grunt ready')
    })

    grunt.registerTask('default', ['clean', 'htmlmin','cssmin', 'uglify', 'imagemin', 'json_minification'])
};