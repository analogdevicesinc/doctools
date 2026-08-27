<!-- lastmod 2022-08-04 -->
## MAX17625/MAX17626 Evaluation Kits

## General Description

The  MAX17625/MAX17626  evaluation  kits  (EV  kits) provide a proven design to evaluate the performance of the  MAX17625/MAX17626  converters.  Each  of  these devices operate over an input range from 2.7V to 5.5V and deliver up to 700mA output current. The devices are configured  to  demonstrate  optimum  performance  and component sizes in the EV kits.

The  MAX17625  converter  delivers  up  to  700mA  at  a switching frequency of 2MHz. The converter is configured for a 1.2V output over a 2.7V to 5.5V input range.

The  MAX17626  converter  delivers  up  to  700mA  at  a switching frequency of 4MHz. The converter is configured for a 3.3V output over a 3.6V to 5.5V input range.

The EV kits feature provisions for selecting the Mode of operation  (PWM/PFM),  Enable  input,  and  PGOOD signal. The MAX17625/MAX17626 converter data sheet provides a complete description of the parts that should be  read  in  conjunction  with  this  data  sheet  prior  to operating the EV kits.

## EV Kits Top View

<!-- image -->

<!-- image -->

## Evaluates: MAX17625/MAX17626 Converters in Application

## Features

- 2.7V to 5.5V Input-Voltage Range
- MAX17625 Offers High 90.6% Efficiency (V IN  = 3.3V, VOUT  = 1.2V, I OUT  = 400mA)
- MAX17626 Offers High 94.5% Efficiency (V IN  = 5V, VOUT  = 3.3V, I OUT  = 500mA)
- Up to 700mA Load Current
- 2MHz Fixed Switching Frequency for the MAX17625
- 4MHz Fixed Switching Frequency for the MAX17626
- Selectable Pulse-Width Modulation (PWM) and Pulse-Frequency Modulation (PFM) Modes of Operation
- Internal 1ms Soft-Start Time
- Power-Good (PGOOD) Output with Pullup Resistor to Respective Input Voltages
- Low-Profile, Surface-Mount Components
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information at end of data sheet.

## Evaluates: MAX17625/MAX17626 Converters in Application

## Quick Start

## Configuration Diagram

Figure 1. MAX17625/MAX17626 EV Kits Setup Diagram

<!-- image -->

## Required Equipment

-  One 2.7V to 5.5V DC, 700mA power supply
- Load resistors capable of sinking up to 700mA at 1.2V and 3.3V
- Digital multimeter (DMM)

## Procedure

A typical bench setup for the MAX17625/MAX17626 EV kits is shown in Figure 1 .

The EV kits are fully assembled and tested. Follow the steps to verify and test individual converters operation.

## Caution: Do not turn on power supply until all connections are completed.

1.  Disable the power supply and set the input power supply at a valid input voltage.
2.  Connect the positive terminal and negative terminal of the power supply to the VIN pad and its adjacent GND pad of the converter under evaluation, respectively.
3.  Connect a maximum 700mA resistive load across the VOUT pad and its nearest GND pad of the corresponding converter.
4.  Verify that shunts are installed in the default position on jumpers (JU101 and JU201) (see Table 1 for details).
5.  Select the shunt position on jumpers (JU102, JU202) according to the required mode of operation (see Table 2 for details).
6.  Connect the digital multimeter (in voltage measurement mode) across the VOUT and its respective GND pad.
7.  Turn on the input power supply.
8.  Verify  that  the  digital  multimeter  displays  1.2V  for  MAX17625  and  3.3V  for  MAX17626  output  terminal  voltages, respectively with respect to GND.

## MAX17625/MAX17626 Evaluation Kits

## Evaluates: MAX17625/MAX17626 Converters in Application

## Detailed Description

The MAX17625/MAX17626 EV kits are designed to demonstrate the salient features of the MAX17625/MAX17626 power converters.  The  EV  kits  consist  of  typical  application  circuits  of  two  different  converters.  Each  of  these  circuits  are electrically isolated from each other and hosted on the same printed circuit board (PCB). Each of these circuits can be evaluated for its performance under different operating conditions by powering them from their respective input pins.

## MODE Selection

The MAX17625/MAX17626 supports PWM and PFM modes of operation. In the EV kits, leave the jumpers (JU102, JU202) open for operating the converters in PFM mode at light-load. Install shunts to configure the converters in PWM mode. See Table 2 for jumpers (JU102 and JU202) settings. Refer to the Mode Selection section of the MAX17625/MAX17626 data sheet for more details.

## Adjusting Output Voltage

The MAX17625 supports a 0.8V to 1.5V adjustable output voltage and the MAX17625 EV kit output voltage is preset to 1.2V.

