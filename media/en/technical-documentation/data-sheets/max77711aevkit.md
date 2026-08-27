<!-- lastmod 2022-08-02 -->
## MAX77511/MAX77711 Evaluation Kit

## General Description

The MAX77511/MAX77711 evaluation kit (EV kit) is a fully assembled  and  tested  printed  circuit  board  (PCB)  that demonstrates either the MAX77511 or MAX77711 powermanagement integrated circuit (IC).

The EV kit is a step-down voltage regulator circuit using the  IC  that  allows  for  easy  evaluation  of  each  feature. The  circuit  is  capable  of  2.3V  to  10V  input,  3A/phase continuous load, and output voltage adjustable between 0.25V and 5.2V. The EV kit evaluates either MAX77511 or MAX77711. Both ICs are the same except MAX77711 includes a 300mA LDO.

The EV kit supports evaluation of each converter phase (Ф) configuration:

- 4Ф (single 12A output)
- 3Ф + 1Ф (9A output + 3A output)
- 2Ф + 2Ф (6A output + 6A output)
- 2Ф + 1Ф + 1Ф (6A output + 3A output + 3A output)
- 1Ф + 1Ф + 1Ф + 1Ф (four 3A outputs)

Three  on-board  transient  loads  allow  users  to  exercise the full capability of the buck regulator or LDO. Windowsbased software provides  a  friendly  graphical  user  interface (GUI) as well as a detailed register-based interface to exercise all the features of the IC.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

Evaluates: MAX77511/MAX77711

## Benefits and Features

- Proven PCB Reference Design and Layout
- Fully Assembled and Tested
- Easy Evaluation of All Phase Configurations
- 0Ω Resistors Quickly Create Multiphase Configurations
- Jumpers and Test Points for ENSEQ, GPIOs, nRSTIO, and PHCFG
- GUI Drives I 2 C Interface for Optional Software Control
- Inputs Separatable with 0Ω Resistors for Prototyping
- USB to I 2 C Converter Allows Easy Communication with Windows PC
- Windows Software GUI Controls Registers
- Level Translator (MAX3395) Allows for Adjusting I 2 C Bus Voltage from 1.8V to 3.3V
- On-Board Transient Load Emulates System Loading
- Covers Full 12A Load Range (with 4ϕ Configuration)
- Control Using an External Function Generator

Ordering Information appears at end of data sheet.

<!-- image -->

Figure 1. MAX77511/MAX77711 EV Kit Photo

<!-- image -->

Figure 2. Simplified EV Kit Block Diagram

<!-- image -->

│

## Evaluates: MAX77511/MAX77711

Figure 3. MAX77511/MAX77711 EV Kit Top View

<!-- image -->

Figure 4. MAX77511/MAX77711 EV Kit Bottom View

<!-- image -->

│

Evaluates: MAX77511/MAX77711

Table 1. Default Shunt Positions and Jumper Descriptions

| REFERENCE DESIGNATOR   | DEFAULT POSITION   | FUNCTION                                                                                                                                                                                                                                                                                  |
|------------------------|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J101                   | 2-3                | 1-2: Connects VLOGIC to the 3.3V EV kit logic rail 2-3: Connects VLOGIC to the 1.8V EV kit logic rail (V LOGIC connects to V IO through a 0Ω resistor)                                                                                                                                    |
| J200                   | 1-2                | Use pin 2 to access the gate of the Q200 transient load MOSFET (LOADA).                                                                                                                                                                                                                   |
| J210                   | 1-2                | Use pin 2 to access the gate of the Q2 transient load MOSFET (LOADB).                                                                                                                                                                                                                     |
| J5                     | 1-2                | Use pin 2 to access the gate of the Q1 transient load MOSFET (LOADF).                                                                                                                                                                                                                     |
| J100                   | Open               | Evaluation header. Do not connect shunts to J100.                                                                                                                                                                                                                                         |
| J7 (critical)          | 1-2                | 1-2: Connects PHCFG0 to V DD (logic-high). 2-3: Connects PHCFG0 to GND (logic-low). OPEN: PHCFG0 = OPEN (high-Z). Sets phase/channel configuration and I 2 C device address along with PHCFG1. Phase- connecting 0Ω resistors must populate to match selected configuration. See Table 2. |
| J11 (critical)         | 1-2                | 1-2: Connects PHCFG1 to V DD (logic-high). 2-3: Connects PHCFG1 to GND (logic-low). OPEN: PHCFG1 = OPEN (high-Z). Sets phase/channel configuration and I 2 C device address along with PHCFG0. Phase- connecting 0Ω resistors must populate to match selected configuration. See Table 2. |
| J8                     | 2-3                | 1-2: Connects GPIO1 to V IO 2-3: Connects GPIO1 to GND                                                                                                                                                                                                                                    |
| J12                    | 2-3                | 1-2: Connects GPIO2 to V IO 2-3: Connects GPIO2 to GND                                                                                                                                                                                                                                    |
| J9                     | 2-3                | 1-2: Connects GPIO3 to V IO 2-3: Connects GPIO3 to GND                                                                                                                                                                                                                                    |
| J13                    | 2-3                | 1-2: Connects GPIO4 to V IO 2-3: Connects GPIO4 to GND                                                                                                                                                                                                                                    |
| J10                    | 2-3                | 1-2: Connects GPIO5 to V IO 2-3: Connects GPIO5 to GND                                                                                                                                                                                                                                    |
| J14                    | 2-3                | 1-2: Connects GPIO6 to V IO 2-3: Connects GPIO6 to GND                                                                                                                                                                                                                                    |
| J6                     | 2-3                | 1-2: Connects ENSEQ to SYS 2-3: Connects ENSEQ to GND                                                                                                                                                                                                                                     |
| J1 (critical)          | 1-2                | 1-2: Pulls nRSTIO up to V DD through R29. 2-3: Pulls nRSTIO up to V LOGIC through R29. Do not leave open. R29 is a 100kΩ pullup. V LOGIC connects to V IO through a 0Ω resistor.                                                                                                          |

│

## EV Kit Default Configuration

Note that default V OUT  targets, LDO availability, and GPIO special function mapping depends on U1 ordering option. The following summary is true for U1 = MAX77711AEWB. Carefully check the bill of materials (BOM) and ordering slip  to  verify  the  defaults  associated  with  each  device under test (DUT). Contact the factory for help.

