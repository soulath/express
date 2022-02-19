
const { query } = require('express');
const res = require('express/lib/response');
const db = require('../db');
const Company = require('../model/company');
const { saveImage } = require('./uploadimageController');

//API Create 
exports.Create = async(req, res) => {
    try{
        photo = await saveImage(req.body.photo)
        let company = new Company(req.body.name, req.body.address, photo);

        let query = 'insert into company(name, address, photo) values(?, ?, ?)';

        console.log(company)

        db.query(query, [company.name, company.address, company.photo], (err, result) => {
            return res.status(200).json({
                message: "Create Company Successsful"
            });
        });
    }
    catch (error) {
        return res.status(500).json({
            status: "internal error",
            message: error.message
        })
    }
};
//Display All 
exports.Getall = (req, res) => {
    try{
        let query = "SELECT * FROM company";

        db.query(query, (err, result) => {
            return res.status(200).json({
                result: result,
            });
        });
    }
    catch (error){
        return res.status(500).json({
            status: "internal error",
            message: error.message
        })
    }
};

exports.Update = async (req, res) => {
    try {
      const q = `UPDATE company SET name = '${req.body.name}', 
        address = '${req.body.address}' WHERE id = ${req.params.id}`;
  
      db.query(q, (err, result) => {
        return res.status(200).json({
          message: "Company updated successfully",
        });
      });
  
    } catch (error) {
      return res.status(500).json({
        status: "INTERNAL_SERVER_ERROR",
        message: error.message,
      });
    }
  };

  exports.Delete = (req, res) => {
    try {
      const q = `DELETE FROM company WHERE id = ${req.params.id}`
      db.query(q, (err, result)=>{
        return res.status(200).json({
          message: "Company deleted successfully."
        })
      })
    } catch (err) {
  
      return res.status(500).json({
        status:"INTERNAL ERROR",
        message: err.message
      })
      
    }
  }