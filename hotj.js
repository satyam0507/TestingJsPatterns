

var hj = {};
hj.json = function() {
    var b = {
        parse: function(a) {
            return (JSON.parse || JSON.decode)(a)
        },
        tryParse: function(a, d) {
            var c = !0;
            try {
                var e = b.parse(a);
                d && d(e)
            } catch (f) {
                c = !1
            }
            return c
        },
        stringify: function(a, b, c) {
            var e, f;
            if (void 0 !== a) return e = Array.prototype.toJSON, delete Array.prototype.toJSON, f = JSON.stringify || JSON.encode, a = ('"\u2028"' === f("\u2028") ? function(a, b, c) {
                return f(a, b, c).replace(/\u2028|\u2029/g, function(a) {
                    return "\\u202" + ("\u2028" === a ? "8" : "9")
                })
            } : f)(a, b, c), e && (Array.prototype.toJSON = e), a
        }
    };
    return b
}();
var READABLE_COOKIES = {
        _hjOptOut: ["*"]
    },
    WRITEABLE_COOKIES = {
        _hjOptOut: ["https://www.hotjar.com", "https://local.hotjar.com", "http://local.hotjar.com", "https://insights-staging.hotjar.com", "http://insights-staging.hotjar.com"]
    };

function allowCommand(b, a) {
    var d = ("_hjSet" === b.action ? WRITEABLE_COOKIES : "_hjGet" === b.action ? READABLE_COOKIES : [])[b.key];
    return 0 <= d.indexOf("*") || 0 <= d.indexOf(a)
}

function getCookie(b) {
    return (b = RegExp("(?:^|; )" + b + "=([^;]*)").exec(document.cookie)) ? b[1] : void 0
}

function setCookie(b, a, d) {
    var c = new Date;
    c.setDate(c.getDate() + d);
    document.cookie = b + "=" + a + "; path=/; expires=" + c.toUTCString()
}

function onMessage(b) {
    hj.json.tryParse(b.data, function(a) {
        if (a.action) {
            if (!allowCommand(a, b.origin)) throw Error("Command " + a.action + " not allowed on cookie: " + a.key);
            switch (a.action) {
                case "_hjSet":
                    setCookie(a.key, a.value, a.expiresDays);
                    break;
                case "_hjGet":
                    a = hj.json.stringify({
                        messageId: a.messageId,
                        value: getCookie(a.key) || !1
                    }), window.parent.postMessage(a, "*")
            }
        }
    })
}
window.addEventListener ? window.addEventListener("message", onMessage, !1) : window.attachEvent("onmessage", onMessage);





//script we get


(function(h, o, t, j, a, r) {
    h.hj = h.hj || function() {
        (h.hj.q = h.hj.q || []).push(arguments)
    };
    h._hjSettings = {
        hjid: 430925,
        hjsv: 5
    };
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script');
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
})(window, document, '//static.hotjar.com/c/hotjar-', '.js?sv=');















window.hjSiteSettings=window.hjSiteSettings || {
    "testers_widgets":[],
    "polls":[ {
        "persist_condition":"once",
        "targeting":[ {
            "negate": false, "pattern": "http:\/\/satyamsingh.herokuapp.com\/", "match_operation": "simple", "component": "url"
        }
        ,
        {
            "negate": false, "pattern": "phone", "match_operation": "exact", "component": "device"
        }
        ,
        {
            "negate": false, "pattern": "tablet", "match_operation": "exact", "component": "device"
        }
        ,
        {
            "negate": false, "pattern": "desktop", "match_operation": "exact", "component": "device"
        }
        ],
        "language":"en",
        "targeting_percentage":100,
        "created_epoch_time":1488261147,
        "display_condition":"delay",
        "content": {
            "thankyou":"Thank you for answering this Poll. Your feedback is highly appreciated!",
            "questions":[ {
                "nextByAnswer": [], "text": "Quick question: How can we improve this page? Is anything missing?", "labels": null, "answers": null, "next": "byOrder", "type": "single-open-ended-multiple-line", "randomize_answer_order": false
            }
            ,
            {
                "nextByAnswer":[],
                "text":"Would you like a response to your question or comment?",
                "labels":null,
                "answers":[ {
                    "text": "Yes (please enter your email address)", "comments": true
                }
                ,
                {
                    "text": "No thanks", "comments": false
                }
                ],
                "next":"byOrder",
                "type":"single-close-ended",
                "randomize_answer_order":false
            }
            ]
        }
        ,
        "effective_show_branding":true,
        "background":"#333333",
        "skin":"dark",
        "position":"right",
        "display_delay":3,
        "id":136138
    }
    ],
    "features":[],
    "recording_capture_keystrokes":true,
    "site_id":430925,
    "deferred_page_contents":[ {
        "targeting":[ {
            "negate": false, "pattern": "http:\/\/satyamsingh.herokuapp.com\/", "match_operation": "simple", "component": "url"
        }
        ,
        {
            "negate": false, "pattern": "tablet", "match_operation": "exact", "component": "device"
        }
        ],
        "id":3426969
    }
    ],
    "record_targeting_rules":[],
    "surveys":[],
    "heatmaps":[ {
        "targeting":[ {
            "negate": false, "pattern": "http:\/\/satyamsingh.herokuapp.com\/", "match_operation": "simple", "component": "url"
        }
        ],
        "created_epoch_time":1488261103,
        "id":1197856,
        "selector_version":2
    }
    ],
    "feedback_widgets":[],
    "forms":[],
    "record":true,
    "r":1.0,
    "state_change_listen_mode":"automatic"
}

