const express = require('express');
const app = express();
const userRoutes = require('./routes/users'); // Import a separate route file
const productRoutes = require('./routes/products'); // Import another

app.use('/users', userRoutes); // All requests to /users/... will go to userRoutes
app.use('/products', productRoutes); // All requests to /products/... will go to productRoutes

// ... other configurations and starting the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});