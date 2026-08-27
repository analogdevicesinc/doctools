<!-- lastmod 2022-08-03 -->
<!-- image -->

Click here to ask an associate for production status of specific part numbers.

## Evaluates: MAX20069/MAX20069B/ MAX20069C

## General Description

The MAX20069 evaluation kit (EV kit) demonstrates the MAX20069 IC, which is  a  highly  integrated  power  supply  plus  LED  backlight  driver  for  automotive  TFT-LCD surface-mount  PCB  that  provides  a  complete  powermanagement solution for small-size automotive displays. The EV kit demonstrates one buck-boost converter, one boost converter, two gate-voltage controllers, and a boost converter that powers a quad-string LED driver.

The EV kit can be configured to operate in stand-alone mode or in I 2 C mode.

The TFT bias portion of the EV kit operates from a 2.8V to 5.5V DC supply voltage. The step-up switching regulator (POS) is configured for a 4V to 18V output that provides up to 150mA. The inverting buck-boost converter (NEG) generates a negative output that tracks the positive output (down to a minimum of -7V) and provides up to 100mA. The  gate-driver  power  supplies  consist  of  regulated charge  pumps  that  generate  +28V  (GVDD)  and  -21.5V (GVEE) and can deliver up to 3mA each.

The LED driver section demonstrates a step-up DC-DC pre-regulator followed by four channels of linear current sinks.  The  step-up  pre-regulator  switches  at  2.2MHz  or at  440kHz  and  operates  as  a  current-mode-controlled regulator capable of providing up to 600mA for the linear circuits.  Each  channel  can  operate  up  to  48V  and  provides up to 150mA.

The LED driver portion of the EV kit operates from a DC supply voltage of 4.5V up to the HB LED string-forward voltage. The EV kit can withstand a 52V load-dump condition.  The  EV  kit  also  demonstrates  the  IC's  features, such as adaptive voltage optimization, Overvoltage and Undervoltage  protection,  cycle-by-cycle  current  limit, thermal  shutdown,  and  digital  PWM  dimming  operation using a digital PWM input signal to control the brightness of the HB LEDs.

The EV kit provides an I 2 C interface that can operate in conjunction with the MINIQUSB+ adapter board or a thirdparty  I 2 C  master.  The  EV  kit  also  includes  Windows ® compatible software that provides a simple graphical user interface (GUI) for exercising the features of the IC.

## MAX20069 Evaluation Kit

## Benefits and Features

- Demonstrates Robustness of MAX20069
- 2.8V to 5.5V Input Range for TFT Power Section
- 4.5V to 42V Input Range for LED Driver Section
- 2.2MHz or 440kHz I 2 C Programmable Boost and Inverted Buck-Boost Switching Frequency with Spread-Spectrum Option on TFT Power Section
- 2.2MHz or 440kHz I 2 C Programmable Boost Frequency with Spread-Spectrum Option on LED Driver Section with four 150mA LED Drivers
- TFT Section Default Output Voltages (Stand-alone Mode)
- +6V Output at 150mA (Step-Up Switching Regulator)
- -6V Output at 100mA (Inverting Buck-Boost Switching Regulator)
- +16V Output at 3mA (Positive-Charge Pump)
- -7V Output at 3mA (Negative-Charge Pump)
- HB LED String Output Currents Configurable for 20mA, 50mA, 100mA, 120mA or 150mA
- Demonstrates Cycle-by-Cycle Current-Limit and Thermal-Shutdown Features on Boost LED Driver
- Demonstrates Adaptive Voltage Optimization on LED Driver Section
- I 2 C Programmability
- Dedicated GUI
- Proven PCB Layout and Thermal Design
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

319-100228; Rev 2; 1/22

## MAX20069 Evaluation Kit

## MAX20069 EV KIT FILES

| FILE                    | DECRIPTION            |
|-------------------------|-----------------------|
| MAX20069GUISetupV01.exe | Windows GUI Installer |

## Quick Start

## Required Equipment

- MAX20069 EV kit
- 2.8 to 5.5V, 2A DC power supply
- 5V to 36V, 4A DC power supply
- Two digital voltmeters (DVMs)
- Four series-connected HB LED strings (6 LEDs each) rated to no less than 150mA
- Current probe to measure the HB LED current
- MINIQUSB+ interface board with USB cable
- Windows-compatible PC with a spare USB port

Note: In the following sections, text that has been bolded refers to the MAX20069 GUI software. Text that is bold and underlined refers to the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

## Stand-Alone Mode

- 1) Verify that jumper J1 is closed (DS1 green LED connected).
- 2) Verify  that  jumper  J9  is  closed  (FAULT  signaling enabled).
- 3) Verify that jumper J23 is open (device enabled).
- 4) Verify that jumper J19 is closed (buck-boost converter input connected to TFT\_POWER\_INPUT PCB pad).
- 5) Verify  that  jumpers  J10,  J11,  J21  are  open  (FBP, FBPG, FBNG feedback Inputs enabled).

## Evaluates: MAX2069/B

M

A

X

2

0

6

9

C

- 6) Verify that jumpers JMP1-JMP4 have shunts installed across pins 1-2 (bleed resistors connected, all current sinks enabled).
- 7) Verify that jumper I2C is open and that jumper J2 is closed  (SEQ  pin  connected  to  GND  through  R1  = 10kΩ resistor).
- 8) Verify  that  a  shunt  is  installed  across  pins  2-3  on jumper J12 (BATT pin connected to BATT PCB pad).
- 9) Verify that jumper 100mA is closed.
- 10) Connect the positive terminal of the 2.8V to 5.5V, 2A DC power supply to the TFT\_POWER\_INPUT PCB pad. Connect the negative terminal of the power supply to a PGND PCB pad.
- 11) Connect  the  positive  terminal  of  the  5V  to  36V,  4A DC  power  supply  to  the  BATT  PCB  pad.  Connect the negative terminal of the power supply to a PGND PCB pad.
- 12) Connect  a  DVM  across  the  OUT1  and AGND  PCB pads.
- 13) Connect a DVM across one of the TFT output PCB pads (POS, NEG, VGVDD, VGVEE) and the AGND PCB pad.
- 14) Connect  the  four  LED  strings  from  VBOOST  to  the OUT1, OUT2, OUT3 and OUT4 PCB pads.
- 15) Clip the current probe across the channel 1 HB LED+ wire to measure the LED current.
- 16) Turn on the 2.8V to 5.5V, 2A DC power supply and set it to 3.3V. The green LED (DS1) should be on at this point.
- 17) Turn on the 5V to 36V, 4A DC power supply and set it to 12V. The LED strings should be on at this point.
- 18) Verify the presence of the following default TFT voltages:  POS = - NEG = 6V; VGVDD = 16V; VGVEE = -7V.
- 19) Measure  the  voltage  from  each  of  the  OUT\_  PCB pads  to  PGND  and  verify  the  lowest  voltage  is approximately 1V.
- 20) Measure the LED current using the current probe and verify all channels.

