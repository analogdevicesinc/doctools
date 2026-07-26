<!-- lastmod 2022-08-03 -->
## MAX17613AEVKIT# Evaluation Kit

## General Description

The MAX17613AEVKIT# evaluation kit (EV kit) is a fully assembled  and  tested  circuit  board  that  demonstrates the  MAX17613A  4.5V  to  60V,  3A,  overvoltage  (OV), undervoltage  (UV)  protector  with  forward  current  limit and reverse current block in a 20-pin TQFN-EP package. The  EV  kit  can  be  configured  to  demonstrate  adjustable  overvoltage,  undervoltage,  three  current-limit  types (Autoretry, Continuous, and Latchoff) with different currentlimit thresholds (from 0.15A to 3A). For more details about the  IC  benefits  and  features,  refer  to  the  MAX17613  IC data sheet.

## Features

- 4.5V to 40V Operating Voltage Range (Remove the TVS Diode to Extend the Operating Voltage  Range up to 60V)
- Features a 40V TVS Diode (D1) across the Input and Schottky Diode across the Output Terminals
- Evaluates Undervoltage-Lockout (UVLO), Overvoltage-Lockout (OVLO), Three Current Limit Types, and Current-Limit Threshold
- UVLO Programmed to 4.5V
- OVLO Programmed to 36V
- Jumper-Configurable Current Limit
- Jumper-Configurable Current Limit Type
- Programmable Startup Blanking Time
- Features Fault Indication Signals ( UVOV , FLAG )
- Proven PCB Layout
- Fully Assembled and Tested

Evaluates: MAX17613A - 4.5V to 60V, 3A Current-Limiter with OV, UV and Reverse Protection

## Quick Start

## Recommended Equipment

- MAX17613AEVKIT#
- 60V, 5A DC power supply
- 4 Multimeters
- Adjustable load (0A to 3.5A)
- USB-A male to USB-B male cable or 5V DC power supply

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

Caution: Do  not  turn  on  power  supply  until  all  connections are complete.

- 1)  Verify that all jumpers are in their default positions.
- 2)  Connect the USB cable to J1 from a computer or connect a 5V DC power supply to TP3.
- 3)  Verify that LED1 is on.
- 4)  Verify the JU6 jumper is installed.
- 5)  Set the 60V DC power supply to 5V and connect to IN (J2). Verify that OUT (J3/TP8) is 5V.

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX17613AEVKIT# Evaluation Kit

- 6)  Gradually  increase  the  DC  power-supply  voltage  to observe that the device enters lockout mode by verifying the OUT voltage (TP8) begins drooping and fault signal UVOV (TP4)  goes  low  (to  approximately  0V) when input reaches approximately 36V.
- 7)  Gradually  decrease  the  DC  power-supply  voltage  to observe that the device exits lockout mode by verifying  the  OUT voltage (TP8) is recovered close to the input  voltage  level  and  the  fault  signal UVOV (TP4) goes high (approximately 5V) when the input voltage reaches approximately 34.8V.
- 8)  Set the DC power-supply voltage to 24V and connect the adjustable load between OUT and GND terminals and  a  multimeter  in  series  to  measure  the  current. Gradually increase the load current and verify that the OUT goes down and FLAG goes low when the load current increases above 0.3A.
- 9) The jumper JU1 can be configured to change the current limit as shown in Table 1. Verify various currentlimit operations by repeating step 8.

CAUTION: The negative input test should be performed by applying negative input voltage (VIN) across input terminals at J2 only when the output capacitors connected at the OUT terminals are fully discharged and 5V BUS at J1 is not supplied.

## Detailed Description

The  EV  kit  circuit  can  be  configured  to  evaluate  userdefined UVLO and OVLO thresholds using resistor-dividers. The overcurrent threshold is determined by external resistors  connected  to  the  SETI  pin  and  is  configurable through jumper JU1. Using jumper JU4, the EV kit circuit can be configured to evaluate Autoretry, Continuous, and Latchoff current limit types. LED1 on the EV kit indicates availability of logic power for annunciation signals ( UVOV and FLAG ) and EN. Device offers a programmable startup blanking time that enables charging of large capacitances on the output during startup and when recovering from a fault condition. Connecting a capacitor from the TSTART pin to GND programs the startup blanking time. The EV kit can be configured to enable or disable the IC operation using Jumper JU5. The EV kit provides on-board output capacitors to enable a demonstration of the MAX17613A protection features. For more details about the IC benefits and features, refer to the MAX17613 IC data sheet.

