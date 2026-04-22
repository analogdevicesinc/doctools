<!-- lastmod 2024-11-20 -->
<!-- image -->

Click here to ask an associate for production status of specific part numbers.

## Evaluates: MAX77542 in WLP Package

## General Description

The MAX77542 evaluation kit (EV kit) is a fully assembled and tested printed circuit board (PCB) that demonstrates the MAX77542 four-phase configurable step-down regu -lator. The board is equipped with test points and jumpers for testing all pins on the device. Six potentiometers allow for  adjusting  the  SEL1/2/3/4  and  CFG1/2  configuration pins at will. There are also probe sockets on critical nodes (VOUTx, LXx) for precise measurements. The board also comes with some spare inductors (L5-L12) for testing out efficiency/performance  tradeoffs.  The  PCB  is  designed with Analog Devices, Inc.'s, recommended layout of the IC and external components. The IC sets default output voltages by way of R15, R17, R19, and R21 but can be changed with the potentiometers or through I 2 C communication. Analog Devices' GUI can be used by connecting a  Windows®-based PC to J1 through a USB Type-A to Micro-USB cable.

Ordering Information appears at end of data sheet.

Figure 1. MAX77542 Evaluation Board

<!-- image -->

## MAX77542 Evaluation Kit

## Features

- Probe Sockets for High-Accuracy Measurements
- Test Points for All Features (MFIO, CE, IRQB)
- Default Output Voltage Adjustable Via SEL1/2/3/4
- Default MFIO Function and I 2 C Slave ID Set Via CFG1
- Default Peak Current Limit and FSW Set Via CFG2
- Connector for Custom I 2 C Host

## EV Kit Contents

- The MAX77542 EV kit
- USB Type-A to Micro-USB Cable
- Windows-based GUI software is available for use with the EV kit and can be downloaded from Analog Devices website at www.analog.com/max77542evkit (under the Design Resources tab). Windows 7 or newer is required to use with the EV kit GUI software.

319-100989; Rev 2; 11/24

One  Analog  Way,  Wilmington,  MA  01887  U.S.A.    |      Tel:  781.329.4700      |      © 2024  Analog  Devices,  Inc.  All  rights  reserved. © 2024 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective owners.

## MAX77542 Evaluation Kit

## EV Kit Specifications and Default

## Configuration

The MAX77542 EV kit comes with the following default settings:

- V OUT1 = 1.0V
- VOUT2 = 1.8V
- V OUT3  = 3.3V
- VOUT4 = 5.0V
- FSW = 1.0MHz
- Skip Mode
- Soft-Start and DVS Ramp-Up Rate = 5.0mV/µs
- Soft-Stop and DVS Ramp-Down Rate = -0.15mV/µs
- 100Ω Active Discharge Enabled (1Ω is Disabled)
- Peak Current Limit = 5.5A
- MFIO1-8 set to EN inputs and POK outputs
- MFIO1: EN1
- MFIO2: POK1
- MFIO3: EN2
- MFIO4: POK2
- MFIO5: EN3
- MFIO6: POK3
- MFIO7: EN4
- MFIO8: POK4
- MAX77542BAWU+ Installed

## Table 1. EV Kit Default Specifications

| SPECIFICATIONS      | TEST CONDITIONS                      | MIN   | TYP   | MAX   | UNIT   |
|---------------------|--------------------------------------|-------|-------|-------|--------|
| Input Voltage       |                                      | 2.8   |       | 16.0  | V      |
| Output Voltage      | Configurable by SEL or through I 2 C | 0.3   |       | 5.2   | V      |
| Output Current      | Per Phase                            | 0     |       | 4     | A      |
| Switching Frequency |                                      |       | 1     |       | MHz    |
| Peak Current Limit  |                                      |       | 5.5   |       | A      |

## Evaluates: MAX77542 in WLP Package

## Quick Start

## Required Equipment

- Adjustable DC Power Supply or Applicable Battery
- Multimeter
- USB Type-A to Micro-USB Cable (optional)
- Windows-based PC with MAX77542 EV kit GUI

## Setup Overview

Figure  2  depicts  a  simplified  block  diagram  of  a  typical EV kit setup. Attach more meters and scope probes as necessary. Figure 3 depicts a typical application circuit of the MAX77542.

Figure 2. Simplified Setup Block Diagram

<!-- image -->

## MAX77542 Evaluation Kit

## Evaluates: MAX77542 in WLP Package

Figure 3. Typical Application Circuit

<!-- image -->

## Procedure

Follow this procedure for first time evaluation:

- 1) Install GUI software. Visit the product webpage at https://www.analog.com/max77542evkit and navigate to Design Resources to download the lat -est version of the EV kit software. Save the EV kit software installation file to a temporary folder and decompress the ZIP file. Run the .EXE file and follow the on-screen instructions to complete installation.
- 2) Ensure that the jumpers are configured as per Table 2.
- 3) Apply a valid voltage (like 7.6V) from a power supply to the SYS and PGND terminals of the EV Kit. Do not enable the power supply yet.
- 4) Important: Make sure that the phase configuration is correct. See the Phase Configuration section.
- 5) Connect a USB cable between your PC and J1 USB port on the EV kit.
- 6) Turn on the input power supply.
- 7) Open the GUI and click Device in the menu bar. Click Connect in the Device drop-down list. Wait for the device to respond, and in the Synchronize win -dow, press Connect . The GUI takes a few seconds to read the device registers after pressing Connect .
- 8) Navigate to the Buck 1 Configuration tab. Drag the slide bar in Buck Normal Output Voltage section to change the output voltage and click Write .

<!-- image -->

## MAX77542 Evaluation Kit

