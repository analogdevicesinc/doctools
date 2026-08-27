<!-- lastmod 2022-10-10 -->
## MAX98091 TQFN Evaluation Kit

## General Description

The MAX98091 evaluation kit (EV kit) is a fully assembled and  tested  circuit  board  that  evaluates  the  MAX98091 audio codec. The MAX98091 is an integrated audio codec including an earpiece amplifier, stereo Class D amplifier, stereo DirectDrive ®  headphone amplifier, and digital signal processing.

To  enable  easy  connection  to  a  wide  range  of  audio sources,  the  EV  kit  includes  audio  devices  to  convert both USB and S/PDIF data to I 2 S data. The EV kit also integrates  a  MAXQ2000  microcontroller  to  enable  I 2 C and SPI communication with the on-board I 2 C- and SPIcapable  devices.  A  simple  and  intuitive  graphical  user interface  (GUI)  provides  communication  with  the  EV  kit through Windows ®  OS running Windows XP ® -, Windows 7 -, or  Windows 8-compatible software.

## Simplified EV Kit Block Diagram

<!-- image -->

DirectDrive is a registered trademark of Maxim Integrated Products, Inc.

Windows and Windows XP are registered trademarks and registered service marks of Microsoft Corporation.

<!-- image -->

Evaluates: MAX98091 (TQFN)

## Features

- 2.8V to 5.5V Single-Supply Operation
- On-Board USB-to-I 2 C Interface
- On-Board USB-to-I 2 S Converter
- On-Board S/PDIF Transceiver
- On-Board Clock Source
- On-Board Digital Microphone
- Windows XP-, Windows 7-, and Windows 8-Compatible Software
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## MAX98091 TQFN Evaluation Kit

## Quick Start

## Required Equipment

- MAX98091 EV kit (TQFN)
- Two A to mini-B USB cables (included)
- 2.8V to 5.5V, 2A DC power supply
- Set of headphones with a 3.5mm plug
- User-supplied Windows XP, Windows 7, or Windows 8 PC with two available USB ports

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The following steps are used to configure the EV kit for PC audio playback to verify the EV kit's functionality:

- 1) Visit www.maximintegrated.com/evkitsoftware to download the latest version of the MAX98091 software, MAX98091EVSwSetupVx.x.ZIP. Save the software to a temporary folder and uncompress the ZIP file.
- 2) Install the software and USB driver on your computer by running the executable (.exe) program inside the temporary folder. The program files are copied and icons are created in the Windows Start | Programs | Maxim Integrated | MAX98091 | Evaluation Soft -ware menu. During software installation, some versions of Windows might show a message indicating that this software is from an unknown publisher. This is not an error condition and it is safe to proceed with the installation.
- 3) Verify that all jumpers are in their default positions, as shown in Figure 1 (same as listed in Table 2).
- 4) Connect the power supply between the SPKVDD and GND PCB pads.
- 5) Set the power supply to 4.2V with a 2A current limit and turn it on.

## Table 1. MAX98091 Software Install Folder

Evaluates: MAX98091 (TQFN)

- 6) Connect a USB cable between the PC and the J1 USB port (USB CONTROL) on the EV kit. A Windows message appears when connecting to the EV kit for the first time. Each version of Windows might have a slightly different message. If Windows reports that the device is ready to use, then the USB driver has been installed successfully.
- 7) If needed, the USB driver can be manually installed by navigating to the C:\Program Files(x86)\Maxim Integrated\MAX98091\Evaluation Software folder (default installation directory) and following the instructions in the USB\_Driver\_Help.PDF document. The help file is located in the USBDriver folder.
- 8) Connect the headphones to the headphone jack (HP).
- 9) Start the MAX98091 Evaluation Software by opening its icon in the Start | Programs | Maxim Integrated | MAX98091 | Evaluation Software menu. The software main window appears, as shown in Figure 3.
- 10)  Wait while the software connects to the EV kit. Once the connection is established, the status bar at the bottom indicates that the USB and MAX98091 are connected.
- 11)  Once the USB and device connections have been established, select the Block Diagram tab.
- 12)  Click on the USB block.
- 13)  Click Yes to automatically configure the EV kit for USB audio playback.
- 14)  Connect a USB cable between the PC and the J2 USB port (USB AUDIO). Windows automatically detects the EV kit as a sound card and installs the USB audio class drivers.
- 15)  Open Windows' Sound dialog and select the Playback tab. A USB Audio DAC item, similar to Figure 2, is added to the list of available playback devices. All audio played through this device is sent to the EV kit.
- 16)  Verify that the USB Audio DAC item is set as the default device.
- 17)  Verify that audio can be heard through the connected headphones.
- 18)  Quick start complete. Refer to the MAX98091 IC data sheet for additional information.

| ITEM                              | DESCRIPTION                                 |
|-----------------------------------|---------------------------------------------|
| MAX98091.exe                      | MAX98091 evaluation software                |
| USBDriver/FTDI/CDM21000.exe       | USB driver installer                        |
| USBDriver/USB_Driver_Help_300.pdf | USB driver installation help file           |
| Uninstall.exe                     | Uninstalls the MAX98091 evaluation software |

│

## Evaluates: MAX98091 (TQFN)

Figure 1. Default Shunt Configuration

<!-- image -->

Figure 2. Playback Device

<!-- image -->

│

Figure 3. MAX98091 Software Main Window

<!-- image -->

## MAX98091 TQFN Evaluation Kit

## Detailed Description of Software

The MAX98091 EV kit is intended to be evaluated with the MAX98091 software, as it provides an intuitive graphical user interface (GUI) for programming the MAX98091 device  and  also  includes  a  handful  of  features  that  are intended to aid evaluation.

The MAX98091 software main window is divided into three sections:  software  buttons,  status  panel,  and  tabbed pages (Figure 3). The buttons provide basic functionality and the status panel provides monitoring capabilities. The tabbed pages provide the controls for programming the MAX98091.

The Quick  Setup tab  provides  access  to  the  device's quick setup registers (0x04-0x0B). The Block Diagram tab  provides  access  to  all  the  device  registers  and  utilizes  diagram  blocks  to  access  dialog  windows.  The dialogs  contain  the  GUI  controls  used  to  program  the device.  The Control  Registers tab  provides  access  to registers 0x00-0x45 as well as to the revision ID register, 0xFF. The EQ Registers tab provides access to the device's parametric equalizer (EQ), registers 0x46-0xAE. The BQ Registers tab  provides  access  to  the  device's biquad (BQ) filter, registers 0xAF-0xBD. The MIC3/4 BQ Registers tab provides access to the biquad (BQ) filter, registers 0xC3-0xD1, in the DIGMIC2 path.

Go to www.maximintegrated.com/evkitsoftware to download the MAX98091 software. When evaluating  with  the  EV  kit  and  software,  it  is  recommended that this document be used in conjunction with the MAX98091 IC data sheet.

## Evaluates: MAX98091 (TQFN)

## Software Buttons

There are four buttons available on the main window of the  MAX98091  software: Power,  Read All  (F4) , Reset (F12) ,  and Connect .  These  buttons  are  always  accessible, regardless of the active tab.

## Power

The Power button programs the MAX98091's SHDN bit to enable/disable the device. When the device is disabled/ enabled,  the  button  image  is  gray/blue,  respectively. When the device is in shutdown ( SHDN bit = 0) the software is still able to communicate with the device, as its I 2 C interface remains active.

## Read All (F4)

The Read All (F4) button performs the following sequence of  reads  and  updates  the  associated  register  tab.  This function is also available from the Actions menu.

- Read the MAX98091 IRQ pin. This only updates the Status panel.
- Read the status register (0x01). This also updates the Status panel.
- Read control registers (0x03-0x45).
- Read parametric equalizer registers (only if the EQ Registers tab is visible or if EQ bands are enabled).
- Read biquad registers (only if the BQ Registers tab is visible or if the biquad filter is enabled).
- Read Revision ID register (0xFF).
- Read S/PDIF Transceiver (U201) registers.

