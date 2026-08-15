/**
 * Commons survey — response collector.
 *
 * Paste this into a Google Apps Script project bound to a Google Sheet
 * (Extensions → Apps Script from the sheet), then Deploy → New deployment →
 * type "Web app", Execute as "Me", Who has access "Anyone".
 * Copy the /exec URL — that is the endpoint the survey posts to.
 *
 * Every submission appends one row. Download the sheet as CSV any time
 * (File → Download → Comma-separated values).
 */

var COLS = [
  'submitted_at',
  'q1_concept_interest_1to5',
  'q2_whats_open_feeling',
  'q3_description',
  'q3_template',
  'q3_your_comment',
  'q3_filing',
  'q4_town_return_1to5',
  'q5_cadence',
  'q6_what_to_change',
  'received_at'
];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(COLS);
      sheet.getRange(1, 1, 1, COLS.length).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }
    var data = JSON.parse(e.postData.contents);
    data.received_at = new Date().toISOString();
    sheet.appendRow(COLS.map(function (c) { return data[c] === undefined ? '' : data[c]; }));
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return json({ ok: true, message: 'Commons survey collector is running.' });
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
