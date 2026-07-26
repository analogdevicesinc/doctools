<!-- lastmod 2022-08-03 -->
## MAX40006 Evaluation Kit

## General Description

The MAX40006 evaluation kit (EV kit) provides a proven design to evaluate the MAX40006 low-power, MOS-input operational  amplifier  (op  amp)  in  a  6-bump  wafer-level package (WLP). The EV kit circuit is preconfigured as a noninverting amplifier, but can easily be adapted to other topologies  by  changing  a  few  components.  Low-power, low-input  V OS ,  and  rail-to-rail  input/output  stages  make this device ideal for a variety of measurement applications. The  component  pads  accommodate  packages,  making them easy to solder and replace. The EV kit comes with a MAX40006ANT+ installed.

## Features

- +1.7V to +5.5V Supply Voltage Range
- Accommodates Multiple Op-Amp Configurations
- Component Pads Allow for Sallen-Key Filter
- Rail-to-Rail Inputs/Outputs
- Proven PCB Layout
- Fully Assembled and Tested

Orderin g Information appears at end of data sheet.

Evaluates: MAX40006

## Quick Start

## Required Equipment

- MAX40006 EV kit
- +5V, 10mA DC power supply (PS1)
- Precision voltage source
- Digital multimeter (DMM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1)  Verify that the jumpers are in their default positions, as shown in Table 1 .
- 2)  Connect the positive terminal of the +5V supply to the V DD PCB pad and the negative terminal to the GND PCB pad closest to V DD .
- 3)  Connect the positive terminal of the precision voltage source  to  the  IN+  PCB  pad.  Connect  the  negative terminal of the precision voltage source to GND (GND or IN- PCB pads).
- 4)  Connect the DMM to monitor the voltage on the OUT PCB pad. With the 10kΩ feedback resistor (R5) and 1kΩ series resistor (R1), the gain is +11 (noninverting configuration).
- 5)  Turn on the +5V power supply.
- 6)  Apply  100mV  from  the  precision  voltage  source. Observe the output at OUT on the DMM. OUT should read approximately +1.1V.
- 7)  Apply 400mV from the precision voltage source. OUT should read approximately +4.4V.

<!-- image -->

## MAX40006 Evaluation Kit

## Detailed Description of Hardware

The MAX40006 EV kit provides a proven layout for the MAX40006 low-power, MOS-input op amp. The device is a single-supply op amp that is ideal for buffering sensor signals. The Sallen-Key topology is easily accomplished by  changing  and  removing  some  components.  The Sallen-Key  topology  is  ideal  for  buffering  and  filtering sensor signals.

## Op-Amp Configurations

The  device  is  a  single-supply  op  amp  that  is  ideal  for differential  sensing,  noninverting amplification, buffering, and filtering. A few common configurations are detailed in the next few sections.

## Noninverting Configuration

The EV kit comes preconfigured as a noninverting amplifier. The gain is set by the ratio of R5/R1. The EV kit comes preconfigured for a gain of +11. For a voltage applied to the IN+ PCB pad, the output voltage for the noninverting configuration is given by the equation below:

<!-- formula-not-decoded -->

where V OS = Input-referred offset voltage.

## Differential Amplifier

To configure the EV kit as a differential amplifier, replace R1,  R2,  R C3 ,  and  R5  with  appropriate  resistors.  When R1  =  R2  and  R C3 =  R5,  the  CMRR  of  the  differential amplifier is determined by the matching of resistor ratios R1/R2 and R C3 /R5:

<!-- formula-not-decoded -->

where:

<!-- formula-not-decoded -->

## Evaluates: MAX40006

## Sallen-Key Configuration

The Sallen-Key topology is ideal for filtering sensor signals with a 2nd-order filter and acting as a buffer. Schematic complexity is reduced by combining the filter and buffer operations. The EV kit can be configured in a Sallen-Key topology by replacing and populating a few components. The Sallen-Key topology is typically configured as a unitygain buffer, which can be done by replacing R1 and R5 with 0Ω resistors. The signal is noninverting and applied to  IN+. The  filter  component  pads  are  R2,  R3,  R4,  and R8, where some have to be populated with resistors and others with capacitors.

