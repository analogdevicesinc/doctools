<!-- lastmod 2022-08-03 -->
## MAX11960 Evaluation Kit

## General Description

The MAX11960 evaluation kit (EV kit) demonstrates the device's,  20-bit,  1.0Msps,  dual-channel,  fully  differential SAR  ADC  with  internal  reference  buffers.  The  EV  kit includes  a  graphical  user  interface  (GUI)  that  provides communication  from  Avnet's  ZedBoard™  development board  for  the  Xilinx  Zynq ® -7000  SoC.  The  ZedBoard is  not  included  with  the  EV  kit  and  must  be  purchased through Avnet.

The  ZedBoard  communicates  with  the  PC  through an  Ethernet  cable  using  Windows ®   7,  or  Windows 8/8.1-compatible software.

The EV kit comes with the MAX11960ETP+ installed.

## System Block Diagram

<!-- image -->

ZedBoard is a trademark of ZedBoard.org.

Zynq is a registered trademark of Xilinx, Inc.

Windows, Windows XP, and Windows Vista are registered trademarks and registered service marks of Microsoft Corporation.

Evaluates: MAX11960

## Benefits and Features

- FMC Connector for Interface
- 75MHz SPI Clock Capability through FMC Connector
- Sync In and Sync Out for Coherent Sampling
- On-Board Input Buffers (MAX9632)
- On-Board +3.0V Reference Voltage (MAX6126)
- Windows 7, and Windows 8/8.1-Compatible Software

Ordering Information appears at end of data sheet.

<!-- image -->

## Quick Start

## Required Equipment

- MAX11960 differential EV kit with SD card
- ZedBoard development board
- Windows PC
- Ethernet cable
- +20V/1A DC power supply or equivalent wall plug
- Signal generator with differential outputs (e.g., Audio Precision 2700 series)
- Soldering iron and 2-pin 2.54mm header

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Visit http://www.maximintegrated.com/en/design/ tools/applications/evkit-software/ to  download the latest version of the EV kit software, 11960EVKit.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Solder the 2-pin header on J18-3V3 of the ZedBoard.
- 3) Connect the Ethernet cable from the PC to the ZedBoard and configure the Internet Protocol Version 4 (TCP/ IPv4) properties  in  the  local  area  connection  to  IP address 192.168.1.2 and subnet mask to 255.255.255.0 . Note: If  an  ethernet  port  is  not  available  on  the  PC, please use the option of ethernet to USB port adapter.
- 4) Verify  that  the  ZedBoard's  jumpers  JP7,  JP8,  and JP11 have shunts installed at the GND position, and JP9 and JP10 at the 3V3 position.
- 5) Move the shunt of J18 of the ZedBoard to the 3V3 position from 1V8.
- 6) Insert the SD card with the boot image (BOOT.bin).
- 7) Verify that all jumpers on the EV kit are in their default positions, as shown in Table 1.
- 8) Connect the ZedBoard to J2 on the EV kit for FMC connection.
- 9) Connect the +20V DC power supply between +20V and GNDA4 test points. If the power supply is unavailable, a +20V wall plug can be inserted into the J3 connector of the MAX11960 EV kit.
- 10)  Insert the +12V wall plug into the connect J20 of the ZedBoard. Turn on the power to the ZedBoard.
- 11)  Verify that  the  OLED  screen  on  the  ZedBoard displays 'MAX11960'.
- 12)  Apply  differential  signals  at  test  points  INV+A  and INV-A, and at INV+B and INV-B.
- 13)  Enable the function generators.
- 14)  Open the EV kit GUI, MAX11960EVKit.exe and verify that the status bar at the lower right corner displays EV Kit Hardware Connected .
- 15)  Select MAX11960 from  the Device Dropdown  list within the System tab sheet (Figure 1).
- 16)  Click on the Scope (Figure 2) or FFT (Figure 6) tab sheet and start capturing data by clicking the Capture button.

## Evaluates: MAX11960

## MAX11960 Evaluation Kit

Table 1. Jumper Descriptions

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                        |
|----------|------------------|------------------------------------------------------------------------------------|
| JU1      | 1-2              | Connects INV+A to GND for noninverting configuration on channel A of the MAX11960. |
| JU1      | 3-4              | Connects to the output of the op amp (U12).                                        |
| JU1      | 5-6*             | Connects NONINV+A to GND for inverting configuration on channel A of the MAX11960. |
| JU2      | 1-2              | Connects output of the op amp (U10) to the negative input of the op amp (U8).      |
| JU2      | 3-4              | GND the negative input of the op amp (U8).                                         |
| JU2      | 5-6*             | Connects output of the op amp (U10) to positive input of the op amp (U8).          |
| JU2      | 7-8              | GND the positive input of the op amp (U8).                                         |
| JU2      | 9-10             | Connects REFA2 to positive input of the op amp (U8).                               |
| JU3      | 1-2*             | Connects output of the op amp (U8) to AIN+A.                                       |
| JU3      | 3-4              | Connects output of the op amp (U13) to AIN+A.                                      |
| JU3      | 5-6*             | Connects output of the op amp (U7) to AIN-A.                                       |
| JU3      | 7-8              | Connects output of the op amp (U14) to AIN-A.                                      |
| JU3      | 9-10*            | Connects output of the op amp (U13) to AIN+B.                                      |
| JU3      | 11-12            | Connects output of the op amp (U8) to AIN+B.                                       |
| JU3      | 13-14*           | Connects output of the op amp (U14) to AIN-B.                                      |
| JU3      | 15-16            | Connects output of the op amp (U7) to AIN-B.                                       |
| JU4      | 1-2              | Connects to REF offset.                                                            |
| JU4      | 3-4*             | Connects to REF/2 offset.                                                          |
| JU4      | 5-6              | Connects to GND.                                                                   |

