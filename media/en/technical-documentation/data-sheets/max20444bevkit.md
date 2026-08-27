<!-- lastmod 2022-08-03 -->
<!-- image -->

## Evaluates: MAX20444B/ MAX20444C

## General Description

The MAX20444B evaluation kit (EV kit) demonstrates the MAX20444B integrated, 4-channel, high-brightness LED driver with boost controller and I 2 C interface for automotive displays.

The EV kit operates from a DC supply voltage between 4.5V and 36V, and the switching frequency can be set at either 2.2MHz or 400kHz. The EV kit can be configured to operate in stand-alone mode or in I 2 C mode. Spreadspectrum mode (SSM) for EMI improvement is enabled by default, but it can be disabled trough a register bit. The EV  kit  demonstrates  phase-shifted  pulse-width  modulation  (PWM)  dimming,  which  can  be  performed  either externally  using  a  PWM signal applied to the DIM PCB pad  or  internally  by  programming  the  desired  dimming frequency and individual duty cycle using I 2 C. The hybrid dimming feature can also be enabled through a register bit to reduce EMI. The EV kit also demonstrates fault protection for short LED, open LED, boost output undervoltage and overvoltage, and overtemperature.

For operation at switching frequencies other than 2.2MHz or  400kHz,  the  external  components  should  be  chosen according to the calculations in the MAX20444B IC data sheet.

The EV kit provides an I 2 C interface that can operate in conjunction with the MINIQUSB+ adapter board or a thirdparty  I 2 C  master.  The  EV  kit  also  includes  Windows ® compatible software that provides a simple graphical user interface (GUI) for exercising the features of the IC.

Click here to ask an associate for production status of specific part numbers.

## MAX20444B Evaluation Kit

## Benefits and Features

- Demonstrates Robustness of MAX20444B
- Wide 4.5V to 36V Input Operating Range (Up to 52V Load Dump)
- Powers HB LEDs (Up to four strings) for Medium-toLarge-Sized LCD Displays in Automotive and Display Backlight Applications
- 400kHz to 2.2MHz Resistor-Programmable Switching Frequency with Spread-Spectrum Option
- Phase-Shift Dimming Option
- Demonstrates Cycle-by-Cycle Current Limit and Thermal-Shutdown Features
- Demonstrates Wide Dimming Ratio
- Demonstrates Failsafe Operation
- I 2 C Programmability
- Dedicated GUI
- Proven PCB and Thermal Design
- Fully Assembled and Tested

## EV Kit Contents

| FILE                     | DESCRIPTION           |
|--------------------------|-----------------------|
| MAX20444BGUISetupV01.exe | Windows GUI Installer |

Ordering Information appears at end of data sheet.

Note: The MAX20444B EV kit is identical to the MAX20444 EV kit, with the exception of the U1 component. The photos and figures indicate MAX20444, but there are no dif -ferences between this version and the standard version.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

©

## MAX20444B Evaluation Kit

## Quick Start

## Required Equipment

- MAX20444B EV kit
- 5V to 36V, 4A DC power supply
- Two digital voltmeters (DVMs)
- Four series-connected HB LED strings (6 LEDs each) rated to no less than 120mA
- Current probe to measure the HB LED current
- MINIQUSB+ interface board with USB cable
- Windows-compatible PC with a spare USB port

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  Perform  the following  steps  to  verify  board  operation. Caution: Do not  turn  on  the  power  supply  until  all  connections  are completed.

## Stand-Alone Mode

- 1) Verify that jumper J17 is closed and that jumper J22 is open (2.2MHz switching frequency selected).
- 2) Verify  that  jumper  J1  is  closed  (DS1  green  LED connected).
- 3) Verify  that  jumper  J20  is  closed  (FAULT  signaling enabled).
- 4) Verify  that  a  shunt  is  installed  across  pins  1-2  on jumper J2 (device enabled).
- 5) Verify  that  a  shunt  is  installed  across  pins  1-2  on jumper JMP1 (hybrid dimming disabled).
- 6) Verify  that  a  shunt  is  installed  across  pins  1-3  on jumper JMP8 (LED short detection enabled).
- 7) Verify  that  jumpers  JMP3,  JMP6-JMP7,  and  JMP9 have shunts installed across pins 1-2 (bleed resistors connected, all current sinks enabled).
- 8) Verify  that  a  shunt  is  installed  across  pins  1-2  on jumper JMP2 (Phase shifting enabled).
- 9) Verify  that  a  shunt  is  installed  across  pins  1-2  on jumper JMP4 (LED current range set to 85-120mA).
- 10)  Verify  that  jumper  J8  is  closed  (LED  current  set  to 100mA).
- 11)  Connect the positive terminal of the power supply to the IN PCB pad. Connect the negative terminal of the power supply to a PGND PCB pad.

## Evaluates: MAX204B/ MAX204C

- 12)  Connect  a  DVM  across  the  OUT1  and  GND  PCB pads.
- 13)  Connect  the  four  LED  strings  from  VOUT  to  the OUT1, OUT2, OUT3 and OUT4 PCB pads.
- 14)  Clip the current probe across the channel 1 HB LED+ wire to measure the LED current.
- 15)  Turn on the power supply and set it to 12V. The green LED (DS1) and the LED strings should be on at this point.
- 16)  Measure  the  voltage  from  each  of  the  OUT\_  PCB pads  to  PGND  and  verify  the  lowest  voltage  is approximately 1V.
- 17)  Measure the LED current using the current probe and verify all channels.

## I 2 C Mode

- 1) Visit www.maximintegrated/evkitsoftware to download the latest  version  of  the  EV  kit  software, MAX20444BGUISetupV01.exe.
- 2) Install  the  EV  kit  software  (GUI)  on  your  PC  by running the MAX20444BGUISetupV01.exe program. The EV kit software application will be installed together with the required MINIQUSB+ drivers.
- 3) Verify that jumper J17 is closed and that jumper J22 is open (2.2MHz switching frequency selected).
- 4) Verify  that  jumper  J1  is  closed  (DS1  green  LED connected).
- 5) Verify  that  jumper  J23  is  closed  (FSEN  function disabled).
- 6) Verify  that  jumper  J20  is  closed  (FAULT  signaling enabled).
- 7) Verify  that  a  shunt  is  installed  across  pins  1-2  on jumper J2 (device enabled).
- 8) Verify that jumpers JMP1 and JMP8 have shunts installed across pins 1-4.
- 9) Verify  that  jumpers  JMP3,  JMP6-JMP7,  and  JMP9 have shunts installed across pins 1-2 (bleed resistors connected, all current sinks enabled).
- 10)  Verify  that  jumpers  JMP2  and  JMP4  have  shunts installed across pins  1-3  (SDA  and  SCL  PCB pads  connected  to  SDA/PSEN  and  SCL/IRANGE IC's pins).
- 11)  Connect the MINIQUSB+ interface board's P3 header to the J24 header on the EV kit.
- 12)  Connect the positive terminal of the power supply to the IN PCB pad. Connect the negative terminal of the power supply to a PGND PCB pad.

