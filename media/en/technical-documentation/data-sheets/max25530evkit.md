<!-- lastmod 2022-08-03 -->
## MAX25530 Evaluation Kit

## General Description

The  MAX25530  evaluation  kit  (EV  kit)  demonstrates the  MAX25530  IC,  which  is  a  highly  integrated  power supply plus LED backlight driver for automotive TFT-LCD applications. The EV kit is a fully assembled and tested surface-mount  PCB  that  provides  a  complete  powermanagement  solution  for  automotive  displays.  The  EV kit  demonstrates  one  buck-boost  converter,  one  boost converter,  two  gate-voltage  controllers,  and  a  boost converter that powers a quad-string LED driver.

The EV kit can be configured to operate in a stand-alone mode or in an I 2 C mode.

The TFT bias section of the EV kit operates from a 2.8V to 5.5V DC supply voltage. The step-up switching regulator (POS) is configured for a 5V to 18V output that provides up to 120mA. The inverting buck-boost converter (NEG) generates a negative output that tracks the positive output (down to a minimum of -7V) and provides up to 100mA. The  gate-driver  power  supplies  consist  of  regulated charge pumps that generate +28V (DGVDD) and -21.5V (DGVEE) and can deliver up to 10mA each, depending on the POS setting. Operation at 430kHz and 2.2MHz is possible.

The LED driver section demonstrates a step-up DC-DC pre-regulator followed by four channels of linear current sinks.  The  step-up  pre-regulator  switches  at  2.2MHz or  440kHz  and  operates  as  a  current-mode  controlled regulator capable of providing up to 600mA for the current sinks. Each channel can operate up to 48V and provides up to 150mA.

The LED driver portion of the EV kit operates from a DC supply  voltage  of  4.5V  up  to  the  High-Brightness  (HB) LED string-forward voltage. The EV kit can withstand a 52V load-dump condition. The EV kit also demonstrates the IC's features, such as adaptive voltage optimization, Overvoltage and Undervoltage protection, cycle-by-cycle current limit, thermal shutdown, and digital PWM dimming operation using a digital PWM input signal to control the brightness of the HB LEDs.

The EV kit provides an I 2 C interface that can operate in conjunction with the MINIQUSB+ adapter board or a thirdparty  I 2 C  master.  The  EV  kit  also  includes  Windows ® compatible software that provides a simple graphical user interface (GUI) for exercising the features of the IC.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

Evaluates: MAX25530

## Benefits and Features

- Demonstrates Robustness of MAX25530
- 2.8V to 5.5V Input Range for TFT Power Section
- 4.5V to 42V Input Range for LED Driver Section
- 2.2MHz or 430kHz I 2 C programmable Boost and Inverted Buck-Boost Switching Frequency with Spread-Spectrum Option on TFT Power Section
- 2.2MHz or 440kHz I 2 C programmable Boost Frequency with Spread-Spectrum Option on LED Driver Section with four 150mA LED drivers
- TFT Section Default Output Voltages (Stand-alone Mode)
- +6V Output at 120mA (Step-Up Switching Regulator)
- -6V Output at 100mA (Inverting Buck-Boost Switching Regulator)
- +16V Output at 10mA (Positive-Charge Pump)
- -7V Output at 10mA (Negative-Charge Pump)
- HB LED String Output Currents Configurable for 20mA, 50mA, 100mA, 120mA or 150mA
- Flexible Resistor-Programmable TFT Output Sequencing (Stand-alone Mode)
- Demonstrates Cycle-by-Cycle Current-Limit and Thermal-Shutdown Features on Boost LED Driver
- Demonstrates Adaptive Voltage Optimization on LED Driver Section
- I 2 C Programmability
- Dedicated GUI
- Proven PCB Layout and Thermal Design
- Fully Assembled and Tested

## MAX25530 EV Kit Files

| FILE                    | DESCRIPTION           |
|-------------------------|-----------------------|
| MAX25530GUISetupV01.exe | Windows GUI Installer |

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX25530 Evaluation Kit

## Quick Start

## Required Equipment

- MAX25530 EV kit
- 2.8 to 5.5V, 2A DC power supply
- 5V to 36V, 4A DC power supply
- Two digital voltmeters (DVMs)
- Four series-connected HB LED strings (6 LEDs each) rated to no less than 150mA
- Current probe to measure the HB LED current
- MINIQUSB+ interface board with USB cable
- Windows-compatible PC with a spare USB port

## Procedure

The EV kit is fully assembled and tested. Follow the steps to verify the board operation.

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

## Stand-alone Mode

- 1) Verify that the jumper J1 is closed (DS1 green LED connected).
- 2) Verify that the jumper J9 is closed (FAULT signaling enabled).
- 3) Verify that the jumper J23 is open (device enabled).
- 4) Verify  that  the  jumper  J19  is  closed  (Buck-Boost Converter  Input  connected  to TFT\_POWER\_INPUT PCB pad).
- 5) Verify  that  the  jumpers  J10,  J11,  J21  are  open (FBP, FBPG, FBNG feedback Inputs enabled).
- 6) Verify that jumpers the JMP1-JMP4 have shunts in -stalled across pins 1-2 (bleed resistors connected, all current sinks enabled).

## Evaluates: MAX25530

- 7) Verify that jumper I 2 C is open and that jumper J2 is closed  (SEQ  pin  connected  to  GND  through  R1  = 10kΩ resistor).
- 8) Verify that a shunt is installed across pins 2-3 on the jumper J12 (BATT pin connected to BATT PCB pad).
- 9) Verify that the jumper 100mA is closed.
- 10) Connect the positive terminal of the 2.8V to 5.5V, 2A DC power supply to the TFT\_POWER\_INPUT PCB pad. Connect the negative terminal of the power supply to a PGND PCB pad.
- 11) Connect the positive terminal of the 5V to 36V, 4A DC power supply to the BATT PCB pad. Connect the negative terminal of the power supply to a PGND PCB pad.
- 12)  Connect  a  DVM  across  the  OUT1  and AGND PCB pads.
- 13) Connect a DVM across one of the TFT output pads (POS, NEG, DGVDD, DGVEE) and one AGND pad.
- 14) Connect the four LED strings from VBOOST to the OUT1, OUT2, OUT3 and OUT4 PCB pads.
- 15)  Clip the current probe across the channel 1 HB LED wire to measure the LED current.
- 16) Turn on the 2.8V to 5.5V, 2A DC power supply and set it to 3.3V. The green LED (DS1) should be on at this point.
- 17) Turn on the 5V to 36V, 4A DC power supply and set it to 12V. The LED strings should be on at this point.
- 18) Verify the presence of the following default TFT voltages: POS = - NEG = 6V; DGVDD = 16V; DGVEE = -7V.
- 19) Measure  the  voltage  from  each  of  the  OUT\_  PCB pads  to  PGND  and  verify  the  lowest  voltage  is approximately 1V.
- 20)  Measure the LED current using the current probe and verify all the channels.

