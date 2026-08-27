<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX44248 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX44248  low-power,  dual  op amps  in  an  8-pin F MAX M package.  The  EV  kit  circuit is  preconfigured as noninverting amplifiers, but can be adapted  to  other  topologies  by  changing  a  few  components.  The  component  pads  use  a  0805  package, making  them  easy  to  solder  and  replace.  The  EV  kit comes with a MAX44248AUA+ installed.

| DESIGNATION                        |   QTY | DESCRIPTION                                                                                                      |
|------------------------------------|-------|------------------------------------------------------------------------------------------------------------------|
| C1, C10                            |     2 | 0.1 F F Q 10%, 50V X7R ceramic capacitors (0805) Murata GRM21BR71H104K                                           |
| C2, C20                            |     2 | 4.7 F F Q 10%, 50V X7R ceramic capacitors (1210) Murata GRM32ER71H475K                                           |
| C3-C9, C13-C19                     |     0 | Not installed, ceramic capacitors (0805) C3, C4, C9, C13, C14, C19 are short (PC trace); C5-C8, C15-C18 are open |
| GND                                |     6 | Black test points                                                                                                |
| INAN, INAP, INBN, INBP, OUTA, OUTB |     6 | White test points                                                                                                |

## MAX44248 Evaluation Kit

## Evaluates: MAX44248

## Features

- S Accommodates Multiple Op-Amp Configurations
- S Component Pads Allow for Sallen-Key Filter
- S Accommodates Easy-to-Use 0805 Components
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION               |   QTY | DESCRIPTION                                                                |
|---------------------------|-------|----------------------------------------------------------------------------|
| JU1-JU5                   |     5 | 2-pin headers                                                              |
| R1, R2, R11, R12          |     4 | 1k I Q 1% resistors (0805)                                                 |
| R3, R4, R7, R13, R14, R17 |     0 | Not installed, resistors (0805)                                            |
| R5, R15                   |     2 | 10k I Q 1% resistors (0805)                                                |
| R6, R8, R16, R18          |     4 | 0 I Q 5% resistors (0805)                                                  |
| TP1, TP2                  |     0 | Not installed, miniature test points                                       |
| U1                        |     1 | 36V, ultra-precision, low-power, dual op amps (8 F MAX) Maxim MAX44248AUA+ |
| VDD, VSS                  |     2 | Red test points                                                            |
| -                         |     5 | Shunts                                                                     |
| -                         |     1 | PCB: MAX44248 EVALUATION KIT                                               |

## Component Supplier

| SUPPLIER                              | PHONE        | WEBSITE                     |
|---------------------------------------|--------------|-----------------------------|
| Murata Electronics North America Inc. | 770-436-1300 | www.murata-northamerica.com |

Note:

Indicate that you are using the MAX44248 when contacting this component supplier.

µMAX is a registered trademark of Maxim Integrated Products, Inc.

## Quick Start

## Required Equipment

- MAX44248 EV kit
- +5V, 10mA DC power supply (PS1)
- Two precision voltage sources
- Two digital multimeters (DMMs)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1)  Verify that all jumpers (JU1-JU5) are in their default positions, as shown in Table 1.
- 2) Connect  the  positive  terminal  of  the  +5V  supply  to VDD and the negative terminal to GND.
- 3)  Connect the positive terminal of the precision voltage source to INAP. Connect the negative terminal of the precision  voltage  source  to  GND.  INAN  is  already connected to GND through jumper JU1.
- 4)  Connect the positive terminal of the second precision voltage source to INBP. Connect the negative terminal of the precision voltage source to GND. INBN is already connected to GND through jumper JU3
- 5)  Connect the DMMs to monitor the voltages on OUTA and  OUTB.  With  the  10k I feedback  resistors  and 1k I series  resistors,  the  gain  of  each  noninverting amplifier is +11.
- 6)  Turn on the +5V power supply.
- 7)  Apply  100mV  from  the  precision  voltage  sources. Observe  the  output  at  OUTA  and  OUTB  on  the DMMs. Both should read approximately +1.1V.
- 8)  Apply 400mV from the precision voltage sources. Both OUTA and OUTB should read approximately +4.4V.

Note: For  dual-supply  operation, Q 2.7V  to Q 18V  can be applied to VDD and VSS, respectively. In this case, remove  the  shunt  on  jumper  JU5.  The  rest  of  the  procedure  remains  the  same  as  that  of  the  single-supply operation.

## Detailed Description of Hardware

The MAX44248 EV kit provides a proven layout for the MAX44248 low-power, dual op amps. The IC is a single-/ dual-supply dual op amp (op amp A and op amp B) that is  ideal  for  buffering  low-frequency  sensor  signals.  The Sallen-Key topology is easily accomplished by changing and removing a few components. The Sallen-Key topology  is  ideal  for  buffering  and  filtering  sensor  signals. Various test points are included for easy evaluation.

The default configuration for the IC in the EV kit is singlesupply  operation  in  a  noninverting  configuration;  how-

## MAX44248 Evaluation Kit Evaluates: MAX44248

