<!-- lastmod 2022-08-03 -->
## MAX20446 Evaluation Kit

## General Description

The MAX20446 evaluation kit (EV kit) demonstrates the MAX20446  integrated  6-channel  high-brightness  (HB) LED backlight driver with boost/SEPIC controller and I 2 C interface for automotive displays.

The EV kit  operates  from  a  DC  supply  voltage  between 4.5V  and  36V  and  the  switching  frequency  can  be  set either at 2.2MHz or at 400kHz. The EV kit operates in I 2 C mode only. Spread-spectrum mode (SSM) is enabled by default for EMI improvement, but can be disabled by acting on a register  bit.  The  EV  kit  demonstrates  phase-shifted pulse-width modulation (PWM) dimming. Dimming can be performed  externally  using  a  PWM  signal  applied  to  the DIM PCB pad, or internally  by  programming  the  desired dimming frequency and individual duty cycle through I 2 C. The  hybrid  dimming  feature  can  be  enabled  through  a register bit to reduce EMI. The EV kit also demonstrates short-LED, open-LED, boost output undervoltage, as well as overvoltage- and overtemperature-fault protection.

For operation at switching frequencies other than 2.2MHz or  400kHz,  the  external  components  should  be  chosen according  to  the  calculations  in  the  MAX20446  IC  data sheet.

The  EV  kit  provides  an  I 2 C  interface  that  can  operate  in  conjunction  with  the  Maxim  command  module (MINIQUSB+) or a third-party I 2 C master. The EV kit also includes,  Windows ® -compatible  software  that  provides  a simple  graphical  user  interface  (GUI)  for  exercising  the features of the IC.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

## Features

- Demonstrates Robustness of the MAX20446
- Wide 4.5V to 36V Input Operating Range (Up to 52V Load Dump)
- Powers HB LEDs (Up to Six Strings) for Medium-toLarge-Sized LCD Displays in Automotive and Display Backlight Applications
- 400kHz to 2.2MHz Resistor-Programmable Switching Frequency with Spread-Spectrum Option
- Phase-Shift Dimming Option
- Demonstrates Cycle-by-Cycle Current Limit and Thermal-Shutdown Features
- Demonstrates Wide Dimming Ratio
- Demonstrates Fail-Safe Operation
- I 2 C Programmability
- Dedicated GUI
- Proven PCB Layout and Thermal Design
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

<!-- image -->

Evaluates: MAX20446

## MAX20446 EV Kit Files

| FILE                    | DESCRIPTION           |
|-------------------------|-----------------------|
| MAX20446GUISetupV01.exe | Windows GUI Installer |

## Quick Start

## Required Equipment

- MAX20446 EV kit
- 5V to 36V, 4A DC power supply
- Two digital voltmeters (DVMs)
- Six series-connected HB LED strings (6 LEDs each) rated to no less than 120mA
- Current probe to measure the HB LED current
- MINIQUSB+ interface board with USB cable
- Windows-compatible PC with a spare USB port

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

## Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1)   Visit www.maximintegrated/evkitsoftware to download  the  latest  version  of  the  EV  kit  software, MAX20446GUISetupV01.exe.
- 2)   Install  the  EV  kit  software  (GUI)  on  your  PC  by running  the  MAX20446GUISetupV01.exe  program. The EV kit software application is installed  together with the required MINIQUSB+ drivers.
- 3) Verify  that  jumper  J17  is  closed  and  jumper  J22  is open (2.2MHz switching frequency selected).
- 4) Verify  that  jumper  J1  is  closed  (DS1  green  LED connected).
- 5)   Verify  that  jumper  J23  is  closed  (FSEN  function disabled).
- 6)   Verify  that  jumper  J20  is  closed  (FLTB  signaling enabled).
- 7) Verify  that  a  shunt  is  installed  across  pins  1-2  on jumper J2 (device enabled).

Evaluates: MAX20446

- 8) Verify  that  jumpers  JMP1-JMP3,  JMP6-JMP7  and JMP9  have  shunts  installed  across  pins  1-2  (bleed resistors connected, all current sinks enabled).
- 9) Connect the MINIQUSB+ interface board's P3 header to the J24 header on the EV kit.
- 10) Connect the positive terminal of the power supply to the IN PCB pad. Connect the negative terminal of the power supply to a PGND PCB pad.
- 11) Connect  a  DVM  across  the  OUT1  and  GND  PCB pads.
- 12) Connect the six LED strings from VOUT to the OUT1, OUT2, OUT3, OUT4, OUT5, and OUT6 PCB pads.
- 13) Clip the current probe across the channel 1 HB LED+ wire to measure the LED current.
- 14) Turn on the power supply and set to 12V. The green LED (DS1) should be on at this point.
- 15) Launch the EV kit software application.
- 16) From  the  EV  kit  software  toolbar,  select Device  → Scan for Address .  The  GUI  scans  the  I 2 C  bus  for available slave addresses on the bus and selects the first  one  (in  this  case,  the  MAX20446  I 2 C  address). Press OK once the MAX20446 I 2 C address has been found.
- 17) Verify  that  the  status  bar  in  the  bottom-right  corner of the GUI displays EV Kit: Connected , as shown in Figure 1.
- 18) Select  the  desired  OUT\_  current  value  (45mA  to 120mA in 5mA steps) in the 0x02 ISET register group box by acting on the ISET slider  bar,  then  click  the Refresh button.
- 19) Check ENA to  activate  the  driver  in  the 0x02 ISET register group box.
- 20) Measure  the  voltage  from  each  of  the  OUT\_  PCB pads to PGND and verify the lowest voltage is ≈1V.
- 21) Measure the LED current using the current probe and verify all channels.
- 22) For more details on how to use the GUI and all the features available, click on the GUI Help menu item.

