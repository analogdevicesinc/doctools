<!-- lastmod 2022-08-03 -->
## MAX44267 Evaluation Kit

## General Description

The MAX44267 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX44267  Beyond-the-Rails™ precision,  low-noise,  low-drift,  dual  operational  amplifier (op-amp) in a 14-pin TSSOP package. The EV kit circuit is preconfigured as noninverting amplifiers, but can be adapted to other topologies by changing a few components.

The EV kit comes with a MAX44267AUD+ installed.

## Features and Benefits

- Accommodate Multiple Op-Amp Configuration
- Up to ±12.5V with a Single Supply (+2.25V to +15V)
- True Zero Output from a Single Supply
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Beyond-the-Rails is a trademark of Maxim Integrated Products, Inc.

Evaluates: MAX44267

## Quick Start

## Required Equipment

- MAX44267 EV kit
- 12V DC power supply
- Two precision voltage sources
- Two digital multimeters (DMMs)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify that all jumpers (JU1-JU5) are in their default positions, as shown in Table 1.
- 2) Connect the positive terminal of the +12V supply to the VDD test point and the negative terminal to the GND test point.
- 3) Connect the positive terminal of the precision voltage source to INAP test point. Connect the negative terminal of the precision voltage source to the GND test point. INAM is already connected to GND via JU1.
- 4) Connect  the  positive  terminal  of  the  second  precision voltage source to the INBP test point. Connect the negative terminal of the precision voltage source to the GND test point. INBM is already connected to GND via JU3.
- 5) Connect the DMMs to monitor the voltages on OUTA and OUTB test points. With the 10kΩ feedback resis -tors and 1kΩ series resistors, the gain of the nonin -verting amplifier is +11V/V.
- 6) Turn on the power supply.
- 7) Set the precision voltage sources to 100mV and enable. Observe the output at OUTA and OUTB on the DMMs. Both should read approximately +1.1V.
- 8) Disable the precision voltage sources and supply.
- 9) Remove shunts from JU1 and JU3, and install shunts on jumper JU2 and JU4. The gain of the inverting amplifier is -10V/V.
- 10)  Apply  each  precision  voltage  source  to  INAM  and INBM test points.
- 11)  Enable  the  precision  voltage  sources.  Observe  the output at OUTA and OUTB on the DMMs. Both should read approximately -1.0V.

<!-- image -->

## Detailed Description of Hardware

The MAX44267 precision, low-noise, low-drift dual operational  amplifier  offers  true-zero  output  that  allows  the output to cross zero and maximize the dynamic range of an ADC and increase resolution.

## Op Amp Configurations

The  MAX44267 is  a  single-supply,  dual  op  amp  that  is ideal  for  differential  sensing,  noninverting  amplification, buffering, and filtering. A few common configurations are shown in the next few sections.

The following sections explain how to configure one of the device's  op  amps  (op  amp A).  To  configure  the  device's second op amp (op amp B), the same equations can be used after modifying the component reference designators.

## Noninverting Configuration

The MAX44267 EV kit comes preconfigured as a noninverting amplifier. The gain is set by the ratio of R5 and R1. The MAX44267 EV kit comes preconfigured for a gain of +11V/V. The output voltage for the noninverting configura -tion is given by the equation below:

<!-- formula-not-decoded -->

## Inverting Configuration

To configure the EV kit as an inverting amplifier, remove the shunt on JU1 and install a shunt on jumper JU2 and feed an input signal on the INAM pad.

## Differential Amplifier

To  configure  the  MAX44267  EV  kit  as  a  differential amplifier,  replace  R1,  R2,  R3,  and  R5  with  appropriate resistors. When R1 = R2 and R3 = R5, the CMRR of the differential amplifier is determined by the matching of the resistor ratios R1/R2 and R3/R5.

<!-- formula-not-decoded -->

where the gain is:

<!-- formula-not-decoded -->

## Sallen-Key Configuration