ever, the IC can operate with a dual supply as long as the voltage across the VDD and VSS pins on the IC does not exceed the absolute maximum ratings. When operating with a single supply, short VSS to GND using jumper JU5.

## Op-Amp Configurations

The IC is a single-/dual-supply dual op amp that is ideal for  differential  sensing,  noninverting  amplification,  buffering,  and  filtering.  A  few  common  configurations  are shown in the next few sections.

The following sections explain how to configure one of the device's op amps (op amp A). To configure the device's second op amp (op amp B), the same equations can be used after modifying the component reference designators. For op amp B, the equations should be modified by adding 10 to the number portion of the reference designators (e.g., for the noninverting configuration, equation R1 becomes R11 and R5 becomes R15).

## Noninverting Configuration

The EV kit comes preconfigured as a noninverting amplifier. The gain is set by the ratio of R5 and R1. The EV kit comes preconfigured for a gain of 11. The output voltage for the noninverting configuration is given in the following equation:

<!-- formula-not-decoded -->

## Table 1. Jumper Descriptions (JU1-JU5)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                      |
|----------|------------------|------------------------------------------------------------------|
| JU1      | Pin 1            | Disconnects INAN from GND.                                       |
| JU1      | 1-2*             | Connects INA- to GND through R1 for noninverting configuration.  |
| JU2      | Pin 1*           | Disconnects INAP from GND.                                       |
| JU2      | 1-2              | Connects INA+ to GND through R2.                                 |
| JU3      | Pin 1            | Disconnects INBN from GND.                                       |
| JU3      | 1-2*             | Connects INB- to GND through R11 for noninverting configuration. |
| JU4      | Pin 1*           | Disconnects INBP from GND.                                       |
| JU4      | 1-2              | Connects INB+ to GND through R12.                                |
| JU5      | Pin 1            | Disconnects VSS from GND for dual-supply operation.              |
| JU5      | 1-2*             | Connects VSS to GND for single-supply operation.                 |

## Inverting Configuration

To configure the EV kit as an inverting amplifier, remove the short on jumper JU1 (default position), install a shunt on  jumper  JU2,  and  feed  an  input  signal  on  the  INAN test point.

## Differential Amplifier

To configure the EV kit as a differential amplifier, replace R1,  R2,  R3,  and  R5  with  appropriate  resistors.  When R1 = R2 and R3 = R5, the CMRR of the differential amplifier  is  determined by the matching of the resistor ratios R1/R2 and R3/R5.

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

## Sallen-Key Configuration

The Sallen-Key topology is ideal for filtering sensor signals  with  a  second-order  filter  and  acting  as  a  buffer. Schematic complexity is reduced by combining the filter and buffer operations. The EV kit can be configured in a Sallen-Key topology by replacing and populating a few components. The Sallen-Key topology can be configured as a unity-gain buffer by replacing R5 with a 0 I resistor and removing R1. The signal is noninverting and is applied to INAP. The filter component pads are R2, R3, R4, and R8, where some have to be populated with resistors and others with capacitors.

Lowpass Sallen-Key Filter : To configure the Sallen-Key as a lowpass filter, remove jumper JU1, populate the R2 and R8 pads with resistors, and populate the R3 and R4 pads with capacitors. The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

Highpass Sallen-Key Filter: To configure the Sallen-Key as a highpass filter, remove jumper JU1, populate the R3 and R4 pads with resistors, and populate the R2 and R8 pads with capacitors. The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

## MAX44248 Evaluation Kit Evaluates: MAX44248

Bandpass  Sallen-Key  Filter: To  configure  the  SallenKey as a bandpass filter,  remove  jumper  JU1,  replace R8,  populate  the  R3  and  R4  pads  with  resistors,  and populate the C8 and R2 pads with capacitors. The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

## Transimpedance Amplifier

To  configure  the  EV  kit  as  a  transimpedance  amplifier (TIA),  short  jumper  JU2  and  replace  R1  and  R2  with  a 0 I resistors.  The  output  voltage  of  the  TIA  is  the  input current multiplied by the feedback resistor:

<!-- formula-not-decoded -->

where:

I IN  is the input current source applied at the INAP test point I BIAS  is the input bias current

VOS is the input offset voltage of the op amp

Use capacitor C6 (and C7, if applicable) to stabilize the op amp by rolling off high-frequency gain due to a large cable capacitance.

## Capacitive Loads

Some applications require driving large capacitive loads. The  EV  kit  provides  C7  and  R6  pads  for  an  optional capacitive-load driving circuit. C7 simulates the capacitive load while R6 acts as an isolation resistor to improve the  op  amp's  stability  at  higher  capacitive  loads.  To improve  the  stability  of  the  amplifier  in  such  cases, replace  R6  with  a  suitable  resistor  value  to  improve amplifier phase margin.

## MAX44248 Evaluation Kit Evaluates: MAX44248

Figure 1. MAX44248 EV Kit Schematic

<!-- image -->

Figure 2. MAX44248 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX44248 Evaluation Kit Evaluates: MAX44248

Figure 3. MAX44248 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX44248 EV Kit PCB Layout-Solder Side

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX44248EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX44248 Evaluation Kit Evaluates: MAX44248

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/12            | Initial release | -               |

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.