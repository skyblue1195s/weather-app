# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

This is a weather app using API openweathermap.org, you can search and view weather of over 200,000 cities

In this app:
- folder components: have all component can be reused (weather-card, forecase-card, search-city)
- constants: have constants variable
- lib: have all export function, can be call in multi component
- service: use to call api request


In this app, I used lib:
- SWR(React hook for data fetching), component will get a stream of data updates constantly and automatically (auto fetch new weather) await 10 minutes
- Use lodash (debounce) to set delay time call API when input change
- Use rxjs (BehaviorSubject) to store history city
- Use API https://api.openweathermap.org/data/2.5 to get city weather info
- API https://openweathermap.org/img/wn to display image weather icon




## Getting started

- Sign up over at [openweathermap.org](https://openweathermap.org/appid) to get an API key.
- Fork the project and clone it locally.
- Run `yarn` to install node_modules packages.
- Go to src/constants/constants.tsx and update new WEATHER_API_KEY:
```sh

OPEN_WEATHER_MAP_URL = 'https://api.openweathermap.org/data/2.5'
WEATHER_API_KEY = The API key you obtained from openweathermap.org
WEATHER_ICON_URL = 'https://openweathermap.org/img/wn'
```


## Available Scripts

In the project directory, you can run:


### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
