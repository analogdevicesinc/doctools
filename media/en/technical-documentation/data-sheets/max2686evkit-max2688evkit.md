<!-- lastmod 2022-08-04 -->
## MAX2686/MAX2688 Evaluation Kit

## General Description

The MAX2686/MAX2688 evaluation kits (EV kits) simplify the evaluation of the MAX2686/MAX2688 GPS/ GNSS low-noise amplifiers (LNAs). They enable testing of the device's RF performance and require no additional supporting  circuitry.  The  EV  kits  provide  50Ω  SMA connectors for inputs and outputs.

## Features

- Easy Evaluation of MAX2686/MAX2688 IC
- 1.6V to 3.3V Single-Supply Operation
- RF Input and Output Matched to 50Ω
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX2686/MAX2688

## Quick Start

The MAX2686/MAX2688 EV kits are fully assembled and factory tested. Follow the instructions in the Connections and Setup section to test the devices.

## Required Equipment

This  section  lists  the  recommended  test  equipment to  verify  the  operation  of  the  MAX2686/MAX2688. The equipment's listed are intended as suggestions and substitutions are possible:

- MAX2686/MAX2688 EV kit
- One DC power supply capable of delivering +2.85V and 50mA of current
- One RF signal generator capable of delivering RF power as high as 0dBm at 1575.42MHz (E4433B or equivalent)
- One RF spectrum analyzer that covers the MAX2686/MAX2688 operating frequency range (FSEB20 or equivalent)
- One power meter capable of measuring up to 0dBm at 1575.42MHz (Agilent E4419B or equivalent)
- Two 50Ω SMA cables
- One ammeter (optional)
- One noise figure meter (optional)
- One network analyzer (optional)

<!-- image -->

## MAX2686/MAX2688 Evaluation Kit

## Connections and Setup

This section is a step-by-step guide to operating the EV kits and their function. Caution: Do not turn on the DC power or RF signal generators until all connections are completed.

## Checking Power Gain

- 1) With the DC supply output disabled, connect a +2.85V power supply to the V CC header and the power supply ground the GND header of the EV kit (route the positive terminal of the power supply through an ammeter, if desired).
- 2) Place a jumper between pins 2 and 3 on SHDNB (pin 1 closet to the RF OUT SMA port).
- 3) With the RF signal generator output disabled, connect the generator output to the RFIN SMA connector on the EV kit through an SMA cable. Set the output of the RF signal generator frequency to 1575.42MHz and power level to -25dBm.
- 4) Connect a spectrum analyzer to the RFOUT SMA connector on the EV kit through an SMA cable. Set the spectrum analyzer center frequency to 1575.42MHz, reference level to 0dBm, and span to 1MHz.
- 5) Enable the DC supply output. The supply current should read approximately 4.1mA.
- 6) Enable the RF signal generator output. The spectrum analyzer should displays a tone at 1575.42MHz with power level at approximately -6dBm.

## Component Suppliers

| SUPPLIER                             | WEBSITE                   |
|--------------------------------------|---------------------------|
| Digi-Key                             | www.digikey.com           |
| Johnson/Cinch Connectivity Solutions | www.johnsoncomponents.com |
| Keystone                             | www.keyelco.com           |

## Component Information, PCB Layout, and Schematics

See the following links for component information, PCB layout diagrams, and schematics.

- MAX2686 EV BOM
- MAX2688 EV BOM
- MAX2686/MAX2688 EV PCB Layout
- MAX2686 EV Schematic
- MAX2688 EV Schematic

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX2686EVKIT+ | EV Kit |
| MAX2688EVKIT+ | EV Kit |

Evaluates: MAX2686/MAX2688

## Layout Issues

A good printed-circuit board (PCB) is an essential part of RF circuit design.  The EV kit PCB can serve as a guide for laying out a board using the MAX2686. Use controlled impedance lines on all high-frequency inputs and outputs. Bypass  V CC with  decoupling  capacitors  located  close to  the  device.  For  long  V CC lines,  it  may  be  necessary to  add  decoupling  capacitors.  Locate  these  additional capacitors  farther  away  from  the  device  package.  This minimizes supply coupling. Proper grounding of the GND pins  is  essential.  Connect  the  GND  pins  to  the  ground plane either directly, throughputs, or both.

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/16            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at w.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX2686/MAX2688

