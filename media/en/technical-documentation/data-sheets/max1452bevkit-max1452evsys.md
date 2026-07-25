<!-- lastmod 2022-08-04 -->
## MAX1452 Evaluation System

## General Description

The MAX1452 evaluation system (EV system) includes a MAX32625PICO board and the MAX1452 evaluation kit (EV  kit).  Windows ®   10  compatible  software  provides  a user-friendly interface for exercising the feature of the IC. MAX1452 EV kit includes interface circuitry to communicate between the IC and the MAX32625 PICO board and it comes with the 16-pin SSOP MAX1452AAE+ installed.

## MAX1452 EV System Files

| FILE               | DESCRIPTION    |
|--------------------|----------------|
| MAX1452EVKit.exe   | PC GUI Program |
| MAX1452Adapter.bin | Firmware       |

## MAX1452 EV Kit Photo

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

Evaluates: MAX1452

## Benefits and Features

- USB Powered
- Sensor Socket on the EV board
- On-Board ADC to read the OUT Voltage of MAX1452
- Windows 10-compatible software
- User-Friendly Graphical User Interface (GUI)
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX1452 Evaluation System

## Quick Start

## Required Equipment

- MAX1452 EV system (USB cable included)
- Windows 10 PC with two spare USB port
- Digital Multimeter

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV system software. Text in bold and under -lined refers to items from the Windows operating system.

## Procedure

The EV system is fully tested and ships in two pieces: the MAX1452 EV kit board and the MAX32625PICO. Follow the steps to verify board operation.

- 1) Visit www.maximintegrated.com/evkitsoftware to download the  latest  version  of  the  EV  system  software, MAX1452.zip. Save the EV system software to a temporary folder and uncompress the ZIP file.
- 2) Install the EV system software on your computer by running the MAX1452EVkit.exe program inside the temporary folder. The program files are copied and icons are created in the Windows Start | Programs menu.
- 3) Configure the MAX1452 in digital mode. Verify that all the jumpers (JU1-JU3) are in their default positions, as shown in Table 1.
- 4) Plug the MAX32625PICO board into the EV kit.
- 5) Connect  the  USB  cable  from  the  PC  to  the  MAX32625PICO  board.  LED  D2  on  the  MAX32625PICO begins to blink green.
- 6) When the EV kit GUI is launched, select the right COM Port  selection from  the  window  appears,  select  the right COM port from the Port Collection window and click Connect . (See Figure 1).
- 7) A delay of a few seconds is possible for the GUI to read all the EEPROM values. Wait until the main window appears.
- 8) Click Read T-index and  verify  that  the  temperature reading matches the current room temperature.
- 9) Select VDD from the Signal drop-down list in the Out -put MUX group box, and select the duration to 4.53s.
- 10)  Connect DMM to  OUT  test  point,  click  the Enable Outpu t  button  and  verify  that  the  reading  value  is approximately 5V.
- 11)  Remove the shunt on JU3 (UNLOCK pin to GND) to enter  the  analog  mode,  and  remove  JU1  to  restart the VDD supply voltage and restore it. It is not pos -sible to communicate with MAX1452 when it is in analog mode.

Figure 1. Port selection window

<!-- image -->

## Evaluates: MAX1452

## Detailed Description of Software

The MAX1452 EV system software enables full access to the MAX1452 registers, flash EEPROM, configuration settings, and special calibration functions. MAX1452 EV kit allows users to control and compensate the MAX1452 based sensor-compensation circuits.

## Software Start up

Configure MAX1452 in digital mode to launch the software. Digital mode can be enabled either by having the Control Register (Secure Lock) function set to zero, or by asserting the Un-Lock pin high. The Un-lock pin can be asserted on the EV kit board by installing Jumper, J3. In this document,  all  GUI  operations  are  performed  in  digital  mode, also referred as Calibration Operation Mode .

A  delay  of  a  few  seconds  is  possible  for  the  GUI  to read  all register  values  of flash  EEPROM , Splash Window (See Figure 2) is shown while reading EEPROM. Communications and baud rate synchronized  when  the GUI is started. The MAX1452 is ready to process commands from the PC.

