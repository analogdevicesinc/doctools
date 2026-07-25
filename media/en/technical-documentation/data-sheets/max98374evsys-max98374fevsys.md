<!-- lastmod 2022-08-05 -->
## MAX98374 Evaluation System

## General Description

The MAX98374 evaluation system (EV system) evaluates the  high-efficiency  MAX98374  mono  Class  D  audio amplifier  featuring  dynamic  headroom  tracking  (DHT) and brownout protection. The EV system consists of the MAX98374  development  board  (DEV  board),  Maxim's Audio Interface 1 (AUDINT1) board, and the MAX98374 evaluation software.

The MAX98374 DEV board is fully assembled and tested and  contains  the  necessary  circuitry  and  connections to  evaluate the MAX98374 device in the FCQFN or the WLP  package.  It  is  recommended  that  the  DEV  board be evaluated with the AUDINT1 board, as an EV system. The  MAX98374  requires  two  supply  inputs,  5.5V  to 16V (PVDD) and 1.71V to 1.89V (DVDD). It is capable of  delivering  16W  into  an  8Ω  load.  Additionally,  the MAX98374 supports standard I 2 S, left-justified, TDM, and SoundWire ® digital audio formats.

When  evaluated  as  an  EV  system,  the  AUDINT1  board provides the necessary logic rails, USB-to-I 2 S and USB-to-I 2 C interfaces  that  are  needed  to  evaluate  the  MAX98374  DEV board with only a single external power supply. The Simplified FCQFN EV System Block Diagram provides an image of the EV system, highlighting the key areas on each board.

## Features

- 5.5V to 16V Single-Supply Operation (EV System)
- USB Audio Streaming (EV System)
- Digital Audio Interface (DAI)
- I 2 S, Left-Justified, Up to 16-Channel TDM
- SoundWire Compliant
- Speaker Output (OUTP/OUTN)
- I 2 C-Compatible Device
- Windows 7- and Windows 10-Compatible Software
- Fully Assembled and Tested

## EV System Contents

- MAX98374 Development Board
- Audio Interface 1 Board
- Two A to B Mini-USB Cables

Ordering Information appears at end of data sheet.

SoundWire is a registered trademark of MIPI Alliance Corp.

Communication  with  the  DEV  board  is  facilitated  by Windows ® 7-  and  Windows 10-compatible software that provides  a  simple  and  intuitive  graphical  user  interface (GUI). The MAX98374 evaluation software is only for use with the MAX98374 EV system.

Windows is a registered trademark and registered service mark of Microsoft Corp.

## Simplified FCQFN EV System Block Diagram

<!-- image -->

<!-- image -->

Evaluates: MAX98374

## MAX98374 Evaluation System

## Simplified WLP EV System Block Diagram

<!-- image -->

## Quick Start

## Required Equipment

- MAX98374EVSYS#
- MAX98374DEV#
- MAXAUDINT001#
- Two A to B Mini-USB cables
- 4Ω to 8Ω speaker
- 5.5V to 16V DC power supply
- USB audio source (e.g., Windows Media ® Player or iTunes ® )
- User-supplied Windows 7 or Windows 10 PC with two available USB ports

## Required Software

- MAX98374 evaluation software (installer: MAX98374EVSwSetupVxx.exe)

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  evaluation  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Reference Material

- Audio Interface 1 data sheet
- MAX98374 IC data sheet

Windows Media is a registered trademark and registered service mark of Microsoft Corp.

## Procedure

The MAX98374 and AUDINT1 boards are fully assembled and  tested.  Follow  the  steps  below  to  setup  the  EV System for device evaluation.

## Software Install

- 1) For the latest software, login to your MyMaxim account at  Maximintegrated.com,  navigate  to  MAX98374  &gt; Design Resources &gt; MAX98374 Evaluation Software &gt; MAX98374EVSw-SetupVxx.zip, select to start the  download.  Extract  the  downloaded  folder  to  a temporary location.
- 2) Install  the  software  and  USB  driver  on  your  computer  by running the program installer MAX98374EVSwSetup. exe. Program files are copied, and icons are created  in  the  Windows  Start  |  Programs  |  Maxim Integrated|  MAX98374  Evaluation  Software  folder. Follow the installer prompts to completion. For first time installations, at the Select Additional Tasks page, be sure the Install FTDI USB Driver (Audio Interface 1) check box is selected as shown in Figure 1. The FTDI drivers are needed for I 2 C communication with the device through the Audio Interface 1 application board. Windows might display a message indicating that this software is from an unknown publisher. This is not an error condition and it is safe to proceed with the installation.

iTunes is a registered trademark of Apple, Inc.

Evaluates: MAX98374

## MAX98374 Evaluation System

## DEV Board Setup

- 1) Set  the  power  supply  to  between  5.5  and  16V  and disable the power supply output.
- 2) Connect  the  power  supply  between  the  PVDD  and GND binding posts.
- 3) Connect the 4Ω to 8Ω speaker across the OUTP and OUTN binding posts.
- 4) Adjust  jumpers  JU4  and  JU6  as  needed.  See  the Jumper Selection section.

Evaluates: MAX98374

## AUDINT1 Board Setup

- 1) Connect the USB cables from your computer to the USB1 and USB2 ports on the AUDINT1 board.
- 2) Set the DVDD jumper on the AUDINT1 board to the 1.8V position.
- 3) Set the VIO jumper on the AUDINT1 board to the 1.8V position.
- 4) Configure  switches  I2S  and  I2C  to  the  CONNECT position.
- 5) Configure  the  SW1  switch  with  its  actuator  in  the EVAL position.

Figure 1. Software Installer, FTDI USB Driver Selection

