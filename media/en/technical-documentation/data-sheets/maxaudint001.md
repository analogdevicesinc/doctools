<!-- lastmod 2022-08-03 -->
## Audio Interface 1

## General Description

The Maxim Audio Interface 1 (AUDINT1) board provides both an I 2 C and I 2 S interface to facilitate the evaluation of compatible Maxim Development (DEV) boards. Maxim DEV boards that are evaluated with the AUDINT1 interface board can require custom GUI software, which is available as a download from Maxim's evkit-software web page.

The AUDINT1  board  and  a  compatible  DEV  board  are ordered together as an evaluation system (EV system). Ordering information for EV systems is located in the EV system data sheet.

Refer to the appropriate EV system data sheet for quick start and detailed operating instructions.

The AUDINT1 board is provided as part of selected Maxim evaluation systems (EV system) to evaluate Maxim parts only. The use of the AUDINT1 board as a development target is not supported. Refer to the MAXQ2000 evaluation kit data sheet for this purpose.

## Simplified EV System Block Diagram

<!-- image -->

<!-- image -->

Evaluates: MAXUDINT1

## Benefits and Features

- USB Powered (+5V)
- USB-to-I 2 C (USB CONTROL)
- USB-to-I 2 S (USB AUDIO)
- On-Board Master Clock Sources
- On-Board LDOs (+1.2V, +1.8V, +3.3V)
- Compatible with Standard FTDI VCP Drivers
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Quick Start

## Required Equipment

- Device-specific DEV board
- Two A-to-mini B USB cables (provided)
- Windows XP®, Windows® 7, or Windows 8 computer with two available USB ports

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  evaluation  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The AUDINT1 board is fully assembled and tested. Follow these steps to setup the AUDINT1 board for the evaluation of a compatible DEV board:

- 1) Configure the AUDINT1 jumpers and switches based on the needs of the companion DEV board. See Table 2 and 3 for jumper configuration options and refer to the DEV board's data sheet for device configuration requirements.
- 2) Before  connecting  the  PC  to  the  AUDINT1  board, install the evaluation software for the  device-specific  DEV  board.  This  is  to  ensure  that  the  USB device driver, which is packaged  with the evaluation software, gets installed on the host PC. To download the devices's evaluation software, go to www.maximintegrated.com/evkitsoftware . Refer to the EV system data sheet for additional details.
- 3) Do not proceed until the evaluation software installation  is  completed.   This  ensures  that  the  required virtual COM port (VCP) driver is installed and the PC recognizes the AUDINT1 board as a USB device. If needed,  the  USB  driver  can  be  manually  installed by downloading and installing the VCP driver package (release 2.10.00 or newer) directly from the FTDI website.
- 4) Connect a USB cable between the PC and the USB1 port (USB CONTROL) on the AUDINT1 board. Once Windows reports the device is ready to use then the USB driver has been installed successfully. The status of the USB connection can be manually checked by opening Windows' Device Manager and expanding the Universal Serial Bus controllers item. Right click  on  the USB Serial Converter item  and  select Properties . On the Details tab select Hardware Ids from the Property field and verify that VID\_0403 and PID\_6001 are shown in the Value field.

## Evaluates: MAXAUDINT1

- 6) Open Windows' Sound dialog  and  select  the Playback tab. A USB Audio item should be listed as one of  the  available  playback  devices. All  audio  played through this device is streamed through the AUDINT1 module to the DEV board.
- 7) Connect the AUDINT1 board to the DEV board. Refer to the EV system data sheet for additional quick start steps that might be needed to prepare the EV system for evaluation.

## Detailed Description of Software

The AUDINT1 board is a tool that is designed to be used with compatible DEV boards, and as such, does not have its own dedicated GUI software. Refer to the appropriate EV system data sheet for further evaluation details. The EV system data sheet provides details about the associated DEV board and its use with the AUDINT1 board.

Note: A DEV board may not require PC GUI software, as would be the case for a DEV board that only utilizes the audio streaming capability of the AUDINT1 board.

## Detailed Description of Hardware

The AUDINT1 board provides both an I 2 C and I 2 S interface  to  facilitate  the  evaluation  of  compatible  Maxim development  (DEV)  boards.  The  AUDINT1  interface board comprises two microcontroller circuits, one for each of the available interfaces.

The multicore microcontroller (U200) provides the USB-toI 2 S  interface, allowing for audio streaming onto Maxim's I 2 S-compatible  DEV  boards.  The  Maxim  MAXQ2000 microcontroller (U100) and the FTDI (U101) device provide the USB-to-I 2 C interface, providing the communication link between an I 2 C capable DEV board and its associated PC GUI software. The MAXQ2000 microcontroller provides the I 2 C interface and the FTDI device provides the USB to serial interface, which is supported by standard FTDI drivers.

