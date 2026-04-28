<!-- lastmod 2023-02-09 -->
<!-- image -->

## Evaluates: MAX98363 (A/B/C/D)

## General Description

The MAX98363 Development board (DEV board) is a fully assembled  and  tested  application  board  that  evaluates the MAX98363A/MAX98363B/MAX98363C/MAX98363D, tiny  SoundWire ®   v1.2  compatible  input  Class-D  mono amplifiers.

The  MAX98363  Development  board  is  designed  to work with an external SoundWire manager, which would provide  the  v1.2  SoundWire  Clock  and  Data.  Only a  single  supply  input  of  2.5V  to  5.5V  for  VDD  is required  for  powering  the  DEV  board.  Figure  1  and Figure  2  detail  the  DEV  board  connections  and  jumper locations.

## Features

- MIPI SoundWire v1.2 Compliant
- 3.2W Output Power into 4Ω at 5V
- Single-Supply Operation (2.5V to 5.5V)
- 12.3mW Quiescent Power with External DVDDIO
- 92% Efficiency (RL = 8Ω, THD+N = 10%)
- 12.8μVRMS Output Noise
- 108.5dB Dynamic Range
- Low 0.014% THD+N at 1kHz
- Sophisticated Edge Rate Control Enables Filterless Class-D Outputs
- Extensive Click-and-Pop Reduction Circuitry
- Available in Space-Saving Package: 9 Bump, WaferLevel Package (WLP)
- 1.528mm x 1.528mm, 0.4mm Pitch

Ordering Information appears at end of data sheet.

Windows and Windows Media Player are registered trademarks and registered service marks of Microsoft Corporation. SoundWire is a registered trademark and registered service mark of MIPI Alliance.

iTunes is a registered trademark of Apple Inc.

©

## MAX98363 Development Board

## MAX98363 Development Board Photo

<!-- image -->

Figure 1. MAX98363A/MAX98363B Development Board

<!-- image -->

319-100967; Rev 0; 12/22

One  Analog  Way,  Wilmington, MA  01887 U.S.A. | Tel: 781.329.470      |      © 20  Analog  Devices,  Inc.  All  rights  reserved. 20 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective owners.

## MAX98363 Development Board

Figure 2. MAX98363C/MAX98363D Development Board

<!-- image -->

## Configuring the MAX98363 Development Board for Testing

A  user  supplied  SoundWire  Manager  must  be  used  to control  all  the  MAX98363  registers  and  digital  audio streaming. Audio test equipment (Audio Precision, etc.) is connected to the amplifier output. Note that there is also the MAX98363 evaluation software, which is available to be  used  as  a  visual  reference  only  (for  the  device  registers  and  block  diagrams).   The  MAX98363 Evaluation Software  operates  in  'Demo  Mode'  only  and  does  not control or interface with the DEV board in any manner.

## Software Installation (Optional):

- 1) Download the latest software from the Analog Devices website.
- Visit www.analog.com/products/MAX98363 to download the latest version of the MAX98363 EV kit software. Save the EV kit software to a temporary folder and unpack the .zip file.
- 2) Install the software and follow the prompts till the end.
- Install the software on the computer by running the MAX98363EVSwSetupVxx.exe program. Program files are copied and icons are created in the Windows Start | Programs | Maxim Integrated | MAX98363 Evaluation Software menu. During software installation, MS Windows may display a message indicating the software is from an unknown publisher. This is not an error condition, and it is safe to proceed with the installation.

## Evaluates: MAX98363 (A/B/C/D)

## Hardware Assembly:

- 3) Check jumpers on Dev board.
- Enable: Set the ENABLE jumper, J2, to VDD.
- Address: Use jumper J9 to select a SoundWire Unique ID (see Table 2).
-  For MAX98363C/MAX98363D only: Add jumper J3 to connect the external 1.8V LDO (U2) to DVDDIO of the MAX98363C/MAX98363D.
- 4) Connect a test load.
- Use the OUTP and OUTN binding posts to connect a test load or speaker between 4Ω to 8Ω. Note: when using a test load on a Class-D amplifier, a series inductor is required (33µH is recommended).
- 5) Connect the VDD power supply (with the supply not powered).
- Connect a 2.5V to 5.5V power supply (with the supply not powered) across the VDD and GND binding posts of the MAX98363 Development Board or use the 2.1mm X 5.5mm barrel connector J10 on the bottom.
- 6) Turn on the VDD power supply.
- Set a voltage between 2.5V and 5.5V.

