<!-- lastmod 2022-08-03 -->
<!-- image -->

## DS28CZ04 Evaluation System

## Evaluates:  DS28CZ04

## General Description

The DS28CZ04 evaluation system (EV system) consists of  a  DS28CZ04  evaluation  board  (EV  board)  and  a Maxim CMAXQUSB command module. The DS28CZ04 is  a  4Kb  EEPROM  with  four  nonvolatile  programmable I/O  pins  (PIO)  using  the  industry-standard  I 2 C  and SMBus™  interface.  The  memory  is  organized  as  two segments of 256 bytes. Individual PIO lines can be configured as inputs or outputs. The power-on state of PIO programmed as outputs is stored in nonvolatile memory. The evaluation software runs under the Windows XP M or Windows 2000 operating system (OS), providing a handy user interface to exercise the features of the DS28CZ04.

Order the DS28CZ04EVKIT for the complete EV system to evaluate the DS28CZ04 using a PC.

## EV Kit Contents

|   QTY | DESCRIPTION                              |
|-------|------------------------------------------|
|     1 | DS28CZ04EVBD: DS28CZ04 evaluation board. |
|     1 | CMAXQUSB: Command module and cable.      |

SMBus is a trademark of Intel Corp.

Windows XP is a registered trademark of Microsoft Corp.

Features

- S Proven PCB Layout
- S Complete Evaluation System
- S Convenient On-Board Test Points
- S Fully Assembled
- S Downloadable Evaluation Software

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| DS28CZ04EVKIT | EV Kit |

## Component List

| DESIGNATION       |   QTY | DESCRIPTON                                                                   |
|-------------------|-------|------------------------------------------------------------------------------|
| D1                |     1 | Green LED (T1-3/4)                                                           |
| D2                |     1 | Yellow LED (T1-3/4)                                                          |
| D3                |     1 | Amber LED (T1-3/4)                                                           |
| D4                |     1 | Red LED (T1-3/4)                                                             |
| J1                |     1 | 2-pin jumper post                                                            |
| J2                |     1 | 2x10 right-angle receptacle                                                  |
| J3, J4, J5        |     3 | 2-pin jumper posts                                                           |
| Q1-Q4             |     4 | SOT23 n-channel FET transistors                                              |
| R1-R10            |    10 | SMT resistors (1206)                                                         |
| S1, S2, S3, S5-S8 |     7 | 3-pin jumper posts                                                           |
| S4                |     1 | 2-pin jumper post                                                            |
| U1                |     1 | 4Kb I 2 C/SMBus EEPROM with nonvolatile PIO (12 TQFN-EP*) Maxim DS28CZ04G-4+ |
| -                 |     1 | PCB: DS28CZ04 EVAL BOARD                                                     |

## DS28CZ04 Evaluation System

## Evaluates:  DS28CZ04

Figure 1. Typical Setup

<!-- image -->

## Quick Start

Note: In  the  following  sections,  software-related  items are  identified  by  bolding.  Text  in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## Required Equipment

-  PC running Windows XP or 2000 OS
-  Spare USB port on the PC

## Evaluation Board

The DS28CZ04 EV board provides a proven PCB layout to facilitate evaluation of the DS28CZ04. It must be interfaced to appropriate timing signals for proper operation. The  DS28CZ04  EV  board  is  a  simple  circuit  with  the DS28CZ04  located  on  top  of  the  board  and  a  rightangle, 20-pin, female connector located on the leftmost side  of  the  board.  This  female  20-pin  connector  plugs into  the  CMAXQUSB  command  module  and  connects the power (VCC), ground return (GND), data (SDA), and clock (SCL) pins of the DS28CZ04. See the DS28CZ04 Evaluation Board Schematic .

## Evaluation System

The DS28CZ04 EV system is defined to be the DS28CZ04 EV board coupled with the CMAXQUSB command module  and  the  evaluation  software.  The  DS28CZ04  EV board connects to the appropriately labeled pins on the CMAXQUSB command module. See location P3 labeled 'MAX  SMBus  COMPATIBLE  INTERFACE'  in  Figure  2. The evaluation software runs under the Windows XP/2000