## MAX20069 Evaluation Kit

## I 2 C Mode

- 1) Visit www.maximintegrated.com/evkitsoftware to download  the  latest  version  of  the  EV  kit  software, MAX20069GUISetupV01.exe.
- 2) Install the EV kit software (GUI) on your PC by running the MAX20069GUISetupV01.exe program. The EV kit software application will be installed together with the required MINIQUSB+ drivers.
- 3) Verify  that  jumper  J1  is  closed  (DS1  green  LED connected).
- 4) Verify  that  jumper  J9  is  closed  (FLTB  signaling enabled).
- 5) Verify  that  jumper  J23  is  closed  (EN  pin  grounded, device to be enabled through I 2 C).
- 6) Verify that jumper J19 is closed (buck-boost converter input connected to TFPOWER\_INPUT PCB pad).
- 7) Verify  that  jumpers  J10,  J11,  J21  are  closed  (FBP, FBPG, FBNG feedback inputs grounded).
- 8) Verify that jumpers JMP1-JMP4 have shunts installed across pins 1-2 (bleed resistors connected, all current sinks enabled).
- 9) Verify that jumper I2C is closed and that jumpers J2J8 are open (SEQ pin connected to TFT\_POWER\_ INPUT PCB pad).
- 10) Verify  that  a  shunt  is  installed  across  pins  2-3  on jumper J12 (BATT pin connected to BATT PCB pad).
- 11) Verify that a shunt is installed either on jumper ADD0 or on jumper ADD1.
- 12) Verify that jumper 100mA is closed.
- 13) Connect the MINIQUSB+ interface board's P3 header to the J24 header on the EV kit.
- 14) Connect the positive terminal of the 2.8V to 5.5V, 2A DC power supply to the TFT\_POWER\_INPUT PCB pad. Connect the negative terminal of the power supply to a PGND PCB pad.
- 15) Connect  the  positive  terminal  of  the  5V  to  36V,  4A DC  power  supply  to  the  BATT  PCB  pad.  Connect the negative terminal of the power supply to a PGND PCB pad.

## Evaluates: MAX2069/B

M

A

X

2

0

6

9

C

- 16) Connect  a  DVM  across  the  OUT1  and AGND  PCB pads.
- 17) Connect a DVM across one of the TFT output PCB pads (POS, NEG, VGVDD, VGVEE) and the AGND PCB pad.
- 18) Connect  the  four  LED  strings  from  VBOOST  to  the OUT1, OUT2, OUT3 and OUT4 PCB pads.
- 19) Clip the current probe across the channel 1 HB LED+ wire to measure the LED current.
- 20) Turn on the 2.8V to 5.5V, 2A DC power supply and set it to 3.3V. The green LED (DS1) should be on at this point.
- 21) Turn on the 5V to 36V, 4A DC power supply and set it to 12V.
- 22) Launch the EV kit software application.
- 23) From  the  EV  kit  software  toolbar,  select Device → Scan for Address .  The  GUI  scans  the  I 2 C  bus  for available slave addresses on the bus and selects the first  one  (in  this  case,  the  MAX20069  I 2 C  address). Press OK once the MAX20069 I 2 C address has been found.
- 24) Verify  that  the  status  bar  in  the  bottom-right  corner of the GUI displays EV Kit: Connected , as shown in Figure 1.
- 25) In  the  0x02 ENABLE register  group  box,  check ENBST,  ENPOS,  ENNEG,  ENGVDD,  ENGVEE, ENBLIGHT  to  activate  the  TFT  Power  Section  and LED Driver Section.
- 26) Verify the presence of the following default TFT voltages:  POS = -NEG = 6V; VGVDD = 8V; VGVEE = -6V.
- 27) Measure  the  voltage  from  each  of  the  OUT\_  PCB pads  to  PGND  and  verify  the  lowest  voltage  is approximately 1V.
- 28) Measure the LED current using the current probe and verify all channels.
- 29) For more details on how to use the GUI and all the features available, click on the GUI Help menu item.

## MAX20069 Evaluation Kit

## Evaluates: MAX2069/B

M

A

X

2

0

6

9

C

Figure 1. MAX20069 Evaluation Kit Software (GUI)

<!-- image -->

## Detailed Description of Hardware

The MAX20069 EV kit consists of two sections with separate power supply inputs.

The TFT power section operates from a DC supply voltage of 2.8V up to 5.5V.

The HB LED driver section operates from a DC supply voltage of 4.5V up to the HB LED forward-string voltage and can handle load-dump conditions up to 52V.

## TFT Power Section

The MAX20069 EV kit TFT power section features two source-driver  power  supplies  (V POS   and  V NEG   accessible  through  the  POS  and  NEG  PCB  pads  on  the  EV kit)  and  two  gate-driver  power  supplies  (DGVDD  and DGVEE), accessible through the GVDD and VGVEE PCB pads on the EV kit).

The source-driver  power  supplies  consist  of  a  synchronous  boost  converter  and  an  inverting  buck-boost  converter that switches at 2.2MHz (or 440kHz) and can gen- erate voltages up to +18V and down to -7V. The positive source driver can deliver up to 150mA, while the negative source driver is capable of 100mA.

