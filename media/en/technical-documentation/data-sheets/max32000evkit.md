<!-- lastmod 2022-08-03 -->
## MAX32000 Evaluation Kit

## General Description

The MAX32000 evaluation kit (EV kit) is a fully assembled and  tested  printed  circuit  board  (PCB)  that  simplifies evaluation  and  demonstrates  the  functionality  of  the MAX32000,  a  quad-channel  pin  electronics  driver  with calibration comparator and level-setting DACs. Standard 50Ω SMA connectors are included on the EV kit for the inputs and outputs to allow for quick and easy evaluation on the test bench.

The  MAX32000  EV  kit  contains  a  microcontroller  that translates  between  the  SPI  interface  and  USB  to  allow the  user  to  configure  internal  registers  and  modes with  graphical  user  interface  (GUI)  software  running  on a  PC.  The  EV  kit  includes  Windows ®   10-compatible software that provides a simple GUI for configuration of all the MAX32000 registers through SPI. The EV kit is fully assembled and tested at the factory.

This  document  provides  a  list  of  equipment  required  to evaluate  the  device,  straightforward  test  procedure  to verify functionality, description of the EV kit circuit, component list, circuit schematic, and artwork for each layer of the PCB.

## Features

- Low Power at High Speed Maximizes Driver Performance
-  700mW per Channel
-  2.57Gbps at +1V Programmed
- 280ps Typical Rise/Fall Times at +2V (20% to 80%)
- Very Low Timing Dispersion at 50ps (typ)
- Wide Voltage Range from -2V to +6V
- Integrated VHH Programming Mode (4th-Level Drive) up to 13V
-  100nA Low-Leak Mode
- Integrated Functionality Provides Value-Added Features
- Programmable Double Time Constant Cable-Droop Compensation
- Digital Slew-Rate Control for EMI-Sensitive Applications
- Adjustable Output Resistance with 360mΩ Resolution
- 22 DACs to Generate DC Voltage Levels for Control and Monitoring
- 50MHz SPI Interface

Evaluates: MAX32000

## Quick Start

## Required Equipment

This  section  lists  the  recommended  test  equipment  to verify  operation  of  the  MAX32000.  It  is  intended  as  a guide only and some substitutions are possible.

- MAX32000 EV kit
- Windows PC (Windows 10) with one to two USB 2.0 ports available
- Triple-output DC power supply
- +9.25V/500mA
- -5.25V/500mA
- +3.3V/100mA
- Function/pulse generator (recommend differential output high speed up to 1.5GHz)
- High-speed oscilloscope (recommend 5GHz bandwidth)
- Digital multimeter
- SMA/SMA cable as needed for connection to the oscilloscope

## Software and Drivers

The  MAX32000  EV  kit  is  used  in  conjunction  with the Arm ®   Cortex ® -M4F  microcontroller  MAX32625PICO application  platform,  or  'PICO'  board,  to  provide  power and control the device through a software application or GUI.  Users  also  have  the  option  to  connect  using  SPI through their system with the J1 header on the EV kit.

## Install the MAX32000 EV Kit GUI Software

The installation process should take less than 10 minutes after downloading the software package.

- Download the MAX32000 EV kit software from the Maxim Integrated website, run the installation file, and install it.
- Start running the GUI program.

Ordering Information appears at end of data sheet.

Arm and Cortex are registered trademarks of Arm Limited Windows is a registered trademark of Microsoft Corporation.

<!-- image -->

## MAX32000 Evaluation Kit

## Powering the EV Kit

- Set DC supply to +9.25V and connect (through an ammeter if desired) to headers VCC and ground GND on the EV kit. Do not turn on the supply.
- Set DC supply to +3.3V and connect (through an ammeter if desired) to headers VDD and ground GND on the EV kit. Do not turn on the supply.
- Set DC supply to -5.25V and connect (through an ammeter if desired) to headers VEE and ground GND on the EV kit. Do not turn on the supply.
- There are on-board linear regulators to power the MAX32000 VHH and VCTV; connect the jumpers in the default position, as shown in Table 1 and Table 2. Users also have the option to provide the VHH from an external power supply.
- Make sure the shunts of all jumpers are in the default positions, as shown in Table 3.
- Verify that the heatsink is installed and flush on the top of the MAX32000 IC.

