<!-- lastmod 2022-08-03 -->
## MAX25014 Evaluation Kit

## General Description

The MAX25014 evaluation kit (EV kit) demonstrates the MAX25014,  integrated  4-channel  high-brightness  LED driver with boost controller and I 2 C interface for automotive displays.

The EV kit operates from a DC supply voltage between 2.5V and 36V and the switching frequency can be either set at 2.2MHz or at 400kHz. The EV kit can only be configured to operate in I 2 C  mode. Spread-spectrum mode (SSM)  is  enabled  by  default  for  EMI  improvement,  but it  can  be  disabled  by  acting  on  a  register  bit.  The  EV kit  demonstrates  phase-shifted  pulse-width  modulation (PWM) dimming. Dimming can be performed either externally using a PWM signal applied to the DIM PCB pad or internally by programming the desired dimming frequency and  individual  duty  cycle  via  I 2 C.  The  hybrid  dimming feature  can  also  be  enabled  through  a  register  bit  to reduce  EMI.  The  EV  kit  also  demonstrates  short-LED, open-LED, Boost output Undervoltage and Overvoltage, and overtemperature-fault  protection.  LED  current  measurement and boost output voltage measurement are also demonstrated.

For operation at switching frequencies other than 2.2MHz or  400kHz,  the  external  components  should  be  chosen according  to  the  calculations  in  the  MAX25014  IC  data sheet.

The EV kit provides an I 2 C interface that can operate in conjunction with the MINIQUSB+ adapter board or a thirdparty  I 2 C  master.  The  EV  kit  also  includes  Windows ® compatible software that provides a simple graphical user interface (GUI) for exercising the features of the IC.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

## Features

- Demonstrates Robustness of MAX25014
- Wide 2.5V to 36V Input Operating Range (Up to 40V Load Dump)
- Powers HB LEDs (Up to four strings) for Medium-toLarge-Sized LCD Displays in Automotive and Display Backlight Applications
- 400kHz to 2.2MHz Resistor-Programmable Switching Frequency with Spread-Spectrum option
- Phase-Shift Dimming option
- Demonstrates Cycle-by-Cycle Current Limit and Thermal-Shutdown Features
- Demonstrates Wide Dimming Ratio
- Demonstrates Fail-Safe Operation
- I 2 C Programmability
- Dedicated GUI
- Proven PCB and Thermal Design
- Fully Assembled and Tested

## MAX25014 EV Kit Files

| FILE                    | DESCRIPTION           |
|-------------------------|-----------------------|
| MAX25014GUISetupV01.exe | Windows GUI Installer |

Ordering Information appears at end of data sheet.

<!-- image -->

Evaluates: MAX25014

## MAX25014 Evaluation Kit

## Quick Start

## Required Equipment

- MAX25014 EV kit
- 2.5V to 36V, 16A DC power supply
- Two digital voltmeters (DVMs)
- Four series-connected HB LED strings (9 LEDs each) rated to no less than 150mA
- Current probe to measure the HB LED current
- MINIQUSB+ interface board with USB cable
- Windows-compatible PC with a spare USB port

## Procedure

The EV kit is fully assembled and tested. Use the following steps to verify board operation.

Note : In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Download the latest version of the EV kit software, MAX25014GUISetupV01.exe, from the product's landing page at www.maximintegrated.com .
- 2) Install the EV kit software (GUI) on your PC by running the MAX25014GUISetupV01.exe program. The EV kit software application is installed together with the required MINIQUSB+ drivers.
- 3) Verify that jumper J17 is closed and that jumper J22 is open (2.2MHz switching frequency selected).
- 4) Verify that jumper J1 is closed (DS1 green LED connected).
- 5) Verify that jumper J23 is closed (FSEN function disabled).
- 6) Verify that jumper J11 is closed (FAULT signaling through DS2 red LED enabled).
- 7) Verify that jumper J9 is closed and that jumper J7 is open (49.9kΩ IREF resistor selected).
- 8) Verify that a shunt is installed across pins 1-2 on jumper J2 (device enabled).
- 9) Verify that jumpers JMP3, JMP6-JMP7 and JMP9 have shunts installed across pins 1-2 (bleed resistors connected, all current sinks enabled).
- 10) Connect the MINIQUSB+ interface board's P3 header to the J24 header on the EV kit.
- 11) Connect the positive terminal of the power supply to the IN PCB pad. Connect the negative terminal of the power supply to a PGND PCB pad.
- 12) Connect a DVM across the OUT1 and GND PCB pads.
- 13) Connect the four LED strings from BOOST PCB pad to the OUT1, OUT2, OUT3, and OUT4 PCB pads.
- 14) Clip the current probe across the channel 1 HB LED+ wire to measure the LED current.
- 15) Turn on the power supply and set it to 12V. The green LED (DS1) should be on at this point.
- 16) Launch the EV kit software application.
- 17) From the EV kit software toolbar, select Device → Scan for Address . The GUI scans the I 2 C bus for available slave addresses on the bus and selects the first one (in this case, the MAX25014 I 2 C address). Press OK once the MAX25014 I 2 C address has been found.
- 18) Verify that the status bar in the bottom-right corner of the GUI displays EV Kit: Connected , as shown in Figure 1.
- 19) Uncheck the Max ISET box in the upper-left corner of the GUI window.
- 20) In the 0x02 ISET register group box, select the desired OUT\_ current value (45mA to 120mA in 5mA steps) by acting on the ISET slider bar, then click the Refresh button.
- 21) In the 0x02 ISET register group box, check ENA to activate the driver.
- 22) Measure the voltage from each of the OUT\_ PCB pads to PGND and verify the lowest voltage is approximately 1V.
- 23) Measure the LED current using the current probe and verify all channels.
- 24) For more details on how to use the GUI and all the features available, click on the GUI Help menu item.

