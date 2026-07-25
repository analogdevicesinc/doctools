<!-- lastmod 2022-08-03 -->
## MAX4291 Evaluation Kit

## General Description

The MAX44291 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX44291  precision,  low-noise, low-drift  dual-operational  amplifier  in  an  8-pin  µMAX® package. The EV kit circuit is preconfigured as noninverting amplifiers, but can be adapted to other topologies by changing a few components.

The EV kit comes with a MAX44291AUA+ installed.

## Features and Benefits

- Accommodates Multiple Op Amp Configurations
- Component Pads Allow for Sallen-Key Filter
- Accommodates Easy-to-Use Components
- Proven PCB Layout
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- MAX44291 EV kit
- +4.5V to +36V, 10mA DC power supply (PS1)
- Precision voltage source
- Digital multimeter

Ordering Information appears at end of data sheet.

µ MAX is a registered trademark of Maxim Integrated Products, Inc.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify that all jumpers (JU1-JU3) are in their default positions, as shown in Table 1.
- 2) Set the power supply to +5V. Connect the positive terminal of the power supply to VCC and the negative terminal to GND and VSS.
- 3) Connect the positive terminal of the precision voltage source to INAP. Connect the negative terminal of the precision voltage source to GND. INAM is already connected to GND through jumper JU1.
- 4) Connect the DMM to monitor the voltage on OUTA. With the 10kΩ feedback resistors and 1kΩ series resistors, the gain of the noninverting amplifier is +11V/V.
- 5) Turn on the power supply.
- 6) Apply 100mV from the precision voltage sources. Observe the output at OUTA on the DMM that reads approximately +1.1V.

Note: For  dual-supply  operation,  a  ±2.25V  to  ±18V  can be applied to VDD and VSS, respectively. The rest of the procedure remains the same as that of the single-supply operation.

<!-- image -->

Evaluates: MAX4291

## Detailed Description of Hardware

The  MAX44291  EV  kit  provides  a  proven  layout  for  the MAX44291  precision,  low-noise,  low-drift  op  amp.  The device is a single/dual-supply op amp that is ideal for sensor interfaces, loop-powered systems, and various types of medical and data-acquisition instruments.

The  default  configuration  for  the  device  in  the  EV  kit  is single-supply  operation  in  a  noninverting  configuration. However, the device can operate with a dual supply as long as the voltage across the V DD  and V SS  pins of the IC do not exceed the absolute maximum ratings. When operating with a single supply, short V SS  to GND.

## Op-Amp Configurations

The device is a single/dual-supply op amp that is ideal for differential  sensing,  noninverting  amplification,  buffering, and filtering. A  few  common  configurations  are  shown  in the next few sections.

The  following  sections  explain  how  to  configure  the  op amp.

## Noninverting Configuration

The EV kit comes preconfigured as a noninverting amplifier.  The  gain  is  set  by  the  ratio  of  R5  and  R1. The  EV kit comes preconfigured for a gain of +11V/V. The output voltage for the noninverting configuration is given by the equation below:

<!-- formula-not-decoded -->

## Inverting Configuration

To configure the EV kit as an inverting amplifier, remove the  shunt  on  jumper  JU1  and  install  a  shunt  on  jumper JU2 and feed an input signal on the INAM PCB pad.

## Differential Amplifier

To configure the EV kit as a differential amplifier, replace R1-R3 and R5 with appropriate resistors. When R1 = R2 and  R3  =  R5,  the  CMRR  of  the  differential  amplifier  is determined by the matching of the resistor ratios R1/R2 and R3/R5.

<!-- formula-not-decoded -->

where:

<!-- formula-not-decoded -->

## Sallen-Key Configuration

The Sallen-Key topology is ideal for filtering sensor signals  with  a  second-order  filter  and  acting  as  a  buffer. Schematic complexity is reduced by combining the filter and buffer operations. The EV kit can be configured in a Sallen-Key  topology  by  replacing  and  populating  a  few components. The Sallen-Key topology can be configured as a unity-gain buffer by replacing R5 with a 0Ω resistor and removing resistor R1. The signal is noninverting and applied  to  INAP.  The  filter  component  pads  are  R2-R4 and R8, where some have to be populated with resistors and others with capacitors.

Lowpass Sallen-Key Filter: To configure the Sallen-Key as a lowpass filter,  remove the shunt from jumper JU1, populate the R2 and R8 pads with resistors, and populate the R3 and R4 pads with capacitors. The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

Highpass  Sallen-Key  Filter: To  configure  the  SallenKey as a highpass filter, remove the shunt from jumper JU1,  populate  the  R3  and  R4  pads  with  resistors,  and populate the R2 and R8 pads with capacitors. The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

Evaluates: MAX44291

## MAX44291 Evaluation Kit

Bandpass  Sallen-Key  Filter: To  configure  the  SallenKey as a bandpass filter, remove the shunt from jumper JU1, replace R8, populate the R3 and R4 pads with resistors, and populate the C8 and R2 pads with capacitors. The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

## Transimpedance Amplifier (TIA)

To configure the EV kit as a TIA, place a shunt on jumper JU2 and replace R1 with 0Ω resistors. The output voltage of the TIA is the input current multiplied by the feedback resistor:

<!-- formula-not-decoded -->

where:

I IN   is  the  input  current  source  applied  at  the  INAP test point

I BIAS  is the input bias current

VOS is the input offset voltage of the op amp

Use a capacitor and 0Ω resistor at location R10 or R17 (and C8, if applicable) to stabilize the op amp by rolling off high-frequency gain due to a large cable capacitance.

## Capacitive Loads

Some applications require driving large capacitive loads. The  EV  kit  provides  C8  and  R6  pads  for  an  optional capacitive-load driving circuit. C8 simulates the capacitive load while R6 acts as an isolation resistor to improve the op amp's stability at higher capacitive loads. To improve the stability of the amplifier in such cases, replace R6 with a suitable resistor value to improve amplifier phase margin

Evaluates: MAX44291

## . Table 1. Jumper Descriptions (JU1-JU3)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                     |
|----------|------------------|-----------------------------------------------------------------|
| JU1      | Pin 1            | Disconnects INAM from GND.                                      |
| JU1      | 1-2*             | Connects INA- to GND through R1 for noninverting configuration. |
| JU2      | Pin 1*           | Disconnects INAP from GND.                                      |
| JU2      | 1-2              | Connects INA+ to GND through R2.                                |
| JU3      | 1-2              | Connect SHDN to VDD to place the device into shutdown mode.     |
| JU3      | 2-3*             | Connect SHDN to GND to place into normal operation.             |

* Default position.

Figure 1. MAX44291 EV Kit Schematic

<!-- image -->

## Evaluates: MAX44291

Figure 2. MAX44291 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX44291 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX44291 EV Kit PCB Layout-Component Side

<!-- image -->

## Component List

Refer to file ' evkit\_bom\_max44291\_evkit\_a.csv ' attached to this PDF for component information.

Evaluates: MAX44291

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX44291EVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX44291 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX44291