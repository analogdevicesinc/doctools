<!-- lastmod 2022-08-02 -->
## MAX17502E Evaluation Kit

## Evaluate: MAX17502E in TDFN Package

## General Description

The MAX17502E evaluation kit (EV kit) provides a proven design to evaluate the MAX17502E high-efficiency, high -voltage,  synchronous  step-down  DC-DC  converter.  The EV kit uses this device to generate a fixed 3.3V, at load currents up to 1A, from a 4.5V to 60V input supply. The EV kit  features  a  forced-PWM control  scheme that pro -vides  constant  switching-frequency  operation  at  all  load and line conditions.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| C1            |     1 | 2.2µF ±10%, 100V X7R ceramic capacitor (1210) Murata GRM32ER72A225K |
| C2            |     1 | 1µF ±10%, 6.3V X7R ceramic capacitor (0603) Murata GRM188R70J105K   |
| C3            |     1 | 3300pF ±10%, 50V X7R ceramic capacitor (0402) Murata GRM155R71H332K |
| C4            |     1 | 22µF ±10%, 10V X7R ceramic capacitor (1210) Murata GRM32ER71A226K   |
| C7            |     1 | 33µF, 80V aluminum electrolytic (D = 8mm) Panasonic EEEFK1K330P     |

## Features

- Operates from a 4.5V to 60V Input Supply
- 3.3V Fixed Output Voltage
- 1A Output Current
- 600kHz Switching Frequency
- Enable/UVLO Input
- Resistor-Programmable UVLO Threshold
- Open-Drain RESET Output
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested

Orderin g Information appears at end of data sheet.

| DESIGNATION   |   QTY | DESCRIPTION                                                   |
|---------------|-------|---------------------------------------------------------------|
| JU1           |     1 | 3-pin header                                                  |
| L1            |     1 | 15µH, 2A inductor (6mm x 6mm x 3.5mm) Coilcraft LPS6235-153ML |
| R1            |     1 | 3.32MΩ ±1% resistor (0402)                                    |
| R2            |     1 | 866kΩ ±1% resistor (0402)                                     |
| R4            |     1 | 100Ω resistor (0402)                                          |
| R6            |     1 | 10kΩ ±1% resistor (0402)                                      |
| TP1, TP2      |     0 | Not installed, test points                                    |
| U1            |     1 | Buck converter (10 TDFN-EP*) Maxim MAX17502EATB+              |
| -             |     1 | Shunt                                                         |
| -             |     1 | PCB: MAX17502ET EVALUATION KIT                                |

* EP = Exposed pad.

<!-- image -->

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Coilcraft, Inc.                        | 847-639-6400 | www.coilcraft.com           |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |

Note: Indicate that you are using the MAX17502 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

-  MAX17502E EV kit
- 4.5V to 60V, 2A DC input power supply
- Load capable of sinking 1A
- Digital voltmeter (DVM)
- Function generator

## Procedure

The EV kit is fully assembled and tested. Follow the steps below  to  verify  board  operation. Caution:  Do  not  turn on power supply until all connections are completed.

- 1)  Set the power supply at a voltage between 4.5V and 60V. Disable the power supply.
- 2)  Connect the positive terminal of the power supply to the  VIN  PCB  pad  and  the  negative  terminal  to  the nearest PGND PCB pad. Connect the positive terminal of the 1A load to the VOUT PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3)  Connect the DVM across the VOUT PCB pad and the nearest PGND PCB pad.
- 4)  Verify  that  a  shunt  is  installed  across  pins  1-2  on jumper JU1.
- 5)  Turn on the DC power supply.
- 6)  Enable the load.
- 7)  Verify that the DVM displays the expected voltage.

To  turn  on/turn  off  the  part  from  EN/UVLO,  follow  the steps below:

- 1)  Remove resistors R1 and R2 and the jumper installed across pins 1-2 on jumper JU1.
- 2)  Connect the power supply to the EV kit and turn on the power supply. Set the power supply at a voltage between 4.5V and 60V.
- 3)  Connect the function generator output to the EN/UVLO test loop.
- 4)  EN/UVLO rising threshold is 1.24V and falling thresh -old  is  1.11V.  Make  sure  that  the  voltage-high  and voltage-low levels of the function generator output are greater than 1.24V and less than 1.11V, respectively.
- 5)  When powering down the EV kits, first disconnect the function generator output from the EN/UVLO test loop and then turn off the DC power supply.

