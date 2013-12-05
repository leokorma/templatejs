var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var PaginaController = new Controller();

PaginaController.show = function() {
  this.numero = this.param('numero');
  
  this.title = 'Pagina ' + this.numero;
  
  this.render('pagina/view');
}

module.exports = PaginaController;
