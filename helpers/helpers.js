require('dotenv').config()
require('process')

/**
 * Retreive the dotenv value for the requested setting
 * 
 * @param envItem The setting name for which you are requesting
 * @param defaultValue The default value provided in case the setting is not found
 */
global.env = (envItem, defaultValue) => {
      if (typeof envItem === 'undefined') {
            return defaultValue;
      }

      // Check to see if the env item exists
      if(typeof process.env[envItem] == 'undefined') {
            return defaultValue;
      }

      return process.env[envItem];
}

global.startApp = () => {
      let environment = '', port = '', appName = env('APP_NAME')

      switch( env('ENV') ) {
            case 'undefined':
            case 'production':
            case 'Production':
            case 'Prod':
            case 'prod':
                  environment = 'Production'
                  port = 80
                  break
            case 'staging':
            case 'Staging':
                  environment = 'Staging'
                  port = 8080
                  break
            default:
                  environment = 'Development'
                  port = 3000
      }

      global.app.listen(port, () => console.log(appName + ' listening on port ' + port + '! App is currently set for ' + environment + ' environment.'))
}
