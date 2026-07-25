<!-- lastmod 2022-08-03 -->
## MAX98395 Evaluation System

## General Description

The MAX98395 evaluation system (EV system) evaluates the  MAX98395  mono  Class-D  audio  amplifier  featuring dynamic  headroom  tracking  (DHT)  and  clock-and-data monitoring.  The  EV  system  consists  of  the  IC  development board (DEV board), Maxim's audio interface board III (AUDINT3), USB cable, and IC evaluation software.

It is recommended that the DEV board be evaluated with the AUDINT3 board, as an EV system. The IC supports standard  I 2 S,  left-justified,  and  TDM  digital  audio  interfaces, as well as I 2 C for control.

The AUDINT3 board provides the USB-to-PCM and USBto-I 2 C interfaces in addition to the 1.8V AVDD supply and the  1.2V  DVDD and DVDDIO supplies that are needed to evaluate the DEV board. The IC DEV board requires two additional supply inputs, 3V to 5.5V (VBAT) and 3V to 14V (PVDD). Figure 1 details the DEV board and the AUDINT3 board.

The  MAX98395  Evaluation  Software  provides  complete access to all hardware registers.

Figure 1. Simplified EV System Block Diagram

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

## Features

- Complete Hardware System with Easy Setup; No Tools or Special Equipment Required
- Easy to use Graphical User Interface (GUI) Evaluation Software (Windows 7/10 Compatible)
- Complete Access to all Hardware Registers

## EV System Contents

- MAX98395 Development Board
- Audio Interface Board III
- Micro-USB Cable

Ordering Information appears at end of data sheet.

Evaluates: MAX98395

<!-- image -->

## MAX98395 Evaluation System

## Quick Start Guide

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  evaluation  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Software Installation

- 1) For the latest software, login to your MyMaxim account at MaximIntegrated.com , navigate to MAX98395 &gt; Design Resources &gt; MAX98395 Software. Download MAX98395EVSwSetupVxx.exe. Extract the downloaded folder to a temporary location.
- 2) Install the MAX98395 Evaluation Software by running the program installer MAX98395EVSwSetupvxx.exe. Follow the installer prompts to completion. Windows might display a message indicating that this software is from an unknown publisher. This is not an error condition and it is safe to proceed with the installation. The application icon is located at Windows | Maxim Integrated| MAX98395 Evaluation Software .

## Required Equipment

- MAX98395 EV System
- Audio interface board III
- 3V to 14V DC power supply
- 3V to 5.5V DC power supply
- Micro-USB cable
- 4Ω to 8Ω speaker
- USB audio source (e.g., Windows Media Player ®  or iTunes ® )
- User-supplied Windows 7 or Windows 10 PC with available USB port

## Required Software

- The MAX98395 Evaluation Software application, if not already installed. See the Software Installation section.

## Reference Material

- MAX98395 IC data sheet

## Procedure

The MAX98395 and AUDINT3 boards are fully assembled and  tested.  Follow  the  steps  below  to  set  up  the  EV System for device evaluation:

## AUDINT3 Board Setup:

- 1) Connect the MAX98395 DEV board (J1 connector) to the AUDINT3 board (J1 connector).

Windows Media is a registered trademark and registered service mark of Microsoft Corporation.

iTunes is a registered trademark of Apple Inc.

Evaluates: MAX98395

- 2) With the audio source disabled, connect the USB cable from your computer to the USB port (J2) on the AUDINT3 board. The AUDINT3 board provides the power for DVDD, sourcing 1.8V to the DEV board through the J1 connector.
- 3) The multi-color LED D1 blinks white. When the computer registers the AUDINT3 as a USB device, D1 changes to magenta and blinks slowly.

## DEV Board Setup:

- 1) With all supplies unpowered, connect the 3V to 5.5V power supply across the VBAT and GND binding posts.
- 2) Connect the 3V to 14V power supply across the PVDD and GND binding posts.
- 3) Connect the micro-speaker leads across the SPKP and SPKN binding posts.
- 4) Place the shunt on jumper JU4 across pins RESET and DVDDIO.

## Test:

- 1) Enable the supply voltages across each of the supply pins.
- 2) Launch the MAX98395 Evaluation Software and wait while the software connects to the EV system. See Figure 2.
- 3) Once the connection is established, the status bar at the bottom of the GUI window reports USB connected, displays the MAX98395 part number, and revision ID. After the EV system is fully connected, configure the device by loading the 'I2S\_48kHz\_ IVADCs.98395' configuration file. This file can be loaded from File , Load Register Settings , PreInstalled Configuration Files , then scroll down to select.
- 4) Open the Windows' Sound dialog and select the Playback tab. A Speakers item similar to Figure 3 should be listed as an available playback device.
- 5) Verify that the Speakers item is set as the default device.
- 6) Adjust the audio source volume to a low level.
- 7) Enable the audio source and verify that audio is heard through the connected speaker. Adjust the audio source volume as needed.
- 8) Quick start of the Evaluation Software is now complete.

