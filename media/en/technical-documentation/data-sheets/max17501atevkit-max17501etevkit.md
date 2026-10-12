<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX17501A/MAX17501E Evaluation Kits Evaluate: MAX17501A/MAX17501E in TDFN Packages

## General Description

The  MAX17501A/MAX17501E  evaluation  kits  (EV  kits) provide  proven  designs  to  evaluate  the  MAX17501A/ MAX17501E  high-efficiency,  high-voltage,  synchronous step-down  DC-DC  converters.  The  EV  kits  use  these devices  to  generate  a  fixed  3.3V,  at  load  currents up  to  500mA,  from  a  4.5V  to  60V  input  supply.    The MAX17501A supports a PFM control scheme with high light-load  efficiency,  while  the  MAX17501E  features  a forced-PWM  control  scheme  that  provides  constant switching-frequency operation at all load and line conditions.

Ordering Information appears at end of data sheet.

| DESIGNATION   |   QTY | DESCRIPTION                                                              |
|---------------|-------|--------------------------------------------------------------------------|
| C1            |     1 | 1 F F Q 10%, 100V X7R ceramic capacitor (1206) Murata GRM31CR72A105KA01L |
| C2            |     1 | 1 F F Q 10%, 6.3V X7R ceramic capacitor (0603) Murata GRM188R70J105K     |
| C3            |     1 | 3300pF Q 10%, 50V X7R ceramic capacitor (0402) Murata GRM155R71H332K     |
| C4            |     1 | 10 F F Q 10%, 10V X7R ceramic capacitor (1206) Murata GRM31CR71A106K     |
| C7            |     1 | 33 F F, 80V aluminum electrolytic (D = 8mm) Panasonic EEEFK1K330P        |

Features

- S Operates from a 4.5V to 60V Input Supply
- S 3.3V Fixed Output Voltage
- S 500mA Output Current
- S 600kHz Switching Frequency
- S Enable/UVLO Input
- S Resistor-Programmable UVLO Threshold
- S Open-Drain RESET Output
- S Overcurrent and Overtemperature Protection
- S PFM/PWM (MAX17501A EV Kit)
- S PWM (MAX17501E EV Kit)
- S Proven PCB Layout
- S Fully Assembled and Tested

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                       |
|---------------|-------|-------------------------------------------------------------------|
| JU1           |     1 | 3-pin header                                                      |
| L1            |     1 | 33 F H, 1.4A inductor (6mm x 6mm x 3.5mm) Coilcraft LPS6235-333ML |
| R1            |     1 | 3.32M I Q 1% resistor (0402)                                      |
| R2            |     1 | 866k I Q 1% resistor (0402)                                       |
| R4            |     1 | 100 I resistor (0402)                                             |
| R6            |     1 | 10k I Q 1% resistor (0402)                                        |
| TP1, TP2      |     0 | Not installed, test points                                        |
| U1            |     1 | See the EV Kit-Specific Component List                            |
| -             |     1 | Shunt                                                             |
| -             |     1 | PCB: See the EV Kit-Specific Component List                       |

## MAX17501A/MAX17501E Evaluation Kits

## Evaluate: MAX17501A/MAX17501E in TDFN Packages

## EV Kit-Specific Component List

| EV KIT           | DESIGNATION   | DESCRIPTION                                      |
|------------------|---------------|--------------------------------------------------|
| MAX17501ATEVKIT# | U1            | Buck converter (10 TDFN-EP*) Maxim MAX17501AATB+ |
| MAX17501ATEVKIT# | -             | PCB: MAX17501AT EVALUATION KIT                   |
| MAX17501ETEVKIT# | U1            | Buck converter (10 TDFN-EP*) Maxim MAX17501EATB+ |
| MAX17501ETEVKIT# | -             | PCB: MAX17501ET EVALUATION KIT                   |

## Procedure

The EV kits are fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on power supply until all connections are completed.