| MAX2686EVKIT+, Rev A, 08 April 2010   | MAX2686EVKIT+, Rev A, 08 April 2010   | MAX2686EVKIT+, Rev A, 08 April 2010        | MAX2686EVKIT+, Rev A, 08 April 2010   |
|---------------------------------------|---------------------------------------|--------------------------------------------|---------------------------------------|
| Reference Designators                 | Part Number                           | Description                                | Per                                   |
| C1                                    | GRM1555C1H390J                        | 0402 Capacitor 39pF 5%                     | 1                                     |
| C3                                    | GRM1555C1H100J                        | 5% 10pF Capacitor 0402                     | 1                                     |
| C2                                    | GRM155R71C104K                        | 10% 100nF Capacitor 0402                   | 1                                     |
| C4                                    | TAJC106K016                           | TANTALUM CAPACITORS, STANDARD RANGE        | 1                                     |
| C13                                   | GRM1555C1H101J                        | 5% 100pF Capacitor 0402                    | 1                                     |
| L1                                    | LQW15AN6N8H00B                        | 5% 6.8nH Inductor 0402                     | 1                                     |
| R6                                    | Use Lead-Free Parts Only              | 1% ohm 24.9k Resistor 0402                 | 1                                     |
| U1                                    | MAX2686EWS+                           | LNA GPS                                    | 1                                     |
| RFIN RFOUT                            | Johnson: 142-0701-801                 | SMA End Launch Jack Receptacle 0.062"      | 2                                     |
| SHDNB                                 | Sullins: PEC36SAAN                    | 1x3 Header, 100 mil centers                | 1                                     |
| GND VCC                               | Key 5000 stone                        | Mini-Red PC                                | 2                                     |
|                                       |                                       | 7/8 x 7 x 3/16 9 Brown Small Box           | 1                                     |
|                                       |                                       | ESD Bag, Static Shield Zip 4x6 w/esd logo  | 1                                     |
|                                       |                                       | 5 x 12 x 12 static anti Foam Pink          | 1                                     |
|                                       |                                       | WEB instructions for Maxim Data Sheet      |                                       |
|                                       |                                       | MAX2686 Evaluation Kit Circuit Board Rev 3 | 1                                     |
| MAX2688EVKIT+, Rev 3A, 08 April 2010  | MAX2688EVKIT+, Rev 3A, 08 April 2010  | MAX2688EVKIT+, Rev 3A, 08 April 2010       | MAX2688EVKIT+, Rev 3A, 08 April 2010  |
| Reference                             |                                       |                                            |                                       |
| Designators                           | Part Number                           | Description                                | Per                                   |
| C1                                    | GRM1555C1H390J                        | 5% 39pF Capacitor 0402                     | 1                                     |
| C3                                    | GRM1555C1H100J                        | 0402 Capacitor 10pF 5%                     | 1                                     |
| C2                                    | GRM155R71C104K                        | 0402 Capacitor 100nF 10%                   | 1                                     |
| C4                                    | TAJC106K016                           | TANTALUM CAPACITORS, STANDARD RANGE        | 1                                     |
| C13                                   | GRM1555C1H101J                        | 0402 Capacitor 100pF 5%                    | 1                                     |
| L1                                    | LQW15AN6N2C00                         | 0402 Inductor 6.2nH 0.2nH                  | 1                                     |
| R6                                    | Use Lead-Free Parts Only              | 0402 Resistor 24.9k ohm 1%                 | 1                                     |
| U1                                    | MAX2688EWS+                           | GPS LNA                                    | 1                                     |
| RFIN RFOUT                            | Johnson: 142-0701-801                 | SMA End Launch Jack Receptacle 0.062"      | 2                                     |
| SHDNB                                 | Sullins: PEC36SAAN                    | 1x3 Header, 100 mil centers                | 1                                     |
| GND VCC                               | Keystone 5000                         | PC Mini-Red                                | 2                                     |
|                                       |                                       | Box Small Brown 9 3/16 x 7 x 7/8           | 1                                     |
|                                       |                                       | ESD Bag, Static Shield Zip 4x6 w/esd logo  | 1                                     |
|                                       |                                       | Pink Foam anti static 12 x 12 x 5          | 1                                     |
|                                       |                                       | WEB instructions for Maxim Data Sheet      |                                       |
|                                       |                                       | MAX2688 Evaluation Kit Circuit Board Rev 3 | 1                                     |

Component Replacement Guide-Component Side

<!-- image -->

<!-- image -->

<!-- image -->

PCB Layout-Component Side

PCB Layout-Layer 3

<!-- image -->

PCB Layout-Layer 2

<!-- image -->

## MAX2686 Schematic

<!-- image -->

## MAX2688 Schematic

<!-- image -->