<!-- lastmod 2022-08-02 -->
## MAX17574 3.3V Output Evaluation Kit

## General Description

The MAX17574 3.3V output evaluation kit (EV kit) provides a proven design to evaluate the MAX17574 high-voltage, high-efficiency, synchronous step-down DC-DC converter. The EV kit is preset for 3.3V output at load currents up to  3A  and  features  a  500kHz  switching  frequency  for optimum  efficiency  and  component  size.  The  EV  kit features adjustable input undervoltage lockout, adjustable soft-start, open-drain RESET signal, and external frequency synchronization.

## Features

- Operates from a 5V to 60V Input Supply
- 3.3V Output Voltage
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

Ordering Information appears at end of data sheet.

Evaluates: MAX17574

## 3.3V Output-Voltage Application

## Quick Start

## Recommended Equipment

- MAX17574 3.3V output EV kit
- 5V to 60V, 5A DC input power supply
- Load capable of sinking 3A
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify the board operation. Caution: Do not turn on power supply until all connections are completed.

- 1) Set the power supply at a voltage between 5V and 60V. Disable the power supply.
- 2) Connect the positive terminal of the power supply to the  VIN  PCB  pad  and  the  negative  terminal  to  the nearest PGND  PCB  pad.  Connect  the positive terminal of the 3A load to the VOUT PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3) Connect the DVM across the VOUT PCB pad and the nearest PGND PCB pad.
- 4) Verify  that  shunts  are  installed  across  pins  1-2  on jumper JU1 (see Table 1 for details).
- 5) Select the shunt position on jumper JU2 according to the intended MODE/SYNC of operation (see Table 2 for details).
- 6) Turn on the DC power supply.
- 7) Enable the load.
- 8) Verify that the DVM displays 3.3V.

<!-- image -->

## MAX17574 3.3V Output Evaluation Kit

## Detailed Description

The  MAX17574  3.3V  output  EV  kit  provides  a  proven design  to  evaluate  the  MAX17574  high-voltage,  highefficiency, synchronous step-down DC-DC converter. The EV kit is preset for 3.3V output from 5V to 60V input at load currents up to 3A and features a 500kHz switching frequency for optimum efficiency and component size.

The EV kit includes an EN/UVLO PCB pad and jumper JU1 to enable the output at a desired input voltage. The SYNC PCB pad allows an external clock to synchronize the device. Jumper JU2 allows the selection of a particular MODE/SYNC of operation based on light-load performance requirements. An additional RESET PCB  pad  is available  for  monitoring  whether  the  converter  output  is in regulation.

## Soft-Start Input (SS)

The  device  utilizes  an  adjustable  soft-start  function  to limit  inrush  current  during  startup.  The  soft-start  time  is adjusted by the value of C8, the external capacitor from SS to GND. The selected output capacitance (C SEL ) and the output voltage (V OUT ) determine the minimum value of C8, as shown by the following equation:

<!-- formula-not-decoded -->

The soft-start time (t SS ) is related to C8 by the following equation:

<!-- formula-not-decoded -->

For example, to program a 1ms soft-start time, C8 should be 5.6nF.

## Regulator Enable/Undervoltage-Lockout Level (EN/UVLO)

The  device  offers  an  adjustable  input  undervoltagelockout  level.  For  normal  operation,  a  shunt  should  be installed  across pins 1-2 on jumper JU1. To disable the output, install a shunt across pins 2-3 on JU1 and the EN/ UVLO pin is pulled to GND. See Table 1 for JU1 settings.

Set the voltage at which the device turns on with the resistive voltage-divider R1/R2 connected from VIN to SGND. Connect the center node of the divider to EN/UVLO.

Choose R1 to be 3.32MΩ and then calculate R2 as follows:

<!-- formula-not-decoded -->

where V INU  is the voltage at which the device is required to turn on.

## Evaluates: MAX17574 3.3V Output-Voltage Application

## MODE/SYNC Selection (MODE/SYNC)