Evaluates: MAX11960

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                        |
|----------|------------------|------------------------------------------------------------------------------------|
| JU5      | 1-2              | Connects NONINV-A to GND for inverting configuration on channel A of the MAX11960. |
| JU5      | 3-4              | Connects to the output of the op amp (U10).                                        |
| JU5      | 5-6*             | Connects INV-A to GND for noninverting configuration on channel A of the MAX11960. |
| JU6      | 1-2              | Connects REFA2 to positive input of the op amp (U7).                               |
| JU6      | 3-4              | GND the positive input of the op amp (U7).                                         |
| JU6      | 5-6*             | Connects output of the op amp (U12) to positive input of the op amp (U7).          |
| JU6      | 7-8              | GND the negative input of the op amp (U7).                                         |
| JU6      | 9-10             | Connects output of the op amp (U12) to the negative input of the op amp (U7).      |
| JU8      | 1-2              | Connects INV+B to GND for noninverting configuration on channel B of the MAX11960. |
| JU8      | 3-4              | Connects to the output of the op amp (U16).                                        |
| JU8      | 5-6*             | Connects NONINV+B to GND for inverting configuration on channel B of the MAX11960. |
| JU9      | 1-2              | Connects output of the op amp (U15) to the negative input of the op amp (U3).      |
| JU9      | 3-4              | GND the negative input of the op amp (13).                                         |
| JU9      | 5-6*             | Connects output of the op amp (U15) to positive input of the op amp (U13).         |
| JU9      | 7-8              | GND the positive input of the op amp (U13).                                        |
| JU9      | 9-10             | Connects REFB2 to positive input of the op amp (U13).                              |

## MAX11960 Evaluation Kit

Table 1. Jumper Descriptions (continued)

| JUMPER   | SHUNT POSITION                             | DESCRIPTION                                                                                              |
|----------|--------------------------------------------|----------------------------------------------------------------------------------------------------------|
| JU11     | 1-2                                        | Connects to REF offset.                                                                                  |
| JU11     | 3-4*                                       | Connects to REF/2 offset.                                                                                |
| JU11     | 5-6                                        | Connects to GND.                                                                                         |
| JU12     | 1-2                                        | Connects NONINV-B to GND for inverting configuration on channel B of the MAX11960.                       |
| JU12     | 3-4                                        | Connects to the output of the op amp (U15).                                                              |
| JU12     | 5-6*                                       | Connects INV-B to GND for noninverting configuration on channel B of the MAX11960.                       |
| JU13     | 1-2                                        | Connects REFB2 to positive input of the op amp (U14).                                                    |
| JU13     | 3-4                                        | GND the positive input of the op amp (U14).                                                              |
| JU13     | 5-6*                                       | Connects output of the op amp (U16) to positive input of the op amp (U14).                               |
| JU13     | 7-8                                        | GND the negative input of the op amp (U14).                                                              |
| JU13     | 9-10                                       | Connects output of the op amp (U16) to the negative input of the op amp (U14).                           |
| JU16     | 1-2*                                       | REFINAB connects to on-board +3.0V reference.                                                            |
| JU16     | 2-3                                        | User-supplied REFINAB. Apply reference voltage at the EXT_ REFINAB test point.                           |
| JU17     | 1-2*                                       | Set isolator's voltage level to OVDDA                                                                    |
| JU17     | 2-3                                        | Set isolator's voltage level to OVDDB                                                                    |
| JU18     | 1-2, 4-5, 7-8, 16-17, 19-20, 22-23, 25-26* | Connects the SPI signals coming from the FMC connectors to the MAX11960.                                 |
| JU18     | Not installed                              | User-supplied SPI. Connect SPI signals at SCLK, CNVSTA, CNVSTB, DINA, DINB, DOUA, and DOUTB test points. |

Evaluates: MAX11960

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                           |
|----------|------------------|---------------------------------------------------------------------------------------|
| JU20     | Not installed*   | Enables line driver.                                                                  |
| JU20     | Installed        | Disables line driver.                                                                 |
| JU22     | 1-2, 3-4*        | DVDDAand DVDDB supplies connects to on-board +1.8V LDO.                               |
| JU22     | Not installed    | User-supplied DVDDAand DVDDB. Apply +1.8V at the DVDDAand DVDDB test points.          |
| JU23     | 1-3, 2-4*        | OVDDAand OVDDB supplies connects to on-board +1.8V LDO.                               |
| JU23     | 3-5, 4-6         | OVDDAand OVDDB supplies connects to on-board +3.3V LDO.                               |
| JU23     | Not installed    | User-supplied OVDDAand OVDDB. Apply +1.8V to +3.3V at the OVDDAand OVDDB test points. |
| JU24     | 1-2, 3-4*        | AVDDA and AVDDB supplies connects to on-board +1.8V LDO.                              |
| JU24     | Not installed    | User-supplied AVDDA and AVDDB. Apply +1.8V at the AVDDA and AVDDB test points.        |
| JU25     | 1-2, 3-4*        | REFVDDAand REFVDDB supplies connects to on-board +3.3V LDO.                           |
| JU25     | Not installed    | User-supplied REFVDDAand REFVDDB. Apply +3.3V at the REFVDDAand REFVDDB test points.  |
| JU30     | Install          | Do not use.                                                                           |
| JU30     | Not installed*   | User-supplied +20V power- supply header connection.                                   |
| JU31     | 1-2*             | Enabled MAX13256 (U2)                                                                 |
| JU31     | 2-3              | Disable MAX13256 (U2)                                                                 |

│

## MAX11960 Evaluation Kit

Table 1. Jumper Descriptions (continued)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                               |
|----------|------------------|-----------------------------------------------------------|
| JU32     | 1-2              | User-supplied +24V power- supply connection.              |
| JU32     | 3-4*             | Isolated +24V from MAX13256                               |
| JU33     | 1-2              | User-supplied -24V power-supply connection.               |
| JU33     | 3-4*             | Isolated -24V from MAX13256                               |
| JU34     | 1-2, 7-8         | User-supplied +15V supply to analog front-end op amps.    |
| JU34     | 3-4, 5-6*        | Isolated +15V supply to analog front-end op amps and LDO. |