## Test Equipment Playback Test

- 7) Launch the audio test equipment software.
- 8) Launch the SoundWire Manager and configure.
- 9) Connect the SoundWire Manager to the J6 header
- From the SoundWire Manager, connect the SoundWire Clock, SoundWire Data, and ground leads to the SW\_CLK, SW\_DATA, and GND on the J6 header, respectively (see Table 4).
- 10)  Connect the audio test equipment to the amplifier's output.
- Connect OUTP, OUTN, and GND to the input of a switching amplifier measurement filter. A switching amplifier measurement filter is needed when collecting measurements from the output of a Class-D amplifier.
- Connect the filter output to the input of the audio test equipment.
- 11) Configure the MAX98363 for playback.
- After the MAX98363 device is registered with the SoundWire Manager, configure it for audio playback.
- 12)  This completes setting up the MAX98363 for bench testing.

│

## MAX98363 Development Board

## Detailed Description of Software

Note: In the following sections, software-related items are identified in bold. Text in bold refers to items directly from the  evaluation  software.  Text  in bold  and  underlined refers to items from the MS Windows operating system.

MAX98363 evaluation  software  is  designed  to  be  used only as a reference tool with the MAX98363 DEV board. The  software  provides  an  intuitive  graphical-user  interface  (GUI)  for  viewing  the  registers  and  features  of  the MAX98363 device. The  MAX98363  evaluation  software operates  in  'Demo  Mode'  only  and  does  not  control  or interface with the DEV board in any manner.

The main window of the MAX98363 evaluation software is  composed  of  four  main  sections:  menu  bar,  communication  tool  bar,  tabbed  pages,  and  a  status  bar  (see

## Evaluates: MAX98363 (A/B/C/D)

Figure 3). The tabbed pages constitute the bulk of the GUI and displays the hardware register's names, addresses, and provides a block diagram of the MAX98363.

The Block  Diagram tab  shows  all  the  device  registers using dialog windows. The dialog windows are opened by clicking on the blocks in the block diagram. The Control Registers tab displays all the valid registers from 0x2001 to 0x2044. The SoundWire Register tab displays all the SoundWire registers from 0x0040 to 0x0137.

The MAX98363 evaluation software is compatible with MS Windows 7 and Windows 10 and can be found on Analog Devices website (Analog.com). Refer to the  MAX98363 IC  data  sheet  and  the  MIPI  SoundWire   Specification (Version 1.2) for detailed device register information.

Figure 3. MAX98363 Evaluation Software

<!-- image -->

│

## MAX98363 Development Board

## Block Diagram Tab

The evaluation software uses a block diagram to display the  programmable  features  of  the  MAX98363  device. There are two types of blocks in the block diagram. The cursor changes to a hand when over a block that has an associated dialog window. If the cursor does not change (i.e.,  remains  an  arrow),  then  that  block  does  not  have an associated dialog window. Clicking on a dialog block opens  a  dialog  window,  displaying  the  features  for  that functional block.

## Evaluates: MAX98363 (A/B/C/D)

## Dialog Windows

A dialog window is opened by clicking on a dialog block. Figure 4 shows some of the typical GUI controls that are found in a dialog window.

## Control Registers Tab

The Control  Registers tab  displays  the  MAX98363 programmable register addresses and names.

Figure 4. Dialog Block for AMP controls

<!-- image -->

│

## MAX98363 Development Board

## Detailed Description of Hardware

The  MAX98363  Development  board  is  designed  for  a thorough  evaluation  of  the  MAX98363  SoundWire  v1.2 compatible input Class-D mono amplifier.

To simplify evaluation, the MAX98363 DEV board can be evaluated with an external power supply for VDD, and by a SoundWire stream driven directly by specialized audio test equipment or a computer with SoundWire capabilities and driver.

## Power Supplies

The MAX98363 DEV board requires an external power supply  for  VDD  (2.5V  to  5.5V).  Connect  the  external supply at the respective supply test points, binding posts, or the barrel connector J10, located at the bottom of the DEV board (see Figure 1 or Figure 2).

