<!-- lastmod 2022-08-04 -->
## Evaluates: MAX22258

## General Description

The MAX22258 evaluation kit (EV kit) is a fully assembled and  tested  PCB  that  contains  the  MAX22258,  a  15W isolated H-bridge DC-DC converter. The EV kit operates from an 5V to 36V DC power source and the on-board 1:1 turns-ratio transformer from Wurth sets the output voltage, operating up to a 1A current limit.

The EV kit provides greater than 90% overall efficiency at +24V between 2.2W and up to 8.3W output power using an H-bridge DC-DC converter topology. The MAX22258 EV  kit  operates  in  LLC  mode  by  default.  Input-ripple current and radiated noise are minimized by the inherent balanced nature of the design with no interruption in the input current. The transformer provides galvanic isolation with  the  output  powered  from  a  full-wave  rectifier  circuit, reducing the output-voltage ripple.

The EV kit circuit is configured as a full-wave rectifier, with an  output  voltage  that  follows  the  input  voltage  but  is configurable for other topologies.

## Features and Benefits

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

## MAX22258 Evaluation Kit

## Quick Start

## Required Equipment

- MAX22258 EV Kit
- 24V, 1A DC Power Supply
- Electronic Load Capable of 650mA or higher
- Ammeter
- Voltmeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps to  verify  board  operation. NOTE:  Do  not  turn  on  the power supply until all connections are complete.

1. Verify  that  jumpers  J2  and  J3  are  in  their  default positions, as shown in Table 1 .
2.  Set the DC power supply to 24V.
3.  Set  the  electronic  load  to  200mA  and  disable  the output.
4.  Connect the voltmeter between the  VOUT and GND\_ISO test points (TP9 and TP10, respectively) on the EV kit.
5.  Connect  the  ammeter  between  the  VOUT  test  point (TP9) on the EV kit and the positive terminal on the electronic load. The negative terminal on the electronic load is connected to the GND\_ISO test point (TP10).
6.  Connect the power supply between the VDD and GND test points (TP1 and TP5) on the EV kit.
7.  Turn on the power supply.
8. DS2 then turns, indicating that the V L  voltage is present.
9.  Enable the electronic load.
10.  Verify that the ammeter reads approximately 200mA.
11.  Verify that the voltmeter reads around 24V.

<!-- image -->

Table 1. Jumper Connection Guide

| JUMPER   | DEFAULT CONNECTION   | FEATURE                                                    |
|----------|----------------------|------------------------------------------------------------|
| J2       | Open                 | CLKI is open. Connect an external clock signal to CLKI.    |
| J2       | Closed*              | CLKI is connected to ground. Internal clocking is enabled. |
| J3       | 1-2                  | EN is high. The MAX22258 is disabled.                      |
| J3       | 2-3*                 | EN is low. The MAX22258 is enabled.                        |

## Detailed Description of Hardware

The MAX22258 EV kit is an isolated H-bridge DC-DC converter that provides an unregulated output that is two diodevoltage drops fewer than its input supply, with respect to the isolated ground. In the default configuration, the device circuit operates  in  a  LLC  configuration  and  the  maximum  load  is  limited  by  the  device  and  the  onboard  transformer.  The MAX22258 is an integrated primary-side controller and H-bridge driver for isolated power-supply circuits. The device contains an onboard oscillator, protection circuitry, and internal MOSFETs to provide up to 650mA RMS  of current to the transformer's primary winding. The device can be operated using the internal 450kHz oscillator or driven by an external clock to synchronize multiple devices and control EMI behavior. Regardless of the clock source being used, an internal flip-flop stage guarantees a fixed 50% duty cycle, preventing DC current flow in the transformer as long as the clock's period is constant. The MAX22258 operates from a single-supply voltage and includes UVLO and an active-low enable input for controlled startup. If the input voltage at V DD  falls below 4.65V (typ), or the EN input is pulled above 2V, the device shuts down and ST1 and ST2 are high impedance.

The MAX22258 EV kit PCB is designed for 1500V RMS  isolation, with more than 300mil spacing between the GND and GND\_ISO planes. The bottom PCB GND plane under device U1 is utilized as a thermal heatsink for power dissipation of the device's thermally enhanced TDFN package with exposed pad. Test points for GND and GND\_ISO are provided on the  PCB  for  probing  the  respective  ground  planes,  or  to  connect  the  GND  and  GND\_ISO  planes  for  non-isolated evaluation of the circuit.

## Clock Source

