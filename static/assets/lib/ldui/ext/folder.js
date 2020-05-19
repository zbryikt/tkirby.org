// Generated by LiveScript 1.3.1
(function(){
  return ldui.Folder = function(opt){
    var lc, root, toggler, menu;
    lc = {
      handler: []
    };
    root = opt.root;
    this.root = root = typeof root === 'string'
      ? document.querySelector(root)
      : root ? root : null;
    toggler = ld$.find(root, '.folder-toggle', 0);
    menu = ld$.find(root, '.folder-menu', 0);
    toggler.addEventListener('click', function(){
      var ison;
      ison = root.classList.contains('show');
      menu.style.height = (ison ? menu.scrollHeight : 0) + "px";
      menu.offsetHeight;
      menu.style.height = (ison
        ? 0
        : menu.scrollHeight) + "px";
      return root.classList.toggle('show', !ison);
    });
    return this;
  };
})();