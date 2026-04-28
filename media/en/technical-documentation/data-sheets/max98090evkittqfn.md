<!-- lastmod 2023-11-03 -->
## MAX98090 Evaluation Kit (TQFN)

## General Description

The MAX98090 (TQFN) evaluation kit (EV kit) is a fully assembled  and  tested  circuit  board  that  evaluates  the MAX98090 (TQFN) audio codec. The MAX98090 is an integrated  audio  codec  including  an  earpiece  amplifier, stereo Class D amplifier, stereo DirectDrive ®  headphone amplifier, and digital signal processing.

To  enable  easy  connection  to  a  wide  range  of  audio sources,  the  EV  kit  includes  audio  devices  to  convert both USB and S/PDIF data to I 2 S data. The EV kit also integrates  a  MAXQ2000  microcontroller  to  enable  I 2 C and SPI communication with the on-board I 2 C- and SPIcapable  devices.  A  simple  and  intuitive  graphical  user interface  (GUI)  provides  communication  with  the  EV  kit through Windows ®  OS running Windows XP ® -, Windows 7-, or Windows 8-compatible software.

Ordering Information appears at end of data sheet.

Figure 1. Simplified EV Kit Block Diagram

<!-- image -->

DirectDrive is a registered trademark and service mark of Maxim Integrated Products, Inc.

Windows and Windows XP are registered trademarks and registered service marks of Microsoft Corp.

19-7461; Rev 1; 7/16

Evaluates: MAX98090 (TQFN)

## Features

- Fully Assembled and Tested
- 2.8V to 5.5V Single-Supply Operation
- Proven Audio PCB Layout
- On-Board USB-to-I 2 C Interface
- On-Board USB-to-I 2 S Converter
- On-Board S/PDIF Transceiver
- On-Board Clock Source
- On-Board Digital Microphone
- Windows XP-, 7-, and 8-Compatible Software

## EV Kit Contents

- MAX98090 TQFN Evaluation Kit
- Two A-to-B Mini-USB Cables

<!-- image -->

## MAX98090 Evaluation Kit (TQFN)

## Quick Start

## Required Equipment

- MAX98090 EV kit (TQFN)
- Two A to mini-B USB cables (included)
- 2.8V to 5.5V, 2A DC power supply
- Set of headphones with a 3.5mm plug
- User-supplied Windows XP, Windows 7, or Windows 8 PC with two available USB ports

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

Follow the steps below to configure the EV kit for audio playback  and  control,  from  a  PC,  to  verify  the  EV  kit's functionality.

- 1) Visit www.maximintegrated.com/evkitsoftware to download the latest version of the MAX98090 software, 98090Rxx.ZIP . Save the software to a temporary folder and uncompress the ZIP file.
- 2) Install the software and USB driver on your computer by running the INSTALL.EXE program inside the temporary folder. The program files are copied and icons are created in the Windows Start | Programs | Maxim EVKIT Software menu. During software installation some versions of Windows may show a message indicating that this software is from an unknown publisher. This is not an error condition and it is safe to proceed with the installation.
- 3) Verify that all jumpers are in their default positions, as shown in Figure 2 (same as listed in Table 2).
- 4) Connect the power supply between the SPKVDD and GND PCB pads.
- 5) Set the power supply to 4.2V with a 2A current limit and turn it on.

## MAX98090 Software Files

| FILE                    | DESCRIPTION                                         |
|-------------------------|-----------------------------------------------------|
| Install.exe             | Install the MAX98090 software files on the computer |
| CDM21000.exe            | USB driver installer                                |
| Device Manager          | Shortcut to computer's device manager               |
| USB_Driver_Help_300.pdf | USB driver installation help file                   |

│

Evaluates: MAX98090 (TQFN)

- 6) Connect a USB cable between the PC and the J1 USB port (USB CONTROL) on the EV kit. A Windows message appears when connecting to the EV kit for the first time. Each version of Windows may have a slightly different message. If Windows reports that the device is ready to use, then the USB driver has been installed successfully.
- 7) If needed, the USB driver can be manually installed by navigating to the C:\Program Files(x86)\Maxim\ MAX98090 folder (default installation directory) and following the instructions in the USB\_Driver\_ Help\_300.PDF document.
- 8) Connect headphones to the headphone jack (HP).
- 9) Start the MAX98090 software by opening its icon in the Start | Programs | Maxim EVKIT Software menu. The software main window appears, as shown in Figure 4.
- 10)  Wait while the software connects to the EV kit. Once the connection is established, the status bar at the bottom will indicate that the USB and device are connected.
- 11)  Once the USB and device connections have been established, select the Block Diagram tab.
- 12)  Click on the USB block.
- 13)  Click Yes to automatically configure the EV kit for USB audio playback.
- 14)  Connect a USB cable between the PC and the J2 USB port (USB AUDIO). Windows automatically detects the EV kit as a sound card and installs the USB audio class drivers.
- 15) Open Windows' Sound dialog and select the Playback tab. A USB Audio DAC item, similar to Figure 3 , is added to the list of available playback devices. All audio played through this device is sent to the EV kit.
- 16)  Verify that the USB Audio DAC item is set as the default device.
- 17)  Verify that audio can be heard through the connected headphones.
- 18)  Quick start complete. Refer to the MAX98090 IC data sheet for additional information.

## Evaluates: MAX98090 (TQFN)

Figure 2. Default Shunt Configuration

<!-- image -->

Figure 3. Playback Device

<!-- image -->

│

Figure 4. MAX98090 Software Main Window

<!-- image -->

## MAX98090 Evaluation Kit (TQFN)

## Detailed Description of Software

The MAX98090 EV kit is intended to be evaluated with the MAX98090 software, as it provides an intuitive graphi -cal user interface (GUI) for programming the MAX98090 device  and  also  includes  a  handful  of  features  that  are intended to aid evaluation.

The MAX98090 software main window is divided into three sections: software buttons, status panel, and tabbed pages (Figure 4). The buttons provide basic functionality and the status panel provides monitoring capabilities. The tabbed pages provide the controls to program the MAX98090.

The Quick  Setup tab  provides  access  to  the  device's quick setup registers (0x04-0x0B). The Block Diagram tab provides access to all the device registers and uses diagram  blocks  to  access  dialog  windows.  The  dialogs contain  the  GUI  controls  used  to  program  the  device. The Control Registers tab provides access to registers 0x00-0x45 as well  as  to  the  revision  ID  register,  0xFF. The EQ Registers tab  provides  access  to  the  device's parametric equalizer (EQ), registers 0x46-0xAE. The BQ Registers tab  provides  access  to  the  device's  biquad (BQ) filter, registers 0xAF-0xBD.

The  MAX98090  software  can  be  downloaded  from www.maximintegrated.com/evkitsoftware .  When evaluating  with  the  MAX98090  EV  kit  and  software,  it  is recommended that this document be used in conjunction with the MAX98090 IC data sheet.

## Software Buttons

There are four buttons available on the main window of the MAX98090 software: Power, Read ALL (F4), Reset

## Evaluates: MAX98090 (TQFN)

(F12) ,  and Connect .  These  buttons  are  always  accessible, regardless of the active tab.

## Power

The Power button programs the MAX98090's SHDN bit to enable/disable the device. When the device is disabled/ enabled,  the  button  image  is  gray/blue,  respectively. When the device is in shutdown ( SHDN bit = 0) the software is still able to communicate with the device, as its I 2 C interface remains active.

## Read ALL (F4)

The Read  ALL  (F4) button performs  the following sequence  of  reads  and  updates  the  associated  register tab. This function is also available from the Actions menu.