Figure 4. Reset Dialog

<!-- image -->

│

## Reset (F12)

The Reset (F12) button resets the checked items as indicated on the Rest dialog window  (Figure 4). This function is also available from the Actions menu.

## Connect/Disconnect

The Connect/Disconnect button  is  used  to  connect or  disconnect  the  software  from  the  EV  kit,  which  connects to a PC through its USB CONTROL (J1) port or a TCP connection. The button either displays Connect or Disconnect, depending on the current state of the EV kit connection.

When the button displays Connect ,  it  indicates  that  the software  is  not  connected  to  the  EV  kit.  Pressing  the button initiates the connection sequence. When using a TCP connection,  ensure  that  it  has  been  set  up  in  the software  before  pressing Connect .  The  TCP  connection  is  configured  from  the TCP  Configuration  Setup dialog, which is accessed by selecting Options | Connect Options | TCP from the Menu bar.

When the  button  displays Disconnect ,  it  indicates  that the  software  is  connected  to  the  EV  kit.  Pressing  the button initiates the disconnect sequence.

## Status Panel

The  MAX98091 Status panel,  located  on  the  left  side of  the  software  main  window,  displays  the  state  of  the six status bits (register 0x01), the shutdown bit (register 0x45), and the state of the MAX98091 hardware IRQ pin. The color of a Status label indicates whether it is asserted or not. When asserted, the label is teal colored and when not asserted, the label is light gray.

Note: A status bit's interrupt must be enabled in order for the  status  bit  to  get  updated  in  the  Status  register. The interrupts are enabled from the Interrupts block.

## Quick Setup Tab

The Quick  Setup tab  provides  controls  for  configuring the quick setup registers (0x04-0x0B). These quick setup registers  are  write-only  and  function  like  pushbuttons. Refer  to  the Quick  Setup  Configuration section  in  the MAX98091 IC data sheet for additional details.

As the first  four  steps  are  completed,  the  section  at  the bottom  of Step  5 is  updated.  Checkmarks  indicate  that the step is complete and the Reg: and Bitlabels indicate which quick setup register and bit are programmed.

For simplicity, this tab is divided into five steps as shown in  Figure  5.  The  first  three  steps  configure  the System

## Evaluates: MAX98091 (TQFN)

Clock , Sample Rate , Mode , and Format . The fourth step configures the audio Input and Output (I/O) signal path. As  I/O  selections  are  made,  a  corresponding  image  is shown in the Configuration group box, providing a visual representation of the selected path. When a valid I/O path is  selected, Step  4 is  complete.  To  clear  the  input  and output selections, press the Clear button.

Once all four checkmarks are visible, press the Configure button  to  program  the  device.  If  an  invalid  I/O  path  is selected, the software reports ' Not a valid I/O configura -tion ' and the I/O selections are cleared.

## Block Diagram Tab

The MAX98091 software uses a block diagram to facilitate the  programming  of  the  MAX98091  as  well  as  provide a  visual  representation  of  the  device's  functions  and current configuration. The controls for a given function(s) are grouped on the same dialog window, which is opened by clicking on the associated block image. The blocks that are within the dotted border are related to the MAX98091 device and the blocks outside the dotted border are for the associated support circuitry.

There are two types of blocks in the block diagram and they are distinguished by the mouse cursor image. The mouse  cursor  changes  to  a  hand  when  over  an  active block  and  changes  to  an  up-arrow  when  over  a  toggle block.  An active block opens a dialog window, containing controls  for  configuring  the  device. A  toggle  block  does not open a dialog window, but toggles a specific setting when clicked.

The  color  of  the  blocks  changes,  depending  on  the enabled  state  of  the  function(s)  it  controls.  A  disabled block  is  grey  and  an  enabled  block  is  teal.  Figure  6 shows the block diagram with the MAX98091 configured for  USB  audio  input  and  headphone  output. Note: A disabled/enabled block does not necessary indicate that its associated audio path is disabled/enabled.

## S/PDIF and USB

The  S/PDIF  and  USB  blocks  are  outside  the  dotted border  and  thus  not  related  to  the  MAX98091  device. These  blocks  represent  the  stereo  digital  audio  transceiver (U201) and the USB stereo audio DAC (U200) that are designed onto the EV kit. These blocks are used to enable the associated circuits, but also include controls that automatically configure the MAX98091 to work with the enabled audio device.

## Evaluates: MAX98091 (TQFN)

Figure 5. Quick Start Tab

<!-- image -->

## Evaluates: MAX98091 (TQFN)

Figure 6. MAX98091 Software Block Diagram

<!-- image -->

## MAX98091 TQFN Evaluation Kit

The S/PDIF and USB audio devices are connected to the MAX98091 I 2 S bus through analog switches (U8-U10), which  are  controlled  through  the  MAX98091  software. These  switches  are  automatically  configured  once  the S/PDIF or USB block is enabled, but they can be toggled by clicking on the switch blocks.

## Dialog Windows

Dialog windows are associated with specific blocks in the block diagram and they contain the controls for configuring  the  registers  that  are  associated  with  that  particular block  of  the  MAX98091  device.  The  highlighted  blocks in Figure 7 are the blocks that share a dialog window. In addition, the blocks that are outlined can have their dialog windows  synchronized  to  each  other.  This  dialog  sync feature is a software feature and is enabled by selecting the S ync Right and Left checkbox in the dialog window. When  enabled,  the  software  programs  the  same  user configurations to both the left and right output channels.

A dialog window is opened by clicking on a diagram block. Figure  8  shows  the  typical  GUI  controls  that  are  found on dialog windows and Figure 9 shows the biquad filter dialog. When a control's state is changed, it results in the programming of the associated device register(s).

The  biquad  dialog  uses  the  same  types  of  controls  as other  dialogs,  but  it  also  provides  a  plot  of  the  filter's amplitude  and  phase.  This  provides  a  visual  representation  of  the  programmed  coefficients  as  well  as  some insight into the filter's behavior. The only two blocks that use this type of biquad filter dialog are the Biquad Filter and Parametric Equalizer blocks.

The  filter  dialog  shown  in  Figure  9  is  for  the  7-band parametric equalizer as can be seen by the seven available filters.  Each  filter  can  be  individually  programmed,  and when selected,  appears  as  yellow  lines  on  the  plots. A sum of all the enabled filters can be displayed by selecting the Show Cascade checkbox. The  cascaded  response appears as a blue line on the plots. The Biquad Filter dialog window is similar to that shown in Figure 9, except that it is only a single biquad filter.

## Registers Tabs

The  MAX98091  software  has  four  device  register  tabs: Control  Registers , EQ Registers , BQ Registers, and MIC3/4  BQ  Registers .  These  register  tabs  display  the device's registers in a typical register map format. Each of the register tabs provides two methods for configuring the device. As an example, Figure 10 shows the register tab elements of register 0x25.

## Evaluates: MAX98091 (TQFN)

The  first  configuration  method  involves  clicking  on  the register's bit  labels. A  greyed-out bit label indicates that the bit is currently set low. A bold bit label indicates that the bit is currently set high. Clicking on a bit toggles its state  and  result  in  a  write  to  that  register.  This  action also  updates  the  value  displayed  in  the  register's Edit box,  located  to  the  right  of  the  bit  labels. Note: Readonly bits cannot be clicked/toggled and are only meant to display the register's current state. These read-only bits are updated by performing a read all operation.

The  second  configuration  method  involves  entering  a hexadecimal value in the register's associated Edit box and then pressing the Enter key. The software automatically  configures  the  device  register  once  the  Enter  key is pressed. This method also updates the state of the bit labels to reflect the value shown in the Edit box.

## Control Registers