The  gate-driver  power  supplies  consist  of  regulated charge  pumps  that  generate  up  to  +28V  and  down  to -21.5V and can deliver up to 3mA each.

## Source-Driver Output-Voltage Selection

The EV kit's step-up switching-regulator output (POS) is set  by  feedback  resistors  R19  and  R22  in  stand-alone mode, with jumper J10 open. The default output voltage is set to 6V. To generate output voltages other than 6V, the user  must  select  different  external  voltage-divider  resistors for R19 and R22. The negative source-driver supply voltage (NEG) is automatically tightly regulated to -POS within ±50mV when jumper J19 is closed. NEG cannot be adjusted independently of POS and is automatically shut down if POS is set to a value higher than 7V in standalone mode.

│

## MAX20069 Evaluation Kit

When jumper J10 is closed, the device should be operated in I 2 C mode. In I 2 C mode, POS and NEG voltages are enabled by checking ENBST , ENPOS and ENNEG in the 0x02 ENABLE register group box. The POS voltage can then be regulated between 4V and 18V in 0.1V steps by  acting  on  the  0x03  VPOS\_SET  slider  bar  while  the NEG voltage is again regulated to  -POS  within  ±50mV. See Table 1 for J10 and J19 jumper settings.

Note: When POS is set to a voltage greater than 7V in I 2 C mode, the NEG converter should be disabled to avoid damage to the device.

Refer to the Source Driver Power Supplies section in the MAX20069 IC data sheet for more information.

## Gate-Driver Output-Voltage Selection

The EV kit's positive gate-driver power supply (V GVDD ) is  set  to  +16V  by  feedback  resistors  R23  and  R20  in stand-alone  mode,  with  jumper  J21  open.  To  generate output voltages other than 16V, select different external voltage-divider resistors for R23 and R20. The negative gate-driver power supply (V GVEE ) is set to -7V in standalone  mode  by  feedback  resistors  R21  and  R24,  with jumper J11 open. To generate output voltages other than -7V, select different external voltage-divider resistors for R21 and R24.

M

A

X

2

0

6

9

C

When jumpers J11 and J21 are closed, the device should be operated in I 2 C mode. In I 2 C mode, GVDD and GVEE voltages  are  enabled  by  checking ENBST , ENPOS , ENGVDD and ENGVEE in  the 0x02  ENABLE register group  box.  The  V GVDD   and  V GVEE   voltages  can  then be regulated between 8V and 28V or between -6V and -21.5V, respectively, in 0.5V steps by acting on the 0x04 DGVDD\_SET and 0x05  DGVEE\_SET slider  bars.  See Table 2 for J11 and J21 jumper settings.

Refer  to  the Gate-Driver  Power  Supplies section  in  the MAX20069 IC data sheet for more information.

## TFT Output Sequencing Control (Stand-Alone Mode Only)

Source-driver  and  gate-driver  outputs'  power-up  and power-off is controlled by the resistor value on the SEQ pin in stand-alone mode. When the EN pin is taken high (jumper  J23  closed),  the  power-up  sequence  can  be decided by connecting one of the R1-R3, R5-R7, or R18 resistors to ground through jumpers J2 to J8 (see Table 3 for jumper settings).

Refer  to  the Output  Sequencing  Control section  in  the MAX20069 IC data sheet for more information.

## Table 1. POS and NEG Voltage Setting (J10, J19)

| SHUNT POSITION   | SHUNT POSITION   | FBP PIN                                              |                                                     |
|------------------|------------------|------------------------------------------------------|-----------------------------------------------------|
| J10              | J19              | FBP PIN                                              | EV KIT OPERATION                                    |
| Open*            | Closed*          | Connected at mid-point between resistors R19 and R22 | POS and -NEG voltages set to 6V in stand-alone mode |
| Closed           | Closed           | Connected to ground                                  | POS and -NEG voltages set through I 2 C regis- ters |

## Table 2. GVDD and VGVEE voltage setting (J11, J21)

| SHUNT POSITION   | SHUNT POSITION   | FBPG                                                   | FBNG PIN                                             | EVKIT OPERATION                                                              |
|------------------|------------------|--------------------------------------------------------|------------------------------------------------------|------------------------------------------------------------------------------|
| J11              | J21              | PIN                                                    | FBNG PIN                                             | EVKIT OPERATION                                                              |
| Open*            | Open*            | Connected at mid-point be- tween resistors R23 and R20 | Connected at mid-point between resistors R21 and R24 | GVDD and GVEE voltages set to 16V and -7V, respectively, in stand-alone mode |
| Closed           | Closed           | Connected to ground                                    | Connected to ground                                  | GVDD and GVEE voltages set through I 2 C registers                           |

*Default Position

## Evaluates: MAX2069/B

│

Table 3. TFT Output Sequencing Control (J2-J8)

