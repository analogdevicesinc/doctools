<!-- lastmod 2022-08-03 -->
## MAX11905 Differential Evaluation Kit

## General Description

The MAX11905 differential evaluation kit (EV kit) demonstrates  the  MAX11905,  20-bit,  1.6Msps,  single-channel, fully differential SAR ADC with internal reference buffers. The EV kit uses the MAX44205, a low-noise fully differential operational amplifier. The EV kit includes a graphical user  interface  (GUI)  that  provides  communication  from Avnet's  ZedBoard™  development  board  for  the  Xilinx Zynq ® -7000  SoC. The  ZedBoard,  not  included  with  the EV kit, must be purchased through Avnet, Inc.

The  ZedBoard  communicates  with  the  PC  through  an Ethernet  cable  using  Windows  XP ® -,  Windows  Vista ® -, Windows ®  7-, or Windows 8/8.1-compatible software.

The EV kit comes with the MAX11905ETP+ installed.

## System Block Diagram

<!-- image -->

ZedBoard is a trademark of Avnet, Inc. Zynq is a registered trademark of Xilinx, Inc.

Windows, Windows XP, and Windows Vista are registered trademarks and registered service marks of Microsoft Corporation.

## Features

- Peripheral Module and FMC Connector for Interface
- 75MHz SPI Clock Capability through FMC Connector
- 37.5MHz SPI Clock Capability through Peripheral Module Connector
- Sync In and Sync Out for Coherent Sampling
- On-Board Input Buffer (MAX44205)
- On-Board +3.0V Reference Voltage (MAX6126)
- Windows XP-, Windows Vista-, Windows 7-, and Windows 8/8.1-Compatible Software

Ordering Information appears at end of data sheet.

Evaluates: MAX11905

<!-- image -->

## MAX11905 Differential Evaluation Kit

## Quick Start

## Required Equipment

- MAX11905 differential EV kit with SD card
- ZedBoard development board (includes Micro-USB A-to-B cables)
- Windows PC
- Ethernet cable
- +5V DC power supply
- ±5V dual DC power supply
- Signal generator with differential outputs (e.g., Audio Precision 2700 series)
- Soldering iron and 2-pin, 2.54 header

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Download the LabVIEW ®  Run-Time Engine 2013 from www.ni.com/download/labview-run-time-engine-2013/4059/en/.
- 2) Visit www.maximintegrated.com/evkitsoftware to download the latest version of the EV kit software, 11905EVKit.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 3) Solder the 2-pin header on J18-3V3 of the ZedBoard.
- 4) Connect the Ethernet cable from the PC to the ZedBoard and configure the Internet Protocol Version 4 (TCP/IPv4) properties in the local area connection to IP address 192.168.1.2 and the subnet mask to 255.255.255.0 .

LabVIEW is a registered trademark of National Instruments Corporation.

Evaluates: MAX11905

- 5) Connect the USB cable from the PC to the ZedBoard's USB programming connector (J17).
- 6) Verify that the ZedBoard's jumpers JP7, JP8, and JP11 have shunts installed at the GND position, and JP9 and JP10 at the 3V3 position.
- 7) Move the shunt of J18 of the ZedBoard from 1V8 to the 3V3 position.
- 8) Insert the SD card with the boot image (BOOT.bin).
- 9) Verify that all jumpers on the EV kit are in their default positions, as shown in Table 1.
- 10)  Connect the ZedBoard to J2 on the EV kit for FMC connection. If the peripheral module is used, the ZedBoard's JA1 connector must be connected to J1 on the EV kit.
- 11)  Connect the positive terminal of the +5V supply to the +5V test point and the negative terminal to the GND test point.
- 12)  Connect the +5V of the dual supply to the VS+ test point, the -5V supply to the VS- test point, and the ground to the GND test point.
- 13) The configuration of the op amp is gain of 0.5. Set the signal generator to 11.95V P-P  and 10kHz to the INP and INM SMA connectors or test points on the EV kit.
- 14)  Turn on the power to the ZedBoard.
- 15)  Turn on all power supplies.
- 16)  Enable the function generator.
- 17)  Open the EV kit GUI, MAX11905EVKit.exe.
- 18)  Verify that the IP Address is 192.168.1.10 , the port is 6001 , and that the status bar displays TCP/IP Connection to Zedboard is successful and Connected to ZedBoard (MISO = 1) .
- 19)  Click on the Set button within the Configuration tab.
- 20)  Click on the FFT tab (Figure 6) and start capturing data.

│

## MAX11905 Differential Evaluation Kit

Table 1. Jumper Descriptions (JU1-JU14)

