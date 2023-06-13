//http://localhost:3000/products?API_KEY=123abc

const checkApiKey = function (req, res, next) {
    if (req.query.API_KEY === '123abc') {
        next(); 
    } else {
        res.status(401).send("Error. API KEY necesaria.")
    }
}
module.exports = checkApiKey;