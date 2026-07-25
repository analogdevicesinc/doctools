<!-- lastmod 2022-08-03 -->
## DS2484 Evaluation System

## General Description

The DS2484 evaluation system (EV system) consists of a DS2484 evaluation kit (EV kit) and a DS9400 USB-to-I 2 C adapter. The DS2484 is an I 2 C-to-1-Wire ®  bridge device that  performs  protocol  conversion  from  an  I 2 C  master to  any  attached  1-Wire  slave  devices.  Relative  to  any attached  1-Wire  slave  device,  the  DS2484  is  a  1-Wire master. The evaluation software runs under a Windows ® 7, Windows 8, or Windows XP ®  operating system (OS), providing a handy user interface to exercise the features of the DS2484.

Order  the  DS2484EVKIT#  for  the  complete  EV  system to evaluate the DS2484 using a PC. Evaluation software for  the  EV  system  is  also  available  on  our  website  at: www.maximintegrated.com/evkit .

## EV System Contents

|   QTY | DESCRIPTION                              |
|-------|------------------------------------------|
|     1 | DS2484 Evaluation Board                  |
|     1 | DS9400 USB-to-I 2 CAdapter Maxim DS9400# |

## DS2484 Evaluation Kit Board

<!-- image -->

Windows and Windows XP are registered trademarks and registered service marks of Microsoft Corporation.

1-Wire is a registered trademark of Maxim Integrated Products, Inc.

## Features

- I 2 C Host Interface Supports 100kHz and 400kHz
- I 2 C Communication Speeds
- I 2 C Operating Voltages: 1.8V ±5% and 3.3V ±5%
- 1-Wire Operating Voltage: 1.8V ±5% and 3.3V ±5%
- EV Kit Contains a Mounted 6-Pin SOT23 DS2484R+T IC
- Convenient On-Board Test Points and TO-92 Socket
- Standard RJ11 Connector Interfaces to DS9120 Socket Boards
- Downloadable Evaluation Software

Ordering Information appears at end of data sheet.

|   QTY | DESCRIPTION                                            |
|-------|--------------------------------------------------------|
|     1 | USB Type A to USB-Mini Type B Cable Qualtek 3021003-03 |
|     1 | 1024-Bit 1-Wire EEPROM (3 TO-92) Maxim DS2431+         |

Evaluates: DS2484

<!-- image -->

## DS2484 Evaluation System

## DS2484 Evaluation System

<!-- image -->

## Quick Start

## Recommended Equipment

- Maxim DS9400 EV kit (included)
- DS2484 EV kit (included)
- USB type A to USB-Mini type B cable (included)
- DS2431+ (included)
- PC with a Windows 7, Windows, 8, Windows Vista ® , or Windows XP OS and a spare USB port

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows OS.

## Procedure

1)  a) Do the following to install PL-2303 Prolific Driver:

Download the driver file called PL2303\_Prolific\_ DriverInstaller\_1\_9\_0.ZIP or newer from http:// prolificusa.com/pl-2303hx-drivers.

Open and Run the file with the name or newer version PL2303\_Prolific\_DriverInstaller\_ v1417.EXE .

Windows Vista is a registered trademark and registered service markof Microsoft Corp.

- b)  Follow  the  directions  of  the Install  Wizard until Finish is  reached  of  the  PL-2303  USB-to-serial driver install. Close by clicking the Finish button.
- 2)  The DS9400 USB-to-I 2 C adapter uses both the Prolific PL-2303HXD and a microcontroller to provide an I 2 C port on any computer. Verify correct installation of the virtual COM port by inserting the DS9400 into a spare USB port on the computer. Check the COM port by looking  in Control  Panel | System | Device  Manager and expand Ports (COM &amp; LPT) . If the driver installed correctly, the driver should display as in the example shown in Figure 1. Note that your COM port number may be different.

You  have  now  completed  the  installation  of  the DS9400 adapter.

- 3)  Proceed now by setting up the DS2484 EV kit hardware by doing the following:
- a)  Set the jumpers per Figure 16 for 3.3V operation for both the I 2 C I/F and 1-Wire.
- b)  Insert  the  DS2431 device into J1 of the DS2484 EV kit.

│

Evaluates: DS2484

