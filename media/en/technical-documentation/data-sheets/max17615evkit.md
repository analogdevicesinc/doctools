<!-- lastmod 2022-11-22 -->
<!-- image -->

Click here to ask an associate for production status of specific part numbers.

## MAX17615 Evaluation Kit

## Evaluates: MAX17615 4.25V to 60V, 250mA Current Limiter with Overvoltage, Undervoltage, and Reverse Protection

## General Description

The MAX17615 evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the MAX17615, a  4.25V  to  60V,  250mA,  current-limiter  with  overvoltage (OV), undervoltage (UV), and reverse protection in a 10pin  TDFN  package.  The  EV  kit  can  be  configured  to demonstrate adjustable overvoltage, undervoltage, different current-limit types, different current-limit thresholds and input and output reverse voltage protection.

## Features

- 4.25V to 60V Operating-Voltage Range
- Features a TVS Diode across the Input Terminals
- Features a Schottky Diode and a TVS Diode across the Output Terminals
- Evaluates Undervoltage Lockout (UVLO), Overvoltage Lockout (OVLO),  Three  Current-Limit Types,  and Current-Limit Threshold
- UVLO Programmed to 4V
- OVLO Programmed to 39.6V
- Jumper-Configurable Current-Limit (Selected as 250mA by Default)
- Current-Limit Mode Set to Autoretry by Default
- Proven PCB Layout
- Fully Assembled and Tested

## MAX17615 EV Kit Photo

<!-- image -->

Ordering Information appears at end of data sheet.

## Quick Start

## Required Equipment

- MAX17615 EV kit
- 60V DC power supply
- Multimeters
- Adjustable load (0A -1A)
- USB-A male to  USB-B  male  cable  or  5V  DC  power supply

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps to verify board operation.

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

1. Verify that all jumpers are in their default positions.
2.  Connect  the  USB  cable  to  J1  from  a  computer  or connect a 5V DC power supply to TP3.
3.  Verify that LED1 is on.
4.  Connect a 5V DC power supply to IN. Verify that OUT is 5V.
5.  Gradually  increase  voltage  on  the  DC  power  supply and verify that the OUT voltage goes down and UVOV goes low when the input reaches approximately 39.6V.
6.  Gradually decrease voltage on the DC power supply and verify that OUT comes back and UVOV goes high when the input reaches approximately 38.2V.
7.  Set the DC power-supply voltage to 24V, then connect the  adjustable  load  between  the  OUT  and  GND terminals  and  a  multimeter  in  series  to  measure  the current. Gradually increase the load current and verify that OUT goes down and FLAG goes low when the load current increases above 250mA.
8.  The  jumper  JU1  can  be  configured  to  change  the current limit as shown in Table 2 . Verify various current limit operations by repeating step 7.

## Evaluates: MAX17615 4.25V to 60V, 250mA Current Limiter with Overvoltage, Undervoltage, and Reverse Protection

## Detailed Description

The MAX17615 EV kit is a fully assembled and tested circuit board that demonstrates the MAX17615, a 4.25V to 60V, 250mA current limiter with OV, UV, reverse protection IC in a 10-pin surface-mount TQFN package.

The EV kit circuit can be configured to evaluate user-defined UVLO and OVLO thresholds using resistor-dividers. The overcurrent threshold is determined by external resistors connected to the SETI pin and is jumper-configurable through jumper JU1. Using jumper JU4, the EV kit circuit can be configured to evaluate different current-limit types (Autoretry, Latch-off, and Continuous). LED1 on the EV kit indicates availability of logic power for annunciation signals ( UVOV and FLAG ).

The EV kit provides an on-board output electrolytic capacitor (C4) to enable a demonstration of the MAX17615 protection features while charging a large capacitor.

## Input-Power Supply

The EV kit is powered by a user-supplied 4.25V to 60V power supply connected between J2/TP6 (INPUT POWER) and GND. The EV kit features a 40V TVS diode (D1) at the input terminals which limit input surge voltage to a maximum of 65V and enhance protection.

## Enable

The EN pin is internally pulled to 1.6V to have an always ON option when it is left open. Choose the JU5 setting to enable or disable operation of the MAX17615 (see Table 1 ).

## Table 1. EN (JU5)

| JUMPER   | SHUNT POSITION   | DESCRIPTION             | MAX17615 STATUS   |
|----------|------------------|-------------------------|-------------------|
| JU5      | Open*            | EN pin floating         | ON                |
| JU5      | 1-2              | EN pin connected to GND | OFF               |

*Default Position

## UVLO/OVLO Threshold

The UVLO threshold for input voltage is set through the R9, R10 resistive divider. Use the following equation to calculate the value of R10 for a required undervoltage threshold level:

<!-- formula-not-decoded -->

where R9 can be chosen as 2.2MΩ

VUVLOR = 1.5V

VUVLO = Input supply voltage at which the device exits the UVLO condition.

