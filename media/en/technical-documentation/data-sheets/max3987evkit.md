<!-- lastmod 2022-08-02 -->
## General Description

The MAX3987 evaluation kit (EV kit) is a fully assembled and tested PCB that demonstrates the capabilities of the MAX3987  8.5Gbps  quad  equalizer  and  preemphasis driver.  The  EV  kit  can  be  controlled  using  a  PC  to  run the evaluation software or using DIP switches mounted on the EV kit to bias hardware pins. The included software  is  Windows M compatible  and  provides  a  simple graphical user interface (GUI) to configure all available device features. The software communicates with the EV kit  through a USB port and provides three methods for configuration. The primary method is a simple point-andclick  interface.  The  other  debug interfaces allow direct register  read/write  operations,  or  software-controlled external  pin  programming.  The  data  I/O  traces  on  the EV kit are controlled impedance with matched lengths. All  external  connections are AC-coupled with standard SMA connectors for easy connection to test equipment.

Windows is a registered trademark of Microsoft Corp.

<!-- image -->

## MAX3987 Evaluation Kit

EV Kit Contents

- S MAX3987 EV Kit Board

- S USB Cable

- S AC/DC Power Supply

Features

- S SMA Connectors for Inputs and Outputs
- S Controlled Impedance and Matched Length Input and Output Signal Traces
- S Software- or Hardware-Controlled Operation
- S Windows Software Provides Point-and-Click Access to MAX3987 Features
- S Silkscreen Labels Identify All Signal Traces, Connectors, Jumpers, and LEDs
- S Power Through USB or External 5V Supply

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX3987EVKIT+ | EV Kit |

## Component List

| DESIGNATION                                           |   QTY | DESCRIPTION                                             |
|-------------------------------------------------------|-------|---------------------------------------------------------|
| C1-C6, C8- C11, C14-C19, C23, C24, C29, C30, C39, C40 |    22 | 0.1 F F Q 10%, 16V ceramic capacitors (0402)            |
| C7, C12, C13, C20, C26, C27, C28, C36                 |     8 | 4.7 F F Q 5%, 6.3V multilayer ceramic capacitors (0603) |
| C21, C22                                              |     2 | 22pF Q 5%, 25V NPO ceramic capacitors (0603)            |
| C25, C35, C41                                         |     3 | 0.1 F F Q 20%, 16V X7R ceramic capacitors (0603)        |
| C33, C34, C37, C38                                    |     4 | 10 F F Q 20%, 10V ceramic capacitors (1206)             |
| D1                                                    |     1 | 40V, 1A Schottky diode                                  |
| DS1                                                   |     1 | Green LED                                               |
| J1-J4, J6-J17                                         |    16 | 50 I SMA connectors, tab contact, edge mount            |
| J5                                                    |     1 | Dual-row (2 x 5) 10-pin vertical header, 0.1in centers  |

| DESIGNATION           |   QTY | DESCRIPTION                                                    |
|-----------------------|-------|----------------------------------------------------------------|
| J18                   |     1 | USB type-B single-port black right-angle receptacle            |
| J19                   |     1 | Dual-row (2 x 3) 6-pin vertical header, 0.1in centers          |
| J20                   |     1 | DC power jack, 2.1mm/5.5mm closed frame, right-angle PCB mount |
| JP1, JP2              |     2 | 3-pin vertical headers, 0.1in centers                          |
| R1, R2, R13, R14, R15 |     5 | 10.0k I Q 5%, 1/16W resistors (0603)                           |
| R3                    |     1 | 0.0 I , 1/16W resistor (0603), shorted on PCB                  |
| R4                    |     1 | 1.00M I Q 5%, 1/16W resistor (0603)                            |
| R7, R8                |     2 | 33.2 I Q 1%, 1/16W resistors (0603)                            |
| R16                   |     1 | 330 I Q 5%, 1/16W resistor (0603)                              |
| RP1-RP4               |     4 | 1k I Q 5%, 1/16W quad resistor packs (quad 0402)               |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

## MAX3987 Evaluation Kit