- 1)  Set the power supply at a voltage between 4.5V and 60V. Disable the power supply.
- 2)  Connect  the  positive  terminal  of  the  power  supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad. Connect the positive terminal of the 500mA load to the VOUT PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3)  Connect the DVM across the VOUT PCB pad and the nearest PGND PCB pad.
- 4)  Verify  that  a  shunt  is  installed  across  pins  1-2  on jumper JU1.
- 5)  Turn on the DC power supply.
- 6)  Enable the load.
- 7)  Verify that the DVM displays the expected voltage.

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Coilcraft, Inc.                        | 847-639-6400 | www.coilcraft.com           |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |

Note:

Indicate that you are using the MAX17501 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- MAX17501A or MAX17501E EV kit
- 4.5V to 60V, 1A DC input power supply
- Load capable of sinking 500mA
- Digital voltmeter (DVM)
- Function generator

To  turn  on/turn  off  the  part  from  EN/UVLO,  follow  the steps below:

- 1)  Remove resistors R1 and R2 and the jumper installed across pins 1-2 on jumper JU1.
- 2)  Connect the power supply to the EV kit and turn on the power supply. Set the power supply at a voltage between 4.5V and 60V.
- 3)  Connect the function generator output to the EN/UVLO test loop.
- 4)  EN/UVLO rising threshold is 1.24V and falling threshold  is  1.11V.  Make  sure  that  the  voltage-high  and voltage-low levels of the function generator output are greater than 1.24V and less than 1.11V, respectively.
- 5)  When powering down the EV kits, first disconnect the function generator output from the EN/UVLO test loop and then turn off the DC power supply.

Care should be taken in board layout and systems wiring to prevent violation of the absolute maximum rating of the FB/VO pin under short-circuit conditions. Under such conditions, it  is  possible  for  the  ceramic output capacitor to oscillate with the board or wiring inductance between the capacitor and short-circuited load, and thereby cause the absolute maximum rating of FB/VO (-0.3V) to be exceed -ed.  This  parasitic  board  or  wiring  inductance  should  be minimized and the output voltage waveform under shortcircuit  operation  should  be  verified  to  ensure  that  the absolute maximum rating of FB/VO is not exceeded.

## MAX17501A/MAX17501E Evaluation Kits

## Evaluate: MAX17501A/MAX17501E in TDFN Packages

## Detailed Description of Hardware

The  MAX17501A/MAX17501E  EV  kits  provide  proven designs  to  evaluate  the  MAX17501A/MAX17501E  highefficiency, high-voltage, synchronous step-down DC-DC converters.  The  EV  kits  generate  a  fixed  3.3V,  at  load currents  up  to  500mA,  from  a  4.5V  to  60V  input  supply.  The  EV  kits  feature  a  600kHz  fixed  switching  frequency for optimum efficiency and component size. The MAX17501A EV kit supports a PFM control scheme with high  light-load  efficiency,  while  the  MAX17501E  EV  kit features  a  forced-PWM  control  scheme  that  provides constant  switching-frequency  operation  at  all  load  and line conditions.

The EV kits include an EN/UVLO PCB pad and jumper JU1  to  enable  control  of  the  converter  output.  An additional RESET PCB  pad  is  available  for  monitor -ing  the  converter  output.  The  VCC  PCB  pad  helps measure the internal LDO voltage.

## Soft-Start Input (SS)

The  devices  utilize  an  adjustable  soft-start  function  to limit  inrush  current  during  startup.  The  soft-start  time  is adjusted by the value of C3, the external capacitor from SS to GND. To adjust the soft-start time, determine C3 using the following formula:

C3 = 5.55 x t SS

Table 1. Regulator Enable (EN/UVLO) Jumper JU1 Settings

| SHUNT POSITION   | EN/UVLO PIN                                                | MAX17501_ OUTPUT                                               |
|------------------|------------------------------------------------------------|----------------------------------------------------------------|
| 1-2*             | Connected to IN                                            | Enabled                                                        |
| Not installed    | Connected to the center node of resistor-divider R1 and R2 | Enabled, UVLO level set through the R1 and R2 resistor-divider |
| 2-3              | Connected to GND                                           | Disabled                                                       |