│

## MAX98395 Evaluation System

## Detailed Description of Evaluation Software

The  MAX98395  Evaluation  Software  is  designed  to  be used only with the MAX98395 EV system. The software provides  an  intuitive  graphical  user  interface  (GUI)  for programming the MAX98395 device and includes many features intended to aid evaluation.

The  MAX98395  Evaluation  Software's  main  window  in Figure  2  is  composed  of  four  main  sections:  menu  bar, communication tool bar, tabbed pages, and a status bar. The menu bar provides additional features to aid evaluation, the toolbar provides basic functionality for communicating with the device, and the status bar provides information about hardware connectivity and communication status. The tabbed pages make up the bulk of the GUI and  provide  the  controls  for  programming  the  device's hardware registers.

Evaluates: MAX98395

The Block Diagram tab provides access to all the device registers using dialog windows, which contain GUI controls  for  configuring  the  device. The dialog windows are opened by clicking  on  the  blocks  in  the  block  diagram. The Control Registers tab provides direct access to the valid  registers  from  0x2000-0x21FE,  as  well  as  to  the revision ID register, 0x21FF. The Log tab provides a log of the I 2 C transactions and a tool to read specific registers.  The  MAX98395  Evaluation  Software  is  compatible with  Windows 7 and Windows 10 and can be found on Maxim's  website  ( MaximIntegrated.com ).  Refer  to  the MAX98395 IC data sheet for device register information.

## Communication Tool Bar

The  tool  bar  consists  of  seven  buttons,  a  drop-down combo box, and a display box. These controls are always accessible,  regardless  of  the  active  tabbed  page.  The tool bar is shown in Figure 4 and Table 1 provides details about each control.

Figure 2. MAX98395 Evaluation Software

<!-- image -->

│

## MAX98395 Evaluation System

## Connect Sequence

When the evaluation software starts for the first time, the program  automatically  connects  to  the  EV  System  and attempts to connect to the USB control (USB) interface on  the  AUDINT3  board  first.  Once  that  connection  is established, it searches for all I 2 C addresses associated with  the  MAX98395  device  and  populates  all  detected device  addresses  in  the Active  Device drop-down  list. During  this  sequence,  the  text  on  the Connect button automatically changes from Connect to Disconnect , and the status bar is also updated to reflect the current state of the hardware connection.

Once the EV System is fully connected, the button displays Disconnect ,  and when pushed, it disconnects the software  from  the  hardware.  The  software  can  also  be disconnected  from  the  hardware  by  selecting Device  | Disconnect from the menu bar.

There are two methods to re-establish a connection with the hardware. The first is by selecting Device | Connect from the menu bar. This instructs the program to connect to  the  EV  System.  The  second  method  is  to  manually push  the Connect button  until  it  displays Disconnect , which signifies that the EV System is fully connected.

## Status Bar

The Status bar is divided into four sections. From left to right: status and alert messages, device part number and revision  ID,  interface  name  and  firmware  version,  and evaluation system connection status.

## Status Panel

The Status panel (not to be confused with the Status bar) displays the state of the Raw , State , and Flag interrupts. This data is read from the Raw, State, and Flag\_ interrupt registers (0x2001 to 0x200D). When the image is red it indicates that the associated interrupt bit has been set.

The  panel  also  includes  checkboxes  for  each  interrupt that is used to enable the link between an interrupt's Flag bit and State bit. When enabled, the Flag bit is set whenever the State bit is set. To clear the State and Flag bits, click on the interrupt's associated Clear button.

## Note:

- 1) Each interrupt source must be enabled for the FLAG column (i.e., flag bits) to be set.
- 2) The IRQ\_EN bit needs to be set for the interrupt to be output on the IRQ pin.

Figure 3. Playback Device

<!-- image -->

Figure 4. Communication Tool Bar

<!-- image -->

Evaluates: MAX98395

│

## MAX98395 Evaluation System

## Table 1. Tool Bar Controls

| CONTROL            | FUNCTION                                                                                                                                                                       |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| On                 | Press to set the Global Enable bit (EN). This enables the device.                                                                                                              |
| Off                | Press to clear the Global Enable bit (EN). This disables the device. Note: The software can communicate with a disabled device, as long as its I 2 C interface remains active. |
| Active Device      | Provides a list of detected I 2 C addresses. The displayed address is the active device.                                                                                       |
| Connect/Disconnect | See the Connect Sequence section for additional details.                                                                                                                       |
| Connect            | Detected addresses are shown in the Active Device drop-down list.                                                                                                              |
| Disconnect         | Press to disconnect from the USB Control interface.                                                                                                                            |
| Read All           | Press to initiate a read of all device registers. The Control Registers and Block Diagram tabs are updated to reflect the read data.                                           |
| Write All          | Press to initiate a write to all device registers, using the settings shown on the Control Registers tab.                                                                      |
| Reset              | Press to reset device registers to their power-on-reset (POR) state.                                                                                                           |

