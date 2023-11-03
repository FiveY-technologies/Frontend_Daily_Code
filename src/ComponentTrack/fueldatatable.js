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
  const cellClassName = 'border border-black h-16 text-xs overflow-hidden'

  const head = ["Id","Date","Time",
    "Organization Name", "Vehicle Name", "Vehicle Mode", "Vehicle Model","Currentday Fuel Cost","Consumed Fuel Cost", "Sensor", "Start Fuel", "End Fuel", "Fuel Filling", "Fuel Theft", "Fuel Consumption", "Start KMS", "End KMS", "Distance Travelled", "KMPL", "Running Hours", "Engine ON Hours", "Second Engine ON Hours","Engine Idle Hours", "Liters Per Hours", "Start Location", "End Location", "Driver Name", "Driver Mobile Number", "Remark"
  ];

 

  
  const fetchData = () => {
    axios.get('http://107.23.187.126:3000/alldatas')
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ' + error);
      });
  };
  useEffect(() => {
    // Fetch the initial data when the component mounts
    fetchData();
  }, []);

  const fetchDataFromHistory = () => {
    const fromDateStr = fromDate ? fromDate.toISOString() : '';
    const toDateStr = toDate ? toDate.toISOString() : '';
    console.log("date", fromDateStr);
    console.log(toDateStr);
  
    // Fetch historical data when the "Submit" button is clicked
    axios.get(`http://107.23.187.126:3000/alldatas/history?fromDate=${fromDateStr}&toDate=${toDateStr}`)
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
                                className="px-6 py-3 bg-sky-950 text-center h-16 text-white border text-xs font-semibold text-black-700 uppercase tracking-wider "
                            >
                                {heading}
                            </th>
                        ))}
                    </tr>
        </thead>
        <tbody >
          {data.map((item , rowIndex) => (
            <tr key={rowIndex} className={`${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-200'} text-center cursor-pointer`}>
                   <td className={`${cellClassName}`}>{item.id}</td>
                   <td className={`${cellClassName}`}>{item.time.substring(0, 10)}</td>
                   <td className={`${cellClassName}`}>{item.time.substring(11, 19)}</td>
                  <td className={`${cellClassName}`}>{item.orgId}</td>
                  <td className={`${cellClassName}`}>{item.shortName}</td>
                  <td className={`${cellClassName}`}>{item.vehicleMode}</td>
                  <td className={`${cellClassName}`}>{item.vehicleModel}</td>
                  <td className={`${cellClassName}`}>100</td>
                  <td className={`${cellClassName}`}>100</td>
                  <td className={`${cellClassName}`}>{item.sensor}</td>
                  <td className={`${cellClassName}`}>{item.fuelLitre}</td>
                  <td className={`${cellClassName}`}>{item.end_fuel}</td>
                  <td className={`${cellClassName}`}>{item.fuel_filling}</td>
                  <td className={`${cellClassName}`}>{item.fuel_theft}</td>
                  <td className={`${cellClassName}`}>{item.fuel_consumption}</td>
                  <td className={`${cellClassName}`}>{item.odoDistance}</td>
                  <td className={`${cellClassName}`}>{item.end_kms}</td>
                  <td className={`${cellClassName}`}>{item.distance_travelled}</td>
                  <td className={`${cellClassName}`}>{item.kmpl}</td>
                  <td className={`${cellClassName}`}>{item.todayWorkingHours}</td>
                  <td className={`${cellClassName}`}>{item.todayWorkingHours}</td>
                  <td className={`${cellClassName}`}>{item.secondaryEngineHours}</td>
                  <td className={`${cellClassName}`}>{item.idleTime}</td>
                  <td className={`${cellClassName}`}>{item.liters_per_hour}</td>
                  <td className={`${cellClassName}`}>{item.address}</td>
                  <td className={`${cellClassName}`}>{item.end_location}</td>
                  <td className={`${cellClassName}`}>{item.driverName}</td>
                  <td className={`${cellClassName}`}>{item.driverMobile}</td>
                  <td className={`${cellClassName}`}>{item.remarks}</td>
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
                        {head.map((heading, index) => (
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
               <td className={`${cellClassName}`}>{item.id}</td>
               <td className={`${cellClassName}`}>{item.time.substring(0, 10)}</td>
               <td className={`${cellClassName}`}>{item.time.substring(11, 19)}</td>
                  <td className={`${cellClassName}`}>{item.orgId}</td>
                  <td className={`${cellClassName}`}>{item.shortName}</td>
                  <td className={`${cellClassName}`}>{item.vehicleMode}</td>
                  <td className={`${cellClassName}`}>{item.vehicleModel}</td>
                  <td className={`${cellClassName}`}>100</td>
                  <td className={`${cellClassName}`}>100</td>
                  <td className={`${cellClassName}`}>{item.sensor}</td>
                  <td className={`${cellClassName}`}>{item.fuelLitre}</td>
                  <td className={`${cellClassName}`}>{item.end_fuel}</td>
                  <td className={`${cellClassName}`}>{item.fuel_filling}</td>
                  <td className={`${cellClassName}`}>{item.fuel_theft}</td>
                  <td className={`${cellClassName}`}>{item.fuel_consumption}</td>
                  <td className={`${cellClassName}`}>{item.odoDistance}</td>
                  <td className={`${cellClassName}`}>{item.end_kms}</td>
                  <td className={`${cellClassName}`}>{item.distance_travelled}</td>
                  <td className={`${cellClassName}`}>{item.kmpl}</td>
                  <td className={`${cellClassName}`}>{item.todayWorkingHours}</td>
                  <td className={`${cellClassName}`}>{item.todayWorkingHours}</td>
                  <td className={`${cellClassName}`}>{item.secondaryEngineHours}</td>
                  <td className={`${cellClassName}`}>{item.idleTime}</td>
                  <td className={`${cellClassName}`}>{item.liters_per_hour}</td>
                  <td className={`${cellClassName}`}>{item.address}</td>
                  <td className={`${cellClassName}`}>{item.end_location}</td>
                  <td className={`${cellClassName}`}>{item.driverName}</td>
                  <td className={`${cellClassName}`}>{item.driverMobile}</td>
                  <td className={`${cellClassName}`}>{item.remarks}</td>
               
            </tr>
          ))}
        </tbody>
      </table>
      );
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex  justify-end space-x-4">
      <div>
          <button
            onClick={fetchData}
            className="bg-sky-900 hover:bg-sky-950 text-white font-bold py-2 px-4 rounded"
          >
            Refresh
          </button>
        </div>
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
