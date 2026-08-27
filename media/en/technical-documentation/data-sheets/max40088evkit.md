<!-- lastmod 2022-08-03 -->
## MAX40088 Evaluation Kit

## General Description

The MAX40088 evaluation kit (EV kit) is a fully assembled  and  tested  circuit board  that  contains  all the components  necessary  to  evaluate  the  MAX40075/ MAX40088/MAX40079/MAX40087  ICs.  The  MAX40088 EV  kit  printed  circuit  board  (PCB)  comes  installed  with MAX40088AUT+ in 6-SOT23 package.

The device is a rail-to-rail output op amp offering 10MHz Gain  Bandwidth  product  (MAX40075/MAX40079)  and 42MHz Gain Bandwidth product (MAX40088/MAX40087). The EV kit operates from a single 2.7V to 5.5V DC power supply or from ±1.35V to ±2.75V split supply.

## Features

- +2.7V to +5.5V Supply Voltage Range across V DD and V SS
- 42MHz Gain Bandwidth Product (MAX40088/MAX40087), Gain = 5V/V Stable
- 10MHz Gain Bandwidth Product (MAX40075/MAX40079), Gain = 1V/V Stable
- Ultra-Low Distortion (0.0002% with 1kΩ load)
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX40075/MAX40088/

MAX40079/MAX40087

## Quick Start

## Required Equipment

Before beginning, the following equipment is needed:

- MAX40088 EV kit
- 2.7V to 5.5V, 100mA DC power supply
- Precision voltage calibrator
- Digital multimeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

Caution: Do not turn on power supplies until all connections are completed and turn on V DD , V SS  supplies before turning on voltage calibrator on the input pins.

- 1) Make sure JU1 jumper is uninstalled and JU2 jumper is in 1-2 position before applying supply voltage.
- 2) Connect positive terminal of the +5V supply to the VDD test point and the GND terminal of supply to the GND test point. Make sure JU3 is in 1-2 position and JU4 is un-installed. JU4 is opened if split supply operation is desired.
- 3) Connect the positive terminal of the precision voltage calibrator to the INP/TP3 test point.
- 4) Connect the DMM to monitor the voltage on the OUTA/TP11 test point.
- 5) Turn on the 5V power supply connected to VDD test point, turn on the precision voltage calibrator on INP/TP3 test point and set 0.1V. Observe the output at the OUTA/TP11 test point on the DMM. DMM should read approximately 1V. Also, vary IN+ voltage between 0V to 0.45V and see if DMM on OUTA test point is showing a gained up by voltage by 10V/V to the voltage applied on INP test point. Once above step is confirmed, EV kit is tested for functionality.

<!-- image -->

## MAX40088 Evaluation Kit

## Detailed Description of Hardware

The MAX40088 EV kit contains the MAX40088 IC, which is  rail-to-rail  output  op  amps  with  low  noise  and  wide bandwidth  in  6-SOT23  package.  The  EV  kit  operates from a single 2.7V to 5.5V DC power supply. The EV kit is meant to work using split supplies as well where the voltage between V DD  and V SS  is +2.7V to +5.5V.

## Default Application Circuit

The EV kit comes preconfigured in a Non-Inverting ampli -fier configuration with Gain set as 10V/V.

## Op Amp Configurations

The  EV  kit  provides  flexibility  to  easily  reconfigure  the op amp into any of the three common circuit topologies: inverting amplifier, non-inverting amplifier and Differential amplifier.

These configurations are described in the next few sections.

## Noninverting Configuration

The  MAX40088  EV  kit  comes  preconfigured  as  a  noninverting amplifier.  The gain is set by the ratio of R8 and R9. The MAX40088 EV kit comes preconfigured for a gain of 10. The output voltage for the non-inverting configura -tion is given by the equation below:

<!-- formula-not-decoded -->

## Inverting Configuration

To configure the EV kit as an inverting amplifier, remove the shunt 1-2 on JU2 and install a shunt on jumper JU1 on position 1-2 and feed an input signal on the INM pad.

<!-- formula-not-decoded -->

## Differential Amplifier