## Lowpass Sallen-Key Filter

To configure the Sallen-Key as a lowpass filter, populate the  R2  and  R8  pads  with  resistors  and  the  C3  and  C4 pads  with  capacitors.  The  corner  frequency  and  Q  are then given by:

<!-- formula-not-decoded -->

## Highpass Sallen-Key Filter

To configure the Sallen-Key as a highpass filter, populate the  C3  and  C4  pads  with  resistors  and  the  R2  and  R8 pads  with  capacitors.  The  corner  frequency  and  Q  are then given by:

<!-- formula-not-decoded -->

## Capacitive Loads

Some applications require driving large capacitive loads. To  improve  the  stability  of  the  amplifier  in  such  cases, replace R6 with a suitable resistor value to improve amplifier phase margin in the presence of the capacitive load (C9), or apply a resistive load in parallel with C9.

## Table 1. Jumper Descriptions (JU1, JU2)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                               |
|----------|------------------|-------------------------------------------|
| JU1      | Installed*       | Connects the IN- PCB pad to GND.          |
| JU1      | Not installed    | Isolates the IN- PCB pad from GND.        |
| JU2      | 1-2*             | Connects SHDN to V DD (normal operation). |
| JU2      | 2-3              | Connects SHDN to GND (shutdown).          |
| JU3      | Installed        | Connects the IN+ PCB pad to GND.          |
| JU3      | Not installed*   | Isolates the IN+ PCB pad from GND.        |
| JU4      | Installed*       | Connects V SS to GND.                     |
| JU4      | Not installed    | Isolates V SS from GND.                   |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX40006EVKIT# | EV Kit |

Evaluates: MAX40006

## MAX40006 Evaluation Kit

## MAX40006 EV Kit Bill of Materials

| PART           |   QTY | DESCRIPTION                                                                                                                |
|----------------|-------|----------------------------------------------------------------------------------------------------------------------------|
| C1, C17        |     2 | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                 |
| C2, C18        |     2 | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7UF; 10V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S                                 |
| IN+, IN-       |     2 | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; WHITE; PHOS - PHOR BRONZE WIRE SILVER PLATE FINISH;  |
| JU1, JU3, JU4  |     3 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                   |
| JU2            |     1 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                  |
| OUT, VDD, OUT  |     3 | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                         |
| R1, R2         |     2 | RESISTOR; 0402; 1K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                     |
| R5             |     1 | RESISTOR; 0402; 10K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                    |
| R6, R8         |     2 | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                       |
| TP1-TP3        |     3 | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOS - PHOR BRONZE WIRE SILVER PLATE FINISH; |
| U1             |     1 | EVKIT PART-IC; MAX40006ANT; OZ25; 4UAOPAMP WITH SHUT-DOWN; PACKAGE OUTLINE: 21-100086; PACKAGE CODE: N60D1-1; WLP6         |
| VSS            |     1 | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;    |
| C3, C4, C8, C9 |     0 | PACKAGE OUTLINE 0402 NON-POLAR CAPACITOR                                                                                   |
| R3, R7         |     0 | PACKAGE OUTLINE 0402 RESISTOR                                                                                              |
| PCB            |     1 | PCB Board:MAX40006 EVALUATION KIT                                                                                          |

Evaluates: MAX40006

## MAX40006 EV Kit Schematics

<!-- image -->

Evaluates: MAX40006

## MAX40006 EV Kit PCB Layout

MAX4006 EV Kit-Top

<!-- image -->

MAX4006 EV Kit-Top Silkscreen

<!-- image -->

MAX4006 EV Kit-Bottom

<!-- image -->

MAX4006 EV Kit-Bottom Silkscreen

<!-- image -->

## MAX40006 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/16           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX40006