| JUMPER   | SHUNT POSITION        | DESCRIPTION                                                                                   |
|----------|-----------------------|-----------------------------------------------------------------------------------------------|
| JU1      | Installed             | Connects to 49.9Ω termination.                                                                |
| JU1      | Not installed*        | Apply negative end of the differential signal at the INM test point or SMAconnector.          |
| JU2      | Installed             | Connects to 49.9Ω termination.                                                                |
| JU2      | Not installed*        | Apply positive end of the differential signal at the INP test point or SMAconnector.          |
| JU3      | 1-2*                  | Connects to VOCM to REF/2.                                                                    |
| JU3      | 2-3                   | Connects to VOCM to GND.                                                                      |
| JU4      | Installed*            | DVDD supply connects to the on-board +1.8V LDO                                                |
| JU4      | Not installed         | User-supplied DVDD. Apply +1.8V at the DVDD test point.                                       |
| JU5      | 1-2*                  | REFIN connects to the on-board +3.0V reference.                                               |
| JU5      | 2-3                   | User-supplied REFIN. Apply reference voltage at the EXT_REFIN test point.                     |
| JU6      | 1-2                   | Do not use                                                                                    |
| JU6      | 2-3*                  | OVDD supply connects to the on-board +3.3V LDO                                                |
| JU6      | Not installed         | User-supplied OVDD. Apply +3.3V at the OVDD test point.                                       |
| JU7      | Installed*            | AVDD supply connects to the on-board +1.8V LDO                                                |
| JU7      | Not installed         | User-supplied AVDD. Apply +1.8V at the jumper JU7-2 pin.                                      |
| JU8      | Installed*            | REFVDD supply connects to the on-board +3.3V LDO.                                             |
| JU8      | Not installed         | User-supplied REFVDD. Apply +3.3V at the JU9-2 pin.                                           |
| JU9      | 2-3, 5-6, 8-9, 11-12* | Connects the SPI signals coming from the peripheral module or FMC connectors to the MAX11905. |
| JU9      | Not installed         | User-supplied SPI. Connect the SPI signals at the SCLK, CNVST, DIN, and DOUT test points.     |
| JU10     | Installed             | Disables the line driver.                                                                     |
| JU10     | Not installed*        | Enables the line driver.                                                                      |
| JU11     | Installed*            | Input common mode voltage set to REF/2.                                                       |
|          | Not installed         | Input common mode voltage set GND.                                                            |
| JU12     | 1-2*                  | VCLPH set to MAX11905's REFVDD supply.                                                        |
| JU12     | 2-3                   | VCLPH set to MAX44205's VS+ supply.                                                           |
| JU13     | 1-2*                  | VCLPL set to GND.                                                                             |
| JU13     | 2-3                   | VCLPL set to MAX44205's VS- supply.                                                           |
| JU14     | 1-2*                  | SHDN pulled to VS+ and set to normal operation.                                               |
| JU14     | 2-3                   | SHDN pulled to GND and set to shutdown mode.                                                  |

Evaluates: MAX11905

│

## MAX11905 Differential Evaluation Kit

## General Description of Software

The main window of the MAX11905 EV kit software contains five tabs: Configuration , Scope , DMM , Histogram , and FFT .  The Configuration tab sheet provides control to communicate with the ZedBoard, SPI, and the IC registers. The other four tabs are used for evaluating the IC's high-speed ADC.

## Configuration Tab

When all connections are made on the system and are fully powered, the Configuration tab sheet displays the correct IP address, port, and the lower status bar displays as shown Figure 1. These are all indicators that the system and GUI are ready for communication.

Before  proceeding,  connect  the  connector  used  on  the ZedBoard to either the FMC or PMOD connector on the EV kit. If the FMC connector is used, all SCLK frequencies are applicable. If the PMOD connector is used, the maximum allowed frequency is 37.5MHz. For the Clock Source selection, the ZedBoard internal clock is always a valid option. If the external clock is selected, an external

Evaluates: MAX11905

clock must be applied at the DCLK\_IN SMA on the EV kit. The Sync-Out CLK (10MHz) checkbox  is  used  to  synchronize the signal generator with a 10MHz input. See the Sync Input and Sync Output section for more information. Once the above configurations are completed, adjust to the desired sampling rate, reference voltage, and number of samples, and then click on the Set button.

Also  in  this  tab  sheet  are  the  IC  register  controls.  The Mode  register  is  accessible  using  the  controls  on  the MAX11905  Mode  Register  Configuration group  box in the center, or the Mode control on the right. All other registers  are  read-only  and  are  updated  by  clicking  on the appropriate Read button. The first and second REF must be shorted on the board to use the REF controls. first REF BUF and second REF BUF are internally set to the same value. The GUI forces these two controls to the same value, regardless of the user's choice.

The Reset button  resets  the  firmware,  as  well  as  the device. It sends 0x8000 to the Mode register and causes the device to do a power-on reset. The Set button needs to be clicked to save the current screen settings.

