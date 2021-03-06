---
title: "API de Consultas"
linkTitle: "API de Consultas"
date: 2021-04-30T08:51:22-05:00
description: >
  El API de Consultas te permite validar el estado de las órdenes generadas junto con sus transacciones.
weight: 30
tags: ["subtopic"]
---

Para integrate con el API de Consultas, apunta tus peticiones a las siguientes URLs de acuerdo con tu ambiente.

{{% alert title="URL" color="info"%}}
* Pruebas: ```https://sandbox.api.payulatam.com/reports-api/4.0/service.cgi```
* Producción: ```https://api.payulatam.com/reports-api/4.0/service.cgi```
{{% /alert %}}

## Métodos disponibles {#available-methods}
El API de Consultas incluye los siguientes métodos:

* [Consultar por Identificador de la orden]({{< ref "#query-by-order-id" >}})
* [Consultar por Identificador de la transacción]({{< ref "#query-by-transaction-id" >}})
* [Consultar por Identificador de la referencia]({{< ref "#query-by-reference-id" >}})
* [Ping]({{< ref "#ping" >}})

## Consultar por Identificador de la orden {#query-by-order-id}
*Order Id* es un valor generado por PayU para identificar todas las transacciones generadas en una solicitud de pago realizada por tu cliente. Puedes utilizar el comando `ORDER_DETAIL` para consultar el estado de una orden por su identificador.

Los siguientes son los cuerpos de la petición y la respuesta para esta operación.

{{< tabs tabTotal="2" tabID="1" tabName1="JSON" tabName2="XML" >}}
{{< tab tabNum="1" >}}
<br>

Ejemplo petición:
```JSON
{
   "test": false,
   "language": "en",
   "command": "ORDER_DETAIL",
   "merchant": {
      "apiLogin": "pRRXKOl8ikMmt9u",
      "apiKey": "4Vj8eK4rloUd272L48hsrarnUA"
   },
   "details": {
      "orderId": 857695047
   }
}
```
<br>

Ejemplo respuesta:
```JSON
{
    "code": "SUCCESS",
    "error": null,
    "result": {
        "payload": {
            "id": 857695047,
            "accountId": 512321,
            "status": "CAPTURED",
            "referenceCode": "PRODUCT_TEST_2021-05-03T18:01:10.946Z",
            "description": "Payment test description Documentation",
            "airlineCode": null,
            "language": "es",
            "notifyUrl": "http://www.payulatam.com/confirmation",
            "shippingAddress": {
                "street1": "calle 100",
                "street2": "5555487",
                "city": "Medellin",
                "state": "Antioquia",
                "country": "CO",
                "postalCode": "0000000",
                "phone": "7563126"
            },
            "buyer": {
                "merchantBuyerId": "1",
                "fullName": "First name and second buyer name",
                "emailAddress": "buyer_test@test.com",
                "contactPhone": "7563126",
                "buyerAddress": {
                    "street1": "calle 100",
                    "street2": "5555487",
                    "city": "Medellin",
                    "state": "Antioquia",
                    "country": "CO",
                    "postalCode": "000000",
                    "phone": "7563126"
                },
                "dniNumber": "123456789",
                "cnpj": null
            },
            "antifraudMerchantId": null,
            "isTest": true,
            "transactions": [
                {
                    "id": "5fde3c2c-540d-4579-96f7-2a4b8c65a951",
                    "order": null,
                    "creditCard": {
                        "maskedNumber": "547130******0003",
                        "issuerBank": null,
                        "name": "APPROVED",
                        "cardType": null
                    },
                    "bankAccount": null,
                    "type": "AUTHORIZATION_AND_CAPTURE",
                    "parentTransactionId": null,
                    "paymentMethod": "MASTERCARD",
                    "source": null,
                    "paymentCountry": "CO",
                    "transactionResponse": {
                        "state": "APPROVED",
                        "paymentNetworkResponseCode": null,
                        "paymentNetworkResponseErrorMessage": null,
                        "trazabilityCode": "00000000",
                        "authorizationCode": "00000000",
                        "pendingReason": null,
                        "responseCode": "APPROVED",
                        "errorCode": null,
                        "responseMessage": null,
                        "transactionDate": null,
                        "transactionTime": null,
                        "operationDate": 1620064792953,
                        "extraParameters": null
                    },
                    "deviceSessionId": "vghs6tvkcle931686k1900o6e1",
                    "ipAddress": "127.0.0.1",
                    "cookie": "pt1t38347bs6jc9ruv2ecpv7o2",
                    "userAgent": "Mozilla/5.0 (Windows NT 5.1; rv:18.0) Gecko/20100101 Firefox/18.0",
                    "expirationDate": null,
                    "payer": {
                        "merchantPayerId": "1",
                        "fullName": "First name and second payer name",
                        "billingAddress": {
                            "street1": "calle 93",
                            "street2": "125544",
                            "city": "Bogota",
                            "state": "Bogota DC",
                            "country": "CO",
                            "postalCode": "000000",
                            "phone": "7563126"
                        },
                        "emailAddress": "payer_test@test.com",
                        "contactPhone": "7563126",
                        "dniNumber": "5415668464654",
                        "dniType": null
                    },
                    "termsAndConditionId": 202,
                    "additionalValues": {
                        "PM_PAYER_COMMISSION_VALUE": {
                            "value": 0.00,
                            "currency": "COP"
                        },
                        "PM_PAYER_TOTAL_AMOUNT": {
                            "value": 50000.00,
                            "currency": "COP"
                        },
                        "PM_TAX": {
                            "value": 0.00,
                            "currency": "COP"
                        },
                        "PM_PAYER_INTEREST_VALUE": {
                            "value": 0.00,
                            "currency": "COP"
                        },
                        "TX_ADDITIONAL_VALUE": {
                            "value": 0.00,
                            "currency": "COP"
                        },
                        "PM_NETWORK_VALUE": {
                            "value": 50000.00,
                            "currency": "COP"
                        },
                        "PM_TAX_RETURN_BASE": {
                            "value": 0.00,
                            "currency": "COP"
                        },
                        "TX_VALUE": {
                            "value": 50000.00,
                            "currency": "COP"
                        },
                        "CURRENT_TX_VALUE": {
                            "value": 50000.00,
                            "currency": "COP"
                        },
                        "TX_TAX": {
                            "value": 0.00,
                            "currency": "COP"
                        },
                        "PM_PAYER_PRICING_VALUES": {
                            "value": 0.00,
                            "currency": "COP"
                        },
                        "TX_TAX_RETURN_BASE": {
                            "value": 0.00,
                            "currency": "COP"
                        },
                        "PM_PURCHASE_VALUE": {
                            "value": 50000.00,
                            "currency": "COP"
                        },
                        "PM_ADDITIONAL_VALUE": {
                            "value": 0.00,
                            "currency": "COP"
                        },
                        "PM_VALUE": {
                            "value": 50000.00,
                            "currency": "COP"
                        }
                    },
                    "extraParameters": {
                        "MIN_SHIPPING_PAYER": "0",
                        "BANK_REFERENCED_CODE": "CREDIT",
                        "PRICING_PROFILE_GROUP_ID": "MG-PRICING_2_341559",
                        "MAX_SHIPPING_MERCHANT": "0",
                        "PERCENT_SHIPPING_MERCHANT": "0",
                        "MAX_SHIPPING_PAYER": "0",
                        "MERCHANT_PROFILE_ID": "MG-PRICING_1_51803",
                        "MIN_SHIPPING_MERCHANT": "0",
                        "INSTALLMENTS_NUMBER": "1",
                        "PAYMENT_WAY_ID": "4"
                    }
                }
            ],
            "additionalValues": {
                "PM_PAYER_COMMISSION_VALUE": {
                    "value": 0.00,
                    "currency": "COP"
                },
                "PM_TAX": {
                    "value": 0.00,
                    "currency": "COP"
                },
                "PM_PAYER_INTEREST_VALUE": {
                    "value": 0.00,
                    "currency": "COP"
                },
                "TX_ADDITIONAL_VALUE": {
                    "value": 0.00,
                    "currency": "COP"
                },
                "PM_NETWORK_VALUE": {
                    "value": 50000.00,
                    "currency": "COP"
                },
                "PM_TAX_RETURN_BASE": {
                    "value": 0.00,
                    "currency": "COP"
                },
                "TX_VALUE": {
                    "value": 50000.00,
                    "currency": "COP"
                },
                "TX_TAX": {
                    "value": 0.00,
                    "currency": "COP"
                },
                "PM_PAYER_PRICING_VALUES": {
                    "value": 0.00,
                    "currency": "COP"
                },
                "TX_TAX_RETURN_BASE": {
                    "value": 0.00,
                    "currency": "COP"
                },
                "PM_PURCHASE_VALUE": {
                    "value": 50000.00,
                    "currency": "COP"
                },
                "PM_ADDITIONAL_VALUE": {
                    "value": 0.00,
                    "currency": "COP"
                },
                "PM_VALUE": {
                    "value": 50000.00,
                    "currency": "COP"
                }
            },
            "creationDate": 1620064873257,
            "isCreatedUsingStandardIntegrationParams": null,
            "merchantId": 508029,
            "processedTransactionId": "5fde3c2c-540d-4579-96f7-2a4b8c65a951",
            "orderSignature": "49f80210a72e9b7cafe9001338450bbb"
        }
    }
}
```