The  MAX22258  has  two  modes  of  operation:  internal  oscillator  or  external  clock.  To  use  the  internal  450kHz  (typ) oscillator, place a shunt in the 1-2 position on jumper J2. When using an external clock, remove the shunt from J2 and apply a clock signal at the CLKI test point (TP4) on the EV kit. An internal flip-flop divides the external clock by two, generating a switching signal with a guaranteed 50% duty cycle. As a result, the ST1 and ST2 outputs switch at half the external clock frequency.

The MAX22258 also features an open-drain clock output (CLKO). CLKO switches at the 450kHz (typ) switching frequency when CLKI is low (J2 jumper is closed), or at the frequency of the external clock applied to CLKI. Monitor the CLKO signal at the CLKO test point (TP2).

## Overcurrent Limiting

Resistor R5 sets the current-limit threshold to 650mA RMS  (typ). To change the current-limit threshold, replace resistor R5 with a 0805 surface-mount resistor using the following equation:

<!-- formula-not-decoded -->

where I LIM  is the desired current threshold in the range of 150mA RMS  &lt; I LIM  &lt; 650mA RMS .

An overcurrent or overtemperature condition triggers a fault on the device.  During a fault condition, the FAULT pin asserts low and the red LED (DS1) on the EV kit board turns on.

## Dead Time Control

The MAX22258 features a resistor-adjustable dead-time (tDEAD). Adjust the dead time by changing the R13 resistor. For any given dead time, calculate the value for R13 as:

<!-- formula-not-decoded -->

The default R13 resistance is 28k  , with a dead time on the MAX22258 EV kit of 70ns (typ).

Evaluates: MAX22258

## MAX22258 Evaluation Kit

## Onboard LDO for Logic Supply

The EV kit features an on-board LDO (U1) to generate a 5V supply for the logic input/outputs and for powering the LED connected to FAULT . To use a voltage other than 5V, remove the R1 and R10 resistors and connect an external power supply to the V L  test point (TP12) and GND test point (TP5 or TP6).

## LLC vs. PWM Topology

The MAX22258 can operate in either a LLC or a pulse width modulated (PWM) power conversion topology. By default, the EV kit is configured in a LLC topology.

To use the MAX22258 EV kit in a PWM topology, short across the C4 and C9 capacitors. The onboard transformer is not optimized for PWM operation and has a low efficiency over the load range in this configuration. It is recommend to use a low-leakage transformer optimized for PWM operation, such as the 750319919 by Wurth.

## Evaluating Other Transformer Configurations

The  EV  kit  PCB  layout  provides  an  easy  method  to  reconfigure  the  transformer  T1  secondary  windings  for  other configurations, including a half-wave rectifier, voltage doubler, bipolar outputs, and other full-wave rectifier configurations.

## Output Snubbers

For V DD  voltages greater than 27V, use a simple RC snubber circuit on ST1 and ST2 to ensure that the peak voltage is less than 40V during switching.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX22258EVKIT# | EV Kit |

#Denotes RoHS-compliant.

Evaluates: MAX22258

## MAX22258 Evaluation Kit

## MAX22258 EV Kit Bill of Materials

