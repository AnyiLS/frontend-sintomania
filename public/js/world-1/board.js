var Board=function(o){var t=0;this.score=0,this.boardSize=o,this.square=Array(this.boardSize);for(var r=0;r<=this.boardSize;r++)this.square[r]=[];this.isValidLocation=function(o,t){return o>=0&&t>=0&&o<=this.boardSize&&t<=this.boardSize&&o==Math.round(o)&&t==Math.round(t)},this.isEmptyLocation=function(o,t){return!this.getCandyAt(o,t)},this.doAutoMove=function(){var o=rules.getRandomValidMove(),t=board.getCandyInDirection(o.candy,o.direction);this.flipCandies(o.candy,t)},this.getSize=function(){return this.boardSize},this.getCandyAt=function(o,t){if(this.isValidLocation(o,t))return this.square[o][t]},this.getLocationOf=function(o){return{row:o.row,col:o.col}},this.getAllCandies=function(){var o=[];for(var t in this.square)for(var r in this.square[t])this.square[t][r]&&o.push(this.square[t][r]);return o},this.add=function(o,t,r,i,e){this.isEmptyLocation(t,r)?(o.row=t,o.col=r,this.square[t][r]=o,$(this).triggerHandler("add",{candy:o,toRow:t,toCol:r,fromRow:i,fromCol:e})):console.log("add already found a candy at "+t+","+r)},this.moveTo=function(o,t,r){if(this.isEmptyLocation(t,r)){var i={candy:o,toRow:t,toCol:r,fromRow:o.row,fromCol:o.col};delete this.square[o.row][o.col],this.square[t][r]=o,o.row=t,o.col=r,$(this).triggerHandler("move",i)}};let i={};this.remove=function(o){if(i.id&&o.id!==i.id){var t={candy:o,fromRow:o.row,fromCol:o.col,restImage:{...i,delete:!0,color:i.color}};i=o,delete this.square[o.row][o.col],o.row=o.col=null,$(this).triggerHandler("remove",t)}else{var t={candy:o,fromRow:o.row,fromCol:o.col};i=o,delete this.square[o.row][o.col],o.row=o.col=null,$(this).triggerHandler("remove",t)}},this.removeAt=function(o,t){this.isEmptyLocation(o,t)?console.log("removeAt found no candy at "+o+","+t):this.remove(this.square[o][t])},this.clear=function(){for(var o in this.square)for(var t in this.square[o])this.square[o][t]&&this.removeAt(o,t)},this.addCandy=function(o,r,i,e,n){var s=new Candy(o,t++);this.add(s,r,i,e,n)},this.addRandomCandy=function(o,r,i,e){let n=window.location.pathname.split("/")[2];var s=Math.floor(Math.random()*Candy[`colors${n}`].length),a=new Candy(Candy[`colors${n}`][s],t++);this.add(a,o,r,i,e)},this.getCandyInDirection=function(o,t){switch(t){case"up":return this.getCandyAt(o.row-1,o.col);case"down":return this.getCandyAt(o.row+1,o.col);case"left":return this.getCandyAt(o.row,o.col-1);case"right":return this.getCandyAt(o.row,o.col+1)}},this.flipCandies=function(o,t){var r={candy:o,toRow:t.row,toCol:t.col,fromRow:o.row,fromCol:o.col},i={candy:t,toRow:o.row,toCol:o.col,fromRow:t.row,fromCol:t.col};o.row=r.toRow,o.col=r.toCol,this.square[r.toRow][r.toCol]=o,t.row=i.toRow,t.col=i.toCol,this.square[i.toRow][i.toCol]=t,$(this).triggerHandler("move",r),$(this).triggerHandler("move",i)},this.resetScore=function(){this.score=0,$(this).triggerHandler("scoreUpdate",[{score:0}])},this.incrementScore=function(o,t,r){this.score+=25,$(this).triggerHandler("scoreUpdate",[{score:this.score,candy:o,row:t,col:r},])},this.getScore=function(){return this.score},this.toString=function(){for(var o="",t=0;t<this.boardSize;++t){for(var r=0;r<this.boardSize;++r){var i=this.square[t][r];i?o+=i.toString().charAt(0)+" ":o+="_ "}o+="<br/>"}return o.toString()}};