// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = app => {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/", ((req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  }));

  app.get("/survey", ((req, res) => {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  }));

  // If no matching route is found default to home (catch all)
  app.get("*", ((req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  }));

};