- Read the MAX98090 IRQ pin. This only updates the Status panel.
- Read the status register (0x01). This also updates the Status panel.
- Read control registers (0x03-0x45).
- Read parametric equalizer registers (only if the EQ Registers tab is visible or if EQ bands are enabled).
- Read biquad registers (only if the BQ Registers tab is visible or if the biquad filter is enabled).
- Read Revision ID register (0xFF).
- Read S/PDIF Transceiver (U201) registers.

## Reset (F12)

The Reset (F12) button resets the checked items as indicated on the Reset dialog window (Figure 5). This function is also available from the Actions menu.

Figure 5. Reset Dialog Window

<!-- image -->

│

## Connect/Disconnect

The Connect/Disconnect button  is  used  to  connect  or disconnect  from  the  MAX98090  EV  kit,  which  is  con -nected to the PC via its USB CONTROL (J1) port or a TCP connection. The button either displays Connect or Disconnect , depending on the current state of the EV kit connection.

When the button displays Connect ,  it  indicates  that  the software is not connected to the EV kit. Pressing the button initiates the connection sequence. When using a TCP connection, ensure that it has been set up in the software before pressing Connect . The TCP connection is configured from the TCP Configuration Setup dialog, which is accessed by selecting Options | Connect Options | TCP from the Menu bar.

When the  button  displays Disconnect ,  it  indicates  that the software is connected to the EV kit. Pressing the button initiates the disconnect sequence.

## Status Panel

The  MAX98090 Status panel,  located  on  the  left  side of  the  software  main  window,  displays  the  state  of  the six status bits (register 0x01), the shutdown bit (register 0x45), and the state of the MAX98090 hardware IRQ pin. The color of a Status label indicates whether it is asserted or not asserted. When asserted, the label is teal colored; when not asserted, the label is light gray.

Note: A status bit's interrupt must be enabled in order for the  status  bit  to  get  updated  in  the  Status  register. The interrupts are enabled from the Interrupts block.

## Quick Setup Tab

The Quick  Setup tab  provides  controls  for  configuring the quick setup registers (0x04-0x0B). These quick setup registers  are  write-only  and  operate  like  pushbuttons. Refer  to  the Quick  Setup  Configuration section  of  the MAX98090 IC data sheet for additional details.

As the first  four  steps  are  completed,  the  section  at  the bottom  of Step-5 will  be  updated.  Checkmarks  indicate that the step is complete and the Reg : and Bitlabels indicate which quick setup register and bit are programmed.

For simplicity, this tab is divided into five steps as shown in  Figure  6.  The  first  three  steps  configure  the System Clock , Sample Rate , Mode , and Format . The fourth step configures the audio Input and Output (I/O) signal path. As  I/O  selections  are  made,  a  corresponding  image  is shown in the Configuration group box, providing a visual representation of the selected path. When a valid I/O path is  selected, Step-4 is  complete.  To  clear  the  input  and output selections, press the Clear button.

Once all four checkmarks are visible, press the Configure button  to  program  the  device.  If  an  invalid  I/O  path  is selected, the software reports ' Not a valid I/O configuration ' and the I/O selections are cleared.

## Block Diagram Tab

The MAX98090 software uses a block diagram to facilitate the programming of the MAX98090 as well as provide a visual representation of the device's functions and cur -rent  configuration. The  controls  for  a  given  function  are grouped on the same dialog window, which is opened by clicking  on  the  associated  block image. The blocks that are within the dotted border are related to the MAX98090 device and the blocks outside the dotted border are for the associated support circuitry.

There are two types of blocks in the block diagram and they are distinguished by the mouse cursor image. The mouse cursor will change to a hand when over an active block and will change to an up-arrow when over a toggle block.  An active block opens a dialog window, containing controls  for  configuring  the  MAX98090.  A  toggle  block does not open a dialog window, but toggles a specific set -ting when clicked.

The  color  of  the  blocks  changes,  depending  on  the enabled state of the function(s) it controls. A disabled block is gray and an enabled block is teal. Figure 7 shows the block  diagram  with  the  MAX98090  configured  for  USB audio  input  and  headphone  output. Note: A  disabled/ enabled block does not necessarily indicate that its associated audio path is disabled/enabled.

## S/PDIF and USB

The S/PDIF and USB blocks  are  outside  the  dotted border  and  thus  not  related  to  the  MAX98090  device. These  blocks  represent  the  stereo  digital  audio  transceiver (U201) and the USB stereo audio DAC (U200) that are designed onto the EV kit. These blocks are used to enable the associated circuits, but also include controls that automatically configure the MAX98090 to work with the enabled audio device.

The S/PDIF and USB audio devices are connected to the MAX98090  I 2 S  bus  through  analog  switches  (U9-U11), which  are  controlled  through  the  MAX98090  software. These  switches  are  automatically  configured  once  the S/PDIF or USB block is enabled, but they can be toggled by clicking on the switch blocks.

## MAX98090 Evaluation Kit (TQFN)

## Evaluates: MAX98090 (TQFN)

Figure 6. Quick Start Tab

<!-- image -->

## MAX98090 Evaluation Kit (TQFN)

Figure 7. MAX98090 Software Block Diagram

<!-- image -->

## MAX98090 Evaluation Kit (TQFN)

## Dialog Windows

Dialog windows are associated with specific blocks in the block diagram and they contain the controls for configuring  the  registers  that  are  associated  with  that  particular block  of  the  MAX98090  IC.  The  highlighted  blocks  in Figure  8  are  the  blocks  that  share  a  dialog  window.  In addition, the blocks that are outlined can have their dialog windows  synchronized  to  each  other.  This  dialog  sync feature is a software feature and is enabled by selecting the Sync Right and Left checkbox on the dialog window. When  enabled,  the  software  programs  the  same  user configurations to both the left and right output channels.

A dialog window is opened by clicking on a diagram block. Figure 9 shows the typical GUI controls that are found on dialog windows and Figure 10 shows the more advanced biquad  filter  dialog.  When  a  control's  state  is  changed, it  results  in  the  programming  of  the  associated  device register(s).

The  biquad  dialog  uses  the  same  types  of  controls  as other  dialogs,  but  it  also  provides  a  plot  of  the  filter's amplitude  and  phase.  This  provides  a  visual  representation  of  the  programmed  coefficients  as  well  as  some insight into the filter's behavior. The only two blocks that use this type of biquad filter dialog are the Biquad Filter and Parametric Equalizer blocks.

The  filter  dialog  shown  in  Figure  10  is  for  the  7-band parametric equalizer as can be seen by the 7 available filters.  Each  filter  can  be  individually  programmed  and when selected will show up as yellow lines on the plots. A sum of all the enabled filters can be displayed by selecting the Show Cascade checkbox. The  cascaded  response will show up as blue lines on the plots. The Biquad Filter dialog window is similar to that shown in Figure 10 , except that it is only a single biquad filter.

## Registers Tabs

The MAX98090 software has three device register tabs: Control  Registers , EQ Registers ,  and BQ Registers . These  register  tabs  display  the  device's  registers  in  a typical  register  map  format.  Each  of  the  register  tabs provides  two  methods  for  configuring  the  device.  For example, Figure  11  shows  the  register  tab  elements  of register 0x25.

The  first  configuration  method  involves  clicking  on  the register's bit  labels. A  grayed-out bit label indicates that the bit is currently set low. A bold bit label indicates that the bit  is  currently  set  high.  Clicking  on  a  bit  will  toggle its state and result in a write to that register. This action also  updates  the  value  displayed  in  the  register's Edit box, located to the right of the bit labels. Note: Read-only bits cannot be clicked/toggled and are only meant to display the register's current state. These read-only bits are updated by performing a read all operation.

The  second  configuration  method  involves  entering  a hexadecimal value in the register's associated Edit box and then pressing the Enter key. The software will automatically configure the device register once the Enter key is pressed. This method will also update the state of the bit labels to reflect the value shown in the Edit box.

## Control Registers

