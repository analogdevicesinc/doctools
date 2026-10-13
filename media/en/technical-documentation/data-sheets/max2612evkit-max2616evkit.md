<!-- lastmod 2022-08-04 -->
## MAX2612-MAX2616 Evaluation Kit

## General Description

The MAX2612-MAX2616  evaluation kits (EV kits) simplify the evaluation of the MAX2612-MAX2616 highperformance broadband gain blocks. They enable testing of the device's RF performance and require no additional supporting  circuitry.  The  EV  kits  provide  50Ω  SMA connectors for inputs and outputs.

## Features

- ● Easy Evaluation of MAX2612-MAX2616 IC
- ● 3.0V to 5.25V Single-Supply Operation
- ● RF Input and Output Matched to 50Ω
- ● Fully Assembled and Tested

## MAX2612-MAX2616 EV Kit Files

| FILE                    | DECRIPTION       |
|-------------------------|------------------|
| MAX2612-MAX2616_sch.pdf | Schematic        |
| PR_2612_revA.pdf        | PCB - All layers |
| PR_2613_revA.pdf        | PCB - All layers |
| PR_2614_revA.pdf        | PCB - All layers |
| PR_2615_revA.pdf        | PCB - All layers |
| PR_2616_revA.pdf        | PCB - All layers |
| MAX2612_BOM_A.xls       | BOM              |
| MAX2613_BOM_A.xls       | BOM              |
| MAX2614_BOM_A.xls       | BOM              |
| MAX2615_BOM_A.xls       | BOM              |
| MAX2616_BOM_A.xls       | BOM              |

Ordering Information appears at end of data sheet.

Evaluates: MAX2612-MAX2616

## Quick Start

The MAX2612-MAX2616 EV kits are fully assembled and factory tested. Follow the instructions in the Connections and Setup section to test the devices.

## Required Equipment

This  section  lists  the  recommended  test  equipment  to verify  the  operation  of  the  MAX2612-MAX2616.  The equipment's  listed  are  intended  as  suggestions  and substitutions are possible:

- ● MAX2612-MAX2616 EV kit
- ● One DC power supply capable of delivering +5.0V and 100mA of current
- ● One RF signal generator capable of delivering RF power as high as 0dBm at 1000MHz (E4433B or equivalent)
- ● One RF spectrum analyzer that covers the MAX2612-MAX2616 operating frequency range (FSEB20 or equivalent)
- ● One power meter capable of measuring up to 0dBm at 1000MHz (Agilent E4419B or equivalent)
- ● Two 50Ω SMA cables
- ● One ammeter (optional)
- ● One noise figure meter (optional)
- ● One network analyzer (optional)

## Connections and Setup

This section is a step-by-step guide to operating the EV kits and their function. Caution: Do not turn on the DC power or RF signal generators until all connections are completed.

## Checking Power Gain

- 1) With the DC supply output disabled, connect a +5.0V power  supply  to  the  VCC  header  and  the  power supply ground the GND header of the EV kit. (Route the positive terminal of the power supply through an ammeter, if desired)
- 2) Remove  the  jumper  between  on  JU1  for  normal operation.
- 3) With the RF signal generator output disabled, connect the generator output to the RFIN SMA connector on the EV kit through an SMA cable. Set the output of the RF signal generator frequency to 1000MHz and power level to -20dBm.

<!-- image -->

## MAX2612-MAX2616 Evaluation Kit

- 4) Connect  a  spectrum  analyzer  to  the  RFOUT  SMA connector on the EV kit through an SMA cable. Set the spectrum analyzer center frequency to 1000MHz, reference level to 0dBm, and span to 1MHz.
- 5) Enable  the  DC  supply  output.  The  supply  current should read approximately the current specified in the datasheet.
- 6) Enable the RF signal generator output. The spectrum analyzer  should  displays  a  tone  at  1000MHz  with power level at approximately -1.5dBm.

## Evaluates: MAX2612-MAX2616

## Layout Issues

A good printed-circuit board (PCB) is an essential part of RF circuit design.  The EV kit PCB can serve as a guide for laying out a board using the MAX2612-MAX2616. Use controlled  impedance  lines  on  all  high-frequency  inputs and  outputs.  Bypass  V CC   with  decoupling  capacitors located  close  to  the  device.  For  long  V CC lines,  it  may be necessary to add decoupling capacitors. Locate these additional capacitors farther away from the device package. This  minimizes  supply  coupling.  Proper  grounding  of the GND pins is essential. Connect the GND pins to the ground plane either directly, or through vias, or both.

