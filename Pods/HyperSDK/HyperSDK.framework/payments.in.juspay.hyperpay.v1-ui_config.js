window.bb_page_config_version = '1.2.1';

console.log(window.bb_page_config_version);
console.log("Hello, Big Basket!");

function getPaymentOptions(gatewayRefId) {
    switch (gatewayRefId) {
        case "bigbasket_b2c_gift_card":
        case "bigbasket_b2c_bbstar":
        case "bigbasket_b2c_fundwallet":
        case "bigbasket_b2c_csr":
        case "bigbasket_b2b_pay_now":
        case "bigbasket_b2c_pay_now":
        case "bigbasket_b2c_pay_now_forget_voucher":
        case "bigbasket_b2b_pay_now_forget_voucher":
            return getPaymentOptionsV1();
        case "bigbasket_b2c_checkout":
        case "bigbasket_b2b_checkout":
        case "bigbasket_b2c_fv":
        case "bigbasket_b2b_fv":
            return getPaymentOptionsV2();
        case "bigbasket_b2b_payment_management":
        case "bigbasket_b2c_payment_management":
            return getPaymentOptionsV3();
        case "bbdaily_b2c_fund_wallet":
            return getPaymentOptionsV4();
        default:
            return getPaymentOptionsV1();
    }
}

function getPaymentOptionsV1() {
    return [
        constructPO("savedWallets"),
        constructPO("savedCards"),
        constructPO("cards"),
        constructPO("nb"),
        constructPO("upi"),
        constructPO("wallets"),
        constructPO("payLater")
    ];
}

function getPaymentOptionsV2() {
    return [
        constructPO("savedWallets"),
        constructPO("cod"),
        constructPO("cardod"),
        constructPO("savedCards"),
        constructPO("cards"),
        constructPO("nb"),
        constructPO("upi"),
        constructPO("wallets"),
        constructPO("payLater"),
        constructPO("mealCards")
    ];
}

function getPaymentOptionsV3() {
    return [
        constructPO("savedCards"),
        constructPO("savedUpi"),
        constructPO("wallets")
    ];
}

function getPaymentOptionsV4() {
    return [
        constructPO("savedWallets"),
        constructPO("savedCards"),
        constructPO("cards"),
        constructPO("nb"),
        constructPO("upi"),
        constructPO("wallets"),
        constructPO("payLater"),
        constructPO("mealCards")
    ];
}

function getOfferOptions() {
    return [
        constructPO("savedWallets"),
        constructPO("unlinkedWallets"),
        constructPO("savedCards"),
        constructPO("upi"),
        constructPO("nb")
    ];
}

function constructPO(po, group, visibility, onlyEnable, onlyDisable) {
    group = group || "others";
    visibility = visibility || "VISIBLE";
    var payOpt = {
        "group": group,
        "po": po,
        "visibility": visibility
    };
    if (onlyEnable) {
        payOpt["onlyEnable"] = onlyEnable;
    }
    if (onlyDisable) {
        payOpt["onlyDisable"] = onlyDisable;
    }
    return payOpt;
}

function getHighlightConfig() {
    return [];
}

function getMoreOptionConfig() {
    return {
        "icon": "wallet_icon",
        "name": "WalletFlow",
        "view": {
            "action": "payWithWallet",
            "content": "editText",
            "footer": "button",
            "toolbar": {
                "back": "VISIBLE",
                "pageTitle": "MoreOptionTitle"
            }
        },
        "visibility": "gone"
    };
}

function getPopularBanks() {
    return [
        "NB_AXIS",
        "NB_ICICI",
        "NB_SBI",
        "NB_HDFC"
    ];
}

function getScreenTransition() {
    return {
        "curve": [
            "0.1",
            "0.4",
            "0.4",
            "0.9"
        ],
        "duration": "200"
    };
}

function getSavedConfig() {
    return {
        "otherSaved": "gone",
        "preffered": "visible",
        "saved": "VISIBLE"
    };
}