The Control Registers tab  provides  access  to  most  of the device's control registers and all of its status registers. The  range  of  registers  accessible  from  this  tab  is  from register address 0x00 through 0x45 and the revision ID register (0xFF).

The Write All (F8) button writes to all the writable registers on the Control Registers tab. It also writes to all the S/PDIF  transceiver  registers,  and  updates  the  configu -rable GPIOs

Register changes made through this tab are reflected on the Block Diagram tab. As such, the Control Registers tab  and  the Block  Diagram tab  are  always  in-sync. However,  register  changes  made  through  the Control Registers tab  are  not  automatically  reflected  on  open dialog windows. To have an open dialog window updated, close then re-open the dialog window.

## Equalizer (EQ) Registers

The  main  use  of  the EQ  Registers tab  is  to  provide access  to  the  raw  data  contained  in  the  EQ  registers (0x46  through  0xAE).  The  preferred  method  for  configuring  the  device's  equalizer  is  through  the 7-Band Parametric Equalizer dialog window (Figure 10).

The registers on this tab are grouped into seven bands (Band  1  through  Band  7)  and  each  band  consists  of fifteen registers. These fifteen registers are then divided into five coefficients (B0\_, B1\_, B2\_, A1\_, and A2\_). The coefficients  are  configured  by  clicking  the  register  bit labels  or  by  entering  a  24-bit  hex-formatted  value  in  its Edit box.  For  example, Figure  12  shows  coefficient  B0 of Band 1.

The Update Coefficients button updates the EQ register map to reflect any changes that were made through the 7-Band Parametric Equalizer dialog window.

Note: Coefficient changes made  through this EQ Registers tab  are  not  reflected  on  the Block Diagram tab or the 7-Band Parametric Equalizer dialog window.

Figure 8. Diagram Blocks with Shared and/or Synchronized Dialog Windows

<!-- image -->

│

## MAX98090 Evaluation Kit (TQFN)

## Evaluates: MAX98090 (TQFN)

Figure 9. Dialog Windows

<!-- image -->

Evaluates: MAX98090 (TQFN)

<!-- image -->

Figure 10. Biquad Filter Dialog Window

Figure 11. Register Tab Elements

<!-- image -->

Figure 12. Coefficient (B0) of EQ Band 1

<!-- image -->

│

## MAX98090 Evaluation Kit (TQFN)

## Biquad (BQ) Registers

The main use of the BQ Registers tab is to provide access to the raw data contained in the 15 BQ registers (0xAF0xBD). The preferred method for configuring the device's biquad filter is through the Biquad Filter dialog window.

The BQ registers are divided into five coefficients (ADCB0, ADCB1, ADCB2, ADCA1,  and ADCA2)  that  are  config -ured by clicking the register bit labels or entering a 24-bit hex-formatted value in the coefficient's Edit box.

The Update  Coefficients button updates the BQ Registers tab  to  reflect  any  changes  that  were  made through the Biquad Filter dialog window.

Note: Coefficient changes made  through this BQ Registers tab  are  not  reflected  on  the Block Diagram tab or the Biquad Filter dialog window.

## Menu Bar

All the Menu bar items are described in Table 1. Additional information on a few of the menu items is provided in the following sections.

## File

The software's save and load features are accessed from the File menu  item.  The  save  feature  saves  the  data currently  displayed  on  the Control  Registers tab  and S/PDIF  Transceiver tab.  The  current  state  of  the  configurable GPIO pins is also saved to the configuration file. The data from the EQ Registers and BQ Registers tabs is saved if the filters are enabled.

A configuration file's main purpose is to capture the cur -rent state of the MAX98090's registers, as displayed on the register tabs. This feature makes it easy to program a device to a saved/known state and allows for the sharing of  configuration  files  between  users.  The  file  and  save features  can  still  be  used  when  an  EV  kit  is  not  connected. This allows configuration files to be created and opened with out the hardware and further contributes to the sharing of configuration files. To facilitate file usage, use descriptive file names when saving configuration files.

Since the configuration file is automatically generated by the software, it is not meant to be manually formatted and doing so may cause file loading issues. To open a configuration file for viewing, use a plain text editor.

Select File | Save Settings Ctrl+S to create a  configuration file. Data is saved as tab-delimited values and the file is saved with a .98090 extension.

To  load  a  saved  configuration  file,  select File  |  Load Settings Ctrl+O . Only writable registers are programmed with data from the loaded configuration file.

## Connect Options

The Connect Options item is accessed from the Options menu. This menu item provides two methods for interfacing  the  MAX98090  EV  kit  hardware  to  the  MAX98090 software. The simplest method ( MAXQ USB ) uses a standard male-to-male USB cable (A to mini-B) connection. A local  PC,  running  the  MAX98090  software,  connects  to the USB CONTROL port (J1) on the EV kit. This method uses  the  on-board  MAXQ2000  microcontroller  circuitry to communicate with the MAX98090 I 2 C-capable device.

The TCP option is used to setup an Internet connection between the EV kit and the software. To use this feature, additional hardware/software (not provided) are required. The  additional  tools  would  function  as  the  communication  medium  between  the  Ethernet  connection  and  the MAX98090's I 2 C bus. When using this option, the USB CONTROL port (J1) on the EV kit still needs to be powered, in order to supply the on-board LDOs.

## Software Versions

The  MAX98090  software  works  with  both  packaged versions (TQFN and WLP) of the MAX98090. Each version  of  the  MAX98090  has  its  own  unique  EV  kit.  The WLP version is evaluated on the MAX98090EVKIT#WLP kit and the  TQFN version is evaluated on the MAX98090EVKIT#TQFN kit. Once an EV kit is connected to the host PC and a connection is established with the software,  the  program  automatically  detects  the  device type and configures the GUI accordingly.

The Software Versions item from the View menu allows for the reconfiguring of the GUI. This is particularly useful when an EV kit is not connected and the user wants to generate a configuration file for a specific MAX98090 package.  This  feature  can  be  used  when  an  EV  kit  is connected to the software, but care must be taken since the software does not automatically revert the GUI back to the appropriate version. In this case, the user needs to manually select the version that matches the connected device or perform a Disconnect-then-Connect operation.

The  main  difference  between  the  WLP  and  TQFN  versions of the MAX98090 is the additional inputs (IN5 and IN6) available on the WLP version. This difference results in  changes  to  the Quick  Setup , Block  Diagram ,  and Control Registers tabs. These differences are also discussed in the MAX98090 IC data sheet.

## Detailed Hardware Description

The  MAX98090  EV  kit  (TQFN)  evaluates  the  TQFN package  version  of  the  MAX98090  audio  codec  and provides  access  to  all  analog  and  digital  inputs/outputs

## MAX98090 Evaluation Kit (TQFN)

Table 1. Menu Bar Items