<!-- image -->

## MAX98374 Evaluation System

## Test

- 1) With  the  audio  source  disabled,  connect  the  DEV board  (J1  connector)  to  the  AUDINT1  board  (J1 connector). Only the bottom two rows of pins on the DEV board  J1  connector  need  to  connect  with  the AUDINT1 board J1 connector.
- 2) Enable the power supply output (PVDD).
- 3) Start  the  MAX98374  evaluation  software  and  wait while the software connects to the EV system.
- 4) Once  the  connection  is established, the status bar at  the  bottom  of  the  GUI  window  reports USB Connected and displays the MAX98374 part number and revision ID.

Evaluates: MAX98374

- 5) After the EV system is fully connected, configure the device by loading the 'usb\_audio.98374' configuration file. This file is located in the 'config\_files' folder that was created in the installation directory.
- 6) Open  the  Windows' Sound dialog  and  select  the Playback tab.  A USB Audio DAC item, similar to Figure 3 , should be listed as an available playback device.
- 7) Verify  that  the USB Audio  DAC item  is  set  as  the default device.
- 8) Adjust the audio source volume to a low level.
- 9) Enable the audio source and verify that audio is heard through  the  connected  speaker.  Adjust  the  audio source volume as needed. Quick Start is complete.

Figure 2. MAX98374 Evaluation Software-Main Window

<!-- image -->

Figure 3. Playback Device

<!-- image -->

## MAX98374 Evaluation System

## Detailed Description of Software

The  MAX98374  evaluation  software  is  designed  to  be used only with the MAX98374 EV system. The software provides  an  intuitive  graphical  user  interface  (GUI)  for programming the MAX98374 device and also includes a handful of features to aid evaluation.

The MAX98374  evaluation software main window ( Figure 2) is composed of four main sections: menu bar, communication  tool  bar,  tabbed  pages,  and  a  status bar.  The  menu  bar  provides  additional  features  to  aid evaluation,  the  toolbar  provides  basic  functionality  for communicating  with  the  device,  and  the  status  bar provides  information  about  hardware  connectivity  and communication  status.  The  tabbed  pages  make  up  the bulk of the GUI and provide the controls for programming the MAX98374 device registers.

The Block  Diagram tab  provides  access  to  all  device registers  through  the  use  of  dialog  windows,  which contain GUI controls for configuring the device. The dialog windows are opened by clicking on the blocks in the blockdiagram. The Control Registers tab provides access to the valid registers in the range from 0x2000-0x20FF as well as to the revision ID register, 0x21FF.

The  MAX98374  evaluation  software  is  compatible  with Windows  7  and  Windows  10  and  can  be  obtained  by

## Table 1. Tool Bar Controls

Figure 4. Communication Tool Bar

| CONTROL            | FUNCTION                                                                                                                                                                        |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| On                 | Press to set the Global Enable bit (EN). This enables the device.                                                                                                               |
| Off                | Press to clear the Global Enable bit (EN). This disables the device. Note : The software can communicate with a disabled device, being that its I 2 C interface remains active. |
| Active Device      | Provides a list of detected I 2 C addresses. The displayed address is the active device.                                                                                        |
| Connect/Disconnect |                                                                                                                                                                                 |
| Connect            | Press to connect to the USB Control (USB1) interface on the AUDINT1 board and to search for I 2 C devices. Detected addresses are shown in the Active Device drop-down list.    |
| Disconnect         | Press to disconnect from the USB Control (USB1) interface.                                                                                                                      |
| Read All           | Press to initiate a read of all device registers of active device. The Control Registers and Block Diagram tabs are updated to reflect the read data.                           |
| Write All          | Press to initiate a write to all device registers of active device, using the settings shown on the Control Registers tab.                                                      |
| Reset              | Press to reset active device registers to their power-on-reset (POR) state.                                                                                                     |

<!-- image -->

Evaluates: MAX98374

contacting Maxim Integrated for the latest installation file. Refer to the MAX98374 IC data sheet for device register information.

## Communication Toolbar

The toolbar consists of six buttons and a drop-down combo box. These controls are always accessible, regardless of the active tabbed page.  The tool bar is shown in Figure 4 and Table 1 provides details about each control.

## Connect Sequence

When the evaluation software starts for the first time the program  attempts  to  automatically  connect  to  the  EV system.  It  first  attempts  to  connect  to  the  USB  control (USB1)  interface  on  the  AUDINT1  board.  Once  that connection  is  established,  it  searches  for  all  the  I 2 C addresses  associated  with  the  MAX98374  device  and populate  all  detected  device  addresses  in  the Active Device drop-down list. During this sequence, the text on the Connect button automatically changes from Connect to Disconnect ,  and  the  status  bar  is  also  updated  to reflect the current state of the hardware connection.

Once  the  EV  system  is  fully  connected  the  button displays Disconnect and  when  pushed,  it  disconnects the  software  from  the  hardware. The  software  can  also be disconnected from the hardware by selecting Device | Disconnect from the menu bar.

## MAX98374 Evaluation System

There are two methods to reestablish a connection with the hardware. The first is by selecting Device | Connect from the menu bar. This instructs the program to connect to the EV system. The second method is to manually push the Connect button  until  it  displays Disconnect ,  which signifies that the EV system is fully connected.

## Status Bar

The Status bar is divided into four sections. From left to right: status and alert messages, device part number and revision  ID,  interface  name  and  firmware  version,  and Evaluation System connection status.

## Status Panel

The Status panel (not to be confused with the Status bar) displays the state of the Raw , State ,  and Flag interrupts. This data is read from the Raw\_, State\_, and Flag\_ interrupt registers  (0x2001-0x2009).  When  the  image  is  red,  it indicates that the associated interrupt bit has been set.

