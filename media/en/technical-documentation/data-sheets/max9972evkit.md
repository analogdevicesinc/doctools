<!-- lastmod 2022-08-03 -->
## MAX9972 Evaluation Kit

## General Description

The  MAX9972  evaluation  kit  is  a  fully  assembled  and tested printed circuit board (PCB) that simplifies evalua -tion and demonstrates the functionality of the MAX9972, a quad-channel, ultra-low power pin electronics IC. The MAX5734  DAC  is  included  in  the  EV  kit  for  pin  electronic IC level setting. Standard 50Ω SMA connectors are included on the EV kit for the inputs and outputs to allow for quick and easy evaluation on the test bench.

The EV kit contains a microcontroller (MCU) that translates between the SPI interface and USB to allow the user to  configure  internal  registers  and  modes  with  graphi -cal  user  interface  (GUI)  software  running  on  a  PC. The EV  kit  includes  Windows ®  10-compatible  software  that provides a simple GUI for configuration of all the MAX9972 registers through SPI. The EV kit is fully assembled and tested at the factory.

This  document  includes  the MAX9972  EV  Kit  Bill  of Materials ,  a  list  of  equipment  required  to  evaluate  the device, a straightforward test procedure to verify functionality,  a  description  of  the  EV  kit  circuit, MAX9972 EV Kit Schematic  Diagrams ,  and MAX9972 EV Kit PCB Layout Diagrams .

## Features

- Easy Evaluation of MAX9972 Quad-Channel DCL and PMU Switches
- On-Board MAX5734 2-Channel, 16-Bit DAC
- On-Board MAX32625 Pico Board
- Includes Heatsink
- On-Board Voltage Regulators
- USB Interface
- Headers for External SPI Interface
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

Arm and Cortex are registered trademarks of Arm Limited (or its subsidiaries) in the US and/or elsewhere.

Evaluates: MAX9972

## Quick Start

## Required Equipment

This  section  lists  the  recommended  test  equipment  to verify operation of the MAX9972. It is intended as a guide only and some substitutions are possible.

- MAX9972 EV kit
- A user-supplied Windows 10-compatible PC with a spare USB 2.0 port
- Dual-output DC power supply
-  +8V/500mA
-  -5V/500mA
- Function/pulse generator (recommend high speed up to 250MHz)
- High-speed oscilloscope (recommend 1GHz bandwidth)
- Digital multimeter
- SMA/SMA cable as needed for connection to the equipment

## Software and Drivers

The  MAX9972  EV  kit  is  used  in  conjunction  with  the Arm® Cortex® M4 processor with FPU, MAX32625PICO application platform or PICO board to provide power and control the device through a software application or GUI. Users also have the option to connect SPI through their system with J1 header on the EV kit.

## Install the MAX9972 EV Kit GUI Software

This process takes less than 10 minutes after downloading the software package.

- Download the MAX9972  EV  kit software from www.maximintegrated.com/evkit-software ,  run  the installation file, and install the GUI package.
- Run the GUI program.

## Powering the MAX9972 EV Kit

- Set  the  DC  supply  to  +8V  and  connect  (through  an ammeter if desired) to the headers (VCC) and ground (GND) on the EV kit. Do not turn on the supply.
- Set  the  DC  supply  to  -5V  and  connect  (through  an ammeter if desired) to the headers (VEE) and ground (GND) on the EV kit. Do not turn on the supply.

<!-- image -->

## MAX9972 Evaluation Kit

- There  are  on-board  linear  regulators  to  power  the MAX9972 VL and VCTV and the MAX5734 32-channel  DAC,  connect  jumpers  in  default  position,  as shown in Table 1 and Table 2.
- Verify that the heatsink is installed and flush on the top of the MAX9972 IC.

## Procedure

This  section  provides  a  step-by-step  guide  to  operating the EV kit and testing the device functions.

## Caution: Do not turn on the DC power or function generator  until  all  connections  are  completed.  Connect all power-supply grounds to a single ground terminal.