| MENU ITEM                         | DESCRIPTION                                                                                                                                                                                                                                  |
|-----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FILE                              |                                                                                                                                                                                                                                              |
| Load SettingsCtrl+O               | Loads a configuration file (as saved by the Save Settings option).                                                                                                                                                                           |
| Save Settings Ctrl+S              | Saves a configuration file containing the current device settings.                                                                                                                                                                           |
| Exit                              | Closes the MAX98090 software.                                                                                                                                                                                                                |
| VIEW                              |                                                                                                                                                                                                                                              |
| Show S/PDIF Transceiver Registers | Toggles the visibility of the S/PDIF Transceiver register tab, allowing for more control of the on-board S/PDIF transceiver (U201).                                                                                                          |
| Software Versions                 |                                                                                                                                                                                                                                              |
| MAX98090 TQFN                     | Reconfigures the block diagram and register tabs for the selected device.                                                                                                                                                                    |
| MAX98090 WLP                      | Reconfigures the block diagram and register tabs for the selected device.                                                                                                                                                                    |
| OPTIONS                           |                                                                                                                                                                                                                                              |
| Auto Connect                      | When selected, the software checks the connection status of the MAXQ2000 interface and the MAX98090 device approximately every second. If not connected, the software attempts to establish a connection.                                    |
| Auto Read Status                  | When selected, the device's status registers will be read approximately every second. The Status panel and Control Registers tab are refreshed after each read.                                                                              |
| Auto SHDN for Register Writes     | When selected, the software will ensure that the MAX98090 is in shutdown before writing to certain registers. (See Table 90 of the MAX98090 IC data sheet for the registers that should only be programmed while the device is in shutdown.) |
| I 2 C Clock Speed                 |                                                                                                                                                                                                                                              |
| 100kHz 400kHz                     | Configures the clock speed of the I 2 C interface.                                                                                                                                                                                           |
| Configure MCLK Routing            | Opens the MCLK Routing dialog window that is used to select a clock source for the MAX98090 master clock (MCLK) input. In order for this clock to drive the MAX98090 a shunt must be placed on pins 1-4 of header JU14.                      |
| Connect Options                   | Sets the interface method between the EV kit and MAX98090 software.                                                                                                                                                                          |
| Cmod USB                          | MAX98090 EV kit interfaces to a local PC through its USB Control (J1) port.                                                                                                                                                                  |
| TCP                               | MAX98090 EV kit interfaces to a remote PC via a TCP connection. Additional hardware setup required.                                                                                                                                          |
| ACTIONS                           |                                                                                                                                                                                                                                              |
| Read All Registers F4             | Reads all MAX98090 registers and updates the GUI. Also reads all of the S/PDIF transceiver (U201) registers.                                                                                                                                 |
| Write All Registers F8            | Writes the data from the Edit boxes, on the Control Registers tab, to the MAX98090 device and updates the GUI. Also writes to the S/PDIF transceiver (U201) registers and updates all configurable GPIO pins.                                |
| Reset All Registers F12           | Resets the device according to the check box selections on the Reset dialog window.                                                                                                                                                          |
| HELP                              |                                                                                                                                                                                                                                              |
| About                             | Pop-up window that provides information about the software.                                                                                                                                                                                  |

│

Evaluates: MAX98090 (TQFN)

## MAX98090 Evaluation Kit (TQFN)

on  the  device.  The  EV  kit  also  includes  USB  powered linear-dropout (LDO) regulators that allow the EV kit to be evaluated with a single external supply (+2.8V to +5.5V).

Integrated  into  the  EV  kit  design  are  a  stereo  digital audio  transceiver  (U201)  and  a  stereo  audio  DAC  with USB interface (U200). The digital audio transceiver provides audio input and output via the on-board TOSLINK (SPDIFOUT  and  SPDIFIN)  connectors  and  the  USB audio DAC allows for audio input from the  USB AUDIO port (J2).

In  addition,  the  EV  kit  includes  a  MAXQ2000 microcon -troller  that  facilitates  evaluation  by  providing  I 2 C,  SPI, and GPIO interfaces, allowing the MAX98090 software to communicate with the devices on the EV kit.

## Power Supplies

The EV kit requires a single 2.8V to 5.5V external supply, SPKVDD, to operate. All other MAX98090 supply inputs are  powered  from  the  J1  USB  port.  Jumpers  JU1-JU4 (see  Table  2)  allow  all  MAX98090  supply  inputs  to  be disconnected from USB power and connected to external supplies. In addition, jumpers JU1 and JU2 are used to configure the on-board voltage connected to DVDD and DVDDIO, respectively. See Table 2 for jumper JU1-JU4 configuration options.

To perform supply current and power consumption measurements, use external supplies to power the MAX98090 IC supply inputs: HPVDD, AVDD, DVDD, and DVDDIO.

## Jumper Selection

The EV kit  includes  25  jumpers  to  adjust  various  hardware configuration options. Table 2 describes all the jumpers available on the EV kit.

## Master Clock (MCLK) Selection

Jumper JU14 selects which master clock (MCLK) source drives the MAX98090 IC. The available clock configurations are listed in Table 3. When streaming audio through the  on-board  USB  AUDIO  port  or  S/PDIF  connectors, the EV kit software automatically configures the U8 and U9 switches to route the appropriate clock signal to the MAX98090 MCLK input.

If an external audio source is used, choose either the onboard 13MHz oscillator or an external clock. To connect an external clock, remove the shunt from JU14 and con -nect the clock to pin-1.

## Evaluates: MAX98090 (TQFN)

## I 2 S Audio I/O

The  EV  kit  provides  three  methods  for  evaluating  the MAX98090's digital audio interface (DAI). The first meth -od is through the I 2 S header (JU15) and this provides the most direct connection to the MAX98090's DAI.

The two other methods involve streaming audio onto or off the EV kit. The USB AUDIO port (J2) is used to stream audio onto the EV kit. The SPDIFIN and SPDIFOUT optical connectors are used to stream audio onto or off the EV kit, respectively.

The USB and S/PDIF digital audio signals are switched onto the PCM bus through switches U10 and U11. The switches  are  automatically  configured  by  the  evaluation kit software, depending on which path has been enabled (USB or S/PDIF).

Note: All  PCM  digital  audio  is  routed  through  the  I 2 S header before routing to the MAX98090's DAI. This is true for the USB AUDIO input as well as for the S/PDIF I/O. See Figure 13.

## Digital Audio Interface Header (JU15)

Jumpers  JU15  provides  access  to  the  MAX98090  digital  audio  interface  (DAI).  See  Table  4  for  individual  pin descriptions. Follow the below steps to configure JU15:

## Direct connection of PCM digital audio:

- Remove the shunts from JU15 (place shunts on Position 1 for safekeeping).
- Connect the PCM signals/grounds to the corresponding Position 2 (Center) and Position 3 (Right) pins of JU15.

## USB audio input or S/PDIF I/O:

- Install the four shunts between Position 2 and Position 3 of JU15
- For audio input, connect an audio output device to the USB AUDIO or SPDIFIN connector.
- For audio output, connect an audio input device to the SPDIFOUT connector.

## MAX98090 Evaluation Kit (TQFN)

## Table 2. Jumper Configuration

