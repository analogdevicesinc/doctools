<!-- lastmod 2023-11-16 -->
<!-- image -->

Evaluates: MAX98397

## General Description

The  MAX98397  evaluation  system  (EV  system)  is  a fully  assembled  and  tested  system  that  evaluates  the MAX98397 Class-D audio amplifier. The EV system con -sists of the MAX98397 Development board (DEV board), Audio Interface board III (AUDINT3), and a USB cable.

It is recommended that the DEV board be evaluated with the AUDINT3 board, as an EV system.

The MAX98397 supports standard I 2 S, left-justified, and TDM digital audio interfaces.

The AUDINT3  board  provides  a  USB-to-PCM  interface in  addition  to  a  1.8V  VDD  supply  needed  to  evaluate the DEV board. The MAX98397 DEV board requires two additional  supply  inputs,  3V  to  28V  (PVDD)  and  3V  to 5.5V (VBAT) when evaluating using the AUDINT3 board. Figure 1 details the DEV board.

Click here to ask an associate for production status of specific part numbers.

## MAX98397 Evaluation System

## Features

- 3V to 28V Dual Supply Operation
- USB Audio Streaming (EV System)
- I 2 S, Left-Justified, or TDM Input
- Fully Assembled and Tested

## EV System Contents

- MAX98397 Development Board
- Audio Interface Board III
- Micro-USB Cable

Ordering Information appears at end of data sheet.

Figure 1. MAX98397 EV Kit Photo

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation. Windows Media is a registered trademark and registered service mark of Microsoft Corporation. iTunes is a registered trademark of Apple Inc.

©

319-101030; Rev 1; 11/25

owners.

One  Analog  Way,  Wilmington,  MA  01887  U.S.A.    |      Tel:  781.329.470      |      © 2025  Analog  Devices,  Inc.  All  rights  reserved. 2025 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective

## MAX98397 Evaluation System

## Quick Start

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  evaluation  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Required Equipment

- MAX98397 EV System
- MAX98397 Development Board (DEV Board)
- Audio Interface Board III (AUDINT3 Board)
- Micro-USB Cable
- DC Power Supplies (2.8V to 28V, 9A and 3V to 5.5V, 1A)
- 4Ω to 8Ω Speaker
- PC with Windows 7 or Windows 10 with available USB port
- USB Audio Source (e.g. Windows Media Player ® or iTunes ® )

## Required Software

MAX98397 Evaluation Software (Installer: MAX98397EVSwSetupVxx.exe)

## Reference Material

- MAX98397 IC data sheet

## Procedure

The EV kit is fully assembled and tested. Follow the steps to install the EV kit software, make the required hardware connections,  and  start  the  operation  of  the  kit.  The  EV kit software can be run without hardware attached. Note that after communication is established, the IC must still be  configured  correctly  for  the  desired  operation  mode. Make sure the PC is connected to the internet throughout the process so that the USB driver can be automatically installed.

## Table 1. MAX98397 Evaluation Software Folder

| ITEM                     | DESCRIPTION                               |
|--------------------------|-------------------------------------------|
| MAX98397.exe             | MAX98397 Evaluation software              |
| Uninstaller.exe          | Software uninstaller                      |
| USBDriver/FTDI           | USB driver installer and help file        |
| USBDriver/Device Manager | Shortcut to the computer's device manager |

## Software Install:

- 1) Visit https://www.analog.com/en/products/ max98397.html#product-tools to download the latest version of the MAX98397 evaluation software, MAX98397EVSwSetupVxx.zip. Save the software to a temporary folder and unpack the zip file.
- 2) Install the EV kit software on the computer by run -ning the MAX98397EvSwSetupX.X.X.exe program inside the temporary folder. This copies the program files and creates an icon in the Windows Start menu. The software requires the .NET Framework 4.5 or later. If connected to the internet, Windows automati -cally updates the .NET Framework as needed.
- 3) The EV kit software launches automatically after installation, and it can be launched by clicking on its icon in the Windows Start menu.

## AUDINT3 Board Setup:

