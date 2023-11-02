import React from "react";

const DataDisplay = ({ data }) => {
  if (data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div>
      
      <table className="table">
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              {Object.values(item).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataDisplay;
