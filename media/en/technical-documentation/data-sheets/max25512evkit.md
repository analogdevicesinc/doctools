<!-- lastmod 2022-08-03 -->
## MAX25512 Evaluation Kit

## General Description

The MAX25512 evaluation kit (EV kit) demonstrates the MAX25512  integrated  4-channel  high-brightness  LED driver with I 2 C interface for automotive displays, and its stand-alone  mode  counterparts,  namely  the  MAX25510 and MAX25511. The EV kit operates from a DC supply voltage between 3V and 36V, and the switching frequency can  be  either  set  at  2.2MHz  or  at  400kHz.  The  EV  kit can be configured to operate in stand-alone mode or in I 2 C  mode. Spread-spectrum mode (SSM) is enabled by default  for  electromagnetic  interference  (EMI)  improvement, but it can be disabled either by acting on a register bit (MAX25512) or by properly choosing the resistor to be connected to the SET pin (MAX25510 and MAX25511).

The  EV  kit  demonstrates  phase-shifted  pulse-widthmodulation (PWM) dimming. Dimming can be performed either externally using a PWM signal applied to the DIM PCB pad or internally by programming the desired dimming  frequency  and  individual  duty  cycle  through  I 2 C (MAX25512  only).  The  hybrid  dimming  feature  can  be enabled through a register bit to reduce EMI (MAX25512 only). The EV kit features a LED current foldback option either  as  a  function  of  the  temperature,  by  means  of  a negative temperature coefficient (NTC) sensor (not pro -vided),  or  through  analog  dimming.  I 2 C-programmable (MAX25512)  or  resistor-programmable  (MAX25510  and MAX25511)  automatic  fading  functionality  is  also  available.

Finally,  the  EV  kit  demonstrates  short-LED,  open-LED, LED short to ground, boost output short to ground/undervoltage and overvoltage, and overtemperature-fault protection. For operation at switching frequencies other than 2.2MHz or 400kHz, the external components should be chosen according to the calculations in the IC data sheet.

The EV kit provides an I 2 C interface that can operate in conjunction with the MINIQUSB+ adapter board or a thirdparty  I 2 C  master.  The  EV  kit  also  includes  Windows®-

## MAX25512 EV Kit Files

| FILE                    | DESCRIPTION           |
|-------------------------|-----------------------|
| MAX25512GUISetupV01.exe | Windows GUI Installer |

Windows is a registered trademark of Microsoft Corporation.

Evaluates: MAX25510,

MAX25511, MAX25512

compatible  software  that  provides  a  simple  graphical user interface (GUI) for exercising the features of the IC (MAX25512 only).

Note: The MAX25512 EV kit schematic and bill of materials (BOM) show only the MAX25512 (MAX25512ATG/V+) as U2, but there are no other differences if the MAX25512 is  replaced  by  the  MAX25510  (MAX25510ATGA/V+)  or MAX25511 (MAX25511ATGA/V+).

## Features

- Demonstrates Robustness of the MAX25510, MAX25511, and MAX25512
- Wide 3V to 36V Input Operating Range (up to 40V Load Dump)
- Powers High-Brightness (HB) LEDs (up to Four Strings) for Medium-to-Large-Sized LCD Displays in Automotive and Display Backlight Applications
- 400kHz to 2.2MHz Resistor-Programmable Switching Frequency with Spread-Spectrum Option
- Phase-Shift Dimming Option
- Demonstrates Cycle-by-Cycle Current Limit and Thermal-Shutdown Features
- Demonstrates Wide Dimming Ratio
- Demonstrates Hybrid Dimming for Better EMI and Acoustic Performance and Higher Dimming Ratio
- Demonstrates Fade In/Out for Smooth Brightness Transition
- Designed to Show Thermal Foldback Function
- I 2 C Programmability (MAX25512 only)
- Dedicated GUI
- Proven PCB and Thermal Design
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX25512 Evaluation Kit

## Quick Start

## Required Equipment

- MAX25512 EV kit
- 3V to 36V, 10A DC power supply
- Two digital voltmeters (DVMs)
- Four series-connected HB LED strings (9 LEDs each) rated to no less than 120mA
- Current probe to measure the HB LED current
- MINIQUSB+ interface board with USB cable (MAX25512 only)
- Windows-compatible PC with a spare USB port (MAX25512 only)

## Procedure

The EV kit is fully assembled and tested. To verify board operation, follow these steps:

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

## I 2 C Mode (MAX25512)

- 1) Visit www.maximintegrated.com to download the latest version of the EV kit software, MAX25512GUI -SetupV01.exe, from the product's landing page.
- 2) Install the EV kit software (GUI) on your PC by run -ning the MAX25512GUISetupV01.exe program. The EV kit software application is then installed together with the required MINIQUSB+ drivers.
- 3) Verify that jumper J21 is closed (2.2MHz switching frequency selected).
- 4) Verify that jumper J1 is closed (DS1 green LED connected).
- 5) Verify that jumpers J28 and J29 have shunts installed across pins 1-2 (SDA and SCL PCB pads connected to SDA and SCL IC pins).
- 6) Verify that jumpers J23 and J27 have shunts installed across pins 1-2 and 2-3, respectively (5V external regulator enabled).
- 7) Verify that jumpers J10 and J20 have shunts installed across pins 1-2 (RSDT and TEMP IC pins both connected to V18).
- 8) Verify that jumper J17 is closed (FAULT signaling through DS2 red LED enabled).
- 9) Verify that a shunt is installed across pins 1-2 on jumper J2 (device enabled).
- 10)  Verify that a shunt is installed across pins 1-3 on jumper JMP1 (100mA current per channel selected).
- 11)  Verify that jumpers JMP3, JMP6, JMP7, and JMP9 have shunts installed across pins 1-2 (bleed resistors connected, all current sinks enabled).
- 12) Connect the MINIQUSB+ interface board's P3 header to the J24 header on the EV kit.
- 13)  Connect the positive terminal of the power supply to the IN PCB pad. Connect the negative terminal of the power supply to a PGND PCB pad.
- 14) Connect a DVM across the OUT1 and GND PCB pads.
- 15)  Connect the four LED strings from BOOST to the OUT1, OUT2, OUT3, and OUT4 PCB pads.
- 16)  Clip the current probe across the channel 1 HB LED+ wire to measure the LED current.
- 17)  Turn on the power supply and set it to 12V. The green LED (DS1) should be on at this point.
- 18)  Launch the EV kit software application.
- 19)  From the EV kit software toolbar, select Device → Scan for Address . The GUI scans the I 2 C bus for available slave addresses on the bus and selects the first one (in this case, the MAX25512 I 2 C address). Press OK once the MAX25512 I 2 C address has been found.
- 20)  Verify that the status bar in the bottom-right corner of the GUI displays EV Kit: Connected , as shown in Figure 1.
- 21)  Check ENA to activate the driver in the 0x02 ISET register group box.
- 22) Measure the voltage from each of the OUT\_ PCB pads to PGND and verify the lowest voltage is approximately 0.7V.
- 23)  Measure the LED current using the current probe and verify all channels.
- 24) For more details on how to use the GUI and all the features available, click on the GUI Help menu item.

## Evaluates: MAX25510, MAX25511, MAX25512

## Stand-Alone Mode (MAX25510 and MAX25511)

