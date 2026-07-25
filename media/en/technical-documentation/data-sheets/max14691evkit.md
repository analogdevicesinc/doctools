<!-- lastmod 2022-08-03 -->
## MAX14691 Evaluation Kit

## General Description

The MAX14691  evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the MAX14691 overvoltage,  undervoltage,  and  overcurrentprotection  device.  The  EV  kit  features  an  external pMOSFET and LED input and output reading. The EV kit comes with  the  MAX14691ATP+ installed,  but  can  also be used to evaluate the pin-compatible MAX14692 and MAX14693 devices with IC replacement of U1. Request samples from Maxim when ordering the EV kit.

## Features

- 5.5V to 58V Operating Voltage Range
- External pMOSFET Installed
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX14691-MAX14693

## Quick Start

## Required Equipment

- MAX14691 EV kit
- 40V DC power supply
- 5V DC power supply
- Multimeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify that all jumpers are in their default positions.
- 2) Set the 40V DC power supply to 10V and connect to VIN  (TP1).
- 3) Connect the 5V DC power supply to VIO (TP21).
- 4) Turn on both power supplies. Verify that LED1 is on, and FLAG (TP15) is 0V.
- 5) Increase voltage on the DC power supply to TP1 and verify that LED2 turns on when voltage reaches ~12.4V. Also check that voltage on V OUT  (TP5) is ~12.4V and FLAG (TP15) is 5V.
- 6) Increase voltage on the DC power supply to TP1 and verify that LED2 turns off when voltage reaches ~36.2V. Also check that voltage on V OUT  (TP5) goes down and FLAG (TP15) is 0V.
- 7) Decrease voltage on the DC power supply to TP1 and verify that LED2 turns on when voltage reaches ~34.1V. Also check that voltage on V OUT  (TP5) is ~34.1V and FLAG (TP15) is 5V.
- 8) Decrease voltage on the DC power supply to TP1 and verify that LED2 turns on when voltage reaches ~12V. Also check that voltage on V OUT  (TP5) goes down and FLAG (TP15) is 0V.

<!-- image -->

## MAX14691 Evaluation Kit

## Detailed Description of Hardware

The  MAX14691  EV  kit  is  a  fully  assembled  and  tested circuit  board  demonstrating  the  MAX14691 overvoltage, undervoltage,  and  overcurrent-protection  device  in  a 20-pin surface-mount TQFN-EP package.

The EV kit also features LEDs to indicate the power for input and output (see Table 1).

## Table 1. LED Indicator (LED1, LED2)

| LED   | DESCRIPTION                    |
|-------|--------------------------------|
| LED1  | LED1 is on when IN is powered  |
| LED2  | LED2 is on when OUT is powered |

## Table 2. Enable Inputs Jumper Settings (JU1, JU12)

| JUMPER   | SHUNT POSITION   | DESCRIPTION              |
|----------|------------------|--------------------------|
| JU1      | 1-2              | HVEN is connected to VIN |
| JU1      | 2-3*             | HVEN is connected to GND |
| JU12     | Installed        | EN is high               |
| JU12     | Not installed*   | EN is low                |

## Table 3. Enable Inputs Switch Status

|   EN |   HVEN | SWITCH STATUS   |
|------|--------|-----------------|
|    0 |      0 | On              |
|    1 |      0 | On              |
|    0 |      1 | Off             |
|    1 |      1 | On              |

## Evaluates: MAX14691-MAX14693

## Enable Inputs (EN, HVEN )

Use  jumpers  JU1  and  JU12  to  enable  the  device  (see Table 2 for jumper settings and Table 3 for enable switch status).

## Overvoltage-Lockout Threshold (OVLO)

Use jumpers JU3 and JU5 to select internal or external OVLO threshold. Install a shunt on either JU3 or JU5, but not both at the same time (see Table 4 for jumper settings).

## Undervoltage-Lockout Threshold (UVLO)

Use jumpers JU4 and JU6 to select internal or external UVLO threshold. Install a shunt on either JU4 or JU6, but not both at the same time (see Table 5 for jumper settings).

