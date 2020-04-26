const functions = require("./functions");

test("Returns false if filename ends with '.DOC' ", () => {
  const filename = "test.DOC";
  const actual = functions.isValidFileName(filename);
  const expected = false;
  expect(actual).toBe(expected);
});

test("Returns true if filename does not end with '.DOC' ", () => {
  const filename = "test.txt";
  const actual = functions.isValidFileName(filename);
  const expected = true;
  expect(actual).toBe(expected);
});
