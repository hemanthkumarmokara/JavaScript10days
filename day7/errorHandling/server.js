const express = require('express');
const app = express();

// Dummy async function to simulate error
const fetchData = async () => {
  throw new Error("Failed to fetch data");
};

// Route with try/catch
app.get('/data', async (req, res, next) => {
  try {
    const result = await fetchData(); // this will throw an error
    res.json(result);
  } catch (err) {
    next(err); // send to centralized error handler
  }
});

// Centralized error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});

