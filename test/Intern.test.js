const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "SYDU";
  const e = new Intern("Steve", 1, "email@mail.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Steve", 1, "email@mail.com", "SYDU");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "SYDU";
  const e = new Intern("Steve", 1, "email@mail.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
