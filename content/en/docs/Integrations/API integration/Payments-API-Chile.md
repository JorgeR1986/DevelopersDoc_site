---
title: "Payments API - Chile"
linkTitle: "Payments API - Chile"
date: 2021-05-03T15:48:08-05:00
description: >
  Payments API Chile lets your shop process different transaction types with multiple payment methods.
weight: 20
tags: ["subtopic"]
---
<script src="/js/searchcodes.js"></script>

To integrate with Payments API Chile, target your request to the following URLs according to your environment.

{{% alert title="URL" color="info"%}}
* Test: ```https://sandbox.api.payulatam.com/payments-api/4.0/service.cgi```
* Production: ```https://api.payulatam.com/payments-api/4.0/service.cgi```
{{% /alert %}}

## Available methods
Payments API includes the following methods:

* [Submit transaction with credit, debit or prepaid cards]({{< ref "Payments-API-Chile.md#submit-transaction-with-credit-or-debit-cards" >}})
* [Submit transaction with cash]({{< ref "Payments-API-Chile.md#submit-transaction-with-cash" >}})
* [Submit transaction with debit and prepaid cards using WebPay Plus]({{< ref "Payments-API-Chile.md#submit-transaction-with-debit-and-prepaid-cards" >}})
* [Available payment methods query]({{< ref "Payments-API-Chile.md#available-payment-methods-query" >}})
* [Ping]({{< ref "Payments-API-Chile.md#ping" >}})

{{% alert title="Note" color="info"%}}
To confirm the status of a transaction, you can use one of the following options:
* Navigate to the the URL set in the `transaction.notifyUrl` variable or the _**Confirmation URL**_ option located in the PayU Module in _**Settings**_ > _**Technical configuration**_.
* Use the [Queries API or SDK]({{< ref "Queries.md" >}}).
{{% /alert %}}

## Submit transaction with credit, debit or prepaid cards {#submit-transaction-with-credit-or-debit-cards}
This method lets you process the payments performed by your customers using credit, debit or prepaid cards. For Chile, you can perform the two-step flows (**Authorization**, **Capture**), and one-step flows (**Charge**). For more information, refer to [Payment flows]({{< ref "payments.md#payment-flows" >}}).

{{% alert title="Note" color="info"%}}
Transactions using two-step flows are available under demand. Contact your Sales representative for more information.
{{% /alert %}}

### Variables for request and response

<details>
<summary>Request</summary>
<label for="table1" class="showMandatory"><input type="checkbox" id="table1" name="table1" value="true" onchange="showMandatory(this)"> Show mandatory fields only</label>
<br>
<div class="variables"></div>

| Field name | Format | Size | Description | Mandatory |
|---|---|---|---|:-:|
| language | Alphanumeric | 2 | Language used in the request, this language is used to display the error messages generated. [See supported languages]({{< ref "response-codes-and-variables.html#supported-languages" >}}). | Yes |
| command | Alphanumeric | Max:32 | Set `SUBMIT_TRANSACTION`. | Yes |
| test (JSON)<hr>isTest (XML) | Boolean |  | Set `true` if the request is in test mode. Otherwise, set `false`. | Yes |
| merchant |  |  | This object has the authentication data. | Yes |
| merchant > apiLogin | Alphanumeric | Min:12 Max:32 | User or login provided by PayU. [How do I get my API Login]({{< ref "integrations.html#api-key-and-api-login" >}}) | Yes |
| merchant > apiKey | Alphanumeric | Min:6 Max:32 | Password provided by PayU. [How do I get my API Key]({{< ref "integrations.html#api-key-and-api-login" >}}) | Yes |
| transaction |  |  | This object has the transaction data. | Yes |
| transaction > order |  |  | This object has the order data. | Yes |
| transaction > order > accountId | Number |  | Identifier of your account. | Yes |
| transaction > order > referenceCode | Alphanumeric | Min:1 Max:255 | Represents the identifier of the order in your system. | Yes |
| transaction > order > description | Alphanumeric | Min:1 Max:255 | Description of the order. | Yes |
| transaction > order > language | Alphanumeric | 2 | Language used in emails sent to the buyer and the seller. | Yes |
| transaction > order > notifyUrl | Alphanumeric | Max:2048 | Confirmation URL of the order. | No |
| transaction > order > partnerId | Alphanumeric | Max:255 | Partner ID in PayU. | No |
| transaction > order > signature | Alphanumeric | Max:255 | The signature associated to the form. For more information refer [Authentication signature]({{< ref "integrations.html#authentication-signature" >}}). | Yes |
| transaction > order > shippingAddress |  |  | Shipping address. | No |
| transaction > order > shippingAddress > street1 | Alphanumeric | Max:100 | Address Line 1. | No |
| transaction > order > shippingAddress > street2 | Alphanumeric | Max:100 | Address Line 2. | No |
| transaction > order > shippingAddress > city | Alphanumeric | Max:50 | Address city. | No |
| transaction > order > shippingAddress > state | Alphanumeric | Max:40 | Address State. | No |
| transaction > order > shippingAddress > country | Alphanumeric | 2 | Address country. | No |
| transaction > order > shippingAddress > postalCode | Alphanumeric | Max:8 | Address Zip code. | No |
| transaction > order > shippingAddress > phone | Alphanumeric | Max:11 | Phone number associated to the address. | No |
| transaction > order > buyer |  |  | Buyer information. | Yes |
| transaction > order > buyer > merchantBuyerId | Alphanumeric | Max:100 | Buyer ID in your system. | No |
| transaction > order > buyer > fullName | Alphanumeric | Max:150 | Full name of the buyer. | Yes |
| transaction > order > buyer > emailAddress | Alphanumeric | Max:255 | E-mail of the buyer. | Yes |
| transaction > order > buyer > contactPhone | Alphanumeric | Max:20 | Phone number of the buyer. | Yes |
| transaction > order > buyer > dniNumber | Alphanumeric | Max:20 | Identification number of the buyer. | Yes |
| transaction > order > buyer > shippingAddress | Alphanumeric |  | Shipping address of the buyer. | Yes |
| transaction > order > buyer > shippingAddress > street1 | Alphanumeric | Max:150 | Buyer's shipping address Line 1. | Yes |
| transaction > order > buyer > shippingAddress > city | Alphanumeric | Max:50 | Buyer's shipping address city. | Yes |
| transaction > order > buyer > shippingAddress > state | Alphanumeric | Max:40 | Buyer's shipping address state. | Yes |
| transaction > order > buyer > shippingAddress > country | Alphanumeric | 2 | Buyer's shipping address country in format ISO 3166 alpha-2. | Yes |
| transaction > order > buyer > shippingAddress > postalCode | Number | Max:20 | Buyer's shipping address zip code. | Yes |
| transaction > order > buyer > shippingAddress > phone | Number | Max:20 | Buyer's shipping address phone number. | Yes |
| transaction > order > additionalValues > |  | 64 | Amount of the order or its associated values. | Yes |
| transaction > order > additionalValues > TX_VALUE | Alphanumeric | 64 | Amount of the transaction. | Yes |
| transaction > order > additionalValues > TX_VALUE > value | Number | 12, 2 | Specifies the amount of the transaction. This amount cannot include decimals. | Yes |
| transaction > order > additionalValues > TX_VALUE > currency | Alphanumeric | 3 | ISO code of the currency. [See accepted currencies]({{< ref "response-codes-and-variables.html#accepted-currencies" >}}). | Yes |
| transaction > order > additionalValues > TX_TAX | Alphanumeric | 64 | Amount of the Value Added Tax (VAT). | Yes |
| transaction > order > additionalValues > TX_TAX > value | Number | 12, 2 | Specifies the amount of the VAT.  | No |
| transaction > order > additionalValues > TX_TAX > currency | Alphanumeric | 3 | ISO code of the currency. [See accepted currencies]({{< ref "response-codes-and-variables.html#accepted-currencies" >}}). | No |
| transaction > order > additionalValues > TX_TAX_RETURN_BASE | Alphanumeric | 64 | Base value to calculate the VAT.<br>If the amount does not have IVA, send 0.<br>This value may have two decimal digits.  | No |
| transaction > order > additionalValues > TX_TAX_RETURN_BASE > value | Number | 12, 2 | Specifies the base amount of the transaction. | No |
| transaction > order > additionalValues > TX_TAX_RETURN_BASE > currency | Alphanumeric | 3 | ISO code of the currency. [See accepted currencies]({{< ref "response-codes-and-variables.html#accepted-currencies" >}}). | No |
| transaction > creditCardTokenId |  |  | Include this parameter when the transaction is done using a tokenized card replacing the information of the credit card. For more information, refer to [Tokenization API]({{< ref "Tokenization-API.md" >}}) | No |
| transaction > creditCard |  |  | Credit card information. This object and its parameters are mandatory when the payment is performed using not tokenized credit card. | No |
| transaction > creditCard > number | Alphanumeric | Min:13 Max:20 | Credit card number. | No |
| transaction > creditCard > securityCode | Alphanumeric | Min:1 Max:4 | Credit card security code (CVC2, CVV2, CID). | No |
| transaction > creditCard > expirationDate | Alphanumeric | 7 | Credit card expiration date. Format `YYYY/MM`. | No |
| transaction > creditCard > name | Alphanumeric | Min:1 Max:255 | Holder's name displayed in the credit card. | No |
| transaction > creditCard > processWithoutCvv2 | Boolean | Max:255 | Allows you to process transactions without including the credit card security code. Your commerce requires PayU's authorization before using this feature. | No |
| transaction > debitCard |  |  | Debit card information. This object and its parameters are mandatory when the payment is performed using debit card. | No |
| transaction > debitCard > number | Alphanumeric | Min:13 Max:20 | Debit card number. | No |
| transaction > debitCard > securityCode | Alphanumeric | Min:1 Max:4 | Debit card security code (CVC2, CVV2, CID). | No |
| transaction > debitCard > expirationDate | Alphanumeric | 7 | Debit card expiration date. Format `YYYY/MM`. | No |
| transaction > debitCard > name | Alphanumeric | Min:1 Max:255 | Holder's name displayed in the debit card. | No |
| transaction > payer |  |  | Payer information. | Yes |
| transaction > payer > emailAddress | Alphanumeric | Max:255 | Payer e-mail address. | Yes |
| transaction > payer > merchantPayerId | Alphanumeric | Max:100 | Identifier of the payer in your system. | No |
| transaction > payer > fullName | Alphanumeric | Max:150 | Name of the payer which must meet the name sent in the parameter `transaction.creditCard.name` for credit card payments. | Yes |
| transaction > payer > billingAddress |  |  | Billing address. | Yes |
| transaction > payer > billingAddress > street1 | Alphanumeric | Max:100 | Billing Address Line 1. | Yes |
| transaction > payer > billingAddress > street2 | Alphanumeric | Max:100 | Billing Address Line 2. | No |
| transaction > payer > billingAddress > city | Alphanumeric | Max:50 | Billing address city. | Yes |
| transaction > payer > billingAddress > state | Alphanumeric | Max:40 | Billing address state. | No |
| transaction > payer > billingAddress > country | Alphanumeric | 2 | Billing address country in format ISO 3166 Alpha-2. | Yes |
| transaction > payer > billingAddress > postalCode | Alphanumeric | Max:20 | Billing address zip code. | No |
| transaction > payer > billingAddress > phone | Alphanumeric | Max:20 | Billing address phone number. | No |
| transaction > payer > birthdate | Alphanumeric | Max:10 | Payer's date of birth. | No |
| transaction > payer > contactPhone | Alphanumeric | Max:20 | Payer's phone number. | Yes |
| transaction > payer > dniNumber | Alphanumeric | Max:20 | Identification number of the buyer. | Yes |
| transaction > payer > dniType | Alphanumeric | 2 | Identification type of the buyer. [See Document types]({{< ref "response-codes-and-variables.html#document-types" >}}). | No |
| transaction > type | Alphanumeric | 32 | Set this value according to the transaction you want:<br><ul style="margin-bottom: initial;"><li>`AUTHORIZATION`</li><li>`CAPTURE`</li><li>`AUTHORIZATION_AND_CAPTURE` for one-step flows.</li></ul> | Yes |
| transaction > paymentMethod | Alphanumeric | 32 | Select a valid Credit or Debit card Payment Method. [See the available Payment Methods for Chile]({{< ref "select-your-payment-method.html#Chile" >}}). | Yes |
| transaction > paymentCountry | Alphanumeric | 2 | Set `CL` for Chile. | Yes |
| transaction > deviceSessionId | Alphanumeric | Max:255 | Session identifier of the device where the customer performs the transaction. For more information, refer to [this topic]({{< ref "integrations.html#_devicesessionid_-variable" >}}). | Yes |
| transaction > ipAddress | Alphanumeric | Max:39 | IP address of the device where the customer performs the transaction. | Yes |
| transaction > cookie | Alphanumeric | Max:255 | Cookie stored by the device where the customer performs the transaction. | Yes |
| transaction > userAgent | Alphanumeric | Max:1024 | The User agent of the browser where the customer performs the transaction. | Yes |
| transaction > extraParameters |  |  | Additional parameters or data associated with the request. The maximum size of each _extraParameters_ name is 64 characters.<br>In JSON, the _extraParameters_ parameter follows this structure: <br>`"extraParameters": {`<br>&emsp;`"INSTALLMENTS_NUMBER": 1`<br>`}`<br><br>In XML, the _extraParameters_ parameter follows this structure: <br>`<extraParameters>`<br>&emsp;`<entry>`<br>&emsp;&emsp;`<string>INSTALLMENTS_NUMBER</string>`<br>&emsp;&emsp;`<string>1</string>`<br>&emsp;`</entry>`<br>`</extraParameters>`  | No |

