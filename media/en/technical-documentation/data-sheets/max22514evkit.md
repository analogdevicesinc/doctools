<!-- lastmod 2022-08-04 -->
## Evaluates: MAX22514

## General Description

The  MAX22514  evaluation  kit  (EV  kit)  consists  of  the evaluation  board  and  software.  The  EV  kit  is  a  fully assembled  and  tested  circuit  board  that  evaluates  the MAX22514  IO-Link®  device  transceiver  with  integrated DC-DC buck regulator.  The  EV  kit  includes  Windows®compatible software that provides a graphical user interface (GUI) for exercising the features of the MAX22514. The EV kit is connected to a PC through a USB-A-to-micro-B cable.

Windows-based GUI software is available for use with the EV kit and can be downloaded from Maxim's website at www.maximintegrated.com/products/MAX22514 (under  the Design &amp; Development

tab).  Windows®  7  or newer Windows operating system is required to use the EV kit software.

## Features

- IO-Link-Compliant Device Transceiver
- I/O and SPI Interface Terminals
- Arduino® Uno Compatible Connector
- Windows® 10-Compatible Software
- USB-PC Connection
- Proven PCB Layout
- Fully Assembled and Tested

## MAX22514 EV Kit Files

| FILE                           | DESCRIPTION                             |
|--------------------------------|-----------------------------------------|
| MAX22513_5EVKIT SetupVx.xx.exe | Installs EV kit files onto the computer |

Ordering Information appears at end of data sheet.

## MAX22514 Evaluation Kit

## Quick Start

## Required Equipment

- MAX22514 EV kit (USB-A-to-micro-B cable included)
- User-supplied Windows 10 PC with a spare USB port
- 24V, 1A DC power supply
- Multimeter/voltmeter

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps to  install  the  EV  kit  software,  make  required  hardware connections, and start operation of the kit. Note that after communication is established, the IC must still be configured  correctly  for  desired  operation  mode.  Make sure the PC is connected to the Internet throughout the process  so  that  the  USB  driver  can  be  automatically installed.

1. Visit www.maximintegrated.com/products/MAX22514 (under the Design &amp; Development tab) to download the latest version of the MAX22514 EV kit software. Save the software to a temporary folder and unpack the zip file.
2.  Install the EV kit software on the computer by running the MAX22513\_5EVKITSetupVx.xx.exe program inside the temporary folder. This copies the program files and creates an icon in the Windows Start menu. The software requires the .NET Framework 4.5 or later. If  connected  to  the  Internet,  Windows  automatically updates the .NET Framework as needed.

<!-- image -->

## MAX22514 Evaluation Kit

## EV Kit Photo

<!-- image -->

## EV Block Diagram

<!-- image -->

3.  The EV kit software launches automatically after install, and it can be launched by clicking on its icon in the Windows Start menu.
4.  Verify that all the jumpers are in their default positions, as shown in Table 1 .
5.  Connect the 24V DC power supply to the V24 (TP6) and GND (TP7) barrel connectors or to the V24 (TP1) and GND (TP10) test points on the EV kit board.
6.  Connect the multimeter to the V5 test point (TP4).
7.  Turn on the V24 power supply. Ensure that the voltage on V5 (TP22) is 5V.
8.  Connect the USB cable from the PC to the EV kit board. A Windows message appears when connecting the EV kit.
9.  Start the EV kit software by opening its icon in the Windows Start | Programs | Maxim Integrated menu. The EV kit software main window appears, as shown in Figure 1.
10.  Verify that Status: MAX22514 Connected is displayed on the status bar at the bottom left of the main window ( Figure 1 ).
11.  Click on the Include Interrupt Register box to include the INTERRUPT register in serial interface reads. Click the Read All button to read all of the registers in the device.
12.  Select a register in the top register table to access the bits in that register.
13.  Set the individual bits for that register by selecting available settings from the drop-down menu for each bit in the lower register table.

Evaluates: MAX22514

Evaluates: MAX22514

14.  Press the Write Modified button on the GUI to write the registers that have been changed to the MAX22514.

Figure 1. MAX22514 EV Kit Software, EV Kit is Connected

<!-- image -->

## Table 1. Jumper Connection Guide

