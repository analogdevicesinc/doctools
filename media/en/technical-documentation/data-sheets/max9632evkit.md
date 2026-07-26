<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX9632 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX9632  low-noise,  precision and wide-band op amp. The MAX9632 can be used in a wide variety of applications such as test and measurement,  instrumentation,  medical  imaging,  control  loops, and professional audio. Because of the ultra-low noise and  great  precision,  it  can  either  drive  high-resolution (18 to 24 bits) ADCs or buffer high-resolution DACs. The EV kit circuit can easily be adapted by installing shunts and  changing  a  few  components  to  support  multiple op-amp  configurations:  transimpedance,  noninverting, inverting,  or  differential  amplifier.  The  components  on the EV kit have pads that accommodate 0805 packages, making  them  easy  to  solder  and  replace.  The  EV  kit accepts a single-supply voltage from +4.5V to +36V or a dual-supply voltage from Q 2.25V to Q 18V.

## Evaluates:  MAX9632 MAX9632 Evaluation Kit

Features

- S Accommodates Multiple Op-Amp Configurations
- S +4.5V to +36V Wide Input Supply Range
- S Shutdown Input
- S 0805 Components
- S Proven PCB Layout
- S Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9632EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                               |
|---------------|-------|-------------------------------------------------------------------------------------------|
| C1, C3        |     2 | 0.1 F F Q 10%, 50V X7R ceramic capacitors (0805) Murata GRM21BR71H104K TDK C2012X7R1H104K |
| C2, C4        |     2 | 4.7 F F Q 10%, 50V X5R ceramic capacitors (1210) Murata GRM32ER71H475M TDK C3225X7R1H475M |
| C5, C6, C7    |     0 | Not installed, ceramic capacitors (0805)                                                  |
| JU1, JU2      |     2 | 2-pin headers                                                                             |

| DESIGNATION   |   QTY | DESCRIPTION                                           |
|---------------|-------|-------------------------------------------------------|
| JU3           |     1 | 3-pin header                                          |
| R1            |     0 | Not installed, resistor (0805)                        |
| R2, R4        |     2 | 100 I Q 1% resistors (0805)                           |
| R3, R5        |     2 | 0 I resistors (0805)                                  |
| U1            |     1 | Single high-voltage op amp (8 TDFN) Maxim MAX9632ATA+ |
| -             |     3 | Shunts                                                |
| -             |     1 | PCB: MAX9632 EVALUATION KIT+                          |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note:

Indicate that you are using the MAX9632 when contacting these component suppliers.

## Evaluates:  MAX9632 MAX9632 Evaluation Kit

## Quick Start

## Required Equipment

- MAX9632 EV kit
- ±15V, 40mA DC power supply (PS1)
- +1V precision voltage source
- Digital multimeter (DMM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Connect the positive terminal of the +15V supply to the VCC pad and the GND terminal to the GND pad. Connect the negative terminal of the -15V supply to the VEE pad and the GND terminal to the GND pad. The power supplies should be off.
- 2) Connect the positive terminal of the precision voltage source to the IN- pad. Connect the negative terminal of the precision voltage source to the IN+ pad.
- 3) Install a shunt on jumper JU2 to short IN+ to GND.
- 4) With the 100 I feedback resistor and on-board 100 I resistor, the gain is -1 (inverting configuration).
- 5) Connect the DMM to monitor the voltage on the OUT pad.
- 6) Turn on the Q 15V power supply.
- 7) Apply 1V from the precision voltage source. Observe the output at the OUT pad on the DMM. OUT should read approximately -1V.

## Detailed Description of Hardware

The  MAX9632  EV  kit  provides  a  proven  layout  for  the MAX9632 low-noise op amp to support multiple op-amp configurations.  The  device  accepts  a  single-supply voltage  from  +4.5V  to  +36V,  or  a  dual-supply  voltage from Q 2.25V to Q 18V.

## Jumper Selection

