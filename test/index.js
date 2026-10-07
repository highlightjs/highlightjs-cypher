require('should');
const promisify = require('util').promisify;
const path = require('path');
const hljs = require('highlight.js');
const fs = require('fs');
const hljsDefineCypher = require('../src/cypher');
hljs.registerLanguage('cypher', hljsDefineCypher);

const readFile = promisify(fs.readFile);

describe('Cypher syntax highlighting', () =>
{
  function itShouldPerformSyntaxHighlighting()
  {
    hljs.registerLanguage('cypher', hljsDefineCypher);
    const files = fs.readdirSync(path.join(__dirname, 'markup'))
      .filter(f => f.endsWith('.txt') && !f.includes('.expect.')).sort();
    const scenarios = files.map(f => f.replace(/\.txt$/, ''));
    scenarios.forEach(scenario => {
      it(`should perform syntax highlighting on ${scenario}`, async () => {
        const file = `${scenario}.txt`;
        const filePath = path.join(__dirname, 'markup', file);
        const expectFilePath = filePath.replace('.txt', '.expect.txt');
        const code = await readFile(filePath, 'utf-8');
        const expected = await readFile(expectFilePath, 'utf-8');
        const result = hljs.highlight('cypher', code);
        const actual = result.value;
        actual.trim().should.eql(expected.trim(), file);
      });
    })
  }

  itShouldPerformSyntaxHighlighting();

  // The following test is ignored because the language detected is pgsql.
  // Since the Cypher syntax can be confused with SQL, I don't think we should use "highlightAuto" (as it will produce unexpected results)
  // Please note that Highlight.js can also return css or lisp depending on the code used.
  xit('should detect cypher language', async () =>
  {
    var code = await readFile(path.join(__dirname, 'detect', 'default.txt'), 'utf-8');
    var actual = hljs.highlightAuto(code).language;
    actual.should.eql('cypher');
  });
});
