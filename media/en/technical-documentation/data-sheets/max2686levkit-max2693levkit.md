<!-- lastmod 2022-08-04 -->
## MAX2686L/MAX2693L Evaluation Kit

## General Description

The  MAX2686L/MAX2693L  evaluation  kits  (EV  kits) simplify  the  evaluation  of  the  MAX2686L/MAX2693L GPS/GNSS  low-noise  amplifiers  (LNAs).  They  enable testing  of  the  device's  RF  performance  and  require  no additional  supporting  circuitry.  The  EV  kits  provide  50Ω SMA connectors for inputs and outputs.

## Features

- Easy Evaluation of MAX2686L/MAX2693L IC
- 1.6V to 4.2V Single-Supply Operation
- RF Input and Output Matched to 50Ω
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX2686L/MAX2693L

## Quick Start

The MAX2686L/MAX2693L EV kits are fully assembled and factory tested. Follow the instructions in the Connections and Setup section to test the devices.

## Required Equipment

This  section  lists  the  recommended  test  equipment  to verify  the  operation  of  the  MAX2686L/MAX2693L.  The equipment's  listed  are  intended  as  suggestions  and substitutions are possible:

- MAX2686L/MAX2693L EV kit
- One DC power supply capable of delivering +2.85V and 50mA of current
- One RF signal generator capable of delivering  RF power as high as 0dBm at 1575.42MHz (E4433B or equivalent)
- One RF spectrum analyzer that covers the MAX2686L/MAX2693L operating frequency range (FSEB20 or equivalent)
- One power meter capable of measuring up to 0dBm at 1575.42MHz (Agilent E4419B or equivalent)
- Two 50Ω SMA cables
- One ammeter (optional)
- One noise figure meter (optional)
- One network analyzer (optional)

<!-- image -->

## MAX2686L/MAX2693L Evaluation Kit

## Connections and Setup

This section is a step-by-step guide to operating the EV kits  and  describes  their  function. Caution: Do not turn on  the  DC  power  or  RF  signal  generators  until  all connections are completed.

## Checking Power Gain

- 1) With the DC supply output disabled, connect a +2.85V power supply to the V CC header and the power supply ground the GND header of the EV kit (route the positive terminal of the power supply through an ammeter, if desired).
- 2) Place a jumper between pins 2 and 3 on SHDNB (pin 1 closet to the RF OUT SMA port).
- 3) With the RF signal generator output disabled, connect the generator output to the RFIN SMA connector on the EV kit through an SMA cable. Set the output of the RF signal generator frequency to 1575.42MHz and power level to -25dBm.

## Component Suppliers

| SUPPLIER                             | WEBSITE                   |
|--------------------------------------|---------------------------|
| AVX/Kyocera                          | www.avx.com               |
| Digi-Key                             | www.digikey.com           |
| Johnson/Cinch Connectivity Solutions | www.johnsoncomponents.com |
| Keystone                             | www.keyelco.com           |

Note: Indicate that you are using the MAX2686L/MAX2693L when contacting these component suppliers.

## Component Information, PCB Layout, and Schematics

See the following links for component information, PCB layout diagrams, and schematics.

- MAX2686L EV BOM
- MAX2693L EV BOM
- MAX2686L/MAX2693L EV PCB Layout
- MAX2686L EV Schematic
- MAX2693L EV Schematic

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX2686LEVKIT# | EV Kit |
| MAX2693LEVKIT# | EV Kit |

Evaluates: MAX2686L/MAX2693L

- 4) Connect a spectrum analyzer to the RFOUT SMA connector on the EV kit through an SMA cable. Set the spectrum analyzer center frequency to 1575.42MHz, reference level to 0dBm, and span to 1MHz.
- 5) Enable the DC supply output. The supply current should read approximately 1.8mA.
- 6) Enable the RF signal generator output. The spectrum analyzer should displays a tone at 1575.42MHz with power level at approximately -7dBm.

## Layout Issues

A good printed circuit board (PCB) is an essential part of RF circuit design.  The EV kit PCB can serve as a guide for  laying  out  a  board  using  the  MAX2686L/MAX2693L. Use  controlled  impedance  lines  on  all  high-frequency inputs and outputs. Bypass V CC with decoupling capacitors located  close  to  the  device.  For  long  V CC lines,  it  may be  necessary  to  add  decoupling  capacitors.  Positioning these additional capacitors farther away from the device package minimizes supply coupling. Proper grounding of the GND pins is essential. Connect the GND pins to the ground plane either directly, with throughputs, or both.

