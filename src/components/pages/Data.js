import React, { useState, useEffect, Com } from "react";
import axios from "axios";
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Data = () => {
  
    const [servers, setServer] = useState([]);

    useEffect(() => {
        loadServers();
      }, []);

      const loadServers = async () => {
        const result = await axios.get("http://localhost:3001/servers");
        setServer(result.data.reverse());
      };  

      return (
        <div className="container">
          <div className="py-4">
            <h1>Available Server</h1>
            <table class="table border shadow">
              <thead class="thead-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">IP</th>
                  <th scope="col">Hostname </th>
                  <th scope="col">Caption</th>

                  <th scope="col">Vendor</th>
                  <th scope="col">OsVersion</th>
                  <th scope="col">Portname</th>
                  <th scope="col">Port</th>
                  <th scope="col">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {servers.map((server, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{server.ipaddress}</td>
                    <td>{server.DNS}</td>
                    <td>{server.Caption}</td>

                    <td>{server.Vendor}</td>
                    <td>{server.OsVersion}</td>
                    <td>{server.portname}</td>
                    <td>{server.port}</td>
                    <td>{server.purpose}</td>

                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );


  
  
};

export default Data;