| HEADER   | SHUNTPOSITION   | DESCRIPTION                                                                                                                                      |
|----------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| JU1      | 1-2*            | DVDD connected to +1.2V                                                                                                                          |
| JU1      | 2-3             | DVDD connected to +1.8V                                                                                                                          |
| JU1      | Open            | DVDD externally supplied                                                                                                                         |
| JU2      | 1-2*            | DVDDIO connected to +3.3V                                                                                                                        |
| JU2      | 2-3             | DVDDIO connected to +1.8V                                                                                                                        |
| JU2      | Open            | DVDDIO externally supplied                                                                                                                       |
| JU3      | Installed*      | AVDD connected to +1.8V                                                                                                                          |
| JU3      | Open            | AVDD externally supplied                                                                                                                         |
| JU4      | Installed*      | HPVDD connected to +1.8V                                                                                                                         |
| JU4      | Open            | HPVDD externally supplied                                                                                                                        |
| JU5      | Installed       | Connects JACKSNS to headphone jack, HP, for jack detection; ensure that a shunt is installed on JU27/JU6 or JU28/JU22 for proper jack detection. |
| JU5      | Open*           | Disconnects JACKSNS from the headphone jack, HP                                                                                                  |
| JU6      | Installed       | Connects MICBIAS to the IN1 input through a 2.2kΩ resistor (for microphone input)                                                                |
| JU6      | Open*           | Disconnects MICBIAS from the IN1 input                                                                                                           |
| JU7      | Installed       | Connects MICBIAS to the IN3 input through a 2.2kΩ resistor (for microphone input)                                                                |
| JU7      | Open*           | Disconnects MICBIAS from the IN3 input                                                                                                           |
| JU8      | Installed       | Connects IN2 directly to ground for single ended operation                                                                                       |
| JU8      | Open*           | Allows for differential operation                                                                                                                |
| JU9      | Installed       | Connects IN2 to ground through a 2.2kΩ resistor (used when IN1 is mic biased)                                                                    |
| JU9      | Open*           | Disconnects IN2 from ground                                                                                                                      |
| JU10     | Installed       | Connects IN4 directly to ground for single ended operation                                                                                       |
| JU10     | Open*           | Allows for differential operation                                                                                                                |
| JU11     | Installed       | Connects IN4 to ground through a 2.2kΩ (used when IN3 is mic biased)                                                                             |
| JU11     | Open*           | Disconnects IN4 from ground                                                                                                                      |
| JU12     | Installed       | Connects the Digital Microphone data output to MAX98090                                                                                          |
|          | Open*           | Disconnects the Digital Microphone data output from MAX98090                                                                                     |
|          | Installed       | Connects the Digital Microphone clock to MAX98090                                                                                                |
| JU13     | Open*           | Disconnects the Digital Microphone clock to MAX98090                                                                                             |
| JU14     | -               | See Table 3                                                                                                                                      |
| JU15     | -               | See Table 4                                                                                                                                      |
| JU16     | 2-3, 5-6*       | Connects the on-board I 2 C master to MAX98090                                                                                                   |
|          | Open            | Allows external control of MAX98090                                                                                                              |
|          | Installed       | Connects an 1800pF bypass capacitor to IN1                                                                                                       |
| JU17     | Open*           | Removes the 1800pF bypass capacitor from IN1                                                                                                     |
| JU17     | Installed       | Connects an 1800pF bypass capacitor to IN2                                                                                                       |
| JU18     | Open*           | Removes the 1800pF bypass capacitor from IN2                                                                                                     |

│

Evaluates: MAX98090 (TQFN)

## MAX98090 Evaluation Kit (TQFN)

## Table 2. Jumper Configuration (continued)

| HEADER   | SHUNTPOSITION   | DESCRIPTION                                                                         |
|----------|-----------------|-------------------------------------------------------------------------------------|
| JU19     | Installed       | Connects an 1800pF bypass capacitor to IN3                                          |
| JU19     | Open*           | Removes the 1800pF bypass capacitor from IN3                                        |
| JU20     | Installed       | Connects an 1800pF bypass capacitor to IN4                                          |
| JU20     | Open*           | Removes the 1800pF bypass capacitor from IN4                                        |
| JU21     | Installed       | Enables SPKVDD voltage detection                                                    |
| JU21     | Open*           | Disables SPKVDD voltage detection                                                   |
| JU22     | Installed       | Connects IN1 to the headphone jack, HP (for microphone input)                       |
| JU22     | Open*           | Disconnects IN1 from the headphone jack, HP                                         |
| JU23     | Installed       | RemovesAC coupling capacitor, C66, from LOUTL line output                           |
| JU23     | Open*           | EnablesAC coupling capacitor, C66, to LOUTL line output                             |
| JU24     | Installed       | DisablesAC coupling capacitor, C67, from LOUTR line output                          |
| JU24     | Open*           | EnablesAC coupling capacitor, C67, to LOUTR line output                             |
| JU100    | Installed*      | Connects the MAX98090 interrupt output ( IRQ ) to the on-board microcontroller      |
| JU100    | Open            | Disconnects the MAX98090 interrupt output ( IRQ ) from the on-board microcontroller |

## Table 3. Master Clock Source Configuration (JU14)

| SHUNT POSITION   | CLOCK SOURCE                   |
|------------------|--------------------------------|
| 1-2              | Disabled                       |
| 1-3              | 13MHz oscillator               |
| 1-4*             | Software-selected clock source |

## Table 4. DAI Header (JU15)

Figure 13. I 2 S Routing

| JU15              | JU15                | JU15               |
|-------------------|---------------------|--------------------|
| POSITION 1 (LEFT) | POSITION 2 (CENTER) | POSITION 3 (RIGHT) |
| GND               | CODEC_BCLK          | I2S_BCLK           |
| GND               | CODEC_LRCLK         | I2S_LRCLK          |
| GND               | CODEC_SDIN          | I2S_DAC            |
| GND               | CODEC_SDOUT         | I2S_ADC            |

<!-- image -->

Evaluates: MAX98090 (TQFN)

│

## MAX98090 Evaluation Kit (TQFN)

## S/PDIF Transceiver

The S/PDIF transceiver (U201) serves as a format converter between I 2 S and S/PDIF. Use this device to send and  receive  digital  audio  over  the  optical  connectors (SPDIFIN, SPDIFOUT).

When receiving  S/PDIF  data,  the  transceiver  outputs  a recovered master clock that is exactly 256 x f S , where f S is the sample rate. This clock signal can be used to clock the MAX98090.

When transmitting S/PDIF data, the transceiver requires a master-clock input and if data is also being received, it uses the data to generate its own master clock.

If  S/PDIF  data  is  not  being  received,  the  transceiver generates  a  master  clock  based  on  the  LRCLK  signal being output by the MAX98090. For proper transmit-only operation, the S/PDIF transceiver must be configured in master mode.

The  S/PDIF  transceiver  is  controlled  through  the  SPI interface of the on-board MAXQ2000 microcontroller. See the Control Interface section of this data sheet.

## USB Audio

The Audio  DAC  with  USB  interface  (U200)  accepts  an audio stream from a PC, connected to the USB AUDIO port (J2), and converts it to I 2 S data. The USB audio DAC generates a master-clock signal that can be used to clock the MAX98090. The clock signal is 256 x f S .

The USB audio DAC supports standard class drivers that are included with most operating systems. As a result, no

## Table 5. Analog Input Headers

| INPUT    | SINGLE-ENDED/ DIFFERENTIAL HEADER   | DIFFERENTIAL MICROPHONE HEADER   | MICBIAS HEADER   |
|----------|-------------------------------------|----------------------------------|------------------|
| IN1/IN2* | JU8                                 | JU9                              | JU6              |
| IN3/IN4  | JU10                                | JU11                             | JU7              |

## Table 6. Analog Input Header Configuration

| INPUT   | SINGLE-ENDED   | DIFFERENTIAL          | DIFFERENTIAL MICROPHONE(WITHMICBIAS)   |
|---------|----------------|-----------------------|----------------------------------------|
| IN1/IN2 | JU8 = On       | JU8 = Off JU9 = Off   | JU8 = Off JU9 = On                     |
| IN3/IN4 | JU10 = On      | JU10 = Off JU11 = Off | JU10 = Off JU11 = On                   |

│

## Evaluates: MAX98090 (TQFN)

drivers are required for this device and it will appear as a sound card in the PC. This allows for audio playback from the PC through the MAX98090 audio CODEC.

## Analog Inputs

The MAX98090 analog input pairs (IN1/IN2, IN3/IN4) can be  configured  for  microphone  input,  single-ended  input, or  differential  input.  These  input  connections  are  made through the provided RCA connectors or PCB pads (IN1IN4). In addition, the IN1/IN2 inputs can be connected to the 3.5mm audio jack (HP) for single-ended microphone input from a headset. Table 5 lists the configuration headers that are associated with each input pair. See the specific input sections for configuration details.

## Single-Ended	and	Differential	Inputs

The  two  analog  input  pairs  are  configured  for  singleended or differential line input by configuring the associated input headers (as listed in Table 5). For single-ended inputs,  the  input  header  configuration  is  independent  of the input type. For differential inputs the header configuration is different for microphone inputs that are powered by the MAX98090 MICBIAS output. See Table 6.

## Analog Microphone