</details>

<details>
<summary>Response</summary>
<br>
<div class="variables"></div>

| Field name | Format | Size | Description |
|-|-|-|-|
| code | Alphanumeric |  | The response code of the transaction. Possible values are `ERROR` and `SUCCESS`. |
| error | Alphanumeric | Max:2048 | The error message associated when the response code is `ERROR`. |
| transactionResponse |  |  | The response data. |
| transactionResponse > orderId | Number |  | The generated or existing order Id in PayU. |
| transactionResponse > transactionId | Alphanumeric | 36 | The identifier of the transaction in PayU. |
| transactionResponse > state | Alphanumeric | Max:32 | The status of the transaction. |
| transactionResponse > responseCode | Alphanumeric | Max:64 | The response code associated with the status. |
| transactionResponse > paymentNetworkResponseCode | Alphanumeric | Max:255 | The response code returned by the financial network. |
| transactionResponse > paymentNetworkResponseErrorMessage | Alphanumeric | Max:255 | The error message returned by the financial network. |
| transactionResponse > trazabilityCode | Alphanumeric | Max:32 | The traceability code returned by the financial network. |
| transactionResponse > authorizationCode | Alphanumeric | Max:12 | The authorization code returned by the financial network. |
| transactionResponse > responseMessage | Alphanumeric | Max:2048 | Message associated with the response code. |
| transactionResponse > operationDate | Date |  | Creation date of the response in the PayU??s system. |
| transactionResponse > extraParameters |  |  | Additional parameters or data associated with the response. <br>In JSON, the _extraParameters_ parameter follows this structure: <br>`"extraParameters": {`<br>&emsp;`"BANK_REFERENCED_CODE": "CREDIT"`<br>`}`<br><br>In XML, the _extraParameters_ parameter follows this structure: <br>`<extraParameters>`<br>&emsp;`<entry>`<br>&emsp;&emsp;`<string>BANK_REFERENCED_CODE</string>`<br>&emsp;&emsp;`<string>CREDIT</string>`<br>&emsp;`</entry>`<br>`</extraParameters>` |

</details>

#### Considerations
* For payments with credit card tokens, include the parameters `transaction.creditCardTokenId` and `transaction.creditCard.securityCode` (if you process with security code) replacing the information of the credit card. For more information, refer to [Tokenization API]({{< ref "Tokenization-API.md" >}}).
* Transactions in CHILEAN PESOS with decimal amounts are not allowed.
* Transactions with credit card using two-step flows are available for single installment payments. If you send a two-step transaction with more two installments or more, this transaction is automatically rejected by the acquirer.<br>Two-step flow is available under request, contact your Sales representative for more information.
* By default, processing credit cards without security code is not enabled. If you want to enable this feature, contact your Sales representative. After this feature is enabled for you, send in the request the variable `creditCard.processWithoutCvv2` as true and remove the variable `creditCard.securityCode`.

### Authorization
Use this method to perform the **Authorization** step of a two-step flow. In this step, you authorize the payment but the amount is not debited until you [capture]({{< ref "payments-api-chile.md#capture" >}}) the funds.<br>The following are the request and response bodies for this transaction type.

{{< tabs tabTotal="2" tabID="1" tabName1="JSON" tabName2="XML" >}}
{{< tab tabNum="1" >}}
<br>

Request body:
```JSON
{
   "language": "es",
   "command": "SUBMIT_TRANSACTION",
   "merchant": {
      "apiKey": "4Vj8eK4rloUd272L48hsrarnUA",
      "apiLogin": "pRRXKOl8ikMmt9u"
   },
   "transaction": {
      "order": {
         "accountId": "512325",
         "referenceCode": "PRODUCT_TEST_2021-06-25T16:33:48.512Z",
         "description": "Payment test description",
         "language": "es",
         "signature": "77d72fb91eb43f9b15fb300d5f173da3",
         "notifyUrl": "http://www.payu.com/notify",
         "additionalValues": {
            "TX_VALUE": {
               "value": 10000,
               "currency": "CLP"
         }
         },
         "buyer": {
            "merchantBuyerId": "1",
            "fullName": "First name and second buyer name",
            "emailAddress": "buyer_test@test.com",
            "contactPhone": "7563126",
            "dniNumber": "123456789",
            "shippingAddress": {
               "street1": "Autopista Del Sol, 0 - Km.43 Costado Sur",
               "street2": "5555487",
               "city": "RM",
               "state": "Talagante",
               "country": "CL",
               "postalCode": "000000",
               "phone": "7563126"
            }
         },
         "shippingAddress": {
            "street1": "Autopista Del Sol, 0 - Km.43 Costado Sur",
            "street2": "5555487",
            "city": "RM",
            "state": "Talagante",
            "country": "CL",
            "postalCode": "0000000",
            "phone": "7563126"
         }
      },
      "payer": {
         "merchantPayerId": "1",
         "fullName": "First name and second payer name",
         "emailAddress": "payer_test@test.com",
         "contactPhone": "7563126",
         "dniNumber": "5415668464654",
         "billingAddress": {
            "street1": "Autopista Del Sol, 0 - Km.43 Costado Sur",
            "street2": "125544",
            "city": "RM",
            "state": "Talagante",
            "country": "CL",
            "postalCode": "000000",
            "phone": "7563126"
         }
      },
      "creditCard": {
         "number": "4097440000000004",
         "securityCode": "777",
         "expirationDate": "2022/12",
         "name": "APPROVED"
      },
      "extraParameters": {
         "INSTALLMENTS_NUMBER": 1
      },
      "type": "AUTHORIZATION",
      "paymentMethod": "VISA",
      "paymentCountry": "CL",
      "deviceSessionId": "vghs6tvkcle931686k1900o6e1",
      "ipAddress": "127.0.0.1",
      "cookie": "pt1t38347bs6jc9ruv2ecpv7o2",
      "userAgent": "Mozilla/5.0 (Windows NT 5.1; rv:18.0) Gecko/20100101 Firefox/18.0"
   },
   "test": false
}
```
<br>

Response body:
```JSON
{
    "code": "SUCCESS",
    "error": null,
    "transactionResponse": {
        "orderId": 1400455722,
        "transactionId": "49cb24d9-eda6-43de-aad9-a17ffa9e5fb8",
        "state": "APPROVED",
        "paymentNetworkResponseCode": "195569",
        "paymentNetworkResponseErrorMessage": null,
        "trazabilityCode": "49cb24d9-eda6-43de-aad9-a17ffa9e5fb8",
        "authorizationCode": "195569",
        "pendingReason": null,
        "responseCode": "APPROVED",
        "errorCode": null,
        "responseMessage": "Approved transaction",
        "transactionDate": null,
        "transactionTime": null,
        "operationDate": 1624616739664,
        "referenceQuestionnaire": null,
        "extraParameters": {
            "BANK_REFERENCED_CODE": "CREDIT",
            "TRANSBANK_DIRECT_TOKEN": "01ab3984007f3010d2adb6c02d104f85b8268ccf4b95da4b56f3abdb339e1c52"
        },
        "additionalInfo": null
    }
}
```

{{< /tab >}}

{{< tab tabNum="2" >}}
<br>

