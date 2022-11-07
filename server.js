const express = require('express');
const PORT = process.env.PORT || 3001;
const notes = require('./db/db.json');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
  })
  
  app.get('/notes', (req, res)=> {
      res.sendFile(__dirname + '/public/notes.html');
  })
  
  app.get('/api/notes', (req, res)=> {
      res.json(data);
    })
  
    app.post('/api/notes', (req, res) => {
      console.info(`${req.method} received request to create note`);
  
      const { title, text } = req.body;
  
      if(title && text){
        const newNote ={
          title,
          text
        }
  
        data.push(newNote)
  
      }
      res.send(data);
    })
  
    app.listen(PORT, () => {
      console.log(`API server now on port ${PORT}!`);
    });
