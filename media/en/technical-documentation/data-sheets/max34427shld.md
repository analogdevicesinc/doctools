<!-- lastmod 2022-11-23 -->
Evaluates: MAX34427

## General Description

The  MAX34427  Shield  evaluation  kit  (EV  kit)  is  a  fully assembled  and  tested  PCB  to  evaluate  the  MAX34427,  a SMBus two-channel, high dynamic range current, voltage, and power accumulator. The Shield operates from a single supply (either  from  USB  or  external  power  supply).  This  device  is accessed  through  an  I 2 C  serial  interface  provided  by  a MAX32625PICO board connected to a PC by a USB port.

The MAX34427 Shield EV kit provides the hardware and software  graphical  user  interface  (GUI)  necessary  to evaluate  the  MAX34427.  The  kit  includes  an  installed MAX34427. It connects to the PC through a MAX32625 PICO board and a micro-USB cable.

## Features

- Easy Evaluation of the MAX34427
- +2.7V to +3.6V Single-Supply Operation
- Proven PCB Layout
- Fully Assembled and Tested
- USB-12C/SMBus ™ Interface
- Windows® 7, 8, and 10 Compatible Software

## EV Kit Contents

- Assembled circuit board, including the MAX34427
- Assembled MAX32625PICO I 2 C circuit board
- Micro-USB cable

## MAX34427 EV Kit Files

| FILE              | DESCRIPTION                         |
|-------------------|-------------------------------------|
| MAX34427EVKIT.exe | Installs EV kit files onto computer |

Ordering Information appears at end of data sheet.

## Quick Start

## Required Equipment

- One high-current DC power supply capable of supplying +3V to +15V up to at least 3A
- One digital multimeter for measuring the voltage
- PC,  laptop,  or  tablet  with  Microsoft  Windows  XP, Windows 7, 8, or 10 compatible software
- Micro-USB cable (included in the EV kit box)
- Variable power resistor for measuring the power
- MAX34427 EV kit

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  Follow  these steps to verify board operation.

1. Place the MAX34427 EV kit on a nonconductive surface to ensure  that  nothing  on  the  PCB  gets  shorted  to  the workspace.
2.  Set the jumpers to their default positions as shown in Table 1 .
3.  Connect the MAX32625PICO I 2 C circuit board to the EV kit at its location ( Figure 1 ).
4.  Connect the micro-USB cable between the MAX32625PICO board and PC/laptop.
5. Visit www.maximintegrated.com to download the latest version of the MAX34427 Shield EV kit software, and run the control software.
6.  Open  the  MAX34427  Shield  EV  kit  software;  this displays the MAX34427 Shield EV kit GUI.
7.  When  the  GUI  appears,  the  text  at  the  bottom-right corner of the window should display EV Kit Connected and  the  text  at  the  bottom-left  corner  of  the  window should display Connected Mode .
8. On the Control/ Registers page under Sense Resistors, ensure that the RSENSE (mΩ) shows 10.00.
9.  With the output set to +3.8V and disabled, connect the positive terminal of the power supply to the IN1A + \_U2 test pin of the EV kit and connect the ground terminal to the GND header.

## EV Kit Photo

<!-- image -->

10. Tune the variable Power Resistor to 38Ω and then connect it between the IN1A - \_U2 test pin of the EV kit and GND connector of the EV kit.
11.  Under Read Options on Monitor/Graph page of the GUI, set the Polling Rate to 2.5 seconds.
12.  Turn on the power supply. Click Auto Poll and verify the voltage and average power.
13.  Repeat  steps  9  to  12  for  IN2.  Note:  Both  channels  could  be  tested  simultaneously  by  connecting  two  +3.8V  DC supplies to the IN1A+\_U2, IN2A+\_U2 and connecting two power resistors to IN1A - \_U2, IN2A - \_U2. If using one DC power source for both channels, ensure that the DC power supply is capable of supplying the total current.
14.  On the Modes window of the GUI, enable the Slow Enable slider for slow mode verification.
15.  On  the Modes window  of  the  GUI,  enable  the Park Enable slider  for  park  mode  on  either  of  the  two  channel's measurements.

Figure 1. MAX34427Shield EV Kit Board Connections

<!-- image -->

