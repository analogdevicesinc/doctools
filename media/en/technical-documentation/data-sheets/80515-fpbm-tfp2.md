<!-- lastmod 2022-08-03 -->
<!-- image -->

A Maxim Integrated Products Brand

## Flash Programmer Model TFP2 USER'S MANUAL

<!-- image -->

## Revision History

|   Revision | Date       | Description                                       |
|------------|------------|---------------------------------------------------|
|        1.0 | 4/27/2007  | Initial release.                                  |
|        2.1 | 2/4/2009   | Added note for ICE enable pin.                    |
|        2.2 | 10/20/2010 | Added Order Number.                               |
|        2.3 | 8/8/2011   | Added troubleshooting tips. Replaced TFP2 photos. |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

## Table of Contents

| 1                                                                                                                                                                                                                                                                                           | GETTING STARTED.........................................................................................................................5   |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| 1.1 General......................................................................................................................................5 1.2 Safety and ESD Notes...............................................................................................................5 |                                                                                                                                             |
| 1.3 Kit Contents                                                                                                                                                                                                                                                                            | ..............................................................................................................................6             |
| 1.4 Compatibility.............................................................................................................................6                                                                                                                                             |                                                                                                                                             |
| 1.5 Suggested Equipment not                                                                                                                                                                                                                                                                 | Included.........................................................................................6                                          |
| 2 PC USER                                                                                                                                                                                                                                                                                   | INTERFACE.....................................................................................................................7             |
| 2.1 TFP2 CHKSUM.EXE Utility........................................................................................................7                                                                                                                                                        |                                                                                                                                             |
| 2.2 TFP2 EEPROM Download.......................................................................................................11                                                                                                                                                           |                                                                                                                                             |
| 2.3 TARGET FLASH Memory Programming ................................................................................13                                                                                                                                                                      |                                                                                                                                             |
| 2.4 Previously Programmed Device                                                                                                                                                                                                                                                            | Verification.........................................................................14                                                     |
| 2.5 Device Status Check...............................................................................................................15                                                                                                                                                    |                                                                                                                                             |
| 2.6 Code Or Parameter Update.....................................................................................................15                                                                                                                                                         |                                                                                                                                             |
| 2.7 Parameter Preservation                                                                                                                                                                                                                                                                  | Programming...................................................................................15                                            |
| 3 TARGET CODE                                                                                                                                                                                                                                                                               | INITIALIZATION...................................................................................................19                         |
| 3.1                                                                                                                                                                                                                                                                                         | CONNECTION..................................................................................................20                              |
| Power Supply 3.2 RS-232 Serial                                                                                                                                                                                                                                                              | Connection.......................................................................................................20                         |
| 3.3 Serial Connection                                                                                                                                                                                                                                                                       | Setup.........................................................................................................20                            |
| 4 TARGET FLASH MEMORY                                                                                                                                                                                                                                                                       | PROGRAMMING................................................................................21                                               |
| 4.1 Standalone Programming.......................................................................................................23                                                                                                                                                         |                                                                                                                                             |
| 4.2 PC User Interface Programming.............................................................................................24                                                                                                                                                            |                                                                                                                                             |
| 4.3 ATE Factory Automation                                                                                                                                                                                                                                                                  | Programming.................................................................................24                                              |
| 5 BOOT                                                                                                                                                                                                                                                                                      | LOADER..............................................................................................................................27      |
| 5.1 Boot Loader Operation                                                                                                                                                                                                                                                                   | ...........................................................................................................27                               |
| 6 STATUS                                                                                                                                                                                                                                                                                    | INDICATIONS..................................................................................................................29             |
| 6.1 Normal Operation....................................................................................................................29                                                                                                                                                  |                                                                                                                                             |
| 6.2 Error Conditions                                                                                                                                                                                                                                                                        | .....................................................................................................................29                     |
| 7 TFP2 HARDWARE                                                                                                                                                                                                                                                                             | SPECIFICATIONS...........................................................................................31                                 |
| 8                                                                                                                                                                                                                                                                                           | TROUBLESHOOTING....................................................................................................................33       |
| 8.1 Communication Errors                                                                                                                                                                                                                                                                    | ...........................................................................................................33                               |
| Verification                                                                                                                                                                                                                                                                                | Errors...................................................................................................................34                 |
| 8.2 8.3 Cable Issues and Marginal                                                                                                                                                                                                                                                           | Timing.........................................................................................34                                           |
| 8.4 File Load Errors                                                                                                                                                                                                                                                                        | ......................................................................................................................34                    |
| 9 ORDERING                                                                                                                                                                                                                                                                                  | INFORMATION...........................................................................................................35                    |

## Figures