## MAX20444B Evaluation Kit

- 13)  Connect  a  DVM  across  the  OUT1  and  GND  PCB pads.
- 14)  Connect  the  four  LED  strings  from  VOUT  to  the OUT1, OUT2, OUT3, and OUT4 PCB pads.
- 15)  Clip the current probe across the channel 1 HB LED+ wire to measure the LED current.
- 16)  Turn on the power supply and set it to 12V. The green LED (DS1) should be on at this point.
- 17)  Launch the EV kit software application.
- 18)  From  the  EV  kit  software  toolbar,  select Device  Scan for Address .  The  GUI scans the I 2 C bus for available slave addresses on the bus and selects the first one (in this case, the MAX20444B I 2 C address). Press OK once  the  MAX20444B  I 2 C  address  has been found.
- 19)  Verify  that  the  status  bar  in  the  bottom-right  corner of the GUI displays EV Kit: Connected, as shown in Figure 1.
- 20)  In the 0x02 ISET register group box, select the desired  OUT\_ current  value  (45mA  to  120mA  in  5mA steps) by acting on the ISET slider bar, then click the Refresh button.
- 21)  In the 0x02 ISET register group box, check ENA to activate the driver.
- 22)  Measure  the  voltage  from  each  of  the  OUT\_  PCB pads to PGND and verify that the lowest voltage is approximately 1V.
- 23)  Measure the LED current using the current probe and verify all channels.
- 24)  For more details on how to use the GUI and all of the features available, click on the GUI Help menu item.

## Evaluates: MAX204B/ MAX204C

Figure 1. MAX20444B Evaluation Kit Software (GUI)

<!-- image -->

## Detailed Description of Hardware

The MAX20444B EV kit demonstrates the MAX20444B HB  LED  driver  with  an  integrated  step-up  DC-DC  preregulator followed by six linear current sinks to drive up to six strings of LEDs. The pre-regulator switches at 2.2MHz (or at 400kHz) and operates as a current-mode-controlled regulator,  providing  up  to  480mA  for  the  linear  current sinks,  as  well  as  overvoltage  protection.  The  cycle-bycycle current limit is set by resistor R27, while resistors R4 and R5 set the overvoltage protection voltage to 29V. The pre-regulator power section consists of inductor L2, power-sense  resistor  R27,  Q4  MOSFET,  and  switching diode  D1.  The  EV  kit  circuit  operates  from  a  4.5V  DC supply voltage up to the HB LED forward-string voltage. The circuit handles load-dump conditions up to 50V.

The  EV  kit  circuit  demonstrates  ultra-low  shutdown current when the EN pin of the device is pulled to ground by shorting the EN PCB pad to ground. Each of the four linear current sinks (OUT1-OUT4) is capable of operating up to 48V, sinking up to 120mA per channel.

Each  of  the  four  channels'  linear  current  sinks  is  I 2 Cconfigurable for 45mA to 120mA in 5mA steps, or can be disabled independently by acting on the 0x13 DISABLE register group box.

If  the  device  is  used  in  stand-alone  mode,  the  four channels' linear current sinks are configured by selecting the  current  range  through  the  SCL/IRANGE  pin  (SCL/ IRANGE  set  to  GND  Lower:  45mA-80mA  /  SCL/ IRANGE set to VCC  Higher: 85-120mA) and by setting the LED strings' current in steps of 5mA through a resistor connected between ISET pin and GND.

In  both  modes,  jumpers  JMP3,  JMP6-JMP7  and  JMP9 can be used to disable outputs selectively when the HB LED string is not connected.

The  EV  kit  features  PCB  pads  to  facilitate  connecting HB  LED  strings  for  evaluation.  The  VOUT  PCB  pads are used to connect each HB LED string's anode to the DC-DC pre-regulator output. The OUT1-OUT4 PCB pads are used to connect each HB LED string's cathode to the respective  current  sink.  Capacitors  C18,  C23,  C24  and C25 are included in the design to prevent oscillations and to  provide  stability  when  using  long,  untwisted  HB  LED connecting  cables  during  lab  evaluation.  These  capacitors are not required if the connection between the LED driver and the HB LEDs is a low-inductance connection.

A  DIM  PCB  pad  is  provided  for  using  a  digital  PWM signal to control the brightness of the HB LEDs. Test points are  also  provided  for  easy  access  to  the  device's  VCC regulator output as well as the COMP pin and the switching node of the pre-regulator (LX).

## SDA and SCL voltages (JMP2-JMP4, J18-J19, J21)

SDA and SCL voltage supplies can be selected between the  VCC  voltage  and  the  fixed  3.3V  provided  by  the MINIQUSB+.  Alternatively, the user can force an external voltage as digital reference. See Table 1 for  jumper settings.

## Power LED Enable (J1)

A  green  LED  (DS1)  is  used  to  indicate  that  the  EV  kit is  powered  on.  The  LED  can  be  disconnected  from the  power  supply,  allowing  precise  current-consumption evaluation. See Table 2 for shunt positions.

## Enable (EN)

The  EV  kit  features  an  enable  input  that  can  be  used to  enable/disable  the  device  and  place  it  in  shutdown mode. To enable the EV kit whenever power is applied to IN, place the jumper across pins 1-2 on jumper J2. To enable the EV kit using an external enable signal, place the jumper across pins 2-3 on J2 and apply a logic signal on the EN PCB input pad on the EV kit. A 1MΩ pulldown resistor on the EV kit pulls the EN input to ground in the event that J2 is left open or the EN signal is high impedance. Refer to the Enable section in the MAX20444B IC data sheet for additional information. See Table 3 for J2 jumper settings.

## Table 1. SDA and SCL supply (JMP2-JMP4, J18-J19, J21)

| SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   | SDAAND SCL SUPPLY               |
|------------------|------------------|------------------|------------------|------------------|---------------------------------|
| JMP2             | JMP4             | J18              | J19              | J21              |                                 |
| 1-3*             | 1-3*             | Open*            | Open*            | Open*            | 3.3V (with MINIQUSB+ connected) |
| 1-3              | 1-3              | Closed           | Closed           | Open             | VCC                             |
| 1-3              | 1-3              | Open             | Open             | 1-2              | Externally provided             |

*Default position.

## Table 2. DS1 Enable (J1)

| SHUNT POSITION   | DS1 POWER LED   |
|------------------|-----------------|
| Closed*          | Connected       |
| Open             | Disconnected    |

*Default position.

## MAX20444B Evaluation Kit

## Switching Frequency

