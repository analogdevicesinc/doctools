<!-- lastmod 2022-08-03 -->
## MAX17608 Evaluation Kit

Evaluates: MAX17608 - 4.5V to 60V, 1A, OV, UV, Reverse-Voltage Protector with Forward/Reverse Current Limit

## General Description

The MAX17608 evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the MAX17608 4.5V to 60V, 1A, OV, UV, reverse-voltage protector with forward/reverse current-limit in a 12-pin TDFN-EP package. The EV kit can be configured to demonstrate adjust -able  overvoltage,  undervoltage,  different  current-limit types, and different current-limit thresholds.

## Features

- 4.5V to 60V Operating-Voltage Range
- Features a TVS Diode across the Input and Schottky Diode across the Output Terminals
- Evaluates UVLO, OVLO, Three Current-Limit Types, and Current-Limit Threshold
- UVLO programmed to 4.5V
- OVLO programmed to 36V
- Jumper-Configurable Current-Limit (Selected as 0.1A by default)
- Current-Limit Mode Set To Autoretry by default
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Quick Start

## Recommended Equipment

- MAX17608 EV kit
- 60V DC power supply
- Multimeters
- Adjustable load (0A-1.5A)
- USB-A male to USB-B male cable or 5V DC power supply

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Verify that all jumpers are in their default positions.
- 2) Connect the USB cable to J1 from a computer or connect a 5V-DC power supply to TP3.
- 3) Verify that LED1 is on.
- 4) Set the 60V DC power supply to 5V and connect to IN (J2/TP6). Verify that OUT (J3/TP8) is 5V.
- 5) Gradually increase the DC power-supply voltage and verify that OUT voltage goes down and UVOV goes low when input reaches approximately 36V.
- 6) Gradually decrease the DC power-supply voltage and verify that OUT comes back and UVOV goes high when the input reaches approximately 34.8V.
- 7) Set the DC power-supply voltage to 24V and connect the adjustable load between OUT and GND terminals and a multimeter in series to measure the current. Gradually increase the load current and verify that the OUT goes down and FLAG goes low when the load current increases above 0.1A.
- 8) The jumper JU1 can be configured to change the current limit as given in Table 2. Verify various current limit operations by repeating step 7.

CAUTION: When  applying  a  negative  input  to  V IN ,  the negative input test should be performed when the output capacitors are fully discharged and V BUS  is not supplied.

<!-- image -->

## MAX17608 Evaluation Kit

## Detailed Description

The  EV  kit  circuit  can  be  configured  to  evaluate  userdefined UVLO and OVLO thresholds using resistor-divid -ers. The overcurrent threshold is determined by external resistors connected to the SETI pin and is jumper-config -urable through jumper JU1. Using jumper JU4, the EV kit circuit can be configured to evaluate different current limit types (Autoretry, Continuous, and Latch-off). LED1 on the EV kit indicates availability of logic power for annunciation signals ( UVOV and FLAG ) and EN.

The EV kit provides on-board output capacitors to enable a demonstration of the MAX17608 protection features.

## Input-Power Supply

The  EV  kit  is  powered  by  a  user-supplied  4.5V  to  60V power supply connected between TP6 (INPUT POWER) and GND.

## Enable

To enable the device, connect a USB-A male connector from the computer to the USB-B female connector, J1, or an external 5V supply to TP3 and GND. This provides 5V to  V BUS   and  to  the  EN  pin  (JU5  connects  V BUS   to  EN by default). Choose the JU5 setting to enable or disable operation of the MAX17608 (see Table 1).

## UVLO/OVLO Threshold

Ensure jumper JU2 is installed to use the UVLO/OVLO resistive dividers.

## Table 1. Enable (JU5)

| JUMPER   | SHUNT POSITION   | DESCRIPTION               | MAX17608 STATUS   |
|----------|------------------|---------------------------|-------------------|
| JU5      | 1-2*             | EN pin connected to V BUS | ON                |
| JU5      | 2-3              | EN pin connected to GND   | OFF               |
| JU5      | Open             | EN pin floating           | ON                |

## Table 2. Current-Limit Threshold (JU1)

| JUMPER   | SHUNT POSITION   | DESCRIPTION              |
|----------|------------------|--------------------------|
| JU1      | 1-2*             | Current limit 0.1A       |
| JU1      | 3-4              | Current limit 0.5A       |
| JU1      | 5-6              | Current limit 1.0A       |
| JU1      | 7-8              | Current limit adjustable |

* Default position.

## Evaluates: MAX17608 - 4.5V to 60V, 1A, OV, UV, Reverse-Voltage Protector with Forward/Reverse Current Limit

The UVLO threshold for input voltage is set through the R9, R10 resistive  divider.  Use  the  following  equation  to calculate  the  value  of  R10  for  a  required  undervoltage threshold level:

<!-- formula-not-decoded -->

where R9 can be chosen as 2.2MΩ, V REF is 1.5V, and VUVLO is the required undervoltage protection threshold.

The OVLO threshold for input voltage is set through the R11,  R12  resistive  divider.  Use  the  following  equation to calculate the value of R12 for a required overvoltage threshold level:

<!-- formula-not-decoded -->

where R11 can be chosen as 2.2MΩ, V REF is 1.5V, and VOVLO is the required overvoltage protection threshold.

## Current-Limit Threshold

The EV kit features a jumper (JU1) to select the currentlimit  threshold.  Install  a  jumper  as  shown  in Table  2  to change the current-limit threshold.

│

## MAX17608 Evaluation Kit

## Current-Limit Type Select

The EV kit features jumper JU4 to select different currentlimit responses. See Table 3 for jumper settings.

## Table 3. Current-Limit Type Select (JU4)

| JUMPER   | SHUNT POSITION   | DESCRIPTION   |
|----------|------------------|---------------|
| JU4      | 1-2              | Latch-off     |
| JU4      | 2-3              | Continuous    |
| JU4      | Open*            | Autoretry     |

## Table 4. Output Load Capacitor (JU7)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                     |
|----------|------------------|---------------------------------|
| JU7      | Installed        | OUT connected to C4 and C5.     |
| JU7      | Not installed*   | OUT not connected to C4 and C5. |

## Evaluates: MAX17608 - 4.5V to 60V, 1A, OV, UV, Reverse-Voltage Protector with Forward/Reverse Current Limit

## Output-Load Capacitor

Use JU6 to connect the OUT pins to the OUT test point (TP8). Use jumper JU7 to connect output to 330µF capac -itors. See Table 4 for jumper settings

│

## MAX17608 Evaluation Kit

## MAX17608 EV Kit Performance Report

(V IN  = 24V, unless otherwise noted.)

POWER-UP RESPONSE

WITH 330µF CAPACITOR AT NO LOAD

toc01

V IN

V OUT

I

IOUT

V

UVOV

20V/div

20V/div

1V/div

5V/div

4ms/div

<!-- image -->

CONTINUOUS CURRENT-LIMIT RESPONSE

toc07

V OUT

I OUT

V

FLAG

I

LIM

= 1A

I

LIM

200ms/div

= 0.5A

20V/div

500mA/div

5V/div V IN

V OUT

V

FLAG

I OUT

V IN

V OUT

V

FLAG

I OUT

V OUT

I OUT

V

FLAG

I

24V

24V

10µs/div

CURRENT-LIMIT RESPONSE

toc05

= 1A,

LIM

I L = 100mA TO SHORT ON OUT WITH 1A/s

REVERSE-BLOCKING RESPONSE

toc02

20V/div

20V/div

5V/div

1A/div

20V/div

20V/div

5V/div

1A/div

100ms/div

LATCH-OFF CURRENT-LIMIT RESPONSE

toc08

Y

35V

I

LIM

200ms/div

= 0.5A

20V/div

500mA/div

5V/div V IN

V OUT

V

FLAG

I OUT

V OUT

I OUT

V

FLAG

V IN

V OUT

V

UVOV

THERMAL SHUTDOWN DUE TO

OUTPUT SHORT-CIRCUIT

toc03

I

LIM = 1A

24V

T

48V

1ms/div

I

LIM

= 0.5A

200ms/div

OVERVOLTAGE-FAULT RESPONSE

toc09

= 220

R LOAD

Ω

C OUT

= 4.7µF

20V/div

20V/div

5V/div

1A/div

2ms/div

AUTORETRY CURRENT-LIMIT RESPONSE

toc06

20V/div

500mA/div

5V/div

20V/div

20v/div

5V/div

│

## MAX17608 Evaluation Kit

## Component Suppliers

| SUPPLIER                                  | WEBSITE                |
|-------------------------------------------|------------------------|
| Bourns, Inc.                              | www.bourns.com         |
| Fairchild Semiconductor                   | www.fairchildsemi.com  |
| FCI Electronics Interconnection Solutions | www.fciconnect.com     |
| Lite-On, Inc.                             | www.us.liteon.com      |
| Lumex Inc.                                | www.lumex.com          |
| Murata Americas                           | www.murata.com         |
| Panasonic Corp.                           | www.panasonic.com      |
| Phoenix Contact, Inc.                     | www.phoenixcontact.com |
| STMicroelectronics                        | www.us.st.com          |
| TDK Corp.                                 | www.component.tdk.com  |

Note:

Indicate that you are using the MAX17608 when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17608EVKIT# | EV Kit |

Evaluates: MAX17608 - 4.5V to 60V, 1A, OV, UV, Reverse-Voltage Protector with Forward/Reverse Current Limit

│

## MAX17608 Evaluation Kit

## MAX17608 EV Kit Bill of Materials

