<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX44280 evaluation kit (EV kit) provides a proven design to evaluate the MAX44280 low-power, low-inputoffset  voltage,  high-bandwidth operational amplifier (op amp)  in  a  6-pin  LGA  package.  The  EV  kit  circuit  is preconfigured as a noninverting amplifier, but can easily  be  adapted  to  other  topologies  by  changing  a  few components.  Low-power,  low-input-offset  voltage,  and rail-to-rail input/output stages make the device ideal for a variety of precision measurement applications. The EV kit comes with a MAX44280AYT+ installed.

| DESIGNATION         |   QTY | DESCRIPTION                                                                                    |
|---------------------|-------|------------------------------------------------------------------------------------------------|
| C1                  |     1 | 0.1 F F Q 10%, 16V X7R ceramic capacitor (0603) Murata GCM188R71C104K                          |
| C2                  |     1 | 4.7 F F Q 10%, 25V X5R ceramic capacitor (0805) Murata GRM21BR61E475K                          |
| C5-C10              |     0 | Not installed, ceramic capacitors (0603) C5, C6, C10 are short (PC trace); C7, C8, C9 are open |
| INM, INP, OUTA, REF |     4 | Red multipurpose test points                                                                   |
| INMB, INPB, OUTAB   |     3 | 50 I PCB vertical-mount BNC connectors                                                         |

## MAX44280 Evaluation Kit

## Evaluates: MAX44280

## Features

- S Accommodates Multiple Op-Amp Configurations
- S Component Pads Allow for Sallen-Key Filter
- S Rail-to-Rail Inputs/Output
- S 5V/V Minimum Stable Gain (Noninverting)
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION    |   QTY | DESCRIPTION                                                               |
|----------------|-------|---------------------------------------------------------------------------|
| JU1            |     1 | 3-pin header                                                              |
| JU2            |     1 | 2-pin header                                                              |
| R1, R2         |     2 | 1k I Q 1% resistors (0603)                                                |
| R3, R4, R7-R10 |     0 | Not installed, resistors (0603)                                           |
| R5             |     1 | 4.02k I Q 1% resistor (0603)                                              |
| R6             |     1 | 0 I Q 5% resistor (0603)                                                  |
| TP8            |     0 | Not installed, miniature test point                                       |
| U1             |     1 | Low-power, rail-to-rail op amp (6 LGA) Maxim MAX44280AYT+ (Top Mark: +AZ) |
| -              |     2 | Shunts                                                                    |
| -              |     1 | PCB: MAX44280 EVALUATION KIT                                              |

## Component Supplier

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX44280 when contacting this component supplier.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## Quick Start

## Required Equipment

- MAX44280	EV	kit
- +5V,	10mA	DC	power	supply	(PS1)
- Precision	voltage	source
- Digital	voltmeter	(DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1)  Verify  that  the  jumpers  are  installed  in  their  default positions, as shown in Table 1.
- 2)  Connect  the  positive  terminal  of  the  +5V  supply  to VCC PCB pad. Connect the negative terminal of the power supply to the GND PCB pad nearest VCC.
- 3)  Connect the positive terminal of the precision voltage source  to  the  INP  test  point.  Connect  the  negative terminal of the precision voltage source to the GND PCB pad.
- 4)  Connect the INM test point to the GND PCB pad.
- 5)  Connect the positive terminal of the DVM to the OUTA test point to monitor the output voltage. Connect the negative terminal of the DVM to the GND PCB pad. With the default 4.02k I feedback resistor (R5) and 1k I series input resistor (R1) of the op amp, the gain is +5V/V (noninverting configuration).
- 6)  Turn on the +5V power supply.
- 7)  Apply  100mV  from  the  precision  voltage  source. Observe  the  output  at  OUTA  on  the  DVM.  OUTA should read approximately +0.5V.
- 8)  Apply  400mV  from  the  precision  voltage  source. OUTA should read approximately +2.0V.