## DS2484 Evaluation System

- c)  Plug the J2 of the DS9400 adapter into J2 of the DS2484 EV kit.
- 4)  Now  download  the DS2484  EVKit  Software from www.maximintegrated.com/evkit .
- 5)  Unzip the DS2484 EVKIT.ZIP in a known location.
- 6)  Open the DS2484 EVKIT folder and double-click the Setup.EXE . If you encounter the dialog box shown in

Evaluates: DS2484

Figure 2, click the Cancel button. When prompted by the window as shown in Figure 3, click Install .

- 7)  The DS2484 EV kit software detects if the PC has the required .NET Framework 2.0 files. If the files do not exist, the program prompts to download them from the web.  Otherwise,  the  program  will  install  and  display the DS2484 EVKIT main page (Figure 4).

Figure 1. DS9400 COM Port

<!-- image -->

Figure 2. Program Compatibility Assistant

<!-- image -->

│

Figure 3. Application Install - Security Warning

<!-- image -->

## DS2484 Evaluation System

## Detailed Description of Software

Figure  4  shows  the  evaluation  software's  main  window. This window consists of three main tabs: DS2484 , 1-Wire Sequences , and Error Log . The I2C Data Log and the 1-Wire Data Log group boxes are shown regardless of which tab is selected and display communication activity.

Evaluates: DS2484

These two group boxes assist the engineer in becoming familiar  with  what  command  sequences  the  DS2484 device needs in order to function. A mini tool bar provides additional  functionality  for  both  the  software  and  the DS2484 device.

Figure 4. DS2484 EVKIT Main Window

<!-- image -->

## DS2484 Evaluation System

## Viewer Window Areas DS2484 Tab

The 1-Wire Commands group box (Figure 5) allows the user  to  send 1-Wire  commands to  any  1-Wire  slave device. The following features are supported in the 1-Wire Commands group box:

- Reset: This  sends  a  1-Wire  Reset  command on the 1-Wire bus.
- Write  Byte(s): Writes  any  number  of  1-Wire  bytes on the 1-Wire bus up to 16,382 bytes (no spaces or commas).
- Read Byte(s): Reads any number of 1-Wire time-slot bytes on the 1-Wire bus up to 32,768 bytes.
- Write Bit: Writes a 1-Wire single bit with a value of 0 or 1 dependent on if Logic 1 or Logic 0 is selected to the 1-Wire bus.
- Triplets: Writes a single triplet with a branch direction of 0 or 1 dependent on if Direction 1 or Direction 0 is selected to the 1-Wire bus. This function assists in performing a Search ROM function on a 1-Wire bus.

Evaluates: DS2484

Figure 5. 1-Wire Commands Group Box

<!-- image -->

│

## DS2484 Evaluation System

The Status  Register group  box  (Figure  6)  provides access  to  the  DS2484's  Status  register  bits.  A Read performs  a  read  of  the  Status  register  bits  by  the  I 2 C interface.  This  is  a  read-only  register.  The  software

Evaluates: DS2484

application  automatically  updates  the  contents  when  a command alters any of the bits  in  the Status  Register group box.

Figure 6. Status Register Group Box

<!-- image -->

│

## DS2484 Evaluation System

The Device Configuration group box (Figure 7) provides access to the DS2484's Configuration register bits. A Read performs a read of the Device Configuration register bits. The upper nibble always reads 0h. Click on the header bit  label  to  toggle  the  particular  bit.  When  writing  to  the Device Configuration register, the new data is accepted

Evaluates: DS2484

only if the upper nibble (bits 7:4) is the one's complement of  the  lower  nibble  (bits  3:0).  Therefore,  when  a  bit  on the lower nibble is selected, the upper nibble bit with the same  label  and  invert  symbol  (!)  automatically  shows as  the  one's  complement.  However,  when  reading  the register, the upper nibble reads 0h.

Figure 7. Device Configuration Group Box

<!-- image -->

## DS2484 Evaluation System

## 1-Wire Sequences Tab

The Single Slave group  box  (Figure  8)  allows  the  user to send 1-Wire command sequences to any 1-Wire slave device.  Using  these  commands  with  multiple  slaves  on the  line  may  cause  data  corruption  (logical  ANDing  of bits). The following features are supported in the Single Slave group box:

