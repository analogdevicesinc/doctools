<!-- lastmod 2022-08-03 -->
## MAX98390 Evaluation System

## General Description

The MAX98390C/D evaluation system (EV system) evaluates  the  MAX98390C  or  the  MAX98390D  boosted Class D audio amplifier with integrated Dynamic Speaker Management ™ (DSM) IC. DSM senses the voltage and current at the load and uses patented Maxim algorithms to  unlock  the  full  potential  of  the  speaker.  The  EV  sys -tem  comprises  the  MAX98390C  or  the  MAX98390D Development Board (DEV board), Maxim's Audio Interface Board III (AUDINT3), 5V power supply, reference micro -speaker,  USB  cable,  DSM  Sound  Studio  software,  and MAX98390 evaluation software.

It is recommended that the DEV board be evaluated with the  AUDINT3  board  as  an  EV  system.  MAX98390C/D supports standard I 2 S, left-justified, and TDM digital audio interfaces, as well as I 2 C for control.

The AUDINT3 board provides 1.8V DVDD, USB-to-PCM, and USB-to-I 2 C interfaces that are needed to evaluate the DEV board, requiring only a single external power supply for VBAT. The Simplified EV System Block Diagram details the DEV board and the AUDINT3 board.

The easy-to-use DSM Sound Studio software has a simple, yet powerful graphical user interface (GUI) that breaks down the  DSM design process into  three  basic  steps:  extract,  tune, and evaluate.  Additionally, DSM Sound Studio provides for a 7 minute quick demo to hear the DSM difference using the included reference microspeaker.

## Features

- Complete Hardware System with Easy Setup, No Tools or Special Equipment Required
- Precharacterized Reference Microspeaker Included
- Easy-to-Use Graphical User Interfaces Software (Windows ® 7/10 Compatible)
- DSM Sound Studio
- Quick Demo Using Included Speaker
- Extract: Speaker Parameter Extraction
- Tune: Full Acoustic Tuning Suite
- Evaluate: Compare Different Tunings
- MAX98390 Evaluation Software
- Complete Access to All Hardware Registers

## EV System Contents

- MAX98390C or MAX98390D development board
- Audio Interface Board III
- 5V power supply, 100V to 240V
- Micro-USB cable
- Reference micro speaker
- Temporary adhesive for mounting microspeaker to DEV board

Ordering Information appears at end of data sheet.

There  is  also  the  MAX98390  evaluation  software  that provides complete access to all hardware registers.

Windows is a registered trademark and registered service mark of Microsoft Corporation. Dynamic Speaker Management is a trademark of Maxim Integrated Products, Inc.

Evaluates: MAX98390 (C/D)

<!-- image -->

## MAX98390 Evaluation System

## Simplified EV System Block Diagram for MAX98390C

<!-- image -->

## Simplified EV System Block Diagram for MAX98390D

<!-- image -->

Evaluates: MAX98390 (C/D)

## MAX98390 Evaluation System

## Software Installation

- 1) For  the  latest  software,  login  to  your  MyMaxim  ac -count at m aximintegrated.com and navigate to  MAX98390  &gt;  Design  Resources  &gt;  Software. Download DSMSoundStudio\_vx.x.xx.zip, and MAX98390EVSwSetupvx\_x\_x.zip. Extract each com -pressed folder by first selecting the folder, click and hold (or right-click) the folder, select Extract All, and then follow the instructions.
- 2) Install  the  DSM  Sound  Studio  software  on  your computer by running the program installer DSMSoundStudio\_vx.x.xx.msi. Follow the install -er prompts  to completion.  The application icon, labeled  as  DSM  Sound  Studio,  is  located  under Windows &gt; Maxim Integrated .
- 3) Install the MAX98390 Evaluation Soft -ware by running the program installer MAX98390EVSwSetupvx\_x\_x.exe. Follow the in -staller prompts to completion. Windows might display a  message  indicating  that  this  software  is  from  an unknown publisher. This is not an error condition and it is safe to proceed with the installation. The application icon is located at Windows &gt; Maxim Integrated .

## Quick Start Guide

## DSM Sound Studio GUI

It is highly recommended to start with DSM Sound Studio. DSM Sound Studio is an easy to use GUI that will walk the user through a quick DSM demo, speaker parameter extraction,  acoustic  tuning  of  all  the  DSM  features,  and provide  for  rapid  comparison  of  various  tuning  profiles. DSM Sound Studio also shows the user how to properly set up the hardware. Refer to DSM User Guide https:// www.maximintegrated.com/en/design/technical-documents/userguides-and-manuals/dsm-user-guide. html for more information.

To  launch  the  DSM  Sound  Studio  application,  navigate to Windows &gt; Maxim Integrated and click on the DSM Sound Studio application icon.

To  set  or  modify  the  device's  hardware  configurations such  as  sample  rate,  boost  parameters,  or  brown-out detection use the MAX98390 evaluation software (see the MAX98390 Evaluation Software ).

## MAX98390 Eval uatio n Software

## Required Equipment

- MAX98390C or MAX98390D EV system
- Audio Interface Board III
- 5V power supply
- Micro-USB cable
- Microspeaker with enclosure
- USB audio source (e.g., Windows Media Player ®  or iTunes ® )
- User-supplied Windows 7 or Windows 10 PC with an available US B port

## Evaluates: MAX98390 (C/D)

## Required Software

- MAX98390 evaluation software application. If not already installed, see the Software Installation section.

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  evaluation  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Reference Material

- MAX98390C/D IC data sheet

## Procedure

The  MAX98390C,  or  the  MAX98390D  and  AUDINT3 boards are fully assembled and tested. Follow the steps below to set up the EV system for device evaluation:

## AUDINT3 Board Setup

- 1) Connect  the DEV  board  (J1 connector) to the AUDINT3 board (J1 connector).
- 2) With  the  audio  source  disabled,  connect  the  USB cable from your computer to the USB port (J2) on the AUDINT3 board. The AUDINT3 board provides  the power  for  DVDD,  sourcing  1.8V  to  the  DEV  board through the J1 connector.
- 3) The multicolor LED D1 blinks white. When the com -puter  registers  the  AUDINT3  as  a  USB  device  D1 changes to magenta and blinks slowly.

## DEV Board Setup

- 1) Wit h the 5V power supply unpowered, insert the DC power jack into the DC power connector (J10) located underneath the DEV board.
- 2) Connect the micro speaker leads across the SPKP and SPKN binding posts. Alternatively, use the spring connector terminal (J3) by pressing down the orange tab and inserting the bare speaker wire into the round holes of the connector, releasing the tab to allow the connector to grip the wire. A nonpermanent adhesive is included with the MAX98390C/D evaluation system and can be used to mount the microspeaker to the DEV board on the open space marked with the speaker sym -bol. The adhesive helps keep the speaker from rattling on the board during the evaluation. Be careful not to

Windows Media is a registered trademark and registered service mark of Microsoft Corporation. iTunes is a registered trademark of Apple, Inc.

## MAX98390 Evaluation System

cover  any  holes  in  the  speaker  enclosure  when mounting using the temporary adhesive. It is common for microspeaker enclosures to include small holes for pressure equalization.

- 3) Place the shunt on jumper JU1 across pins RESETB and DVD D.

## Test