- 9) Navigate to the Global Configuration 2 tab. Toggle Buck Master1 Enable Control to Enable and press Write .
- 10)  Measure OUT1 with a voltmeter. It should read the voltage set in the GUI in Step 8.
- 11)  Use the GUI to exercise the various features of the MAX77542.

## Evaluates: MAX77542 in WLP Package

This concludes the Quick Start procedure. Users are now encouraged to further explore the device and its register settings with the GUI software. For more information on the GUI, see Detailed Description of Software section.

## Table 2. Default Shunt Positions and Jumper Descriptions

| JUMPER   | NODE OR FUNCTION    | SHUNT POSITION   | FUNCTION                                                                                                                           |
|----------|---------------------|------------------|------------------------------------------------------------------------------------------------------------------------------------|
| J1       | USB Connector (GUI) | N/A              | GUI USB Connector                                                                                                                  |
| J2       | ALT_IN              | 1-2*             | Connects ALT_IN to GND. Leave disconnected if ALT_IN functionality is used.                                                        |
| J3       | CE                  | 1-2*             | Connects CE to SYS (Enables internal bias)                                                                                         |
| J3       | CE                  | 2-3              | Connects CE to GND (Disables internal bias)                                                                                        |
| J4       | SEL1                | 1-2*             | Connects SEL1 to fixed 1.87kΩ resistor (1.0V OUT default)                                                                          |
| J4       | SEL1                | 2-3              | Connects SEL1 to the potentiometer for adjustable default V OUT                                                                    |
| J5       | SEL2                | 2-4*             | Connects SEL2 to fixed 30.9kΩ resistor (1.8V OUT default)                                                                          |
| J5       | SEL2                | 3-4              | Connects SEL2 to GND (enables multiphase operation)                                                                                |
| J5       | SEL2                | 4-6              | Connects SEL2 to the potentiometer for adjustable default V OUT                                                                    |
| J6       | SEL3                | 2-4*             | Connects SEL3 to fixed 64.9kΩ resistor (3.3V OUT default)                                                                          |
| J6       | SEL3                | 3-4              | Connects SEL3 to GND (enables multiphase operation)                                                                                |
| J6       | SEL3                | 4-6              | Connects SEL3 to the potentiometer for adjustable default V OUT                                                                    |
| J7       | SEL4                | 2-4*             | Connects SEL4 to fixed 100kΩ resistor (5V OUT default)                                                                             |
| J7       | SEL4                | 3-4              | Connects SEL4 to GND (enables multiphase operation)                                                                                |
| J7       | SEL4                | 4-6              | Connects SEL4 to the potentiometer for adjustable default V OUT                                                                    |
| J8       | CFG1                | 1-2*             | Connects CFG1 to fixed 0Ω resistor (Sets MFIO default functions. Refer to the device data sheet for more information.)             |
| J8       | CFG1                | 2-3              | Connects CFG1 to the potentiometer for adjustable MFIO functions                                                                   |
| J9       | CFG2                | 1-2*             | Connects CFG2 to fixed 0Ω resistor (Sets default Mx_ILIM and Mx_FREQ values. Refer to the device data sheet for more information.) |
| J9       | CFG2                | 2-3              | Connects CFG2 to the potentiometer for adjustable Mx_ILIM and Mx_FREQ                                                              |
| J10      | MFIO1               | 1-2              | MFIO1 pulled up to VIO through 10kΩ resistor                                                                                       |
| J10      | MFIO1               | 2-3*             | MFIO1 tied to GND                                                                                                                  |
| J10      | MFIO1               | N/A              | MFIO1 left disconnected (Hi-Z)                                                                                                     |
| J11      | MFIO2               | 1-2*             | MFIO2 pulled up to VIO through 10kΩ resistor                                                                                       |
| J11      | MFIO2               | 2-3              | MFIO2 tied to GND                                                                                                                  |
| J11      | MFIO2               | N/A              | MFIO2 left disconnected (Hi-Z)                                                                                                     |
| J12      | MFIO3               | 1-2              | MFIO3 pulled up to VIO through 10kΩ resistor                                                                                       |
| J12      | MFIO3               | 2-3*             | MFIO3 tied to GND                                                                                                                  |
| J12      | MFIO3               | N/A              | MFIO3 left disconnected (Hi-Z)                                                                                                     |

Evaluates: MAX77542 in WLP Package

Table 2. Default Shunt Positions and Jumper Descriptions (continued)

| JUMPER   | NODE OR FUNCTION                    | SHUNT POSITION   | FUNCTION                                                               |
|----------|-------------------------------------|------------------|------------------------------------------------------------------------|
| J13      | MFIO4                               | 1-2*             | MFIO4 pulled up to VIO through 10kΩ resistor                           |
| J13      | MFIO4                               | 2-3              | MFIO4 tied to GND                                                      |
| J13      | MFIO4                               | N/A              | MFIO4 left disconnected (Hi-Z)                                         |
| J14      | MFIO5                               | 1-2              | MFIO5 pulled up to VIO through 10kΩ resistor                           |
| J14      | MFIO5                               | 2-3*             | MFIO5 tied to GND                                                      |
| J14      | MFIO5                               | N/A              | MFIO5 left disconnected (Hi-Z)                                         |
| J15      | MFIO6                               | 1-2*             | MFIO6 pulled up to VIO through 10kΩ resistor                           |
| J15      | MFIO6                               | 2-3              | MFIO6 tied to GND                                                      |
| J15      | MFIO6                               | N/A              | MFIO6 left disconnected (Hi-Z)                                         |
| J16      | MFIO7                               | 1-2              | MFIO7 pulled up to VIO through 10kΩ resistor                           |
| J16      | MFIO7                               | 2-3*             | MFIO7 tied to GND                                                      |
| J16      | MFIO7                               | N/A              | MFIO7 left disconnected (Hi-Z)                                         |
| J17      | MFIO8                               | 1-2*             | MFIO8 pulled up to VIO through 10kΩ resistor                           |
| J17      | MFIO8                               | 2-3              | MFIO8 tied to GND                                                      |
| J17      | MFIO8                               | N/A              | MFIO8 left disconnected (Hi-Z)                                         |
| J18      | I 2 C Header for External I 2 C Bus | N/A              | Test points for I 2 C signals to be connected to an external I 2 C Bus |
| J19      | VIN_LDO                             | 1-2*             | VIO LDO powered from VUSB                                              |
| J19      | VIN_LDO                             | 2-3              | VIO LDO powered from VIO_PI (External I 2 C Bus)                       |
| J20      | VIO Level                           | 1-2              | VIO is set to 1.2V                                                     |
| J20      | VIO Level                           | 2-3*             | VIO is set to 1.8V                                                     |

