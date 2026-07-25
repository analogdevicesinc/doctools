<!-- lastmod 2022-08-02 -->
## MAX17693B Evaluation Kit

## General Description

The MAX17693B evaluation kit (EV kit) provides a proven design to  evaluate  the  performance  of  the  MAX17693B IC. This fully assembled and tested circuit is implemented using  the  MAX17693B,  the  No-Opto  Flyback  converter with  an  integrated  76V  nMOSFET, available in a 12-pin TDFN package with an exposed pad. The IC data sheet pro¬vides a complete description of the part and should be read in conjunction with this EV kit data sheet prior to operating the EV kit.

The MAX17693B EV kit output is configured for an iso -lated +5V and provides up to 0.25A of output current over 18V to 36V input-voltage range. The device has a 150kHz switching  frequency.  The  EV  kit  regulates  the  output voltage within ±5% over the line, load, and temperature by  sensing  the  output  voltage  on  the  primary-side.  The converter does not need an opto-coupler for the isolated output-voltage sensing.

## Features

- 18V to 36V Input Range
- Isolated Output: 5V/0.25A DC
- Compact Design with High Frequency (150kHz) Switching
- 88% Peak Efficiency
- Resistor Programmable Input Enable/UVLO Protection
- External Loop Compensation with Design Flexibility
- 20ms Soft-Start Time
- Temperature Compensated Output Voltage Over -40°C to +125°C Operating Temperature
- Provision to External Clock Synchronization and Frequency Dithering
- VCC Overdrive to Improve Efficiency
- Minimum Number of External Components
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX17693B in 5V

Output-Voltage Application

## Quick Start

## Recommended Equipment

- MAX17693BEVKIT#
- One 18V to 36V DC, 0.25A power supply
- 1.25W resistive load with 0.25A sink capacity
- Four digital multimeters (DMM)

## Warning:

- Do not turn on the power supply until all connections are completed.
- Do not touch any part of the circuit with bare hands or conductive materials when powered up.
- Make sure all high-voltage capacitors are fully discharged before handling. Allow 5 minutes after disconnecting the input power source before touching circuit parts.

## Equipment Setup and Procedure

- 1) Set the power supply to +24V DC . Disable the power supply output.
- 2) Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad. Connect the positive terminal of the electronic load to the VOUT PCB pad and the negative terminal to the nearest GND0 PCB pad.
- 3) Connect a DMM configured in voltmeter mode across the VOUT PCB pad and the nearest GND0 PCB pad.
- 4) Verify that a shunt is installed across pins 1-2 on jumper JU1 for proper operation. Refer to Table 1 for details.
- 5) Verify that shunts are not installed for pins 1-2 on jumper JU2. Refer to Table 2 for details.
- 6) Enable the power supply.
- 7) Verify that the output voltmeter displays 5V and, if required, measure the output current using a DMM in Ammeter mode.
- 8) If required, vary the input voltage from 18V to 36V, the load current from 1mA to 0.25A, and verify that the output voltage is 5V.

<!-- image -->

## Detailed Description

The MAX17693B EV kit provides a proven design to evaluate the MAX17693B high-efficiency DC-DC flyback converter. The device uses a novel sampling technique to eliminate the optocoupler in sensing and regulating the isolated output voltage. The device integrates a 76V nMOSFET and reduces the external component count. The transformer design, as well as the selection of different components, are detailed in the MAX17693B IC data sheet. All passive components selected for this EV kit are available from multiple component vendors.

## Table 1. Converter SYNC Jumper (JU1) Settings

| SHUNT POSITION   | SYNC/DITHER PIN                                                                                                 | MAX17693B OPERATION                                   |
|------------------|-----------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| 1-2*             | Connected to GND                                                                                                | SYNC/DITHER function disabled                         |
| Not installed    | Need to connect JU1 to an external clock for external synchronization or implement dithering on SYNC/DITHER pin | External clock synchronization or frequency dithering |

