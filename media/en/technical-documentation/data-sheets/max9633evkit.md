<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX9633 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX9633  dual,  low-noise,  lowdistortion  op  amp  that  is  optimized  to  drive  ADCs for  use  in  applications  from  DC  to  a  few  MHz.  The exceptionally  fast  settling  time  and  low  input  offset voltage  make  the  device  an  excellent  solution  to  drive high-resolution  12-bit  to  18-bit  SAR  ADCs.  The  EV  kit circuit  is  configured  as  a  unity-gain  buffer,  but  can easily be adapted by installing shunts and changing a few components to support multiple op-amp configurations: transimpedance, noninverting, inverting, or differential amplifier. The components on the EV kit have pads that accommodate 0805 packages, making them easy to solder and replace. The EV kit accepts a +4.5V to +36V single-supply voltage, or a Q 2.25V to Q 18V dual-supply voltage.

## Evaluates:  MAX9633 MAX9633 Evaluation Kit

Features

- S Accommodates Multiple Op-Amp Configurations
- S +4.5V to +36V Wide Input Supply Range
- S 0805 Components
- S Proven PCB Layout
- S Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9633EVKIT+ | EV Kit |

## Component List

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                                               |
|---------------|-------|-------------------------------------------------------------------------------------------|
| C1, C3        |     2 | 0.1 F F Q 10%, 50V X7R ceramic capacitors (0805) Murata GRM21BR71H104K TDK C2012X7R1H104K |
| C2, C4        |     2 | 4.7 F F Q 20%, 50V X7R ceramic capacitors (1210) Murata GRM32ER71H475M TDK C3225X7R1H475M |
| C5-C10        |     0 | Not installed, ceramic capacitors (0805)                                                  |

| DESIGNATION    |   QTY | DESCRIPTION                                              |
|----------------|-------|----------------------------------------------------------|
| JU1-JU4        |     4 | 2-pin headers                                            |
| R1, R2, R6, R7 |     0 | Not installed, resistors (0805)                          |
| R3, R4, R8, R9 |     4 | 100 I Q 1% resistors (0805)                              |
| R5, R10        |     2 | 0 I resistors (0805)                                     |
| U1             |     1 | Dual, high-voltage op amp (8 TDFN-EP*) Maxim MAX9633ATA+ |
| -              |     1 | PCB: MAX9633 EVALUATION KIT+                             |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note:

Indicate that you are using the MAX9633 when contacting these component suppliers.

## Evaluates:  MAX9633 MAX9633 Evaluation Kit

## Quick Start

## Required Equipment

- MAX9633	EV	kit
- ±15V,	40mA	DC	power	supply	(PS1)
- +1V	precision	voltage	source
- Digital	multimeter	(DMM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1)  Connect the positive terminal of the +15V supply to the VCC pad, and the GND terminal to the GND pad. Connect the negative terminal of the -15V supply to the VEE pad, and the GND terminal to the GND pad. The power supplies should be off.
- 2)  Connect the positive terminal of the precision voltage source to the INA+ pad. Connect the negative terminal  of  the  precision  voltage  source  to  the  INApad.
- 3)  Install a shunt on jumper JU1 to short INA- to GND.
- 4)  Connect the DMM to monitor the voltage on the OUTA pad.
- 5)  Turn on the Q 15V power supply.
- 6)  Apply +1V from the precision voltage source. Observe the  output  at  the  OUTA  pad  on  the  DMM.  OUTA should read approximately +1V.
- 7)  Repeat steps 2-7 to evaluate OUTB.

## Detailed Description of Hardware

The  MAX9633  EV  kit  provides  a  proven  layout  for  the MAX9633  dual,  low-noise,  low-distortion  op  amp  to support  multiple  op-amp  configurations.  The  EV  kit accepts  a  +4.5V  to  +36V  single-supply  voltage,  or  a Q 2.25V to Q 18V dual-supply voltage.

## Jumper Selection

## Input Configuration

Jumpers JU1-JU4 are provided to allow flexibility  in  grounding  inputs  for  multiple  op-amp  configurations. When a shunt is installed on the jumper, the corresponding input pad is referenced to ground. See Table 1 for the JU1-JU4 configuration. See the Op-Amp Configuration section for more information regarding EV kit configuration.

## Table 1. Jumper Selection (JU1-JU4)

| SHUNT POSITION   | IN-/IN+ INPUT                 |
|------------------|-------------------------------|
| Installed        | Connected to GND              |
| Not installed*   | Signal applied at IN-/IN+ pad |

* Default position.

## Op-Amp Configuration

## Inverting Configuration

