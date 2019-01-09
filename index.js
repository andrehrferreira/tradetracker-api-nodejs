"use strict";

let soap = require("soap"),
    soapCookie = require('soap-cookie');

module.exports = function(customerID, passphrase, affiliateSiteID) {
    return {
        authenticate: function(func, params, cb){
            var _this = this;

            soap.createClientAsync("http://ws.tradetracker.com/soap/affiliate?wsdl").then((client) => {
                client.authenticateAsync({customerID: customerID, passphrase: passphrase, sandbox: false, locale: "en_GB", demo: false}).then((result) => {
                    client.setSecurity(new soapCookie(client.lastResponseHeaders));

                    if(typeof func == "function")
                        func.apply(_this, [params, cb, client]);
                });
            });
        },

        /**
         * Get advertiser programs
         *
         * @see https://affiliate.tradetracker.com/webService/index/method/getCampaigns
         * @see https://affiliate.tradetracker.com/webService/index/type/CampaignFilter
         * @param object params (https://affiliate.tradetracker.com/webService/index/type/CampaignFilter)
         * @param function cb,
         * @param object client
         */
        programs: function(params, cb, client) {
            if(!client){ this.authenticate(this.programs, params, cb); }
            else{
                client.getCampaignsAsync({ affiliateSiteID: affiliateSiteID, options: params }).then((result) => {
                    cb(null, result[0].campaigns.item);
                }).catch((err) => { cb(err, null); })
            }
        },

        /**
         * Get coupons
         *
         * @see https://affiliate.tradetracker.com/webService/index/method/getMaterialIncentiveVoucherItems
         * @param object params (https://affiliate.tradetracker.com/webService/index/type/MaterialItemFilter)
         * @param function cb
         * @param object client
         */
        coupons: function(params, cb, client){
            if(!client){ this.authenticate(this.coupons, params, cb); }
            else{
                client.getMaterialIncentiveVoucherItemsAsync({ affiliateSiteID: affiliateSiteID, materialOutputType: "javascript", options: params }).then((result) => {
                    cb(null, result[0]);
                }).catch((err) => { cb(err, null); })
            }
        },

        /**
         * Returns basic statistics of clicks, views, leads and sales
         *
         * @see https://affiliate.tradetracker.com/webService/index/method/getConversionTransactions
         * @param object params (https://affiliate.tradetracker.com/webService/index/type/ConversionTransactionFilter)
         * @param function cb
         * @param object client
         */
        report: function(params, cb, client){
            if(!client){ this.authenticate(this.report, params, cb); }
            else{
                client.getConversionTransactionsAsync({ affiliateSiteID: affiliateSiteID, options: params }).then((result) => {
                    cb(null, result);
                }).catch((err) => { cb(err, null); });
            }
        }
    };
}