## Evaluates: MAX17613A - 4.5V to 60V, 3A Current-Limiter with OV, UV and Reverse Protection

## Input Power Supply

The  EV  kit  is  powered  by  a  user-supplied  4.5V  to  60V power  supply  connected  between  input  connector  (J2) terminals.

## Setting the Current-Limit Threshold

The EV kit features a jumper (JU1) to select the currentlimit  threshold.  Install  a  jumper  as  shown  in  Table  1  to change the current-limit threshold. The current limit can be programmed between 0.15A to 3A. The current limit (I LIM ) is programmed by the resistor R SETI  connected at the SETI pin. Use the following equation to calculate the current-limit setting resistor:

<!-- formula-not-decoded -->

where, I LIM  is the desired current limit in mA and R SETI is in kΩ.

Do not use R SETI smaller than 1.5kΩ.

## Current-Limit Type Selection

The EV kit features a jumper (JU4) to select different current limit type responses (see Table 2). For more details about each current limit type, refer to the MAX17613 IC data sheet.

## Table 1. Current-Limit Threshold Jumper (JU1) Settings

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

## MAX17613AEVKIT# Evaluation Kit

## Enable

Connect a USB-A male connector from the computer to the USB-B female connector, J1, or an external 5V supply to TP3 and GND. This provides 5V to V BUS  and to the EN pin (JU5 connects V BUS  to EN by default). Choose the  (JU5)  setting  to  enable  or  disable  operation  of  the MAX17613A (see Table 3). Driving the EN pin high or low makes the device enable or disable, respectively.

## Undervoltage-Lockout / Overvoltage-Lockout (UVLO/OVLO) Programming

The UVLO threshold for input voltage is set through the R11, R12 resistive divider. Use the following equation to calculate  the  value  of  R12  for  a  required  undervoltage threshold level:

<!-- formula-not-decoded -->

where,

R11 = Can be chosen as 2.2MΩ

VREF = 1.5V (typ)

VUVLO = Required undervoltage protection threshold

The OVLO threshold for input voltage is set through the R9, R10 resistive  divider.  Use  the  following  equation  to calculate  the  value  of  R10  for  a  required  overvoltage threshold level:

<!-- formula-not-decoded -->

where,

R9 is chosen between 450kΩ and 500kΩ

VREF = 1.5V (typ)

VOVLO = Required overvoltage protection threshold

## Evaluates: MAX17613A - 4.5V to 60V, 3A Current-Limiter with OV, UV and Reverse Protection

## Startup Blanking Time Programming (TSTART)

Connecting  a  capacitor  from  the  TSTART  pin  to  GND programs the startup blanking time. The below equation ensures proper value of C TSTART  when connected at the TSTART pin for successful startup of the board especially when OUT is connected to a large capacitance.

<!-- formula-not-decoded -->

The startup time (t TSTART ) is related to the startup capacitor by the following equation:

<!-- formula-not-decoded -->

where,

CTSTART = TSTART pin capacitance in nF

COUT(MAX) = Maximum output capacitance in μF

VIN(MAX)  = Maximum input voltage in V

I LIM  = Programmed current limit in mA

t TSTART = Startup blanking time in μs

## Output-Load Capacitor

Use JU6 to connect the OUT pins to the OUT test point (TP8) and output connector J3 (see Table 4). Use jumper JU7 to connect output to 470µF capacitor (see Table 5).

## Table 3. Enable Jumper (JU5) Settings

| SHUNT POSITION   | DESCRIPTION           | MAX17613A OUTPUT   |
|------------------|-----------------------|--------------------|
| 1-2*             | EN Connected to V BUS | ON                 |
| Not Installed    | EN pin Unconnected    | ON                 |
| 2-3              | EN Connected to GND   | OFF                |

*Default Position

│

## MAX17613AEVKIT# Evaluation Kit

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

## MAX17613AEVKIT# EV Kit Performance Report

(C IN = 0.47μF, C OUT = 4.7μF, V IN  = 24V, T A  = +25°C. Autoretry mode, unless otherwise noted.)

<!-- image -->

│

CONDITIONS: COUT = 470µF, I LIMIT

