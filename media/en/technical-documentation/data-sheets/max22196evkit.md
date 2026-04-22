<!-- lastmod 2024-04-19 -->
<!-- image -->

## General Description

The  MAX22196  evaluation  kit  (EV  kit) provides the hardware and software necessary to evaluate the MAX22194  and  MAX22196,  Quad  and  Octal  Industrial Sink/Source Digital Input devices. The MAX22196 EV kit receives commands from a PC through the USB port and creates SPI transactions for communication between the software and the MAX22194 or MAX22196 on the EV kit. The  MAX22196  EV  kit  also  has  a  Pmod ™ -compatible connector  for  SPI  communication  with  an  external  host device  such  as  a  microcontroller  unit  (MCU)  or  fieldprogrammable gate array (FPGA).

The EV kit comes with a MAX22196ATJ+ in a 5mm x 5mm 32-pin TQFN package, installed as U1. The EV kit can also be used to evaluate the MAX22194ATJ+. To do so, order MAX22194ATJ+ samples and replace U1 on the board.

The EV kit includes a GUI that provides communication between the  target  device  and  the  PC.  The  GUI  allows configuration  and  reading  of  the  MAX22194/MAX22196 status through SPI. All input channels of the MAX22194/MAX22196 can individually be configured as sinking or sourcing type. Each channel also supports Type 1/3, Type 2, TTL or HTL input with the current limit set by a  single  on-board  resistor.  The  MAX22196  EV  kit  is designed  to  support  transient  immunity  testing  for  ESD, EFT, and Surge according to IEC 61000-4-2, IEC 610004-4,  and  IEC  61000-4-5,  respectively.  The  EV  kit  can operate in multiple modes, as shown in the EV Kit System Block Diagram :

- USB  Mode:  If  SW1  are  all  closed,  the  device  SPI receives  commands  through  the  USB  port  from  the Analog Devices-supplied EV kit software.
- Pmod  Mode:  If  SW1  are  all  open,  the  device  SPI receives  commands  through  the  PMOD1  connector. This industry standard connector interfaces with popular MCU or FPGA platforms. User is required to generate firmware to provide the SPI commands.
- Multi-Device Mode: Multiple MAX22196 EV kits can be connected  in  daisy-chain  mode  using  PMOD1  and PMOD2  connectors.  User  can  choose  to  use  the provided  software  GUI,  which  supports  up  to  four devices in daisy chain, or their own microcontroller or FPGA platforms.

Windows and Windows XP are registered trademarks and registered service marks of Microsoft Corporation. Pmod is a trademark of Digilent, Inc.

## Evaluates: MAX22194, MAX22196

## Features and Benefits

- Easy Evaluation of the MAX22194 or MAX22196
- EV Kit Logic Side is USB-Powered
- Software Configurable for IEC 61131-2 Type 1/3, Type 2, TTL or HTL Inputs
- Galvanic Isolation Using the MAX14483
- Supports Transient Immunity Testing According to IEC 61000-4-2, IEC 61000-4-4, and IEC 61000-4-5 Standards
- Robust Design at Field Inputs
- ±1kV Surge Tolerant Line-to-Ground and Line-toLine
- ±8kV Contact Electrostatic Discharge (ESD)
- ±15kV Air-Gap ESD
- Windows® 10 Compatible Software
- Fully Assembled and Tested
- Proven PCB Layout
- RoHS Compliant

## EV Kit Contents

- MAX22196EVKIT# including the MAX22196ATJ+
- Micro-USB cable
- 24V power adapter

## EV Kit Photo

<!-- image -->

Ordering Information appears at end of data sheet.

319-100985; Rev 1; 04/24

## MAX22196 EV Kit Files

| FILE                        | DESCRIPTION                            |
|-----------------------------|----------------------------------------|
| MAX22196EVKitSetupV1.00.exe | Installs EV kit software onto computer |

## Quick Start

## Required Equipment

- MAX22196 EV kit
- Micro-USB cable
- 24V DC voltage supply (or 24V AC-DC adapter with barrel connector)
- Source meter
- Windows 10, Windows® 8.1, Windows® 7, Window XP® PC with a spare USB port

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. The default jumper settings configure the EV kit to operate in USB mode. In this configuration, the EV kit's 'logic side' is powered by +5V from the X1 USB connector, the 'field side' is powered by the external  DC  supply  connected  to  the  VF24  and  GND  test  points  (or  CONN1  barrel  connector).  The  MAX22196  is configured in addressable SPI mode with address of 00. Terminal blocks T1 and T2 provide access to all eight channels, which can be configured to Type 1/3 or Type 2, sink or source digital inputs by the EV kit software. Follow the steps to verify the MAX22196 operation:

1.  Verify that all jumper settings are in the default position from Table 1.
2.  For initial testing, the MAX22196 EV kit is powered from USB connector (+5V), and 24V at the VF24 and GND test points.

## EV Kit System Block Diagram

<!-- image -->

Evaluates: MAX22194, MAX22196

## MAX22196 Evaluation Kit

## Evaluates: MAX22194, MAX22196

