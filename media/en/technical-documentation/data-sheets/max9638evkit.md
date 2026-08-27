<!-- lastmod 2022-08-03 -->
## General Description

The  MAX9638  evaluation  kit  (EV  kit)  provides  a proven  design  to  evaluate  the  MAX9638  low-power, low-noise,  CMOS  input  op  amp,  which  is  suitable  for photodiode  transimpedance  front-ends  in  portable medical instruments. The EV kit circuit is preconfigured as a noninverting amplifier, but can easily be adapted to  other  topologies  by  changing  a  few  components. The EV kit comes with a MAX9638AVB+ installed.

<!-- image -->

## MAX9638 Evaluation Kit

## Features

- S Accommodates Noninverting and Differential Op-Amp Configurations
- S Component Pads Allow for Lowpass and Highpass Sallen-Key Filter
- S Proven PCB Layout
- S Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9638EVKIT+ | EV Kit |

## Component List

| DESIGNATION                |   QTY | DESCRIPTION                                                            |
|----------------------------|-------|------------------------------------------------------------------------|
| C1, C3                     |     2 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GCM188R71C104K |
| C2, C4                     |     2 | 4.7 F F Q 10%, 16V X7R ceramic capacitors (0805) Murata GRM21BR71C475K |
| C5, C6, C10, C11, C12, C16 |     0 | Not installed, ceramic capacitors-shorted by PCB trace (0603)          |
| C7, C8, C9, C13, C14, C15  |     0 | Not installed, ceramic capacitors (0603)                               |
| JU1-JU4                    |     4 | 3-pin headers                                                          |
| R1, R2, R15, R16           |     4 | 1k I Q 1% resistors (0603)                                             |

| DESIGNATION              |   QTY | DESCRIPTION                                                          |
|--------------------------|-------|----------------------------------------------------------------------|
| R3, R4, R7, R9, R13, R14 |     0 | Not installed, resistors (0603)                                      |
| R5, R10                  |     2 | 10k I Q 1% resistors (0603)                                          |
| R6, R8, R11, R12         |     4 | 0 I Q 5% resistors (0603)                                            |
| TP1-TP8                  |     8 | Red test points                                                      |
| U1                       |     1 | Dual low-power, rail-to-rail I/O op amp (10 UTQFN) Maxim MAX9638AVB+ |
| -                        |     4 | Shunts (JU1-JU4)                                                     |
| -                        |     1 | PCB: MAX9638 EVALUATION KIT+                                         |

## Component Supplier

| SUPPLIER                         | PHONE        | WEBSITE                     |
|----------------------------------|--------------|-----------------------------|
| Murata Electronics North America | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX9638 when contacting this component supplier.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9638 Evaluation Kit

## Quick Start

## Required Equipment

- MAX9638 EV kit
- 3.3V DC power supply (e.g., Agilent E3620A)
- Precision voltage source
- Digital multimeter (DMM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1)  Connect the positive terminal of the power supply to the VDD pad and the ground terminal to the nearest GND and VSS pads.
- 2)  Connect the positive terminal of the precision voltage source to INAP (TP2). Connect the negative terminal of the precision voltage source to the GND pad.
- 3)  Connect the INAM (TP1) to the GND pad.
- 4)  Connect  the  DMM  to  monitor  the  voltage  on  OUTA (TP4). With the 10k I feedback resistor (R5) and 1k I series resistor (R1), the gain is 11 (noninverting configuration).
- 5)  Turn on the 3.3V power supply.
- 6)  Apply  100mV  from  the  precision  voltage  source. Observe  the  output  at  OUTA  on  the  DMM.  OUTA should read approximately 1.1V.
- 7)  Apply  200mV  from  the  precision  voltage  source. OUTA should read approximately 2.2V.

