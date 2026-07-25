<!-- lastmod 2022-08-04 -->
## MAX22256 Evaluation Kit

## General Description

The MAX22256 evaluation kit (EV kit) is a fully assembled and  tested  PCB  that  contains  the  MAX22256,  a  15W isolated H-bridge DC-DC converter. The EV kit operates from a 5V to 36V DC power source and the onboard 1:1 turns-ratio transformer from Wurth sets the output voltage, operating up to a 1A current limit.

The EV kit provides greater than 90% overall efficiency at +24V between 2.2W and up to 8.3W output power using an H-bridge DC-DC converter topology. The MAX22256 EV kit operates in pulse width modulation (PWM) mode, by default. The transformer provides galvanic isolation with the output  powered  from  a  full-wave  rectifier  circuit, reducing the output-voltage ripple.

The EV kit circuit is configured as a full-wave rectifier with an  output  voltage  that  follows  the  input  voltage,  but  is configurable for other topologies.

The EV kit comes with the MAX22256B installed but can be  used  to  evaluate  any  version  of  the  MAX22256 (MAX22256A, MAX22256B, and MAX22256C).

## Features

- 5V to 36V Input Supply Range
- Up to 90% Efficiency
- Full-Wave Rectified Output
- Configurable  for  a  Voltage  Doubler,  Full-Wave,  and Half-Wave Rectifier
- Internal or External Clock Operation Option
- Designed for 1500V RMS  Isolation
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## EV Kit Photo

19-100902; Rev 1; 5/22

## Evaluates: MAX22256 (A/B/C)

## Quick Start

## Required Equipment

- MAX22256 EV Kit
- 24V, 1A DC Power Supply
- Electronic Load Capable of 650mA or higher
- Ammeter
- Voltmeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps to  verify  board  operation. NOTE:  Do  not  turn  on  the power supply until all connections are complete.

1. Verify  that  jumpers  J2  and  J3  are  in  their  default positions, as shown in Table 1 .
2. Set the DC power supply to 24V.
3. Set  the  electronic  load  to  200mA  and  disable  the output.
4. Connect the voltmeter between the VOUT  and GND\_ISO test points (TP9 and TP10, respectively) on the EV kit.
5. Connect  the  ammeter  between  the  VOUT  test  point (TP9) on the EV kit and the positive terminal on the electronic load. The negative terminal on the electronic load is connected to the GND\_ISO test point (TP10).
6. Connect the power supply between the VDD and GND test points (TP1 and TP5) on the EV kit.
7. Turn on the power supply.
8. DS2 then turns, indicating that the V L  voltage is present.
9. Enable the electronic load.
10.  Verify that the ammeter reads approximately 200mA.
11.  Verify that the voltmeter reads around 24V.

<!-- image -->

<!-- image -->

## Table 1. Jumper Connection Guide

| JUMPER   | DEFAULT CONNECTION   | FEATURE                                                    |
|----------|----------------------|------------------------------------------------------------|
| J2       | 1-2                  | EN is high. The MAX22256 is disabled.                      |
| J2       | 2-3*                 | EN is low. The MAX22256 is enabled.                        |
| J3       | Open                 | CLKI is open. Connect an external clock signal to CLKI.    |
| J3       | Closed*              | CLKI is connected to ground. Internal clocking is enabled. |

## Detailed Description of Hardware

The MAX22256 EV kit is an isolated H-bridge DC-DC converter that provides an unregulated output that is two diodevoltage drops fewer than its input supply, with respect to the isolated ground. In the default configuration, the device circuit operates in a PWM configuration, and the maximum load is limited by the device and the onboard transformer. The MAX22256 is an integrated primary-side controller and H-bridge driver for isolated power-supply circuits. The device contains an onboard oscillator, protection circuitry, and internal MOSFETs to provide up to 650mA RMS  of current to the transformer's primary winding. The device can be operated using the internal 450kHz oscillator or driven by an external clock to synchronize multiple devices and control EMI behavior. Regardless of the clock source being used, an internal flip-flop stage guarantees a fixed 50% duty cycle, preventing DC current flow in the transformer as long as the clock's period is constant. The MAX22256 operates from a single-supply voltage and includes UVLO and an active-low enable input for controlled startup. If the input voltage at V DD  falls below 4.65V (typ) or the EN input is pulled above 2V, the device shuts down and ST1 and ST2 are high impedance.

