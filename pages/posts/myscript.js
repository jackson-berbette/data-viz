const oracledb = require("oracledb");

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
try {
  oracledb.initOracleClient({
    libDir: "C:\\oracle\\instantclient\\instantclient_21_9",
  });
} catch (err) {
  console.error("Whoops!");
  console.error(err);
  process.exit(1);
}
async function run() {
  let connection;

  try {
    connection = await oracledb.getConnection({
      user: "wnguyen1",
      password: "KUcZXsu5tm9ZjXotj4p7GT3y",
      connectString: "//oracle.cise.ufl.edu/orcl",
    });
    console.log("connected!");
    const res = await connection.execute(`SELECT NAME FROM AIRPORT`);
    console.log(res.rows);
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

run();