## MAX77542 Evaluation Kit

## EV Kit Hardware

## GUI Interface

The MAX77542EVKIT# can be connected to the GUI by connecting a USB cable to J1 on the EV kit.

## External I 2 C Bus

To use a different I 2 C host, disconnect the USB cable and attach I 2 C wires to J18 on the EV kit. Move the jumper on J19 to position 2-3. The J19 jumper sets the input of the LDO that  provides  VIO  to  either  the  USB  input  voltage or the voltage applied to VIO on J18. Jumper J18 is the input to a level shifter rather than an input to the actual pins on the IC.

## Phase Configuration

The SEL2, SEL3, and SEL4 are used to set the phase configuration of the MAX77542. R48, R49, R50, and R57 are used to connect the outputs together for multiphase configuration. The default configuration is four outputs (1ϕ + 1ϕ + 1ϕ + 1ϕ). See Table 3 to configure the MAX77542 according to the correct phase configuration.

## Evaluates: MAX77542 in WLP Package

## Buck Feedback Configuration

Buck  feedback  configuration  is  specific  to  the  selected phase  configuration.  Each  of  the  four  bucks  have  their own feedback inputs (SNSxP and SNSxN for Buck 1 and Buck 3; SNSxP alone for Buck 2 and Buck 4). Only the master feedback pins need to connect to the output voltage to ensure regulation (see Table 4). Unused or slave feedback pins can connect to the output voltage during evaluation at no consequence.

For example, a 2ϕ + 2ϕ configuration creates Buck 1 (using L1 and L2) and Buck 3 (using L3 and L4). Buck 1's feed -back is SNS1P and SNS1N. Buck 3's feedback is SNS3P and SNS3N. In this example, Buck 2 and Buck 4 are not configured  as  stand-alone  channels.  Therefore,  SNS2P and SNS4P are do not care but can connect to their cor -responding multiphase outputs with no consequence.

Each inductor under a single buck's control must be the same value.  Refer  to  the  device  data  sheet  for  recom -mendations  on  which  inductor  to  use  for  each  output voltage range.

Table 3. Phase Configuration Truth Table for Local Sensing

| PHASE CONFIGURATION           | SEL2   | SEL3   | SEL4   | R48   | R49   | R50   | R57   |
|-------------------------------|--------|--------|--------|-------|-------|-------|-------|
| 4 Outputs (1ϕ + 1ϕ + 1ϕ + 1ϕ) | >200Ω  | >200Ω  | >200Ω  | Open  | Open  | Open  | Open  |
| 3 Outputs (2ϕ + 1ϕ + 1ϕ)      | 0Ω     | >200Ω  | >200Ω  | 0Ω    | Open  | Open  | Open  |
| 2 Outputs (2ϕ + 2ϕ)           | 0Ω     | >200Ω  | 0Ω     | 0Ω    | Open  | 0Ω    | Open  |
| 2 Outputs (3ϕ + 1ϕ)           | 0Ω     | 0Ω     | >200Ω  | 0Ω    | Open  | Open  | 0Ω    |
| 1 Output (4ϕ)                 | 0Ω     | 0Ω     | 0Ω     | 0Ω    | 0Ω    | 0Ω    | 0Ω    |

## Table 4. Buck Output Naming Convention and Feedback

| PHASE CONFIGURATION           | NAMING CONVENTION AND PHASES USED     | FEEDBACK INPUTS   |
|-------------------------------|---------------------------------------|-------------------|
| 4 Outputs (1ϕ + 1ϕ + 1ϕ + 1ϕ) | Buck 1 (1ϕ) uses L1                   | SNS1P, SNS1N      |
| 4 Outputs (1ϕ + 1ϕ + 1ϕ + 1ϕ) | Buck 2 (1ϕ) uses L2                   | SNS2P             |
| 4 Outputs (1ϕ + 1ϕ + 1ϕ + 1ϕ) | Buck 3 (1ϕ) uses L3                   | SNS3P, SNS3N      |
| 4 Outputs (1ϕ + 1ϕ + 1ϕ + 1ϕ) | Buck 4 (1ϕ) uses L4                   | SNS4P             |
| 3 Outputs (2ϕ + 1ϕ + 1ϕ)      | Buck 1 (2ϕ) uses L1, L2               | SNS1P, SNS1N      |
| 3 Outputs (2ϕ + 1ϕ + 1ϕ)      | Buck 3 (1ϕ) uses L3                   | SNS3P, SNS3N      |
| 3 Outputs (2ϕ + 1ϕ + 1ϕ)      | Buck 4 (1ϕ) uses L4                   | SNS4P             |
| 2 Outputs (2ϕ + 2ϕ)           | Buck 1 (2ϕ) uses L1, L2               | SNS1P, SNS1N      |
| 2 Outputs (2ϕ + 2ϕ)           | Buck 3 (2ϕ) uses L3, L4               | SNS3P, SNS3N      |
| 2 Outputs (3ϕ + 1ϕ)           | Buck 1 (3ϕ) uses L1, L2, L3           | SNS1P, SNS1N      |
| 2 Outputs (3ϕ + 1ϕ)           | Buck 3 (1ϕ) uses L3                   | SNS4P             |
| 1 Output (4ϕ)                 | Buck 1 (4ϕ) uses ALL (L1, L2, L3, L4) | SNS1P, SNS1N      |

