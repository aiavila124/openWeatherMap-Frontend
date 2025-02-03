export const environment = {
    apiBaseUrl: "http://localhost:3000/dev",
    // apiBaseUrl: "https://gcj58z82p7.execute-api.us-east-1.amazonaws.com/dev",
    endpoints: {
        login: "/get-token",
        users: "/users",
        getUserData: "/get-user-data",
        cities: "/resources/cities",
        states: "/resources/states",
        countries: "/resources/countries",
        weatherForecast: "/forecast-weather-by-city",
        icons: "/resources/icons"

    }

}