Figure 1. MAX11905 EV Kit Main Window (Configuration Tab)

<!-- image -->

│

## MAX11905 Differential Evaluation Kit

## Scope Tab

The Scope tab sheet is used to capture data and display it in the time domain. Sampling rate and number of samples can also be set in this tab if they were not adjusted appropriately in other tabs. The Display Unit drop-down list allows counts and voltages. Once the desired configuration is set, click on the Capture button. The right side of the tab sheet displays details of the waveform, such as

Evaluates: MAX11905

average,  standard  deviation,  maximum,  minimum,  and fundamental frequency.

Figure 2 displays the ADC data when differential sinusoidal are applied at the inputs on the EV kit.

## DMM Tab

The DMM tab sheet provides the typical information as a digital multimeter. Once the desired configuration is set, click on the Capture button.

Figure 2. MAX11905 EV Kit Main Window (Scope Tab)

<!-- image -->

## MAX11905 Differential Evaluation Kit

Figure 3 displays the numerical value when the inputs on the EV kit are shorted to ground using the jumpers (JU1 and JU2). See Table 1 for shunt settings.

## Histogram Tab

The Histogram tab  sheet  is  used  to  capture  the  histogram of the data. Sampling rate and number of samples can also be set in this tab if they were not adjusted appropriately in other tabs. Make sure that the number of samples do not exceed 524,288; otherwise, data capturing is

longer than expected. Once the desired configuration is set, click on the Capture button. The right side of the tab sheet displays details of the histogram such as average, standard  deviation,  maximum,  minimum,  peak-to-peak noise, effective resolution, and noise-free resolution.

To use this histogram feature, apply a DC voltage at the input. Figure 4 displays the results when the input of the EV kit are shorted to ground using jumpers JU1 and JU2. See Table 1 for placement of shunt positions.

Figure 3. MAX11905 EV Kit Main Window (DMM Tab)

<!-- image -->

## MAX11905 Differential Evaluation Kit

## FFT Tab

The FFT tab sheet (Figure 6) is used to display the FFT of the data. Sampling rate and number of samples can also be set in this tab if they were not adjusted appropriately in other tabs. When coherent sampling is needed, this tab sheet allows the user to calculate the input frequency or the master clock coming into the board. Either adjust the input frequency applied to the signal generator or adjust the master clock applied to the DCLK\_IN SMA connector. See the Sync Input and Sync Output section before using this  feature.  Once  the  desired  configuration  is  set,  click on  the Capture button.  The  right  side  of  the  tab  sheet displays the performance based on the FFT, such as fundamental frequency, THD, SNR, SINAD, SFDR, ENOB, and noise floor.

Evaluates: MAX11905

Figure  5  is  the  setup  Maxim  uses  to  capture  data  for coherent sampling.

The input signal from the signal generator must be exactly 10000.000000  Hz .  The  low-jitter  clock  is  synchronized with  the  signal  generator.  The  master  clock  is  initially set  to 1000000000  Hz .  To  achieve  coherent  sampling, the user must click on the Calculate button and use the Adjusted(Hz) frequency. 99523158.694 Hz was entered into our low-jitter clock. The master clock is fed back to the ZedBoard and multiplied by 3/2, then generates a system clock that drives the Xilinx FPGA. All SPI timing and sampling rate are based off the system clock.

Note: If  the  results  do  not  look  similar  to  Figure  6  and more  similar  to  Figure  7,  then  check  all  connections  in Figure 5 to make sure the setup is synchronizing properly.

Figure 4. MAX11905 EV Kit Main Window (Histogram Tab)

<!-- image -->

Figure 5. MAX11905 Differential EV Kit Coherent Sampling Setup

<!-- image -->

Figure 6. MAX11905 EV Kit Main Window, Coherent Sampling Results (FFT Tab)

<!-- image -->

Figure 7. MAX11905 EV Kit Main Window, Noncoherent Sampling Results (FFT Tab)

<!-- image -->

## General Description of Hardware

The EV kit provides a proven layout to demonstrate the performance of the MAX11905 20-bit SAR ADC. Included in  the  EV  kit  are  digital  isolators,  ultra-low-noise  LDOs (MAX8510) to all supply pins of the IC,  on-board  reference (MAX6126), fully differential  amplifier  (MAX44205) for the analog inputs, and sync-in and sync-out signals for coherent sampling.

## Configuring the MAX44205

Jumpers are included to configure the MAX44205 appropriately. Jumper JU14 shut downs the MAX44205 by placing a shunt in the 2-3 position. Jumper JU11 is used to set the  input  common-mode  voltage  to  REF/2.  Jumper  JU3 is used to set the output common-mode voltage to REF/2 by placing a shunt in the 1-2 position. Jumpers JU12 and JU13  are  used  to  set  the  voltage  clamps  to  protect  the analog inputs of the MAX11905 ADC. The default position connects VCLPH to REFVDD and VCLPL to GND.