For  the  MAX98363A/MAX98363B,  the  1.8V  DVDDIO voltage is automatically generated by the device through an  internal  LDO.  This  voltage  can  be  measured  at  the DVDDIO test point.

The  MAX98363C/MAX98363D,  requires  the  use  of  an additional  power  supply  for  DVDDIO.  For  convenience, an  external  LDO  is  included  on  the  MAX98363C/D DEV board. The  external  LDO  (U2)  is  mounted  on  the

Table 1. Enable Jumper Configuration (J2)

| HEADER   | SHUNT POSITION   | DESCRIPTION      |
|----------|------------------|------------------|
| J2       | EN to VDD        | Normal Operation |
| J2       | EN to GND        | Shutdown         |

## Table 2. Unique ID Jumper Configuration (J9)

| HEADER   | PART NUMBER                 | SHUNT POSITION   | DESCIPTION                | DEVICE UNIQUE ID   |
|----------|-----------------------------|------------------|---------------------------|--------------------|
| J9       | MAX98363ADEV# MAX98363CDEV# | 5 to 3           | ADDR to GND               | 0x0                |
| J9       | MAX98363ADEV# MAX98363CDEV# | Open             | Unconnected               | 0x1                |
| J9       | MAX98363ADEV# MAX98363CDEV# | 5 to 1           | ADDR to VDD               | 0x2                |
| J9       | MAX98363ADEV# MAX98363CDEV# | 5 to 4           | ADDR to VDD through 100kΩ | 0x3                |
| J9       | MAX98363ADEV# MAX98363CDEV# | 5 to 2           | ADDR to GND through 100kΩ | 0x4                |
| J9       | MAX98363BDEV# MAX98363DDEV# | 5 to 3           | ADDR to GND               | 0x5                |
| J9       | MAX98363BDEV# MAX98363DDEV# | Open             | Unconnected               | 0x6                |
| J9       | MAX98363BDEV# MAX98363DDEV# | 5 to 1           | ADDR to VDD               | 0x7                |
| J9       | MAX98363BDEV# MAX98363DDEV# | 5 to 4           | ADDR to VDD through 100kΩ | 0x8                |
| J9       | MAX98363BDEV# MAX98363DDEV# | 5 to 2           | ADDR to GND through 100kΩ | 0x9                |

## Evaluates: MAX98363 (A/B/C/D)

bottom of the DEV board and can be connected to the MAX98363's DVDDIO pin by applying a shunt to header J3.  Or  a  DVDDIO  supply  can  be  applied  externally  to the  DEV  board,  to  do  this,  remove  J3  and  apply  the voltage  directly  to  the  DVDDIO  test  point.  Note  for  the MAX98363C/D to operate, a voltage between 1.7V and 1.9V must be applied to DVDDIO.

When measuring quiescent current on the MAX98363C/ MAX98363D, disable the LDO by removing the 0Ω resis -tor  R8.  To  disable  the  LDO  and  remove  the  current  it draws from VDD, remove the 0Ω resistor R8 located at the bottom of the DEV board and depopulate J3 on the DEV board.

## Selecting the DEV Board Jumper Enable

The  jumper  J2  controls  the  EN  pin.  The  MAX98363 device features a hardware shutdown mode activated by connecting the EN pin to GND. This is the lowest power state, where all device registers are returned to their PoR values and the SoundWire control interface is disabled. To exit the hardware shutdown mode, first move jumper J2 from the GND to the VDD position, then use a SoundWire Manager to initialize the device. See Table 1 for reference.

Evaluates: MAX98363 (A/B/C/D)

## Table 3. DVDDIO Jumper Configuration-MAX98363C/MAX98363D Only (J3)

| HEADER   | SHUNT POSITION                 | DESCRIPTION                                                                                                          |
|----------|--------------------------------|----------------------------------------------------------------------------------------------------------------------|
| J3       | Open 1.8V LDO Supply to DVDDIO | Power the device's DVDDIO using external supply. On-board 1.8V LDO U2 is used to supply MAX98363C/ MAX98363D DVDDIO. |

## Unique ID Address

