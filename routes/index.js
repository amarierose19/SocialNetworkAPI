const router = require("express").Router();
const apiRoutes = require("./api");

router.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
});

router.use("/api", apiRoutes);

router.use((req, res) => {
     res.status(404).send('<h1>404 not found!</h1>')
    return;
})



module.exports = router;

