var App = {};

App.controller = function() {
  this.initGOL = function() {
    var game = document.querySelector('canvas.gol');
    var grid = document.querySelector('canvas.gol-lines');

    game.width = grid.width = 700;
    game.height = grid.height = 500;

    this.player = new Player(10, game, grid);
  };

  this.resetGOL = function() {
    if (this.player) {
      this.player.reset();
    }
  }
};

App.view = function(ctrl) {
  return m('html', [
    css('/styles/main.css'),
    css('http://fonts.googleapis.com/css?family=Crimson+Text:700italic,400,700,400italic'),
    m('title', 'Michael Lange / Developer / Designer'),
    m('body', [
      m('div[class="author"]', [
        m('h1', 'Michael Lange'),
        m('p', 'A software developer and designer from Portland, OR')
      ]),
      m('figure.gameoflife', [
        m('div', { config: ctrl.initGOL, onclick: ctrl.resetGOL }, [
          m('canvas.gol'),
          m('canvas.gol-lines')
        ]),
        m('figcaption', [
          m('strong', m.trust('Conway&rsquo;s Game of JavaScript')),
          m.trust('&mdash;A Conways Game of Life implementation in JavaScript languages')
        ])
      ])
    ])
  ]);
};

m.module(document, App);

function css(path) {
  return m('link[href="'+path+'"][rel="stylesheet"]');
}