The 4-bit SoundWire peripheral device unique ID is pin configurable  and  has  five  possible  combinations  for  a given part number. A combination of part number and pin configurability allows up to ten possible combinations of unique IDs. To select a specific unique ID, use J9 to con -nect the ADDR pin as shown in Table 2.

## For MAX98363C/MAX98363D Only, External DVDDIO

For  proper  operation  of  the  MAX98363C/D,  a  DVDDIO voltage  must  be  applied.  If  an  external  DVDDIO  bench supply is to be applied, do not populate J3. If the external LDO located on the DEV board (U2) is to be used, then apply a shunt to J3 (see Table 3).

## SoundWire Header (J6)

Header  J6  provides  direct  access  to  the  MAX98363's SoundWire Clock and Data inputs, and facilitates evaluation with audio test equipment I/O (see Table 4).

## Speaker Output

The  speaker  output  of  the  MAX98363  is  routed  to the  OUTP  and  OUTN  connections  on  the  DEV  board.

## Ordering Information

| PART NUMBER   | DESCRIPTION                                                               |
|---------------|---------------------------------------------------------------------------|
| MAX98363ADEV# | Evaluation Board, SoundWire Unique ID 0x0 to 0x4                          |
| MAX98363BDEV# | Evaluation Board, SoundWire Unique ID 0x5 to 0x9                          |
| MAX98363CDEV# | Evaluation Board, External LDO for DVDDIO, SoundWire Unique ID 0x0 to 0x4 |
| MAX98363DDEV# | Evaluation Board, External LDO for DVDDIO, SoundWire Unique ID 0x5 to 0x9 |

# Denotes an RoHS-compliant device.

## Table 4. SoundWire Header (J6)

| SIGNAL          |   PIN |   PIN | SIGNAL   |
|-----------------|-------|-------|----------|
| SoundWire Clock |     4 |     3 | GND      |
| SoundWire Data  |     2 |     1 | GND      |

The  DEV  board  is,  by  default,  assembled  to  allow  the MAX98363 output to connect directly to a speaker load without the need for filtering.

## EMI Filter

When long speaker cables are used with the MAX98363 output  (exceeding  ≈12in  (30  cm)),  install  a  ferrite  bead plus  capacitor  filter  to  prevent  excessive  EMI  radiation. Although  it  is  best  to  choose  filter  components  based on  EMI  test  results,  the  combination  of  100pF  capaci -tors  (C9,  C10)  and  ferrite  beads  (FB1,  FB2)  generally work  well.  An  example  ferrite  bead  to  consider  is  the Murata BLM18SG331TN1D. Before adding the filters to the design, first remove the small PCB traces shorting the pads of FB1 and FB2 (see the MAX98363 WLP EV Kit Development Board Schematic and the MAX98363 WLP EV Kit Development Board Layout Diagrams).

│

## PCB Design Files

The  following  sections  contain  detailed  information  on  the  MAX98363A/MAX98363B  and  MAX98363C/MAX98363D development board BOM (Bill of Materials), schematic, and layout.

## MAX98363A/MAX98363B WLP Development Board Bill of Materials

