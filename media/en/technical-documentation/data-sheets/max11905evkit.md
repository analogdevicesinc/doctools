<!-- lastmod 2022-08-03 -->
## MAX11905 Evaluation Kit

## General Description

The MAX11905 evaluation kit (EV kit) demonstrates the MAX11905,  20-bit,  1.6Msps,  single-channel,  fully  differential  SAR ADC with internal reference buffers. The EV kit includes a graphical user interface (GUI) that provides communication from the Avnet ZedBoard™ development board for the Xilinx ®  Zynq ® -7000 SoC.

The  ZedBoard  communicates  with  the  PC  through  an Ethernet  cable  using  Windows  XP ® -,  Windows  Vista ® -, Windows ®  7-, or Windows 8/8.1-compatible software.

The EV kit comes with the MAX11905ETP+ installed.

Please contact the factory for the pin-compatible MAX11900ETP+ (16-bit, 1Msps), MAX11901ETP+ (16-bit, 1.6Msps), MAX11902ETP+  (18-bit, 1Msps), MAX11903ETP+ (18-bit, 1.6Msps), and MAX11904ETP+ (20-bit, 1Msps)

ZedBoard is a trademark of Avnet, Inc.

Xilinx and Zynq are registered trademarks and Xilinx is a registered service mark of Xilinx, Inc.

Windows, Windows XP , and Windows Vista are registered trademarks and registered service marks of Microsoft Corporation.

## System Block Diagram

<!-- image -->

<!-- image -->

Evaluates: MAX11900/MAX11901/

MAX11902/MAX11903/

MAX11904/MAX11905

## Features

- Peripheral Module and FMC Connector for Interface
- 75MHz SPI Clock Capability through FMC Connector
- 37.5MHz SPI Clock Capability through Peripheral Module Connector
- Sync In and Sync Out for Coherent Sampling
- On-Board Input Buffers (MAX9632)
- On-Board +3.0V Reference Voltage (MAX6126)
- Windows XP-, Windows Vista-, Windows 7-, and Windows 8/8.1-Compatible Software

Ordering Information appears at end of data sheet.

## MAX11905 Evaluation Kit

## Quick Start

## Required Equipment

- MAX11905 EV kit with SD card
- ZedBoard development board (includes Micro A-to-B USB)
- Windows PC
- Ethernet cable
- +5V DC power supply
- ±15V dual DC power supply
- Signal generator with differential outputs (e.g., Audio Precision 2700 series)
- Solderer, 2-pin 2.54 header

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Download the LabView 2013 run-time engine from www.ni.com/download/labview-run-timeengine-2013/4059/en .
- 2) Visit www.maximintegrated.com/evkitsoftware to download the latest version of the EV kit software, MAX11905EVKit.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 3) Solder the 2-pin header on J18-3V3 of the ZedBoard.
- 4) Connect the Ethernet cable from the PC to the ZedBoard and configure the Internet Protocol Version 4 (TCP/IPv4) properties in the local area connection to IP address 192.168.1.2 and subnet mask to 255.255.255.0 .
- 5) Connect the USB cable from PC to ZedBoard's USB programming connector (J17).
- 6) Verify that jumpers JP7, JP8, and JP11 have shunts installed at the GND position, and JP9 and JP10 at the 3V3 position.
- 7) Move the shunt on J18 of the ZedBoard to the 3V3 position from 1V8.
- 8) Insert the SD card with the boot image (BOOT.bin).
- 9) Verify that all jumpers on the EV kit are in their default positions, as shown in Table 1.
- 10)  Connect the ZedBoard to J2 on the EV kit for FMC connection. If the peripheral module is used, the ZedBoard's JA1 connecter must be connected to J1 on the EV kit.
- 11)  Connect the positive terminal of the +5V supply to the +5V test point and the negative terminal to the GND\_+5 test point.
- 12)  Connect the +15V supply to the +15V test point, -15V supply to the -15V test point, and the ground to the GND15 test point.
- 13)  Make sure the GND\_+5 and GND15 test points are connected at one point at the supplies.
- 14)  Set the signal generator to 5.95V P-P  and 10kHz to the INV+ and INV- SMA connectors on the EV kit.
- 15)  Turn on all power supplies.
- 16)  Enable the function generator.
- 17)  Open the EV kit GUI and click on the run arrow (  ) button at the top of the GUI screen (see Figure 1).
- 18)  Verify that the IP address is 192.168.1.10 , the port is 6001 , and the status bar displays TCP/IP Connection to Zedboard is successful and Connected to ZedBoard (MISO = 1) .
- 19)  Click on the SET button within the SYSTEM tab sheet.
- 20)  Click on the FFT tab (Figure 6) and start capturing data.

