<!-- lastmod 2022-08-03 -->
## DS28E05 Evaluation Kit

## General Description

The DS28E05 evaluation system (EV system) provides the hardware  and software necessary to evaluate the DS28E05 1-Wire ®  EEPROM. The hardware consists  of  an  evaluation  board  (DS9120P)  with  RJ11 cable, a Maxim 1-Wire adapter module (DS9481R-3C7) that  connects  the  board  to  the  PC,  and  a  DS28E05  in a  TSOC  package.  All  three  hardware  components  are listed in Table 1.

The  DS28E05  features  112  bytes  of  user  memory organized as seven pages of 16 bytes. Each page can be write-protected or set into EPROM emulation mode. The evaluation  software  runs  under  Windows ®   8,  Windows 7, Windows Vista ® , or Windows XP ® , providing a handy user interface to exercise the features of the DS28E05. The evaluation software is available for download.

## Features

- Driver Support for Windows 8, Windows 7, Windows Vista, and Windows XP
- Fully Compliant with USB Specification v2.0
- USB Powered with No External Power Supply Required
- USB to 1-Wire Adapter Utilizes Both the Prolific PL-2303HXD and the Maxim DS2480B Emulator to Create a Virtual COM-to-1-Wire Port on Any PC
- Accommodates TSOC Package IC

## Table 1. Required Hardware for PC Evaluation

| PART         |   QTY | DESCRIPTION                       |
|--------------|-------|-----------------------------------|
| DS9120P+     |     1 | EV board with RJ11 cable          |
| DS9481R-3C7+ |     1 | 1-Wire USB adapter with USB cable |
| DS28E05+     |     5 | in a TSOC package                 |

1-Wire is a registered trademark of Maxim Integrated Products, Inc. Windows, Widows Vista, and Windows XP are registered trademarks and registered service marks of Microsoft Corporation.

Evaluates: DS28E05

## Quick Start-Driver Installation

See Figure 1 for a photo of the stand-alone EV board with RJ11 cable and Figure 2 for a photo of the 1-Wire adapter with USB cable that plugs into the PC.

## Required Equipment

- DS9481R-3C7 1-Wire adapter with USB cable
- DS9120P EV board with RJ11 cable
- DS28E05 in a TSOC package
- PC with a Windows 8, Windows 7, Windows Vista, or Windows XP operating system and a spare USB port

Figure 1. DS9120P EV Board with RJ11 Cable

<!-- image -->

Figure 2. DS9481R-3C7 1-Wire USB Adapter with USB Cable

<!-- image -->

Ordering Information appears at end of data sheet.

<!-- image -->

## DS28E05 Evaluation Kit

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The  EV  kit is fully  assembled  and  tested.  Before connecting  to  the  PC,  follow  the  steps  below  to  verify board operation:

- 1) Insert  the  DS28E05  in  the  TSOC  socket  on  the DS9120P EV board.
- 2) Connect the DS9120P EV board to the DS9481R-3C7 1-Wire adapter with the RJ11 cable.
- 3) Do not insert the DS9481R-3C7 into the PC at this time. This should be done in step 12, after all driver software is installed.
- 4) To  install  the  PL-2303HX  Prolific  Driver  (for  the DS9481R-3C7),  visit http://prolificusa.com/portfo -lio/pl2303hx-rev-d-usb-to-serial-bridge-controller/ to download the latest version of the Prolific Windows Driver Installer Setup Program,  PL2303\_Prolific\_ DriverInstaller\_v1\_9\_0.zip.
- 5) Unzip  the  archive  and Run the  executable  file  that begins with PL2303\_Prolific\_DriverInstaller .
- 6) Follow the directions of the Install  Wizard until  the PL-2303 USB-to-serial driver installation is finished. Close by clicking the Finish button.
- 7) [Visit www.maxim-ic.com/1-wiredrivers/ to  down-](http://www.maxim-ic.com/1-wiredrivers/)
8. load and install the 1-Wire Drivers software package.
- 8) When prompted with the question Do you want to run or save this file? , select Run .
- 9) When you get a security warning that asks Do you want to run the software? , select Run .
- 10)  Read  and  check  the  box  if  you  accept  the  license agreement and click Install .  Click the Finish button to exit the Setup Wizard .
- 11)  Microsoft .NET Framework Version 3.5 SP1 or newer is required for the program to run. To check whether it  is  installed,  look  in  the Control Panel under Programs and Features .  If  .NET  is  not  listed,  it  is  not installed.  For  download and installation instructions, go to www.microsoft.com/en-us/download/details. aspx?id=22 .
- 12)  Insert  the  DS9481R-3C7  into  a  spare  USB  port  on the PC.
- 13)  Determine the COM port by looking in Control Panel → System → Hardware tab  → Device  Manager and expand Ports (COM &amp; LPT) . The port is Prolific USB-to-Serial Comm Port (COM2) . See Figure 3.

