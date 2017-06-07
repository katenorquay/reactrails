var test = require("tape");
var userReducer = require("../reducers/userReducer");
var freeze = require("deep-freeze");

test("test setup working", (t) => {
    t.pass();
    t.end();
});

test("tests LOGIN_INIT", function (t) {
  var initial = {
    loginInProgress: false
  };
  freeze(initial);
  var expected = {
    loginInProgress: true
  };
  var actual = userReducer(initial, {type: "LOGIN_INIT"});
  t.deepEqual(actual, expected, "LOGIN_INIT sets loginInProgress to true");
  t.end();
});

test("test LOGIN_SUCCESSFUL", function(t) {
  var initial = {
    loginInProgress: true,
    loginUnsuccessful: false,
    loggedIn: false,
    currentUser: {}
  };
  freeze(initial);
  var expected = {
    loginInProgress: false,
    loginUnsuccessful: false,
    loggedIn: true,
    currentUser: {id: 12, email: "bella@mailcom"}
  };
  var actual = userReducer(initial, {type: "LOGIN_SUCCESSFUL", payload: {id: 12, email: "bella@mailcom"}});
  t.deepEqual(actual, expected, "LOGIN_SUCCESSFUL updates relevent fields");
  t.end();
});

test("test LOGIN_UNSUCCESSFUL", function (t) {
  var initial = {
    loginInProgress: true,
    loginUnsuccessful: false
  };
  freeze(initial);
  var expected = {
    loginInProgress: false,
    loginUnsuccessful: true
  };
  var actual = userReducer(initial, {type: "LOGIN_UNSUCCESSFUL"});
  t.deepEqual(actual, expected, "LOGIN_UNSUCCESSFUL updates relevant fields");
  t.end();
});

test("test SIGNUP_UNSUCCESSFUL", function (t) {
  var initial = {
    loginInProgress: true,
    signupError: false
  };
  freeze(initial);
  var expected = {
    loginInProgress: false,
    signupError: true
  };
  var actual = userReducer(initial, {type: "SIGNUP_UNSUCCESSFUL"});
  t.deepEqual(actual, expected, "SIGNUP_UNSUCCESSFUL updates relevant fields");
  t.end();
});

test("test SIGNOUT", function (t) {
  var initial = {
    loggedIn: true,
    currentUser: {id: 12, email: "bella@mailcom"},
    signUp: true
  };
  freeze(initial);
  var expected = {
    loggedIn: false,
    currentUser: {},
    signUp: false
  };
  var actual = userReducer(initial, {type: "SIGNOUT"});
  t.deepEqual(actual, expected, "SIGNOUT updates relevant fields");
  t.end();
});

test("test TOGGLE_SIGNUP_LOGIN", function (t) {
  var initial = {
    signUp: true,
    loginUnsuccessful: true
  };
  freeze(initial);
  var expected = {
    signUp: false,
    loginUnsuccessful: false
  };
  var actual = userReducer(initial, {type: "TOGGLE_SIGNUP_LOGIN"});
  t.deepEqual(actual, expected, "TOGGLE_SIGNUP_LOGIN updates relevant fields");
  t.end();
});
