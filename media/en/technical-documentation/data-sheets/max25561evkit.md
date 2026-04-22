<!-- lastmod 2024-03-13 -->
<!-- image -->

## Evaluates: MAX25561, MAX25560

## General Description

The MAX25561 evaluation kit (EV kit) demonstrates the MAX25561  and  MAX25560  integrated  6-channel  highbrightness  LED  drivers  with  boost  controller  and  I 2 C interface for automotive displays supporting ASIL  B (MAX25561 only).

The EV kit operates from a DC supply voltage between 7V (4.5V if the LED current per string is set to 150mA or less) and 36V, and the switching frequency can be either set at 2.2MHz or at 400kHz. The EV kit can only be configured to operate in I 2 C mode. Spread-spectrum mode (SSM) is enabled  by  default  for  EMI  improvement,  but  it  can  be disabled by acting on a register bit. The EV kit demonstrates phase-shifted, pulse-width modulation (PWM)  dimming.  Dimming  can  be performed either externally using a PWM signal applied to the DIM PCB pad or internally by programming the desired dimming frequency and individual duty cycle through I 2 C. When the dimming  signal  is  applied  through  the  DIM  PCB  pad, readback of measured dimming duty cycle and frequency will be made available on dedicated I 2 C registers.

The hybrid dimming feature can also be enabled through a register bit to reduce EMI.

The EV kit features a LED current foldback option as a function of the temperature by means of an on-board NTC sensor. I 2 C-programmable automatic fading functionality is also available.

Finally,  the  EV  kit  demonstrates  short-LED,  open-LED, boost  output  undervoltage  and  overvoltage,  boost  input overcurrent, LED current/duty cycle mismatch, and overtemperature-fault protection. Additional ASIL B features  like  LED  current  measurement,  boost  input current measurement, and boost output voltage measurement are also demonstrated.

For operation at switching frequencies other than 2.2MHz or  400kHz,  the  external  components  should  be  chosen according  to  the  calculations  in  the  MAX25561  IC  and MAX25560 IC data sheets.

The EV kit provides an I 2 C interface that can operate in conjunction with the MAX32625PICO adapter or a thirdparty I 2 C controller. Windows ® -based graphical-user interface (GUI) software is available for use with the EV kit and can be downloaded on the MAX25561 and MAX25560 product pages (under the Evaluation Kits tab). A Windows 7 or newer Windows operating system is required to use the EV kit software.

## MAX25561 Evaluation Kit

- Demonstrates Robustness of MAX25561 and MAX25560
- 7V (4.5V if LED Current per String Is Set to 150mA or Less) to 36V Input Operating Range (up to 42V Load Dump)
- Powers  HB  LEDs  (up  to  Six  Strings)  for  Medium-toLarge-Sized LCD Displays in Automotive and Display Backlight Applications
- 400kHz to 2.2MHz Resistor-Programmable Switching Frequency with Spread-Spectrum Option
- Phase-Shift Dimming Option
- Demonstrates Cycle-by-Cycle Current-Limit and Thermal-Shutdown Features
- Demonstrates Wide Dimming Ratio
- Demonstrates  Hybrid  Dimming  for  Better  EMI  and Acoustic Performance and Higher Dimming Ratio
- Demonstrates  Fade  in/out for  Smooth  Brightness Transition
- Designed to Show Thermal Foldback Function
- I 2 C Programmability
- Dedicated GUI
- Proven PCB and Thermal Design
- Fully Assembled and Tested

## MAX25561 EV Kit Files

| FILE                       | DESCRIPTION                         |
|----------------------------|-------------------------------------|
| MAX25561SetupV1_0_0000.exe | Installs EV kit files onto computer |

Ordering Information appears at end of data sheet.

Windows is a registered trademark of Microsoft Corporation.

319-101042; Rev 1; 2/24

## Evaluates: MAX25561, MAX25560

## Quick Start

## Required Equipment

- MAX25561 EV kit
- 7V (4.5V if the LED current per string is set to 150mA or less) to 36V, 10A DC power supply
- One digital voltmeter (DVM)
- Six  series-connected  HB  LED  strings  (8  LEDs  per string, max) rated to no less than 225mA
- Current probe to measure the HB LED current
- Standard-A to Micro-B USB cable
- Windows-compatible PC with a spare USB port

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

