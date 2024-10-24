let connection;

var oracledb = require("oracledb");

(async function () {
  try {
    connection = await oracledb.getConnection({
      user: "TTRAPI",
      password: "TTRAPI",
      connectString: "10.32.151.233:1521/PIUAT19",
    });
    console.log("Successfully connected to Oracle!");
  } catch (err) {
    console.log("Error: ", err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.log("Error when closing the database connection", err);
      }
    }
  }
})();