## User-Supplied SPI

To  evaluate  the  EV  kit  with  a  user-supplied  SPI  bus, remove shunts from jumper JU9. Apply the user-supplied SPI signals  to  the  SCLK,  CNVST,  DIN,  and  DOUT  test points. Make sure the return ground is the same as the IC's ground.

## User-Supplied REFVDD

The REFVDD supply is powered through a +3.3V LDO by default. For user-supplied REFVDD, remove the shunt on jumper JU8 and apply +2.7V to +3.6V at JU8-1.

## User-Supplied AVDD

The AVDD supply is powered through a +1.8V LDO by default.  For  user-supplied  AVDD,  remove  the  shunt  on jumper JU7 and apply +1.7V to +1.9V at JU7-2.

## User-Supplied DVDD

The DVDD supply is powered through a +1.8V LDO by default.  For  user-supplied  DVDD,  remove  the  shunt  on jumper JU4 and apply +1.7V to +1.9V at JU4-2.

## User-Supplied OVDD

The OVDD supply is powered through a +3.3V LDO by default.  For  user-supplied  OVDD,  remove  the  shunt  on jumper  JU6  and  apply  +1.5V  to  +3.6V  at  JU6-2.  Since

## Evaluates: MAX11905

there is a supply limitation on the isolators (U3, U18), the OVDD supply should not be powered below +2.7V when the FMC connector or PMOD of the EV kit are being used.

## User-Supplied REFIN

The IC uses an on-board +3V reference (MAX6126) by default.  For  user-supplied  REFIN,  move  the  shunt  on jumper JU5 to the 2-3 position. Make sure that REFIN is 300mV below REFVDD before applying the reference.

## Analog Inputs

Both analog inputs (AIN+ and AIN-) range from 0 to V REF . The differential input range is from -V REF  to +V REF  and the full-scale range is 2x the V REF . The desired input signals are applied at the INP and INM SMAs or test points.

## Sync Input and Sync Output

The  DCLK\_IN  SMA  accepts  an  approximate  100MHz waveform  signal  to  generate  the  system  clock  of  the ZedBoard.  For  maximum  performance,  use  a  low-jitter clock that syncs to the user's analog function generator. The SYNC\_OUT SMA outputs a 10MHz square waveform that syncs to the user's analog function generator. Both options  are  used  for  coherent  sampling  of  the  IC.  Only one  option  should  be  used  at  a  time.  The  relationship between f IN ,  f S ,  N CYCLES ,  and  M SAMPLES   is  given  as follows:

<!-- formula-not-decoded -->

where:

f IN  = Input frequency

f S = Samping frequency

NCYCLES = Prime number of cycles in the sampled set

MSAMPLES = Total number of samples

## Interface Connectors

The  EV  kit  and  ZedBoard  communicate  in  two  ways, using  the  peripheral  module  connector  (J1)  or  the FMC  connector  (J2)  on  the  EV  kit.  The  maximum  SPI SCLK  frequency  is  37.5MHz  for  the  peripheral  module connector and 75MHz for the FMC connector.

│

## MAX11905 Differential EV Kit Bill of Materials

