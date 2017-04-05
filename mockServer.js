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
    var newProject = buildProject(req.body)
    res.json(newProject);
  })

var Jobs = [];

router.route('/api/v1/projects/:projectId/jobs/:offerId')
  .get(function(req, res) {
    var offerId = parseInt(req.params.offerId);
    res.json(_.find(Jobs, function(job){ return job.id === offerId }));
  })

router.route('/api/v1/projects/:projectId/jobs')
  .get(function(req, res) {
    res.json(Jobs);
  })
  .post(function(req, res){
    var newJob = buildJob(req.body)
    res.json(newJob);
  })


app.use('', router);
app.listen(port);
console.log('MockServer is running at port ' + port);

function buildProject(newProject){
  var index = _.lastIndexOf(Projects)

  Projects.push({
      "id": index + 1,
      "description": newProject.description,
      "name": newProject.name
    })
  return _.last(Projects)
}

function buildJob(newJob){
  var index = _.lastIndexOf(Jobs)

  Jobs.push({
      "id": index + 1,
      "description": newJob.description,
      "name": newJob.name,
      "nationality": newJob.nationality,
      "gender": newJob.gender,
      "positions": newJob.positions,
      "factor": newJob.factor,
      "candidates": newJob.candidates
  })
  return _.last(Jobs)
}