| Figure 2-1: CHKSUM.EXE Hex File Processing.......................................................................................7              |                                                                                                                 |
|-------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| Figure 2-2: CHKSUM.EXE Warning Display.............................................................................................8            |                                                                                                                 |
| Figure 2-3: TFP2 Power-Up Information Display ......................................................................................8           |                                                                                                                 |
| Figure 2-4: TFP2 Help Menu....................................................................................................................9 |                                                                                                                 |
| Figure 2-5: TFP2 Intel Hex File Download to Internal EEPROM Command............................................11                               |                                                                                                                 |
| Figure 2-6: TFP2 Select Target Intel Hex File                                                                                                   | ........................................................................................11                      |
| Figure 2-7: TFP2 Download in Progress                                                                                                           | ................................................................................................11              |
| Figure 2-8: TFP2 Download Complete...................................................................................................12         |                                                                                                                 |
| Figure 2-9: TFP2 Download Fail due to Incorrect Memory Size Setting                                                                             | ..................................................12                                                            |
| Figure 2-10: TFP2 Target Mass Erase and Program                                                                                                 | Command.............................................................13                                          |
| Figure 2-11: Existing Device's Security Bit Set.......................................................................................13        |                                                                                                                 |
| Figure 2-12: Programming Overrides Security Bit                                                                                                 | ..................................................................................13                            |
| Figure 2-13: Previously Programmed Device Check                                                                                                 | ..............................................................................14                                |
| Figure 2-14: Previously Programmed Device Check with Security Bit Set...............................................14                          |                                                                                                                 |
| Figure 2-15: Device Checksum and Security Bit Status..........................................................................15                |                                                                                                                 |
| Figure 2-16: Device Checksum and Security Bit Status with Security Bit Set..........................................15                          |                                                                                                                 |
| Figure 2-17: Parameter Mode Selection.................................................................................................16        |                                                                                                                 |
| Figure 2-18: Parameter Mode Status                                                                                                              | .....................................................................................................17         |
| Figure 3-1: Memory Size Configuration..................................................................................................19       |                                                                                                                 |
| Figure 3-2: TFP2 RS-232 Connection to PC..........................................................................................19            |                                                                                                                 |
| Figure 3-3: Port Speed, Port Bit Setup and Flow Control........................................................................20               |                                                                                                                 |
| Figure 4-1: Target-LS Connection..........................................................................................................21    |                                                                                                                 |
| Figure 4-2: Target-HS Connection                                                                                                                | .........................................................................................................21     |
| Figure 4-3: Target-LS Connector Pin Locations (looking at TFP2 endplate)............................................22                          |                                                                                                                 |
| Figure 4-4: Target-HS Connector Pin Locations (looking at TFP2 endplate)...........................................23                           |                                                                                                                 |
| Figure 4-5: Standalone Configuration (shown with Target-HS                                                                                      | cable)......................................................23                                                  |
| Figure 4-6: PC User Interface Configuration (shown with Target-HS cable for example).........................24                                 |                                                                                                                 |
| Figure 4-7: ATE Connector Pin Locations (looking at TFP2 endplate) ....................................................25                       |                                                                                                                 |
| Figure 4-8: Program Flow Chart.............................................................................................................26   |                                                                                                                 |
| Figure 5-1: TFP2 Reprogram TFP2 Program Memory............................................................................27                    |                                                                                                                 |
| Figure 5-2: TFP2 Boot Completion.........................................................................................................28     |                                                                                                                 |
| Tables                                                                                                                                          |                                                                                                                 |
| Table 2-1: CHKSUM Utility Addresses.....................................................................................................9       |                                                                                                                 |
| Table 2-2: CHKSUM Utility Output Data.................................................................................................10        |                                                                                                                 |
| Table 2-3: CHKSUM Utility Data Dependency........................................................................................10             |                                                                                                                 |
| Table 2-4: Parameter Space Address Location......................................................................................16             |                                                                                                                 |
| Table 3-1: RS-232 Straight Cable                                                                                                                | Connections......................................................................................20             |
| Table 4-1: Target-LS Connector Pins.....................................................................................................22      |                                                                                                                 |
| Table 4-2: Target-HS Connector Pins                                                                                                             | ....................................................................................................23          |
| Table 4-3: ATE Connector Pins                                                                                                                   | .............................................................................................................25 |
| Table 4-4: ATE Connector Pin Input Voltage Thresholds........................................................................25                 |                                                                                                                 |
| Table 4-5: ATE Connector Pin Output Voltage                                                                                                     | Levels............................................................................25                            |

## 1  GETTING STARTED

## 1.1  GENERAL

The TFP2 Flash Programmer, Model TFP2 provides a stand-alone, FLASH memory programming tool for Teridian Semiconductor's embedded controllers.  The TFP2 facilitates FLASH programming in a manufacturing production environment requiring minimum ancillary equipment.  Once the TFP2 has been initialized with the target's program code, the target's FLASH memory can be programmed either manually via operator push button, or controlled via a factory automation computer (ATE).

The target's program code is stored in a standard 32-pin PLCC 256 KB x 8 Flash PROM (EEPROM).  A RS-232 interface is provided for connection to a PC allowing for downloading of the target's program code to the TFP2's internal EEPROM.  This downloading utility along with target programming and additional status information is provided via a simple text based user interface.

The TFP2 supports target flash memory sizes of: 8KB, 16KB, 32KB, 64KB, 128KB, and 256KB.

Once the TFP2's internal EEPROM is programmed, the PC may be removed for standalone operation. Standalone operation only performs the target FLASH memory programming.  Once programmed, the target's FLASH memory contents are verified and a PASS or FAIL indication is reported.  The TFP2 front panel incorporates two status LEDs.  These status indications are also provided at the ATE connector and displayed by the PC User Interface.

Two target connectors are provided to facilitate custom target connections.  The standard ADM-51 ribbon cable connector is provided along with a discrete wire connector.  The discrete wire connector accommodates low cost, custom cable harnesses.  These two cable connector interfaces are hardwired together and are not two separate interfaces.

## 1.2  SAFETY AND ESD NOTES

Standard ESD handling precautions should be employed whenever handling electronic equipment.  The TFP2 Flash Programmer utilizes ESD protection devices on its cable interfaces.  Potential equipment damage and/or malfunction is possible if work surface grounding procedures are not incorporated.

<!-- image -->

The TFP2 ESD protection devices do not protect the target's hardware.  Correct handling procedures and proper work area grounding minimizes damage to all equipment!

## 1

## 1.3  KIT CONTENTS

-  Model TFP2 Flash Programmer
-  5VDC/1,000mA universal wall transformer with 2.5mm plug
-  Serial cable, DB9, Male/Female, straight cable, 2m length (Digi-Key AE1020-ND)
-  ATE cable housing and crimp pins
-  Target-LS cable housing and crimp pins
-  CHKSUM.EXE Utility Diskette or CD-ROM
-  Model TFP2 User Manual
-  TFP2 Quick Start Guide

## 1.4  COMPATIBILITY

This manual applies to the following hardware and software revisions:

-  TFP2 firmware revision 1.53 or later
-  TFP2 hardware revision 1

## 1.5  SUGGESTED EQUIPMENT NOT INCLUDED

For use with optional text user interface operation (terminal emulation software):

-  PC w/ MS-Windows  versions XT, ME, 2000, or Windows 7, equipped with RS-232 port (COM port) via DB9 connector

## 2  PC USER INTERFACE

## 2.1  TFP2 CHKSUM.EXE UTILITY

<!-- image -->

