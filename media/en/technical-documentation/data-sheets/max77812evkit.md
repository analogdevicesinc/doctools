<!-- lastmod 2023-06-15 -->
<!-- image -->

## Evaluates: MAX77812

## General Description

The MAX77812 evaluation kit (EV kit) is a fully assembled and tested printed circuit board (PCB) that demonstrates the MAX77812. The EV kit allows for easy evaluation of each feature. It supports user-programmable phase configuration to one of five options:

- Single output in 4 phase configuration (default)
- Dual outputs in 3 + 1 phase configuration
- Dual outputs in 2 + 2 phase configuration
- Three outputs in 2 + 1 + 1 phase configuration
- Four outputs in 1 + 1 + 1 + 1 phase configuration

A  Micro-B  USB  cable  can  be  connected  between  the EV  kit  and  a  PC  for  easy  testing  of  the  I 2 C  interface. Windows ® -based software provides a user-friendly interface to exercise the features of the MAX77812. This software offers a graphical user interface (GUI) as well as a register-based interface.

Ordering Information appears at end of data sheet.

Click here to ask an associate for production status of specific part numbers.

## MAX77812 Evaluation Kit

## Features

- 20A Maximum Output Current (5A per phase)
- VIN Range: 2.5V to 5.5V
- VOUT Range: 0.250V to 1.525V with 5mV Steps
- ±0.5% Initial Output Accuracy with Differential Sensing
- 5 User-selectable Phase Configurations
- 91% Peak Efficiency (V IN  = 3.8V, V OUT  = 1.1V)
- Auto (SKIP/PWM) and Forced PWM Modes
- Enhanced Load Transient Response
- Programmable Ramp-up/down Slew Rates
- Programmable Startup/Shutdown Sequence
- UVLO, Short-Circuit, and Thermal Protections
- 2 User-programmable General-Purpose Inputs
- 3.4MHz High Speed I 2 C and 30MHz SPI Interface
- 3.408mm x 3.368mm 64-Bumps WLP Package

Figure 1. MAX77812 EV Kit Photo

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

©

19-8549; Rev 8; 5/23

One  Analog  Way,  Wilmington,  MA  01887  U.S.A.    |      Tel:  781.329.4700      |      © 2023  Analog  Devices,  Inc.  All  rights  reserved. 2023 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective owners.

## MAX77812 Evaluation Kit

## Default Configurations

- VOUT = 0.65V
- I OUT = 20A maximum
- Phase/Output configuration set to 1-Output: 4-Phase (Master 1)
- Chip Enable input (CE) is enabled
- Global Enable input (EN) is disabled
- Global Low Power Mode input (LPM) is disabled
- Serial Interface Selection input (I2C\_SPI\_SEL) set to I 2 C
- Default register settings
-  Auto SKIP/PWM mode is enabled
-  Enhanced transient response (ETR) is enabled
-  Startup delay and shutdown delay set to 0
-  Soft start slew rate and ramp-up slew rate set to 20mV/µs
-  Shutdown slew rate and ramp-down slew rate set to 5mV/µs
- Default shunt and jumper positions as shown in Table 1

## Quick Start

## Required Equipment

The MAX77812 evaluation package includes:

- MAX77812 EV kit
- Micro-B USB cable
- MAX77812 EV kit software (GUI)
- Adjustable DC power supply capable of supplying 12A
- Electronic load capable of sinking 20A
- Oscilloscope
- Two voltmeters
- Two ammeters

## Evaluates: MAX77812

Note: In  the  following  sections,  software-related  items are identified by bolding. Text in bold only refers to items directly from the EV kit software. Text in bold and underlined refers to items from the Windows OS.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Identify the connections and test points shown in Figure 2 . Confirm all shunts and jumpers are at their default positions as indicated in Table 1.
- 2) Install the MAX77812 EV kit software (GUI) on to your PC as instructed. Connect the Micro-B USB cable between PC and MAX77812 EV kit.
- 3) Set up the test circuit as shown in Figure 3. Preset the DC power supply to 3.8V and current limit to 0.5A. Do not turn on the power supply until all connections are completed.
- 4) Enable the power supply output and confirm the input current is low (&lt; 100µA). Open the MAX77812 GUI window and click on Device then Connect . If the connection is successful, it displays the message Currently connected to MINIQUSB CMOD and DEVICE MAX77812 . Click Read and close (Figure 4).
- 5) Go to the Buck then Master 1 tab and select the following settings (Figure 5 ):

Buck Master1 Output to 1 = Enabled Buck Master1 Output Voltage to 1000mV Click Write .

- 6) Verify that the voltage at V1 is approximately 1V.
- 7) AC measurements, e.g., output ripple and load transient can be monitored using oscilloscope at VO1S.

## Evaluates: MAX77812

Figure 2. MAX77812 EV Kit Description

<!-- image -->

Figure 3. Quick Start Connection Diagram

<!-- image -->

│

Figure 4. MAX77812 EV Kit GUI Connection

<!-- image -->

Figure 5. MAX77812 EV Kit GUI V OUT  Enable

<!-- image -->

## Detailed Description of Hardware and Software

## AC and DC Measurement Points

The EV kit has various optimized test points for AC and DC measurements to evaluate performance during load transient, output voltage ripple, load regulation, line regulation, output voltage accuracy and efficiency. These recommended test points are summarized in Table 2.

Table 1. Default Shunt Positions and Jumper Descriptions

| REFERENCE DESIGNATOR   | DEFAULT POSITION   | FUNCTION                           |
|------------------------|--------------------|------------------------------------|
| JU-CE                  | 1-2                | Chip enable                        |
| JU-EN                  | 2-3                | Global enable                      |
| JU-LPM                 | 2-3                | Global low power mode              |
| JU-GPI0                | 2-3                | GPI0 input                         |
| JU-GPI1                | 2-3                | GPI1 input                         |
| JU-SCL                 | CLOSE              | SCL pullup                         |
| JU-SDA                 | CLOSE              | SDApullup                          |
| JU-VIO                 | CLOSE              | On-board VIO supply                |
| J2 (MINIQ Supply)      | 1-2                | V USB supply                       |
| J101 (V L Supply)      | 1-2                | 1.8V supply                        |
| J4                     | CLOSE              | On-board transient load supply     |
| J5                     | CLOSE              | On-board transient load adjustment |
| J6                     | OPEN               | On-board transient load adjustment |
| JU-I2C_SPI_SEL         | 2-3                | Select I 2 C                       |
| JU-PH_CFG2             | 2-3                | Select 4-phase configuration       |
| JU-PH_CFG1             | 2-3                | Select 4-phase configuration       |
| JU-PH_CFG0             | 2-3                | Select 4-phase configuration       |