Care should be taken in board layout and systems wiring to prevent violation of the absolute maximum rating of the FB/VO pin under short-circuit conditions. Under such con -ditions, it  is  possible  for  the  ceramic output capacitor to oscillate with the board or wiring inductance between the capacitor and short-circuited load, and thereby cause the absolute maximum rating of FB/VO (-0.3V) to be exceed -ed. This  parasitic  board  or  wiring  inductance  should  be minimized and the output voltage waveform under shortcircuit  operation  should  be  verified  to  ensure  that  the absolute maximum rating of FB/VO is not exceeded. This EV kit includes a 100Ω protection resistor to protect the part under conditions where this rating might be exceed -ed,  and  is  not  required  in  applications  where  the  -0.3V (max) is not violated (see the Absolute Maximum Ratings section of the MAX17502 IC data sheet).

## MAX17502E Evaluation Kit

## Detailed Description of Hardware

The  MAX17502E  EV  kit  provides  a  proven  design  to evaluate  the  MAX17502E  high-efficiency,  high-voltage, synchronous  step-down  DC-DC  converter.  The  EV  kit generates a fixed 3.3V, at load currents up to 1A, from a 4.5V to 60V input supply. The EV kit features a 600kHz fixed  switching  frequency  for  optimum  efficiency  and component  size.  EV  kit  features  a  forced-PWM  control scheme that provides constant switching-frequency oper -ation at all load and line conditions.

The EV kit includes an EN/UVLO PCB pad and jumper JU1 to  enable  control  of  the  converter  output. An  addi -tional RESET PCB  pad  is  available  for  monitoring  the converter output. The VCC PCB pad helps measure the internal LDO voltage.

## Soft-Start Input (SS)

The  device  utilizes  an  adjustable  soft-start  function  to limit  inrush  current  during  startup.  The  soft-start  time  is adjusted by the value of C3, the external capacitor from SS to GND. To adjust the soft-start time, determine C3 using the following formula:

<!-- formula-not-decoded -->

where t SS   is  the  required  soft-start  time  in  milliseconds and C3 is in nanofarads.

Table 1. Regulator Enable (EN/UVLO) Jumper JU1 Settings

| SHUNT POSITION   | EN/UVLO PIN                                                | MAX17502_ OUTPUT                                               |
|------------------|------------------------------------------------------------|----------------------------------------------------------------|
| 1-2*             | Connected to IN                                            | Enabled                                                        |
| Not installed    | Connected to the center node of resistor-divider R1 and R2 | Enabled, UVLO level set through the R1 and R2 resistor-divider |
| 2-3              | Connected to GND                                           | Disabled                                                       |

* Default position.

## Evaluate: MAX17502E in TDFN Package

## Regulator Enable/UndervoltageLockout Level (EN/UVLO)

The  device  features  an  EN/UVLO  input.  For  normal operation, a shunt should be installed across pins 1-2 on jumper JU1. To disable the output, install a shunt across pins 2-3 on JU1 and the EN/UVLO pin is pulled to GND. See Table 1 for JU1 settings.

## Setting the Undervoltage-Lockout Level

The devices offer an adjustable input undervoltagelockout level.  Set  the  voltage  at  which  the  device  turns  on  with a  resistive voltage-divider connected from VIN to GND. Connect the center node of the divider to EN/UVLO.

Choose R1 to be 3.3MΩ and then calculate R2 as follows:

<!-- formula-not-decoded -->

where V INU  is the voltage at which the device is required to turn on.

## EV Kit Performance Report

Figure 1. MAX17502E Load and Line Regulation

<!-- image -->

Figure 2. MAX17502E Efficiency

<!-- image -->

## Ordering Information

# Denotes RoHS compliant.

| PART             | TYPE   |
|------------------|--------|
| MAX17502ETEVKIT# | EV Kit |

<!-- image -->

Figure 3. MAX17502E Full-Load Bode Plot (VIN = 24V)

Figure 4. MAX17502E No Load to 500mA Load Transient

<!-- image -->

Figure 5. MAX17502E 500mA to 1A Load Transient

<!-- image -->

## MAX17502E EV Kit Schematic

<!-- image -->

## MAX17502E PCB Layout

MAX17502E EV Kit Component Placement GuideComponent Side

<!-- image -->

## Evaluate: MAX17502E in TDFN Package

MAX17502E EV Kit PCB Layout-Component Side

<!-- image -->

MAX17502E EV Kit PCB Layout-Solder Side

<!-- image -->

## MAX17502E PCB Layout (continued)

MAX17502E EV Kit PCB Layout-Top Solder Mask

<!-- image -->

MAX17502E EV Kit PCB Layout-Bottom Solder Mask

<!-- image -->

## MAX17502E Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                            | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 10/12           | Initial release                                                                                                                                                                                        | -               |
|                 1 | 10/13           | Replaced the R4 resistor value from 0 W to 100 W in the Component List and Figure 6 schematic; added new paragraph to the Procedure section about preventing violation of the abs max rating for FB/VO | 1, 2, 5         |
|                 2 | 11/17           | Updated Quick Start section.                                                                                                                                                                           | 2               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-462, or visit Maxim Integrated's website at w.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluate: MAX17502E in TDFN Package