The  panel  also  includes  checkboxes  for  each  interrupt that  are  used  to  enable  the  link  between  an  interrupt's Flag bit and State bit. When enabled, the Flag bit is set whenever the State bit is set. To clear the State and Flag bits, click on the interrupt's associated Clear button.

Evaluates: MAX98374

- Note: 1)  Each interrupt source must be enabled for the FLAG column (i.e., Flag bits) to be set.
- 2) The IRQ\_EN bit needs to be set for the interrupt to be output on the IRQ pin.

## Block Diagram Tab

The evaluation software uses an interactive block diagram to  facilitate  the  programming  of  the  MAX98374  device. The block diagram also provides a visual representation of the device's functions and current configuration.

There  are  three  types  of  blocks  in  the  block  diagram and they are identified by the cursor image. The cursor changes to a hand when over a block that opens a dialog window and changes to a solid arrow when over a block that toggles a specific device setting. If the cursor does not  change  when  over  a  block,  then  it  is  not  an  active block and is only provided for illustrational purposes.

The color of a diagram block changes, depending on the enabled  state  of  the  device  function(s)  associated  with that block. An inactive block is grey, a disabled block is white, and an enabled block is teal. Figure 5 shows the block  diagram  with  the  MAX98374  configured  for  DAI (USB audio) input and speaker output.

Figure 5. MAX98374 Block Diagram-USB Audio Input to Speaker Output

<!-- image -->

## MAX98374 Evaluation System

## Dialog Windows

Dialog  windows  are  associated  with  specific  blocks in  the  block  diagram  and  they  contain  the  controls  for configuring  the  registers  associated  with  that  functional block. A dialog window is opened by clicking on a dialog block.  Figure  6  shows  the  typical  GUI  controls  that  are found on a dialog window.

## Control Registers Tab

The Control  Registers  tab provides  two  methods  for configuring  the  device. As  an  example,  Figure  7  shows the elements of the Interrupt registers.

The  first  configuration  method  involves  clicking  on  the register's bit labels. A greyed-out bit label indicates that the bit is currently set low. A bold bit label indicates that the bit is currently set high. Clicking on a bit toggles its state  and  results  in  a  write  to  that  register.  This  action Evaluates: MAX98374

also updates the value displayed in the register's edit box, located to the right of the bit labels.

The  second  configuration  method  involves  entering  a hexadecimal  value  in  the  register's  edit  box  and  then pressing  the Enter key.  The  software  automatically configures  the  device  register  once  the Enter key  is pressed. The state of the bit labels are then updated to reflect the value shown in the edit box.

Note: Trying to write to a read-only bit, by clicking/toggling its label or entering a hex value in its edit box, updates the GUI, but it does not affect the bit's value in the device. All read-only bits are updated to reflect their current value in the device by performing a read all operation.

All changes made on this tab are reflected on the Block Diagram tab and on any open dialog windows.

Figure 6. Typical GUI Controls

<!-- image -->

Figure 7. Control Registers Tab

<!-- image -->

## MAX98374 Evaluation System

## Menu Bar

All the menu bar items are described in Table 2. Additional information  for  some  menu  items  is  provided  in  the following sections.

## File I/O

The software's save and load features are accessed from the File menu.  The Save  Control  Register  Settings feature saves the data currently displayed on the Control Registers tab.

A  configuration  file's  main  purpose  is  to  capture  the current state of the MAX98374's registers, as displayed on the register tab. This feature makes it easy to program a device to a saved/known state and allows for the sharing of  configuration files between users. To facilitate usage, use descriptive file names when saving configuration file.

Table 2. Menu Bar Items

| MENU ITEM                      | DESCRIPTION                                                                                                                                                               |
|--------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| File                           |                                                                                                                                                                           |
| Load Register Settings         | Loads a configuration file (as saved by the Save Control Register Settings option or a factory pre-installed file).                                                       |
| Save Control Register Settings | Saves a configuration file containing the current device settings.                                                                                                        |
| Exit                           | Closes the MAX98374 software.                                                                                                                                             |
| Device                         |                                                                                                                                                                           |
| Connect                        | Runs a connection routine to connect to the Evaluation System. First establishing a connection to the AUDINT board and then to the MAX98374 device.                       |
| Disconnect                     | Disconnects the PC from the EV System.                                                                                                                                    |
| Reset                          | Resets all control registers to their power-on-reset states.                                                                                                              |
| Read All                       | Performs a read from all registers and updates the GUI.                                                                                                                   |
| Write All                      | Performs a write to all writeable registers, using the values show on the Control Registers tab and then updates the GUI.                                                 |
| Read Rev ID                    | Reads the device's revision ID register and updates the status bar.                                                                                                       |
| View                           |                                                                                                                                                                           |
| Communication Log              | Toggles the display of the Log tab in the tabbed pages. The Log tab shows the log of communications with the MAX98374 and allows for a specific register to be read back. |
| Options                        |                                                                                                                                                                           |
| Interface Selection            | Selects the I 2 C hardware interface to either the Audio Interface or a I 2 C Bridge (not supported).                                                                     |
| Configuration Mode F4          | Opens a dialog that allows multiple MAX98374 devices to be selected for configuration through the software.                                                               |
| Demo Mode                      | Puts the software in demo mode.                                                                                                                                           |
| Help                           |                                                                                                                                                                           |
| View Help                      | Links to technical documentation                                                                                                                                          |
| About                          | Provides information about the MAX98374 evaluation software.                                                                                                              |

Evaluates: MAX98374

