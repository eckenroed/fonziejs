/**
 * default.js
 * 
 * This app will load all files in the routes directory automatically. You can organize your routes
 * however you like. 
 * 
 * NOTE: Because routes is a sub directory, make sure you are calling your views directory as
 *  res.render(__direname + '/../views/[yourviewname])
 */

 /**
  * Home Page
  */
app.get('/', (req, res) => {
      res.render(__dirname + '/../views/welcome', {title: env('APP_NAME')})
})