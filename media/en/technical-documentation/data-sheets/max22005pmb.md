<!-- lastmod 2022-08-04 -->
<!-- image -->

Evaluates: MAX22005

## General Description

The MAX22005PMB# (peripheral module board) provides a  Pmod™-compatible  hardware  solution  to  evaluate  the MAX22005 Twelve-Channel Configurable Industrial Analog Input.  Refer  to  the  MAX22005  IC  data  sheet  for  more details on the operation of the IC and its register map.

The  MAX22005PMB# is  most  easily  evaluated  by  configuring  four  universal  analog  inputs  with  the Munich GUI  software  through  the USB2PMB2# adapter  board. Alternatively, any SPI-compatible microcontroller, adapter board, or FPGA can be used along with a custom driver to evaluate the board.

The PCB dimension is just 99mm long x 23mm wide, with the width determined by the size of the terminal block.

Note  the  module  provides  a  subset  of  the  MAX22005 features.  For  greater  flexibility,  refer  to  the  MAX22005 Evaluation Kit.

Ordering Information appears at end of data sheet.

## MAX22005PMB# Photo

<!-- image -->

Pmod is a registered trademark of Digilent Inc.

## Features

- Easy Evaluation of the MAX22005
- Configurable as 8 Single-Ended Analog Voltage Inputs, 4 Single-Ended Analog Current Inputs, 4 Differential Analog Voltage Inputs, 4 Multifunctional (Universal) Analog Inputs, or Combinations Thereof
- Analog Input Voltage Range: ±12.5V
- Analog Input Current Range: ±25mA
- ±1.5kV Input Surge Protection
- Works with the USB2PMB2# Adapter and Munich GUI Software
- Fully Assembled and Tested
- Proven PCB Layout
- RoHS Compliant

## EV Kit Contents

- MAX22005PMB#

## MAX22005PMB#

319-100889; Rev 0; 3/22

One  Analog  Way,  Wilmington,  MA  01887  U.S.A.    |      Tel:  781.329.4700      |      © 2022  Analog  Devices,  Inc.  All  rights  reserved. © 2022 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective owners.

## MAX22005PMB#

## Block Diagram

<!-- image -->

## MAX22005PMB# EV Kit Files

| FILE                     | DESCRIPTION                                            |
|--------------------------|--------------------------------------------------------|
| Munich GUISetupV2.25.exe | Munich GUI software for use with the USB2PMB2# adapter |

Evaluates: MAX22005

## MAX22005PMB#

## Quick Start

## Required Equipment

- MAX22005PMB#
- USB2PMB2# adapter board
- Micro-USB cable
- Windows 10 PC with a spare USB port
- Munich GUI v2.25 or higher
- Voltage and/or Current Source

Note: In  the  following  section(s),  software-related  items are  identified  by  bolding.  Text  in bold refers  to  items directly from the Munich GUI software. Text in bold and underlined refers  to  items  from  the  Windows  operating system.

## Procedure

This quick start procedure assumes  the use of the USB2PMB2#  adapter  and  Munich  GUI  software.  For  use with  other  Pmod  or  SPI-compatible  devices,  refer  to  the MAX22005 IC data sheet for  register  settings  and  instruc -tions.

- 1) Visit www.maximintegrated.com to download the latest version of the Munich GUI software, version 2.25 or later.
- 2) Save the software to a temporary folder. Double-click the .exe file to run the installer. A message box Do you want to allow the following program to make changes to this computer? might appear. If so, click Yes .
- 3) The installer includes the drivers for the hardware and software. Follow the instructions on the installer, and once complete, click Finish . The default location of the software is in the program files directory.

## Evaluates: MAX22005

- 4) The GUI requires voltages and currents to be mea -sured at the J2 and J3 input connector Pins 1, 4, 7, and 10. (See Figure 1 and Table 2 for the J2 and J3 connector pin naming convention in this document.) In the GUI, these are called Channel 1 (CH1) , Channel 2 (CH2) , Channel 3 (CH3) , and Channel 4 (CH4) , respectively. These are the multifunctional 'universal' analog inputs. The other pins on the J2 and J3 connectors should be grounded for accurate results-ground Pins 2, 5, 8, and 11 to their adjacent GND Pins 3, 6, 9, and 12 as shown in Figure 1. For example:

Figure 1. Input Connectors J2 and J3-Input Pin Labels and Grounding

<!-- image -->

## MAX22005PMB#

- 5) Connect USB2PMB2# connector X2 to MAX22005PMB# connector J1 as shown in Figure 2.
- 6) Connect the Micro-USB cable to the USB2PMB2# USB connector X1. Connect the USB cable to the PC USB port.
- 7) The MAX22005PMB# is powered by USB through the USB2PMB2#. Confirm that the green DS1 LED (power indicator) is on. The USB2PMB2# green SPI LED should also be on. These are visible in Figure 2.

Evaluates: MAX22005

- 8) It may take Windows several minutes to install the driver. Wait until Windows successfully installs the driver and shows ' Your device is ready to use ' at the lower right corner near System Icons .
- 9) In the Device menu, select Industrial Analog  MAX22005PMB# - 4 Channel Universal Analog In .
- 10)  Click the Scan Adapters button in the USB2PMB Adapter box. A USB2PMB2# serial name such as PMOD000003A should appear in the list (or auto -matically get selected). Click Connect .

<!-- image -->

Figure 2. USB2PMB2# and MAX22005PMB# Connection

Figure 3. Choosing the MAX22005PMB# GUI in the Device Menu

<!-- image -->

Figure 4. Scanning for USB2PMB Adapters and Connecting

<!-- image -->

## MAX22005PMB#

- 11)  Voltages can be measured on the four input chan -nels independently. This example measures all four at once with the same voltage. Select all four Channels in Measurement Configuration by checking each box. In the same section, select the Physical Values button. In the Results box on the right side, Voltage should be selected (the button switch is on the left side). See Figure 5.

## Evaluates: MAX22005

- 12)  Connect a voltage source from the CH1 (Pin 1), CH2 (Pin 4), CH3 (Pin 7), and CH4 (Pin 10) pins to GND. Remember to connect Pin 2 to Pin 3 (GND), Pin 5 to Pin 6 (GND), Pin 8 to Pin 9 (GND), and Pin 11 to Pin 12 (GND) for proper operation with the Munich GUI. Set the voltage source to +10V and activate it.
- 13)  In the Sample box, set the Sample Rate and Sample Count . Example values are shown in Figure 6.

Figure 5. Example Voltage Measurement Settings and Expected Results

<!-- image -->

Figure 6. Example Sample Settings

<!-- image -->

## MAX22005PMB#

- 14) Press Sample Continuously . You should see volt -age values in the Results box close to what is in Figure 5. Press Stop Sampling .
- 15)  The current measurements are performed one chan -nel at a time. Disable and/or remove the voltage source. Select only the Channel 1 box in the Measurement Configuration . In Results , click the Voltage/Current button for Channel 1 so that it slides to the right (colored blue). See Figure 7. Note that it is possible to measure all four channels at once with four different current sources.
- 16)  Connect a current source between CH1 (Pin 1) and the adjacent GND pin (Pin 3). Set the current source to +20mA and activate it. Press Sample Continuously in the Sample box. You should see a Channel 1 current measurement result similar to that shown in Figure 7. Press Stop Sampling .
- 17)  Then, apply -20mA from the current source and confirm that the current value in Results matches. (Note: For higher accuracy in current mode, all channels must be calibrated to accommodate the real sense resistor values. The initial accuracy of the sense resistors is 0.1%, which is much higher than the target of 0.02% Total Unadjusted Error. Refer to the MAX22005 data sheet for a description of the calibration procedure.)
- 18)  Repeat steps 15 through 17 for Channels 2, 3, and 4, if desired.

Figure 7. Example Current Measurement Settings and Expected Results

<!-- image -->

## Detailed Description of Hardware

