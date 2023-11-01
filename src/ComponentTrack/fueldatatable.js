import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FuelDataTable = () => {
  const [data, setData] = useState([]);
  const [history, setHistory] = useState([]);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [showCurrentTable, setShowCurrentTable] = useState(true); // New state variable

  const head = [
    "Organization Name", "Vehicle Name", "Vehicle Mode", "Vehicle Model","Currentday Fuel Cost","Consumed Fuel Cost", "Sensor", "Start Fuel", "End Fuel", "Fuel Filling", "Fuel Theft", "Fuel Consumption", "Start KMS", "End KMS", "Distance Travelled", "KMPL", "Running Hours", "Engine ON Hours", "Second Engine ON Hours","Engine Idle Hours", "Liters Per Hours", "Start Location", "End Location", "Driver Name", "Driver Mobile Number", "Remark"
  ];

  const historyHead = ["Id","Time","Latitude","Longitude"]

  

  useEffect(() => {
    // Fetch current data when the component mounts
    axios.get('http://107.23.187.126:3000/fuelData')
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ' + error);
      });
  }, []);

  const fetchDataFromHistory = () => {
    const fromDateStr = fromDate ? fromDate.toISOString() : '';
    const toDateStr = toDate ? toDate.toISOString() : '';
    console.log("date", fromDateStr);
    console.log(toDateStr);
  
    // Fetch historical data when the "Submit" button is clicked
    axios.get(`http://localhost:3000/direction/history?fromDate=${fromDateStr}&toDate=${toDateStr}`)
      .then((response) => {
        setHistory(response.data);
        setShowCurrentTable(false); // Hide the current table
      })
      .catch((error) => {
        console.error('Error fetching data from history table: ' + error);
      });
  };
  

  const renderTable = () => {
    if (showCurrentTable) {
      return (
        // JSX for the current data table
        <table className='border-2 border-black p-1'  >
        <thead>
        <tr>
                        {head.map((heading, index) => (
                            <th
                                key={index}
                                className="px-6 py-3 bg-sky-950 text-center text-white border text-xs font-semibold text-black-700 uppercase tracking-wider "
                            >
                                {heading}
                            </th>
                        ))}
                    </tr>
        </thead>
        <tbody >
          {data.map((item , rowIndex) => (
            <tr key={rowIndex} className={`${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-200'} text-center cursor-pointer`}>
                  <td className='border border-black  '>{item.organization_name}</td>
                  <td className='border border-black  '>{item.vehicle_name}</td>
                  <td className='border border-black  '>{item.vehicle_mode}</td>
                  <td className='border border-black  '>{item.vehicle_model}</td>
                  <td className='border border-black  '>{item.current_day_fuel_cost}</td>
                  <td className='border border-black  '>{item.consumed_fuel_cost}</td>
                  <td className='border border-black  '>{item.sensor}</td>
                  <td className='border border-black  '>{item.start_fuel}</td>
                  <td className='border border-black  '>{item.end_fuel}</td>
                  <td className='border border-black  '>{item.fuel_filling}</td>
                  <td className='border border-black  '>{item.fuel_theft}</td>
                  <td className='border border-black  '>{item.fuel_consumption}</td>
                  <td className='border border-black  '>{item.start_kms}</td>
                  <td className='border border-black  '>{item.end_kms}</td>
                  <td className='border border-black  '>{item.distance_travelled}</td>
                  <td className='border border-black  '>{item.kmpl}</td>
                  <td className='border border-black  '>{item.running_hours}</td>
                  <td className='border border-black  '>{item.engine_on_hours}</td>
                  <td className='border border-black  '>{item.secondary_engine_hours}</td>
                  <td className='border border-black  '>{item.engine_idle_hours}</td>
                  <td className='border border-black  '>{item.liters_per_hour}</td>
                  <td className='border border-black  '>{item.start_location}</td>
                  <td className='border border-black  '>{item.end_location}</td>
                  <td className='border border-black  '>{item.driver_name}</td>
                  <td className='border border-black  '>{item.driver_mobile_number}</td>
                  <td className='border border-black  '>{item.remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
      );
    } else {
      return (
        // JSX for the historical data table
        <table  className='border-2 border-black'>
        <thead>
        <tr>
                        {historyHead.map((heading, index) => (
                            <th
                                key={index}
                                className="px-6 py-3 bg-sky-950 text-center text-white text-xs border font-semibold text-black-700 uppercase tracking-wider "
                            >
                                {heading}
                            </th>
                        ))}
                    </tr>
        </thead>
        <tbody className='text-center'>
          {history.map((item , rowIndex) => (
            <tr key={rowIndex} className={`${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-200'}  cursor-pointer`}>
               <td className='border border-black  '>{item.Id}</td>
               <td className='border border-black  '>{item.change_time}</td>
               <td className='border border-black  '>{item.dir_latitude}</td>
               <td className='border border-black  '>{item.dir_longitude}</td>
               
            </tr>
          ))}
        </tbody>
      </table>
      );
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex mt-4 justify-end space-x-4">
        <div>
          <DatePicker
            selected={fromDate}
            onChange={(date) => setFromDate(date)}
            placeholderText="From"
            className="py-2 px-1 border border-black-300 rounded-lg cursor-pointer placeholder-red-500 placeholder-opacity-80"
          />
        </div>
        <div>
          <DatePicker
            selected={toDate}
            onChange={(date) => setToDate(date)}
            placeholderText=" To"
            className="py-2 px-1 border border-black-300 rounded-lg cursor-pointer placeholder-red-500 placeholder-opacity-80"
          />
        </div>
        <div>
          <button
            onClick={fetchDataFromHistory}
            className="bg-sky-900 hover:bg-sky-950 text-white font-bold py-2 px-4 mr-4 rounded"
          >
            Submit
          </button>
        </div>
      </div>

      <div className='overflow-auto  min-w-screen max-h-screen'>{renderTable()}</div>
    </div>
  );
};

export default FuelDataTable;
