<!-- lastmod 2022-08-03 -->
## MAX98396 Evaluation Kit

## General Description

The MAX98396 evaluation system (EV system) evaluates the  MAX98396  Mono  Class-D Audio Amplifier  featuring Dynamic Headroom Tracking (DHT) and Clock-and-Data Monitoring.  The  EV  system  consists  of  the  MAX98396 Development Board (DEV board), Audio Interface Board III  (AUDINT3),  a  micro-USB  cable,  and  the  MAX98396 evaluation software.

It is recommended that the DEV board be evaluated with the AUDINT3 board  as  an  EV  system.  The  MAX98396 supports standard I 2 S, left-justified, and TDM digital audio interfaces, as well as I 2 C for control.

The AUDINT3 board provides the USB-to-PCM and USBto-I 2 C interfaces in addition to the 1.8V AVDD supply and the  1.2V  DVDD and DVDDIO supplies that are needed to evaluate the DEV board. The IC DEV board requires two additional supply inputs, 3V to 5.5V (VBAT) and 3V to 20V (PVDD). Figure 1 details the DEV board and the AUDINT3 board.

Evaluates: MAX98396

## Benefits and Features

- Complete Hardware System with Easy Setup; No Tools or Special Equipment Required
- Easy to use Graphical User Interface (GUI) Evaluation Software (Windows ®  7/10 Compatible)
- Complete Access to all Hardware Registers

## EV System Contents

- MAX98396 Development Board
- Audio Interface Board III
- Micro-USB Cable

The  MAX98396  evaluation  software  provides  complete access to all hardware registers.

Ordering Information appears at end of data sheet.

Figure 1. Simplified EV System Block Diagram

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation. Windows Media is a registered trademark and registered service mark of Microsoft Corporation. iTunes is a registered trademark of Apple Inc.

<!-- image -->

## MAX98396 Evaluation Kit

## Quick Start

Note:  In  the  following  sections,  software-related  items are  identified  as  follows:  Text  in bold refers  to  items directly  from  the  evaluation  software.  Text  in bold and underlined refers to items from the Windows operating system.

## Software Installation

- 1) For the latest software, login to your MyMaxim account at MaximIntegrated.com, navigate to MAX98396 | Design Resources | MAX98396 Software, download MAX98396EVSwSetupVxx.exe, and extract the downloaded folder to a temporary location.
- 2) Install the MAX98396 evaluation software by running the program installer MAX98396EVSwSetupvxx.exe and follow all installer prompts. Windows might display a message indicating that this software is from an unknown publisher; this is not an error condition and it is safe to proceed with the installation. The application icon is located at Windows | Maxim Integrated | MAX98396 Evaluation Software .

## Required Equipment

- MAX98396 EV System
-  MAX98396 Development Board (DEV board)
- Audio Interface Board III (AUDINT3)
- Micro-USB cable
- Two DC power supplies
- 3V to 20V (for PVDD)
- 3V to 5.5V (for VBAT)
- Note: PVDD must be greater than VBAT
- 4Ω to 8Ω speaker
- PC (Windows 7/10) with USB port

## Required Software

- The MAX98396 evaluation software. The MAX98396 evaluation software is compatible with Windows 7/10 and can be found on Maxim Integrated's website . See the Software Installation section.
- Audio source (e.g., Windows Media Player ®  or iTunes ® )

## Reference Material

- MAX98396 IC data sheet

## Procedure

The MAX98396 and AUDINT3 boards are fully assembled and tested. Follow the steps to set up the EV system for device evaluation.

Evaluates: MAX98396

## AUDINT3 Board Setup:

- 1) Connect the MAX98396 DEV board (J1 connector) to the AUDINT3 board (J1 connector).
- 2) With the audio source disabled, connect the microUSB cable from the computer to the USB port (J2) on the AUDINT3 board. The AUDINT3 board provides the power for AVDD (1.8V), DVDD (1.2V), and DVDDIO (1.2V) to the DEV board through the J1 connector.
- 3) The AUDINT3 should automatically register through Windows as a USB device. When the AUDINT3 is connected and ready, the status LED (D1) changes to magenta and blinks slowly.

## DEV Board Setup

The EV kit is fully assembled and tested.

- 1) Connect the 3V to 20V power supply across the PVDD and GND binding posts.
- 2) Connect the speaker leads across the SPKP and SPKN binding posts.
- 3) Place the shunt on jumper JU4 across the RESET and DVDDIO pins.

## Test

