<!-- lastmod 2022-08-03 -->
## MAX17613CEVKIT# Evaluation Kit

## General Description

The MAX17613CEVKIT# evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the MAX17613C 4.5V to 60V, 3A, reverse-voltage protector with  forward  current  limit  and  reverse  current  block  in a  20-pin  TQFN-EP  package. The  EV  kit  can  be  configured to  demonstrate three current-limit  types  (Autoretry, Continuous, Latchoff) and different current-limit thresholds (from 0.15A to 3A). For more details about the IC benefits and features, refer to the MAX17613 IC data sheet.

## Features

- 4.5V to 40V Operating Voltage Range (Remove the TVS Diode to Extend the Operating Voltage Range up to 60V)
- Features a 40V TVS Diode (D1) across the Input and Schottky Diode across the Output Terminals
- Evaluates Three Current-Limit Types and CurrentLimit Threshold
- Jumper-Configurable Current Limit
- Jumper-Configurable Current-Limit Type
- Programmable Startup Blanking Time
- Features Fault Indication Signals ( FWD , REV )
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX17613C - 4.5V to 60V, 3A, Reverse-Voltage Protector with Forward Current Limit

## Quick Start

## Recommended Equipment

- MAX17613CEVKIT#
- 60V, 5A DC power supply
- 4 Multimeters
- Adjustable load (0A-3.5A)
- USB-A male to USB-B male cable or 5V DC power supply

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

Caution: Do  not  turn  on  power  supply  until  all  connections are completed.

- 1)  Verify that all jumpers are in their default positions.
- 2)  Connect the USB cable to J1 from a computer or connect a 5V-DC power supply to TP3.
- 3)  Verify that LED1 is on.
- 4)  Verify the JU6 jumper is installed.
- 5)  Set the 60V DC power supply to 5V and connect to IN (J2). Verify that OUT (J3/TP8) is 5V.
- 6)  Set the DC power-supply voltage to 24V and connect the adjustable load between OUT and GND terminals and  a  multimeter  in  series  to  measure  the  current. Gradually increase the load current and verify that the OUT goes down and FWD goes  low  when  the  load current increases above 0.3A.
- 7)  The  jumper  JU1  can  be  configured  to  change  the current limit (see Table 1). Verify various current-limit operations by repeating step 6.

CAUTION: The negative input test should be performed by applying negative input voltage (VIN) across input terminals at J2 only when the output capacitors connected at the OUT terminals are fully discharged and 5V BUS at J1 is not supplied.

<!-- image -->

## MAX17613CEVKIT# Evaluation Kit

## Detailed Description

The overcurrent threshold is determined by external resistors connected to the SETI pin and is jumper-configurable through jumper JU1. Using jumper JU4, the EV kit circuit can be configured to evaluate Autoretry, Continuous, and Latchoff current-limit types. LED1 on the EV kit indicates availability of logic power for annunciation signals ( FWD and REV ) and EN. Device offers a programmable startup blanking time that enables charging the large capacitances on the output during startup and when recovering from a fault condition. Connecting a capacitor from the TSTART pin to GND programs the startup blanking time. The EV kit can be configured to enable or disable the IC operation using Jumper JU5. For more details about the IC benefits and features, refer to the MAX17613 IC data sheet.

The EV kit provides on-board output capacitors to enable a demonstration of the MAX17613C protection features.

## Input Power Supply

The  EV  kit  is  powered  by  a  user-supplied  4.5V  to  60V power  supply  connected  between  input  connector  (J2) terminals.

## Setting the Current-Limit Threshold

The EV kit features a jumper (JU1) to select the currentlimit  threshold.  Install  a  jumper  as  shown  in  Table  1  to change the current-limit threshold. The current limit can be programmed between 0.15A to 3A. The current limit (I LIM ) is programmed by the resistor R SETI  connected at the SETI pin. Use the following equation to calculate the current-limit setting resistor:

<!-- formula-not-decoded -->

where,

I LIM  is the desired current limit in mA and R SETI is in kΩ. Do not use R SETI smaller than 1.5kΩ.