## Evaluates: MAX11900/MAX11901/ MAX11902/MAX11903/ MAX11904/MAX11905

│

## MAX11905 Evaluation Kit

Table 1. Jumper Descriptions

| JUMPER   | SHUNT POSITION        | DESCRIPTION                                                                                                     |
|----------|-----------------------|-----------------------------------------------------------------------------------------------------------------|
| JU1      | Installed             | Connects to GND.                                                                                                |
| JU1      | Not installed*        | Apply the signal at the INV+ SMAconnector when using inverting op-amp configuration.                            |
| JU2      | Installed*            | Connects to GND.                                                                                                |
| JU2      | Not installed         | Apply the signal at the NONINV+ SMAconnector when using noninverting op-amp configuration.                      |
| JU3      | Installed             | Connects signal to the NONINV+ SMAconnector to the INV- SMAconnector. Only use with single-ended signal source. |
| JU3      | Not installed*        | Disconnects signal from the NONINV+ SMAconnector to the INV- SMAconnector.                                      |
| JU4      | Not installed         | Apply the signal at the NONINV- SMAconnector when using the noninverting op-amp configuration.                  |
| JU4      | 1-2*                  | Connects to GND.                                                                                                |
| JU4      | 2-3                   | Connects to 50Ω. Only use with single-ended signal source with 50Ω output impedance.                            |
| JU5      | Installed             | Connects to GND.                                                                                                |
| JU5      | Not installed*        | Apply the signal at the INV- SMAconnector when using the inverting op-amp configuration.                        |
| JU6      | 1-2*                  | Connects to REF/2 offset.                                                                                       |
| JU6      | 2-3                   | Connects to GND.                                                                                                |
| JU7      | 1-2                   | Connects to REF. Only use with single-ended signal source.                                                      |
| JU7      | 2-3*                  | Connects to JU6-2.                                                                                              |
| JU8      | Not installed*        | Enables the line driver.                                                                                        |
| JU8      | Installed             | Disables the line driver.                                                                                       |
| JU9      | 2-3, 5-6, 8-9, 11-12* | Connects the SPI signals coming from the peripheral module or FMC connectors to the IC.                         |
| JU9      | Not installed         | User-supplied SPI. Connect the SPI signals at the SCLK, CNVST, DIN, and DOUT test points.                       |
| JU11     | Not installed         | User-supplied OVDD. Apply +3.3V at the OVDD test point.                                                         |
| JU11     | 1-2                   | Do not use.                                                                                                     |
| JU11     | 2-3*                  | OVDD supply connects to the on-board +3.3V LDO.                                                                 |
| JU12     | Installed*            | AVDD supply connects to the on-board +1.8V LDO.                                                                 |
| JU12     | Not installed         | User-supplied AVDD. Apply +1.8V at the jumper JU12-2 pin.                                                       |
| JU13     | Installed*            | REFVDD supply connects to the on-board +3.3V LDO.                                                               |
| JU13     | Not installed         | User-supplied REFVDD. Apply +3.3V at the JU13-2 pin.                                                            |
| JU14     | 1-2*                  | REFIN connects to the on-board +3.0V reference.                                                                 |
| JU14     | 2-3                   | User-supplied REFIN. Apply reference voltage at the EXT_REFIN test point.                                       |
| JU15     | Installed*            | DVDD supply connects to the on-board +1.8V LDO.                                                                 |
| JU15     | Not installed         | User-supplied DVDD. Apply +1.8V at the DVDD test point.                                                         |

*Default position.

Note:

JU10 does not exist.

Evaluates: MAX11900/MAX11901/

MAX11902/MAX11903/

MAX11904/MAX11905

│

## MAX11905 Evaluation Kit

## General Description of Software

The main window of the MAX11905 EV kit software contains five tabs: SYSTEM , SCOPE , DMM , HISTOGRAM , and FFT .  The SYSTEM tab  provides  control  to  communicate with the ZedBoard, SPI, and the IC registers. The other four tabs are used for evaluating the IC's highspeed ADC.