Request body:
```XML
<request>
   <language>es</language>
   <command>SUBMIT_TRANSACTION</command>
   <merchant>
      <apiKey>4Vj8eK4rloUd272L48hsrarnUA</apiKey>
      <apiLogin>pRRXKOl8ikMmt9u</apiLogin>
   </merchant>
   <transaction>
      <order>
         <accountId>512325</accountId>
         <referenceCode>PRODUCT_TEST_2021-06-25T16:33:48.512ZZ</referenceCode>
         <description>Payment test description</description>
         <language>es</language>
         <signature>77d72fb91eb43f9b15fb300d5f173da3</signature>
         <notifyUrl>http://www.payu.com/notify</notifyUrl>
         <additionalValues>
            <entry>
               <string>TX_VALUE</string>
               <additionalValue>
                  <value>10000</value>
                  <currency>CLP</currency>
               </additionalValue>
            </entry>
         </additionalValues>
         <buyer>
            <merchantBuyerId>1</merchantBuyerId>
            <fullName>First name and second buyer name</fullName>
            <emailAddress>buyer_test@test.com</emailAddress>
            <contactPhone>7563126</contactPhone>
            <dniNumber>123456789</dniNumber>
            <shippingAddress>
               <street1>Autopista Del Sol, 0 - Km.43 Costado Sur</street1>
               <street2>5555487</street2>
               <city>RM</city>
               <state>Talagante</state>
               <country>CL</country>
               <postalCode>000000</postalCode>
               <phone>7563126</phone>
            </shippingAddress>
         </buyer>
         <shippingAddress>
            <street1>Autopista Del Sol, 0 - Km.43 Costado Sur</street1>
            <street2>5555487</street2>
            <city>RM</city>
            <state>Talagante</state>
            <country>CL</country>
            <postalCode>0000000</postalCode>
            <phone>7563126</phone>
         </shippingAddress>
      </order>
      <payer>
         <merchantPayerId>1</merchantPayerId>
         <fullName>First name and second payer name</fullName>
         <emailAddress>payer_test@test.com</emailAddress>
         <contactPhone>7563126</contactPhone>
         <dniNumber>5415668464654</dniNumber>
         <billingAddress>
            <street1>Autopista Del Sol, 0 - Km.43 Costado Sur</street1>
            <street2>5555487</street2>
            <city>RM</city>
            <state>Talagante</state>
            <country>CL</country>
            <postalCode>000000</postalCode>
            <phone>7563126</phone>
         </billingAddress>
      </payer>
      <creditCard>
         <number>4097440000000004</number>
         <securityCode>777</securityCode>
         <expirationDate>2022/12</expirationDate>
         <name>APPROVED</name>
      </creditCard>
      <extraParameters>
         <entry>
            <string>INSTALLMENTS_NUMBER</string>
            <string>1</string>
         </entry>
      </extraParameters>
      <type>AUTHORIZATION</type>
      <paymentMethod>VISA</paymentMethod>
      <paymentCountry>CL</paymentCountry>
      <deviceSessionId>vghs6tvkcle931686k1900o6e1</deviceSessionId>
      <ipAddress>127.0.0.1</ipAddress>
      <cookie>pt1t38347bs6jc9ruv2ecpv7o2</cookie>
      <userAgent>Mozilla/5.0 (Windows NT 5.1; rv:18.0) Gecko/20100101 Firefox/18.0</userAgent>
   </transaction>
   <isTest>false</isTest>
</request>
```
<br>

Response body:
```XML
<paymentResponse>
    <code>SUCCESS</code>
    <transactionResponse>
        <orderId>1400455931</orderId>
        <transactionId>56f77e02-447a-4c98-a04b-9a8f3f92f3e7</transactionId>
        <state>APPROVED</state>
        <paymentNetworkResponseCode>363838</paymentNetworkResponseCode>
        <trazabilityCode>56f77e02-447a-4c98-a04b-9a8f3f92f3e7</trazabilityCode>
        <authorizationCode>363838</authorizationCode>
        <responseCode>APPROVED</responseCode>
        <responseMessage>Approved transaction</responseMessage>
        <operationDate>2021-06-25T06:33:55</operationDate>
        <extraParameters>
            <entry>
                <string>BANK_REFERENCED_CODE</string>
                <string>CREDIT</string>
            </entry>
            <entry>
                <string>TRANSBANK_DIRECT_TOKEN</string>
                <string>01ab79a6030063a6b4039a64a8cf7de471d7ad02390c118fbd7d66cfd1af9864</string>
            </entry>
        </extraParameters>
    </transactionResponse>
</paymentResponse>
```
{{< /tab >}}
{{< /tabs >}}

### Capture
Use this method to perform the **Capture** step of a two-step flow. In this step, you capture the funds previously [Authorized]({{< ref "payments-api-chile.md#authorization" >}}) to transfer them to your PayU account.

#### Considerations
Take into account the following considerations for capture.
* The maximum time to capture an approved transaction is 7 days. After this time, the transaction is auto-voided.
* Only the parameters displayed in the request body are mandatory to invoke a Capture transaction. Recall that the order and transaction ids must meet with a currently authorized transaction.
* You can perform partial captures over an authorized amount. To do this, you need to send in the request the parameter `transaction.order.TX_VALUE` with its value (as sent during the Authorization).<br>The minimum amount is 50 CLP.
* It is not allowed to capture a higher amount than the amount previously authorized. 
* Captures are only allowed for transactions in one installment.

The following are the request and response bodies for this transaction type.

{{< tabs tabTotal="2" tabID="2" tabName1="JSON" tabName2="XML" >}}
{{< tab tabNum="1" >}}
<br>

Request body:
```JSON
{
   "language": "es",
   "command": "SUBMIT_TRANSACTION",
   "merchant": {
      "apiLogin": "pRRXKOl8ikMmt9u",
      "apiKey": "4Vj8eK4rloUd272L48hsrarnUA"
   },
   "transaction": {
      "order": {
         "id": "1400421560"
      },
      "type": "CAPTURE",
      "parentTransactionId": "db9d9d7f-b62c-4ed2-a3b9-d146d33bdaf5"
   },
   "test": false
}
```
<br>

Response body:
```JSON
{
    "code": "SUCCESS",
    "error": null,
    "transactionResponse": {
        "orderId": 1400455931,
        "transactionId": "da91c0ec-632b-44e3-883d-b85821390519",
        "state": "APPROVED",
        "paymentNetworkResponseCode": "0",
        "paymentNetworkResponseErrorMessage": null,
        "trazabilityCode": "da91c0ec-632b-44e3-883d-b85821390519",
        "authorizationCode": "169018",
        "pendingReason": null,
        "responseCode": "APPROVED",
        "errorCode": null,
        "responseMessage": "Approved transaction",
        "transactionDate": null,
        "transactionTime": null,
        "operationDate": 1624629865424,
        "referenceQuestionnaire": null,
        "extraParameters": {
            "TRANSBANK_DIRECT_TOKEN": "01ab5a10f3c1bdd401ac86d7c21e4347a7b848171fad7830157abcaac0373c7e"
        },
        "additionalInfo": null
    }
}
```

{{< /tab >}}

{{< tab tabNum="2" >}}
<br>

Request body:
```XML
<request>
   <language>es</language>
   <command>SUBMIT_TRANSACTION</command>
   <merchant>
      <apiKey>4Vj8eK4rloUd272L48hsrarnUA</apiKey>
      <apiLogin>pRRXKOl8ikMmt9u</apiLogin>
   </merchant>
   <transaction>
      <order>
         <id>1400456250</id>
      </order>
      <type>CAPTURE</type>
      <parentTransactionId>ead41073-a03a-45aa-9e83-23d4b03197f0</parentTransactionId>
   </transaction>
   <isTest>false</isTest>
</request>
```
<br>

Response body:
```XML
<paymentResponse>
    <code>SUCCESS</code>
    <transactionResponse>
        <orderId>1400456250</orderId>
        <transactionId>9c4d12c4-277d-4936-9d15-735e21dd5a19</transactionId>
        <state>APPROVED</state>
        <paymentNetworkResponseCode>0</paymentNetworkResponseCode>
        <trazabilityCode>9c4d12c4-277d-4936-9d15-735e21dd5a19</trazabilityCode>
        <authorizationCode>698999</authorizationCode>
        <responseCode>APPROVED</responseCode>
        <responseMessage>Approved transaction</responseMessage>
        <operationDate>2021-06-25T09:08:16</operationDate>
        <extraParameters>
            <entry>
                <string>TRANSBANK_DIRECT_TOKEN</string>
                <string>01ab6ddef1f9350f7b970d33b9766db9b0d52c6b9cb353618ddc8cd58d076b59</string>
            </entry>
        </extraParameters>
    </transactionResponse>
</paymentResponse>
```
{{< /tab >}}
{{< /tabs >}}

### Charge
Use this method to perform a one-step flow, namely a charge. In this step, both steps of the two-step flow are combined in a single transaction and the funds are transferred from the customers account to your PayU account once they have been approved:

The following are the request and response bodies for this transaction type.

{{< tabs tabTotal="2" tabID="3" tabName1="JSON" tabName2="XML" >}}
{{< tab tabNum="1" >}}
<br>

Request example:
```JSON
{
   "language": "es",
   "command": "SUBMIT_TRANSACTION",
   "merchant": {
      "apiKey": "4Vj8eK4rloUd272L48hsrarnUA",
      "apiLogin": "pRRXKOl8ikMmt9u"
   },
   "transaction": {
      "order": {
         "accountId": "512325",
         "referenceCode": "PRODUCT_TEST_2021-06-15T20:35:48.975Z",
         "description": "Payment test description",
         "language": "es",
         "signature": "75ae7a887dfd759894c57eb1bc5a4288",
         "notifyUrl": "http://www.payu.com/notify",
         "additionalValues": {
            "TX_VALUE": {
               "value": 10000,
               "currency": "CLP"
         }
         },
         "buyer": {
            "merchantBuyerId": "1",
            "fullName": "First name and second buyer name",
            "emailAddress": "buyer_test@test.com",
            "contactPhone": "7563126",
            "dniNumber": "123456789",
            "shippingAddress": {
               "street1": "Autopista Del Sol, 0 - Km.43 Costado Sur",
               "street2": "5555487",
               "city": "RM",
               "state": "Talagante",
               "country": "CL",
               "postalCode": "000000",
               "phone": "7563126"
            }
         },
         "shippingAddress": {
            "street1": "Autopista Del Sol, 0 - Km.43 Costado Sur",
            "street2": "5555487",
            "city": "RM",
            "state": "Talagante",
            "country": "CL",
            "postalCode": "0000000",
            "phone": "7563126"
         }
      },
      "payer": {
         "merchantPayerId": "1",
         "fullName": "First name and second payer name",
         "emailAddress": "payer_test@test.com",
         "contactPhone": "7563126",
         "dniNumber": "5415668464654",
         "billingAddress": {
            "street1": "Autopista Del Sol, 0 - Km.43 Costado Sur",
            "street2": "125544",
            "city": "RM",
            "state": "Talagante",
            "country": "CL",
            "postalCode": "000000",
            "phone": "7563126"
         }
      },
      "creditCard": {
         "number": "4037997623271984",
         "securityCode": "321",
         "expirationDate": "2030/12",
         "name": "APPROVED"
      },
      "extraParameters": {
         "INSTALLMENTS_NUMBER": 1
      },
      "type": "AUTHORIZATION_AND_CAPTURE",
      "paymentMethod": "VISA",
      "paymentCountry": "CL",
      "deviceSessionId": "vghs6tvkcle931686k1900o6e1",
      "ipAddress": "127.0.0.1",
      "cookie": "pt1t38347bs6jc9ruv2ecpv7o2",
      "userAgent": "Mozilla/5.0 (Windows NT 5.1; rv:18.0) Gecko/20100101 Firefox/18.0"
   },
   "test": false
}
```
<br>

