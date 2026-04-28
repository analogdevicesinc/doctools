<!-- lastmod 2023-03-07 -->
<!-- image -->

## General Description

The MAX77837 evaluation kit (EV kit) is a fully assembled and tested printed circuit board (PCB) that demonstrating the MAX77837 nano power buck-boost converter. The EV kit has an input range of 1.8V to 5.5V, with a switch current limit of 1.05A.

The MAX77837 IC has two hardware control pins, SEL1 and  SEL2.  The  resistor  connected  at  SEL1  (R SEL1 ) selects a predefined combination of two output voltages between 1.8V and 5.2V,  OUT1 and  OUT2.  The resistor connected at SEL2 (R SEL2 ) allows different configurations of  switch  current  limit  to  optimize  external  components size, enable or disable DVS function, select either hiccup or latch-off mode, and IC startup voltage.

The  EV  kit  is  compatible  with  MAX77837  WLP  IC (MAX77837EWA+T)  and  equipped  with  test  points  and jumpers to test most of the device's functionality. In  addition,  there  are  probing  sockets  on  critical  nodes (OUT-1, LX1, and LX2) for precise measurements.

## MAX77837 EV kit Specifications Table 1. EV Kit Specifications

| SPECIFICATION           | TEST CONDITIONS                          | MIN   | TYP   |   MAX | UNIT   |
|-------------------------|------------------------------------------|-------|-------|-------|--------|
| Input Voltage           |                                          | 1.8   |       |   5.5 | V      |
| Output Voltage          | Configured using R SEL1 and R SEL2       | 1.8   |       |   5.2 | V      |
| Shutdown Supply Current | EN = LOW, T J = +25°C                    |       | 10    | 100   | nA     |
| Input Quiescent Current | EN = HIGH, T J = +25°C, and No Switching |       | 430   | 930   | nA     |

## Table 2. Default Jumper Positions

| JUMPER   | NODE OR FUNCTION   | SHUNT POSITION   | FEATURE                             |
|----------|--------------------|------------------|-------------------------------------|
| J1       | EN                 | 1-2*             | Connects EN to HI                   |
| J2       | SEL1               | 1-2*             | Connects SEL1 to R2 (Potentiometer) |
| J3       | SEL2               | 1-2*             | Connects SEL2 to R4 (Potentiometer) |

*Default position

Evaluates: MAX77837 in

WLP Package

## Benefits and Features

- 1.8V to 5.5V Input Voltage
- Accessible Test points for INS and OUTS
- Output  Voltage  (OUT1  and  OUT2)  adjustable  using RSEL1 .
- Switch current limit, DVS function, and Hiccup or Latch off mode operation.
- Sense sockets for high-accuracy measurements

Ordering Information appears at the end of datasheet

.

## MAX77837 Evaluation Kit

## MAX77837 Evaluation Board Photo

Figure 1. MAX77837 Evaluation Board

<!-- image -->

## Quick Start

## Required Equipment

- MAX77837 Evaluation Kit
- Adjustable DC Power Supply
- Digital Multi-meters (x4)
- Electronic Load

## Setup Overview

See Figure 2 for a Simplified EV kit circuit diagram and a typical bench setup for MAX77837 EV kit is shown in Figure 3 .

Figure 2. MAX77837 Typical Application Circuit

<!-- image -->

## Evaluates: MAX77837 in WLP Package

## Evaluates: MAX77837 in WLP Package

Figure 3. MAX77837 EV kit Simplified Block Diagram

<!-- image -->

## Procedure

The MAX77837 EV kit is fully assembled and tested. Follow the steps to verify the board operation. Use twisted wires of appropriate gauges that are as short as possible to connect the load and power sources.

1. Identify the connections and test points shown in Figure 3 . Ensure that the EV kit has the correct jumper settings, as shown in Table 2 .
2. Connect a DVM to the INS and PGNDS pins to measure the input voltage.
3. Connect a DVM to the OUTS and PGNDS1 pins to measure the output voltage.
4. Set R SEL1  to 0 Ω (OUT1 = 3.3V and OUT2 = 3.6V) and R SEL2  to 909 k Ω (DVS Enabled, Latch-off mode, Highest ILIM, Startup into OUT1). See SEL Pin Configuration Section for more information on how to select the R SEL1  and R SEL2 values.
5. Set the power supply to 5V (1A current limit) across IN and PGND terminals of the EV kit. Turn on the power supply.
6. Confirm the DVM connected to OUTS and PGNDS1 reads the default output voltage of the EV kit (about 3.36V). Confirm the ammeter reads the expected input supply current (less than 10µA).
7. Once the EV kit is confirmed working increase the current limit on the power supply connected across IN and PGND. Connect an electronic load across OUT and GND terminals to evaluate the performance of the MAX77837 buck-boost regulator.