- 1) Insert the 5V power supply into a wall receptacle.
- 2) Launch  the  MAX98390  evaluation  software  and  wait while the software connects to the EV system (Figure 1).
- 3) Once  the  connection  is  established,  the  status  bar at the bottom of the GUI window should report USB Connected and display MAX98390 and revision ID. After  the  EV  system  is  fully  connected,  configure the device by loading the usb\_audio\_48kHz.98390 configuration file. This  file  can  be  loaded  from File, Load  Register  Settings,  Pre-Installed  Configuration Files. Scroll  down  to  select.  Progress  of  the register  writes  can  be  seen  in  the  Status  Bar  as  a green  progress  bar,  wait  for  the  writes  to  complete before operating the device.
- 4) Access  the  Windows  Sound  settings  by Settings  &gt; System &gt; Sound . Select the output device to be Max -im AUDINT003, it should appear as Speakers (3-Maxim AUDINT003 ADC1.0) or something similar, see Figure 2 . On the same page, click on Sound Control Panel &gt; Playback tab and ensure that the Default Device is set to Speakers (3-Maxim AUDINT003 ADC1.0) or some -thing similar, as shown in Figure 3.
- 5) Adjust the audio source volume to a low level.
- 6) Enable the audio source and verify that audio is heard through  the  connected  speaker.  Adjust  the  audio source volume as needed.
- 7) Quick start of the evaluation software is now complete.

## Detailed Description of Evaluation Software

The  MAX98390  evaluation  software  is  designed  to  be used only with the MAX98390C/D EV system. The soft -ware provides an intuitive GUI for programming the device and includes many features intended to aid in evaluation.

The MAX98390  evaluation software main window ( Figure 1) is composed of four main sections: menu bar, communication tool bar, tabbed pages, and a status bar. The menu bar provides additional features to aid evalua -

## Evaluates: MAX98390 (C/D)

tion, the toolbar provides basic functionality for communi -cating with the device, and the status bar provides infor -mation about hardware connectivity and communication status. The tabbed pages make up the bulk of the GUI and provide the controls for programming  the  device's hardware registers.

The Block Diagram tab provides access to all the device registers using dialog windows, which contain GUI con -trols  for  configuring  the  device. The dialog windows are opened by clicking  on  the  blocks  in  the  block  diagram. The Control  Registers tab  provides  direct  access  to the  valid  registers  from  0x2000-0x23FF,  as  well  as  to the revision ID register, 0x24FF. The DSP Registers tab provides access to the registers for the 8-band equalizer, the  dynamic  range  compression,  the  voice  coil  thermal protection,  and  the  speaker  excursion  protection.  The Log tab provides a log of the I 2 C transactions and a tool to read specific registers.

The  MAX98390  evaluation  software  is  compatible  with Windows  7  and  Windows  10  and  can  be  found  on Maxim's website. Refer to the MAX98390C/D data sheet for device register information.

## Connect Sequence

When the evaluation software starts for the first time, the program  automatically  connects  to  the  EV  system  and attempts to connect to the USB control interface on the AUDINT3 board first. Once that connection is established, it  searches  for  all  I 2 C  addresses  associated  with  the MAX98390C/D device and populates all detected device addresses  in  the Active  Device drop-down  list.  During this sequence, the text on the Connect button automatically changes from Connect to Disconnect , and the status bar is also updated to reflect the current state of the hardware connection.

Once  the  EV  system  is  fully  connected,  the  button displays Disconnect ,  and  when  clicked,  it  disconnects the  software  from  the  hardware. The  software  can  also be disconnected from the hardware by selecting Device | Disconnect from the menu bar.

There are two methods to reestablish a connection with the hardware. The first is by selecting Device | Connect from  the  menu  bar.  This  instructs  the  program  to  con -nect to the EV system. The second method is to click the Connect button until it displays Disconnect , which signi -fies that the EV system is fully connected.

<!-- image -->

Figure 1. MAX98390 Evaluation Software

Figure 2. Windows Sound Settings

<!-- image -->

Figure 3. Playback Device

<!-- image -->

## MAX98390 Evaluation System

## Communication Tool Bar

The  tool  bar  consists  of  seven  buttons,  a  drop-down combo box, and a display box. These controls are always accessible,  regardless  of  the  active  tabbed  page.  The tool bar is shown in Figure 4 and Table 1 provides details about each control.

## Status Bar

The Status bar is divided into four sections. From left to right: status and alert messages, device part number and revision  ID,  interface  name  and  firmware  version,  and evaluation system connection status.

## Interrupt Status Panel

The  Interrupt  Status  panel  (not  to  be  confused  with  the Status  bar)  displays  the  state  of  the Raw , State ,  and Flag interrupts.  This  data  is  read  from  the  Raw\_,  State\_,

Evaluates: MAX98390 (C/D)

and Flag\_ interrupt registers (0x2002-0x200A). When the image  is  red,  it  indicates  that  the  associated  interrupt  bit has been set.

The  panel  also  includes  checkboxes  for  each  interrupt that  are  used  to  enable  the  link  between  an  interrupt's Flag bit and State bit. When enabled, the Flag bit is set whenever the State bit is set. To clear the State and Flag bits, click on the interrupt's associated Clear button.

## Note:

- Each interrupt source must be enabled for the FLAG column (i.e., flag bits) to be set.
- The IRQ\_EN bit needs to be set for the interrupt to be output on the IRQ pin.

Figure 4. Communication Tool Bar

<!-- image -->

## Table 1. Communication Tool Bar Controls

| CONTROL                  | FUNCTION                                                                                                                                                                                                                                                                                                                                          |
|--------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| On                       | Press to set the Global Enable bit (EN). This enables the device.                                                                                                                                                                                                                                                                                 |
| Off                      | Press to clear the Global Enable bit (EN). This disables the device. Note: The software can communicate with a disabled device, as long as its I 2 C interface remains active.                                                                                                                                                                    |
| Active Device            | Provides a list of detected I 2 C addresses. The displayed address is the active device.                                                                                                                                                                                                                                                          |
| Connect/Disconnect       | See the Hardware Connection section for additional details.                                                                                                                                                                                                                                                                                       |
| Connect                  | Detected addresses are shown in the Active Device drop-down list.                                                                                                                                                                                                                                                                                 |
| Disconnect               | Press to disconnect from the USB control interface.                                                                                                                                                                                                                                                                                               |
| Read All                 | Press to initiate a read of all device registers. The Control Registers and Block Diagram tabs are updated to reflect the read data.                                                                                                                                                                                                              |
| Write All                | Press to initiate a write to all device registers, using the settings shown on the Control Registers tab.                                                                                                                                                                                                                                         |
| Reset                    | Press to reset device registers to their power-on-reset (POR) state.                                                                                                                                                                                                                                                                              |
| Read Ambient Temperature | Press to read the ambient temperature of the application board from external temperature sensor U2. The temperature in degrees Celsius is displayed in the display box to the left. This sensor measures the ambient temperature of the board and is used by the DSM Sound Studio software to set the room temperature value of a tested speaker. |

## MAX98390 Evaluation System

## Block Diagram Tab

The  evaluation  software  uses  an  interactive  block  dia -gram  to  facilitate  the  programming  of  the  device.  The block diagram also provides a visual representation of the device's functions and current configuration.

There  are  three  types  of  blocks  in  the  block  diagram, and they are identified by the cursor image. The cursor changes to a pointing hand when over a block that opens a  dialog  window  and  a  full  hand  to  toggle  a  function.  If the  cursor  does  not  change  when  over  a  block,  then  it is an inactive block, and is only provided for illustrational purposes.

## Evaluates: MAX98390 (C/D)

The color of a diagram block changes depending on the enabled  state  of  the  device  function(s)  associated  with that block. An inactive block is grey, a disabled block is white, and an enabled block is teal. Figure 5 shows the block diagram with the device configured for digital audio interface (DAI) (USB audio) input and speaker output.

## Dialog Windows

Dialog windows are associated with specific blocks in the block  diagram  and  contain  the  controls  for  configuring the registers associated with that functional block. Open a  dialog  window  by  clicking  on  a  dialog  block.  Figure  7 shows the typical GUI controls that are found on a dialog window.