Prior to downloading the target's hex file to the TFP2, the target's hex file must be preprocessed using the CHKSUM.EXE utility provided with the enclosed diskette.  A hex file not processed with CHKSUM.EXE will result in incomplete programming of the target's FLASH memory.  The target's code must be of the Extended Intel ASCII HEX-80 format for processing by CHKSUM.EXE.

From the DOS Command prompt, invoke CHKSUM.EXE as follows:

chksum kb &lt; infile .hex &gt; outfile . hex        where:

- kb = desired file size, Memory Size Switch setting to be used during TFP2 downloading and target programming

infile = target code hex file to be processed

outfile = processed target code hex file to be downloaded to TFP2

The following figure shows a typical invocation of CHKSUM.EXE:

<!-- image -->

The purpose of the CHKSUM utility is to organize the individual hex records into a contiguous 'sequential address increasing' structure.  Some compliers produce non-sequential hex files.  The TFP2 assumes a sequential file structure.  A non-sequential hex file downloaded to the TFP2 results in missing bytes (the missing bytes are the out-of-sequence hex records) in the target flash memory (when the target is then programmed with the TFP2).

The CHKSUM.EXE utility may or may not overwrite the last four bytes of the downloaded target hex file depending on whether these locations are used or not.

2

The following cases apply to using the CHKSUM.EXE utility:

1. If the last four bytes of the target hex file are unused (0xFF), the CHKSUM.EXE utility will insert its own calculated two byte CRC and two byte checksum.
2. If any of the last four bytes of the target hex file are non-0xFF values, the CHKSUM.EXE utility will NOT overwrite the four original values.

The CHKSUM.EXE utility displays the following warning when it encounters non-0xFF values:

Figure 2-2: CHKSUM.EXE Warning Display

<!-- image -->

When programming the target FLASH memory, these last four bytes of the target hex file are transferred intact.  Either the CHKSUM.EXE calculated CRC and checksum bytes are copied or the original target's hex data are copied.  If the last two bytes of the target hex file are 0xFF (CHKSUM not used), the TFP2 overwrites the last two 0xFF bytes with its calculated checksum during the Hyper-Terminal file Download operation.

With HyperTerminal configured for serial COM port, 38400 baud, 1 stop bit, no parity, XON/XOFF (refer to Section 3.3 for serial communication setup information) the following information is displayed upon applying power to the TFP2.  Any generic terminal emulation program will work.  However, the target hex file download instructions presented apply to HyperTerminal.

Figure 2-3: TFP2 Power-Up Information Display

<!-- image -->

The Memory Size Switch setting and the checksum of the current target file stored in the TFP2's internal EEPROM are displayed.  An 'Invalid Memory Size setting' message appears if the Memory Size Switch is set to one of the invalid positions.  Rotate the Memory Size Switch to a proper setting and re-apply power to the TFP2 to update the Memory Size setting.