│

Figure 1. MAX20446 Evaluation Kit Software (GUI)

<!-- image -->

## Detailed Description of Hardware

The MAX20446 EV kit demonstrates the MAX20446 HB LED backlight  driver  with  an  integrated  step-up  DC-DC preregulator, followed by six linear current sinks to drive up  to  six  strings  of  LEDs.  The  preregulator  switches  at 2.2MHz (or at 400kHz) and operates as a current-modecontrolled regulator, providing up to 720mA for the linear current sinks as well as overvoltage protection. The cycleby-cycle current limit is set by resistor R27, while resistors R4 and R5 set the overvoltage-protection voltage to 29V. The preregulator power section consists of inductor L2, power-sense resistor R27, MOSFET Q4, and switchingdiode D1. The EV kit circuit operates from a 4.5V DC supply voltage up to the HB LED forward string voltage. The circuit handles load-dump conditions up to 50V.

The EV kit circuit demonstrates ultra-low shutdown current  when  the  device's  EN  pin  is  pulled  to  ground  by shorting the EN PCB pad to ground. Each of the six linear current sinks (OUT1-OUT6) is capable of operating up to 48V, sinking up to 120mA per channel.

Each  of  the  six  channels'  linear  current  sinks  is  I 2 Cconfigurable for 45mA to 120mA in 5mA steps, or can be disabled independently by acting on the 0x13 DISABLE register  group  box,  or  on  jumpers  JMP1-JMP3,  JMP6JMP7,  and  JMP9,  which  are  used  to  disable  outputs selectively when the HB LED string is not connected. The EV kit features PCB pads to facilitate connecting HB LED strings for evaluation. The VOUT PCB pads provide connections  for  connecting  each  HB  LED  string's  anode  to the  DC-DC  preregulator  output.  The  OUT1-OUT6  PCB pads  provide  connections  for  connecting  each  HB  LED string's cathode to the respective current sink. Capacitors C11, C14, C18, C23, C24, and C25 are included on the design to prevent oscillations and provide stability when using long, untwisted HB LED connecting cables during lab  evaluation.  These  capacitors  are  not  required  if  the connection  between  the  LED  driver  and  HB  LEDs  is  a low-inductance connection.

A DIM PCB pad is provided for using a digital PWM signal to control the brightness of the HB LEDs. Test points are also provided for easy access to the device's V CC  regulator output, as well as the COMP pin and the switching node of the preregulator (LX).

## SDA and SCL Voltages (J18, J19, and J21)

SDA and SCL voltage supplies can be selected between the  V CC   voltage  and  the  fixed  3.3V  provided  by  the MINIQUSB+. Alternatively, the user can force an external voltage as digital reference (Table 1).

## Power LED Enable (J1)

A  green  LED  (DS1)  is  used  to  indicate  that  the  EV  kit is  powered  on.  The  LED  can  be  disconnected  from the  power  supply,  allowing  precise  current-consumption evaluation. See Table 2 for shunt positions.

## Enable (EN)

The  EV  kit  features  an  enable  input  that  can  be  used to  enable/disable  the  device  and  place  it  in  shutdown mode. To enable the EV kit whenever power is applied to IN, place the jumper across pins 1-2 on jumper J2. To enable the EV kit using an external enable signal, place the jumper across pins 2-3 on J2 and apply a logic signal on the EN PCB input pad on the EV kit. A 1MΩ pulldown resistor  on  the  EV  kit  pulls  the  EN  input  to  ground  in the event that JU15 is left open or the EN signal is high impedance. Refer to the Enable section in the MAX20446 IC data sheet for additional information. See Table 3 for jumper settings.

## Table 1. SDA and SCL Supply (J18, J19, and J21)

| SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   | SDAAND SCL SUPPLY                   |
|------------------|------------------|------------------|-------------------------------------|
| J18              | J19              | J21              | SDAAND SCL SUPPLY                   |
| Open*            | Open*            | Open*            | 3.3V (with the MINIQUSB+ connected) |
| Closed           | Closed           | Open             | V CC                                |
| Open             | Open             | 1-2              | Externally provided                 |

*Default position.

## Table 2. DS1 Enable (J1)

| SHUNT POSITION   | DS1 POWER LED   |
|------------------|-----------------|
| Closed*          | Connected       |
| Open             | Disconnected    |

*Default position.

## Table 3. Enable (J2)

| SHUNT POSITION   | EN PIN                      | EV KIT OPERATION                         |
|------------------|-----------------------------|------------------------------------------|
| 1-2*             | Connected to IN             | Enabled when IN is powered               |
| 2-3              | Connected to the EN PCB pad | Enabled/disabled by signal on EN PCB pad |