The save and load features are functional even when the hardware is not connected. This allows configuration files to be created and opened when hardware is not available. Since the configuration file is automatically generated by the software it is not meant to be manually formatted and doing so can cause file loading issues. To open a configuration file for viewing purposes, use a plain text editor.

Select File | Save Control Register Settings to  create a configuration file. The register address and its data are saved as tab delimited values and the file is saved with a .98374 extension.

The software has many standard sample rate configuration  files  pre-installed. A  file  can  be  loaded  by selecting File | Load Register Settings | Pre-Installed Configuration Files ,  use the drop-down menu to select file, then click load.

## Detailed Description of Hardware

The  MAX98374  EV  system  is  designed  to  allow  for  a thorough  evaluation  of  the  MAX98374  mono  Class  D audio amplifier. The EV system includes the MAX98374 development  board  (DEV  board)  and  Maxim's  Audio Interface 1 (AUDINT1) board.

The MAX98374 DEV board can be evaluated as a standalone board that is driven directly by audio test equipment, powered by multiple external supplies, and configured by an external I 2 C capable controller. To facilitate evaluation, it is recommended that the DEV board be evaluated with the AUDINT1 board. This hardware combination provides an easy-to-use method for exercising the capabilities of the device, with the need for only one external supply and no additional audio equipment.

The AUDINT1 board provides on-board LDO regulators, USB-to-I 2 S  and  USB-to-I 2 C  interfaces.  The  AUDINT1 LDO  regulator  can  be  used  to  power  the  MAX98374's DVDD supply rail.  The  USB-to-I 2 S  converter  accepts  a USB audio stream from a USB connected computer and converts that into an I 2 S data stream, allowing for USB audio playback through the MAX98374 device. The USBto-I 2 C  interface  is  the  bridge  that  allows  the  evaluation software  to  configure,  monitor,  and  control  the  I 2 C capable  devices  on  the  MAX98374  DEV  and AUDINT1 boards.

## Power Supplies

The MAX98374 DEV board requires at least two external power supplies when evaluated as a standalone board. The power supplies and their ranges are listed in Table 3. The  external  supply  voltages  can  be  connected  at  the respective supply test-points and/or binding posts. Note that  header  J3A  provides  both  a  ground  and  DVDD connection. Care should be taken when powering DVDD through this J3A header.

When used with  the AUDINT1  board  only  one  external power  supply  is  needed.  The  external  power  supply provides the PVDD input voltage and the DVDD input is powered by the LDO regulators on the AUDINT1 board.

## Jumper Selection

The  DEV  board  includes  2  jumpers  to  adjust  various hardware  configuration  options.  Table  4  describes  all  the jumpers  available  on  the  EV  kit. Note: Before  starting evaluation, ensure that all jumpers are configured as needed.

## Digital Audio Interface

The  MAX98374  digital  audio  interface  (DAI)  is  routed  to interface header J3 as well as the AUDINT1 connector, J1. The  interface  header  (J3)  provides  easy  access  to  the device's  I 2 S  bus  and  the  AUDINT1  connector  allows  for USB audio to be streamed onto the  DEV  board.  See  the USB Audio Input section for details on USB audio streaming.

## DAI Headers

The DAI headers provide access to the MAX98374's clock inputs as well as its PCM interface: BCLK, LRCLK, DIN, and DOUT. These two DAI headers facilitate evaluation with audio equipment I/O. See Table 5 for the pinout of the  DAI  headers  and  Figure  8  for  an  illustration  of  how the  MAX98374 DAI interface  is  routed  through  the  DAI headers to the AUDINT1 connector.

## Table 3. Power Supplies

| POWER SUPPLY   | RANGE (V)    |
|----------------|--------------|
| PVDD           | 5.5 to 16    |
| DVDD           | 1.71 to 1.89 |

## Table 4. Jumper Configuration

| HEADER        | SHUNT POSITION   | DESCRIPTION                                   |
|---------------|------------------|-----------------------------------------------|
| JU4 ( RESET ) | 1-2* (DVDD)      | Normal device operation                       |
| JU4 ( RESET ) | 2-3 (GND)        | Hardware reset (digital blocks and registers) |
| JU6 (ADDR)    | 1-2              | Connected to SDA                              |
| JU6 (ADDR)    | 1-3*             | Connected to DVDD                             |
| JU6 (ADDR)    | 1-4              | Connected to SCL                              |
| JU6 (ADDR)    | 1-5              | Connected to GND                              |

* Default position.

## MAX98374 Evaluation System

## Interchip Communication (ICC) Bus

The  MAX98374  features  an  interchip  communication (ICC) bus that facilitates synchronized gain adjustments between  groups  of  MAX98374  devices  when  using  the device's  brownout  detection  engine  (BDE).  The  ICC feature is only supported when using the PCM interface and connections to the ICC interface are made through the J3B header. See Table 6 for pinout.

## USB Audio Input

The AUDINT1 board's USB-to-I 2 S interface allows USB audio  to  be  streamed  onto  the  MAX98374  DEV  board. This  facilitates  evaluation  by  providing  a  quick  method for  playing audio through the device. To utilize the USB streaming  feature  of  the  AUDINT1  board  make  the following hardware configurations:

- Connect the USB cables from your computer to the USB1 (USB CONTROL) and USB2 (USB AUDIO) ports on the AUDINT1 board.
- Configure the I 2 S and I 2 C switches on the AUDINT board to the CONNECT position.
- Set the VIO and DVDD headers on the AUDINT1 board to the 1.8V position and set SW1 to DEMO.
- Ensure the AUDINT1 board is connected to the DEV board.

Evaluates: MAX98374