| REFDES               | DNI/DNP   |   QTY | VALUE            | DESCRIPTION                                                                                                                                             |
|----------------------|-----------|-------|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| C1                   | -         |     1 | 0.1UF            | CAP; SMT (0603); 0.1UF; 10%; 100V; X7R; CERAMIC                                                                                                         |
| C2                   | -         |     1 | 4.7UF            | CAP; SMT (0603); 4.7UF; 10%; 10V; X5R; CERAMIC                                                                                                          |
| C3, C6               | -         |     2 | 1UF              | CAP; SMT (0603); 1UF; 10%; 50V; X7R; CERAMIC                                                                                                            |
| C4, C9               | -         |     2 | 0.033UF          | CAP; SMT (0805); 0.033UF; 10%; 100V; X7R; CERAMIC                                                                                                       |
| C10                  | -         |     1 | 10UF             | CAP; SMT (1210); 10UF; 10%; 50V; X7R; CERAMIC                                                                                                           |
| D1-D4                | -         |     4 | MBRS140T3G       | DIODE; SCH; SMB (DO-214AA); PIV=40V; IF=1A ;                                                                                                            |
| DS1                  | -         |     1 | LTST-C193KRKT-5A | DIODE; LED; WATER CLEAR; RED; SMT; VF=2V; IF=0.005A                                                                                                     |
| DS2                  | -         |     1 | LTST-C190GKT     | DIODE; LED; WATER CLEAR GREEN; SMT (0603); VF=2.1V; IF=0.03A; -55 DEGC TO +85 DEGC                                                                      |
| J1, J4               | -         |     2 | 1729018          | CONNECTOR; FEMALE; THROUGH HOLE; GREEN TERMINAL BLOCK; RIGHT ANGLE; 2PINS                                                                               |
| J2                   | -         |     1 | TSW-103-23-G-S   | CONNECTOR; THROUGH HOLE; SINGLE ROW; STRAIGHT; 3PINS; -55 DEGC TO +125 DEGC                                                                             |
| J3                   | -         |     1 | TSW-102-23-G-S   | CONNECTOR; THROUGH HOLE; SINGLE ROW; STRAIGHT; 2PINS; -55 DEGC TO +125 DEGC                                                                             |
| MH1-MH4              | -         |     4 | 9032             | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                               |
| R1, R7, R10          | -         |     3 | 0                | RES; SMT (0603); 0; 5%; JUMPER; 0.1000W                                                                                                                 |
| R2, R6, R14          | -         |     3 | 820              | RES; SMT (0603); 820; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                       |
| R3                   | -         |     1 | 432K             | RES; SMT (0603); 432K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                      |
| R4                   | -         |     1 | 59K              | RES; SMT (0603); 59K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                       |
| R5                   | -         |     1 | 1.2K             | RES; SMT (0805); 1.2K; 1%; +/-100PPM/DEGC; 0.1250W                                                                                                      |
| R9                   | -         |     1 | 10K              | RES; SMT (0805); 10K; 1%; +/-100PPM/DEGC; 0.1250W                                                                                                       |
| R13                  | -         |     1 | 28K              | RES; SMT (0805); 28K; 1%; +/-100PPM/DEGC; 0.1250W                                                                                                       |
| T1                   | -         |     1 | 750319825        | EVKIT PART - TRANSFORMER; 750319825; 14L TH; WURTH ELECTRONICS                                                                                          |
| TP1, TP12            | -         |     2 | N/A              | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                                   |
| TP2-TP4, TP9, TP13   | -         |     5 | N/A              | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                |
| TP5, TP6, TP10, TP11 | -         |     4 | N/A              | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                 |
| U1                   | -         |     1 | MAX17651AZT+     | IC; REG; ULTRA-LOW QUIESCENT CURRENT; LINEAR REGULATOR; TSOT6                                                                                           |
| U2                   | -         |     1 | MAX22258AUD+     | DRV; COMPACT; 36V H-BRIDGE TRANSFORMER DRIVER FOR ISOLATED SUPPLIES; TSSOP14-EP; PACKAGE CODE: U14E+3C; PACKAGE OUTLINE: 21-0108; LAND PATTERN:90- 0119 |
| C5, C7, C8           | -         |     1 | 100PF            | CAP; SMT (0603); 100PF; 5%; 100V; C0G; CERAMIC                                                                                                          |
| C11                  | DNP       |     0 | 10UF             | CAP; SMT (1210); 10UF; 10%; 50V; X7R; CERAMIC                                                                                                           |
| C12                  | DNP       |     0 | 2200PF           | CAP; THROUGH HOLE-RADIAL LEAD; 2200PF; 10%; 3000V; R; CERAMIC                                                                                           |
| R8                   | DNP       |     0 | 0                | RES; SMT (0603); 0; 5%; JUMPER; 0.1000W                                                                                                                 |
| R11, R12             | DNP       |     0 | 560              | RES; SMT (0603); 560; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                       |

Evaluates: MAX22258

## MAX22258 Evaluation Kit

## MAX22258 EV Kit Schematic

<!-- image -->

Evaluates: MAX22258

## MAX22258 Evaluation Kit

## MAX22258 EV Kit PCB Layout

MAX22258 EV Kit PCB Layout-Top Silkscreen

<!-- image -->

MAX22258 EV Kit PCB Layout-Layer 2

<!-- image -->

## Evaluates: MAX22258

MAX22258 EV Kit PCB Layout-Top Layer

<!-- image -->

MAX22258 EV Kit PCB Layout-Layer 3

<!-- image -->

## MAX22258 Evaluation Kit

## MAX0000 EV Kit PCB Layout (continued)

MAX22258 EV Kit PCB Layout-Bottom Layer

<!-- image -->

## Evaluates: MAX22258

MAX22258 EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

## MAX22258 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/22            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

Evaluates: MAX22258