Figure 5. MAX98390 Block Diagram (USB Audio Input to Speaker Output)

<!-- image -->

Figure 6. Control Register Tab

<!-- image -->

## MAX98390 Evaluation System

## Control Registers Tab

The Control  Registers tab  provides  two  methods  for configuring  the  device. As  an  example,  Figure  6  shows the elements of the interrupt registers.

The  first  configuration  method  involves  clicking  on  the register's bit labels. A non-bold bit label indicates that the bit is currently set low. A bold bit label indicates that the bit is currently set high. Clicking on a bit toggles its state and results in a write to that register. This action also updates the value displayed in the register's edit box, located to the right of the bit labels.

The  second  configuration  method  involves  entering  a hex  value  in  the  register's  edit  box  and  then  pressing

Figure 7. Typical GUI Controls

<!-- image -->

## Evaluates: MAX98390 (C/D)

the Enter key; the software automatically configures the device register once the Enter key is pressed. The state of  the  bit  labels  are  then  updated  to  reflect  the  value shown in the edit box.

Note: Trying to write to a read-only bit by clicking/toggling its label or entering a hex value in its edit box updates the GUI, but it does not affect the bit's value in the device. All read-only bits are updated to reflect their current value in the device by performing a read all operation.

All changes made on this tab are reflected on the Block Diagram tab and on any open dialog windows.

## MAX98390 Evaluation System

## Menu Bar

Table 2 describes all menu bar items with additional infor -mation  for  some  menu  items  provided  in  the  following sections.

## File I/O

The software's save and load features are accessed from the File menu.  The Save  Control  Register  Settings feature saves the data currently displayed on the Control Registers tab.

A configuration file's main purpose is to capture the current state of the device's registers, as displayed on the register tab. This feature makes it easy to program a device to a saved/known state and allows for the sharing of configura -tion files between users. To facilitate usage, use descriptive file names when saving a configuration file.

Table 2. Menu Bar Items

| MENU ITEM                             | DESCRIPTION                                                                                                                                                                                                      |
|---------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FILE                                  |                                                                                                                                                                                                                  |
| Load Register Settings                | Loads a configuration file (as saved by the Save Control Register Settings option or a factory preinstalled file).                                                                                               |
| Save Control Register Settings        | Saves a configuration file containing the current device settings.                                                                                                                                               |
| Exit                                  | Closes the MAX98390 evaluation software.                                                                                                                                                                         |
| DEVICE                                |                                                                                                                                                                                                                  |
| Connect                               | Runs a connection routine to connect to the evaluation system. First, establish a connection to the AUDINT3 board and then establish a connection to the MAX98390C/D.                                            |
| Disconnect                            | Disconnects the PC from the EV system.                                                                                                                                                                           |
| Reset                                 | Resets all control registers to their power-on-reset (POR) states.                                                                                                                                               |
| Read All                              | Performs a read from all registers and updates the GUI.                                                                                                                                                          |
| Write All                             | Performs a write to all writeable registers, using the values show on the Control Registers tab and then updates the GUI.                                                                                        |
| Read Rev ID                           | Reads the device's revision ID register and updates the status bar.                                                                                                                                              |
| OPTIONS                               |                                                                                                                                                                                                                  |
| Audio Interface 3 (Advanced Users) F3 | Opens a dialog that allows the digital clocks from the AUDINT3 to be enabled or disabled. This allows the user to apply external clocks to the MAX98390C/D without conflicting with the clocks from the AUDINT3. |
| Interface Selection                   | Selects the I 2 C hardware interface to either the audio interface or an I 2 C bridge (not supported).                                                                                                           |
| Configuration Mode F4                 | Opens a dialog that allows multiple MAX98390C/D devices to be selected for configuration through the software. This feature is available only when more than one active device is detected.                      |
| Activate Demo Mode                    | Puts the software in demo mode.                                                                                                                                                                                  |
| VIEW                                  |                                                                                                                                                                                                                  |
| Communication Log                     | Toggles the Log sheet display in the Device Registers Control Tabs.                                                                                                                                              |
| HELP                                  |                                                                                                                                                                                                                  |
| View Help                             | Links to technical documents.                                                                                                                                                                                    |
| About                                 | Provides information about the MAX98390 evaluation software.                                                                                                                                                     |

## Evaluates: MAX98390 (C/D)

The save and load features are functional even when the hardware is not connected. This allows configuration files to be created and opened when hardware is not available. Since the configuration file is automatically generated by the software, it is not meant to be manually formatted and doing so may cause file loading issues. To open a configu -ration file for viewing purposes only, use a plain text editor.

Select File &gt; Save Control Register Settings to create a configuration file. The register address and its data are saved as tab-delimited values and the file is saved with a .98390 extension.

The  software  has  a  couple  standard  configuration  files pre-installed.  A  file  can  be  loaded  by  selecting File  &gt; Load Register Settings &gt; Pre-Installed Configuration Files , and using the drop-down menu, select the file, then clicking Load .

## MAX98390 Evaluation System

## Detailed Description of Hardware

The  MAX98390C/D  EV  system  is  designed  to  allow  for a  thorough  evaluation  of  the  MAX98390C/D  boosted Class  D  audio  amplifier  IC  with  integrated  Dynamic Speaker Management. The EV system includes either the MAX98390C or the MAX98390D development board (DEV board), Maxim's Audio Interface Board III (AUDINT3), 5V power supply, and a microspeaker.

The DEV board can be evaluated as a standalone  board  that  is  driven  directly  by  audio  test equipment, powered  by multiple external supplies, and  configured  by  an  external  I 2 C  capable  controller. To simplify the evaluation, the DEV board can be evalu -ated with the AUDINT3 board and the included 5V power supply. This hardware combination provides an easy-touse method for exercising the capabilities of the device with no additional audio equipment.

The AUDINT3 board provides an on-board LDO regulator, USB-to-PCM, and USB-to-I 2 C interfaces. The AUDINT3 LDO  regulator  is  used  to  power  the  device's  DVDD supply  rail  through  connector  J1.  The  USB-to-PCM converter  accepts  a  USB  audio  stream  from  a  USB connected computer and converts that into an I 2 S data stream,  allowing  for  USB  audio  playback  through  the MAX98390C/D  device.  The  USB-to-I 2 C  interface  is  the bridge  that  allows  the  evaluation  software  to  configure, monitor, and control the I 2 C capable devices on the DEV and AUDINT3 boards.

## Ambient Temperature Sensor

A  temperature  sensor,  DS7505,  is  included  on  the DEV  Board.  The  sensor  is  connected  to  the  I 2 C  bus, permanently set to address 0x90, and is used by the DSM Sound  Studio  software  to  measure  the  ambient  room temperature.

## Measuring Quiescent Current

To  accurately  measure  the  quiescent  current  of  the MAX98390C/D, the power LED and temperature sensors can  be  temporarily  disabled  by  removing  resistors  R25 and R29.  The AUDINT3 should be disconnected from J1, and DVDD (1.8V) must then be powered by an external power  supply.  I 2 C  control  and  PCM  audio  can  then  be connected  using  J2  on  the  DEV  board.  To  return  to normal operation, reinstall R25 and R29.

## Power Supplies

The  DEV  board  requires  at  least  two  external  power supplies  when  evaluated  as  a  stand-alone  board.  The power  supplies  and  their  ranges  are  listed  in Table  3 . The  external  supply  voltages  can  be  connected  at  the

## Evaluates: MAX98390 (C/D)

