/*jslint indent: 2, maxlen: 80, continue: false, unparam: false */
/* -*- tab-width: 2 -*- */
/*global define: true, module: true, require: true */
((typeof define === 'function') && define.amd ? define : function (factory) {
  'use strict';
  var m = ((typeof module === 'object') && module), e = (m && m.exports);
  if (e) { m.exports = (factory(require, e, m) || m.exports); }
})(function () {
  'use strict';

  return function basicWebPage(opts) {
    var pg = [ '', [ '!DOCTYPE html>' ] ],
      indent = (opts.indent && { indentTags: opts.indent });
    pg.head = [ 'head', indent,
      { metaHttpEquiv: { Content_Type: 'text/html; charset=UTF-8' } },
      (opts.title && [ 'title', opts.title ]),
      ].filter(Boolean);
    pg.head.title = opts.title;
    pg.body = [ 'body', indent,
      ].filter(Boolean);
    pg.push([ 'html', pg.head, pg.body ]);
    if (indent) { pg.push('\n'); }
    return pg;
  };

});