| DESCRIPTION ALUE TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN   | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 200V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 TC=X7R DEGC;   | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R              | CAPACITOR; SMT (0603); CERAMIC CHIP; 4700PF; 100V; TOL=5%; MODEL=FT-CAP; TG=-55 DEGC TO TC=C0G DEGC; +125   | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 35V; TOL=10%; TG=-55 DEGC TO +85 DEGC;   | TC=X5R CAPACITOR; SMT; 0402; CERAMIC; 0.1uF; 16V; 5%; X7R; -55degC to + 125degC; 0 +/-15% degC MAX.   | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 100V; TOL=5%; MODEL=HT SERIES; TG=-55 DEGC TO   | TC=C0G DEGC; +200 CAPACITOR; SMT (1210); CERAMIC CHIP; 2.2UF; 100V; TOL=10%; MODEL=GRM SERIES; TG=-55 TC=X7R DEGC; +125 to DEGC   | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 50V; TOL=10%; MODEL=_MK SERIES; TG=-55 DEGC +85 TO DEGC   | CAPACITOR; SMT; 0603; CERAMIC; 0.1uF; 25V; 10%; X7R; -55degC to + 125degC; +/-15% from - 55degC to +125degC; NOT RECOMMENDED FOR NEW DESIGN USE - 20-000u1-01   | CAPACITOR; SMT (1206); CERAMIC CHIP; 10UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC;   | TC=X7R CONNECTOR; FEMALE; THROUGH HOLE; CONN SOCKET SMA STR DIE CAST PCB; STRAIGHT; 5PINS   |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| V N/A                                                                                                                                                                           | 0.01UF                                                                                                 | 0.1UF                                                                                                    | 4700PF                                                                                                      | 10UF                                                                                | 0.1UF                                                                                                 | 1000PF                                                                                       | 2.2UF                                                                                                                             | 1UF                                                                                                 | 0.1UF                                                                                                                                                           | 10UF                                                                                 | 5-1814832- 1                                                                                |
| MFG KEYSTONE                                                                                                                                                                    | KEMET                                                                                                  | MURATA; TDK                                                                                              | KEMET                                                                                                       | TDK                                                                                 | KEMET                                                                                                 | KEMET                                                                                        | MURATA/TDK                                                                                                                        | TAIYO YUDEN; TDK; SAMSUNG; MURATA                                                                   | KEMET/MURATA/T DK                                                                                                                                               | MURATA; SAMSUNG ELECTRONICS                                                          | TYCO                                                                                        |
| MFG PART # 5005                                                                                                                                                                 | C0603C103K2RAC                                                                                         | GRM188R72A104KA35; CC0603KRX7R0BB104                                                                     | C0603X472J1GAC                                                                                              | C2012X5R1V106K085                                                                   | C0402C104J4RAC                                                                                        | C0603H102J1GAC                                                                               | GRM32ER72A225KA35; CGA6N3X7R2A225K230                                                                                             | UMK107BJ105KA-T; C1608X5R1H105K080AB; CL10A105KB8NNN; GRM188R61H105KAAL                             | C0603C104K3RAC; GRM188R71E104KA01; C1608X7R1E104K                                                                                                               | GRM31CR71E106KA12L; CL31B106KAHNNN                                                   | 5-1814832-1                                                                                 |
| REF DES +3.3V_Z +5V, 2                                                                                                                                                          | 4 C1, C9, C26, C102                                                                                    | 21 C2, C3, C6, C8, C11, C13, C14, C18, C19, C23, C25, C29, C33, C34, C37, C39, C69, C94, C99, C100, C103 | C10 C4, 2                                                                                                   | 12 C5, C7, C20, C22, C24, C28, C30, C32, C68, C70, C98, C101                        | 2 C12, C104                                                                                           | C17 1                                                                                        | 4 C31, C50, C51, C67                                                                                                              | 5 C35, C36, C38, C93, C95                                                                           | 8 C40, C41, C46, C47, C106, C109, C113, C116                                                                                                                    | 8 C42-C45, C105, C107, C111, C115                                                    | 4 INM, INP, DCLK_IN, SYNC_OUT                                                               |
| QTY 1                                                                                                                                                                           | 2                                                                                                      | 3                                                                                                        | 4                                                                                                           | 5                                                                                   | 6                                                                                                     | 7                                                                                            | 8                                                                                                                                 | 9                                                                                                   | 10                                                                                                                                                              | 11                                                                                   | 12                                                                                          |

│

## MAX11905 Differential EV Kit Bill of Materials (continued)

| TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST   | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST   | 5010 TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE   | TSW-106- 08-S-D-RA CONNECTOR; THROUGH HOLE; DOUBLE ROW; RIGHT ANGLE; 12PINS; THIS PART IS DEDICATED FOR PMOD PERIPHERAL BOARD   | ASP- 134604-01 CONNECTOR; MALE; SMT; HIGH SPEED/HIGH DENSITY OPEN PIN FIELD TERMINAL ARRAY; 160PINS STRAIGHT;   | PEC02SA CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS   | PCC03SA CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC +125 TO DEGC   | TSW-104- 26-T-T CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; TRIPLE ROW; 2.54MM PITCH; STRAIGHT; 12PINS   | 100 RESISTOR; 0603; 100 OHM; 0.05%; 10PPM; 0.10W; FILM THICK 0   | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; FILM THICK   | RESISTOR; 0603; 33 OHM; 1%; 100PPM; 0.10W; FILM   | 33 THICK RESISTOR; 0603; 2K OHM; 0.1%; 10PPM; 0.063W; FILM METAL   | RESISTOR; 0603; 100K; 1%; 100PPM; 0.10W; FILM THICK   | 10 RESISTOR; 0603; 10 OHM; 0.1%; 10PPM; 0.063W; FILM THICK   | RESISTOR, 0603, 1K, 0.1%, 10PPM, 1/16W, THIN FILM   | 49.9 RESISTOR; 0603; 49.9 OHM; 1%; 100PPM; 0.10W; FILM THICK   | 49.9 RESISTOR; 0603; 49.9 OHM; 0.1%; 10PPM; 0.063W; FILM METAL   |    |    |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|--------------------------------------------------------|---------------------------------------------------|--------------------------------------------------------------------|-------------------------------------------------------|--------------------------------------------------------------|-----------------------------------------------------|----------------------------------------------------------------|------------------------------------------------------------------|----|----|
| N/A                                                                                                                                                                             | N/A                                                                                                                                                                                 |                                                          |                                                                                                                                 |                                                                                                                 | AN                                                                  | AN                                                                                                 |                                                                                                         |                                                                  |                                                        |                                                   | 2K                                                                 | 100K                                                  | CONNECTIVITY                                                 |                                                     | DALE VISHAY                                                    | TE CONNECTIVITY                                                  |    | 1K |
| KEYSTONE 5001                                                                                                                                                                   | KEYSTONE                                                                                                                                                                            | ? 5010                                                   | SAMTEC                                                                                                                          | SAMTEC                                                                                                          | SULLINS                                                             | SULLINS                                                                                            | SAMTEC                                                                                                  | LTD. CO SUSUMU                                                   | VISHAY DALE/ROHM/PANA SONIC                            | VISHAY DALE                                       | CONNECTIVITY TE                                                    | VISHAY DALE/PANASONIC                                 | TE                                                           | XICON                                               |                                                                |                                                                  |    |    |
|                                                                                                                                                                                 | 5006                                                                                                                                                                                |                                                          | TSW-106-08-S-D-RA                                                                                                               | ASP-134604-01                                                                                                   | PEC02SAAN                                                           | PCC03SAAN                                                                                          | TSW-104-26-T-T                                                                                          | RG1608N-101-W-T1                                                 | CRCW06030000ZS; MCR03EZPJ000; ERJ- 3GEY0R00            | SEE NOTES                                         | RN73C1J2K0B; 5-1614352- 1                                          | CRCW06031003FK; ERJ- 3EKF1003                         | RN73C1J10RBTG; 1614350-2                                     | 288-0603-1.0K-RC                                    | CRCW060349R9FK                                                 | RN73C1J49R9B; 9- 1614353-1                                       |    |    |
| 9 GND1-GND6, GNDA1- GNDA3                                                                                                                                                       | GND_+5                                                                                                                                                                              | 5 VS+, VS-, INM1, INP1, TP_VOCM                          | J1 1                                                                                                                            | J2 1                                                                                                            | JU1, JU2, JU11                                                      | 6 JU3, JU5, JU6, JU12-JU14                                                                         | JU9                                                                                                     | R2 R1,                                                           | 4 R3, R6, R16, R19                                     | 9 R4, R5, R14, R15, R17, R18, R39, R42, R44       | 4 R8, R9, R45, R49                                                 | 9 R21-R24, R35-R38, R43                               | 5 R26, R27, R32-R34                                          | R30, R31                                            | R41 1                                                          | R47, R48                                                         |    |    |
| 13                                                                                                                                                                              |                                                                                                                                                                                     |                                                          |                                                                                                                                 |                                                                                                                 | 3                                                                   |                                                                                                    | 1                                                                                                       | 2                                                                |                                                        |                                                   |                                                                    |                                                       |                                                              |                                                     |                                                                |                                                                  |    |    |
|                                                                                                                                                                                 |                                                                                                                                                                                     | 15                                                       | 16                                                                                                                              |                                                                                                                 | 18                                                                  | 19                                                                                                 | 20                                                                                                      | 21                                                               | 22                                                     | 23                                                | 24                                                                 | 25                                                    | 26                                                           |                                                     |                                                                |                                                                  |    |    |
|                                                                                                                                                                                 | 14                                                                                                                                                                                  |                                                          |                                                                                                                                 |                                                                                                                 |                                                                     |                                                                                                    |                                                                                                         |                                                                  |                                                        |                                                   |                                                                    |                                                       |                                                              |                                                     |                                                                |                                                                  |    |    |
|                                                                                                                                                                                 |                                                                                                                                                                                     |                                                          |                                                                                                                                 | 17                                                                                                              |                                                                     |                                                                                                    |                                                                                                         |                                                                  |                                                        |                                                   |                                                                    |                                                       |                                                              |                                                     |                                                                |                                                                  |    |    |
|                                                                                                                                                                                 | 1                                                                                                                                                                                   |                                                          |                                                                                                                                 |                                                                                                                 |                                                                     |                                                                                                    |                                                                                                         |                                                                  |                                                        |                                                   |                                                                    |                                                       |                                                              |                                                     |                                                                | 2                                                                |    |    |
|                                                                                                                                                                                 |                                                                                                                                                                                     |                                                          |                                                                                                                                 |                                                                                                                 |                                                                     |                                                                                                    |                                                                                                         |                                                                  |                                                        |                                                   |                                                                    |                                                       |                                                              |                                                     | 2                                                              |                                                                  |    |    |
|                                                                                                                                                                                 |                                                                                                                                                                                     |                                                          |                                                                                                                                 |                                                                                                                 |                                                                     |                                                                                                    |                                                                                                         |                                                                  |                                                        |                                                   |                                                                    |                                                       |                                                              |                                                     |                                                                |                                                                  | 29 |    |
|                                                                                                                                                                                 |                                                                                                                                                                                     |                                                          |                                                                                                                                 |                                                                                                                 |                                                                     |                                                                                                    |                                                                                                         |                                                                  |                                                        |                                                   |                                                                    |                                                       |                                                              |                                                     | 27                                                             |                                                                  |    |    |
|                                                                                                                                                                                 |                                                                                                                                                                                     |                                                          |                                                                                                                                 |                                                                                                                 |                                                                     |                                                                                                    |                                                                                                         |                                                                  |                                                        |                                                   |                                                                    |                                                       |                                                              |                                                     | 28                                                             |                                                                  |    |    |

