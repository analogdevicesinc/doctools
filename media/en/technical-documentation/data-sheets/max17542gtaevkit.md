<!-- lastmod 2022-08-02 -->
## MAX17542G 3.3V Output Evaluation Kit

## General Description

The MAX17542G 3.3V EV kit provides a proven design to  evaluate  the  MAX17542G  3.3V  high-efficiency,  highvoltage,  synchronous  step-down  DC-DC  converter  in a  TDFN  package.  The  EV  kit  generates  3.3V  at  load currents up to 1A from a 5V to 42V input supply. The EV kit features a 600kHz fixed switching frequency for optimum efficiency  and  component  size.  The  EV  kit  features  a  forcedPWM control  scheme  that  provides  constant  switchingfrequency  operation  at  all  load  and  line  conditions.

## Features

- Operates from a 5V to 42V Input Supply
- 3.3V Output Voltage
- 1A Output Current
- 600kHz Switching Frequency
- Enable/UVLO Input
- Resistor-Programmable UVLO Threshold
- Open-Drain RESET Output
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## MAX17542G in 3.3V Output-Voltage Application

## Quick Start

## Recommended Equipment

- MAX17542G 3.3V EV kit
- 5V to 42V, 2A DC input power supply
- Load capable of sinking 1A
- Digital voltmeter (DVM)
- Function generator

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify the board operation. Caution: Do not turn on power supply until all connections are completed.

- 1) Set the power supply at a voltage between 5V and 42V. Disable the power supply.
- 2) Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad. Connect the positive terminal of the 1A load to the VOUT PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3) Connect the DVM across the VOUT PCB pad and the nearest PGND PCB pad.
- 4) Turn on the DC power supply.
- 5) Enable the load.
- 6) Verify that the DVM displays 3.3V.

To  turn-on/off  the  part  from  EN/UVLO,  follow  the  steps below:

- 1) Connect the power supply to the EV kit and turn on the power supply. Set the power supply at a voltage between 5V and 42V.
- 2) Connect the function generator output to the EN/ UVLO test loop.
- 3) EN/UVLO rising threshold is 1.24V and falling threshold is 1.11V. Make sure that the voltage-high and voltagelow levels of the function generator output are greater than 1.24V and less than 1.11V, respectively.
- 4) While powering down the EV kit, first disconnect the function generator output from the EN/UVLO test loop and then turn off the DC power supply.

<!-- image -->

## MAX17542G 3.3V Output Evaluation Kit

## Detailed Description of Hardware

The  MAX17542G  3.3V  EV  kit  provides  a  proven  design to  evaluate  the  MAX17542G  3.3V  high-efficiency,  highvoltage,  synchronous  step-down  DC-DC  converter  in  a TDFN package. The EV kit generates 3.3V at load currents up to 1A from a 5V to 42V input supply. The EV kit features a  600kHz  fixed  switching  frequency  for  optimum  efficiency and component size. The EV kit features a forcedPWM  control  scheme  that  provides  constant  switchingfrequency operation at all load and line conditions.

The  EV  kit  includes  an  EN/UVLO  PCB  pad  to  enable control  of  the  converter  output.  An  additional RESET PCB pad is available for monitoring the open-drain logic output.  The  VCC  PCB  pad  helps  measure  the  internal LDO voltage.

## Soft-Start Input (SS)

The  device  utilizes  an  adjustable  soft-start  function  to limit  inrush  current  during  startup.  The  soft-start  time  is adjusted by the value of C3, the external capacitor from SS to GND. To adjust the soft-start time, determine C3 using the following formula:

<!-- formula-not-decoded -->

where t SS   is  the  required  soft-start  time  in  milliseconds and C3 is in nanofarads.

## MAX17542G in 3.3V Output-Voltage Application

## Regulator Enable/Undervoltage-Lockout Level (EN/UVLO)

The  device  features  an  EN/UVLO  input.  For  normal operation, no shunts should be installed across pins 1-2 or 2-3 on jumper JU1. To disable the output, install a shunt across pins 2-3 on JU1 and the EN/UVLO pin is pulled to GND. See Table 1 for JU1 settings.

## Setting the Undervoltage-Lockout Level

The  device  offers  an  adjustable  input  undervoltagelockout  level.  Set  the  voltage  at  which  the  device  turns on  with  a  resistive  voltage-divider  connected  from  VIN to  GND (see Figure 1). Connect the center node of the divider to EN/UVLO.

Choose R1 to be 3.3MΩ and then calculate R2 as follows:

<!-- formula-not-decoded -->

where V INU  is the voltage at which the device is required to turn on. Ensure that V INU  is higher than 0.8 x V OUT .

## Adjusting the Output Voltage

The device offers  an  adjustable  output  voltage.  Set  the output voltage with a resistive voltage-divider connected from the positive terminal of the output capacitor (V OUT ) to  GND  (see  schematic  attached  to  PDF).  Connect  the center node of the voltage-divider to FB.

To  choose the values of R4 and R5, select the parallel combination of R4 and R5, with R P less than 15kΩ. Once RP is selected, calculate R4 as follows:

<!-- formula-not-decoded -->

Calculate R5 as follows:

<!-- formula-not-decoded -->

## Table 1. Regulator Enable (EN/UVLO) Jumper JU1 Settings

