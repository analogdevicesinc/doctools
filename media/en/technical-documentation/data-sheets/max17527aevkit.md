<!-- lastmod 2023-03-20 -->
<!-- image -->

Evaluates: MAX17527A -5.5V to 60V, 6A Power Limiter with OV, UV, Reverse Polarity Protection

## General Description

The  MAX17527A  evaluation  kit  (EV  kit)  is  a  fully assembled and tested circuit board that demonstrates the MAX17527A high accuracy adjustable power limiter with integrated 30m Ω field-effect transistor (FET) in a 20pin 5mm x 5mm TQFN-EP package. The EV kit can be configured to demonstrate adjustable overvoltage (OV), undervoltage (UV), overcurrent (OC), different currentlimit  types,  reverse  output  voltage,  and  power  limit features. The EV kit also features an external N-Channel field-effect  transistor  (nFET)  for  reverse  input  voltage and reverse current protection evaluation.

## MAX17527A EV Kit Photo

<!-- image -->

## Features

- 5.5V to 60V Wide Input Voltage Range
- Features TVS Diode (D1) across the Input Terminals
- Features  TVS  and  Free-Wheeling  Diodes  (D3  and D4) across the Output Terminals
- One External nFET Installed
- Evaluates Undervoltage Lockout (UVLO), Overvoltage  Lockout  (OVLO),  Three  Current-Limit Types, and Current-Limit Threshold
- Demonstrates Internal UVLO Programmed to 12.4V
- Demonstrates Internal OVLO Programmed to 36.2V
- Active Power Limit to Protect Supply or Load
- Jumper-Configurable Current Limit
- Jumper-Configurable Current-Limit Type
- Features Fault Indication Signal ( FLAG )
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## MAX17527A Evaluation Kit

## Evaluates: MAX17527A -5.5V to 60V, 6A Power Limiter with OV, UV, Reverse Polarity Protection

## Quick Start

## Configuration Diagram

Figure 1. MAX17527A EV Kit Setup Diagram

<!-- image -->

## Required Equipment

- MAX17527A EV kit
- 60V DC power supplies
- Digital multimeters (DMMs)
- Adjustable load (0-10A)
- 5V DC power supply

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps to verify board operation.

## Caution: Do not turn on the power supply until all connections are completed.

1.  Verify that all jumpers are in their default positions.
2.  Connect a 5V DC power supply across VIO and GND terminals.
3.  Set the 60V DC power supply to 10V and connect it between VSN and GND. Verify that FLAG is 0V.
4.  Increase the DC power supply voltage and verify that when voltage reaches approximately 12.4V, the voltage on OUT\_1 is 12.4V and FLAG is 5V.
5.  Gradually  increase  the  DC  power  supply  voltage  and  verify  that  when  voltage  reaches  approximately  36.2V,  the voltage on OUT\_1 goes down and FLAG is 0V.
6.  Gradually decrease the DC power supply voltage and verify that when voltage reaches approximately 34.1V, the voltage on OUT\_1 is 34.1V and FLAG is 5V.
7.  Set the DC power supply voltage to 24V and connect the adjustable load between OUT\_1 and GND terminals and a DMM in series to measure the current. Gradually increase the load current and verify that the OUT\_1 voltage reduces and FLAG goes low when the load current increases above 6A.
8.  The jumpers JU10-JU13 may be configured to change the current limit as given in Table 5 . Verify the various current limit operations by repeating Step 7.

## MAX17527A Evaluation Kit

## Evaluates: MAX17527A -5.5V to 60V, 6A Power Limiter with OV, UV, Reverse Polarity Protection

## Detailed Description

The EV kit circuit can be configured to evaluate user-defined UVLO and OVLO thresholds using resistor-dividers. The OC threshold is determined by external resistors connected to the SETI pin and is jumper-configurable through jumpers JU10 -JU13. Using Jumper JU2, the EV kit circuit can be configured to evaluate different current limit types (Autoretry, Continuous, and Latch-off). Jumper JU5 may be used to select the internal UVLO threshold. Jumper JU7 may be used to select the internal OVLO threshold. Jumper JU9 may be installed to disable Power Limit function.

## Input Power Supply

The EV kit is powered by an external 5.5V to 60V power supply connected between SN and GND. The EV kit features a 40V TVS diode (D1) at input terminals which limits input surge voltages to a maximum of 65V and enhances protection.

## Power Supply for Logic Pins