## Table 2. Test Points

| CONFIGURATION       | LOAD TRANSIENT, OUTPUT RIPPLE   | LOAD REGULATION, LINE REGULATION, VOUT ACCURACY   | EFFICIENCY                                             | EFFICIENCY                                             |
|---------------------|---------------------------------|---------------------------------------------------|--------------------------------------------------------|--------------------------------------------------------|
| CONFIGURATION       | LOAD TRANSIENT, OUTPUT RIPPLE   | LOAD REGULATION, LINE REGULATION, VOUT ACCURACY   | OUTPUT VOLTAGE                                         | INPUT VOLTAGE                                          |
| 4 Phase             | VO1S                            | V1/G1                                             | VOUT1S/GND1S                                           | VIN12S/GND1S                                           |
| 3 + 1 Phase         | VO1S, VO4S                      | V1/G1, V4/G4                                      | VOUT1S/GND1S, VOUT4S/GND4S                             | VIN12S/GND1S, VIN34S/GND4S                             |
| 2 + 2 Phase         | VO1S, VO3S                      | V1/G1, V3/G3                                      | VOUT1S/GND1S, VOUT3S/GND3S                             | VIN12S/GND1S, VIN34S/GND3S                             |
| 2 + 1 + 1 Phase     | VO1S, VO3S, VO4S                | V1/G1, V3/G3, V4/G4                               | VOUT1S/GND1S, VOUT3S/GND3S, VOUT4S/GND4S               | VIN12S/GND1S, VIN34S/GND3S, VIN34S/GND4S               |
| 1 + 1 + 1 + 1 Phase | VO1S, VO2S, VO3S, VO4S          | V1/G1, V2/G2, V3/G3, V4/G4                        | VOUT1S/GND1S, VOUT2S/GND2S, VOUT3S/GND3S, VOUT4S/GND4S | VIN12S/GND1S, VIN12S/GND2S, VIN34S/GND3S, VIN34S/GND4S |

## MAX77812 Evaluation Kit

## Load Transient Testing

The  MAX77812  EV  kit  has  an  on-board  circuit  to  create fast load transients. Measurements should be done  at  VO1S.  This  enables  SNS1P/SNS1N  signals to sense directly across the output capacitor near the  transient  load  for  more  accurate  measurements. Connect  a  signal  generator  output  (1.6V,  1kHz  square, 20%  duty  cycle)  to  J3  to  drive  the  on-board  circuit. If needed, adjust the signal generator output and variable resistor R16 to change the load current level and slew rate.

To use the on-board fast-load transient circuit in other phase configurations, first  program  the  EV  kit  as  described  in  the Phase/Output  Configuration  Programming section,  then follow  the  guidance  in  T able  3  and  T able  4  to  select  the desired  master  to  connect  to  the  on-board  transient  load output.

## GUI Programmable Features

The  MAX77812  requires  the  use  of  the  GUI  to  fully exercise  the  capabilities  of  the  device.  The  MAX77812 features  a  number  of  different  programmable  options to  customize  the  behavior  of  the  buck  regulator  during startup, operation, and shutdown. Figure 6 and Figure 7 show the  various  GUI  window  settings  to  configure  the MAX77812 to enable these options.

Figure 6. MAX77812 EV Kit Startup/Shutdown Delay, Low Power Mode, Forced PWM, Active Discharge, Output Voltage Settings

<!-- image -->

│

Figure 7. MAX77812 EV Kit Startup/Shutdown Slew Rate, Ramp-Up/Down Slew Rate, ETR, Current Sharing and Limit Function Settings

<!-- image -->

│

## MAX77812 Evaluation Kit

## Phase/Output Configuration Programming

The  MAX77812  supports  user-programmable  phase configurations.  All  supported  phase  configurations  are shown below:

- 1 Output: 4-phase (Master 1)
- 2 Outputs: 3-phase (Master 1) + 1-phase (Master 4)
- 2 Outputs: 2-phase (Master 1) + 2-phase (Master 3)
- 3 Outputs: 2-phase (Master 1) + 1-phase (Master 3) + 1-phase (Master 4)
- 4 Outputs: 1-phase (Master 1) + 1-phase (Master 2) + 1-phase (Master 3) + 1-phase (Master 4)

The MAX77812 EV kit default setting is 4-phase. See the Quick Start section and Table 1 for operating the EV kit in 4-phase configuration and its default settings. To program to other phase configurations, Figure 8, Table 3, Table 4, and  Table  5 summarize  the  changes  needed  in  GUI instructions  and  hardware  setup  as  well  as  jumper  and 0Ω resistor  settings. Table  4  also  describes  the  options to select local or remote differential sense for each buck master.

## Table 3. Phase/Output Configuration Programming

| CONFIGURATION                  | JU-PH_CFG2/ JU-PH_CFG1/ JU-PH_CFG0 SETTING   | GUI OUTPUT VOLTAGES ENABLE SETTING                                                                                                                                      |
|--------------------------------|----------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1 Output: 4 Phase              | Low/Low/Low                                  | 4 Phase: Buck Master 1 Output 1 = Enabled                                                                                                                               |
| 2 Outputs: 3 + 1 Phase         | Low/Low/High                                 | 3 Phase: Buck Master 1 Output 1 = Enabled 1 Phase: Buck Master 4 Output 1 = Enabled                                                                                     |
| 2 Outputs: 2 + 2 Phase         | Low/High/Low                                 | 2 Phase: Buck Master 1 Output 1 = Enabled 2 Phase: Buck Master 3 Output 1 = Enabled                                                                                     |
| 3 Outputs: 2 + 1 + 1 Phase     | Low/High/High                                | 2 Phase: Buck Master 1 Output 1 = Enabled 1 Phase: Buck Master 3 Output 1 = Enabled 1 Phase: Buck Master 4 Output 1 = Enabled                                           |
| 4 Outputs: 1 + 1 + 1 + 1 Phase | High/X/X                                     | 1 Phase: Buck Master 1 Output 1 = Enabled 1 Phase: Buck Master 2 Output 1 = Enabled 1 Phase: Buck Master 3 Output 1 = Enabled 1 Phase: Buck Master 4 Output 1 = Enabled |

## MAX77812 Evaluation Kit

Table 4. Programming Output Options

Evaluates: MAX77812