- 1) Verify that jumper J21 is closed (2.2MHz switching frequency selected).
- 2) Verify that jumper J1 is closed (DS1 green LED connected).
- 3) Verify that jumpers J28 and J19 have shunts installed across pins 2-3 and 1-2, respectively (SET IC pin connected to V18) and that jumper J29 has a shunt installed across pins 2-3 (ADIM PCB pad connected to ADIM IC pin).

│

## MAX25512 Evaluation Kit

Evaluates: MAX25510,

Figure 1. MAX25512 Evaluation Kit Software (GUI)

<!-- image -->

- 4) Verify that jumpers J23 and J27 have shunts installed across pins 1-2 and 2-3, respectively (5V external regulator enabled).
- 5) Verify that jumper J10 has a shunt installed across pins 2-3 (LED short detection enabled).
- 6) Verify that jumper J20 has a shunt installed across pins 1-2 (TEMP IC pin connected to V18).
- 7) Verify that jumper J17 is closed (FAULT signaling through DS2 red LED enabled).
- 8) Verify that a shunt is installed across pins 1-2 on jumper J2 (device enabled).
- 9) Verify that a shunt is installed across pins 1-3 on jumper JMP1 (100mA current per channel selected).
- 10)  Verify that jumpers JMP3, JMP6, JMP7, and JMP9 have shunts installed across pins 1-2 (bleed resistors connected, all current sinks enabled).
- 11)  Connect the positive terminal of the power supply to the IN PCB pad. Connect the negative terminal of the power supply to a PGND PCB pad.
- 12) Connect a DVM across the OUT1 and GND PCB pads.
- 13)  Connect the four LED strings from BOOST to the OUT1, OUT2, OUT3, and OUT4 PCB pads.
- 14)  Clip the current probe across the channel 1 HB LED+ wire to measure the LED current.
- 15)  Turn on the power supply and set it to 12V. The green LED (DS1) and the LED strings should be on at this point.
- 16) Measure the voltage from each of the OUT\_PCB pads to PGND and verify the lowest voltage is ap -proximately 0.7V.
- 17)  Measure the LED current using the current probe and verify all channels.

## Detailed Description of Hardware

The  MAX25512  EV  kit  demonstrates  the  MAX25510, MAX25511,  and  MAX25512  HB  LED  drivers  with  an integrated  step-up  DC-DC  preregulator  followed  by  four linear current sinks to drive up to four strings of LEDs. The preregulator switches at 2.2MHz (or at 400kHz) and operates as a current-mode-controlled regulator, providing up to 480mA for the linear current sinks, as well as overvolt-

│

## MAX25512 Evaluation Kit

age protection. The cycle-by-cycle current limit is internally fixed at 5.3A (3.8A for the MAX25510), while resistors R4 and R5 set the overvoltage protection voltage to 35V. The preregulator  power  section  consists  of  inductor  L2  and switching diode D1. The EV kit circuit operates from a 3V DC supply voltage up to the HB LED forward string voltage. The circuit handles load dump conditions up to 40V.

The EV kit circuit demonstrates ultra-low shutdown current  when  the  EN  pin  of  the  device  is  pulled  to  ground by shorting the EN PCB pad to ground. Each of the four linear current sinks (OUT1-OUT4) is capable of operating up to 40V, sinking up to 120mA per channel.

Each  of  the  four  channels'  linear  current  sinks  is  configurable  for  120mA,  100mA,  50mA,  or  20mA,  or  can be disabled independently either by acting on the 0x0F DISABLE register  group  box  (MAX25512  only)  or  by

Table 1. SDA and SCL Supply (J26, J28-J31)

| SHUNT POSITION                               | SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   | SDAAND SCL SUPPLY               |
|----------------------------------------------|------------------|------------------|------------------|------------------|---------------------------------|
| J26                                          | J28              | J29              | J30              | J31              |                                 |
| Open*                                        | 1-2*             | 1-2*             | Open*            | Open*            | 3.3V (with MINIQUSB+ connected) |
| Open                                         | 1-2              | 1-2              | Closed           | Closed           | VCC_EXT                         |
| 1-External SDA 2-External SCL 3-External GND | 1-2              | 1-2              | Open             | Open             | Externally provided             |

## Table 2. DS1 Enable (J1)

| SHUNT POSITION   | DS1 POWER LED   |
|------------------|-----------------|
| Closed*          | Connected       |
| Open             | Disconnected    |

*Default position.

## Table 3. Enable (J2)

| SHUNT POSITION   | EN PIN                  | EV KIT OPERATION                         |
|------------------|-------------------------|------------------------------------------|
| 1-2*             | Connected to IN         | Enabled when IN is powered               |
| 2-3              | Connected to EN PCB pad | Enabled/disabled by signal on EN PCB pad |

*Default position.

## Table 4. VCC\_EXT Generation (J23 and J27)

| SHUNT POSITION   | SHUNT POSITION   | VCC_EXT SUPPLY                      |
|------------------|------------------|-------------------------------------|
| J23              | J27              |                                     |
| 1-2*             | 2-3*             | 5V (provided by on-board regulator) |
| 2-3              | 1-2              | Externally provided                 |

*Default position.

Evaluates: MAX25510,

MAX25511, MAX25512

acting on jumpers JMP3, JMP6, JMP7, and JMP9 which are used to disable outputs selectively when the HB LED string is not connected. The EV kit features PCB pads to facilitate  connecting  HB  LED strings for evaluation. The BOOST  PCB  pads  provide  connections  for  connecting each HB LED string's anode to the DC-DC preregulator output.  The  OUT1-OUT4  PCB  pads  provide  connec -tions  for  connecting  each  HB  LED  string's  cathode  to the  respective  current  sink.  Capacitors  C18,  C23,  C24, and C25 are optional and can be included on the design to  prevent  oscillations  and  provide  stability  when  using long,  untwisted  HB  LED  connecting  cables  during  lab evaluation. These capacitors are not required if the connection  between  the  LED  driver  and  the  HB  LEDs  is  a low-inductance connection.

│

## MAX25512 Evaluation Kit

A DIM PCB pad is provided for using a digital PWM signal to control the brightness of the HB LEDs. Test points are also provided for easy access to the device's V18 regulator  output  as  well  as  the  IN,  NGATE  pins  and  the  NTC sensor non-grounded terminal.

## SDA and SCL Voltages (J26, J28-J31)

SDA and SCL voltage supplies (MAX25512 only) can be selected  between  the  VCC\_EXT  voltage  and  the  fixed 3.3V provided by the MINIQUSB+. Alternatively, the user can  force  an  external  voltage  as  digital  reference  (see Table 1).

## Power LED Enable

A  green  LED  (DS1)  is  used  to  indicate  that  the  EV  kit is  powered  on.  The  LED  can  be  disconnected  from the  power  supply,  allowing  precise  current-consumption evaluation. See Table 2 for shunt positions.

## Enable (EN)

The EV kit features an enable input that can be used to enable/disable the device and place it in shutdown mode. To  enable  the  EV  kit  whenever  power  is  applied  to  IN, place the jumper across pins 1-2 on jumper J2. To enable the EV kit using an external enable signal, place the jumper across pins 2-3 on J2 and apply a logic signal on the EN PCB input pad on the EV kit. A 1MΩ pulldown resistor on the EV kit pulls the EN input to ground in the event that J2 is left open or the EN signal is high impedance. Refer to the Enable section in the MAX25512 IC data sheet for additional information. See Table 3 for J2 jumper settings.

