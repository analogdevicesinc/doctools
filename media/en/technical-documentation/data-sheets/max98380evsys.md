<!-- lastmod 2022-08-04 -->
<!-- image -->

Evaluates: MAX98380 (WLP)

## General Description

The  MAX98380  evaluation  system  (EV  system)  is  a fully  assembled  and  tested  system  that  evaluates  the MAX98380  boosted  Class-D  audio  amplifier.  The  EV system  consists  of  the  MAX98380  Development  Board (DEV  board), Analog  Devices Audio  Interface  Board  III (AUDINT3), and a USB cable.

It is recommended that the DEV board be evaluated with the AUDINT3 board, as an EV system. The MAX98380 supports standard I 2 S, left-justified, and TDM digital audio interfaces.

The AUDINT3  board  provides  a  USB-to-PCM  interface in addition to a 1.8V VDD supply needed to evaluate the DEV  board.  The  MAX98380  DEV  board  requires  one additional supply input, 2.5V to 5.5V (VBAT) when evalu -ating using the AUDINT3 board. Figure 1 details the DEV board and the AUDINT3 board.

## MAX98380 Evaluation System

## Features

- 2.5V to 5V Single-Supply Operation
- USB Audio Streaming (EV System)
- I 2 S, Left-Justified, or TDM Input
- Capacitive Charge Pump Boost Circuitry
- Fully Assembled and Tested

## EV System Contents

- MAX98380 Development Board
- Audio Interface Board III
- Micro-USB Cable

Ordering Information appears at end of data sheet.

Figure 1. MAX98380 Evaluation System

<!-- image -->

319-100921; Rev 0; 5/22

One  Analog  Way,  Wilmington,  MA  01887  U.S.A.    |      Tel:  781.329.4700      |      © 2022  Analog  Devices,  Inc.  All  rights  reserved. © 2022 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective owners.

## MAX98380 Evaluation System

## Quick Start

## Required Equipment

- MAX98380 EV System
- MAX98380 Development Board (DEV Board)
- Audio Interface Board III (AUDINT3 Board)
- Micro-USB Cable
- DC Power Supply (2.5V-5.5V, 4A)
- 6Ω to 8Ω speaker
- PC with Windows ® 7 or Windows 10 with available USB port
- USB audio source (e.g., Windows Media Player ® or iTunes ® )

## Required Software

- MAX98380 evaluation software (see Table 1) Installer: MAX98380EVSwSetupVxx.exe

Note: In the following sections, software-related items are identified  by  bolding. Text  in bold refers  to  items  directly from the evaluation software. Text in bold and underlined refers to items from the Windows operating system.

## Table 1. MAX98380 Evaluation Software Folder

| ITEM                     | DECRIPTION                                |
|--------------------------|-------------------------------------------|
| MAX98380.exe             | MAX98380 Evaluation software              |
| Uninstaller.exe          | Software uninstaller                      |
| USBDriver/FTDI           | USB driver installer and help file        |
| USBDriver/Device Manager | Shortcut to the computer's device manager |

## Reference Material

- MAX98380 IC data sheet

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

## Software Installation:

- 1) Visit www.maximintegrated.com/products/ MAX98380 under the Design Resources tab to download the latest version of the MAX98380 EV kit software. Save the EV kit software to a temporary folder and unpack the ZIP file.

iTunes is a registered trademark of Apple Inc.

Windows is a registered trademark and registered service mark of Microsoft Corporation. Windows Media is a registered trademark and registered service mark of Microsoft Corporation.

## Evaluates: MAX98380 (WLP)

- 2) Install the software and USB driver on your com -puter by running the MAX98380EVSwSetupVxx.exe program. Program files are copied, and icons are created in the Windows Start | Programs | Maxim Integrated | MAX98380 | Evaluation Software menu. During software installation, Windows may display a message indicating that this software is from an unknown publisher. This is not an error con -dition, and it is safe to proceed with the installation.
- 3) The USB driver should be automatically installed at the same time as the evaluation software. If the driver needs to be manually installed, navigate to the FTDI folder located in the installation directory, Program Files (x86) | Maxim Integrated | MAX98380 | Evaluation Software | USBDriver | FTDI , and run the CDMxxxxx.exe application.