| REMOTE SENSE AT TRANSIENT LOAD   | R 28                         | X                                        |                                             |                                                                                    | X                                                                   |                                                                                           |                                                                                      | X                                                                                  |                                                                                         |
|----------------------------------|------------------------------|------------------------------------------|---------------------------------------------|------------------------------------------------------------------------------------|---------------------------------------------------------------------|-------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| REMOTE SENSE AT TRANSIENT LOAD   | R 24                         | X                                        |                                             |                                                                                    | X                                                                   |                                                                                           |                                                                                      | X                                                                                  |                                                                                         |
| REMOTE SENSE AT TRANSIENT LOAD   | R 27                         | X                                        |                                             | X                                                                                  |                                                                     |                                                                                           |                                                                                      | X                                                                                  |                                                                                         |
| REMOTE SENSE AT TRANSIENT LOAD   | R 23                         | X                                        |                                             | X                                                                                  |                                                                     |                                                                                           |                                                                                      | X                                                                                  |                                                                                         |
| REMOTE SENSE AT TRANSIENT LOAD   | R 26                         | X                                        |                                             | X                                                                                  |                                                                     |                                                                                           | X                                                                                    |                                                                                    |                                                                                         |
| REMOTE SENSE AT TRANSIENT LOAD   | R 22                         | X                                        |                                             | X                                                                                  |                                                                     |                                                                                           | X                                                                                    |                                                                                    |                                                                                         |
| REMOTE SENSE AT TRANSIENT LOAD   | R 25                         | X                                        |                                             | X                                                                                  |                                                                     |                                                                                           | X                                                                                    |                                                                                    |                                                                                         |
| REMOTE SENSE AT TRANSIENT LOAD   | R 21                         | X                                        |                                             | X                                                                                  |                                                                     |                                                                                           | X                                                                                    |                                                                                    |                                                                                         |
| LOCAL SENSE                      | R 41                         |                                          | X                                           | X                                                                                  |                                                                     | X                                                                                         | X                                                                                    |                                                                                    | X                                                                                       |
| LOCAL SENSE                      | R 5                          |                                          | X                                           | X                                                                                  |                                                                     | X                                                                                         | X                                                                                    |                                                                                    | X                                                                                       |
| LOCAL SENSE                      | R 40                         |                                          | X                                           |                                                                                    | X                                                                   | X                                                                                         | X                                                                                    |                                                                                    | X                                                                                       |
| LOCAL SENSE                      | R 4                          |                                          | X                                           |                                                                                    | X                                                                   | X                                                                                         | X                                                                                    |                                                                                    | X                                                                                       |
| LOCAL SENSE                      | R 9                          |                                          | X                                           |                                                                                    | X                                                                   | X                                                                                         |                                                                                      | X                                                                                  | X                                                                                       |
| LOCAL SENSE                      | R 7                          |                                          | X                                           |                                                                                    | X                                                                   | X                                                                                         |                                                                                      | X                                                                                  | X                                                                                       |
| LOCAL SENSE                      | R 8                          |                                          | X                                           |                                                                                    | X                                                                   | X                                                                                         |                                                                                      | X                                                                                  | X                                                                                       |
| LOCAL SENSE                      | R 6                          |                                          | X                                           |                                                                                    | X                                                                   | X                                                                                         |                                                                                      | X                                                                                  | X                                                                                       |
| BUCK OUTPUT CONNECTION           | R 35                         |                                          | X                                           |                                                                                    |                                                                     |                                                                                           | X                                                                                    |                                                                                    | X                                                                                       |
| BUCK OUTPUT CONNECTION           | R 34                         |                                          | X                                           |                                                                                    | X                                                                   | X                                                                                         |                                                                                      |                                                                                    |                                                                                         |
| BUCK OUTPUT CONNECTION           | R 33                         |                                          | X                                           |                                                                                    | X                                                                   | X                                                                                         |                                                                                      | X                                                                                  | X                                                                                       |
| BUCK OUTPUT CONNECTION           | R 32                         | X                                        |                                             |                                                                                    | X                                                                   |                                                                                           |                                                                                      | X                                                                                  |                                                                                         |
| BUCK OUTPUT CONNECTION           | R 31                         | X                                        |                                             | X                                                                                  |                                                                     |                                                                                           |                                                                                      | X                                                                                  |                                                                                         |
| BUCK OUTPUT CONNECTION           | R 30                         | X                                        |                                             | X                                                                                  |                                                                     |                                                                                           | X                                                                                    |                                                                                    |                                                                                         |
| BUCK OUTPUT CONNECTION           | R 29                         | X                                        |                                             | X                                                                                  |                                                                     |                                                                                           | X                                                                                    |                                                                                    |                                                                                         |
| TEST LOAD CONNECTION OPTIONS     | TEST LOAD CONNECTION OPTIONS | 1 M1 connects to on-board transient load | M1 connects to external load at VOUT1/GND12 | M1 connects to on-board transient load M4 connects to external load at VOUT4/GND34 | M4 connects to on-board transient load M1 connects to external load | 5 M1 connects to external load at VOUT1/GND12 M4 connects to external load at VOUT4/GND34 | 6 M1 connects to on-board transient load M3 connects to external load at VOUT3/GND34 | M3 connects to on-board transient load M1 connects to external load at VOUT1/GND12 | M1 connects to external load at VOUT1/GND12 M3 connects to external load at VOUT3/GND34 |
|                                  |                              |                                          | 2                                           | 3                                                                                  | 4                                                                   |                                                                                           |                                                                                      | 7                                                                                  | 8                                                                                       |
| PHASE CONFIG                     | PHASE CONFIG                 | 4 Phase                                  | 4 Phase                                     |                                                                                    | 3 +1 Phase                                                          |                                                                                           | 2 + 2 Phase                                                                          | 2 + 2 Phase                                                                        | 2 + 2 Phase                                                                             |

## MAX77812 Evaluation Kit

Table 4. Programming Output Options (continued)

Evaluates: MAX77812