## Component List (continued)

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                        |
|---------------|-------|--------------------------------------------------------------------|
| RP5-RP8       |     4 | 10k I Q 5%, 1/16W quad resistor packs (quad 0402)                  |
| SW1, SW2      |     2 | 8-position, 16-pin, low-profile DIP switches                       |
| SW3           |     1 | 4-pin momentary single-pole switch                                 |
| TP1           |     1 | Wire-loop plated-hole red test point                               |
| TP2           |     1 | Wire-loop plated-hole black test point                             |
| U1            |     1 | 2-wire interfaced port expander (24 TSSOP) Maxim MAX7318AUG        |
| U3            |     1 | 8.5Gbps quad equalizer (48 TQFN-EP*) Maxim MAX3987ETM+             |
| U4            |     1 | HCS08: 8-bit USB microcontroller (64 LQFP) Freescale MC9S08JM32CLH |

## Quick Start

The MAX3987 evaluation kit (EV kit) is designed to operate in a stand-alone pin-bias hardware-controlled mode or a software-controlled mode requiring the use of a PC and software. In the pin-bias hardware-controlled mode, the EV kit uses DIP switches SW1 and SW2 on the EV kit board to configure the MAX3987. If additional control is desired, a GUI software interface is provided to control the  individual  registers,  allowing  per-channel  setting  of items such as signal preemphasis and output amplitude levels.

| DESIGNATION            | QTY   | DESCRIPTION                                                     |
|------------------------|-------|-----------------------------------------------------------------|
| U5                     | 1     | Low-dropout linear regulator (16 TSSOP-EP*) Maxim MAX1793EUE-33 |
| U6                     | 1     | Low-dropout linear regulator (16 TSSOP-EP*) Maxim MAX1793EUE-25 |
| X1                     | 1     | 12.0000MHz Q 50ppm crystal (C L = 20pF) HC49SD                  |
| C42-C45, JPB1, TP3-TP6 | -     | Unpopulated components for test only                            |
| -                      | 1     | AC/DC adapter, output 5V DC at 2.6A PN DMS050260-P5P-SZ         |
| -                      | 1     | USB type-A to type-B cable                                      |
| -                      | 4     | Shunts                                                          |
| -                      | 6     | Rubber stand-offs                                               |
| -                      | 1     | PCB: MAX3987 EVALUATION BOARD+ Rev A                            |

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Pin-Bias Hardware Control Quick Start

- 1)  Install a shunt on jumper JP\_ between 5V-ADAPTER and  BOARD\_POWER  to  use  an  external  5V  wall adapter.

## Table 1. Output Drive Level Pin Programming

| PIN/POSITION   | SILKSCREEN REFERENCE   | FUNCTION                                                                    | SWITCH POSITION OFF                                                         | SWITCH POSITION ON                                                          |
|----------------|------------------------|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| SW1-1          | OC_EN                  | Enable/Disable Offset Cancellation                                          | Offset Cancellation Turned ON (Enabled)                                     | Offset Cancellation Turned OFF (Disabled)                                   |
| SW1-2 to SW1-4 | (No Text)              | -                                                                           | -                                                                           | -                                                                           |
| SW1-5          | A1                     | I 2 C Physical Address                                                      | Sets Up I 2 C Address: 0-F Hex Acceptable                                   | Sets Up I 2 C Address: 0-F Hex Acceptable                                   |
| SW1-6          | A2                     | I 2 C Physical Address                                                      | Sets Up I 2 C Address: 0-F Hex Acceptable                                   | Sets Up I 2 C Address: 0-F Hex Acceptable                                   |
| SW1-7          | A3                     | I 2 C Physical Address                                                      | Sets Up I 2 C Address: 0-F Hex Acceptable                                   | Sets Up I 2 C Address: 0-F Hex Acceptable                                   |
| SW1-8          | A4                     | I 2 C Physical Address                                                      | Sets Up I 2 C Address: 0-F Hex Acceptable                                   | Sets Up I 2 C Address: 0-F Hex Acceptable                                   |
| SW2-1          | I2C_EN                 | I 2 C Enable/Disable                                                        | Software-Controlled Operation                                               | Pin-Bias Mode Operation                                                     |
| SW2-2          | TX_EN                  | Power-On/Off Transmitter                                                    | All Outputs Powered ON                                                      | All Outputs Powered OFF                                                     |
| SW2-3          | TX_LV0                 | Set Output Amplitude Bit 0                                                  |                                                                             |                                                                             |
| SW2-4          | TX_LV1                 | Drive Level Pin Programming (see Table 2) Set Output Amplitude Bit 1        | Drive Level Pin Programming (see Table 2) Set Output Amplitude Bit 1        | Drive Level Pin Programming (see Table 2) Set Output Amplitude Bit 1        |
| SW2-5          | TX_PE0                 | Set Preemphasis Level Bit 0                                                 |                                                                             |                                                                             |
| SW2-6          | TX_PE1                 | Global Output Preemphasis Control (see Table 3) Set Preemphasis Level Bit 1 | Global Output Preemphasis Control (see Table 3) Set Preemphasis Level Bit 1 | Global Output Preemphasis Control (see Table 3) Set Preemphasis Level Bit 1 |
| SW2-7          | SDSF                   | Select Signal-Detect Type                                                   | Select Slow-Response Signal Detect (SD1)                                    | Select Fast-Response Signal Detect (SD2)                                    |
| SW2-8          | SQ                     | Enable/Disable Output Squelch and Signal Detect                             | Disabled                                                                    | Enabled                                                                     |