Response example:
```JSON
{
    "code": "SUCCESS",
    "error": null,
    "transactionResponse": {
        "orderId": 1400431556,
        "transactionId": "14aed0cc-95cb-4b04-b4dd-0c7f8c3296e8",
        "state": "APPROVED",
        "paymentNetworkResponseCode": "456505",
        "paymentNetworkResponseErrorMessage": null,
        "trazabilityCode": "14aed0cc-95cb-4b04-b4dd-0c7f8c3296e8",
        "authorizationCode": "456505",
        "pendingReason": null,
        "responseCode": "APPROVED",
        "errorCode": null,
        "responseMessage": "Approved transaction",
        "transactionDate": null,
        "transactionTime": null,
        "operationDate": 1623834912248,
        "referenceQuestionnaire": null,
        "extraParameters": {
            "BANK_REFERENCED_CODE": "CREDIT",
            "TRANSBANK_DIRECT_TOKEN": "01ab306b62cd0ce17d462501b121ed6cac3794375054b80a51c01bad4ec51550"
        },
        "additionalInfo": null
    }
}
```

{{< /tab >}}

{{< tab tabNum="2" >}}
<br>

Request example:
```XML
<request>
   <language>es</language>
   <command>SUBMIT_TRANSACTION</command>
   <merchant>
      <apiKey>4Vj8eK4rloUd272L48hsrarnUA</apiKey>
      <apiLogin>pRRXKOl8ikMmt9u</apiLogin>
   </merchant>
   <transaction>
      <order>
         <accountId>512325</accountId>
         <referenceCode>PRODUCT_TEST_2021-06-15T20:35:48.975Z</referenceCode>
         <description>Payment test description</description>
         <language>es</language>
         <signature>75ae7a887dfd759894c57eb1bc5a4288</signature>
         <notifyUrl>http://www.payu.com/notify</notifyUrl>
         <additionalValues>
            <entry>
               <string>TX_VALUE</string>
               <additionalValue>
                  <value>10000</value>
                  <currency>CLP</currency>
               </additionalValue>
            </entry>
         </additionalValues>
         <buyer>
            <merchantBuyerId>1</merchantBuyerId>
            <fullName>First name and second buyer name</fullName>
            <emailAddress>buyer_test@test.com</emailAddress>
            <contactPhone>7563126</contactPhone>
            <dniNumber>123456789</dniNumber>
            <shippingAddress>
               <street1>Autopista Del Sol, 0 - Km.43 Costado Sur</street1>
               <street2>5555487</street2>
               <city>RM</city>
               <state>Talagante</state>
               <country>CL</country>
               <postalCode>000000</postalCode>
               <phone>7563126</phone>
            </shippingAddress>
         </buyer>
         <shippingAddress>
            <street1>Autopista Del Sol, 0 - Km.43 Costado Sur</street1>
            <street2>5555487</street2>
            <city>RM</city>
            <state>Talagante</state>
            <country>CL</country>
            <postalCode>0000000</postalCode>
            <phone>7563126</phone>
         </shippingAddress>
      </order>
      <payer>
         <merchantPayerId>1</merchantPayerId>
         <fullName>First name and second payer name</fullName>
         <emailAddress>payer_test@test.com</emailAddress>
         <contactPhone>7563126</contactPhone>
         <dniNumber>5415668464654</dniNumber>
         <billingAddress>
            <street1>Autopista Del Sol, 0 - Km.43 Costado Sur</street1>
            <street2>5555487</street2>
            <city>RM</city>
            <state>Talagante</state>
            <country>CL</country>
            <postalCode>000000</postalCode>
            <phone>7563126</phone>
         </billingAddress>
      </payer>
      <creditCard>
         <number>4037997623271984</number>
         <securityCode>321</securityCode>
         <expirationDate>2030/12</expirationDate>
         <name>APPROVED</name>
      </creditCard>
      <extraParameters>
         <entry>
            <string>INSTALLMENTS_NUMBER</string>
            <string>1</string>
         </entry>
      </extraParameters>
      <type>AUTHORIZATION_AND_CAPTURE</type>
      <paymentMethod>VISA</paymentMethod>
      <paymentCountry>CL</paymentCountry>
      <deviceSessionId>vghs6tvkcle931686k1900o6e1</deviceSessionId>
      <ipAddress>127.0.0.1</ipAddress>
      <cookie>pt1t38347bs6jc9ruv2ecpv7o2</cookie>
      <userAgent>Mozilla/5.0 (Windows NT 5.1; rv:18.0) Gecko/20100101 Firefox/18.0</userAgent>
   </transaction>
   <isTest>false</isTest>
</request>


```
<br>

Response example:
```XML
<paymentResponse>
    <code>SUCCESS</code>
    <transactionResponse>
        <orderId>1400431549</orderId>
        <transactionId>937ed9fe-72d3-44e2-b1b8-e38e9f8e08a4</transactionId>
        <state>APPROVED</state>
        <paymentNetworkResponseCode>185495</paymentNetworkResponseCode>
        <trazabilityCode>937ed9fe-72d3-44e2-b1b8-e38e9f8e08a4</trazabilityCode>
        <authorizationCode>185495</authorizationCode>
        <responseCode>APPROVED</responseCode>
        <responseMessage>Approved transaction</responseMessage>
        <operationDate>2021-06-16T04:13:51</operationDate>
        <extraParameters>
            <entry>
                <string>BANK_REFERENCED_CODE</string>
                <string>CREDIT</string>
            </entry>
            <entry>
                <string>TRANSBANK_DIRECT_TOKEN</string>
                <string>01abc29e7b32bbf011cdd2a1e9961c5d6bd068220f4b506b06c66e15de1acfd2</string>
            </entry>
        </extraParameters>
    </transactionResponse>
</paymentResponse>
```
{{< /tab >}}
{{< /tabs >}}

## Submit transaction with cash
This method lets you process the payments in cash of your customers. To integrate with cash transactions, you must redirect the customer to the URL found in the response of the method; your customer selects cash and generates the payment code.

<img src="/assets/Payments/CashReceiptCL.png" alt="PrintScreen" width="50%">

{{% alert title="Note" color="info"%}}
Klap is formerly known as MULTICAJA. You can still see elements or configurations related to MULTICAJA.
{{% /alert %}}

### Variables for request and response

<details>
<summary>Request</summary>
<label for="table2" class="showMandatory"><input type="checkbox" id="table2" name="table2" value="true" onchange="showMandatory(this)"> Show mandatory fields only</label>
<br>
<div class="variables"></div>

| Field name | Format | Size | Description | Mandatory |
|---|---|---|---|:-:|
| language | Alphanumeric | 2 | Language used in the request, this language is used to display the error messages generated. [See supported languages]({{< ref "response-codes-and-variables.html#supported-languages" >}}). | Yes |
| command | Alphanumeric | Max:32 | Set `SUBMIT_TRANSACTION`. | Yes |
| test (JSON)<hr>isTest (XML) | Boolean |  | Set `true` if the request is in test mode. Otherwise, set `false`. | Yes |
| merchant |  |  | This object has the authentication data. | Yes |
| merchant > apiLogin | Alphanumeric | Min:12 Max:32 | User or login provided by PayU. [How do I get my API Login]({{< ref "integrations.html#api-key-and-api-login" >}}) | Yes |
| merchant > apiKey | Alphanumeric | Min:6 Max:32 | Password provided by PayU. [How do I get my API Key]({{< ref "integrations.html#api-key-and-api-login" >}}) | Yes |
| transaction |  |  | This object has the transaction data. | Yes |
| transaction > order |  |  | This object has the order data. | Yes |
| transaction > order > accountId | Number |  | Identifier of your account. | Yes |
| transaction > order > referenceCode | Alphanumeric | Min:1 Max:255 | Represents the identifier of the order in your system. | Yes |
| transaction > order > description | Alphanumeric | Min:1 Max:255 | Description of the order. | Yes |
| transaction > order > language | Alphanumeric | 2 | Language used in emails sent to the buyer and the seller. | Yes |
| transaction > order > notifyUrl | Alphanumeric | Max:2048 | Confirmation URL of the order. | No |
| transaction > order > partnerId | Alphanumeric | Max:255 | Partner ID in PayU. | No |
| transaction > order > signature | Alphanumeric | Max:255 | The signature associated to the form. For more information refer [Authentication signature]({{< ref "integrations.html#authentication-signature" >}}). | Yes |
| transaction > order > shippingAddress |  |  | Shipping address. | No |
| transaction > order > shippingAddress > street1 | Alphanumeric | Max:100 | Address Line 1. | No |
| transaction > order > shippingAddress > street2 | Alphanumeric | Max:100 | Address Line 2. | No |
| transaction > order > shippingAddress > city | Alphanumeric | Max:50 | Address city. | No |
| transaction > order > shippingAddress > state | Alphanumeric | Max:40 | Address State. | No |
| transaction > order > shippingAddress > country | Alphanumeric | 2 | Address country. | No |
| transaction > order > shippingAddress > postalCode | Alphanumeric | Max:8 | Address Zip code. | No |
| transaction > order > shippingAddress > phone | Alphanumeric | Max:11 | Phone number associated to the address. | No |
| transaction > order > buyer |  |  | Buyer information. | Yes |
| transaction > order > buyer > merchantBuyerId | Alphanumeric | Max:100 | Buyer ID in your system. | No |
| transaction > order > buyer > fullName | Alphanumeric | Max:150 | Full name of the buyer. | Yes |
| transaction > order > buyer > emailAddress | Alphanumeric | Max:255 | E-mail of the buyer. | Yes |
| transaction > order > buyer > contactPhone | Alphanumeric | Max:20 | Phone number of the buyer. | Yes |
| transaction > order > buyer > dniNumber | Alphanumeric | Max:20 | Identification number of the buyer. | Yes |
| transaction > order > buyer > shippingAddress | Alphanumeric |  | Shipping address of the buyer. | Yes |
| transaction > order > buyer > shippingAddress > street1 | Alphanumeric | Max:150 | Buyer's shipping address Line 1. | Yes |
| transaction > order > buyer > shippingAddress > city | Alphanumeric | Max:50 | Buyer's shipping address city. | Yes |
| transaction > order > buyer > shippingAddress > state | Alphanumeric | Max:40 | Buyer's shipping address state. | Yes |
| transaction > order > buyer > shippingAddress > country | Alphanumeric | 2 | Buyer's shipping address country in format ISO 3166 alpha-2. | Yes |
| transaction > order > buyer > shippingAddress > postalCode | Number | Max:20 | Buyer's shipping address zip code. | Yes |
| transaction > order > buyer > shippingAddress > phone | Number | Max:20 | Buyer's shipping address phone number. | Yes |
| transaction > order > additionalValues > |  | 64 | Amount of the order or its associated values. | Yes |
| transaction > order > additionalValues > TX_VALUE | Alphanumeric | 64 | Amount of the transaction. | Yes |
| transaction > order > additionalValues > TX_VALUE > value | Number | 12, 2 | Specifies the amount of the transaction. This amount cannot include decimals. | Yes |
| transaction > order > additionalValues > TX_VALUE > currency | Alphanumeric | 3 | ISO code of the currency. [See accepted currencies]({{< ref "response-codes-and-variables.html#accepted-currencies" >}}). | Yes |
| transaction > order > additionalValues > TX_TAX | Alphanumeric | 64 | Amount of the Value Added Tax (VAT). | Yes |
| transaction > order > additionalValues > TX_TAX > value | Number | 12, 2 | Specifies the amount of the VAT.  | No |
| transaction > order > additionalValues > TX_TAX > currency | Alphanumeric | 3 | ISO code of the currency. [See accepted currencies]({{< ref "response-codes-and-variables.html#accepted-currencies" >}}). | No |
| transaction > order > additionalValues > TX_TAX_RETURN_BASE | Alphanumeric | 64 | Base value to calculate the VAT.<br>If the amount does not have IVA, send 0.<br>This value may have two decimal digits.  | No |
| transaction > order > additionalValues > TX_TAX_RETURN_BASE > value | Number | 12, 2 | Specifies the base amount of the transaction. | No |
| transaction > order > additionalValues > TX_TAX_RETURN_BASE > currency | Alphanumeric | 3 | ISO code of the currency. [See accepted currencies]({{< ref "response-codes-and-variables.html#accepted-currencies" >}}). | No |
| transaction > payer |  |  | Payer information. | Yes |
| transaction > payer > emailAddress | Alphanumeric | Max:255 | Payer e-mail address. | Yes |
| transaction > payer > merchantPayerId | Alphanumeric | Max:100 | Identifier of the payer in your system. | No |
| transaction > payer > fullName | Alphanumeric | Max:150 | Name of the payer. | Yes |
| transaction > payer > billingAddress |  |  | Billing address. | Yes |
| transaction > payer > billingAddress > street1 | Alphanumeric | Max:100 | Billing Address Line 1. | Yes |
| transaction > payer > billingAddress > street2 | Alphanumeric | Max:100 | Billing Address Line 2. | No |
| transaction > payer > billingAddress > city | Alphanumeric | Max:50 | Billing address city. | Yes |
| transaction > payer > billingAddress > state | Alphanumeric | Max:40 | Billing address state. | No |
| transaction > payer > billingAddress > country | Alphanumeric | 2 | Billing address country in format ISO 3166 Alpha-2. | Yes |
| transaction > payer > billingAddress > postalCode | Alphanumeric | Max:20 | Billing address zip code. | No |
| transaction > payer > billingAddress > phone | Alphanumeric | Max:20 | Billing address phone number. | No |
| transaction > payer > birthdate | Alphanumeric | Max:10 | Payer's date of birth. | No |
| transaction > payer > contactPhone | Alphanumeric | Max:20 | Payer's phone number. | Yes |
| transaction > payer > dniNumber | Alphanumeric | Max:20 | Identification number of the buyer. | Yes |
| transaction > payer > dniType | Alphanumeric | 2 | Identification type of the buyer. [See Document types]({{< ref "response-codes-and-variables.html#document-types" >}}). | No |
| transaction > type | Alphanumeric | 32 | As cash payments are performed in physical offices, the only available transaction type is `AUTHORIZATION_AND_CAPTURE` | Yes |
| transaction > paymentMethod | Alphanumeric | 32 | Select a valid Payment Method in cash. [See the available Payment Methods for Chile]({{< ref "select-your-payment-method.html#Chile" >}}). | Yes |
| transaction > paymentCountry | Alphanumeric | 2 | Set `CL` for Chile. | Yes |
| transaction > expirationDate | Alphanumeric | 23 | Maximum date and time that the payer has to make the payment. Format `YYYY-MM-DDTHH:MM:SS`, for example `2021-06-12T16:07:11.586`. | No |
| transaction > ipAddress | Alphanumeric | Max:39 | IP address of the device where the customer performs the transaction. | Yes |
| transaction > extraParameters |  |  | Additional parameters or data associated with the request. For cash payments, you need to include the response URL to redirect your customers back when they complete their payment.<br>In JSON, the _extraParameters_ parameter is set as: <br>`"extraParameters": {`<br>&emsp;`"NETWORK_CALLBACK_URL": "http://www.test.com/response"`<br>`}`<br><br>In XML, the _extraParameters_ parameter is set as: <br>`<extraParameters>`<br>&emsp;`<entry>`<br>&emsp;&emsp;`<string>NETWORK_CALLBACK_URL</string>`<br>&emsp;&emsp;`<string>http://www.test.com/response</string>`<br>&emsp;`</entry>`<br>`</extraParameters>` | No |