| REMOTE SENSE AT TRANSIENT LOAD   | R 28                         |                                                                                                                                  |                                                                                                                                   | X                                                                                                                                 |                                                                                                                                        |
|----------------------------------|------------------------------|----------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| REMOTE SENSE AT TRANSIENT LOAD   | R 24                         |                                                                                                                                  | X                                                                                                                                 | X                                                                                                                                 |                                                                                                                                        |
| REMOTE SENSE AT TRANSIENT LOAD   | R 27                         |                                                                                                                                  |                                                                                                                                   |                                                                                                                                   |                                                                                                                                        |
| REMOTE SENSE AT TRANSIENT LOAD   | R 26 R 23                    | X                                                                                                                                | X                                                                                                                                 |                                                                                                                                   |                                                                                                                                        |
| REMOTE SENSE AT TRANSIENT LOAD   | R 22                         | X                                                                                                                                |                                                                                                                                   |                                                                                                                                   |                                                                                                                                        |
| REMOTE SENSE AT TRANSIENT LOAD   | R 25                         | X                                                                                                                                |                                                                                                                                   |                                                                                                                                   |                                                                                                                                        |
| REMOTE SENSE AT TRANSIENT LOAD   | R 21                         | X                                                                                                                                |                                                                                                                                   |                                                                                                                                   |                                                                                                                                        |
| LOCAL SENSE                      | R 41                         | X                                                                                                                                | X                                                                                                                                 |                                                                                                                                   | X                                                                                                                                      |
| LOCAL SENSE                      | R 5                          | X                                                                                                                                | X                                                                                                                                 |                                                                                                                                   | X                                                                                                                                      |
| LOCAL SENSE                      | R 40                         | X                                                                                                                                |                                                                                                                                   | X                                                                                                                                 | X                                                                                                                                      |
| LOCAL SENSE                      | R 4                          | X                                                                                                                                |                                                                                                                                   | X                                                                                                                                 | X                                                                                                                                      |
| LOCAL SENSE                      | R 9                          |                                                                                                                                  | X                                                                                                                                 | X                                                                                                                                 | X                                                                                                                                      |
| LOCAL SENSE                      | R 7                          |                                                                                                                                  | X                                                                                                                                 | X                                                                                                                                 | X                                                                                                                                      |
| LOCAL SENSE                      | R 8                          |                                                                                                                                  | X                                                                                                                                 | X                                                                                                                                 | X                                                                                                                                      |
| LOCAL SENSE                      | R 6                          |                                                                                                                                  | X                                                                                                                                 | X                                                                                                                                 | X                                                                                                                                      |
| BUCK OUTPUT CONNECTION           | R 35                         |                                                                                                                                  |                                                                                                                                   |                                                                                                                                   |                                                                                                                                        |
| BUCK OUTPUT CONNECTION           | R 34                         |                                                                                                                                  |                                                                                                                                   |                                                                                                                                   |                                                                                                                                        |
| BUCK OUTPUT CONNECTION           | R 33                         |                                                                                                                                  | X                                                                                                                                 | X                                                                                                                                 | X                                                                                                                                      |
| BUCK OUTPUT CONNECTION           | R 32                         |                                                                                                                                  |                                                                                                                                   | X                                                                                                                                 |                                                                                                                                        |
| BUCK OUTPUT CONNECTION           | R 30                         | X                                                                                                                                |                                                                                                                                   |                                                                                                                                   |                                                                                                                                        |
| BUCK OUTPUT CONNECTION           | R 29                         | X                                                                                                                                |                                                                                                                                   |                                                                                                                                   |                                                                                                                                        |
| TEST LOAD CONNECTION OPTIONS     | TEST LOAD CONNECTION OPTIONS | 9 M1 connects to on-board transient load M3 connects to external load at VOUT3/GND34 M4 connects to external load at VOUT4/GND34 | 10 M3 connects to on-board transient load M1 connects to external load at VOUT1/GND12 M4 connects to external load at VOUT4/GND34 | 11 M4 connects to on-board transient load M1 connects to external load at VOUT1/GND12 M3 connects to external load at VOUT3/GND34 | 12 M1 connects to external load at VOUT1/GND12 M3 connects to external load at VOUT3/GND34 M4 connects to external load at VOUT4/GND34 |
| PHASE CONFIG                     | PHASE CONFIG                 | 2+1+1 Phase                                                                                                                      | 2+1+1 Phase                                                                                                                       | 2+1+1 Phase                                                                                                                       | 2+1+1 Phase                                                                                                                            |

## MAX77812 Evaluation Kit

## Table 4. Programming Output Options (continued)

Evaluates: MAX77812

X = Install a 0Ω resistor.

<!-- image -->

