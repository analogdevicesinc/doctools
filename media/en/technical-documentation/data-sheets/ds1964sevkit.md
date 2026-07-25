<!-- lastmod 2022-08-03 -->
## [Request Security User Guide and Developer Software ›](https://www.maximintegrated.com/en/app-notes/index.mvp/id/6614)

Click here for production status of specific part numbers.

## DS1964S Evaluation Kit

## General Description

The DS1964S DeepCover™ Secure Authenticator iButton ®   evaluation  system  (EV  system)  provides  the hardware  and  software necessary to evaluate the DS1964S. The  EV  system  consists  of  a  single  evaluation  kit  (EV  kit)  that  includes  two  DS1964S  devices,  a DS1402-RP8 cable, a DS9400# USB-to-I 2 C PC adapter, and a DS2465EVKIT# evaluation board to be used as a 1-Wire ®  master and a SHA-256 coprocessor. Note: The DS9400# and the DS2465EVKIT# EV board subcomponents are not available for direct sale outside of EV kits.

## Features

- Demonstrates the Basic Features of the DS1964S
- USB-to-I 2 C Module Contains Prolific PL-2303HXD USB-to-UART Chip
- Enumerates as a Virtual PC COM Port
- Standard USB Cable Interface
- Evaluation Software Available to Exercise Device Functions
- Microsoft Windows ® -Compatible Software

## DS1964S Evaluation System

<!-- image -->

iButton and 1-Wire are registered trademarks of Maxim Integrated Products, Inc.

Windows is a registered trademark and service mark of Microsoft Corp.

## Quick Start

This section is intended to give the DS1964S evaluator a list of recommended equipment and instructions on how to setup and use the Windows-based evaluation software.

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Recommended Equipment

- DS9400# USB-to-I 2 C adapter (included)
- DS2465EVKIT# I 2 C-to-1-Wire EV board with SHA-256 coprocessor (included)
- USB Type-A to USB Mini Type-B cable (included)
- DS1402-RP8 1-Wire network cable (included)
- PC with Microsoft Windows system and a spare USB port

Ordering Information appears at end of data sheet.

Evaluates: DS1964S

<!-- image -->

## DS1964S EV Kit Files

| FILE                                                                               | DESCRIPTION                                                           |
|------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| http://files.maximintegrated.com/sia_bu/public/PL2303_Prolific_DriverInstaller.zip | Prolific device driver software package                               |
| PL2303_Prolific_DriverInstaller_v1.7.0.exe                                         | Executable file within above zip file to install USB-to-serial driver |
| DS1964S_Evaluation_Program_Lite.exe                                                | Starts the EV kit software, lite version                              |

## Hardware Setup and Driver Installation Quick Start

- 1) Perform the following steps before connecting to the PC:
- a)  Connect the DS2465EVKIT# EV board to the DS9400# through the 4-pin header.
- b)  Connect the DS1964S iButton to the DS2465EVKIT# EV board using the DS1402RP8 1-Wire network cable through the RJ11 connector.
- 2) Verify that the correct version of Microsoft's .NET Framework is installed. Versions 2.0 to 3.5 SP1 are acceptable, with version 3.5 SP1 recommended. Newer versions of the .NET Framework are not guaranteed to successfully run the program. For download and installation instructions, go to http://support.microsoft.com and enter the keyword phrase .net framework 3.5 sp1 . Click on the appropriate link from the search results and download/install the package.
- 3) Follow the steps below to install the PL-2303 prolific driver (for the DS9400#). Many Microsoft Windows operating systems have a version of the PL-2303 prolific driver preloaded. Plugging in the device for the first time often completes the installation. If the Microsoft Windows operating system in question cannot install the device driver, do the following:
- a)  Ensure that the DS9400# is unplugged from the PC.
- b) [ Download the prolific device driver software package from: http://files.maximintegrated.com/sia\_bu/pub -lic/PL2303\_Prolific\_DriverInstaller.zip](http://files.maximintegrated.com/sia_bu/public/PL2303_Prolific_DriverInstaller.zip)
- c)  Unzip the archive and run the executable file that begins with PL2303\_Prolific\_DriverInstaller.
- d)  Follow the directions of the Install Wizard until the PL-2303 USB-to-serial driver install is finished. Click the Finish button to complete the install.
- 4) If not done already, insert the DS9400# into a spare USB port on the computer and verify correct installation of the virtual COM port. To check the COM port, look in Control Panel | System | Device Manager and expand Ports (COM &amp; LPT) . If the driver is installed correctly, the driver should display as in the example shown in Figure 1. Your COM Port might be different from the one shown on Figure 2.

