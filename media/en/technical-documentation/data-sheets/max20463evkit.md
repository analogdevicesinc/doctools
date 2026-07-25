<!-- lastmod 2022-08-02 -->
## MAX20463 Evaluation Kit

## General Description

The MAX20463 evaluation kit (EV kit) demonstrates the MAX20463; a small, integrated USB Type-C™ solution for automotive radio, navigation, connectivity, and USB head units and infotainment applications. The device provides a  one-chip  solution  to  convert  an  existing  downstreamfacing port from supporting the USB-A connector to supporting the USB Type-C connector.

The device features an integrated USB Type-C interface to  control the new configuration channel (CC) pins found in the USB Type-C connector. It supports the downstreamfacing  port  (DFP)  role  and  supports  V BUS   current  limits including 1.5A and 3.0A. The MAX20463 can coexist with BC1.2 and Apple charging technologies, as these are controlled by the host emulator in the upstream module.

An integrated high-side power switch protects the device against  faults  and  allows  most  fault  conditions  to  be detected  and  handled  by  the  upstream  5V  power  supply.  This  avoids  possible  contention,  in  which  both  the upstream 5V power supply and the MAX20463 detect the same fault and simultaneously try to resolve it.

The  BIAS  circuitry  provides  a  solution  to  the  transient conditions seen in automotive USB charging applications. The device is designed to stay powered on during the CC attach process even if V BUS  droops due to an overcurrent, or other low voltage condition, for a short period of time. The period of time that the part can stay powered on can be configured by the module design engineer to provide the time required for the upstream 5V power supply to detect and handle the fault. The device stay-on time is determined by the amount of capacitance on BIAS, which must be at least 22µF, but can be increased above this value. The device and its solution circuit are designed to conform to the USBIF specification for short-to-ground response.

Ordering Information appears at end of data sheet.

Evaluates: MAX20463

MAX20463 is an automotive USB protector that integrates USB  shield  short-to-battery  protection.  A  short  circuit from the USB shield to the car battery can occur when a  customer's  portable  device  cable  is  connected  to  the vehicle Type-C receptacle, and the far end of this cable falls into the 12V cigarette lighter (accessory port) contacting the 12V center terminal. This situation can result in a damaging amount of current flow through the USB cable, and  can  cause  cable  combustion  if  the  cigarette-lighter fuse response time is insufficient. MAX20463 is designed to sense this condition (shield shorted to battery) with the SENSE pin and control an N-channel MOSFET with the GDRV pin to stop the flow of current.

The device and EV kit operate from a VBUS voltage of 4.75V to 7V.

The  EV  Kit  enables  testing  and  configuration  of  the MAX20463's CC current advertisement behavior. The  device  provides  a  CC\_SEL  pin  for  this  purpose. Connecting  the  CC\_SEL  pin  to  BIAS  or  GND  through jumper J6  selects between the two different current levels (refer to Table 1).

The EV kit is configured for 3A output operation and the included three-meter USB cable allows for demonstration of  use  with  an  upstream-voltage-compensated  power supply  such  as  MAX16984,  MAX16987,  MAX20037,  or MAX20038.

## Features and Benefits

- Configurable Charge Detection Modes: USB-C 3.0A, 1.5A
- High-Side USB Power-Protection Switch
- Proven PCB Layout
- Fully Assembled and Tested

<!-- image -->

## MAX20463 Evaluation Kit

## Quick Start

The following  procedure  demonstrates  the  MAX20463's capability and EV Kit in use with a MAX20037 EV kit.

## Required Equipment

- MAX20463 EV Kit
- MAX20037 or MAX20038 EV Kit
- Included 3m USB Captive Cable
- 2Ω, 20W Resistor or Electronic Load Connected to a USB Type-C Connector (Plug)
- 12.5V, 4A DC Power Supply (PS1)
- 3.3V/1A DC Power Supply (PS2)
- Variable 9V to 18V, 4A DC Power Supply or 12V Car Battery (PS3)
- 2 Digital Voltmeters (DVM) or 1 Oscilloscope
- MINIQUSB and MAX20037 GUI
- 4x 0.1'-Header Jumper Leads
- USB Type-A to Type-B Cable

Note: In the following sections, software-related items are iden -tified by bolding. Text in bold refers to items from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## Initial Setup

The  EV  kit  is  fully  assembled  and  tested.  Perform  the following steps to verify board operation:

- 1) Verfiy that MAX20037 GUI is installed.
- 2) Verify SW1 switch is set to HVEN = 1, ENBUCK = 1, SYNC = 0, CDP/DCP = 0.
- 3) Using the jumper wires, connect the MINIQUSB to the MAX20037 EV kit as follows:
- VDD to 3V3
- SCL to SCL
- SDA to SDA
- GND to GND
- 4) Connect the MINIQUSB+ to the computer.
- 5) Verify  the  MINIQUSB+  is  recognized  in  the Windows Device Manager as USB Serial Converter .
- 6) Connect  PS1  (turned  off)  between  the  V BAT   and GND test points on MAX20037.
- 7) Connect 3m USB captive cable from MAX20037 to MAX20463.
- 8) Connect DVM 1 (or oscilloscope channel 1) between the USB\_5V and GND test points of the MAX20037 EV kit (this is the output of the buck).
- 9) Connect  DVM  2  (or  oscilloscope  channel  2)  to HVBUS and GND on the MAX20463 EV kit (this is the voltage that a portable device will see).
- 10) Power on PS1 at 12.5V with a 2A current limit.
- 11) Both DVM 1 and DVM 2 should measure approximately 5V.
- 12) Establish I 2 C communication to the GUI.
- b. Open the MAX20037 GUI; look at the message bar at the bottom of the GUI to verify that both the MINIQUSB and the EV kit are connected.
- a. Click Auto Read . The output voltage and current should begin to update periodically.
- 13) Connect the load to the USB Type-C connector on the MAX20463 EV kit.
- If  the  load  is  connected  to  HVBUS/GND  rather than the Type-C connection, HVBUS will not be enabled. To enable HVBUS, set SW1 #1 -or- #3 to ON, and all other positions off.
- 14) With  the  voltage  adjustment  disabled  in  the  GUI ( Gain = 0; default setting), measure  the  volt -age. The voltage at the buck output should still be approximately  5V.  There  will  be  a  slight  drop  due to  the  current  through  the  SENSE  resistor,  output filter, and PCB trace. The voltage at the SENSP pin should be constant, regardless of current.
- 15) Click the + button or type directly into the Gain box in the GUI to set the gain to 533.
- 16) The voltage at the buck output should increase to 6.3V, and the voltage at the end of the USB Type-C connector should now be about 5.2V.

<!-- image -->

## Evaluates: MAX20463

## MAX20463 Evaluation Kit

## Short-to-Battery on USB Shield.

- 17) Connect an oscilloscope, additional power supply (PS3), and inductor to the EV kit as shown below:
2. The inductor, if used, should be chosen based on the expected vehicle wiring harness inductance. PS2 is only required if 3V3 is not provided by the MINIQUSB+.
- 18) Configure the oscilloscope to trigger on rising edge of USB SHIELD (CH2).
- 19) Power supply PS3 is recommended to be set anywhere from 9.0 - 18V.
- At PS3 ≤ 16V, the series inductor is optional.
- At PS3 &gt; 16V, the series inductor is required.
- A  12V  lead-acid/AGM  battery  may  also  be substituted for PS3.
- 20) Manually  apply  brief  or  continuous  short  circuits between PS3 and USB SHIELD.
- Observe the waveforms on USB SHIELD/SENSE resulting from the short-to-battery event.
- 21) The MAX20463 will open-circuit the USB SHIELD in response to a short-to-battery event.
- USB SHIELD will remain open-circuit for as long as USB SHIELD &gt; 300mV.
- 22) Once the short-to-battery has been removed, USB SHIELD  will  remain  open-circuit  for  an  additional 2.7s.
- This period allows MOSFET M1 to cool and prevent repetitive triggering of the protection circuit.
- USB SHIELD will be reconnected to system GND after this time has elapsed.

<!-- image -->

│

## MAX20463 Evaluation Kit

## Detailed Description

The  MAX20463  EV  kit  comes  fully  assembled,  tested, and installed with a MAX20463GTCA/V+.

## EV Kit Interface

The header J6 selects the default advertised current on CC1 and CC2 by controlling the CC\_SEL pin. Tie this pin to ground or to BIAS to select between the two specified charge currents. Table 1 lists the options for selecting the charge current.

DIP switch SW1 provides pulldown resistors (Ra and Rd) on  CC1  and  CC2,  respectively,  that  are  necessary  for USB Type-C detection without a Type-C device attached. Switch one Rd (5.1k) to ON for Type-C detection to occur. Without one of these pulldowns present on CC1 or CC2, the 5V output will be disconnected from the USB connector. The switch positions are described in Table 2.

Table 1. External Header

| JUMPER POSITION   | DESCRIPTION          |
|-------------------|----------------------|
| 1-2               | 3A current setting   |
| 2-3               | 1.5A current setting |

Refer to the MAX20037 EV Kit datasheet for information on the MAX20037 EV kit interface.

Evaluates: MAX20463

## PCB Layout Guidelines

A  good  PCB  layout  is  critical  for  proper  system  performance.  A  low-impedance  ground  connection  between the  input  and  output  capacitors  is  necessary  (route through the ground pour on the exposed pad). Connect the  exposed  pad  to  ground.  Place  multiple  vias  in  the pad to connect to all other ground layers for proper heat dissipation.  Do  not  use  separate  power  and  analog grounds; use a single common ground, as high-frequency return currents will flow directly under the corresponding traces.

