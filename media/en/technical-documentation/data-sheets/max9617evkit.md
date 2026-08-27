<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX9617 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX9617  low-power,  zero-drift operational  amplifier  (op  amp)  in  a  6-pin  SC70  package. The EV kit circuit is preconfigured as a noninverting amplifier, but can easily be adapted to other topologies by changing a few components. Low power, zero drift, input  offset  voltage,  and  rail-to-rail  input/output  stages make  this  device  ideal  for  a  variety  of  low-frequency  measurement  applications.  The  component  pads accommodate  0805  packages,  making  them  easy  to solder and replace. The MAX9617 EV kit comes with a MAX9617AXT+ installed.

## Evaluates:  MAX9617 MAX9617 Evaluation Kit

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
| MAX9617EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                            |
|---------------|-------|------------------------------------------------------------------------|
| C1, C3        |     2 | 0.1 F F Q 10%, 25V X7R ceramic capacitors (0805) Murata GRM21BR71E104K |
| C2, C4        |     2 | 4.7 F F Q 10%, 25V X5R ceramic capacitors (0805) Murata GRM21BR61E475K |
| C5-C10        |     0 | Not installed, ceramic capaci- tors (0805)                             |
| R1, R2        |     2 | 1k I Q 1% resistors (0805)                                             |
| R3, R4, R7    |     0 | Not installed, resistors (0805)                                        |
| R5            |     1 | 10k I Q 1% resistor (0805)                                             |
| R6, R8        |     2 | 0 I Q 5% resistors (0805)                                              |
| JU1, JU2, JU4 |     3 | 2-pin headers                                                          |

| DESIGNATION             |   QTY | DESCRIPTION                                                          |
|-------------------------|-------|----------------------------------------------------------------------|
| JU3, JU5                |     2 | 3-pin headers                                                        |
| TP1, TP3, TP5, TP6, TP7 |     5 | Red multipurpose test points                                         |
| TP2, TP4                |     2 | Black multipurpose test points                                       |
| TP8                     |     0 | Not installed, miniature test point                                  |
| U1                      |     1 | Single low-power, rail-to-rail I/O op amp (6 SC70) Maxim MAX9617AXT+ |
| -                       |     5 | Shunts                                                               |
| -                       |     1 | PCB: MAX9617 EVALUATION KIT+                                         |

## Component Supplier

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX9617 when contacting this component supplier.

## Evaluates:  MAX9617 MAX9617 Evaluation Kit

## Quick Start

## Required Equipment

- MAX9617 EV kit
- +5V, 10mA DC power supply (PS1)
- Precision voltage source
- Digital multimeter (DMM)

## Procedure

The  MAX9617  EV  kit  is  fully  assembled  and  tested. Follow the steps below to verify board operation:

- 1)  Verify that the jumpers are in their default position, as shown in Table 1.
- 3)  Connect the positive terminal of the precision voltage source to INP (TP6). Connect the negative terminal of the precision voltage source to GND (TP2 or TP4).
- 4)  Connect INM (TP5) to GND.
- 5)  Connect  the  DMM  to  monitor  the  voltage  on  OUTA (TP7). With the 10k I feedback resistor (R5) and 1k I series resistor (R1), the gain is +11 (noninverting configuration).
- 6)  Turn on the +5V power supply.
- 7)  Apply  100mV  from  the  precision  voltage  source. Observe  the  output  at  OUTA  (TP7)  on  the  DMM. OUTA should read approximately +1.1V.
- 2)  Connect  the  positive  terminal  of  the  +5V  supply  to VDD (TP1) and the negative terminal to GND (TP2) and VSS (TP3).
- 8)  Apply  400mV  from  the  precision  voltage  source. OUTA should read approximately +4.4V.

