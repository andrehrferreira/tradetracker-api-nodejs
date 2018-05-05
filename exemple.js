/**
 * Trade Tracker API interface for Node.js
 *
 * @author André Ferreira <andrehrf@gmail.com>
 * @see https://affiliate.tradetracker.com/portal/affiliateSignup?loc=en_GB (Create account)
 * @see https://affiliate.tradetracker.com/webService (customerID and passphrase)
 * @see https://affiliate.tradetracker.com/customerSite/list (affiliateSiteID)
 */

"use strict";

let TradeTracker = require("./index.js"),
    tradetracker = new TradeTracker("customerID", "passphrase", "affiliateSiteID");

/*tradetracker.programs({ 'assignmentStatus': 'accepted' }, (err, result) => {
    console.log(result);
});

tradetracker.coupons({ }, (err, result) => {
    console.log(result);
});

tradetracker.report({ registrationDateFrom: "2018-05-01", registrationDateTo: "2018-05-05", transactionType: "sale" }, (err, result) => {
    console.log(result);
});*/
