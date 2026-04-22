<!-- lastmod 2023-04-25 -->
<!-- image -->

## MAX33048E Shield Evaluation Kit

## General Description

The MAX33048E Shield evaluation kit (EV kit) is a fully assembled  and  tested  printed  circuit  board  (PCB)  that demonstrates  the  functionality  of  the  MAX33048E,  a 20Mbps  full-duplex  RS-485  transceiver  with  ±25V  fault protection,  extended  -7V  to  +12V  common-mode range, and ±40kV ESD Human Body Model (HBM) for A/B and Y/Z data lines. The shield features a digital isolator which is used as a level translator between  the  RS-485 transceiver and the controller interface.

## Features

- Easy Evaluation of the MAX33048E
- I/O Interface Compatibility from 1.71V to 5.5V
- Proven PCB Layout
- Arduino ® /Arm ®  Mbed ™ Platform Compatible
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## EV Kit Photo

Evaluates: MAX33048E

## Quick Start

## Required Equipment

- MAX33048E Shield
- 3.3V or 5V, 500mA DC power supply
- Signal/function generator that can generate a 10MHz square wave signal
- Oscilloscope

## Procedure

1. Place the MAX33048E Shield EV kit on a nonconductive surface to ensure that nothing on the PCB gets shorted to the workspace.
2. Verify that all jumpers are in their default position as shown in Table 1 and Table 2 .
3. With +3.3V power supply disabled, connect the positive terminal to VCC\_EXT test point and IOREF test point. Connect the negative terminal to the GND test points (TP18 or TP20).
4. Set the function generator to output a 10MHz square wave between 0V to 3.3V.
5. Connect the positive terminal of the function generator to pin DI and negative terminal to any GND test point on the shield board.
6. Connect Driver output Y to Receiver input A and Z to B.
7. Turn on the +3.3V DC Power Supply, and then enable function generator output.

Connect oscilloscope probes on RO and verify that both signals are 10MHz, 3.3V square waves.

<!-- image -->

Evaluates: MAX33048E

Table 1. Jumper Settings

| JUMPER        | SHUNT POSITION   | DESCRIPTION                                |
|---------------|------------------|--------------------------------------------|
| JU7           | 1-2              | TVS Diode (DNI) connected to port Y        |
| JU7           | Open*            | TVS Diode (DNI) disconnected from port Y   |
| JU9           | 1-2              | TVS Diode (DNI) connected to port Z        |
| JU9           | Open*            | TVS Diode (DNI) disconnected from port Z   |
| JU10          | 1-2*             | Connects VCC pin of U1 to supply rail      |
| JU10          | Open             | Disconnects VCC pin of U1 from supply rail |
| JU11 and JU12 | 1-2*             | Connects 120Ω between Y and Z              |
| JU11 and JU12 | 2-3              | Connects 54Ω between Y and Z               |
| JU11 and JU12 | Open             | No load is connected between Y and Z       |
| JU14          | 1                | Driver output Y                            |
| JU14          | 2                | Driver output Z                            |
| JU15          | 1                | Receiver input A                           |
| JU15          | 2                | Receiver input B                           |
| JU16          | 1-2              | TVS Diode (DNI) connected to port A        |
| JU16          | Open*            | TVS Diode (DNI) disconnected from port A   |
| JU17          | 1-2              | TVS Diode (DNI) connected to port B        |
| JU17          | Open*            | TVS Diode (DNI) disconnected from port B   |
| J5            | 1-2              | VCC connects to onboard 3.3V               |
| J5            | 1-3*             | VCC connects to VCC_EXT                    |
| J5            | 1-4              | VCC connects to onboard 5.0V               |
| J5            | Open             | No supply to U1                            |

## MAX33048E Shield Evaluation Kit

Evaluates: MAX33048E