Figure 2. MAX1452 EV kit GUI

<!-- image -->

│

## MAX1452 Evaluation System

Note: All DAC register updates from the flash EEPROM are suspended when IC is in digital mode, temperature index  analog  to  digital  conversions  continue  but  do  not redirect  the  tables  index  pointer  automatically,  and  the analog output is tri-stated  unless  commanded to output one of several different internal voltages.

## System Power

To power off the system, slide off the System Power, slide on  the System  Power button  to  power  up  the  system. System  Power  is  a  default  in On .  Communications  and baud rate are synchronized when System Power is slide on.

## Register Setting Tab

The user can edit all the parameters with a white window area using the software. The parameters can be edited by adding a new value in the edit box, selecting from a dropdown list , or by the click of a button. The revised value is written  to  the  corresponding  MAX1452  register  automatically. All entries can be in hexadecimal or decimal format.

## FSODAC, FSOTCDAC, ODAC, and OTCDAC

Values  in  each  one  of  the FSODAC , FSOTCDAC , ODAC ,  and OTCDAC registers  can  be  changed  by  the corresponding  block,  as  shown  in  Figure  3.  The  sign bit  does  not  apply  to  FSODAC  and  FSOTCDAC.  The Configuration  Register value  is  updated  automatically as the ODAC and OTCDAC sign bits are changed. Values for these parameters can be selected to be in decimal or hexadecimal format.

## IRO and PGA

The IRO and PGA control block set values of IRO (including IRO  sign)  and  PGA  values.  The Configuration  Register value  is  updated  automatically  as  the  ODAC  and  the OTCDAC sign bits are updated. Values for these parameters can be selected to be in decimal or hexadecimal format.

## Sensor Polarity

This  button  corresponds  to  the PGA  sign bit  in  the Configuration Register . To invert the polarity of the input

Figure 3. Register Controls

<!-- image -->

signal,  press  to  switch  to  negative.  The Configuration Register value is updated automatically as the PGA sign bit is changed.

## Functional Buttons

The Update  Registers  from  Flash button  updates  all DAC and configuration registers from the flash memory of MAX1452. FSODAC and ODAC are updated from the lookup tables' locations pointed to by the FSODAC/ODAC index. It is important to note that the control program does automatically update the registers on the power-up of the EV kit or the start of the GUI. Upon powering up a preprogrammed device ,  the  user  should  execute Update Registers from Flash in order to update the values in the value display boxes.

The Copy Registers to Flash button copies the register values  displayed  on  the  screen  to  the  flash  memory  of the DUT. All 176 locations of the FSODAC lookup table in the flash memory are filled with the value in the FSODAC register display box shown on the GUI. All 176 locations of the ODAC lookup table in the flash memory are filled with the value in the ODAC register display box shown on the GUI. All previously written flash data is lost.

The Read T-Index button reads the internal temperature ADC and displays the return value in decimal format. The T-Index value  is  applied  to  the  temperature  conversion formula  given  in  the  MAX1452  IC  data  sheet  and  the resulting value (in °C) is displayed.

## Output Mux

Select  the  IC  output  signal  from  the  Signal  drop-down list within the Output MUX group box. Refer to Table 15 (ALOC definition) in the MAX1452 IC datasheet for more information about the available signals.

Select the duration for which the selected Signal remains available  on  the  OUT/DIO  pin  from  the Duration dropdown list. A readout device (voltmeter) is required to read the output.

Press the Enable Output button  to  output  the  selected Signal onto the OUT pin.

## User Data

There  are  52  bytes  available  for  user  data  in  the  flash memory. This data can be rewritten several times and provides a means for storing serial numbers, manufacturing date, test result data, etc. By clicking the Set button, any data typed in the edit box will be written to flash memory immediately.

│

## MAX1452 Evaluation System

## Configuration Register

The Configuration Register Value displays the current value of the configuration register.

