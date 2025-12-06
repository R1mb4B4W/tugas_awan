const express = require('express');
const app = express();

// Azure atau PaaS akan menentukan port melalui variabel lingkungan (environment variable)
// Jika tidak ada, gunakan port 3000 untuk pengujian lokal
const port = process.env.PORT || 3000;

// Rute utama (root route)
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Azure PaaS Demo</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; background-color: #f0f8ff; }
          h1 { color: #0078d4; }
          p { color: #333; }
        </style>
      </head>
      <body>
        <h1>Selamat Datang di Azure App Service!</h1>
        <p>Aplikasi PaaS Sederhana ini berjalan menggunakan Node.js dan Express.</p>
        <p>Current Time: ${new Date().toLocaleString()}</p>
      </body>
    </html>
  `);
});

// Server mulai mendengarkan pada port yang ditentukan
app.listen(port, () => {
  console.log(`Aplikasi berjalan di port: ${port}`);
});