- 1) Connect the MAX98397 DEV board (3-row J1 con -nector) to the AUDINT3 board (3-row J1 connector). To avoid damage, it is important to make sure the connectors of the two boards are properly aligned. The bottom row of both J1 connectors should be lined up so the standoffs on the corners of the AUDINT3 and DEV board are level.
- 2) With the audio source disabled, connect the MicroUSB cable from your computer to the USB port (J2) on the AUDINT3 board. The AUDINT3 board provides the BCLK and LRCLK signals as well as the power for DVDD and AVDD, sourcing 1.8V to the DEV board through the J1 connector.
- 3) The multi-color LED D1 initially flashes blue, and then changes to slow flashing magenta when the computer successfully registers the AUDINT3 as a USB audio playback device.

## DEV Board Setup:

- 1) Set the ENABLE jumper, J5, to DVDD.
- 2) Load the default config file through the MAX98397 evaluation software ( File→Load Register Settings→Pre-Installed Configuration Files ).
- 3) Connect the speaker. Connect the speaker leads across the FOUTP and FOUTN binding posts.
- 4) With the DC supplies not powered, connect the 3V to 28V power supply across the PVDD and GND bind -ing posts and the 3V to 5.5V power supply across the VBAT and GND binding posts.

Evaluates: MAX98397

## MAX98397 Evaluation System

## USB Audio Playback Test:

- 1) Enable the PVDD supply voltage (24V is typical) and VBAT supply voltage (5V is typical).
- 2) Open the Windows Sound dialog and select the Playback tab. A Speakers item as seen in Figure 2 should be listed as an available playback device.
- 3) Verify that the Speakers item is set as the default device. Once this is done, the AUDINT3 board out -puts PCM data to the DIN pin on the DEV board.
- 4) Adjust the audio source volume to a low level.
- 5) Enable the audio source and verify that audio is heard through the connected speaker. Adjust the audio source volume as needed.
- 6) Quick Start for USB Audio Playback is now complete.
- 7) For details on how to connect in a standalone mode to audio test equipment, such as Audio Precision, see the Detailed Description of Hardware section.

Figure 2. Playback Device

<!-- image -->

Figure 3. MAX98397 Evaluation Software-Main Window

<!-- image -->

Evaluates: MAX98397

## Detailed Description of Software

The  MAX98397  evaluation  software  is  designed  to  be used only with the MAX98397 EV system. The software provides  an  intuitive  graphical  user  interface  (GUI)  for programming the MAX98397 device and includes a hand -ful of features that are intended to aid evaluation.

The MAX98397  evaluation software main window ( Figure  3)  is  composed  of  four  main  sections:  a menu bar ,  a communication  toolbar , tabbed  pages ,  and  a status  bar .  The menu bar provides  additional  features to aid evaluation, the toolbar provides basic functionality for  communicating  with  the  device,  and  the status  bar provides  information  about  hardware  connectivity  and communication status. The tabbed pages make up the bulk of the GUI and provide the controls for programming the MAX98397 device registers.

The Block  Diagram tab  provides  access  to  all  device registers using dialog windows, which contain GUI con -trols  for  configuring  the  device. The dialog windows are opened by clicking  on  the  blocks  in  the  block  diagram. The Control Registers tab provides access to the valid registers  in  the  range  from  0x2000  through  0x210F  as well as to the revision ID register, 0x22FF.

## MAX98397 Evaluation System

The  MAX98397  evaluation  software  is  compatible  with Windows  7  and  Windows  10  and  can  be  downloaded from https://www.analog.com/en/products/max98397. html#product-tools .  Refer  to  the MAX98397 IC  data sheet for device register information.

## Communication Tool Bar

The toolbar consists of six buttons and a drop-down combo box. These controls are always accessible, regardless of the active tabbed page.  The toolbar shown in Figure 4 and Table 2 provides details about each control.

## Connect Sequence

When  the  evaluation  software  starts  for  the  first  time, the program attempts to automatically connect to the EV system.  It  first  attempts  to  connect  to  the  USB  Control (USB1) interface on the AUDINT3 board. Once that con -

Evaluates: MAX98397