{{< /tab >}}

{{< tab tabNum="2" >}}
<br>

Ejemplo petición:
```XML
<request>
   <language>en</language>
   <command>ORDER_DETAIL</command>
   <merchant>
      <apiLogin>pRRXKOl8ikMmt9u</apiLogin>
      <apiKey>4Vj8eK4rloUd272L48hsrarnUA</apiKey>
   </merchant>
   <details class="java.util.HashMap">
      <entry>
         <string>orderId</string>
         <object class="java.lang.Long">2637540</object>
      </entry>
   </details>  
   <isTest>false</isTest>
</request>
```
<br>

Ejemplo respuesta:
```XML
<reportingResponse>
    <code>SUCCESS</code>
    <result>
        <payload class="order">
            <id>857695047</id>
            <accountId>512321</accountId>
            <status>CAPTURED</status>
            <referenceCode>PRODUCT_TEST_2021-05-03T18:01:10.946Z</referenceCode>
            <description>Payment test description Documentation</description>
            <language>es</language>
            <notifyUrl>http://www.payulatam.com/confirmation</notifyUrl>
            <shippingAddress>
                <street1>calle 100</street1>
                <street2>5555487</street2>
                <city>Medellin</city>
                <state>Antioquia</state>
                <country>CO</country>
                <postalCode>0000000</postalCode>
                <phone>7563126</phone>
            </shippingAddress>
            <buyer>
                <merchantBuyerId>1</merchantBuyerId>
                <fullName>First name and second buyer name</fullName>
                <emailAddress>buyer_test@test.com</emailAddress>
                <contactPhone>7563126</contactPhone>
                <buyerAddress>
                    <street1>calle 100</street1>
                    <street2>5555487</street2>
                    <city>Medellin</city>
                    <state>Antioquia</state>
                    <country>CO</country>
                    <postalCode>000000</postalCode>
                    <phone>7563126</phone>
                </buyerAddress>
                <dniNumber>123456789</dniNumber>
            </buyer>
            <isTest>true</isTest>
            <transactions>
                <transaction>
                    <id>5fde3c2c-540d-4579-96f7-2a4b8c65a951</id>
                    <creditCard>
                        <maskedNumber>547130******0003</maskedNumber>
                        <name>APPROVED</name>
                    </creditCard>
                    <type>AUTHORIZATION_AND_CAPTURE</type>
                    <paymentMethod>MASTERCARD</paymentMethod>
                    <paymentCountry>CO</paymentCountry>
                    <transactionResponse>
                        <state>APPROVED</state>
                        <trazabilityCode>00000000</trazabilityCode>
                        <authorizationCode>00000000</authorizationCode>
                        <responseCode>APPROVED</responseCode>
                        <operationDate>2021-05-03T12:59:52</operationDate>
                    </transactionResponse>
                    <deviceSessionId>vghs6tvkcle931686k1900o6e1</deviceSessionId>
                    <ipAddress>127.0.0.1</ipAddress>
                    <cookie>pt1t38347bs6jc9ruv2ecpv7o2</cookie>
                    <userAgent>Mozilla/5.0 (Windows NT 5.1; rv:18.0) Gecko/20100101 Firefox/18.0</userAgent>
                    <payer>
                        <merchantPayerId>1</merchantPayerId>
                        <fullName>First name and second payer name</fullName>
                        <billingAddress>
                            <street1>calle 93</street1>
                            <street2>125544</street2>
                            <city>Bogota</city>
                            <state>Bogota DC</state>
                            <country>CO</country>
                            <postalCode>000000</postalCode>
                            <phone>7563126</phone>
                        </billingAddress>
                        <emailAddress>payer_test@test.com</emailAddress>
                        <contactPhone>7563126</contactPhone>
                        <dniNumber>5415668464654</dniNumber>
                    </payer>
                    <termsAndConditionId>202</termsAndConditionId>
                    <additionalValues>
                        <entry>
                            <string>PM_PAYER_COMMISSION_VALUE</string>
                            <additionalValue>
                                <value>0.00</value>
                                <currency>COP</currency>
                            </additionalValue>
                        </entry>
                        <entry>
                            <string>PM_PAYER_TOTAL_AMOUNT</string>
                            <additionalValue>
                                <value>50000.00</value>
                                <currency>COP</currency>
                            </additionalValue>
                        </entry>
                        <entry>
                            <string>PM_TAX</string>
                            <additionalValue>
                                <value>0.00</value>
                                <currency>COP</currency>
                            </additionalValue>
                        </entry>
                        <entry>
                            <string>PM_PAYER_INTEREST_VALUE</string>
                            <additionalValue>
                                <value>0.00</value>
                                <currency>COP</currency>
                            </additionalValue>
                        </entry>
                        <entry>
                            <string>TX_ADDITIONAL_VALUE</string>
                            <additionalValue>
                                <value>0.00</value>
                                <currency>COP</currency>
                            </additionalValue>
                        </entry>
                        <entry>
                            <string>PM_NETWORK_VALUE</string>
                            <additionalValue>
                                <value>50000.00</value>
                                <currency>COP</currency>
                            </additionalValue>
                        </entry>
                        <entry>
                            <string>PM_TAX_RETURN_BASE</string>
                            <additionalValue>
                                <value>0.00</value>
                                <currency>COP</currency>
                            </additionalValue>
                        </entry>
                        <entry>
                            <string>TX_VALUE</string>
                            <additionalValue>
                                <value>50000.00</value>
                                <currency>COP</currency>
                            </additionalValue>
                        </entry>
                        <entry>
                            <string>CURRENT_TX_VALUE</string>
                            <additionalValue>
                                <value>50000.00</value>
                                <currency>COP</currency>
                            </additionalValue>
                        </entry>
                        <entry>
                            <string>TX_TAX</string>
                            <additionalValue>
                                <value>0.00</value>
                                <currency>COP</currency>
                            </additionalValue>
                        </entry>
                        <entry>
                            <string>PM_PAYER_PRICING_VALUES</string>
                            <additionalValue>
                                <value>0.00</value>
                                <currency>COP</currency>
                            </additionalValue>
                        </entry>
                        <entry>
                            <string>TX_TAX_RETURN_BASE</string>
                            <additionalValue>
                                <value>0.00</value>
                                <currency>COP</currency>
                            </additionalValue>
                        </entry>
                        <entry>
                            <string>PM_PURCHASE_VALUE</string>
                            <additionalValue>
                                <value>50000.00</value>
                                <currency>COP</currency>
                            </additionalValue>
                        </entry>
                        <entry>
                            <string>PM_ADDITIONAL_VALUE</string>
                            <additionalValue>
                                <value>0.00</value>
                                <currency>COP</currency>
                            </additionalValue>
                        </entry>
                        <entry>
                            <string>PM_VALUE</string>
                            <additionalValue>
                                <value>50000.00</value>
                                <currency>COP</currency>
                            </additionalValue>
                        </entry>
                    </additionalValues>
                    <extraParameters>
                        <entry>
                            <string>MIN_SHIPPING_PAYER</string>
                            <string>0</string>
                        </entry>
                        <entry>
                            <string>BANK_REFERENCED_CODE</string>
                            <string>CREDIT</string>
                        </entry>
                        <entry>
                            <string>PRICING_PROFILE_GROUP_ID</string>
                            <string>MG-PRICING_2_341559</string>
                        </entry>
                        <entry>
                            <string>MAX_SHIPPING_MERCHANT</string>
                            <string>0</string>
                        </entry>
                        <entry>
                            <string>PERCENT_SHIPPING_MERCHANT</string>
                            <string>0</string>
                        </entry>
                        <entry>
                            <string>MAX_SHIPPING_PAYER</string>
                            <string>0</string>
                        </entry>
                        <entry>
                            <string>MERCHANT_PROFILE_ID</string>
                            <string>MG-PRICING_1_51803</string>
                        </entry>
                        <entry>
                            <string>MIN_SHIPPING_MERCHANT</string>
                            <string>0</string>
                        </entry>
                        <entry>
                            <string>INSTALLMENTS_NUMBER</string>
                            <string>1</string>
                        </entry>
                        <entry>
                            <string>PAYMENT_WAY_ID</string>
                            <string>4</string>
                        </entry>
                    </extraParameters>
                </transaction>
            </transactions>
            <additionalValues>
                <entry>
                    <string>PM_PAYER_COMMISSION_VALUE</string>
                    <additionalValue>
                        <value>0.00</value>
                        <currency>COP</currency>
                    </additionalValue>
                </entry>
                <entry>
                    <string>PM_TAX</string>
                    <additionalValue>
                        <value>0.00</value>
                        <currency>COP</currency>
                    </additionalValue>
                </entry>
                <entry>
                    <string>PM_PAYER_INTEREST_VALUE</string>
                    <additionalValue>
                        <value>0.00</value>
                        <currency>COP</currency>
                    </additionalValue>
                </entry>
                <entry>
                    <string>TX_ADDITIONAL_VALUE</string>
                    <additionalValue>
                        <value>0.00</value>
                        <currency>COP</currency>
                    </additionalValue>
                </entry>
                <entry>
                    <string>PM_NETWORK_VALUE</string>
                    <additionalValue>
                        <value>50000.00</value>
                        <currency>COP</currency>
                    </additionalValue>
                </entry>
                <entry>
                    <string>PM_TAX_RETURN_BASE</string>
                    <additionalValue>
                        <value>0.00</value>
                        <currency>COP</currency>
                    </additionalValue>
                </entry>
                <entry>
                    <string>TX_VALUE</string>
                    <additionalValue>
                        <value>50000.00</value>
                        <currency>COP</currency>
                    </additionalValue>
                </entry>
                <entry>
                    <string>TX_TAX</string>
                    <additionalValue>
                        <value>0.00</value>
                        <currency>COP</currency>
                    </additionalValue>
                </entry>
                <entry>
                    <string>PM_PAYER_PRICING_VALUES</string>
                    <additionalValue>
                        <value>0.00</value>
                        <currency>COP</currency>
                    </additionalValue>
                </entry>
                <entry>
                    <string>TX_TAX_RETURN_BASE</string>
                    <additionalValue>
                        <value>0.00</value>
                        <currency>COP</currency>
                    </additionalValue>
                </entry>
                <entry>
                    <string>PM_PURCHASE_VALUE</string>
                    <additionalValue>
                        <value>50000.00</value>
                        <currency>COP</currency>
                    </additionalValue>
                </entry>
                <entry>
                    <string>PM_ADDITIONAL_VALUE</string>
                    <additionalValue>
                        <value>0.00</value>
                        <currency>COP</currency>
                    </additionalValue>
                </entry>
                <entry>
                    <string>PM_VALUE</string>
                    <additionalValue>
                        <value>50000.00</value>
                        <currency>COP</currency>
                    </additionalValue>
                </entry>
            </additionalValues>
            <creationDate>2021-05-03T13:01:13</creationDate>
            <merchantId>508029</merchantId>
            <processedTransactionId>5fde3c2c-540d-4579-96f7-2a4b8c65a951</processedTransactionId>
            <orderSignature>49f80210a72e9b7cafe9001338450bbb</orderSignature>
        </payload>
    </result>
</reportingResponse>
```
{{< /tab >}}
{{< /tabs >}}
<br>