## Evaluates: MAX25014

## MAX25014 Evaluation Kit

Figure 1. MAX25014 Evaluation Kit Software (GUI)

<!-- image -->

## Detailed Description of Hardware

The MAX25014 EV kit demonstrates the MAX25014 HB LED driver with an integrated step-up DC-DC preregulator followed by four linear current sinks to drive up to four strings of LEDs. The preregulator switches at 2.2MHz (or at  400kHz)  and  operates  as  a  current-mode-controlled regulator,  providing  up  to  600mA  for  the  linear  current sinks  as  well  as  overvoltage  protection.  The  cycle-bycycle current limit is set by resistors R19, R24, and R25, while resistors R4 and R5 set the overvoltage protection voltage to 39V. The preregulator power section consists of  inductor  L2,  power-current  sense  resistors  R19,  R24 and R25, Q3 MOSFET and switching diode D1. The EV kit circuit operates from a 2.5V DC supply voltage up to the  HB  LED  forward  string  voltage.  The  circuit  handles load-dump conditions up to 40V.

The EV kit circuit demonstrates ultra-low shutdown current  when  the  EN  pin  of  the  device  is  pulled  to  ground by shorting the EN PCB pad to ground. Each of the four linear current sinks (OUT1-OUT4) is capable of operating up to 48V, sinking up to 149mA per channel.

Each  of  the  four  channels'  linear  current  sinks  is  I 2 Cconfigurable  for  45mA  to  120mA  (56mA  to  149mA  if 40.2 kΩ IREF  resistor  is  selected),  or  can  be  disabled independently either by acting on 0x13 DISABLE register group box or by acting on jumpers JMP3, JMP6-JMP7, and JMP9, which are used to disable outputs selectively when the HB LED string is not connected.

The measurements of LED currents through each channel and of the voltage on the BSTMON pin can be triggered by checking CONVERT in the same register group box and by clicking the Refresh button.

The results are stored and shown on the 0x15 to 0x18 IOUT1-4 registers' slider bars (LED currents) and on the 0x14 BSTMON\_IIN register's slider bar.

The  EV  kit  features  PCB  pads  to  facilitate  connecting HB  LED  strings  for  evaluation.  The  BOOST  PCB  pads provide connections for connecting each HB LED string's anode  to  the  DC-DC  preregulator  output.  The  OUT1OUT4 PCB pads provide connections for connecting each HB LED string's cathode to the respective current sink. Capacitors C18, C23, C24, and C25 are included on the design to prevent oscillations and provide stability when using long, untwisted HB LED connecting cables during lab  evaluation.  These  capacitors  are  not  required  if  the connection between the LED driver and the HB LEDs is a low-inductance connection.

A DIM PCB pad is provided for using a digital PWM signal to control the brightness of the HB LEDs. Test points are also provided for easy access to the device's VCC regulator output as well as the COMP, IN, NGATE, BSTMON pins and the switching node of the preregulator (LX).

│

## MAX25014 Evaluation Kit

## SDA and SCL Voltages (J18-J19, J21)

SDA and SCL voltage supplies can be selected between the  VCC  voltage  and  the  fixed  3.3V  provided  by  the MINIQUSB+. Alternatively, the user can force an external voltage as digital reference (see Table 1).

Caution: When using a supply higher than 3.3V for SDA and  SCL  pins,  keep  the  EV  kit  disconnected  from  the MINIQUSB+ board to avoid any possible damage to the latter.

## Power LED Enable (J1)

A  green  LED  (DS1)  is  used  to  indicate  that  the  EV  kit is  powered  on.  The  LED  can  be  disconnected  from the  power  supply,  allowing  precise  current-consumption evaluation. See Table 2 for shunt positions.

## Table 1. SDA and SCL Supply (J18-J19, J21)

| SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION                               | SDAAND SCL SUPPLY               |
|------------------|------------------|----------------------------------------------|---------------------------------|
| J18              | J19              | J21                                          |                                 |
| Open*            | Open*            | Open*                                        | 3.3V (with MINIQUSB+ connected) |
| Closed           | Closed           | Open                                         | VCC                             |
| Open             | Open             | 1-External SDA 2-External SCL 3-External GND | Externally provided             |

## Table 2. DS1 Enable (J1)

| SHUNT POSITION   | DS1 POWER LED   |
|------------------|-----------------|
| Closed*          | Connected       |
| Open             | Disconnected    |

## Table 3. Enable (J2)

| SHUNT POSITION   | EN PIN                  | EV KIT OPERATION                          |
|------------------|-------------------------|-------------------------------------------|
| 1-2*             | Connected to IN         | Enabled when IN is powered.               |
| 2-3              | Connected to EN PCB pad | Enabled/disabled by signal on EN PCB pad. |

## Enable (EN)

The EV kit features an enable input that can be used to enable/disable the device and place it in shutdown mode. To  enable  the  EV  kit  whenever  power  is  applied  to  IN, place the jumper across pins 1-2 on jumper J2. To enable the EV kit using an external enable signal, place the jumper across pins 2-3 on J2 and apply a logic signal on the EN PCB input pad on the EV kit. A 1MΩ pulldown resistor on the EV kit pulls the EN input to ground in the event that J2 is left open or the EN signal is high impedance. Refer to the Enable section in the MAX25014 IC data sheet for additional information. See Table 3 for J2 jumper settings.

Evaluates: MAX25014

│

## MAX25014 Evaluation Kit

## Switching Frequency

Jumpers J17 and J22 (0-Ω resistors) are used to set the switching frequency of the MAX25014 to either 2.2MHz or 400kHz. When J17 is closed and J22 is open, the switching frequency is set to 2.2MHz. When J17 is open and J22 is  closed,  the  switching  frequency  is  nominally  400kHz. See Table 4 for jumper settings.