nection is established, it searches for all the I 2 C address -es associated with the MAX98397 device and populates all detected device addresses in the Active Device dropdown list. During this sequence, the text on the Connect To button automatically changes from USB to Device to Disconnect and the status bar also is updated to reflect the current state of the hardware connection.

Once the EV system is fully  connected,  the  button  dis -plays Disconnect ,  and when pushed, it disconnects the software  from  the  hardware.  The  software  can  also  be disconnected from the hardware by selecting Options | Disconnect from the menu bar.

The  method  to  re-establish  is  to  manually  push  the Connect  to button  until  it  displays Disconnect ,  which signifies that the EV system is fully connected.

Figure 4. Communication Tool Bar

<!-- image -->

## Table 2. Tool Bar Controls

| CONTROL            | FUNCTION                                                                                                                                                                       |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| On                 | Press to set the Global Enable bit (EN). This enables the device.                                                                                                              |
| Off                | Press to clear the Global Enable bit (EN). This disables the device. Note: The software can communicate with a disabled device, being that its I 2 C interface remains active. |
| Active Device      | Provides a list of detected I 2 C addresses. The displayed address is the active device.                                                                                       |
| Connect/Disconnect | See the Hardware Connection section for additional details.                                                                                                                    |
| USB                | Press to connect to the USB Control (USB1) interface on the AUDINT1 board.                                                                                                     |
| Connect            | Detected addresses are shown in the Active Device drop-down list.                                                                                                              |
| Disconnect         | Press to disconnect from the USB Control (USB1) interface.                                                                                                                     |
| Read All           | Press to initiate a read of all device registers. The Control Registers and Block Diagram tabs are updated to reflect the read data.                                           |
| Write All          | Press to initiate a write to all device registers, using the settings shown on the Control Registers tab.                                                                      |
| Reset              | Press to reset device registers to their Power-On-Reset (POR) state.                                                                                                           |

## MAX98397 Evaluation System

## Status Bar

The Status bar is divided into three sections. From left to right, the device part number and revision ID, AUDINT3's firmware version, and the EV system status.

## Status Panel

The Status panel  (not  to  be  confused  with  the Status bar)  displays  the  STATUS  values  of  the  device's  status registers. This data is read from the Live Status registers (0x2001 through 0x200E).

A text string is displayed in the Interrupt Name column and an image is displayed in the RAW and STATE col -umn  to  indicate  the  setting  of  the  associated  Raw  and State bits. When the image is visible, it indicates that the associated state bit has been set.

## Block Diagram Tab

The evaluation software uses an interactive block diagram to  facilitate  the  programming  of  the  MAX98397  device. The block diagram also provides a visual representation of the device's functions and current configuration.

Evaluates: MAX98397

There  are  two  types  of  blocks  in  the  block  diagram and they are identified by the cursor image. The cursor changes to a hand when over a block that has an associ -ated dialog window. If the cursor does not change (i.e., remains an arrow) then that block does not have an asso -ciated dialog window. Clicking on a dialog block opens a dialog window, containing the controls for that functional block.

The  color  of  a  diagram  block  changes,  depending  on the  enabled  state  of  the  device  function(s)  associated with that block. A disabled block is grey and an enabled block  is  teal.  Figure  5  shows  the Block  Diagram with the MAX98397 configured for DAI (USB audio) input and speaker output.

## Dialog Windows

Dialog windows are associated with specific blocks in the block diagram and they contain the controls for configur -ing the registers associated with that functional block. A dialog  window  is  opened  by  clicking  on  a  dialog  block. Figure 6 shows the typical GUI controls that are found on a dialog window.

Figure 5. MAX98397 Block Diagram-USB Audio Input to Speaker Output

<!-- image -->

Evaluates: MAX98397

Figure 6. Typical GUI Controls

<!-- image -->

## MAX98397 Evaluation System

## Control Registers Tab

The Control  Registers tab  provides  two  methods  for configuring  the  device. As  an  example,  Figure  7  shows the elements of the DAI registers.

The  first  configuration  method  involves  clicking  on  the register's bit labels. A greyed-out bit label indicates that the bit is currently set low. A bold bit label indicates that the bit is currently set high. Clicking on a bit toggles its state and results in a write to that register. This action also updates  the  value  displayed  in  the  register's Edit  Box , located to the left of the bit labels.

