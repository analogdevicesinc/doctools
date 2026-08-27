<!-- lastmod 2022-11-22 -->
<!-- image -->

## Evaluates: MAX20402/MAX20403

## General Description

The MAX20403 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX20403  automotive  2.1MHz high-voltage mini-buck converter in a 15-pin, side-wettable FC2QFN package. All components are rated for the automotive  temperature  range.  Various  test  points  and jumpers are included for evaluation.

The MAX20403 EV kit comes with the MAX20403AFLB/ VY+ installed (3.3V, 2.1MHz). This EV kit can be used to evaluate  all  variants  of  the  MAX20402/MAX20403  with minimal component changes.

## Benefits and Features

- 3V to 36V Input Supply Range
- 5V or 3.3V Fixed Output Voltage, or Adjustable between 0.8V and 12V
- Delivers up to 3.5A Output Current (up to 2.5A for MAX20402)
- Frequency Synchronization Input
- 99% Duty Cycle Operation with Low Dropout
- Voltage-Monitoring PGOOD Output with UV/OV Feature
- Proven PCB Layout
- Fully Assembled and Tested

©

## MAX20403 Evaluation Kit

## MAX20403 Evaluation Kit Board

<!-- image -->

Ordering Information appears at end of data sheet.

## Quick Start

## Required Equipment

- MAX20403 EV Kit
- Power Supply
- Voltmeter
- Electronic Load

This EV kit should be used with the following documents:

- MAX20402/MAX20403 Data Sheet
- MAX20403 EV Kit Data Sheet (this document)

## Procedure

The EV kit is fully assembled and tested. Use the following steps to verify board operation:

- 1) While observing safe ESD practices, carefully remove the MAX20403 EV kit board out of its packaging. Quickly inspect the board to ensure that no damage occurred during shipment. Jumpers/shunts were preinstalled prior to testing and packaging.
- 2) Verify that all jumpers are in their default positions, as shown in Table 1.
- 3) Connect the positive and negative terminals of the power supply to the VSUP and GND2 test pads, respectively.
- 4) Connect the positive terminal of the voltmeter to VOUT, and the negative terminal to GND3.
- 5) Set the power supply to 14V and 3A current limit. Turn on the power supply.
- 6) The voltmeter should display an output voltage of 3.3V.
- 7) Connect an electronic load to the VOUT and GND3 terminals and set it to 1A.
- 8) Turn ON the electronic load and increase the current to 3.5A. The voltmeter should display the output voltage of 3.3V ±1.8%.

## Table 1. Default Jumper Settings

| JUMPER   | SHUNT POSITION   | FUNCTION                                             |
|----------|------------------|------------------------------------------------------|
| J1_EN    | Pin 1-2          | Buck controller enabled                              |
| J2_SYNC  | Pin 1-2          | Forced-PWM mode                                      |
| J3_PGOOD | Installed        | PGOOD is pulled up to BIAS when OUT is in regulation |
| J4_SPS   | Pin 1-2          | Spread spectrum disabled                             |

## Detailed Description

The  MAX20403  EV  kit  provides  a  proven  layout  for  all variants of the MAX20402/MAX20403 synchronous buck regulators. The device accepts input voltages as high as 36V and delivers up to 3.5A (2.5A for MAX20402). The EV kit can handle an input-supply transient up to 42V.

## Switching Frequency/External Synchronization

The devices can operate in two modes: Forced-PWM or Skip. Skip mode has better efficiency for light-load conditions. When SYNC is pulled low, the device operates in Skip  mode  for  light  loads  and  in  PWM  mode  for  larger loads. When SYNC is pulled high, the device is forced to operate in PWM across all load conditions.

SYNC can also be used to synchronize with an external clock. The device operates in FPWM mode when SYNC is connected to an external clock.

## Buck Output Monitoring (PGOOD)

The  EV  kit  provides  a  power-good  output  test  point (PGOOD) to monitor the status of the buck output (OUT). PGOOD is high impedance when the output voltage is in regulation.  PGOOD  is  low  impedance  when  the  output voltage drops below 7% (typ) or exceeds 5% (typ) of its nominal regulated voltage. To obtain a logic signal, pull up PGOOD to VBIAS by installing a shunt on jumper J3.

## Programming Buck Output Voltage

The MAX20402/MAX20403 each have a fixed output and an adjustable 0.8V to 12V output version. For the IC with a fixed output voltage, the FB/OUT pin acts as an output voltage sense pin (OUT). In this case, OUT is connected to the buck output to sense the output voltage. The default EV kit is set up with this connection. The EV kit comes installed  with  the  MAX20403AFLB/VY+,  which  can  provide a fixed 3.3V output voltage.

## MAX20403 Evaluation Kit

For  the  IC  with  an  adjustable  output  voltage,  the  FB/ OUT pin acts as an output voltage feedback input (FB). In  this  case,  an  external divider connected between the output, FB, and GND is used to set the output voltage. To program the output voltage, remove the R2 resistor and place the appropriate resistors in the positions of R4 and R5 according to the following equation:

<!-- formula-not-decoded -->

