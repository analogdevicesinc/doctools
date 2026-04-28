<!-- lastmod 2023-11-03 -->
## MAX98090 Evaluation Kit (WLP)

## General Description

The  MAX98090  (WLP)  evaluation  kit  (EV  kit)  is  a  fully assembled  and  tested  circuit  board  that  evaluates  the MAX98090  (WLP)  audio  codec.  The  MAX98090  is  an integrated  audio  codec  including  an  earpiece  amplifier, stereo Class D amplifier, stereo DirectDrive ®  headphone amplifier, and digital signal processing.

To  enable  easy  connection  to  a  wide  range  of  audio sources,  the  EV  kit  includes  audio  devices  to  convert both USB and S/PDIF data to I 2 S data. The EV kit also integrates  a  MAXQ2000  microcontroller  to  enable  I 2 C and SPI communication with the on-board I 2 C- and SPIcapable  devices.  A  simple  and  intuitive  graphical  user interface  (GUI)  provides  communication  with  the  EV  kit through Windows ®  OS running Windows XP ® -, Windows 7 -,  or   Windows 8-compatible software.

## Features

- 2.8V to 5.5V Single-Supply Operation
- Proven Audio PCB Layout
- On-Board USB-to-I 2 C Interface
- On-Board USB-to-I 2 S Converter
- On-Board S/PDIF Transceiver
- On-Board Clock Source
- On-Board Digital Microphone
- Windows XP-, Windows 7-, and Windows 8-Compatible Software
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Figure 1. Simplified EV Kit Block Diagram

<!-- image -->

DirectDrive is a registered trademark of Maxim Integrated Products, Inc.

Windows and Windows XP are registered trademarks and registered service marks of Microsoft Corporation.

<!-- image -->

Evaluates: MAX98090 (WLP)

## MAX98090 Evaluation Kit (WLP)

## Quick Start

## Required Equipment

- MAX98090 EV kit (WLP)
- Two A to mini-B USB cables (included)
- 2.8V to 5.5V, 2A DC power supply
- Set of headphones with a 3.5mm plug
- User-supplied Windows XP, Windows 7, or Windows 8 PC with two available USB ports

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV kit software. Text in bold and under-lined refers to items from the Windows operating system.

## Procedure

Follow  the  steps  below  to  configure  the  EV  kit  for  PC audio playback to verify the EV kit's functionality:

- 1) Visit www.maximintegrated.com/evkitsoftware to download the latest version of the MAX98090 software, 98090Rxx.ZIP. Save the software to a temporary folder and uncompress the ZIP file.
- 2) Install the software and USB driver on your computer by running the INSTALL.EXE program inside the temporary folder. The program files are copied and icons are created in the Windows Start | Programs | Maxim EVKIT Software menu. During software installation, some versions of Windows may show a message indicating that this software is from an unknown publisher. This is not an error condition and it is safe to proceed with the installation.
- 3) Verify that all jumpers are in their default positions, as shown in Figure 2 (same as listed in Table 2).
- 4) Connect the power supply between the SPKVDD and GND PCB pads.
- 5) Set the power supply to 4.2V with a 2A current limit and turn it on.

## MAX98090 Software Files

Evaluates: MAX98090 (WLP)

- 6) Connect a USB cable between the PC and the J1 USB port (USB CONTROL) on the EV kit. A Windows message appears when connecting to the EV kit for the first time. Each version of Windows may have a slightly different message. If Windows reports that the device is ready to use, then the USB driver has been installed successfully.
- 7) If needed, the USB driver can be manually installed by navigating to the C:\Program Files(x86)\Maxim\ MAX98090 folder (default installation directory) and following the instructions in the USB\_Driver\_ Help\_200.PDF document.
- 8) Connect the headphones to the headphone jack (HP).
- 9) Start the MAX98090 software by opening its icon in the Start | Programs | Maxim EVKIT Software menu. The software main window appears, as shown in Figure 4.
- 10)  Wait while the software connects to the EV kit. Once the connection is established, the status bar at the bottom will indicate that the USB and Device are connected.
- 11)  Once the USB and device connections have been established, select the Block Diagram tab.
- 12)  Click on the USB block.
- 13)  Click Yes to automatically configure the EV kit for USB audio playback.
- 14)  Connect a USB cable between the PC and the J2 USB port (USB AUDIO). Windows automatically detects the EV kit as a sound card and installs the USB audio class drivers.
- 15)  Open Windows' Sound dialog and select the Playback tab. A USB Audio DAC item, similar to Figure 3, is added to the list of available playback devices. All audio played through this device is sent to the EV kit.
- 16)  Verify that the USB Audio DAC item is set as the default device.
- 17)  Verify that audio can be heard through the connected headphones.
- 18)  Quick start complete. Refer to the MAX98090 IC data sheet for additional information.

| FILE                    | DESCRIPTION                                         |
|-------------------------|-----------------------------------------------------|
| Install.exe             | Install the MAX98090 software files on the computer |
| CDM21000.exe            | USB driver installer                                |
| Device Manager          | Shortcut to computer's device manager               |
| USB_Driver_Help_300.pdf | USB driver installation help file                   |

│

## MAX98090 Evaluation Kit (WLP)

## Evaluates: MAX98090 (WLP)

Figure 2. Default Shunt Configuration

<!-- image -->

Figure 3. Playback Device

<!-- image -->

│

## MAX98090 Evaluation Kit (WLP)

Evaluates: MAX98090 (WLP)

Figure 4. MAX98090 (WLP) Software Main Window

<!-- image -->

## MAX98090 Evaluation Kit (WLP)

## Detailed Description of Software

The MAX98090 EV kit is intended to be evaluated with the MAX98090 software, as it provides an intuitive graphical user interface (GUI) for programming the MAX98090 device  and  also  includes  a  handful  of  features  that  are intended to aid evaluation.

The MAX98090 software main window is divided into three sections:  software  buttons,  status  panel,  and  tabbed pages (Figure 4) . The buttons provide basic functionality and the status panel provides monitoring capabilities. The tabbed pages provide the controls for programming the MAX98090.

The Quick  Setup tab  provides  access  to  the  device's quick setup registers (0x04-0x0B). The Block Diagram tab provides access to all the device registers and utilizes diagram  blocks  to  access  dialog  windows.  The  dialogs contain  the  GUI  controls  used  to  program  the  device. The Control Registers tab provides access to registers 0x00-0x45 as well  as  to  the  revision  ID  register,  0xFF. The EQ Registers tab  provides  access  to  the  device's parametric equalizer (EQ), registers 0x46-0xAE. The BQ Registers tab  provides  access  to  the  device's  biquad (BQ) filter, registers 0xAF-0xBD.

The  MAX98090  software  can  be  downloaded  from www.maximintegrated.com/evkitsoftware . When evaluating  with  the  EV  kit  and  software,  it  is  recommended that this document be used in conjunction with the MAX98090 IC data sheet.

## Software Buttons

There are four buttons available on the main window of the  MAX98090  software: Power,  Read All  (F4) , Reset

Evaluates: MAX98090 (WLP)

(F12) ,  and Connect .  These  buttons  are  always  accessible, regardless of the active tab.

## Power

The Power button programs the MX98090's SHDN bit to enable/disable the device. When the device is disabled/ enabled,  the  button  image  is  gray/blue,  respectively. When the device is in shutdown ( SHDN bit = 0) the software is still able to communicate with the device, as its I 2 C interface remains active.

## Read All (F4)

The Read All (F4) button performs the following sequence of  reads  and  updates  the  associated  register  tab.  This function is also available from the Actions menu.

- Read the MAX98090 IRQ pin. This only updates the Status panel.
- Read the status register (0x01). This also updates the Status panel.
- Read control registers (0x03-0x45).
- Read parametric equalizer registers (only if the EQ Registers tab is visible or if EQ bands are enabled).
- Read biquad registers (only if the BQ Registers tab is visible or if the biquad filter is enabled).
- Read Revision ID register (0xFF).
- Read S/PDIF Transceiver (U201) registers.

## Reset (F12)

The Reset (F12) button resets the checked items as indicated on the Rest dialog window (Figure 5.). This function is also available from the Actions menu.

Figure 5. Reset Dialog

<!-- image -->

│

## Connect/Disconnect

The Connect/Disconnect button  is  used  to  connect or  disconnect  the  software  from  the  EV  kit,  which  connects to a PC through its USB CONTROL (J1) port or a TCP connection. The button either displays Connect or Disconnect, depending on the current state of the EV kit connection.

When the button displays Connect ,  it  indicates  that  the software  is  not  connected  to  the  EV  kit.  Pressing  the button initiates the connection sequence. When using a TCP connection,  ensure  that  it  has  been  set  up  in  the software  before  pressing Connect .  The  TCP  connection  is  configured  from  the TCP  Configuration  Setup dialog, which is accessed by selecting Options | Connect Options | TCP from the Menu bar.

When the  button  displays Disconnect ,  it  indicates  that the  software  is  connected  to  the  EV  kit.  Pressing  the button initiates the disconnect sequence.

## Status Panel

The  MAX98090 Status panel,  located  on  the  left  side of  the  software  main  window,  displays  the  state  of  the six status bits (register 0x01), the shutdown bit (register 0x45), and the state of the MAX98090 hardware IRQ pin. The color of a Status label indicates whether it is asserted or not. When asserted the label is teal colored and when not asserted, the label is light gray.

Note: A status bit's interrupt must be enabled in order for the  status  bit  to  get  updated  in  the  Status  register. The interrupts are enabled from the Interrupts block.