respective supply test-points and/or binding posts. When using the AUDINT3 board, connect the included 5V power supply  to  VBAT  (J10).  The  AUDINT3's  on-board  LDO regulator powers DVDD on the DEV board. This power is routed to the DEV board through the J1 connector. See the Digital Audio Interface section.

## Jumper Selection

The DEV board includes jumper JU1 to facilitate a device reset.  Table  4  describes  the  JU1  configuration  options. Note: Before starting evaluation, ensure that the jumper is configured as needed.

## Digital Audio Interface

The  device  DAI  is  routed  to  interface  header  J2  as well  as  the  AUDINT3  connector  J1.  The  interface headers  provide  easy  access  to  the  device's  PCM bus and the  AUDINT3  connector  allows for  USB audio  to  be  streamed  onto  the  DEV  board.  See  the USB Audio Input section for details on USB audio stream -ing and Table 6 for the connector J1 pinout.

## DAI Header

The DAI header (J2) provides access to the MAX98390C/D master clock (MCLK) input, as well as its PCM bus (BCLK, LRCLK,  DIN,  and  DOUT).  This  DAI  header  facilitates evaluation with audio equipment I/O. See Table 5 for the pinout of the DAI headers and Figure 8 for an illustration of how the MAX98390C/D DAI interface is routed through the DAI headers to the AUDINT3 connector.

## Table 3. Power Supplies

| POWER SUPPLY   | RANGE (V)      |
|----------------|----------------|
| VBAT           | 2.65V to 5.5V  |
| DVDD           | 1.71V to 1.89V |

## Table 4. Jumper Configuration

| HEADER   | SHUNT POSITION   | DESCRIPTION      |
|----------|------------------|------------------|
| JU1      | RESETB to DVDD   | Normal operation |
| JU1      | RESETB to GND    | Device is reset  |

## Table 5. DAI Header (Portion of J2)

| SIGNAL   |   PIN |   PIN | SIGNAL   |
|----------|-------|-------|----------|
| GND      |     3 |     4 | MCLK     |
| GND      |     5 |     6 | BCLK     |
| GND      |     7 |     8 | LRCLK    |
| GND      |     9 |    10 | DIN      |
| GND      |    11 |    12 | DOUT     |

## MAX98390 Evaluation System

## Table 6. AUDINT3 Connector (J1)

Figure 8. MAX98390C/D DAI Interface Headers (PCM)

| SIGNAL   |   PIN | SIGNAL       |   PIN | SIGNAL   |   PIN |
|----------|-------|--------------|-------|----------|-------|
| -        |     1 | AUDINT_MCLK  |     2 | GND      |     3 |
| BCLK2    |     4 | AUDINT_BCLK  |     5 | GPIO1    |     6 |
| LRCLK2   |     7 | AUDINT_LRCLK |     8 | GPIO2    |     9 |
| DAC2     |    10 | AUDINT_DIN   |    11 | GPIO3    |    12 |
| ADC2     |    13 | AUDINT_DOUT  |    14 | GPIO4    |    15 |
| -        |    16 | ID           |    17 | 3.3V     |    18 |
| AVDD     |    19 | DVDD         |    20 | GND      |    21 |
| HPVD     |    22 | VDDIO        |    23 | GND      |    24 |
| GND      |    25 | SDA          |    26 | 5V       |    27 |
| -        |    28 | SCL          |    29 | 5V       |    30 |
| GND      |    31 | IRQ          |    32 | RESET    |    33 |
| -        |    34 | DOUT         |    35 | WDT      |    36 |
| GND      |    37 | ICC          |    38 | MCLK     |    39 |

<!-- image -->

## Watch Dog Timer

Header J9 is present only  on  the  MAX98390C Development Board.  It  is  used  to  connect  the  external  signal  for  the hardware  mode  of  the  watch  dog  function.  J9  may  be left  open  or  shorted  if  the  function  is  not  enabled.  See Table 7 for the pinout of header J9.

Evaluates: MAX98390 (C/D)

## Table 7. Watch Dog Timer Header

| SIGNAL   |   PIN |   PIN | SIGNAL   |
|----------|-------|-------|----------|
| GND      |     1 |     2 | WDT      |

## MAX98390 Evaluation System

## Speaker Output

The MAX98390C/D audio output is routed to the SPKP and SPKN connections on the DEV board. The DEV board is,  by  default,  assembled  to  allow  the  MAX98390C/D output to connect directly to a speaker load without the need for filtering.

## EMI Filter

When long speaker cables  are  used  with  the  MAX98390C/D output, a ferrite bead plus capacitor filter can be installed to prevent excessive EMI radiation. Although it is best to choose filter components based on EMI test results, the combination of 680pF capacitors (C11, C12) and Murata BLM18SG331TN1  ferrite  beads  (FB1,  FB2)  generally work  well.  Before  adding  the  filters  to  the  design,  first remove the small PCB traces shorting FB1 and FB2 (see the MAX98390C EV Kit Schematic and the MAX98390C EV Kit PCB Layout Diagrams ).

## I 2 C Interface

The MAX98390C/D's I 2 C interface is routed to header J2 and connector J1. The J1 connector is for the AUDINT3 board and connects the device's I 2 C interface to the I 2 C interface of the AUDINT3 board. This connection allows the MAX98390 evaluation software to read and write to the device. See Table 8 .

A portion of header J2 allows for an external I 2 C controller to connect to the device's I 2 C bus. See Table 8 .

## Device Address

The  MAX98390C/D  I 2 C  device  address  can  be  con -figured  to  one  of  eight  values:  0x70  (default),  0x72, 0x74,  0x76,  0x78,  0x7A,  0x7C,  or  0x7E.  The  device address  is  set  by  connecting  the  device's  ADDR1  pin to GND, SDA, SCL, or DVDD and ADDR2 pin to DVDD or  GND.  This  is  accomplished  by  installing  0Ω  resis -tors  in  one  of  the  R13-R16  locations  for  ADDR1  and one  of  the  R20-R21  locations  for  ADDR2.  For  proper address programming, only one resistor is used for each ADDR pin.  R13-R16  and  R20-R21  are  located  on  the bottom  side  of  the  board  and  are  identified  with  silk screen. See Table 9 for all I 2 C slave address options.

## Audio Interface Board III

Maxim's Audio Interface Board III (AUDINT3 board) facili -tates the evaluation of the DEV board by providing a set of features that can be used to exercise the capabilities of  the  DEV  board  without  the  need  for  additional  audio

## Evaluates: MAX98390 (C/D)

equipment. The main components of the AUDINT3 board are  LDO  supply  voltages  and  USB-to-I 2 C  and  USB-toPCM interfaces. The supply voltages allow the DEV board to be evaluated with minimal amount of external supplies. The  USB-to-PCM  converter  allows  any  computer  to  be used as an audio source for the DEV board's digital audio PCM interface,  and  the  USB-to-I 2 C  interface  allows  for the  use  of  the  MAX98390  evaluation  software,  making device configuration and monitoring simpler.

The DEV board connects to the AUDINT3 board through connector  J1.  The  physical  connections  made  between the DEV board and AUDINT3 board are listed in Table 6 .

## USB Audio Input

To  utilize  the  USB  streaming  feature  of  the  AUDINT3 board, connect the USB cable from the computer to the micro  USB  connector  J2  on  the  AUDINT3  board  and ensure that the AUDINT3 board is connected to the DEV board.

Once the hardware is ready, use the MAX98390 evalua -tion software to configure and enable the device for DAI audio playback.

## Table 8. I 2 C Header (Portion of J2)

| SIGNAL   |   PIN |   PIN | SIGNAL   |
|----------|-------|-------|----------|
| GND      |    15 |    16 | SDA      |
| GND      |    17 |    18 | SCL      |

