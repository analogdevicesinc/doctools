<!-- lastmod 2022-08-02 -->
## MAX17506EVKITA# Evaluation Kit

## General Description

The MAX17506 3.3V output evaluation kit (EV kit) provides a proven design to evaluate the MAX17506 high-voltage, high-efficiency, synchronous step-down DC-DC converter. The  EV  kit  is  preset  for  3.3V  output  at  load  currents up to  5A and features a 450kHz switching frequency for optimum  efficiency  and  component  size.  The  EV  kit features adjustable-input undervoltage lockout, adjustable  soft-start,  open-drain RESET signal,  and  external frequency synchronization.

## Features

- Operates From a 4.5V to 60V Input Supply
- 3.3V Output Voltage
- Up to 5A Output Current
- 450kHz Switching Frequency
- Enable/UVLO Input, Resistor-Programmable UVLO Threshold
- Adjustable Soft-Start Time
- MODE Pin to Select Among PWM, PFM, or DCM Modes
- Open-Drain RESET Output
- External Frequency Synchronization
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Evaluates: MAX17506 3.3V Output-Voltage Application

## Quick Start

## Recommended Equipment

- MAX17506EVKITA#
- 4.5V to 60V, 10A DC input power supply
- Load capable of sinking 5A
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify the board operation. Caution: Do not turn on power supply until all connections are completed.

- 1) Set the power supply at a voltage between 4.5V and 60V. Disable the power supply.
- 2) Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad. Connect the positive terminal of the 5A load to the VOUT PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3) Connect the DVM across the VOUT PCB pad and the nearest PGND PCB pad.
- 4) Verify that the shunt is installed across pins 1-2 on jumper JU1 (see Table 1 for details).
- 5) Select the shunt position on JU2 based on the intended mode of operation (see Table 2 for details).
- 6) Turn on the DC power supply.
- 7) Enable the load.
- 8) Verify that the DVM displays 3.3V

<!-- image -->

## MAX17506EVKITA# Evaluation Kit

## Detailed Description

The  EV  kit  provides  a  proven  design  to  evaluate  the MAX17506  high-voltage,  high-efficiency,  synchronous step-down  DC-DC  converter.  The  EV  kit  is  preset  for 3.3V output from a 4.5V to 60V input at load currents of up to 5A and features a 450kHz switching frequency for optimum efficiency and component size.

The EV kit includes an EN/UVLO PCB pad and JU1 to enable the output at the desired input voltage. The SYNC PCB  pad  allows  an  external  clock  to  synchronize  the device. JU2 allows the selection of a particular mode of operation based on light-load performance requirements. An additional RESET PCB pad is available for monitoring whether the converter output is in regulation.

## Soft-Start Input (SS)

The  device  utilizes  an  adjustable  soft-start  function  to limit  inrush  current  during  startup.  The  soft-start  time  is adjusted by the value of the external capacitor from SS to GND (C7). The selected output capacitance (C SEL ) and output  voltage  (V OUT )  determine  the  minimum  value  of C7, as shown by the following equation:

<!-- formula-not-decoded -->

The soft-start time (t SS ) is related to C7 by the following equation:

<!-- formula-not-decoded -->

For  example,  to  program  a  2.2ms  soft-start  time,  C7 should be 12nF.

## Regulator Enable/Undervoltage-Lockout Level (EN/UVLO)

The  device  offers  an  adjustable-input,  undervoltagelockout  level.  For  normal  operation,  a  shunt  should  be installed  across pins 1-2 on JU1. To disable the output, install  a  shunt  across pins 2-3 on JU1 and pull the EN/ UVLO pin to GND. See Table 1 for JU1 settings.

Set the voltage at which the device turns on with the resistive voltage-divider R1/R2 connected from VIN\_ to SGND. Connect the center node of the divider to EN/UVLO.

Choose R1 to be 3.32MΩ and then calculate R2 as follows:

<!-- formula-not-decoded -->