## AUDINT3 Board Setup:

- 4) Connect the MAX98380 DEV board (3 row J1 con -nector) to the AUDINT3 board (3 row J1 connector). To avoid damage, it is important to make sure the connectors of the two boards are properly aligned. The bottom row of both J1 connectors should be lined up so the standoffs on the corners of the AUDINT3 and DEV board are level.
- 5) With the audio source disabled, connect the MicroUSB cable from your computer to the USB port (J2) on the AUDINT3 board. The AUDINT3 board provides the BCLK and LRCLK signals as well as the power for VDD, sourcing 1.8V to the DEV board through the J1 connector.
- 6) The multi-color LED D1 initially flashes blue and then should change to slow flashing magenta when the computer successfully registers the AUDINT3 as a USB audio playback device.

## DEV Board Setup:

- 7) Set the ENABLE jumper, J6, to VDD.
- 8) Load default config file through the MAX98380 evaluation software.
- 9) Connect the speaker. Connect the speaker leads across the FOUTP and FOUTN binding posts.
- 10) Connect VBAT. With the DC supply not powered, connect the 2.5V to 5.5V power supply across the VBAT and GND binding posts.

## MAX98380 Evaluation System

## USB Audio Playback Test:

- 11) Enable the VBAT supply voltage (2.5V to 5.5V, 4A).
- 12) Open the Windows' Sound dialog and select the Playback tab. A Speakers item such as Figure 2 should be listed as an available playback device.
- 13) Verify that the Speakers item is set as the default device. Once this is done, the AUDINT3 board out -puts PCM data to the DIN pin on the DEV board.
- 14)  Adjust the audio source volume to a low level.
- 15)  Enable the audio source and verify that audio is heard through the connected speaker. Adjust the audio source volume as needed.
- 16) Quick Start for USB Audio Playback is now com -plete.
- 17) For details on how to connect in a standalone mode to audio test equipment, such as Audio Precision, see the Detailed Description of Hardware section.

Figure 2. Playback Device

<!-- image -->

## Evaluates: MAX98380 (WLP)

## Detailed Description of Software

The  MAX98380  evaluation  software  is  designed  to  be used only with the MAX98380 EV system. The software provides  an  intuitive  graphical  user  interface  (GUI)  for programming the MAX98380 device and includes a hand -ful of features that are intended to aid evaluation.

The MAX98380 evaluation software main window (Figure 3 ) is composed of four main sections: a menu bar, communi -cation toolbar, tabbed pages, and a status bar. The menu bar provides additional features to aid evaluation, the tool -bar provides basic functionality for communicating with the device, and the status bar provides information about hard -ware  connectivity  and  communication  status.  The  tabbed pages make up the bulk of the GUI and provide the controls for programming the MAX98380 device registers.

The Block  Diagram tab  provides  access  to  all  device registers using dialog windows, which contain GUI con -trols  for  configuring  the  device. The dialog windows are opened by clicking  on  the  blocks  in  the  block  diagram. The Control Registers tab provides access to the valid registers in the range from 0x2000 thru 0x210F as well as to the revision ID register, 0x21FF.

The  MAX98380  evaluation  software  is  compatible  with Windows 7 and Windows 10 and can be downloaded from www.maximintegrated.com/evkitsoftware . Refer to the MAX98380 IC data sheet for device register information.

Figure 3. MAX98380 Evaluation Software-Main Window

<!-- image -->

## MAX98380 Evaluation System

## Communication Toolbar

The toolbar consists of six buttons and a drop-down combo box. These controls are always accessible, regardless of the active tabbed page.  The toolbar shown in Figure 4 and Table 2 provides details about each control.

## Connect Sequence