## Table 9. I 2 C Address Resistors

| RESISTOR (ADDR1)   | RESISTOR (ADDR2)   | I 2 C ADDRESS   |
|--------------------|--------------------|-----------------|
| R16 (GND)          | R21 (GND)          | 0x70*           |
| R13 (DVDD)         | R21 (GND)          | 0x72            |
| R15 (SDA)          | R21 (GND)          | 0x74            |
| R14 (SCL)          | R21 (GND)          | 0x76            |
| R16 (GND)          | R20 (DVDD)         | 0x78            |
| R13 (DVDD)         | R20 (DVDD)         | 0x7A            |
| R15 (SDA)          | R20 (DVDD)         | 0x7C            |
| R14 (SCL)          | R20 (DVDD)         | 0x7E            |

*Default position.

Note: Only one resistor for each ADDR column should be populated.

## MAX98390 Evaluation System

## Stereo Configuration

For stereo evaluations, a stereo auxiliary kit is available that  includes  a  modified  DEV  board  (stereo  companion board),  microspeaker,  power  supply,  and  20-pin  ribbon cable. See the Ordering Information section.

The Stereo Companion Board differs from the DEV board in the following ways:

- I 2 C address is set to 0x72.
- Ambient temperature sensor is not installed.
- J1 is not installed.

## Stereo Boards Setup

- 1) Configure the Stereo Companion board the same as the DEV board. See the DEV Board Setup section.
- 2) Insert the keyed 20-pin ribbon cable into the J2 con -nector on the Stereo Companion board, then connect the other end of the ribbon cable to the J2 connector on the fully configured DEV board. The ribbon cable bridges  the  DVDD  power  to  the  Stereo  Compan -ion board as well as connect DAI, I 2 C, and ICC; no additional AUDINT3 board is required.
- 3) Connect  the DEV  board  (J1 connector) to the AUDINT3 board (J1 connector).
- 4) Insert the DC power jack from one power supply into the DC power connector (J10) located underneath the Stereo Companion board.
- 5) Insert the DC power jack from the remaining power supply into the DC power connector (J10) located un -derneath the DEV board.

## Evaluates: MAX98390 (C/D)

## Stereo Testing

- 1) Insert both 5V power supplies into wall receptacles.
- 2) With  the  audio  source  disabled,  connect  the  USB cable from the computer to the USB port (J2) on the AUDINT3 board.
- 3) The multicolor LED D1 on the AUDINT3 blinks white. When the computer registers the AUDINT3 as a USB device D1 changes to magenta and blinks slowly.
- 4) Launch DSM Sound Studio and follow the prompts.
- 5) For  further  refinement  of  the  hardware  configura -tion,  launch  the  MAX98390  evaluation  software.  To select a device to configure, use the Active Device pulldown menu located in the top banner of the GUI. Once a device is selected, click the Read All button to refresh the settings of the GUI.

## Ordering Information

| PART              | TYPE                                                                                            |
|-------------------|-------------------------------------------------------------------------------------------------|
| MAX98390CEVSYS#   | Complete Evaluation System for the MAX98390C                                                    |
| MAX98390C-ST-AUX# | Add-on board and supplies for stereo applications with the MAX98390C. Requires MAX98390CEVSYS#. |
| MAX98390DEVSYS#   | Complete Evaluation System for the MAX98390D                                                    |
| MAX98390D-ST-AUX# | Add-on board and supplies for stereo applications with the MAX98390D. Requires MAX98390DEVSYS#. |

# Denotes RoHS compliant.

## MAX98390 Evaluation System

## MAX98390C EV Kit Bill of Materials