## Table 1. Default Jumper Settings (JU1, JU2)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                   |
|----------|------------------|---------------------------------------------------------------|
| JU1      | 1-2              | Connects SHDN to VCC to enable the device (normal operation). |
| JU1      | 2-3*             | Connects SHDN to GND to disable the device (shutdown).        |
| JU2      | 1-2              | REF is connected to GND.                                      |
| JU2      | Pin 1*           | REF is not connected.                                         |

* Default position.

<!-- image -->

## MAX44280 Evaluation Kit

## Evaluates: MAX44280

## Detailed Description of Hardware

The MAX44280 EV kit provides a proven layout for the MAX44280 low-power, low-input-voltage offset op amp. The device can be operated as a single-supply or dualsupply op amp that is ideal for buffering precision sensor signals.  The  circuit's  Sallen-Key  filter  is  easily  evaluated by changing and removing some components. The Sallen-Key filter is ideal for buffering and filtering sensor signals. BNC connectors are installed to test at high frequency, but not required for DC and low-frequency testing. Various test points are included for easy evaluation.

The  device  is  a  single-supply  op  amp  whose  primary application is operating in the noninverting configuration; however, the device can also operate with a dual supply as long as the voltage across the device's V CC  and GND pins do not exceed the Absolute Maximum Ratings .

## Op-Amp Configurations

The  device  is  a  single-supply  op  amp  that  is  ideal  for differential sensing, noninverting amplification, buffering, and filtering.  The  following  configurations  are  shown  in the next few sections: Noninverting, differential, lowpass Sallen-Key filter, and highpass Sallen-Key filter.

## Noninverting Configuration

The EV kit comes preconfigured as a noninverting amplifier. The gain is set by the ratio of resistors R5 and R1. The EV kit comes preconfigured for a gain of +5V/V. The output voltage for the noninverting configuration is given by the equation below:

<!-- formula-not-decoded -->

## Differential Amplifier

To configure the EV kit as a differential amplifier, replace R1,  R2,  R3,  and  R5  with  appropriate  resistors.  When resistors R1 = R2 and R3 = R5, the CMRR of the differential amplifier is determined by the matching of the resistor ratios R1/R2 and R3/R5.

<!-- formula-not-decoded -->

where:

<!-- formula-not-decoded -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Sallen-Key Filter Configuration

The Sallen-Key filter topology is ideal for filtering sensor signals with a second-order filter and acting as a buffer. Schematic complexity is reduced by combining the filter and buffer operations. The EV kit can be configured in a Sallen-Key topology by replacing and populating a few components. The Sallen-Key topology is typically configured as a unity-gain buffer, but this decompensated op amp requires a minimum gain of 5V/V. The noninverting signal is applied to the INP test point or the INPB BNC connector.  The  filter  component  pads  are  R2,  R3,  R4, and C6, where some have to be populated with resistors and others with capacitors.

## Lowpass Sallen-Key Filter

To configure the Sallen-Key as a lowpass filter, populate the R2 and C6 pads with resistors, and populate the R3 and R4 pads with capacitors. The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX44280 Evaluation Kit

## Evaluates: MAX44280

## Highpass Sallen-Key Filter

To configure the Sallen-Key as a highpass filter, populate the R3 and R4 pads with resistors, and populate the R2 and C6 pads with capacitors. The corner frequency and Q are then given by:

f

C

=

R3

R4

R2

C6

2

1

R

R

C

C

π

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

## Capacitive Loads

Some applications require driving large capacitive loads. To  improve  the  stability  of  the  amplifier  circuit  in  such cases, replace resistor R6 with a suitable resistor value to improve amplifier phase margin. Refer to the MAX44280 IC data sheet for resistor value selection.

## MAX44280 Evaluation Kit

## Evaluates: MAX44280

<!-- image -->

Figure 1. MAX44280 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX44280 EV Kit Component Placement GuideComponent Side

<!-- image -->

## Evalutes: MAX4280

Figure 3. MAX44280 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX44280 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4280 Evalution Kit

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX44280EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX44280 Evaluation Kit

## Evaluates: MAX44280

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/12            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.