- 1) Enable the supply voltages across each of the supply pins.
- 2) Launch the MAX98396 evaluation software and wait until the software registers connection to the EV system. Once the connection has been properly established, the status bar at the bottom of the GUI window reports that the USB is connected, displays the MAX98396 part number and its revision ID, Audio Interface 3 with its firmware version, and 'EV System Ready'. See Figure 3.
- 3) After the EV system is connected, configure the device by loading the 'I2S\_48kHz\_ IVADCs.98396' configuration file. This file can be loaded from File | Load Register Settings | Preinstalled Configura -tion Files .
- 4) Open the Windows' Sound dialog and select the Playback tab. A Speakers item similar to Figure 2 should be listed as an available playback device.
- 5) Verify that the Speakers item is set as the default device.
- 6) Adjust the audio source volume to a low level.
- 7) Enable the audio source and verify that audio is heard through the connected speaker. Adjust the audio source volume as needed. When audio is streaming, the D1 LED on the AUDINT3 should change to yellow.
- 8) Quick start of the evaluation software is now complete.

│

Figure 2. Playback Device

<!-- image -->

Figure 3. MAX98396 Evaluation Software

<!-- image -->

## Detailed Description of Evaluation Software

The  MAX98396  evaluation  software  is  designed  to  be used only with the MAX98396 EV system. The software provides  an  intuitive  graphical  user  interface  (GUI)  for programming the MAX98396 device and includes many features intended to aid evaluation.

The  MAX98396  evaluation  software's  main  window  in Figure 3 is composed of four main sections: menu bar , communication tool bar ,  tabbed  pages,  and  a status bar .  The menu  bar provides  additional  features  to  aid evaluation, the communication tool bar provides basic functionality for communicating with the device, and the status  bar provides  information  about  hardware  con- nectivity  and  communication  status.  The  tabbed  pages make up the bulk of the GUI and provide the controls for programming the device's hardware registers.

The Block Diagram tab provides access to all the device registers using dialog windows, which contain GUI controls  for  configuring  the  device. The dialog windows are opened by clicking  on  the  blocks  in  the  block  diagram. The Control Registers tab provides direct access to the valid registers from 0x2000-0x21FE, as well as to the revision ID register, 0x21FF. The Log tab  provides a log of the I 2 C transactions and a tool to read specific registers. The  MAX98396  evaluation  software  is  compatible  with Windows 7/10 and can be found on Maxim Integrated's website . Refer to the MAX98396 IC data sheet for device register information.

│

## MAX98396 Evaluation Kit

## Communication Tool Bar

The Communication tool bar consists of control buttons and a drop-down menu to select the active I 2 C address. These controls are always accessible, regardless of the active tabbed page. The  tool bar is shown in Figure 4. Table 1 provides details about each control.

## Connect Sequence

When the evaluation software starts for the first time, the program  automatically  connects  to  the  EV  System  and attempts to connect to the USB control interface on the AUDINT3 board. Once the AUDINT3 connection is established, it searches for all I 2 C addresses associated with the MAX98396 device and populates all detected device addresses  in  the Active  Device drop-down  list.  During this sequence, the text on the Connect/Disconnect button automatically changes from Connect to Disconnect , and the status bar is also updated to reflect the current state of the hardware connection. If properly connected, 'EV System Ready' should be displayed on the right side of the status bar.

## Table 1. Tool Bar Controls

Figure 4. Communication Tool Bar

| CONTROL            | FUNCTION                                                                                                                                                             |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| On                 | Sets the Global Enable bit (EN). This enables the device.                                                                                                            |
| Off                | Clears the Global Enable bit (EN). This disables the device. Note: The software can communicate with a disabled device as long as its I 2C interface remains active. |
| Active Device      | Provides a list of detected I 2C addresses. The displayed address is the active device.                                                                              |
| Connect/Disconnect | See the Connect Sequence section for additional details. Detected addresses are shown in the Active Device drop-down list.                                           |
| Connect            | Connects the USB Control interface to the MAX98396 DEV board.                                                                                                        |
| Disconnect         | Disconnects the USB Control interface from the MAX98396 DEV board.                                                                                                   |
| ReadAll            | Initiate a read of all device registers. The Control Registers tab and Block Diagram tab are updated to reflect the read data.                                       |
| Write All          | Initiates a write to all device registers, using the settings shown on the Control Registers tab.                                                                    |
| Reset              | Initiates a Soft Reset; resets all device registers to their power-on-reset (POR) state.                                                                             |

<!-- image -->

Evaluates: MAX98396

Once the EV System is properly  connected,  the  button displays Disconnect and changes function. When clicked on, the Disconnect button disconnects the software from the  hardware.  The  software  can  also  be  disconnected from the hardware by selecting Device | Disconnect from the menu bar.

There are two methods to reestablish a connection with the hardware. The first is by selecting Device | Connect from the menu bar. This instructs the program to connect to the EV system. The second method is to click on the Connect button, after which the status bar (in the bottom right corner) should display 'EV System Ready' and the button function changes to Disconnect , showing that the EV system is properly connected.

## Status Bar

The Status bar is divided into five sections, from left to right: status and alert messages, device part number and revision ID, interface name and firmware version, EV system connection status, and communication activity.

│

## MAX98396 Evaluation Kit

## Status Panel

