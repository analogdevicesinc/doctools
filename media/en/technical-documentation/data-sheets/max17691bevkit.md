<!-- lastmod 2022-08-02 -->
## MAX17691B Evaluation Kit

## General Description

The MAX17691B evaluation kit (EV kit) provides a proven design to  evaluate  the  performance  of  the  MAX17691B IC. This fully assembled and tested circuit evaluates the MAX17691B, the No-Opto Flyback Converter with an integrated 76V nMOSFET, available in a 12-pin TDFN package with an exposed pad. The IC data sheet provides a complete  description  of  the  part  and  should  be  read  in conjunction with this EV kit data sheet prior to operating the EV kit.

The MAX17691B EV kit output is configured for an iso -lated +5V and provides up to 1.5A of output current over an  18V  to  36V  input  range.  The  device  has  a  150kHz switching  frequency.  The  EV  kit  regulates  the  output voltage within ±5% over the line, load, and temperature by  sensing  the  output  voltage  on  the  primary  side. The converter does not need an opto-coupler for the isolated output-voltage sensing.

## Features

- 18V to 36V Input Range
- Isolated Output: 5V/1.5A DC
- Compact Design with High Frequency (150kHz) Switching
- 87% Peak Efficiency
- Resistor Programmable Input Enable/UVLO Protection
- External Loop Compensation with Design Flexibility
- 5ms Internal Soft-Start Time
- Temperature Compensated Output Voltage Over -40°C to +125°C Operating Temperature
- Provision to External Clock Synchronization and Frequency Dithering
- VCC Overdrive to Improve Efficiency
- Minimum Number of External Components
- CISPR22 (EN55022) Class B Compliant
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX17691B 5V

Output-Voltage Application

## Quick Start

## Recommended Equipment

- MAX17691BEVKIT#
- One 18V to 36V DC, 1.5A power supply
- 7.5W resistive load with 1.5A sink capacity
- Four digital multimeters (DMM)

## Warning:

- Do not turn on the power supply until all connections are completed.
- Do not touch any part of the circuit with bare hands or conductive materials when powered up.
- Make sure all high-voltage capacitors are fully discharged before handling. Allow 5 minutes after disconnecting the input power source before touching circuit parts.

## Equipment Setup and Procedure

- 1) Set the power supply to a DC voltage of +24V. Disable the power supply output.
- 2) Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad. Connect the positive terminal of the electronic load to the VOUT PCB pad and the negative terminal to the nearest GND0 PCB pad.
- 3) Connect a DMM configured in voltmeter mode across the VOUT PCB pad and the nearest GND0 PCB pad.
- 4) Verify that a shunt is installed across pins 1-2 on jumper JU1 for proper operation (see Table 1 for details).
- 5) Verify that shunts are not installed for pins 1-2 on jumper JU2 (see Table 2 for details).
- 6) Enable the power supply.
- 7) Verify that the output voltmeter displays 5V, and if required, measure the output current using a DMM in Ammeter mode.
- 8) If required, vary the input voltage from 18V to 36V, the load current from 3mA to 1.5A, and verify that output voltage is 5V.

<!-- image -->

## MAX17691B Evaluation Kit

## Detail Description

The  MAX17691B  EV  kit  provides  a  proven  design  to evaluate the MAX17691B high-efficiency DC-DC flyback converter. The  device  uses  a  novel  sampling  technique to  eliminate  the  optocoupler  in  sensing  and  regulating

## Evaluates: MAX17691B 5V Output-Voltage Application

the isolated output voltage. The device integrates a 76V nMOSFET and reduces  the  external  component  count. The transformer design, as well as the selection of differ -ent components, are detailed in the MAX17691B IC data sheet. All passive components selected for this EV kit are available from multiple component vendors.

## Table 1. Converter SYNC Jumper (JU1) Settings

| SHUNT POSITION   | SYNC/DITHER PIN                                                                                                       | MAX17691B OPERATION                                   |
|------------------|-----------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| 1-2*             | Connected to GND.                                                                                                     | SYNC/DITHER function disabled                         |
| Not installed    | Need to connect JU1 to an external clock for external synchronization or implement dithering on the SYNC/ DITHER pin. | External clock synchronization or frequency dithering |

* Default position.

## Table 2. Converter EN/UVLO Jumper (JU2) Settings

