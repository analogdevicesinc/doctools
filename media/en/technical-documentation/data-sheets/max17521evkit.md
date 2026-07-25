<!-- lastmod 2022-08-02 -->
## MAX17521 Evaluation Kit

## General Description

The MAX17521 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX17521  dual  high-efficiency, high-voltage,  synchronous  step-down  DC-DC  converter. The  EV  kit  generates  3.3V  and  5V  output  voltages  at load currents up to 1A from a 7V to 60V input supply. The EV  kit  features  a  switching-frequency  selector  pin  and individual mode-of-operation selector pins, enable/under -voltage-lockout (EN/UVLO) pins, programmable soft-start pins, and open-drain RESET\_ signals for each output.

## Features

- Operates from a 7V to 60V Input Supply
- Dual-Output Voltage: 3.3V and 5V
- Up to 1A Output Current
- Pin-Selectable Switching Frequency
- Enable/UVLO Input, Resistor-Programmable UVLO Threshold
- Mode-Selection Pin for Each Output to Select Between PWM and PFM Modes
- Adjustable Soft-Start Time for Each Output
- Open-Drain RESET\_ Signals for Each Output
- External Frequency Synchronization
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Evaluates: MAX17521 in 3.3V and 5V Output-Voltage Application

## Quick Start

## Recommended Equipment

- MAX17521 EV kit
- 7V to 60V, 2A DC input power supply
- Two loads capable of sinking 1A
- Two digital voltmeters (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify the board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Set the power supply at a voltage between 7V and 60V. Disable the power supply.
- 2) Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest PGND1 PCB pad. Connect the positive ter -minal of one of the 1A loads to the VOUT1 PCB pad and the negative terminal to the PGND1 PCB pad. Connect the positive terminal of the other 1A load to the VOUT2 PCB pad and the negative terminal to the PGND2 PCB pad.
- 3) Connect the DVMs across the VOUT1 PCB pad and the PGND1 PCB pad and across the VOUT2 PCB pad and the PGND2 PCB pad.
- 4) Verify that shunts are installed across pins 1-2 on jumpers J1, J2, and J3.
- 5) Select the shunt position on J5 and J6 depending on the intended mode of operation.
- 6) Turn on the DC power supply.
- 7) Enable the loads.
- 8) Verify that the DVMs display 3.3V and 5V.

<!-- image -->

## MAX17521 Evaluation Kit

## Detailed Description

The MAX17521 EV kit provides a proven design to evaluate the MAX17521 high-efficiency, high-voltage, dual synchronous step-down DC-DC converter. The EV kit generates 3.3V and 5V, at load currents up to 1A, from a 7V to 60V input supply.

The  EV  kit  features  a  switching-frequency  selector  pin and  individual  mode-of-operation  selector  pins,  enable/ undervoltage-lockout  (EN/UVLO)  pins,  programmable soft-start  pins,  and  open-drain RESET signals  for  each output.

## Soft-Start Input (SS)

The  device  implements  adjustable  soft-start  operation  to reduce inrush current. Capacitors connected from the SS pins to SGND programs the soft-start time for the corresponding output voltage. The selected output capacitance (C SEL ) and the output voltage (V OUT) determine the minimum required soft-start capacitor as follows:

<!-- formula-not-decoded -->

The  soft-start time  (t SS ) is  related  to  the  capacitor connected at SS (C SS ) by the following equation:

<!-- formula-not-decoded -->

For example, to program a 1ms soft-start time, a 5.6nF capacitor should be connected from the SS pin to SGND.

Table 1. Regulator Enable (EN/UVLO1) Description (J1)

| SHUNT POSITION   | EN/UVLO1 PIN                                               | MAX17521_ OUTPUT1                                       |
|------------------|------------------------------------------------------------|---------------------------------------------------------|
| 1-2*             | Connected to VIN1                                          | Enabled                                                 |
| Not installed    | Connected to the center node of resistor-divider R3 and R4 | Enabled, UVLO level set through the R3 and R4 resistors |
| 2-3              | Connected to SGND                                          | Disabled                                                |

* Default position.

## Evaluates: MAX17521 in 3.3V and 5V Output-Voltage Application

## Regulator Enable/Undervoltage-Lockout Level (EN/UVLO1, EN/UVLO2)