## Table 2. Output Drive Level Pin Programming

| SW2-4 POSITION   |   TX_LV1 PIN VOLTAGE (V) | SW2-3 POSITION   |   TX_LV0 PIN VOLTAGE (V) |   LV REGISTER VALUE | OUTPUT DRIVE LEVEL      |
|------------------|--------------------------|------------------|--------------------------|---------------------|-------------------------|
| ON               |                        0 | ON               |                        0 |                  00 | Level 1 drive (minimum) |
| ON               |                        0 | OFF              |                      3.3 |                  01 | Level 2 drive           |
| OFF              |                      3.3 | ON               |                        0 |                  10 | Level 3 drive (maximum) |
| OFF              |                      3.3 | OFF              |                      3.3 |                  11 | Do not use this mode    |

## Table 3. PE Pin Programming

| SW2-6 POSITION   |   TX_PE1 PIN VOLTAGE (V) | SW2-5 POSITION   |   TX_PE0 PIN VOLTAGE (V) |   PE REGISTER VALUE |   PREEMPHASIS VALUE (dB) |
|------------------|--------------------------|------------------|--------------------------|---------------------|--------------------------|
| ON               |                        0 | ON               |                        0 |                  00 |                        0 |
| ON               |                        0 | OFF              |                      3.3 |                  01 |                        3 |
| OFF              |                      3.3 | ON               |                        0 |                  10 |                        7 |
| OFF              |                      3.3 | OFF              |                      3.3 |                  11 |                       11 |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX3987 Evaluation Kit

- 2)  Set the SW2-1 switch labeled I2C\_EN to the ON position to enable pin-bias mode. Note that in this mode the DIP switch settings control all 4 channels. To control the channels individually, software mode must be used.
- 3)  Using the information in Tables 1, 2, and 3, set the remaining SW1 and SW2 DIP switches to configure the device for the desired mode of operation.

## MAX3987 Evaluation Kit

- 4)  Connect the 5V wall adapter power to the EV kit to power up the device and begin testing. Note that the control pins of the device are constantly read so any changes to the switches immediately affect operation of the device.
- 5)  To  begin  testing,  connect  the  signal  source(s)  to any pair of input SMA connectors (RX0-RX3). The differential  input-signal  voltage  can  be  between

200mVP-P  and  1600mVP-P  with  a  data  rate  from 1Gbps  to  8.5Gbps.  The  output  signal(s)  can  be observed  by  connecting  the  associated  pair  of output SMA connectors (TX0-TX3) to a high-speed oscilloscope with 50 I termination.

- 6)  Figures 1 and 2 show setup examples for testing and evaluating the device's equalization and preemphasis features.

Figure 1. Receive Equalizer Test Setup. The points A and B are referenced for AC parameter test conditions. The filter is a lowpass fourth-order Bessel-Thompson (4th OBT LPF) or equivalent (BW = 0.75 x bit rate ±10%).

<!-- image -->

Figure 2. Preemphasis Test Setup. The points A and C are referenced for AC parameter test conditions. The filter is a lowpass fourth-order Bessel-Thompson (4th OBT LPF) or equivalent (BW = 0.75 x bit rate ±10%).

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Software Control Quick Start

Note: In  the  following  sections,  software-related  items are  identified  by  bolding.  Text  in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## Evaluation Software Installation

Installing the evaluation software for the EV kit on a PC has one or two steps. The first step involves running the EV kit software installer. The second step involves installing the USB driver, and is only necessary when the driver is not already installed on the PC.

Note: Do not connect the USB port of the EV kit to the PC until the MAX3987 Evaluation Kit Setup Wizard has successfully completed the software installation.