function getButtonText(gatewayRefId) {
    switch(gatewayRefId) {
        case "bigbasket_b2c_gift_card":
        case "bigbasket_b2c_bbstar":
        case "bigbasket_b2c_fundwallet":
        case "bigbasket_b2c_csr":
        case "bigbasket_b2b_pay_now":
        case "bigbasket_b2c_pay_now":
        case "bigbasket_b2c_pay_now_forget_voucher":
        case "bigbasket_b2b_pay_now_forget_voucher":
            return "Pay";
        case "bigbasket_b2c_checkout":
        case "bigbasket_b2b_checkout":
        case "bigbasket_b2c_fv":
        case "bigbasket_b2b_fv":
            return "Place Order & Pay";
        case "bigbasket_b2b_payment_management":
        case "bigbasket_b2c_payment_management":
            return "Pay";
        default:
            return "Pay";
    }
}

function showOfferSection(gatewayRefId) {
    switch(gatewayRefId) {
        case "bigbasket_b2c_gift_card":
            return "visible";
        case "bigbasket_b2c_bbstar":
        case "bigbasket_b2c_fundwallet":
        case "bigbasket_b2c_csr":
        case "bigbasket_b2b_pay_now":
        case "bigbasket_b2c_pay_now":
        case "bigbasket_b2c_pay_now_forget_voucher":
        case "bigbasket_b2b_pay_now_forget_voucher":
            return "gone";
        case "bigbasket_b2c_checkout":
        case "bigbasket_b2b_checkout":
        case "bigbasket_b2c_fv":
        case "bigbasket_b2b_fv":
            return "visible";
        case "bigbasket_b2b_payment_management":
        case "bigbasket_b2c_payment_management":
            return "gone";
        default:
            return "gone";
    }
}

function isPopupEnabled(gatewayRefId) {
    switch(gatewayRefId) {
        case "bigbasket_b2c_checkout":
        case "bigbasket_b2b_checkout":
            return "true";
        default:
            return "false";
    }
}

function ppConfig(gatewayRefId){
    return {
               "backgroundColor": "#eff0f4",
               "buttonText" : getButtonText(gatewayRefId),
               "checkboxSize": "20",
               "combineWallets": "true",
               "containerPadding": "10",
               "cornerRadius": "3.0",
               "cvvInputBoxType": "boxed",
               "expandPopularNBView": "false",
               "expandUpiView": "false",
               "expandedWalletView": "false",
               "fontColor": "#000000",
               "fontSize": "16",
               "gridFontSize": "13",
               "gridIconSize": "32",
               "headerSize": "17",
               "highlight": getHighlightConfig(),
               "highlightViewType": "grid",
               "iconSize": "26",
               "lineSeparator": "true",
               "listItemHeight": "60",
               "modalView": "false",
               "moreOption": getMoreOptionConfig(),
               "offerOptions": getOfferOptions(),
               "offers": showOfferSection(gatewayRefId),
               "paymentOptions": getPaymentOptions(gatewayRefId),
               "popularBanks": getPopularBanks(),
               "primaryColor": "#e56167",
               "primaryFont": "ProximaNova",
               "saved": getSavedConfig(),
               "screenTransition": getScreenTransition(),
               "showPopup": isPopupEnabled(gatewayRefId),
               "spacing": "12",
               "toolbar": {
                   "back": "VISIBLE",
                   "pageTitle": "Payment"
               },
               "toolbarColor": "#689f38",
               "upiCollectWithGodel": "false",
               "verifyMobile": "true",
               "widgets": {
                    "allowed": ["paymentPage", "paymentManagement"],
                    "primary": "paymentPage"
               }
           };
}

window.getUIConfig = function () {
    var gatewayRefId = "";
    if (window.__payload && window.__payload.order_details) {
        var order_details = JSON.parse(window.__payload.order_details);
        if (order_details["metadata.JUSPAY:gateway_reference_id"]) {
            gatewayRefId = order_details["metadata.JUSPAY:gateway_reference_id"];
        }
    }
    return ppConfig(gatewayRefId);
}

JBridge.setConfig(JSON.stringify(window.getUIConfig()));
