<!-- lastmod 2022-08-03 -->
## General Description

The  MAX9618  evaluation  kit  (EV  kit)  provides  a  proven  design  to  evaluate  the  MAX9618  dual  low-power, zero-drift  operational  amplifiers  (op  amps)  in  an  8-pin SC70  package.  The  EV  kit  circuit  is  preconfigured  as noninverting  amplifiers,  but  can  be  adapted  to  other topologies by changing a few components. Low power, zero  drift,  input  offset  voltage,  and  rail-to-rail  input/ output stages make this device ideal for a variety of lowfrequency  measurement  applications.  The  component pads accommodate 0805 packages, making them easy to solder and replace. The MAX9618 EV kit comes with a MAX9618AXA+ installed.

<!-- image -->

## MAX9618 Evaluation Kit

## Features

- S Accommodates Multiple Op-Amp Configurations
- S Component Pads Allow for Sallen-Key Filter
- S Rail-to-Rail Inputs/Outputs
- S Accomodates Easy-to-Use 0805 Components
- S Proven PCB Layout
- S Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9618EVKIT+ | EV Kit |

## Component List

| DESIGNATION                     |   QTY | DESCRIPTION                                                            |
|---------------------------------|-------|------------------------------------------------------------------------|
| C1, C3                          |     2 | 0.1 F F Q 10%, 25V X7R ceramic capacitors (0805) Murata GRM21BR71E104K |
| C2, C4                          |     2 | 4.7 F F Q 10%, 25V X5R ceramic capacitors (0805) Murata GRM21BR61E475K |
| C5-C10, C15-C20                 |     0 | Not installed, ceramic capacitors (0805)                               |
| JU1, JU2, JU4, JU11, JU12, JU14 |     6 | 2-pin headers, 0.1in centers                                           |
| JU3, JU13                       |     2 | 3-pin headers, 0.1in centers                                           |
| R1, R2, R11, R12                |     4 | 1k I Q 1% resistors (0805)                                             |

| DESIGNATION               |   QTY | DESCRIPTION                                                        |
|---------------------------|-------|--------------------------------------------------------------------|
| R3, R4, R7, R13, R14, R17 |     0 | Not installed, resistors (0805)                                    |
| R5, R15                   |     2 | 10k I Q 1% resistors (0805)                                        |
| R6, R8, R16, R18          |     4 | 0 I Q 5% resistors (0805)                                          |
| TP1, TP2                  |     0 | Not installed, miniature test points                               |
| U1                        |     1 | Dual low-power, rail-to-rail I/O op amp (8 SC70) Maxim MAX9618AXA+ |
| -                         |    10 | Shunts                                                             |
| -                         |     1 | PCB: MAX9618 EVALUATION KIT+                                       |

## Component Supplier

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX9618 when contacting this component supplier.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

## MAX9618 Evaluation Kit

## Quick Start

## Required Equipment

- MAX9618 EV kit
- +5V, 10mA DC power supply (PS1)
- Two precision voltage sources
- Two digital multimeters (DMMs)

## Procedure

The  MAX9618  EV  kit  is  fully  assembled  and  tested. Follow the steps below to verify board operation:

- 1) Verify that the jumpers are in their default position, as shown in Table 1.
- 2) Connect the positive terminal of the +5V supply to VDD and the negative terminal to GND and VSS.
- 3) Connect the positive terminal of the precision voltage source to INAP. Connect the negative terminal of the precision voltage source to GND.

## Table 1. Jumper Descriptions

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                       |
|----------|------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| JU1      | 1-2*             | Connects INAM to R1. Also shorts capacitor C5.                                                                                    |
| JU1      | Open             | Connects INAM to R1 through capacitor C5. When AC-coupling is desired, remove the shunt and install capacitor C5.                 |
| JU2      | 1-2*             | Connects INAP to JU3 position 1. Also shorts capacitor C6.                                                                        |
| JU2      | Open             | Connects INAP to JU3 position 1 through capacitor C6. When AC-coupling is desired, remove the shunt and install capacitor C6.     |
| JU3      | 1-2*             | Connects INAP to JU2 and C6 through R2 and R8                                                                                     |
| JU3      | 2-3              | Connects INAP to GND through R2 and R8                                                                                            |
| JU4      | 1-2*             | Connects OUTA to OUTA                                                                                                             |
| JU4      | Open             | Connects OUTA to OUTA through capacitor C10. When AC-coupling is desired, remove the shunt and install capacitor C10.             |
| JU11     | 1-2*             | Connects INBM to R11. Also shorts capacitor C15.                                                                                  |
| JU11     | 2-3              | Connects INBM to R11 through capacitor C15. When AC-coupling is desired, remove the shunt and install capacitor C15.              |
| JU12     | 1-2*             | Connects INBP to JU13 position 1. Also shorts capacitor C16.                                                                      |
| JU12     | Open             | Connects INBP to JU13 position 1 through capacitor C16. When AC-coupling is desired, remove the shunt and install capacitor C16.  |
| JU13     | 1-2*             | Connects INBP to JU12 and C16 through R12 and R18                                                                                 |
| JU13     | 2-3              | Connects INBP to GND through R12 and R18                                                                                          |
| JU14     | 1-2*             | Connects OUTB (U1, pin 1) to OUTB                                                                                                 |
| JU14     | Open             | Connects OUTB (U1, pin 1) to OUTB through capacitor C20. When AC-coupling is desired, remove the shunt and install capacitor C20. |

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 4) Connect INAM to GND.
- 5) Connect the positive terminal of the second precision voltage source to the INBP pad. Connect the negative terminal of the precision voltage source to GND.
- 6) Connect INBM to GND.
- 5) Connect the DMMs to monitor the voltages on OUTA and OUTB. With the 10kω feedback resistors and 1kω series resistors, the gain of each noninverting amplifier is +11.
- 8) Turn on the +5V power supply.
- 9) Apply  100mV  from  the  precision  voltage  sources. Observe  the  output  at  OUTA  and  OUTB  on  the DMMs. Both should read approximately +1.1V.
- 10)  Apply  400mV  from  the  precision  voltage  sources. Both OUTA and OUTB should read approximately +4.4V.