When  the  evaluation  software  starts  for  the  first  time, the program attempts to automatically connect to the EV system.  It  first  attempts  to  connect  to  the  USB  Control (USB1) interface on the AUDINT3 board. Once that con -nection is established, it searches for all the I 2 C address -es associated with the MAX98380 device and populates all detected device addresses in the Active Device dropdown list. During this sequence, the text on the Connec t button  automatically  changes  from USB to Device to Disconnect and the status bar also is updated to reflect the current state of the hardware connection.

Once the EV system is fully  connected,  the  button  dis -plays Disconnect ,  and when pushed, it disconnects the software  from  the  hardware.  The  software  can  also  be disconnected from the hardware by selecting Options | Disconnect from the menu bar.

## Table 2. Toolbar Controls

Figure 4. Communication Toolbar

| CONTROL            | FUNCTION                                                                                                                                                                       |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| On                 | Press to set the Global Enable bit (EN). This enables the device.                                                                                                              |
| Off                | Press to clear the Global Enable bit (EN). This disables the device. Note: The software can communicate with a disabled device, being that its I 2 C interface remains active. |
| Active Device      | Provides a list of detected I 2 C addresses. The displayed address is the active device.                                                                                       |
| Connect/Disconnect | See the Connect Sequence section for additional details.                                                                                                                       |
| USB                | Press to connect to the USB Control (USB1) interface on the AUDINT1 board.                                                                                                     |
| Connect            | Detected addresses are shown in the Active Device drop-down list.                                                                                                              |
| Disconnect         | Press to disconnect from the USB Control (USB1) interface.                                                                                                                     |
| Read All           | Press to initiate a read of all device registers. The Control Registers and Block Diagram tabs are updated to reflect the read data.                                           |
| Write All          | Press to initiate a write to all device registers using the settings shown on the Control Registers tab.                                                                       |
| Reset              | Press to reset device registers to their Power-On-Reset (POR) state                                                                                                            |

<!-- image -->

## Evaluates: MAX98380 (WLP)

There are two methods to re-establish a connection with the hardware. The first is by selecting Options | Auto Connect from the menu bar. This instructs the program to automati -cally connect to the EV system, just as was done when the software  first  started.  The  second  method  is  to  manu -ally push the Connect button until it displays Disconnect , which signifies that the EV system is fully connected.

## Status Bar

The Status bar is divided into three sections. From left to right, the device part number and revision ID, AUDINT3's firmware version, and the EV system status.

## Status Panel

The Status panel  (not  to  be  confused  with  the Status bar)  displays  the STATUS values  of  the  device's  status registers. This data is read from the Live Status registers (0x2001 thru 0x2002).

A text string is displayed in the STATUS column to report the state of each status bit and an image is displayed in the STATE column to indicate the setting of the associ -ated state bit. When the image is visible, it indicates that the associated state bit has been set.

## MAX98380 Evaluation System

## Block Diagram Tab

The evaluation software uses an interactive block diagram to  facilitate  the  programming  of  the  MAX98380  device. The block diagram also provides a visual representation of the device's functions and current configuration.

There are two types of blocks in the block diagram, and they are identified by the cursor image. The cursor chang -es to a hand when over a block that has an associated dia -log window. If the cursor does not change (i.e., remains an

## Evaluates: MAX98380 (WLP)

arrow) then that block does not have an associated dialog window. Clicking on a dialog block opens a dialog window, containing the controls for that functional block.

The  color  of  a  diagram  block  changes  depending  on the  enabled  state  of  the  device  function(s)  associated with that block. A disabled block is grey, and an enabled block is teal. Figure 5 shows the block diagram with the MAX98380  configured  for  DAI  (USB  audio)  input  and speaker output.

Figure 5. MAX98380 Block Diagram-USB Audio Input to Speaker Output

<!-- image -->

## MAX98380 Evaluation System

## Dialog Windows

Dialog windows are associated with specific blocks in the block diagram, and they contain the controls for configur -ing  the  registers  associated  with  that  functional  block.

Evaluates: MAX98380 (WLP)

A dialog window is opened by clicking on a dialog block. Figure 6 shows the typical GUI controls that are found on a dialog window.

