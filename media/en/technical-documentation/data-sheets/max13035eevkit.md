<!-- lastmod 2022-08-02 -->
## MAX13035E Evaluation Kit

## General Description

The  MAX13035E  evaluation  kit  (EV  kit)  demonstrates the MAX13035E  6-channel, bidirectional logic-level translator  used  for  interfacing  with  secure  digital  (SD) memory  cards.  The  EV  kit  features  SD  memory  card interface and general-purpose interface connections. The MAX13035E IC  guarantees  data  rates  up  to  100Mbps. The MAX13035E translates between V L   and  V CC   logic levels.  The  V L   range  is  1.62V  to  3.2V  and  the  ±15kV ESD-protected V CC  range is 2.2V to 3.6V.

The EV kit also includes the MAX3202E, a dual-channel ESD protection array for complete line protection.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                        |
|---------------|-------|------------------------------------------------------------------------------------|
| C1, C2        |     2 | 4.7µF ±10%, 6.3V X5R ceramic capacitors (0603) Murata GRM188R60J475K               |
| C3, C5, C8    |     3 | 1µF ±10%, 10V X5R ceramic capacitors (0603) Murata GRM188R61A105K                  |
| C4, C6, C7    |     3 | 0.1µF ±10%, 10V X5R ceramic capacitors (0402) Murata GRM155R61A104K                |
| J1            |     1 | 2 x 11-pin header                                                                  |
| J2            |     1 | SD/MMC 9-pin connector                                                             |
| JU1, JU2      |     2 | 2-pin headers                                                                      |
| R1-R9         |     9 | 0Ω ±5% resistors (0402)                                                            |
| R10, R11      |     2 | 100kΩ ±5% resistors (0603)                                                         |
| TP1-TP6       |     0 | Not installed, test points                                                         |
| TP7, TP8      |     2 | Black PCB test points                                                              |
| U1            |     1 | MAX13035EETE+ (16-pin TQFN)                                                        |
| U2            |     1 | ±15kV ESD-protection array IC (6-pin TQFN-EP-6) Maxim MAX3202EETT+ (Top Mark: ADQ) |
| -             |     2 | Shunts (JU1, JU2)                                                                  |
| -             |     1 | PCB: MAX13035E Evaluation Kit                                                      |

Evaluates: MAX13035E

## Features

- Supply Voltage Ranges
- VL: 1.62V to 3.2V
- VCC: 2.2V to 3.6V
- ±15kV ESD Protection on I/O V CC  Lines
- SD Memory Card and General-Purpose Interface Connections
- 100Mbps Guaranteed Data Rates
- Fully Assembled and Tested

## Ordering Information

| PART            | TEMP RANGE    | IC PACKAGE   |
|-----------------|---------------|--------------|
| MAX13035EEVKIT# | 0°C to +70°C* | 16 UCSP      |

#Denotes RoHS compliant EV kit.

*This limited temperature range applies to the EV kit PCB only. The MAX13035E IC temperature range is -40°C to +85°C.

## Component Supplier

| SUPPLIER              | WEBSITE      | WEBSITE        |
|-----------------------|--------------|----------------|
| Murata Mfg. Co., Ltd. | 770-436-1300 | www.murata.com |

Note: Indicate that you are using the MAX13035E when contacting this component supplier.

<!-- image -->

## Quick Start

## Recommended Equipment

- 2VDC power supply
- 3VDC power supply
- Logic function generator
- Oscilloscope

## Procedure

The  MAX13035E  EV  kit  is  fully  assembled  and  tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify  that  shunts  are  not  installed  on  jumpers  JU1 (card  detect  pulled  high)  and  JU2  (write  protect pulled high).
- 2) Set the logic function generator to produce a 1MHz, 2VP-P ,  1V  offset  square  wave.  Disable  the  logic function  generator  output.  Terminate  the  function generator as necessary.
- 3) Connect the positive terminal of the 2V supply to the VL  PCB  pad,  and  the  ground  terminal  to  the  GND PCB pad.
- 4) Connect the positive terminal of the 3V supply to the VCC PCB pad, and the ground terminal to the GND PCB pad.
- 5) Connect  the  logic  function  generator  to  pin  8  of header J1 and the ground lead to pin 7 of header J1.
- 6) Connect the oscilloscope to test point TP1. Use test point TP8 as a ground reference for the oscilloscope.
- 7) Enable  the  power  supplies  and  the  logic  function generator output.
- 8) Using the oscilloscope, verify that TP1 shows a 1MHz, 3VP-P square wave.

Note: All odd-number pins of header J1 are connected to GND. See Table 1 for even-number pins' signals.

## Table 1. I/O Interface Header J1 Pinout

|   J1 PIN* | EV KIT SIGNAL   |
|-----------|-----------------|
|         2 | I/O V L 3       |
|         4 | I/O V L 2       |
|         6 | V L             |
|         8 | I/O V L 1       |
|        10 | V CC            |
|        12 | CLK_V L         |
|        14 | CLK_RET         |
|        16 | I/O V L 5       |
|        18 | I/O V L 4       |
|        20 | CD              |
|        22 | WP              |

* All odd pins are connected to ground (GND).

## Detailed Description