## Procedure

This  section  provides  a  step-by-step  guide  to  operating the EV kit and testing the device functions.

Caution: Do not turn on the DC power or function generator  until  all  connections  are  completed.  Connect all power-supply grounds to a single ground terminal.

- 1) Set the function generator to output peak-to-peak amplitude of 400mV with offset +1.2V. Ensure that the outputs are disabled (high impedance). Set the pulse frequency to 20MHz, 50% duty cycle.
- 2) Connect the function generator output to the DATA0 SMA connector on the MAX32000 EV kit with an SMA cable.
- 3) Set the power supply to output +1.2V and connect to the NDATA0 SMA connector on the EV kit with an SMA cable.
- 4) Set the RCV0/NRCV0 to a differential logic-low (i.e., VRCV0 &lt; VNRCV0) to disable the high-impedance output mode.
- 5) Connect the DUT0 SMA connector of the MAX32000 EV kit with a short SMA cable to the high-speed oscilloscope. Set the scope input impedance to 50Ω.
- 6) Verify the correct polarity, voltage, and current limit of all power supplies. Turn on the power supplies and function generator.
- 7) Connect the PC to the on-board MAX32625 PICO microcontroller module on the EV kit using the provided USB cable.
- 8) Select the COM port and click Connect . The MAX32000 GUI should indicate that the EV kit is connected in the status bar (outlined in blue), as shown in Figure 2.
- 9) Put the EV kit into drive mode by setting the register values as shown on the Channel 0-tab seen in Figure 1. In this mode, VDH is set to 3V and VDL to 0V for Channel 0.
- 10)  Click the Write All button to write the data into the MAX32000 registers.
- 11)  Set the oscilloscope to trigger on the DUT0 channel with the trigger level set to 0.5V. Set the time base to 20ns per division. A 0 to 1.5V square wave of 20MHz should appear on the oscilloscope.

Evaluates: MAX32000

Evaluates: MAX32000

Figure 1. MAX32000 GUI Quick Start Settings (Channel 0 Tab)

<!-- image -->

## Detailed Description

## Detailed Description of Software

The  MAX32000  GUI  is  organized  into  six  tabs  for  all level-setting registers and control signal settings, plus the File menu to save and load all these settings. There are identical  tabs  that  control  the  four  different  channels  of the MAX32000. The global tab contains level-setting DAC controls  shared  across  all  four  channels. The  Registers tab consists of all the user registers in the MAX32000.

## Channel Tab

Channel  0,  Channel  1,  Channel  2,  and  Channel  3  are identical  and  control  four  different  MAX32000  channels independently.    These  tabs  contain  level-setting  channel DACs and the QDRV Control Register, as shown in Figure  2.  After  setting  DAC  levels  and  control  signals, click  on  the Write  All button  to  load  data  into  the MAX32000 through the SPI interface.

Figure 2. MAX32000 GUI Description (Channel 0 Tab)

<!-- image -->

Evaluates: MAX32000

## MAX32000 Evaluation Kit

## Level-Setting Channel DACs

The  Channel  DACs  group  box  contains  signal  level  registers  for  VDH,  VDL,  VDT,  OVHV,  and  OVLV  level  settings.  Each  voltage  level  can  be  set  by  entering  value either  in  the  voltage  box  or  hexadecimal  box.  Finer adjustment  can  be  made  by  clicking  on  the  +  or  -  sign of  the  voltage  box.  The  VDHV,  VDLV,  and  VDTV  voltages  have  16,384  steps  corresponding to 14 bits. The OVHV and OVLV voltage have 256 steps corresponding  to  8  bits.  For  all  DACs,  the  calibration window  is  available  by  selecting  Options  |  Change Calibration (Advance Users). The offset code is an integer value between 0 and 255, and the gain code is an integer value between 0 and 63, as shown in Figure 3.

## QDRV Control Register

The QDRV control register is a combination of the Driver, Slew Rate Control, Cable Droop Compensation, and OV Alarm group boxes. Driver output is chosen either automatically or manually by the slide bar in the Driver group box.  In  automatic  mode,  Driver  output  is  selected  from the  output  dropdown  box.  In  manual  mode,  Driver  output is selected based on the control group box settings. Adjustable  driver  output  resistance  is  controlled  by  the Driver  RO  Control  dropdown  box.  Driver  slew  rate  and CDRP are controlled by the Slew Rate Control and CDC dropdown boxes respectively. Checking EN\_OV\_ALARM check box enables the overvoltage alarm setting  in  the respective channel.

