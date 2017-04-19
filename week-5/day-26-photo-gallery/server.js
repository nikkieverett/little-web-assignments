var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/api/pics', function(req, res){
  res.send({
    pictures: [
      {
        name: 'gardenia',
        thumbnail: 'images/thumbnail/gardenia-t.jpg' ,
        fullSize: 'images/gardenia.jpg'
      },
      {
        name: 'moon-cactus',
        thumbnail:'images/thumbnail/moon-cactus-t.jpg ',
        fullSize:'images/moon-cactus.jpg'
      },
      {
        name: 'dhalia',
        thumbnail:'images/thumbnail/dhalia-t.jpg',
        fullSize:'images/dhalia.jpg'
      },
      {
        name: 'cactus',
        thumbnail:'images/thumbnail/cactus-t.jpg',
        fullSize:'images/cactus.jpg'
      },
      {
        name: 'fox-glove',
        thumbnail:'images/thumbnail/fox-glove-t.jpg',
        fullSize:'images/fox-glove.jpg'
      },
      {
        name: 'kalanchoe',
        thumbnail:'images/thumbnail/kalanchoe-t.jpg',
        fullSize:'images/kalanchoe.jpg'
      },
      {
        name: 'sedum',
        thumbnail:'images/thumbnail/sedum-t.jpg',
        fullSize:'images/sedum.jpg'
      },
      {
        name: 'hibiscus',
        thumbnail:'images/thumbnail/hibiscus-t.jpg',
        fullSize:'images/hibiscus.jpg'
      }
    ]
  });
});

app.listen(5005, function(){
  console.log('listening on port 5005');
});
