window.location.pathname.includes('/world-4') &&
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
            o = 6,
            r = 10,
            a = 10,
            l = 10,
            s = null;
        (n = new Board4(
            $.getUrllet('size') &&
            $.getUrllet('size') >= 3 &&
            20 >= $.getUrllet('size')
                ? $.getUrllet('size')
                : t
        )),
            (i = new Rules4(n)),
            $(document).ready(function () {
                if (
                    (m(),
                    localStorage.setItem('cat', JSON.stringify(6)),
                    localStorage.setItem('sun', JSON.stringify(10)),
                    localStorage.setItem('bacterium', JSON.stringify(10)),
                    localStorage.setItem('apple', JSON.stringify(10)),
                    localStorage.setItem('flower', JSON.stringify(5)),
                    localStorage.setItem('nube', JSON.stringify(5)),
                    (document.getElementById('cat-counter').innerText = o),
                    (document.getElementById('sun-counter').innerText = r),
                    (document.getElementById('bacterium-counter').innerText =
                        a),
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
                console.log('Hola');
                $('#desler').fadeIn('slow');

                setTimeout(() => {
                    $('#desler').fadeOut('slow');
                }, 200);
                $('#gameBoard').append(o),
                    'nube' === t.candy.color || 'flower' === t.candy.color
                        ? (o.src =
                              'https://juegoseml.co/images-recover/' +
                              i.toString() +
                              '-green.gif')
                        : (o.src =
                              'https://juegoseml.co/images-recover/' +
                              i.toString() +
                              '-green-static.webp'),
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
                    document.getElementById('canvas')
                        ? document.getElementById('canvas').clientHeight
                        : n.boardSize;
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
                        g();
                    });
            });
        let c = !1;
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
        function d() {
            document
                .getElementById('canvas')
                .getContext('2d')
                .clearRect(0, 0, 650, 650);
        }
        function g() {
            setTimeout(function () {
                i.moveCandiesDown();
            }, 500),
                i.removeCrushes(i.getCandyCrushes());
        }
        function m() {
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
                (c = !0);
            let r = t.toRow * o,
                a = t.toCol * o;
            $(i).animate({ top: r, left: a }, function () {
                g();
            });
        }),
            $(n).on('remove', function (e, t) {
                if ('cat' === t.candy.color) {
                    let n = parseInt(JSON.parse(localStorage.getItem('cat')));
                    n - 1 <= 0
                        ? ((document.getElementById(
                              'cat-counter'
                          ).innerText = 0),
                          localStorage.setItem('cat', JSON.stringify(0)))
                        : ((document.getElementById('cat-counter').innerText =
                              n - 1),
                          localStorage.setItem('cat', JSON.stringify(n - 1)));
                } else if ('sun' === t.candy.color) {
                    let i = parseInt(JSON.parse(localStorage.getItem('sun')));
                    i - 1 <= 0
                        ? ((document.getElementById(
                              'sun-counter'
                          ).innerText = 0),
                          localStorage.setItem('sun', JSON.stringify(0)))
                        : ((document.getElementById('sun-counter').innerText =
                              i - 1),
                          localStorage.setItem('sun', JSON.stringify(i - 1)));
                } else if ('bacterium' === t.candy.color) {
                    let o = parseInt(
                        JSON.parse(localStorage.getItem('bacterium'))
                    );
                    o - 1 <= 0
                        ? ((document.getElementById(
                              'bacterium-counter'
                          ).innerText = 0),
                          localStorage.setItem('bacterium', JSON.stringify(0)))
                        : ((document.getElementById(
                              'bacterium-counter'
                          ).innerText = o - 1),
                          localStorage.setItem(
                              'bacterium',
                              JSON.stringify(o - 1)
                          ));
                } else if ('nube' === t.candy.color) {
                    let r = parseInt(JSON.parse(localStorage.getItem('nube')));
                    r - 1 <= 0
                        ? localStorage.setItem('nube', JSON.stringify(0))
                        : localStorage.setItem('nube', JSON.stringify(r - 1));
                } else if ('flower' === t.candy.color) {
                    let a = parseInt(
                        JSON.parse(localStorage.getItem('flower'))
                    );
                    a - 1 <= 0
                        ? localStorage.setItem('flower', JSON.stringify(0))
                        : localStorage.setItem('flower', JSON.stringify(a - 1));
                } else {
                    let l = parseInt(JSON.parse(localStorage.getItem('apple')));
                    l - 1 <= 0
                        ? ((document.getElementById(
                              'apple-counter'
                          ).innerText = 0),
                          localStorage.setItem('apple', JSON.stringify(0)))
                        : ((document.getElementById('apple-counter').innerText =
                              l - 1),
                          localStorage.setItem('apple', JSON.stringify(l - 1)));
                }
                let s = parseInt(JSON.parse(localStorage.getItem('cat'))),
                    c = parseInt(JSON.parse(localStorage.getItem('sun'))),
                    f = parseInt(JSON.parse(localStorage.getItem('bacterium'))),
                    d = parseInt(JSON.parse(localStorage.getItem('apple'))),
                    g = parseInt(JSON.parse(localStorage.getItem('flower'))),
                    m = parseInt(JSON.parse(localStorage.getItem('nube')));
                0 === s &&
                    0 === c &&
                    0 === f &&
                    0 === d &&
                    0 === g &&
                    0 === m &&
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
                let u = document.getElementById('candy-id-' + t.candy.id);

                $(u).animate({ opacity: 0 }, function () {
                    u.parentNode.removeChild(u);
                });
            }),
            $(n).on('scoreUpdate', function (e, t) {
                document.getElementById('score') &&
                    (document.getElementById('score').innerText = t.score);
            }),
            $(document).on('click', '.btn', function (e) {
                let t = e.target.id;
                'newGame' == t
                    ? !1 == $('img').is(':animated') && (d(), m())
                    : 'showMove' == t &&
                      !1 == $('img').is(':animated') &&
                      (d(), f());
            }),
            $(document).on('keydown', function (e) {
                'n' == e.originalEvent.key && (d(), m());
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
                        let f = parseInt($(c).css('top')),
                            d = parseInt($(c).css('left'));
                        s = {
                            candyImg: c,
                            initCol: a,
                            initRow: l,
                            initTop: f,
                            initLeft: d,
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
                    d();
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
                        f = $(s.candyImg).data('candy');
                    s.initCol == l && s.initRow - 1 == c
                        ? i.isMoveTypeValid(f, 'up') &&
                          n.flipCandies(f, n.getCandyInDirection(f, 'up'))
                        : s.initCol == l && s.initRow + 1 == c
                        ? i.isMoveTypeValid(f, 'down') &&
                          n.flipCandies(f, n.getCandyInDirection(f, 'down'))
                        : s.initCol - 1 == l && s.initRow == c
                        ? i.isMoveTypeValid(f, 'left') &&
                          n.flipCandies(f, n.getCandyInDirection(f, 'left'))
                        : s.initCol + 1 == l &&
                          s.initRow == c &&
                          i.isMoveTypeValid(f, 'right') &&
                          n.flipCandies(f, n.getCandyInDirection(f, 'right')),
                        $(s.candyImg).css({
                            'z-index': 1,
                            top: s.initTop,
                            left: s.initLeft,
                        }),
                        (s = null);
                }
            });
    }, 2e3);