The logic pins on the EV kit, EN pin and open-drain fault indicator output FLAG pin are pulled up by a user-supplied 5V power supply connected between VIO and GND.

## Enable Inputs

The MAX17527A has internal pullup to 1.45V when the EN pin is left floating. Use Jumper JU3 to connect EN pin to GND to turn off the MAX17527A.

## Table 1. EN (JU3) Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION             | SWITCH STATUS   |
|----------|------------------|-------------------------|-----------------|
| JU3      | Not installed*   | EN pin unconnected      | ON              |
|          | 1-2              | EN pin connected to GND | OFF             |

*Default position

## Undervoltage Lockout Threshold

Install Jumper JU5 to select the internal UVLO threshold of 12.4V (typ). Install Jumper JU4 to select the external UVLO threshold programmed by resistor-dividers.

The external UVLO threshold for input voltage is set through either R1 or R2/R3 resistive divider. Use the following equation to calculate the value of R3 for a required UVLO threshold level:

<!-- formula-not-decoded -->

where R2 may be chosen as 2.2MΩ

VSET\_UVLO = 1.26V

VUVLO = Input supply voltage at which the device exits the UVLO condition.

## Table 2. UVLO Threshold Jumper Settings (JU4 and JU5)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                              |
|----------|------------------|--------------------------------------------------------------------------------------------------------------------------|
| JU5      | Installed*       | UVLO is connected to ground; Internal UVLO threshold is used (Do not install JU4)                                        |
| JU5      | Not installed    | UVLO is programmable                                                                                                     |
| JU4      | 1-2              | UVLO is connected to V SN with external voltage-divider; Use either R1 or R2/R3 to set UV threshold (Do not install JU5) |
| JU4      | 2-3              | UVLO is connected to V IN with external voltage-divider; Use either R1 or R2/R3 to set UV threshold (Do not install JU5) |
| JU4      | Not installed*   | Internal UVLO is selected through JU5                                                                                    |

*Default position

## MAX17527A Evaluation Kit

## Evaluates: MAX17527A -5.5V to 60V, 6A Power Limiter with OV, UV, Reverse Polarity Protection

## Overvoltage Lockout Threshold

Install Jumper JU7 to select internal OVLO threshold of 36.2V (typ). Install Jumper JU6 to select the external OVLO threshold programmed by resistor-dividers.

The external OVLO threshold for input voltage is set through either R4 or R5/R6 resistive divider. Use the following equation to calculate the value of R6 for a required OVLO threshold level:

<!-- formula-not-decoded -->

where R5 may be chosen as 2.2MΩ

VSET\_OVLO = 1.22V

VOVLO = Input supply voltage at which the device enters the OVLO condition.

Table 3. OVLO Threshold Jumper Settings (JU6 and JU7)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                              |
|----------|------------------|--------------------------------------------------------------------------------------------------------------------------|
| JU7      | Installed*       | OVLO is connected to ground; Internal OVLO threshold is used (Do not install JU6)                                        |
| JU7      | Not installed    | OVLO is programmable                                                                                                     |
| JU6      | 1-2              | OVLO is connected to V SN with external voltage-divider; Use either R4 or R5/R6 to set OV threshold (Do not install JU7) |
| JU6      | 2-3              | OVLO is connected to V IN with external voltage-divider; Use either R4 or R5/R6 to set OV threshold (Do not install JU7) |
| JU6      | Not installed*   | Internal OVLO is selected through JU7                                                                                    |

*Default position

## Power-Limit Threshold

The  EV  kit  features  configuration  settings  to  demonstrate  the  unique  programmable  Power  Limit  feature  of  the MAX17527A. The power limit is configurable based on the input or output voltage. The MAX17527A allows the set current limit  to  be  modified  automatically  based  on  an  input  or  output  voltage  level,  and  limits  input  power  or  output  power, respectively. The EV kit features jumpers JU8 and JU9 to program different power-limit thresholds. Install jumpers as shown in Table 4 to change the power-limit thresholds. Refer to the MAX17527A data sheet to program PLIM threshold using R7 or R8/R9 resistor-divider.

