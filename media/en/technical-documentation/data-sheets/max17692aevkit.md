<!-- lastmod 2022-08-02 -->
## MA17692AEVKIT# Evaluation Kit

## General Description

The MAX17692AEVKIT# evaluation kit (EV kit) provides a  proven  design  to  evaluate  the  performance  of  the MAX17692A IC. This fully assembled and tested circuit is implemented using the MAX17692A, the No-Opto flyback converter with an integrated 76V nMOSFET available in a 12-pin TDFN package with an exposed pad. The IC data sheet  provides  a  complete  description  of  the  part  and should be read in conjunction with this EV kit data sheet prior to operating the EV kit.

The MAX17692AEVKIT# EV kit output is configured for an isolated +5V and provides up to 0.65A of output current over an 18V to 36V input range. The device switches at a 145kHz switching frequency. The EV kit regulates the output voltage within ±5% over line, load, and temperature  by  sensing  the  output  voltage  on  the  primary-side. The converter does not need an optocoupler for the isolated output voltage sensing.

## Features

- 18V to 36V Input Range
- Isolated Output: 5V/0.65A DC
- Compact Design with High Switching Frequency (145kHz)
- 87% Peak Efficiency
- Resistor Programmable Input Enable/UVLO Protection
- Resistor Programmable Input Overvoltage Protection
- Internal Loop Compensation Reduces Need for External Components
- 15ms Soft-Start Time
- Temperature Compensated Output Voltage Over -40°C to +125°C Operating Temperature
- Provision to External Clock Synchronization and Frequency Dithering
- VCC Overdrive to Improve Efficiency
- Minimum Number of External Components
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Evaluates: MAX17692A 5V Output-Voltage Application

## Quick Start

## Recommended Equipment

- MAX17692AEVKIT#
- One 18V to 36V DC, 0.65A power supply
- 3.25W resistive load with 0.65A sink capacity
- Four digital multimeters (DMM)

## Warning:

- Do not turn on the power supply until all connections are completed.
- Do not touch any part of the circuit with bare hands or conductive materials when powered up.
- Make sure all high-voltage capacitors are fully discharged before handling. Allow 5 minutes after disconnecting the input power source before touching circuit parts.

## Equipment Setup and Procedure

- 1) Set the power supply to +24V DC. Disable the power supply output.
- 2) Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad. Connect the positive terminal of the electronic load to the VOUT PCB pad and the negative terminal to the nearest GND0 PCB pad.
- 3) Connect a DMM configured in voltmeter mode across the VOUT PCB pad and the nearest GND0 PCB pad.
- 4) Verify that shunt is installed across pins 1-2 on jumper JU1 for proper operation. See Table 1 for details.
- 5) Verify that shunts are not installed for pins 1-2 on both jumpers JU2 and JU3. See Table 2 and Table 3 for details.
- 6) Enable the power supply.
- 7) Verify that the output voltmeter displays 5V and, if required, measure the output current using a DMM in Ammeter mode.
- 8) If required, vary the input voltage from 18V to 36V and the load current from 1mA to 0.65A, and verify that output voltage is 5V.

<!-- image -->

## MA17692AEVKIT# Evaluation Kit

## Detailed Description

The MAX17692AEVKIT# EV kit provides a proven design to  evaluate  the  MAX17692A  high-efficiency  DC-DC  flyback converter. The device uses a novel sampling technique to eliminate the optocoupler in sensing and regu-

## Evaluates: MAX17692A 5V Output-Voltage Application

lating  the  isolated  output  voltage. The  device  integrates a  76V  nMOSFET  and  reduces  the  external  component count. The transformer design, as well as the selection of different components, are detailed in the MAX17692A IC data sheet . All passive components selected for this EV kit are available from multiple component vendors.

## Table 1. Converter SYNC Jumper (JU1) Settings