The Configuration Register Setting group box can be used to set CLK1M output driver , Oscillator frequency and external RISRC and RSTC . It is not recommended to change the factory  preset Oscillator  frequency (1MHz nominal).

The Secure  Lock  status can  be  read  and  write.  By selecting Enable , Secure Lock is  set  (CL[7:0] = 0xFF), Secure  Lock  is  disabled  (CL[7:0]  =  0x00)  by  selecting Disable .

## Flash Tab

The Flash tab sheet (Figure 5) is used to read or modify the contents of the internal flash memory of MAX1452.

To  read  the  flash  memory,  press  the Read  from  DUT Flash button. The contents of the FSODAC and ODAC

Evaluates: MAX1452

lookup tables are shown in the FSODAC/ODAC Lookup Table . The user can use the Decimal button to switch the values  in  the FSODAC/ODAC  Lookup  Table between hexadecimal  format  and  decimal  format.  The  CONFIG, OTCDAC,  FSOTCDAC  and  the  CONTROL  LOCATION flash memory values are shown in the corresponding edit boxes at the left. The general-purpose user bytes is displayed in the User Data memo box.

Press the Save Flash to File button to save the contents of the flash to a file. The user is prompted for a file name.

There are two ways to modify the contents of the flash memory:

- 1) Manually change the contents on this tab sheet and press Enter button to write the contents to the active device.
- 2) Press the Load Flash from File button to copy the contents of  a  file  to  the  flash  memory  of  the  active device. The user is prompted for a file name.

Figure 4. MAX1452 EV System Software Main Window (Register Settings Tab)

<!-- image -->

│

## MAX1452 Evaluation System

## Evaluates: MAX1452

Figure 5. MAX1452 EV System Software Main Window (Flash Tab)

<!-- image -->

## Compensation Tab

The Compensation tab  can  compensate  and  program the  MAX1452  sample. The  compensation  tab  simplifies the  process  of  compensating  virtually  any  sensor  connected to a MAX1452 EV kit. The software walks the user through a series of steps designed to calculate the correction coefficients needed for compensation. Once the coefficients are calculated, the flash tables are programmed, and the user now has a compensated sensor.

The  procedure  is  performed  by  the  compensation  software with the following steps.

- 1) Start Compensation, load initial values into respective registers.
- 2) Set Reference Temperature.
- 3) Set Pressure to P MAX .
- 4) Measure the Output Voltage V OUT  (P MAX ).
- 5) Set the Pressure to P MIN .
- 6) Measure the Output Voltage V OUT  (P MIN ).
- 7) Measure the Current V BRIDGE .
- 8) Calculate Current Span = V OUT  (P MAX ) - V OUT  (P MIN ).
- 9) Calculate  the  Ideal  V BRIDGE   =  Current  V BRIDGE   x Target\_span/Current span.
- 10)  Use the FSODAC to set the ideal V BRIDGE .
- 11) Use the Offset DAC to set output to desired offset.
- 12)  Set the Next temperature.
- 13)  Repeat the steps 3-11.
- 14)  After the sensor has been calibrated at two temperature points, the entire table is compiled using linear interpolation.
- 15)   Store the Compiled tables into Flash.
- 16)   Stop Compensation

To start the Compensation process, some of the parameters have to be determined and set in the corresponding locations:

Absolute Error: Accuracy required

Target Span: This will normally be 4.000V

Target Offset: This will normally be 0.5V

## MAX1452 Evaluation System

## Initial values

There  are  default  coefficients  that  are  loaded  into  the registers (e.g. based on mean values of Offset, FSO, and Bridge Resistance) and serve as the compensation starting point. This can speed up the Compensation process. There are two ways to determine an initial value set:

- 1) If  the  performance  of  the  sensor  is  not  known,  it  is possible to enter the start values directly into the registers,  and  then  see  the  effects  of  these  values  by selecting Display PGA output and Display Bridge Voltage in the Register tab. If the output is within reasonable limits, the user can use it as initial values to start the Compensation procedure.
- 2) If the performance of the sensor is known and a starting set has already been derived, the user can Load values from the file.

Evaluates: MAX1452

