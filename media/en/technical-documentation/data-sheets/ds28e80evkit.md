<!-- lastmod 2022-08-03 -->
## DS28E80 Evaluation System

## General Description

The DS28E80 evaluation system (EV system) consists of a single evaluation kit (EV kit) that includes a package  of  five  DS28E80  devices  in  a  6-pin  TDFN package, a DS9120Q+ socket board with RJ11 cable, and a DS9481R-3C7+ USB-to-1-Wire ® /iButton ®  adapter with USB cable for PC connectivity. This EV system provides the  special  hardware  and  software  system  to  exercise the  features  of  the  DS28E80.  The  evaluation  software runs  under  Windows ® 8,  Windows  7,  Windows  Vista ® , and Windows XP ® operating systems (32-bit and 64-bit versions). It provides a handy user interface to exercise the DS28E80 features.

The DS28E80  is a user-programmable nonvolatile memory chip. In contrast to the floating-gate storage cells, the  DS28E80  employs  a  storage-cell  technology  that  is gamma radiation resistant. The DS28E80 has 248 bytes of user memory, organized in blocks of 8 bytes. Individual blocks can be write-protected. Each memory block can be written eight times. The DS28E80 communicates over the single-contact 1-Wire bus at standard speed or overdrive speed. Each device has its own guaranteed unique 64-bit registration number factory programmed into the chip. The communication  follows  the  1-Wire  protocol  with  a  64-bit registration number acting as node address in the case of a multiple-device 1-Wire network.

Ordering Information appears at end of data sheet.

1-Wire, and iButton are registered trademarks of Maxim Integrated Products, Inc.

Windows, Windows Vista, and Windows XP are registered trademarks and registered service marks of Microsoft Corporation.

Evaluates: DS28E80

## Benefits and Features

- Demonstrates the Features of the DS28E80 IC
- 1-Wire USB Adapter Creates a Virtual COM Port on Any PC
- Fully Compliant with USB 2.0 Specification
- Standard USB Cable Interface
- Software Runs on Windows 8, Windows 7, Windows Vista, and Windows XP Operating Systems (32-Bit and 64-Bit Versions)
- 3.3V ±3% 1-Wire Operating Voltage
- Convenient On-Board Test Points and TO-92 Socket
- Standard RJ11 Connector Interfaces to DS9120 Socket Boards
- Evaluation Software Available Upon Request
- Proven PCB Layout
- Fully Assembled and Tested

## EV Kit Contents

|   QTY | DESCRIPTION                                                             |
|-------|-------------------------------------------------------------------------|
|     5 | DS28E80Q+ 1984-bit gamma radiation resistant 1-Wire memory (6-pin TDFN) |
|     1 | DS9120Q+ socket board (TDFN, TO-92)                                     |
|     1 | DS9481R-3C7+ USB-to-1-Wire/iButton adapter                              |
|     1 | USB type-A to Mini-USB type-B cable                                     |
|     1 | RJ11 cable                                                              |

<!-- image -->

Figure 1. DS9120Q+ Socket Board

<!-- image -->

Figure 2. DS9481R-3C7+ USB-to-1-Wire/iButton Adapter

<!-- image -->

## DS28E80 Evaluation System

## DS28E80 EV Kit Files

| FILE                                 | DESCRIPTION                             |
|--------------------------------------|-----------------------------------------|
| DS28E80_Evaluation_Program_Setup.exe | Evaluation Software (Installation file) |

## Quick Start

## Required Equipment

- DS28E80 EV kit
- DS9481R-3C7+ USB-to-1-Wire/iButton adapter (included)
- USB type-A to Mini-USB type-B cable (included)
- DS9120Q+ TDFN, TO-92 socket board (included)
- RJ11 cable assembly (included)
- Computer with a Windows 8, Windows 7, Windows Vista, or Windows XP operating system (32-bit or 64-bit version) and a spare USB 2.0 or higher port
- DS28E80Q+ (five devices included)
- DS28E80 EV kit software (go to http://www.maxi -mintegrated.com/en/design/tools/applications/ evkit-software , search for the DS28E80, and click the link to download files).

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the adapter software. Text in bold and underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Install  the  1-Wire  drivers.  See  the Installing  1-Wire Drivers section for instructions.
- 2) The  PL-2303  Prolific  Driver  needs  to  be  installed. See  the Installing  the  Prolific  Device  Driver  for  the DS9481R-3C7+ section for instructions.
- a) Insert  the  DS28E80 in  the TDFN-EP socket on the DS9120Q+ EV board. See Figure 3 for the pin configuration.

