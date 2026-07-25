<!-- lastmod 2022-08-04 -->
## MAXM17625/MAXM17626 Evaluation Kits

## Evaluate: MAXM17625/MAXM17626 Modules in Application

## General Description

The MAXM17625/MAXM17626 evaluation kits (EV kits) provide a proven design to evaluate the performance of the MAXM17625/MAXM17626 modules. Each of these modules are configured to demonstrate optimum performance and component sizes in the EV kits.

The  MAXM17625  module  delivers  up  to  600mA  at  a switching frequency of 2MHz. The module is configured for a 1.5V output over a 2.7V to 5.5V input range.

The  MAXM17626  module  delivers  up  to  600mA  at  a switching frequency of 4MHz. The module is configured for a 3.3V output over a 3.6V to 5.5V input range.

The  EV  kits  feature  provisions  for  selecting  Mode  of operation (PWM/PFM) and Enable input. The MAXM17625/MAXM17626 module data sheet provides a complete description of the parts that should be read in conjunction with this data sheet prior to operating the EV kits.

## EV Kit Top View

<!-- image -->

<!-- image -->

## Features

- Operates up to 5.5V Input Supply
- MAXM17625 Offers High 92% Efficiency (V IN  = 3.3V, VOUT  = 1.5V, I OUT  = 300 mA)
- MAXM17626 Offers High 94.5% Efficiency (V IN  = 5V, VOUT  = 3.3V, I OUT  = 400 mA)
- Up to 600mA Load Current
- 2MHz Fixed Switching Frequency for the MAXM17625
- 4MHz Fixed Switching Frequency for the MAXM17626
- Selectable Pulse-Width Modulation (PWM) and Pulse-Frequency Modulation (PFM) Modes of Operation
- Internal 1ms Soft-Start Time
- Power-Good (PGOOD) Output with Pullup Resistor to Respective Input Voltages
- Low-Profile, Surface-Mount Components
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information at end of data sheet.

## Quick Start

## Configuration Diagram

<!-- image -->

MAXM17625/MAXM17626 EV Kits Setup Diagram

## Required Equipment

- One 2.7V to 5.5V DC, 600mA power supply.
- Load  resistors  capable  of  sinking  up  to  600mA  at  1.5V  and  3.3V  (2.5Ω  for  the  MAXM17625  and  5.5Ω  for  the MAXM17626)
- Digital multimeter (DMM)

## Procedure

The EV kits are fully assembled and tested. Follow the steps below to verify and test individual modules operation.

Caution : Do not turn on power supply until all connections are completed.

1.  Disable the power supply and set the input power supply at a valid input voltage.
2.  Connect the positive terminal and negative terminal of the power supply to the VIN pad and its adjacent PGND pad of the module under evaluation.
3.  Connect a 600mA (max) resistive load across the VOUT pad and its nearest PGND pad of the corresponding module.
4.  Verify  that  shunts  are  installed  in  default  position  on  jumpers,  JU101  for  the  MAXM17625  and  JU201  for  the MAXM17626 (see Table 1 for details).
5.  Select the shunt position on jumpers, JU102 for the MAXM17625 and JU202 for the MAXM17626 according to the required mode of operation (see Table 2 for details).
6.  Connect the digital multimeter in voltage measurement mode across the VOUT and its respective PGND pad.
7.  Turn on the input power supply.
8.  Verify that the digital multimeter displays expected terminal voltage with respect to PGND.

Evaluate: MAXM17625/MAXM17626 Modules in

## MAXM17625/MAXM17626 Evaluation Kits Evaluate: MAXM17625/MAXM17626 Modules in Application

## Detailed Description

The MAXM17625/MAXM17626 EV kits are designed to demonstrate the salient features of the MAXM17625/MAXM17626 power modules. The EV kits consist of typical application circuits of two different modules. Each of these circuits are electrically isolated from each other and hosted on the same printed circuit board (PCB). Each of these circuits can be evaluated for its performance under different operating conditions by powering them from their respective input pins.

## MODE Selection

The MAXM17625/MAXM17626 supports PWM and PFM modes of operation. In the EV kits, leave the jumpers JU102 for the MAXM17625 and JU202 for the MAXM17626 open for operating the modules in PFM mode at light load. Install shunts to  configure  the  modules  in  PWM  mode.  See Table  2 for  jumper  settings.  Refer  to  Mode  Selection  section  of  the MAXM17625/MAXM17626 data sheet for more details.

## Adjusting Output Voltage

