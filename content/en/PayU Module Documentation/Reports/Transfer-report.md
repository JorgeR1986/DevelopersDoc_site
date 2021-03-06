---
title: "Transfer Report"
linkTitle: "Transfer Report"
date: 2021-09-03T16:46:15-05:00
type: docs
Description: >
  Know the status of the transfers you have requested of the funds collected in your PayU account.
weight: 20
---

Furthermore, if you have enabled the Payouts API, you can query the state of the payouts to third party requested. For more information, refer to [Payouts]({{< ref "Payouts.md" >}}).

{{% alert title="Note" color="info"%}}
<img src="/assets/Brasil.png" width="20px"/> For brazilian accounts, the _**Transfers Report**_ is found in the _**Daily payouts**_ option (_**Transfers**_ > _**Daily payouts**_).
{{% /alert %}}

## Permission required
To have access to this module, you need to have a profile with the following permission enabled:
* If your account is not brazilian: _Transfers_ > _Review_
* If your account is brazilian: (Daily Payouts Brazil):
  - _View_	
  - _download.csv_

Refer to [Profiles and Permissions]({{< ref"Profile-and-permissions-management.md" >}}) for more information.

## Consult the report
Log into your PayU account. In the left menu, expand the _**Transfers**_ menu and select _**Transfers**_.

![PrintScreen](/assets/Transfers/Transfers_01.png)

Scroll down to the _**Created transfers report**_ section where the report table is located. By default, the report displays the transfers created in the last 30 days from the most recent to the oldest.

![PrintScreen](/assets/Reports/Reports_04.png)

The report has the following columns:

| Column              | Description                                                                                         |
|---------------------|-----------------------------------------------------------------------------------------------------|
| ID                  | Id of the transfer requested.                                                                       |
| Request date        | Date and time when the transfer was created.                                                        |
| Last update         | Date and time of the last action executed in the transfer.                                          |
| Transferred value   | Amount of the transfer along with its associated costs.<br>To know these costs, click the <img src="/assets/Reports/Reports_05.png" width="2%" style="vertical-align: baseline;"/> icon.<br><br>![PrintScreen](/assets/Reports/Reports_06.png)               |
| Destination account | Bank account of the request                                                                         |
| Status              | Latest status of the request. The possible states are: <ul style="margin-bottom: initial;"><li>Approved</li><li>In progress</li><li>Rejected</li></ul>                                                               |

{{% alert title="Note" color="info"%}}
If you need to display more information, contact your sales representative.
{{% /alert %}}

You can filter transfers by the date of their creation using the dates filter at the top right corner.

<img src="/assets/Reports/Reports_07.png" alt="PrintScreen" width="60%"/><br>

The date range of this filter is three (3) months before the end date. If you exceed this range, The report displays the information of three (3) months after the start date.<br>To see the information of a given date, set it for both start and end date.

## Download the report
To download the report, click the _**Download**_ button located at the top or at the bottom of the report table.

![PrintScreen](/assets/Reports/Reports_08.png)

A progress bar appears at the top of the screen. Once the process is completed, the report is automatically downloaded in an Excel (_.csv_) format. The name of the report uses the format:
* If your account is not brazilian: _**[DownloadDateInMillis]\_payment\_orders\_[AccountId].csv**_.
* If your account is brazilian: _**[DownloadDateInMillis]\_daily\_payment\_order\_[AccountId].csv**_.

![PrintScreen](/assets/Reports/Reports_09.png)

{{% alert title="Note" color="info"%}}
The generated report is stored during 90 days in the [My downloaded reports]({{< ref "Reports.md#my-downloaded-reports" >}}) section.
{{% /alert %}}