## SYSTEM Tab

When  all  connections  are  made  on  the  system  and are  fully  powered,  the SYSTEM tab  sheet  displays  the correct  IP  address,  port,  and  the  lower  status  bar displays as shown Figure 1. These are all indicators that the system and GUI are ready for communication.

Before proceeding, the connector used on the ZedBoard should be connected to either  the  FMC  or  peripheral  module connector on the EV kit. If the FMC connector is used, all SCLK frequencies are applicable. If the peripheral module connector  is  used,  the  maximum  allowed  frequency  is 37.5MHz. For the Clock Source selection, the ZedBoard

Evaluates: MAX11900/MAX11901/

MAX11902/MAX11903/

MAX11904/MAX11905

internal  clock  is  always  a  valid  option.  If  the  external clock is selected, an external clock must be applied at the DCLK\_IN SMA on the EV kit. The Sync-Out CLK selection is used to synchronize the signal generator with a 10MHz input.  See  the Sync  Input  and  Sync  Output  section for more  information.  Once  the  above  configurations  are completed, adjust to the desired sampling rate, reference voltage,  and  number  of  samples,  and  then  click  on  the SET button.

Also  in  this  tab  are  the  IC  register  controls.  The  Mode register is accessible using the controls on the MAX11905 Mode Register Configuration group box in the center, or the Mode control on the right. All other registers are readonly and are updated by clicking on the appropriate Read button. The first and second REF must be shorted on the board to use the REF controls. 1st  REF BUF and 2nd REF BUF are internally set to the same value. The GUI forces these two controls to  the same value, regardless of the user's choice.

Figure 1. MAX1190X EV Kit Main Window (SYSTEM Tab Sheet)

<!-- image -->

│

## MAX11905 Evaluation Kit

The RESET button  resets  the  firmware,  as  well  as  the device. It sends 0x8000 to the Mode register and causes the device to do a power-on reset. The SET button should be clicked to save the current screen settings.

## SCOPE Tab

The SCOPE tab sheet is used to capture data and display it in the time domain. Sampling rate and number of samples can also be set in this tab if they were not appropriately

Evaluates: MAX11900/MAX11901/ MAX11902/MAX11903/ MAX11904/MAX11905

adjusted  in  other  tabs.  The Display  Unit drop-down  list allows counts and voltages. Once the desired configuration is set, click on the Capture button. The right side of the tab sheet displays details of the waveform, such as average, standard deviation, maximum, minimum, and fundamental frequency.

Figure 2 displays the ADC data when differential sinusoidal are applied at the inputs on the EV kit.

Figure 2. MAX1190X EV Kit Main Window (SCOPE Tab)

<!-- image -->

│

## MAX11905 Evaluation Kit

## DMM Tab

The DMM tab sheet provides the typical information as a digital multimeter. Once the desired configuration is set, click on the Capture button.

Evaluates: MAX11900/MAX11901/ MAX11902/MAX11903/ MAX11904/MAX11905

Figure 3 displays the numerical value when the inputs on the EV kit are shorted to ground using the jumpers (JU1, JU2, JU4, and JU5). See Table 1 for shunt settings.

Figure 3. MAX1190X EV Kit Main Window (DMM Tab)

<!-- image -->

## MAX11905 Evaluation Kit

## HISTOGRAM Tab

The HISTOGRAM tab sheet is used to capture the histogram of the data. Sampling rate and number of samples can also be set in this tab if they were not appropriately adjusted in other tabs. Make sure that the number of samples do not exceed 524,288. Otherwise, data capturing is longer than expected. Once the desired configuration is set, click on the Capture button. The right side of the tab

Evaluates: MAX11900/MAX11901/

MAX11902/MAX11903/

MAX11904/MAX11905

sheet displays details of the histogram such as average, standard  deviation,  maximum,  minimum,  peak-to-peak noise, effective resolution, and noise-free resolution.

To use this histogram feature, apply a DC voltage at the input. Figure 4 displays the results when the inputs of the EV kit are shorted to ground using jumpers JU1, JU2, JU4, and JU5. See Table 1 for placement of shunt positions.

Figure 4. MAX1190X EV Kit Main Window (HISTOGRAM Tab)

<!-- image -->

│

## MAX11905 Evaluation Kit

## FFT Tab