| REMOTE SENSE AT TRANSIENT LOAD   | R 28                                                                               |                                                                                         |                                                                                                                                                                            |                                                                                                                                                                               | X                                                                                                                                                                          |                                                                                                                                                                                 |
|----------------------------------|------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| REMOTE SENSE AT TRANSIENT LOAD   | R 24                                                                               |                                                                                         |                                                                                                                                                                            |                                                                                                                                                                               | X                                                                                                                                                                          |                                                                                                                                                                                 |
| REMOTE SENSE AT TRANSIENT LOAD   | R 27                                                                               |                                                                                         |                                                                                                                                                                            | X                                                                                                                                                                             |                                                                                                                                                                            |                                                                                                                                                                                 |
| REMOTE SENSE AT TRANSIENT LOAD   | R 23                                                                               |                                                                                         |                                                                                                                                                                            | X                                                                                                                                                                             |                                                                                                                                                                            |                                                                                                                                                                                 |
| REMOTE SENSE AT TRANSIENT LOAD   | R 26                                                                               |                                                                                         | X                                                                                                                                                                          |                                                                                                                                                                               |                                                                                                                                                                            |                                                                                                                                                                                 |
| REMOTE SENSE AT TRANSIENT LOAD   | R 22                                                                               |                                                                                         | X                                                                                                                                                                          |                                                                                                                                                                               |                                                                                                                                                                            |                                                                                                                                                                                 |
| REMOTE SENSE AT TRANSIENT LOAD   | R 25                                                                               | X                                                                                       |                                                                                                                                                                            |                                                                                                                                                                               |                                                                                                                                                                            |                                                                                                                                                                                 |
| REMOTE SENSE AT TRANSIENT LOAD   | R 21                                                                               | X                                                                                       |                                                                                                                                                                            |                                                                                                                                                                               |                                                                                                                                                                            |                                                                                                                                                                                 |
| LOCAL SENSE                      | R 41                                                                               | X                                                                                       | X                                                                                                                                                                          | X                                                                                                                                                                             |                                                                                                                                                                            | X                                                                                                                                                                               |
| LOCAL SENSE                      | R 5                                                                                | X                                                                                       | X                                                                                                                                                                          | X                                                                                                                                                                             |                                                                                                                                                                            | X                                                                                                                                                                               |
| LOCAL SENSE                      | R 40                                                                               | X                                                                                       | X                                                                                                                                                                          |                                                                                                                                                                               | X                                                                                                                                                                          | X                                                                                                                                                                               |
| LOCAL SENSE                      | R 4                                                                                | X                                                                                       | X                                                                                                                                                                          |                                                                                                                                                                               | X                                                                                                                                                                          | X                                                                                                                                                                               |
| LOCAL SENSE                      | R 9                                                                                | X                                                                                       |                                                                                                                                                                            | X                                                                                                                                                                             | X                                                                                                                                                                          | X                                                                                                                                                                               |
| LOCAL SENSE                      | R 7                                                                                | X                                                                                       |                                                                                                                                                                            | X                                                                                                                                                                             | X                                                                                                                                                                          | X                                                                                                                                                                               |
| LOCAL SENSE                      | R 8                                                                                |                                                                                         | X                                                                                                                                                                          | X                                                                                                                                                                             | X                                                                                                                                                                          | X                                                                                                                                                                               |
| LOCAL SENSE                      | R 6                                                                                |                                                                                         | X                                                                                                                                                                          | X                                                                                                                                                                             | X                                                                                                                                                                          | X                                                                                                                                                                               |
| BUCK OUTPUT CONNECTION           | R 35                                                                               |                                                                                         |                                                                                                                                                                            |                                                                                                                                                                               |                                                                                                                                                                            |                                                                                                                                                                                 |
| BUCK OUTPUT CONNECTION           | R 34                                                                               |                                                                                         |                                                                                                                                                                            |                                                                                                                                                                               |                                                                                                                                                                            |                                                                                                                                                                                 |
| BUCK OUTPUT CONNECTION           | R 33                                                                               |                                                                                         |                                                                                                                                                                            |                                                                                                                                                                               |                                                                                                                                                                            |                                                                                                                                                                                 |
| BUCK OUTPUT CONNECTION           | R 32                                                                               |                                                                                         |                                                                                                                                                                            |                                                                                                                                                                               | X                                                                                                                                                                          |                                                                                                                                                                                 |
| BUCK OUTPUT CONNECTION           | R 31                                                                               |                                                                                         |                                                                                                                                                                            | X                                                                                                                                                                             |                                                                                                                                                                            |                                                                                                                                                                                 |
| BUCK OUTPUT CONNECTION           | R 30                                                                               |                                                                                         | X                                                                                                                                                                          |                                                                                                                                                                               |                                                                                                                                                                            |                                                                                                                                                                                 |
| BUCK OUTPUT CONNECTION           | R 29                                                                               | X                                                                                       |                                                                                                                                                                            |                                                                                                                                                                               |                                                                                                                                                                            |                                                                                                                                                                                 |
| TEST LOAD CONNECTION OPTIONS     | M1 connects to on-board transient load M2 connects to external load at VOUT2/GND12 | M3 connects to external load at VOUT3/GND34 M4 connects to external load at VOUT4/GND34 | M2 connects to on-board transient load M1 connects to external load at VOUT1/GND12 M3 connects to external load at VOUT3/GND34 M4 connects to external load at VOUT4/GND34 | 15 M3 connects to on-board transient load M1 connects to external load at VOUT1/GND12 M2 connects to external load at VOUT2/GND12 M4 connects to external load at VOUT4/GND34 | M4 connects to on-board transient load M1 connects to external load at VOUT1/GND12 M2 connects to external load at VOUT2/GND12 M3 connects to external load at VOUT3/GND34 | M1 connects to external load at VOUT1/GND12 M2 connects to external load at VOUT2/GND12 M3 connects to external load at VOUT3/GND34 M4 connects to external load at VOUT4/GND34 |
| PHASE CONFIG                     |                                                                                    | 13                                                                                      | 14                                                                                                                                                                         |                                                                                                                                                                               | 16                                                                                                                                                                         | 17                                                                                                                                                                              |
|                                  | 1+1+1+1 Phase                                                                      | 1+1+1+1 Phase                                                                           | 1+1+1+1 Phase                                                                                                                                                              | 1+1+1+1 Phase                                                                                                                                                                 | 1+1+1+1 Phase                                                                                                                                                              | 1+1+1+1 Phase                                                                                                                                                                   |

## MAX77812 Evaluation Kit

## Table 4. Programming Output Options (continued)

## Instructions

- 1) R29,  R30,  R31,  R32,  R33,  R34,  and  R35  connect the  output  of  the  buck  regulators  when  MAX77812 is  configured  as  a  2,  3,  or  4-phase  regulator.  In -stall these resistors as instructed in Table 4 to avoid unintentional shorting of the buck regulator outputs.
- 2) R6, R8, R7, R9, R4, R40, R5, and R41 connect the differential  sense  input  of  the  buck  regulator  to  the local sense point at the buck regulator output. R21, R25, R22, R26, R23, R27, R24, and R28 connect the differential sense input to the remote sense point at the  on-board  transient  load.  Use  either  local  sense or remote sense but not both at the same time. Connecting the differential sense input to both local and remote  sense  points  at  the  same  time  can  lead  to poorer regulation.

## Evaluates: MAX77812

(M1) connected to the on-board transient load and the second output (M3) connected to external load. In this case, option 6 is selected and the 0Ω resistors are installed as instructed in the table:

-  R29 and R30 are installed to connect VOUT1 and VOUT2 to form a 2-phase regulator connected to the on-board transient load.
-  R35 is installed to connect VOUT3 and VOUT4 to form a 2-phase regulator but does not connect to the on-board transient load. An external load can be connected between VOUT3/VOUT4 and GND34.
-  R4, R40, R5, and R41 are installed to connect the differential sense input of M3 and M4 to the local sense points.
-  R21, R25, R22, and R26 are installed to connect the differential sense input of M1 and M2 to the re -mote sense point at the on-board transient load.
- 3) Example: User would like to set up the MAX77812 EV kit  to  (2+2)  phase  configuration  with  the  first  output
-  R31, R32, R33, R34, R6, R8, R7, R9, R23, R27, R24, and R28 are not installed.

## Table 5. Default Output Voltage and Startup Delay Time

| DEFAULT OUTPUT VOLTAGE (V)   | DEFAULT OUTPUT VOLTAGE (V)   | DEFAULT OUTPUT VOLTAGE (V)   | DEFAULT OUTPUT VOLTAGE (V)   | STARTUP DELAY TIME (ms)   | STARTUP DELAY TIME (ms)   | STARTUP DELAY TIME (ms)   |
|------------------------------|------------------------------|------------------------------|------------------------------|---------------------------|---------------------------|---------------------------|
| M1_VOUT                      | M2_VOUT                      | M3_VOUT                      | M4_VOUT                      | M2_STUP_DLY               | M3_STUP_DLY               | M4_STUP_DLY               |
| 0.65                         | 0.65                         | 0.60                         | 0.60                         | 0                         | 0                         | 0                         |

## MAX77812 Evaluation Kit

## Evaluates: MAX77812

Figure 8. Various Phase Configurations Hardware Setup

<!-- image -->

│

## Component Suppliers

