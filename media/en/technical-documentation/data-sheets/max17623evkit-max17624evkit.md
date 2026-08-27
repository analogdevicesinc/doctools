<!-- lastmod 2022-08-04 -->
## MAX17623/MAX17624 Evaluation Kits

## General Description

The  MAX17623/MAX17624  evaluation  kits  (EV  kits) provide a proven design to evaluate the performance of the  MAX17623/MAX17624  converters.  Each  of  these devices operates over an input range from 2.9V to 5.5V and delivers up to 1A output current. The devices are configured  to  demonstrate  optimum  performance  and component sizes in the EV kits.

The  MAX17623  converter  delivers  up  to  1A  at  a switching frequency of 2MHz. The converter is configured for a 1.5V output over a 2.9V to 5.5V input range.

The  MAX17624  converter  delivers  up  to  1A  at  a switching frequency of 4MHz. The converter is configured for a 3.3V output over a 3.6V to 5.5V input range.

The  EV  kits  feature  provisions  for  selecting  Mode  of operation (PWM/PFM), enabling or disabling the output and PGOOD signal. The MAX17623/MAX17624 converter data sheet provides a complete description of the  parts,  that  should  be  read  in  conjunction  with  this data sheet prior to operating the EV kits.

## EV Kits Top View

<!-- image -->

## Evaluates: MAX17623/MAX17624 Converters in Application

## Features

- 2.9V to 5.5V Input-Voltage Range
- MAX17623 Offers High 92.2% Efficiency (V IN  = 3.3V, VOUT  = 1.5V, I OUT  = 300 mA)
- MAX17624 Offers High 94.5% Efficiency (V IN  = 5V, VOUT  = 3.3V, I OUT  = 500 mA)
- Selectable PWM and PFM Modes of Operation
- Internal 1ms Soft-Start Time
- PGOOD Output with Pullup Resistor to Respective Input Voltages
- Low-Profile, Surface-Mount Components
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information at end of data sheet.

<!-- image -->

<!-- image -->

## MAX17623/MAX17624 Evaluation Kits

## Quick Start

## Configuration Diagram

Figure 1. MAX17623/MAX17624 EV Kits Setup Diagram

<!-- image -->

## Required Equipment

-  One 2.9V to 5.5V DC, 1A power supply
- Load resistors capable of sinking up to 1A at 1.5V and 3.3V
- Digital multimeter (DMM)

## Procedure

A typical bench setup for MAX17623/MAX17624 EV Kits is shown in Figure 1 .

The EV kits are fully assembled and tested. Follow the steps below to verify and test individual converters operation.

## Caution: Do not turn on power supply until all connections are completed.

1.  Disable the power supply and set the input power supply at a voltage between 2.9V and 5.5V for MAX17623, or between 3.6V to 5.5V for MAX17624.
2.  Connect the positive terminal and negative terminal of the power supply to the VIN pad and its adjacent GND pad of the converter under evaluation, respectively.
3.  Connect a maximum 1A resistive load across the VOUT pad and its nearest GND pad of the corresponding converter.
4.  Verify that shunts are installed in default position on jumpers (JU101 and JU201) (see Table 1 for details).
5.  Select the shunt position on jumpers (JU102, JU202) according to the required mode of operation (see Table 2 for details).
6.  Connect the digital multimeter (in voltage measurement mode) across the VOUT and its respective GND pad.
7.  Turn on the input power supply.
8.  Verify  that  the  digital  multimeter  displays  1.5V  for  MAX17623,  and  3.3V  for  MAX17624  output  terminal  voltages, respectively with respect to GND.

Evaluates: MAX17623/MAX17624

Converters in Application

## Detailed Description

The MAX17623/MAX17624 EV kits are designed to demonstrate the salient features of the MAX17623/MAX17624 power converters.  The  EV  kits  consist  of  typical  application  circuits  of  two  different  converters.  Each  of  these  circuits  are electrically isolated from each other and hosted on the same PCB. Each of the converters can be evaluated by powering them from their respective input terminals. Individual converter settings can be adjusted to evaluate their performance under different operating conditions.

## MODE Selection

The MAX17623/MAX17624 supports PWM and PFM modes of operation. In the EV kits, leave the jumpers (JU102, JU202) open for operating the converters in PFM mode at light-load. Install shunts to configure the converters in PWM mode. See Table 2 for jumpers (JU102 and JU202) settings.

## Adjusting Output Voltage

