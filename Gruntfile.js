module.exports = function(grunt) {
    var resourceDir = './resources/';
    var scssDir     = resourceDir + 'sass/';
    var cssDir      = resourceDir + 'css/';

    grunt.initConfig({
        watch: {
            options: {
                event: ['added', 'changed', 'deleted']
            },
            css: {
                files: scssDir + '**/*.scss',
                tasks: ['compass'],
            }
        },
        compass: {
            options: {
                environment: 'development',
                outputStyle: 'expanded',
                force: true,
                config: scssDir + 'config.rb',
            },
            dist: {
                options: {
                    sassDir: scssDir,
                    cssDir:  cssDir,
                }
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.registerTask('default', ['watch']);
};