The Control Registers tab  provides  access  to  most  of the device's control registers and all of its status registers. The  range  of  registers  accessible  from  this  tab  is  from register address 0x00-0x45 and the revision ID register (0xFF).

The Write  All  (F8) button  writes  to  all  the  writeable registers on the Control Registers tab. It also writes to all the S/PDIF transceiver registers and updates the configurable GPIOs.

Register changes made through this tab are reflected on the Block Diagram tab. As such, the Control Registers tab  and  the Block  Diagram tab  are  always  in  sync. However,  register  changes  made  through  the Control Registers tab  are  not  automatically  reflected  on  open dialog windows. To have an open dialog window updated, close then reopen the dialog window.

## Equalizer (EQ) Registers

The  main  use  of  the EQ  Registers tab  is  to  provide access  to  the  raw  data  contained  in  the  EQ  registers (0x46-0xAE).  The  preferred  method  for  configuring  the device's  equalizer  is  through  the 7-Band  Parametric Equalizer dialog window (Figure 9).

The registers on this tab are grouped into seven bands (Band  1  through  Band  7)  and  each  band  consists  of fifteen registers. These fifteen registers are then divided into five coefficients (B0\_, B1\_, B2\_, A1\_, and A2\_). The coefficients  are  configured  by  clicking  the  register  bit labels  or  by  entering  a  24-bit  hex-formatted  value  in  its Edit box.

## Evaluates: MAX98091 (TQFN)

Figure 7. Dialog Windows

<!-- image -->

## Evaluates: MAX98091 (TQFN)

Figure 8. Diagram Blocks with Shared and/or Synchronized Dialog Windows

<!-- image -->

│

<!-- image -->

Figure 9. Biquad Filter Dialog Window

Figure 10. Register Tab Elements

<!-- image -->

Figure 11. Coefficient (B0) of EQ Band 1

<!-- image -->

│

The Update Coefficients button updates the EQ register map to reflect any changes that were made through the 7-Band Parametric Equalizer dialog window.

Note: Coefficient changes made  through this EQ Registers tab  are  not  reflected  on  the Block  Diagram tab or the 7-Band Parametric Equalizer dialog window.

## Biquad (BQ) Registers

The  main  use  of  the BQ  Registers and MIC3/4  BQ Registers tab  is  to  provide  access  to  the  raw  data contained  in  the  15  BQ  registers  (0xAF-0xBD)  and  15 MIC3/4 BQ registers (0xC3-0xD1), respectively. The preferred method for configuring the device's biquad filter is through the Biquad Filter dialog window.

The  BQ  registers  are  divided  into  five  coefficients  (B0, B1,  B2,  A1,  A2)  that  are  configured  by  clicking  the register bit labels or entering a 24-bit hex-formatted value in the coefficient's Edit box.

The Update  Coefficients button  updates  the  tab  to reflect any changes that were made through the Biquad Filter dialog window.

Note: Coefficient changes made  through the BQ Registers tabs are not reflected on the Block Diagram tab or the Biquad Filter dialog window.

## Menu Bar

All the Menu bar items are described in Table 1. Additional information on a few of the menu items is provided in the following sections.

## File

The software's save and load features are accessed from the File menu  item.  The  save  feature  saves  the  data currently  displayed  on  the Control  Registers tab  and S/PDIF  Transceiver tab.  The  current  state  of  the  configurable GPIO pins is also saved to the configuration file. The data from the EQ Registers and BQ Registers tabs is saved if the filters are enabled.

A  configuration  file's  main  purpose  is  to  capture  the current state of the MAX98091's registers, as displayed on  the  register  tabs.  This  feature  makes  it  easy  to program a device to a saved/known state and allows for the sharing of configuration files between users. The file and save features can still be used when an EV kit is not connected. This  allows  configuration  files  to  be  created and opened without the hardware and further contributes

## Evaluates: MAX98091 (TQFN)

to the sharing of configuration files. To facilitate file usage, use descriptive file names when saving configuration files.

Since the configuration file is automatically generated by the software, it is not meant to be manually formatted and doing so can cause file loading issues. To open a configuration file for viewing, use a plain text editor.

Select File | Save Settings Ctrl+S to create a  configuration file. Data is saved as tab-delimited values and the file is saved with a .98091 extension.

To  load  a  saved  configuration  file,  select File  |  Load Settings  Ctrl+O . Only  writeable registers are programmed with data from the loaded configuration file.

## Connect Options

The Connect Options item is accessed from the Options menu. This menu item provides two options for connecting  the  EV  kit  to  the  MAX98091  software. The  simplest method  ( MAXQ  USB )  uses  a  standard  male-to-male USB cable (A to mini-B) connection. A local PC, running the MAX98091 software, connects to the USB CONTROL port (J1) on the EV kit. This method utilizes the on-board MAXQ2000 microcontroller circuitry to communicate with the MAX98091 I 2 C-capable device.

The TCP option  is  used  to  set  up  an  internet  connection  between  the  EV  kit  and  the  software.  To  use  this feature, additional hardware and software (not provided) are required. The additional tools would function as the communication medium between the ethernet connection and the MAX98091's I 2 C bus. When using this option, the USB CONTROL port (J1) on the EV kit still needs to be powered to supply the on-board LDOs.

## Detailed Hardware Description

The MAX98091 EV kit evaluates the TQFN package version of the MAX98091 audio codec and provides access to all analog and digital inputs/outputs on the device. The EV kit also includes USB-powered linear-dropout (LDO) regulators  that  allow  the  EV  kit  to  be  evaluated  with  a single external supply (+2.8V to +5.5V).

Integrated into the EV kit design are a stereo digital audio transceiver  (U201)  and  a  stereo  audio  DAC  with  USB interface  (U200).  The  digital  audio  transceiver  provides audio  input  and  output  through  the  on-board  TOSLINK (SPDIFOUT and SPDIFIN) connectors and the USB audio DAC allows for audio input from the USB AUDIO port (J2).

## MAX98091 TQFN Evaluation Kit

## Table 1. Menu Bar Items

| MENU ITEM                         |                                   | DESCRIPTION                                                                                                                                                                                                                              |
|-----------------------------------|-----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FILE                              |                                   |                                                                                                                                                                                                                                          |
| Load Settings                     | Ctrl+O                            | Loads a configuration file (as saved by the Save Settings option).                                                                                                                                                                       |
| Save Settings                     | Ctrl+S                            | Saves a configuration file containing the current device settings.                                                                                                                                                                       |
|                                   | Exit                              | Closes the MAX98091 software.                                                                                                                                                                                                            |
| VIEW                              |                                   |                                                                                                                                                                                                                                          |
| Show S/PDIF Transceiver Registers | Show S/PDIF Transceiver Registers | Toggles the visibility of the S/PDIF Transceiver register tab, allowing for more control of the on-board S/PDIF transceiver (U201).                                                                                                      |
| OPTIONS                           |                                   |                                                                                                                                                                                                                                          |
| Autoconnect                       | Autoconnect                       | When selected, the software checks the connection status of the MAXQ2000 interface and the MAX98091 device approximately every second. If not connected, the software attempts to establish a connection.                                |
| Autoread Status                   | Autoread Status                   | When selected, the device's status registers read approximately every second. The Status panel and Control Registers tab are refreshed after each read.                                                                                  |
| Autoshutdown for Register Writes  | Autoshutdown for Register Writes  | When selected, the software ensures that the MAX98091 is in shutdown before writing to certain registers. Refer to Table 90 of the MAX98091 data sheet for the registers that should only be programmed while the device is in shutdown. |
| I 2 C CLOCK                       | SPEED                             |                                                                                                                                                                                                                                          |
| 100kHz 400kHz                     | 100kHz 400kHz                     | Configures the clock speed of the I 2 C interface.                                                                                                                                                                                       |
| Configure MCLK Routing            | Configure MCLK Routing            | Opens the MCLK Routing dialog window that is used to select a clock source for the MAX98091 master clock (MCLK) input. In order for this clock to drive the MAX98091, a shunt must be placed on pins 1-4 of header JU14.                 |
| Connect Options                   | Connect Options                   | Sets the interface method between the EV kit and MAX98091 software.                                                                                                                                                                      |
| Cmod USB                          | Cmod USB                          | The MAX98091 EV kit interfaces to a local PC through its USB Control (J1) port.                                                                                                                                                          |
| TCP                               | TCP                               | The MAX98091 EV kit interfaces to a remote PC through a TCP connection. Additional hardware setup required.                                                                                                                              |
| ACTIONS                           |                                   |                                                                                                                                                                                                                                          |
| Read All Registers F4             | Read All Registers F4             | Reads all MAX98091 registers and updates the GUI. Also reads all of the S/PDIF transceiver (U201) registers.                                                                                                                             |
| Write All Registers F8            | Write All Registers F8            | Writes the data from the Edit boxes, on the Control Registers tab, to the MAX98091 device and updates the GUI. Also writes to the S/PDIF transceiver (U201) registers and updates all configurable GPIO pins.                            |
| Reset All RegistersF12            | Reset All RegistersF12            | Resets the device according to the check box selections on the Reset dialog window.                                                                                                                                                      |
| HELP                              |                                   |                                                                                                                                                                                                                                          |
| About                             | About                             | Pop-up window that provides information about the software.                                                                                                                                                                              |

