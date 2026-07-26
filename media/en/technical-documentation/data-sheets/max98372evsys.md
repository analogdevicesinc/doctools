<!-- lastmod 2022-08-03 -->
## MAX98372 Evaluation System

## General Description

The MAX98372 Evaluation System (EV system) evaluates the MAX98372 digital input Class D speaker amplifier with dynamic  headroom  tracking  and  automatic  level  control. The  EV  system  comprises  the  MAX98372  development (DEV) board, Maxim's audio interface 1 (AUDINT1) board, and the MAX98372 evaluation software.

The MAX98372 DEV board is a fully assembled and tested PCB that contains the necessary circuitry and connections to evaluate the MAX98372 device. It is recommended that the DEV board be evaluated with the AUDINT1 board as an EV system. The MAX98372 requires two supply inputs, 1.14V to 1.98V (DVDD) and 5.5V to 18V (PVDD), and can deliver 19W into an 8Ω load. Additionally, the MAX98372 supports standard I 2 S, left-justified, and TDM digital audio interfaces.

When evaluated as an EV system, the AUDINT1 board provides  the  necessary  logic  rails  and  USB-to-I 2 S  and USB-to-I 2 C interfaces needed to evaluate the MAX98372 DEV board with only a single external power supply. The Simplified EV System Block Diagram provides an image of  the  EV  system,  highlighting  the  key  areas  on  each board.

Communication  with  the  DEV  board  is  facilitated  by Windows®  7-  and  Windows  8-compatible  software  that provides  a  simple  and  intuitive  graphical  user  interface (GUI). The MAX98372 evaluation software is only for use with the MAX98372 EV System.

## Simplified EV System Block Diagram

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

Evaluates: MAX98372

## Benefits and Features

- 5.5V to 18V Single-Supply Operation (EV System)
- USB Audio Streaming (EV System)
- I 2 S, Left-Justified, or TDM Input
- Optional Output Filters
- Proven PCB Layout
- Fully Assembled and Tested
- Windows 7- and Windows 8-Compatible Software

## EV System Contents

- MAX98372 Development Board
- Audio Interface 1 (AUDINT1) Board
- Two A-to-Mini-B USB Cables

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX98372 Evaluation System

## Quick Start

## Required Equipment

- MAX98372EVSYS#
- MAX98372DEV#
- MAXAUDINT001#
- 4Ω or 8Ω speaker
- 5.5V to 18V, 2A DC power supply
- USB audio source (e.g., Windows Media® Player or iTunes®)
- Two A-to-Mini-B USB cables (provided with EV system)
- User-supplied PC with Windows 7 or Windows 8 OS with two available USB ports

## Required Software

- MAX98372 evaluation software

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  evaluation  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Reference Material

- Audio Interface 1 (AUDINT1) data sheet
- MAX98372 IC data sheet

## Procedure

The MAX98372 and AUDINT1 boards are fully assembled and tested. Follow these steps to set up the EV system for device evaluation.

## Table 1. MAX98372 Software Install Folder

| FILE                      | DESCRIPTION                                    |
|---------------------------|------------------------------------------------|
| MAX98372EVSwSetupVx.x.exe | Installer for the MAX98372 evaluation software |
| usb_driver                | USB driver folder                              |
| CDM21000.exe              | USB driver installer                           |
| Device Manager            | Shortcut to the computer's device manager      |
| USB_Driver_Help.pdf       | USB driver installation help file              |

Windows Media is a registered trademark and registered service mark of Microsoft Corporation.

iTunes is a registered trademark of Apple, Inc.

## Software Install:

- 1) Contact Maxim to download the latest version of the MAX98372 evaluation software, MAX98372EVSwSetupVx.x.zip . Uncompress the downloaded folder to a temporary location.
- 2) Install the software and USB driver on your computer by  running  the MAX98372EVSwSetupVx.x.exe program. Program files are copied and icons are created in the Windows Start | Programs | Maxim Integrated |  MAX98372  |  Evaluation  Software menu.  During software installation, Windows may display a message indicating that this software is from an unknown publisher. This is not an error condition, and it is safe to proceed with the installation.
- 3) The USB driver is installed automatically at the same time  as  the  evaluation  software.  If  the  driver  needs to  be  manually installed, navigate to the installation directory, Program Files (x86) | Maxim Integrated | MAX98372 | Evaluation Software | USB Driver , and run the CDMxxxxx.exe application.

## DEV Board Setup:

- 4) Connect  the  power  supply  between  the  PVDD  and GND binding posts.
- 5) Set the power supply channel connected to PVDD to 18V, but leave the power supply turned off. Connect the 4Ω or 8Ω speaker across the OUTP and OUTN binding posts.

## AUDINT1 Board Setup:

- 6) Set the DVDD jumper on the AUDINT1 board to the 1.8V position.
- 7) Set the VIO jumper on the AUDINT1 board to the 1.8V position.
- 8) Configure the jumper switches (I2S and I2C) with their actuators in the CONNECT (pins1-2) position.
- 9) Configure  the  SW1  switch  with  its  actuator  in  the EVAL position.

## Test:

- 10) With  the  audio  source  disabled,  connect  the  DEV board (J1 header) to the AUDINT1 board (J1 header).
- 11) Connect the USB cables to the USB1 and USB2 ports on the AUDINT1 board.
- 12) Enable the power supply connected to PVDD.
- 13) Start  the  MAX98372  evaluation  software  and  wait while the software connects to the EV system.

Evaluates: MAX98372

## MAX98372 Evaluation System

- 14) Once the connection is established, the status bar at the bottom of the GUI window reports that the USB and MAX98372 are connected.
- 15) After the EV system is fully connected, configure the device  by  loading  the usb\_audio.98372 configuration file. This file is located in the Config\_Files folder in the Documents | Maxim Integrated | MAX98372 Software Files directory.
- 16) Open the Windows Sound dialog and select the Play -back tab. A USB Audio DAC item, similar to Figure 1, should be listed as an available playback device.
- 17) Verify  that  the USB Audio  DAC item  is  set  as  the default device.
- 18) Adjust the audio source volume to a low level.
- 19) Enable the audio source and verify that audio is heard through  the  connected  speaker.  Adjust  the  audio source volume as needed.
- 20) Quick start is complete.

Figure 1. Playback Device

<!-- image -->

Figure 2. MAX98372 Evaluation Software-Main Window

<!-- image -->

## MAX98372 Evaluation System

## Detailed Description of Software

The MAX98372 evaluation software is designed for the MAX98372  EV  System  only.  The  software  provides  an intuitive  graphical  user  interface  (GUI)  for  programming the MAX98372 device and includes a handful of features to aid evaluation.

The MAX98372 evaluation software main window (Figure 2) is composed of four main sections: menu bar, communication tool bar, tabbed pages, and a status bar. The menu bar  provides  additional  features  to  aid  evaluation,  the toolbar  provides  basic  functionality  for  communicating with the device, and the status bar provides information about hardware connectivity and communication status. The tabbed pages make up the bulk of the GUI and provide the controls for programming the MAX98372 device registers.

Evaluates: MAX98372

The Block  Diagram tab  provides  access  to  all  device registers  through  dialog  windows  that  contain  GUI  controls  for  configuring  the  device. The dialog windows are opened  by  clicking  on  the  dialog  blocks  in  the  blockdiagram. The Control Registers tab provides access to the valid registers in the range from 0x01-0x51 as well as to the revision ID register 0xFF.

The  MAX98372  evaluation  software  is  compatible  with Windows  7  and  Windows  8.  Contact  Maxim  to  get the  latest  MAX98372  evaluation  software.  Refer  to  the MAX98372 IC data sheet for device register information.

## Communication Tool Bar

The  tool  bar  consists  of  six  buttons  and  a  drop-down combo box. These controls are always accessible, regardless of the active tabbed page. The toolbar is shown in Figure 3 and Table 2 provides details about each control.

Figure 3. Communication Tool Bar

<!-- image -->

## Table 2. Tool Bar Controls

| CONTROL              | FUNCTION                                                                                                                                                                                                                                                                                                                                    |
|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Device Enable ON/OFF | Press ON to set the global enable bit (EN) located in register 0x50. The device is enabled when the image is highlighted and disabled when it is not. Press OFF to reset the global enable bit (EN) and disable the device. Note: The software is able to communicate with a disabled device as long as its I 2 C interface remains active. |
| Active Device        | Provides a list of detected I 2 C addresses. The displayed address is the active device.                                                                                                                                                                                                                                                    |
| Connect To:          | See the Connect Sequence section for additional details.                                                                                                                                                                                                                                                                                    |
| USB                  | Press to connect to the USB Control (USB1) interface on the AUDINT1 board.                                                                                                                                                                                                                                                                  |
| Device               | Press to search for I 2 C devices. Detected addresses are shown in the Active Device drop-down list.                                                                                                                                                                                                                                        |
| Disconnect           | Press to disconnect from the USB Control (USB1) interface.                                                                                                                                                                                                                                                                                  |
| Read All             | Press to initiate a read of all device registers and update the Control Registers and Block Diagram tabs with the read data.                                                                                                                                                                                                                |
| Write All            | Press to initiate a write to all device registers, using the settings shown on the Control Registers tab.                                                                                                                                                                                                                                   |
| Reset                | Press to reset registers 0x10-0x66 to their power-on-reset (POR) state.                                                                                                                                                                                                                                                                     |