## Consultar por Identificador de la transacción {#query-by-transaction-id}
*Transaction Id* es un valor generado por PayU para identificar una transaccion generada para una orden. 
Puedes utilizar el comando `TRANSACTION_RESPONSE_DETAIL` para consultar la información de una transacción.

Los siguientes son los cuerpos de la petición y la respuesta para esta operación.

{{< tabs tabTotal="2" tabID="2" tabName1="JSON" tabName2="XML" >}}
{{< tab tabNum="1" >}}
<br>

Ejemplo petición:
```JSON
{
   "test": false,
   "language": "en",
   "command": "TRANSACTION_RESPONSE_DETAIL",
   "merchant": {
      "apiLogin": "pRRXKOl8ikMmt9u",
      "apiKey": "4Vj8eK4rloUd272L48hsrarnUA"
   },
   "details": {
      "transactionId": "546e0fe9-8076-46b5-9f73-622c5a12f5cb"
   }
}
```
<br>

Ejemplo respuesta:
```JSON
{
    "code": "SUCCESS",
    "error": null,
    "result": {
        "payload": {
            "state": "APPROVED",
            "paymentNetworkResponseCode": "000",
            "paymentNetworkResponseErrorMessage": null,
            "trazabilityCode": "77821",
            "authorizationCode": "170921",
            "pendingReason": null,
            "responseCode": "APPROVED",
            "errorCode": null,
            "responseMessage": "Aprobado y completado con exito",
            "transactionDate": null,
            "transactionTime": null,
            "operationDate": 1620069958670,
            "extraParameters": null
        }
    }
}
```