The MAX22005 is a twelve-channel industrial-grade ana -log input voltage mode device that can also be configured as an analog input current mode device using an external precision  resistor  per  channel.  It  can  also  operate  as  a multifunctional 'universal' analog input using an external precision resistor and a low-cost switch per channel. The MAX22005 features an integrated 24-bit delta-sigma ADC that is shared between all analog inputs. The MAX22005 measurements  have  a Total  Unadjusted  Error  (TUE)  of 0.02% Full Scale Range (FSR) at 25°C factory calibration and a TUE of 0.05% FSR over ±50°C from 25°C factory calibration.

The  MAX22005PMB#  hardware  provides  everything needed to evaluate the MAX22005 using the Pmod inter -face. An  optional  USB2PMB2#  or  USB2GPIO#  adapter can be used with the Munich GUI to provide the USB-toSPI  interface  to  communicate  with  the  MAX22005. The MAX22005PMB# is configurable as 8 single-ended ana -log voltage inputs, 4 single-ended analog current inputs, 4  differential  analog  voltage  inputs,  4  multifunctional (universal)  analog inputs, or combinations thereof. Note that these configurations are a subset of the total configu -rations possible with the MAX22005 IC. For greater flex -ibility and access to all of the MAX22005 features, refer to the MAX22005 Evaluation Kit.

## MAX22005PMB#

## Pmod Connector

The 12-pin Pmod connector (J1) meets the Pmod Interface Type 2A (expanded SPI) standard. Figure 8 details the J1 Pmod connections on the MAX22005PMB#.

Figure 8. MAX22005PMB# Pmod Connector Schematic

<!-- image -->

Figure 9. Multifunctional Universal Triplet Input

<!-- image -->

## Power Supplies

Power  is  supplied  to  the  MAX22005PMB#  through  the J1 Pmod connector's DVDD pins 6 and 12. DVDD from the USB2PMB2# is 3.3V. The MAX22005 IC DVDD pins are  supplied  directly  from  the  J1  DVDD  pins.  AVDD  is supplied by DVDD through a Pi filter. HVDD and HVSS are  supplied  by  DVDD  through  a  dual  boost  converter, the MAX8614A. DGND and AGND are connected at one point,  the  0Ω  R5  short.  See  Table  1  for  the  expected values  of  each  supply  rail.  The  expected  max  current consumption of the MAX22005PMB# is less than 40mA.

## Analog Input Configuration

The MAX22005PMB# groups the MAX22005's 12 analog inputs into four sets of three consecutive inputs, called trip -lets. Each triplet is connected as in Figure 9 , which is the first triplet consisting of AI1, AI2, and AI3. The MAX14757 analog switch is used to insert the 49.9Ω precision resis -tor for current mode measurements. Also, refer to the full MAX22005PMB# schematic diagram to see the J2 and J3 connector to IC input pin connections in their entirety.

## Table 1. Supply Voltages

| SUPPLY   | VOLTAGE    |
|----------|------------|
| DVDD     | 3.3V ±0.1V |
| AVDD     | 3.3V ±0.1V |
| HVDD     | +15V ±0.5V |
| HVSS     | -15V ±0.5V |

## MAX22005PMB#

The  analog  input  pin  numbering  in  this  document  and their corresponding J2 and J3 analog input connector and IC pin names are summarized in Table 2 .

The Munich GUI provides an intuitive way to easily ana -lyze  four  single-ended  'universal'  analog  inputs,  i.e., an  input  that  can  measure  Voltage  or  Current.  These four  universal  inputs  are  Pin  1  (CH1),  Pin  4  (CH2),  Pin 7 (CH3), and Pin 10 (CH4). The additional inputs Pin 2 (AI3), Pin 5 (AI6), Pin 8 (AI9), and Pin 11 (AI12) should be  grounded  when  using  the  GUI  to  ensure  accurate measurements of the universal Channel inputs. This can be  achieved  by  connecting  a  wire  between  these  pins and  their  adjacent  GND  pins  (Pin  3,  Pin  6,  Pin  9,  and Pin  12).  The  GUI  measures  the  single-ended  channel inputs  using  the  MAX22005's  multifunctional  differential measurement modes. Using Triplet 1 (AI1, AI2, AI3) as an

## Table 2. Input Pin Names

