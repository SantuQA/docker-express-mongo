const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
} = process.env;

/* module.exports = {
  url: `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`
}; */
module.exports = {
  url: `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/?directConnection=true&authMechanism=DEFAULT&authSource=admin`
};
/* module.exports = {
  url: `mongodb://root:4DConnect@dev.an0nym0us.ca/?directConnection=true&authMechanism=DEFAULT&authSource=admin`
}; */