│

Evaluates: MAX98091 (TQFN)

## MAX98091 TQFN Evaluation Kit

In  addition,  the  EV  kit  includes  a  MAXQ2000 microcontroller  that  facilitates  evaluation  by  providing  I 2 C,  SPI, and GPIO interfaces, allowing the MAX98091 software to communicate with the devices on the EV kit.

## Power Supplies

The EV kit requires a single 2.8V to 5.5V external supply (SPKVDD) to operate. All other MAX98091 supply inputs are  powered  from  the  J1  USB  port.  Jumpers  JU1-JU4 (see  Table  2)  allow  all  MAX98091  supply  inputs  to  be disconnected from USB power and connected to external supplies. In addition, jumpers JU1 and JU2 are used to configure the on-board voltage connected to DVDD and DVDDIO, respectively. See Table 2 for jumper JU1-JU4 configuration options.

To perform supply current and  power-consumption measurements,  use  external  supplies  to  power  the MAX98091  supply inputs:  HPVDD,  AVDD,  DVDD, and DVDDIO.

## Jumper Selection

The EV kit  includes  25  jumpers  to  adjust  various  hardware configuration options. Table 2 describes all the jumpers available on the EV kit.

## Master Clock (MCLK) Selection

Jumper  JU12  selects which master clock  (MCLK) source drives the MAX98091 device. The available clock configurations  are  listed  in  Table  3.  When  streaming audio through the on-board USB AUDIO port or S/PDIF connectors, the EV kit software automatically configures the  U8  and  U9  switches  to  route  the  appropriate  clock signal to the MAX98091 MCLK input.

If  an  external  audio  source  is  used,  choose  either  the on-board  13MHz  oscillator  or  an  external  clock.  To connect an external clock, remove the shunt from JU14 and connect the clock to pin 1.

## Evaluates: MAX98091 (TQFN)

## I 2 S Audio I/O

The  EV  kit  provides  three  methods  for  evaluating  the MAX98091's digital audio interface (DAI). The first method is through the I 2 S header (JU15). This method provides the most direct connection to the MAX98091's DAI.

The two other methods involve streaming audio onto or off the EV kit. The USB AUDIO port (J2) is used to stream audio onto the EV kit. The SPDIFIN and SPDIFOUT optical connectors are used to stream audio onto or off the EV kit, respectively.

The USB and S/PDIF digital audio signals are switched onto the PCM bus through switches U10 and U11. The switches  are  automatically  configured  by  the  evaluation kit software, depending on which path has been enabled ( USB or S/PDIF ).

Note: All  PCM  digital  audio  is  routed  through  the  I 2 S header before routing to the MAX98091's DAI. This is true for the USB AUDIO input as well as for the S/PDIF I/O. See Figure 12.

## Digital Audio Interface Header (JU15)

Header  JU15  provides  access  to  the  MAX98091  digital  audio  interface  (DAI).  See  Table  4  for  individual  pin descriptions. Follow the steps below to configure JU15:

## Direct connection of PCM digital audio:

- 1) Remove the shunts from JU15 (place shunts on Position 1 for safekeeping).
- 2) Connect the PCM signals/grounds to the corresponding  position  2  (center)  and  position  3 (right) pins of JU15.

## USB Audio Input or SPDIF I/O:

- 1) Install the four shunts between  position 2 and position 3 of JU15.
- 2) For audio input, connect an audio output device to the USB AUDIO or SPDIFIN connector.
- 3) For audio output, connect an audio input device to the SPDIFOUT connector.

│

## MAX98091 TQFN Evaluation Kit

## Table 2. Jumper Configuration

| HEADER   | SHUNT POSITION   | DESCRIPTION                                                                                                                                      |
|----------|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| JU1      | 1-2*             | DVDD connected to +1.2V                                                                                                                          |
| JU1      | 2-3              | DVDD connected to +1.8V                                                                                                                          |
| JU1      | Open             | DVDD externally supplied                                                                                                                         |
| JU2      | 1-2              | DVDDIO connected to +3.3V                                                                                                                        |
| JU2      | 2-3*             | DVDDIO connected to +1.8V                                                                                                                        |
| JU2      | Open             | DVDDIO externally supplied                                                                                                                       |
| JU3      | Installed*       | AVDD connected to +1.8V                                                                                                                          |
| JU3      | Open             | AVDD externally supplied                                                                                                                         |
| JU4      | Installed*       | HPVDD connected to +1.8V                                                                                                                         |
| JU4      | Open             | HPVDD externally supplied                                                                                                                        |
| JU5      | Installed        | Connects JACKSNS to headphone jack, HP, for jack detection; ensure that a shunt is installed on JU27/JU6 or JU28/JU22 for proper jack detection. |
| JU5      | Open*            | Disconnects JACKSNS from the headphone jack, HP                                                                                                  |
| JU6      | Installed        | Connects MICBIAS to the IN1 input through a 2.2k Ω resistor (for microphone input)                                                               |
| JU6      | Open*            | Disconnects MICBIAS from the IN1 input                                                                                                           |
| JU7      | Installed        | Connects MICBIAS to the IN3 input through a 2.2kΩ resistor (for microphone input)                                                                |
| JU7      | Open*            | Disconnects MICBIAS from the IN3 input                                                                                                           |
| JU8      | Installed        | Connects IN2 directly to ground for single-ended operation                                                                                       |
| JU8      | Open*            | Allows for differential operation                                                                                                                |
| JU9      | Installed        | Connects IN2 to ground through a 2.2kΩ resistor (used when IN1 is mic biased)                                                                    |
| JU9      | Open*            | Disconnects IN2 from ground                                                                                                                      |
| JU10     | Installed        | Connects IN4 directly to ground for single-ended operation                                                                                       |
| JU10     | Open*            | Allows for differential operation                                                                                                                |
| JU11     | Installed        | Connects IN4 to ground through a 2.2kΩ resistor (used when IN3 is mic biased)                                                                    |
| JU11     | Open*            | Disconnects IN4 from ground                                                                                                                      |
| JU14     | -                | See Table 3                                                                                                                                      |
| JU15     | -                | See Table 4                                                                                                                                      |
| JU16     | 2-3, 5-6*        | Connects the on-board I 2 C master to MAX98091                                                                                                   |
|          | Open             | Allows external I 2 C control of MAX98091                                                                                                        |
| JU17     | Installed        | Removes AC-coupling capacitor, C4, from LOUTL line output                                                                                        |
|          | Open*            | Adds AC-coupling capacitor, C4, to LOUTL line output                                                                                             |
|          | Installed        | Removes AC-coupling capacitor, C5, from LOUTR line output                                                                                        |
| JU18     | Open*            | Adds AC-coupling capacitor, C5, to LOUTR line output                                                                                             |
| JU19     | Installed        | Connects MICBIAS to IN5 through a Schottky diode and 2.2kΩ resistor                                                                              |
|          | Open*            | Disconnects MICBIAS from IN5                                                                                                                     |
| JU20     | Installed        | Connects IN5 to the headphone jack, HP (for microphone input)                                                                                    |
|          | Open*            | Disconnects IN5 from the headphone jack, HP                                                                                                      |

