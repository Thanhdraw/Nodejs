function route(app){
    app.get('/search', (req, res) => {
        res.render('search');
      });
      app.post('/search', (req, res) => {
        console.log(req.body);
        res.send('Okie');
      });
      app.get('/', (req, res) => {
        res.render('home');
      });
      
}

module.exports = route;