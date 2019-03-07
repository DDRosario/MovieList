const router = require('express').Router();
const controller = require('./controller.js');

router.route('/login');

router
  .route('/movies')
  .get((req, res) => {
    controller.fetchAll(req, res);
  })
  .post((req, res) => {
    controller.addMovie(req, res);
  })
  .delete((req, res) => {
    console.log('hello inside other route');
  });

router
  .route('/movies/:id')
  .delete((req, res) => {
    controller.delete(req, res);
  })
  .patch((req, res) => {
    controller.updateRating(req, res);
  });

router.route('/search').get((req, res) => {
  controller.search(req, res);
});
router.route('/dev').get(controller.dev);
module.exports = router;