The FFT tab sheet is used to display the FFT of the data. Sampling rate and number of samples can also be set in this  tab  if  they  were  not  appropriately  adjusted  in  other tabs. When coherent sampling is needed, this tab sheet allows  the  user  to  calculate  the  input  frequency  or  the master  clock  coming  into  the  board.  Either  adjust  the input frequency applied to the signal generator or adjust the master applied to the DCLK\_IN SMA connector. See the Sync  Input  and  Sync  Output section  before  using this  feature.  Once  the  desired  configuration  is  set,  click on the Capture button. The right side of the tab displays the performance based on the FFT, such as fundamental frequency, THD, SNR, SINAD, SFDR, ENOB, and noise floor.

Figure 5 shows the setup Maxim uses to capture data for coherent sampling.

## Evaluates: MAX11900/MAX11901/ MAX11902/MAX11903/ MAX11904/MAX11905

To  achieve  the  results  similar  to  Figure  6,  the  daughter board was configured to inverting configuration. Use the jumper  settings  from  Table  2  for  proper  configurations. The input signal from the signal generator must be exactly 10000.000000  Hz. The  low-jitter  clock  is  synchronized with the signal generator. The master clock was initially set to 1000000000 Hz but to achieve coherent sampling, the user must click on the Calculate button and use the Adjusted(Hz) frequency. 99523158.694 Hz was entered into our low-jitter clock. The master clock is fed back to the ZedBoard and multiplied by 3/2, then generates a system clock that drives the Xilinx FPGA. Timing for all SPI timing and sampling rate are based off the system clock.

If  the  results  do  not  look  similar  to  Figure  6  and  more similar to Figure 7, then check all connections in Figure 5 to make sure the setup is synchronizing properly.

Figure 5. MAX11905 EV Kit Coherent Sampling Setup

<!-- image -->

│

Evaluates: MAX11900/MAX11901/ MAX11902/MAX11903/ MAX11904/MAX11905

Figure 6. MAX1190X EV Kit Main Window, Results Using the Inverting Setup (FFT Tab)

<!-- image -->

Figure 7. MAX1190X EV Kit Main Window, Results Using the Inverting Setup with Noncoherent Sampling (FFT Tab)

<!-- image -->

## MAX11905 Evaluation Kit

In Figure 8, the daughter board was configured to noninverting configuration. Use the jumper settings from Table 2 for proper configurations.

Evaluates: MAX11900/MAX11901/

MAX11902/MAX11903/

MAX11904/MAX11905

In Figure 9, the daughter board was configured to inverting,  single-ended  to  differential  configuration.  Use  the jumper settings from Table 2 for proper configurations.

Figure 8. MAX1190X EV Kit Main Window, Results Using the Noninverting Setup (FFT Tab)

<!-- image -->

│

## MAX11905 Evaluation Kit

Evaluates: MAX11900/MAX11901/

MAX11902/MAX11903/

MAX11904/MAX11905

Figure 9. MAX1190X EV Kit Main Window, Results Using the Inverting Single to Differential Setup (FFT Tab)

<!-- image -->

## General Description of Hardware

The MAX11905 EV kit provides a proven layout to demonstrate the performance of the MAX11905 20-bit SAR ADC. Included in the EV kit are digital isolators, ultra-low-noise LDOs (MAX8510) to all supply pins of the IC, on-board reference (MAX6126), precision amplifiers (MAX9632) for the  analog  inputs,  and  sync-in  and  sync-out  signals  for coherent sampling.

## User-Supplied SPI

To  evaluate  the  EV  kit  with  a  user-supplied  SPI  bus, remove shunts from jumper JU9. Apply the user-supplied SPI signals  to  the  SCLK,  CNVST,  DIN,  and  DOUT  test points. Make sure the return ground is the same as the IC's ground.

## User-Supplied REFVDD

The REFVDD supply is powered through a +3.3V LDO by default. For user-supplied REFVDD, remove the shunt on jumper JU13 and apply +2.7V to +3.6V at jumper JU13-1.

## User-Supplied AVDD

The AVDD supply is powered through a +1.8V LDO by default.  For  user-supplied  AVDD,  remove  the  shunt  on jumper JU12 and apply +1.7V to +1.9V at jumper JU12-2.

## User-Supplied DVDD

The DVDD supply is powered through a +1.8V LDO by default.  For  user-supplied  DVDD,  remove  the  shunt  on jumper JU15 and apply +1.7V to +1.9V at the DVDD test point.