## Connect Sequence

When the evaluation software starts for the first time, the program attempts to connect automatically to the EV system. It first attempts to connect to the USB control (USB1) interface on the AUDINT1 board. Once that connection is established, it searches for all the I 2 C addresses associated with the MAX98372 device and populates all detected device  addresses  in  the Active  Device drop-down  list. During this sequence, the text on the Connect To button automatically  changes  from USB to Device to Disconnect , and the status bar updates to reflect the current state of the hardware connection.

Once the EV system is fully  connected,  the  button  displays Disconnect and, when pushed, it disconnects the software  from  the  hardware.  The  software  can  also  be disconnected from the hardware by selecting Options | Disconnect from the menu bar.

There  are  two  methods  to  reestablish  a  connection  with the  hardware.  The  first  is  by  selecting Options  |  Auto Connect from the menu bar. This instructs the program to connect automatically to the EV system, just as was done when the software first started. The second method is to click the Connect To button until it displays Disconnect , which signifies that the EV system is fully connected.

## Status Bar

The Status bar  is  divided  into  four  sections.  From  left to  right  the  sections  report  alerts/prompts,  device  part number  and  revision  ID,  MAXQ2000  firmware  version, and state/flag interrupt count. The interrupt count feature is  enabled  by  selecting Device  |  Interrupt  Tracking  | Enabled from the menu bar. Once enabled, the interrupt count is displayed in the status bar when the mouse cursor is over a visible STATE or FLAG image.

## Status Panel

The Status panel  (not  to  be  confused  with  the Status bar) displays the STATUS , STATE ,  and FLAG values of the  device's  interrupts.  This  data  is  read  from  the  Live Status\_, State\_, and Flag\_ interrupt registers (0x01-0x06, 0x0B-0x0D).

An image is displayed in each of the STATUS , FLAG , and STATE columns to indicate the state of the interrupt bits in the associated interrupt registers. A highlighted image indicates that the associated bit has been set and a clear image indicates  that  the  associated  bit  is  not  set.  Click on the visible STATE or FLAG image to clear the state and  flag  bits.  These  bits  can  also  be  cleared  from  the Interrupt Enables dialog. Click on the INTERRUPT block to launch the Interrupt Enables dialog.

Note: Each interrupt source must be enabled in order for the FLAG column (i.e., lag bits) to be set. The interrupt enable bits are set from the Interrupt Enables dialog.

## Block Diagram Tab

The evaluation software uses an interactive block diagram to  facilitate  the  programming  of  the  MAX98372  device. The block diagram also provides a visual representation of the device's functions and current configuration.

There  are  three  types  of  blocks  in  the  block  diagram and they are identified by the cursor image. The cursor changes to a hand when over a block that opens a dialog window and changes to a solid  black  arrow  when  over a block that toggles a specific device setting. If the cursor does not change when over a block, then it is not an active block and is only provided for illustrative purposes.

The  color  of  a  diagram  block  changes  depending  on the enabled state of the device function(s) it controls. A disabled block is gray and an enabled block is teal. Figure 4 shows the block diagram with the MAX98372 configured for DAI input and speaker output.

Figure 4. MAX98372 Block Diagram-USB Audio Input to Speaker Output

<!-- image -->

Figure 5. Typical GUI Controls

<!-- image -->

## MAX98372 Evaluation System

## Dialog Windows

Dialog windows are associated with specific blocks in the block diagram and they contain multiple controls for configuring the registers associated with that functional block. A dialog window is opened by clicking on a dialog block. Figure 5 shows the typical GUI controls that are found on a dialog window.

## Control Registers Tab

The Control  Registers tab  provides  two  methods  for configuring the device. For example, Figure 6 shows the elements of the DAI registers.

The  first  configuration  method  involves  clicking  on  the register's bit  labels. A  grayed-out bit label indicates that the bit is currently set low. A bold bit label indicates that the bit is currently set high. Clicking on a bit toggles its state  and  results  in  a  write  to  that  register.  This  action also updates the value displayed in the register's edit box Evaluates: MAX98372