where V FB  = 0.8V and R5 = 10k Ω ~50k Ω , and replace the output  capacitors  C12-C17  with  appropriate  capacitors according to the adjustable tables in the data sheet.

## Ordering Information

| PART           | TYPE                       |
|----------------|----------------------------|
| MAX20403EVKIT# | 3.3V output, 2.1MHz EV kit |

# Denotes RoHS compliant.

## Evaluates: MAX204/MAX2043

A feed-forward capacitor C19 in parallel with R4 is also recommended for the adjustable output voltage version. Refer to the MAX20402/MAX20403 IC data sheet for the C19 value.

## Evaluating Other Variants

The MAX20403  EV kit comes installed with the 3.3V/2.1MHz,  3.5A  variant  (MAX20403AFLB/VY+).  The other  MAX20402/MAX20403  variants  can  be  installed with minimal component changes.

│

## MAX20403 Evaluation Kit

## MAX20403 EV Kit Bill of Materials

| PARTS COMMON TO ALL VARIANTS              | PARTS COMMON TO ALL VARIANTS   | PARTS COMMON TO ALL VARIANTS   | PARTS COMMON TO ALL VARIANTS   | PARTS COMMON TO ALL VARIANTS                                              |
|-------------------------------------------|--------------------------------|--------------------------------|--------------------------------|---------------------------------------------------------------------------|
| REF DES                                   | MFG PART #                     | MANUFACTURER                   | VALUE                          | DESCRIPTION                                                               |
| C0                                        | CGA3E3X7R1H474K080AE           | TDK                            | 0.47µF                         | 0.47µF ± 10% 50V Ceramic Capacitor X7R 0603                               |
| C1, C2, C3                                | CGA3E2X7R1H104K080AE           | TDK                            | 0.1µF                          | 0.1µF ±10% 50V Ceramic Capacitor X7R 0603                                 |
| C4                                        | EEE-TG1H220P                   | PANASONIC                      | 22µF                           | 22µF ±20% 50V Aluminum-Electrolytic Capacitor                             |
| C5, C10                                   | C2012X7R1H225K125AC            | TDK                            | 2.2µF                          | 2.2µF ±10% 50V Ceramic Capacitor X7R 0805                                 |
| C7                                        | CGA2B3X7R1H104M050BB           | TDK                            | 0.1µF                          | 0.1µF ±20% 50V Ceramic Capacitor X7R 0402                                 |
| C8                                        | GRM188Z71C225KE43              | MURATA                         | 2.2µF                          | 2.2µF ±10% 16V Ceramic Capacitor X7R 0603                                 |
| C21, C22                                  | GRM21BZ71H475KE15              | MURATA                         | 4.7µF                          | 4.7µF ±10% 50V Ceramic Capacitor X7R 0805                                 |
| GND, GND2- GND5, VOUT, VSUP, VSUP_ FILTER | 5020                           | KEYSTONE                       | N/A                            | Test Point Diameter 0.094 inches                                          |
| J1_EN, J2_SYNC, J4_SPS                    | PEC03SAAN                      | SULLINS                        | N/A                            | Connector Male Through Hole 3 Pin                                         |
| J3_PGOOD                                  | PEC02SAAN                      | SULLINS                        | N/A                            | Connector Male Through Hole 2 Pin                                         |
| BIAS, EN, PGOOD, SYNC                     | 5012                           | KEYSTONE                       | N/A                            | Test Point Pin Diameter 0.125 inches                                      |
| L1                                        | TAIYO YUDEN                    | FBMH3225HM102NT                | 1k Ω                           | 1k Ω Ferrite Bead 1210                                                    |
| L2                                        |                                |                                | SHORT                          |                                                                           |
| MH1-MH4                                   | 9032                           | KEYSTONE                       |                                | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON |
| R1                                        | CRCW040220K0FK                 | VISHAY DALE                    | 20k Ω                          | 20k Ω 1% 0.063W Resistor 0402                                             |
| R2, R3                                    | CRCW06030000Z0EAHP             | VISHAY DRALORIC                | 0                              | 0Ω 1% 0.25W Resistor 0603                                                 |

│

Evaluates: MAX204/MAX2043

## MAX20403 EV Kit Bill of Materials (continued)

| MAX20402: 2.1MHz FIXED-OUTPUT VARIANT   | MAX20402: 2.1MHz FIXED-OUTPUT VARIANT   | MAX20402: 2.1MHz FIXED-OUTPUT VARIANT   | MAX20402: 2.1MHz FIXED-OUTPUT VARIANT   | MAX20402: 2.1MHz FIXED-OUTPUT VARIANT                         |
|-----------------------------------------|-----------------------------------------|-----------------------------------------|-----------------------------------------|---------------------------------------------------------------|
| REF DES                                 | MFG PART #                              | MANUFACTURER                            | VALUE                                   | DESCRIPTION                                                   |
| L3                                      | XGL4020-222ME                           | COILCRAFT                               | 2.2µH                                   | 2.2µH ±20% 6.7A 19.5m Ω 4.0mm x 4.0mm shielded power inductor |
| C12, C13, C17                           | CGA4J1X7S1C106K125                      | TDK                                     | 10µF                                    | 10µF ±10% 16V Ceramic Capacitor X7S 0805                      |