## Quick Start-Software Setup

After  downloading  the  software  from  the  URLs  listed in  the  previous Quick  Start section,  and  unzipping  and saving  the  files  to  a  folder,  start  the  EV  kit  software  by double-clicking  the  file DS28E05\_Evaluation\_Program. exe .

Figure 3. DS9481R-3C7 COM Port

<!-- image -->

│

## DS28E05 Evaluation Kit

Note: Make sure that the hardware has been connected correctly and follow the steps below:

- 1) In  the 1-Wire Adapter group box on the Setup tab (Figure  4),  the Adapter Port Type is  fixed  at USB (COM) with  the Adapter  Part  #  of  DS9481R-3C7 . The Adapter  Port is  a  COM  port  mapped  by  the Prolific  device.  Click  on  the Open  Adapter/Port button or on the Auto-Search button.  If  successful, the Status field next to the Open Adapter/Port button displays Success .
- 2) The  device  selection  options  are  displayed  in  the Device Selection Methods group box in the Setup tab.
- 3) The default setting for the EV kit software is MatchROM in the ROM Selection Method drop-down list. Also, the Use Search-ROM to find the first avail -able  EV  kit  device is  checked  by  default.  Retain these default selections for quick setup.
- 4) Once the adapter/port has been opened, the DS28E05 Device  Selection drop-down  list  is  automatically populated  with  the  unique  ROM  ID  of  the  available DS28E05s. If no device is found on the 1-Wire, the selection is blank. In that case, insert the device and click  the Refresh  Selection button.  A  device  must be  present  to  go  to  the Memory tab  to  exercise the device.
- 5) Once  the  device  has  been  selected,  click  on  the Memory tab  (Figure  5).  Select  the  memory  range from  the Memory  Resource  Selection drop-down list.
- 6) Once a memory range has been selected, the available commands appear in the Commands group box below Memory Resource Selection drop-down list. The commands appear as buttons.
- 7) Select a command by clicking on one of the command buttons. The button is highlighted in yellow to indicate which command is selected.
- 8) Once a command is selected, the Options group box below the Commands buttons is populated with the required options for the command. Select the options and click the Execute Command button to execute the selected command with the options provided.
- 9) The  output  of  the  selected  command  is  displayed in  the Log group  box  in  a  scrollable  field. The Key describing the output in the log is provided at the bottom of the Log group box. The window can be resized

or maximized to enlarge the Log group box.

- 10)  The log can be copied to the clipboard through the File/Copy Log to Clipboard menu item. The log can be cleared through the File/Clear Log menu item.
- 11)  The  program  can  be  ended  through  the File/Exit menu item.

## Detailed Description of Software

The software program's main window (Figure 4) contains three tabs: Setup , Memory , and Raw 1-Wire . The starting tab is Setup , which contains the 1-Wire adapter/port and device selection options. The Memory tab shown in Figure 5 contains the main demo with four areas from top to  bottom: Memory  Resource  Selection , Commands , Options ,  and Log .  The Raw  1-Wire tab  shown  in Figure 4 contains buttons and fields to send and receive raw 1-Wire communication.

The  software  window  contains  a  menu  at  the  top,  as seen in Figure 4. The log can be copied to the clipboard through the File/Copy Log to Clipboard menu item. The log can be cleared through the File/Clear Log menu item. The Help menu displays the version of the software. The File/Exit menu exits the EV kit software.

## Setup Tab

The Setup tab  sheet  (Figure  4)  contains  two  sections: 1-Wire Adapter and Device Selection Methods .

## 1-Wire Adapter Group Box

The 1-Wire Adapter group box includes adapter type and port  selection.  This  setup  is  required  before  performing operations on a connected device. Only the Adapter Port Type of USB (COM) is supported with Adapter Part # of DS9481R-3C7 . Once the Adapter Port Type is selected, click on the Open Adapter/Port button. If the adapter is detected, Success is displayed in the status field to the right of the button. If the adapter is not detected, an error message is displayed. If this happens, fix the problem and click  the  button  again.  Optionally,  use  the Auto-Search button to search through all available COM ports to find the DS9481R-3C7.