## MAX77542 Evaluation Kit

## Buck Feedback Sense Location

The EV kit uses additional 0Ω resistors to modify the feed -back routing between the IC and the output voltage sense location.  In  general,  single-phase  configurations  should take feedback close to the corresponding output capacitor as close to the IC as possible (this is the default EV kit configuration). However, the MAX77542 supports remote sensing in addition to local sensing. The EV kit includes a LOAD plane for testing remote sensing on the EV kit. Table 5 describes which resistors to install depending on whether local or remote sensing is being evaluated.

Buck 1, Buck 2, Buck 3, and Buck 4 can be connected to the remote LOAD plane by installing R45, R44, R46, and R47, respectively. These resistors are for the high current connections.

## Change Default Setup with RSEL1/RSEL2/ RSEL3/RSEL4/CFG1/CFG2

Note  that  the  MAX77542  EV  kit  is  default  configured for  four  output,  single-phase  operation,  with  VOUT1 set to  1.0V,  VOUT2  set  to  1.8V,  VOUT3  set  to  3.3V,  and VOUT4 set to 5.0V (by way of R15, R17, R19, and R21). The CFG1 sets MFIO1-8 to EN\_M1, POK\_M1, EN\_M2, POK\_M2,  EN\_M3,  POK\_M3,  EN\_M4,  and  POK\_M4 through R23. CFG2 sets Mx\_ILIM to 5.5A and Mx\_FREQ to 1.0MHz through R25. To evaluate other default configu -rations (for different voltages/ranges upon first powerup),

## Evaluates: MAX77542 in WLP Package

change the resistance at SEL1/2/3/4 and CFG1/2 with the potentiometers  or  R15,  R17,  R19,  R21,  R23,  and  R25. Refer to the device data sheet for more information.

## Alternative Low-Voltage Input (ALT\_IN) Functionality

The  ALT\_IN  pin  can  be  accessed  through  Jumper  J2. When  ALT\_IN  functionality  is  unused,  either  install  a jumper on J2 to tie ALT\_IN to GND or leave J2 open to leave ALT\_IN disconnected. To power ALT\_IN using one of the buck outputs or another alternative power source, use a wire to tie pin 1 of J2 or the ALT\_IN test point to the desired power source. Refer to the device data sheet for more information on the operation of the ALT\_IN pin.

## Test Points and Critical Node Measurement (VOUT and LX)

The  EV  kit  comes  with  test  points  where  sockets  can be  soldered  onto  the  board  for  measuring  the  critical nodes VOUT1-4 and LX1-4. Use these probe sockets to eliminate as much noise as possible when measuring the critical  nodes.  To  ensure  best  results,  use  a  very  short ground wire from the ground sleeve of the scope probe to the GND side of the probe test point, and use the bare tip of the probe directly to the signal side of the probe socket. Following these guidelines give the most accurate results when  measuring  parameters  like  output  voltage  ripple, switching waveforms, and load transient response.

## Table 5. Multiphase Buck Feedback Recommended Routing

| BUCK                    | LOCAL SENSING   | LOCAL SENSING   | REMOTE SENSING   | REMOTE SENSING   |
|-------------------------|-----------------|-----------------|------------------|------------------|
| BUCK                    | SNSxP           | SNSxN           | SNSxP            | SNSxN            |
| Buck 1 (1ϕ, 2ϕ, 3ϕ, 4ϕ) | R5              | R6              | R38              | R42              |
| Buck 2 (1ϕ)             | R8              | N/A             | R39              | N/A              |
| Buck 3 (1ϕ, 2ϕ)         | R10             | R11             | R40              | R43              |
| Buck 4 (1ϕ)             | R13             | N/A             | R41              | N/A              |

## Table 6. Test Point Selection for Measurement

| LOAD TRANSIENT, OUTPUT RIPPLE   | EEFICIENCY, LOAD REGULATION, LINE REGULATION, VOUT ACCURACY   | EEFICIENCY, LOAD REGULATION, LINE REGULATION, VOUT ACCURACY   | SWITCHING NODE   |
|---------------------------------|---------------------------------------------------------------|---------------------------------------------------------------|------------------|
| LOAD TRANSIENT, OUTPUT RIPPLE   | OUTPUT VOLTAGE                                                | INPUT VOLTAGE                                                 | LX1-4            |
| OUT-1-4 SOCKET                  | OUTxS, PGNDxS                                                 | INxS, PGNDxS                                                  | LX1-4 SOCKET     |

Figure 4. Example of Probing Sensitive Node

<!-- image -->

## Detailed Description of Software

The  GUI  software  allows  for  quick,  easy,  and  thorough evaluation  of  the  MAX77542. The  GUI  drives  I 2 C  communication  with  the  EV  kit.  Every  control  in  the  GUI corresponds directly to a register within the MAX77542. Refer to the Register Map section  of  the  MAX77542 IC data sheet for a complete description of the registers. See Figure 5 for a screenshot of the GUI upon first opening.

## Installation

Visit  the  product  webpage  at https://www.analog.com/ max77542evkit and  navigate  to  Design  Resources  to download the latest version of the EV kit software. Save the EV kit software installation file to a temporary folder and decompress the ZIP file. Run the .EXE installer and follow the on-screen instructions to complete the installation.

## Windows Driver

After plugging in the MAX77542EVKIT# to the PC with a Micro-USB cable for the first time, wait about 30 seconds for Windows to automatically install the necessary drivers.