## Block Diagram Tab

The evaluation software uses an interactive block diagram to  facilitate  the  programming  of  the  MAX98395  device. The block diagram also provides a visual representation of the device's functions and current configuration.

There  are  three  types  of  blocks  in  the  block  diagram and they are identified by the cursor image. The cursor changes to a hand when over a block that opens a dialog window and changes to a solid arrow when over a block that toggles a specific device setting. If the cursor does not change when over a block, then it is an inactive block and is only provided for illustrational purposes.

The color of a diagram block changes, depending on the enabled  state  of  the  device  function(s)  associated  with that block. An inactive block is grey, a disabled block is white, and an enabled block is teal. Figure 5 shows the block  diagram  with  the  MAX98395  configured  for  DAI (USB audio) input and speaker output.

## Dialog Windows

Dialog windows are associated with specific blocks in the block diagram and they contain the controls for configuring the registers associated with that functional block. A dialog  window  is  opened  by  clicking  on  a  dialog  block. Figure 7 shows the typical GUI controls that are found on a dialog window.

## Control Registers Tab

The Control  Registers tab  provides  two  methods  for configuring  the  device. As  an  example,  Figure  6  shows the elements of the interrupt registers.

The  first  configuration  method  involves  clicking  on  the register's bit  labels. A  greyed-out bit label indicates that the bit is currently set low. A bold bit label indicates that the bit is currently set high. Clicking on a bit toggles its state  and  results  in  a  write  to  that  register.  This  action also updates the value displayed in the register's edit box, located to the right of the bit labels.

The  second  configuration  method  involves  entering  a hexadecimal  value  in  the  register's  edit  box  and  then pressing the Enter key;  the  software  automatically  configures the device register once the Enter key is pressed. The state of the bit labels is then updated to reflect the value shown in the edit box.

Note: Trying to write to a read-only bit by clicking/toggling its label or entering a hex value in its edit box updates the GUI, but it does not affect the bit's value in the device. All read-only bits are updated to reflect their current value in the device by performing a read all operation.

All changes made on this tab are reflected on the Block Diagram tab and on any open dialog windows.

│

Evaluates: MAX98395

Figure 5. MAX98395 Block Diagram (USB Audio Input to Speaker Output)

<!-- image -->

Figure 6. Control Register Tab

<!-- image -->

Figure 7. Typical GUI Controls

<!-- image -->

## MAX98395 Evaluation System

## Menu Bar

All  the  menu  bar  items  are  described  in  Table  2,  with additional  information  for  some  menu  items  provided  in the following sections.

## File I/O

The software's save and load features are accessed from the File menu.  The Save  Control  Register  Settings feature saves the data currently displayed on the Control Registers tab.

A configuration file's main purpose is to capture the current state of the MAX98395 registers, as displayed on the Register tab.  This  feature  makes  it  easy  to  program  a device to a saved/known state and allows for the sharing of configuration files between users. To facilitate usage, use descriptive file names when saving the configuration files.

Table 2. Menu Bar Items

| MENU ITEM                      | DESCRIPTION                                                                                                                                                                              |
|--------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| File                           |                                                                                                                                                                                          |
| Load Register Settings         | Loads a configuration file (as saved by the Save Control Register Settings option or a factory pre-installed file).                                                                      |
| Save Control Register Settings | Saves a configuration file containing the current device settings.                                                                                                                       |
| Exit                           | Closes the MAX98395 Evaluation software.                                                                                                                                                 |
| Device                         |                                                                                                                                                                                          |
| Connect                        | Runs a connection routine to connect to the evaluation system. First establishing a connection to the AUDINT3 board and then to the MAX98395 device.                                     |
| Disconnect                     | Disconnects the PC from the EV System.                                                                                                                                                   |
| Reset                          | Resets all control registers to their power-on-reset (POR) states.                                                                                                                       |
| Read All                       | Performs a read from all registers and updates the GUI.                                                                                                                                  |
| Write All                      | Performs a write to all writeable-registers, using the values show on the Control Registers tab and then updates the GUI.                                                                |
| Read Rev ID                    | Reads the device's revision ID register and updates the status bar.                                                                                                                      |
| Options                        |                                                                                                                                                                                          |
| Interface Selection            | Selects the I 2 C hardware interface to either the Audio Interface or an I 2 C Bridge (not supported).                                                                                   |
| Configuration Mode F4          | Opens a dialog that allows multiple MAX98395 devices to be selected for configuration through the software. This feature is available only when more than one active device is detected. |
| Demo Mode                      | Puts the software in demo mode.                                                                                                                                                          |
| Help                           |                                                                                                                                                                                          |
| View Help F1                   | Links to technical documents.                                                                                                                                                            |
| About                          | Provides information about the MAX98395 Evaluation Software.                                                                                                                             |