The Status panel (not to be confused with the Status bar) displays the state of the Raw, State, and Flag interrupts. This data is read from the Raw, State, and Flag interrupt registers (0x2001 to 0x200E). When the image is red, it indicates that the associated interrupt bit has been set.

The  panel  also  includes  checkboxes  for  each  interrupt that is used to enable the link between an interrupt's Flag bit and State bit. When enabled, the Flag bit is set whenever the State bit is set. To clear the State and Flag bits, click on the interrupt's associated Clear button.

## Note:

- 1) Each interrupt source must be enabled for the FLAG column (i.e., flag bits) to be set.
- 2) The IRQ\_EN bit needs to be set for the interrupt to be output on the IRQ pin.

## Block Diagram Tab

The evaluation software uses an interactive block diagram to  facilitate  the  programming  of  the  MAX98396  device. The block diagram also provides a visual representation of the device's functions and current configuration.

There  are  three  types  of  blocks  in  the  block  diagram which  are  identified  by  the  cursor  image.  The  cursor changes to a hand when over a block that opens a dialog window and changes to a solid arrow when over a block that toggles a specific device setting. If the cursor does not change when over a block, then it is an inactive block and is only provided for illustrational purposes.

The color of a diagram block changes depending on the enabled  state  of  the  device  function(s)  associated  with that block; an inactive block is grey, a disabled block is white, and an enabled block is teal. Figure 5 shows the block  diagram  with  the  MAX98396  configured  for  DAI (USB audio) input and speaker output.

Figure 5. MAX98396 Block Diagram Tab (Configured for USB Audio Input to Speaker Output)

<!-- image -->

│

## MAX98396 Evaluation Kit

## Dialog Windows

Dialog windows are associated with specific blocks in the block diagram and contain the controls for configuring the

registers  associated  with  that  functional  block.  Clicking on a dialog block opens a dialog window. Figure 6 shows the typical GUI controls that are found in a dialog window.

Figure 6. Typical GUI Controls

<!-- image -->

## MAX98396 Evaluation Kit

## Control Registers Tab

The Control  Registers tab  provides  two  methods  for configuring  the  device. As  an  example,  Figure  7  shows the elements of the control registers.

The  first  configuration  method  involves  clicking  on  the register's bit  labels. A  greyed-out bit label indicates that the bit is currently set low. A bold bit label indicates that the bit is currently set high. Clicking on a bit toggles its state  and  results  in  a  write  to  that  register.  This  action also updates the value displayed in the register's edit box, located to the right of the bit labels.

The  second  configuration  method  involves  entering a  hexadecimal  value  in  the  register's  edit  box  and then pressing the Enter key;  the  software  automatically

## Table 2. Menu Bar Items

Figure 7. Control Register Tab

| MENU ITEM                      | DESCRIPTION                                                                                                                                                                                     |
|--------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FILE                           |                                                                                                                                                                                                 |
| Load Register Settings         | Loads a configuration file (as saved by the Save Control Register Settings option or a factory pre-installed file).                                                                             |
| Save Control Register Settings | Saves a configuration file containing the current device settings.                                                                                                                              |
| Exit                           | Closes the MAX98396 evaluation software.                                                                                                                                                        |
| DEVICE                         |                                                                                                                                                                                                 |
| Connect                        | Runs a connection routine to connect to the EV system, first establishing a connection to the AUDINT3 board and then to the MAX98396 device.                                                    |
| Disconnect                     | Disconnects the PC from the EV system.                                                                                                                                                          |
| Reset                          | Resets all control registers to their power-on reset (POR) states.                                                                                                                              |
| ReadAll                        | Performs a read from all registers and updates the GUI.                                                                                                                                         |
| Write All                      | Performs a write to all writeable registers using the values shown in the Control Registers tab and then updates the GUI.                                                                       |
| Read Rev ID                    | Reads the device's revision ID register and updates the status bar.                                                                                                                             |
| OPTIONS                        |                                                                                                                                                                                                 |
| Interface Selection            | Selects the I 2 C hardware interface to either theAudio Interface or an I 2 C Bridge (not supported).                                                                                           |
| Configuration Mode F4          | Opens a dialog window that allows multiple MAX98396 devices to be selected for configuration through the software. This feature is available only when more than one active device is detected. |
| Demo Mode                      | Switches the software to demo mode.                                                                                                                                                             |
| HELP                           |                                                                                                                                                                                                 |
| View Help F1                   | Links to technical documents.                                                                                                                                                                   |

<!-- image -->

Evaluates: MAX98396

configures  the  device  register  once  the Enter key  is pressed.  The  state  of  the  bit  labels  is  then  updated  to reflect the value shown in the edit box.

Note: Trying to write to a read-only bit by clicking/toggling its  label  or  entering  a  hexadecimal  value  in  its  edit  box updates the GUI, but it does not affect the bit's value in the device. All read-only bits are updated to reflect their current value in the device by performing a read all operation. For a complete list of read-only registers, refer to the Write Access Restrictions section of the MAX98396 data sheet.

