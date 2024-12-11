import React, { useState } from "react";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [kelvin, setKelvin] = useState("");

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit(value !== "" ? (parseFloat(value) * 9) / 5 + 32 : "");
    setKelvin(value !== "" ? parseFloat(value) + 273.15 : "");
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius(value !== "" ? ((parseFloat(value) - 32) * 5) / 9 : "");
    setKelvin(value !== "" ? ((parseFloat(value) - 273.15) * 9) / 5 + 32 : "");
  };

  const handleKelvinChange = (e) => {
    const { value } = e.target.value;

    setKelvin(value);
    setCelsius(value !== "" ? parseFloat(value) - 273.15 : "");
    setFahrenheit(value !== "" ? 1.8 * (parseFloat(value) - 273) + 32 : "");
  };

  const resetFields = () => {
    setCelsius("");
    setFahrenheit("");
    setKelvin("");
  };
  return (
    <div className="container mt-custom">
      <h2 className="text-center text-primary fw-bold ">
        Temperature Converter
      </h2>
      <div className="row mt-5 justify-content-center">
        <div className="col-md-5 card shadow-lg border-0 rounded ">
          <div className="card-body p-4">
            <div className="mb-3">
              <label htmlFor="celsius" className="form-label fw-bold">
                Celsius (°C)
              </label>
              <input
                type="number"
                id="celsius"
                className="form-control border-primary"
                value={celsius}
                onChange={handleCelsiusChange}
                placeholder="Enter Celsius"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="fahrenheit" className="form-label fw-bold">
                Fahrenheit (°F)
              </label>
              <input
                type="number"
                id="fahrenheit"
                className="form-control border-primary"
                value={fahrenheit}
                onChange={handleFahrenheitChange}
                placeholder="Enter Fahrenheit"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="fahrenheit" className="form-label fw-bold">
                Kelvin (°K)
              </label>
              <input
                type="number"
                id="kelvin"
                className="form-control border-primary"
                value={kelvin}
                onChange={handleKelvinChange}
                placeholder="Enter Kelvin"
              />
            </div>
            <button
              className="btn btn-danger w-100 shadow"
              onClick={resetFields}
            >
              <i className="bi bi-x-circle me-2"></i>Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemperatureConverter;