## Current-Limit Type Selection

The  EV  kit  features  a  jumper  (JU4)  to  select  different current-limit type responses (see Table 2) for jumper settings. For more details about each current-limit type, refer to the MAX17613 IC data sheet.

## Evaluates: MAX17613C - 4.5V to 60V, 3A, Reverse-Voltage Protector with Forward Current Limit

## Enable

Connect  a  USB-A  male  connector  from  the  computer to  the  USB-B  female  connector,  J1,  or  an  external  5V supply to TP3 and GND. This provides 5V to V BUS  and to  the  EN  pin  (JU5  connects  V BUS   to  EN  by  default). Choose the JU5 setting to enable or disable operation of the MAX17613C (see Table 3). Driving the EN pin High or Low makes the device enable or disable respectively.

## Table 1. Current-Limit Threshold (JU1) Settings

| SHUNT POSITION   | CURRENT-LIMIT THRESHOLD           |
|------------------|-----------------------------------|
| 1-2              | Adjustable using the resistor pot |
| 3-4*             | 0.3A                              |
| 5-6              | 1.5A                              |
| 7-8              | 3A                                |

*Default Position

## Table 2. Current-Limit Type Selection (JU4)

| SHUNT POSITION   | CURRENT-LIMIT TYPE   |
|------------------|----------------------|
| 1-2              | Latchoff             |
| 2-3              | Continuous           |
| Not Installed*   | Autoretry            |

*Default Position

## Table 3. Enable (JU5) Settings

| SHUNT POSITION   | DESCRIPTION           | MAX17613C OUTPUT   |
|------------------|-----------------------|--------------------|
| 1-2*             | EN Connected to V BUS | ON                 |
| Not Installed    | EN pin Unconnected    | ON                 |
| 2-3              | EN Connected to GND   | OFF                |

*Default Position

## MAX17613CEVKIT# Evaluation Kit

## Startup Blanking Time Programming (TSTART)

Connecting  a  capacitor  from  the  TSTART  pin  to  GND programs the startup blanking time. The below equation ensures proper value of C TSTART  when connected at the TSTART pin for successful startup of the board especially when OUT is connected to a large capacitance.

<!-- formula-not-decoded -->

## Table 4. Output Jumper (JU6) Settings

| SHUNT POSITION   | DESCRIPTION                     |
|------------------|---------------------------------|
| Installed*       | OUT is connected to TP8 and J3  |
| Not Installed    | OUT is not connected TP8 and J3 |

*Default Position

## Table 5. Output Load Capacitor (JU7) Settings

| SHUNT POSITION   | DESCRIPTION                       |
|------------------|-----------------------------------|
| Installed        | OUT is connected to C4 and C7     |
| Not Installed*   | OUT is not connected to C4 and C7 |

*Default Position

## Evaluates: MAX17613C - 4.5V to 60V, 3A, Reverse-Voltage Protector with Forward Current Limit

The startup time (t TSTART ) is related to the startup capacitor by the following equation:

<!-- formula-not-decoded -->

where,

CTSTART = TSTART pin capacitance in nF,

COUT(MAX) = Maximum output capacitance in μF,

VIN(MAX)  = Maximum input voltage in V,

I LIM  = Programmed current limit in mA.

t TSTART = Startup blanking-time in μs.

## Output-Load Capacitor

Use JU6 to connect the OUT pins to the OUT test point (TP8) and output connector J3 (see Table 4). Use jumper JU7 to connect output to 470µF capacitor (see Table 5).

│

## MAX17613CEVKIT# Evaluation Kit

## MAX17613C EV Kit Performance Report

(C IN  = 0.47µF, C OUT  = 4.7µF, V IN  = 24V, T A  = +25°C, Autoretry mode unless otherwise noted.)

<!-- image -->

<!-- image -->

CONDITIONS: COUT = 470µF, I LIMIT = 0.3A, AUTORETRY MODE

<!-- image -->

<!-- image -->

CONDITIONS: I LIMIT = 3A, AUTORETRY MODE

<!-- image -->

<!-- image -->

