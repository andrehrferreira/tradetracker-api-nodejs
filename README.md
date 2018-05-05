# Trade Tracker API

[![npm package](https://nodei.co/npm/tradetracker-api.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/tradetracker-api/)

API integration with Trade Tracker

## Install

```bash
$ npm install tradetracker-api
```

## Get customerID, passphrase and affiliateSiteID

* Create account - https://affiliate.tradetracker.com/portal/affiliateSignup?loc=en_GB
* API - https://affiliate.tradetracker.com/webService (customerID and passphrase)
* affiliateSiteID - https://affiliate.tradetracker.com/customerSite/list

## Usage

```js
"use strict";

let TradeTracker = require("./index.js"),
    tradetracker = new TradeTracker("customerID", "passphrase", "affiliateSiteID");

tradetracker.programs({ 'assignmentStatus': 'accepted' }, (err, result) => {
    console.log(JSON.stringify(result));
});

tradetracker.coupons({ }, (err, result) => {
    console.log(result);
});

tradetracker.report({ registrationDateFrom: "2018-05-01", registrationDateTo: "2018-05-05", transactionType: "sale" }, (err, result) => {
    console.log(result);
});
```