Figure 3. DS28E80 Chip Orientation for TDFN-EP Socket

<!-- image -->

Note: Pin 1 is indicated by a white dot on the DS9120Q+ PCB.

- 3) Orientation in the socket
- a) Insert  one  of  the  DS28E80  devices  into  the TDFN-EP socket on the DS28E80 EV kit board.
- b) Close the burn-in socket.
- 4) Connect  the  DS9481R-3C7+  with  the  DS9120Q+ using the RJ11 cable assembly.
- 5) Connect  the  DS9481R-3C7+  in  a  vacant  USB  port on the PC using the USB type-A to Mini-USB type-B cable.
- a) Unzip  the DS28E80\_EVKit\_Rev2.zip file  to  a known location.
- 6) Open  the Installation folder  and  double-click  the Setup.exe file.
- 7) When properly installed, the graphical user interface (GUI) window shown in Figure 4 should appear.

Evaluates: DS28E80

Figure 4. Initial Screen

<!-- image -->

## DS28E80 Evaluation System

- 8) To start communicating with the part, it is necessary to have the DS9481R adapter connected and have a part placed into the DS9120 socket. Once adapter is connected, select Device → Connect .
- a) The Connect feature can also be used to refresh the connection settings. This is helpful for the user if a new device is attached to the DS9120 adapt -er. The software needs to reconfigure the number of  devices in the network and be ready to work with the new device. Clicking the Connect option refreshes the selections ( Figure 5).

## Evaluates: DS28E80

- 9) Under Device  →  Setup ,  the  user  can  review  the settings,  change  the  device,  port,  1-Wire  speed,  or review the selected device ROM ID (Figure 6).
- 10) If  more than one device is in the 1-Wire network, it will be displayed under Device → Setup → Device Selection ( Figure 7). From there, the user can select any DS28E80 in the 1-Wire network. The new selected device ROM ID will be displayed under Device → Setup → Selected Device ROM ID .

<!-- image -->

Figure 5. Connect

Figure 6. Review/Change Settings

<!-- image -->

Figure 7. Device Selection

<!-- image -->

## DS28E80 Evaluation System

## Detailed Description of Software

The DS28E80 evaluation program user interface (Figure 8)  has  three  tabs  used  to  write,  read,  or  protect  mem -ory  contents  by  selecting  memory  blocks  or  a  memory range. Under this tab, the user has the option to write to memory using a programming file instead of typing each memory  block  content.  The 1-Wire  Commands tab  is the main tool to evaluate the DS28E80-specific functions. The Raw  1-Wire tab  provides  1-Wire  communication Evaluates: DS28E80

functions  down  to  the  bit  level  plus  power-delivery  and program-pulse  options.  These  functions  allow  the  user to  manually  create  communication  sequences  beyond those found on the Memory tab, or to communicate with other 1-Wire devices that are electrically compatible to the DS9481R-3C7+ adapter.

By  default,  the  software  opens  in  simulation  mode  to provide the user the opportunity to navigate the software and get familiar with the options and software interface.

Figure 8. Main GUI Interface

<!-- image -->

## DS28E80 Evaluation System

## Menu Bar → File Menu Item

- Save Current Log: Takes the current data contained in the Log group box and gives the user the option to save the log to a specific disk location.
- View Log Files: Opens the interface and shows the current  saved  logs  in  the  computer  so  the  user  can review or print the data.
- Exit: Closes the 1-Wire connection and exits applications.

## Menu Bar → Device Menu Item

Provides  all  the  connection  information  and  settings required for 1-Wire transactions.

- Setup
- Adapter Port: COM port used by the DS9481R.
- Device Selection: Indicates the selected DS28E80 device, if currently placed in the DS9490 adapter.  If  more  than  one  DS28E80,  the  user can change the current device and interact with a different DS28E80 in the list.