| SUPPLIER                  | PHONE             | WEBSITE                     |
|---------------------------|-------------------|-----------------------------|
| MURATA                    | 770-436-1300      | www.murata-northamerica.com |
| KEYSTONE                  | 718-956-8900      | www.keyelco.com             |
| LITE-ON ELECTRONICS; INC. | 408-946-4873      | www.us.lite-on.com          |
| NXP SEMICONDUCTORS        | 800-521-6274      | www.nxp.com                 |
| WEICO WIRE                | 631-254-2970      | www.weicowire.com           |
| FCI CONNECT               | 800-237-2374      | www.fci.com                 |
| SAMTEC                    | 800-726-8329      | www.semtec.com              |
| SULLINS ELECTRONICS CORP. | 888-774-3100      | www.sullinscorp.com         |
| TOKO                      | 847-803-6100      | www.tokoam.com              |
| FAIRCHILD SEMICONDUCTOR   | 408-822-2000      | www.fairchildsemi.com       |
| VISHAY DALE               | 402-563-6866      | www.vishay.com              |
| YAGEO PHICOMP             | 408-240-6200      | www.yageo.com               |
| BOURNS                    | 951-781-5500      | www.bourns.com              |
| PANASONIC                 | 800-344-2112      | www.panasonic.com           |
| FUTURE TECHNOLOGY DEVICES | 503-547-0988      | www.ftdichip.com            |
| HIROSE ELECTRIC CO LTD.   | 805-522-7958      | www.hirose-connector.com    |
| KYOCERA-KINSEKI           | 864-967-2150      | www.global.kyocera.com      |
| TE CONNECTIVITY           | 800-522-6752      | www.te.com                  |
| JOHNSON COMPONENTS        | 507-833-8822      | www.cinchconnectivity.com   |
| ALPS ELECTRIC             | +81 (3) 5499-8154 | www.alps.com                |

Note:

Indicate that you are using the MAX77812 when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX77812EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX77812

## MAX77812 Evaluation Kit

## MAX77812 EV Kit Bill of Materials

| PART                                                                                       | QTY                                                                 | DESCRIPTION                                                                                                   |
|--------------------------------------------------------------------------------------------|---------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| Minimal Bill of Materials for MAX77812 Single-Output 4-Phase Design                        | Minimal Bill of Materials for MAX77812 Single-Output 4-Phase Design | Minimal Bill of Materials for MAX77812 Single-Output 4-Phase Design                                           |
| C1                                                                                         | 1                                                                   | CAPACITOR; SMT 0402; CERAMIC; 1μF; 10V; 10%; X5R MURATA GRM188R61A105KA61                                     |
| C2, C12, C14-C16                                                                           | 5                                                                   | CAPACITOR; SMT 0402; CERAMIC; 0.1μF; 10V; 10%; X5R MURATA GRM155R71A104KA01D                                  |
| C3, C4, C21, C22                                                                           | 4                                                                   | CAPACITOR; SMT 0603; CERAMIC; 10μF; 6.3V; 5%; X5R MURATA GRM188R60J106ME47J                                   |
| C5 -C8                                                                                     | 4                                                                   | CAPACITOR; SMT 0603; CERAMIC; 22μF; 6.3V; 20%; X5R MURATA GRM188C80J226ME15D                                  |
| L1-L4                                                                                      | 4                                                                   | INDUCTOR; SMT 2520; 0.22μH; ±20%; 7A ALPS GLULMR2201A                                                         |
| R1, R2                                                                                     | 2                                                                   | RESISTOR, 0402, 1.5kΩ, 1%, 100PPM, 0.0625W, THICK FILM VISHAY CRCW04021K50FK                                  |
| R3                                                                                         | 1                                                                   | RESISTOR, 0402, 100kΩ, 1%, 100PPM, 0.0625W, THICK FILM VISHAY CRCW0402100KFK; YAGEO PHICOMP RC0402FR - 0700KL |
| U1                                                                                         | 1                                                                   | IC; MAX77812EWB+T; 64 BUMPS WLP PKG. 0.40mm PITCH MAXIM MAX77812EWB+T                                         |
| Other Components for Evaluation Kit                                                        | Other Components for Evaluation Kit                                 | Other Components for Evaluation Kit                                                                           |
| C9, C11, C17 -C20, C23, C24, C29, C32, C38, C139                                           | 0                                                                   | NOT INSTALLED: CAPACITOR; SMT 0603                                                                            |
| C10                                                                                        | 0                                                                   | NOT INSTALLED: CAPACITOR; SMT 0805                                                                            |
| C13                                                                                        | 1                                                                   | CAPACITOR; SMT 3528; TANTALUM; 100μF; 6.3V; 20% AVX TCJB107M006R0070                                          |
| C25 - C27, C33 - C37                                                                       | 8                                                                   | CAPACITOR; SMT 0402; CERAMIC; 4.3μF; 4V; 20%; X5R MURATA LLD154R60G435ME01                                    |
| C39                                                                                        | 0                                                                   | NOT INSTALLED: CAPACITOR; SMT 1206                                                                            |
| C40-C42                                                                                    | 3                                                                   | CAPACITOR; SMT 0603; CERAMIC; 10μF; 16V; 20%; X5R MURATA GRM188R61C106MA73D                                   |
| C108, C116, C117, C138, C150, C151, C155 - C157, C159                                      | 10                                                                  | CAPACITOR; SMT 0402; CERAMIC; 0.1μF; 25V; 10%; X7R TDK C100 5X7R1E104K050BB                                   |
| C110- C113, C115, C118, C137, C158                                                         | 8                                                                   | CAPACITOR; SMT 0402; CERAMIC; 1μF; 6.3V; 10%; X5R MURATA GRM155R60J105KE19D                                   |
| C114                                                                                       | 1                                                                   | CAPACITOR; SMT; 0603; CERAMIC; 0.47μF; 10V; 10% KEMET C0603C474K8PAC                                          |
| C120                                                                                       | 1                                                                   | CAPACITOR; SMT 0402; CERAMIC; 1μF; 6.3V; 20%; X5R TDK C1005X5R01105M050BB                                     |
| C152, C153                                                                                 | 2                                                                   | CAPACITOR; SMT; 0402; CERAMIC; 8.2pF; 50V; 0.25% KEMET C0402C829C5GAC                                         |
| C154                                                                                       | 1                                                                   | CAPACITOR; SMT 0603; CERAMIC; 4.7μF; 16V; 10%; X5R TDK C1608X5R1C475K080AC                                    |
| D100, D101                                                                                 | 2                                                                   | DIODE; LED; STANDARD; YELLOW; SMT 0603; PIV=5.0V; IF=0.02A LITE-ON LTST- C190YKT                              |
| D102, D1 03                                                                                | 2                                                                   | DIODE; LED; STANDARD; RED; SMT 0603; PIV=5.0V; IF=0.04A LITE-ON LTST- C190CKT                                 |
| FB100                                                                                      | 1                                                                   | INDUCTOR; SMT 0603; FERRITE - BEAD; 220Ω; +/ - 25%; 1.4A MURATA BLM18PG221SN1                                 |
| J1                                                                                         | 1                                                                   | CONNECTOR; FEMALE; SMT; MICRO USB B - TYPE REVERSE; 5PINS FCI CONNECT 10103592 - 0001LF                       |
| J2, J101, JU-CE, JU-EN, JU-GPI0, JU-GPI1, JU-I2C_SPI_SEL, JU-LPM, JU- PH_CFG0 -JU- PH_CFG2 | 11                                                                  | CONNECTOR; THROUGH HOLE; SINGLE ROW; STRAIGHT; 3PINS SAMTEC TSW -103- 07 -L-S                                 |
| J3                                                                                         | 0                                                                   | NOT INSTALLED: CONNECTOR; FEMALE THREADED; THROUGH HOLE; SMA; 5PINS JOHNSON COMPONENTS 142 - 0701 -231        |

