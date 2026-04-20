<!-- lastmod 2026-01-09 -->
<!-- image -->

Evaluates: MAX22005

## General Description

The MAX22005 evaluation kit (EV kit) provides a proven design to evaluate the MAX22005, 12-Channel factory-calibrated configurable industrial-analog input. The MAX22005 EV  kit  includes  the  MAX22005  evaluation  board  and  a graphical user interface (GUI) that provides communication from a PC to the target device through a USB port.

The  GUI  is  compatible  with  Windows ®   10  for  exercising the  features  of  the  MAX22005  IC.  The  EV  kit  GUI  allows the user to read the 24-bit ADC conversion result for any of the input channels through the high-speed SPI interface in single-ended,  differential,  or  multifunctional  configurations. The SPI interface is galvanically isolated from the USB port.

The MAX22005 EV kit must be powered from an external +24V power supply through the power jack (J100). The on-board DC-DC converters provide ±15V HVDD/HVSS and +3.3V AVDD/DVDD power rails for the entire board.

The MAX22005 EV kit board  comes  with  a  MAX22005ALM+ installed in a 48-pin, 7.5mm x 7.0mm LGA package.

Ordering Information appears at end of data sheet.

## MAX22005 EV Kit

©

## MAX22005 Evaluation Kit

## Features

- Easy Selection and Configuration of Input Channels
- On-the-Fly Configuration as Analog Input-Voltage Mode or Analog Input-Current Mode
- ±12.5V and 0V to +12.5V Ranges in Analog Input-Voltage Mode
- ±25mA and 0mA to 25mA Ranges in Analog Input-Current Mode
- MAX22005 is Factory Calibrated
- EV Kit Does Not Require System Calibration for AIVM
- CRC Detection for Robust Communication
- Watchdog Timer for SPI Activity
- Access to Eight GPIO Channels
- Ability to Synchronize Multiple EV kits for Simultaneous ADC Conversion
- -40°C to +125°C Temperature Range
- Proven PCB Layout
- Fully Assembled and Tested
- Windows 10 Compatible Software

<!-- image -->

Windows is a registered trademark of Microsoft Corporation.

319-100726; Rev 1; 12/25

One  Analog  Way,  Wilmington,  MA  01887  U.S.A.    |      Tel:  781.329.4700      |      © 2025  Analog  Devices,  Inc.  All  rights  reserved. 2025 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective owners.

## MAX22005 Evaluation Kit

## MAX22005 EV Kit Block Diagram

<!-- image -->

## MAX22005 EV Kit Files

| FILE                       | DECRIPTION                |
|----------------------------|---------------------------|
| MAX22005EVKITSetupV1.0.exe | Application Program (GUI) |

## Quick Start

## Required Equipment

- MAX22005EVKIT#
- +24V DC power supply
- PC with installed Windows 10 and a USB port
- USB-A to micro-USB cable

Note: In  the  following  section(s),  software-related  items are  identified  by  bolding.  Text  in bold refers  to  items directly  from  the  EV  system  software. Text  in bold and underline refers  to  items  from  the  Windows  operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Visit https://www.analog.com/en/resources/ evaluation-hardware-and-software/embeddeddevelopment-software/software-download. html?swpart=SFW0012110B to download the latest version of the EV kit software, MAX22005EVKITSetupV1.0.exe or latest.
- 2) Install the EV kit software and USB driver on your computer by running the MAX22005EVKITSetupV1.0.exe

program inside the temporary folder. The program files are copied to your PC and icons are created in the Windows Start | Programs menu. During software installation, some version of Windows might show a warning message indicating that the software is from unknown publisher. This is not an error condition and it is safe to proceed with installation. Administrator privi -leges require to install the USB device driver.

- 3) Verify that all jumpers are in their default positions, as shown in Table 1 .
- 4) Power up the EV kit with +24V from an external power supply through the J100 power jack or using TP101 (24V) and TP102 (GND) test points. Green LEDs are used to indicate valid power supplies. The 24V supply is indicated by LED100, and DVDD and AVDD supplies are indicated by LED105 and LED 106, respectively. The +15V HVDD and -15V HVSS supplies can be monitored by a multimeter on TP110 and TP120 referenced to TP111 (AGND). Note, the DGND and AGND are shorted together.
- 5) Connect the USB cable from the PC to the EV kit. A Windows message appears when connecting the EV kit board to the PC for the first time. Each version of Windows has a slightly different message. If you

│

## MAX22005 Evaluation Kit

see a Windows message starting ready to use , then proceed to the next step.

- 6) Start the EV kit software by opening the icon in the Start | Programs | Maxim Integrated menu. The EV kit software Analog Input tab appears as shown in Figure 1 .
- 7) Verify that the lower-right status bar indicates the EV kit hardware is Connected . The GUI automatically detects if the EV kit is connected to the PC and enables serial communication.

The following steps are used to verify functionality of the MAX22005.

## Evaluates: MAX22005

- 8) Jump the wire from the X1.9 connector (AI1 input) to the TP26 (REF\_ADC) to verify the IC functionality.
- 9) In the Analog Input tab select Single Ended ±12.5V Mode from the Mode dropdown menu (default), uncheck all other selected channels and hit the Read All button. The ADC read value in both volt and hex format appears in the respective AI\_ read boxes. The voltage value should be close to 2.5V.
- 10)  Select the Register tab, shown in Figure 2, and click Read All button to read all the registers in the device. Inspect all the registers settings for the previous setup of AI1 single-ended reading.

