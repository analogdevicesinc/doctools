<!-- lastmod 2022-08-02 -->
## MAX17541G 5V Output Evaluation Kit

## General Description

The  MAX17541G  5V  Output  EV  kit  provides  a  proven design  to  evaluate  the  MAX17541G  5V  high-efficiency, high-voltage,  synchronous  step-down  DC-DC  converter. The EV kit generates 5V at load currents up to 500mA from  a  6V  to  42V  input  supply.  The  EV  kit  features  a 600kHz fixed switching frequency for optimum efficiency and component size. The EV kit features a forced-PWM control scheme that provides constant switching-frequency operation at all load and line conditions.

## Features

- Operates from a 6V to 42V Input Supply
- 5V Output Voltage
- 500mA Output Current
- 600kHz Switching Frequency
- Enable/UVLO Input
- Resistor-Programmable UVLO Threshold
- Open-Drain RESET Output
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX17541G in 5V

Output-Voltage Application

## Quick Start

## Recommended Equipment

- MAX17541G 5V Output EV kit
- 6V to 42V, 2A DC input power supply
- Load capable of sinking 500mA
- Digital voltmeter (DVM)
- Function generator

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify the board operation. Caution: Do not turn on power supply until all connections are completed.

- 1) Set the power supply at a voltage between 6V and 42V. Disable the power supply.
- 2) Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad. Connect the positive terminal of the 500mA load to the VOUT PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3) Connect the DVM across the VOUT PCB pad and the nearest PGND PCB pad.
- 4) Turn on the DC power supply.
- 5) Enable the load.
- 6) Verify that the DVM displays 5V.

To  turn-on/off  the  part  from  EN/UVLO,  follow  the  steps below:

- 1) Connect the power supply to the EV kit and turn on the power supply. Set the power supply at a voltage between 6V and 42V.
- 2) Connect the function generator output to the EN/UVLO test loop.
- 3) EN/UVLO rising threshold is 1.24V and falling threshold is 1.11V. Make sure that the voltage-high and voltage-low levels of the function generator output are greater than 1.24V and less than 1.11V, respectively.
- 4) While powering down the EV kit, first disconnect the function generator output from the EN/UVLO test loop and then turn off the DC power supply.

<!-- image -->

## MAX17541G 5V Output Evaluation Kit

## Detailed Description of Hardware

The  MAX17541G  5V  Output  EV  kit  provides  a  proven design  to  evaluate  the  5V  high-efficiency,  high-voltage, synchronous  step-down  DC-DC  converter.  The  EV  kit generates 5V at load currents up to 500mA from a 6V to 42V input supply. The EV kit features a 600kHz fixed switching frequency for optimum efficiency and component size. The EV kit features a forced-PWM control scheme that provides constant switching-frequency operation at all load and line conditions.

The  EV  kit  includes  an  EN/UVLO  PCB  pad  to  enable control  of  the  converter  output.  An  additional RESET PCB pad is available for monitoring the open-drain logic output.  The  VCC  PCB  pad  helps  measure  the  internal LDO voltage.

## Soft-Start Input (SS)

The  device  utilizes  an  adjustable  soft-start  function  to limit  inrush  current  during  startup.  The  soft-start  time  is adjusted by the value of C3, the external capacitor from SS to GND. To adjust the soft-start time, determine C3 using the following formula:

<!-- formula-not-decoded -->

where t SS   is  the  required  soft-start  time  in  milliseconds and C3 is in nanofarads.

## Regulator Enable/Undervoltage-Lockout Level (EN/UVLO)

## Evaluates: MAX17541G in 5V Output-Voltage Application

## Setting the Undervoltage-Lockout Level

The  device  offers  an  adjustable  input  undervoltagelockout  level.  Set  the  voltage  at  which  the  device  turns on  with  a  resistive  voltage-divider  connected  from  VIN to  GND (see Figure 1). Connect the center node of the divider to EN/UVLO.

Choose R1 to be 3.3MΩ and then calculate R2 as follows:

<!-- formula-not-decoded -->

where V INU  is the voltage at which the device is required to turn on. Ensure that V INU  is higher than 0.8 x V OUT .

## Adjusting the Output Voltage

The device offers  an  adjustable  output  voltage.  Set  the output voltage with a resistive voltage-divider connected from the positive terminal of the output capacitor (V OUT ) to  GND (see schematic attached to this PDF). Connect the center node of the voltage-divider to FB.

To  choose the values of R4 and R5, select the parallel combination of R4 and R5, with R P  less than 15kΩ. Once RP is selected, calculate R4 as follows:

<!-- formula-not-decoded -->

Calculate R5 as follows:

The  device  features  an  EN/UVLO  input.  For  normal operation, no shunts should be installed across pins 1-2 or 2-3 on jumper JU1. To disable the output, install a shunt across pins 2-3 on JU1 and the EN/UVLO pin is pulled to GND. See Table 1 for JU1 settings.

<!-- formula-not-decoded -->

## Table 1. Regulator Enable (EN/UVLO) Jumper JU1 Settings