Figure 1: MAX2612-MAX2616 EV Kit Schematic

<!-- image -->

Figure 2. MAX2612-MAX2616 EV Kit Component Replacement Guide-Component Side

<!-- image -->

Evaluates: MAX2612-MAX2616

Figure 3. MAX2612-MAX2616 EV Kit PCB Layout-Layer 2

<!-- image -->

Evaluates: MAX2612-MAX2616

Figure 4. MAX2612-MAX2616 EV Kit PCB Layout-Layer 3

<!-- image -->

Figure 5. MAX2612-MAX2616 EV Kit PCB Layout-Secondary Side

<!-- image -->

## MAX2612-MAX2616 Evaluation Kit

## Component Suppliers

| SUPPLIER                               | WEBSITE                   |
|----------------------------------------|---------------------------|
| AVX/Kyocera                            | www.avx.com               |
| Maxim Integrated                       | www.maximintegrated.com   |
| Johnson / Cinch Connectivity Solutions | www.johnsoncomponents.com |
| Keystone                               | www.keyelco.com           |
| Sullins                                | www.sullinscorp.com       |

Note: Indicate that you are using the MAX2612-MAX2616 when contacting these component suppliers.

Evaluates: MAX2612-MAX2616

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX2612EVKIT# | EV Kit |
| MAX2613EVKIT# | EV Kit |
| MAX2614EVKIT# | EV Kit |
| MAX2615EVKIT# | EV Kit |
| MAX2616EVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX2612-MAX2616 Evaluation Kit

## MAX2612EV Bill of Materials

## Evaluates: MAX2612-MAX2616

| ASSEMBLY NOTES       |                |                |                             |                   |                    |                |               |             |                                      |                                       | Leave Site Open                       |                |                           |                               |                            |                           |                  |
|----------------------|----------------|----------------|-----------------------------|-------------------|--------------------|----------------|---------------|-------------|--------------------------------------|---------------------------------------|---------------------------------------|----------------|---------------------------|-------------------------------|----------------------------|---------------------------|------------------|
| PART NUMBER          | GRM155R71E103K | GRM1555C1HR20B | TAJR106K006                 | GRM1885C1H471JA01 | Use Lead-Free Only | 0603HP-R22XJLU | 5001          | 5000        | MAX2612ETA+                          | 142-0701-851                          | 142-0701-851                          | PEC36SAAN      | STC02SYAN                 |                               |                            |                           |                  |
| MANUFACTURER         | Murata         | Murata         | AVX                         | Murata            |                    | Coilcraft      | Keystone      | Keystone    | Maxim                                | Johnson                               | Johnson                               | Sullins        | Sullins                   |                               |                            |                           |                  |
| DESCRIPTION          | 0402 Capacitor | 0402 Capacitor | Tantalum Capacitor 'R' Case | 0603 Capacitor    | 0402 Resistor      | 0603 Inductor  | PC Mini Black | PC Mini Red | High Performance Wide Band Amplifier | SMA End Launch Jack Receptacle 0.062" | SMA End Launch Jack Receptacle 0.062" | 3 pin header   | Shorting Jumper           | Brown Box 9 3/16" x 7" x 7/8" | ESD Bag 4" x 6" w/ESD Logo | Pink Foam 12" x 12" x 5MM | Web Instructions |
| TOL                  | 10%            | 0.1pF          | 10%                         | 5%                | 1%                 | 5%             |               |             |                                      |                                       |                                       |                |                           |                               |                            |                           |                  |
| VALUE                | 0.01uF         | 0.2pF          | 10uF                        | 470pF             | 21.5K              | 220nH          | Test Point    | Test Point  | MAX2612                              | Connector                             | Connector Do Not Install              | 1X3 Pin Header | Shunt                     |                               |                            |                           |                  |
| QTY                  | 3              | 3              | 1                           | 1                 | 1                  | 1              | 1             | 1           | 1                                    | 2                                     | 0                                     | 1              | 1                         | 1                             | 1                          | 1                         | 1                |
| REFERENCE DESIGNATOR | C1 C2 C6       | C3 C7 C8       | C4                          | C5                | R1                 | L0             | GND           | VCC         | U1                                   | RFIN RFOUT                            | CALIN CALOUT                          | J1             | J1 Install on Pin 2 and 3 | Pack Out                      |                            |                           |                  |
| ITEM                 | C1 C2 C6       | 2              | 3                           | 4                 | 5                  | 6              | 7             | 8           | 9                                    | 10                                    | 11                                    | 12             | 13                        |                               |                            |                           |                  |