Figure 1. MAX22005 EV Kit GUI Analog Input Tab

<!-- image -->

## Evaluates: MAX22005

Figure 2. MAX22005 EV Kit GUI Register Tab

<!-- image -->

## Detailed Description of Hardware

The MAX22005EVKIT# provides an easy-to-use and flexible  solution  for  evaluating  the  MAX22005,  12-channel factory-calibrated configurable analog-input IC for industrial  applications.  The  MAX22005  EV  kit  communicates to a PC through a commonly available A-to-micro-B USB cable.  Since  there  is  no  on-board  microprocessor,  all coordination and low-level SPI transactions are managed by code on the PC, as part of the GUI.

For users who prefer more direct control through their own hardware, important signals are made available through

Pmod is a trademark of Digilent, Inc.

J201, which offers a 6x2 header with 0.1' spacing that is sometimes called a Pmod™ header, making it compatible with many FPGA and microcontrollers systems (refer to the MAX22005 EV Kit Schematic ).  As  well  as  indepen -dent dedicated connection, J201 can also be paired with the Analog Devices' USB2GPIO# control card. If J201 is used,  disconnect  the  PC  interface  from  the  MAX22005 EV kit by opening all switches on SW1.

For a list of configuration options refer to Table 1 .

│

Table 1. MAX22005 Kit Shunt Positions and Settings

| HEADER   | SHUNT POSITION   | DESCRIPTION                                                                                                                                                                                                                                                        |
|----------|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J1       | 1-2*             | AI11 input of U1 is connected to the X2 terminal block for single-ended voltage input mode, or dif- ferential AI10-AI11, or AI10-AI12 voltage input mode. The analog switch (U3) should be disabled (default state). For AICM mode configuration refer to Table 2. |
| J1       | 2-3              | AI11 is disconnected from X2 for multifunctional configuration. U3 and GPIO[7:6] are used for various configuration options, refer to Table 2.                                                                                                                     |
| J1       | Open             | U3 and GPIO[7:6] are used for various configuration options, refer to Table 2.                                                                                                                                                                                     |
| J7       | 1-2*             | REF_ADC_EXT supplied from an external 2.5V voltage reference (U80).                                                                                                                                                                                                |
| J7       | 2-3              | RED_ADC_EXT is grounded.ADC is using an internal 2.5V voltage reference.                                                                                                                                                                                           |
| J7       | Open             | Off-board 2.5V Voltage Reference can be applied to J7.2.                                                                                                                                                                                                           |
| JP10     | 1-2*             | Fixed +15V to HVDD is supplied from the DC-DC converter (U10).                                                                                                                                                                                                     |
| JP10     | Open             | Apply +5V to +24V from an external voltage source between TP110 (HVDD) and TP111 (AGND).                                                                                                                                                                           |
| JP20     | 1-2*             | Fixed -15V to HVSS is supplied from the DC-DC converter (U20).                                                                                                                                                                                                     |
| JP20     | Open             | Apply -5V to -24V from an external voltage source between TP120 (HVSS) and TP111 (AGND).                                                                                                                                                                           |
| J107     | 1-2*             | Fixed +3.3V to DVDD and AVDD is supplied from the integrated step-down power module (U50).                                                                                                                                                                         |
| J107     | Open             | Apply +2.7V to +3.6V from an external voltage source between TP150 (DVDD) and TP151 (DGND).                                                                                                                                                                        |

* Default configuration

The Analog Input channels AI1 through AI12 can accept the voltages from the external source(s), such as two-wire voltage sensors, in range of ±12.5V for single-ended con -figuration  and  ±25V for  differential  configuration. All  input channels  are  tolerant  up  to  ±36V.  The  on-board  4.75kΩ input resistors protect the inputs up to ±2kV Surge pulses. The  input  signals  should  be  applied  through  X1  and  X2 screw terminals. The terminals allow either single-ended, differential,  or  multifunctional  inputs.  For  example,  the AI1  single-ended  input  should  be  applied  between  X1.9 (AI1) and X1.8 (AGND), while the AI1-AI2 differential input should be applied between X1.9 (AI1) and X1.7 (AI2) ter -minals.

All input channels also can be used for measuring input current.  In  this  case,  current-to-voltage  conversion  is performed  using  the  external  249Ω  resistor(s).  Usually, analog input-current mode (AICM) is used for measuring a  4mA-20mA  loop  current.  The  value  and  accuracy  of the sense resistor is selected to comply with the analog input-voltage  mode  (AIVM)  ranges.  For  more  informa -tion  refer  to  the  MAX22005  data  sheet. All  twelve  input channels are factory calibrated for AIVM and need to be recalibrated for the AICM to include sense resistor value and accuracy. An example of the AICM is implemented for AI10  (single-ended)  and  AI10-AI11  (differential)  inputs, and  RS10  sense  resistor  and  the  MAX14761  analog switch  (U3).  Refer  to  the  multifunctional  configuration (Table 2) for details.

