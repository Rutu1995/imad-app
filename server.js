var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles ={
   'Article-one' :{
    tittle:'Article one i ruturaj gargi',
    heading:'Article one',
    content:`   
                  <p>
                    LookO is the best website for online saloon booking.
                    LookO is the best website for online saloon booking
                    LookO is the best website for online saloon booking
                    LookO is the best website for online saloon booking
                  </p>
                  <p>
                    LookO is the best website for online saloon booking
                    LookO is the best website for online saloon booking
                    LookO is the best website for online saloon booking
                  </p>`    
},
    'Article-two':{
   
    tittle:'Article Two i ruturaj gargi',
    heading:'Article Two',
    content:`   
                  <p>
                    LookO is the best website for online saloon booking.
                    LookO is the best website for online saloon booking
                    LookO is the best website for online saloon booking
                    LookO is the best website for online saloon booking
                  </p>
                  <p>
                    LookO is the best website for online saloon booking
                    LookO is the best website for online saloon booking
                    LookO is the best website for online saloon booking
                  </p>`    


},
     'Article-three' : {
    title:'Article Three i ruturaj gargi',
    heading:'Article Three',
    content:`   
                  <p>
                    LookO is the best website for online saloon booking.
                    LookO is the best website for online saloon booking
                    LookO is the best website for online saloon booking
                    LookO is the best website for online saloon booking
                  </p>
                  <p>
                    LookO is the best website for online saloon booking
                    LookO is the best website for online saloon booking
                    LookO is the best website for online saloon booking
                  </p>`    
}
};

function CreateTemplate(data)
{
    var tittle= data.tittle;
    var heading= data.heading;
    var content= data.content;


var htmlTemplate=`
<html>
    <head>
        <title>
           ${tittle}
        </title>
         <link href="/ui/style.css" rel="stylesheet" />
        
        
    </head>
        <body>
            <div class="container">
            <div>
                <a href="/">home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${content}
            </div>
            </div>
        </body>
            </html>
    
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function (req,res){
    //articleName ==article-one
    //articles[articleName]=={} content object for article one
    var articleName=req.params.articleName;
    res.send(CreateTemplate(articles[articleName]));
    });
    

    
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/favicon.ico', function (req, res) {

  res.sendFile(path.join(__dirname, 'ui', 'favicon.ico'));

});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