|   ITEM |   QTY | REF DES                        | VAR STATUS   | MAXINV                        | MFG PART #                                                                                    | MANUFACTURER                             | VALUE                 | DESCRIPTION                                                                                                                                                                    |
|--------|-------|--------------------------------|--------------|-------------------------------|-----------------------------------------------------------------------------------------------|------------------------------------------|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1 |     2 | C1, C24                        | Pref         | 20-000U1-D5                   | C0201C104K9PAC; GRM033R60J104KE19; C0603X5R0J104K030BC; C0201X5R6R3-104KNP                    | KEMET;MURATA; VENKEL;TDK                 | 0.1µF                 | CAPACITOR; SMT (0201); CERAMIC CHIP; 0.1µF; 6.3V; TOL = 10%; MODEL = X5R; TG = -55°C TO +85°C; TC = +/                                                                         |
|      2 |     1 | C2                             | Pref         | 20-000U1-H9                   | GRM033R61A104KE15; LMK063BJ104KP                                                              | MURATA; TAIYO YUDEN                      | 0.1µF                 | CAPACITOR; SMT (0201); CERAMIC CHIP; 0.1µF; 10V; TOL = 10%; MODEL =; TG = -55°C TO +85°C; TC = X5R                                                                             |
|      3 |     2 | C3, C4                         | Pref         | 20-0010U-BA12                 | GRM155R61A106ME44; GRM155R61A106ME11; 0402ZD106MAT2A; CL05A106MP5NUNC                         | MURATA;MURATA; AVX;SAMSUNG               | 10µF                  | CAPACITOR; SMT (0402); CERAMIC CHIP; 10µF; 10V; TOL = 20%; TG = -55°C TO +85°C; TC = X5R                                                                                       |
|      4 |     2 | C5, C6                         | Pref         | 20-0010U-P7                   | C1608X5R1E106M080AC; CL10A106MA8NRNC; GRM188R61E106MA73; ZRB18AR61E106ME01; GRT188R61E106ME13 | TDK; SAMSUNG ELECTRONICS; MURATA;;MURATA | 10µF                  | CAPACITOR; SMT (0603); CERAMIC CHIP; 10µF; 25V; TOL = 20%; TG = -55°C TO +85°C; TC=X5R                                                                                         |
|      5 |     1 | C7                             | Pref         | 20-0001U-B8                   | C0402C105K8PAC; CC0402KRX5R6BB105                                                             | KEMET;YAGEO                              | 1µF                   | CAPACITOR; SMT (0402); CERAMIC CHIP; 1µF; 10V; TOL = 10%; TG = -55°C TO +85°C; TC = X5R                                                                                        |
|      6 |     1 | C9                             | Pref         | 20-000U1-BA99                 | GRM033C71C104KE14                                                                             | MURATA                                   | 0.1µF                 | CAPACITOR; SMT (0201); CERAMIC CHIP; 0.1µF; 16V; TOL = 10%; TG = -55°C TO +125°C; TC = X7S                                                                                     |
|      7 |     5 | C10, C17, C19-C21              | Pref         | 20-0018P-27                   | C0402C180J5GAC; GRM1555C1H180JA01; C1005C0G1H180J050BA                                        | KEMET;MURATA;TDK                         | 18PF                  | CAPACITOR; SMT (0402); CERAMIC CHIP; 18PF; 50V; TOL = 5%; TG = -55°C TO +125°C; TC = C0G                                                                                       |
|      8 |     1 | C18                            | Pref         | 20-0047U-I7                   | GRM32ER61C476KE15                                                                             | MURATA                                   | 47µF                  | CAPACITOR; SMT (1210); CERAMIC CHIP; 47µF; 16V; TOL = 10%; MODEL = GRM SERIES; TG = -55°C TO +85°C; TC = X5R ; NOTE:NOT RECOMMENDED DUE TO FLUCTUATING AND EXTENDING LEAD TIME |
|      9 |     1 | C25                            | Pref         | 20-0001U-73                   | GRM033R60J105MEA2; C0603X5R0J105M030; CL03A105MQ3CSN                                          | MURATA;TDK; SAMSUNG                      | 1µF                   | CAPACITOR; SMT (0201); CERAMIC CHIP; 1µF; 6.3V; TOL = 20%; MODEL = GRM SERIES; TG = -55°C TO +85°C; TC = X5R                                                                   |
|     10 |     1 | D1                             | Pref         | 30-LTSTC190KGKT-00            | LTST-C190KGKT                                                                                 | LITE-ON ELECTRONICS INC.                 | LTST- C190KGKT        | DIODE; LED; SMT (0603); PIV = 5V; IF = 0.03A                                                                                                                                   |
|     11 |     3 | DVDD, PGND3, PGND4             | Pref         | EH111000002165                | 5023                                                                                          | KEYSTONE                                 | N/A                   | TEST POINT; PIN DIA = 0.100IN; TOTAL LENGTH = 0.200IN; BOARD HOLE = 0.0725IN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH                                                         |
|     12 |     1 | J1                             | Pref         | 01-TSW11308GTRA39P-19         | TSW-113-08-G-T-RA                                                                             | SAMTEC                                   | TSW-113-08- G-T-RA    | EVKIT PART; CONNECTOR; MALE; THROUGH HOLE; 0.025IN SQ POST HEADER; RIGHT ANGLE; 39PINS; MODIFY PIN NUMBERING ARRANGEMENT                                                       |
|     13 |     1 | J2                             | Pref         | 01-SBH11PBPCD10STBK20P-21     | SBH11-PBPC-D10-ST-BK                                                                          | SULLINS ELECTRONICS CORP                 | SBH11-PBPC- D10-ST-BK | CONNECTOR; MALE; THROUGH HOLE; HEADER; STRAIGHT; 20PINS                                                                                                                        |
|     14 |     1 | J3                             | Pref         | EH111000001242                | 1790283                                                                                       | PHOENIX CONTACT                          | 1790283               | CONNECTOR; FEMALE; THROUGH HOLE; GREEN TERMINAL BLOCK; PUSH-IN SPRING CONNECTION; RIGHT ANGLE; 2PINS                                                                           |
|     15 |     5 | J4, PGND6, SPKN2, SPKP2, VBAT1 | Pref         | 01-9020BUSS20AWG-00           | 9020 BUSS                                                                                     | WEICO WIRE                               | MAXIMPAD              | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                                                       |
|     16 |     1 | J9                             | Pref         | 01-PEC02SAAN2P-21             | PEC02SAAN                                                                                     | SULLINS                                  | PEC02SAAN             | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                                                                      |
|     17 |     1 | J10                            | Pref         | 01-EJ503A-27                  | EJ503A                                                                                        | MEMORY PROTECTION DEVICES INC            | EJ503A                | CONNECTOR; FEMALE; THROUGH HOLE; DC JACK; 5.5MM OD; 2.1MM ID; POSITIVE TIP CONNECTOR; RIGHT ANGLE; 3PINS                                                                       |
|     18 |     1 | JU1                            | Pref         | 01-PEC03SAAN3P-21             | PEC03SAAN                                                                                     | SULLINS                                  | PEC03SAAN             | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                                                      |
|     19 |     1 | L1                             | Pref         | 50-0001U-SM58                 | PIFE32251B-1R0MS                                                                              | CYNTEC                                   | 1UH                   | INDUCTOR; SMT (1210); FERRITE BOBBIN CORE; 1UH; TOL = ± -20%; 4.7A                                                                                                             |
|     20 |     4 | MH1-MH4                        | Pref         | 02-MS440014P-02               | 4C25MXPS; PMSSS4400025PH; 9900; 91735A102                                                     | MCMASTER-CARR                            | N/A                   | MACHINE SCREW; PHILLIPS; PAN; 4-40; 1/4IN; 18-8 STAINLESS STEEL                                                                                                                |
|     21 |     2 | MTH1, MTH2                     | Pref         | 02-MS440038P-02               | 91772A108; PHILLIPS-PAN_4-40X3/8IN; PMSSS4400038PH; 9901                                      | GENERIC PART                             | N/A                   | MACHINE SCREW; PHILLIPS; PAN; 4-40; 3/8IN; 18-8 STAINLESS STEEL; NOTE: SET TO OBSOLETE FOR PART NUMBER CORRECTION. KINDLY REFER TO PART NUMBER 91772A108;9901                  |
|     22 |     4 | PGND, SPKN, SPKP, VBAT         | Pref         | 02-TS14321132BP-01            | 111-2223-001                                                                                  | EMERSON NETWORK POWER                    | 111-2223-001          | MACHINE SCREW; THUMBSCREW; BANANA; 1/4-32IN; 11/32IN; NICKEL PLATED BRASS                                                                                                      |
|     23 |     1 | PVDD                           | Pref         | 02-TPMINI5002-00 80-0010K-49B | 5002                                                                                          | KEYSTONE                                 | N/A 10K               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER; NOT FOR COLD TEST RESISTOR; 0402; 10K Ω ; 5%; 200PPM; 0.063W; THICK FILM |
|     24 |     1 | R1                             | Pref         |                               | CRCW040210K0JN                                                                                | VISHAY DALE                              |                       |                                                                                                                                                                                |

Evaluates: MAX98390 (C/D)

## MAX98390C EV Kit Bill of Materials (continued)

|    |    |                          |    |            |                                      |                                  |          |                                                                                                     |
|--------|-------|---------------------------------|--------------|------------------|------------------------------------------------|----------------------------------------------|---------------|----------------------------------------------------------------------------------------------------------------|
|      |      |   |          |      |                                     |                                     |              |                                                               |
|      |      |                           |          |      |                                  |                                   |             |                                                             |
|      |      |                              |          |       |                                    |                                     |            |                                                             |
|      |      |                              |          |       |    |    |           |                                                           |
|      |      |                              |          |  |                      |         |       |   |
|      |      |                               |          |      |                                   |                                         |  |                                   |
|      |      |                               |          |      |                                        |                                         |       |                                                             |
|      |      |                              |             |               |                                |                                         |            |                                                                                            |





|    |    |                                                                                     |    |    |                                                   |        |    |                                                                                                                                                                     |
|------------------------|------------------------|---------------------------------------------------------------------------------------------------------|------------------------|------------------------|-----------------------------------------------------------------------|----------------------------|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                    |                     |                                                                                                  |              |                  |                                                             |                |                   |                                                                                                                                                                              |
|                       |                      |      |                     |        |                                                                   |                    |                     |                                                              |
|                       |                       |                                                                                                       |                     |           |     |   |                    |                                                                                                   |
|                       |                       |                                                                                                  |                     |                     |                                                                    |                         |                    |                                                                                                                                         |
|                       |                       |                                                                                                 |                     |                     |                                                                    |                         |                    |                                                                                                                                         |
|                       |                       |                                                                                                 |                     |           |                                            |         |                     |                                                                                                         |
|                       |                       |                                                                                                 |                     |                     |                                                                    |                         |                    |                                                                                                                                                 |
|                       |                       |                                                                                                       |                     |       |                                                              |    |               |                                                                                                                                |
|                       |                       |                                                                                                      |                     |            |                                                            |      |                     |                                                                                                     |
|                       |                       |                                                                                                      |                     |       |                                                              |                     |               |                                                                                                                                |
|                      |                       |                                                                            |                     |                     |                                                                    |                         |                    |                                                                                                                                                    |
|                      |                       |                                                                                                      |                     |                     |                                                                    |                         |                   |                                                                                                                                                    |
|                      |                       |                                                                                                 |                     |                     |                                                                    |                         |                    |                                                                                                                                                    |
|                      |                       |                                                                                                      |                     |            |                                                            |                   |                       |                                                                                                                                        |
|                      |                       |                                                                                                    |                     |        |                                                                   |                    |                     |    |
|                      |                       |                                                                                                    |                     |        |                                                                   |                    |                     |                                                                    |
|                   |                      |                                                                                                         |                        |                        |                                                                       |                            |                        |                                                                                                                             |

