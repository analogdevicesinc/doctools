<!-- lastmod 2022-08-03 -->
## MAX41400 Evaluation Kit

## General Description

The MAX41400 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX41400  low-power  precision instrumentation  amplifier  with  programmable  gain  in  a nine-bump  wafer-level  package  (WLP).  The  MAX41400 features  internal  selectable  gain  from  10V/V  to  200V/V. The MAX41400 EV kit can set different device gain with different jumper configurations. The EV kit operates from a single supply voltage between 1.7V and 3.6V, or from dual supplies providing ±0.85V to ±1.8V.

## Features

- Single- or Dual-Supply Operation
- Configurable Gain
- Configurable Reference Voltage
- Proven PCB layout
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- MAX41400 EV Kit
- Voltage Calibrator
- ± 0.9V, 100mA DC power supply(PS1)
- Digital multimeter

Ordering Information appears at end of data sheet.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed .

- 1) Verify that all jumpers (JU1-JU4) are in their default positions, as shown in Table 2.
- 2) Set the power supply to ± 0.9V. Connect the positive terminal of the power supply to V CC and the negative terminal  of  the  power  supply  to  V SS .  Connect  the ground terminal of the power supply to GND.
- 3) Connect GND to REFIN.
- 4) Connect the ground terminal of the power supply to Inverting Input (IN-).
- 5) Connect the positive  terminal  of  the  voltage  calibrator  to Non-Inverting  Input  (IN+),  and  connect  the  ground terminal of the voltage calibrator to the EV kit board ground. Set the voltage calibrator to 1mV.
- 6) Turn on the power supply and voltage calibrator.
- 7) Verify  that  the  DMM  measures a 10mV DC voltage at OUT.
- 8) Change  gain  selection  by  connecting  JU3  to  1-2, repeat step 5 and 6, and verify that the DMM mea -sures 40mV at OUT.
- 9) Change  gain  selection  by  connecting  JU4  to  1-2, repeat step 5 and 6, and verify that the DMM mea -sures 200mV at OUT.

<!-- image -->

Evaluates: MAX41400

## MAX41400 Evaluation Kit

## Detailed Description of Hardware

The MAX41400 EV kit evaluates the MAX41400 instrumentation  amplifier,  which  features  programmable  gain with gain-selection pin, low power consumption and low offset  voltage.  The  MAX41400  output-voltage  range  is rail-to-rail.  The  MAX41400  EV  kit  voltage  gain  can  be configured to 10V/V, 40V/V,100V/V, and 200V/V. The EV kit  operates  from  a  single  supply  voltage  between  1.7V and 3.6V, or from dual supplies providing ±0.85V to ±1.8V.

## REF Input

The reference voltage at REF sets the output-voltage DC signal (OUT) when the differential-input signal (V IN+ - V IN-) equals zero. The user can connect an external reference voltage directly to the REF connector, or use the resistordivider  network (R3, R6) to provide a reference voltage scaled from V DD .  Replace  resistors  R3  and  R6  to  modify  the voltage applied to REF using following equation:

<!-- formula-not-decoded -->

where V DD is the input supply voltage to the EV kit.

## Differential-Input Filter

The  MAX41400  EV  kit  features  an  optional  balanceddifferential resistor-capacitor filter across the MAX41400 IN+  and  IN-  input  pins.  Replace  the  resistors  (R1,  R2) and  capacitor (C4) that form the filter with components of appropriate value.

## Gain Setting

Connect G1 and G2 to either V SS or V DD for different gain selections. The MAX41400 EV kit can be configured for four gain selections, as shown in Table 1.

Evaluates: MAX41400

## Table 1. Gain Selection

| JU3 (G1)   | JU4 (G2)   |   GAIN (V/V) |
|------------|------------|--------------|
| 2-3        | 2-3        |           10 |
| 1-2        | 2-3        |           40 |
| 2-3        | 1-2        |          100 |
| 1-2        | 1-2        |          200 |