## Menu Bar

All  the  menu  bar  items  are  described  in  Table  2,  with additional  information  for  some  menu  items  provided  in the following sections.

│

## File I/O

All  menu bar items are described in Table 2, with additional  information  for  some  menu  items  provided  in  the following sections.

The software's save and load features are accessed from the File menu.  The Save  Control  Register  Settings feature saves the data currently displayed on the Control Registers tab.

A configuration file's main purpose is to capture the current state of the MAX98396 registers as displayed on the Register tab.  This  feature  makes  it  easy  to  program  a device to a saved/known state and allows users to share configuration files. A best practice is to use descriptive file names when saving the configuration files.

The  save  and  load  features  are  functional  even  when the hardware is not connected; this allows configuration files to be created and opened when the hardware is not available.  Since  the  configuration  file  is  automatically generated by the software, it is not meant to be manually formatted and doing so can cause file loading issues. To open a configuration file for viewing purposes only, use a plain text editor.

Select File | Save Control Register Settings to  create a configuration file. The register address and its data are saved as tab-delimited values and the file is saved with a .98396 extension.

The software has many standard configuration files preinstalled.  Load  a  file  by  selecting File  |  Load  Register Settings | Pre-Installed Configuration Files , select the file using the drop-down menu, and then click Load .

## Detailed Description of Hardware

The MAX98396 EV System is designed to allow for a thorough evaluation of the MAX98396 boosted Class-D audio amplifier  IC.  The  EV  system  includes  the  MAX98396 development  board  (DEV  board),  Maxim  Integrated's Audio  Interface  Board  III  (AUDINT3),  and  a  Micro-USB cable.

The  MAX98396  DEV  board  can  be  evaluated  as  a stand-alone  board  that  is  driven  directly  by  audio  test equipment,  powered  by  multiple  external  supplies,  and configured by an external I 2 C capable controller. To simplify evaluation, the DEV board can be evaluated with the AUDINT3 board. This hardware combination provides an easy-to-use method for exercising the capabilities of the device without additional audio equipment.

The AUDINT3 board provides on-board LDO regulators, USB-to-PCM, and USB-to-I 2 C interfaces. The AUDINT3 LDO  regulators  are  used  to  power  the  MAX98396's DVDD, DVDDIO, and AVDD supplies through connector J1.  The  USB-to-PCM  converter  accepts  a  USB  audio stream  from  a  USB  connected  computer  and  converts it  into  an  I 2 S  data  stream,  allowing  for  USB audio playback  through  the  MAX98396  device.  The  USB-to-I 2 C interface is the bridge that allows the evaluation software to configure, monitor, and control the I 2 C devices on the MAX98396 DEV and AUDINT3 boards.

Note: If  using  the  external  PCM  interface  (J3),  the AUDINT3  should  be  unplugged  from  the  J1  connector on the DEV board to avoid PCM conflict. The AUDINT3 can still be used for I 2 C communication by using external jumper wires to connect the SCL and SDA lines from the AUDINT3  to  the  DEV  board.  In  this  configuration,  the MAX98396 evaluation software can still be used to control the device.

## Measuring Quiescent Current

When measuring the quiescent current of the MAX98396, note  that  DVDD  (1.2V),  DVDDIO  (1.2V),  and  AVDD (1.8V)  are  provided  by  the  AUDINT3  through  the  J1 connector.  One  way  to  measure  the  quiescent  current of these supplies would be to unplug the AUDINT3 (J1) and use jumper wires to connect SDA and SDL from the AUDINT3 to the MAX98396 DEV board. An external clock source needs to be provided for the PCM interface (the MAX98396 evaluation software can still be used). There are also 0Ω series resistors (R9, R10, R12) on the bot -tom of the DEV board to disconnect these supplies from the AUDINT3. See the MAX98396 EV Kit Schematic for more details.

## Power Supplies

The MAX98396 DEV board requires five power supplies (PVDD, VBAT, DVDD, DVDDIO, AVDD). See Table 3 for details on the power supply ranges.

## Table 3. Power Supplies

| POWERSUPPLY   | RANGE(V)                  |
|---------------|---------------------------|
| VBAT          | 3.0 to 5.5                |
| PVDD*         | 3.0 to 20.0               |
| DVDD          | 1.14 to 1.89              |
| DVDDIO        | 1.14 to 1.26 1.71 to 1.89 |
| AVDD          | 1.71 to 1.89              |

* PVDD must be greater than or equal to VBAT

## MAX98396 Evaluation Kit

When using the AUDINT3 board, the AUDINT3's on-board LDO regulators power DVDD (1.2V), DVDDIO (1.2V), and AVDD (1.8V) on the DEV board through the J1 connector. See Table 5 for a detailed pinout of the J1 connector. Note that PVDD and VBAT must be supplied externally through their respective test points or binding posts.

