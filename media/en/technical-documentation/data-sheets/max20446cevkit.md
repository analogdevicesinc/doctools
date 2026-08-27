<!-- lastmod 2022-08-03 -->
<!-- image -->

Evaluates: MAX20446C

## General Description

The MAX20446C evaluation kit (EV kit) demonstrates the MAX20446C,  an  integrated  6-channel  high-brightness LED driver with boost controller for automotive displays.

The EV kit operates from a DC supply voltage between 4.5V and 36V, and the switching frequency can be either set  at  2.2MHz  or  at  400kHz.  The  EV  kit  operates  in stand-alone mode. Spread-spectrum mode is enabled by default  for  EMI  improvement.  The  EV  kit  demonstrates phase-shifted  pulse-width  modulation  (PWM)  dimming. Dimming  can  be  performed  externally  using  a  PWM signal applied to the DIM PCB pad. The hybrid dimming feature can also be enabled through a resistor connected between the SET pin and GND to reduce EMI. The EV kit also demonstrates short-LED, open-LED, boost output undervoltage and overvoltage, and overtemperature-fault protection.

For operation at switching frequencies other than 2.2MHz or  400kHz,  the  external  components  should  be  chosen according to the calculations in the MAX20446C IC data sheet.

## Features

- Demonstrates Robustness of MAX20446C
- Wide 4.5V to 36V Input Operating Range (Up to 52V Load Dump)
- Powers HB LEDs (up to six strings) for Medium-toLarge-Sized LCD Displays in Automotive and Display Backlight Applications
- 400kHz to 2.2MHz Resistor-Programmable Switching Frequency with Spread-Spectrum Option
- Phase-Shift Dimming
- Demonstrates Cycle-by-Cycle Current Limit and Thermal-Shutdown Features
- Demonstrates Wide Dimming Ratio
- Proven PCB and Thermal Design
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

©

## MAX20446C Evaluation Kit

## Quick Start

## Required Equipment

- MAX20446C EV kit
- 5V to 36V, 4A DC power supply
- ●
- Six series-connected HB LED strings (6 LEDs each) rated to no less than 120mA
- Current probe to measure the HB LED current

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  Follow  these steps to verify board operation.

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Verify that Jumper J17 is closed and that Jumper J22 is open (2.2MHz switching frequency selected).
- 2) Verify that Jumper J1 is closed (DS1 green LED connected).
- 3) Verify that Jumper J20 is closed (FAULT signaling enabled through DS2 red LED).
- 4) Verify that a shunt is installed across pins 1-2 on Jumper J2 (device enabled).
- 5) Verify that Jumpers JMP1-JMP3, JMP6-JMP7, and JMP9 have shunts installed across pins 1-2 (bleed resistors connected, all current sinks enabled).
- 6) Verify that a shunt is installed across pins 2-3 on Jumper J29 (LED short detection threshold set to 8V).
- 7) Verify that a shunt is installed across pins 2-3 on Jumper J30 (LED current range set to 85mA-120mA and hybrid dimming function disabled).
- 8) Verify that Jumper J8 is closed (LED current set to 100mA).
- 9) Connect the positive terminal of the power supply to the IN PCB pad. Connect the negative terminal of the power supply to a PGND PCB pad.
- 10)  Connect a DVM across OUT1 and GND PCB pads.

owners.

## MAX20446C Evaluation Kit

- 11)  Connect the six LED strings from V OUT  to the OUT1, OUT2, OUT3, OUT4, OUT5, and OUT6 PCB pads.
- 12)  Clip the current probe across the channel 1 HB LED+ wire to measure the LED current.
- 13)  Turn on the power supply and set it to 12V. The green LED (DS1) and the LED strings should be on at this point.
- 14)  Measure the voltage from each of the OUT\_ PCB pads to PGND and verify the lowest voltage is approximately 1V.
- 15)  Measure the LED current using the current probe and verify all channels.

## Detailed Description of Hardware

The MAX20446C EV kit demonstrates the MAX20446C HB  LED  driver  with  an  integrated  step-up  DC-DC  preregulator followed by six linear current sinks to drive up to six strings of LEDs. The pre-regulator switches at 2.2MHz (or at 400kHz) and operates as a current-mode controlled regulator,  providing  up  to  720mA  for  the  linear  current sinks  as  well  as  overvoltage  protection.  The  cycle-bycycle current limit is set by resistor R27, while resistors R4 and R5 set the over-voltage protection level to 29V. The preregulator power section consists of inductor L2, power-sense  resistor  R27,  Q4  MOSFET,  and  switching diode D1. The EV kit circuit operates from a 4.5V DC supply voltage up to the HB LED forward string voltage. The circuit handles load-dump conditions up to 50V.

The EV kit circuit demonstrates ultra-low shutdown current when the EN pin of the device is pulled to GND by shorting the EN PCB pad to GND. Each of the six linear current sinks (OUT1-OUT6) is capable of operating up to 48V, sinking up to 120mA per channel.

The six channels' linear current sinks are configured by selecting the current range through the SET pin (resistor values from 3.48kΩ to 27.4kΩ between SET and GND  Lower: 45mA-80mA/resistor values from 36.5kΩ to 75kΩ

between  SET  and  GND  or  SET  connected  to  V CC  Higher: 85-120mA) and by setting the LED strings' current in  steps  of  5mA  through  a  resistor  connected  between ISET pin and GND.

Jumpers  JMP1-JMP3,  JMP6-JMP7, and  JMP9  can  be used  to  disable  outputs  selectively  when  the  HB  LED string is not connected.