The procedure's next phase is to evaluate MAX77837's Dynamic Voltage Scaling (DVS) functionality. Since R SEL2  is set to 909k Ω , the DVS function is enabled. See Table 4 in SEL Pin Configuration Section for more information on how to select the R SEL2  values. If the evaluation of the DVS function is not required, the following steps can be skipped.

8. Turn off the power supply connected between IN and PGND.
9. Set the power supply to 5V (1A current limit) across IN and PGND of the EV kit. If you are using GPIO for DVS control, ensure that it is set to a High-Z state until VOUT settles to the target value after start-up. Then, turn on the on the power supply.
10.  Confirm that the DVM connected to OUTS and PGNDS1 reads the default output voltage of the EV kit (about 3.36V).
11.  Pull the SEL2 pin high after VOUT has settled to about 3.36V.
12.  Confirm that the DVM connected to OUTS and PGNDS1 reads an output voltage of about 3.66V.

After the Quick Start procedure concludes, further evaluations can be carried out on the device for input, output voltages, and load conditions.

## MAX77837 Evaluation Kit

## EV Kit Hardware

## SEL Pin Configuration

MAX77837  has  two  hardware  configuration  pins  (SEL1  and  SEL2)  to  configure  the  part's  features.  A  resistor between SEL1 and ground (R SEL1 ) is used to select two output voltage levels (OUT1 and OUT2). A resistor between SEL2  and  ground  (R SEL2 )  is  used  to  select  the  startup  output  voltage,  switch  current  limit,  protection  mode,  and enable/disable the DVS function. See Table 3 and Table 4 for more details. If the OUT2 is required as the startup voltage, the part can only be operated with DVS disabled and in Auto-Restart Mode.

When RSEL2  enables DVS, the SEL2 pin will be configured as logic control input for the DVS function after soft-start. When SEL2 is pulled HIGH, the output voltage is will switch from OUT1 to OUT2; when SEL2 goes LOW, the output voltage is will switch from OUT2 to OUT1. The SEL2 pin should be in a High-Z state during and before the soft-start. The DVS  function  can  only  ramp  up  the  output  voltage  level.  There  is  no  slew-down  control  when  the  DVS  function transitions from a higher output voltage to a lower output voltage. The IC changes the reference voltage and waits until the load or leakage current brings the output voltage to a lower value and starts operating normally.  Refer to the Dynamic Voltage Setting section in the MAX77837 IC datasheet for more information.

## Table 3. RSEL1 Selection Guide

| R SEL1 (kΩ)   |   OUT1 (V) |   OUT2 (V) | R SEL1 (kΩ)   | OUT1 (V)   | OUT2 (V)   |
|---------------|------------|------------|---------------|------------|------------|
| 4.99          |        1.8 |        2.5 | 66.5          | 3.3        | 3.8        |
| 5.90          |        1.8 |        2.8 | 80.6          | 3.3        | 5.0        |
| 7.15          |        1.8 |        3.3 | 95.3          | 3.6        | 2.8        |
| 8.45          |        1.8 |        3.6 | 113           | 3.6        | 3.3        |
| 10.0          |        2.5 |        1.8 | 133           | 3.6        | 5.0        |
| 11.8          |        2.5 |        2.8 | 162           | 3.6        | 5.2        |
| 14.0          |        2.5 |        3.3 | 191           | 3.8        | 3.3        |
| 16.9          |        2.5 |        3.6 | 226           | 3.8        | 3.6        |
| 20.0          |        2.8 |        1.8 | 267           | 3.8        | 5.0        |
| 23.7          |        2.8 |        2.5 | 324           | 5.0        | 3.3        |
| 28.0          |        2.8 |        3.3 | 383           | 5.2        | 3.3        |
| 34.0          |        2.8 |        3.6 | 453           | 2.1        | 2.3        |
| 40.2          |        3.3 |        1.8 | 536           | RESERVED   | RESERVED   |
| 47.5          |        3.3 |        2.5 | 634           | RESERVED   | RESERVED   |
| 56.2          |        3.3 |        2.8 | 768           | RESERVED   | RESERVED   |
| Short         |        3.3 |        3.6 | 909/OPEN      | RESERVED   | RESERVED   |