│

Evaluates: MAX77812

## MAX77812 Evaluation Kit

## MAX77812 EV Kit Bill of Materials (continued)

| PART                                           |   QTY | DESCRIPTION                                                                                                                                        |
|------------------------------------------------|-------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| J4-J6                                          |     3 | CONNECTOR; MALE; THROUGH HOLE; STRAIGHT; 2PINS SULLINS PBC02SAAN                                                                                   |
| J100                                           |     0 | CONNECTOR; MALE; THROUGH HOLE; STRAIGHT; 10PINS TE CONNECTIVITY 2 - 1761603 -3                                                                     |
| JU-SCL, JU- SDA, JU - VIO                      |     3 | CONNECTOR; THROUGH HOLE; 2PINS SAMTEC TSW -102- 07 -T-S                                                                                            |
| Q1                                             |     1 | TRAN; HEXFET POWER MOSFET; NCH; SO - 8; PD - (2.5W); I - (18A); V - (30V) INTERNATIONAL RECTIFIER IRF8736PBF                                       |
| Q102                                           |     1 | TRAN; DUAL N - CHANNEL 2.5V SPECIFIED POWERTRENCH MOSFET; NCH; SOT563 - 6; PD - (0.625W); I - (0.6A); V - (20V) FAIRCHILD FDY3000NZ                |
| R4-R9, R40, R41                                |     0 | NOT INSTALLED: RESISTOR; 0603; 0Ω VISHAY CRCW06030000Z0EA                                                                                          |
| R10                                            |     1 | RESISTOR; 0402; 10kΩ; 1%; 100PPM; 0.125W; THICK FILM VISHAY CRCW080510K0FK; ROHM MCR10EZHF1002; PANASONIC ERJ - GENF1002V; YAGEO RC0805FR - 0710KL |
| R14                                            |     1 | RESISTOR; 0603; 0Ω; 5%; JUMPER; 0.10W; THICK FILM SAMSUNG RC1608J000CS; BOURNS CR0603 - J/ - 000ELF; YAGEO RC0603JR- 070RL                         |
| R15                                            |     1 | RESISTOR, 0603, 500Ω, 1%, 100PPM, 0.10W, THICK FILM VISHAY CRCW0603500RFK                                                                          |
| R16                                            |     1 | RESISTOR; THROUGH HOLE - RADIAL LEAD; 100Ω; 5%; 10PPM; 0.25W; METAL FOIL                                                                           |
| R17                                            |     1 | RESISTOR; THROUGH HOLE - RADIAL LEAD; 1kΩ; 5%; 10PPM; 0.25W; METAL FOIL VISHAY FOIL RESISTOR Y40531K00000J0                                        |
| R18, R132, R135                                |     0 | NOT INSTALLED: RESISTOR; 0402                                                                                                                      |
| R19, R20                                       |     2 | RESISTOR; 2512; 0.01Ω; 1%; 75PPM; 3.0W; THICK FILM BOURNS CRA2512 - FZ - R010ELF                                                                   |
| R21-R28, R102                                  |     9 | RESISTOR; 0603; 0Ω; 0%; JUMPER; 0.10W; THICK FILM VISHAY CRCW06030000Z0EA                                                                          |
| R29-R32                                        |     4 | RESISTOR; 2512; 0Ω; 1%; JUMPER; 1.0W; METAL FILM VISHAY CRCW25120000ZS                                                                             |
| R33- R35                                       |     0 | NOT INSTALLED: RESISTOR; 2512; 0Ω; 1%; JUMPER; 1.0W; METAL FILM VISHAY CRCW25120000ZS                                                              |
| R103                                           |     1 | RESISTOR; 0603; 1MΩ; 1%; 100PPM; 0.10W; THICK FILM YAGEO RC0402FR - 071ML                                                                          |
| R104, R105                                     |     2 | RESISTOR, 0402, 22Ω, 1%, 100PPM, 0.0625W, THICK FILM YAGEO RC0402FR - 0722R                                                                        |
| R107, R108, R112 -R118, R133, R134, R136- R147 |    23 | RESISTOR; 0402; 0Ω; 0%; JUMPER; 0.10W; THICK FILM VISHAY CRCW04020000ZS                                                                            |
| R109, R110                                     |     2 | RESISTOR, 0402, 4.7kΩ, 1%, 100PPM, 0.0625W, THICK FILM VISHAY CRCW04024K70FK                                                                       |
| R111, R131                                     |     2 | RESISTOR, 0402, 470Ω, 1%, 100PPM, 0.0625W, THICK FILM VISHAY CRCW0402470RFK                                                                        |
| R119                                           |     1 | RESISTOR; 0402; 1MΩ;1%; 100PPM; 0.10W; THICK FILM PANASONIC ERJ- 2RKF1004                                                                          |
| R120                                           |     1 | RESISTOR, 0402, 100kΩ, 1%, 100PPM, 0.0625W, THICK FILM VISHAY CRCW0402100KFK; YAGEO PHICOMP RC0402FR - 0700KL                                      |
| R121                                           |     1 | RESISTOR; 0402; 10kΩ; 1%; 100PPM; 0.0625W; THICK FILM VISHAY DALE CRCW040210K0FK; YAGEO PHICOMP RC0402FR - 0710K                                   |
| R129, R130                                     |     2 | RESISTOR; 0402; 100Ω; 1%; 100PPM; 0.063W; THICK FILM VISHAY DALE CRCW0402100RFK; PANASONIC 9C04021A1000FL; YAGEO PHICOMP RC0402FR - 07100RL        |

│

Evaluates: MAX77812

## MAX77812 Evaluation Kit

## MAX77812 EV Kit Bill of Materials (continued)