The EV kit is optimized for 2.2MHz switching operation by default. When selecting a switching frequency of 400kHz L2 should be changed to 10µH-22µH to maintain acceptable efficiency. Other component value adjustments can be needed.

The spread-spectrum feature can be enabled/disabled by checking/unchecking SS\_OFF in the 0x12 SETTING register group box. With spread-spectrum enabled, it is also possible to select the amount of spread by checking (±3%)/ unchecking (±6%) SSL in the above register group box.

Refer to the Oscillator Frequency/External Synchronization and Spread-Spectrum Modulation sections in the MAX25014 IC data sheet for more information.

## Table 4. Switching Frequency (J17 and J22)

| SHUNT POSITIO N   | SHUNT POSITIO N   | RT PIN                                      | EV KIT OPERATION           |
|-------------------|-------------------|---------------------------------------------|----------------------------|
| J17               | J22               |                                             |                            |
| Closed*           | Open*             | RT connected to GND through 13.3kΩ resistor | 2.2MHz switching frequency |
| Open              | Closed            | RT connected to GND through 76.8kΩ resistor | 400kHz switching frequency |

## Table 5. LED Current Full-Scale (J7 and J9)

| SHUNT POSITION   | SHUNT POSITION   | IREF PIN                                      | EV KIT OPERATION             |
|------------------|------------------|-----------------------------------------------|------------------------------|
| J7               | J9               |                                               |                              |
| Closed           | Open             | IREF connected to GND through 40.2kΩ resistor | 149mA full-scale LED current |
| Open*            | Closed*          | IREF connected to GND through 49.9kΩ resistor | 120mA full-scale LED current |

## HB LED Current

Jumpers J7 and J9 (0-Ω resistors) are used to set the fullscale sink current for the outputs (OUT1-OUT4) to either 120mA or 149mA.

When  J7  is  closed  and  J9  is  open,  the  full-scale  sink current  will  be  set  to  149mA.  When  J7  is  open  and  J9 is closed, the full-scale sink current sets to 120mA. See Table 5 for jumper settings.

The device's  current  sinks'  current  on  all  four  channels is then fully configurable through I 2 C ( ISET slider bars in the 0x02 ISET register group box). The upper slider bar is active when the full-scale sink current is set to 120mA ( Max ISET unchecked) while the lower slider bar is active when  the  full-scale  sink  current  is  set  to  149mA  ( Max ISET checked).

Refer to the LED Current Control section in the MAX25014 IC data sheet for more information.

Evaluates: MAX25014

│

## MAX25014 Evaluation Kit

## Channel 1-Channel 4 Current-Sink Disabling

The  EV  kit  features  jumpers  JMP3,  JMP6-JMP7  and JMP9 which are used to put each OUT\_ current sink in one of three operating states:

- 1) Normal operation, i.e. OUT\_ is connected to the corresponding PCB pad on the board edge and LEDs are connected from there to the preregulator output BOOST.
- 2) OUT\_ connected through a 12kΩ resistor to GND and thus disabled.
- 3) OUT\_ shorted to GND, used to test fault detection.

Evaluates: MAX25014

To  disable  a  channel,  install  a  jumper  in  the  channel's respective jumper across pins 1-3, connecting the OUT\_ to ground through a 12kΩ resistor. The dimming algorithm in  the  IC  requires  that  higher  numbered  OUT\_  current sinks  be  disabled  first.  For  example,  if  only  two  strings are  needed,  OUT1-OUT2  should  be  used,  with  OUT3 and OUT4 disabled. See Table 6 for jumper settings. The 100kΩ bleed resistors are installed to prevent the OUT\_ leakage current from dimly turning on large LED strings even when the DIM signal is low. Note that each channel can be alternatively disabled through I 2 C by acting on the 0x13 DISABLE register group box.

## Table 6. Selecting OUT\_ Channels Operating State (JMP3, JMP6-JMP7 and JMP9)

| OUT_   | JUMPER   | SHUNT POSITION   | CHANNEL OPERATION                                                                                   |
|--------|----------|------------------|-----------------------------------------------------------------------------------------------------|
| OUT1   | JMP9     | 1-2*             | Channel 1 operational; connect an HB LED string** between BOOST and OUT1. Bleed resistor connected. |
| OUT1   | JMP9     | 1-3              | Channel 1 not used. OUT1 current sink disabled.                                                     |
| OUT1   | JMP9     | 1-4              | Channel 1 shorted to GND to simulate a fault.                                                       |
| OUT2   | JMP7     | 1-2*             | Channel 2 operational; connect an HB LED string** between BOOST and OUT2. Bleed resistor connected. |
| OUT2   | JMP7     | 1-3              | Channel 2 not used. OUT2 current sink disabled.                                                     |
| OUT2   | JMP7     | 1-4              | Channel 2 shorted to GND to simulate a fault.                                                       |
| OUT3   | JMP6     | 1-2*             | Channel 3 operational; connect an HB LED string** between BOOST and OUT3. Bleed resistor connected. |
| OUT3   | JMP6     | 1-3              | Channel 3 not used. OUT3 current sink disabled.                                                     |
| OUT3   | JMP6     | 1-4              | Channel 3 shorted to GND to simulate a fault.                                                       |
| OUT4   | JMP3     | 1-2*             | Channel 4 operational; connect an HB LED string** between BOOST and OUT4. Bleed resistor connected. |
| OUT4   | JMP3     | 1-3              | Channel 4 not used. OUT4 current sink disabled.                                                     |
| OUT4   | JMP3     | 1-4              | Channel 4 shorted to GND to simulate a fault.                                                       |

│

## HB LED Digital Dimming Control