Evaluates: MAX17613A - 4.5V to 60V, 3A Current-Limiter with OV, UV and Reverse Protection

CONDITIONS: I LIMIT

## MAX17613AEVKIT# Evaluation Kit

## MAX17613AEVKIT# EV Kit Performance Report (continued)

(C IN = 0.47μF, C OUT = 4.7μF, V IN  = 24V, T A  = +25°C. Autoretry mode, unless otherwise noted.)

CONDITIONS: I LIMIT = 1.5A, AUTORETRY MODE

<!-- image -->

<!-- image -->

CONDITIONS: VIN = 24V, I LIMIT = 1.5A, SHORT ON OUT WITH CONTROLLED  OUT CURRENT SLEW RATE

<!-- image -->

<!-- image -->

<!-- image -->

CONDITIONS: I LIMIT = 3A, AUTORETRY MODE, RLOAD = 80 Ω

<!-- image -->

<!-- image -->

│

## MAX17613AEVKIT# Evaluation Kit

## MAX17613AEVKIT# EV Kit Performance Report (continued)

(C IN = 0.47μF, C OUT = 4.7μF, V IN  = 24V, T A  = +25°C. Autoretry mode, unless otherwise noted.)

<!-- image -->

CONDITIONS: VIN = 24V, I LIMIT = 0.3A, AUTORETRY MODE

<!-- image -->

CONDITIONS:  VIN = 24V, I LIMIT = 0.3A, LATCHOFF MODE

CONDITIONS: VIN = 24V, I LIMIT = 0.3A, AUTORETRY MODE

<!-- image -->

CONDITIONS: VIN  = 24V, I LIMIT = 0.3A, LATCHOFF MODE

<!-- image -->

│

## MAX17613AEVKIT# Evaluation Kit

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

Indicate that you are using the MAX17613A when contacting these component suppliers.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17613AEVKIT# | EV Kit |

Evaluates: MAX17613A - 4.5V to 60V, 3A Current-Limiter with OV, UV and Reverse Protection

│

## MAX17613AEVKIT# Evaluation Kit

## MAX17613AEVKIT# EV Kit Bill of Materials

