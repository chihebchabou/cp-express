const express = require('express');
const path = require('path');

const port = process.env.PORT || 5000;

const app = express();

function requestTime(req, res, next) {
  const currentdate = new Date();
  console.log(req.originalUrl, currentdate.getHours());
  if (
    currentdate.getHours() > 8 &&
    currentdate.getHours() < 18 &&
    currentdate.getDay() > 0 &&
    currentdate.getDay() < 6
  )
    next();
  else res.send('we are closed now');
}

app.use(requestTime);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log(`Server is running on port ${port}`));