Table 2. SW1 Switch Positions

| SWITCH   | DESCRIPTION                                                  |
|----------|--------------------------------------------------------------|
| 1 = ON   | CC1 pulled down to ground through a 5.1kΩ resistor (R3 - Rd) |
| 2 = ON   | CC1 pulled down to ground through a 1.2kΩ resistor (R4 - Ra) |
| 3 = ON   | CC2 pulled down to ground through a 5.1kΩ resistor (R5 - Rd) |
| 4 = ON   | CC2 pulled down to ground through a 1.2kΩ resistor (R6 - Ra) |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20463EVKIT# | EV Kit |

# Denotes RoHS compliant.

│

## MAX20463 EV Kit Bill of Materials

|   QTY | REFERENCE   | DESCRIPTION                                         | MANUFACTURER        | MANUFACTURER PART NUMBER   |
|-------|-------------|-----------------------------------------------------|---------------------|----------------------------|
|     2 | C1, C7      | CERAMIC CAPACITOR (0603) 0.1µF 50V 10% X7R          | MURATA              | GCM188R71H104K             |
|     1 | C2          | CERAMIC CAPACITOR (0805) 47µF 10V 20% X5R           | MURATA              | GRM21BR61A476ME15          |
|     1 | C3          | CERAMIC CAPACITOR (0603) 2.2µF 25V 10% X5R          | MURATA              | GRM188R61E225KA12          |
|     1 | C4          | DNI                                                 |                     |                            |
|     1 | C5          | CERAMIC CAPACITOR (0402) 0.015µF 50V 10% X7R        | MURATA              | GRM155R71H153KA12          |
|     1 | C6          | CERAMIC CAPACITOR (0805) 1µF 50V 10% X7R            | MURATA              | GRM21BR71H105KA12          |
|     1 | D1          | DNI                                                 |                     |                            |
|     1 | D2          | ZENER DIODE (SOT-23); VZ = 2.4V; IZ = 0.005A        | DIODES INCORPORATED | BZX84C2V4-7-F              |
|     1 | J1          | MALE USB 2.0 TYPE A CONNECTOR                       | TE CONNECTIVITY     | 1734028-1                  |
|     4 | J2-J5       | TEST POINT                                          | KEYSTONE            | 5024                       |
|     1 | J6          | HEADER 3PINS                                        | SAMTEC              | TSW-103-23-G-S             |
|     1 | Q1          | N-CH POWER MOSFET 102A 30V                          | ON SEMICONDUCTOR    | NVTFS4C05NTAG              |
|     1 | R1          | RESISTOR (0402) 4.7K 1% 0.10W                       | PANASONIC           | ERJ-2RKF4701               |
|     1 | R2          | RESISTOR (1206) 0.01 Ω 1% 1W                        | ROHM SEMICONDUCTOR  | PMR18EZPFU10L0             |
|     2 | R3, R5      | RESISTOR (0402) 5.1K Ω 5% 0.063W                    | VISHAY DALE         | CRCW04025K10JN             |
|     2 | R4, R6      | RESISTOR (0402) 1.2K 1% 0.063W                      | VISHAY DALE         | CRCW04021K20FK             |
|     1 | SW1         | QUAD SWITCH SPST 24V 0.025A                         | C&K COMPONENTS      | TDA04H0SB1                 |
|     1 | T1          | FEMALE USB 2.0 TYPE-C CONNECTOR 16 PINS             | HIROSE              | CX90M-16P                  |
|     1 | U1          | USB TYPE-A TO TYPE-C PORT CONVERTER WITH PROTECTION | MAXIM               | MAX20463GTCA/V+            |
|     1 | PCB         | MAX20463 revD                                       | MAXIM               | MAX20463                   |

Evaluates: MAX20463

## MAX20463 EV Kit Schematic

<!-- image -->

│

Evaluates: MAX20463

## MAX20463 EV Kit Layouts

MAX20463 EV Kit PCB Layout - Top View

<!-- image -->

MAX20463 EV Kit PCB Layout - Layer 2

<!-- image -->

│

## MAX20463 EV Kit Layout (continued)

MAX20463 EV Kit PCB Layout - Layer 3

<!-- image -->

MAX20463 EV Kit PCB Layout - Bottom View

<!-- image -->

│

## MAX20463 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                              | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 2/19            | Initial release                                                                                                                                                          | -               |
|                 1 | 4/19            | Removed 0.5A mode, updated Quick Start section, updated Table 2 for addition of DIP switch, added all s etup diagrams and procedures , updated BOM/Schematic/ PCB Layout | 1-8             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

│

Evaluates: MAX20463