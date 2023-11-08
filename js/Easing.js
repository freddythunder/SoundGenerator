/** easing functions
 * These were taken from StackOverflow: https://stackoverflow.com/questions/38472006/ease-in-and-out-curve-in-for-loop
 * There are more I'd like to add from here: https://gizma.com/easing/
 * **/
const Easing = {
    linear: function(n) {
        return n;
    },
    easeIn: function(n) {
        return Math.pow(n, 1.7);
    },
    easeOut: function(n) {
        return Math.pow(n, .48);
    },
    easeInOut: function(n) {
        let q = .48 - n / 1.04,
            Q = Math.sqrt(.1734 + q * q),
            x = Q - q,
            X = Math.pow(Math.abs(x), 1 / 3) * (x < 0 ? -1 : 1),
            y = -Q - q,
            Y = Math.pow(Math.abs(y), 1 / 3) * (y < 0 ? -1 : 1),
            t = X + Y + .5;
        return (1 - t) * 3 * t * t + t * t * t;
    },
    backIn: function(n) {
        let s = 1.70158;
        return n * n * ((s + 1) * n - s);
    },
    backOut: function(n) {
        n = n - 1;
        let s = 1.70158;
        return n * n * ((s + 1) * n + s) + 1;
    },
    elastic: function(n) {
        if (n == !!n) {
            return n;
        }
        return Math.pow(2, -10 * n) * Math.sin((n - .075) * (2 * Math.PI) / .3) + 1;
    },
    bounce: function(n) {
        let s = 7.5625,
            p = 2.75,
            l;
        if (n < (1 / p)) {
            l = s * n * n;
        } else {
            if (n < (2 / p)) {
                n -= (1.5 / p);
                l = s * n * n + .75;
            } else {
                if (n < (2.5 / p)) {
                    n -= (2.25 / p);
                    l = s * n * n + .9375;
                } else {
                    n -= (2.625 / p);
                    l = s * n * n + .984375;
                }
            }
        }
        return l;
    }

}