- VIN (SYS) = 2.3V to 10V
- 2Ф + 1Ф + 1Ф phase/channel configuration. Buck 1 is dual-phase (6A), utilizing both L1 and L2. Buck 3 and buck 4 are single-phase (3A each).
- VOUT1 = 0.7V, V OUT3  = 1.8V, and V OUT4  = 3.3V. VOUT2 is 1.2V, but buck 2 is not configured as a stand-alone channel by default. (Buck 1 is dualphase, using both L1 and L2.)
- The 300mA LDO is available for evaluation (U1 is MAX77711).
- Each buck is in Turbo SKIP mode.
- Flexible power sequencer off (ENSEQ = 0).
- Device wake source is V IO  valid (from USB).
- GPIO1/2/3/4 map to buck 1/2/3/4 enable special functions, respectively. GPIO2 (buck 2 enable) is a don't care by default because buck 2 is not configured as a stand-alone channel by default.
- GPIO5 maps to LDO enable by default.
- GPIO6 maps to flexible power sequencer slot 12 (last slot) digital output. Use GPIO6 to signal sequence completion.

## Quick-Start

Follow this procedure to familiarize yourself with the EV kit.

## Required Equipment

- MAX77511/MAX77711 EV kit
- Windows-based PC
- Power supply (10V, 8A capability recommended but not required)
- Two digital voltmeter (DVM)
- Ammeter
- Micro-USB cable
- GUI

## Evaluates: MAX77511/MAX77711

Note: In the following sections, software related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

This  procedure  is  true  for  U1  =  MAX77711AEWB. Carefully check the BOM and ordering slip to verify the default V OUT s associated with the part number you are evaluating. Contact Maxim for help with this procedure.

- 1) Install GUI software. Visit the product webpage at www.maximintegrated.com/MAX77711 and navigate to Design Resources to download the latest version of the EV kit software. Save the EV kit software in a temporary folder and decompress the ZIP file. Run the .EXE file. Use the same software to evaluate either MAX77511 or MAX77711.
- 2) Install the EV kit shunts per Table 1.
- 3) Ensure R38 0Ω phase connecting resistor is in -stalled. This resistor connects OUT1 to OUT2 for buck 1's dual-phase configuration.
- 4) Connect a DVM to the SYS and GND1 terminals to measure input voltage.
- 5) Connect a DVM to the OUT1 and GND2 terminals to measure buck 1's output voltage.
- 6) Connect a Micro-B USB cable between the EV kit's USB port (J102) and your Windows-based PC.
- 7) Apply a power supply set to 0V (100mA current limit) through an ammeter (10mA range) across the SYS and GND1 terminals of the EV kit. Turn the supply on and increase the voltage to 7.4V
- 8) Confirm that the ammeter connected in series with the power supply reads the expected standby supply current of the IC and EV kit (between 20µA and 60µA). At this point, no bucks should be on but the I 2 C serial interface is ready (standby state).
- 9) On your PC, open the GUI and click the Device button in the menu bar. Click the Connect button in the Device button's drop-down list. Wait for the device to respond and in the Synchronize window, press the Read and Close button.
- 10)  Navigate to the Status control tab under Global Resources . Find the Phase Configuration Status and verify that it reads back 0x5 = (1,1) 2Ф + 1Ф + 1Ф . If this field reads back anything else, then dis -able the power supply and go back and check steps 2 and 3 of this procedure.
- 11)  Increase the power supply's current limit from 100mA to 1A or greater.

## MAX77511/MAX77711 Evaluation Kit

- 12)  Change the series input ammeter's range to 1A or greater.
- 13)  Navigate to the Buck 1 control tab under Buck Configuration . In Buck1 Configuration A , find the Buck 1 Enable Control field (controlling bitfield BEN1[3:0]). In the drop-down list, change this field to 0x1 = Forced Enabled and click Write .
- 14) Confirm that the voltmeter connected to OUT1 reads 0.7V. At this point, only buck 1 (2Ф) should be on.
- 15) Confirm the input ammeter is reading the correct Turbo SKIP no-load supply current (approximately 350µA).
- 16)  Locate jumper J6 (ENSEQ) and change its shunt position to pin 1-2. This activates the flexible power sequencer (FPS) and any resource assigned to it. Buck 3, buck 4, and LDO are assigned to the FPS by default when U1 = MAX77711AEWB.
- 17) Use either DVM to confirm OUT3 measures 1.8V. Confirm OUT4 measures 3.3V. Note that LDO re -quires a separate power input (between 1.25V and 5.5V) to INLDO to operate. (The LDO can not power from a 7.4V SYS.) Connect OUT4 (3.3V) to INLDO to quickly verify the LDOs output is 1.8V.

This concludes the Quick Start procedure. Users are now encouraged to explore the device and its register settings with the GUI. Reconfigure the EV kit's phase configuration by consulting the Phase Configuration Programming section.  See  the Software section  for  more  information about the GUI.

## Table 2. EV Kit Buck Phase Configuration

| PHCFG1 (J7)   | PHCFG0 (J11)   | PHASE (Ф) CONFIGURATION       | R38   | R39   | R40   | R49   | R41 1               | R42 1               | R43 2                    | R44 2                    |
|---------------|----------------|-------------------------------|-------|-------|-------|-------|---------------------|---------------------|--------------------------|--------------------------|
| 0             | 0              | 4Ф (1 output)                 | 0Ω    | 0Ω    | 0Ω    | 0Ω    | 0Ω                  | 0Ω                  | 0Ω                       | 0Ω                       |
| 0             | 1              | 3Ф + 1Ф (2 outputs)           | 0Ω    | OPEN  | OPEN  | 0Ω    | 0Ω                  | 0Ω                  | 0Ω in either, not both 2 | 0Ω in either, not both 2 |
| 0             | OPEN           | 2Ф + 2Ф (2 outputs)           | 0Ω    | OPEN  | 0Ω    | OPEN  | 0Ω                  | 0Ω                  | 0Ω                       | 0Ω                       |
| 1             | 0              | 2Ф + 1Ф + 1Ф                  | 0Ω    | OPEN  | OPEN  | OPEN  | 0Ω                  | 0Ω                  | 0Ω in either, not        | 0Ω in either, not        |
| 1             | 1              | (3 outputs)                   | 0Ω    | OPEN  | OPEN  | OPEN  | 0Ω                  | 0Ω                  | both 2                   | both 2                   |
| 1             | OPEN           | 1Ф + 1Ф + 1Ф + 1Ф (4 outputs) | OPEN  | OPEN  | OPEN  | OPEN  | 0Ω in either, not 1 | 0Ω in either, not 1 | 0Ω in either, not        | 0Ω in either, not        |
| OPEN          | 0              | 1Ф + 1Ф + 1Ф + 1Ф (4 outputs) | OPEN  | OPEN  | OPEN  | OPEN  |                     |                     |                          |                          |
| OPEN          | 1              | 1Ф + 1Ф + 1Ф + 1Ф (4 outputs) | OPEN  | OPEN  | OPEN  | OPEN  | both both 2         | both both 2         | both both 2              | both both 2              |
| OPEN          | OPEN           | 1Ф + 1Ф + 1Ф + 1Ф (4 outputs) | OPEN  | OPEN  | OPEN  | OPEN  |                     |                     |                          |                          |

