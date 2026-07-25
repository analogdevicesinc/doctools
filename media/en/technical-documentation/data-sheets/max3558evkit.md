<!-- lastmod 2022-08-02 -->
## General Description

The MAX3558 evaluation kit (EV kit) simplifies evaluation of the broadband LNA. It enables testing of the device's RF performance and requires no additional support circuitry.  The  signal  inputs  and  outputs  use  F-connectors to  simplify  the  connection of RF test equipment. Each output includes a balun for differential-to-single-ended conversion. The EV kit is fully assembled and tested.

<!-- image -->

<!-- image -->

## Features

- ♦ 75 Ω F-Connector Ports for Easy Testing
- ♦ Output Baluns Included for Easy Testing
- ♦ Jumpers for AGC and SHDN
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE IC PACKAGE                   |
|--------------|-----------------------------------------|
| MAX3558EVKIT | 0 ° C to +70 ° C 28 QFN-EP* (5mm x 5mm) |

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE           |
|-------------|--------------|--------------|-------------------|
| AVX         | 843-448-9411 | 803-626-3123 | www.avxcorp.com   |
| Coilcraft   | 847-639-6400 | 803-639-1469 | www.coilcraft.com |
| Murata      | 770-436-1300 | 770-436-3030 | www.murata.com    |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com   |
| TOKO        | 847-297-0070 | 847-699-7864 | www.toko.com      |

Note: Please indicate that you are using the MAX3558 when contacting these component suppliers.

| DESIGNATION                          |   QTY | DESCRIPTION                                 |
|--------------------------------------|-------|---------------------------------------------|
| C1N-C4N, C1P-C4P, CINP, CPD, CA1-CA4 |    14 | 0.01µF capacitors (0603)                    |
| CM                                   |     1 | Not installed                               |
| CINN                                 |     1 | 0.01µF capacitor (0402)                     |
| C1-C4                                |     4 | 1000nF capacitors (0603)                    |
| C6                                   |     1 | 33µF tantalum capacitor                     |
| C7                                   |     1 | 2.2µF tantalum capacitor                    |
| C8                                   |     1 | 0.1µF tantalum capacitor                    |
| R1, R4, R21, R31, R41                |     5 | 86.6 Ω ±1% resistors (0603) (not installed) |
| R2, R3, R22, R32, R42                |     5 | 0 Ω 0603 resistors                          |
| RA1                                  |     1 | 1k Ω ±1% 0603 resistor                      |
| RA10                                 |     1 | 10k Ω ±1% 0603 resistor                     |

## Component List

| DESIGNATION     |   QTY | DESCRIPTION                                  |
|-----------------|-------|----------------------------------------------|
| RB              |     1 | 1.1k Ω ±1% resistor (0603)                   |
| LINP            |     1 | 5.1nH inductor (0603)                        |
| LB              |     1 | 82nH inductor (0603)                         |
| FL1             |     1 | 470 Ω EMI filter Murata BLM21AG471S          |
| T1-T4           |     4 | Balun transformers Pulse CX2038              |
| U1              |     1 | MAX3558CGI                                   |
| JPA1-JPA4, JPPD |     5 | 2-pin headers                                |
| JPRA, JPS1-JPS4 |     5 | 3-pin headers                                |
| TP1, GND, VCC   |     3 | Test points                                  |
| OUT1-OUT4, RFIN |     5 | F-connectors Duplex CSA, Ltd. F-P225GD/D-DPX |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX3558 Evaluation Kit

## Quick Start

The MAX3558 EV kit is fully assembled and factory tested. Follow the instructions in the Connections and Setup section for proper device evaluation. Figure 1 shows the schematics. Figures 2-7 are component placement guides and PC board layouts.

## Test Equipment Required

- An RF signal generator capable of delivering +13dBm of output power up to 900MHz
- A spectrum analyzer covering the operating frequency range of the device
- A +4.75V to +5.25V power supply that can source 500mA
- A 0 to +3V adjustable DC supply that can source 1mA for AGC input
- A voltmeter or multimeter for monitoring the powerdetector output
- (Optional) An ammeter for measuring supply current
- (Optional) A network analyzer for measuring gain and return loss

## Connections and Setup

This section provides a step-by-step guide to operating the EV kit and testing the device's functions. Do not turn on any DC power or RF signal generator until all connections are completed.

## LNA Output Testing

- 1) Make sure there are shunts installed on JPS2, JPS3, and JPS4 in the OFF position, and a shunt in the ON position for JPS1. This setting activates OUT1 while turning off the remaining outputs.
- 2) Connect a DC power supply, preset to +5.0V, to VCC (through an ammeter if desired), and GND terminals on the EV kit. If available, set the current limit to 400mA.
- 3) Connect an adjustable DC power supply, preset to +0V, to the JPA1 jumper and GND terminals on the EV kit. If available, set the current limit to 1mA. The JPA1 is the AGC1 input.
- 4) Connect the RF signal generator to the RFIN Fconnector. Do not turn on the generator's output. Set the generator for an output frequency of 50MHz. Set the level to +15dBmV.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 5) Connect the spectrum analyzer to the OUT1 Fconnector. Set the center frequency to 50MHz and set the span to 5MHz.
- 6) Turn on the DC power supplies and the RF signal generator.
- 7) Slowly increase the adjustable supply to +3V for the gain control.
- 8) You should see the output signal on the spectrum analyzer. Adjust the voltage on the JPA1 pin to observe the gain-control range.
- 9) When measuring the gain, be sure to account for balun losses (0.08dB at 50MHz), cable losses, and circuit board losses (0.1dB).
- 10) Repeat the steps for output OUT2 to OUT4, if desired.
- 11) (Optional) Another method for determining gain is by using a network analyzer. This has the advantage of displaying gain over a swept frequency band and input power. Refer to the network analyzer manufacturer's user manual for setup details.

## Power-Detector Testing

- 1) If  connected, remove the adjustable DC power supply connected to the JPA1.
- 2) Make sure there are shunts on JPPD, JPA1, JPRA (either side), and JPS1 is in the ON position.
- 3) Vary the signal generator's output power to observe the LNA's output power. Once the input power reaches the attack point, the LNA's output power should be relatively constant.

## Layout

The EV kit PC board can serve as a guide for layout using the MAX3558. Keep traces carrying RF signals as short as possible to minimize radiation and insertion loss due to the PC board. Keep the differential output traces together and of equal length to ensure signal amplitude balance. Solder the entire bottom side exposed paddle evenly to the board ground plane.

<!-- image -->

## MAX3558 Evaluation Kit

Figure 1. MAX3558 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3558 Evaluation Kit

Figure 2. MAX3558 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 3. MAX3558 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX3558 EV Kit PC Board Layout-Ground Plane 2

<!-- image -->

## MAX3558 Evaluation Kit

Figure 4. MAX3558 EV Kit PC Board Layout-Ground Plane 1

<!-- image -->

Figure 6. MAX3558 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5