Figure 2. CMAXQUSB with DS28CZ04 EV Board

<!-- image -->

## Evaluates:  DS28CZ04 DS28CZ04 Evaluation System

OS, interfacing to the EV board through the computer's USB  port.  See  the Quick-Start  Sequence section  for setup and operating instructions.

- 7)    Start  the  EV  kit  software  by  double-clicking  the  file DS28CZ04\_Evaluation\_Program.exe in the file folder containing the unzipped evaluation software files.

## Quick-Start Sequence

- 1)    Before beginning, make sure the following equipment is available:
-    DS28CZ04  EV  system  (contains  DS28CZ04  EV board and CMAXQUSB module)
-  PC running Windows XP/2000 OS with a spare USB port
- 2)  Do the following before connecting to the PC:
- a.    Select +5V logic by setting the CMAXQUSB VDD SELECT jumper.
- b.    Install  the  master reset jumper S5 (text label MRZ) to  VCC  (jumper  center  pin  to  pin  on  left)  and  the address jumpers S1 (text label A1) and S2 (text label A2) on the DS28CZ04 EV board (see Figure 2).
- c.    Install the write-protect S4 (text label WP) jumper to allow writing to the device.
- d.    Connect the EV board to the CMAXQUSB board with the 20-pin connector at location P3 (the I 2 C/ SMBus pins).
- 3)    Download the evaluation software from Maxim's EV kit software page or from the EV kit's QuickView: www. maximintegrated.com/DS28CZ04EVKIT . The evaluation software is provided as a .zip archive file. Unzip the archive's contents into an empty or newly created directory.
- 4)    Connect  the  USB  cable  between  the  CMAXQUSB and the computer. When you plug in the CMAXQUSB board for the first time, the Windows Plug-and-Play system  detects  the  new  hardware  and  automatically runs the Add New Hardware Wizard .  Be sure to  specify  the  search  location  for  the  device  driver, which is the directory where the evaluation software files were unzipped.
- 5)    During  device  driver  installation,  Windows  displays a warning message indicating that the device driver Maxim uses does not contain a digital signature. This is not an error condition. It is safe to proceed with the installation.
- 6)    The Microsoft  .NET  framework  Version  1.1 is required for the program to run. If it is not installed, refer  to  the  following  website  for  download  and installation  instructions:  http://msdn.microsoft.com/ netframework/downloads/framework1\_1/.
- 8)    If  any  problems  occur  during  device  driver  installation, refer to Application Note 3601: Troubleshooting Windows Plug-and-Play and USB for Maxim Evaluation Kits for more details.

## EV Kit Usage

The  following  EV  kit  usage  examples  demonstrate what steps to take to utilize the different features of the DS28CZ04.

## Setup

- 1)    Install  the  files  as  described  in  the Quick-Start Sequence section.
- 2)    Install the master reset jumper S5 (text label MRZ) to VCC (jumper center pin to pin on left).
- 3)    Set the desired physical slave address by changing the S1 (text label A1) and S2 (text label A2) switches for address lines A1 and A2. Note that the A1 or A2 pin can be shorted to ground (jump center pin to pin on left) or VCC (jump center pin to pin on right) (see Figure 2).
- 4)    Install  the write-protect S4 (text label WP) jumper to allow writing to the device.
- 5)    Plug in the DS28CZ04 EV board to the CMAXQUSB SMBus interface connector.
- 6)    Plug  in  the  CMAXQUSB  board  using  the  provided USB cable.

## PIO Output

- 1)  Complete setup.
- 2)    Select the Lower Memory Segment in the I2C Slave Address panel.
- 3)    Remove jumper from the corresponding input GPIO switch control to allow output control. For example, to set up PIO3 as an output, remove jumper on S3 (text label GPIO3) (see Figure 2).
- 4)    Add  jumper  to  output  LED  control.  For  example,  to set up PIO3 as an LED control, add jumper J1 (text label GPIO3).
- 5)    Select  the PIO tab  for  a  high-level  view  of  the  PIO features.  Alternately  select  the Status tab  to  select bit-level PIO features.