If the target hex file has non-FF values in any of the last four bytes, the above power-on screen may display a 'TFP2 EEPROM verification error.' message.  The displayed 'TFP2 EEPROM Checksum =' value and 'Stored Checksum =' value will be different.  This occurs when the stored checksum value (from user's target file) is derived from a different checksum calculation from what the TFP2 uses. Therefore, the TFP2 cannot confirm the EEPROM's contents.  However, the checksum verification error will not prevent the TFP2 from programming a target board.  The 'TFP2 EEPROM Checksum =' value is recalculated upon every power-on or system reset.  Manual verification of the EEPROM's contents requires comparing the TFP2 EEPROM Checksum value derived after the file download to subsequent power-on recalculated checksum values.  See Figure 2-8 for an example of a displayed checksum value after a file download.

Upon pressing the 'Enter' key , the '&gt;' character is displayed indicating the TFP2 acknowledges the PC's keyboard.  Typing '?' followed by the 'Enter' key displays the Help Menu.

Figure 2-4: TFP2 Help Menu

<!-- image -->

Commands C, E, T, V, Z and ? are single keystroke events (no further user action required until the TFP2 completes the intended task).  The D, H and P commands require additional user action and are described in Section 2.6, Section 2.2, and Section 2.3, respectively.  The BOOT command is a special user action and is described in Section 5.

The following tables show the results of the last two words of the hex file after using CHKSUM and after downloading and programming using the TFP2.  The referenced addresses assume use of a 64KB flash memory configuration.

Table 2-1: CHKSUM Utility Addresses

| Initial Hex File Data                            | File Address 0xFFFC   | File Address 0xFFFE   |
|--------------------------------------------------|-----------------------|-----------------------|
| Hex File with 0xFF                               | 0xFFFF                | 0xFFFF                |
| Hex File with non-0xFF CRC                       | UserData              | 0xFFFF                |
| Hex File with non-0xFF Checksum                  | 0xFFFF                | UserData              |
| Hex File with non-0xFF CRC and non-0xFF Checksum | UserData              | UserData              |

Upon executing CHKSUM, the first line displayed contains the CHKSUM version.  Table 2-2 shows the results of processing the above hex files with CHKSUM.

Table 2-2: CHKSUM Utility Output Data

| Hex File Data after Using CHKSUM                 | CHKSUM v1.5         | CHKSUM v1.5         |
|--------------------------------------------------|---------------------|---------------------|
| Hex File Data after Using CHKSUM                 | File Address 0xFFFC | File Address 0xFFFE |
| Hex File with 0xFF                               | 0xFFFF              | Teridian Checksum   |
| Hex File with non-0xFF CRC                       | UserData            | Teridian Checksum   |
| Hex File with non-0xFF Checksum                  | 0xFFFF              | UserData            |
| Hex File with non-0xFF CRC and non-0xFF Checksum | UserData            | UserData            |

The TFP2 Download Verify and Power-Up Verify expects to read the Teridian checksum.  For the following examples shown below, a Download Verify fail and Power-Up Verify fail occurs because the user data is preserved (rather than over-writing with the Teridian values).  A Download Verify fail and Power-Up Verify fail does not prevent correct target memory programming (these messages are informational only).  The Teridian checksum insertion (over-writing) may only occur when using CHKSUM or during the TFP2 download (if 0xFF values are encountered).

The TFP2 programs into the target memory what was previously downloaded (once downloaded, the last two words do not change during programming).  The TFP2 then verifies the target memory to its internal memory resulting in the correct PASS indication even when user data is present.

Table 2-3: CHKSUM Utility Data Dependency

| Target Data after Using TFP2                                                       | Target Address 0xFFFC   | Target Address 0xFFFE   | Comments                                                            |
|------------------------------------------------------------------------------------|-------------------------|-------------------------|---------------------------------------------------------------------|
| Hex File with 0xFF                                                                 | 0xFFFF                  | Teridian Checksum       | Program Verify Passes Download Verify Passes Power-Up Verify Passes |
| Hex File with 0xFF after CHKSUM v1.5                                               | 0xFFFF                  | Teridian Checksum       | Program Verify Passes Download Verify Passes Power-Up Verify Passes |
| Hex File with non-0xFF CRC                                                         | UserData                | Teridian Checksum       | Program Verify Passes Download Verify Fails Power-Up Verify Fails   |
| Hex File with non-0xFF CRC after CHKSUM v1.5 (includes UserData into its Checksum) | UserData                | Teridian Checksum       | Program Verify Passes Download Verify Passes Power-Up Verify Passes |
| Hex File with non-0xFF Checksum                                                    | 0xFFFF                  | UserData                | Program Verify Passes Download Verify Fails Power-Up Verify Fails   |
| Hex File with non-0xFF Checksum after CHKSUM v1.5                                  | 0xFFFF                  | UserData                | Program Verify Passes Download Verify Fails Power-Up Verify Fails   |
| Hex File with non-0xFF CRC and non-0xFF Checksum                                   | UserData                | UserData                | Program Verify Passes Download Verify Fails Power-Up Verify Fails   |
| Hex File with non-0xFF CRC and non-0xFF Checksum after CHKSUM v1.5                 | UserData                | UserData                | Program Verify Passes Download Verify Fails Power-Up Verify Fails   |

## 2.2  TFP2 EEPROM DOWNLOAD

Transfer of the target's code from a PC to the TFP2 begins with the 'H' command.  The target code file must have been preprocessed using the CHKSUM.EXE utility provided on the enclosed diskette.  Refer to Section 2.1 for instructions on using CHKSUM.EXE.  Use of any other format results in malfunction and download checksum errors.

After typing 'H' followed by the 'Enter' key, the cursor moves to the following line.  Next, click on the 'Transfer' button and scroll down to 'Send Text File'  to select the desired file to be downloaded.

Figure 2-5: TFP2 Intel Hex File Download to Internal EEPROM Command

<!-- image -->

Enable the 'All files (*.*)' for file type and select your desired target Intel Hex code file from the appropriate sub-directory.

Figure 2-6: TFP2 Select Target Intel Hex File

<!-- image -->

Upon clicking on 'Open' a rotating prompt is displayed indicating the file download is in progress.

Figure 2-7: TFP2 Download in Progress

<!-- image -->

When the file download completes, the number of bytes transferred is displayed.  A running CRC is calculated during the file download for each byte received for programming into the TFP2 internal EERPOM.  The running CRC calculated during the file download is compared to the embedded CRCs of the individual byte records within the hex file for appropriate PASS and FAIL indication.  Additionally, the appropriate green or red LED is illuminated.  The TFP2 EEPROM checksum calculation value is based on the memory size switch setting and is displayed for future reference.  The download transfer times may vary from 15 minutes to 1 minute for a 64 KB file size.  The Microsoft  Windows 2000 Service Pak 4 or later affords the faster download time.

Figure 2-8: TFP2 Download Complete

<!-- image -->

Possible reasons for a FAIL indication upon downloading a file to the TFP2:

1. Downloaded file not Intel Hex format.
2. USB to RS-232 dongle communication problem (increase Line delay to 10 msec.).
3. USB to RS-232 dongle does not support XON/OFF.
4. XON/XOFF protocol failure, close and restart Hyper-Terminal.
5. Hex file not converted using the CHKSUM.EXE utility.
6. The following messages appear when the Memory Size Switch setting is too small for the downloaded file.

Figure 2-9: TFP2 Download Fail due to Incorrect Memory Size Setting

<!-- image -->

## 2.3  TARGET FLASH MEMORY PROGRAMMING

Programming of the target's FLASH memory begins with typing 'P' followed by the 'Enter' key.  The green LED on the TFP2's front panel blinks while the target FLASH memory is being mass erased, programmed and verified.  The red LED will momentarily flash on at the start of programming.  Upon completion of the target FLASH memory programming the following display appears.  Additionally, the green or red LED is illuminated upon completion of the target FLASH memory programming.

Figure 2-10: TFP2 Target Mass Erase and Program Command

<!-- image -->

If the existing device's security bit is set, the TFP2 prompts for confirmation that programming is to continue.

Figure 2-11: Existing Device's Security Bit Set

<!-- image -->

Type an uppercase 'Y' to continue device programming.

Pressing the Program Button on the front panel of the TFP2 automatically proceeds with device programming regardless of the security bit setting.

Figure 2-12: Programming Overrides Security Bit

<!-- image -->

If the TFP2 cannot communicate with the target board, a 'Command Timeout' message appears. Possible reasons for a Command Timeout indication upon programming the target board:

1. Power not provided to target board preventing TFP2 communication with target board.
2. Bad cable connecting TFP2 to target board preventing TFP2 communication with target board.
3. Malfunctioning target board preventing TFP2 communication with target board.
4. TFP2 Programmers built before June 2011 may have timing issues with some 78M66xx devices. Contact Teridian for further information.

NOTE:  The TFP2 must be powered first before connecting the target board to the TFP2 .

- NOTE:  The target's watchdog timer must be enabled (V1 pin not connected to V3P3) and the target's ICE\_E pin must be connected to the appropriate TFP2 connector pin for target flash re-programming if the target's security bit is set.

NOTE:  Wrong Memory Size switch setting will result in a Verification Error FAIL message .

## 2.4  PREVIOUSLY PROGRAMMED DEVICE VERIFICATION

A previously programmed device can be checked against the currently loaded image contained in the TFP2.  Use the 'C' command to perform this comparison.  The green LEDs are illuminated if the flash contents of the device in the socket match the contents of the TFP2 EEPROMs.

Figure 2-13: Previously Programmed Device Check

<!-- image -->

If the security bit is set, the target's FLASH memory cannot be read.  Therefore, the Compare results will fail as shown below.  The red LEDs are illuminated indicating this condition.

Figure 2-14: Previously Programmed Device Check with Security Bit Set

<!-- image -->

## 2.5  DEVICE STATUS CHECK

The contents of a device may be read-back to display its current security bit setting and checksum.  Use the 'T' command to perform this read-back.

Figure 2-15: Device Checksum and Security Bit Status

<!-- image -->

If the security bit is set, the target's FLASH memory cannot be read.  Therefore, the Status results cannot be displayed as shown below.

Figure 2-16: Device Checksum and Security Bit Status with Security Bit Set

<!-- image -->

## 2.6  CODE OR PARAMETER UPDATE

The TFP2 firmware typically performs a block erase prior to programming the device's flash memory. Additionally, the TFP2 programs the entire address space of the flash memory.  The 'D' command allows for programming only a small portion of the target's FLASH memory, i.e. - code patch or parameters.

Use the 'D' command to download a code patch or a parameter table to the TFP2 EEPROM without erasing and reprogramming the entire TFP2 EEPROM memory.  The memory locations to be reprogrammed are read from the downloaded Hex File.  Follow the same instructions of Section 2.2 regarding selecting 'Send Text File' menu option after typing the 'D' command.

Use the 'P' command or the PROGRAM button to program the target board's FLASH memory with the updated TFP2 EEPROM contents.

The TFP2 Power-Up checksum verification expects to read the original Teridian checksum.  The PowerUp checksum verification may fail due to the code change.  A Power-Up Verify fail does not prevent correct device memory programming (these messages are informational only).  Use the 'T' command to verify the current device checksum.

## 2.7  PARAMETER PRESERVATION PROGRAMMING

The TFP2 firmware typically performs a block erase prior to programming the device's flash memory. Additionally, the TFP2 programs the entire address space of the flash memory.  Optionally, the TFP2 can reserve 4KB of flash memory for code or parameter tables.

Use the 'E' command to toggle whether the 4KB is preserved or erased/over-written during the 'P' programming operation.  The Parameter Mode status change is displayed as shown below.

Figure 2-17: Parameter Mode Selection

<!-- image -->

After setting the Parameter Mode using the 'E' command, programming can be initiated using the 'P' command or by pressing the front panel Program button.

When Parameter Mode preservation is enabled, the TFP2 programming operation copies the existing parameter data from the target device.  A bulk erase and reprogramming of the target's FLASH memory is performed.  The TFP2 then restores the previously copied parameter data starting at its highest address location.  Parameter data is re-written to decreasing address locations until all parameter data locations have been restored.  If new code (non 0xFF data) is encountered (above the lowest reserved parameter address location) the message 'No parameters preserved' is displayed during the programming operation.

The location of the 4KB parameter space depends on the target device's FLASH memory size.  The TFP2 determines the target FLASH memory size from the front panel Memory Size switch.  The following table shows the reserved address locations of parameter space for different memory sizes.

Table 2-4: Parameter Space Address Location

<!-- image -->

| Memory Size Switch   | Parameter Space Start Address   | Parameter Space End Address   |
|----------------------|---------------------------------|-------------------------------|
| 8KB                  | Not Used                        | Not Used                      |
| 16KB                 | 0x2000                          | 0x2FFF                        |
| 32KB                 | 0x5000                          | 0x5FFF                        |
| 64KB                 | 0xD000                          | 0xDFFF                        |
| 128KB                | 0x0001:D000                     | 0x0001:DFFF                   |
| 256KB                | 0x0003:D000                     | 0x0003:DFFF                   |

Usage of the above parameter space assumes new program code does not exist at the previous parameter(s) address locations.  The TFP2 also assumes that the parameters are stored as a contiguous block.  This block of parameters can be located anywhere within the reserved memory locations.

Locating the parameters at the end of the Parameter Space allows for the program code to 'grow' into the lower addresses of the parameter space.

The location of the contiguous parameter block is determined by searching for a non 0xFF data byte beginning at the Parameter Space 'End Address' of the TFP2's EEPROM image.  The address counter is decremented until a non 0xFF value is found.  This locates the lowest address of the parameter data, the 'End Address' being the highest address.

The TFP2 Power-Up checksum verification expects to read the original Teridian checksum.  The PowerUp checksum verification may fail due to the code change.  A Power-Up Verify fail does not prevent correct device memory programming (these messages are informational only).  Use the 'T' command to verify the current device checksum.  The 'T' command always includes the Parameter Space addresses in its checksum calculation regardless of the Parameter Preservation Mode setting.  However, the 'C' command operation varies with the Parameter Preservation Mode setting.  The Parameter Space addresses are included in the comparison when Parameter Preservation Mode is OFF.  Otherwise, the Parameter Space addresses are ignored if Parameter Preservation Mode is ON.

The Parameter Mode status is also displayed in the power-up initialization messages.

Figure 2-18: Parameter Mode Status

<!-- image -->

## 3  TARGET CODE INITIALIZATION

Before the target's FLASH memory can be programmed, the target code must be transferred to the TFP2 for internal storage.  First configure the TFP2 for the proper memory size of the target's code.  Rotate the internal Memory Size rotary switch to the appropriate position.  There is a black arrow on top of the rotary switch shaft denoting the switch position.  Only six of the eight switch positions are used.  The other two positions are not used.  A blinking red LED after applying power to the TFP2 indicates one of these unused positions is currently selected.  Rotate the Memory Size Switch to a proper setting and re-apply power to the TFP2 to update the Memory Size setting.

Figure 3-1: Memory Size Configuration

<!-- image -->

Figure 2-2 shows the basic RS-232 connection of the TFP2 to a PC.  Invoking a terminal emulator program such as Microsoft's Windows 2000  HyperTerminal, displays a simple text based user interface for controlling the TFP2.  Refer to Section 2 for instructions on using the user interface.

Figure 3-2: TFP2 RS-232 Connection to PC

<!-- image -->

## 3

## 3.1  POWER SUPPLY CONNECTION

The TFP2 is supplied with a universal AC/DC wall transformer.  Alternatively, the TFP2 can be powered by another external power supply.  The TFP2's power connector requires a 2.5 mm (inner diameter) power plug.  The center conductor is the +VDC and the outer conductor is Ground.  External power supply voltage range is +5VDC +/- 10% regulated.  Maximum required power supply current is 200 mA.

NOTE:  The TFP2 does not supply power at the Target-LS and Target-HS connectors.  Power must be supplied to the target board separately.  The TFP2 must be powered first before connecting the target board to the TFP2.

## 3.2  RS-232 SERIAL CONNECTION

For connection of the DB9 serial port to a PC, a straight cable must be used.

Table 3-1: RS-232 Straight Cable Connections

|   PC Pin Male Connector | PC Function   |   TFP2 Pin Female Connector |
|-------------------------|---------------|-----------------------------|
|                       2 | RX            |                           2 |
|                       3 | TX            |                           3 |
|                       5 | Signal Ground |                           5 |

## 3.3  SERIAL CONNECTION SETUP

After connecting the DB9 serial port to a PC, start the HyperTerminal application and create a session using 38400 baud, 8 bits, no parity, 1 stop bit, and XON/XOFF flow control.  HyperTerminal can be found by selecting Programs  Accessories  Communications from the Windows  start menu.  The connection parameters are configured by selecting File  Properties and then by pressing the Configure button.  If the Configure button is not active, select Call  Disconnect.  Port speed and flow control are configured under the General tab, and bit settings are configured after pressing the Configure button, as shown in Figure 3-3.

Figure 3-3: Port Speed, Port Bit Setup and Flow Control

<!-- image -->

Once, communication to the TFP2 is established, press the 'Enter' key and the TFP2 program prompt '&gt;' should appear.  Typing ' ? ' displays the TFP2 program help menu.  Type ' V ' to verify that the TFP2 program version is revision 1.00 or later.

Refer to Section 2 for instructions on using the PC User Interface.

<!-- image -->

## 4  TARGET FLASH MEMORY PROGRAMMING

The TFP2 Flash Programmer connects to the target board via one of two connectors:

Figure 4-1: Target-LS Connection

<!-- image -->

- 2) The Target-HS connector utilizes the ADM-1 ribbon cable connector. Must use this interface for TCLK frequencies of 10 MHz or faster.