*Default position.

│

## Switching Frequency

Jumpers J17 and J22 are used to set the switching frequency of the device to 2.2MHz or 400kHz. When J17 is closed and J22 is open, the switching frequency is set to 2.2MHz. When J17 is open and J22 is closed, the switching frequency is nominally 400kHz. See Table 4 for shunt positions.

The EV kit is optimized for 2.2MHz switching operation by default. When selecting a switching frequency of 400kHz, L2  should  be  changed  to  22μH  to  maintain  acceptable efficiency.  Other  component-value  adjustments  may  be needed.

The spread-spectrum feature can be enabled/disabled by checking/unchecking SS\_OFF in  the 0x12 SETTING register  group  box.  With  spread  spectrum  enabled, it  is  also possible to select the amount of spread by checking (±3%)/ unchecking  (±6%) SSL in  the 0x12  SETTING register group box.

Refer to the Oscillator Frequency/External Synchronization and Spread-Spectrum Mode sections in the MAX20446 IC data sheet for more information.

## HB LED Current

The device's current sinks' current on all six channels is fully configurable through I 2 C ( ISET slider bar in the 0x02 ISET register group box). No direct action on the EV kit is needed.

## Channel 1-Channel 6 Current-Sink Disabling

The EV kit features jumpers JMP1-JMP3, JMP6, JMP7, and JMP9 that can be used to put each OUT\_ current sink in one of three operating states:

1.  Normal operation: OUT\_ connected to the corresponding ring on the board edge, with LEDs connected from there to the preregulator output (VOUT).
2.  OUT\_ connected through a 12kΩ resistor to GND and thus disabled.
3.  OUT\_ shorted to GND, used to test fault detection.

## Table 4. Switching Frequency (J17 and J22)

| SHUNT POSITION   | SHUNT POSITION   |                                               |                            |
|------------------|------------------|-----------------------------------------------|----------------------------|
| J17              | J22              | RT PIN                                        | EV KIT OPERATION           |
| Closed*          | Open*            | RT connected to GND through a 13.3kΩ resistor | 2.2MHz switching frequency |
| Open             | Closed           | RT connected to GND through a 76.8kΩ resistor | 400kHz switching frequency |

*Default position.

To  disable  a  channel,  install  a  shunt  in  the  channel's respective  jumper  across  pins  1-3,  connecting  OUT\_  to ground through a 12kΩ resistor. The dimming algorithm in the device requires higher numbered OUT\_ current sinks be disabled first (e.g., if only two strings are needed, OUT1/ OUT2 should be used, with OUT3-OUT6 disabled). See Table 5 for jumper settings. The 100kΩ bleed resistors are installed to prevent the OUT\_ leakage current from dimly turning on large LED strings even when the DIM signal is low. Note that each channel can be alternatively disabled through  I 2 C  by  acting  on 0x13  DISABLE register  group box.

## HB LED Digital Dimming Control

The EV kit features a DIM PCB input pad for connecting an external digital PWM signal. Apply a digital PWM signal with  a  ≤  0.8V  logic-low  level  and  ≥  2.1V  logic-high  level. The DIM signal frequency should be at least 100Hz. If the DIM  frequency  is  changed  during  operation,  the  device must be powered off and on again to register the change. To adjust the HB LED brightness, vary the signal duty cycle from 0% to 100% and maintain a minimum pulse width of 500ns. Apply the digital PWM signal to the DIM PCB pad. The DIM input of the device is pulled up internally with a 5μA (typ) current source.

Dimming  can  also  be  performed  by  programming  the desired dimming level through I 2 C. External dimming is enabled by default at each device's power-up. To disable it,  first  uncheck DIM\_EXT in  the 0x03  IMODE register group  box,  and  select  one  of  the  available  dimming frequencies in the FPWM section in the 0x12 SETTING register  group  box.  Individual  channel  brightness  levels can  finally  be  selected  by  acting  on  the TON1-TON6 slider bars.

Note: To ensure that correct brightness levels are selected in internal dimming mode, each TON\_ slider bar must be zeroed at each device's power-up.

For additional information on the device's digital dimming feature, refer to the Dimming section in the MAX20446 IC data sheet.

Table 5. Selecting OUT\_ Channel Operating State (JMP1-JMP3, JMP6, JMP7, and JMP9)