| JUMPER   | CONNECTION   | FEATURE                                                                                                                |
|----------|--------------|------------------------------------------------------------------------------------------------------------------------|
| J1       | 1-2*         | LIN is connected to the 6V DC-DC output.                                                                               |
| J1       | 1-3          | LIN is connected to PV24.                                                                                              |
| J1       | 1-4          | LIN is connected to V 5 , disabling the internal 5V regulator. Connect an external supply to V 5 for normal operation. |
| J3       | OPEN*        | RESET is high (pulled up to V L through a 10k  resistor).                                                             |
| J3       | CLOSED       | RESET is low.                                                                                                          |
| J6       | 1-2          | V L is connected to V 5 (5V) linear regulator output.                                                                  |
| J6       | 2-3*         | V L is connected to V 33 (3.3V) linear regulator output.                                                               |
| J10      | 1-2*         | TXEN is high (connected to V L ).                                                                                      |
| J10      | 2-3          | TXEN is low.                                                                                                           |

## Detailed Description of Hardware

The MAX22514 EV kit includes the MAX22514 IO-Link transceiver and the external components for evaluating the device. The EV kit is configured for SPI operation and all logic-level input/output (I/Os) and IO-Link-capable I/Os are available on yellow test points.

## Logic-Level Power Supply

The MAX22514 features an internal 3.3V linear regulator which can drive loads up to 50mA. Connect VL to the on-board 3.3V (V33) or 5V (V5) linear regulator by setting the J6 jumper to set the logic level supply or the I/O pins. To use a different logic-level voltage supply, open the J6 jumper and apply the external supply to the VL test point (TP3).

## Using Serial Interface with an External Master Controller

The MAX22514 EV kit includes a USB-to-serial interface circuit for communication with the PC/GUI and is configured to operate with the SPI when using the on-board FTDI converter. Arduino headers are available to use the board with an external controller. To use an external SPI controller with the MAX22514, open all the switches on SW1 (set all switches to the left) and connect the external controller to the P5, P6, P7, and P8 headers, as labeled.

## DC-DC Regulator

The  MAX22514 features an integrated  high-efficiency  synchronous  DC-DC  buck  regulator  with  active  diode  reverse protection, current overload protection, soft start, spread spectrum operation, and an adjustable output voltage. The DCDC regulator operates with a fixed 1.229MHz (typ) frequency during normal operation. The MAX22514 EV kit includes components for a DC-DC output voltage of 6V. Connect the V5 regulator input, LIN, to the output of the DC-DC by setting the J1 jumper to (1-2), labeled 'DC-DC.'

## Detailed Description of Software

## Configuring the Registers

Click on a register name in the top register table to access the individual bits in that register. When the register name is selected in the register table, the lower register table shows the individual bits for that register. Click on the dropdown menu next to each bit in the lower table to select the bit setting. When all of the bits are set as desired, click the Write Modified button to write the changed bit settings to the MAX22514 over the SPI. Note that the full IO-Link communication is not available using the EV kit GUI.

## I/O Pin Control

The IO-Link universal asynchronous receiver-transmitter (UART) I/Os (TXEN, TX, RX), RESET , and notification interrupt ( IRQ and WU ) pins can be controlled and read on the MAX22514 EV kit GUI. Click the toggle buttons next to TXEN, TX, and RESET to set these pins on the EV kit board to high (VL) or low (GND).

When an interrupt is triggered, a bit in the INTERRUPT register is set and IRQ asserts low. A yellow tag appears in the I/O Pins box stating 'Interrupt Received' ( Figure 2 ). Read the INTERRUPT register to clear the interrupt and deassert IRQ . When a wake-up event is detected, and the WUINT is not masked in the INTERRUPT register (WUM = 0), the wakeup interrupt bit is set in the INTERRUPT register and a yellow tag appears in the I/O Pins box stating 'Wake-Up Received.' IRQ also asserts. Read the INTERRUPT register to clear the interrupt and deassert IRQ .  The green box next to WU flashes orange briefly and then turns green again.

Evaluates: MAX22514

Figure 2. MAX22514 EV Kit Software, I/O Pin Status

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX22514EVKIT# | EV Kit |

#Denotes RoHS compliance.

## MAX22514 Evaluation Kit

## MAX22514 EV Kit Bill of Materials