Detailed Procedure for calibration process is described in following flow charts. See Figures 7 and 8. The calibration process  indicated  a  recommended  method  for  calibrating sensors in association with MAX1452. Filled in initial values and target accuracy, span, and offset, the program starts  with  the  first  temperature  point  and  will  repeat the  same  procedure  for  the  second  temperature.  After calibrating MAX1452 at two temperature points, the GUI calculates and fills in the FSODAC and ODAC and values of the rest of the 174 temperature index.

Figure 6. MAX1452 EV System Software Main Window (Compensation Tab)

<!-- image -->

│

## MAX1452 Evaluation System

Evaluates: MAX1452

Figure 7. Detailed Procedure for calibration process (Page 1)

<!-- image -->

│

## MAX1452 Evaluation System

Evaluates: MAX1452

Figure 8. Detailed Procedure for calibration process (Page 2)

<!-- image -->

│

## MAX1452 Evaluation System

## ADC Reading Tab

MAX1452EV  kit  has  an  on-board  16-bit  ADC  device (MAX1134)  to  read  the  voltage  of  the  OUT  signal  of MAX1452 while in analog mode. The ADC Reading tab sheet  has  a Scope to  display  the  output  of  the  ADC. When the IC is operating in analog mode, slide on ADC Power to enable ADC reading. Click Capture to start one time reading of ADC samples defined by the selection of the Number  of  Samples .  Check  the Auto  Read  OUT checkbox  to  start  the  continuous ADC  conversion.  The Scope receives  new  ADC  values  approximately  every 1ms. Note: Please only enable ADC Power when IC in analog mode , do not turn on ADC reading when IC in digital  mode ,  this  is  because  the  multiplexer  switches inside MAX1452 are typically 2kΩ and therefore can not drive low impedance loads on the OUT pin.

Evaluates: MAX1452

## Detailed Description of Hardware

The  MAX1452  EV  system  includes  a  MAX32625PICO and MAX1452 EV board. The EV system also includes Windows 10 compatible software that provides a simple graphical user interface (GUI) for exercising the features of  the  IC.  The  EV  board  includes  interface  circuitry  to communicate between the IC and MAX32625PICO board. The EV board comes installed with a MAX1452AAE+ in a 16-pin SSOP package.

The EV system utilizes the  MAX32625PICO  Arm Cortex-M4 microcontroller to interface with the GUI and optionally provides power to the MAX1452. MAX1452 EV board contains jumpers to test MAX1452 in both analog and digital mode. A list of all the jumpers and their respective functions as shown in Table 1.

Figure 9. MAX1452 EV System Software Main Window (ADC Reading Tab)

<!-- image -->

│

## MAX1452 Evaluation System

## Powering the EV system

The MAX1452 EV system is powered directly from the MAX32625PICO through USB to Micro USB cable. JU1 must be  connected  to  supply  power  from  MAX32625PICO.  3.3V  jumper  must  be  connected  for  communication  between MAX32625PICO to the MAX1452 IC.

## Table 1. Description of Jumpers

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                              |
|----------|------------------|--------------------------------------------------------------------------|
| JU1      | 1-2*             | The On-board LDO provide 5V output to the EV System                      |
| JU1      | Open             | Disconnect the output of the on-board LDO                                |
| JU2      | 1-2              | Connect DIO to V OUT for single- pin programming                         |
| JU2      | Open*            | Disconnect DIO to V OUT                                                  |
| JU3      | 1-2*             | Unlock MAX1452 digital interface and place the part in digital mode      |
| JU3      | Open             | Unlock pin low and set secure lock byte to place the part in analog mode |
| 1.8V     | 1-2              | MAX32625PICO board provides 1.8V output                                  |
| 1.8V     | Open*            | Disconnect output of 1.8V                                                |
| 3.3V     | 1-2*             | MAX32625PICO board provides 3.3V output to the EV system                 |
| 3.3V     | Open             | Disconnect the output 3.3V of MAX32625PICO board                         |

Evaluates: MAX1452

## Ordering Information