The  second  configuration  method  involves  entering  a hexadecimal  value  in  the  register's Edit box  and  then pressing the Enter key. The software automatically con -figures the device register once the Enter key is pressed. The state of the bit labels also are updated to reflect the value shown in the Edit box.

Note: Trying to write to a read-only bit, by clicking/toggling its label or entering a hex value in its Edit box, updates the GUI, but it does not affect the bit's value in the device. All read-only bits are updated to reflect their current value in the device by performing a read-all operation.

All changes made on this tab are reflected on the Block Diagram tab and any open dialog windows.

## Menu Bar

All  menu  bar  items  are  described  in Table  3 .  Additional information  for  some  menu  items  is  provided  in  the  fol -lowing sections.

## File I/O

The software's save and load features are accessed from the File menu. The Save feature saves the data currently displayed on the Control Registers tab.

A configuration file's main purpose is to capture the cur -rent state of the MAX98397's registers, as displayed on the Register tab. This feature makes it easy to program a device to a saved/known state and allows for the sharing of  configuration files between users. To facilitate usage, use descriptive file names when saving configuration files.

The save and load features are functional even when the hardware is not connected. This allows configuration files to be created and opened when hardware is not available. Since the configuration file is automatically generated by the software, it is not meant to be manually formatted, and doing so may cause file-loading issues. To open a con -figuration file for viewing purposes, use a plain text editor.

Select File | Save Settings Ctrl + S to create a configu -ration file. The register address and its data are saved as tab-delimited values and the file is saved with a .98397 extension.

Figure 7. Control Registers Tab

<!-- image -->

Evaluates: MAX98397

## MAX98397 Evaluation System

## Table 3. Menu Bar Items

| MENU ITEM                      | DESCRIPTION                                                                                                                                          |
|--------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| File                           |                                                                                                                                                      |
| Load Register Settings         | Loads a configuration file (as saved by the Save Settings option).                                                                                   |
| Save Control Register Settings | Saves a configuration file containing the current device settings.                                                                                   |
| Exit                           | Closes the MAX98397 software.                                                                                                                        |
| Device                         |                                                                                                                                                      |
| Connect                        | Select to have the software automatically connect to the evaluation system.                                                                          |
| Disconnect                     | Disconnects the PC from the evaluation system.                                                                                                       |
| Reset                          | Resets registers 0x2000 through 0x210F to their Power-On-Reset states.                                                                               |
| Read All                       | Performs a read from all registers and updates the GUI.                                                                                              |
| Write All                      | Performs a write to all writeable registers, using the values shown on the Control Registers tab, and then updates the GUI.                          |
| Read REV ID                    | Reads the device's revision ID register and updates the status bar.                                                                                  |
| Options                        |                                                                                                                                                      |
| Interface Selection            | Selects the I 2 C hardware interface.                                                                                                                |
| Configuration Mode F4          | Opens a dialog that allows multiple MAX98397 devices to be selected for configuration through the software. Note: This feature is not yet supported. |
| Demo Mode                      | Puts the software in demo mode.                                                                                                                      |
| Help                           |                                                                                                                                                      |
| View Help F1                   | Provides details on where to find help.                                                                                                              |
| About                          | Provides information about the MAX98397 evaluation software.                                                                                         |

## USB Audio Input

To use the USB streaming feature of the AUDINT3 board, ensure that the AUDINT3 board is connected to the DEV board, then connect the USB cable from your computer to the USB connector J2 on the AUDINT3 board. Configure the desired audio signal inputs using the Audio Controls panel  of  the  AUDINT3  interface  software  (Figure  8 )

accessed  from  the  MAX98397  GUI  under Options .  As described  earlier,  a  computer  can  be  used  to  supply audio inputs over a USB interface in several selectable formats,  found  under  the DAI  Mode drop-down  menu. The AUDINT3 board can also generate test signal tones of various types, frequencies, and amplitudes as shown in Figure 9.

Evaluates: MAX98397

## MAX98397 Evaluation System

Figure 8. AUDINT3 Configured for Computer Audio Input Over USB