Evaluates: DS28E80

- Speed Selection: Option  to  select  the  speed  the software  will  connect  with  the  part.  The  software works  by  default  in  standard  speed  and  provides the user an option to change to overdrive or regular speed.
- Selected  Device  ROM  ID: Provides  the  selected DS28E80 ROM ID number.

Note: Before  being  able  to  read  this  information,  the Connect option  must  be  selected.  In  simulation  mode, the boxes do not show real information.

- Connect: Connects  software  with  the  DS9481R, enabling software to interact with the DS28E80 hard -ware ( Figure 9). It is important to have the DS9481R connected  to  the  software  before  initial  start.  If  the DS9481R is not attached, or the 1-Wire drivers are not installed, the software prompts the user to connect the adapter and closes automatically ( Figure 10).
- Disconnect: Switches  back  to  simulation  mode  and disconnects the hardware connection to the DS28E80. To connect back to hardware manipulation, the user must select the Connect option again.

Figure 9. Adapter Connected

<!-- image -->

## DS28E80 Evaluation System

Figure 10. Adapter Not Connected

<!-- image -->

## Menu Bar → Tools Menu Item

- Auto Save Data Log: When selected, it automatically  saves  the  log  box  information  into  a preloaded default path selected by the software. If this option is not selected, the log will not be saved until the  user  chooses  to  save  the  log  by  using  the File Menu Item → Save Current Log option.
- Select  Programming  File: The  EV  kit  includes an  option  under  the Memory tab  when  writing, to select the data  from  a  file  instead  of  typing manually the bytes to write to the memory. To use the From File option  under  the  user  memory  block,  the user must manually make a text file and following the 8-bytes-per-block requirement write the data in the file representing  hex  values.  This  provides  an  option  to load  contents  into  the New Data edit  box  under  the Memory tab.

## Menu Bar → Help Menu Item

- About: Splash  screen  disable  option  and  Company contact information.
- General: Provides basic DS28E80 information.
- Log Path: Displays the current path where the Auto Save Data Log option stores the log files.

## Loading Text File to Software

Using any text editor, the user can create a programming file that can be input to the New Data edit box.  This  helps  the  user  program  the  device  memory faster  using  a  preconfigured  file  ( Figure  11).  The  only requirement is to follow the format for each block page, with 8 bytes per block in hex format. To do this, click the Tools menu  item,  and  select  the Select  Programming File → No file selected option. A second popup screen gives the user the option to select the text file ( Figure 12 and Figure 13).

Figure 11. Programming File Example

<!-- image -->

Figure 12. Import Programming File

<!-- image -->

Figure 13. File Selection

<!-- image -->

## DS28E80 Evaluation System

## User Interface → Memory Tab

The Memory tab  has  four  group  boxes: User Memory, Protected Memory, Read Remaining Cycles, and Log ( Figure  14). Table  1  explains  the  elements  in  the User Memory group  box. Table  2  provides  details  on  the Evaluates: DS28E80

elements in the Protected Memory group box, and Table 3 explains the elements in the Read Remaining Cycles group  box.  The Log group  box  displays  the  1-Wire communication commands.

Figure 14. Memory Tab Functions

<!-- image -->

## Table 1. Memory Tab (User Memory Group Box)

Figure 15. Write Toggle Selected

| ELEMENT NAME (TYPE)                           | PURPOSE                                                                  | USAGE, SETTINGS                                                                                                                                                                                                                                                                                                                                |
|-----------------------------------------------|--------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Parameter Byte (drop-down list)               | Starting Block Address selection                                         | Indicates the starting address to start writing or reading data from user memory.                                                                                                                                                                                                                                                              |
| Read/Write (toggle button)                    | Toggles between read or write from selected starting block               | Switches between read or write option. The write option opens a second option to input data into the New Data edit box.                                                                                                                                                                                                                        |
| Number of Bytes (drop-down list)              | Option displays only under reading                                       | Indicates how many bytes will be read from user memory, starting from the selected parameter byte address.                                                                                                                                                                                                                                     |
| New Data (edit box)                           | Field in which to type data to write to DS28E80 memory                   | Disabled under Read option. Open when Write is selected.                                                                                                                                                                                                                                                                                       |
| Manual/From File (drop-down list) (Figure 15) | Select when user wants to type data into New Data or load data from file | If Manual is selected, the user must type data in hex representation in the field and have at least 8 bytes for an acceptable transaction. If From File is selected, program uses the selected input file and populates data into the edit box. If a file is not selected yet, the program prompts to open file and load contents to edit box. |
| Execute (button)                              | Executes the selected options                                            | Sends command to DS28E80 to write or read bytes depending on all selections made.                                                                                                                                                                                                                                                              |

