<!-- lastmod 2022-08-03 -->
## General Description

The MAX9583 evaluation kit (EV kit) is an assembled and tested PCB that demonstrates the MAX9583 dualchannel, standard-definition video filter amplifier with DC-coupled inputs. The EV kit operates from 2.7V to 3.6V with a fixed gain of 2V/V.

## Component List

| DESIGNATION              |   QTY | DESCRIPTION                                                                                              |
|--------------------------|-------|----------------------------------------------------------------------------------------------------------|
| C1                       |     1 | 10µF ±20%, 6.3V X7R ceramic capacitor (0805) Murata GRM21BR70J106K                                       |
| C2                       |     1 | 0.1µF ±10%, 16V X7R ceramic capacitor (0603) Taiyo Yuden EMK107BJ104KA TDK C1608X7R1C104KT or equivalent |
| C3, C4                   |     0 | Not installed, aluminum electrolytic capacitors (6.3mm x 6.0mm)                                          |
| IN_A, IN_B, OUT_A, OUT_B |     4 | 75 Ω BNC PCB-mount jack connectors                                                                       |
| R1-R4                    |     4 | 75 Ω ±1% resistors (0603)                                                                                |
| R5, R6                   |     2 | 0 Ω ± 5% resistors (0603)                                                                                |
| U1                       |     1 | MAX9583AZT+T (6-pin Thin SOT23) Top Mark: AADJ                                                           |
| -                        |     1 | PCB: MAX9583 Evaluation Kit+                                                                             |

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE               |
|-----------------------|--------------|-----------------------|
| Murata Mfg. Co., Ltd. | 770-436-1300 | www.murata.com        |
| Taiyo Yuden           | 800-348-2496 | www.t-yuden.com       |
| TDK Corp.             | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX9583 when contacting these component suppliers.

<!-- image -->

## Features

- ♦ 2.7V to 3.6V Single-Supply Operation
- ♦ 7MHz ±1dB Passband
- ♦ 62dB Attenuation at 27MHz
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE    | IC PACKAGE   |
|---------------|---------------|--------------|
| MAX9583EVKIT+ | 0°C to +70°C* | 6 Thin SOT23 |

## Quick Start

## Recommended Equipment

- A DC power supply capable of supplying a voltage between 2.7V to 3.6V at 500mA
- Video signal generator
- Video measurement equipment (e.g., Tektronix VM700T or equivalent)

## Procedure

The MAX9583 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Connect the power supply to the pads labeled VDD and GND on the MAX9583 EV kit.
- 2) Connect the desired test signals from the video signal generator to the IN\_A and IN\_B BNC connectors. The video signals at IN\_A and IN\_B must be between 0 and 1V, approximately.
- 3) Connect the output signals from the OUT\_A and OUT\_B BNC connectors to the inputs of the video measurement equipment.
- 4) Turn on the power supply and verify the output signals.

## MAX9583 Evaluation Kit

## Detailed Description

The MAX9583 EV kit demonstrates the MAX9583 lowpower, dual-channel video filter amplifier with integrated reconstruction filters. The EV kit operates from 2.7V to 3.6V with a fixed gain of 2V/V.

The MAX9583 has ±1dB (typ) passband flatness of 7MHz and 62dB attenuation at 27MHz and the outputs can be DC-coupled to a load of 75 Ω ,  which is  the equivalent of two video loads, or AC-coupled to a load of 150 Ω .

## AC-Coupling the Output

The outputs of the MAX9583 can be AC-coupled. To keep the highpass formed by the 150 Ω equivalent resistance of the video transmission line to a corner frequency of 4.8Hz or lower, remove the 0 Ω resistors on R5 and R6 and install ≥ 220µF coupling capacitors on C3 and C4 pads.

Figure 1. MAX9583 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX9583 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX9583 Evaluation Kit

Figure 3. MAX9583 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX9583 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Janet Freed

3