The  device  offers  an  adjustable  input  undervoltagelockout  level  for  each  output.  Set  the  voltage  at  which each  converter  turns  on  with  a  resistive  voltage-divider connected from VIN to SGND (viewable here ).  Connect the center node of the divider to EN/UVLO pin.

Choose R TOP  to be 3.3MΩ, and then calculate R BOTTOM as:

<!-- formula-not-decoded -->

Where  V INU   is  the  input  voltage  at  which  a  particular converter is required to turn on. Install a shunt across pins 1-2 on J1 and J2 to enable the EV kit's outputs. See  Table 1 and Table 2 for proper jumper settings.

Table 2. Regulator Enable (EN/UVLO2) Description (J2)

| SHUNT POSITION   | EN/UVLO2 PIN                                                 | MAX17521_ OUTPUT2                                         |
|------------------|--------------------------------------------------------------|-----------------------------------------------------------|
| 1-2*             | Connected to VIN2                                            | Enabled                                                   |
| Not installed    | Connected to the center node of resistor-divider R11 and R12 | Enabled, UVLO level set through the R11 and R12 resistors |
| 2-3              | Connected to SGND                                            | Disabled                                                  |

## MAX17521 Evaluation Kit

## Mode Selection (MODE1, MODE2)

The device's MODE\_ pins can be used to select between the  PWM  and  PFM  modes  of  operation.  Refer  to  the MAX17521  IC  data  sheet  for  more  information  on  the PWM and PFM modes of operation.

Table 3 and Table 4 show EV kit jumper settings that can be used to configure the desired mode of operation.

## Switching-Frequency Selection (FSEL)

The  device's  FSEL  pin  can  be  used  to  select  between 560kHz  and  300kHz  switching  frequency.  The  EV  kit  is designed  to  operate  at  560kHz  switching  frequency.  If intended to operate at 300kHz, the values of the inductors, input and output capacitors, and the compensation components should be modified according to formulae provided in the MAX17521 IC data sheet.

Table 5 shows EV kit jumper settings that can be used to configure the switching frequency.

## Table 3. MODE1 Description (J6)

| SHUNT POSITION   | MODE1 PIN         | MAX17521_ MODE1       |
|------------------|-------------------|-----------------------|
| Not installed*   | Unconnected       | PFM mode of operation |
| 1-2              | Connected to SGND | PWM mode of operation |

## Table 4. MODE2 Description (J5)

| SHUNT POSITION   | MODE2 PIN         | MAX17521_ MODE2       |
|------------------|-------------------|-----------------------|
| Not installed*   | Unconnected       | PFM mode of operation |
| 1-2              | Connected to SGND | PWM mode of operation |

## Evaluates: MAX17521 in 3.3V and 5V Output-Voltage Application

## External Clock Synchronization (SYNC)

The internal oscillator of the device can be synchronized to an external clock signal on the SYNC pin. The external synchronization clock frequency must be between 1.1f SW and 1.4f SW , where f SW   is the frequency of operation set by the FSEL pin. See Table 6 for jumper settings.

## Table 5. FSEL Description (J4)

| SHUNT POSITION   | FSEL PIN          | Switching Frequency   |
|------------------|-------------------|-----------------------|
| Not installed*   | Unconnected       | 560kHz                |
| 1-2              | Connected to SGND | 300kHz                |

## Table 6. SYNC Description (J7)

| SHUNT POSITION   | FSEL PIN                      | SYNC                                                 |
|------------------|-------------------------------|------------------------------------------------------|
| 1-2              | Connected to test loop on PCB | Frequency can be synchronized with an external clock |
| 2-3*             | Connected to SGND             | SYNC feature unused                                  |

## MAX17521 Evaluation Kit

## EV Kit Performance Report