| SHUNT POSITION   | EN/UVLO PIN                                                 | MAX17691B                                                     |
|------------------|-------------------------------------------------------------|---------------------------------------------------------------|
| 1-2              | Connected to VIN.                                           | Converter is always enabled                                   |
| Not installed*   | Connected to the center node of resistor divider R2 and R3. | UVLO level is set by the resistor divider between VIN and GND |

## EV Kit Performance Report

(VIN = 24V, unless otherwise noted.)

MAX17691B, 5V OUTPUT

100

90

80

70

60

50

40

30

20

10

0

EFFICIENCY vs. LOAD CURRENT

V IN

= 36V

V IN

= 24V

= 18V

500

1000

LOAD CURRENT (mA)

EFFICIENCY (%)

0

V IN

toc01

1500

<!-- image -->

V EN/UVLO

V CC

V OUT

I OUT

MAX17691B, SOFT-START

5V OUTPUT, 1.5A LOAD

2ms/div toc03

2V/div

5V/div

2V/div

1A/div

│

## EV Kit Performance Report (continued)

(VIN = 24V, unless otherwise noted.)

<!-- image -->

<!-- image -->

## Component Suppliers

| SUPPLIER             | WEBSITE           |
|----------------------|-------------------|
| Wurth Electronic     | www.we-online.com |
| Coilcraft Inc        | www.coilcraft.com |
| Murata Manufacturing | www.murata.com    |
| Panasonic Corp       | www.panasonic.com |
| Vishay Dale          | www.vishay.com    |

Note:

Indicate that you are using the MAX17691B EV when contacting these component suppliers.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17691BEVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX17691B 5V

<!-- image -->

MAX17691B,5VOUTPUT,1.5ALOADCURRENT

FREQUENCY(MHz) MEASURED ON THE MAX17691BEVKIT#WITH FB1= SHORT L1 = 15μH, C17, C18 = 4.7μF/1206/100V/X7R, C2,C20=10uF/1210/50V/X7R,NODITHERING

<!-- image -->

│

## MAX17691B EV Kit Bill of Materials

