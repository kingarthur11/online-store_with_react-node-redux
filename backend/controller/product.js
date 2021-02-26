const Product = require("../model/product");

exports.create = async (req, res) => {
    const {name, description, imageUrl, price} = req.body;
    try {
        const product = new Product({
            name, 
            description, 
            imageUrl, 
            price  
        });
    const data = await product.save(product)
    res.send({product: data})
    } catch (error) {
        res.status(500).send({
        message: err.message || "some error occured while creating user"
        });
    }
};

exports.findAll = async (req, res) => {
     try {
         const data = await Product.find({});
         res.send(data)
     } catch(error) {
         res.status(500).send({
             message: error.message || "soething went wrong"
         })
     }
 };

exports.findOne = async (req, res) => {
    const {id} = req.params;
    try {
        let data = await Product.findById(id);
        res.send({product: data})        
    } catch (error) {
        res.status(500)
            .send({message: "error retrieving"})
    }
}

exports.update = async (req, res) => {
    try {
        if(!req.body){
            return res.status(400).send({message: 'Data to update cannot be empty'})}
        const _id = req.params.id; 
        let {name, description, imageUrl, price} = req.body;
        const data = await Product.findByIdAndUpdate(
            { _id}, { $set: {name, description, imageUrl, price}}, {useFindAndModify: false});
        res.send({product: data})
    } catch (error) {
        res.status(500)
            .send({message: "error retrieving for update"})
    }
}

exports.delete = async (req, res) => {
    let {id} = req.params;
    try {
        await Product.findByIdAndDelete(id)
        res.status(200).send()
    } catch (error) {
        res.status(500)
            .send({message: "error retrieving"})
    }
}

exports.deleteAll = async (req, res) => {
    try {
        await Product.deleteMany({})
        res.status(200).send()
    } catch (error) {
        res.status(500)
            .send({message: "error retrieving"})
    }
}