## Table 1. MAX9617 EV Kit Jumper Descriptions (JU1-JU5)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                  |
|----------|------------------|------------------------------------------------------------------------------------------------------------------------------|
| JU1      | 1-2*             | Connects IN- to R1. Also shorts capacitor C5.                                                                                |
| JU1      | Open             | Connects IN- to R1 through capacitor C5. When AC-coupling is desired, remove the shunt and install capacitor C5.             |
| JU2      | 1-2*             | Connects IN+ to JU3 position 1. Also shorts capacitor C6.                                                                    |
| JU2      | Open             | Connects IN+ to JU3 position 1 through capacitor C6. When AC-coupling is desired, remove the shunt and install capacitor C6. |
| JU3      | 1-2*             | Connects IN+ to INP (TP6) through R2 and R8                                                                                  |
| JU3      | 2-3              | Connects IN+ to GND through R2 and R8                                                                                        |
| JU4      | 1-2*             | Connects OUT to OUTA (TP7)                                                                                                   |
| JU4      | Open             | Connects OUT to OUTA (TP7) through capacitor C10. When AC-coupling is desired, remove the shunt and install capacitor C10.   |
| JU5      | 1-2*             | Always keep jumper in this position (normal operation)                                                                       |
| JU5      | 2-3              | Do not use this jumper position                                                                                              |

## Detailed Description of Hardware

The  MAX9617  EV  kit  provides  a  proven  layout  for  the MAX9617 low-power, zero-drift operational amplifier (op amp).  The  MAX9617  is  a  single-supply  op  amp  that  is ideal  for  buffering  low-frequency  sensor  signals.  The Sallen-Key topology is easily accomplished by changing and removing a few components. The Sallen-Key topology  is  ideal  for  buffering  and  filtering  sensor  signals. Various test points are included for easy evaluation.

The MAX9617 is a single-supply op amp whose primary application is operating in the noninverting configuration;

however, the MAX9617 can operate with a dual supply as long as the voltage across the VDD and GND pins of the  IC  do  not  exceed  the Absolute  Maximum  Ratings. When operating with a single supply, short VSS to GND.

## Op-Amp Configurations

The MAX9617 is a single-supply op amp that is ideal for differential sensing, noninverting amplification, buffering, and filtering. A few common configurations are shown in the next few sections.

## Noninverting Configuration

The MAX9617 EV kit comes preconfigured as a noninverting amplifier. The gain is set by the ratio of R5 and R1. The MAX9617 EV kit comes preconfigured for a gain of 11. The output voltage for the noninverting configuration is given by the equation below:

<!-- formula-not-decoded -->

## Differential Amplifier

To configure the MAX9617 EV kit as a differential amplifier, replace R1, R2, R3, and R5 with appropriate resistors. When R1 = R2 and R3 = R5, the CMRR of the differential amplifier  is  determined  by  the  matching  of  the  resistor ratios R1/R2 and R3/R5.

<!-- formula-not-decoded -->

where:

<!-- formula-not-decoded -->

## Sallen-Key Configuration

The  Sallen-Key  topology  is  ideal  for  filtering  sensor signals  with  a  second-order  filter  and  acting  as  a  buffer. Schematic complexity is reduced by combining the filter and buffer operations. The MAX9617 EV kit can be configured  in  a  Sallen-Key  topology  by  replacing  and populating a few components. The Sallen-Key topology can  be  configured  as  a  unity-gain  buffer  by  replacing R1 and R5 with 0 I resistors. The signal is noninverting and applied to INP. The filter component pads are R2,

## Evaluates:  MAX9617 MAX9617 Evaluation Kit

R3, R4, and R8, where some have to be populated with resistors and others with capacitors.

Lowpass Sallen-Key Filter: To configure the Sallen-Key as a lowpass filter,  populate  the  R2  and  R8  pads  with resistors and populate the R3 and R4 pads with capacitors. The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

Highpass  Sallen-Key  Filter: To  configure  the  SallenKey as a highpass filter, populate the R3 and R4 pads with  resistors  and  populate  the  R2  and  R8  pads  with capacitors. The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

## Capacitive Loads

Some applications require driving large capacitive loads. To improve the stability of the amplifier in such cases, replace  R6  with  a  suitable  resistor  value  to  improve amplifier phase margin.

## Evaluates:  MAX9617 MAX9617 Evaluation Kit

Figure 1. MAX9617 EV Kit Schematic

<!-- image -->

Figure 2. MAX9617 EV Kit Component Placement GuideComponent Side

<!-- image -->

## Evaluates:  MAX9617 MAX9617 Evaluation Kit

Figure 3. MAX9617 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX9617 EV Kit PCB Layout-Solder Side

<!-- image -->

## Evaluates:  MAX9617 MAX9617 Evaluation Kit

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.