## Quick Setup Tab

The Quick  Setup tab  provides  controls  for  configuring the quick setup registers (0x04-0x0B). These quick setup registers  are  write-only  and  function  like  pushbuttons. Refer  to  the Quick  Setup  Configuration section  in  the MAX98090 IC data sheet for additional details.

As the first  four  steps  are  completed,  the  section  at  the bottom  of Step  5 is  updated.  Checkmarks  indicate  that the step is complete and the Reg: and Bitlabels indicate which quick setup register and bit are programmed.

For simplicity, this tab is divided into five steps as shown in  Figure  6.  The  first  three  steps  configure  the System Clock , Sample  Rate , Mode ,  and Format .  The  fourth step configures the audio Input and Output (I/O) signal path. As I/O selections are made, a corresponding image is  shown  in  the Configuration group  box,  providing  a visual representation of the selected path. When a valid

I/O path is selected Step 4 is complete. To clear the input and output selections, press the Clear button.

Once all four checkmarks are visible, press the Configure button  to  program  the  device.  If  an  invalid  I/O  path  is selected, the software reports ' Not a valid I/O configuration ' and the I/O selections are cleared.

## Block Diagram Tab

The MAX98090 software uses a block diagram to facilitate the  programming  of  the  MAX98090  as  well  as  provide a  visual  representation  of  the  device's  functions  and current configuration. The controls for a given function(s) are grouped on the same dialog window, which is opened by clicking on the associated block image. The blocks that are within the dotted border are related to the MAX98090 device and the blocks outside the dotted border are for the associated support circuitry.

There are two types of blocks in the block diagram and they are distinguished by the mouse cursor image. The mouse cursor will change to a hand when over an active block and will change to an up-arrow when over a toggle block.  An active block opens a dialog window, containing controls  for  configuring  the  device. A  toggle  block  does not open a dialog window, but toggles a specific setting when clicked.

The  color  of  the  blocks  changes,  depending  on  the enabled  state  of  the  function(s)  it  controls.  A  disabled block  is  grey  and  an  enabled  block  is  teal.  Figure  7 shows the block diagram with the MAX98090 configured for  USB  audio  input  and  headphone  output. Note: A disabled/enabled block does not necessary indicate that its associated audio path is disabled/enabled.

## S/PDIF and USB

The  S/PDIF  and  USB  blocks  are  outside  the  dotted border  and  thus  not  related  to  the  MAX98090  device. These  blocks  represent  the  stereo  digital  audio  transceiver (U201) and the USB stereo audio DAC (U200) that are designed onto the EV kit. These blocks are used to enable the associated circuits, but also include controls that automatically configure the MAX98090 to work with the enabled audio device.

The S/PDIF and USB audio devices are connected to the MAX98090 I 2 S  bus  through  analog  switches  (U9-U11), which  are  controlled  through  the  MAX98090  software. These  switches  are  automatically  configured  once  the S/PDIF or USB block is enabled, but they can be toggled by clicking on the switch blocks.

## MAX98090 Evaluation Kit (WLP)

Figure 6. Quick Start Tab

<!-- image -->

Figure 7. MAX98090 Software Block Diagram

<!-- image -->

## MAX98090 Evaluation Kit (WLP)

## Dialog Windows

Dialog windows are associated with specific blocks in the block diagram and they contain the controls for configuring  the  registers  that  are  associated  with  that  particular block  of  the  MAX98090  device.  The  highlighted  blocks in Figure 8 are the blocks that share a dialog window. In addition, the blocks that are outlined can have their dialog windows  synchronized  to  each  other.  This  dialog  sync feature is a software feature and is enabled by selecting the S ync Right and Left checkbox in the dialog window. When  enabled,  the  software  programs  the  same  user configurations to both the left and right output channels.

A dialog window is opened by clicking on a diagram block. Figure  9  shows  the  typical  GUI  controls  that  are  found on dialog windows and Figure 10 shows the biquad filter dialog. When a control's state is changed, it results in the programming of the associated device register(s).

The  biquad  dialog  uses  the  same  types  of  controls  as other  dialogs,  but  it  also  provides  a  plot  of  the  filter's amplitude  and  phase.  This  provides  a  visual  representation  of  the  programmed  coefficients  as  well  as  some insight into the filter's behavior. The only two blocks that use this type of biquad filter dialog are the Biquad Filter and Parametric Equalizer blocks.

The  filter  dialog  shown  in  Figure  10  is  for  the  7-band parametric equalizer as can be seen by the seven available filters.  Each  filter  can  be  individually  programmed  and when selected will show up as yellow lines on the plots. A sum of all the enabled filters can be displayed by selecting the Show Cascade checkbox. The  cascaded  response will show up as a blue line on the plots. The Biquad Filter dialog window is similar to that shown in Figure 10, except that it is only a single biquad filter.

## Registers Tabs

The MAX98090 software has three device register tabs: Control  Registers , EQ Registers ,  and BQ Registers . These  register  tabs  display  the  device's  registers  in  a typical  register  map  format.  Each  of  the  register  tabs provides two methods for configuring the device. As an example,  Figure  11  shows  the  register  tab  elements  of register 0x25.

The  first  configuration  method  involves  clicking  on  the register's bit  labels. A  greyed-out bit label indicates that the bit is currently set low. A bold bit label indicates that the bit is currently set high. Clicking on a bit will toggle its state and result in a write to that register. This action also updates  the  value  displayed  in  the  register's Edit box, located to the right of the bit labels. Note: Read-only bits cannot be clicked/toggled and are only meant  to display the register's current state. These read-only bits are updated by performing a read all operation.

The  second  configuration  method  involves  entering  a hexadecimal value in the register's associated Edit box and then pressing the Enter key. The software will automatically configure the device register once the Enter key is pressed. This method also updates the state of the bit labels to reflect the value shown in the Edit box.

## Control Registers

The Control Registers tab  provides  access  to  most  of the device's control registers and all of its status registers. The  range  of  registers  accessible  from  this  tab  is  from register address 0x00-0x45 and the revision ID register (0xFF).

The Write  All  (F8) button  writes  to  all  the  writeable registers  on  the Control  Registers tab.  It  also  writes to  all  the  S/PDIF  transceiver  registers,  and  updates  the configurable GPIOs.

Register changes made through this tab are reflected on the Block Diagram tab. As such, the Control Registers tab  and  the Block  Diagram tab  are  always  in  sync. However,  register  changes  made  through  the Control Registers tab  are  not  automatically  reflected  on  open dialog windows. To have an open dialog window updated, close then reopen the dialog window.

## Equalizer (EQ) Registers

The  main  use  of  the EQ  Registers tab  is  to  provide access  to  the  raw  data  contained  in  the  EQ  registers (0x46-0xAE).  The  preferred  method  for  configuring  the device's  equalizer  is  through  the 7-Band  Parametric Equalizer dialog window (Figure 10).

The registers on this tab are grouped into seven bands (Band  1  through  Band  7)  and  each  band  consists  of fifteen registers. These fifteen registers are then divided into five coefficients (B0\_, B1\_, B2\_, A1\_, and A2\_). The coefficients  are  configured  by  clicking  the  register  bit labels  or  by  entering  a  24-bit  hex-formatted  value  in  its Edit box.  For  example,  Figure  12  shows  the  coefficient B0 of Band 1.

The Update Coefficients button updates the EQ register map to reflect any changes that were made through the 7-Band Parametric Equalizer dialog window.

Note: Coefficient changes made  through this EQ Registers tab  are  not  reflected  on  the Block Diagram tab or the 7-Band Parametric Equalizer dialog window.

## MAX98090 Evaluation Kit (WLP)

Figure 8. Diagram Blocks with Shared and/or Synchronized Dialog Windows

<!-- image -->

Figure 9. Dialog Windows

<!-- image -->

Evaluates: MAX98090 (WLP)

<!-- image -->

Figure 10. Biquad Filter Dialog Window

Figure 11. Register Tab Elements

<!-- image -->

Figure 12. Coefficient (B0) of EQ Band 1

<!-- image -->

│

## MAX98090 Evaluation Kit (WLP)

## Biquad (BQ) Registers

The  main  use  of  the BQ  Registers tab  is  to  provide access to the raw data contained in the 15 BQ registers (0xAF-0xBD). The preferred method for configuring the device's biquad filter is through the Biquad Filter dialog window.

The  BQ  registers  are  divided  into five coefficients (ADCB0-ADCA2)  that  are  configured  by  clicking  the register bit labels or entering a 24-bit hex-formatted value in the coefficient's Edit box.

The Update  Coefficients button updates the BQ Registers tab  to  reflect  any  changes  that  were  made through the Biquad Filter dialog window.

Note: Coefficient changes made  through the BQ Registers tab  are  not  reflected  on  the Block Diagram tab or the Biquad Filter dialog window.

## Menu Bar

All the Menu bar items are described in Table 1. Additional information on a few of the menu items is provided in the following sections.

## File

The software's save and load features are accessed from the File menu  item.  The  save  feature  saves  the  data currently  displayed  on  the Control  Registers tab  and S/PDIF  Transceiver tab.  The  current  state  of  the  configurable GPIO pins is also saved to the configuration file. The data from the EQ Registers and BQ Registers tabs is saved if the filters are enabled.