3. Visit http://www.analog.com to download the latest version of the EV kit software, MAX22196EVKitSetupV1.00.exe.
4.  Install the EV kit software and USB driver on your computer by running the MAX22196EVKitSetupV1.00.exe program. A message box asking "Do you want to allow the following program to make changes to this computer?" might appear. If so, click Yes .
5.  The program files are copied to your PC and icons are created in the Windows Start | Programs menu. At the end of the installation process, the .NET framework 4.0 and FTDI Chip CDM drivers are launched by the installer.
6.  The installer includes the drivers for the hardware and software. Follow the instructions on the installer and once complete, click Finish . The default location of the software is in the program files directory.
7.  Connect the MAX22196 EV kit USB connector X1 to the PC with the micro-USB cable. Windows should automatically recognize the device and display a message near the System Icon menu indicating that the hardware is ready to use. Observe that LED\_USB (yellow) is turned on.
8. Connect the DC power supply between the EV kit's VF24 and GND\_TP1 test points. Set the DC power supply output to  24V  and  then  enable  the  output.  On  the  EV  kit,  observe  that  the  LED\_FAULTB  (red),  LED\_VMOKB  (green), LOGIC\_RDY (yellow), and FIELD\_RDY (yellow) LEDs are turned on, indicating that the EV kit is powered up.
9.  Once the hardware is ready to use, launch the EV kit software by opening its icon in the Start | Programs menu. During the EV kit software launch, two message boxes are shown to indicate that the address bits A1 and A0 setting in the software should match the A1 and A0 address pins on the board. The CRC enable setting in the software should match the CRCEN pin on the board. Click OK to close the message box. The EV kit software appears as shown in Figure 1 .
10.  The default SPI address should be A1:A0 = 00 .  The CRC Enable should be enabled, and Daisy Chain Enable should be disabled by default. If SPI Address (A1:A0) , CRC Enable and Daisy Chain Enable settings are different, update the dropdown list control and checkbox controls on the right. Click OK to close message boxes when making the changes.
11.  Verify  that  the  lower-right  status  bar  indicates  the  EV  kit  hardware  is Connected .  If  the  status  bar  indicates Disconnected , click Connect to Hardware from the Device menu. Next, select a device in the list or use the default device already selected.
12.  Observe that after the GUI is launched and connected on the software, none of the faults are on, and both FAULTB signal and READY signal are green at right-hand side. On the EV kit hardware, observe that LED\_FAULTB (red) LED is turned off.

## MAX22196 Evaluation Kit

## Evaluates: MAX22194, MAX22196

Figure 1. MAX22196 EV Kit Software Startup Window

<!-- image -->

13.  Configure all channels to Type 1/3 Sink mode and display the per-channel digital input status on the LED1 to LED8. Configure all channels' Sink/Source dropdown box to Sink mode, Current Scaling box to 1x Current , and HITHR checkbox to be enabled as shown in Figure 2 . The LEDINT checkbox is enabled to allow LED matrix to be controlled autonomously by the device. Once the configuration is done, click Read DI Continuously . The EV kit software now reads the DISTATE register continuously.

## MAX22196 Evaluation Kit

## Evaluates: MAX22194, MAX22196

Figure 2. MAX22196 EV Kit Software -Type 1/3 Sink Mode Configuration

<!-- image -->

14.  Connect the positive terminal of the source meter to test point IN1. Connect the negative terminal of the source meter to test point GND\_TP2 on the MAX22196 EV kit. Set the source meter to voltage output and measure the current. Set the voltage output to 24V and enable the source meter. Verify that:
- The measured current is about 2.25mA typical.
- On the EV kit hardware, LED1 (green) is on.
- On the EV kit software, IN1 light in Digital Inputs column is green.
15.  Repeat Step 14 by connecting the 24V to IN2 to IN8 test points. Verify that every channel is operating in Type 1/3 sink mode. Click Stop Reading to stop the register polling and disable the source meter output once test is done. Note when U1 is installed with the MAX22194, IN5 to IN8 test points are connected to the I.C. pins of the MAX22194. Leave IN5 to IN8 unconnected.
16. Configure all channels to Type 2 Source mode. Configure all channels' Sink/Source dropdown box to Source mode, Current Scaling box to 3x Current , and HITHR checkbox to be disabled as shown in Figure 3 . Once the configuration is done, click Read DI Continuously . The EV kit software now reads the DISTATE register continuously.
17.  Connect the positive terminal of the source meter to test point IN1. Connect the negative terminal of the source meter to test point GND\_TP2 on the MAX22196 EV kit. Set the source meter to voltage output and measure the current. Set the voltage output to 5V. Verify that:
- The measured current is about -6.7mA typical.
- On the EV kit hardware, LED1 (green) is on.
- On the EV kit software, IN1 light in Digital Inputs column is green.

## MAX22196 Evaluation Kit

## Evaluates: MAX22194, MAX22196

18.  Repeat Step 17 by connecting the 5V to IN2 to IN8 test points. Verify that every channel is operating in Type 2 source mode. Click Stop Reading to stop the register polling and disable the source meter output once test is done. Note when U1 is installed with the MAX22194, IN5 to IN8 test points are connected to the I.C. pins of the MAX22194. Leave IN5 to IN8 unconnected.

Figure 3. MAX22196 EV Kit Software -Type 2 Source Mode Configuration

<!-- image -->

## Table 1. MAX22196 EV Kit Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                                             |
|----------|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| J1       | 1 - 2            | Connect address pin A1 to V L , A1 = 1                                                                                                                  |
| J1       | 2 - 3*           | Connect address pin A1 to GND, A1 = 0                                                                                                                   |
| J2       | 1 - 2            | Connect address pin A0 to V L , A0 = 1                                                                                                                  |
| J2       | 2 - 3*           | Connect address pin A0 to GND, A0 = 0                                                                                                                   |
| J3       | 1 - 2            | Connect REGEN pin to GND. When REGEN is connected to GND, the internal V A regulator is disabled, apply an external 3V to 5.5V supply to VA test point. |
| J3       | Open*            | Leave REGEN open. The internal V A regulator is enabled. The V A is 5V linear regulator.                                                                |
| J4       | 1 - 2*           | Connect CRCEN pin to V L . CRC generation and error detection on the SPI is enabled.                                                                    |

## Evaluates: MAX22194, MAX22196

|     | 2 - 3   | Connect CRCEN pin to GND. CRC generation and error detection on the SPI is disabled.                                                                                                                                                                                                                                                                                                                                                            |
|-----|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J5  | 1 - 2   | Connect DAISY pin to V L to operate in the daisy-chain SPI mode.                                                                                                                                                                                                                                                                                                                                                                                |
| J5  | 2 - 3*  | Connect DAISY pin to GND to operate in the addressable SPI mode.                                                                                                                                                                                                                                                                                                                                                                                |
| J6  | 1 - 2*  | Connect V A supply to V L supply.                                                                                                                                                                                                                                                                                                                                                                                                               |
| J6  | Open    | Connect external power supply from VL test point to V L supply.                                                                                                                                                                                                                                                                                                                                                                                 |
| J7  | 1 - 2*  | Connect the MAX22196 SDO signal to the ISDO input of the digital isolator, the MAX14483. This option is used when the EV kit is operating in standalone mode, or the EV kit is the last device in the daisy chain when operating in daisy-chain mode.                                                                                                                                                                                           |
| J7  | 2 - 3   | Connect the SDO signal from the next device in the daisy chain, SDO_DC on the PMOD2 connector, to the SDO_R signal on the PMOD1 connector so that the SDO signal from the last device in the daisy chain can be passed to the first device in the daisy chain and be connected to the digital isolator MAX14483 ISDO input. This option is used when the EV kit is operating in daisy-chain mode and is not the last device in the daisy chain. |
| SW1 | On*     | All switches on SW1 are closed. The MAX22196 logic signals CS , SCLK, SDI, SDO, LATCH , FAULT, and READY are connected to the MAX14483 isolator. This option is used when the EV kit is operating in standalone mode, or the EV kit is the first device in the daisy chain.                                                                                                                                                                     |
| SW1 | Off     | All switches on SW1 are open. The MAX22196 logic signals CS , SCLK, SDI, SDO, LATCH , FAULT, and READY are disconnected from the MAX14483 isolator. This option is used when the EV kit is operating in daisy-chain mode and is not the first device in the daisy chain.                                                                                                                                                                        |