## General Description of Software

The main window of the MAX11960 EV kit software contains six  tabs: System , Scope , DMM , Histogram , FFT ,  and Register Settings .

## System Tab

The System tab is an overview of the evaluation system. The left  side  displays  Sampling  Rate,  Number  of  Samples, Clock  Source,  and  Sync-Out  CLK  for  the  coherent sampling  feature.  For  the  Clock  Source  selection,  the ZedBoard  internal  clock  is  always  a  valid  option.  If  the External Sync-In is selected, then an external clock must be applied at the DCLK\_IN SMA on the EV kit. The SyncOut CLK selection is used to synchronize the signal generator with a 10MHz input. See the Sync Input and Sync Output section for more information.

The center of the tab sheet displays a block diagram and the description of the installed ADC: Device, Resolution, Input  Range,  Reference  Voltage,  and  Max  Sampling Rate.  The  Device  dropdown  list  provides  the  selection between Maxim's 16-, 18-, and 20-bit parts. Once appro-

Evaluates: MAX11960

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                         |
|----------|------------------|---------------------------------------------------------------------|
| JU35     | 1-2              | GND the negative supply of the analog front-end op amps.            |
| JU35     | 3-4              | User-supplied -15V supply to analog front-end op amps.              |
| JU35     | 5-6*             | Isolated -15V supply to analog front-end op amps.                   |
| JU36     | 1-2              | User-Supplied +5V to LDOs that powers the supplies on the MAX11960. |
| JU36     | 3-4*             | +5V supply to LDOs that powers the supplies on the MAX11960.        |

priately selected, the description of the ADC will change accordingly.  The  Reference  Voltage  dropdown  list  is adjustable.  Please  see  the  MAX11960  data  sheet  for detailed specification of the reference voltage range.

The right-side of the tab sheet reads a single conversion in LSB and decimal. An additional feature is the ADC calibration.

## Scope Tab

The Scope tab sheet is used to capture data and display it  in  the  time  domain.  Sampling  rate  and  number  of samples  can  also  be  set  in  this  tab  if  they  were  not adjusted  appropriately  in  other  tabs.  The Display  Unit drop-down  list  allows  counts  and  voltages.  Below  the graph, the user can select to display Channel A and/or Channel B .  Once  the  desired  configuration  is  set,  click on  the Capture button.  The  right-side  of  the  tab  sheet displays  details  of  the  waveform,  such  as Average , Standard Deviation , Maximum , Minimum , and Fundamental Frequency .

Figure  2  displays  data  of  both  ADCs  when  differential sinusoidal are applied at the inputs on the EV kit.

│

Figure 1. MAX11960 EV Kit Main Window (System Tab)

<!-- image -->

Figure 2. MAX11960 EV Kit Main Window (Scope Tab)

<!-- image -->

## MAX11960 Evaluation Kit

## DMM Tab

The DMM tab sheet provides the typical information as a digital multimeter. Once the desired configuration is set, click on the Capture button.

Figure 3 displays the numerical value when the inputs on the EV kit are shorted to ground using the jumpers. See Table 1 for shunt settings.

## Histogram Tab

The Histogram tab  sheet  is  used  to  capture  the  histogram of the data. Sampling rate and number of samples can  also  be  set  in  this  tab  if  they  were  not  adjusted appropriately in other tabs. Make sure that the number of samples do not exceed 524288. Otherwise, data capturing is longer than expected. Below the graph, the user can select to display Channel A and/or Channel B . Once the desired configuration is set, click on the Capture button. The right side of the tab sheet displays details of the histogram such as Average , Standard Deviation , Maximum , Minimum , Peak to Peak Noise , Effective Resolution , and Noise Free Resolution .

Evaluates: MAX11960

To  use  this  histogram  feature,  apply  a  DC  voltage at  the  input  of  channel  A  and/or  B.  Figure  4  displays the  results  when  the  input  of  the  EV  kit  are  shorted  to  ground.  See  Table  1  for  placement  of  shunt positions.

## FFT Tab

The FFT tab  is  used  to  display  the  FFT  of  the  data. Sampling rate and number of samples can also be set in this  tab  if  they  were  not  adjusted  appropriately  in  other tabs. When coherent sampling is needed, this tab sheet allows  the  user  to  calculate  the  input  frequency  or  the master  clock  coming  into  the  board.  Either  adjust  the input frequency applied to the signal generator or adjust the master clock applied to the DCLK\_IN SMA connector. See  the Sync  Input  and  Sync  Output section  before using this feature. Once the desired configuration is set, click  on  the Capture button.  The  right  side  of  the  tab sheet displays the performance based on the FFT, such as Fundamental Frequency , THD , SNR , SINAD , SFDR , ENOB , and Noise Floor .

Figure 5 is the setup Maxim Integrated uses to capture data for coherent sampling.

Figure 3. MAX11960 EV Kit Main Window (DMM Tab)

<!-- image -->

│

Figure 4. MAX11960 EV Kit Main Window (Histogram Tab)

<!-- image -->

Figure 5. MAX11960 Differential EV Kit Coherent Sampling Setup

<!-- image -->

## MAX11960 Evaluation Kit

The input signal from the signal generator must be exactly 10000.000000Hz .  The  low-jitter  clock  is  synchronized with the signal generator. The master clock was initially set to 1000000000 Hz but to achieve coherent sampling, then user must click on the Calculate button and use the Adjusted(Hz) frequency. 99523158.694 Hz was entered into our low-jitter clock. The master clock is fed back to the ZedBoard and multiplied by 3/2, then generates a system clock that drives the Xilinx FPGA. All SPI timing and sampling rate are based off the system clock.

If  the  results  do  not  look  similar  to  Figure  6  and  more similar to Figure 7, then check all connections in Figure 5 to make sure the setup is synchronizing properly.

## Register Settings Tab

The Register Settings tab  allows  the  user  to  read  and write  to  the  appropriate  registers  at  a  bit  level.  Each bit(s)  in  each  register  contains  the Value , Setting ,  and Description .