- 1) Set  the  function  generator  to  output  peak-to-peak amplitude of 500mV with offset +250mV. Ensure that the  outputs  are  disabled  (high  impedance).  Set  the square wave frequency to 20MHz, 50% duty cycle.
- 2) Connect the function generator output to the DATA1 SMA connector on the MAX9972 EV kit with a SMA cable.
- 3) Set the RCV1 to a 50Ω terminator to disable the highimpedance output mode.
- 4) Connect the DUT1 SMA connector of the MAX9972

Evaluates: MAX9972

EV  kit  with  a  short  SMA  cable  to  the  high-speed oscilloscope. Set the scope input impedance to 50Ω.

- 5) Verify the correct polarity, voltage, and current limit of all  power supplies. Turn on the power supplies and function generator.
- 6) Connect  the  PC  to  the  on-board  MAX32625  PICO microcontroller  module  on  the  EV  kit  using  the provided USB cable.
- 7) Select  the  COM  port  and  click  on  the Connect button.  The  MAX9972  GUI  should  indicate  EV  kit connected  in  the  status  bar  (outlined  in  blue),  as shown in Figure 2.
- 8) Put  the  EV  kit  into  drive  mode  by  setting  register values as shown on the Channel 1 tab,  as  shown in Figure 1. In this mode, VDH Level Voltage is set to 3.00 and VDL Level Voltage is set to 0.00 for Channel 1.
- 9) Click on the Write Ch1 button to write the data into the MAX9972 and MAX5734 registers.
- 10)  Set the oscilloscope to trigger on the DUT1 channel, with the trigger level set to 0.5V. Set the time base to 20ns per division. A 0 to 1.5V square wave of 20MHz should appear on the oscilloscope.

Figure 1. MAX9972 EV Kit Software Main Window (Ch1 Tab)

<!-- image -->

│

## Detailed Description

## Detailed Description of Software

The MAX9972 GUI is organized into six tabs for all level setting registers and control signal settings, plus the File menu to save and load all these settings. There are identical  tabs  that  control  the  four  channels  of  the  MAX9972. The Global tab contains level-setting DAC controls shared across all four channels. The Registers tab consists of all the user registers in the MAX9972 and MAX5734.

## Channel Tab

Channel  1,  Channel  2,  Channel  3,  and  Channel  4  are identical  and  control  each  of  the  MAX9972  channels independently. These tabs contain Level-Setting DACs and Channel Control , as shown in Figure 2. After setting DAC levels and control signals, click  on  the Write Ch\_ button to load data into the MAX9972 device through the SPI interface.

Figure 2. MAX9972 EV Kit Software Window (Level-Setting DACs and Control Register)

<!-- image -->

Evaluates: MAX9972

│

## Level-Setting Channel DACs

The Level Setting Channel DACs group box contains signal level registers for VDH , VDL , VDT , VCH , VCL , and VLD level settings. Each voltage level can be set by entering value either in voltage box or hexadecimal box. Finer adjustment can be made by clicking on the +/-sign of the Voltage box. The VDHV, VDLV, VDTV, VCHV, VCLV, and VLDV voltage have 65,536 steps corresponding to 16 bits.

Figure 3. MAX9972 EV Kit Software Window (Level-Setting Channel DACs)

<!-- image -->

## MAX9972 Evaluation Kit

## Channel Control Register

Channel control register is a combination of Driver and Control group boxes.

Driver  output  is  chosen  by  settting  the Automatic or Manual t oggle button in the Driver group  box.  In  automatic  mode,  driver  output  is  selected  from  the Output drop-down box. In manual mode, driver output is selected based on the Control group box settings.

Passive load can be enabled or disabled with the Load Enable Low and Load Enable High check boxes. PMU switches can be enabled or disabled with Sense Enable and Force Enable check boxes.

## Global Tab

The Global tab sheet (Figure 3) contains Global DACs Settings and Offset  Voltage settings. COMPHI  Level and COMPLO Level DAC's voltage level can be set by entering value either in the Voltage box or in the hexadecimal box. Offset level of the DAC can be set by entering value either in the Voltage box or in the hexadecimal box.

## Registers Tab