Table 4. PLIM Threshold Jumper Settings (JU8 and JU9)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                     |
|----------|------------------|---------------------------------------------------------------------------------------------------------------------------------|
| JU9      | Installed*       | PLIM pin is connected to ground; PLIM is disabled (Do not install JU8)                                                          |
| JU9      | Not installed    | PLIM is programmable                                                                                                            |
| JU8      | 1-2              | PLIM pin is connected to V OUT with external voltage-divider; Use either R7 or R8/R9 to set PLIM threshold (Do not install JU9) |
| JU8      | 2-3              | PLIM pin is connected to V IN with external voltage-divider; Use either R7 or R8/R9 to set PLIM threshold (Do not install JU9)  |
| JU8      | Not installed*   | PLIM is disabled                                                                                                                |

*Default position

## Current-Limit Threshold

The EV kit features jumpers JU10 -JU13 to use different resistors to program current-limit threshold. Install a jumper as shown in Table 5 to change the current-limit threshold.

## MAX17527A Evaluation Kit

## Evaluates: MAX17527A -5.5V to 60V, 6A Power Limiter with OV, UV, Reverse Polarity Protection

## Table 5. Current-Limit Threshold (JU10 -JU13)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                        |
|----------|------------------|------------------------------------|
| JU10     | Installed        | Current limit 0.6A                 |
| JU10     | Not installed*   | SETI open. Part is disabled        |
| JU11     | Installed        | Current limit 2.9A                 |
| JU11     | Not installed*   | SETI open. Part is disabled        |
| JU12     | Installed*       | Current limit 6.0A                 |
| JU12     | Not installed    | SETI open. Part is disabled        |
| JU13     | Installed        | Current limit adjustable using R13 |
| JU13     | Not installed*   | SETI open. Part is disabled        |

## Current-Limit Type Select

The EV kit features Jumper JU2 to select different current-limit responses. See Table 6 for jumper setting.

## Table 6. Current-Limit Type Select (JU2)

| JUMPER   | SHUNT POSITION   | DESCRIPTION   |
|----------|------------------|---------------|
| JU2      | 1-2*             | Autoretry     |
| JU2      | 2-3              | Latch-off     |
| JU2      | Open             | Continuous    |

## MAX17527A Evaluation Kit

## Evaluates: MAX17527A -5.5V to 60V, 6A Power Limiter with OV, UV, Reverse Polarity Protection

## MAX17527A EV Kit Typical Operating Characteristics

