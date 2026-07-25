<!-- lastmod 2022-08-02 -->
<!-- image -->

Evaluates: MAX25223

## General Description

The MAX25223 evaluation kit (EV kit) provides a proven design to evaluate the MAX25223 2.1MHz/400kHz highvoltage  mini-buck  converter  in  a  20-pin  side-wettable TQFN  (SW-TQFN)  package.  All  components  are  rated for the automotive temperature range. Various test points and jumpers are included for evaluation.

The MAX25223 EV kit comes with the MAX25223ATPA/VY+ installed (5V, 2.1MHz) and can be used to evaluate any MAX25223 variant with minimal component changes.

## Features

- 3.5V to 36V Input Supply Range
- 5V or 3.3V Fixed Output Voltage
- Delivers up to 3.5A Output Current
- Frequency Synchronization Input
- Enable Input
- Voltage-Monitoring PGOOD Output with Overvoltage Feature
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Table 1. Default Jumper Settings

| JUMPER   | SHUNT POSITION   | FUNCTION                                              |
|----------|------------------|-------------------------------------------------------|
| EN       | Middle-ON        | Buck controller enabled                               |
| SPS      | Middle-OFF       | Spread spectrum disabled                              |
| J1       | Installed        | PGOOD is pulled up by VBIAS when OUT is in regulation |
| FSYNC    | Middle-PWM       | Forced-PWM mode                                       |

©

owners.

## MAX25223 Evaluation Kit

## Quick Start

## Required Equipment

- MAX25223 EV kit
- Power supply
- Voltmeter
- Electronic load

## Procedure

The EV kit is fully assembled and tested. Use the following steps to verify board operation:

- 1) Verify that all jumpers are in their default positions, as shown in Table 1.
- 2) Connect the positive and negative terminals of the power supply to the SUP and GND test pads, respectively.
- 3) Connect the positive terminal of the voltmeter to VOUT, and the negative terminal to GND2.
- 4) Set the power supply to 14V and 3A current limit. Turn on the power supply.
- 5) The voltmeter should display an output voltage of 5V.
- 6) Connect an electronic load to VOUT and GND2 terminals and set it to 1A.
- 7) Turn ON the electronic load and increase the current to 3.5A. The voltmeter should display the output voltage of 5V ±2%.

## MAX25223 Evaluation Kit

## Detailed Description

The  MAX25223  EV  kit  provides  a  proven  layout  for  all variants  of  the  MAX25223  synchronous  buck  regulator. The device  accepts  input  voltages  as  high  as  36V  and delivers up to 3.5A. The EV kit can handle an input-supply transient up to 42V.

## Switching Frequency/External Synchronization

The  device  can  operate  in  two  modes:  forced-PWM  or skip. Skip mode has better efficiency for light-load conditions. When SYNC is pulled low, the device operates in skip  mode  for  light  loads  and  in  forced-PWM  mode  for larger  loads.  When  SYNC  is  pulled  high,  the  device  is forced to operate in PWM across all load conditions.

SYNC can be used to synchronize with other supplies if a clock source is present. The device is forced to operate in forced-PWM when SYNC is connected to a clock source.

## MAX25223 EV Kit Bill of Materials

| PART               |   QTY | DESCRIPTION                                                                      |
|--------------------|-------|----------------------------------------------------------------------------------|
| C4, C9             |     2 | 4.7µF ± 10%, 50V, X7R ceramic capacitors (1206) TDK CGA5L3X7R1H475K160AE         |
| C3                 |     1 | 47µF, 50V aluminum electrolytic capacitor (8.3mm x 8.3mm) Panasonic EEE-FK1H470P |
| C10, C11, C12, C13 |     4 | 10µF ±10%, 16V X7S ceramic capacitor (0805) TDK CGA4J1X7S1C106K125AE             |
| C8                 |     1 | 1µF ±10%, 35V X7R ceramic capacitor (0603) TDK CGA3E1X7R1V105K080AC              |
| C6                 |     1 | 0.1µF ±10% 50V X7R ceramic capacitor (0402) TDK CGA2B3X7R1H104K                  |
| C5, C7             |     2 | 0.1µF ±10% 50V X7R ceramic capacitor (0603) TDK CGA3E2X7R1H104M080AE             |
| C1, C2             |     2 | 1µF ±10% 50V X7R ceramic capacitor (0805) TDK CGA4J3X7R1H105M125AB               |
| L1                 |     1 | 2A ferrite bead (1210) Taiyo Yuden FBMH3225HM102NT                               |
| L2                 |     1 | 2.2µH power inductor Coilcraft XAL6030-222                                       |
| R1                 |     2 | 10kΩ ±5% resistor (0603) Panasonic Electronic Components ERA-2AED103X            |
| R2                 |     1 | 0Ω resistor (0402) Panasonic Electronic Components P0.0JCT-ND                    |
| U1                 |     1 | Automotive mini-buck (20-pin SW-TQFN) DNP                                        |

│

Evaluates: MAX25223

## Buck Output Monitoring (PGOOD)

The  EV  kit  provides  a  power-good  output  test  point (PGOOD) to monitor the status of the buck output (OUT). PGOOD is low impedance when the output voltage is in regulation.  PGOOD is high impedance when the output voltage drops below 8% (typ) of its nominal regulated voltage. To obtain a logic signal, pull up PGOOD to VBIAS by installing shunt on jumper J1.

## Evaluating Other Variants

The EV kit  comes installed  with  the  fixed-output,  5V/2.1MHz variant  (MAX25223ATPA/VY+).  The  3.3V/2.1MHz  and 400kHz  variants  can  be  installed  with  minimal  component  changes.  For  the  3.3V/2.1MHz  variant,  install  the MAX25223ATPB/VY+ on the EV kit (U1) while keeping all other components the same. For 400kHz parts, an 8.2µH inductor  and  an  effective  output  capacitance  of  44µF  is recommended after derating is accounted for.

## MAX25223 EV Kit Bill of Materials (continued)

| PART                                   |   QTY | DESCRIPTION                                     |
|----------------------------------------|-------|-------------------------------------------------|
| J1                                     |     1 | 2-pin headers (0.1in spacing) Sullins PEC02SAAN |
| EN, SPS, FSYNC                         |     3 | 3-pin headers (0.1in spacing) Sullins PEC03SAAN |
| SUP_FILTER, SUP, VOUT, GND, GND2, GND3 |     6 | 5020, Keystone                                  |
| PGOOD, BIAS, FBR                       |     3 | 5012, Keystone                                  |
| -                                      |     4 | Shunt jumper (0.1in spacing, black)             |
| -                                      |     1 | PCB: MAX25223 EV kit                            |

## Ordering Information

| PART           | TYPE                     |
|----------------|--------------------------|
| MAX25223EVKIT# | 5V output, 2.1MHz EV kit |

│

## MAX25223 Evaluation Kit

## MAX25223 EV Kit Schematic

<!-- image -->

Evaluates: MAX25223

## MAX25223 EV Kit PCB Layout Diagrams

MAX25223 EV Kit Component Placement Guide-Top Silk

<!-- image -->

MAX25223 EV Kit PCB Layout-Internal 2

<!-- image -->

MAX25233 EV Kit Component Placement Guide-Top Layer

<!-- image -->

MAX25223 EV Kit PCB Layout-Internal 3

<!-- image -->

│

## MAX25223 EV Kit PCB Layout Diagrams (continued)

MAX25223 EV Kit Component Placement Guide-Bottom Layer

<!-- image -->

MAX25223 EV Kit Component Placement-Bottom Layer

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/21           | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX25223