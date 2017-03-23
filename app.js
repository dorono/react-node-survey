var Sequelize = require('sequelize');

var connection = new Sequelize('react-survey', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

var Question = connection.define('question', {
  questionText: Sequelize.TEXT
});

connection.sync().then(function () {
  Question.create({
    questionText: 'Who recorded Kind of Blue?'
  });
});