<!-- image -->

Figure 9. AUDINT3 Configured for a -12dBFS 1kHz Sine Input Using an Internal Signal Generator

<!-- image -->

## MAX98397 Evaluation System

## Detailed Description of Hardware

The  MAX98397  EV  system  is  designed  to  allow  for a  thorough  evaluation  of  the  MAX98397  digital  input Class-D audio amplifier IC. The EV system includes the MAX98397 development board (DEV board),  the Audio Interface Board III (AUDINT3), and a Micro-USB cable.

To simplify evaluation, the MAX98397 DEV board can be used together with the AUDINT3 and two external power supplies  for  PVDD  and  VBAT.  The  AUDINT3  supplies 1.8V for DVDD and AVDD, and a plug-and-play USB-toI 2 S interface, allowing any computer to become a 48kHz digital audio source. The AUDINT3 board provides a fast and easy-to-use method for exercising the main capabili -ties of the device with no additional audio equipment.

The AUDINT3 board automatically senses the MAX98397 DEV board and configures its LDO regulators to power the  MAX98397  DEV  board's  DVDD  and  AVDD  pins through  the  J1  connector.  The  USB-to-PCM  converter accepts  a  USB  audio  stream  from  a  USB-connected computer and converts it to an I 2 S stream, allowing for USB audio playback through the MAX98397 device. The AUDINT3 board should not be used to deliver audio input when directly driving the DEV board's PCM interface with external audio test equipment. The Digital Audio Interface (DAI) pins on the DEV board and AUDINT3 digital audio outputs are connected through the J1 header, creating a signal conflict. Disable all DAI signals using the AUDINT3 software  if  using  external  audio  stimuli.  However,  the AUDINT3 can still provide DVDD and AVDD if an external power supply is not available.

## Table 4. Power Supplies

| POWER SUPPLY   | RANGE (V)    |
|----------------|--------------|
| DVDD           | 1.71 to 1.89 |
| AVDD           | 1.71 to 1.89 |
| VBAT           | 3 to 5.5     |
| PVDD           | 3 to 28      |

## Table 5. Jumper Configuration

| HEADER   | SHUNT POSITION   | DESCRIPTION      |
|----------|------------------|------------------|
| J5       | EN to DVDD       | Normal Operation |
| J5       | EN to GND        | Shutdown         |

## Evaluates: MAX98397

For  maximum flexibility,  the  MAX98397  DEV  board  can also  be  evaluated  as  a  standalone  board,  with  three external power supplies PVDD, VBAT, and DVDD/AVDD, which are connected by default, and the digital audio sig -nal is driven directly by specialized audio test equipment (Audio Precision, etc.)

## Power Supplies

When evaluated as a standalone board, the MAX98397 DEV  board  requires  three  external  power  supplies: PVDD, which is the supply voltage for the main Class-D power stage at higher signal levels, VBAT, which is the supply voltage for the main Class-D at lower signal levels, and DVDD/AVDD, which supplies low-level system power to the IC.

The voltage applied to DVDD determines the logic level of  the  EN  pin  when  J6  is  in  the  ENABLE  position.  The power supplies and their ranges are listed in Table 4 . The external supply voltages can be connected at the respec -tive supply test points and/or binding posts.

The  AUDINT3  board,  when  properly  connected  to  the DEV board, senses, and automatically provides 1.8V to DVDD and AVDD of the MAX98397 DEV board through jumper J1 while active USB power is supplied. Note that with the AUDINT3 board connected, DVDD and AVDD are automatically provided, but external PVDD and VBAT are still required.

## Jumper Selection Shutdown Mode

The DEV board includes header J5 for device enable. The MAX98397 device features a hardware shutdown mode that is activated by setting the J5 shunt in the DISABLE position. This is the lowest power state, where all device registers  are  returned  to  their  PoR  values  and  the  I 2 C control  interface  is  disabled.  To  exit  the  hardware  shut -down mode, place the J5 shunt in the ENABLE position, and initialize the device. See Table 5 for reference.

## MAX98397 Evaluation System

## DAI Headers