|    |    |    |    |    |    |    |    |
|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
|                                                                                         |                                                                                          |                                                                                      |                                                                                   |                                                                                       |                                                                                   |                                                                                        |                                                                                  |
|                                                                                            |                                                                                            |                                                                                      |                                                                                         |                                                                              |                                                                        |                                                                                          |                                        |
|                                                                                        |                                                                                            |                                                                                             |                                                                                             |                                                                                             |                                                                                             |                                                                                             |                                                                                             |

Evaluates: MAX98390 (C/D)

## MAX98390C EV Kit Schematic Diagram

<!-- image -->

## MAX98390 Evaluation System

## MAX98390C EV Kit PCB Layout Diagrams

MAX98390C EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX98390C EV Kit PCB Layout-Top View

<!-- image -->

## MAX98390C EV Kit PCB Layout Diagrams (continued)

MAX98390C EV Kit PCB Layout-Inner 1

<!-- image -->

MAX98390C EV Kit PCB Layout-Inner 2

<!-- image -->

## MAX98390C EV Kit PCB Layout Diagrams (continued)

MAX98390C EV Kit PCB Layout-Inner 3

<!-- image -->

MAX98390C EV Kit PCB Layout-Inner 4

<!-- image -->

## MAX98390C EV Kit PCB Layout Diagrams (continued)

MAX98390C EV Kit PCB Layout-Bottom View

<!-- image -->

MAX98390C EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

## MAX98390D EV Kit Bill of Materials Diagram

|   ITEM |   QTY | REF DES                        | VAR STATUS   | MAXINV                    | MFG PART #                                                                                    | MANUFACTURER                                    | VALUE                 | DESCRIPTION                                                                                                                                                                    |
|--------|-------|--------------------------------|--------------|---------------------------|-----------------------------------------------------------------------------------------------|-------------------------------------------------|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1 |     2 | C1, C24                        | Pref         | 20-000U1-D5               | C0201C104K9PAC; GRM033R60J104KE19; C0603X5R0J104K030BC; C0201X5R6R3-104KNP                    | KEMET;MURATA; VENKEL;TDK                        | 0.1µF                 | CAPACITOR; SMT (0201); CERAMIC CHIP; 0.1µF; 6.3V; TOL = 10%; MODEL=X5R; TG = -55°C TO +85°C; TC=+/                                                                             |
|      2 |     1 | C2                             | Pref         | 20-000U1-H9               | GRM033R61A104KE15; LMK063BJ104KP                                                              | MURATA; TAIYO YUDEN                             | 0.1µF                 | CAPACITOR; SMT (0201); CERAMIC CHIP; 0.1µF; 10V; TOL = 10%; MODEL=; TG = -55°C TO +85°C; TC=X5R                                                                                |
|      3 |     2 | C3, C4                         | Pref         | 20-0010U-BA12             | GRM155R61A106ME44; GRM155R61A106ME11; 0402ZD106MAT2A; CL05A106MP5NUNC                         | MURATA;MURATA; AVX;SAMSUNG                      | 10µF                  | CAPACITOR; SMT (0402); CERAMIC CHIP; 10µUF; 10V; TOL = 20%; TG = -55°C TO +85°C; TC=X5R                                                                                        |
|      4 |     2 | C5, C6                         | Pref         | 20-0010U-P7               | C1608X5R1E106M080AC; CL10A106MA8NRNC; GRM188R61E106MA73; ZRB18AR61E106ME01; GRT188R61E106ME13 | TDK; SAMSUNG ELECTRONICS; MURATA;;MURATA        | 10µF                  | CAPACITOR; SMT (0603); CERAMIC CHIP; 10µF; 25V; TOL = 20%; TG = -55°C TO +85°C; TC=X5R                                                                                         |
|      5 |     1 | C7                             | Pref         | 20-0001U-19               | C0402X5R6R3-105KNP; C1005X5R0J105K050BB; GRM155R60J105KE19; JMK105BJ105KV-F; JMK105BJ105KVHF  | VENKEL LTD;TDK; MURATA;TAIYO YUDEN; TAIYO YUDEN | 1µF                   | CAPACITOR; SMT (0402); CERAMIC CHIP; 1µF; 6.3V; TOL = 10%; TG = =-55°C TO +85°C; TC = X5R; NOT RECOMMENDED FOR NEW DESIGN-USE 20-0001u-B8                                      |
|      6 |     1 | C9                             | Pref         | 20-000U1-BA99             | GRM033C71C104KE14                                                                             | MURATA                                          | 0.1µF                 | CAPACITOR; SMT (0201); CERAMIC CHIP; 0.1µF; 16V; TOL = 10%; TG = -55°C TO +125°C; TC=X7S                                                                                       |
|      7 |     5 | C10, C17, C19-C21              | Pref         | 20-0018P-27               | C0402C180J5GAC; GRM1555C1H180JA01; C1005C0G1H180J050BA                                        | KEMET;MURATA;TDK                                | 18PF                  | CAPACITOR; SMT (0402); CERAMIC CHIP; 18PF; 50V; TOL = 5%; TG = -55°C TO +125°C; TC=C0G                                                                                         |
|      8 |     1 | C18                            | Pref         | 20-0047U-I7               | GRM32ER61C476KE15                                                                             | MURATA                                          | 47µF                  | CAPACITOR; SMT (1210); CERAMIC CHIP; 47UF; 16V; TOL = 10%; MODEL = GRM SERIES; TG = -55°C TO +85°C; TC = X5R ; NOTE:NOT RECOMMENDED DUE TO FLUCTUATING AND EXTENDING LEAD TIME |
|      9 |     1 | C25                            | Pref         | 20-0001U-73               | GRM033R60J105MEA2; C0603X5R0J105M030; CL03A105MQ3CSN                                          | MURATA;TDK; SAMSUNG                             | 1µF                   | CAPACITOR; SMT (0201); CERAMIC CHIP; 1µF; 6.3V; TOL = 20%; MODEL = GRM SERIES; TG = =-55°C TO +85°C; TC = X5R                                                                  |
|     10 |     1 | D1                             | Pref         | 30-LTSTC190KGKT-00        | LTST-C190KGKT                                                                                 | LITE-ON ELECTRONICS INC.                        | LTST-C190KGKT         | DIODE; LED; SMT (0603); PIV = 5V; IF = 0.03A                                                                                                                                   |
|     11 |     3 | DVDD, PGND3, PGND4             | Pref         | EH111000002165            | 5023                                                                                          | KEYSTONE                                        | N/A                   | TEST POINT; PIN DIA = 0.100IN; TOTAL LENGTH = 0.200IN; BOARD HOLE = 0.0725IN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH                                                         |
|     12 |     1 | J1                             | Pref         | 01-TSW11308GTRA39P-19     | TSW-113-08-G-T-RA                                                                             | SAMTEC                                          | TSW-113-08-G-T-RA     | EVKIT PART; CONNECTOR; MALE; THROUGH HOLE; 0.025IN SQ POST HEADER; RIGHT ANGLE; 39PINS; MODIFY PIN NUMBERING ARRANGEMENT                                                       |
|     13 |     1 | J2                             | Pref         | 01-SBH11PBPCD10STBK20P-21 | SBH11-PBPC-D10-ST-BK                                                                          | SULLINS ELECTRONICS CORP                        | SBH11-PBPC-D10- ST-BK | CONNECTOR; MALE; THROUGH HOLE; HEADER; STRAIGHT; 20PINS                                                                                                                        |
|     14 |     1 | J3                             | Pref         | EH111000001242            | 1790283                                                                                       | PHOENIX CONTACT                                 | 1790283               | CONNECTOR; FEMALE; THROUGH HOLE; GREEN TERMINAL BLOCK; PUSH-IN SPRING CONNECTION; RIGHT ANGLE; 2PINS                                                                           |
|     15 |     5 | J4, PGND6, SPKN2, SPKP2, VBAT1 | Pref         | 01-9020BUSS20AWG-00       | 9020 BUSS                                                                                     | WEICO WIRE                                      | MAXIMPAD              | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                                                       |
|     16 |     1 | J10                            | Pref         | 01-EJ503A-27              | EJ503A                                                                                        | MEMORY PROTECTION DEVICES INC                   | EJ503A                | CONNECTOR; FEMALE; THROUGH HOLE; DC JACK; 5.5MM OD; 2.1MM ID; POSITIVE TIP CONNECTOR; RIGHT ANGLE; 3PINS                                                                       |
|     17 |     1 | JU1                            | Pref         | 01-PEC03SAAN3P-21         | PEC03SAAN                                                                                     | SULLINS                                         | PEC03SAAN             | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                                                      |
|     18 |     1 | L1                             | Pref         | 50-0001U-SM58             | PIFE32251B-1R0MS                                                                              | CYNTEC                                          | 1µH                   | INDUCTOR; SMT (1210); FERRITE BOBBIN CORE; 1µH; TOL = ± 20%; 4.7A                                                                                                              |
|     19 |     4 | MH1-MH4                        | Pref         | 02-MS440014P-02           | 4C25MXPS; PMSSS4400025PH; 9900; 91735A102                                                     | MCMASTER-CARR                                   | N/A                   | MACHINE SCREW; PHILLIPS; PAN; 4-40; 1/4IN; 18-8 STAINLESS STEEL                                                                                                                |
|     20 |     2 | MTH1, MTH2                     | Pref         | 02-MS440038P-02           | 91772A108; PHILLIPS-PAN_4-40X3/8IN; PMSSS4400038PH; 9901                                      | GENERIC PART                                    | N/A                   | MACHINE SCREW; PHILLIPS; PAN; 4-40; 3/8IN; 18-8 STAINLESS STEEL; NOTE: SET TO OBSOLETE FOR PART NUMBER CORRECTION. KINDLY REFER TO PART NUMBER 91772A108;9901                  |
|     21 |     4 | PGND, SPKN, SPKP, VBAT         | Pref         | 02-TS14321132BP-01        | 111-2223-001                                                                                  | EMERSON NETWORK POWER                           | 111-2223-001          | MACHINE SCREW; THUMBSCREW; BANANA; 1/4-32IN; 11/32IN; NICKEL PLATED BRASS                                                                                                      |
|     22 |     2 | PGND2, PVDD                    | Pref         | 02-TPMINI5002-00          | 5002                                                                                          | KEYSTONE                                        | N/A                   | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER; NOT FOR COLD TEST                                                  |
|     23 |     8 | R5, R6, R16, R21, R23-R25, R28 | Pref         | 80-0000R-26A              | ERJ-2GE0R00                                                                                   | PANASONIC                                       | 0                     | RESISTOR; 0402; 0 Ω ; 0%; JUMPER; 0.10W; THICK FILM                                                                                                                            |
|     24 |     5 | R7-R11                         | Pref         | 80-0051R-49A              | CRCW040251R0JN                                                                                | VISHAY DALE                                     | 51                    | RESISTOR; 0402; 51Ω; 5%; 200PPM; 0.063W; THICK FILM                                                                                                                            |
|     25 |     1 | R27                            | Pref         | 80-0014K-18               | ERJ-2RKF1402                                                                                  | PANASONIC                                       | 14K                   | RESISTOR; 0402; 14KΩ; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                            |

