export interface WeatherForecast {
    timezone: string
    current: Current
    daily: Daily[]
  }
  
  export interface Current {
    dt: string
    sunrise: string
    sunset: string
    temp: number
    feels_like: number
    pressure: number
    humidity: number
    dew_point: number
    uvi: number
    clouds: number
    visibility: number
    wind_speed: number
    wind_deg: number
    weather: Weather[]
  }
  
  export interface Weather {
    id: number
    main: string
    description: string
    icon: string
  }
  
export interface Daily {
    dt: string
    sunrise: string
    sunset: string
    moonrise: string
    moonset: string
    moon_phase: number
    summary: string
    temp: Temp
    feels_like: FeelsLike
    pressure: number
    humidity: number
    dew_point: number
    wind_speed: number
    wind_deg: number
    wind_gust: number
    weather: Weather2[]
    clouds: number
    pop: number
    rain: number
    uvi: number
}
  
export interface Temp {
    day: number
    min: number
    max: number
    night: number
    eve: number
    morn: number
}
  
export interface FeelsLike {
    day: number
    night: number
    eve: number
    morn: number
}
  
export interface Weather2 {
    id: number
    main: string
    description: string
    icon: string
}