## MAX25530 Evaluation Kit

## I 2 C Mode

- 1) Visit www.maximintegrated/evkitsoftware to download  the  latest  version  of  the  EV  kit  software, MAX25530GUISetupV01.exe.
- 2) Install  the  EV  kit  software  (GUI)  on  your  PC  by running  the  MAX25530GUISetupV01.exe  program. The  EV  kit  software  application  will  be  installed together with the required MINIQUSB+ drivers.
- 3) Verify that the jumper J1 is closed (DS1 green LED connected).
- 4) Verify that the jumper J9 is closed (FAULT signaling enabled).
- 5) Verify that the jumper J23 is closed (EN pin grounded, device to be enabled via I 2 C).
- 6) Verify  that  the  jumper  J19  is  closed  (Buck-Boost Converter  Input  connected  to TFT\_POWER\_INPUT PCB pad).
- 7) Verify that the jumpers J10, J11, J21 are closed (FBP, FBPG, FBNG feedback Inputs grounded).
- 8) Verify  that  the  jumpers  JMP1-JMP4  have  shunts installed across pins 1-2 (bleed resistors connected, all current sinks enabled).
- 9) Verify that the jumper I 2 C is closed and that jumpers  J2-J8  are  open  (SEQ  pin  connected  to TFT\_POWER\_INPUT PCB pad).
- 10) Verify that a shunt is installed across pins 2-3 on the jumper J12 (BATT pin connected to BATT PCB pad).
- 11) Verify  that  a  shunt  is  installed  either  on  the  jumper ADD0 or on the jumper ADD1.
- 12)  Verify that the jumper 100mA is closed.
- 13)  Connect the MINIQUSB+ interface board's P3 header to the J24 header on the EV kit.
- 14) Connect the positive terminal of the 2.8V to 5.5V, 2A DC power supply to the TFT\_POWER\_INPUT PCB pad. Connect the negative terminal of the power supply to a PGND PCB pad.
- 15) Connect the positive terminal of the 5V to 36V, 4A DC power supply to the BATT PCB pad. Connect the negative terminal of the power supply to a PGND PCB pad.
- 16)  Connect  a  DVM  across  the  OUT1  and AGND PCB pads.
- 17) Connect a DVM across one of the TFT output PCB pads (POS, NEG, DGVDD, DGVEE) and the AGND PCB pad.
- 18) Connect the four LED strings from VBOOST to the OUT1, OUT2, OUT3, and OUT4 PCB pads.
- 19)  Clip the current probe across the channel 1 HB LED wire to measure the LED current.
- 20)  Turn on the 2.8V to 5.5V, 2A DC power supply and set it to 3.3V. The green LED (DS1) should be on at this point.
- 21) Turn on the 5V to 36V, 4A DC power supply and set it to 12V.
- 22)  Launch the EV kit software application.
- 23)  From  the  EV  kit  software  toolbar,  select Device  Scan for Address. The  GUI  scans  the  I 2 C  bus  for available slave addresses on the bus and selects the first option  (in this case, the MAX25530 I 2 C address). Press OK once the MAX25530 I 2 C address has been found.
- 24)  Verify  that  the  status  bar  in  the  bottom-right  corner of the GUI displays EV Kit: Connected , as shown in Figure 1 .
- 25) In  the  0x02  ENABLE  register  group  box,  check ENBST,  ENPOS,  ENNEG,  ENGVDD,  ENGVEE, ENBLIGHT to activate  the  TFT  Power  Section  and LED Driver Section.
- 26)  Verify the presence of the following default TFT voltages: POS = -NEG = 6V; DGVDD = 8V; DGVEE = -6V.
- 27)  Measure  the  voltage  from  each  of  the  OUT\_  PCB pads  to  PGND  and  verify  the  lowest  voltage  is approximately 1V.
- 28)  Measure the LED current using the current probe and verify all the channels.
- 29) For more details on how to use the GUI and all the features available, click on the GUI Help menu item.

## Evaluates: MAX25530

Evaluates: MAX25530

Figure 1. MAX25530 Evaluation Kit Software (GUI)

<!-- image -->

## Detailed Description of Hardware (or Software)

The EV kit consists of two sections with separate power supply inputs.

The TFT Power Section operates from a DC supply voltage of 2.8V up to 5.5V.

The HB LED Driver Section operates from a DC supply voltage of 4.5V up to the HB LED forward-string voltage and can handle load-dump conditions up to 52V.

## TFT Power Section

The EV kit  TFT  power section feature two source-driver power  supplies  (V POS   and  V NEG accessible  through the  POS  and  NEG  PCB  pads  on  the  EV  kit)  and  the two  gate-driver  power  supplies  (DGVDD  and  DGVEE accessible through the DGVDD and DGVEE PCB pads on the EV kit).

The  source-driver  power  supplies  consist  of  a  synchronous  boost  converter  and  an  inverting  buck-boost converter  that  switch  at  2.2MHz  (or  430kHz)  and  can generate  voltages  up  to  +18V  and  down  to  -7V.  The positive source driver can deliver up to 120mA, while the negative source driver is capable of 100mA.

The  gate-driver  power  supplies  consist  of  regulated charge  pumps  that  generate  up  to  +28V  and  down  to -21.5V and can deliver up to 10mA each.

Select the value of the boost inductor using Table 1 :

## Table 1. Boost Converter Inductor Selection

| f SW   | V POS < 10V   | V POS > 10V   |
|--------|---------------|---------------|
| 430kHz | 4.7μH         | 10μH          |
| 2.2MHz | 1μH*          | 2.2μH         |

* Default value.

## Source-Driver Output-Voltage Selection

The EV kit's step-up switching-regulator output (POS) is set by feedback resistors R19 and R22 in a stand-alone mode  with  the  jumper  J10  open.  The  default  output voltage  is  set  to  6V.  To  generate  output  voltages  other than  6V  the  user  must  select  different  external  volt -age-divider  resistors  for  R19  and  R22.  The  negative source-driver supply voltage (NEG) is automatically tightly regulated  to  -POS  within  ±50mV  when  jumper  J19  is closed.  NEG cannot be adjusted independently of POS and will be automatically shut down in case POS is set to a value higher than 7V in a stand-alone mode.

When jumper J10 is closed, the device should be oper -ated in I 2 C mode. In I 2 C mode, POS and NEG voltages are  enabled  by  checking ENBST , ENPOS and ENNEG in the 0x02 ENABLE register group box. The POS volt -age can then be regulated between 5V and 18V in 0.1V steps by acting on the 0x03 VPOS\_SET slider bar while the NEG voltage will be again regulated to -POS within ±50mV. See Table 2 for J10 and J19 jumper settings.

