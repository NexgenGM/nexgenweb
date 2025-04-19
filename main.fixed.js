"use strict";
var loopTimeout, wWidth = window.innerWidth,
    wHeight = window.innerHeight,
    canvasNoise = document.getElementById("noise"),
    ctx = canvasNoise.getContext("2d"),
    noiseData = new Array(10).fill(0).map(createNoise),
    frameNoise = 0;

function is_mobile() {
    var t, e = !1;
    return t = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0), e
}

function is_msie() {
    return 0 < window.navigator.userAgent.indexOf("MSIE ")
}

function createNoise() {
    var t = ctx.createImageData(wWidth, wHeight);
    return new Uint32Array(t.data.buffer).forEach(function(t, e, i) {
        Math.random() < .9 && (i[e] = 4278190080)
    }), t
}

function paintNoise() {
    frameNoise = (frameNoise + 1) % noiseData.length, ctx.putImageData(noiseData[frameNoise], 0, 0)
}

function loopNoise() {
    loopTimeout = window.setTimeout(function() {
        return window.requestAnimationFrame(loopNoise)
    }, 40), paintNoise(frameNoise)
}

function setupNoise() {
    canvasNoise.width = wWidth, canvasNoise.height = wHeight, loopNoise()
}

function resetNoise() {
    var t;
    window.addEventListener("resize", function() {
        window.clearTimeout(t), t = window.setTimeout(function() {
            window.clearTimeout(loopTimeout), setupNoise()
        }, 0)
    }, !1)
}