The EV kit features PCB pads to facilitate connecting HB LED strings for evaluation. The V OUT  PCB pads provide connections for connecting each HB LED string's anode to the DC-DC pre-regulator output. The OUT1-OUT6 PCB pads  provide  connections  for  connecting  each  HB  LED string's cathode to the respective current sink. Capacitors C11, C14, C18, C23, C24, and C25 are included on the design to prevent oscillations and provide stability when using long, untwisted HB LED connecting cables during lab  evaluation.  These  capacitors  are  not  required  if  the connection between the LED driver and the HB LEDs is low-inductance.

A DIM PCB pad is provided for using a digital PWM signal to control the brightness of the HB LEDs. Test points are also provided for easy access to the device's V CC  regulator output as well as the COMP pin and the switching node of the pre-regulator (LX).

## Power LED Enable (J1)

A  green  LED  (DS1)  is  used  to  indicate  that  the  EV  kit is  powered  on.  The  LED  can  be  disconnected  from the  power  supply,  allowing  precise  current-consumption evaluation. See Table 1 for shunt positions.

## Table 1. DS1 Enable (J1)

| SHUNT POSITION   | DS1 POWER LED   |
|------------------|-----------------|
| Closed*          | Connected       |
| Open             | Disconnected    |

* Default position.

## Enable (EN)

The EV kit features an enable input that can be used to enable/disable the device and place it in shutdown mode. To enable the EV kit whenever power is applied to IN, place the Jumper across pins 1-2 on Jumper J2. To enable the EV kit using an external enable signal, place the Jumper across pins 2-3 on J2 and apply a logic signal on the EN PCB input pad on the EV kit. A 1MΩ pulldown resistor on the EV kit pulls the EN input to GND in the event that J2 is left open or the EN signal is high impedance. Refer to the Enable section  in  the  MAX20446C IC data sheet for additional information. See Table 2 for J2 Jumper settings.

## Switching Frequency

Jumpers J17 and J22 are used to set the switching frequency of the MAX20446C to either 2.2MHz or 400kHz. When J17 is closed and J22 is open, the switching frequency is set to 2.2MHz. When J17 is open and J22 is closed, the switching frequency is nominally 400kHz.

The EV kit is optimized for 2.2MHz switching operation by default. When selecting a switching frequency of 400kHz, L2  should  be  changed  to  22µH  to  maintain  acceptable

## Table 2. Enable (J2)

| SHUNT POSITION   | EN PIN                  | EV KIT OPERATION                         |
|------------------|-------------------------|------------------------------------------|
| 1-2*             | Connected to IN         | Enabled when IN is powered               |
| 2-3              | Connected to EN PCB pad | Enabled/disabled by signal on EN PCB pad |

* Default position.

## Table 3. Switching Frequency (J17 and J22)

| SHUNT POSITION   | SHUNT POSITION   | RT PIN                                      | EV KIT OPERATION           |
|------------------|------------------|---------------------------------------------|----------------------------|
| J17              | J22              |                                             |                            |
| Closed*          | Open*            | RT connected to GND using a 13.3kΩ resistor | 2.2MHz switching frequency |
| Open             | Closed           | RT connected to GND using a 76.8kΩ resistor | 400kHz switching frequency |

* Default position.

## Evaluates: MAX20446C

efficiency.  Other  component  value  adjustments  may  be needed.

Refer to the Oscillator Frequency/External Synchronization and Spread-Spectrum Switching sections in the MAX20446C IC data sheet for more information. See Table 3 for J17 and J22 Jumper settings.

## HB LED Current

The EV kit features Jumpers J3-J6, J8, J10, J12, and J14 to  configure  the  device's  current  sinks  on  all  four  channels. The low/high LED current range is selected through Jumpers J30, J7,  J9,  J11,  J13,  J15-J16,  and  J26-J28. See Table 4 for  proper Jumper settings to configure the current-sink limits.

The OUT\_ current value is directly  related  to  the  value of the resistor on the IREF pin. R IREF = 49.9kΩ (default value on the EV kit) allows the user to obtain a maximum full-scale value of 120mA. This value can be increased to 130mA by replacing R44 resistor with R IREF = 45.3kΩ; as a result, all the OUT\_ current values shown in Table 4 will need to be proportionally scaled up.

Table 4. LED Current (J3-J6, J8, J10, J12, and J14)