The AUDINT1 module operates from USB power (+5V) and does not require any external power supplies. Each of the USB ports (USB1 and USB2) is capable of powering  the  on-board  LDOs  that  provide  power  to  the  connected  DEV  board.  The  available  LDO  output  voltages are +1.2V, +1.8V, and +3.3V.

- 5) Connect a USB cable between the PC and the USB2 port (USB AUDIO) on the AUDINT1 board.

The 26-pin (2x 13) female connector (J1) on the AUDINT1 board connects to its male counterpart on a compatible DEV board. This connector includes connections for I 2 S, I 2 C,  logic rail voltages, and ground. This connector also provides  connections  for  six  of  the  MAXQ2000's  GPIO pins, two of which are used for interrupt (IRQ) monitoring.

Windows and Windows XP are registered trademarks of Microsoft Corporation.

## Table 1. USB Power Distribution

| I 2 S CAPABLE DEV BOARD   | I 2 C CAPABLE DEV BOARD   | USING EVALUATION SOFTWARE   | MODE (SW1)   | USB CONNECTIONS   | FUNCTIONALITY                                                                 |
|---------------------------|---------------------------|-----------------------------|--------------|-------------------|-------------------------------------------------------------------------------|
| Yes                       | Yes                       | Yes                         | EVAL*, DEMO  | USB1 + USB2       | USB audio streaming + I 2 C device configura - tion using evaluation software |
| Yes                       | Yes                       | No                          | DEMO*        | USB2              | Automatic I 2 C device configuration + USB audio streaming                    |
| Yes                       | Yes                       | No                          | EVAL         | USB1 + USB2       | Automatic I 2 C device configuration + USB audio streaming                    |
| No                        | Yes                       | Yes                         | EVAL         | USB1              | I 2 C device configuration using evaluation software                          |
| No                        | Yes                       | No                          | EVAL         | USB1              | Automatic I 2 C device configuration                                          |
| Yes                       | No                        | -                           | EVAL*,DEMO   | USB2              | USB audio streaming                                                           |

## Table 2. Mode Of Operation

| MODE   | LOGIC RAILS (+1.8V, +3.3V, +1.2V, 3V3, 2V5)   | USB-TO-I 2 C CIRCUIT   | LOGIC RAILS (VDD18, VDD33, +1.0V)   | USB-TO-I 2 S CIRCUIT   | CLOCK CIRCUITS   |
|--------|-----------------------------------------------|------------------------|-------------------------------------|------------------------|------------------|
| EVAL*  | USB1                                          | USB1                   | USB2                                | USB2                   | USB2             |
| DEMO   | USB2                                          | USB2                   | USB2                                | USB2                   | USB2             |

*Default position.

## Mode of Operation

The AUDINT1 board can be evaluated in either demonstration  (DEMO) mode or evaluation (EVAL) mode. The mode of operation is set by switch SW1, which is located between the two USB ports.

DEMO mode is for situations when a PC is not available or does not have the required evaluation software. EVAL mode is for all other situations, as listed in Table 1. For cases  where  the  DEV  board  is  not  I 2 C  capable,  either mode can be used with a single USB connection (USB2).

## DEMO Mode

In  demonstration  (DEMO)  mode,  the AUDINT1  board  is intended to be evaluated with one USB connection (USB2). This mode of operation is intended for on-the-fly evaluations, where a PC may not be available or has not been setup with the required evaluation software. To utilize this mode for I 2 C device configuration, the MAXQ2000 requires customized  firmware.  The  customized  firmware  contains device-specific  instructions  that  automatically  configure the device on power-up and/or on the pressing of the SW2 pushbutton.

Although DEMO mode is only recommended for one specific case (I 2 S and I 2 C without software), it can be set for other cases as listed in Table 1. For these other cases, custom MAXQ2000 firmware is not required.

## EVAL Mode

In evaluation (EVAL) mode, the AUDINT1 board can be evaluated with one or two USB connections, depending on the needs of the companion DEV board (Table 1). The main use case for  EVAL  mode  is  when  the  EV  system (AUDINT1 board + DEV board) is evaluated with a PC that has been setup with the appropriate device-specific evaluation software.