Note: When POS is set to a voltage greater than 7V in I 2 C mode, the NEG converter should be disabled to avoid damage to the device.

Refer to the Source-Driver Power Supplies section in the MAX25530 IC data sheet for more information.

## Gate-Driver Output-Voltage Selection

The EV kit's positive gate-driver power supply (DGVDD) is  set  to  +16V  by  feedback  resistors  R23  and  R20  in stand-alone  mode  with  jumper  J21  open.  To  generate Evaluates: MAX25530

output voltages other than 16V, select different external voltage-divider resistors for R23 and R20. The negative gate-driver power supply (DGVEE) is set to -7V by feed -back  resistors  R21  and  R24  in  stand-alone  mode  with jumper J11 open. To generate output voltages other than -7V, select different external voltage-divider resistors for R21 and R24.

When  jumpers  J11  and  J21  are  closed,  the  device should be operated in I 2 C mode. In I 2 C mode, DGVDD and DGVEE voltages are enabled by checking ENBST , ENPOS , ENGVDD ,  and ENGVEE in  the 0x02 ENABLE register  group  box.  The  DGVDD  and  DGVEE  voltages can then be regulated between 8V and 28V and between -6V and -21.5V respectively in 0.5V steps by acting on the 0x04 DGVDD\_SET and 0x05 DGVEE\_SET slider  bars. See Table 3 for J11 and J21 jumper settings.

Refer  to  the Gate-Driver  Power  Supplies section  in  the MAX25530 IC data sheet for more information.

## TFT Output Sequencing Control (Stand-alone mode only)

Source-driver  and  gate-driver  outputs'  power-up  and power-off is controlled by the resistor value on the SEQ pin  in  a  stand-alone  mode.  When  the  EN  pin  is  taken high (jumper J23 closed), the power-up sequence can be decided by connecting one of the R1-R3, R5-R7, or R18 resistors to ground through jumpers J2 to J8 (see Table 4 for jumper settings).

Refer  to  the Output  Sequencing  Control section  in  the MAX25530 IC data sheet for more information.

## Table 2. POS and NEG voltage setting (J10 and J19)

| SHUNT POSITION   | SHUNT POSITION   | FBP PIN                                                  | EVKIT OPERATION                                     |
|------------------|------------------|----------------------------------------------------------|-----------------------------------------------------|
| J10              | J19              |                                                          |                                                     |
| Open*            | Closed*          | Connected at mid-point between the resistors R19 and R22 | POS and -NEG voltages set to 6V in stand-alone mode |
| Closed           | Closed           | Connected to ground                                      | POS and -NEG voltages set through I 2 C registers   |

## Table 3. DGVDD and DGVEE voltage setting (J11 and J21)

| SHUNT POSITION   | SHUNT POSITION   | FBPG PIN                                                 | FBNG PIN                                             | EVKIT OPERATION                                                               |
|------------------|------------------|----------------------------------------------------------|------------------------------------------------------|-------------------------------------------------------------------------------|
| J11              | J21              |                                                          |                                                      |                                                                               |
| Open*            | Open*            | Connected at mid-point between the resistors R23 and R20 | Connected at mid-point between resistors R21 and R24 | DGVDD and DGVEE voltages set to 16V and -7V respectively in stand- alone mode |
| Closed           | Closed           | Connected to ground                                      | Connected to ground                                  | DGVDD and DGVEE voltages set through I 2 C registers                          |

Table 4. TFT Output sequencing Control (J2 to J8)

| SHUNT POSITION   | SHUNT POSITION            | POWER-ON SUPPLY SEQUENCING (FROM THE EXPIRATION OF SOFT-START PERIOD)   | POWER-ON SUPPLY SEQUENCING (FROM THE EXPIRATION OF SOFT-START PERIOD)   | POWER-ON SUPPLY SEQUENCING (FROM THE EXPIRATION OF SOFT-START PERIOD)   | POWER-ON SUPPLY SEQUENCING (FROM THE EXPIRATION OF SOFT-START PERIOD)   | POWER-OFF SUPPLY SEQUENCING (FROM THE INSTANT WHEN EN IS DRIVEN LOW)   | POWER-OFF SUPPLY SEQUENCING (FROM THE INSTANT WHEN EN IS DRIVEN LOW)   | POWER-OFF SUPPLY SEQUENCING (FROM THE INSTANT WHEN EN IS DRIVEN LOW)   | POWER-OFF SUPPLY SEQUENCING (FROM THE INSTANT WHEN EN IS DRIVEN LOW)   |
|------------------|---------------------------|-------------------------------------------------------------------------|-------------------------------------------------------------------------|-------------------------------------------------------------------------|-------------------------------------------------------------------------|------------------------------------------------------------------------|------------------------------------------------------------------------|------------------------------------------------------------------------|------------------------------------------------------------------------|
|                  | SEQ PIN RESISTOR (kΩ ±1%) | 1st AFTER 15ms                                                          | 2nd AFTER 30ms                                                          | 3rd AFTER 45ms                                                          | 4th AFTER 60ms                                                          | 1st AFTER 15ms                                                         | 2nd AFTER 30ms                                                         | 3rd AFTER 45ms                                                         | 4th AFTER 60ms                                                         |
| J2 closed*       | 10                        | POS                                                                     | NEG                                                                     | DGVEE                                                                   | DGVDD                                                                   | DGVDD                                                                  | DGVEE                                                                  | NEG                                                                    | POS                                                                    |
| J3 closed        | 30                        | POS                                                                     | NEG                                                                     | DGVDD                                                                   | DGVEE                                                                   | DGVEE                                                                  | DGVDD                                                                  | NEG                                                                    | POS                                                                    |
| J4 closed        | 51                        | NEG                                                                     | POS                                                                     | DGVEE                                                                   | DGVDD                                                                   | DGVDD                                                                  | DGVEE                                                                  | POS                                                                    | NEG                                                                    |
| J5 closed        | 68                        | POS                                                                     | DGVEE                                                                   | DGVDD                                                                   | No NEG output                                                           | DGVDD                                                                  | DGVEE                                                                  | POS                                                                    | No NEG output                                                          |
| J6 closed        | 91                        | POS                                                                     | DGVDD                                                                   | DGVEE                                                                   | No NEG output                                                           | DGVEE                                                                  | DGVDD                                                                  | POS                                                                    | No NEG output                                                          |
| J7 closed        | 110                       | POS NEG                                                                 | -                                                                       | -                                                                       | DGVDD DGVEE                                                             | DGVDD DGVEE                                                            | -                                                                      | -                                                                      | POS NEG                                                                |
| J8 closed        | 150                       | DGVEE                                                                   | DGVDD                                                                   | NEG                                                                     | POS                                                                     | POS                                                                    | NEG                                                                    | DGVDD                                                                  | DGVEE                                                                  |