located to the right of the bit labels. Note: Read-only bits cannot be clicked/toggled and only display the bit's current state. These read-only bits are updated by performing a read-all operation.

The  second  configuration  method  involves  entering  a hexadecimal  value  in  the  register's  edit  box  and  then pressing the Enter key. The software automatically configures the device register once the Enter key is pressed. The state of the bit labels reflect the value shown in the edit box.

All changes made on this tab are reflected on the Block Diagram tab and on any open dialog windows.

## Menu Bar

All the menu bar items are described in Table 3. Additional information for some menu items is provided in the following sections.

Figure 6. Control Registers Tab

<!-- image -->

## Table 3. Menu Bar Items

| MENU ITEM              | DESCRIPTION                                                                                                               |
|------------------------|---------------------------------------------------------------------------------------------------------------------------|
| File                   |                                                                                                                           |
| Load Settings          | Loads a configuration file (as saved by the Save Settings option).                                                        |
| Save Settings Ctrl + S | Saves a configuration file containing the current device settings.                                                        |
| Exit                   | Closes the MAX98372 software.                                                                                             |
| Device                 |                                                                                                                           |
| Read Rev ID            | Reads the revision ID register (0xFF) and updates the Status Bar.                                                         |
| Address Selection      | Allows user to select the active device address.                                                                          |
| Reset                  | Resets most registers to their POR state by setting the software reset bit (RST) in register 0x51.                        |
| Read All               | Performs a read from all registers and updates the GUI.                                                                   |
| Write All              | Performs a write to all writable registers, using the values shown on the Control Registers tab and then updates the GUI. |
| Interrupt Tracking     |                                                                                                                           |
| Clear All              | Clears the counters that are used to keep track of interrupt occurrences.                                                 |
| Enabled                | Enables interrupt tracking (for troubleshooting purposes).                                                                |

Table 3. Menu Bar Items (continued)

| MENU ITEM                     | DESCRIPTION                                                                                                    |
|-------------------------------|----------------------------------------------------------------------------------------------------------------|
| Options                       |                                                                                                                |
| Autoconnect                   | Select to have the software automatically connect to the evaluation system.                                    |
| Disconnect                    | Press to disconnect the software from the USB1 hardware interface.                                             |
| Autoread Status/State/Flag    | Select to have the software automatically read the interrupt registers and update the Status panel.            |
| Dock/Undock Status Panel      | Docks or undocks the Status panel from the Block Diagram tab.                                                  |
| I2C Clock Speed               | Sets I2C clock speed to either 100kHz or 400kHz.                                                               |
| Interface (Advanced Users) F2 | Opens the Advanced User Interface window that provides an additional method for communicating with the device. |
| Help                          |                                                                                                                |
| View Help F1                  | Provides details on where to find help.                                                                        |
| About                         | Provides information about the MAX98372 evaluation software.                                                   |

## File I/O

The software's save and load features are accessed from the File menu. The Save feature saves the data currently displayed on the Control Registers tab.

A configuration file's main purpose is to capture the current state of the MAX98372's registers, as displayed on the register tab. This feature makes it easy to program a device to a saved/known state and allows for the sharing of  configuration files between users. To facilitate usage, use descriptive file names when saving configuration file.

The save and load features are functional even when the hardware is not connected. This allows configuration files to be created and opened when hardware is not available. Since the configuration file is automatically generated by the software, it is not meant to be manually formatted and doing so may cause file loading issues. To open a configuration file for viewing purposes, use a plain text editor.

Select File | Save Settings Ctrl + S to create a configuration file. The register address and its data are saved as tab delimited values and the file is saved with a .98372 extension.

## Advanced User Interface

The Advanced User Interface window provides a more advanced  method  of  communicating  with  the  hardware by  providing  access  to  the  read  and  write  commands used by the software. However, the primary method for configuring the device should be through the main software window (Figure 2). See Table 4 for information on the relevant commands for the Advanced User Interface.

The two tabs that provide the needed functionality to communicate over the I 2 C bus are the Connection and 2-wire interface tabs.  The Connection tab  is  used  to  connect to/disconnect from the Audio Interface 1 board and also provides some information about the USB connection.

The 2-wire interface tab provides the controls for detecting and communicating with devices on the I 2 C bus. The Hunt for active listeners button searches the entire 8-bit I 2 C  address  range  to  determine  if  there  are  any  accessible devices on the bus. If a device(s) is detected then the General commands tab  can  be  used  to  read  from and write to the device(s). Table 4 lists some useful commands and details on how to use those commands.