When using the analog input pairs for microphone input the MAX98090 microphone bias (MICBIAS) output can be used to power the connected microphone. The MICBIAS output is connected to the IN1 or IN3 inputs through the input's associated MICBIAS header. See Table 7.

## MAX98090 Evaluation Kit (TQFN)

## Digital Microphone

The EV kit includes an on-board digital microphone (U3) for  evaluation  of  the  MAX98090's  digital  microphone interface. The digital microphone interface is enabled and configured through the MAX98090 software. An additional digital  microphone footprint (U2) is provided to exercise the device's capability of interfacing with up to two digital microphones.

Install shunts on jumpers JU12 and JU13 to connect the digital microphone(s) to the MAX98090 device. Refer to the MAX98090 IC data sheet for additional details.

## Jack Detection

The  MAX98090's  flexible,  software  configurable  jack detection  interface  is  used  to  detect  the  presence  or absence  of  a  headphone/headset  connected  to  the  HP jack. To provide jack detection on the HP jack, install a shunt on header JU5.

Figure 14. Headphone Jack

<!-- image -->

## Table 7. MICBIAS Connection

| MICROPHONE CONNECTION   | MICBIAS CONNECTED   | MICBIAS DISCONNECTED   |
|-------------------------|---------------------|------------------------|
| IN1                     | JU6 = On            | JU6 = Off              |
| IN3                     | JU7 = On            | JU7 = Off              |

## Table 8. Analog Outputs

| OUTPUT            | CONNECTIONS                                                              |
|-------------------|--------------------------------------------------------------------------|
| Headphone         | 3.5mm audio jack (HP)                                                    |
| Speaker           | Unfiltered (SPK_P/SPK_N) and filtered (FSPK_P/FSPK_N) connection options |
| Receiver/Line-Out | RCAconnectors (LOUTL and LOUTR)                                          |

│

## Outputs

The  EV  kit  provides  connections  for  each  of  the  three analog outputs. Table 8 lists the outputs and their available connections.

## Headphone

The  MAX98090  stereo  headphone  output  (HPR/HPL) is  routed  to  the  on-board  3.5mm  audio  jack  (HP).  The HP jack  also  allows  for  a  headset  connection,  with  the microphone input (MIC) connected to IN1. See the Analog Inputs section for input configuration options.

## Stereo	Class	D	Speaker	Amplifier

The  MAX98090  integrates  a  filterless  Class  D  stereo amplifier. In systems with short speaker traces, the stereo speaker outputs (SPKLP/SPKLN and SPKRP/SPKRN test points)  can  be  connected  directly  to  the  speaker  loads. Although this amplifier is designed to operate completely filterless, the EV kit does provide stuffing options for two types of output filters.

When long speaker cables are used, a ferrite bead plus capacitor filter can be installed to prevent excessive EMI radiation. Although it is best to choose filter components based on EMI test results,  the  combination  of  a  680pF capacitor (C48-C51) with the Murata BLM18SG331TN1 ferrite  bead  (FB1-FB4)  generally  works  well.  With  this configuration, connect the speaker loads to the SPKLP/ SPKLN and SPKRP/SPKRN test points.

To allow analysis of the audio output with an oscilloscope, or  an  analyzer  not  designed  to  accept  Class  D  switching  waveforms,  populate  L1-L4  with  the  included  22µH inductors and make connections, to external equipment or speakers,  at  FSPKLP/FSPKLN  and  FSPKRP/FSPKRN.

## Evaluates: MAX98090 (TQFN)

## MAX98090 Evaluation Kit (TQFN)

The LC filter is designed to work best with an 8Ω load. Do not connect the load to the unfiltered SPKLP/SPKLN and SPKRP/SPKRN outputs when L1-L4 are installed.

## Receiver/Line Output

The  MAX98090  receiver/line  output  can  be  configured either  as  a  differential  receiver/earpiece  output  or  as  a stereo-single ended line output. The receiver/line outputs are routed, through AC-coupling capacitors, to the LOUTL and LOUTR RCA connectors. The AC-coupling capacitors can be shorted (effectively removed from the signal path) by installing a shunt on JU23 and JU24.

## Control Interface

The  MAXQ2000  (U100)  microcontroller  circuitry  is  the bridge  between  the  on-board  interface-enabled  devices and  the  EV  kit  software,  running  on  a  PC  connected to  the  USB  CONTROL  port  (J1).  The  EV  kit  uses  the MAXQ2000's I 2 C, SPI, and GPIO interfaces.

## I 2 C Interface

The MAXQ2000's I 2 C interface is routed to the MAX98090 device through jumper JU16, by installing shunts across pins  2-3  of  each  row  (Table  9).  When  using  an  external I 2 C master, remove both shunts from JU16 and connect the external SDA and SCL signals to the position-2 pins of JU16. Ground connections can be made to the position-1 pins of JU16. Install pullup resistors at R15 and R16 if the external master does not include pullup resistors.

## SPI Interface

The MAXQ2000 SPI interface is used to control the onboard S/PDIF transceiver (U201). In the MAX98090 software go to View | Show S/PDIF Transceiver Registers to activate the S/PDIF Transceiver tab.

## Evaluates: MAX98090 (TQFN)

## GPIO Interface

Six  of  the  MAXQ2000  general-purpose  inputs/outputs (GPIOs)  are  used  for  either  controlling  or  monitoring  a specific  on-board  device/signal.  Four  of  the  GPIOs  are used  as  general-purpose  outputs  and  are  automatically set/cleared based on configuration settings made through the MAX98090 EV kit software.

The other  two  are  used  as  general-purpose  inputs  and are  used  to  monitor  a  specific  signal.  The  first  generalpurpose  input, CODEC\_IRQ ,  is  tied  to  the  MAX98090 interrupt  ( IRQ )  output.  This IRQ is  monitored  by  the microcontroller  and  its  state  is  reported  in  the Status group box on the left side of the software main window. This  general-purpose  input  can  be  disconnected  from the MAX98090's IRQ output by removing the shunt from jumper JU100.

The second general purpose input is used to detect the presence  of  the  SPKVDD  voltage.  The  software  monitors  this  voltage  input  and  reports  whether  it  has  been applied or not. As noted in the Power Supplies section, the SPKVDD voltage is required for proper device operation.

## Table 9. I 2 C Header (JU16)

| JU16              | JU16                | JU16               |
|-------------------|---------------------|--------------------|
| POSITION 1 (LEFT) | POSITION 2 (CENTER) | POSITION 3 (RIGHT) |
| GND               | CODEC_SCL           | SCL                |
| GND               | CODEC_SDA           | SDA                |

## Ordering Information

| PART               | TYPE   |
|--------------------|--------|
| MAX98090EVKIT#TQFN | EV Kit |

#Denotes RoHS compliant.

## MAX98090 (TQFN) Bill of Materials