A  configuration  file's  main  purpose  is  to  capture  the current state of the MAX98090's registers, as displayed on  the  register  tabs.  This  feature  makes  it  easy  to program a device to a saved/known state and allows for the sharing of configuration files between users. The file and save features can still be used when an EV kit is not connected. This  allows  configuration  files  to  be  created and opened without the hardware and further contributes to the sharing of configuration files. To facilitate file usage, use descriptive file names when saving configuration files.

Since the configuration file is automatically generated by the software, it is not meant to be manually formatted and doing so may cause file loading issues. To open a configuration file for viewing use a plain text editor.

Select File | Save Settings Ctrl+S to create a  configuration file. Data is saved as tab-delimited values and the file is saved with a .98090 extension.

To  load  a  saved  configuration  file  select File  |  Load Settings  Ctrl+O .  Only  writeable  registers  will  be  programmed with data from the loaded configuration file.

## Connect Options

The Connect Options item is accessed from the Options menu. This menu item provides two options for connecting  the  EV  kit  to  the  MAX98090  software. The  simplest method  ( MAXQ  USB )  uses  a  standard  male-to-male USB cable (A to mini-B) connection. A local PC, running the MAX98090 software, connects to the USB CONTROL port (J1) on the EV kit. This method utilizes the on-board MAXQ2000 microcontroller circuitry to communicate with the MAX98090 I 2 C-capable device.

The TCP option  is  used  to  set  up  an  internet  connection between the EV kit and the software. To utilize this feature, additional hardware and software (not provided) are required. The additional tools would function as the communication medium between the ethernet connection and the MAX98090's I 2 C bus. When using this option, the USB CONTROL port (J1) on the EV kit still needs to be powered, in order to supply the on-board LDOs.

## Software Versions

The  MAX98090  software  works  with  both  packaged versions (TQFN and WLP) of the MAX98090. Each version  of  the  MAX98090  has  its  own  unique  EV  kit.  The WLP version is evaluated on the MAX98090EVKIT#WLP kit and the  TQFN version is evaluated on the MAX98090EVKIT#TQFN kit. Once an EV kit is connected to the host PC and a connection is established with the software,  the  program  automatically  detects  the  device type and configures the GUI accordingly.

The Software Versions item from the View menu allows the  GUI  to  be  reconfigured.  This  is  particularly  useful when an EV kit is not connected and the user wants to generate  a  configuration  file  for  a  specific  MAX98090 package.  This  feature  can  be  used  when  an  EV  kit  is connected to the software, but care must be taken since the software does not automatically revert the GUI back to the appropriate version. In this case the user needs to manually select the version that matches the connected device or perform a Disconnect-then-Connect operation.

The  main  difference  between  the  WLP  and  TQFN  versions of the MAX98090 is the additional inputs (IN5 and IN6) available on the WLP version. This difference results in  changes  to  the Quick  Setup , Block  Diagram ,  and Control Registers tabs. These differences are also discussed in the MAX98090 IC data sheet.

## MAX98090 Evaluation Kit (WLP)

## Table 1. Menu Bar Items

| MENU                              | ITEM         | DESCRIPTION                                                                                                                                                                                                                              |
|-----------------------------------|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FILE                              |              |                                                                                                                                                                                                                                          |
| Load Settings                     | Ctrl+O       | Loads a configuration file (as saved by the Save Settings option).                                                                                                                                                                       |
| Save Settings                     | Ctrl+S       | Saves a configuration file containing the current device settings.                                                                                                                                                                       |
| Exit                              |              | Closes the MAX98090 software.                                                                                                                                                                                                            |
| VIEW                              |              |                                                                                                                                                                                                                                          |
| Show S/PDIF Transceiver Registers |              | Toggles the visibility of the S/PDIF Transceiver register tab, allowing for more control of the on-board S/PDIF transceiver (U201).                                                                                                      |
| Software Versions                 |              |                                                                                                                                                                                                                                          |
| MAX98090 TQFN MAX98090            | WLP          | Reconfigures the block diagram and register tabs for the selected device.                                                                                                                                                                |
| OPTIONS                           |              |                                                                                                                                                                                                                                          |
| Autoconnect                       |              | When selected, the software checks the connection status of the MAXQ2000 interface and the MAX98090 device approximately every second. If not connected, the software attempts to establish a connection.                                |
| Autoread Status                   |              | When selected, the device's status registers read approximately every second. The Status panel and Control Registers tab are refreshed after each read.                                                                                  |
| Autoshutdown Writes               | for Register | When selected, the software ensures that the MAX98090 is in shutdown before writing to certain registers. Refer to Table 90 of the MAX98090 data sheet for the registers that should only be programmed while the device is in shutdown. |
| I 2 C CLOCK SPEED                 |              |                                                                                                                                                                                                                                          |
| 100kHz 400kHz                     |              | Configures the clock speed of the I 2 C interface.                                                                                                                                                                                       |
| Configure MCLK                    | Routing      | Opens the MCLK Routing dialog window that is used to select a clock source for the MAX98090 master clock (MCLK) input. In order for this clock to drive the MAX98090, a shunt must be placed on pins 1-4 of header JU14.                 |
| Connect Options                   |              | Sets the interface method between the EV kit and MAX98090 software.                                                                                                                                                                      |
| Cmod USB                          |              | The MAX98090 EV kit interfaces to a local PC through its USB Control (J1) port.                                                                                                                                                          |
| TCP                               |              | The MAX98090 EV kit interfaces to a remote PC through a TCP connection. Additional hardware setup required.                                                                                                                              |
| ACTIONS                           |              |                                                                                                                                                                                                                                          |
| Read All Registers                | F4           | Reads all MAX98090 registers and updates the GUI. Also reads all of the S/PDIF transceiver (U201) registers.                                                                                                                             |
| Write All Registers               | F8           | Writes the data from the Edit boxes, on the Control Registers tab, to the MAX98090 device and updates the GUI. Also writes to the S/PDIF transceiver (U201) registers and updates all configurable GPIO pins.                            |
| Reset All Registers               | F12          | Resets the device according to the check box selections on the Reset dialog window.                                                                                                                                                      |
| HELP                              |              |                                                                                                                                                                                                                                          |
| About                             |              | Pop-up window that provides information about the software.                                                                                                                                                                              |

│

Evaluates: MAX98090 (WLP)

## MAX98090 Evaluation Kit (WLP)

## Detailed Hardware Description

The MAX98090 EV kit (WLP) evaluates the WLP package version of the MAX98090 audio codec and provides access  to  all  analog  and  digital  inputs/outputs  on  the device.  The  EV  kit  also  includes  USB-powered  lineardropout (LDO) regulators that allow the EV kit to be evaluated with a single external supply (+2.8V to +5.5V).

Integrated into the EV kit design are a stereo digital audio transceiver  (U201)  and  a  stereo  audio  DAC  with  USB interface  (U200).  The  digital  audio  transceiver  provides audio  input  and  output  through  the  on-board  TOSLINK (SPDIFOUT  and  SPDIFIN)  connectors  and  the  USB audio DAC allows for audio input from the USB AUDIO port (J2).

In  addition,  the  EV  kit  includes  a  MAXQ2000 microcontroller  that  facilitates  evaluation  by  providing  I 2 C,  SPI, and GPIO interfaces, allowing the MAX98090 software to communicate with the devices on the EV kit.

## Power Supplies

The EV kit requires a single 2.8V to 5.5V external supply (SPKVDD) to operate. All other MAX98090 supply inputs are  powered  from  the  J1  USB  port.  Jumpers  JU1-JU4 (see  Table  2)  allow  all  MAX98090  supply  inputs  to  be disconnected from USB power and connected to external supplies. In addition, jumpers JU1 and JU2 are used to configure the on-board voltage connected to DVDD and DVDDIO, respectively. See Table 2 for jumper JU1-JU4 configuration options.

To perform supply current and  power-consumption measurements  use  external  supplies  to  power  the MAX98090  supply inputs:  HPVDD,  AVDD,  DVDD, and DVDDIO.

## Jumper Selection

The EV kit  includes  25  jumpers  to  adjust  various  hardware configuration options. Table 2 describes all the jumpers available on the EV kit.

## Master Clock (MCLK) Selection

Jumper  JU14  selects which master clock  (MCLK) source drives the MAX98090 device. The available clock configurations  are  listed  in  Table  3.  When  streaming audio through the on-board USB AUDIO port or S/PDIF connectors, the EV kit software will automatically config- ure the U8 and U9 switches to route the appropriate clock signal to the MAX98090 MCLK input.

If  an  external  audio  source  is  used,  choose  either  the on-board  13MHz  oscillator  or  an  external  clock.  To connect an external clock, remove the shunt from JU14 and connect the clock to pin-1.

## I 2 S Audio I/O

The  EV  kit  provides  three  methods  for  evaluating  the MAX98090's digital audio interface (DAI). The first method is  through  the  I 2 S  header  (JU15)  and  this  provides  the most direct connection to the MAX98090's DAI.

The two other methods involve streaming audio onto or off the EV kit. The USB AUDIO port (J2) is used to stream audio onto the EV kit. The SPDIFIN and SPDIFOUT optical connectors are used to stream audio onto or off the EV kit, respectively.

The USB and S/PDIF digital audio signals are switched onto the PCM bus through switches U10 and U11. The switches  are  automatically  configured  by  the  evaluation kit software, depending on which path has been enabled ( USB or S/PDIF ).

Note: All  PCM  digital  audio  is  routed  through  the  I 2 S header before routing to the MAX98090's DAI. This is true for the USB AUDIO input as well as for the S/PDIF I/O. See Figure 13.

## Digital Audio Interface Header (JU15)