## Table 1. Jumper Connection Guide

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                                 |
|----------|------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| JU1      | 1-2*             | System VDD is powered by a +3.3V supply from Arm® Mbed ™ platform for Arduino®/PICO.                                                        |
| JU1      | 2-3              | System VDD is powered by VDD_EXT test pin using an external power supply.                                                                   |
| JU2      | 1-2*             | System VIO is powered by a +3.3V supply from Arm® Mbed ™ platform for Arduino®/PICO.                                                        |
| JU2      | 2-3              | System VIO is powered by VIO_EXT test pin using an external power supply.                                                                   |
| JU3      | 1-2              | Connects RESET Pin to Arm® Mbed ™ platform for Arduino®/PICO using level translator circuit to realize VIO voltage range from 1.6V to 3.6V. |
| JU3      | 2-3*             | Connects RESET Pin to Arm® Mbed ™ platform for Arduino®/PICO without the level translator circuit at default VIO voltage of 3.3V.           |

## Detailed Description

The MAX34427 automatically sequences through the channels to collect samples from the common-mode voltage and the current-sense amplifiers. The 16-bit current value and the 14-bit voltage value are then multiplied to create a 30-bit power/current value that is then written to the power accumulator. The MAX34427 contains a 56-bit power accumulator for  each  channel.  This  accumulator  is  updated  1024  times  per  second.  When  the  host  is  ready  to  pull  the  latest accumulation data, it first sends the UPDATE command that causes the MAX34427 to load the latest accumulation data and accumulation count into the internal MAX34427 registers so the host can read them at any time. This type of operation allows the host to control the accumulation period. The only constraint is that the host should access the data before the accumulators can overflow. If the accumulators overflow, they do not roll over.

The MAX34427 contains a 14-bit ADC for voltage and a 13-bit ADC for current. During each sample time, a 14-bit voltage sample and a 16-bit current sample are resolved. To create a 16-bit current value from the 13-bit ADC, the device takes two current samples: one with the current sense amplifier in a high-gain mode and another with the amplifier in a low-gain mode. The high gain setting is eight times the low-gain setting. Based on the two current-sense ADC results, the device determines which result provides the best accuracy and fills the 16-bit current sample accordingly.

## Detailed Description of Software

## Software Startup

If  the MAX34427 Shield EV kit is connected when the software is opened, the software first detects this hardware to communicate with the MAX34427 Shield EV kit. Next, the software searches for all slave addresses on the I 2 C bus and connects to the first slave address that is valid. Then, the GUI displays EV Kit Connected at the bottom-right corner of the window and Connected Mode at the bottom-left of the window. If the EV kit is not connected on software startup, the GUI populates with default GUI configuration and displays EV Kit not detected at the bottom-right corner and Demo Mode at the bottom-left corner of the window. Once the EV kit is connected, the GUI searches for slave addresses.

## Menu Items

The Device menu item allows the user to connect to a desired device. Find Slave Addresses searches for all slave addresses connected to the I 2 C bus. To select a device, click Select Slave Address and all the slave addresses found are shown and are selectable. The GUI detects the slave address and automatically checks the first slave address it finds; since the EV kit has only one device, user doesn't have to worry about the selection. The File menu is used to save measured data while Help menu can link users to www.maximintegrated.com .

## Status Log

The status log below the tabs displays all the actions the GUI performs. Whenever a SMBus command is read or written, the action is confirmed by the log. The log can be cleared by clicking on the Clear Log button.

Evaluates: MAX34427

## MAX34427 Shield Evaluation Kit

## Monitor/Graph Tab

The Monitor/Graph tab ( Figure 1 ) displays all the accumulator values. In the Monitor group box table, the Polled values are the Accumulator values read from PWR\_ACC\_1 and PWR\_ACC\_2 that are converted to amps using the RSENSE value in the Sense Resistors table on Control/Registers tab of the GUI ( Figure 2 ). The Instantaneous Voltage and Average Power columns track the voltage and average power of the Polled value for each channel. The Current option can be selected from the Mode drop-down menu to see the Average Current column track the current of the Polled value for each channel. All values on the tab are read when the tab is selected or when the Read button is clicked. The OC status bits are cleared after every read. Check the Auto Poll checkbox to continuously read with the Polling Rate .

The Data Log Controls group box contains the graph related controls. Graph Points displays the number of reads that have been tracked in the data log. To reset the Poll Count , click on the Data Log Reset button. The Data log reset button clears the graph log which includes the graph points recorded and the data logged for the graph thus far. The Average Power/Voltage/Current button selects the average power or voltage or current to be graphed.

## Control/Registers Tab

The Control/Registers tab ( Figure 2 ) displays all the SMBus commands and their current values. In the Control group box table,  the RSENSE (mΩ) column is the value of the resistor (R3X -R4X) between IN\_P and IN\_N signals. The Max Current (A) column displays the maximum current threshold converted to amps using the RSENSE value.