Evaluates: MAX77837 in WLP Package

## Table 4. RSEL2 Selection Guide

|   R SEL2 (kΩ) | DVS      | PROTECTION           |   ILIM (mA) | STARTUP VOLTAGE   |
|---------------|----------|----------------------|-------------|-------------------|
|           226 | DISABLED | Hiccup/ Auto-Restart |        1050 | OUT2              |
|           267 | DISABLED | Hiccup/ Auto-Restart |         400 | OUT2              |
|           324 | DISABLED | Hiccup/ Auto-Restart |        1050 | OUT1              |
|           383 | DISABLED | Latch Off            |         400 | OUT1              |
|           453 | DISABLED | Latch Off            |        1050 | OUT1              |
|           536 | ENABLED  | Hiccup/ Auto-Restart |         400 | OUT1              |
|           634 | ENABLED  | Hiccup/ Auto-Restart |        1050 | OUT1              |
|           768 | ENABLED  | Latch Off            |         400 | OUT1              |
|           909 | ENABLED  | Latch Off            |        1050 | OUT1              |

## Test Points and Critical Node Measurement (VOUT, LX1 &amp; LX2)

The MAX77837 EV kit has holes on the board for measuring the critical nodes OUT-1, LX1, and LX2. Use these probing holes to eliminate as much noise as possible when measuring the critical nodes (See Figure 4 ). To ensure the best results, use a very short ground wire from the ground sleeve of the scope probe to the GND side of the probing hole, and use the bare tip of the probe directly to the signal side of the probing hole. These guidelines will give the most accurate results when  measuring  parameters  including  output  voltage  ripple,  switching  waveforms,  and  load  transient  response.

Figure 4. Probing Critical Nodes

<!-- image -->

## Table 5. Usage of Critical Test Points

| LOAD TRANSIENT, OUTPUT RIPPLE   | LOAD REGULATION, LINE REGULATION, V OUT ACCURACY   | EFFICIENCY     | EFFICIENCY    | SWITCHING NODE   |
|---------------------------------|----------------------------------------------------|----------------|---------------|------------------|
| LOAD TRANSIENT, OUTPUT RIPPLE   | LOAD REGULATION, LINE REGULATION, V OUT ACCURACY   | OUTPUT VOLTAGE | INPUT VOLTAGE | LX               |
| OUT-1                           | OUTS and INS                                       | OUTS           | INS           | LX1 and LX2      |

Evaluates: MAX77837 in

WLP Package

## MAX77837 Evaluation Kit

## Layout Guidelines

Careful circuit board layout is critical to achieve low switching power loss and clean, stable operation.

When designing the PCB, follow these guidelines:

- Place the input capacitors (C IN ) and output capacitors (C OUT ) immediately next to the IN pin and OUT pin of the MAX77837 IC, respectively. Since the IC operates at a high switching frequency with a fast LX edges, this placement is critical for minimizing parasitic inductance within the input and output current loops, which can cause high voltage spikes and damage the internal switching MOSFETs.
- Place the inductor next to the LX bumps (as close as possible) and make the traces between the LX bumps and the inductor short and wide to minimize PCB trace impedance. Excessive PCB impedance reduces converter efficiency. When routing LX traces on a separate layer, make sure to include enough vias to minimize trace impedance. Routing LX traces on multiple layers is recommended to reduce trace impedance further. Furthermore, make LX traces take up a manageable amount of area. The voltage on this node switches quickly, and additional area creates more radiated emissions.
- Connect the inner GND bumps to the low-impedance ground plane on the PCB with vias placed next to the bumps. Do not create GND islands, as GND islands risk interrupting the hot loops.
- It is essential for high converter efficiency to keep the power traces and load connections short and wide.
- Do not neglect ceramic capacitor DC voltage derating. Choose capacitor values and case sizes carefully. Refer to the Output Capacitor Selection section and refer to Tutorial 5527 for more information.

Figure 5. PCB Layout Guidelines

<!-- image -->

## Ordering Information

| PART NUMBER     | U1 IC         | PIN PACKAGE   |
|-----------------|---------------|---------------|
| MAX77837WEVKIT# | MAX77837EWA+T | 8 WLP         |

#Denotes RoHS-compliant.

Evaluates: MAX77837 in

WLP Package

## MAX77837 Evaluation Kit

## MAX77837 EV Kit Bill of Materials

