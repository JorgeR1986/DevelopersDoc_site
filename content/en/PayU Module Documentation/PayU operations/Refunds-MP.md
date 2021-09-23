---
title: "Refunds"
linkTitle: "Refunds"
date: 2021-09-03T16:41:53-05:00
type: docs
Description: >
  Learn how to make refunds from a paid sale from the PayU module. A refund is made when you voluntarily decide to return the amount paid by your customer.
weight: 20
---

{{% alert title="Note" color="info"%}}
If you perform a refund through this panel, this is only updated in the PayU Module. If you need to control and record the refunds in your refund system, you should use the [Refunds API]({{< ref "refunds.md" >}}).
{{% /alert %}}

## What is a refund?
A refund is the action to voluntary return the money paid by a customer when any of the following situations happen:
* The product or service delivered does not met the spectates of the customer and they returned it.
* The product is out of stock, anf the merchant is not able to deliver the product to the client.

## Refund procedure
Refunds are subject to review and approval of our team. The procedure to request refunds is explained below:

1. When a refund is requested by your customer, you need to request it using the PayU module. You just need to identify the order and provide a reason for refund.

2. Once you send the request, PayU reviews it and this is approved or rejected in **one** to **three** business days.

### Refund states
A refund can be in one of the following three states:

* **In return**: the request has been sent to PayU for approval and it is under approval.
* **Approved**: the request has been approved by a PayU’s customer service agent.
* **Declined**: the request does not meet the policies defined by PayU and was rejected by an agent.

## Permission required
To have access to this module, you need to have a profile with the following permission enabled:

* _Refunds and Chargebacks_ > _List Refunds_
* _Refunds and Chargebacks_ > _Manage Refunds_<br>This permission allows you to perform refunds.	

Refer to [Profiles and Permissions]({{< ref"Profile-and-permissions-management.md" >}}) for more information.

## Considerations
* Refunds are only available for transactions paid with card.
* You can retry the refund request if this was previously declined.
* Once you make the request, the transaction amount becomes part of the Frozen Balance of your PayU account until it is processed.
* In **Chile**:
  - Refunds for transactions with debit cards are not supported due to network restrictions.
  - Partial refunds for transactions using installments are received online but PayU processes them manually due to acquirer restrictions.
* In **Colombia**, partial refunds are not available for international credit cards.
* In **Peru**, partial refunds are supported for transactions without installments. Recall that transactions with one installment are considered as without installments. Partial refunds with visanet must be sent after one day.
* If your refund request is approved, the amount is refunded to the card holder.
* If your refund request is declined, the amount is released from the Frozen Balance and returns to the available Balance of your PayU account.
* Once the refund is approved, this will be reflected in the payer’s credit card when the bank make it effective.
* To check the status of your refund request, you can consult it by clicking the sale in the Merchant Panel.

## Refunds per country
Take into account the following considerations per country before requesting refunds.

{{< overview/refunds >}}
<sup>*</sup>_Depends on the network._

## How to request a refund?
To request a refund, the transaction must be approved and without any pending dispute process. Follow the next steps to request it.

1. Log into your PayU account. In the left menu, expand the _**Transactions**_ menu and select _**Sales Report**_.

![PrintScreen](/assets/Refunds/Refunds_en_04.png)

2. The [Sales Report]({{< ref "Sales-report.md" >}}) opens. Locate the transaction you want to refund and click it.

![PrintScreen](/assets/Refunds/Refunds_en_05.png)

3. The transaction details appear at the right of the screen, Click the _**Refund**_ button at the end of the panel.

<img src="/assets/Refunds/Refunds_en_06.png" alt="PrintScreen" width="50%"/><br>

4. If you need to request a partial refund, check the option _**Partial refund**_ and provide the requested value.

<img src="/assets/Refunds/Refunds_en_08.png" alt="PrintScreen" width="50%"/><br>

5. Provide the reason to request the refund (partial or total) and click _**Refund**_.

<img src="/assets/Refunds/Refunds_en_07.png" alt="PrintScreen" width="50%"/><br>

6. The summary of the request appears. While PayU process the refund, the amount of the refund is frozen in your account. If the request is approved, the amount refunded is returned to the customer through the payment method used.

<img src="/assets/Refunds/Refunds_en_09.png" alt="PrintScreen" width="50%"/><br>

7. Once the request has been approved, the status appears in the sale.

<img src="/assets/Refunds/Refunds_en_10.png" alt="PrintScreen" width="50%"/><br>