When  evaluated  as  a  stand-alone  board  (i.e.,  without the AUDINT3),  DVDD,  DVDDIO,  and AVDD  can  be  tied together  to  a  single  1.8V  supply.  These  supplies  can  be connected together by soldering 0Ω resistors to R13, R14, and R31 on the bottom of the DEV board. A 1.8V regulator (powered by VBAT) is provided on the DEV board for this purpose. To use the regulator, short resistors R29 and R30 on the back of the board near the J1 connector.

## Jumper Selection

## Digital Audio Interface

The  MAX98396  Digital  Audio  Interface  (DAI)  is  routed to  interface  header  J3  as  well  as  J1  to  connect  to  the AUDINT3 board.

Before  using  interface  header  J3,  the AUDINT3  should be disconnected from J1 (SDA and SDL can still be connected to the DEV board through jumpers).

The  J2  and  J3  headers  provide  easy  access  to  the device's I 2 C and PCM interfaces. The J1 connector is for the AUDINT3 to supply  USB-to-PCM audio  to  the  DEV board.  See  the USB Audio  Input section  for  details  on USB audio streaming and Table 5 for the connector J1 pinout.

## Table 4. Jumper Configuration (JU4)

The DEV board includes jumper JU4 to facilitate a device reset. In normal operation, the (active-low) RESET should be  connected  to  DVDDIO.  Table  4  describes  the  JU4 configuration  options. Note: Before  starting  evaluation, ensure that the jumper is configured as needed.

| HEADER   | SHUNT POSITION   | DESCRIPTION      |
|----------|------------------|------------------|
| JU4      | RESET to DVDDIO  | Normal operation |
| JU4      | RESET to GND     | Device is reset  |

## Table 5. Pinout of J1 Connector (For AUDINT3 Interface)

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

│

## MAX98396 Evaluation Kit

## DAI Header

The DAI header (J3) provides access to MAX98396's PCM bus (BCLK, LRCLK, DIN, and DOUT). These DAI headers facilitate evaluation with audio equipment I/O. See Table 5 for  the  pinout  of  the  DAI  headers  and  Figure  8  for  an illustration  of  how  the  MAX98396 DAI interface is routed through the DAI headers to the AUDINT3 connector.

## Speaker Output

The MAX98396 audio output is routed to the FOUTP and FOUTN connections on the DEV board.

## EMI Filter

When long speaker cables are used with the MAX98396, additional  EMI  filtering  might  be  required  at  the  output. Footprints  are  provided  for  EMI  filtering  on  the  DEV board. Before adding the filters to the design, the small PCB traces shorting FB1 and FB2 should be cut. Although it  is best to choose filter components based on EMI test results for a specific application, a combination of 220pF capacitors (C11, C12) and ferrite beads (FB1, FB2) generally works well (see the MAX98396 EV Kit Schematic and the MAX98396 EV Kit PCB Layout Diagrams ).

## Table 6. Pinout of External DAI Header (Portion of Header J3)

Figure 8. MAX98396 DAI Interface Headers (PCM)

| SIGNAL   |   PIN |   PIN | SIGNAL   |
|----------|-------|-------|----------|
| GND      |     1 |     2 | BCLK     |
| GND      |     3 |     4 | LRCLK    |
| GND      |     5 |     6 | DIN      |
| GND      |     7 |     8 | DOUT     |

<!-- image -->

Evaluates: MAX98396

│

## MAX98396 Evaluation Kit

## I 2 C Interface

The  MAX98396's  I 2 C  interface  is  routed  to  connectors J1 and J2. J1 is used for connecting to the AUDINT3 and allows  the  MAX98396  evaluation  software  to  read  and write to the device. See Table 5.

J2 can be used for an external I 2 C controller. See Table 7.

## Device Address

The MAX98396 I 2 C device address can be configured to one of eight values: 0x70 (default), 0x72, 0x74, 0x76, 0x78, 0x7A, 0x7C, or 0x7E. The device address is set by connecting the device's ADDR1 pin to GND, SDA, SCL, or DVDDIO and the ADDR2 pin to DVDD or GND. This is accomplished by installing a 0Ω resistor in either the R6 and R7 locations or the R22 and R23 locations. For proper address programming, only one resistor is used for each ADDR pin. R6, R7, R22, and R23 are located on the bottom side of the board and are identified by the silkscreen. See Table 8 for all I 2 C slave address options.

## Table 7. I 2 C Header (J2)

| SIGNAL   |   PIN |   PIN | SIGNAL   |
|----------|-------|-------|----------|
| GND      |     1 |     2 | SDA      |
| GND      |     3 |     4 | SCL      |

## Table 8. I 2 C Address Resistors