## Evaluates:  DS28CZ04 DS28CZ04 Evaluation System

## PIO Input

## Table 1. Lower/Upper Memory Segment Address

| LOWER MEMORY SEGMENT   | UPPER MEMORY SEGMENT   |
|------------------------|------------------------|
| A0                     | A2                     |
| A4                     | A6                     |
| A8                     | AA                     |
| AC                     | AE                     |

Figure 4 shows the first tab with the PIO selection. It provides feature settings for each of the four PIO channels. The PIO direction can be selected ( Input , Output ). If the PIO is  set  to Output ,  the  output  type  can  be  selected ( Push/Pull , Open Drain ) along with the value. For a PIO set to input, the read value is displayed in the Value field with  an  optional Read Inverted mode.  The  button Set As Power-on Default makes the settings the power-on default. The Refresh Display from Power-on Defaults sets the display options to match the device's power-on defaults. The PIO tab requires that the Lower Memory Segment is selected by the slave address.

The Status tab  (Figure  5)  allows  the  bit-level  features of  the  mode,  direction,  input/output  flags  to  be  set.  It displays  the  raw  control  and  the  status  registers  for the  GPIO  functionality.  The  status  tab  requires  that the Lower Memory Segment is  selected  by  the  slave address.  The  groups  of  information  found  on  this  tab represent the control/status registers of the DS28CZ04. Each  register  is  laid  out  such  that  the  value  can  be set  directly  or  individual  bits  can  be  toggled  using  the appropriate checkbox (in all cases, a 'checked' checkbox results in a '1' value for that bit).

The  first  group  of  bits  represents  the  control  register located at memory address 0x07A. The ADMD (Address Mode), CM (Communication Mode), and SFF (SFF-8472 Mode) bits can all be toggled in this group. The ADMD mode  bit  determines  whether  or  not  the  GPIO  input status  and  output  control  information  is  stored  in  one memory byte (ADMD = 1) or across four memory bytes (ADMD = 0). The CM bit determines whether the device uses SMBus timeouts (CM = 1) or no timeouts (CM = 0). The SFF bit selects whether the general-purpose memory address 0x16E contains user data (SFF = 0) or the status of TXF and LOS (SFF = 1). The BUSY bit is a status bit that is only checked if the DS28CZ04 is in the middle of a EEPROM write cycle. Finally, the DIR\_ checkbox for the appropriate GPIO pin can be used to set that pin as an input (DIR\_ = 1) or an output (DIR\_ = 0).

- 1)  Complete setup.
- 2)    Select the Lower Memory Segment in the I2C Slave Address panel.
- 3)    Remove jumper to output LED control. For example, to disable PIO1 as an LED control, remove jumper J3 (text label GPIO1) (see Figure 2).
- 4)    Add jumper to short PIO to either ground or VCC by using a switch. For example, to set the input value for PIO1, move the jumper on switch S7 to either short the center pin to ground (on right) or VCC (on left).
- 5)    Select  the PIO tab  for  a  high-level  view  of  the  PIO features. Alternately, select the Status tab  to  select bit-level PIO features.

## Memory

- 1)  Complete setup.
- 2)    Select the Lower  Memory  Segment or Upper Memory Segment in the I2C Slave Address panel.
- 3)  Select the Read / Write tab.
- 4)    Verify  the  write-protect  S4  (text  label  WP)  jumper  is installed to allow writing to the device.
- 5)    Set  the  start  address  in  hex  (see  reference  of addresses at the bottom of the tab).
- 6)    Set the number of bytes to transfer with the Read Op or Write Op radio button.
- 7)  Click the Execute Memory Op to perform the function.

## Detailed Description of Software