There  are  two  methods  for  configuring  the  MAX9972 and  MAX5734 devices. The first  method  is  through  the graphical user interface as shown in Figure 2. The second method is through the Registers tab as shown in Figure 4.  The Registers tab  allows  execution  of  serial  commands  manually.  The Registers tab  can  also  be  used as a debug tool because it is capable of writing to every register of the MAX9972 and MAX5734.

Figure 4. MAX9972 EV Kit Software Window (Register Tab)

<!-- image -->

Evaluates: MAX9972

│

## Detailed Description of Hardware

The  MAX9972  evaluation  kit  is  a  fully  assembled  and tested  PCB that evaluates the MAX9972 quad-channel, ultra-low power pin electronic driver, comparator, passive load, and PMU switches. The EV kit includes SMA connectors for the high-speed digital I/Os. The MAX9972 EV kit is connected to a computer through the universal serial bus (USB) port.

## Power Supplies

Connect the power supplies using the high-current banana jacks, VEE (-5V) and VCC (8V). The GND banana jack on the MAX9972 EV kit is common for all the power supplies. All power supplies should be within the range specified in the MAX9972 IC data sheet. The MAX9972 EV kit needs only two supplies to be connected to the board; all other supplies are generated through regulators on the EV kit.

## High-Speed Digital I/Os

The top edge and the bottom edge of the PCB are populated with edge-launch SMA connectors and are the highspeed  digital  I/Os  of  the  MAX9972.  It  is  recommended that  the  CMPH\_  and  CMPL\_  outputs  are  connected  to 50Ω terminated oscilloscope/logic analyzer at the end of the attached cable.

The  high-speed  digital  inputs  (DATA\_  and  RCV\_)  are intended for use with a high-speed, single-ended signal source. The high-speed digital outputs (CMPH\_/CMPL\_) are  intended  for  use  with  a  high-speed  differential  logic analyzer. These outputs can be double terminated at the measurement source by external 50Ω resistors.

## Table 1. Power Supplies Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                 |
|----------|------------------|-------------------------------------------------------------|
| J2       | 1-2*             | Connects VEE to the negative power-supply input banana jack |
| J2       | Open†            | Disconnects VEE from the negative input power supply        |
| J3       | 1-2*             | Connects VCC to the positive power-supply input banana jack |
| J3       | Open†            | Disconnects VCC from the positive input power supply        |
| J4       | Open*            | Disconnects EP from GND                                     |
| J4       | 1-2              | Connects EP to GND                                          |

*Indicates default jumper state.

† Connect the power supply through ammeter to monitor supply current.

## Pin Driver Outputs

The  quad-pin  driver  output  pins  (DUT\_)  are  accessed through the edge launch SMA connectors, located on the right edge of the PCB. The outputs have a typical output impedance of 50Ω.

## Test Points

There  are  test  points  on  the  EV  kit  to  facilitate  performance analysis and circuit modification. The test points are listed in Table 3.

## Device Ground Sense

The MAX5734 IC can sense the ground potential at the device under test (DUT). The MAX5734 is preconfigured to  have  the  device  ground  sense  pin  (DGS)  connected to the ground plane through a 0Ω resistor (R9). If remote sensing is desired, remove R9 and connect DGS pin to the remote DUT ground.

## Temperature Sensing

The  MAX9972  EV  kit  provides  the  means  to  determine the MAX9972 IC's die temperature through the TEMP test point. During operation, continuously monitor the TEMP pin to ensure that the junction temperature does not exceed +150°C,  which  corresponds  with  +4.2V.  During  normal operation, a voltage of 3V to 3.6V is typical. The MAX9972 GUI provides another way to monitor die temperature.

## Jumper Settings

Tables 1, 2 and 3 provide a list for jumper settings.

│

