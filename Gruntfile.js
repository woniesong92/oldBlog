module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    "lib/flatui/css/flat-ui.css": "lib/flatui/less/flat-ui.less"
                }
            }
        },
        watch: {
            files: ['lib/flatui/less/*'],
            tasks: ['build'],
        },
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['less']);
    grunt.registerTask('default', ['build']);
};
