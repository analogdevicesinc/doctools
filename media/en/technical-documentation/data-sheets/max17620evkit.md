<!-- lastmod 2022-08-02 -->
## MAX17620 Evaluation Kit

## General Description

The MAX17620 evaluation kit (EV kit) is a fully assembled and  tested  circuit  board  that  demonstrates  the  performance  of  the  MAX17620  high-frequency,  miniature 600mA step-down DC-DC converter. The EV kit is preset for 1.8V output at load currents up to 600mA. The EV kit features  selectable  forced-PWM/skip  mode,  open-drain PGOOD signal, and external enable (EN).

## Features

- 2.7V to 5.5V Input Voltage Range
- 1.8V Preset Output, Up to 600mA Continuous Current
- Fixed 4MHz Switching Frequency
- Internal Compensation
- External EN for On/Off Control
- 91% Peak Efficiency
- Selectable Forced-PWM/Skip Mode
- Brick Wall Current-Limit Protection
- Open-Drain PGOOD output
- Thermal Shutdown
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX17620

## Quick Start

## Recommended Equipment

- MAX17620 EV kit
- 2.7V to 5.5V, 600mA DC Power Supply
- Load capable of sinking 600mA
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below  to  verify  board  operation. Caution:  Do  not  turn on power supply until all connections are completed.

- 1) Verify that shunt is placed across 1-2 on JU1.
- 2) Select the shunt position on JU2 according to the intended mode of operation (see Table 2 for details).
- 3) Disable the power supply. Set the power supply at a voltage between 2.7V and 5.5V.
- 4) Connect the positive terminal of the power supply to the IN PCB pad and the ground terminal of the power supply to the nearest GND PCB pad.
- 5) Connect the DVM across the VOUT and GND PCB pads with the positive polarity of the DVM connected to the VOUT PCB pad.
- 6) Turn on the power supply and verify that the DVM displays 1.8V.
- 7) Connect the positive terminal of the load to the VOUT PCB pad and ground terminal of the load to the nearest GND PCB pad in the case of an electronic load. For resistive load, connect the load resistor across the VOUT and GND PCB pads.
- 8) Turn on the load and verify that the DVM still displays 1.8V.

<!-- image -->

## MAX17620 Evaluation Kit

## Detailed Description

The  MAX17620  EV  kit  is  a  fully  assembled  and  tested circuit  board  that  demonstrates  the  performance  of  the MAX17620 high-frequency,  miniature  600mA  step-down DC-DC converter. The EV kit is preset for 1.8V output at load currents up to 600mA.

The  EV  kit  includes  an  EN  PCB  pad  and  jumper  JU1 to  enable/disable  the  output.  Jumper  JU2  allows  the selection  of  a  particular  mode  of  operation  under  light loads among forced-PWM and skip modes. An additional PGOOD PCB pad is available for monitoring whether or not the converter output voltage is in regulation.

## Enable Control (JU1)

The  EN  pin  of  the  device  serves  as  an  on/off  control. Install a shunt across pins 1-2 on jumper JU1 to enable the EV kit's output. See Table 1 for proper jumper settings.

## Mode Selection (JU2)

The  device's  MODE  pin  can  be  used  to  select  among forced  PWM and skip mode under light loads. Refer to

## Table 1. Enable Control (JU1)

| SHUNT POSITION   | EN PIN           | EV KIT'S OUTPUT   |
|------------------|------------------|-------------------|
| 1-2*             | Connected to IN  | Enabled           |
| 2-3              | Connected to GND | Disabled          |

## Table 2. MODE Selection (JU2)

| SHUNT POSITION   | MODE PIN         | MODE OF OPERATION   |
|------------------|------------------|---------------------|
| 1-2              | Connected to IN  | Skip Mode           |
| 2-3              | Connected to GND | Forced-PWM Mode     |
| Open*            | Unconnected      | Skip Mode           |

## Evaluates: MAX17620

the  MAX17620  IC  data  sheet  for  more  information  on forced-PWM and skip modes of operation. Table 2 shows EV kit jumper JU2 settings that can be used to configure the desired mode of operation.

## Adjusting Output Voltage

