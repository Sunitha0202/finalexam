// // router.js

const express = require("express");
const router = express.Router();
// controller functions
const blogSSR = require("../controllers/sleeplogSSRController");
const verifyToken = require("../middlewares/requireAuthSSR")

// require auth for all routes
router.use(verifyToken)

// SSR
// End1: Route to render index.html with sleeplogs using EJS
router.get("/", blogSSR.renderSleeplogs);
// End2: Define a route to render the addsleeplog.ejs view
router.get("/addsleeplog", blogSSR.renderForm);
// End3:Route to add  sleeplog using EJ
router.post("/addsleeplog", blogSSR.addSleeplog);
// Define a route to render the singlesleeplog.ejs view
router.get("/single-sleeplog/:id", blogSSR.renderSleeplog);
// Define a route to delete singlesleeplog
router.delete("/single-sleeplog/:id", blogSSR.deleteSleeplog);
// Define a route to update single sleeplog.ejs
router.put("/single-sleeplog/:id", blogSSR.updateSleeplog);
// Define sleeplog to update
router.get("/single-sleeplog/update/:id", blogSSR.renderUpdateSleeplog);

module.exports = router;