*Default Position

## Table 2. MAX22196 EV Kit Test Point and Connector Description

| ITEM                | DESCRIPTION                                                                                                                                                                                                   |
|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| TEST POINTS         |                                                                                                                                                                                                               |
| VF24 (RED)          | External field supply input for the MAX22196 EV kit. Connect +24V DC between VF24 and GND_TP1 test points.                                                                                                    |
| V24 (RED)           | Field-side supply input for the MAX22196 V 24. Protected by reverse polarity diode D6.                                                                                                                        |
| VA (RED)            | Field-side analog supply for the MAX22196 V A . +5V when powered by the MAX22196 internal LDO with jumper J3 (REGEN) open.                                                                                    |
| VL (RED)            | Field-side logic supply for the MAX22196 V L . Can be connected to the MAX22196 V A by closing jumper J6.                                                                                                     |
| IN1 to IN8 (ORANGE) | Field-side digital inputs for the MAX22196 IN1 to IN8. When U1 is installed with the MAX22194, IN5 to IN8 test points are connected to the IC pins on the MAX22194. Leave IN5 to IN8 test points unconnected. |
| REFDI (BROWN)       | MAX22196 REFDI signal                                                                                                                                                                                         |
| LO0 to LO6 (GREEN)  | MAX22196 LO1 to LO6 signal                                                                                                                                                                                    |
| FAULTB (BROWN)      | MAX22196 FAULT signal                                                                                                                                                                                         |
| READYB (BROWN)      | MAX22196 READY signal                                                                                                                                                                                         |
| LATCHB (BROWN)      | MAX22196 LATCH signal                                                                                                                                                                                         |
| CSB (BROWN)         | MAX22196 CS signal                                                                                                                                                                                            |
| SCLK (BROWN)        | MAX22196 SCLK signal                                                                                                                                                                                          |
| SDI (BROWN)         | MAX22196 SDI signal                                                                                                                                                                                           |
| SDO (BROWN)         | MAX22196 SDO signal                                                                                                                                                                                           |

www.analog.com

## MAX22196 Evaluation Kit

## Evaluates: MAX22194, MAX22196

| GND_TP1 to GND_TP8 (BLACK)   | Field-side ground                                                                                                                                                                                                                                                                                                                                |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 3V3_USB (RED)                | Logic-side +3.3V supply                                                                                                                                                                                                                                                                                                                          |
| UGND (BLACK)                 | Logic-side ground                                                                                                                                                                                                                                                                                                                                |
| CONNECTORS                   |                                                                                                                                                                                                                                                                                                                                                  |
| T1                           | Terminal block for the MAX22196 digital inputs IN1 to IN4. Pin 8 is connected to IN1, pin 6 is connected to IN2, pin 4 is connected to IN3, and pin 2 is connected to IN4. Pins 1, 3, 5, 7 are field-side ground.                                                                                                                                |
| T2                           | Terminal block for the MAX22196 digital inputs IN5 to IN8. Pin 8 is connected to IN5, pin 6 is connected to IN6, pin 4 is connected to IN7, and pin 2 is connected to IN8. Pins 1, 3, 5, 7 are field-side ground. When U1 is installed with the MAX22194, IN5 to IN8 are connected to the IC pins on the MAX22194. Leave IN5 to IN8 unconnected. |
| PMOD1                        | The 12-pin Pmod-compatible male connector to allow external microcontroller or FPGA to configure the MAX22196. It can also be used in daisy-chain mode by connecting to the PMOD2 connector of another MAX22196 EV kit.                                                                                                                          |
| PMOD2                        | The 12-pin Pmod-compatible female connector to be used in daisy-chain mode by connecting to the PMOD1 connector of another MAX22196 EV kit.                                                                                                                                                                                                      |
| CONN1                        | Barrel connector with positive center polarity as the EV kit main power supply. Connect +24V DC to CONN1 or between VF24 and GND_TP1 test points.                                                                                                                                                                                                |
| X1                           | Micro-USB connector to connect the MAX22196 EV kit to a PC USB port                                                                                                                                                                                                                                                                              |

## MAX22196 Evaluation Kit

## Detailed Description of Hardware

The MAX22196 EV kit provides a proven design for a galvanically isolated configurable Type 1/3 or Type 2 sink or source digital input solution using the MAX22194 or MAX22196 and the MAX14483.

## Power Supplies

The EV kit has two power domains, the 'logic side' which is powered from USB -supplied power (3V3\_USB and UGND), and the 'field side' which is typically powered from an external 24V DC supply connected to the VF24 and GND test points. A MAX1556 DC-DC converter converts the +5V USB supply to a regulated +3.3V (3V3\_ USB) supply, which powers the EV kit logic side.

When REGEN is open (J3 is open), the MAX22196 has integrated regulator enabled to provide low voltage output V A (5V, nominal), which is used to set the SPI logic interface level (V L ) and to power the field side of the digital isolator if J6 is in 1 -2 position (see Table 1 ). When REGEN is connected to ground (J3 in 1 -2 position), the MAX22196 analog supply VA is powered externally by applying an external 3.0V to 5.5V supply through the VA and GND test points. Note that V 24 supply should still be applied if operating the device in source mode. In sink and TTL modes, external 24V on V 24  is not necessary.

