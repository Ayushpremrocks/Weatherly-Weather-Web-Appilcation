# 🌦️ Weatherly - Real-Time Weather Forecast Web Application

![Screenshot of the model](assets/images/logo.jpg)


Use **Weatherly** now!!: [Weatherly](https://weatherly-weather-web-appilcation.vercel.app/)

## 📝 Overview
Weatherly is a responsive web application that provides comprehensive weather information for locations worldwide. Built with pure HTML, CSS, and JavaScript, it offers real-time weather data powered by OpenWeatherMap API.

## ✨ Features
- 🌡️ Current temperature and weather conditions
- 🕒 Hourly forecast for the day
- 📅 5-day weather forecast
- 💨 Wind speed and direction
- 🌬️ Air quality index
- 🌅 Sunrise and sunset times
- 📍 Location search functionality
- 📱 Responsive mobile-friendly design
- 🌍 Current location weather detection

## 🖼️ Screenshots

![Screenshot of the model](/assets/images/Screenshot%201.png)

![Screenshot of the model](/assets/images/Screenshot%202.png)

## 🛠️ Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- OpenWeatherMap API
- Font Awesome for icons
- Google Fonts (Nunito Sans)

## 🚀 Getting Started

### Prerequisites
- Web browser (Chrome, Firefox, Safari, etc.)
- OpenWeatherMap API key

### Installation
1. Clone the repository
```bash
git clone https://github.com/ayushpremrocks/weatherly.git
```

2. Obtain an OpenWeather API Key
- Visit [OpenWeatherMap](https://openweathermap.org/)
- Sign up for a free account
- Generate an API key

3. Create `apiKey.js` in your project directory
```javascript
export const apiKey = "YOUR_ACTUAL_API_KEY";
```

4. Open `index.html` in your browser

## 🔒 API Key Protection
- Never commit your actual API key to version control
- Use `.gitignore` to exclude `apiKey.js`
- Regenerate API keys periodically

## 📂 Project Structure
```
weatherly/
│
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── images/
│   │   ├── logo.jpg
│   │   └── openweather.png
│   └── js/
│       ├── app.js
│       ├── route.js
│       └── module.js
|       |__ api.js
│
├── index.html
└── apiKey.js (not tracked in git)
```

## 🌟 Key Components
- Search functionality for finding weather by city
- Current location weather detection
- Detailed weather highlights
- Hourly and 5-day forecasts

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License
Distributed under the MIT License.

## 📞 Contact
Ayush Prem - [GitHub Profile](https://github.com/ayushpremrocks)

## 🙏 Acknowledgments
- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- Font Awesome for icons
- Google Fonts for typography