</details>

<details>
<summary>Response</summary>
<br>
<div class="variables"></div>

| Field name | Format | Size | Description |
|-|-|-|-|
| code | Alphanumeric |  | The response code of the transaction. Possible values are `ERROR` and `SUCCESS`. |
| error | Alphanumeric | Max:2048 | The error message associated when the response code is `ERROR`. |
| transactionResponse |  |  | The response data. |
| transactionResponse > orderId | Number |  | The generated or existing order Id in PayU. |
| transactionResponse > transactionId | Alphanumeric | 36 | The identifier of the transaction in PayU. |
| transactionResponse > state | Alphanumeric | Max:32 | The status of the transaction. As the payment is performed by the user in a physical office, the state for a successful transaction is `PENDING` |
| transactionResponse > paymentNetworkResponseCode | Alphanumeric | Max:255 | The response code returned by the financial network. |
| transactionResponse > paymentNetworkResponseErrorMessage | Alphanumeric | Max:255 | The error message returned by the financial network. |
| transactionResponse > trazabilityCode | Alphanumeric | Max:32 | The traceability code returned by the financial network. |
| transactionResponse > authorizationCode | Alphanumeric | Max:12 | The authorization code returned by the financial network. |
| transactionResponse > pendingReason | Alphanumeric | Max:21 | The reason code associated with the status, as mentioned in `transactionResponse > state`, the transaction is waiting for the payment. |
| transactionResponse > responseCode | Alphanumeric | Max:64 | The response code associated with the status. In this case, for successful transactions is `PENDING_TRANSACTION_CONFIRMATION`. |
| transactionResponse > responseMessage | Alphanumeric | Max:2048 | Message associated with the response code. |
| transactionResponse > operationDate | Date |  | Creation date of the response in the PayU??s system. |
| transactionResponse > extraParameters |  |  | For cash payments, `extraParameters` has a single element with the URL to which you must redirect your customer.<br>In JSON, the _extraParameters_ parameter is: <br>`"extraParameters": {`<br>&emsp;`"BANK_URL": "https://www.multicaja.cl/bdp/order.xhtml?id=123456789012345"`<br>`}`<br><br>In XML, the _extraParameters_ parameter is: <br>`<extraParameters>`<br>&emsp;`<entry>`<br>&emsp;&emsp;`<string>BANK_URL</string>`<br>&emsp;&emsp;`<string>https://www.multicaja.cl/bdp/order.xhtml?id=123456789012345</string>`<br>&emsp;`</entry>`<br>`</extraParameters>` |

</details>

#### Considerations
* The parameter `transaction.expirationDate` is not mandatory. If you don't send this parameter, its default value is seven days after the current date at 12:00 pm.<br>If you send a date later than the default number of days, PayU will ignore this value and the expiration will be set as default.
* You must set a response URL in the parameter `NETWORK_CALLBACK_URL` inside `transaction.extraParameters`; this URL redirects the user back to your page after they finish the online payment procedure.
* You must redirect the payer to the Klap webpage (fka as Multicaja) to let them perform the cash payment. This URL is found in the `BANK_URL` parameter in the response.

### API call
The following are the bodies of the request and response of this payment method.

{{< tabs tabTotal="2" tabID="4" tabName1="JSON" tabName2="XML" >}}
{{< tab tabNum="1" >}}
<br>

Request body:
```JSON
{
   "language": "es",
   "command": "SUBMIT_TRANSACTION",
   "merchant": {
      "apiKey": "4Vj8eK4rloUd272L48hsrarnUA",
      "apiLogin": "pRRXKOl8ikMmt9u"
   },
   "transaction": {
      "order": {
         "accountId": "512325",
         "referenceCode": "PRODUCT_TEST_2021-06-15T20:35:48.975Z",
         "description": "Payment test description",
         "language": "es",
         "signature": "75ae7a887dfd759894c57eb1bc5a4288",
         "notifyUrl": "http://www.payu.com/notify",
         "additionalValues": {
            "TX_VALUE": {
               "value": 10000,
               "currency": "CLP"
         }
         },
         "buyer": {
            "merchantBuyerId": "1",
            "fullName": "First name and second buyer  name",
            "emailAddress": "buyer_test@test.com",
            "contactPhone": "7563126",
            "dniNumber": "5415668464654",
            "shippingAddress": {
               "street1": "Autopista Del Sol, 0 - Km.43 Costado Sur",
               "street2": "5555487",
               "city": "RM",
               "state": "Talagante",
               "country": "CL",
               "postalCode": "000000",
               "phone": "7563126"
            }
         },
         "shippingAddress": {
            "street1": "Autopista Del Sol, 0 - Km.43 Costado Sur",
            "street2": "5555487",
            "city": "RM",
            "state": "Talagante",
            "country": "CL",
            "postalCode": "0000000",
            "phone": "7563126"
         }
      },
      "payer": {
         "merchantPayerId": "1",
         "fullName": "First name and second payer name",
         "emailAddress": "payer_test@test.com",
         "contactPhone": "7563126",
         "dniNumber": "5415668464654",
         "billingAddress": {
            "street1": "Autopista Del Sol, 0 - Km.43 Costado Sur",
            "street2": "125544",
            "city": "RM",
            "state": "Talagante",   
            "country": "CL",
            "postalCode": "000000",
            "phone": "7563126"
         }
      },
       "extraParameters": {
         "NETWORK_CALLBACK_URL": "http://domain.com/backup_cart/response.php"
      },
	  "type": "AUTHORIZATION_AND_CAPTURE",
      "paymentMethod": "MULTICAJA",
      "expirationDate": "2021-06-18T20:00:03.105",
      "paymentCountry": "CL",
      "ipAddress": "127.0.0.1"
   },
   "test": false
}
```
<br>

Response body:
```JSON
{
    "code": "SUCCESS",
    "error": null,
    "transactionResponse": {
        "orderId": 857794995,
        "transactionId": "f468aa69-82e0-410e-9cc2-3cabba0f970d",
        "state": "PENDING",
        "paymentNetworkResponseCode": null,
        "paymentNetworkResponseErrorMessage": null,
        "trazabilityCode": "462623325642199",
        "authorizationCode": null,
        "pendingReason": "AWAITING_NOTIFICATION",
        "responseCode": "PENDING_TRANSACTION_CONFIRMATION",
        "errorCode": null,
        "responseMessage": null,
        "transactionDate": null,
        "transactionTime": null,
        "operationDate": null,
        "referenceQuestionnaire": null,
        "extraParameters": {
            "BANK_URL": "https://apidev.mcdesaqa.cl/bdp/order.xhtml?id=462623325642199"
        },
        "additionalInfo": null
    }
}
```

{{< /tab >}}

{{< tab tabNum="2" >}}
<br>