## Global Tab

The Global tab contains the Shared DACs, Temperature, and  Comparator  settings.  VHH  and  the  CMPV  DAC's voltage level can be set by entering a value either in the Voltage box or the hexadecimal box. Enabling the temperature alarm and temperature sensor can be controlled in  the  Temperature  Sensor  box.  Shunt  the  TALARM jumper between pins 2 and 3, enable temperature sen-

sor,  and  status  bar  of  the  MAX32000 GUI indicates the Die Temperature.

## Registers Tab

There  are  two  methods  for  configuring  the  MAX32000. The first method is through the GUI,  as shown in Figure 2.  The  second  method  is  through  the  Registers  tab,  as shown in Figure 4. The Registers tab allows execution of the serial commands manually. The Register tab can also be used as a debug tool because it is capable of writing to every register of the MAX32000.

Figure 3. MAX32000 GUI-DAC Calibration Window

<!-- image -->

│

Figure 4. MAX32000 GUI-Registers Tab

<!-- image -->

## Detailed Description of Hardware

The  MAX32000  EV  kit  is  a  fully  assembled  and  tested PCB that evaluates the MAX32000 quad-channel driver with  level-setting  DACs  and  one  common  comparator. The EV kit includes SMA connections for the high-speed digital  I/Os  and  the  MAX32000  pin  driver  outputs.  The MAX32000 EV kit is connected to the computer through the universal serial bus (USB) port.

## Power Supplies

Connect the power supplies using the high-current banana jacks,  VEE  (-5.25V),  VCC  (9.25V),  and  VDD  (3.3V). Common for all the power supplies should be the GND banana jack on the MAX32000 EV kit. All power supplies should  be  within  the  range  specified  in  the  MAX32000 IC  data  sheet.  The  MAX32000  EV  kit  needs  only  three supplies to be connected to the board; all other supplies are generated through regulators on the EV kit board.

## High-Speed Digital I/Os

The  top  edge  and  the  bottom  edge  of  the  PCB  are populated with edge-launch SMA connectors and are the high-speed digital I/Os of the MAX32000. The inputs are terminated internally (nominally 50Ω to DATV\_ or RTV\_) to  the  MAX32000  IC.  It  is  recommended  that  the  CMP and  NCMP  outputs  are  connected  to  50Ω  terminated oscilloscope/logic  analyzer  at  the  end  of  the  attached cable.

The board power supply (VCTV) is the voltage used to terminate the comparator outputs on the MAX32000 IC. Setting VCTV to +1.2V makes the high-speed digital I/Os compatible with LVDS levels.

The high-speed digital inputs (DATA\_/NDATA\_ and RCV\_/ NRCV) are intended for use with a high-speed differential signal  source  such  as  LVDS,  LVPECL,  ECL,  etc.  If  only a  single-ended  stimulus  source  is  available,  a  converter consisting of a 1:1 ratio transformer (balun) can be used to produce a differential pair of inputs for the DATA\_/NDATA\_.

The high-speed digital outputs (CMP/NCMP) are intended for  use  with  a  high-speed  differential  logic  analyzer. These  outputs  are  internally  pulled  up  to  the  VRCV voltage through internal 50Ω resistors. These outputs can be double terminated at the measurement instrument by external 50Ω resistors.

## Pin Driver Outputs

The  quad-pin  driver  output  pins  (DUT\_)  are  accessed through the edge launch SMA connectors, located on the right edge of the PCB. The outputs have a typical output impedance of 50Ω, which can be adjusted by software.

## Test Points

There  are  10  test  points  on  the  EV  kit  to  facilitate performance  analysis  and  circuit  modification.  The  test points are listed in Table 4.

## Device Ground Sense

The  MAX32000  IC  can  sense  the  ground  potential  at the  device  under  test  (DUT).  The  MAX32000  EV  kit  is preconfigured to have the device ground-sense pin (DGS) connected to the ground plane through a 0Ω resistor (R9). If remote sensing is desired, remove R9 and connect the DGS pin to the remote DUT ground.

## Temperature Sensing