Figure 6. MAX11960 EV Kit Main Window, Coherent Sampling Results (FFT Tab)

<!-- image -->

Figure 7. MAX11960 EV Kit Main Window, Non-coherent Sampling Results (FFT Tab)

<!-- image -->

Figure 8. MAX11960 EV Kit Main Window, Register Settings (FFT Tab)

<!-- image -->

## MAX11960 Evaluation Kit

## General Description of Hardware

This  EV  kit  provides  a  proven  layout  to  demonstrate the  performance  of  the  MAX11960  18-bit,  dual-channel SAR  ADC.  Included  in  the  EV  kit  are  digital  isolators (MAX14935),  ultra  low-noise  LDOs  (MAX8510)  to  all MAX11960 supply pins, on-board reference (MAX6126), precision amplifiers (MAX9632) for the analog inputs, and sync in and sync out signals for coherent sampling.

## User-Supplied SPI

To  evaluate  the  EV  kit  with  a  user-supplied  SPI  bus, remove  shunts  from  jumper  JU18.  Apply  the  user-supplied SPI signals to the SCLK, CNVSTA, CNVSTB, DINA, DINB, DOUTA, and DOUTB test points. Make sure the return ground is the same as the MAX11960's ground.

## User-Supplied REFVDD

The REFVDD supply is powered through a +3.3V LDO by default. For user-supplied REFVDD, remove the shunt of  the  jumper  JU25  and  apply  +2.7V  to  +3.6V  at  the REFVDDA and REFVDDB test points.

## User-Supplied AVDD

The AVDD supply is powered through a +1.8V LDO by default. For user-supplied AVDD, remove the shunt of the jumper JU24 and apply +1.7V to +1.9V at the AVDDA and AVDDB test points.

## User-Supplied DVDD

The DVDD supply is powered through a +1.8V LDO by default. For user-supplied DVDD, remove the shunt of the jumper JU22 and apply +1.7V to +1.9V at the DVDDA and DVDDB test points.

## User-Supplied OVDD

The OVDD supply is powered through a +1.8V LDO by default. Move the shunt to the 2-3 position of jumper JU23 to use the +3.3V LDO. For user-supplied OVDD, remove the shunt of the jumper JU23 and apply +1.5V to +3.6V at the OVDDA and OVDDB test points.

## User-Supplied REFINAB

The MAX11960  uses an on-board +3V reference MAX6126 by default. For user-supplied REFINAB, move the shunt of jumper JU16 to the 2-3 position. Make sure that REFINAB is 300mV below REFVDD before applying the reference.

## Analog Inputs

For simplicity, channel A will be discussed but will apply to  channel  B  as  well.  Both  analog  inputs,  AIN+A  and AIN-A,  range  from  0V  to  V REF .  The  differential  input range is from -V REF  to +V REF  and the full-scale range is 2 times the V REF . The desired input signals are applied at  the  INV+  and  INV-  SMAs  for  inverting  configuration, and  NONINV+A  and  NONINV-A  SMAs  for  noninverting configuration.

## Sync Input and Sync Output

The  DCLK\_IN  SMA  accepts  an  approximate  100MHz waveform  signal  to  generate  the  system  clock  of  the ZedBoard.  For  maximum  performance,  use  a  low-jitter clock that syncs to the user's analog function generator. The SYNC\_OUT SMA outputs a 10MHz square waveform that syncs to the user's analog function generator. Both options  are  used  for  coherent  sampling  of  the  IC.  Only one  option  should  be  used  at  a  time.  The  relationship between f IN ,  f S ,  N CYCLES ,  and  M SAMPLES   is  given  as follows:

<!-- formula-not-decoded -->

where, f IN  = Input frequency f S = Sampling frequency NCYCLES = Prime number of cycles in the sampled set

MSAMPLES = Total number of samples

## Table 2. Analog Input Configurations

| JUMPER   | INVERTING   | NONINVERTING   |
|----------|-------------|----------------|
| JU1      | 5-6         | 1-2            |
| JU2      | 5-6         | 5-6            |
| JU4      | 3-4         | 3-4            |
| JU5      | 1-2         | 5-6            |
| JU6      | 5-6         | 5-6            |
| JU8      | 5-6         | 1-2            |
| JU9      | 5-6         | 5-6            |
| JU11     | 3-4         | 3-4            |
| JU12     | 1-2         | 5-6            |
| JU13     | 5-6         | 5-6            |

│

## Evaluates: MAX11960

## Component Information, PCB Layout, and Schematics

See the following links for component information, PCB layout diagrams and schematics.

- MAX11960 EV BOM
- MAX11960 EV PCB Layout
- MAX11960 EV Schematics

Evaluates: MAX11960

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX11960EVKIT# | EVKIT  |

#Denotes RoHS compliant.

│

## MAX11960 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/16            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im Integrated reserves the right to change the circuitr\ and specifications Zithout notice at an\ time.

│

Evaluates: MAX11960

## TITLE: Bill of Materials

DATE: 05/13/2015

DESIGN: max119xx\_evkit\_a