Once the hardware is ready use the MAX98374 evaluation software to configure and enable the device for DAI audio playback.  Refer  to  the Audio  Interface  1 data  sheet  for more information.

## Speaker Output

The MAX98374 audio output is routed to the FOUTP and FOUTN connections on the DEV board. The DEV board is, by default, assembled to allow the MAX98374 output to connect directly to a speaker load without the need for filtering.

## Table 5. DAI Header (J3)

| SIGNAL   |   PIN |   PIN | SIGNAL     |
|----------|-------|-------|------------|
| GND      |     1 |     2 | BCLK/SWCLK |
| GND      |     3 |     4 | LRCLK      |
| GND      |     5 |     6 | DIN/SWDATA |
| GND      |     7 |     8 | DOUT       |

## Table 6. ICC Header (J3B)

Figure 8. DAI Interface Headers-I 2 S

| SIGNAL   |   PIN |
|----------|-------|
| ICC      |     2 |
| GND      |     1 |

<!-- image -->

## MAX98374 Evaluation System

## EMI Filter

When long speaker cables are used with the MAX98374 output, a ferrite bead plus capacitor filter can be installed to prevent excessive EMI radiation. Although it is best to choose filter components based on EMI test results, the combination of 680pF capacitors (C9, C10) and Murata BLM18SG331TN1  ferrite  beads  (FB1,  FB2)  generally work  well.  Before  adding  the  filters  to  the  design,  first remove the short PCB traces shorting FB1 and FB2 (see the MAX98374 EV Kit Development Board Schematic and the MAX98374 EV Kit Development Board PCB Layout Diagrams ).

## SoundWire Interface

The  SoundWire  slave  Interface  on  the  MAX98374 is  compliant  with  version  1.1  of  the  MIPI  SoundWire specification.  The  SoundWire  slave  interface  supports both  audio  and  control  data  transport  over  the  shared 2-wire  bus  comprising  a  clock  input  (SWCLK)  and  a bidirectional data input/output (SWDATA). The SoundWire slave device identification number is set by 0Ω resistors Evaluates: MAX98374

R9,  R21,  R22,  and  R25  (see  Table  7).  The  SoundWire clock and data inputs are connected to DEV board header J3. See Table 5.

For  SoundWire  evaluation,  the  AUDINT1  board  is  only used for powering DVDD, an external SoundWire compliant master needs to be applied to the DEV board. To utilize the LDO  regulator  that  drives  DVDD  on  the  AUDINT1  board make the following hardware configurations:

- Connect the USB cable to the USB1 port on the AUDINT1 board.
- Set the VIO and DVDD headers on the AUDINT1 board to the 1.8V position.
- Slide the AUDINT1 board's SW1 switch actuator to the EVAL position.
- Slide the AUDINT1 board's I 2 S, I 2 C, MSEL, and MCLK switch actuator to the DISCONNECT position.
- Ensure the AUDINT1 board is connected to the DEV board.

## Table 7. SoundWire Slave Device Unique ID Configuration

| JU6 (ADDR) JUMPER   | SDA   | SCL   |   DEVICE ID |
|---------------------|-------|-------|-------------|
| DGND                | R21   | R25   |        0001 |
| DGND                | R9    | R25   |        0002 |
| DGND                | R21   | R22   |        0003 |
| DGND                | R9    | R22   |        0004 |
| DVDD                | R9    | R22   |        0005 |
| DVDD                | R9    | R25   |        0006 |
| DVDD                | R21   | R22   |        0007 |
| DVDD                | R21   | R25   |        0008 |

## MAX98374 Evaluation System

## I 2 C Interface

The  MAX98374's  I 2 C  interface  is  routed  to  header  J2 and connector J1. The J1 connector is for the AUDINT1 board  and  connects  the  device's  I 2 C  interface  to  the MAXQ2000's I 2 C interface on the AUDINT1 board. This connection  allows  the  MAX98374  evaluation  software to  read  and  write  to  the  device.  See  Table  8.  The  I 2 C interface  should  only  be  used  when  not  in  SoundWire mode.

Header J2 allows for an external I 2 C controller to connect to  the  device's  I 2 C  bus.  When  using  an  external  I 2 C controller,  and  still  connecting  to  the  AUDINT1  board, ensure that the I 2 C switch (on the AUDINT1 board) is in the DISCONNECT position.

## Device Address (I 2 C)

The MAX98374 I 2 C device address can be configured to one of four values by configuring jumper JU6 (see Table 9 ) .

## Table 8. I 2 C Header (J2)

| SIGNAL   |   PIN |   PIN | SIGNAL   |
|----------|-------|-------|----------|
| GND      |     1 |     2 | SDA      |
| GND      |     3 |     4 | SCL      |

## Evaluates: MAX98374

## Audio Interface 1 Board

Maxim's  Audio  Interface  1  board  (AUDINT1  board) facilitates the evaluation of the DEV board by providing a set of features that can be used to exercise the capabilities of  the  DEV  board  without  the  need  for  additional  audio equipment. The main components of the AUDINT1 board are  its  LDO  supply  voltages,  its  USB-to-I 2 C  and  USBto-I 2 S  interfaces.  The  supply  voltages  allow  the  DEV board  to  be  evaluated  with  minimal  amount  of  external supplies. The USB-to-I 2 S converter allows any computer to be used as an audio source for the DEV board's digital audio I 2 S interface and the USB-to-I 2 C interface allows for the use of the MAX98374 evaluation software, making device configuration and monitoring a lot simpler. Refer to the Maxim Audio Interface 1 data sheet for additional information.

The  MAX98374  DEV  board  connects  to  the  AUDINT1 board  through  connector  J1.  The  physical  connections made between the DEV board and AUDINT1 board are listed in Table 10.