- 1)  Run the MAX3987\_REV#.#.msi installer package that was supplied with the EV kit.
- 2)  Click Next at  the  welcome  screen  dialog  box.  See Figure 3.

Figure 3. Software Installer Setup Wizard Introduction

<!-- image -->

## MAX3987 Evaluation Kit

- 3)  Click Next to  accept  the  default  destination  folder. See Figure 4.
- 4)  Click Next to  begin  the  software  installation.  See Figure 5.

Figure 4. Software Installer Destination Folder Selection

<!-- image -->

Figure 5. Software Installer Confirm Installation

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX3987 Evaluation Kit

- 5)  If the software is installed on a PC with Windows Vista M or  Windows  7,  a User  Account  Control dialog  box appears. Click Yes to  allow  the  software  installation to continue. See Figure 6. The dialog box switches to a progress bar and indicates that the EV kit software is  being  installed.  The  software  installation  should complete quickly since it is small. See Figure 7.
- 6)  Click Next to dismiss the USB driver reminder. See Figure 8.
- 7)  Click Close to  complete the installation and exit the software installer. See Figure 9.

Figure 6. Windows User Account Control Warning

<!-- image -->

Figure 7. Software Installer Progress Indicator

<!-- image -->

Figure 8. Software Installer USB Driver Reminder

<!-- image -->

Figure 9. Software Installer Setup Wizard Completion

<!-- image -->

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

- 8)  Connect the USB port of the EV kit to the PC. If this is the first time installing the EV kit software, it is necessary  to  install  the  USB  driver.  There  are  two  sets  of driver installation instructions. Follow the steps in the following  sections  to  install  on  a  PC  with  Windows Vista, Windows 7, or Windows XP M .

## USB Driver Installation (Windows Vista and Windows 7) When the USB port of the EV kit is connected to a PC with  Windows  Vista  or  Windows  7,  Windows  does  not Found . It is necessary to manually install

automatically install the driver nor does it start the New Hardware Wizard the USB driver using the Windows Device Manager .

- 1)  Open  the  Windows Device  Manager .  To  do  this, use  the  following  path  in  Windows: Start → Control Panel → System  and  Security → System → Device Manager .
- 2)  In  the Device  Manager window,  there  is  a  section  labeled Other  devices with  a  device  labeled Unknown  device . Right-click on  the Unknown device followed  by Update  Driver  Software .  See Figure 10.

<!-- image -->

Figure 10. Device Manager Unknown Device Selection

<!-- image -->

## MAX3987 Evaluation Kit

- 3)  Click Browse my computer for driver software to begin the driver installation. See Figure 11.
- 4)  Click the Browse button and select the same installation  directory  used  in  step  3  of  the  GUI  software installation instructions (the default directory is C:\Program Files\MAX3987 Evaluation Kit). Click Next to  continue.  The Found  New  Hardware  Wizard searches for a short duration before continuing with the driver installation. See Figure 12.

Figure 11. Update Driver Software-Manual Install

<!-- image -->

Figure 12. Driver Software Folder Selection

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## MAX3987 Evaluation Kit

- 5)  A notification that Windows cannot verify the publisher of this driver software appears. This notice is normal, and the driver has been verified to work with Windows Vista and Windows 7. Click Install this driver software anyway to continue with the driver installation. See Figure 13.The dialog box switches to a progress bar and indicates that the HC9S08JMxx CDC driver is being installed. The driver installation should complete in a relatively short time. See Figure 14.

Figure 13. Windows Unverified Publisher Driver Install Warning

<!-- image -->

Figure 14. Driver Software Installer Progress Indicator

<!-- image -->

8      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 6)  Click Close to complete the driver installation and exit the software installer. See Figure 15.
- 7)  The  EV  kit  software  and  the  USB  driver  are  now installed and ready for use.

Figure 15. Driver Software Installer Completion

<!-- image -->

<!-- image -->

## USB Driver Installation (Windows XP)

When the USB port of the EV kit is connected to a PC with  Windows XP, Windows automatically launches the Found  New  Hardware  Wizard .  If  Windows  does  not launch the Found New Hardware Wizard , the driver is already installed and the remaining steps are not necessary.

- 1)  Check Install  from  a  list  or  specific  location (Advanced) and click Next to continue. See Figure 16.

<!-- image -->

Figure 16. Install Driver Software-Manual Install

<!-- image -->

## MAX3987 Evaluation Kit