The DAI headers provide access to the MAX98397s I 2 S bus:  BCLK,  LRCLK,  and  DATA.  This  DAI  header  facili -tates  evaluation  with  audio  equipment  I/O.  See Table  6 for  the  pin-out  of  the  DAI  headers.  Figure  10  shows  a close-up image of the MAX98397 DAT interface header (J6)  to  be  used  if  connecting  external  DAI  inputs,  such as those provided by Audio Precision or other audio test equipment.

## Table 6. DAI Headers (J6)

Figure 10. MAX98397 DAI Interface Headers

| SIGNAL   |   PIN |   PIN | SIGNAL   |
|----------|-------|-------|----------|
| DOUT     |     1 |     2 | GND      |
| DIN      |     3 |     4 | GND      |
| LRCLK    |     5 |     6 | GND      |
| BCLK     |     7 |     8 | GND      |

<!-- image -->

## Speaker Output

The MAX98397 audio output is routed to the OUTP and OUTN connections on the DEV board. The DEV board is, by default, assembled to allow the MAX98397 output to connect directly to a speaker load without the need for filtering.

## EMI Filter

When long speaker cables are used with the MAX98397 output (exceeding ≈12in (30 cm)), a ferrite bead can be installed  to  prevent  excessive  EMI radiation. Although it is  best  to  choose  filter  components  based  on  EMI  test results,  the  combination  of  100pF  capacitors  (C7,  C9) and ferrite beads (FB1, FB2) generally works well. Before adding  the  filters  to  the  design,  first,  remove  the  small PCB traces shorting the pads of FB1 and FB2 (see the MAX98397  EV  System  Development  Board  Schematic and the MAX98397 EV System Development Board PCB Layout Diagrams).

## Ordering Information

| PART           | TYPE              |
|----------------|-------------------|
| MAX98397EVSYS# | Evaluation System |

Evaluates: MAX98397

## MAX98397 EV System Development Board Bill of Materials