Table 2. Digital Interface Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                       |
|----------|------------------|---------------------------------------------------|
| DHV1     | 1-2*             | Connects channel 1 DHV to MAX5734 DAC output      |
| DHV1     | Open             | Disconnects channel 1 DHV from MAX5734 DAC output |
| DLV1     | 1-2*             | Connects channel 1 DLV to MAX5734 DAC output      |
| DLV1     | Open             | Disconnects channel 1 DLV from MAX5734 DAC output |
| DTV1     | 1-2*             | Connects channel 1 DTV to MAX5734 DAC output      |
| DTV1     | Open             | Disconnects channel 1 DTV from MAX5734 DAC output |
| CHV1     | 1-2*             | Connects channel 1 CHV to MAX5734 DAC output      |
| CHV1     | Open             | Disconnects channel 1 CHV from MAX5734 DAC output |
| CLV1     | 1-2*             | Connects channel 1 CLV to MAX5734 DAC output      |
| CLV1     | Open             | Disconnects channel 1 CLV from MAX5734 DAC output |
| LDV1     | 1-2*             | Connects channel 1 LDV to MAX5734 DAC output      |
| LDV1     | Open             | Disconnects channel 1 LDV from MAX5734 DAC output |
| COMPHI   | 1-2*             | Connects COMPHI to MAX5734 DAC output             |
| COMPHI   | Open             | Disconnects COMPHI from MAX5734 DAC output        |
|          | 1-2*             | Connects COMPLO to MAX5734 DAC output             |
| COMPLO   | Open             | Disconnects COMPLO from MAX5734 DAC output        |
| DHV2     | 1-2*             | Connects channel 2 DHV to MAX5734 DAC output      |
| DHV2     | Open             | Disconnects channel 2 DHV from MAX5734 DAC output |
| DLV2     | 1-2*             | Connects channel 2 DLV to MAX5734 DAC output      |
| DLV2     | Open             | Disconnects channel 2 DLV from MAX5734 DAC output |
| DTV2     | 1-2*             | Connects channel 2 DTV to MAX5734 DAC output      |
| DTV2     | Open             | Disconnects channel 2 DTV from MAX5734 DAC output |
| CHV2     | 1-2*             | Connects channel 2 CHV to MAX5734 DAC output      |
| CHV2     | Open             | Disconnects channel 2 CHV from MAX5734 DAC output |
| CLV2     | 1-2*             | Connects channel 2 CLV to MAX5734 DAC output      |
| CLV2     | Open             | Disconnects channel 2 CLV from MAX5734 DAC output |
| LDV2     | 1-2*             | Connects channel 2 LDV to MAX5734 DAC output      |
| LDV2     | Open             | Disconnects channel 2 LDV from MAX5734 DAC output |
|          | 1-2*             | Connects channel 3 DHV to MAX5734 DAC output      |
| DHV3     | Open             | Disconnects channel 3 DHV from MAX5734 DAC output |
| DLV3     | 1-2*             | Connects channel 3 DLV to MAX5734 DAC output      |
| DLV3     | Open             | Disconnects channel 3 DLV from MAX5734 DAC output |
| DTV3     | 1-2*             | Connects channel 3 DTV to MAX5734 DAC output      |
| DTV3     | Open             | Disconnects channel 3 DTV from MAX5734 DAC output |
| CHV3     | 1-2*             | Connects channel 3 CHV to MAX5734 DAC output      |
| CHV3     | Open             | Disconnects channel 3 CHV from MAX5734 DAC output |
| CLV3     | 1-2*             | Connects channel 3 CLV to MAX5734 DAC output      |
| CLV3     |                  | Disconnects channel 3 CLV from MAX5734 DAC        |
|          | Open             | output                                            |

Evaluates: MAX9972

Table 2. Digital Interface Jumper Settings (continued)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                       |
|----------|------------------|---------------------------------------------------|
| LDV3     | 1-2*             | Connects channel 3 LDV to MAX5734 DAC output      |
| LDV3     | Open             | Disconnects channel 3 LDV from MAX5734 DAC output |
| DHV4     | 1-2*             | Connects channel 4 DHV to MAX5734 DAC output      |
| DHV4     | Open             | Disconnects channel 4 DHV from MAX5734 DAC output |
| DLV4     | 1-2*             | Connects channel 4 DLV to MAX5734 DAC output      |
| DLV4     | Open             | Disconnects channel 4 DLV from MAX5734 DAC output |
| DTV4     | 1-2*             | Connects channel 4 DTV to MAX5734 DAC output      |
| DTV4     | Open             | Disconnects channel 4 DTV from MAX5734 DAC output |
| CHV4     | 1-2*             | Connects channel 4 CHV to MAX5734 DAC output      |
| CHV4     | Open             | Disconnects channel 4 CHV from MAX5734 DAC output |
| CLV4     | 1-2*             | Connects channel 4 CLV to MAX5734 DAC output      |
| CLV4     | Open             | Disconnects channel 4 CLV from MAX5734 DAC output |
| LDV4     | 1-2*             | Connects channel 4 LDV to MAX5734 DAC output      |
| LDV4     | Open             | Disconnects channel 4 LDV from MAX5734 DAC output |