Request body:
```XML
<request>
   <language>es</language>
   <command>SUBMIT_TRANSACTION</command>
   <merchant>
      <apiKey>4Vj8eK4rloUd272L48hsrarnUA</apiKey>
      <apiLogin>pRRXKOl8ikMmt9u</apiLogin>
   </merchant>
   <transaction>
      <order>
         <accountId>512325</accountId>
         <referenceCode>PRODUCT_TEST_2021-06-15T20:35:48.975Z</referenceCode>
         <description>Payment test description</description>
         <language>es</language>
         <signature>75ae7a887dfd759894c57eb1bc5a4288</signature>
         <notifyUrl>http://www.payu.com/notify</notifyUrl>
         <additionalValues>
            <entry>
               <string>TX_VALUE</string>
               <additionalValue>
                  <value>10000</value>
                  <currency>CLP</currency>
               </additionalValue>
            </entry>
         </additionalValues>
         <buyer>
            <merchantBuyerId>1</merchantBuyerId>
            <fullName>First name and second buyer name</fullName>
            <emailAddress>buyer_test@test.com</emailAddress>
            <contactPhone>7563126</contactPhone>
            <dniNumber>5415668464654</dniNumber>
            <shippingAddress>
               <street1>Autopista Del Sol, 0 - Km.43 Costado Sur</street1>
               <street2>5555487</street2>
               <city>RM</city>
               <state>Talagante</state>
               <country>CL</country>
               <postalCode>000000</postalCode>
               <phone>7563126</phone>
            </shippingAddress>
         </buyer>
         <shippingAddress>
            <street1>Autopista Del Sol, 0 - Km.43 Costado Sur</street1>
            <street2>5555487</street2>
            <city>RM</city>
            <state>Talagante</state>
            <country>CL</country>
            <postalCode>0000000</postalCode>
            <phone>7563126</phone>
         </shippingAddress>
      </order>
      <payer>
         <merchantPayerId>1</merchantPayerId>
         <fullName>First name and second payer name</fullName>
         <emailAddress>payer_test@test.com</emailAddress>
         <contactPhone>7563126</contactPhone>
         <dniNumber>5415668464654</dniNumber>
         <billingAddress>
            <street1>Autopista Del Sol, 0 - Km.43 Costado Sur</street1>
            <street2>5555487</street2>
            <city>RM</city>
            <state>Talagante</state>
            <country>CL</country>
            <postalCode>000000</postalCode>
            <phone>7563126</phone>
         </billingAddress>
      </payer>
      <extraParameters>
         <entry>
            <string>NETWORK_CALLBACK_URL</string>
            <string>http://domain.com/backup_cart/response.php</string>
         </entry>
      </extraParameters>
      <type>AUTHORIZATION_AND_CAPTURE</type>
      <paymentMethod>MULTICAJA</paymentMethod>
      <paymentCountry>CL</paymentCountry>
      <expirationDate>2021-06-18T20:00:03.105</expirationDate>
      <ipAddress>127.0.0.1</ipAddress>
   </transaction>
   <isTest>false</isTest>
</request>
```
<br>

Response body:
```XML
<paymentResponse>
    <code>SUCCESS</code>
    <transactionResponse>
        <orderId>1400432986</orderId>
        <transactionId>71a72319-f143-4359-8cb9-bc44a21d2b25</transactionId>
        <state>PENDING</state>
        <trazabilityCode>a0d9d7d6-000a-4777-af78-e33917a30fd8</trazabilityCode>
        <pendingReason>AWAITING_PAYMENT_IN_ENTITY</pendingReason>
        <responseCode>PENDING_PAYMENT_IN_ENTITY</responseCode>
        <operationDate>2021-06-16T12:22:28</operationDate>
        <extraParameters>
            <entry>
                <string>EXPIRATION_DATE</string>
                <date>2021-06-16T17:42:53</date>
            </entry>
            <entry>
                <string>URL_PAYMENT_REDIRECT</string>
                <string>https://webpay3gint.transbank.cl/webpayserver/initTransaction</string>
            </entry>
            <entry>
                <string>TRANSBANK_DIRECT_TOKEN</string>
                <string>01abbca6da54f4e4ef9eb37fb9cacf72fdcc52797f6a9ca20377bc59eb0d2706</string>
            </entry>
        </extraParameters>
    </transactionResponse>
</paymentResponse>
```
{{< /tab >}}
{{< /tabs >}}

## Submit transaction with debit and prepaid cards using WebPay Plus {#submit-transaction-with-debit-and-prepaid-cards}
This method lets you process the bank debit and prepaid card payments of your customers. To integrate with these transactions, you must redirect the customer to the URL found in the response of the method.

<img src="/assets/Payments/BankTransferReceiptCL.png" alt="PrintScreen" width="50%">

### Variables for request and response

<details>
<summary>Request</summary>
<label for="table3" class="showMandatory"><input type="checkbox" id="table3" name="table3" value="true" onchange="showMandatory(this)"> Show mandatory fields only</label>
<br>
<div class="variables"></div>

| Field name | Format | Size | Description | Mandatory |
|---|---|---|---|:-:|
| language | Alphanumeric | 2 | Language used in the request, this language is used to display the error messages generated. [See supported languages]({{< ref "response-codes-and-variables.html#supported-languages" >}}). | Yes |
| command | Alphanumeric | Max:32 | Set `SUBMIT_TRANSACTION`. | Yes |
| test (JSON)<hr>isTest (XML) | Boolean |  | Set `true` if the request is in test mode. Otherwise, set `false`. | Yes |
| merchant |  |  | This object has the authentication data. | Yes |
| merchant > apiLogin | Alphanumeric | Min:12 Max:32 | User or login provided by PayU. [How do I get my API Login]({{< ref "integrations.html#api-key-and-api-login" >}}) | Yes |
| merchant > apiKey | Alphanumeric | Min:6 Max:32 | Password provided by PayU. [How do I get my API Key]({{< ref "integrations.html#api-key-and-api-login" >}}) | Yes |
| transaction |  |  | This object has the transaction data. | Yes |
| transaction > order |  |  | This object has the order data. | Yes |
| transaction > order > accountId | Number |  | Identifier of your account. | Yes |
| transaction > order > referenceCode | Alphanumeric | Min:1 Max:255 | Represents the identifier of the order in your system. | Yes |
| transaction > order > description | Alphanumeric | Min:1 Max:255 | Description of the order. | Yes |
| transaction > order > language | Alphanumeric | 2 | Language used in emails sent to the buyer and the seller. | Yes |
| transaction > order > notifyUrl | Alphanumeric | Max:2048 | Confirmation URL of the order. | No|
| transaction > order > partnerId | Alphanumeric | Max:255 | Partner ID in PayU. | No |
| transaction > order > signature | Alphanumeric | Max:255 | The signature associated to the form. For more information refer [Authentication signature]({{< ref "integrations.html#authentication-signature" >}}). | Yes |
| transaction > order > shippingAddress |  |  | Shipping address. | No |
| transaction > order > shippingAddress > street1 | Alphanumeric | Max:100 | Address Line 1. | No |
| transaction > order > shippingAddress > street2 | Alphanumeric | Max:100 | Address Line 2. | No |
| transaction > order > shippingAddress > city | Alphanumeric | Max:50 | Address city. | No |
| transaction > order > shippingAddress > state | Alphanumeric | Max:40 | Address State. | No |
| transaction > order > shippingAddress > country | Alphanumeric | 2 | Address country. | No |
| transaction > order > shippingAddress > postalCode | Alphanumeric | Max:8 | Address Zip code. | No |
| transaction > order > shippingAddress > phone | Alphanumeric | Max:11 | Phone number associated to the address. | No |
| transaction > order > buyer |  |  | Buyer information. | Yes |
| transaction > order > buyer > merchantBuyerId | Alphanumeric | Max:100 | Buyer ID in your system. | No |
| transaction > order > buyer > fullName | Alphanumeric | Max:150 | Full name of the buyer. | Yes |
| transaction > order > buyer > emailAddress | Alphanumeric | Max:255 | E-mail of the buyer. | Yes |
| transaction > order > buyer > contactPhone | Alphanumeric | Max:20 | Phone number of the buyer. | Yes |
| transaction > order > buyer > dniNumber | Alphanumeric | Max:20 | Identification number of the buyer. | Yes |
| transaction > order > buyer > shippingAddress | Alphanumeric |  | Shipping address of the buyer. | Yes |
| transaction > order > buyer > shippingAddress > street1 | Alphanumeric | Max:150 | Buyer's shipping address Line 1. | Yes |
| transaction > order > buyer > shippingAddress > city | Alphanumeric | Max:50 | Buyer's shipping address city. | Yes |
| transaction > order > buyer > shippingAddress > state | Alphanumeric | Max:40 | Buyer's shipping address state. | Yes |
| transaction > order > buyer > shippingAddress > country | Alphanumeric | 2 | Buyer's shipping address country in format ISO 3166 alpha-2. | Yes |
| transaction > order > buyer > shippingAddress > postalCode | Number | Max:20 | Buyer's shipping address zip code. | Yes |
| transaction > order > buyer > shippingAddress > phone | Number | Max:20 | Buyer's shipping address phone number. | Yes |
| transaction > order > additionalValues > |  | 64 | Amount of the order or its associated values. | Yes |
| transaction > order > additionalValues > TX_VALUE | Alphanumeric | 64 | Amount of the transaction. | Yes |
| transaction > order > additionalValues > TX_VALUE > value | Number | 12, 2 | Specifies the amount of the transaction. This amount cannot include decimals. | Yes |
| transaction > order > additionalValues > TX_VALUE > currency | Alphanumeric | 3 | ISO code of the currency. [See accepted currencies]({{< ref "response-codes-and-variables.html#accepted-currencies" >}}). | Yes |
| transaction > order > additionalValues > TX_TAX | Alphanumeric | 64 | Amount of the Value Added Tax (VAT). | Yes |
| transaction > order > additionalValues > TX_TAX > value | Number | 12, 2 | Specifies the amount of the VAT.  | No |
| transaction > order > additionalValues > TX_TAX > currency | Alphanumeric | 3 | ISO code of the currency. [See accepted currencies]({{< ref "response-codes-and-variables.html#accepted-currencies" >}}). | No |
| transaction > order > additionalValues > TX_TAX_RETURN_BASE | Alphanumeric | 64 | Base value to calculate the VAT.<br>If the amount does not have IVA, send 0.<br>This value may have two decimal digits.  | No |
| transaction > order > additionalValues > TX_TAX_RETURN_BASE > value | Number | 12, 2 | Specifies the base amount of the transaction. | No |
| transaction > order > additionalValues > TX_TAX_RETURN_BASE > currency | Alphanumeric | 3 | ISO code of the currency. [See accepted currencies]({{< ref "response-codes-and-variables.html#accepted-currencies" >}}). | No |
| transaction > payer |  |  | Payer information. | Yes |
| transaction > payer > emailAddress | Alphanumeric | Max:255 | Payer e-mail address. | Yes |
| transaction > payer > merchantPayerId | Alphanumeric | Max:100 | Identifier of the payer in your system. | No |
| transaction > payer > fullName | Alphanumeric | Max:150 | Name of the payer. | Yes |
| transaction > payer > billingAddress |  |  | Billing address. | Yes |
| transaction > payer > billingAddress > street1 | Alphanumeric | Max:100 | Billing Address Line 1. | Yes |
| transaction > payer > billingAddress > street2 | Alphanumeric | Max:100 | Billing Address Line 2. | No |
| transaction > payer > billingAddress > city | Alphanumeric | Max:50 | Billing address city. | Yes |
| transaction > payer > billingAddress > state | Alphanumeric | Max:40 | Billing address state. | No |
| transaction > payer > billingAddress > country | Alphanumeric | 2 | Billing address country in format ISO 3166 Alpha-2. | Yes |
| transaction > payer > billingAddress > postalCode | Alphanumeric | Max:20 | Billing address zip code. | No |
| transaction > payer > billingAddress > phone | Alphanumeric | Max:20 | Billing address phone number. | No |
| transaction > payer > birthdate | Alphanumeric | Max:10 | Payer's date of birth. | No |
| transaction > payer > contactPhone | Alphanumeric | Max:20 | Payer's phone number. | Yes |
| transaction > payer > dniNumber | Alphanumeric | Max:20 | Identification number of the buyer. | Yes |
| transaction > payer > dniType | Alphanumeric | 2 | Identification type of the buyer. [See Document types]({{< ref "response-codes-and-variables.html#document-types" >}}). | No |
| transaction > type | Alphanumeric | 32 | As payments are made on the WebPay plus page, the only available transaction type is `AUTHORIZATION_AND_CAPTURE` | Yes |
| transaction > paymentMethod | Alphanumeric | 32 | Select a valid Payment Method for Debit and prepaid cards. [See the available Payment Methods for Chile]({{< ref "select-your-payment-method.html#Chile" >}}). | Yes |
| transaction > paymentCountry | Alphanumeric | 2 | Set `CL` for Chile. | Yes |
| transaction > deviceSessionId | Alphanumeric | Max:255 | Session identifier of the device where the customer performs the transaction. For more information, refer to [this topic]({{< ref "integrations.html#_devicesessionid_-variable" >}}). | Yes |
| transaction > ipAddress | Alphanumeric | Max:39 | IP address of the device where the customer performs the transaction. | Yes |
| transaction > cookie | Alphanumeric | Max:255 | Cookie stored by the device where the customer performs the transaction. | Yes |
| transaction > userAgent | Alphanumeric | Max:1024 | The User agent of the browser where the customer performs the transaction. | Yes |
| transaction > extraParameters |  |  | Additional parameters or data associated with the request. For payments through WebPay plus, this is the response page of your commerce.<br>In JSON, the _extraParameters_ parameter is set as: <br>`"extraParameters": {`<br>&emsp;`"RESPONSE_URL": "http://www.test.com/response"`<br>`}`<br><br>In XML, the _extraParameters_ parameter is set as: <br>`<extraParameters>`<br>&emsp;`<entry>`<br>&emsp;&emsp;`<string>RESPONSE_URL</string>`<br>&emsp;&emsp;`http://www.test.com/response`<br>&emsp;`</entry>`<br>`</extraParameters>` | No |