## Logic Supply (VCC\_EXT)

VCC\_EXT  voltage  must  be  provided  to  ensure  proper operation of device's DIM and FLTB pins (SDA and SCL pins can also be optionally pulled up to the same voltage). If  enabled  through  J23  and  J27  jumpers,  an  on-board linear regulator generates a fixed 5V to pullup the abovementioned pins. Alternatively, an external logic supply can be used. See Table 4 for J23 and J27 jumper settings.

## Table 5. Switching Frequency (J21)

| SHUNT POSITION   | RT PIN                                                | EV KIT OPERATION           |
|------------------|-------------------------------------------------------|----------------------------|
| J21              |                                                       |                            |
| Closed*          | RT connected to GND through 64.9kΩ // 14.3kΩ resistor | 2.2MHz switching frequency |
| Open             | RT connected to GND through 64.9kΩ resistor           | 400kHz switching frequency |

*Default position.

## Switching Frequency

Jumper J21 is used to set the switching frequency of the MAX25512  to  either  2.2MHz  or  400kHz.  When  J21  is closed, the switching frequency is set to 2.2MHz. When J21 is open, the switching frequency is nominally 400kHz.

The EV kit is optimized for 2.2MHz switching operation by default. When selecting a switching frequency of 400kHz, L2  should  be  changed  to  22µH  to  maintain  acceptable efficiency.  Other  component  value  adjustments  may  be needed.

The  spread-spectrum  feature  can  be  enabled/disabled by checking/unchecking SS\_OFF in  the 0x0E SETTING register  group  box  (MAX25512  only)  or  by  connecting a resistor of proper value between the IC's SET pin and  ground  (MAX25510  and  MAX25511  only-see  the SET  Pin  Operation section  for  details).  It  is  also  possible to select the amount of spread by checking (±4%)/ unchecking (±6%) SSL in the above register group box (MAX25512 only).

Note: To change the amount of spread, spread-spectrum must  first  be  disabled  by  checking SS\_OFF .  After  the amount  of  spread  has  been  selected,  spread-spectrum can be reenabled by unchecking SS\_OFF .

Refer to the Oscillator Frequency/External Synchronization and Spread-Spectrum sections  in  the  MAX25512  and MAX25510/MAX25511 IC data sheets for more information. See Table 5 for J21 jumper settings.

## HB LED Current

The EV kit features jumper JMP1 to configure the device's current sinks on all four channels. Place a shunt on JMP1 to configure the current-sink limits according to Table 6.

To reconfigure the circuit for another current-sink threshold, replace resistor R28, leave JMP1 open, and use the following equation to calculate a new value for the desired current:

I LED = 1500 / R28

│

## MAX25512 Evaluation Kit

## Table 6. LED Current (JMP1)

| SHUNT POSITION   | ISET RESISTOR SETTING   | LED CURRENT SINK SETTING   |
|------------------|-------------------------|----------------------------|
| 1-3*             | 75kΩ // 18.7kΩ          | 100mA                      |
| 1-2              | 75kΩ // 15kΩ            | 120mA                      |
| 1-4              | 75kΩm // 49.9kΩ         | 50mA                       |
| Open             | 75kΩ                    | 20mA                       |

## Table 7. Selecting OUT\_ Channels Operating State (JMP3, JMP6, JMP7, and JMP9)

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

where I LED  is  the  desired  HB  LED current per string in amperes (A) and R28 is the new resistor value in ohms (Ω), for obtaining the desired HB LED current. If the HB LED  current  is  reconfigured  to  a  different  value,  other components  on  the  EV  kit  may  need  to  be  modified. Refer to the MAX25512 IC data sheet to calculate other component values.

## Channel 1-Channel 4 Current-Sink Disabling

The  EV  kit  features  jumpers  JMP3,  JMP6,  JMP7,  and JMP9, which are used to put each OUT\_ current sink in one of three operating states:

- Normal operation, i.e., OUT\_ is connected to the corresponding ring on the board edge and LEDs are

connected from there to the preregulator output VOUT

- OUT\_ connected through a 10kΩ resistor to GND and thus disabled
- OUT\_ shorted to GND, used to test fault detection

To  disable  a  channel,  install  a  jumper  in  the  channel's respective jumper across pins 1-3, connecting the OUT\_ to ground through a 10kΩ resistor. See Table 7 for jumper settings. The 100kΩ bleed resistors are installed to pre -vent  the  OUT\_  leakage  current  from  dimly  turning  on large LED strings even when the DIM signal is low. Note that  each channel can be alternatively disabled through I 2 C  by  acting  on 0x0F  DISABLE register  group  box (MAX25512 only).

│

Evaluates: MAX25510,

MAX25511, MAX25512

## MAX25512 Evaluation Kit

## HB LED Digital Dimming Control

The EV kit features a DIM PCB input pad for connecting an  external  digital  PWM  signal.  LED  current  can  also be  linearly  varied  between  100%  and  0%  by  acting  on the  ADIM  slider  bar  (MAX25512  only)  or  applying  an external digital ADIM signal to the ADIM PCB input pad (MAX25510 and MAX25511 only).

Apply a digital PWM signal with a 0.4V logic-low level (or less) and 1.6V logic-high level (or greater). The DIM signal frequency should be at least 10kHz. To adjust the HB LED brightness either through PWM dimming or through analog  dimming,  vary  the  signal  duty  cycle  from  0%  to 100%  and  maintain  a  minimum  pulse  width  of  300ns. Apply the digital PWM and ADIM signals to the DIM and ADIM PCB pads, respectively.

Note: Jumper  J29  must  be  used  to  connect  the  ADIM PCB pad to the ADIM pin of the IC when MAX25510 or MAX25511 are used. See Table 9 for jumper settings.

PWM dimming can also be performed by programming the desired dimming level through I 2 C (MAX25512 only). External dimming is enabled by default at each device's power  up.  To  disable  it,  first  uncheck DIM\_EXT in  the 0x03 IMODE register  group  box,  then  select  one of the available dimming frequencies in the FPWM section contained in the 0x0E SETTING register group box. Individual channel brightness levels can finally be selected by acting on the TON1-TON4 slider bars.

Note: To ensure that correct brightness levels are selected in internal dimming mode, each TON\_ slider bar must be zeroed at each device's power up.

For additional information on the device's digital dimming feature,  refer  to  the Dimming section  in  the  MAX25512 and MAX25510/MAX25511 IC data sheets.

## Table 8. ADIM Connection (J29)

| SHUNT POSITION   | ADIM PCB PAD                                     |
|------------------|--------------------------------------------------|
| 1-2*             | Not connected to the IC (MAX25512 only)          |
| 2-3              | Connected to the IC (MAX25510 and MAX25511 only) |

*Default position.

## Table 9. TEMP Pin Connection (J20)

| SHUNT POSITION   | TEMP PIN                                   | EV KIT OPERATION              |
|------------------|--------------------------------------------|-------------------------------|
| 1-2*             | TEMP connected to NTC through 2kΩ resistor | Temperature foldback disabled |
| 2-3              | TEMP connected to V18                      | Temperature foldback enabled  |

*Default position.

## Hybrid Dimming Operation