Table 2. DI and RO Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION        |
|----------|------------------|--------------------|
| JU8      | 1-2              | Connects DI to D0  |
|          | 4-5              | Connects DI to D1  |
|          | 7-8              | Connects DI to D2  |
|          | 10-11            | Connects DI to D3  |
|          | 13-14            | Connects DI to D4  |
|          | 16-17            | Connects DI to D5  |
|          | 19-20            | Connects DI to D6  |
|          | 22-23            | Connects DI to D7  |
|          | 25-26            | Connects DI to D8  |
|          | 28-29            | Connects DI to D9  |
|          | 31-32            | Connects DI to D10 |
|          | 34-35            | Connects DI to D11 |
|          | 37-38            | Connects DI to D12 |
|          | 40-41            | Connects DI to D13 |
|          | 43-44            | Connects DI to D14 |
|          | 46-47            | Connects DI to D15 |
|          | 2-3              | Connects RO to D0  |
|          | 5-6              | Connects RO to D1  |
|          | 8-9              | Connects RO to D2  |
|          | 11-12            | Connects RO to D3  |
|          | 14-15            | Connects RO to D4  |
|          | 17-18            | Connects RO to D5  |
|          | 20-21            | Connects RO to D6  |
|          | 23-24            | Connects RO to D7  |
|          | 26-27            | Connects RO to D8  |
|          | 29-30            | Connects RO to D9  |
|          | 32-33            | Connects RO to D10 |
|          | 35-36            | Connects RO to D11 |
|          | 38-39            | Connects RO to D12 |
|          | 41-42            | Connects RO to D13 |
|          | 44-45            | Connects RO to D14 |
|          | 47-48            | Connects RO to D15 |

## MAX33048E Shield Evaluation Kit

## Detailed Description of Hardware

The MAX33048E Shield EV kit is a fully assembled and tested circuit board for evaluating the MAX33048E, a faultprotected full-duplex RS-485 transceiver (U1) with ±25V of fault protection. The Shield EV kit is designed to evaluate the MAX33048E alone or in a RS-485 system. The MAX33048E Shield EV kit can also enable the Arduino or Mbed platform to communicate on a RS-485 bus. The MAX14931 digital isolator is used as a level translator with a 1.71V to 5.5V supply range. Remove the 0 Ω resistor R6 (default) to apply the transmitter input signal directly on the DI test point. Likewise, remove the 0 Ω resistor R3 (default) to measure the receiver output signal directly on the RO test point.

The shield also features an option for TVS diodes (D1/D2 and D3/D4) that can be connected to the Y/Z and A/B lines using JU16/JU17 and JU7/JU9 respectively if external protection is desired beyond the device's built -in protection.

## Powering the Board

The MAX33048E Shield EV kit requires two power supplies: one 3V to 5.5V supply for the MAX33048E (U1) transceiver applied at the VCC\_EXT test point and one 1.71V to 5.5V supply for the microcontroller domain applied at the IOREF test point. When the shield EV kit board is used with an Arduino/Mbed platform, the power supply for U1 can also come from the Arduino/Mbed platform's 3.3V or 5V rail. Place the shunt on 1 -3 position of J5 to connect V CC  to VCC\_EXT pin. Place the shunt of J5 on the 1-2 position or the 1-4 position to connect the V CC of U1 to the Arduino/Mbed platform's 3.3V or 5V supply rail. In this scenario, IOREF is directly taken from the Arduino/Mbed platform header.

## On-Board Termination

A properly terminated RS-485 bus is terminated at each end with the characteristic impedance of the cable. For CAT5 or CAT6 cables, this is typically 120Ω on each end for a 54Ω load on the RS -485 driver. The MAX33048E Shield EV kit features a selectab le 54Ω or 120Ω load circuit between the Y and Z driver outputs and fixed 120Ω between A and B receiver inputs . If the board is evaluated in a system and connected at the end of the cable, select 120Ω termination. The termination resistors on the MAX33048E Shield EV kit should be changed to 54Ω with a 100pF load to simulate a complete system load during evaluation.

## DI and RO Configuration

