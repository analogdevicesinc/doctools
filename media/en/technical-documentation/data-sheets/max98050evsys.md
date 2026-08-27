<!-- lastmod 2022-08-03 -->
## MAX98050 Evaluation System

## General Description

The MAX98050 evaluation system (MAX98050EVSYS#) evaluates the MAX98050, a low-power, high-performance audio  CODEC  with  integrated  low-latency  digital  filters for  wireless  hearables, headsets, and headphones. The EV system is comprised of two MAX98050 Development Boards (DEV boards), Maxim's Audio Interface Board III (AUDINT3),  Maxim's  Dual  EVKit  Adapter  board,  and  a USB cable. In addition to the hardware, the MAX98050 Evaluation  Software  and  Hearable  Sound  Studio  Basic software are available for download.

It is recommended that the DEV boards be evaluated with the AUDINT3 board as an EV system. The EV system can be configured as Mono Hardware Setup (1 DEV board) or  Stereo  Hardware  Setup  (2  DEV  boards).  MAX98050 supports standard I 2 S, left-justified, and TDM digital audio interfaces, as well as I 2 C for control.

The AUDINT3 board provides all of the necessary supply voltages for proper operation of MAX98050. In addition, the AUDINT3 provides the USB-to-PCM and USB-to-I 2 C interfaces  that  are  needed  to  evaluate  the  system.  The Simplified EV System Block Diagrams show details of the DEV boards, Dual EVKit Adapter board and connection with the AUDINT3 board.

Evaluates: MAX98050

For  GUIs,  there  is  the  MAX98050  Evaluation  Software, which provides complete access to all hardware registers. There is also the Hearable Sound Studio Basic software, which facilitates the tuning of the onboard 5 band playback equalizer, digital filter channels, and the digital filter dynamic range compression (DRC).

## Benefits and Features

- Complete  Hardware  System  with  Easy  Setup,  No Tools or Special Equipment Required
- Easy-to-Use Graphical User Interfaces Software (Windows ® 10 Compatible)
- MAX98050 Evaluation Software Provides Complete Access to All Hardware Registers
- Hearable  Sound  Studio  Basic  for  Digital  Filter Design and Acoustic Hardware Evaluation

## EV System Contents

- Two MAX98050 Development Boards (DEV Boards)
- Audio Interface Board III (AUDINT3)
- Dual EVKit Adapter Board
- Micro-USB cable

Ordering Information appears at end of data sheet.

## Simplified EV System Block Diagram for MAX98050: Mono Hardware Setup

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

<!-- image -->

Evaluates: MAX98050

## Simplified EV System Block Diagram for MAX98050: Stereo Hardware Setup

<!-- image -->

│

## Software Installation

- 1) For  the  latest  software,  login  to  your  MyMaxim  account at maximintegrated.com and navigate to MAX98050 &gt; Design Resources &gt; Software. For the MAX98050, there are two GUIs available: MAX98050 Evaluation Software and Hearable Sound Studio Basic.  Download  each,  and  extract  each  compressed folder by first selecting the folder, click and hold (or right-click) the folder, select Extract All, and then fol -low the instructions.
- 2) Install the MAX98050 Evaluation Software by running the program installer. Follow the installer prompts to completion.  Windows  might  display  a  message  indicating that this software is from an unknown pub -lisher. This is not an error condition and it is safe to proceed with the installation.
- 3) Install  the  Hearable  Sound  Studio  Basic  software on  your  computer  by  running  the  program  installer. Follow the installer prompts to completion. Windows might display a message indicating that this software is  from  an  unknown  publisher.  This  is  not  an  error condition and it is safe to proceed with the installation.

## Quick Start Guide

For the MAX98050EVSYS#, there are two GUIs available: MAX98050  Evaluation  Software  and  Hearable  Sound Studio  Basic.  For  this  Quick  Start,  only  the  MAX98050 Evaluation Software will be used.

## Required Equipment

- MAX98050EVSYS#
- Two  MAX98050  Development  Boards  (only  one needed for this Quick Start)
- Audio Interface Board III (AUDINT3)
- Dual EVKit Adapter Board
- Micro-USB cable
- Windows 10 PC with USB port and USB audio source (e.g., Windows Media Player ®  or Apple Music ® )

## Required Software

- MAX98050  Evaluation  Software  application.  If  not already installed, see the Software Installation section.

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  evaluation  software.  Text  in bold  and  under -lined refers to items from the Windows operating system.

## Reference Material

- MAX98050 IC data sheet

## Procedure

Follow the steps below to set up the EV system for the device evaluation.

- 1) Connect  the  AUDINT3  Board  to  either  one  of  the MAX98050 Development Boards using the J1 connector.
- 2) Verify jumper settings: JU1 Hardware Enable jumper is  set  to  ENABLE, JMP1 ADDR is set to 0x64, JU2 MBVDD is set to 3.3V.
- 3) Connect  the  USB  cable  from  your  computer  to  the USB port (J2) on the AUDINT3 board. The AUDINT3 board provides all necessary power to the MAX98050 Development Board through the J1 connector.
- 4) When properly set up, there should be a slow pulsing magenta on the AUDINT3's LED (D1). When first plugged in, the LED D1 initially blinks white. Once the computer registers  the AUDINT3 as a USB device, D1 changes to magenta and blinks slowly.

## Test

- 1) Launch the MAX98050 Evaluation Software and wait while the software connects to the EV system.
- 2) Once  the connection is established, the status bar  at  the  bottom  of  the  GUI  window  should  report Audio Interface 3 with its firmware version, and dis -play MAX98050 and  its  revision  ID.  After  the  EV  system is fully connected, configure the device by loading a pre-installed configuration file.This file can be loaded from File , Load  Register  Settings , Pre-Installed Configuration Files . Scroll down  to select the desired configuration file for USB playback to headphone  output.  Wait  for  the  writes  to  complete before  operating  the  device.  Progress  of  the  register writes can be seen in the Status Bar as a green progress bar.
- 3) Apply a headphone load to the OUTP and OUTN of J14, or OUTP and OUTN wire loops, or via the 3.5mm connector J9, see pinout in MAX98050 EV Kit Schematic Diagrams .

Windows Media Player is a registered trademark and registered service mark of Microsoft Corporation. Apple Music is a registered trademark of Apple, Inc.

## MAX98050 Evaluation System

- 4) Access  the  Windows  Sound  settings  by Settings  &gt; System &gt; Sound . Select the output device to be Maxim AUDINT003, it should appear as Speakers (3-Maxim AUDINT003 ADC1.0) or similar, see Figure 2. On the same page, click on Sound Control Panel &gt; Play -back tab  and  ensure  that  the  Default  Device  is  set to Speakers (3-Maxim AUDINT003 ADC1.0) or some -thing similar, as shown in Figure 3.
- 5) Adjust the audio source volume to a low level.
- 6) Enable the audio source and verify that audio is heard through the connected headphones. Adjust the audio source volume as needed.
- 7) Quickstart is now complete.

## Hardware Options: Mono, Stereo

There  are  two  options  for  Hardware  Setup:  Mono  or Stereo.

Mono  Hardware  Setup  is  typically  used  for  electrical bench evaluation and characterization, and requires the MAX98050 Evaluation Software for register access and control of the MAX98050.