│

Evaluates: MAX98091 (TQFN)

## Table 2. Jumper Configuration (continued)

| HEADER   | SHUNT POSITION   | DESCRIPTION                                                                         |
|----------|------------------|-------------------------------------------------------------------------------------|
| JU21     | -                | See Table 8.                                                                        |
| JU22     | Installed        | Connects MICBIAS to IN5 through a 2.2kΩ resistor                                    |
| JU22     | Open*            | Disconnects MICBIAS from IN5                                                        |
| JU23     | Installed        | Connects IN6 to ground through a 2.2kΩ resistor (when IN5 is microphone biased)     |
| JU23     | Open*            | Disconnects IN6 from ground                                                         |
| JU24     | Installed        | Connects IN6 directly to ground for single-ended operation                          |
| JU24     | Open*            | Allows for differential operation                                                   |
| JU27     | Installed        | Connects IN1 to the headphone jack, HP (for microphone input)                       |
| JU27     | Open*            | Disconnects IN1 from the headphone jack, HP                                         |
| JU100    | Installed*       | Connects the MAX98091 interrupt output ( IRQ ) to the on-board microcontroller      |
| JU100    | Open             | Disconnects the MAX98091 interrupt output ( IRQ ) from the on-board microcontroller |

## Table 3. Master Clock Source Configuration (JU14)

| SHUNT POSITION   | CLOCK SOURCE                   |
|------------------|--------------------------------|
| 1-2              | Disabled                       |
| 1-3              | 13MHz oscillator               |
| 1-4*             | Software-selected clock source |

## Table 4. DAI Header (JU15)

Figure 12. I 2 S Routing

| JU16              | JU16                | JU16               |
|-------------------|---------------------|--------------------|
| POSITION 1 (LEFT) | POSITION 2 (CENTER) | POSITION 3 (RIGHT) |
| GND               | CODEC_BCLK          | I2S_BCLK           |
| GND               | CODEC_LRCLK         | I2S_LRCLK          |
| GND               | CODEC_SDIN          | I2S_DAC            |
| GND               | CODEC_SDOUT         | I2S_ADC            |

<!-- image -->

Evaluates: MAX98091 (TQFN)

│

## MAX98091 TQFN Evaluation Kit

## S/PDIF Transceiver

The  S/PDIF  transceiver  (U201)  serves  as  a  format converter  between  I 2 S  and  S/PDIF.  Use  this  device  to send and receive digital audio over the optical connectors (SPDIFIN, SPDIFOUT).

When receiving  S/PDIF  data,  the  transceiver  outputs  a recovered master clock that is exactly 256 x f S , where f S is the sample rate. This clock signal can be used to clock the MAX98091.

When transmitting S/PDIF data, the transceiver requires a master clock input and if data is also being received, it uses the data to generate its own master clock.

If  S/PDIF  data  is  not  being  received,  the  transceiver generates  a  master  clock  based  on  the  LRCLK  signal being output by the MAX98091. For proper transmit-only operation, the S/PDIF transceiver must be configured in master mode.

The  S/PDIF  transceiver  is  controlled  through  the  SPI interface of the on-board MAXQ2000 microcontroller. See the Control Interface section.

## USB Audio

The  audio  DAC  with  USB  interface  (U200)  accepts  an audio stream from a PC, connected to the USB AUDIO port (J2), and converts it to I 2 S data. The USB audio DAC generates a master clock signal that can be used to clock the MAX98091. The clock signal is 256 x f S .

The USB audio DAC supports standard class drivers that are included with most operating systems. As a result, no

## Table 5. Analog Input Headers

| INPUT PAIR   | SINGLE-ENDED/ DIFFERENTIAL HEADER   | DIFFERENTIAL MICROPHONE HEADER   | MICBIAS HEADER   |
|--------------|-------------------------------------|----------------------------------|------------------|
| IN1/IN2*     | JU8                                 | JU9                              | JU6              |
| IN3/IN4      | JU10                                | JU11                             | JU7              |
| IN5/IN6*     | JU24                                | JU23                             | JU22 or JU19     |

*The microphone input from the HP headset is routed to IN1 and IN5 of these input pairs.

## Table 6. Analog Input Header Configuration

| INPUT   | SINGLE-ENDED   | DIFFERENTIAL          | DIFFERENTIAL MICROPHONE(W/MICBIAS)   |
|---------|----------------|-----------------------|--------------------------------------|
| IN1/IN2 | JU8 = On       | JU8 = Off JU9 = Off   | JU8 = Off JU9 = On                   |
| IN3/IN4 | JU10 = On      | JU10 = Off JU11 = Off | JU10 = Off JU11 = On                 |
| IN5/IN6 | JU24 = On      | JU24 = Off JU23 = Off | JU24 = Off JU23 = On                 |

## Evaluates: MAX98091 (TQFN)

drivers are required for this device, and it appears as a sound card in the PC. This allows for audio playback from the PC through the MAX98091 audio codec.

## Analog Inputs

The MAX98091 analog input pairs (IN1/IN2, IN3/IN4, and IN5/IN6) can be configured for microphone input, singleended input, or differential input. These input connections are made through the provided RCA connectors or PCB pads  (IN1-IN6).  In  addition,  the  IN1/IN2  and  IN5/IN6 device inputs can be connected to the 3.5mm audio jack (HP) for single-ended microphone input from a headset. Table  5  lists  the  configuration  headers  associated  with each input pair. See the specific input sections for configuration details.

## Single-Ended and Differential Inputs

The  three  analog  input  pairs  are  configured  for  singleended or differential line input by configuring the associated input headers (as listed in Table 6). For single-ended inputs,  the  input  header  configuration  is  independent  of the input type. For differential inputs, the header configuration is different for microphone inputs powered by the MAX98091 MICBIAS output.

## Analog Microphone

When using the analog input pairs for microphone input, the MAX98091 microphone bias (MICBIAS) output can be used to power the connected microphone. The MICBIAS output is connected to the IN1, IN3, or IN5 input through the input's associated MICBIAS header.

## MAX98091 TQFN Evaluation Kit

When evaluating with two analog microphones, and jack detection is required, the IN5 input needs to be connected to MICBIAS through jumper JU19. See Table 7.

## Digital Microphone

The EV kit includes on-board digital microphones (U2 and U3) for evaluation of the MAX98091's digital microphone interface. The digital microphone interface is enabled and configured through the software.

Install shunts on columns 2 and 3 (DUT and SRC) of jumper JU21 (Table 8) to connect the digital microphone(s) to the circuit. Use the Digital Mics block in the evaluation software  to  select  which  inputs  (IN1/I2  or  IN5/IN6)  are connected to the digital microphones and use the DIGMIC and DIGMIC2 blocks  to  enable  the  MAX98091  digital microphone inputs. Refer to the MAX98091 IC data sheet for additional details.

## Jack Detection

The  MAX98091's  flexible,  software-configurable  jackdetection  interface  is  used  to  detect  the  presence  or absence  of  a  headphone/headset  connected  to  the  HP jack. To provide jack detection on the HP jack, install a shunt on header JU5.

