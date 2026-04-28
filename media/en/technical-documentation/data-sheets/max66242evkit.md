<!-- lastmod 2023-08-10 -->
<!-- image -->

Evaluates: MAX66242/DS7505

## General Description

The  MAX66242  evaluation  kit  (EV  kit)  reference  board is  a  ready-to-use  PCB  that  showcases  one  of  Maxim's MAX662XX  family  of  secure  dual-interface  tag/transponder ICs. The board is built with a octagonal-shaped antenna construction (see the MAX66242 EV Kit Photo and Figure 2) tuned to 13.56MHz.

The  EV  kit  is  a  platform  that  allows  designers,  test, and  systems  engineers  to  evaluate  our  MAX66242  tag solution.  The  EV  kit allows users  to evaluate  the performance and capabilities of certain key features of the part and is a great platform to get started on a new NFC/ RFID tag design.

Ordering Information appears at end of data sheet.

## MAX66242 EV Kit Photo

<!-- image -->

©

## MAX66242 Evaluation Kit

## Features and Benefits

- HF Interface at 13.56MHz
- I 2 C with Communications with the On-Board Temperature Sensor IC (DS7505)
- User EEPROM Authenticated Memory Page Read/Write Transactions
- User EEPROM Page/Block Read/Write Transactions
- Secure Transaction that Writes 'Secret Keys' and Computes Message Authentication Code
- Energy-Harvested VOUT Used to Power an LED On/Off

## EV Kit Contents

- MAX66242 EV Kit Motherboard

19-7402; Rev 2; 3/23

## MAX66242 Evaluation Kit

## Quick Start

## MAX6624x Mobile Application

The MAX66242 NFC Reader Mobile Application supports multiple MAX662xx EV kit boards. This demo application provides  a  quick  path  to  demonstrating  the  features  of both the MAX66242 and the MAX66240. To run the demo, the application should be downloaded to either an iOS ® or Android TM  NFC-compatible smartphone or tablet.

## How to Download Application

The  mobile  application  is  available  for  both  iOS  and Android. It  can  be  found  in  the Apple App  Store  and  in Google  Play  for  downloading  and  installation.  Search with  the  "MAX66242  NFC  Reader"  keyword  (Figure  1).

## Evaluates: MAX66242/DS750

The  application  allows  the  user  to  send  commands through the NFC interface to evaluate the features of the MAX6624x devices. The app can also be found through the following links:

- Android Store: MAX66242 NFC Reader

- Apple App Store: MAX66242 NFC Reader

iOS is a registered trademark of Cisco Technology, Inc. Android is a trademark of Google LLC.

Figure 1. MAX66242 Mobile Applications Available in the Market

<!-- image -->

│

## MAX66242 Evaluation Kit

## EV Kit Setup

The EV kit requires jumpers to be properly placed on the JB1 header for the energy-harvesting mode and the LED to  be  exercised.  Figure  3  shows  the  jumper  locations on the header. Table 1 describes the jumpers and their function.  With  the  Android  application  already  downloaded on the NFC-enabled phone or tablet, the user has everything needed to run the demo.

## Table 1. Jumper Functions (JB1)

| SHUNT POSITION   | EFFECT                     |
|------------------|----------------------------|
| 1-2 (Open*)      | N/A                        |
| 3-4 (Closed*)    | Connects SDAto the DS7505  |
| 5-6 (Closed*)    | Connects SCL to the DS7505 |
| 7-8 (Open*)      | N/A                        |
| 9-10 (Closed*)   | Connects VCC to the DS7505 |
| 11-12 (Closed*)  | Connects GND to the DS7505 |
| 13-14 (Closed*)  | Connects VOUT to the LED   |

* Default position.

Figure 2. MAX662XX Antenna Layout

<!-- image -->

Figure 3. Jumper Placements for VOUT and LED to be Exercised

<!-- image -->

│

## MAX66242 Evaluation Kit

## Energy Harvesting (VOUT)

To demonstrate  the  energy-harvesting  function,  the energy-harvested  VOUT  pin  is  connected  to  an  LED through a resistor and jumper (see Figure 9).

The application provides functions to enable/disable the VOUT pin through a configuration register bit. When the tag is configured to enable the VOUT pin, the LED turns on when the tag is placed in an HF field. The VOUT can also be configured to be disabled. When this is the case, VOUT remains in the off state when the tag is placed in an HF field. However, note that the VOUT pin must remain enabled for the temperature read exercise to return the correct temperature reading (i.e., a slightly stronger field is  needed to run the temperature sensor and the LED). The temperature sensor (DS7505) is powered from the harvested voltage on the VOUT pin.

## I 2 C Interface

The  I 2 C  interface  is  demonstrated  by  reading  the  local temperature  of  the  environment  from  the  on-board DS7505 temperature-sensor IC through its I 2 C port.