Figure 1. DS9400# Prolific COM Port

<!-- image -->

│

## DS1964S Evaluation Kit

The  evaluation  kit  software  described  herein  is  the  lite version that can be downloaded from the Maxim website. To request the full developer version, click the button at the top of page 1.

## Software Quick Start

- 1) Start the EV kit software by double-clicking the file DS1964S\_Evaluation\_Program\_Lite.exe. Note: Make sure that the hardware has been correctly connected.
- 2) 1-Wire adapter discovery and device selection:
- a)  In the 1-Wire Adapter group box on the Setup tab (Figure 2), the Adapter Port is a COM port mapped by the prolific device. Click on the Open Adapter/Port button or use the Auto-Search button. If successful, the Status field next to the Open Adapter/Port button displays Success, port is open .
- b)  The device selection options are displayed in the Device Selection Methods group box in the Setup tab. The default setting for the EV kit software is Match-ROM in the ROM Selection Method drop-down list. Leave these default selections for quick setup.
- c)  Once the adapter/port has successfully been opened, the DS1964S Device Selection dropdown list is automatically populated with the unique ROM ID of the available DS1964Ss. A device must be present in order to proceed to the Memory tab to exercise the device. The Auto-Open checkbox instructs the program to automatically open the selected adapter and port when the program starts. This should only be used if the adapter port combination does not change.
- 3) Exercising the DS1964S:
- a)  Once the device has been selected, click on the Memory tab (Figure 3). Select the memory range in the Memory Resource Selection drop-down list.

## Evaluates: DS1964S

- b)  Once a memory range has been selected, the available commands appear in the Commands group box below the Memory Resource Selection . The commands appear as buttons. The two commands available are Read Memory and Write Memory .
- c)  Select a command by clicking on one of the command buttons. The button is highlighted in yellow to indicate which command is selected.
- d)  Once a command has been selected, the Options group box below the command buttons is displayed with the required options for the command. Select the options and click the Execute Command button to execute the selected command with the options provided.
- 4) Logging the output and exiting the program:
- a)  The output of the selected command is displayed in the Log group box in a scrollable field. The Key describing the output in the log is provided at the bottom of the Log group box.
- b)  The log can be copied to the clipboard through the File | Copy Log to Clipboard menu item. The log can be cleared through the File | Clear Log menu item.
- c)  The Raw 1-Wire tab provides the facilities to send and receive any raw 1-Wire communication. The operations available are divided into two panels: Low Level and ROM Level. The Low-Level panel provides the low-level 1-Wire primitives that can be used to construct any 1-Wire communication sequence. The ROM Level panel has 1-Wire macros that implement the 1-Wire ROM commands that utilize the 64-bit unique registration number that each device has for device discovery and selection.

Figure 2. Evaluation Software: Main Window Setup Tab

<!-- image -->

Figure 3. Evaluation Software: Main Window Memory Tab

<!-- image -->

## DS1964S EV Kit Bill of Materials

|   QTY | DESCRIPTION                                            |
|-------|--------------------------------------------------------|
|     2 | DS1964S devices in F5 can                              |
|     1 | DS1402-RP8 1-Wire network cable                        |
|     1 | DS9400# USB-to-I 2 C PC adapter                        |
|     1 | DS2465EVKIT# evaluation board                          |
|     1 | USB Type-A to USB Mini Type-B cable Qualtek 3021003-03 |

## Ordering Information

| PART          | TYPE      |
|---------------|-----------|
| DS1964SEVKIT# | EV System |

#Denotes RoHS compliant.

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/18            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0axim Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

│

Evaluates: DS1964S