## Table 1. Jumper Descriptions (JU1-JU4)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                     |
|----------|------------------|---------------------------------------------------------------------------------|
| JU1      | 1-2*             | Connects SHDNA of the device to VDD to put U1-A (op amp A) in normal operation. |
| JU1      | 2-3              | Connects SHDNA of the device to VSS to put op amp A in shutdown mode.           |
| JU2      | 1-2*             | Connects SHDNB of the device to VDD to put U1-B (op amp B) in normal operation. |
| JU2      | 2-3              | Connects SHDNB of the device to VSS to put op amp B in shutdown mode.           |
| JU3      | 1-2*             | Connects INA+ to INAP (TP2) through R2 and R8.                                  |
| JU3      | 2-3              | Connects INA+ to GND through R2 and R8.                                         |
| JU4      | 1-2*             | Connects INB+ to INBP (TP6) through R12 and R16.                                |
| JU4      | 2-3              | Connects INB+ to GND through R12 and R16.                                       |

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Detailed Description of Hardware

The  MAX9638  EV  kit  provides  a  proven  design  to evaluate  the  MAX9638  low-power,  low-noise,  CMOS input  op  amp,  which  is  suitable  for  photodiode  transimpedance front-ends in portable medical instruments. The  EV  kit  circuit  is  preconfigured  as  a  noninverting amplifier, but can easily be adapted to other topologies by changing a few components.

## Op-Amp Configurations

The  device  is  a  single-supply  op  amp  that  is  ideal  for differential sensing, noninverting amplification, buffering, and filtering. A few common configurations are shown in the next few sections.

## Noninverting Configuration

The EV kit comes preconfigured as a noninverting amplifier. The gain is set by the ratio of R5 and R1 for op amp A and R10 and R15 for op amp B. The EV kit comes preconfigured for a gain of 11 on both op amps. The output voltage for the noninverting configuration is given by the equation below:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- image -->

## Differential Amplifier

To configure the EV kit as a differential amplifier, replace R1,  R2,  R3,  and  R5  with  appropriate  resistors  for  op amp A and R9, R10, R15, and R16 for op amp B. When R1 = R2 and R5 = R3, and R10 = R9 and R15 = R16, the CMRR of the differential amplifiers is determined by the matching of the resistor ratios R1/R2 and R3/R5, and R9/R10 and R15/R16:

<!-- formula-not-decoded -->

where:

where:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

## Sallen-Key Configuration

The  Sallen-Key  topology  is  ideal  for  filtering  sensor signals  with  a  2nd-order  filter  and  acting  as  a  buffer. Schematic complexity is reduced by combining the filter and buffer operations. The EV kit can be configured in a  Sallen-Key  topology  by  replacing  and  populating  a few  components.  The  Sallen-Key  topology  is  typically configured  as  a  unity-gain  buffer,  which  can  be  done by  replacing  R1  and  R5  with  0 I resistors  for  op  amp A. The signal is noninverting and applied to INAP. The filter  component  pads  are  R2,  R3,  R4,  and  R8,  where some have to be populated with resistors and others with capacitors. The same idea applies for op amp B; replace R10 and R15 with 0 I resistors and the filter component pads are R9, R12, R14, and R16.

<!-- image -->

## MAX9638 Evaluation Kit

## Lowpass Sallen-Key Filter

To  configure  the  op  amp  A  Sallen-Key  as  a  lowpass filter,  populate  the  R2  and  R8  pads  with  resistors  and populate  the  R3  and  R4  pads  with  capacitors.  The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

The same idea applies for op amp B by replacing R9, R12, R14, and R16 with the appropriate components.

## Highpass Sallen-Key Filter

To  configure  the  op  amp  A  Sallen-Key  as  a  highpass filter,  populate  the  R3  and  R4  pads  with  resistors  and populate  the  R2  and  R8  pads  with  capacitors.  The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

The same idea applies for op amp B by replacing R9, R12, R14, and R16 with the appropriate components.

## Capacitive Loads

Some applications require driving large capacitive loads. To improve the stability of the amplifiers in such cases, replace  R6  and  R11  with  a  suitable  resistor  value  to improve amplifier phase margin.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX9638 Evaluation Kit

Figure 1. MAX9638 EV Kit Schematic

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX9638 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX9638 Evaluation Kit

Figure 3. MAX9638 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX9638 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

<!-- image -->

## MAX9638 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/10            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

6

<!-- image -->