Header  JU15  provides  access  to  the  MAX98090  digital  audio  interface  (DAI).  See  Table  4  for  individual  pin descriptions. Follow the steps below to configure JU15:

## Direct connection of PCM digital audio:

- Remove the shunts from JU15 (place shunts on Position 1 for safekeeping).
- Connect the PCM signals/grounds to the corresponding Position 2 (Center) and Position 3 (Right) pins of JU15.

## USB Audio input or SPDIF I/O:

- Install the four shunts between Position 2 and Position 3 of JU15.
- For audio input, connect an audio output device to the USB AUDIO or SPDIFIN connector.
- For audio output, connect an audio input device to the SPDIFOUT connector.

## MAX98090 Evaluation Kit (WLP)

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
| JU6      | Installed        | Connects MICBIAS to the IN1 input through a 2.2kΩ resistor (for microphone input)                                                                |
| JU6      | Open*            | Disconnects MICBIAS from the IN1 input                                                                                                           |
| JU7      | Installed        | Connects MICBIAS to the IN3 input through a 2.2kΩ resistor (for microphone input)                                                                |
| JU7      | Open*            | Disconnects MICBIAS from the IN3 input                                                                                                           |
| JU8      | Installed        | Connects IN2 directly to ground for single ended operation                                                                                       |
| JU8      | Open*            | Allows for differential operation                                                                                                                |
| JU9      | Installed        | Connects IN2 to ground through a 2.2kΩ resistor (used when IN1 is mic biased)                                                                    |
| JU9      | Open*            | Disconnects IN2 from ground                                                                                                                      |
| JU10     | Installed        | Connects IN4 directly to ground for single ended operation                                                                                       |
| JU10     | Open*            | Allows for differential operation                                                                                                                |
| JU11     | Installed        | Connects IN4 to ground through a 2.2kΩ resistor (used when IN3 is mic biased)                                                                    |
| JU11     | Open*            | Disconnects IN4 from ground                                                                                                                      |
| JU12     | Installed        | Connects the Digital Microphone data output to MAX98090                                                                                          |
|          | Open*            | Disconnects the Digital Microphone data output from MAX98090                                                                                     |
|          | Installed        | Connects the Digital Microphone clock to MAX98090                                                                                                |
| JU13     | Open*            | Disconnects the Digital Microphone clock to MAX98090                                                                                             |
| JU14     | -                | See Table 3                                                                                                                                      |
| JU15     | -                | See Table 4                                                                                                                                      |
|          | 2-3, 5-6*        | Connects the on-board I 2 C master to MAX98090                                                                                                   |
| JU16     | Open             | Allows external I 2 C control of MAX98090                                                                                                        |
| JU17     | Installed        | RemovesAC coupling capacitor, C4, from LOUTL line output                                                                                         |
|          | Open*            | AddsAC coupling capacitor, C4, to LOUTL line output                                                                                              |
| JU18     |                  | RemovesAC coupling capacitor, C5, from LOUTR line                                                                                                |
|          | Installed        | output                                                                                                                                           |

│

Evaluates: MAX98090 (WLP)

## MAX98090 Evaluation Kit (WLP)

## Table 2. Jumper Configuration (continued)

| HEADER   | SHUNT POSITION   | DESCRIPTION                                                                         |
|----------|------------------|-------------------------------------------------------------------------------------|
| JU19     | Installed        | Connects MICBIAS to IN5 through a schottky diode and 2.2kΩ resistor                 |
| JU19     | Open*            | Disconnects MICBIAS from IN5                                                        |
| JU22     | Installed        | Connects MICBIAS to IN5 through a 2.2kΩ resistor                                    |
| JU22     | Open*            | Disconnects MICBIAS from IN5                                                        |
| JU23     | Installed        | Connects IN6 to ground through a 2.2kΩ resistor (when IN5 is microphone biased)     |
| JU23     | Open*            | Disconnects IN6 from ground                                                         |
| JU24     | Installed        | Connects IN6 directly to ground for single ended operation                          |
| JU24     | Open*            | Allows for differential operation                                                   |
| JU27     | Installed        | Connects IN1 to the headphone jack, HP (for microphone input)                       |
| JU27     | Open*            | Disconnects IN1 from the headphone jack, HP                                         |
| JU28     | Installed        | Connects IN5 to the headphone jack, HP (for microphone input)                       |
| JU28     | Open*            | Disconnects IN5 from the headphone jack, HP                                         |
| JU100    | Installed*       | Connects the MAX98090 interrupt output ( IRQ ) to the on-board microcontroller      |
| JU100    | Open             | Disconnects the MAX98090 interrupt output ( IRQ ) from the on-board microcontroller |

## Table 3. Master Clock Source Configuration (JU14)

| SHUNT POSITION   | CLOCK SOURCE                   |
|------------------|--------------------------------|
| 1-2              | Disabled                       |
| 1-3              | 13MHz oscillator               |
| 1-4*             | Software-selected clock source |

## Table 4. DAI Header (JU15)

Figure 13. I 2 S Routing

| JU16              | JU16                | JU16               |
|-------------------|---------------------|--------------------|
| POSITION 1 (LEFT) | POSITION 2 (CENTER) | POSITION 3 (RIGHT) |
| GND               | CODEC_BCLK          | I2S_BCLK           |
| GND               | CODEC_LRCLK         | I2S_LRCLK          |
| GND               | CODEC_SDIN          | I2S_DAC            |
| GND               | CODEC_SDOUT         | I2S_ADC            |

<!-- image -->

Evaluates: MAX98090 (WLP)

│

## MAX98090 Evaluation Kit (WLP)

## S/PDIF Transceiver

The  S/PDIF  transceiver  (U201)  serves  as  a  format converter  between  I 2 S  and  S/PDIF.  Use  this  device  to send and receive digital audio over the optical connectors (SPDIFIN, SPDIFOUT).

When receiving  S/PDIF  data,  the  transceiver  outputs  a recovered master clock that is exactly 256 x f S , where f S is the sample rate. This clock signal can be used to clock the MAX98090.

When transmitting S/PDIF data, the transceiver requires a master clock input and if data is also being received, it uses the data to generate its own master clock.

If  S/PDIF  data  is  not  being  received,  the  transceiver generates  a  master  clock  based  on  the  LRCLK  signal being output by the MAX98090. For proper transmit-only operation, the S/PDIF transceiver must be configured in master mode.

The  S/PDIF  transceiver  is  controlled  through  the  SPI interface of the on-board MAXQ2000 microcontroller. See the Control Interface section.

## USB Audio

The  audio  DAC  with  USB  interface  (U200)  accepts  an audio stream from a PC, connected to the USB AUDIO port (J2), and converts it to I 2 S data. The USB audio DAC generates a master clock signal that can be used to clock the MAX98090. The clock signal is 256 x f S .

The USB audio DAC supports standard class drivers that are included with most operating systems. As a result, no

## Table 5. Analog Input Headers

| INPUT PAIR   | SINGLE-ENDED/ DIFFERENTIAL HEADER   | DIFFERENTIAL MICROPHONE HEADER   | MICBIAS HEADER   |
|--------------|-------------------------------------|----------------------------------|------------------|
| IN1/IN2*     | JU8                                 | JU9                              | JU6              |
| IN3/IN4      | JU10                                | JU11                             | JU7              |
| IN5/IN6*     | JU24                                | JU23                             | JU22 or JU19     |

*The microphone input from the HP headset is routed to IN1 and IN5 of these input pairs

## Table 6. Analog Input Header Configuration

| INPUT   | SINGLE-ENDED   | DIFFERENTIAL          | DIFFERENTIAL MICROPHONE (W/MICBIAS)   |
|---------|----------------|-----------------------|---------------------------------------|
| IN1/IN2 | JU8 = On       | JU8 = Off JU9 = Off   | JU8 = Off JU9 = On                    |
| IN3/IN4 | JU10 = On      | JU10 = Off JU11 = Off | JU10 = Off JU11 = On                  |
| IN5/IN6 | JU24 = On      | JU24 = Off JU23 = Off | JU24 = Off JU23 = On                  |

drivers are required for this device and it will appear as a sound card in the PC. This allows for audio playback from the PC through the MAX98090 audio codec.

## Analog Inputs

The MAX98090 analog input pairs (IN1/IN2, IN3/IN4, and IN5/IN6) can be configured for microphone input, singleended input, or differential input. These input connections are made through the provided RCA connectors or PCB pads  (IN1-IN6).  In  addition,  the  IN1/IN2  and  IN5/IN6 device inputs can be connected to the 3.5mm audio jack (HP) for single-ended microphone input from a headset. Table  5  lists  the  configuration  headers  associated  with each input pair. See the specific input sections for configuration details.

## Single-Ended and Differential Inputs

The  three  analog  input  pairs  are  configured  for  singleended or differential line input by configuring the associated input headers (as listed in Table 6). For single-ended inputs,  the  input  header  configuration  is  independent  of the input type. For differential inputs, the header configuration is different for microphone inputs powered by the MAX98090 MICBIAS output.

## Analog Microphone

When using the analog input pairs for microphone input, the MAX98090 microphone bias (MICBIAS) output can be used to power the connected microphone. The MICBIAS output is connected to the IN1, IN3, or IN5 inputs through the input's associated MICBIAS header.

## MAX98090 Evaluation Kit (WLP)

When evaluating with two analog microphones, and jack detection is required, the IN5 input needs to be connected to MICBIAS through jumper JU19. See Table 7.

## Digital Microphone