Figure 4-2: Target-HS Connection

<!-- image -->

These two connectors are hard wired together.  They are not two separate interfaces (two different target boards cannot be programmed concurrently).

<!-- image -->

- The Target HS interface must be used when programming 73S12xxF and 78M66xx devices regardless of the TCLK speed.

The target connector pin assignments are as follows:

Table 4-1: Target-LS Connector Pins

|   Target-LS Pin | Pin Function   | TFP2 I/O       |
|-----------------|----------------|----------------|
|               1 | Ground         |                |
|               2 | TCLK           | Input          |
|               3 | Ground         |                |
|               4 | RESET          | Output         |
|               5 | ICE Enable     | Output         |
|               6 | RXTX           | Bi-Directional |

Figure 4-3: Target-LS Connector Pin Locations (looking at TFP2 endplate)

<!-- image -->

The TFP2 does not supply power at the Target-LS connector.  Power must be supplied to the target board separately.  The TFP2 must be powered first before connecting the target board to the TFP2.

Target-LS Connector part numbers:

1. Connector Housing, 6 pin, 0.100

AMP 2-87977-8

(Digi-Key A25831)

2. Connector Pins, Crimp

AMP 102348-2

(Digi-Key A25943-ND)

Table 4-2: Target-HS Connector Pins

