const express = require('express');
const bodyParser = require('body-parser');
const studentsController = require('./controllers/students');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('Home', { title: 'Home' });
});

app.get('/success', (req, res) => {
    res.render('Success', { title: 'Success' });
});

app.get('/students-list', studentsController.getStudentsListPage);

app.post('/add-student', studentsController.addStudent);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});