<!-- lastmod 2022-08-02 -->
## MAX20079 Evaluation Kit

## General Description

The MAX20079 evaluation kit (EV kit) provides a proven design to evaluate the MAX20079 2.1MHz/400kHz highvoltage  mini-buck  converter  in  a  20-pin  Side-Wettable TQFN (SWTQFN) package. All components are rated for the  automotive  temperature  range.  Various  test  points and jumpers are included for evaluation.

MAX20079EVKIT#  comes  with  MAX20079AATP/VY+ installed (5V, 2.1MHz) and can be used to evaluate any MAX20079 variant with minimal component changes.

## Benefits and Features

- 3.5V to 36V Input Supply Range
- 5V or 3.3V Fixed Output Voltage, or Adjustable Between 3V and 10V
- Delivers Up to 3.5A Output Current
- Frequency Synchronization Input
- Enable Input
- Voltage-Monitoring PGOOD Output
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX20079

## Quick Start

## Required Equipment

- MAX20079 EV kit
- Power Supply
- Voltmeter
- Electronic Load

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify that all jumpers are in their default positions, as shown in Table 1.
- 2) Connect  the positive and negative terminals of the  power  supply  to  the  SUP  and  GND  test  pads, respectively.
- 3) Connect the positive terminal of the voltmeter to OUT, and the negative terminal to GND2
- 4) Set the power supply to 14V and 3A current limit. Turn on the power supply.
- 5) The voltmeter should display an output voltage of 5V.
- 6) Connect an electronic load to OUT and GND2 terminals and set it to 1A.
- 7) Turn  ON  the  electronic  load  and  increase  the  current to 3.5A. The voltmeter should display the output voltage of 5V ±2%.

## Table 1. Default Jumper Settings

| JUMPER   | SHUNT POSITION   | FUNCTION                                              |
|----------|------------------|-------------------------------------------------------|
| EN       | Middle-ON        | Buck controller enabled                               |
| SPS      | Middle-OFF       | Spread spectrum disabled                              |
| J1       | Installed        | PGOOD is pulled up by VBIAS when OUT is in regulation |
| FSYNC    | Middle-FPWM      | Forced-PWM mode                                       |

<!-- image -->

## Detailed Description

The  MAX20079  EV  kit  provides  a  proven  layout  for  all variants  of  the  MAX20079  synchronous  buck  regulator. The device  accepts  input  voltages  as  high  as  36V  and delivers up to 3.5A. The EV kit can handle an input-supply transient up to 40V.

## Switching Frequency/ External Synchronization

The devices can operate in two modes: forced-PWM or Skip. Skip mode has better efficiency for light-load conditions. When SYNC is pulled low, the device operates in skip  mode  for  light  loads  and  in  PWM  mode  for  larger loads. When SYNC is pulled high, the device is forced to operate in PWM across all load conditions.

SYNC can be used to synchronize with other supplies if a clock source is present. The device is forced to operate in PWM when SYNC is connected to a clock source.

## Buck Output Monitoring (PGOOD)

The  EV  kits  provide  a  power-good  output  test  point (PGOOD) to monitor the status of the buck output (OUT). PGOOD is low impedance when the output voltage is in regulation.  PGOOD is high impedance when the output voltage  drops  below  8%  (typ)  of  its  nominal  regulated voltage.

To  obtain  a  logic  signal,  pull  up  PGOOD  to  V BIAS   by installing shunts on jumper PU.

## Evaluating Other Variants

The  EV  kit comes  installed with the fixed-output, 5V/2.1MHz variant (MAX20079AATP/VY+). The 3.3V/2.1MHz  and  400kHz  variants  (MAX20079BATP/ VY+,  MAX20079DATP/VY+,  and  MAX20079EATP/VY+) can  be  installed  with  minimal  component  changes.  For the 3.3V/2.1MHz variant, install the MAX20079AATP/VY+ on the EV kit (U1), while keeping all other components the same. For 400kHz parts, a 10μH inductor and an effective output capacitance of 44μF is recommended after derat -ing is accounted for.