- Read ROM: Sends a 1-Wire Reset command, Read ROM (33h) command followed by reading 8 bytes on

the 1-Wire bus. The ROM ID is then displayed and the CRC is verified.

- Skip ROM: Sends a 1-Wire Reset command followed by a Skip ROM (CCh) command on the 1-Wire bus. This is used to select a single 1-Wire slave device.
- OD Skip  ROM: Sends  a  1-Wire  Reset  command  followed by an OD Skip ROM (3Ch) command on the Wire bus. This is used to place a single or all the 1-Wire slave devices on the 1-Wire bus into overdrive mode.

Figure 8. Single Slave Group Box

<!-- image -->

│

## DS2484 Evaluation System

The Multiple  Slaves group  box  (Figure  9)  allows  the user to send 1-Wire command sequences to any 1-Wire slave device. The following features are supported in the Multiple Slaves group box:

- Search  ROM  (First): Uses  the  Search  ROM  command (F0h) to perform the first sequence of the 1-Wire Search  ROM  algorithm  to  discover  the  'first'  1-Wire slave device on the 1-Wire bus. The 'first' ROM ID is displayed in the Device List . Refer to Application Note 187: 1-Wire Search Algorithm for more details.
- Search ROM (Next): Also uses the Search ROM command (F0h) in a sequence as to continue the 1-Wire Search ROM algorithm where the last binary search left off to discover the 'next' 1-Wire slave device ROM ID.
- Match ROM: Sends the 1-Wire Reset command, followed  by  the  Match  ROM  command  (55h),  followed by the ROM ID selected from the Device List .  If  no 1-Wire slave device is selected in the Device List or none is available to select, an '!' is displayed, indicating a warning that no device has been selected.
- OD Match ROM: Sends the 1-Wire Reset command, followed by the Match ROM command (69h), followed by  the  ROM  ID  selected  from  the Device  List .  If  no 1-Wire slave device is selected in the Device List or

Evaluates: DS2484

none is available to select, an '!' is displayed indicating a warning that no device has been selected. This places the selected 1-Wire slave device into overdrive mode.

- Resume ROM: Sends a 1-Wire Reset command followed by the Resume command (A5h).
- Find All  Devices: Performs  the  entire  Search  ROM Algorithm sequence, and all the 1-Wire slave ROM IDs discovered are displayed in the Device List .
- Clear Device List: Removes all 1-Wire slave devices listed in the Device List .

## Log Group Boxes

The log group boxes provide all the outputs of the I 2 C bus and the 1-Wire bus. These logs can each be highlighted and copied to the clipboard for pasting into any windows program.

The I2C  Data  Log (Figure  10)  allows  the  user  to  view all  the  I 2 C  traffic  transmitted  and  received  from  the  I 2 C bus. This  can  assist  the  designer  determining  what  I 2 C command sequences are needed to exercise the DS2484 device. The I2C Data Log displays the characters shown in Table 1.

│

Figure 9. Multiple Slaves Group Box

<!-- image -->

## Table 1. I 2 C Communication Key

| KEY                                      | FUNCTION                                                                                                                                                                                                                   |
|------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| S - Start                                | I 2 C START command represented by a single 'S' in a line.                                                                                                                                                                 |
| Sr - Repeated Start                      | I 2 C repeated START command represented by 'Sr' in a line.                                                                                                                                                                |
| P - Stop                                 | I 2 C STOP command represented by a single 'P' in a line.                                                                                                                                                                  |
| HH - Write to device                     | (hex) I 2 C write from master to device represented by a pair of hex digits showing the byte that was transmitted.                                                                                                         |
| [HH] - Read from device with ACK (hex)   | I 2 C read from device represented by a pair of hex digits bounded by brackets '[ ]' showing that the byte that was received. This byte was ACKed by the master.                                                           |
| [HH*] - Read from device with NACK (hex) | I 2 C read from device represented by a pair of hex digits and an asterisk '*' bounded by brackets '[ ]' showing the byte that was received. This byte was NACKed by the master indicated that the master is done reading. |

│

## DS2484 Evaluation System

Evaluates: DS2484

Figure 10. I2C Data Log Group Box