| OUT_   | JUMPER   | SHUNT POSITION   | CHANNEL OPERATION                                                                                  |
|--------|----------|------------------|----------------------------------------------------------------------------------------------------|
| OUT1   | JMP9     | 1-2*             | Channel 1 operational. Connect an HB LED string** between VOUT and OUT1. Bleed resistor connected. |
| OUT1   | JMP9     | 1-3              | Channel 1 not used. OUT1 current sink disabled.                                                    |
| OUT1   | JMP9     | 1-4              | Channel 1 shorted to GND to simulate a fault.                                                      |
| OUT2   | JMP7     | 1-2*             | Channel 2 operational. Connect an HB LED string** between VOUT and OUT2. Bleed resistor connected. |
| OUT2   | JMP7     | 1-3              | Channel 2 not used. OUT2 current sink disabled.                                                    |
| OUT2   | JMP7     | 1-4              | Channel 2 shorted to GND to simulate a fault.                                                      |
| OUT3   | JMP6     | 1-2*             | Channel 3 operational. Connect an HB LED string** between VOUT and OUT3. Bleed resistor connected. |
| OUT3   | JMP6     | 1-3              | Channel 3 not used. OUT3 current sink disabled.                                                    |
| OUT3   | JMP6     | 1-4              | Channel 3 shorted to GND to simulate a fault.                                                      |
| OUT4   | JMP3     | 1-2*             | Channel 4 operational. Connect an HB LED string** between VOUT and OUT4. Bleed resistor connected. |
| OUT4   | JMP3     | 1-3              | Channel 4 not used. OUT4 current sink disabled.                                                    |
| OUT4   | JMP3     | 1-4              | Channel 4 shorted to GND to simulate a fault.                                                      |
| OUT5   | JMP2     | 1-2*             | Channel 5 operational. Connect an HB LED string** between VOUT and OUT5. Bleed resistor connected. |
| OUT5   | JMP2     | 1-3              | Channel 5 not used. OUT5 current sink disabled.                                                    |
| OUT5   | JMP2     | 1-4              | Channel 5 shorted to GND to simulate a fault.                                                      |
| OUT6   | JMP1     | 1-2*             | Channel 6 operational. Connect an HB LED string** between VOUT and OUT6. Bleed resistor connected. |
| OUT6   | JMP1     | 1-3              | Channel 6 not used. OUT6 current sink disabled.                                                    |
| OUT6   | JMP1     | 1-4              | Channel 6 shorted to GND to simulate a fault.                                                      |

## Hybrid Dimming Operation

The hybrid dimming feature can be used with both external and internal dimming. The device determines whether the  LED  current  must  be  dimmed  by  reducing  the  LED current, or chopping the LED current (depending on the hybrid dimming threshold set in the HDIM\_THR section in the 0x03 IMODE register group box). To enable the hybrid dimming feature, check HDIM in the 0x03 IMODE register group box.

For  additional  information  on  the  device's  hybrid  dimming feature, refer to the Hybrid Dimming section in the MAX20446 IC data sheet.

## Phase-Shift Operation

The EV kit demonstrates the phase-shifting feature of the device. Phase shift is enabled by default at each device's power-up. To disable it, uncheck PSEN in the 0x02 ISET register  group  box.  This  operation  must  always  be  performed before enabling any LED string.

When  phase  shifting  is  enabled,  each  current  sink's turn-on is separated by 360º/n, where n is the number of enabled strings. When phase shifting is disabled, the dimming of each string is controlled by the DIM input (or by the FPWM and TON\_ settings, if internal dimming is enabled), and all current sinks turn on and off at the same time.

│

## MAX20446 Evaluation Kit

## Fail-Safe Operation

The  EV  kit  demonstrates  the  fail-safe  feature  of  the device.  One  of  the  jumpers  (J3-J6,  J8,  J10,  J12,  J14) can be closed before powering up the device to select, through a resistor to ground, the current level to which the current sinks are enabled in case the FSEN PCB pad is connected to V CC . If jumper J23 is closed, FSEN is shorted to ground and its function disabled. Only one jumper at a time must be closed. See Table 6 for jumper settings.

For additional information on the device's fail-safe operation, refer to the MAX20446 FSEN Pin Function section in the MAX20446 IC data sheet.

## Fault-Indicator Output (FLTB)

The EV kit features the device's open-drain FLTB output. The  FLTB  signal  is  pulled  up  to  V CC   by  resistor  R48. FLTB goes low when an open-LED or shorted-LED string is  detected  during  thermal  warning/shutdown,  or  during boost undervoltage/overvoltage events. Keep jumper J20 closed to allow the DS2 red LED enabling in case FLTB goes  low.  Refer  to  the Fault  Protection section  in  the MAX20446 IC data sheet for additional information on the FLTB signal.

## Shorted-LED Detection and Protection

The short-LED threshold is set through I 2 C in the SLDET section  in  the 0x12  SETTING register  group  box.  A

Evaluates: MAX20446

shorted-LED is detected when the following condition is satisfied:

<!-- formula-not-decoded -->

When the  short-LED  threshold  is  reached,  the  affected current sink is disabled to reduce excess power dissipation and the FLTB indicator asserts low.

## Overvoltage Detection and Protection

The resistors (R4 and R5) connected to BSTMON are configured for a VOUT\_OVP of 29V. This sets the maximum converter output (VOUT) voltage at 29V. During an openLED string condition, the converter output ramps up to the output overvoltage threshold. Capacitor C3 can be added to  provide  noise  filtering  to  the  overvoltage  signal.  To reconfigure the circuit for a different voltage, replace resistor R4 with a different value using the following equation:

<!-- formula-not-decoded -->