| PART REFERENCE      |   QTY | DESCRIPTION                                                                                                     | MANUFACTURER PART NUMBER            |
|---------------------|-------|-----------------------------------------------------------------------------------------------------------------|-------------------------------------|
| C1                  |     1 | 1µF 10%, 25V X7R ceramic capacitors (0603)                                                                      | Murata GRM188R61E105KA12            |
| C2                  |     1 | 0.47µF 10%, 100V X7R ceramic capacitors (0805)                                                                  | Murata GRM21BR72A474KA73L           |
| C3                  |     1 | 4.7µF 10%, 100V X7R ceramic capacitors (1210)                                                                   | Murata GRM32ER72A475KE14            |
| C4                  |     1 | 330µF 20%, 50V aluminium (10mm)                                                                                 | Panasonic EEU-EB1H331               |
| D1                  |     1 | TVS Diode, 600W (SMB)                                                                                           | Bourns SMBJ40CA                     |
| D2                  |     1 | Power Schottky Diode, 60V, 5A (SMC)                                                                             | Diodes Incorporated B560CQ-13-F     |
| D3                  |     1 | Power Schottky Diode, 60V, 1A (SMA)                                                                             | Diodes Incorporated B160-13-F       |
| J1                  |     1 | USB B connector                                                                                                 | FCI Connect 61729-0010BLF           |
| J2, J3              |     2 | 2-Pin Green PC Terminal Block                                                                                   | Degson Electronics DG128-5.0-02P-14 |
| JU1                 |     1 | 2x4 Dual-Row Header, 0.1in centers, cut to fit                                                                  | Sullins Connector PBC04DAAN         |
| JU2, JU3, JU6, JU7  |     4 | 2-Pin Single-Row Header, 0.1in centers, cut to fit                                                              | Molex Connector 22-28-4023          |
| JU4, JU5            |     2 | 3-Pin Single-Row Header, 0.1in centers, cut to fit                                                              | Sullins Connector PEC03SAAN         |
| LED1                |     1 | Green LED (1206)                                                                                                | Kingbright APT3216SGC               |
| R1                  |     1 | 1k ohm 1% resistors (0603)                                                                                      | -                                   |
| R2, R3              |     2 | 10k ohm 1% resistors (0402)                                                                                     | -                                   |
| R4                  |     1 | 150k ohm 5% resistor (0402)                                                                                     | -                                   |
| R5, R13             |     2 | 5k ohm 0.1% resistors (0402)                                                                                    | -                                   |
| R6                  |     1 | 15k ohm 1% resistors (0402)                                                                                     | -                                   |
| R7                  |     1 | 3k ohm 1% resistors (0402)                                                                                      | -                                   |
| R8                  |     1 | 1.5k ohm 1% resistors (0402)                                                                                    | -                                   |
| R9, R11             |     2 | 2.2M ohm 5% resistors (0402)                                                                                    | -                                   |
| R10                 |     1 | 1.1M ohm 1% resistors (0402)                                                                                    | -                                   |
| R12                 |     1 | 95.3k ohm 1% resistors (0402)                                                                                   | -                                   |
| R14                 |     1 | 20k ohm 1% resistors (0402)                                                                                     | -                                   |
| R15                 |     1 | 1k ohm 1% resistors (0402)                                                                                      | -                                   |
| R16                 |     1 | 20k ohm Trimmer Potentiometers                                                                                  | Bourns 3296W-1-203LF                |
| TP1, TP9, TP11-TP13 |     5 | White Test Point                                                                                                | Keystone Electronics Corp 5002      |
| TP2, TP4, TP5, TP7  |     4 | Black Test Point                                                                                                | Keystone Electronics Corp 5001      |
| TP3, TP6, TP8       |     3 | Red Test Point                                                                                                  | Keystone Electronics Corp 5000      |
| TP10                |     1 | Green Test Point                                                                                                | Keystone Electronics Corp 5116      |
| U1                  |     1 | 4.5V to 60V, 1A, OV, UV, Reverse Voltage Protector with Forward/Reverse Current Limit (12-pin TDFN-EP, 3mmx3mm) | MAX17608ATC+                        |
| C5                  |     0 | Not Installed; 330µF 20%, 50V aluminium (10mm)                                                                  | Panasonic EEU-EB1H331               |
| D4                  |     0 | Not Installed; TVS Diode, 600W (SMB)                                                                            | Bourns SMBJ40CA                     |
| PCB                 |     1 | PCB: MAX17608 Evaluation Kit                                                                                    | -                                   |

## Evaluates: MAX17608 - 4.5V to 60V, 1A, OV, UV, Reverse-Voltage Protector with Forward/Reverse Current Limit

## MAX17608 Evaluation Kit

## MAX17608 EV Kit Schematic

<!-- image -->

## Evaluates: MAX17608 - 4.5V to 60V, 1A, OV, UV, Reverse-Voltage Protector with Forward/Reverse Current Limit

## MAX17608 Evaluation Kit

## MAX17608 EV Kit  PCB Layout

MAX17608 EV Kit  PCB Layout-Top Silkscreen

<!-- image -->

## Evaluates: MAX17608 - 4.5V to 60V, 1A, OV, UV, Reverse-Voltage Protector with Forward/Reverse Current Limit

MAX17608 EV Kit  PCB Layout-Top Layer

<!-- image -->

MAX17608 EV Kit  PCB Layout-Bottom Layer

<!-- image -->

│

## MAX17608 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/18            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX17608 - 4.5V to 60V, 1A, OV, UV, Reverse-Voltage Protector with Forward/Reverse Current Limit