| DESIGNATOR                                 | DIELECTRIC   | DigiKey               | MANUFACTURER         | MANUFACTURER PN    | MOUSER               | PACKAGE   | POWER   |   QUANTITY | TOLERANCE   | VALUE   | VOLTAGE   | DESCRIPTION                                                                    |
|--------------------------------------------|--------------|-----------------------|----------------------|--------------------|----------------------|-----------|---------|------------|-------------|---------|-----------|--------------------------------------------------------------------------------|
| C4, C6                                     | X5R          | 490-7229-1-ND         | Murata               | GRM033R60J105MEA2D | 81-GRM033R60J105ME2D | 0201      |         |          2 | 20%         | 1µF     | 6.3V      | Capacitor / Ceramic / 1µF / 6.3V / 20% / X5R / 0201                            |
| C7, C8                                     | X7R          | 490-10700-1-ND        | Murata               | GRM155R71H104KE14D | 81-GRM155R71H104KE4D | 0402      |         |          2 | 10%         | 100nF   | 50V       | Cap / 100nF / 50V / 10% / X7R / 0402                                           |
| C9                                         | X5R          | 490-14577-1-ND        | Murata               | GRM153R61A105ME95D | 81-GRM153R61A105ME5D | 0402      |         |          1 | 20%         | 1µF     | 10V       | Cap / 1µF / 10V / 20% / X5R / 0402                                             |
| C10, C11                                   | X7R          | 490-4759-1-ND         | Murata               | GCM155R71C104KA55D | 81-GCM155R71C104KA5D | 0402      |         |          2 | 10%         | 100nF   | 16V       | Cap / 100nF / 16V / 10% / X7R / 0402                                           |
| C12, C13                                   | X5R          | 587-2400-1-ND         | Taiyo Yuden          | UMK107BJ105KA-T    | 963-UMK107BJ105KA-T  | 0603      |         |          2 | 10%         | 1µF     | 50V       | Cap / 1µF / 50V / 10% / X5R / 0603                                             |
| C14                                        | X5R          | 490-10474-1-ND        | Murata               | GRM188R61A106KE69D | 81-GRM188R61A106KE9D | 0603      |         |          1 | 10%         | 10µF    | 10V       | Cap / 10µF / 10V / 10% / X5R / 0603                                            |
| C15, C16                                   | X5R          | 587-5960-1-ND         | Taiyo Yuden          | UMK316BBJ106KL-T   | 963-UMK316BBJ106KL-T | 1206      |         |          2 | 10%         | 10µF    | 50V       | Cap / 10µF / 50V / 10% / X5R / 1206                                            |
| C17                                        | X5R          | GRM31CR61E476ME44K-ND | Murata               | GRM31CR61E476ME44K | 81-GRM31CR61E476ME4K | 1206      |         |          1 | 20%         | 47µF    | 25V       | Cap / 47µF / 25V / 20% / X5R / 1206                                            |
| C18                                        | Electrolytic | 493-9426-1-ND         | Nichicon             | UCW1H221MNL1GS     | 647-UCW1H221MNL1GS   | 10 x 10   |         |          1 | 20%         | 220µF   | 50V       | Cap / 220µF / 50V / 20% / Electrolytic / 10mm x10mm                            |
| C23, C25                                   | X5R          | 587-6016-1-ND         | Taiyo Yuden          | LMK105BJ225KV-F    | 963-LMK105BJ225KV-F  | 0402      |         |          2 | 10%         | 2.2µF   | 10V       | Cap / 2.2µF / 10V / 10% / X5R / 0402                                           |
| C24                                        | X7R          | 490-4762-1-ND         | Murata               | GCM155R71H103KA55D | 81-GCM155R71H103KA5D | 0402      |         |          1 | 10%         | 10nF    | 50V       | Cap / 10nF / 50V / 10% / X7R / 0402                                            |
| J1                                         |              |                       | Samtec               | TSW-113-08-G-T-RA  |                      |           |         |          1 |             |         |           | Updated EVkit Daughter Card Header                                             |
| J2, J4                                     |              | SAM1029-02-ND         | Samtec               | TSW-102-07-G-S     | 200-TSW10207GS       |           |         |          2 |             |         |           | Header, 2x1 Position, 0.1" Pitch                                               |
| J3                                         |              | SAM1028-02-ND         | Samtec               | TSW-102-07-G-D     | 200-TSW10207GD       |           |         |          1 |             |         |           | Header, 2x2 Position, 0.1" Pitch                                               |
| J5, J8                                     |              | SAM1029-03-ND         | Samtec               | TSW-103-07-G-S     | 200-TSW10307GS       |           |         |          2 |             |         |           | Header, 3x1 Position, 0.1" Pitch                                               |
| J6                                         |              | SAM1028-04-ND         | Samtec               | TSW-104-07-G-D     | 200-TSW10407GD       |           |         |          1 |             |         |           | Header, 4x2 Position, 0.1" Pitch                                               |
| J7                                         |              | WM24204-ND            | Molex                | 22-28-4055         | 538-22-28-4055       |           |         |          1 |             |         |           | Header / 0.1" Pitch / Unshrouded / 5-pin / Breakaway / Cross Pattern           |
| J9, J12, J17, J21, J22                     |              | J587-ND               | Johnson              | 111-2223-001       |                      |           |         |          5 |             |         |           | Binding Post                                                                   |
| J10, J11, J13, J14, J18, J19, J20          |              | 2328-20TCW-ND         |                      | 20TCW              |                      |           |         |          7 |             |         |           | Wire Loop / 20AWG / Tinned Copper / 25mm Length                                |
| R1, R2, R3, R6, R7, R8, R13, R14, R16, R17 |              | 311-0.0LRCT-ND        | Yageo                | RC0402FR-070RL     | 603-RC0402FR-070RL   | 0402      | 1/16W   |         10 | 1%          | 0       |           | Resistor / 0O / 1% / 1/16W / 0402                                              |
| R5                                         |              | YAG3110CT-ND          | Yageo                | RC0402FR-0730K9L   | 603-RC0402FR-0730K9L | 0402      | 1/16W   |          1 | 1%          | 30.9k   |           | Resistor / 30.9kO / 1% / 1/16W / 0402                                          |
| R10, R15                                   |              | 311-4.7KLRCT-ND       | Yageo                | RC0402FR-074K7L    | 603-RC0402FR-074K7L  | 0402      | 1/16W   |          2 | 1%          | 4.7k    |           | Resistor / 4.7kO / 1% / 1/16W / 0402                                           |
| R20, R21                                   |              | RHM1226CT-ND          | Rohm                 | LTR18EZPFSR015     | 755-LTR18EZPFSR015   | 0612      | 1W      |          2 | 1%          | 15m     |           | Resistor / 15mO / 1% / 1W / 0612                                               |
| SC1, SC2, SC3, SC4                         |              |                       | McMaster-Carr        | 91772A106          |                      |           |         |          4 |             |         |           | Screw / 4-40 x 1/4" / Phillips / Pan Head                                      |
| ST1, ST2, ST3, ST4                         |              |                       | McMaster-Carr        | 91780A164          |                      |           |         |          4 |             |         |           | Standoff / 4-40 x 1/2" / Female-Female / 1/4" Hex                              |
| TP1, TP6, TP17, TP18                       |              | 5002K-ND              | Keystone Electronics | 5002               | 534-5002             |           |         |          4 |             |         |           | Test Point / Miniature / White                                                 |
| TP2, TP3                                   |              | 5004K-ND              | Keystone Electronics | 5004               | 534-5004             |           |         |          2 |             |         |           | Test Point / Miniature / Yellow                                                |
| TP4, TP5, TP7, TP12, TP13                  |              | 5003K-ND              | Keystone Electronics | 5003               | 534-5003             |           |         |          5 |             |         |           | Test Point / Miniature / Orange                                                |
| TP8, TP22                                  |              | 5010K-ND              | Keystone Electronics | 5010               | 534-5010             |           |         |          2 |             |         |           | Test Point / Multi-Purpose / Red                                               |
| TP10, TP11, TP15, TP16                     |              | 5116K-ND              | Keystone Electronics | 5116               | 534-5116             |           |         |          4 |             |         |           | Test Point / Miniature / Green                                                 |
| TP19, TP20, TP21                           |              | 5011K-ND              | Keystone Electronics | 5011               | 534-5011             |           |         |          3 |             |         |           | Test Point / Multi-Purpose / Black                                             |
| TP23                                       |              | 5001K-ND              | Keystone Electronics | 5001               | 534-5001             |           |         |          1 |             |         |           | Test Point / Miniature / Black                                                 |
| U1                                         |              |                       | Maxim                | MAX98397ENB+       |                      | WLP35     |         |          1 |             |         |           | 28V Digital Input Class DG Amplifier with Ultra Low IQ and Brownout Prevention |
| U2                                         |              | MAX8887EZK18+TCT-ND   | Maxim                | MAX8887EZK18+      | 700-MAX8887EZK18T    | SOT23-5   |         |          1 |             |         | 1.8V      | Low-Dropout, 300mA Linear Regulators in SOT23 - 1.8V                           |

Evaluates: MAX98397

## MAX98397 EV System Development Board Schematic

<!-- image -->

Evaluates: MAX98397

## MAX98397 Evaluation System

Evaluates: MAX98397

## MAX98397 EV System Development Board PCB Layout Diagrams

<!-- image -->

MAX98397 EV System Component Placement Guide-Top Silkscreen

<!-- image -->

MAX98397 EV System PCB Layout-Top Layer

MAX98397 EV System PCB Layout-GND L2

<!-- image -->

MAX98397 EV System PCB Layout-Signal L3

<!-- image -->

## MAX98397 Evaluation System

## MAX98397 EV System Development Board PCB Layout Diagrams (continued)

<!-- image -->

MAX98397 EV System PCB Layout-Power L4

<!-- image -->

MAX98397 EV System PCB Layout-GND L5

MAX98397 EV System PCB Layout-Bottom Layer

<!-- image -->

MAX98397 EV System Component Placement Guide-Bottom Silkscreen

<!-- image -->

## MAX98397 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION               | PAGES CHANGED   |
|-------------------|-----------------|---------------------------|-----------------|
|                 0 | 10/23           | Initial release           | -               |
|                 1 | 11/25           | Update EMI Filter section | 12              |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

Evaluates: MAX98397