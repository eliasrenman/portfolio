    
const mix = require('laravel-mix');
mix.disableNotifications();

mix.js('resources/js/app.js', 'js/')
   .sass('resources/sass/app.scss', 'css/');