{{< /tab >}}

{{< tab tabNum="2" >}}
<br>

Ejemplo petición:
```XML
<request>
   <language>en</language>
   <command>TRANSACTION_RESPONSE_DETAIL</command>
   <merchant>
      <apiLogin>pRRXKOl8ikMmt9u</apiLogin>
      <apiKey>4Vj8eK4rloUd272L48hsrarnUA</apiKey>
   </merchant>
   <details class="java.util.HashMap">
      <entry>
         <string>transactionId</string>
         <object class="java.lang.String">546e0fe9-8076-46b5-9f73-622c5a12f5cb</object>
      </entry>
   </details>
   <isTest>false</isTest>
</request>
```
<br>

Ejemplo respuesta:
```XML
<reportingResponse>
    <code>SUCCESS</code>
    <result>
        <payload class="transactionResponse">
            <state>APPROVED</state>
            <paymentNetworkResponseCode>000</paymentNetworkResponseCode>
            <trazabilityCode>77821</trazabilityCode>
            <authorizationCode>170921</authorizationCode>
            <responseCode>APPROVED</responseCode>
            <responseMessage>Aprobado y completado con exito</responseMessage>
            <operationDate>2021-05-03T14:25:58</operationDate>
        </payload>
    </result>
</reportingResponse>
```
{{< /tab >}}
{{< /tabs >}}
<br>