| PART           | TYPE                              |
|----------------|-----------------------------------|
| MAX1452EVSYS#  | EV System (EV kit + Master Board) |
| MAX1452BEVKIT# | Rev B EV kit                      |
| MAX32625PICO#  | Master Board                      |

# Denotes RoHS compliant

│

## MAX1452BEVKIT# Bill of Materials

|   ITEM | REF_DES                |   QTY | MFG PART #                                                                                | MANUFACTURER                                   | VALUE          | DESCRIPTION                                                                                                        |
|--------|------------------------|-------|-------------------------------------------------------------------------------------------|------------------------------------------------|----------------|--------------------------------------------------------------------------------------------------------------------|
|      1 | 1.8V, 3.3V, JU1-JU3    |     5 | PEC02SAAN                                                                                 | SULLINS                                        | PEC02SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                          |
|      2 | C1, C11, C14, C16, C22 |     5 | C0402C105K8PAC; CC0402KRX5R6BB105                                                         | KEMET; YAGEO                                   | 1UF            | CAP; SMT (0402); 1UF; 10%; 10V; X5R; CERAMIC                                                                       |
|      3 | C2-C9                  |     8 | GRM155R71E104KE14; C1005X7R1E104K050BB; TMK105B7104KVH; CGJ2B3X7R1E104K050BB              | MURATA;TDK; TAIYO YUDEN; TDK                   | 0.1UF          | CAP; SMT (0402); 0.1UF; 10%; 25V; X7R; CERAMIC                                                                     |
|      4 | C10, C20               |     2 | C0402C475M7PAC; GRM155R60G475M; GRM155R60J475ME47                                         | KEMET; MURATA; MURATA                          | 4.7UF          | CAP; SMT (0402); 4.7UF; 20%; 4V; X5R; CERAMIC                                                                      |
|      5 | C12, C13, C21, C23-C26 |     7 | GRM155R61A106ME44; GRM155R61A106ME11; 0402ZD106MAT2A; CL05A106MP5NUNC                     | MURATA; MURATA; AVX; SAMSUNG                   | 10UF           | CAP; SMT (0402); 10UF; 20%; 10V; X5R; CERAMIC                                                                      |
|      6 | C15                    |     1 | GRM155R60J106ME44; GRM155R60J106ME47; C1005X5R0J106M050BC; CL05A106MQ5NUN; C0402C106M9PAC | MURATA;MURATA; TDK; SAMSUNG ELECTRONICS; KEMET | 10UF           | CAP; SMT (0402); 10UF; 20%; 6.3V; X5R; CERAMIC                                                                     |
|      7 | C17                    |     1 | T520B227M006ATE045; TCJB227M006R0200                                                      | KEMET; AVX                                     | 220UF          | CAP; SMT (3528); 220UF; 20%; 6.3V; TANTALUM                                                                        |
|      8 | C18                    |     1 | GRM188R60G476ME15                                                                         | MURATA                                         | 47UF           | CAP; SMT (0603); 47UF; 20%; 4V; X5R; CERAMIC                                                                       |
|      9 | C19                    |     1 | GRM188R60J476ME15                                                                         | MURATA                                         | 47UF           | CAP; SMT; 47UF; 20%; 6.3V; X5R; CERAMIC CHIP;                                                                      |
|     10 | D1                     |     1 | BAT54                                                                                     | ON SEMICONDUCTOR                               | BAT54          | DIODE; SCH; SMT (SOT-23); PIV=30V; IF=0.2A                                                                         |
|     11 | GND1-GND3              |     3 | 5001                                                                                      | KEYSTONE                                       | N/A            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|     12 | H1, H2                 |     2 | PPPC101LFBN-RC                                                                            | SULLINS ELECTRONICS CORP.                      | PPPC101LFBN-RC | CONNECTOR; FEMALE; THROUGH HOLE; HEADER CONNECTOR; STRAIGHT; 10PINS                                                |
|     13 | L1                     |     1 | LQH32CN220K23                                                                             | MURATA                                         | 22UH           | INDUCTOR; 1210; 22UH; +/-10%; 0.25A; -40DEGC TO +85DEGC                                                            |
|     14 | MTH1-MTH4              |     4 | 9032                                                                                      | KEYSTONE                                       | 9032           | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                          |
|     15 | Q1, Q2                 |     2 | FDS8958B                                                                                  | ON SEMICONDUCTOR                               | FDS8958B       | TRAN; DUAL N AND P-CHANNEL POWER TRENCH MOSFET; DCH; SO-8; PD-(2W); I-(N+6.4A; P-4.5A); V-(N+30V; P+30V)           |
|     16 | R3-R6                  |     4 | ERJ-2GE0R00                                                                               | PANASONIC                                      | 0              | RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                                                        |
|     17 | R7                     |     1 | CRCW04024K70FK; MCR01MZPF4701                                                             | VISHAY DALE; ROHM SEMICONDUCTOR                | 4.7K           | RES; SMT (0402); 4.7K; 1%; +/-100PPM/DEGC; 0.0630W                                                                 |
|     18 | R8                     |     1 | ERJ-2RKF5100                                                                              | PANASONIC                                      | 510            | RES; SMT (0402); 510; 1%; +/-100PPM/DEGC; 0.1000W                                                                  |
|     19 | R9                     |     1 | ERA-2AEB113                                                                               | PANASONIC                                      | 11K            | RES; SMT (0402); 11K; 0.10%; +/-25PPM/DEGC; 0.0630W                                                                |
|     20 | R10                    |     1 | ERJ-2RKF1004                                                                              | PANASONIC                                      | 1M             | RES; SMT (0402); 1M; 1%; +/-100PPM/DEGC; 0.1000W                                                                   |