<!-- image -->

## DS28E80 Evaluation System

Table 2. Memory Tab (Protected Memory Group Box)

| ELEMENT NAME (TYPE)               | PURPOSE                                                                                                          | USAGE, SETTINGS                                                                                                                                                                                                                                              |
|-----------------------------------|------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Parameter Byte (drop-down list)   | Starting Block Address selection                                                                                 | Indicates the starting address to start protecting or reading protection status.                                                                                                                                                                             |
| Read/Protect (toggle-button)      | Toggles between read or write protect from selected starting block                                               | The Protect option disables the Number of Blocks and protects only the block selected in the Parameter Byte drop-down list.                                                                                                                                  |
|                                   | Select if data is going to be typed in to the New Data edit box or if the data is coming from a preselected file | Manual/From File (toggle-button) values in the New Data edit box. When From File is selected, the New Data edit box is populated using the data contained in the loaded text file. To see how to load file, see the Select Programming File option under the |
| Number of Blocks (drop-down list) | Option enabled only under reading                                                                                | Indicates how many blocks are read from user memory, starting from the selected parameter byte address.                                                                                                                                                      |
| Execute (button)                  | Execute the selected options                                                                                     | Sends command to DS28E80 to protect or read the protection status from the selected Parameter Byte drop-down list.                                                                                                                                           |

Table 3. Memory Tab (Read Remaining Cycles Group Box)

| ELEMENT NAME (TYPE)               | PURPOSE                           | USAGE, SETTINGS                                                                                         |
|-----------------------------------|-----------------------------------|---------------------------------------------------------------------------------------------------------|
| Parameter Byte (drop-down list)   | Starting Block Address selection  | Indicates the starting address to read the remaining writing cycles.                                    |
| Number of Blocks (drop-down list) | Option enabled only under reading | Indicates how many blocks are read from user memory, starting from the selected parameter byte address. |
| Execute (button)                  | Executes the selected options     | Sends command to DS28E80 to read remaining cycles.                                                      |

## User Interface → 1-Wire Commands Tab

The 1-Wire Commands tab  ( Figure  16 )  helps  the  user understand  the  process  between  each  command  and shows  the  memory  contents  separated  by  memory blocks. Table 4 provides details on each control.

Note: A read of the memory is performed each time the command  from  the Command  Code drop-down  list  is selected, as shown in Figure 17 ,  or each time the block address  from  the Parameter  Byte drop-down  list  is selected, as shown in Figure 18.

Evaluates: DS28E80

Figure 16. 1-Wire Commands Tab Selected

<!-- image -->

## Table 4. 1-Wire Commands

| ELEMENT NAME (TYPE)             | PURPOSE                                                     | USAGE, SETTINGS                                                                                                                                                                                                                                                                |
|---------------------------------|-------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Command Code (drop-down list)   | Selects the 1-Wire command                                  | Displays what the 1-Wire command byte is, provides information on the operation, and the expected results for each transaction (see Figure 19).                                                                                                                                |
| Parameter Byte (drop-down list) | Starting memory block address                               | Selects the memory block to be accessed or manipulated.                                                                                                                                                                                                                        |
| Parameter Byte Bitmap           | Displays the current memory contents of each parameter byte | Displays the parameter byte in bit format.                                                                                                                                                                                                                                     |
| Data                            | Displays the contents of the memory block selected          | While writing, the user can manipulate the bytes in each block and write back to the memory block selected. While reading, this shows the contents in the block. Depending on the command selected, this section changes and displays results accordingly (see Figures 20-22). |
| Log                             | 1-Wire communication commands                               | Displays all 1-Wire commands and transactions for each selected option.                                                                                                                                                                                                        |