As shown in Table 1, there are other situations in which the EVAL mode can be utilized. It can be used, and is recommended, when only USB audio streaming is needed. This reduces the load placed on the USB2 port by isolating  the  unused I 2 C  interface  from  the  USB2  power  rail. It  can  also  be  used  in  cases  where  USB audio streaming  is  not  needed  and  a  PC  is  not  available  or  has  not been setup with the device-specific evaluation software. As in DEMO mode, this case would require customized MAXQ2000 firmware to perform the automatic I 2 C device configuration (on power-up and/or on the pressing of the SW2 pushbutton).

## Power Supply

The  AUDINT1  board  is  powered  by  a  host  PC's  USB power (+5V) and does not require any external supplies. The power distribution across the board is determined by the  mode of operation, which is set by the SW1 switch (Table  1).  In  the  recommended  DEMO  mode,  only  one

│

Evaluates: MAXAUDINT1

## Table 3. Connector J1 Pinout

| SIGNAL   |   PIN |   PIN | SIGNAL   |
|----------|-------|-------|----------|
| GND      |     2 |     1 | MCLK     |
| GPIO3    |     4 |     3 | BCLK     |
| GPIO4    |     6 |     5 | LRCLK    |
| GPIO5    |     8 |     7 | DOUT     |
| GPIO6    |    10 |     9 | DIN      |
| +3.3V    |    12 |    11 | Reserved |
| GND      |    14 |    13 | DVDD     |
| GND      |    16 |    15 | VIO      |
| +5V      |    18 |    17 | SDA      |
| +5V      |    20 |    19 | SCL      |
| GPIO2    |    22 |    21 | GPIO1    |
| Reserved |    24 |    23 | Reserved |
| Reserved |    26 |    25 | Reserved |

USB connection (USB2) is needed to supply the board. In the recommended EVAL modes, one or both of the USB connections (USB1 and USB2) may be needed to power the board. See Table 2 for the USB power distribution in each mode of operation.

## MAXAUDINT001 Connector J1

Connector J1 is a 2-pin dual row right-angle header that connects to a compatible development (DEV) type EV kit. Although, it can be used to connect to other board types that  have a compatible male connector and appropriate pin mapping. All signal and power nets intended for the device(s) on the DEV board are routed to the J1 connec -tor. See Table 3 for a list of signals and logic-rail voltages available on the J1 connector.

## Hardware Configuration

The AUDINT1 board is configured by adjusting the pro -vided  jumpers  and  slide  switches. Table  4  and  Table  5 describe the jumper and switch configuration options.

## Master Clock (MCLK) Selection

The MCLK and MSEL switches are used to route one of the  on-board  clocks  to  the  master  clock  output  (MCLK) available at connector J1. An external clock can be used by setting the MCLK switch to DISCONNECTED and connecting the external clock to pin 2 of header J3 or pin 1 of connector J1.

See Table  6 to  configure  the  master  clock  output  to  one of the available on-board clocks: 11.2896MHz, 12MHz, or 12.288MHz. In order for the on-board clock circuits to work, power needs to be supplied to the USB2 port.

## I 2 S Audio

The AUIDNT1 board provides two methods for driving a DEV board's I 2 S Interface. The first method is through the I 2 S header (J3) and this provides the most direct connec -tion to the DEV board. The other method involves streaming audio through the USB AUDIO (USB2) port. In both cases, the I 2 S signal are connected to the DEV board by connecting to the J1 header.

## Digital Audio Interface Header J3

Header  J3  provides  direct  access  to  the  I 2 S  interface present on the J1 connector. See Table  7  for  individual pin descriptions. This header also allows for the use of an external audio source to drive the DEV board's I 2 S interface. When using an external audio source, configure the I 2 S switch with its actuator in the DISCONNECT position to prevent the multicore microcontroller (U200) from also driving the I 2 S bus.

## USB Audio (USB2)

The multicore microcontroller (U200) and USB PHY inter -face  (U202)  make  up  the  USB  audio  circuit  that  allows audio to be streamed from a PC connected to the USB2 port, onto a connected DEV board. The USB audio circuit

│

## Audio Interface 1

appears as a sound card to the PC and shows up as a USB Audio playback device in Windows' Sound dialog. Configure the USB Audio device as the default playback device (by pressing Set Default ) to have audio from the PC streamed  onto  the AUDINT1  board.  When  audio  is being streamed onto the AUDINT1 board, LEDB (located to the left of the XMOS device) turns on.

## Table 4. Jumper Configuration

