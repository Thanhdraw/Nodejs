const Course = require('../Models/Course');
const {mongooseToObject} = require('../../until/mongoose')


class CourseController {
    // [Get] / Home

    //[GET]/course/:slug
    show(req, res,next) {

        Course.findOne({details: req.params.slug})
            .then(course=>
               res.render('courses/show',{course: mongooseToObject(course)})
            )
            .catch(next);


        // res.send('COURSES DETAILS  -'+req.params.details);
    }
}

module.exports = new CourseController();
