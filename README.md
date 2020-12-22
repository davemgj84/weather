# Weather App - Technical Assessment

## Notes

This is a frontend repository for a Weather App. It has been created with React, Scss, and Axios. This app is connected to a backend express API that provides real-time weather data to the user. Instructions on how to run the application locally are found further down in this README.

## Date

I am submitting this techical assessment on December 22nd, 2020.

## Location of deployed application

The frontend application is deployed on Netlify and can be visited here:

- https://think-weather.netlify.app/

The backend application is deployed on Heroku and can be visited here (The city/location, can be changed manually in the URL to provide different JSON weather data):

- https://think-weather.herokuapp.com/api/weather/vancouver

## Time spent

Time spent in producing this application was about 8 hours.

## Assumptions made

When I first started creating this application, I setup my node/express server, thinking I would create a local database of fake weather data. After giving it some thought, I decided that I was going to do some of the stretch goals anyway, so to conserve time, I decided to go directly to the openweather API for my weather data. The stretch suggested I proxy a real weather API, which I did in a way. I more accurately created an API that acts as a "Man in the Middle". The application was more straightforward for me in this regard. My API handles queries and passes the query along to the Openweather API. It provides a variety of data, in which I cherry picked what I needed or felt was important to my application. I used Postman to make my requests and test to make sure I was getting the data I required. Once I had the backend setup, I then moved on to creating a simple UI with React in the frontend.

I had to make a couple of compromises when developing this application. I Likely could of created a better way of proxying the Openweather API, via my own API. I did feel this was the simplest way for me to do it for the purposes of this assessment, but in a real-world application, this would not be ideal.

I would like to spend more time in the frontend, creating a more responsive design. While it is still a work in process, I am pretty happy with how the UI has come together. I do not have a lot of experience dealing with the mobile keyboard, so it unfortunately pushed my styling around when focusing on the input via mobile (the keyboard pushes the styling up from the bottom). I would like to address this as well.

Overall, this assessment was great fun! I learned a lot as always, and feel better off than when I began this project. I hope it meets your criteria, and I hope you enjoy it as much as I did.

## Stretch goals attempted

- Built a simple UI
- Deployed my application via Heroku and Netlify
- Proxied a real weather api to get actual weather data

As I mentioned above, I was able to tackle some of the stretch, but I did not get to authentication. The reason behind this, was more that I wanted to get the assignment into you sooner than later. If I made authentication, I would of likely spent a lot of time on the login page, and used react-router-dom to navigate between the two, and cookie sessions to check for cookies - I do not believe I would of made a database to keep track of user data, just a simple login button to give you a cookie, and take you to the main content would of been my approach. I felt that the focus of this app was the API, the requests for data, and the UI to see it all. I skipped the authentication for these reasons.

I feel the Stretch goals went well. I love the way the UI turned out, for the amount of time I spent on it, it is a great start. Things can always be improved, but I like the look and feel. I tried to match the logo of THINKIFIC as well as fonts used on their website, and even snagged their favicon for this app. I feel I have a good attention to detail, and like to stay consistent with the company. I do believe that I could always use more experience, and feel like challenging myself with stretch goals always to be beneficial. Like I mentioned in the "Assumptions made" section above, I would like to learn how to proxy the API via my service more efficiently.

## Instructions to run assignment locally

FRONT-END

- Clone this repository. Cd into the project folder, and run `npm install`.
- Once dependencies have been installed, you can run npm start to run the Frontend application locally on Port 3000.

- Dependencies include:

  - React - ^17.0.1
  - Node-Sass - ^4.14.1
  - Axios - ^0.21.1

This repository has been deployed on NETLIFY here:

- https://think-weather.netlify.app/

BACK-END

Navigate to the Backend repository, "weather-api", here:

- https://github.com/davemgj84/weather-api

- Clone this repository. Cd into the project folder, and run `npm install` to install the dependencies.

- Once dependencies have been installed, you can enter the command `npm run go` to run the Backend express server locally on Port 8080.

- It should also be noted that this application requires an API key from: https://openweathermap.org/api - You will need to use the "Current Weather Data API Key for this application to work.

- There is a .env.example file that contains the format for the environment variables needed to run this application. The only variable left blank, it the API_KEY. Please input your personal key if you wish to test this application via cURL or postman.

- NOTE - the deployed applications (both frontend and back, do not require an API key to run. Just visit the sites and they work as intended).

- Dependencies include:

  - Axios - ^0.21.1
  - Body-Parser - ^1.18.3
  - Cors - ^2.8.5
  - Dotenv - ^8.2.0
  - Express - ^4.16.4
  - Nodemon- ^1.18.7

This repository has been deployed on HEROKU here:

- https://think-weather.herokuapp.com/api/weather/vancouver

## Your feedback on this technical challenge

I really enjoyed this technical challenge. I found I learned a lot about as I developed this application, and feel like it is a well rounded challenge, that allows people to create and develop freely. It has a decent amount of stretch that I feel allows people to further showcase their skills.

Thank you for your time and consideration in this matter. I really look forward to hearing from you and participating in the next part of the hiring process.