| J2 AND J3 CONNECTOR - PIN   | PIN NAME   | IC PIN   |   TRIPLET |
|-----------------------------|------------|----------|-----------|
| J2 - 1                      | 1 (CH1)    | AI1      |         1 |
| J2 - 2                      | 2          | AI3      |         1 |
| J2 - 3                      | 3          | GND      |         1 |
| J2 - 4                      | 4 (CH2)    | AI4      |         2 |
| J2 - 5                      | 5          | AI6      |         2 |
| J2 - 6                      | 6          | GND      |         2 |
| J3 - 1                      | 7 (CH3)    | AI7      |         3 |
| J3 - 2                      | 8          | AI9      |         3 |
| J3 - 3                      | 9          | GND      |         3 |
| J3 - 4                      | 10 (CH4)   | AI10     |         4 |
| J3 - 5                      | 11         | AI12     |         4 |
| J3 - 6                      | 12         | GND      |         4 |

## Table 3. LED Description

| LED   | ON                             | OFF                         |
|-------|--------------------------------|-----------------------------|
| DS1   | DVDD Connected                 | DVDD Disconnected           |
| DS2   | SW0 Closed (CH 1 Current Mode) | SW0 Open (CH1 Voltage Mode) |
| DS3   | SW1 Closed (CH 2 Current Mode) | SW1 Open (CH2 Voltage Mode) |
| DS4   | SW2 Closed (CH 3 Current Mode) | SW2 Open (CH3 Voltage Mode) |
| DS5   | SW3 Closed (CH 4 Current Mode) | SW3 Open (CH4 Voltage Mode) |

## Evaluates: MAX22005

example, the voltage is measured differentially from AI1 to AI3. Grounding AI3 is recommended to avoid floating connections and ensure a more accurate measurement. After  closing  SW0, the current is measured by the volt -age across the sense resistor from AI1 to AI2. Since the GUI measures differentially, a differential voltage source from AI1 to AI3 can also be measured. In all cases, inac -curacies due to (potentially long) input wire voltage drops should be taken into consideration.

When  using  the  MAX22005PMB#  with  your  own  soft -ware,  Pins  2,  5,  8,  and  11  (AI3, AI6, AI9,  and AI12)  can be  used  to  accommodate  other  input  configurations,  for example to measure a single-ended voltage like the volt -age drop across a wire to ground. Refer to Application Note 7413-MAX22005 Universal Analog Input Enables Flexible Industrial Control Systems for possible example configura -tions, in particular the Multifunction Configuration section.

## LEDs

The DS1 LED is used to confirm that the Pmod DVDD is being supplied to the MAX22005PMB# through the J1 connector  (pins  6  and  12).  The  USB2PMB2#  DVDD  is 3.3V. The DS2 through DS5 are used to indicate if GPIO0 through  GPIO3,  respectively,  are  high  (LED  on)  or  low (LED  off).  The  GPIO0  through  GPIO3  control  switches SW0 through SW3 which switch in the 49.9Ω precision sense  resistors  for  the  current  measurements.  Refer  to Table 3 for a summary of the LED states.

## Surge Protection

No  external  surge  suppression  is  needed  as  all  the MAX22005 IC analog inputs are protected against up to ±1.5kV  surge  pulses  as  per  IEC61000-4-5  using  series 4.75kΩ 0.4000W resistors.

## MAX22005PMB#

## Detailed Description of Software

The  MAX22005PMB# GUI is a part of the Munich GUI for use with USB2PMB2#. A list of all the GUIs and sup -ported  devices  can  be  found  in  the Device tab.  This  is where the MAX22005PMB# GUI is found. A screenshot of the MAX22005PMB# GUI is provided in Figure 10. In the Window tab, one can switch between multiple open GUIs, however the user must disconnect from one GUI in order to  use  another  (only  one  GUI/device  can  be  used  at  a time). The Status Log lists the status and error messages which can be cleared using the Clear Log button on the right. The Scope box represents the measured Channel voltages or currents over time. It is color-coded to match the Channel colors in the Measurement Configuration box.  Near  the Autoscale checkbox  is  a  collection  of graph tool features including (from top left to right): play or pause, 'grab and drag' or 'zoom in on selection,' print, save,  graph  settings,  zoom  in,  zoom  out,  default  zoom Evaluates: MAX22005