To  configure  the  MAX40088  EV  kit  as  a  differential amplifier,  replace  R2,  R3,  R8,  and  R9  with  appropriate resistors. When R2 = R8 and R3 = R9, the CMRR of the differential amplifier is determined by the matching of the resistor ratios R2/R3 and R8/R9.

<!-- formula-not-decoded -->

## Evaluates: MAX40075/MAX40088/ MAX40079/MAX40087

where

<!-- formula-not-decoded -->

## Transimpedance Amplifier

To configure the MAX40088 EV kit as a transimpedance amplifier (TIA), short jumper JU1 on 1-2, replace R3, R9 with a 0 ohm resistor and populate R8 pad with 100kΩ resistor. The output voltage of the TIA is the input current multiplied by the feedback resistor:

<!-- formula-not-decoded -->

where IINM is the input current source applied at the INM test point, IBIAS- is the input bias current into IN- pin, and VOS is the input offset voltage of the op amp. Use capacitor C2 to stabilize the op amp by rolling off high-frequency gain due to a large cable capacitance if desired.

## Capacitive Loads

Some applications require driving large capacitive loads. To improve stability of the amplifier in such cases, replace R11  with  a  suitable  resistor  value  to  improve  amplifier phase margin.

## Table 1. Default Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                     |
|----------|------------------|---------------------------------|
| JU1      | 1-2              | IN+ to GND                      |
| JU1      | 2-3              | IN+ terminated by 50Ω to GND    |
| JU1      | Not Installed*   | IN+ terminal floating           |
| JU2      | 1-2*             | IN- to GND                      |
| JU2      | 2-3              | IN- terminated by 50Ω to GND    |
| JU2      | Not Installed    | IN- terminal floating           |
| JU3      | 1-2*             | Device in active or normal mode |
| JU3      | 2-3              | Device in Shutdown mode         |
| JU4      | Installed*       | Single-supply operation         |
| JU4      | Not Installed    | Split-supply operation          |

* Default position.

│

## Component Suppliers

| SUPPLIER           | WEBSITE                     |
|--------------------|-----------------------------|
| Murata Electronics | www.murata-northamerica.com |

Note:

Indicate that you are using the MAX40088 EV kit when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX40088EVKIT# | EV Kit |

# RoHS compliant.

Evaluates: MAX40075/MAX40088/

MAX40079/MAX40087

## MAX40088 EV Kit Bill of Materials