Figure 13. Headphone Jack

<!-- image -->

## Table 7. MICBIAS Connection

| MICROPHONE CONNECTION   | MICBIAS CONNECTED    | MICBIAS DISCONNECTED   |
|-------------------------|----------------------|------------------------|
| IN1                     | JU6 = On             | JU6 = Off              |
| IN3                     | JU7 = On             | JU7 = Off              |
| IN5                     | JU22 = On JU19 = Off | JU22 = Off JU19 = Off  |
| IN5*                    | JU22 = Off JU19 = On | JU22 = Off JU19 = Off  |

## Evaluates: MAX98091 (TQFN)

## Analog Outputs

The  EV  kit  provides  connections  for  each  of  the  three analog outputs. Table 9 lists the outputs and their available connections.

## Headphone

The MAX98091 stereo headphone output (HPR/HPL) is routed to the on-board 3.5mm audio jack (HP), as shown in  Figure  13.  The  HP  jack  also  allows  for  a  headset connection, with the microphone input (MIC) connected to either IN1 or IN5. See the Analog Inputs section for input configuration options.

## Stereo Class D Speaker Amplifier

The  MAX98091  integrates  a  filterless  Class  D  stereo amplifier. In systems with short speaker traces, the stereo speaker  outputs  (SPKLP/SPKLN  and  SPKRP/SPKRN test  points)  can  be  connected  directly  to  the  speaker loads. Although this amplifier is designed to operate completely filterless, the EV kit does provide stuffing options for two types of output filters.

When long speaker cables are used, a ferrite bead plus capacitor filter can be installed to prevent excessive EMI radiation. Although it is best to choose filter components based on EMI test results,  the  combination  of  a  680pF capacitor (C48-C51) with the Murata BLM18SG331TN1 ferrite  bead  (FB1-FB4)  generally  works  well.  With  this configuration, connect the speaker loads to the SPKLP/ SPKLN and SPKRP/SPKRN test points.

To allow analysis of the audio output with an oscilloscope, or  an  analyzer  not  designed  to  accept  Class  D  switching  waveforms,  populate  L1-L4  with  the  included  22μH inductors and make connections, to external equipment or speakers,  at  FSPKLP/FSPKLN  and  FSPKRP/FSPKRN. The LC filter is designed to work best with an 8Ω load. Do not connect a load to the unfiltered SPKLP/SPKLN and SPKRP/SPKRN outputs when L1-L4 are installed.

│

## Table 8. Digital Microphone Configuration (JU21)

| SHUNT POSITION   | CONNECTIONS                                                                                                    |
|------------------|----------------------------------------------------------------------------------------------------------------|
| 8-9, 11-12       | Digital microphones (U2, U3) connected to the MAX98091 digital microphone 1 interface (IN1/DMD1 and IN2/DMC1). |
| 2-3, 5-6         | Digital microphones (U2, U3) connected to the MAX98091 digital microphone 2 interface (IN5/DMD2 and IN6/DMC2). |

## Table 9. Analog Outputs

| OUTPUT            | CONNECTIONS                                                                |
|-------------------|----------------------------------------------------------------------------|
| Headphone         | 3.5mm audio jack (HP)                                                      |
| Speaker           | Unfiltered and filtered connection options (SPK_P/SPK_N and FSPK_P/FSPK_N) |
| Receiver/Line-Out | RCAconnectors (LOUTL and LOUTR)                                            |

## Table 10. I 2 C Header (JU16)

| JU16              | JU16                | JU16               |
|-------------------|---------------------|--------------------|
| POSITION 1 (LEFT) | POSITION 2 (CENTER) | POSITION 3 (RIGHT) |
| GND               | CODEC_SCL           | SCL                |
| GND               | CODEC_SDA           | SDA                |

## Receiver/Line Output

The  MAX98091  receiver/line  output  can  be  configured either  as  a  differential  receiver/earpiece  output  or  as  a stereo single-ended line output. The receiver/line outputs are routed, through AC-coupling capacitors, to the LOUTL and LOUTR RCA connectors. The AC-coupling capacitors can be shorted (effectively removed from the signal path) by installing a shunt on JU17 and JU18.

## Control Interface

The  MAXQ2000  (U100)  microcontroller  circuitry  is  the bridge between the on-board interface-enabled devices and the EV kit software, running on a PC connected to the USB CONTROL port (J1). The EV kit utilizes the MAXQ2000's I 2 C, SPI, and GPIO interfaces. See the Detailed Description of Software section for additional software details.

## I 2 C Interface

The MAXQ2000's I 2 C interface is routed to the MAX98091 device  through  jumper  JU16,  by  installing  shunts  across pins 2-3 of each row (Table 10). When using an external I 2 C  master,  remove  both  shunts  from  JU16  and  connect the external SDA and SCL signals to the position 2 pins of JU16. Ground connections can be made to the position 1 pins of JU16. Install pullup resistors at R15 and R16 if the external master does not include pullup resistors.

## SPI Interface

The MAXQ2000 SPI interface is used to control the onboard S/PDIF transceiver (U201). In the MAX98091 software, go to View | Show S/PDIF Transceiver Registers to activate the S/PDIF Transceiver tab.

## GPIO Interface and Pushbutton Programmer

Six  of  the  MAXQ2000  general-purpose  inputs/outputs (GPIOs)  are  used  for  either  controlling  or  monitoring  a specific  on-board  device/signal.  Four  of  the  GPIOs  are used  as  general-purpose  outputs  and  are  automatically set/cleared based on configuration settings made through the MAX98091 software.

The other two GPIOs are used as general-purpose inputs to  monitor  a  specific  signal.  The  first  general-purpose input ( CODEC\_IRQ ) is connected to the MAX98091 interrupt ( IRQ ) output. This IRQ is monitored by the microcontroller and its state is reported in the Status group box on the left  side  of  the  software  main window. This generalpurpose input can be disconnected from the MAX98091's IRQ output by removing the shunt from jumper JU100.

The  second  general-purpose  input  is  connected  to  a tactile switch (SW1) to realize a pushbutton programmer. When  SW1  is  pressed,  the  MAXQ2000  microcontroller responds  by  transmitting  a  sequence  of  configuration settings that have been preprogrammed into its firmware. This allows the EV kit to be quickly programmed with a specific configuration, without the need for a PC running the  software.  By  default,  the  pushbutton  programming feature is not enabled.

## Ordering Information

| PART               | TYPE   |
|--------------------|--------|
| MAX98091EVKIT#TQFN | EV Kit |

#Denotes RoHS compliant.

│

## MAX98091 (TQFN) EV Kit Bill of Materials