| SHUNT POSITION   | SYNC/DITHER PIN                                                                                                   | MAX17692A OPERATION                                   |
|------------------|-------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| 1-2*             | Connected to GND                                                                                                  | SYNC/DITHER function disabled                         |
| Not installed    | Need to connect JU1 to external clock for external synchronization or implement dithering on the SYNC/ DITHER pin | External clock synchronization or frequency dithering |

## Table 2. Converter EN/UVLO Jumper (JU2) Settings

| SHUNT POSITION   | EN/UVLO PIN                                                 | MAX17692A OUTPUT                                              |
|------------------|-------------------------------------------------------------|---------------------------------------------------------------|
| 1-2              | Connected to VIN                                            | Enabled                                                       |
| Not installed*   | Connected to the center node of resistor dividers R2 and R3 | UVLO level is set by the resistor divider between VIN and GND |

## Table 3. Converter OVI Jumper (JU3) Settings

| SHUNT POSITION   | OVI PIN                                                      | MAX17692A OUTPUT                                             |
|------------------|--------------------------------------------------------------|--------------------------------------------------------------|
| 1-2              | Connected to GND                                             | Enabled                                                      |
| Not installed*   | Connected to the center node of resistor dividers R3 and R10 | OVI level is set by the resistor divider between VIN and GND |

## Component Suppliers

| SUPPLIER         | WEBSITE           |
|------------------|-------------------|
| Sumida Corp      | www.sumida.com    |
| Coilcraft Inc    | www.coilcraft.com |
| Murata Americas  | www.murata.com    |
| Wurth Electronik | www.we-online.com |
| Vishay Dale      | www.vishay.com    |

Note: Indicate that you are using the MAX17692AEVKIT# when contacting these component suppliers.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17692AEVKIT# | EV Kit |

│

## MA17692AEVKIT# Evaluation Kit

## EV Kit Performance Report

(VIN = 24V, unless otherwise noted.)

<!-- image -->

<!-- image -->

## Evaluates: MAX17692A 5V Output-Voltage Application

<!-- image -->

<!-- image -->

MAX17692A, LOAD TRANSIENT RESPONSE LOAD CURRENT STEPPED FROM 0.325A TO 0.65A toc05

<!-- image -->

│

## MA17692AEVKIT# Evaluation Kit

## MAX17692AEVKIT# Bill of Materials