* Default position.

## HB LED Driver Section

The EV  kit LED  driver section demonstrates the MAX25530  HB  LED  driver  with  an  integrated  step-up DC-DC pre-regulator followed by four channels of linear current sinks. The pre-regulator switches at 2.2MHz (or at 440kHz) and operates as a current-mode-controlled regulator,  providing  up  to  600mA  for  the  current  sinks  while providing power-voltage protection (OVP). Cycle-by-cycle current  limit  is  set  by  the  resistors  R33  and  R34,  while the resistors R31 and R32 set the OVP voltage to 29V. The pre-regulator power section consists of inductor L3, power-sense  resistors  R33  and  R34,  Q3  MOSFET  and switching diode D7.

Each of the four linear channels (OUT1-OUT4) is capa -ble  of  operating  up  to  48V  and  sinks  up  to  150mA  per channel. Each of the four channels' linear current sinks are  configurable  for  20mA,  50mA,  100mA,  120mA  or 150mA, or can be disabled independently by connecting the respective OUT\_ channel to ground through a 12kΩ resistor  before  power-up  with  the  LED  string  connected to the corresponding OUT\_ channel removed. Resistors R8-R12 and jumpers 50mA, 100mA, 120mA, and 150mA configure the linear current setting for the IC's ISET pin, which sets the HB LED string current.

The  EV  kit  feature  PCB  pads  to  facilitate  connecting HB LED strings for evaluation. The VBOOST PCB pads provide connections for connecting each HB LED string's anode  to  the  DC-DC  pre-regulator  output.  The  OUT1-

OUT4  PCB  pads  provide  connections  for  connecting each HB LED string's cathode to the respective current sink. Capacitors C23, and  C40-C42 are included on the design to prevent oscillations and provide stability when using long, untwisted HB LED connecting cables during lab  evaluation.  These  capacitors  are  not  required  if  the connection between the LED driver and the HB LEDs is a low-inductance connection.

A DIM PCB pad is provided for using a digital PWM signal to control the brightness of the HB LEDs.

## HB LED Current

The EV kit features four jumpers (50mA, 100mA, 120mA, and  150mA)  to  configure  the  device's  current  sinks  on all four channels. Place a shunt on one of the jumpers to configure the current-sink limits according to Table 5. If no shunt is placed, the LED current will be set to 20mA. To reconfigure the circuit for another current-sink threshold, replace resistor R8, leave all the jumpers open and use the  following  equation  to  calculate  a  new  value  for  the desired current:

<!-- formula-not-decoded -->

where I LED  is  the  desired  HB  LED current per string in Amperes and R8 is the new resistor value for obtaining the  desired  HB  LED  current.  If  the  HB  LED  current  is reconfigured for a different current, other components on the EV kit may need to be modified. When I 2 C control is used, the current in the strings can be reduced in steps by  writing  to  the  DIOUT  (0x06)  register.  The  resolution of this setting is 0.5% of the value set by the resistor on ISET. Refer to the MAX25530 IC data sheet to calculate the other component values.

## Channel 1-Channel 4 Current-Sink Disabling

The EV kit features jumpers JMP1-JMP4 which are used to put each OUT\_ current sink in one of three operating states:

- 1) Normal  operation,  (i.e.  OUT\_  is  connected  to  the corresponding ring on the board edge and LEDs are connected from there to the pre-regulator output V OUT) .

Evaluates: MAX25530

- 2) OUT\_ connected through a 12kΩ resistor to GND and thus disabled;
- 3) OUT\_ shorted to GND, used to test fault detection.

To  disable  a  channel,  install  a  jumper  in  the  channel's  respective  jumper  across  pins  1-3,  connecting  the OUT\_ to ground through a 12kΩ resistor. The dimming algorithm in the IC requires that higher numbered OUT\_ current  sinks  be  disabled  first.  For  example,  if  only two  strings  are  needed,  OUT1-OUT2  should  be  used, with OUT3 and OUT4 disabled. See Table 6 for jumper settings.  The  100kΩ  bleed  resistors  are  installed  to prevent the OUT\_ leakage current from dimly turning on large LED strings even when the DIM signal is low.

Table 5. LED Current Setting (20mA, 50mA, 100mA, 120mA and 150mA)

| SHUNT POSITION   | ISET RESISTOR SETTING (kΩ)   |   LED CURRENT SINK SETTING (mA) |
|------------------|------------------------------|---------------------------------|
| Open             | 75                           |                              20 |
| 50mA             | 75&#124;&#124;49.9 = 30      |                              50 |
| 100mA*           | 75&#124;&#124;18.7 = 15      |                             100 |
| 120mA            | 75&#124;&#124;15 = 12.5      |                             120 |
| 150mA            | 75&#124;&#124;11.5 = 10      |                             150 |

Table 6. Selecting OUT\_ Channels Operating State (JMP1-JMP4)

| OUT _   | JUMPER   | SHUNT POSITION   | CHANNEL OPERATION                                                                                   |
|---------|----------|------------------|-----------------------------------------------------------------------------------------------------|
| OUT1    | JMP4     | 1-2*             | Channel 1 operational; connect an HB LED string** between V OUT and OUT1. Bleed resistor connected. |
| OUT1    | JMP4     | 1-3              | Channel 1 not used. OUT1 current sink disabled.                                                     |
| OUT1    | JMP4     | 1-4              | Channel 1 shorted to GND to simulate a fault.                                                       |
| OUT2    | JMP3     | 1-2*             | Channel 2 operational; connect an HB LED string** between V OUT and OUT2. Bleed resistor connected. |
| OUT2    | JMP3     | 1-3              | Channel 2 not used. OUT2 current sink disabled.                                                     |
| OUT2    | JMP3     | 1-4              | Channel 2 shorted to GND to simulate a fault.                                                       |
| OUT3    | JMP2     | 1-2*             | Channel 3 operational; connect an HB LED string** between V OUT and OUT3. Bleed resistor connected. |
| OUT3    | JMP2     | 1-3              | Channel 3 not used. OUT3 current sink disabled.                                                     |
| OUT3    | JMP2     | 1-4              | Channel 3 shorted to GND to simulate a fault.                                                       |
| OUT4    | JMP1     | 1-2*             | Channel 4 operational; connect an HB LED string** between V OUT and OUT4. Bleed resistor connected. |
| OUT4    | JMP1     | 1-3              | Channel 4 not used. OUT4 current sink disabled.                                                     |
| OUT4    | JMP1     | 1-4              | Channel 4 shorted to GND to simulate a fault.                                                       |

## MAX25530 Evaluation Kit

## HB LED Digital Dimming Control

