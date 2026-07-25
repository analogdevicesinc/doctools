<!-- lastmod 2022-08-03 -->
## General Description

The MAX9586 evaluation kit (EV kit) is an assembled and tested PCB that demonstrates the MAX9586 lowpower, single-channel video filter amplifier with ACcoupled input buffer. The EV kit operates from 2.7V to 3.6V with a fixed gain of 2V/V.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                               |
|---------------|-------|-----------------------------------------------------------------------------------------------------------|
| C1            |     1 | 10µF ±20%, 6.3V X7R ceramic capacitor (0805) Murata GRM21BR70J106K                                        |
| C2, C3        |     2 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Taiyo Yuden EMK107BJ104KA TDK C1608X7R1C104KT or equivalent |
| C4            |     0 | Not installed, aluminum electrolytic capacitor (6.3mm x 6.0mm)                                            |
| INPUT, OUTPUT |     2 | 75 Ω BNC PCB-mount jack connectors                                                                        |
| JU1           |     1 | 3-pin header                                                                                              |
| R1, R2        |     2 | 75 Ω ±1% resistors (0603)                                                                                 |
| R3            |     1 | 0 Ω ± 5% resistor (0603)                                                                                  |
| U1            |     1 | MAX9586AZK+ (5-pin Thin SOT23) Top Mark: ADSH                                                             |
| -             |     1 | PCB: MAX9586 Evaluation Kit+                                                                              |

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE               |
|-----------------------|--------------|-----------------------|
| Murata Mfg. Co., Ltd. | 770-436-1300 | www.murata.com        |
| Taiyo Yuden           | 800-348-2496 | www.t-yuden.com       |
| TDK Corp.             | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX9586 when contacting these component suppliers.

<!-- image -->

## Features

- ♦ 2.7V to 3.6V Single-Supply Operation
- ♦ 7MHz ±1dB Passband
- ♦ 62dB Attenuation at 27MHz
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE    | IC PACKAGE   |
|---------------|---------------|--------------|
| MAX9586EVKIT+ | 0°C to +70°C* | 5 Thin SOT23 |

## Quick Start

## Recommended Equipment

- A DC power supply capable of supplying a voltage between 2.7V to 3.6V at 500mA
- Video signal generator
- Video measurement equipment

## Procedure

The MAX9586 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all

connections are completed.

- 1) Verify that a shunt is installed on jumper JU1, pins 1-2.
- 2) Connect the power supply to the pads labeled VDD and GND on the MAX9586 EV kit.
- 3) Connect the desired test signal from the video signal generator to the INPUT BNC connector.
- 4) Connect the output signal from the OUTPUT BNC connector to the input of the video measurement equipment.
- 5) Turn on the power supply and verify the output signal.

## MAX9586 Evaluation Kit

## Detailed Description

The MAX9586 EV kit demonstrates the MAX9586 lowpower, single-channel video filter amplifier with ACcoupled input buffer. The EV kit operates from 2.7V to 3.6V with a fixed gain of 2V/V.

The MAX9586 has ±1dB (typ) passband flatness of  7MHz  and  62dB  attenuation  at  27MHz.  The output  can be DC-coupled to a load of 75 Ω ,  which is the  equivalent  of  two  video  loads,  or  AC-coupled  to  a load of 150 Ω .

## Jumper Selection

The MAX9586 EV kit incorporates a jumper (JU1) to control the SHDN pin. See Table 1 for JU1 functions.

## AC-Coupling the Output

The outputs of the MAX9586 can be AC-coupled. To keep the highpass formed by the 150 Ω equivalent resistance of the video transmission line to a corner frequency of 4.8Hz or lower, remove the 0 Ω resistor on R3 and install a ≥ 220µF capacitor on the C4 pad.

Figure 1.  MAX9586 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Table 1. JU1 Functions ( SHDN )

| SHUNT POSITION   | SHDN PIN       | EV KIT OUTPUT   |
|------------------|----------------|-----------------|
| 1-2*             | Connect to VDD | Enabled         |
| 2-3              | Connect to GND | Disabled        |

Figure 2. MAX9586 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX9586 Evaluation Kit

Figure 3. MAX9586 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX9586 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Janet Freed

3