| R6AND R7   | R22AND R23   | ADDR PIN   | I 2 C SLAVEADDRESS   |
|------------|--------------|------------|----------------------|
| 0Ω         | OPEN         | GND        | 0x70*                |
| 0Ω         | OPEN         | DVDDIO     | 0x72                 |
| 0Ω         | OPEN         | SDA        | 0x74                 |
| 0Ω         | OPEN         | SCL        | 0x76                 |
| OPEN       | 0Ω           | GND        | 0x78                 |
| OPEN       | 0Ω           | DVDD       | 0x7A                 |
| OPEN       | 0Ω           | SDA        | 0x7C                 |
| OPEN       | 0Ω           | SCL        | 0x7E                 |

## Ordering Information

| PART           | TYPE                       |
|----------------|----------------------------|
| MAX98396EVSYS# | Complete Evaluation System |

# Denotes RoHS compliant.

Evaluates: MAX98396

## Audio Interface Board III

Maxim Integrated's Audio Interface Board III (AUDINT3) was designed for quick and easy evaluation of the DEV board  using  the  MAX98396  evaluation  software.  The AUDINT3 provides a set of features that can be used to exercise  the  capabilities  of  the  DEV  board  without  the need for additional audio equipment. No special drivers are required as the AUDINT3 is automatically recognized as a Windows plug-and-play audio device.

The main components of the AUDINT3 board are LDO supply voltages (DVDD, DVDDIO, and AVDD) and USBto-I 2 C  and  USB-to-PCM  interfaces.  The  supply  voltages allow the DEV board to be evaluated with a minimal amount of external supplies. The USB-to-PCM converter allows any PC to be used as an audio source for the DEV board's digital audio PCM interface, and the USB-to-I 2 C interface allows for the use of the MAX98396 evaluation software.

The  MAX98396  DEV  board  connects  to  the  AUDINT3 board through connector J1. The pinout for J1 is listed in Table 5.

## USB Audio Input

To use the USB streaming feature of the AUDINT3 board, connect the AUDINT3 to the PC using a micro-USB cable. When properly connected, the D1 LED on the AUDINT3 slowly blinks magenta; while audio is streaming, the LED changes to yellow.

See the Quick Start section for more details.

│

## MAX98396 EV Kit Bill of Materials

