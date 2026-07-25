<!-- lastmod 2022-08-02 -->
## MAX17691A Evaluation Kit

## General Description

The MAX17691A evaluation kit (EV kit) provides a proven design  to  evaluate  the  performance  of  MAX17691A  IC. This  fully  assembled  and  tested  circuit  is  implemented using  the  MAX17691A,  the  No-Opto  Flyback  converter with  an  integrated  76V  nMOSFET, available in a 12-pin TDFN package with an exposed pad. The IC data sheet provides  a  complete  description  of  the  part  and  should be read in conjunction with this EV kit data sheet prior to operating the EV kit.

The MAX17691A EV kit output is configured for an iso -lated +5V and provides up to 1.5A of output current over a 18V to 36V input range. The device switches at a 150kHz switching  frequency.  The  EV  kit  regulates  the  output voltage within ±5% over the line, load, and temperature by  sensing  the  output  voltage  on  the  primary  side. The converter does not need an optocoupler for the isolated output voltage sensing.

Ordering Information appears at end of data sheet.

## Evaluates: MAX17691A in 5V Output-Voltage Application

## Features

- 18V to 36V Input Range
- Isolated Output: 5V/1.5A DC
- Compact Design with High Frequency (150kHz) Switching
- 87% Peak Efficiency
- Resistor Programmable Input Enable/UVLO Protection
- Resistor Programmable Input Overvoltage Protection
- Internal Loop Compensation Reduces External Components
- 5mS Internal Soft-Start Time
- Temperature Compensated Output Voltage Over -40°C to +125°C Operating Temperature
- Provision to External Clock Synchronization and Frequency Dithering
- VCC Overdrive to Improve Efficiency
- Minimum Number of External Components
- CISPR22 (EN55022) Class B Compliant
- Proven PCB Layout
- Fully Assembled and Tested

<!-- image -->

## MAX17691A Evaluation Kit

## Quick Start

## Recommended Equipment

- MAX17691AEVKIT#
- One 18V to 36V DC, 1.5A power supply
- 7.5W resistive load with 1.5A sink capacity
- Four digital multimeters (DMM)

## Warning:

- Do not turn on the power supply until all connections are completed.
- Do not touch any part of the circuit with bare hands or conductive materials when powered up.
- Make sure all high-voltage capacitors are fully discharged before handling. Allow 5 minutes after disconnecting the input power source before touching circuit parts.

## Equipment Setup and Procedure

- 1) Set the power supply to +24VDC. Disable the power supply output.
- 2) Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad. Connect the positive terminal of the electronic load to the VOUT PCB pad and the negative terminal to the nearest GND0 PCB pad.

## Evaluates: MAX17691A in 5V Output-Voltage Application

- 3) Connect a DMM configured in voltmeter mode across the VOUT PCB pad and the nearest GND0 PCB pad.
- 4) Verify that shunt is installed across pins 1-2 on jumper JU1 for proper operation. See Table 1 for details.
- 5) Verify that shunts are not installed for pins 1-2 on jumpers JU2 and JU3.  See Table 2 and Table 3 for details.
- 6) Enable the power supply.
- 7) Verify that the output voltmeter displays 5V and if required, measure the output current using a DMM in ammeter mode.
- 8) If required, vary the input voltage from 18V to 36V, the load current from 3mA to 1.5A, and verify that output voltage is 5V.

## Detailed Description

The  MAX17691A  EV  kit  provides  a  proven  design  to evaluate the MAX17691A high-efficiency DC-DC flyback converter.  The  device  use  a  novel  sampling  technique to  eliminate  the  optocoupler  in  sensing  and  regulating the isolated output voltage. The device integrates a 76V nMOSFET and reduces  the  external  component  count. The transformer design, as well as the selection of different components, are detailed in the MAX17691A IC data sheet. All passive components selected for this EV kit are available from multiple component vendors.

## Table 1. Converter SYNC Jumper (JU1) Settings

| SHUNT POSITION   | SYNC/DITHER PIN                                                                                              | MAX17691A OPERATION                                   |
|------------------|--------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| 1-2*             | Connected to GND                                                                                             | SYNC/DITHER function disabled                         |
| Not installed    | Need to connect JU1 to external clock for external synchronization or implement dithering on SYNC/DITHER pin | External clock synchronization or frequency dithering |

