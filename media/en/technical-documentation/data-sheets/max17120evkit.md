<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX17120 Evaluation Kit

## General Description

## Features

The MAX17120 evaluation kit (EV kit) is  an  assembled and tested circuit board that contains all the components necessary to evaluate the MAX17120 IC. The MAX17120 is a triple, high-voltage, level-shifting scan driver to drive the TFT panel gate logic. The driver outputs swing from -30V to +40V. To save power, three sets of complementary outputs are provided to allow charge sharing during state  changes.  The  EV  kit  operates  from  a  DC  supply range from +2.2V to +3.6V and consumes 500 F A (typ).

- S Three High-Voltage, Level-Shifting Scan Drivers
- S +2.2V to +3.6V Input Supply Voltage Range (VDD)
- S -30V to +40V Output Swing
- S Demonstrates Output Charge Sharing
- S Evaluates the MAX17120 in 32-Pin, 5mm x 5mm, Thin QFN Package
- S Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17120EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                               |
|---------------|-------|-------------------------------------------------------------------------------------------|
| C1, C2        |     2 | 0.1 F F Q 10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H104K TDK C1608X7R1H104K |
| C3            |     1 | 1 F F Q 10%, 10V X5R ceramic capacitor (0603) Murata GRM188R61A105K TDK C1608X5R1A105K    |
| C4, C5        |     2 | 1 F F Q 10%, 50V X7R ceramic capacitors (1206) Murata GRM31MR71H105KA TDK C3216X7R1H105K  |
| C6-C11        |     6 | 0.01 F F Q 10%, 100V X7R ceramic capacitors (0603) Murata GRM188R72A103K                  |

| DESIGNATION                                             |   QTY | DESCRIPTION                                                           |
|---------------------------------------------------------|-------|-----------------------------------------------------------------------|
| C12                                                     |     1 | 4700pF Q 10%, 100V X7R ceramic capacitor (0603) Murata GRM188R72A472K |
| CKVBCS1, CKVBCS2, CKVBCS3, CKVCS1, CKVCS2, CKVCS3, DISH |     7 | Test points, white                                                    |
| JU1                                                     |     1 | 2-pin header, 0.1in centers                                           |
| R1                                                      |     1 | 20k I Q 5% resistor (0603)                                            |
| R2-R14                                                  |    13 | 200 I Q 5% resistors (1210)                                           |
| U1                                                      |     1 | High-voltage scan driver (32 TQFN) Maxim MAX17120ETJ+                 |
| -                                                       |     1 | Shunt                                                                 |
| -                                                       |     1 | PCB: MAX17120 EVALUATION KIT+                                         |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX17120 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17120 Evaluation Kit

## Quick Start

## Required Equipment

- +3.3V, 100mA DC power supply (VDD)
- +35V, 100mA DC power supply (VON)
- -25V, 100mA DC power supply (VOFF)
- Voltmeter
- 7) Verify the CKV\_ and CKVB\_ logic at the respective test points:

| SIGNAL   | LOGIC STATE   | LOGIC STATE   | LOGIC STATE   | LOGIC STATE   | LOGIC STATE   |
|----------|---------------|---------------|---------------|---------------|---------------|
| EN       | H             | H             | H             | H             | L             |
| STV      | L             | L             | H             | H             | X             |
| CPV_     | L             | ↑             | L             | H             | X             |
| CKV_     | Hi-Z (CS)     | Toggle        | VOFF          | VON           | VOFF          |
| CKVB_    | Hi-Z (CS)     | Toggle        | VON           | VOFF          | VOFF          |

Note: H = VDD, L = GND, ↑ = rising edge, CS = charge-share state, and X = don't care.

## Detailed Description of Hardware

The MAX17120 EV kit contains all the components necessary to evaluate the MAX17120 IC. The MAX17120 is a triple, high-voltage, level-shifting scan driver to drive TFT panel gate logic. The drivers' outputs swing from -30V to  +40V  and  three  sets  of  complementary  outputs  are provided to allow charge sharing during state changes. The EV kit operates from a DC supply range from +2.2V to +3.6V and consumes 500 F A (typ).

The MAX17120 EV kit provides PCB pads to connect the logic inputs and scan-driver outputs. Test points are also provided to monitor the charge sharing, EN, and DISH states.  Jumper  JU1  is  provided  to  enable/disable  the MAX17120 device (see Table 1).

## Table 1. Jumper JU1 Function

| SHUNT POSITION   | EN PIN              | DESCRIPTION       |
|------------------|---------------------|-------------------|
| Installed        | Connected to VDD    | MAX17120 enabled  |
| Not installed    | Connected to ground | MAX17120 disabled |

## Procedure

The  MAX17120  EV  kit  is  fully  assembled  and  tested.  Follow  the  steps  below  to  verify  board  operation. Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Connect the +3.3V DC power supply to the VDD and AGND PCB pads.
- 2) Connect the +35V DC power supply to the VON and AGND PCB pads.
- 3) Connect the -25V DC power supply to the VOFF and AGND PCB pads.
- 4) Turn on the power supply.
- 5) Note  that  the  logic  inputs  (STV,  CPV1,  CPV2,  and CPV3) must be set to AGND or VDD.
- 6) Verify the STVP logic at the respective test points:

| SIGNAL   | LOGIC STATE   | LOGIC STATE   | LOGIC STATE   | LOGIC STATE   |
|----------|---------------|---------------|---------------|---------------|
| EN       | H             | H             | H             | L             |
| STV      | L             | H             | H             | X             |
| CPV1     | X             | L             | H             | X             |
| STVP     | VOFF          | VON           | Hi-Z          | VOFF          |

Note: H  =  VDD,  L  =  GND,  Hi-Z  =  high  impedance,  and X = don't care .

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17120 Evaluation Kit

Figure 1. MAX17120 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX17120 Evaluation Kit

<!-- image -->

Figure 2. MAX17120 EV Kit Component Placement GuideComponent Side

Figure 3. MAX17120 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX17120 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600