## Connecting GUI

After opening the GUI, click Device in the upper left corner of the GUI window. Click Connect in the drop-down menu.

## MAX77542 Evaluation Kit

## Evaluates: MAX77542 in WLP Package

Figure 5. MAX77542 Evaluation Kit GUI Top-Level Interface (Before Connecting)

<!-- image -->

The Device  Synchronization menu  opens  ( Figure  6 ) once the MAX77542 IC responds (voltages on SYS pin, V IO   pin,  and  CE  pin  must  be  valid  on  the  MAX77542 IC  for  it  to  respond).  The  I 2 C  address  shown  is  the MAX77542 IC's 7-bit slave address. The address shown changes depending on the EV kit's CFG1 configuration. Click Connect and Read . The text at the bottom right of the GUI window changes from MAXUSB\_INTERFACE# is Disconnected to MAXUSB\_INTERFACE# is Connected .

## Global Configuration Tabs

The GUI has two tabs for global configuration of the bucks ( Global Configuration 1 and Global Configuration 2 ). Global  Configuration  1  displays  high-level  information about  the  IC  such  as  the  interrupts,  interrupt  masks, status  bits,  and  device  configuration.  Figure  7  shows  a snapshot of the Global Configuration 1 tab.

Global Configuration 2 is used to enable and disable the buck outputs, enable and disable low power mode, and change the  flexible  power  sequencer  settings.  Figure  8 shows a snapshot of the Global Configuration 2 tab.

Figure 6. Port Synchronization Menu

<!-- image -->

## MAX77542 Evaluation Kit

## Evaluates: MAX77542 in WLP Package

Figure 7. Global Configuration 1 Window

<!-- image -->

Figure 8. Global Configuration 1 Window

<!-- image -->

## MAX77542 Evaluation Kit

## Configuring the Regulator

The  GUI  has  a  configuration  tab  for  each  buck  (Buck 1-4  Configuration).  Use  these  to  adjust  the  various parameters of each buck. Note that Buck 2, Buck 3, and Buck 4 Configuration is disabled when those phases are configured as slave phases in multiphase configuration.

## Evaluates: MAX77542 in WLP Package

Figure 9 shows a snapshot of the Buck 1 Configuration tab. To use the GUI, select the desired option in one of the interactable fields (button, slider, drop-down list) and press Write next to it. Use the Read command to refresh the current state of the registers.

Figure 9. Buck 1 Configuration Window

<!-- image -->

## MAX77542 Evaluation Kit

## Configuring the Multifunction I/Os

The GUI has a configuration tab for the MFIOs. The tab includes the interrupt bits, interrupt mask bits, and status

## Evaluates: MAX77542 in WLP Package

bits.  It  also  includes  the  configuration  registers for each MFIO pin to set its functionality. Figure 10 shows a snap -shot of the MFIO Configuration tab.

Figure 10. MFIO Configuration Window

<!-- image -->

## MAX77542 Evaluation Kit

## Configuring the ADC

The GUI has a configuration tab for the ADC. The ADC tab includes the interrupt bits, interrupt masks, and status

## Evaluates: MAX77542 in WLP Package

bit  for  each ADC channel. It also includes the readback control bits, averaging control bits, measurement settings, and readback values. Figure 11 shows a snapshot of the ADC Configuration tab.

Figure 11. ADC Configuration Window

<!-- image -->

## PCB Layout Guidelines

Careful  circuit  board  layout  is  critical  to  achieve  low switching power losses and clean, stable operation. Refer to  the PCB  Layout  Guidelines of  the  MAX77542  data sheet at https://www.analog.com/max77542evkit

## Ordering Information

# Denotes RoHS compliance.

| PART           | TYPE   |
|----------------|--------|
| MAX77542EVKIT# | EV Kit |

## MAX77542 Evaluation Kit

## MAX77542 EV Kit Bill of Materials