Evaluates: MAX98372

## MAX98372 Evaluation System

Table 4. Advanced User Interface Controls

| COMMAND SELECTION                    | DETAILS (EXAMPLE)*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|--------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Q: SMBusQuick (addr)                 | Target Device Address: Select device address (0x62). Press Execute . Verifies that the target device is present on the I 2 C bus.                                                                                                                                                                                                                                                                                                                                                                         |
| 4: SMBusReadByte (addr, cmd)         | Target Device Address: Select device address (0x62). Command Byte: Enter the register address (0x38). Press Execute . Data read from the target device's register is displayed in the Data In field (0x80).                                                                                                                                                                                                                                                                                               |
| 1: SMBusWriteByte (addr, cmd, data8) | Target Device Address: Select device address (0x62). Command Byte: Enter the register address (0x38). Data Out: Enter the data byte (0x80). Press Execute . The data byte is written to the target device's register.                                                                                                                                                                                                                                                                                     |
| 9: I2CWriteAndReadBytes (addr)       | Read: Target Device Address: Select device address (0x62). Data Out: Enter the register address (0x38). Read Count: Set the amount of sequential register reads to perform (3). Press Execute . The data byte(s) read from the device is displayed in the Data In field (0x80 0x00 0x00).                                                                                                                                                                                                                 |
| 9: I2CWriteAndReadBytes (addr)       | Write: Target Device Address: Select device address (0x62). Data Out: Enter the register address, followed by a space or comma (0x38). Data Out: Append the data byte(s), inserting a space or comma between bytes (0x80, 0xC0). Read Count: Enter zero (0). Press Execute . The data byte(s) are written, sequentially, starting at the specified register address.                                                                                                                                      |
| 9: I2CWriteAndReadBytes (addr)       | Read + Write: Target Device Address: Select device address. Data Out: Enter the register address, followed by a space or comma. Data Out: Append the data byte(s), inserting a space or comma between bytes (0x80 0x00). Read Count: Set the amount of sequential reads to perform (2). Press Execute . The data byte(s) are written, sequentially, starting at the specified register address. Then, the specified number of bytes are read from the device, starting at the specified register address. |

Evaluates: MAX98372

## Detailed Description of Hardware

The  MAX98372  DEV  board  evaluates  the  MAX98372 audio  amplifier  and  provides  access  to  all  inputs  and outputs of the device. In addition, the EV system includes support circuitry that eases evaluation of the device.

The  MAX98372  DEV  board  can  be  evaluated  as  a stand-alone  board  that  is  driven  directly  by  audio  test equipment,  powered  by  multiple  external  supplies,  and configured  by  an  external  I 2 C-capable  controller.  It  is recommended to evaluate the DEV board with AUDINT1 board. This  hardware  combination  provides  an  easy-touse method for exercising the capabilities of the device, with the need for only one external supply and no additional audio equipment.

The AUDINT1 board provides on-board LDO regulators, a  master  clock  output,  and  a  USB-to-I 2 S  and  USB-toI 2 C  interface.  The  AUDINT1  LDO  regulators  power  the MAX98372's DVDD supply rail. The USB-to-I 2 S converter accepts a USB audio stream from a USB connected computer and converts that into I 2 S format, allowing for DAI playback through the MAX98372 device. The USB-to-I 2 C interface is the bridge that allows the evaluation software to configure, monitor, and control the I 2 C-capable devices on the MAX98372 DEV and AUDINT1 boards.

The  evaluation  software  provides  graphical  controls  to provide a more intuitive method for configuring the target device (MAX98372) for evaluation. The software is compatible with both Windows 7 and Windows 8.

## Power Supplies

The MAX98372 DEV board requires at least two external  power  supplies  when  evaluated  as  a  stand-alone board. The power supplies and their ranges are listed in Table 5. The DVDD supply voltage can be connected at header J3A or the DVDD test point. Note that header J3A provides both a ground and DVDD connection and care should be taken when connecting a supply to this header.

When used with the AUDINT1 board, only one external power supply is needed. The external power supply provides the PVDD input voltage and the LDO regulators on the AUDINT1 board provide the DVDD input voltage.

## Digital Audio Interface