The MAX17623 supports a 0.8V to 1.5V adjustable output voltage and the MAX17623 EV kit output voltage is preset to 1.5V.

The MAX17624 supports a 1.5V to 3.3V adjustable output voltage and the MAX17624 EV kit output voltage is preset to 3.3V.

Output voltage can be programmed using the feedback resistive-divider from VOUT to FB to GND (R101 and R102 for MAX17623, and R201 and R202 for MAX17624). For programming the output to a different voltage, use values calculated based on the guidelines given in the MAX17623/MAX17624 converter data sheet .

## Output Capacitor Selection

X7R ceramic output capacitors are preferred due to their stability over temperature in industrial applications. The required output capacitors (C104 and C204) are selected based on the values given in the MAX17623/MAX17624 converter data sheet as 22μF/6.3V and 10μF/6.3V, respectively.

## Input Capacitor Selection

The input capacitors (C103 and C203) serve to reduce current peaks drawn from the input power supply and reduce switching frequency ripple at the input. The input capacitance must be greater than or equal to the value calculated by the equations given in the MAX17623/MAX17624 converter data sheet . Input capacitors (C103 and C203) are chosen to be 2.2μF/10V.

## Hot Plug-In and Long cables

The MAX17623/MAX17624 EV kit PCB provides optional Tantalum capacitors (C102 and C202, 47μF/8V) to dampen input-voltage peaks and oscillations that can arise during hot-plug-in and/or due to long input cables. These capacitors limit the peak voltage at the input of the device when the EV kits are powered directly from a precharged capacitive source or an industrial backplane PCB. Long input cables, between input power source and the EV kits circuit can cause inputvoltage oscillations due to the inductance of the cables. The equivalent series resistance (ESR) of the Tantalum capacitor helps damp out the oscillations caused by long input cables. Further, capacitors C101, C106, C201, C206 (0.1μF/100V) placed near the edge of the board near the input and output terminals, help in attenuating high frequency noise.

## Evaluates: MAX17623/MAX17624 Converters in Application

Evaluates: MAX17623/MAX17624

Converters in Application

## Table 1. EN Jumper Description (JU101, JU201)

| SHUNT POSITION   | EN PIN            | OUTPUT   |
|------------------|-------------------|----------|
| 1-2*             | Connected to V IN | Enabled  |
| 2-3              | Connected to GND  | Disabled |

## Table 2. MODE Jumper Description (JU102, JU202)

| SHUNT          | MODE PIN         | MODE                                          |
|----------------|------------------|-----------------------------------------------|
| 1-2            | Connected to GND | Operates in PWM Mode in all load conditions   |
| Not Installed* | Unconnected      | Operates in PFM Mode in light-load conditions |

## Ordering Information

| PART NUMBER    | TYPE   |
|----------------|--------|
| MAX17623EVKIT# | EV Kit |
| MAX17624EVKIT# | EV Kit |

## Component Suppliers

| SUPPLIER        | WEBSITE           |
|-----------------|-------------------|
| Murata Americas | www.murata.com    |
| Vishay          | www.vishay.com    |
| Panasonic       | www.panasonic.com |
| TDK Corp.       | www.tdk.com       |
| Kemet           | www.kemet.com     |

## MAX17623/MAX17624 EV Kits Performance

(V IN  = 3.3V for MAX17623, V IN  = 5V for MAX17624, T A  = 25ºC, unless otherwise noted.)

(LOADCURRENTSTEPPEDFROM0.5ATO1A) toc08

<!-- image -->

OUT

AC)

OUT

10

50

(LOADCURRENTSTEPPEDFROM0.5ATO1A)

/oUT

AC)

OUT

40us/diy toc07

5

40us/diy

OUT

C)

UT

40us/diy toc09

50

50

## MAX17623/MAX17624 EV Kits Performance

(V IN  = 3.3V for MAX17623, V IN  = 5V for MAX17624, T A  = 25ºC, unless otherwise noted.)

<!-- image -->

toc13