*Indicates default jumper state.

## Table 3. Test Points and Their Functions

| TEST POINT   | DESCRIPTION                                                         |
|--------------|---------------------------------------------------------------------|
| RSTB         | Active-Low Serial-Port Reset Input                                  |
| LOADB        | Active-Low Serial-Port Load Input                                   |
| CSB          | Active-Low Serial-Port Chip-Select Input for MAX9972                |
| SCLK         | Serial-Port Clock Input                                             |
| DIN          | Serial-Port Data Input                                              |
| DOUT         | Serial-Port Data Output                                             |
| CS_DAC       | Active-Low Serial-Port Chip-Select Input for MAX5734 32-Channel DAC |
| DSP          | Digital Serial-Interface Select Input                               |
| TEMP         | Temperature Sensor Output                                           |
| SENSE1       | Channel 1 PMU Sense Connection                                      |
| FORCE1       | Channel 1 PMU Force Connection                                      |
| PMU1         | Channel 1 Parametric Measurement Connection                         |
| SENSE2       | Channel 2 PMU Sense Connection                                      |
| FORCE2       | Channel 2 PMU Force Connection                                      |
| PMU2         | Channel 2 Parametric Measurement Connection                         |
| SENSE3       | Channel 3 PMU Sense Connection                                      |
| FORCE3       | Channel 3 PMU Force Connection                                      |
| PMU3         | Channel 3 Parametric Measurement Connection                         |
| SENSE4       | Channel 4 PMU Sense Connection                                      |
| FORCE4       | Channel 4 PMU Force Connection                                      |
| PMU4         | Channel 4 Parametric Measurement Connection                         |

Evaluates: MAX9972

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9972EVKIT# | EV Kit |

#Denotes RoHS compliance.

## MAX9972 EV Kit Bill of Materials

|   ITEM | REF_DES                                                                                 |   QTY | MFG PART #                                                                                    | MANUFACTURER                              | VALUE        | DESCRIPTION                                                                                                             |
|--------|-----------------------------------------------------------------------------------------|-------|-----------------------------------------------------------------------------------------------|-------------------------------------------|--------------|-------------------------------------------------------------------------------------------------------------------------|
|      1 | C1-C17                                                                                  |    17 | C1608C0G1H103J080AA; CGA3E2C0G1H103J080AD; GRM1885C1H103JA01                                  | TDK; TDK; MURATA                          | 0.01UF       | CAP; SMT (0603); 0.01UF; 5%; 50V; C0G; CERAMIC                                                                          |
|      2 | C18, C21, C23-C25, C27                                                                  |     6 | GCJ188R71H104KA12; GCM188R71H104K; CGA3E2X7R1H104K080AA; CGA3E2X7R1H104K080AD; CL10B104KB8WPN | MURATA; MURATA; TDK; TDK; SAMSUNG         | 0.1UF        | CAP; SMT (0603); 0.1UF; 10%; 50V; X7R; CERAMIC                                                                          |
|      3 | C19, C20, C26, C29-C32                                                                  |     7 | UMK107BJ105KA; C1608X5R1H105K080AB; CL10A105KB8NNN; GRM188R61H105KAAL                         | TAIYO YUDEN; TDK; SAMSUNG; MURATA         | 1UF          | CAP; SMT (0603); 1UF; 10%; 50V; X5R; CERAMIC                                                                            |
|      4 | C22, C28                                                                                |     2 | C1608X5R1E106M080AC; CL10A106MA8NRNC; GRM188R61E106MA73; ZRB18AR61E106ME01; GRT188R61E106ME13 | TDK; SAMSUNG ELECTRONICS; MURATA;; MURATA | 10UF         | CAP; SMT (0603); 10UF; 20%; 25V; X5R; CERAMIC                                                                           |
|      5 | CHV1-CHV4, CLV1-CLV4, COMPHI, COMPLO, DHV1-DHV4, DLV1-DLV4, DTV1-DTV4, J2-J4, LDV1-LDV4 |    29 | PEC02SAAN                                                                                     | SULLINS                                   | PEC02SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                               |
|      6 | CMPH1-CMPH4, CMPL1-CMPL4, DATA1-DATA4, DUT1-DUT4, RCV1-RCV4                             |    20 | 142-0701-851                                                                                  | JOHNSON COMPONENTS                        | 142-0701-851 | CONNECTOR; END LAUNCH JACK RECEPTACLE; BOARDMOUNT; STRAIGHT THROUGH; 2PINS;                                             |
|      7 | GND, VCC, VEE                                                                           |     3 | 3267                                                                                          | POMONA ELECTRONICS                        | 3267         | CONNECTOR; MALE; PANELMOUNT; STANDARD UNINSULATED BANANA JACK; STRAIGHT; 1PIN                                           |
|      8 | GND2                                                                                    |     1 | 5012                                                                                          | KEYSTONE                                  | N/A          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|      9 | J1                                                                                      |     1 | PEC10DAAN                                                                                     | SULLINS ELECTRONICS CORP                  | PEC10DAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 20PINS                                                              |
|     10 | J16, J51                                                                                |     2 | PBC10SAAN                                                                                     | SULLINS ELECTRONICS CORP                  | PBC10SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 10PINS; -65 DEGC TO +125 DEGC                                       |