Digital channels for DI and RO are selected through JU8, which consists of three columns and 16 rows. The columns labeled DI and RO are connected to MAX33048E through the digital isolator (MAX14931FASE+ (U2)). The middle column contains the digital I/O pins D0 to D15 from the Arduino/Mbed platform header. This provides flexibility for the user to select different resources on the microcontroller to transmit and receive signals to and from the RS-485 transceiver. Table 2 shows the list of JU8 jumper options. For single-channel performance verification, driver input can connect to test point DI and probe to test point RO directly.

## Flexible Interface Options

The MAX33048E Shield EV kit allows multiple points of connection to the MAX33048E transceiver. The shield EV kit board can be placed on an Arduino/Mbed platform header to connect all the digital pins (DI and RO) through the J3 and J4 headers. These signals can also be connected directly at their respective test points on the board, bypassing the digital isolator (U2). The Y/Z signals are connected to a terminal block (JU4) and A/B signals to JU15 to easily connect to twisted pair cables. Alternately, the Y/Z and A/B test points can be used.

## PCB Layout for Thermal Dissipation

PCB layout can affect the performance of the transceiver in conditions with a high common-mode voltage at high ambient temperatures. The layout of the MAX33048E Shield EV kit is designed to maximize thermal performance in such cases. The GND pad is connected to a large copper plane on the top layer, with vias throughout the plane connecting to the GND plane on the bottom layer. A thick trace from the V CC  pad to JU10 allows for greater heat dissipation at the V CC  pin.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX33048ESHLD# | EV Kit |

#Denotes RoHS-compliant.

## MAX33048E Shield Evaluation Kit

Evaluates: MAX33048E

## MAX33048E Shield EV Kit Bill of Materials

|   ITEM |   QTY | REF DES                    | MFG PART #         | MANUFACTURER              | VALUE          | DESCRIPTION                                                             |
|--------|-------|----------------------------|--------------------|---------------------------|----------------|-------------------------------------------------------------------------|
|      1 |     5 | A, B, DI, Y, Z             | 5127               | KEYSTONE                  | N/A            | TEST POINT; BLUE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;             |
|      2 |     1 | C1                         | GRM155R60J106M E44 | MURATA                    | 10UF           | CAP; SMT (0402); 10UF; 20%; 6.3V; X5R; CERAMIC                          |
|      3 |     3 | C2-C4                      | C0402C104J4RAC     | KEMET;MURATA              | 0.1UF          | CAP; SMT (0402); 0.1UF; 5%; 16V; X7R; CERAMIC                           |
|      4 |     1 | C6                         | 08051A500FAT2A     | AVX                       | 50PF           | CAP; SMT (0805); 50PF; 1%; 100V; C0G; CERAMIC                           |
|      5 |     4 | D1-D4                      | SM15T30CA          | ST MICROELECTRONICS       | 25.6V          | DIODE; TVS; SMC (DO- 214AB); VRM=25.6V; IPP=36A                         |
|      6 |     1 | IOREF                      | 5125               | KEYSTONE                  | N/A            | TEST POINT; ; BROWN; NOT FOR COLD TEST                                  |
|      7 |     2 | J1, J4                     | SSQ-108-24-G-S     | SAMTEC                    | SSQ-108-24-G-S | CONNECTOR; FEMALE; THROUGH HOLE;                                        |
|      8 |     1 | J2                         | SSQ-106-24-G-S     | SAMTEC                    | SSQ-106-24-G-S | CONNECTOR; FEMALE; THROUGH HOLE;                                        |
|      9 |     1 | J3                         | SSQ-110-24-G-S     | SAMTEC                    | SSQ-110-24-G-S | CONNECTOR; FEMALE; THROUGH HOLE                                         |
|     10 |     1 | J5                         | PEC04SAAN          | SULLINS ELECTRONICS CORP. | PEC04SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS               |
|     11 |     2 | JU4, JU15                  | OSTTA024163        | ON-SHORE TECHNOLOGY INC.  | OSTTA024163    | CONNECTOR; FEMALE; THROUGH HOLE;                                        |
|     12 |     5 | JU7, JU9, JU10, JU16, JU17 | PCC02SAAN          | SULLINS                   | PCC02SAAN      | CONNECTOR; MALE; THROUGH HOLE;                                          |
|     13 |     1 | JU8                        | TSW-116-07-T-T     | SAMTEC                    | TSW-116-07-T-T | CONNECTOR; MALE; THROUGH HOLE; 0.025IN SQ POST HEADER; STRAIGHT; 48PINS |
|     14 |     2 | JU11, JU12                 | PEC03SAAN          | SULLINS                   | PEC03SAAN      | CONNECTOR; MALE; THROUGH HOLE                                           |
|     15 |     2 | R7, R10                    | CRCW0805120RFK     | VISHAY DALE               | 120            | RES; SMT (0805); 120; 1%; +/-100PPM/DEGC; 0.1250W                       |
|     16 |     2 | R8, R9                     | ERA-6AHD270        | PANASONIC                 | 27             | RES; SMT (0805); 27; 0.50%; +/-50PPM/DEGC; 0.1250W                      |
|     17 |     1 | RO                         | 5012               | KEYSTONE                  | N/A            | TEST POINT; PIN DIA=0.125IN;                                            |
|     18 |     8 | SU1, SU2, SU5, SU8- SU12   | 2SN-BK-G           | SAMTEC                    | 2SN-BK-G       | TEST POINT; JUMPER; STR                                                 |

