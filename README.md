![logo](logo.svg)

## Cypher language syntax highlighting plugin for [highlight.js](https://highlightjs.org/)

Cypher is a declarative graph query language created by [Neo4j](https://neo4j.com/) for the graph database management system.

For more about the Cypher here:

* [The Neo4j Cypher Manual](https://neo4j.com/docs/cypher-manual/current/#cypher-intro)

## Getting started

You must add the `highlight.js` file from [highlight.js](https://github.com/highlightjs/highlight.js) in your web page or node app, load up this module and apply it to `hljs`.

If you are not using a build system and just want to embed this in your webpage:

```javascript
<script type="text/javascript" src="js/highlight.pack.js"></script>
<script type="text/javascript" src="js/cypher.js"></script>
<script type="text/javascript">
    hljs.registerLanguage('cypher', window.hljsDefineCypher);
    hljs.initHighlightingOnLoad();
</script>
```

If you are using `webpack` or `rollup` or `browserify` or `node`:

```javascript
var hljs = require('highlightjs');
var hljsDefineCypher = require('highlightjs-cypher');

hljsDefineCypher(hljs);
hljs.initHighlightingOnLoad();
```

## Licence

© 2019 <a href="http://creativecommons.org/publicdomain/zero/1.0/"><img style="vertical-align: middle" src="https://img.shields.io/badge/License-CC0%201.0-660000.svg" alt="CC0 1.0" ></a> highlight.js