|   ITEM |   QTY | REF DES                                                                                                                                                                                                                           | MFG PART #                                              | MANUFACTURE R            | VALUE     | DESCRIPTION                                                                                                   |
|--------|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|--------------------------|-----------|---------------------------------------------------------------------------------------------------------------|
|      1 |     6 | +20V, +3.3V_A, EXT_+5V, U23_VCC, EXT_+15V, EXT_+24V                                                                                                                                                                               | 5005                                                    | KEYSTONE                 | N/A       | TESTPOINT WITH 1.80MM HOLE DIA, RED, COMPACT; NOT FOR COLD TEST                                               |
|      2 |     7 | AVDDA, AVDDB, OVDDA, OVDDB, CNVSTA, CNVSTB, EXT_REFINB                                                                                                                                                                            | PEC01SAAN                                               | SULLINS ELECTRONICS CORP | PEC01SAAN | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 1PIN                                                      |
|      3 |    36 | C1, C2, C45, C48, C51, C54, C61, C64, C67, C70, C74, C77, C80, C83, C90, C93, C96, C99, C115, C117, C119, C121, C124, C127, C130, C133, C138, C139, C151, C155, C156, C160, C165, C177, C179, C188                                | C2012X5R1V106K085                                       | TDK                      | 10UF      | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 35V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                      |
|      4 |    45 | C3, C4, C8, C9, C46, C47, C52, C53, C62, C63, C68, C69, C75, C76, C81, C82, C91, C92, C97, C98, C101- C104, C107, C110-C112, C116, C118, C120, C122, C125, C128, C131, C134, C136, C137, C152, C154, C157, C159, C171, C173, C187 | GRM188R72A104KA35                                       | MURATA                   | 0.1UF     | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                   |
|      5 |     6 | C5, C7, C105, C106, C108, C109                                                                                                                                                                                                    | UMK107BJ105KA-T; C1608X5R1H105K080AB                    | TAIYO YUDEN/TDK          | 1UF       | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 50V; TOL=10%; MODEL=_MK SERIES; TG=-55 DEGC TO +85 DEGC             |
|      6 |     7 | C10, C59, C86, C113, C114, C153, C158                                                                                                                                                                                             | GRM32ER72A225KA35; CGA6N3X7R2A225K230                   | MURATA/TDK               | 2.2UF     | CAPACITOR; SMT (1210); CERAMIC CHIP; 2.2UF; 100V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC to +125 DEGC; TC=X7R |
|      7 |     1 | C11                                                                                                                                                                                                                               | C1608X5R1V225K080AC; GRM188R6YA225KA12                  | TDK/MURATA               | 2.2UF     | CAPACITOR; SMT (0805); CERAMIC CHIP; 2.2UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                    |
|      8 |    13 | C12, C14, C16, C18, C20, C28, C29, C31, C33, C35, C37, C39, C42                                                                                                                                                                   | CGA2B3X7R1H104K; C1005X7R1H104K050BB; GRM155R71H104KE14 | TDK; MURATA              | 0.1UF     | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                    |
|      9 |    12 | C13, C15, C17, C19, C27, C30, C32, C34, C36, C38, C40, C41                                                                                                                                                                        | C2012X5R1V106K085                                       | TDK                      | 10UF      | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 35V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                      |

|   10 |   4 | C23, C26                                                  | CGA4F3C0G2E102J                 | TDK                      | 1000PF            | CAPACITOR; SMT (0805); CERAMIC CHIP; 1000PF; 250V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                                                |
|------|-----|-----------------------------------------------------------|---------------------------------|--------------------------|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|   11 |   8 | C43, C49, C60, C66, C78, C95, C163, C164                  | C0603C102K1GAC                  | KEMET                    | 1000PF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 100V; TOL=10%; MODEL=C0G; TG=-55 DEGC TO +125 DEGC; TC=                                                                               |
|   12 |  10 | C44, C50, C56, C65, C71, C73, C79, C85, C94, C100         | CGA4F3C0G2E102J                 | TDK                      | 1000PF            | CAPACITOR; SMT (0805); CERAMIC CHIP; 1000PF; 250V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                                                |
|   13 |   2 | C55, C84                                                  | CGA5L4C0G2J332J; CL31C332JHHNFN | TDK/SAMSUNG ELECTRONICS  | 3300PF            | CAPACITOR; SMT (1206); CERAMIC CHIP; 3300PF; 630V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                                                |
|   14 |   9 | C123, C126, C129, C132, C135, C175, C176, C178, C189      | C0603C103K2RAC                  | KEMET                    | 0.01UF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 200V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                               |
|   15 |   1 | C166                                                      | GRM188R71E474KA12               | MURATA                   | 0.47UF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.47UF; 25V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                      |
|   16 |   4 | C167-C170                                                 | C2012X7R1E475K125AB             | TDK                      | 4.7UF             | CAPACITOR; SMT (0805); CERAMIC CHIP; 4.7UF; 25V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                 |
|   17 |   3 | C172, C174, C186                                          | 08053C105JAT2A                  | AVX                      | 1UF               | CAPACITOR; SMT (0805); CERAMIC CHIP; 1UF; 25V; TOL=5%; MODEL=X7R; TG=-55 DEGC TO +85 DEGC; TC=+/-                                                                                  |
|   18 |   1 | D1                                                        | MBR0520L                        | FAIRCHILD SEMICONDUCT OR | MBR0520L          | DIODE, SCHOTTKY, SOD-123, PIV=20V, Vf=0.385V@If=0.5A, If(ave)=0.5A                                                                                                                 |
|   19 |   1 | D2                                                        | LGL29K-G2J1-24-Z                | OSRAM                    | LGL29K- G2J1-24-Z | DIODE; LED; SMARTLED; GREEN; SMT; PIV=1.7V; IF=0.02A                                                                                                                               |
|   20 |   1 | D3                                                        | LS L29K-G1J2-1-Z                | OSRAM                    | LS L29K- G1J2-1-Z | DIODE; LED; SMART; RED; SMT (0603); PIV=1.8V; IF=0.02A; -40 DEGC TO +100 DEGC                                                                                                      |
|   21 |   2 | D4, D5                                                    | BAS4002A-RPP                    | INFINEON                 | BAS4002A- RPP     | DIODE; SCH; LOW VF SCHOTTKY DIODE ARRAY; SMT (SOT-143); PIV=40V; IF=0.2A                                                                                                           |
|   22 |  10 | DCLK_IN, NONINV+A, NONINV+B, NONINV-A, NONINV-B, SYNC_OUT | 5-1814832-1                     | TYCO                     | 5-1814832-1       | CONNECTOR; FEMALE; THROUGH HOLE; CONN SOCKET SMA STR DIE CAST PCB; STRAIGHT; 5PINS                                                                                                 |
|   23 |   2 | EXT_-15V, EXT_-24V                                        | 5008                            | KEYSTONE                 | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST |

|   24 |   13 | TP8, GND1-GND6, TP27, TP28, TP36, GNDD1-GNDD3   | 5006              | KEYSTONE                  | N/A                | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST   |
|------|------|-------------------------------------------------|-------------------|---------------------------|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|   25 |    1 | GNDD                                            | 5123              | KEYSTONE                  | N/A                | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; GRAY; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST    |
|   26 |    1 | J1                                              | TSW-106-08-S-D-RA | SAMTEC                    | TSW-106-08- S-D-RA | CONNECTOR; THROUGH HOLE; DOUBLE ROW; RIGHT ANGLE; 12PINS; THIS PART IS DEDICATED FOR PMOD PERIPHERAL BOARD                                                                          |
|   27 |    1 | J2                                              | ASP-134604-01     | SAMTEC                    | ASP-134604- 01     | CONNECTOR; MALE; SMT; HIGH SPEED/HIGH DENSITY OPEN PIN FIELD TERMINAL ARRAY; STRAIGHT; 160PINS                                                                                      |
|   28 |    1 | J3                                              | KLDX-0202-B       | KYCON                     | KLDX-0202- B       | CONNECTOR; FEMALE; THROUGH HOLE; DC POWER JACK; RIGHT ANGLE; 3PINS                                                                                                                  |
|   29 |    8 | JU1, JU4, JU5, JU8, JU11, JU12, JU23, JU35      | PEC03DAAN         | SULLINS ELECTRONICS CORP. | PEC03DAAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 6PINS; -65 DEGC TO +125 DEGC                                                                                            |
|   30 |    4 | JU2, JU6, JU9, JU13                             | PEC05DAAN         | SULLINS ELECTRONICS CORP. | PEC05DAAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 10PINS; -65 DEGC TO +125 DEGC                                                                                                   |
|   31 |    1 | JU3                                             | PEC08DAAN         | SULLINS ELECTRONICS CORP. | PEC08DAAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 16PINS; -65 DEGC TO +125 DEGC                                                                                                   |
|   32 |    3 | JU16, JU17, JU31                                | PCC03SAAN         | SULLINS                   | PCC03SAAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                                                                            |
|   33 |    1 | JU18                                            | TSW-110-26-T-T    | SAMTEC                    | TSW-110-26- T-T    | CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; STRAIGHT; 30PINS                                                                                                                         |
|   34 |    1 | JU20                                            | PEC02SAAN         | SULLINS                   | PEC02SAAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                                                                           |
|   35 |    4 | JU22, JU24, JU25, JU36                          | PEC02DAAN         | SULLINS ELECTRONIC CORP.  | PEC02DAAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                                                                                           |
|   36 |    1 | JU30                                            | 282834-2          | TE CONNECTIVITY           | 282834-2           | CONNECTOR; FEMALE; THROUGH HOLE; 2.54MM PITCH; SIDE WIRE ENTRY STACKING TERMINAL BLOCK ; STRAIGHT; 2PINS; -40 DEGC TO + 105 DEGC                                                    |
|   37 |    2 | JU32, JU33                                      | PBC02DAAN         | SULLINS ELECTRONIC CORP.  | PBC02DAAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                                                                                           |

|   38 |   1 | JU34                                                                | PEC04DAAN                                  | SULLINS ELECTRONICS CORP.   | PEC04DAAN   | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 8PINS    |
|------|-----|---------------------------------------------------------------------|--------------------------------------------|-----------------------------|-------------|--------------------------------------------------------------|
|   39 |   4 | L1-L4                                                               | LBC3225T330KR                              | TAIYO YUDEN                 | 33UH        | INDUCTOR; SMT (1210); WIREWOUND CHIP; 33UH; TOL=+/-10%; 0.3A |
|   40 |  15 | R1-R4, R37, R38, R50, R53, R92, R97, R105, R111, R121- R123         | CRCW06030000ZS; MCR03EZPJ000; ERJ-3GEY0R00 | VISHAY DALE/ROHM/PA NASONIC | 0           | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM         |
|   41 |   1 | R5                                                                  | RG1608N-101-W-T1                           | SUSUMU CO LTD.              | 100         | RESISTOR; 0603; 100 OHM; 0.05%; 10PPM; 0.10W; THICK FILM     |
|   42 |   4 | R7-R10                                                              | RNCF0603BKC2R21                            | STACKPOLE ELECTRONICS INC.  | 2.21        | RESISTOR; 0603; 2.21 OHM; 0.1%; 50PPM; 0.063W; THIN FILM     |
|   43 |  15 | R11, R12, R36, R39-R41, R48, R49, R51, R52, R54, R61, R62, R84, R85 | SEE NOTES                                  | VISHAY DALE                 | 33          | RESISTOR; 0603; 33 OHM; 1%; 100PPM; 0.10W; THICK FILM        |
|   44 |  16 | R13-R16, R20-R22, R25- R27, R31-R33, R71-R73                        | RN73C1J2K0B; 5-1614352-1                   | TE CONNECTIVITY             | 2K          | RESISTOR; 0603; 2K OHM; 0.1%; 10PPM; 0.063W; METAL FILM      |
|   45 |  12 | R17, R23, R28, R34, R75, R76, R80, R81, R93, R94, R104, R112        | 288-0603-1.0K-RC                           | XICON                       | 1K          | RESISTOR, 0603, 1K, 0.1%, 10PPM, 1/16W, THIN FILM            |
|   46 |  12 | R18, R24, R29, R35, R90, R91, R95, R96, R106, R107, R109, R110      | PCF0603R-2K0B                              | TT ELECTRONICS              | 2K          | RESISTOR; 0603; 2K OHM; 0.1%; 25PPM; 0.063W; METAL FILM      |
|   47 |   1 | R19                                                                 | CRCW0603330KFK                             | VISHAY DALE                 | 330K        | RESISTOR, 0603, 330K OHM, 1%, 100PPM, 0.10W, THICK FILM      |
|   48 |   1 | R30                                                                 | CRCW06031M50FK                             | VISHAY DALE                 | 1.5M        | RESISTOR, 0603, 1.5M OHM, 1%, 100PPM, 0.10W, THICK FILM      |
|   49 |  13 | R42-R45, R47, R56-R59, R63-R66                                      | CRCW06031003FK; ERJ-3EKF1003               | VISHAY DALE/PANASON IC      | 100K        | RESISTOR; 0603; 100K; 1%; 100PPM; 0.10W; THICK FILM          |
|   50 |   1 | R46                                                                 | CRCW060349R9FK                             | VISHAY DALE                 | 49.9        | RESISTOR; 0603; 49.9 OHM; 1%; 100PPM; 0.10W; THICK FILM      |
|   51 |  16 | R55, R60, R67-R70, R74, R77-R79, R82, R83, R98, R99, R108, R113     | RN73C1J10RBTG; 1614350-2                   | TE CONNECTIVITY             | 10          | RESISTOR; 0603; 10 OHM; 0.1%; 10PPM; 0.063W; THICK FILM      |
|   52 |   8 | R86-R89, R100-R103                                                  | CRCW060375R0FK                             | VISHAY DALE                 | 75          | RESISTOR; 0603; 75 OHM; 1%; 100PPM; 0.10W; THICK FILM        |
|   53 |   2 | R114, R115                                                          | MCR03EZPFX2002; ERJ-3EKF2002               | ROHM; PANASONIC             | 20K         | RESISTOR; 0603; 20K OHM; 1%; 100PPM; 0.10W; THICK FILM       |
|   54 |   1 | R116                                                                | CRCW06031001FK; ERJ-3EKF1001V              | VISHAY DALE; PANASONIC      | 1K          | RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM            |
|   55 |   2 | R117, R119                                                          | CRCW0603820KFK                             | VISHAY DALE                 | 820K        | RESISTOR, 0603, 820K OHM, 1%, 100PPM, 0.10W, THICK FILM      |
|   56 |   2 | R118, R120                                                          | RC0603FR-0771K5L                           | YAGEO PHYCOMP               | 71.5K       | RESISTOR; 0603; 71.5K OHM; 1%; 100PPM; 0.10W; THICK FILM     |