| SHUNT POSITION   | EV/UVLO PIN                                                | MAX17542G 3.3V OUTPUT                                          |
|------------------|------------------------------------------------------------|----------------------------------------------------------------|
| Not installed*   | Connected to the center node of resistor-divider R1 and R2 | Enabled, UVLO level set through the R1 and R2 resistor-divider |
| 2-3              | Connected to GND                                           | Disabled                                                       |

*Default position.

│

## MAX17542G 3.3V Output Evaluation Kit

## EV Kit Performance Report

Figure 1. MAX17542G 3.3V Output Load and Line Regulation

<!-- image -->

Figure 3. MAX17542G 3.3V Output No Load to 500mA Load Transient

<!-- image -->

## MAX17542G in 3.3V Output-Voltage Application

Figure 2. MAX17542G 3.3V Output Efficiency

<!-- image -->

Figure 4. MAX17542G 3.3V Output 500mA to 1A Load Transient

<!-- image -->

│

## EV Kit Performance Report (continued)

<!-- image -->

Figure 5. MAX17542G 3.3V Output Full-Load Bode Plot (V IN  = 24V)

<!-- image -->

Figure 7. MAX17542G 3.3V Output EV Kit PCB LayoutComponent Side

Figure 6. MAX17542G 3.3V Output EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 8. MAX17542G 3.3V Output EV Kit PCB Layout-Solder Side

<!-- image -->

│

## MAX17542G 3.3V Output Evaluation Kit

## EV Kit Performance Report (continued)

Figure 9. MAX17542G 3.3V Output EV Kit Component Placement Guide-Top Solder Mask

<!-- image -->

## MAX17542G in 3.3V Output-Voltage Application

Figure 10. MAX17542G 3.3V Output EV Kit Component Placement Guide-Bottom Solder Mask

<!-- image -->

│

## MAX17542G 3.3V Output Evaluation Kit

## Component Suppliers

| SUPPLIER        | WEBSITE           |
|-----------------|-------------------|
| Coilcraft, Inc. | www.coilcraft.com |
| Murata Americas | www.murata.com    |
| Panasonic Corp. | www.panasonic.com |
| TDK Corp.       | www.tdk.com       |

Note: Indicate that you are using the MAX17542G when contacting these component suppliers.

## Component Information and Schematic

See  the  following  links  for  component  information  and schematic:

- MAX17542G 3.3V EV BOM
- MAX17542GA 3.3V EV Schematic

## Ordering Information

| PART              | TYPE   |
|-------------------|--------|
| MAX17542GTAEVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX17542G in 3.3V Output-Voltage Application

## MAX17542G 3.3V Output Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPplied. Ma[iP ,ntegrated reserYes the right to change the circuitr\ and specifications without notice at an\ tiPe.

│

## MAX17542G in 3.3V Output-Voltage Application

<!-- image -->

BILL OF MATERIALS - Revision 6/15

<!-- image -->

|   Reference | Descrip ti on                                  |   Quan ti ty | Designator       | Part Number             |
|-------------|------------------------------------------------|--------------|------------------|-------------------------|
|           1 | 2.2 μ F ±10%, 50V X7R ceramic capacitor (1210) |            1 | C1               | TDK C3225X7R1H225K      |
|           2 | 1 μ F ±10%, 6.3V X7R ceramic capacitor (0603)  |            1 | C2               | Murata GRM188R70J105K   |
|           3 | 3300pF ±10%, 50V X7R ceramic capacitor (0402)  |            1 | C3               | Murata GRM155R71H332K   |
|           4 | 22uF ±10%, 10V X7R ceramic capacitor (1210)    |            1 | C4               | Murata GRM32ER71A226K   |
|           5 | 2700pF ±10%, 50V X7R ceramic capacitor (0402)  |            1 | C5               | Murata GRM155R71H272KA  |
|           6 | 33uF 50V aluminum electroly ti c (D=6.3mm)     |            1 | C7               | Panasonic EEE-FK1H330XP |
|           7 | 18pF ±5%, 50V C0G ceramic capacitor (0402)     |            1 | C9               | Murata GRM1555C1H180J   |
|           8 | 3-pin header (36-pin header 0.1' centers )     |            1 | JU1              | Sullins: PTC36SAAN      |
|           9 | 15uH Inductor (4mm x 4mmx4.1mm)                |            1 | L1               | Coilcra ft XAL4040-153  |
|          10 | 3.32M ohm ±1%, resistor (0402)                 |            1 | R1               |                         |
|          11 | 825k ohm ±1%, resistor (0402)                  |            1 | R2               |                         |
|          12 | 22.1k ohm ±1%, resistor (0402)                 |            1 | R3               |                         |
|          13 | 48.7k ohm ±1%, resistor (0402)                 |            1 | R4               |                         |
|          14 | 18.2k ohm ±1%, resistor (0402)                 |            1 | R5               |                         |
|          15 | 10k ohm ±1%, resistor (0402)                   |            1 | R6               |                         |
|          16 | Not installed, OPEN (0402)                     |            0 | R7               |                         |
|          17 | Buck Converter (10TDFN 3mmx2mm) MAX17542GATB+  |            1 | U1               | MAX17542GATB+           |
|          18 | Shunt                                          |            1 | See Jumper Table | SULLINS STC02SYAN       |

Jumper Table

| JUMPER   | SHUNT POSITION   |
|----------|------------------|
| JU1      | 1-2              |