CONDITIONS: VIN = 24V, I LIMIT = 1.5A, SHORT ON OUT WITH CONTROLLED  OUT CURRENT SLEW RATE

<!-- image -->

## Evaluates: MAX17613C - 4.5V to 60V, 3A, Reverse-Voltage Protector with Forward Current Limit

│

## MAX17613CEVKIT# Evaluation Kit

## MAX17613C EV Kit Performance Report (continued)

(C IN  = 0.47µF, C OUT  = 4.7µF, V IN  = 24V, T A  = +25°C, Autoretry mode unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

CONDITIONS:  VIN  = 24V, I LIMIT = 0.3A, LATCHOFF MODE

CONDITIONS: VIN = 24V, I LIMIT = 0.3A, AUTORETRY MODE

<!-- image -->

<!-- image -->

CONDITIONS: VIN  = 24V, I LIMIT = 0.3A, LATCHOFF MODE

<!-- image -->

│

## MAX17613CEVKIT# Evaluation Kit

## Component Suppliers

| SUPPLIER            | WEBSITE             |
|---------------------|---------------------|
| Bourns, Inc         | www.bourns.com      |
| Murata Americas     | www.murata.com      |
| Panasonic Corp.     | www.panasonic.com   |
| Little fuse         | www.littelfuse.com  |
| TE connectivity     | www.te.com          |
| SULLINS             | www.sullinscorp.com |
| LUMEX               | www.lumex.com       |
| KEYSTONE            | www.keyelco.com     |
| Amphenol            | www.amphenol.com    |
| DIODES INCORPORATED | www.diodes.com      |

Note:

Indicate that you are using the MAX17613C when contacting these component suppliers.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17613CEVKIT# | EV Kit |

Evaluates: MAX17613C - 4.5V to 60V, 3A, Reverse-Voltage Protector with Forward Current Limit

│

## MAX17613CEVKIT# EV Kit Bill of Materials

|   S.No | Designator                   | Description                                                            |   Quantity | Manufacturer Part Number        |
|--------|------------------------------|------------------------------------------------------------------------|------------|---------------------------------|
|      1 | C1                           | 1µF, SMT Capacitor-X7R/25V (0603)                                      |          1 | Murata GRM188R71E105KA12        |
|      2 | C2                           | 1µF, SMT Capacitor-X7R/100V (1206)                                     |          1 | Murata GRM31CR72A105KA01        |
|      3 | C3                           | 4.7µF, SMT Capacitor-X7R/50V (1206)                                    |          1 | Murata GRJ31CR71H475KE11L       |
|      4 | C7                           | 470µF, PTH Aluminum Capacitor-63V                                      |          1 | Panasonic EEUFR1J471B           |
|      5 | D1                           | 40V,600W, TVS Diode (DO-214AA)                                         |          1 | Littlefuse SMBJ40CA             |
|      6 | D2                           | 60V, 5A, Diode (DO-214AB)                                              |          1 | DIODES INCORPORATED B560CQ-13-F |
|      7 | D3                           | Power Schottky Diode, 60V, 1A (SMA)                                    |          1 | DIODES INCORPORATED B160-13-f   |
|      8 | LED1                         | 2.2V, 20mA, LED (1206)                                                 |          1 | Lumex SML-LX1206GC-TR           |
|      9 | R1                           | 1kΩ, SMT Resistor 1% 100PPM (0805)                                     |          1 |                                 |
|     10 | R2, R3                       | 10kΩ, SMT Resistor 1% 100PPM (0402)                                    |          2 |                                 |
|     11 | R4                           | 150kΩ, SMT Resistor 1% 100PPM (0402)                                   |          1 |                                 |
|     12 | R5, R13                      | 4.99kΩ, SMT Resistor 1% 100PPM (0402)                                  |          2 |                                 |
|     13 | R6                           | 15kΩ, SMT Resistor 1% 100PPM (0402)                                    |          1 |                                 |
|     14 | R7                           | 3kΩ, SMT Resistor 1% 100PPM (0402)                                     |          1 |                                 |
|     15 | R8                           | 1.5kΩ, SMT Resistor 1% 100PPM (0402)                                   |          1 |                                 |
|     16 | R14                          | 20kΩ, SMT Resistor 1% 100PPM (0402)                                    |          1 |                                 |
|     17 | R15                          | 1.5kΩ, SMT Resistor 1% 100PPM (0402)                                   |          1 |                                 |
|     18 | R16                          | 50kΩ, 0.5W, Trimmer Potentiometers 10% , 100PPM                        |          1 | BOURNS 3296W-503LF-ND           |
|     19 | U1                           | 4.5V to 60V, 3A, Reverse-Voltage protector with Forward Current- Limit |          1 | MAXIM MAX17613CATP+T            |
|     20 | TP1, TP2, TP4, TP5, TP7, TP9 | Black Test Point                                                       |          6 | KEYSTONE 5001                   |
|     21 | TP3, TP6, TP8                | Red Test Point                                                         |          3 | KEYSTONE 5000                   |
|     22 | SU1, SU3-SU7                 | Shunt Connector, Black Closed Top                                      |          6 | SULLINS STC02SYAN               |
|     23 | J1                           | USB B connector                                                        |          1 | Amphenol 61729-0010BLF          |
|     24 | J2, J3                       | 2-Pin Green PC Terminal Block                                          |          2 | TE Connectivity 282837-2        |
|     25 | JU1                          | 2x4 Dual-Row Header                                                    |          1 | SULLINS PBC04DAAN               |
|     26 | JU3, JU6, JU7                | 2-Pin Single-Row Header                                                |          3 | SULLINS PEC02SAAN               |
|     27 | JU4, JU5                     | 3-Pin Single-Row Header                                                |          2 | SULLINS PEC03SAAN               |
|     28 | C6                           | OPEN, SMT Capacitor (0603)                                             |          0 |                                 |
|     29 | C4                           | OPEN, Capacitor, 470µF, 12.5mm Dia (PTH)                               |          0 |                                 |
|     30 | D4                           | OPEN, 40V,600W, TVS Diode (DO-214AA)                                   |          0 |                                 |

| Default Jumper Table   | Default Jumper Table   |
|------------------------|------------------------|
| Jumper                 | Shunt Position         |
| JU1                    | 3-4 short              |
| JU3                    | Open                   |
| JU4                    | Open                   |
| JU5                    | 1-2 short              |
| JU6                    | Short                  |
| JU7                    | Open                   |

Evaluates: MAX17613C - 4.5V to 60V,

3A, Reverse-Voltage Protector with

Forward Current Limit

│

## MAX17613CEVKIT# Evaluation Kit

## MAX17613CEVKIT# EV Kit Schematic

<!-- image -->

Evaluates: MAX17613C - 4.5V to 60V,

3A, Reverse-Voltage Protector with

Forward Current Limit

## MAX17613CEVKIT# Evaluation Kit

## MAX17613CEVKIT# EV Kit PCB Layout

MAX17613CEVKIT# EV Kit -Top Silkscreen

<!-- image -->

Evaluates: MAX17613C - 4.5V to 60V, 3A, Reverse-Voltage Protector with Forward Current Limit

MAX17613CEVKIT# EV Kit -Top Layer

<!-- image -->

MAX17613CEVKIT# EV Kit -Layer 2

<!-- image -->

│

## MAX17613CEVKIT# Evaluation Kit

Evaluates: MAX17613C - 4.5V to 60V, 3A, Reverse-Voltage Protector with Forward Current Limit

## MAX17613CEVKIT# EV Kit PCB Layout (continued)

MAX17613CEVKIT# EV Kit -Layer 3

<!-- image -->

MAX17613CEVKIT# EV Kit -Bottom Layer

<!-- image -->

│

## MAX17613CEVKIT# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implieG. Maxim ,ntegrateG reserYes the right to change the circuitr\ anG speci¿cations Zithout notice at an\ time.

│

Evaluates: MAX17613C - 4.5V to 60V, 3A, Reverse-Voltage Protector with Forward Current Limit