## Table 9. I 2 C Address Jumper Settings (JU6)

* Default

| JU6 (ADDR) JUMPER   | I 2 C ADDRESS   |
|---------------------|-----------------|
| DVDD                | 0x62*           |
| GND                 | 0x64            |
| SDA                 | 0x66            |
| SCL                 | 0x68            |

## MAX98374 Evaluation System

## Table 10. AUDINT1 Connector (J1)

|   PIN | SIGNAL   |   PIN | SIGNAL     |   PIN | SIGNAL   |
|-------|----------|-------|------------|-------|----------|
|     1 | -        |     2 | -          |     3 | GND      |
|     4 | -        |     5 | BCLK/SWCLK |     6 | IRQ      |
|     7 | -        |     8 | LRCLK      |     9 | ADDR     |
|    10 | -        |    11 | DIN/SWDATA |    12 | RESET    |
|    13 | -        |    14 | DOUT       |    15 | I.C.     |
|    16 | -        |    17 | -          |    18 | -        |
|    19 | -        |    20 | DVDD*      |    21 | GND      |
|    22 | -        |    23 | -          |    24 | GND      |
|    25 | GND      |    26 | SDA        |    27 | -        |
|    28 | -        |    29 | SCL        |    30 | -        |
|    31 | GND      |    32 | -          |    33 | -        |
|    34 | -        |    35 | -          |    36 | -        |
|    37 | GND      |    38 | -          |    39 | -        |

## Ordering Information

| PART            | TYPE                                |
|-----------------|-------------------------------------|
| MAX98374FEVSYS# | Evaluation System for FCQFN Package |
| MAX98374EVSYS#  | Evaluation System for WLP Package   |

# Denotes RoHS compliant.

Evaluates: MAX98374

## MAX98374 FCQFN EV Kit Development Board Bill of Materials

| REF_DES                                              | QTY   | MFG PART #                                                | MANUFACTURER              | VALUE                                                  | DESCRIPTION                                                                                                                  |
|------------------------------------------------------|-------|-----------------------------------------------------------|---------------------------|--------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| ICC, IRQ, ADDR, I.C., RESET, VREFC, OUTNSNS, OUTPSNS | 8     | 5002                                                      | KEYSTONE                  | N/A                                                    | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                        |
| DIN, BCLK, DOUT, LRCLK                               | 4     | 5003                                                      | KEYSTONE                  | N/A                                                    | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;          |
| C5                                                   | 1     | GRM033R60J105MEA2;C0603X5R0J10 5M030;CL03A105MQ3CSN       | MURATA;TDK;SAMSUNG        | 1UF                                                    | CAPACITOR; SMT (0201); CERAMIC CHIP; 1UF; 6.3V; TOL=20%; MODEL=GRM SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R                   |
| C6                                                   | 1     | EMZA350ADA221MHA0G                                        | UNITED CHEMI-CON          | 220UF                                                  | CAPACITOR; SMT (CASE_HA0); ALUMINUM-ELECTROLYTIC; 220UF; 35V; TOL=20%; MODEL=MZA SERIES                                      |
| C7, C16                                              | 2     | TMK105BJ104KV; GRM155R61E104KA87                          | TAIYO YUDEN;MURATA        | 0.1UF                                                  | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                    |
| C8, C15                                              | 2     | GRM188R61E106MA73                                         | MURATA                    | 10UF                                                   | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 25V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R; GRM SERIES; MURATA                 |
| C19                                                  | 1     | GRM155R61A106ME44; GRM155R61A106ME11; 0402ZD106MAT2A      | MURATA;MURATA;AVX         | 10UF                                                   | CAPACITOR; SMT (0402); CERAMIC CHIP; 10UF; 10V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                     |
| DVDD                                                 | 1     | 5010                                                      | N/A                       | 5010 TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE | 5010 TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE                                                                       |
| GND, PVDD, FOUTN, FOUTP                              | 4     | 111-2223-001                                              | EMERSON NETWORK POWER     | 111-2223-001                                           | MACHINE SCREW; THUMBSCREW; BANANA; 1/4-32IN; 11/32IN; NICKEL PLATED BRASS                                                    |
| J1                                                   | 1     | TSW-113-08-G-T-RA                                         | SAMTEC                    | TSW-113-08-G-T-RA                                      | EVKIT PART; CONNECTOR; MALE; THROUGH HOLE; 0.025IN SQ POST HEADER; RIGHT ANGLE; 39PINS; MODIFY PIN NUMBERING ARRANGEMENT     |
| J2                                                   | 1     | PEC02DAAN                                                 | SULLINS ELECTRONIC CORP.  | PEC02DAAN                                              | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                                    |
| J3                                                   | 1     | PEC04DAAN                                                 | SULLINS ELECTRONICS CORP. | PEC04DAAN                                              | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 8PINS                                                                    |
| J3A, J3B                                             | 2     | PEC02SAAN                                                 | SULLINS                   | PEC02SAAN                                              | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                    |
| JU4                                                  | 1     | PEC03SAAN                                                 | SULLINS ELECTRONICS CORP. | PEC03SAAN                                              | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC;                                 |
| JU6                                                  | 1     | PBC05SAAN                                                 | SULLINS ELECTRONICS CORP. | PBC05SAAN                                              | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 5PINS; -65 DEGC TO +125 DEGC                                             |
| MTH1-MTH4                                            | 4     | 91772A108; PHILLIPS-PAN_4- 40X3/8IN; PMSSS4400038PH; 9901 | GENERIC PART              | N/A                                                    | MACHINE SCREW; PHILLIPS; PAN; 4-40; 3/8IN; 18-8 STAINLESS STEEL                                                              |
| MTH1-MTH4                                            | 4     | MCH_SO_F_HEX_4-40X1/2                                     | GENERIC PART              | N/A                                                    | STANDOFF; FEMALE-THREADED; HEX; 4-40; 1/2IN; ALUMINUM                                                                        |
| R1-R5, R8, R12, R13, R18                             | 9     | RC0402JR-070RL; CR0402-16W-000RJT                         | YAGEO PHYCOMP;VENKEL LTD. |                                                        | 0 RESISTOR; 0402; 0 OHM; 5%; JUMPER; 0.063W; THICK FILM                                                                      |
| R6, R11                                              | 2     | CRCW04024K70FK                                            | VISHAY DALE               | 4.7K                                                   | RESISTOR, 0402, 4.7K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                    |
| R7                                                   | 1     | RC0201FR-0730RL                                           | YAGEO                     |                                                        | 30 RESISTOR; 0201; 30 OHM; 1%; 200PPM; 0.05W; THICK FILM                                                                     |
| SCL, SDA                                             | 2     | 5004                                                      | KEYSTONE                  | N/A                                                    | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;          |
| SU1, SU2                                             | 2     | STC02SYAN                                                 | SULLINS ELECTRONICS CORP. | STC02SYAN                                              | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL      |
| TP1, TP2, TP4                                        | 3     | 5011                                                      | N/A                       |                                                        | 5011 TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| U1                                                   | 1     | MAX98374EFF+                                              | MAXIM                     | MAX98374EFF+                                           | EVKIT PART -IC; MAX98374; 22 FCQFN 3X3                                                                                       |
| X1-X6                                                | 6     | 9020 BUSS                                                 | WEICO WIRE                | MAXIMPAD                                               | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                     |
| PCB                                                  | 1     | MAX98374_FCQFN_DEV_APPS_A                                 | MAXIM                     | PCB                                                    | PCB:MAX98374_FCQFN_DEV_APPS_A                                                                                                |
| C1-C3, C9-C14, C17, C18                              | 0     | N/A                                                       | N/A                       | OPEN                                                   | CAPACITOR; 0402 PACKAGE; GENERIC                                                                                             |
| FB1, FB2                                             | 0     | N/A                                                       | N/A                       | N/A                                                    | INDUCTOR; 0402 PACKAGE; FERRITE-BEAD; GENERIC                                                                                |
| OUTN, OUTP                                           | 0     | 5116                                                      | KEYSTONE                  | N/A                                                    | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; GREEN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;           |
| R15-R17, R19, R20                                    | 0     | N/A                                                       | N/A                       | OPEN                                                   | RESISTOR; 0402 PACKAGE; GENERIC                                                                                              |
| R9, R21, R22, R25                                    | 0 0   | N/A N/A                                                   | N/A                       | OPEN                                                   | CAPACITOR; SMT (0402); OPEN; FORMFACTOR RESISTOR; 0402; OPEN; FORMFACTOR                                                     |
| C4                                                   |       |                                                           | N/A                       | OPEN                                                   |                                                                                                                              |

