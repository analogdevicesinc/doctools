<!-- lastmod 2022-08-03 -->
## MAX44292 Evaluation Kit

## General Description

The MAX44292 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX44292  ultra-precision,  lownoise, low-drift dual-operational amplifier (op amp) in an 8-pin  SO  package.  The  EV  kit  circuit  is  preconfigured as  noninverting  amplifiers,  but  can  be  adapted  to  other topologies by changing a few components.

The  EV  kit  comes  with  a  MAX44292ASA+  installed. The performance on this EV kit matches the single and quad  channels  op  amps  within  the  same  family.  The MAX44291AUA+ is the single version and is available in the 8-pin µMAX® package. The MAX44294ASD+ is the quad version and is available in the 14-pin SO package.

## Features and Benefits

- Accommodates Multiple Op-Amp Configurations
- Component Pads Allow for Sallen-Key Filter
- Accommodates Easy-to-Use Components
- Proven PCB Layout
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- MAX44292 EV kit
- +36V, 10mA DC power supply (PS1)
- Two precision voltage sources
- Two digital multimeters (DMMs)

Ordering Information appears at end of data sheet.

µMAX is a registered trademark of Maxim Integrated Products, Inc.

Evaluates: MAX44292/MAX44294

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify that all jumpers (JU1-JU4) are in their default positions, as shown in Table 1.
- 2) Connect the positive terminal of the +36V supply to VCC and the negative terminal to GND and VSS.
- 3) Connect the positive terminal of the precision voltage source to INAP. Connect the negative terminal of the precision voltage source to GND. INAM is already connected to GND through jumper JU1.
- 4) Connect the positive terminal of the second precision voltage source to the INBP PCB pad. Connect the negative terminal of the precision voltage source to GND. INBM is already connected to GND through jumper JU3.
- 5) Connect the DMMs to monitor the voltages on OUTA and OUTB. With the 10kΩ feedback resistors and 1kΩ series resistors, the gain of each noninverting amplifier is +11.
- 6) Turn on the +36V power supply.
- 7) Apply 100mV from the precision voltage sources. Observe the output at OUTA and OUTB on the DMMs. Both should read approximately +1.1V.
- 8) Apply 400mV from the precision voltage sources. Both OUTA and OUTB should read approximately +4.4V.

Note: For dual-supply operation, a ±2.25V to ±18V can be applied to VDD and VSS, respectively.

<!-- image -->

## MAX44292 Evaluation Kit

## Detailed Description of Hardware

The  MAX44292  EV  kit  provides  a  proven  layout  for  the MAX44292  ultra-precision,  low-noise,  low-drift,  dual  op amp. The device is a single/dual-supply, dual op amp (op amp A and op amp B) that is ideal for sensor interfaces, loop-powered systems, and various types of medical and data-acquisition instruments.

The  default  configuration  for  the  device  in  the  EV  kit is  single-supply  operation  in  noninverting  configuration. However, the device can operate with a dual supply as long as the voltage across the V DD  and GND pins of the IC do not exceed the absolute maximum ratings. When operating with a single supply, short V SS to GND.

## Op-Amp Configurations

The device is a single/dual-supply dual op amp that is ideal for  differential  sensing,  noninverting  amplification,  buffer -ing, and filtering. A few common configurations are shown in the next few sections.

The following sections explain how to configure one of the device's  op  amps  (op  amp A).  To  configure  the  device's second op amp (op amp B), the same equations can be used after modifying the component reference designators.

## Noninverting Configuration

The EV kit comes preconfigured as a noninverting amplifier. The gain is set by the ratio of R5 and R1. The EV kit comes preconfigured for a gain of +11. The output voltage for the noninverting configuration is given by the equation below:

<!-- formula-not-decoded -->

## Inverting Configuration

To configure the EV kit as an inverting amplifier, remove the  shunt  on  jumper  JU1  and  install  a  shunt  on  jumper JU2 and feed an input signal on the INAM PCB pad.

## Differential Amplifier