The EV kit includes an on-board digital microphone (U3) for  evaluation  of  the  MAX98090's  digital  microphone interface.  The  digital  microphone  interface  is  enabled and  configured  through  the  software.  An  additional digital  microphone footprint (U2) is provided to exercise the device's capability of interfacing with up to two digital microphones.

Install shunts on jumpers JU12 and JU13 to connect the digital microphone(s) to the MAX98090 device. Refer to the MAX98090 IC data sheet for additional details.

## Jack Detection

The  MAX98090's  flexible,  software-configurable  jackdetection  interface  is  used  to  detect  the  presence  or absence  of  a  headphone/headset  connected  to  the  HP jack. To provide jack detection on the HP jack, install a shunt on header JU5.

Figure 14. Headphone Jack

<!-- image -->

## Table 7. MICBIAS Connection

| MICROPHONE CONNECTION   | MICBIAS CONNECTED    | MICBIAS DISCONNECTED   |
|-------------------------|----------------------|------------------------|
| IN1                     | JU6 = On             | JU6 = Off              |
| IN3                     | JU7 = On             | JU7 = Off              |
| IN5                     | JU22 = On JU19 = Off | JU22 = Off JU19 = Off  |
| IN5*                    | JU22 = Off JU19 = On | JU22 = Off JU19 = Off  |

## Table 8. Analog Outputs

| OUTPUT            | CONNECTIONS                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| Headphone         | 3.5mm audio jack (HP)                                                       |
| Speaker           | Un-filtered and filtered connection options (SPK_P/SPK_N and FSPK_P/FSPK_N) |
| Receiver/Line-Out | RCAconnectors (LOUTL and LOUTR)                                             |

│

## Evaluates: MAX98090 (WLP)

## Analog Outputs

The  EV  kit  provides  connections  for  each  of  the  three analog outputs. Table 8 lists the outputs and their available connections.

## Headphone

The MAX98090 stereo headphone output (HPR/HPL) is routed to the on-board 3.5mm audio jack (HP), as shown in  Figure  14.  The  HP  jack  also  allows  for  a  headset connection, with the microphone input (MIC) connected to either IN1 or IN5. See the Analog Inputs section for input configuration options.

## Stereo	Class	D	Speaker	Amplifier

The  MAX98090  integrates  a  filterless  Class  D  stereo amplifier. In systems with short speaker traces, the stereo speaker  outputs  (SPKLP/SPKLN  and  SPKRP/SPKRN test  points)  can  be  connected  directly  to  the  speaker loads. Although this amplifier is designed to operate completely filterless, the EV kit does provide stuffing options for two types of output filters.

When long speaker cables are used, a ferrite bead plus capacitor filter can be installed to prevent excessive EMI radiation. Although it is best to choose filter components based on EMI test results,  the  combination  of  a  680pF capacitor (C48-C51) with the Murata BLM18SG331TN1 ferrite  bead  (FB1-FB4)  generally  works  well.  With  this configuration, connect the speaker loads to the SPKLP/ SPKLN and SPKRP/SPKRN test points.

To  allow  analysis  of  the  audio  output  with  an  oscilloscope,  or  an  analyzer  not  designed  to  accept  Class  D switching  waveforms,  populate  L1-L4  with  the  included  22 μ H  inductors  and  make  connections,  to  external

## MAX98090 Evaluation Kit (WLP)

equipment or speakers, at FSPKLP/FSPKLN  and FSPKRP/FSPKRN. The LC filter is designed to work best with an 8Ω load. Do not connect a load to the unfiltered SPKLP/SPKLN and SPKRP/SPKRN outputs when L1-L4 are installed.

## Receiver/Line Output

The  MAX98090  receiver/line  output  can  be  configured either  as  a  differential  receiver/earpiece  output  or  as  a stereo single-ended line output. The receiver/line outputs are routed, through AC-coupling capacitors, to the LOUTL and LOUTR RCA connectors. The AC-coupling capacitors can be shorted (effectively removed from the signal path) by installing a shunt on JU17 and JU18.

## Control Interface

The  MAXQ2000  (U100)  microcontroller  circuitry  is  the bridge between the on-board interface-enabled devices and the EV kit software, running on a PC connected to the USB CONTROL port (J1). The EV kit utilizes the MAXQ2000's I 2 C, SPI and GPIO interfaces. See the Detailed Description of Software section for additional software details.

## I 2 C Interface

The MAXQ2000's I 2 C interface is routed to the MAX98090 device  through  jumper  JU16,  by  installing  shunts  across pins 2-3 of each row (see Table 9). When using an external I 2 C  master,  remove  both  shunts  from  JU16  and  connect the external SDA and SCL signals to the position-2 pins of JU16. Ground connections can be made to the position-1 pins of JU16. Install pullup resistors at R15 and R16 if the external master does not include pullup resistors.

## SPI Interface

The MAXQ2000 SPI interface is used to control the onboard S/PDIF transceiver (U201). In the MAX98090 software go to View | Show S/PDIF Transceiver Registers to activate the S/PDIF Transceiver tab.

## GPIO Interface and Pushbutton Programmer

Six  of  the  MAXQ2000  general-purpose  inputs/outputs (GPIOs)  are  used  for  either  controlling  or  monitoring  a specific  on-board  device/signal.  Four  of  the  GPIOs  are used  as  general-purpose  outputs  and  are  automatically set/cleared based on configuration settings made through the MAX98090 software.

The other two GPIOs are used as general-purpose inputs to  monitor  a  specific  signal.  The  first  general-purpose input ( CODEC\_IRQ ) is connected to the MAX98090 interrupt ( IRQ ) output. This IRQ is monitored by the microcontroller and its state is reported in the Status group box on the left side of the software main window. This generalpurpose input can be disconnected from the MAX98090's IRQ output by removing the shunt from jumper JU100.

The  second  general-purpose  input  is  connected  to  a tactile switch (SW1) to realize a pushbutton programmer. When  SW1  is  pressed,  the  MAXQ2000  microcontroller responds  by  transmitting  a  sequence  of  configuration settings that have been preprogrammed into its firmware. This allows the EV kit to be quickly programmed with a specific configuration, without the need for a PC running the  software.  By  default,  the  pushbutton  programming feature is not enabled.

## Table 9. I 2 C Header (JU16)

| JU16              | JU16                | JU16               |
|-------------------|---------------------|--------------------|
| POSITION 1 (LEFT) | POSITION 2 (CENTER) | POSITION 3 (RIGHT) |
| GND               | CODEC_SCL           | SCL                |
| GND               | CODEC_SDA           | SDA                |

## Component List, Schematics, and PCB Layout Diagrams

See  the  following  links  for  component,  schematic,  and PCB information:

- MAX98090WLP BOM
- MAX98090WLP schematic
- MAX98090WLP PCB

## Ordering Information

| PART              | TYPE   |
|-------------------|--------|
| MAX98090EVKIT#WLP | EV Kit |

#Denotes RoHS compliant.

## MAX98090 Evaluation Kit (WLP)

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX98090 (WLP)

