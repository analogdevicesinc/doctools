<!-- lastmod 2022-08-02 -->
## General Description

The MAX2741 evaluation kit (EV kit) simplifies evaluation of the MAX2741 L1-band global positioning system (GPS), radio-frequency (RF), front-end receiver IC. It enables testing of the device's RF performance and requires no additional support circuitry. The EV kit's signal inputs and outputs use SMA connectors to facilitate the connection of RF test equipment.

| DESIGNATION                                           |   QTY | DESCRIPTION                                            |
|-------------------------------------------------------|-------|--------------------------------------------------------|
| C1                                                    |     1 | 2.2pF ±0.1pF (0402) capacitor Murata GRM1555C1H2R2B    |
| C2, C3, C4, C8, C10, C23, C27, C33, C47, C50-C54, C60 |    15 | 0.1µF ±10% (0402) capacitors Murata GRM155R61A104K     |
| C5, C6, C9, C11, C12, C13, C48                        |     7 | 100pF ±5% (0402) capacitors Murata GRM1555C1H101J      |
| C7, C14, C24, C25, C26, C28, C30, C31                 |     0 | Open                                                   |
| C20, C21, C32, C57, C58                               |     5 | 1000pF ±10% (0402) capacitors Murata GRM15571H102K     |
| C22                                                   |     1 | 2200pF ±10% (0402) capacitor Taiyo Yuden UMK105BJ222KW |
| C34-C38, C49                                          |     6 | 0.01µF ±10% (0402) capacitors Murata GRM155R71C103K    |
| C39, C40                                              |     2 | 39pF ±5% (0402) capacitors Taiyo Yuden UMK105CH390JW   |
| C41-C44                                               |     4 | 680pF ±10% (0402) capacitors Taiyo Yuden UMK105BJ681KW |
| C45, C46                                              |     2 | 5.6pF ±0.5pF (0402) capacitors Murata GRM1555C1H5R6D   |
| C59, C62                                              |     2 | 1.0µF ±10% (0402) capacitors Murata GRM155R60J105K     |
| J1                                                    |     1 | Connector, DB25, right-angle male AMP 747238-4         |

## Component List

| DESIGNATION                          |   QTY | DESCRIPTION                                                                |
|--------------------------------------|-------|----------------------------------------------------------------------------|
| J2, J10, J11, J12, J14, J19          |     6 | Connectors, SMA edge mount, round contact Johnson 142-0701-801             |
| J3-J9, J15-J18, J23, J24             |    13 | 1 x 2-pin headers, 2-pin inline headers, 100-mil centers Sullins PTC36SAAN |
| J3-J9, J15-J18, JP1                  |    12 | Shunts, shorting jumpers Sullins STC02SYAN                                 |
| J13                                  |     0 | Not installed                                                              |
| JP1                                  |     1 | 1 x 3-pin header, 3-pin inline header, 100-mil center Sullins PTC36SAAN    |
| L1                                   |     1 | 6.2nH ±5% (0402) inductor Coilcraft CS-6N2XJBW                             |
| L2, L3                               |     2 | 470nH ±2% (0603) inductors Murata LQW18ANR47G00                            |
| R1                                   |     1 | 36.5k Ω ±1% (0402) resistor                                                |
| R2-R5, R9-R12, R16-R19, R26-R29, R32 |    17 | 0 Ω ±5% (0402) resistors                                                   |
| R6, R8, R25, R33-R41                 |    12 | 10k Ω ±5% (0402) resistors                                                 |
| R7, R20-R24                          |     0 | Open                                                                       |
| R30                                  |     1 | 30 Ω ±5% (0402) resistor                                                   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

<!-- image -->

## Features

- ♦ Easy Evaluation of the MAX2741
- ♦ +2.7V to +3.0V Single-Supply Operation
- ♦ All Critical Peripheral Components Included

## Ordering Information

| PART         | TEMP RANGE     | IC PACKAGE      |
|--------------|----------------|-----------------|
| MAX2741EVKIT | -40°C to +85°C | 28 Thin QFN-EP* |

## MAX2741 Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                         |
|---------------|-------|-------------------------------------------------------------------------------------|
| T1, T2, T3    |     3 | Balun transformers, surface-mount TOKO 617DB-1675                                   |
| TP1, TP2      |     0 | Test points, not installed                                                          |
| U1            |     1 | GPS downconverter Maxim MAX2741ETI                                                  |
| U2, U3        |     2 | Hex buffers/drivers with open drain, 14-pin SOP Texas Instruments SN74LV07ADR       |
| U4            |     1 | Ultra-low-noise, high PSRR, low-dropout linear regulator, SC70 Maxim MAX8510EXK29-T |
| Y1            |     1 | 19.2MHz voltage-controlled TCXO KSS/KYOCERA VC-TCXO-208C5-19P2                      |

## Detailed Description Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| Alpha      | 360-647-2360 | 260-671-4936 |
| ATC        | 949-583-9119 | 949-583-9213 |
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Kayama     | 219-489-1533 | 219-489-2261 |
| Murata     | 770-436-1300 | 770-436-3030 |

Note: Indicate you are using the MAX2741 when contacting these manufacturers.

The MAX2741 EV kit simplifies evaluation of the MAX2741 GPS RF receiver front-end IC. It enables testing of the device's RF performance and requires no additional support circuitry. The EV kit's signal inputs and outputs use SMA connectors to facilitate the connection of RF test equipment. In this section, detailed descriptions of the EV kit  board as well as the control interface/software are given to facilitate better evaluation of the IC.

## Input/Output Ports

