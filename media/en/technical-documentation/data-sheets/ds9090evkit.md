<!-- lastmod 2022-08-03 -->
## DS9090EVKIT Evaluation System

## General Description

The DS9090EVKIT evaluation system (EV system) consists of a DS9490+ USB-to-1-Wire ® /iButton ®  adapter for PC  connectivity,  a  DS9120P+  socket  board  with  RJ11 cable, and seven different 1-Wire devices. This EV system provides the special hardware and software system to exercise the features of 1-Wire devices with memory or PIO/switches, except 1-Wire EPROM devices. (EPROM devices such as the DS2502 and DS2506 require a different  adapter  (DS9481R-3C7)  to  perform  an  EPROM write. This adapter can be purchased separately.) 1-Wire EPROM devices are available for sampling.

The EV system software consists of the OneWireViewer (a  Java ®   program)  that  runs  under  Windows ®   OS  and comes as part of the 1-Wire drivers installation package.

## EV System Contents

|   QTY | PART     | DESCRIPTION                                           |
|-------|----------|-------------------------------------------------------|
|     1 | DS9120P+ | Socket board (Dual TSOC and TO92)                     |
|     1 | DS9490R# | 1-Wire USB adapter with RJ11                          |
|     3 | DS2401P+ | 64-bit silicon serial number (3 TO92)                 |
|     3 | DS2406P+ | 1-Wire, dual-addressable switch plus 1Kb EPROM memory |

Windows, Windows Vista, and Windows XP are registered trademarks and registered service marks of Microsoft Corp.

Evaluates: DS2401, DS2406, DS2411,

DS2413, DS2431, DS24B33, DS28E07

## Benefits and Features

- Easy Setup with USB Adapter
- Fully Compliant with USB 2.0 Specification
- Software Runs on Windows 8, Windows 7, Windows Vista ® , and Windows XP ®  OS (32-Bit and 64-Bit Versions)
- Convenient On-Board Test Points and Dual TO92 Socket
- Standard RJ11 Connector Interfaces to DS9120 Socket Boards
- Free Download of 1-Wire Drivers and OneWireViewer Demonstration Software
- Compatible with Other 1-Wire Devices Purchased Separately

|   QTY | PART      | DESCRIPTION                            |
|-------|-----------|----------------------------------------|
|     3 | DS2411P+  | Silicon serial number with V CC input  |
|     3 | DS2413P+  | 1-Wire dual-channel addressable switch |
|     3 | DS2431P+  | 1024-bit 1-Wire EEPROM                 |
|     3 | DS24B33+  | 1-Wire 4Kb EEPROM                      |
|     3 | DS28E07P+ | 1024-bit 1-Wire EEPROM                 |
|     1 | Cable     | RJ11 male to RJ11 male cable           |

Ordering Information appears at end of data sheet.

<!-- image -->

## DS9090EVKIT Evaluation System

## DS9090EVKIT Evaluation System

<!-- image -->

Figure 1. DS9120P+ Socket Board

Figure 2. DS9490R# USB-to-1-Wire/iButton Adapter

<!-- image -->

Figure 3. Typical Setup

<!-- image -->

Evaluates: DS2401, DS2406, DS2411, DS2413, DS2431, DS24B33, DS28E07

│

## DS9090EVKIT Evaluation System

## DS9090EVKIT EV System Files

| FILE                   | DESCRIPTION                       |
|------------------------|-----------------------------------|
| OneWireDrivers_xXX.msi | OneWireViewer (Installation file) |

## Quick Start

## Required Equipment

- DS9490R# USB-to-1-Wire/iButton adapter (included)
- DS9120P+ socket adapter (included)
- Computer with a Windows 8, Windows 7, Windows Vista, or Windows XP operating system (32-bit or 64bit) and a spare USB 2.0 or higher port
- TSOC or TO92 parts (included)
- OneWireViewer software with bundled drivers

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## DS9090EVKIT Setup

## Procedure

- 1) Install the 1-Wire drivers. See the Installing the DS9490R# and 1-Wire Drivers section for instructions.
- 2) DS9120P+ jumper settings:
- a) Remove jumpers from the JB1 to leave only the middle three jumpers connected. See Figure 4.
- b) Note that when evaluating a DS2413P device, jumpers J1 and J4 are to be populated. For all other 1-Wire slave devices, do not populate J1 or J4 with a jumper. When using the DS2413P in socket S1, the user can populate R3 and R4 with 10kΩ pullups; otherwise, these need to be added externally. PIOA can be observed on J3:1 and PIOB can be observed on J3:5. See Figure 9 for resistor and pin location.
- c) Note that when evaluating a DS2411P device, is necessary to place a jumper to 3.3V and a wire must be soldered to jump R3 and R5. See Figure 5.