An  example  of  a  multifunctional  configuration  is  implemented on AI10, AI11 and AI12 input triplet, J1 jumper, RS10,  and  U3  switch.  GPIO6  and  GPIO7  are  used  to control the AI10, AI11, and AI12 configuration for on-thefly change for either AIVM or AICM mode. When J1 is in the 1-2 position, GPIO6 is high and GPIO7 is low, both U3 analog switches are open, and the AI10-AI11 pair is in AICM differential mode, while the AI10-AI12 pair is in AIVM differential mode. In this case, both the current and voltage information are available for that channels.

All  possible  combinations  of  multifunctional  configurations of AI10, AI11, and AI12 are shown in Table 2 . The J1 shunt position and GPIO[7:6] settings allow for switching between  different  modes  in  a  multifunctional  configuration.  The  GUI  conveniently  provides  different  block  dia -grams for proper connection to the AI10, AI11, and AI12 inputs for the selected combinations.

For users who wish to perform their own calibration, refer to the MAX22005 data sheet for a two-point user calibration technique.

The current reading for AICM mode is provided in volts as measured by the voltage drop on the sense resistor RS10. The user must divide the reported voltage by 249 to get the current value in amperes.

## Table 2. AI10, AI11 and AI12 Multifunctional Configurations

| J1 SHUNT   | GPIO[6]   | GPIO[7]   |   AI_DCHNL_SEL[4:0] | CONFIGURATION DESCRIPTION                           |
|------------|-----------|-----------|---------------------|-----------------------------------------------------|
| 1-2*       | Low*      | High*     |               01001 | AI10 in AIVM single-ended mode                      |
| 1-2        | High      | High      |               01001 | AI10 in AICM single-ended mode                      |
| 1-2        | Low       | High      |               01010 | AI11 in AIVM single-ended mode                      |
| X          | X         | X         |               01011 | AI12 in AIVM single-ended mode                      |
| 1-2        | Low       | High      |               10001 | AI11-AI12 in AIVM differential mode                 |
| 1-2        | Low       | Low       |               11000 | AI10-AI11 in AICM multifunctional differential mode |
| 1-2        | High      | Low       |               11000 | AI10-AI11 in AICM multifunctional differential mode |
| 1-2        | X         | X         |               11001 | AI10-AI12 in AIVM multifunctional differential mode |
| 2-3        | Low       | High      |               01001 | AI10 in AIVM single-ended mode                      |
| 2-3        | Low       | High      |               11001 | AI10-AI12 in AIVM multifunctional differential mode |
| 2-3        | Low       | Low       |               11000 | AI10-AI11 in AICM multifunctional differential mode |
| 2-3        | High      | High      |               01001 | AI10 in AICM multifunctional single-ended mode      |
| 2-3        | High      | High      |               11001 | AI10-AI12 in AIVM multifunctional differential mode |
| 2-3        | High      | Low       |               11000 | AI10-AI11 in AICM multifunctional differential mode |
| 2-3        | High      | Low       |               11001 | AI10-AI12 in AIVM multifunctional differential mode |
| Open       | Low       | Low       |               11000 | AI10-AI11 in AICM multifunctional differential mode |
| Open       | High      | High      |               11000 | AI10-AI11 in AICM multifunctional single-ended mode |
| Open       | High      | Low       |               11000 | AI10-AI11 in AICM multifunctional differential mode |

* Default configuration

## Detailed Description of Software

The MAX22005 GUI provides full control of the MAX22005. There are three tabs available to operate and control the EV kit.  The Analog Input tab  provides  a  quick  reading  of  the conversion results of the selected channels. The Register tab  provides  full  access  to  the  internal  registers  including access to configurations, data rate control, interrupts, etc.

The Analysis tab  allow  to  see  the  captured  input  signal either in Scope mode or as FFT in frequency domain.

## Analog Input Tab

The  GUI  sets  all  the  channels  into  single-ended  AIVM single-cycle  mode  with  the  conversion  rate  of  1sps  by default  as  shown  in  Figure  1 .  The  GUI  is  reading  all selected input channels one-by-one when the user presses the Read All button.

## Register Tab

The Register tab allows control of the MAX22005 through the  register  setting  (refer  to  Figure  2 ).  The  detailed description of each bit of the selected register is shown on the right table, as shown in Figure 3 . The register set -ting can be changed directly in the register map table by

Evaluates: MAX22005

double  clicking  on  the Value cell  or  from  the  pull-down menu  in  the Setting cell  on  the  right  table.  Each  data entry  should  follow  by  the  'Enter/Return'  button  on  the keyboard. The Value cell accepts binary (0b), decimal or hex (0x) numbers. The modified register changes its color from black to red until the data is written to the register. The  data  in  the  right  table  can  be  changed  using  the drop-down menus in the Setting cell for each bit individually. Both tables are synchronized so that changes made in  one  table  appear  in  both  tables.  There  are  several write and read options available through the corresponding  control  buttons  located  below  the  register  bit-by-bit description table.

When the Auto Write switch is in the ON position, any data typed in, or selected through the Setting pull-down menu is automatically written into the corresponding writable register.

The Write Selected button allows to write to the selected (highlighted) register only.

The  cyclic  redundancy  check  (CRC)  is  automatically supported by the GUI when the CRC\_EN bit is set in the GEN\_CONFG register 0x02 . The CRC Calculator is provided for user convenience under the Help menu.

## MAX22005 Evaluation Kit

Figure 3. MAX22005 EV Kit GUI, Register Tab Settling

<!-- image -->

The  SPI  transmitted,  TX,  and  received,  RX,  data  is reflected in the Register tab lower left corner as shown in Figure 4, Figure 5, and Figure 6 .