(includes all samples), zoom undo, and zoom redo. The Scope graph can be enlarged by clicking the arrow button on the top left and shrunk back by pressing it again.

The Measurement Configuration box is where Channel measurements can be enabled or disabled by checking the appropriate channel box. The measurements can be displayed in Physical Values (volts  or  amperes)  or  the raw ADC  Counts (in  decimal)  by  choosing  the  corre -sponding button in the Measurement Configuration box. The History button enables the graph to display up to the number of samples chosen in the History Length dropdown menu. In the Results box, one can switch between Voltage (left)  and Current (right and blue) modes using the appropriate channel's button. The displayed measure -ment results  are  an  average  of  the  number  of  samples chosen in the Average drop-down menu. At the very bot -tom of the GUI, one can quickly see the connection status and Munich GUI version number.

Figure 10. MAX22005PMB# GUI Software

<!-- image -->

## Ordering Information

| PART          | TYPE              |
|---------------|-------------------|
| MAX22005PMB## | Peripheral Module |

## MAX22005PMB# Bill of Materials

|   ITEM | REF_DES                    |   QTY | MFG PART #                                                                                                      | MANUFACTURER                                        | VALUE             | DESCRIPTION                                                                                           | COMMENTS   |
|--------|----------------------------|-------|-----------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|-------------------|-------------------------------------------------------------------------------------------------------|------------|
|      1 | C1, C2                     |     2 | C0805X5R6R3-106MNE; C2012X5R0J106M125AB; JMK212BJ106MG                                                          | VENKEL LTD;TDK;TAIYO YUDEN                          | 10UF              | CAP; SMT (0805); 10UF; 20%; 6.3V; X5R; CERAMIC                                                        |            |
|      2 | C3, C6, C15-C18, C22, C42  |     8 | C0603C105K4RAC;C1608X7R1C105K080AC; EMK107B7105KA;CGA3E1X7R1C105K080AC; 0603YC105KAT2A                          | KEMET;MURATA;TDK;TAIYO YUDEN;TDK;AVX                | 1UF               | CAP; SMT (0603); 1UF; 10%; 16V; X7R; CERAMIC                                                          |            |
|      3 | C4, C7, C10, C11, C19, C20 |     6 | C0402C101J5GAC;NMC0402NPO101J; CC0402JRNPO9BN101;GRM1555C1H101JA01; C1005C0G1H101J050BA                         | KEMET;NIC COMPONENTS CORP.;YAGEO PHICOMP;MURATA;TDK | 100PF             | CAP; SMT (0402); 100PF; 5%; 50V; C0G; CERAMIC                                                         |            |
|      4 | C5, C8, C12, C13, C21, C27 |     6 | 08053C225KAT2A;TMK212B7225KG; GRM21BR71E225KA73;GRT21BR71E225KE13                                               | AVX;TAIYO YUDEN;MURATA;MURATA                       | 2.2UF             | CAP; SMT (0805); 2.2UF; 10%; 25V; X7R; CERAMIC                                                        |            |
|      5 | C9                         |     1 | CGA2B3X7R0J224M050BB                                                                                            | TDK                                                 | 0.22UF            | CAP; SMT (0402); 0.22UF; 20%; 6.3V; X7R; CERAMIC                                                      |            |
|      6 | C14                        |     1 | GRM21BR71A475KA73; LMK212B7475KG-T; C2012X7R1A475K125AC                                                         | MURATA;TAIYO YUDEN;TDK                              | 4.7UF             | CAP; SMT (0805); 4.7UF; 10%; 10V; X7R; CERAMIC                                                        |            |
|      7 | C23, C25                   |     2 | CC0603KRX7R0BB104;GRM188R72A104KA35; HMK107B7104KA;06031C104KAT2A; GRM188R72A104K                               | YAGEO;MURATA;TAIYO YUDEN;AVX;MURATA                 | 0.1UF             | CAP; SMT (0603); 0.1UF; 10%; 100V; X7R; CERAMIC                                                       |            |
|      8 | C24                        |     1 | C0603C224K3RAC;GMC10X7R224K25; GRM188R71E224KA88;C1608X7R1E224K080AC                                            | KEMET;MURATA;MURATA;TDK                             | 0.22UF            | CAP; SMT (0603); 0.22UF; 10%; 25V; X7R; CERAMIC                                                       |            |
|      9 | C26, C28                   |     2 | C1206C105K5RAC;GRM31CR71H105KA61; GRM31MR71H105KA88;GCM31MR71H105KA55; CGA5L3X7R1H105K160AB;C3216X7R1H105K160AE | KEMET;MURATA;MURATA; MURATA;TDK;TDK                 | 1UF               | CAP; SMT (1206); 1UF; 10%; 50V; X7R; CERAMIC                                                          |            |
|     10 | C29                        |     1 | C0805C151J5GAC                                                                                                  | KEMET                                               | 150PF             | CAP; SMT (0805); 150PF; 5%; 50V; C0G; CERAMIC                                                         |            |
|     11 | C30-C41                    |    12 | C0402C680K5RAC                                                                                                  | KEMET                                               | 68PF              | CAP; SMT (0402); 68PF; 10%; 50V; X7R; CERAMIC                                                         |            |
|     12 | D1, D2                     |     2 | MBR0520L                                                                                                        | FAIRCHILD SEMICONDUCTOR                             | MBR0520L          | DIODE, SCHOTTKY, SOD-123, PIV=20V, Vf=0.385V@If=0.5A, If(ave)=0.5A                                    |            |
|     13 | D3-D6                      |     4 | SMBJ33CA                                                                                                        | LITTLEFUSE                                          | 33V               | DIODE; TVS; SMB (DO-214AA); VRM=33V; IPP=11.3A                                                        |            |
|     14 | DS1-DS5                    |     5 | SML-P12PT                                                                                                       | ROHM                                                | SML-P12PT         | DIODE; LED; SML-P1 SERIES; ULTRA COMPACT HIGH BRIGHTNESS LED; GREEN; SMT (0402); VF=2.2V; IF=0.02A    |            |
|     15 | J1                         |     1 | TSW-106-08-S-D-RA                                                                                               | SAMTEC                                              | TSW-106-08-S-D-RA | CONNECTOR; THROUGH HOLE; DOUBLE ROW; RIGHT ANGLE; 12PINS;                                             |            |
|     16 | J2, J3                     |     2 | 250-206                                                                                                         | WAGO                                                | 250-206           | CONNECTOR; FEMALE; THROUGH HOLE; PCB TERMINAL BLOCK; PUSH-BUTTON; RIGHT ANGLE; 6PIN ;                 |            |
|     17 | L1, L4, L5                 |     3 | LQH2HPZ220MJR                                                                                                   | MURATA                                              | 22UH              | INDUCTOR; SMT (1008); MAGNETICALLY SHIELDED; 22UH; TOL=+/-20%; 0.54A                                  |            |
|     18 | L2, L3                     |     2 | LQH32CN100K33                                                                                                   | MURATA                                              | 10UH              | INDUCTOR; SMT (1210); FERRITE; 10UH; 10%; 0.45A                                                       |            |
|     19 | R1                         |     1 | ERJ-2GEJ104                                                                                                     | PANASONIC                                           | 100K              | RES; SMT (0402); 100K; 5%; +/-200PPM/DEGC; 0.1000W                                                    |            |
|     20 | R2-R4                      |     3 | CRCW020110K0FK                                                                                                  | VISHAY DALE                                         | 10K               | RES; SMT (0201); 10K; 1%; +/-100PPM/DEGC; 0.0500W                                                     |            |
|     21 | R5                         |     1 | HCJ0402ZT0R00                                                                                                   | STACKPOLE ELECTRONICS INC.                          |                   | 0 RES; SMT (0402); 0; JUMPER; JUMPER; 0.1250W                                                         |            |
|     22 | R6                         |     1 | CRCW0402300KFK                                                                                                  | VISHAY DALE                                         | 300K              | RES; SMT (0402); 300K; 1%; +/-100PPM/DEGK; 0.0630W                                                    |            |
|     23 | R7                         |     1 | ERJ-2RKF2492                                                                                                    | PANASONIC                                           | 24.9K             | RES; SMT (0402); 24.9K; 1%; +/-100PPM/DEGC; 0.1000W                                                   |            |
|     24 | R8                         |     1 | ERJ-2RKF6983                                                                                                    | PANASONIC                                           | 698K              | RES; SMT (0402); 698K; 1%; +/-100PPM/DEGC; 0.1000W                                                    |            |
|     25 | R9                         |     1 | ERJ-2RKF4992                                                                                                    | PANASONIC                                           | 49.9K             | RES; SMT (0402); 49.9K; 1%; +/-100PPM/DEGC; 0.1000W                                                   |            |
|     26 | R10-R13                    |     4 | ERJ-2RKF10R0                                                                                                    | PANASONIC                                           |                   | 10 RES; SMT (0402); 10; 1%; +/-100PPM/DEGC; 0.1000W                                                   |            |
|     27 | R14-R16, R23- R25, R30-R35 |    12 | MMA02040C4751F                                                                                                  | VISHAY BEYSCHLAG                                    | 4.75K             | RES; SMT; 4.75K; 1%; +/-50PPM/DEGK; 0.4000W                                                           |            |
|     28 | R17, R19-R22               |     5 | ERJ-2GEJ152                                                                                                     | PANASONIC                                           | 1.5K              | RES; SMT (0402); 1.5K; 5%; +/-200PPM/DEGC; 0.1000W                                                    |            |
|     29 | R18                        |     1 | CRCW02011K00FK                                                                                                  | VISHAY DALE                                         | 1K                | RES; SMT (0201); 1K; 1%; +/-100PPM/DEGC; 0.0500W                                                      |            |
|     30 | R26-R29                    |     4 | RN73C2A49R9BTDF; 1676703-2                                                                                      | TE CONNECTIVITY;TE CONNECTIVITY                     |                   | 49.9 RES; SMT (0805); 49.9; 0.10%; +/-10PPM/DEGC; 0.1000W                                             |            |
|     31 | U1                         |     1 | MAX8614AETD+                                                                                                    | MAXIM                                               | MAX8614AETD+      | IC; CONV; DUAL-OUTPUT (+ AND -) DC-DC CONVERTER FOR CCD; TDFN14                                       |            |
|     32 | U2                         |     1 | MAX22005                                                                                                        | MAXIM                                               | MAX22005          | EVKIT PART - IC; RX16; TWELVE-CHANNEL FACTORY- CALIBRATED CONFIGURABLE INDUSTRIAL ANALOG INPUT; QFN48 |            |
|     33 | U3                         |     1 | MAX14757EUE+                                                                                                    | MAXIM                                               | MAX14757EUE+      | IC; ASW; QUAD NO SPST; +70V ANALOG SWITCH; TSSOP16                                                    |            |
|     34 | PCB                        |     1 | MAX22005PMB                                                                                                     | MAXIM                                               | PCB               | PCB:MAX22005PMB                                                                                       | -          |

Evaluates: MAX22005

## MAX22005PMB#

## MAX22005PMB# Schematic

<!-- image -->

Evaluates: MAX22005

## MAX22005PMB# PCB Layout Diagrams

<!-- image -->

MAX22005PMB# PCB Layout-SILK\_TOP

MAX22005PMB# PCB Layout-TOP

<!-- image -->

MAX22005PMB# PCB Layout-DGND\_AGND1

<!-- image -->

## MAX22005PMB# PCB Layout Diagrams (continued)

<!-- image -->

1'

MAX22005PMB# PCB Layout-HVDD\_HVSS

<!-- image -->

MAX22005PMB# PCB Layout-DVDD\_AVDD

<!-- image -->

MAX22005PMB# PCB Layout-DGND\_AGND2

## MAX22005PMB# PCB Layout Diagrams (continued)

MAX22005PMB# PCB Layout-BOTTOM

<!-- image -->

MAX22005PMB# PCB Layout-SILK\_BOT

<!-- image -->

## MAX22005PMB#

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/22            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

Evaluates: MAX22005