│

## MAX11905 Differential EV Kit Bill of Materials (continued)

| RESISTOR; 0603; 100K OHM; 5%; 200PPM; 0.10W; FILM THICK   | RESISTOR; 0402; 1K OHM; 0.1%; 10PPM; 0.063W ; FILM THIN   | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER OVERALL TIN PLATED   | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN   | IC; ADC; 20-BIT, 1.6MSPS, LOW-POWER, FULLY DIFFERENTIAL SAR ADC; TQFN20-EP 4X4   | SERIES VOLTAGE REFERENCE IC; DISO; FOUR-CHANNEL; 150MBPS; 5KV   | DIGITAL ISOLATOR; WSOIC16 300MIL   | IC; VREG; ULTRA-LOW-NOISE; HIGH PSRR; LOW- DROPOUT; 0.12A LINEAR REGULATOR; SC70-5   | IC; VREG; ULTRA-LOW-NOISE; HIGH PSRR; LOW- DROPOUT; 0.12A LINEAR REGULATOR; SC70-5   | EVKIT PART - IC; MAX44205ATC+; TQFN12-EP 3X3; PACKAGE CODE: T1233-4; PACKAGE DWG. 21-0136 NO.:   | IC; OPAMP; PRECISION, LOW-NOISE, WIDE-BAND AMPLIFIER; NSOIC8 150MIL; -40 DEGC TO +125 DEGC   | IC; MMRY; 16MBIT; SERIAL FLASH MEMORY; 75MHZ SPI BUS INTERFACE; MSOIC8 200MIL IC; DRV; SINGLE BUS BUFFER/LINE DRIVER; 3- SOT753 STATE;   | MAX1190XDIF PCB:   | DESCRIPTION PACKAGE OUTLINE 0603 NON-POLAR   | EVKIT - CAPACITOR   | PACKAGE OUTLINE 1206 NON-POLAR EVKIT - CAPACITOR   |
|-----------------------------------------------------------|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|-----------------------------------------------------------------|------------------------------------|--------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|--------------------|----------------------------------------------|---------------------|----------------------------------------------------|
| 100K                                                      | 1K                                                        | STC02SYA N                                                                                                                | 5011                                                                                                                                                              | MAX11905 ETP+                                                                    | MAX6126A ASA30                                                  | MAX14935 FAWE+                     | MAX8510E XK18                                                                        | MAX8510E XK33+                                                                       | MAX44205 ATC+                                                                                    | MAX9632A SA+                                                                                 | M25P16- VMW6TG 74LVC1G1 26GV                                                                                                             | PCB                | V ALUE                                       | OPEN                | OPEN                                               |
| PANASONIC                                                 | TE CONNECTIVITY                                           | SULLINS ELECTRONICS CORP.                                                                                                 | ? 5011                                                                                                                                                            | MAXIM                                                                            | MAXIM                                                           | MAXIM                              | MAXIM                                                                                | MAXIM                                                                                | MAXIM                                                                                            | MAXIM                                                                                        | MICRON TECHNOLOGY INC. NXP                                                                                                               | MAXIM              | MANUFACTURER                                 | N/A                 | N/A                                                |
| ERJ-3GEYJ104V                                             | RN73C1E1K0B                                               | STC02SYAN                                                                                                                 |                                                                                                                                                                   | MAX11905ETP+                                                                     | MAX6126AASA30+                                                  | MAX14935FAWE+                      | MAX8510EXK18                                                                         | MAX8510EXK33+                                                                        | MAX44205ATC+                                                                                     | MAX9632ASA+                                                                                  | M25P16-VMW6TG 74LVC1G126GV                                                                                                               | MAX1190XDIF        | MFG PART #                                   | N/A                 | N/A                                                |
| R51                                                       | R52, R53                                                  | SU1-SU17                                                                                                                  | TP2-TP5                                                                                                                                                           | U1                                                                               | U2                                                              | U18 U3,                            | U5 U4,                                                                               | U20 U6,                                                                              | U7                                                                                               | U11                                                                                          | U17 U21                                                                                                                                  |                    | REF DES                                      | C16 C15,            | C21                                                |
| 1                                                         | 2                                                         | 17                                                                                                                        | 4                                                                                                                                                                 | 1                                                                                | 1                                                               | 2                                  | 2                                                                                    | 2                                                                                    | 1                                                                                                | 1                                                                                            | 1 1                                                                                                                                      | 1 175              |                                              | 2                   | 1                                                  |
| 30                                                        | 31                                                        | 32                                                                                                                        | 33                                                                                                                                                                | 34                                                                               | 35                                                              | 36                                 | 37                                                                                   | 38                                                                                   | 39                                                                                               | 40                                                                                           | 41 42                                                                                                                                    | 43 TOTAL           | ITEM QTY                                     | 1                   | 2                                                  |