│

Evaluates: MAX98395

The  save  and  load  features  are  functional  even  when the hardware is not connected. This allows configuration files to be created and opened when the hardware is not available.  Since  the  configuration  file  is  automatically generated by the software, it is not meant to be manually formatted and doing so may cause file loading issues. To open a configuration file for viewing purposes only, use a plain text editor.

Select File | Save Control Register Settings to  create a configuration file. The register address and its data are saved as tab-delimited values and the file is saved with a .98395 extension.

The software has many standard configuration files preinstalled. A  file  can  be  loaded  by  selecting File  |  Load Register Settings | Pre-Installed Configuration Files , and using the drop-down menu, select the file, then clicking Load .

## Detailed Description of Hardware

The MAX98395 EV System is designed to allow for a thorough evaluation of the MAX98395 boosted Class-D audio amplifier  IC.  The  EV  System  includes  the  MAX98395 development board (DEV board), Maxim's Audio Interface Board III (AUDINT3), and a Micro-USB cable.

The MAX98395 DEV board can be evaluated as a standalone  board  that  is  driven  directly  by  audio  test  equipment,  powered  by  multiple  external  supplies,  and  configured by an external I 2 C capable controller. To simplify the evaluation, the DEV board can be evaluated with the AUDINT3 board. This hardware combination provides an easy-to-use method for exercising the capabilities of the device with no additional audio equipment.

The AUDINT3 board provides on-board LDO regulators, USB-to-PCM, and USB-to-I 2 C interfaces. The AUDINT3 LDO  regulators  are  used  to  power  the  MAX98395's DVDD, DVDDIO, and AVDD supply rail through connector J1. The USB-to-PCM converter accepts a USB audio stream  from  a  USB  connected  computer  and  converts that  into  an  I 2 S  data  stream,  allowing  for  USB  audio playback through the MAX98395 device. The USB-to-I 2 C interface is the bridge that allows the evaluation software to configure, monitor, and control the I 2 C capable devices on the MAX98395 DEV and AUDINT3 boards. Do not use the AUDINT3 board while directly driving the DEV board's PCM interface with external audio test equipment since the Digital Audio Interface (DAI) pins for the DEV board and AUDINT3 are connected through the J1 header.

## Measuring Quiescent Current

To  accurately  measure  the  quiescent  current  of  the MAX98395, the AUDINT3 should be disconnected from J1 and the DVDD, DVDDIO (1.2V), and the AVDD (1.8V) supplies  must  then  be  powered  by  external  power  supplies. I 2 C control and PCM audio can then be connected using J2 on the DEV board.

## Power Supplies

The MAX98395 DEV board requires up to five external power supplies when evaluated as a stand-alone board. If 1.8V operation is desired, DVDD, DVDDIO, and AVDD pins can be shorted together by soldering 0Ω resistors to R13, R14, and R31 on the bottom layer of the DEV board.

Soldering  a  MAX8887EZK18+  LDO  regulator  in  the  U2 position on the bottom layer of the DEV board eliminates the need for an external 1.8V supply.

The power supplies and their ranges are listed in Table 3. The  external  supply  voltages  can  be  connected  at  the respective supply test-points and/or binding posts.

When using the AUDINT3 board, the AUDINT3's on-board LDO  regulators  independently  power  DVDD,  DVDDIO, and AVDD  on  the  DEV  board.  This  power  is  routed  to the DEV board through the J1 connector. See the Digital Audio Interface section.

## Jumper Selection

The DEV board includes jumper JU4 to facilitate a device reset.  Table  4  describes  the  JU4  configuration  options. Note: Before starting evaluation, ensure that the jumper is configured as needed.

## Digital Audio Interface

The MAX98395 Digital Audio Interface (DAI) is routed to interface header J3 as well as the AUDINT3 connector J1. The interface headers provide easy access to the device's PCM  bus  and  the  AUDINT3  connector  allows  for  USB audio to be streamed onto the DEV board. See the USB Audio Input section  for  details  on  USB  audio  streaming and Table 6 for the connector J1 pinout.

## Table 3. Power Supplies

| POWER SUPPLY   | RANGE (V)                 |
|----------------|---------------------------|
| VBAT           | 3.0 to 5.5                |
| PVDD           | 3.0 to 14.0               |
| DVDD           | 1.14 to 1.89              |
| DVDDIO         | 1.14 to 1.26 1.71 to 1.89 |
| AVDD           | 1.71 to 1.89              |

## Table 4. Jumper Configuration (JU4)