where R5 is 10kΩ, VOUT\_OVP is the desired overvoltageprotection threshold, and R4 is the new resistor value for obtaining  the  overvoltage  protection.  MOSFET  Q1  is  an optional overvoltage-protection resistor-divider disconnect switch for ultra-low shutdown current. Refer to the OpenLED Management and Overvoltage Protection section  in the MAX20446 IC data sheet for additional information.

## Table 6. Selecting FSEN Resistor (J3-J6, J8, J10, J12, J14, J23)

| FSEN RESISTOR VALUE ( kΩ )   | JUMPER   | SHUNT POSITION   | OUT_ CURRENT (mA)   |
|------------------------------|----------|------------------|---------------------|
| 0 (FSEN shorted to GND)*     | J23      | Closed           | Fail-safe disabled  |
| 3.48                         | J14      | Closed           | 25                  |
| 7.15                         | J12      | Closed           | 25                  |
| 12                           | J10      | Closed           | 50                  |
| 18.7                         | J8       | Closed           | 50                  |
| 27.4                         | J6       | Closed           | 75                  |
| 39                           | J5       | Closed           | 75                  |
| 59                           | J4       | Closed           | 100                 |
| 84.5                         | J3       | Closed           | 100                 |

*Default position

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20446EVKIT# | EV Kit |

#Denotes RoHS compliant.

│

## MAX20446 EV Kit Bill of Materials

| REF DESIGNATOR              |   QTY | VALUE   | DESCRIPTION                                                                                                   | MFG PART #                                                              | MANUFACTURER                      |
|-----------------------------|-------|---------|---------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|-----------------------------------|
| C1, C19, C3                 |     0 | OPEN    | DNP: CAPACITOR; SMT (0603); OPEN; FORMFACTOR                                                                  | N/A                                                                     | N/A                               |
| C2, C6, C16                 |     3 | 1UF     | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 50V; TOL=10%; MODEL=_MK SERIES; TG=-55 DEGC TO +85 DEGC             | UMK107BJ105KA-T; C1608X5R1H105K080AB; CL10A105KB8NNN; GRM188R61H105KAAL | TAIYO YUDEN; TDK; SAMSUNG; MURATA |
| C4                          |     1 | 0.1UF   | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S                   | CGA3E3X7S2A104K080A B                                                   | TDK                               |
| C5, C26, C31                |     3 | 4.7UF   | CAPACITOR; SMT (1210); CERAMIC CHIP; 4.7UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                    | C1210C475K5RAC; GRM32ER71H475KA88; GRM32ER71H475KA88                    | KEMET; MURATA; MURATA             |
| C7, C8                      |     0 | 4.7UF   | DNP: CAPACITOR; SMT (1210); CERAMIC CHIP; 4.7UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R               | C1210C475K5RAC; GRM32ER71H475KA88; GRM32ER71H475KA88                    | KEMET; MURATA; MURATA             |
| C9, C10                     |     2 | 47UF    | CAPACITOR; SMT (CASE_F); ALUMINUM-ELECTROLYTIC; 47UF; 50V; TOL=20%; MODEL=TG SERIES; TG=-40 DEGC TO +125 DEGC | EEE-TG1H470UP                                                           | PANASONIC                         |
| C11, C12, C14, C18, C23-C25 |     7 | 1000PF  | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC                            | GRM1885C1H102JA01; C1608C0G1H102J080                                    | MURATA;TDK                        |
| C13                         |     1 | 0.047UF | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.047UF; 50V; TOL=10%; MODEL=X7R; TG=-55 DEGC TO +125 DEGC; TC=          | C0603C473K5RAC; GCM188R71H473K; GRM188R71H473K                          | KEMET; MURATA; MURATA             |
| C15, C30, C32               |     0 | 2.2UF   | DNP: CAPACITOR; SMT (0805); CERAMIC CHIP; 2.2UF; 50V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R       | C2012X7R1H225K                                                          | TDK                               |
| C17                         |     1 | 10PF    | CAPACITOR; SMT (0603); CERAMIC CHIP; 10PF; 50V; TOL=+-5PF; MODEL=C0G; TG=- 55 DEGC TO +85 DEGC; TC=+/         | ECJ-1VC1H100D                                                           | PANASONIC                         |
| C20                         |     1 | 2.2UF   | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2UF; 10V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                    | GRM188R71A225KE15;CL 10B225KP8NNN;C1608X7 R1A225K080AC                  | MURATA; SAMSUNG; TDK              |
| C21                         |     1 | 2200PF  | CAPACITOR; SMT (0603); CERAMIC; 2200PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                         | GRM1885C1H222JA01                                                       | MURATA                            |

## MAX20446 EV Kit Bill of Materials (continued)