| SHUNT POSITION   | POWER-ON SUPPLY SEQUENCING (FROM THE EXPIRATION OF SOFT-START PERIOD)   | POWER-ON SUPPLY SEQUENCING (FROM THE EXPIRATION OF SOFT-START PERIOD)   | POWER-ON SUPPLY SEQUENCING (FROM THE EXPIRATION OF SOFT-START PERIOD)   | POWER-ON SUPPLY SEQUENCING (FROM THE EXPIRATION OF SOFT-START PERIOD)   | POWER-OFF SUPPLY SEQUENCING (FROM THE INSTANT WHEN EN IS DRIVEN LOW)   | POWER-OFF SUPPLY SEQUENCING (FROM THE INSTANT WHEN EN IS DRIVEN LOW)   | POWER-OFF SUPPLY SEQUENCING (FROM THE INSTANT WHEN EN IS DRIVEN LOW)   | POWER-OFF SUPPLY SEQUENCING (FROM THE INSTANT WHEN EN IS DRIVEN LOW)   |
|------------------|-------------------------------------------------------------------------|-------------------------------------------------------------------------|-------------------------------------------------------------------------|-------------------------------------------------------------------------|------------------------------------------------------------------------|------------------------------------------------------------------------|------------------------------------------------------------------------|------------------------------------------------------------------------|
| SHUNT POSITION   | 1 st AFTER 15ms                                                         | 2nd AFTER 30ms                                                          | 3rd AFTER 45ms                                                          | 4th AFTER 60ms                                                          | 1 st AFTER 15ms                                                        | 2nd AFTER 30ms                                                         | 3rd AFTER 45ms                                                         | 4th AFTER 60ms                                                         |
| J2 closed*       | POS                                                                     | NEG                                                                     | DGVEE                                                                   | DGVDD                                                                   | DGVDD                                                                  | DGVEE                                                                  | NEG                                                                    | POS                                                                    |
| J3 closed        | POS                                                                     | NEG                                                                     | DGVDD                                                                   | DGVEE                                                                   | DGVEE                                                                  | DGVDD                                                                  | NEG                                                                    | POS                                                                    |
| J4 closed        | NEG                                                                     | POS                                                                     | DGVEE                                                                   | DGVDD                                                                   | DGVDD                                                                  | DGVEE                                                                  | POS                                                                    | NEG                                                                    |
| J5 closed        | POS                                                                     | DGVEE                                                                   | DGVDD                                                                   | No NEG output                                                           | DGVDD                                                                  | DGVEE                                                                  | POS                                                                    | No NEG output                                                          |
| J6 closed        | POS                                                                     | DGVDD                                                                   | DGVEE                                                                   | No NEG output                                                           | DGVEE                                                                  | DGVDD                                                                  | POS                                                                    | No NEG output                                                          |
| J7 closed        | POS NEG                                                                 | -                                                                       | -                                                                       | DGVDD DGVEE                                                             | DGVDD DGVEE                                                            | -                                                                      | -                                                                      | POS NEG                                                                |
| J8 closed        | DGVEE                                                                   | DGVDD                                                                   | NEG                                                                     | POS                                                                     | POS                                                                    | NEG                                                                    | DGVDD                                                                  | DGVEE                                                                  |

*Default Position

## HBLED Section

The MAX20069 EV kit LED driver section demonstrates the MAX20069 HB LED driver with an integrated step-up DC-DC pre-regulator followed by four channels of linear current  sinks. The  pre-regulator  switches  at  2.2MHz  (or at  440kHz)  and  operates  as  a  current-mode-controlled regulator,  providing  up  to  600mA  for  the  linear  circuit while providing OVP. Cycle-by-cycle current limit is set by resistors R33 and R34, while resistors R31 and R32 set the OVP voltage to 29V. The pre-regulator power section consists  of  inductor  L3,  power-sense  resistors  R33  and R34, Q3 MOSFET and switching diode D7.

Each of the four linear channels (OUT1-OUT4) can operate up to 48V and sinks up to 150mA per channel. Each of the four channels' linear current sinks are configurable for 20mA, 50mA, 100mA, 120mA, or 150mA, or can be disabled independently by connecting the respective OUT\_ channel to ground through a 12kΩ resistor before powerup, with the LED string connected to the corresponding OUT\_ channel removed. Resistors R8-R12 and jumpers 50mA, 100mA, 120mA, and 150mA configure the linear current setting for the IC's ISET pin, which sets the HB LED string current.

The EV kit features PCB pads to facilitate connecting HB LED strings for evaluation. The VBOOST, VBOOST1, and VBOOST2 PCB pads provide connections for connecting each HB LED string's anode to the DC-DC preregulator

M

A

X

2

0

6

9

C

output.  The  OUT1-OUT4  PCB  pads  provide  connections for connecting each HB LED string's cathode to the respective current sink. Capacitors C23 and C40-C42 are included on the design to prevent oscillations and provide stability when using long, untwisted HB LED connecting cables  during  lab  evaluation.  These  capacitors  are  not required if the connection between the LED driver and the HB LEDs is a low-inductance connection.

A DIM PCB pad is provided for using a digital PWM signal to control the brightness of the HB LEDs.

## HB LED Current

The EV kit features four jumpers (50mA, 100mA, 120mA, and  150mA)  to  configure  the  device's  current  sinks  on all four channels. Place a shunt on one of the jumpers to configure the current-sink limits according to Table 4. If no shunt is placed, the LED current will be set to 20mA. To reconfigure the circuit for another current-sink threshold, replace resistor R8, leave all the jumpers open, and use the  following  equation  to  calculate  a  new  value  for  the desired current: I LED  = 1500/R8

where I LED  is  the  desired  HB  LED current per string in amperes and R8 is the new resistor value for obtaining the desired HB LED current. If the HB LED current is reconfigured for a different current, other components on the EV kit may need to be modified. Refer to the MAX20069 IC data sheet to calculate other component values.

## MAX20069 Evaluation Kit

## Channel 1-Channel 4 Current-Sink Disabling

The EV kit features jumpers JMP1-JMP4 that are used to put each OUT\_ current sink in one of three operating states:

- 1)  Normal operation (i.e., OUT\_ is connected to the corresponding ring on the board edge and LEDs are connected from there to the preregulator output (V OUT ).
- 2)  OUT\_ connected through a 12kΩ resistor to GND and thus disabled.
- 3)  OUT\_ shorted to GND, used to test fault detection.

Table 4. LED Current Setting (20mA, 50mA, 100mA, 120mA and 150mA)

| SHUNT POSITION   | ISET RESISTOR SETTING (k Ω )   |   LED CURRENT SINK SETTING (mA) |
|------------------|--------------------------------|---------------------------------|
| Open             | 75                             |                              20 |
| 50mA             | 75&#124;&#124;49.9 = 30        |                              50 |
| 100mA*           | 75&#124;&#124;18.7 = 15        |                             100 |
| 120mA            | 75&#124;&#124;15 = 12.5        |                             120 |
| 150mA            | 75&#124;&#124;11.5 = 10        |                             150 |

*Default Position

Table 5. Selecting OUT\_ Channels Operating State (JMP1-JMP4)