The NFC phone sends an HF 'peripheral read' command through  the  I 2 C  port.  This  temperature  data  is  funneled through the tag and the HF interface and is displayed on the phone. While the MAX66242 can function either as an I 2 C master  or  as  a  slave,  in  this  case  it  assumes  the  role  as  master. Note: If  the  temperature  reading  displayed  on  the phone  appears  to  be  off,  check  to  make  sure  the jumpers  are  properly  installed  on  the  header  (see Figure 3), and/or the LED 'on' has been enabled.

## Running the Demo

## MAX662XX SHA2 Android Application

The MAX662XX  SHA2 Android  application  supports several  functions  on  the  EV  kit.  These  include  reading tag UID and the local temperature, reading/writing data into tag  user  memory (ASCII data entry for block-write is not supported  with  this  version),  toggling  the  LED  on/off (powered from the harvested energy from the HF link), and performing authenticated writes, and computing/comparing message authentication codes (MAC), among others.

The user only needs to make a selection from the Menu and bring the tag/EV kit into the vicinity of the phone or tablet.  It  helps  to  know  where  the  NFC  antenna  on  the phone or tablet is located. The user can get an idea as to  where  the  antenna  is  located  by  doing  several  UID reads while touching the EV kit at several locations on the phone or tablet. On many phones, the antenna is located on the upper half of the backside of the phone.

Note: To navigate within the NFC application, movement to the "Next Screen" is accomplished by using the Menu "blue arrow" on the right side (Figure 4a). Return back to the "First Screen" by using the Menu "blue arrow" on the left side (Figure 4b).

Figure 4a. Application Menu with Landing Screen

<!-- image -->

Figure 4b. Next Screen

<!-- image -->

## MAX66242 Evaluation Kit

## Reading Tag UID

Select the Menu item Get UID (Figure 5) and bring the EV kit into the vicinity of the phone/tablet.

## Evaluates: MAX66242/DS750

## Reading/Selecting Memory Page

Select  the  Menu  item  to  read  memory  and  a  specific block  to  read  (Figure  6a).  The  MAX66242  has  a  4Kb memory, organized as pages. Touch the Page 0 Menu item (Figure  6b)  to  get  a  drop  box.  After  the  specific  page number selection, bring the EV kit into the vicinity of the phone/tablet.

<!-- image -->

Figure 5. Reading Tag UID

Figure 6a. Reading Tag Memory

<!-- image -->

Figure 6b. Selecting Tag Memory

<!-- image -->

│

## MAX66242 Evaluation Kit

## Reading Temperature and Toggling LED On/Off

Select the Menu item and bring the EV kit into the vicinity of the phone/tablet (see Figure 7a and Figure 7b).

Figure 7a. Reading Temperature from DS7505

<!-- image -->

Figure 7b. Toggling LED On/Off

<!-- image -->

## MAX66242 Evaluation Kit

## Loading a SHA-2 Secret and Performing a MAC Compare

Select the Menu item and bring the EV kit into the vicinity of the phone/tablet.

Figure 8a. Writing a SHA-256 Secret

<!-- image -->

## Evaluates: MAX66242/DS750

The  MAX62XX  represents  a  family  of  products.  The features covered are shown in Figure 8a and Figure 8b.

Figure 8b. Performing a MAC Compare

<!-- image -->

│

## MAX66242 Evaluation Kit

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                |
|---------------|-------|------------------------------------------------------------------------------------------------------------|
| C1            |     1 | 0.1μF ±10%, 25V X7R ceramic capacitor (0603)                                                               |
| D1            |     1 | 20mA, 3.2V clear green LED (0603)                                                                          |
| JB1           |     1 | 14-pin (7 x 2) header                                                                                      |
| R1-R3         |     3 | 3.2kΩ ±0.1% resistors (0603)                                                                               |
| U1            |     1 | DeepCover® secure authenticator with ISO 15693, I 2 C, SHA-256, and 4Kb user EEPROM (8 SO) Maxim MAX66242+ |
| U2            |     1 | High-precision digital thermometer and thermostat (8 SO) Maxim DS7505+                                     |
| -             |     5 | 2-position shunts, LP w/handle (30AU)                                                                      |
| -             |     1 | PCB#: Assembled for MAX66242#K00 kit                                                                       |

Figure 9. MAX66242 EV Kit Schematic

<!-- image -->

DeepCover is a registered trademark of Maxim Integrated Products, Inc.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX66242EVKIT# | EV Kit |

#Denotes RoHS compliant.

│

## MAX66242 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                               | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------------------------|-----------------|
|                 0 | 2/15            | Initial release                                                           | -               |
|                 1 | 4/17            | Updated software download and Figure numbers and corresponding references | 2-8             |
|                 2 | 3/23            | Updated Android app link and added iOS app link                           | 2               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX66242/DS750