|   ITEM | REF_DES                       | DNI/DNP   |   QTY | MFG PART #                                                                                    | MANUFACTURER                            | VALUE             | DESCRIPTION                                                                                                              | COMMENTS   |
|--------|-------------------------------|-----------|-------|-----------------------------------------------------------------------------------------------|-----------------------------------------|-------------------|--------------------------------------------------------------------------------------------------------------------------|------------|
|      1 | ADDR, ICC, RESET, VREFC       | -         |     4 | 5002                                                                                          | KEYSTONE                                | N/A               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                    |            |
|      2 | AVDD, DVDD, DVDDIO            | -         |     3 | 5010                                                                                          | KEYSTONE                                | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                    |            |
|      3 | BCLK, DIN, DOUT, IRQ, LRCLK   | -         |     5 | 5003                                                                                          | KEYSTONE                                | N/A               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;      |            |
|      4 | C4, C5, C19, C20              | -         |     4 | GRM033R60J105MEA2; C0603X5R0J105M030; CL03A105MQ3CSN                                          | MURATA;TDK;SAMSUNG                      | 1UF               | CAP; SMT (0201); 1UF; 20%; 6.3V; X5R; CERAMIC                                                                            |            |
|      5 | C6                            | -         |     1 | EMZA350ADA221MHA0G                                                                            | UNITED CHEMI-CON                        | 220UF             | CAP; SMT (CASE_HA0); 220UF; 20%; 35V; ALUMINUM-ELECTROLYTIC                                                              |            |
|      6 | C7, C28                       | -         |     2 | C1005X5R1E105K050; GRM155R61E105KA12                                                          | TDK;MURATA                              | 1UF               | CAP; SMT (0402); 1UF; 10%; 25V; X5R; CERAMIC                                                                             |            |
|      7 | C8                            | -         |     1 | C1608X5R1E106M080AC; CL10A106MA8NRNC; GRM188R61E106MA73; ZRB18AR61E106ME01; GRT188R61E106ME13 | TDK;SAMSUNG ELECTRONICS; MURATA;;MURATA | 10UF              | CAP; SMT (0603); 10UF; 20%; 25V; X5R; CERAMIC                                                                            |            |
|      8 | C13, C29                      | -         |     2 | C0603X5R1E104K030BB; GRM033R61E104KE14                                                        | TDK;MURATA                              | 0.1UF             | CAP; SMT (0201); 0.1UF; 10%; 25V; X5R; CERAMIC                                                                           |            |
|      9 | C15, C16                      | -         |     2 | C3216X5R1E476M160AC                                                                           | TDK                                     | 47UF              | CAP; SMT (1206); 47UF; 20%; 25V; X5R; CERAMIC                                                                            |            |
|     10 | C22                           | -         |     1 | GRM155R61A106ME44; GRM155R61A106ME11; 0402ZD106MAT2A; CL05A106MP5NUNC                         | MURATA;MURATA;AVX; SAMSUNG              | 10UF              | CAP; SMT (0402); 10UF; 20%; 10V; X5R; CERAMIC                                                                            |            |
|     11 | C23                           | -         |     1 | CL03A105MO3NRN                                                                                | SAMSUNG ELECTRONICS                     | 1UF               | CAP; SMT (0201); 1UF; 20%; 16V; X5R; CERAMIC                                                                             |            |
|     12 | FOUTN, FOUTP, GND, PVDD, VBAT | -         |     5 | 111-2223-001                                                                                  | EMERSON NETWORK POWER                   | 111-2223-001      | MACHINE SCREW; THUMBSCREW; BANANA; 1/4-32IN; 11/32IN; NICKEL PLATED BRASS                                                |            |
|     13 | J1                            | -         |     1 | TSW-113-08-G-T-RA                                                                             | SAMTEC                                  | TSW-113-08-G-T-RA | EVKIT PART; CONNECTOR; MALE; THROUGH HOLE; 0.025IN SQ POST HEADER; RIGHT ANGLE; 39PINS; MODIFY PIN NUMBERING ARRANGEMENT |            |
|     14 | J2                            | -         |     1 | PEC02DAAN                                                                                     | SULLINS ELECTRONIC CORP.                | PEC02DAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                                |            |
|     15 | J3                            | -         |     1 | PEC04DAAN                                                                                     | SULLINS ELECTRONICS CORP.               | PEC04DAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 8PINS                                                                |            |
|     16 | J3B, J5                       | -         |     2 | PEC02SAAN                                                                                     | SULLINS                                 | PEC02SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                |            |
|     17 | J4, J6, X1-X4, X6             | -         |     7 | 9020 BUSS                                                                                     | WEICO WIRE                              | MAXIMPAD          | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                 |            |
|     18 | JU4                           | -         |     1 | PEC03SAAN                                                                                     | SULLINS                                 | PEC03SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                |            |
|     19 | JU6                           | -         |     1 | PBC05SAAN                                                                                     | SULLINS ELECTRONICS CORP.               | PBC05SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 5PINS; - 65 DEGC TO +125 DEGC                                        |            |
|     20 | LV_EN, OUTN, OUTP             | -         |     3 | 5116                                                                                          | KEYSTONE                                | N/A               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; GREEN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;       |            |
|     21 | MTH1-MTH4                     | -         |     4 | 91772A108; PHILLIPS-PAN_4-40X3/8IN; PMSSS4400038PH; 9901                                      | GENERIC PART                            | N/A               | MACHINE SCREW; PHILLIPS; PAN; 4-40; 3/8IN; 18-8 STAINLESS STEEL;                                                         |            |
|     22 | MTH1-MTH4                     | -         |     4 | MCH_SO_F_HEX_4-40X1/2                                                                         | GENERIC PART                            | N/A               | STANDOFF; FEMALE-THREADED; HEX; 4-40; 1/2IN; ALUMINUM                                                                    |            |
|     23 | R1-R10, R12, R18, R23, R25    | -         |    14 | RC0402JR-070RL; CR0402-16W-000RJT                                                             | YAGEO PHYCOMP; VENKEL LTD.              | 0                 | RES; SMT (0402); 0; 5%; JUMPER; 0.0630W                                                                                  |            |
|     24 | R11, R27                      | -         |     2 | CRCW04024K70FK; MCR01MZPF4701                                                                 | VISHAY DALE;ROHM SEMICONDUCTOR          | 4.7K              | RES; SMT (0402); 4.7K; 1%; +/-100PPM/DEGC; 0.0630W                                                                       |            |
|     25 | R28                           | -         |     1 | ERJ-2RKF2102                                                                                  | PANASONIC                               | 21K               | RES; SMT (0402); 21K; 1%; +/-100PPM/DEGC; 0.1000W                                                                        |            |

Evaluates: MAX98396

## MAX98396 EV Kit Bill of Materials (continued)