| REF_DES                                                                                                    | QTY*                                                                                                       | MFG PART #                                                                                                                                                                 | MANUFACTURER                                                                                                                    | VALUE                                                                                                      | DESCRIPTION                                                                                                |
|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| C1, C4, C5                                                                                                 | 3                                                                                                          | C1005X7S1A225K050BC                                                                                                                                                        | TDK                                                                                                                             | 2.2µF                                                                                                      | CAP; SMT (0402); 2.2UF; 10%; 10V; X7S; CERAMIC                                                             |
| C2                                                                                                         | 1                                                                                                          | C1005X5R1E225K050; GRM155R61E225KE11                                                                                                                                       | TDK;MURATA                                                                                                                      | 2.2µF                                                                                                      | CAP; SMT (0402); 2.2µF; 10%; 25V; X5R; CERAMIC                                                             |
| C3, C6                                                                                                     | 2                                                                                                          | C1005X7S1A105K; GRM155C71A105KE11                                                                                                                                          | TDK;MURATA                                                                                                                      | 1µF                                                                                                        | CAP; SMT (0402); 1µF; 10%; 10V; X7S; CERAMIC                                                               |
| C7, C16, C25, C34                                                                                          | 4                                                                                                          | C1608X5R1E106M080AC; CL10A106MA8NRNC; GRM188R61E106MA73; ZRB18AR61E106ME01; GRT188R61E106ME13                                                                              | TDK;SAMSUNG ELECTRONICS; MURATA; MURATA;MURATA                                                                                  | 10µF                                                                                                       | CAP; SMT (0603); 10µF; 20%; 25V; X5R; CERAMIC                                                              |
| C8, C17, C26, C35                                                                                          | 4                                                                                                          | C1005X7R1C104K050BC; ATC530L104KT16; 0402YC104KAT2A; C0402X7R160-104KNE; CL05B104KO5NNNC; GRM155R71C104KA88; C1005X7R1C104K; CC0402KRX7R7BB104; EMK105B7104KV; CL05B104KO5 | TDK;AMERICAN TECHNICAL CERAMICS;AVK; VENKEL LTD.;SAMSUNG ELECTRONICS; MURATA; TDK;YAGEO PHICOMP;TAIYO YUDEN;SAMSUNG ELECTRONICS | 0.1µF                                                                                                      | CAP; SMT (0402); 0.1µF; 10%; 16V; X7R; CERAMIC                                                             |
| C9-C14, C18-C23, C27-C32, C36-C41                                                                          | 24                                                                                                         | C1608X5R1A226M080AC; GRM188R61A226ME15; CL10A226MPCNUBE; CL10A226MPMNUB; GRM187R61A226ME15                                                                                 | TDK;MURATA; SAMSUNG; SAMSUNG;MURATA                                                                                             | 22µF                                                                                                       | CAP; SMT (0603); 22µF; 20%; 10V; X5R; CERAMIC                                                              |
| C15, C24, C33, C42, C53, C55, C58-C60, C63, C65-C67, C69-C71, C75, C80                                     | 18                                                                                                         | GRM155R71E104KE14; C1005X7R1E104K050BB; TMK105B7104KVH; CGJ2B3X7R1E104K050BB                                                                                               | MURATA;TDK;TAIYO YUDEN;TDK                                                                                                      | 0.1µF                                                                                                      | CAP; SMT (0402); 0.1µF; 10%; 25V; X7R; CERAMIC                                                             |
| C44-C47                                                                                                    | 4                                                                                                          | TMK325ABJ476MM                                                                                                                                                             | TAIYO YUDEN                                                                                                                     | 47µF                                                                                                       | CAP; SMT (1210); 47µF; 20%; 25V; X5R; CERAMIC                                                              |
| L1, L2                                                                                                     | 2                                                                                                          | DFE252012F-1R0M                                                                                                                                                            | MURATA                                                                                                                          | 1UH                                                                                                        | EVKIT PART - INDUCTOR; SMT (1008); METAL; 1UH; 20%; 3.3A                                                   |
| L3, L4                                                                                                     | 2                                                                                                          | XEL4020-152ME                                                                                                                                                              | COIL CRAFT                                                                                                                      | 1.5UH                                                                                                      | INDUCTOR; SMT; N/A; 1.5UH; 20%; 7.5A                                                                       |
| U1                                                                                                         | 1                                                                                                          | MAX77542BAWU+                                                                                                                                                              | ANALOG DEVICES                                                                                                                  | MAX77542BAWU+                                                                                              | EVKIT PART-IC; MAX77542BAWU+; PACKAGE OUTLINE: 21-100610; PACKAGE CODE: W602A4Z+1; WLP60                   |
| COMPONENTS BELOW THIS LINEARE OUTSIDE OF THE IMMEDIATE MAX77542 EVALUATION CIRCUITAND SOLUTION SILKSCREEN. | COMPONENTS BELOW THIS LINEARE OUTSIDE OF THE IMMEDIATE MAX77542 EVALUATION CIRCUITAND SOLUTION SILKSCREEN. | COMPONENTS BELOW THIS LINEARE OUTSIDE OF THE IMMEDIATE MAX77542 EVALUATION CIRCUITAND SOLUTION SILKSCREEN.                                                                 | COMPONENTS BELOW THIS LINEARE OUTSIDE OF THE IMMEDIATE MAX77542 EVALUATION CIRCUITAND SOLUTION SILKSCREEN.                      | COMPONENTS BELOW THIS LINEARE OUTSIDE OF THE IMMEDIATE MAX77542 EVALUATION CIRCUITAND SOLUTION SILKSCREEN. | COMPONENTS BELOW THIS LINEARE OUTSIDE OF THE IMMEDIATE MAX77542 EVALUATION CIRCUITAND SOLUTION SILKSCREEN. |
| ALT_IN, CE, CFG1, CFG2, IRQB, MFIO1-MFIO8, SCL, SDA, SEL1- SEL4, VL12, VL34                                | 21                                                                                                         | 5002                                                                                                                                                                       | KEYSTONE                                                                                                                        | N/A                                                                                                        | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;      |

## Evaluates: MAX77542 in WLP Package

## MAX77542 Evaluation Kit

Evaluates: MAX77542 in WLP Package

## MAX77542 EV Kit Bill of Materials (continued)