| REFERENCE DESIGNATOR                                                  |   QTY | DNI, DNP                        | DESCRIPTION                                    | MFG             | MFG PART #     |
|-----------------------------------------------------------------------|-------|---------------------------------|------------------------------------------------|-----------------|----------------|
| C1, C3, C104, C202                                                    |     4 |                                 | 10uF ±20%, 6.3V X5R ceramic capacitor (0805)   | TDK             | C2012X5R0J106M |
| C2, C11, C12, C13, C15, C18, C24, C26, C27, C29-C35, C200, C201, C204 |    19 |                                 | 1uF ±10%, 6.3V X5R ceramic capacitor (0402)    | TDK             | C1005X5R0J105K |
| C4, C5, C23, C25, C36, C37, C115- C118                                |    10 |                                 | 1uF ±10%, 6.3V X7R ceramic capacitor (0603)    | Murata          | GRM188R70J105K |
| C6, C10, C40, C41, C61-C63, C66, C203, C215, C216                     |    11 |                                 | 0.1uF ±10%, 10V X7R ceramic capacitor (0402)   | Kemet           | C0402C104K8RAC |
| C8, C9                                                                |     2 |                                 | 10pF ±5%, 50V C0G ceramic capacitor (0402)     | Murata          | GRM1555C1H100J |
| C20, C43, C211, C212                                                  |     4 |                                 | 0.01uF ±10%, 50V X7R ceramic capacitor (0603)  | Murata          | GRM188R71H103K |
| C21, C22                                                              |     2 |                                 | 2.2uF ±10%, 6.3V X5R ceramic capacitor (0603)  | Murata          | GRM188R60J225K |
| C28                                                                   |     1 |                                 | 2.2uF ±20%, 6.3V X5R ceramic capacitor (0402)  | Taiyo Yuden     | JMK105BJ225MV  |
| C38, C39, C52-C59                                                     |    10 |                                 | 0.22uF ±10%, 6.3V XR5 ceramic capacitor (0402) | TDK             | C1005X5R0J224K |
| C42, C44-C51                                                          |     9 | Do not install, do not purchase | Ceramic capacitors (0402)                      |                 |                |
| C65                                                                   |     1 |                                 | 10uF ±20%, 6.3V X5R ceramic capacitor (0603)   | Murata          | GRM188R60J106M |
| C100, C101, C105, C107-C110, C113, C114, C209, C210                   |    11 |                                 | 0.1uF ±10%, 50V X5R ceramic capacitor (0603)   | TDK             | C1608X5R1H104K |
| C102, C103, C207, C208                                                |     4 |                                 | 8pF ±0.5pF, 50V C0H ceramic capacitor (0402)   | Taiyo Yuden     | UMK105CH080DV  |
| C106                                                                  |     1 |                                 | 33000pF ±10%, 25V X7R ceramic capacitor (0603) | Murata          | GRM188R71E333K |
| C111, C112                                                            |     2 |                                 | 18pF ±5%, 50V C0G ceramic capacitor (0603)     | TDK             | C1608C0G1H180J |
| C113                                                                  |     1 | Do not install, do not purchase | 0.1uF ±10%, 50V X5R ceramic capacitor (0603)   |                 |                |
| C205, C206                                                            |     2 |                                 | 47uF ±20%, 6.3V X5R ceramic capacitor (1206)   | Murata          | GRM31CR60J476M |
| C213                                                                  |     1 |                                 | 0.47uF ±10%, 6.3V X5R ceramic capacitor (0603) | Murata          | GRM188R60J474K |
| C214                                                                  |     1 |                                 | 47000pF ±10%, 25V X7R ceramic capacitor (0603) | Murata          | GRM188R71E473K |
| CPVDD, CPVSS, C1N, C1P, VCM, REF                                      |     6 | Do not install, do not purchase | Test point (30-mil drill size)                 |                 |                |
| D2                                                                    |     1 |                                 | Schottky diode (SOT23)                         | Rohm            | RB411DT146     |
| D100                                                                  |     1 |                                 | LED, Yellow (0603)                             | Lite-On         | LTST-C190YKT   |
| D101                                                                  |     1 |                                 | LED, Red (0603)                                | Lite-On         | LTST-C190CKT   |
| FB1-FB4                                                               |     4 |                                 | 0 Ohms ±5% resistor (0603)                     |                 |                |
| FB5, FB6                                                              |     2 |                                 | 0 Ohms ±5% resistor (0402)                     |                 |                |
| FB7-FB12                                                              |     6 |                                 | Ferrite bead (0402)                            | Murata          | BLM15HD182SN1  |
| FB100, FB200                                                          |     2 |                                 | Ferrite bead (0603)                            | Murata          | BLM18PG221SN1  |
| USB1, USB2                                                            |     2 |                                 | Receptacle, USB Mini B Receptacle              | Hirose Electric | UX60A-MB-5ST   |
| HP                                                                    |     1 |                                 | Jack, Stereo Headphone 3.5MM, 4 positions      | CUI Inc.        | SJ-43514-SMT   |
| IN1, IN2, IN3, IN4, IN5, IN6, LOUTL, LOUTR                            |     8 |                                 | JACK, PC MOUNT NON-SWITCHED , RED              | Kobiconn        | 161-0096-E     |

## MAX98091 (TQFN) EV Kit Bill of Materials (continued)

| REFERENCE DESIGNATOR                          |   QTY | DNI, DNP                        | DESCRIPTION                                  | MFG                             | MFG PART #     |
|-----------------------------------------------|-------|---------------------------------|----------------------------------------------|---------------------------------|----------------|
| JU1, JU2                                      |     2 |                                 | 3-pin header, 0.1" centers                   | Sullins                         | PEC36SAAN      |
| JU3-JU11, JU17-JU20, JU22-JU24, JU27, JU100   |    18 |                                 | 2-pin header, 0.1" centers                   | Sullins                         | PEC36SAAN      |
| JU14                                          |     1 |                                 | 4-pin header, 0.1" centers                   | Sullins                         | PEC36SAAN      |
| JU15                                          |     1 |                                 | 12-pin header (3x4), 0.1" centers            | Sullins                         | PEC36DAAN      |
| JU16                                          |     1 |                                 | 6-pin header (2x3), 0.1" centers             | Sullins                         | PEC36DAAN      |
| JU21                                          |     1 |                                 | 12-pin header (4x3), 0.1" centers            | Sullins                         | PEC36DAAN      |
| L1-L4                                         |     4 | Do not install                  | 22uH, 1A inductors (6.2mm x 6.3mm)           | Toko                            | A916CY-220M    |
| L200                                          |     1 |                                 | Ferrite bead, 47uH 220mA (1812)              | Murata                          | LQH43MN470J03L |
| P100                                          |     1 |                                 | MOSFET, -20V, -2.4A, P-Channel (SuperSOT-3)  | Fairchild                       | FDN304P        |
| P100                                          |     1 |                                 | MOSFET, -20V, -2.4A, P-Channel (SuperSOT-3)  | Fairchild                       | FDN304PZ       |
| R1, R2, R9-R13, R32, R33, R38-R41, R111, R207 |    15 |                                 | 0 Ohms ±5% resistor (0402)                   |                                 |                |
| R5                                            |     1 |                                 | 10 kOhms ±5% resistor (0402)                 |                                 |                |
| R6, R15, R16, R19                             |     4 | Do not install, do not purchase | Resistor (0402)                              |                                 |                |
| R14, R17, R18, R20, R29, R37                  |     6 |                                 | 2.2 kOhms ±5% resistor (0402)                |                                 |                |
| R21, R22, R23, R24, R200, R201                |     6 |                                 | 22 Ohms ±5% resistor (0402)                  |                                 |                |
| R100, R101, R104, R202, R204                  |     5 |                                 | 1.5 kOhms ±5% resistor (0603)                |                                 |                |
| R102, R103                                    |     2 |                                 | 27 Ohms ±5% resistor (0603)                  |                                 |                |
| R105                                          |     1 |                                 | 470 Ohms ±5% resistor (0603)                 |                                 |                |
| R106                                          |     1 | Do not install, do not purchase | 2.2 kOhms ±5% resistor (0603)                |                                 |                |
| R107                                          |     1 | Do not install, do not purchase | 10 kOhms ±5% resistor (0603)                 |                                 |                |
| R108, R110                                    |     2 |                                 | 220 Ohms ±5% resistor (0603)                 |                                 |                |
| R109                                          |     1 |                                 | 1 kOhms ±5% resistor (0603)                  |                                 |                |
| R203                                          |     1 |                                 | 1 MOhms ±5% resistor (0603)                  |                                 |                |
| R205                                          |     1 |                                 | 47 kOhms ±5% resistor (0603)                 |                                 |                |
| R206                                          |     1 |                                 | 402 Ohms ±1% resistor (0603)                 |                                 |                |
| SPDIFOUT                                      |     1 |                                 | Connector, Digital Audio Optical Transmitter | Everlight Electronics           | PLT133/T9      |
| SPDFIIN                                       |     1 |                                 | Connector, Digital Audio Optical Receiver    | Everlight Electronics           | PLR135/T9      |
| SW1                                           |     1 |                                 | SPST, tactile switch                         | Panasonic Electronic Components | EVQ-5PN04K     |
| SW1                                           |     1 |                                 | SPST, tactile switch                         | E-switch                        | TL3302AF260QJ  |
| U1                                            |     1 |                                 | Ultra-Low Power Stereo Audio Codec (48 TQFN) | MAXIM                           | MAX98091ETM+   |
| U2, U3                                        |     2 |                                 | Digital microphone (6 LGA)                   | Knowles Acoustics               | SPM0423HD4H-WB |