|   S.No | Designator                   | Description                                                        |   Quantity | Manufacturer Part Number        |
|--------|------------------------------|--------------------------------------------------------------------|------------|---------------------------------|
|      1 | C1                           | 1µF, SMT Capacitor-X7R/25V (0603)                                  |          1 | Murata GRM188R71E105KA12        |
|      2 | C2                           | 1µF, SMT Capacitor-X7R/100V (1206)                                 |          1 | Murata GRM31CR72A105KA01        |
|      3 | C3                           | 4.7µF, SMT Capacitor-X7R/50V (1206)                                |          1 | Murata GRJ31CR71H475KE11L       |
|      4 | C7                           | 470µF, PTH Aluminum Capacitor-63V                                  |          1 | Panasonic EEUFR1J471B           |
|      5 | D1                           | 40V,600W, TVS Diode (DO-214AA)                                     |          1 | Littlefuse SMBJ40CA             |
|      6 | D2                           | 60V, 5A, Diode (DO-214AB)                                          |          1 | DIODES INCORPORATED B560CQ-13-F |
|      7 | D3                           | Power Schottky Diode, 60V, 1A (SMA)                                |          1 | DIODES INCORPORATED B160-13-f   |
|      8 | LED1                         | 2.2V, 20mA, LED (1206)                                             |          1 | Lumex SML-LX1206GC-TR           |
|      9 | R1                           | 1kΩ, SMT Resistor 1% 100PPM (0805)                                 |          1 |                                 |
|     10 | R2, R3                       | 10kΩ, SMT Resistor 1% 100PPM (0402)                                |          2 |                                 |
|     11 | R4                           | 150kΩ, SMT Resistor 1% 100PPM (0402)                               |          1 |                                 |
|     12 | R5, R13                      | 4.99kΩ, SMT Resistor 1% 100PPM (0402)                              |          2 |                                 |
|     13 | R6                           | 15kΩ, SMT Resistor 1% 100PPM (0402)                                |          1 |                                 |
|     14 | R7                           | 3kΩ, SMT Resistor 1% 100PPM (0402)                                 |          1 |                                 |
|     15 | R8                           | 1.5kΩ, SMT Resistor 1% 100PPM (0402)                               |          1 |                                 |
|     16 | R9                           | 470kΩ, SMT Resistor 1% 100PPM (0603)                               |          1 |                                 |
|     17 | R10                          | 20.5kΩ, SMT Resistor 1% 100PPM (0402)                              |          1 |                                 |
|     18 | R11                          | 2.2MΩ, SMT Resistor 1% 100PPM (0603)                               |          1 |                                 |
|     19 | R12                          | 1.1MΩ, SMT Resistor 1% 100PPM (0402)                               |          1 |                                 |
|     20 | R14                          | 20kΩ, SMT Resistor 1% 100PPM (0402)                                |          1 |                                 |
|     21 | R15                          | 1.5kΩ, SMT Resistor 1% 100PPM (0402)                               |          1 |                                 |
|     22 | R16                          | 50kΩ, 0.5W, Trimmer Potentiometers 10% , 100PPM                    |          1 | BOURNS 3296W-503LF-ND           |
|     23 | U1                           | 4.5V to 60V, 3A Current-Limiter with OV, UV and Reverse Protection |          1 | MAXIM MAX17613AATP+T            |
|     24 | TP1, TP2, TP4, TP5, TP7, TP9 | Black Test Point                                                   |          6 | KEYSTONE 5001                   |
|     25 | TP3, TP6, TP8                | Red Test Point                                                     |          3 | KEYSTONE 5000                   |
|     26 | SU1, SU3-SU7                 | Shunt Connector, Black Closed Top                                  |          6 | SULLINS STC02SYAN               |
|     27 | J1                           | USB B connector                                                    |          1 | Amphenol 61729-0010BLF          |
|     28 | J2, J3                       | 2-Pin Green PC Terminal Block                                      |          2 | TE Connectivity 282837-2        |
|     29 | JU1                          | 2x4 Dual-Row Header                                                |          1 | SULLINS PBC04DAAN               |
|     30 | JU3, JU6, JU7                | 2-Pin Single-Row Header                                            |          3 | SULLINS PEC02SAAN               |
|     31 | JU4, JU5                     | 3-Pin Single-Row Header                                            |          2 | SULLINS PEC03SAAN               |
|     32 | C6                           | OPEN, SMT Capacitor (0603)                                         |          0 |                                 |
|     33 | C4                           | OPEN, Capacitor, 470µF, 12.5mm Dia (PTH)                           |          0 |                                 |
|     34 | D4                           | OPEN, 40V,600W, TVS Diode (DO-214AA)                               |          0 |                                 |

| Default Jumper Table   | Default Jumper Table   |
|------------------------|------------------------|
| Jumper                 | Shunt Position         |
| JU1                    | 3-4 short              |
| JU3                    | Open                   |
| JU4                    | Open                   |
| JU5                    | 1-2 short              |
| JU6                    | short                  |
| JU7                    | Open                   |

## Evaluates: MAX17613A - 4.5V to 60V, 3A Current-Limiter with OV, UV and Reverse Protection

## MAX17613AEVKIT# Evaluation Kit

## MAX17613AEVKIT# EV Kit Schematic

<!-- image -->

## MAX17613AEVKIT# Evaluation Kit

## MAX17613AEVKIT# EV Kit PCB Layout

MAX17613AEVKIT# EV Kit-Top Silkscreen

<!-- image -->

## Evaluates: MAX17613A - 4.5V to 60V, 3A Current-Limiter with OV, UV and Reverse Protection

MAX17613AEVKIT# EV Kit-Top Layer

<!-- image -->

MAX17613AEVKIT# EV Kit-Layer 2

<!-- image -->

│

## MAX17613AEVKIT# Evaluation Kit

## Evaluates: MAX17613A - 4.5V to 60V, 3A Current-Limiter with OV, UV and Reverse Protection

## MAX17613AEVKIT# EV Kit PCB Layout (continued)

MAX17613AEVKIT# EV Kit-Layer 3

<!-- image -->

MAX17613AEVKIT# EV KitBottom Layer

<!-- image -->

│

## MAX17613AEVKIT# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim ,ntegrated reserYes the right to change the circuitr\ and speci¿cations without notice at an\ time.

│

Evaluates: MAX17613A - 4.5V to 60V, 3A Current-Limiter with OV, UV and Reverse Protection