</details>

<details>
<summary>Response</summary>
<br>
<div class="variables"></div>

| Field name | Format | Size | Description |
|-|-|-|-|
| code | Alphanumeric |  | The response code of the transaction. Possible values are `ERROR` and `SUCCESS`. |
| error | Alphanumeric | Max:2048 | The error message associated when the response code is `ERROR`. |
| transactionResponse |  |  | The response data. |
| transactionResponse > orderId | Number |  | The generated or existing order Id in PayU. |
| transactionResponse > transactionId | Alphanumeric | 36 | The identifier of the transaction in PayU. |
| transactionResponse > state | Alphanumeric | Max:32 | The status of the transaction. As the payment is performed by the user in a physical office, the state for a successful transaction is `PENDING` |
| transactionResponse > paymentNetworkResponseCode | Alphanumeric | Max:255 | The response code returned by the financial network. |
| transactionResponse > paymentNetworkResponseErrorMessage | Alphanumeric | Max:255 | The error message returned by the financial network. |
| transactionResponse > trazabilityCode | Alphanumeric | Max:32 | The traceability code returned by the financial network. |
| transactionResponse > authorizationCode | Alphanumeric | Max:12 | The authorization code returned by the financial network. |
| transactionResponse > pendingReason | Alphanumeric | Max:21 | The reason code associated with the status, as mentioned in `transactionResponse > state`, the transaction is waiting for the payment. |
| transactionResponse > responseCode | Alphanumeric | Max:64 | The response code associated with the status. In this case, for successful transactions is `PENDING_PAYMENT_IN_ENTITY`. |
| transactionResponse > responseMessage | Alphanumeric | Max:2048 | Message associated with the response code. |
| transactionResponse > operationDate | Date |  | Creation date of the response in the PayU??s system. |
| transactionResponse > extraParameters |  |  | Additional parameters or data associated with the response.<br>In JSON, the _extraParameters_ parameter follows this structure: <br>`"extraParameters": {`<br>&emsp;`"URL_PAYMENT_REDIRECT": "xxxx"`<br>`}`<br><br>In XML, the _extraParameters_ parameter follows this structure: <br>`<extraParameters>`<br>&emsp;`<entry>`<br>&emsp;&emsp;`<string>URL_PAYMENT_REDIRECT</string>`<br>&emsp;&emsp;`<string>xxxx</string>`<br>&emsp;`</entry>`<br>`</extraParameters>` |

</details>

#### Considerations
* If you don't send the `RESPONSE_URL` parameter in `transaction.extraParameters`, the API takes the value from the _**Response URL**_ variable in your PayU Module (_**Settings**_ > _**Technical configuration**_).
* When you process payments through WebPay plus, you must redirect the customer to the URL found in the `URL_PAYMENT_REDIRECT` extra parameter concatenated with the `TRANSBANK_DIRECT_TOKEN` extra parameter as follows: <br> `URL_PAYMENT_REDIRECT?token_ws=TRANSBANK_DIRECT_TOKEN`.
* If the payment request is successful, the transaction has state `PENDING` and responseCode `PENDING_PAYMENT_IN_ENTITY`; this is because the payer is redirected to the selected bank to complete the payment.
* The response page must have the following variables:

| Variable          | Description                                                   |
|-------------------|---------------------------------------------------------------|
| transactionState  | State of the transaction.                                     |
| reference_pol     | Reference code to identify a transaction in PayU.             |
| TX_VALUE          | Transaction amount.                                           |
| authorizationCode | Authorization code of the transaction.                        |
| processingDate    | Transaction date.                                             |
| cc_number         | Visible number of the card used in the transaction.           |

The variables above are sent via GET.

### API call
The following are the bodies of the request and response of this payment method.

{{< tabs tabTotal="2" tabID="5" tabName1="JSON" tabName2="XML" >}}
{{< tab tabNum="1" >}}
<br>

Request body:
```JSON
{
   "language": "es",
   "command": "SUBMIT_TRANSACTION",
   "merchant": {
      "apiKey": "4Vj8eK4rloUd272L48hsrarnUA",
      "apiLogin": "pRRXKOl8ikMmt9u"
   },
   "transaction": {
      "order": {
         "accountId": "512325",
         "referenceCode": "PRODUCT_TEST_2021-06-15T20:35:48.975Z",
         "description": "Payment test description",
         "language": "es",
         "signature": "75ae7a887dfd759894c57eb1bc5a4288",
         "notifyUrl": "http://www.payu.com/notify",
         "additionalValues": {
            "TX_VALUE": {
               "value": 10000,
               "currency": "CLP"
         }
         },
         "buyer": {
            "merchantBuyerId": "1",
            "fullName": "First name and second buyer  name",
            "emailAddress": "buyer_test@test.com",
            "contactPhone": "7563126",
            "dniNumber": "5415668464654",
            "shippingAddress": {
               "street1": "Autopista Del Sol, 0 - Km.43 Costado Sur",
               "street2": "5555487",
               "city": "RM",
               "state": "Talagante",
               "country": "CL",
               "postalCode": "000000",
               "phone": "7563126"
            }
         },
         "shippingAddress": {
            "street1": "Autopista Del Sol, 0 - Km.43 Costado Sur",
            "street2": "5555487",
            "city": "RM",
            "state": "Talagante",
            "country": "CL",
            "postalCode": "000000",
            "phone": "7563126"
         }
      },
      "payer": {
         "merchantPayerId": "1",
         "fullName": "First name and second payer name",
         "emailAddress": "payer_test@test.com",
         "contactPhone": "7563126",
         "dniNumber": "5415668464654",
         "billingAddress": {
            "street1": "Autopista Del Sol, 0 - Km.43 Costado Sur",
               "street2": "5555487",
               "city": "RM",
               "state": "Talagante",
               "country": "CL",
               "postalCode": "000000",
               "phone": "7563126"
         }
      },
      "extraParameters": {
         "RESPONSE_URL": "http://www.test.com/response"
      },
      "type": "AUTHORIZATION_AND_CAPTURE",
      "paymentMethod": "TRANSBANK_DEBIT",
      "paymentCountry": "CL",
      "deviceSessionId": "vghs6tvkcle931686k1900o6e1",
      "ipAddress": "127.0.0.1",
      "cookie": "pt1t38347bs6jc9ruv2ecpv7o2",
      "userAgent": "Mozilla/5.0 (Windows NT 5.1; rv:18.0) Gecko/20100101 Firefox/18.0"
   },
   "test": false
}
```
<br>

Response body:
```JSON
{
    "code": "SUCCESS",
    "error": null,
    "transactionResponse": {
        "orderId": 1400432466,
        "transactionId": "e2609a58-97d6-4a65-8638-1b03da03cc7a",
        "state": "PENDING",
        "paymentNetworkResponseCode": null,
        "paymentNetworkResponseErrorMessage": null,
        "trazabilityCode": "5f0cac61-c023-4fa3-bf27-ff888fa36c3c",
        "authorizationCode": null,
        "pendingReason": "AWAITING_PAYMENT_IN_ENTITY",
        "responseCode": "PENDING_PAYMENT_IN_ENTITY",
        "errorCode": null,
        "responseMessage": null,
        "transactionDate": null,
        "transactionTime": null,
        "operationDate": 1623856942412,
        "referenceQuestionnaire": null,
        "extraParameters": {
            "EXPIRATION_DATE": 1623875847781,
            "URL_PAYMENT_REDIRECT": "https://webpay3gint.transbank.cl/webpayserver/initTransaction",
            "TRANSBANK_DIRECT_TOKEN": "01ab155164939156988ee462d09ed5613b7efd297fe97b099c684ec8599c5cc5"
        },
        "additionalInfo": null
    }
}
```

{{< /tab >}}

{{< tab tabNum="2" >}}
<br>