The OVLO threshold for input voltage is set through the R11, R12 resistive divider. Use the following equation to calculate the value of R12 for a required overvoltage threshold level:

<!-- formula-not-decoded -->

where R11 can be chosen as 2.2MΩ

VOVLOR = 1.5V

VOVLO = Input supply voltage at which the device enters the OVLO condition.

## MAX17615 Evaluation Kit

## Evaluates: MAX17615 4.25V to 60V, 250mA Current Limiter with Overvoltage, Undervoltage, and Reverse Protection

## Current-Limit Threshold

The EV kit features a jumper (JU1) to select the current-limit threshold. Install a jumper as shown in Table 2 to change the current-limit threshold.

Use the following equation to calculate the SETI resistance for a desired current limit:

<!-- formula-not-decoded -->

## Table 2. Current-Limit Threshold (JU1)

| JUMPER   | SHUNT POSITION   | DESCRIPTION              |
|----------|------------------|--------------------------|
| JU1      | 1-2              | Current limit 10mA       |
| JU1      | 3-4              | Current limit 100mA      |
| JU1      | 5-6*             | Current limit 250mA      |
| JU1      | 7-8              | Current limit adjustable |

## Current-Limit Type Select

The EV kit features jumper JU4 to select different current limit responses. See Table 3 for jumper settings.

## Table 3. Current-Limit Type Select (JU4)

| JUMPER   | SHUNT POSITION   | DESCRIPTION   |
|----------|------------------|---------------|
| JU4      | 1-2              | Latch-off     |
| JU4      | 2-3              | Continuous    |
| JU4      | Open*            | Autoretry     |

## Output Load Capacitor

Use JU2 to connect the OUT pins to OUT test point (TP8). Use jumper JU3 to connect output to a 330µF capacitor. See Table 4 for jumper settings.

## Table 4. Output Load Capacitor (JU3)

| JUMPER   | SHUNT POSITION   | DESCRIPTION             |
|----------|------------------|-------------------------|
| JU3      | Installed        | OUT connected to C4     |
| JU3      | Not installed*   | OUT not connected to C4 |

## MAX17615 Evaluation Kit

## Evaluates: MAX17615 4.25V to 60V, 250mA Current Limiter with Overvoltage, Undervoltage, and Reverse Protection

## MAX17615 EV Kit Typical Operating Characteristics

