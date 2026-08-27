<!-- lastmod 2022-08-02 -->
## MA17690EVKITJ# Evaluation Kit

## General Description

The MAX17690EVKITJ# evaluation kit (EV kit) is a fully assembled  and  tested  circuit  board  that  demonstrates the  operation  of  an  isolated  25W  No-Opto  Flyback DC-DC  converter.  This  circuit  uses  MAX17690  in  a 16-pin TQFN package with an exposed pad. The IC data sheet  provides  a  complete  description  of  the  part  and should be read in conjunction with this EV kit data sheet prior to operating the EV kit.

The MAX17690EVKITJ# EV kit output is configured for an isolated +12V and provides up to 2.1A of output current over a 40V to 80V input range, suitable for power-overethernet (PoE) applications. The EV kit regulates the output voltage within ±8% over line, load, and temperature without using the auxiliary winding/optocoupler for outputvoltage feedback.

## Features

- 40V to 80V Input Range, Suitable for PoE Applications
- Isolated Output: 12V/2.1A DC
- Compact Design with High Frequency (100kHz) Switching
- 89.9% Full-Load Efficiency
- Minimum Number of External Components
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX17690 in 12V

Output-Voltage Application

## Quick Start

## Recommended Equipment

- MAX17690EVKITJ#
- One 40V to 80V DC, 2A power supply
- 25W resistive load with at least 2.1A sink capacity
- Four digital multimeters (DMM)

## Warning:

- Do not turn on the power supply until all connections are completed.
- Do not touch any part of the circuit with bare hands or conductive materials when powered up.
- Make sure all high-voltage capacitors are fully discharged before handling. Allow 5 minutes after disconnecting the input power source before touching circuit parts.

## Equipment Setup and Procedure

- 1) Set the power supply to +40V DC . Disable the power supply output.
- 2) Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad. Connect the positive terminal of the electronic load to the VOUT PCB pad and the negative terminal to the nearest GND0 PCB pad.
- 3) Connect a DMM configured in voltmeter mode across the VOUT PCB pad and the nearest GND0 PCB pad.
- 4) Enable the power supply.
- 5) Verify that the output voltmeter displays 12V and, if required, measure the output current using a DMM in Ammeter mode.
- 6) If required, vary the input voltage from 40V to 80V, the load current from 35mA to 2.1A, and verify that the output voltage is 12V.

## Detailed Description

The MAX17690EVKITJ# EV kit provides a proven design to evaluate the MAX17690 high-efficiency DC-DC flyback converter. The  device  uses  a  novel  sampling  technique to eliminate the optocoupler in sensing and regulating the isolated output voltage. The transformer design, as well as the selection of different components, are detailed in the MAX17690 IC data sheet .

<!-- image -->

## MA17690EVKITJ# Evaluation Kit

## EV Kit Performance Report

(VIN = 40V, unless otherwise noted.)

<!-- image -->

<!-- image -->

Evaluates: MAX17690 in 12V

## Output-Voltage Application

<!-- image -->

<!-- image -->

│

## Component Supplier

| SUPPLIER            | WEBSITE          |
|---------------------|------------------|
| Sumida Corp         | www.sumida.com   |
| TDK                 | www.tdk.com      |
| Murata Americas     | www.murata.com   |
| Vishay Dale         | www.vishay.com   |
| ON Semiconductor    | www.onsemi.com   |
| Infineon            | www.infineon.com |
| Diodes Incorporated | www.diodes.com   |

Note: Indicate that you are using the MAX17690 EV Kit J when contacting these component suppliers.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17690EVKITJ# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX17690 in 12V

Output-Voltage Application

│

## MA17690EVKITJ# Evaluation Kit

## MAX17690 EV Kit J Bill of Materials