Request body:
```XML
<request>
   <language>es</language>
   <command>SUBMIT_TRANSACTION</command>
   <merchant>
      <apiKey>4Vj8eK4rloUd272L48hsrarnUA</apiKey>
      <apiLogin>pRRXKOl8ikMmt9u</apiLogin>
   </merchant>
   <transaction>
      <order>
         <accountId>512325</accountId>
         <referenceCode>PRODUCT_TEST_2021-06-15T20:35:48.975Z</referenceCode>
         <description>Payment test description</description>
         <language>es</language>
         <signature>75ae7a887dfd759894c57eb1bc5a4288</signature>
         <notifyUrl>http://www.payu.com/notify</notifyUrl>
         <additionalValues>
            <entry>
               <string>TX_VALUE</string>
               <additionalValue>
                  <value>10000</value>
                  <currency>CLP</currency>
               </additionalValue>
            </entry>
         </additionalValues>
         <buyer>
            <merchantBuyerId>1</merchantBuyerId>
            <fullName>First name and second buyer name</fullName>
            <emailAddress>buyer_test@test.com</emailAddress>
            <contactPhone>7563126</contactPhone>
            <dniNumber>5415668464654</dniNumber>
            <shippingAddress>
               <street1>Autopista Del Sol, 0 - Km.43 Costado Sur</street1>
               <street2>5555487</street2>
               <city>RM</city>
               <state>Talagante</state>
               <country>CL</country>
               <postalCode>000000</postalCode>
               <phone>7563126</phone>
            </shippingAddress>
         </buyer>
         <shippingAddress>
            <street1>Autopista Del Sol, 0 - Km.43 Costado Sur</street1>
            <street2>5555487</street2>
            <city>RM</city>
            <state>Talagante</state>
            <country>CL</country>
            <postalCode>0000000</postalCode>
            <phone>7563126</phone>
         </shippingAddress>
      </order>
      <payer>
         <merchantPayerId>1</merchantPayerId>
         <fullName>First name and second payer name</fullName>
         <emailAddress>payer_test@test.com</emailAddress>
         <contactPhone>7563126</contactPhone>
         <dniNumber>5415668464654</dniNumber>
         <billingAddress>
            <street1>Autopista Del Sol, 0 - Km.43 Costado Sur</street1>
            <street2>5555487</street2>
            <city>RM</city>
            <state>Talagante</state>
            <country>CL</country>
            <postalCode>000000</postalCode>
            <phone>7563126</phone>
         </billingAddress>
      </payer>
      <extraParameters>
         <entry>
            <string>RESPONSE_URL</string>
            <string>http://www.test.com/response</string>
         </entry>
      </extraParameters>
      <type>AUTHORIZATION_AND_CAPTURE</type>
      <paymentMethod>TRANSBANK_DEBIT</paymentMethod>
      <paymentCountry>CL</paymentCountry>
      <deviceSessionId>vghs6tvkcle931686k1900o6e1</deviceSessionId>
      <ipAddress>127.0.0.1</ipAddress>
      <cookie>pt1t38347bs6jc9ruv2ecpv7o2</cookie>
      <userAgent>Mozilla/5.0 (Windows NT 5.1; rv:18.0) Gecko/20100101 Firefox/18.0</userAgent>
   </transaction>
   <isTest>false</isTest>
</request>

```
<br>

Response body:
```XML
<paymentResponse>
    <code>SUCCESS</code>
    <transactionResponse>
        <orderId>1400432986</orderId>
        <transactionId>71a72319-f143-4359-8cb9-bc44a21d2b25</transactionId>
        <state>PENDING</state>
        <trazabilityCode>a0d9d7d6-000a-4777-af78-e33917a30fd8</trazabilityCode>
        <pendingReason>AWAITING_PAYMENT_IN_ENTITY</pendingReason>
        <responseCode>PENDING_PAYMENT_IN_ENTITY</responseCode>
        <operationDate>2021-06-16T12:22:28</operationDate>
        <extraParameters>
            <entry>
                <string>EXPIRATION_DATE</string>
                <date>2021-06-16T17:42:53</date>
            </entry>
            <entry>
                <string>URL_PAYMENT_REDIRECT</string>
                <string>https://webpay3gint.transbank.cl/webpayserver/initTransaction</string>
            </entry>
            <entry>
                <string>TRANSBANK_DIRECT_TOKEN</string>
                <string>01abbca6da54f4e4ef9eb37fb9cacf72fdcc52797f6a9ca20377bc59eb0d2706</string>
            </entry>
        </extraParameters>
    </transactionResponse>
</paymentResponse>
```
{{< /tab >}}
{{< /tabs >}}

## Available payment methods query
This method returns a list of the payment methods available in all countries.

### Variables for request and response

<details>
<summary>Request</summary>
<br>
<div class="variables"></div>

| Field name | Format | Size | Description | Mandatory |
|-|-|-|-|:-:|
| language | Alphanumeric | 2 | Language used in the request, this language is used to display the error messages generated. [See supported languages]({{< ref "response-codes-and-variables.html#supported-languages" >}}). | Yes |
| command | Alphanumeric | Max:32 | Set `GET_PAYMENT_METHODS`. | Yes |
| test (JSON)<hr>isTest (XML) | Boolean |  | Set `true` if the request is in test mode. Otherwise, set `false`. | Yes |
| merchant |  |  | This object has the authentication data. | Yes |
| merchant > apiLogin | Alphanumeric | Min:12 Max:32 | User or login provided by PayU. [How do I get my API Login]({{< ref "integrations.html#api-key-and-api-login" >}}) | Yes |
| merchant > apiKey | Alphanumeric | Min:6 Max:32 | Password provided by PayU. [How do I get my API Key]({{< ref "integrations.html#api-key-and-api-login" >}}) | Yes |

</details>

<details>
<summary>Response</summary>
<br>
<div class="variables"></div>

| Field name | Format | Size | Description |
|-|-|-|-|
| code | Alphanumeric |  | The response code of the transaction. Possible values are `ERROR` and `SUCCESS`. |
| error | Alphanumeric | Max:2048 | The error message associated when the response code is `ERROR`. |
| paymentMethods |  |  | List of the payment methods. |
| paymentMethods > paymentMethodComplete |  |  | This object has the information of a payment method. |
| paymentMethods > paymentMethodComplete > id | Numeric |  | Payment method identifier. |
| paymentMethods > paymentMethodComplete > description | Alphanumeric | Max:32 | Payment method name. |
| paymentMethods > paymentMethodComplete > country | Alphanumeric | 2 | ISO code of the Payment method country. |

</details>

### API call
The following are the examples of the request and response of this method. For the sake of the example, the response here shows two payment methods. 

{{< tabs tabTotal="2" tabID="6" tabName1="JSON" tabName2="XML" >}}
{{< tab tabNum="1" >}}
<br>

Request example:
```JSON
{
   "test": false,
   "language": "en",
   "command": "GET_PAYMENT_METHODS",
   "merchant": {
      "apiLogin": "pRRXKOl8ikMmt9u",
      "apiKey": "4Vj8eK4rloUd272L48hsrarnUA"
   }
}
```
<br>

Response example:
```JSON
{
    "code": "SUCCESS",
    "error": null,
    "paymentMethods": [
        {
            "id": "716",
            "description": "VISA",
            "country": "CL",
            "enabled": true,
            "reason": null
        },
        {
            "id": "712",
            "description": "DINERS",
            "country": "CL",
            "enabled": true,
            "reason": null
        }
    ]
}
```

{{< /tab >}}

{{< tab tabNum="2" >}}
<br>

Request example:
```XML
<request>
   <language>en</language>
   <command>GET_PAYMENT_METHODS</command>
   <merchant>
      <apiLogin>pRRXKOl8ikMmt9u</apiLogin>
      <apiKey>4Vj8eK4rloUd272L48hsrarnUA</apiKey>
   </merchant>
   <isTest>false</isTest>
</request>
```
<br>

Response example:
```XML
<paymentMethodsResponse>
    <code>SUCCESS</code>
    <paymentMethods>
        <paymentMethodComplete>
            <id>716</id>
            <description>VISA</description>
            <country>CL</country>
            <enabled>true</enabled>
        </paymentMethodComplete>
        <paymentMethodComplete>
            <id>712</id>
            <description>DINERS</description>
            <country>CL</country>
            <enabled>true</enabled>
        </paymentMethodComplete>
    </paymentMethods>
</paymentMethodsResponse>
```
{{< /tab >}}
{{< /tabs >}}

## Ping
The ```PING``` method lets you verify the connection to our platform. 

### Variables for request and response

<details>
<summary>Request</summary>
<br>
<div class="variables"></div>

| Field name | Format | Size | Description | Mandatory |
|-|-|-|-|:-:|
| language | Alphanumeric | 2 | Language used in the request, this language is used to display the error messages generated. [See supported languages]({{< ref "response-codes-and-variables.html#supported-languages" >}}). | Yes |
| command | Alphanumeric | Max:32 | Set `PING`. | Yes |
| test (JSON)<hr>isTest (XML) | Boolean |  | Set `true` if the request is in test mode. Otherwise, set `false`. | Yes |
| merchant |  |  | This object has the authentication data. | Yes |
| merchant > apiLogin | Alphanumeric | Min:12 Max:32 | User or login provided by PayU. [How do I get my API Login]({{< ref "integrations.html#api-key-and-api-login" >}}) | Yes |
| merchant > apiKey | Alphanumeric | Min:6 Max:32 | Password provided by PayU. [How do I get my API Key]({{< ref "integrations.html#api-key-and-api-login" >}}) | Yes |

</details>

<details>
<summary>Response</summary>
<br>
<div class="variables"></div>

| Field name | Format | Size | Description | Mandatory |
|-|-|-|-|:-:|
| code | Alphanumeric |  | The response code of the transaction. | Yes |
| error | Alphanumeric | Max:2048 | The error message associated if an error ocurred. | Yes |
| transactionResponse | transactionResponse | Max:2048 | The response of the PING method if an error ocurred. | Yes |
</details>

### API call
The following are the examples of the request and response of this method.

{{< tabs tabTotal="2" tabID="7" tabName1="JSON" tabName2="XML" >}}
{{< tab tabNum="1" >}}
<br>

Request example:
```JSON
{
   "test": false,
   "language": "en",
   "command": "PING",
   "merchant": {
      "apiLogin": "pRRXKOl8ikMmt9u",
      "apiKey": "4Vj8eK4rloUd272L48hsrarnUA"
   }
}
```
<br>

Response example:
```JSON
{
    "code": "SUCCESS",
    "error": null,
    "transactionResponse": null
}
```

{{< /tab >}}

{{< tab tabNum="2" >}}
<br>

Request example:
```XML
<request>
   <language>en</language>
   <command>PING</command>
   <merchant>
      <apiLogin>pRRXKOl8ikMmt9u</apiLogin>
      <apiKey>4Vj8eK4rloUd272L48hsrarnUA</apiKey>
   </merchant>
   <isTest>false</isTest>
</request>
```
<br>

Response example:
```XML
<paymentResponse>
    <code>SUCCESS</code>
</paymentResponse>
```
{{< /tab >}}
{{< /tabs >}}
