<!-- lastmod 2023-12-11 -->
<!-- image -->

Evaluates: MAX38913, MAX38914

## General Description

The  MAX38913A WLP evaluation kit  (EV  kit)  evaluates the  MAX38913A  in  a  wafer-level  package  (WLP).  The MAX38913A is  a  low-noise  linear  regulator.  The  EV  kit operates  over  an  input  range  of  1.8V  to  5.5V.  The  EV kit  provides  an  output  voltage  that  is  jumper  selectable between two separate levels. Each of the two regulated output  levels  are  configured  to  one  of  the  33  possible voltages through external select resistors. The MAX38913A  EV  kit  features  a  pass-through  mode  that can completely bypass the linear regulator. The EV kit can deliver up to 1A of current.

## Features

- Evaluates the MAX38913A IC in a 12-Pin (3x4 0.4mm Pitch) WLP
- 1.8V to 5.5V Input Range
- 0.6V to 5.0V Resistor Configurable Output Voltages
- Jumper Selectable Between Two Output Voltages
- Input to Output Pass-Through Mode
- Up to 1A Output Current
- Proven 4-Layer 1-oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assembled and Tested

## MAX38913A WLP EV Kit Files

| FILE         | DESCRIPTION              |
|--------------|--------------------------|
| MAX38913AWLP | EV Kit Bill of Materials |
| MAX38913AWLP | EV Kit Layout            |
| MAX38913AWLP | EV Kit Schematic         |

Ordering Information appears at end of data sheet.

## MAX38913A WLP Evaluation Kit

## Quick Start

## Required Equipment

- MAX38913A WLP EV Kit
- 1.8V to 5.5V, 3A DC power supply (IN)
- Electronic load capable of 1A
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify the board operation.

Caution: Do not turn on power supply until all connections are completed.

- 1) Verify that jumper RSEL1 is opened (VSEL1 is set to 3.6V).
- 2) Verify that jumper RSEL2 is opened (VSEL2 is set to 1.8V).
- 3) Verify that jumpers EN2 and EN1 are shunted on pins 1 and 2 (OUT = VSEL2).
- 4) Connect the 5.5V power supply between the IN and nearest GND terminal posts.
- 5) Connect the 1A electronic load between the OUT and nearest GND terminal posts.
- 6) Connect the DVM between the OUT and nearest GND terminal posts.
- 7) Turn on the power supply.
- 8) Verify that the voltage at the OUT terminal post is 1.8V within the device and the RSEL resistors accuracy specifications.
- 9) Enable the electronic load.
- 10)  Verify that the voltage at the OUT terminal post is 1.8V within the device and the RSEL resistors accuracy specifications.
- 11)  Move the shunt on Jumper EN2 to pins 2 and 3, Jumper EN1 still shunt on pins 1 and 2, (OUT = VSEL1).
- 12)  Verify that the voltage at the OUT terminal post is 3.6V within the device and the RSEL resistors accuracy specifications.

## MAX38913A WLP Evaluation Kit

## EV Kit Photo

<!-- image -->

<!-- image -->

│

## Detailed Description of Hardware

The MAX38913A WLP EV kit evaluates the MAX38913A in a WLP package. The MAX38913A is a low-noise linear regulator that delivers 1A of output current with only 4μVrms of output noise from 10Hz to 100kHz. The MAX38913A has a high power-supply rejection ratio (PSRR) of 70dB at 10Hz. This regulator requires only 33mV (typical) of input-to-output headroom at 3.6V output and full load.

The MAX38913A WLP EV kit comes with the MAX38913AANC+ installed. The EV kit operates over an input range of 1.8V to 5.5V and provides an output voltage that is jumper selectable between two different output levels. The input can be passed through to the output in a low quiescent current pass-through mode. Each of the two regulated output levels are configured to one of the 33 possible voltages through external select resistors.

## EN1, EN2, RSEL1, and RSEL2 (Mode and Output Selection)

The EV kit provides four jumpers. The EN1 and EN2 jumpers select between four different modes. Jumpers RSEL1 and RSEL2 set the VSEL1 and VSEL2 output levels, respectively, of the MAX38913A EV kit. Refer to Table 1 for jumpers EN1, EN2, RSEL1, and RSEL2 settings.

## Table 1. EN1, EN2, RSEL1, and RSEL2

| EN2   | EN1   | RSEL2      | RSEL1      | MODE      | OUT [V]   |
|-------|-------|------------|------------|-----------|-----------|
| 2-3   | 2-3   | Don't care | Don't care | OFF       | 0.0V      |
| 2-3   | 1-2   | Don't care | OPEN       | VSEL1     | 3.6V      |
| 2-3   | 1-2   | Don't care | 1-2*       | VSEL1     | 3.5V      |
| 1-2   | 2-3   | Don't care | Don't care | Pass thru | IN        |
| 1-2*  | 1-2*  | OPEN       | Don't care | VSEL2     | 1.8V      |
| 1-2*  | 1-2*  | 1-2*       | Don't care | VSEL2     | 3.5V      |

