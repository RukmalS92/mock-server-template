const hello = (req,res) => {
    res.send(`Hello from API_GATEWAY ${process.env.PORT}`)
}

module.exports = {hello}