## Table 2. Converter EN/UVLO Jumper (JU2) Settings

| SHUNT POSITION   | EN/UVLO PIN                                                | MAX17691A                                                     |
|------------------|------------------------------------------------------------|---------------------------------------------------------------|
| 1-2              | Connected to VIN                                           | Converter is always enabled                                   |
| Not installed*   | Connected to the center node of resistor divider R2 and R3 | UVLO level is set by the resistor divider between VIN and GND |

## Table 3. Converter OVI Jumper (JU3) Settings

| SHUNT POSITION   | OVI PIN                                                     | MAX17691A OPERATION                                          |
|------------------|-------------------------------------------------------------|--------------------------------------------------------------|
| 1-2              | Connected to GND                                            | OVI function is disabled                                     |
| Not installed*   | Connected to the center node of resistor divider R3 and R10 | OVI level is set by the resistor divider between VIN and GND |

Note: Refer to MAX17691A data sheet equations for calculating appropriate R2, R3, and R10 based on the preferred setting for JU2 and JU3.

## MAX17691A Evaluation Kit

## EV Kit Performance Report

(V IN  = 24V, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## Evaluates: MAX17691A in 5V Output-Voltage Application

<!-- image -->

<!-- image -->

<!-- image -->

│

## Component Suppliers

| SUPPLIER             | WEBSITE           |
|----------------------|-------------------|
| Wurth Electronics    | www.we-online.com |
| Coilcraft Inc        | www.coilcraft.com |
| Murata Manufacturing | www.murata.com    |
| Panasonic Corp       | www.panasonic.com |
| Vishay Dale          | www.vishay.com    |

Note: Indicate that you are using the MAX17691A EV when contacting these component suppliers.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17691AEVKIT# | EV Kit |

#Denotes RoHS compliance.

│

## MAX17691A EV Kit Bill of Materials

|   ITEM | PART REFERENCE   |   QTY | SPECIFICATION                                                   | MANUFACTURER PART NUMBER               |
|--------|------------------|-------|-----------------------------------------------------------------|----------------------------------------|
|      1 | C1               |     1 | 47μF ±20% ,80V;Aluminium capacitor                              | Panasonic EEE-FK1K470P                 |
|      2 | C4               |     1 | 2.2μF ±10%, 16V, X7R ceramic capacitor (0603)                   | Murata GRM188Z71C225KE43               |
|      3 | C5, C14          |     2 | 150pF ±5%, 100V, COG ceramic capacitor (0402)                   | TDK C1005C0G2A151J050BA                |
|      4 | C9               |     1 | 220pF ±10%, 100V, X7R ceramic capacitor (0402)                  | Murata GRM155R72A221KA01               |
|      5 | C10, C11         |     2 | 100μF ±20%, 6.3V, X7S ceramic capacitor (1210)                  | Taiyo Yuden JMK325AC7107MM-P           |
|      6 | C13              |     1 | 1000pF ±10%, 3000V, X7R ceramic capacitor (1812)                | Vishay HV1812Y102KXHATHV               |
|      7 | C15              |     1 | 0.1μF ±10%, 50V, X7R ceramic capacitor (0402)                   | Murata GRM155R71H104KE14               |
|      8 | C16              |     1 | 0.1μF ±10%, 16V, X7R ceramic capacitor (0402)                   | Murata GRM155R71C104KA88               |
|      9 | C20              |     1 | 10μF ±10%, 50V, X7R ceramic capacitor (1210)                    | Murata GRM32ER71H106KA12               |
|     10 | C21              |     1 | 0.1μF ±10%, 100V, X7R ceramic capacitor (0603)                  | Murata GRM188R72A104KA35               |
|     11 | C23              |     1 | 0.1μF ±10%, 25V, X7R ceramic capacitor (0603)                   | Murata GRM188R71E104KA01               |
|     12 | D1               |     1 | Zener, 24V, 0.25W                                               | Central Semi CMDZ5252B                 |
|     13 | D2               |     1 | Schottky diode, 60V,8A                                          | Diodes SBR8U60P5                       |
|     14 | D3               |     1 | Zener, 5.6V, 500mW                                              | Central Semi CMZ5919B                  |
|     15 | D4               |     1 | Schottky diode, 100V,0.25A                                      | Nexperia BAT46WJ                       |
|     16 | D5               |     1 | Schottky diode, 100V,1A                                         | Diodes DFLS1100-7                      |
|     17 | R2               |     1 | 280kΩ, 1%, 0402                                                 | Panasonic ERJ-2RKF2803                 |
|     18 | R3               |     1 | 11.8kΩ, 1%, 0402                                                | Panasonic ERJ-2RKF1182                 |
|     19 | R4               |     1 | 169kΩ, 1%, 0603                                                 | Panasonic ERJ-3EKF1693                 |
|     20 | R5, R10          |     2 | 10kΩ, 1%, 0402                                                  | Vishay CRCW040210K0FK                  |
|     21 | R6               |     1 | 105kΩ, 1%, 0402                                                 | Vishay CRCW0402105KFK                  |
|     22 | R7               |     1 | 2.2Ω, 1%, 0603                                                  | Panasonic ERJ-3RQF2R2                  |
|     23 | R8               |     1 | 4.7Ω, 1%, 0402                                                  | Vishay CRCW04024R70FK                  |
|     24 | R9               |     1 | 66.5kΩ, 1%, 0402                                                | Panasonic ERJ-2RKF5602                 |
|     25 | R11              |     1 | 33Ω, 1%, 0603                                                   | Vishay CRCW060333R0FK                  |
|     26 | R17              |     1 | 49.9Ω, 1%, 0603                                                 | Vishay CRCW060349R9FK                  |
|     27 | T1               |     1 | EP10,8-pin SMT, 22µH ±10% ,2.8A, (3-4):(5,6-7,8)= 3:1,±1%       | Coilcraft ZB1021-AL or Wurth 750317918 |
|     28 | U1               |     1 | 4.2V-60V No-Opto Isolated Flyback Converter with Integrated FET | MAX17691AATC+                          |
|     29 | C2, C17-C19      |     4 | OPEN: Capacitor (1210)                                          | NA                                     |
|     30 | L1               |     1 | OPEN: Inductor (4mm x 4mm)                                      | NA                                     |
|     31 | C3, C6, C12,C22  |     4 | OPEN: Capacitor (0402)                                          | NA                                     |
|     32 | R1               |     1 | OPEN: Resistor (0402)                                           | NA                                     |
|     33 | R13              |     1 | OPEN: Resistor (0805)                                           | NA                                     |
|     34 | FB1              |     1 | OPEN: Ferrite Bead (0805)                                       | NA                                     |

## Evaluates: MAX17691A in 5V Output-Voltage Application

## MAX17691A EV Kit Schematics

<!-- image -->

## MAX17691A Evaluation Kit

## MAX17691A EV Kit PCB Layouts

MAX17691A EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

## Evaluates: MAX17691A in 5V Output-Voltage Application

MAX17691A EV Kit PCB Layout-Top

<!-- image -->

MAX17691A EV Kit PCB Layout-Layer 2

<!-- image -->

│

## MAX17691A EV Kit PCB Layouts (continued)

<!-- image -->

MAX17691A EV Kit PCB Layout-Layer 3

MAX17691A EV Kit PCB Layout-Bottom

<!-- image -->

MAX17691A EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

## MAX17691A Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                           | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 7/20            | Initial release                                                                                                                                                                       | -               |
|                 1 | 11/20           | Updated Features section, replaced TOC 1, added TOC 7, updated MAX17691A EV Kit Bill of Materials , and MAX17691A EV Kit PCB Layouts sections                                         | 1, 3, 4, 7      |
|                 2 | 5/21            | Updated General Description , Features, and Quick Start sections, added Note, updated table 2, TOC 1, TOC 3, TOC 7, Component Suppliers table, and MAX17691A EV Kit Bill of Materials | 1-5             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied  Ma[im ,ntegrated reserves the right to change the circuitr\ and specifications Zithout notice at an\ time

<!-- image -->

│

Evaluates: MAX17691A in 5V

Output-Voltage Application