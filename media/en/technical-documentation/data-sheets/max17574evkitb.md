<!-- lastmod 2022-08-02 -->
## MAX17574 5V Output Evaluation Kit

## General Description

The MAX17574 5V output evaluation kit (EV kit) provides a proven design to evaluate the MAX17574 high-voltage, high-efficiency, synchronous step-down DC-DC converter. The  EV  kit  is  preset  for  5V  output  at  load  currents  up to  3A  and  features  a  500kHz  switching  frequency  for optimum  efficiency  and  component  size.  The  EV  kit features adjustable input undervoltage lockout, adjustable soft-start, open-drain RESET signal, and external frequency synchronization.

Ordering Information appears at end of data sheet.

## Evaluates: MAX17574 5V Output-Voltage Application

## Features

- Operates from a 6.5V to 60V Input Supply
- 5V Output Voltage
- Up to 3A Output Current
- 500kHz Switching Frequency
- Enable/UVLO Input, Resistor-Programmable UVLO Threshold
- Adjustable Soft-Start Time
- MODE/SYNC Pin to Select Among PWM, PFM, or DCM Modes
- Open-Drain RESET Output
- External Frequency Synchronization
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested

<!-- image -->

## MAX17574 5V Output Evaluation Kit

## Quick Start

## Recommended Equipment

- ●	 MAX17574	5V	output	EV	kit
- ●	 6.5V	to	60V,	5A	DC	input	power	supply
- ●	 Load	capable	of	sinking	3A
- ●	 Digital	voltmeter	(DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify the board operation. Caution: Do not turn on power supply until all connections are completed.

- 1) Set the power supply at a voltage between 6.5V and 60V. Disable the power supply.
- 2) Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest PGND  PCB  pad.  Connect  the  positive terminal of the 3A load to the VOUT PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3) Connect the DVM across the VOUT PCB pad and the nearest PGND PCB pad.
- 4) Verify that shunts are installed across pins 1-2 on jumper JU1 (see Table 1 for details).
- 5) Select the shunt position on jumper JU2 according to  the  intended  mode  of  operation  (see  Table  2  for details).
- 6) Turn on the DC power supply.
- 7) Enable the load.
- 8) Verify that the DVM displays 5V.

## Detailed Description

## Evaluates: MAX17574 5V Output-Voltage Application

The  MAX17574  5V  output  EV  kit  provides  a  proven design  to  evaluate  the  MAX17574  high-voltage,  highefficiency, synchronous step-down DC-DC converter. The EV kit is preset for 5V output from 6.5V to 60V input at load currents up to 3A and features a 500kHz switching frequency for optimum efficiency and component size.

The EV kit includes an EN/UVLO PCB pad and jumper JU1 to enable the output at a desired input voltage. The SYNC PCB pad allows an external clock to synchronize the  device.  Jumper  JU2  allows  the  selection  of  a particular MODE/SYNC of operation based on light-load performance  requirements.  An  additional RESET PCB pad  is  available  for  monitoring  whether  the  converter output is in regulation.

## Soft-Start Input (SS)

The  device  utilizes  an  adjustable  soft-start  function  to limit  inrush  current  during  startup.  The  soft-start  time  is adjusted by the value of C8, the external capacitor from SS to GND. The selected output capacitance (C SEL ) and the output voltage (V OUT ) determine the minimum value of C8, as shown by the following equation:

<!-- formula-not-decoded -->

The soft-start time (t SS ) is related to C8 by the following equation:

<!-- formula-not-decoded -->

For example, to program a 1ms soft-start time, C8 should be 5.6nF.

│

## MAX17574 5V Output Evaluation Kit

## Regulator Enable/Undervoltage-Lockout Level (EN/UVLO)

The  device  offers  an  adjustable  input  undervoltagelockout  level.  For  normal  operation,  a  shunt  should  be installed  across pins 1-2 on jumper JU1. To disable the output, install a shunt across pins 2-3 on JU1 and the EN/ UVLO pin is pulled to GND. See Table 1 for JU1 settings.

Set the voltage at which the device turns on with the resistive voltage-divider  R1/R2  connected  from  VIN  to  SGND. Connect the center node of the divider to EN/UVLO.

Choose	R1	to	be	3.32MΩ	and	then	calculate	R2	as	follows:

<!-- formula-not-decoded -->