Evaluates: DS28E80

Figure 17. Read Memory Occurs When Command Code Selected

<!-- image -->

Figure 18. Read Memory Occurs When Parameter Byte Selected

<!-- image -->

Figure 19. Read Memory Selected

<!-- image -->

Evaluates: DS28E80

Figure 20. Read Protection Selected

<!-- image -->

Figure 21. Read Remaining Cycles Selected

<!-- image -->

Figure 22. Write Protect Block Selected

<!-- image -->

## DS28E80 Evaluation System

## User Interface → Raw 1-Wire Tab

The Raw  1-Wire tab  ( Figure  23 )  has  two  main  group boxes: Low Level and ROM Level . Table  5  details  the elements in the Low Level group box and Table 6 details the ROM  Level elements.  The Low  Level group  box provides  the  low-level  1-Wire  primitives  that  can  be used to construct any 1-Wire communication sequence.

## Evaluates: DS28E80

Choices made in the Low Level group box (e.g., speed, which  toggles  between  standard  and  overdrive)  apply also to ROM-level functions. The ROM Level group box has  functions  that  implement  the  1-Wire  ROM  function commands that use the 64-bit ROM ID that each 1-Wire slave device has for device discovery and selection.

Figure 23. Raw 1-Wire Tab Functions

<!-- image -->

Table 5. Raw 1-Wire Tab (Low Level Group Box)

| ELEMENT NAME (TYPE)                          | DESCRIPTION                                                                                                      |
|----------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| Reset (button)                               | Generates a 1-Wire reset at the speed specified by the toggle button.                                            |
| Standard/Overdrive (toggle button)           | Defines the speed to be used for 1-Wire communication.                                                           |
| Strong Pullup after Next Byte (radio button) | Starts the 1-Wire strong-pullup power delivery after the next byte (either read or write).                       |
| Strong Pullup after Next Bit (radio button)  | Starts the 1-Wire strong-pullup power delivery after the next communication bit (either read or write).          |
| Set Power Normal (radio button)              | Ends the 1-Wire strong-pullup power-delivery mode. Returns the 1-Wire bus from power-down state to normal power. |
| Deliver Power (button)                       | Delivers power to the device at the power selected by the radio buttons.                                         |
| Write Bit (button)                           | Generates a write time slot on the 1-Wire bus. Bit sent is specified in the Logic 1 Logic 0 toggle button.       |
| Write Byte(s) (button)                       | Transmits the bytes displayed in the Write Byte(s) edit box/drop-down list on the 1-Wire bus.                    |
| Read Bytes (button)                          | Reads as many bytes from the 1-Wire bus, specified by the Number of Bytes to read counter.                       |
| Number of Bytes (drop-down list)             | Specifies the number of bytes to be read when using the Read Bytes button.                                       |
| Read Bit (button)                            | Generates a read-data time slot on the 1-Wire bus.                                                               |

## Table 6. Raw 1-Wire Tab (ROM Level Group Box)

