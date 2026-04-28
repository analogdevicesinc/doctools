<!-- lastmod 2023-04-27 -->
<!-- image -->

## Evaluates: MAX38647B

## General Description

The MAX38647B WLP evaluation kit (EV kit) evaluates the MAX38647B  IC  in  a  wafer-level  package  (WLP).  The MAX38647B  is  a  tiny,  1.8V  to  5.5V  Input,  440nA  IQ, 175mA nanoPower buck converter with four-level VSEL. The EV kit operates from an input range of 1.8V to 5.5V and  provides  resistor-configurable  output  voltages  from 0.5V  to  1.8V.  The  MAX38647B  can  change  voltage dynamically using two voltage-select (VSEL) pins. The EV kit  delivers  up  to  175mA  of  output  current.  The  EV  kit comes  with  the  MAX38647BANA+  installed.  For  full MAX38647B IC features, benefits, and parameters, refer to the MAX38647B data sheet.

## MAX38647B EV Kit Photo

<!-- image -->

## MAX38647B WLP Evaluation Kit

## Features

- Evaluates  the  MAX38647B  IC  in  an  (1.82mm  x 0.89mm, 0.4mm Pitch) 8-Bump WLP Package
- 1.8V to 5.5V Input Voltage Range
- 0.5V to 1.8V Configurable Output Voltage
- Up to 175mA Output Current
- Proven Two-Layer 1oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assembled and Tested

Ordering Information

- appears at end of data sheet.

## Evaluates: MAX38647B

## Quick Start

## Required Equipment

- One MAX38647B WLP EV kit
- One 5.5V, 3A DC power supply
- Load capable of sinking 175mA current
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps to verify board operation.

1.  Verify that jumpers JU1 -JU4 are in their default positions, as shown in Table 1 , Table 2 , and Table 3 .
2.  Set the input power supply voltage to 5V. Disable the power supply.
3.  Connect the positive terminal of the input power supply to the IN-terminal post and the negative terminal of the input power supply to the nearest GND terminal post.
4.  Connect the positive terminal of the 175mA load to the OUT-terminal post and the negative terminal of the load to the nearest GND terminal post.
5.  Connect the DVM between the OUT and nearest GND terminal posts.
6.  Turn on the power supply.
7.  Enable the load.
8.  Verify that the voltage at the OUT-terminal post is approximately 1.8V.

## Detailed Description of Hardware

The MAX38647B WLP EV kit evaluates the MAX38647B IC in a WLP package. The MAX38647B is a tiny, 1.8V to 5.5V Input, 440nA IQ, 175mA nanoPower buck converter with four-Level VSEL. The EV kit operates over an input range of 1.8V to 5.5V and provides resistor-configurable output voltages from 0.5V to 1.8V. The MAX38647B can change voltage dynamically using two voltage-select pins. The EV kit delivers up to 175mA of output current depending on the input voltage to the output voltage ratio. The EV kit comes with the MAX38647BANA+ installed.

The MAX38647B WLP EV kit provides a jumper JU1 to enable or disable the MAX38647B. See Table 1 for jumper JU1 settings. Also, there is a provision for setting the desired output voltage and VSEL options selection through jumpers JU2 -JU4.

## Table 1. EN (JU1)

| SHUNT POSITION   | DESCRIPTION                                                              |
|------------------|--------------------------------------------------------------------------|
| 1-2*             | MAX38647B EV Kit Output always enabled                                   |
| 1-2 1-3          | MAX38647B EV Kit controlled by external (TTL) source connected to EXT_EN |
| 1-4              | MAX38647B EV Kit Output always disabled                                  |

## Table 2. RSEL (JU4)

| SHUNT POSITION   | RSEL   | V OUT VOLTAGE LEVELS   | V OUT VOLTAGE LEVELS   | V OUT VOLTAGE LEVELS   | V OUT VOLTAGE LEVELS   |
|------------------|--------|------------------------|------------------------|------------------------|------------------------|
|                  |        | V OUT1                 | V OUT2                 | V OUT3                 | V OUT4                 |
| 1-2*             | 5.9kΩ  | 1.0                    | 1.2                    | 1.5                    | 1.8                    |
| 1-2 1-3          | 133kΩ  | 0.7                    | 0.8                    | 0.9                    | 1.0                    |
| 1-4              | 40.2kΩ | 0.8                    | 1                      | 1.2                    | 1.5                    |
| 1-5              | 267kΩ  | 0.6                    | 0.8                    | 1.0                    | 1.2                    |
| OPEN             | OPEN   | 0.5                    | 0.6                    | 0.8                    | 0.9                    |

## Evaluates: MAX38647B

## VSEL Settings

## Table 3. VSEL1 (JU2) and VSEL2 (JU3)

| VSEL1 SHUNT POSITION   | VSEL2 SHUNT POSITION   | DESCRIPTION                          |
|------------------------|------------------------|--------------------------------------|
| 1-4*                   | 1-4*                   | V OUT4 of the Selected RSEL voltages |
| 1-2                    | 1-4                    | V OUT3 of the Selected RSEL voltages |
| 1-4                    | 1-2                    | V OUT2 of the Selected RSEL voltages |
| 1-2                    | 1-2                    | V OUT1 of the Selected RSEL voltages |

