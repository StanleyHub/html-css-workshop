'use strict';

module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-browser-sync');

  	grunt.initConfig({
  		browserSync: {
  			serve: {
  				bsFiles: {
			        src : ['app/css/*.css', 'app/index.html']
			    },
			    options: {
			    	port: 8080,
			        server: {
			            baseDir: "./app",
			            routes: {
             				'/bower_components': './bower_components'
            			}
			        }
			    }
			}
		}	
  	});

  	grunt.registerTask('default', ['browserSync:serve']);
};