| ELEMENT NAME (TYPE)                   | DESCRIPTION                                                                                                                                                                                                                                                                                                                             |
|---------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ROM Used with ROM Commands (edit box) | The data in this field is used with the ROM function buttons to select a particular 1-Wire slave device. This field can be manually edited to input the ROM ID of the device to be selected. It is automatically filled when using one of the following buttons: Reset Search-ROM (first), Reset Search-ROM (next), or Reset Read ROM . |
| Reset Search ROM (first) (button)     | Sends a 1-Wire reset and performs the search-ROM sequence to discover the first 1-Wire slave device on the network. The ROM IDs and binary search sequence, not physical location, determine the order of the devices discovered. Refer to Application Note 187: 1-Wire Search Algorithm for details.                                   |
| Reset Search-ROM (next) (button)      | Sends a 1-Wire reset and continues the search-ROM sequence from where the last binary search left off and finds the next 1-Wire slave device on the bus.                                                                                                                                                                                |
| Reset-Resume (button)                 | Sends a 1-Wire reset, followed by the Resume command, A5 (hex).                                                                                                                                                                                                                                                                         |
| Reset Match ROM (button)              | Sends the 1-Wire reset followed by the Match ROM command (55h), followed by the 8 bytes of the ROM ID in the ROM Used with ROM Commands . A warning is displayed if the ROM Used with ROM Commands edit box is empty.                                                                                                                   |
| Reset-OD Match ROM (button)           | Sends the 1-Wire reset, followed by the Overdrive Match ROM command (69h), followed by the 8 bytes of the ROM ID in the ROM Used with ROM Commands edit box.                                                                                                                                                                            |
| Reset Read ROM (button)               | Sends the 1-Wire reset followed by the Read ROM command (33h), and then reads the 64- bit ROM ID of the 1-Wire slave device. The CRC8 within the number is checked to verify the ROM ID's validity. A warning is logged if the CRC8 is not valid. The ROM ID is also loaded into the ROM Used with ROM Commands edit box.               |
| Reset-Skip-ROM (button)               | Sends a 1-Wire reset followed by the CCh Skip ROM command. This selects all devices on the 1-Wire bus.                                                                                                                                                                                                                                  |
| Reset-OD Skip ROM (button)            | Sends a 1-Wire Reset followed by the 3Ch Overdrive Skip ROM command. This sets all devices on the 1-Wire bus to Overdrive speed.                                                                                                                                                                                                        |

Evaluates: DS28E80

## DS28E80 Evaluation System

## Table 7. Communication Log Decoder

| CODE   | 1-WIRE ACTIVITY   | DESCRIPTION                                                                                               |
|--------|-------------------|-----------------------------------------------------------------------------------------------------------|
| R      | Reset Pulse       | The 1-Wire master generates a reset pulse.                                                                |
| RP     | Presence Pulse    | The 1-Wire master generates a reset pulse and receives a presence pulse.                                  |
| RN     | No Presence Pulse | The 1-Wire master generates a reset pulse and does not receive a presence pulse.                          |
| HH     | Writing 1 byte    | The 1-Wire master transmits a single byte. The byte value (a pair of hex digits) is shown in place of HH. |
| [HH]   | Reading 1 byte    | The 1-Wire master reads a single byte. The byte value (a pair of hex digits) is shown in place of HH.     |
| 1b     | Write a 1 bit     | The 1-Wire master generates a write-one time slot.                                                        |
| 0b     | Write a 0 bit     | The 1-Wire master generates a write-zero time slot.                                                       |
| [1b]   | Read 1 bit        | The 1-Wire master generates a read-data time slot and reads 1.                                            |
| [0b]   | Read 0 bity       | The 1-Wire master generates a read-data time slot and reads 0.                                            |
| //     | (none)            | Lines beginning with // are comments.                                                                     |
| <OVD>  | Overdrive Speed   | Overdrive speed mode.                                                                                     |
| <STD>  | Standard Speed    | Standard speed mode.                                                                                      |

## Table 8. RJ11 Pin Assignment

|   PIN NUMBER | SIGNAL NAME   | DESCRIPTION              |
|--------------|---------------|--------------------------|
|            1 | VCC           | Not used for the DS28E80 |
|            2 | VCC GND       | Not used for the DS28E80 |
|            3 | 1W            | 1-Wire data              |
|            4 | GND           | 1-Wire ground geference  |
|            5 | PULSE         | Not used for the DS28E80 |
|            6 | (Reserved)    | Not used for the DS28E80 |

## Detailed Description of Hardware

## RJ11 Pin Assignment

Table  8  shows  the  pin  assignment  at  RJ11  on  the DS9120Q+ socket board and the DS9481R-3C7+ USBto-1-Wire/iButton adapter.

## Evaluation Socket Schematic and Layout

Figure 24 and Figure 25 show the schematic and layout of the socket board.

Evaluates: DS28E80

## DS28E80 Evaluation System

## Evaluates: DS28E80

Figure 24. DS9120Q+ Socket Board Schematic

<!-- image -->

Figure 25. DS9120Q+ Socket Board Composite Layout

<!-- image -->

## Table 9. PCB Color Legend

