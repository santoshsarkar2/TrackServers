const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
require('dotenv').config()

var jwt = require('jsonwebtoken');
var cors = require('cors')
app.use(cors())


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "*");
    
    
    next();
});

// parse application/json
app.use(bodyParser.json());
const axios = require('axios');
const { Environment } = require('ag-grid-community');
//create database connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'santosh',
    password: 'sarkar@1234',
    database: 'crepes',
    insecureAuth: true
});
/*
const conn = mysql.createConnection({
    host: '165.235.4.151',
    port: '3306',
    user: 'vverma',
    password: 'BlueSky*1234',
    database: 'crepes',
    queueLimit: 0,
    insecureAuth: true,
    connectionLimit: 0
    
});
*/
//connect to database
conn.connect((err) => {
    if (err) throw err;
    console.log('Mysql Connected...');
});


app.post('/api/user', (req, res) => {
    const {usr,pwd}=req.body

    let userId = req.body.id;
    let userName = req.body.email;
    let usrPassword = req.body.password;

    

    var sql = 'SELECT * FROM users where email = ? AND password = ?';

    let query = conn.query(sql, [userName, usrPassword], (err, results) => {
        if (err) throw err;
        /*
        const user = {name: userName};
        const token= jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
        if (userName==="test" && usrPassword==="test")
          res.json({token: token})
          else
            res.sendStatus(404)
        */
       const user = {name: userName};
       const token= jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
       if (results.length > 0){
          res.json({token: token})
       }else
       res.sendStatus(404)

        //res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

/* Get Data From Various table */
app.get('/servers', function (req, res) {

    var sql = 'SELECT ipaddress.ipaddress, dns_hosts.DNS, dns_hosts.Caption, os_info.Vendor, os_info.OsVersion, '
        + 'GROUP_CONCAT(ports.portname SEPARATOR "\n") as portname, GROUP_CONCAT(ports.port SEPARATOR "\n") as port, purpose.purpose, '
        + 'group_concat(container_type.name separator "\n") as container_type, group_concat(application.name separator "\n") as application, group_concat(server_role.name separator "\n") as server_role, group_concat(owner.owner separator "\n") as owner, group_concat(owner.email_id separator "\n") as email '

        + 'FROM hostfact '

        + 'LEFT JOIN ipaddress '
        + 'ON hostfact.ipaddress_id=ipaddress.id '
        + 'LEFT JOIN dns_hosts '
        + 'ON hostfact.dns_hosts_id=dns_hosts.id '
        + 'LEFT JOIN os_info '
        + 'ON hostfact.os_info_id=os_info.id '
        + 'LEFT JOIN ports_ipaddress '
        + 'ON hostfact.ipaddress_id=ports_ipaddress.ipaddress_id '
        + 'LEFT JOIN ports '
        + 'ON ports_ipaddress.ports_id=ports.id '
        + 'LEFT JOIN purpose '
        + 'ON dns_hosts.dns=purpose.dns '
        + 'LEFT JOIN containers '
        + 'ON hostfact.id=containers.hostfact_id '
        + 'LEFT JOIN container_type '
        + 'ON containers.container_type_id=container_type.id '
        + 'LEFT JOIN application '
        + 'ON containers.application_id=application.id '
        + 'LEFT JOIN server_role '
        + 'ON containers.server_role_id=server_role.id '
        + 'LEFT JOIN owner_application '
        + 'ON application.id=owner_application.application_id '
        + 'LEFT JOIN owner '
        + 'ON owner_application.owner_id=owner.id '

        + 'GROUP BY ipaddress '
        + 'ORDER BY ipaddress ASC ';

    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results)
    });

});






//Server listening
app.listen(3001, () => {
    console.log('Server started on port 3001...');
});