The  EV  kit  features  a  DIM  PCB  input  pad  for  connecting an external digital PWM signal. Apply a digital PWM signal with a 0.8V logic-low level (or less) and 2.1V logichigh level (or greater). The DIM signal frequency should be at least 100Hz. If the DIM frequency is changed during operation,  the  MAX25530  must  be  powered  off  and  on again to register the change. To adjust the HB LED brightness,  vary  the  signal  duty  cycle  from  0%  to  100%  and maintain a minimum pulse width of 500ns. Apply the digital PWM signal to the DIM PCB pad. The DIM input of the IC is pulled up internally with a 5μA (typ) current source.

For  additional  information  on  the  device's  dimming  feature, refer to the PWM Dimming section in the MAX25530 IC data sheet.

## Phase-Shift Operation

The  EV  kit  demonstrates  the  phase-shifting  feature  of the IC. Phase-shift is enabled by default at each device's power up, but it can be disabled when operating in I 2 C mode. To disable it, uncheck PSEN in the 0x02 ENABLE register  group  box.  This  operation  must  be  always  per -formed before enabling any LED string.

When  phase  shifting  is  enabled,  each  current  sink's turn-on is separated by 360º/n, where n is the number of enabled strings. When phase shifting is disabled, the dimming of each string is controlled directly by the DIM input and all current sinks turn on and off at the same time.

## Overvoltage Detection and Protection

The resistors (R31 and R32) connected to OVP are con -figured for a VOUT\_OVP of 29V. This sets the maximum converter  output  (V BOOST )  voltage  at  29V.  During  an open-LED string condition, the converter output ramps up to the output overvoltage threshold. Capacitor C33 can be added to provide noise filtering to the overvoltage signal. To reconfigure the circuit for a different voltage, replace resistor  R31  with  a  different  value  using  the  following equation:

<!-- formula-not-decoded -->

Where  R32  is  10kΩ,  V OUT\_OVP  is  the  overvoltageprotection threshold desired, and R31 is the new resistor value  for  obtaining  the  desired  overvoltage  protection. Refer  to  the Open-LED  Management  and  Overvoltage Protection (OVP) section in the MAX25530 IC data sheet for additional information.

## SDA and SCL voltages (SDA\_PU, SCL\_PU)

SDA and SCL voltage supplies can be selected between the TFT input voltage and the fixed 3.3V provided by the MINIQUSB+ (see Table 7).

## Power LED Enable (J1)

A  green  LED  (DS1)  is  used  to  indicate  that  the  EV  kit is  powered  on.  The  LED  can  be  disconnected  from the  power  supply,  allowing  precise  current-consumption evaluation. See Table 8 for shunt positions.

## Table 7. SDA and SCL supply (SDA\_PU, SCL\_PU)

| SHUNT POSITION   | SHUNT POSITION   | SDAAND SCL SUPPLY               |
|------------------|------------------|---------------------------------|
| SDA_PU           | SCL_PU           |                                 |
| Open*            | Open*            | 3.3V (with MINIQUSB+ connected) |
| Closed           | Closed           | TFT input voltage               |

* Default position.

## Table 8. DS1 Enable (J1)

| SHUNT POSITION   | DS1 POWER LED   |
|------------------|-----------------|
| Closed*          | Connected       |
| Open             | Disconnected    |

* Default position.

## MAX25530 Evaluation Kit

## Enable (EN)

The EV kit features an enable input that can be used in stand-alone mode to enable/disable the device and place it  in  shutdown  mode.  To  enable  the  EV  kit  whenever power is applied to TFT\_POWER\_INPUT PCB pad, open the jumper J23. The jumper J23 must be kept closed to disable the device in stand-alone or to operate it in I 2 C mode. See Table 9 for J23 jumper settings.

## TFT and LED Driver Sections Switching Frequency Selection (I 2 C mode only)

In  I 2 C  mode  the  EV  kit's  step-up  (POS)  and  buckboost (NEG) switching-regulators frequency is selectable between  430kHz  and  2.2MHz  by  checking/unchecking SWFREQ\_TFT in  the 0x01  CNFG\_GEN register  group box. Similarly, the EV kit's LED driver switching frequency is  selectable  between  440kHz  and  2.2MHz  by  checking/unchecking BL\_SWFREQ in  the 0x01  CNFG\_GEN register group box.

## Table 9. Enable (J23)

| SHUNT POSITIO N   | EN PIN                       | EVKIT OPERATION                                      |
|-------------------|------------------------------|------------------------------------------------------|
| Open*             | Connected to TFT_POWER_INPUT | Enabled when TFT_POWER_INPUT is powered              |
| Closed            | Connected toAGND             | Disabled in stand-alone mode/Operative in I 2 C mode |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX25530EVKIT# | EV Kit |

# Denotes RoHS compliant

Evaluates: MAX25530

Spread-spectrum can be disabled/enabled in both sections by  checking/unchecking SSOFF\_TFT and SSOFF\_BL respectively in the 0x01 CNFG\_GEN register group box.

Note: Switching frequency is fixed at 2.2MHz and spreadspectrum  is  always  enabled  for  both  sections  in  standalone mode.

## Fault-Indicator Output (FLTB)

The  EV  kit  features  the  device's  open-drain  FLTB  output. In I 2 C mode FLTB goes low when an open-LED or shorted-LED string  is  detected,  during  thermal  warning/ shutdown, during Boost Undervoltage/Overvoltage or during TFT rail Undervoltage events. In stand-alone mode, the  FLTB  signal  will  be  continuously  switching  at  1kHz (typ)  at  different  duty  cycles  depending  on  the  type  of fault detected.

Keep jumper J9 closed to allow DS2 red LED enabling in case FLTB goes low. Refer to the Fault Protection section in the MAX25530 IC data sheet for additional information on the FLTB signal.

## MAX25530 EV Kit Bill of Materials