www.analog.com

## MAX33048E Shield Evaluation Kit

## Evaluates: MAX33048E

## MAX33048E Shield Evaluation Kit

|   19 |   3 | TP18-TP20   | 5011            | KEYSTONE   | N/A           | TEST POINT; PIN DIA=0.125IN;                |
|------|-----|-------------|-----------------|------------|---------------|---------------------------------------------|
|   20 |   1 | U1          | MAX33048EASA+   | MAXIM      | MAX33048EASA+ | EVKIT PART - IC; MAX33048EASA+              |
|   21 |   1 | U2          | MAX14931CASE+   | MAXIM      | MAX14931CASE+ | IC; DISO; 3/1 CHANNEL                       |
|   22 |   1 | VCC_EXT     | 5010            | KEYSTONE   | N/A           | TEST POINT; PIN DIA=0.125IN;                |
|   23 |   1 | PCB         | MAX33048ESHIELD | MAXIM      | PCB           | PCB:MAX33048ESHIELD                         |
|   24 |   2 | R3, R6      | ERJ-2GE0R00     | PANASONIC  | NL            | RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W |

Evaluates: MAX33048E

## MAX33048E Shield EV Kit Schematic

<!-- image -->

## Evaluates: MAX33048E

## MAX33048E Shield EV Kit PCB Layout

MAX33048E Shield EV Kit PCB Layout -Top Silkscreen

<!-- image -->

MAX33048E Shield EV Kit PCB Layout -Second Layer

<!-- image -->

## MAX33048E Shield Evaluation Kit

MAX33048E Shield EV Kit PCB Layout -Top Layer

<!-- image -->

MAX33048E Shield EV Kit PCB Layout -Third Layer

<!-- image -->

Evaluates: MAX33048E

## MAX33048E Shield EV Kit PCB Layout (continued)

MAX33048E Shield EV Kit PCB Layout -Bottom Layer

<!-- image -->

<!-- image -->

MAX33048E Shield EV Kit PCB Layout -Bottom Silkscreen

<!-- image -->

## MAX33048E Shield Evaluation Kit

## Evaluates: MAX33048E

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/22            | Initial release | -               |

Arduino® is a trademark of Arduino SA

Arm and Mbed are registered trademarks or trademarks of Arm Limited (or its subsidiaries) in the US and/or elsewhere.

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## MAX33048E Shield Evaluation Kit