In the case that an external microcontroller is used on the PMOD1 connector (SW1 contacts all open), the logic supply (V L ) of the MAX22196 is provided by an external microcontroller supply. Remove jumper J6 (see Table 1 ), connect a 2.5V to 5.5V external supply to pins 6 and 12 on the PMOD1 connector, and populate R20 with a 0Ω resistor.

## Digital Inputs and Surge Protection

The MAX22196 senses the logic state of eight digital inputs. The voltages at the IN1 to IN8 input pins are compared against  internal  references  to  determine  whether  the  field  input  is  high  (logic  1)  or  low  (logic  0).  Each  input  can  be individually configured for current sinking or sourcing, Type 1/3 or Type 2 DI, 5V TTL or 24V HTL operation.

The REFDI resistor R39 (12k Ω ) and input resistors R1 to R8 (680 Ω ) ensure that the current at the ON and OFF trip points as well as the voltage at the trip points satisfy the requirements of IEC 61131-2 Type 1/3 or Type 2 digital inputs.

Channels 1 to 4 and channels 5 to 8 demonstrate two options for surge protection on the MAX22196 field inputs. On channels 1 to 4, the input resistors R 1 to R4 are 680Ω, 1.5W pulse withstanding thick film 2512 resistors to support IEC 61000-4-5 surge tolerance at ±1kV line-to-ground without the requirements for an external TVS diode on each input. On channels 5 to 8, the input resistors R5 to R8 are 680Ω, 0.1W 0603 resistors with an SMAJ33CA TVS diode (D2 to D5) on each field input. Both options support IEC 61000-45 1.2μs/50μs surges of up to ±1kV line -toground with 42Ω + 0.5μF CDN.

When U1 is installed with the MAX22194, the IN5 to IN8 inputs are connected to the IC pins of the MAX22194. Leave IN5 to IN8 inputs unconnected. The IN1 to IN4 inputs have the same functionalities as the MAX22196 inputs.

## LED Matrix

The MAX22196 features six logic output pins (LO1 to LO6) that can be configured as six general-purpose push-pull logic outputs (GPO) or as a 3 x 3 LED driver crossbar matrix. When configured in the GPO mode, LO1 to LO6 outputs can be accessed by LO1 to LO6 test points (see Table 2 ), and LED1 to LED9 status are don't care. When configured in the LED matrix mode, LED1 to LED9 demonstrate LED matrix operation as shown in the EV Kit System Block Diagram . When the LED matrix is in the autonomous mode, LED1 to LED8 indicate per input channel status hence they are located next to their respective input channels. LED9 indicates the status of V M  comparator.

When  U1  is  installed  with  the  MAX22194,  and  the  device  is  configured  in  the  LED  matrix  mode,  LED1  to  LED4 demonstrate the same LED matrix operation as in the MAX22196, and LED5 to LED9 are don't care. When the device is configured in the GPO mode, LO1 to LO6 are GPOs.

## SPI Interface

The EV kit software communicates over USB to the SPI and supports full 12MHz clock rate for the MAX22196. The EV kit  includes  a  standard  Pmod-compatible  12-pin  header  (PMOD1)  to  connect  to  an  external  adapter  board  (MCU  or FPGA). If the user wants to interface to their own microcontroller or FPGA, simply connect to the Pmod connector PMOD1, open all SW1 switches, and provide the user-supplied firmware.

## Evaluates: MAX22194, MAX22196

## MAX22196 Evaluation Kit

## Evaluates: MAX22194, MAX22196

## Daisy-Chain Operation with Multiple MAX22196EVKIT#

The MAX22196 EV kit can operate as a standalone device or be daisy-chained with other MAX22196 EV kits using PMOD1 and PMOD2 connectors. The MAX22196 EV kit software supports up to four devices in a daisy chain, but the device itself can support more.

The first device in the daisy chain (Device 1) communicates to a PC through a USB interface. The PMOD2 connector on the Device 1 EV kit connects to the PMOD1 connector on the Device 2 EV kit. In this way, CS , SCLK, FAULT , READY , and LATCH signals of the devices in the daisy chain are shorted, respectively. The SDO of the Device 1, routed on PMOD2 pin 2, is connected to the SDI of the Device 2, routed on PMOD1 pin 2. Pin 3 of PMOD1 and PMOD2 are used to route the SDO of the last device in the chain back to the first device, which communicates with the SPI controller, i.e., FT2232 USB-to-SPI bridge. See the MAX22196 EV Kit Schematic for details.

On the Device 1 EV kit, close all switches on SW1 in order to allow the MAX22196 EV kit software communicating with all devices in the daisy chain using Device 1 EV kit USB-to-SPI bridge. On all trailing EV kits, open all switches on SW1 to disconnect the MAX22196 SPI from their own USB-to-SPI bridge, preventing any bus contention. To allow the SDO of the last device in the chain connected back to the first device, jumper J7 is set to 1 -2 position for the last device in the daisy chain and it is set to 2 -3 position for the other devices in the chain. Jumper J5 (DAISY) is set to 1 -2 position for all devices in the daisy chain to enable SPI daisy-chain mode.

## Galvanic Isolation

The MAX22196 EV kit uses a digital isolator to provide galvanic isolation between the logic and field sides. The MAX14483 is a six-channel digital isolator, providing a single-chip solution when interfacing to the MAX22196. The isolator has two power supplies  (V DDA   and  V DDB )  which  operate  between  1.71V  to  5.5V  and  provide  voltage  translation  as  well  as galvanic is olation. The 'logic side' V DDB of the isolator is powered from 3V3\_USB and UGND while the 'field side' V DDA of the isolator is powered from V L  and GND. When testing isolation performance, care should be taken not to have a multi-channel oscilloscope ground connection to both GND and UGND.

Protective Earth (PE) is provided on the lower-right corner of the EV kit with safety-rated Y capacitors between field ground  (GND)  and  PE  (C33),  and  between  GND  and  logic  ground  (UGND)  (C34)  to  improve  the  high-voltage,  fast transient performance.

## IEC 61000-4 Transient Immunity Compliance