The Auto-Open checkbox instructs the program to automatically  open  the  selected  adapter  and  port  when  the program starts. This should be used if the adapter port combination does not change. The Open Adapter/Port button does not need to be clicked if the Auto-Open was checked  when  the  application  started  and Success is displayed in the status field.

Figure 4. Evaluation Software Main Window-Setup Tab

<!-- image -->

## Device Selection Methods Group Box

The Device Selection Methods group box in the Setup tab instructs the Memory tab operations on how to select the  device  using  the  ROM  (read-only  memory)  level 1-Wire commands. The 1-Wire protocol uses the unique 64-bit  registration  number  (ROMID)  as  the  network address of the device.

The ROM  Selection  Method drop-down  list  has  two options: Match-ROM and Skip-ROM . Match-ROM uses the  ROM  ID  to  select  the  device  with  the  Match-ROM command. Because this operation uses the ROM ID, it needs  to  know  this  number  in  advance.  Consequently, when  selecting Match-ROM ,  the Use  Search-ROM  to find  first  available  EVKit  device ( Recommended )  is automatically checked. This operation finds the available DS28E05 on the network and populates the drop-down list.  The  first  device  found  is  selected  by  default.  If  the contents of the 1-Wire network are changed, the Refresh Selection button can be clicked to refresh the list. Note that the message below the device list indicates if there are other non-DS28E05 devices present on the network found during the search. The Skip-ROM option calls on the  Skip-ROM  command  to  select  any  device  present. Only use this option if there is  only  one  device  present on the 1-Wire. If multiple devices are present, they are all selected at once, potentially causing collisions. A warning message to that  effect  is  displayed  if  potential  conflicts are detected when changing to the Memory tab.

The Use 'Resume' command when possible checkbox instructs the Memory tab operations to use the Resume command. The Resume command is a shortcut command to  select  the  same  device  previously  selected  with  the ROM-level command.

Overdrive  speed  is  used  at  all  times  because  the DS28E05 are overdrive-only devices.

## Memory Tab

The Memory tab  (Figure  5)  contains  five  sections: Memory  Resource  Selection , Commands , Options , Log , and Key

## Memory Resource Selection

The  contents  of  this  drop-down  list  mirror  the  memory resources  described  in  the  DS28E05  IC  data  sheet. Selecting  a  memory  resource  automatically  displays the  commands  available  to  operate  on  this  memory  in the Commands group  box.  Most  ranges  at  a  minimum provide the Read command.

## Commands/Options

Once a memory range has been selected, one or more command  buttons  appear  in  the Commands group box  depending  on  the  properties  of  the  memory  range. Clicking on one of the command buttons highlights it in yellow.  Clicking  on  the  command  button  also  populates the Options group  box  with  fields  and/or  components representing  the  options  offered  for  the  command.  The options  offered  change  depending  on  the  command selected  and  the  selected  memory  range's  properties. Once the options have been set, the command can be performed by clicking on the Execute Command button in the Options group box.

The following sections list all possible commands and the corresponding options.

Figure 5. Evaluation Software Main Window-Memory Tab

<!-- image -->

## DS28E05 Evaluation Kit

## Read Memory

The Read  Memory command  (Figure  6)  is  applicable to all memory ranges. Possible options are the Starting Address and Read Length in  the  drop-down  lists. The Starting  Address list  is  populated  with  all  possible addresses  in  the  selected  memory  range.  The Read Length is  populated from 1 to the maximum size of the memory range.

## Write Memory

The Write  Memory command  is  applicable  to  those memory locations that are not read-only. For the DS28E05, this  is  the  address  range of 0000h to 0073h. There are two  sets  of  options  for  the Write  Memory command. The  first  set  of  options  pertains  to  a  general-purpose memory write, which writes a 2-byte segment on a data

Evaluates: DS28E05

page (Figure 7). The page written to must not have Write Protect enabled; otherwise, the write fails. The New Data must be 2 bytes of hex digits.