The software is  a  single  screen  with  multiple  tabs  that divide  the  features  into  logical  divisions.  The  topmost panel  allows  for  the  configuration  of  the  device's  I 2 C slave  address.  If  the  address  is  unknown,  clicking  the Find  Slave  Address button  finds  and  reports  the  first address  on  the  bus  that  responds.  This  is  the Lower Memory  Segment address  referred  to  in  the  IC  data sheet  as  Device  Address  =  A0.  The  label  to  the  right of the Set Slave Address button indicates whether the upper or lower memory segment is selected. To select the  upper  memory segment then manually change the hex slave address to set bit 1, click Set Slave Address . For  example,  with  the  default  address,  set  it  to  A2. See Table 1 to select the upper memory segment. The address panel is visible while viewing any of the featurespecific tabs.

## Evaluates:  DS28CZ04 DS28CZ04 Evaluation System

Figure 3. Jumper Examples

<!-- image -->

## DS28CZ04 Evaluation System

## Evaluates:  DS28CZ04

Figure 4. PIO Tab

<!-- image -->

The second group of bits represents the control register located at memory address 0x07B. The OT\_ bits control the output type of each GPIO, where each GPIO can be configured as either an open-drain (OT\_ = 1) or pushpull (OT\_ = 0) output. The IMSK\_ bits control the input inversion mask for each GPIO, where each input can be optionally inverted (IMSK\_ = 1) or left alone to show the actual line status (IMSK\_ = 0).

The last group of bits represents the GPIO output value control and input value status register(s). If ADMD is set, these values are stored in one memory byte at 0x07C, otherwise  they  are  spread  across  four  memory  bytes from 0x07C to 0x07F. The GIV\_ bits reflect the current input  level  on  the  line  whether  high  (GIV\_  =  1)  or  low (GIV\_ = 0). The GOV\_ represents the output level on the line whether it is being driven high (GOV\_ = 1) or driven low (GOV\_ = 0). Note that if the output is configured as an open-drain output, driving the output value high will only  result  in  floating  the  gate,  and  the  input  level  (if unconnected to another driving device or a pullup) will be unpredictable.

Figure 5. Status Tab

<!-- image -->

The Save  Values  To  Power-On  Default button  at  the bottom saves the value of SFF, DIR\_, GOV\_, OT\_, and IMSK\_ to a EEPROM register that is read on power-up to restore the state of these bits.

The Read / Write tab (Figure 6) allows easy read or write access to the general-purpose memory areas, as well as the control registers. Simply specify the start address to begin reading from, specify the number of bytes to read, and select Read Op .  Then, click the Execute Memory Op button  and  a  hexadecimal  representation  of  the memory contents is displayed in the large text area. The values  can  be  edited  by  replacing  them  with  the  new memory contents, selecting Write Op ,  and clicking the Execute Memory Op button.

## Evaluates:  DS28CZ04 DS28CZ04 Evaluation System

Figure 6. Raw Memory Read/Write Tab

<!-- image -->

The Raw I2C tab (Figure 7) provides low-level communication tools for the device. It allows for raw I 2 C commands, including start, stop, write, and read (last byte is always 'not acknowledged'). This tab is useful for testing custom I 2 C communication sequence.

Figure 7. Raw I 2 C Tab

<!-- image -->

## Online Resources

DS28CZ04  IC  Data  Sheet: www.maximintegrated.com/ DS28CZ04

CMAXQUSB  User's  Guide: www.maximintegrated.com/ CMAXQUSB

## Evaluates:  DS28CZ04 DS28CZ04 Evaluation System

## DS28CZ04 Evaluation Board Layout

<!-- image -->

## Evaluates:  DS28CZ04 DS28CZ04 Evaluation System

## DS28CZ04 Evaluation Board Schematic

<!-- image -->

## Evaluates:  DS28CZ04 DS28CZ04 Evaluation System

## DS28CZ04 Evaluation Board Schematic (continued)

<!-- image -->

## Evaluates:  DS28CZ04 DS28CZ04 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                   | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 8/06            | Initial release.                                                                                              | -               |
|                 1 | 8/06            | Corrected schematic and composite view to include pullup on WP. Added text to install WP jumper during setup. | 9, 10, 11       |
|                 2 | 10/09           | Created newer, template-style data sheet.                                                                     | All             |

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.