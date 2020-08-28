 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_attrs(t,r){var a="";for(var s in t)if(pug_has_own_property.call(t,s)){var u=t[s];if("class"===s){u=pug_classes(u),a=pug_attr(s,u,!1,r)+a;continue}"style"===s&&(u=pug_style(u)),a+=pug_attr(s,u,!1,r)}return a}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_merge(e,r){if(1===arguments.length){for(var t=e[0],g=1;g<e.length;g++)t=pug_merge(t,e[g]);return t}for(var l in r)if("class"===l){var n=e[l]||[];e[l]=(Array.isArray(n)?n:[n]).concat(r[l]||[])}else if("style"===l){var n=pug_style(e[l]);n=n&&";"!==n[n.length-1]?n+";":n;var a=pug_style(r[l]);a=a&&";"!==a[a.length-1]?a+";":a,e[l]=n+a}else e[l]=r[l];return e}
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (Array, JSON, blockLoader, cssLoader, decache, escape, prefix, scriptLoader, version) {;pug_debug_line = 1;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fldui.pug";
if(!ctrl) var ctrl = {};
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Fchevron-down.pug";





;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Fspinner.pug";





;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
var escjson = function(obj) { return 'JSON.parse(unescape("' + escape(JSON.stringify(obj)) + '"))'; };
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
var eschtml = (function() { var MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&#34;', "'": '&#39;' }; var repl = function(c) { return MAP[c]; }; return function(s) { return s.replace(/[&<>'"]/g, repl); }; })();
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";









;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if(!scriptLoader) { scriptLoader = {url: {}, config: {}}; }
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if(!decache) { decache = (version? "?v=" + version : ""); }
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
pug_mixins["script"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
scriptLoader.config = (config ? config : {});
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if (!scriptLoader.url[url]) {
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
scriptLoader.url[url] = true;
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if (/^https?:\/\/./.exec(url)) {
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + decache, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
};
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if(!cssLoader) { cssLoader = {url: {}}; }
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
pug_mixins["css"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
cssLoader.config = (config ? config : {});
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if (!cssLoader.url[url]) {
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
cssLoader.url[url] = true;
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + decache, true, true)) + "\u003E";
}
};
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if(!blockLoader) { blockLoader = {name: {}, config: {}}; }
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";










;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
var b64img = {};
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
b64img.px1 = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAAAAAAALAAAAAABAAEAQAICRAEAOw=="
;pug_debug_line = 39;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
var loremtext = {
  zh: "料何緊許團人受間口語日是藝一選去，得系目、再驗現表爸示片球法中轉國想我樹我，色生早都沒方上情精一廣發！能生運想毒一生人一身德接地，說張在未安人、否臺重壓車亞是我！終力邊技的大因全見起？切問去火極性現中府會行多他千時，來管表前理不開走於展長因，現多上我，工行他眼。總務離子方區面人話同下，這國當非視後得父能民觀基作影輕印度民雖主他是一，星月死較以太就而開後現：國這作有，他你地象的則，引管戰照十都是與行求證來亞電上地言裡先保。大去形上樹。計太風何不先歡的送但假河線己綠？計像因在……初人快政爭連合多考超的得麼此是間不跟代光離制不主政重造的想高據的意臺月飛可成可有時情乎為灣臺我養家小，叫轉於可！錢因其他節，物如盡男府我西上事是似個過孩而過要海？更神施一關王野久沒玩動一趣庭顧倒足要集我民雲能信爸合以物頭容戰度系士我多學一、區作一，過業手：大不結獨星科表小黨上千法值之兒聲價女去大著把己。",
  en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

;pug_debug_line = 45;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";







;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";













;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";















































;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_mixins["ldPaletteEditor"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"ldp\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"name\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"colors\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"edit\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"inner\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-6\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"ldColorPicker no-border no-palette\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-6\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"row mb-2\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-8\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cselect class=\"form-control form-control-local-sm\" value=\"rgb\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Coption value=\"rgb\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "RGB\u003C\u002Foption\u003E";
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Coption value=\"hsl\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "HSL\u003C\u002Foption\u003E";
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Coption value=\"hcl\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "HCL\u003C\u002Foption\u003E\u003C\u002Fselect\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-4 pl-0\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput class=\"form-control form-control-local-sm value\" placeholder=\"Hex Value\" data-tag=\"hex\" style=\"margin:0\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
var configs = [["Red", "Green", "Blue", "rgb", "active"], ["Hue", "Saturation", "Luminance", "hsl",""], ["Hue", "Chroma", "Luminance", "hcl",""]];
;pug_debug_line = 34;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
// iterate configs
;(function(){
  var $$obj = configs;
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var config = $$obj[pug_index2];
;pug_debug_line = 35;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["row","config",config[4]], [false,false,true]), false, true)+pug_attr("data-tag", config[3], true, true)) + "\u003E";
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-8\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"label-group\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = config[0]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"ldrs ldrs-sm\""+pug_attr("data-tag", config[3] + "-" + config[0][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"label-group\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = config[1]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"ldrs ldrs-sm\""+pug_attr("data-tag", config[3] + "-" + config[1][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"label-group\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = config[2]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 44;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"ldrs ldrs-sm\""+pug_attr("data-tag", config[3] + "-" + config[2][0].toLowerCase(), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 46;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-4\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"value form-control form-control-local-sm\""+pug_attr("data-tag", config[3] + "-" + config[0][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"value form-control form-control-local-sm\""+pug_attr("data-tag", config[3] + "-" + config[1][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 51;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"value form-control form-control-local-sm\""+pug_attr("data-tag", config[3] + "-" + config[2][0].toLowerCase(), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var config = $$obj[pug_index2];
;pug_debug_line = 35;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["row","config",config[4]], [false,false,true]), false, true)+pug_attr("data-tag", config[3], true, true)) + "\u003E";
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-8\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"label-group\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = config[0]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"ldrs ldrs-sm\""+pug_attr("data-tag", config[3] + "-" + config[0][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"label-group\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = config[1]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"ldrs ldrs-sm\""+pug_attr("data-tag", config[3] + "-" + config[1][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"label-group\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = config[2]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 44;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"ldrs ldrs-sm\""+pug_attr("data-tag", config[3] + "-" + config[2][0].toLowerCase(), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 46;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-4\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"value form-control form-control-local-sm\""+pug_attr("data-tag", config[3] + "-" + config[0][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"value form-control form-control-local-sm\""+pug_attr("data-tag", config[3] + "-" + config[1][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 51;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"value form-control form-control-local-sm\""+pug_attr("data-tag", config[3] + "-" + config[2][0].toLowerCase(), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 55;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";





























































































































;pug_debug_line = 93;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";












;pug_debug_line = 97;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
var anikit = {"groupName":["No Animation","Popular Animation","Repeat Animation","Transition"],"members":[[["static","static"]],[["blink","blink"],["bounce","bounce"],["bounce-in","bounce-in"],["bounce-out","bounce-out"],["breath","breath"],["fade","fade"],["flip-h","flip (horizontally)"],["float-btt-in","float-in (bottom to top)"],["slide-ltr","slide (left to right)"],["spin","spin"],["tremble","tremble"]],[["beat","beat"],["blink","blink"],["blur","blur"],["bounce","bounce"],["bounceAlt","bounceAlt"],["breath","breath"],["clock","clock"],["coin-h","coin (horizontally)"],["coin-v","coin (vertically)"],["cycle","cycle"],["cycle-alt","cycle-alt"],["damage","damage"],["dim","dim"],["fade","fade"],["flip","flip"],["flip-h","flip (horizontally)"],["flip-v","flip (vertically)"],["float","float"],["heartbeat","heartbeat"],["hit","hit"],["jelly","jelly"],["jelly-alt","jelly-alt"],["jingle","jingle"],["jump","jump"],["measure","measure"],["metronome","metronome"],["move-btt","move (bottom to top)"],["move-fade-btt","move faded (bottom to top)"],["move-fade-ltr","move faded (left to right)"],["move-fade-rtl","move faded (right to left)"],["move-fade-ttb","move faded (top to bottom)"],["move-ltr","move (left to right)"],["move-rtl","move (right to left)"],["move-ttb","move (top to bottom)"],["orbit","orbit"],["pulse","pulse"],["rubber-h","rubber (horizontally)"],["rubber-v","rubber (vertically)"],["rush-btt","rush (bottom to top)"],["rush-ltr","rush (left to right)"],["rush-rtl","rush (right to left)"],["rush-ttb","rush (top to bottom)"],["shake-h","shake (horizontally)"],["shake-v","shake (vertically)"],["shiver","shiver"],["skew","skew"],["skew-alt","skew-alt"],["slide-btt","slide (bottom to top)"],["slide-ltr","slide (left to right)"],["slide-rtl","slide (right to left)"],["slide-ttb","slide (top to bottom)"],["smash","smash"],["spin","spin"],["spin-fast","spin-fast"],["squeeze","squeeze"],["surprise","surprise"],["swim","swim"],["swing","swing"],["tick","tick"],["tick-alt","tick-alt"],["tremble","tremble"],["vortex","vortex"],["vortex-alt","vortex-alt"],["wander-h","wander (horizontally)"],["wander-v","wander (vertically)"],["wrench","wrench"]],[["blur-in","blur-in"],["blur-out","blur-out"],["bounce-alt-in","bounce-alt-in"],["bounce-alt-out","bounce-alt-out"],["bounce-in","bounce-in"],["bounce-out","bounce-out"],["fade-in","fade-in"],["fade-out","fade-out"],["fall-btt-in","fall-in (bottom to top)"],["fall-ltr-in","fall-in (left to right)"],["fall-rtl-in","fall-in (right to left)"],["fall-ttb-in","fall-in (top to bottom)"],["flip-h-in","flip-in (horizontally)"],["flip-h-out","flip-out (horizontally)"],["flip-v-in","flip-in (vertically)"],["flip-v-out","flip-out (vertically)"],["float-btt-in","float-in (bottom to top)"],["float-btt-out","float-out (bottom to top)"],["float-ltr-in","float-in (left to right)"],["float-ltr-out","float-out (left to right)"],["float-rtl-in","float-in (right to left)"],["float-rtl-out","float-out (right to left)"],["float-ttb-in","float-in (top to bottom)"],["float-ttb-out","float-out (top to bottom)"],["grow-btt-in","grow-in (bottom to top)"],["grow-btt-out","grow-out (bottom to top)"],["grow-ltr-in","grow-in (left to right)"],["grow-ltr-out","grow-out (left to right)"],["grow-rtl-in","grow-in (right to left)"],["grow-rtl-out","grow-out (right to left)"],["grow-ttb-in","grow-in (top to bottom)"],["grow-ttb-out","grow-out (top to bottom)"],["jump-alt-in","jump-alt-in"],["jump-alt-out","jump-alt-out"],["jump-in","jump-in"],["jump-out","jump-out"],["power-off","power-off"],["power-on","power-on"],["rush-btt-in","rush-in (bottom to top)"],["rush-ltr-in","rush-in (left to right)"],["rush-rtl-in","rush-in (right to left)"],["rush-ttb-in","rush-in (top to bottom)"],["slide-btt-in","slide-in (bottom to top)"],["slide-btt-out","slide-out (bottom to top)"],["slide-ltr-in","slide-in (left to right)"],["slide-ltr-out","slide-out (left to right)"],["slide-rtl-in","slide-in (right to left)"],["slide-rtl-out","slide-out (right to left)"],["slide-ttb-in","slide-in (top to bottom)"],["slide-ttb-out","slide-out (top to bottom)"],["spring-btt-in","spring-in (bottom to top)"],["spring-ltr-in","spring-in (left to right)"],["spring-rtl-in","spring-in (right to left)"],["spring-ttb-in","spring-in (top to bottom)"],["throw-btt-in","throw-in (bottom to top)"],["throw-ltr-in","throw-in (left to right)"],["throw-rtl-in","throw-in (right to left)"],["throw-ttb-in","throw-in (top to bottom)"],["vortex-alt-in","vortex-alt-in"],["vortex-alt-out","vortex-alt-out"],["vortex-in","vortex-in"],["vortex-out","vortex-out"],["zoom-in","zoom-in"],["zoom-out","zoom-out"]]],"group":{"static":[["static","static"]],"popular":[["blink","blink"],["bounce","bounce"],["bounce-in","bounce-in"],["bounce-out","bounce-out"],["breath","breath"],["fade","fade"],["flip-h","flip (horizontally)"],["float-btt-in","float-in (bottom to top)"],["slide-ltr","slide (left to right)"],["spin","spin"],["tremble","tremble"]],"repeat":[["beat","beat"],["blink","blink"],["blur","blur"],["bounce","bounce"],["bounceAlt","bounceAlt"],["breath","breath"],["clock","clock"],["coin-h","coin (horizontally)"],["coin-v","coin (vertically)"],["cycle","cycle"],["cycle-alt","cycle-alt"],["damage","damage"],["dim","dim"],["fade","fade"],["flip","flip"],["flip-h","flip (horizontally)"],["flip-v","flip (vertically)"],["float","float"],["heartbeat","heartbeat"],["hit","hit"],["jelly","jelly"],["jelly-alt","jelly-alt"],["jingle","jingle"],["jump","jump"],["measure","measure"],["metronome","metronome"],["move-btt","move (bottom to top)"],["move-fade-btt","move faded (bottom to top)"],["move-fade-ltr","move faded (left to right)"],["move-fade-rtl","move faded (right to left)"],["move-fade-ttb","move faded (top to bottom)"],["move-ltr","move (left to right)"],["move-rtl","move (right to left)"],["move-ttb","move (top to bottom)"],["orbit","orbit"],["pulse","pulse"],["rubber-h","rubber (horizontally)"],["rubber-v","rubber (vertically)"],["rush-btt","rush (bottom to top)"],["rush-ltr","rush (left to right)"],["rush-rtl","rush (right to left)"],["rush-ttb","rush (top to bottom)"],["shake-h","shake (horizontally)"],["shake-v","shake (vertically)"],["shiver","shiver"],["skew","skew"],["skew-alt","skew-alt"],["slide-btt","slide (bottom to top)"],["slide-ltr","slide (left to right)"],["slide-rtl","slide (right to left)"],["slide-ttb","slide (top to bottom)"],["smash","smash"],["spin","spin"],["spin-fast","spin-fast"],["squeeze","squeeze"],["surprise","surprise"],["swim","swim"],["swing","swing"],["tick","tick"],["tick-alt","tick-alt"],["tremble","tremble"],["vortex","vortex"],["vortex-alt","vortex-alt"],["wander-h","wander (horizontally)"],["wander-v","wander (vertically)"],["wrench","wrench"]],"transition":[["blur-in","blur-in"],["blur-out","blur-out"],["bounce-alt-in","bounce-alt-in"],["bounce-alt-out","bounce-alt-out"],["bounce-in","bounce-in"],["bounce-out","bounce-out"],["fade-in","fade-in"],["fade-out","fade-out"],["fall-btt-in","fall-in (bottom to top)"],["fall-ltr-in","fall-in (left to right)"],["fall-rtl-in","fall-in (right to left)"],["fall-ttb-in","fall-in (top to bottom)"],["flip-h-in","flip-in (horizontally)"],["flip-h-out","flip-out (horizontally)"],["flip-v-in","flip-in (vertically)"],["flip-v-out","flip-out (vertically)"],["float-btt-in","float-in (bottom to top)"],["float-btt-out","float-out (bottom to top)"],["float-ltr-in","float-in (left to right)"],["float-ltr-out","float-out (left to right)"],["float-rtl-in","float-in (right to left)"],["float-rtl-out","float-out (right to left)"],["float-ttb-in","float-in (top to bottom)"],["float-ttb-out","float-out (top to bottom)"],["grow-btt-in","grow-in (bottom to top)"],["grow-btt-out","grow-out (bottom to top)"],["grow-ltr-in","grow-in (left to right)"],["grow-ltr-out","grow-out (left to right)"],["grow-rtl-in","grow-in (right to left)"],["grow-rtl-out","grow-out (right to left)"],["grow-ttb-in","grow-in (top to bottom)"],["grow-ttb-out","grow-out (top to bottom)"],["jump-alt-in","jump-alt-in"],["jump-alt-out","jump-alt-out"],["jump-in","jump-in"],["jump-out","jump-out"],["power-off","power-off"],["power-on","power-on"],["rush-btt-in","rush-in (bottom to top)"],["rush-ltr-in","rush-in (left to right)"],["rush-rtl-in","rush-in (right to left)"],["rush-ttb-in","rush-in (top to bottom)"],["slide-btt-in","slide-in (bottom to top)"],["slide-btt-out","slide-out (bottom to top)"],["slide-ltr-in","slide-in (left to right)"],["slide-ltr-out","slide-out (left to right)"],["slide-rtl-in","slide-in (right to left)"],["slide-rtl-out","slide-out (right to left)"],["slide-ttb-in","slide-in (top to bottom)"],["slide-ttb-out","slide-out (top to bottom)"],["spring-btt-in","spring-in (bottom to top)"],["spring-ltr-in","spring-in (left to right)"],["spring-rtl-in","spring-in (right to left)"],["spring-ttb-in","spring-in (top to bottom)"],["throw-btt-in","throw-in (bottom to top)"],["throw-ltr-in","throw-in (left to right)"],["throw-rtl-in","throw-in (right to left)"],["throw-ttb-in","throw-in (top to bottom)"],["vortex-alt-in","vortex-alt-in"],["vortex-alt-out","vortex-alt-out"],["vortex-in","vortex-in"],["vortex-out","vortex-out"],["zoom-in","zoom-in"],["zoom-out","zoom-out"]]}};
;pug_debug_line = 98;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";























































































;pug_debug_line = 111;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";














































;pug_debug_line = 117;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
prefix = function(n) { return (!n?[]:(Array.isArray(n)?n:[n])).map(function(it){ return `${prefix.currentName}$${it}`; }).join(' ');}
;pug_debug_line = 118;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";





















;pug_debug_line = 127;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";





;pug_debug_line = 131;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Ftkirby.org\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";












;pug_debug_line = 3;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Chtml\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Chead\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["css"]("/assets/lib/bootstrap/4.3.1/css/bootstrap.min.css");
;pug_debug_line = 6;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["css"]("/assets/lib/ldui/ldui.min.css");
pug_html = pug_html + "\u003C\u002Fhead\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cbody\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["problem"] = pug_interp = function(idx,content){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 9;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cdiv class=\"mb-4 pb-2\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cdiv class=\"mb-1\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = idx) ? "" : pug_interp));
;pug_debug_line = 10;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + ". ";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = content) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002F802.pug";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"] = pug_interp = function(n,v,c){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 13;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-check mb-1\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"form-check-input clickable\""+" type=\"radio\""+pug_attr("name", n, true, true)+pug_attr("value", v, true, true)) + "\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Clabel class=\"form-check-label clickable no-select\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "(";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = v) ? "" : pug_interp));
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + ") ";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = c) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-1024 mx-auto rwd typeset heading-contrast\" style=\"padding:24px\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + " ";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Ch2\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "台灣山友簡易分級測驗\u003C\u002Fh2\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cdiv class=\"entry\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Ca rel=\"lightbox\" href=\"https:\u002F\u002Ftkirby.org\u002Falbum\u002Ftopics\u002Fmisc\u002F13.jpg\" title=\"13.jpg\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cimg class=\"alignnone\" src=\"https:\u002F\u002Ftkirby.org\u002Falbum\u002Ftopics\u002Fmisc\u002F13.jpg\" style=\"width:960px;height:639px\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "近日新聞傳出，由於台新金控總經理林克孝日前登山墜崖過世，農委會林務局決定著手建置國內選定登山步道之安全措施及分級管理，以防憾事再傳。我認為這對林先生這次的意外幫助恐怕並不大，但也許可以避免日前獨攀白姑大山者山難意外的發生。不過，若真的要進行登山步道分級，我認為倒不如先規劃並執行山友分級，相信對降低意外發生的機會會有很大的幫助。\u003C\u002Fp\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "那麼要如何進行山友分級呢？透過以下的問答應該可以達到相當好的功效。\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Chr\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "§ 台灣山友簡易分級測驗 §\u003C\u002Fh4\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["problem"].call({
block: function(){
;pug_debug_line = 28;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p1", "a", "高山症");
;pug_debug_line = 29;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p1", "b", "低山症");
;pug_debug_line = 30;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p1", "c", "山癌");
;pug_debug_line = 31;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p1", "d", "嚴重急性呼吸道症候群");
}
}, "1", "請問下列疾病中曾在山上發生過致死率最高的是?");
;pug_debug_line = 33;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["problem"].call({
block: function(){
;pug_debug_line = 34;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p2", "a", "再 15 分鐘就到了");
;pug_debug_line = 35;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p2", "b", "再 15 分鐘你就會發現快到了");
;pug_debug_line = 36;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p2", "c", "再 15 分鐘, 就過了 15 分鐘");
;pug_debug_line = 37;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p2", "d", "快到了, 再 15 公里");
}
}, "2", "當前方隊友跟你說, “快到了, 再15分鐘”, 他的意思是");
;pug_debug_line = 39;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["problem"].call({
block: function(){
;pug_debug_line = 40;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p3", "a", "華山,泰山,嵩山,衡山,恆山");
;pug_debug_line = 41;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p3", "b", "二格山,三錐山,四大天王山,五分山,六十石山");
;pug_debug_line = 42;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p3", "c", "六順山,七彩湖,八五峰,九紀山,石筍尖");
;pug_debug_line = 43;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p3", "d", "南湖大山,雪山,玉山,北大武山,秀姑巒山");
;pug_debug_line = 44;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p3", "e", "合歡山,玉山,雪山,奇萊山,七星山");
}
}, "3", "素有台灣五嶽之稱的山為?");
;pug_debug_line = 46;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["problem"].call({
block: function(){
;pug_debug_line = 47;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p4", "a", "親切的打招呼");
;pug_debug_line = 48;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p4", "b", "跟著他們走");
;pug_debug_line = 49;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p4", "c", "也拿出斗笠及黃色小飛俠雨衣");
;pug_debug_line = 50;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p4", "d", "以現行犯逮捕之並且報警處理");
;pug_debug_line = 51;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p4", "e", "伴隨劇烈慘叫聲迅速逃離現場");
}
}, "4", "路上遇到三位頭戴斗笠身穿黃色小飛俠雨衣的山友, 你應當");
;pug_debug_line = 53;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["problem"].call({
block: function(){
;pug_debug_line = 54;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p5", "a", "生火");
;pug_debug_line = 55;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p5", "b", "生氣");
;pug_debug_line = 56;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p5", "c", "生病");
;pug_debug_line = 57;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p5", "d", "生產");
}
}, "5", "在國家公園界內最不應該做的事情?");
;pug_debug_line = 59;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["problem"].call({
block: function(){
;pug_debug_line = 60;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p6", "a", "3000公分以上");
;pug_debug_line = 61;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p6", "b", "3000公吋以上");
;pug_debug_line = 62;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p6", "c", "3000公尺以上");
;pug_debug_line = 63;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p6", "d", "3000公里以上");
}
}, "6", "在台灣一般把多高的山歸類為高山?");
;pug_debug_line = 65;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["problem"].call({
block: function(){
;pug_debug_line = 66;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p7", "a", "合歡東峰");
;pug_debug_line = 67;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p7", "b", "合歡南峰");
;pug_debug_line = 68;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p7", "c", "合歡西峰");
;pug_debug_line = 69;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p7", "d", "合歡北峰");
}
}, "7", "下列台灣山岳, 難度最高的是?");
;pug_debug_line = 71;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["problem"].call({
block: function(){
;pug_debug_line = 72;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p8", "a", "雪山");
;pug_debug_line = 73;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p8", "b", "小雪山");
;pug_debug_line = 74;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p8", "c", "中雪山");
;pug_debug_line = 75;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p8", "d", "大雪山");
}
}, "8", "下列台灣山岳, 難度最低的是?");
;pug_debug_line = 77;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["problem"].call({
block: function(){
;pug_debug_line = 78;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p9", "a", "他迷路了");
;pug_debug_line = 79;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p9", "b", "他迷惘了");
;pug_debug_line = 80;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p9", "c", "他在這裡很久了, 希望你帶他回家");
;pug_debug_line = 81;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p9", "d", "他知道他為什麼在這裡，只是他不願承認他知道");
}
}, "9", "爬山到一半, 有人問你他為什麼在這裡的時候, 他想表達的是");
;pug_debug_line = 83;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["problem"].call({
block: function(){
;pug_debug_line = 84;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p10", "a", "竹子湖");
;pug_debug_line = 85;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p10", "b", "奮起湖");
;pug_debug_line = 86;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p10", "c", "向天湖");
;pug_debug_line = 87;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p10", "d", "七星潭");
}
}, "10", "下列哪項指的是湖泊?");
;pug_debug_line = 89;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["problem"].call({
block: function(){
;pug_debug_line = 90;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p11", "a", "大喊「我攻頂了！」");
;pug_debug_line = 91;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p11", "b", "大喊「我登頂了！」");
;pug_debug_line = 92;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p11", "c", "大喊「我絕頂了！」");
;pug_debug_line = 93;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p11", "d", "大喊「我滅頂了！」");
;pug_debug_line = 94;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p11", "e", "大喊「我頂！」");
;pug_debug_line = 95;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p11", "f", "一腳踩在三角點上");
}
}, "11", "爬到山頂後, 下列哪個行為是最適當的?");
;pug_debug_line = 97;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["problem"].call({
block: function(){
;pug_debug_line = 98;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p12", "a", "南玉山");
;pug_debug_line = 99;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p12", "b", "南湖大山");
;pug_debug_line = 100;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p12", "c", "北大武山");
;pug_debug_line = 101;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p12", "d", "南插天山");
}
}, "12", "下列那座山緯度最高？");
;pug_debug_line = 103;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["problem"].call({
block: function(){
;pug_debug_line = 104;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p13", "a", "南玉山");
;pug_debug_line = 105;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p13", "b", "阿玉山");
;pug_debug_line = 106;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p13", "c", "林田山");
;pug_debug_line = 107;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p13", "d", "品田山");
;pug_debug_line = 108;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p13", "e", "品田牧場");
;pug_debug_line = 109;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p13", "f", "武陵農場");
;pug_debug_line = 110;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p13", "g", "武嶺");
}
}, "13", "承上題，下列哪個地方海拔最高？");
;pug_debug_line = 112;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["problem"].call({
block: function(){
;pug_debug_line = 113;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p14", "a", "10分鐘");
;pug_debug_line = 114;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p14", "b", "10小時");
;pug_debug_line = 115;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p14", "c", "10天");
;pug_debug_line = 116;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p14", "d", "10週");
}
}, "14", "一般來說陽明山東西大縱走大約多久可以走完?");
;pug_debug_line = 118;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["problem"].call({
block: function(){
;pug_debug_line = 119;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p15", "a", "8分鐘");
;pug_debug_line = 120;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p15", "b", "8小時");
;pug_debug_line = 121;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p15", "c", "8天");
;pug_debug_line = 122;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p15", "d", "8週");
;pug_debug_line = 123;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p15", "e", "身為一個正常人類我是不會把他走完的。");
}
}, "15", "承上題，中央山脈大縱走大約多久可以走完?");
;pug_debug_line = 125;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["problem"].call({
block: function(){
;pug_debug_line = 126;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p16", "a", "紀念孫海");
;pug_debug_line = 127;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p16", "b", "紀念孫文");
;pug_debug_line = 128;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p16", "c", "附近猴孫多似海");
;pug_debug_line = 129;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p16", "d", "soon-hi 的英文音譯, 代表快到了的意思");
;pug_debug_line = 130;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p16", "e", "台灣原住民語音譯，意為「山豬之路」");
}
}, "16", "孫海橋名稱的由來?");
;pug_debug_line = 132;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["problem"].call({
block: function(){
;pug_debug_line = 133;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p17", "a", "有衛浴設施及熱水、開飲機、販賣部及公用電話");
;pug_debug_line = 134;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p17", "b", "有美食街、精品店、停車場及特賣會");
;pug_debug_line = 135;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p17", "c", "有兩人房、四人房、八人通舖及餐廳");
;pug_debug_line = 136;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p17", "d", "常須事先訂位，能住到山屋為相當奢華的享受");
}
}, "17", "下列關於山林間常見山屋的描述何者為真?");
;pug_debug_line = 138;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["problem"].call({
block: function(){
;pug_debug_line = 139;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p18", "a", "枕頭山");
;pug_debug_line = 140;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p18", "b", "橘子山");
;pug_debug_line = 141;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p18", "c", "那是山");
;pug_debug_line = 142;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p18", "d", "這是山");
}
}, "18", "請問下列哪個不是台灣島內真正的山?");
;pug_debug_line = 144;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["problem"].call({
block: function(){
;pug_debug_line = 145;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p19", "a", "庫哈諾辛山");
;pug_debug_line = 146;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p19", "b", "布拉克桑山");
;pug_debug_line = 147;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p19", "c", "穆特勒布山");
;pug_debug_line = 148;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p19", "d", "埃佛勒斯峰");
}
}, "19", "承上題，下列哪座山雖然是山但不在台灣島內?");
;pug_debug_line = 150;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["problem"].call({
block: function(){
;pug_debug_line = 151;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p20", "a", "加入北插之友，參與社團活動偕同北插之怪前往");
;pug_debug_line = 152;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p20", "b", "加入政府機關，舉辦部門員工旅遊偕同高官前往");
;pug_debug_line = 153;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p20", "c", "加入學校社團，利用研究教育名義偕同學妹前往");
;pug_debug_line = 154;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p20", "d", "加入部落族群，歸順原住民同胞後偕同獵槍前往");
}
}, "20", "很想要爬位於自然保留區內的北插天山，你應該:");
;pug_debug_line = 156;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["problem"].call({
block: function(){
;pug_debug_line = 157;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p21", "a", "天使的眼淚");
;pug_debug_line = 158;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p21", "b", "惡魔的心臟");
;pug_debug_line = 159;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p21", "c", "妖精的尾巴");
;pug_debug_line = 160;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p21", "d", "魔導的少年");
}
}, "21", "嘉明湖素有什麼的美稱？");
;pug_debug_line = 162;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["problem"].call({
block: function(){
;pug_debug_line = 163;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p22", "a", "雨衣");
;pug_debug_line = 164;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p22", "b", "雨傘");
;pug_debug_line = 165;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p22", "c", "雨男");
;pug_debug_line = 166;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p22", "d", "雨備");
}
}, "22", "以下登山裝備最不可或缺的是?");
;pug_debug_line = 168;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["problem"].call({
block: function(){
;pug_debug_line = 169;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p23", "a", "雞籠山");
;pug_debug_line = 170;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p23", "b", "九份二山");
;pug_debug_line = 171;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p23", "c", "大肚美人山");
}
}, "23", "位於九份的基隆山其別名下列何者為非？");
;pug_debug_line = 173;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["problem"].call({
block: function(){
;pug_debug_line = 174;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p24", "a", "他不知道他是怎麼上來的");
;pug_debug_line = 175;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p24", "b", "高山症發作，一時想不起來");
;pug_debug_line = 176;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p24", "c", "他不確定下一次還要不要上來");
;pug_debug_line = 177;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p24", "d", "他感嘆若跌到谷底，就不會再上來了");
}
}, "24", "當在山頂看著山下，隊友吐出了一句話：「我到底是怎麼上來的」，他的意思是：");
;pug_debug_line = 179;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["problem"].call({
block: function(){
;pug_debug_line = 180;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p25", "a", "預防因打雪仗的情侶造成的失明");
;pug_debug_line = 181;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p25", "b", "預防雪地過強的反光造成的雪盲");
;pug_debug_line = 182;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p25", "c", "避免受到MIB記憶消除器除去記憶");
;pug_debug_line = 183;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p25", "d", "預防雪中行走時遭粉絲推擠而跌倒");
}
}, "25", "雪季登山攜帶墨鏡的原因為何?");
;pug_debug_line = 185;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["problem"].call({
block: function(){
;pug_debug_line = 186;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p26", "a", "體力很好，所以一個人爬也行");
;pug_debug_line = 187;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p26", "b", "方向感好，所以地圖不需要帶");
;pug_debug_line = 188;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p26", "c", "我是晴男，所以不會用到雨衣");
;pug_debug_line = 189;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p26", "d", "意外絕對不會發生在我身上的");
;pug_debug_line = 190;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["radio"]("p26", "e", "迷路時下溪谷是回家唯一的路");
}
}, "加分題: 以下何者是正確的登山觀念?");
;pug_debug_line = 192;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex\"\u003E";
;pug_debug_line = 193;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-dark mr-4\" ld=\"calc\"\u003E";
;pug_debug_line = 193;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "計算分數\u003C\u002Fdiv\u003E";
;pug_debug_line = 194;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-none\" ld=\"calced\"\u003E";
;pug_debug_line = 194;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "你的分數: ";
;pug_debug_line = 194;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cspan class=\"text-danger text-lg font-weight-bold\" ld=\"score\"\u003E";
;pug_debug_line = 194;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "0\u003C\u002Fspan\u003E";
;pug_debug_line = 194;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 196;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Chr\u003E";
;pug_debug_line = 198;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 198;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "評分結果分析與建議\u003C\u002Fh3\u003E";
;pug_debug_line = 199;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex mb-3\"\u003E";
;pug_debug_line = 200;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-right mr-2\" style=\"width:5em;\"\u003E";
;pug_debug_line = 200;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "&nbsp;&nbsp; \u003E 100 –\u003C\u002Fdiv\u003E";
;pug_debug_line = 201;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1\"\u003E";
;pug_debug_line = 201;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "相信你除了基本的登山知識以外，你也具備了相當足夠的KUSO力。下次爬山請務必要找我。";
;pug_debug_line = 201;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 201;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 201;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "建議路線：茶墾、唐穗、南北插\u003C\u002Fb\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 201;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 202;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex mb-3\"\u003E";
;pug_debug_line = 203;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-right mr-2\" style=\"width:5em\"\u003E";
;pug_debug_line = 203;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "60 – 100 –\u003C\u002Fdiv\u003E";
;pug_debug_line = 204;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1\"\u003E";
;pug_debug_line = 204;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "我想你看到繩子會(興奮地)爆衝，在林道上偶而會滑落，基本來說注意安全是重要的。";
;pug_debug_line = 204;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 204;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 204;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "建議路線：死亡稜、卡樓羅、關山大斷崖\u003C\u002Fb\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 204;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 205;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex mb-3\"\u003E";
;pug_debug_line = 206;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-right mr-2\" style=\"width:5em\"\u003E";
;pug_debug_line = 206;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "30 – &nbsp;60 –\u003C\u002Fdiv\u003E";
;pug_debug_line = 207;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1\"\u003E";
;pug_debug_line = 207;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "你可能有些地方還沒搞懂，比方說玉山並不是台灣最難爬的山，還有山屋通常沒有賣泡麵。";
;pug_debug_line = 207;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 207;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 207;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "建議路線：玉山、雪山、合歡山\u003C\u002Fb\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 207;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 208;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex mb-3\"\u003E";
;pug_debug_line = 209;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-right mr-2\" style=\"width:5em\"\u003E";
;pug_debug_line = 209;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "0 – &nbsp;30 –\u003C\u002Fdiv\u003E";
;pug_debug_line = 210;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1\"\u003E";
;pug_debug_line = 210;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "我認為你不該會對這個測驗有興趣才對。百貨公司週年慶快到了，也許你該去注意一下。";
;pug_debug_line = 210;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 210;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 210;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "建議路線：新光三越、中友、漢神百貨\u003C\u002Fb\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 210;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 211;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex mb-3\"\u003E";
;pug_debug_line = 212;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-right mr-2\" style=\"width:5em\"\u003E";
;pug_debug_line = 212;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003C &nbsp;&nbsp;0 –\u003C\u002Fdiv\u003E";
;pug_debug_line = 213;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1\"\u003E";
;pug_debug_line = 213;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "千萬不要去爬山，這對你來說相當危險，對我來說更危險。求你了。";
;pug_debug_line = 213;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 213;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 213;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "建議路線：七股鹽山\u003C\u002Fb\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 213;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 215;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_mixins["script"]("/assets/lib/ldui/ldui.min.js");
;pug_debug_line = 217;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u003Cscript\u003E";
;pug_debug_line = 217;pug_debug_filename = "src\u002Fpug\u002F802.pug";
pug_html = pug_html + "\u002F\u002F Generated by LiveScript 1.3.1\nvar scores, sum, calced, view;\nscores = [[0, 4, 0, 0, 1], [0, -5, 2, 4, 0], [0, -4, 0, 0, 4, 0], [4, 2, -9, -2, 2, 4], [0, 4, 3, 2, 1], [0, -1, 0, 4, -9], [0, 0, -1, 4, 2], [0, 4, 3, 2, 1], [0, 2, 2, 2, 4], [0, -5, -5, 4, -5], [5, 4, 4, 1, 0, -1, -4], [0, -5, 0, -5, 4], [0, -10, 0, 0, 4, -10, -10, 0], [0, -100, 4, 0, -5], [0, -1000, -100, -10, 4, 2], [0, 4, 0, -1, -1, 1], [0, -10, -20, -5, 4], [-5, 0, 0, 0, 4], [0, 0, 0, 0, 4], [0, 0, -4, 4, 4], [0, 4, 0, 1, 0], [0, 4, 2, 0, -2], [0, 0, 4, 0], [0, 4, 2, 3, 1], [0, 4, 4, -4, 0], [0, -10, -15, -25, -50, -100]];\nsum = 0;\ncalced = false;\nview = new ldView({\n  root: document.body,\n  action: {\n    click: {\n      calc: function(){\n        sum = 0;\n        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26].map(function(idx){\n          var ans;\n          ans = 0;\n          ld$.find(\"[name=p\" + idx + \"]\").map(function(o){\n            if (o.checked) {\n              return ans = \"abcdefghijklmnopqrstuvwxyz\".indexOf(o.value) + 1;\n            }\n          });\n          return sum = sum + scores[idx - 1][ans];\n        });\n        calced = true;\n        return view.render();\n      }\n    }\n  },\n  handler: {\n    score: function(arg$){\n      var node;\n      node = arg$.node;\n      return node.innerText = sum || 0;\n    },\n    calced: function(arg$){\n      var node;\n      node = arg$.node;\n      return node.classList.toggle('d-none', !calced);\n    }\n  }\n});\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";}.call(this,"Array" in locals_for_with?locals_for_with.Array:typeof Array!=="undefined"?Array:undefined,"JSON" in locals_for_with?locals_for_with.JSON:typeof JSON!=="undefined"?JSON:undefined,"blockLoader" in locals_for_with?locals_for_with.blockLoader:typeof blockLoader!=="undefined"?blockLoader:undefined,"cssLoader" in locals_for_with?locals_for_with.cssLoader:typeof cssLoader!=="undefined"?cssLoader:undefined,"decache" in locals_for_with?locals_for_with.decache:typeof decache!=="undefined"?decache:undefined,"escape" in locals_for_with?locals_for_with.escape:typeof escape!=="undefined"?escape:undefined,"prefix" in locals_for_with?locals_for_with.prefix:typeof prefix!=="undefined"?prefix:undefined,"scriptLoader" in locals_for_with?locals_for_with.scriptLoader:typeof scriptLoader!=="undefined"?scriptLoader:undefined,"version" in locals_for_with?locals_for_with.version:typeof version!=="undefined"?version:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}; module.exports = template; })() 