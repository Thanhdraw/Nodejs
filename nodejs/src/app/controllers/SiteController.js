const Course = require('../Models/Course');
const {multipleMongooseToObject} = require('../../until/mongoose')


class SiteController {
    // [Get] / Home
    index(req, res, next) {

            Course.find({})
                .then(courses => {
                    // courses = courses.map(courses => courses.toObject());
                    res.render('home',{
                        courses: multipleMongooseToObject(courses)
                    });
                })
            // res.render('home');
            .catch(error=>next(error));

    }
    

    //[GET]/search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
