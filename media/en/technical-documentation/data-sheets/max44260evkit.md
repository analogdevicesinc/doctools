<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX44260  evaluation kit (EV kit) provides a proven  design  to  evaluate  the  MAX44260  low-power, low-input-offset voltage, high-bandwidth operational amplifier (op amp) in a 6-pin SC70 package. The EV kit circuit  is  preconfigured  as  a  noninverting  amplifier,  but can easily be adapted to other topologies by changing few  components.  Low  power,  low-input-offset  voltage, and rail-to-rail input/output stages make the device ideal for a variety of precision measurement applications. The EV kit comes with a MAX44260AXT+ installed.

| DESIGNATION       |   QTY | DESCRIPTION                                                                                    |
|-------------------|-------|------------------------------------------------------------------------------------------------|
| C1, C3            |     2 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GCM188R71C104K                         |
| C2, C4            |     2 | 4.7 F F Q 10%, 25V X5R ceramic capacitors (0805) Murata GRM21BR61E475K                         |
| C5-C10            |     0 | Not installed, ceramic capacitors (0603) C5, C6, C10 are short (PC trace); C7, C8, C9 are open |
| INMB, INPB, OUTAB |     3 | 50 I PCB vertical-mount BNC connectors                                                         |
| INM, INP, OUTA    |     3 | Red multipurpose test points                                                                   |
| JU1               |     1 | 2-pin header                                                                                   |

## MAX44260 Evaluation Kit

## Evaluates: MAX44260

## Features

- S Accommodates Multiple Op-Amp Configurations
- S Component Pads Allow for Sallen-Key Filter
- S Rail-to-Rail Inputs/Output
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION         |   QTY | DESCRIPTION                                                |
|---------------------|-------|------------------------------------------------------------|
| JU2                 |     1 | 3-pin header                                               |
| R1, R2              |     2 | 1k I Q 1% resistors (0603)                                 |
| R3, R4, R7, R9, R10 |     0 | Not installed, resistors (0603)                            |
| R5                  |     1 | 10k I Q 1% resistor (0603)                                 |
| R6, R8              |     2 | 0 I Q 5% resistors (0603)                                  |
| TP8                 |     0 | Not installed, miniature test point                        |
| U1                  |     1 | Low-power, rail-to-rail op amp (6 SC70) Maxim MAX44260AXT+ |
| -                   |     2 | Shunts                                                     |
| -                   |     1 | PCB: MAX44260 EVALUATION KIT                               |

## Component Supplier

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

Note:

Indicate that you are using the MAX44260 when contacting this component supplier.

<!-- image -->

## Quick Start

## Required Equipment

- MAX44260	EV	kit
- +5V,	10mA	DC	power	supply	(PS1)
- Precision	voltage	source
- Digital	voltmeter	(DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1)  Verify that shunts are installed in the default positions on jumpers JU1 and JU2, as shown in Table 1.
- 2)  Jumper	 JU1	 shorts	 VEE	 to	 GND	 for	 single-supply operation. The 1-2 position of JU2 enables the device.
- 3)  Connect the positive terminal of the +5V supply to the VCC PCB pad. Connect the negative terminal of the power	supply	to	the	GND	PCB	pad	nearest	VCC.
- 4)  Connect the positive terminal of the precision voltage source to the INP test point. Connect negative terminal of	the	precision	voltage	source	to	the	GND	PCB	pad.
- 5)  Connect	the	INM	test	point	to	the	GND	PCB	pad.
- 6)  Connect	the	positive	terminal	of	the	DVM	to	the	OUTA test point to monitor the output voltage. Connect the negative	terminal	of	the	DVM	to	the	GND	PCB	pad. With the default 10k I feedback resistor (R5) and 1k I series  input  resistor  (R1)  of  the  op  amp,  the  gain  is +11V/V (noninverting configuration).
- 7)  Turn on the +5V power supply.
- 8)  Apply  100mV  from  the  precision  voltage  source. Observe	 the	 output	 at	 OUTA	 on	 the	 DVM.	 OUTA should read approximately +1.1V.
- 9)  Apply  400mV  from  the  precision  voltage  source. OUTA should read approximately +4.4V.

