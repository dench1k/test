// grunt
// grunt task-name
// grunt watch
module.exports = function (grunt) {
    grunt.initConfig({

        concat: {
            options: {

            },
            files: {
                src: [
                    'assets/scripts/lib/jquery/1.11.1/jquery-1.11.1.min.js',
                    'assets/scripts/app.js'
                ],
                dest: 'assets/scripts/production.js'
            }
        },

        uglify: {
            options: {

            },
            files: {
                src: [
                    'assets/scripts/production.js'
                ],
                dest: 'assets/scripts/production.min.js'
            }
        },

        clean: {
            img: ["assets/images/build/"]
        },

        imagemin: {
            options: {

            },
            files: {
                expand: true,
                cwd: 'assets/images/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'assets/images/build/'
            }
        },

        watch: {
            options: {
                reload: true,
                spawn: false
            },
            files: [
                'assets/scripts/*.js'
            ],
            tasks: ['concat', 'uglify'],
            livereload: {
                options: {livereload: true},
                files: [
                    'assets/styles/**/*',
                    'assets/scripts/**/*'
                ]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['concat', 'uglify', 'clean', 'imagemin']);
    grunt.registerTask('img', ['clean', 'imagemin']);

};