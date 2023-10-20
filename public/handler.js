
let DEBUG = false;

let board = new Board(6);
let rules = new Rules(board);
var dragDropInfo = null;

if (window.location.pathname === "/world-1") {
    $.extend({
        getUrlVars: function () {
            let vars = [], pair;
            let pairs = window.location.search.substr(1).split('&');
            for (let i = 0; i < pairs.length; i++) {
                pair = pairs[i].split('=');
                vars.push(pair[0]);
                vars[pair[0]] = pair[1] &&
                    decodeURIComponent(pair[1].replace(/\+/g, ' '));
            }
            return vars;
        },
        getUrlVar: function (name) {
            return $.getUrlVars()[name];
        }
    });

    $(document).ready(function () {
        // Your code here.
        NewGame();

        $(board).on('add', () => {
            console.log("Se la jugue");
        });

        console.log(board)

        setTimeout(() => {
            console.log('board', document.querySelector('.content-game'));



            $(board).on('move', () => {
               console.log("a movernos")
            });
        }, 500)




    });

    // $(board).on('add', function(e, info) {
    //     setTimeout(() => {
    //         let candy = info.candy;
    //         let img = document.createElement("img");
    //         $("#gameBoard").append(img)
    //         console.log($("#gameBoard"))
    //         // if(document.getElementById("gameBoard")) {
    //         //     document.getElementById("gameBoard").append(img)
    //         // }
    //
    //         img.src = "assets/" + candy.color + ".png";
    //
    //         $(img).data("candy", candy);
    //         $(img).attr("id", "candy-id-" + candy.id);
    //
    //         $(img).attr("data-position", candy.col + "-" + candy.row);
    //
    //         let candySize = 320/board.boardSize;
    //
    //         let top = candy.row * candySize;
    //         let left = candy.col * candySize;
    //
    //         let startTop = 0 - ((board.boardSize - (top/candySize)) * candySize);
    //
    //         $(img).css({"width" : candySize,
    //             "height" : candySize,
    //             "top" : startTop,
    //             "left" : left, "position": "absolute"});
    //
    //         $(img).animate({"top" : top}, function(){
    //             Crush();
    //         });
    //     }, 500);
    //     // }
    // });


    $(board).on('move', function (e, info) {
        // Your code here.
        var img = document.getElementById("candy-id-" + info.candy.id);

        $(img).attr("data-position", info.toCol + "-" + info.toRow);

        var candySize = 320 / board.boardSize;

        var top = info.toRow * candySize;
        var left = info.toCol * candySize;

        $(img).animate({
            "top": top,
            "left": left
        }, function () {
            Crush();
        });
    });


// remove a candy from the board
    $(board).on('remove', function (e, info) {
        // Your code here.
        var img = document.getElementById("candy-id-" + info.candy.id);

        //shrink in
        /*
        var candySize = 320/board.boardSize;
        var top = info.fromRow * candySize;
        var left = info.fromCol * candySize;

        $(img).animate({"width" : 0,
                        "height" : 0,
                        "top" : top + candySize/2,
                        "left" : left + candySize/2}, function(){
                            img.parentNode.removeChild(img);
                        });
        */

        //fade out
        $(img).animate({"opacity": 0}, function () {
            img.parentNode.removeChild(img);
        });
    });


// move a candy on the board
    $(board).on('scoreUpdate', function (e, info) {
        // Your code here.
        var scoreLabel = document.getElementById("scoreLabel");

        $(scoreLabel).empty();
        $(scoreLabel).append(info.score + " points");

        if (info.candy != undefined) {
            $(scoreLabel).css("background-color", info.candy.color);

            if (info.candy.color == "yellow") {
                $(scoreLabel).css("color", "gray");
            } else {
                $(scoreLabel).css("color", "white");
            }
        } else {
            $(scoreLabel).css({
                "background-color": "lightgrey",
                "color": "black"
            });
        }
    });


// Button Events
    $(document).on('click', ".btn", function (evt) {
        var id = evt.target.id;

        if (id == "newGame") {
            if ($("img").is(':animated') == false) {
                ClearCanvas();
                NewGame();
            }
        } else if (id == "showMove") {
            if ($("img").is(':animated') == false) {
                ClearCanvas();
                DrawArrow();
            }
        }
    });


// keyboard events arrive here
    $(document).on('keydown', function (evt) {
        // Your code here.
        if (evt.originalEvent.key == "n") {
            ClearCanvas();
            NewGame();
        }
    });

    /*
    $(document).on("touchstart", "#canvas", function(evt){
        var a = parseInt(evt.touches[0].clientX) - (parseInt(evt.target.offsetLeft) + parseInt(evt.target.offsetParent.offsetLeft));
        var b = parseInt(evt.touches[0].clientY) - (parseInt(evt.target.offsetTop) + parseInt(evt.target.offsetParent.offsetTop));

        if (DEBUG){
            console.log(evt);
            console.log(parseInt(evt.touches[0].clientX), "- (", parseInt(evt.target.offsetLeft), "+", parseInt(evt.target.offsetParent.offsetLeft), ") = ", a);
            console.log(parseInt(evt.target.offsetTop), "- (", parseInt(evt.target.offsetParent.offsetTop), "+", parseInt(evt.touches[0].clientY), ") = ", b);

            $("#DEBUG").empty();
            $("#DEBUG").append(" " + a + " " + b);
        }
    });
    */

    $(document).on("mousedown touchstart", "#canvas", function (evt) {
        //ClearCanvas();
        if ($("img").is(':animated') == false) {
            var candySize = 320 / board.boardSize;
            var xCoord, yCoord;

            if (evt.type == "mousedown") {
                xCoord = evt.offsetX;
                yCoord = evt.offsetY;
            } else {
                xCoord = parseInt(evt.touches[0].clientX) - (parseInt(evt.target.offsetLeft) + parseInt(evt.target.offsetParent.offsetLeft));
                yCoord = parseInt(evt.touches[0].clientY) - (parseInt(evt.target.offsetTop) + parseInt(evt.target.offsetParent.offsetTop));

                if (DEBUG) {
                    console.log(evt);
                    console.log(parseInt(evt.changedTouches[0].clientX), "- (", parseInt(evt.target.offsetLeft), "+", parseInt(evt.target.offsetParent.offsetLeft), ") = ", xCoord);
                    console.log(parseInt(evt.changedTouches[0].clientY), "- (", parseInt(evt.target.offsetTop), "+", parseInt(evt.target.offsetParent.offsetTop), ") = ", yCoord);

                    $("#DEBUG").empty();
                    $("#DEBUG").append("s: " + xCoord + " " + yCoord);
                }
            }

            var col = Math.floor(xCoord / candySize);
            var row = Math.floor(yCoord / candySize);

            var img = document.querySelectorAll("[data-position='" + col + "-" + row + "']").item(0);

            if (img != null) {
                $(img).css("z-index", 2);

                var top = parseInt($(img).css("top"));
                var left = parseInt($(img).css("left"));

                dragDropInfo = {
                    candyImg: img,
                    initCol: col,
                    initRow: row,
                    initTop: top,
                    initLeft: left,
                    initXCoord: xCoord,
                    initYCoord: yCoord
                };
            }
        }
    });


    $(document).on("mousemove touchmove", "#canvas", function (evt) {
        if (dragDropInfo != null && $("img").is(':animated') == false) {
            var xCoord, yCoord;

            if (evt.type == "mousemove") {
                xCoord = evt.offsetX;
                yCoord = evt.offsetY;
            } else {
                if (DEBUG) {
                    console.log(evt);
                }

                xCoord = parseInt(evt.touches[0].clientX) - (parseInt(evt.target.offsetLeft) + parseInt(evt.target.offsetParent.offsetLeft));
                yCoord = parseInt(evt.touches[0].clientY) - (parseInt(evt.target.offsetTop) + parseInt(evt.target.offsetParent.offsetTop));
            }

            //console.log(dragDropInfo.originalTop, dragDropInfo.originalLeft, (dragDropInfo.originalTop + evt.offsetX - dragDropInfo.mouseX), (dragDropInfo.originalLeft + evt.offsetY - dragDropInfo.mouseY));
            var top = dragDropInfo.initTop + yCoord - dragDropInfo.initYCoord;
            var left = dragDropInfo.initLeft + xCoord - dragDropInfo.initXCoord;

            $(dragDropInfo.candyImg).css({
                "top": top,
                "left": left
            });
        }
    });


    $(document).on("mouseup touchend", function (evt) {
        if (dragDropInfo != null) {
            ClearCanvas();

            var candySize = 320 / board.boardSize;
            var xCoord, yCoord;

            if (evt.type == "mouseup") {
                xCoord = evt.offsetX;
                yCoord = evt.offsetY;
            } else {
                xCoord = parseInt(evt.changedTouches[0].clientX) - (parseInt(evt.target.offsetLeft) + parseInt(evt.target.offsetParent.offsetLeft));
                yCoord = parseInt(evt.changedTouches[0].clientY) - (parseInt(evt.target.offsetTop) + parseInt(evt.target.offsetParent.offsetTop));

                if (DEBUG) {
                    console.log(evt);
                    console.log(evt.changedTouches);

                    console.log(parseInt(evt.changedTouches[0].clientX), "- (", parseInt(evt.target.offsetLeft), "+", parseInt(evt.target.offsetParent.offsetLeft), ") = ", xCoord);
                    console.log(parseInt(evt.changedTouches[0].clientY), "- (", parseInt(evt.target.offsetTop), "+", parseInt(evt.target.offsetParent.offsetTop), ") = ", yCoord);

                    $("#DEBUG").append(", e: " + xCoord + " " + yCoord);
                }
            }

            var col = Math.floor(xCoord / candySize);
            var row = Math.floor(yCoord / candySize);

            var candy = $(dragDropInfo.candyImg).data("candy");

            //up
            if (dragDropInfo.initCol == col && dragDropInfo.initRow - 1 == row) {
                if (rules.isMoveTypeValid(candy, "up")) {
                    board.flipCandies(candy, board.getCandyInDirection(candy, "up"));
                }
            }
            //down
            else if (dragDropInfo.initCol == col && dragDropInfo.initRow + 1 == row) {
                if (rules.isMoveTypeValid(candy, "down")) {
                    board.flipCandies(candy, board.getCandyInDirection(candy, "down"));
                }
            }
            //left
            else if (dragDropInfo.initCol - 1 == col && dragDropInfo.initRow == row) {
                if (rules.isMoveTypeValid(candy, "left")) {
                    board.flipCandies(candy, board.getCandyInDirection(candy, "left"));
                }
            }
            //right
            else if (dragDropInfo.initCol + 1 == col && dragDropInfo.initRow == row) {
                if (rules.isMoveTypeValid(candy, "right")) {
                    board.flipCandies(candy, board.getCandyInDirection(candy, "right"));
                }
            }
            /*/////////////
            var candy = $(img).data("candy");
            //console.log(candy);
            if(rules.isMoveTypeValid(candy, direction)){
                if(DEBUG){
                    console.log("valid move");
                }
                var candy2 = board.getCandyInDirection(candy, direction);
                board.flipCandies(candy, candy2);
            }
            /*/////////////
            //console.log(col, row);

            $(dragDropInfo.candyImg).css({
                "z-index": 1,
                "top": dragDropInfo.initTop,
                "left": dragDropInfo.initLeft
            });

            dragDropInfo = null;
        }
    });


    function DrawArrow() {
        var validMove = rules.getRandomValidMove();

        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, 320, 320);

        var col = validMove.candy.col;
        var row = validMove.candy.row;

        var candySize = 320 / board.boardSize;
        var squareSize = candySize / 2;

        var x = (col + 1) * candySize - squareSize;
        var y = (row + 1) * candySize - squareSize;

        ctx.fillStyle = "#333333";

        ctx.beginPath();
        if (validMove.direction == "up") {
            ctx.fillRect(x - (squareSize / 2), y - squareSize, squareSize, squareSize);

            ctx.moveTo(x - squareSize, y - squareSize + 1);
            ctx.lineTo(x, y - (2 * squareSize));
            ctx.lineTo(x + squareSize, y - squareSize + 1);
        } else if (validMove.direction == "down") {
            ctx.fillRect(x - (squareSize / 2), y, squareSize, squareSize);

            ctx.moveTo(x + squareSize, y + squareSize - 1);
            ctx.lineTo(x, y + squareSize + squareSize);
            ctx.lineTo(x - squareSize, y + squareSize - 1);
        } else if (validMove.direction == "left") {
            ctx.fillRect(x - squareSize, y - (squareSize / 2), squareSize, squareSize);

            ctx.moveTo(x - squareSize + 1, y - squareSize);
            ctx.lineTo(x - (2 * squareSize), y);
            ctx.lineTo(x - squareSize + 1, y + squareSize);
        } else if (validMove.direction == "right") {
            ctx.fillRect(x, y - (squareSize / 2), squareSize, squareSize);

            ctx.moveTo(x + squareSize - 1, y + squareSize);
            ctx.lineTo(x + (2 * squareSize), y);
            ctx.lineTo(x + squareSize - 1, y - squareSize);
        }
        ctx.closePath();
        ctx.fill();
    }


    function ClearCanvas() {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, 320, 320);
    }


    function Crush() {
        /*
        if(rules.getCandyCrushes().length > 0){
            setTimeout(function(){
                rules.moveCandiesDown();
            }, 500);
        }
        */

        setTimeout(function () {
            rules.moveCandiesDown();
        }, 1000);

        rules.removeCrushes(rules.getCandyCrushes());
    }

    function NewGame() {
        board.clear();
        board.resetScore();
        rules.prepareNewGame();
    }




//     document.getElementById('DOMContentLoaded', () => {
//         console.log("Hola Hola")
//         let DEBUG = false;
// // Math.seedrandom(0);
//
//         $.extend({
//             getUrlVars: function() {
//                 let vars = [], pair;
//                 let pairs = window.location.search.substr(1).split('&');
//                 for (let i = 0; i < pairs.length; i++) {
//                     pair = pairs[i].split('=');
//                     vars.push(pair[0]);
//                     vars[pair[0]] = pair[1] &&
//                         decodeURIComponent(pair[1].replace(/\+/g, ' '));
//                 }
//                 return vars;
//             },
//             getUrlVar: function(name) {
//                 return $.getUrlVars()[name];
//             }
//         });
//
//         var DEFAULT_BOARD_SIZE = 6;
//
//         var board;
//         var rules;
//
//         var dragDropInfo = null;
//
//         board = new Board(6);
//
//
//         rules = new Rules(board);
//
//         let boardGame = null;
//

//
//         /* Event Handlers */
// // access the candy object with info.candy
//
// // add a candy to the board
//         let variable = 0;
//
//
// // move a candy on the board


}