Evaluates: MAX1452

## MAX1452BEVKIT# Bill of Materials (continued)

| ITEM   | REF_DES   |     |   QTY | MFG PART #                       | MANUFACTURER               | VALUE             | DESCRIPTION                                                                                                                                      |
|--------|-----------|-----|-------|----------------------------------|----------------------------|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| 21     | R11       |     |     1 | ERJ-2RKF3402                     | PANASONIC                  | 34K               | RES; SMT (0402); 34K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                |
| 22     | R12, R15  |     |     2 | CRCW040210K0FK; RC0402FR-0710KL  | VISHAY DALE; YAGEO PHICOMP | 10K               | RES; SMT (0402); 10K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                |
| 23     | R13       |     |     1 | CRCW0402100KFK; RC0402FR-07100KL | VISHAY;YAGEO               | 100K              | RES; SMT (0402); 100K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                               |
| 24     | R14       |     |     1 | ERJ-2RKF3002                     | PANASONIC                  | 30K               | RES; SMT (0402); 30K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                |
| 25     | RL1, RL2  |     |     2 | 3570-1333-053                    | COMUS INTERNATIONAL        | 3570-1333-053     | RELAY; SPST; 3570 1333 SERIES; GENERAL PURPOSE SIP; WITH DIODE; THROUGH HOLE; 5V; RCOIL = 500 OHM; RINSULATION = 1000G OHM; 1A; SOCKETED VERSION |
| 26     | S1        |     |     1 | NPH-8-100GH                      | NOVA SENSOR                | NPH-8-100GH       | IC; SNSR; 15PSI; STRAIGHT; WHEATSTONE BRIDGE; SOLID STATE MEDIUM PRESSURE SENSORS; TO-8                                                          |
| 27     | S2        |     |     1 | PPTC042LFBN-RC                   | SULLINS ELECTRONICS CORP.  | PPTC042LFBN-RC    | CONNECTOR; FEMALE; THROUGH HOLE; DUAL ROW HEADER; STRAIGHT; 8PINS                                                                                |
| 28     | TP1-TP16  |     |    16 | 5000                             | KEYSTONE                   | N/A               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                 |
| 29     | U1        |     |     1 | MAX1452AAE+                      | MAXIM                      | MAX1452AAE+       | IC; SNSR; LOW-COST PRECISION SENSOR; SIGNAL CONDITIONER ; SSOP16                                                                                 |
| 30     | U2        |     |     1 | MAX6126AASA21+                   | MAXIM                      | MAX6126AASA21+    | IC; VREF; ULTRA-HIGH PRESCISION; ULTRA-LOW NOISE; SERIES VOLTAGE REFERENCE; NSOIC8                                                               |
| 31     | U3        |     |     1 | MAX1134BCAP+                     | MAXIM                      | MAX1134BCAP+      | IC; ADC; 16-BIT ADC; 150KSPS; SSOP20                                                                                                             |
| 32     | U5        |     |     1 | MAX3390EEUD+                     | MAXIM                      | MAX3390EEUD+      | IC; TRANS; 15KV ESD-PROTECTED; 1UA; 16MBPS; QUAD LOW-VOLTAGE LEVEL TRANSLATOR; TSSOP14                                                           |
| 33     | U6        |     |     1 | CAHCT1G126QDCKRQ1                | TEXAS INSTRUMENTS          | CAHCT1G126QDCKRQ1 | IC; BUF; SINGLE BUS BUFFER GATE WITH 3-STATE OUTPUT; SC70-5                                                                                      |
| 34     | U7, U11   |     |     2 | 74LVC2G04GW                      | NEXPERIA                   | 74LVC2G04GW       | IC; INV; DUAL INVERTER; SOT363-6                                                                                                                 |
| 35     | U8        |     |     1 | MAX1795EUA+                      | MAXIM                      | MAX1795EUA+       | IC; VCON; LOW-SUPPLY-CURRENT;STEP-UP DC-DC CONVERTERS WITH TRUE SHUTDOWN; UMAX8                                                                  |
| 36     | U9        |     |     1 | MAX1793EUE50+                    | MAXIM                      | MAX1793EUE50+     | IC; VREG; LOW-DROPOUT LOW IQ 1A LINEAR REGULATOR; TSSOP16                                                                                        |
| 37     | U10       |     |     1 | MAX3379EEUD+                     | MAXIM                      | MAX3379EEUD+      | IC; TRANS; 15KV ESD-PROTECTED; 1 MICROAMPERE; 16MBPS; QUAD LOW-VOLTAGE LEVEL TRANSLATOR; TSSOP14                                                 |
| 38     | PCB       |     |     1 | MAX1452                          | MAXIM                      | PCB               | PCB:MAX1452                                                                                                                                      |
| 39     | R1, R2    | DNP |     0 | N/A                              | N/A                        | OPEN              | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                                                 |
| TOTAL  |           |     |    88 |                                  |                            |                   |                                                                                                                                                  |