## User-Supplied OVDD

The OVDD supply is powered through a +3.3V LDO by default.  For  user-supplied  OVDD,  remove  the  shunt  on JU11 and apply +1.5V to +3.6V at jumper JU13-1. Since there is a supply limitation on the isolators (U3, U18), the OVDD supply should not be powered below +2.7V when the FMC connector or peripheral module of the EV kit are being used.

│

## MAX11905 Evaluation Kit

## User-Supplied REFIN

The IC uses an on-board +3V reference (MAX6126) by default.  For  user-supplied  REFIN,  move  the  shunt  on jumper JU14 to the 2-3 position. Make sure that REFIN is 300mV below REFVDD before applying the reference.

## Analog Inputs

Both analog inputs (AIN+ and AIN-) range from 0 to V REF . The differential input range is from -V REF  to +V REF  and the  full-scale  range  is  2  times  the  V REF .  The  desired input signals are applied at the INV+ and INV- SMAs for

## Evaluates: MAX11900/MAX11901/ MAX11902/MAX11903/ MAX11904/MAX11905

inverting  configuration  (see  Figure  10),  and  NONINV+ and NONINV- SMAs for noninverting configuration (see Figure 11).

The EV kit is also configurable for single-ended input to differential  (see  Figure  12  and  Figure  13).  The  desired signal  should  be  applied  at  the  INV+  SMA  for  inverting and at the NONINV+ SMA for noninverting. If the source is 50Ω output impedance, then jumper JU4 must be in the 2-3 position.

See Table 2 for all possible analog input configurations.

Table 2. Analog Input Configurations (JU1-JU7)

| JUMPER   | INVERTING AND DIFFERENTIAL   | NONINVERTING AND DIFFERENTIAL   | INVERTING, SINGLE-ENDED TO DIFFERENTIAL   | NONINVERTING, SINGLE- ENDED TO DIFFERENTIAL   |
|----------|------------------------------|---------------------------------|-------------------------------------------|-----------------------------------------------|
| JU1      | Not installed                | Installed                       | Not installed                             | Installed                                     |
| JU2      | Installed                    | Not installed                   | Installed                                 | Not installed                                 |
| JU3      | Not Installed                | Not installed                   | Installed                                 | Installed                                     |
| JU4      | 1-2                          | Not installed                   | 1-2                                       | 1-2                                           |
| JU5      | Not Installed                | Installed                       | Not installed                             | Not installed                                 |
| JU6      | 1-2                          | 1-2                             | 1-2                                       | 1-2                                           |
| JU7      | 2-3                          | 2-3                             | 1-2                                       | 1-2                                           |

Figure 10. Inverting and Differential Configuration

<!-- image -->

│

Figure 11. Noninverting and Differential Configuration

<!-- image -->

Figure 12. Inverting and Single-Ended to Differential Configuration

<!-- image -->

Evaluates: MAX11900/MAX11901/

MAX11902/MAX11903/

MAX11904/MAX11905

Figure 13. Noninverting and Single-Ended to Differential Configuration

<!-- image -->

## Sync Input and Sync Output

The  DCLK\_IN  SMA  accepts  an  approximate  100MHz waveform  signal  to  generate  the  system  clock  of  the ZedBoard.  For  maximum  performance,  use  a  low-jitter clock that syncs to the user's analog function generator. The SYNC\_OUT SMA outputs a 10MHz square waveform that syncs to the user's analog function generator. Both options  are  used  for  coherent  sampling  of  the  IC.  Only one  option  should  be  used  at  a  time.  The  relationship between  f IN ,  f S ,  N CYCLES ,  and  M SAMPLES  is  given  as follows:

<!-- formula-not-decoded -->

where:

f IN  = Input frequency

f S  = Samping frequency

NCYCLES = Prime number of cycles in the sampled set

MSAMPLES = Total number of samples

## Interface Connectors

The  EV  kit  and  ZedBoard  communicate  in  two  ways, using the peripheral module connector (J1) or the FMC connector  (J2)  on  the  EV  kit.  The  maximum  SPI  SCLK frequency is 37.5MHz for the peripheral module connector and 75MHz for the FMC connector.

## Part Selection

Table 3 is the list of compatible parts that can be replaced at the U1 IC designator.

## Table 3. Part Selection

