<!-- lastmod 2022-08-03 -->
## General Description

The MAX9943 evaluation kit (EV kit) is a fully assembled and  tested  PCB  that  evaluates  the  MAX9943  highvoltage, precision, low drift, and low-power op amp.

<!-- image -->

## MAX9943 Evaluation Kit

## Features

- S Flexible Input and Output Configurations
- S +6V to +38V Single Supply Range
- S ±3V to ±19V Dual Supply Range
- S Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9943EVKIT+ | EV Kit |

## Component List

* EP = Exposed pad.

| DESIGNATION     |   QTY | DESCRIPTION                                                            |
|-----------------|-------|------------------------------------------------------------------------|
| C1, C2          |     2 | 10 F F Q 20%, 25V tantalum capacitors (C size) AVX TAJC106M025R        |
| C3, C4          |     2 | 0.1 F F Q 10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H104K |
| C5              |     0 | Not installed, capacitor (0603)                                        |
| GND             |     5 | Multipurpose test points, black                                        |
| JU1, JU2        |     2 | 3-pin headers                                                          |
| OUT, VIN-, VIN+ |     3 | Multipurpose test points, white                                        |
| R1, R2          |     2 | 1k I Q 5% resistors (0603)                                             |

| DESIGNATION   |   QTY | DESCRIPTION                                                               |
|---------------|-------|---------------------------------------------------------------------------|
| R3            |     1 | 0 I Q 5% resistor (0603)                                                  |
| R4            |     0 | Not installed, 1W through-hole resistor                                   |
| U1            |     1 | High-voltage, precision, low- power op amp (6 TDFN-EP*) Maxim MAX9943ATT+ |
| VCC, VEE      |     2 | Multipurpose test points, red                                             |
| -             |     1 | PCB: MAX9943 EVALUATION KIT+                                              |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| AVX Corporation                        | 843-946-0238 | www.avxcorp.com             |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX9943 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX9943 Evaluation Kit

## Quick Start

## Required Equipment

## Procedure

The  MAX9943  EV  kit  is  fully  assembled  and  tested. Follow the steps below to verify board operation:

- 1) Verify that all jumpers are in their default positions, as shown in Table 1.
- 2) Set the VCC power-supply output to +15V. Disable the output.
- 3) Set the VEE power-supply output to -15V. Disable the output.
- 4) Set  the  waveform-generator  output  to  1kHz  sine wave, V P-P  = +3V. Disable the output.
- 5) Connect  the  positive  terminal  of  the  VCC  power supply to the VCC test point. Connect the ground terminal of the VCC power supply to the GND test point.
- 6) Connect  the  negative  terminal  of  the  VEE  power supply  to  the  VEE  test  point.  Connect  the  ground terminal of the VEE power supply to the GND test point.
- 7) Connect the waveform-generator output to the VIN+ test point.
- 8) Connect  the  waveform-generator  ground  to  the GND test point.

## Table 1. Jumper Descriptions (JU1, JU2)

| CONFIGURATION   | JUMPER   | SHUNT POSITIONS   | DESCRIPTION                                                                                         |
|-----------------|----------|-------------------|-----------------------------------------------------------------------------------------------------|
| Noninverting    | JU1      | 1-2*              | where V VIN+ is the voltage applied at the VIN+ test point. OUT VIN R2 V 1 x V R1 +   = +     |
| Noninverting    | JU2      | 2-3*              | where V VIN+ is the voltage applied at the VIN+ test point. OUT VIN R2 V 1 x V R1 +   = +     |
| Inverting       | JU1      | 2-3               | where V VIN- is the voltage applied at the VIN- test point. OUT VIN R2 V - x V R1 = -               |
| Inverting       | JU2      | 1-2               | where V VIN- is the voltage applied at the VIN- test point. OUT VIN R2 V - x V R1 = -               |

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- MAX9943 EV kit
- +15V power supply (VCC)
- -15V power supply (VEE)
- Waveform generator
- Oscilloscope
- 9) Connect the positive input of the oscilloscope to the OUT test point.
- 10) Connect  the  negative  input  of  the  oscilloscope  to the GND test point.
- 11)  Enable the VCC and VEE power supplies.
- 12) Enable the waveform-generator output.
- 13) Verify that V OUT  = 2 x V VIN+  or a 6V P-P  sine wave.

## Detailed Description of Hardware

## Power Supplies

The MAX9943 EV kit can operate with dual supplies from Q 3V to Q 19V, or with a single supply from +6V to +38V with respect to ground. Appropriate bypass capacitors are provided to the VCC and VEE power-supply inputs.

## Input and Output Configurations

The  EV  kit  provides  jumpers  JU1  and  JU2  for  flexible input configurations. For noninverting-amplifier configuration, place shunts on pins 1-2 of JU1 and pins 2-3 of JU2.  For  inverting-amplifier  configuration,  place  shunts on pins 1-2 of JU2 and pins 2-3 of JU1. Table 1 summarizes the functions of JU1 and JU2.

## Capacitive-Load Driving

The EV kit provides the C5 and R3 footprints for optional capacitive-load driving circuit. C5 simulates the capacitive load while R3 acts as the isolation resistor to improve the  op  amp's  stability  at  higher  capacitive  loads.  For additional details, refer to the Capacitive Load Stability section in the MAX9943 IC data sheet.

<!-- image -->

## MAX9943 Evaluation Kit

Figure 1. MAX9943 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX9943 Evaluation Kit

<!-- image -->

Figure 2. MAX9943 EV Kit Component Placement GuideComponent Side

Figure 3. MAX9943 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX9943 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4