|   # |   QUANTITY | DESIGNATOR         | DESCRIPTION                                                                                  | VALUE   | VOLTAGE   | TOLERANCE   | POWER   | DIELECTRIC   | PACKAGE   | MANUFACTURER         | MANUFACTURER PN             | MOUSER               | DigiKey          |
|-----|------------|--------------------|----------------------------------------------------------------------------------------------|---------|-----------|-------------|---------|--------------|-----------|----------------------|-----------------------------|----------------------|------------------|
|   1 |          1 | C3                 | Capacitor / Ceramic / 2.2µF / 10V / 10% / X5R / 0201                                         | 2.2µF   | 10V       | 10%         |         | X5R          | 201       | Murata               | GRM033R61A225KE47D          | 81-GRM033R61A225KE7D | 490-13227-1-ND   |
|   2 |          1 | C4                 | Cap / 10µF / 10V / 10% / X5R / 0603                                                          | 10µF    | 10V       | 10%         |         | X5R          | 603       | Murata               | GRM188R61A106KE69D          | 81-GRM188R61A106KE9D | 490-10474-1-ND   |
|   3 |          1 | C5                 | Cap / 100nF / 16V / 10% / X7R / 0402                                                         | 100nF   | 16V       | 10%         |         | X7R          | 402       | Murata               | GCM155R71C104KA55D          | 81-GCM155R71C104KA5D | 490-4759-1-ND    |
|   4 |          1 | J1                 | Updated EVkit Daughter Card Header                                                           |         |           |             |         |              |           | Samtec               | TSW-113-08-G-T-RA           |                      |                  |
|   5 |          1 | J2                 | Header, 3x1 Position, 0.1" Pitch                                                             |         |           |             |         |              |           | Samtec               | TSW-103-07-G-S              | 200-TSW10307GS       | SAM1029-03-ND    |
|   6 |          4 | J5, J7, J14, J15   | Binding Post                                                                                 |         |           |             |         |              |           | Johnson              | 111-2223-001                |                      | J587-ND          |
|   7 |          1 | J6                 | Header, 2x2 Position, 0.1" Pitch                                                             |         |           |             |         |              |           | Samtec               | TSW-102-07-G-D              | 200-TSW10207GD       | SAM1028-02-ND    |
|   8 |          1 | J9                 | Header / 0.1" Pitch / Unshrouded / 5-pin / Breakaway / Cross Pattern                         |         |           |             |         |              |           | Molex                | 22-28-4055                  | 538-22-28-4055       | WM24204-ND       |
|   9 |          1 | J10                | Power Barrel Connector Jack 2.10mm ID (0.083"), 5.50mm OD (0.217") Through Hole, Right Angle |         |           |             |         |              |           | MPD                  | EJ503A                      |                      | EJ503A-ND        |
|  10 |          3 | J13, J16, J17      | Wire Loop / 20AWG / Tinned Copper / 25mm Length                                              |         |           |             |         |              |           |                      | 20TCW                       |                      | 2328-20TCW-ND    |
|  11 |          1 | R2                 | Resistor / 30.1kΩ / 1% / 1/16W / 0402                                                        | 30.1k   |           | 1%          | 1/16W   |              | 402       | Yageo                | RC0402FR-0730K1L            | 603-RC0402FR-0730K1L | 311-30.1KLRCT-ND |
|  12 |          2 | R3, R4             | Resistor / 0Ω / 1% / 1/16W / 0402                                                            | 0       |           | 1%          | 1/16W   |              | 402       | Yageo                | RC0402FR-070RL              | 603-RC0402FR-070RL   | 311-0.0LRCT-ND   |
|  13 |          2 | R6, R7             | Resistor / 100kΩ / 1% / 1/16W / 0402                                                         | 100k    |           | 1%          | 1/16W   |              | 402       | Yageo                | RC0402FR-07100KL            | 603-RC0402FR-07100KL | 311-100KLRCT-ND  |
|  14 |          4 | SC1, SC2, SC3, SC4 | Screw / 4-40 x 1/4" / Phillips / Pan Head                                                    |         |           |             |         |              |           | McMaster-Carr        | 91772A106                   |                      |                  |
|  15 |          4 | ST1, ST2, ST3, ST4 | Standoff / 4-40 x 1/2" / Female-Female / 1/4" Hex                                            |         |           |             |         |              |           | McMaster-Carr        | 91780A164                   |                      |                  |
|  16 |          2 | TP1, TP11          | Test Point / Compact / White                                                                 |         |           |             |         |              |           | Keystone Electronics | 5007                        | 534-5007             | 5007K-ND         |
|  17 |          2 | TP2, TP3           | Test Point / Compact / Yellow                                                                |         |           |             |         |              |           | Keystone Electronics | 5009                        | 534-5009             | 5009K-ND         |
|  18 |          1 | TP4                | Test Point / Compact / Orange                                                                |         |           |             |         |              |           | Keystone Electronics | 5008                        | 534-5008             | 5008K-ND         |
|  19 |          3 | TP12, TP13, TP15   | Test Point / Multi-Purpose / Black                                                           |         |           |             |         |              |           | Keystone Electronics | 5011                        | 534-5011             | 5011K-ND         |
|  20 |          1 | TP14               | Test Point / Multi-Purpose / Red                                                             |         |           |             |         |              |           | Keystone Electronics | 5010                        | 534-5010             | 5010K-ND         |
|  21 |          1 | U1                 | Tiny, Cost-effective Soundwire Class-D Amplifier                                             |         |           |             |         |              | WLP9      | ADI                  | MAX98363AEWL+ MAX98363BEWL+ |                      |                  |

