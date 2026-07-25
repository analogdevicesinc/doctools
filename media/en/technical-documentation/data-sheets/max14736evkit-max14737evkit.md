<!-- lastmod 2022-08-05 -->
## MAX14736/MAX14737 Evaluation Kit

## General Description

The MAX14736/MAX14737 evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the precision,  ultra-fast,  low  quiescent  current  overvoltageprotection devices. The EV kit features an LED power OK (POK) reading. The EV kit comes with the MAX14736EWL+ or MAX14737EWL+ installed. Please indicate the part number when ordering.

## Features

- 2.1V to 5.5V Operating Voltage Range
- Power Ok (POK) LED Reading
- Proven PCB Layout
- Fully Assembled and Tested

## EV Kit Contents

- EV Kit board containing a MAX14736/MAX14737

Ordering Information appears at end of data sheet.

## Table 1. Enable Input Jumper Settings (JU1)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                            |
|----------|------------------|------------------------------------------------------------------------|
| JU1      | Installed        | EN /EN is pulled down to ground. (MAX14736: enable, MAX14737: disable) |
| JU1      | Not installed    | EN /EN is pulled up to IN. (MAX14736: disable, MAX14737: enable)       |

Evaluates: MAX14736/MAX14737

## Quick Start

## Required Equipment

- MAX14736/MAX14737 EV kit
- 10V DC power supply
- Multimeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify that jumper JU1 is installed for the MAX14736 and not installed for the MAX14737.
- 2) Apply 2.1V to IN. Verify that OUT is at 2.1V and that the LED1 is on.
- 3) Slowly increase IN and verify that the OUT voltage is the same as IN. When IN reaches ~4.7V (for MAX14736) or ~5.2V (for MAX14737), the switch turns off, the OUT voltage goes down, and the LED1 is off. Do not apply a voltage higher than 5.5V to IN.
- 4) Slowly decrease IN. When IN reaches ~4.6V (for MAX14736) or ~5.1V (for MAX14737), switch turns on, OUT voltage is same as IN, and LED1 is on.

## Detailed Description

The  MAX14736/MAX14737  EV  kit  is  a  fully  assembled and tested circuit board demonstrating these overvoltageprotection devices in a 9-bump wafer-level package (WLP).

The  MAX14736  has  a  4.7V  (typ)  precision  overvoltage threshold, while the overvoltage threshold for the MAX14737 is 5.2V (typ). The MAX14736 has an activelow  enable  pin  ( EN ),  while  the  enable  pin  (EN)  on  the MAX14737 is active-high.

## LED Indicator

The EV kit features LED1 to indicate POK output.

## Enable Input

Use  JU1  to  enable/disable  the  device  (see  Table  1  for jumper settings).

<!-- image -->

## MAX14736/MAX14737 Evaluation Kit

## Ordering Information

| PART           | TYPE   |   OVLO (V) |
|----------------|--------|------------|
| MAX14736EVKIT# | EVKIT  |        4.7 |
| MAX14737EVKIT# | EVKIT  |        5.2 |

# Denotes RoHS compliant.

Evaluates: MAX14736/MAX14737

## Component List, PCB Layout, and Schematic

See  the  following  links  for  the  component  information, PCB layout and schematic:

- MAX14736 EV BOM
- MAX14736 EV PCB Layout
- MAX14736 EV Schematic

│

## MAX14736/MAX14737 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                             | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------|-----------------|
|                 0 | 7/15            | Initial release                         | -               |
|                 1 | 8/15            | Updated Schematic and Bill-of-Materials | N/A             |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

│

Evaluates: MAX14736/MAX14737

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

BILL OF MATERIALS (BOM) Revision 8/15

| Part Reference   |   Qty | Description                                                       |
|------------------|-------|-------------------------------------------------------------------|
| C1               |     1 | CAPACITOR CER 0.1UF 10V ±10% X7R 0603                             |
| C2               |     1 | CAPACITOR CER 1UF 10V ±10% X7R 0603                               |
| JU1              |     1 | 2 PIN STRAIGHT MALE HEADER                                        |
| LED1             |     1 | RED LED, LITE-ON LTST-C150CKT                                     |
| R1,R2            |     2 | RES 1K OHM1%0805 SMD                                              |
| R3               |     1 | RES 100K OHM1%0805 SMD                                            |
| TB1, TB2         |     2 | TERMINAL BLOCK                                                    |
| TP1, TP3         |     2 | RED TEST POINT                                                    |
| TP2, TP4         |     2 | BLACK TEST POINT                                                  |
| U1               |     1 | IC LOW CURRENT OVERVOLTAGE PROTECTION (MAX14736EWL+/MAX14737EWL+) |
|                  |     1 | PCB: EPCB14736/14737                                              |