- 2)  Check Search  for  the  best  driver  in  these  locations ,  and  check  the Include  this  location  in  the search box. Click the Browse button and select the same installation directory used in step 3 of the GUI software installation instructions (the default directory is  C:\Program  Files\MAX3987  Evaluation  Kit).  Click Next to continue. The Found New Hardware Wizard searches for a short duration before continuing with the driver installation. See Figure 17.

Figure 17. Driver Software Folder Selection

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    9

## MAX3987 Evaluation Kit

- 3)  A notification that the driver has not passed Windows Logo testing appears. This notice is normal, and the driver  has  been  verified  to  work  with  Windows  XP. Click Continue Anyway to  continue  with  the  driver installation.  See  Figure  18.  The  dialog  box  switches to a progress bar and indicates that the HC9S08JMxx CDC  driver  is  being  installed.  The  driver  installation  should  complete  in  a  relatively  short  time.  See Figure 19.

Figure 18. Windows Logo Testing Driver Install Warning

<!-- image -->

Figure 19. Driver Software Installer Progress Indicator

<!-- image -->

10      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 4)  Click Finish to  complete  the  driver  installation  and exit the software installer. See Figure 20.
- 5)  The  EV  kit  software  and  the  USB  driver  are  now installed and ready for use.

Figure 20. Driver Software Installer Completion

<!-- image -->

<!-- image -->

## MAX3987 Evaluation Kit

Figure 21. MAX3987 EV Kit Evaluation Software-Individual Channel Control

<!-- image -->

## GUI Software Interface

- 1)  Install  a  shunt  on  jumper  JP\_  between  5V-USB and BOARD\_POWER to use the USB port power.
- 2)  Set the SW2-1 switch labeled I2C\_EN to the OFF position to enable the GUI software mode.
- 3)  Connect the computer to the EV kit with a USB cable (A-male to mini-B-male). LED DS1 should illuminate, indicating that the USB power is detected.
- 4)  Follow  this  path  in  Windows  to  start  the  EV  kit  software: Start → All  Programs → MAX3987 → MAX3987 EV Kit .
- 5)  The USB  Connection  Status indicator  should  turn green.  If  the  indicator  remains  red,  ensure  that  the USB cable is properly connected to the EV kit.
- 6)  The device's 4 channels can be controlled individually  (Figure  21)  or  as  a  group  (Figure  22)  using  the Control Mode selection in the upper left-hand section of the software.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    11

## MAX3987 Evaluation Kit

Figure 22. MAX3987 EV Kit Evaluation Software-Global Channel Control

<!-- image -->

- 7)  Using  the  EV  kit  software  controls,  configure  the device for the desired mode of operation.
- 8)  To begin testing, connect the signal source(s) to any pair of input SMA connectors (RX0-RX3). The differential input signal voltage can be between 200mVPP  and  1600mVP-P  with  a  data  rate  from  1Gbps  to 8.5Gbps.  The  output  signal(s)  can  be  observed  by connecting the associated pair  of  output  SMA  connectors (TX0-TX3) to a high-speed oscilloscope with 50 I termination.
- 9)  See Figures 1 and 2 for setup examples for testing and evaluating the device's equalization and preemphasis features.

## Connector, Switch, Jumper, and LED Descriptions

The EV kit has several connectors, configuration switches, jumpers, and an LED. Table 4 shows a brief description of these items and, if applicable, includes a default setting.

12      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3987 Evaluation Kit

Table 4. Main Board Configuration and Description