| PART          |   RESOLUTION (BITS) |   SAMPLE RATE (Msps) |
|---------------|---------------------|----------------------|
| MAX11900ETP+  |                  16 |                  1.0 |
| MAX11901ETP+  |                  16 |                  1.6 |
| MAX11902ETP+  |                  18 |                  1.0 |
| MAX11903ETP+  |                  18 |                  1.6 |
| MAX11904ETP+  |                  20 |                  1.0 |
| MAX11905ETP+* |                  20 |                  1.6 |

* Default installed part

│

Evaluates: MAX11900/MAX11901/

MAX11902/MAX11903/

MAX11904/MAX11905

Figure 14a. MAX11905 EV Kit Schematic (Sheet 1 of 4)

<!-- image -->

│

Figure 14b. MAX11905 EV Kit Schematic (Sheet 2 of 4)

<!-- image -->

│

## Evaluates: MAX11900/MAX11901/ MAX11902/MAX11903/ MAX11904/MAX11905

Figure 14c. MAX11905 EV Kit Schematic (Sheet 3 of 4)

<!-- image -->

│

Figure 14d. MAX11905 EV Kit Schematic (Sheet 4 of 4)

<!-- image -->

Evaluates: MAX11900/MAX11901/

MAX11902/MAX11903/

MAX11904/MAX11905

Figure 15. MAX11905 EV Kit Component Placement Guide-Component Side

<!-- image -->

## Evaluates: MAX11900/MAX11901/ MAX11902/MAX11903/ MAX11904/MAX11905

Figure 16. MAX11905 EV Kit PCB Layout-Component Side

<!-- image -->

│

Evaluates: MAX11900/MAX11901/

MAX11902/MAX11903/

MAX11904/MAX11905

Figure 17. MAX11905 EV Kit PCB Layout-Layer 2

<!-- image -->

│

## MAX11905 Evaluation Kit

Evaluates: MAX11900/MAX11901/

MAX11902/MAX11903/

MAX11904/MAX11905

Figure 18. MAX11905 EV Kit PCB Layout-Layer 3

<!-- image -->

│

## MAX11905 Evaluation Kit

Evaluates: MAX11900/MAX11901/

MAX11902/MAX11903/

MAX11904/MAX11905

Figure 19. MAX11905 EV Kit PCB Layout-Layer 4

<!-- image -->

│

Evaluates: MAX11900/MAX11901/

MAX11902/MAX11903/

MAX11904/MAX11905

Figure 20. MAX11905 EV Kit PCB Layout-Layer 5

<!-- image -->

│

Evaluates: MAX11900/MAX11901/

MAX11904/MAX11905

Figure 21. MAX11905 EV Kit PCB Layout-Solder Side

<!-- image -->

│

## Evaluates: MAX11900/MAX11901/ MAX11902/MAX11903/ MAX11904/MAX11905

Figure 22. MAX11905 EV Kit Component Placement Guide-Solder Side

<!-- image -->

## MAX11905 Evaluation Kit

## MAX11905 EV Kit Bill of Materials

