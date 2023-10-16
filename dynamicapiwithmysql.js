const express = require("express");
const con = require("./config")
const app = express();
const port = 3000;

app.use(express.json());
app.get("/", (req, res) => {
    con.query("select * from exceldata", (error, result) => {
        if (error) {
            res.send("error in connection")
        }
        else {
            //console.log(result);
            res.send(result)
        }
    })
});


app.post("/", (req, res) => {
    //const data={FirstName: 'Talha',LastName: 'Mahmood',Gender: 'male',Country: 'Pakistan',Age: 25};
    const data=req.body;
    con.query("INSERT INTO exceldata SET ?",data, (error, result,fields) => {
        if(error) error;
        res.send(result);
    })
});

app.put("/:id", (req, res) => {
    const data=[req.body.FirstName,req.body.LastName,req.params.id];
    con.query("UPDATE exceldata SET FirstName = ?, LastName= ? WHERE Id= ?", data, (error,result,fields)=>{
        if(error) error;
        res.send(result);
    })
});


app.delete("/:id", (req, res) => {
    con.query("DELETE FROM exceldata WHERE Id= ?" , req.params.id,(error,result)=>{
        if(error) error;
        res.send(result);
    })
});



app.listen(port);