## MAX2613EV Bill of Materials

## Evaluates: MAX2612-MAX2616

| ASSEMBLY NOTES       |                |                |                             |                   |                    |                |               |             |                                      |                                       | Leave Site Open                       |                |                           |                               |                            |                           |                  |
|----------------------|----------------|----------------|-----------------------------|-------------------|--------------------|----------------|---------------|-------------|--------------------------------------|---------------------------------------|---------------------------------------|----------------|---------------------------|-------------------------------|----------------------------|---------------------------|------------------|
| PART NUMBER          | GRM155R71E103K | GRM1555C1HR20B | TAJR106K006                 | GRM1885C1H471JA01 | Use Lead-Free Only | 0603HP-R22XJLU | 5001          | 5000        | MAX2613ETA+                          | 142-0701-851                          | 142-0701-851                          | PEC36SAAN      | STC02SYAN                 |                               |                            |                           |                  |
| MANUFACTURER         | Murata         | Murata         | AVX                         | Murata            |                    | Coilcraft      | Keystone      | Keystone    | Maxim                                | Johnson                               | Johnson                               | Sullins        | Sullins                   |                               |                            |                           |                  |
| DESCRIPTION          | 0402 Capacitor | 0402 Capacitor | Tantalum Capacitor 'R' Case | 0603 Capacitor    | 0402 Resistor      | 0603 Inductor  | PC Mini Black | PC Mini Red | High Performance Wide Band Amplifier | SMA End Launch Jack Receptacle 0.062" | SMA End Launch Jack Receptacle 0.062" | 3 pin header   | Shorting Jumper           | Brown Box 9 3/16" x 7" x 7/8" | ESD Bag 4" x 6" w/ESD Logo | Pink Foam 12" x 12" x 5MM | Web Instructions |
| TOL                  | 10%            | 0.1pF          | 10%                         | 5%                | 1%                 | 5%             |               |             |                                      |                                       |                                       |                |                           |                               |                            |                           |                  |
| VALUE                | 0.01uF         | 0.2pF          | 10uF                        | 470pF             | 21.5K              | 220nH          | Test Point    | Test Point  | MAX2613                              | Connector                             | Connector Do Not Install              | 1X3 Pin Header | Shunt                     |                               |                            |                           |                  |
| QTY                  | 3              | 3              | 1                           | 1                 | 1                  | 1              | 1             | 1           | 1                                    | 2                                     | 0                                     | 1              | 1                         | 1                             | 1                          | 1                         | 1                |
| REFERENCE DESIGNATOR | C1 C2 C6       | C3 C7 C8       | C4                          | C5                | R1                 | L0             | GND           | VCC         | U1                                   | RFIN RFOUT                            | CALIN CALOUT                          | J1             | J1 Install on Pin 2 and 3 | Pack Out                      |                            |                           |                  |
| ITEM                 | C1 C2 C6       | 2              | 3                           | 4                 | 5                  | 6              | 7             | 8           | 9                                    | 10                                    | 11                                    | 12             | 13                        |                               |                            |                           |                  |

## MAX2614EV Bill of Materials

## Evaluates: MAX2612-MAX2616