| Parent Number   | Item Component Description                                                                                            | Qty                                                                        | Reference Designator              | Manufacturer Manufacturer Part Number   | Assembly Comments         | Assembly Comments         | Assembly Comments         | Assembly Comments         | Assembly Comments         | Assembly Comments         | Assembly Comments         | Assembly Comments         |
|-----------------|-----------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|-----------------------------------|-----------------------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|
|                 | 10uF ±20%, 6.3V X5R ceramic capacitor (0805)                                                                          | 4 C1, C3, C104, C202                                                       | TDK                               | C2012X5R0J106M                          | MAX98090EVKIT#WLP BIL 1   | MAX98090EVKIT#WLP BIL 1   | MAX98090EVKIT#WLP BIL 1   | MAX98090EVKIT#WLP BIL 1   | MAX98090EVKIT#WLP BIL 1   | MAX98090EVKIT#WLP BIL 1   | MAX98090EVKIT#WLP BIL 1   | MAX98090EVKIT#WLP BIL 1   |
| 2               | 1uF ±10%, 6.3V X5R ceramic capacitor (0402)                                                                           | 19 C2, C11, C12, C13, C15, C18, C24, C26, C27, C29-C35, C200, C201, C204   | TDK                               | C1005X5R0J105K                          |                           |                           |                           |                           |                           |                           |                           |                           |
| 3               | 1uF ±20%, 6.3V X5R ceramic capacitor (0603)                                                                           | 10 C4, C5, C23, C25, C36, C37, C115-C118 C216                              | Taiyo Yuden                       | JMK107B7105MA                           |                           |                           |                           |                           |                           |                           |                           |                           |
| 4               | 0.1uF ±10%, 10V X7R ceramic capacitor (0402) 10pF ±5%, 50V C0G ceramic capacitor (0402)                               | 11 C6, C10, C40, C41, C61-C64, C203, C215, 2 C8, C9                        | Kemet Murata                      | C0402C104K8RAC GRM1555C1H100J           | 5                         | 5                         | 5                         | 5                         | 5                         | 5                         | 5                         | 5                         |
| 6               | 0.01uF ±10%, 50V X7R ceramic capacitor (0603)                                                                         | 4 C20, C43, C211, C212                                                     | Murata                            | GRM188R71H103K                          |                           |                           |                           |                           |                           |                           |                           |                           |
| 7               | 2.2uF ±10%, 6.3V X5R ceramic capacitor (0603) 2.2uF ±20%, 6.3V X5R ceramic capacitor (0402)                           | 2 C21, C22 1 C28                                                           | Murata Taiyo Yuden                | GRM188R60J225K JMK105BJ225MV            | 8                         | 8                         | 8                         | 8                         | 8                         | 8                         | 8                         | 8                         |
| 9               | 0.22uF ±10%, 6.3V XR5 ceramic capacitor (0402)                                                                        | 10                                                                         | TDK                               | C1005X5R0J224K                          |                           |                           |                           |                           |                           |                           |                           |                           |
| 10              | OPOEN, Capacitors (0402)                                                                                              | C38, C39, C52-C59 9                                                        |                                   | GRM188R60J106M                          |                           |                           |                           |                           |                           |                           |                           |                           |
| 11              | 10uF ±20%, 6.3V X5R ceramic capacitor (0603)                                                                          | C42, C44-C51 1 C65 C100, C101, C105, C107-C110, C113, C114,                | Murata TDK                        | C1608X5R1H104K                          |                           |                           |                           |                           |                           |                           |                           |                           |
| 12              | 0.1uF ±10%, 50V X5R ceramic capacitor (0603) 8pF ±0.5pF, 50V C0H ceramic capacitor (0402)                             | 11 C209, C210 4 C102, C103, C207, C208 1                                   | Taiyo Yuden                       | UMK105CH080DV                           | 13                        | 13                        | 13                        | 13                        | 13                        | 13                        | 13                        | 13                        |
| 14              | 33000pF ±10%, 25V X7R ceramic capacitor (0603)                                                                        | C106                                                                       | Murata                            | GRM188R71E333K                          |                           |                           |                           |                           |                           |                           |                           |                           |
| 15              | 18pF ±5%, 50V C0G ceramic capacitor (0603)                                                                            | 2 C111, C112                                                               | TDK                               | C1608C0G1H180J                          |                           |                           |                           |                           |                           |                           |                           |                           |
| 16              | 47uF ±20%, 6.3V X5R ceramic capacitor (1206)                                                                          | 2 C205, C206                                                               | Murata                            | GRM31CR60J476M                          |                           |                           |                           |                           |                           |                           |                           |                           |
|                 | 0.47uF ±10%, 6.3V X5R ceramic capacitor (0603) 47000pF ±10%, 25V X7R ceramic capacitor (0603)                         | 1 C213 1 C214                                                              | Murata Murata                     | GRM188R60J474K GRM188R71E473K           | 17                        | 17                        | 17                        | 17                        | 17                        | 17                        | 17                        | 17                        |
|                 | Shottky Diode (SOT23)                                                                                                 | 1 D2                                                                       | Rohm                              | RB411DT146                              | 18                        | 18                        | 18                        | 18                        | 18                        | 18                        | 18                        | 18                        |
| 20              | LED, yellow (0603)                                                                                                    | 1 D100                                                                     | Lite-On                           | LTST-C190YKT                            | 19                        | 19                        | 19                        | 19                        | 19                        | 19                        | 19                        | 19                        |
| 21              | LED, red (0603)                                                                                                       | 1 D101                                                                     | Lite-On                           | LTST-C190CKT                            |                           |                           |                           |                           |                           |                           |                           |                           |
| 22              | Ferrite bead (0603)                                                                                                   | 2 FB100, FB200                                                             | Murata                            |                                         |                           |                           |                           |                           |                           |                           |                           |                           |
| 23              | 0Ohms ±5% resistor (0603)                                                                                             | 4 FB1-FB4 FB6                                                              |                                   | BLM18PG221SN1                           |                           |                           |                           |                           |                           |                           |                           |                           |
| 24 25           | 0Ohms ±5% resistor (0402) Ferrite bead (0402)                                                                         | 2 FB5, 6 FB7-FB12                                                          | Murata                            | BLM15HD182SN1                           |                           |                           |                           |                           |                           |                           |                           |                           |
| 26              | USB Mini B Receptacle                                                                                                 | 2 J1, J2                                                                   | Hirose Electric                   | UX60A-MB-5ST                            |                           |                           |                           |                           |                           |                           |                           |                           |
| 27              | 3.5mm stereo jeadphone jack, 4 positions                                                                              | 1 HP                                                                       | CUI Inc.                          | SJ-43514-SMT                            |                           |                           |                           |                           |                           |                           |                           |                           |
| 29              | RCA jack, PC mount, non-switched (red) Digital Audio Optical Transmitter                                              | 8 IN1, IN2, IN3, IN4, IN5, IN6, LOUTL, LOUTR 1 SPDIFOUT                    | Kobiconn                          | 161-0096-E PLT133/T9                    | 28                        | 28                        | 28                        | 28                        | 28                        | 28                        | 28                        | 28                        |
|                 | Digital Audio Optical Receiver                                                                                        |                                                                            | Everlight Electronics Electronics |                                         |                           |                           |                           |                           |                           |                           |                           |                           |
| 30 31           | 3-pin header, 0.1" centers                                                                                            | 1 SPDFIIN 2 JU1, JU2                                                       | Everlight Sullins                 | PLR135/T9 PEC36SAAN                     | Cut to fit                | Cut to fit                | Cut to fit                | Cut to fit                | Cut to fit                | Cut to fit                | Cut to fit                | Cut to fit                |
| 32              | 2-pin header, 0.1" centers                                                                                            | 20 JU3-JU13, JU17-JU19, JU22-JU24, JU27, JU28, JU100 1                     | Sullins                           | PEC36SAAN                               | Cut to fit Cut to fit     | Cut to fit Cut to fit     | Cut to fit Cut to fit     | Cut to fit Cut to fit     | Cut to fit Cut to fit     | Cut to fit Cut to fit     | Cut to fit Cut to fit     | Cut to fit Cut to fit     |
| 33 34           | 4-pin (3-way) header, 0.1" centers 12-pin (3x4) header, 0.1" centers                                                  | JU14 1 JU15                                                                | Sullins Sullins                   | PEC36SAAN PEC36DAAN                     | Cut to fit                | Cut to fit                | Cut to fit                | Cut to fit                | Cut to fit                | Cut to fit                | Cut to fit                | Cut to fit                |
| 35              | 6-pin (3x2) header, 0.1" centers OPEN, inductors (62mm x 6.3mm)                                                       | 1 JU16                                                                     | Sullins                           | PEC36DAAN #A916CY-220M                  | 36                        | 36                        | 36                        | 36                        | 36                        | 36                        | 36                        | 36                        |
| 37              | Ferrite bead, 47uH 220mA (1812)                                                                                       | L1-L4 1 L200                                                               | Toko Murata                       | LQH43MN470J03L                          |                           |                           |                           |                           |                           |                           |                           |                           |
| 38              | MOSFET, -20V, -2.4A, P-channel (SuperSOT-3)                                                                           | 1 P100                                                                     | Fairchild                         | FDN304P                                 |                           |                           |                           |                           |                           |                           |                           |                           |
| 38              | MOSFET, -20V, -2.4A, P-channel (SuperSOT-3)                                                                           | P100                                                                       | Fairchild                         | FDN304PZ                                | Top mark 304 Top mark 04Z | Top mark 304 Top mark 04Z | Top mark 304 Top mark 04Z | Top mark 304 Top mark 04Z | Top mark 304 Top mark 04Z | Top mark 304 Top mark 04Z | Top mark 304 Top mark 04Z | Top mark 304 Top mark 04Z |
| 39 40           | 0 Ohms ±5% resistor (0402) 10K Ohms ±5% resistor (0402)                                                               | 1 15 R1, R2, R9-R13, R32, R33, R38-R41, R111, R207 1                       |                                   |                                         |                           |                           |                           |                           |                           |                           |                           |                           |
|                 | OPEN, resistor (0402)                                                                                                 | R5 R6, R15, R16, R19                                                       |                                   |                                         | 41                        | 41                        | 41                        | 41                        | 41                        | 41                        | 41                        | 41                        |
| 42              | 2.2K Ohms ±5% resistor (0402)                                                                                         | 4 6 R14, R17, R18, R20, R29, R37                                           |                                   |                                         |                           |                           |                           |                           |                           |                           |                           |                           |
| 43              | 22 Ohms ±5% resistor (0402) 10K Ohms ±5% resistor (0603)                                                              | 6 R21, R22, R23, R24, R200, R201 2                                         |                                   |                                         | 44                        | 44                        | 44                        | 44                        | 44                        | 44                        | 44                        | 44                        |
| 45              | 1.5K Ohms ±5% resistor (0603)                                                                                         | R34, R107 5 R100, R101, R104, R202, R204                                   |                                   |                                         |                           |                           |                           |                           |                           |                           |                           |                           |
| 46              | 27 Ohms ±5% resistor (0603)                                                                                           | 2 R102, R103                                                               |                                   |                                         | 47                        | 47                        | 47                        | 47                        | 47                        | 47                        | 47                        | 47                        |
|                 | 470 Ohms ±5% resistor (0603)                                                                                          | 1 R105                                                                     |                                   |                                         |                           |                           |                           |                           |                           |                           |                           |                           |
| 48              | 2.2K Ohms ±5% resistor (0603)                                                                                         | 1 R106                                                                     |                                   |                                         |                           |                           |                           |                           |                           |                           |                           |                           |
| 50              | 220 Ohms ±5% resistor (0603) 1K Ohms ±5% resistor (0603)                                                              | 2 R108, R110 1                                                             |                                   |                                         | 49                        | 49                        | 49                        | 49                        | 49                        | 49                        | 49                        | 49                        |
| 51              | 1M Ohms ±5% resistor (0603)                                                                                           | R109 1 R203                                                                |                                   |                                         |                           |                           |                           |                           |                           |                           |                           |                           |
| 52 53           | 47K Ohms ±5% resistor (0603) 402 Ohms ±1% resistor (0603)                                                             | 1 R205 1 R206 1 SW1                                                        | E-Switch                          | TL3302AF260QJ                           | 54                        | 54                        | 54                        | 54                        | 54                        | 54                        | 54                        | 54                        |
| 55              | SPST tactile switch, 12V, 0.5A Stereo Audio Codec (49 WLP)                                                            | 1 U1 1                                                                     | MAXIM                             | MAX98090AEWJ+ SPM0423HD4H-WB            |                           |                           |                           |                           |                           |                           |                           |                           |
| 56              | OPEN, Digital Microphone (6 LGA) Digital Microphone (6 LGA)                                                           | U2                                                                         | Knowles Acoustics Knowles         | SPM0423HD4H-WB                          |                           |                           |                           |                           |                           |                           |                           |                           |
| 57 57           | Digital Microphone (6 LGA)                                                                                            | 1 U3 1 U3                                                                  | Acoustics Knowles Acoustics       | SPM0423HE4H-WB                          | DO NOT WASH DO NOT WASH   | DO NOT WASH DO NOT WASH   | DO NOT WASH DO NOT WASH   | DO NOT WASH DO NOT WASH   | DO NOT WASH DO NOT WASH   | DO NOT WASH DO NOT WASH   | DO NOT WASH DO NOT WASH   | DO NOT WASH DO NOT WASH   |
| 58 59           | SingleCMOS switch debouncer (4 SOT143) 1.8V Low Noise Linear Regulator (5 SOT23)                                      | 1 U4 1 U5                                                                  | MAXIM MAXIM                       | MAX6816EUS+ MAX8887EZK18+               | Topmark: ADPX             | Topmark: ADPX             | Topmark: ADPX             | Topmark: ADPX             | Topmark: ADPX             | Topmark: ADPX             | Topmark: ADPX             | Topmark: ADPX             |
| 60              | 300mA LDO regulator (SOT23-6)                                                                                         | 1 U6                                                                       | MAXIM                             | MAX1963AEZT120+ MAX8511EXK33+           |                           |                           |                           |                           |                           |                           |                           |                           |
| 61              | 3.3V Low Noise Linear Regulator (5 SC70) Dual SPDT switch (10 uDFN)                                                   | 2 U7, U104 4 U8-U11                                                        | MAXIM MAXIM                       | MAX4906ELB+                             | 62                        | 62                        | 62                        | 62                        | 62                        | 62                        | 62                        | 62                        |
| 63              | Low Power Microcontroller (56 TQFN)                                                                                   | 1 U100                                                                     | MAXIM                             | MAXQ2000-RBX+                           |                           |                           |                           |                           |                           |                           |                           |                           |
| 64              | USB to Uart interface (32L-TQFN)                                                                                      | 1 U101                                                                     | FTDI                              | FT232BQ                                 |                           |                           |                           |                           |                           |                           |                           |                           |
| 65              | 3-wire EEPROM, type 93C46 (SOIC-8)                                                                                    | 1 U102 1 U103                                                              | Ateml                             | AT93C46EN-SH-B MAX8511EXK25+            |                           |                           |                           |                           |                           |                           |                           |                           |
| 66              | 2.5V Low Noise Linear Regulator (5 SC70) AudioDAC with USB interface (32 QFP)                                         | U200                                                                       | MAXIM TI                          | PCM2707PJT                              | 67                        | 67                        | 67                        | 67                        | 67                        | 67                        | 67                        | 67                        |
| 68              | Digital Audio Transceiver (28 SO)                                                                                     | 1 1 U201 1                                                                 | Cirrus Logic                      | CS8427-CSZ                              |                           |                           |                           |                           |                           |                           |                           |                           |
| 69              | 13Mhz clock oscillator (2.5mm x 2.0mm)                                                                                | Y1 1                                                                       | ECS Inc. Hong Kong X'tals         | ECS-2033-130-BN SSL60000N1HK188F0-0     |                           |                           |                           |                           |                           |                           |                           |                           |
| 71              | 6MHz crystal crystal, 16MHz (3.2mm x 2.5mm)                                                                           | Y100 1 Y101                                                                | Kyocera                           | CX3225SB16000D0FLJZZ                    | 70                        | 70                        | 70                        | 70                        | 70                        | 70                        | 70                        | 70                        |
| 72              | crystal, 12MHz (3.2mm x 2.5mm)                                                                                        | 1 Y200                                                                     | Kyocera                           | CX3225SB12000D0FLJZZ                    |                           |                           |                           |                           |                           |                           |                           |                           |
| 73              | Test Point 'Miniature' 40mil drill size (red) Test Point 'Multipurpose' 63mil drill size                              | 6 BCLK, LRCLK, SDIN, SDOUT, /IRQ\, MCLK 4 SPKLP, SPKRP, HPR, HPL           | Keystone Keystone                 | 5000 5010                               |                           |                           |                           |                           |                           |                           |                           |                           |
| 74 75           | (red) Test Point 'Multipurpose' 63mil drill size                                                                      | 8 SPKLN, SPKRN, GND(x5), HPGND 29 IN1, IN2, IN3, IN4, IN5, IN6, JACKSENSE, | Keystone                          | 5011                                    |                           |                           |                           |                           |                           |                           |                           |                           |
| 76              | (Black) Shunt, Shorting Jumper, 2 position, 0.1 center Buss wire, 20G plated solid copper 0.25 inch U-shape wire loop | 24 RCVP/LOUTL, RCVN/LOUTR, FSPKLP, FSPKLN, FSPKRP, FSPKRN, DVDD,           | Kycon Weico Wire                  | SX1100-B                                |                           |                           |                           |                           |                           |                           |                           |                           |
| 78              | PCB                                                                                                                   | DVDDIO, 1 MAX98090                                                         | SPKVDD, GND(x6) KIT Via           | 9020 Buss                               | 77                        | 77                        | 77                        | 77                        | 77                        | 77                        | 77                        | 77                        |
|                 |                                                                                                                       | AVDD, HPVDD, WLP EVALUTION MAX98090 WLP EVALUTION KIT                      | Systems MEI                       |                                         |                           |                           |                           |                           |                           |                           |                           |                           |
| 79              | PCB                                                                                                                   | MAX98090 WLP EVALUTION KIT                                                 | Gorilla Circuits                  |                                         |                           |                           |                           |                           |                           |                           |                           |                           |
| 80              | PCB                                                                                                                   |                                                                            |                                   |                                         |                           |                           |                           |                           |                           |                           |                           |                           |
|                 |                                                                                                                       | 1 1                                                                        |                                   |                                         |                           |                           |                           |                           |                           |                           |                           |                           |
|                 | Cable, USB high-speed A-to-mini B                                                                                     | 1                                                                          |                                   |                                         | PACK-OUT 1                | PACK-OUT 1                | PACK-OUT 1                | PACK-OUT 1                | PACK-OUT 1                | PACK-OUT 1                | PACK-OUT 1                | PACK-OUT 1                |
|                 | Inductor, 22uH, 1A (6.2mm x 6.3mm)                                                                                    |                                                                            |                                   |                                         |                           |                           |                           |                           |                           |                           |                           |                           |
|                 |                                                                                                                       | 1                                                                          |                                   |                                         |                           |                           |                           |                           |                           |                           |                           |                           |
|                 |                                                                                                                       |                                                                            |                                   |                                         | 2                         | 2                         | 2                         | 2                         | 2                         | 2                         | 2                         | 2                         |