- The MAXM17625 supports a 0.8V to 1.5V adjustable output voltage, and the MAXM17625 EV kit output voltage is preset to 1.5V.
- The MAXM17626 supports a 1.5V to 3.3V adjustable output voltage, and the MAXM17626 EV kit output voltage is preset to 3.3V.
- For  the  MAXM17625,  the  output  voltage  is  programmed  using  the  resistor  divider  R102  and  R103,  and  for  the MAXM17626, the output voltage is programmed using the resistor divider R202 and R203. Refer to the Adjusting Output Voltage section in the MAXM17625/MAXM17626 data sheet for more details.

## Output Capacitor Selection

The  X7R  ceramic  capacitors  are  preferred  due  to  their  stability  over  temperature  in  industrial  applications.  For  the MAXM17625, the required output capacitor (C104) is 22μF/6.3V, and for the MAXM17626, the required output capacitor (C204) is 10μF/10V. Refer to Output Capacitor Selection section in the MAXM17625/MAXM17626 data sheet for more details.

## Input Capacitor Selection

The input capacitors C103 for the MAXM17625 and C203 for the MAXM17626 serve to reduce the current peaks drawn from the input power supply and reduce switching frequency ripple at the input. Refer to the Input Capacitor Selection section in the MAXM17625/MAXM17626 data sheet to choose input capacitance. A 2.2μF/10V input capacitor is chosen for both the MAXM17625 and MAXM17626.

## Hot Plug-In and Long Input Cables

The MAXM17625/MAXM17626 EV kit PCB provides optional tantalum capacitors (C102 for the MAXM17625 and C202 for the MAXM17626, 47µF/8V) to dampen input voltage peaks and oscillations that can arise during the hot plug-in and/or due to long input cables. These capacitors limit the peak voltage at the input of the device when the EV kits are powered directly from a precharged capacitive source or an industrial backplane PCB. Long input cables between the input power source and the EV kits circuit can cause input-voltage oscillations due to the inductance of the cables. The equivalent series resistance (ESR) of the tantalum capacitor helps damp out the oscillations caused by long input cables. Further, capacitors (C101 for the MAXM17625 and C201 for the MAXM17626, 0.1µF/10V) placed near the input of the board helps in attenuating high-frequency noise.

Evaluate: MAXM17625/MAXM17626 Modules in

## Table 1. EN Jumper Description (JU101, JU201)

| SHUNT POSITION   | EN PIN            | OUTPUT   |
|------------------|-------------------|----------|
| 1-2*             | Connected to V IN | Enabled  |
| 2-3              | Connected to GND  | Disabled |

*Default Position

## Table 2. MODE Jumper Description (JU102, JU202)

| SHUNT POSITION   | MODE PIN         | OUTPUT                                        |
|------------------|------------------|-----------------------------------------------|
| 1-2              | Connected to GND | Operates in PWM Mode in all load conditions   |
| Not Installed*   | Unconnected      | Operates in PFM Mode in light load conditions |

## MAXM17625/MAXM17626 EV Kits Performance Report

