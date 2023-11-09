var Rules4=function(r){var e=!1;this.prepareNewGame=function(){for(e=!1;;){this.populateBoard();var r=this.getCandyCrushes();if(0==r.length)break;this.removeCrushes(r)}e=!0},this.isMoveTypeValid=function(r,e){return this.numberCandiesCrushedByMove(r,e)>0},this.getCandyCrushes=function(e){var n,o,a={},t={};function d(r){var e=a[r];return null==e?r:(e=d(e),a[r]=e,e)}function u(r){return t[r]||1}function f(r,e){var n=d(r),o=d(e);if(n==o)return n;a[o]=n,t[n]=u(n)+u(o),delete t[o]}for(var s=this.findColorStrips(!0,e),v=this.findColorStrips(!1,e),h=s.concat(v),l=0;l<h.length;l++)for(var c=h[l],C=1;C<c.length;C++)f(c[0].id,c[C].id);var g={};for(n=0;n<r.boardSize;n++)for(o=0;o<r.boardSize;o++){var $=r.getCandyAt(n,o);if($){var p=d($.id);u(p)>=3&&(p in g||(g[p]=[]),g[p].push($))}}var b=[];for(var y in g)b.push(g[y]);return b},this.removeCrushes=function(n){for(var o=0;o<n.length;o++)for(var a=n[o],t=0;t<a.length;t++)e&&r.incrementScore(a[t],a[t].row,a[t].col),r.remove(a[t])},this.moveCandiesDown=function(){for(var e=0;e<r.boardSize;e++){for(var n=null,n=r.boardSize-1;n>=0&&null!=r.getCandyAt(n,e);n--);for(var o=n-1;o>=0;o--){var a=r.getCandyAt(o,e);null!=a&&(r.moveTo(a,n,e),n--)}for(var t=-1;n>=0;n--,t--)r.addRandomCandy(n,e,t,e)}},this.getRandomValidMove=function(){for(var e=["up","down","left","right"],n=[],o=[],a=0;a<r.boardSize;a++)for(var t=0;t<r.boardSize;t++){var d=r.getCandyAt(a,t);if(d)for(i=0;i<4;i++){var u=e[i],f=this.numberCandiesCrushedByMove(d,u);3==f?n.push({candy:d,direction:u}):f>3&&o.push({candy:d,direction:u})}}var s=n.length?n:o;return 0==s.length?null:s[Math.floor(Math.random()*s.length)]},this.createSpecifiedBoard=function(e){color_dict={r:"red",o:"orange",y:"yellow",g:"green",b:"blue",p:"purple"};var n=0;if(e.map(function(r){return n+=r.length}),e.length!=r.boardSize||n!=Math.pow(r.boardSize,2)){console.warn("boardSpec must be of dimensions boardSize x boardSize to populate board");return}for(var o=0;o<r.boardSize;o++)for(var a=0;a<r.boardSize;a++)if(null==r.getCandyAt(a,o)){var t=color_dict[e[a].charAt(o)];r.addCandy(t,a,o)}},this.populateBoard=function(){for(var e=0;e<r.boardSize;e++)for(var n=0;n<r.boardSize;n++)null==r.getCandyAt(n,e)&&r.addRandomCandy(n,e)},this.numberCandiesCrushedByMove=function(r,e){return this.getCandiesToCrushGivenMove(r,e).length},this.getCandiesToCrushGivenMove=function(e,n){var o=r.getCandyInDirection(e,n);if(!o||o.color==e.color)return[];var a=[e,o],t=this.getCandyCrushes(a).filter(function(r){for(var e=0;e<a.length;e++)if(r.indexOf(a[e])>=0)return!0;return!1});return[].concat.apply([],t)},this.findColorStrips=function(e,n){for(var o=function(o,a){var t=e?r.getCandyAt(a,o):r.getCandyAt(o,a);if(n){var d=n.indexOf(t);if(d>=0)return n[1^d]}return t},a=[],t=0;t<r.boardSize;t++)for(var d,u=0;u<r.boardSize;u=d){var f=o(t,u);if(d=u+1,f){for(var s=[f];d<r.boardSize;d++){var v=o(t,d);if(!v||v.color!=f.color)break;s.push(v)}s.length>=3&&a.push(s)}}return a}};