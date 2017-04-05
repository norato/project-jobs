var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var _          = require('lodash');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3001;
var router = express.Router();
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

//
// Projects
//

var Projects = [];

router.route('/api/v1/projects')
  // Get Projects
  .get(function(req, res) {
    res.json(Projects);
  })

  .post(function(req, res){
    var _newProject = {
      "name": req.body.name,
      "description": req.body.description
    }
    var newProject = buildProject(_newProject)
    res.json(newProject);
  })

app.use('', router);
app.listen(port);
console.log('MockServer is running at port ' + port);



function buildProject(newProject){
  var index = _.lastIndexOf(Projects.data)

  Projects.push({
      "id": index + 1,
      "description": newProject.description,
      "name": newProject.name
    })
  return _.last(Projects)
}