|   ITEM | Part Reference   |   QTY | Specification                                                     | Part Number             |
|--------|------------------|-------|-------------------------------------------------------------------|-------------------------|
|      1 | C1               |     1 | 47μF ±20% ,50V;Aluminium capacitor                                | EEE-FT1H470AV           |
|      2 | C4               |     1 | 2.2μF ±10%, 16V, X7R ceramic capacitor (0603)                     | GRM188Z71C225KE43       |
|      3 | C5, C14          |     2 | 150pF ±5%, 100V, COG ceramic capacitor (0402)                     | C1005C0G2A151J050BA     |
|      4 | C6               |     1 | 0.068μF ±10%, 16V, X7R ceramic capacitor (0402)                   | GCM155R71C683KA55       |
|      5 | C10              |     1 | 100μF ±20%, 6.3V, X7S ceramic capacitor (1210)                    | JMK325AC7107MM-P        |
|      6 | C13              |     1 | 1000pF ±10%, 3000V, X7R ceramic capacitor (1812)                  | HV1812Y102KXHATHV       |
|      7 | C15              |     1 | 0.1μF ±10%, 50V, X7R ceramic capacitor (0402)                     | GRM155R71H104KE14       |
|      8 | C16              |     1 | 0.1μF ±10%, 16V, X7R ceramic capacitor (0402)                     | GRM155R71C104KA88       |
|      9 | C20              |     1 | 4.7μF ±10%, 50V, X7R ceramic capacitor (0805)                     | GRM21BZ71H475KE15       |
|     10 | C21              |     1 | 0.1μF ±10%, 100V, X7R ceramic capacitor (0603)                    | GRM188R72A104KA35       |
|     11 | C23              |     1 | 0.1μF ±10%, 25V, X7R ceramic capacitor (0603)                     | GRM188R71E104KA01       |
|     12 | D1               |     1 | Zener, 30V, 0.25W                                                 | CMDZ5252B               |
|     13 | D2               |     1 | Schottky diode, 40V,3A                                            | SBR3U40P1               |
|     14 | D3               |     1 | Zener, 5.6V, 500mW                                                | CMZ5919B                |
|     15 | D4               |     1 | Schottky diode, 100V,0.25A                                        | BAT46WJ                 |
|     16 | D5               |     1 | Schottky diode, 100V,1A                                           | DFLS1100-7              |
|     17 | R2               |     1 | 280kΩ, 1%, 0402                                                   | ERJ-2RKF2803            |
|     18 | R3               |     1 | 11.8kΩ, 1%, 0402                                                  | ERJ-2RKF1182            |
|     19 | R4               |     1 | 165kΩ, 1%, 0603                                                   | CRCW0603165KFK          |
|     20 | R5, R10          |     2 | 10kΩ, 1%, 0402                                                    | CRCW040210K0FK          |
|     21 | R6               |     1 | 178kΩ, 1%, 0402                                                   | CR0402-FX-1783GLF       |
|     22 | R8               |     1 | 4.7Ω, 1%, 0402                                                    | CRCW04024R70FK          |
|     23 | R9               |     1 | 68.1kΩ, 1%, 0402                                                  | CRCW040268K1FK          |
|     24 | R17              |     1 | 49.9Ω, 1%, 0603                                                   | CRCW060349R9FK          |
|     25 | T1               |     1 | EP7,8-pin SMT, 55µH ±10% ,1.1A,(1-2):(5,6-7,8):(3-4)= 3:1:1.5,±1% | 10348-T080 or 750319211 |
|     26 | U1               |     1 | 4.2V-60V No-Opto Isolated Flyback Converter with Integrated FET   | MAX17692AATC+           |
|     27 | C2, C17-C19      |     0 | OPEN: Capacitor (1210)                                            | NA                      |
|     28 | L1               |     0 | OPEN: Inductor (4mm x 4mm)                                        | NA                      |
|     29 | C3, C9, C12, C22 |     0 | OPEN: Capacitor (0402)                                            | NA                      |
|     30 | C11              |     0 | OPEN: Capacitor (1210)                                            | NA                      |
|     31 | R1               |     0 | OPEN: Resistor (0402)                                             | NA                      |
|     32 | R11              |     0 | OPEN: Resistor (0603)                                             | NA                      |
|     33 | R13              |     0 | OPEN: Resistor (0805)                                             | NA                      |
|     34 | FB1              |     0 | OPEN: Ferrite Bead (0805)                                         | NA                      |

## Evaluates: MAX17692A 5V Output-Voltage Application

## MAX17692AEVKIT# Schematic

<!-- image -->

## MA17692AEVKIT# Evaluation Kit

## MAX17692AEVKIT# PCB Layout Diagrams

<!-- image -->

MAX17692AEVKIT# Layout-Top Silkscreen

<!-- image -->

MAX17692AEVKIT# Layout-Layer 2

MAX17692AEVKIT# Layout-Top Layer

<!-- image -->

MAX17692AEVKIT# Layout-Layer 3

<!-- image -->

│

## MAX17692AEVKIT# PCB Layout Diagrams (continued)

MAX17692AEVKIT# Layout-Bottom Layer

<!-- image -->

MAX17692AEVKIT# Layout-Bottom Silkscreen

<!-- image -->

│

## MA17692AEVKIT# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION              | PAGES CHANGED   |
|-------------------|-----------------|--------------------------|-----------------|
|                 0 | 12/20           | Release for Market Intro | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied  Ma[im Integrated reserves the right to change the circuitry and specifications Zithout notice at any time

│

Evaluates: MAX17692A

5V Output-Voltage Application