| ASSEMBLY NOTES       |                |                |                             |                   |                    |                |               |             |                                      |                                       | Leave Site Open                       |                |                           |                               |                            |                           |                  |
|----------------------|----------------|----------------|-----------------------------|-------------------|--------------------|----------------|---------------|-------------|--------------------------------------|---------------------------------------|---------------------------------------|----------------|---------------------------|-------------------------------|----------------------------|---------------------------|------------------|
| PART NUMBER          | GRM155R71E103K | GRM1555C1HR20B | TAJR106K006                 | GRM1885C1H471JA01 | Use Lead-Free Only | 0603HP-R22XJLU | 5001          | 5000        | MAX2614ETA+                          | 142-0701-851                          | 142-0701-851                          | PEC36SAAN      | STC02SYAN                 |                               |                            |                           |                  |
| MANUFACTURER         | Murata         | Murata         | AVX                         | Murata            |                    | Coilcraft      | Keystone      | Keystone    | Maxim                                | Johnson                               | Johnson                               | Sullins        | Sullins                   |                               |                            |                           |                  |
| DESCRIPTION          | 0402 Capacitor | 0402 Capacitor | Tantalum Capacitor 'R' Case | 0603 Capacitor    | 0402 Resistor      | 0603 Inductor  | PC Mini Black | PC Mini Red | High Performance Wide Band Amplifier | SMA End Launch Jack Receptacle 0.062" | SMA End Launch Jack Receptacle 0.062" | 3 pin header   | Shorting Jumper           | Brown Box 9 3/16" x 7" x 7/8" | ESD Bag 4" x 6" w/ESD Logo | Pink Foam 12" x 12" x 5MM | Web Instructions |
| TOL                  | 10%            | 0.1pF          | 10%                         | 5%                | 1%                 | 5%             |               |             |                                      |                                       |                                       |                |                           |                               |                            |                           |                  |
| VALUE                | 0.01uF         | 0.2pF          | 10uF                        | 470pF             | 21.5K              | 220nH          | Test Point    | Test Point  | MAX2614                              | Connector                             | Connector Do Not Install              | 1X3 Pin Header | Shunt                     |                               |                            |                           |                  |
| QTY                  | 3              | 3              | 1                           | 1                 | 1                  | 1              | 1             | 1           | 1                                    | 2                                     | 0                                     | 1              | 1                         | 1                             | 1                          | 1                         | 1                |
| REFERENCE DESIGNATOR | C1 C2 C6       | C3 C7 C8       | C4                          | C5                | R1                 | L0             | GND           | VCC         | U1                                   | RFIN RFOUT                            | CALIN CALOUT                          | J1             | J1 Install on Pin 2 and 3 | Pack Out                      |                            |                           |                  |
| ITEM                 | C1 C2 C6       | 2              | 3                           | 4                 | 5                  | 6              | 7             | 8           | 9                                    | 10                                    | 11                                    | 12             | 13                        |                               |                            |                           |                  |

## MAX2615EV Bill of Materials

## Evaluates: MAX2612-MAX2616

| ASSEMBLY NOTES       |                |                |                             |                   |                    |                |               |             |                                      |                                       | Leave Site Open                       |                |                           |                               |                                                      |                  |
|----------------------|----------------|----------------|-----------------------------|-------------------|--------------------|----------------|---------------|-------------|--------------------------------------|---------------------------------------|---------------------------------------|----------------|---------------------------|-------------------------------|------------------------------------------------------|------------------|
| PART NUMBER          | GRM155R71E103K | GRM1555C1HR20B | TAJR106K006                 | GRM1885C1H471JA01 | Use Lead-Free Only | 0603HP-R22XJLU | 5001          | 5000        | MAX2615ETA+                          | 142-0701-851                          | 142-0701-851                          | PEC36SAAN      | STC02SYAN                 |                               |                                                      |                  |
| MANUFACTURER         | Murata         | Murata         | AVX                         | Murata            |                    | Coilcraft      | Keystone      | Keystone    | Maxim                                | Johnson                               | Johnson                               | Sullins        | Sullins                   |                               |                                                      |                  |
| DESCRIPTION          | 0402 Capacitor | 0402 Capacitor | Tantalum Capacitor 'R' Case | 0603 Capacitor    | 0402 Resistor      | 0603 Inductor  | PC Mini Black | PC Mini Red | High Performance Wide Band Amplifier | SMA End Launch Jack Receptacle 0.062" | SMA End Launch Jack Receptacle 0.062" | 3 pin header   | Shorting Jumper           | Brown Box 9 3/16" x 7" x 7/8" | ESD Bag 4" x 6" w/ESD Logo Pink Foam 12" x 12" x 5MM | Web Instructions |
| TOL                  | 10%            | 0.1pF          | 10%                         | 5%                | 1%                 | 5%             |               |             |                                      |                                       |                                       |                |                           |                               |                                                      |                  |
| VALUE                | 0.01uF         | 0.2pF          | 10uF                        | 470pF             | 21.5K              | 220nH          | Test Point    | Test Point  | MAX2615                              | Connector                             | Connector Do Not Install              | 1X3 Pin Header | Shunt                     |                               |                                                      |                  |
| QTY                  | 3              | 3              | 1                           | 1                 | 1                  | 1              | 1             | 1           | 1                                    | 2                                     | 0                                     | 1              | 1                         | 1                             | 1 1                                                  | 1                |
| REFERENCE DESIGNATOR | C1 C2 C6       | C3 C7 C8       | C4                          | C5                | R1                 | L0             | GND           | VCC         | U1                                   | RFIN RFOUT                            | CALIN CALOUT                          | J1             | J1 Install on Pin 2 and 3 | Pack Out                      |                                                      |                  |
| ITEM                 | C1 C2 C6       | 2              | 3                           | 4                 | 5                  | 6              | 7             | 8           | 9                                    | 10                                    | 11                                    | 12             | 13                        |                               |                                                      |                  |

