<!-- lastmod 2022-08-05 -->
<!-- image -->

## General Description

The MAX1870A evaluation kit (EV kit) is an accurate and efficient multichemistry battery charger. It uses analog inputs to control charge voltage and current. The EV kit can charge any battery with charge current up to 2.4A. High efficiency is achieved by a buck-boost topology. The EV kit provides outputs that can be used to monitor the input current and the presence of an AC adapter.

The MAX1870A EV kit is a fully assembled and tested surface-mount printed circuit (PC) board.

| DESIGNATION      |   QTY | DESCRIPTION                                                                                  |
|------------------|-------|----------------------------------------------------------------------------------------------|
| C1, C7, C13, C14 |     4 | 1µF ± 20%, 10V X5R ceramic capacitors (0805) Taiyo Yuden LMK212BJ105KG or TDK C2012X5R1A105M |
| C2, C3, C4       |     3 | 0.01µF ± 10%, 50V X7R ceramic capacitors (0805) Murata GRM216R71H103K                        |
| C5               |     1 | 1µF ± 10%, 25V X7R ceramic capacitor (0805) TDK C2012X7R1E105K                               |
| C6               |     1 | 0.1µF ± 10%, 25V X7R ceramic capacitor (0603) Murata GRM188R71E104K or TDK C1608X7R1E104K    |
| C8, C10, C11     |     3 | 22µF ± 20%, 25V X5R ceramic capacitors (1812) TDK C4532X5R1E226M                             |

Features

- ♦ Step-Up/Step-Down Topology
- ♦ Charges Any Battery Chemistry: Li+, NiCd, NiMH, Lead Acid, etc.
- ♦ +10V to +25V Input Voltage Range
- ♦ 2.4A (max) Battery Charge Current
- ♦ Up to 17.6V Battery Compliance Voltage
- ♦ ±0.5% Charge-Voltage Accuracy
- ♦ Input Current Limiting
- ♦ Analog Inputs Control Charge Current, Charge Voltage, and Input Current Limit
- ♦ Analog Output Indicates Input Current
- ♦ Fully Assembled And Tested
- ♦ Surface-Mount Components

## Ordering Information

| PART          | TEMP RANGE   | IC PACKAGE            |
|---------------|--------------|-----------------------|
| MAX1870AEVKIT | 0°C to +70°C | 32 Thin QFN 5mm x 5mm |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                       |
|---------------|-------|-------------------------------------------------------------------|
| C9            |     0 | Not installed (1812)                                              |
| C16, C17      |     2 | 2.2µF ± 10%, 25V X5R ceramic capacitors (1206) TDK C3216X7R1E225K |
| D2, D3        |     2 | 3A, 30V Schottky diodes Nihon EC31QS03L                           |
| JU1           |     1 | 2-pin header                                                      |
| JU2           |     1 | 3-pin header                                                      |
| L1            |     1 | 10µH, 4.4A power inductor Sumida CDRH104R-100 or TOKO 919AS-100M  |
| Q1            |     1 | Dual n- and p-channel MOSFET (SO-8) Vishay/Siliconix Si4542DY     |
| R2            |     1 | 1k Ω ± 5% resistor (0805)                                         |
| R3            |     1 | 470k Ω ± 5% resistor (0805)                                       |
| R4, R16-R19   |     0 | Not installed (0805)                                              |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

## MAX1870A Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                          |
|---------------|-------|--------------------------------------------------------------------------------------|
| R5, R11       |     2 | 10k Ω ± 5% resistors (0805)                                                          |
| R7, R9, R10   |     3 | 0.030 Ω ± 1%, 1/2W resistors (2010) Dale WSL-2010-R030-F or IRC LRC-LR2010-01-R030-F |
| R8            |     1 | 10k Ω ± 1% resistor (0805)                                                           |
| R12           |     1 | 30 Ω ± 5% resistor (0805)                                                            |
| R13           |     1 | 620 Ω ± 5% resistor (0805)                                                           |
| R14           |     0 | Not installed, 50k Ω potentiometer                                                   |
| R15           |     1 | 50k Ω potentiometer Mouser 652-3266X-1-503 or equivalent                             |
| U1            |     1 | MAX1870AETJ (32-TQFN 5mm x 5mm)                                                      |
| None          |     1 | Shunt                                                                                |
| None          |     1 | MAX1870A PC board                                                                    |

## Detailed Description

The MAX1870A EV kit includes all of the circuitry needed to charge Li+, NiMH, and NiCD batteries.

The EV kit includes input source-current limiting and analog inputs for setting the charge voltage and charge current. The input current limit on the EV kit has been set to 3.5A. The voltage at ICTL, set by potentiometer R15 (50k Ω )  along  with  resistor  R10  (0.030 Ω ),  sets  the charging current (0 to 2.4A). The voltage at VCTL is set to VL by JU4. This sets the battery-voltage set point at 4.2V times the number of cells. The voltage at VCTL can also be set by resistor-divider R16/R17 or by potentiometer R14 (open), which adjusts the battery output voltage. Refer to the MAX1870A data sheet for more information.

## Shutdown (Jumper JU1)

Jumper JU1 either enables the MAX1870A or places it into shutdown. See Table 1 for jumper settings.

## Table 1. Jumper JU1 Functions

| SHUNT LOCATION   | SHDN PIN                                  | MAX1870A           |
|------------------|-------------------------------------------|--------------------|
| Installed        | Connected to GND.                         | MAX1870A disabled. |
| Not installed    | Connected to REFIN with a 10k Ω resistor. | MAX1870A enabled.  |

## Selecting the Number of Cells

The number of battery-pack cells is selected by jumper JU2 (Table 2). Place the shunt across the JU2 pins to  select  the  desired  number  of  cells. This EV kit is shipped configured for 3 cells.

## Table 1. Jumper JU2 Functions

| SHUNT LOCATION   | CELLS PIN          |   NUMBER OF CELLS |
|------------------|--------------------|-------------------|
| 1 and 2          | Connected to REFIN |                 4 |
| Not installed    | Floating           |                 3 |
| 2 and 3          | Connected to GND   |                 2 |

## Input Current Measurement

The board's IINP pad is used to monitor the system input current. The IINP voltage range is 0 to 3.5V. VIINP is proportional to the AC adapter current by:

<!-- formula-not-decoded -->

Refer to the Input Current Measurement section of the MAX1870A data sheet for information on VIINP.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1870A Evaluation Kit

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          | WEBSITE               |
|-----------------------|--------------|--------------|-----------------------|
| Central Semiconductor | 631-435-1110 | 631-435-1824 | www.centralsemi.com   |
| IRC                   | 361-992-7900 | 361-992-3377 | www.irctt.com         |
| Murata                | 770-436-1300 | 770-436-3030 | www.murata.com        |
| Nihon                 | 847-843-7500 | 847-843-2798 | www.niec.co.jp        |
| Sumida                | 847-545-6700 | 847-545-6720 | www.sumida.com        |
| Taiyo Yuden           | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK                   | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| TOKO                  | 847-297-0070 | 847-699-1194 | www.tokoam.com        |
| Vishay                | 402-564-3131 | 402-563-6296 | www.vishay.com        |

Note: Indicate that you are using the MAX1870A when contacting these component suppliers.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1870A Evaluation Kit

Figure 1. MAX1870A EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1870A Evaluation Kit

<!-- image -->

Figure 2. MAX1870A EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX1870A EV Kit PC Board Layout-Solder Side

<!-- image -->

Figure 3. MAX1870A EV Kit PC Board Layout-Component Side

Figure 5. MAX1870A EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5