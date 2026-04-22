<!-- lastmod 2024-03-12 -->
<!-- image -->

## Evaluates: MAX77887 (WLP)

## General Description

The MAX77887 evaluation kit (EV kit) is a fully assembled and tested printed circuit board (PCB) that demonstrates the MAX77887 nano power buck-boost converter. The IC has an input range of 1.8V to 5.5V, with a switching current limit of 400mA.

The IC has two hardware control pins, SEL1 and SEL2. The  resistor connected at SEL1  (R SEL1 ) selects a predefined output voltage level between 1.8V to 5.2V. The resistor  at  SEL2  (R SEL2 )  allows  to  configure  the  two different switching current limit levels (ILIM), and 16 input voltage monitoring threshold levels.

The  EV  kit  is  compatible  with  the  MAX77887  WLP  IC (MAX77887AEWL+T) and equipped with test points and jumpers for testing most of the functionality of the device. There are probing sockets on critical nodes (OUT, LX1, and LX2) for precise measurements.

## EV Kit Photo

<!-- image -->

## Features

- Output Voltage (OUT1) Adjustable Using R SEL1
- Test Points for INS and OUTS
- Switching Current Limit, Input Voltage Monitor Levels
- Sense Sockets for High-Accuracy Measurements

## Check List

- MAX77887 Evaluation Kit
- Adjustable DC Power Supply
- Digital Multi-meters (x4)
- Electronic Load

Ordering Information appears at end of data sheet.

## MAX77887 Evaluation Kit

## Evaluates: MAX77887 (WLP)

## EV Kit Specifications and Default Configurations

EV kit specifications shown in Table 1 summarize important parameters to get started with the EV kit. Table 2 shows default jumper positions and the implications.

## Table 1. EV Kit Specifications

| SPECIFICATION          | TEST CONDITIONS   | MIN   | TYP   | MAX   | UNIT   |
|------------------------|-------------------|-------|-------|-------|--------|
| Input Voltage Range    |                   | 1.9   |       | 5.5   | V      |
| Output Voltage Range   |                   | 1.8   |       | 5.2   | V      |
| Default Output Voltage | R SEL1 = 634k Ω   |       | 5.0   |       | V      |
| Default ILIM           | R SEL2 = 133k Ω   |       | 400   |       | mA     |
| Default V IN MON       | R SEL2 = 133k Ω   |       | 2.2   |       | V      |

## Table 2. Default Jumper Positions

| JUMPER   | NODE OR FUNCTION   | SHUNT POSITION   | JUMPER POSITION                                                                                    |
|----------|--------------------|------------------|----------------------------------------------------------------------------------------------------|
| J1       | EN                 | 1-2*             | Connects EN to IN                                                                                  |
| J1       | EN                 | 2-3              | Connects EN to GND                                                                                 |
| J2       | VIN                | 1-2*             | Bypasses the 10Ω resistor between the Input Supply and the IN pin that emulates battery resistance |
| J3       | SEL2               | 1-2              | Connects SEL2 to R2 (potentiometer)                                                                |
| J3       | SEL2               | 2-3*             | Connects SEL2 to fixed resistance (133k Ω )                                                        |
| J4       | SEL1               | 1-2              | Connects SEL1 to R4 (potentiometer)                                                                |
| J4       | SEL1               | 2-3*             | Connects SEL1 to fixed resistance (634k Ω )                                                        |
| J5       | On-Board E-LOAD    | 1-2              | Connects OUT to the DRAIN pin of the on-board E-LOAD                                               |

## Quick Start Procedure

A Typical Application circuit is shown in Figure 1 .

Figure 1. MAX77887 Typical Application Circuit

<!-- image -->

## Evaluates: MAX77887 (WLP)

## MAX77887 Evaluation Kit

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Use twisted wires of appropriate gauges as short as possible to connect the load and power sources.