## MAX98091 (TQFN) EV Kit Bill of Materials (continued)

| REFERENCE DESIGNATOR                                                                                                                        |   QTY | DNI, DNP                        | DESCRIPTION                                                      | MFG                 | MFG PART #           |
|---------------------------------------------------------------------------------------------------------------------------------------------|-------|---------------------------------|------------------------------------------------------------------|---------------------|----------------------|
| U2, U3                                                                                                                                      |     2 |                                 | Digital microphone (6 LGA)                                       | Knowles Acoustics   | SPM0423HE4H-WB       |
| U4                                                                                                                                          |     1 |                                 | Single CMOS switch debouncer (4 SOT143)                          | MAXIM               | MAX6816EUS+          |
| U5                                                                                                                                          |     1 |                                 | 1.8V Low noise linear regulator (5 SOT23)                        | MAXIM               | MAX8887EZK18+        |
| U6                                                                                                                                          |     1 |                                 | 300mA LDO regulator (SOT23-6)                                    | MAXIM               | MAX1963AEZT120+      |
| U7, U104                                                                                                                                    |     2 |                                 | 3.3V Low noise linear regulator (5 SC70)                         | MAXIM               | MAX8511EXK33+        |
| U8, U9                                                                                                                                      |     2 |                                 | Low voltage SPDT CMOS analog switch (6 SC70-6)                   | MAXIM               | MAX4729EXT+          |
| U10                                                                                                                                         |     1 |                                 | Low woltage Quad-SPDT analog switch (16 TQFN)                    | MAXIM               | MAX4735ETE+          |
| U11                                                                                                                                         |     1 |                                 | Analog wwitch (10-pin uDFN)                                      | MAXIM               | MAX4906ELB+          |
| U100                                                                                                                                        |     1 |                                 | Microcontroller (56 TQFN)                                        | MAXIM               | MAXQ2000-RBX+        |
| U101                                                                                                                                        |     1 |                                 | USB to Serial UART (QFN-32)                                      | FTDI                | FT232BQ              |
| U101                                                                                                                                        |     1 |                                 | USB to Serial UART (QFN-32)                                      | FTDI                | FT232RQ              |
| U102                                                                                                                                        |     1 | Do not install, do not purchase | EEPROM, 93C46 TYPE 3-WIRE (SOIC-8)                               | Atmel               | AT93C46EN-SH-B       |
| U103                                                                                                                                        |     1 |                                 | 2.5V Low noise linear regulator (5 SC70)                         | MAXIM               | MAX8511EXK25+        |
| U200                                                                                                                                        |     1 |                                 | USB audio CODEC (32 QFP)                                         | TI                  | PCM2707PJT           |
| U201                                                                                                                                        |     1 |                                 | Digital audio transceiver (28 SO)                                | Cirrus Logic        | CS8427-CSZ           |
| Y1                                                                                                                                          |     1 |                                 | 13Mhz Clock Oscillator (2.5mm x 2.0mm)                           | ECS Inc             | ECS-2033-130-BN      |
| Y100                                                                                                                                        |     1 |                                 | 6MHz crystal                                                     | Hong Kong X'tals    | SSL60000N1HK188F0-0  |
| Y101                                                                                                                                        |     1 |                                 | CRYSTAL, 16MHz (3.2mm x 2.5mm)                                   | Kyocera             | CX3225SB16000D0FLJZZ |
| Y200                                                                                                                                        |     1 |                                 | CRYSTAL, 12MHz (3.2mm x 2.5mm)                                   | Kyocera             | CX3225SB12000D0FLJZZ |
| BCLK, LRCLK, SDIN, SDOUT,  , MCLK                                                                                                        |     6 |                                 | Test Point 'Miniature' 40mil drill size (Red)                    | Keystone            | 5000                 |
| SPKLP, SPKRP, HPR, HPL                                                                                                                      |     4 |                                 | Test Point 'Multipurpose' 63mil drill size (Red)                 | Keystone            | 5010                 |
| SPKLN, SPKRN, GND(x7), HPGND                                                                                                                |    10 |                                 | Test Point 'Multipurpose' 63mil drill size (Black)               | Keystone            | 5011                 |
| +1.8V, GND                                                                                                                                  |     2 |                                 | 1-pin header                                                     | Sullins             | PEC36SAAN            |
|                                                                                                                                             |    31 |                                 | Shunt, Shorting Jumper, 2 position, 0.1 center                   | Kycon               | SX1100-B             |
| IN1, IN2, IN3, IN4, IN5, IN6, JACKSENSE, RCVP/LOUTL, RCVN/LOUTR, FSPKLP, FSPKLN, FSPKRP, FSPKRN, DVDD, DVDDIO, AVDD, HPVDD, SPKVDD, GND(x6) |    24 |                                 | WIRE, BUSS, 20G plated solid copper 0.25 inch U- shape wire loop | Weico Wire          | 9020 Buss            |
| MAX98091 TQFN Evaluation Kit                                                                                                                |     1 | -                               | PCB: MAX98091 TQFN EVKIT                                         | Maxim               | MAX98091EVKIT#TQFN   |
|                                                                                                                                             |     4 |                                 | Aluminum standoff, round, 4-40 thread, 0.187" OD, 0.5"L          | Keystone            | 2203                 |
|                                                                                                                                             |     4 |                                 | Machine screw, philips, 4-40, 3/8" length                        | B&F Fastener Supply | PMSSS4400038PH       |

## MAX98091 (TQFN) EV Kit Schematic

<!-- image -->

## MAX98091 (TQFN) EV Kit Schematic (continued)

<!-- image -->

## MAX98091 (TQFN) EV Kit Schematic (continued)

<!-- image -->

## MAX98091 (TQFN) EV Kit Schematic (continued)

<!-- image -->

## MAX98091 (TQFN) EV Kit Schematic (continued)

<!-- image -->

## MAX98091 (TQFN) EV Kit Schematic (continued)

<!-- image -->

## MAX98091 (TQFN) EV Kit PCB Layouts

MAX98091 TQFN EV Kit Component Placement Guide -Top Silkscreen

<!-- image -->

│

## MAX98091 (TQFN) EV Kit PCB Layouts (continued)

MAX98091 TQFN EV Kit PCB Layout -Top Layer

<!-- image -->

│

## MAX98091 (TQFN) EV Kit PCB Layouts (continued)

MAX98091 TQFN EV Kit PCB Layout-Internal Layer 2 GND

<!-- image -->

│

## MAX98091 (TQFN) EV Kit PCB Layouts (continued)

MAX98091 TQFN EV Kit PCB Layout-Internal Layer 3 SIG

<!-- image -->

│

## MAX98091 (TQFN) EV Kit PCB Layouts (continued)

MAX98091 TQFN EV Kit PCB Layout-Internal Layer 4 VDD

<!-- image -->

│

## MAX98091 (TQFN) EV Kit PCB Layouts (continued)

MAX98091 TQFN EV Kit PCB Layout-Internal Layer 5 GND1

<!-- image -->

│

## MAX98091 (TQFN) EV Kit PCB Layouts (continued)

MAX98091 TQFN EV Kit PCB Layout-Bottom Layer

<!-- image -->

│

## MAX98091 TQFN Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/17            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX98091 (TQFN)