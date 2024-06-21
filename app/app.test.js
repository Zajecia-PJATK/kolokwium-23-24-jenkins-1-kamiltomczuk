const { JSDOM } = require('jsdom');
const assert = require('assert');

describe('Index page', () => {
    it('should display "Hello World"', (done) => {
        JSDOM.fromFile('index.html').then(dom => {
            const h1 = dom.window.document.querySelector('h1');
            assert.strictEqual(h1.textContent, 'Hello World');
            done();
        }).catch(done);
    });
});