## MAX2686L/MAX2693L

## Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/16            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at w.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX2686L/MAX2693L

| EVKit Part Number: MAX2686LEVKIT#   | EVKit Part Number: MAX2686LEVKIT#   | EVKit Part Number: MAX2686LEVKIT#   | EVKit Part Number: MAX2686LEVKIT#   | EVKit Part Number: MAX2686LEVKIT#   | EVKit Part Number: MAX2686LEVKIT#     | EVKit Part Number: MAX2686LEVKIT#   |
|-------------------------------------|-------------------------------------|-------------------------------------|-------------------------------------|-------------------------------------|---------------------------------------|-------------------------------------|
| Revision: A                         | Revision: A                         | Revision: A                         | Revision: A                         | Revision: A                         | Revision: A                           | Revision: A                         |
| Date Last Edited: 3-28-12           | Date Last Edited: 3-28-12           | Date Last Edited: 3-28-12           | Date Last Edited: 3-28-12           | Date Last Edited: 3-28-12           | Date Last Edited: 3-28-12             | Date Last Edited: 3-28-12           |
| Associated schematic: 2686L_A       | Associated schematic: 2686L_A       | Associated schematic: 2686L_A       | Associated schematic: 2686L_A       | Associated schematic: 2686L_A       | Associated schematic: 2686L_A         | Associated schematic: 2686L_A       |
| Associated Layout: 2686L_A          | Associated Layout: 2686L_A          | Associated Layout: 2686L_A          | Associated Layout: 2686L_A          | Associated Layout: 2686L_A          | Associated Layout: 2686L_A            | Associated Layout: 2686L_A          |
| Reference Item                      | Reference Item                      | Qt y V alue                         | Qt y V alue                         | Tolerance                           | Description                           | Number Part                         |
| 1                                   | C1                                  | 1                                   | 39pF                                | 5%                                  | Capacitor 0402                        | GRM1555C1H390J                      |
| 2                                   | C2                                  | 1                                   | 0.1uF                               | 10%                                 | Capacitor 0402                        | GRM155R71C104K                      |
| 3                                   | C3                                  | 1                                   | 10pF                                | 5%                                  | Capacitor 0402                        | GRM1555C1H100J                      |
| 4                                   | C4                                  | 1                                   | 10uF                                | 10%                                 | Case 'C' - Capacitor Tantalum         | TAJC106K016                         |
| 5                                   | C13                                 | 1                                   | 100pF                               | 5%                                  | Capacitor 0402                        | GRM1555C1H101J                      |
| 6                                   | R6                                  | 1                                   | 24.9K                               | 1%                                  | Resistor 0402                         | Only Free Lead Use                  |
| 7                                   | L1                                  | 1                                   | 7.3nH                               | 3%                                  | Inductor 0402                         | LQW15AN7N3H00                       |
| 8                                   | U1                                  | 1                                   | MAX2686L                            |                                     | LNA GPS                               | MAX2686LEWS+                        |
| 9                                   | RFOUT RFIN                          | 2                                   | Connector                           |                                     | Receptacle Jack Launch End SMA        | 142-0701-851                        |
| 10                                  | SHDNB                               | 1                                   | Header Pin 1X3                      |                                     | center mil 100 Header, In-Line Single | PEC36 SAAN                          |
| 11                                  | VCC                                 | 1                                   | Point Test                          |                                     | Mini-Red PC                           | 5000                                |
| 12                                  | GND                                 | 1                                   | Black - Point Test                  |                                     | Mini-Black PC                         | 5001                                |
|                                     | Pack-Out BOM                        |                                     |                                     |                                     |                                       |                                     |
| 13                                  |                                     | 1                                   |                                     |                                     | 7/8" x 7" x 3/16" 9 Box Brown         |                                     |
| 14                                  |                                     | 1                                   |                                     |                                     | Logo w/ESD 6" x 4" Bag ESD            |                                     |
| 15                                  |                                     | 1                                   |                                     |                                     | 5MM x 12" x 12" Foam Pink             |                                     |
| 16                                  |                                     | 1                                   |                                     |                                     | Instructions Web                      |                                     |