| REF_DES                       | DNI/DNP   |   QTY | VALUE            | DESCRIPTION                                                                             |
|-------------------------------|-----------|-------|------------------|-----------------------------------------------------------------------------------------|
| C1                            | -         |     1 | 0.01UF           | CAP; SMT (0603); 0.01UF; 5%; 100V; C0G; CERAMIC                                         |
| C2                            | -         |     1 | 1UF              | CAP; SMT (0603); 1UF; 10%; 50V; X7R; CERAMIC                                            |
| C3, C5, C8                    | -         |     3 | 1UF              | CAP; SMT (0402); 1UF; 10%; 6.3V; X7R; CERAMIC                                           |
| C4                            | -         |     1 | 6.8UF            | CAP; SMT (1206); 6.8UF; 10%; 50V; X5R; CERAMIC                                          |
| C6, C7                        | -         |     2 | 18PF             | CAP; SMT (0402); 18PF; 5%; 50V; C0G; CERAMIC                                            |
| C9                            | -         |     1 | 0.1UF            | CAP; SMT (0603); 0.1UF; 10%; 50V; X7R; CERAMIC                                          |
| C10, C11                      | -         |     2 | 330PF            | CAP; SMT (0402); 330PF; 10%; 50V; X7R; CERAMIC                                          |
| C12, C20, C21, C25, C27-C31   | -         |     9 | 0.1UF            | CAP; SMT (0402); 0.1UF; 5%; 10V; X7R; CERAMIC                                           |
| C13, C24, C26                 | -         |     3 | 4.7UF            | CAP; SMT (0402); 4.7UF; 20%; 10V; X5R; CERAMIC                                          |
| C14                           | -         |     1 | 1UF              | CAP; SMT (0603); 1UF; 10%; 16V; X7R; CERAMIC                                            |
| C15                           | -         |     1 | 33UF             | CAP; SMT (2220); 33UF; 20%; 25V; X7R; CERAMIC                                           |
| C16                           | -         |     1 | 3300PF           | CAP; SMT (0402); 3300PF; 10%; 50V; X7R; CERAMIC                                         |
| C17                           | -         |     1 | 1UF              | CAP; SMT (0603); 1UF; 20%; 16V; X7R; CERAMIC                                            |
| C18                           | -         |     1 | 10UF             | CAP; SMT (0805); 10UF; 10%; 10V; X5R; CERAMIC                                           |
| C19                           | -         |     1 | 0.01UF           | CAP; SMT (0201); 0.01UF; 10%; 10V; X7R; CERAMIC                                         |
| DS1                           | -         |     1 | LGL29K-G2J1-24-Z | DIODE; LED; SMARTLED; GREEN; SMT; PIV=1.7V; IF=0.02A                                    |
| J1                            | -         |     1 | TSW-104-07-L-S   | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 4PINS       |
| J3                            | -         |     1 | TSW-102-07-T-S   | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; -55 DEGC TO +105 DEGC |
| J6, J10                       | -         |     2 | TSW-103-07-T-S   | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 3PINS                        |
| J9                            | -         |     1 | ZX62D-AB-5P8(30) | CONNECTOR; FEMALE; SMT; USB MICRO CONNECTOR; RIGHT ANGLE; 5PINS                         |
| L1                            | -         |     1 | 27UH             | INDUCTOR; SMT; SHIELDED; 27UH; 20%; 0.8A                                                |
| L2                            | -         |     1 | 33UH             | INDUCTOR; SMT; MAGNETICALLY SHIELDED; 33UH; TOL=+/-20%; 1.3A                            |
| L3                            | -         |     1 | 600              | INDUCTOR; SMT (0805); FERRITE-BEAD; 600; TOL=+/-25%; 0.2A                               |
| MISC1                         | -         |     1 | 68784-0001       | CONNECTOR; MALE; USB; USB A PLUG TO MICRO B PLUG CABLE ASSY; STRAIGHT; 4PINS-5PINS      |
| R1                            | -         |     1 | 10K              | RES; SMT (0603); 10K; 1%; +/-100PPM/DEGC; 0.1000W                                       |
| R2, R4, R7, R9, R10, R21, R22 | -         |     7 | 10K              | RES; SMT (0402); 10K; 1%; +/-100PPM/DEGC; 0.0630W                                       |
| R3                            | -         |     1 | 1K               | RES; SMT (0603); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                        |
| R5                            | -         |     1 | 412K             | RES; SMT (0603); 412K; 1%; +/-100PPM/DEGC; 0.1000W                                      |
| R6                            | -         |     1 | 73.2K            | RES; SMT (0603); 73.2K; 1%; +/-100PPM/DEGC; 0.1000W                                     |
| R8                            | -         |     1 | 15K              | RES; SMT (0402); 15K; 1%; +/-100PPM/DEGC; 0.1000W                                       |

Evaluates: MAX22514

## MAX22514 Evaluation Kit

## Evaluates: MAX22514