To  configure  op-amp  U1-A  as  an  inverting  amplifier, replace  R2  and  R4  with  the  desired  1%  gain-setting resistors,  install  a  shunt  on  jumper  JU2,  and  feed  a voltage  VIN  between  the  INA-  and  INA+  pads.  Install a  shunt  on  JU2  to  ground  the  INA+  input  in  this configuration. The  output  voltage  is given  by  the following equation:

<!-- formula-not-decoded -->

The offset voltage VOS can be either positive or negative.

To  configure  op-amp  U1-B  as  an  inverting  amplifier, replace  R7  and  R9  with  the  desired  1%  gain-setting resistors,  install  a  shunt  on  jumper  JU4,  and  feed  a voltage  VIN  between  the  INB-  and  INB+  pads.  Install a  shunt  on  JU4  to  ground  the  INB+  input  in  this configuration. The  output  voltage  is given  by  the following equation:

<!-- formula-not-decoded -->

The offset voltage VOS can be either positive or negative.

## Noninverting Configuration

To configure op-amp U1-A as a noninverting amplifier, replace  R2  and  R4  with  the  desired  1%  gain-setting resistors, replace R3 with a 0 I resistor, install a shunt on jumper JU1, and feed a voltage VIN between the INA+ and INA- pads. Install a shunt on JU1 to ground the INAinput in this configuration. The output voltage is given by the following equation:

<!-- formula-not-decoded -->

To configure op-amp U1-B as a noninverting amplifier, replace  R7  and  R9  with  the  desired  1%  gain-setting resistors, replace R8 with a 0 I resistor, install a shunt on jumper JU3, and feed a voltage VIN between the INB+

and INB- pads. Install a shunt on JU3 to ground the INBinput in this configuration. The output voltage is given by the following equation:

<!-- formula-not-decoded -->

## Differential Amplifier

To  configure  op-amp  U1-A  as  a  differential  amplifier, replace  R1-R4  with  appropriate  resistors  and  install  a shunt on jumper JU1. Make sure R1 = R4 and R2 = R3. The CMRR of the differential amplifier is determined by the matching of the resistor ratios R4/R2 and R1/R3:

<!-- formula-not-decoded -->

where:

<!-- formula-not-decoded -->

To  configure  op-amp  U1-B  as  a  differential  amplifier, replace  R6-R9  with  appropriate  resistors  and  install  a shunt on jumper JU3. Make sure R6 = R9 and R7 = R8. The CMRR of the differential amplifier is determined by the matching of the resistor ratios R9/R7 and R6/R8:

<!-- formula-not-decoded -->

where:

<!-- formula-not-decoded -->

## Evaluates:  MAX9633 MAX9633 Evaluation Kit

## Transimpedance Application

To configure  op-amp  U1-A  as  a  transimpedance amplifier (TIA), replace R2 with a 0 I resistor and install a shunt on jumper JU2. The output voltage of the TIA is the input current multiplied by the feedback resistor:

<!-- formula-not-decoded -->

where R4 is installed as a 100 I resistor, IIN is defined as the input current source applied at the INA- pad,  IBIAS is the input bias current, and VOS is the input offset voltage of the op amp. Use capacitor C6 (and C5, if applicable) to stabilize  the  op  amp  by  rolling  off  high-frequency  gain due to a large cable capacitance.

To configure op-amp U1-B as a TIA, replace R7 with a 0 I resistor and install a shunt on jumper JU4. The output voltage of the TIA is the input current multiplied by the feedback resistor:

<!-- formula-not-decoded -->

where R9 is installed as a 100 I resistor, IIN is defined as the input current source applied at the INB- pad,  IBIAS is the input bias current, and VOS is the input offset voltage of the op amp. Use capacitor C9 (and C8, if applicable) to stabilize  the  op  amp  by  rolling  off  high-frequency  gain due to a large cable capacitance.

## Capacitive Loads

Some applications require driving large capacitive loads. To improve the stability of the amplifier in such cases, replace R5 (R10) with a suitable resistor value to improve amplifier phase margin. The R5/C7 (R10/C10) filter can also  be  used  as  an  anti-alias  filter,  or  to  limit  amplifier output noise by reducing its output bandwidth.

## Evaluates:  MAX9633 MAX9633 Evaluation Kit

Figure 1. MAX9633 EV Kit Schematic

<!-- image -->

Figure 2. MAX9633 EV Kit Component Placement GuideComponent Side

<!-- image -->

## Evaluates:  MAX9633 MAX9633 Evaluation Kit

Figure 3. MAX9633 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX9633 EV Kit PCB Layout-Solder Side

<!-- image -->

## Evaluates:  MAX9633 MAX9633 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/10            | Initial release | -               |

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.