## MAX2616EV Bill of Materials

## Evaluates: MAX2612-MAX2616

| ASSEMBLY NOTES       |                |                |                             |                   |                    |                |               |             |                                      |                                       | Leave Site Open                       |                |                           |                               |                            |                           |                  |
|----------------------|----------------|----------------|-----------------------------|-------------------|--------------------|----------------|---------------|-------------|--------------------------------------|---------------------------------------|---------------------------------------|----------------|---------------------------|-------------------------------|----------------------------|---------------------------|------------------|
| PART NUMBER          | GRM155R71E103K | GRM1555C1HR20B | TAJR106K006                 | GRM1885C1H471JA01 | Use Lead-Free Only | 0603HP-R22XJLU | 5001          | 5000        | MAX2616ETA+                          | 142-0701-851                          | 142-0701-851                          | PEC36SAAN      | STC02SYAN                 |                               |                            |                           |                  |
| MANUFACTURER         | Murata         | Murata         | AVX                         | Murata            |                    | Coilcraft      | Keystone      | Keystone    | Maxim                                | Johnson                               | Johnson                               | Sullins        | Sullins                   |                               |                            |                           |                  |
| DESCRIPTION          | 0402 Capacitor | 0402 Capacitor | Tantalum Capacitor 'R' Case | 0603 Capacitor    | 0402 Resistor      | 0603 Inductor  | PC Mini Black | PC Mini Red | High Performance Wide Band Amplifier | SMA End Launch Jack Receptacle 0.062" | SMA End Launch Jack Receptacle 0.062" | 3 pin header   | Shorting Jumper           | Brown Box 9 3/16" x 7" x 7/8" | ESD Bag 4" x 6" w/ESD Logo | Pink Foam 12" x 12" x 5MM | Web Instructions |
| TOL                  | 10%            | 0.1pF          | 10%                         | 5%                | 1%                 | 5%             |               |             |                                      |                                       |                                       |                |                           |                               |                            |                           |                  |
| VALUE                | 0.01uF         | 0.2pF          | 10uF                        | 470pF             | 21.5K              | 220nH          | Test Point    | Test Point  | MAX2616                              | Connector                             | Connector Do Not Install              | 1X3 Pin Header | Shunt                     |                               |                            |                           |                  |
| QTY                  | 3              | 3              | 1                           | 1                 | 1                  | 1              | 1             | 1           | 1                                    | 2                                     | 0                                     | 1              | 1                         | 1                             | 1                          | 1                         | 1                |
| REFERENCE DESIGNATOR | C1 C2 C6       | C3 C7 C8       | C4                          | C5                | R1                 | L0             | GND           | VCC         | U1                                   | RFIN RFOUT                            | CALIN CALOUT                          | J1             | J1 Install on Pin 2 and 3 | Pack Out                      |                            |                           |                  |
| ITEM                 | C1 C2 C6       | 2              | 3                           | 4                 | 5                  | 6              | 7             | 8           | 9                                    | 10                                    | 11                                    | 12             | 13                        |                               |                            |                           |                  |

## MAX2612-MAX2616 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                  | PAGES CHANGED   |
|-------------------|-----------------|------------------------------|-----------------|
|                 0 | 9/16            | Initial release              | -               |
|                 1 | 10/17           | Updated Ordering Information | 7               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX2612-MAX2616