The EV kit features a DIM PCB input pad for connecting an external digital PWM signal. Apply a digital PWM signal with a 0.8V logic-low level (or less) and 2.1V logic-high level (or greater). The DIM signal frequency should be at least 100Hz. If the DIM frequency is changed during operation the MAX25014 must be powered off and on again to register the change. To adjust the HB LED brightness, vary the signal duty cycle from 0% to 100% and maintain a minimum pulse width of 500ns. Apply the digital PWM signal  to  the  DIM  PCB  pad. The  DIM  input  of  the  IC  is pulled up internally with a 5μA (typ) current source.

Dimming  can  also  be  performed  by  programming  the desired  dimming  level  through  I 2 C.  External  dimming is  enabled  by  default  at  each  device's  power  up.  To disable  it,  first  uncheck DIM\_EXT in  the 0x03  IMODE register group box, then select one of the available dimming frequencies in the FPWM section contained in the 0x12  SETTING register  group  box.  Individual  channel brightness levels can finally be selected by acting on the TON1-TON4 slider bars.

Note: To ensure that correct brightness levels are selected in internal dimming mode, each TON\_ slider bar must be zeroed at each device's power up.

For additional information on the device's digital dimming feature, refer to the Dimming section in the MAX25014 IC data sheet.

## Hybrid dimming Operation

The Hybrid dimming feature can be used both with external and internal dimming. The device determines whether the  LED  current  is  to  be  dimmed  by  reducing  the  LED current  or  by  chopping  the  LED  current  (depending  on

the hybrid dimming threshold set in the HDIM\_THR section  contained  in  the 0x03  IMODE register  group  box). To enable the hybrid dimming feature, check HDIM in the 0x03 IMODE register group box.

For  additional  information  on  the  device's  dimming  feature, refer to the Hybrid Dimming section in the MAX25014 IC data sheet.

## Phase-Shift Operation

The  EV  kit  demonstrates  the  phase-shifting  feature  of the IC. Phase-shift is enabled by default at each device's power up. To disable it, uncheck PSEN in the 0x02 ISET register  group  box.  This  operation  must  be  always  performed before enabling any LED string.

When phase shifting is enabled, each current sink's turn-on is separated by 360°/n, where n is the number of enabled strings.  When  phase  shifting  is  disabled,  the  dimming  of each string is controlled by the DIM input (or by the FPWM and TON\_ settings if internal dimming is enabled), and all current sinks turn on and off at the same time.

## Fail-Safe Operation

The EV kit demonstrates the fail-safe feature of the IC. One of the jumpers J3-J6, J8, J10, J12, J14 can be closed before powering up the device to select, through a resistor to ground, the current level to which the current sinks will be enabled in case the FSEN PCB pad is forced high (even if ENA bit is not checked). If jumper J23 is closed, FSEN is shorted to ground and its function is disabled. Only one jumper at a time must be closed. See Table 7 for jumper settings.

For additional information on the device's fail-safe operation, refer to the Pin Description in the MAX25014 IC data sheet.

## Table 7. Selecting FSEN resistor (J3-J6, J8, J10, J12, J14, J23)

| FSEN RESISTOR VALUE ( kΩ )   | JUMPER   | SHUNT POSITION   | OUT_CURRENT (MA)   |
|------------------------------|----------|------------------|--------------------|
| 0 (FSEN shorted to GND)*     | J23      | Closed           | Fail-safe disabled |
| 3.48                         | J14      | Closed           | 25                 |
| 7.15                         | J12      | Closed           | 25                 |
| 12                           | J10      | Closed           | 50                 |
| 18.7                         | J8       | Closed           | 50                 |
| 27.4                         | J6       | Closed           | 75                 |
| 39                           | J5       | Closed           | 75                 |
| 59                           | J4       | Closed           | 100                |
| 84.5                         | J3       | Closed           | 100                |

* Default position.

│

## Fault-Indicator Output (FLTB)

The EV kit features the device's open-drain FLTB output. The  FLTB  signal  on  the  PCB  pad  is  pulled  up  to  VCC by  R48  resistor.  FLTB  goes  low  when  an  open-LED  or shorted-LED string  is  detected,  during  thermal  warning/ shutdown events, during boost undervoltage events and in case of IREF out of range condition. Keep jumper J11 closed to allow DS2 red LED enabling in case FLTB goes low. If DS2 signaling function is not required, jumper J11 must be kept open and R62 resistor must be installed.

Refer to the Fault Protection section in the MAX25014 IC data sheet for additional information on the FLTB signal.

## Shorted-LED Detection and Protection

The short-LED threshold is set through I 2 C in the SLDET section  contained  in  the 0x12  SETTING register  group box. A shorted LED is detected when the following condition is satisfied:

<!-- formula-not-decoded -->

When the  short-LED  threshold  is  reached,  the  affected current sink is disabled to reduce excess power dissipation and the FLTB indicator asserts low.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX25014EVKIT# | EV Kit |

#Denotes RoHS compliance.

## Overvoltage Detection and Protection

The resistors (R41 and R5) connected to BSTMON are configured for a VOUT\_OVP of 39V. This sets the maximum converter output (BOOST) voltage at 39V. During an open-LED string condition, the converter output ramps up to the output overvoltage threshold. Capacitor C3 can be added to provide noise filtering to the overvoltage signal. To reconfigure the circuit for a different voltage, replace resistor  R41  with  a  different  value  using  the  following equation:

<!-- formula-not-decoded -->

where R5 is 10kΩ, VOUT\_OVP is the overvoltage-protec -tion threshold desired, and R41 is the new resistor value for obtaining the desired overvoltage protection. MOSFET Q1 is  an  optional  overvoltage  protection  resistor-divider disconnect switch for ultra-low shutdown current.

Refer  to  the Open-LED  Management  and  Overvoltage Protection section  in  the  MAX25014  IC  data  sheet  for additional information.