(V IN  = 24V, C IN = 0.47μF, C OUT = 4.7μF, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## MAX17615 Evaluation Kit

<!-- image -->

<!-- image -->

<!-- image -->

## Evaluates: MAX17615 4.25V to 60V, 250mA Current Limiter with Overvoltage, Undervoltage, and Reverse Protection

<!-- image -->

## Component Suppliers

| SUPPLIER                                  | WEBSITE             |
|-------------------------------------------|---------------------|
| Bourns Inc.                               | www.bourns.com      |
| FCI Electronics Interconnection Solutions | www.fciconnect.com  |
| KEMET Corporation                         | www.kemet.com       |
| Murata Americas                           | www.murata.com      |
| Panasonic Corp.                           | www.panasonic.com   |
| ON Semiconductor                          | www.onsemi.com      |
| Diode Incorporated                        | www.diodes.com      |
| Littlefuse                                | www.littelfuse.com  |
| SullinsCorp Connector Solutions           | www.sullinscorp.com |
| Keystone Electronics Corp                 | www.keyelco.com     |
| Molex Electronic Solutions                | www.molex.com       |
| Nichicon Corporation                      | www.nichicon.co.jp  |
| Degson                                    | www.degson.com      |
| Kingbright Electronic Co                  | www.kingbright.com  |

Note:

Indicate that you are using the MAX17615 when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17615EVKIT# | EV Kit |

#Denotes RoHS-compliant.

## MAX17615 Evaluation Kit

<!-- image -->

## Evaluates: MAX17615 4.25V to 60V, 250mA Current Limiter with Overvoltage, Undervoltage, and Reverse Protection

## MAX17615 EV Kit Bill of Materials

| PART REFERENCE       |   QTY | DESCRIPTION                                        | MANUFACTURER PART NUMBER                       |
|----------------------|-------|----------------------------------------------------|------------------------------------------------|
| C1                   |     1 | 1µF 10%, 50V X5R ceramic capacitors (0603)         | Murata GRM188R61H105KAAL                       |
| C2                   |     1 | 0.47µF 10%, 100V X7R ceramic capacitors (0805)     | Murata GRM21BR72A474KA73                       |
| C3                   |     1 | 4.7µF 10%, 100V X7R ceramic capacitors (1210)      | Kemet C1210C475K1R2C, Murata GRM32ER72A475KE14 |
| C4                   |     1 | 330µF 20%, 63V aluminium (10mm)                    | Nichicon UHW1J331MPD1TD                        |
| D1                   |     1 | TVS Diode, 600W (SMB)                              | Bourns SMBJ40CA                                |
| D2                   |     1 | Power Schottky Diode, 60V, 1A (SMA)                | Diodes Incorporated B160-13-F                  |
| D3                   |     1 | Power Schottky Diode, 100V, 3A (SMC)               | ON Semiconductor NRVBS3100T3G                  |
| D4                   |     1 | TVS Diode, 1500W (SMC)                             | Littlefuse 1.5SMC30A                           |
| J1                   |     1 | USB B connector                                    | FCI Connect 61729-0010BLF                      |
| J2, J3               |     2 | 2-Pin Green PC Terminal Block                      | Degson Electronics DG128-5.0-02P-14            |
| JU1                  |     1 | 2x4 Dual-Row Header, 0.1in centers, cut to fit     | Sullins Connector PBC04DAAN                    |
| JU2, JU3             |     2 | 2-Pin Single-Row Header, 0.1in centers, cut to fit | Molex Connector 22-28-4023                     |
| JU4                  |     1 | 3-Pin Single-Row Header, 0.1in centers, cut to fit | Sullins Connector PEC03SAAN                    |
| JU5                  |     1 | 2-Pin Single-Row Header, 0.1in centers, cut to fit | Sullins Connector PEC02SAAN                    |
| LED1                 |     1 | Green LED (1206)                                   | Kingbright APT3216SGC                          |
| R1                   |     1 | 1k ohm 1% resistors (0603)                         | -                                              |
| R2, R3               |     2 | 499k ohm 1% resistors (0402)                       | -                                              |
| R4                   |     1 | 150k ohm 1% resistor (0402)                        | -                                              |
| R5, R13              |     2 | 5k ohm 0.1% resistors (0402)                       | -                                              |
| R6                   |     1 | 30k ohm 1% resistors (0402)                        | -                                              |
| R7                   |     1 | 3k ohm 1% resistors (0402)                         | -                                              |
| R8, R15              |     2 | 1.2k ohm 1% resistors (0402)                       | -                                              |
| R9, R11              |     2 | 2.2M ohm 5% resistors (0402)                       | -                                              |
| R10                  |     1 | 1.3M ohm 1% resistors (0402)                       | -                                              |
| R12                  |     1 | 86.6k ohm 1% resistors (0402)                      | -                                              |
| R14                  |     1 | 20k ohm 1% resistors (0402)                        | -                                              |
| R16                  |     1 | 25k ohm Trimmer Potentiometers                     | Bourns 3296Y-1-253LF                           |
| TP1, TP9, TP11- TP13 |     5 | White Test Point                                   | Keystone Electronics Corp 5002                 |
| TP2, TP4, TP5, TP7   |     4 | Black Test Point                                   | Keystone Electronics Corp 5001                 |
| TP3, TP6, TP8        |     3 | Red Test Point                                     | Keystone Electronics Corp 5000                 |
| TP10                 |     1 | Green Test Point                                   | Keystone Electronics Corp 5116                 |

## MAX17615 Evaluation Kit

## Evaluates: MAX17615 4.25V to 60V, 250mA Current Limiter with Overvoltage, Undervoltage, and Reverse Protection

## MAX17615 Evaluation Kit

| U1    |   1 | 4.25V to 60V, 250mA, Current-Limiter with OV, UV and Reverse Protection (10-pin TDFN, 3mmx3mm)   | MAX17615ATB+                                             |
|-------|-----|--------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| C6    |   0 | Not Installed; 4.7µF 20%, 80V aluminium                                                          | Panasonic EEE-FK1K4R7P, Cornell Dubilier AFK475M80D16T-F |
| D5    |   0 | Not installed; Power Schottky Diode, 60V, 5A (SMC)                                               | Diodes Incorporated B540CQ-13-F                          |
| D6-D8 |   0 | Power Schottky Diode, 50V, 1A (SMA)                                                              | ON Semiconductor MURA105T3G                              |
| PCB   |   1 | PCB: MAX17615 Evaluation Kit                                                                     | -                                                        |

## Evaluates: MAX17615 4.25V to 60V, 250mA Current Limiter with Overvoltage, Undervoltage, and Reverse Protection

## MAX17615 EV Kit Schematic

<!-- image -->

## Evaluates: MAX17615 4.25V to 60V, 250mA Current Limiter with Overvoltage, Undervoltage, and Reverse Protection

## MAX17615 EV Kit PCB Layout

MAX17615 EV Kit PCB Layout -Top Silkscreen

<!-- image -->

## MAX17615 Evaluation Kit

MAX17615 EV Kit PCB Layout -Top Layer

<!-- image -->

MAX17615 EV Kit PCB Layout -Bottom Layer

<!-- image -->

## Evaluates: MAX17615 4.25V to 60V, 250mA Current Limiter with Overvoltage, Undervoltage, and Reverse Protection

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/22            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## MAX17615 Evaluation Kit