| HEADER   | SHUNT POSITION   | DESCRIPTION                                                           |
|----------|------------------|-----------------------------------------------------------------------|
| DVDD     | +1.2V            | Provides +1.2V to the digital logic rail on the J1 connector (pin 13) |
| DVDD     | +1.8V*           | Provides +1.8V to the digital logic rail on the J1 connector (pin 13) |
| DVDD     | +3.3V            | Provides +3.3V to the digital logic rail on the J1 connector (pin 13) |
| DVDD     | GND              | Grounds the digital logic rail on the J1 connector (pin 13)           |
| VIO      | +1.8V*           | Provides +1.8V to the I/O logic rail on the J1 connector (pin 15)     |
| VIO      | +3.3V            | Provides +3.3V to the I/O logic rail on the J1 connector (pin 15)     |

Table 5. Switch Configuration

| SWITCH   | ACTUATOR POSITION   | DESCRIPTION                                                                                       |
|----------|---------------------|---------------------------------------------------------------------------------------------------|
| I 2 C    | DISCONNECT          | Disconnects the I 2 C interface from the J1 connector                                             |
| I 2 C    | CONNECT*            | Connects the I 2 C interface to the J1 connector                                                  |
| I 2 S    | DISCONNECT          | Disconnects the I 2 S interface from the J1 connector                                             |
| I 2 S    | CONNECT*            | Connects the I 2 S interface to the J1 connector                                                  |
| MCLK     | DISCONNECT          | Disconnects the MCLK clock output from the J1 connector                                           |
| MCLK     | CONNECT*            | Connects the MCLK clock output to the J1 connector                                                |
| MSEL     | SEL*                | Master clock output connected to one of the three on-board clocks (11.2896MHz, 12MHz, 12.288MHz). |
| MSEL     | 12MHz               | Master clock output connected to the on-board 12MHz oscillator                                    |
| SW1      | DEMO                | Interface board evaluated in demonstration mode                                                   |
| SW1      | EVAL*               | Interface board evaluated in evaluation mode                                                      |

*Default position.

## Table 6. Master Clock Configuration

| MCLK SWITCH   | MSEL SWITCH   | CLOCK SOURCE                                                                                                                                                                                                                             |
|---------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DISCONNECTED  | X             | On-board clock is not provided to DEV board. Use this setting if the DEV board does not require a master clock or if an external master clock is used. Connect the external master clock to pin 2 of header J3 or pin 1 of connector J1. |
| CONNECTED*    | SEL           | The on-board clock selected by the evaluation software (11.2896MHz, 12MHz, or 12.288MHz).                                                                                                                                                |
| CONNECTED     | 12MHz         | On-board 12MHz oscillator                                                                                                                                                                                                                |

*Default position.

X = Don't care

Evaluates: MAXAUDINT1

In order for the audio stream to be routed onto the connected DEV board, the I 2 S switch needs to be configured in the CONNECTED position (Table 5).

Note: The PCM digital audio signals are routed through a  level-translator/buffer  (U5  and  U7)  and  a  switch  (U3) before routing to the J1 connector.

│

## Audio Interface 1

## Table 7. DAI Header (J3)

|   PIN* | DESIGNATOR   | SIGNAL                   |
|--------|--------------|--------------------------|
|      2 | M            | Master Clock (MCLK)      |
|      4 | B            | Bit Clock (BCLK)         |
|      6 | L            | Left right clock (LRCLK) |
|      8 | OUT          | Data Out (DOUT)          |
|     10 | IN           | Data In (DIN)            |

*All odd pins are tied to ground.

## USB Control (USB1)

The  MAXQ2000  (U100)  microcontroller  and  FTDI  USB interface (U101) form the bridge between a DEV board's I 2 C-capable  devices  and  its  associated  evaluation  software,  running  on  a  Windows  XP/Windows  7/Window  8 computer. The AUDINT1 board exposes the MAXQ2000's I 2 C and GPIO peripherals.

## SMBus/I 2 C/2-Wire Interface

The MAXQ2000 portion of the AUDINT001 board offers bit-banged I 2 C at 400kHz (fast mode, default) or 100kHz (standard mode). SCL/SDA pullup resistors are provided on-board. Attainable throughput is limited by the PC and its software. The SMBus/I 2 C bus runs in bursts at rated speed,  but  there  is  some  variable  dead  time  between transfers, due to communication overhead. Properly written PC software can minimize this dead time, but cannot completely eliminate it.

## GPIO Interface and Pushbutton Programmer

Six  of  the  MAXQ2000's  general-purpose  inputs/outputs (GPIOs) are routed to the J1 header, for use by the con -nected  DEV  board.  Four  of  the  GPIOs  (GPIO3-GPIO6) are routed directly to the J1 header through an on-board level translator and can be used as needed. The other two GPIOs (GPIO1 and GPIO2) are also routed through an onboard level translator, but have additional LED and pullup circuitry to facilitate their use for interrupt (IRQ) monitoring.