## Component Suppliers

| SUPPLIER          | WEBSITE                              |
|-------------------|--------------------------------------|
| Panasonic         | https://na.industrial.panasonic.com/ |
| Taiyo Yuden       | www.ty-top.com                       |
| TDK               | www.tdk-electronics.tdk.com/         |
| Wurth Electronics | www.we-online.com                    |

Note: Indicate that you are using the MAX38647B when contacting these component suppliers.

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX38647BEVK#WLP | EV Kit |

#Denotes RoHS compliance.

## MAX38647B WLP Evaluation Kit

Evaluates: MAX38647B

## MAX38647B EV Kit Bill of Materials

|   ITEM |   QTY | REF_DES                    | DESCRIPTION                                                                                                             | MANUFACTURER PART NUMBER                                                                                                                                   |
|--------|-------|----------------------------|-------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1 |     1 | C1                         | 10µF,10%, 10V, X7R, Ceramic Capacitor (0805)                                                                            | SAMSUNG CL21B106KPQNNN; TAIYO YUDEN LMK212AB7106KG; KEMET C0805X106K8RACAUTO; MURATA GRM21BR71A106KA73; TDK C2012X7R1A106K125AC; CAL-CHIP GMC21X7R106K10NT |
|      2 |     1 | C2                         | 22µF,10%,10V, X7R, Ceramic Capacitor (1206)                                                                             | MURATA GRM31CR71A226KE15; MURATA GCM31CR71A226KE01 CAL CHIP GMC31X7R226K10NT                                                                               |
|      3 |     1 | C4                         | 100µF,20%,10V, Tantalum Capacitor (3528)                                                                                | VISHAY TR3B107M010C1400; KYOCERA AVX TPSB107M010R0400                                                                                                      |
|      4 |     4 | EXT_EN, RSEL, VSEL1, VSEL2 | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER; NOT FOR COLD TEST | N/A                                                                                                                                                        |
|      5 |     3 | GND, IN, OUT1              | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                                                                | CINCH 108-0740-001                                                                                                                                         |
|      6 |     3 | JU1-JU3                    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                               | SULLINS PEC04SAAN                                                                                                                                          |
|      7 |     1 | JU4                        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 5PINS; -65 DEGC TO +125 DEGC                                        | SULLINS PBC05SAAN                                                                                                                                          |
|      8 |     1 | L1                         | INDUCTOR,2.2µH,1.60A                                                                                                    | WÜRTH ELEKTRONIK 74479276222C                                                                                                                              |
|      9 |     2 | LX, OUT                    | CONNECTOR; WIREMOUNT; CIRCUIT BOARD TEST POINT MINIATURE PROBE; STRAIGHT; 4PINS                                         | TEKTRONIX 131-4353-00                                                                                                                                      |
|     10 |     1 | R2                         | 0Ω, JUMPER,0.1000W, Resistor (0402)                                                                                     | PANASONIC ERJ-2GE0R00                                                                                                                                      |
|     11 |     1 | R3                         | 267KΩ; 1%,0.1000W, Resistor (0603)                                                                                      | VISHAY DALE CRCW0603267KFK                                                                                                                                 |
|     12 |     1 | R4                         | 40.2KΩ, ±1%, 0.1000W, Resistor (0603)                                                                                   | VISHAY DALE CRCW060340K2FK; YAGEO RC0603FR-0740K2L; PANASONIC ERJ-3EKF4022                                                                                 |
|     13 |     1 | R5                         | 133KΩ,1%,0.1000W, Resistor (0603)                                                                                       | VISHAY DALE CRCW0603133KFK; KOA SPEER RK73H1JTTD1333F                                                                                                      |
|     14 |     1 | R6                         | 5.9KΩ,1%,0.1000W, Resistor (0603)                                                                                       | VISHAY DALE CRCW06035K90FK; PANASONIC ERJ-3EKF5901                                                                                                         |
|     15 |     4 | SU1-SU4                    | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT; PHOSPHOR BRONZE CONTACT=GOLD PLATED                | KYCON S1100-B; KYCON SX1100-B; SULLINS STC02SYAN                                                                                                           |

## MAX38647B WLP Evaluation Kit

## Evaluates: MAX38647B

|   16 |   1 | U1   | Tiny 1.8V-5.5V Input; 440nA IQ; 175mA nanoPower Buck Converter with 4 level VSEL   | MAX38647BANA+   |
|------|-----|------|------------------------------------------------------------------------------------|-----------------|
|   17 |   1 | PCB  | PCB:MAX38647BWLP                                                                   | MAX38647BWLP    |

## MAX38647B EV Kit Schematic

<!-- image -->

## Evaluates: MAX38647B

## MAX38647B EV Kit PCB Layout Diagrams

MAX38647B EV Kit PCB Layout -Top Silkscreen

<!-- image -->

MAX38647B EV Kit PCB Layout -Bottom

<!-- image -->

## MAX38647B WLP Evaluation Kit

MAX38647B EV Kit PCB Layout -Top

<!-- image -->

MAX38647B EV Kit PCB Layout -Bottom Silkscreen

<!-- image -->

Evaluates: MAX38647B

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 03/23           | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## MAX38647B WLP Evaluation Kit