| REF DESIGNATOR                                                                                            |   QTY | VALUE            | DESCRIPTION                                                                                                             | MFG PART #       | MANUFACTURER              |
|-----------------------------------------------------------------------------------------------------------|-------|------------------|-------------------------------------------------------------------------------------------------------------------------|------------------|---------------------------|
| C22                                                                                                       |     1 | 0.068UF          | CAPACITOR; SMT; 0603; CERAMIC; 0.068uF; 50V; 5%; X7R; -55degC to + 125degC; 0 +/- 15% degC MAX.                         | C0603C683J5RAC   | KEMET                     |
| C27                                                                                                       |     1 | 100PF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 100PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=X7R                               | 06035C101JAT     | AVX                       |
| C28                                                                                                       |     1 | 22PF             | CAPACITOR; SMT (0603); CERAMIC CHIP; 22PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                | 06035C220JAT     | AVX                       |
| C29                                                                                                       |     0 | OPEN             | EVKIT USE ONLY;DUAL PACKAGE OUTLINE 0603 AND 0805 NON-POLAR CAPACITOR                                                   | N/A              | N/A                       |
| C226                                                                                                      |     1 | 2.2UF            | CAPACITOR; SMT (0805); CERAMIC CHIP; 2.2UF; 50V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                      | C2012X7R1H225K   | TDK                       |
| COMP, LX, TP1, TP2, VCC                                                                                   |     5 | 5011             | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; | 5011             | N/A                       |
| D1                                                                                                        |     1 | NRVBS260T3G      | DIODE; SCH; SURFACE MOUNT SCHOTTKY POWER RECTIFIER; SMB; PIV=60V; IF=2A                                                 | NRVBS260T3G      | ON SEMICONDUCTOR          |
| D2, D3                                                                                                    |     2 | 18V              | DIODE; ZNR; SMT (DO-214AC); VZ=18V; IZM=0.025A                                                                          | BZG03C18         | VISHAY SEMICONDUCTORS     |
| D4                                                                                                        |     1 | B160B-13-F       | DIODE; SCH; SMB (DO-214AA); PIV=60V; IF=1A                                                                              | B160B-13-F       | DIODES INCORPORATED       |
| D5                                                                                                        |     1 | CMPD914E         | DIODE; SWT; SMT (SOT23-3); PIV=150V; IF=0.1A                                                                            | CMPD914E         | CENTRAL SEMICONDUCTOR     |
| DIM, EN, FLT, FSEN, GND, GND1, GND2, IN, OUT1-OUT6, PGND, PGND1, PGND2, SCL, SDA, SYNC, VOUT, VOUT1-VOUT3 |    24 | MAXIMPAD         | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE- S; 20AWG                               | 9020 BUSS        | WEICO WIRE                |
| DS1                                                                                                       |     1 | LGL29K-F2J1-24-Z | DIODE; LED; SMARTLED; GREEN; SMT; PIV=1.7V; IF=0.02A                                                                    | LGL29K-F2J1-24-Z | OSRAM                     |
| DS2                                                                                                       |     1 | LS L29K-G1J2-1-Z | DIODE; LED; SMART; RED; SMT (0603); PIV=1.8V; IF=0.02A; -40 DEGC TO +100 DEGC                                           | LS L29K-G1J2-1-Z | OSRAM                     |
| J1, J3-J6, J8, J10, J12, J14, J17-J20, J22, J23                                                           |    15 | PBC02SAAN        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                               | PBC02SAAN        | SULLINS ELECTRONICS CORP. |

## MAX20446 EV Kit Bill of Materials (continued)

| REF DESIGNATOR              |   QTY | VALUE                 | DESCRIPTION                                                                                                                | MFG PART #           | MANUFACTURER              |
|-----------------------------|-------|-----------------------|----------------------------------------------------------------------------------------------------------------------------|----------------------|---------------------------|
| J2, J21                     |     2 | PEC03SAAN             | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC;                               | PEC03SAAN            | SULLINS ELECTRONICS CORP. |
| J24                         |     1 | 803-87-020-20- 001101 | EVKIT PART-CONNECTOR; FEMALE; TH; DOUBLE ROW; 2.54MM; RIGHT ANGLE SOLDER TAIL; MATING PIN DIA 0.76MM; RIGHT ANGLE; 20PINS; | 803-87-020-20-001101 | PRECI-DIP SA              |
| J25                         |     1 | HTSW-112-11-G-S- RA   | CONNECTOR; MALE; THROUGH HOLE; SQUARE POST HEADER; RIGHT ANGLE; 12PINS ;                                                   | HTSW-112-11-G-S-RA   | SAMTEC                    |
| JMP1-JMP3, JMP6, JMP7, JMP9 |     6 | PEC04SAAN             | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                                  | PEC04SAAN            | SULLINS ELECTRONICS CORP. |
| L1                          |     1 | 0.60UH                | INDUCTOR; SMT; CORE MATERIAL= COMPOSITE; 0.60UH; TOL=+/-20%; 11.7A                                                         | XAL4020-601ME        | COILCRAFT                 |
| L2                          |     1 | 4.7UH                 | INDUCTOR; SMT; FERRITE CORE; 4.7UH; TOL=+/-20%; 9.70A                                                                      | MSS1246T-472ML       | COILCRAFT                 |
| L3                          |     0 | 10UH                  | DNP: INDUCTOR; SMT; COMPOSITE CORE; 10UH; TOL=+/-20%; 4.9A                                                                 | XAL5050-103ME        | COILCRAFT                 |
| Q1                          |     1 | NDS351AN              | TRAN; N-CHANNEL LOGIC LEVEL ENHANCEMENT MODE FIELD EFFECT TRANSISTOR; NCH; SUPERSOT-3; PD-(0.5W); I- (1.4A); V-(30V)       | NDS351AN             | FAIRCHILD SEMICONDUCTOR   |
| Q2                          |     1 | MMBT3906-7-F          | TRAN; 40V PNP SMALL SIGNAL TRANSISTOR; PNP; SOT-23; PD- (0.31W); I-(-0.2A); V-(-40V)                                       | MMBT3906-7-F         | DIODES INCORPORATED       |
| Q3                          |     1 | SUM55P06-19L-E3       | TRAN; P-CHANNEL 60V D-S ENHANCEMENT MODE MOSFET; PCH; TO-263-3; PD- (3.75W); I-(-55A); V-(-60V)                            | SUM55P06-19L-E3      | VISHAY SILICONIX          |
| Q4                          |     1 | NVMFS5826NLT1 G       | TRAN; POWER MOSFET; SINGLE N-CHANNEL; NCH; SO- 8FL; PD-(39W); I-(26A); V-(60V)                                             | NVMFS5826NLT1G       | ON SEMICONDUCTOR          |
| Q5                          |     1 | SI1317DL-T1-GE3       | TRAN; P-CHANNEL 20V (D-S) MOSFET; PCH; SOT-323; PD- (0.5W); I-(-1.4A); V-(-20V)                                            | SI1317DL-T1-GE3      | VISHAY SILICONIX          |
| R1, R33                     |     0 | OPEN                  | DNP: RESISTOR; 0603; OPEN; FORMFACTOR                                                                                      | N/A                  | N/A                       |
| R2                          |     1 | 3K                    | RESISTOR; 0603; 3K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                      | CRCW06033K00FK       | VISHAY DALE               |