|   57 |   14 | SU1, SU2, SU4-SU6, SU8, SU9, SU11-SU13, SU3_1- SU3_4                                                                    | STC02SYAN     | SULLINS ELECTRONICS CORP.   | STC02SYAN      | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL                                                            |
|------|------|-------------------------------------------------------------------------------------------------------------------------|---------------|-----------------------------|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|   58 |   15 | SU16, SU17, SU32-SU36, SU22_1, SU22_2, SU23_1, SU23_2, SU24_1, SU24_2, SU25_1, SU25_2                                   | 2012J-CR      | JAMECO VALUEPRO             | 2012J-CR       | CONNECTOR; FEMALE; WIREMOUNT; SOCKET SHORTING BLOCK; CLOSED TOP; RED; STRAIGHT; 2PINS                                                                                              |
|   59 |    8 | SU31, SU18_1-SU18_7                                                                                                     | GJWCL-B-R     | JAMECO VALUEPRO             | GJWCL-B-R      | CONNECTOR; FEMALE; WIREMOUNT; SOCKET SHORTING BLOCK; CLOSED TOP; BLUE; STRAIGHT; 2PINS                                                                                             |
|   60 |    1 | T1                                                                                                                      | TGM-H240V8LF  | HALO ELECTRONICS, INC       | TGM- H240V8LF  | TRANSFORMER; SMT; 1:1:1.3:1.3; DC/DC CONVERTER                                                                                                                                     |
|   61 |   12 | U10_6, U12_6, U15_6, U16_6, TP_INV+A, TP_INV+B, TP_INV-A, TP_INV-B, TP_NONINV+A, TP_NONINV+B, TP_NONINV- A, TP_NONINV-B | 5009          | KEYSTONE                    | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST |
|   62 |    1 | U1                                                                                                                      | MAX11958ETP+  | MAXIM                       | MAX11958E TP+  | EVKIT PART - IC; MAX11958; AZ10A; PACKAGE CODE T3255MK-2                                                                                                                           |
|   63 |    1 | U2                                                                                                                      | MAX13256ATB+  | MAXIM                       | MAX13256A TB+  | IC; DRV; 36V H-BRIDGE TRANSFORMER DRIVER FOR ISOLATED SUPPLIES; TDFN10-EP 3X3                                                                                                      |
|   64 |    3 | U3, U18, U22                                                                                                            | MAX14935FAWE+ | MAXIM                       | MAX14935F AWE+ | IC; DISO; FOUR-CHANNEL; 150MBPS; 5KV DIGITAL ISOLATOR; WSOIC16 300MIL                                                                                                              |
|   65 |    1 | U4                                                                                                                      | TPS7A4901DGN  | TEXAS INSTRUMENTS           | TPS7A4901 DGN  | IC; VREG; ULTRALOW-NOISE, POSITIVE LINEAR REGULATOR; MSOP8-EP 300MIL                                                                                                               |
|   66 |    1 | U6                                                                                                                      | TPS7A3001DGN  | TEXAS INSTRUMENTS           | TPS7A3001 DGN  | IC; VREG; ULTRALOW-NOISE, NEGATIVE LINEAR REGULATOR; MSOP8-EP 300MIL                                                                                                               |
|   67 |   10 | U7, U8, U10-U16, U20                                                                                                    | MAX9632AUA+   | MAXIM                       | MAX9632AU A+   | IC; OPAMP; PRECISION, LOW-NOISE, WIDE-BAND AMPLIFIER; UMAX8 ; -40 DEGC TO +125 DEGC                                                                                                |
|   68 |    2 | U9, U19                                                                                                                 | MAX9632AUA+   | MAXIM                       | MAX9632AU A+   | IC; OPAMP; PRECISION, LOW-NOISE, WIDE-BAND AMPLIFIER; UMAX8 ; -40 DEGC TO +125 DEGC                                                                                                |
|   69 |    1 | U17                                                                                                                     | 93LC66BT-I/OT | MICROCHIP                   | 93LC66BT- I/OT | IC; EPROM; 4K MICROWIRE SERIAL EEPROM; SOT23- 6                                                                                                                                    |
|   70 |    1 | U21                                                                                                                     | 74LVC1G126GV  | NXP                         | 74LVC1G12 6GV  | IC; DRV; SINGLE BUS BUFFER/LINE DRIVER; 3-STATE; SOT753                                                                                                                            |
|   71 |    1 | U23                                                                                                                     | MAX15006BATT+ | MAXIM                       | MAX15006B ATT+ | IC; VREG; ULTRA-LOW QUIESCENT-CURRENT LINEAR REGULATOR; TDFN6-EP 3X3                                                                                                               |
|   72 |    3 | U26, U27, U29                                                                                                           | MAX8510EXK18  | MAXIM                       | MAX8510EX K18  | IC; VREG; ULTRA-LOW-NOISE; HIGH PSRR; LOW- DROPOUT; 0.12A LINEAR REGULATOR; SC70-5                                                                                                 |
|   73 |    2 | U28, U30                                                                                                                | MAX8510EXK33+ | MAXIM                       | MAX8510EX K33+ | IC; VREG; ULTRA-LOW-NOISE; HIGH PSRR; LOW- DROPOUT; 0.12A LINEAR REGULATOR; SC70-5                                                                                                 |