| PCB REFERENCE   | DEFAULT SETTING              | DESCRIPTION                                                                                                                          |
|-----------------|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| J1              | -                            | Channel 0 Positive CML Differential Data Input Signal (RX0+)                                                                         |
| J3              | -                            | Channel 0 Negative CML Differential Data Input Signal (RX0-)                                                                         |
| J6              | -                            | Channel 1 Positive CML Differential Data Input Signal (RX1+)                                                                         |
| J8              | -                            | Channel 1 Negative CML Differential Data Input Signal (RX1-)                                                                         |
| J10             | -                            | Channel 2 Positive CML Differential Data Input Signal (RX2+)                                                                         |
| J12             | -                            | Channel 2 Negative CML Differential Data Input Signal (RX2-)                                                                         |
| J14             | -                            | Channel 3 Positive CML Differential Data Input Signal (RX3+)                                                                         |
| J16             | -                            | Channel 3 Negative CML Differential Data Input Signal (RX3-)                                                                         |
| J2              | -                            | Channel 0 Positive CML Output Signal (TX0+)                                                                                          |
| J4              | -                            | Channel 0 Negative CML Output Signal (TX0-)                                                                                          |
| J7              | -                            | Channel 1 Positive CML Output Signal (TX1+)                                                                                          |
| J9              | -                            | Channel 1 Negative CML Output Signal (TX1-)                                                                                          |
| J11             | -                            | Channel 2 Positive CML Output Signal (TX2+)                                                                                          |
| J13             | -                            | Channel 2 Negative CML Output Signal (TX2-)                                                                                          |
| J15             | -                            | Channel 3 Positive CML Output Signal (TX3+)                                                                                          |
| J17             | -                            | Channel 3 Negative CML Output Signal (TX3-)                                                                                          |
| SW1             | SW1-1 to SW1-8 ON            | Hardware Mode: OC_EN input bias (OFF = 3.3V, ON = 0V) Software Mode: I 2 C address (OFF = 3.3V, ON = 0V)                             |
| SW2             | SW2-1 OFF, SW2-2 to SW2-8 ON | Hardware Mode: I2C_EN, TX_EN, TX_LV[1:0], TX_PE[1:0], SDSF, and SQ input bias (OFF = 3.3V, ON = 0V)                                  |
| J5              | Jumper 1+2, Jumper 3+4       | MAX3987 I 2 C Bus, Processor I 2 C Bus, Test Points. Jumper pins 1+2, 3+4 to use on- board processor. Remove for external processor. |
| JP2             | Jumper 2+3                   | Power Select. Jumper pins 2+3 to power board from the USB connector. Jumper pins 1+2 to power board from the 5V adapter.             |
| JP1             | Jumper 1+2                   | MAX3987 Power Select. Jumper pins 1+2 to power the device with 3.3V. Jumper pins 2+3 to power the device with 2.5V.                  |
| J18             | Connect to PC                | USB Connector. Note that USB power can still be used in hardware mode.                                                               |
| J20             | -                            | 5V Wall Adapter                                                                                                                      |
| J19             | -                            | Factory Test and Programming                                                                                                         |
| SW3             | -                            | Reset Switch for Only the MAX3987 and Microcontroller                                                                                |
| DS1             | -                            | 3.3V Power Indicator                                                                                                                 |

## Additional Information

## External Processor Control

The EV kit is intended to be controlled using the on-board microcontroller  in  conjunction  with  a  PC  running  the  EV kit  evaluation  software.  However,  the  EV  kit  provides additional jumper points that can be used to connect the device's I 2 C bus to an external processor. By connecting EV kit pins J5.1 and J5.3 to the I 2 C bus of an external processor, it is possible to fully interact with the device. For more information, refer to the MAX3987 IC data sheet at www.maxim-ic.com/MAX3987 .

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    13

## MAX3987 Evaluation Kit

Figure 23a. MAX3987 EV Kit Schematic (Sheet 1 of 3)

<!-- image -->

14      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3987 Evaluation Kit

<!-- image -->

Figure 23b. MAX3987 EV Kit Schematic (Sheet 2 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    15

## MAX3987 Evaluation Kit

Figure 23c. MAX3987 EV Kit Schematic (Sheet 3 of 3)

<!-- image -->

16      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3987 Evaluation Kit

<!-- image -->

Figure 24a. MAX3987 EV Kit Component Placement Guide-Component Side (Sheet 1 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    17

## MAX3987 Evaluation Kit

Figure 24b. MAX3987 EV Kit Component Placement Guide-Solder Side (Sheet 2 of 2)

<!-- image -->

18      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3987 Evaluation Kit

<!-- image -->

Figure 25a. MAX3987 EV Kit PCB Layout-Component Side (Sheet 1 of 4)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    19

## MAX3987 Evaluation Kit

Figure 25b. MAX3987 EV Kit PCB Layout-Ground Plane (Sheet 2 of 4)

<!-- image -->

20      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3987 Evaluation Kit

<!-- image -->

Figure 25c. MAX3987 EV Kit PCB Layout-Power Plane (Sheet 3 of 4)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    21

## MAX3987 Evaluation Kit

Figure 25d. MAX3987 EV Kit PCB Layout-Solder Side (Sheet 4 of 4)

<!-- image -->

22      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3987 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/10            | Initial release | -               |