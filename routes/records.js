var express = require('express');
var router = express.Router();
var checkParameter = require('../validations/records')
var Records = require('../model/records')

/* Fetch records depending on parameters */
router.post('/', function (req, res, next) {    
  const { startDate, endDate, minCount, maxCount } = req.body;
  const { errors, isValid } = checkParameter(req.body);

  // Check parameters is correct format
  if (!isValid)
    return res.status(400).json(errors);

  Records.aggregate([
    // add 'totalCount' field for sum of array value
    {
      $addFields: {
        totalCount: { $sum: "$counts" }
      }
    },
    // filter 'totalCount' and 'createdAt' fields
    {
      $match: {
        totalCount: {
          $gte: parseInt(minCount),
          $lte: parseInt(maxCount)
        },
        createdAt: {
          $gte: new Date(startDate),
          $lte: new Date(endDate)
        }
      }
    },
    // set response field
    {
      $project: {
        _id: 0,
        key: 1,
        createdAt: 1,
        totalCount: 1
      }
    }
  ]).exec((err, data) => {    
    if (err) {
      res.status(400).send({
        code: 400,
        msg: 'An error occured',
        records: []
      })
    }
    res.status(200).send({
      code: 0,
      msg: 'Success',
      records: data
    })
  })

});

module.exports = router;