Jumpers  JU1  and  JU2  are  provided  to  allow  flexibility in grounding inputs for multiple op-amp configurations. When  a  shunt  is  installed  on  JU1  or  JU2,  the  corresponding input pad is referenced to ground. See Table 1  for  JU1  and  JU2  configuration.  See  the Op-Amp Configuration section for more information regarding EV kit configuration.

## Shutdown Mode (SHDN)

Jumper JU3 controls the shutdown mode (SHDN) of the device. When SHDN is pulled low, the device is enabled. When  the  SHDN  pin  is  pulled  high,  the  device  is disabled. See Table 2 for JU3 configuration.

## Table 1. JU1/JU2 Jumper Selection

| SHUNT POSITION   | IN-/IN+ INPUT                 |
|------------------|-------------------------------|
| Installed        | Connected to GND              |
| Not installed*   | Signal applied at IN-/IN+ pad |

## Table 2. JU3 Jumper Selection

| SHUNT POSITION   | SHDN PIN         | EV KIT FUNCTION   |
|------------------|------------------|-------------------|
| 1-2              | Connected to VCC | Disabled          |
| 2-3*             | Connected to GND | Enabled           |

## Op-Amp Configuration

## Transimpedance Application

To  configure  the  EV  kit  as  a  transimpedance  amplifier (TIA),  replace  R2  with  a  0 I resistor,  install  a  shunt  on jumper JU2, and capacitor C5 remains open. The output voltage of the TIA is the input current multiplied by the feedback resistor:

<!-- formula-not-decoded -->

where R4 is installed as a 100 I resistor, IIN is defined as IN current, IBIAS is the input bias current, and VOS is the input offset voltage of the op amp. Use capacitor C6 to stabilize  the  op  amp  by  rolling  off  high-frequency  gain due to a large cable capacitance.

## Inverting Configuration

To configure the EV kit as an inverting amplifier, replace R2  and  R4  with  the  desired  1%  gain-setting  resistors, install  a  shunt  on  jumper  JU2,  and  feed  a  voltage  VIN between the IN- and IN+ pads. Install a shunt on JU2 to ground the IN+ input in this configuration. The output voltage is given by the following equation:

<!-- formula-not-decoded -->

The offset voltage VOS can be either positive or negative.

## Evaluates:  MAX9632 MAX9632 Evaluation Kit

## Noninverting Configuration

To  configure  the  device  as  a  noninverting  amplifier, replace  R2  and  R4  with  the  desired  1%  gain-setting resistors, and feed a voltage VIN between the IN+ and IN- pads. Install a shunt on JU1 to ground the IN- input in this configuration. The output voltage is given by the following equation:

<!-- formula-not-decoded -->

## Differential Amplifier

To configure the EV kit as a differential amplifier, replace R1-R4  with  appropriate  resistors.  Make  sure  R1  =  R4 and R2 = R3. The CMRR of the differential amplifier is determined by the matching of the resistor ratios R4/R2 and R1/R3:

<!-- formula-not-decoded -->

## Capacitive Loads

Some applications require driving large capacitive loads. To improve the stability of the amplifier in such cases, replace  R5  with  a  suitable  resistor  value  to  improve amplifier  phase  margin.  The  R5/C7  filter  can  also  be used as an anti-alias filter or to limit amplifier output noise by reducing its output bandwidth.

## MAX9632 Evaluation Kit

## Evaluates:  MAX9632

Figure 1. MAX9632 EV Kit Schematic

<!-- image -->

Figure 2. MAX9632 EV Kit Component Placement GuideComponent Side

<!-- image -->

## Evaluates:  MAX9632 MAX9632 Evaluation Kit

Figure 3. MAX9632 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX9632 EV Kit PCB Layout-Solder Side

<!-- image -->

## Evaluates:  MAX9632 MAX9632 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                            | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------------|-----------------|
|                 0 | 10/10           | Initial release                                        | -               |
|                 1 | 2/14            | Corrected equations and descriptions of configurations | 3               |

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.