(24V input voltage, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

## Evaluates: MAX17521 in 3.3V and 5V Output-Voltage Application

<!-- image -->

<!-- image -->

<!-- image -->

## MAX17521 Evaluation Kit

## EV Kit Performance Report (continued)

(24V input voltage, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

## Evaluates: MAX17521 in 3.3V and 5V Output-Voltage Application

<!-- image -->

<!-- image -->

<!-- image -->

## MAX17521 EV Kit Bill of Materials

| Designator   | Value               | Description             | Part Number        | Manufacturer   |   Quantity |
|--------------|---------------------|-------------------------|--------------------|----------------|------------|
| C1, C2       | 2.2μF/X7R/100V/1210 | Input Capacitor         | GRM32ER72A225KA35L | Murata         |          2 |
| C3           | 10μF/X7R/10V/1210   | Output Capacitor        | GRM32DR71A106KA01  | Murata         |          1 |
| C4           | 22μF/X7R/10V/1210   | Output Capacitor        | GRM32ER71A226ME20  | Murata         |          1 |
| C5, C6       | 1μF/X7R/6.3V/0603   | VCC Bypass Capacitor    | GRM188R70J105KA01  | Murata         |          2 |
| C7, C8       | 3300pF/X7R/50V/0402 | Soft-start Capacitor    | GRM155R71H332KA01  | Murata         |          2 |
| C9, C11      | 2700pF/X7R/50V/0402 | Compensation Capacitor  | GRM155R71H272KA01J | Murata         |          2 |
| C10          | 33pF                | Compensation Capacitor  | GRM1555C1H330JA01D | Murata         |          1 |
| C12          | 22pF                | Compensation Capacitor  | GRM1555C1H220JA01D | Murata         |          1 |
| L1           | 22μH                | Inductor                | XAL5050-223        | Coilcraft      |          1 |
| L2           | 15μH                | Inductor                | XAL4040-153        | Coilcraft      |          1 |
| R1           | 82.5kΩ±1%, 0402     | FB divider Resistor     |                    | Vishay Dale    |          1 |
| R2           | 18.2kΩ±1%, 0402     | FB divider Resistor     |                    | Vishay Dale    |          1 |
| R3, R11      | 3.3MΩ±1%, 0603      | EN divider Resistor     |                    | Vishay Dale    |          2 |
| R4           | 750kΩ±1%, 0603      | EN divider Resistor     |                    | Vishay Dale    |          1 |
| R5           | 15.8kΩ±1%, 0402     | Compensation Resistor   |                    | Vishay Dale    |          1 |
| R6, R7       | 10kΩ±1%, 0402       | RESET\ pull-up Resistor |                    | Vishay Dale    |          2 |
| R8           | 22.1kΩ±1%, 0402     | Compensation Resistor   |                    | Vishay Dale    |          1 |
| R9           | 54.9kΩ±1%, 0402     | FB divider Resistor     |                    | Vishay Dale    |          1 |
| R10          | 20.5kΩ±1%, 0402     | FB divider Resistor     |                    | Vishay Dale    |          1 |
| R12          | 1MΩ±1%, 0603        | EN divider Resistor     |                    | Vishay Dale    |          1 |
| U1           | MAX17521            | DC-DC Converter         | MAX17521ATG+       | Maxim          |          1 |

## Component Suppliers

| SUPPLIER        | WEBSITE           |
|-----------------|-------------------|
| Coilcraft, Inc. | www.coilcraft.com |
| MurataAmericas  | www.murata.com    |
| Vishay          | www.vishay.com    |

Note:

Indicate that you are using the MAX17521 when contacting these component suppliers.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17521EVKITA# | EV kit |

#Denotes RoHS-compliant.

## MAX17521 Evaluation Kit

## MAX17521 EV Kit Schematic

<!-- image -->

## MAX17521 Evaluation Kit

## MAX17521 EV Kit PCB Layout

PCB Component Placement Guide: Component Side

<!-- image -->

PCB Layout: Inner Layer 1

<!-- image -->

## Evaluates: MAX17521 in 3.3V and 5V Output-Voltage Application

PCB Layout: Component Side

<!-- image -->

PCB Layout: Inner Layer 2

<!-- image -->

## MAX17521 EV Kit PCB Layout (continued)

PCB Layout: Solder Side

## Evaluates: MAX17521 in 3.3V and 5V Output-Voltage Application

PCB Layout: Solder Mask

<!-- image -->

PCB Layout: Component Placement Guide: Bottom Solder Mask

## MAX17521 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                      | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 6/15            | Initial release                                                                                                                                                                                                  | -               |
|                 1 | 7/17            | Corrected symbols in equations in the Soft-Start Input (SS) and Regulator Enable/Undervoltage-Lockout Level (EN/UVLO1, EN/UVLO2) sections. Updated part number in Ordering Information table to MAX17521EVKITA#. | 2, 6            |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at w.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX17521 in 3.3V and 5V

Output-Voltage Application