To configure the EV kit as a differential amplifier, replace R1-R3 and R5 with appropriate resistors. When R1 = R2 and  R3  =  R5,  the  CMRR  of  the  differential  amplifier  is determined by the matching of the resistor ratios R1/R2 and R3/R5.

where:

<!-- formula-not-decoded -->

## Sallen-Key Configuration

The Sallen-Key topology is ideal for filtering sensor sig -nals  with  a  second-order  filter  and  acting  as  a  buffer. Schematic complexity is reduced by combining the filter and buffer operations. The EV kit can be configured in a Sallen-Key  topology  by  replacing  and  populating  a  few components. The Sallen-Key topology can be configured as a unity-gain buffer by replacing R5 with a 0Ω resistor and removing resistor R1. The signal is noninverting and applied  to  INAP.  The  filter  component  pads  are  R2-R4 and R8, where some have to be populated with resistors and others with capacitors.

Lowpass Sallen-Key Filter: To configure the Sallen-Key as a lowpass filter,  remove the shunt from jumper JU1, populate the R2 and R8 pads with resistors, and populate the R3 and R4 pads with capacitors. The corner frequen -cy and Q are then given by:

<!-- formula-not-decoded -->

Highpass  Sallen-Key  Filter: To  configure  the  SallenKey as a highpass filter, remove the shunt from jumper JU1,  populate  the  R3  and  R4  pads  with  resistors,  and populate the R2 and R8 pads with capacitors. The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

## Evaluates: MAX44292/MAX44294

<!-- formula-not-decoded -->

│

## MAX44292 Evaluation Kit

Bandpass  Sallen-Key  Filter: To  configure  the  SallenKey as a bandpass filter, remove the shunt from jumper JU1, replace R8, populate the R3 and R4 pads with resis -tors, and populate the C8 and R2 pads with capacitors. The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

## Transimpedance Amplifier (TIA)

To configure the EV kit as a TIA, place a shunt on jumper JU2 and replace R1 with 0Ω resistors. The output voltage of the TIA is the input current multiplied by the feedback resistor:

<!-- formula-not-decoded -->

where:

I IN   is  the  input  current  source  applied  at  the  INAP test point

I BIAS is the input bias current

VOS is the input offset voltage of the op amp

Use a capacitor and 0Ω resistor at location R10 or R17 (and C8, if applicable) to stabilize the op amp by rolling off high-frequency gain due to a large cable capacitance.

## Evaluates: MAX44292/MAX44294

## Capacitive Loads

Some applications require driving large capacitive loads. The EV kit provides C8 and R6 pads for an optional capac -itive-load driving circuit. C8 simulates the capacitive load while  R6  acts  as  an  isolation  resistor  to  improve  the  op amp's stability at higher capacitive loads. To improve the stability of the amplifier in such cases, replace R6 with a suitable resistor value to improve amplifier phase margin.

## Table 1. Jumper Descriptions (JU1-JU4)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                     |
|----------|------------------|-----------------------------------------------------------------|
| JU1      | Pin 1            | Disconnects INAM from GND.                                      |
| JU1      | 1-2*             | Connects INA- to GND through R1 for noninverting configuration. |
| JU2      | Pin 1*           | Disconnects INAP from GND.                                      |
| JU2      | 1-2              | Connects INA+ to GND through R2.                                |
| JU3      | Pin 1            | Disconnects INBM from GND.                                      |
| JU3      | 1-2*             | Connects INB- to GND through R9 for noninverting configuration. |
| JU4      | Pin 1*           | Disconnects INBP from GND.                                      |
| JU4      | 1-2              | Connects INB+ to GND through R10.                               |

│

Figure 1. MAX44292 EV Kit Schematic

<!-- image -->

## MAX44292 Evaluation Kit

Figure 2. MAX44292 EV Kit Component Placement GuideComponent Side

<!-- image -->

## Evaluates: MAX44292/MAX44294

Figure 3. MAX44292 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX44292 EV Kit PCB Layout-Component Side

<!-- image -->

│

## MAX44292 Evaluation Kit

## Component List

See the following links for component information:

- MAX44292 EV BOM