Note 1: Populating both R41 and R42 connects OUT1 to OUT2. Do not install both when buck 1 is single-phase.

Note 2: Populating both R43 and R44 connects OUT3 to OUT4. Do not install both when buck 4 is single-phase.

## Evaluates: MAX77511/MAX77711

## Hardware

## Phase Configuration Programming

Carefully take the following three steps to configure the phase configuration of the EV kit:

- 1) While the EV kit is unpowered, configure the PHCFG1/0 pins (jumpers J7 and J11) in the desired positions to program the IC for a given phase configuration. See Table 2.
- 2) Configure the 0Ω resistors on the EV kit (R38 through R44, and R49) for the phase configuration programmed in step 1. See Table 2 and Figure 5.
- 3) If multiphase configurations are formed, ensure that all inductors of the multiphase buck are the same value (0.47µH for RNGx = 0, 1.5µH for RNGx = 1).

Make  sure  the  programmed  configuration  (PHCFG1 and  PHCFG0)  matches  the  0Ω  resistor  configuration. Mismatch impairs EV kit function. Be aware that the load connecting 0Ω resistors (R41 through R44) can also short outputs together.

The  IC  evaluates  PHCFG1/0  pin  status  when  SYS  is valid  and  the  IC  exits  shutdown  (V DD   turns  on).  The decoded phase configuration latches until next shutdown/ wake cycle. The device wakes from shutdown whenever VIO is valid or ENSEQ is logic high. See the MAX77511/ MAX77711  data  sheet  ( Top-Level section)  for  more information.

Figure 5. EV Kit 0Ω Installation for Different Phase Configurations

<!-- image -->

│

## MAX77511/MAX77711 Evaluation Kit

The buck feedback configuration is specific to the phase configuration. For example, a quad-phase (4Ф) buck reg -ulates a single output voltage using every inductor (L1-L4) but only the SNS1+/SNS1- pins for feedback. (See Table 3 for  buck  naming  conventions.)  Unused  feedback  pins should  connect  to  ground  in  the  final  application  schematic but may connect to the output voltage during EV kit evaluation with no consequence. See the Buck Feedback Sense Location section for more information.

Only the master buck I 2 C registers control the regulator in multiphase configurations. See Table 3. For example, a 2Ф + 2Ф configuration utilizes L1 and L2 to create buck 1 (master 1) and L3 and L4 to create buck 3 (master 3). In this example, buck 2 and buck 4 are not configured as stand-alone channels. Register control fields  for  buck  2 and buck 4 are don't care .

Each inductor under a single buck's control must be the same value (0.47µH for RNGx = 0 and 1.5µH for RNGx = 1).

## Buck Feedback Configuration

Buck  feedback  configuration  is  specific  to  the  selected phase  configuration.  Each  of  the  four  bucks  in  the MAX77511/MAX77711  have  differential  feedback  inputs (SNSx+ and SNSx-). Only the master buck feedback pins

## Evaluates: MAX77511/MAX77711

need to connect to the output voltage to ensure regulation (see Table 3). Unused or slave phase feedback pins can connect to the output voltage during evaluation at no consequence.

For  example,  a  2Ф  +  2Ф  configuration  creates  buck  1 (using  L1  and  L2)  and  buck  3  (using  L3  and  L4).  Buck 1's feedback is SNS1+ and SNS1-. Buck 3's feedback is SNS3+ and SNS3-. In this example, buck 2 and buck 4 are  not  configured  as  stand-alone  channels.  Therefore, SNS2+/SNS2- and SNS4+/SNS4- are don't care but can connect to their corresponding multiphase outputs with no consequence. Connect unused or slave phase feedback pins to ground in the final application schematic. Use EV kit 0Ω resistors R34 through R37 to strap positive sense inputs to ground for evaluation.

## Buck Feedback Sense Location

The EV kit uses additional 0Ω resistors to modify the feed -back routing between the IC and the output voltage sense location.  In  general,  single-phase  configurations  should take feedback close to the corresponding output capacitor as close to the IC as possible (this is the default EV kit configuration). Optimize multiphase buck performance by changing the feedback routing using Table 4.

Table 3. Buck Output Naming Convention and Feedback

| PHASE (Ф) CONFIGURATION   | NAMING CONVENTION AND PHASES USED     | FEEDBACK INPUTS   |
|---------------------------|---------------------------------------|-------------------|
| 4Ф                        | Buck 1 (4Ф) uses ALL (L1, L2, L3, L4) | SNS1±             |
| 3Ф + 1Ф                   | Buck 1 (3Ф) uses L1, L2, L3           | SNS1±             |
| 3Ф + 1Ф                   | Buck 4 (1Ф) uses L4                   | SNS4±             |
| 2Ф + 2Ф                   | Buck 1 (2Ф) uses L1, L2               | SNS1±             |
| 2Ф + 2Ф                   | Buck 3 (2Ф) uses L3, L4               | SNS3±             |
| 2Ф + 1Ф + 1Ф              | Buck 1 (2Ф) uses L1, L2               | SNS1±             |
| 2Ф + 1Ф + 1Ф              | Buck 3 (1Ф) uses L3                   | SNS3±             |
| 2Ф + 1Ф + 1Ф              | Buck 4 (1Ф) uses L4                   | SNS4±             |
| 1Ф + 1Ф + 1Ф + 1Ф         | Buck 1 (1Ф) uses L1                   | SNS1±             |
| 1Ф + 1Ф + 1Ф + 1Ф         | Buck 2 (1Ф) uses L2                   | SNS2±             |
| 1Ф + 1Ф + 1Ф + 1Ф         | Buck 3 (1Ф) uses L3                   | SNS3±             |
| 1Ф + 1Ф + 1Ф + 1Ф         | Buck 4 (1Ф) uses L4                   | SNS4±             |

## MAX77511/MAX77711 Evaluation Kit

Buck  2  and  buck  4  can  only  be  configured  as  singlephase bucks (see Table 3 for convention). Therefore, the only useful feedback routing option for buck 2 and 4 is to the corresponding buck's nearest output capacitor. Buck 2 uses resistors R31 and R46 to route feedback. Buck 4 uses R33 and R48.

## On-Board Transient Loads