Figure 2. MAX34427 Shield EV Kit GUI -Monitor Graph Tab

<!-- image -->

## MAX34427 Shield Evaluation Kit

Evaluates: MAX34427

Figure 3. MAX34427 Shield EV Kit GUI -Control/Registers Tab

<!-- image -->

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX34427SHLD# | EV Kit |

#Denotes RoHS-compliant.

## MAX34427 Shield Evaluation Kit

## MAX34427 EV Kit Bill of Materials

|   ITE M | REF_DES                                                                                               | DNI/ DNP   |   QT Y | MFG PART #                                                         | MANUFACTURER                       | VALUE          | DESCRIPTION                                                                                                             |
|---------|-------------------------------------------------------------------------------------------------------|------------|--------|--------------------------------------------------------------------|------------------------------------|----------------|-------------------------------------------------------------------------------------------------------------------------|
|       1 | C1, C2, C6, C7, C10, C12                                                                              | -          |      6 | C0603C104K8RAC                                                     | KEMET                              | 0.1UF          | CAP; SMT (0603); 0.1UF; 10%; 10V; X7R; CERAMIC                                                                          |
|       2 | C3, C4                                                                                                | -          |      2 | GRM188Z71A106KA 73                                                 | MURATA                             | 10UF           | CAP; SMT (0603); 10UF; 10%; 10V; X7R; CERAMIC ;                                                                         |
|       3 | C9, C11                                                                                               | -          |      2 | GRM188R71C103K A01; ECJ1VB1C10; CL10B103KO8NNN; GCJ188R71C103KA 01 | MURATA; PANASONIC; SAMSUNG; MURATA | 0.01UF         | CAP; SMT (0603); 0.01UF; 10%; 16V; X7R; CERAMIC                                                                         |
|       4 | GND, GND1, GND2                                                                                       | -          |      3 | 5011                                                               | KEYSTONE                           | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|       5 | IN1A+_U2, IN1A-_U2, IN1B+_U1, IN1B-_U1, IN2A+_U2, IN2A-_U2, IN2B+_U1, IN2B-_U1, RESET/AD DR, SCL, SDA | -          |     11 | 5012                                                               | KEYSTONE                           | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|       6 | JU1-JU3                                                                                               | -          |      3 | PBC03SAAN                                                          | SULLINS                            | PBC03SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC                                        |
|       7 | P1                                                                                                    | -          |      1 | SSQ-110-04-G-S                                                     | SAMTEC                             | SSQ-110-04-G-S | CONNECTOR; FEMALE; THROUGH HOLE; .025IN SQ POST SOCKET; STRAIGHT; 10PINS ;                                              |
|       8 | P2, P4                                                                                                | -          |      2 | SSQ-108-04-G-S                                                     | SAMTEC                             | SSQ-108-04-G-S | CONNECTOR; FEMALE; THROUGH HOLE; .025IN SQ POST SOCKET; STRAIGHT; 8PINS ;                                               |

Evaluates: MAX34427

## MAX34427 Shield Evaluation Kit

## Evaluates: MAX34427