The  Sallen-Key  topology  is  ideal  for  filtering  sensor signals  with  a  second-order  filter  and  acting  as  a  buffer.  Schematic  complexity  is  reduced  by  combining  the

## Evaluates: MAX44267

filter  and  buffer  operations.  The  MAX44267  EV  kit  can be configured in a Sallen-Key topology by replacing and populating  a  few  components. The  Sallen-Key  topology can be configured as a unity-gain buffer by replacing R5 with a 0Ω resistor and removing resistor R1. The signal is noninverting and applied to INAP. The filter component pads are R2-R4 and R8, where some have to be populated with resistors and others with capacitors.

Lowpass Filter: To  configure  the  Sallen-Key  as  a  lowpass filter, remove jumper JU1, populate the R2 and R8 pads  with  resistors  and  populate  the  R3  and  R4  pads with  capacitors.  The  corner  frequency  and  Q  are  then given by:

<!-- formula-not-decoded -->

Highpass Filter: To configure the Sallen-Key as a highpass filter, remove jumper JU1, populate the R3 and R4 pads  with  resistors  and  populate  the  R2  and  R8  pads with  capacitors.  The  corner  frequency  and  Q  are  then given by:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

Bandpass Filter: To configure the Sallen-Key as a bandpass filter, remove jumper JU1, replace R8, populate R3 and R4 pads with resistors and populate C8 and R2 pads with  capacitors.  The  corner  frequency  and  Q  are  then given by:

<!-- formula-not-decoded -->

│

## MAX44267 Evaluation Kit

## Transimpedance Amplifier

To configure the MAX44267 EV kit as a transimpedance amplifier (TIA), place a shunt on jumper JU2, replace R1 and R2 with a 0 Ω resistor. The output voltage of the TIA is the input current multiplied by the feedback resistor:

<!-- formula-not-decoded -->

where:

I INAP  is the input current source applied at the INAP test point

I BIAS  is the input bias current

Evaluates: MAX44267

Use a capacitor at location R16 or R17 (and C8, if applicable) to stabilize the op amp by rolling off high-frequency gain due to a large cable capacitance.

## Capacitive Loads

Some applications require driving large capacitive loads. The EV kit provides C8 and R6 pads for optional capacitive-load driving circuit. C8 simulates the capacitive load while R6 acts as isolation resistor to improve the op amp's stability at higher capacitive loads. To improve the stability of the amplifier in such cases, replace R6 with a suitable resistor value to improve amplifier phase margin.

VOS is the input offset voltage of the op amp

## Table 1. MAX44267 EV Kit Jumper Description

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                    |
|----------|------------------|----------------------------------------------------------------|
| JU1      | Not Installed    | Disconnects INAM from GND                                      |
| JU1      | Installed*       | Connects INA- to GND through R1 for noninverting configuration |
| JU2      | Not Installed*   | Disconnects INAP from GND                                      |
| JU2      | Installed        | Connects INA+ to GND through R2                                |
| JU3      | Not Installed    | Disconnects INBM from GND                                      |
| JU3      | Installed*       | Connects INB- to GND through R9 for noninverting configuration |
| JU4      | Not Installed*   | Disconnects INBP from GND                                      |
| JU4      | Installed        | Connects INB+ to GND through R10                               |
| JU5      | Not Installed    | Disconnects CPVDD from VDD                                     |
| JU5      | Installed*       | Connects CPVDD to VDD                                          |

*Default position.

│

Figure 1. MAX44267 EV Kit Schematic

<!-- image -->

Figure 2. MAX44267 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX44267 EV Kit PCB Layout-Component Side

<!-- image -->

## Evaluates: MAX44267

Figure 4. MAX44267 EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 5. MAX44267 EV Kit Component Placement GuideSolder Side

<!-- image -->

│

## Component List

Refer  to  the  file ' evkit\_bom\_max44267\_evkit\_a.csv ' attached to this data sheet for component information.

Evaluates: MAX44267

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX44267EVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX44267 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im Integrated reserves the right to change the circuitr\ and specifications without notice at an\ time.

│

Evaluates: MAX44267