The Hybrid dimming feature can be used both with external  and  internal  dimming  (MAX25512  only). The  device determines whether the LED current is to be dimmed by reducing the LED current or by chopping the LED current (depending  on  the  hybrid  dimming  threshold  set  in  the HDIM\_THR section contained in the 0x03 IMODE register group box). To enable the hybrid dimming feature, check HDIM in the 0x03 IMODE register group box.

For  additional  information  on  the  device's  hybrid  dimming feature, refer to the Hybrid Dimming section in the MAX25512 IC data sheet.

## Phase-Shift Operation

The EV kit demonstrates the phase-shifting feature of the IC. When MAX25512 is used on the EV kit, phase shift is enabled by default at each device's power up. To disable the phase-shifting feature, uncheck PSEN in the 0x02 ISET register  group  box.  This  operation  must  always  be  performed before enabling any LED string.

When the MAX25510 or MAX25511 are used on the EV kit,  phase  shift  can  be  enabled/disabled  by  connecting a resistor of proper value between the ICs SET pin and ground (see the SET Pin Operation section for details).

When phase shifting is enabled, each current sink's turn-on is separated by 360°/n, where n is the number of enabled strings.  When  phase  shifting  is  disabled,  the  dimming  of each string is controlled by the DIM input (or by the FPWM and TON\_ settings  if  internal  dimming  is  enabled  when using the MAX25512), and all current sinks turn on and off at the same time.

## LED Current Foldback Option

The EV kit demonstrates the temperature foldback feature of  the  IC. A  shunt  on  jumper  J20  allows  to  connect  the

│

## MAX25512 Evaluation Kit

device's TEMP pin to an NTC sensor (NTCLE100E3103G or a similar NTC device) through R46 resistor according to Table 9 . The selected NTC sensor can be installed on the EV kit using the J22 pins.

When the NTC senses a temperature higher than a limit value  (set  by  R47),  the  LED  current  is  linearly  reduced with  increasing  temperature  down  to  20%  of  its  initial value. Temperature values which would result in a LED current lower than 20% of its initial value causes the complete turning off of the current sinks.

For  additional  information  on  the  device's  temperature foldback  operation,  refer  to  the Temperature  Foldback section in the MAX25512 IC data sheet.

## Fault-Indicator Output ( FLT )

The EV kit features the device's open-drain FLT output. The FLT signal is pulled up to VCC\_EXT by resistor R48. FLT goes low when an open-LED or shorted-LED string is  detected,  during  thermal  warning/shutdown  or  during boost  undervoltage/overvoltage  events.  Keep  jumper J17 closed to allow DS2 red LED enabling in case FLT goes  low.  Refer  to  the Fault  Protection section  in  the MAX25512 IC data sheet for additional information on the FLT signal.

## Shorted-LED Detection and Protection

The short-LED threshold  can  be  set  through  I 2 C  in  the SLDET section contained in the 0x0E SETTING register group box (MAX25512 only). A shorted LED is detected when the following condition is satisfied:

<!-- formula-not-decoded -->

Alternatively, the short-LED threshold can be programmed through the RSDT input (all IC versions). R18 and R19 form a  resistor-divider  from  V18  to  RSDT  to  GND.  A  shorted LED is detected when the following condition is satisfied:

<!-- formula-not-decoded -->

When the  short-LED  threshold  is  reached,  the  affected current sink is disabled to reduce excess power dissipation  and  the FLT indicator  asserts  low.  The  short-LED detection  feature  is  regulated  through  jumper  J10.  See Table 10 for jumper settings.

## Table 10. Short-LED Detection (J10)

| SHUNT POSITION   | RSDT PIN                              | EV KIT OPERATION                                            |
|------------------|---------------------------------------|-------------------------------------------------------------|
| 1-2*             | Connected to V18                      | Short-LED detection regulated through I 2 C (MAX25512 only) |
| 2-3              | Connected to R18/R19 resistor-divider | Short-LED detection regulated through resistor-divider      |

*Default position.

## Overvoltage Detection and Protection

The  resistors  (R4  and  R5)  connected  to  BSTMON  are configured  for  a  VOUT\_OVP  of  35V  which  then  equals the  maximum  converter  output  (VOUT)  voltage.  During an open-LED string condition, the converter output ramps up to the output overvoltage threshold. Capacitor C3 can be  added  to  provide  noise  filtering  to  the  overvoltage signal.  To  reconfigure  the  circuit  for  a  different  voltage, replace resistor R4 with a different value using the following equation:

<!-- formula-not-decoded -->

where R5 is 10kΩ, VOUT\_OVP is the overvoltage-protec -tion threshold desired, and R4 is the new resistor value for obtaining the desired overvoltage protection. Refer to the Open-LED Management and Overvoltage Protection section  in  the  MAX25512  IC  data  sheet  for  additional information.

## Fading Function

The  fading  option  feature  can  be  enabled  for  all  dimming  conditions  (external  or  internal,  with  or  without hybrid dimming) by checking FADE\_IN\_OUT in the 0x10 FADING register group box (MAX25512 only). With fading enabled, any dimming duty-cycle change is applied incrementally, following an exponential increase/decrease with a gain of 6.25% (or 12.5% if FADE\_GAIN is checked) per dimming cycle sequence.

Depending on the value set in the TDIM section, the user is  also  able  to  set  a  delay  after  which  each  duty-cycle update is carried out. The fading duty-cycle update occurs every 2 TDIM  dimming cycles, where 2 TDIM  can be equal to one of the following values: 1, 2, 4, 8, 16, or 32.

When MAX25510 or MAX25511 are used on the EV kit, the fading option can be enabled by connecting a resistor of proper value between the ICs SET pin and ground (see  the SET Pin  Operation section  for  details).  In  this case, fading gain and duty cycle updating rate are fixed to 6.25% and 1, respectively.

Refer to the Automatic Fade-In/Fade-Out During Dimming section in the MAX25512 and MAX25510/MAX25511 IC data sheets for additional information.

## MAX25512 Evaluation Kit

## SET Pin Operation

When the MAX25510 or MAX25511 are used on the EV kit,  the  following  functions  can  be  enabled/disabled  by connecting the SET pin of the IC either to ground through

Evaluates: MAX25510,

MAX25511, MAX25512

a specific resistor or directly to ground/V18: phase-shifting, spread-spectrum, slow/fast start-up, and auto fade-in/ out. Table 11 shows the jumper settings required to obtain the different function combinations.

## Table 11. SET Pin Connection (J28, J3-J9, J11-J16, J18, and J19)