MICBIAS

MICBIAS

IN1

IN2

IN3

IN4

MICBIAS

MICBIAS

2

1

IN1

JU6

2

1

IN2

JU8

JU9

2

1

IN3

JU7

2

1

IN4

JU10

JU11

MIC

R14

2.2k

R17

2.2k

R37

2.2k

R18

2.2k

JU22

JU19

JU27

GND

GND

IN5

D2

1

3

20V 500mA

IN6

FB7

FB8

FB9

FB10

2

1

IN5

2

1

IN6

JU24

JU23

R20

2.2k

R29

2.2k

C30

1uF

C31

1uF

C32

1uF

C33

1uF

MIC

JU28

R38

0

R39

0

R40

0

R41

0

FB11

GND

FB12

C11

1uF

C15

1uF

MICBIAS

C29

1uF

R32

0

R33

0

+1.8V

3V3

CODEC\_MCLK

CODEC\_BCLK

CODEC\_LRCLK

CODEC\_SDIN

CODEC\_SDOUT

CODEC\_SDA

CODEC\_SCL

R6

OPEN

CODEC\_IRQ

R5

10k

CODEC\_DIGMICDATA

CODEC\_DIGMICCLK

IRQ

G4

G5

F5

E5

G6

E2

D3

F4

C7

A7

B7

B6

C6

C4

D4

DVDDIO

C26

1uF

MCLK

BCLK

LRCLK

SDIN

SDOUT

SDA

SCL

IRQ

MICBIAS

IN1/DIGMICDATA

IN2/DIGMICCLK

IN3

IN4

IN5

IN6

NC

C2

NC

B2

NC

C3

NC

C5

NC

D5

NC

E3

NC

E4

F6

DVDDIO

DVDD

C24

1uF

F7

DVDD

AVDD

C35

1uF

E7

AVDD

DGND

G7

AGND

D7

HPVDD

C10

0.1uF