| MAX20402: 400kHz FIXED-OUTPUT VARIANT   | MAX20402: 400kHz FIXED-OUTPUT VARIANT   | MAX20402: 400kHz FIXED-OUTPUT VARIANT   | MAX20402: 400kHz FIXED-OUTPUT VARIANT   | MAX20402: 400kHz FIXED-OUTPUT VARIANT                          |
|-----------------------------------------|-----------------------------------------|-----------------------------------------|-----------------------------------------|----------------------------------------------------------------|
| REF DES                                 | MFG PART #                              | MANUFACTURER                            | VALUE                                   | DESCRIPTION                                                    |
| L3                                      | XAL5050-822ME                           | COILCRAFT                               | 8.2µH                                   | 8.2µH ±20% 4.5A 31.8mΩ 5.48mm x 5.48mm shielded power inductor |
| C12, C13, C15, C16, C17                 | CGA4J1X7S1C106K125                      | TDK                                     | 10µF                                    | 10µF ±10% 16V Ceramic Capacitor X7S 0805                       |

| MAX20403: 3MHz FIXED-OUTPUT VARIANT   | MAX20403: 3MHz FIXED-OUTPUT VARIANT   | MAX20403: 3MHz FIXED-OUTPUT VARIANT   | MAX20403: 3MHz FIXED-OUTPUT VARIANT   | MAX20403: 3MHz FIXED-OUTPUT VARIANT                         |
|---------------------------------------|---------------------------------------|---------------------------------------|---------------------------------------|-------------------------------------------------------------|
| REF DES                               | MFG PART #                            | MANUFACTURER                          | VALUE                                 | DESCRIPTION                                                 |
| L3                                    | XGL4020-102ME                         | COILCRAFT                             | 1.0µH                                 | 1.0µH ±20% 8.8A 8.2mΩ 4.0mm x 4.0mm shielded power inductor |
| C12, C17                              | CGA4J1X7S1C106K125                    | TDK                                   | 10µF                                  | 10µF ±10% 16V Ceramic Capacitor X7S 0805                    |

| MAX20403: 2.1MHz FIXED-OUTPUT VARIANT   | MAX20403: 2.1MHz FIXED-OUTPUT VARIANT   | MAX20403: 2.1MHz FIXED-OUTPUT VARIANT   | MAX20403: 2.1MHz FIXED-OUTPUT VARIANT   | MAX20403: 2.1MHz FIXED-OUTPUT VARIANT                        |
|-----------------------------------------|-----------------------------------------|-----------------------------------------|-----------------------------------------|--------------------------------------------------------------|
| REF DES                                 | MFG PART #                              | MANUFACTURER                            | VALUE                                   | DESCRIPTION                                                  |
| L3                                      | XGL4020-152ME                           | COILCRAFT                               | 1.5µH                                   | 1.5µH ±20% 8.0A 13.0mΩ 4.0mm x 4.0mm shielded power inductor |
| C12, C13, C17                           | CGA4J1X7S1C106K125                      | TDK                                     | 10µF                                    | 10µF ±10% 16V Ceramic Capacitor X7S 0805                     |

| MAX20403: 400kHz FIXED-OUTPUT VARIANT   | MAX20403: 400kHz FIXED-OUTPUT VARIANT   | MAX20403: 400kHz FIXED-OUTPUT VARIANT   | MAX20403: 400kHz FIXED-OUTPUT VARIANT   | MAX20403: 400kHz FIXED-OUTPUT VARIANT                          |
|-----------------------------------------|-----------------------------------------|-----------------------------------------|-----------------------------------------|----------------------------------------------------------------|
| REF DES                                 | MFG PART #                              | MANUFACTURER                            | VALUE                                   | DESCRIPTION                                                    |
| L3                                      | XAL5050-682ME                           | COILCRAFT                               | 6.8µH                                   | 6.8µH ±20% 4.7A 26.8mΩ 5.48mm x 5.48mm shielded power inductor |
| C12, C13, C15, C16, C17                 | CGA4J1X7S1C106K125                      | TDK                                     | 10µF                                    | 10µF ±10% 16V Ceramic Capacitor X7S 0805                       |

│

Evaluates: MAX204/MAX2043

## MAX20403 Evaluation Kit

## MAX20403 EV Kit Schematic

<!-- image -->

## MAX20403 EV Kit PCB Layout Diagrams

MAX20403 Evaluation Kit Layout-Top Silk Layer

<!-- image -->

MAX20403 Evaluation Kit Layout-Top Silk Layer

<!-- image -->

MAX20403 Evaluation Kit Layout-Bottom Layer

<!-- image -->

MAX20403 Evaluation Kit Layout-Bottom Silk Layer

<!-- image -->

│

## MAX20403 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX20403 Evaluation Kit Layout-Internal Layers Are Ground Planes

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/22            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX204/MAX2043