The  EV  kit  includes  three  on-board  transient  loads ( Figure 6 ). Two high current loads (LOADA and LOADB) support 6A each. One fine current load (LOADF) supports 150mA for evaluating the LDO.

The 0Ω resistors R41 and R42 connect OUT1 and OUT2 to LOADA, respectively. The 0Ω resistors R43 and R44 connect  OUT3  and  OUT4  to  LOADB,  respectively.  Be aware  that  R41  through  R44  may  connect  the  various buck outputs together.

## Evaluates: MAX77511/MAX77711

Use  LOADF  by  connecting  a  test  lead  between  the LOADF test point and the desired regulator output.

The  on-board  transient  loads  can  be  used  to  generate fast  load  transients.  Remove  the  jumper  of  the  desired MOSFET gate (J200, J5, or J210) and connect a function  generator  output  between  pin  2  and  GND  (pin  1  is unused). To start, drive the gate of the MOSFET with a manually triggered 250µs pulse from 0V to 2.2V. Adjust the voltage levels of the pulse to change the load transient  current  levels. Adjust  the  slew  rate  of  the  function generator  to  change  the  rising  and  falling  edges  of  the pulse.  Manual  pulsing  is  recommended  to  reduce  heat accumulating in the load circuit and prevent damage. If a pulse train is required, ensure that the frequency, duty cycle,  and  transient  levels  keep  the  average  current  at or below 1A.  Use the VLSA or VLSB test points on the EV kit to convert the load transient current into a voltage across the 0.1Ω sense resistor.

## Table 4. Multiphase Buck Feedback Recommended Routing

Figure 6. Transient Load Simplified Diagram

| MULTIPHASE BUCK   | PHASE CONFIGURATION   | INSTALL FEEDBACK ROUTING RESISTORS   |
|-------------------|-----------------------|--------------------------------------|
| Buck 1            | 4Ф                    | R30, R45                             |
| Buck 1            | 3Ф                    | R30, R45                             |
| Buck 1            | 2Ф                    | R51, R50                             |
| Buck 1            | 1Ф                    | R30, R45                             |
| Buck 3            | 2Ф                    | R52, R53                             |
| Buck 3            | 1Ф                    | R32, R47                             |

| E-LOAD   | JUMPER X   | RESISTOR X            | SENSE   | TRANSFER FUNCTION*   |
|----------|------------|-----------------------|---------|----------------------|
| LOADA    | J200       | R41, R42              | VLSA    | 100mV/A              |
| LOADB    | J5         | R43, R44              | VLSB    | 100mV/A              |
| LOADF    | J210       | NONE, TEST POINT ONLY | VLSF    | 1V/A                 |

<!-- image -->

│

## MAX77511/MAX77711 Evaluation Kit

## Software

The  graphical  user  interface  (GUI)  software  allows  for quick,  easy,  and  thorough  evalution  of  the  MAX77511/ MAX77711. The GUI drives I 2 C communication with the EV kit.  Every  control  in  the  GUI  corresponds  directly  to a register within the MAX77511/MAX77711. Refer to the Register Map section of the MAX77511/MAX77711 device data sheet for a complete description of the registers.

See Figure 7 for a screenshot of the GUI upon first opening.

## Installation

Visit  the  product  webpage  at www.maximintegrated. com/MAX77711evkit and navigate to Design Resources to  download  the  latest  version  of  the  EV  kit  software.

## Evaluates: MAX77511/MAX77711

Use  the  same  software  to  evaluate  either  MAX77511 or  MAX77711. Save the EV kit software to a temporary folder and decompress the ZIP file. Run the .EXE file and follow the on-screen instructions to complete installation.

## Windows Drivers

After  connecting  a  Micro-USB  cable  between  your  PC and the EV kit for the first  time,  wait  a  few  minutes  for Windows to automatically install the necessary drivers.

## Connecting the GUI

In  the  GUI,  click Device in  the  upper  left  corner  of  the GUI window. Click the Connect option in the drop-down menu.

Figure 7. MAX77511/MAX77711 EV Kit GUI Interface

<!-- image -->

│

## MAX77511/MAX77711 Evaluation Kit

The Synchronize menu  opens  (Figure  8)  once  the  IC responds (SYS and V IO  must be valid to respond). Click Read and Close . The text at the bottom right of the GUI window changes from Not Connected to Connected .

## Evaluates: MAX77511/MAX77711

The Synchronize menu shows the ICs I 2 C 8-bit device write  address.  Address  shown  changes  depending  on device  phase  configuration  (status  of  PHCFG1/0  pins). See Table 5.

Figure 8. EV Kit GUI Window after 'Connecting'

<!-- image -->

## Table 5. I 2 C Address Selection

| [PHCFG1, PHCFG0]   | PHASE (Ф) CONFIGURATION   | 7-BIT SLAVE ADDRESS   | 8-BIT WRITE ADDRESS   | 8-BIT READ ADDRESS   |
|--------------------|---------------------------|-----------------------|-----------------------|----------------------|
| [0, 0]             | 4Ф                        | 0x71 0b 111 0001      | 0xE2 0b 1110 0010     | 0xE3 0b 1110 0011    |
| [0, 1]             | 3Ф + 1Ф                   | 0x72 0b 111 0010      | 0xE4 0b 1110 0100     | 0xE5 0b 1110 0101    |
| [0, OPEN]          | 2Ф + 2Ф                   | 0x73 0b 111 0011      | 0xE6 0b 1110 0110     | 0xE7 0b 1110 0111    |
| [1, 0]             | 2Ф + 1Ф + 1Ф              | 0x74 0b 111 0100      | 0xE8 0b 1110 1000     | 0xE9 0b 1110 1001    |
| [1, 1]             | 2Ф + 1Ф + 1Ф              | 0x75 0b 111 0101      | 0xEA 0b 1110 1010     | 0xEB 0b 1110 1011    |
| [1, OPEN]          | 1Ф + 1Ф + 1Ф+ 1Ф          | 0x76 0b 111 0110      | 0xEC 0b 1110 1100     | 0xED 0b 1110 1101    |
| [OPEN, 0]          | 1Ф + 1Ф + 1Ф+ 1Ф          | 0x77 0b 111 0111      | 0xEE 0b 1110 1110     | 0xEF 0b 1110 1111    |
| [OPEN, 1]          | 1Ф + 1Ф + 1Ф+ 1Ф          | 0x4E 0b 100 1110      | 0x9C 0b 1001 1100     | 0x9D 0b 1001 1101    |
| [OPEN, OPEN]       | 1Ф + 1Ф + 1Ф+ 1Ф          | 0x4F 0b 100 1111      | 0x9E 0b 1001 1110     | 0x9F 0b 1001 1111    |