## MAX98363A/MAX98363B WLP Development Board Schematic

<!-- image -->

│

Evaluates: MAX98363 (A/B/C/D)

Evaluates: MAX98363 (A/B/C/D)

## MAX98363A/MAX98363B WLP Development Board PCB Layout Diagrams

<!-- image -->

MAX98363A/MAX98363B Dev Board Component Placement Guide-Top Silkscreen

<!-- image -->

MAX98363A/MAX98363B Dev Board PCB Layout-Layer 2

MAX98363A/MAX98363B Dev Board PCB Layout-Top Layer

<!-- image -->

MAX98363A/MAX98363B Dev Board PCB Layout-Layer 3

<!-- image -->

│

Evaluates: MAX98363 (A/B/C/D)

## MAX98363A/MAX98363B WLP Development Board PCB Layout Diagrams (continued)

MAX98363A/MAX98363B Dev Board PCB Layout-Bottom Layer

<!-- image -->

MAX98363A/MAX98363B Dev Board Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

## MAX98363C/MAX98363D WLP Development Board Bill of Materials

|   # |   QUANTITY | DESIGNATOR            | DESCRIPTION                                                                                  | VALUE   | VOLTAGE   | TOLERANCE   | POWER   | DIELECTRIC   | PACKAGE   | MANUFACTURER         | MANUFACTURER PN             | MOUSER               | DigiKey             |
|-----|------------|-----------------------|----------------------------------------------------------------------------------------------|---------|-----------|-------------|---------|--------------|-----------|----------------------|-----------------------------|----------------------|---------------------|
|   1 |          1 | C3                    | Capacitor / Ceramic / 100nF / 10V / 10% / X5R / 0201                                         | 100nF   | 10V       | 10%         |         | X5R          | 201       | Murata               | GRM033R61A104KE15D          | 81-GRM033R61A104KE5D | 490-5881-1-ND       |
|   2 |          3 | C4, C11, C12          | Cap / 10µF / 10V / 10% / X5R / 0603                                                          | 10µF    | 10V       | 10%         |         | X5R          | 603       | Murata               | GRM188R61A106KE69D          | 81-GRM188R61A106KE9D | 490-10474-1-ND      |
|   3 |          2 | C5, C13               | Cap / 100nF / 16V / 10% / X7R / 0402                                                         | 100nF   | 16V       | 10%         |         | X7R          | 402       | Murata               | GCM155R71C104KA55D          | 81-GCM155R71C104KA5D | 490-4759-1-ND       |
|   4 |          1 | J1                    | Updated EVkit Daughter Card Header                                                           |         |           |             |         |              |           | Samtec               | TSW-113-08-G-T-RA           |                      |                     |
|   5 |          1 | J2                    | Header, 3x1 Position, 0.1" Pitch                                                             |         |           |             |         |              |           | Samtec               | TSW-103-07-G-S              | 200-TSW10307GS       | SAM1029-03-ND       |
|   6 |          1 | J3                    | Header, 2x1 Position, 0.1" Pitch                                                             |         |           |             |         |              |           | Samtec               | TSW-102-07-G-S              | 200-TSW10207GS       | SAM1029-02-ND       |
|   7 |          4 | J5, J7, J14, J15      | Binding Post                                                                                 |         |           |             |         |              |           | Johnson              | 111-2223-001                |                      | J587-ND             |
|   8 |          1 | J6                    | Header, 2x2 Position, 0.1" Pitch                                                             |         |           |             |         |              |           | Samtec               | TSW-102-07-G-D              | 200-TSW10207GD       | SAM1028-02-ND       |
|   9 |          1 | J9                    | Header / 0.1" Pitch / Unshrouded / 5-pin / Breakaway / Cross Pattern                         |         |           |             |         |              |           | Molex                | 22-28-4055                  | 538-22-28-4055       | WM24204-ND          |
|  10 |          1 | J10                   | Power Barrel Connector Jack 2.10mm ID (0.083"), 5.50mm OD (0.217") Through Hole, Right Angle |         |           |             |         |              |           | MPD                  | EJ503A                      |                      | EJ503A-ND           |
|  11 |          3 | J13, J16, J17         | Wire Loop / 20AWG / Tinned Copper / 25mm Length                                              |         |           |             |         |              |           |                      | 20TCW                       |                      | 2328-20TCW-ND       |
|  12 |          1 | R2                    | Resistor / 30.1kΩ / 1% / 1/16W / 0402                                                        | 30.1k   |           | 1%          | 1/16W   |              | 402       | Yageo                | RC0402FR-0730K1L            | 603-RC0402FR-0730K1L | 311-30.1KLRCT-ND    |
|  13 |          3 | R3, R4, R8            | Resistor / 0Ω / 1% / 1/16W / 0402                                                            | 0       |           | 1%          | 1/16W   |              | 402       | Yageo                | RC0402FR-070RL              | 603-RC0402FR-070RL   | 311-0.0LRCT-ND      |
|  14 |          2 | R6, R7                | Resistor / 100kΩ / 1% / 1/16W / 0402                                                         | 100k    |           | 1%          | 1/16W   |              | 402       | Yageo                | RC0402FR-07100KL            | 603-RC0402FR-07100KL | 311-100KLRCT-ND     |
|  15 |          4 | SC1, SC2, SC3, SC4    | Screw / 4-40 x 1/4" / Phillips / Pan Head                                                    |         |           |             |         |              |           | McMaster-Carr        | 91772A106                   |                      |                     |
|  16 |          4 | ST1, ST2, ST3, ST4    | Standoff / 4-40 x 1/2" / Female-Female / 1/4" Hex                                            |         |           |             |         |              |           | McMaster-Carr        | 91780A164                   |                      |                     |
|  17 |          2 | TP1, TP11             | Test Point / Compact / White                                                                 |         |           |             |         |              |           | Keystone Electronics | 5007                        | 534-5007             | 5007K-ND            |
|  18 |          2 | TP2, TP3              | Test Point / Compact / Yellow                                                                |         |           |             |         |              |           | Keystone Electronics | 5009                        | 534-5009             | 5009K-ND            |
|  19 |          1 | TP4                   | Test Point / Multi-Purpose / Orange                                                          |         |           |             |         |              |           | Keystone Electronics | 5013                        | 534-5013             | 5013K-ND            |
|  20 |          4 | TP5, TP12, TP13, TP15 | Test Point / Multi-Purpose / Black                                                           |         |           |             |         |              |           | Keystone Electronics | 5011                        | 534-5011             | 5011K-ND            |
|  21 |          1 | TP14                  | Test Point / Multi-Purpose / Red                                                             |         |           |             |         |              |           | Keystone Electronics | 5010                        | 534-5010             | 5010K-ND            |
|  22 |          1 | U1                    | Tiny, Cost-effective Soundwire Class-D Amplifier                                             |         |           |             |         |              | WLP9      | ADI                  | MAX98363CEWL+ MAX98363DEWL+ |                      |                     |
|  23 |          1 | U2                    | Low-Dropout, 300mA Linear Regulators in SOT23 - 1.8V                                         |         | 1.8V      |             |         |              | SOT23-5   | Maxim/ADI            | MAX8887EZK18+               | 700-MAX8887EZK18T    | MAX8887EZK18+TCT-ND |

## MAX98363C/MAX98363D WLP Development Board Schematic

<!-- image -->

Evaluates: MAX98363 (A/B/C/D)

## MAX98363C/MAX98363D WLP Development Board PCB Layout Diagrams

<!-- image -->

MAX98363C/MAX98363D Dev Board Component Placement Guide-Top Silkscreen

<!-- image -->

MAX98363C/MAX98363D Dev Board PCB Layout-Layer 2

MAX98363C/MAX98363D Dev Board PCB Layout-Top Layer

<!-- image -->

MAX98363C/MAX98363D Dev Board PCB Layout-Layer 3

<!-- image -->

│

Evaluates: MAX98363 (A/B/C/D)

## MAX98363C/MAX98363D WLP Development Board PCB Layout Diagrams (continued)

MAX98363C/MAX98363D Dev Board PCB Layout-Bottom Layer

<!-- image -->

MAX98363C/MAX98363D Dev Board Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

## MAX98363 Development Board

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 12/22           | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX98363 (A/B/C/D)