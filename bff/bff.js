

function readFile() {

  jQuery.get('https://data.bff.fm
/nowplaying.txt', function(data) {
     console.log(data);
  });
};