Figure  4  shows  the  data  read  from  register  0x00, 0x18B0BA while CRC is disabled.

Figure  5  shows  the  data  read  from  register  0x00  while CRC is enabled. The CRC byte is 0xAE (received) and confirmed by the host.

Figure 4. SPI Read Transaction with CRC Disabled

<!-- image -->

Figure 5 also shows the SPI data sent by the host to the MAX22005 with the CRC byte 0xCD.

The  command  (select  an  AI2  input  channel  in  register 0x03)  is  executed  if  the  CRC  byte  is  matched  with  the CRC calculated by the MAX22005.

│

## MAX22005 Evaluation Kit

## Evaluates: MAX22005

Figure 5. SPI Read Transaction with CRC Enabled

<!-- image -->

Figure 6. SPI Write Transaction with CRC Enabled

<!-- image -->

## Analysis Tab

The Analysis tab shown in Figure 7 permits capture and visual display of any analog input channels as an oscilloscope  format  in  the  time  domain,  or  as  a  FFT  format in  the  frequency  domain.  In Scope mode,  the  x-axis  is either seconds per division, or a count of the number of samples, while the y-axis is in voltage or LSB format. In FFT mode, the x-axis is frequency (Hz) and y-axis is dB. The  input  channel,  sampling  rate,  and  number  of  samples  are  selected  from  the  respective  pulldown  menus. Captured data can be saved to an 'Analog Datapoint file' in .csv format.

│

Evaluates: MAX22005

Figure 7. MAX22005 EV Kit GUI, Analysis Tab

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX22005EVKIT# | EV Kit |

#Denotes RoHS compliance.

## MAX22005 Evaluation Kit

## MAX22005 EV Kit Bill of Materials