The MAX32000 EV kit provides the means to determine the MAX32000 IC's die temperature through the TEMP test point. During operation, the TEMP pin should be  continuously  monitored  to  ensure  that  the  junction temperature does not exceed +150°C, which corresponds with +4.2V. During normal operation, a voltage of 3V to 3.6V is  typical. Another  way  to  monitor  die  temperature is  provided  in  the  MAX32000  GUI.  On  the  Global  tab, enable  the  temperature  sensor  and  temperature  alarm. The Status bar displays the MAX32000 die temperature, as shown in Figure 5.

Figure 5. MAX32000 GUI-Global Tab

<!-- image -->

## MAX32000 Evaluation Kit

## Jumper Settings

Tables 1, 2, and 3 provide a list for jumper settings.

## Table 1. Power Supplies Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                 |
|----------|------------------|-------------------------------------------------------------|
| J2       | 1-2*             | Connects VEE to the negative power-supply input banana jack |
| J2       | Open**           | Disconnects VEE from the negative input power supply        |
| J3       | 1-2*             | Connects VCC to the positive power-supply input banana jack |
| J3       | Open**           | Disconnects VCC from the positive input power supply        |
| J4       | 2-3*             | Connects VHHP to the on-board regulator                     |
| J4       | 1-2              | Connects VHHP to the input banana jack                      |
| J5       | 1-2*             | Connects VDD to the digital power-supply input banana jack  |
| J5       | Open**           | Disconnects VDD from the input power supply                 |
| EN_U6    | 1-2*             | Enables VHHP boost regulator                                |
| EN_U6    | 2-3              | Disables VHHP boost regulator                               |
| EN       | 1-2*             | Enables VCTV voltage regulator                              |
| EN       | 2-3              | Disables VCTV voltage regulator                             |

## Table 2. VCTV Regulator Jumper Settings

|   VCTV (V) | SELA STATE   | SELB STATE   |
|------------|--------------|--------------|
|        1.2 | Unconnected* | 1-2*         |
|        1.5 | 1-2          | Unconnected  |
|        1.8 | Unconnected  | 2-3          |
|        2.5 | Unconnected  | Unconnected  |
|        3.0 | 2-3          | 2-3          |
|        3.1 | 2-3          | 1-2          |
|        3.3 | 2-3          | Unconnected  |
|        4.0 | 1-2          | 2-3          |
|        5.0 | 1-2          | 1-2          |

Evaluates: MAX32000

│

## Table 3. Digital Interface Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                         |
|----------|------------------|-----------------------------------------------------|
| RTV0     | 1-2*             | Connects channel 0 receive termination input to GND |
| RTV0     | Open             | Disconnects channel 0 receive termination           |
| RTV1     | 1-2*             | Connects channel 1 receive termination input to GND |
| RTV1     | Open             | Disconnects channel 1 receive termination           |
| RTV2     | 1-2*             | Connects channel 2 receive termination input to GND |
| RTV2     | Open             | Disconnects channel 2 receive termination           |
| RTV3     | 1-2*             | Connects channel 3 receive termination input to GND |
| RTV3     | Open             | Disconnects channel 3 receive termination           |
| DATV0    | 1-2*             | Connects channel 0 data termination input to GND    |
| DATV0    | Open             | Disconnects channel 0 data termination              |
| DATV1    | 1-2*             | Connects channel 1 data termination input to GND    |
| DATV1    | Open             | Disconnects channel 1 data termination              |
| DATV2    | 1-2*             | Connects channel 2 data termination input to GND    |
| DATV2    | Open             | Disconnects channel 2 data termination              |
| DATV3    | 1-2*             | Connects channel 3 data termination input to GND    |
| DATV3    | Open             | Disconnects channel 3 data termination              |
| OVALARM  | 1-2              | Connect to external pullup resistor                 |
| OVALARM  | 2-3*             | Connect to picoboard using internal pullup resistor |
| TALARM   | 1-2              | Connect to external pullup resistor                 |
| TALARM   | 2-3*             | Connect to picoboard using internal pullup resistor |

## Table 4. Test Points and Their Functions

