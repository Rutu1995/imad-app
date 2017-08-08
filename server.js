var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));



var ArticleOne = {
    title:'Article one i ruturaj gargi',
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
};
function CreateTemplate(data)
{
    var title= data.title;
    var heading= data.heading;
    var content= data.content;


var htmlTemplate=`
<html>
    <head>
        <title>
           ${title}
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

app.get('/Article-one',function (req,res){
    res.send(createTemplate(articleOne));
    });
    
app.get('/Article-two',function (req,res){
    res.sendFile(path.join(__dirname, 'ui', 'Article-two.html'));
    });
    
app.get('/Article-three',function (req,res){
   res.sendFile(path.join(__dirname, 'ui', 'Article-three.html'));
    });
    
    
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