Jumpers J17 and J22 are used to set the switching frequency of the MAX20444B to either 2.2MHz or 400kHz. When J17 is closed and J22 is open, the switching frequency is set to 2.2MHz. When J17 is open and J22 is closed, the switching frequency is nominally 400kHz. See Table 4 for jumper settings.

The EV kit is optimized for 2.2MHz switching operation by default. When selecting a switching frequency of 400kHz, L2  should  be  changed  to  22µH  to  maintain  acceptable efficiency.  Other  component  value  adjustments  may  be needed. Refer to the Oscillator Frequency section in the MAX20444B IC data sheet for more information.

Table 3. Enable (J2)

| SHUNT POSITION   | EN PIN                  | EVKIT OPERATION                           |
|------------------|-------------------------|-------------------------------------------|
| 1-2*             | Connected to IN         | Enabled when IN is powered.               |
| 2-3              | Connected to EN PCB pad | Enabled/disabled by signal on EN PCB pad. |

*Default position.

## HB LED Current

Current  for  the  device's  current  sinks  (on  all  four  channels) is fully configurable using I 2 C ( ISET slider bar in the 0x02 ISET register group box).

When operated in stand-alone mode, the EV kit features jumpers JMP4, J3-J6, J8, J10, J12 and J14 to configure the device's current sinks on all four channels. See Table 5 for proper jumper settings to configure the current-sink limits.

Note: When setting the LED current in stand-alone mode, the jumper J23 must be kept open.

## Table 4. Switching Frequency (J17 and J22)

| SHUNT POSITION   | SHUNT POSITION   | RT PIN                                  | EVKIT OPERATION            |
|------------------|------------------|-----------------------------------------|----------------------------|
| J17              | J22              |                                         |                            |
| Closed*          | Open*            | RT connected to GND via 13.3kΩ resistor | 2.2MHz switching frequency |
| Open             | Closed           | RT connected to GND via 76.8kΩ resistor | 400kHz switching frequency |

*Default position.

Table 5. LED Current (JMP4, J3-J6, J8, J10, J12 and J14)

| SCL/IRANGE                                             | ISET RESISTOR VALUE   | JUMPER   | SHUNT POSITION   |   OUT_CURRENT ( mA) |
|--------------------------------------------------------|-----------------------|----------|------------------|---------------------|
| JMP4 shunted in 1-4 position  45-80mA current range   | 3.48k                 | J14      | Closed           |                  45 |
| JMP4 shunted in 1-4 position  45-80mA current range   | 7.15k                 | J12      | Closed           |                  50 |
| JMP4 shunted in 1-4 position  45-80mA current range   | 12k                   | J10      | Closed           |                  55 |
| JMP4 shunted in 1-4 position  45-80mA current range   | 18.7k                 | J8       | Closed           |                  60 |
| JMP4 shunted in 1-4 position  45-80mA current range   | 27.4k                 | J6       | Closed           |                  65 |
| JMP4 shunted in 1-4 position  45-80mA current range   | 39k                   | J5       | Closed           |                  70 |
| JMP4 shunted in 1-4 position  45-80mA current range   | 59k                   | J4       | Closed           |                  75 |
| JMP4 shunted in 1-4 position  45-80mA current range   | 84.5k                 | J3       | Closed           |                  80 |
| JMP4 shunted in 1-2 position*  85-120mA current range | 3.48k                 | J14      | Closed           |                  85 |
| JMP4 shunted in 1-2 position*  85-120mA current range | 7.15k                 | J12      | Closed           |                  90 |
| JMP4 shunted in 1-2 position*  85-120mA current range | 12k                   | J10      | Closed           |                  95 |
| JMP4 shunted in 1-2 position*  85-120mA current range | 18.7k*                | J8       | Closed           |                 100 |
| JMP4 shunted in 1-2 position*  85-120mA current range | 27.4k                 | J6       | Closed           |                 105 |
| JMP4 shunted in 1-2 position*  85-120mA current range | 39k                   | J5       | Closed           |                 110 |
| JMP4 shunted in 1-2 position*  85-120mA current range | 59k                   | J4       | Closed           |                 115 |
| JMP4 shunted in 1-2 position*  85-120mA current range | 84.5k                 | J3       | Closed           |                 120 |

*Default position.

│

## Channel 1-Channel 4 Current-Sink Disabling

The  EV  kit  features  jumpers  JMP3,  JMP6-JMP7,  and JMP9, which are used to put each OUT\_ current sink in one of three operating states:

- 1) Normal  operation  (i.e.,  OUT\_  is  connected  to  the corresponding  ring  on  the  board  edge  and  LEDs are connected from that location to the pre-regulator output VOUT);
- 2) OUT\_ connected  through  a  12kΩ  resistor  to  GND, and thus disabled;
- 3) OUT\_ shorted to GND (used to test fault detection).

To  disable  a  channel,  install  a  jumper  in  the  channel's respective jumper across pins 1-3, connecting the OUT\_ to ground through a 12kΩ resistor. The dimming algorithm in  the  IC  requires  that  higher  numbered  OUT\_  current sinks  be  disabled  first.  For  example,  if  only  two  strings are  needed,  OUT1-OUT2  should  be  used,  with  OUT3 and OUT4 disabled. See Table 6 for jumper settings. The 100kΩ bleed resistors are installed to prevent the OUT\_ leakage current from dimly illuminating large LED strings when the DIM signal is low. Note that each channel can be alternatively disabled (I 2 C mode only) by acting on the 0x13 DISABLE register group box.

## HB LED Digital Dimming Control

The EV kit features a DIM PCB input pad for connecting an external digital PWM signal. Apply a digital PWM signal with a 0.8V logic-low level (or less) and 2.1V logic-high level (or greater). The DIM signal frequency should be at least 100Hz. If the DIM frequency is changed during operation, the MAX20444B must be powered off and on again to register the change. To adjust the HB LED brightness, vary the signal duty cycle from 0% to 100% and maintain a minimum pulse width of 500ns. Apply the digital PWM signal  to  the  DIM  PCB  pad. The  DIM  input  of  the  IC  is pulled up internally with a 5μA (typ) current source.

Dimming  can  also  be  performed  by  programming  the desired  dimming  level  using  I 2 C.  External  dimming  is enabled by default at each device's power-up. To disable it,  first  uncheck DIM\_EXT in  the 0x03  IMODE register group  box,  then  select  one  of  the  available  dimming frequencies in the FPWM section contained in the 0x12 SETTING register  group  box.  Individual  channel  brightness  levels  can  finally  be  selected  by  acting  on  the TON1-TON4 slider bars.

Note: to ensure that correct brightness levels are selected in internal dimming mode, each TON\_ slider bar must be zeroed at each device's power-up.

For additional information on the device's digital dimming feature, refer to the Dimming section in the MAX20444B IC data sheet.