<!-- image -->

## Detailed Description of Hardware

The  MAX9618  EV  kit  provides  a  proven  layout  for  the MAX9618  low-power,  zero-drift  dual  operational  amplifier  (op  amp). The MAX9618 is a single-supply dual op amp (op-amp A and op-amp B) that is ideal for buffering low-frequency  sensor  signals.  The  Sallen-Key  topology is easily accomplished by changing and removing a few components. The Sallen-Key topology is ideal for buffering  and  filtering  sensor  signals.  Various  test  points  are included for easy evaluation.

The  MAX9618  is  a  single-supply  dual  op  amp  whose primary application is operating in the noninverting configuration;  however,  the  MAX9618  can  operate  with  a dual supply as long as the voltage across the VDD and GND pins of the IC do not exceed the absolute maximum ratings . When operating with a single supply, short VSS to GND.

## Op-Amp Configurations

The  MAX9618  is  a  single-supply  dual  op  amp  that  is ideal for differential sensing, noninverting amplification, buffering, and filtering. A few common configurations are shown in the next few sections.

The  following  sections  explain  how  to  configure  one of  the  device's  op  amps  (op-amp  A).  To  configure  the device's  second  op  amp  (op-amp  B),  the  same  equations can be used after modifying the component reference designators. For op-amp B, the equations should be modified by adding 10 to the number portion of the reference designators (e.g., for the noninverting configuration, equation R1 becomes R11 and R5 becomes R15).

## Noninverting Configuration

The MAX9618 EV kit comes preconfigured as a noninverting amplifier. The gain is set by the ratio of R5 and R1. The MAX9618 EV kit comes preconfigured for a gain of 11. The output voltage for the noninverting configuration is given by the equation below:

<!-- formula-not-decoded -->

## Differential Amplifier

To configure the MAX9618 EV kit as a differential amplifier, replace R1, R2, R3, and R5 with appropriate resistors. When R1 = R2 and R3 = R5, the CMRR of the differential amplifier  is  determined  by  the  matching  of  the  resistor ratios R1/R2 and R3/R5.

<!-- image -->

## MAX9618 Evaluation Kit

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

## Sallen-Key Configuration

The  Sallen-Key  topology  is  ideal  for  filtering  sensor signals  with  a  second-order  filter  and  acting  as  a  buffer. Schematic complexity is reduced by combining the filter and buffer operations. The MAX9618 EV kit can be configured  in  a  Sallen-Key  topology  by  replacing  and populating a few components. The Sallen-Key topology can  be  configured  as  a  unity-gain  buffer  by  replacing R1 and R5 with 0 I resistors. The signal is noninverting and applied to INAP. The filter component pads are R2, R3, R4, and R8, where some have to be populated with resistors and others with capacitors.

Lowpass Sallen-Key Filter: To configure the Sallen-Key as a lowpass filter,  populate  the  R2  and  R8  pads  with resistors and populate the R3 and R4 pads with capacitors. The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

Highpass  Sallen-Key  Filter: To  configure  the  SallenKey as a highpass filter, populate the R3 and R4 pads with  resistors  and  populate  the  R2  and  R8  pads  with capacitors. The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

## Capacitive Loads

Some applications require driving large capacitive loads. To improve the stability of the amplifier in such cases, replace  R6  with  a  suitable  resistor  value  to  improve amplifier phase margin.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX9618 Evaluation Kit

Figure 1. MAX9618 EV Kit Schematic

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX9618 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX9618 Evaluation Kit

Figure 3. MAX9618 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX9618 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

5