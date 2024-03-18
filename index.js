const express = require('express');
const app = express();


const checkWorkingHours = (req, res, next) => {
  const date = new Date();
  const dayOfWeek = date.getDay();
  const hour = date.getHours();

  if (dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 9 && hour < 17) {
    next(); 
  } else {
    res.status(403).send('Le site n\'est disponible que pendant les heures de travail (du lundi au vendredi, de 9h à 17h).');
  }
};


app.use(checkWorkingHours);


app.get('/', (req, res) => {
  res.send('Page d\'accueil');
});

app.get('/services', (req, res) => {
  res.send('Nos services');
});

app.get('/contact', (req, res) => {
  res.send('Nous contacter');
});


const port = 3000;
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