The MAX17626 supports a 1.5V to 3.3V adjustable output voltage and the MAX17626 EV kit output voltage is preset to 3.3V. For the MAX17625, the output voltage is programmed using the resistor divider R101 and R102 and for the MAX17626, the output voltage is programmed using the resistor divider R201 and R202. Refer to the Adjusting Output Voltage section in the MAX17625/MAX17626 data sheet for more details.

## Output Capacitor Selection

The X7R ceramic capacitors are preferred due to their stability over temperature in industrial applications. For the MAX17625, the required output capacitor (C106) is 22μF/6.3V and for the MAX17626, the required output capacitor (C206) is 10μF/10V. Refer to the Output Capacitor Selection section in the MAX17625/MAX17626 data sheet for more details.

## Input Capacitor Selection

The input capacitors C103 for the MAX17625 and C203 for the MAX17626 serve to reduce the current peaks drawn from the input power supply and reduce switching frequency ripple at the input. Refer to the Input Capacitor Selection section in the MAX17625/MAX17626 data sheet to choose input capacitance. A 2.2μF/10V input capacitor is chosen for both the MAX17625 and MAX17626.

## Hot Plug-In and Long cables

The  MAX17625/MAX17626 EV kits PCB provides  optional Tantalum capacitors  (C102  for  MAX17625  and  C202  for MAX17626, 47μF/8V) to dampen input-voltage peaks and oscillations that can arise during hot plug-in and/or due to long input cables. These capacitors limit the peak voltage at the input of the device when the EV kits are powered directly from a precharged capacitive source or an industrial backplane PCB. Long input cables between the input power source and the  EV  kits  circuit  can  cause  input-voltage  oscillations  due  to  the  inductance  of  the  cables.  The  equivalent  series resistance  (ESR)  of  the  Tantalum  capacitor  helps  damp  out  the  oscillations  caused  by  long  input  cables.  Further, capacitors (C101, C104, C105 for the MAX17625 and C201, C204, C205 for the MAX17626) placed near the input of the board and near the IN pin of the converter helps in attenuating high-frequency noise.

## Table 1. EN Jumper Description (JU101, JU201)

| SHUNT POSITION   | EN PIN            | OUTPUT   |
|------------------|-------------------|----------|
| 1-2*             | Connected to V IN | Enabled  |
| 2-3              | Connected to GND  | Disabled |

*Default Position

## Table 2. MODE Jumper Description (JU102, JU202)

| SHUNT POSITION   | MODE PIN         | MODE                                       |
|------------------|------------------|--------------------------------------------|
| 1-2              | Connected to GND | Operates in PWMModeinallload conditions    |
| Not Installed*   | Unconnected      | Operates in PFMModeinlight-load conditions |

*Default Position

www.analog.com

## MAX17625/MAX17626 Evaluation Kits

## Evaluates: MAX17625/MAX17626

## MAX17625/MAX17626 Evaluation Kits

## Converters in Application

## MAX17625/MAX17626 EV Kits Performance

(V IN  = V EN  = 5V, T A  = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## Evaluates: MAX17625/MAX17626

## Converters in Application

## MAX17625/MAX17626 EV Kits Performance Report (Continued)

(V IN  = V EN  = 5V, T A  = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## MAX17625/MAX17626 Evaluation Kits

<!-- image -->

<!-- image -->

<!-- image -->

## Evaluates: MAX17625/MAX17626

## Converters in Application

## MAX17625/MAX17626 EV Kits Performance Report (Continued)

(V IN  = V EN  = 5V, T A  = +25°C, unless otherwise noted.)

IN

RT

JT

LX

UT

UT

C)

LX

5V

1V

1A

1A/

5V

10m

50

4us/div toc19

<!-- image -->

40μs/div

LOAD

toc22

WNN

RT

UT

LX

UT

X

OUT

C)

LX

40μs/div

200ns/div

## MAX17625/MAX17626 Evaluation Kits

toc20

toc23

5V/

2V/

1A

1A/

5V

10

50

X

UT

UT

C)

LX

400ns/div

2us/div toc21

toc24

W

5V

10r

50

5V

10

50

## Evaluates: MAX17625/MAX17626 Converters in Application

## MAX17625 EV Kit Bill of Materials