Figure 6. Typical GUI Controls

<!-- image -->

## MAX98380 Evaluation System

## Control Registers Tab

The Control  Registers tab  provides  two  methods  for configuring  the  device. As  an  example,  Figure  7  shows the elements of the DAI registers.

The  first  configuration  method  involves  clicking  on  the register's bit labels. A greyed-out bit label indicates that the bit is currently set low. A bold bit label indicates that the bit is currently set high. Clicking on a bit toggles its state  and  results  in  a  write  to  that  register.  This  action also updates the value displayed in the register's edit box, located to the right of the bit labels.

The  second  configuration  method  involves  entering  a hexadecimal  value  in  the  register's  edit  box  and  then pressing the Enter key. The software automatically con -figures the device register once the Enter key is pressed.

## Table 3. Menu Bar Items

Figure 7. Control Registers Tab

| MENU ITEM                      | DESCRIPTION                                                                                                                                          |
|--------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| File                           |                                                                                                                                                      |
| Load Register Settings         | Loads a configuration file (as saved by the Save Settings option).                                                                                   |
| Save Control Register Settings | Saves a configuration file containing the current device settings.                                                                                   |
| Exit                           | Closes the MAX98380 evaluation software.                                                                                                             |
| Device                         |                                                                                                                                                      |
| Connect                        | Select to have the software automatically connect to the evaluation system.                                                                          |
| Disconnect                     | Disconnects the PC from the evaluation system.                                                                                                       |
| Reset                          | Resets registers 0x2000 through 0x210F to their Power-On-Reset states.                                                                               |
| Read All                       | Performs a read from all registers and updates the GUI.                                                                                              |
| Write All                      | Performs a write to all writeable registers using the values shown on the Control Registers tab and then updates the GUI.                            |
| Read REV ID                    | Reads the device's revision ID register and updates the status bar.                                                                                  |
| Options                        |                                                                                                                                                      |
| Interface Selection            | Selects the I 2 C hardware interface.                                                                                                                |
| Configuration Mode F4          | Opens a dialog that allows multiple MAX98380 devices to be selected for configuration through the software. Note: This feature is not yet supported. |
| Demo Mode                      | Puts the software in demo mode.                                                                                                                      |
| Help                           |                                                                                                                                                      |
| View Help F1                   | Provides details on where to find help.                                                                                                              |
| About                          | Provides information about the MAX98380 evaluation software.                                                                                         |

<!-- image -->

Evaluates: MAX98380 (WLP)

The state of the bit labels also is updated to reflect the value shown in the edit box.

Note: Trying to write to a read-only bit, by clicking/toggling its label or entering a hex value in its edit box, updates the GUI, but it does not affect the bit's value in the device. All read-only bits are updated, to reflect their current value in the device, by performing a read-all operation.

All changes made on this tab are reflected on the Block Diagram tab and any open dialog windows.

## Menu Bar

All  menu  bar  items  are  described  in Table  3 .  Additional information  for  some  menu  items  is  provided  in  the  fol -lowing sections.

## File I/O

The software's save and load features are accessed from the File menu. The Save feature saves the data currently displayed on the Control Registers tab.

A configuration file's main purpose is to capture the cur -rent state of the MAX98380's registers, as displayed on the Registers tab. This feature makes it easy to program a device to a saved/known state and allows for the shar -ing  of  configuration  files  between  users.  To  facilitate usage, use descriptive file names when saving the con -figuration file.

The  save  and  load  features  are  functional  even  when the hardware is not connected. This allows configuration files to be created and opened when the hardware is not available.  Since  the  configuration  file  is  automatically generated by the software, it is not meant to be manually formatted, and doing so can cause file loading issues. To open a configuration file for viewing purposes, use a plain text editor.

Select File | Save Settings Ctrl + S to create a configura -tion file. The register address and its data are saved as tab-delimited values and the file is saved with a .98380 extension.

## Detailed Description of Hardware

