export interface IUser {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  dob: {
    age: number;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

export interface IUserWeather {
  latitude: number;
  longitude: number;
  elevation: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  hourly: {
    time: string[];
    temperature_2m: number[];
  };
  hourly_units: {
    temperature_2m: string;
  };
  current_weather: {
    time: string;
    temperature: number;
    weathercode: number;
    windspeed: number;
    winddirection: number;
  };
}