## MAX25014 EV Kit Bill of Materials

|   ITEM | REF_DES                                                                                                        | DNI/DNP   |   QTY | MFG PART #                                                                                                     | MANUFACTURER                            | VALUE                | DESCRIPTION                                                                                                                  | COMMENTS   |
|--------|----------------------------------------------------------------------------------------------------------------|-----------|-------|----------------------------------------------------------------------------------------------------------------|-----------------------------------------|----------------------|------------------------------------------------------------------------------------------------------------------------------|------------|
|      1 | BOOST, BOOST1-BOOST3, DIM, EN, FLTB, FSEN, GND, GND1, GND2, IN1, OUT1-OUT4, PGND, PGND1, PGND2, SCL, SDA, SYNC |           |    22 | 9020 BUSS                                                                                                      | WEICO WIRE                              | MAXIMPAD             | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                     |            |
|      2 | BSTMON, COMP, LX, NGATE, TP1-TP3, VCC                                                                          |           |     8 |                                                                                                                | 5011 N/A                                |                      | 5011 TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
|      3 | C2, C6, C16                                                                                                    |           |     3 | UMK107BJ105KA;C1608X5R1H105K080AB; CL10A105KB8NNN;GRM188R61H105KAAL                                            | TAIYO YUDEN;TDK;SAMSUNG;MURATA          | 1UF                  | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 50V; TOL=10%; MODEL=_MK SERIES; TG=-55 DEGC TO +85 DEGC                            |            |
|      4 | C4                                                                                                             |           |     1 | CGA3E3X7S2A104K080AB;C1608X7S2A104K080AB                                                                       | TDK;TDK                                 | 0.1UF                | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S                                  |            |
|      5 | C5, C26                                                                                                        |           |     2 | C1210C475K5RAC;GRM32ER71H475KA88; GCM32ER71H475KA55;CGA6P3X7R1H475K250AB; UMK325B7475KMHP;CNC6P1X7R1H475K250AE | KEMET;MURATA;MURATA;TDK;TAIYO YUDEN;TDK | 4.7UF                | CAPACITOR; SMT (1210); CERAMIC CHIP; 4.7UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                   |            |
|      6 | C9                                                                                                             |           |     1 | EEE-TG1H470UP                                                                                                  | PANASONIC                               | 47UF                 | CAPACITOR; SMT (CASE_F); ALUMINUM- ELECTROLYTIC; 47UF; 50V; TOL=20%; MODEL=TG SERIES; TG=-40 DEGC TO +125 DEGC               |            |
|      7 | C12, C226                                                                                                      |           |     2 | C2012X7R1H225K125AC;CGA4J3X7R1H225K125AB; CGA4J3X7R1H225K125AE                                                 | TDK;TDK;TDK                             | 2.2UF                | CAPACITOR; SMT (0805); CERAMIC CHIP; 2.2UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                   |            |
|      8 | C14                                                                                                            |           |     1 | GRM32ER71H106KA12; CL32B106KBJNNN; UMJ325KB7106KMH; 12105C106K4Z2A                                             | MURATA;SAMSUNG ELECTRONICS;TAIYO YU     | 10UF                 | CAPACITOR; SMT (1210); CERAMIC CHIP; 10UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                    |            |
|      9 | C17                                                                                                            |           |     1 | C1608C0G1H100D080AA                                                                                            | TDK                                     | 10PF                 | CAPACITOR; SMT (0603); CERAMIC CHIP; 10PF; 50V; TOL=0.5PF; TG=-55 DEGC TO +125 DEGC; TC=C0G                                  |            |
|     10 | C18, C23-C25                                                                                                   |           |     4 | GRM1885C1H102JA01;C1608C0G1H102J080AA; GCM1885C1H102JA16                                                       | MURATA;TDK;MURATA                       | 1000PF               | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC                                           |            |
|     11 | C20                                                                                                            |           |     1 | GRM188R71A225KE15;CL10B225KP8NNN; C1608X7R1A225K080AC;C0603C225K8RAC                                           | MURATA;SAMSUNG;TDK;KEMET                | 2.2UF                | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2UF; 10V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                   |            |
|     12 | C22                                                                                                            |           |     1 | C0603C683J5RAC                                                                                                 | KEMET                                   | 0.068UF              | CAPACITOR; SMT; 0603; CERAMIC; 0.068uF; 50V; 5%; X7R; -55degC to + 125degC; 0 +/-15% degC MAX.                               |            |
|     13 | C27                                                                                                            |           |     1 | 06035C101JAT                                                                                                   | AVX                                     | 100PF                | CAPACITOR; SMT (0603); CERAMIC CHIP; 100PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                    |            |
|     14 | C28                                                                                                            |           |     1 | 06035C220JAT                                                                                                   | AVX                                     | 22PF                 | CAPACITOR; SMT (0603); CERAMIC CHIP; 22PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                     |            |
|     15 | C33                                                                                                            |           |     1 | 0603YC101KAT2A                                                                                                 | AVX                                     | 100PF                | CAPACITOR; SMT (0603); CERAMIC CHIP; 100PF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                   |            |
|     16 | C35                                                                                                            |           |     1 | 50HVP56M                                                                                                       | SUNCON                                  | 56UF                 | CAPACITOR; SMT; ALUMINUM- ELECTROLYTIC; 56UF; 50V; TOL=20%; TG=-55 DEGC TO +125 DEGC; SUPER LOW ESR                          |            |
|     17 | D1                                                                                                             |           |     1 | NRVBS260T3G                                                                                                    | ON SEMICONDUCTOR                        | NRVBS260T3G          | DIODE; SCH; SURFACE MOUNT SCHOTTKY POWER RECTIFIER; SMB; PIV=60V; IF=2A                                                      |            |
|     18 | D2                                                                                                             |           |     1 | BZG03C18                                                                                                       | VISHAY SEMICONDUCTORS                   | 18V                  | DIODE; ZNR; SMT (DO-214AC); VZ=18V; IZM=0.025A                                                                               |            |
|     19 | D3, D5                                                                                                         |           |     2 | CMPD914E                                                                                                       | CENTRAL SEMICONDUCTOR                   | CMPD914E             | DIODE; SWT; SMT (SOT23-3); PIV=150V; IF=0.1A                                                                                 |            |
|     20 | D4                                                                                                             |           |     1 | B160B-13-F                                                                                                     | DIODES INCORPORATED                     | B160B-13-F           | DIODE; SCH; SMB (DO-214AA); PIV=60V; IF=1A                                                                                   |            |
|     21 | DS1                                                                                                            |           |     1 | LGL29K-F2J1-24-Z                                                                                               | OSRAM                                   | LGL29K-F2J1-24-Z     | DIODE; LED; SMARTLED; GREEN; SMT; PIV=1.7V; IF=0.02A                                                                         |            |
|     22 | DS2                                                                                                            |           |     1 | LS L29K-G1J2-1-Z                                                                                               | OSRAM                                   | LS L29K-G1J2-1-Z     | DIODE; LED; SMART; RED; SMT (0603); PIV=1.8V; IF=0.02A; -40 DEGC TO +100 DEGC                                                |            |
|     23 | J1, J3-J6, J8, J10-J12, J14, J18, J19, J23                                                                     |           |    13 | PBC02SAAN                                                                                                      | SULLINS ELECTRONICS CORP.               | PBC02SAAN            | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                    |            |
|     24 | J2, J21                                                                                                        |           |     2 | PEC03SAAN                                                                                                      | SULLINS ELECTRONICS CORP.               | PEC03SAAN            | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC;                                 |            |
|     25 | J9                                                                                                             |           |     1 | ANY                                                                                                            | ANY                                     |                      | 0 RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM; FORMFACTOR                                                           |            |
|     26 | J17, R50, R53, R57, R59, R61                                                                                   |           |     6 | CRCW06030000Z0                                                                                                 | VISHAY DALE                             |                      | 0 RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.1W; THICK FILM                                                                        |            |
|     27 | J24                                                                                                            |           |     1 | 803-87-020-20-001101                                                                                           | PRECI-DIP SA                            | 803-87-020-20-001101 | EVKIT PART-CONNECTOR; FEMALE; TH; DOUBLE ROW; 2.54MM; RIGHT ANGLE SOLDER TAIL; MATING PIN DIA 0.76MM; RIGHT ANGLE; 20PINS;   |            |
|     28 | J25                                                                                                            |           |     1 | HTSW-112-11-G-S-RA                                                                                             | SAMTEC                                  | HTSW-112-11-G-S-RA   | CONNECTOR; MALE; THROUGH HOLE; SQUARE POST HEADER; RIGHT ANGLE; 12PINS ;                                                     |            |
|     29 | JMP3, JMP6, JMP7, JMP9                                                                                         |           |     4 | PEC04SAAN                                                                                                      | SULLINS ELECTRONICS CORP.               | PEC04SAAN            | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                                    |            |
|     30 | L1                                                                                                             |           |     1 | SRP1238A-R60M                                                                                                  | BOURNS                                  | 0.6UH                | INDUCTOR; SMT; SHIELDED; 0.6UH; 20%; 29A                                                                                     |            |
|     31 | L2                                                                                                             |           |     1 | XAL1510-472ME                                                                                                  | COILCRAFT                               | 4.7UH                | INDUCTOR; SMT; COMPOSITE; 4.7UH; 20%; 29A                                                                                    |            |
|     32 | Q1                                                                                                             |           |     1 | NDS351AN                                                                                                       | FAIRCHILD SEMICONDUCTOR                 | NDS351AN             | TRAN; N-CHANNEL LOGIC LEVEL ENHANCEMENT MODE FIELD EFFECT TRANSISTOR; NCH; SUPERSOT-3; PD-(0.5W); I-(1.4A); V-(30V)          |            |
|     33 | Q2                                                                                                             |           |     1 | NVMFS5C677NLT1G                                                                                                | ON SEMICONDUCTOR                        | NVMFS5C677NLT1G      | TRAN; NCH; POWER MOSFET; SO-8FL; PD-(3.5W); I-(36A); V-(60V)                                                                 |            |
|     34 | Q3                                                                                                             |           |     1 | NTMFS5C673NLT1G                                                                                                | ON SEMICONDUCTOR                        | NTMFS5C673NLT1G      | TRAN; NCH; MOSFET; SO-8FL; PD-(46W); I-(50A); V-(60V)                                                                        |            |
|     35 | Q5                                                                                                             |           |     1 | SI1317DL-T1-GE3                                                                                                | VISHAY SILICONIX                        | SI1317DL-T1-GE3      | TRAN; P-CHANNEL 20V (D-S) MOSFET; PCH; SOT-323; PD-(0.5W); I-(-1.4A); V-(-20V)                                               |            |
|     36 | R2                                                                                                             |           |     1 | CRCW06033K00FK                                                                                                 | VISHAY DALE                             | 3K                   | RESISTOR; 0603; 3K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                        |            |
|     37 | R3, R7                                                                                                         |           |     2 | CRCW08050000ZS;ERJ-6GEY0R00;RC2012J000; RMCF0805ZT0R00                                                         | DIGI-KEY                                |                      | 0 RESISTOR; 0805; 0 OHM; JUMPER; 0.125W; THICK FILM                                                                          |            |
|     38 | R4, R10                                                                                                        |           |     2 | TNPW06031K50BE;ERA-3YEB152V                                                                                    | VISHAY DALE;PANASONIC                   | 1.5K                 | RESISTOR; 0603; 1.5K OHM; 0.1%; 25PPM; 0.10W; THICK FILM                                                                     |            |
|     40 | R6                                                                                                             |           |     1 | 301-10K-RC                                                                                                     | XICON                                   | 10K                  | 0.125W; THIN FILM RESISTOR, 0603, 10K OHM, 5%, 200PPM, 1/16W, THICK FILM                                                     |            |

