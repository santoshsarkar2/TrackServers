import React, { useState, useEffect } from "react";
import axios from "axios";
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


const Home = () => {
  
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
    
            <div className="ag-theme-alpine" style={ { height: 600, } }>
                <AgGridReact pagination={true} paginationPageSize={10}
                    rowData={servers}>
                    <AgGridColumn sortable={true} filter={true} field="ipaddress"></AgGridColumn>
                    <AgGridColumn sortable={true} filter={true}  field="DNS"></AgGridColumn>
                    <AgGridColumn sortable={true} filter={true}  field="Caption"></AgGridColumn>
                    <AgGridColumn sortable={true} filter={true}  field="Vendor"></AgGridColumn>
                    <AgGridColumn sortable={true} filter={true}  field="OsVersion"></AgGridColumn>
                    <AgGridColumn sortable={true} filter={true}  field="portname"></AgGridColumn>
                    <AgGridColumn sortable={true} filter={true}  field="port"></AgGridColumn>
                    <AgGridColumn sortable={true} filter={true}  field="purpose"></AgGridColumn>
                </AgGridReact>
            </div>
            
    
    
            
    
          </div>
        </div>
      );

    
      
    };
    
    export default Home;