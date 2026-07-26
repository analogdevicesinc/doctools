<!-- lastmod 2022-08-03 -->
## General Description

The MAX9588 evaluation kit (EV kit) is an assembled and tested PCB that demonstrates the MAX9588 triplechannel, standard-definition video filter amplifier with AC-coupled inputs. The EV kit operates from 2.7V to 3.6V with a 2V/V fixed gain.

## Component List

| DESIGNATION                           |   QTY | DESCRIPTION                                                                                               |
|---------------------------------------|-------|-----------------------------------------------------------------------------------------------------------|
| C1                                    |     1 | 10µF ±10%, 6.3V X5R ceramic capacitor (0805) Murata GRM21BR60J106K TDK C2012X5R0J106K                     |
| C2-C5                                 |     4 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Taiyo Yuden EMK107BJ104KA TDK C1608X7R1C104KT or equivalent |
| C6, C7, C8                            |     0 | Not installed, aluminum electrolytic capacitors (6.3mm x 6.0mm)                                           |
| IN_A, IN_B, IN_C, OUT_A, OUT_B, OUT_C |     6 | 75 Ω BNC PCB-mount jack connectors                                                                        |
| R1-R6                                 |     6 | 75 Ω ±1% resistors (0603)                                                                                 |
| R7, R8, R9                            |     3 | 0 Ω resistors (0603)                                                                                      |
| U1                                    |     1 | MAX9588AZT+ (8-pin µMAX)                                                                                  |
| -                                     |     1 | PCB: MAX9588 Evaluation Kit+                                                                              |

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE               |
|-----------------------|--------------|-----------------------|
| Murata Mfg. Co., Ltd. | 770-436-1300 | www.murata.com        |
| Taiyo Yuden           | 800-348-2496 | www.t-yuden.com       |
| TDK Corp.             | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX9588 when contacting these component suppliers.

<!-- image -->

Features

- ♦ Triple Channel (CVBS and S-Video)
- ♦ AC-Coupled Inputs
- ♦ 7MHz ±1dB Passband
- ♦ 40dB Attenuation at 27MHz
- ♦ 2.7V to 3.6V Single-Supply Operation
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE    | IC PACKAGE   |
|---------------|---------------|--------------|
| MAX9588EVKIT+ | 0°C to +70°C* | 8 µMAX ®     |

µMAX is a registered trademark of Maxim Integrated Products, Inc.

## Quick Start

## Recommended Equipment

- A DC power supply capable of supplying a voltage between 2.7V to 3.6V at 500mA
- CVBS and S-video signal generator
- Video measurement equipment (e.g., Tektronix VM700T or equivalent)

## Procedure

The MAX9588 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Connect the power supply to the pads labeled VDD and GND on the MAX9588 EV kit.
- 2) Connect the desired test signals from the video signal generator to the IN\_A/CVBS, IN\_B/LUMA(Y), and IN\_C/CHROMA(C) BNC connectors.
- 3) Connect the output signals from the OUT\_A, OUT\_B, and OUT\_C BNC connectors to the inputs of the video measurement equipment.
- 4) Turn on the power supply and verify the output signals.

## MAX9588 Evaluation Kit

## Detailed Description

The MAX9588 EV kit demonstrates the MAX9588 lowpower, triple-channel video filter amplifier with integrated reconstruction filters. The EV kit operates from 2.7V to 3.6V with a 2V/V fixed gain.

The MAX9588 has ±1dB (typ) passband flatness at 7MHz and 40dB attenuation at 27MHz and the outputs can be DC-coupled to a 75 Ω load, which is the equivalent of two video loads, or AC-coupled to a 150 Ω load.

## AC-Coupling the Output

The output of the MAX9588 can be AC-coupled. To keep the highpass formed by the 150 Ω equivalent resistance of the video transmission line to a corner frequency of 4.8Hz or lower, remove the 0 Ω resistors on R7, R8, and R9 and install ≥ 220µF coupling capacitors on the C6, C7, and C8 pads.

Figure 1. MAX9588 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

Figure 2. MAX9588 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX9588 Evaluation Kit

Figure 3. MAX9588 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9588 Evaluation Kit

Figure 4. MAX9588 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

Janet Freed

CARDENAS