Note: Refer to the DS9120P and each device IC data sheet for complete schematic and pin input and output to confirm proper operation for each device to be evaluated.

- 3) Insert the DS9490R# into a spare USB port of the PC. Only after OneWire Drivers Installation is completed should the DS9490R# be inserted. Once

## Evaluates: DS2401, DS2406, DS2411, DS2413, DS2431, DS24B33, DS28E07

inserted, wait for the operating system to complete the plug-and-play process. For Windows 2003 and XP (SP2), the OS prompts about installing the DS9490R# device with the Add Hardware wizard before continuing. Newer operating systems complete the plug-and-play process without the wizard. During the installation process, the drivers are set up to point to the USB adapter as the default port type and port 1 (USB1) as the default port number. The default port type and number settings can be changed at any time after installation by running the Default 1-Wire Net program that is installed with the drivers. To do so, simply click on Start | Pro -grams | 1-Wire Drivers xXX (xXX represents the OS architecture, either x86 or x64). Then click on the icon labeled Default 1-Wire Net. If problems are encountered during installation, refer to Application Note 1740: White Paper 6: 1-Wire Drivers Installation Guide for Windows , specifically the 'Appendix A: 1-Wire USB Adapter (DS9490) Installation Help' section.

- 4) Connect the DS9120P+ to the DS9490R# with the supplied RJ11-to-RJ11 cable. One end of the cable should be plugged into the DS9120P+ board and the other end into the DS9490R#. See Figure 6.
- 5) Insert the 1-Wire device of interest into the DS9120P+ socket. See Figure 7 for proper chip orientation.

## Run the OneWireViewer .

Click on Start | Programs | 1-Wire Drivers xXX . Then click on the OneWireViewer icon. This runs the OneWireViewer. If the OneWireViewer cannot find a suitable Java Runtime Environment (JRE), it prompts the user with a message to download the latest one from www.java.com. Once the OneWireViewer is running, the 64-bit ROM ID values (i.e., the 1-Wire network addresses) of all 1-Wire chips inserted into the evaluation board are displayed. Clicking on the chip's address selects the chip and starts communicating with it. The OneWireViewer then makes other tabs available that contain functionality to exercise the chip (i.e., read and write data, files, exercise PIO pins, etc.). It is also possible to run the OneWireViewer on OS platforms other than Windows, but it could require special setup and/ or additional software installation. Refer to the OneWireViewer website for more information at www.maximintegrated.com/onewireviewer .

- 6) When properly installed, the follow GUI should appear as shown in Figure 8.

<!-- image -->

Figure 4. Jumper Settings for Parasitic Power

Figure 5. DS9120P Modification for DS2411P+

<!-- image -->

Figure 6. DS9120P+ to DS9490R#

<!-- image -->

│

Figure 7. Chip Orientation Example

<!-- image -->

Figure 8. OneWireViewer Screen Example

<!-- image -->

## DS9090EVKIT Evaluation System

## DS9090EVKIT Operation

In order to start communicating with the part, it is necessary to have the DS9490R# adapter connected and have a part placed into the DS9120P+ socket.

- Select the 1-Wire device to evaluate and insert it into the appropriate socket, ensuring it is properly oriented. Jumper the appropriate enable pins for the TSOC socket. See the DS9090EVKIT Setup section for help.
- Run the OneWireViewer . If any difficulty is en -countered, see the Troubleshooting Guide section. Another helpful resource is Application Note 3358: OneWireViewer User's Guide .

The OneWireViewer presents  a Device  List window located on the left-hand side of the main screen. It displays  a  list  of  the  different  1-Wire  devices  found  connected to the DS9490R#. The 1-Wire device type inserted into the socket or header of the evaluation board should be shown in the Device List window, along with the 64-bit ROM  ID  lasered  into  the  device.  Figure  8  shows  the DS1972 in  the  Device  List  window,  along  with  its  64-bit ROM ID value of DC000002A0BC322D .

- From the Device List window, select the part by clicking on it.
- Once the 1-Wire device has been selected, the righthand side of the main OneWireViewer screen is populated with different tabs. There are at least three tabs for each device contained in the DS9090EVKIT: Description , Memory , and File . A fourth tab labeled Switch is also available on those parts containing switches.
- Clicking on the Memory tab brings up the Memory Viewer. The user has the choice of reading/writing any of the memory banks listed in the Banks section of the

## Troubleshooting Guide