## Table 2. Jumper Descriptions (JU1-JU4)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                  |
|----------|------------------|--------------------------------------------------------------|
| JU1      | 1-2*             | Supply V SS and GND independently for dual-supply operation  |
| JU1      | 2-3              | Connect V SS to GND for single- supply operation             |
| JU2      | 1-2*             | Connect SHDN to V DD to place the device in normal operation |
| JU2      | 2-3              | Connect SHDN to GND to place the device in shutdown mode     |
| JU3      | 1-2              | Gain selection input G1; connect to V DD                     |
| JU3      | 2-3*             | Gain selection input G1; connect to V SS                     |
| JU4      | 1-2              | Gain selection input G2; connect to V DD                     |
| JU4      | 2-3*             | Gain selection input G2; connect to V SS                     |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX41400EVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX41400 EV Kit Bill of Materials

|   ITEM | REF_DES                        |     |   QTY | MFG PART #                   | MANUFACTURER                            | VALUE       | DESCRIPTION                                                                                                                  |
|--------|--------------------------------|-----|-------|------------------------------|-----------------------------------------|-------------|------------------------------------------------------------------------------------------------------------------------------|
|      1 | C1, C3                         |     |     2 | GRM155R71E104ME14            | MURATA                                  | 0.1µF       | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1µF; 25V; TOL = 20%; TG = -55°C TO +125°C; TC = X7R                                   |
|      2 | GND                            |     |     1 | 5006                         | KEYSTONE                                | N/A         | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.35IN; BOARD HOLE = 0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|      3 | IN+, IN-, OUTPUT               |     |     3 | 131-4353-00                  | TEKTRONICS                              | 131-4353-00 | CONNECTOR; WIREMOUNT; CIRCUIT BOARD TEST POINT MINIATURE PROBE; STRAIGHT; 4PINS                                              |
|      4 | JU1-JU4                        |     |     4 | PEC03SAAN                    | SULLINS                                 | PEC03SAAN   | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                    |
|      5 | OUT, REFIN, TP1, TP2, VDD, VSS |     |     6 | 5005                         | KEYSTONE                                | N/A         | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.35IN; BOARD HOLE = 0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   |
|      6 | R1, R2, R4                     |     |     3 | ERJ-2GE0R00                  | PANASONIC                               | 0           | RESISTOR; 0402; 0Ω; 0%; JUMPER; 0.10W; THICK FILM                                                                            |
|      7 | SPACER1-SPACER4                |     |     4 | 9032                         | KEYSTONE                                | 9032        | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                    |
|      8 | SU1-SU4                        |     |     4 | S1100-B; SX1100-B; STC02SYAN | KYCON; KYCON; SULLINS ELECTRONICS CORP. | SX1100-B    | TEST POINT; JUMPER; STR; TOTAL LENGTH = 0.24IN; BLACK; INSULATION = PBT; PHOSPHOR BRONZE CONTACT = GOLD PLATED               |
|      9 | U1                             |     |     1 | MAX41400                     | MAXIM                                   | MAX41400    | EVKIT PART - IC; MAX41400; PACKAGE OUTLINE DRAWING: 21-100443                                                                |
|     10 | PCB                            |     |     1 | MAX41400WLP                  | MAXIM                                   | PCB         | PCB:MAX41400WLP                                                                                                              |
|     11 | R3, R5, R6                     | DNP |     0 | N/A                          | N/A                                     | OPEN        | PACKAGE OUTLINE 0402 RESISTOR                                                                                                |
|     12 | C2, C4-C7                      | DNP |     0 | N/A                          | N/A                                     | OPEN        | PACKAGE OUTLINE 0402 NON-POLAR CAPACITOR                                                                                     |
|        | TOTAL                          |     |    29 |                              |                                         |             |                                                                                                                              |

Evaluates: MAX41400

## MAX41400 EV Kit Schematic Diagram

<!-- image -->

## MAX41400 EV Kit PCB Layout Diagrams

MAX41400 EV Kit-Top Silkscreen

<!-- image -->

MAX41400 EV Kit-Top View

<!-- image -->

MAX41400 EV Kit-Internal 2

<!-- image -->

## MAX41400 EV Kit PCB Layout Diagrams (continued)

MAX41400 EV Kit-Internal 3

<!-- image -->

MAX41400 EV Kit-Bottom View

<!-- image -->

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX41400