| Item   | Component Description                                          | Qty   | Reference Designator                                                                                                                                       | Manufacturer    | Manufacturer Part Number   | Assembly Comments   |
|--------|----------------------------------------------------------------|-------|------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|----------------------------|---------------------|
| 1      | 10uF ±20%, 6.3V X5R ceramic capacitor (0805)                   | 4     | C1, C3, C104, C202                                                                                                                                         | TDK             | C2012X5R0J106M             |                     |
| 2      | 1uF ±10%, 6.3V X5R ceramic capacitor (0402)                    | 17    | C2, C12, C13, C18, C24, C26, C27, C29-C35, C200, C201, C204                                                                                                | TDK             | C1005X5R0J105K             |                     |
| 3      | 1800pF ±10%, 50V X7R ceramic capacitor (0402)                  | 4     | C4-C7                                                                                                                                                      | Murata          | GRM155R71H182K             |                     |
| 4      | 10pF ±5%, 50V C0G ceramic capacitor (0402)                     | 2     | C8, C9                                                                                                                                                     | Murata          | GRM1555C1H100J             |                     |
| 5      | 0.1uF ±10%, 10V X7R ceramic capacitor (0402)                   | 11    | C10, C40, C41, C60-C64, C203, C215, C216                                                                                                                   | Kemet           | C0402C104K8RAC             |                     |
| 6      | 0.01uF ±10%, 50V X7R ceramic capacitor (0603)                  | 4     | C20, C43, C211, C212                                                                                                                                       | Murata          | GRM188R71H103K             |                     |
| 7      | 2.2uF ±10%, 6.3V X5R ceramic capacitor (0603)                  | 2     | C21, C22                                                                                                                                                   | Murata          | GRM188R60J225K             |                     |
| 8      | 1uF ±20%, 6.3V X5R ceramic capacitor (0603)                    | 10    | C23, C25, C36, C37, C66, C67, C115-C118                                                                                                                    | Taiyo Yuden     | JMK107B7105MA              |                     |
| 9      | 2.2uF ±20%, 6.3V X5R ceramic capacitor (0402)                  | 1     | C28                                                                                                                                                        | Taiyo Yuden     | JMK105BJ225MV              |                     |
| 10     | 0.22uF ±10%, 6.3V XR5 ceramic capacitor (0402)                 | 10    | C38, C39, C52-C59                                                                                                                                          | TDK             | C1005X5R0J224K             |                     |
| 11     | OPEN, ceramic capacitor (0402)                                 | 9     | C42, C44-C51                                                                                                                                               |                 |                            |                     |
| 12     | 10uF ±20%, 6.3V X5R ceramic capacitor (0603)                   | 1     | C65                                                                                                                                                        | Murata          | GRM188R60J106M             |                     |
| 13     | 0.1uF ±10%, 50V X5R ceramic capacitor (0603)                   | 11    | C100, C101, C105, C107-C110, C113, C114, C209, C210                                                                                                        | TDK             | C1608X5R1H104K             |                     |
| 14     | 8pF ±0.5pF, 50V C0H ceramic capacitor (0402)                   | 4     | C102, C103, C207, C208                                                                                                                                     | Taiyo Yuden     | UMK105CH080DV              |                     |
| 15     | 33000pF ±10%, 25V X7R ceramic capacitor (0603)                 | 1     | C106                                                                                                                                                       | Murata          | GRM188R71E333K             |                     |
| 16     | 18pF ±5%, 50V C0G ceramic capacitor (0603)                     | 2     | C111, C112                                                                                                                                                 | TDK             | C1608C0G1H180J             |                     |
| 17     | 47uF ±20%, 6.3V X5R ceramic capacitor (1206)                   | 2     | C205, C206                                                                                                                                                 | Murata          | GRM31CR60J476M             |                     |
| 18     | 0.47uF ±10%, 6.3V X5R ceramic capacitor (0603)                 | 1     | C213                                                                                                                                                       | Murata          | GRM188R60J474K             |                     |
| 19     | 47000pF ±10%, 25V X7R ceramic capacitor (0603)                 | 1     | C214                                                                                                                                                       | Murata          | GRM188R71E473K             |                     |
| 20     | LED, yellow (0603)                                             | 1     | D100                                                                                                                                                       | Lite-On         | LTST-C190YKT               |                     |
| 21     | LED, red (0603)                                                | 1     | D101                                                                                                                                                       | Lite-On         | LTST-C190CKT               |                     |
| 22     | Ferrite bead (0603)                                            | 2     | FB100, FB200                                                                                                                                               | Murata          | BLM18PG221SN1              |                     |
| 23     | 0 Ohms ±5% resistor (0603)                                     | 4     | FB1-FB4                                                                                                                                                    |                 |                            |                     |
| 24     | 0 Ohms ±5% resistor (0402)                                     | 2     |                                                                                                                                                            |                 |                            |                     |
| 25     | Ferrite bead (0402)                                            | 4     | FB5, FB6                                                                                                                                                   | Murata          | BLM15HD182SN1              |                     |
| 26     | 3.5mm stereo headphone jack, 4 positions                       | 1     | FB7-FB10 HP                                                                                                                                                | CUI Inc.        | SJ-43514-SMT               |                     |
| 27     | Buss Wire, 20G plated solid copper 0.25 inch U-shape wire loop | 22    | IN_1, IN_2, IN_3, IN_4, JACKSENSE, RCVP/LOUTL, RCVN/LOUTR, GND, FSPKLP, FSPKLN, FSPKRP, FSPKRN, GND, DVDD, GND, DVDDIO, AVDD, GND, GND, HPVDD, SPKVDD, GND | Weico Wire      | 9020 Buss                  |                     |
| 28     | RCA jack, PC mount, non-switched (red)                         | 6     | IN1, IN2, IN3, IN4, LOUTL, LOUTR                                                                                                                           | Kobiconn        | 161-0096-E                 |                     |
| 29     | Test point 'Miniature' 40mil drill size (red)                  | 14    | INA+, INB+, BCLK, LRCLK, SDIN, SDOUT, /IRQ\, MCLK, OUTA, OUTB, IN1_DIR, IN2_DIR, IN3_DIR, IN4_DIR                                                          | Keystone        | 5000                       |                     |
| 30     | USB Mini B receptacle                                          | 2     | J1, J2                                                                                                                                                     | Hirose Electric | UX60A-MB-5ST               |                     |
| 31     | 3-pin header, 0.1in centers                                    | 2     | JU1, JU2                                                                                                                                                   | Sullins         | PEC36SAAN                  | cut to fit          |
| 32     | 2-pin header, 0.1in centers                                    | 20    | JU3-JU13, JU17-JU24, JU100                                                                                                                                 | Sullins         | PEC36SAAN                  | cut to fit          |
| 33     | 4-pin header, 0.1in centers                                    | 1     | JU14                                                                                                                                                       | Sullins         | PEC36SAAN                  | cut to fit          |
| 34     | 12-pin header (3x4), 0.1in centers                             | 1     | JU15                                                                                                                                                       | Sullins         | PEC36DAAN                  | cut to fit          |
| 35     | 6-pin (2x3) header, 0.1in centers                              | 1     | JU16                                                                                                                                                       | Sullins         | PEC36DAAN                  | cut to fit          |
| 36     | Open, inductors (6.2mm x 6.3mm)                                | 4     | L1-L4                                                                                                                                                      | Toko            | #A916CY-220M               |                     |
| 37     | Ferrite bead, 47uH 220mA (1812)                                | 1     | L200                                                                                                                                                       | Murata          | LQH43MN470J03L             |                     |
| 38     | MOSFET, -20V, -2.4A, P-channel (SuperSOT-3)                    | 1     | P100                                                                                                                                                       | Fairchild       | FDN304P                    | Top mark 304        |
| 38     | MOSFET, -20V, -2.4A, P-channel (SuperSOT-3)                    | 1     | P100                                                                                                                                                       | Fairchild       | FDN304PZ                   | Top mark 04Z        |
| 39     | MOSFET, N-channel (SOT-23)                                     | 1     | Q1                                                                                                                                                         | Central         | 2N7002                     |                     |
| 40     | 0 Ohms ±5% Resistor (0402)                                     | 13    | R1, R2, R9-R13, R38-R41, R111, R207                                                                                                                        | Semiconductor   |                            |                     |
| 41     | 1M Ohms ±5% Resistor (0603)                                    |       | R3, R203                                                                                                                                                   |                 |                            |                     |
|        |                                                                | 2     |                                                                                                                                                            |                 |                            |                     |
| 42     | 10K Ohms ±5% Resistor (0603) (0402)                            | 2 3   | R4, R107 R5, R7, R8                                                                                                                                        |                 |                            |                     |
| 43 44  | 10K Ohms ±5% Resistor OPEN, resistor (0402)                    | 4     | R6, R15, R16, R19 R14, R17, R18,                                                                                                                           |                 |                            |                     |
| 45     | 2.2K Ohms ±5% Resistor (0402)                                  | 4     | R37 R21-R24, R200, R201                                                                                                                                    |                 |                            |                     |
| 46     | 22 Ohms ±5% Resistor (0402)                                    | 6     |                                                                                                                                                            |                 |                            |                     |