where V INU  is the voltage at which the device is required to turn on.

## Evaluates: MAX17506 3.3V Output-Voltage Application

## Mode/SYNC Selection (MODE)

The device's MODE pin should be used to select among PWM, PFM, or DCM modes of operation. The logic state of the MODE pin is latched when the V CC  and EN/UVLO voltages  exceed  the  respective  UVLO  rising  thresholds and all internal voltages are ready to allow LX switching. State changes on the MODE pin are ignored during normal operation. Refer to the MAX17506 IC data sheet for more information on the PWM, PFM, and DCM modes of operation.

Table 2 shows EV kit jumper settings that can be used to configure the desired mode of operation.

The internal oscillator of the device can be synchronized to an external clock signal on the SYNC pin. The external synchronization clock frequency must be between 1.1f SW and  1.4f SW ,  where  f SW   is  the  frequency  of  operation set by R5. The minimum external clock high pulse width should be greater than 50ns and the minimum external clock low pulse width should be greater than 160ns.

## Table 1. Regulator Enable (EN/UVLO) Description (JU1)

| SHUNT POSITION   | EN/UVLO PIN                                                | MAX17506_ OUTPUT                                        |
|------------------|------------------------------------------------------------|---------------------------------------------------------|
| 1-2*             | Connected to VIN                                           | Enabled                                                 |
| Not installed    | Connected to the center node of resistor-divider R1 and R2 | Enabled, UVLO level set through the R1 and R2 resistors |
| 2-3              | Connected to SGND                                          | Disabled                                                |

*Default position.

## Table 2. MODE Description (JU2)

| SHUNT POSITION   | MODE PIN          | MAX17506_ MODE        |
|------------------|-------------------|-----------------------|
| Not installed*   | Unconnected       | PFM mode of operation |
| 1-2              | Connected to SGND | PWM mode of operation |
| 2-3              | Connected to VCC  | DCM mode of operation |

*Default position.

│

## MAX17506EVKITA# Evaluation Kit

## EV Kit Performance Report