| COLOR   | DESCRIPTION        |
|---------|--------------------|
| Red     | Top metal layer    |
| Green   | Top silk screen    |
| Brown   | Bottom silk screen |
| Blue    | Bottom metal layer |
| Grey    | All metal layers   |
| Purple  | Board outline      |

## DS28E80 Evaluation System

## Appendix A: Extended Setup Guide

## Installing the Prolific Device Driver for the DS9481R-3C7+

The DS9481R-3C7+ USB-to-1-Wire/iButton adapter uses both  the  Prolific  PL-2303HXD  and  a  microcontroller  to provide  a  1-Wire  port  on  the  computer.  Many  Microsoft operating systems have a version of the PL-2303 Prolific Driver preloaded. Plugging in the DS9481R-3C7+ device for  the  first  time  often  completes  the  installation.  If  the Microsoft operating system in question cannot install the device driver, then do the following:

- 1)  Unplug the DS9481R-3C7+.
- 2)  Download  the  driver  file  labeled  PL2303\_Prolific\_ DriverInstaller\_v1\_9\_0.zip  or  newer  from  http://files. maximintegrated.com/sia\_bu/public/PL2303\_Prolific\_ DriverInstaller.zip.

Evaluates: DS28E80

- 3)  Unzip the downloaded archive and run the executable file  that  begins  with  PL2303\_Prolific\_DriverInstaller. Follow  the  directions  of  the  Install  Wizard  until  the PL-2303 USB-to-serial driver install is finished.
- 4)  Close the installation by clicking the Finish button.
- 5)  Verify  correct  installation  of  the  virtual  COM  port by  inserting  the  DS9481R-3C7+  into  a  spare  USB port  on  the  computer.  Check  the  COM port by looking in Control Panel → System Hardware → Device Manager and expand Ports (COM &amp; LPT). If the driver installed  correctly  it  should  be  displayed,  as  in  the example shown in Figure 26. Note that your COM port number may be different. Warning: The 1-Wire drivers only support COM ports up to COM15.
- 6)  Once  installed,  return  to  the Procedure section  and execute Step 5.

Figure 26. DS9481R-3C7+ 'Prolific' COM Port

<!-- image -->

## DS28E80 Evaluation System

## Installing 1-Wire Drivers

The DS9481R-3C7+ USB-to-1-Wire/iButton adapter also requires 1-Wire drivers to operate the 1-Wire port. Unless you have been using 1-Wire devices before (e.g., with a different adapter), the drivers need to be installed before the EV kit software can function. Follow the steps below to install the 1-Wire Drivers software package. For expanded installation details, refer to Tutorial 4373: OneWireViewer and iButton Quick Start Guide , which is available at www. maximintegrated.com/app-notes/index.mvp/id/4373 .

To download the 1-Wire Drivers software package, do the following:

- 1)  Go to www.maximintegrated.com/1-wiredrivers . Click  on  the  button  that  takes  you  to  the  download page.  Select  the  applicable  version  of  the  Windows operating system,  and  then  select the file that corresponds  to  your  computer's  configuration  (i.e., 32-Bit  1-Wire  Drivers  or  64-Bit  1-Wire  Drivers),  and finally, click Download .
- 2)  When prompted with the question Do you want to run or save this file? , select Run .
- 3)  When you get a security warning that states Do you want to run the software? , select Run .
- 4)  Read  and  check  the  box  if  you  accept  the  license agreement and click Install .
- 5)  Click Finish to exit the Setup Wizard .
- 6)  Return to the Procedure section and execute Step 5.

## Installing Microsoft .NET Framework

The  DS28E80  EV  kit  software  requires  the  Microsoft .NET  Framework  Version  3.5  SP1  for  the  program  to run. To check whether it is installed, look in the Control Panel under Add/Remove Programs. If Microsoft.NET is not  listed,  it  is  not  installed.  For  installation  instructions and download, go to http://msdn.microsoft.com/en-us/ vstudio/aa496123 .

## Ordering Information

| PART          | TYPE      |
|---------------|-----------|
| DS28E80EVKIT# | EV System |

#Denotes RoHS compliant.

Evaluates: DS28E80

## DS28E80 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/14           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: DS28E80