1. Install the EV kit software (GUI) on your PC by running the  MAX25561SetupV1\_0\_0000.exe  program.  The EV kit  software  application  will  be  installed  together with the required PICO drivers.
2. Verify  that  jumper  J18  is  closed  (2.2MHz  switching frequency selected).
3. Verify  that  jumper  J19  is  closed  (DS2  green  LED connected).
4. Verify  that  a  shunt  is  installed  across  pins  2-3  on jumper J5 (ADD pin connected to GND). This will set the IC's I 2 C address to 0x4E.
5. Verify  that  jumpers  J2  and  J4  have  shunts  installed across  pins  1-2  (ISET  and  TEMP  IC's  pins  both connected to V18).
6. Verify that jumpers J3, J20, and J24 are closed (pullup  resistors  for  SDA,  SCL,  and  FLTB  respectively connected).
7. Verify  that  a  shunt  is  installed  across  pins  2-3  on jumper J6 (pull-up voltage set to 3.3V).

## MAX25561 Evaluation Kit

8. Verify  that  jumper  J23  is  closed  (FAULT  signaling through DS4 red LED enabled).
9. Verify  that  a  shunt  is  installed  across  pins  1-2  on jumper J1 (device enabled).
10.  Verify that jumpers JMP2-JMP7 have shunts installed across pins 1-2 (bleed resistors connected, all current sinks enabled).
11.  Connect the positive terminal of the power supply to the  BATT\_IN  PCB  socket.  Connect  the  negative terminal of the power supply to the PGND PCB socket.
12.  Connect the  DVM across the OUT1 and GND PCB pads.
13.  Connect the 6 LED strings (8 LEDs per string, max) from the VBOOST PCB pad to the OUT1-OUT6 PCB pads.
14.  Clip the current probe across the channel 1 HB LED+ wire to measure the LED current.
15.  Turn on the power supply and set it to 12V. The green LED (DS2) should be on at this point.
16.  Launch the EV kit software application.
17.  From  the  EV  kit  software  toolbar,  select Device  → Scan for Address .  The  GUI  scans  the  I 2 C  bus  for available target addresses on the bus and selects the first  one  (in  this  case,  the  MAX25561  I 2 C  address). Press OK once the MAX25561 I 2 C address has been found.
18.  Verify that the status bar in the bottom-right corner of the  GUI  displays EV  Kit:  Connected ,  as  shown  in Figure 1 .
19.  From the EV kit software toolbar, select Options → Set I2C Frequency → 100kHz .
20.  Select  the  desired  OUT\_  current  value  (34.5mA  to 225mA in 1.5mA steps) by acting on the ISET slider bar.
21.  Check Boost Converter Enable to activate the driver.
22.  Measure the voltage from each of the OUT\_ PCB pads to GND  and verify that the lowest voltage is approximately 0.7V.
23.  Measure the LED current using the current probe and verify all channels.
24.  For more details on how to use the GUI and all the features available, click on the GUI Help menu item.

## Evaluates: MAX25561, MAX25560

## MAX25561 EV Kit Photo

<!-- image -->

## Evaluates: MAX25561, MAX25560 MAX25561 Evaluation Kit

Figure 1. MAX25561 EV Kit Software (GUI) Main Window

<!-- image -->

## Detailed Description of Hardware

The MAX25561 EV kit demonstrates the MAX25561 and the MAX25560 HB LED drivers with an integrated step-up DCDC preregulator followed by six linear current sinks to drive up to six strings of LEDs. The preregulator switches at 2.2MHz (or at 400kHz) and operates as a current-mode-controlled regulator, providing up to 1.35A for the linear current sinks as well as overvoltage protection. The cycle-by-cycle current limit is set by resistors R32, R76, R77, and R79, while resistors R44 and R45 set the overvoltage protection voltage to 35V. The preregulator power section consists of inductor L2, powercurrent-sense resistors R23 and R24, power current-sense resistors R76, R77, and R79, Q2 and Q3 MOSFETs, and switching diode D10. The EV kit circuit operates from a 7V DC supply voltage up to the HB LED forward string voltage. The circuit handles load-dump conditions up to 42V.

The EV kit circuit demonstrates ultra-low shutdown current when the EN pin of the device is pulled to ground by shorting the EN PCB pad to ground. Each of the six linear current sinks (OUT1-OUT6) is capable of operating up to 42V, sinking up to 225mA per channel.

Each of the six channels' linear current sinks is I 2 C-configurable for 34.5mA to 225mA. Channels from 2 to 6 can be disabled independently either by acting on the OUT2-OUT6 Disable checkboxes or by acting on jumpers JMP2 and JMP4-JMP7, which are used to disable outputs selectively when the HB LED string is not connected.

The internal ADC measurements of LED currents through each channel of the boost converter input current (indirectly provided as a voltage drop between the BATT and SENSE pins) and of the voltage on the BSTMON pin are continuously refreshed and are shown in the IOUT1-IOUT6 , VBSTMON , and VSENSE boxes (MAX25561 only).

External dimming signal's frequency and on-time measurements are also shown in the DIM Freq and DIM TON boxes, respectively.

The EV kit features PCB pads to facilitate connecting HB LED strings for evaluation. The VBOOST PCB pads provide connections for connecting each HB LED string's anode to the DC -DC preregulator output. The OUT1-OUT6 PCB pads provide connections for connecting each HB LED string's cathode to the respective current sink. Capacitors C31, C76, C78, C80, C82, and C84 are included on the design to prevent oscillations and provide stability when using long, untwisted

## Evaluates: MAX25561, MAX25560

## MAX25561 Evaluation Kit

HB LED connecting cables during lab evaluation. These capacitors are not required if the connection between the LED driver and the HB LEDs is a low-inductance connection.

A DIM PCB pad is provided for using a digital PWM signal to control the brightness of the HB LEDs. Test points are also provided for easy access to the device's V18 regulator output as well as the BATT, SENSE, and NGATE pins and the NTC sensor non-grounded terminal.

## SDA and SCL Supply Voltages

SDA and SCL voltage supplies can be selected between an externally applied voltage and the fixed 3.3V provided by the PICO board (see Table 1 ).

Caution : When using a supply higher than 3.3V for SDA and SCL pins, keep the EV kit disconnected from the PICO board to avoid any possible damage to the latter.

Table 1. SDA and SCL Supply (J3, J6, J20)

| SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   | SDA AND SCL SUPPLY    |
|------------------|------------------|------------------|-----------------------|
| J3               | J6               | J20              | -                     |
| Closed*          | 2-3*             | Closed*          | 3.3V (PICO connected) |
| Closed           | 1-2              | Closed           | External              |

*Default position.

## Power LED Enable

A green LED (DS2) is used to indicate that the EV kit is powered on. The LED can be disconnected from the power supply, allowing precise current-consumption evaluation. See Table 2 for shunt positions.

## Table 2. DS1 Enable (J19)

| SHUNT POSITION   | DS2 POWER LED   |
|------------------|-----------------|
| Closed*          | Connected       |
| Open             | Disconnected    |

## Enable (EN)

The EV kit features an enable input that can be used to enable/disable the device and place it in shutdown mode. To enable the EV kit whenever power is applied to BATT\_IN, place a jumper across pins 1-2 on jumper J1. To enable the EV kit using an external enable signal, place a jumper across pins 2-3 on jumper J1 and apply a logic signal on the EN PCB input pad on the EV kit. A 1MΩ pull -down resistor on the EV kit (R17) pulls the EN input to ground in the event that J1 is left open or the EN signal is high impedance. See Table 3 for J1 jumper settings.

## Table 3. Enable (J1)

| SHUNT POSITION   | EN PIN                  | EV KIT OPERATION                          |
|------------------|-------------------------|-------------------------------------------|
| 1-2*             | Connected to BATT_IN    | Enabled when BATT_IN is powered.          |
| 2-3              | Connected to EN PCB pad | Enabled/disabled by signal on EN PCB pad. |

## Switching Frequency

Jumper J18 is used to set the switching frequency of the MAX25561 to either 2.2MHz or 400kHz. When J18 is closed, the switching frequency is set to 2.2MHz. When J18 is open, the switching frequency is nominally 400kHz. See Table 4 for jumper settings.

The EV kit is optimized for 2.2MHz switching operation by default. When selecting a switching frequency of 400kHz, L2 should be changed to 10µH to 22µH to maintain acceptable efficiency. Other component value adjustments may be needed.

## Evaluates: MAX25561, MAX25560

## MAX25561 Evaluation Kit

The spread-spectrum feature can be disabled/enabled by checking/unchecking Spread-Spectrum Disable . With spread spectrum enabled,  it  is  also  possible  to  select  the  amount  of  spread  by  checking  (±4%)/unchecking  (±6%) SpreadSpectrum Level in the register group box.

Refer to the Oscillator Frequency/External Synchronization section in the MAX25561 IC and MAX25560 IC data sheets for more information.

## Table 4. Switching Frequency (J18)

| SHUNT POSITION   | EN PIN                                  | EV KIT OPERATION           |
|------------------|-----------------------------------------|----------------------------|
| Closed*          | RT connected to GND through 15kΩ/64.9kΩ | 2.2MHz switching frequency |
| Open             | RT connected to GND through 64.9kΩ      | 400kHz switching frequency |

*Default position.

## HB LED Current

The device's current sinks' current on all six channels is fully configurable through I 2 C ( ISET slider bar) between 34.5mA and 225mA. Alternatively, the initial LED current can be set by connecting a resistor from the ISET pin to GND; in this way the device will start up immediately when the EN pin is taken high without the need for checking Boost Converter Enable in the GUI window. It will still be possible to act on the ISET slider bar to adjust the LED current value at a later stage.

One of the jumpers J7-J14 can be closed before powering up the device to select, through a resistor to ground, the initial current level to which the current sinks will be enabled. If a shunt is placed across pins 1-2 on jumper J2, the ISET pin will be shorted to V18, and its function will be disabled. Only one of the above listed jumpers at a time must be closed. See Table 5 for jumper settings.

Refer to the LED Current Control section in the MAX25561 IC and MAX25560 IC data sheets for more information.

## Table 5. LED Current Initial Setting through ISET Resistor (J2 and J7-J14)

| ISET RESISTOR VALUE (kΩ)   | JUMPER   | SHUNT POSITION   | OUT_CURRENT (mA)             |
|----------------------------|----------|------------------|------------------------------|
| ISET shorted to V18*       | J2       | 1-2              | ISET function disabled       |
| ISET shorted to GND        | J2       | 2-3              | Test ISETOOR fault detection |
| 4.3k Ω                     | J7       | Closed           | 96                           |
| 9.1k Ω                     | J8       | Closed           | 106.5                        |
| 15k Ω                      | J9       | Closed           | 118.5                        |
| 24k Ω                      | J10      | Closed           | 130.5                        |
| 33k Ω                      | J11      | Closed           | 145.5                        |
| 43k Ω                      | J12      | Closed           | 162                          |
| 56k Ω                      | J13      | Closed           | 180                          |
| 68k Ω                      | J14      | Closed           | 199.5                        |

*Default position.

## Channel 1 -Channel 6 Current-Sink Disabling

The EV kit features jumpers JMP2-JMP7, which are used to put each OUT\_ current sink in one of three operating states:

- Normal operation (i.e., OUT\_) connected to the corresponding PCB pad on the board edge; LEDs are connected from there to the preregulator output VBOOST
- OUT\_ connected through a 9.1kΩ resistor to GND, and thus disabled
- OUT\_ shorted to GND, used to test fault detection

To disable a channel, install a jumper in the channel's resp ective jumper across pins 1-3, connecting the OUT\_ to ground through a 9.1kΩ resistor. The dimming algorithm in the IC requires that higher numbered OUT\_ current sinks be disabled first. For example, if only two strings are needed, OUT1-OUT2 should be used, with OUT3-OUT6 disabled. See Table 6 for jumper settings. The 20kΩ bleed resistors are installed to prevent the OUT\_ leakage current from dimly turning on

## Evaluates: MAX25561, MAX25560

## MAX25561 Evaluation Kit

large LED strings even when the DIM signal is low. Note that OUT2-OUT6 channels can be alternatively disabled through I 2 C by acting on the OUT2-OUT6 Disable check boxes.

Table 6. Selecting OUT\_ Channels Operating State (JMP2-JMP7)

| OUT_   | JUMPER   | SHUNT POSITION   | CHANNEL OPERATION                                                                                  |
|--------|----------|------------------|----------------------------------------------------------------------------------------------------|
| OUT1   | JMP3     | 1-2*             | Channel 1 operational; connect an HB LED string** between VOUT and OUT1. Bleed resistor connected. |
| OUT1   | JMP3     | 1-3              | Channel 1 not used. OUT1 current sink disabled.                                                    |
| OUT1   | JMP3     | 1-4              | Channel 1 shorted to GND to simulate a fault.                                                      |
| OUT2   | JMP4     | 1-2*             | Channel 2 operational; connect an HB LED string** between VOUT and OUT2. Bleed resistor connected. |
| OUT2   | JMP4     | 1-3              | Channel 2 not used. OUT2 current sink disabled.                                                    |
| OUT2   | JMP4     | 1-4              | Channel 2 shorted to GND to simulate a fault.                                                      |
| OUT3   | JMP2     | 1-2*             | Channel 3 operational; connect an HB LED string** between VOUT and OUT3. Bleed resistor connected. |
| OUT3   | JMP2     | 1-3              | Channel 3 not used. OUT3 current sink disabled.                                                    |
| OUT3   | JMP2     | 1-4              | Channel 3 shorted to GND to simulate a fault.                                                      |
| OUT4   | JMP5     | 1-2*             | Channel 4 operational; connect an HB LED string** between VOUT and OUT4. Bleed resistor connected. |
| OUT4   | JMP5     | 1-3              | Channel 4 not used. OUT4 current sink disabled.                                                    |
| OUT4   | JMP5     | 1-4              | Channel 4 shorted to GND to simulate a fault.                                                      |
| OUT5   | JMP7     | 1-2*             | Channel 5 operational; connect an HB LED string** between VOUT and OUT5. Bleed resistor connected. |
| OUT5   | JMP7     | 1-3              | Channel 5 not used. OUT5 current sink disabled.                                                    |
| OUT5   | JMP7     | 1-4              | Channel 5 shorted to GND to simulate a fault.                                                      |
| OUT6   | JMP6     | 1-2*             | Channel 6 operational; connect an HB LED string** between VOUT and OUT6. Bleed resistor connected. |
| OUT6   | JMP6     | 1-3              | Channel 6 not used. OUT6 current sink disabled.                                                    |
| OUT6   | JMP6     | 1-4              | Channel 6 shorted to GND to simulate a fault.                                                      |

*Default position. **The series-connected HB LED string must be rated to no less than 225mA.

## HB LED Digital Dimming Control

The EV kit features a DIM PCB input pad for connecting an external digital PWM signal. Apply a digital PWM signal with a 0.6V logic-low level (or less) and 1.22V logic-high level (or greater). The DIM signal frequency should be at least 90Hz. To adjust the HB LED brightness, vary the signal duty cycle from 0% to 100% and maintain a minimum pulse width of 300ns. Apply the digital P WM signal to the DIM PCB pad. The DIM input of the IC is pulled up internally with a 2μA (typ) current source.

Dimming can also be performed by programming the desired dimming level through I 2 C. External dimming is enabled by default at each device's powe r up. To disable it, first uncheck Dimming DIM Enable , then select one of the available dimming frequencies in the PWM Freq dropdown menu. Individual channel brightness levels can finally be selected by writing a multiple of 50ns in the TON1-TON6 windows and pressing the relevant button to confirm the selection.

Note: By checking TON Master , it is possible to set the same on time for all the channels.

For additional information on the device's digital dimming feature, refer to the Dimming section in the MAX25561 IC and MAX25560 IC data sheets.

## Evaluates: MAX25561, MAX25560

## Hybrid Dimming Operation

The hybrid dimming feature can be used both with external and internal dimming. The device will determine whether the LED current is to be dimmed by reducing the LED current or by chopping the LED current (depending on the hybrid dimming  threshold  set  in  the HDIM  Thres dropdown  menu).  To  enable  the  hybrid  dimming  feature,  check Hybrid Dimming Enable .

For additional information on the device's dimming feature, refer to the Hybrid Dimming section in the MAX25561 IC and MAX25560 IC data sheets.

## Phase-Shift Operation

The EV kit demonstrates the phase-shifting feature of the IC. Phase shift is disabled by default at each device's power up. To enable it, check Phase Shifting Enable . This operation must be always performed before enabling any LED string.

When phaseshifting is enabled, each current sink's turn -on is separated by 360°/n, where n is the number of enabled strings. When phase-shifting is disabled, the dimming of each string is controlled by the DIM input (or by the PWM Freq and TON1-TON6 settings if internal dimming is enabled), and all current sinks turn on and off at the same time.

## LED Current Foldback Option

The EV kit demonstrates the temperature foldback feature of the IC. A shunt on jumper J4 allow connection of the device's TEMP pin to an NTC sensor (NTCLE100E3103G or a similar NTC device) through resistor R12 according to Table 7 . A different NTC sensor can be installed on the EV kit using the J21 pins after removing RT1.

When the NTC senses a temperature higher than a limit value (set by R1), the LED current will be linearly reduced with increasing temperature down to 20% of its initial value. Temperature values which would result in a LED current lower than 20% of its initial value will cause the complete turning off of the current sinks.

For additional information on the device's temperature foldback operation, refer to the Temperature Foldback section in the MAX25561 IC and MAX25560 IC data sheets.

## Table 7. TEMP Pin Connection (J4)

| SHUNT POSITION   | TEMP PIN                                    | EV KIT OPERATION              |
|------------------|---------------------------------------------|-------------------------------|
| 1-2*             | TEMP connected to V18                       | Temperature foldback disabled |
| 2-3              | TEMP connected to NTC through 2k Ω resistor | Temperature foldback enabled  |

*Default position.

## Fault-Indicator Output (FLT)

The EV kit features the device's open -drain FLTB output. The FLTB signal on the PCB pad is pulled up to the PU\_V voltage by resistor R14 with jumper J24 closed. FLTB goes low when an open-LED or shorted-LED string is detected, during  thermal  warning/shutdown  events,  during  boost  undervoltage/input  overcurrent  events,  and  in  case  of IREF/ISET/RT out-of-range, LED current/dimming TON mismatch conditions. Keep jumper J23 closed to allow red LED DS4 enabling in case FLTB goes low. If DS4 signaling function is not required, jumper J23 must be kept open. PU\_V logic voltage source must be provided externally (see Table 8 ).

Refer to the Diagnostic and FLTB Output section  in  the  MAX25561 IC and MAX25560 IC data sheets for additional information on the FLTB signal.

## Table 8. FLTB Pull-up Voltage Selection (J6, J23, J24)

| SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   | FLTB PULL-UP VOLTAGE             |
|------------------|------------------|------------------|----------------------------------|
| J6               | J23              | J24              |                                  |
| 1-2              | Closed           | Closed           | External, DS4 signaling enabled  |
| 1-2              | Open             | Closed           | External, DS4 signaling disabled |

*Default position.

## Shorted-LED Detection and Protection

The short-LED threshold is set through I 2 C in the SLED Thres dropdown menu. A shorted LED is detected when the following condition is satisfied:

## MAX25561 Evaluation Kit

## Evaluates: MAX25561, MAX25560

VOUT\_1-6 &gt; SLED Thres

When the short-LED threshold is reached, the affected current sink is disabled to reduce excess power dissipation and the FLTB indicator asserts low.

LED short detection can be disabled by checking SLED Detection Disable .

## Overvoltage Detection and Protection

The resistors  R44  and  R45  connected  to  BSTMON are  configured  for  a  VOUT\_OVP  of  35V  which  then  equals  the maximum converter output (VOUT) voltage. During an open-LED string condition, the converter output ramps up to the output  overvoltage  threshold.  Capacitor  C63  can  be  added  to  provide  noise  filtering  to  the  overvoltage  signal.  To reconfigure the circuit for a different voltage, replace resistor R44 with a different value using the following equation:

<!-- formula-not-decoded -->

where R45 is 1kΩ, VOUT\_OVP is the overvoltage -protection threshold desired, and R44 is the new resistor value for obtaining the desired overvoltage protection.

Refer to the Open-LED Management and Overvoltage Protection section in the MAX25561 IC and MAX25560 IC data sheets for additional information.

## Fading Function

The fading option feature can be enabled for all dimming conditions (external or internal, with or without hybrid dimming) by checking Fade-In-Out Enable .  With fading enabled, any dimming duty cycle change will be applied incrementally following an exponential increase/decrease with a gain of 6.25% per dimming cycle sequence (or 12.5% if Fade-In-Out Gain is checked).

Depending on the value set in the TDIM dropdown menu, the user is also able to set a delay after which each duty cycle update will be carried out. The fading duty cycle update will occur every 2 TDIM  dimming cycles, where 2 TDIM  can be equal to one of the following values: 1, 2, 4, 8, 16, or 32.

Refer to the Automatic Fade-In/Fade-Out During Dimming section in the MAX25561 IC and MAX25560 IC data sheets for additional information.

## Ordering Information

| PART            | TYPE                 |
|-----------------|----------------------|
| MAX25561EVKITA# | EV Kit (MAX25561 IC) |
| MAX25561EVKITB# | EV Kit (MAX25560 IC) |

#Denotes RoHS-compliant.

## MAX25561 EV Kit Bill of Materials

| PART                                           | DNI   | MFG PART #                        |   QTY | DESCRIPTION                                                                                                          |
|------------------------------------------------|-------|-----------------------------------|-------|----------------------------------------------------------------------------------------------------------------------|
| 1V8PICO, 3V3PICO, BATT, NGATE, NTC, SENSE, V18 | -     | 5005                              |     7 | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| BATT_IN, PGND                                  | -     | 6095                              |     2 | CONNECTOR; FEMALE; PANELMOUNT; NON- INSULATED RECESSED HEAD BANANA JACK; STRAIGHT THROUGH; 1PIN                      |
| C2, C14, C18                                   | -     | UMK107AB7105KA; CC0603KRX7R9BB105 |     3 | CAP; SMT (0603); 1UF; 10%; 50V; X7R; CERAMIC                                                                         |
| C3                                             | -     | GRM188C71E225KE11                 |     1 | CAP; SMT (0603); 2.2UF; 10%; 25V; X7S; CERAMIC                                                                       |
| C4, C5                                         | -     | C0603C223K5RAC; GRM188R71H223K;   |     2 | CAP; SMT (0603); 0.022UF; 10%; 50V; X7R; CERAMIC                                                                     |

www.analog.com

## MAX25561 Evaluation Kit

## Evaluates: MAX25561, MAX25560

## MAX25561 Evaluation Kit

|                                                                                         |    | C1608X7R1H223K080AA; GCJ188R71H223KA01                                              |    |                                                                                          |
|-----------------------------------------------------------------------------------------|----|-------------------------------------------------------------------------------------|----|------------------------------------------------------------------------------------------|
| C6, C52                                                                                 | -  | C0603C100K1GAC                                                                      |  2 | CAP; SMT (0603); 10PF; 10%; 100V; C0G; CERAMIC                                           |
| C8                                                                                      | -  | C0603H101J5GAC                                                                      |  1 | CAP; SMT (0603); 100PF; 5%; 50V; C0G; CERAMIC                                            |
| C9, C15, C19, C35, C38, C53, C68                                                        | -  | CC0603KRX7R0BB104; GRM188R72A104KA35; HMK107B7104KA; 06031C104KAT2A; GRM188R72A104K |  7 | CAP; SMT (0603); 0.1UF; 10%; 100V; X7R; CERAMIC                                          |
| C11                                                                                     | -  | C0603C683J5RAC; C0603X683J5RAC                                                      |  1 | CAP; SMT (0603); 0.068UF; 5%; 50V; X7R; CERAMIC                                          |
| C20, C34                                                                                | -  | C2012X7R1H225K125AC                                                                 |  2 | CAP; SMT (0805); 2.2UF; 10%; 50V; X7R; CERAMIC                                           |
| C22                                                                                     | -  | EEE-TG1H470UP                                                                       |  1 | CAP; SMT (CASE_F); 47UF; 20%; 50V; ALUMINUM- ELECTROLYTIC                                |
| C36, C37                                                                                | -  | GRM32ER71H106KA12; CL32B106KBJNNN; UMJ325KB7106KMH; 12105C106K4Z2A                  |  2 | CAP; SMT (1210); 10UF; 10%; 50V; X7R; CERAMIC                                            |
| C49                                                                                     | -  | 06035C101JAT                                                                        |  1 | CAP; SMT (0603); 100PF; 5%; 50V; X7R; CERAMIC                                            |
| C71                                                                                     | -  | 50HVP56M                                                                            |  1 | CAP; SMT; 56UF; 20%; 50V; ALUMINUM-                                                      |
| D9                                                                                      | -  | B160B-13-F                                                                          |  1 | DIODE; SCH; SMB (DO-214AA); PIV=60V; IF=1A                                               |
| D10                                                                                     | -  | PMEG100T050ELPE-Q                                                                   |  1 | DIODE; SCH; SMT (SOT-1289); PIV=100V; IF=5A                                              |
| D11                                                                                     | -  | CMPD914E                                                                            |  1 | DIODE; SWT; SMT (SOT23-3); PIV=150V; IF=0.1A                                             |
| D13                                                                                     | -  | 1N4148WT                                                                            |  1 | DIODE; SWT; SMT (SOD-523); PIV=75V; IF=0.25A                                             |
| DIM, EN, EXT_PU, FLT, GND7-GND9, GND11-GND14, OUT1-OUT6, SCL, SDA, SYNC, VBOOST1, VTEMP | -  | 9020 BUSS                                                                           | 22 | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG |
| DS2                                                                                     | -  | LGL29K-F2J1-24-Z                                                                    |  1 | DIODE; LED; SMARTLED; GREEN; SMT; PIV=1.7V; IF=0.02A                                     |
| DS4                                                                                     | -  | LTST-C170EKT                                                                        |  1 | DIODE; LED; STANDARD; RED; SMT (0805); PIV=2.0V; IF=0.02A;                               |
| J1, J2, J4-J6                                                                           | -  | PEC03SAAN                                                                           |  5 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                |
| J3, J7-J14, J18- J21, J23, J24                                                          | -  | PBC02SAAN                                                                           | 15 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                |
| J16                                                                                     | -  | DF11-6DP-2DSA(24)                                                                   |  1 | CONNECTOR; MALE; THROUGH HOLE; DF11 SERIES; DOUBLE-ROW CONNECTOR; STRAIGHT; 6PINS;       |
| J25                                                                                     | -  | HTSW-112-11-G-S-RA                                                                  |  1 | CONNECTOR; MALE; THROUGH HOLE; SQUARE POST HEADER; RIGHT ANGLE; 12PINS ;                 |

## Evaluates: MAX25561, MAX25560

## MAX25561 Evaluation Kit

| JMP2-JMP7                                  | -   | 22-28-4043                                                                        |   6 | CONNECTOR; MALE; THROUGH HOLE; FLAT VERTICAL BREAKAWAY; STRAIGHT; 4PINS                                          |
|--------------------------------------------|-----|-----------------------------------------------------------------------------------|-----|------------------------------------------------------------------------------------------------------------------|
| L1                                         | -   | SRP1238A-R60M                                                                     |   1 | INDUCTOR; SMT; SHIELDED; 0.6UH; 20%; 29A                                                                         |
| L2                                         | -   | XAL1510-472ME                                                                     |   1 | INDUCTOR; SMT; COMPOSITE; 4.7UH; 20%; 29A                                                                        |
| Q1                                         | -   | BSS84                                                                             |   1 | ENHANCEMENT MODE FIELD EFFECT TRANSISTOR, P-CHANNEL, SOT-23, PD=0.36W, ID=-0.13A, VDSS=-50V, -55degC TO +150degC |
| Q2                                         | -   | NTMFS5C673NLT1G                                                                   |   1 | TRAN; NCH; MOSFET; SO-8FL; PD-(46W); I-(50A); V- (60V)                                                           |
| Q3                                         | -   | NVMFS5C677NLT1G                                                                   |   1 | TRAN; NCH; POWER MOSFET; SO-8FL; PD-(3.5W); I-(36A); V-(60V)                                                     |
| R1                                         | -   | CRCW06036K04FK                                                                    |   1 | RES; SMT (0603); 6.04K; 1%; +/-100PPM/DEGC; 0.1000W                                                              |
| R2                                         | -   | CRCW06033K00FK                                                                    |   1 | RES; SMT (0603); 3K; 1%; +/-100PPM/DEGC; 0.1000W                                                                 |
| R3                                         | -   | CRCW06030000Z0                                                                    |   1 | RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                                                                      |
| R4, R20, R52-R54, R56                      | -   | MCR03EZPFX2002; ERJ- 3EKF2002; CR0603-FX- 2002ELF; CRCW060320K0FK; RMCF0603FT20K0 |   6 | RES; SMT (0603); 20K; 1%; +/-100PPM/DEGC; 0.1000W                                                                |
| R5, R35                                    | -   | CRCW060315K0FK                                                                    |   2 | RES; SMT (0603); 15K; 1%; +/-100PPM/DEGC; 0.1000W                                                                |
| R6, R11                                    | -   | CRCW06031K50FK                                                                    |   2 | RES; SMT (0603); 1.5K; 1%; +/-100PPM/DEGC; 0.1000W                                                               |
| R7                                         | -   | ERJ-3EKF6492                                                                      |   1 | RES; SMT (0603); 64.9K; 1%; +/-100PPM/DEGC; 0.1000W                                                              |
| R10                                        | -   | LRC-LRZ2010LF-R000                                                                |   1 | RES; SMT (2010); 0; JUMPER; CURRENT SENSE                                                                        |
| R12                                        | -   | CRCW06032K00FKEAHP                                                                |   1 | RES; SMT (0603); 2K; 1%; +/-100PPM/DEGK; 0.2500W                                                                 |
| R14, R16                                   | -   | CHPHT0603K1002FGT                                                                 |   2 | RES; SMT (0603); 10K; 1%; +/-100PPM/DEGC; 0.0125W                                                                |
| R15                                        | -   | CR0603-FX- 1001ELF;RC0603FR-071KL                                                 |   1 | RES; SMT (0603); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                 |
| R17                                        | -   | CRCW06031M00FK; MCR03EZPFX1004                                                    |   1 | RES; SMT (0603); 1M; 1%; +/-100PPM/DEGC; 0.1000W                                                                 |
| R18, R22, R26, R27, R48, R50, R51, R63-R74 | -   | CRCW06030000ZS; MCR03EZPJ000; ERJ- 3GEY0R00; CR0603AJ/-000ELF                     |  19 | RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                                                                      |
| R21                                        | -   | TNPW060310K0BE; RN731JTTD1002B                                                    |   1 | RES; SMT (0603); 10K; 0.10%; +/-25PPM/DEGK; 0.1000W                                                              |
| R23, R24                                   | -   | TLRP3A30DR012F                                                                    |   2 | RES; SMT (2512); 0.012; 1%; +/-50PPM/DEGC; 3W;                                                                   |
| R29, R34, R36- R39, R61                    | -   | CRCW06039K10FKEAC                                                                 |   7 | RES; SMT (0603); 9.1K; 1%; +/-100PPM/DEGK; 0.1000W                                                               |

## Evaluates: MAX25561, MAX25560

## MAX25561 Evaluation Kit

| R31              | -   | CRCW06034K30FK                                |   1 | RES; SMT (0603); 4.3K; 1%; +/-100PPM/DEGK; 0.1000W                                                                                                                                           |
|------------------|-----|-----------------------------------------------|-----|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R32              | -   | CRCW06031K80FK                                |   1 | RES; SMT (0603); 1.8K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                           |
| R33              | -   | ERJ-3RQF4R7                                   |   1 | RES; SMT (0603); 4.7; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                            |
| R40              | -   | CRCW060310R0FK; MCR03EZPFX10R0; ERJ- 3EKF10R0 |   1 | RES; SMT (0603); 10; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                             |
| R43              | -   | CRCW08050000ZS; RC2012J000                    |   1 | RES; SMT (0805); 0; JUMPER; JUMPER; 0.1250W                                                                                                                                                  |
| R44              | -   | RT0805BRD0736KL                               |   1 | RES; SMT (0805); 36K; 0.10%; +/-25PPM/DEGC; 0.1250W;                                                                                                                                         |
| R45              | -   | TNPW08051K00BE; RN732ATTD1001B                |   1 | RES; SMT (0805); 1K; 0.10%; +/-25PPM/DEGK; 0.1250W                                                                                                                                           |
| R46              | -   | CPF0603B22KE                                  |   1 | RES; SMT (0603); 22K; 0.10%; +/-25PPM/DEGC; 0.0630W                                                                                                                                          |
| R75              | -   | ERJ-3EKF2402                                  |   1 | RES; SMT (0603); 24K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                            |
| R76, R77, R79    | -   | WSR5R0660D                                    |   3 | RES; SMT (4527); 0.066; 0.5%; +/-75PPM/DEGC; 5W;                                                                                                                                             |
| R78              | -   | CRCW060333K0FK                                |   1 | RES; SMT (0603); 33K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                            |
| R80              | -   | CRCW060343K0FK                                |   1 | RES; SMT (0603); 43K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                            |
| R81              | -   | CRCW060356K0FK                                |   1 | RES; SMT (0603); 56K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                            |
| R82              | -   | CRCW060368K0FK                                |   1 | RES; SMT (0603); 68K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                            |
| RT1              | -   | NTCLE100E3103G                                |   1 | THERMISTOR; THROUGH HOLE-RADIAL LEAD; 10K OHM; TOL=+/-2%                                                                                                                                     |
| SPACER1- SPACER4 | -   | 9032                                          |   4 | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                                                                    |
| TP1, TP2         | -   | 5011                                          |   2 | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                      |
| U1               | -   | MAX25561ATJ/V+/MAX25560AT J/V+                |   1 | EVKIT PART - IC; 6-CHANNEL HIGH-CURRENT WHITE LED BACKLIGHT DRIVER WITH BOOST CONTROLLER; PACKAGE OUTLINE DRAWING 21- 0140; LAND PATTERN DRAWING: 90-0603; PACKAGE CODE: T3255-6C; TQFN32-EP |
| U3               | -   | MAX32625PICO                                  |   1 | MODULE; BOARD; MAX32625PICO BOARD DESIGN FOR MAX32625 ARM CORTEX-M4F; BOARD; LAMINATED PLASTIC WITH COPPER CLAD;                                                                             |
| PCB              | -   | MAX25561                                      |   1 | PCB:MAX25561                                                                                                                                                                                 |
| C16, C25, C42    | DNI | C2012X7R1H225K125AC                           |   0 | CAP; SMT (0805); 2.2UF; 10%; 50V; X7R; CERAMIC                                                                                                                                               |
| C21, C74         | DNI | CGA3EANP02A103J080AC                          |   0 | CAP; SMT (0603); 0.01UF; 5%; 100V; C0G; CERAMIC                                                                                                                                              |

www.analog.com

Analog Devices | 12

## Evaluates: MAX25561, MAX25560

## MAX25561 Evaluation Kit

| C23, C24                                   | DNI   | GRM32ER71H106KA12; CL32B106KBJNNN; UMJ325KB7106KMH; 12105C106K4Z2A                  |   0 | CAP; SMT (1210); 10UF; 10%; 50V; X7R; CERAMIC                         |
|--------------------------------------------|-------|-------------------------------------------------------------------------------------|-----|-----------------------------------------------------------------------|
| C26-C30, C32, C33, C75, C77, C79, C81, C83 | DNI   | GRM1885C1H102FA01                                                                   |   0 | CAP; SMT (0603); 1000PF; 1%; 50V; C0G; CERAMIC                        |
| C31, C76, C78, C80, C82, C84               | DNI   | GRM1885C1H102JA01; C1608C0G1H102J080AA; GCM1885C1H102JA16                           |   0 | CAP; SMT (0603); 1000PF; 5%; 50V; C0G; CERAMIC                        |
| C39, C40                                   | DNI   | CC0603KRX7R0BB104; GRM188R72A104KA35; HMK107B7104KA; 06031C104KAT2A; GRM188R72A104K |   0 | CAP; SMT (0603); 0.1UF; 10%; 100V; X7R; CERAMIC                       |
| C59, C64                                   | DNI   | C1608X8R1H152K080; GCM188R91H152KA01                                                |   0 | CAP; SMT (0603); 1500PF; 10%; 50V; X8R; CERAMIC                       |
| R8                                         | DNI   | CRCW06031M00FK; MCR03EZPFX1004                                                      |   0 | RES; SMT (0603); 1M; 1%; +/-100PPM/DEGC; 0.1000W                      |
| R9, R13, R25                               | DNI   | SLN5TTED68L0D                                                                       |   0 | RES; SMT (4527); 0.068; 0.5%; +/-75PPM/DEGC; 7W                       |
| R19                                        | DNI   | CHPHT0603K1002FGT                                                                   |   0 | RES; SMT (0603); 10K; 1%; +/-100PPM/DEGC; 0.0125W                     |
| R28                                        | DNI   | TLRP3A30DR012F                                                                      |   0 | RES; SMT (2512); 0.012; 1%; +/-50PPM/DEGC; 3W;                        |
| R30                                        | DNI   | LRC-LRZ2010LF-R000                                                                  |   0 | RES; SMT (2010); 0; JUMPER; CURRENT SENSE                             |
| R41, R42                                   | DNI   | ERJ-3RQF4R7                                                                         |   0 | RES; SMT (0603); 4.7; 1%; +/-100PPM/DEGC; 0.1000W                     |
| R47, R49, R57- R60                         | DNI   | CRCW060347R0FK                                                                      |   0 | RES; SMT (0603); 47; 1%; +/-100PPM/DEGC; 0.1000W                      |
| C1                                         | DNI   | N/A                                                                                 |   0 | CAPACITOR; SMT (0603); OPEN; FORMFACTOR                               |
| C7                                         | DNI   | N/A                                                                                 |   0 | EVKIT USE ONLY;DUAL PACKAGE OUTLINE 0603 AND 0805 NON-POLAR CAPACITOR |
| C63                                        | DNI   | N/A                                                                                 |   0 | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                              |

DNI → Do Not Install

## Evaluates: MAX25561, MAX25560

<!-- image -->

## Evaluates: MAX25561, MAX25560

## MAX25561 EV Kit Schematics (continued)

<!-- image -->

&gt;

## Evaluates: MAX25561, MAX25560

## MAX25561 EV Kit Schematics (continued)

<!-- image -->

## Evaluates: MAX25561, MAX25560

## MAX25561 EV Kit PCB Layouts

MAX25561 EV Kit Component Placement Guide -Top Silkscreen

<!-- image -->

MAX25561 EV Kit PCB Layout -Internal Layer 2

<!-- image -->

## MAX25561 Evaluation Kit

MAX25561 EV Kit PCB Layout -Top Layer

<!-- image -->

MAX25561 EV Kit PCB Layout -Internal Layer 3

<!-- image -->

## Evaluates: MAX25561, MAX25560

## MAX25561 EV Kit PCB Layouts (continued)

MAX25561 EV Kit PCB Layout -Bottom Layer

<!-- image -->

## MAX25561 Evaluation Kit

MAX25561 EV Kit Component Placement Guide -Bottom Silkscreen

<!-- image -->

## Evaluates: MAX25561, MAX25560

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION       | PAGES CHANGED   |
|-------------------|-----------------|-------------------|-----------------|
|                 0 | 12/23           | Initial release   | -               |
|                 1 | 2/24            | Added MAX25560 IC | All             |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## MAX25561 Evaluation Kit