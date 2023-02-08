$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/BankAndCash.feature");
formatter.feature({
  "line": 2,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalityFeature"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User should be able to login with valid credentials",
  "description": "and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@HWScenario"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters the \"\u003cusername\u003e\" in \"userName\"field",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters the \"\u003cpassword\u003e\" in \"passWord\"field",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on\"login\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on\"bankCash\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks on\"newAccount\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters\"\u003caccountTitle\u003e\" in \"account\"field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters\"\u003cdescription\u003e\" in \"description\"field",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters\"\u003cinitialBalance\u003e\" in \"initialBalance\"field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters\"\u003caccountNumber\u003e\" in \"accountNumber\"field",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters\"\u003ccontactPerson\u003e\" in \"contactPerson\"field",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters\"\u003cPhone\u003e\" in \"phone\"field",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enters\"\u003cinternetBankingURL\u003e\" in \"internetBankingUrl\"field",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User clicks on\"submit\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "Phone",
        "internetBankingURL"
      ],
      "line": 25,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Broke Boy",
        "Savings",
        "250",
        "12345166",
        "Troy Aikman",
        "4691231234",
        "www.bofa.com"
      ],
      "line": 26,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1789061200,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User should be able to login with valid credentials",
  "description": "and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@HWScenario"
    },
    {
      "line": 1,
      "name": "@FunctionalityFeature"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters the \"demo@techfios.com\" in \"userName\"field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters the \"abc123\" in \"passWord\"field",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on\"login\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on\"bankCash\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks on\"newAccount\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters\"Broke Boy\" in \"account\"field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters\"Savings\" in \"description\"field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters\"250\" in \"initialBalance\"field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters\"12345166\" in \"accountNumber\"field",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters\"Troy Aikman\" in \"contactPerson\"field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters\"4691231234\" in \"phone\"field",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enters\"www.bofa.com\" in \"internetBankingUrl\"field",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User clicks on\"submit\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "bankAndCashSteps.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 560933500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 17
    },
    {
      "val": "userName",
      "offset": 40
    }
  ],
  "location": "bankAndCashSteps.user_enters_the_in_field(String,String)"
});
formatter.result({
  "duration": 4081053900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 17
    },
    {
      "val": "passWord",
      "offset": 29
    }
  ],
  "location": "bankAndCashSteps.user_enters_the_in_field(String,String)"
});
formatter.result({
  "duration": 4089047100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 15
    }
  ],
  "location": "bankAndCashSteps.user_clicks_on_on(String)"
});
formatter.result({
  "duration": 3740647600,
  "status": "passed"
});
formatter.match({
  "location": "bankAndCashSteps.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 195828900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bankCash",
      "offset": 15
    }
  ],
  "location": "bankAndCashSteps.user_clicks_on_on(String)"
});
formatter.result({
  "duration": 45028700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newAccount",
      "offset": 15
    }
  ],
  "location": "bankAndCashSteps.user_clicks_on_on(String)"
});
formatter.result({
  "duration": 227848800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Broke Boy",
      "offset": 12
    },
    {
      "val": "account",
      "offset": 27
    }
  ],
  "location": "bankAndCashSteps.user_enters_in_field(String,String)"
});
formatter.result({
  "duration": 53609800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Savings",
      "offset": 12
    },
    {
      "val": "description",
      "offset": 25
    }
  ],
  "location": "bankAndCashSteps.user_enters_in_field(String,String)"
});
formatter.result({
  "duration": 60124900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "250",
      "offset": 12
    },
    {
      "val": "initialBalance",
      "offset": 21
    }
  ],
  "location": "bankAndCashSteps.user_enters_in_field(String,String)"
});
formatter.result({
  "duration": 58132900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345166",
      "offset": 12
    },
    {
      "val": "accountNumber",
      "offset": 26
    }
  ],
  "location": "bankAndCashSteps.user_enters_in_field(String,String)"
});
formatter.result({
  "duration": 59845100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Troy Aikman",
      "offset": 12
    },
    {
      "val": "contactPerson",
      "offset": 29
    }
  ],
  "location": "bankAndCashSteps.user_enters_in_field(String,String)"
});
formatter.result({
  "duration": 61695000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4691231234",
      "offset": 12
    },
    {
      "val": "phone",
      "offset": 28
    }
  ],
  "location": "bankAndCashSteps.user_enters_in_field(String,String)"
});
formatter.result({
  "duration": 61393900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "www.bofa.com",
      "offset": 12
    },
    {
      "val": "internetBankingUrl",
      "offset": 30
    }
  ],
  "location": "bankAndCashSteps.user_enters_in_field(String,String)"
});
formatter.result({
  "duration": 60634800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 15
    }
  ],
  "location": "bankAndCashSteps.user_clicks_on_on(String)"
});
formatter.result({
  "duration": 536667300,
  "status": "passed"
});
formatter.match({
  "location": "bankAndCashSteps.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 28609800,
  "status": "passed"
});
});