## MAX11905 Differential EV Kit Bill of Materials (continued)

| PACKAGE OUTLINE 0805 NON-POLAR EVKIT - CAPACITOR   | EVKIT - RESISTOR 0603 OUTLINE PACKAGE EVKIT - RESISTOR 0603 OUTLINE PACKAGE   | DESCRIPTION                          | PACKOUT - 1/4 3/16X7X1 9 BROWN BOX;SMALL   | ESD BAG;BAG;STATIC SHIELD ZIP 4inX6in;W/ESD LOGO - PACKOUT   | PINK FOAM;FOAM;ANTI-STATIC PE 12inX12inX5MM - PACKOUT   | SHEET DATA MAXIM FOR INSTRUCTIONS WEB   | PACKOUT - BOX) KIT LABEL(EV   |
|----------------------------------------------------|-------------------------------------------------------------------------------|--------------------------------------|--------------------------------------------|--------------------------------------------------------------|---------------------------------------------------------|-----------------------------------------|-------------------------------|
| OPEN                                               | OPEN OPEN                                                                     | VALUE                                | ?                                          | ?                                                            | ?                                                       | ?                                       | ?                             |
| N/A                                                | N/A N/A                                                                       | shipped with PCB)                    | MFG                                        | N/A                                                          | N/A                                                     | N/A                                     | N/A                           |
| N/A                                                | N/A N/A                                                                       | but not assembled on PCB and will be |                                            | PACKOUT N/A                                                  |                                                         |                                         |                               |
| C27 1                                              | R7 1 R20 1 6                                                                  | are purchased parts                  | DES REF 1                                  | 1 PACKOUT                                                    | 1 PACKOUT                                               | PACKOUT 1                               | PACKOUT 1                     |
| 3                                                  | 4 5 TOTAL                                                                     | QTY PACKOUT (These                   | ITEM 1                                     | 2                                                            | 3                                                       | 4                                       | 5                             |

Evaluates: MAX11905

│

Evaluates: MAX11905

Figure 8a. MAX11905 Differential EV Kit Schematic (Sheet 1 of 3)

<!-- image -->

## Evaluates: MAX11905

Figure 8b. MAX11905 Differential EV Kit Schematic (Sheet 2 of 3)

<!-- image -->

Figure 8c. MAX11905 Differential EV Kit Schematic (Sheet 3 of 3)

<!-- image -->

Figure 9. MAX11905 Differential EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 10. MAX11905 Differential EV Kit PCB LayoutComponent Side

<!-- image -->

Figure 11. MAX11905 Differential EV Kit PCB Layout-Layer 2

<!-- image -->

Figure 12. MAX11905 Differential EV Kit PCB Layout-Layer 3

<!-- image -->

│

Figure 13. MAX11905 Differential EV Kit PCB Layout-Layer 4

<!-- image -->

Figure 14. MAX11905 Differential EV Kit PCB Layout-Layer 5

<!-- image -->

## Evaluates: MAX11905

Figure 15. MAX11905 Differential EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 16. MAX11905 Differential EV Kit Component Placement Guide-Solder Side

<!-- image -->

│

## Ordering Information

| PART              | TYPE   |
|-------------------|--------|
| MAX11905DIFEVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX11905

## MAX11905 Differential Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                            | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------------|-----------------|
|                 0 | 12/14           | Initial release                                        | -               |
|                 1 | 12/16           | Updated second page of schematic and Bill of Materials | 10, 12-16       |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im Integrated reserYes the right to change the circuitry and specifications Zithout notice at any time.

│

Evaluates: MAX11905