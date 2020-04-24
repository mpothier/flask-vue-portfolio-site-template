# Flask + Vue Portfolio Site

A template for creating a simple application geared toward hosting a personal portfolio and associated content. This setup includes instructions for deploying to **Heroku** for usage with a free dyno tier account.

The application uses **Vue.js** in the front end to create a single-page application, including Vue Router and Vuex Store. **Flask** is used on the back end server to serve the static entry point `index.html` file, while providing an API blueprint for additional endpoints as needed. In this template, one endpoint is already set up to retrieve and return local JSON data formatted for templated "content" pages via Vue; however feel free to point your API to any external or third-party resource to retrieve content.

Includes custom SCSS styling based on **Bootstrap** to enable responsive/mobile-friendly layout, plus **Font Awesome** icons. Placeholder images via https://unsplash.com/.

See my personal portfolio (http://www.markpothier.net) for a working demo.

## Folder Structure

Entry points for `yarn`/`npm` and `pipenv` need to be placed at the root folder for compatibility with Heroku's Node and Python buildpacks. The Flask server is separated out into a designated folder. Highlights include:
```
├── public                      # static content, including SPA entry point (index)
│   ├── work_content            # templated content for portfolio pages
│   │   ├── img
|   |   ├── project.json
│   ├── index.html
├── src                         # main Vue front end source
├── server                      # server entry point
│   ├── app                     # Flask app
│   │   ├── api.py              # add custom endpoints; update URL for CORS
│   ├── run.py                  # called by gunicorn to run app
├── Pipfile.lock                # lists dependencies for Python virtual environment
├── yarn.lock                   # lists Node dependencies
├── Procfile                    # Declare process for Heroku dyno
```

## **Vue Client (front end) setup**
Navigate to root directory, then install Node dependencies:
```
yarn install
```

Compile and hot-reload for development (http://localhost:8080):
```
yarn serve
```

Compile and minify for production:
```
yarn build
```

For connection to the backend server, create a `.env.local` file inside the root folder. This will be used for locally testing the built files from the Flask server, and in this case is needed to serve the `work_content` data to the front end:
```
VUE_APP_API_URL="http://localhost:5000/api"
```

Also be sure to update the value in the `.env.production` file to your hosted domain's API root, as this be used on the hosted production environment:
```
VUE_APP_API_URL="http://www.yourdomain.tld/api"
```

## **Flask Server (back end) setup**
From root directory, install dependencies (recommend using pipenv)
```
pipenv install --dev
```

For development purposes, create a `.env` file inside the `server/app/` folder. This will allow you to override the config file fallbacks and run the development server in debug mode.
```
# Production Enviroment should be set to 'production'
FLASK_ENV = "development"
FLASK_SECRET = "YourGeneratedSecretKey"
FLASK_APP = "app"
# Uncomment this to debug:
FLASK_DEBUG=1
```

Run development server (http://locahost:5000):
```
pipenv run python server/run.py
```
Note that the development server will also serve the Vue app at its `"/"` route, if you want to test the static files built into the `dist` folder.

------------------------

## **Deploy to Heroku**
Make sure to install Heroku CLI, and run `heroku login` once.
You also need to have `Git` installed on your machine.

If creating a new app/deploying for the first time:
```
heroku apps:create your-app-name
heroku git:remote --app your-app-name
heroku buildpacks:add --index 1 heroku/nodejs
heroku buildpacks:add --index 2 heroku/python
heroku config:set FLASK_SECRET=YourGeneratedSecretKey
```

To push files to Heroku (make sure to commit any changes first to git):
```
git push heroku master
```

*Be sure to update any references to the production URL (i.e. `http://www.your-custom-domain.tld`) inside any files, to either the Heroku-supplied default domain, or a custom domain that you point to it.*

------------------------

## **Set Resume/Profile Data (WIP)**
Initially I had planned to retrieve data from LinkedIn to populate a Vue/CSS-formatted resume page.

However, recent changes to the LinkedIn API make is no longer possible to fetch full profile data. An [alternative used here](https://jmperezperez.com/linkedin-to-json-resume/) is to [download](https://www.linkedin.com/psettings/member-data) a snapshop archive of your profile from LinkedIn and pass it into this converter to format it in the [JSON Resume](https://jsonresume.org/) schema.

Place the resulting formatted JSON file into the `server/data` folder, where it will be an accessible resource used in server API calls.

Another alternative used here it to simply serve a PDF resume to an `iframe` object.

## **References**
Template constructed based upon the following:
- https://github.com/gtalarico/flask-vuejs-template
- https://github.com/PrettyPrinted/flask-movie-api