(Input voltage = 24V, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

## Evaluates: MAX17506 3.3V Output-Voltage Application

<!-- image -->

<!-- image -->

<!-- image -->

│

## MAX17506EVKITA# Evaluation Kit

## EV Kit Performance Report (continued)

(Input voltage = 24V, unless otherwise noted.)

<!-- image -->

<!-- image -->

## Component Suppliers

| SUPPLIER        | WEBSITE           |
|-----------------|-------------------|
| Coilcraft, Inc. | www.coilcraft.com |
| Murata Americas | www.murata.com    |
| Panasonic Corp. | www.panasonic.com |
| Vishay          | www.vishay.com    |

Note: Indicate that you are using the MAX17506 when contacting these component suppliers.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17506EVKITA# | EV Kit |

#Denotes RoHS compliant.

## Evaluates: MAX17506 3.3V Output-Voltage Application

<!-- image -->

<!-- image -->

│

## MAX17506 3.3V Ouput EV Kit Bill of Materials

|   Serial No. | Description                                    |   Quantity | Designator       | Part Number                      |
|--------------|------------------------------------------------|------------|------------------|----------------------------------|
|            1 | 2.2μF ±10%, 100V X7R ceramic capacitor (1210)  |          2 | C1, C2           | MURATA GRM32ER72A225KA35         |
|            2 | 0.1μF ±10%, 100V X7R ceramic capacitor (0603)  |          3 | C3,C4,C13        | MURATA GRM188R72A104KA35         |
|            3 | 47uF 80V aluminum electrolytic (D=10mm)        |          1 | C5               | PANASONIC EEEFK1K470P            |
|            4 | 2.2μF ±10%, 10V X7R ceramic capacitor (0603)   |          1 | C6               | MURATA GRM188R71A225K            |
|            5 | 22000pF ±10%, 50V X7R ceramic capacitor (0402) |          1 | C7               | MURATA GRM155R71H223K            |
|            6 | 47uF ±10%, 10V X7R ceramic capacitor (1210)    |          2 | C8, C9           | MURATA GRM32ER71A476K            |
|            7 | 22uF ±10%, 10V X7R ceramic capacitor (1210)    |          1 | C10              | MURATA GRM32ER71A226K            |
|            8 | 0.1μF ±10%, 16V X7R ceramic capacitor (0402)   |          1 | C11              | MURATA GRM155R71C104K            |
|            9 | Not installed, OPEN (0402)                     |          0 | C12              |                                  |
|           10 | 3-pin header (36-pin header 0.1' centers )     |          2 | JU1, JU2         | Sullins: PTC36SAAN               |
|           11 | 3.3uH Inductor (7.2mm x 7.5mm x 7mm)           |          1 | L1               | Coilcraft XAL7070-332            |
|           12 | MOSFET (80V, 30A)                              |          1 | N1               | VISHAY SILICONIX SIS468DN-T1-GE3 |
|           13 | 3.32M ohm ±1%, resistor (0603)                 |          1 | R1               |                                  |
|           14 | 750k ohm ±1%, resistor (0603)                  |          1 | R2               |                                  |
|           15 | 121k ohm ±1%, resistor (0402)                  |          1 | R3               |                                  |
|           16 | 45.3k ohm ±1%, resistor (0402)                 |          1 | R4               |                                  |
|           17 | Not installed, OPEN (0402)                     |          0 | R5               |                                  |
|           18 | 10k ohm ±1%, resistor (0402)                   |          1 | R6               |                                  |
|           19 | Not installed, OPEN (0402)                     |          0 | R7               |                                  |
|           20 | 4.7ohm ±1%, resistor (0402)                    |          1 | R8               |                                  |
|           21 | Buck Converter MAX17506ATP+                    |          1 | U1               | MAX17506ATP+                     |
|           22 | Shunt                                          |          2 | See Jumper Table | SULLINS STC02SYAN                |

| JUMPER TABLE   | JUMPER TABLE   |
|----------------|----------------|
| JUMPER         | SHUNT POSITION |
| JU1            | 1-2            |
| JU2            | 1              |

Evaluates: MAX17506

3.3V Output-Voltage Application

## MAX17506 3.3V Ouput EV Kit Schematic

<!-- image -->

Evaluates: MAX17506

## MAX17506 3.3V Ouput EV Kit PCB Layout Diagrams

MAX17506 3.3V Output EV Kit PCB Layout-Silk Top

<!-- image -->

MAX17506 3.3V Output EV Kit PCB Layout-Top Layer

<!-- image -->

│

## MAX17506 3.3V Ouput EV Kit PCB Layout Diagrams (continued)

MAX17506 3.3V Output EV Kit PCB Layout-Layer 2 Ground

<!-- image -->

MAX17506 3.3V Output EV Kit PCB Layout-Layer 3 Power

<!-- image -->

│

Evaluates: MAX17506

## MAX17506 3.3V Ouput EV Kit PCB Layout Diagrams (continued)

MAX17506 3.3V Output EV Kit PCB Layout-Bottom Layer

<!-- image -->

│

## MAX17506EVKITA# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                             | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 5/15            | Initial release                                                                                                                                                                         | -               |
|                 1 | 8/17            | Updated the Quick Start and Soft-Start Input (SS) sections, and Component Suppliers table. Added a note to and updated Table 2. Replaced Bill of Materials, Schematic, and PCB Layout . | 1-2, 4-9        |
|                 2 | 3/18            | Updated the title and Quick Start section. Updated Table 2 and Jumper table.                                                                                                            | 1-10            |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses aUe LPSlLed. MaxLP ,nteJUated UeseUYes the ULJht to chanJe the cLUcuLtU\ and sSecL¿catLons wLthout notLce at an\ tLPe.

│

Evaluates: MAX17506

3.3V Output-Voltage Application