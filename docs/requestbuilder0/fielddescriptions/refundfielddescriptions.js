// HTML in messages
var pOpen = "<p>"
var pClose = "</p>"
var linebreak = "<br>"
var openul = "<ul>"
var closeul = "</ul>"
var openli = "<li>"
var closeli = "</li>"
var openCode = "<code>"
var closeCode = "</code>"
var openBold = "<b>"
var closeBold = "</b>"
var paragraph = "<p>"
var paymentsRESTAPIHyperlink = '<a href="https://developers.paymentsos.com/docs/apis/payments/1.3.0/#operation/create-a-refund" target="_blank">see the API Reference</a>'+"."

// Strings
var fielddescr = {

  chasepaymentech: {

    reconciliation_id: openBold+"Notes specific to Chase Paymentech"+closeBold+linebreak+"It is recommended that you use the same value as supplied in the post authorization request. For a general description of this field, "+paymentsRESTAPIHyperlink

  },

  cybersource: {

    reconciliation_id: openBold+"Notes specific to CyberSource"+closeBold+linebreak+"A unique ID generated by you, used for transaction reconciliation. If the provider supports the"+openCode+"reconciliation_id"+closeCode+"then it will be used for the CyberSource Merchant Reference Number and Transaction Reference Number."+linebreak+"Notes:"+openul+openli+"Not all providers support the"+openCode+"reconciliation_id"+closeCode+"field."+closeli+openli+"For some providers the maximum field length is 22 alphanumeric characters (the UUID field type is too long)"+closeli+closeul+"For a general description of this field, "+paymentsRESTAPIHyperlink

  },

  credorax: {

    reconciliation_id: openBold+"Notes specific to Credorax"+closeBold+linebreak+"Must be unique. The maximum length is 32 characters. Only the following characters are allowed: " + openBold + "[\-0-9A-Za-z]+" + closeBold +". For a general description of this field, "+paymentsRESTAPIHyperlink

  },

  stripe: {

    refund_reason: openBold+"Notes specific to Stripe"+closeBold+linebreak+"Refund reason. This will only be passed to Stripe if the value is one of the following possible values:"+openCode+"duplicate"+closeCode+","+openCode+"fraudulent"+closeCode+","+" or"+openCode+" requested_by_customer"+closeCode+". For a general description of this field, "+paymentsRESTAPIHyperlink

  },

  shva: {

    amount: openBold+"Notes specific to Shva"+closeBold+linebreak+"To refund the customer for the full amount when the payment was made in installments, pass in the full amount in the refund request. The customer will be refunded for the payments already made and the remaining installment payments will be cancelled. For a general description of this field, "+paymentsRESTAPIHyperlink,

    reconciliation_id: openBold+"Notes specific to Shva"+closeBold+linebreak+"Numbers only, not more than eight digits. If more than eight digits are sent, then only the last eight digits will be used. For a general description of this field, "+paymentsRESTAPIHyperlink,

    provider_specific_data__shva___additional_details____addendum1: openBold+"Notes specific to Shva"+closeBold+linebreak+"Use this field for passing in additional data required by the card issuing companies. If you omit this field in the refund request, then PaymentsOS will take this field from the authorization or charge request (if provided). Maximum number of characters: 98. Contact the card issuing companies for help in understanding the format of the data you can pass in.",

    provider_specific_data__shva___additional_details____addendum2: openBold+"Notes specific to Shva"+closeBold+linebreak+"Use this field for passing in additional data required by the card issuing companies. If you omit this field in the refund request, then PaymentsOS will take this field from the authorization or charge request (if provided). Maximum number of characters: 98. Contact the card issuing companies for help in understanding the format of the data you can pass in.",

    provider_specific_data__shva___additional_details____addendum1settl: openBold+"Notes specific to Shva"+closeBold+linebreak+"Use this field for passing in additional data required by the card issuing companies. If you omit this field in the refund request, then PaymentsOS will take this field from the authorization or charge request (if provided). Maximum number of characters: 298. Note:If you provided a"+openCode+"statement_soft_descript or"+closeCode+" in the create payment request, then we will pass this in this field as well (adding it to any data you added yourself). Contact the card issuing companies for help in understanding the format of the data you can pass in.",

    provider_specific_data__shva___additional_details____addendum2settl: openBold+"Notes specific to Shva"+closeBold+linebreak+"Use this field for passing in additional data required by the card issuing companies. If you omit this field in the refund request, then PaymentsOS will take this field from the authorization or charge request (if provided). Maximum number of characters: 298. Contact the card issuing companies for help in understanding the format of the data you can pass in.",

    provider_specific_data__shva___additional_details____addendum3settl: openBold+"Notes specific to Shva"+closeBold+linebreak+"Use this field for passing in additional data required by the card issuing companies. If you omit this field in the refund request, then PaymentsOS will take this field from the authorization or charge request (if provided). Maximum number of characters: 298. Contact the card issuing companies for help in understanding the format of the data you can pass in.",

    provider_specific_data__shva___additional_details____addendum4settl: openBold+"Notes specific to Shva"+closeBold+linebreak+"Use this field for passing in additional data required by the card issuing companies. If you omit this field in the refund request, then PaymentsOS will take this field from the authorization or charge request (if provided). Maximum number of characters: 298. Contact the card issuing companies for help in understanding the format of the data you can pass in.",

    provider_specific_data__shva___additional_details____addendum5settl: openBold+"Notes specific to Shva"+closeBold+linebreak+"Use this field for passing in additional data required by the card issuing companies. If you omit this field in the refund request, then PaymentsOS will take this field from the authorization or charge request (if provided). Contact the card issuing companies for help in understanding the format of the data you can pass in."

  },

  wirecard: {

    capture_id: openBold+"Notes specific to Wirecard"+closeBold+linebreak+"This field is "+openBold+"required"+closeBold+" for partial refunds. For a general description of this field, "+paymentsRESTAPIHyperlink,

    reconciliation_id: openBold+"Notes specific to Credorax"+closeBold+linebreak+"Must be unique. For a general description of this field, "+paymentsRESTAPIHyperlink
  },

  paypal: {

    capture_id: openBold + "Notes specific to PayPal" + closeBold + linebreak + "If you sent multiple captures, then passing a " + openCode + "capture_id" + closeCode + " is " + openBold + "required" + closeBold + " so that PaymentsOS can relate the refund to the correct capture (for single captures, " + openCode + "capture_id" + closeCode + " is optional.). For a general description of this field, "+paymentsRESTAPIHyperlink,

    amount: openBold + "Notes specific to PayPal" + closeBold + linebreak + "If the refund request that is sent does not contain an amount, then the amount is determined using the " + openCode + "capture_id" + closeCode + "(if no " + openCode + "capture_id" + closeCode + " was provided, as may be the case in a single capture, then the full authorization amount is used for the refund amount). For a general description of this field, "+paymentsRESTAPIHyperlink,

  },

  payeezy: {

    capture_id: openBold + "Notes specific to Payeezy" + closeBold + linebreak + "If you sent multiple captures, then passing a " + openCode + "capture_id" + closeCode + " is " + openBold + "required" + closeBold + " so that PaymentsOS can relate the refund to the correct capture (for single captures, " + openCode + "capture_id" + closeCode + " is optional.). For a general description of this field, "+paymentsRESTAPIHyperlink,

    amount: openBold + "Notes specific to Payeezy" + closeBold + linebreak + "If the refund request that is sent does not contain an amount, then the amount is determined using the " + openCode + "capture_id" + closeCode + "(if no " + openCode + "capture_id" + closeCode + " was provided, as may be the case in a single capture, then the full authorization amount is used for the refund amount). For a general description of this field, "+paymentsRESTAPIHyperlink,

  }


}