The  MAX98380  EV  system  is  designed  to  allow  for a  thorough  evaluation  of  the  MAX98380  digital  input Class-D audio amplifier IC. The EV system includes the MAX98380 Development Board (DEV board), the Audio Interface Board III (AUDINT3), and a Micro-USB cable.

To simplify evaluation, the MAX98380 DEV board can be used together with the AUDINT3 and only one external power supply for VBAT. The AUDINT3 supplies 1.8V for VDD and a plug-and-play USB-to-I 2 S interface, allowing any  computer  to  become  a  48kHz  digital  audio  source. The  AUDINT3  board  provides  a  fast  and  easy-to-use method for exercising the main capabilities of the device with no additional audio equipment.

The AUDINT3 board automatically senses the MAX98380 DEV board and configures its LDO regulators to power the MAX98380 DEV board's VDD pin through connector J1.

## Evaluates: MAX98380 (WLP)

The USB-to-PCM converter accepts a USB audio stream from  a  USB-connected  computer  and  converts  it  to  an I 2 S stream, allowing for USB audio playback through the MAX98380  device.  The AUDINT3  board  should  not  be used to deliver audio input when directly driving the DEV board's PCM interface with external audio test equipment. The Digital Audio Interface (DAI) pins on the DEV board and AUDINT3 digital audio outputs are connected through the J1 header, creating a signal conflict. Disable all DAI signals  using  the  AUDINT3  software  if  using  external audio  stimuli.  However,  the  AUDINT3  can  still  provide VDD if an external power supply is not available.

For  maximum flexibility,  the  MAX98380  DEV  board  can also be evaluated as a standalone board, with two exter -nal power supplies (VBAT and VDD), and the digital audio signal  is  driven  directly  by  specialized  audio  test  equip -ment (Audio Precision, etc.)

## Power Supplies

When evaluated as a standalone board, the MAX98380 DEV board requires two external power supplies: VBAT, which is the supply voltage for the main Class-D power stage, and VDD, which supplies low-level system power to the IC.

The voltage applied to VDD determines the logic level of the EN pin when J6 is in the ENABLE position. The power supplies and their ranges are listed in Table 4. The exter -nal  supply  voltages  can  be  connected at the respective supply test points and/or binding posts.

The  AUDINT3  board,  when  properly  connected  to  the DEV board, senses, and automatically provides 1.8V to VDD of MAX98380 DEV board through jumper J1, when active USB power is supplied. Note that with the AUDINT3 board connected, VDD is automatically provided, but an external VBAT is still required.

## Table 4. Power Supplies

| POWER SUPPLY   | RANGE (V)    |
|----------------|--------------|
| VDD            | 1.71 to 1.89 |
| VBAT           | 2.5 to 5.5   |

## MAX98380 Evaluation System

## Jumper Selection

## Shutdown Mode

The DEV board includes header J6 for device enable. The MAX98380 device features a hardware shutdown mode that is activated by setting the J6 shunt in the DISABLE position. This is the lowest power state, where all device registers  are  returned  to  their  PoR  values  and  the  I 2 C control  interface  is  disabled.  To  exit  the  hardware  shut -down mode, place the J6 shunt to the ENABLE position, and initialize the device. See Table 5 for reference.

## DAI Headers

The DAI headers provide access to MAX98380's I 2 S bus: BCLK,  LRCLK,  and  DATA.  This  DAI  header  facilitates evaluation with audio equipment I/O. See Table 6 for the pin-out  of  the  DAI  headers.  Figure  8  shows  a  close-up image of the MAX98380 DAI interface header (J3) to be used if connecting external DAI inputs, such as those pro -vided by Audio Precision or other audio test equipment.

## Speaker Output

The MAX98380 audio output is routed to the FOUTP and FOUTN connections on the DEV board. The DEV board is, by default, assembled to allow the MAX98380 output to connect directly to a speaker load without the need for filtering.

## Table 5. Jumper Configuration

| HEADER   | SHUNT POSITION   | DESCRIPTION      |
|----------|------------------|------------------|
| J6       | EN to VDD        | Normal Operation |
| J6       | EN to GND        | Shutdown         |