| 74    |   1 | U36   | MAX6126AASA30+   | MAXIM   | MAX6126AA SA30   | SERIES VOLTAGE REFERENCE   |
|-------|-----|-------|------------------|---------|------------------|----------------------------|
| 75    |   1 |       | MAX119XX         | MAXIM   | PCB              | PCB: MAX119XX              |
| TOTAL | 437 |       |                  |         |                  |                            |

DO NOT PURCHASE(DNP)

ITEM

QTY

REF DES

MFG PART #

MANUFACTURE

R

VALUE

DESCRIPTION

| 1     |   12 | C21, C22, C24, C25, C57, C58, C72, C87-C89, C161, C162                                                  | N/A       | N/A                      | ?         | CAPACITOR; 0603 PACKAGE; GENERIC                         |
|-------|------|---------------------------------------------------------------------------------------------------------|-----------|--------------------------|-----------|----------------------------------------------------------|
| 2     |   20 | TP1-TP7, DINA, DINB, SCLK, DOUTA, DOUTB, DVDDA, DVDDB, REFP1A, REFP1B, REFP2A, REFP2B, REFVDDA, REFVDDB | PEC01SAAN | SULLINS ELECTRONICS CORP | PEC01SAAN | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 1PIN |
| 3     |    1 | R6                                                                                                      | N/A       | N/A                      | ?         | RESISTOR; 0603 PACKAGE; GENERIC                          |
| TOTAL |   33 |                                                                                                         |           |                          |           |                                                          |

PACKOUT (These are DO NOT INSTALL parts and will be shipped with PCB)

|   ITEM |   QTY | REF DES   | MANUFACTURER   | VALUE   | DESCRIPTI ON                                             | STATUS             |
|--------|-------|-----------|----------------|---------|----------------------------------------------------------|--------------------|
|      1 |     1 | PACKOUT   | N/A            | ?       | BOX;SMALL BROWN 9 3/16"X7"X1 1/4" - PACKOUT              | EVKIT-NOT FOR TEST |
|      2 |     1 | PACKOUT   | N/A            | ?       | ESD BAG;+;BAG; STATIC SHIELD ZIP 8'X10'; W/ ESD LOGO     | EVKIT-NOT FOR TEST |
|      3 |     1 | PACKOUT   | N/A            | ?       | PINK FOAM;FOA M;ANTI- STATIC PE 12inX12inX5 MM - PACKOUT | EVKIT-NOT FOR TEST |

|   4 |   1 | PACKOUT   | N/A                 | ?             | WEB INSTRUCTI ONS FOR MAXIM DATA SHEET                  | EVKIT-NOT FOR TEST   |
|-----|-----|-----------|---------------------|---------------|---------------------------------------------------------|----------------------|
|   5 |   1 | PACKOUT   | N/A                 | ?             | LABEL(EV KIT BOX) - PACKOUT                             | EVKIT-NOT FOR TEST   |
|   6 |   1 | MEM1      | KINGSTON TECHNOLOGY | SDC4/4GB      | ACCESSOR Y; MEMORY CARD; 4GB; MICROSDH C SERIES; CLASS4 | EVKIT-NOT FOR TEST   |
|   7 |   1 |           | B00ET4KHJ2          | CABLE MATTERS | USB 2.0 TO 10/100 ETHERNET ADAPTER                      |                      |

TOTAL 7

<!-- image -->

1.0''

Component Placement Guide-Component Side

<!-- image -->

PCB Layout-Component Side

<!-- image -->

PCB Layout-Layer 2

<!-- image -->

<!-- image -->

PCB Layout-Layer 3

<!-- image -->

<!-- image -->

PCB Layout-Layer 4

<!-- image -->

PCB Layout-Layer 5

<!-- image -->

<!-- image -->

PCB Layout-Solder Side

<!-- image -->

Component Placement Guide-Solder Side

<!-- image -->

Sheet 1 of 6

<!-- image -->

Sheet 2 of 6

<!-- image -->

Sheet 3 of 6

<!-- image -->

Sheet 4 of 6

<!-- image -->

Sheet 5 of 6

<!-- image -->

Sheet 6 of 6

<!-- image -->

EXT\_+5V

+5V

50MA

U23\_IN

JU36

PEC02DAAN

U23

2

1

MAX15006BATT+

4

3

5

OUT

IN

1

6

OUT

IN

2

C187

C186

TP28

C188

GND

10UF

NC

GND EP

0.1UF

1UF

25V

3

7

4