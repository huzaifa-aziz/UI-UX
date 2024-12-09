import React from "react";

export default function PickupForm() {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-between gap-4">
      {/* Pickup Container */}
      <div className="w-full sm:w-[48%] bg-white shadow-lg rounded-md p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-6">Pickup</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Location Dropdown */}
          <div className="flex flex-col">
            <label
              htmlFor="pickup-location"
              className="text-sm font-medium text-gray-700"
            >
              Location
            </label>
            <select
              id="pickup-location"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Location</option>
              <option value="location-1">Location 1</option>
              <option value="location-2">Location 2</option>
              <option value="location-3">Location 3</option>
            </select>
          </div>
          {/* Date Dropdown */}
          <div className="flex flex-col">
            <label
              htmlFor="pickup-date"
              className="text-sm font-medium text-gray-700"
            >
              Date
            </label>
            <select
              id="pickup-date"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Date</option>
              <option value="1">1st</option>
              <option value="2">2nd</option>
              <option value="3">3rd</option>
            </select>
          </div>
          {/* Time Dropdown */}
          <div className="flex flex-col">
            <label
              htmlFor="pickup-time"
              className="text-sm font-medium text-gray-700"
            >
              Time
            </label>
            <select
              id="pickup-time"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Time</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>
          </div>
        </div>
      </div>

      {/* Drop-off Container */}
      <div className="w-full sm:w-[48%] bg-white shadow-lg rounded-md p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-6">Drop-off</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Location Dropdown */}
          <div className="flex flex-col">
            <label
              htmlFor="dropoff-location"
              className="text-sm font-medium text-gray-700"
            >
              Location
            </label>
            <select
              id="dropoff-location"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Location</option>
              <option value="location-1">Location 1</option>
              <option value="location-2">Location 2</option>
              <option value="location-3">Location 3</option>
            </select>
          </div>
          {/* Date Dropdown */}
          <div className="flex flex-col">
            <label
              htmlFor="dropoff-date"
              className="text-sm font-medium text-gray-700"
            >
              Date
            </label>
            <select
              id="dropoff-date"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Date</option>
              <option value="1">1st</option>
              <option value="2">2nd</option>
              <option value="3">3rd</option>
            </select>
          </div>
          {/* Time Dropdown */}
          <div className="flex flex-col">
            <label
              htmlFor="dropoff-time"
              className="text-sm font-medium text-gray-700"
            >
              Time
            </label>
            <select
              id="dropoff-time"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Time</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