|   ITEM |   QTY | REF DES                                                                                                                                    | MFG PART #        | MANUFACTURER   | VALUE             | DESCRIPTION                                                                                                                                                    |
|--------|-------|--------------------------------------------------------------------------------------------------------------------------------------------|-------------------|----------------|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1 |     6 | +5V,+15V,-15V, +5.5V,-5.5V,+3.3V_Z                                                                                                         | 5005 ?            | 5005 ?         | N/A               | TESTPOINT WITH 1.80MM HOLE DIA, RED, COMPACT                                                                                                                   |
|      2 |     5 | C1,C4,C27,C44,C60                                                                                                                          | N/A               | ?              | 1000PF            | CAPACITOR; SMT (0805); CERAMIC CHIP; 1000PF; 250V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                            |
|      3 |    34 | C2,C3,C6,C8,C11, C13,C14,C18,C19,C23,C25, C29,C33,C34,C37,C39,C41, C43,C47,C49,C54,C57,C59, C63,C65,C69,C72,C89,C91, C94,C97,C99,C100,C103 | N/A               | ?              | 0.1UF             | CAPACITOR; SMT; 0603; CERAMIC; 0.1uF; 100V; 10%; X7R; -55degC to + 125degC; +/- 15% from -55degC to +125degC                                                   |
|      4 |    25 | C5,C7,C20,C22,C24, C28,C30,C32,C42,C45,C46, C48,C55,C56,C61,C62,C64, C68,C70,C71,C88,C90,C96, C98,C101                                     | N/A               | ?              | 10UF              | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 35V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                       |
|      5 |     4 | C9,C10,C26,C102                                                                                                                            | N/A               | ?              | 0.01UF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 200V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                           |
|      6 |     1 | C17                                                                                                                                        | N/A               | ?              | 1000PF            | CAPACITOR; SMT (0805); CERAMIC CHIP; 1000PF; 250V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                            |
|      7 |     5 | C35,C36,C38,C93,C95                                                                                                                        | N/A               | ?              | 1UF               | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 50V; TOL=10%; MODEL=_MK SERIES; TG=-55 DEGC TO +85 DEGC                                                              |
|      8 |     4 | C50-C52,C67                                                                                                                                | N/A               | ?              | 2.2UF             | CAPACITOR; SMT (1210); CERAMIC CHIP; 2.2UF; 100V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC to +125 DEGC; TC=X7R                                                  |
|      9 |     1 | C58                                                                                                                                        | N/A               | ?              | 3300PF            | CAPACITOR; SMT (1206); CERAMIC CHIP; 3300PF; 630V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                            |
|     10 |     9 | CNVST, DIN, DOUT, DVDD, EXT_REFIN, OVDD, REF1, REF2, SCLK                                                                                  | PCC01SAAN         | SULLINS        | PCC01SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; - 65 DEGC TO +125 DEGC                                                                      |
|     11 |     6 | INV+,INV-,DCLK_IN, NONINV+,NONINV- ,SYNC_OUT                                                                                               | 5-1814832-1       | TYCO           | 5-1814832-1       | CONNECTOR; FEMALE; THROUGH HOLE; CONN SOCKET SMA STR DIE CAST PCB; STRAIGHT; 5PINS                                                                             |
|     12 |     9 | GND1-GND6, GNDA1-GNDA3                                                                                                                     | 5001              | ?              | N/A               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN     |
|     13 |     3 | GND15,GND5.5,GND_+5                                                                                                                        | 5006 ?            | 5006 ?         | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN |
|     14 |     1 | J1                                                                                                                                         | TSW-106-08-S-D-RA | SAMTEC         | TSW-106-08-S-D-RA | CONNECTOR; THROUGH HOLE; DOUBLE ROW; RIGHT ANGLE; 12PINS; THIS PART IS DEDICATED FOR PMOD PERIPHERAL BOARD                                                     |
|     15 |     1 | J2                                                                                                                                         | ASP-134604-01     | SAMTEC         | ASP-134604-01     | CONNECTOR; MALE; SMT; HIGH SPEED/HIGH DENSITY OPEN PIN FIELD TERMINAL ARRAY; STRAIGHT; 160PINS                                                                 |
|     16 |     8 | JU1-JU3, JU5, JU8, JU12, JU13, JU15                                                                                                        | PCC02SAAN         | SULLINS        | PCC02SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; - 65 DEGC TO +125 DEGC                                                                      |
|     17 |     5 | JU4,JU6,JU7,JU11,JU14                                                                                                                      | PCC03SAAN         | SULLINS        | PCC03SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; - 65 DEGC TO +125 DEGC                                                                      |

## Evaluates: MAX11900/MAX11901/ MAX11902/MAX11903/ MAX11904/MAX11905

## MAX11905 EV Kit Bill of Materials (continued)