|   Target-HS Pin | Pin Function   | TFP2 I/O       |   Target-HS Pin |   Pin Function | TFP2 I/O   |
|-----------------|----------------|----------------|-----------------|----------------|------------|
|               1 | Ground         |                |              11 |             11 | Ground     |
|               2 | ICE Enable     | Output         |              12 |             12 | Not Used   |
|               3 | Ground         |                |              13 |             13 | Ground     |
|               4 | RESET          | Output         |              14 |             14 | Not Used   |
|               5 | Ground         |                |              15 |             15 | Ground     |
|               6 | TCLK           | Input          |              16 |             16 | Not Used   |
|               7 | Ground         |                |              17 |             17 | Ground     |
|               8 | RXTX           | Bi-Directional |              18 |             18 | Not Used   |
|               9 | Ground         |                |              19 |             19 | Ground     |
|              10 | Not Used       |                |              20 |             20 | Not Used   |

Figure 4-4: Target-HS Connector Pin Locations (looking at TFP2 endplate)

<!-- image -->

The TFP2 does not supply power at the Target-HS connector.  Power must be supplied to the target board separately.  The TFP2 must be powered first before connecting the target board to the TFP2. Cable length must not exceed 12 inches.

Target-HS ribbon cable part numbers:

1. 20-pin flat ribbon cable connector, 0.050 AMP 111194-4  (Digi-Key A29133-ND)
2. 20-conductor flat ribbon cable, 0.025

Temp Flex F30007S-20-025-85

## 4.1  STANDALONE PROGRAMMING

With the TFP2's internal EEPROM initialized with the target's code as described in Section 3, and the target board connected to the TFP2 via the Target-LS connector or the Target-HS connector, programming of the target's flash memory may begin.

Figure 4-5: Standalone Configuration (shown with Target-HS cable)

<!-- image -->

When power is applied at the DC IN connector, the yellow power indicator LED is illuminated. Programming of the target FLASH Memory begins upon pressing the 'Program' button.  A momentary push button press of 100 msec, not to exceed 1 second is required to commence programming.  Mass erase of the target's FLASH memory is performed first before programming of the code begins.  The green Programming/Pass LED blinks while programming is in progress.  Upon completion of programming, the target's FLASH Memory contents are read back for verification.  The green Programming/Pass LED stops blinking and turns on solid if the target's FLASH Memory contents are verified as good.  If verification fails, the red Fail LED turns on solid.  If the TFP2 cannot communicate with the target, the red Fail LED turns on immediately.  Communications failure may result from no target power, bad cable or faulty target board.  No target FLASH Memory programming will have occurred when communication has not been established.  Either LED indication is cleared upon re-pressing the Program button.