Stereo Hardware Setup is intended for acoustic evaluation and testing using a stereo headset or similar acoustic form-factors. For stereo acoustic evaluation and design, Hearable  Sound  Studio  Basic  software  is  required. Hearable  Sound  Studio  Basic  is  also  used  to  design the  digital  filters  for  the  MAX98050.  The  MAX98050 Evaluation  Software  is  also  used  with  Hearable  Sound Studio Basic in Stereo Hardware setup mode.

## Mono Hardware Setup (for electrical bench evaluation)

- 1) Connect  the  AUDINT3  Board  to  either  one  of  the MAX98050 Development Boards using the J1 connector.
- 2) Verify jumper settings: JU1 Hardware Enable jumper is  set  to  ENABLE, JMP1 ADDR is set to 0x64, JU2 MBVDD is set to 3.3V.
- 3) Connect  the  USB  cable  from  your  computer  to  the USB port (J2) on the AUDINT3 board. The AUDINT3 board provides all necessary power to the MAX98050 Development Board through the J1 connector.
- 4) When properly set up, there should be a slow pulsing magenta on the AUDINT3's LED (D1). When first plugged in, the LED D1 initially blinks white. Once the computer registers  the AUDINT3 as a USB device, D1 changes to magenta and blinks slowly.

## Evaluates: MAX98050

## Stereo Hardware Setup (for acoustic testing and headset evaluation)

- 1) Connect the Dual EVKit Adapter board (J1 connector) to the AUDINT3 board (J1 connector).
- 2) Connect one of the MAX98050 Development boards (J1 connector) to the the Dual EVKit Adapter board (J2 connector).
- 3) Connect the  other  MAX98050  Development  boards (J1 connector) to the the Dual EVKit Adapter board (J3 connector).
- 4) Verify jumper settings for each DEV Board: JU1 Hard -ware Enable jumper is set to ENABLE, JU2 MBVDD is set to 3.3V.
- 5) Verify  that  one  of  the  DEV  boards  I 2 C  device  address is set to 0x62 using the jumper setting for JMP1 on that board. Verify that the other DEV boards I 2 C device address is set to 0x64 using the jumper setting for JMP1 on the other board, see Simplified EV Sys -tem Block Diagram for MAX98050: Stereo Hardware Setup for MAX98050 for location of JMP1.
- 6) Apply  a  headphone  load  to  the  OUTP  and  OUTN connectors J14, or OUTP and OUTN wire loops, or via the 3.5mm connector J9, see pinout in MAX98050 EV Kit Schematic Diagrams .
- 7) Connect  the  USB  cable  from  your  computer  to  the USB port (J2) on the AUDINT3 board. The AUDINT3 board  provides  all  necessary  power  to  both  the MAX98050 Development Boards through the J1 con -nector.
- 8) When properly set up, there should be a slow pulsing magenta on the AUDINT3's LED (D1). When first plugged in, the LED D1 initially blinks white. Once the computer registers  the AUDINT3 as a USB device, D1 changes to magenta and blinks slowly.

## Software for MAX98050

For  the  MAX98050EVSYS#,  there  are  two  GUIs  available:  MAX98050  Evaluation  Software  and  Hearable Sound Studio Basic.

The  MAX98050  Evaluation  Software  GUI  gives  direct access to all of the control registers inside the MAX98050, and  is  recommended  for  all  electrical  bench  testing of  the  IC.  Mono  Hardware  Setup  is  recommended  for electrical  bench  testing  of  the  MAX98050.  The  main interface  of  the  MAX98050  Evaluation  Software  is  an interactive  functional  block  diagram  of  the  MAX98050. For  more  information,  see  the Detailed  Description  of MAX98050 Evaluation Software section.

Hearable Sound Studio Basic GUI is an acoustic design tool,  and  is  for  use  in  design  of  the  digital  filters  in  the MAX98050  (Digital  Filter  1,  Digital  Filter  2,  Playback Compensation  Filter,  Digital  Filter  DRC,  EQ).  Hearable Sound  Studio  Basic  GUI  is  also  used  to  evaluate  filter designs  with  hardware,  using  the  MAX98050EVSYS# connected to acoustic form-factors such as headsets etc.

## Hearable Sound Studio Basic GUI

The  intended  purpose  of  the  Hearable  Sound  Studio Basic GUI is to aid in the design of digital filters for the MAX98050, and help with the evaluation of those digital filter  designs  using  the  MAX98050EVSYS#.  For  digital filter  design,  hardware  is  not  required  with  Hearable Sound  Studio  Basic.  For  acoustic  hardware  evaluation, however,  the  MAX98050EVSYS#  is  required  (in  Stereo Hardware  Setup  mode).  The  Hardware  Evaluation  section  of  Hearable  Sound  Studio  Basic  shows  how  to properly set up the MAX98050EVSYS# in stereo mode. For  acoustic  hardware  evaluation,  a  headset  or  similar acoustic form-factor can be connected to each of the DEV Boards. Each DEV Board can support multiple transducers  -  up  to  three  microphones  (ECM,  MEMS,  Analog, Digital, etc) and one dynamic headphone speaker. Refer to  the Detailed  Description  of  Hardware section  in  this datasheet,  as  well  as  the MAX98050  IC  Datasheet for information on how to properly configure and connect the DEV Boards for the desired transducers.

