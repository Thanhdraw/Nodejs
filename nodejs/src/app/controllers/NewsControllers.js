class NewController {
    // [Get] / news
    index(req, res) {
        res.render('news');
    }

    //[GET]/details-news
    show(req, res) {
        res.send('New details!!!');
    }
}

module.exports = new NewController();