| TEST POINT   | DESCRIPTION                              |
|--------------|------------------------------------------|
| RSTB         | Active-Low Serial-Port Reset Input       |
| LOADB        | Active-Low Serial-Port Load Input        |
| CSB          | Active-Low Serial-Port Chip-Select Input |
| SCLK         | Serial-Port Clock Input                  |
| DIN          | Serial-Port Data Input                   |
| DOUT         | Daisy Chain Output                       |
| ENVHHB       | Active-Low High Voltage Enable Input     |
| OVALARM      | Overvoltage Alarm Output                 |
| TALARM       | Temperature Alarm Output                 |
| TEMP         | Temperature Sensor Output                |

Evaluates: MAX32000

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX32000EVKIT# | EV Kit |

# Denotes RoHS compliant.

│

## MAX32000 Evaluation Kit

## MAX32000 EV Kit Bill of Materials

| DESCRIPTION                            | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R   | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 25V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R      | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.047UF; 50V; TOL=10%; MODEL=X7R; TG=-55 DEGC TO +125 DEGC; TC=X7R   | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S   | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO   | CAPACITOR; SMT (1210); CERAMIC CHIP; 22UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R   | CAPACITOR; SMT; 0402; CERAMIC; 4700pF; 50V; 5%; X7R; - 55degC to + 125degC; 0 +/-15% degC MAX.   | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 50V; TOL=10%; MODEL=_MK SERIES; TG=-55 DEGC TO +85 DEGC   | CONNECTOR; END LAUNCH JACK RECEPTACLE; BOARDMOUNT; STRAIGHT THROUGH; 2PINS;   | CONNECTOR; MALE; THROUGH HOLE; PIN STRIP HEADER; STRAIGHT; 2PINS   | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS   | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC   |
|----------------------------------------|-----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|--------------------------------------------------------------------|-------------------------------------------------------------|------------------------------------------------------------------------------------|
| VALUE                                  | 0.01UF                                                                                        | 10UF                                                                                          | 0.047UF                                                                                                   | 2.2UF                                                                                        | 0.1UF                                                                                              | 22UF                                                                                        | 4700PF                                                                                           | 1UF                                                                                                 | 142-0701-851                                                                  | 929400-01-02- RK                                                   | PEC03SAAN                                                   | PBC03SAAN                                                                          |
| MANUFACTURER                           | KEMET;MURATA; TDK;SAMSUNG ELECTRONIC;TAIYO YUDEN                                              | TDK;SAMSUNG ELECTRONICS; MURATA;;MURATA                                                       | KEMET;MURATA; MURATA;TDK                                                                                  | MURATA                                                                                       | MURATA;MURATA; TDK                                                                                 | MURATA;SAMSUNG ELECTRO- MECHANICS;TA                                                        | KEMET                                                                                            | TAIYO YUDEN;TDK; SAMSUNG;MURATA                                                                     | JOHNSON COMPONENTS                                                            | 3M                                                                 | SULLINS                                                     | SULLINS                                                                            |
| QTY MFG PART # ; DNP--> DO NOT PROCURE | 13 C0402C103K5RAC; GRM155R71H103KA88; C1005X7R1H103K050BE; CL05B103KB5NNN;UMK105B7103KV       | 4 C1608X5R1E106M080AC;CL10A106MA8NRNC;GRM188 R61E106MA73;ZRB18AR61E106ME01;GRT188R61E106 ME13 | 1 C0603C473K5RAC;GRM188R71H473KA61;GCM188R71 H473KA55;CGA3E2X7R1H473K080AA                                | 1 GRM188C71E225KE11                                                                          | 7 GCJ188R71H104KA12; GCM188R71H104K; CGA3E2X7R1H104K080AA                                          | 2 GRM32ER71E226KE15; CL32B226KAJNFN; CL32B226KAJNNW; TMK325B7226KM                          | 1 C0402C472J5RAC                                                                                 | 3 UMK107BJ105KA;C1608X5R1H105K080AB;CL10A105K B8NNN;GRM188R61H105KAAL                               | 22 142-0701-851                                                               | 8 929400-01-02-RK                                                  | PEC03SAAN                                                   | 4 PBC03SAAN                                                                        |
| REF_DES                                |                                                                                               | C22, C28                                                                                      |                                                                                                           |                                                                                              | C27,                                                                                               |                                                                                             |                                                                                                  |                                                                                                     | DATA0-DATA3, NCMP,                                                            | DATV0- RTV0-RTV3                                                   | SELB                                                        | TALARM                                                                             |
| DO NOT INSTALL(PACKOUT)                | C1-C13                                                                                        | C16,                                                                                          | C15                                                                                                       | C17                                                                                          | C23-C25, C31                                                                                       | C21                                                                                         | C20                                                                                              | C30, C32                                                                                            | CMP, DUT0-DUT3, NDATA0-NDATA3, NRCV0-NRCV3, RCV0-RCV3                         | DATAV3, DATV2,                                                     | 3 EN, SELA,                                                 | EN_U6, J4, OVALARM,                                                                |
| ITEM NOTE: DNI-->                      | 1                                                                                             | 2 C14,                                                                                        | 3                                                                                                         | 4                                                                                            | 5 C18, C29,                                                                                        | 6 C19,                                                                                      | 7                                                                                                | 8 C26,                                                                                              | 9                                                                             | 10                                                                 | 11                                                          | 12                                                                                 |

