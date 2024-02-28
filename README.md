
A minimalistic weather forecast app made in React.

Access it here. You can search by typing any location to get daily forecast & location map

Live : https://breezy-arghya.vercel.app/


<!-- How I built a weather forecast app with location map in React & Leaflet!

Being a fledgling web developer, I wanted to grasp the concepts of React. Following tutorials is important, but than I thought why not make something you like . So I decided to make a weather forecast app in React (sigh another one). You've got to start somewhere, right.

The app
Called WeatherMan React hosted on Github Pages, link to github profile here.
It is made in plain React (uses Context, no fancy Redux needed). Styling is done using Bootstrap and SASS.
You can search any location from a huge list of over 100,000 places and fetch 7 day weather forecast. Additionally, I also added a location map shown in Leaflet where you can show layers made of temperature, cloudy etc.
Weather service used is OpenWeatherMap - It has a one call API which returns Hourly and Minutely forecast too.

Challenges faced
In the process of creating the site, there were hiccups.

After the closing of Dark Sky API, there was no free weather API that gave hourly forecasts (24 hour each day or so). So I went with MetaWeather at first. It is a good, free API service that aggregates weather data from multiple websites.
After looking at other common websites, I used Algolia Search API for the autocomplete location service. The locations in Algolia and MW were different so I had to map it appropriately when clicking on the search term by setting Address context.
But there were issues which I quickly encountered. There are many more locations in Algolia than there are in MetaWeather, which meant sometimes there were no equivalent places in MW giving weather results of neighbouring countries. The time zones were incorrect for some places. To remedy, I switched to OpenWeatherMap which had ample data in the One Call API. It was decent enough.
Lastly, I used Leaflet to render a map when location is selected. You can select layers like city forecast, rain, wind speed. I used a plugin named leaflet-openweathermap. It used JSONP to fetch requests which posed a problem when trying to make requests through the proxy, so had to refactor to use Fetch.



TODO
To be honest, there are many improvements due:

Refactor the code to separate presentation from the API specific parts
Optimize the leaflet plugin code to improve response time
Conclusion
It was a great experience to build something from the ground up. Taking the first step and pushing through to complete it is a satisfying feeling.
Please comment & hit me up if you have anything to talk about :)
You can check the project and leave any bugs/feature requests in here.




 -->

# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