Table 1. Jumper Descriptions (JU1, JU2)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                           |
|----------|------------------|-----------------------------------------------------------------------|
| JU1      | Installed*       | Connects VEE to GND for single-supply operation.                      |
| JU1      | Not installed    | VEE and GND are independently supplied for dual-supply operation.     |
| JU2      | 1-2*             | Connects the SHDN pin to VCC to enable the device (normal operation). |
| JU2      | 2-3              | Connects the SHDN pin to VEE to disable the device (shutdown).        |

* Default position.

<!-- image -->

## MAX44260 Evaluation Kit

## Evaluates: MAX44260

## Detailed Description of Hardware

The MAX44260 EV kit provides a proven layout for the MAX44260 low-power, low-input-voltage offset op amp. The  device  can  be  operated  as  a  single-supply  or dual-supply op amp that is ideal for buffering precision sensor  signals.  The  circuit's  Sallen-Key  filter  is  easily evaluated by changing and removing some components. The  Sallen-Key  filter  is  ideal  for  buffering  and  filtering sensor  signals.  BNC  connectors  are  installed  to  test at	 high	 frequency,	 but	 not	 required	 for	 DC	 and	 lowfrequency  testing.  Various  test  points  are  included  for easy evaluation.

The  device  is  a  single-supply  op  amp  whose  primary application  is  operating  in  the  noninverting  configuration;  however, the device can operate with dual supply as  long  as  the  voltage  across  the  device's  VCC  and VEE pins do not exceed the Absolute Maximum Ratings . When	operating	with	a	single	supply,	short	VEE	to	GND by installing a shunt on jumper JU1.

## Op-Amp Configurations

The  device  is  a  single-supply  op  amp  that  is  ideal  for differential sensing, noninverting amplification, buffering, and filtering.  The  following  configurations  are  shown  in the next few sections: noninverting, differential, lowpass Sallen-Key filter, and highpass Sallen-Key filter.

## Noninverting Configuration

The EV kit comes preconfigured as a noninverting amplifier. The gain is set by the ratio of resistors R5 and R1. The EV kit comes preconfigured for a gain of +11V/V. The output voltage for the noninverting configuration is given by the equation below:

<!-- formula-not-decoded -->

where V OS  = Input-referred offset voltage

## Differential Amplifier

To configure the EV kit as a differential amplifier, replace R1,  R2,  R3,  and  R5  with  appropriate  resistors.  When resistors R1 = R2 and R3 = R5, the CMRR of the differential amplifier is determined by the matching of the resistor ratios R1/R2 and R3/R5.

<!-- formula-not-decoded -->

where:

<!-- formula-not-decoded -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Sallen-Key Filter Configuration

The Sallen-Key filter topology is ideal for filtering sensor signals with a second-order filter and acting as a buffer. Schematic complexity is reduced by combining the filter and buffer operations. The EV kit can be configured in a  Sallen-Key  topology  by  replacing  and  populating  a few  components.  The  Sallen-Key  topology  is  typically configured as a unity-gain buffer, which can be done by replacing R1 and R5 with 0 I resistors. The noninverting signal is applied to the INP test point or the INPB BNC connector.  The  filter  component  pads  are  R2,  R3,  R4, and R8, where some have to be populated with resistors and others with capacitors.

## Lowpass Sallen-Key Filter

To configure the Sallen-Key as a lowpass filter, populate the R2 and R8 pads with resistors, and populate the R3 and R4 pads with capacitors. The corner frequency and Q are then given by:

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX44260 Evaluation Kit Evaluates: MAX44260

## Highpass Sallen-Key Filter

To configure the Sallen-Key as a highpass filter, populate the R3 and R4 pads with resistors, and populate the R2 and R8 pads with capacitors. The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

## Capacitive Loads

Some applications require driving large capacitive loads. To  improve  the  stability  of  the  amplifier  circuit  in  such cases, replace resistor R6 with a suitable resistor value to improve amplifier phase margin. Refer to the MAX44260 IC data sheet for resistor value selection.

## MAX44260 Evaluation Kit

## Evaluates: MAX44260

<!-- image -->

Figure 1. MAX44260 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX44260 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX44260 Evaluation Kit

## Evaluates: MAX44260

Figure 3. MAX44260 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX44260 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX44260EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX44260 Evaluation Kit

## Evaluates: MAX44260

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/11            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.