## Component Suppliers

| SUPPLIER    | WEBSITE        |
|-------------|----------------|
| Murata/TOKO | www.murata.com |
| TDK         | www.tdk.com    |

Note: Indicate that you are using the MAX38913A when contacting these component suppliers.

## MAX38914 Evaluation

To evaluate MAX38914 using MAX38913AEVK#WLP, replace U1 with MAX38914AANC+ and remove resistors R1 and R2. The MAX38914 provides pre-programmed fixed output voltages of 2.0V and 2.3V.

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX38913AEVK#WLP | EV Kit |

#Denotes RoHS compliance.

## MAX38913A WLP EV Kit Bill of Materials

| ITEM   | REF_DES                            |   QTY | MFG PART #                                              | MANUFACTURER                            | DESCRIPTION                                                                                                                               |
|--------|------------------------------------|-------|---------------------------------------------------------|-----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | C1                                 |     1 | C1005X7R1H473K; CGA2B3X7R1H473K050BB; GCM155R71H473KE02 | TDK; TDK; MURATA                        | CAP; SMT (0402); 0.047UF; 10%; 50V; X7R; CERAMIC                                                                                          |
| 2      | C2                                 |     1 | GCM31CR71A226KE02                                       | MURATA                                  | CAP; SMT (1206); 22UF; 10%; 10V; X7R; CERAMIC                                                                                             |
| 3      | C3                                 |     1 | GRM31CR60J107KE39                                       | MURATA                                  | CAP; SMT (1206); 100UF; 10%; 6.3V; X5R; CERAMIC*                                                                                          |
| 4      | EN1, EN2                           |     2 | PEC03SAAN                                               | SULLINS                                 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                 |
| 5      | GND, IN, OUT                       |     3 | 108-0740-001                                            | EMERSON NETWORK POWER                   | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                                                                                  |
| 6      | GND_1, GND_2                       |     2 | 5006                                                    | KEYSTONE                                | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                    |
| 7      | R1                                 |     1 | CRCW060347K5FK; ERJ-3EKF4752                            | VISHAY DALE; PANASONIC                  | RES; SMT (0603); 47.5K; 1%; +/- 100PPM/DEGC; 0.1000W                                                                                      |
| 8      | RSEL1, RSEL2                       |     2 | PEC02SAAN                                               | SULLINS ELECTRONICS CORP.               | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS;                                                                     |
| 9      | SU1-SU4                            |     4 | S1100-B; SX1100-B; STC02SYAN                            | KYCON; KYCON; SULLINS ELECTRONICS CORP. | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT; PHOSPHOR BRONZE CONTACT=GOLD PLATED                                  |
| 10     | TP_EN1, TP_EN2, TP_RSEL1, TP_RSEL2 |     4 | 5007                                                    | KEYSTONE                                | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                    |
| 11     | U1                                 |     1 | MAX38913AANC+                                           | MAXIM                                   | EVKIT PART - IC; MAX38913AANC+; 1A LOW NOISE LDO WITH DUAL VOLTAGE AND BYPASS; PACKAGE OUTLINE DRAWING: 21-100500; PACKAGE CODE: N121E1+1 |
| 12     | PCB                                |     1 | MAX38913AWLP                                            | MAXIM                                   | PCB:MAX38913AWLP                                                                                                                          |
| 13     | R2                                 |     0 | N/A                                                     | N/A                                     | RESISTOR; 0603; OPEN; FORMFACTOR                                                                                                          |
| Total  |                                    |    23 |                                                         |                                         |                                                                                                                                           |

## MAX38913A WLP EV Kit Schematic

<!-- image -->

## MAX38913A WLP Evaluation Kit

## MAX38913A WLP EV Kit PCB Layout

<!-- image -->

MAX38913A WLP EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX38913A WLP EV Kit PCB Layout-Layer 2

MAX38913A WLP EV Kit PCB Layout-Top

<!-- image -->

MAX38913A WLP EV Kit PCB Layout-Layer 3

<!-- image -->

│

## MAX38913A WLP EV Kit PCB Layout (continued)

MAX38913A WLP EV Kit PCB Layout-Bottom

<!-- image -->

│

## MAX38913A WLP Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------|-----------------|
|                 0 | 3/21            | Initial release                                            | -               |
|                 1 | 7/23            | Updated EV kit title and added MAX38914 Evaluation section | 1-8             |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

│