Figure 2

Figure 2. Playback Device-USB Audio

<!-- image -->

## Evaluates: MAXAUDINT1

An additional  MAXQ2000 GPIO is connected to a pushbutton (SW2) and is used to implement a future feature: pushbutton programming. When enabled, the pushbutton allows  the  MAXQ2000  microcontroller  to  configure  the main device on the DEV board without the need for the device's evaluation software. The pushbutton instructs the microcontroller  to  write  a  preprogrammed  sequence  of data to the device, providing a quick method for configuring the DEV board for evaluation.

## Detailed Description of Firmware

The MAXQ2000 firmware was developed using the MAXIDE  assembly  language  development  environment.  At this  time,  the  standard  MAXQ2000  firmware  does  not support the pushbutton programming feature.

## Component List, Schematics, PCB Layout Diagrams

See  the  following  links  for  component  list,  schematics, and PCB layout:

- MAXAUDINT001 BOM
- MAXAUDINT001 schematic
- MAXAUDINT001 PCB

## MAXAUDINT001 Required Driver

| FILE                              | DECRIPTION                                 |
|-----------------------------------|--------------------------------------------|
| 2.10.00 WHQL-certified (or newer) | FTDI virtual COM port (VCP) driver package |

## Ordering Information

| PART          | TYPE                  |
|---------------|-----------------------|
| MAXAUDINT001# | Audio Interface Board |

#Denotes RoHS compliant.

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

│

Evaluates: MAXAUDINT1

