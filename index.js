/**

API

prismGrabBag.only
prismGrabBag.fOM

 */

/**
 * only one selection
 */
exports.only = function ($id) {
  var $selection = document.getElementById($id);
  if (!$selection) return undefined;
  else return $selection;
}  
   
/**
 * 
 * Classes, or for that matter
 * any other selector that returns more
 * than 1 DOM node
 */               
exports.fom = function ($selector) {
  var $1stSelection = document.querySelectorAll($selector)[0];
  if (!$1stSelection) return undefined;
  else return $1stSelection;
}