|   ITEM | REF_DES                    | DNI/DNP   |   QTY | MFG PART #                                                                                                         | MANUFACTURER                                       | VALUE   | DESCRIPTION                                      |
|--------|----------------------------|-----------|-------|--------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|---------|--------------------------------------------------|
|      1 | C1-C12                     | -         |    12 | GRM155R71H332KA01                                                                                                  | MURATA                                             | 3300PF  | CAP; SMT (0402); 3300PF; 10%; 50V; X7R; CERAMIC  |
|      2 | C15-C18, C30, C180, C185   | -         |     7 | GRM188R70J105KA01; CL10B105KQ8NNNC                                                                                 | MURATA;SAMSUNG ELECTRONICS                         | 1.0UF   | CAP; SMT (0603); 1.0UF; 10%; 6.3V; X7R; CERAMIC; |
|      3 | C19, C28, C112, C122, C150 | -         |     5 | C1206C105K5RAC; GRM31CR71H105KA61; GRM31MR71H105KA88; GCM31MR71H105KA55; CGA5L3X7R1H105K160AB; C3216X7R1H105K160AE | KEMET;MURATA;MURATA; MURATA;TDK;TDK                | 1UF     | CAP; SMT (1206); 1UF; 10%; 50V; X7R; CERAMIC     |
|      4 | C22, C184                  | -         |     2 | GRM21BR71A475KA73; LMK212B7475KG-T; C2012X7R1A475K125AC                                                            | MURATA;TAIYO YUDEN;TDK                             | 4.7UF   | CAP; SMT (0805); 4.7UF; 10%; 10V; X7R; CERAMIC   |
|      5 | C23, C25, C181, C183, C186 | -         |     5 | C0603C104K9RAC; GRM188R70J104KA01                                                                                  | KEMET;MURATA                                       | 0.1UF   | CAP; SMT (0603); 0.1UF; 10%; 6.3V; X7R; CERAMIC; |
|      6 | C24                        | -         |     1 | C0603C105K4RAC; GRM188R71C105KA12; C1608X7R1C105K080AC; EMK107B7105KA; CGA3E1X7R1C105K080AC; 0603YC105KAT2A        | KEMET;MURATA;TDK; TAIYO YUDEN;TDK;AVX              | 1UF     | CAP; SMT (0603); 1UF; 10%; 16V; X7R; CERAMIC     |
|      7 | C26                        | -         |     1 | C0603C224K3RAC; GMC10X7R224K25; GRM188R71E224KA88; C1608X7R1E224K080AC                                             | KEMET;MURATA;MURATA;TDK                            | 0.22UF  | CAP; SMT (0603); 0.22UF; 10%; 25V; X7R; CERAMIC  |
|      8 | C27                        | -         |     1 | GRM188R71C103KA01; ECJ-1VB1C10; CL10B103KO8NNN; GCJ188R71C103KA01                                                  | MURATA;PANASONIC; SAMSUNG;MURATA                   | 0.01UF  | CAP; SMT (0603); 0.01UF; 10%; 16V; X7R; CERAMIC  |
|      9 | C31, C32                   | -         |     2 | C1005X7R1H104K050BB; GRM155R71H104KE14; C1005X7R1H104K050BE; UMK105B7104KV-FR                                      | TDK;MURATA;TDK; TAIYO YUDEN                        | 0.1UF   | CAP; SMT (0402); 0.1UF; 10%; 50V; X7R; CERAMIC   |
|     10 | C111, C115, C125           | -         |     3 | C3216X5R1H106K160AB; GRM31CR61H106KA12                                                                             | TDK;MURATA                                         | 10UF    | CAP; SMT (1206); 10UF; 10%; 50V; X5R; CERAMIC    |
|     11 | C114, C124                 | -         |     2 | GRM31CR71H475KA12; GRJ31CR71H475KE11; GXM31CR71H475KA10; UMK316AB7475KL                                            | MURATA;MURATA; MURATA;TAIYO YUDEN                  | 4.7UF   | CAP; SMT (1206); 4.7UF; 10%; 50V; X7R; CERAMIC   |
|     12 | C121                       | -         |     1 | C4532X7R2A105M230KA                                                                                                | TDK                                                | 1UF     | CAP; SMT (1812); 1UF; 20%; 100V; X7R; CERAMIC    |
|     13 | C151                       | -         |     1 | GRM31CR71E106KA12; CL31B106KAHNNN                                                                                  | MURATA;SAMSUNG ELECTRONICS                         | 10UF    | CAP; SMT (1206); 10UF; 10%; 25V; X7R; CERAMIC    |
|     14 | C171, C173, CP4            | -         |     3 | C2012X7S1A226M125AC                                                                                                | TDK                                                | 22UF    | CAP; SMT (0805); 22UF; 20%; 10V; X7S; CERAMIC    |
|     15 | C172                       | -         |     1 | GRM1555C1H102JA01; C1005C0G1H102J050                                                                               | MURATA;TDK                                         | 1000PF  | CAP; SMT (0402); 1000PF; 5%; 50V; C0G; CERAMIC   |
|     16 | C182                       | -         |     1 | C0402C470K5GAC                                                                                                     | KEMET                                              | 47PF    | CAP; SMT (0402); 47PF; 10%; 50V; C0G; CERAMIC    |
|     17 | C201                       | -         |     1 | C1005X7R1V103K050BB                                                                                                | TDK                                                | 0.01UF  | CAP; SMT (0402); 0.01UF; 10%; 35V; X7R; CERAMIC  |
|     18 | C202, C203                 | -         |     2 | C0402C180J5GAC; GRM1555C1H180JA01; C1005C0G1H180J050BA                                                             | KEMET;MURATA;TDK                                   | 18PF    | CAP; SMT (0402); 18PF; 5%; 50V; C0G; CERAMIC     |
|     19 | C204                       | -         |     1 | C0603C475K8PAC; LMK107BJ475KA; CGB3B1X5R1A475K; C1608X5R1A475K080AC; CL10A475KP8NNN; C1608X5R1A475K080AE           | KEMET;TAIYO YUDEN;TDK; TDK;SAMSUNG ELECTRONICS;TDK | 4.7UF   | CAP; SMT (0603); 4.7UF; 10%; 10V; X5R; CERAMIC   |
|     20 | C205-C216, C230, C231      | -         |    14 | C0402C104J4RAC; GCM155R71C104JA55                                                                                  | KEMET;MURATA                                       | 0.1UF   | CAP; SMT (0402); 0.1UF; 5%; 16V; X7R; CERAMIC    |
|     21 | CP1                        | -         |     1 | CL21A106KOQNNN; GRM21BR61C106KE15; EMK212ABJ106KD                                                                  | SAMSUNG ELECTRONICS; MURATA;TAIYO YUDEN            | 10UF    | CAP; SMT (0805); 10UF; 10%; 16V; X5R; CERAMIC    |
|     22 | CP2                        | -         |     1 | UMK107BJ105KA; C1608X5R1H105K080AB; CL10A105KB8NNN; GRM188R61H105KAAL                                              | TAIYO YUDEN;TDK; SAMSUNG;MURATA                    | 1UF     | CAP; SMT (0603); 1UF; 10%; 50V; X5R; CERAMIC     |
|     23 | CP3                        | -         |     1 | GRM1885C1H102JA01; C1608C0G1H102J080AA; GCM1885C1H102JA16                                                          | MURATA;TDK;MURATA                                  | 1000PF  | CAP; SMT (0603); 1000PF; 5%; 50V; C0G; CERAMIC   |
|     24 | CP5, CP6                   | -         |     2 | 0805YC475KAT2A; GCM21BR71C475KA73; CGA4J3X7R1C475K125AE; GRM21BR71C475KE51                                         | AVX;MURATA;TDK;MURATA                              | 4.7UF   | CAP; SMT (0805); 4.7UF; 10%; 16V; X7R; CERAMIC   |

Evaluates: MAX22005

## MAX22005 EV Kit Bill of Materials (continued)

