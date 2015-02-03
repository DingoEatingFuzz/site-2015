var App = {};

App.controller = function() {
  this.initGOL = function() {
    var game = document.querySelector('canvas.gol');
    var grid = document.querySelector('canvas.gol-lines');

    game.width = grid.width = 700;
    game.height = grid.height = 500;

    this.player = new Player(10, game, grid);
  }
};

App.view = function(ctrl) {
  return m('html', [
    m('title', 'Michael Lange / Developer / Designer'),
    m('body', [
      m('div[class="author"]', [
        m('h1', 'Michael Lange'),
        m('p', 'Developer / Designer')
      ]),
      m('figure', [
        m('div', { config: ctrl.initGOL }, [
          m('canvas.gol'),
          m('canvas.gol-lines')
        ]),
        m('figcaption', [
          m('strong', 'Conways Game of JavaScript'),
          m.trust('&mdash;A Conways Game of Life implementation in JavaScript languages')
        ])
      ])
    ])
  ]);
};

m.module(document, App);