<!-- image -->

The 1-Wire Data Log group  box  (Figure  11)  allows  the user to view all the 1-Wire traffic transmitted and received from  the  1-Wire  bus.  This  can  assist  the  designer in  determining  what  1-Wire  command  sequences  are needed to exercise the DS2484 device and 1-Wire slave devices.  The 1-Wire  Data  Log displays  the  characters shown in Table 2.

│

## Table 2. 1-Wire Communication Key

Figure 11. 1-Wire Data Log Group Box

| KEY                                   | FUNCTION                                                                                                                                      |
|---------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| RP - Reset + Presence                 | 1-Wire reset and presence pulse response.                                                                                                     |
| RN - Reset + No Presence              | 1-Wire reset and no presence pulse response.                                                                                                  |
| HH - Write to device (hex)            | 1-Wire write from master to device represented by a pair of hex digits showing the byte that was transmitted.                                 |
| [HH] - Read from device (hex)         | 1-Wire read from device represented by a pair of hex digits bounded by brackets '[ ]' showing the byte that was received.                     |
| 1b/0b - Write to device (binary)      | 1-Wire write bit from master to device represented by a single binary digit (1/0).                                                            |
| [1b]/[0b] - Read from device (binary) | 1-Wire read bit from master to device represented by a single binary digit (1/0) bounded by brackets '[ ]' showing the bit that was received. |

<!-- image -->

Evaluates: DS2484

│

## DS2484 Evaluation System

The Error Log tab (Figure 12) allows the user to view any unhandled software exceptions. This error would display when the user does something that is outside the bounds of normal operation for the software and the software has

Evaluates: DS2484

no  way  to  handle  the  specific  event.  The  exception  as shown in Figure 12 was due to the user entering a value larger than what the Read Byte command could handle.

Figure 12. Error Log Tab

<!-- image -->

│

## DS2484 Evaluation System

## Mini Tool Bar

The mini tool bar icon short descriptions are provided in Figure 13. The following is the long description of each icon:

- Device  Reset: Causes  the  DS2484  to  perform  an internal reset cycle caused from executing the Device Reset  command  followed  by  a  read  of  the  Device Configuration register.
- Change I2C Speed: Allows the I 2 C bus to run at the selected frequency of 100kHz or 400kHz. The selection only affects the microcontroller. The DS2484 does not have to be configured for speed.
- Change 1-Wire Timing: Provides reading of the Port Configuration register and writing of the Adjust 1-Wire Port. The window is shown in Figure 14. Adjustment to  any  timing  parameter  shown  is  done  by  selecting the timing Parameter and Speed , adjusting the slider symbol,and clicking on the Write button. Verification of the write can be done by clicking on the Read button. Exit by clicking on the Close button.
- Data Log Options: Allows selecting to turn on/off the 1-Wire Data Log or I2C Data Log .
- Clear Data Logs: Clears all data log group boxes.

Figure 13. Mini Tool Bar

<!-- image -->

Figure 14. Port Configuration Register

<!-- image -->

Evaluates: DS2484

## Viewer Menu

The viewer menu consists only of File with the only option in the drop-down menu to Exit . Exit closes the program. The program also ends by the keyboard keys ( Alt + f ) and then ( x ).

## Detailed Description of Connectors/ Jumpers

## RJ11 Pinout

The  RJ11  pinout  mounted  on  the  EV  kit  PCB  at  RJ1  is shown in Table 3 and Figure 15. RJ11 pin 1 can supply 3.3V or 1.8V and can be used for auxiliary board power. GND is ground of the 3.3V or 1.8V supply, depending on jumper  settings.  The  signal  1-WIRE  stands  for  the  onewire  data  bus.  The  ground  return  1-WIRE  is  the  signal GND\_RTN. Pins 5 and 6 marked as NC are not connected.

Figure 15. 1-Wire RJ11 Port

<!-- image -->

## Table 3. 1-Wire RJ11 Pinout

|   CONNECTOR PIN # | SIGNAL NAME   |
|-------------------|---------------|
|                 1 | VCC           |
|                 2 | GND           |
|                 3 | 1-WIRE        |
|                 4 | GND_RTN       |
|                 5 | NC            |
|                 6 | NC            |