Hearable Sound Studio Basic is also designed to be used in conjunction with the MAX98050 Evaluation  Software  (see  the Detailed  Description  of MAX98050  Evaluation  Software .  During  acoustic  hard- ware evaluation, MAX98050 Evaluation Software is used to adjust  the  required  filter  path  gain  settings,  set desired  audio  channels,  switch  filter  banks,  enable/dis -able  the  ICs  etc.  MAX98050  Evaluation  Software  can also used to enable the Group Write Address feature in the MAX98050, where commands can be written to both DEV Boards simultaneously.

To launch the Hearable Sound Studio Basic application, navigate to Windows &gt; Maxim Integrated and click on the Hearable Sound Studio Basic application icon.

## Detailed Description of MAX98050 Evaluation Software

The  MAX98050  Evaluation  Software  is  designed  to  be used only with the MAX98050 EV system. The software provides an intuitive GUI for programming the device and includes many features intended to aid in evaluation.

The MAX98050  Evaluation Software main window ( Figure 1 ) is composed of four main sections: menu bar, communication  toolbar,  device  registers  control  tabbed pages, and a status bar. The menu bar provides additional features to aid evaluation, the toolbar provides basic functionality for communicating with the device, and the status bar provides information about hardware connectivity and communication  status.  The  tabbed  pages  make  up  the bulk of the GUI and provide the controls for programming the device's hardware registers.

The Block Diagram tab provides access to all the device registers using dialog windows, which contain GUI controls  for  configuring  the  device. The dialog windows are opened by clicking  on  the  blocks  in  the  block  diagram. The Control Registers tab provides direct access to the valid  registers  from  0x2000-0x20FF,  as  well  as  to  the revision  ID  register,  0x28FF.  The Filter  Registers tab provides access to the registers for the 5-band equalizer, the  dynamic  range  compression,  and  the  digital  filters. The Log tab provides a log of the I 2 C transactions and a tool to read specific registers.

The  MAX98050  Evaluation  Software  is  compatible  with Windows 10 and can be found on Maxim's website. Refer to the MAX98050 data sheet for device register information.

<!-- image -->

Figure 1. MAX98050 Evaluation Software

Figure 2. Windows Sound Settings

<!-- image -->

Figure 3. Playback Device

<!-- image -->

## MAX98050 Evaluation System

## Connect Sequence

When  the  evaluation  software  starts  for  the  first  time, the  program  automatically  connects  to  the  EV  system and attempts to connect to the USB control interface on the AUDINT3 board first. Once that connection is estab -lished, it searches for all I 2 C addresses associated with the MAX98050 device and populates all detected device addresses  in  the Active  Device drop-down  list.  During this  sequence,  the  text  on  the  Connect  button  auto -matically changes from Connect to Disconnect , and the status bar is also updated to reflect the current state of the hardware connection.

Once the EV system is fully  connected,  the  button  displays Disconnect ,  and  when clicked, it disconnects the software  from  the  hardware.  The  software  can  also  be disconnected  from  the  hardware  by  selecting Device  | Disconnect from the menu bar.

There are two methods to re-establish a connection with the hardware. The first is by selecting Device | Connect from  the  menu  bar.  This  instructs  the  program  to  connect to the EV system. The second method is to click the Connect button until it displays Disconnect , which signifies that the EV system is fully connected.

## Communication Tool Bar

The toolbar consists of six buttons and a drop-down combo box. These controls are always accessible, regardless of

Evaluates: MAX98050

the active tabbed page. The toolbar is shown in Figure 4 , and Table 1 provides details about each control.

## Status Bar

The Status bar is divided into four sections. From left to right: status and alert messages, device part number and revision  ID,  interface  name  and  firmware  version,  and evaluation system connection status.

## Interrupt Status Panel

The Interrupt Status panel (not to be confused with the Status  bar)  displays  the  state  of  the Raw , State ,  and Flag interrupts. This data is read from the Raw\_, State\_, and Flag\_ interrupt registers (0x2001-0x200A). When the image is red, it indicates that the associated interrupt bit has been set.

The  panel  also  includes  checkboxes  for  each  interrupt that is used to enable the link between an interrupt's Flag bit and State bit. When enabled, the Flag bit is set whenever the State bit is set. To clear the State and Flag bits, click on the interrupt's associated Clear button.

## Notes:

- Each interrupt source must be enabled for the FLAG column (i.e., flag bits) to be set.
- The IRQ\_EN bit needs to be set for the interrupt to be output on the IRQ pin.

Figure 4. Communication Tool Bar

<!-- image -->

## Table 1. Communication Tool Bar Controls

| CONTROL            | FUNCTION                                                                                                                                                                      |
|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| On                 | Press to set the Global Enable bit (EN). This enables the device.                                                                                                             |
| Off                | Press to clear the Global Enable bit (EN). This disables the device. Note: The software can communicate with a disabled device, as long as its I 2C interface remains active. |
| Active Device      | Provides a list of detected I 2C addresses. The displayed address is the active device.                                                                                       |
| Connect/Disconnect | See the Connect Sequence section for additional details.                                                                                                                      |
| • Connect          | Press to connect to the USB control interface. Detected addresses are shown in the Active Device drop-down list.                                                              |
| • Disconnect       | Press to disconnect from the USB control interface.                                                                                                                           |
| Read All           | Press to initiate a read of all device registers on the active device. The Control Registers and Block Diagram tabs are updated to reflect the read data.                     |
| Write All          | Press to initiate a write to all device registers on the active device, using the settings shown on the Control Registers tab.                                                |
| Reset              | Press to reset device registers to their power-on-reset (POR) state on the active device.                                                                                     |

│

## MAX98050 Evaluation System

## Block Diagram Tab

The  evaluation  software  uses  an  interactive  block  dia -gram  to  facilitate  the  programming  of  the  device.  The block diagram also provides a visual representation of the device's functions and current configuration.

There  are  three  types  of  blocks  in  the  block  diagram, and they are identified by the cursor image. The cursor changes to a pointing hand when over a block that opens a  dialog  window  and  a  full  hand  to  toggle  a  function.  If the  cursor  does  not  change  when  over  a  block,  then  it is an inactive block and is only provided for illustrational purposes.

Evaluates: MAX98050

The color of a diagram block changes depending on the enabled  state  of  the  device  function(s)  associated  with that block. An inactive block is grey, a disabled block is white, and an enabled block is teal. Figure 5 shows the block diagram with the device configured for digital audio interface (DAI) (USB audio) input and headphone output.

## Dialog Windows

Dialog windows are associated with specific blocks in the block diagram and contain the controls for configuring the registers associated with that functional block. Open a dia -log window by clicking on a dialog block. Figure 7 shows the typical GUI controls that are found on a dialog window.

Figure 5. MAX98050 Block Diagram (USB Audio Input to Headphone Output)

<!-- image -->

Figure 6. Control Register Tab

<!-- image -->

│

## MAX98050 Evaluation System

## Control Registers Tab

The Control Registers tab provides two methods for configuring  the  device. As  an  example,  Figure  6 shows the elements of the interrupt registers.

The  first  configuration  method  involves  clicking  on  the register's bit labels. A non-bold bit label indicates that the bit is currently set low. A bold bit label indicates that the bit is currently set high. Clicking on a bit toggles its state and results in a write to that register. This action also updates the value displayed in the register's edit box, located to the right of the bit labels.

The  second  configuration  method  involves  entering  a hex  value  in  the  register's  edit  box  and  then  pressing the Enter key; the software automatically configures the device register once the Enter key is pressed. The state of  the  bit  labels  are  then  updated  to  reflect  the  value shown in the edit box.

Note: Trying to write to a read-only bit by clicking/toggling its label or entering a hex value in its edit box updates the GUI, but it does not affect the bit's value in the device. All read-only bits are updated to reflect their current value in the device by performing a read all operation.

All changes made on this tab are reflected on the Block Diagram Tab and on any open dialog windows.

## Menu Bar

Table 2 describes all menu bar items with additional information  for  some  menu  items  provided  in  the  following sections.

## File I/O

The software's save and load features are accessed from the  File  menu.  The Save  Control  Register  Settings feature saves the data currently displayed on the Control Registers Tab .

A  configuration  file's  main  purpose  is  to  capture  the current  state  of  the  device's  registers,  as  displayed  on the register tab. This feature makes it easy to program a device to a saved/known state and allows for the sharing of  configuration  files  between  users.  To  facilitate  usage, use descriptive file names when saving a configuration file.

The save and load features are functional even when the hardware is not connected. This allows configuration files to be created and opened when hardware is not available. Since the configuration file is automatically generated by the  software,  it  is  not  meant  to  be  manually  formatted, and  doing  so  can  cause  file  loading  issues.  To  open  a configuration  file  for  viewing  purposes  only,  use  a  plain text editor.

Select File &gt; Save Control Register Settings to create a configuration file. The register address and its data are saved as tab-delimited values and the file is saved with a *.98050 extension.

The software has some standard configuration files preinstalled. A  file  can  be  loaded  by  selecting File  &gt;  Load Register Settings &gt; Pre-Installed Configuration Files , and  using  the  drop-down  menu,  selecting  the  file,  then clicking Load .

Figure 7. Typical GUI Controls

<!-- image -->

Evaluates: MAX98050

│

## MAX98050 Evaluation System

Table 2. Menu Bar Items

| MENU ITEM                             | DESCRIPTION                                                                                                                                                                                                                                                                                    |
|---------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FILE                                  |                                                                                                                                                                                                                                                                                                |
| Load Register Settings                | Loads a configuration file (as saved by the Save Control Register Settings option or a factory preinstalled file).                                                                                                                                                                             |
| Save Control Register Settings        | Saves a configuration file containing the current device settings.                                                                                                                                                                                                                             |
| Exit                                  | Closes the MAX98050 evaluation software.                                                                                                                                                                                                                                                       |
| DEVICE                                |                                                                                                                                                                                                                                                                                                |
| Connect                               | Runs a connection routine to connect to the evaluation system. First, establish a connection to the AUDINT3 board, and then establish a connection to the MAX98050.                                                                                                                            |
| Disconnect                            | Disconnects the PC from the EV system.                                                                                                                                                                                                                                                         |
| Reset                                 | Resets all control registers to their power-on-reset (POR) states.                                                                                                                                                                                                                             |
| Read All                              | Performs a read from all registers and updates the GUI.                                                                                                                                                                                                                                        |
| Write All                             | Performs a write to all writeable registers, using the values shown on the Control Registers Tab , and then updates the GUI.                                                                                                                                                                   |
| Read Rev ID                           | Reads the device's revision ID register and updates the status bar.                                                                                                                                                                                                                            |
| OPTIONS                               |                                                                                                                                                                                                                                                                                                |
| Audio Interface 3 (Advanced Users) F3 | Opens an advanced user interface dialog window for the AUDINT3, allowing the user to control the digital clocks and applied voltages to the DEV board. By disabling the AUDINT3's clocks, external clocks can be applied to the MAX98050 without conflicting with the clocks from the AUDINT3. |
| Interface Selection                   | Selects the I 2C hardware interface to either the Audio Interface 3 (AUDINT3) or an I 2C bridge (not supported).                                                                                                                                                                               |
| Activate Demo Mode                    | Puts the software in demo mode.                                                                                                                                                                                                                                                                |
| VIEW                                  |                                                                                                                                                                                                                                                                                                |
| Communication Log                     | Toggles the Log sheet display in the Device Registers Control Tabbed Pages.                                                                                                                                                                                                                    |
| HELP                                  |                                                                                                                                                                                                                                                                                                |
| View Help                             | Links to technical documents.                                                                                                                                                                                                                                                                  |
| About                                 | Provides information about the MAX98050 evaluation software.                                                                                                                                                                                                                                   |

│

Evaluates: MAX98050

## Detailed Description of Hardware

The  MAX98050  EV  system  is  designed  to  allow  for  a thorough  evaluation  of  the  MAX98050  low-power,  highperformance  audio  CODEC  with  integrated  low-latency digital filters for wireless hearables, headsets, and head -phones. The EV system includes two MAX98050 development boards (DEV board), Maxim's Audio Interface Board III (AUDINT3), Dual EV Kit Adapter board, and USB cable.

The DEV board can be evaluated as a standalone board that is driven directly by audio test equipment, powered by multiple external supplies, and configured by an external I 2 C capable controller. To simplify the evaluation, the DEV boards can be evaluated with just the AUDINT3 board, or the AUDINT3 board and the Dual EV Kit Adapter board for stereo applications. This symplified hardware combination provides an easy-to-use method for exercising the capabilities of the device with no additional audio equipment.

The AUDINT3 board provides on-board LDO regulators, USB-to-PCM, and USB-to-I 2 C interfaces. The AUDINT3 LDO  regulators  are  used  to  power  the  device's  supply rails  through  connector  J1.  The  USB-to-PCM  converter accepts a USB audio stream from a USB connected computer and converts that into an I 2 S data stream, allowing for  USB audio playback through the MAX98050 device. The  USB-to-I 2 C  interface  is  the  bridge  that  allows  the evaluation software to configure, monitor, and control the I 2 C capable devices on the DEV and AUDINT3 boards.

## Table 3. Power Supplies

| POWER SUPPLY   | RANGE (V)      |
|----------------|----------------|
| MBVDD          | 1.3V to 4.8V   |
| AVDD1          | 1.71V to 1.95V |
| AVDD2          | 1.1V to 1.3V   |
| DVDDIO         | 1.1V to 1.95V  |
| DVDD           | 1.1V to 1.3V   |

Table 4. Microphone Bias Input Supply Selection Using JU2

| HEADER   | SHUNT POSITION   | DESCRIPTION                                     |
|----------|------------------|-------------------------------------------------|
| JU2      | 3.3V to MBVDD    | Microphone bias input supply connected to 3.3V  |
| JU2      | AVDD1 to MBVDD   | Microphone bias input supply connected to AVDD1 |

## Power Supplies

The  DEV  board  requires  at  least  three  external  power supplies  when  evaluated  as  a  stand-alone  board.  The power supplies and their ranges are listed in Table 3. The external supply voltages can be connected at the respective  supply  test  points  (see  the Simplified  EV  System Block Diagram for MAX98050: Stereo Hardware Setup ). When using the AUDINT3 board, its LDO regulators are used to power the device's supply rails through connector J1. The Dual EV Kit Adapter board is used in stereo applications  to  distribute  the  AUDINT3's  power  outputs and digital  clocks.  See  the Digital Audio  Interface  (DAI) section.

Jumper  JU2  is  used  to  select  the  input  voltage  for MBVDD,  the  microphone  bias  supply  generator  in  the MAX98050  (see Table  4 ).  Using  JU2,  MBVDD  can  be connected to either 1.8V (AVDD1) or 3.3V, both supplied by the AUDINT3. Alternatively, an external voltage can be applied to MBVDD by leaving JU2 open, and connecting the external supply to test pin MBVDD.

## Hardware Enable

The DEV board includes jumper JU1 to control HW\_EN, the device hardware enable. Table 5 describes the JU1 configuration options.

Note: Before starting evaluation, ensure that the jumper is configured as needed.

## Device Address

The  MAX98050  I 2 C  device  address  can  be  configured  to  one  of  four  values:  0x62,  0x64,  0x66,  and 0x68. The device address is set by using jumper JMP1 (see Table 6 ).

## Table 5. Jumper Configuration

| HEADER   | SHUNT POSITION   | DESCRIPTION      |
|----------|------------------|------------------|
| JU1      | HW_EN to DVDDIO  | Normal operation |
| JU1      | HW_EN to GND     | Device is reset  |

## Table 6. I 2 C Address Selection Using JMP1

| SIGNAL   |   PIN |   PIN | SIGNAL   | I 2 C ADDRESS   |
|----------|-------|-------|----------|-----------------|
| ADDR     |     1 |     3 | DVDDIO   | 0x62            |
| ADDR     |     1 |     5 | GND      | 0x64            |
| ADDR     |     1 |     4 | SDA      | 0x66            |
| ADDR     |     1 |     2 | SCL      | 0x68            |

Note: Only one jumper should be used on JMP1.

│

## MAX98050 Evaluation System

When both DEV boards are being used in a stereo configuration,  be  sure  that  each  board  has  a  different  I 2 C address  set.  When  used  with  Hearable  Sound  Studio Basic,  one  DEV  board  should  be  set  to  0x62,  and  the other DEV board should be set to 0x64.

In a stereo application, both devices can be written to at the same time using the Group Write Address feature in the  MAX98050. To enable this feature, click on the I 2 C block in the block diagram in the MAX98050 evaluation software,  and  click  on  I 2 C  Group  Write Address,  which can  only  be  made  active  when  two  I 2 C  addresses  are detected.  To  write  to  both  devices  at  the  same  time, change  the  address  in  the  Active  Device  pulldown  to 0x6A,  so  that  both  devices  can  be  written  to  synchro -nously. When Group Write Address mode is enabled, and address  0x6A  is  selected,  both  devices  are  simultane -ously written any time a control/register is changed.

## Table 7. AUDINT3 Connector (J1)

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
| -        |    34 | DMD2         |    35 | DMC1     |    36 |
| GND      |    37 | DMD1         |    38 | DMD3     |    39 |

## Table 8. DAI Header (Portion of J2)

| SIGNAL   |   PIN |   PIN | SIGNAL   |
|----------|-------|-------|----------|
| GND      |     5 |     6 | BCLK     |
| GND      |     7 |     8 | LRCLK    |
| GND      |     9 |    10 | DIN      |
| GND      |    11 |    12 | DOUT     |

## Digital Audio Interface (DAI)

The device DAI is routed to interface header J2 as well as  the  AUDINT3  connector  J1.  The  interface  headers provide  easy  access  to  the  device's  PCM  bus,  and  the AUDINT3 connector allows for USB audio to be streamed onto  the  DEV  board.  See  the USB Audio Input section for  details  on  USB  audio  streaming  and Table  7  for  the connector J1 pinout.

## DAI Header

The  DAI  header  (J2)  provides  access  to  the  MAX98050 PCM  bus  (BCLK,  LRCLK,  DIN,  and  DOUT).  This  DAI header facilitates evaluation with audio equipment I/O. See Table 8 for the pinout of the DAI headers and Figure 8 for an illustration of how the MAX98050 DAI interface is routed through the DAI headers to the AUDINT3 connector.

## Microphone Inputs

The MAX98050 allows three microphone input channels to operate concurrently. The three microphone input channels can accept any combination of digital microphone or analog microphone as input sources. There are three analog microphone interface inputs available using 3.5mm sockets (J6-J8) or headers (J10-J12) and three digital microphone interface  inputs  available  using  headers  (J3-J5).  See the MAX98050 EV Kit Schematic Diagrams for  detailed connection options on the microphone inputs.

## Three Digital Microphone (DMIC) Inputs

Each  of  the  headers  J3  to  J5  provides  the  following connections:

- DVDDIO supply as power supply for external DMIC
- DMC to connect the MAX98050 DMIC clock output to external DMIC clock input
- DMD to connect the MAX98050 DMIC data input to external DMIC data output

Figure 8. MAX98050 DAI Interface Headers (PCM)

<!-- image -->

│

## MAX98050 Evaluation System

Table 9, Table 10 , and Table 11 show the connections for each of the DMIC input channels.

See  the MAX98050  EV  Kit  Schematic  Diagrams for details of how the DMIC input channels are routed to the DMIC headers.

## Three Analog Microphone (AMIC) Inputs

The  MAX98050  features  three  differential  AMIC  inputs which can connect to differential or single-ended external analog  microphones.  The  3.5mm  4-pole  TRRS  sockets J6, J7, and J8 allow analog microphones to be connected to  the  MAX98050  analog  microphone  inputs.  The  J6 socket can be configured for up to two AMIC inputs. The single-ended  or  a  differential  external  microphone  connections  can  be  routed  to  the  MAX98050  AMIC  inputs using resistor selection on the board. See the MAX98050 EV  Kit  Schematic  Diagrams for  detailed  connection options on the microphone inputs.

The J6 socket allows the following connections:

- Differential microphone connection to AMIC1 inputs on the MAX98050
- A  single-ended  microphone  connection  to  AMIC1 inputs
- Two  single-ended  microphone  connection  to  AMIC1 and AMIC2 analog microphone inputs

## Table 9. DMIC1 Header (J3)

| SIGNAL   |   PIN |   PIN | SIGNAL   |
|----------|-------|-------|----------|
| GND      |     1 |     2 | DMC1     |
| GND      |     3 |     4 | DMD1     |
| GND      |     5 |     6 | DVDDIO   |

## Table 10. DMIC2 Header (J4)

| SIGNAL   |   PIN |   PIN | SIGNAL   |
|----------|-------|-------|----------|
| GND      |     1 |     2 | DMC2     |
| GND      |     3 |     4 | DMD2     |
| GND      |     5 |     6 | DVDDIO   |

## Table 11. DMIC3 Header (J5)

| SIGNAL   |   PIN |   PIN | SIGNAL   |
|----------|-------|-------|----------|
| GND      |     1 |     2 | DMC3     |
| GND      |     3 |     4 | DMD3     |
| GND      |     5 |     6 | DVDDIO   |

Evaluates: MAX98050

The J7 socket allows the following connections:

- Differential microphone connection to AMIC2 inputs on the MAX98050
- A single-ended microphone connection to AMIC2 inputs The J8 socket allows the following connections:
- Differential microphone connection to AMIC3 inputs on the MAX98050
- A single-ended microphone connection to AMIC3 inputs

The external analog microphone needs a 3.5mm 4-pole TRRS  plug  with  the  following  connections  for  proper microphone operation:

- AMIC Single-Ended:
- Mic Output Connected to Tip
- Mic GND to Ring2
- Mic Power Supply to Sleeve (MEMS Mic Only)
- AMIC Differential:
- Mic Output + Connected to Tip
- Mic Output - Connected to Ring1
- Mic GND to Ring2
- Mic Power Supply to Sleeve (MEMS Mic Only)

Table  12 , Table  13 ,  and Table  14 show  how  the AMIC input channels on the MAX98050 connect to each of the DEV board's 3.5mm sockets.

The connections from the 3.5mm sockets can be moni -tored on J10-J12 headers. Alternatively, external AMICs can  also  be  connected  to  the  MAX98050  DEV  board using  these  headers. Table  15 , Table  16 ,  and Table  17 show the connections of the header pins to the associated 3.5mm socket pins.

## Table 12. J6 Socket

| SIGNAL                  | PIN    |
|-------------------------|--------|
| INP1                    | Tip    |
| INN1/INP2               | Ring1  |
| GND                     | Ring2  |
| MICBIAS1/MICBIAS2/AVDD1 | Sleeve |

## Table 13. J7 Socket

| SIGNAL                  | PIN    |
|-------------------------|--------|
| INP2                    | Tip    |
| INN2                    | Ring1  |
| GND                     | Ring2  |
| MICBIAS1/MICBIAS2/AVDD1 | Sleeve |

│

## MAX98050 Evaluation System

## Table 14. J8 Socket

| SIGNAL                  | PIN    |
|-------------------------|--------|
| INP3                    | Tip    |
| INN3                    | Ring1  |
| GND                     | Ring2  |
| MICBIAS1/MICBIAS3/AVDD1 | Sleeve |

## Table 15. J10 Header

| SIGNAL                  |   PIN |
|-------------------------|-------|
| INP1                    |     1 |
| INN1/INP2               |     2 |
| GND                     |     3 |
| MICBIAS1/MICBIAS2/AVDD1 |     4 |

## Single-Ended/Differential Input Connection

In  addition  to  the  3.5mm  socket  connections,  Table  18 shows  recommended  resistor  options  to  connect  the MAX98050 AMIC inputs to both single-ended and differential external analog microphones.

The DEV board includes 2.2µF DC blocking capacitors on C18-C23 by default. The DC blocking corner frequency can  be  adjusted  by  changing  the  value  of  the  C18C23  capacitors.  See  the MAX98050  EV  Kit  Schematic Diagrams for more details.

## Electret Condensor Microphone (ECM)

The microphone bias outputs of the MAX98050 and the pullup  and  pulldown  resistors  on  the  MAX98050  DEV board allow easy connections to external ECM-type ana-

## Table 18. Analog Microphone Configuration

| HEADER   | AMIC ECM DIFFERENTIAL                                  | AMIC ECM SINGLE-ENDED                | AMIC MEMS DIFFERENTIAL   | AMIC MEMS SINGLE-ENDED   |
|----------|--------------------------------------------------------|--------------------------------------|--------------------------|--------------------------|
| J6       | R1, R2, R4 = 0 Ω , R7 = R_PULLUP, R57 = R_PULLDOWN     | R1, R4, R57 = 0 Ω , R7 = R_PULLUP    | R1, R2, R4 = 0 Ω         | R1, R4, R57 = 0 Ω        |
| J7       | R10, R11, R13 = 0 Ω , R15 = R_PULLUP, R59 = R_PULLDOWN | R10, R13, R59 = 0 Ω , R15 = R_PULLUP | R10, R11, R13 = 0 Ω      | R10, R13, R59 = 0 Ω      |
| J8       | R17, R18, R20 = 0 Ω , R22 = R_PULLUP, R61 = R_PULLDOWN | R20, R17, R61 = 0 Ω , R22 = R_PULLUP | R17, R18, R20 = 0 Ω      | R17, R20, R61 = 0 Ω      |

│

Evaluates: MAX98050

## Table 16. J11 Header

| SIGNAL                  |   PIN |
|-------------------------|-------|
| INP2                    |     1 |
| INN2                    |     2 |
| GND                     |     3 |
| MICBIAS1/MICBIAS2/AVDD1 |     4 |

## Table 17. J12 Header

| SIGNAL                  |   PIN |
|-------------------------|-------|
| INP3                    |     1 |
| INN3                    |     2 |
| GND                     |     3 |
| MICBIAS1/MICBIAS3/AVDD1 |     4 |

log  microphones.  See Table  18 for  typical  components that  need  to  be  installed  for  single-ended  or  differential ECM microphone connections. The microphone bias output level, R\_PULLUP, and R\_PULLDOWN resistor selection  is  determined  by  the  ECM  microphone  supplier's recommended bias point selection.

## Analog Micro-Electro-Mechanical System (MEMS) Microphone

The MAX98050 DEV board provides simple connections to  connect  external  analog  MEMs  microphones  to  the AMIC inputs of the MAX98050. See Table 18 for  typical components that need to be installed for single-ended or differential  analog  MEMS  microphone  connections.  The microphone bias output level is determined by the MEMs microphone supplier's recommended supply level.

## Microph one Bias

The MAX98050 provides three microphone bias outputs (MICBIAS1, MICBIAS2, and MICBIAS3) to connect exter -nal microphones to the microphone inputs of the device. The microphone bias outputs use the MBVDD pin on the MAX98050  as  the  input  supply  for  the  MICBIAS  generator. The MBVDD pin is supplied either from AUDINT3 board supplies through JU2 or supplied externally using the MBVDD test point. In addition to providing power for ECM  microphones,  the  MICBIAS  can  also  be  used  as a  power  supply  for  MEMS  microphones.  The  MICBIAS output  voltage  level  is  programmable  (1.2V  to  3V),  and can be set through register control using the MAX98050 Evaluation Software.

The  microphone  bias  outputs  are  routed  to  the  "Sleeve" connection on the J6-J8 sockets and are resistor selectable for that external AMIC connection. Table 12 , Table 13 , and Table 14 show which microphone bias outputs are routed to each 3.5mm socket on the MAX98050 DEV board. See the MAX98050 EV Kit Schematic Diagrams for resistor selection information on a particular analog microphone path.

## Headphone Output

The  MAX98050  differential  headphone  output,  OUTP/ OUTN, is routed to the J14 header, wire loops, and the J9 socket on the DEV board. The DEV board is, by default, assembled  to  allow  the  MAX98050  output  to  connect directly  to  a  headphone  load  without  the  need  for  filtering. To ensure proper operation of an external headset, always disable the DEV board before connecting or disconnecting the headset. The 3.5mm 4-pole TRRS socket J9 is preconfigured for the differential OUTP/OUTN head -phone outputs. See Table 19 .

For quick evaluation, a standard 3.5mm mono headphone (without  a  microphone)  can  be  used  with  socket  J9  if resistor shorts R62 and R63 are removed, allowing Ring2 and Sleeve to float, see the MAX98050 EV Kit Schematic Diagrams .

## EMI Filter

In some applications, when a very long headphone cable is used with the MAX98050 headphone output, an output filter  (i.e.,  ferrite  bead or inductor, plus capacitor) can be installed to help prevent excessive EMI radiation. It is best to  choose  filter  components  based  on  EMI  test  results. PCB  footprints  have  been  provided.  Before  adding  the filters  to  the  design,  first  remove  the  0Ω  short  installed in  the  L1  and  L2  locations  (see  the MAX98050  EV  Kit Schematic  Diagrams and  the MAX98050  EV  Kit  PCB Layout Diagrams ).

## I 2 C Interface

The  MAX98050's  I 2 C  interface  is  routed  to  header  J2 and connector J1. The J1 connector is for the AUDINT3 board and connects the device's I 2 C interface to the I 2 C interface of the AUDINT3 board. This connection allows the MAX98050 evaluation software to read and write to the device. The AUDINT3 board has I 2 C pullup resistors. See Table 7.

A portion of header J2 allows for an external I 2 C controller to connect to the device's I 2 C bus as well as test points SDA and SCL. See Table 20 for more information about J2.

## Audio Interface Board III

Maxim's Audio Interface Board III (AUDINT3 board) facilitates the evaluation of the DEV board by providing a set of features that can be used to exercise the capabilities of  the  DEV  board  without  the  need  for  additional  audio equipment. The main components of the AUDINT3 board are  LDO  supply  voltages  and  USB-to-I 2 C  and  USB-toPCM  interfaces.  All  the  necessary  supply  voltages  for the MAX98050 are supplied by the AUDINT3 board. No external supplies are needed for evaluation. The USB-toPCM converter allows any Windows 10 PC to be used as an audio source for the DEV board's digital audio PCM interface, and the USB-to-I 2 C interface allows for the use of  the  MAX98050  evaluation  software,  making  device configuration and monitoring simpler.

The DEV board connects to the AUDINT3 board through connector  J1.  The  physical  connections  made  between the DEV board and AUDINT3 board are listed in Table 7.

## USB Audio Input

To  utilize  the  USB  streaming  feature  of  the  AUDINT3 board, connect the USB cable from the computer to the micro  USB  connector  J2  on  the  AUDINT3  board  and ensure  that  the  AUDINT3  board  is  connected  to  the DEV board directly, for mono, or through the Dual EV Kit Adapter for a stereo DEV board configuration.

Once the hardware is ready, use the MAX98050 Evaluation Software to configure and enable the device for DAI audio playback.

## Table 19. J9 Socket

| SIGNAL   | PIN    |
|----------|--------|
| FOUTP    | Tip    |
| FOUTN    | Ring1  |
| GND      | Ring2  |
| GND      | Sleeve |

## MAX98050 Evaluation System

## Table 20. I 2 C Header (Portion of J2)

| SIGNAL   |   PIN |   PIN | SIGNAL   |
|----------|-------|-------|----------|
| GND      |    13 |    14 | SDA      |
| GND      |    15 |    16 | SCL      |

## MAX98050 EV Kit Bill of Materials

|   ITEM |   QTY | REF DES                                                                                                          | MAXINV                | MFG PART #                                                                                      | MANUFACTURER                     | VALUE              | DESCRIPTION                                                                                                                                                                    |
|--------|-------|------------------------------------------------------------------------------------------------------------------|-----------------------|-------------------------------------------------------------------------------------------------|----------------------------------|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1 |    24 | ADDR, AVDD1_REG, D3, DMC1-DMC3, DMD1-DMD3, INN1-INN3, INN1_M-INN3_M, INP1-INP3, INP1_M-INP3_M, MICBIAS1-MICBIAS3 | 02-TPMINI5002-00      | 5002                                                                                            | KEYSTONE                         | N/A                | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER; NOT FOR COLD TEST                                                        |
|      2 |     5 | AVDD1, AVDD2/AVDD3, DVDD, DVDDIO, MBVDD                                                                          | 02-TPMINI5010-00      | 5010                                                                                            | KEYSTONE                         | N/A                | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL; NOT FOR COLD TEST                                                        |
|      3 |     5 | BCLK, DIN, DOUT, IRQ, LRCLK                                                                                      | 02-TPMINI5003-00      | 5003                                                                                            | KEYSTONE                         | N/A                | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST |
|      4 |     1 | C8                                                                                                               | 20-000U1-D5           | C0201C104K9PAC; GRM033R60J104KE19; C0603X5R0J104K030BC; C0201X5R6R3-104KNP                      | KEMET; MURATA; VENKEL; TDK       | 0.1UF              | CAP; SMT (0201); 0.1UF; 10%; 6.3V; X5R; CERAMIC                                                                                                                                |
|      5 |     5 | C9-C12, C14                                                                                                      | 20-0001U-AA20         | GRM033R61A105ME15                                                                               | MURATA                           | 1UF                | CAP; SMT (0201); 1UF; 20%; 10V; X5R; CERAMIC                                                                                                                                   |
|      6 |     1 | C15                                                                                                              | 20-002U2-61           | GRM033R61A225KE47                                                                               | MURATA                           | 2.2UF              | CAP; SMT (0201); 2.2UF; 10%; 10V; X5R; CERAMIC                                                                                                                                 |
|      7 |     2 | C16, C17                                                                                                         | 20-00U01-I6           | C0603X7R1A103K030BA; GRM033R71A103KA01; GCM033R71A103KA03; CGA1A2X7R1A103K030BA; 0201ZC103KAT2A | TDK; MURATA; MURATA; TDK; AVX    | 0.01UF             | CAP; SMT (0201); 0.01UF; 10%; 10V; X7R; CERAMIC                                                                                                                                |
|      8 |     6 | C18-C23                                                                                                          | 20-002U2-BA97         | GRM188C71E225KE11                                                                               | MURATA                           | 2.2UF              | CAP; SMT (0603); 2.2UF; 10%; 25V; X7S; CERAMIC                                                                                                                                 |
|      9 |     8 | GND1-GND6, OUTN, OUTP                                                                                            | 01-9020BUSS20AWG-00   | 9020 BUSS                                                                                       | WEICO WIRE                       | MAXIMPAD           | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                                                       |
|     10 |     1 | HW_EN                                                                                                            | 02-TPMINI5116-00      | 5116                                                                                            | KEYSTONE                         | N/A                | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; GREEN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST  |
|     11 |     1 | J1                                                                                                               | 01-TSW11308GTRA39P-19 | TSW-113-08-G-T-RA                                                                               | SAMTEC                           | TSW-113-08-G-T-RA  | EVKIT PART; CONNECTOR; MALE; THROUGH HOLE; 0.025IN SQ POST HEADER; RIGHT ANGLE; 39PINS; MODIFY PIN NUMBERING ARRANGEMENT                                                       |
|     12 |     1 | J2                                                                                                               | 01-303266002HB26P-19  | 30326-6002HB                                                                                    | 3M ELECTRONIC SOLUTIONS DIVISION | 30326-6002HB       | CONNECTOR; MALE; THROUGH HOLE; LOW PROFILE HEADER; STRAIGHT; 26PINS                                                                                                            |
|     13 |     3 | J3-J5                                                                                                            | 01-PEC03DAAN6P-21     | PEC03DAAN                                                                                       | SULLINS ELECTRONICS CORP.        | PEC03DAAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 6PINS; -65 DEGC TO +125 DEGC                                                                                       |
|     14 |     1 | J6                                                                                                               | EH111000003862        | SJ-43516-SMT-TR-PI                                                                              | CUI INC                          | SJ-43516-SMT-TR-PI | CONNECTOR; FEMALE; SMT; 3.5 MM AUDIO JACKS; RIGHT ANGLE; 6PINS; PINK                                                                                                           |
|     15 |     1 | J7                                                                                                               | EH111000003861        | SJ-43516-SMT-TR-GR                                                                              | CUI INC                          | SJ-43516-SMT-TR-GR | CONNECTOR; FEMALE; SMT; 3.5 MM AUDIO JACKS; RIGHT ANGLE; 6PINS; GREEN                                                                                                          |
|     16 |     1 | J8                                                                                                               | EH111000003860        | SJ-43516-SMT-TR-BE                                                                              | CUI INC                          | SJ-43516-SMT-TR-BE | CONNECTOR; FEMALE; SMT; 3.5 MM AUDIO JACKS; RIGHT ANGLE; 6PINS; BLUE                                                                                                           |
|     17 |     1 | J9                                                                                                               | 01-SJ43514SMT6P-80    | SJ-43514-SMT                                                                                    | CUI INC.                         | SJ-43514-SMT       | CONNECTOR; FEMALE; SMT; 3.5 MM AUDIO JACKS; RIGHT ANGLE; 6PINS                                                                                                                 |
|     18 |     3 | J10-J12                                                                                                          | 01-TSW10423GS4P-17    | TSW-104-23-G-S                                                                                  | SAMTEC                           | TSW-104-23-G-S     | CONNECTOR; THROUGH HOLE; SINGLE ROW; STRAIGHT; 4PINS                                                                                                                           |

│

Evaluates: MAX98050

## Ordering Information

| PART           | TYPE                                        |
|----------------|---------------------------------------------|
| MAX98050EVSYS# | Complete Evaluation System for the MAX98050 |

#Denotes RoHS compliant.

## MAX98050 EV Kit Bill of Materials (continued)

|   ITEM |   QTY | REF DES                                                                           | MAXINV            | MFG PART #                                               | MANUFACTURER                            | VALUE     | DESCRIPTION                                                                                                                                                                    |
|--------|-------|-----------------------------------------------------------------------------------|-------------------|----------------------------------------------------------|-----------------------------------------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     19 |     1 | J13                                                                               | 01-PBC04DAAN8P-21 | PBC04DAAN                                                | SULLINS ELECTRONICS CORP.               | PBC04DAAN | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 8PINS; -65 DEGC TO +125 DEGC                                                                                               |
|     20 |     1 | J14                                                                               | 01-PCC02SAAN2P-21 | PCC02SAAN                                                | SULLINS                                 | PCC02SAAN | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                                                                       |
|     21 |     1 | JMP1                                                                              | 01-PBC05SAAN5P-21 | PBC05SAAN                                                | SULLINS ELECTRONICS CORP.               | PBC05SAAN | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 5PINS; -65 DEGC TO +125 DEGC                                                                                               |
|     22 |     2 | JU1, JU2                                                                          | 01-PBC03SAAN3P-21 | PBC03SAAN                                                | SULLINS                                 | PBC03SAAN | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC                                                                                               |
|     23 |     2 | L1, L2                                                                            | ER111000005900    | CR1206-J/-000ELF                                         | BOURNS                                  | 0         | RES; SMT (1206); 0; 5%; JUMPER; 0.2500W; NOTE: THIS PART HAS AN SPECIAL INDUCTOR ALTERNATE SCHEMATIC SYMBOL                                                                    |
|     24 |    32 | R1, R3, R4, R17, R20, R29, R31-R34, R36-R39, R43, R44, R49-R55, R57, R59, R61-R67 | 80-0000R-26A      | ERJ-2GE0R00                                              | PANASONIC                               | 0         | RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                                                                                                                    |
|     25 |     1 | R28                                                                               | 80-004K7-18       | ERJ-2RKF4701                                             | PANASONIC                               | 4.7K      | RES; SMT (0402); 4.7K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                             |
|     26 |     1 | R30                                                                               | 80-016K9-18       | CRCW040216K9FK; ERJ-2RKF1692                             | VISHAY DALE; PANASONIC                  | 16.9K     | RES; SMT (0402); 16.9K; 1%; +/-100PPM/DEGK; 0.1000W                                                                                                                            |
|     27 |     2 | SCL, SDA                                                                          | 02-TPMINI5004-00  | 5004                                                     | KEYSTONE                                | N/A       | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST |
|     28 |     4 | SPACER1-SPACER4                                                                   | 02-MS440038P-02   | 91772A108; PHILLIPS-PAN_4-40X3/8IN; PMSSS4400038PH; 9901 | GENERIC PART                            | N/A       | MACHINE SCREW; PHILLIPS; PAN; 4-40; 3/8IN; 18-8 STAINLESS STEEL; NOTE: SET TO OBSOLETE FOR PART NUMBER CORRECTION. KINDLY REFER TO PART NUMBER 91772A108;9901                  |
|     29 |     4 | SPACER1-SPACER4                                                                   | 02-SO440012H-01   | MCH_SO_F_HEX_4-40X1/2                                    | GENERIC PART                            | N/A       | STANDOFF; FEMALE-THREADED; HEX; 4-40; 1/2IN; ALUMINUM                                                                                                                          |
|     30 |     3 | SU1-SU3                                                                           | 02-JMPFS1100B-00  | S1100-B;SX1100-B; STC02SYAN                              | KYCON; KYCON; SULLINS ELECTRONICS CORP. | SX1100-B  | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                                                                        |
|     31 |     1 | U1                                                                                | 00-SAMPLE-01      | MAX98050                                                 | MAXIM                                   | MAX98050  | EVKIT PART - IC; MAX98050; LOW POWER; HIGH PERFORMANCE ANC AUDIO CODEC; PACKAGE OUTLINE DRAWING: 21-100435; PACKAGE CODE: N362E2+1                                             |
|     32 |     1 | PCB                                                                               | N/A               | MAX98050_DEV_APPS_A                                      | MAXIM                                   | PCB       | PCB:MAX98050_DEV_APPS_A                                                                                                                                                        |

| DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)                                                    | DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)                             |
|------------------------|------------------------|-------------------------------------------------------------------------|------------------------|------------------------|------------------------|------------------------|--------------------------------------------------|
| ITEM                   | QTY                    | REF DES                                                                 | MAXINV                 | MFG PART #             | MANUFACTURER           | VALUE                  | DESCRIPTION                                      |
| 1                      | 2                      | C26, C27                                                                | N/A                    | N/A                    | N/A                    | OPEN                   | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR - EVKIT |
| 2                      | 3                      | C36-C38                                                                 | N/A                    | N/A                    | N/A                    | OPEN                   | PACKAGE OUTLINE 0201 NON-POLAR CAPACITOR - EVKIT |
| 3                      | 30                     | R2, R5-R16, R18, R19, R21-R23, R25-R27, R40-R42, R56, R58, R60, R68-R70 | N/A                    | N/A                    | N/A                    | OPEN                   | PACKAGE OUTLINE 0402 RESISTOR - EVKIT            |
| 4                      | 17                     | C1-C7, C24, C25, C28-C35                                                | N/A                    | N/A                    | N/A                    | OPEN                   | PACKAGE OUTLINE 0402 NON-POLAR CAPACITOR - EVKIT |
| TOTAL                  | 52                     |                                                                         |                        |                        |                        |                        |                                                  |