|   ITEM | DESIGNATION      |   QTY | DESCRIPTION                                                  | PART NUMBER         | MANUFACTURER        |
|--------|------------------|-------|--------------------------------------------------------------|---------------------|---------------------|
|      1 | C1               |     1 | 33UF±20%, 100V, aluminum electrolytic capacitor              | EEE-FK2A330P        | PANASONIC           |
|      2 | C2, C3, C20, C21 |     4 | 2.2UF±10%, 100V, X7R, ceramic capacitor(1210)                | GCJ32DR72A225KA01   | MURATA              |
|      3 | C4               |     1 | 0.01UF±10%, 50V, X7R, ceramic capacitor(0402)                | GRM155R71H103KA88   | MURATA              |
|      4 | C5               |     1 | 0.1UF±10%, 100V, X7R, ceramic capacitor(0603)                | GRM188R72A104KA35   | MURATA              |
|      5 | C6               |     1 | 2.2UF ± 10%, 50V, X7R, ceramic capacitor(0805)               | C2012X7R1H225K      | TDK                 |
|      6 | C7               |     1 | 4700PF±10%, 100V, X7R, ceramic capacitor(0805)               | C0805C472K1RAC      | KEMET               |
|      7 | C8               |     1 | 0.047UF±10%, 50V, X7R, ceramic capacitor(0402)               | C1005X7R1H473K      | TDK                 |
|      8 | C9               |     1 | 0.068UF±10%, 16V, X7R, ceramic capacitor(0402)               | GCM155R71C683KA55D  | MURATA              |
|      9 | C10              |     1 | 1UF±10%, 100V, X7R, ceramic capacitor(0805)                  | 08051C105K4Z2A      | AVX                 |
|     10 | C11              |     1 | 1500PF±10%, 25V, X7R, ceramic capacitor(0402)                | C0402C152K3RAC      | KEMET               |
|     11 | C12              |     1 | 470PF±10%, 100V, X7R, ceramic capacitor(0603)                | C0603C471K1RAC      | KEMET               |
|     12 | C13              |     1 | 1000PF±10%, 1500V, X7R, ceramic capacitor(1206)              | 1206SC102KAT        | AVX                 |
|     13 | C14-C17          |     4 | 22UF±20%, 25V, X7R, ceramic capacitor(1210)                  | C3225X7R1E226M250AB | TDK                 |
|     14 | D1               |     1 | 200V/3A, (SMB), diode                                        | MBRS3200T3G         | ON SEMICONDUCTOR    |
|     15 | D2, D3           |     2 | 60V/10A, (TO-277A), diode                                    | V10PM6-M3           | VISHAY              |
|     16 | Q1               |     1 | 150V/13A/38W, (PG-TSDSON8), NCH, POWER TRANSISTOR            | BSZ900N15NS3GATMA1  | INFINEON            |
|     17 | R1               |     1 | 49.9KΩ±1%, 0402                                              | CRCW040249K9FKTD    | VISHAY              |
|     18 | R2               |     1 | 59KΩ± 1%, 0402                                               | CRCW040259K0FK      | VISHAY              |
|     19 | R3               |     1 | 3.3MΩ±1%, 0402                                               | CRCW04023M30FK      | VISHAY              |
|     20 | R4               |     1 | 210KΩ±1%, 0603                                               | CRCW0603210KFK      | VISHAY              |
|     21 | R5               |     1 | 402KΩ±1%, 0603                                               | CRCW0603402KFKEA    | VISHAY              |
|     22 | R6               |     1 | 10KΩ±1%, 0402                                                | CRCW040210K0FKED    | VISHAY              |
|     23 | R7               |     1 | 232KΩ±1%, 0402                                               | CRCW0402232KFKED    | VISHAY              |
|     24 | R8               |     1 | 75KΩ± 1%, 0402                                               | CRCW040275K0FKED    | VISHAY              |
|     25 | R9               |     1 | 15KΩ±1%, 0805                                                | CRCW080515K0FKEAHP  | VISHAY              |
|     26 | R10              |     1 | 150KΩ±1%, 0402                                               | CRCW0402150KFKTD    | VISHAY              |
|     27 | R11, R15         |     2 | 49.9KΩ± 1%, 0402                                             | ERJ-2RKF4992        | PANASONIC           |
|     28 | R12              |     1 | 4.99KΩ±1%, 0402                                              | CRCW04024K99FKEDC   | VISHAY              |
|     29 | R13              |     1 | 392KΩ±1%, 0402                                               | ERJ-2RKF3923        | PANASONIC           |
|     30 | R14              |     1 | 37.4Ω±1%, 1210                                               | ERJ-14NF37R4        | PANASONIC           |
|     31 | R16              |     1 | 0.022Ω±1%, 1206                                              | UCR18EVHFSR022      | ROHMSEMICONDUCTOR   |
|     32 | R17              |     1 | 49.9Ω±1%, 0603                                               | CRCW060349R9FK      | VISHAY              |
|     33 | R20              |     1 | 2.2Ω±1%, 0402                                                | CRCW04022R20FKED    | VISHAY              |
|     34 | T1               |     1 | EP13, 10-pin SMT, 57uH±10%, 3.5A, (1-3):(9-6):(10-7) = 3:1:1 | CEP1311F_13324-T328 | SUMIDA              |
|     35 | U1               |     1 | MAX17690, TQFN16-EP, NO-OPTO ISOLATED FLYBACK CONTORLLER     | MAX17690ATE+        | MAXIM               |
|     36 | U2               |     1 | Shunt Voltage Reference, 36V, 1%, SOT-23                     | TL431AQDBZRQ1       | TEXAS INSTRUMENTS   |
|     37 | Z1               |     1 | 15V/1W, (SMA), zener diode                                   | SMAZ15-13-F         | Diodes Incorporated |
|     38 | C18, C19         |     2 | OPEN, capacitor, 0603                                        | N/A                 | N/A                 |
|     39 | R18, R19         |     2 | OPEN, resistor, 1206                                         | N/A                 | N/A                 |

│

Evaluates: MAX17690 in 12V

Output-Voltage Application

## MA17690EVKITJ# Evaluation Kit

## MAX17690 EV Kit J Schematic

Evaluates: MAX17690 in 12V

Output-Voltage Application

<!-- image -->

│

## MA17690EVKITJ# Evaluation Kit

## MAX17690 EV Kit J PCB Layout Diagrams

<!-- image -->

MAX17690 EV Kit J Layout-Top Silkscreen

MAX17690 EV Kit J Layout- Layer 2

<!-- image -->

MAX17690 EV Kit J Layout- Bottom Layer

<!-- image -->

## Evaluates: MAX17690 in 12V Output-Voltage Application

<!-- image -->

MAX17690 EV Kit J Layout- Top Layer

MAX17690 EV Kit J Layout- Layer 3

<!-- image -->

MAX17690 EV Kit J Layout- Bottom Silkscreen

<!-- image -->

│

## MA17690EVKITJ# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION              | PAGES CHANGED   |
|-------------------|-----------------|--------------------------|-----------------|
|                 0 | 2/21            | Release for Market Intro | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitr\ and specifications without notice at an\ time.

<!-- image -->

│

Evaluates: MAX17690 in 12V

Output-Voltage Application