The MAX22256 EV kit PCB is designed for 1500V RMS  isolation, with more than 300mil spacing between the GND and GND\_ISO planes. The bottom PCB GND plane under device U1 is utilized as a thermal heatsink for power dissipation of the device's thermally enhanced TDFN package with exposed pad. Test points for GND and GND\_ISO are provided on the  PCB  for  probing  the  respective  ground  planes,  or  to  connect  the  GND  and  GND\_ISO  planes  for  non-isolated evaluation of the circuit. This EV kit can be used to evaluate the MAX22256A, MAX22256B, and MAX22256C.

## Clock Source

The  MAX22256  has  two  modes  of  operation:  internal  oscillator  or  external  clock.  To  use  the  internal  450kHz  (typ) oscillator, place a shunt in the 1-2 position on jumper J2. When using an external clock, remove the shunt from J2 and apply a clock signal at the CLKI test point (TP4) on the EV kit. An internal flip-flop divides the external clock by two, generating a switching signal with a guaranteed 50% duty cycle. As a result, the ST1 and ST2 outputs switch at half the external clock frequency.

## Overcurrent Limiting

Resistor R5 sets the current-limit threshold to 650mA RMS  (typ). To change the current-limit threshold, replace resistor R5 with a 0805 surface-mount resistor using the following equation:

<!-- formula-not-decoded -->

where I LIM  is the desired current threshold in the range of 150mA RMS  &lt; I LIM  &lt; 650mA RMS .

An overcurrent or overtemperature condition triggers a fault on the device.  During a fault condition, the FAULT pin asserts low and the red LED (DS1) on the EV kit board turns on.

## Onboard LDO for Logic Supply

The EV kit features an onboard LDO (U1) to generate a 5V supply for the logic input/outputs and for powering the LED connected to FAULT . To use a voltage other than 5V, remove the R1 and R10 resistors and connect an external power supply to the V L  test point (TP12) and GND test point (TP5 or TP6).

## MAX22256 Evaluation Kit

## PWM vs. LLC Topology

The MAX22256 can operate in either a LLC or PWM power conversion topology. By default, the EV kit is configured in a PWM topology.

To use the MAX22256 EV kit in a LLC topology, place capacitors across the R23 and R24 pads. The onboard transformer is not optimized for LLC operation and it is recommend to use a low-leakage transformer optimized for LLC operation, such as the 750319825 by Wurth. Refer to the MAX22258 EV kit for component values when using a LLC topology with the 750319825 transformer.

## Evaluating Other Transformer Configurations

The  EV  kit  PCB  layout  provides  an  easy  method  to  reconfigure  the  transformer  T1  secondary  windings  for  other configurations.

## Output Snubbers

For V DD  voltages greater than 27V, use a simple RC snubber circuit on ST1 and ST2 to ensure that the peak voltage is less than 40V during switching.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX22256EVKIT# | EV Kit |

#Denotes RoHS-compliant.

Evaluates: MAX22256 (A/B/C)

## MAX22256 Evaluation Kit

## MAX22256 EV Kit Bill of Materials