## Consultar por Identificador de la referencia {#query-by-reference-id}
*Reference Id* es un valor generado por tu comercio para identificar una orden. 
Puedes utilizar el comando `ORDER_DETAIL_BY_REFERENCE_CODE` para consultar el estado de una order por tu propio identificador (Referencia).
Los siguientes son los cuerpos de la petición y la respuesta para este método.

{{< tabs tabTotal="2" tabID="3" tabName1="JSON" tabName2="XML" >}}
{{< tab tabNum="1" >}}
<br>

Ejemplo petición:
```JSON
{
   "test": false,
   "language": "en",
   "command": "ORDER_DETAIL_BY_REFERENCE_CODE",
   "merchant": {
      "apiLogin": "pRRXKOl8ikMmt9u",
      "apiKey": "4Vj8eK4rloUd272L48hsrarnUA"
   },
   "details": {
      "referenceCode": "HP14015317573744"
   }
}
```
<br>

Ejemplo respuesta:
```JSON
{
    "code": "SUCCESS",
    "error": null,
    "result": {
        "payload": [
            {
                "id": 844427581,
                "accountId": 512321,
                "status": "CAPTURED",
                "referenceCode": "HP14015317573744",
                "description": "9518567a-0da7-44f9-b4d5-f8b8ac8d96d4",
                "airlineCode": null,
                "language": "pt",
                "notifyUrl": "http://api-pay-aff.vulcano.rocks/hotpay-notification-server/api/v1/payu/notification",
                "shippingAddress": null,
                "buyer": {
                    "merchantBuyerId": "0c970b19-3fbf-362c-b64b-c2c6ece8d01a",
                    "fullName": "APPROVED",
                    "emailAddress": "e26a8f06-64ef-49aa-8897-29df2f664017@usetheforce.com",
                    "contactPhone": null,
                    "buyerAddress": {
                        "street1": "ae QOprITzE",
                        "street2": "448",
                        "city": "BH",
                        "state": "MG",
                        "country": "CO",
                        "postalCode": "27519777",
                        "phone": null
                    },
                    "dniNumber": "1111",
                    "cnpj": "61609024311"
                },
                "antifraudMerchantId": null,
                "isTest": true,
                "transactions": [
                    {
                        "id": "76b724ee-f8e3-4228-84ca-d9e0a9d5d2b7",
                        "order": null,
                        "creditCard": {
                            "maskedNumber": "411111******1111",
                            "issuerBank": "THE CHASE MANHATTAN BANK",
                            "name": "APPROVED",
                            "cardType": null
                        },
                        "bankAccount": null,
                        "type": "AUTHORIZATION_AND_CAPTURE",
                        "parentTransactionId": null,
                        "paymentMethod": "VISA",
                        "source": null,
                        "paymentCountry": "CO",
                        "transactionResponse": {
                            "state": "APPROVED",
                            "paymentNetworkResponseCode": null,
                            "paymentNetworkResponseErrorMessage": null,
                            "trazabilityCode": "00000000",
                            "authorizationCode": "00000000",
                            "pendingReason": null,
                            "responseCode": "APPROVED",
                            "errorCode": null,
                            "responseMessage": null,
                            "transactionDate": null,
                            "transactionTime": null,
                            "operationDate": 1531757342757,
                            "extraParameters": null
                        },
                        "deviceSessionId": null,
                        "ipAddress": "10.100.1.30",
                        "cookie": null,
                        "userAgent": "Apache-HttpClient/4.3.1 (java 1.5)",
                        "expirationDate": null,
                        "payer": {
                            "merchantPayerId": "c48c9d72c2344173a8a66ad157f1415e@payutest.com",
                            "fullName": "APPROVED",
                            "billingAddress": {
                                "street1": "ae QOprITzE",
                                "street2": "448",
                                "city": "BH",
                                "state": "MG",
                                "country": "CO",
                                "postalCode": "27519777",
                                "phone": null
                            },
                            "emailAddress": "e26a8f06-64ef-49aa-8897-29df2f664017@usetheforce.com",
                            "contactPhone": null,
                            "dniNumber": "1111",
                            "dniType": null
                        },
                        "termsAndConditionId": 202,
                        "additionalValues": {
                            "PM_PAYER_COMMISSION_VALUE": {
                                "value": 0.00,
                                "currency": "COP"
                            },
                            "DP_MERCHANT_COMMISSION_VALUE": {
                                "value": 119.00,
                                "currency": "COP"
                            },
                            "COMMISSION_VALUE": {
                                "value": 0.00,
                                "currency": "COP"
                            },
                            "PM_PAYER_TOTAL_AMOUNT": {
                                "value": 54600.00,
                                "currency": "COP"
                            },
                            "PM_TAX": {
                                "value": 8717.00,
                                "currency": "COP"
                            },
                            "PM_PAYER_INTEREST_VALUE": {
                                "value": 0.00,
                                "currency": "COP"
                            },
                            "TX_ADDITIONAL_VALUE": {
                                "value": 0.00,
                                "currency": "COP"
                            },
                            "PM_NETWORK_VALUE": {
                                "value": 54600.00,
                                "currency": "COP"
                            },
                            "PM_TAX_RETURN_BASE": {
                                "value": 45882.00,
                                "currency": "COP"
                            },
                            "TX_VALUE": {
                                "value": 54600.00,
                                "currency": "COP"
                            },
                            "CURRENT_TX_VALUE": {
                                "value": 54600.00,
                                "currency": "COP"
                            },
                            "TX_TAX": {
                                "value": 8717.65,
                                "currency": "COP"
                            },
                            "DP_MERCHANT_INTEREST_VALUE": {
                                "value": 0.00,
                                "currency": "COP"
                            },
                            "DP_MERCHANT_TOTAL_INCOME_VALUE": {
                                "value": 52921.05,
                                "currency": "COP"
                            },
                            "PM_PAYER_PRICING_VALUES": {
                                "value": 0.00,
                                "currency": "COP"
                            },
                            "TX_TAX_RETURN_BASE": {
                                "value": 45882.35,
                                "currency": "COP"
                            },
                            "PM_PURCHASE_VALUE": {
                                "value": 45883.00,
                                "currency": "COP"
                            },
                            "PM_ADDITIONAL_VALUE": {
                                "value": 0.00,
                                "currency": "COP"
                            },
                            "PM_VALUE": {
                                "value": 54600.00,
                                "currency": "COP"
                            }
                        },
                        "extraParameters": {
                            "MIN_SHIPPING_PAYER": "0",
                            "PRICING_PROFILE_GROUP_ID": "MG-PRICING_2_341559",
                            "MAX_SHIPPING_MERCHANT": "0",
                            "PERCENT_SHIPPING_MERCHANT": "0",
                            "MAX_SHIPPING_PAYER": "0",
                            "MERCHANT_PROFILE_ID": "MG-PRICING_1_51803",
                            "MIN_SHIPPING_MERCHANT": "0",
                            "INSTALLMENTS_NUMBER": "1"
                        }
                    }
                ],
                "additionalValues": {
                    "PM_PAYER_COMMISSION_VALUE": {
                        "value": 0.00,
                        "currency": "COP"
                    },
                    "DP_MERCHANT_COMMISSION_VALUE": {
                        "value": 119.00,
                        "currency": "COP"
                    },
                    "COMMISSION_VALUE": {
                        "value": 0.00,
                        "currency": "COP"
                    },
                    "PM_TAX": {
                        "value": 8717.00,
                        "currency": "COP"
                    },
                    "PM_PAYER_INTEREST_VALUE": {
                        "value": 0.00,
                        "currency": "COP"
                    },
                    "TX_ADDITIONAL_VALUE": {
                        "value": 0.00,
                        "currency": "COP"
                    },
                    "PM_NETWORK_VALUE": {
                        "value": 54600.00,
                        "currency": "COP"
                    },
                    "PM_TAX_RETURN_BASE": {
                        "value": 45882.00,
                        "currency": "COP"
                    },
                    "TX_VALUE": {
                        "value": 54600.00,
                        "currency": "COP"
                    },
                    "TX_TAX": {
                        "value": 8717.65,
                        "currency": "COP"
                    },
                    "DP_MERCHANT_INTEREST_VALUE": {
                        "value": 0.00,
                        "currency": "COP"
                    },
                    "PM_PAYER_PRICING_VALUES": {
                        "value": 0.00,
                        "currency": "COP"
                    },
                    "TX_TAX_RETURN_BASE": {
                        "value": 45882.35,
                        "currency": "COP"
                    },
                    "PM_PURCHASE_VALUE": {
                        "value": 45883.00,
                        "currency": "COP"
                    },
                    "PM_ADDITIONAL_VALUE": {
                        "value": 0.00,
                        "currency": "COP"
                    },
                    "PM_VALUE": {
                        "value": 54600.00,
                        "currency": "COP"
                    }
                },
                "creationDate": 1531757337149,
                "isCreatedUsingStandardIntegrationParams": null,
                "merchantId": 508029,
                "processedTransactionId": "76b724ee-f8e3-4228-84ca-d9e0a9d5d2b7",
                "orderSignature": "bbd718c869298251a91329b673c5abfa"
            }
        ]
    }
}
```