Table 6. Selecting OUT\_ Channels Operating State (JMP3, JMP6-JMP7 and JMP9)

| OUT_   | JUMPER   | SHUNT POSITION   | CHANNEL OPERATION                                                                                  |
|--------|----------|------------------|----------------------------------------------------------------------------------------------------|
| OUT1   | JMP9     | 1-2*             | Channel 1 operational; connect an HB LED string** between VOUT and OUT1. Bleed resistor connected. |
| OUT1   | JMP9     | 1-3              | Channel 1 not used. OUT1 current sink disabled.                                                    |
| OUT1   | JMP9     | 1-4              | Channel 1 shorted to GND to simulate a fault.                                                      |
| OUT2   | JMP7     | 1-2*             | Channel 2 operational; connect an HB LED string** between VOUT and OUT2. Bleed resistor connected. |
| OUT2   | JMP7     | 1-3              | Channel 2 not used. OUT2 current sink disabled.                                                    |
| OUT2   | JMP7     | 1-4              | Channel 2 shorted to GND to simulate a fault.                                                      |
| OUT3   | JMP6     | 1-2*             | Channel 3 operational; connect an HB LED string** between VOUT and OUT3. Bleed resistor connected. |
| OUT3   | JMP6     | 1-3              | Channel 3 not used. OUT3 current sink disabled.                                                    |
| OUT3   | JMP6     | 1-4              | Channel 3 shorted to GND to simulate a fault.                                                      |
| OUT4   | JMP3     | 1-2*             | Channel 4 operational; connect an HB LED string** between VOUT and OUT4. Bleed resistor connected. |
| OUT4   | JMP3     | 1-3              | Channel 4 not used. OUT4 current sink disabled.                                                    |
| OUT4   | JMP3     | 1-4              | Channel 4 shorted to GND to simulate a fault.                                                      |

│

## MAX20444B Evaluation Kit

## Hybrid Dimming Operation

The  hybrid  dimming  feature  can  be  used  with  both external and internal dimming. The device will determine whether the LED is to be dimmed by reducing the LED current or by chopping the LED current (depending on the hybrid dimming threshold).

In I 2 C mode, the hybrid dimming threshold is set through the  HDIM\_THR  section  contained  in  the 0x03  IMODE register group box. To enable the hybrid dimming feature, check HDIM in the 0x03 IMODE register group box.

Hybrid dimming can be enabled in stand-alone mode by connecting  a  resistor  from  I.C./HDSET  to  GND  through jumpers J7, J9, J11, and J13. Each resistor value determines the threshold at which analog dimming transitions to PWM dimming. See Table 7 for jumper settings.

For additional information on the device's dimming feature, refer to the Hybrid Dimming section in the MAX20444B IC data sheet.

Evaluates: MAX204B/

MAX204C

## Phase-Shift Operation

The EV kit demonstrates the phase-shifting feature of the IC. In I 2 C mode, phase-shift is enabled by default at each device's  power-up.  To  disable  it,  uncheck PSEN in  the 0x02 ISET register group box. This operation must always be performed before enabling any LED string.

When  phase  shifting  is  enabled,  each  current  sink's turn-on  is  separated  by  360º/n,  where  n  is  the  number of enabled strings. When phase shifting is disabled, the dimming of each string is controlled directly by the DIM input (or by the FPWM and TON\_ settings if internal dimming is enabled), and all current sinks turn on and off at the same time.

Phase-shift  enabling/disabling  can  be  performed  by acting  on  JMP2  in  stand-alone  mode.  See Table  8 for jumper settings.

Table 7. Hybrid dimming threshold setting (JMP1, J7, J9, J11 and J13)

| I.C./HDSET                                                  | I.C./HDSET RESISTOR VALUE   | JUMPER   | SHUNT POSITION   | HYBRID DIMMING THRESHOLD (%)            |
|-------------------------------------------------------------|-----------------------------|----------|------------------|-----------------------------------------|
| JMP1 shunted in 1-2 position  I.C./HDSET connected to VCC  | 3.48k                       | J13      | Open             | Hybrid dimming disabled                 |
| JMP1 shunted in 1-2 position  I.C./HDSET connected to VCC  | 12k                         | J11      | Open             | Hybrid dimming disabled                 |
| JMP1 shunted in 1-2 position  I.C./HDSET connected to VCC  | 27.4k                       | J9       | Open             | Hybrid dimming disabled                 |
| JMP1 shunted in 1-2 position  I.C./HDSET connected to VCC  | 59k*                        | J7       | Open             | Hybrid dimming disabled                 |
| JMP1 shunted in 1-4 position  I.C./HDSET connected to GND* | 3.48k                       | J13      | Open             | Hybrid dimming threshold set using I 2C |
| JMP1 shunted in 1-4 position  I.C./HDSET connected to GND* | 12k                         | J11      | Open             | Hybrid dimming threshold set using I 2C |
| JMP1 shunted in 1-4 position  I.C./HDSET connected to GND* | 27.4k                       | J9       | Open             | Hybrid dimming threshold set using I 2C |
| JMP1 shunted in 1-4 position  I.C./HDSET connected to GND* | 59k*                        | J7       | Open             | Hybrid dimming threshold set using I 2C |
| JMP1 shunted in 1-3 position                                | 3.48k                       | J13      | Closed           | 6.25                                    |
| JMP1 shunted in 1-3 position                                | 12k                         | J11      | Closed           | 12.5                                    |
| JMP1 shunted in 1-3 position                                | 27.4k                       | J9       | Closed           | 25                                      |
| JMP1 shunted in 1-3 position                                | 59k*                        | J7       | Closed           | 50                                      |

*Default position.

Table 8. Phase shifting operation (JMP2)

| SHUNT POSITION   | SDA/PSEN PIN     | EVKIT OPERATION         |
|------------------|------------------|-------------------------|
| 1-2*             | Connected to VCC | Phase shifting enabled  |
| 1-4              | Connected to GND | Phase shifting disabled |

*Default position.

│

## MAX20444B Evaluation Kit

## Failsafe Operation (I 2 C mode only)

The  EV  kit  demonstrates  the  failsafe  feature  of  the  IC. After shunting jumper JMP8 in 1-4 position (I2CDIS/RSDT pin connected to ground), one of the jumpers J3-J6, J8, J10,  J12,  J14  can  be  closed  before  powering  up  the device to select, through a resistor to ground, the current level to which the current sinks will be enabled in case the FSEN PCB pad is tied to VCC. If jumper J23 is closed, the FSEN/ISET pin is shorted to ground and its function is disabled. Only one jumper at a time may be closed. See Table 9 for jumper settings.

For additional information on the device's failsafe operation,  refer  to  the FSEN/ISET pin function section  in  the MAX20444B IC data sheet.

## Fault-Indicator Output (FLTB)