Evaluates: MAX25014

## MAX25014 EV Kit Bill of Materials (continued)

| ITEM     | REF_DES                | DNI/DNP   | QTY                | MFG PART #                                                                      | MANUFACTURER                                | VALUE          | DESCRIPTION                                                                                                                                                        | COMMENTS   |
|----------|------------------------|-----------|--------------------|---------------------------------------------------------------------------------|---------------------------------------------|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 41       | R8                     | -         | 1                  | LRC-LRZ2010LF-R000                                                              | TT ELECTRONICS                              | 0              | RES; SMT (2010); 0; JUMPER; CURRENT SENSE RESISTOR, 0603, 1M OHM, 1%, 100PPM,                                                                                      |            |
| 42       | R9                     | -         | 1                  | CRCW06031M00FK; MCR03EZPFX1004                                                  | VISHAY DALE;ROHM                            |                | 0.10W, THICK FILM RESISTOR; 0603; 84.5K OHM; 1%; 100PPM;                                                                                                           |            |
| 43       | R13                    | -         | 1                  | RC0603FR-0784K5L                                                                | YAGEO PHYCOMP                               |                | 0.10W; THICK FILM                                                                                                                                                  |            |
| 44 45    | R16                    | -         | 1                  | ERJ-3EKF5902                                                                    | PANASONIC                                   |                | RESISTOR; 0603; 59K OHM; 1%; 100PPM; 0.1W; THICK FILM RESISTOR; 0603; 10K OHM; 0.1%; 25PPM;                                                                        |            |
|          | R17                    | -         | 1                  | TNPW060310K0BE; RN731JTTD1002B                                                  | VISHAY DALE;KOA SPEER ELECTRONICS           |                | 0.1W; THICK FILM RESISTOR; 0603; 27.4K; 1%; 100PPM; 0.10W; THICK FILM                                                                                              |            |
| 46       | R18                    | -         | 1                  | CRCW060327K4FK;ERJ-3EKF2742                                                     | VISHAY DALE;PANASONIC                       |                |                                                                                                                                                                    |            |
| 47       | R19, R24, R25          | -         | 3                  | SLN5TTEDR120D                                                                   | KOA SPEER ELECTRONICS INC.                  |                | 0.12 RES; SMT (4527); 0.12; 0.5%; +/-75PPM/DEGC; 7W                                                                                                                |            |
| 48       | R20                    | -         | 1                  | ERJ-3EKF1872;CRCW060318K7FK                                                     | PANASONIC;VISHAY                            |                | RESISTOR; 0603; 18.7K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                           |            |
| 49       | R21, R26               | -         | 2                  | CRCW060310R0FK; MCR03EZPFX10R0;ERJ-3EKF10R0                                     | VISHAY DALE;ROHM                            |                | 10 RESISTOR; 0603; 10 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                           |            |
| 50       | R22, R29, R36, R38,    | -         | 5                  | CRCW060312K0FK                                                                  | VISHAY DALE                                 |                | RESISTOR, 0603, 12K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                                                             |            |
| 51       | R23, R34, R37, R43 R28 | -         | 4                  | CRCW0603100KFK;RC0603FR-07100KL;RC0603FR- 13100KL;ERJ-3EKF1003;AC0603FR-07100KL | VISHAY DALE;YAGEO;YAGEO;PANASONIC PANASONIC |                | RESISTOR; 0603; 100K; 1%; 100PPM; 0.10W; THICK FILM RESISTOR; 0603; 7.15K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                       |            |
| 52       | R30                    | -         | 1                  | ERJ-3EKF7151                                                                    |                                             |                | RESISTOR; 0603; 40.2K; 1%; 100PPM;                                                                                                                                 |            |
| 53       | R32                    | - -       | 1                  | CRCW060340K2FK;RC0603FR-0740K2L;ERJ-3EKF4022                                    | VISHAY DALE;YAGEO;PANASONIC VISHAY DALE     |                | 0.10W; THICK FILM RESISTOR, 0603, 39K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                                           |            |
| 54       | R35                    |           | 1                  | CRCW060339K0FK                                                                  |                                             |                |                                                                                                                                                                    |            |
| 55       | R39                    | - -       | 1                  | CRCW12060000ZS;ERJ-8GEY0R00                                                     | VISHAY DALE;PANASONIC                       |                | 0 RESISTOR; 1206; 0 OHM; 0%; JUMPER; 0.25W; THICK FILM RESISTOR; 0603; 76.8K OHM; 1%; 100PPM;                                                                      |            |
| 56 57    |                        |           | 1                  | CRCW060376K8FK                                                                  | VISHAY DALE                                 |                | 0.10W; THICK FILM RESISTOR; 0603; 49.9K OHM; 1%; 100PPM;                                                                                                           |            |
| 58       | R40 R41                | -         | 1                  | CRCW060349K9FK;ERJ-3EKF4992                                                     | VISHAY DALE;PANASONIC                       |                | 0.10W; THICK FILM RES; SMT (0805); 309K; 0.1%; +/-25PPM/DEGK; 0.2W                                                                                                 |            |
| 59       | R42,                   | -         | 1                  | TNPW0805309KBEEN                                                                | VISHAY                                      |                | RESISTOR; 0603; 10K OHM; 1%; 100PPM; 0.0125W; THICK FILM                                                                                                           |            |
| 60       | R48, R55 R47           | - -       | 3 1 CRCW06033K74FK | CHPHT0603K1002FGT                                                               | VISHAY SFERNICE VISHAY DALE                 |                | RESISTOR, 0603, 3.74KOHMS, 1%, 100PPM, 0.1W, THICK FILM                                                                                                            |            |
| 61       | R49                    | -         | 1                  | RG1608N-102-B-T1                                                                | SUSUMU CO LTD.                              |                | RESISTOR; 0603; 1K OHM; 0.1%; 10PPM; 0.10W; THICK FILM                                                                                                             |            |
| 62       | R52                    | -         | 1                  | CRCW060313K3FK;ERJ-3EKF1332                                                     | VISHAY DALE;PANASONIC                       |                | RESISTOR; 0603; 13.3K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                                            |            |
| 63       | R54                    | -         | 1                  | ERJ-3EKF3481                                                                    | PANASONIC                                   |                | RESISTOR; 0603; 3.48K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                                            |            |
| 64       | U1                     | -         | 1 MAX25014ATG/V+   |                                                                                 | MAXIM                                       |                | EVKIT PART-IC; AUTOMOTIVE LOW INPUT VOLTAGE I2C 4-CHANNEL 150 MILLIAMPERE BACKLIGHT DRIVER; PACKAGE OUTLINE DRAWING NUMBER: 21-0139; LAND PATTERN NUMBER: 90-0022; |            |
| 65 66    | PCB C1, C3, C19        | - DNP     | 1 0                | MAX25014 N/A                                                                    | MAXIM N/A                                   | MAX25014ATG/V+ | PCB:MAX25014 CAPACITOR; SMT (0603); OPEN; FORMFACTOR                                                                                                               |            |
| 67       | C7, C8                 | DNP       | 0                  | GCM32ER71H475KA55;CGA6P3X7R1H475K250AB; UMK325B7475KMHP;CNC6P1X7R1H475K250AE    | KEMET;MURATA;MURATA;TDK;TAIYO               |                | CAPACITOR; SMT (1210); CERAMIC CHIP; 4.7UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                         |            |
|          |                        |           |                    | C1210C475K5RAC;GRM32ER71H475KA88;                                               | YUDEN;TDK                                   |                |                                                                                                                                                                    |            |
| 68       | C10, C13, C36-C39      | DNP       | 0                  | GRM1885C1H102JA01;C1608C0G1H102J080AA; GCM1885C1H102JA16                        | MURATA;TDK;MURATA                           | 1000PF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC                                                                                 |            |
| 69       | C15, C30, C32          | DNP       | 0                  | C2012X7R1H225K125AC;CGA4J3X7R1H225K125AB; CGA4J3X7R1H225K125AE                  | TDK;TDK;TDK                                 |                | CAPACITOR; SMT (0805); CERAMIC CHIP; 2.2UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                         |            |
| 70       | C29                    | DNP       | 0                  | N/A                                                                             | N/A                                         |                | EVKIT USE ONLY;DUAL PACKAGE OUTLINE 0603 AND 0805 NON-POLAR CAPACITOR                                                                                              |            |
| 71       | L3                     | DNP       | 0                  | XAL5050-103ME                                                                   | COILCRAFT                                   |                | INDUCTOR; SMT; COMPOSITE CORE; 10UH;                                                                                                                               |            |
| 72       | R1,                    |           |                    | N/A                                                                             |                                             |                | TOL=+/-20%; 4.9A                                                                                                                                                   |            |
| 73       | R33, J22               | DNP       | 0                  |                                                                                 | N/A                                         |                | RESISTOR; 0603; OPEN; FORMFACTOR                                                                                                                                   |            |
|          | R11                    | DNP       | 0                  | SLN5TTEDR120D                                                                   | KOA SPEER ELECTRONICS INC.                  | 0.12           | RES; SMT (4527); 0.12; 0.5%; +/-75PPM/DEGC; 7W                                                                                                                     |            |
| 74       | R27, R31               | DNP       | 0                  | LRC-LRZ2010LF-R000                                                              | TT ELECTRONICS                              | 0              | RES; SMT (2010); 0; JUMPER; CURRENT SENSE                                                                                                                          |            |
| 75       | R44                    | DNP       | 0                  | CRCW12060000ZS;ERJ-8GEY0R00                                                     | VISHAY DALE;PANASONIC                       |                | 0 RESISTOR; 1206; 0 OHM; 0%; JUMPER; 0.25W; THICK FILM                                                                                                             |            |
| 76       | R51, R56, R58, R60     | DNP       | 0                  | FC0603E50R0BTBS                                                                 | VISHAY DALE                                 | 50             | RESISTOR; 0603; 50 OHM; 0.1%; 25PPM; 0.125W; THIN FILM                                                                                                             |            |
| 77       | R62                    | DNP       | 0                  | CHPHT0603K1002FGT                                                               | VISHAY SFERNICE                             |                | RESISTOR; 0603; 10K OHM; 1%; 100PPM; 0.0125W; THICK FILM                                                                                                           |            |
| 78 TOTAL | J7                     | DNP       | 0 136              | N/A                                                                             | N/A                                         |                | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                                                                   |            |

## MAX25014 EV Kit Schematics

<!-- image -->

## MAX25014 EV Kit Schematics (continued)

<!-- image -->

## MAX25014 EV Kit PCB Layout Diagrams

MAX25014 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX25014 EV Kit PCB Layout-Top Layer

<!-- image -->

MAX25014 EV Kit PCB Layout-Internal Layer 2

<!-- image -->

MAX25014 EV Kit PCB Layout-Internal Layer 3

<!-- image -->

│

## MAX25014 EV Kit PCB Layout Diagrams (continued)

MAX25014 EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX25014 EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX25014