| SET PIN                               | SET RESISTOR VALUE ( Ω )   | JUMPER   | SHUNT POSITION   | PHASE- SHIFTING   | START-UP   | SPREAD- SPECTRUM   | AUTO FADE- IN/OUT   |
|---------------------------------------|----------------------------|----------|------------------|-------------------|------------|--------------------|---------------------|
| J28 Shunted in 2-3 Position, J19 Open | 357                        | J18      | Closed           | ON                | FAST       | ON                 | OFF                 |
| J28 Shunted in 2-3 Position, J19 Open | 590                        | J16      | Closed           | ON                | FAST       | OFF                | ON                  |
| J28 Shunted in 2-3 Position, J19 Open | 825                        | J15      | Closed           | ON                | FAST       | OFF                | OFF                 |
| J28 Shunted in 2-3 Position, J19 Open | 1.13k                      | J14      | Closed           | ON                | SLOW       | ON                 | ON                  |
| J28 Shunted in 2-3 Position, J19 Open | 1.5k                       | J13      | Closed           | ON                | SLOW       | ON                 | OFF                 |
| J28 Shunted in 2-3 Position, J19 Open | 2k                         | J12      | Closed           | ON                | SLOW       | OFF                | ON                  |
| J28 Shunted in 2-3 Position, J19 Open | 2.67k                      | J11      | Closed           | ON                | SLOW       | OFF                | OFF                 |
| J28 Shunted in 2-3 Position, J19 Open | 5.9k                       | J9       | Closed           | OFF               | FAST       | ON                 | ON                  |
| J28 Shunted in 2-3 Position, J19 Open | 14.3k                      | J8       | Closed           | OFF               | FAST       | ON                 | OFF                 |
| J28 Shunted in 2-3 Position, J19 Open | 23.2k                      | J7       | Closed           | OFF               | FAST       | OFF                | ON                  |
| J28 Shunted in 2-3 Position, J19 Open | 33.2k                      | J6       | Closed           | OFF               | FAST       | OFF                | OFF                 |
| J28 Shunted in 2-3 Position, J19 Open | 45.3k                      | J5       | Closed           | OFF               | SLOW       | ON                 | ON                  |
| J28 Shunted in 2-3 Position, J19 Open | 60.4k                      | J4       | Closed           | OFF               | SLOW       | ON                 | OFF                 |
| J28 Shunted in 2-3 Position, J19 Open | 80.6k                      | J3       | Closed           | OFF               | SLOW       | OFF                | ON                  |
| J28 Shunted in 2-3 Position           | SET pin connected to GND   | J19      | 2-3              | ON                | FAST       | ON                 | ON                  |
| J28 Shunted in 2-3 Position*          | SET pin connected to V18   | J19      | 1-2              | OFF               | SLOW       | OFF                | OFF                 |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX25512EVKIT# | EVKIT  |

# Denotes RoHS compliance.

│

## MAX25512 Evaluation Kit

## MAX25512 EV Kit Bill of Materials

|   ITEM | REF_DES                                                                                                                | DNI/DNP   |   QTY | MFG PART #                                                                                        | MANUFACTURER                         | VALUE                | DESCRIPTION                                                                                                                  | COMMENTS   |
|--------|------------------------------------------------------------------------------------------------------------------------|-----------|-------|---------------------------------------------------------------------------------------------------|--------------------------------------|----------------------|------------------------------------------------------------------------------------------------------------------------------|------------|
|      1 | ADIM, BOOST, BOOST1, DIM, EN, EXT_LOGIC, FLT, GND, GND1-GND3, IN, OUT1-OUT4, PGND, PGND1, PGND2, SCL, SDA, SYNC, VTEMP |           |    23 | 9020 BUSS                                                                                         | WEICO WIRE                           | MAXIMPAD             | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                     |            |
|      2 | C2, C6, C16, C21                                                                                                       |           |     4 | UMK107BJ105KA; C1608X5R1H105K080AB; CL10A105KB8NNN; GRM188R61H105KAAL                             | TAIYO YUDEN;TDK;SAMSUNG; MURATA      | 1UF                  | CAP; SMT (0603); 1UF; 10%; 50V; X5R; CERAMIC                                                                                 |            |
|      3 | C4                                                                                                                     |           |     1 | C1608X7S2A104K080AB                                                                               | TDK                                  | 0.1UF                | CAP; SMT (0603); 0.1UF; 10%; 100V; X7S; CERAMIC                                                                              |            |
|      4 | C5, C26                                                                                                                |           |     2 | C1210C475K5RAC; GRM32ER71H475KA88; CNC6P1X7R1H475K250AE                                           | KEMET;MURATA;TDK                     | 4.7UF                | CAP; SMT (1210); 4.7UF; 10%; 50V; X7R; CERAMIC                                                                               |            |
|      5 | C9, C10                                                                                                                |           |     2 | EEE-TG1H470UP                                                                                     | PANASONIC                            | 47UF                 | CAP; SMT (CASE_F); 47UF; 20%; 50V; ALUMINUM-ELECTROLYTIC                                                                     |            |
|      6 | C11                                                                                                                    |           |     1 | GCM188R71H332KA37                                                                                 | MURATA                               | 3300PF               | CAP; SMT (0603); 3300PF; 10%; 50V; X7R; CERAMIC                                                                              |            |
|      7 | C14                                                                                                                    |           |     1 | C0603C105K4RAC; C1608X7R1C105K080AC; EMK107B7105KA; CGA3E1X7R1C105K080AC; 0603YC105KAT2A          | KEMET;MURATA;TDK;TAIYO YUDEN;TDK;AVX | 1UF                  | CAP; SMT (0603); 1UF; 10%; 16V; X7R; CERAMIC                                                                                 |            |
|      8 | C17                                                                                                                    |           |     1 | GRM32ER71H106KA12; CL32B106KBJNNN; UMJ325KB7106KMH; 12105C106K4Z2A                                | MURATA;SAMSUNG ELECTRONICS;TAIYO YU  | 10UF                 | CAP; SMT (1210); 10UF; 10%; 50V; X7R; CERAMIC                                                                                |            |
|      9 | C19                                                                                                                    |           |     1 | CGA2B3X7R1H104K050BB; GCM155R71H104KE02; CGA2B3X7R1H104K050BE                                     | TDK;MURATA;TDK                       | 0.1UF                | CAP; SMT (0402); 0.1UF; 10%; 50V; X7R; CERAMIC                                                                               |            |
|     10 | C20                                                                                                                    |           |     1 | GRM188R71C333KA01                                                                                 | MURATA                               | 0.033UF              | CAP; SMT (0603); 0.033UF; 10%; 16V; X7R; CERAMIC                                                                             |            |
|     11 | C22                                                                                                                    |           |     1 | GRM1885C1H102JA01; C1608C0G1H102J080AA; GCM1885C1H102JA16                                         | MURATA;TDK;MURATA                    | 1000PF               | CAP; SMT (0603); 1000PF; 5%; 50V; C0G; CERAMIC                                                                               |            |
|     12 | C27                                                                                                                    |           |     1 | TMK212AB7475K; CGJ4J1X7R1E475K125AC; C2012X7R1E475K125AB; CGA4J1X7R1E475K125AC; GRM21BZ71E475KE15 | TAIYO YUDEN;TDK;TDK; TDK;MURATA      | 4.7UF                | CAP; SMT (0805); 4.7UF; 10%; 25V; X7R; CERAMIC                                                                               |            |
|     13 | C28                                                                                                                    |           |     1 | C0603H101J5GAC                                                                                    | KEMET                                | 100PF                | CAP; SMT (0603); 100PF; 5%; 50V; C0G; CERAMIC                                                                                |            |
|     14 | C31                                                                                                                    |           |     1 | C0603C100K1GAC                                                                                    | KEMET                                | 10PF                 | CAP; SMT (0603); 10PF; 10%; 100V; C0G; CERAMIC                                                                               |            |
|     15 | C33                                                                                                                    |           |     1 | GRM033C71C104KE14                                                                                 | MURATA                               | 0.1UF                | CAP; SMT (0201); 0.1UF; 10%; 16V; X7S; CERAMIC                                                                               |            |
|     16 | C34, C38, C40                                                                                                          |           |     3 | GCJ188R71H104KA12; GCM188R71H104K; CGA3E2X7R1H104K080AA; CGA3E2X7R1H104K080AD; CL10B104KB8WPN     | MURATA;MURATA;TDK; TDK;SAMSUNG       | 0.1UF                | CAP; SMT (0603); 0.1UF; 10%; 50V; X7R; CERAMIC                                                                               |            |
|     17 | C226                                                                                                                   |           |     1 | C2012X7R1H225K125AC                                                                               | TDK                                  | 2.2UF                | CAP; SMT (0805); 2.2UF; 10%; 50V; X7R; CERAMIC                                                                               |            |
|     18 | D1                                                                                                                     |           |     1 | B540CQ-13-F                                                                                       | DIODES INCORPORATED                  | B540CQ-13-F          | DIODE; SCH; SMC; PIV=40V; IF=5A                                                                                              |            |
|     19 | D3                                                                                                                     |           |     1 | CMPD914E                                                                                          | CENTRAL SEMICONDUCTOR                | CMPD914E             | DIODE; SWT; SMT (SOT23-3); PIV=150V; IF=0.1A                                                                                 |            |
|     20 | D4                                                                                                                     |           |     1 | B160B-13-F                                                                                        | DIODES INCORPORATED                  | B160B-13-F           | DIODE; SCH; SMB (DO-214AA); PIV=60V; IF=1A                                                                                   |            |
|     21 | DS1                                                                                                                    |           |     1 | LGL29K-F2J1-24-Z                                                                                  | OSRAM                                | LGL29K-F2J1-24-Z     | DIODE; LED; SMARTLED; GREEN; SMT; PIV=1.7V; IF=0.02A                                                                         |            |
|     22 | DS2                                                                                                                    |           |     1 | LS L29K-G1J2-1-Z                                                                                  | OSRAM                                | LS L29K-G1J2-1-Z     | DIODE; LED; SMART; RED; SMT (0603); PIV=1.8V; IF=0.02A; -40 DEGC TO +100 DEGC                                                |            |
|     23 | INPUT, NGATE, NTC, TP1, TP2, V18                                                                                       |           |     6 | 5011 N/A                                                                                          |                                      |                      | 5011 TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
|     24 | J1, J3-J9, J11-J18, J21, J22, J30, J31                                                                                 |           |    20 | PBC02SAAN                                                                                         | SULLINS ELECTRONICS CORP.            | PBC02SAAN            | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                    |            |
|     25 | J2, J10, J19, J20, J23, J26-J29                                                                                        |           |     9 | PEC03SAAN                                                                                         | SULLINS                              | PEC03SAAN            | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                    |            |
|     26 | J24                                                                                                                    |           |     1 | 803-87-020-20-001101                                                                              | PRECI-DIP SA                         | 803-87-020-20-001101 | EVKIT PART-CONNECTOR; FEMALE; TH; DOUBLE ROW; 2.54MM; RIGHT ANGLE SOLDER TAIL; MATING PIN DIA 0.76MM; RIGHT ANGLE; 20PINS;   |            |