The typical application for the MAX22196 requires it to pass basic transient immunity standards as defined by IEC 610004-x, covering -2 for ESD, -4 for Electrical Fast Transient/Burst (EFT), and -5 for Surge Immunity. The MAX22196 EV kit includes circuitry to support testing to these standards to support ±1kV line-to-ground and line-to-line surge, ±8kV contact ESD, and ±15kV air-gap ESD at the field input. The TVS diode (D1) provides protection from surge and ESD voltages applied through the VF24 test point. Diode D6 blocks the reverse current at the V 24  pin of the MAX22196 during negative surges. To achieve the best surge performance on the field input, place a minimum 680Ω pulse -withstanding resistor between the field input and the device input pin. C33 is a 3300pF safety-rated Y capacitor placed between PE and GND to improve transient immunity (EFT). C34 is a 1000pF safety-rated Y capacitor connected between the GND and UGND to enhance the isolation barrier robustness. For systems where PE and UGND are bonded together, the user can install resistor R38.

## Detailed Description of Software

When the MAX22196 EV kit software starts, it automatically detects if the EV kit is connected to a PC and indicates its status in the status bar at the bottom edge of the GUI. If the software does not recognize the EV kit board, make sure that the software and all drivers are properly installed, check the USB connection, and go to the Device menu and select the Search for Hardware option. When the EV kit is properly connected, the MAX22196 device is read and all controls are updated (see Figure 1 ).

The main window of the EV kit software contains two groups of controls: Configuration and Register Map tabs, and general controls for the EV kit. The Configuration tab provides the controls to directly configure the MAX22196 features such as configuring the input channel mode, reading digital inputs, input filter configuration, fault status reporting, etc. The general controls for the EV kit allow the user to select the SCLK speed, SPI address, CRC enable, LATCH operation, etc. Next to the Configuration tab, the Register Map tab lists all registers in the MAX22196 and provides direct read and write access to all control bits.

## MAX22196 Evaluation Kit

## Evaluates: MAX22194, MAX22196

If the MAX22196EVKIT# hardware is not connected automatically, the Device menu provides the functionality to connect to  or  disconnect  from  the  hardware  by  choosing  detected  EV  kit  serial  numbers.  Under  the Options menu,  a CRC Calculator (see Figure 4 ) is provided to calculate the 5-bit CRC code based on the data frame provided by the user. The jumper positions are shown in the Jumper Setting Diagram (see Figure 5 )  under the Options menu based on SPI operation modes.

## Configuration Tab

The Configuration tab provides an interface for configuring the MAX22196 from a functional perspective. Before sending the commands to the MAX22196, select the desired SPI mode and configure the jumpers according to Table 1 . The tab provides controls for per-channel mode selection, input filter configuration, fault status reporting, LED matrix configuration, CRC value calculation, etc.

After power up, the MAX22196 FAULT pin is low, the POR and FAULT2 bits in the FAULT1 register and the VAUV bit in the FAULT2 register are set, indicating that a power-on-reset has occured and all registers are set to default. Upon launching the MAX22196 EV kit software, all registers are read twice to clear latched faults and retrieve the latest register values. If the device operates normally, all faults are cleared as shown in Figure 1 and FAULTB LED is turned off.

The Read All button reads the MAX22196 registers and refreshes all the controls with current setting. The Read DI and Read DI Continuously buttons read the DISTATE register, along with the six diagnostic bits on the SDO, and update the corresponding controls. The Read FAULT Status button  reads  the  FAULT1 and FAULT2 registers and updates the corresponding fault status in the Configuration tab.

## Daisy-Chain Operation

The EV kit software supports up to four devices in the daisy-chain mode. By default, the software operates in addressable SPI mode and communicates with only one device, which is indicated by allowing only ' Device 1 ' in the Device Selection menu. In the addressable SPI mode, Daisy Chain Enable checkbox is not selected and jumper J5 (DAISY) is in 2 -3 position.  Choose the SPI address in the SPI Address (A1:A0) dropdown box to match the A1 and A0 pin settings, configured by J1 and J2 jumpers.

In the daisy-chain mode, Daisy Chain Enable checkbox is selected and jumper J5 (DAISY) is in 1 -2 position. Based on the location of the EV kit in the chain, J7 on all the EV kits should be configured properly to route the last device's SDO back to the first EV kit in the chain, which communicates with the EV kit software through the USB. See the Daisy-Chain Operation with Multiple MAX22196EVKIT# section for hardware configuration.

When more than two devices are connected in daisy-chain mode, select the number of devices in the chain by changing the Number of Devices dropdown box. Up to four devices are supported by the software. The Device Selection menu is updated with all device numbers when Number of Devices selection is changed. Select which device to communicate with in the Device Selection menu, and then the Configuration and Register Map tabs are updated to show the selected device's register content. The EV kit software only sends commands to the specified device. The software maintains all four devices' register contents in the PC memory.

## MAX22196 Evaluation Kit

## CRC Calculator

Clicking CRC Calculator under the Options menu opens the CRC calculation window (see Figure 4 ).  The  software calculates the 5-bit CRC code based on the 16-bit data and displays the result.

Figure 4. MAX22196 EV Kit Software -CRC Calculator

<!-- image -->

Evaluates: MAX22194, MAX22196

## MAX22196 Evaluation Kit

## Jumper Setting Diagram

Clicking Jumper Setting Diagram under  the Options menu  opens  the  jumper  setting  window  (see Figure  5 ).  The software  displays  the  jumper  positions  based  on  the  current  device  operation  mode  in  the  top  silkscreen  diagram. Changing the SPI configuration updates the shunt positions in the diagram. In the addressable SPI mode, jumpers J1 and J2 are updated to match the address configured in the SPI Address (A1:A0) dropdown box. In the daisy-chain mode, jumper J7 should be updated based on the EV kit location in the chain. Connect J7 in 1 -2 location when the EV kit is the last device in the chain and connect J7 in 2 -3 location when the EV kit is one of the first devices in the chain. Note that the EV kit software supports up to four devices in the chain.

Figure 5. MAX22196 EV Kit Software -Jumper Setting Diagram

<!-- image -->

## Evaluates: MAX22194, MAX22196

## MAX22196 Evaluation Kit

## Register Map

The Register Map tab shows all MAX22196 registers information including the register name, address, value, read or write accessibility, and the register description. The Value cell  can be changed by the user if the register is writable. Pressing the Enter key after changing the Value writes to the register. When a certain register is highlighted in the register list, the bits' information in this register is displayed in the Bits Description table. The bit Setting is configurable if the bit is writable, which triggers a write operation to its register.