| SYMPTOM                                                           | POSSIBLE CAUSE                                                              | CORRECTIVE ACTION                                                                                                                                                                   |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Operating system prompt giving installation error.                | The 1-Wire adapter's device driver did not get installed properly.          | Refer to Application Note 1740: White Paper 6: 1-Wire Drivers Installation Guide for Windows , specifically the 'Appendix A: 1-Wire USBAdapter (DS9490) Installation Help' section. |
| Cannot communicate through 1-Wire adapter.                        | The PC port hardware is not functioning properly.                           | Does the port work with other applications, such as a keyboard or mouse? If not, contact the motherboard vendor for BIOS updates or new drivers.                                    |
| Cannot communicate through 1-Wire adapter.                        | The 1-Wire adapter is not functioning.                                      | Try the 1-Wire adapter on another PC. If the problem persists, use a different 1-Wire adapter or order a new adapter of this type.                                                  |
| Cannot communicate through 1-Wire adapter.                        | The adapter type selected is not what is connected.                         | Run the Default 1-Wire Net application and select the correct adapter type and/or port number.                                                                                      |
| Software finds 1-Wire adapter, but does not read a 1-Wire device. | Possible broken wire in the RJ11 cable or the USB connector of the DS9490R. | Check the cable for broken wires.                                                                                                                                                   |

## Evaluates: DS2401, DS2406, DS2411, DS2413, DS2431, DS24B33, DS28E07

Memory Viewer. When done editing the raw page (entering in a hexadecimal number for each byte), press Commit Changes to write to the memory.

- Click the Commit Changes button to write the changes to the device memory.
- Clicking Refresh rereads the contents of the 1-Wire memory.
- The File tab allows writing files to the device's memory. To do this, the user needs to first Format the Device , then Create/Read/Write/Delete files and directories.
- The Switch tab allows reading and toggling of the PIO pin states and clearing of activity latches. Refer to Application Note 3358 for further instructions on how to use the many features of the OneWireViewer.

## Detailed Description of Hardware

## RJ11 Pin Assignment

Table  1  shows  the  pin  assignment  at  RJ11  on  the DS9120P+  socket  board  and  the  DS9490R#  USB-to1-Wire/iButton adapter.

## Table 1. 1-Wire RJ11 Pinout

|   PIN NUMBER | SIGNAL NAME   | DESCRIPTION              |
|--------------|---------------|--------------------------|
|            1 | 3.3V          | Used only for DS2411     |
|            2 | GND           | Not used for this EV kit |
|            3 | 1W            | 1-Wire Data              |
|            4 | GND           | 1-Wire Ground Reference  |
|            5 | PULSE         | Not used for this EV kit |
|            6 | (Reserved)    | Not used for this EV kit |

## DS9090EVKIT Evaluation System

## Appendix A: Extended Setup Guide

## Installing the DS9490R# and 1-Wire Drivers

The  DS9490R#  USB-to-1-Wire/iButton  adapter  also requires 1-Wire drivers to operate the 1-Wire port. Unless you have been using 1-Wire devices before, e.g., with a different adapter, the drivers need to be installed before this  evaluation  kit  can  function.  Follow  these  steps  to install the 1-Wire Drivers software package. For installation details, refer to Tutorial 4373: OneWireViewer and iButton Quick Start Guide .

- 1) To download the 1-Wire Drivers software package, go to www.maximintegrated.com/1-wiredrivers . Click on the button that takes you to the download page. Select the applicable version of the Windows

## Schematic and Layout Diagrams

Figure 9. DS9120P+ Socket Board Schematic

<!-- image -->

Evaluates: DS2401, DS2406, DS2411, DS2413, DS2431, DS24B33, DS28E07

operating system. Then select the file that corre -sponds to your computer's configuration (32-bit or 64-bit), and click Download . The web page provides assistance on how to detect whether your computer runs a 32-bit or 64-bit operating system.

- 2) When prompted with the question Do you want to run or save this file? select Run .
- 3) When you get a security warning that reads Do you want to run the software? select Run .
- 4) Read and check the box if you accept the license agreement. Click Install .
- 5) Click the Finish button to exit the Setup Wizard .
- 6) Now return to the Procedure section and execute Step 2.

│

Evaluates: DS2401, DS2406, DS2411, DS2413, DS2431, DS24B33, DS28E07

## Schematic and Layout Diagrams (continued)

Figure 10. DS9120P+ Socket Board Composite Layout

<!-- image -->

## Ordering Information

| PART         | TYPE      |
|--------------|-----------|
| DS9090EVKIT# | EV System |

#Denotes RoHS compliant.

│

## DS9090EVKIT Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                      | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------|-----------------|
|                 0 | 4/15            | Initial release                                  | -               |
|                 1 | 4/16            | Included part (DS28E07) that system can evaluate | 1-9             |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0axim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: DS2401, DS2406, DS2411, DS2413, DS2431, DS24B33, DS28E07