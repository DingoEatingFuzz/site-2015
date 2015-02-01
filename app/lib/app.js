var App = {};

App.view = function() {
  return m('html', [
    m('body', [
      m('h1', 'Michael Lange'),
      m('p', 'Designer / Developer')
    ])
  ]);
};

m.module(document, App);