│

## DS2484 Evaluation System

## J2 Pinout

The  4-position  100-mil-spaced  I 2 C  I/F  connector  is mounted at J2 of the EV kit PCB, as shown in Table 4. These signals are routed to U2 of the MAX3394E IC that is  used as a dual-level translator to allow either 1.8V or 3.3V I 2 C  signals  to  U3  of  the  DS2484  IC.  J2  of  the  EV kit can be connected to J2 of the DS9400 for a complete EV system. The SDA\_PORT signal is the I 2 C serial-data input/output  port  and  the  SDC\_PORT  is  the  I 2 C  Serialclock input port.

Figure 16. 3.3V Operation for Both the I 2 C and 1-Wire Interfaces

<!-- image -->

Figure 17. 1.8V I 2 C I/F and 3.3V 1-Wire

<!-- image -->

## Jumper Settings

The EV kit has three jumpers that are needed to select power-supply  inputs  for  the  DS2484  IC.  Figure  16  to Figure  19  show  the  most  common  power-supply  input selections for the DS2484 device.

## Table 4. I 2 C I/F Pinout

Figure 18. 1.8V I 2 C I/F and 1.8V 1-Wire

|   CONNECTOR PIN # | SIGNAL NAME   |
|-------------------|---------------|
|                 1 | VCC3.3        |
|                 2 | SDA_PORT      |
|                 3 | GND           |
|                 4 | SCL_PORT      |

<!-- image -->

Figure 19. Powered Down (Sleep Mode)

<!-- image -->

│

Evaluates: DS2484

## DS2484 Evaluation System

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                    |
|---------------|-------|--------------------------------------------------------------------------------|
| C1, C2        |     2 | 1µF ±10%, 10V ceramic capacitors (0603) TDK Corporation C1608X5R1A105K         |
| C3-C5         |     3 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) KEMET C0603C104K4RACTU           |
| J1            |     1 | 3-position connector socket strip LOPRO Samtec SSA-132-S-G                     |
| J2            |     1 | 4-pin 100-mil female connector Samtec SSQ-104-02-T-S-RA                        |
| JP1, JP2, JP3 |     3 | 0.100, 3-position vertical 0.318 breakaway headers Tyco Electronics 9-146276-0 |
| R1, R2        |     2 | 3.3kΩ ±1% resistors (0603) Yageo RC0603FR-073K3L                               |
| R3, R4        |     2 | 5.11Ω ±1% resistors (0603) Panasonic ERJ-8GEYJ5R1V                             |

Evaluates: DS2484

| DESIGNATION   |   QTY | DESCRIPTION                                                                 |
|---------------|-------|-----------------------------------------------------------------------------|
| RJ1           |     1 | Connector mod jack, 6-6 PCB 50AU Tyco Electronics 5555165-1                 |
| TP1-TP7       |     7 | Test points Keystone Electronics 5011                                       |
| U1            |     1 | High PSRR, low-dropout, 150mA linear regulator (5 SC70) Maxim MAX8891EXK18+ |
| U2            |     1 | Dual-channel level translator (8 TDFN-EP*) Maxim MAX3394EETA+T              |
| U3            |     1 | I 2 C-to1-Wire master (6 SOT23) Maxim DS2484R+T                             |
| U4            |     1 | 2-/4-/6-/8-channel ±30kV ESD protectors (6/8/10 µDFN) Maxim MAX13202        |
| -             |     3 | LP with handle, 2-position shunt, 30AU TE Connectivity 881545-2             |
| -             |     1 | PCB: DS2484 EVKit Rev A                                                     |

Figure 20. DS2484 EV Kit Schematic

<!-- image -->

│

Figure 21. DS2484 EV Kit Composite Layout

<!-- image -->

## Ordering Information

| PART         | TYPE      |
|--------------|-----------|
| DS2484EVKIT# | EV System |

# Denotes RoHS compliant.

Evaluates: DS2484

## DS2484 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/14            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses Dre iPSOieG. 0D[iP ,QteJrDteG reserYes tKe riJKt to FKDQJe tKe FirFXitr\ DQG sSeFi¿FDtioQs ZitKoXt QotiFe Dt DQ\ tiPe.

│

Evaluates: DS2484