| SHUNT POSITION   | EV/UVLO PIN                                                | MAX17541G 5V OUTPUT                                            |
|------------------|------------------------------------------------------------|----------------------------------------------------------------|
| Not installed*   | Connected to the center node of resistor-divider R1 and R2 | Enabled, UVLO level set through the R1 and R2 Resistor-divider |
| 2-3              | Connected to GND                                           | Disabled                                                       |

*Default position.

## MAX17541G 5V Output Evaluation Kit

## EV Kit Performance Report

<!-- image -->

Figure 1. MAX17541G 5V Output Load and Line Regulation

Figure 3. MAX17541G 5V Output Efficiency

<!-- image -->

Figure 5. MAX17541G 5V Output No-Load to 250mA Load Transient

<!-- image -->

## Evaluates: MAX17541G in 5V Output-Voltage Application

<!-- image -->

Figure 2. MAX17541G 5V Output Efficiency

Figure 4. MAX17541G 5V Output 250mA to 500mA Load Transient

<!-- image -->

Figure 6. MAX17541G 5V Output Full-Load Bode Plot (V IN  = 24V)

<!-- image -->

## MAX17541G 5V Output Evaluation Kit

## Component Suppliers

| SUPPLIER        | WEBSITE           |
|-----------------|-------------------|
| Coilcraft, Inc. | www.coilcraft.com |
| Murata Americas | www.murata.com    |
| Panasonic Corp. | www.panasonic.com |
| Wurth Group     | www.we-online.com |

Note: Indicate that you are using the MAX17541G when contacting these component suppliers.

## Component Information, PCB Layout, and Schematic

See the following links for component information, PCB layouts, and schematic:

- MAX17541G 5V EV BOM
- MAX17541G 5V PCB Layout
- MAX17541G 5V EV Schematic

## Ordering Information

| PART              | TYPE   |
|-------------------|--------|
| MAX17541GTBEVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX17541G in 5V

Output-Voltage Application

## MAX17541G 5V Output Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPplied. Ma[iP ,ntegrated reserYes the right to change the circuitr\ and specifications without notice at an\ tiPe.

Evaluates: MAX17541G in 5V

Output-Voltage Application

<!-- image -->

<!-- image -->

## MAX17541GTB EVKIT

PROPERTY OF

<!-- image -->

LAYER

DATE:

TOP SILKSCREEN

ALL UNITS ARE IN 0.001"

<!-- image -->

A REV

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

BILL OF MATERIALS (Revision 7/15)

|   Reference | Description                                   |   Quantity | Designator              | Part Number                   |
|-------------|-----------------------------------------------|------------|-------------------------|-------------------------------|
|           1 | 1μF ±10%, 50V X7R ceramic capacitor (1206)    |          1 | C1                      | Murata GRM31MR71H105K         |
|           2 | 1μF ±10%, 6.3V X7R ceramic capacitor (0603)   |          1 | C2                      | Murata GRM188R70J105K         |
|           3 | 3300pF ±10%, 50V X7R ceramic capacitor (0402) |          1 | C3                      | Murata GRM155R71H332K         |
|           4 | 10uF ±10%, 6.3V X7R ceramic capacitor (1206)  |          1 | C4                      | Murata GRM31CR70J106K         |
|           5 | 3300pF ±10%, 50V X7R ceramic capacitor (0402) |          1 | C5                      | Murata GRM155R71H332K         |
|           6 | 33uF 50V aluminum electrolytic (D=6.3mm)      |          1 | C7                      | Panasonic EEE-FK1H330XP       |
|           7 | 22pF ±5%, 50V C0G ceramic capacitor (0402)    |          1 | C9                      | Murata GRM1555C1H220J         |
|           8 | 3-pin header (36-pin header 0.1' centers )    |          1 | JU1                     | Sullins: PTC36SAAN            |
|           9 | 47uH Inductor (5mm x 5mmx 4mm)                |          1 | L1                      | Wurth Electronics 74404054470 |
|          10 | 47uH Inductor (6.56mm x 6.36mm x 5.1mm)       |          0 | L1 (Alternate Inductor) | Coilcraft XFL6060-473ME_      |
|          11 | 3.32M ohm ±1%, resistor (0402)                |          1 | R1                      |                               |
|          12 | 681k ohm ±1%, resistor (0402)                 |          1 | R2                      |                               |
|          13 | 21.5k ohm ±1%, resistor (0402)                |          1 | R3                      |                               |
|          14 | 82.5k ±1% ohm resistor (0402)                 |          1 | R4                      |                               |
|          15 | 18.2k ±1% ohm resistor (0402)                 |          1 | R5                      |                               |
|          16 | 10k ohm ±1%, resistor (0402)                  |          1 | R6                      |                               |
|          17 | Not installed, resistor (0402)                |          0 | R7                      |                               |
|          18 | Buck Converter (10TDFN 3mmx2mm) MAX17541GATB+ |          1 | U1                      | MAX17541GATB+                 |
|          19 | Shunt                                         |          1 | See Jumper Table        | SULLINS STC02SYAN             |

| Jumper Table   | Jumper Table   |
|----------------|----------------|
| JUMPER         | SHUNT POSITION |
| JU1            | 1-2            |