(V SN  = 24V, CIN = 1µF, COUT = 1µF, TA = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## MAX17527A Evaluation Kit

<!-- image -->

<!-- image -->

<!-- image -->

## Evaluates: MAX17527A -5.5V to 60V, 6A Power Limiter with OV, UV, Reverse Polarity Protection

<!-- image -->

## Component Suppliers

| SUPPLIER                        | WEBSITE               |
|---------------------------------|-----------------------|
| Bourns, Inc.                    | www.bourns.com        |
| Infineon                        | www.infineon.com      |
| Murata Americas                 | www.murata.com        |
| Panasonic Corp.                 | www.panasonic.com     |
| TDK Corp.                       | www.component.tdk.com |
| ON Semiconductor                | www.onsemi.com        |
| SullinsCorp Connector Solutions | www.sullinscorp.com   |
| Keystone Electronics Corp.      | www.keyelco.com       |
| Littlefuse                      | www.littelfuse.com    |
| Diodes Incorporated             | www.diodes.com        |

Note: Indicate that you are using the MAX17527A when contacting these component suppliers.

<!-- image -->

## MAX17527A Evaluation Kit

<!-- image -->

<!-- image -->

## Evaluates: MAX17527A -5.5V to 60V, 6A Power Limiter with OV, UV, Reverse Polarity Protection

## MAX17527A EV Kit Bill of Materials

| PART REFERENCE             |   QTY | DESCRIPTION                                                                                       | MANUFACTURER PART NUMBER                          |
|----------------------------|-------|---------------------------------------------------------------------------------------------------|---------------------------------------------------|
| C1, C7                     |     2 | 1µF 10%, 100V X7R Ceramic Capacitors (1206)                                                       | Murata GCH31CR72A105KE01; TDK C3216X7R2A105K160AA |
| C2, C8                     |     2 | 10µF 20%, 63V Aluminium Electrolytic (5mm)                                                        | Panasonic ECA-1JHG100                             |
| C4                         |     1 | 1µF 10%, 6.3V X7R Ceramic Capacitors (0603)                                                       | Murata GRM188R60J105KA01                          |
| D1                         |     1 | TVS Diode, 1500W (SMC)                                                                            | Littlefuse SMCJ40CA                               |
| D3                         |     1 | Power Schottky Diode, 100V, 3A (SMC)                                                              | ON Semiconductor NRVBS3100T3G Vishay SS3H10-M3    |
| D4                         |     1 | TVS Diode, 1500W (SMC)                                                                            | Littlefuse 1.5SMC30A                              |
| Q1                         |     1 | N-CH MOSFET 100V 40A                                                                              | Infineon BSZ150N10LS3 G Infineon BSZ146N10LS5     |
| R1, R4, R7                 |     3 | 1MΩ, 0.5W, Trimmer Potentiometers 10%, 100PPM                                                     | Murata PV36W105C01                                |
| R10                        |     1 | 62k Ω 1% Resistor (0603)                                                                          | -                                                 |
| R11                        |     1 | 13k Ω 1% Resistors (0603)                                                                         | -                                                 |
| R12                        |     1 | 6.2k Ω 1% Resistors (0603)                                                                        | -                                                 |
| R13                        |     1 | 100k Ω Trimmer Potentiometers                                                                     | Bourns Inc. 3296W-1-104LF                         |
| R16                        |     1 | 499k Ω 1% Resistors (0603)                                                                        | -                                                 |
| R23                        |     1 | 220k Ω 1% Resistors (0603)                                                                        | -                                                 |
| IN, OUT_1, SN              |     3 | Red Banana Connector                                                                              | Keystone Electronics Corp 7006                    |
| GND                        |     2 | Black Banana Connector                                                                            | Keystone Electronics Corp 7007                    |
| GN, OUT, TP8, TP9          |     4 | Red Test Point                                                                                    | Keystone Electronics Corp 5000                    |
| TP1, TP7, TP22, TP23       |     4 | Black Test Point                                                                                  | Keystone Electronics Corp 5001                    |
| FLAG                       |     1 | White Test Point                                                                                  | Keystone Electronics Corp 5002                    |
| VIO                        |     1 | Orange Test Point                                                                                 | Keystone Electronics Corp 5003                    |
| EN, OVLO, PLIM, SETI, UVLO |     5 | Yellow Test Point                                                                                 | Keystone Electronics Corp 5004                    |
| U1                         |     1 | 5.5V to 60V, 6A Power Limiter with OV, UV, Reverse Polarity Protection (20-Pin TQFN-EP 5mm x 5mm) | MAX17527AATP+                                     |
| JU1, JU14                  |     2 | 4-Pins Two-Row Header, 0.1in Centers, cut to fit                                                  | Sullins Connector PEC02DAAN                       |
| JU2, JU4, JU6, JU8         |     4 | 3-Pins Single-Row Header, 0.1in Centers, cut to fit                                               | Sullins Connector PEC03SAAN                       |
| JU3, JU5, JU7, JU9- JU13   |     9 | 2-Pins Single-Row Header, 0.1in Centers, cut to fit                                               | Sullins Connector PEC02SAAN                       |
| C11                        |     0 | 1µF 10%, 100V X7R Ceramic Capacitors (1206)                                                       | Murata GRM31CR72A105KA01; TDK C3216X7R2A105K160AA |
| D5                         |     0 | 40V, 5A Diode (SMC)                                                                               | Diode Incorporated B540CQ-13-F                    |
| D9-D11                     |     0 | Power Schottky Diode, 50V, 1A (SMA)                                                               | ON Semiconductor MURA105T3G                       |
| R2, R3, R5, R6, R8, R9     |     0 | 0603 Resistors (Open)                                                                             | -                                                 |
| PCB                        |     1 | PCB: MAX17527A Evaluation Kit                                                                     | -                                                 |

## MAX17527A Evaluation Kit

## Evaluates: MAX17527A -5.5V to 60V, 6A Power Limiter with OV, UV, Reverse Polarity Protection

## MAX17527A EV Kit Schematics

<!-- image -->

## Evaluates: MAX17527A -5.5V to 60V, 6A Power Limiter with OV, UV, Reverse Polarity Protection

## MAX17527A EV Kit PCB Layouts

<!-- image -->

## Evaluates: MAX17527A -5.5V to 60V, 6A Power Limiter with OV, UV, Reverse Polarity Protection

## MAX17527A Evaluation Kit

<!-- image -->

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX17527AEVKITB# | EV Kit |

#Denotes RoHS compliance.

## Evaluates: MAX17527A -5.5V to 60V, 6A Power Limiter with OV, UV, Reverse Polarity Protection

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 12/22           | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## MAX17527A Evaluation Kit