│

## MAX77511/MAX77711 Evaluation Kit

## Global Status

The Status tab  displays  high-level  information  about the  IC.  Check  the Phase  Configuration  Status field on  this  tab  after  applying  power  to  the  EV  kit  and  synchronizing  registers  to  verify  that  the  buck  converter  is configured in the intended phase configuration for evaluation.  Mismatch  between  the  ICs  programmed  phase

## Evaluates: MAX77511/MAX77711

configuration (PHCFG1/0 pins) and the PCBs 0Ω resis -tor configuration impairs EV kit function. See the Phase Configuration Programming section for more information.

Periodically  check  the Status tab  during  evaluation  to monitor  interrupts,  fault  status,  GPIO  status,  and  buck POK. (See Figure 9 .)

Figure 9. EV Kit GUI Status Tab

<!-- image -->

│

## Configuring the Buck Converter

The Buck Configuration section  shows control tabs for each buck regulator. Use these tabs to control buck mode, enable, output voltage, peak current limit, soft-start, soft-stop, DVS, active-discharge, and spread-spectrum. Refer to the MAX77511/MAX77711 device data sheet and see Figure 10 for more information.

Figure 10. EV Kit GUI Buck Control Tab

<!-- image -->

## MAX77511/MAX77711 Evaluation Kit

The  availability  of  buck  controls  depends  on  the  ICs phase  configuration.  If  a  buck  is  not  configured  as  a stand-alone channel, then its  register  controls  are don't care . The GUI indicates this with a status message and greying out unused control fields. See Figure 11.

See Table 3 to familiarize yourself with the ICs buck nam -ing convention.

## Enabling and Disabling the Buck Converter

Enable the buck converter by navigating to the Buck x Configuration A section in any Buck Configuration tab.

## Evaluates: MAX77511/MAX77711

Find the Buck x Enable Control and use the drop-down to accomplish one of the following actions:

- 1) Disable the buck converter ( 0x0 = Disabled ). The buck can still enable through a GPIO mapped as a buck enable (BENx) special function.
- 2) Enable the buck converter ( 0x1 = Enabled ).
- 3) Assign the buck to the flexible power sequencer (i.e., 0x2 = FPS Slot 1 ). Use the ENSEQ pin (jumper J6) to activate/deactivate the sequencer.

Figure 11. GUI Indicating Buck Registers are Don't Care

<!-- image -->

│

## MAX77511/MAX77711 Evaluation Kit

## Setting the Buck Output Voltage

Set the buck output voltage by navigating to the Buck x Configuration D section in any Buck Configuration tab. Find the Buck x Output Voltage field and use the slide control to pick the output voltage and hit the ' Write ' button to send the command.

Note  that  the Buck x Configuration E field  looks  very similar. This field controls the output voltage when a GPIO is configured as a DVS input and is logic high (1). When no GPIO is mapped to a DVS input, then DVS = 0 always and Buck x Configuration D controls the V OUT  target.

## LDO Control (MAX77711 Only)

The LDO Configuration (MAX77711 Only) tab is available when evaluating the MAX77711. Do not modify these registers when using the MAX77511.

In  the LDO  Config A tab,  find  the LDO  Enable/Mode Control and use the drop-down to accomplish one of the following actions:

- 1) Disable the LDO (0x0 = Disabled) . The LDO can still enable through a GPIO mapped as an LDO enable (LDOEN) special function.
- 2) Enable the LDO (0x1 = Enabled) .
- 3) Asign the LDO to the flexible power sequencer (i.e., 0x5 = FPS Slot 4) . Use the ENSEQ pin (jumper J6) to activate/deactivate the sequencer.

## Evaluates: MAX77511/MAX77711

Set the LDO output voltage with the LDO Configuration B section. Use the LDO Target Regulation Voltage slide control to pick the output voltage and hit the ' Write ' button to send the command.

## GPIO Control

Refer  to  the  device  data  sheet  for  full  descriptions  of the  GPIO  and  their  control  registers.  The  GUI  has  four tabs: Interrupt/Pull, Configuration 1/2/3, Configuration 4/5/6, and Function Control .

- Use the Interrupt/Pull tab to configure the pullup/ pulldown resistors for the GPIO or read interrupts.
- Use the Configuration 1/2/3 and Configuration 4/5/6 tabs to configure:
- Drive Type (open-drain or push-pull)
- Direction (input or output)
-  Debounce Timer
- Interrupt (rising edge, falling edge, or both edges)
- Data Value (when configured as a general purpose output)
- Use the Function Control tab to configure the functionality of each GPIO. Each GPIO is mappable to special buck or LDO control functions. Refer to the device data sheet for the default GPIO function map associated with each part number. The default function map for MAX77711AEWB is given in Table 6 .

## Table 6. MAX77711AEWB Default GPIO Function Map

| GPIO1   | Buck 1 Enable Input with Pulldown, No Debounce, No Interrupt   |
|---------|----------------------------------------------------------------|
| GPIO2   | Buck 2 Enable Input with Pulldown, No Debounce, No Interrupt   |
| GPIO3   | Buck 3 Enable Input with Pulldown, No Debounce, No Interrupt   |
| GPIO4   | Buck 4 Enable Input with Pulldown, No Debounce, No Interrupt   |
| GPIO5   | LDO Enable Input with Pulldown, No Debounce, No Interrupt      |
| GPIO6   | Flexible Power Sequencer Open-Drain Digital Output (Slot 12)   |

Note:

GPIO function map can be reprogrammed through I 2 C (if GPIOLOCK = 0).

## Ordering Information

| PART NUMBER     | U1 IC         | DEFAULT PHASE CONFIGURATION   |
|-----------------|---------------|-------------------------------|
| MAX77711AEVKIT# | MAX77711AEWB+ | 2Ф+1Ф+1Ф                      |

│

## MAX77511/MAX77711 EV Kit Bill of Materials