## MAX98390D EV Kit Bill of Materials (continued)

|    |    |    |    |            |                                      |                                  |          |                                                                                                     |
|--------|-------|-----------|--------------|------------------|------------------------------------------------|----------------------------------------------|---------------|----------------------------------------------------------------------------------------------------------------|
|      |      |        |          |       |    |    |           |                                                           |
|      |      |        |          |  |                      |         |       |   |
|      |      |         |          |      |                                   |                                         |  |                            |
|      |      |         |          |      |                                        |                                         |       |                                                             |
|      |      |        |             |               |                                |                                         |            |                                                                                            |
|   |     |           |              |                  |                                                |                                              |               |                                                                                                                |

|    |    |                                                                         |    |    |                                                   |             |                                                                                                                                                                     |
|------------------------|------------------------|---------------------------------------------------------------------------------------------|------------------------|------------------------|-----------------------------------------------------------------------|---------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                    |                     |                                                                                      |              |                  |                                                             |                |                                                                                                                                                                              |
|                       |                      |      |                     |        |                                                                   |                      |                                                            |
|                       |                       |                                                                                           |                     |           |     |    |                                                                                                   |
|                       |                       |                                                                                      |                     |                     |                                                                    |                          |                                                                                                                                         |
|                       |                       |                                                                                     |                     |                     |                                                                    |                          |                                                                                                                                         |
|                       |                       |                                                                                     |                     |           |                                            |          |                                                                                                         |
|                       |                       |                                                                                     |                     |                     |                                                                    |                          |                                                                                                                                                 |
|                       |                       |                                                                                           |                     |       |                                      |                        |                                                                                                                                |
|                       |                       |                                                                                          |                     |            |                                      |                              |                                                                                                     |
|                       |                       |                                                                                          |                     |       |                                                       |                        |                                                                                                                                |
|                      |                       |                                                                |                     |                     |                                                                    |                          |                                                                                                                                                    |
|                      |                       |                                                                                          |                     |                     |                                                                    |                         |                                                                                                                                                    |
|                      |                       |                                                                                     |                     |                     |                                                                    |                          |                                                                                                                                                    |
|                      |                       |                                                                                          |                     |            |                                                            |                       |                                                                                                                                        |
|                      |                       |                                                                                        |                     |        |                                                                   |                      |    |
|                      |                       |                                                                                        |                     |        |                                                                   |                      |      |
|                   |                      |                                                                                             |                        |                        |                                                                       |                                 |                                                                                                                                                                                         |

|    |    |    |    |    |    |    |    |
|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
|                                                                                         |                                                                                          |                                                                                      |                                                                                   |                                                                                       |                                                                       |                                                                                        |                                                                                  |
|                                                                                            |                                                                                            |                                                                                      |                                                                                         |                                                                              |                                                            |                                                                                          |                                        |





Evaluates: MAX98390 (C/D)

## MAX98390D EV Kit Schematic Diagram

<!-- image -->

## MAX98390 Evaluation System

## MAX98390D EV Kit PCB Layout Diagrams

MAX98390D EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX98390D EV Kit PCB Layout-Top View

<!-- image -->

## MAX98390D EV Kit PCB Layout Diagrams (continued)

MAX98390D EV Kit PCB Layout-Inner 2

<!-- image -->

MAX98390D EV Kit PCB Layout-Inner 3

<!-- image -->

## MAX98390D EV Kit PCB Layout Diagrams (continued)

MAX98390D EV Kit PCB Layout-Bottom View

<!-- image -->

MAX98390D EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

## MAX98390 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                     | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------------------------------|-----------------|
|                 0 | 4/19            | Initial release                                                                 | -               |
|                 1 | 7/20            | Updated data sheet to reflect new packages and new silicon revision performance | All             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX98390 (C/D)