where V INU  is the voltage at which the device is required to turn on.

Table 1. Regulator Enable (EN/UVLO) Description (JU1)

| SHUNT POSITION   | EN/UVLO PIN                                                | MAX17574_ OUTPUT                                        |
|------------------|------------------------------------------------------------|---------------------------------------------------------|
| 1-2*             | Connected to VIN                                           | Enabled                                                 |
| Not installed    | Connected to the center node of resistor-divider R1 and R2 | Enabled, UVLO level set through the R1 and R2 resistors |
| 2-3              | Connected to SGND                                          | Disabled                                                |

* Default position.

## Evaluates: MAX17574 5V Output-Voltage Application

## MODE Selection (MODE/SYNC)

The  device's  MODE/SYNC  pin  can  be  used  to  select among  PWM,  PFM,  or  DCM  modes  of  operation.  The logic state of the MODE/SYNC pin is latched when VCC and  EN/UVLO  voltages  exceed  the  respective  UVLO rising  thresholds  and  all  internal  voltages  are  ready  to allow LX switching. State changes on the MODE/SYNC pin  are  ignored  during  normal  operation.  Refer  to  the MAX17574  IC  data  sheet  for  more  information  on  the PWM, PFM, and DCM modes of operation.

Table 2 shows EV kit jumper settings that can be used to configure the desired mode of operation.

## External Clock Synchronization MODE/SYNC)

The internal oscillator of the device can be synchronized to an external clock signal on the SYNC pin. The external synchronization clock frequency must be between 1.1f SW and  1.4f SW ,  where  f SW   is  the  frequency  of  operation set by R3. The minimum external clock high pulse width should be greater than 50ns and the minimum external clock low pulse width should be greater than 160ns.

## Table 2. MODE/SYNC Description (JU2)

| SHUNT POSITION   | MODE/SYNC PIN     | MAX17574_ MODE        |
|------------------|-------------------|-----------------------|
| Not installed*   | Unconnected       | PFM mode of operation |
| 2-3              | Connected to SGND | PWM mode of operation |
| 1-2              | Connected to VCC  | DCM mode of operation |

* Default position.

│

## MAX17574 5V Output Evaluation Kit

## EV Kit Test Report

<!-- image -->

<!-- image -->

Evaluates: MAX17574

## 5V Output-Voltage Application

<!-- image -->

<!-- image -->

│

## MAX17574 5V Output Evaluation Kit

## EV Kit Test Report (continued)

<!-- image -->

<!-- image -->

Evaluates: MAX17574

## 5V Output-Voltage Application

<!-- image -->

<!-- image -->

│

## MAX17574 5V Output Evaluation Kit

## EV Kit Test Report (continued)

<!-- image -->

## Component Suppliers

| SUPPLIER        | WEBSITE           |
|-----------------|-------------------|
| Coilcraft, Inc. | www.coilcraft.com |
| Murata Americas | www.murata.com    |
| Panasonic Corp. | www.panasonic.com |
| Taiyo Yuden     | www.t-yuden.com   |
| TDK Corp.       | www.tdk.com       |

Note: Indicate that you are using the MAX17574 when contacting these component suppliers.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17574EVKITB# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX17574

## 5V Output-Voltage Application

<!-- image -->

│

## MAX17574 5V EV System Bill of Materials