1. Identify the connections and test points in the EV Kit Photo . Ensure that the EV kit has the correct jumper settings, as shown in Table 2 .
2. Connect a DVM to the INS and GNDS pins to measure the input voltage.
3. Connect a DVM to the OUTS and GNDS1 pins to measure the output voltage.
4. Set SEL1 to fixed resistance by changing the J4 position to 2-3 (OUT = 5V). Set SEL2 to fixed resistance by changing the J3 position to 2-3 (400mA ILIM, 2.2V V IN MON). See Table 1 and Table 2 of this data sheet for selecting the R SEL1  and R SEL2  values.
5. Set the power supply to 3.7V (100mA current limit) across the IN and PGND terminals of the EV kit. Turn on the power supply.
6. Now that the EV kit is confirmed working, increase the current limit on the power supply connected across IN and PGND. To evaluate the loaded performance of the MAX77887, apply voltage to the GATE terminal of the onboard MOSFET to emulate load at the output.

The next step of the procedure is used to evaluate MAX77887's V IN MON functionality. Since R SEL2 is set to 133kΩ, VIN MON is enabled with a default value of 2.2V. See Table 3 in the SEL Pin Configuration section of this data sheet for more information on how to select R SEL2  values. If the evaluation of the V IN MON function is not required, skip the following steps.

7. Turn off the power supply connected between IN and PGNDS.
8. Set R SEL2  to the default value (2.2V V IN MON threshold level) by placing the jumper J1 in position 2-3. See the SEL Pin Configuration section for selecting V IN MON levels based on R SEL2  values.
9. Install jumper J2 to connect the battery resistance, R5 (10 Ω ) between VIN and IN.
10.  Connect the jumper J5 to enable the on-board E-LOAD. Apply 2.35V at the GATE terminal to turn ON the ELOAD FET.
11.  Connect scope probes at LX1, LX2, OUT-1, and INS test points.
12.  Set the power supply to 2.5V (100mA current limit) across the IN and PGND of the EV kit. Turn on the power supply.
13.  Increase  the  load  on  the  E-LOAD  by  increasing  the  GATE voltage till the  input  voltage  drops  to  the  default VIN MON threshold level (2.2V).
14.  Observe the switching activity at LX1, LX2, and OUT-1 on the oscilloscope.

This concludes the Quick Start Procedure. Users are now encouraged to further evaluate the device for different input, output voltages, and load conditions.

## EV Kit Hardware

## SEL Pin Configuration

MAX77887 has two hardware configurable pins (SEL1 and SEL2) to configure the part's features. A resistor tied between SEL1, and ground (R SEL1 ) is used to select the output voltage level (OUT). A resistor tied between SEL2 and ground (R SEL2 ) is used to select the switching current limit and the input voltage monitoring threshold level. See Table 3 and Table 4 for more details.

## Table 3. RSEL1 Selection Guide

| R SEL1 (kΩ)   |   OUT (V) |   R SEL1 (k Ω ) |   OUT (V) |
|---------------|-----------|-----------------|-----------|
| Short         |       3.3 |            66.5 |       3.4 |
| 4.99          |       1.8 |            80.6 |       3.6 |
| 5.90          |       1.9 |            95.3 |       3.7 |
| 7.15          |       2   |           113   |       3.8 |

## Evaluates: MAX77887 (WLP)

|   R SEL1 (kΩ) |   OUT (V) | R SEL1 (k Ω )   |   OUT (V) |
|---------------|-----------|-----------------|-----------|
|          8.45 |       2.1 | 133             |       3.9 |
|         10    |       2.2 | 162             |       4   |
|         11.8  |       2.3 | 191             |       4.1 |
|         14    |       2.4 | 226             |       4.2 |
|         16.9  |       2.5 | 267             |       4.3 |
|         20    |       2.6 | 324             |       4.4 |
|         23.7  |       2.7 | 383             |       4.5 |
|         28    |       2.8 | 453             |       4.6 |
|         34    |       2.9 | 536             |       4.7 |
|         40.2  |       3   | 634             |       5   |
|         47.5  |       3.1 | 768             |       5.1 |
|         56.2  |       3.2 | 909/OPEN        |       5.2 |

## Table 4. RSEL2 Selection Guide

