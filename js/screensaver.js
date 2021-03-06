! function(t, e, n, o, i) {
  "use strict";
  var r = {
      videos: [],
      videoDuration: -1,
      interval: 12e4,
      stagnantDelay: 5e3,
      stagnantTrigger: !0,
      target: o("body"),
      triggerKeycode: 32,
      nextVidKeycode: 39
    },
    a = {},
    s = null,
    u = null,
    d = !1,
    c = {
      randomInt: function(t, e) {
        return n.floor(n.random() * (e - t + 1) + t)
      }
    },
    l = function() {
      var t = {
        target: a.target,
        transitionDuration: 1e3,
        $: null,
        setVideo: function(t) {
          for (var n = e.createDocumentFragment(), i = Object.keys(t), r = 0; r < i.length; r++) ! function(e) {
            var r = i[e],
              a = o("<source></source>", {
                type: "video/" + r,
                src: t[r]
              });
            n.appendChild(a[0])
          }(r);
          this.$.html(n)
        },
        fadeIn: function() {
          var t = this,
            e = o.Deferred();
          return this.$.on("loadeddata", function() {
            t.$.animate({
              opacity: 1
            }, t.transitionDuration, function() {
              e.resolve()
            })
          }), this.target.append(this.$), e.promise()
        },
        fadeOut: function() {
          var t = this,
            e = o.Deferred();
          return this.$.animate({
            opacity: 0
          }, this.transitionDuration, function() {
            t.$.remove(), e.resolve()
          }), e.promise()
        }
      };
      if ("body" === t.target.prop("tagName").toLowerCase()) t.$ = o("<video></video>", {
        style: "width: 100%;height: 100%;position: absolute; opacity:0;",
        "class": "vidcon",
        autoplay: "autoplay",
        loop: "loop"
      });
      else {
        var n = t.target.outerWidth() >= t.target.outerHeight() ? "100%" : "auto",
          i = "100%" === n ? "100%" : "auto";
        t.$ = o("<video></video>", {
          style: "width: " + i + ";height: " + n + ";position: absolute; opacity:0;",
          "class": "vidcon",
          autoplay: "autoplay",
          loop: "loop"
        })
      }
      return t
    },
    f = function() {
      var t = o.Deferred(),
        e = c.randomInt(0, a.videos.length - 1),
        n = a.videos[e],
        i = l();
      return i.setVideo(n), i.fadeIn().then(function() {
        s && s.fadeOut(), s = i, t.resolve(s)
      }), t.promise()
    },
    v = function() {
      d = !0, f().then(function(t) {
        console.log('video started');
        var e = 1e3 * (t.$[0].duration - t.$[0].currentTime),
          n = e < a.interval ? e : a.interval;
        n -= 5e3, setTimeout(function() {
          d && v()
        }, n)
        $('#vid-overlay').css('visibility', 'visible');
      })
    },
    h = function() {
      console.log('removed');
      d = !1, s && (s.$.remove(), s = null);
      setTimeout(function(){
        $('#vid-overlay').css('visibility', 'hidden');
      }, 0.3);
    },
    g = function() {
      u = setTimeout(function() {
        v()
      }, a.stagnantDelay), o(t).on("click mousemove mousedown keydown", function() {
        t.clearTimeout(u), h(), u = setTimeout(function() {
          v()
        }, a.stagnantDelay)
      })
    },
    p = function() {
      o(t).on("keydown", function(t) {
        var e = t.which;
        e === a.triggerKeycode ? s ? h() : v() : e === a.nextVidKeycode && s && f()
      })
    };
  o.webScreenSaver = function(t) {
    if (a = o.extend({}, r, t), !a.videos || a.videos.length <= 0) throw "ERROR: No videos provided.";
    return u = null, a.stagnantTrigger ? g() : p(), this
  }, o.fn.webScreenSaver = function(t) {
    if (a = o.extend({}, r, t), a.target = this, o(this).css("overflow", "hidden"), "static" === o(this).css("position") && o(this).css("position", "relative"), !a.videos || a.videos.length <= 0) throw "ERROR: No videos provided.";
    return u = null, a.stagnantTrigger ? g() : p(), this
  }
}(window, document, Math, jQuery);