| HEADER   | SHUNT POSITION   | DESCRIPTION      |
|----------|------------------|------------------|
| JU4      | RESET to DVDDIO  | Normal operation |
| JU4      | RESET to GND     | Device is reset  |

## MAX98395 Evaluation System

## DAI Header

The DAI header (J3) provides access to MAX98395's PCM bus (BCLK, LRCLK, DIN, and DOUT). These DAI headers facilitate evaluation with audio equipment I/O. See Table 5

## Table 5. DAI Header (Portion of J3)

| SIGNAL   |   PIN |   PIN | SIGNAL   |
|----------|-------|-------|----------|
| GND      |     1 |     2 | BCLK     |
| GND      |     3 |     4 | LRCLK    |
| GND      |     5 |     6 | DIN      |
| GND      |     7 |     8 | DOUT     |

## Table 6. AUDINT3 Connector (J1)

Figure 8. MAX98395 DAI Interface Headers (PCM)

| SIGNAL   |   PIN | SIGNAL   |   PIN | SIGNAL   |   PIN |
|----------|-------|----------|-------|----------|-------|
| -        |     1 | MCLK     |     2 | GND      |     3 |
| BCLK2    |     4 | BCLK1    |     5 | GPIO1    |     6 |
| LRCLK2   |     7 | LRCLK1   |     8 | GPIO2    |     9 |
| DAC2     |    10 | DAC1     |    11 | GPIO3    |    12 |
| ADC2     |    13 | ADC1     |    14 | GPIO4    |    15 |
| -        |    16 | ID       |    17 | 3.3V     |    18 |
| AVDD     |    19 | DVDD     |    20 | GND      |    21 |
| HPVD     |    22 | VDDIO    |    23 | GND      |    24 |
| GND      |    25 | SDA      |    26 | 5V       |    27 |
| -        |    28 | SCL      |    29 | 5V       |    30 |
| GND      |    31 | IRQ      |    32 | RST      |    33 |
| -        |    34 | -        |    35 | -        |    36 |
| GND      |    37 | -        |    38 | -        |    39 |

<!-- image -->

Evaluates: MAX98395

for  the  pinout  of  the  DAI  headers  and  Figure  8  for  an illustration of how the MAX98395 DAI interface is routed through the DAI headers to the AUDINT3 connector.

│

## MAX98395 Evaluation System

## Speaker Output

The MAX98395 audio output is routed to the FOUTP and FOUTN connections on the DEV board. The DEV board is, by default, assembled to allow the MAX98395 output to connect directly to a speaker load without the need for filtering.

## EMI Filter

When long speaker cables are used with the MAX98395 output, a ferrite bead plus capacitor filter can be installed to prevent excessive EMI radiation. Although it is best to choose filter components based on EMI test results, the combination of 100pF capacitors (C11, C12) and ferrite beads  (FB1,  FB2)  generally  works  well.  Before  adding the filters to the design, first remove the small PCB traces shorting  FB1  and  FB2  (see  the MAX98395 EV System Development  Board  Schematic and  the MAX98395  EV System Development Board PCB Layout Diagrams ).

## Table 7. I 2 C Header (J2)

| SIGNAL   |   PIN |   PIN | SIGNAL   |
|----------|-------|-------|----------|
| GND      |     1 |     2 | SDA      |
| GND      |     3 |     4 | SCL      |

## Table 8. I 2 C Address Resistors

| R6 & R7   | R22 & R23   | ADDR PIN   | I 2 C Slave ADDRESS   |
|-----------|-------------|------------|-----------------------|
| 0Ω        | OPEN        | GND        | 0x70*                 |
| 0Ω        | OPEN        | DVDDIO     | 0x72                  |
| 0Ω        | OPEN        | SDA        | 0x74                  |
| 0Ω        | OPEN        | SCL        | 0x76                  |
| OPEN      | 0Ω          | GND        | 0x78                  |
| OPEN      | 0Ω          | DVDD       | 0x7A                  |
| OPEN      | 0Ω          | SDA        | 0x7C                  |
| OPEN      | 0Ω          | SCL        | 0x7E                  |

*Default position

## I 2 C Interface

The  MAX98395's  I 2 C  interface  is  routed  to  connector J1. The J1 connector is for the AUDINT3 board and connects the device's I 2 C interface to the I 2 C interface of the AUDINT3 board. This connection allows the MAX98395 evaluation software to read and write to the device. See Table 6.

Header J2 allows for an external I 2 C controller to connect to the device's I 2 C bus. See Table 7.

## Device Address