Evaluates: MAX9972

## MAX9972 EV Kit Schematic Diagrams (continued)

| ITEM   | REF_DES   |       |   QTY | MFG PART #                                                   | MANUFACTURER                                | VALUE          | DESCRIPTION                                                                                                      |
|--------|-----------|-------|-------|--------------------------------------------------------------|---------------------------------------------|----------------|------------------------------------------------------------------------------------------------------------------|
| 11     | L2, L3    |       |     2 | DFE252012F-100M                                              | MURATA                                      | 10UH           | INDUCTOR; SMT (1008); SHIELDED; 10UH; 20%; 0.95A                                                                 |
| 12     | MH1-MH4   |       |     4 | 9032                                                         | KEYSTONE                                    | 9032           | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                        |
| 13     | R1        |       |     1 | CRCW06031M69FK                                               | VISHAY DALE                                 | 1.69M          | RES; SMT (0603); 1.69M; 1%; +/-100PPM/DEGK; 0.1000W                                                              |
| 14     | R2        |       |     1 | CRCW06031M20FK                                               | VISHAY DALE                                 | 1.2M           | RES; SMT (0603); 1.2M; 1%; +/-100PPM/DEGC; 0.1000W                                                               |
| 15     | R8        |       |     1 | CRCW06031K00FK; ERJ-3EKF1001; CR0603AFX-1001ELF              | VISHAY; PANASONIC; BOURNS                   | 1K             | RES; SMT (0603); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                 |
| 16     | R9        |       |     1 | CRCW06030000ZS; MCR03EZPJ000; ERJ-3GEY0R00; CR0603AJ/-000ELF | VISHAY; ROHMSEMICONDUCTOR; PANASONIC;BOURNS | 0              | RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                                                                      |
| 17     | U1        |       |     1 | MAX40026ATA+                                                 | MAXIM                                       | MAX40026ATA+   | IC; COMP; 280PS HIGH-SPEED COMPARATOR; ULTRA-LOWDISPERSION WITH LVDS OUTPUTS; TDFN8-EP                           |
| 18     | U2        |       |     1 | MAX32625PICO                                                 | MAXIM                                       | MAX32625PICO   | MODULE; BOARD; MAX32625PICO BOARD DESIGN FOR MAX32625 ARM CORTEX-M4F; BOARD; LAMINATED PLASTIC WITH COPPER CLAD; |
| 19     | U3        |       |     1 | MAX1735EUK30+                                                | MAXIM                                       | MAX1735EUK30+  | IC; VREG; NEGATIVE-OUTPUT LOW-DROPOUT LINEAR REGULATOR; SOT23-5                                                  |
| 20     | U4, U8    |       |     2 | MAX1726EUK50+                                                | MAXIM                                       | MAX1726EUK50+  | IC; VREG; ULTRA-LOW IQ LOW-DROPOUT LINEAR REGULATOR; SOT23-5                                                     |
| 21     | U5        |       |     1 | MAX1725EUK+                                                  | MAXIM                                       | MAX1725EUK+    | IC; REG; 12V; ULTRA-LOW IQ; LOW-DROPOUT LINEAR REGULATOR; SOT23-5                                                |
| 22     | U6        |       |     1 | MAX5734AUTN+                                                 | MAXIM                                       | MAX5734AUTN+   | IC; DAC; 32-CHANNEL; 16-BIT; +/-8 MAX INL; VOLTAGE-OUTPUT DAC WITH SERIAL INTERFACE; TQFN56-EP 8X8               |
| 23     | U7        |       |     1 | MAX6126AASA30+                                               | MAXIM                                       | MAX6126AASA30+ | IC; VREF;VOLTAGE REFERENCE;NSOIC8                                                                                |
| 24     | U9        |       |     1 | MAX9972ACCS+                                                 | MAXIM                                       | MAX9972ACCS+   | IC; DRV; QUAD ULTRA-LOW-POWER 300MBPS ATE DRIVER/COMPARATOR; TQFP80-EP 12X12                                     |
| 25     | Z1        |       |     1 | 10-6327-01G                                                  | AAVID                                       | 10-6327-01G    | MACHINE FABRICATED; Q-PUSHPIN; 28.5MMX28.5MMX10MM; BGA SPRING TYPE; BLACK ANNODIZED ALUMINUM                     |
| 26     | PCB       |       |     1 | MAX9972                                                      | MAXIM                                       | PCB            | PCB:MAX9972                                                                                                      |
| 27     | MISC1     | DNI   |     1 | 3025010-03                                                   | QUALTEK ELECTRONICS CORP                    | 3025010-03     | CONNECTOR; MALE; USB-A_MINI-B; USB 4P(A)/M - USB MINI 5P(B)/M; STRAIGHT; 36IN                                    |
| TOTAL  | TOTAL     | TOTAL |   110 |                                                              |                                             |                |                                                                                                                  |

