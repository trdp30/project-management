const ENV = {
  API_ROOT: process.env.REACT_APP_API_ROOT ? process.env.REACT_APP_API_ROOT : "https://localhost:8080",
  isDevelopment: process.env.REACT_APP_ENV === "development",
  ...process.env //can remove if not required
};

export default ENV;