{{< /tab >}}

{{< tab tabNum="2" >}}
<br>

Ejemplo petición:
```XML
<request>
	<language>en</language>
	<command>ORDER_DETAIL_BY_REFERENCE_CODE</command>
	<merchant>
		<apiLogin>pRRXKOl8ikMmt9u</apiLogin>
		<apiKey>4Vj8eK4rloUd272L48hsrarnUA</apiKey>
	</merchant>
	<details class="java.util.HashMap">
		<entry>
			<string>referenceCode</string>
			<object class="java.lang.String">HP14015317573744</object>
		</entry>
	</details>
	<isTest>false</isTest>
</request>
```
<br>

Ejemplo respuesta:
```XML
<reportingResponse>
    <code>SUCCESS</code>
    <result>
        <payload class="list">
            <order>
                <id>844427581</id>
                <accountId>512321</accountId>
                <status>CAPTURED</status>
                <referenceCode>HP14015317573744</referenceCode>
                <description>9518567a-0da7-44f9-b4d5-f8b8ac8d96d4</description>
                <language>pt</language>
                <notifyUrl>http://api-pay-aff.vulcano.rocks/hotpay-notification-server/api/v1/payu/notification</notifyUrl>
                <buyer>
                    <merchantBuyerId>0c970b19-3fbf-362c-b64b-c2c6ece8d01a</merchantBuyerId>
                    <fullName>APPROVED</fullName>
                    <emailAddress>e26a8f06-64ef-49aa-8897-29df2f664017@usetheforce.com</emailAddress>
                    <buyerAddress>
                        <street1>ae QOprITzE</street1>
                        <street2>448</street2>
                        <city>BH</city>
                        <state>MG</state>
                        <country>CO</country>
                        <postalCode>27519777</postalCode>
                    </buyerAddress>
                    <dniNumber>1111</dniNumber>
                    <CNPJ>61609024311</CNPJ>
                </buyer>
                <isTest>true</isTest>
                <transactions>
                    <transaction>
                        <id>76b724ee-f8e3-4228-84ca-d9e0a9d5d2b7</id>
                        <creditCard>
                            <maskedNumber>411111******1111</maskedNumber>
                            <issuerBank>THE CHASE MANHATTAN BANK</issuerBank>
                            <name>APPROVED</name>
                        </creditCard>
                        <type>AUTHORIZATION_AND_CAPTURE</type>
                        <paymentMethod>VISA</paymentMethod>
                        <paymentCountry>CO</paymentCountry>
                        <transactionResponse>
                            <state>APPROVED</state>
                            <trazabilityCode>00000000</trazabilityCode>
                            <authorizationCode>00000000</authorizationCode>
                            <responseCode>APPROVED</responseCode>
                            <operationDate>2018-07-16T11:09:02</operationDate>
                        </transactionResponse>
                        <ipAddress>10.100.1.30</ipAddress>
                        <userAgent>Apache-HttpClient/4.3.1 (java 1.5)</userAgent>
                        <payer>
                            <merchantPayerId>c48c9d72c2344173a8a66ad157f1415e@payutest.com</merchantPayerId>
                            <fullName>APPROVED</fullName>
                            <billingAddress>
                                <street1>ae QOprITzE</street1>
                                <street2>448</street2>
                                <city>BH</city>
                                <state>MG</state>
                                <country>CO</country>
                                <postalCode>27519777</postalCode>
                            </billingAddress>
                            <emailAddress>e26a8f06-64ef-49aa-8897-29df2f664017@usetheforce.com</emailAddress>
                            <dniNumber>1111</dniNumber>
                        </payer>
                        <termsAndConditionId>202</termsAndConditionId>
                        <additionalValues>
                            <entry>
                                <string>PM_PAYER_COMMISSION_VALUE</string>
                                <additionalValue>
                                    <value>0.00</value>
                                    <currency>COP</currency>
                                </additionalValue>
                            </entry>
                            <entry>
                                <string>DP_MERCHANT_COMMISSION_VALUE</string>
                                <additionalValue>
                                    <value>119.00</value>
                                    <currency>COP</currency>
                                </additionalValue>
                            </entry>
                            <entry>
                                <string>COMMISSION_VALUE</string>
                                <additionalValue>
                                    <value>0.00</value>
                                    <currency>COP</currency>
                                </additionalValue>
                            </entry>
                            <entry>
                                <string>PM_PAYER_TOTAL_AMOUNT</string>
                                <additionalValue>
                                    <value>54600.00</value>
                                    <currency>COP</currency>
                                </additionalValue>
                            </entry>
                            <entry>
                                <string>PM_TAX</string>
                                <additionalValue>
                                    <value>8717.00</value>
                                    <currency>COP</currency>
                                </additionalValue>
                            </entry>
                            <entry>
                                <string>PM_PAYER_INTEREST_VALUE</string>
                                <additionalValue>
                                    <value>0.00</value>
                                    <currency>COP</currency>
                                </additionalValue>
                            </entry>
                            <entry>
                                <string>TX_ADDITIONAL_VALUE</string>
                                <additionalValue>
                                    <value>0.00</value>
                                    <currency>COP</currency>
                                </additionalValue>
                            </entry>
                            <entry>
                                <string>PM_NETWORK_VALUE</string>
                                <additionalValue>
                                    <value>54600.00</value>
                                    <currency>COP</currency>
                                </additionalValue>
                            </entry>
                            <entry>
                                <string>PM_TAX_RETURN_BASE</string>
                                <additionalValue>
                                    <value>45882.00</value>
                                    <currency>COP</currency>
                                </additionalValue>
                            </entry>
                            <entry>
                                <string>TX_VALUE</string>
                                <additionalValue>
                                    <value>54600.00</value>
                                    <currency>COP</currency>
                                </additionalValue>
                            </entry>
                            <entry>
                                <string>CURRENT_TX_VALUE</string>
                                <additionalValue>
                                    <value>54600.00</value>
                                    <currency>COP</currency>
                                </additionalValue>
                            </entry>
                            <entry>
                                <string>TX_TAX</string>
                                <additionalValue>
                                    <value>8717.65</value>
                                    <currency>COP</currency>
                                </additionalValue>
                            </entry>
                            <entry>
                                <string>DP_MERCHANT_INTEREST_VALUE</string>
                                <additionalValue>
                                    <value>0.00</value>
                                    <currency>COP</currency>
                                </additionalValue>
                            </entry>
                            <entry>
                                <string>DP_MERCHANT_TOTAL_INCOME_VALUE</string>
                                <additionalValue>
                                    <value>52921.05</value>
                                    <currency>COP</currency>
                                </additionalValue>
                            </entry>
                            <entry>
                                <string>PM_PAYER_PRICING_VALUES</string>
                                <additionalValue>
                                    <value>0.00</value>
                                    <currency>COP</currency>
                                </additionalValue>
                            </entry>
                            <entry>
                                <string>TX_TAX_RETURN_BASE</string>
                                <additionalValue>
                                    <value>45882.35</value>
                                    <currency>COP</currency>
                                </additionalValue>
                            </entry>
                            <entry>
                                <string>PM_PURCHASE_VALUE</string>
                                <additionalValue>
                                    <value>45883.00</value>
                                    <currency>COP</currency>
                                </additionalValue>
                            </entry>
                            <entry>
                                <string>PM_ADDITIONAL_VALUE</string>
                                <additionalValue>
                                    <value>0.00</value>
                                    <currency>COP</currency>
                                </additionalValue>
                            </entry>
                            <entry>
                                <string>PM_VALUE</string>
                                <additionalValue>
                                    <value>54600.00</value>
                                    <currency>COP</currency>
                                </additionalValue>
                            </entry>
                        </additionalValues>
                        <extraParameters>
                            <entry>
                                <string>MIN_SHIPPING_PAYER</string>
                                <string>0</string>
                            </entry>
                            <entry>
                                <string>PRICING_PROFILE_GROUP_ID</string>
                                <string>MG-PRICING_2_341559</string>
                            </entry>
                            <entry>
                                <string>MAX_SHIPPING_MERCHANT</string>
                                <string>0</string>
                            </entry>
                            <entry>
                                <string>PERCENT_SHIPPING_MERCHANT</string>
                                <string>0</string>
                            </entry>
                            <entry>
                                <string>MAX_SHIPPING_PAYER</string>
                                <string>0</string>
                            </entry>
                            <entry>
                                <string>MERCHANT_PROFILE_ID</string>
                                <string>MG-PRICING_1_51803</string>
                            </entry>
                            <entry>
                                <string>MIN_SHIPPING_MERCHANT</string>
                                <string>0</string>
                            </entry>
                            <entry>
                                <string>INSTALLMENTS_NUMBER</string>
                                <string>1</string>
                            </entry>
                        </extraParameters>
                    </transaction>
                </transactions>
                <additionalValues>
                    <entry>
                        <string>PM_PAYER_COMMISSION_VALUE</string>
                        <additionalValue>
                            <value>0.00</value>
                            <currency>COP</currency>
                        </additionalValue>
                    </entry>
                    <entry>
                        <string>DP_MERCHANT_COMMISSION_VALUE</string>
                        <additionalValue>
                            <value>119.00</value>
                            <currency>COP</currency>
                        </additionalValue>
                    </entry>
                    <entry>
                        <string>COMMISSION_VALUE</string>
                        <additionalValue>
                            <value>0.00</value>
                            <currency>COP</currency>
                        </additionalValue>
                    </entry>
                    <entry>
                        <string>PM_TAX</string>
                        <additionalValue>
                            <value>8717.00</value>
                            <currency>COP</currency>
                        </additionalValue>
                    </entry>
                    <entry>
                        <string>PM_PAYER_INTEREST_VALUE</string>
                        <additionalValue>
                            <value>0.00</value>
                            <currency>COP</currency>
                        </additionalValue>
                    </entry>
                    <entry>
                        <string>TX_ADDITIONAL_VALUE</string>
                        <additionalValue>
                            <value>0.00</value>
                            <currency>COP</currency>
                        </additionalValue>
                    </entry>
                    <entry>
                        <string>PM_NETWORK_VALUE</string>
                        <additionalValue>
                            <value>54600.00</value>
                            <currency>COP</currency>
                        </additionalValue>
                    </entry>
                    <entry>
                        <string>PM_TAX_RETURN_BASE</string>
                        <additionalValue>
                            <value>45882.00</value>
                            <currency>COP</currency>
                        </additionalValue>
                    </entry>
                    <entry>
                        <string>TX_VALUE</string>
                        <additionalValue>
                            <value>54600.00</value>
                            <currency>COP</currency>
                        </additionalValue>
                    </entry>
                    <entry>
                        <string>TX_TAX</string>
                        <additionalValue>
                            <value>8717.65</value>
                            <currency>COP</currency>
                        </additionalValue>
                    </entry>
                    <entry>
                        <string>DP_MERCHANT_INTEREST_VALUE</string>
                        <additionalValue>
                            <value>0.00</value>
                            <currency>COP</currency>
                        </additionalValue>
                    </entry>
                    <entry>
                        <string>PM_PAYER_PRICING_VALUES</string>
                        <additionalValue>
                            <value>0.00</value>
                            <currency>COP</currency>
                        </additionalValue>
                    </entry>
                    <entry>
                        <string>TX_TAX_RETURN_BASE</string>
                        <additionalValue>
                            <value>45882.35</value>
                            <currency>COP</currency>
                        </additionalValue>
                    </entry>
                    <entry>
                        <string>PM_PURCHASE_VALUE</string>
                        <additionalValue>
                            <value>45883.00</value>
                            <currency>COP</currency>
                        </additionalValue>
                    </entry>
                    <entry>
                        <string>PM_ADDITIONAL_VALUE</string>
                        <additionalValue>
                            <value>0.00</value>
                            <currency>COP</currency>
                        </additionalValue>
                    </entry>
                    <entry>
                        <string>PM_VALUE</string>
                        <additionalValue>
                            <value>54600.00</value>
                            <currency>COP</currency>
                        </additionalValue>
                    </entry>
                </additionalValues>
                <creationDate>2018-07-16T11:08:57</creationDate>
                <merchantId>508029</merchantId>
                <processedTransactionId>76b724ee-f8e3-4228-84ca-d9e0a9d5d2b7</processedTransactionId>
                <orderSignature>bbd718c869298251a91329b673c5abfa</orderSignature>
            </order>
        </payload>
    </result>
</reportingResponse>
```
{{< /tab >}}
{{< /tabs >}}
<br>


## Ping
El método `PING` te permite verificar la conexión con nuestra plataforma. Los siguientes son los cuerpos de la petición y la respuesta para este método.

{{< tabs tabTotal="2" tabID="4" tabName1="JSON" tabName2="XML" >}}
{{< tab tabNum="1" >}}
<br>

Ejemplo petición:
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

Ejemplo respuesta:
```JSON
{
    "code": "SUCCESS",
    "error": null,
    "result": {
        "payload": "ping"
    }
}
```

{{< /tab >}}

{{< tab tabNum="2" >}}
<br>

Ejemplo petición:
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

Ejemplo respuesta:
```XML
<reportingResponse>
    <code>SUCCESS</code>
    <result>
        <payload class="string">ping</payload>
    </result>
</reportingResponse>
```
{{< /tab >}}
{{< /tabs >}}
<br>

