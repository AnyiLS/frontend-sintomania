if (window.location.pathname.includes("/world-4")) {
    setTimeout(() => {
        let DEBUG = false;

        // By default, the first board loaded by your page will be the same
        // each time you load (which is accomplished by "seeding" the random
        // number generator. This makes testing (and grading!) easier!
        Math.seedrandom(0);

        // A short jQuery extension to read query parameters from the URL.
        $.extend({
            getUrllets: function () {
                let lets = [],
                    pair;
                let pairs = window.location.search.substr(1).split("&");
                for (let i = 0; i < pairs.length; i++) {
                    pair = pairs[i].split("=");
                    lets.push(pair[0]);
                    lets[pair[0]] =
                        pair[1] &&
                        decodeURIComponent(pair[1].replace(/\+/g, " "));
                }
                return lets;
            },
            getUrllet: function (name) {
                return $.getUrllets()[name];
            },
        });

        // constants
        let DEFAULT_BOARD_SIZE = 6;

        // data model at global scope for easier debugging
        let board;
        let rules;
        let cat = 6;
        let sun = 10;
        let bacterium = 10;
        let apple = 10;

        let dragDropInfo = null;

        // initialize board
        if (
            $.getUrllet("size") &&
            $.getUrllet("size") >= 3 &&
            $.getUrllet("size") <= 20
        ) {
            board = new Board4($.getUrllet("size"));
        } else {
            board = new Board4(DEFAULT_BOARD_SIZE);
        }

        // load a rule
        rules = new Rules4(board);

        // Final initialization entry point: the Javascript code inside this block
        // runs at the end of start-up when the page has finished loading.
        $(document).ready(function () {
            // Your code here.
            NewGame();
            localStorage.setItem("cat", JSON.stringify(6));
            localStorage.setItem("sun", JSON.stringify(10));
            localStorage.setItem("bacterium", JSON.stringify(10));
            localStorage.setItem("apple", JSON.stringify(10));
            localStorage.setItem("flower", JSON.stringify(5));
            localStorage.setItem("nube", JSON.stringify(5));

            document.getElementById("cat-counter").innerText = cat;
            document.getElementById("sun-counter").innerText = sun;
            document.getElementById("bacterium-counter").innerText = bacterium;
            document.getElementById("apple-counter").innerText = apple

            document.getElementById("score").innerText = 0;
            $("#clear").trigger("load");
            if (DEBUG) {
                let div = document.createElement("div");
                $(div).attr("id", "DEBUG");
                $("body").append(div);
            }
        });

        /* Event Handlers */
        // access the candy object with info.candy

        // add a candy to the board
        $(board).on("add", function (e, info) {
            // Your code here.
            let candy = info.candy;
            let img = document.createElement("img");

            $("#gameBoard").append(img);
            if(info.candy.color === "nube" || info.candy.color === "flower") {
                img.src = "https://juegoseml.co/images-recover/" + candy.toString() + "-green.gif";
            } else {
                img.src = "https://juegoseml.co/images-recover/" + candy.toString() + "-green-static.webp";
            }

            

            $(img).data("candy", candy);
            $(img).attr("id", "candy-id-" + candy.id);

            $(img).attr("data-position", candy.col + "-" + candy.row);

            let candySize;

            if (window.innerWidth > 819) {
                candySize = 650 / board.boardSize;
            } else if (window.innerWidth > 767) {
                candySize = 550 / board.boardSize;
            } else if (window.innerWidth > 400) {
                candySize = 410 / board.boardSize;
            } else if (window.innerWidth > 360) {
                candySize = 360 / board.boardSize;
            } else {
                candySize = 360 / board.boardSize;
            }
            let candySizeHeight =
            document.getElementById("canvas") ? document.getElementById("canvas").clientHeight : 0  /
                board.boardSize;

            let top = candy.row * candySize;
            let left = candy.col * candySize;

            let startTop = 0 - (board.boardSize - top / candySize) * candySize;

            $(img).css({
                width: candySize,
                height: candySize,
                top: startTop,
                left: left,
                position: "absolute",
            });

            $(img).animate({ top: top }, function () {
                Crush();
            });
        });

        let isMove = false;

        // move a candy on the board
        $(board).on("move", function (e, info) {
            // Your code here.
            let img = document.getElementById("candy-id-" + info.candy.id);

            $(img).attr("data-position", info.toCol + "-" + info.toRow);

            let candySize;

            if (window.innerWidth > 819) {
                candySize = 650 / board.boardSize;
            } else if (window.innerWidth > 767) {
                candySize = 550 / board.boardSize;
            } else if (window.innerWidth > 400) {
                candySize = 410 / board.boardSize;
            } else if (window.innerWidth > 360) {
                candySize = 360 / board.boardSize;
            } else {
                candySize = 360 / board.boardSize;
            }

            isMove = true;

            let top = info.toRow * candySize;
            let left = info.toCol * candySize;

            $(img).animate({ top: top, left: left }, function () {
                Crush();
            });
        });


        let color = "";
        // remove a candy from the board
        $(board).on("remove", function (e, info) {
            if (info.candy.color === "cat") {
                let value = parseInt(JSON.parse(localStorage.getItem("cat")));
                if (value - 1 <= 0) {
                    document.getElementById("cat-counter").innerText = 0;
                    localStorage.setItem("cat", JSON.stringify(0));
                } else {
                    document.getElementById("cat-counter").innerText =
                        value - 1;
                    localStorage.setItem("cat", JSON.stringify(value - 1));
                }
            } else if (info.candy.color === "sun") {
                let value = parseInt(JSON.parse(localStorage.getItem("sun")));
                if (value - 1 <= 0) {
                    document.getElementById("sun-counter").innerText = 0;
                    localStorage.setItem("sun", JSON.stringify(0));
                } else {
                    document.getElementById("sun-counter").innerText =
                        value - 1;
                    localStorage.setItem("sun", JSON.stringify(value - 1));
                }
            } else if (info.candy.color === "bacterium") {
                let value = parseInt(
                    JSON.parse(localStorage.getItem("bacterium"))
                );
                if (value - 1 <= 0) {
                    document.getElementById("bacterium-counter").innerText = 0;
                    localStorage.setItem("bacterium", JSON.stringify(0));
                } else {
                    document.getElementById("bacterium-counter").innerText =
                        value - 1;
                    localStorage.setItem(
                        "bacterium",
                        JSON.stringify(value - 1)
                    );
                }
            } else if (info.candy.color === "nube") {
                let value = parseInt(
                    JSON.parse(localStorage.getItem("nube"))
                );
                if (value - 1 <= 0) {
                    // document.getElementById("bacterium-counter").innerText = 0;
                    localStorage.setItem("nube", JSON.stringify(0));
                } else {
                    // document.getElementById("bacterium-counter").innerText =
                    //     value - 1;
                    localStorage.setItem(
                        "nube",
                        JSON.stringify(value - 1)
                    );
                }
            } else if (info.candy.color === "flower") {
                let value = parseInt(
                    JSON.parse(localStorage.getItem("flower"))
                );
                if (value - 1 <= 0) {
                    // document.getElementById("bacterium-counter").innerText = 0;
                    localStorage.setItem("flower", JSON.stringify(0));
                } else {
                    // document.getElementById("bacterium-counter").innerText =
                    //     value - 1;
                    localStorage.setItem(
                        "flower",
                        JSON.stringify(value - 1)
                    );
                }
            } else {
                let value = parseInt(JSON.parse(localStorage.getItem("apple")));
                if (value - 1 <= 0) {
                    document.getElementById("apple-counter").innerText = 0;
                    localStorage.setItem("apple", JSON.stringify(0));
                } else {
                    document.getElementById("apple-counter").innerText =
                        value - 1;
                    localStorage.setItem("apple", JSON.stringify(value - 1));
                }
            }

            let cat = parseInt(JSON.parse(localStorage.getItem("cat")));
            let sun = parseInt(JSON.parse(localStorage.getItem("sun")));
            let bacterium = parseInt(
                JSON.parse(localStorage.getItem("bacterium"))
            );
            let apple = parseInt(JSON.parse(localStorage.getItem("apple")));
            let flower = parseInt(JSON.parse(localStorage.getItem("flower")));
            let nube = parseInt(JSON.parse(localStorage.getItem("nube")));

            if (cat === 0 && sun === 0 && bacterium === 0 && apple === 0 && flower === 0 && nube === 0) {
                setTimeout(() => {
                    localStorage.setItem(
                        'score',
                        JSON.stringify(this.getScore())
                    );
                    const date = new Date();
                    date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);

                    document.cookie =
                        'score' +
                        '=' +
                        this.getScore() +
                        ';' +
                        'expires=' +
                        date.toUTCString() +
                        ';path=/';
                }, 8000);
            }

            // miFuncion(info.candy.color)

            // Your code here.
            let img = document.getElementById("candy-id-" + info.candy.id);

            $("#desler").fadeIn('slow');

            setTimeout(() => {
                $("#desler").fadeOut('slow');
            }, 2000)

            //fade out
            $(img).animate({ opacity: 0 }, function () {
                img.parentNode.removeChild(img);
            });
        });

        // move a candy on the board
        $(board).on("scoreUpdate", function (e, info) {
            if(document.getElementById("score")) {
                document.getElementById("score").innerText = info.score;
            }
            
        });

        // Button Events
        $(document).on("click", ".btn", function (evt) {
            let id = evt.target.id;

            if (id == "newGame") {
                if ($("img").is(":animated") == false) {
                    ClearCanvas();
                    NewGame();
                }
            } else if (id == "showMove") {
                if ($("img").is(":animated") == false) {
                    ClearCanvas();
                    DrawArrow();
                }
            }
        });

        // keyboard events arrive here
        $(document).on("keydown", function (evt) {
            // Your code here.
            if (evt.originalEvent.key == "n") {
                ClearCanvas();
                NewGame();
            }
        });

        /*
        $(document).on("touchstart", "#canvas", function(evt){
            let a = parseInt(evt.touches[0].clientX) - (parseInt(evt.target.offsetLeft) + parseInt(evt.target.offsetParent.offsetLeft));
            let b = parseInt(evt.touches[0].clientY) - (parseInt(evt.target.offsetTop) + parseInt(evt.target.offsetParent.offsetTop));
            
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
            if ($("img").is(":animated") == false) {
                let candySize;

                if (window.innerWidth > 819) {
                    candySize = 650 / board.boardSize;
                } else if (window.innerWidth > 767) {
                    candySize = 550 / board.boardSize;
                } else if (window.innerWidth > 400) {
                    candySize = 410 / board.boardSize;
                } else if (window.innerWidth > 360) {
                    candySize = 360 / board.boardSize;
                } else {
                    candySize = 360 / board.boardSize;
                }
                let xCoord, yCoord;

                if (evt.type == "mousedown") {
                    xCoord = evt.offsetX;
                    yCoord = evt.offsetY;
                } else {
                    xCoord =
                        parseInt(evt.touches[0].clientX) -
                        (parseInt(evt.target.offsetLeft) +
                            parseInt(evt.target.offsetParent.offsetLeft));
                    yCoord =
                        parseInt(evt.touches[0].clientY) -
                        (parseInt(evt.target.offsetTop) +
                            parseInt(evt.target.offsetParent.offsetTop));

                    if (DEBUG) {
                        console.log(
                            parseInt(evt.changedTouches[0].clientX),
                            "- (",
                            parseInt(evt.target.offsetLeft),
                            "+",
                            parseInt(evt.target.offsetParent.offsetLeft),
                            ") = ",
                            xCoord
                        );
                        console.log(
                            parseInt(evt.changedTouches[0].clientY),
                            "- (",
                            parseInt(evt.target.offsetTop),
                            "+",
                            parseInt(evt.target.offsetParent.offsetTop),
                            ") = ",
                            yCoord
                        );

                        $("#DEBUG").empty();
                        $("#DEBUG").append("s: " + xCoord + " " + yCoord);
                    }
                }

                let col = Math.floor(xCoord / candySize);
                let row = Math.floor(yCoord / candySize);

                let img = document
                    .querySelectorAll(
                        "[data-position='" + col + "-" + row + "']"
                    )
                    .item(0);

                if (img != null) {
                    $(img).css("z-index", 2);

                    let top = parseInt($(img).css("top"));
                    let left = parseInt($(img).css("left"));

                    dragDropInfo = {
                        candyImg: img,
                        initCol: col,
                        initRow: row,
                        initTop: top,
                        initLeft: left,
                        initXCoord: xCoord,
                        initYCoord: yCoord,
                    };
                }
            }
        });

        $(document).on("mousemove touchmove", "#canvas", function (evt) {
            if (dragDropInfo != null && $("img").is(":animated") == false) {
                let xCoord, yCoord;

                if (evt.type == "mousemove") {
                    xCoord = evt.offsetX;
                    yCoord = evt.offsetY;
                } else {
                    if (DEBUG) {
                        console.log(evt);
                    }

                    xCoord =
                        parseInt(evt.touches[0].clientX) -
                        (parseInt(evt.target.offsetLeft) +
                            parseInt(evt.target.offsetParent.offsetLeft));
                    yCoord =
                        parseInt(evt.touches[0].clientY) -
                        (parseInt(evt.target.offsetTop) +
                            parseInt(evt.target.offsetParent.offsetTop));
                }

                //console.log(dragDropInfo.originalTop, dragDropInfo.originalLeft, (dragDropInfo.originalTop + evt.offsetX - dragDropInfo.mouseX), (dragDropInfo.originalLeft + evt.offsetY - dragDropInfo.mouseY));
                let top =
                    dragDropInfo.initTop + yCoord - dragDropInfo.initYCoord;
                let left =
                    dragDropInfo.initLeft + xCoord - dragDropInfo.initXCoord;

                $(dragDropInfo.candyImg).css({ top: top, left: left });
            }
        });

        $(document).on("mouseup touchend", function (evt) {
            if (dragDropInfo != null) {
                ClearCanvas();

                let candySize;

                if (window.innerWidth > 819) {
                    candySize = 650 / board.boardSize;
                } else if (window.innerWidth > 767) {
                    candySize = 550 / board.boardSize;
                } else if (window.innerWidth > 400) {
                    candySize = 410 / board.boardSize;
                } else if (window.innerWidth > 360) {
                    candySize = 360 / board.boardSize;
                } else {
                    candySize = 360 / board.boardSize;
                }
                let xCoord, yCoord;

                if (evt.type == "mouseup") {
                    xCoord = evt.offsetX;
                    yCoord = evt.offsetY;
                } else {
                    xCoord =
                        parseInt(evt.changedTouches[0].clientX) -
                        (parseInt(evt.target.offsetLeft) +
                            parseInt(evt.target.offsetParent.offsetLeft));
                    yCoord =
                        parseInt(evt.changedTouches[0].clientY) -
                        (parseInt(evt.target.offsetTop) +
                            parseInt(evt.target.offsetParent.offsetTop));

                    if (DEBUG) {
                        console.log(evt);
                        console.log(evt.changedTouches);

                        console.log(
                            parseInt(evt.changedTouches[0].clientX),
                            "- (",
                            parseInt(evt.target.offsetLeft),
                            "+",
                            parseInt(evt.target.offsetParent.offsetLeft),
                            ") = ",
                            xCoord
                        );
                        console.log(
                            parseInt(evt.changedTouches[0].clientY),
                            "- (",
                            parseInt(evt.target.offsetTop),
                            "+",
                            parseInt(evt.target.offsetParent.offsetTop),
                            ") = ",
                            yCoord
                        );

                        $("#DEBUG").append(", e: " + xCoord + " " + yCoord);
                    }
                }

                let col = Math.floor(xCoord / candySize);
                let row = Math.floor(yCoord / candySize);

                let candy = $(dragDropInfo.candyImg).data("candy");

                //up
                if (
                    dragDropInfo.initCol == col &&
                    dragDropInfo.initRow - 1 == row
                ) {
                    if (rules.isMoveTypeValid(candy, "up")) {
                        board.flipCandies(
                            candy,
                            board.getCandyInDirection(candy, "up")
                        );
                    }
                }
                //down
                else if (
                    dragDropInfo.initCol == col &&
                    dragDropInfo.initRow + 1 == row
                ) {
                    if (rules.isMoveTypeValid(candy, "down")) {
                        board.flipCandies(
                            candy,
                            board.getCandyInDirection(candy, "down")
                        );
                    }
                }
                //left
                else if (
                    dragDropInfo.initCol - 1 == col &&
                    dragDropInfo.initRow == row
                ) {
                    if (rules.isMoveTypeValid(candy, "left")) {
                        board.flipCandies(
                            candy,
                            board.getCandyInDirection(candy, "left")
                        );
                    }
                }
                //right
                else if (
                    dragDropInfo.initCol + 1 == col &&
                    dragDropInfo.initRow == row
                ) {
                    if (rules.isMoveTypeValid(candy, "right")) {
                        board.flipCandies(
                            candy,
                            board.getCandyInDirection(candy, "right")
                        );
                    }
                }
                /*/////////////
                let candy = $(img).data("candy");
                //console.log(candy);
                if(rules.isMoveTypeValid(candy, direction)){
                    if(DEBUG){
                        console.log("valid move");
                    }
                    let candy2 = board.getCandyInDirection(candy, direction);
                    board.flipCandies(candy, candy2);
                }
                /*/ ////////////
                //console.log(col, row);

                $(dragDropInfo.candyImg).css({
                    "z-index": 1,
                    top: dragDropInfo.initTop,
                    left: dragDropInfo.initLeft,
                });

                dragDropInfo = null;
            }
        });

        // Functions
        function DrawArrow() {
            let validMove = rules.getRandomValidMove();

            let canvas = document.getElementById("canvas");
            let ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, 650, 650);

            let col = validMove.candy.col;
            let row = validMove.candy.row;

            let candySize;

            if (window.innerWidth > 819) {
                candySize = 650 / board.boardSize;
            } else if (window.innerWidth > 767) {
                candySize = 550 / board.boardSize;
            } else if (window.innerWidth > 400) {
                candySize = 410 / board.boardSize;
            } else if (window.innerWidth > 360) {
                candySize = 360 / board.boardSize;
            } else {
                candySize = 360 / board.boardSize;
            }
            let squareSize = candySize / 2;

            let x = (col + 1) * candySize - squareSize;
            let y = (row + 1) * candySize - squareSize;

            ctx.fillStyle = "#333333";

            ctx.beginPath();
            if (validMove.direction == "up") {
                ctx.fillRect(
                    x - squareSize / 2,
                    y - squareSize,
                    squareSize,
                    squareSize
                );

                ctx.moveTo(x - squareSize, y - squareSize + 1);
                ctx.lineTo(x, y - 2 * squareSize);
                ctx.lineTo(x + squareSize, y - squareSize + 1);
            } else if (validMove.direction == "down") {
                ctx.fillRect(x - squareSize / 2, y, squareSize, squareSize);

                ctx.moveTo(x + squareSize, y + squareSize - 1);
                ctx.lineTo(x, y + squareSize + squareSize);
                ctx.lineTo(x - squareSize, y + squareSize - 1);
            } else if (validMove.direction == "left") {
                ctx.fillRect(
                    x - squareSize,
                    y - squareSize / 2,
                    squareSize,
                    squareSize
                );

                ctx.moveTo(x - squareSize + 1, y - squareSize);
                ctx.lineTo(x - 2 * squareSize, y);
                ctx.lineTo(x - squareSize + 1, y + squareSize);
            } else if (validMove.direction == "right") {
                ctx.fillRect(x, y - squareSize / 2, squareSize, squareSize);

                ctx.moveTo(x + squareSize - 1, y + squareSize);
                ctx.lineTo(x + 2 * squareSize, y);
                ctx.lineTo(x + squareSize - 1, y - squareSize);
            }
            ctx.closePath();
            ctx.fill();
        }

        function ClearCanvas() {
            let canvas = document.getElementById("canvas");
            let ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, 650, 650);
        }

        function Crush() {
            /*
            if(rules.getCandyCrushes().length > 0){
                setTimeout(function(){
                    rules.moveCandiesDown();
                }, 650);
            }
            */

            setTimeout(function () {
                rules.moveCandiesDown();
            }, 500);

            rules.removeCrushes(rules.getCandyCrushes());
        }

        function NewGame() {
            board.clear();
            board.resetScore();
            rules.prepareNewGame();
        }
    }, 2000);
}