| PART                                                                                               |   QTY | DESCRIPTION                                                                                                                        |
|----------------------------------------------------------------------------------------------------|-------|------------------------------------------------------------------------------------------------------------------------------------|
| SW1                                                                                                |     1 | SWITCH; SPST; SMT; 15V; 0.02A; LIGHT TOUCH SWITCH PANASONIC EVQ - Q2K03W                                                           |
| U2                                                                                                 |     1 | IC; AMP; 1.1A; 35MHz CURRENT FEEDBACK AMPLIFIER; NSOIC16 LINEAR TECHNOLOGY LT1210CS#PBF                                            |
| U100                                                                                               |     1 | IC; CTRL; LOW - POWER LCD MICROCONTROLLER; TQFN56 - EP 8X8 MAXIM MAXQ2000 - RBX+                                                   |
| U101                                                                                               |     1 | IC; INFC; UART INTERFACE IC USB TO SERIAL; QFN32 - EP 5X5 FUTURE TECHNOLOGY FT232RQ                                                |
| U102                                                                                               |     1 | IC; VREG; ULTRA - LOW - NOISE, HIGH PSRR, LOW - DROPOUT, LINEAR REGULATOR; SC70 - 5 MAXIM MAX8511EXK33+                            |
| U103                                                                                               |     1 | IC; VREG; ULTRA - LOW - NOISE; HIGH PSRR; LOW - DROPOUT; LINEAR REGULATOR; SC70 - 5 MAXIM MAX8511EXK18+                            |
| U104                                                                                               |     1 | IC; VREG; ULTRA - LOW - NOISE HIGH PSRR LOW - DROPOUT LINEAR REGULATOR; SC70 - 5 MAXIM MAX8511EXK25+                               |
| U105                                                                                               |     1 | HIGH - /FULL - SPEED USB 2.0 SWITCH, DUALSPDT MAXIM MAX4906ELB+                                                                    |
| U107                                                                                               |     1 | IC; TRANS; 15kV ESD - PROTECTED HIGH - DRIVE CURRENT QUAD LEVEL TRANSLATOR WITH SPEED - UP CIRCUITRY; TQFN12 4X4 MAXIM MAX3395EETC |
| U108                                                                                               |     1 | IC; TRANS; QUAD - LEVEL TRANSLATOR; TSSOP14 MAXIM MAX3023EUD                                                                       |
| VO1S - VO4S                                                                                        |     4 | CONNECTOR; MALE; SMT; ULTRA SMALL SURFACE MOUNT COAXIAL CONNECTOR; STRAIGHT; 2PINS HIROSE ELECTRIC U.FL -R-SMT-1                   |
| Y101                                                                                               |     1 | CRYSTAL; SMT 3225 3.2X2.5; 8PF; 16MHz; +/ - 10PPM; +/ - 15PPM KYOCERA - KINSEKI CX3225SB16000D0FLJZZ                               |
| LOAD, LOAD1                                                                                        |     2 | MAXIM PAD                                                                                                                          |
| CE, EN, GPI0, GPI1, IRQB, I2CSPISEL, LPM, MISO, PH_CFG0 - PH_CFG2, SCL, SCS, SDA -MOSI, WDTRSTB_IN |    15 | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN KEYSTONE 5002                                                                        |
| GND1 - GND6, GND12, GND12A, GND34, GND34A, VOUT1 - VOUT4, VOUT1A - VOUT4A, VSYS1, VSYS2            |    20 | MAXIM PAD; WIRE; 20AWG WEICO 9020 BUSS                                                                                             |
| G1- G4, V1 - V4, GND1S - GND4S, VIN12S, VIN34S, VOUT1S - VOUT4S                                    |    18 | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN KEYSTONE 5000                                                                        |
| V+, V - , CS+, CS - , VIO, GATE                                                                    |     6 | TESTPOINT; MULTIPURPOSE KEYSTONE 5010                                                                                              |
| PCB                                                                                                |     1 | PCB; MAX77812 EVKIT                                                                                                                |

│

Evaluates: MAX77812

## MAX77812 Evaluation Kit

## MAX77812 EV Kit Schematics

Evaluates: MAX77812

<!-- image -->

## MAX77812 EV Kit Schematics (continued)

<!-- image -->

Evaluates: MAX77812

## MAX77812 EV Kit PCB Layouts

MAX77812 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

│

## MAX77812 EV Kit PCB Layouts (continued)

<!-- image -->

MAX77812 EV Kit PCB Layout-Top Layer

│

## MAX77812 EV Kit PCB Layouts (continued)

<!-- image -->

MAX77812 EV Kit PCB Layout-Internal Layer 2

│

## MAX77812 EV Kit PCB Layouts (continued)

<!-- image -->

MAX77812 EV Kit PCB Layout-Internal Layer 3

│

## MAX77812 EV Kit PCB Layouts (continued)

<!-- image -->

MAX77812 EV Kit PCB Layout-Internal Layer 4

│

## MAX77812 EV Kit PCB Layouts (continued)

MAX77812 EV Kit PCB Layout-Internal Layer 5

<!-- image -->

│

## MAX77812 EV Kit PCB Layouts (continued)

MAX77812 EV Kit PCB Layout-Bottom Layer

<!-- image -->

│

## MAX77812 EV Kit PCB Layouts (continued)

MAX77812 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

## MAX77812 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                   | PAGES CHANGED        |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|
|                 0 | 6/16            | Initial release                                                                                                                                                                               | -                    |
|                 1 | 7/16            | Updated Figure 1, Figure 2, Table 1, Table 2, Load Transient Testing section, Phase Configuration Programming section, Table 3, Bill of Materials, Schematics, PCB Layouts, and added Table 4 | 1, 2, 6, 7, 9, 12─24 |
|                 2 | 4/17            | Updated Figures 1─8, Table 2, Schematics, PCB Layouts, Bill of Materials, and text in Features and Quick Start sections                                                                       | 1─13, 15─24          |
|                 3 | 5/17            | Updated Figures 2─8, Table 1, Table 2, Bill of Materials, and text in Features and Quick Start sections                                                                                       | 1─7, 9, 11─13        |
|                 4 | 12/17           | Updated Features section, Figure 1, Figure 2, Component Suppliers table, and MAX77812 EV Kit Bill of Materials table                                                                          | 1, 2, 10, 11         |
|                 5 | 7/18            | Updated Features section, Figure 1, Figure 2, Phase/Output Configuration Programming section, Table 4, and MAX77812 EV Kit Bill of Materials table                                            | 1, 2, 6, 8, 11─13    |
|                 6 | 2/19            | Updated part number in MAX77812 EV Kit Bill of Materials table from MAX77812 to MAX77812EWB+T                                                                                                 | 16, 17               |
|                 7 | 3/19            | Added Default Configurations section and Table 5, updated Phase/Output Configuration Programming section and MAX77812 EV Kit Bill of Materials table                                          | 2, 8, 12, 15─17      |
|                 8 | 5/23            | Updated General Description section                                                                                                                                                           | 1                    |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX77812