|   ITEM | REF_DES                                                                                                                                                  | DNI/DNP   |   QTY | MFG PART #                                                                                           | MANUFACTURER                                      | VALUE     | DESCRIPTION                                                                              |
|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|-------|------------------------------------------------------------------------------------------------------|---------------------------------------------------|-----------|------------------------------------------------------------------------------------------|
|      1 | 50MA, 100MA, 120MA, 150MA, ADD0, ADD1, I2C, J1-J11, J19, J21, J23, SCL_PU, SDA_PU                                                                        | -         |    23 | PEC02SAAN                                                                                            | SULLINS ELECTRONICS CORP.                         | PEC02SAAN | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS;                    |
|      2 | AGND, AGND1, BATT, DGND, DGVDD, DGVEE, DIM, EN, FLT, HVINP, NEG, OUT1-OUT4, PGND, PGND1, PGND2, POS, SCL, SDA, TFT_POWER_INPUT, VBOOST, VBOOST1, VBOOST2 | -         |    25 | 9020 BUSS                                                                                            | WEICO WIRE                                        | MAXIMPAD  | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG |
|      3 | C1, C3, C8, C12, C25                                                                                                                                     | -         |     5 | GRM188C71E225KE11                                                                                    | MURATA                                            | 2.2UF     | CAP; SMT (0603); 2.2UF; 10%; 25V; X7S; CERAMIC                                           |
|      4 | C2, C4, C7                                                                                                                                               | -         |     3 | CL10B106MQ8NRN                                                                                       | SAMSUNG ELECTRONICS                               | 10UF      | CAP; SMT (0603); 10UF; 20%; 6.3V; X7R; CERAMIC                                           |
|      5 | C5, C6                                                                                                                                                   | -         |     2 | TMK212AB7475K; CGJ4J1X7R1E475K125AC; C2012X7R1E475K125AB; CGA4J1X7R1E475K125AC; GRM21BZ71E475KE15    | TAIYO YUDEN;TDK; TDK;TDK;MURATA                   | 4.7UF     | CAP; SMT (0805); 4.7UF; 10%; 25V; X7R; CERAMIC                                           |
|      6 | C9, C10, C15, C16, C19, C39, C43, C44                                                                                                                    | -         |     8 | CC0603KRX7R0BB104; GRM188R72A104KA35; HMK107B7104KA; 06031C104KAT2A; GRM188R72A104K                  | YAGEO;MURATA; TAIYO YUDEN; AVX;MURATA             | 0.1UF     | CAP; SMT (0603); 0.1UF; 10%; 100V; X7R; CERAMIC                                          |
|      7 | C11                                                                                                                                                      | -         |     1 | GRM188R71E105KA12; TMK107B7105KA; 06033C105KAT2A; C1608X7R1E105K080AE                                | MURATA; TAIYO YUDEN; AVX;TAIYO YUDEN              | 1UF       | CAP; SMT (0603); 1UF; 10%; 25V; X7R; CERAMIC                                             |
|      8 | C13, C18, C46                                                                                                                                            | -         |     3 | GCJ188R71H104KA12; GCM188R71H104K; CGA3E2X7R1H104K080AA; CGA3E2X7R1H104K080AD; CL10B104KB8WPN        | MURATA;MURATA; TDK;TDK;SAMSUNG                    | 0.1UF     | CAP; SMT (0603); 0.1UF; 10%; 50V; X7R; CERAMIC                                           |
|      9 | C14, C45                                                                                                                                                 | -         |     2 | 885012206071; C1608X7R1E104K080AA; C0603C104K3RAC; GRM188R71E104KA01; C1608X7R1E104K; 06033C104KAT2A | WURTH ELECTRONICS INC; TDK; KEMET;MURATA; TDK;AVX | 0.1UF     | CAP; SMT (0603); 0.1UF; 10%; 25V; X7R; CERAMIC                                           |
|     10 | C17                                                                                                                                                      | -         |     1 | GRM32ER71H106KA12; CL32B106KBJNNN; UMJ325KB7106KMH; 12105C106K4Z2A                                   | MURATA; SAMSUNG ELECTRONICS; TAIYO YU             | 10UF      | CAP; SMT (1210); 10UF; 10%; 50V; X7R; CERAMIC                                            |
|     11 | C21, C24                                                                                                                                                 | -         |     2 | C0603C104K8RAC                                                                                       | KEMET                                             | 0.1UF     | CAP; SMT (0603); 0.1UF; 10%; 10V; X7R; CERAMIC                                           |
|     12 | C22, C29                                                                                                                                                 | -         |     2 | 06035C101JAT                                                                                         | AVX                                               | 100PF     | CAP; SMT (0603); 100PF; 5%; 50V; X7R; CERAMIC                                            |
|     13 | C23, C40-C42                                                                                                                                             | -         |     4 | GRM188R72A102KA01; C1608X7R2A102K080AA                                                               | MURATA;TDK                                        | 0.001UF   | CAP; SMT (0603); 0.001UF; 10%; 100V; X7R; CERAMIC                                        |
|     14 | C26, C31                                                                                                                                                 | -         |     2 | UMK107AB7105KA; CC0603KRX7R9BB105                                                                    | TAIYO YUDEN;YAGEO                                 | 1UF       | CAP; SMT (0603); 1UF; 10%; 50V; X7R; CERAMIC                                             |
|     15 | C27                                                                                                                                                      | -         |     1 | CGA3E1X7R0J225K080AC; GCM188R70J225KE22J                                                             | TDK;MURATA                                        | 2.2UF     | CAP; SMT (0603); 2.2UF; 10%; 6.3V; X7R; CERAMIC                                          |
|     16 | C30                                                                                                                                                      | -         |     1 | C0603C473K1RAC                                                                                       | KEMET                                             | 0.047UF   | CAP; SMT (0603); 0.047UF; 10%; 100V; X7R; CERAMIC                                        |
|     17 | C32                                                                                                                                                      | -         |     1 | MKA50VC47RMH10TP                                                                                     | UNITED CHEMI-CON                                  | 47UF      | CAP; SMT (CASE_F); 47UF; 20%; 50V; ALUMINUM-ELECTROLYTIC                                 |

Evaluates: MAX25530

## MAX25530 EV Kit Bill of Materials (continued)