| REF_DES                                             |   QTY* | MFG PART #                                     | MANUFACTURER   | VALUE   | DESCRIPTION                                                                                                                                     |
|-----------------------------------------------------|--------|------------------------------------------------|----------------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| U1                                                  |      1 | MAX777511/MAX77711 (see Ordering Information ) | MAXIM          | VARIES  | EVKIT PART-IC; 10V INPUT QUAD PHASE CONFIGURABLE 3A PHASE HIGH EFFICIENCY BUCK REGULATOR; PACKAGE OUTLINE 21-100211; PACKAGE CODE W643D3+1      |
| L1, L2                                              |      2 | DFE252012F-R47M                                | MURATA         | 0.47UH  | INDUCTOR; SMT (1008); METAL; 0.47UH; 20%; 6.7A                                                                                                  |
| L3, L4                                              |      2 | DFE252012F-1R5M                                | MURATA         | 1.5UH   | INDUCTOR; SMT (1008); SHIELDED; 1.5UH; 20%; 3.8A                                                                                                |
| C10, C12, C34, C35, C37, C39, C40, C47              |      8 | GRM188R60J476ME15                              | MURATA         | 47UF    | CAPACITOR; SMT (0603); CERAMIC CHIP; 47UF; 6.3V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                       |
| R26, R27, R38, R41-R43                              |      6 | CRCW25120000ZS                                 | VISHAY DALE    | 0       | RESISTOR; 2512; 0 OHM; 1%; JUMPER; 1.0W; METAL FILM                                                                                             |
| R39, R40, R44, R49                                  |      0 | N/A                                            | N/A            | OPEN    | RES; SMT (2512); OPEN (USE ADDITIONAL CRCW25120000ZS TO EVALUATE MULTIPHASE CONFIGURATIONS)                                                     |
| C13, C14, C206                                      |      3 | ANY                                            | ANY            | 1UF     | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R ; FORMFACTOR                           |
| C15                                                 |      1 | ANY                                            | ANY            | 0.1UF   | CAPACITOR; SMT; 0402; CERAMIC; 0.1uF; 10V; 10%; X5R; -55degC to + 125degC; 0 +/-30PPM/degC; FORMFACTOR ;                                        |
| C16, C27, C30, C31, C33, C36, C38, C41-C45, C59-C62 |     16 | ANY                                            | ANY            | 22UF    | CAPACITOR; SMT (0603); CERAMIC CHIP; 22UF; 10V; TOL=20%; MODEL=CL SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR                           |
| C18, C24                                            |      2 | ANY                                            | ANY            | 2.2UF   | CAPACITOR; SMT (0402); CERAMIC; 2.2UF; 6.3V; TOL=[10%]; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R                                         |
| C19-C22                                             |      4 | ANY                                            | ANY            | 10UF    | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 16V; TOL=20%; MODEL=GRM SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR                          |
| C23                                                 |      1 | GRM155R61A106ME44                              | MURATA         | 10UF    | CAPACITOR; SMT (0402); CERAMIC CHIP; 10UF; 10V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R;                                                       |
| C25                                                 |      1 | ANY                                            | ANY            | 1UF     | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 16V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR                             |
| C26, C28, C32, C46, C52-C55, C67                    |      9 | ANY                                            | ANY            | 0.1UF   | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R-                                             |
| C29, C48, C49, C51                                  |      4 | ANY                                            | ANY            | 0.01UF  | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 16V; TOL=10%; MODEL=CHIP MONOLITHIC CERAMIC CAPACITOR; TG=-55 DEGC TO +85 DEGC; TC=X7R; FORMFACTOR |
| C63, C64                                            |      2 | EMK325ABJ107MM                                 | TAIYO YUDEN    | 100UF   | CAPACITOR; SMT (1210); CERAMIC CHIP; 100UF; 16V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                       |

Evaluates: MAX77511/MAX77711

## MAX77511/MAX77711 EV Kit Bill of Materials (continued)

| REF_DES                                                      |   QTY* | MFG PART #                                                                                | MANUFACTURER                                    | VALUE        | DESCRIPTION                                                                                                              |
|--------------------------------------------------------------|--------|-------------------------------------------------------------------------------------------|-------------------------------------------------|--------------|--------------------------------------------------------------------------------------------------------------------------|
| C65                                                          |      1 | GRM155R60J475ME87; GRM153R60J475ME15                                                      | MURATA; MURATA                                  | 4.7UF        | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7UF; 6.3V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                               |
| C66                                                          |      1 | GRM155R60J106ME44; GRM155R60J106ME47; C1005X5R0J106M050BC; CL05A106MQ5NUN; C0402C106M9PAC | MURATA; MURATA; TDK; SAMSUNG ELECTRONICS; KEMET | 10UF         | CAPACITOR; SMT (0402); CERAMIC CHIP; 10UF; 6.3V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                |
| C108, C135, C150, C151, C155-C157, C159                      |      8 | ANY                                                                                       | ANY                                             | 0.1UF        | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; MODEL=CGA SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R; FORMFACTOR |
| C110-C113, C115, C118, C120, C158                            |      8 | ANY                                                                                       | ANY                                             | 1UF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R;                        |
| C114                                                         |      1 | ANY                                                                                       | ANY                                             | 0.47UF       | CAPACITOR; SMT; 0603; CERAMIC; 0.47uF; 10V; 10%; X5R; -55degC to + 125degC, ; FORMFACTOR                                 |
| C152, C153                                                   |      2 | C0402C0G500-150JNP; GRM1555C1H150JA01; GCM1555C1H150JA16                                  | VENKEL LTD.; MURATA; MURATA                     | 15PF         | CAPACITOR; SMT (0402); CERAMIC CHIP; 15PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                 |
| C154                                                         |      1 | ANY                                                                                       | ANY                                             | 4.7UF        | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7UF; 10V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR    |
| D100, D101                                                   |      2 | LTST-C190YKT                                                                              | LITE-ON ELECTRONICS INC.                        | LTST-C190YKT | DIODE; LED; STANDARD; YELLOW; SMT (0603); PIV=5.0V; IF=0.02A; -55 DEGC TO +85 DEGC                                       |
| D102, D103                                                   |      2 | LTST-C190CKT                                                                              | LITE-ON ELECTRONICS INC.                        | LTST-C190CKT | DIODE; LED; STANDARD; RED; SMT (0603); PIV=5.0V; IF=0.04A; -55 DEGC TO +85 DEGC                                          |
| FB100                                                        |      1 | BLM18PG221SN1                                                                             | MURATA                                          | 220          | INDUCTOR; SMT (0603); FERRITE-BEAD; 220; TOL=+/-25%; 1.4A; -55 DEGC TO +125 DEGC                                         |
| GND5, GND6                                                   |      2 | 5011                                                                                      | KEYSTONE                                        | N/A          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |
| GND7, GND8                                                   |      2 | 9020 BUSS                                                                                 | WEICO WIRE                                      | MAXIMPAD     | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                 |
| IN12, IN34, INLDO, LDO, LOADA, LOADB, LOADF                  |      7 | 5010                                                                                      | KEYSTONE                                        | N/A          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                    |
| IN12S, IN34S, LDOS, OUT1S- OUT4S, VDD, VIO, VLSA, VLSB, VLSF |     12 | 5000                                                                                      | KEYSTONE                                        | N/A          | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;         |
| J1, J6-J14                                                   |     10 | PEC03SAAN                                                                                 | SULLINS ELECTRONICS CORP.                       | PEC03SAAN    | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC;                             |