The  second  set  of Write  Memory options  pertains  to the  memory  range  of  0070h  to  0073h.  When  these memory locations are written, they turn on special options associated  with  each  page  of  the  DS28E05's  memory on  a  page-by-page  basis.  The Write  Protect option (Figure  8)  uses  the  standard,  general-purpose  Write Memory command but formats that data to set the desired protection.  The  following  options  are  provided  as  radio buttons: Write  Protect , EPROM Emulation Mode ,  and Open . Open selects  no  protection  and  is  the  default state. Once protection has been set on a page, it cannot be changed.

<!-- image -->

Figure 6. Read Memory Command Options

Figure 7. Write Memory Command Option for General-Purpose Writing

<!-- image -->

Figure 8. Write Memory Command Options for Write Protect and EPROM Emulation Mode

<!-- image -->

│

## DS28E05 Evaluation Kit

## Log

The Log group  box  consists  of  a  scrollable  output  field and  a Key to  explain  the  output.  The  output  field  displays  all  communication  with  the  DS28E05,  along  with comments to describe the operations. The log contents can be copied to the system clipboard for pasting into a document or email message through the File/Copy Log to  Clipboard menu item. The Log can  also  be  cleared with the File/Clear Log menu item. The program window can be resized to expand the Log group box for easier viewing.  The  text  in  the Log group  box  is  also  colorcoded. This  color  coding  is  preserved  when  copying  to another program. See Table 2 for a detailed explanation of the key to the log contents.

## Table 2. Log Key

| KEY                   | DESCRIPTION                                                                                                                                                                                                                      |
|-----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RP                    | 1-Wire reset and presence pulse response. Color-coded blue for the reset pulse and red for the response.                                                                                                                         |
| RN                    | 1-Wire reset and no-presence pulse response. Color-coded blue for the reset pulse and red for the response.                                                                                                                      |
| <SP_ON>/<SP_OFF>      | 1-Wire strong pullup on/1-Wire strong pullup off. Strong pullup is used to provide additional current to the device during operations such as EEPROM write.                                                                      |
| HH - write to device  | 1-Wire write from master to device represented by a pair of hex digits showing the byte that was transmitted. Valid for a line that does not begin with a comment symbol '//'. Color-coded blue.                                 |
| [HH] - read to device | 1-Wire read from device represented by a pair of hex digits bounded by brackets '[ ]' showing the byte that was received. Valid for a line that does not begin with a comment symbol '//'. Color-coded red.                      |
| B                     | 1-Wire write bit from master to device, represented by a single binary digit (1/0). Valid for a line that does not begin with a comment symbol '//'. Color-coded blue.                                                           |
| [B]                   | 1-Wire read bit from master to device, represented by a single binary digit (1/0) bounded by brackets '[ ]' showing the bit that was received. Valid for a line that does not begin with a comment symbol '//'. Color-coded red. |
| <<>>                  | Indicates an error with the error message between the '<< >>'. Color-coded purple.                                                                                                                                               |
| <STD>/<OVR>           | Indicates 1-Wire line speed: <STD> for standard and <OVR> for overdrive. This symbol is logged before every 1-Wire reset pulse and when the speed changes as in an Overdrive Match command. Color-coded blue.                    |
| // line comment       | Indicates a line that is not 1-Wire communication, but is instead commentary on the operation performed. Color-coded black.                                                                                                      |

│

## Raw 1-Wire Tab

The Raw 1-Wire tab sheet (Figure 9) provides the facilities to send and receive any raw 1-Wire communication. This  can  be  used  to  recreate  some  of  the  operations seen  on  the Memory tab  or  to  experiment  with  other operations. It can also be used on 1-Wire devices other than the DS28E05 since it provides direct access to the 1-Wire  network. All  the  operations  are  recorded  in  the Log group  box  on  the Memory tab,  as  well  as  on  the bottom of the Raw 1-Wire tab for later examination and copying. The operations available on the Raw 1-Wire tab are divided into two group boxes: Low Level and ROM Level .

Evaluates: DS28E05

Figure 9. The DS28E05 EV Kit Software: Main Window-Raw 1-Wire Tab

<!-- image -->

## DS28E05 Evaluation Kit

## Low Level Group Box

The Low Level group box provides the low-level 1-Wire primitives  that  can  be  used  to  construct  any  1-Wire communication  sequence.  The 1-Wire  Reset button issues  a  reset  low  presence  at  the  speed  specified in  the  drop-down  list  to  the  right  of  the 1-Wire  Reset button. The Read Bytes button reads the number of bytes specified in the input field to the right of the button. The Write Bytes button writes the bytes displayed in the input field to the right of the button. The Write Bytes input field is also a drop-down list that remembers all previous writebyte sequences. The Write 1 Bit and Write 0 Bit buttons write the indicated bit to the 1-Wire network.