Evaluates: MAX98090 (TQFN)

## MAX98090 (TQFN) Bill of Materials (continued)

| Item              | Component Description                              |   Qty | Reference Designator               | Manufacturer          | Manufacturer Part Number   | Assembly Comments   |
|-------------------|----------------------------------------------------|-------|------------------------------------|-----------------------|----------------------------|---------------------|
| 47                | 100 Ohms ±5% Resistor (0603)                       |     4 | R25-R28                            |                       |                            |                     |
| 48                | 1.5K Ohms ±5% Resistor (0603)                      |     5 | R100, R101, R104, R202, R204       |                       |                            |                     |
| 49                | 27 Ohms ±5% Resistor (0603)                        |     2 | R102, R103                         |                       |                            |                     |
| 50                | 470 Ohms ±5% Resistor (0603)                       |     1 | R105                               |                       |                            |                     |
| 51                | 2.2K Ohms ±5% Resistor (0603)                      |     1 | R106                               |                       |                            |                     |
| 52                | 220 Ohms ±5% Resistor (0603)                       |     2 | R108, R110                         |                       |                            |                     |
| 53                | 1K Ohms ±5% Resistor (0603)                        |     1 | R109                               |                       |                            |                     |
| 54                | 47K Ohms ±5% Resistor (0603)                       |     1 | R205                               |                       |                            |                     |
| 55                | 402 Ohms ±1% Resistor (0603)                       |     1 | R206                               |                       |                            |                     |
| 56                | Digital Audio optical transmitter                  |     1 | SPDIFOUT                           | Everlight Electronics | PLT133/T9                  |                     |
| 57                | Digital audio optical receiver                     |     1 | SPDFIIN                            | Everlight Electronics | PLR135/T9                  |                     |
| 58                | Test point 'Multipurpose' 63mil drill size (red)   |     4 | SPKLP, SPKRP, HPR, HPL             | Keystone              | 5010                       |                     |
| 59                | Test point 'Multipurpose' 63mil drill size (black) |     6 | SPKLN, SPKRN, GND, GND, GND, HPGND | Keystone              | 5011                       |                     |
| 60                | Stereo Audio Codec (40 TQFN)                       |     1 | U1                                 | MAXIM                 | MAX98090AETL+              |                     |
| 61                | OPEN, digitial microphone (6 LGA)                  |     1 | U2                                 | Knowles Acoustics     | SPM0405HD4H                |                     |
| 62                | Digital microphone (6 LGA)                         |     1 | U3                                 | Knowles Acoustics     | SPM0423HD4H-WB             | DO NOT WASH         |
| 62                | Digital microphone (6 LGA)                         |     1 | U3                                 | Knowles Acoustics     | SPM0423HE4H-WB             | DO NOT WASH         |
| 63                | OPEN, Dual Rail-to-Rail Op Amps (8 uMAX)           |     1 | U4                                 | MAXIM                 | MAX4252EUA+                |                     |
| 64                | 1.8V Low noise linear regulator (5 SOT23)          |     1 | U5                                 | MAXIM                 | MAX8887EZK18+              | Topmark: ADPX       |
| 65                | 300mA LDO regulator (SOT23-6)                      |     1 | U6                                 | MAXIM                 | MAX1963AEZT120+            |                     |
| 66                | 3.3V Low noise linear regulator (5 SC70)           |     2 | U7, U104                           | MAXIM                 | MAX8511EXK33+              | Topmark: AEI        |
| 67                | Dual SPDT switch (10 uDFN)                         |     4 | U8-U11                             | MAXIM                 | MAX4906ELB+                |                     |
| 68                | Low Power Microcontroller (56 TQFN)                |     1 | U100                               | MAXIM                 | MAXQ2000-RBX+              |                     |
| 69                | USB to serial UART interface (32 pin QFN)          |     1 | U101                               | FTDI                  | FT232BQ                    |                     |
| 70                | 3-wire EEPROM, Type 93C46 (SOIC-8)                 |     1 | U102                               | Atmel                 | AT93C46EN-SH-B             |                     |
| 71                | 2.5V Low noise linear regulator (5 SC70)           |     1 | U103                               | MAXIM                 | MAX8511EXK25+              | Topmark: ADV        |
| 72                | Stereo audio DAC with USB interface (32 TQFP)      |     1 | U200                               | TI                    | PCM2707PJT                 |                     |
| 73                | Digital audio transceiver (28 SO)                  |     1 | U201                               | Cirrus Logic          | CS8427-CSZ                 |                     |
| 74                | 13Mhz Clock oscillator (2.5mm x 2.0mm)             |     1 | Y1                                 | ECS Inc               | ECS-2033-130-BN            |                     |
| 75                | 6MHz crystal                                       |     1 | Y100                               | Hong Kong X'tals      | SSL60000N1HK188F0-0        |                     |
| 76                | Crystal, 16MHz (3.2mm x 2.5mm)                     |     1 | Y101                               | Kyocera               | CX3225SB16000D0FLJZZ       |                     |
| 77                | Crystal, 12MHz (3.2mm x 2.5mm)                     |     1 | Y200                               | Kyocera               | CX3225SB12000D0FLJZZ       |                     |
| 78                | Shunt                                              |    29 |                                    | Kycon                 | SX1100-B                   |                     |
| 79                | PCB                                                |     1 | MAX98090 TQFN Evaluation Kit       |                       |                            |                     |
| 1                 | Cable, USB high-speed A-to-mini B                  |     2 |                                    | Assmann Electric      | AK672M/2-2-R               |                     |
| 2 Inductor, 22uH, | 1A (6.2mm x 6.3mm)                                 |     4 | L1-L4                              | Toko                  | #A916CY-220M               |                     |

Evaluates: MAX98090 (TQFN)

## MAX98090 Evaluation Kit (TQFN)

## MAX98090 Schematics

Evaluates: MAX98090 (TQFN)

<!-- image -->

│

## MAX98090 Evaluation Kit (TQFN)

## MAX98090 Schematics (continued)

<!-- image -->

│

Evaluates: MAX98090 (TQFN)

## MAX98090 Schematics (continued)

<!-- image -->

Evaluates: MAX98090 (TQFN)

## MAX98090 Evaluation Kit (TQFN)

## MAX98090 Schematics (continued)

Evaluates: MAX98090 (TQFN)

<!-- image -->

│

## MAX98090 Evaluation Kit (TQFN)

## MAX98090 Schematics (continued)

<!-- image -->

│

Evaluates: MAX98090 (TQFN)

## MAX98090 Evaluation Kit (TQFN)

## MAX98090 Schematics (continued)

<!-- image -->

Evaluates: MAX98090 (TQFN)

## MAX98090 Evaluation Kit (TQFN)

## MAX98090 Schematics (continued)

<!-- image -->

│

Evaluates: MAX98090 (TQFN)

## MAX98090 Evaluation Kit (TQFN)

## MAX98090 PCB Layout

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

│

## MAX98090 Evaluation Kit (TQFN)

## MAX98090 PCB Layout (continued)

<!-- image -->

<!-- image -->

## Evaluates: MAX98090 (TQFN)

<!-- image -->

│

## MAX98090 Evaluation Kit (TQFN)

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                               | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------|-----------------|
|                 0 | 2/15            | Initial release                                           | -               |
|                 1 | 7/16            | Corrected jumper in Master Clock (MCLK) Selection section | 15              |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX98090 (TQFN)