import { useState, useEffect } from "react";
import axios from "axios";

const Display = () => {
  const [data, setData] = useState([]);

  const loadData = () => {
    const api = "http://localhost:8000/relation/display";
    axios
      .get(api)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error loading data:", error);
      });
  };

  useEffect(() => {
    loadData();

    return () => {};
  }, []);

  return (
    <>
      <div id="myTable">
        <h1 style={{ color: "green" }}>Display Expense Records</h1>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>username</th>
              <th>email</th>
              <th>firstname</th>
              <th>lastname</th>
            </tr>
          </thead>
          <tbody>
            {data.map((record, index) => {
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{record.username}</td>
                <td>{record.email}</td>
                <td>{record.firstname}</td>
                <td>{record.lastname}</td>
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Display;