|   ITEM | PART REFERENCE   |   QTY | SPECIFICATION                                                                          | MANUFACTURER PART NUMBER               |
|--------|------------------|-------|----------------------------------------------------------------------------------------|----------------------------------------|
|      1 | C1               |     1 | 47μF ±20% ,80V;Aluminium capacitor                                                     | Panasonic EEE-FK1K470P                 |
|      2 | C4               |     1 | 2.2μF ±10%, 16V, X7R ceramic capacitor (0603)                                          | Murata GRM188Z71C225KE43               |
|      3 | C5, C14          |     2 | 150pF ±5%, 100V, C0G ceramic capacitor (0402)                                          | TDK C1005C0G2A151J050BA                |
|      4 | C7               |     1 | 0.01μF ±10%, 50V, X7R ceramic capacitor (0402)                                         | Murata GRM155R71H103KA88               |
|      5 | C8               |     1 | 100pF ±10%, 50V, C0G ceramic capacitor (0402)                                          | Murata GRM1555C1H101JA01               |
|      6 | C9               |     1 | 220pF ±10%, 100V, X7R ceramic capacitor (0402)                                         | Murata GRM155R72A221KA01               |
|      7 | C10, C11         |     2 | 100μF ±20%, 6.3V, X7S ceramic capacitor (1210)                                         | Taiyo Yuden JMK325AC7107MM-P           |
|      8 | C13              |     1 | 1000pF ±10%, 3000V, X7R ceramic capacitor (1812)                                       | Vishay HV1812Y102KXHATHV               |
|      9 | C15              |     1 | 0.1μF ±10%, 50V, X7R ceramic capacitor (0402)                                          | Murata GRM155R71H104KE14               |
|     10 | C16              |     1 | 0.1μF ±10%, 16V, X7R ceramic capacitor (0402)                                          | Murata GRM155R71C104KA88               |
|     11 | C20              |     1 | 10μF ±10%, 50V, X7R ceramic capacitor (1210)                                           | Murata GRM32ER71H106KA12               |
|     12 | C21              |     1 | 0.1μF ±10%, 100V, X7R ceramic capacitor (0603)                                         | Murata GRM188R72A104KA35               |
|     13 | C23              |     1 | 0.1μF ±10%, 25V, X7R ceramic capacitor (0603)                                          | Murata GRM188R71E104KA01               |
|     14 | D1               |     1 | Zener, 24V, 0.25W                                                                      | Central Semi CMDZ5252B                 |
|     15 | D2               |     1 | Schottky diode, 60V,8A                                                                 | Diodes SBR8U60P5                       |
|     16 | D3               |     1 | Zener, 5.6V, 500mW                                                                     | Central Semi CMZ5919B                  |
|     17 | D4               |     1 | Schottky diode, 100V,0.25A                                                             | Nexperia BAT46WJ                       |
|     18 | D5               |     1 | Schottky diode, 100V,1A                                                                | Diodes DFLS1100-7                      |
|     19 | R2               |     1 | 280kΩ, 1%, 0402                                                                        | Panasonic ERJ-2RKF2803                 |
|     20 | R3               |     1 | 22kΩ, 1%, 0402                                                                         | Vishay CRCW040222K0FK                  |
|     21 | R4               |     1 | 169kΩ, 1%, 0603                                                                        | Panasonic ERJ-3EKF1693                 |
|     22 | R5               |     1 | 10kΩ, 1%, 0402                                                                         | Vishay CRCW040210K0FK                  |
|     23 | R6               |     1 | 105kΩ, 1%, 0402                                                                        | Vishay CRCW0402105KFK                  |
|     24 | R7               |     1 | 2.2Ω, 1%, 0603                                                                         | Panasonic ERJ-3RQF2R2                  |
|     25 | R8               |     1 | 4.7Ω, 1%, 0402                                                                         | Vishay CRCW04024R70FK                  |
|     26 | R9               |     1 | 66.5kΩ, 1%, 0402                                                                       | Panasonic ERJ-2RKF5602                 |
|     27 | R10              |     1 | 21kΩ, 1%, 0402                                                                         | Panasonic ERJ-2RKF2102                 |
|     28 | R11              |     1 | 33Ω, 1%, 0603                                                                          | Vishay CRCW060333R0FK                  |
|     29 | R12              |     1 | 0Ω, 0%, 0402                                                                           | Panasonic ERJ-2GE0R00                  |
|     30 | R17              |     1 | 49.9Ω, 1%, 0603                                                                        | Vishay CRCW060349R9FK                  |
|     31 | T1               |     1 | EP10,8-pin SMT, 1500VRMS Isolation, 22µH ±10% ,2.8A,(3-4):(5,6-7,8):(1-2)= 3:1:1.5,±1% | Coilcraft ZB1021-AL or Wurth 750318935 |
|     32 | U1               |     1 | 4.2V-60V No-Opto Isolated Flyback Converter with Integrated FET                        | MAX17691BATC+                          |
|     33 | C2, C17-C19      |     4 | OPEN: Capacitor (1210)                                                                 | NA                                     |
|     34 | L1               |     1 | OPEN: Inductor (4mm x 4mm)                                                             | NA                                     |
|     35 | C3, C6, C12,C22  |     4 | OPEN: Capacitor (0402)                                                                 | NA                                     |
|     36 | R1               |     1 | OPEN: Resistor (0402)                                                                  | NA                                     |
|     37 | R13              |     1 | OPEN: Resistor (0805)                                                                  | NA                                     |
|     38 | FB1              |     1 | OPEN: Ferrite Bead (0805)                                                              | NA                                     |

## Evaluates: MAX17691B 5V Output-Voltage Application

## MAX17691B EV Kit Schematic

<!-- image -->

## MAX17691B Evaluation Kit

## MAX17691B EV Kit PCB Layout Diagrams

MAX17691B EV Kit Layout-Top Silkscreen

<!-- image -->

MAX17691B EV Kit Layout- Layer 2

<!-- image -->

## Evaluates: MAX17691B 5V Output-Voltage Application

MAX17691B EV Kit Layout- Top Layer

<!-- image -->

MAX17691B EV Kit Layout- Layer 3

<!-- image -->

│

## MAX17691B Evaluation Kit

## MAX17691B EV Kit PCB Layout Diagrams (continued)

MAX17691B EV Kit Layout- Bottom Layer

<!-- image -->

MAX17691B EV Kit Layout- Bottom Silkscreen

<!-- image -->

│

## MAX17691B Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                 | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 10/20           | Initial release                                                                                                             | -               |
|                 1 | 4/21            | Updated the General Description , Table 2, and the Component Supplier table; added TOC07 and replaced the Bill of Materials | 1-4             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied  Ma[im ,ntegrated reserves the right to change the circuitry and specifications without notice at any time

<!-- image -->

│

Evaluates: MAX17691B 5V

Output-Voltage Application