const Course = require('../Models/Course');


class SiteController {
    // [Get] / Home
    index(req, res) {


        Course.findOne({},function(err, courses){
            if(!err) {
                res.json(courses);
                return;
            }
            else {
                res.status(400).json({err:'ERROR!!!'});
            }
        });
        // res.render('home');
    }

    //[GET]/search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