The MAX98372 digital audio interface (DAI) is routed to interface headers J3, as well as the AUDINT1 connector, J1.  The  interface  headers  provide  easy  access  to  the device's I 2 S bus and the AUDINT1 connector allows for USB audio to be streamed onto the DEV board. See the USB Audio Input section for details on USB audio streaming and Table 9 for connector J1 pinout.

## DAI Headers

The  DAI  headers  provide  access  to  the  MAX98372's  digital  audio interface:  BCLK,  LRCLK,  DIN,  and  DOUT .  These  two  DAI  headers facilitate evaluation with audio equipment I/O. See Table 6 for the DAI header (J3) pinout and Figure 7 for an illustration of how the MAX98372 DAI interface is routed through the DAI headers to the AUDINT1 connector.

## Table 5. Power Supplies

| POWER SUPPLY   | RANGE (V)    |
|----------------|--------------|
| V PVDD         | 5.5 to 18    |
| V DVDD         | 1.14 to 1.98 |

## Table 6. DAI Headers Pinout (J3)

| SIGNAL   |   PIN |   PIN | SIGNAL   |
|----------|-------|-------|----------|
| GND      |     1 |     2 | BCLK     |
| GND      |     3 |     4 | LRCLK    |
| GND      |     5 |     6 | DIN      |
| GND      |     7 |     8 | DOUT     |

## MAX98372 Evaluation System

Figure 7. DAI Interface Headers

<!-- image -->

## Interface Headers

The interface headers available on the MAX98372 DEV board are used to facilitate evaluation of the device. Each of the headers and their pinouts are listed in the following tables.  In  addition,  Figure  7  shows  how  the  MAX98372 DAI interface is routed through the DAI header (J3) to the AUDINT1 board header (J1).

The  AUDINT1  header  connects  the  DEV  board  to  the AUIDNT1 board. These two boards together make up the MAX98372 EV System.

## USB Audio Input

The AUDINT1 board's USB-to-I 2 S interface allows USB audio  to  be  streamed  onto  the  MAX98372  DEV  board. This  facilitates  evaluation  by  providing  a  quick  method for  playing audio through the device. To utilize the USB streaming feature of the AUDINT1 board, make the following hardware configurations:

- Connect the USB audio source to the USB AUDIO (USB2) port on the AUDINT1 board
- Configure the I 2 S switch on the AUDINT board to the CONNECT position
- Configure the  VIO  and  DVDD  headers  on  the AUDINT1 board for device compatible logic levels.
- Ensure the AUDINT1 board is connected to the DEV board

Once the hardware is ready, use the MAX98372 evaluation software or the AUDINT1's Automatic Configuration button to configure and enable the device for DAI audio playback.

## Speaker Output

The MAX98372 audio output is routed to the OUTP and OUTN connections on the DEV board. The DEV board is, by default,  assembled to allow the MAX98372 output to connect directly to a speaker load without the need for filtering. However, component footprints are provided on the PCB to allow for filtering of the Class D amplifier output.

## MAX98372 Evaluation System

## EMI Filter

When long speaker cables are used with the MAX98372 output, a ferrite bead plus capacitor filter can be installed to prevent excessive EMI radiation. Although it is best to choose filter components based on EMI test results, the combination  of    680pF  capacitors  (C8,  C9)  and  Murata BLM18SG331TN1  ferrite  beads  (FB1,  FB2)  generally work well. To remove the filter from the design, all filtering components need to be uninstalled and 0Ω resistors or wire shorts need to be installed at FB1 and FB2.

## I 2 C Interface

The  MAX98372's  I 2 C  interface  is  routed  to  header  J2 and connector J1. The J1 connector is for the AUDINT1 board  and  connects  the  device's  I 2 C  interface  to  the MAXQ2000's I 2 C interface on the AUDINT1 board. This connection allows the MAX98372 evaluation software to read and write to the device. See Table 9.

Header  J2  allows  for  an  external  I 2 C  controller  to  connect  to  the  device's  I 2 C  bus.  See  Table  7.  When  using an  external  I 2 C  controller,  and  still  connecting  to  the AUDINT1  board,  ensure  that  the  I 2 C  switch  (on  the AUDINT1 board) is in the DISCONNECT position.

## Device Address

The MAX98372 can be configured to respond to one of 16 I 2 C device addresses by tying the device's ADDR0 and ADDR1 pins to GND, SDA, SCL, or DVDD. The EV system comes with R11 and R10 populated. As a result, the MAX98372 responds to address 0x62. Follow Table 8 and install a 0Ω resistor in the appropriate location (R7-R14) to select desired I 2 C write address. Note: Install only the appropriate resistors given in each row in Table 8 at a time.

