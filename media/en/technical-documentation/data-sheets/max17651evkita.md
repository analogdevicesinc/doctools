<!-- lastmod 2022-08-04 -->
<!-- image -->

Evaluates: MAX17651 (TDFN)

## General Description

The  MAX17651EVKITA#  evaluation  kit  (EV  kit)  is  a  fully assembled and tested circuit board that demonstrates the performance of the MAX17651 high-voltage, ultra-low quiescent current  linear  regulator  in  a  6-pin  TDFN  package. The EV kit operates over a wide input voltage range of 4V to  60V  and  provides  up  to  100mA  load  current.  It  draws only 8µA supply current under no-load conditions. The EV kit  is  simple  to  use  and  easily  configurable  with  minimal external components. It features overload current protection and thermal shutdown. The EV kit comes installed with the MAX17651ATT+ in a 6-pin, (3mm x 3mm) TDFN package.

## Features

- Wide 4V to 60V Input Voltage Range
- Jumper Configurable 12V, 5V, and 3.3V Outputs
- Up to 100mA Load Current Capability
- 8µA No Load Supply Current
- Active-High, Enable Input
- PGOOD Output for Regulator Output Voltage Monitoring
- Overload Protection
- Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested

## MAX17651 EV Kit (TDFN) Photo

<!-- image -->

Ordering Information appears at end of data sheet.

Click here to ask an associate for production status of specific part numbers.

## MAX17651EVKITA# Evaluation Kit

## Quick Start

## Required Equipment

- MAX17651EVKITA# EV kit
- 60V, 0.2A DC power supply
- Electronic load up to 100mA
- Digital Multimeter (DMM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Set the input voltage to 6.1V or higher for the default configuration of 5V output and see Table 2 for setting the minimum input voltage for 3.3V or 12V outputs. Disable the power supply.
- 2) Set the electronic load to constant-current mode, 100mA, and disable the electronic load.
- 3) Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest GND PCB pad.
- 4) Connect the positive terminal of the load to the VOUT PCB pad and the negative terminal to the nearest GND PCB pad.
- 5) Connect the DMM across VOUT PCB pad and the nearest GND PCB pad.
- 6) Verify that shunts are installed between pins 1 and 2 of jumper JU1 (EN).
- 7) Place a shunt on JU2, JU3, or JU4, depending on the desired output voltage (see Table 2 for details).
- 8) Turn on the input power supply and enable the load.
- 9) Verify that the DMM across the output terminals displays 5V, 3.3V, or 12V.
- 10)  Vary the input voltage between minimum input voltage and 60V and vary the load current from 0mA to available maximum load current (from thermal dissipation calculation, see the Available Output Current Calculation section for more details) and verify that the output voltage is 5V, 3.3V, or 12V with respect to GND.
- 11)  Reduce the load current to 0mA and reduce the input voltage to 3V.
- 12)  Verify that the DMM displays 0V.
- 13)  Disable the input power supply.

## MAX17651EVKITA# Evaluation Kit

## Detailed Description

The  MAX17651EVKITA#  kit  is  a  fully  assembled  and tested  circuit  board  that  demonstrates  the  performance of  the  MAX17651  high-voltage,  ultra-low  quiescent  current  linear  regulator  in  a  6-pin  TDFN  package.  The EV  kit  operates  over  a  wide  input-voltage  range  of  4V to  60V  and  provides  up  to  100mA  load  current.  It  draws only  8µA  supply  current  under  no-load  conditions.  The EV  kit  is  simple  to  use  and  easily  configurable  with minimal external components. It features overload current protection and thermal shutdown.

The EV kit includes an EN PCB pad and JU1 to enable control of the converter output. Jumpers JU2 and JU3 are provided for selecting the output voltage of the converter. PGOOD PCB pad is available for monitoring the PGOOD output.

## Enable Control (JU1)

The EN PCB pad of the EV kit serves as an on/off control. See Table 1 to configure JU1.

## PGOOD Output for Regulator Output Voltage Monitoring

The EV kit provides a PCB pad to monitor the status of the PGOOD output. PGOOD goes high when the output voltage  rises  above  92%  (typ)  of  its  nominal  regulated output voltage. PGOOD goes low when the output voltage falls  below 89.5% (typ) of its nominal regulated voltage. The voltage on the PGOOD pin should not exceed 5V. If the output voltage is greater than 5V, install a shunt on JU4. Calculate the value of resistance R6 from the following equation:

<!-- formula-not-decoded -->

## Output Voltage Setting

The output voltage can be programmed from 0.6V to 58V. See Table 2 to configure the EV kit to either 5V, 3.3V, or 12V. To program the output voltage other than 5V, 3.3V, or  12V,  replace  the  resistor  R4.  Calculate  the  value  of resistor R4 using the following equation.

## Evaluates: MAX17651 (TDFN)

## Output Capacitor Selection

The voltage rating of the output capacitor (C3) installed on  the  board  is  16V.  If  the  programmed  output  voltage is  greater  than  12V,  an  output  capacitor  with  a  higher voltage rating should be installed.

## Available Output Current Calculation

Ensure  that  the  junction  temperature  of  the  MAX17651 does not exceed +125°C under the operating conditions specified for the regulator.

At a particular operating condition, the power loss that led to the temperature rise of the part is estimated as follows:

<!-- formula-not-decoded -->

where,  V IN   is  the  input  voltage,  V OUT   is  the  output voltage, and I LOAD  is the load current.

MAX17651ATT+ Package Thermal resistance measured on the MAX17651EVKITA# EV kit with no airflow is:

<!-- formula-not-decoded -->

The  junction  temperature  of  the  MAX17651  can  be estimated  at  any  given  maximum  ambient  temperature (T A\_MAX ) from the equation below:

<!-- formula-not-decoded -->

Calculate  the  maximum  allowable  output  current  in  mA using the following formula:

<!-- formula-not-decoded -->

Example: T A\_MAX  = +70°C, V IN  = 24V, V OUT  = 5V.

<!-- formula-not-decoded -->

## Table 1. Enable Control (EN)

| JU1 SHUNT POSITION   | EN PIN           | OUTPUT   |
|----------------------|------------------|----------|
| 1-2*                 | Connected to VIN | Enabled  |
| 2-3                  | Connected to GND | Disabled |

*Default position.

<!-- formula-not-decoded -->

Table 2. Output Voltage Configuration Settings

| OUTPUT VOLTAGE (V OUT )   | INSTALL SHUNT ON   | MINIMUM INPUT VOLTAGE   |
|---------------------------|--------------------|-------------------------|
| 5V                        | JU2*               | 6.1V                    |
| 3.3V                      | JU3                | 4.4V                    |
| 12V                       | JU4                | 13.1V                   |

*Default position.

## MAX17651EVKITA# Evaluation Kit

## EV Kit Performance

(VIN = 7V, TA = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

## Evaluates: MAX17651 (TDFN)

<!-- image -->

<!-- image -->

<!-- image -->

│

## MAX17651EVKITA# Evaluation Kit

## EV Kit Performance (continued)

(VIN = 7V, TA = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

Evaluates: MAX17651 (TDFN)

<!-- image -->

<!-- image -->

<!-- image -->

│

## MAX17651EVKITA# Evaluation Kit

## EV Kit Performance (continued)

(VIN = 7V, TA = +25°C, unless otherwise noted)

<!-- image -->

<!-- image -->

Evaluates: MAX17651 (TDFN)

<!-- image -->

<!-- image -->

<!-- image -->

│

## MAX17651EVKITA# Evaluation Kit

## Component Suppliers

| SUPPLIER        | WEBSITE                      |
|-----------------|------------------------------|
| Murata Americas | www.murata.com               |
| Panasonic       | www.industrial.panasonic.com |

## MAX17651 EV Kit (TDFN) Bill of Materials

|   S.No | DESIGNATOR   | DESCRIPTION                                                                        |   QUANTITY | MANUFACTURER PART NUMBER      |
|--------|--------------|------------------------------------------------------------------------------------|------------|-------------------------------|
|      1 | C1           | 10μF, 80V Electrolytic Capacitor (6.6mm x 6.6mm)                                   |          1 | PANASONIC EEE-FK1K100XP       |
|      2 | C2           | 0.1µF±10%; 100V; X7R; Ceramic Capacitor (0603)                                     |          1 | MURATA GRM188R72A104KA35      |
|      3 | C3           | 4.7µF±10%; 16V; X7R; Ceramic Capacitor (0805)                                      |          1 | MURATA GRM21BR71C475KA73      |
|      4 | JU1          | 3-Pin Headers                                                                      |          1 | SULLINS GRPB031VWVN RC        |
|      5 | JU2-JU4      | 2-Pin Headers                                                                      |          3 | SULLINS GRPB021VWVN RC        |
|      6 | R1           | 698kΩ ±1%; 0.1W, Resistor (0402)                                                   |          1 |                               |
|      7 | R2           | 59kΩ ±1%; 0.063W, Resistor (0402)                                                  |          1 |                               |
|      8 | R3           | 348kΩ ±1%; 0.063W, Resistor (0402)                                                 |          1 |                               |
|      9 | R4           | 1.13MΩ ±1%; 0.063W, Resistor (0402)                                                |          1 |                               |
|     10 | R5           | 100kΩ ±1%; 0.1W, Resistor (0402)                                                   |          1 |                               |
|     11 | R6           | 71.5kΩ ±1%; 0.1W, Resistor (0402)                                                  |          1 |                               |
|     12 | R7           | 1kΩ ±1%; 0.063W, Resistor (0402)                                                   |          1 |                               |
|     12 | U1           | 4V to 60V, 100mA, ultra-small Quiescent Current, Linear Regulator (6-pin TDFN-EP*) |          1 | MAXIM INTEGRATED MAX17651ATT+ |
|     13 | C4           | Open: Capacitor (0805)                                                             |          0 |                               |

| DEFAULT JUMPER TABLE   | DEFAULT JUMPER TABLE   |
|------------------------|------------------------|
| JUMPER                 | SHUNT POSITION         |
| JU1, JU2               | 1-2                    |
| JU3                    | Open                   |
| JU4                    | Open                   |

Evaluates: MAX17651 (TDFN)

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17651EVKITA# | EV Kit |

# Denotes RoHS compliance

## MAX17651EVKITA# Evaluation Kit

## MAX17651 EV Kit (TDFN) Schematic

<!-- image -->

│

Evaluates: MAX17651 (TDFN)

## MAX17651EVKITA# Evaluation Kit

## MAX17651 EV Kit (TDFN) PCB Layout

MAX17651 EV Kit (TDFN) PCB Layout-Top Silkscreen

<!-- image -->

Evaluates: MAX17651 (TDFN)

MAX17651 EV Kit (TDFN) PCB Layout-Top Layer

<!-- image -->

MAX17651 EV Kit (TDFN) PCB Layout-Bottom Layer

<!-- image -->

│

## MAX17651EVKITA# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/22            | Initial Release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX17651 (TDFN)