| EVKit Part Number: MAX2693LEVKIT#   | EVKit Part Number: MAX2693LEVKIT#   | EVKit Part Number: MAX2693LEVKIT#   | EVKit Part Number: MAX2693LEVKIT#   | EVKit Part Number: MAX2693LEVKIT#   | EVKit Part Number: MAX2693LEVKIT#     | EVKit Part Number: MAX2693LEVKIT#   | EVKit Part Number: MAX2693LEVKIT#   |
|-------------------------------------|-------------------------------------|-------------------------------------|-------------------------------------|-------------------------------------|---------------------------------------|-------------------------------------|-------------------------------------|
| Revision: A                         | Revision: A                         | Revision: A                         | Revision: A                         | Revision: A                         | Revision: A                           | Revision: A                         | Revision: A                         |
| Date Last Edited: 3-28-12           | Date Last Edited: 3-28-12           | Date Last Edited: 3-28-12           | Date Last Edited: 3-28-12           | Date Last Edited: 3-28-12           | Date Last Edited: 3-28-12             | Date Last Edited: 3-28-12           | Date Last Edited: 3-28-12           |
| Associated schematic: 2693L_A       | Associated schematic: 2693L_A       | Associated schematic: 2693L_A       | Associated schematic: 2693L_A       | Associated schematic: 2693L_A       | Associated schematic: 2693L_A         | Associated schematic: 2693L_A       | Associated schematic: 2693L_A       |
| Associated Layout: 2693L_A          | Associated Layout: 2693L_A          | Associated Layout: 2693L_A          | Associated Layout: 2693L_A          | Associated Layout: 2693L_A          | Associated Layout: 2693L_A            | Associated Layout: 2693L_A          | Associated Layout: 2693L_A          |
| Item Reference                      | Item Reference                      | Qty V alue                          | Qty V alue                          | Description Tolerance               | Description Tolerance                 | Manufacturer                        | Number Part                         |
| 1                                   | C1                                  | 1                                   | 39pF                                | 5%                                  | Capacitor 0402                        | Murata                              | GRM1555C1H390J                      |
| 2                                   | C2                                  | 1                                   | 0.1uF                               | 10%                                 | Capacitor 0402                        | Murata                              | GRM155R71C104K                      |
| 3                                   | C3                                  | 1                                   | 10pF                                | 5%                                  | Capacitor 0402                        | Murata                              | GRM1555C1H100J                      |
| 4                                   | C4                                  | 1                                   | 10uF                                | 10%                                 | Case 'C' - Capacitor Tantalum         | AVX                                 | TAJC106K016                         |
| 5                                   | C13                                 | 1                                   | 100pF                               | 5%                                  | Capacitor 0402                        | Murata                              | GRM1555C1H101J                      |
| 6                                   | R6                                  | 1                                   | 24.9K                               | 1%                                  | Resistor 0402                         |                                     | Only Free Lead Use                  |
| 7                                   | L1                                  | 1                                   | 12nH                                | 3%                                  | Inductor 0402                         | Murata                              | LQW15AN12NH00                       |
| 8                                   | U1                                  | 1                                   | MAX2693L                            |                                     | LNA GPS                               | Products Integrated Maxim           | MAX2693LEWS+                        |
| 9                                   | RFIN RFOUT                          | 2                                   | Connector                           |                                     | SMA End Launch Jack Receptacle        | Johnson                             | 142-0701-851                        |
| 10                                  | SHDNB                               | 1                                   | Header Pin 1X3                      |                                     | center mil 100 Header, In-Line Single | Su lins l                           | 6 PEC3 SAAN                         |
| 11                                  | VCC                                 | 1                                   | Point Test                          |                                     | Mini-Red PC                           | Keystone                            | 5000                                |
| 12                                  | GND                                 | 1                                   | Black - Point Test                  |                                     | Mini-Black PC                         | Keystone                            | 5001                                |
|                                     | Pack-Out BOM                        | Pack-Out BOM                        |                                     |                                     |                                       |                                     |                                     |
| 13                                  |                                     | 1                                   |                                     |                                     | 7/8" x 7" x 3/16" 9 Box Brown         |                                     |                                     |
| 14                                  |                                     | 1                                   |                                     |                                     | Logo w/ESD 6" x 4" Bag ESD            |                                     |                                     |
| 15                                  |                                     | 1                                   |                                     |                                     | 5MM x 12" x 12" Foam Pink             |                                     |                                     |
| 16                                  |                                     | 1                                   |                                     |                                     | Instructions Web                      |                                     |                                     |

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## MAX2686L EV Kit Schematic

<!-- image -->

## MAX2693L EV Kit Schematic