<!-- lastmod 2022-08-05 -->
## MAX14636/MAX14637 Evaluation Kit

## General Description

The  MAX14636/MAX14637  evaluation  kit  (EV  kit)  is  a fully  assembled  and  tested  circuit  board  that  demonstrates  the  MAX14636/MAX14637  charger  detectors. The EV kit features a USB-powered option and easy LED reading for logic outputs.

## Features

- Evaluates Charger Detection Function
- No External Power Supply Required
- Proven PCB Layout
- Independent Layouts for MAX14636 and MAX14637
-  Separate Layout with No MAX14636/MAX14637 for Verifying Insertion Loss
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX14636/MAX14637

## Quick Start

## Required Equipment

- MAX14636/MAX14637 EV kit
- Computer
- USB-A male to USB-B male cable
- USB-A male to micro-B USB male cable
- USB flash drive (optional)

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  Follow  these steps to verify board operation.

- 1) Verify that all jumpers are in their default positions.
- 2) Take USB-A male to USB-B male cable and connect the cable to J3 from a computer.
- 3) Install a shunt on JP5. Verify LED4 is on.
- 4) Install a shunt on JP4. Verify LED5 is on.
- 5) Take USB-A male to micro-B USB male cable and connect the cable to J2 from a computer. Verify LED1 and LED3 are on.
- 6) Optional:  insert  the  USB  flash  drive  in  J1.  Check that the drive is accessible from computer. The drive should enumerate and register in Windows.
- 7) Remove  the  USB  flash  drive  and  cable  on  J2. Remove the shunts on JP4 and JP5.
- 8) Install a shunt on JP15. Verify LED14 is on.
- 9) Install a shunt on JP14. Verify LED15 is on.
- 10)  Connect  the  micro-B  USB  cable  to  J5  from  a computer. Verify LED11 and LED13 are on.
- 11) Optional:  insert  the  USB  flash  drive  in  J4.  Check that the drive is accessible from computer. The drive should enumerate and register in Windows.
- 12)  Remove USB flash drive and cable on J5. Remove the shunts on JP14 and JP15.

<!-- image -->

## MAX14636/MAX14637 Evaluation Kit

## Detailed Description of Hardware

The  MAX14636/MAX14637 EV kit is a fully  assembled and  tested  circuit  board  demonstrating  the  MAX14636 and MAX14637 charger detector ICs in a 10-pin surfacemount Ultra TQFN package.

The  EV  kit  circuit  can  be  configured  to  evaluate  the MAX14636 or the MAX14637 without an external power supply. There are LED indicators showing different logic outputs with different chargers attached. The  EV kit also features  a  shorted  USB  path  for  board-  and  trace-only evaluation.

## USB Transceiver Power

The EV kit features jumpers to select the power source for the USB transceiver side. Install shunts in below position to change the power source.

## Table 1. LED Indicator

| LED      | NAME     | DESCRIPTION                                                                       |
|----------|----------|-----------------------------------------------------------------------------------|
| MAX14636 | MAX14636 | MAX14636                                                                          |
| LED1     | SW_OPEN  | LED1 is on when MAX14636 SW_OPEN = low (switches are closed).                     |
| LED2     | CHG_DET  | LED2 is on when MAX14636 CHG_DET = high.                                          |
| LED3     | CHG_AL_N | LED3 is on when MAX14636 CHG_AL_N = low (VBUS is valid and charging is allowed).  |
| LED4     | VHC_GOOD | LED4 is on when VHC1 is powered.                                                  |
| LED5     | GOOD_BAT | LED5 is on when MAX14636 GOOD_BAT is set to high.                                 |
| MAX14637 | MAX14637 | MAX14637                                                                          |
| LED11    | SW_OPEN  | LED11 is on when MAX14637 SW_OPEN = low (switches are closed).                    |
| LED12    | CHG_DET  | LED12 is on when MAX14637 CHG_DET = high.                                         |
| LED13    | CHG_AL_N | LED13 is on when MAX14637 CHG_AL_N = low (VBUS is valid and charging is allowed). |
| LED14    | VHC_GOOD | LED14 is on when VHC2 is powered.                                                 |
| LED15    | GOOD_BAT | LED15 is on when MAX14637 GOOD_BAT is set to high.                                |

## Table 2. USB Transceiver Jumper Selection

| JUMPER   | SHUNT POSITION   | DESCRIPTION                     |
|----------|------------------|---------------------------------|
| MAX14636 | MAX14636         | MAX14636                        |
| JP1      | 1-2*             | J1 VBUS is connected to J2 VBUS |
| JP1      | 2-3              | J1 VBUS is connected to J3 VBUS |
| MAX14637 | MAX14637         | MAX14637                        |
| JP11     | 1-2*             | J4 VBUS is connected to J5 VBUS |
| JP11     | 2-3              | J4 VBUS is connected to J3 VBUS |