function initNoise() {
    setupNoise()
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(t, e) {
    for (var i = 0; i < e.length; i++) {
        var n = e[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
    }
}

function _createClass(t, e, i) {
    return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), t
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(t, e) {
    for (var i = 0; i < e.length; i++) {
        var n = e[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
    }
}

function _createClass(t, e, i) {
    return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), t
}
if (jQuery(document).ready(function(t) {
        if (setTimeout(function() {
                initNoise(), t("#noise").fadeIn("slow"), is_msie() ? (console.log("Por Favor, saia dos anos 90! Não use o Internet Explorer para ver o nosso site brutalíssimo, seja inteligente e utilize algo mais moderno."), t(".symbol-nexgen").addClass("msie"), t("#content-alternative").fadeIn()) : t(".content").addClass("loaded")
            }, 200), "event" != nexgen_main.page) {
            var e;
            for (e = 0; e <= 3; e++)
                if (document.getElementsByTagName("H" + e)) {
                    var i = jQuery("H" + e).length,
                        n = void 0;
                    for (n = 0; n < i; n++) {
                        var o = document.getElementsByTagName("H" + e)[n].innerHTML;
                        document.getElementsByTagName("H" + e)[n].setAttribute("data-text", o), document.getElementsByTagName("H" + e)[n].className += " glitch"
                    }
                }
        }
    }), jQuery("a").addClass("hoverable"), jQuery("ul.nav__list .menu-item").addClass("nav__list-item"), jQuery(document).ready(function() {
        var t, e, i, n;
        e = t = void 0, i = function() {
            e.addEventListener("click", function() {
                return n(t, "nav-active")
            })
        }, n = function(t, e) {
            t.classList.contains(e) ? t.classList.remove(e) : t.classList.add(e)
        }, t = document.querySelector("body"), e = document.querySelector(".menu-icon"), document.querySelectorAll(".nav__list-item"), i()
    }), function(e) {
        e(document).on("scroll", function() {
            var t = e(this).scrollTop();
            e(".parallax-fade-top").css({
                top: t / 2 + "px",
                opacity: 1 - t / 700
            }), e(".parallax-00").css({
                top: t / -3.5 + "px"
            }), e(".parallax-01").css({
                top: t / -2.8 + "px"
            }), e(".parallax-top-shadow").css({
                top: t / -2 + "px"
            })
        })
    }(jQuery), $(window).scroll(function() {
        0 < $(this).scrollTop() ? $(".mouse").fadeOut() : $(".mouse").fadeIn()
    }), jQuery(document).ready(function() {
        jQuery(window).on("scroll", function() {
            300 < jQuery(this).scrollTop() ? jQuery(".scroll-to-top").addClass("active-arrow") : jQuery(".scroll-to-top").removeClass("active-arrow")
        }), jQuery(".scroll-to-top").on("click", function(t) {
            return t.preventDefault(), jQuery("html, body").animate({
                scrollTop: 0
            }, 400), !1
        })
    }), 1 == nexgen_main.is_404 && function(s) {
        var n, r, o, a;
        document.addEventListener("DOMContentLoaded", function() {
            s.devicePixelRatio || 1, n = document.getElementById("canvas"), r = n.getContext("2d"), o = new t,
                function(t) {
                    var e = new XMLHttpRequest;
                    e.onload = t, e.open("GET", "wp-content/themes/nexgen/404_madness.js", !0), e.send(null)
                }(function(t) {
                    s.addEventListener("resize", c, !1), i(), u(t), s.requestAnimationFrame(d)
                })
        });
        var e = function() {
                function t() {
                    _classCallCheck(this, t)
                }
                return _createClass(t, [{
                    key: "drawTile",
                    value: function(t, e, i) {
                        var n = document.createElement("canvas"),
                            o = n.getContext("2d");
                        n.width = e, n.height = i;
                        var s = t.getImageData(0, 0, e, i);
                        o.putImageData(s, 0, 0);
                        for (var r = Math.ceil(e / 3), a = r / e, l = Math.ceil(i * a), h = 0; h < 3; h++)
                            for (var c = 0; c < 3; c++) {
                                var u = r * h,
                                    d = l * c;
                                t.drawImage(n, 0, 0, e, i, u, d, r, l)
                            }
                    }
                }, {
                    key: "grayScale",
                    value: function(t, e, i) {
                        for (var n = t.getImageData(0, 0, e, i), o = n.data, s = 0; s < o.length; s += 4) {
                            var r = (o[s] + o[s + 1] + o[s + 2]) / 3;
                            o[s] = o[s + 1] = o[s + 2] = r
                        }
                        t.putImageData(n, 0, 0)
                    }
                }, {
                    key: "extendColor",
                    value: function(t, e, i) {
                        for (var n = t.getImageData(0, 0, e, i).data, o = 4 * e * Math.round(Math.random() * i), s = 0; s < e; s++) {
                            var r = o + 4 * s,
                                a = n[r],
                                l = n[1 + r],
                                h = n[2 + r];
                            0 == n[3 + r] && (a = l = h = 255), t.fillStyle = "rgb(" + a + "," + l + "," + h + ")", t.fillRect(s, 0, 1, i)
                        }
                    }
                }, {
                    key: "glitchSlip",
                    value: function(t, e, i, n) {
                        for (var o = i * Math.random(), s = 30 + o + 40 * Math.random(), r = o; r < s; r++) {
                            Math.random() < .1 && r++;
                            var a = t.getImageData(0, r, e, 1);
                            t.putImageData(a, Math.random() * n - .5 * n, r)
                        }
                    }
                }]), t
            }(),
            t = function() {
                function t() {
                    _classCallCheck(this, t), this.draw = null, this.filter = new e, this.setProcessing(), this.setLife()
                }
                return _createClass(t, [{
                    key: "setLife",
                    value: function() {
                        this.life = f(0, 100), this.dying = f(2, 15)
                    }
                }, {
                    key: "setProcessing",
                    value: function() {
                        var t = [this.filter.drawTile, this.filter.extendColor, this.filter.grayScale];
                        this.draw = t[Math.floor(Math.random() * t.length)]
                    }
                }, {
                    key: "counter",
                    value: function(t, e, i) {
                        this.life--, this.filter.glitchSlip(t, e, i, 20), this.life <= 0 && this.draw(t, e, i), this.life <= -this.dying && (this.setProcessing(), this.setLife())
                    }
                }]), t
            }(),
            l = function() {
                function r(t, e, i, n, o, s) {
                    _classCallCheck(this, r), this.x = t, this.y = e, this.position = e, this.text = i, this.color = n, this.width = o, this.height = s, this.life = f(0, 50)
                }
                return _createClass(r, [{
                    key: "update",
                    value: function(t) {
                        this.life--, this.y = this.position + t, this.life <= 0 && (this.y += f(-10, 10)), this.life <= -10 && (this.life = f(0, 50))
                    }
                }, {
                    key: "draw",
                    value: function(t) {
                        t.fillStyle = this.color, t.fillText(this.text, this.x, this.y)
                    }
                }]), r
            }(),
            h = function() {
                function t() {
                    _classCallCheck(this, t), this.y = 0, this.height = 0, this.margin = 5, this.objectList = [], this.colorList = ["#ff007f", "#ff00ff", "#7f00ff", "#0000ff", "#007fff", "#00ffff"]
                }
                return _createClass(t, [{
                    key: "addText",
                    value: function(t, e, i) {
                        t.font = i + 'px "Press Start 2P", cursive,sans-serif', t.textBaseline = "top";
                        var n = this.colorList[Math.floor(Math.random() * this.colorList.length)],
                            o = t.measureText(e).width,
                            s = this.getOffsetHeight(e, t.font),
                            r = this.height + s + this.margin;
                        this.height = r;
                        var a = new l(0, r, e, n, o, s);
                        this.objectList.push(a)
                    }
                }, {
                    key: "getOffsetHeight",
                    value: function(t, e) {
                        var i = document.createElement("span");
                        i.appendChild(document.createTextNode(t));
                        var n = document.createElement("p");
                        n.id = "textMetrics", n.appendChild(i), document.body.insertBefore(n, document.body.firstChild), i.style.cssText = "font: " + e + "; white-space: nowrap; display: inline;";
                        var o = i.offsetHeight;
                        return n.parentNode.removeChild(n), o
                    }
                }, {
                    key: "update",
                    value: function(t, e) {
                        this.y -= 5;
                        for (var i = this.objectList.length, n = 0; n < i; n++) {
                            this.objectList[n].update(this.y)
                        }
                        return this.y <= -this.height && (this.y = e), this
                    }
                }, {
                    key: "draw",
                    value: function(t) {
                        var e = !0,
                            i = !1,
                            n = void 0;
                        try {
                            for (var o, s = this.objectList[Symbol.iterator](); !(e = (o = s.next()).done); e = !0) {
                                o.value.draw(t)
                            }
                        } catch (t) {
                            i = !0, n = t
                        } finally {
                            try {
                                e || null == s.return || s.return()
                            } finally {
                                if (i) throw n
                            }
                        }
                    }
                }]), t
            }();

        function i() {
            n.width = s.innerWidth, n.height = s.innerHeight
        }

        function c() {
            i(), u()
        }

        function u(t) {
            var e = .01 * s.innerWidth,
                i = t.target.response.split(/\n/);
            a = new h;
            for (var n = 0; n < i.length; n++) {
                var o = i[n];
                a.addText(r, o, e)
            }
        }

        function d(t) {
            var e = n.width,
                i = n.height;
            r.clearRect(0, 0, e, i), r.fillStyle = "#000", r.fillRect(0, 0, e, i), a.update(r, i).draw(r), o.counter(r, e, i), s.requestAnimationFrame(d)
        }

        function f(t, e) {
            return Math.random() * (e - t) + t
        }
    }(window), "/" == nexgen_main.page || is_mobile() || jQuery(function() {
        var e, n = document.querySelector(".part"),
            u = n.getContext("2d");
        n.width = window.innerWidth, n.height = window.innerHeight, u.lineWidth = .3, u.strokeStyle = new s(150).style;
        var d = {},
            f = {};

        function i() {
            n.width = window.innerWidth, n.height = window.innerHeight, u.lineWidth = .3, u.strokeStyle = new s(150).style, d = {
                x: 30 * n.width / 100,
                y: 30 * n.height / 100
            };
            var t, e, i;
            i = n.width <= 800 ? (t = 100 / 3, e = 50, 100) : n.width <= 1920 ? (t = 100 / 1.5, e = 100, 200) : (t = 100, e = 150, 400), f = {
                nb: i,
                distance: t,
                d_radius: e,
                array: []
            }
        }

        function o(t) {
            return Math.floor(255 * Math.random() + t)
        }

        function m(t, e, i) {
            return "rgba(" + t + "," + e + "," + i + ", 1)"
        }

        function v(t, e, i, n) {
            return (t * e + i * n) / (e + n)
        }

        function s(t) {
            t = t || 0, this.r = o(t), this.g = o(t), this.b = o(t), this.style = m(this.r, this.g, this.b)
        }

        function r() {
            this.x = Math.random() * n.width, this.y = Math.random() * n.height, this.vx = -.5 + Math.random(), this.vy = -.5 + Math.random(), this.radius = 2 * Math.random(), this.color = new s
        }

        function a() {
            for (var t = 0; t < f.nb; t++) f.array.push(new r)
        }

        function t() {
            u.clearRect(0, 0, n.width, n.height),
                function() {
                    for (var t = 0; t < f.nb; t++) {
                        var e = f.array[t];
                        e.y < 0 || e.y > n.height ? (e.vx = e.vx, e.vy = -e.vy) : (e.x < 0 || e.x > n.width) && (e.vx = -e.vx, e.vy = e.vy), e.x += e.vx, e.y += e.vy
                    }
                }(), is_mobile() || function() {
                    for (var t = 0; t < f.nb; t++)
                        for (var e = 0; e < f.nb; e++) {
                            var i = f.array[t],
                                n = f.array[e];
                            i.x - n.x < f.distance && i.y - n.y < f.distance && i.x - n.x > -f.distance && i.y - n.y > -f.distance && i.x - d.x < f.d_radius && i.y - d.y < f.d_radius && i.x - d.x > -f.d_radius && i.y - d.y > -f.d_radius && (u.beginPath(), u.strokeStyle = (s = n, r = (o = i).color, a = s.color, l = v(r.r, o.radius, a.r, s.radius), h = v(r.g, o.radius, a.g, s.radius), c = v(r.b, o.radius, a.b, s.radius), m(Math.floor(l), Math.floor(h), Math.floor(c))), u.moveTo(i.x, i.y), u.lineTo(n.x, n.y), u.stroke(), u.closePath())
                        }
                    var o, s, r, a, l, h, c
                }(),
                function() {
                    for (var t = 0; t < f.nb; t++) f.array[t].draw()
                }(), requestAnimationFrame(t)
        }
        i(), r.prototype = {
            draw: function() {
                u.beginPath(), u.fillStyle = this.color.style, u.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, !1), u.fill()
            }
        }, jQuery("body").on("mousemove", function(t) {
            d.x = t.pageX, d.y = t.pageY - window.scrollY
        }), jQuery("body").on("mouseleave", function(t) {
            d.x = n.width / 2, d.y = n.height / 2
        }), jQuery(document).ready(function() {
            a(), requestAnimationFrame(t)
        }), jQuery(window).resize(function() {
            var t = jQuery(".part");
            t.fadeOut(), clearTimeout(e), e = setTimeout(function() {
                jQuery.when(t.fadeOut("fast")).then(function() {
                    i(), u.clearRect(0, 0, n.width, n.height), f.array = [], a(), t.fadeIn()
                })
            }, 200)
        })
    }), "event" == nexgen_main.page || "nexgenevent" == nexgen_main.page) {
    console.log(nexgen_main.page), console.log(nexgen_main.is_404);
    var winsize, slideshow, startTouch = function(t) {
            initialX = t.touches[0].clientX
        },
        moveTouch = function(t) {
            if (null !== initialX) {
                var e = t.touches[0].clientX;
                0 < initialX - e ? slideshow.navigate("next") : slideshow.navigate("left"), initialX = null, t.preventDefault()
            }
        },
        getMousePos = function(t) {
            var e = 0,
                i = 0;
            return t || (t = window.event), t.pageX || t.pageY ? (e = t.pageX, i = t.pageY) : (t.clientX || t.clientY) && (e = t.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, i = t.clientY + document.body.scrollTop + document.documentElement.scrollTop), {
                x: e,
                y: i
            }
        },
        getRandomInt = function(t, e) {
            return Math.floor(Math.random() * (e - t + 1)) + t
        },
        lineEq = function(t, e, i, n, o) {
            var s = (t - e) / (i - n);
            return s * o + (e - s * n)
        },
        chars = ["$", "%", "#", "&", "=", "*", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ".", ":", ",", "^"],
        charsTotal = chars.length,
        randomizeLetters = function(e) {
            return new Promise(function(n, t) {
                var o = e.length,
                    s = 0;
                e.forEach(function(e, t) {
                    var i;
                    ! function t() {
                        e.innerHTML = chars[getRandomInt(0, charsTotal - 1)], i = setTimeout(t, getRandomInt(50, 500))
                    }();
                    setTimeout(function() {
                        clearTimeout(i), e.style.opacity = 1, e.innerHTML = e.dataset.initial, ++s === o && n()
                    }, t * lineEq(40, 0, 8, 200, o))
                })
            })
        },
        disassembleLetters = function(e) {
            return new Promise(function(i, t) {
                var n = e.length,
                    o = 0;
                e.forEach(function(t, e) {
                    setTimeout(function() {
                        t.style.opacity = 0, ++o === n && i()
                    }, 30 * e)
                })
            })
        },
        Slide = function() {
            function e(t) {
                _classCallCheck(this, e), this.DOM = {
                    el: t
                }, this.DOM.imgWrap = this.DOM.el.querySelector(".slide__img-wrap"), this.DOM.img = this.DOM.imgWrap.querySelector(".slide__img"), this.DOM.texts = {
                    wrap: this.DOM.el.querySelector(".slide__title-wrap"),
                    title: this.DOM.el.querySelector(".slide__title"),
                    number: this.DOM.el.querySelector(".slide__number"),
                    side: this.DOM.el.querySelector(".slide__side")
                }, charming(this.DOM.texts.title), charming(this.DOM.texts.side), this.DOM.titleLetters = Array.from(this.DOM.texts.title.querySelectorAll("span")).sort(function() {
                    return .5 - Math.random()
                }), this.DOM.sideLetters = Array.from(this.DOM.texts.side.querySelectorAll("span")).sort(function() {
                    return .5 - Math.random()
                }), this.DOM.titleLetters.forEach(function(t) {
                    return t.dataset.initial = t.innerHTML
                }), this.DOM.sideLetters.forEach(function(t) {
                    return t.dataset.initial = t.innerHTML
                }), this.calcSizes(), this.calcTransforms(), this.initEvents()
            }
            return _createClass(e, [{
                key: "calcSizes",
                value: function() {
                    this.width = this.DOM.imgWrap.offsetWidth, this.height = this.DOM.imgWrap.offsetHeight
                }
            }, {
                key: "calcTransforms",
                value: function() {
                    this.transforms = [{
                        x: -1 * (winsize.width / 2 + this.width),
                        y: -1 * (winsize.height / 2 + this.height),
                        rotation: -30
                    }, {
                        x: -1 * (winsize.width / 2 - this.width / 3),
                        y: -1 * (winsize.height / 2 - this.height / 3),
                        rotation: 0
                    }, {
                        x: 0,
                        y: 0,
                        rotation: 0
                    }, {
                        x: winsize.width / 2 - this.width / 3,
                        y: winsize.height / 2 - this.height / 3,
                        rotation: 0
                    }, {
                        x: winsize.width / 2 + this.width,
                        y: winsize.height / 2 + this.height,
                        rotation: 30
                    }, {
                        x: -1 * (winsize.width / 2 - this.width / 2 - .075 * winsize.width),
                        y: 0,
                        rotation: 0
                    }]
                }
            }, {
                key: "initEvents",
                value: function() {
                    var e = this;
                    this.mouseenterFn = function() {
                        e.isPositionedCenter() && allowTilt && (clearTimeout(e.mousetime), e.mousetime = setTimeout(function() {
                            TweenMax.to(e.DOM.img, .8, {
                                ease: Power3.easeOut,
                                scale: 1.1
                            })
                        }, 40))
                    }, this.mousemoveFn = function(t) {
                        return requestAnimationFrame(function() {
                            allowTilt && e.isPositionedCenter() && e.tilt(t)
                        })
                    }, this.mouseleaveFn = function(t) {
                        return requestAnimationFrame(function() {
                            allowTilt && e.isPositionedCenter() && (clearTimeout(e.mousetime), TweenMax.to([e.DOM.imgWrap, e.DOM.texts.wrap], 1.8, {
                                ease: "Power4.easeOut",
                                x: 0,
                                y: 0,
                                rotationX: 0,
                                rotationY: 0
                            }), TweenMax.to(e.DOM.img, 1.8, {
                                ease: "Power4.easeOut",
                                scale: 1
                            }))
                        })
                    }, this.resizeFn = function() {
                        e.calcSizes(), e.calcTransforms()
                    }, this.DOM.imgWrap.addEventListener("mouseenter", this.mouseenterFn), this.DOM.imgWrap.addEventListener("mousemove", this.mousemoveFn), this.DOM.imgWrap.addEventListener("mouseleave", this.mouseleaveFn), window.addEventListener("resize", this.resizeFn)
                }
            }, {
                key: "tilt",
                value: function(t) {
                    var e = getMousePos(t),
                        i = document.body.scrollLeft + document.documentElement.scrollLeft,
                        n = document.body.scrollTop + document.documentElement.scrollTop,
                        o = this.DOM.imgWrap.getBoundingClientRect(),
                        s = e.x - o.left - i,
                        r = e.y - o.top - n,
                        a = [-20, 20],
                        l = [-20, 20],
                        h = [-15, 15],
                        c = [-15, 15],
                        u = {
                            translation: {
                                x: (a[1] - a[0]) / o.width * s + a[0],
                                y: (l[1] - l[0]) / o.height * r + l[0]
                            },
                            rotation: {
                                x: (h[1] - h[0]) / o.height * r + h[0],
                                y: (c[1] - c[0]) / o.width * s + c[0]
                            }
                        };
                    TweenMax.to(this.DOM.imgWrap, 1.5, {
                        ease: "Power1.easeOut",
                        x: u.translation.x,
                        y: u.translation.y,
                        rotationX: u.rotation.x,
                        rotationY: u.rotation.y
                    }), TweenMax.to(this.DOM.texts.wrap, 1.5, {
                        ease: "Power1.easeOut",
                        x: -1 * u.translation.x,
                        y: -1 * u.translation.y
                    })
                }
            }, {
                key: "position",
                value: function(t) {
                    TweenMax.set(this.DOM.imgWrap, {
                        x: this.transforms[t].x,
                        y: this.transforms[t].y,
                        rotationX: 0,
                        rotationY: 0,
                        opacity: 1,
                        rotationZ: this.transforms[t].rotation
                    })
                }
            }, {
                key: "setCurrent",
                value: function(t) {
                    this.isCurrent = !0, this.DOM.el.classList.add("slide--current", "slide--visible"), this.position(t ? 5 : 2)
                }
            }, {
                key: "setLeft",
                value: function(t) {
                    this.isRight = this.isCurrent = !1, this.isLeft = !0, this.DOM.el.classList.add("slide--visible"), this.position(t ? 0 : 1)
                }
            }, {
                key: "setRight",
                value: function(t) {
                    this.isLeft = this.isCurrent = !1, this.isRight = !0, this.DOM.el.classList.add("slide--visible"), this.position(t ? 4 : 3)
                }
            }, {
                key: "isPositionedRight",
                value: function() {
                    return this.isRight
                }
            }, {
                key: "isPositionedLeft",
                value: function() {
                    return this.isLeft
                }
            }, {
                key: "isPositionedCenter",
                value: function() {
                    return this.isCurrent
                }
            }, {
                key: "reset",
                value: function() {
                    this.isRight = this.isLeft = this.isCurrent = !1, this.DOM.el.classList = "slide"
                }
            }, {
                key: "hide",
                value: function() {
                    TweenMax.set(this.DOM.imgWrap, {
                        x: 0,
                        y: 0,
                        rotationX: 0,
                        rotationY: 0,
                        rotationZ: 0,
                        opacity: 0
                    })
                }
            }, {
                key: "moveToPosition",
                value: function(i) {
                    var n = this;
                    return new Promise(function(t, e) {
                        TweenMax.to(n.DOM.imgWrap, .8, {
                            ease: Power4.easeInOut,
                            delay: i.delay || 0,
                            startAt: void 0 !== i.from ? {
                                x: n.transforms[i.from + 2].x,
                                y: n.transforms[i.from + 2].y,
                                rotationX: 0,
                                rotationY: 0,
                                rotationZ: n.transforms[i.from + 2].rotation
                            } : {},
                            x: n.transforms[i.position + 2].x,
                            y: n.transforms[i.position + 2].y,
                            rotationX: 0,
                            rotationY: 0,
                            rotationZ: n.transforms[i.position + 2].rotation,
                            onStart: void 0 !== i.from ? function() {
                                return TweenMax.set(n.DOM.imgWrap, {
                                    opacity: 1
                                })
                            } : null,
                            onComplete: t
                        }), i.resetImageScale && TweenMax.to(n.DOM.img, .8, {
                            ease: Power4.easeInOut,
                            scale: 1
                        })
                    })
                }
            }, {
                key: "hideTexts",
                value: function() {
                    var t = this;
                    0 < arguments.length && void 0 !== arguments[0] && arguments[0] ? (disassembleLetters(this.DOM.titleLetters).then(function() {
                        return TweenMax.set(t.DOM.texts.wrap, {
                            opacity: 0
                        })
                    }), disassembleLetters(this.DOM.sideLetters).then(function() {
                        return TweenMax.set(t.DOM.texts.side, {
                            opacity: 0
                        })
                    })) : (TweenMax.set(this.DOM.texts.wrap, {
                        opacity: 0
                    }), TweenMax.set(this.DOM.texts.side, {
                        opacity: 0
                    }))
                }
            }, {
                key: "showTexts",
                value: function() {
                    var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                    TweenMax.set(this.DOM.texts.wrap, {
                        opacity: 1
                    }), TweenMax.set(this.DOM.texts.side, {
                        opacity: 1
                    }), t && (randomizeLetters(this.DOM.titleLetters), randomizeLetters(this.DOM.sideLetters), TweenMax.to(this.DOM.texts.number, .6, {
                        ease: Elastic.easeOut.config(1, .5),
                        startAt: {
                            x: "-10%",
                            opacity: 0
                        },
                        x: "0%",
                        opacity: 1
                    }))
                }
            }]), e
        }(),
        Content = function() {
            function e(t) {
                _classCallCheck(this, e), this.DOM = {
                    el: t
                }, this.DOM.number = this.DOM.el.querySelector(".content__number"), this.DOM.title = this.DOM.el.querySelector(".content__title"), this.DOM.subtitle = this.DOM.el.querySelector(".content__subtitle"), this.DOM.text = this.DOM.el.querySelector(".content__text"), this.DOM.backCtrl = this.DOM.el.parentNode.querySelector(".content__close"), this.DOM.backCtrl.addEventListener("click", function() {
                    return slideshow.hideContent()
                })
            }
            return _createClass(e, [{
                key: "show",
                value: function() {
                    this.DOM.el.classList.add("content__item--current"), TweenMax.staggerTo([this.DOM.backCtrl, this.DOM.number, this.DOM.title, this.DOM.subtitle, this.DOM.text], .8, {
                        ease: Power4.easeOut,
                        delay: .4,
                        opacity: 1,
                        startAt: {
                            y: 40
                        },
                        y: 0
                    }, .05)
                }
            }, {
                key: "hide",
                value: function() {
                    this.DOM.el.classList.remove("content__item--current"), TweenMax.staggerTo([this.DOM.backCtrl, this.DOM.number, this.DOM.title, this.DOM.subtitle, this.DOM.text].reverse(), .3, {
                        ease: Power3.easeIn,
                        opacity: 0,
                        y: 10
                    }, .01)
                }
            }]), e
        }(),
        Slideshow = function() {
            function i(t) {
                var e = this;
                if (_classCallCheck(this, i), this.DOM = {
                        el: t
                    }, this.slides = [], Array.from(this.DOM.el.querySelectorAll(".slide")).forEach(function(t) {
                        return e.slides.push(new Slide(t))
                    }), this.slidesTotal = this.slides.length, this.slidesTotal < 4) return !1;
                this.current = 0, this.DOM.deco = this.DOM.el.querySelector(".slideshow__deco"), this.contents = [], Array.from(document.querySelectorAll(".content > .content__item")).forEach(function(t) {
                    return e.contents.push(new Content(t))
                }), this.render(), this.currentSlide.showTexts(!1), this.initEvents()
            }
            return _createClass(i, [{
                key: "render",
                value: function() {
                    this.currentSlide = this.slides[this.current], this.nextSlide = this.slides[this.current + 1 <= this.slidesTotal - 1 ? this.current + 1 : 0], this.prevSlide = this.slides[0 <= this.current - 1 ? this.current - 1 : this.slidesTotal - 1], this.currentSlide.setCurrent(), this.nextSlide.setRight(), this.prevSlide.setLeft()
                }
            }, {
                key: "initEvents",
                value: function() {
                    var e = this,
                        t = !0,
                        i = !(this.clickFn = function(t) {
                            t.isPositionedRight() ? e.navigate("next") : t.isPositionedLeft() ? e.navigate("prev") : e.showContent()
                        }),
                        n = void 0;
                    try {
                        for (var o, s = function() {
                                var t = o.value;
                                t.DOM.imgWrap.addEventListener("click", function() {
                                    return e.clickFn(t)
                                })
                            }, r = this.slides[Symbol.iterator](); !(t = (o = r.next()).done); t = !0) s()
                    } catch (t) {
                        i = !0, n = t
                    } finally {
                        try {
                            t || null == r.return || r.return()
                        } finally {
                            if (i) throw n
                        }
                    }
                    this.resizeFn = function() {
                        e.nextSlide.setRight(e.isContentOpen), e.prevSlide.setLeft(e.isContentOpen), e.currentSlide.setCurrent(e.isContentOpen), e.isContentOpen && TweenMax.set(e.DOM.deco, {
                            scaleX: winsize.width / e.DOM.deco.offsetWidth,
                            scaleY: winsize.height / e.DOM.deco.offsetHeight,
                            x: -20,
                            y: 20
                        })
                    }, window.addEventListener("resize", this.resizeFn)
                }
            }, {
                key: "showContent",
                value: function() {
                    this.isContentOpen || this.isAnimating || (allowTilt = !1, this.isContentOpen = !0, this.DOM.el.classList.add("slideshow--previewopen"), TweenMax.to(this.DOM.deco, .8, {
                        ease: Power4.easeInOut,
                        scaleX: winsize.width / this.DOM.deco.offsetWidth,
                        scaleY: winsize.height / this.DOM.deco.offsetHeight,
                        x: -20,
                        y: 20
                    }), this.prevSlide.moveToPosition({
                        position: -2
                    }), this.nextSlide.moveToPosition({
                        position: 2
                    }), this.currentSlide.moveToPosition({
                        position: 3,
                        resetImageScale: !0
                    }), this.contents[this.current].show(), this.currentSlide.hideTexts(!0))
                }
            }, {
                key: "hideContent",
                value: function() {
                    var t = this;
                    this.isContentOpen && !this.isAnimating && (this.DOM.el.classList.remove("slideshow--previewopen"), this.contents[this.current].hide(), TweenMax.to(this.DOM.deco, .8, {
                        ease: Power4.easeInOut,
                        scaleX: 1,
                        scaleY: 1,
                        x: 0,
                        y: 0
                    }), this.prevSlide.moveToPosition({
                        position: -1
                    }), this.nextSlide.moveToPosition({
                        position: 1
                    }), this.currentSlide.moveToPosition({
                        position: 0
                    }).then(function() {
                        allowTilt = !0, t.isContentOpen = !1
                    }), this.currentSlide.showTexts())
                }
            }, {
                key: "bounceDeco",
                value: function(t, e) {
                    var i = this;
                    TweenMax.to(this.DOM.deco, .4, {
                        ease: "Power2.easeIn",
                        delay: e + .2 * e,
                        x: "next" === t ? -40 : 40,
                        y: "next" === t ? -40 : 40,
                        onComplete: function() {
                            TweenMax.to(i.DOM.deco, .6, {
                                ease: "Power2.easeOut",
                                x: 0,
                                y: 0
                            })
                        }
                    })
                }
            }, {
                key: "navigate",
                value: function(t) {
                    var e = this;
                    if (!this.isAnimating) {
                        this.isAnimating = !0, allowTilt = !1;
                        var i = "next" === t ? this.current < this.slidesTotal - 2 ? this.current + 2 : Math.abs(this.slidesTotal - 2 - this.current) : 2 <= this.current ? this.current - 2 : Math.abs(this.slidesTotal - 2 + this.current);
                        this.upcomingSlide = this.slides[i], this.current = "next" === t ? this.current < this.slidesTotal - 1 ? this.current + 1 : 0 : 0 < this.current ? this.current - 1 : this.slidesTotal - 1, this.prevSlide.moveToPosition({
                            position: "next" === t ? -2 : 0,
                            delay: "next" === t ? 0 : .14
                        }).then(function() {
                            "next" === t && e.prevSlide.hide()
                        }), this.currentSlide.moveToPosition({
                            position: "next" === t ? -1 : 1,
                            delay: .07
                        }), this.currentSlide.hideTexts(), this.bounceDeco(t, .07), this.nextSlide.moveToPosition({
                            position: "next" === t ? 0 : 2,
                            delay: "next" === t ? .14 : 0
                        }).then(function() {
                            "prev" === t && e.nextSlide.hide()
                        }), "next" === t ? this.nextSlide.showTexts() : this.prevSlide.showTexts(), this.upcomingSlide.moveToPosition({
                            position: "next" === t ? 1 : -1,
                            from: "next" === t ? 2 : -2,
                            delay: .21
                        }).then(function() {
                            [e.nextSlide, e.currentSlide, e.prevSlide].forEach(function(t) {
                                return t.reset()
                            }), e.render(), allowTilt = !0, e.isAnimating = !1
                        })
                    }
                }
            }]), i
        }(),
        calcWinsize = function() {
            return winsize = {
                width: window.innerWidth,
                height: window.innerHeight
            }
        };
    calcWinsize(), window.addEventListener("resize", calcWinsize);
    var allowTilt = !0;
    slideshow = new Slideshow(document.querySelector(".slideshow"));
    var loader = document.querySelector(".loader");
    imagesLoaded(document.querySelectorAll(".slide__img"), {
        background: !0
    }, function() {
        return document.body.classList.remove("loading")
    }), jQuery("#prev-button-event").click(function() {
        slideshow.navigate("prev")
    }), jQuery("#next-button-event").click(function() {
        slideshow.navigate("next")
    }), document.addEventListener("keydown", function(t) {
        37 == t.keyCode ? slideshow.navigate("left") : 39 == t.keyCode && slideshow.navigate("next")
    });
    var container = document.querySelector("#page");
    container.addEventListener("touchstart", startTouch, !1), container.addEventListener("touchmove", moveTouch, !1);
    var initialX = null
}! function(t) {
    function s(t, e, i, n, o, s) {
        this.selector = t, this.index = e, this.numberOfGlitchedLetter = i, this.innerText, this.charArray = [], this.charIndex = [], this.timeGlitch = n, this.timeBetweenGlitch = s, this.timePerLetter = o, this.maxCount = Math.floor(this.timeGlitch / this.timePerLetter), this.count = 0
    }
    var r, o = "☺Σ×Π#-_¯—→↓↑←0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    s.prototype.init = function() {
        this.innerText = this.selector.innerText, this.charArray = this.innerText.split(""), (null == this.numberOfGlitchedLetter || this.numberOfGlitchedLetter > this.innerText.length) && (this.numberOfGlitchedLetter = this.innerText.length), this.defineCharIndexToRandomize()
    }, s.prototype.defineCharIndexToRandomize = function() {
        this.charIndex = [];
        for (var t = 0; t < this.numberOfGlitchedLetter; t++) {
            var e = Math.floor(Math.random() * this.charArray.length);
            this.charIndex.push(e)
        }
    }, s.prototype.randomize = function() {
        for (var t = Array.from(this.charArray), e = 0; e < this.numberOfGlitchedLetter; e++) {
            var i = Math.floor(Math.random() * o.length),
                n = this.charIndex[e];
            " " !== t[n] && (t[n] = o[i])
        }
        this.selector.innerText = t.join("")
    }, s.prototype.update = function(t) {
        if (this.count >= this.maxCount - 1) {
            this.selector.innerText = this.innerText, this.defineCharIndexToRandomize();
            var e = this;
            setTimeout(function() {
                e.count = 0
            }, this.timeBetweenGlitch)
        } else this.randomize(), this.count++
    }, s.prototype.glitch = function() {
        var t = this;
        setInterval(function() {
            t.update(this)
        }, this.timePerLetter)
    };
    var a = [];
    ! function() {
        r = document.querySelectorAll(".glitch-text");
        for (var t = 0; t < r.length; t++) {
            var e = r[t],
                i = 2 + Math.floor(8 * Math.random()),
                n = (Math.floor(2500 * Math.random()), 1e3 + Math.floor(2500 * Math.random())),
                o = new s(e, t, i, 500, 65, n);
            o.init(), a.push(o)
        }
    }(),
    function() {
        for (var t = 0; t < a.length; t++) a[t].glitch()
    }()
}(jQuery), jQuery, AOS.init();