│

Evaluates: MAX77511/MAX77711

## MAX77511/MAX77711 EV Kit Bill of Materials (continued)

| REF_DES                                                                          |   QTY* | MFG PART #                       | MANUFACTURER               | VALUE            | DESCRIPTION                                                                                                        |
|----------------------------------------------------------------------------------|--------|----------------------------------|----------------------------|------------------|--------------------------------------------------------------------------------------------------------------------|
| J5, J200, J210                                                                   |      3 | TSW-102-07-T-S                   | SAMTEC                     | TSW-102- 07-T-S  | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; -55 DEGC TO +105 DEGC                            |
| J100                                                                             |      1 | PBC06SAAN                        | SULLINS ELECTRONICS CORP.  | PBC06SAAN        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 6PINS; -65 DEGC TO +125 DEGC                                   |
| J101                                                                             |      1 | PBC03SABN                        | SULLINS                    | PBC03SABN        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                          |
| J102                                                                             |      1 | 10118193-0001LF                  | FCI CONNECT                | 10118193- 0001LF | CONNECTOR; FEMALE; SMT; MICRO USB B TYPE RECEPTACLE; RIGHT ANGLE; 5PINS                                            |
| PGND1S-PGND4S                                                                    |      4 | 5001                             | KEYSTONE                   | N/A              | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| Q1, Q200                                                                         |      2 | IRFR8314TRPBF                    | INTERNATIONAL RECTIFIER    | IRFR8314T RPBF   | TRAN; HEXFET POWER MOSFET; NCH; DPAK; PD- (125W); I-(179A); V-(30V)                                                |
| Q2                                                                               |      1 | DMG3420U                         | DIODES INCORPORATED        | DMG3420U         | TRAN; N-CHANNEL ENHANCEMENT MODE MOSFET; NCH; SOT-23; PD-(0.74W); I-(5.47A); V-(20V)                               |
| R1, R24                                                                          |      2 | WSR5R1000F                       | VISHAY DALE                | 0.1              | RES; SMT (4527); 0.1; 1%; +/-75PPM/DEGC;5W                                                                         |
| R18, R19, R206                                                                   |      3 | CRCW04021M00FK                   | VISHAY DALE                | 1M               | RESISTOR; 0402; 1M; 1%; 100PPM; 0.0625W; THICK FILM                                                                |
| R25                                                                              |      1 | CSR1206FT1R00                    | STACKPOLE ELECTRONICS INC. | 1                | RESISTOR; 1206; 1 OHM; 1%; 100PPM; 0.5W; THICK FILM                                                                |
| R100, R118                                                                       |      2 | ANY                              | ANY                        | 4.7K             | RESISTOR, 0402, 4.7K OHM, 1%, 100PPM, 0.0625W, THICK FILM; FORMFACTOR                                              |
| R103, R123                                                                       |      2 | ANY                              | ANY                        | 22               | RESISTOR, 0402, 22 OHM, 1%, 100PPM, 0.0625W, THICK FILM; FORMFACTOR                                                |
| R107, R108                                                                       |      2 | ANY                              | ANY                        | 2.2K             | RESISTOR, 0402, 2.2K OHM, 1%, 100PPM, 0.0625W, THICK FILM; FORMFACTOR                                              |
| R109, R111                                                                       |      2 | ANY                              | ANY                        | 100              | RESISTOR; 0402; 100 OHM; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                               |
| R110, R117                                                                       |      2 | CRCW0402470RFK                   | VISHAY DALE                | 470              | RESISTOR, 0402, 470 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                           |
| R29, R115, R157, R159, R161, R113                                                |      6 | CRCW0402100KFK; RC0402FR-07100KL | VISHAY; YAGEO              | 100K             | RESISTOR;0402;100K;1%;100PPM;0.0625W;TH ICKFILM                                                                    |
| R114                                                                             |      1 | CRCW040210K0FK; RC0402FR-0710KL  | VISHAY DALE; YAGEO PHICOMP | 10K              | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                                                               |
| R28, R30-R33, R45-R48, R116, R135, R136, R140, R143, R148, R155, R162-R164, R166 |     20 | ERJ-2GE0R00                      | PANASONIC                  | 0                | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                               |
| R122                                                                             |      1 | ANY                              | ANY                        | 1M               | RESISTOR; 0603; 1M; 1%; 100PPM; 0.10W; THICK FILM; FORMFACTOR                                                      |
| R142                                                                             |      1 | CRCW06030000Z0                   | VISHAY DALE                | 0                | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.1W; THICK FILM                                                                |

│

Evaluates: MAX77511/MAX77711

## MAX77511/MAX77711 EV Kit Bill of Materials (continued)

