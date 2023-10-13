const mysql=require("mysql");

const con=mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"12345",
    database:"exceldata"
});

con.connect((err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Successful");
    }
});

con.query("select * from exceldata",(err,result)=>{
    console.log("result",result);
});