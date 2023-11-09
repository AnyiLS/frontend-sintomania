window.location.pathname.includes('/world-1') &&
    setTimeout(() => {
        let e = !1;
        $.extend({
            getUrllets: function () {
                let e = [],
                    t,
                    n = window.location.search.substr(1).split('&');
                for (let i = 0; i < n.length; i++)
                    (t = n[i].split('=')),
                        e.push(t[0]),
                        (e[t[0]] =
                            t[1] &&
                            decodeURIComponent(t[1].replace(/\+/g, ' ')));
                return e;
            },
            getUrllet: function (e) {
                return $.getUrllets()[e];
            },
        });
        let t = 6,
            n,
            i,
            o = 8,
            r = 18,
            a = 10,
            l = 16,
            s = null;
        (n = new Board(
            $.getUrllet('size') &&
            $.getUrllet('size') >= 3 &&
            20 >= $.getUrllet('size')
                ? $.getUrllet('size')
                : t
        )),
            (i = new Rules(n));
        let c = null;
        $(document).ready(function () {
            if (
                ((c = new Audio(
                    'https://juegoseml.co/images-recover/sonidos/arastrar.wav'
                )),
                u(),
                localStorage.setItem('cat', JSON.stringify(8)),
                localStorage.setItem('sun', JSON.stringify(18)),
                localStorage.setItem('bacterium', JSON.stringify(10)),
                localStorage.setItem('apple', JSON.stringify(16)),
                (document.getElementById('cat-counter').innerText = o),
                (document.getElementById('sun-counter').innerText = r),
                (document.getElementById('bacterium-counter').innerText = a),
                (document.getElementById('apple-counter').innerText = l),
                (document.getElementById('score').innerText = 0),
                $('#clear').trigger('load'),
                e)
            ) {
                let t = document.createElement('div');
                $(t).attr('id', 'DEBUG'), $('body').append(t);
            }
        }),
            $(n).on('add', function (e, t) {
                let i = t.candy,
                    o = document.createElement('img');

                    $('#desler').fadeIn('slow');

                    setTimeout(() => {
                        $('#desler').fadeOut('slow');
                    }, 200)
                $('#gameBoard').append(o),
                    (o.src =
                        'https://juegoseml.co/images-recover/' +
                        i.toString() +
                        '.webp'),
                    $(o).data('candy', i),
                    $(o).attr('id', 'candy-id-' + i.id),
                    $(o).attr('data-position', i.col + '-' + i.row);
                let r;
                window.innerWidth > 819
                    ? (r = 650 / n.boardSize)
                    : window.innerWidth > 767
                    ? (r = 550 / n.boardSize)
                    : window.innerWidth > 400
                    ? (r = 410 / n.boardSize)
                    : (window.innerWidth, (r = 360 / n.boardSize)),
                    document.getElementById('canvas') &&
                        document.getElementById('canvas').clientHeight,
                    document.height,
                    n.boardSize;
                let a = i.row * r,
                    l = i.col * r,
                    s = 0 - (n.boardSize - a / r) * r;
                $(o).css({
                    width: r,
                    height: r,
                    top: s,
                    left: l,
                    position: 'absolute',
                }),
                    $(o).animate({ top: a }, function () {
                        m();
                    });
            });
        let d = !1;
        function f() {
            let e = i.getRandomValidMove(),
                t = document.getElementById('canvas').getContext('2d');
            t.clearRect(0, 0, 650, 650);
            let o = e.candy.col,
                r = e.candy.row,
                a;
            window.innerWidth > 819
                ? (a = 650 / n.boardSize)
                : window.innerWidth > 767
                ? (a = 550 / n.boardSize)
                : window.innerWidth > 400
                ? (a = 410 / n.boardSize)
                : (window.innerWidth, (a = 360 / n.boardSize));
            let l = a / 2,
                s = (o + 1) * a - l,
                c = (r + 1) * a - l;
            (t.fillStyle = '#333333'),
                t.beginPath(),
                'up' == e.direction
                    ? (t.fillRect(s - l / 2, c - l, l, l),
                      t.moveTo(s - l, c - l + 1),
                      t.lineTo(s, c - 2 * l),
                      t.lineTo(s + l, c - l + 1))
                    : 'down' == e.direction
                    ? (t.fillRect(s - l / 2, c, l, l),
                      t.moveTo(s + l, c + l - 1),
                      t.lineTo(s, c + l + l),
                      t.lineTo(s - l, c + l - 1))
                    : 'left' == e.direction
                    ? (t.fillRect(s - l, c - l / 2, l, l),
                      t.moveTo(s - l + 1, c - l),
                      t.lineTo(s - 2 * l, c),
                      t.lineTo(s - l + 1, c + l))
                    : 'right' == e.direction &&
                      (t.fillRect(s, c - l / 2, l, l),
                      t.moveTo(s + l - 1, c + l),
                      t.lineTo(s + 2 * l, c),
                      t.lineTo(s + l - 1, c - l)),
                t.closePath(),
                t.fill();
        }
        function g() {
            document
                .getElementById('canvas')
                .getContext('2d')
                .clearRect(0, 0, 650, 650);
        }
        function m() {
            setTimeout(function () {
                i.moveCandiesDown();
            }, 500),
                i.removeCrushes(i.getCandyCrushes());
        }
        function u() {
            n.clear(), n.resetScore(), i.prepareNewGame();
        }
        $(n).on('move', function (e, t) {
            let i = document.getElementById('candy-id-' + t.candy.id);
            $(i).attr('data-position', t.toCol + '-' + t.toRow);
            let o;
            window.innerWidth > 819
                ? (o = 650 / n.boardSize)
                : window.innerWidth > 767
                ? (o = 550 / n.boardSize)
                : window.innerWidth > 400
                ? (o = 410 / n.boardSize)
                : (window.innerWidth, (o = 360 / n.boardSize)),
                (d = !0);
            let r = t.toRow * o,
                a = t.toCol * o;
            $(i).animate({ top: r, left: a }, function () {
                m();
            });
        }),
            $(n).on('remove', function (e, t) {
                if (document.getElementById('cat-counter')) {
                    if ('cat' === t.candy.color) {
                        let n = parseInt(
                            JSON.parse(localStorage.getItem('cat'))
                        );
                        n - 1 <= 0
                            ? ((document.getElementById(
                                  'cat-counter'
                              ).innerText = 0),
                              localStorage.setItem('cat', JSON.stringify(0)))
                            : ((document.getElementById(
                                  'cat-counter'
                              ).innerText = n - 1),
                              localStorage.setItem(
                                  'cat',
                                  JSON.stringify(n - 1)
                              ));
                    } else if ('sun' === t.candy.color) {
                        let i = parseInt(
                            JSON.parse(localStorage.getItem('sun'))
                        );
                        i - 1 <= 0
                            ? ((document.getElementById(
                                  'sun-counter'
                              ).innerText = 0),
                              localStorage.setItem('sun', JSON.stringify(0)))
                            : ((document.getElementById(
                                  'sun-counter'
                              ).innerText = i - 1),
                              localStorage.setItem(
                                  'sun',
                                  JSON.stringify(i - 1)
                              ));
                    } else if ('bacterium' === t.candy.color) {
                        let o = parseInt(
                            JSON.parse(localStorage.getItem('bacterium'))
                        );
                        o - 1 <= 0
                            ? ((document.getElementById(
                                  'bacterium-counter'
                              ).innerText = 0),
                              localStorage.setItem(
                                  'bacterium',
                                  JSON.stringify(0)
                              ))
                            : ((document.getElementById(
                                  'bacterium-counter'
                              ).innerText = o - 1),
                              localStorage.setItem(
                                  'bacterium',
                                  JSON.stringify(o - 1)
                              ));
                    } else {
                        let r = parseInt(
                            JSON.parse(localStorage.getItem('apple'))
                        );
                        r - 1 <= 0
                            ? ((document.getElementById(
                                  'apple-counter'
                              ).innerText = 0),
                              localStorage.setItem('apple', JSON.stringify(0)))
                            : ((document.getElementById(
                                  'apple-counter'
                              ).innerText = r - 1),
                              localStorage.setItem(
                                  'apple',
                                  JSON.stringify(r - 1)
                              ));
                    }
                }
                let a = parseInt(JSON.parse(localStorage.getItem('cat'))),
                    l = parseInt(JSON.parse(localStorage.getItem('sun'))),
                    s = parseInt(JSON.parse(localStorage.getItem('bacterium'))),
                    c = parseInt(JSON.parse(localStorage.getItem('apple')));
                0 === a &&
                    0 === l &&
                    0 === s &&
                    0 === c &&
                    setTimeout(() => {
                        localStorage.setItem(
                            'score',
                            JSON.stringify(this.getScore())
                        );
                        let e = new Date();
                        e.setTime(e.getTime() + 2592e6),
                            (document.cookie =
                                'score=' +
                                this.getScore() +
                                ';expires=' +
                                e.toUTCString() +
                                ';path=/');
                    }, 8e3);
                let d = document.getElementById('candy-id-' + t.candy.id);
                    $(d).animate({ opacity: 0 }, function () {
                        d.parentNode.removeChild(d);
                    });
            }),
            $(n).on('scoreUpdate', function (e, t) {
                document.getElementById('score') &&
                    (document.getElementById('score').innerText = t.score);
            }),
            $(document).on('click', '.btn', function (e) {
                let t = e.target.id;
                'newGame' == t
                    ? !1 == $('img').is(':animated') && (g(), u())
                    : 'showMove' == t &&
                      !1 == $('img').is(':animated') &&
                      (g(), f());
            }),
            $(document).on('keydown', function (e) {
                'n' == e.originalEvent.key && (g(), u());
            }),
            $(document).on('mousedown touchstart', '#canvas', function (t) {
                if (!1 == $('img').is(':animated')) {
                    let i;
                    window.innerWidth > 819
                        ? (i = 650 / n.boardSize)
                        : window.innerWidth > 767
                        ? (i = 550 / n.boardSize)
                        : window.innerWidth > 400
                        ? (i = 410 / n.boardSize)
                        : (window.innerWidth, (i = 360 / n.boardSize));
                    let o, r;
                    'mousedown' == t.type
                        ? ((o = t.offsetX), (r = t.offsetY))
                        : ((o =
                              parseInt(t.touches[0].clientX) -
                              (parseInt(t.target.offsetLeft) +
                                  parseInt(t.target.offsetParent.offsetLeft))),
                          (r =
                              parseInt(t.touches[0].clientY) -
                              (parseInt(t.target.offsetTop) +
                                  parseInt(t.target.offsetParent.offsetTop))),
                          e &&
                              (console.log(
                                  parseInt(t.changedTouches[0].clientX),
                                  '- (',
                                  parseInt(t.target.offsetLeft),
                                  '+',
                                  parseInt(t.target.offsetParent.offsetLeft),
                                  ') = ',
                                  o
                              ),
                              console.log(
                                  parseInt(t.changedTouches[0].clientY),
                                  '- (',
                                  parseInt(t.target.offsetTop),
                                  '+',
                                  parseInt(t.target.offsetParent.offsetTop),
                                  ') = ',
                                  r
                              ),
                              $('#DEBUG').empty(),
                              $('#DEBUG').append('s: ' + o + ' ' + r)));
                    let a = Math.floor(o / i),
                        l = Math.floor(r / i),
                        c = document
                            .querySelectorAll(
                                "[data-position='" + a + '-' + l + "']"
                            )
                            .item(0);
                    if (null != c) {
                        $(c).css('z-index', 2);
                        let d = parseInt($(c).css('top')),
                            f = parseInt($(c).css('left'));
                        s = {
                            candyImg: c,
                            initCol: a,
                            initRow: l,
                            initTop: d,
                            initLeft: f,
                            initXCoord: o,
                            initYCoord: r,
                        };
                    }
                }
            }),
            $(document).on('mousemove touchmove', '#canvas', function (t) {
                if (null != s && !1 == $('img').is(':animated')) {
                    let n, i;
                    'mousemove' == t.type
                        ? ((n = t.offsetX), (i = t.offsetY))
                        : (e && console.log(t),
                          (n =
                              parseInt(t.touches[0].clientX) -
                              (parseInt(t.target.offsetLeft) +
                                  parseInt(t.target.offsetParent.offsetLeft))),
                          (i =
                              parseInt(t.touches[0].clientY) -
                              (parseInt(t.target.offsetTop) +
                                  parseInt(t.target.offsetParent.offsetTop))));
                    let o = s.initTop + i - s.initYCoord,
                        r = s.initLeft + n - s.initXCoord;
                    $(s.candyImg).css({ top: o, left: r });
                }
            }),
            $(document).on('mouseup touchend', function (t) {
                if (null != s) {
                    g();
                    let o;
                    window.innerWidth > 819
                        ? (o = 650 / n.boardSize)
                        : window.innerWidth > 767
                        ? (o = 550 / n.boardSize)
                        : window.innerWidth > 400
                        ? (o = 410 / n.boardSize)
                        : (window.innerWidth, (o = 360 / n.boardSize));
                    let r, a;
                    'mouseup' == t.type
                        ? ((r = t.offsetX), (a = t.offsetY))
                        : ((r =
                              parseInt(t.changedTouches[0].clientX) -
                              (parseInt(t.target.offsetLeft) +
                                  parseInt(t.target.offsetParent.offsetLeft))),
                          (a =
                              parseInt(t.changedTouches[0].clientY) -
                              (parseInt(t.target.offsetTop) +
                                  parseInt(t.target.offsetParent.offsetTop))),
                          e &&
                              (console.log(t),
                              console.log(t.changedTouches),
                              console.log(
                                  parseInt(t.changedTouches[0].clientX),
                                  '- (',
                                  parseInt(t.target.offsetLeft),
                                  '+',
                                  parseInt(t.target.offsetParent.offsetLeft),
                                  ') = ',
                                  r
                              ),
                              console.log(
                                  parseInt(t.changedTouches[0].clientY),
                                  '- (',
                                  parseInt(t.target.offsetTop),
                                  '+',
                                  parseInt(t.target.offsetParent.offsetTop),
                                  ') = ',
                                  a
                              ),
                              $('#DEBUG').append(', e: ' + r + ' ' + a)));
                    let l = Math.floor(r / o),
                        c = Math.floor(a / o),
                        d = $(s.candyImg).data('candy');
                    s.initCol == l && s.initRow - 1 == c
                        ? i.isMoveTypeValid(d, 'up') &&
                          n.flipCandies(d, n.getCandyInDirection(d, 'up'))
                        : s.initCol == l && s.initRow + 1 == c
                        ? i.isMoveTypeValid(d, 'down') &&
                          n.flipCandies(d, n.getCandyInDirection(d, 'down'))
                        : s.initCol - 1 == l && s.initRow == c
                        ? i.isMoveTypeValid(d, 'left') &&
                          n.flipCandies(d, n.getCandyInDirection(d, 'left'))
                        : s.initCol + 1 == l &&
                          s.initRow == c &&
                          i.isMoveTypeValid(d, 'right') &&
                          n.flipCandies(d, n.getCandyInDirection(d, 'right')),
                        $(s.candyImg).css({
                            'z-index': 1,
                            top: s.initTop,
                            left: s.initLeft,
                        }),
                        (s = null);
                }
            });
    }, 2e3);