| R11                                   | -   |   1 | 2.2K           | RES; SMT (0402); 2.2K; 1%; +/-100PPM/DEGC; 0.0630W                                                                        |
|---------------------------------------|-----|-----|----------------|---------------------------------------------------------------------------------------------------------------------------|
| R12                                   | -   |   1 | 12K            | RES; SMT (0402); 12K; 0.10%; +/-25PPM/DEGC; 0.0630W                                                                       |
| R13                                   | -   |   1 | 806            | RES; SMT (0402); 806; 1%; +/-100PPM/DEGC; 0.0630W                                                                         |
| R14, R25, R28, R30, R31, R34, R37-R40 | -   |  10 | 220            | RES; SMT (0402); 220; 1%; +/-100PPM/DEGC; 0.1000W                                                                         |
| R32, R33                              | -   |   2 | 27             | RES; SMT (0201); 27; 1%; +/-200PPM/DEGC; 0.0500W                                                                          |
| SU1-SU8                               | -   |   8 | SX1100-B       | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                   |
| SW1                                   | -   |   1 | 219-10MST      | SWITCH; SPST; SMT; STRAIGHT; 20V; 0.1A; SURFACE MOUNT DIP SWITCH-AUTO PLACEABLE; RINSULATION=1000M OHM                    |
| TP1, TP3- TP5, TP8                    | -   |   5 | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                     |
| TP6                                   | -   |   1 | 571-0500       | CONNECTOR; FEMALE; THROUGH HOLE; BANANA 4MM RED SOCKET; RIGHT ANGLE; 2PINS                                                |
| TP7                                   | -   |   1 | 571-0100       | CONNECTOR; FEMALE; THROUGH HOLE; BANANA 4MM BLACK SOCKET; RIGHT ANGLE; 2PINS                                              |
| TP9-TP11                              | -   |   3 | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   |
| TP13-TP17, TP19, TP22, TP23           | -   |   8 | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |
| U1                                    | -   |   1 | MAX22514ATG+   | EVKIT PART - IC; MAX22514ATG+; PACKAGE OUTLINE DRAWING: 21-0201; LAND PATTERN: 90-0083; PACKAGE CODE: T2445+2C; TQFN24-EP |
| U2                                    | -   |   1 | MAX17501EATB+  | IC; CONV; ULTRA-SMALL; HIGH-EFFICIENCY; SYNCHRONOUS STEP-DOWN DC-DC CONVERTER; TDFN10-EP                                  |
| U3                                    | -   |   1 | 93LC66BT-I/OT  | IC; EPROM; 4K MICROWIRE SERIAL EEPROM; SOT23-6                                                                            |
| U4                                    | -   |   1 | FT2232HL       | IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; LQFP64                                                           |
| Y1                                    | -   |   1 | 12MHZ          | CRYSTAL; SMT; 12MHZ; 18PF; TOL = +/-20PPM; STABILITY = +/- 30PPM                                                          |
| PCB                                   | -   |   1 | PCB            | PCB:MAX22514                                                                                                              |
| D1-D3                                 | DNP |   0 | 33V            | DIODE; TVS; SMT (DO-216AA); VRM=33V; IPP=7A                                                                               |
| J7                                    | DNP |   0 | 09 0431 212 04 | CONNECTOR; MALE; TH; MALE RECEPTACLE; THREADED; PCB SOLDER; STRAIGHT; 4PINS;                                              |
| U5                                    | DNP |   0 | ARDUINO_UNO_R3 | MODULE; ARDUINO_UNO_R3                                                                                                    |
| VR1                                   | DNP |   0 | VC060326A580DP | VARISTOR; TVS; SMT (0603); VB=34.5V; IP=30A                                                                               |

## MAX22514 Evaluation Kit

## MAX22514 EV Kit Schematic

<!-- image -->

Evaluates: MAX22514

## MAX22514 EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX22514

## MAX22514 Evaluation Kit

## MAX22514 EV Kit PCB Layout

MAX22514 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX22514 EV Kit PCB Layout-Layer 2 (GND)

<!-- image -->

Evaluates: MAX22514

MAX22514 EV Kit PCB Layout-Top

<!-- image -->

MAX22514 EV Kit PCB Layout-Layer 3

<!-- image -->

## MAX22514 Evaluation Kit

## MAX22514 EV Kit PCB Layout (continued)

MAX22514 EV Kit PCB Layout-Bottom

<!-- image -->

## Evaluates: MAX22514

MAX22514 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

## MAX22514 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/22            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

Evaluates: MAX22514