Evaluates: MAX14636/MAX14637

## Logic Power

Use JP2, JP5, JP12, and JP15 to select power source for logic pins. They can be powered from the USB or external power supply.

## VBUS

Use JP3 and JP13 to connect the VBUS pin to the VBUS of the micro-USB connector.

## GOOD\_BAT

Use  JP4  and  JP14  to  connect  GOOD\_BAT  to  3.3V  or ground. LED5 or LED15 is on when GOOD\_BAT is set high.

│

## MAX14636/MAX14637 Evaluation Kit

## Table 3. Logic Power Jumper Selection

| JUMPER   | SHUNT POSITION   | DESCRIPTION                         |
|----------|------------------|-------------------------------------|
| MAX14636 | MAX14636         | MAX14636                            |
| JP2      | Installed        | VHC1 is connected to VEXT (TP3)     |
| JP2      | Not installed*   | VHC1 is not connected to VEXT (TP3) |
| JP5      | Installed        | VHC1 is connected to J3 VBUS        |
| JP5      | Not installed*   | VHC1 is not connected to J3 VBUS    |
| MAX14637 | MAX14637         | MAX14637                            |
| JP12     | Installed        | VHC2 is connected to VEXT (TP3)     |
| JP12     | Not installed*   | VHC2 is not connected to VEXT (TP3) |
| JP15     | Installed        | VHC2 is connected to J3 VBUS        |
| JP15     | Not installed*   | VHC2 is not connected to J3 VBUS    |

## Table 4. VBUS Jumper Selection

| JUMPER   | SHUNT POSITION   | DESCRIPTION                          |
|----------|------------------|--------------------------------------|
| MAX14636 | MAX14636         | MAX14636                             |
| JP3      | Installed*       | VBUS pin is connected to J2 VBUS     |
| JP3      | Not installed    | VBUS pin is not connected to J2 VBUS |
| MAX14637 | MAX14637         | MAX14637                             |
| JP13     | Installed*       | VBUS pin is connected to J5 VBUS     |
| JP13     | Not installed    | VBUS pin is not connected to J5 VBUS |

## Table 5. GOOD\_BAT Jumper Selection

| JUMPER   | SHUNT POSITION   | DESCRIPTION      |
|----------|------------------|------------------|
| MAX14636 | MAX14636         | MAX14636         |
| JP4      | Installed        | GOOD_BAT is high |
| JP4      | Not installed*   | GOOD_BAT is low  |
| MAX14637 | MAX14637         | MAX14637         |
| JP14     | Installed        | GOOD_BAT is high |
| JP14     | Not installed*   | GOOD_BAT is low  |

Evaluates: MAX14636/MAX14637

│

## MAX14636/MAX14637 Evaluation Kit

## Component Suppliers

| SUPPLIER                        | PHONE        | WEBSITE                |
|---------------------------------|--------------|------------------------|
| Amphenol                        | 877-267-4366 | www.amphenol.com       |
| Chicago Miniature Lighting, LLC | 855-877-2465 | www.chml.com           |
| Fairchild Semiconductor         | 888-522-5372 | www.fairchildsemi.com  |
| Hirose Electric U.S.A., Inc.    | 805-522-7958 | www.hirose.com/us      |
| Lite-On, Inc.                   | 408-946-4873 | www.us.liteon.com      |
| Molex                           | 800-786-6539 | www.molex.com          |
| Murata Americas                 | 800-241-6574 | www.murataamericas.com |
| OSRAM Opto Semiconductors       | 888-446-7726 | www.osram-os.com       |
| Taiyo Yuden                     | 800-348-2496 | www.t-yuden.com        |
| TDK Corp.                       | 847-803-6100 | www.component.tdk.com  |

Note:

Indicate that you are using the MAX14636/MAX14637 when contacting these component suppliers.

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX14636/7EVKIT# | EV Kit |

# Denotes RoHS compliance.

Evaluates: MAX14636/MAX14637

│

## MAX14636/MAX14637 Evaluation Kit

## MAX14636/MAX14637 EV Kit Bill of Materials