|   ITEM | REF_DES       | DNI/DNP   |   QTY | MFG PART #                                                                                                                                                  | MANUFACTURER                                               | VALUE                | DESCRIPTION                                                                                                                |
|--------|---------------|-----------|-------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|----------------------|----------------------------------------------------------------------------------------------------------------------------|
|     18 | C34           | -         |     1 | C0603C104K5RAC; C1608X7R1H104K; ECJ-1VB1H104K; GRM188R71H104KA93; CGJ3E2X7R1H104K080AA; C1608X7R1H104K080AA; CL10B104KB8NNN; CL10B104KB8NFN; 06035C104KAT2A | KEMET;TDK; PANASONIC; MURATA;TDK; TDK;SAMSUNG; SAMSUNG;AVX | 0.1UF                | CAP; SMT (0603); 0.1UF; 10%; 50V; X7R; CERAMIC;                                                                            |
|     19 | C35           | -         |     1 | CC0603KRX7R6BB224                                                                                                                                           | YAGEO                                                      | 0.22UF               | CAP; SMT (0603); 0.22UF; 10%; 10V; X7R; CERAMIC                                                                            |
|     20 | C36, C38      | -         |     2 | CGA5L3X7R1H475K160AB; C1206C475K5RACAUTO                                                                                                                    | TDK;KEMET                                                  | 4.7UF                | CAP; SMT (1206); 4.7UF; 10%; 50V; X7R; CERAMIC                                                                             |
|     21 | C37           | -         |     1 | 50HVP56M                                                                                                                                                    | SUNCON                                                     | 56UF                 | CAP; SMT; 56UF; 20%; 50V; ALUMINUM-ELECTROLYTIC                                                                            |
|     22 | C47           | -         |     1 | GRM188R71E223K; 885012206067                                                                                                                                | MURATA;WURTH ELECTRONIK                                    | 0.022UF              | CAP; SMT (0603); 0.022UF; 10%; 25V; X7R; CERAMIC                                                                           |
|     23 | D1            | -         |     1 | CMHSH5-4                                                                                                                                                    | CENTRAL SEMICONDUCTOR CORP.                                | CMHSH5-4             | DIODE; SCH; SMT (SOD-123); PIV=40V; IF=0.5A; -65DEGC TO +125DEGC                                                           |
|     24 | D2-D5, D8-D15 | -         |    12 | BAT760-7                                                                                                                                                    | DIODES INCORPORATED                                        | BAT760-7             | DIODE; SCH; SMT (SOD-323); PIV=30V; IF=5.5A; -65DEGC TO +150DEGC                                                           |
|     25 | D6            | -         |     1 | CMPD914                                                                                                                                                     | CENTRAL SEMICONDUCTOR                                      | CMPD914              | SMALL SIGNAL DIODE                                                                                                         |
|     26 | D7            | -         |     1 | NRVBS260T3G                                                                                                                                                 | ON SEMICONDUCTOR                                           | NRVBS260T3G          | DIODE; SCH; SURFACE MOUNT SCHOTTKY POWER RECTIFIER; SMB; PIV=60V; IF=2A                                                    |
|     27 | DS1           | -         |     1 | LTST-C170GKT                                                                                                                                                | LITE-ON ELECTRONICS INC                                    | LTST-C170GKT         | DIODE; LED; STANDARD; GREEN; SMT (0805); PIV=2.1V; IF=0.01A                                                                |
|     28 | DS2           | -         |     1 | LTST-C170EKT                                                                                                                                                | LITE-ON ELECTRONICS INC                                    | LTST-C170EKT         | DIODE; LED; STANDARD; RED; SMT (0805); PIV=2.0V; IF=0.02A                                                                  |
|     29 | J12           | -         |     1 | PEC03SAAN                                                                                                                                                   | SULLINS                                                    | PEC03SAAN            | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                  |
|     30 | J13           | -         |     1 | 22-05-3081                                                                                                                                                  | MOLEX                                                      | 22-05-3081           | CONNECTOR; MALE; THROUGH HOLE; FRICTION LOCK HEADER; RIGHT ANGLE; 8PINS; 0DEGC TO +75DEGC                                  |
|     31 | J24           | -         |     1 | 803-87-020-20-001101                                                                                                                                        | PRECI-DIP SA                                               | 803-87-020-20-001101 | EVKIT PART-CONNECTOR; FEMALE; TH; DOUBLE ROW; 2.54MM; RIGHT ANGLE SOLDER TAIL; MATING PIN DIA 0.76MM; RIGHT ANGLE; 20PINS; |
|     32 | JMP1-JMP4     | -         |     4 | 22-28-4043                                                                                                                                                  | MOLEX                                                      | 22-28-4043           | CONNECTOR; MALE; THROUGH HOLE; FLAT VERTICAL BREAKAWAY; STRAIGHT; 4PINS                                                    |
|     33 | L1            | -         |     1 | LPS4018-222MR                                                                                                                                               | COILCRAFT                                                  | 2.2UH                | INDUCTOR; SMT; FERRITE; 2.2UH; 20%; 2.0A                                                                                   |
|     34 | L2            | -         |     1 | LPS4018-102NR                                                                                                                                               | COILCRAFT                                                  | 1UH                  | INDUCTOR; SMT; FERRITE; 1UH; 30%; 2.5A                                                                                     |
|     35 | L3            | -         |     1 | MSS1246-103MLB                                                                                                                                              | COILCRAFT                                                  | 10UH                 | INDUCTOR; SMT; FERRITE BOBBIN CORE; 10UH; TOL=+/-20%; 4.2A; -40DEGC TO +85DEGC                                             |
|     36 | L4            | -         |     1 | XAL4020-601ME                                                                                                                                               | COILCRAFT                                                  | 0.60UH               | INDUCTOR; SMT; CORE MATERIAL= COMPOSITE; 0.60UH; TOL=+/-20%; 11.7A                                                         |
|     37 | Q1            | -         |     1 | NVMFS5826NLT1G                                                                                                                                              | ON SEMICONDUCTOR                                           | NVMFS5826NLT1G       | TRAN;POWER MOSFET; SINGLE N-CHANNEL; NCH; SO-8FL; PD-(39W); I-(26A); V-(60V)                                               |
|     38 | R1, R29, R32  | -         |     3 | CRG0603F10K                                                                                                                                                 | TE CONNECTIVITY                                            | 10K                  | RES; SMT (0603); 10K; 1%; +/-100PPM/DEGC; 0.1000W                                                                          |
|     39 | R2            | -         |     1 | CRCW060330K0FK                                                                                                                                              | VISHAY DALE                                                | 30K                  | RES; SMT (0603); 30K; 1%; +/-100PPM/DEGC; 0.1000W                                                                          |
|     40 | R3            | -         |     1 | CRCW060368K0FK                                                                                                                                              | VISHAY DALE                                                | 68K                  | RES; SMT (0603); 68K; 1%; +/-100PPM/DEGC; 0.1000W                                                                          |
|     41 | R4, R35       | -         |     2 | CR0603-FX-1001ELF                                                                                                                                           | BOURNS                                                     | 1K                   | RES; SMT (0603); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                           |
|     42 | R5            | -         |     1 | CRCW060391K0FK                                                                                                                                              | VISHAY DALE                                                | 91K                  | RES; SMT (0603); 91K; 1%; +/-100PPM/DEGC; 0.1000W                                                                          |
|     43 | R6            | -         |     1 | CRCW0603110KFK                                                                                                                                              | VISHAY DALE                                                | 110K                 | RES; SMT (0603); 110K; 1%; +/-100PPM/DEGC; 0.1000W                                                                         |
|     44 | R7            | -         |     1 | ERA-3AEB154                                                                                                                                                 | PANASONIC                                                  | 150K                 | RES; SMT (0603); 150K; 0.10%; +/-25PPM/DEGC; 0.1000W                                                                       |
|     45 | R8            | -         |     1 | ERJ-3EKF7502                                                                                                                                                | PANASONIC                                                  | 75K                  | RES; SMT (0603); 75K; 1%; +/-100PPM/DEGC; 0.1000W                                                                          |
|     46 | R9            | -         |     1 | ERJ-3EKF1872; CRCW060318K7FK                                                                                                                                | PANASONIC;VISHAY                                           | 18.7K                | RES; SMT (0603); 18.7K; 1%; +/-100PPM/DEGC; 0.1000W                                                                        |
|     47 | R10           | -         |     1 | CRCW060315K0FK                                                                                                                                              | VISHAY DALE                                                | 15K                  | RES; SMT (0603); 15K; 1%; +/-100PPM/DEGC; 0.1000W                                                                          |

