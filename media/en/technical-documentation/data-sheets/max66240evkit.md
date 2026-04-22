<!-- lastmod 2023-07-25 -->
<!-- image -->

Evaluates: MAX66240

## General Description

The  MAX66240  evaluation  kit  (EV  kit)  reference  board is  a  ready-to-use  PCB  that  showcases  one  of  Analog Devices' MAX662xx family of secure HF ICs. The board is  built  with  a  hexagonal-shaped  antenna  construction (see the MAX66240 EV Kit Photo and Figure 1) tuned to 13.56MHz.

The  EV  kit  is  a  platform  that  allows  designers,  test, and  systems  engineers  to  evaluate  our  MAX66240  tag solution.  The  EV  kit allows users  to evaluate  the performance and capabilities of certain key features of the part and is a great platform to get started on a new NFC/ RFID tag design.

## MAX66240 EV Kit Photo

<!-- image -->

19-7368; Rev 1; 3/23

©

## MAX66240 Evaluation Kit

## Features and Benefits

- HF Interface at 13.56MHz
- User EEPROM Authenticated Memory Page Read/Write Transactions
- User EEPROM Page/Block Read/Write Transactions
- Secure Transaction that Writes 'Secret Keys' and Computes Message Authentication Code

## MAX66240 EV Kit Contents

- MAX66240 EV Kit Motherboard

Ordering Information appears at end of data sheet.

## Quick Start

## MAX6624x Mobile Application

The MAX66242 NFC Reader Mobile Application supports multiple MAX662xx EV kit boards. This demo application provides  a  quick  path  to  demonstrating  the  features  of both the MAX66242 and the MAX66240. To run the demo, the application should be downloaded to either an iOS ® or Android TM  NFC-compatible smartphone or tablet.

## How to Download Application

The  mobile  application  is  available  for  both  iOS  and Android. It  can  be  found  in  the Apple App  Store  and  in Google  Play  for  downloading  and  installation.  Search with  the  'MAX66242  NFC  Reader'  keyword  (Figure 1).  The  application  allows  the  user  to  send  commands

Evaluates: MAX66240

through the NFC interface to evaluate the features of the MAX6624x devices. The App can also be found through the following links:

- Android Store: MAX66242 NFC Reader
- Apple App Store: MAX66242 NFC Reader

Users  who  are  using  their  handsets  while  connected directly to their PC or notebook computer can use the link below to access the application. The user should keep in mind that NFC communications will need to be enabled on  the  phone  or  tablet  for  the  application  to  be  loaded successfully, and/or function properly.

iOS is a registered trademark of Cisco Technology, Inc.

Android is a trademark of Google LLC.

Figure 1. MAX6624x Mobile Applications Available in the Market

<!-- image -->

│

## MAX66240 Evaluation Kit

## EV Kit Setup

The EV kit requires no jumpers to run the MAX66240 features.  With  the Android  application  already  downloaded on the NFC-enabled phone or tablet, the user has everything needed to run the demo.

## Running the Demo

## MAX662xx SHA2 Android Application

The MAX662xx  SHA2 Android  application  supports several functions on the EV kit. These include reading tag UID,  reading/writing  data  into  tag  user  memory  (ASCII data entry for block-write is not supported with this version),  performing  authenticated  writes,  and  computing/

<!-- image -->

Figure 2. MAX662xx Antenna Layout

Figure 3a. Application Menu with Landing Screen

<!-- image -->

Figure 3b. Next Screen

<!-- image -->

│

## MAX66240 Evaluation Kit

comparing message authentication codes (MAC), among others.

The user only needs to make a selection from the menu and bring the tag/EV kit into the vicinity of the phone or tablet.  It  helps  to  know  where  the  NFC  antenna  on  the phone or tablet is located. The user can get an idea as to  where  the  antenna  is  located  by  doing  several  UID reads while touching the EV kit at several locations on the phone or tablet. On many phones, the antenna is located on the upper half of the backside of the phone.

## Reading UID

Select the menu item Get UID (Figure 4) and bring the EV kit into the vicinity of the phone/tablet.

## Reading Memory Page

Select  the  menu  item  to  read  memory  and  a  specific block  to  read  (Figure  5a).  The  MAX66240  has  a  4Kb memory, organized as pages. Touch the Page 0 menu item (Figure  5b)  to  get  a  drop  box.  After  the  specific  page number selection, bring the EV kit into the vicinity of the phone/tablet.

Figure 4. Reading Tag UID

<!-- image -->

Figure 5a. Reading Tag Memory

<!-- image -->

## Evaluates: MAX66240

Figure 5b. Selecting Tag Memory

<!-- image -->

│

## MAX66240 Evaluation Kit

## Loading a SHA-2 Secret and Performing a MAC Compare

Select the menu item and bring the EV kit into the vicinity of the phone/tablet.

The  MAX66xxx  represents  a  family  of  products.  The features covered are shown in Figure 6a and Figure 6b.

Figure 6a. Writing a SHA-256 Secret

<!-- image -->

Figure 6b. Doing a MAC Compare

<!-- image -->

## MAX66240 Evaluation Kit

Evaluates: MAX66240

Figure 7. MAX66240 EV Kit Schematic

<!-- image -->

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                       |
|---------------|-------|-------------------------------------------------------------------|
| C1            |     0 | Not populated, ceramic capacitor                                  |
| D1            |     0 | Not populated, diode                                              |
| JB1           |     0 | Not populated                                                     |
| R1-R3         |     0 | Not populated, resistors                                          |
| U1            |     1 | ISO 15693, SHA-256, and 4Kb user EEPROM Maxim MAX66240ISA+ (8 SO) |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX66240EVKIT# | EV Kit |

#Denotes RoHS compliant.

| DESIGNATION   |   QTY | DESCRIPTION                          |
|---------------|-------|--------------------------------------|
| U2            |     0 | Not populated                        |
| -             |     1 | PCB#: Assembled for MAX66240#K00 Kit |

│

## MAX66240 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                     | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------|-----------------|
|                 0 | 10/14           | Initial release                                 | -               |
|                 1 | 3/23            | Updated Android app link and added iOS app link | 2               |

For more information, contact Analog Devices customer apps support at: https://support.analog.com/en-US/technical-support/ .

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX66240