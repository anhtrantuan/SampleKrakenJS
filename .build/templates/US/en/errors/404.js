(function(){dust.register("errors/404",body_0);var blocks={"body":body_1};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.p("layouts/master",ctx,{});}body_0.__dustBody=!0;function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.w("<h1>File not found</h1><p>The URL <code>").f(ctx.get(["url"], false),ctx,"h").w("</code> did not resolve to a route.</p>");}body_1.__dustBody=!0;return body_0;})();