## MAX25530 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES         | DNI/DNP   |   QTY | MFG PART #                                                                         | MANUFACTURER                          | VALUE          | DESCRIPTION                                                                                                                  |
|--------|-----------------|-----------|-------|------------------------------------------------------------------------------------|---------------------------------------|----------------|------------------------------------------------------------------------------------------------------------------------------|
| 48     | R11             | -         |     1 | RC0603FR-0711K5L                                                                   | YAGEO PHYCOMP                         | 11.5K          | RES; SMT (0603); 11.5K; 1%; +/-100PPM/DEGC; 0.1000W                                                                          |
| 49     | R12             | -         |     1 | CRCW060349K9FK; ERJ-3EKF4992                                                       | VISHAY DALE;PANASONIC                 | 49.9K          | RES; SMT (0603); 49.9K; 1%; +/-100PPM/DEGC; 0.1000W                                                                          |
| 50     | R13-R16         | -         |     4 | CRCW060312K0FK                                                                     | VISHAY DALE                           | 12K            | RES; SMT (0603); 12K; 1%; +/-100PPM/DEGC; 0.1000W                                                                            |
| 51     | R17, R30        | -         |     2 | CRCW060310R0FK; MCR03EZPFX10R0; ERJ-3EKF10R0                                       | VISHAY DALE; ROHM                     | 10             | RES; SMT (0603); 10; 1%; +/-100PPM/DEGC; 0.1000W                                                                             |
| 52     | R18             | -         |     1 | ERJ-3EKF5102                                                                       | PANASONIC                             | 51K            | RES; SMT (0603); 51K; 1%; +/-100PPM/DEGC; 0.1000W                                                                            |
| 53     | R19             | -         |     1 | CRCW0603180KFK                                                                     | VISHAY DALE                           | 180K           | RES; SMT (0603); 180K; 1%; +/-100PPM/DEGC; 0.1000W                                                                           |
| 54     | R20             | -         |     1 | ERJ-3EKF1692; RC0603FR-0716K9                                                      | PANASONIC; YAGEO PHYCOMP              | 16.9K          | RES; SMT (0603); 16.9K; 1%; +/-100PPM/DEGC; 0.1000W                                                                          |
| 55     | R21, R36-R39    | -         |     5 | CRCW0603100KFK; RC0603FR-07100KL; RC0603FR-13100KL; ERJ-3EKF1003; AC0603FR-07100KL | VISHAY DALE; YAGEO; YAGEO; PANASONIC  | 100K           | RES; SMT (0603); 100K; 1%; +/-100PPM/DEGC; 0.1000W                                                                           |
| 56     | R22             | -         |     1 | CRCW060347K0FKEAHP                                                                 | VISHAY DRALORIC                       | 47K            | RES; SMT (0603); 47K; 1%; +/-100PPM/DEGC; 0.2500W                                                                            |
| 57     | R23             | -         |     1 | CRCW06032003FK                                                                     | VISHAY DALE                           | 200K           | RES; SMT (0603); 200K; 1%; +/-100PPM/DEGC; 0.1000W                                                                           |
| 58     | R24             | -         |     1 | CRCW060318K0FK                                                                     | VISHAY DALE                           | 18K            | RES; SMT (0603); 18K; 1%; +/-100PPM/DEGC; 0.1000W                                                                            |
| 59     | R25, R26        | -         |     2 | CRCW06031K50FK                                                                     | VISHAY DALE                           | 1.5K           | RES; SMT (0603); 1.5K; 1%; +/-100PPM/DEGC; 0.1000W                                                                           |
| 60     | R27             | -         |     1 | CRCW06033K74FK                                                                     | VISHAY DALE                           | 3.74K          | RES; SMT (0603); 3.74K; 1%; +/-100PPM/DEGC; 0.1000W                                                                          |
| 61     | R28             | -         |     1 | MCR03EZPFX2002; ERJ-3EKF2002; CR0603-FX-2002ELF; CRCW060320K0FK                    | ROHM;PANASONIC; BOURNS;VISHAY DALE    | 20K            | RES; SMT (0603); 20K; 1%; +/-100PPM/DEGC; 0.1000W                                                                            |
| 62     | R31             | -         |     1 | ERJ-3EKF2263                                                                       | PANASONIC                             | 226K           | RES; SMT (0603); 226K; 1%; +/-100PPM/DEGC; 0.1000W                                                                           |
| 63     | R33, R34        | -         |     2 | CRL1206FWR082ELF                                                                   | BOURNS                                | 0.082          | RESISTOR; 1206; 0.082 OHM; 1%; 200PPM; 0.25W; THICK FILM                                                                     |
| 64     | SPACER1-SPACER4 | -         |     4 | 9032                                                                               | KEYSTONE                              | 9032           | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                    |
| 65     | U1              | -         |     1 | MAX25530GTL/V+                                                                     | MAXIM                                 | MAX25530GTL/V+ | EVKIT PART - IC; MAX22531; PACKAGE OUTLINE DRAWING: 21-0141; LAND PATTERN DRAWING: 90-0055; PACKAGE CODE: T4066-5C TQFN40-EP |
| 66     | PCB             | -         |     1 | MAX25530                                                                           | MAXIM                                 | PCB            | PCB:MAX25530                                                                                                                 |
| 67     | C20             | DNP       |     0 | GRM32ER71H106KA12; CL32B106KBJNNN; UMJ325KB7106KMH; 12105C106K4Z2A                 | MURATA; SAMSUNG ELECTRONICS; TAIYO YU | 10UF           | CAP; SMT (1210); 10UF; 10%; 50V; X7R; CERAMIC                                                                                |
| 68     | C28, C33        | DNP       |     0 | N/A                                                                                | N/A                                   | OPEN           | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                     |
| TOTAL  |                 |           |   166 |                                                                                    |                                       |                |                                                                                                                              |

## MAX25530 EV Kit Schematic Diagram

<!-- image -->

## MAX25530 EV Kit PCB Layout Diagrams

MAX25530 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX25530 EV Kit PCB Layout Diagram-Top Layer

<!-- image -->

MAX25530 EV Kit PCB Layout Diagram-Internal Layer 2

<!-- image -->

## MAX25530 EV Kit PCB Layout Diagrams (continued)

MAX25530 EV Kit PCB Layout Diagram-Internal Layer 3

<!-- image -->

MAX25530 EV Kit PCB Layout Diagram-Bottom Layer

<!-- image -->

## MAX25530 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                   | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------|-----------------|
|                 0 | 2/21            | Release for Market Intro                      | -               |
|                 1 | 2/21            | Updated Table 8 Title                         | 8               |
|                 2 | 3/21            | Updated EV Kit Title and Ordering information | 1-16            |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX25530