Clicking Read All reads all registers and refreshes the window with current register values. Clicking Write All writes the current settings to all registers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX22196EVKIT# | EV Kit |

Note: MAX22196EVKIT# comes with MAX22196ATJ+. To evaluate the MAX22194ATJ+, request samples separate to the EV kit.

Evaluates: MAX22194, MAX22196

## MAX22196 Evaluation Kit

## MAX22196 EV Kit Bill of Materials

|   ITEM | REF_DES                                                       | DNI/DNP   |   QTY | MFG PART #                                                                          | MANUFACTURER                            | VALUE         | DESCRIPTION                                                                                                             |
|--------|---------------------------------------------------------------|-----------|-------|-------------------------------------------------------------------------------------|-----------------------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------|
|      1 | 3V3_USB, V24, VA, VF24, VL                                    | -         |     5 | 5010                                                                                | KEYSTONE                                | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                   |
|      2 | C1, C9, C29                                                   | -         |     3 | CL21B106KOQNNN; GRM21BZ71C106KE15; GMC21X7R106K16NT                                 | SAMSUNG; MURATA; CAL-CHIP               | 10µF          | CAP; SMT (0805); 10µF; 10%; 16V; X7R; CERAMIC                                                                           |
|      3 | C2                                                            | -         |     1 | C1608X7R1H474K080AC                                                                 | TDK                                     | 0.47µF        | CAP; SMT (0603); 0.47µF; 10%; 50V; X7R; CERAMIC                                                                         |
|      4 | C3                                                            | -         |     1 | C1608C0G2A102J080AA; C0603C102J1GAC                                                 | TDK;KEMET                               | 1000PF        | CAP; SMT (0603); 1000PF; 5%; 100V; C0G; CERAMIC                                                                         |
|      5 | C4                                                            | -         |     1 | C0603C103K2RAC                                                                      | KEMET                                   | 0.01µF        | CAP; SMT (0603); 0.01µF; 10%; 200V; X7R; CERAMIC                                                                        |
|      6 | C5                                                            | -         |     1 | C2012X5R1C226K125AC                                                                 | TDK                                     | 22µF          | CAP; SMT (0805); 22µF; 10%; 16V; X5R; CERAMIC                                                                           |
|      7 | C6, C7, C10, C11, C13, C15-C19, C21, C22, C24, C28, C30, C32, | -         |    19 | CC0603KRX7R0BB104; GRM188R72A104KA35; HMK107B7104KA; 06031C104KAT2A; GRM188R72A104K | YAGEO; MURATA; TAIYO YUDEN; AVX; MURATA | 0.1µF         | CAP; SMT (0603); 0.1µF; 10%; 100V; X7R; CERAMIC                                                                         |
|      8 | C8, C23, C25                                                  | -         |     3 | TMK212AB7475K; C2012X7R1E475K125AB; GRM21BZ71E475KE15                               | TAIYO YUDEN; TDK; MURATA                | 4.7µF         | CAP; SMT (0805); 4.7µF; 10%; 25V; X7R; CERAMIC                                                                          |
|      9 | C14, C20, C31, C36                                            | -         |     4 | UMK107AB7105KA; CC0603KRX7R9BB105                                                   | TAIYO YUDEN; YAGEO                      | 1µF           | CAP; SMT (0603); 1µF; 10%; 50V; X7R; CERAMIC                                                                            |
|     10 | C26, C27                                                      | -         |     2 | C0603C0G500-180JNE; C1608C0G1H180J080AA; GRM1885C1H180J                             | VENKEL LTD.; TDK; MURATA                | 18PF          | CAP; SMT (0603); 18PF; 5%; 50V; C0G; CERAMIC                                                                            |
|     11 | C33                                                           | -         |     1 | VJ2220Y332KXUSTX1; GA355QR7GF332KW01                                                | VISHAY VITRAMON; MURATA                 | 3300PF        | CAP; SMT (2220); 3300PF; 10%; 250V; X7R; CERAMIC                                                                        |
|     12 | C34                                                           | -         |     1 | VJ2220A102KXUSTX1                                                                   | VISHAY VITRAMON                         | 1000PF        | CAP; SMT (2220); 1000PF; 10%; 250V; C0G; CERAMIC                                                                        |
|     13 | C38                                                           | -         |     1 | 08051C105K4Z2A                                                                      | AVX                                     | 1µF           | CAP; SMT (0805); 1µF; 10%; 100V; X7R; CERAMIC                                                                           |
|     14 | CONN1                                                         | -         |     1 | PJ-202AH                                                                            | CUI INC.                                | PJ-202AH      | CONNECTOR; MALE; THROUGH HOLE; DC POWER JACK; RIGHT ANGLE; 3PINS                                                        |
|     15 | CSB, FAULTB, LATCHB, READYB, REFDI, SCLK, SDI, SDO            | -         |     8 | 5014                                                                                | KEYSTONE                                | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH |
|     16 | D1-D5                                                         | -         |     5 | SMAJ33CA                                                                            | VISHAY GENERAL SEMICONDUCTOR            | 33V           | DIODE; TVS; SMA (DO-214AC); VRM=33V; IPP=7.5A                                                                           |
|     17 | D6                                                            | -         |     1 | MMBD6050LT1G                                                                        | ON SEMICONDUCTOR                        | MMBD605 0LT1G | DIODE; SWT; SMT (SOT-23); PIV=70V; IF=0.2A                                                                              |

Evaluates: MAX22194, MAX22196

## MAX22196 Evaluation Kit

## Evaluates: MAX22194, MAX22196