(VIN=3.3V,VoUT=

EN

JT

LX

OD

200us/div

(VIn = 5V, VouT= 3.3V, ILoAD = 1A, PWM MODE)

EN

OUT

ILx

DOD

5V/

1V/

1A/

5V/

5V

2V

1A

5V

10us/div

(Vin = 3.3V, VouT = 1.5V, lLoAD= 1A, PWM MODE)

VLX

OUT

ILx

OAD

5

1A

1A

toc17

toc14

toc11

EN

OUT

Lx

DOD

RT

DUT

Lx

OAD

200μs/div

40us/diy toc16

5V

2V

1A/

5V

5V

2V

1A

1A

2us/div

EN

OUT

Lx

OD

20us/div

(VIN=3.3V,VoUT=1.5V,LOAD=1A,PWMMODE）

RT

OUT

LX

DAD

(VIn=5V,VoUT=3.3V,L0AD=1A,PWMMODE）

/LX

DUT

Lx

DAD

toc15

toc18

2us/diy toc12

5V

1V

1A

5V

5V

1V/

1A/

1A

5V

2

1A/

1A

## MAX17623/MAX17624 EV Kits Performance

(V IN  = 3.3V for MAX17623, V IN  = 5V for MAX17624, T A  = 25ºC, unless otherwise noted.)

<!-- image -->

，VOUT

5V,LOAD-0

OUT

10

toc22

/PREBIAS=2.5V,PWMMODE)

200us/div

.SV,·LOAD

200ns/div toc20

5V/

2V/

1A

5V

10r

10ms/div EN

OUT

LX

DOD

OUT

toc23

OUT

OUT

VIN

=5V，VouT=

400ns/div

4ms/div toc21

toc24

10

10

## MAX17623/MAX17624 EV Kits Bill of Materials

|   ITEM |   QTY | DESIGNATOR             | DESCRIPTION                                   | MANUFACTURER PART NUMBER   |
|--------|-------|------------------------|-----------------------------------------------|----------------------------|
|      1 |     4 | C101, C106, C201, C206 | 0.1µF±10%, 10V, X7R, ceramic capacitor (0402) | TDK C1005X5R1A104050BA     |
|      2 |     2 | C102, C202             | 47µF±20%, 8V, Tantalum capacitor (3528)       | Kemet T520B476M008ATE035   |
|      3 |     2 | C103, C203             | 2.2µF±10%, 10V, X7R, ceramic capacitor (0603) | Murata GRM188R71A225KE15   |
|      4 |     1 | C104                   | 22µF±20%, 6.3V, X7R, ceramic capacitor (0805) | Murata GRM21BZ70J226ME44   |
|      5 |     1 | C204                   | 10µF±10%, 6.3V, X7R, ceramic capacitor (0805) | Murata GRM21BR70J106K      |
|      6 |     1 | L101                   | 1.5µH±20%, 2.7A, Inductor (2520)              | Murata DFE252012F- 1R5M    |
|      7 |     1 | L201                   | 1µH±20%, 3.8A, Inductor (2520)                | Murata DFE252012F- 1R0M    |
|      8 |     1 | R101                   | 33.2kΩ±1% resistor (0402)                     | Vishay CRCW04023322FK      |
|      9 |     1 | R201                   | 118kΩ±1% resistor (0402)                      | Vishay CRCW0402118KFK      |
|     10 |     2 | R102, R202             | 37.4kΩ±1% resistor (0402)                     | Vishay CRCW040237K4FK      |
|     11 |     2 | R103, R203             | 100kΩ±1% resistor (0402)                      | Panasonic ERJ- 2RKF1003X   |
|     12 |     1 | U101                   | MAX17623 TDFN8-EP                             | MAX17623ATA+               |
|     13 |     1 | U201                   | MAX17624 TDFN8-EP                             | MAX17624ATA+               |

Evaluates: MAX17623/MAX17624

Converters in Application

## MAX17623/MAX17624 EV Kits Schematic Diagram

<!-- image -->

## MAX17623/MAX17624 EV Kits PCB Layout Diagrams

<!-- image -->

MAX17623/MAX17624 EV Kits PCB Layout-Top Silkscreen

MAX17623/MAX17624 EV Kits PCB Layout-Top Layer

<!-- image -->

## MAX17623/MAX17624 EV Kits PCB Layout Diagrams

MAX17623/MAX17624 EV Kits PCB Layout-Layer 2

<!-- image -->

MAX17623/MAX17624 EV Kits PCB Layout-Layer 3

<!-- image -->

## MAX17623/MAX17624 EV Kits PCB Layout Diagrams

MAX17623/MAX17624 EV Kits PCB Layout-Bottom Layer

<!-- image -->

## MAX17623/MAX17624 Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                            | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------|-----------------|
|                 0 | 12/20           | Release for Market Intro               | -               |
|                 1 | 12/20           | Updated the Ordering Information table | 4               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

Evaluates: MAX17623/MAX17624

## Converters in Application