The MAX2741 EV kit has one RF input port, two IF output ports, one IF input port, one reference clock input port, and a GPS IF output port:

- RFIN (J2) is the GPS RF signal input port with SMA connector
- 1st IFOUT is the output of the 1st stage
- 2nd IFOUT is the output of the 2nd stage
- 2nd IFIN is the input to the 2nd stage
- REFCLK is the external reference clock input to the phase-locked loop
- GPSIF is the digital output after the 3-bit analog-todigital converter

## Measurement Configuration

Important Notice: The EV kit board provides all necessary components to test the entire tuner as one receiver (RF input to the 2nd IF analog output) or to independently test the 1st stage (RF input to 1st IF output) and the 2nd stage (the 2nd IF input to the 2nd IF output). All the required passive components are provided and installed on the board.

To test the entire tuner as one receiver, the user must disconnect the connections to the 1st IF output SMA and the 1st IF input SMA by removing C35, C36, C37, and C38.

To test the 1st stage and the 2nd stage independently, the  user  must  disconnect the connections to the passive,  interstage  IF  filter  by  removing  R12,  C39,  C40, C41, C42, C44.

## Jumper Description

There are eight jumpers on the MAX2741 EV kit. See Table 1.

Table 1. Jumper Functions

| JUMPER   | STATE   | FUNCTION                                   |
|----------|---------|--------------------------------------------|
| J3       | 1-2     | Connect the VCC6pin supply to VCC.         |
| J3       | N.C.    | Connect the VCC6pin to an external supply. |
| J4       | 1-2     | Connect the VCC1pin to VCC.                |
| J4       | N.C.    | Connect the VCC1pin to an external supply. |
| J5       | 1-2     | Connect the VCC2pin to VCC.                |
| J5       | N.C.    | Connect the VCC2pin to an external supply. |
| J6       | 1-2     | Connect the VCC3pin to VCC.                |
| J6       | N.C.    | Connect the VCC3pin to an external supply. |
| J7       | 1-2     | Connect the VCC4pin to VCC.                |
| J7       | N.C.    | Connect the VCC4pin to an external supply. |
| J8       | 1-2     | Connect the VCC5pin to VCC.                |
| J8       | N.C.    | Connect the VCC5pin to an external supply. |
| J9       | 1-2     | Connect to VCC.                            |
| J9       | N.C.    | Connect an external supply.                |
| JP1      | 1-2     | Normal operation.                          |
| JP1      | 2-3     | Shut down the MAX2741.                     |
| JP1      | N.C.    | Control the MAX2741 externally.            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Quick Start

The MAX2741 EV kit is fully assembled and factory tested. Follow the instructions in the Connections and Setup section for proper device evaluation.

## Test Equipment Required

This section lists  the  recommended test equipment to verify  operation of the MAX2741. It is intended as a guide only, and some substitutions are possible.

- An RF signal generator capable of delivering RF power as low as -120dBm and as high as 0dBm at the 1575.42MHz operating frequency such as HP E4433B, or equivalent
- An RF spectrum analyzer that covers the MAX2741 operating frequency range, as well as a few harmonics such as FSEB20, or equivalent
- One DC supply capable of up to 100mA at 2.6V to 3.3V
- Power meter capable of measuring up to 0dBm
- One ammeter to measure the supply current (optional)
- A PC with Windows ® 98/XP

## Connections and Setup

This section provides a step-by-step guide to operating the EV kit and testing the device's functions. This example assumes that you intend to test the tuner as one receiver. (See the Measurement Configuration in  the Detailed Description section.) Ensure that the shunts are across jumpers J3-J9. Connect pin 1 to pin 2 of JP1. Do not turn on the DC power or RF signal generators until all connections are made:

- 1) Connect a DC supply set to +2.75V to the VDC and GND terminals on the EV kit. Do not turn on the supply.
- 2) Connect the RF signal generator to the RFIN SMA connector; do not turn on the generator's output. Set the output of the RF signal generator to 1575.42MHz and power level to -90dBm.

Windows is a registered trademark of Microsoft Corp.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2741 Evaluation Kit

- 3) Connect the EV kit to a PC through a parallel cable.
- 4) Download the MAX2741 software from the Maxim website at www.maxim-ic.com. Install and run the software on an IBM-compatible PC.
- 5) Connect the spectrum analyzer to the 2nd IFOUT SMA connector. Set the center frequency to 3.78MHz and the span to 1MHz.
- 6) Turn on the DC power supply. The supply current should read approximately 31mA.
- 7) Enable the RF generator's output. Use the software to  set  the  registers  and  send  to  the  part.  Click  on the Test Mode button, then choose Lowpass Filter and ADC, click Next, and choose Observe IF Signal at Output of LPF; then click Finish.
- 8) The spectrum analyzer should display a tone at 3.78MHz at approximately -8dBm.

## Layout Issues

A good PC board layout is an essential part of RF circuit design. The EV kit PC board can serve as a guide for laying out a board using the MAX2741. Keep traces carrying RF signals as short as possible to minimize radiation and insertion loss. Use impedance control on all  RF  signal  traces.  Bypass  the  VCC  node  of  the  PC board with capacitors to the closest ground.

## MAX2741 Evaluation Kit

Figure 1. MAX2741 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX2741 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX2741 Evaluation Kit

Figure 3. MAX2741 EV Kit PC Board Layout-Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2741 Evaluation Kit

Figure 4. MAX2741 EV Kit PC Board Layout-Layer 3

<!-- image -->

6

Figure 5. MAX2741 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2741 Evaluation Kit

Figure 6. MAX2741 EV Kit PC Board Layout-Secondary Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Springer

7