The EV kit features the device's open-drain FLTB output. The FLT signal on the PCB pad is pulled up to VCC by resistor R48. FLT goes low when an open-LED or shortedLED string is detected, during thermal warning/shutdown or  during  boost  undervoltage/overvoltage  events.  Keep jumper J20 closed to allow DS2 red-LED enabling in case FLT goes low. Refer to the Fault Protection section in the MAX20444B IC data sheet for additional information on the FLT signal.

## Shorted-LED Detection and Protection

The short-LED threshold is set using I 2 C in the SLDET section  contained  in  the 0x12  SETTING register  group box. A shorted LED is detected when the following condition is satisfied: VOUT &gt; VSLDET.

## Table 9. Selecting FSEN resistor (J3-J6, J8, J10, J12, J14, J23)

| FSEN RESISTOR VALUE      | JUMPER   | SHUNT POSITION   | OUT_ CURRENT ( mA)   |
|--------------------------|----------|------------------|----------------------|
| 0 (FSEN shorted to GND)* | J23      | Closed           | Failsafe disabled    |
| 3.48k                    | J14      | Closed           | 25                   |
| 7.15k                    | J12      | Closed           | 25                   |
| 12k                      | J10      | Closed           | 50                   |
| 18.7k                    | J8       | Closed           | 50                   |
| 27.4k                    | J6       | Closed           | 75                   |
| 39k                      | J5       | Closed           | 75                   |
| 59k                      | J4       | Closed           | 100                  |
| 84.5k                    | J3       | Closed           | 100                  |

*Default position.

In  stand-alone  mode,  the  short-LED  threshold  is  programmed through the RSDT input. R40 and R41 form a resistor-divider  from  VCC to RSDT to SGND. A shorted LED is detected when the following condition is satisfied: VOUT &gt; (4 x VRSDT).

When the  short-LED  threshold  is  reached,  the  affected current sink is disabled to reduce excess power dissipation  and  the  FLT  indicator  asserts  low.  The  short-LED detection feature is regulated through jumper JMP8. See Table 10 for jumper settings.

## Overvoltage Detection and Protection

The  resistors  (R4  and  R5)  connected  to  BSTMON  are configured for a VOUT\_OVP of 29V. This sets the maxi -mum converter output (VOUT) voltage at 29V. During an open-LED string condition, the converter output ramps up to the output overvoltage threshold. Capacitor C3 can be added to provide noise filtering to the overvoltage signal. To reconfigure the circuit for a different voltage, replace resistor  R4  with  a  different  value  using  the  following equation:

<!-- formula-not-decoded -->

where R5 is 10kΩ, VOUT\_OVP is the overvoltage-protec -tion threshold desired, and R4 is the new resistor value for obtaining the desired overvoltage protection.

MOSFET Q1 is an optional overvoltage-protection resistordivider disconnect switch for ultra-low shutdown current. Refer  to  the Open-LED  Management  and  Overvoltage Protection section  in  the  MAX20444B  IC  data  sheet  for additional information.

## Table 10. Short-LED detection (JMP8)

| SHUNT POSITION   | I2CDIS/ RSDT PIN                       | EVKIT OPERATION                                      |
|------------------|----------------------------------------|------------------------------------------------------|
| 1-4*             | Connected to GND                       | Short-LED detection regulated using I 2 C            |
| 1-2              | Connected to VCC                       | Short-LED detection disabled                         |
| 1-3              | Connected to R40/ R41 resistor-divider | Short-LED detection regulated using resistor-divider |

*Default position.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX20444BEVKIT# | EVKIT  |

#Denotes RoHS compliant.

## MAX20444B EV Kit Bill of Materials

|   ITEM | REF_DES                 | DNI/DNP   |   QTY | MFG PART #                                                                                    | MANUFACTURER                    | VALUE       | DESCRIPTION                                                                                                                   |
|--------|-------------------------|-----------|-------|-----------------------------------------------------------------------------------------------|---------------------------------|-------------|-------------------------------------------------------------------------------------------------------------------------------|
|      1 | C2, C6, C16             | -         |     3 | UMK107BJ105KA; C1608X5R1H105K080AB; CL10A105KB8NNN; GRM188R61H105KAAL                         | TAIYO YUDEN;TDK; SAMSUNG;MURATA | 1UF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 50V; TOL = 10%; MODEL = _MK SERIES; TG = -55°C TO +85°C                             |
|      2 | C4                      | -         |     1 | CGA3E3X7S2A104K080AB                                                                          | TDK                             | 0.1UF       | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG = -55°C TO +125°C; TC = X7S                                     |
|      3 | C5, C26, C31            | -         |     3 | C1210C475K5RAC; GRM32ER71H475KA88; GRM32ER71H475KA88; GCM32ER71H475KA55; CGA6P3X7R1H475K250AB | KEMET;MURATA; MURATA;MURATA;TDK | 4.7UF       | CAPACITOR; SMT (1210); CERAMIC CHIP; 4.7UF; 50V; TOL =10%; TG = -55°C TO +125°C; TC = X7R                                     |
|      4 | C9, C10                 | -         |     2 | EEE-TG1H470UP                                                                                 | PANASONIC                       | 47UF        | CAPACITOR; SMT (CASE_F); ALUMINUM-ELECTROLYTIC; 47UF; 50V; TOL = 20%; MODEL = TG SERIES; TG = -40°C TO +125°C                 |
|      5 | C12, C18, C23-C25       | -         |     5 | GRM1885C1H102JA01; C1608C0G1H102J080AA; GCM1885C1H102JA16                                     | MURATA;TDK; MURATA              | 1000PF      | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 50V; TOL = 5%; TG = -55°C TO +125°C                                              |
|      6 | C13                     | -         |     1 | C0603C473K5RAC; GRM188R71H473KA61; GCM188R71H473KA55; CGA3E2X7R1H473K080AA                    | KEMET;MURATA; MURATA;TDK        | 0.047UF     | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.047UF; 50V; TOL = 10%; MODEL = X7R; TG = -55°C TO +125°C; TC = X7R                     |
|      7 | C17                     | -         |     1 | ECJ-1VC1H100D                                                                                 | PANASONIC                       | 10PF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 10PF; 50V; TOL = ± 5PF; MODEL = C0G; TG = -55°C TO +85°C; TC = +/                        |
|      8 | C20                     | -         |     1 | GRM188R71A225KE15; CL10B225KP8NNN; C1608X7R1A225K080AC                                        | MURATA;SAMSUNG;TDK              | 2.2UF       | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2UF; 10V; TOL = 10%; TG = -55°C TO +125°C; TC=X7R                                      |
|      9 | C21                     | -         |     1 | GRM1885C1H222JA01                                                                             | MURATA                          | 2200PF      | CAPACITOR; SMT (0603); CERAMIC; 2200PF; 50V; TOL = 5%; TG = -55°C TO +125°C; TC = C0G                                         |
|     10 | C22                     | -         |     1 | C0603C683J5RAC                                                                                | KEMET                           | 0.068UF     | CAPACITOR; SMT; 0603; CERAMIC; 0.068uF; 50V; 5%; X7R; -55°C to + 125°C; 0 ± 15%°C MAX.                                        |
|     11 | C27                     | -         |     1 | 06035C101JAT                                                                                  | AVX                             | 100PF       | CAPACITOR; SMT (0603); CERAMIC CHIP; 100PF; 50V; TOL = 5%; TG = -55°C TO +125°C; TC = X7R                                     |
|     12 | C28                     | -         |     1 | 06035C220JAT                                                                                  | AVX                             | 22PF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 22PF; 50V; TOL = 5%; TG = -55°C TO +125°C; TC = X7R                                      |
|     13 | C226                    | -         |     1 | C2012X7R1H225K125AC; CGA4J3X7R1H225K125AB; CGA4J3X7R1H225K125AE                               | TDK;TDK;TDK                     | 2.2UF       | CAPACITOR; SMT (0805); CERAMIC CHIP; 2.2UF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                    |
|     14 | COMP, LX, TP1, TP2, VCC | -         |     5 | 5011                                                                                          | N/A                             | 5011        | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|     15 | D1                      | -         |     1 | NRVBS260T3G                                                                                   | ON SEMICONDUCTOR                | NRVBS260T3G | DIODE; SCH; SURFACE MOUNT SCHOTTKY POWER RECTIFIER; SMB; PIV=60V; IF=2A                                                       |
|     16 | D2, D3                  | -         |     2 | BZG03C18                                                                                      | VISHAY SEMICONDUCTORS           | 18V         | DIODE; ZNR; SMT (DO-214AC); VZ = 18V; IZM = 0.025A                                                                            |
|     17 | D4                      | -         |     1 | B160B-13-F                                                                                    | DIODES INCORPORATED             | B160B-13-F  | DIODE; SCH; SMB (DO-214AA); PIV = 60V; IF = 1A                                                                                |
|     18 | D5                      | -         |     1 | CMPD914E                                                                                      | CENTRAL SEMICONDUCTOR           | CMPD914E    | DIODE; SWT; SMT (SOT23-3); PIV = 150V; IF = 0.1A                                                                              |

