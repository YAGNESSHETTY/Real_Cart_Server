const express = require('express');
const Items = require('../models/Item')

const getAllItems  =async (req,res) => {
    try {
    const items = await Items.find({});
    // console.log(items)
    res.json(items);
    // res.send('<h1>Hello from controller</h1>');
} catch (error) {
        console.log("Error from while fetching data",error.message);
}
}

const getItem = async(req,res) => {
    try {
        // console.log(req)
        // res.send(req.query)
        const item = await Items.findById(req.query);
        if(!item){
            console.log("Not found ")
            return res.status(404).send("Not found rahul");
        }
        res.json(item);
        
    } catch (error) {
        console.log("Error from while fetching data",error.message);
}
}

module.exports = {getAllItems,getItem}