## Table 2. Converter EN/UVLO Jumper (JU2) Settings

| SHUNT POSITION   | EN/UVLO PIN                                                 | MAX17693B                                                      |
|------------------|-------------------------------------------------------------|----------------------------------------------------------------|
| 1-2              | Connected to V IN                                           | Converter is always enabled                                    |
| Not installed*   | Connected to the center node of resistor divider R2 and R12 | UVLO level is set by the resistor divider between V IN and GND |

Evaluates: MAX17693B in 5V

Output-Voltage Application

## MAX17693B Evaluation Kit

## EV Kit Performance Report

(VIN = 24V, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

## Evaluates: MAX17693B in 5V Output-Voltage Application

<!-- image -->

<!-- image -->

│

## Component Suppliers

| SUPPLIER             | WEBSITE           |
|----------------------|-------------------|
| Sumida Corp          | www.sumida.com    |
| Coilcraft Inc        | www.coilcraft.com |
| Murata Manufacturing | www.murata.com    |
| Wurth Electronics    | www.we-online.com |
| Vishay Dale          | www.vishay.com    |

Note: Indicate that you are using the MAX17693B EV when contacting these component suppliers.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17693BEVKIT# | EV Kit |

# Denotes RoHS compliance.

Evaluates: MAX17693B in 5V

Output-Voltage Application

│

## MAX17693B Evaluation Kit

## MAX17693B EV Kit Bill of Materials

|   ITEM | PART REFERENCE   |   QTY | SPECIFICATION                                                           | MANUFACTURER PART NUMBER   |
|--------|------------------|-------|-------------------------------------------------------------------------|----------------------------|
|      1 | C1               |     1 | 22μF ±20% ,50V;Aluminium capacitor                                      | Panasonic EEE-FT1H220AR    |
|      2 | C4               |     1 | 2.2μF ±10%, 16V, X7R ceramic capacitor (0603)                           | Murata GRM188Z71C225KE43   |
|      3 | C5, C14          |     2 | 150pF ±5%, 100V, COG ceramic capacitor (0402)                           | TDK C1005C0G2A151J050BA    |
|      4 | C6,C16           |     1 | 0.1μF ±10%, 16V, X7R ceramic capacitor (0402)                           | Murata GRM155R71C104KA88   |
|      5 | C7               |     1 | 0.01μF ±10%, 16V, X7R ceramic capacitor (0402)                          | Murata GRM155R71C103KA01   |
|      6 | C8               |     1 | 100pF ±1%, 16V, C0G ceramic capacitor (0402)                            | Vishay VJ0402A101FXJCW1BC  |
|      7 | C10              |     1 | 47μF ±10%, 10V, X7R ceramic capacitor (1210)                            | Murata GRM32ER71A476KE15   |
|      8 | C13              |     1 | 1000pF ±10%, 3000V, X7R ceramic capacitor (1812)                        | Vishay HV1812Y102KXHATHV   |
|      9 | C15              |     1 | 0.1μF ±10%, 50V, X7R ceramic capacitor (0402)                           | Murata GRM155R71H104KE14   |
|     10 | C20              |     1 | 4.7μF ±10%, 50V, X7R ceramic capacitor (0805)                           | Murata GRM21BZ71H475KE15   |
|     11 | C21              |     1 | 0.1μF ±10%, 100V, X7R ceramic capacitor (0603)                          | Murata GRM188R72A104KA35   |
|     12 | C23              |     1 | 0.1μF ±10%, 25V, X7R ceramic capacitor (0603)                           | Murata GRM188R71E104KA01   |
|     13 | D1               |     1 | Zener, 33V, 0.25W                                                       | Central Semi CMDZ5257B     |
|     14 | D2               |     1 | Schottky diode, 40V,3A                                                  | Diodes SBR3U40P1           |
|     15 | D3               |     1 | Zener, 5.6V,300mW                                                       | Nexperia BZX384-C5V6       |
|     16 | D4               |     1 | Schottky diode, 100V,0.25A                                              | Nexperia BAT46WJ           |
|     17 | D5               |     1 | Schottky diode, 100V,1A                                                 | Diodes DFLS1100-7          |
|     18 | R2               |     1 | 274kΩ, 1%, 0402                                                         | Vishay CRCW0402274KFK      |
|     19 | R3               |     1 | 0 Ω, 0402                                                               | Panasonic ERJ-2GE0R00      |
|     20 | R4               |     1 | 127kΩ, 1%, 0603                                                         | Vishay CRCW0603127KFK      |
|     21 | R5               |     1 | 10kΩ, 1%, 0402                                                          | Vishay CRCW040210K0FK      |
|     22 | R6               |     1 | 76.8kΩ, 1%, 0402                                                        | Vishay CRCW040276K8FK      |
|     23 | R8               |     1 | 4.7Ω, 1%, 0402                                                          | Vishay CRCW04024R70FK      |
|     24 | R9               |     1 | 66.5kΩ, 1%, 0402                                                        | Vishay CRCW040268K1FK      |
|     25 | R10              |     1 | 24.3kΩ, 1%, 0402                                                        | Yageo RT0402FRE0724K3L     |
|     26 | R12              |     1 | 20.5kΩ, 1%, 0402                                                        | Vishay CRCW040220K5FK      |
|     27 | R17              |     1 | 49.9Ω, 1%, 0603                                                         | Vishay CRCW060349R9FK      |
|     28 | T1               |     1 | EP7,8-pin SMT, 100µH ±10% ,0.5A,(1-2):(5,6-7,8):(3-4)= 1:0.45:0.675,±1% | Coilcraft ZC1515-AE        |
|     29 | U1               |     1 | 4.2V-60V No-Opto Isolated Flyback Converter with Integrated FET         | MAX17693BATC+              |
|     30 | C2               |     1 | OPEN: Capacitor (0805)                                                  | NA                         |
|     31 | L1               |     1 | OPEN: Inductor (4mm x 4mm)                                              | NA                         |
|     32 | C3, C9, C12, C22 |     4 | OPEN: Capacitor (0402)                                                  | NA                         |
|     33 | C11              |     1 | OPEN: Capacitor (1210)                                                  | NA                         |
|     34 | C17-C19          |     3 | OPEN: Capacitor (1210)                                                  | NA                         |
|     35 | R1               |     1 | OPEN: Resistor (0402)                                                   | NA                         |
|     36 | R11              |     1 | OPEN: Resistor (0603)                                                   | NA                         |
|     37 | R13              |     1 | OPEN: Resistor (0805)                                                   | NA                         |
|     38 | FB1              |     1 | OPEN: Ferrite Bead (0805)                                               | NA                         |

Evaluates: MAX17693B in 5V

Output-Voltage Application

## MAX17693B EV Kit Schematic

<!-- image -->

## MAX17693B Evaluation Kit

## MAX17693B EV Kit PCB Layout Diagrams

MAX17693B EV Kit Layout-Top Silkscreen

<!-- image -->

MAX17693B EV Kit Layout- Layer 2

<!-- image -->

## Evaluates: MAX17693B in 5V Output-Voltage Application

MAX17693B EV Kit Layout- Top Layer

<!-- image -->

MAX17693B EV Kit Layout- Layer 3

<!-- image -->

│

## MAX17693B EV Kit PCB Layout Diagrams (continued)

MAX17693B EV Kit Layout- Bottom Layer

<!-- image -->

MAX17693B EV Kit Layout- Bottom Silkscreen

<!-- image -->

│

## MAX17693B Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/21            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied  Ma[im ,ntegrated reserves the right to change the circuitr\ and specifications Zithout notice at an\ time

<!-- image -->

│

Evaluates: MAX17693B in 5V

Output-Voltage Application