Evaluates: MAX204B/

## MAX20444B EV Kit Bill of Materials (continued)

|   ITEM | REF_DES                                                                                                                                 | DNI/DNP   |   QTY | MFG PART #                                               | MANUFACTURER              | VALUE                | DESCRIPTION                                                                                                                |
|--------|-----------------------------------------------------------------------------------------------------------------------------------------|-----------|-------|----------------------------------------------------------|---------------------------|----------------------|----------------------------------------------------------------------------------------------------------------------------|
|     19 | DIM, EN, FLT, FSEN/ISET, GND, GND1, GND2, I.C./HDSET, I2CDIS/RSDT, IN, OUT1-OUT4, PGND, PGND1, PGND2, SCL, SDA, SYNC, VOUT, VOUT1-VOUT3 | -         |    24 | 9020 BUSS                                                | WEICO WIRE                | MAXIMPAD             | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                   |
|     20 | DS1                                                                                                                                     | -         |     1 | LGL29K-F2J1-24-Z                                         | OSRAM                     | LGL29K-F2J1-24-Z     | DIODE; LED; SMARTLED; GREEN; SMT; PIV = 1.7V; IF = 0.02A                                                                   |
|     21 | DS2                                                                                                                                     | -         |     1 | LS L29K-G1J2-1-Z                                         | OSRAM                     | LS L29K-G1J2-1-Z     | DIODE; LED; SMART; RED; SMT (0603); PIV = 1.8V; IF = 0.02A; -40°C TO +100°C                                                |
|     22 | J1, J3-J14, J17-J20, J22, J23                                                                                                           | -         |    19 | PBC02SAAN                                                | SULLINS ELECTRONICS CORP. | PBC02SAAN            | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                  |
|     23 | J2, J21                                                                                                                                 | -         |     2 | PEC03SAAN                                                | SULLINS ELECTRONICS CORP. | PEC03SAAN            | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65°C TO +125°C;                                     |
|     24 | J24                                                                                                                                     | -         |     1 | 803-87-020-20-001101                                     | PRECI-DIP SA              | 803-87-020-20-001101 | EVKIT PART-CONNECTOR; FEMALE; TH; DOUBLE ROW; 2.54MM; RIGHT ANGLE SOLDER TAIL; MATING PIN DIA 0.76MM; RIGHT ANGLE; 20PINS; |
|     25 | J25                                                                                                                                     | -         |     1 | HTSW-112-11-G-S-RA                                       | SAMTEC                    | HTSW-112-11-G-S-RA   | CONNECTOR; MALE; THROUGH HOLE; SQUARE POST HEADER; RIGHT ANGLE; 12PINS ;                                                   |
|     26 | JMP1-JMP4, JMP6-JMP9                                                                                                                    | -         |     8 | PEC04SAAN                                                | SULLINS ELECTRONICS CORP. | PEC04SAAN            | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                                  |
|     27 | L1                                                                                                                                      | -         |     1 | XAL4020-601ME                                            | COILCRAFT                 | 0.60UH               | INDUCTOR; SMT; CORE MATERIAL= COMPOSITE; 0.60UH; TOL = ± 20%; 11.7A                                                        |
|     28 | L2                                                                                                                                      | -         |     1 | MSS1246T-472ML                                           | COILCRAFT                 | 4.7UH                | INDUCTOR; SMT; FERRITE CORE; 4.7UH; TOL = ±20%; 9.70A                                                                      |
|     29 | Q1                                                                                                                                      | -         |     1 | NDS351AN                                                 | FAIRCHILD SEMICONDUCTOR   | NDS351AN             | TRAN; N-CHANNEL LOGIC LEVEL ENHANCEMENT MODE FIELD EFFECT TRANSISTOR; NCH; SUPERSOT-3; PD-(0.5W); I-(1.4A); V-(30V)        |
|     30 | Q2                                                                                                                                      | -         |     1 | MMBT3906-7-F                                             | DIODES INCORPORATED       | MMBT3906-7-F         | TRAN; 40V PNP SMALL SIGNAL TRANSISTOR; PNP; SOT-23; PD-(0.31W); I-(-0.2A); V-(-40V)                                        |
|     31 | Q3                                                                                                                                      | -         |     1 | SUM55P06-19L-E3                                          | VISHAY SILICONIX          | SUM55P06-19L-E3      | TRAN; P-CHANNEL 60V D-S ENHANCEMENT MODE MOSFET; PCH; TO-263-3; PD-(3.75W); I-(-55A); V-(-60V)                             |
|     32 | Q4                                                                                                                                      | -         |     1 | NVMFS5C677NLT1G                                          | ON SEMICONDUCTOR          | NVMFS5C677NLT1G      | TRAN; NCH; POWER MOSFET; SO-8FL; PD-(3.5W); I-(36A); V-(60V)                                                               |
|     33 | Q5                                                                                                                                      | -         |     1 | SI1317DL-T1-GE3                                          | VISHAY SILICONIX          | SI1317DL-T1-GE3      | TRAN; P-CHANNEL 20V (D-S) MOSFET; PCH; SOT-323; PD-(0.5W); I-(-1.4A); V-(-20V)                                             |
|     34 | R2                                                                                                                                      | -         |     1 | CRCW06033K00FK                                           | VISHAY DALE               | 3K                   | RESISTOR; 0603; 3K Ω ; 1%; 100PPM; 0.10W; THICK FILM                                                                       |
|     35 | R3, R7                                                                                                                                  | -         |     2 | CRCW08050000ZS; ERJ-6GEY0R00; RC2012J000; RMCF0805ZT0R00 | DIGI-KEY                  | 0                    | RESISTOR; 0805; 0 Ω ; JUMPER; 0.125W; THICK FILM                                                                           |
|     36 | R4                                                                                                                                      | -         |     1 | CRCW0805226KFK                                           | VISHAY DALE               | 226K                 | RESISTOR; 0805; 226K Ω ; 1%; 100PPM; 0.125W; THICK FILM                                                                    |
|     37 | R5                                                                                                                                      | -         |     1 | TNPW080510K0BE; ERA-6YEB103V                             | VISHAY DALE;PANASONIC     | 10K                  | RESISTOR; 0805; 10K Ω ; 0.1%; 25PPM; 0.125W; THIN FILM                                                                     |
|     38 | R6                                                                                                                                      | -         |     1 | 301-10K-RC                                               | XICON                     | 10K                  | RESISTOR, 0603, 10K Ω , 5%, 200PPM, 1/16W, THICK FILM                                                                      |
|     39 | R8                                                                                                                                      | -         |     1 | CRCW12060000ZS; ERJ-8GEY0R00                             | VISHAY DALE;PANASONIC     | 0                    | RESISTOR; 1206; 0 Ω ; 0%; JUMPER; 0.25W; THICK FILM                                                                        |
|     40 | R9                                                                                                                                      | -         |     1 | CRCW06031M00FK; MCR03EZPFX1004                           | VISHAY DALE;ROHM          | 1M                   | RESISTOR, 0603, 1M Ω , 1%, 100PPM, 0.10W, THICK FILM                                                                       |
|     41 | R11                                                                                                                                     | -         |     1 | CRCW060318K0FK                                           | VISHAY DALE               | 18K                  | RESISTOR, 0603, 18K Ω , 1%, 100PPM, 0.10W, THICK FILM                                                                      |
|     42 | R13                                                                                                                                     | -         |     1 | RC0603FR-0784K5L                                         | YAGEO PHYCOMP             | 84.5K                | RESISTOR; 0603; 84.5K Ω ; 1%; 100PPM; 0.10W; THICK FILM                                                                    |
|     43 | R14                                                                                                                                     | -         |     1 | ERJ-8CWFR050                                             | PANASONIC                 | 0.05                 | RESISTOR; 1206; 0.05 Ω ; 1%; 75PPM; 1W; THICK FILM                                                                         |
|     44 | R15, R49                                                                                                                                | -         |     2 | RG1608N-102-B-T1                                         | SUSUMU CO LTD.            | 1K                   | RESISTOR; 0603; 1K Ω ; 0.1%; 10PPM; 0.10W; THICK FILM                                                                      |
|     45 | R16, R53                                                                                                                                | -         |     2 | ERJ-3EKF5902                                             | PANASONIC                 | 59K                  | RESISTOR; 0603; 59K Ω ; 1%; 100PPM; 0.1W; THICK FILM                                                                       |
|     46 | R18, R21                                                                                                                                | -         |     2 | ERJ-3EKF2742                                             | PANASONIC                 | 27.4K                | RESISTOR; 0603; 27.4K Ω ; 1%; 100PPM; 0.1W; THICK FILM                                                                     |