| Bill of Materials 0; Parent Qty   | = Do Not                                                                                                  | 8/15 Component Description   | Primary Part   | Alternate Part   | Assembly DNI Reference Designator                                                    | Manufactuer                         | Manufacturer Part Number                       | (BOM) Rev Item   |
|-----------------------------------|-----------------------------------------------------------------------------------------------------------|------------------------------|----------------|------------------|--------------------------------------------------------------------------------------|-------------------------------------|------------------------------------------------|------------------|
| #REF!                             | 2.2uF ±10%, 6.3V X5R ceramic capacitor (0603)                                                             | 7                            |                | Install          | C1, C2, C13, C14, C16, C209, C210 C3-C8, C11, C15, C17-C20, C100, C101, C105, Murata | Murata                              | GRM188R60J225K GRM155R71C104K                  | 1 2              |
|                                   | 0.1uF ±10%, 16V X7R ceramic capacitor (0402)                                                              | 35                           |                |                  | C107-C110, C119, C201-C203, C218-C220, C222, C225-C228, C231-C234                    |                                     |                                                |                  |
|                                   | 1uF ±10%, 10V X7R ceramic capacitor (0603) 8pF ±0.5pF, 50V C0H ceramic capacitor (0402)                   | 5                            |                |                  | C12, C207, C208, C213, C238                                                          | TDK Yuden                           | C1608X7R1A105K UMK105CH080DV                   | 3                |
| 4 5                               | 10uF ±20%, 6.3V X5R ceramic capacitor (0805)                                                              | 2 1                          |                |                  | C102, C103 C104                                                                      | Taiyo TDK                           | C2012X5R0J106M                                 |                  |
| 6 7                               | 0.033uF ±10%, 25V X7R ceramic capacitor (0603) 18pF ±5%, 50V C0G ceramic capacitor (0603)                 | 1 2                          |                |                  | C106 C111, C112                                                                      | Murata TDK                          | GRM188R71E333K C1608C0G1H180J                  |                  |
| 8                                 | Capacitor (0402) 1uF ±10%, 6.3V X5R ceramic capacitor (0402)                                              | 1                            |                | DNI              | C113 C115-C118, C200, C204, C205                                                     | TDK                                 | C1005X5R0J105K                                 |                  |
| 9 10                              | 0.1uF ±10%, 25V X7R ceramic capacitor (0603)                                                              | 7 1                          |                |                  | C120                                                                                 | TDK Murata                          | C1608X7R1E104K GRM188R71H103K                  |                  |
| 11 12                             | 0.01uF ±10%, 50V X7R ceramic capacitor (0603) 1000pF±10%, 50V X7R ceramic capacitor (0603)                | 4 1                          |                |                  | C206, C211, C236, C237 C212                                                          | Murata                              | GRM188R71H102K                                 |                  |
| 13 14                             | 33pF ±5%, 50V C0G ceramic capacitor (0603) 330pF ±5% 50V C0G ceramic capacitor (0603)                     | 4                            |                |                  | C214-C217 C221                                                                       | Murata Murata                       | GRM1885C1H330J GRM1885C1H331J                  |                  |
| 15                                | 4.7uF ±10%, 10V X5R ceramic capacitor (0805)                                                              | 1 2                          |                |                  | C223, C224                                                                           | Murata                              | GRM219R61A475K                                 |                  |
| 16                                | 4.7uF ±10%, 6.3V X5R ceramic capacitor (0603) Multipurpose test point, 63mill drill (Red)                 | 2 1                          |                | DNI              | C229, C230 CLK                                                                       | Murata Keystone                     | GRM188R60J475K 5010                            |                  |
| 17 18                             | LED, red, 1.7V, 20mA (0603)                                                                               | 2                            |                |                  | D1, D2                                                                               | Stanley Electric                    | BR1111C-TR                                     |                  |
| 19 20                             | LED, yellow (0603) LED, green (0603)                                                                      | 1 4                          |                |                  | D100 D101, D200, LEDA, LEDB                                                          | Lite-On Lite-On                     | LTST-C190YKT LTST-C190GKT                      |                  |
| 21                                | 4-way (5-pin) header (0.1in centers) Ferrite bead (0603)                                                  | 1                            |                |                  | DVDD FB100                                                                           | Sullins Murata                      | PEC36SAAN BLM18PG221SN1                        |                  |
| 22 23                             | Ferrite bead (0603)                                                                                       | 1 2                          |                |                  | FB200, FB201                                                                         | Murata                              | BLM18KG331SN1                                  |                  |
| 24 25                             | Multipurpose test point, 63mil drill (Black) Jumper-switch, SPDT, 0.1in centers                           | 3                            |                |                  | GND (x3) I2S, I2C, MCLK, MSEL                                                        | Keystone ITW Pancon                 | 5011 JSC416G0                                  |                  |
| 26                                | 26-pin (2x13) dual row receptacle, 0.1in centers                                                          | 4 1                          |                |                  | J1                                                                                   | Samtec                              | SSW-113-02-S-D-RA                              |                  |
| 27                                | 10-pin (2x5) dual row header, 0.1in centers                                                               | 1                            |                |                  | J3                                                                                   | Sullins                             | PEC36DAAN PEC36SAAN                            |                  |
| 28 29                             | 10-pin header 0.1in centers 3.3uH, 1.1A power inductor                                                    | 1                            |                |                  | J200 L201                                                                            | Sullins                             | CDRH3D16NP-3R3NC                               |                  |
| 30                                | N-channel enhancement mode FET (SOT-23)                                                                   | 1 3                          |                |                  | Q200-Q202                                                                            | Sumida Fairchild                    | BSS138                                         |                  |
| 31 32                             | 10k ohms ±5% resistor (0402) 220 ohms ±5% resistor (0603)                                                 | 2 4                          |                |                  | R1, R2 R3, R6, R108, R110                                                            |                                     |                                                |                  |
| 33                                | 10k ohms ±5% resistor (0402) Resistor (0402)                                                              | 2                            |                |                  | R4, R13                                                                              |                                     |                                                |                  |
| 34 35                             | 0 ohms ±5% resistor (0402) 1.5k ohms ±5% resistor (0402)                                                  | 6 8                          |                | DNI              | R5, R8, R16-R19 R7, R14, R15, R111, R214, R215, R227,                                | R228                                |                                                |                  |
| 36 37                             | 27 ohms ±5% resistor (0603)                                                                               | 2 2                          |                |                  | R100, R101 R102, R103                                                                |                                     |                                                |                  |
| 38                                | 1.5k ohms ±5% resistor (0603) 470 ohms ±5% resistor (0603)                                                | 1 2                          |                |                  | R104 R105, R222                                                                      |                                     |                                                |                  |
| 39 40 41                          | Resistor (0603) 3.3k ohms ±1% resistor (0603)                                                             | 5 1                          |                | DNI              | R106, R107, R202, R209, R216 R109                                                    |                                     |                                                |                  |
|                                   | 10k ohms ±1% resistor (0603) 15k ohms ±1% resistor (0603)                                                 | 2                            |                |                  | R112 R113                                                                            |                                     |                                                |                  |
| 42 43 44                          | 27k ohm ±5% resistor (0603)                                                                               | 1 1                          |                |                  | R200                                                                                 |                                     |                                                |                  |
| 45                                | 100k ohm ±5% resistor (0603) 10k ohms ±5% resistor (0603)                                                 | 1                            |                |                  | R201 R203, R204, R207, R210, R217, R220                                              |                                     |                                                |                  |
| 46 47 48                          | 47k ohms ±5% resistor (0603)                                                                              | 6 2                          |                |                  | R205, R213                                                                           |                                     |                                                |                  |
| 49 50                             | 4.7 ohms ±5% resistor (0603) 20k ohms ±5% resistor (0603)                                                 | 1 1                          |                |                  | R206 R208                                                                            |                                     |                                                |                  |
| 51                                | 8.06k ohms ±1% resistor (0603) 1k ohms ±5% resistor (0603)                                                | 1 4                          |                |                  | R211 R212, R219, R233, R234                                                          |                                     |                                                |                  |
| 52 53                             | 2.2M ohms ±5% resistor (0603) 33 ohm ±5% resistor (0603)                                                  | 2                            |                |                  | R218, R221                                                                           |                                     |                                                |                  |
| 54                                | 25.5k ohm ±1% resistor (0603)                                                                             | 2 1                          |                |                  | R223, R224 R225                                                                      |                                     |                                                |                  |
| 55 56                             | 20k ohm ±1% resistor (0603) Resistor (0402)                                                               | 1                            |                | DNI              | R226 R235                                                                            | Keystone                            | PC-SHORT                                       |                  |
| 57 58                             | Miniature test point (Yellow) DPDT, Slide Switch                                                          | 1 4 1                        |                | DNI              | SCL, SDA, GPIO1, GPIO2 SW1                                                           | C&K Components E-Switch             | 5004 SS-22D0205-G2 TL3302AF260QJ MAX8887EZK18+ |                  |
| 59 60                             | Tactile Switch 1.8V Low Noise Linear Regulator (5 SOT23) Low-Voltage Quad SPST Analog Switches (14 TSSOP) | 1 1                          |                |                  | SW2 U2 U3                                                                            | MAXIM MAXIM                         | MAX4737EUD+                                    |                  |
| 61 62                             | Low-Voltage Dual SPST Analog Switches (8 SOT23-8) 4-bit dual supply translating transceiver (TSSOP16)     | 1 1 1                        |                |                  | U4 U5                                                                                | MAXIM NXP                           | MAX4741EKA+ 74AVC4T245PW                       |                  |
| 63 64 65                          | Dual Low-Voltage Level Translator (8 SOT23-8) Single-bit dual-supply voltage level translator (SOT363)    | 2 1                          |                |                  | U6, U11 U7                                                                           | MAXIM NXP                           | MAX3373EEKA+ 74AVC1T45GW                       |                  |
| 66                                | Quad Low-Voltage Level Translator (14 TSSOP)                                                              | 1                            |                |                  | U8                                                                                   | MAXIM                               | MAX3378EEUD+                                   |                  |
| 67 68                             | +3.3V Low-Dropout, 300mA linear regulator (SOT23)                                                         | 1                            |                |                  | U9 U10                                                                               | MAXIM MAXIM                         | MAX8887EZK33+ MAX1963AEZT120+                  |                  |
| 69                                | +1.2V, 300mA LDO Regulator (SOT23-6) MICROCONTROLLER (56 TQFN)                                            | 1 1                          |                |                  | U100 U101                                                                            | MAXIM FTDI                          | MAXQ2000-RBX+ FT232BQ                          |                  |
| 70 71                             | USB to serial UART interface (TQFN5x5-32L) EEPROM, 93C46 Type 3-Wire (SOIC-8)                             | 1                            |                |                  | U102                                                                                 | Atmel                               | AT93C46EN-SH-B MAX8511EXK25+                   |                  |
| 72 73                             | 2.5V Low Noise Linear Regulator (5 SC70)                                                                  | 1 1 2                        |                | DNI              | U103 U104, U203                                                                      | MAXIM MAXIM                         | MAX8511EXK33+                                  |                  |
| 74                                | 3.3V Low Noise Linear Regulator (5 SC70) Single CMOS Swtich Debouncer (4 SOT143)                          | 1                            |                |                  | U105 U106                                                                            | MAXIM MAXIM                         | MAX6816EUS+ MAX6389LT31D3+                     |                  |
| 75 76                             | Single Low-Power uP Reset Circuit (6 uDFN) XMOS Processor (128 TQFP)                                      | 1 1                          |                |                  | U200 U201                                                                            | XMOS Winbond                        | XS1-L01A-TQ128-C5 W25X20CLSNIG                 |                  |
| 77 78 79                          | SPI flash memory, 2Mb (SOIC-8) USB 2.0 Transceiver, ULPI (QFN 24)                                         | 1 1                          |                |                  | U202 U204                                                                            | SMSC                                | USB3318C-CP MAX8511EXK18+                      |                  |
| 80                                | 1.8V Low Noise Linear Regulator (5 SC70)                                                                  | 1 1                          |                |                  | U205                                                                                 | MAXIM On                            | NCP303LSN09T1G                                 |                  |
| 81 82                             | Voltage detector (SOT23-5) TinyLogic UHS dual buffer (SC70-6)                                             | 1                            |                |                  | U206 U207, U210                                                                      | Fairchild                           | NC7WZ07P6X                                     |                  |
| 83 84                             | Dual logic buffer (SC70-6) Dual unbuffered inverter (SC70-6)                                              | 2 1                          |                |                  | U208 U209, U213, U215                                                                | Semiconductor Fairchild Fairchild   | NC7WZ17P6X NC7WZU04P6X                         |                  |
| 85                                | 2-input mulitplexer (SC70-6)                                                                              | 3 1                          |                |                  | U211                                                                                 | Fairchild MAXIM                     | NC7SZ157P6X MAX803TEXR+                        |                  |
| 86 87                             | Microprocessor reset circuit (SC70-3) 1A, Step-Down Regulator (uMAX)                                      | 1                            |                |                  | U212 U214                                                                            | MAXIM                               | MAX1974EUB+                                    |                  |
| 88 89                             | Low-power sequencing/supervisory circuit (6 SOT23) Clock Divider (8-pin SOIC)                             | 1 1                          |                |                  | U216 USB CONTROL 5V, USBAUDIO                                                        | MAXIM Integrated Device             | MAX6895AAZT+ ICS542MLFT                        |                  |
| 90 91                             | Multipurpose test point (Red) USB Mini AB Receptacle                                                      | 2 2                          |                | DNI              | 5V USB1, USB2 VIO                                                                    | Technology Keystone Hirose Electric | 5010 UX60A-MB-5ST                              |                  |
| 92 93                             | 3-pin header (0.1in centers)                                                                              | 1                            |                |                  | VM                                                                                   | Sullins Keystone                    | PEC36SAAN 5000                                 |                  |
| 94                                | Miniature test point (Red) 6MHz crystal                                                                   | 1 1                          |                |                  | Y100 Y101                                                                            | Hong Kong X'tals Kyocera            | SSL60000N1HK188F0-0                            |                  |
| 95                                | CRYSTAL, 16MHz (3.2mm x 2.5mm) Crystal, 24.576MHz (6.0mm x 3.3mm)                                         | 1 1                          |                |                  | Y200 Y201                                                                            | Abracon Corp.                       | CX3225SB16000D0FLJZZ ABM7-24.576MHZ-D-2-Y-T    |                  |
| 96                                | Crystal, 11.2896MHz (6.0mm x 3.3mm)                                                                       | 1                            |                |                  | Y202                                                                                 | Abracon Corp. ECS Inc               | ABM7-11.2896MHZ-D-2-Y-T                        |                  |
| 97                                | 13Mhz Clock Oscillator (2.5mm x 2.0mm)                                                                    | 1                            |                |                  |                                                                                      |                                     | ECS-2033-130-BN                                |                  |
| 98                                | 12Mhz Clock Oscillator (2.5mm x 2.0mm) Shunt, 2 position, 0.1 center                                      | 1 2                          |                |                  | Y203                                                                                 | ECS Inc Kycon                       | ECS-2033-120-AU SX1100-B                       |                  |
| 99 100                            | PCB Aluminum standoff, hex, 4-40 thread, 0.187" OD,                                                       | 1                            |                |                  | AUDIO INTERFACE BOARD 1                                                              | Keystone                            | EPCBAUDINT1 2203                               |                  |
| 101                               | 0.5"L Machine screw, philips, 4-40, 3/8" length                                                           | 4 4                          |                |                  |                                                                                      | B&F Fastener Supply                 | PMSSS4400038PH                                 |                  |
| 102                               |                                                                                                           |                              |                |                  |                                                                                      | Assmann Electric                    | AK672M/2-2-R                                   |                  |
| 1                                 | CABLE, USB high-speed A-to-mini B                                                                         |                              |                |                  |                                                                                      |                                     |                                                |                  |
|                                   |                                                                                                           | 2                            |                |                  |                                                                                      |                                     |                                                |                  |
|                                   |                                                                                                           | 1                            |                |                  |                                                                                      |                                     |                                                |                  |
|                                   |                                                                                                           |                              |                |                  |                                                                                      |                                     |                                                | PACK-OUT         |

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->