## MAX98374 FCQFN EV Kit Development Board Schematic

<!-- image -->

Evaluates: MAX98374

## MAX98374 WLP EV Kit Development Board Bill of Materials

| REF_DES ADDR, I.C.,                      |   QTY | MFG PART #                                                | MANUFACTURER              | VALUE              | DESCRIPTION                                                                                                              |
|------------------------------------------|-------|-----------------------------------------------------------|---------------------------|--------------------|--------------------------------------------------------------------------------------------------------------------------|
| ICC, IRQ, OUTNSNS, OUTPSNS, RESET, VREFC |     8 | 5002                                                      | KEYSTONE                  | N/A                | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                    |
| BCLK, DIN, DOUT, LRCLK                   |     4 | 5003                                                      | KEYSTONE                  | N/A                | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;      |
| C5                                       |     1 | GRM033R60J105MEA2;C0 603X5R0J105M030;CL03A 105MQ3CSN      | MURATA;TDK;SAMSUNG        | 1UF                | CAPACITOR; SMT (0201); CERAMIC CHIP; 1UF; 6.3V; TOL=20%; MODEL=GRM SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R               |
| C6                                       |     1 | EMZA350ADA221MHA0G                                        | UNITED CHEMI-CON          | 220UF              | CAPACITOR; SMT (CASE_HA0); ALUMINUM-ELECTROLYTIC; 220UF; 35V; TOL=20%; MODEL=MZA SERIES                                  |
| C7, C16                                  |     2 | TMK105BJ104KV; GRM155R61E104KA87                          | TAIYO YUDEN;MURATA        | 0.1UF              | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                |
| C8, C15                                  |     2 | GRM188R61E106MA73                                         | MURATA                    | 10UF               | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 25V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R; GRM SERIES; MURATA             |
| C19                                      |     1 | GRM155R61A106ME44; GRM155R61A106ME11; 0402ZD106MAT2A      | MURATA;MURATA;AVX         | 10UF               | CAPACITOR; SMT (0402); CERAMIC CHIP; 10UF; 10V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                 |
| DVDD                                     |     1 | 5010                                                      | N/A                       | 5010               | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE                                                                        |
| FOUTN, FOUTP, GND, PVDD                  |     4 | 111-2223-001                                              | EMERSON NETWORK POWER     | 111-2223-001       | MACHINE SCREW; THUMBSCREW; BANANA; 1/4-32IN; 11/32IN; NICKEL PLATED BRASS                                                |
| J1                                       |     1 | TSW-113-08-G-T-RA                                         | SAMTEC                    | TSW-113-08-G-T- RA | EVKIT PART; CONNECTOR; MALE; THROUGH HOLE; 0.025IN SQ POST HEADER; RIGHT ANGLE; 39PINS; MODIFY PIN NUMBERING ARRANGEMENT |
| J2                                       |     1 | PEC02DAAN                                                 | SULLINS ELECTRONIC CORP.  | PEC02DAAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                                |
| J3                                       |     1 | PEC04DAAN                                                 | SULLINS ELECTRONICS CORP. | PEC04DAAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 8PINS                                                                |
| J3A, J3B                                 |     2 | PEC02SAAN                                                 | SULLINS                   | PEC02SAAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                |
| JU4                                      |     1 | PEC03SAAN                                                 | SULLINS ELECTRONICS CORP. | PEC03SAAN          | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC;                             |
| JU6                                      |     1 | PBC05SAAN                                                 | SULLINS ELECTRONICS CORP. | PBC05SAAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 5PINS; - 65 DEGC TO +125 DEGC                                        |
| MTH1-MTH4                                |     4 | 91772A108; PHILLIPS- PAN_4-40X3/8IN; PMSSS4400038PH; 9901 | GENERIC PART              | N/A                | MACHINE SCREW; PHILLIPS; PAN; 4-40; 3/8IN; 18-8 STAINLESS STEEL                                                          |
| MTH1-MTH4                                |     4 | MCH_SO_F_HEX_4-40X1/2                                     | GENERIC PART              | N/A                | STANDOFF; FEMALE-THREADED; HEX; 4-40; 1/2IN; ALUMINUM                                                                    |
| R1-R5, R8, R12, R13, R18                 |     9 | RC0402JR-070RL; CR0402- 16W-000RJT                        | YAGEO PHYCOMP;VENKEL LTD. | 0                  | RESISTOR; 0402; 0 OHM; 5%; JUMPER; 0.063W; THICK FILM                                                                    |
| R6, R11                                  |     2 | CRCW04024K70FK                                            | VISHAY DALE               | 4.7K               | RESISTOR, 0402, 4.7K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                |
| R7                                       |     1 | RC0201FR-0730RL                                           | YAGEO                     | 30                 | RESISTOR; 0201; 30 OHM; 1%; 200PPM; 0.05W; THICK FILM                                                                    |
| SCL, SDA                                 |     2 | 5004                                                      | KEYSTONE                  | N/A                | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;      |
| SU1, SU2                                 |     2 | STC02SYAN                                                 | SULLINS ELECTRONICS CORP. | STC02SYAN          | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL  |
| TP1, TP2, TP4                            |     3 | 5011                                                      | N/A                       | 5011               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |
| U1                                       |     1 | MAX98374EWA+                                              | MAXIM                     | MAX98374           | EVKIT PART - IC; MAX98374; 25 WLP; PACKAGE CODE: W252C2+2; PACKAGE OUTLINE: 21-100162                                    |
| X1-X6                                    |     6 | 9020 BUSS                                                 | WEICO WIRE                | MAXIMPAD           | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                 |
| PCB                                      |     1 | MAX98374_WLP_DEV_AP PS_A                                  | MAXIM                     | PCB                | PCB:MAX98374_WLP_DEV_APPS_A                                                                                              |
| C1-C3, C9-C14, C17, C18                  |     0 | N/A                                                       | N/A                       | OPEN               | CAPACITOR; 0402 PACKAGE; GENERIC                                                                                         |
| FB1, FB2                                 |     0 | N/A                                                       | N/A                       | N/A                | INDUCTOR; 0402 PACKAGE; FERRITE-BEAD; GENERIC                                                                            |
| OUTN, OUTP                               |     0 | 5116                                                      | KEYSTONE                  | N/A                | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; GREEN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;       |
| R15-R17, R19, R20, R9, R21, R22, R25     |     0 | N/A                                                       | N/A                       | OPEN               | RESISTOR; 0402 PACKAGE; GENERIC                                                                                          |
| C4                                       |     0 | N/A                                                       | N/A                       | OPEN               | CAPACITOR; SMT (0402); OPEN; FORMFACTOR                                                                                  |

