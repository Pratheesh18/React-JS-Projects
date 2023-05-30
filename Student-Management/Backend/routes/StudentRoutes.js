const Router = require('koa-router');

const studentController = require('../controllers/StudentController');


const router = new Router({prefix : '/students'});

router.get('/' , studentController.getAllStudents);
router.get('/:id' , studentController.getStudentById);
router.post('/' , studentController.createStudent);
router.put('/:id' , studentController.updateStudent);
router.del('/:id' , studentController.deleteStudent);

module.exports = router;