| OUT_   | JUMPER   | SHUNT POSI- TION   | CHANNEL OPERATION                                                                                   |
|--------|----------|--------------------|-----------------------------------------------------------------------------------------------------|
| OUT1   | JMP4     | 1-2*               | Channel 1 operational; connect an HB LED string** between V OUT and OUT1. Bleed resistor connected. |
| OUT1   | JMP4     | 1-3                | Channel 1 not used. OUT1 current sink disabled.                                                     |
| OUT1   | JMP4     | 1-4                | Channel 1 shorted to GND to simulate a fault.                                                       |
| OUT2   | JMP3     | 1-2*               | Channel 2 operational; connect an HB LED string** between V OUT and OUT2. Bleed resistor connected. |
| OUT2   | JMP3     | 1-3                | Channel 2 not used. OUT2 current sink disabled.                                                     |
| OUT2   | JMP3     | 1-4                | Channel 2 shorted to GND to simulate a fault.                                                       |
| OUT3   | JMP2     | 1-2*               | Channel 3 operational; connect an HB LED string** between V OUT and OUT3. Bleed resistor connected. |
| OUT3   | JMP2     | 1-3                | Channel 3 not used. OUT3 current sink disabled.                                                     |
| OUT3   | JMP2     | 1-4                | Channel 3 shorted to GND to simulate a fault.                                                       |
| OUT4   | JMP1     | 1-2*               | Channel 4 operational; connect an HB LED string** between V OUT and OUT4. Bleed resistor connected. |
| OUT4   | JMP1     | 1-3                | Channel 4 not used. OUT4 current sink disabled.                                                     |
| OUT4   | JMP1     | 1-4                | Channel 4 shorted to GND to simulate a fault.                                                       |

## Evaluates: MAX2069/B

M

A

X

2

0

6

9

C

To  disable  a  channel,  install  a  jumper  in  the  channel's respective jumper across pins 1-3, connecting the OUT\_ to  ground  through  a  12kΩ  resistor.  The  dimming  algo -rithm in the IC requires that higher numbered OUT\_ current sinks are disabled first (e.g., if only two strings are needed,  OUT1-OUT2  should  be  used,  with  OUT3  and OUT4  disabled).  See  Table  5  for  jumper  settings.  The 100kΩ bleed resistors are installed to prevent the OUT\_ leakage current from dimly turning on large LED strings, even when the DIM signal is low.

│

## MAX20069 Evaluation Kit

## HB LED Digital Dimming Control

The EV kit features a DIM PCB input pad for connecting an external digital PWM signal. Apply a digital PWM signal with a 0.8V logic-low level (or less) and 2.1V logic-high level (or greater). The DIM signal frequency should be at least 100Hz. If the DIM frequency is changed during operation, the MAX20069 must be powered off and on again to register the change. To adjust the HB LED brightness, vary the signal duty cycle from 0% to 100% and maintain a minimum pulse width of 500ns. Apply the digital PWM signal  to  the  DIM  PCB  pad. The  DIM  input  of  the  IC  is pulled up internally with a 5μA (typ) current source.

For  additional  information  on  the  device's  dimming  feature, refer to the PWM Dimming section in the MAX20069 IC data sheet.

## Phase-Shift Operation

The  EV  kit  demonstrates  the  phase-shifting  feature  of the IC. Phase shift is enabled by default at each device's power-up, but it can be disabled when operating in I 2 C mode. To disable it, uncheck PSEN in the 0x02 ENABLE register  group  box.  This  operation  must  be  always  performed before enabling any LED string.

When  phase  shifting  is  enabled,  each  current  sink's turn-on is separated by 360°/n, where n is the number of enabled strings. When phase shifting is disabled, the dimming of each string is controlled directly by the DIM input and all current sinks turn on and off at the same time.

## Overvoltage Detection and Protection

The resistors (R31 and R32) connected to OVP are configured for a V OUT\_OVP  of 29V. This sets the maximum converter  output  (V BOOST )  voltage  at  29V.  During  an open-LED string condition, the converter output ramps up to the output overvoltage threshold. Capacitor C33 can be added to provide noise filtering to the overvoltage signal. To reconfigure the circuit for a different voltage, replace resistor  R31  with  a  different  value  using  the  following equation: R31 = [(V OUT\_OVP /1.23) - 1] x R32

Where  R32  is  10kΩ,  V OUT\_OVP  is  the  overvoltageprotection threshold desired, and R31 is the new resistor value  for  obtaining  the  desired  overvoltage  protection. Refer  to  the Open-LED  Management  and  Overvoltage Protection (OVP) section in the MAX20069 IC data sheet for additional information.

## SDA and SCL Voltages (SDA\_PU, SCL\_PU)

SDA and SCL voltage supplies can be selected between the TFT input voltage and the fixed 3.3V provided by the MINIQUSB+ (see Table 6).

## Evaluates: MAX2069/B

## Power LED Enable (J1)

A  green  LED  (DS1)  is  used  to  indicate  that  the  EV  kit is  powered  on.  The  LED  can  be  disconnected  from the  power  supply,  allowing  precise  current-consumption evaluation. See Table 7 for shunt positions.

## Enable (EN)

The EV kit features an enable input that can be used in stand-alone mode to enable/disable the device and place it  in  shutdown  mode.  To  enable  the  EV  kit  whenever power is applied to the TFT\_POWER\_INPUT PCB pad, open  jumper  J23.  Jumper  J23  must  be  kept  closed  to disable the device in stand-alone mode, or to operate it in I 2 C mode. See Table 8 for J23 jumper settings.

## Table 6. SDA and SCL supply (SDA\_PU, SCL\_PU)

| SHUNT POSITION   | SHUNT POSITION   | SDAAND SCL SUPPLY                 |
|------------------|------------------|-----------------------------------|
| SDA_PU           | SCL_PU           | SDAAND SCL SUPPLY                 |
| Open*            | Open*            | 3.3V (with MINIQUSB+ con- nected) |
| Closed           | Closed           | TFT input voltage                 |

*Default Position

## Table 7. DS1 Enable Shunt Positions (J1)