| R SEL2 (kΩ)   |   V IN MON (V) |   ILIM (mA) | R SEL2 (k Ω )   |   V IN MON (V) |   ILIM (mA) |
|---------------|----------------|-------------|-----------------|----------------|-------------|
| Short         |            1.8 |         200 | 66.5            |            1.8 |         400 |
| 4.99          |            1.9 |         200 | 80.6            |            1.9 |         400 |
| 5.90          |            2   |         200 | 95.3            |            2   |         400 |
| 7.15          |            2.1 |         200 | 113             |            2.1 |         400 |
| 8.45          |            2.2 |         200 | 133             |            2.2 |         400 |
| 10.0          |            2.3 |         200 | 162             |            2.3 |         400 |
| 11.8          |            2.4 |         200 | 191             |            2.4 |         400 |
| 14.0          |            2.5 |         200 | 226             |            2.5 |         400 |
| 16.9          |            2.6 |         200 | 267             |            2.6 |         400 |
| 20.0          |            2.7 |         200 | 324             |            2.7 |         400 |
| 23.7          |            2.8 |         200 | 383             |            2.8 |         400 |
| 28.0          |            2.9 |         200 | 453             |            2.9 |         400 |
| 34.0          |            3   |         200 | 536             |            3   |         400 |
| 40.2          |            3.1 |         200 | 634             |            3.1 |         400 |
| 47.5          |            3.2 |         200 | 768             |            3.2 |         400 |
| 56.2          |            3.4 |         200 | 909/OPEN        |            3.4 |         400 |

## Test Points and Critical Node Measurement (OUT-1, LX1, LX2)

The EV kit comes with holes on the board for measuring the critical nodes OUT-1, LX1, and LX2. Use these probing holes to eliminate as much noise as possible when measuring the critical nodes. To ensure best results, use a very short ground wire from the ground sleeve of the scope probe to the GND side of the probing hole, and use the bare tip of the probe directly to the signal side of the probing hole. Following these guidelines gives the most accurate results when measuring parameters like output voltage ripple, switching waveforms, and load transient response.

## Table 5. Usage of Critical Test Points

| LOAD TRANSIENT, OUTPUT RIPPLE   | LOAD REGULATION, LINE REGULATION, VOUT ACCURACY   | EFFICIENCY     | EFFICIENCY    | SWITCHING NODE   |
|---------------------------------|---------------------------------------------------|----------------|---------------|------------------|
|                                 |                                                   | OUTPUT VOLTAGE | INPUT VOLTAGE | LX               |
| OUT-1                           | OUTS and INS                                      | OUTS           | INS           | LX1 and LX2      |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX77887EVKIT# | EV Kit |

#Denotes RoHS-compliant.

www.analog.com

## Evaluates: MAX77887 (WLP)

## MAX77887 EV Kit Bill of Materials