## Table 4. OVLO Threshold Jumper Settings (JU3, JU5)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                      |
|----------|------------------|------------------------------------------------------------------------------------------------------------------|
| JU3      | Installed*       | OVLO is connected to ground; nternal OVLO threshold is used (do not install JU5)                                 |
| JU3      | Not installed    | OVLO is open                                                                                                     |
| JU5      | Installed        | OVLO is connected to external voltage-divider; use R2/R3 or R6 to set overvoltage threshold (do not install JU3) |
| JU5      | Not installed*   | OVLO is open                                                                                                     |

## Table 5. UVLO Threshold Jumper Settings (JU4, JU6)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                       |
|----------|------------------|-------------------------------------------------------------------------------------------------------------------|
| JU4      | Installed*       | UVLO is connected to ground; internal UVLO threshold is used (do not install JU6)                                 |
| JU4      | Not installed    | UVLO is open                                                                                                      |
| JU6      | Installed        | UVLO is connected to external voltage-divider; use R4/R5 or R7 to set undervoltage threshold (do not install JU4) |
| JU6      | Not installed*   | UVLO is open                                                                                                      |

│

## MAX14691 Evaluation Kit

## Current-Limit Threshold

Use jumpers JU7-JU10 to use different resistors to program the current-limit threshold (see Table 6 for jumper settings).

## Reverse-Current Blocking

Use JU13 to enable/disable reverse current-blocking (see Table 7 for jumper settings). RIPEN is usually pulled up high from VIO. When there is only power on OUT and no power on VIO, RIPEN needs to be high to avoid damaging the input. Set JU13 to 1-2 in this case.

## Table 6. Current-Limit Threshold Jumper Settings (JU7-JU10)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                         |
|----------|------------------|-------------------------------------------------------------------------------------|
| JU7      | Installed*       | SETI is connected to ground with a 62kΩ resistor (~0.6A current limit)              |
| JU7      | Not installed    | SETI is not connected to ground with a 62kΩ resistor                                |
| JU8      | Installed        | SETI is connected to ground with a 13kΩ resistor (~2.9A current limit)              |
| JU8      | Not installed*   | SETI is not connected to ground with a 13kΩ resistor                                |
| JU9      | Installed        | SETI is connected to ground with a 6.8kΩ resistor (~5.5A current limit)             |
| JU9      | Not installed*   | SETI is not connected to ground with a 6.8kΩ resistor                               |
| JU10     | Installed        | SETI is connected to ground with a 100kΩ potentiometer (programmable current limit) |
| JU10     | Not installed*   | SETI is not connected to ground with a 100kΩ potentiometer                          |

## Evaluates: MAX14691-MAX14693

## Current-Limit Mode

Use  jumpers  JU14  and  JU15  to  select  the  current-limit mode (see Table 8 for jumper settings).

## Table 7. Reverse-Current Blocking Jumper Settings (JU13)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                  |
|----------|------------------|----------------------------------------------|
| JU13     | Open             | RIPEN is low (disable)                       |
| JU13     | 1-2              | RIPEN is high (enable) from either IN or OUT |
| JU13     | 2-3*             | RIPEN is high (enable) from VIO              |

## Table 8. Current-Limit Type Jumper Settings (JU14, JU15)

| JUMPER   | SHUNT POSITION   | DESCRIPTION   |
|----------|------------------|---------------|
| JU14     | Installed*       | CLTS2 is low  |
| JU14     | Not installed    | CLTS2 is high |
| JU15     | Installed        | CLTS1 is low  |
| JU15     | Not installed*   | CLTS1 is high |

## Table 9. Current-Limit Type Select (CLTS1, CLTS2)

|   CLTS2 |   CLTS1 | CURRENT-LIMIT TYPE   |
|---------|---------|----------------------|
|       0 |       0 | Latchoff mode        |
|       0 |       1 | Autoretry mode       |
|       1 |       0 | Continuous mode      |
|       1 |       1 | Continuous mode      |

│

## Component Suppliers

| SUPPLIER            | WEBSITE           |
|---------------------|-------------------|
| Bourns, Inc.        | www.bourns.com    |
| Lite-On, Inc.       | www.us.liteon.com |
| Lumex North America | www.lumex.com     |
| ON Semiconductor    | www.onsemi.com    |
| Vishay Americas     | www.vishay.com    |