| SET CONFIGURATION                                                                                                        | ISET RESISTOR VALUE   | JUMPER   | SHUNT POSITION   | OUT_CURRENT   |
|--------------------------------------------------------------------------------------------------------------------------|-----------------------|----------|------------------|---------------|
| J30 shunted in 1-2 position and one among J9/J11/J13/J27/ J28 closed  45-80mA current range                             | 3.48k                 | J14      | Closed           | 45mA          |
| J30 shunted in 1-2 position and one among J9/J11/J13/J27/ J28 closed  45-80mA current range                             | 7.15k                 | J12      | Closed           | 50mA          |
| J30 shunted in 1-2 position and one among J9/J11/J13/J27/ J28 closed  45-80mA current range                             | 12k                   | J10      | Closed           | 55mA          |
| J30 shunted in 1-2 position and one among J9/J11/J13/J27/ J28 closed  45-80mA current range                             | 18.7k                 | J8       | Closed           | 60mA          |
| J30 shunted in 1-2 position and one among J9/J11/J13/J27/ J28 closed  45-80mA current range                             | 27.4k                 | J6       | Closed           | 65mA          |
| J30 shunted in 1-2 position and one among J9/J11/J13/J27/ J28 closed  45-80mA current range                             | 39k                   | J5       | Closed           | 70mA          |
| J30 shunted in 1-2 position and one among J9/J11/J13/J27/ J28 closed  45-80mA current range                             | 59k                   | J4       | Closed           | 75mA          |
| J30 shunted in 1-2 position and one among J9/J11/J13/J27/ J28 closed  45-80mA current range                             | 84.5k                 | J3       | Closed           | 80mA          |
| J30 shunted in 1-2 position and one among J7/J15/J16/J26 closed or J30 shunted in 2-3 position*  85-120mA current range | 3.48k                 | J14      | Closed           | 85mA          |
| J30 shunted in 1-2 position and one among J7/J15/J16/J26 closed or J30 shunted in 2-3 position*  85-120mA current range | 7.15k                 | J12      | Closed           | 90mA          |
| J30 shunted in 1-2 position and one among J7/J15/J16/J26 closed or J30 shunted in 2-3 position*  85-120mA current range | 12k                   | J10      | Closed           | 95mA          |
| J30 shunted in 1-2 position and one among J7/J15/J16/J26 closed or J30 shunted in 2-3 position*  85-120mA current range | 18.7k*                | J8       | Closed           | 100mA         |
| J30 shunted in 1-2 position and one among J7/J15/J16/J26 closed or J30 shunted in 2-3 position*  85-120mA current range | 27.4k                 | J6       | Closed           | 105mA         |
| J30 shunted in 1-2 position and one among J7/J15/J16/J26 closed or J30 shunted in 2-3 position*  85-120mA current range | 39k                   | J5       | Closed           | 110mA         |
| J30 shunted in 1-2 position and one among J7/J15/J16/J26 closed or J30 shunted in 2-3 position*  85-120mA current range | 59k                   | J4       | Closed           | 115mA         |
| J30 shunted in 1-2 position and one among J7/J15/J16/J26 closed or J30 shunted in 2-3 position*  85-120mA current range | 84.5k                 | J3       | Closed           | 120mA         |

* Default position.

## Channel 1-Channel 6 Current-Sink Disabling

The EV kit features Jumpers JMP1-JMP3, JMP6-JMP7, and JMP9 which are used to put each OUT\_ current sink in one of three operating states:

- Normal operation, i.e., OUT\_ is connected to the corresponding ring on the board edge and LEDs are connected from there to the preregulator output V OUT
- OUT\_ connected through a 12kΩ resistor to GND, thus disabled
- OUT\_ shorted to GND, used to test fault detection

To  disable  a  channel,  install  a  Jumper  in  the  channel's respective Jumper across pins 1-3, connecting the OUT\_ to GND through a 12kΩ resistor. The dimming algorithm in  the  IC  requires  that  higher  numbered  OUT\_  current sinks  be  disabled  first.  For  example,  if  only  two  strings are  needed,  OUT1-OUT2  should  be  used,  with  OUT3 to OUT6 disabled. See Table 5 for Jumper settings. The 100kΩ bleed resistors are installed to prevent the OUT\_ leakage current from dimly turning on large LED strings even when the DIM signal is low.

## HB LED Digital Dimming Control

The EV kit features a DIM PCB input pad for connecting an external digital PWM signal. Apply a digital PWM signal with  a  0.8V  logic-low  level  (or  less)  and  2.1V  logic-high

level (or greater). The DIM signal frequency should be at least 100Hz. If the DIM frequency is changed during operation, then the MAX20446C must be powered off and on again to register the change. To adjust the HB LED brightness,  vary  the  signal  duty  cycle  from  0%  to  100%  and maintain a minimum pulse width of 500ns. Apply the digital PWM signal to the DIM PCB pad. The DIM input of the IC is pulled up internally with a 5μA (typ.) current source.

For additional information on the device's digital dimming feature, refer to the Dimming section in the MAX20446C IC data sheet.

## Hybrid Dimming Operation

The  hybrid  dimming  feature  can  be  enabled  by  connecting a resistor from SET to GND. The resistor value, selectable  through  the  same  Jumpers  used  to  set  the low/high LED current range, will set the hybrid dimming threshold value and the device determines whether to dim the LED current by reducing or chopping it, depending on this threshold.

For  additional  information  on  the  device's  hybrid  dimming feature, refer to the Hybrid Dimming section in the MAX20446C IC data sheet.

See Table  6 for  proper  Jumper  settings  to  enable  the hybrid dimming function and to configure the hybrid dimming threshold.

Table 5. Selecting OUT\_ Channels Operating State (JMP1-JMP3, JMP6-JMP7, and JMP9)