## Table 6. DAI Headers (J3)

| SIGNAL   |   PIN |   PIN | SIGNAL   |
|----------|-------|-------|----------|
| GND      |     1 |     2 | DATA     |
| GND      |     3 |     4 | LRCLK    |
| GND      |     5 |     6 | BCLK     |

## EMI Filter

When long speaker cables are used with the MAX98380 output  (exceeding  ≈12in  (30  cm)),  a  ferrite  bead  plus capacitor filter can be installed to prevent excessive EMI radiation. Although it is best to choose filter components based  on  EMI  test  results,  the  combination  of  100pF capacitors (C11, C12) and ferrite beads (L1, L2) generally work  well.  Before  adding  the  filters  to  the  design,  first, remove the small PCB traces shorting the pads of L1 and L2 (see the MAX98380 WLP EV Kit Development Board Schematic and the MAX98380 WLP EV Kit Development Board PCM Layout Diagrams ).

Figure 8. MAX98380 DAI Interface Headers

<!-- image -->

## Evaluates: MAX98380 (WLP)

## MAX98380 Evaluation System

## Audio Interface Board III (AUDINT3 Board)

Analog Devices AUDINT3 board facilitates the evaluation of the DEV board by providing a set of features that can be  used  to  exercise  the  capabilities  of  the  DEV  board without  the  need  for  additional  audio  equipment.  The main  components  of  the  AUDINT3  board  are  its  LDO supply voltages and its USB-to-PCM interface. The sup -

## Table 7. AUDINT3 Connector (J1)

| SIGNAL   |   PIN | SIGNAL   |   PIN | SIGNAL   |   PIN |
|----------|-------|----------|-------|----------|-------|
| -        |     1 | MCLK     |     2 | GND      |     3 |
| BCLK2    |     4 | BCLK1    |     5 | GPIO1    |     6 |
| LRCLK2   |     7 | LRCLK1   |     8 | GPIO2    |     9 |
| DAC2     |    10 | DAC1     |    11 | GPIO3    |    12 |
| ADC2     |    13 | ADC1     |    14 | GPIO4    |    15 |
| -        |    16 | ID       |    17 | 3.3V     |    18 |
| AVDD     |    19 | DVDD     |    20 | GND      |    21 |
| HPVD     |    22 | VDDUI    |    23 | GND      |    24 |
| GND      |    25 | SDA      |    26 | 5V       |    27 |
| -        |    28 | SCL      |    29 | 5V       |    30 |
| GND      |    31 | IRQ      |    32 | RST      |    33 |
| -        |    34 | -        |    35 | -        |    36 |
| GND      |    37 | -        |    38 | -        |    39 |

## Evaluates: MAX98380 (WLP)

ply voltages allow the DEV board to be evaluated with a minimal  number  of  external  supplies.  The  USB-to-PCM converter  allows  any  computer  to  be  used  as  an  audio source for the DEV board's digital audio PCM interface.

The  MAX98380  DEV  board  connects  to  the  AUDINT3 board  through  connector  J1.  The  physical  connections made between the DEV board and the AUDINT3 board are listed in Table 7 .

## MAX98380 Evaluation System

## USB Audio Input

To use the USB streaming feature of the AUDINT3 board, ensure that the AUDINT3 board is connected to the DEV board, then connect the USB cable from your computer to the USB connector J2 on the AUDINT3 board. Configure the desired audio signal inputs using the Audio Controls

## Evaluates: MAX98380 (WLP)

panel  of  the AUDINT3  interface  software  (Figure  9). As described  earlier,  a  computer  can  be  used  to  supply audio inputs over a USB interface in several selectable formats,  found  under  the DAI  Mode drop-down  menu. The AUDINT3 board can also generate test signal tones of various types, frequencies, and amplitude as shown in Figure 10.

Figure 9. AUDINT3 Configured for Computer Audio Input Over USB

<!-- image -->

## MAX98380 Evaluation System

Evaluates: MAX98380 (WLP)

