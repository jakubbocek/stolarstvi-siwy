// Gruntfile with the configuration of grunt-express and grunt-open. No livereload yet!
module.exports = function (grunt) {

    // Load Grunt tasks declared in the package.json file
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);     
    require('jit-grunt')(grunt);
    
   /* grunt.event.on('watch', function(action, filepath, target) {
      grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    }); */   

    // Configure Grunt 
    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),

        autoprefixer: {
            dist: {
                src: ['css/main.css'],
                dest: 'css/main.css'
            },
            options:{
                browsers: ['> 5%']
            }
        },

        concat: {
            dist: {
                src: [
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/bootstrap/dist/js/bootstrap.min.js',
                'bower_components/object-fit-images/dist/ofi.browser.js',
//                'bower_components/slick-carousel/slick/slick.min.js',
//                'www/bower_components/raty/lib/jquery.raty.js',
//                'bower_components/chosen/chosen.jquery.js',
//                'www/bower_components/cropperjs/dist/cropper.min.js',
//                'www/bower_components/jquery-locationpicker/dist/locationpicker.jquery.min.js',
//                'www/bower_components/jquery-ui/jquery-ui.min.js',
//                'bower_components/moment/min/moment-with-locales.min.js',                
//                'www/bower_components/jquery-unveil/jquery.unveil.min.js',
//                'bower_components/rateYo/min/jquery.rateyo.min.js',
//                'www/bower_components/jquery-locationpicker/dist/locationpicker.jquery_1.js',
//                'bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
//                'www/ilightbox/js/ilightbox.packed.js',
                    //'www/bower_components/select2/dist/js/select2.min.js',
//                'bower_components/nouislider/distribute/nouislider.min.js',
//                'bower_components/featherlight/release/featherlight.min.js',
//                'bower_components/datetimepicker/build/jquery.datetimepicker.full.min.js',
                    'js/main.js'
                ],
                dest: 'www/js/main.min.js'
            }
        },

        express: {
            all: {
                options: {
                    port: 9001,
                    hostname: "0.0.0.0",
                    bases: 'www',
                    // Make sure you don't use `.` or `..` in the path as Express
                    // is likely to return 403 Forbidden responses if you do
                    // http://stackoverflow.com/questions/14594121/express-res-sendfile-throwing-forbidden-error
                    livereload: true
                }
            }
        },

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1,
                banner: '/*!\nProject: <%= pkg.name %>\nLast changes: <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %>\nAuthor: <%= pkg.author %>\nWebsite: <%= pkg.homepage %>\n*/\n'
            },
            target: {
                files: {
                    'www/css/main.min.css': ['css/main.css']
                }
            }
        },

        sprite:{
            all: {
                src: ['sprites/*.png','sprites/*.jpg'],
                dest: 'www/sprites.png',
                destCss: 'css/sprites.less',
                cssTemplate: 'handlebarsStr.css.handlebars',
                cssFormat: 'less'
            }
        } ,
        less: {
            development: {
                files: {
                    "css/main.css": ['css/main.less']
                }
            }
        },
        // grunt-watch will monitor the projects files
        watch: {
            all: {
                files: ['www/*.html','www/fonts/*','js/*.js','!**/node_modules/**'],
                options: {
                    livereload: true
                }
            },
            png:{
                files:['sprites/*.png'],
                tasks: ['sprite']
            },
            jpeg:{
                files:['sprites/*.jpg'],
                tasks: ['sprite']
            },
            html: {
                files: ['*.html']
            },
            less: {
                files: ['css/*.less'],
                tasks: ['less','autoprefixer','cssmin']
            },
            js:{
                files: ['js/*.js'],
                tasks: ['concat']
            }
        },
        // grunt-open will open your browser at the project's URL
        open: {
            all: {
                // Gets the port from the connect configuration
                path: 'http://localhost:<%= express.all.options.port%>'
            }
        }
    });

    // Creates the `server` task
    grunt.registerTask('server', [
        'express',
        'open',
        'watch',
        'less',
       'sprite',
        'cssmin',
        'uglify',
        'autoprefixer'
    ]);
    
    grunt.loadNpmTasks('grunt-contrib-concat');
};