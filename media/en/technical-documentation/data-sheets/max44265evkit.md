<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX44265 evaluation kit (EV kit) provides a proven design to evaluate the MAX44265 low-power, MOS-input operational  amplifier  (op  amp)  in  a  6-bump  wafer-level package (WLP). The EV kit circuit is preconfigured as a noninverting amplifier, but can easily be adapted to other topologies by changing a few components. Low power, low-input  VOS,  and  rail-to-rail  input/output  stages  make this  device  ideal  for  a  variety  of  measurement  applications.  The  component  pads  accommodate  0805  packages, making them easy to solder and replace. The EV kit comes with a MAX44265EWT+ installed.

| DESIGNATION    |   QTY | DESCRIPTION                                                            |
|----------------|-------|------------------------------------------------------------------------|
| C1             |     1 | 0.1 F F Q 10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C104K  |
| C2             |     1 | 4.7 F F Q 10%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J475K |
| C3, C4, C8, C9 |     0 | Not installed, ceramic capacitors (0805)                               |
| JU1            |     1 | 2-pin header                                                           |
| JU2            |     1 | 3-pin header                                                           |

## MAX44265 Evaluation Kit

## Evaluates: MAX44265

## Features

- S +1.8V to +5.5V Supply Voltage Range
- S Accommodates Multiple Op-Amp Configurations
- S Component Pads Allow for Sallen-Key Filter
- S Rail-to-Rail Inputs/Outputs
- S Accommodates Easy-to-Use 0805 Components
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                          |
|---------------|-------|----------------------------------------------------------------------|
| R1, R2        |     2 | 1k I Q 1% resistors (0805)                                           |
| R5            |     1 | 10k I Q 1% resistor (0805)                                           |
| R6, R8        |     2 | 0 I Q 5% resistors (0805)                                            |
| U1            |     1 | Single low-power, rail-to-rail I/O op amp (6 WLP) Maxim MAX44265EWT+ |
| -             |     2 | Shunts                                                               |
| -             |     1 | PCB: MAX44265 EVALUATION KIT                                         |

## Component Supplier

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

Note: Indicate that you are using the MAX44265 when contacting this component supplier.

<!-- image -->

## Quick Start

## Required Equipment

- MAX44265 EV kit
- +5V, 10mA DC power supply (PS1)
- Precision voltage source
- Digital multimeter (DMM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1)  Verify that the jumpers are in their default positions, as shown in Table 1.
- 2)  Connect the positive terminal of the +5V supply to the VDD PCB pad and the negative terminal to the GND PCB pad closest to VDD.
- 3)  Connect the positive terminal of the precision voltage source  to  the  IN+  PCB  pad.  Connect  the  negative terminal of the precision voltage source to GND (GND or IN- PCB pads).
- 4)  Connect the DMM to monitor the voltage on the OUT PCB pad. With the 10k I feedback resistor (R5) and 1k I series resistor (R1), the gain is +11 (noninverting configuration).
- 5)  Turn on the +5V power supply.
- 6)  Apply  100mV  from  the  precision  voltage  source. Observe the output at OUT on the DMM. OUT should read approximately +1.1V.
- 7)  Apply 400mV from the precision voltage source. OUT should read approximately +4.4V.

## Detailed Description of Hardware

The MAX44265 EV kit provides a proven layout for the MAX44265 low-power, MOS-input op amp. The device is a single-supply op amp that is ideal for buffering sensor signals. The Sallen-Key topology is easily accomplished by  changing  and  removing  some  components.  The Sallen-Key  topology  is  ideal  for  buffering  and  filtering sensor signals.

## Table 1. Jumper Descriptions (JU1, JU2)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                              |
|----------|------------------|------------------------------------------|
| JU1      | Installed*       | Connects the IN- PCB pad to GND.         |
| JU1      | Not installed    | Isolates the IN- PCB pad from GND.       |
| JU2      | 1-2*             | Connects SHDN to VDD (normal operation). |
| JU2      | 2-3              | Connects SHDN to GND (shutdown).         |

* Default position.

<!-- image -->

## MAX44265 Evaluation Kit

## Evaluates: MAX44265

## Op-Amp Configurations

The  device  is  a  single-supply  op  amp  that  is  ideal  for differential sensing, noninverting amplification, buffering, and filtering. A few common configurations are detailed in the next few sections.

## Noninverting Configuration

The EV kit comes preconfigured as a noninverting amplifier. The gain is set by the ratio of R5/R1. The EV kit comes preconfigured for a gain of +11. For a voltage applied to the IN+ PCB pad, the output voltage for the noninverting configuration is given by the equation below:

<!-- formula-not-decoded -->

where VOS  = Input-referred offset voltage.

## Differential Amplifier

To configure the EV kit as a differential amplifier, replace R1, R2, RC3, and R5 with appropriate resistors. When R1 = R2 and RC3 = R5, the CMRR of the differential amplifier is determined by the matching of resistor ratios R1/R2 and RC3/R5:

<!-- formula-not-decoded -->

where:

<!-- formula-not-decoded -->

## Sallen-Key Configuration

The  Sallen-Key  topology  is  ideal  for  filtering  sensor signals  with  a  2nd-order  filter  and  acting  as  a  buffer. Schematic complexity is reduced by combining the filter and buffer operations. The EV kit can be configured in a  Sallen-Key  topology  by  replacing  and  populating  a few  components.  The  Sallen-Key  topology  is  typically configured  as  a  unity-gain  buffer,  which  can  be  done by replacing R1 and R5 with 0 I resistors. The signal is noninverting  and  applied  to  IN+.  The  filter  component pads are R2, R3, R4, and R8, where some have to be populated with resistors and others with capacitors.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Lowpass Sallen-Key Filter

To configure the Sallen-Key as a lowpass filter, populate the  R2  and  R8  pads  with  resistors  and  the  C3  and  C4 pads with capacitors. The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

## Highpass Sallen-Key Filter

To configure the Sallen-Key as a highpass filter, populate the  C3  and  C4  pads with resistors and the R2 and R8

<!-- image -->

## MAX44265 Evaluation Kit Evaluates: MAX44265

pads with capacitors. The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

## Capacitive Loads

Some applications require driving large capacitive loads. To  improve  the  stability  of  the  amplifier  in  such  cases, replace  R6  with  a  suitable  resistor  value  to  improve amplifier phase margin in the presence of the capacitive load (C9), or apply a resistive load in parallel with C9.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX44265 Evaluation Kit

## Evaluates: MAX44265

<!-- image -->

Figure 1. MAX44265 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX44265 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX44265 Evaluation Kit

## Evaluates: MAX44265

Figure 3. MAX44265 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX44265 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX44265EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX44265 Evaluation Kit

## Evaluates: MAX44265

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/11            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.