## Audio Interface 1 Board

Maxim's audio interface 1 board (AUDINT1 board) facilitates the evaluation of the DEV board by providing a set of features that can be used to exercise the capabilities of  the  DEV  board  without  the  need  for  additional  audio equipment. The main components of the AUDINT1 board are its LDO supply voltages and its USB-to-I 2 C and USBto-I 2 S  interfaces.  The  supply  voltages  allow  the  DEV board  to  be  evaluated  with  minimal  amount  of  external supplies. The USB-to-I 2 S converter allows any computer to be used as an audio source for the DEV board's digital audio I 2 S  interface  and  the  USB-to-I 2 C  interface  allows for the use of the MAX98372 evaluation software, making device configuration and monitoring a lot simpler.

The  MAX98372  DEV  board  connects  to  the  AUDINT1 board  through  connector  J1.  The  physical  connections made between the DEV board and AUDINT1 board are listed in Table 9.

## Table 7. I 2 C Header Pinout (J2)

| SIGNAL   |   PIN |   PIN | SIGNAL   |
|----------|-------|-------|----------|
| GND      |     1 |     2 | SDA      |
| GND      |     3 |     4 | SCL      |

## Table 8. I 2 C Address Resistors

| ADDR1   | ADDR0   | I2C WRITE ADDRESS SELECT   |
|---------|---------|----------------------------|
| R11     | R10     | 0x62*                      |
| R14     | R10     | 0x64                       |
| R12     | R10     | 0x66                       |
| R13     | R10     | 0x68                       |
| R11     | R8      | 0x6A                       |
| R14     | R8      | 0x6C                       |
| R12     | R8      | 0x6E                       |
| R13     | R8      | 0x70                       |
| R11     | R7      | 0x72                       |
| R14     | R7      | 0x74                       |
| R12     | R7      | 0x76                       |
| R13     | R7      | 0x78                       |
| R11     | R9      | 0x7A                       |
| R14     | R9      | 0x7C                       |
| R12     | R9      | 0x7E                       |
| R13     | R9      | 0x80                       |

* Default address.

## Table 9. AUDINT1 Header Pinout (J1)

| SIGNAL   |   PIN |   PIN | SIGNAL   |
|----------|-------|-------|----------|
| -        |     1 |     2 | GND      |
| BCLK     |     3 |     4 | -        |
| LRCLK    |     5 |     6 | -        |
| DIN      |     7 |     8 | -        |
| DOUT     |     9 |    10 | -        |
| -        |    11 |    12 | -        |
| DVDD*    |    13 |    14 | GND      |
| -        |    15 |    16 | GND      |
| SDA      |    17 |    18 | -        |
| SCL      |    19 |    20 | -        |
| IRQ\     |    21 |    22 | RESET\   |
| -        |    23 |    24 | -        |
| -        |    25 |    26 | -        |

* Configured on the AUDINT1 board: DVDD (1.2V, 1.8V, 3.3V).

## Development Board Component List, Schematic, PCB

See  the  following  links  for  component,  schematic,  and PCB information:

- MAX98372DEV# BOM
- MAX98372DEV# Schematics
- MAX98372DEV# PCB

Evaluates: MAX98372

## Ordering Information

| PART           | TYPE              |
|----------------|-------------------|
| MAX98372EVSYS# | Evaluation System |

# Denotes RoHS compliant.

## MAX98372 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/15           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX98372