| SHUNT POSITION   | DS1 POWER LED   |
|------------------|-----------------|
| Closed*          | Connected       |
| Open             | Disconnected    |

*Default Position

## Table 8. Enable Jumper Settings (J23)

| SHUNT POSITION   | EN PIN                        | EV KIT OPERATION                                     |
|------------------|-------------------------------|------------------------------------------------------|
| Open*            | Connected to TFT_ POWER_INPUT | Enabled when TFT_ POWER_INPUT is powered             |
| Closed           | Connected toAGND              | Disabled in stand-alone mode/operative in I 2 C mode |

*Default Position

M

A

X

2

0

6

9

C

│

## TFT and LED Driver Sections Switching Frequency Selection (I 2 C Mode Only)

In I 2 C mode, the EV kit's step-up (POS) and buck-boost (NEG)  switching-regulator  frequencies  are  selectable between  440kHz  and  2.2MHz  by  checking/unchecking SWFREQ\_TFT in  the 0x01  CNFG\_GEN register  group box. Similarly, the EV kit's LED driver switching frequency is selectable between 440kHz and 2.2MHz by checking/ unchecking BL\_SWFREQ in  the 0x01 CNFG\_GEN register group box.

Spread spectrum can be disabled/enabled in both sections by  checking/unchecking SSOFF\_TFT and SSOFF\_BL , respectively in the 0x01 CNFG\_GEN register group box.

Note: Switching frequency is fixed at 2.2MHz and spread spectrum  is  always  enabled  for  both  sections  in  standalone mode.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20069EVKIT# | EV Kit |

#Denotes RoHS compliant.

## Evaluates: MAX2069/B

M

A

X

2

0

6

9

C

## Fault-Indicator Output (FLTB)

The EV kit features the IC's open-drain FLTB output. In I 2 C mode, FLTB goes low when an open-LED or shortedLED string is detected, during thermal warning/shutdown, during boost undervoltage/overvoltage, or during TFT-rail undervoltage events. In stand-alone mode, the FLTB signal is continuously switching at 1kHz (typ) at different duty cycles depending on the type of fault detected.

Keep jumper J9 closed to allow the DS2 red LED enabling should FLTB go low. Refer to the Fault Protection section in the MAX20069 IC data sheet for additional information on the FLTB signal.

## MAX20069 Evaluation Kit

## MAX20069 EV Kit Bill of Materials

| REFERENCE DESIGNATOR                                                                                                                                     |   QTY | VALUE         | DESCRIPTION                                                                                                              | MFG PART #                                                         | MANUFACTURER                |
|----------------------------------------------------------------------------------------------------------------------------------------------------------|-------|---------------|--------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|-----------------------------|
| 50MA, 100MA, 120MA, 150MA, ADD0, ADD1, I2C, J1-J11, J19, J21, J23, SCL_PU, SDA_PU                                                                        |    23 | PBC02SAAN     | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; -65 DEGC TO +125 DEGC;                             | PBC02SAAN                                                          | SULLINS ELECTRONICS CORP.   |
| AGND, AGND1, BATT, DGND, DIM, EN, FLT, GVDD, HVINP, NEG, OUT1- OUT4, PGND, PGND1, PGND2, POS, SCL, SDA, TFT_POWER_INPUT, VBOOST, VBOOST1, VBOOST2, VGVEE |    25 | MAXIMPAD      | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                 | 9020 BUSS                                                          | WEICO WIRE                  |
| C1, C3, C8, C12, C25                                                                                                                                     |     5 | 2.2UF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S                               | GRM188C71E225KE11                                                  | MURATA                      |
| C2, C4, C7                                                                                                                                               |     3 | 10UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 6.3V; TOL=20%; MODEL=CL SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R              | CL10B106MQ8NRN                                                     | SAMSUNG ELECTRONICS         |
| C5, C6, C17, C20                                                                                                                                         |     4 | 4.7UF         | CAPACITOR; SMT (0805); CERAMIC CHIP; 4.7UF; 25V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                       | C2012X7R1E475K125AB                                                | TDK                         |
| C9, C10, C15, C16, C19, C39                                                                                                                              |     6 | 0.1UF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                              | CC0603KRX7R0BB104; GRM188R72A104KA35; GCJ188R72A104KA01            | YAGEO;MURATA; MURATA        |
| C11                                                                                                                                                      |     1 | 1UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                 | GRM188R71E105KA12D; CGA3E1X7R1E105K; TMK107B7105KA; 06033C105KAT2A | MURATA;TDK;TAIYO YUDEN;AVX  |
| C13, C18                                                                                                                                                 |     2 | 0.1UF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                         | GCJ188R71H104KA12; GCM188R71H104K; CGA3E2X7R1H104K080AA            | MURATA;MURATA;TDK           |
| C14                                                                                                                                                      |     1 | 0.1UF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R               | C1608X7R1E104K080AA                                                | TDK                         |
| C21, C24                                                                                                                                                 |     2 | 0.1UF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 10V; TOL=10%; MODEL=C0603 SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R           | C0603C104K8RAC                                                     | KEMET                       |
| C22, C29                                                                                                                                                 |     2 | 100PF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 100PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                | 06035C101JAT                                                       | AVX                         |
| C23, C40-C42                                                                                                                                             |     4 | 0.001UF       | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.001UF; 100V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                    | GRM188R72A102KA01                                                  | MURATA                      |
| C26, C31                                                                                                                                                 |     2 | 1UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                 | UMK107AB7105KA                                                     | TAIYO YUDEN                 |
| C27                                                                                                                                                      |     1 | 2.2UF         | CAPACITOR; SMT (0603); CERAMIC; 2.2UF; 6.3V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                             | CGA3E1X7R0J225K080AC                                               | TDK                         |
| C28, C33                                                                                                                                                 |     0 | OPEN          | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                 | DO NOT PROCURE: N/A                                                | -                           |
| C30                                                                                                                                                      |     1 | 0.047UF       | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.047UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                            | C0603C473K1RAC                                                     | KEMET                       |
| C32                                                                                                                                                      |     1 | 47UF          | CAPACITOR; SMT; CASE_F; ELECTROLYTIC-ALUMINUM; 47uF; 50V; 20%; SURFACE MOUNT ELECTROLYTIC CAPACITOR; -40degC to +105degC | MKA50VC47RMH10TP                                                   | UNITED CHEMI-CON            |
| C34                                                                                                                                                      |     1 | 0.1UF         | CAPACITOR; SMT (0603); CERAMIC; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                    | CL10B104KB8NFN                                                     | SAMSUNG ELECTRONICS         |
| C35                                                                                                                                                      |     1 | 0.22UF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.22UF ; 10V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                             | CC0603KRX7R6BB224                                                  | YAGEO                       |
| C36, C38                                                                                                                                                 |     2 | 4.7UF         | CAPACITOR; SMT (1206); CERAMIC CHIP; 4.7UF ; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                        | CGA5L3X7R1H475K160AB                                               | TDK                         |
| C37                                                                                                                                                      |     1 | 56UF          | CAPACITOR; SMT; ALUMINUM-ELECTROLYTIC; 56UF; 50V; TOL=20%; TG=-55 DEGC TO +125 DEGC; SUPER LOW ESR                       | 50HVP56M                                                           | SUNCON                      |
| D1                                                                                                                                                       |     1 | CMHSH5-4      | DIODE; SCH; SMT (SOD-123); PIV=40V; IF=0.5A; -65 DEGC TO +125 DEGC                                                       | CMHSH5-4                                                           | CENTRAL SEMICONDUCTOR CORP. |
| D2-D5                                                                                                                                                    |     4 | MMBD4148SE    | DIODE; SS; SMT (SOT-23); PIV=100V; IF=0.2A                                                                               | MMBD4148SE                                                         | FAIRCHILD SEMICONDUCTOR     |
| D6                                                                                                                                                       |     1 | CMPD914       | SMALL SIGNAL DIODE                                                                                                       | CMPD914                                                            | CENTRAL SEMICONDUCTOR       |
| D7                                                                                                                                                       |     1 | NRVBS260T3G   | DIODE; SCH; SURFACE MOUNT SCHOTTKY POWER RECTIFIER; SMB; PIV=60V; IF=2A                                                  | NRVBS260T3G                                                        | ON SEMICONDUCTOR            |
| DS1                                                                                                                                                      |     1 | LTST-C170GKT  | DIODE; LED; STANDARD; GREEN; SMT (0805); PIV=2.1V; IF=0.01A                                                              | LTST-C170GKT                                                       | LITE-ON ELECTRONICS INC     |
| DS2                                                                                                                                                      |     1 | LTST-C170EKT  | DIODE; LED; STANDARD; RED; SMT (0805); PIV=2.0V; IF=0.02A                                                                | LTST-C170EKT                                                       | LITE-ON ELECTRONICS INC     |
| J12                                                                                                                                                      |     1 | PEC03SAAN     | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC;                             | PEC03SAAN                                                          | SULLINS ELECTRONICS CORP.   |
| J13                                                                                                                                                      |     1 | " 22-05-3081" | CONNECTOR; MALE; THROUGH HOLE; FRICTION LOCK HEADER; RIGHT ANGLE; 8PINS; 0 DEGC TO +75 DEGC                              | " 22-05-3081"                                                      | MOLEX                       |