The EV kit supports output voltages from 1.5V to 3.4V. Resistors  R1  and  R2  are  chosen  to  be  24kΩ  and 19.1kΩ,  respectively,  to  provide  a  preset  output  voltage  of  1.8V.  The  output  voltage  can  be  adjusted  by keeping  R1  fixed  at  24kΩ  and  changing  R2  using  the following equation:

<!-- formula-not-decoded -->

Table  3  summarizes  R1  and  R2  values  needed  to configure  the  EV  kit  output  for  commonly  found  supply rails.

## Table 3. Adjusting Output Voltage (R1, R2)

| R1 (kΩ)   |   R2 (kΩ) |   OUTPUT VOLTAGE (V) |
|-----------|-----------|----------------------|
| 24*       |      27.4 |                  1.5 |
| 24*       |      19.1 |                  1.8 |
| 24*       |        16 |                  2.0 |
| 24*       |      11.3 |                  2.5 |
| 24*       |      8.66 |                  3.0 |
| 24*       |      7.68 |                  3.3 |
| 24*       |      7.41 |                  3.4 |

## EV Kit Performance

(V IN  = 3.6V, T A  = +25°C, unless otherwise noted.)

1.8V OUTPUT, PWM MODE,

100

95

90

85

80

75

70

65

60

1.82

1.81

1.80

1.79

EFFICIENCY vs. LOAD CURRENT

V IN

= 4.2V

V IN

= 5.5V

V IN

= 3.6V

= 2.7V

OUTPUT  VOLTAGE  (V)

EFFICIENCY (%)

50

V IN

0

V IN

= 4.2V

200

400

TOC01

600

LOAD CURRENT (mA)

<!-- image -->

V IN

150

MODE = GND

250

350

450

550

LOAD CURRENT (mA)

1.8V OUTPUT, PWM MODE,

LOAD AND LINE REGULATION

V IN

= 5.5V

V IN

= 3.6V

= 2.7V

EFFICIENCY (%)

OUTPUT VOLTAGE (V)

100

95

90

85

80

75

70

1.830

1.825

1.820

1.815

1.810

1.805

1.800

1.795

1.790

1

0

VIN

= 4.2V

VIN

Evaluates: MAX17620

1.8V OUTPUT, PFM MODE,

EFFICIENCY vs. LOAD CURRENT

V IN

= 4.2V

V IN

= 3.6V

V IN

= 5.5V

MODE = OPEN

10

100

LOAD CURRENT (mA)

1.8V OUTPUT, PFM MODE,

LOAD AND LINE REGULATION

V IN

= 2.7V

V IN

= 5.5V

= 3.6V

200

400

600

600

LOAD CURRENT (mA)

<!-- image -->

V IN

= 2.7V

## EV Kit Performance (continued)

(V IN  = 3.6V, T A  = +25°C, unless otherwise noted.)

<!-- image -->

Evaluates: MAX17620

<!-- image -->

Figure 1. MAX17620 EV Kit Component Placement GuideComponent Side

<!-- image -->

Evaluates: MAX17620

Figure 2. MAX17620 EV Kit Solder Mask-Solder Side

<!-- image -->

Figure 3. MAX17620 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX17620 EV Kit Solder Mask-Component Side

<!-- image -->

## Component Suppliers

| SUPPLIER        | PHONE        | WEBSITE                |
|-----------------|--------------|------------------------|
| Murata Americas | 800-241-6574 | www.murataamericas.com |
| Kemet           | 877-695-3638 | www.kemet.com          |
| Vishay Dale     | 402-563-6866 | www.vishay.com         |

Note: Indicate that you are using the MAX17620 when contacting these component suppliers.

## Component List and Schematic

Refer to files 'MAX17620 EV Kit BOM.xlsx' and 'MAX17620 EV Kit Schematic.pdf' for component information.

Figure 5. MAXM17543 EV Kit PCB Layout-Solder Side

<!-- image -->

## Ordering Information

| PART           | TYPE    |
|----------------|---------|
| MAX17620EVKIT# | EV K it |

# Denotes RoHS compliant.

Evaluates: MAX17620

## MAX17620 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0axim ,ntegrated reserves the right to change the circuitry and specifications Zithout notice at any time.

Evaluates: MAX17620