| REF_DES                                                   |   QTY* | MFG PART #                                                                            | MANUFACTURER                                     | VALUE           | DESCRIPTION                                                                                                             |
|-----------------------------------------------------------|--------|---------------------------------------------------------------------------------------|--------------------------------------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------|
| C50-C52                                                   |      3 | ANY                                                                                   | ANY                                              | 10µF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 10µF; 16V; TOL=20%; MODEL=GRM SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR  |
| C54, C61, C64                                             |      3 | C1005X5R1A475K050                                                                     | TDK                                              | 4.7µF           | CAP; SMT (0402); 4.7µF; 10%; 10V; X5R; CERAMIC                                                                          |
| C56, C57                                                  |      2 | C0402C0G500270JNP; GRM1555C1H270JA01                                                  | VENKEL LTD.;MURATA                               | 27PF            | CAP; SMT (0402); 27PF; 5%; 50V; C0G; CERAMIC                                                                            |
| C72-C74, C79                                              |      4 | C0402C105K8PAC; CC0402KRX5R6BB105                                                     | KEMET;YAGEO                                      | 1µF             | CAP; SMT (0402); 1µF; 10%; 10V; X5R; CERAMIC                                                                            |
| C76, C78                                                  |      2 | ZRB15XR61A475ME01; CL05A475MP5NRN; GRM155R61A475MEAA; C1005X5R1A475M050BC             | MURATA;SAMSUNG; MURATA;TDK                       | 4.7µF           | CAP; SMT (0402); 4.7µF; 20%; 10V; X5R; CERAMIC                                                                          |
| C77                                                       |      1 | C0402C103K5RAC; GRM155R71H103KA88; C1005X7R1H103K050BE; CL05B103KB5NNN; UMK105B7103KV | KEMET;MURATA;TDK; SAMSUNG ELECTRONIC;TAIYO YUDEN | 0.01µF          | CAP; SMT (0402); 0.01µF; 10%; 50V; X7R; CERAMIC                                                                         |
| DS1, DS2                                                  |      2 | LTST-C190CKT                                                                          | LITE-ON ELECTRONICS INC.                         | LTST-C190CKT    | DIODE; LED; STANDARD; RED; SMT (0603); PIV=5.0V; IF=0.04A; -55 DEGC TO +85 DEGC                                         |
| GND, PGND7                                                |      2 | 5011                                                                                  | KEYSTONE                                         | N/A             | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| IN1-IN4, LOAD1, LOAD2, OUT1- OUT4, PGND, PGND1-PGND6, SYS |     18 | 9020 BUSS                                                                             | WEICO WIRE                                       | MAXIMPAD        | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                |
| IN1S-IN4S, LOADSP, OUT1S-OUT4S, VDD, VIO                  |     11 | 5000                                                                                  | KEYSTONE                                         | N/A             | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;        |
| J1                                                        |      1 | 10118193-0001LF                                                                       | FCI CONNECT                                      | 10118193-0001LF | CONNECTOR; FEMALE; SMT; MICRO USB B TYPE RECEPTACLE; RIGHT ANGLE; 5PINS                                                 |
| J2                                                        |      1 | PBC02SAAN                                                                             | SULLINS ELECTRONICS CORP.                        | PBC02SAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                               |
| J3, J4, J8-J17, J19, J20                                  |     14 | TSW-103-07-T-S                                                                        | SAMTEC                                           | TSW-103-07-T-S  | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 3PINS                                                        |

Evaluates: MAX77542 in WLP Package

## MAX77542 EV Kit Bill of Materials (continued)

| REF_DES                                                           |   QTY* | MFG PART #                         | MANUFACTURER              | VALUE          | DESCRIPTION                                                                                                        |
|-------------------------------------------------------------------|--------|------------------------------------|---------------------------|----------------|--------------------------------------------------------------------------------------------------------------------|
| J5-J7                                                             |      5 | TSW-102-26-T-T                     | SAMTEC                    | TSW-102-26-T-T | CONNECTOR; THROUGH HOLE; TSW SERIES; TRIPLE ROW; STRAIGHT; 6PINS                                                   |
| J18                                                               |      1 | PBC05SAAN                          | SULLINS ELECTRONICS CORP. | PBC05SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 5PINS; -65 DEGC TO +125 DEGC                                   |
| L9, L10                                                           |      2 | DFE252012F-1R0M                    | MURATA                    | 1UH            | EVKIT PART - INDUCTOR; SMT (1008); METAL; 1UH; 20%; 3.3A                                                           |
| L11, L12                                                          |      2 | XEL4020-152ME                      | COIL CRAFT                | 1.5UH          | INDUCTOR; SMT; N/A; 1.5UH; 20%; 7.5A                                                                               |
| L5-L8                                                             |      4 | DFE252012F-R47M                    | MURATA                    | 0.47UH         | EVKIT PART - INDUCTOR; SMT (1008); METAL; 0.47UH; 20%; 4.9A                                                        |
| L13-L15                                                           |      3 | BLM18AG601SN1                      | MURATA                    | 600            | INDUCTOR; SMT (0603); FERRITE-BEAD; 600; TOL=+/-; 0.5A                                                             |
| LOADSN, PGND1S-PGND4S                                             |      5 | 5001                               | KEYSTONE                  | N/A            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| MH1-MH4                                                           |      4 | 9032                               | KEYSTONE                  | 9032           | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                          |
| R1, R58, R71, R72, R76-R80                                        |      9 | RC0402FR-0710KL; CR0402-FX-1002GLF | YAGEO;BOURNS              | 10K            | RES; SMT (0402); 10K; 1%; +/-100PPM/ DEGC; 0.0630W                                                                 |
| R2, R3, R61, R62                                                  |      4 | ERJ-2GEJ472                        | PANASONIC                 | 4.7K           | RES; SMT (0402); 4.7K; 5%; +/-200PPM/ DEGC; 0.1000W                                                                |
| R4, R7, R9, R12, R44-R50, R57, R67-R70                            |     14 | RC0402JR-070RL; CR0402-16W-000RJT  | YAGEO PHYCOMP;VENKEL LTD. | 0              | RES; SMT (0402); 0; 5%; JUMPER; 0.0630W                                                                            |
| R5, R6, R8, R10, R11, R13, R23, R25, R29, R56, R59, R66, R73, R75 |     14 | RC0402JR-070RL; CR0402-16W-000RJT  | YAGEO PHYCOMP;VENKEL LTD. | 0              | RES; SMT (0402); 0; 5%; JUMPER; 0.0630W                                                                            |
| R14, R16, R18, R20, R22, R24                                      |      6 | 3296Y-1-204LF                      | BOURNS                    | 200K           | RESISTOR; THROUGH HOLE-RADIAL LEAD; 3296 SERIES; 200K OHM; 10%; 100PPM; 0.5W                                       |
| R15                                                               |      1 | ERJ-2RKF1871                       | PANASONIC                 | 1.87K          | RES; SMT (0402); 1.87K; 1%; +/-100PPM/ DEGC; 0.1000W                                                               |
| R17                                                               |      1 | CRCW040230K9FK                     | VISHAY DALE               | 30.9K          | RES; SMT (0402); 30.9K; 1%; +/-100PPM/ DEGC; 0.0630W                                                               |
| R19                                                               |      1 | CRCW040264K9FK; RC0402FR-0764K9L   | VISHAY;YAGEO              | 64.9K          | RES; SMT (0402); 64.9K; 1%; +/-100PPM/ DEGK; 0.0630W                                                               |
| R21, R64                                                          |      2 | CRCW0402100KFK; RC0402FR-07100KL   | VISHAY;YAGEO              | 100K           | RES; SMT (0402); 100K; 1%; +/-100PPM/ DEGC; 0.0630W                                                                |