Evaluates: MAX204B/

## MAX20444B EV Kit Bill of Materials (continued)

|   ITEM | REF_DES                      | DNI/DNP   |   QTY | MFG PART #                                                                                    | MANUFACTURER                       | VALUE           | DESCRIPTION                                                                                                       |
|--------|------------------------------|-----------|-------|-----------------------------------------------------------------------------------------------|------------------------------------|-----------------|-------------------------------------------------------------------------------------------------------------------|
|     47 | R20                          | -         |     1 | CRCW060318K7FK                                                                                | VISHAY DALE                        | 18.7K           | RESISTOR; 0603; 18.7K Ω ; 1%; 100PPM; 0.1W; THICK FILM                                                            |
|     48 | R22, R25, R29, R36, R38, R45 | -         |     6 | CRCW060312K0FK                                                                                | VISHAY DALE                        | 12K             | RESISTOR, 0603, 12K Ω , 1%, 100PPM, 0.10W, THICK FILM                                                             |
|     49 | R23, R34, R37, R43           | -         |     4 | CRCW0603100KFK; RC0603FR-07100KL; RC0603FR-13100KL; ERJ-3EKF1003; AC0603FR-07100KL            | VISHAY DALE;YAGEO; YAGEO;PANASONIC | 100K            | RESISTOR; 0603; 100K; 1%; 100PPM; 0.10W; THICK FILM                                                               |
|     50 | R24                          | -         |     1 | CRCW06033K74FK                                                                                | VISHAY DALE                        | 3.74K           | RESISTOR, 0603, 3.74K Ω , 1%, 100PPM, 0.1W, THICK FILM                                                            |
|     51 | R26                          | -         |     1 | CRCW060322R0JN                                                                                | VISHAY DALE                        | 22              | RESISTOR; 0603; 22 Ω ; 5%; 200PPM; 0.10W; THICK FILM                                                              |
|     52 | R27                          | -         |     1 | WSL1206R0400F                                                                                 | VISHAY DALE                        | 0.04            | RESISTOR; 1206; 0.04 Ω ; 1%; 75PPM; 0.25W; THICK FILM                                                             |
|     53 | R28                          | -         |     1 | ERJ-3EKF7151                                                                                  | PANASONIC                          | 7.15K           | RESISTOR; 0603; 7.15K Ω ; 1%; 100PPM; 0.10W; THICK FILM                                                           |
|     54 | R30, R54                     | -         |     2 | ERJ-3EKF3481                                                                                  | PANASONIC                          | 3.48K           | RESISTOR; 0603; 3.48K Ω ; 1%; 100PPM; 0.1W; THICK FILM                                                            |
|     55 | R32                          | -         |     1 | CRCW060339K0FK                                                                                | VISHAY DALE                        | 39K             | RESISTOR, 0603, 39K Ω , 1%, 100PPM, 0.10W, THICK FILM                                                             |
|     56 | R35                          | -         |     1 | CRCW06038K06FK; ERJ-3EKF8061                                                                  | VISHAY DALE;PANASONIC              | 8.06K           | RESISTOR; 0603; 8.06K Ω ; 1%; 100PPM; 0.1W; THICK FILM                                                            |
|     57 | R39                          | -         |     1 | CRCW060376K8FK                                                                                | VISHAY DALE                        | 76.8K           | RESISTOR; 0603; 76.8K Ω ; 1%; 100PPM; 0.10W; THICK FILM                                                           |
|     58 | R40                          | -         |     1 | CRCW06033012FK                                                                                | VISHAY DALE                        | 30.1K           | RESISTOR; 0603; 30.1K; 1%; 100PPM; 0.10W; THICK FILM                                                              |
|     59 | R41                          | -         |     1 | CRCW060320K0FK                                                                                | VISHAY DALE                        | 20K             | RESISTOR; 0603; 20K Ω ; 1%; 100PPM; 0.1W; THICK FILM                                                              |
|     60 | R42, R48, R55                | -         |     3 | CHPHT0603K1002FGT                                                                             | VISHAY SFERNICE                    | 10K             | RESISTOR; 0603; 10K Ω ; 1%; 100PPM; 0.0125W; THICK FILM                                                           |
|     61 | R44                          | -         |     1 | CRCW060349K9FK; ERJ-3EKF4992                                                                  | VISHAY DALE;PANASONIC              | 49.9K           | RESISTOR; 0603; 49.9K Ω ; 1%; 100PPM; 0.10W; THICK FILM                                                           |
|     62 | R46, R47                     | -         |     2 | CRCW06034K70FK                                                                                | VISHAY DALE                        | 4.7K            | RESISTOR; 0603; 4.7K; 1%; 100PPM; 0.10W; THICK FILM                                                               |
|     63 | R50                          | -         |     1 | CRCW06031K40FK                                                                                | VISHAY DALE                        | 1.4K            | RESISTOR; 0603; 1.4K Ω ; 1%; 100PPM; 0.1W; THICK FILM                                                             |
|     64 | R51                          | -         |     1 | RN73C1J10RBTG; 1614350-2                                                                      | TE CONNECTIVITY; TE CONNECTIVITY   | 10              | RESISTOR; 0603; 10 Ω ; 0.1%; 10PPM; 0.063W; THICK FILM                                                            |
|     65 | R52                          | -         |     1 | CRCW060313K3FK; ERJ-3EKF1332                                                                  | VISHAY DALE;PANASONIC              | 13.3K           | RESISTOR; 0603; 13.3K Ω ; 1%; 100PPM; 0.1W; THICK FILM                                                            |
|     66 | U1                           | -         |     1 | MAX20444BATG/V+                                                                               | MAXIM                              | MAX20444BATG/V+ | EVKIT PART-IC; MAX20444BATG/V+; PKG. OUTLINE DWG. NO.: 21-0139; LAND PATTERN NUMBER: 90-0022; PKG. CODE: T2444+4C |
|     67 | PCB                          | -         |     1 | MAX20444                                                                                      | MAXIM                              | PCB             | PCB:MAX20444                                                                                                      |
|     68 | C1, C19, C3                  | DNP       |     0 | N/A                                                                                           | N/A                                | OPEN            | CAPACITOR; SMT (0603); OPEN; FORMFACTOR                                                                           |
|     69 | C7, C8                       | DNP       |     0 | C1210C475K5RAC; GRM32ER71H475KA88; GRM32ER71H475KA88; GCM32ER71H475KA55; CGA6P3X7R1H475K250AB | KEMET;MURATA; MURATA;MURATA;TDK    | 4.7UF           | CAPACITOR; SMT (1210); CERAMIC CHIP; 4.7UF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                        |
|     70 | C15, C30, C32                | DNP       |     0 | C2012X7R1H225K125AC; CGA4J3X7R1H225K125AB; CGA4J3X7R1H225K125AE                               | TDK;TDK;TDK                        | 2.2UF           | CAPACITOR; SMT (0805); CERAMIC CHIP; 2.2UF; 50V; TOL=10%; TG = -55°C TO +125°C; TC = X7R                          |
|     71 | L3                           | DNP       |     0 | XAL5050-103ME                                                                                 | COILCRAFT                          | 10UH            | INDUCTOR; SMT; COMPOSITE CORE; 10UH; TOL = ± 20%; 4.9A                                                            |
|     72 | R1, R33                      | DNP       |     0 | N/A                                                                                           | N/A                                | OPEN            | RESISTOR; 0603; OPEN; FORMFACTOR                                                                                  |
|     73 | R56                          | DNP       |     0 | CRCW12060000ZS; ERJ-8GEY0R00                                                                  | VISHAY DALE; PANASONIC             | 0               | RESISTOR; 1206; 0 Ω ; 0%; JUMPER; 0.25W; THICK FILM                                                               |
|     74 | C29                          | DNP       |     0 | N/A                                                                                           | N/A                                | OPEN            | EVKIT USE ONLY;DUAL PACKAGE OUTLINE 0603 AND 0805 NON-POLAR CAPACITOR                                             |
|     75 | R31                          | DNP       |     0 | N/A                                                                                           | N/A                                | OPEN            | RESISTOR; 1206; OPEN; FORMFACTOR                                                                                  |

## MAX20444B Evaluation Kit

## MAX20444B EV Kit Schematics

<!-- image -->

## MAX20444B EV Kit PCB Layout Diagrams

MAX20444B EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

Evaluates: MAX204B/

│

## MAX20444B EV Kit PCB Layout Diagrams (continued)

MAX20444B EV Kit PCB Layout-Top Layer

<!-- image -->

Evaluates: MAX204B/

│

## MAX20444B EV Kit PCB Layout Diagrams (continued)

MAX20444B EV Kit PCB Layout-Internal Layer 2

<!-- image -->

Evaluates: MAX204B/

│

## MAX20444B EV Kit PCB Layout Diagrams (continued)

MAX20444B EV Kit PCB Layout-Internal Layer 3

<!-- image -->

Evaluates: MAX204B/

│

## MAX20444B EV Kit PCB Layout Diagrams (continued)

MAX20444B EV Kit PCB Layout-Bottom Layer

<!-- image -->

Evaluates: MAX204B/

│

## MAX20444B Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                               | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------|-----------------|
|                 0 | 3/19            | Initial release                           | -               |
|                 1 | 9/21            | Added MAX20444C to title; updated Table 7 | All             |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX204B/