| REF_DES                    |   QTY* | MFG PART #                                        | MANUFACTURER                         | VALUE          | DESCRIPTION                                                                                                            |
|----------------------------|--------|---------------------------------------------------|--------------------------------------|----------------|------------------------------------------------------------------------------------------------------------------------|
| R156                       |      1 | CRCW0402105KFK                                    | VISHAY DALE                          | 105K           | RESISTOR; 0402; 105K OHM; 1%; 100PPM; 0.063W ; THICK FILM                                                              |
| R158                       |      1 | CRCW0402169KFK                                    | VISHAY DALE                          | 169K           | RESISTOR; 0402; 169K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                               |
| R160                       |      1 | CRCW04024752FK; 9C04021A4752FLHF3; CRCW040247K5FK | VISHAY DALE; YAGEO; VISHAY DALE      | 47.5K          | RESISTOR; 0402; 47.5K; 1%; 100PPM; 0.0625W; THICK FILM                                                                 |
| U100                       |      1 | MAXQ2000-RBX+                                     | MAXIM                                | MAXQ2000- RBX+ | IC; CTRL; LOW-POWER LCD MICROCONTROLLER; TQFN56-EP 8X8                                                                 |
| U101                       |      1 | FT232RQ                                           | FUTURE TECHNOLOGY DEVICES INTL LTD.  | FT232RQ        | IC; INFC; UART INTERFACE IC USB TO SERIAL; QFN32-EP 5X5                                                                |
| U102-U104                  |      3 | MAX8512EXK+                                       | MAXIM                                | MAX8512E XK    | IC, VREG, Ultra-Low-Noise, High PSRR, Adjustable Vout, SC70-5                                                          |
| U107                       |      1 | MAX3395EETC+                                      | MAXIM                                | MAX3395E ETC   | IC; TRANS; 15KV ESD-PROTECTED HIGH-DRIVE CURRENT QUAD-LEVEL TRANSLATOR WITH SPEED-UP CIRCUITRY; TQFN12 4X4             |
| U108                       |      1 | 24AA02T-I/OT                                      | MICROCHIP                            | 24AA02T-I/OT   | IC; EPROM; 2K I2C SERIAL EEPROM; SOT23-5                                                                               |
| Y101                       |      1 | CX3225SB16000D0FLJZZ                              | KYOCERA-KINSEKI                      | 16MHZ          | CRYSTAL; SMT (3225) 3.2X2.5; 8PF; 16MHZ; +/- 10PPM; +/-15PPM                                                           |
| C1, C2, C200               |      0 | GRM155R71E472KA01                                 | MURATA                               | 4700PF         | CAPACITOR; SMT (0402); CERAMIC CHIP; 4700PF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                            |
| C3, C4, C201               |      0 | N/A                                               | N/A                                  | 1000PF         | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 50V; TOL=10%; MODEL=C0G; TG=-55 DEGC TO +125 DEGC; TC=+; FORMFACTOR       |
| C5, C6, C202, C228-C230    |      0 | N/A                                               | N/A                                  | 0.1UF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R; FORMFACTOR |
| C7-C9, C11, C204, C205     |      0 | ECJ-0EB1H101K; CC0402KRX7R9BB101                  | PANASONIC; YAGEO PHYCOMP             | 100PF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 100PF; 50V; TOL=10%; MODEL=ECJ SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R           |
| C17                        |      0 | 594D337X0016R2                                    | VISHAY SPRAGUE                       | 330UF          | CAPACITOR; SMT (CASE_R); TANTALUM CHIP; 330UF; 16V; TOL=20%; TG=-55 DEGC TO +125 DEGC; LOW ESR                         |
| R2, R3, R200               |      0 | CRCW040220K0FK                                    | VISHAY DALE                          | 20K            | RESISTOR; 0402; 20K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                |
| R4, R5, R201               |      0 | CRCW0402100RFK; 9C04021A1000FL; RC0402FR-07100RL  | VISHAY DALE;PANASONIC; YAGEO PHYCOMP | 100            | RESISTOR; 0402; 100 OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                |
| R6, R7, R202               |      0 | CRCW0402680RFK; RC0402FR-07680RL                  | VISHAY DALE;YAGEO PHICOMP            | 680            | RESISTOR, 0402, 680 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                               |
| R8, R10, R204, R205        |      0 | CRCW04024K02FK; ERJ-2RKF4021                      | VISHAY DALE;PANASONIC                | 4.02K          | RESISTOR; 0402; 4.02K; 1%; 100PPM; 0.0625W; THICK FILM                                                                 |
| R9, R11                    |      0 | CRCW040276K8FK                                    | VISHAY DALE                          | 76.8K          | RESISTOR; 0402; 76.8K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                              |
| R12, R13, R203, R260, R261 |      0 | ERJ-2GE0R00                                       | PANASONIC                            | 0              | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                   |

│

## MAX77511/MAX77711 EV Kit Bill of Materials (continued)

| REF_DES                |   QTY* | MFG PART #                                    | MANUFACTURER                                 | VALUE         | DESCRIPTION                                                                                                         |
|------------------------|--------|-----------------------------------------------|----------------------------------------------|---------------|---------------------------------------------------------------------------------------------------------------------|
| R14                    |      0 | ERJ-2RKF4703                                  | PANASONIC                                    | 470K          | RESISTOR, 0402, 470K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                           |
| R15, R16, R275, R276   |      0 | ERJ-2RKF1004                                  | PANASONIC                                    | 1M            | RESISTOR; 0402; 1M OHM;1%; 100PPM; 0.10W; THICK FILM                                                                |
| R17                    |      0 | CRCW0402649KFK                                | VISHAY DALE                                  | 649K          | RESISTOR; 0402; 649K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                            |
| R20, R23, R207, R208   |      0 | CRCW04021K20FK; 9C04021A1201LF; MCR01MZPF1201 | VISHAY DALE; VISHAY DALE; ROHM SEMICONDUCTOR | 1.2K          | RESISTOR; 0402; 1.2K; 1%; 100PPM; 0.0625W; THICK FILM                                                               |
| R21, R22               |      0 | N/A                                           | N/A                                          | 1K            | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                                     |
| R262, R263             |      0 | N/A                                           | N/A                                          | 100K          | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                                   |
| U200-U202              |      0 | MAX44251AUA+                                  | MAXIM                                        | MAX44251A UA+ | IC; OPAMP; ULTRA-PRECISION; LOW-NOISE OP AMP; UMAX8                                                                 |
| U206                   |      0 | MAX5815BAUD+                                  | MAXIM                                        | MAX5815B AUD+ | IC; DAC; ULTRA-SMALL; QUAD-CHANNEL; 12- BIT BUFFERED OUTPUT DACS WITH INTERNAL REFERENCE AND I2C INTERFACE; TSSOP14 |
| C50, C56-C58           |      0 | N/A                                           | N/A                                          | OPEN          | CAPACITOR; SMT (0603); OPEN; FORMFACTOR                                                                             |
| C129, C134             |      0 | N/A                                           | N/A                                          | OPEN          | CAPACITOR; SMT (0402); OPEN; FORMFACTOR                                                                             |
| R34-R37, R50-R53, R165 |      0 | N/A                                           | N/A                                          | OPEN          | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                    |

│

## MAX77511/MAX77711 EV Kit Schematic

<!-- image -->

## MAX77511/MAX77711 EV Kit Schematic (continued)

<!-- image -->

## MAX77511/MAX77711 EV Kit Schematic (continued)

<!-- image -->

## MAX77511/MAX77711 EV Kit PCB Layout

MAX77511/MAX77711 EV Kit Component Placement GuideTop Silkscreen

<!-- image -->

MAX77511/MAX77711 EV Kit PCB Layout-Top Layer

<!-- image -->

MAX77511/MAX77711 EV Kit PCB Layout-Internal Layer 2

<!-- image -->

MAX77511/MAX77711 EV Kit PCB Layout-Internal Layer 3

<!-- image -->

│

## MAX77511/MAX77711 EV Kit PCB Layout (continued)

<!-- image -->

MAX77511/MAX77711 EV Kit PCB Layout-Internal Layer 4

<!-- image -->

MAX77511/MAX77711 EV Kit PCB Layout-Internal Layer 5

MAX77511/MAX77711 EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX77511/MAX77711 EV Kit Component Placement GuideBottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/19           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX77511/MAX77711