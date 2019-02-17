var should = require('should');
var promisify = require("util").promisify;
let path = require('path');
let hljs = require("highlightjs");
const fs = require("fs");
let hljsDefineCypher = require("../cypher");

const readdir = promisify(fs.readdir),
      readFile = promisify(fs.readFile);

describe("Cypher Tests", () => 
{
    beforeEach(() => 
    {
        hljsDefineCypher(hljs);
    });
    it("should generate correct query graphy", async () => {
        var files = await readdir(path.join(__dirname, "query"));
        files = files.filter(f => !f.includes(".expect."));
        for(var f of files) {
            let fn = path.join(__dirname, "query", f);
            let expectFn = fn.replace(".txt", ".expect.txt");
            var code = await readFile(fn, "utf-8");
            var exp = await readFile(expectFn, "utf-8");
            var actual = hljs.highlight("cypher", code).value;
            actual.trim().should.eql(exp.trim(), f);
        }
    });
    it("should be detected correctly", async () => {
        var code = await readFile(path.join(__dirname, "detect.txt"), "utf-8");
        var actual = hljs.highlightAuto(code).language;
        actual.should.eql("cypher");
    });
});