The Start Strong-Pullup after next  Byte button starts  the  1-Wire  strong  pullup  power  delivery  after  the next  communication  byte  (either  read  or  write).  The Start  Strong-Pullup  after  next  Bit button  starts  the 1-Wire  strong  pullup  power  delivery  after  the  next communication bit (either read or write). The Set Power Normal button disables the 1-Wire strong pullup power delivery. The Power Down 1-Wire button powers down the 1-Wire. Any 1-Wire operation returns the 1-Wire to a normal state.

Note: The  following  items  in  the Low Level group box of  the Raw  1-Wire tab  can  be  used  for  other  1-Wire products, but are not used for evaluating the DS28E05:

- The 7V  VCC  Pulse  (100ms) button  enables  a  7V pulse on the PULSE pin of the DS9481R-3C7. This is not necessary to evaluate the DS28E05.
- The 12V 1-Wire Pulse button enables a 512µs pulse on  the  1-Wire  to  support  EPROM  programming. A  warning  message  displays  before  the  operation completes.

Warning: Do  not  use  this  feature  when  evaluating DS28E05, as it could result in damage to the DS28E05.

## ROM Level Group Box

The ROM Level group box has 1-Wire macros that implement  the  1-Wire  ROM  commands.  These  commands use the 64-bit unique ROM ID that each 1-Wire device is embedded with for device discovery and selection. The ROM to  use  with  ROM  commands  (auto  filled  with Search-ROM and Read-ROM) input  field  is  used  with the  ROM  macros  to  select  a  device.  This  field  can  be manually edited to input the ROM ID of the device selected or the field is auto filled by clicking on the following buttons: Reset - Search-ROM (first), Reset - SearchROM (next) , and Reset -Read ROM .

The Reset  -  Search-ROM  (first) button  performs  the Search  ROM  command  sequence  to  discover  the  first device  on  the  network.  The  ROM  ID  and  the  binary search  sequence,  not  physical  location,  determine  the order  of  the  devices  discovered.  Refer  to  Application Note 187: 1-Wire Search Algorithm for details.

The Reset - Search-ROM (next) button continues where the last binary search left off and finds the next device. Both of these search buttons use the command entered in  the Search Command input  field.  The  default  command  is  F0  (hex)  Search  ROM.  Alternatively,  this  can be filled in with the Conditional Search ROM command EC  (hex).  However,  this  command  is  not  valid  for  the DS28E05.

The Reset  -  Skip  ROM button  sends  a  1-Wire  reset followed  by  the  CC  (hex)  Skip  ROM  command.  This selects all devices on the 1-Wire. It should only be used if there is only one DS28E05 on the network.

The Reset - OD Skip ROM button sends a 1-Wire reset followed by the Overdrive-Skip ROM command 3C (hex) and changes the 1-Wire speed to overdrive.

The Reset  -  Resume button  sends  a  1-Wire  reset followed by the Resume command A5 (hex).

The Reset -  Match  ROM button  sends  a  1-Wire  reset followed first by the Match ROM command 55 (hex) and then by the 8 bytes of the ROM ID in the ROM input field at  the  top  of  the ROM Level group  box.  If  there  is  no ROM ID in the input field, a warning displays.

The Reset - OD Match ROM button sends a 1-Wire reset followed  by  the  Overdrive-Match  ROM  command  69 (hex), changes the 1-Wire speed to overdrive, and then sends the 8 bytes of the ROM ID in the ROM input field at the top of the ROM Level group box.

The Reset  -  Read  ROM button  sends  a  1-Wire  reset followed by the Read ROM command 33 (hex) and then reads the 64-bit ROM ID of the device. The CRC-8 within the number is checked to verify a valid ROM ID. A warning is logged if the CRC-8 is not valid. The ROM ID is also loaded into the ROM input field to be used by the other ROM macro buttons.

## Detailed Description of Hardware

Refer to the DS9481R-3C7 and DS9120P IC data sheets for detailed hardware descriptions.

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| DS28E05EVKIT# | EV Kit |

#Denotes an RoHS-compliant device that may include lead(Pb), which is exempt under the RoHS requirements.

## DS28E05 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0axim Integrated reserves the right to change the circuitr\ and specifications without notice at an\ time.

│

Evaluates: DS28E05