|   18 | EARTH                         | -   |   1 | 5012              | KEYSTONE                  | N/A                | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH   |
|------|-------------------------------|-----|-----|-------------------|---------------------------|--------------------|--------------------------------------------------------------------------------------------------------------------------|
|   19 | FIELD_RDY, LED_USB, LOGIC_RDY | -   |   3 | LTST-C193KSKT-5A  | LITE-ON ELECTRONICS INC.  | LTST- C193KSK T-5A | DIODE; LED; YELLOW; SMT (0603); VF=2V; IF=0.005A                                                                         |
|   20 | GND_TP1- GND_TP8, UGND        | -   |   9 | 5011              | KEYSTONE                  | N/A                | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH   |
|   21 | IN1-IN8                       | -   |   8 | 5013              | KEYSTONE                  | N/A                | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH  |
|   22 | J1, J2, J4, J5, J7            | -   |   5 | PCC03SAAN         | SULLINS                   | PCC03SA AN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                 |
|   23 | J3, J6                        | -   |   2 | PCC02SAAN         | SULLINS                   | PCC02SA AN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                 |
|   24 | L1, L3, L4                    | -   |   3 | BLM21PG331SN1     | MURATA                    | 330                | INDUCTOR; SMT (0805); FERRITE-BEAD; 330; TOL=±25%; 1.5A                                                                  |
|   25 | L2                            | -   |   1 | B82432T1332K000   | TDK                       | 3.3UH              | INDUCTOR; SMT (1812); FERRITE CORE; 3.3UH; TOL=±10%; 0.9A                                                                |
|   26 | LED1-LED9, LED_VMOKB          | -   |  10 | LTST-C193KGKT-5A  | LITE-ON ELECTRONICS INC.  | LTST- C193KGK T-5A | DIODE; LED; STANDARD; YELLOW-GREEN; SMT (0603); PIV=1.9V; IF=0.005A; -55 DEGC TO +85 DEGC                                |
|   27 | LED_FAULTB, LED_READYB        | -   |   2 | LTST-C193KRKT-2A  | LITE-ON ELECTRONICS INC.  | LTST- C193KRK T-2A | DIODE; LED; EXTRA THIN; EXTRA BRIGHT; RED; SMT (0603); VF=2.2V; IF=0.002A                                                |
|   28 | LO1-LO6                       | -   |   6 | 5126              | KEYSTONE                  | N/A                | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; GREEN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH   |
|   29 | MTH1-MTH4                     | -   |   4 | 9032              | KEYSTONE                  | 9032               | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                |
|   30 | PMOD1                         | -   |   1 | TSW-106-08-S-D-RA | SAMTEC                    | TSW-106- 08-S-D-RA | CONNECTOR; THROUGH HOLE; DOUBLE ROW; RIGHT ANGLE; 12PINS                                                                 |
|   31 | PMOD2                         | -   |   1 | PPPC062LJBN-RC    | SULLINS ELECTRONICS CORP. | PPPC062 LJBN-RC    | CONNECTOR; FEMALE; THROUGH HOLE; 0.1IN CC; HEADER; 2 ROW; RIGHT ANGLE; 12PINS                                            |

## MAX22196 Evaluation Kit

## Evaluates: MAX22194, MAX22196

|   32 | R1-R4                        | -   |   4 | CRCW2512680RFKEGHP                                                                 | VISHAY                                                | 680      | RES; SMT (2512); 680; 1%; ±100PPM/DEGC; 1.5000W                                                         |
|------|------------------------------|-----|-----|------------------------------------------------------------------------------------|-------------------------------------------------------|----------|---------------------------------------------------------------------------------------------------------|
|   33 | R5-R8                        | -   |   4 | CRCW0603680RFK                                                                     | VISHAY DALE                                           | 680      | RES; SMT (0603); 680; 1%; ±100PPM/DEGC; 0.1000W                                                         |
|   34 | R9                           | -   |   1 | RC0603FR-07100RL; CR0603-FX-1000ELF                                                | YAGEO;BOURNS                                          | 100      | RES; SMT (0603); 100; 1%; ±100PPM/DEGC; 0.1000W                                                         |
|   35 | R11, R14                     | -   |   2 | CRCW060310R0FK; MCR03EZPFX10R0; ERJ-3EKF10R0                                       | VISHAY; ROHM SEMICONDUCTOR; PANASONIC                 | 10       | RES; SMT (0603); 10; 1%; ±100PPM/DEGC; 0.1000W                                                          |
|   36 | R12, R13, R21-R25            | -   |   7 | CRCW06030000ZS; MCR03EZPJ000; ERJ-3GEY0R00; CR0603AJ/-000ELF                       | VISHAY; ROHM SEMICONDUCTOR; PANASONIC; BOURNS         | 0        | RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                                                             |
|   37 | R15, R17, R28, R36, R41, R44 | -   |   6 | CRCW060310K0FK; ERJ-3EKF1002; AC0603FR-0710KL; RMCF0603FT10K0                      | VISHAY; PANASONIC;YAGEO; ZSTACKPOLE                   | 10K      | RES; SMT (0603); 10K; 1%; ±100PPM/DEGC; 0.1000W                                                         |
|   38 | R16                          | -   |   1 | CRCW06032K20FK                                                                     | VISHAY DALE                                           | 2.2K     | RES; SMT (0603); 2.2K; 1%; ±100PPM/DEGC; 0.1000W                                                        |
|   39 | R18                          | -   |   1 | CRCW060315K0FK                                                                     | VISHAY DALE                                           | 15K      | RES; SMT (0603); 15K; 1%; ±100PPM/DEGC; 0.1000W                                                         |
|   40 | R19, R39                     | -   |   2 | CRCW060312K0FK                                                                     | VISHAY DALE                                           | 12K      | RES; SMT (0603); 12K; 1%; ±100PPM/DEGC; 0.1000W                                                         |
|   41 | R26                          | -   |   1 | CRCW0603100KFK; RC0603FR-07100KL; RC0603FR-13100KL; ERJ-3EKF1003; AC0603FR-07100KL | VISHAY DALE;YAGEO;YAGE O;PANASONIC; YAGEO             | 100K     | RES; SMT (0603); 100K; 1%; ±100PPM/DEGC; 0.1000W                                                        |
|   42 | R29-R35                      | -   |   7 | CRCW060320R0FK; ERJ-3EKF20R0                                                       | VISHAY DALE; PANASONIC                                | 20       | RES; SMT (0603); 20; 1%; ±100PPM/DEGC; 0.1000W                                                          |
|   43 | R37, R40, R42                | -   |   3 | CRCW06034K70FK                                                                     | VISHAY DALE                                           | 4.7K     | RES; SMT (0603); 4.7K; 1%; ±100PPM/DEGC; 0.1000W                                                        |
|   44 | R43                          | -   |   1 | ERJ-3EKF1603                                                                       | PANASONIC                                             | 160K     | RES; SMT (0603); 160K; 1%; ±100PPM/DEGC; 0.1000W                                                        |
|   45 | R45                          | -   |   1 | CRCW060318K0FK                                                                     | VISHAY DALE                                           | 18K      | RES; SMT (0603); 18K; 1%; ±100PPM/DEGC; 0.1000W                                                         |
|   46 | R46-R48                      | -   |   3 | CRCW06031K00FK; ERJ-3EKF1001; CR0603AFX-1001ELF; RMCF0603FT1K00                    | VISHAY; PANASONIC; BOURNS; STACKPOLE ELECTRONICS INC. | 1K       | RES; SMT (0603); 1K; 1%; ±100PPM/DEGC; 0.1000W                                                          |
|   47 | SU1-SU7                      | -   |   7 | S1100-B;SX1100-B; STC02SYAN                                                        | KYCON; KYCON; SULLINS ELECTRONICS CORP.               | SX1100-B | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED |
|   48 | SW1                          | -   |   1 | 219-7MST                                                                           | CTS                                                   | 219-7MST | SWITCH; SPST; SMT; STRAIGHT; 20V; 0.1A; SURFACE MOUNT DIP SWITCH-AUTO PLACEABLE; RINSULATION=1000M OHM  |
|   49 | T1, T2                       | -   |   2 | 250-408                                                                            | WAGO                                                  | 250-408  | CONNECTOR; FEMALE; THROUGH HOLE; COMPACT TERMINAL STRIP WITH PUSH BUTTON; STRAIGHT; 8PINS               |