| ITEM                     | REF_DES        | DNI/DNP QTY MFG PART #                | MANUFACTURER              | VALUE             | DESCRIPTION                                                                                                                  |
|--------------------------|----------------|---------------------------------------|---------------------------|-------------------|------------------------------------------------------------------------------------------------------------------------------|
| 1 IRQ, ADDR0,            | ADDR1, RESET - | 4                                     | 5002 KEYSTONE             | N/A               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                        |
| 2 DIN, BCLK, DOUT, LRCLK | -              | 4                                     | 5003 KEYSTONE             | N/A               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;          |
| 3 C4, C5                 | -              | 2 GRM033R60J105MEA2;C0603X5R0J105M030 | MURATA/TDK                | 1UF               | CAPACITOR; SMT (0201); CERAMIC CHIP; 1UF; 6.3V; TOL=20%; MODEL=GRM SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R                   |
| 4 C6                     | -              | 1 EMZA350ADA221MHA0G                  | UNITED CHEMI-CON          | 220UF             | CAPACITOR; SMT (CASE_HA0); ALUMINUM-ELECTROLYTIC; 220UF; 35V; TOL=20%; MODEL=MZA SERIES                                      |
| 5 C7, C16                | -              | 2 TMK105BJ104KV-F; GRM155R61E104KA87  | TAIYO YUDEN/MURATA        | 0.1UF             | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                    |
| 6 C8, C15                | -              | 2 GRM188R61E106MA73                   | MURATA                    | 10UF              | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 25V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R; GRM SERIES; MURATA                 |
| 7 DVDD                   | -              | 1                                     | 5010 ?                    |                   | 5010 TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE                                                                       |
| 8 FB1, FB2               | -              | 2 RC0805JR-070RL                      | YAGEO PHYCOMP             |                   | 0 RESISTOR; 0805; 0 OHM; 5%; JUMPER; 0.125W; THICK FILM                                                                      |
| 9 GND, OUTN, OUTP, PVDD  | -              | 4 111-2223-001                        | EMERSON NETWORK POWER     | 111-2223-001      | MACHINE SCREW; THUMBSCREW; BANANA; 1/4-32IN; 11/32IN; NICKEL PLATED BRASS                                                    |
| 10 J1                    | -              | 1 TSW-113-08-S-D-RA                   | SAMTEC                    | TSW-113-08-S-D-RA | CONNECTOR; THROUGH HOLE; DOUBLE ROW; RIGHT ANGLE; 26PINS                                                                     |
| 11 J2                    | -              | 1 PEC02DAAN                           | SULLINS ELECTRONIC CORP.  | PEC02DAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                                    |
| 12 J3                    | -              | 1 PEC04DAAN                           | SULLINS ELECTRONICS CORP. | PEC04DAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 8PINS                                                                    |
| 13 J3A                   | -              | 1 PEC02SAAN                           | SULLINS                   | PEC02SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                    |
| 14 R1-R5                 | -              | 5 RC0402JR-070RL; CR0402-16W-000RJT   | YAGEO PHYCOMP/VENKEL LTD. |                   | 0 RESISTOR; 0402; 0 OHM; 5%; JUMPER; 0.063W; THICK FILM                                                                      |
| 15 R6, R10, R11          | -              | 3 CRCW04024K70FK                      | VISHAY DALE               | 4.7K              | RESISTOR, 0402, 4.7K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                    |
| 16 SCL, SDA              | -              | 2                                     | 5009 KEYSTONE             | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;      |
| 17 TP1, TP2, TP4         | -              | 3                                     | 5011 ?                    |                   | 5011 TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 18 TP3                   | -              | 1                                     | 5001 KEYSTONE             | N/A               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;           |
| 19 TP9                   | -              | 1                                     | 5000 KEYSTONE             | N/A               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;             |
| 20 U1                    | -              | 1 MAX98372                            | MAXIM                     | MAX98372          | EVKIT PART-IC; MAX98372; WLP30 6X5; PKG. DWG. NO.: 21-100002                                                                 |
| 21 X1-X5                 | -              | 5 9020 BUSS                           | WEICO WIRE                | MAXIMPAD          | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWNBUS TYPE-S; 20AWG                                      |
| 22 C1-C3, C9-C14         | DNP            | 9 N/A                                 | N/A                       | OPEN              | CAPACITOR; 0402 PACKAGE; GENERIC                                                                                             |
| 23 R7-R9, R12-R20        | DNP            | 12 N/A                                | N/A                       | OPEN              | RESISTOR; 0402 PACKAGE; GENERIC                                                                                              |
| TOTAL                    |                | 68                                    |                           |                   |                                                                                                                              |

GND

OUTN

OUTP

DVDD

DVDD

SDA

SCL

DVDD

SDA

SCL

R6

4.7K

1%

R17

OPEN

R7

R8

R9

R10

R11

R12

R13

R14

1%

1%

--

RESET

-

IRQ

-

IRQ

ADDR0

ADDR0

ADDR1

ADDR1

OPEN

OPEN

OPEN

4.7K

4.7K

OPEN

OPEN

OPEN

---

RESET

<!-- image -->

<!-- image -->

<!-- image -->

1"

<!-- image -->

<!-- image -->

1"

<!-- image -->

<!-- image -->

1"

<!-- image -->

<!-- image -->

1"

<!-- image -->

<!-- image -->

1"

<!-- image -->

<!-- image -->

1"

<!-- image -->

<!-- image -->

1"

<!-- image -->

<!-- image -->

1"