| OUT _   | JUMPER   | SHUNT POSITION   | CHANNEL OPERATION                                                                                   |
|---------|----------|------------------|-----------------------------------------------------------------------------------------------------|
| OUT1    | JMP9     | 1-2*             | Channel 1 operational; connect an HB LED string** between V OUT and OUT1. Bleed resistor connected. |
| OUT1    | JMP9     | 1-3              | Channel 1 not used. OUT1 current sink disabled.                                                     |
| OUT1    | JMP9     | 1-4              | Channel 1 shorted to GND to simulate a fault.                                                       |
| OUT2    | JMP7     | 1-2*             | Channel 2 operational; connect an HB LED string** between V OUT and OUT2. Bleed resistor connected. |
| OUT2    | JMP7     | 1-3              | Channel 2 not used. OUT2 current sink disabled.                                                     |
| OUT2    | JMP7     | 1-4              | Channel 2 shorted to GND to simulate a fault.                                                       |
| OUT3    | JMP6     | 1-2*             | Channel 3 operational; connect an HB LED string** between V OUT and OUT3. Bleed resistor connected. |
| OUT3    | JMP6     | 1-3              | Channel 3 not used. OUT3 current sink disabled.                                                     |
| OUT3    | JMP6     | 1-4              | Channel 3 shorted to GND to simulate a fault.                                                       |
| OUT4    | JMP3     | 1-2*             | Channel 4 operational; connect an HB LED string** between V OUT and OUT4. Bleed resistor connected. |
| OUT4    | JMP3     | 1-3              | Channel 4 not used. OUT4 current sink disabled.                                                     |
| OUT4    | JMP3     | 1-4              | Channel 4 shorted to GND to simulate a fault.                                                       |
| OUT5    | JMP2     | 1-2*             | Channel 5 operational; connect an HB LED string** between V OUT and OUT5. Bleed resistor connected. |
| OUT5    | JMP2     | 1-3              | Channel 5 not used. OUT5 current sink disabled.                                                     |
| OUT5    | JMP2     | 1-4              | Channel 5 shorted to GND to simulate a fault.                                                       |
| OUT6    | JMP1     | 1-2*             | Channel 6 operational; connect an HB LED string** between V OUT and OUT6. Bleed resistor connected. |
| OUT6    | JMP1     | 1-3              | Channel 6 not used. OUT6 current sink disabled.                                                     |
| OUT6    | JMP1     | 1-4              | Channel 6 shorted to GND to simulate a fault.                                                       |

Table 6. LED Current (J30, J7, J9, J11, J13, J15-J16, and J26-J28)

| SET RESISTOR VALUE   | JUMPER                      | JUMPER   | SHUNT POSITION   | HYBRID DIMMING THRESHOLD   |
|----------------------|-----------------------------|----------|------------------|----------------------------|
| 3.48k                | J30 shunted in 1-2 position | J13      | Closed           | Hybrid dimming disabled    |
| 8.2k                 | J30 shunted in 1-2 position | J28      | Closed           | 50% of peak LED current    |
| 14k                  | J30 shunted in 1-2 position | J27      | Closed           | 25% of peak LED current    |
| 21.5k                | J30 shunted in 1-2 position | J11      | Closed           | 12.5% of peak LED current  |
| 27.4k                | J30 shunted in 1-2 position | J9       | Closed           | 6.25% of peak LED current  |
| 36.5k                | J30 shunted in 1-2 position | J26      | Closed           | 50% of peak LED current    |
| 47k                  | J30 shunted in 1-2 position | J16      | Closed           | 25% of peak LED current    |
| 59k                  | J30 shunted in 1-2 position | J7       | Closed           | 12.5% of peak LED current  |
| 75k                  | J30 shunted in 1-2 position | J15      | Closed           | 6.25% of peak LED current  |
| SET shorted to VCC*  | J30 shunted in 2-3 position |          |                  | Hybrid dimming disabled    |

│

## Fault-Indicator Output ( FLT )

The EV kit features the device's open-drain FLT output. The FLT signal is pulled up to V CC  by resistor R48. FLT goes  low  when  an  open-LED  or  shorted-LED  string  is detected,  during  thermal  warning/shutdown,  or  during boost  undervoltage/overvoltage  events.  Keep  Jumper J20 closed to allow DS2 red LED enabling in case FLT goes  low.  Refer  to  the Fault  Protection section  in  the MAX20446C IC data sheet for additional information on the FLT signal.

## Shorted-LED Detection and Protection

In  stand-alone  mode,  the  short-LED  threshold  is  programmed through the RSDT input. R40 and R41 form a resistor-divider  from  V CC   to  RSDT  to  SGND. A  shorted LED is detected when the following condition is satisfied:

<!-- formula-not-decoded -->

When the  short-LED  threshold  is  reached,  the  affected current sink is disabled to reduce excess power dissipation  and  the FLT indicator  asserts  low.  The  short-LED detection feature is regulated through Jumper J29. See Table 7 for Jumper settings.

## Table 7. Short-LED Detection (J29)

| SHUNT POSITION   | RSDT PIN                              | EV KIT OPERATION                                   |
|------------------|---------------------------------------|----------------------------------------------------|
| 1-2*             | Connected to V CC                     | Short-LED detection disabled                       |
| 1-3              | Connected to R40/R41 resistor divider | Short-LED detection regulated via resistor divider |

* Default position.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX20446CEVKIT# | EV KIT |

# Denotes RoHS compliance.

## Overvoltage Detection and Protection

The  resistors  (R4  and  R5)  connected  to  BSTMON  are configured  for  a  V OUT\_OVP   of  29V.  This  sets  the  maximum converter output (V OUT ) voltage at 29V. During an open-LED string condition, the converter output ramps up to the output overvoltage threshold. Capacitor C3 can be added to provide noise filtering to the overvoltage signal. To reconfigure the circuit for a different voltage, replace resistor R4 with a different value using the following equation:

<!-- formula-not-decoded -->

where R5 is 10kΩ, V OUT\_OVP is the overvoltage-protection threshold desired, and R4 is the new resistor value for obtaining the desired overvoltage protection. MOSFET Q1 is an optional over-voltage protection resistor-divider disconnect switch for ultra-low shutdown current.

Refer  to  the Open-LED  Management  and  Overvoltage Protection section  in  the  MAX20446C IC data sheet for additional information.

## MAX20446C Evaluation Kit

## MAX20446C EV Kit Bill of Materials

