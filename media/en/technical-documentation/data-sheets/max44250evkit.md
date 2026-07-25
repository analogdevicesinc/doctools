<!-- lastmod 2022-08-03 -->
## MAX44250 Evaluation Kit

## General Description

The MAX44250 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX44250  low-power,  low-drift operational amplifier (op amp) in a 5-pin SOT23 package. The EV kit circuit is preconfigured as noninvert  ing amplifiers,  but  can  be  adapted  to  other  topologies  by  changing  a  few  components. Low power, low-drift input offset voltage,  and  rail-to-rail  input/output  stages  make  this device ideal for applications requiring ultra-low noise and DC precision. The component pads accom  modate 0805 packages, making them easy to solder and replace. The EV kit comes with a MAX44250AUK+ installed.

## Quick Start

## Required Equipment

- MAX44250 EV kit
- +5V, 10mA DC power supply (PS1)
- Precision voltage source
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify that the jumpers are in their default positions, as shown in Table 1.
- 2) VDD and the negative terminal to GND and VSS.

## Table 1. Jumper Descriptions (JU1, JU2, JU5)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                       |
|----------|------------------|-------------------------------------------------------------------|
| JU1      | Installed        | Connects INM to GND for noninverting configuration.               |
| JU1      | Open*            | INM is not connected to GND.                                      |
| JU2      | Installed        | Connects INP to GND for inverting configuration.                  |
| JU2      | Open*            | INP is not connected to GND.                                      |
| JU5      | Installed*       | Connects VSS to GND for single-supply operation.                  |
| JU5      | Open             | VSS and GND are independently supplied for dual-supply operation. |

## Features

- Accommodates Multiple Op-Amp Configurations
- Rail-to-Rail Inputs/Output
- Accommodates Easy-to-Use 0805 Components
- Proven PCB Layout
- Fully Assembled and Tested
- 3) Connect the positive terminal of the precision voltage source to INP. Connect the negative terminal of the precision voltage source to GND.
- 4) Connect INM to GND.
- 5) Connect the DMM to monitor the voltage on OUT. With the 10kΩ feedback resistors and 1kΩ series resistors, the gain of each noninverting amplifier is +11.
- 6) Turn on the +5V power supply.
- 7) Apply  100mV  from  the  precision  voltage  source. Observe the output at OUT on the DMM. OUT should read approximately +1.1V.
- 8) Apply 400mV from the precision voltage source. OUT should read approximately +4.4V.

Ordering Information appears at end of data sheet.

Evaluates: MAX44250

<!-- image -->

## MAX44250 Evaluation Kit

## Detailed Description of Hardware

The  MAX44250 EV kit provides  a  proven  layout  for  the MAX44250 low-power, low-drift single op amp. The IC is an ultra-high-precision  op  amp  with  a  high  (20V)  supply voltage range designed for load cell, medical instrumentation,  and  precision  instrumentation  applications.  Various test points are included for easy evaluation.

The IC is a single-supply single op amp whose primary application is operating in the noninverting configuration; however, the IC can operate with a dual supply as long as the voltage across the VDD and GND pins of the IC do not exceed the Absolute Maximum Ratings . When operating with a single supply, short VSS to GND.

## Op-Amp Configurations

The IC is a single-supply single op amp ideal for differential  sensing,  noninverting  amplification,  buffering,  and filtering. A  few  common configurations are shown in the next few sections.

## Noninverting Configuration

The EV kit comes preconfigured as a noninverting amplifier. The gain is set by the ratio of R5 and R1. The EV kit comes preconfigured for a gain of +11. The output voltage for the noninverting configuration is given by the equation below:

<!-- formula-not-decoded -->

## Differential Amplifier

To configure the EV kit as a differential amplifier, replace R1-R3,  and  R5  with  appropriate  resistors.  When  R1  = R2 and R3 = R5, the CMRR of the differential amplifier is determined by the matching of the resistor ratios R1/R2 and R3/R5.

<!-- formula-not-decoded -->

where:

<!-- formula-not-decoded -->

## Sallen-Key Filter Configuration