NOTE: The TFP2 must be powered first before connecting the target board to the TFP2 .

NOTE:  The target's watchdog timer must be enabled (V1 pin not connected to V3P3) and the target's ICE\_E pin (if available on target device) must be connected to the appropriate TFP2 connector pin for target flash reprogramming if the target's security bit is set.

## 4.2  PC USER INTERFACE PROGRAMMING

Alternatively, manual programming may be performed using the PC User Interface.  The green and red LED indicators function as described above.  The operational status information is also duplicated on the PC's screen.  Refer to Section 2 for instructions on using the PC User Interface.

Figure 4-6: PC User Interface Configuration (shown with Target-HS cable for example)

<!-- image -->

NOTE:  The TFP2 must be powered first before connecting the target board to the TFP2.

<!-- image -->

Do not connect a PC to the TFP2 AND connect the TFP2 to a target board with any connection to Line or Neutral.  Equipment damage will occur due to a Ground signal disparity or live voltages.

## 4.3  ATE FACTORY AUTOMATION PROGRAMMING

Automated programming of the target's FLASH Memory may be performed using the ATE connector. The interface signals provided at the ATE connector allow a factory automation computer to commence programming and monitor the status of the programming results.  The ATE interface cannot download target code to the TFP2's internal EEPROM.

The TFP2 must be powered first before connecting the target board to the TFP2.

The ATE connector pin assignments are as shown in Table 4-3:

Table 4-3: ATE Connector Pins

|   ATE Pin | Pin Function   | TFP2 I/O   | Description                                                                                                                                                                                      |
|-----------|----------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|         1 | RESETB         | Input      | Active LO reset to TFP2 processor.                                                                                                                                                               |
|         2 | Ground         |            |                                                                                                                                                                                                  |
|         3 | PROGRAM        | Input      | Active HI signal starts target FLASH Memory programming. A minimum 200 ms pulse is required.                                                                                                     |
|         4 | Ground         |            |                                                                                                                                                                                                  |
|         5 | PROGRAM ACTIVE | Output     | Active Hi signal indicates target FLASH Memory programming in progress. De-assert PROGRAM upon PROGRAM ACTIVE going high.                                                                        |
|         6 | Ground         |            |                                                                                                                                                                                                  |
|         7 | PASS           | Output     | Active HI signal indicates target FLASH Memory verified to be correct. PASS goes low when PROGRAM is re-asserted high. PASS toggles Hi and LO during programming sequence.                       |
|         8 | Ground         |            |                                                                                                                                                                                                  |
|         9 | FAIL           | Output     | Active HI signal indicates target FLASH Memory failed verification. FAIL goes low when PROGRAM is re-asserted high. FAIL toggles HI and LO if the TFP2 cannot communicate with the target board. |
|        10 | Ground         |            |                                                                                                                                                                                                  |

Figure 4-7: ATE Connector Pin Locations (looking at TFP2 endplate)

<!-- image -->

ATE Connector part numbers:

1. Connector Housing, 10 pin, 0.100

AMP 3-87977-0 (Digi-Key A25835)

2. Connector Pins, Crimp

AMP 102348-2  (Digi-Key A25943-ND)

ATE interface Logic Level Specifications are given below:

Table 4-4: ATE Connector Pin Input Voltage Thresholds

| Parameter   | Min   | Max   | Description        |
|-------------|-------|-------|--------------------|
| Vih         | +2.0V | +3.3V | Input high voltage |
| Vil         | 0.0V  | +0.5V | Input low voltage  |

The RESET pin incorporates a 1kΩ pull-up resistor to +3.3V.

The PROGRAM pin incorporates a 1kΩ pull-down resistor to Ground.

Table 4-5: ATE Connector Pin Output Voltage Levels

| Parameter   | Min          | Max        | Description         |
|-------------|--------------|------------|---------------------|
| Voh         | +2.4V @-2 ma | +3.3V      | Output high voltage |
| Vol         | 0.0V         | +0.45V@8ma | Output low voltage  |

The PROGRAM ACTIVE, PASS and FAIL outputs incorporate 62Ω series resistors.

The flow chart shown in Figure 3-9 details the programming sequence required of the ATE (must apply power to TFP2 Flash Programmer before the sequence below begins).

Figure 4-8: Program Flow Chart

<!-- image -->

## 5  BOOT LOADER

The TFP2 Boot Loader enables the TFP2 firmware to be upgraded in the field (remote location).  The Teridian Semiconductor provided TFP2 firmware file is first downloaded to the TFP2's EEPROM. Transfer of this revised firmware file from the TFP2's EEPROM to its local program memory is performed by typing 'BOOT' at the command prompt.  Detailed Boot Loader instructions are provided in the following section.

## 5.1  BOOT LOADER OPERATION

Reprogramming (upgrading) of the TFP2's program memory is accomplished with the following steps:

1. Set front panel Memory Size switch to 64 KB position.
2. Download the new TFP2 firmware file using the 'H' command.  Follow the instructions described in Section 2.2.
3. Update the TFP2 program memory using the 'BOOT' command.  The 'BOOT' characters must be upper case.
4. To proceed with reprogramming the TFP2, type an upper case 'Y'.  The green PASS led blinks during the reprogramming process.  The TFP2 restarts itself once reprogramming is complete.

Figure 5-1: TFP2 Reprogram TFP2 Program Memory

<!-- image -->

<!-- image -->

Figure 5-2: TFP2 Boot Completion

<!-- image -->