| ITEM                                                                                      | QTY                                                                                       | REF DES                                                                                   | Var Status                                                                                | MAXINV                                                                                    | MFGPART#                                                                                  | MFG                                                                                       | VALUE                                                                                     | DESCRIPTION                                                                                                                                                                         |
|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1                                                                                         | 2                                                                                         | C4, C6                                                                                    | Pref                                                                                      | 20-000U1-P6B                                                                              | C1608X7R1E104K08 0AA C1608X5R1E475K08                                                     | TDK                                                                                       | 0.1UF                                                                                     | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                          |
| 2                                                                                         | 2                                                                                         | C5, C7                                                                                    | Pref                                                                                      | 20-004U7-L3                                                                               | 0AC; GRM188R61E475KE 11                                                                   | TDK; MURATA                                                                               | 4.7UF                                                                                     | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7UF; 25V; TOL=10%; TG=- 55 DEGC TO +85 DEGC; TC=X5R                                                                                          |
| 3                                                                                         | 2                                                                                         | GND, GND1                                                                                 | Pref                                                                                      | 02-TPMINI5011-00                                                                          | 5011                                                                                      | KEYSTONE                                                                                  | N/A                                                                                       | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST  |
| 4                                                                                         | 3                                                                                         | INM, INP, OUTA                                                                            | Pref                                                                                      | 01- 31532952RFX5P-                                                                        | 31-5329-52RFX                                                                             | AMPHENOL                                                                                  | 31-5329- 52RFX                                                                            | CONNECTOR; FEMALE; THROUGH HOLE; BNC 50OHM PCB RECEPTACLE; STRAIGHT; 5PINS                                                                                                          |
| 5                                                                                         | 3                                                                                         | JU1-JU3                                                                                   | Pref                                                                                      | 01-PEC03SAAN3P- 21                                                                        | PEC03SAAN                                                                                 | SULLINS                                                                                   | PEC03SAA N                                                                                | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT;                                                                       |
| 6                                                                                         | 1                                                                                         | JU4                                                                                       | Pref                                                                                      | 01-PEC02SAAN2P- 21                                                                        | PEC02SAAN                                                                                 | SULLINS                                                                                   | PEC02SAA N                                                                                | 2PINS                                                                                                                                                                               |
| 7                                                                                         | 4                                                                                         | R1, R5, R7, R11                                                                           | Pref                                                                                      | 80-0000R-AA6                                                                              | CRCW06030000Z0                                                                            | VISHAY DALE                                                                               | 0                                                                                         | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.1W; THICK FILM                                                                                                                                 |
| 8                                                                                         | 1                                                                                         | R3                                                                                        | Pref                                                                                      | 80-0180R-24                                                                               | CRCW0603180RFK                                                                            | VISHAY DALE                                                                               | 180                                                                                       | RESISTOR, 0603, 180 OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                                                                              |
| 9                                                                                         | 2                                                                                         | R6, R10                                                                                   | Pref                                                                                      | 80-0050R-H9                                                                               | RG1608N-500-W                                                                             | SUSUMU CO LTD.                                                                            | 50                                                                                        | RESISTOR; 0603; 50 OHM; 0.05%; 10PPM; 0.10W; THIN FILM                                                                                                                              |
| 10                                                                                        | 1                                                                                         | R8                                                                                        | Pref                                                                                      | 80-001K8-24                                                                               | CRCW06031K80FK                                                                            | VISHAY DALE                                                                               | 1.8K                                                                                      | RESISTOR, 0603, 1.8K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                                                                             |
| 11                                                                                        | 1                                                                                         | R9                                                                                        | Pref                                                                                      | 80-0200R-24                                                                               | CRCW06032000FK                                                                            | VISHAY DALE                                                                               | 200                                                                                       | RESISTOR; 0603; 200 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                              |
| 12                                                                                        | 4                                                                                         | SU1-SU4                                                                                   | Pref                                                                                      | 02- JMPFSTC02SYAN- 00                                                                     | STC02SYAN                                                                                 | SULLINS ELECTRONI CS CORP.                                                                | STC02SYA N                                                                                | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL                                                             |
| 13                                                                                        | 4                                                                                         | TP1, TP2, TP4, TP5                                                                        | Pref                                                                                      | 02-TPMINI5001-00                                                                          | 5001                                                                                      | KEYSTONE                                                                                  | N/A                                                                                       | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST       |
| 14                                                                                        | 4                                                                                         | TP3, TP6, TP7, TP11                                                                       | Pref                                                                                      | 02-TPMINI5012-00                                                                          | 5012                                                                                      | KEYSTONE                                                                                  | N/A                                                                                       | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST  |
| 15                                                                                        | 1                                                                                         | U1                                                                                        | Pref                                                                                      | 00-SAMPLE-01                                                                              | MAX40088AUT+                                                                              | MAXIM                                                                                     | MAX40088 AUT+                                                                             | EVKIT PART-IC; OPAMP; OZ46; SINGLE 10MHZ; LOW NOISE LOW BIAS CURRENT OP-AMP; PKG. OUTLINE DWG.: 21-0058; SOT23-6                                                                    |
| 16                                                                                        | 1                                                                                         | VDD                                                                                       | Pref                                                                                      | 02-TPMINI5010-00                                                                          | 5010                                                                                      | KEYSTONE                                                                                  | N/A                                                                                       | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE; NOT FOR COLD TEST                                                                                                                |
| 17                                                                                        | 1                                                                                         | VSS                                                                                       | Pref                                                                                      | 02-TPMINI5013-00                                                                          | 5013                                                                                      | KEYSTONE                                                                                  | N/A                                                                                       | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST |
| 18 TOTAL                                                                                  | 1 38                                                                                      | PCB                                                                                       | -                                                                                         | EPCB4007540088                                                                            | MAX40088EVKIT#                                                                            | MAXIM                                                                                     | PCB                                                                                       | PCB:MAX4007540088                                                                                                                                                                   |
| DO NOT PURCHASE(DNP)                                                                      | DO NOT PURCHASE(DNP)                                                                      | DO NOT PURCHASE(DNP)                                                                      | DO NOT PURCHASE(DNP)                                                                      | DO NOT PURCHASE(DNP)                                                                      | DO NOT PURCHASE(DNP)                                                                      | DO NOT PURCHASE(DNP)                                                                      | DO NOT PURCHASE(DNP)                                                                      | DO NOT PURCHASE(DNP)                                                                                                                                                                |
| ITEM                                                                                      | QTY                                                                                       | REF DES                                                                                   | Var Status                                                                                | MAXINV                                                                                    | MFGPART#                                                                                  | MFC                                                                                       | VALUE                                                                                     | DESCRIPTION                                                                                                                                                                         |
| 1                                                                                         | 3                                                                                         | C1-C3                                                                                     | DNP                                                                                       | N/A                                                                                       | N/A                                                                                       | N/A N/A                                                                                   | OPEN                                                                                      | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR - EVKIT                                                                                                                                    |
| 2 TOTAL                                                                                   | 3 6                                                                                       | R2, R4, R12                                                                               | DNP                                                                                       | N/A                                                                                       | N/A                                                                                       |                                                                                           | OPEN                                                                                      | PACKAGE OUTLINE 0603 RESISTOR - EVKIT                                                                                                                                               |
| PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB) | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB) | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB) | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB) | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB) | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB) | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB) | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB) | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)                                                                                           |
| ITEM                                                                                      | QTY                                                                                       | REF DES                                                                                   | Var Status                                                                                | MAXINV                                                                                    | MFGPART#                                                                                  | MFG                                                                                       | VALUE                                                                                     | DESCRIPTION                                                                                                                                                                         |
| 1                                                                                         | 1                                                                                         | PACKOUT_B OX                                                                              | DNI                                                                                       | 88-00712-MDM                                                                              | 88-00712-MDM                                                                              | N/A                                                                                       | ?                                                                                         | BOX;+;MEDIUM BROWN 9 3/8' X 7 1/4' X 2 1/2                                                                                                                                          |
| 2                                                                                         | 1                                                                                         | PACKOUT_B OX                                                                              | DNI                                                                                       | 87-02159-000                                                                              | 87-02159-000                                                                              | N/A                                                                                       | ?                                                                                         | ESD BAG;+;BAG; STATIC SHIELD 5X8;W/ESD LOGO                                                                                                                                         |
| 3                                                                                         | 1                                                                                         | PACKOUT_B OX                                                                              | DNI                                                                                       | 85-MAXKIT-PNK                                                                             | 85-MAXKIT-PNK                                                                             | N/A                                                                                       | ?                                                                                         | PINK FOAM;FOAM;ANTI-STATIC PE 12inX12inX5MM - PACKOUT                                                                                                                               |
| 4                                                                                         | 1                                                                                         | PACKOUT_B OX                                                                              | DNI                                                                                       | EVINSERT                                                                                  | EVINSERT                                                                                  | N/A                                                                                       | ?                                                                                         | WEB INSTRUCTIONS FOR MAXIM DATA SHEET                                                                                                                                               |
| 5 TOTAL                                                                                   | 1 5                                                                                       | PACKOUT_B OX                                                                              | DNI                                                                                       | 85-84003-006                                                                              | 85-84003-006                                                                              | N/A                                                                                       | ?                                                                                         | LABEL(EV KIT BOX) - PACKOUT                                                                                                                                                         |

## MAX40088 EV Kit Schematic

<!-- image -->

## MAX40088 EV Kit PCB Layout Diagrams

MAX40088 EV Kit-Top Silkscreen

<!-- image -->

MAX40088 EV Kit-Top

<!-- image -->

MAX40088 EV Kit-Bottom

<!-- image -->

│

## MAX40088 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                 | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 8/17            | Initial release                                                                                                             | -               |
|                 1 | 12/17           | Added MAX40079 and MAX40087 to parts able to be evaluated, General Description and Features sections, and updated schematic | 1-7             |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

│

Evaluates: MAX40075/MAX40088/

MAX40079/MAX40087