| PART                                                                                                         | QTY                                                                                                          | MFG PART #                                                                                                   | MANUFACTURER                                                                                                 | DESCRIPTION                                                                                                  |
|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| C1                                                                                                           | 1                                                                                                            | GRM188Z71A106KA73                                                                                            | MURATA                                                                                                       | 10μF ±10% 10V X7R CERAMIC CAPACITOR (0603)                                                                   |
| C4                                                                                                           | 1                                                                                                            | GRM21BD71A226ME44                                                                                            | MURATA                                                                                                       | 22μF ±10% 10V X7R CERAMIC CAPACITOR (0805)                                                                   |
| L1                                                                                                           | 1                                                                                                            | CIGT201610EH2R2MNE                                                                                           | SAMSUNG                                                                                                      | 2.2μH ±20% 2.4A THIN FILM INDUCTOR (0806)                                                                    |
| R1, R3                                                                                                       | 0                                                                                                            | N/A                                                                                                          | N/A                                                                                                          | RESISTOR OPEN (0402), PLACEHOLDER FOR R SEL1 AND R SEL2                                                      |
| U1                                                                                                           | 1                                                                                                            | MAX77837EWA+                                                                                                 | MAXIM                                                                                                        | 1.05A NANO POWER BUCK-BOOST CONVERTER WLP8                                                                   |
| Components below this line are outside of the immediate MAX77837 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77837 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77837 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77837 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77837 evaluation circuit and solution silkscreen. |
| R2, R4                                                                                                       | 2                                                                                                            | 3296Y-1-105LF                                                                                                | BOURNS                                                                                                       | 1Meg ±10% ±100 PPM/DEGC RESISTOR (0402)                                                                      |
| C2                                                                                                           | 1                                                                                                            | TPSB107M010R0400                                                                                             | AVX                                                                                                          | 100μF ±20% 10V TANTALUM CAPACITOR (3528)                                                                     |
| IN, OUT, PGND, PGND1                                                                                         | 4                                                                                                            | 9020 BUSS                                                                                                    | WEICO WIRE                                                                                                   | MAXIM PAD WIRE WEICO WIRE SOFT DRAWN BUS TYPE-S 20AWG                                                        |
| EN, SEL1, SEL2                                                                                               | 3                                                                                                            | 5002                                                                                                         | KEYSTONE                                                                                                     | TEST POINT BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH                                |
| INS, PGNDS, PGNDS1                                                                                           | 3                                                                                                            | 5001                                                                                                         | KEYSTONE                                                                                                     | TEST POINT BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH                                |
| PGND2, PGND3                                                                                                 | 2                                                                                                            | 5011                                                                                                         | KEYSTONE                                                                                                     | TEST POINT BOARD HOLE=0.063IN BLACK PHOSPHOR BRONZE WIRE SILVER PLATE FINISH                                 |
| J1                                                                                                           | 1                                                                                                            | PBC03SAAN                                                                                                    | SULLINS                                                                                                      | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 3PINS                                             |
| J2, J3                                                                                                       | 2                                                                                                            | TSW-102-07-T-S                                                                                               | SAMTEC                                                                                                       | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS                                             |
| PCB                                                                                                          | 1                                                                                                            | MAX77837W                                                                                                    | MAXIM                                                                                                        | PCB:MAX77837W                                                                                                |
| SU1, SU2, SU3                                                                                                | 3                                                                                                            | S1100-B, SX1100-B, STC02SYAN                                                                                 | KYCON, KYCON, SULLINS ELECTRONICS CORP.                                                                      | JUMPER STR TOTAL LENGTH=0.24IN BLACK PHOSPHOR BRONZE CONTACT=GOLD PLATED                                     |

Evaluates: MAX77837 in

WLP Package

## MAX77837 EV Kit Schematic Diagram

<!-- image -->

Evaluates: MAX77837 in

WLP Package

## MAX77837 Evaluation Kit

## MAX77837 EV Kit PCB Layout Diagrams

MAX77837 EV Kit Component Placement Guide -Top Silkscreen

<!-- image -->

## Evaluates: MAX77837 in WLP Package

MAX77837 EV Kit PCB Layout -Top View

<!-- image -->

MAX77837 EV Kit PCB Layout -Layer 2

<!-- image -->

## MAX77837 Evaluation Kit

MAX77837 EV Kit PCB Layout -Layer 3

<!-- image -->

## Evaluates: MAX77837 in WLP Package

MAX77837 EV Kit PCB Layout -Bottom View

<!-- image -->

## MAX77837 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 01/23           | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

Evaluates: MAX77837 in

WLP Package