The Sallen-Key filter topology is ideal for filtering sensor signals with a second-order filter and acting as a buffer. Schematic complexity is reduced by combining the filter and buffer operations. The EV kit can be configured in a Sallen-Key  topology  by  replacing  and  populating  a  few components. The Sallen-Key topology is typically configured as a unity-gain buffer, which can be done by replacing R1 and R5 with 0Ω resistors . The noninverting signal

Evaluates: MAX44250

is applied to the INP test point. The filter component pads are R2-R4, and R8, where some have to be populated with resistors and others with capacitors.

## Lowpass Sallen-Key Filter

To  configure  the  Sallen-Key  as  a  lowpass  filter,  populate the  R2  and  R8  pads  with  resistors,  and  populate  the  R3 and R4 pads with capacitors. The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

## Highpass Sallen-Key Filter

To configure the Sallen-Key as a highpass filter, populate the R3 and R4 pads with resistors and populate the R2 and R8 pads with capacitors. The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

## Transimpedance Application

To configure op-amp U1-A as a transimpedance amplifier (TIA), replace R1 with a 0Ω resistor and install a shunt on jumper JU2. The output voltage of the TIA is the input current multiplied by the feedback resistor:

<!-- formula-not-decoded -->

where R4 is installed as a 10kΩ resistor, I IN is defined as the input current source applied at the INAM PCB pad, IBIAS is the input bias current, and V OS  is the input offset voltage of the op amp. Use capacitor C7 (and C3, if applicable) to stabilize the op amp by rolling off high-frequency gain due to a large cable capacitance.

## Capacitive Loads

Some applications require driving large capacitive loads. To improve the stability of the amplifier, replace R6 with a suitable resistor value to improve amplifier phase margin. The R6/C8 filter can also be used as an anti-alias filter, or  to  limit  amplifier  output  noise  by  reducing  its  output bandwidth.

│

## MAX44250 Evaluation Kit

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                  |
|---------------|-------|----------------------------------------------------------------------------------------------|
| C1, C17       |     2 | 0.1µF ±10%, 25V X7R ceramic capacitors (0805) Murata GRM21BR71E104K                          |
| C2, C18       |     2 | 4.7µF ±10%, 25V X5R ceramic capacitors (0805) Murata GRM21BR61E475K                          |
| C3-C9         |     0 | Not installed, ceramic capacitors (0805) C4, C5, C9 are short (PC trace); C3, C6-C8 are open |
| JU1, JU2, JU5 |     3 | 2-pin headers, 0.1in centers                                                                 |
| INM, INP, OUT |     3 | 50Ω PCB vertical-mount BNC connectors                                                        |

## Component Supplier

| SUPPLIER        | PHONE        | WEBSITE                |
|-----------------|--------------|------------------------|
| Murata Americas | 770-436-1300 | www.murataamericas.com |

Note:

Indicate that you are using the MAX44250 when contacting this component supplier.

Evaluates: MAX44250

| DESIGNATION           |   QTY | DESCRIPTION                                                                      |
|-----------------------|-------|----------------------------------------------------------------------------------|
| INMA, INPA, OUTA, TP1 |     0 | Not installed, miniature test points                                             |
| R1, R2                |     2 | 1kΩ ±1% resistors (0805)                                                         |
| R3, R4, R7            |     0 | Not installed, resistors (0805)                                                  |
| R5                    |     1 | 10kΩ ±1% resistor (0805)                                                         |
| R6, R8                |     2 | 0Ω ±5% resistors (0805)                                                          |
| U1                    |     1 | Low-power, rail-to-rail I/O op amp (5 SOT23) Maxim MAX44250AUK+ (Top Mark: AFMA) |
| -                     |     3 | Shunts                                                                           |
| -                     |     1 | PCB: MAX44250 EVALUATION KIT                                                     |

│

Evaluates: MAX44250

Figure 1. MAX44250 EV Kit Schematic

<!-- image -->

Figure 2. MAX44250 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX44250 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX44250 EV Kit PCB Layout-Solder Side

<!-- image -->

│

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX44250EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX44250

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 12/13           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitr\ and specifications without notice at an\ time.

<!-- image -->

│

Evaluates: MAX44250