## MAX22196 Evaluation Kit

## Evaluates: MAX22194, MAX22196

| 50    | U1            | -     |   1 | MAX22196ATJ+         | MAXIM                               | MAX2219 6ATJ+       | EVKIT PART - IC; INDUSTRIAL OCTAL SINK/SOURCE DIGITAL INPUT; PACKAGE OUTLINE DRAWING: 21-0140; LAND PATTERN: 90-0013; PACKAGE CODE: T3255+8C   |
|-------|---------------|-------|-----|----------------------|-------------------------------------|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| 51    | U2            | -     |   1 | MAX1556ETB+          | MAXIM                               | MAX1556 ETB+        | IC; CONV; PWM STEP-DOWN DC-DC CONVERTER; TDFN10-EP 3X3                                                                                         |
| 52    | U3            | -     |   1 | 93LC66BT-E/OT        | MICROCHIP                           | 93LC66BT -E/OT      | IC; EPROM; 4K MICROWIRE SERIAL EEPROM; SOT23-6                                                                                                 |
| 53    | U4            | -     |   1 | FT2232HQ             | FUTURE TECHNOLOGY DEVICES INTL LTD. | FT2232H Q           | IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; QFN64-EP                                                                              |
| 54    | U5            | -     |   1 | MAX14483AAP+         | MAXIM                               | MAX1448 3AAP+       | IC; DISO; 6-CHANNEL; LOW- POWER; 3.75KVRMS SPI DIGITAL ISOLATOR; SSOP20                                                                        |
| 55    | X1            | -     |   1 | ZX62RD-AB-5P8(30)    | HIROSE ELECTRIC CO LTD.             | ZX62RD- AB- 5P8(30) | CONNECTOR; MALE; THROUGH HOLE; MICRO-USB CONNECTOR MEETING REQUIREMENTS OF USB 2.0 STANDARD; RIGHT ANGLE; 5PINS                                |
| 56    | Y1            | -     |   1 | ABM7-12.000MHZ-D2Y-T | ABRACON                             | 12MHZ               | CRYSTAL; SMT; 12MHZ; 18PF; TOL = ±20PPM; STABILITY = ±30PPM                                                                                    |
| 57    | PCB           | -     |   1 | MAX22196             | MAXIM                               | PCB                 | PCB:MAX22196                                                                                                                                   |
| 58    | C12           | DNP   |   0 | GRM32EC72A106KE05    | MURATA                              | 10µF                | CAP; SMT (1210); 10µF; 10%; 100V; X7S; CERAMIC                                                                                                 |
| 59    | R38           | DNP   |   0 | CRCW25120000Z0EGHP   | VISHAY DRALORIC                     | 0                   | RES; SMT (2512); 0; JUMPER; JUMPER; 1.5000W                                                                                                    |
| 60    | R10, R20, R27 | DNP   |   0 | N/A                  | N/A                                 | OPEN                | PACKAGE OUTLINE 0603 RESISTOR                                                                                                                  |
| TOTAL | TOTAL         | TOTAL | 176 |                      |                                     |                     |                                                                                                                                                |

## MAX22196 Evaluation Kit

## MAX22196 EV Kit Schematic

<!-- image -->

Evaluates: MAX22194, MAX22196

## MAX22196 EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX22194, MAX22196

## MAX22196 EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX22194, MAX22196

## MAX22196 Evaluation Kit

## MAX22196 EV Kit PCB Layout

MAX22196 EV Kit Component Placement Guide -Top Silkscreen

<!-- image -->

MAX22196 EV Kit PCB Layout -Top

<!-- image -->

## Evaluates: MAX22194, MAX22196

MAX22196 EV Kit PCB Layout -Layer 2

<!-- image -->

MAX22196 EV Kit PCB Layout -Layer 3

<!-- image -->

## MAX22196 Evaluation Kit

## MAX22196 EV Kit PCB Layout (continued)

MAX22196 EV Kit PCB Layout -Bottom

<!-- image -->

## Evaluates: MAX22194, MAX22196

MAX22196 EV Kit Component Placement Guide -Bottom Silkscreen

<!-- image -->

## MAX22196 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                                                                              | PAGES CHANGED         |
|-------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------|
|                 0 | 02/23           | Initial release                                                                                                                                                                                                                                                          | -                     |
|                 1 | 04/24           | Updated EV Kit Title, General Description, Features and Benefits, EV Kit Contents, MAX22196 EV Kit Files, Quick Start, EV Kit System Block Diagram, Table 2, Detailed Description of Hardware, Digital Inputs and Surge Protection, LED Matrix, and Ordering Information | 1, 2, 5, 6, 7 - 9, 14 |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## Evaluates: MAX22194, MAX22196