(V IN  = V EN  = 5V, V SGND  = V PGND  = 0V, LX = Open, T A  = -40°C to +125°C, unless otherwise noted. Typical values are at TA = +25°C. All voltages are referenced to SGND, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

LOADTRANSIENTRESPONSE

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## MAXM17625/MAXM17626 EV Kits Performance Report (continued)

(V IN  = V EN  = 5V, V SGND  = V PGND  = 0V, LX = Open, T A  = -40°C to +125°C, unless otherwise noted. Typical values are at TA = +25°C. All voltages are referenced to SGND, unless otherwise noted.)

<!-- image -->

Evaluate: MAXM17625/MAXM17626 Modules in

## MAXM17625/MAXM17626 EV Kits Performance Report (continued)

(V IN  = V EN  = 5V, V SGND  = V PGND  = 0V, LX = Open, T A  = -40°C to +125°C, unless otherwise noted. Typical values are at TA = +25°C. All voltages are referenced to SGND, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

Evaluate: MAXM17625/MAXM17626 Modules in

## MAXM17625 EV Kit Bill of Materials

|   ITEM |   QTY | DESIGNATOR   | DESCRIPTION                                   | MANUFACTURER PART NUMBER   |
|--------|-------|--------------|-----------------------------------------------|----------------------------|
|      1 |     2 | C101, C106   | 0.1μF±10%, 10V, X7R, Ceramic Capacitor (0402) | TDK C1005X5R1A104K         |
|      2 |     1 | C102         | 47μF±20%, 8V, Tantalum Capacitor (3528)       | Kemet T520B476M008ATE035   |
|      3 |     1 | C103         | 2.2μF±10%, 10V, X7R, Ceramic Capacitor (0603) | Murata GRM188R71A225KE15   |
|      4 |     1 | C104         | 22μF±10%, 6.3V, X7R, Ceramic Capacitor (0805) | Murata GRM21BZ70J226ME44   |
|      5 |     1 | R101         | 100kΩ±1%, Resistor (0402)                     | Panasonic ERJ-2RKF1003     |
|      6 |     1 | R102         | 33.2kΩ±1%, Resistor (0402)                    | Vishay CRCW04023322FK      |
|      7 |     1 | R103         | 37.4kΩ±1%, Resistor (0402)                    | Vishay CRCW040237K4FK      |
|      8 |     1 | U101         | MAXM17625 10pin u-SLIC Power Module           | Maxim MAXM17625AMB+        |
|      9 |     1 | C105         | Package Outline 0805 Capacitor                | OPEN                       |

## MAXM17626 EV Kit Bill of Materials

|   ITEM |   QTY | DESIGNATOR   | DESCRIPTION                                   | MANUFACTURER PART NUMBER   |
|--------|-------|--------------|-----------------------------------------------|----------------------------|
|      1 |     2 | C201, C206   | 0.1μF±10%, 10V, X7R, Ceramic Capacitor (0402) | TDK C1005X5R1A104K         |
|      2 |     1 | C202         | 47μF±20%, 8V, Tantalum Capacitor (3528)       | Kemet T520B476M008ATE035   |
|      3 |     1 | C203         | 2.2μF±10%, 10V, X7R, Ceramic Capacitor (0603) | Murata GRM188R71A225KE15   |
|      4 |     1 | C204         | 10μF±10%, 10V, X7R, Ceramic Capacitor (0603)  | Murata GRM188Z71A106KA73   |
|      5 |     1 | R201         | 100kΩ±1%, Resistor (0402)                     | Panasonic ERJ-2RKF1003     |
|      6 |     1 | R202         | 118kΩ±1%, Resistor (0402)                     | Panasonic ERJ-2RKF1183     |
|      7 |     1 | R203         | 37.4kΩ±1%, Resistor (0402)                    | Vishay CRCW040237K4FK      |
|      8 |     1 | U201         | MAXM17626 10pin u-SLIC Power Module           | Maxim MAXM17626AMB+        |
|      9 |     1 | C205         | Package Outline 0805 Capacitor                | OPEN                       |

## MAXM17625 EV Kit Schematic

<!-- image -->

## MAXM17626 EV Kit Schematic

<!-- image -->

Evaluate: MAXM17625/MAXM17626 Modules in

Application

Evaluate: MAXM17625/MAXM17626 Modules in

## MAXM17625/MAXM17626 EV Kits PCB Layout Diagrams

MAXM17625/MAXM17626 EV Kits PCB Layout-Top Silkscreen

<!-- image -->

MAXM17625/MAXM17626 EV Kits PCB Layout-Top Layer

<!-- image -->

Evaluate: MAXM17625/MAXM17626 Modules in

## MAXM17625/MAXM17626 EV Kits PCB Layout Diagrams (Continued)

MAXM17625/MAXM17626 EV Kits PCB Layout-Layer 2

<!-- image -->

MAXM17625/MAXM17626 EV Kits PCB Layout-Layer 3

<!-- image -->

Evaluate: MAXM17625/MAXM17626 Modules in

Application

## MAXM17625/MAXM17626 EV Kits PCB Layout Diagrams (continued)

MAXM17625/MAXM17626 EV Kits PCB Layout-Bottom Layer

<!-- image -->

## Ordering Information

| PART NUMBER     | TYPE   |
|-----------------|--------|
| MAXM17625EVKIT# | EV Kit |
| MAXM17626EVKIT# | EV Kit |

## Component Suppliers

| SUPPLIER        | WEBSITE           |
|-----------------|-------------------|
| Murata Americas | www.murata.com    |
| Vishay          | www.vishay.com    |
| Panasonic       | www.panasonic.com |
| TDK Corp.       | www.tdk.com       |
| Kemet           | www.kemet.com     |

Evaluate: MAXM17625/MAXM17626 Modules in

MAXM17625/MAXM17626

## Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 04/21           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

Evaluate: MAXM17625/MAXM17626 Modules in Application