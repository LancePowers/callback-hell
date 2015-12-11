var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');

router.get('/', function (req, res, next) {

    init.then(makeRequest)

});

var reddit = 'https://www.reddit.com/r/Web_Development/';
var hackerNews = 'https://news.ycombinator.com/';
var mdn = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript';
var python = 'https://www.python.org/';

var pythonFirst = $('#success-story-2 > blockquote > a').text();
var redditFirst = $('.title > a').first().text()
var hackerFirst = $('.title > a:nth-child(2)').first().text();
var mdnFirst = $('#Join_the_JavaScript_community').text();

var init = new Promise(function (resolve, reject) {
    if (makeRequest({
            source: reddit,
            target: redditFirst
        }).status === 200) {
        resolve(true)
    }
    reject(false)

})

function makeRequest(result) {
    request(source, function (error, response, html) {
        if (!error) {
            console.log('here')
            var $ = cheerio.load(html);
            if (target.indexOf('javascript') !== -1) {
                return {
                    status: 200,
                    source: mdn,
                    target: mdnFirst
                }
            } else {
                return {
                    status: 200,
                    source: mdn,
                    target: mdnFirst
                }
            }
        }
    })
}



module.exports = router;