## Setting the Output Voltage in Buck Converters

To  externally  adjust  the  output  voltage,  remove  R6  and install a 0Ω resistor on R3. Place appropriate resistors in positions R4 and R5 according to the following equation:

<!-- formula-not-decoded -->

where V FB = 1V (typ) and R5 = 50kΩ.

## Ordering Information

| PART           | TYPE                     |
|----------------|--------------------------|
| MAX20079EVKIT# | 5V output, 2.1MHz EV kit |

#Denotes RoHS Compliant

│

## MAX20079 EV Kit Bill of Materials

| PART                                   |   QTY | DESCRIPTION                                                                      |
|----------------------------------------|-------|----------------------------------------------------------------------------------|
| C4, C9                                 |     2 | 4.7uF ±10%, 50V X7R ceramic capacitors (1206) TDK CGA5L3X7R1H475K160AE           |
| C3                                     |     1 | 47uF, 50V aluminum electrolytic capacitor (8.3mm x 8.3mm) Panasonic EEE-FK1H470P |
| C10, C11, C12, C13                     |     4 | 10uF ±10%, 25V X7R ceramic capacitor (1206) TDK CGA5L1X7R1E106M160AC             |
| C8                                     |     1 | 1uF ±10%, 35V X7R ceramic capacitor (0603) TDK CGA3E1X7R1V105K080AC              |
| C6                                     |     1 | 0.1uF ±10% 50V X7R ceramic capacitor (0402) TDK CGA2B3X7R1H104K                  |
| C5, C7                                 |     2 | 0.1uF ±10% 50V X7R ceramic capacitor (0603) TDK CGA3E2X7R1H104M080AE             |
| C1, C2                                 |     2 | 1uF ±10% 50V X7R ceramic capacitor (0805) TDK CGA4J3X7R1H105M125AB               |
| L2                                     |     1 | 2.2uH Power Inductor Coilcraft XAL6030-222                                       |
| L1                                     |     1 | 2A Ferrite Bead (1210) Taiyo Yuden FBMH3225HM102NT                               |
| R2, R6                                 |     2 | 0Ω resistor (0402) Panasonic Electronic Components P0.0JCT-ND                    |
| R1                                     |     1 | 10kΩ ±5% resistor (0603) Panasonic Electronic Components ERA-2AED103X            |
| U1                                     |     1 | Automotive Mini-Buck (20-pin SW-TQFN) Maxim MAX20079AATP/VY+                     |
| J1                                     |     1 | 2-pin headers (0.1" spacing) Sullins PEC02SAAN                                   |
| EN, SPS, FSYNC                         |     3 | 3-pin headers (0.1" spacing) Sullins PEC03SAAN                                   |
| SUP_FILTER, SUP, VOUT, GND, GND2, GND3 |     6 | 5020, Keystone                                                                   |
| PGOOD, BIAS, FBR                       |     3 | 5012, Keystone                                                                   |
| -                                      |     4 | Shunt Jumper (0.1" spacing, Black)                                               |
| -                                      |     1 | PCB: MAX20079 EVALUATION KIT                                                     |

│

Evaluates: MAX20079

## MAX20079 EV Kit Schematic

<!-- image -->

## MAX20079 EV Kit PCB Layout Diagrams

MAX20079 EVKIT Component Placement Guide Top Silk

<!-- image -->

│

## MAX20079 EV Kit PCB Layout Diagrams (continued)

MAX20079 EVKIT Component Placement Guide Top Layer

<!-- image -->

│

## MAX20079 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX20079 EVKIT Layout Internal 2

│

## MAX20079 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX20079 EVKIT PCB Layout Internal 3

│

## MAX20079 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX20079 EVKIT Component Placement Guide Bottom

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/18           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im ,nteJrated reserves tKe riJKt to cKanJe tKe circuitry and speci¿cations ZitKout notice at any time.

│

Evaluates: MAX20079