| DESIGNATION                        |   QTY | DESCRIPTION                                                             |
|------------------------------------|-------|-------------------------------------------------------------------------|
| C1, C2, C4, C7, C11, C14, C17      |     7 | 1µF ±10%, 35V X5R ceramic capacitors (0603) Taiyo Yuden GMK107BJ105KA-T |
| C3                                 |     1 | 1µF ±10%, 6.3V X7R ceramic capacitor (0603) Murata GRM188R70J105KA01D   |
| C5, C15                            |     2 | 2.2µF ±10%, 35V X5R ceramic capacitors (0603) TDK C1608X5R1V225K080AC   |
| C6, C16                            |     2 | 4.7µF ±20%, 6.3V X5R ceramic capacitors (0603) TDK C1608X5R0J475M080AB  |
| C8, C9, C18, C19                   |     4 | 0.1µF ±10%, 10V X5R ceramic capacitors (0201) Murata GRM033R61A104K     |
| J1, J4, J6                         |     3 | USBAconnectors Amphenol UE27AC54100                                     |
| J2, J5, J7                         |     3 | Micro B USB connectors Hirose ZX62D-B-5P8                               |
| J3                                 |     1 | USB B connector Molex 0670689000                                        |
| JP1, JP11                          |     2 | 3-pin single-row headers                                                |
| JP2-JP5, JP12-JP15                 |     8 | 2-pin single-row headers                                                |
| LED1, LED4, LED11, LED14           |     4 | Green LEDs OSRAM LG N971-KN-1                                           |
| LED2, LED5, LED12, LED15           |     4 | Yellow LEDs Chicago CMD15-21VYC/TR8                                     |
| LED3, LED13                        |     2 | Red LEDs Lite-on LTST-C150CKT                                           |
| R1-R4, R15, R21-R24, R35           |    10 | 1kΩ ±1% resistors (0805)                                                |
| R5-R8, R11, R12, R25-R28, R31, R32 |    12 | 100kΩ ±1% resistors (0805)                                              |

| DESIGNATION                                                       |   QTY | DESCRIPTION                                                             |
|-------------------------------------------------------------------|-------|-------------------------------------------------------------------------|
| R9, R10, R29, R30                                                 |     4 | 0Ω resistors (0805)                                                     |
| R13, R14, R33, R34                                                |     4 | 1MΩ ±5% resistors (0805)                                                |
| TP1, TP3, TP5, TP6, TP11, TP21, TP26, TP31                        |     8 | Red test points                                                         |
| TP2, TP4, TP12, TP13, TP15-TP20, TP22-TP25, TP32, TP33, TP35-TP40 |    22 | Black test points                                                       |
| TP7-TP10, TP14, TP27-TP30, TP34                                   |    10 | White test points                                                       |
| U1                                                                |     1 | USB charger detector (10 Ultra TQFN) Maxim MAX14636CVB+ (Top Mark: ABE) |
| U2, U6                                                            |     2 | 3.3V output LDOs (6 SOT) Maxim MAX8881EUT33+ (Top Mark: AAHU)           |
| U3, U7                                                            |     2 | Dual buffers (SC70 6L) Fairchild NC7WZ07P6X                             |
| U4, U8                                                            |     2 | Dual inverters (SC70 6L) Fairchild NC7WZ04P6X                           |
| U5                                                                |     1 | USB charger detector (10 Ultra TQFN) Maxim MAX14637CVB+ (Top Mark: ABG) |
| -                                                                 |    10 | Shunts                                                                  |
| -                                                                 |     1 | PCB: MAX14636/7 EVKIT                                                   |

│

Evaluates: MAX14636/MAX14637

## MAX14636/MAX14637 EV Kit Schematic

<!-- image -->

## MAX14636/MAX14637 EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX14636/MAX14637

## MAX14636/MAX14637 EV Kit Schematic (continued)

<!-- image -->

│

## MAX14636/MAX14637 EV Kit PCB Layout Diagrams

MAX14636/MAX14637 EV Kit Component Placement GuideComponent Side

<!-- image -->

MAX14636/MAX14637 EV Kit PCB Layout-Component Side

<!-- image -->

│

## MAX14636/MAX14637 EV Kit PCB Layout Diagrams (continued)

MAX14636/MAX14637 EV Kit PCB Layout-Layer 2

<!-- image -->

MAX14636/MAX14637 EV Kit PCB Layout-Layer 3

<!-- image -->

│

## MAX14636/MAX14637 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX14636/MAX14637 EV Kit PCB Layout-Solder Side

MAX14636/MAX14637 EV Kit Component Placement GuideSolder Side

<!-- image -->

│

## MAX14636/MAX14637 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                   | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------|-----------------|
|                 0 | 9/13            | Initial release               | -               |
|                 1 | 7/19            | Updated the Bill of Materials | 5               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPSlieG  Ma[iP ,QteJrateG reserYes tKe riJKt to FKaQJe tKe FirFuitr\ aQG sSeFi¿FatioQs ZitKout QotiFe at aQ\ tiPe

│

Evaluates: MAX14636/MAX14637