Evaluates: MAX77542 in WLP Package

## MAX77542 EV Kit Bill of Materials (continued)

| REF_DES   |   QTY* | MFG PART #       | MANUFACTURER                        | VALUE          | DESCRIPTION                                                                                                |
|-----------|--------|------------------|-------------------------------------|----------------|------------------------------------------------------------------------------------------------------------|
| R26, R65  |      2 | RC0402FR-072K2L  | YAGEO                               | 2.2K           | RES; SMT (0402); 2.2K; 1%; +/-100PPM/ DEGC; 0.0630W                                                        |
| R27, R74  |      2 | RC0402FR-0722RL  | YAGEO PHYCOMP                       | 22             | RES; SMT (0402); 22; 1%; +/-100PPM/ DEGC; 0.0630W                                                          |
| R28       |      1 | CRCW0402470RFK   | VISHAY DALE                         | 470            | RES; SMT (0402); 470; 1%; +/-100PPM/ DEGC; 0.0630W                                                         |
| R51, R52  |      2 | RC0402FR-0727RL  | YAGEO                               | 27             | RES; SMT (0402); 27; 1%; +/-100PPM/ DEGC; 0.0630W                                                          |
| R53       |      1 | ERJ-2RKF1202     | PANASONIC                           | 12K            | RES; SMT (0402); 12K; 1%; +/-100PPM/ DEGC; 0.1000W                                                         |
| R54       |      1 | CRCW04021M00FK   | VISHAY DALE                         | 1M             | RES; SMT (0402); 1M; 1%; +/-100PPM/ DEGC; 0.0630W                                                          |
| R55       |      1 | ERJ-2RKF1001     | PANASONIC                           | 1K             | RES; SMT (0402); 1K; 1%; +/-100PPM/ DEGC; 0.1000W                                                          |
| R60       |      1 | RC0402FR-07150RL | YAGEO                               | 150            | RES; SMT (0402); 150; 1%; +/-100PPM/ DEGC; 0.0630W                                                         |
| R63       |      1 | CRCW0402169KFK   | VISHAY DALE                         | 169K           | RES; SMT (0402); 169K; 1%; +/-100PPM/ DEGK; 0.0630W                                                        |
| U3        |      1 | MAX38902A-ATA+   | MAXIM                               | MAX38902A-ATA+ | EVKIT PART - IC; MAX38902A-ATA+; PACKAGE OUTLINE DEVICE: 21-0168; PACKAGE CODE XXXX                        |
| U4        |      1 | MAX8512EXK+      | MAXIM                               | MAX3395EETC    | IC; TRANS; 15KV ESD-PROTECTED HIGH-DRIVE CURRENT QUAD-LEVEL TRANSLATOR WITH SPEED-UP CIRCUITRY; TQFN12 4X4 |
| U5, U8    |      2 | MAX3395EETC+     | MAXIM                               | MAX3395EETC    | IC; TRANS; 15KV ESD-PROTECTED HIGH-DRIVE CURRENT QUAD-LEVEL TRANSLATOR WITH SPEED-UP CIRCUITRY; TQFN12 4X4 |
| U6        |      1 | FT2232HL         | FUTURE TECHNOLOGY DEVICES INTL LTD. | FT2232HL       | IC; MMRY; DUAL HIGH-SPEED USB TO MULTIPURPOSE UART/FIFO; LQFP64                                            |
| VUSB      |      1 | 5010             | KEYSTONE                            | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;      |
| Y1        |      1 | 7M-12.000MAAJ    | TXC CORPORATION                     | 12MHZ          | CRYSTAL; SMT; 12MHZ; 18PF; TOL = +/-30PPM; STABILITY = +/-30PPM                                            |

## MAX77542 Evaluation Kit

## MAX77542 EV Kit Schematic

<!-- image -->

## MAX77542 EV Kit Schematic (continued)

<!-- image -->

## MAX77542 EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX77542 in WLP Package

## MAX77542 Evaluation Kit

## MAX77542 EV Kit PCB Layout

MAX77542 EV-Silk Top

<!-- image -->

MAX77542 EV-Top

<!-- image -->

## Evaluates: MAX77542 in WLP Package

MAX77542 EV-Internal2

<!-- image -->

MAX77542 EV-Internal3

<!-- image -->

## MAX77542 Evaluation Kit

## MAX77542 EV Kit PCB Layout (continued)

MAX77542 EV-Internal4

<!-- image -->

MAX77542 EV-Internal5

<!-- image -->

## Evaluates: MAX77542 in WLP Package

MAX77542 EV-Bottom

<!-- image -->

MAX77542 EV-Silk Bottom

<!-- image -->

## MAX77542 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                      | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 03/23           | Initial release                                                                                                                  | -               |
|                 1 | 10/24           | Update EV Kit Specifications and Default Configuration section, MAX77542 EV Kit Bill of Materials, and MAX77542 EV Kit Schematic | 2, 14, 18       |
|                 2 | 11/24           | Update MAX77542 EV Kit Bill of Materials                                                                                         | 14              |

Windows is a registered trademark and registered service mark of Microsoft Corporation.

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

Evaluates: MAX77542 in WLP Package