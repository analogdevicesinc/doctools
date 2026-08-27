<!-- lastmod 2022-08-03 -->
## General Description

The MAX9613 evaluation kit (EV kit) provides a proven design to evaluate the MAX9613 low-power, MOS-input operational amplifier (op amp) in a 6-pin SC70 package. The  EV  kit  circuit  is  preconfigured  as  a  noninverting amplifier, but can easily be adapted to other topologies by  changing  a  few  components.  Low-power,  low-input Vos, and rail-to-rail input/output stages make this device ideal  for  a  variety  of  measurement  applications.  The component pads accommodate 0805 packages, making them easy to solder and replace. The EV kit comes with a MAX9613AXT+ installed.

<!-- image -->

## MAX9613 Evaluation Kit

## Features

- S Accommodates Multiple Op-Amp Configurations Component Pads Allow for Sallen-Key Filter
- S Rail-to-Rail Inputs/Outputs
- S Accomodates Easy-to-Use 0805 Components
- S Proven PCB Layout
- S Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9613EVKIT+ | EV Kit |

## Component List

| DESIGNATION    |   QTY | DESCRIPTION                                                            |
|----------------|-------|------------------------------------------------------------------------|
| C1             |     1 | 0.1 F F Q 10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C104K  |
| C2             |     1 | 4.7 F F Q 10%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J475K |
| C3, C4, C8, C9 |     0 | Not installed, ceramic capacitors (0805)                               |
| GND            |     2 | Black multipurpose test points                                         |
| INM, INP, OUTA |     3 | White multipurpose test points                                         |
| JU1            |     1 | 2-pin header                                                           |

| DESIGNATION   |   QTY | DESCRIPTION                                                                           |
|---------------|-------|---------------------------------------------------------------------------------------|
| JU2           |     1 | 3-pin header                                                                          |
| R1, R2        |     2 | 1k I Q 1% resistors (0805)                                                            |
| R5            |     1 | 10k I Q 1% resistor (0805)                                                            |
| R6, R8        |     2 | 0 I Q                                                                                 |
| VDD           |     1 | Red multipurpose test point                                                           |
| U1            |     1 | Single low-power, rail-to-rail I/O op amp (6 SC70) Maxim MAX9613AXT+ (Top Mark: +ADK) |
| -             |     2 | Shunts                                                                                |
| -             |     1 | PCB: MAX9613 EVALUATION KIT+                                                          |

## Component Supplier

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note:

Indicate that you are using the MAX9613 when contacting this component supplier.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX9613 Evaluation Kit

## Quick Start

## Required Equipment

- MAX9613	EV	kit
- +5V,	10mA	DC	power	supply	(PS1)
- Precision	voltage	source
- Digital	multimeter	(DMM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1)  Verify that jumpers JU1 and JU2 are in their default positions, as shown in Table 1.
- 2)  Connect the positive terminal of the +5V supply to the VDD test point and the negative terminal to the GND test point closest to VDD.
- 3)  Connect the positive terminal of the precision voltage source  to  the  INP  test  point.  Connect  the  negative terminal of the precision voltage source to GND (GND or INM test points).
- 4)  Connect the DMM to monitor the voltage on the OUTA test point. With the 10k I feedback resistor (R5) and 1k I series resistor (R1), the gain is +11 (noninverting configuration).
- 5)  Turn on the +5V power supply.
- 6)  Apply  100mV  from  the  precision  voltage  source. Observe  the  output  at  OUTA  on  the  DMM,  which should read approximately +1.1V.

## Table 1. EV Kit Jumper Descriptions (JU1, JU2)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                              |
|----------|------------------|------------------------------------------|
| JU1      | 1-2*             | Connects the INM test point to GND.      |
| JU1      | Open             | Isolates the INM test point from GND.    |
| JU2      | 1-2*             | Connects SHDN to VDD (normal operation). |
| JU2      | 2-3              | Connects SHDN to GND (shutdown).         |

* Default position.

- 7)  Apply  400mV  from  the  precision  voltage  source. OUTA should read approximately +4.4V.

## Detailed Description of Hardware

The  MAX9613  EV  kit  provides  a  proven  layout  for  the MAX9613  low-power,  MOS-input  op  amp.  The  device is  a  single-supply  op  amp  that  is  ideal  for  buffering sensor signals.  A  Sallen-Key  2nd-order  active  filter,  as described  in  the Sallen-Key  Configuration section,  is easily  accomplished  by  changing  and  removing  some components. Various  test  points  are  included  for  easy evaluation.

## Op-Amp Configurations

The  device  is  a  single-supply  op  amp  that  is  ideal  for differential sensing, noninverting amplification, buffering, and filtering. A few common configurations are shown in the next few sections.

## Noninverting Configuration

The EV kit comes preconfigured as a noninverting amplifier with a gain of +11. The gain is set by the ratio of R5 and R1 (Figure 1). For a voltage applied to the INP test point, the output voltage for the noninverting configuration is given by the equation below:

<!-- formula-not-decoded -->

## Differential Amplifier

To configure the EV kit as a differential amplifier, replace R1,  R2,  RC3,  and  R5  with  appropriate  resistors.  When R1  =  R2  and  R5  =  RC3,  the  common-mode  rejection

Figure 1. Default Noninverting Configuration with Gain +11

<!-- image -->

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

ratio  (CMRR)  of  the  differential  amplifier  is  determined by the matching of the resistor ratios R5/R1 and RC3/R2 (Figure 2).

<!-- formula-not-decoded -->

where:

<!-- formula-not-decoded -->

Figure 2. Differential Configuration with Gain +10

<!-- image -->

## Sallen-Key Configuration

The Sallen-Key active filter topology is ideal for sensor signal  conditioning  with  a  2nd-order  filter.  These  filters benefit from a rail-to-rail input structure with no crossover distortion, such as that available on the device.

<!-- image -->

Figure 3. Lowpass 2nd-Order Filter Sallen-Key Configuration for 10kHz

<!-- image -->

## MAX9613 Evaluation Kit

## Lowpass Sallen-Key Filter

To configure the Sallen-Key as a lowpass filter, populate the R2 and R8 pads with resistors, and populate the C3 and C4 pads with capacitors. The corner frequency and Q are then given by (Figure 3):

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

## Highpass Sallen-Key Filter

To configure the Sallen-Key as a highpass filter, populate the C3 and C4 pads with resistors, and populate the R2 and R8 pads with capacitors. The corner frequency and Q are then given by (Figure 4):

<!-- formula-not-decoded -->

## Capacitive Loads

Some applications require driving large capacitive loads. To improve the stability of the amplifier in such cases, either replace R6 with a suitable resistor value to improve amplifier  phase  margin  in  the  presence  of  capacitive load C9, or apply a resistive load in parallel with C9.

Figure 4. Generic 2nd-Order Highpass Sallen-Key Filter

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX9613 Evaluation Kit

Figure 5. MAX9613 EV Kit Schematic

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 6. MAX9613 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX9613 Evaluation Kit

Figure 7. MAX9613 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 8. MAX9613 EV Kit PCB Layout-Solder Side&gt;

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX9613 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/10            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

6

<!-- image -->