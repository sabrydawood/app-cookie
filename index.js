var trueDomain = require('true-domain');

var cookie = {
  /** Removes a cookie by name.
   * @param {string} key - The key to be removed.
   */
  remove: function(key) {
    this.set(key, '', -1);
  },

  /** Sets the value of a cookie.
   * @param {string} key - The key of the cookie.
   * @param {string} value - The value of the cookie.
   * @param {number} [expires] - The lifetime of the cookie in days.
   */
  set: function(key, value, expires) {
    var lifetimeDays = expires ? expires : 7;
    expires = new Date();
    expires.setTime(+expires + lifetimeDays * 864e+5);

    document.cookie = [
      encodeURIComponent(key), '=', encodeURIComponent(String(value)),
      // use expires attribute, max-age is not supported by IE
      '; expires=', expires.toUTCString(),
      '; path=/',
      trueDomain === 'localhost' ? '' : '; domain=' + trueDomain
    ].join('');
  },

  /** Returns the value of a cookie under the specified key.
   * @param {string} key - The key to return the value of.
   * @returns {string} - The value of the cookie.
   */
  get: function(key) {
    if (!key) {
      return null;
    }

    var cookies = document.cookie ? document.cookie.split('; ') : [];

    for (var i = cookies.length; i--;) {
      var parts = cookies[i].split('=');
      var name = decodeURIComponent(parts.shift());
      var cookie = parts.join('=');

      if (key && key === name) {
        return decodeURIComponent(cookie);
      }
    }

    return null;
  }
};

module.exports = cookie;