|   ITEM |   QTY | DESIGNATOR       | DESCRIPTION                                   | MANUFACTURER PART NUMBER   |
|--------|-------|------------------|-----------------------------------------------|----------------------------|
|      1 |     3 | C101, C104, C107 | 0.1µF±10%, 10V, X7R, ceramic capacitor (0402) | TDK C1005X7R1C104K050BC    |
|      2 |     1 | C102             | 47µF±20%, 8V, Tantalum capacitor (3528)       | Kemet T520B476M008ATE035   |
|      3 |     1 | C103             | 2.2µF±10%, 10V, X7R, ceramic capacitor (0603) | Murata GRM188R71A225KE15   |
|      4 |     1 | C105             | 150pF±5%, 100V, COG, Ceramic capacitor (0402) | TDK C1005C0G2A151J050BA    |
|      5 |     1 | C106             | 22µF±20%, 6.3V, X7R, ceramic capacitor (0805) | Murata GRM21BZ70J226ME44   |
|      6 |     1 | L101             | 1.5µH±20%, 2.7A, Inductor (2520)              | Murata DFE252012F-1R5M     |
|      7 |     1 | R101             | 18.7kΩ±1% resistor (0402)                     | Vishay CRCW040218K7FK      |
|      8 |     1 | R102             | 37.4kΩ±1% resistor (0402)                     | Vishay CRCW040237K4FK      |
|      9 |     1 | R103             | 100kΩ±1% resistor (0402)                      | Panasonic ERJ-2RKF1003X    |
|     10 |     1 | U101             | MAX17625 TDFN8-EP                             | Maxim MAX17625ATA+         |

## MAX17626 EV Kit Bill of Materials

|   ITEM |   QTY | DESIGNATOR       | DESCRIPTION                                   | MANUFACTURER PART NUMBER   |
|--------|-------|------------------|-----------------------------------------------|----------------------------|
|      1 |     3 | C201, C204, C207 | 0.1µF±10%, 10V, X7R, ceramic capacitor (0402) | TDK C1005X7R1C104K050BC    |
|      2 |     1 | C202             | 47µF±20%, 8V, Tantalum capacitor (3528)       | Kemet T520B476M008ATE035   |
|      3 |     1 | C203             | 2.2µF±10%, 10V, X7R, ceramic capacitor (0603) | Murata GRM188R71A225KE15   |
|      4 |     1 | C205             | 150pF±5%, 100V, COG, Ceramic capacitor (0402  | TDK C1005C0G2A151J050BA    |
|      5 |     1 | C206             | 10µF±10%, 10V, X7R, ceramic capacitor (0603)  | Murata GRM188Z71A106KA73   |
|      6 |     1 | L201             | 1µH±20%, 3.8A, Inductor (2520)                | Murata DFE252012F-1R0M     |
|      7 |     1 | R201             | 118kΩ±1% resistor (0402)                      | Vishay CRCW0402118KFK      |
|      8 |     1 | R202             | 37.4kΩ±1% resistor (0402)                     | Vishay CRCW040237K4FK      |
|      9 |     1 | R203             | 100kΩ±1% resistor (0402)                      | Panasonic ERJ-2RKF1003X    |
|     10 |     1 | U201             | MAX17626 TDFN8-EP                             | Maxim MAX17626ATA+         |

## MAX17625/MAX17626 Evaluation Kits

## Evaluates: MAX17625/MAX17626

## Converters in Application

## MAX17625 EV Kit Schematic Diagram

<!-- image -->

## MAX17625/MAX17626 Evaluation Kits

## Evaluates: MAX17625/MAX17626

## Converters in Application

## MAX17626 EV Kit Schematic Diagram

<!-- image -->

## MAX17625/MAX17626 Evaluation Kits

## Evaluates: MAX17625/MAX17626 Converters in Application

## MAX17625/MAX17626 Evaluation Kits

## MAX17625/MAX17626 EV Kits PCB Layout Diagrams

<!-- image -->

MAX17625/MAX17626 EV Kits PCB Layout-Top Silkscreen

MAX17625/MAX17626 EV Kits PCB Layout-Top Layer

<!-- image -->

## Evaluates: MAX17625/MAX17626 Converters in Application

## MAX17625/MAX17626 Evaluation Kits

## MAX17625/MAX17626 EV Kits PCB Layout Diagrams (continued)

MAX17625/MAX17626 EV Kits PCB Layout-Layer 2

<!-- image -->

MAX17625/MAX17626 EV Kits PCB Layout-Layer 3

<!-- image -->

## Evaluates: MAX17625/MAX17626

## Converters in Application

## MAX17625/MAX17626 EV Kits PCB Layout Diagrams (continued)

MAX17625/MAX17626 EV Kits PCB Layout-Bottom Layer

<!-- image -->

## Ordering Information

| PART NUMBER    | TYPE   |
|----------------|--------|
| MAX17625EVKIT# | EV Kit |
| MAX17626EVKIT# | EV Kit |

## Component Suppliers

| SUPPLIER        | WEBSITE           |
|-----------------|-------------------|
| Murata Americas | www.murata.com    |
| Vishay          | www.vishay.com    |
| Panasonic       | www.panasonic.com |
| TDK Corp.       | www.tdk.com       |
| Kemet           | www.kemet.com     |

## MAX17625/MAX17626 Evaluation Kits

## Evaluates:

MAX17625/MAX17626

Converters in

Application

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 12/21           | Initial Release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## MAX17625/MAX17626 Evaluation Kits