│

Evaluates: MAX98050

## MAX98050 EV Kit Schematic Diagrams

<!-- image -->

## MAX98050 EV Kit Schematic Diagrams (continued)

<!-- image -->

Evaluates: MAX98050

## MAX98050 EV Kit Schematic Diagrams (continued)

<!-- image -->

## MAX98050 Evaluation System

## MAX98050 EV Kit PCB Layout Diagrams

MAX98050 EV Kit PCB Layout Diagrams-Top Silkscreen

<!-- image -->

MAX98050 EV Kit PCB Layout Diagrams-Top View

<!-- image -->

│

## MAX98050 EV Kit PCB Layout Diagrams (continued)

MAX98050 EV Kit PCB Layout Diagrams-Internal 2 (Ground)

<!-- image -->

MAX98050 EV Kit PCB Layout Diagrams-Internal 3 (Signals)

<!-- image -->

Evaluates: MAX98050

│

## MAX98050 EV Kit PCB Layout Diagrams (continued)

MAX98050 EV Kit PCB Layout Diagrams-Internal 4 (Power)

<!-- image -->

MAX98050 EV Kit PCB Layout Diagrams-Internal 5 (Ground)

<!-- image -->

Evaluates: MAX98050

│

## MAX98050 Evaluation System

## MAX98050 EV Kit PCB Layout Diagrams (continued)

MAX98050 EV Kit PCB Layout Diagrams-Bottom View

<!-- image -->

MAX98050 EV Kit PCB Layout Diagrams-Bottom Silkscreen

<!-- image -->

Evaluates: MAX98050

│

## MAX98050 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/20           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX98050