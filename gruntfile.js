module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON(“package.json”),
        less: {
            development: {
                files: {
                    'pasta/arquivoFinal.css': 'pasta/origem.less'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'pasta/arquivoFinal.min.js': 'pasta/ArquivoInicial.js'
                }
            }
        }


    });


    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'uglify']);
};