If the internal TFP2 EEPROM contents are corrupted (checksum comparison failure) or if the EEPROM contents do not represent a TFP2 code file (user's target code), the BOOT command will NOT reprogram the TFP2.  The current power-on screen is immediately displayed with no flashing PASS led when a problem is encountered with the EEPROM contents.

## 6  STATUS INDICATIONS

## 6.1  NORMAL OPERATION

## Normal front panel LED operation:

5. Green LED blinks during target FLASH memory programming and verification.
6. Green LED on 100% when target FLASH memory verified as good.
7. Red LED never on during normal operation.

## Normal ATE status signal operation:

1. ProgramActive pin high during target FLASH memory programming and verification.
2. PASS pin toggles HI and LO during target FLASH memory programming and verification.
3. ProgramActive pin low upon completion of target FLASH memory verification.
4. PASS pin high when target FLASH memory verified as good.
5. FAIL pin never high during normal operation.

## 6.2  ERROR CONDITIONS

## Front panel Red LED error codes:

1. Red LED blinks after power-on - Incorrect Memory Switch setting: either position 6 or 7 selected.
2. Red LED on 100% after TFP2 download - TFP2 download CRC failed.
3. Red LED on 100% immediately upon Target programming - Target not responding upon attempted programming.
4. Red LED on 100% after power-on - TFP2 does not power-up correctly.
5. Red LED on 100% after programming - Target FLASH memory fails verification.

## ATE FAIL status signal error codes:

ProgramActive pin LO and FAIL pin HI immediately - Target not responding upon attempted programming.

ProgramActive pin LO and FAIL pin HI after ProgramActive was HI- Target FLASH memory fails verification.

## 6

## 7  TFP2 HARDWARE SPECIFICATIONS

## Case Dimensions

-  Dimensions
-  Weight

## Environmental

- Operating Temperature
- Storage Temperature

## Power Supply

-  Supply Voltage
-  Supply Current
-  Cable Plug

## ATE Connector

-  Input Voltage Lo
-  Input Voltage Hi
-  Output Voltage Lo
-  Output Voltage Hi

## Target Connector

-  Input Voltage Lo
-  Input Voltage Hi
-  Output Voltage Lo
-  Output Voltage Hi
-  TCLK Frequency

6.0' x 2.5' x 1.5'

0.35 lbs.

+10°…+50°C

- -40°C…85°C

+5VDC +/- 10% regulated

200 mA max

2.5 mm Diameter

0.0V to +0.5V

- +2.0V to +3.3V
- +0.45V max @ 8 mA
- +2.4V min @ 2 mA

0.0V to +0.5V

- +2.0V to +3.3V

+0.45V max @ 8 mA

+2.4V min @ 2 mA

10 MHz to 48 MHz

## 7

## 8  TROUBLESHOOTING

Proper function of the TFP2 with the target IC depends on many factors.  These factors are:

- Cable length and cable quality
- Signal termination
- Target board and target IC function
- Match between selected flash program size and target flash size

When the programming process seems to fail, it is useful to watch the feedback messages from the TFP2 via HyperTerminal.  Using the C and/or T commands it can be determined quickly if the issue is with the communication link or somewhere else.

## 8.1  COMMUNICATION ERRORS

The typical response of the TFP2 to a communication error when issuing the C command looks as follows:

```
>C Comparing Target Flash to TFP2 EEPROM image Command timeout. Command timeout. FAIL >
```

The response to the T command will look as follows when the communication link is interrupted:

```
T Command timeout. >
```

Likely causes for communication link issues are:

- Cable length - try to keep the cable length below 25 cm (10 inches)
- Cable quality - proper multiple grounding and straight cables without loops are preferred.  Try to use the original ribbon cable with an adapter to the target programming connector, if necessary.
- If the TFP2 and the PC connected to it have a different ground potential than the target, ground loops can occur.  In that case, try to use an isolated supply for the target.
- Termination - in-line resistors, pull-up resistors (if used) and bypass capacitors should be included in the target schematics in the same way as implemented on the Teridian Demo Boards. Consult the Demo Board schematics for comparison.
- Target board power - 3.3 VDC must be supplied to the target IC.
- Target oscillator - ensure that the crystal is oscillating at 32.768 kHz using an oscilloscope.  In many cases, board contamination or moisture can prevent the oscillator from functioning properly.
- ICE\_E not pulled high - this pin, if available on the target IC, must be pulled high.
- V1 pin for 71M651x target ICs - for this IC family, the V1 pin must be pulled up to 3.3 VDC to disable the internal watchdog timer.
- Stuck RESET pin - the communication link will fail if this pin is tied to the active potential.
- Some older TFP2 units may have timing issues when programming 78M66xx devices.  See Section 2.3.

## 8

## 8.2  VERIFICATION ERRORS

A typical dialog involving a verification error is shown below.  In this case, the communication between TFP2 and the target IC was established, but the programmed target image had at least one error, which was discovered during the verify process.

&gt;P

Programming Target Flash Verifying Target Flash Verification error. FAIL

&gt;

Likely causes for verification issues are:

- Communication issues can look like a verification error if the signal quality and timing is marginal - check the items listed above under Communication Errors. See the hints given in Section 8.3.
- An emulator port signal is also connected to an LCD pin on the target board resulting in a corrupted signal - provide a jumper that can isolate the LCD pin from the emulator signal(s) during the flash programming process.
- Mismatch between selected target flash size and actual target flash size - check the setting of the Memory Size Selection Switch and compare the file size with the flash size given in the target IC data sheet.  For example, the 71M6534 has a flash size of 128 KB whereas the 71M6534H has a flash size of 256 KB.
- Mismatch between linked target file size and actual target flash size - check the linker settings and linker report files.
- File error - check the target file loaded into the TFP2.  Reload the file, if necessary.

## 8.3  CABLE ISSUES AND MARGINAL TIMING

Cable issues and marginal timing can manifest themselves as intermittent communication errors and/or verification errors.  If the methods listed in the previous section Verification Errors do not help, a few unconventional fixes can be tried:

- Raising the board voltage to 3.6 VDC.
- Adding a resistor of 10 kΩ between E\_RXTX and V3P3.

## 8.4  FILE LOAD ERRORS

File load errors can occur when attempting to load the target image file into the TFP2 using HyperTerminal.  USB-to-serial converters sometimes misinterpret the XON/XOFF control sequences used for flow control.  These cases manifest themselves in stuck file loads or corrupted target images.  The solution is to move to a PC with a true serial interface (COM port).

## 9  ORDERING INFORMATION

The following table lists the order number used to identify the TFP2 Flash Programmer.

Table 9-1: Order Number

| Part Description            | Order Number    |
|-----------------------------|-----------------|
| Flash Programmer Model TFP2 | 80515-FPBM-TFP2 |

## 9