| PART                 |   QTY | MFG PART #                                                                                 | MANUFACTURER                          | DESCRIPTION                                                                                                            |
|----------------------|-------|--------------------------------------------------------------------------------------------|---------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| C1                   |     1 | GRM188Z71A106KA73                                                                          | MURATA                                | CAP; SMT (0603); 10UF; 10%; 10V; X7R; CERAMIC                                                                          |
| C2                   |     1 | TR3B107M010C1400; TPSB107M010R0400                                                         | VISHAY; AVX                           | CAP; SMT (3528); 100UF; 20%; 10V; TANTALUM                                                                             |
| C3                   |     1 | T495D107K010ATE100                                                                         | KEMET                                 | CAP; SMT (7343-31); 100UF; 10%; 10V; TANTALUM                                                                          |
| C4                   |     1 | C1608X5R1A226M080AC; GRM188R61A226ME15; CL10A226MPCNUBE; CL10A226MPMNUB; GRM187R61A226ME15 | TDK; MURATA; SAMSUNG; SAMSUNG; MURATA | CAP; SMT (0603); 22UF; 20%; 10V; X5R; CERAMIC                                                                          |
| EN, SEL1, SEL2       |     3 | 5002                                                                                       | KEYSTONE                              | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER                   |
| GATE                 |     1 | 5010                                                                                       | KEYSTONE                              | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL                   |
| GNDS, GNDS1, GS      |     3 | 5001                                                                                       | KEYSTONE                              | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH      |
| IN, OUT, PGND, PGND1 |     4 | 9020 BUSS                                                                                  | WEICO WIRE                            | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                               |
| INS, OUTS, VS        |     3 | 5000                                                                                       | KEYSTONE                              | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH        |
| J1, J3, J4           |     3 | PBC03SAAN                                                                                  | SULLINS                               | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC                                       |
| J2, J5               |     2 | PBC02SAAN                                                                                  | SULLINS ELECTRONICS CORP.             | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                              |
| L1                   |     1 | DFE201610E-4R7M=P2                                                                         | MURATA ELECTRONICS                    | 4.7 µH SHIELDED DRUM CORE, WIREWOUND INDUCTOR 1.1 A 288mOHM MAX 0806 (2016 METRIC)                                     |
| PGND2, PGND3         |     2 | 5011                                                                                       | KEYSTONE                              | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH |
| Q1                   |     1 | IRFHM8337TRPBF                                                                             | INTERNATIONAL RECTIFIER               | TRAN; HEXFET POWER MOSFET; NCH; PQFN8; PD-(2.8W); I-(18A); V-(30V)                                                     |
| R1                   |     1 | CRCW0402634KFK                                                                             | VISHAY DALE                           | RES; SMT (0402); 634K; 1%; +/- 100PPM/DEGK; 0.0630W                                                                    |
| R2, R4               |     2 | 3296Y-1-105LF                                                                              | BOURNS                                | RES; THROUGH HOLE-RADIAL LEAD; 1M; 10%; +/-100PPM/DEGC; 0.5W                                                           |
| R3                   |     1 | RK73H1ETTP1333F; CRCW0402133KFK                                                            | KOA SPEER; VISHAY DALE                | RES; SMT (0402); 133K; 1%; +/- 100PPM/DEGC; 0.0630W                                                                    |
| R5                   |     1 | 352210RF                                                                                   | TE CONNECTIVITY                       | RES; SMT (2512); 10; 1%; +/-400PPM/DEGC; 3W                                                                            |
| R6                   |     1 | CSR1206FT1R00                                                                              | STACKPOLE ELECTRONICS INC.            | RES; SMT (1206); 1; 1%; +/-100PPM/DEGC; 0.5000W                                                                        |

www.analog.com

## MAX77887 Evaluation Kit

## Evaluates: MAX77887 (WLP)

## MAX77887 Evaluation Kit

| PART            |   QTY | MFG PART #   | MANUFACTURER              | DESCRIPTION                                                                                                                   |
|-----------------|-------|--------------|---------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| U1              |     1 | MAX77887EWL+ | ANALOG DEVICES            | EVKIT PART - IC; NANO POWER BUCK- BOOST WITH INPUT VOLTAGE MONITOR; PACKAGE OUTLINE DRAWING: 21-100672; PACKAGE CODE: W91T1+1 |
| PCB             |     1 | MAX77887     | ANALOG DEVICES            | PCB:MAX77887                                                                                                                  |
| EV_KIT_BOX1     |     4 | NPC02SXON-RC | SULLINS ELECTRONICS CORP. | CONNECTOR; FEMALE; MINI SHUNT; 0.100IN CC; OPEN TOP; JUMPER; STRAIGHT; 2PINS                                                  |
| LX1, LX2, OUT-1 |     0 | SS-102-TT-2  | SAMTEC                    | DNP; IC-SOCKET; SIP; STRAIGHT; PRECISION MACHINED SOCKET STRIP; OPEN FRAME; 2PINS; 100MIL                                     |

## Evaluates: MAX77887 (WLP)

## MAX77887 EV Kit Schematic

<!-- image -->

## Evaluates: MAX77887 (WLP)

## MAX77887 EV Kit PCB Layout

MAX77887 EV Kit Component Placement Guide -Top Silkscreen

<!-- image -->

MAX77887 EV Kit PCB Layout -Top

<!-- image -->

## MAX77887 Evaluation Kit

MAX77887 EV Kit PCB Layout -Layer 2

<!-- image -->

MAX77887 EV Kit PCB Layout -Layer 3

<!-- image -->

## Evaluates: MAX77887 (WLP)

## MAX77887 EV Kit PCB Layout (continued)

MAX77887 EV Kit PCB Layout -Bottom

<!-- image -->

MAX77887 EV Kit Component Placement Guide -Bottom Silkscreen

<!-- image -->

## Evaluates: MAX77887 (WLP)

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/24            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## MAX77887 Evaluation Kit