## MAX98374 WLP EV Kit Development Board Schematic

<!-- image -->

Evaluates: MAX98374

## MAX98374 FCQFN EV Kit Development Board PCB Layout Diagrams

<!-- image -->

MAX98374 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX98374 EV Kit PCB Layout-GND L2

MAX98374 EV Kit PCB Layout-Top

<!-- image -->

MAX98374 EV Kit PCB Layout-Signal GND L3

<!-- image -->

## MAX98374 FCQFN EV Kit Development Board PCB Layout Diagrams (continued)

<!-- image -->

MAX98374 EV Kit PCB Layout-Power L4

<!-- image -->

MAX98374 EV Kit PCB Layout-Bottom

MAX98374 EV Kit PCB Layout-GND L5

<!-- image -->

MAX98374 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

## MAX98374 WLP EV Kit Development Board PCB Layout Diagrams

<!-- image -->

MAX98374 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX98374 EV Kit PCB Layout-GND L2

MAX98374 EV Kit PCB Layout-Top

<!-- image -->

MAX98374 EV Kit PCB Layout-Signal GND L3

<!-- image -->

## MAX98374 Evaluation System

## MAX98374 WLP EV Kit Development Board PCB Layout Diagrams (continued)

<!-- image -->

MAX98374 EV Kit PCB Layout-Power L4

<!-- image -->

MAX98374 EV Kit PCB Layout-Bottom

MAX98374 EV Kit PCB Layout-GND L5

<!-- image -->

MAX98374 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

## MAX98374 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/18            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at w.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX98374