* Default position.

where t SS  is  the  required  soft-start  time  in  milliseconds and C3 is in nanofarads.

## Regulator Enable/UndervoltageLockout Level (EN/UVLO)

The  devices  feature  an  EN/UVLO  input.  For  normal operation, a shunt should be installed across pins 1-2 on jumper JU1. To disable the output, install a shunt across pins 2-3 on JU1 and the EN/UVLO pin is pulled to GND. See Table 1 for JU1 settings.

Setting the Undervoltage-Lockout Level The  devices  offer  an  adjustable  input  undervoltagelockout  level.  Set  the  voltage  at  which  the  device  turns on with a resistive voltage-divider connected from VIN to GND. Connect the center node of the divider to EN/UVLO.

Choose R1 to be 3.3M I and then calculate R2 as follows:

<!-- formula-not-decoded -->

where V INU  is the voltage at which the device is required to turn on.

## MAX17501A/MAX17501E Evaluation Kits

## Evaluate: MAX17501A/MAX17501E

## in TDFN Packages

## EV Kits Performance Report

<!-- image -->

Figure 3. MAX17501A Efficiency

<!-- image -->

Figure 4. MAX17501E Efficiency

Figure 1. MAX17501A Load and Line Regulation

<!-- image -->

Figure 2. MAX17501E Load and Line Regulation

<!-- image -->

## MAX17501A/MAX17501E Evaluation Kits

## Evaluate: MAX17501A/MAX17501E in TDFN Packages

## EV Kits Performance Report (continued)

<!-- image -->

Figure 7. MAX17501E No Load to 250mA Load Transient

<!-- image -->

Figure 8. MAX17501A/MAX17501E 250mA to 500mA Load Transient

Figure 5. MAX17501A/MAX17501E Full-Load Bode Plot (VIN = 24V)

<!-- image -->

Figure 6. MAX17501A 5mA to 255mA Load Transient

<!-- image -->

## MAX17501A/MAX17501E Evaluation Kits

## Evaluate: MAX17501A/MAX17501E in TDFN Packages

Figure 9. MAX17501A/MAX17501E EV Kits Schematic

<!-- image -->

## MAX17501A/MAX17501E Evaluation Kits

## Evaluate: MAX17501A/MAX17501E in TDFN Packages

<!-- image -->

Figure 10. MAX17501A EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 11. MAX17501E EV Kit Component Placement GuideComponent Side

Figure 12. MAX17501A/MAX17501E EV Kits PCB LayoutComponent Side

<!-- image -->

Figure 13. MAX17501A/MAX17501E EV Kits PCB LayoutSolder Side

<!-- image -->

## MAX17501A/MAX17501E Evaluation Kits

## Evaluate: MAX17501A/MAX17501E in TDFN Packages

Figure 14. MAX17501A/MAX17501E EV Kits PCB Layout-Top Solder Mask

<!-- image -->

Figure 15. MAX17501A/MAX17501E EV Kits PCB LayoutBottom Solder Mask

<!-- image -->

## Evaluate: MAX17501A/MAX17501E MAX17501A/MAX17501E Evaluation Kits

## in TDFN Packages

## Ordering Information

| PART              | TYPE   |
|-------------------|--------|
| MAX17501ATEVKIT # | EV Kit |
| MAX17501ETEVKIT # | EV Kit |

# Denotes RoHS compliant.

## MAX17501A/MAX17501E Evaluation Kits

## Evaluate: MAX17501A/MAX17501E in TDFN Packages

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                            | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 8/12            | Initial release                                                                                                                                                                                        | -               |
|                 1 | 10/13           | Replaced the R4 resistor value from 0 W to 100 W in the Component List and Figure 9 schematic; added new paragraph to the Procedure section about preventing violation of the abs max rating for FB/VO | 1, 2, 6         |

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.