The  MAX98395  I 2 C  device  address  can  be  configured to one of eight values: 0x70 (default), 0x72, 0x74, 0x76, 0x78, 0x7A, 0x7C, and 0x7E. The device address is set by  connecting  the  device's  ADDR1  pin  to  GND,  SDA, SCL, or DVDDIO, and ADDR2 pin to DVDD or GND. This is  accomplished by installing  a  0Ω  resistor  in  either  the R6 and R7 locations or the R22 and R23 locations. For proper  address  programming,  only  one  resistor  is  used for  each ADDR pin. R6, R7, R22, and R23 are located on  the  bottom  side  of  the  board  and  are  identified  with silkscreen. See Table 8 for all I 2 C slave address options.

## Evaluates: MAX98395

│

## Audio Interface Board III

Maxim's Audio Interface board III (AUDINT3 board) facilitates the evaluation of the DEV board by providing a set of features that can be used to exercise the capabilities of  the  DEV  board  without  the  need  for  additional  audio equipment. The main components of the AUDINT3 board are its LDO supply voltages, its USB-to-I 2 C and USB-toPCM interfaces. The supply voltages allow the DEV board to  be  evaluated with a minimal amount of external supplies.  The  USB-to-PCM  converter  allows  any  computer to be used as an audio source for the DEV board's digital audio PCM interface, and the USB-to-I 2 C interface allows for the use of the MAX98395 evaluation software, making device configuration and monitoring a lot simpler.

## Ordering Information

| PART           | TYPE                       |
|----------------|----------------------------|
| MAX98395EVSYS# | Complete Evaluation System |

#Denotes a RoHS-compliant device.

## Evaluates: MAX98395

The  MAX98395  DEV  board  connects  to  the  AUDINT3 board  through  connector  J1.  The  physical  connections made between the DEV board and the AUDINT3 board are listed in Table 6.

## USB Audio Input

To  utilize  the  USB  streaming  feature  of  the  AUDINT3 board,  connect  the  USB  cables  from  your  computer  to the USB connector J2 on the AUDINT3 board and ensure that the AUDINT3 board is connected to the DEV board.

Once the hardware is ready, use the MAX98395 evaluation software to configure and enable the device for DAI audio playback.

## MAX98395 EV System Development Board Bill of Materials