The MAX13035E  EV  kit circuit demonstrates the MAX13035E  6-channel,  bidirectional  logic-level  translator.  The  EV  kit  features  an  SD  memory  card  interface, input/output  (I/O)  test  points  (TP1-TP6),  GND  test points  (TP7,  TP8),  and  header  J1  for  general-purpose interfacing.  The  MAX13035E  guarantees  data  rates  up to  100Mbps  and  demonstrates  the  MAX13035E  ±15kV ESD protection. The MAX13035E translates between V L and V CC  logic levels. The V L  supply input range is 1.62V to 3.2V, while the V CC  supply input range is 2.2V to 3.6V. VCC must be set higher than V L .

The  MAX13035E  EV  kit  circuit  features  I/O  traces  of matched length (within 30 mils) to maintain propagationtime  uniformity.  Jumpers  JU1  and  JU2  set  the  status signals  for  card  detect  (CD)  and  write  protect  (WP), respectively. CD and WP are ESD-protected to ±15kV by a MAX3202E IC (U2).

## I/O Interface Header J1

Header  J1  provides  access  to  the  circuit's  V L logiclevel  I/O  signals,  power  input  lines,  and  status  signals (CD and WP). Use either the PCB pads for VCC and VL, or the corresponding pins on J1 (pins 10 and 6, respectively) to power the kit. Use the CD and WP pins on J1 to monitor the card-detect and write-protect status signals. I/O VL1-I/O  V L 5  and  CLK\_V L   are  the  EV  kit's  V L referenced logic signals. CLK\_RET is the returned signal at a clock applied to CLK\_V L . CLK\_RET is referenced to V L .

│

## MAX13035E Evaluation Kit

## VCC Logic-Level I/O

The  EV  kit  provides  an  SD  memory  card  interface,  as well as general-purpose interface test points (TP1-TP6) for  the  V CC  logic-level  I/O  signals.  Use  test  points  TP7 and TP8 as the signals' ground reference. Use connector J2 with standard SD pinout for interfacing with an SD memory  card.  CD  and  WP  signals  are  actuated  within connector J2, see the CD/WP Status Signals section in this document. See Table 2 for V CC  I/O signal connections.

## CD/WP Status Signals

Connector  J2  provides  access  to  the  active-low  status signals,  CD  and  WP.  Resistors  R10  and  R11  are  the pullup  resistors  for  CD  and  WP.  Upon  inserting  an  SD card into J2, the CD signal is driven to ground. If the SD card inserted into J2 is write-protected, the WP signal is driven  to  ground.  Jumpers  JU1  and  JU2  are  provided to  set  the  CD  and  WP  signals.  See Tables  3  and  4  for jumpers JU1 and JU2 configurations.

## Table 2. SD Card Connector J2 Pinout

|   J2 PIN (SD) | EV KIT FUNCTION   | TEST POINT   | STANDARD SD FUNCTION   |
|---------------|-------------------|--------------|------------------------|
|             9 | I/O V CC 1        | TP1          | DAT2                   |
|             1 | I/O V CC 3        | TP3          | CD/DAT3                |
|             2 | I/O V CC 2        | TP2          | CMD                    |
|             3 | GND               | -            | V SS                   |
|             4 | V CC              | -            | V DD                   |
|             5 | CLK_V CC          | TP6          | CLK                    |
|             6 | GND               | -            | V SS                   |
|             7 | I/O V CC 4        | TP4          | DAT0                   |
|             8 | I/O V CC 5        | TP5          | DAT1                   |
|            10 | CD                | -            | CD                     |
|            11 | WP                | -            | WP                     |

## Table 3. Write-Protect Status Signal (Jumper JU1)

| SHUNT POSITION   | WRITE PROTECT (WP)                    | EV KIT FUNCTION   |
|------------------|---------------------------------------|-------------------|
| Installed        | Connected to GND                      | WP set low        |
| Not installed    | Connected to VCC through resistor R10 | WP set high       |

## Table 4. Card-Detect Status Signal (Jumper JU2)

| SHUNT POSITION   | WRITE PROTECT (WP)                    | EV KIT FUNCTION   |
|------------------|---------------------------------------|-------------------|
| Installed        | Connected to GND                      | CD set low        |
| Not installed    | Connected to VCC through resistor R11 | CD set high       |

│

Evaluates: MAX13035E

Figure 1. MAX13035E EV Kit Schematic

<!-- image -->

Figure 2. MAX13035E EV Kit Component Placement GuideComponent Side

<!-- image -->

## Evaluates: MAX13035E

Figure 3. MAX13035E EV Kit PCB Layout-Component Side

<!-- image -->

│

Figure 4. MAX13035E EV Kit PCB Layout-Solder Side

<!-- image -->

## MAX13035E Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                               | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------|-----------------|
|                 0 | 5/07            | Initial Release                           | -               |
|                 1 | 10/20           | Updated Ordering Information and Figure 2 | 1, 5            |
|                 2 | 12/20           | Updated Component List                    | 1               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPSlieG. 0a[iP ,QtegrateG reserves the right to chaQge the circuitr\ aQG sSeci¿catioQs without Qotice at aQ\ tiPe.

<!-- image -->

│

Evaluates: MAX13035E