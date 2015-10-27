var FileFinder = require('../');

FileFinder().find('.secrets', __dirname).on('loaded', function(data){
    console.log('LOADED', data);
});