|   ITEM | REF_DES                       | DNI/DNP QTY   |    | MFG PART #                                                                                    | MANUFACTURER                             | VALUE             | DESCRIPTION                                                                                                              | COMMENTS   |
|--------|-------------------------------|---------------|----|-----------------------------------------------------------------------------------------------|------------------------------------------|-------------------|--------------------------------------------------------------------------------------------------------------------------|------------|
|      1 | ADDR, ICC, RESET, VREFC       | -             |  4 | 5002                                                                                          | KEYSTONE                                 | N/A               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                    |            |
|      2 | AVDD, DVDD, DVDDIO            | -             |  3 | 5010                                                                                          | KEYSTONE                                 | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                    |            |
|      3 | BCLK, DIN, DOUT, IRQ, LRCLK   | -             |  5 | 5003                                                                                          | KEYSTONE                                 | N/A               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;      |            |
|      4 | C4, C5, C19, C20              | -             |  4 | GRM033R60J105MEA2; C0603X5R0J105M030; CL03A105MQ3CSN                                          | MURATA;TDK;SAMSUNG                       | 1UF               | CAPACITOR; SMT (0201); CERAMIC CHIP; 1UF; 6.3V; TOL=20%; MODEL=GRM SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R               |            |
|      5 | C6                            | -             |  1 | EMZA350ADA221MHA0G                                                                            | UNITED CHEMI-CON                         | 220UF             | CAPACITOR; SMT (CASE_HA0); ALUMINUM-ELECTROLYTIC; 220UF; 35V; TOL=20%; MODEL=MZA SERIES                                  |            |
|      6 | C7                            | -             |  1 | TMK105BJ104KV; GRM155R61E104KA87                                                              | TAIYO YUDEN;MURATA                       | 0.1UF             | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                |            |
|      7 | C8                            | -             |  1 | C1608X5R1E106M080AC; CL10A106MA8NRNC; GRM188R61E106MA73; ZRB18AR61E106ME01; GRT188R61E106ME13 | TDK; SAMSUNG ELECTRONICS; MURATA;;MURATA | 10UF              | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 25V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                 |            |
|      8 | C15                           | -             |  1 | C3216X5R1E476M160AC                                                                           | TDK                                      | 47UF              | CAPACITOR; SMT (1206); CERAMIC CHIP; 47UF; 25V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R ;               |            |
|      9 | C22                           | -             |  1 | GRM155R61A106ME44; GRM155R61A106ME11; 0402ZD106MAT2A; CL05A106MP5NUNC                         | MURATA;MURATA; AVX;SAMSUNG               | 10UF              | CAPACITOR; SMT (0402); CERAMIC CHIP; 10UF; 10V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                 |            |
|     10 | C23                           | -             |  1 | CL03A105MO3NRN                                                                                | SAMSUNG ELECTRONICS                      | 1UF               | CAPACITOR; SMT (0201); CERAMIC CHIP; 1UF; 16V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                  |            |
|     11 | FOUTN, FOUTP, GND, PVDD, VBAT | -             |  5 | 111-2223-001                                                                                  | EMERSON NETWORK POWER                    | 111-2223-001      | MACHINE SCREW; THUMBSCREW; BANANA; 1/4-32IN; 11/32IN; NICKEL PLATED BRASS                                                |            |
|     12 | J1                            | -             |  1 | TSW-113-08-G-T-RA                                                                             | SAMTEC                                   | TSW-113-08-G-T-RA | EVKIT PART; CONNECTOR; MALE; THROUGH HOLE; 0.025IN SQ POST HEADER; RIGHT ANGLE; 39PINS; MODIFY PIN NUMBERING ARRANGEMENT |            |
|     13 | J2                            | -             |  1 | PEC02DAAN                                                                                     | SULLINS ELECTRONIC CORP.                 | PEC02DAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                                |            |
|     14 | J3                            | -             |  1 | PEC04DAAN                                                                                     | SULLINS ELECTRONICS CORP.                | PEC04DAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 8PINS                                                                |            |
|     15 | J3B, J5                       | -             |  2 | PEC02SAAN                                                                                     | SULLINS                                  | PEC02SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                |            |
|     16 | J4, J6, X1-X4, X6             | -             |  7 | 9020 BUSS                                                                                     | WEICO WIRE                               | MAXIMPAD          | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                 |            |
|     17 | JU4                           | -             |  1 | PEC03SAAN                                                                                     | SULLINS ELECTRONICS CORP.                | PEC03SAAN         | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC;                             |            |
|     18 | JU6                           | -             |  1 | PBC05SAAN                                                                                     | SULLINS ELECTRONICS CORP.                | PBC05SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 5PINS; -65 DEGC TO +125 DEGC                                         |            |
|     19 | LV_EN                         | -             |  1 | 5116                                                                                          | KEYSTONE                                 | N/A               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; GREEN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;       |            |
|     20 | MTH1-MTH4                     | -             |  4 | 91772A108; PHILLIPS-PAN_4-40X3/8IN; PMSSS4400038PH; 9901                                      | GENERIC PART                             | N/A               | MACHINE SCREW; PHILLIPS; PAN; 4-40; 3/8IN; 18-8 STAINLESS STEEL                                                          |            |
|     21 | MTH1-MTH4                     | -             |  4 | MCH_SO_F_HEX_4-40X1/2                                                                         | GENERIC PART                             | N/A               | STANDOFF; FEMALE-THREADED; HEX; 4-40; 1/2IN; ALUMINUM                                                                    |            |
|     22 | R1-R10, R12, R18, R23-R25     | -             | 15 | RC0402JR-070RL; CR0402-16W-000RJT                                                             | YAGEO PHYCOMP; VENKEL LTD.               | 0                 | RESISTOR; 0402; 0 OHM; 5%; JUMPER; 0.063W; THICK FILM                                                                    |            |
|     23 | R11, R27                      | -             |  2 | CRCW04024K70FK; MCR01MZPF4701                                                                 | VISHAY DALE; ROHM SEMICONDUCTOR          | 4.7K              | RESISTOR, 0402, 4.7K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                |            |
|     24 | R28                           | -             |  1 | ERJ-2RKF1602                                                                                  | PANASONIC                                | 16K               | RESISTOR; 0402; 16K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                    |            |
|     25 | SCL, SDA                      | -             |  2 | 5004                                                                                          | KEYSTONE                                 | N/A               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;      |            |

Evaluates: MAX98395

Evaluates: MAX98395

## MAX98395 EV System Development Board Bill of Materials (continued)

