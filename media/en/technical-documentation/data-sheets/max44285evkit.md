<!-- lastmod 2022-08-03 -->
## MAX44285 Evaluation Kit

## General Description

The MAX44285 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX44285  dual-channel,  highprecision, high-voltage, current-sense amplifier. This EV kit demonstrates the MAX44285 in an ultra-small, 1mm x 2mm, 8-bump WLP package.

The EV kit PCB comes with a MAX44285TAWA+ installed, which is the 20V/V gain version. Other gain options are available.  Contact  the  factory  for  the  pin-compatible MAX44285LAWA+  (G  =  12.5V/V),  MAX44285FAWA+ (G = 50V/V), and MAX44285HAWA+ (G = 100V/V).

## EV Kit Contents

- MAX44285 EV Kit Board

## Features and Benefits

- Precision Real-Time Current Monitoring
- +2.7V to +76V Input Common-Mode Range
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX44285

## Quick Start

## Required Equipment

The following items are required for operation:

- MAX44285 EV kit
- +3.3V, 1A DC power supply
- +5V, 3A DC power supply
- An electronic load capable of sinking 3A (i.e., HP6060B)
- Two digital voltmeters

## Procedure

The  MAX44285  EV  kit  is  fully  assembled  and  tested. Follow  the  steps  below  to  verify  the  board  operation. Caution: Do not turn on power supply or the electronic load until all connections are made .

- 1) Connect the positive terminal of the +3.3V supply to the VDD test point and the negative terminal of the supply to the nearest GND test point.
- 2) Connect the positive terminal of the +5V supply to the VSENSE+ test point and the negative terminal of the supply to the nearest GND test point.
- 3) Set the electronic load to sink 2.5A.
- 4) Connect the positive terminal of the electronic load to the VSENSE- test point and the negative terminal of the supply to the nearest GND test point.
- 5) Connect the first voltmeter between test points RS1+ and RS1- to measure V SENSE1 .
- 6) Connect the second voltmeter between VOUT1 and the nearest GND test points.
- 7) Turn on the power supplies.
- 8) Enable the electronic load.
- 9) Verify that the first voltmeter displays 125mV and the second voltmeter displays 2.5V.
- 10) Repeat the steps for the second current sense amplifier using the VSENSE2+ and VSENSE2- test points as the inputs and VOUT2 test point as the output.

<!-- image -->

## MAX44285 Evaluation Kit

## Detailed Description of Hardware

The MAX44285 EV kit provides a proven design to evaluate the MAX44285 high-side, dual-channel, current-sense amplifier, which offers precision accuracy specifications of input offset voltage (V OS ) less than 10µV (max) and gain error less than 0.1% (max).

## Applying the VRS+ Supply and the Load

The EV kit  is  installed  with  a  MAX44285TAWA+,  which has a 20V/V gain. The current-sense resistors (R SENSE ) value is 0.05Ω with ±0.5% tolerance. The V OUT for each channel given by:

<!-- formula-not-decoded -->

where A V is the gain and I LOAD  is the current load applied to the device. Normal operating V RS+  and V RS-  range is 2.7V to 76V.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                    |
|---------------|-------|------------------------------------------------|
| C1            |     1 | 0.1µF ±10%, 16V SMT ceramic capacitor (0603)   |
| C2            |     1 | 4.7µF ±10%, 16V SMT ceramic capacitor (0805)   |
| C3-C8         |     6 | 1000pF ±10%, 50V SMT ceramic capacitors (1206) |
| C9, C10       |     2 | 180pF ±10%, 50V SMT ceramic capacitors (0603)  |
| GND, TP1-TP4  |     5 | Test points                                    |
| R1, R2        |     2 | 0.05Ω ±0.5%, 0.5W resistors (1206)             |
| R3-R8         |     6 | 0Ω 0%, 0.10W resistors (0603)                  |

Evaluates: MAX44285

## Measuring the Load Current

The load current is measured as a voltage drop (V SENSE ) across  an  external  sense  resistor.  This  voltage  is  then amplified by the current-sense amplifier and presented at its  VOUT\_ pin. Like all differential amplifiers, the output voltage has two components of error (an offset error and a gain error). The offset error affects accuracy at low currents and a gain error affects accuracy at large currentsboth  errors  affect  accuracy  at  intermediate  currents.  By minimizing both offset and gain errors, accuracy can be optimized over a wide dynamic range.

| DESIGNATION                                              | QTY   | DESCRIPTION                                                       |
|----------------------------------------------------------|-------|-------------------------------------------------------------------|
| RS1+, RS1-, RS2+, RS2-                                   | 4     | Test points                                                       |
| U1                                                       | 1     | Dual-channel, current-sense amplifier (8 WLP) Maxim MAX44285TAWA+ |
| VDD, VOUT1, VOUT2, VSENSE1+ ,VSENSE1, VSENSE2+, VSENSE2- | 7     | Red test points (1.80mm)                                          |
| -                                                        | -     | PCB: MAX44285 EVKIT                                               |

│

Evaluates: MAX44285

Figure 1. MAX44285 EV Kit Schematic

<!-- image -->

<!-- image -->

Figure 2. MAX44285 EV Kit Component Placement GuideComponent Side

Figure 3. MAX44285 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX44285 EV Kit PCB Layout-Solder Side

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX44285EVKIT# | EV Kit |

# RoHS-compliant.

Evaluates: MAX44285

## MAX44285 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/14            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im ,ntegrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX44285