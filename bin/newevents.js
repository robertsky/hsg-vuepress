var ical = require('ical');

ical.fromURL('https://www.google.com/calendar/ical/mengwong%40hackerspace.sg/public/basic.ics', {},
function(err, data) {
	var futureEvents = [];
	for (var k in data) {
		if (data.hasOwnProperty(k)) {
			var ev = data[k]
			if (ev.start && ! isNaN(ev.start) && (ev.start > Date.now() - 60 * 60 * 1000)) {
				var e = {
					"Name": ev.summary,
					"When": ev.start.toISOString()
				}

				if (ev.url && ev.url.indexOf("http") == 0) {
					e["URL"] = ev.url;
				}
				else if (ev.description && ev.description.indexOf("http") >=0) {
					e["URL"] = ev.description.match(/https?:\/\/[^\s"]+/)[0];
				}
				else {
					e["URL"] = '';
				}

				if (ev.description) {
					e["Host"] = ev.description.match(/^(Host:)(.*)/m).length === 3 ? ev.description.match(/^(Host:)(.*)/m)[2].trim() : '';
					e["Description"] = ev.description.match(/^(?!Contact|Host|URL|Date).+$/gm).length > 0 ? ev.description.match(/^(?!Contact|Host|URL|Date).+$/gm).join('\r\n') : ev.description;
				}

				futureEvents.push(e);
			}
		}
	}
	if (!futureEvents) {
		return;
	}

	futureEvents.sort(function(a, b) {
		var keyA = new Date(a.When),
		keyB = new Date(b.When);
		// Compare the 2 dates
		if (keyA < keyB) return - 1;
		if (keyA > keyB) return 1;
		return 0;
	});

	var futureEventsObj = {}

	for (var i = 0; i < futureEvents.length; i++) {
		futureEvents[i].id = i+1
		futureEventsObj[i+1] = futureEvents[i];
	}

	var j = JSON.stringify(futureEventsObj, undefined, 2);

	var fs = require('fs');
	fs.writeFile("docs/.vuepress/public/data/events.json", j, function(err) {
		if (err) {
			console.log(err);
		}
	});
});