;
window.hjBootstrap=window.hjBootstrap||function(d) {
    var e=function() {}
    ,
    a=document,
    f=a.head||a.getElementsByTagName("head")[0],
    c,
    b;
    a.addEventListener&&(c=a.createElement("script"), c.async=1, c.src=d, f.appendChild(c), c=["iframe#_hjRemoteVarsFrame {", "display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;", "}"], d=a.createElement("style"), d.type="text/css", d.styleSheet?d.styleSheet.cssText=c.join(""):d.appendChild(a.createTextNode(c.join(""))), f.appendChild(d), b=a.createElement("iframe"), b.style.cssText=c[1], b.name="_hjRemoteVarsFrame", b.title="_hjRemoteVarsFrame", b.id="_hjRemoteVarsFrame", b.src="https://"+(window._hjSettings.varsHost||"vars.hotjar.com")+"/rcj-99d43ead6bdf30da8ed5ffcb4f17100c.html", b.onload=function() {
        e.varsLoaded=!0;
        "undefined"!=typeof hj&&hj.event&&hj.event.signal("varsLoaded")
    }
    , e.varsJar=b, a.body?a.body.appendChild(b):a.addEventListener("DOMContentLoaded", function() {
        a.body.appendChild(b)
    }
    ), window.hjBootstrap=e)
}

;
hjBootstrap('https://script.hotjar.com/modules-da55819135e1301968b5441be1459c44.js');




























//iframe code 



var hj = {};
hj.json = function() {
    var b = {
        parse: function(a) {
            return (JSON.parse || JSON.decode)(a)
        },
        tryParse: function(a, d) {
            var c = !0;
            try {
                var e = b.parse(a);
                d && d(e)
            } catch (f) {
                c = !1
            }
            return c
        },
        stringify: function(a, b, c) {
            var e, f;
            if (void 0 !== a) return e = Array.prototype.toJSON, delete Array.prototype.toJSON, f = JSON.stringify || JSON.encode, a = ('"\u2028"' === f("\u2028") ? function(a, b, c) {
                return f(a, b, c).replace(/\u2028|\u2029/g, function(a) {
                    return "\\u202" + ("\u2028" === a ? "8" : "9")
                })
            } : f)(a, b, c), e && (Array.prototype.toJSON = e), a
        }
    };
    return b
}();
var READABLE_COOKIES = {
        _hjOptOut: ["*"]
    },
    WRITEABLE_COOKIES = {
        _hjOptOut: ["https://www.hotjar.com", "https://local.hotjar.com", "http://local.hotjar.com", "https://insights-staging.hotjar.com", "http://insights-staging.hotjar.com"]
    };

function allowCommand(b, a) {
    var d = ("_hjSet" === b.action ? WRITEABLE_COOKIES : "_hjGet" === b.action ? READABLE_COOKIES : [])[b.key];
    return 0 <= d.indexOf("*") || 0 <= d.indexOf(a)
}

function getCookie(b) {
    return (b = RegExp("(?:^|; )" + b + "=([^;]*)").exec(document.cookie)) ? b[1] : void 0
}

function setCookie(b, a, d) {
    var c = new Date;
    c.setDate(c.getDate() + d);
    document.cookie = b + "=" + a + "; path=/; expires=" + c.toUTCString()
}

function onMessage(b) {
    hj.json.tryParse(b.data, function(a) {
        if (a.action) {
            if (!allowCommand(a, b.origin)) throw Error("Command " + a.action + " not allowed on cookie: " + a.key);
            switch (a.action) {
                case "_hjSet":
                    setCookie(a.key, a.value, a.expiresDays);
                    break;
                case "_hjGet":
                    a = hj.json.stringify({
                        messageId: a.messageId,
                        value: getCookie(a.key) || !1
                    }), window.parent.postMessage(a, "*")
            }
        }
    })
}
window.addEventListener ? window.addEventListener("message", onMessage, !1) : window.attachEvent("onmessage", onMessage);