| ITEM   | REF_DES                                                                                         | DNI/DNP   | QTY   | MFG PART #                                                                 | MANUFACTURER                      | VALUE                           | DESCRIPTION                                                                                                                  | COMMENTS   |
|--------|-------------------------------------------------------------------------------------------------|-----------|-------|----------------------------------------------------------------------------|-----------------------------------|---------------------------------|------------------------------------------------------------------------------------------------------------------------------|------------|
| 1      | C2, C6, C16                                                                                     | -         | 3     | UMK107BJ105KA; C1608X5R1H105K080AB; CL10A105KB8NNN; GRM188R61H105KAAL      | TAIYO YUDEN;TDK;SAMSUNG;MURATA    | 1UF                             | CAP; SMT (0603); 1UF; 10%; 50V; X5R; CERAMIC                                                                                 |            |
| 2      | C4                                                                                              | -         | 1     | C1608X7S2A104K080AB                                                        | TDK                               | 0.1UF                           | CAP; SMT (0603); 0.1UF; 10%; 100V; X7S; CERAMIC                                                                              |            |
| 3      | C5, C26                                                                                         | -         | 2     | C1210C475K5RAC; GRM32ER71H475KA88; CNC6P1X7R1H475K250AE                    | KEMET;MURATA;TDK                  | 4.7UF                           | CAP; SMT (1210); 4.7UF; 10%; 50V; X7R; CERAMIC                                                                               |            |
| 4      | C9, C10                                                                                         | -         | 2     | EEE-TG1H470UP                                                              | PANASONIC                         | 47UF                            | CAP; SMT (CASE_F); 47UF; 20%; 50V; ALUMINUM-ELECTROLYTIC                                                                     |            |
| 5      | C11, C12, C14, C18, C23-C25                                                                     | -         | 7     | GRM1885C1H102JA01; C1608C0G1H102J080AA; GCM1885C1H102JA16                  | MURATA;TDK;MURATA                 | 1000PF                          | CAP; SMT (0603); 1000PF; 5%; 50V; C0G; CERAMIC                                                                               |            |
| 6      | C13                                                                                             | -         | 1     | C0603C473K5RAC; GRM188R71H473KA61; GCM188R71H473KA55; CGA3E2X7R1H473K080AA | KEMET;MURATA;MURATA;TDK           | 0.047UF                         | CAP; SMT (0603); 0.047UF; 10%; 50V; X7R; CERAMIC                                                                             |            |
| 7      | C17                                                                                             | -         | 1     | CGA3E2C0G1H100D080AA                                                       | TDK                               | 10PF                            | CAP; SMT (0603); 10PF; +/-0.50PF; 50V; C0G; CERAMIC; AUTO                                                                    |            |
| 8      | C20                                                                                             | -         | 1     | GRM188R71A225KE15; CL10B225KP8NNN; C1608X7R1A225K080AC; C0603C225K8RAC     | MURATA;SAMSUNG;TDK;KEMET          | 2.2UF                           | CAP; SMT (0603); 2.2UF; 10%; 10V; X7R; CERAMIC                                                                               |            |
| 9      | C21                                                                                             | -         | 1     | GRM1885C1H222JA01                                                          | MURATA                            | 2200PF                          | CAP; SMT (0603); 2200PF; 5%; 50V; C0G; CERAMIC                                                                               |            |
| 10     | C22                                                                                             | -         | 1     | C0603C683J5RAC; C0603X683J5RAC                                             | KEMET;KEMET                       | 0.068UF                         | CAP; SMT (0603); 0.068UF; 5%; 50V; X7R; CERAMIC                                                                              |            |
| 11     | C27                                                                                             | -         | 1     | 06035C101JAT                                                               | AVX                               | 100PF                           | CAP; SMT (0603); 100PF; 5%; 50V; X7R; CERAMIC                                                                                |            |
| 12     | C28                                                                                             | -         | 1     | 06035C220JAT                                                               | AVX                               | 22PF                            | CAP; SMT (0603); 22PF; 5%; 50V; X7R; CERAMIC                                                                                 |            |
| 13     | C30                                                                                             | -         | 1     | GRM188R71C103KA01; ECJ-1VB1C10;CL10B103KO8NNN; GCJ188R71C103KA01           | MURATA;PANASONIC;SAMSUNG;MURATA   | 0.01UF                          | CAP; SMT (0603); 0.01UF; 10%; 16V; X7R; CERAMIC                                                                              |            |
| 14     | C226                                                                                            | -         | 1     | C2012X7R1H225K125AC                                                        | TDK                               | 2.2UF                           | CAP; SMT (0805); 2.2UF; 10%; 50V; X7R; CERAMIC                                                                               |            |
| 15     | COMP, LX, TP1, TP2, VCC                                                                         | -         | 5     |                                                                            | 5011 N/A                          |                                 | 5011 TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
| 16     | D1                                                                                              | -         | 1     | NRVBS260T3G                                                                | ON SEMICONDUCTOR                  | NRVBS260T3G                     | DIODE; SCH; SURFACE MOUNT SCHOTTKY POWER RECTIFIER; SMB; PIV=60V; IF=2A                                                      |            |
| 17     | D2, D3                                                                                          | -         | 2     | BZG03C18                                                                   | VISHAY SEMICONDUCTORS             | 18V                             | DIODE; ZNR; SMT (DO-214AC); VZ=18V; IZM=0.025A                                                                               |            |
| 18     | D4                                                                                              | -         | 1     | B160B-13-F                                                                 | DIODES INCORPORATED               | B160B-13-F                      | DIODE; SCH; SMB (DO-214AA); PIV=60V; IF=1A                                                                                   |            |
| 19     | D5                                                                                              | -         | 1     | CMPD914E                                                                   | CENTRAL SEMICONDUCTOR             | CMPD914E                        | DIODE; SWT; SMT (SOT23-3); PIV=150V; IF=0.1A                                                                                 |            |
| 20     | DIM, EN, FLT, GND, GND1, GND2, IN, OUT1-OUT6, PGND, PGND1, PGND2, RSDT, SYNC, VOUT, VOUT1-VOUT3 | -         | 22    | 9020 BUSS                                                                  | WEICO WIRE                        | MAXIMPAD                        | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                     |            |
| 21     | DS1                                                                                             | -         | 1     | LGL29K-F2J1-24-Z                                                           | OSRAM                             | LGL29K-F2J1-24-Z                | DIODE; LED; SMARTLED; GREEN; SMT; PIV=1.7V; IF=0.02A                                                                         |            |
| 22     | DS2                                                                                             | -         | 1     | LS L29K-G1J2-1-Z                                                           | OSRAM                             | LS L29K-G1J2-1-Z                | DIODE; LED; SMART; RED; SMT (0603); PIV=1.8V; IF=0.02A; -40 DEGC TO +100 DEGC                                                |            |
| 23     | J1, J3-J17, J20, J22, J26-J28                                                                   | -         | 21    | PBC02SAAN                                                                  | SULLINS ELECTRONICS CORP.         | PBC02SAAN                       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                    |            |
| 24     | J2, J29, J30                                                                                    | -         | 3     | PEC03SAAN                                                                  | SULLINS                           | PEC03SAAN                       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                    |            |
| 25     | J25                                                                                             | -         | 1     | HTSW-112-11-G-S-RA                                                         | SAMTEC                            | HTSW-112-11-G-S-RA              | CONNECTOR; MALE; THROUGH HOLE; SQUARE POST HEADER; RIGHT ANGLE; 12PINS ;                                                     |            |
| 26     | JMP1-JMP3, JMP6, JMP7, JMP9                                                                     | -         | 6     | PEC04SAAN                                                                  | SULLINS ELECTRONICS CORP.         | PEC04SAAN                       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                                    |            |
| 27     | L1                                                                                              | -         | 1     | XAL4020-601ME                                                              | COILCRAFT                         | 0.60UH                          | INDUCTOR; SMT; CORE MATERIAL= COMPOSITE; 0.60UH; TOL=+/-20%; 11.7A                                                           |            |
| 28     | L2                                                                                              | -         | 1     | MSS1246T-472ML                                                             | COILCRAFT                         | 4.7UH                           | INDUCTOR; SMT; FERRITE CORE; 4.7UH; TOL=+/-20%; 9.70A                                                                        |            |
| 29     | MH1-MH4                                                                                         | -         | 4     |                                                                            | 9032 KEYSTONE                     |                                 | 9032 MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                               |            |
| 30     | Q1                                                                                              | -         | 1     | NDS351AN                                                                   | FAIRCHILD SEMICONDUCTOR           | NDS351AN                        | ENHANCEMENT MODE FIELD EFFECT TRANSISTOR; NCH;                                                                               |            |
|        |                                                                                                 |           |       |                                                                            |                                   |                                 | TRAN; N-CHANNEL LOGIC LEVEL SUPERSOT-3; PD-(0.5W); I-(1.4A); V-(30V)                                                         |            |
| 31     | Q2                                                                                              | -         | 1     | MMBT3906-7-F                                                               | DIODES INCORPORATED               | MMBT3906-7-F                    | TRAN; 40V PNP SMALL SIGNAL TRANSISTOR; PNP; SOT-23; PD-(0.31W); I-(-0.2A); V-(-40V)                                          |            |
| 32 33  | Q3                                                                                              | -         | 1 1   | SUM55P06-19L-E3                                                            | VISHAY SILICONIX ON SEMICONDUCTOR | SUM55P06-19L-E3 NTMFS5C673NLT1G | TRAN; P-CHANNEL 60V D-S ENHANCEMENT MODE MOSFET; PCH; TO-263-3; PD-(3.75W); I-(-55A); V-(-60V)                               |            |
|        | Q4                                                                                              | -         |       | NTMFS5C673NLT1G                                                            |                                   |                                 | TRAN; NCH; MOSFET; SO-8FL; PD-(46W); I-(50A); V-(60V)                                                                        |            |
| 34     | Q5                                                                                              | -         | 1     | SI1317DL-T1-GE3                                                            | VISHAY SILICONIX                  | SI1317DL-T1-GE3                 | TRAN; P-CHANNEL 20V (D-S) MOSFET; PCH; SOT-323; PD-(0.5W); I-(-1.4A); V-(-20V)                                               |            |
| 35     | R2                                                                                              | -         | 1     | CRCW06033K00FK                                                             | VISHAY DALE                       | 3K                              | RES; SMT (0603); 3K; 1%; +/-100PPM/DEGC; 0.1000W                                                                             |            |