Evaluates: MAX9972

## MAX9972 EV Kit Schematic Diagrams

<!-- image -->

│

Evaluates: MAX9972

## MAX9972 EV Kit Schematic Diagrams (continued)

<!-- image -->

## MAX9972 EV Kit PCB Layout Diagrams

MAX9972 EV Kit PCB Layout-Top Silkscreen

<!-- image -->

Evaluates: MAX9972

│

## MAX9972 EV Kit PCB Layout Diagrams (continued)

MAX9972 EV Kit PCB Layout-Top View

<!-- image -->

│

## MAX9972 EV Kit PCB Layout Diagrams (continued)

MAX9972 EV Kit PCB Layout-Internal 2 (Ground)

<!-- image -->

│

## MAX9972 EV Kit PCB Layout Diagrams (continued)

MAX9972 EV Kit PCB Layout-Internal 3 (VCC)

<!-- image -->

│

## MAX9972 EV Kit PCB Layout Diagrams (continued)

MAX9972 EV Kit PCB Layout-Internal 4 (VEE)

<!-- image -->

│

## MAX9972 EV Kit PCB Layout Diagrams (continued)

MAX9972 EV Kit PCB Layout-Internal 5 (VDD)

<!-- image -->

│

## MAX9972 EV Kit PCB Layout Diagrams (continued)

MAX9972 EV Kit PCB Layout-Bottom View

<!-- image -->

│

## MAX9972 EV Kit PCB Layout Diagrams (continued)

MAX9972 EV Kit PCB Layout-Silkscreen Bottom

<!-- image -->

Evaluates: MAX9972

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION              | PAGES CHANGED   |
|-------------------|-----------------|--------------------------|-----------------|
|                 0 | 12/20           | Release for market intro | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX9972