Figure 10. AUDINT3 Configured for a -12dBFS 1kHz Sine Input using an Internal Signal Generator

<!-- image -->

## Ordering Information

| PART           | TYPE              |
|----------------|-------------------|
| MAX98380EVSYS# | Evaluation System |

## MAX98380 WLP EV Kit Development Board Bill of Materials

|   # | QTY                   | DESIGNATOR                                                   | DESCRIPTION   | VALUE   | VOLTAGE TOLERANCE   | POWER        | DIELECTERIC PACKAGE   | MANUFACTURER                        | MANUFACTURER PN    | MOUSER               | DigiKey          |
|-----|-----------------------|--------------------------------------------------------------|---------------|---------|---------------------|--------------|-----------------------|-------------------------------------|--------------------|----------------------|------------------|
|   1 | 1 C4                  | Capacitor / Ceramic / 1µF / 6.3V / 20% / X5R / 0201          | 1µF           | 6.3V    | 20%                 | X5R          | 201                   | Murata GRM033R60J105MEA2D           |                    | 81-GRM033R60J105ME2D | 490-7229-1-ND    |
|   2 | 1 C5                  | Capacitor / Electrolytic / 100µF / 25V / 20% / 6.3mm x 6.1mm | 100µF         | 25V     | 20%                 | Electrolytic | 6.3 x 6.1             | United Chemi-Con EMZR250ARA101MF61G |                    | 661-EMZR250ARA101MF6 | 565-5142-1-ND    |
|   3 | 3 C6, C7, C16         | Capacitor / Ceramic / 100nF / 25V / 10% / X5R / 0201         | 100nF         | 25V     | 10%                 | X5R          | 201                   | Murata GRM033R61E104KE14J           |                    | 81-GRM033R61E104KE4J | 490-14571-1-ND   |
|   4 | 6 C8, C13, C15, C17,  | C20, C21 Cap / 2.2µF / 16V / 10% / X5R / 0402                | 2.2µF         | 16V     | 10%                 | X5R          | 402                   | Murata GRM155R61C225KE11J           |                    | 81-GRM155R61C225KE1J | 490-14600-1-ND   |
|   5 | 2 C9, C14             | Cap / 10µF / 25V / 20% / X5R / 0603                          | 10µF          | 25V     | 20%                 | X5R          | 603                   | Murata                              | GRM188R61E106MA73D | 81-GRM188R61E106MA3D | 490-7202-1-ND    |
|   6 | 1 C10                 | Cap / 10µF / 10V / 20% / X5R / 0402                          | 10µF          | 10V     | 20%                 | X5R          | 402                   | AVX                                 | 0402ZD106MAT2A     | 581-0402ZD106MAT2A   | 478-10052-1-ND   |
|   7 | 1 J1                  | Updated EVkit Daughter Card Header                           |               |         |                     |              |                       | Samtec TSW-113-08-G-T-RA            |                    |                      |                  |
|   8 | 1 J2                  |                                                              |               |         |                     |              |                       |                                     |                    |                      |                  |
|   9 | 1 J3                  | Header, 3x2 Position, 0.1" Pitch                             |               |         |                     |              |                       | Samtec                              | TSW-103-07-G-D     | 200-TSW10307GD       | SAM1028-03-ND    |
|  10 | 1 J4                  | Header, 2x2 Position, 0.1" Pitch                             |               |         |                     |              |                       | Samtec                              | TSW-102-07-G-D     | 200-TSW10207GD       | SAM1028-02-ND    |
|  11 | 1 J5                  | Header, 2x1 Position, 0.1" Pitch                             |               |         |                     |              |                       | Samtec                              | TSW-102-07-G-S     | 200-TSW10207GS       | SAM1029-02-ND    |
|  12 | 1 J6                  | Header, 3x1 Position, 0.1" Pitch                             |               |         |                     |              |                       | Samtec                              | TSW-103-07-G-S     | 200-TSW10307GS       | SAM1029-03-ND    |
|  13 | 4 J7, J8, J13, J14    | Binding Post                                                 |               |         |                     |              |                       | Johnson                             | 111-2223-001       |                      | J587-ND          |
|  14 | 5 J9, J10, J11, J12,  | J15 Wire Loop / 20AWG / Tinned Copper / 25mm Length          |               |         |                     |              |                       | 20TCW                               |                    |                      | 2328-20TCW-ND    |
|  15 | 2 R1, R2              | Resistor / 0Ω / 1% / 1/16W / 0402                            | 0             |         | 1%                  | 1/16W        | 402                   | Yageo                               | RC0402FR-070RL     | 603-RC0402FR-070RL   | 311-0.0LRCT-ND   |
|  16 | 3 R3, R4, R5          | Resistor / 51Ω / 1% / 1/16W / 0402                           | 51            |         | 1%                  | 1/16W        | 402                   | Yageo                               | RC0402FR-0751RL    | 603-RC0402FR-0751RL  | 311-51.0LRCT-ND  |
|  17 | 1 R6                  | Resistor / 27kΩ / 1% / 1/16W / 0402                          | 27k           |         | 1%                  | 1/16W        | 402                   | Yageo                               | RC0402FR-0727KL    | 603-RC0402FR-0727KL  | 311-27.0KLRCT-ND |
|  18 | 4 SC1, SC2, SC3, SC4  | Screw / 4-40 x 1/4" / Phillips / Pan Head                    |               |         |                     |              |                       | McMaster-Carr                       | 91772A106          |                      |                  |
|  19 | 4 ST1, ST2, ST3, ST4  | Standoff / 4-40 x 1/2" / Female-Female / 1/4"                | Hex           |         |                     |              |                       | McMaster-Carr                       | 91780A164          |                      |                  |
|  20 | 4 TP1, TP2, TP3, TP13 | Test Point / Multi-Purpose / Black                           |               |         |                     |              |                       | Keystone Electronics                | 5011               | 534-5011             | 5011K-ND         |
|  21 | 2 TP4, TP11           | Test Point / Multi-Purpose / Red                             |               |         |                     |              |                       | Keystone Electronics                | 5010               | 534-5010             | 5010K-ND         |
|  22 | 4 TP5, TP12, TP15,    | TP16 Test Point / Miniature / White                          |               |         |                     |              |                       | Keystone Electronics                | 5002               | 534-5002             | 5002K-ND         |
|  23 | 4 TP6, TP7, TP8, TP14 | Test Point / Miniature / Orange                              |               |         |                     |              |                       | Keystone Electronics                | 5003               | 534-5003             | 5003K-ND         |
|  24 | 2 TP9, TP10           | Test Point / Miniature / Yellow                              |               |         |                     |              |                       | Keystone Electronics                | 5004               | 534-5004             | 5004K-ND         |
|  25 | 1 U1                  | Small, Cost-Effective, Boosted Digital Class-D Amplifier     |               |         |                     |              | WLP24                 | Analog Devices                      | MAX98380           |                      |                  |
|  26 | 1 PCB                 | PCM-MAX98380_WLP_APPS_P3                                     |               | PCB     |                     |              |                       | Analog Devices                      |                    |                      |                  |

## MAX98380 Evaluation System

## MAX98380 WLP EV Kit Development Board Schematic

<!-- image -->

## MAX98380 Evaluation System

## MAX98380 WLP EV Kit Development Board PCB Layout Diagrams

<!-- image -->

MAX98380 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX98380 EV Kit PCB Layout-Top Layer

MAX98380 EV Kit PCB Layout-Layer 2

<!-- image -->

MAX98380 EV Kit PCB Layout-Layer 3

<!-- image -->

## MAX98380 Evaluation System

## MAX98380 WLP EV Kit Development Board PCB Layout Diagrams (continued)

<!-- image -->

MAX98380 EV Kit PCB Layout-Layer 4

<!-- image -->

MAX98380 EV Kit PCB Layout-Layer 5

MAX98380 EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX98380 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

## MAX98380 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/22            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

Evaluates: MAX98380 (WLP)