| REF_DES                      | DNI/DNP   |   QTY | VALUE            | DESCRIPTION                                                                                                                                                                                                  |
|------------------------------|-----------|-------|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| C1                           | -         |     1 | 0.1UF            | CAP; SMT (0603); 0.1UF; 10%; 100V; X7R; CERAMIC                                                                                                                                                              |
| C2                           | -         |     1 | 4.7UF            | CAP; SMT (0603); 4.7UF; 10%; 10V; X5R; CERAMIC                                                                                                                                                               |
| C3, C6                       | -         |     2 | 1UF              | CAP; SMT (0603); 1UF; 10%; 50V; X7R; CERAMIC                                                                                                                                                                 |
| C10, C11                     | -         |     2 | 10UF             | CAP; SMT (1210); 10UF; 10%; 50V; X7R; CERAMIC                                                                                                                                                                |
| D1-D4                        | -         |     4 | MBRS140T3G       | DIODE; SCH; SMB (DO-214AA); PIV=40V; IF=1A ;                                                                                                                                                                 |
| DS1                          | -         |     1 | LTST-C193KRKT-5A | DIODE; LED; WATER CLEAR; RED; SMT; VF=2V; IF=0.005A                                                                                                                                                          |
| DS2                          | -         |     1 | LTST-C190GKT     | DIODE; LED; WATER CLEAR GREEN; SMT (0603); VF=2.1V; IF=0.03A; -55 DEGC TO +85 DEGC                                                                                                                           |
| J1, J4                       | -         |     2 | 1729018          | CONNECTOR; FEMALE; THROUGH HOLE; GREEN TERMINAL BLOCK; RIGHT ANGLE; 2PINS                                                                                                                                    |
| J2                           | -         |     1 | TSW-103-23-G-S   | CONNECTOR; THROUGH HOLE; SINGLE ROW; STRAIGHT; 3PINS; -55 DEGC TO +125 DEGC                                                                                                                                  |
| J3                           | -         |     1 | TSW-102-23-G-S   | CONNECTOR; THROUGH HOLE; SINGLE ROW; STRAIGHT; 2PINS; -55 DEGC TO +125 DEGC                                                                                                                                  |
| MH1-MH4                      | -         |     4 | 9032             | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                                                                                    |
| R1, R7, R10                  | -         |     3 | 0                | RES; SMT (0603); 0; 5%; JUMPER; 0.1000W                                                                                                                                                                      |
| R2, R6                       | -         |     2 | 820              | RES; SMT (0603); 820; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                            |
| R3                           | -         |     1 | 432K             | RES; SMT (0603); 432K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                           |
| R4                           | -         |     1 | 59K              | RES; SMT (0603); 59K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                            |
| R5                           | -         |     1 | 1.2K             | RES; SMT (0805); 1.2K; 1%; +/-100PPM/DEGC; 0.1250W                                                                                                                                                           |
| R9                           | -         |     1 | 10K              | RES; SMT (0805); 10K; 1%; +/-100PPM/DEGC; 0.1250W                                                                                                                                                            |
| R13, R14, R17, R18, R20, R21 | -         |     6 | 0                | RES; SMT (0402); 0; 5%; JUMPER; 0.0630W                                                                                                                                                                      |
| R23, R24                     | -         |     2 | 0                | RES; SMT (0805); 0; JUMPER; JUMPER; 0.1250W                                                                                                                                                                  |
| T1                           | -         |     1 | 7.5E+08          | EVKIT PART - TRANSFORMER; 750319919; 14L TH; WURTH ELECTRONICS                                                                                                                                               |
| TP1, TP12                    | -         |     2 | N/A              | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                                                                                        |
| TP2-TP4, TP9                 | -         |     4 | N/A              | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                                     |
| TP5, TP6, TP10, TP11         | -         |     4 | N/A              | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                                      |
| U1                           | -         |     1 | MAX17651AZT+     | IC; REG; ULTRA-LOW QUIESCENT CURRENT; LINEAR REGULATOR; TSOT6                                                                                                                                                |
| U2                           | -         |     1 | MAX22256AATB+    | EVKIT PART - IC; MAX22256AATB+; DRV; AUTOMOTIVE; 36V H- BRIDGE TRANSFORMER DRIVER FOR ISOLATED SUPPLIES; PACKAGE CODE: T1033Y+1C; PACKAGE OUTLINE DRAWING; 21-0137; PACKAGE LAND PATTERN: 90-0003; TDFN10-EP |
| PCB                          | -         |     1 | PCB              | PCB:MAX22256                                                                                                                                                                                                 |
| C5, C7, C8                   | DNP       |     0 | 100PF            | CAP; SMT (0603); 100PF; 5%; 100V; C0G; CERAMIC                                                                                                                                                               |
| C12                          | DNP       |     0 | 2200PF           | CAP; THROUGH HOLE-RADIAL LEAD; 2200PF; 10%; 3000V; R; CERAMIC                                                                                                                                                |
| R8                           | DNP       |     0 | 0                | RES; SMT (0603); 0; 5%; JUMPER; 0.1000W                                                                                                                                                                      |
| R11, R12                     | DNP       |     0 | 560              | RES; SMT (0603); 560; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                            |

Evaluates: MAX22256 (A/B/C)

| R15, R16, R19, R22   | DNP   | 0   | 0   | RES; SMT (0402); 0; 5%; JUMPER; 0.0630W   |
|----------------------|-------|-----|-----|-------------------------------------------|

## MAX22256 EV Kit Schematic

<!-- image -->

## MAX22256 Evaluation Kit

## MAX22256 EV Kit PCB Layout

MAX22256 EV Kit PCB Layout-Top Silkscreen

<!-- image -->

MAX22256 EV Kit PCB Layout-Layer 2

<!-- image -->

## Evaluates: MAX22256 (A/B/C)

MAX22256 EV Kit PCB Layout-Top Layer

<!-- image -->

MAX22256 EV Kit PCB Layout-Layer 3

<!-- image -->

## MAX22256 Evaluation Kit

## MAX22256 EV Kit PCB Layout (continued)

MAX22256 EV Kit PCB Layout-Bottom Layer

<!-- image -->

## Evaluates: MAX22256 (A/B/C)

MAX22256 EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

## MAX22256 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/22            | Initial release | -               |
|                 1 | 5/22            | Updated title   | 1-8             |

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.www.analog.com Analog Devices | 9

Evaluates: MAX22256 (A/B/C)