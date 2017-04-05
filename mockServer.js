var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3001;
var router = express.Router();

//
// Projects
//

var Projects = [];

router.route('/api/v1/projects')
  // Get Projects
  .get(function(req, res) {
    res.json(Projects);
});


app.use('', router);
app.listen(port);
console.log('MockServer is running at port ' + port);