The  device's  MODE/SYNC  pin  can  be  used  to  select among  PWM,  PFM,  or  DCM  modes  of  operation.  The logic  state  of  the  MODE/SYNC  pin  is  latched  when  the VCC and EN/UVLO voltages exceed the respective UVLO rising  thresholds  and  all  internal  voltages  are  ready  to allow LX switching. State changes on the MODE/SYNC pin  are  ignored  during  normal  operation.  Refer  to  the MAX17574 IC data sheet for more information on PWM, PFM, and DCM MODE/SYNC modes of operation.

Table 2 shows EV kit jumper settings that can be used to configure the desired mode of operation.

## External Clock Synchronization (MODE/SYNC)

The internal oscillator of the device can be synchronized to an external clock signal on the SYNC pin. The external synchronization clock frequency must be between 1.1f SW and  1.4f SW ,  where  f SW   is  the  frequency  of  operation set by R3. The minimum external clock high pulse width should be greater than 50ns and the minimum external clock low pulse width should be greater than 160ns.

## Table 1. Regulator Enable (EN/UVLO) Description (JU1)

| SHUNT POSITION   | EN/UVLO PIN                                                | MAX17574_ OUTPUT                                        |
|------------------|------------------------------------------------------------|---------------------------------------------------------|
| 1-2*             | Connected to V IN                                          | Enabled                                                 |
| Not installed    | Connected to the center node of resistor-divider R1 and R2 | Enabled, UVLO level set through the R1 and R2 resistors |
| 2-3              | Connected to SGND                                          | Disabled                                                |

* Default position.

## Table 2. MODE/SYNC Description (JU2)

| SHUNT POSITION   | MODE/SYNC PIN     | MAX17574_ MODE        |
|------------------|-------------------|-----------------------|
| Not installed*   | Unconnected       | PFM mode of operation |
| 2-3              | Connected to SGND | PWM mode of operation |
| 1-2              | Connected to V CC | DCM mode of operation |

* Default position.

│

## MAX17574 3.3V Output Evaluation Kit

## MAX17574 3.3V EV Kit Test Report

<!-- image -->

<!-- image -->

## Evaluates: MAX17574 3.3V Output-Voltage Application

<!-- image -->

<!-- image -->

│

## MAX17574 3.3V EV Kit Test Report (continued)

<!-- image -->

<!-- image -->

Evaluates: MAX17574

## 3.3V Output-Voltage Application

<!-- image -->

<!-- image -->

│

## MAX17574 3.3V EV Kit Test Report (continued)

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
| MAX17574EVKITA# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX17574

3.3V Output-Voltage Application

<!-- image -->

│

## MAX17574 3.3V Output Evaluation Kit

## MAX17574A 3.3V EV Bill of Materials