## MAX20446 EV Kit Bill of Materials (continued)

| REF DESIGNATOR                    |   QTY | VALUE   | DESCRIPTION                                              | MFG PART #                                                 | MANUFACTURER           |
|-----------------------------------|-------|---------|----------------------------------------------------------|------------------------------------------------------------|------------------------|
| R3, R7                            |     2 | 0       | RESISTOR; 0805; 0 OHM; JUMPER; 0.125W; THICK FILM        | CRCW08050000ZS; ERJ- 6GEY0R00V; RC2012J000; RMCF0805ZT0R00 | DIGI-KEY               |
| R4                                |     1 | 226K    | RESISTOR; 0805; 226K OHM; 1%; 100PPM; 0.125W; THICK FILM | CRCW0805226KFK                                             | VISHAY DALE            |
| R5                                |     1 | 10K     | RESISTOR; 0805; 10K OHM; 0.1%; 25PPM; 0.125W; THIN FILM  | TNPW080510K0BE;ERA- 6YEB103V                               | VISHAY DALE;PANASONIC  |
| R6                                |     1 | 10K     | RESISTOR, 0603, 10K OHM, 5%, 200PPM, 1/16W, THICK FILM   | 301-10K-RC                                                 | XICON                  |
| R8                                |     1 | 0       | RESISTOR; 1206; 0 OHM; 0%; JUMPER; 0.25W; THICK FILM     | CRCW12060000ZS;ERJ- 8GEY0R00V                              | VISHAY DALE; PANASONIC |
| R9                                |     1 | 1M      | RESISTOR, 0603, 1M OHM, 1%, 100PPM, 0.10W, THICK FILM    | CRCW06031M00FK; MCR03EZPFX1004                             | VISHAY DALE; ROHM      |
| R10, R17, R23, R34, R37, R43      |     6 | 100K    | RESISTOR; 0603; 100K; 1%; 100PPM; 0.10W; THICK FILM      | CRCW0603100KFK                                             | VISHAY DALE            |
| R11                               |     1 | 18K     | RESISTOR, 0603, 18K OHM, 1%, 100PPM, 0.10W, THICK FILM   | CRCW060318K0FK                                             | VISHAY DALE            |
| R12, R19, R22, R29, R36, R38, R45 |     7 | 12K     | RESISTOR, 0603, 12K OHM, 1%, 100PPM, 0.10W, THICK FILM   | CRCW060312K0FK                                             | VISHAY DALE            |
| R13                               |     1 | 84.5K   | RESISTOR; 0603; 84.5K OHM; 1%; 100PPM; 0.10W; THICK FILM | RC0603FR-0784K5L                                           | YAGEO PHYCOMP          |
| R14                               |     1 | 0.05    | RESISTOR; 1206; 0.05 OHM; 1%; 75PPM; 1W; THICK FILM      | ERJ-8CWFR050                                               | PANASONIC              |
| R15, R49                          |     2 | 1K      | RESISTOR; 0603; 1K OHM; 0.1%; 10PPM; 0.10W; THICK FILM   | RG1608N-102-B-T1                                           | SUSUMU CO LTD.         |
| R16                               |     1 | 59K     | RESISTOR; 0603; 59K OHM; 1%; 100PPM; 0.1W; THICK FILM    | ERJ-3EKF5902                                               | PANASONIC              |
| R18                               |     1 | 27.4K   | RESISTOR; 0603; 27.4K OHM; 1%; 100PPM; 0.1W; THICK FILM  | ERJ-3EKF2742                                               | PANASONIC              |
| R20                               |     1 | 18.7K   | RESISTOR; 0603; 18.7K OHM; 1%; 100PPM; 0.1W; THICK FILM  | CRCW060318K7FK                                             | VISHAY DALE            |
| R24                               |     1 | 3.74K   | RESISTOR, 0603, 3.74KOHMS, 1%, 100PPM, 0.1W, THICK FILM  | CRCW06033K74FK                                             | VISHAY DALE            |
| R26                               |     1 | 22      | RESISTOR; 0603; 22 OHM; 5%; 200PPM; 0.10W; THICK FILM    | CRCW060322R0JN                                             | VISHAY DALE            |
| R27                               |     1 | 0.04    | RESISTOR; 1206; 0.04 OHM; 1%; 75PPM; 0.25W; THICK FILM   | WSL1206R0400F                                              | VISHAY DALE            |