## MAX25512 Evaluation Kit

## MAX25512 EV Kit Bill of Materials (continued)

|   ITEM | REF_DES                                         | DNI/DNP   |   QTY | MFG PART #                                                                         | MANUFACTURER                       | VALUE              | DESCRIPTION                                                                        | COMMENTS   |
|--------|-------------------------------------------------|-----------|-------|------------------------------------------------------------------------------------|------------------------------------|--------------------|------------------------------------------------------------------------------------|------------|
|     27 | J25                                             | -         |     1 | HTSW-112-11-G-S-RA                                                                 | SAMTEC                             | HTSW-112-11-G-S-RA | CONNECTOR; MALE; THROUGH HOLE; SQUARE POST HEADER; RIGHT ANGLE; 12PINS ;           |            |
|     28 | JMP1, JMP3, JMP6, JMP7, JMP9                    | -         |     5 | PEC04SAAN                                                                          | SULLINS ELECTRONICS CORP.          | PEC04SAAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                          |            |
|     29 | L1                                              | -         |     1 | XAL4020-601ME                                                                      | COILCRAFT                          | 0.60UH             | INDUCTOR; SMT; CORE MATERIAL= COMPOSITE; 0.60UH; TOL=+/-20%; 11.7A                 |            |
|     30 | L2                                              | -         |     1 | MSS1278T-472ML                                                                     | COILCRAFT                          | 4.7UH              | INDUCTOR; SMT; FERRITE BOBBIN CORE; 4.7UH; TOL=+/-0.2; 6.2A; -40 DEGC TO +125 DEGC |            |
|     31 | Q1                                              | -         |     1 | NVMFS5C677NLT1G                                                                    | ON SEMICONDUCTOR                   | NVMFS5C677NLT1G    | TRAN; NCH; POWER MOSFET; SO-8FL; PD-(3.5W); I-(36A); V-(60V)                       |            |
|     32 | Q2                                              | -         |     1 | SI1317DL-T1-GE3                                                                    | VISHAY SILICONIX                   | SI1317DL-T1-GE3    | TRAN; P-CHANNEL 20V (D-S) MOSFET; PCH; SOT-323; PD-(0.5W); I-(-1.4A); V-(-20V)     |            |
|     33 | Q3                                              | -         |     1 | MMBT3904LT3G                                                                       | ON SEMICONDUCTOR                   | MMBT3904           | TRANSISTOR, NPN, SOT-23, PD=0.225W, IC=0.2A, VCEO=40V                              |            |
|     34 | R2                                              | -         |     1 | CRCW06033K00FK                                                                     | VISHAY DALE                        | 3K                 | RES; SMT (0603); 3K; 1%; +/-100PPM/DEGC; 0.1000W                                   |            |
|     35 | R3                                              | -         |     1 | CRCW08050000ZS; RC2012J000                                                         | DIGI-KEY                           |                    | 0 RES; SMT (0805); 0; JUMPER; JUMPER; 0.1250W                                      |            |
|     36 | R4                                              | -         |     1 | RG2012N-364-W                                                                      | SUSUMU CO LTD                      | 360K               | RES; SMT (0805); 360K; 0.05%; +/-10PPM/DEGC; 0.1250W                               |            |
|     37 | R5                                              | -         |     1 | TNPW080510K0BE; ERA-6YEB103V                                                       | VISHAY DALE;PANASONIC              | 10K                | RES; SMT (0805); 10K; 0.10%; +/-25PPM/DEGK; 0.1250W                                |            |
|     38 | R6                                              | -         |     1 | 301-10K-RC                                                                         | XICON                              | 10K                | RES; SMT (0603); 10K; 5%; +/-200PPM/DEGC; 0.0630W                                  |            |
|     39 | R7                                              | -         |     1 | CRCW060360K4FK                                                                     | VISHAY DALE                        | 60.4K              | RES; SMT (0603); 60.4K; 1%; +/-100PPM/DEGC; 0.1000W                                |            |
|     40 | R9                                              | -         |     1 | CRCW06031M00FK; MCR03EZPFX1004                                                     | VISHAY DALE;ROHM                   | 1M                 | RES; SMT (0603); 1M; 1%; +/-100PPM/DEGC; 0.1000W                                   |            |
|     41 | R10                                             | -         |     1 | CRCW060345K3FK; ERJ-3EKF4532                                                       | VISHAY DALE;PANASONIC              | 45.3K              | RES; SMT (0603); 45.3K; 1%; +/-100PPM/DEGC; 0.1000W                                |            |
|     42 | R11                                             | -         |     1 | LRC-LRZ2010LF-R000                                                                 | TT ELECTRONICS                     |                    | 0 RES; SMT (2010); 0; JUMPER; CURRENT SENSE                                        |            |
|     43 | R12                                             | -         |     1 | CRCW060333K2FK                                                                     | VISHAY DALE                        | 33.2K              | RES; SMT (0603); 33.2K; 1%; +/-100PPM/DEGC; 0.1000W                                |            |
|     44 | R13                                             | -         |     1 | ERJ-3EKF2322                                                                       | PANASONIC                          | 23.2K              | RES; SMT (0603); 23.2K; 1%; +/-100PPM/DEGC; 0.1000W                                |            |
|     45 | R14, R51                                        | -         |     2 | ERJ-3EKF1432                                                                       | PANASONIC                          | 14.3K              | RES; SMT (0603); 14.3K; 1%; +/-100PPM/DEGC; 0.1000W                                |            |
|     46 | R15                                             | -         |     1 | CRCW06035K90FK; ERJ-3EKF5901                                                       | VISHAY DALE;PANASONIC              | 5.9K               | RES; SMT (0603); 5.9K; 1%; +/-100PPM/DEGC; 0.1000W                                 |            |
|     47 | R16                                             | -         |     1 | CRCW06032K67FK                                                                     | VISHAY DALE                        | 2.67K              | RES; SMT (0603); 2.67K; 1%; +/-100PPM/DEGC; 0.1000W                                |            |
|     48 | R17, R46                                        | -         |     2 | RNCP0603FTD2K00                                                                    | STACKPOLE ELECTRONICS INC.         | 2K                 | RES; SMT (0603); 2K; 1%; +/-100PPM/DEGC; 0.1250W                                   |            |
|     49 | R18                                             | -         |     1 | ERJ-3EKF1692; RC0603FR-0716K9                                                      | PANASONIC;YAGEO PHYCOMP            | 16.9K              | RES; SMT (0603); 16.9K; 1%; +/-100PPM/DEGC; 0.1000W                                |            |
|     50 | R19, R27, R29, R36, R38, R41, R45, R48          | -         |     8 | CHPHT0603K1002FGT                                                                  | VISHAY SFERNICE                    | 10K                | RES; SMT (0603); 10K; 1%; +/-100PPM/DEGC; 0.0125W                                  |            |
|     51 | R20, R62, R63                                   | -         |     3 | TNPW06031K50BE; ERA-3YEB152V                                                       | VISHAY DALE;PANASONIC              | 1.5K               | RES; SMT (0603); 1.5K; 0.10%; +/-25PPM/DEGK; 0.1000W                               |            |
|     52 | R21                                             | -         |     1 | RK73H1JTTD1131F                                                                    | KOA SPEER ELECTRONICS INC          | 1.13K              | RES; SMT (0603); 1.13K; 1%; +/-100PPM/DEGC; 0.1000W                                |            |
|     53 | R22                                             | -         |     1 | CRCW0603825RFK                                                                     | VISHAY DALE                        |                    | 825 RES; SMT (0603); 825; 1%; +/-100PPM/DEGC; 0.1000W                              |            |
|     54 | R23, R34, R37, R43                              | -         |     4 | CRCW0603100KFK; RC0603FR-07100KL; RC0603FR-13100KL; ERJ-3EKF1003; AC0603FR-07100KL | VISHAY DALE;YAGEO; YAGEO;PANASONIC | 100K               | RES; SMT (0603); 100K; 1%; +/-100PPM/DEGC; 0.1000W                                 |            |
|     55 | R24                                             | -         |     1 | CRCW0603590RFK; ERJ-3EKF5900                                                       | VISHAY DALE;PANASONIC              |                    | 590 RES; SMT (0603); 590; 1%; +/-100PPM/DEGC; 0.1000W                              |            |
|     56 | R25                                             | -         |     1 | TNPW0603357RBE                                                                     | VISHAY DALE                        |                    | 357 RES; SMT (0603); 357; 0.10%; +/-100PPM/DEGC; 0.1000W                           |            |
|     57 | R26                                             | -         |     1 | CRCW060310R0FK; MCR03EZPFX10R0; ERJ-3EKF10R0                                       | VISHAY DALE;ROHM                   |                    | 10 RES; SMT (0603); 10; 1%; +/-100PPM/DEGC; 0.1000W                                |            |
|     58 | R28                                             | -         |     1 | TNPW060375K0BE; 2312-201-77503                                                     | VISHAY DALE;VISHAY DALE            | 75K                | RES; SMT (0603); 75K; 0.10%; +/-100PPM/DEGC; 0.1000W                               |            |
|     59 | R30                                             | -         |     1 | CRCW060315K0FK                                                                     | VISHAY DALE                        | 15K                | RES; SMT (0603); 15K; 1%; +/-100PPM/DEGC; 0.1000W                                  |            |
|     60 | R31, R42, R44, R54, R57, R60, R61, R66-R69, R76 | -         |    12 | CRCW06030000Z0                                                                     | VISHAY DALE                        |                    | 0 RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                                      |            |
|     61 | R32                                             | -         |     1 | ERJ-3EKF1872; CRCW060318K7FK                                                       | PANASONIC;VISHAY                   | 18.7K              | RES; SMT (0603); 18.7K; 1%; +/-100PPM/DEGC; 0.1000W                                |            |