## Evaluates: MAX2069/B

M

A

X

2

0

6

9

C

## MAX20069 EV Kit Bill of Materials (continued)

| REFERENCE DESIGNATOR   |   QTY | VALUE                | DESCRIPTION                                                                                                                | MFG PART #                                                                       | MANUFACTURER                        |
|------------------------|-------|----------------------|----------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|-------------------------------------|
| J24                    |     1 | 803-87-020-20-001101 | EVKIT PART-CONNECTOR; FEMALE; TH; DOUBLE ROW; 2.54MM; RIGHT ANGLE SOLDER TAIL; MATING PIN DIA 0.76MM; RIGHT ANGLE; 20PINS; | 803-87-020-20-001101                                                             | PRECI-DIP SA                        |
| JMP1-JMP4              |     4 | " 22-28-4043"        | CONNECTOR; MALE; THROUGH HOLE; FLAT VERTICAL BREAKAWAY; STRAIGHT; 4PINS                                                    | " 22-28-4043"                                                                    | MOLEX                               |
| L1, L2                 |     2 | 2.2UH                | INDUCTOR; SMT; FERRITE BOBBIN CORE; 2.2UH; TOL=+/-20%; 2A; -40 DEGC TO +85 DEGC                                            | LPS4018-222MLC                                                                   | COILCRAFT                           |
| L3                     |     1 | 10UH                 | INDUCTOR; SMT; FERRITE BOBBIN CORE; 10UH; TOL=+/-20%; 4.2A; -40 DEGC TO +85 DEGC                                           | MSS1246-103MLB                                                                   | COILCRAFT                           |
| L4                     |     1 | 0.60UH               | INDUCTOR; SMT; CORE MATERIAL= COMPOSITE; 0.60UH; TOL=+/-20%; 11.7A                                                         | XAL4020-601ME                                                                    | COILCRAFT                           |
| Q1                     |     1 | NVMFS5826NLT1G       | TRAN; POWER MOSFET; SINGLE N-CHANNEL; NCH; SO-8FL; PD-(39W); I-(26A); V-(60V)                                              | NVMFS5826NLT1G                                                                   | ON SEMICONDUCTOR                    |
| R1, R29, R32           |     3 | 10K                  | RESISTOR; 0603; 10K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                      | CRG0603F10K                                                                      | TE CONNECTIVITY                     |
| R2                     |     1 | 30K                  | RESISTOR; 0603; 30K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                     | CRCW060330K0FK                                                                   | VISHAY DALE                         |
| R3                     |     1 | 68K                  | RESISTOR, 0603, 68K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                     | CRCW060368K0FK                                                                   | VISHAY DALE                         |
| R4, R35                |     2 | 1K                   | RESISTOR; 0603; 1K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                      | CR0603-FX-1001ELF                                                                | BOURNS                              |
| R5                     |     1 | 91K                  | RESISTOR; 0603; 91K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                     | CRCW060391K0FK                                                                   | VISHAY DALE                         |
| R6                     |     1 | 110K                 | RESISTOR, 0603, 110K, 1%, 100PPM, 0.10W, THICK FILM                                                                        | CRCW0603110KFK                                                                   | VISHAY DALE                         |
| R7                     |     1 | 150K                 | RESISTOR; 0603; 150K OHM; 0.1%; 25PPM; 0.1W; THIN FILM                                                                     | ERA-3AEB154                                                                      | PANASONIC                           |
| R8                     |     1 | 75K                  | RESISTOR; 0603; 75K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                     | ERJ-3EKF7502V                                                                    | PANASONIC                           |
| R9                     |     1 | 18.7K                | RESISTOR; 0603; 18.7K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                   | ERJ-3EKF1872V                                                                    | PANASONIC                           |
| R10                    |     1 | 15K                  | RESISTOR, 0603, 15K OHM,1%, 100PPM, 0.10W, THICK FILM                                                                      | CRCW060315K0FK                                                                   | VISHAY DALE                         |
| R11                    |     1 | 11.5K                | RESISTOR; 0603; 11.5K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                   | RC0603FR-0711K5L                                                                 | YAGEO PHYCOMP                       |
| R12                    |     1 | 49.9K                | RESISTOR; 0603; 49.9K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                   | CRCW060349K9FK;ERJ-3EKF4992V                                                     | VISHAY DALE; PANASONIC              |
| R13-R16                |     4 | 12K                  | RESISTOR, 0603, 12K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                     | CRCW060312K0FK                                                                   | VISHAY DALE                         |
| R17, R30               |     2 | 10                   | RESISTOR; 0603; 10 OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                       | ERJ-3EKF10R0                                                                     | PANASONIC                           |
| R18                    |     1 | 51K                  | RESISTOR; 0603; 51K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                      | ERJ-3EKF5102                                                                     | PANASONIC                           |
| R19                    |     1 | 180K                 | RESISTOR, 0603, 180K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                    | CRCW0603180KFK                                                                   | VISHAY DALE                         |
| R20                    |     1 | 16.9K                | RESISTOR; 0603; 16.9K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                   | ERJ-3EKF1692V;RC0603FR-0716K9                                                    | PANASONIC;YAGEO PHYCOMP             |
| R21                    |     1 | 100K                 | RESISTOR; 0603; 100K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                     | ERJ-3EKF1003                                                                     | PANASONIC                           |
| R22                    |     1 | 47K                  | RESISTOR; 0603; 47K OHM; 1%; 100PPM; 0.25W; THICK FILM                                                                     | CRCW060347K0FKEAHP                                                               | VISHAY DRALORIC                     |
| R23                    |     1 | 200K                 | RESISTOR; 0603; 200K; 1%; 100PPM; 0.10W; THICK FILM                                                                        | CRCW06032003FK                                                                   | VISHAY DALE                         |
| R24                    |     1 | 18K                  | RESISTOR, 0603, 18K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                     | CRCW060318K0FK                                                                   | VISHAY DALE                         |
| R25, R26               |     2 | 1.5K                 | RESISTOR; 0603; 1.5K; 1%; 100PPM; 0.10W; THICK FILM                                                                        | CRCW06031K50FK                                                                   | VISHAY DALE                         |
| R27                    |     1 | 3.74K                | RESISTOR, 0603, 3.74KOHMS, 1%, 100PPM, 0.1W, THICK FILM                                                                    | CRCW06033K74FK                                                                   | VISHAY DALE                         |
| R28                    |     1 | 20K                  | RESISTOR; 0603; 20K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                     | MCR03EZPFX2002;ERJ-3EKF2002; CR0603-FX-2002ELF                                   | ROHM;PANASONIC; BOURNS              |
| R31                    |     1 | 226K                 | RESISTOR; 0603; 226K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                     | ERJ-3EKF2263                                                                     | PANASONIC                           |
| R33, R34               |     2 | 0.082                | RESISTOR; 1206; 0.082 OHM; 1%; 200PPM; 0.25W; THICK FILM                                                                   | CRL1206FWR082ELF                                                                 | BOURNS                              |
| R36-R39                |     4 | 100K                 | RESISTOR; 0603; 100K; 1%; 100PPM; 0.10W; THICK FILM                                                                        | CRCW0603100KFK;RC0603FR- 07100KL;RC0603FR-13100KL;ERJ- 3EKF1003;AC0603FR-07100KL | VISHAY;YAGEO;YAGEO; PANASONIC;YAGEO |
| U1                     |     1 | MAX20069GTL/V+       | EVKIT PART - IC; MAX20069GTL/V+; PACKAGE CODE: T4066-5C                                                                    | MAX20069GTL/V+                                                                   | MAXIM                               |
| -                      |     1 | -                    | PCB:MAX20069 EVKIT                                                                                                         | MAX20069EVKIT#                                                                   | MAXIM                               |

M

A

X

2

0

6

9

C

## MAX20069 EV Kit Schematic

<!-- image -->

M

A

X

2

0

6

9

C

## MAX20069 EV Kit PCB Layout Diagrams

MAX20069 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

M

A

X

2

0

6

9

C

MAX20069 EV Kit PCB Layout-Top Layer

<!-- image -->

MAX20069 EV Kit PCB Layout-Internal Layer 2

<!-- image -->

│

## MAX20069 EV Kit PCB Layout Diagrams (continued)

MAX20069 EV Kit PCB Layout-Internal Layer 3

<!-- image -->

MAX20069 EV Kit PCB Layout-Bottom Layer

<!-- image -->

│

M

A

X

2

0

6

9

C

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------|-----------------|
|                 0 | 8/18            | Initial release                                            | -               |
|                 1 | 7/20            | Added MAX20069B, updated GUI figure in Quick Start section | 1-14            |
|                 2 | 1/22            | Added MAX20069C                                            | All             |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX2069/B

M

A

X

2

0

6

9

C