|   SERIAL NO. | DESCRIPTION                                    |   QUANTITY | DESIGNATOR                                                | PART NUMBER              |
|--------------|------------------------------------------------|------------|-----------------------------------------------------------|--------------------------|
|            1 | 2.2μF ±10%, 100V X7R ceramic capacitor (1210)  |          2 | C1,C2                                                     | MURATA GRM32ER72A225KA35 |
|            2 | 47μF ±10%, 10V X7R ceramic capacitor (1210)    |          1 | C3                                                        | MURATA GRM32ER71A476KE15 |
|            3 | 22μF ±10%, 10V X7R ceramic capacitor (1210)    |          1 | C4                                                        | MURATA GRM32ER71A226K    |
|            4 | 0.1μF ±10%, 50V X7R ceramic capacitor (0402)   |          1 | C5                                                        | MURATA GRM155R71H104KE14 |
|            5 | 2.2μF ±10%, 10V X7R ceramic capacitor (0603)   |          1 | C6                                                        | MURATA GRM188R71A225KE15 |
|            6 | 47uF, 80V electrolytic capacitor (10mm. Dia.)  |          1 | C7                                                        | PANASONIC EEE-FK1K470P   |
|            7 | 0.022μF ±10%, 50V X7R ceramic capacitor (0402) |          1 | C8                                                        | MURATA GRM155R71H223KA12 |
|            8 | 0.1μF ±10%, 100V X7R ceramic capacitor (0603)  |          1 | C11                                                       | MURATA GRM188R72A104KA35 |
|            9 | 2-pin header (36-pin header 0.1' centers )     |          2 | JU1, JU2                                                  | Sullins: PEC03SAAN       |
|           10 | 6.8µH Inductor (8.6mm x 8.1mm x 8mm)           |          1 | L1                                                        | Coilcraft XAL8080-682ME  |
|           11 | 3.3MΩ ±1%, resistor (0603)                     |          1 | R1                                                        | Any                      |
|           12 | 750kΩ ±1%, resistor (0603)                     |          1 | R2                                                        | Any                      |
|           13 | 10kΩ ±1%, resistor (0402)                      |          1 | R4                                                        | Any                      |
|           14 | 75kΩ ±1%, resistor (0402)                      |          1 | R6                                                        | Any                      |
|           15 | 19.1kΩ ±1%, resistor (0402)                    |          1 | R7                                                        | Any                      |
|           16 | Buck Converter MAX17574ATG+                    |          1 | U1                                                        | MAX17574ATG+             |
|           17 | OPEN                                           |          1 | C10                                                       |                          |
|           18 | OPEN                                           |          1 | R3                                                        |                          |
|           19 | Shunt                                          |          2 | See Jumper Table                                          | SULLINS STC02SYAN        |
|           20 | Test Loops                                     |          9 | VIN, SGND, VOUT, PGND1, PGND2, RESET , EN/UVLO, MODE/SYNC | EBUSS20W                 |
|           21 | MEDIUM BROWN 9 3/8' X 7 1/4' X 2 1/2           |          1 | Pack-out                                                  |                          |
|           22 | WEB instructions for Maxim Data Sheet          |          1 | Pack-out                                                  |                          |
|           23 | Label                                          |          1 | Pack-out                                                  |                          |
|           24 | BAG; STATIC SHIELD 5X8;W/ESD LOGO              |          1 | Pack-out                                                  |                          |
|           25 | FOAM, ANTI-STATIC PE 12'x12'X5MM               |          1 | Pack-out                                                  |                          |
|           26 | Rubber bumpers, 3M SJ-5003                     |          4 | Pack-out                                                  |                          |

## Jumper Table

| JUMPER   | SHUNT POSITION                                      |
|----------|-----------------------------------------------------|
| JU1      | 1 ─ 2                                               |
| JU2      | 1 ─ 2 for DCM, 2 ─ 3 for PWM, and OPEN for PFM mode |

Evaluates: MAX17574

3.3V Output-Voltage Application

│

## MAX17574A 3.3V EV Kit Schematics

<!-- image -->

│

## MAX17574A 3.3V EV Kit PCB Layout

MAX17574 3.3V Output EV Kit Component Placement GuideComponent Side

<!-- image -->

Evaluates: MAX17574

3.3V Output-Voltage Application

MAX17574 3.3V Output EV Kit Component Side PCB layout

<!-- image -->

MAX17574 3.3V Output EV Kit PCB Layout-Inner Layer 1

<!-- image -->

│

## MAX17574A 3.3V EV Kit PCB Layout (continued)

MAX17574 3.3V Output EV Kit PCB Layout-Inner Layer 2

<!-- image -->

MAX17574 3.3V Output EV Kit PCB Layout-Solder Side

<!-- image -->

│

Evaluates: MAX17574

3.3V Output-Voltage Application

## MAX17574 3.3V Output Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                          | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 11/16           | Initial release                                                                                                                                                                                      | -               |
|                 1 | 7/17            | Updated Quick Start, Detailed Description, Soft-Start Input (SS) and Regulator Enable/Undervoltage-Lockout Level (EN/UVLO) sections, Table 2, TOC01 ─ TOC09, Bill of Materials , and replaced TOC06. | 1 ─ 6           |
|                 2 | 5/18            | Updated Table 2 and Jumper Table                                                                                                                                                                     | 4, 6            |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses aUe LPSlLed. MaxLP ,nteJUated UeseUYes the ULJht to chanJe the cLUcuLtU\ and sSecL¿catLons wLthout notLce at an\ tLPe.

│

Evaluates: MAX17574

3.3V Output-Voltage Application