| ITEM     | QTY   | REF DES                            | MFG PART #     | MANUFACTURER      | VALUE            | DESCRIPTION                                                                                                                       |
|----------|-------|------------------------------------|----------------|-------------------|------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| 18       | 1     | JU9                                | TSW-104-26-T-T | SAMTEC            | TSW-104-26-T-T   | CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; TRIPLE ROW; 2.54MM PITCH; STRAIGHT; 12PINS                                             |
| 19       | 1     | R1                                 | N/A            | ?                 | 100              | RESISTOR; 0603; 100 OHM; 0.05%; 10PPM; 0.10W; THICK FILM                                                                          |
| 20       | 4     | R2,R8,R30,R31                      | N/A            | ?                 | 1K               | RESISTOR, 0603, 1K, 0.1%, 10PPM, 1/16W, THIN FILM                                                                                 |
| 21       | 8     | R3,R7,R9,R12, R13,R25,R28,R29      | N/A            | ?                 | 2K               | RESISTOR; 0603; 2K OHM; 0.1%; 10PPM; 0.063W; METAL FILM                                                                           |
| 22       | 9     | R4,R5,R14,R15,R17, R18,R39,R42,R44 | N/A            | ?                 | 33               | RESISTOR; 0603; 33 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                             |
| 23       | 3     | R6,R16,R19                         | N/A            | ?                 | 0                | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                              |
| 24       | 2     | R10,R11                            | N/A            | ?                 | 499              | RESISTOR; 0603; 499 OHM; 0.1%; 10PPM; 0.063W; METAL FILM                                                                          |
| 25       | 9     | R21-R24,R35-R38,R43                | N/A            | ?                 | 100K             | RESISTOR; 0603; 100K; 1%; 100PPM; 0.10W; THICK FILM                                                                               |
| 26       | 5     | R26,R27,R32-R34                    | N/A            | ?                 | 10               | RESISTOR; 0603; 10 OHM; 0.1%; 10PPM; 0.063W; THICK FILM                                                                           |
| 27       | 2     | R40,R41                            | N/A            | ?                 | 49.9             | RESISTOR; 0603; 49.9 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                           |
| 28       | 1     | U1                                 | MAX11905ETP+   | MAXIM             | MAX11905ETP+     | IC; ADC; 20-BIT, 1.6MSPS, LOW-POWER, FULLY DIFFERENTIAL SAR ADC; TQFN20-EP 4X4                                                    |
| 29       | 1     | U2                                 | MAX6126AASA30+ | MAXIM             | MAX6126AASA30    | SERIES VOLTAGE REFERENCE                                                                                                          |
| 30       | 2     | U3,U18                             | MAX14935FAWE+  | MAXIM             | MAX14935FAWE+    | IC; DISO; FOUR-CHANNEL; 150MBPS; 5KV DIGITAL ISOLATOR; WSOIC16 300MIL                                                             |
| 31       | 2     | U4,U5                              | MAX8510EXK18   | MAXIM             | MAX8510EXK18     | IC; VREG; ULTRA-LOW-NOISE; HIGH PSRR; LOW-DROPOUT; 0.12A LINEAR REGULATOR ; SC70-5                                                |
| 32       | 2     | U6,U20                             | MAX8510EXK33+  | MAXIM             | MAX8510EXK33+    | IC; VREG; ULTRA-LOW-NOISE; HIGH PSRR; LOW-DROPOUT; 0.12A LINEAR REGULATOR ; SC70-5                                                |
| 33       | 5     | U7,U8,U10-U12                      | MAX9632ASA     | MAXIM             | MAX9632ASA       | IC; OPAMP; PRECISION, LOW-NOISE, WIDE-BAND AMPLIFIER; NSOIC8 150MIL; -40 DEGC TO +125 DEGC-OBSOLETE; REPLACE ROHS COMPLIANT VALUE |
| 34       | 1     | U17                                | M25P16-VMW6TG  | MICRON TECHNOLOGY | INCM25P16-VMW6TG | IC; MMRY; 16MBIT; SERIAL FLASH MEMORY; 75MHZ SPI BUS INTERFACE; MSOIC8 200MIL                                                     |
| 35       | 1     | U21                                | 74LVC1G126GV   | NXP               | 74LVC1G126GV     | IC; DRV; SINGLE BUS BUFFER/LINE DRIVER; 3-STATE; SOT753                                                                           |
| 35 TOTAL | 1 205 |                                    | N/A            | MAXIM             | PCB              | PCB: ECPB1190X                                                                                                                    |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX11905EVKIT# | EV Kit |

#Denotes RoHS compliant.

Contact Avnet to purchase a ZedBoard to communicate with the MAX11905 EV kit.

## MAX11905 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                  | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------------------|-----------------|
|                 0 | 5/14            | Initial release                                                              | -               |
|                 1 | 3/15            | Added the evaluation of MAX11900, MAX11901, MAX11902, MAX11903, and MAX11904 | 1-29            |
|                 2 | 8/17            | Updated Quick Start section, schematic, and added Bill of Materials          | 2, 17, 27       |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX11900/MAX11901/

MAX11902/MAX11903/

MAX11904/MAX11905