## MAX20446 EV Kit Bill of Materials (continued)

| REF DESIGNATOR   |   QTY | VALUE          | DESCRIPTION                                                                                                                                                                                          | MFG PART #                    | MANUFACTURER                     |
|------------------|-------|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------|----------------------------------|
| R28              |     1 | 7.15K          | RESISTOR; 0603; 7.15K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                             | ERJ-3EKF7151V                 | PANASONIC                        |
| R31              |     0 | OPEN           | RESISTOR; 1206; OPEN; FORMFACTOR                                                                                                                                                                     | N/A                           | N/A                              |
| R32              |     1 | 39K            | RESISTOR, 0603, 39K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                                                                                               | CRCW060339K0FK                | VISHAY DALE                      |
| R35              |     1 | 8.06K          | RESISTOR; 0603; 8.06K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                                              | CRCW06038K06FK;ERJ- 3EKF8061V | VISHAY DALE; PANASONIC           |
| R39              |     1 | 76.8K          | RESISTOR; 0603; 76.8K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                             | CRCW060376K8FK                | VISHAY DALE                      |
| R42, R48, R55    |     3 | 10K            | RESISTOR; 0603; 10K OHM; 1%; 100PPM; 0.0125W; THICK FILM                                                                                                                                             | CHPHT0603K1002FGT             | VISHAY SFERNICE                  |
| R44              |     1 | 49.9K          | RESISTOR; 0603; 49.9K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                             | CRCW060349K9FK;ERJ- 3EKF4992V | VISHAY DALE;PANASONIC            |
| R46, R47         |     2 | 4.7K           | RESISTOR; 0603; 4.7K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                                  | CRCW06034K70FK                | VISHAY DALE                      |
| R50              |     1 | 1.4K           | RESISTOR; 0603; 1.4K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                                               | CRCW06031K40FK                | VISHAY DALE                      |
| R51              |     1 | 10             | RESISTOR; 0603; 10 OHM; 0.1%; 10PPM; 0.063W; THICK FILM                                                                                                                                              | RN73C1J10RBTG; 1614350-2      | TE CONNECTIVITY; TE CONNECTIVITY |
| R52              |     1 | 13.3K          | RESISTOR; 0603; 13.3K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                                              | CRCW060313K3FK;ERJ- 3EKF1332V | VISHAY DALE;PANASONIC            |
| R54              |     1 | 3.48K          | RESISTOR; 0603; 3.48K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                                              | ERJ-3EKF3481                  | PANASONIC                        |
| R56              |     0 | 0              | RESISTOR; 1206; 0 OHM; 0%; JUMPER; 0.25W; THICK FILM                                                                                                                                                 | CRCW12060000ZS;ERJ- 8GEY0R00V | VISHAY DALE; PANASONIC           |
| U1               |     1 | MAX20446ATG/V+ | EVKIT PART - IC; AUTOMOTIVE 6-CHANNEL BACKLIGHT DRIVER WITH BOOST/SEPIC CONTROLLER AND I2C INTERFACE; PACKAGE OUTLINE DRAWING NUMBER: 21-0139; LAND PATTERN NUMBER: 90-0022; PACKAGE CODE: T24444+4C | MAX20446ATG/V+                | MAXIM                            |
| -                |     1 | -              | PCB: MAX20446 EVKIT_A                                                                                                                                                                                | MAX20446EVKIT#                | MAXIM                            |

## MAX20446 EV Kit Schematic

<!-- image -->

## MAX20446 EV PCB Layouts

MAX20446 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

│

## MAX20446 EV PCB Layouts (continued)

MAX20446 EV Kit PCB Layout-Top Layer

<!-- image -->

│

## MAX20446 EV PCB Layouts (continued)

MAX20446 EV Kit PCB Layout-Bottom Layer

<!-- image -->

│

## MAX20446 EV PCB Layouts (continued)

MAX20446 EV Kit PCB Layout-Layer 2

<!-- image -->

│

## MAX20446 EV PCB Layouts (continued)

MAX20446 EV Kit PCB Layout-Layer 3

<!-- image -->

│

## MAX20446 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/18            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im ,ntegrated reserves the right to change the circuitry and speci¿cations without notice at any time. The parametric values (min and ma[ limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

│

Evaluates: MAX20446