|   SERIAL NO. | DESCRIPTION                                    |   QUANTITY | DESIGNATOR                                                | PART NUMBER              |
|--------------|------------------------------------------------|------------|-----------------------------------------------------------|--------------------------|
|            1 | 2.2μF ±10%, 100V X7R ceramic capacitor (1210)  |          2 | C1,C2                                                     | MURATA GRM32ER72A225KA35 |
|            2 | 22μF ±10%, 10V X7R ceramic capacitor (1210)    |          2 | C3,C4                                                     | MURATA GRM32ER71A226K    |
|            3 | 0.1μF ±10%, 50V X7R ceramic capacitor (0402)   |          2 | C5,C9                                                     | MURATA GRM155R71H104KE14 |
|            4 | 2.2μF ±10%, 10V X7R ceramic capacitor (0603)   |          1 | C6                                                        | MURATA GRM188R71A225KE15 |
|            5 | 47uF, 80V electrolytic capacitor (10mm. Dia.)  |          1 | C7                                                        | PANASONIC EEE-FK1K470P   |
|            6 | 0.022μF ±10%, 50V X7R ceramic capacitor (0402) |          1 | C8                                                        | MURATA GRM155R71H223KA12 |
|            7 | 0.1μF ±10%, 100V X7R ceramic capacitor (0603)  |          1 | C11                                                       | MURATA GRM188R72A104KA35 |
|            8 | 2-pin header (36-pin header 0.1' centers )     |          2 | JU1, JU2                                                  | Sullins: PEC03SAAN       |
|            9 | 10uH Inductor (8.6mm x 8.1mm x 8mm)            |          1 | L1                                                        | Coilcraft XAL8080-103ME  |
|           10 | 3.3M ohm ±1%, resistor (0603)                  |          1 | R1                                                        | Any                      |
|           11 | 604k ohm ±1%, resistor (0603)                  |          1 | R2                                                        | Any                      |
|           12 | 10k ohm ±1%, resistor (0402)                   |          1 | R4                                                        | Any                      |
|           13 | 4.7 ohm ±1%, resistor (0402)                   |          1 | R5                                                        | Any                      |
|           14 | 105k ohm ±1%, resistor (0402)                  |          1 | R6                                                        | Any                      |
|           15 | 22.6k ohm ±1%, resistor (0402)                 |          1 | R7                                                        | Any                      |
|           16 | Buck Converter MAX17574ATG+                    |          1 | U1                                                        | MAX17574ATG+             |
|           17 | OPEN                                           |          1 | C10                                                       |                          |
|           18 | OPEN                                           |          1 | R3                                                        |                          |
|           19 | Shunt                                          |          2 | See the jumper table                                      | SULLINS STC02SYAN        |
|           20 | Test Loops                                     |          8 | VIN, SGND, VOUT, PGND1, PGND2, RESET/, EN/UVLO, MODE/SYNC | 9020 BUSS WEICO WIRE     |
|           21 | MEDIUM BROWN 9 3/8' X 7 1/4' X 2 1/2           |          1 | Pack-out                                                  |                          |
|           22 | WEB instructions for Maxim Data Sheet          |          1 | Pack-out                                                  |                          |
|           23 | Label                                          |          1 | Pack-out                                                  |                          |
|           24 | BAG; STATIC SHIELD 5X8;W/ESD LOGO              |          1 | Pack-out                                                  |                          |
|           25 | FOAM, ANTI-STATIC PE 12'x12'X5MM               |          1 | Pack-out                                                  |                          |
|           26 | Rubber bumpers, 3M SJ-5003                     |          4 | Pack-out                                                  |                          |

## Jumper Table

| JUMPER   | SHUNT POSITION                                 |
|----------|------------------------------------------------|
| JU1      | 1-2                                            |
| JU2      | 1-2 for DCM, 2-3 for PWM and OPEN for PFM mode |

Evaluates: MAX17574

## 5V Output-Voltage Application

│

## MAX17574 5V EV System Schematic

<!-- image -->

│

## MAX17574 5V Output Evaluation Kit

## MAX17574 5V EV System PCB Layout

MAX17574 5V EV Kit-Top Silkscreen

<!-- image -->

## Evaluates: MAX17574 5V Output-Voltage Application

MAX17574 5V EV Kit-Top

<!-- image -->

MAX17574 5V EV Kit-Layer 2 GND

<!-- image -->

│

## MAX17574 EV System PCB Layout (continued)

MAX17574 5V EV Kit-Layer 3 GND

<!-- image -->

MAX17574 5V EV Kit-Bottom

<!-- image -->

│

## MAX17574 5V Output Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                   | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 12/16           | Initial release                                                                                                                                                                                               | -               |
|                 1 | 7/17            | Updated Quick Start, Detailed Description, and Regulator Enable/ Undervoltage-Lockout Level (EN/UVLO) sections. Added a note to Table 2, replaced TOC06, and updated the Bill of Materials and Jumper tables. | 2-3, 5, 7       |
|               1.1 |                 | Corrected Copyright date                                                                                                                                                                                      | 11              |
|                 2 | 5/18            | Updated Table 2 and Jumper table.                                                                                                                                                                             | 3, 7            |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	,ntegrated	reserves	the	right	to	change	the	circuitry	and	speci¿cations	without	notice	at	any	time.

│

Evaluates: MAX17574

5V Output-Voltage Application