Note:

Indicate that you are using the MAX14691 when contacting these component suppliers.

## Component Information, PCB Layout, and Schematic

See the following links for component information, PCB layout diagrams, and schematic.

- MAX14691 EV BOM
- MAX14691 EV PCB Layout
- MAX14691 EV Schematic

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14691EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX14691-MAX14693

│

## MAX14691 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------|-----------------|
|                 0 | 12/14           | Initial release                                            | -               |
|                 1 | 3/16            | Updated RIPEN circuit to reflect change from VIO to pullup | 1-8             |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im Integrated reserYes the right to change the circuitr\ and speci¿cations without notice at an\ time.

│

Evaluates: MAX14691-MAX14693

## Bill of Materials -Revision 3/16

| Part Reference                 |   Qty | Description                                                      |
|--------------------------------|-------|------------------------------------------------------------------|
| C1                             |     1 | CAPACITOR CER 0.1UF 100V ±10% X7R 1206                           |
| C2, C4                         |     2 | CAPACITOR RADIAL 10UF 63V ±20%                                   |
| C3                             |     1 | CAPACITOR CER 1UF 6.3V ±10% X5R 0603                             |
| C5                             |     1 | CAPACITOR CER 1UF 100V ±10% X7R 1206                             |
| D1                             |     1 | DIODE 1A 50V                                                     |
| D2                             |     1 | DIODE TVS 1500 WATT TRANSIENT VOLTAGE SUPPRESSOR 1A 36V          |
| D3                             |     1 | DIODE ZENER 3.3V 0.02A SOT23-3                                   |
| D4                             |     1 | DUAL DIODE 80V 0.25A SOT-963                                     |
| JU1, JU13                      |     2 | CONN HEADER 3PINS                                                |
| JU3-JU10, JU12, JU14, JU15     |    11 | CONN HEADER 2PINS                                                |
| LED1                           |     1 | LED GREEN 1206                                                   |
| LED2                           |     1 | LED YELLOW 1206                                                  |
| Q1                             |     1 | P-CHANNEL 60V 50A MOSFET                                         |
| R1                             |     1 | RES 220K OHM 1% 0805 SMD                                         |
| R6, R7                         |     2 | RES TRIMMER POTENTIOMETER 1M OHM                                 |
| R8                             |     1 | RES 62K OHM 1% 0805 SMD                                          |
| R9                             |     1 | RES 13K OHM 1% 0805 SMD                                          |
| R10                            |     1 | RES 6.8K OHM 1% 0805 SMD                                         |
| R11                            |     1 | RES TRIMMER POTENTIOMETER 100K OHM                               |
| R12, R13, R15, R16             |     4 | RES 10K OHM 1% 0805 SMD                                          |
| R14, R21                       |     2 | RES 100K OHM 1% 0805 SMD                                         |
| R17, R18                       |     2 | RES 2.7K OHM 1% 0805 SMD                                         |
| R19, R20                       |     2 | RES 0 OHM 0805 SMD                                               |
| R22, R23                       |     2 | RES 10K OHM 0805 5% SMD                                          |
| TP1, TP2, TP5, TP6, TP17, TP18 |     6 | RED TEST POINT                                                   |
| TP3, TP4, TP7, TP8, TP22-TP27  |    10 | BLACK TEST POINT                                                 |
| TP9, TP10, TP14, TP16, TP20    |     5 | YELLOW TEST POINT                                                |
| TP11-TP13, TP15, TP19          |     5 | WHITE TEST POINT                                                 |
| TP21                           |     1 | ORANGE TEST POINT                                                |
| U1                             |     1 | IC OVERCURRENT OVERVOLTAGE UNDERVOLTAGE PROTECTOR (MAX14691ATP+) |
| R2-R5                          |     0 | RESISTOR; 0805 PACKAGE; GENERIC                                  |

Component Placement Guide-Component Side

<!-- image -->

PCB Layout-Component Side

<!-- image -->

PCB Layout-Internal 2

<!-- image -->

<!-- image -->

PCB Layout-Internal 3

<!-- image -->

<!-- image -->

PCB Layout-Solder Side

<!-- image -->

<!-- image -->

<!-- image -->