G3

HPVDD

U1

MAX98090WLP

HPGND

SPKRGND

SPKLGND

G1

A6

A1

C65

10uF

CPVDD

F1

CPVDD

C13

1uF

B3

B4

SPKVDD

CPVSS

G2

CPVSS

SPKVDD

JACKSNS

RCVP/LOUTL

RCVN/LOUTR

SPKLP

SPKLN

SPKRN

SPKRP

HPR

HPL

HPSNS

REF

VCM

C1P

F3

C34

1uF

C1N

C12

1uF

C1N

F2

C2

SPKVDD

C1

1uF

10uF

B5

C1

B1

A4

A5

A2

A3

D1

E1

D2

D6

E6

C1P

C18

1uF

VCM

MIC

JU5

JACKSNS

JACKSENSE

RCVP/LOUTL

RCVN/LOUTR

C8

10pF

FB5

C9

FB6

C27

1uF

0

10pF

0

R2

0

REF

C28

2.2uF

HPR

HPL

HPGND

R1

0

JU17

C4 1uF

JU18

C5

1uF

HPSNS

MIC

HPSNS

2

1

2

1

4

3

2

1

LOUTL

LOUTR

HP

TITLE:

DRAWN:

FB1

0

FB2

0

FB3

0

FB4

0

SPKLP

C48

OPEN

SPKLN

C49

OPEN

GND

SPKRN

C50

OPEN

SPKRP

C51

OPEN

L1

OPEN

L2

OPEN

L3

OPEN

L4

OPEN

C52

0.22uF

C53

0.22uF

C54

0.22uF

C55

0.22uF

01/23/13

GND

FSPKLP

R21

22

C38

0.22uF

R22

22

FSPKLN

FSPKRN

R23

22

C39

0.22uF

R24

22

FSPKRP

GND

MAX98090 WLP EVALUATION KIT

PCB PART NUMBER:

EPCB98090WLP

DATED:

C56

0.22uF

C57

0.22uF

C58

0.22uF

C59

0.22uF

SHEET:       OF 6

1

REV:

A

<!-- image -->

<!-- image -->

+1.8V

1

2

3

1

2

3

GND

L/R

U2

OPEN

DATA

GND

CLOCK

SPM0405HD4H-WB

GND

VDD

U3

L/R

DATA

GND

CLOCK

SPM0405HD4H-WB

VDD

6

5

4

6

5

4

+1.8V

+1.8V

C40

0.1uF

CLK1

C41

0.1uF

CLK1

R19

OPEN

JU12

JU13

CODEC\_DIGMICDATA

CODEC\_DIGMICCLK

<!-- image -->

TITLE:

MAX98090 WLP EVALUATION KIT

DRAWN:

PCB PART NUMBER:

EPCB98090WLP

APPROVAL

DATED:

DATED:

DATED:

DATED:

DATED:

DATED:

REVISION:

REVISION:

REVISION:

REVISION:

REVISION:

REVISION:

DATED:

01/23/13

2

SHEET:    OF 6

DATED:

REV:

A

RMCK

PCM2707\_MCLK

13MHZ

SWITCHED\_MCLK1

9

8

6

7

9

8

6

7

C61

0.1uF

NC1

NC2

NO2

NO1

C62

0.1uF

NC1

NC2

NO2

NO1

+3.3V

10

V+

COM1

U8

MAX4906

COM2

IN

SHDN/EN

GND

3

+3.3V

10

V+

COM1

U9

MAX4906

COM2

IN

SHDN/EN

GND

3

4

5

1

2

4

5

1

2

SWITCHED\_MCLK1

I2S\_SW

MCLK\_SWITCH

MCLK\_SW

CS8427\_BCLK

CS8427\_LRCLK

PCM2707\_LRCLK

PCM2707\_BCLK

CS8427\_DAC

CS8427\_ADC

PCM2707\_ADC

PCM2707\_DAC

9

8

6

7

9

8

6

7

C63

0.1uF

NC1

NC2

NO2

NO1

C64

0.1uF

NC1

NC2

NO2

NO1

+3.3V

10

V+

COM1

U10

MAX4906

COM2

IN

SHDN/EN

GND

3

+3.3V

10

V+

COM1

U11

MAX4906

COM2

IN

SHDN/EN

GND

3

4

5

1

2

4

5

1

2

I2S\_BCLK

I2S\_LRCLK

I2S\_SW

CODEC\_MCLK

I2S\_DAC

I2S\_ADC

I2S\_SW

MCLK

R9

0

C42

OPEN

13MHZ

2

3

1

4

JU14

C43

0.01uF

+3.3V

MCLK\_SWITCH

4

VCC

Y1

13MHz

OUT

GND

3

ON

1

2

<!-- image -->

TITLE:

MAX98090 WLP EVALUATION KIT

DRAWN:

PCB PART NUMBER:

EPCB98090WLP

APPROVAL

DATED:

DATED:

DATED:

DATED:

DATED:

DATED:

REVISION:

REVISION:

REVISION:

REVISION:

REVISION:

REVISION:

DATED:

01/23/13

3

SHEET:    OF 6

DATED:

REV:

A

<!-- image -->

<!-- image -->

<!-- image -->

MAX98090 WLP EVALUATION KIT

PCB PART NUMBER:

EPCB98090WLP

DATED:

TITLE:

DRAWN:

01/23/13

4

SHEET:       OF 1

REV:

A

R111

0

C113

0.1uF

+5V

C117

1uF

+5V

J1-6

J1-7

J1-8

J1-9

J1-5

USB

CONTROL

U102

AT93C46A

VCC

CS

ORG

NC

GND

SK

D1

D0

1

2

3

4

U104

MAX8511EXK33+

IN

5

OUT

N.C.

SHDN

J1

8

6

7

5

1

4

3

J1-1

J1-2

J1-3

J1-4

GND

VUSB

FB100

2

C104

10uF

C105

0.1uF

R102

27

R103

27

R106

2.2k

R107

10k

C118

1uF

+3.3V

+5V

C106

33000pF

R104

1.5k

VUSB

C111

18pF

Y100

6MHz

C112

18pF

D101

R110

220

6

8

7

5

4

27

28

32

1

2

R105

470

30

AVCC

3V3OUT

USBDM

USBDP

RSTOUT

RESET

XTIN

XTOUT

EECS

EESK

EEDATA

31

TEST

+5V

C115

1uF

VUSB

C107

0.1uF

1

4

3

VUSB

3

VCC

AGND

29

C108

0.1uF

U101

FT232BQ

GND

9

U103

MAX8511EXK25+

IN

OUT

N.C.

SHDN

GND

VUSB

C109

0.1uF

26

VCC

5

2

GND

17

+2.5V

+3.3V

13

VCCIO

TXD

RXD

RTS

CTS

DTR

DSR

DCD

RI

TXDEN

TXLED

RXLED

PWRCTL

PWREN

SLEEP

C116

1uF

C110

0.1uF

25

24

23

22

21

20

19

18

16

12

11

14

15

10

TXD

RXD

RTS

CTS

DTR

DSR

DCD

RI

R108

220

VUSB

R109

1k

2

S

1

+3.3V

P100

D100

+5V

3

D

G

C114

0.1uF

+3.3V

R34

10k

SW1

SW-MOM

1

P1.0

2

3

4

5

6

7

8

9

10

11

12

13

14

P1.1

P1.2

P1.3

P1.4

P1.5

P1.6

P1.7

P2.4

P2.5

P2.6

P2.7

P3.4

P3.5

56

P0.7

P3.6

15

2

IN

+3.3V

4

U4

VCC

GND

1

MAX6816

MCLK\_SW

54

P0.5

SEG24

17

55

P0.6

P3.7

16

OUT

3

53

P0.4

COM3

18

C6

0.1uF

CS8427\_RST

52

P0.3

COM2

19

CONNECT

51

P0.2

COM1

20

I2S\_SW

50

P0.1

CODEC\_IRQ

49

P0.0

U100

MAXQ2000-RBX

COM0

VDDIO

21

C100

0.1uF

22

+3.3V

JU100

48

VADJ

GND

23

47

VLCD2

TCK

24

DSR

46

VLCD1

TDI

25

DCD

45

VLCD

TMS

26

RTS

TITLE:

DRAWN:

TXD

44

P7.1

TDO

27

RI

RESET

28

DTR

MAX98090 WLP EVALUATION KIT

PCB PART NUMBER:

EPCB98090WLP

DATED:

RXD

43

P7.0

HFXIN

HFXOUT

VDD

P6.5

P6.4

P6.1

P6.0

GND

MISO

SCLK

MOSI

SS

32KOUT

32KIN

42

41

40

39

38

37

36

35

34

33

32

31

30

29

C102

8pF

1

2

CTS

SDA

R100

1.5k

R101

1.5k

SCL

CDOUT

CCLK

CDIN

CS1

HOT

GND

Y101

16MHz

GND

HOT

4

3

+2.5V

C101

0.1uF

01/23/13

+3.3V

5

C103

8pF

SHEET:       OF 1

REV:

A

<!-- image -->

<!-- image -->

| TITLE: MAX98090 WLP EVALUATION KIT   | TITLE: MAX98090 WLP EVALUATION KIT   | A REV:          |
|--------------------------------------|--------------------------------------|-----------------|
| DRAWN:                               | 01/23/13 DATED:                      | 01/23/13 DATED: |
| EPCB98090WLP PCB PART NUMBER:        | 6 SHEET: OF 6                        | 6 SHEET: OF 6   |

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->