## MAX25512 EV Kit Bill of Materials (continued)

|   ITEM | REF_DES                    | DNI/DNP   |   QTY | MFG PART #                                                  | MANUFACTURER                   | VALUE           | DESCRIPTION                                                                                                                                                                                           | COMMENTS   |
|--------|----------------------------|-----------|-------|-------------------------------------------------------------|--------------------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
|     62 | R33                        | -         |     1 | WFMB2010R0500F                                              | VISHAY                         | 0.05            | RES; SMT (2010); 0.05; 1%; +/-50PPM/DEGC; 2W                                                                                                                                                          |            |
|     63 | R35                        | -         |     1 | CRCW12060000ZS; ERJ-8GEY0R00                                | VISHAY DALE;PANASONIC          |                 | 0 RES; SMT (1206); 0; JUMPER; JUMPER; 0.2500W                                                                                                                                                         |            |
|     64 | R39                        | -         |     1 | CRCW060380K6FK; ERJ-3EKF8062; RC0603FR-0780K6L              | VISHAY;PANASONIC;YAGEO         | 80.6K           | RES; SMT (0603); 80.6K; 1%; +/-100PPM/DEGK; 0.1000W                                                                                                                                                   |            |
|     65 | R40                        | -         |     1 | CRCW060349K9FK; ERJ-3EKF4992                                | VISHAY DALE;PANASONIC          | 49.9K           | RES; SMT (0603); 49.9K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                   |            |
|     66 | R47                        | -         |     1 | ERJ-3EKF1402; CRCW060314K0FK                                | PANASONIC;VISHAY               | 14K             | RES; SMT (0603); 14K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                     |            |
|     67 | R49                        | -         |     1 | ERA-3ARB102                                                 | PANASONIC                      | 1K              | RES; SMT (0603); 1K; 0.10%; +/-10PPM/DEGC; 0.1000W                                                                                                                                                    |            |
|     68 | R52                        | -         |     1 | ERJ-3EKF6492                                                | PANASONIC                      | 64.9K           | RES; SMT (0603); 64.9K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                   |            |
|     69 | R53                        | -         |     1 | ERA-3AEB104; AT0603BRD07100KL                               | PANASONIC;YAGEO                | 100K            | RES; SMT (0603); 100K; 0.10%; +/-25PPM/DEGC; 0.1000W                                                                                                                                                  |            |
|     70 | R55                        | -         |     1 | CRCW06032K0FK; ERJ-3EKF2001; RC0603FR-072KL; CRCW06032K00FK | VISHAY;PANASONIC; YAGEO;VISHAY | 2K              | RES; SMT (0603); 2K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                      |            |
|     71 | R65                        | -         |     1 | ERJ-3GEYJ472                                                | PANASONIC                      | 4.7K            | RES; SMT (0603); 4.7K; 5%; +/-200PPM/DEGC; 0.1000W                                                                                                                                                    |            |
|     72 | SPACER1-SPACER4            | -         |     4 | 9032                                                        | KEYSTONE                       |                 | 9032 MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                                                                        |            |
|     73 | U1                         | -         |     1 | MAX16910CASA8/V+                                            | MAXIM                          | MAX16910CASA8/V | IC; VREG; EXPOSED PAD 0.2A, AUTOMOTIVE, ULTRA-LOW QUIESCENT CURRENT, LINEAR REGULATOR; NSOIC8 150MIL                                                                                                  |            |
|     74 | U2                         | -         |     1 | MAX25512ATG/V+                                              | MAXIM                          | MAX25512ATG/V+  | EVKIT PART - IC; MAX25512; 4-CHANNEL LOW-VOLTAGE 120MA WHITE LED BACKLIGHT DRIVER WITH INTEGRATED BOOST CONVERTER; PACKAGE OUTLINE NUMBER: 21-0139; LAND PATTERN NUMBER: 90-0022; PACKAGE CODE: T2044 |            |
|     75 | PCB                        | -         |     1 | MAX25512                                                    | MAXIM                          | PCB             | PCB:MAX25512                                                                                                                                                                                          | -          |
|     76 | C1, C36                    | DNP       |     0 | CGA3EANP02A103J080AC                                        | TDK                            | 0.01UF          | CAP; SMT (0603); 0.01UF; 5%; 100V; C0G; CERAMIC                                                                                                                                                       |            |
|     77 | C3, C18, C23-C25, C39, C50 | DNP       |     0 | N/A                                                         | N/A                            | OPEN            | CAPACITOR; SMT (0603); OPEN; FORMFACTOR                                                                                                                                                               |            |
|     78 | C7, C8                     | DNP       |     0 | C1210C475K5RAC; GRM32ER71H475KA88; CNC6P1X7R1H475K250AE     | KEMET;MURATA;TDK               | 4.7UF           | CAP; SMT (1210); 4.7UF; 10%; 50V; X7R; CERAMIC                                                                                                                                                        |            |
|     79 | C12, C13, C41              | DNP       |     0 | GRM1885C1H102JA01; C1608C0G1H102J080AA; GCM1885C1H102JA16   | MURATA;TDK;MURATA              | 1000PF          | CAP; SMT (0603); 1000PF; 5%; 50V; C0G; CERAMIC                                                                                                                                                        |            |
|     80 | C15, C30, C32              | DNP       |     0 | C2012X7R1H225K125AC                                         | TDK                            | 2.2UF           | CAP; SMT (0805); 2.2UF; 10%; 50V; X7R; CERAMIC                                                                                                                                                        |            |
|     81 | C29                        | DNP       |     0 | N/A                                                         | N/A                            | OPEN            | EVKIT USE ONLY;DUAL PACKAGE OUTLINE 0603 AND 0805 NON-POLAR CAPACITOR                                                                                                                                 |            |
|     82 | C35                        | DNP       |     0 | N/A                                                         | N/A                            | OPEN            | CAPACITOR; SMT (0805); OPEN; FORMFACTOR                                                                                                                                                               |            |
|     83 | C42-C49                    | DNP       |     0 | GRM1885C1H102FA01                                           | MURATA                         | 1000PF          | CAP; SMT (0603); 1000PF; 1%; 50V; C0G; CERAMIC                                                                                                                                                        |            |
|     84 | L3                         | DNP       |     0 | XAL5050-103ME                                               | COILCRAFT                      | 10UH            | INDUCTOR; SMT; COMPOSITE CORE; 10UH; TOL=+/-20%; 4.9A                                                                                                                                                 |            |
|     85 | R1, R8                     | DNP       |     0 | LRC-LRZ2010LF-R000                                          | TT ELECTRONICS                 |                 | 0 RES; SMT (2010); 0; JUMPER; CURRENT SENSE                                                                                                                                                           |            |
|     86 | R50                        | DNP       |     0 | CHPHT0603K1002FGT                                           | VISHAY SFERNICE                | 10K             | RES; SMT (0603); 10K; 1%; +/-100PPM/DEGC; 0.0125W                                                                                                                                                     |            |
|     87 | R56                        | DNP       |     0 | CRCW12060000ZS; ERJ-8GEY0R00                                | VISHAY DALE;PANASONIC          |                 | 0 RES; SMT (1206); 0; JUMPER; JUMPER; 0.2500W                                                                                                                                                         |            |
|     88 | R58                        | DNP       |     0 | N/A                                                         | N/A                            | OPEN            | RESISTOR; 0805; OPEN; FORMFACTOR                                                                                                                                                                      |            |
|     89 | R70                        | DNP       |     0 | CRCW06031M00FK;                                             | VISHAY                         |                 |                                                                                                                                                                                                       |            |
|     90 | R71                        |           |       | MCR03EZPFX1004 CRCW06030000Z0                               | DALE;ROHM                      | 1M              | RES; SMT (0603); 1M; 1%; +/-100PPM/DEGC; 0.1000W 0 RES; SMT (0603); 0; JUMPER;                                                                                                                        |            |
|        |                            | DNP       |     0 | CRCW060347R0FK                                              | VISHAY DALE                    |                 | JUMPER; 0.1000W 47 RES; SMT (0603); 47; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                   |            |
|     91 | R72-R75                    | DNP       |     0 |                                                             | VISHAY DALE                    |                 |                                                                                                                                                                                                       |            |

## MAX25512 Evaluation Kit

## MAX25512 EV Kit Schematics

<!-- image -->

│

Evaluates: MAX25510,

## MAX25512 EV Kit Schematics (continued)

<!-- image -->

## MAX25512 Evaluation Kit

## MAX25512 EV Kit PCB Layout Diagrams

MAX25512 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX25512 EV Kit PCB Layout-Top Layer

<!-- image -->

MAX25512 EV Kit PCB Layout-Internal Layer 2

<!-- image -->

│

## MAX25512 Evaluation Kit

## MAX25512 EV Kit PCB Layout Diagrams (continued)

MAX25512 EV Kit PCB Layout-Internal Layer 3

<!-- image -->

MAX25512 EV Kit PCB Layout-Bottom Layer

<!-- image -->

│

Evaluates: MAX25510,

## MAX25512 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 5/21            | Initial release                                                                                                                                                            | -               |
|                 1 | 6/21            | Added operation with MAX25510 and MAX25511 throughout the document Updated document title, General Description , Features , Quick Start , Detailed Description of Hardware | 1-8             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX25510,

MAX25511, MAX25512