Evaluates: MAX20446C

## MAX20446C EV Kit Bill of Materials (continued)

| ITEM   | REF_DES                       | DNI/DNP   | QTY   | MFG PART #                                                                       | MANUFACTURER                       | VALUE            | DESCRIPTION                                                                                                                                                                                                    | COMMENTS   |
|--------|-------------------------------|-----------|-------|----------------------------------------------------------------------------------|------------------------------------|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 36     | R3, R7                        | -         |       | CRCW08050000ZS;RC2012J000                                                        | DIGI-KEY                           |                  | 0 RES; SMT (0805); 0; JUMPER; JUMPER; 0.1250W                                                                                                                                                                  |            |
| 37     | R4                            | -         | 2 1   |                                                                                  | VISHAY DALE                        | 226K             | RES; SMT (0805); 226K; 1%; +/-100PPM/DEGC; 0.1250W                                                                                                                                                             |            |
| 38     | R5                            | -         | 1     | CRCW0805226KFK TNPW080510K0BE;ERA-6YEB103V                                       | VISHAY DALE;PANASONIC              | 10K              | RES; SMT (0805); 10K; 0.10%; +/-25PPM/DEGK; 0.1250W                                                                                                                                                            |            |
| 39     | R6                            | -         | 1     | 301-10K-RC                                                                       | XICON                              | 10K              | RES; SMT (0603); 10K; 5%; +/-200PPM/DEGC; 0.0630W                                                                                                                                                              |            |
| 40     | R8                            | -         | 1     | CRCW12060000ZS;ERJ-8GEY0R00                                                      | VISHAY DALE;PANASONIC              |                  | 0 RES; SMT (1206); 0; JUMPER; JUMPER; 0.2500W                                                                                                                                                                  |            |
| 41     | R9                            | -         | 1     | CRCW06031M00FK; MCR03EZPFX1004                                                   | VISHAY DALE;ROHM                   | 1M               | RES; SMT (0603); 1M; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                               |            |
| 42     | R10, R17, R23, R34, R37, R43  | -         | 6     | CRCW0603100KFK;RC0603FR-07100KL; RC0603FR-13100KL;ERJ-3EKF1003; AC0603FR-07100KL | VISHAY DALE;YAGEO;YAGEO;PANASONIC  | 100K             | RES; SMT (0603); 100K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                             |            |
| 43     | R11                           | -         | 1     | CRCW060318K0FK                                                                   | VISHAY DALE                        | 18K              | RES; SMT (0603); 18K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                              |            |
| 44     | R12, R19, R22, R29, R36, R38, | -         | 7     | CRCW060312K0FK                                                                   | VISHAY DALE                        | 12K              | RES; SMT (0603); 12K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                              |            |
| 45     | R13                           | -         | 1     | RC0603FR-0784K5L                                                                 | YAGEO PHYCOMP                      | 84.5K            | RES; SMT (0603); 84.5K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                            |            |
| 46     | R14                           | -         | 1     | ERJ-8CWFR050                                                                     | PANASONIC                          |                  | 0.05 RES; SMT (1206); 0.05; 1%; +/-75PPM/DEGC; 1W                                                                                                                                                              |            |
| 47     | R15, R49                      | -         | 2     | CRCW06031K00FK;ERJ-3EKF1001; CR0603AFX-1001ELF                                   | VISHAY; PANASONIC;BOURNS           | 1K               | RES; SMT (0603); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                               |            |
| 48     | R16, R53                      | -         | 2     | ERJ-3EKF5902                                                                     | PANASONIC                          | 59K              | RES; SMT (0603); 59K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                              |            |
| 49     | R18, R21                      | -         | 2     | CRCW060327K4FK;ERJ-3EKF2742                                                      | VISHAY DALE;PANASONIC              | 27.4K            | RES; SMT (0603); 27.4K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                            |            |
| 50     | R20                           | -         | 1     | ERJ-3EKF1872;CRCW060318K7FK                                                      | PANASONIC;VISHAY                   | 18.7K            | RES; SMT (0603); 18.7K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                            |            |
| 51     | R24                           | -         | 1     | CRCW06033K74FK                                                                   | VISHAY DALE                        | 3.74K            | RES; SMT (0603); 3.74K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                            |            |
| 52     | R25                           | -         | 1     | ERJ-3EKF7502                                                                     | PANASONIC                          | 75K              | RES; SMT (0603); 75K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                              |            |
| 53     | R26                           | -         | 1     | CRCW060310R0FK; MCR03EZPFX10R0;ERJ-3EKF10R0                                      | VISHAY DALE;ROHM                   |                  | 10 RES; SMT (0603); 10; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                            |            |
| 54     | R27                           | -         | 1     | WSL1206R0400F                                                                    | VISHAY DALE                        |                  | 0.04 RES; SMT (1206); 0.04; 1%; +/-75PPM/DEGC; 0.2500W                                                                                                                                                         |            |
| 55     | R28                           | -         | 1     | ERJ-3EKF7151                                                                     | PANASONIC                          | 7.15K            | RES; SMT (0603); 7.15K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                            |            |
| 56     | R30, R54                      | -         | 2     | ERJ-3EKF3481                                                                     | PANASONIC                          | 3.48K            | RES; SMT (0603); 3.48K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                            |            |
| 57     | R32                           | -         | 1     | CRCW060339K0FK                                                                   | VISHAY DALE                        | 39K              | RES; SMT (0603); 39K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                              |            |
| 58     | R35                           | -         | 1     | CRCW06038K06FK;ERJ-3EKF8061                                                      | VISHAY DALE;PANASONIC              | 8.06K            | RES; SMT (0603); 8.06K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                            |            |
| 59     | R39                           | -         | 1     | CRCW060376K8FK                                                                   | VISHAY DALE                        | 76.8K            | RES; SMT (0603); 76.8K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                            |            |
| 60     | R40                           | -         | 1     | CRCW06033012FK                                                                   | VISHAY DALE                        | 30.1K            | RES; SMT (0603); 30.1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                            |            |
| 61     | R41                           | -         | 1     | MCR03EZPFX2002;ERJ-3EKF2002; CR0603-FX-2002ELF;CRCW060320K0FK                    | ROHM;PANASONIC;BOURNS;VISHAY       | 20K              | RES; SMT (0603); 20K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                              |            |
| 62     | R42, R48, R55                 | -         | 3     | CHPHT0603K1002FGT                                                                | VISHAY SFERNICE                    | 10K              | RES; SMT (0603); 10K; 1%; +/-100PPM/DEGC; 0.0125W                                                                                                                                                              |            |
| 63     | R44                           | -         | 1     | CRCW060349K9FK;ERJ-3EKF4992                                                      | VISHAY DALE;PANASONIC              | 49.9K            | RES; SMT (0603); 49.9K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                            |            |
| 64     | R50                           | -         | 1     | CRCW060347K0FK                                                                   | VISHAY DALE                        | 47K              | RES; SMT (0603); 47K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                              |            |
| 65     | R51                           | -         | 1     | RN73C1J10RBTG; 1614350-2                                                         | TE CONNECTIVITY;TE                 |                  | 10 RES; SMT (0603); 10; 0.10%; +/-10PPM/DEGC; 0.0630W                                                                                                                                                          |            |
| 66     | R52                           | -         | 1     | CRCW060313K3FK;ERJ-3EKF1332                                                      | CONNECTIVITY VISHAY DALE;PANASONIC | 13.3K            | RES; SMT (0603); 13.3K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                            |            |
| 67     | R56                           | -         | 1     | ERJ-3EKF3652;CRCW060336K5FK                                                      | PANASONIC;VISHAY                   | 36.5K            | RES; SMT (0603); 36.5K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                            |            |
| 68     | R57                           | -         | 1     | CRCW060321K5FK                                                                   | VISHAY DALE                        | 21.5K            | RES; SMT (0603); 21.5K; 1%; +/-100PPM/DEGK; 0.1000W                                                                                                                                                            |            |
| 69     | R58                           | -         | 1     | ERJ-3EKF1402;CRCW060314K0FK                                                      | PANASONIC;VISHAY                   | 14K              | RES; SMT (0603); 14K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                              |            |
| 70     | R59                           | - -       | 1     | CRCW06038K20FK                                                                   | VISHAY DALE                        | 8.2K             | RES; SMT (0603); 8.2K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                             |            |
| 71     | U1                            |           | 1     | MAX20446CATGA/V+                                                                 | MAXIM                              | MAX20446CATGA/V+ | EVKIT PART - IC; DRV; AUTOMOTIVE 6-CHANNEL BACKLIGHT DRIVER WITH BOOST/ SEPIC CONTROLLER AND HYBRID DIMMING; PACKAGE OUTLINE DRAWING: 21-0139; LAND PATTERN NUMBER: 90-0022; PACKAGE CODE: T2444+4C; TQFN24-EP |            |
| 72     | PCB                           | -         | 1     | MAX20446C                                                                        | MAXIM                              | PCB              | PCB:MAX20446C                                                                                                                                                                                                  | -          |
| 73     | C1, C19, C3                   | DNP       | 0     | N/A                                                                              | N/A                                | OPEN             | CAPACITOR; SMT (0603); OPEN; FORMFACTOR                                                                                                                                                                        |            |
| 74     | C7, C8                        | DNP       | 0     | C1210C475K5RAC; GRM32ER71H475KA88; CNC6P1X7R1H475K250AE                          | KEMET;MURATA;TDK                   | 4.7UF            | CAP; SMT (1210); 4.7UF; 10%; 50V; X7R; CERAMIC                                                                                                                                                                 |            |
| 75     | C15                           | DNP       | 0     | UMK107BJ105KA; C1608X5R1H105K080AB; CL10A105KB8NNN; GRM188R61H105KAAL            | TAIYO YUDEN;TDK;SAMSUNG;MURATA     | 1UF              | CAP; SMT (0603); 1UF; 10%; 50V; X5R; CERAMIC                                                                                                                                                                   |            |
| 76     | R1, R33, R31                  | DNP DNP   | 0 0   | N/A                                                                              | N/A                                | OPEN             | RESISTOR; 0603; OPEN; FORMFACTOR                                                                                                                                                                               |            |
| 77     | C29, C31                      |           |       | N/A                                                                              | N/A                                |                  | EVKIT USE ONLY;DUAL PACKAGE OUTLINE 0603 AND 0805 NON-POLAR CAPACITOR                                                                                                                                          |            |
| TOTAL  |                               |           | 156   |                                                                                  |                                    | OPEN             |                                                                                                                                                                                                                |            |

Evaluates: MAX20446C

## MAX20446C Evaluation Kit

## MAX20446C EV Kit Schematics

Evaluates: MAX20446C

| MECHANICAL   | MOUNTING HOLE MTHOLE MTHOLE MTHOLE MTHOLE MH1 1 MH2 1 MH3 1 MH4 1   |
|--------------|---------------------------------------------------------------------|

## MAX20446C EV Kit Schematics (continued)

<!-- image -->

## MAX20446C EV Kit PCB Layout Diagrams

MAX20446C EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX20446C EV Kit PCB Layout-Internal Layer 2

<!-- image -->

MAX20446C EV Kit PCB Layout-Top Layer

<!-- image -->

│

## MAX20446C EV Kit PCB Layout Diagrams (continued)

MAX20446C EV Kit PCB Layout-Internal Layer 3

<!-- image -->

MAX20446C EV Kit PCB Layout-Bottom Layer

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/21            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│