| ITEM     | REF_DES                           | DNI/DNP   | QTY      | MFG PART #                                                                    | MANUFACTURER                              | VALUE         | DESCRIPTION                                                                                                                                                          | COMMENTS   |
|----------|-----------------------------------|-----------|----------|-------------------------------------------------------------------------------|-------------------------------------------|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 26       | SU1, SU2                          | -         | 2        | S1100-B;SX1100-B; STC02SYAN                                                   | KYCON;KYCON; SULLINS ELECTRONICS CORP.    | SX1100-B      | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                                                              |            |
| 27       | TP1-TP4                           | -         | 4        | 5011                                                                          | KEYSTONE                                  | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                              | GND        |
| 28       | TP5, TP6                          | -         | 2        | 5001                                                                          | KEYSTONE                                  | N/A           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                   | DNI        |
| 29       | U1                                | -         | 1        | MAX98395ENI+                                                                  | MAXIM                                     | MAX98395ENI+  | EVKIT PART - IC; MAX98395ENI+; LOW QUIESCENT POWER DIGITAL INPUT AMPLIFIER WITH DHT AND I/V SENSE; PACKAGE OUTLINE DRAWING: 21-100333; PACKAGE CODE: N281B2+1; BGA28 |            |
| 30       | PCB                               | -         | 1        | MAX98395_DEV_APPS_A                                                           | MAXIM                                     | PCB           | PCB:MAX98395_DEV_APPS_A                                                                                                                                              | -          |
| 31       | C1-C3, C9-C12, C14, C17, C18, C21 | DNP       | 0        | N/A                                                                           | N/A                                       | OPEN          | CAPACITOR; 0402 PACKAGE; GENERIC                                                                                                                                     |            |
| 32       | C13                               | DNP       | 0        | N/A                                                                           | N/A                                       | OPEN          | PACKAGE OUTLINE 0201 NON-POLAR CAPACITOR                                                                                                                             |            |
| 33       | C16                               | DNP       | 0        | C3216X5R1E476M160AC                                                           | TDK                                       | 47UF          | CAPACITOR; SMT (1206); CERAMIC CHIP; 47UF; 25V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R ;                                                           |            |
| 34       | C24, C25                          | DNP       | 0        | N/A                                                                           | N/A                                       | OPEN          | PACKAGE OUTLINE 1206 NON-POLAR CAPACITOR                                                                                                                             |            |
| 35       | C26                               | DNP       | 0        | C1005X5R1E225K050                                                             | TDK                                       | 2.2UF         | CAPACITOR; SMT (0402); CERAMIC CHIP; 2.2UF; 25V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                            | DNI        |
| 36       | C27                               | DNP       | 0        | NMC0402X7R103K16TRP; GRM155R71C103KA01; CC0402KRX7R7BB103; C0402C103K4RACAUTO | NIC COMPONENTS CORP.; MURATA;YAGEO; KEMET | 0.01UF        | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 16V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                  | DNI        |
| 37       | FB1, FB2                          | DNP       | 0        | N/A                                                                           | N/A                                       | N/A           | INDUCTOR; 0603 PACKAGE; FERRITE-BEAD; GENERIC                                                                                                                        |            |
| 38       | OUTN, OUTP                        | DNP       | 0        | 5116                                                                          | KEYSTONE                                  | N/A           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; GREEN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                   |            |
| 39       | OUTNSNS, OUTPSNS                  | DNP       | 0        | 5002                                                                          | KEYSTONE                                  | N/A           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                                                                | DNI        |
| 40       | R15-R17, R19, R20                 | DNP       | 0        | N/A                                                                           | N/A                                       | OPEN          | RESISTOR; 0402 PACKAGE; GENERIC                                                                                                                                      |            |
| 41       | R26                               | DNP       | 0        | N/A                                                                           | N/A                                       | OPEN          | PACKAGE OUTLINE 0201 RESISTOR                                                                                                                                        |            |
| 42       | R29, R30                          | DNP       | 0        | RC0402JR-070RL; CR0402-16W-000RJT                                             | YAGEO PHYCOMP; VENKEL LTD.                | 0             | RESISTOR; 0402; 0 OHM; 5%; JUMPER; 0.063W; THICK FILM                                                                                                                | DNI        |
| 43       | U2                                | DNP       | 0        | MAX8887EZK18+                                                                 | MAXIM                                     | MAX8887EZK18+ | IC; VREG; LOW-DROPOUT; 0.3A LINEAR REGULATOR; SOT23-5                                                                                                                | DNI        |
| 44       | R13, R14, R21, R22, R31           | DNP       | 0        | N/A                                                                           | N/A                                       | OPEN          | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                                                                     |            |
| TOTAL 80 | TOTAL 80                          | TOTAL 80  | TOTAL 80 | TOTAL 80                                                                      | TOTAL 80                                  | TOTAL 80      | TOTAL 80                                                                                                                                                             | TOTAL 80   |

NOTE: DNI--&gt; DO NOT INSTALL(PACKOUT); DNP--&gt; DO NOT PROCURE

│

## MAX98395 EV System Development Board Schematic

<!-- image -->

## MAX98395 EV System Development Board PCB Layout Diagrams

<!-- image -->

MAX98395 EV System Component Placement Guide-Top Silkscreen

<!-- image -->

MAX98395 EV System PCB Layout-GND L2

MAX98395 EV System PCB Layout-Top Layer

<!-- image -->

MAX98395 EV System PCB Layout-Signal GND L3

<!-- image -->

│

## MAX98395 EV System Development Board PCB Layout Diagrams (continued)

<!-- image -->

MAX98395 EV System PCB Layout-Power L4

<!-- image -->

MAX98395 EV System PCB Layout-Bottom View

MAX98395 EV System PCB Layout-GND L5

<!-- image -->

MAX98395 EV System Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

## MAX98395 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/19           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX98395