Evaluates: MAX44292/MAX44294

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX44292EVKIT# | EV Kit |

#Denotes RoHS compliant.

│

## MAX44292 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX44292/MAX44294

│

TITLE: Bill of Materials

DATE: 03/26/2014

DESIGN: max44292\_evkit\_a

TEMPLATE: \\cavndsa02a.maxim-ic.com\tp\_loc\hw\_cardcat\allegrolib\site\cdssetup\BOM\_Templates\evkit\_build\_template.bom

CALLOUT:

VARIANT: dnivariant

Revision\_Type : PRODUCTION

ITEM

QTY

REF DES

MFG PART #

MANUFACTUR VALUE

DESCRIPTION

| DESIGN: max44292_evkit_a TEMPLATE: \\cavndsa02a.maxim-ic.com\tp_loc\hw_cardcat\allegrolib\site\cdssetup\BOM_Templates\evkit_build_template.bom CALLOUT:   | DESIGN: max44292_evkit_a TEMPLATE: \\cavndsa02a.maxim-ic.com\tp_loc\hw_cardcat\allegrolib\site\cdssetup\BOM_Templates\evkit_build_template.bom CALLOUT:   | DESIGN: max44292_evkit_a TEMPLATE: \\cavndsa02a.maxim-ic.com\tp_loc\hw_cardcat\allegrolib\site\cdssetup\BOM_Templates\evkit_build_template.bom CALLOUT:   | DESIGN: max44292_evkit_a TEMPLATE: \\cavndsa02a.maxim-ic.com\tp_loc\hw_cardcat\allegrolib\site\cdssetup\BOM_Templates\evkit_build_template.bom CALLOUT:   | DESIGN: max44292_evkit_a TEMPLATE: \\cavndsa02a.maxim-ic.com\tp_loc\hw_cardcat\allegrolib\site\cdssetup\BOM_Templates\evkit_build_template.bom CALLOUT:   | DESIGN: max44292_evkit_a TEMPLATE: \\cavndsa02a.maxim-ic.com\tp_loc\hw_cardcat\allegrolib\site\cdssetup\BOM_Templates\evkit_build_template.bom CALLOUT:   | DESIGN: max44292_evkit_a TEMPLATE: \\cavndsa02a.maxim-ic.com\tp_loc\hw_cardcat\allegrolib\site\cdssetup\BOM_Templates\evkit_build_template.bom CALLOUT:                                             | DESIGN: max44292_evkit_a TEMPLATE: \\cavndsa02a.maxim-ic.com\tp_loc\hw_cardcat\allegrolib\site\cdssetup\BOM_Templates\evkit_build_template.bom CALLOUT:   |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Revision_Type : PRODUCTION                                                                                                                                | Revision_Type : PRODUCTION                                                                                                                                | Revision_Type : PRODUCTION                                                                                                                                | Revision_Type : PRODUCTION                                                                                                                                | Revision_Type : PRODUCTION                                                                                                                                | Revision_Type : PRODUCTION                                                                                                                                | Revision_Type : PRODUCTION                                                                                                                                                                          | Revision_Type : PRODUCTION                                                                                                                                |
| ITEM                                                                                                                                                      | QTY                                                                                                                                                       | REF DES                                                                                                                                                   | MFG PART #                                                                                                                                                | MANUFACTUR VALUE                                                                                                                                          | MANUFACTUR VALUE                                                                                                                                          | DESCRIPTION                                                                                                                                                                                         |                                                                                                                                                           |
|                                                                                                                                                           | 1                                                                                                                                                         | 2 C1,C17                                                                                                                                                  | N/A                                                                                                                                                       | ?                                                                                                                                                         | 0.1UF                                                                                                                                                     | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; MODEL=X7R; TG=-55 DEGC TO +125 DEGC; TC=+/-; NOT RECOMMENDED FOR NEW DESIGN USE - 20-000u1-01                                             |                                                                                                                                                           |
|                                                                                                                                                           | 2                                                                                                                                                         | 2 C2,C18                                                                                                                                                  | N/A                                                                                                                                                       | ?                                                                                                                                                         | 4.7UF                                                                                                                                                     | CAPACITOR; SMT (1206); CERAMIC CHIP; 4.7UF; 50V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                  |                                                                                                                                                           |
|                                                                                                                                                           | 3                                                                                                                                                         | 8 GND,TP0_GND-TP6_GND                                                                                                                                     | 5011                                                                                                                                                      | ?                                                                                                                                                         |                                                                                                                                                           | 5011 TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN CONNECTOR; MALE; THROUGH HOLE; |                                                                                                                                                           |
|                                                                                                                                                           | 4                                                                                                                                                         | 4 JU1-JU4                                                                                                                                                 | PCC02SAAN                                                                                                                                                 | SULLINS                                                                                                                                                   | PCC02SAAN                                                                                                                                                 | BREAKAWAY; STRAIGHT THROUGH; 2PINS; 65 DEGC TO +125 DEGC RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W;                                                                                                     |                                                                                                                                                           |
|                                                                                                                                                           | 5                                                                                                                                                         | 2 R1,R9                                                                                                                                                   | N/A                                                                                                                                                       | ?                                                                                                                                                         | 1K                                                                                                                                                        | THICK FILM                                                                                                                                                                                          |                                                                                                                                                           |
|                                                                                                                                                           | 6                                                                                                                                                         | 8 R2,R6,R8,R10,R14,R19,R23, R24                                                                                                                           | N/A                                                                                                                                                       | ?                                                                                                                                                         |                                                                                                                                                           | 0 RESISTOR; 0603; 0 OHM; 5%; JUMPER; 0.10W; THICK FILM                                                                                                                                              |                                                                                                                                                           |
|                                                                                                                                                           | 7                                                                                                                                                         | 2 R5,R13                                                                                                                                                  | N/A                                                                                                                                                       | ?                                                                                                                                                         | 10K                                                                                                                                                       | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                                  |                                                                                                                                                           |
|                                                                                                                                                           | 8                                                                                                                                                         | 4 SU1-SU3,SU5                                                                                                                                             | STC02SYAN                                                                                                                                                 | SULLINS ELECT STC02SYAN                                                                                                                                   | SULLINS ELECT STC02SYAN                                                                                                                                   | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL                                                                             |                                                                                                                                                           |
|                                                                                                                                                           | 9                                                                                                                                                         | 2 TP1,TP2                                                                                                                                                 |                                                                                                                                                           | 5000 ?                                                                                                                                                    | N/A                                                                                                                                                       | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST                         |                                                                                                                                                           |
|                                                                                                                                                           | 10                                                                                                                                                        | 6 TP_INAM,TP_INAP,TP_INB M,TP_INBP,TP_OUTA,TP_O UTB                                                                                                       | 5012                                                                                                                                                      | ?                                                                                                                                                         |                                                                                                                                                           | 5012 LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN                                                                   |                                                                                                                                                           |
|                                                                                                                                                           | 11                                                                                                                                                        | 1 U1                                                                                                                                                      | MAX44292ASA+MAXIM                                                                                                                                         |                                                                                                                                                           | MAX44292ASA+                                                                                                                                              | IC; AMP; DUAL PRECISION; LOW-NOISE AMPLIFIER; NSOIC8 150 MIL                                                                                                                                        |                                                                                                                                                           |
| TOTAL                                                                                                                                                     | 12                                                                                                                                                        | 2 VDD,VSS 1                                                                                                                                               | 5010 EPCB44292                                                                                                                                            | ? MAXIM                                                                                                                                                   | N/A PCB                                                                                                                                                   | MULTIPURPOSE; NOT FOR COLD TEST; SET TO OBSOLETE TO CORRECT PACK TYPE PCB: EPCB44292                                                                                                                |                                                                                                                                                           |
| 13 44                                                                                                                                                     | 13 44                                                                                                                                                     | 13 44                                                                                                                                                     | 13 44                                                                                                                                                     | 13 44                                                                                                                                                     | 13 44                                                                                                                                                     | 13 44                                                                                                                                                                                               | 13 44                                                                                                                                                     |
| DO NOT ITEM                                                                                                                                               | PURCHASE QTY REF DES                                                                                                                                      | PURCHASE QTY REF DES                                                                                                                                      | MFG PART #                                                                                                                                                | MANUFACTUR VALUE                                                                                                                                          | MANUFACTUR VALUE                                                                                                                                          | DESCRIPTION                                                                                                                                                                                         |                                                                                                                                                           |
|                                                                                                                                                           | 1 6 C3,C6,C8,C10,C13,C15                                                                                                                                  | 1 6 C3,C6,C8,C10,C13,C15                                                                                                                                  | N/A                                                                                                                                                       | N/A                                                                                                                                                       | OPEN                                                                                                                                                      | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR - EVKIT                                                                                                                                                    |                                                                                                                                                           |
|                                                                                                                                                           | 2 6 C4,C5,C9,C11,C12,C16                                                                                                                                  | 2 6 C4,C5,C9,C11,C12,C16                                                                                                                                  | N/A                                                                                                                                                       | N/A                                                                                                                                                       | SHORT                                                                                                                                                     | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR - EVKIT                                                                                                                                                    |                                                                                                                                                           |
|                                                                                                                                                           | 3 INAM,INAP,INBM,INBP,OU                                                                                                                                  | 6 TA,OUTB                                                                                                                                                 |                                                                                                                                                           | CN-BNC-011PG FIRST TECH                                                                                                                                   | ELECN-BNC-011PG                                                                                                                                           | CONNECTOR; FEMALE; THROUGH HOLE; BNC JACK; STRAIGHT; 5PINS                                                                                                                                          |                                                                                                                                                           |
|                                                                                                                                                           | 4 12 R3,R4,R7,R11,R12,R15- R18,R20-R22                                                                                                                    | 4 12 R3,R4,R7,R11,R12,R15- R18,R20-R22                                                                                                                    | N/A                                                                                                                                                       | N/A                                                                                                                                                       | OPEN                                                                                                                                                      | PACKAGE OUTLINE 0603 RESISTOR - EVKIT                                                                                                                                                               |                                                                                                                                                           |
| PACKOUT ITEM                                                                                                                                              | QTY REF DES                                                                                                                                               | QTY REF DES                                                                                                                                               |                                                                                                                                                           | MANUFACTURE VALUE                                                                                                                                         | DESCRIPTION                                                                                                                                               |                                                                                                                                                                                                     |                                                                                                                                                           |
|                                                                                                                                                           | 1 1 PACKOUT                                                                                                                                               | 1 1 PACKOUT                                                                                                                                               | N/A                                                                                                                                                       | ?                                                                                                                                                         | BOX;SMALL BROWN                                                                                                                                           | 9 3/16"X7"X1 1/4" - PACKOUT BAG;+;BAG; STATIC SHIELD ZIP 8'X10'; W/ ESD LOGO                                                                                                                        |                                                                                                                                                           |
|                                                                                                                                                           | 2 1 PACKOUT 3 1 PACKOUT                                                                                                                                   | 2 1 PACKOUT 3 1 PACKOUT                                                                                                                                   |                                                                                                                                                           | N/A ? N/A ?                                                                                                                                               | ESD PINK                                                                                                                                                  | FOAM;FOAM;ANTI-STATIC PE 12inX12inX5MM - PACKOUT                                                                                                                                                    |                                                                                                                                                           |
| TOTAL                                                                                                                                                     | 5 1 PACKOUT                                                                                                                                               | 5 1 PACKOUT                                                                                                                                               |                                                                                                                                                           | ?                                                                                                                                                         | LABEL(EV KIT BOX)                                                                                                                                         | - PACKOUT                                                                                                                                                                                           |                                                                                                                                                           |
|                                                                                                                                                           | 5                                                                                                                                                         | 5                                                                                                                                                         |                                                                                                                                                           | N/A                                                                                                                                                       |                                                                                                                                                           |                                                                                                                                                                                                     |                                                                                                                                                           |