|   9 | P3                                                  | -   |   1 | SSQ-106-04-G-S                                                  | SAMTEC                                 | SSQ-106-04-G-S     | CONNECTOR; FEMALE; THROUGH HOLE; .025IN SQ POST SOCKET; STRAIGHT; 6PINS ;                                |
|-----|-----------------------------------------------------|-----|-----|-----------------------------------------------------------------|----------------------------------------|--------------------|----------------------------------------------------------------------------------------------------------|
|  10 | P5, P6                                              | -   |   2 | PPPC101LFBN-RC                                                  | SULLINS ELECTRONICS CORP.              | PPPC101LFBN- RC    | CONNECTOR; FEMALE; THROUGH HOLE; HEADER CONNECTOR; STRAIGHT; 10PINS                                      |
|  11 | Q1                                                  | -   |   1 | BSS806NH6327XTS A1                                              | INFINEON                               | BSS806NH6327X TSA1 | TRAN; N-CHANNEL ENHANCEMENT MODE FIELD EFFECT TRANSISTOR; NCH; SOT-23; PD-(0.5W); I- (2.3A); V-(20V)     |
|  12 | Q2                                                  | -   |   1 | DMG1013UW                                                       | DIODES INCORPORATED                    | DMG1013UW          | TRAN; P-CHANNEL ENHANCEMENT MODE MOSFET; PCH; SOT- 323; PD-(0.31W); I-(- 0.82A); V-(-20V)                |
|  13 | R1, R7                                              | -   |   2 | CRCW060310K0FK; ERJ- 3EKF1002;AC0603F R- 0710KL;RMCF0603F T10K0 | VISHAY DALE;PANASONIC; YAGEO           | 10K                | RES; SMT (0603); 10K; 1%; +/-100PPM/DEGC; 0.1000W                                                        |
|  14 | R1A, R1B, R2A, R2B, R5A, R5B, R6A, R6B, R8, R9, R11 | -   |  11 | CRCW06030000Z0                                                  | VISHAY DALE                            | 0                  | RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                                                              |
|  15 | R3                                                  | -   |   1 | RMCF0603FT3K24                                                  | STACKPOLE ELECTRONICS INC.             | 3.24K              | RES; SMT (0603); 3.24K; 1%; +/- 100PPM/DEGC; 0.1000W                                                     |
|  16 | R3A, R3B, R7A, R7B                                  | -   |   4 | ERJ-M1WSF10M                                                    | PANASONIC                              | 0.01               | RESISTOR; 2512; 0.01 OHM; 1%; 100PPM; 1W; METAL STRIP                                                    |
|  17 | SU1-SU3                                             | -   |   3 | S1100-B;SX1100- B;STC02SYAN                                     | KYCON;KYCON;SUL LINS ELECTRONICS CORP. | SX1100-B           | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHO SPHOR BRONZE CONTACT=GOLD PLATED |
|  18 | U1                                                  | -   |   1 | MAX34427_TDFN                                                   | MAXIM                                  | MAX34427_TDF N     | EVKIT PART - IC; MAX34427; TDFN12-                                                                       |

Analog Devices | 7

## MAX34427 Shield Evaluation Kit

## Evaluates: MAX34427

|    |                          |     |    |                              |                       |                  | EP; PACKAGE OUTLINE DRAWING: 21-0664; LAND PATTERN DRAWING: 90-0397; PACKAGE CODE: TD1233+1C          |
|----|--------------------------|-----|----|------------------------------|-----------------------|------------------|-------------------------------------------------------------------------------------------------------|
| 19 | U2                       | -   |  1 | MAX34427_WLP                 | MAXIM                 | MAX34427_WLP     | EVKIT PART - IC; MAX34427; WLP; PACKAGE OUTLINE DRAWING: 21-0009; PACKAGE CODE: W121C2+1              |
| 20 | U3                       | -   |  1 | NLSX4378ABFCT1G              | ON SEMICONDUCTOR      | NLSX4378ABFC T1G | IC; TRANS; 4-BIT 24 MB/S DUAL-SUPPLY LEVEL TRANSLATOR; UBUMP12                                        |
| 21 | VDD_EXT, VIO_EXT         | -   |  2 | 5010                         | KEYSTONE              | N/A              | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL; |
| 22 | PCB                      | -   |  1 | MAX34427SHIELD               | MAXIM                 | PCB              | PCB:MAX34427SHIELD                                                                                    |
| 23 | R4A, R4B, R8A, R8B       | DNP |  0 | ERJ-M1WSF10M                 | PANASONIC             | 0.01             | RESISTOR; 2512; 0.01 OHM; 1%; 100PPM; 1W; METAL STRIP                                                 |
| 24 | R6                       | DNP |  0 | CRCW0603118KFK; ERJ-3EKF1183 | VISHAY DALE;PANASONIC | 118K             | RES; SMT (0603); 118K; 1%; +/-100PPM/DEGC; 0.1000W                                                    |
| 25 | C1A-C4A, C1B-C4B, C5, C8 | DNP |  0 | N/A                          | N/A                   | OPEN             | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                              |
| 26 | R12                      | DNP |  0 | N/A                          | N/A                   | OPEN             | PACKAGE OUTLINE 0603 RESISTOR                                                                         |

## MAX34427 EV Kit Schematic

<!-- image -->

## MAX34427 EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX34427

## MAX34427 Shield Evaluation Kit

## MAX34427 EV Kit PCB Layout

MAX34427 EV Kit PCB Layout -Top Silkscreen

<!-- image -->

MAX34427 EV Kit PCB Layout -Bottom Layer

<!-- image -->

Evaluates: MAX34427

MAX34427 EV Kit PCB Layout -Top Layer

<!-- image -->

MAX34427 EV Kit PCB Layout -Bottom Silkscreen

<!-- image -->

## MAX34427 Shield Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/22            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

Evaluates: MAX34427