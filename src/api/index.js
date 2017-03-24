import Sequelize from 'sequelize';

var connection = new Sequelize('react-survey', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

var Question = connection.define('question', {
  questionText: Sequelize.TEXT
});

connection.sync({
  force: true,
  match: /react-survey/
}).then(function () {
  Question.create({
    questionText: 'Who recorded Kind of Blue?',
    answers: [{
        answerText: 'Charlie Parker',
        answerStatus: false
      },
      {
        answerText: 'Miles Davis',
        answerStatus: true
      },
      {
        answerText: 'John Coltrane',
        answerStatus: false
      },
      {
        answerText: 'Rhianna',
        answerStatus: false
      }]
  });
});