Evaluates: MAX32000

│

## MAX32000 EV Kit Bill of Materials (continued)

| DESCRIPTION   | 3267 CONNECTOR; MALE; PANELMOUNT; STANDARD UNINSULATED BANANA JACK; STRAIGHT; 1PIN   | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 20PINS   | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS   | 3.3A TOL=+/-20%; 3.3UH; CORE; FERRITE SMT; INDUCTOR;   | 0.95A 20%; 10UH; SHIELDED; (1008); SMT INDUCTOR;   | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON   | FILM THICK 0.10W; 100PPM; 1%; 1K; 0603; RESISTOR;   | FILM THICK 0.10W; 100PPM; 1%; OHM; 1K 0603; RESISTOR;   | FILM THICK 0.10W; 100PPM; 1%; OHM; 130K 0603; RESISTOR;   | FILM THICK 0.0125W; 100PPM; 1%; OHM; 10K 0603; RESISTOR;   | FILM THICK 0.10W; JUMPER; 0%; OHM; 0 0603; RESISTOR;   | EVKIT PART - IC; MAX32000; PACKAGE OUTLINE DRAWING: 21- 0162; PACKAGE CODE: C64E+9R; PACKAGE LAND PATTERN: 90- 0164   | MODULE; BOARD; MAX32625PICO BOARD DESIGN FOR MAX32625 ARM CORTEX-M4F; BOARD; LAMINATED PLASTIC WITH COPPER CLAD;   | IC; REG; 1.7V-5.5VIN; 1A LOW NOISE LDO LINEAR REGULATORS; TDFN10-EP   |
|---------------|--------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|-------------------------------------------------------------|--------------------------------------------------------|----------------------------------------------------|-----------------------------------------------------------------------------|-----------------------------------------------------|---------------------------------------------------------|-----------------------------------------------------------|------------------------------------------------------------|--------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| VALUE         |                                                                                      | N/A                                                                                                                       | PEC10DAAN                                                    | PEC02SAAN                                                   | 3.3UH                                                  | 10UH                                               | 9032                                                                        | 1K                                                  | 1K                                                      | 130K                                                      | 10K                                                        | 0                                                      | MAX32000                                                                                                              | MAX32625PIC O                                                                                                      | MAX38903AAT B+                                                        |
| MANUFACTURER  | ELECTRONICS POMONA                                                                   | KEYSTONE                                                                                                                  | CORP ELECTRONICS SULLINS                                     | SULLINS                                                     | COILCRAFT                                              | MURATA                                             | KEYSTONE 9032                                                               | DALE;PANASONIC VISHAY                               | BOURNS                                                  | PANASONIC                                                 | SFERNICE VISHAY                                            | VISHAY DALE;ROHM; PANASONIC                            | MAXIM                                                                                                                 | MAXIM                                                                                                              | MAXIM                                                                 |
| # PART MFG    | 3267                                                                                 | 5012                                                                                                                      | PEC10DAAN 1                                                  | PEC02SAAN SD43-332ML 1                                      |                                                        | DFE252012F-100M 3                                  |                                                                             | CRCW06031K00FK;ERJ-3EKF1001 CR0603-FX-1001ELF 1     |                                                         | ERJ-3EKF1303 1                                            | CHPHT0603K1002FGT 1                                        | CRCW06030000ZS;MCR03EZPJ000;ERJ-3GEY0R00 1             | MAX32000                                                                                                              | MAX32625PICO                                                                                                       | MAX38903AATB+ 1                                                       |
| QTY           | 6                                                                                    | 3                                                                                                                         |                                                              | 3                                                           |                                                        |                                                    | 4                                                                           | 3                                                   |                                                         |                                                           | R7                                                         |                                                        | 1                                                                                                                     | 1                                                                                                                  |                                                                       |
| ITEM REF_DES  | 13 GND, GND1, VCC, VDD, VEE, VHHP                                                    | 14 GND2, TEMP, VHHP_BOOST                                                                                                 | 15 J1                                                        | 16 J2, J3, J5                                               | 17 L1                                                  | 18 L2, L4, L5                                      | 19 MH1-MH4                                                                  | 20 R1, R2, R8                                       | 21 R5                                                   | 22 R6                                                     | 23                                                         | 24 R9                                                  | 25 U1                                                                                                                 | 26 U2                                                                                                              | 27 U3                                                                 |