|   ITEM | REF_DES                                                   | DNI/DNP   |   QTY | MFG PART #                                                    | MANUFACTURER                 | VALUE             | DESCRIPTION                                                                                                     |
|--------|-----------------------------------------------------------|-----------|-------|---------------------------------------------------------------|------------------------------|-------------------|-----------------------------------------------------------------------------------------------------------------|
|     25 | D121                                                      |           |     1 | DFLS1150                                                      | DIODES INCORPORATED          | DFLS1150          | DIODE; RECT; SMT (POWERDI-123); PIV=150V; IF=1A                                                                 |
|     26 | D211                                                      |           |     1 | LG L29K-G2J1-24                                               | OSRAM                        | LG L29K-G2J1-24   | DIODE; LED; SMT (0603); Vf=1.7V; If(test)=0.002A; -40 DEGC TO +100 DEGC                                         |
|     27 | FB1                                                       |           |     1 | BLM21AG601SN1                                                 | MURATA                       | 600               | INDUCTOR; SMT (0805); FERRITE-BEAD; 600; TOL=+/-25%; 0.2A                                                       |
|     28 | FB2, FB3                                                  |           |     2 | BLM21PG331SN1                                                 | MURATA                       | 330               | INDUCTOR; SMT (0805); FERRITE-BEAD; 330; TOL=+/-25%; 1.5A                                                       |
|     29 | J1, J7                                                    |           |     2 | 929647-09-03-I                                                | 3M                           | 929647-09-03-I    | CONNECTOR; MALE; THROUGH HOLE; 929 SERIES; STRAIGHT; 3PINS                                                      |
|     30 | J2, J107, JP10, JP20                                      |           |     4 | PEC02SAAN                                                     | SULLINS                      | PEC02SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                       |
|     31 | J100                                                      |           |     1 | PJ-202AH                                                      | CUI INC.                     | PJ-202AH          | CONNECTOR; MALE; THROUGH HOLE; DC POWER JACK; RIGHT ANGLE; 3PINS                                                |
|     32 | J201                                                      |           |     1 | TSW-106-08-S-D-RA                                             | SAMTEC                       | TSW-106-08-S-D-RA | CONNECTOR; THROUGH HOLE; POST TERMINAL STRIP ASSEMBLY; RIGHT ANGLE; 12PINS;                                     |
|     33 | J202                                                      |           |     1 | ZX62RD-AB-5P8(30)                                             | HIROSE ELECTRIC CO LTD.      | ZX62RD-AB-5P8(30) | CONNECTOR; MALE; THROUGH HOLE; MICRO-USB CONNECTOR MEETING REQUIREMENTS OF USB 2.0 STANDARD; RIGHT ANGLE; 5PINS |
|     34 | L10, L20                                                  |           |     2 | LPS4018-824MR                                                 | COILCRAFT                    | 820UH             | INDUCTOR; SMT; FERRITE; 820UH; 20%; 0.14A                                                                       |
|     35 | L110, L120, L150, L170                                    |           |     4 | LQH32CN220K23                                                 | MURATA                       | 22UH              | INDUCTOR; 1210; 22UH; +/-10%; 0.25A; -40DEGC TO +85DEGC                                                         |
|     36 | LED0-LED7, LED100, LED105, LED106, LED110, LED120, LED201 |           |    14 | SML-P12PT                                                     | ROHM                         | SML-P12PT         | DIODE; LED; SML-P1 SERIES; ULTRA COMPACT HIGH BRIGHTNESS LED; GREEN; SMT (0402); VF=2.2V; IF=0.02A              |
|     37 | LP1                                                       |           |     1 | B82432T1332K000                                               | TDK                          | 3.3UH             | INDUCTOR; SMT (1812); FERRITE CORE; 3.3UH; TOL=+/- 10%; 0.9A                                                    |
|     38 | R1-R12                                                    |           |    12 | MMA02040C4751F                                                | VISHAY BEYSCHLAG             | 4.75K             | RES; SMT; 4.75K; 1%; +/-50PPM/DEGK; 0.4W                                                                        |
|     39 | R21-R24                                                   |           |     4 | ERJ-2RKF10R0                                                  | PANASONIC                    |                   | 10 RESISTOR; 0402; 10 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                        |
|     40 | R26, R28-R30                                              |           |     4 | ERJ-2RKF1000                                                  | PANASONIC                    | 100               | RESISTOR; 0402; 100 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                          |
|     41 | R27, R207                                                 |           |     2 | CRCW040210K0FK; RC0402FR-0710KL                               | VISHAY DALE; YAGEO PHICOMP   | 10K               | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                                                            |
|     42 | R31, R32, R102                                            |           |     3 | CRCW040222K0FK                                                | VISHAY DALE                  | 22K               | RESISTOR, 0402, 22K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                        |
|     43 | R40-R47, R175, R176, R201                                 |           |    11 | ERJ-2RKF1301                                                  | PANASONIC                    | 1.3K              | RESISTOR; 0402; 1.3K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                         |
|     44 | R110, R120                                                |           |     2 | ERJ-2RKF1622                                                  | PANASONIC                    | 16.2K             | RES; SMT (0402); 16.2K; 1%; +/-100PPM/DEGC; 0.1W                                                                |
|     45 | R111, R121                                                |           |     2 | CRCW0402442KFK                                                | VISHAY DALE                  | 442K              | RESISTOR; 0402; 442K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                        |
|     46 | R112, R122                                                |           |     2 | ERJ-2RKF2492                                                  | PANASONIC                    | 24.9K             | RESISTOR; 0402; 24.9K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                        |
|     47 | R113, R123                                                |           |     2 | RC0201JR-070RL                                                | YAGEO                        |                   | 0 RESISTOR; 0201; 0 OHM; 0%; JUMPER; 0.05W; THICK FILM                                                          |
|     48 | R114, R124                                                |           |     2 | ERJ-2RKF6982                                                  | PANASONIC                    | 69.8K             | RESISTOR; 0402; 69.8K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                        |
|     49 | R150                                                      |           |     1 | CRCW0402130KFK                                                | VISHAY DALE                  | 130K              | RESISTOR; 0402; 130K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                        |
|     50 | R153                                                      |           |     1 | ERJ-2RKF1583                                                  | PANASONIC                    | 158K              | RESISTOR; 0402; 158K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                         |
|     51 | R154                                                      |           |     1 | ERJ-2RKF4992                                                  | PANASONIC                    | 49.9K             | RESISTOR; 0402; 49.9K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                        |
|     52 | R202, R203                                                |           |     2 | CRCW060310R0FK; MCR03EZPFX10R0; ERJ-3EKF10R0                  | VISHAY DALE;ROHM             | 10                | RESISTOR; 0603; 10 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                           |
|     53 | R204                                                      |           |     1 | CRCW060310K0FK; ERJ-3EKF1002; AC0603FR-0710KL; RMCF0603FT10K0 | VISHAY DALE;PANASONIC; YAGEO | 10K               | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                              |
|     54 | R205                                                      |           |     1 | CRCW060315K0FK                                                | VISHAY DALE                  | 15K               | RESISTOR, 0603, 15K OHM,1%, 100PPM, 0.10W, THICK FILM                                                           |
|     55 | R206                                                      |           |     1 | CRCW060312K0FK                                                | VISHAY DALE                  | 12K               | RESISTOR, 0603, 12K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                          |
|     56 | R208                                                      |           |     1 | CRCW04022K20FK; RC0402FR-072K2L                               | VISHAY DALE;YAGEO PHICOMP    | 2.2K              | RESISTOR, 0402, 2.2K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                       |
|     57 | R211                                                      |           |     1 | CRCW0603665RFK                                                | VISHAY DALE                  | 665               | RESISTOR; 0603; 665 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                          |
|     58 | R214, R215, R220-R222, R230                               |           |     6 | CRCW020110K0FK                                                | VISHAY DALE                  | 10K               | RESISTOR; 0201; 10K OHM; 1%; 100PPM; 0.05W; THICK FILM                                                          |
|     59 | R232                                                      |           |     1 | CRCW0402100KFK; RC0402FR-07100KL                              | VISHAY;YAGEO                 | 100K              | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM                                                           |
|     60 | RP1                                                       |           |     1 | CRCW0603100RFK; ERJ-3EKF1000; RC0603FR-07100RL                | VISHAY DALE;PANASONIC        |                   | 100 RESISTOR; 0603; 100 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                      |