| ITEM     | REF_DES                           | DNI/DNP   | QTY      | MFG PART #                                                | MANUFACTURER                          | VALUE         | DESCRIPTION                                                                                                             | COMMENTS   |
|----------|-----------------------------------|-----------|----------|-----------------------------------------------------------|---------------------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------|------------|
| 26       | R32                               | -         | 1        | FCSL32R050FE                                              | OHMITE MANUFACTURING CORP             | 0.05          | RES; SMT (0612); 0.05; 0.5%; +/-50PPM/DEGC; 1.5W                                                                        |            |
| 27       | R33                               | -         | 1        | FCSL32R025FE                                              | OHMITE MANUFACTURING CORP             | 0.025         | RES; SMT (0612); 0.025; 0.5%; +/-50PPM/DEGC; 1.5W                                                                       |            |
| 28       | SCL, SDA                          | -         | 2        | 5004                                                      | KEYSTONE                              | N/A           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;     |            |
| 29       | SU1, SU2                          | -         | 2        | S1100-B;SX1100-B; STC02SYAN                               | KYCON;KYCON;SULLINS ELECTRONICS CORP. | SX1100-B      | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                 |            |
| 30       | TP1-TP4                           | -         | 4        | 5011                                                      | KEYSTONE                              | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; | GND        |
| 31       | U1                                | -         | 1        | MAX98396                                                  | MAXIM                                 | MAX98396      | EVKIT PART - IC; MAX98396; PACKAGE OUTLINE DRAWING: 21- 100482; PACKAGE CODE: N352A3Z+1                                 |            |
| 32       | PCB                               | -         | 1        | MAX98396_WLP_APPS_A                                       | MAXIM                                 | PCB           | PCB:MAX98396_WLP_APPS_A                                                                                                 |            |
| 33       | C1-C3, C9-C12, C17, C21, C18      | DNP       | 0        | N/A                                                       | N/A                                   | OPEN          | CAPACITOR; 0402 PACKAGE; GENERIC                                                                                        |            |
| 34       | C24, C25                          | DNP       | 0        | N/A                                                       | N/A                                   | OPEN          | PACKAGE OUTLINE 1206 NON-POLAR CAPACITOR                                                                                |            |
| 35       | C26, C14                          | -         | 2        | C1005X5R1E225K050                                         | TDK                                   | 2.2UF         | CAP; SMT (0402); 2.2UF; 10%; 25V; X5R; CERAMIC                                                                          |            |
| 36       | C27                               | -         | 1        | NMC0402X7R103K16TRP; GRM155R71C103KA01; CC0402KRX7R7BB103 | NIC COMPONENTS CORP.; MURATA;YAGEO    | 0.01UF        | CAP; SMT (0402); 0.01UF; 10%; 16V; X7R; CERAMIC                                                                         |            |
| 37       | FB1, FB2                          | DNP       | 0        | N/A                                                       | N/A                                   | N/A           | INDUCTOR; 0603 PACKAGE; FERRITE-BEAD; GENERIC                                                                           |            |
| 38       | J8, J9                            | DNP       | 0        | 9020 BUSS                                                 | WEICO WIRE                            | MAXIMPAD      | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                | DNI        |
| 39       | OUTNSNS, OUTPSNS                  | DNP       | 0        | 5002                                                      | KEYSTONE                              | N/A           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                   | DNI        |
| 40       | R13, R14, R21, R22, R31, R34, R35 | DNP       | 0        | N/A                                                       | N/A                                   | OPEN          | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                        |            |
| 41       | R15-R17, R19, R20                 | DNP       | 0        | N/A                                                       | N/A                                   | OPEN          | RESISTOR; 0402 PACKAGE; GENERIC                                                                                         |            |
| 42       | R24, R29, R30, R36                | DNP       | 0        | RC0402JR-070RL; CR0402-16W-000RJT                         | YAGEO PHYCOMP; VENKEL LTD.            | 0             | RES; SMT (0402); 0; 5%; JUMPER; 0.0630W                                                                                 | DNI        |
| 43       | R26                               | DNP       | 0        | N/A                                                       | N/A                                   | OPEN          | PACKAGE OUTLINE 0201 RESISTOR                                                                                           |            |
| 44       | TP5, TP6                          | DNP       | 0        | 5001                                                      | KEYSTONE                              | N/A           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;      | DNI        |
| 45       | U2                                | -         | 1        | MAX8887EZK18+                                             | MAXIM                                 | MAX8887EZK18+ | IC; VREG; LOW-DROPOUT; 0.3A LINEAR REGULATOR; SOT23-5                                                                   |            |
| 46       | C31                               | DNP       | 0        | N/A                                                       | N/A                                   | OPEN          | CAPACITOR; SMT (0603); OPEN; FORMFACTOR                                                                                 |            |
| 47       | C33, C34                          | DNP       | 0        | N/A                                                       | N/A                                   | OPEN          | CAPACITOR; SMT (0402); OPEN; FORMFACTOR                                                                                 |            |
| TOTAL 89 | TOTAL 89                          | TOTAL 89  | TOTAL 89 | TOTAL 89                                                  | TOTAL 89                              | TOTAL 89      | TOTAL 89                                                                                                                | TOTAL 89   |

Evaluates: MAX98396

## MAX98396 EV Kit Schematic

<!-- image -->

Evaluates: MAX98396

## MAX98396 EV Kit PCB Layout Diagrams

MAX98396 EV System Component Placement Guide-Top Silkscreen

<!-- image -->

MAX98396 EV System PCB Layout-Top Layer

<!-- image -->

MAX98396 EV System PCB Layout-GND L2

<!-- image -->

MAX98396 EV System PCB Layout-Signal GND L3

<!-- image -->

│

## MAX98396 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX98396 EV System PCB Layout-Power L4

<!-- image -->

MAX98396 EV System PCB Layout-GND L5

MAX98396 EV System PCB Layout-Bottom View

<!-- image -->

MAX98396 EV System Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

## MAX98396 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/21            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX98396