│

## MAX32000 EV Kit Bill of Materials (continued)

<!-- image -->

| DESCRIPTION    | EVKIT PART - IC; CONV; 2.7V TO 18V; BOOST CONVERTER WITH 0.1MICROAMPERE TRUE SHUTDOWN; SHORT CIRCUIT PROTECTION AND SELECTABLE INPUT CURRENT LIMIT; PKG. OUTLINE: 21-0137; PKG. CODE: T1433-2C; LAND PATTERN: 90- 0063; TDFN14-EP   | IC; VREF; ULTRA HIGH PRECISION; ULTRA LOW NOISE VOLTAGE REFERENCE; SOIC8 150MIL; VOUT=2.5V, 3PPM/DEGC MAX TEMPCO; NSOIC8   | MACHINE FABRICATED; Q-PUSHPIN; 28.5MMX28.5MMX10MM; BGA SPRING TYPE; BLACK ANNODIZED ALUMINUM   | PCB:MAX32000 USB MINI   | CONNECTOR; MALE; USB-A_MINI-B; USB 4P(A)/M - 5P(B)/M; STRAIGHT; 36IN   | PACKAGE OUTLINE 0603 RESISTOR   |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|-------------------------|------------------------------------------------------------------------|---------------------------------|
| VALUE          | MAX17250ATD +                                                                                                                                                                                                                       | MAX6126AASA 25+                                                                                                            | 10-6327-01G PCB                                                                                | 3025010-03              | OPEN                                                                   |                                 |
| MANUFACTURER   | MAXIM                                                                                                                                                                                                                               | MAXIM                                                                                                                      | AAVID MAXIM                                                                                    | QUALTEK ELECTRONICS     | N/A                                                                    |                                 |
| QTY MFG PART # | 1 MAX17250ATD+                                                                                                                                                                                                                      | 1 MAX6126AASA25+                                                                                                           | 1 10-6327-01G 1 MAX32000                                                                       | 1 3025010-03            | N/A                                                                    | 0 105                           |
| REF_DES        | U4                                                                                                                                                                                                                                  | U5                                                                                                                         | Z1                                                                                             | DNI PCB                 | MISC1 DNP                                                              | R3, R4                          |

## MAX32000 EV Kit Schematic

<!-- image -->

│

Evaluates: MAX32000

## MAX32000 EV Kit Schematic (continued)

Evaluates: MAX32000

<!-- image -->

│

## MAX32000 EV Kit PCB Layout Diagrams

MAX32000 EV Kit-Top Silkscreen

<!-- image -->

│

## MAX32000 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX32000 EV Kit-Top

│

## MAX32000 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX32000 EV Kit-GND

│

## MAX32000 EV Kit PCB Layout Diagrams (continued)

MAX32000 EV Kit-V CC

<!-- image -->

│

## MAX32000 EV Kit PCB Layout Diagrams (continued)

MAX32000 EV Kit-V EE

<!-- image -->

│

## MAX32000 EV Kit PCB Layout Diagrams (continued)

MAX32000 EV Kit-V DD

<!-- image -->

│

## MAX32000 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX32000 EV Kit-Bottom

│

## MAX32000 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX32000 EV Kit-Bottom Silkscreen

│

## MAX32000 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX32000