Evaluates: MAX22005

## MAX22005 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES                                 | DNI/DNP   | QTY                | MFG PART #                  | MANUFACTURER                          | VALUE                      | DESCRIPTION                                                                                                                                            |
|--------|-----------------------------------------|-----------|--------------------|-----------------------------|---------------------------------------|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| 61     | RS10                                    | -         | 1                  | RP73D2B249RB                | TE CONNECTIVITY                       | 249                        | RES; SMT (1206); 249; 0.1%; +/-15PPM/DEGC; 0.25W MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO                                                        |
| 62     | SPACER1-SPACER4                         | -         | 4                  | 9032                        | KEYSTONE                              | 9032                       | THREAD; M3.5; 5/8IN; NYLON TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                     |
| 63     | SU1-SU5                                 | -         | 5                  | S1100-B;SX1100-B; STC02SYAN | KYCON;KYCON;SULLINS ELECTRONICS CORP. | SX1100-B                   |                                                                                                                                                        |
| 64     | SW1                                     | - 1       | 219-10MST          |                             | CTS                                   | 219-10MST                  | SWITCH; SPST; SMT; STRAIGHT; 20V; 0.1A; SURFACE MOUNT DIP SWITCH-AUTO PLACEABLE; RINSULATION=1000M OHM                                                 |
| 65     | TP1-TP4, TP6-TP8, TP10, TP11, TP40-TP47 | - 17      |                    | 5009                        | KEYSTONE                              | N/A                        | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                |
| 66     | TP5, TP9, TP12, TP48, TP151             | - 5       |                    | 5127                        | KEYSTONE                              | N/A                        | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLUE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                 |
| 67     | TP26, TP38                              | - 2       |                    | 5007                        | KEYSTONE                              | N/A                        | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                 |
| 68     | TP39, TP102, TP106, TP111               | - 4       |                    | 5011                        | KEYSTONE                              | N/A                        | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                |
| 69     | TP101                                   | - 1       |                    | 5128                        | KEYSTONE                              | N/A                        | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; GREY; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                 |
| 70     | TP103                                   | - 1       |                    | 5010                        | KEYSTONE                              | N/A                        | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                                  |
| 71     | TP110                                   | - 1       |                    | 5013                        | KEYSTONE                              | N/A                        | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                               |
| 72     | TP120                                   | - 1       |                    | 5126                        | KEYSTONE                              | N/A                        | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; GREEN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                |
| 73     | TP150                                   | - 1       |                    | 5125                        | KEYSTONE                              | N/A                        | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BROWN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                |
| 74     | TVS1                                    | - 1       | SMM4F33A           |                             | ST MICROELECTRONICS                   | 33V                        | DIODE; TVS; SMT (DO-216AA); VRM=33V; IPP=7A                                                                                                            |
| 75     | U1                                      | - 1       | MAX22005           |                             | ANALOG DEVICES                        | MAX22005                   | EVKIT PART - IC; RX16; TWELVE-CHANNEL FACTORY- CALIBRATED CONFIGURABLE INDUSTRIAL ANALOG INPUT; QFN48                                                  |
| 76     | U3                                      | - 1       | MAX14761ETB+       |                             | ANALOG DEVICES                        | MAX14761ETB+               | IC; ASW; ABOVE- AND BELOW-THE-RAILS LOW ON- RESISTANCE ANALOG SWITCH; TDFN10-EP                                                                        |
| 77     | U10, U20                                | - 2       | MAX17530ATB+       |                             | ANALOG DEVICES                        | MAX17530ATB+ MAXM17552AMB+ | IC; CONV; 42V; 0.025A; ULTRA-SMALL; HIGH-EFFICIENCY; SYNCHRONOUS STEP-DOWN DC-DC CONVERTER; TDFN10-EP 3X2 IC; PWM; 4V TO 60V; 100MA; COMPACT STEP-DOWN |
| 78     | U50 U80                                 | - 1 - 1   | MAXM17552AMB+      | MAX6126AASA25+              | ANALOG DEVICES ANALOG DEVICES         | MAX6126AASA25+             | POWER MODULE; USLIC-10 IC; VREF; ULTRA HIGH PRECISION; ULTRA LOW NOISE VOLTAGE REFERENCE; SOIC8 150MIL; VOUT=2.5V, 3PPM/DEGC MAX TEMPCO; NSOIC8        |
| 79 80  | U201, U202                              | - 2       | MAX14483AAP+       | ANALOG                      | DEVICES                               | MAX14483AAP+               | IC; DISO; 6-CHANNEL; LOW-POWER; 3.75KVRMS SPI DIGITAL ISOLATOR; SSOP20                                                                                 |
| 81     | U203                                    | - 1       | FT2232HQ           |                             | FUTURE TECHNOLOGY DEVICES INTL LTD.   | FT2232HQ                   | IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; QFN64-EP                                                                                      |
| 82     | U204                                    | - 1       | 93LC66BT-I/OT      |                             | MICROCHIP                             | 93LC66BT-I/OT              | IC; EPROM; 4K MICROWIRE SERIAL EEPROM; SOT23-6                                                                                                         |
| 83     | U205                                    | - 1       | MAX1556ETB+        |                             | ANALOG DEVICES                        | MAX1556ETB+                | IC; CONV; PWM STEP-DOWN DC-DC CONVERTER; TDFN10- EP 3X3                                                                                                |
| 84     | U206                                    | - 1       | M25P16-VMW6TG      |                             | MICRON TECHNOLOGY INC.                | M25P16-VMW6TG              | IC; MMRY; 16MBIT; SERIAL FLASH MEMORY; 75MHZ SPI BUS INTERFACE; MSOIC8 200MIL                                                                          |
| 85     | X1-X3                                   | - 3       | 282834-9           | TE                          | CONNECTIVITY                          | 282834-9                   | CONNECTOR; FEMALE; THROUGH HOLE; 2.54MM PITCH SIDE WIRE ENTRY STACKING TERMINAL BLOCK; STRAIGHT; 9PINS                                                 |
| 86     |                                         |           |                    | ABM7-12.000MHZ-D2Y-T        |                                       |                            |                                                                                                                                                        |
| 87     | Y1 Y2                                   | - 1 - 1   | ASE-7.3728MHZ-L-C  |                             | ABRACON ABRACON                       | 12MHZ 7.3728MHZ            | CRYSTAL; SMT ; 18PF; 12MHZ; +/-20PPM; +/-30PPM CRYSTAL; SMT; 15PF; 7.3728MHZ; +/-50PPM                                                                 |
| 88     | PCB                                     | - 1       | MAX22005           |                             | ANALOG DEVICES                        | PCB                        | PCB:MAX22005                                                                                                                                           |
|        | C21                                     |           | GRM188R70J105KA01; |                             | MURATA;SAMSUNG                        | 1.0UF                      | CAP; SMT (0603); 1.0UF; 10%; 6.3V; X7R; CERAMIC;                                                                                                       |
| 89     |                                         | DNP 0     | CL10B105KQ8NNNC    |                             | ELECTRONICS                           |                            |                                                                                                                                                        |
| 90     | R13                                     | DNP 0     | N/A                |                             | N/A                                   | SHORT                      | PACKAGE OUTLINE 0402 RESISTOR                                                                                                                          |

Evaluates: MAX22005

## MAX22005 Evaluation Kit

## MAX22005 EV Kit Schematic

<!-- image -->

│

Evaluates: MAX22005

## MAX22005 EV Kit Schematic (continued)

<!-- image -->

│

Evaluates: MAX22005

## MAX22005 EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX22005

## MAX22005 EV Kit PCB Layout Diagrams

MAX22005 EV Kit PCB Layout -Silkscreen Top

<!-- image -->

MAX22005 EV Kit PCB Layout -Top Layer

<!-- image -->

│

MAX22005 EV Kit PCB Layout -Layer 2

<!-- image -->

MAX22005 EV Kit PCB Layout -Layer 3

<!-- image -->

## MAX22005 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

1'

│

## MAX22005 EV Kit PCB Layout Diagrams (continued)

MAX22005 EV Kit PCB Layout -Bottom Layer

<!-- image -->

MAX22005 EV Kit PCB Layout -Silkscreen Bottom

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                              | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------------------------------|-----------------|
|                 0 | 3/21            | Initial release                                                          | -               |
|                 1 | 12/25           | Updated the datasheet with Analog Devices' template and Features section | 1-19            |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX22005