│

Evaluates: MAX1452

## MAX1452 EV System Schematic Diagram

<!-- image -->

## MAX1452 EV System Schematic Diagram (continued)

<!-- image -->

│

Evaluates: MAX1452

## MAX1452 EV System Schematic Diagram (continued)

<!-- image -->

## MAX1452 Evaluation System

## MAX1452 EV System PCB Layout Diagrams

MAX1452 EV System Component Placement Guide-Top Silkscreen

<!-- image -->

Evaluates: MAX1452

│

## MAX1452 EV System PCB Layout Diagrams (continued)

MAX1452 EV System PCB Layout Diagram-Top Layer

<!-- image -->

│

## MAX1452 EV System PCB Layout Diagrams (continued)

MAX1452 EV System PCB Layout Diagram-Internal 2

<!-- image -->

Evaluates: MAX1452

│

## MAX1452 EV System PCB Layout Diagrams (continued)

MAX1452 EV System PCB Layout Diagram-Internal 3

<!-- image -->

Evaluates: MAX1452

│

## MAX1452 EV System PCB Layout Diagrams (continued)

MAX1452 EV System PCB Layout Diagram-Bottom Layer

<!-- image -->

Evaluates: MAX1452

│

## MAX1452 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION              | PAGES CHANGED   |
|-------------------|-----------------|--------------------------|-----------------|
|                 0 | 5/21            | Release for Market Intro | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications Zithout notice at any time.

│

Evaluates: MAX1452