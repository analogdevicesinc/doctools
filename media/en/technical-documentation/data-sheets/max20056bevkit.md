<!-- lastmod 2022-08-03 -->
## MAX20056B Evaluation Kit

## General Description

The MAX20056B evaluation kit (EV kit) demonstrates the MAX20056B,  an  integrated,  6-channel  high-brightness LED driver with very wide PWM dimming ratio and phase shifting for automotive displays.

The  EV  kit  operates  from  a  DC  supply  voltage  from 4.5V  to  36V  and  the  switching  frequency  is  set  at 400kHz. Spread-spectrum  mode  (SSM)  is  enabled for  EMI  improvement.  The  EV  kit  demonstrates  direct dim  and  phase-shifted  pulse-width  modulation  (PWM) dimming. The EV kit also demonstrates short-LED, openLED, and overtemperature-fault protection.

For operation at switching frequencies other than 400kHz, the external components should be chosen according to the calculations in the MAX20056B IC data sheet.

Note: The MAX20056B EV kit is identical to the MAX20056 EV kit, except for the U1 component. The photos and fig -ures  indicate  MAX20056,  but  there  are  no  differences between this version and the standard version.

## MAX20056B EV Kit Photo

<!-- image -->

<!-- image -->

## Features

- Input Voltage: 4.5V to 36V (Up to 50V Load Dump)
- Drives Six Strings of HB LEDs
- LED Current: 20mA to 120mA
- Demonstrates Both Phase-Shifted and Direct PWM Dimming
- Demonstrates Undervoltage Lockout and Output Short Protection
- Demonstrates Cycle-by-Cycle Current Limit and Thermal-Shutdown Feature
- Demonstrates 5V, 30mA LDO Output Capability
- Proven PCB and Thermal Design
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX20056B

## Quick Start

## Required Equipment

- MAX20056B EV kit
- 5V to 36V, 4A DC power supply
- Two digital voltmeters (DVMs)
- Six series-connected HB LED strings rated to no less than 120mA
- Current probe to measure the HB LED current

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that a shunt is installed across pins 1-2 on jumper JU15 (device enabled).
- 2) Verify that a shunt is installed across pins 1-2 on jumper JU16 (400kHz switching frequency).
- 3) Verify that a shunt is installed across pins 1-4 on jumper JU13 (80mA LED current per string).
- 4) Verify that a shunt is installed across pins 1-2 on jumper JU14 (phase-shift operation enabled).
- 5) Verify that a shunt is installed across pins 1-2 on jumpers JU1-JU6 (bleed resistors connected, all current sinks enabled).
- 6) Verify that jumpers JU7-JU12 are open (LED strings not shorted).
- 7) Connect the power supply to the IN PCB pad and the power-supply ground to the PGND PCB pad.
- 8) Connect a DVM across the OUT1 and PGND PCB pads.
- 9) Connect each HB LED string as follows:
- Channel 1: Connect HB LED string anode to the VOUT PCB pad and cathode to the OUT1 PCB pad
- Channel 2: Connect HB LED string anode to the VOUT PCB pad and cathode to the OUT2 PCB pad
- Channel 3: Connect HB LED string anode to the VOUT PCB pad and cathode to the OUT3 PCB pad
- Channel 4: Connect HB LED string anode to the VOUT PCB pad and cathode to the OUT4 PCB pad
- Channel 5: Connect HB LED string anode to the VOUT PCB pad and cathode to the OUT5 PCB pad
- Channel 6: Connect HB LED string anode to the VOUT PCB pad and cathode to the OUT6 PCB pad

## Evaluates: MAX20056B

- 10)  Clip the current probe across the channel 1 HB LED+ wire to measure the HB LED current.
- 11)  Turn on the power supply and set to 12V.
- 12)  Measure the voltage from each of the OUT\_ PCB pads to PGND and verify the lowest voltage is approximately 1.1V.
- 13)  Measure the HB LED current using the current probe and verify all channels.

## Detailed Description of Hardware

The MAX20056B EV kit demonstrates the MAX20056B HB LED driver with an integrated step-up DC-DC preregulator followed by six linear current sinks for driving up to six strings of  LEDs.  The  preregulator  switches  at  400kHz  and  operates as a current-mode-controlled regulator, providing up to 720mA for the linear circuit as well as overvoltage protection. The cycle-by-cycle current limit is set by resistors R26 and R27, while resistors R30 and R31 set the OVP voltage to 29V.  The  preregulator  power  section  consists  of  inductor L2, MOSFET N1, power-sense resistors R26 and R27, and switching diode D2. The EV kit circuit operates from a 4.5V DC supply voltage up to the HB LED forward string voltage. The circuit handles load-dump conditions up to 50V.

The EV kit circuit demonstrates ultra-low shutdown current when the EN pin of the device is pulled to ground by shorting the EN PCB pad to ground. Each of the six linear current sinks (OUT1-OUT6) is capable of operating up to 48V, sinking up to 120mA per channel. Each of the six channel's linear current sinks is configurable for 120mA, 100mA, 80mA, or 20mA, or can be disabled independently. Jumpers JU1-JU6 provide the disable feature when the HB LED string is not connected.  See  the Channel  1-Channel  6  Current-Sink Disabling section.  Resistors  R4,  R7,  R8,  R12,  and  jumper JU13  configure  the  linear  current  setting  for  the  device's ISET pin, which sets the HB LED string current. The EV kit features PCB pads to facilitate connecting HB LED strings for  evaluation.  The  VOUT  PCB  pads  provide  connections for  connecting each HB LED string's anode to the DC-DC preregulator  output.  The  OUT1-OUT6  PCB  pads  provide connections  for  connecting  each  HB  LED  string's  cathode to  the  respective  linear  channel's  current  sink. Additionally, 2-pin  headers  (JU7-JU12)  provide  convenient  access  to the VOUT and respective OUT\_ connections when using a twisted-pair wiring connection scheme. On each header, pin 1 provides access to the respective OUT\_ connection and pin 2 provides access to the VOUT connection. Capacitors C7, C8, C10, C11, C14, and C15 are included on the design

## MAX20056B Evaluation Kit

to  prevent  oscillations  and  provide  stability  when  using long,  untwisted  HB  LED  connecting  cables  during  lab evaluation.  These  capacitors  are  not  required  if  the connection between the LED driver and the HB LEDs is a low-inductance connection.

A  DIM  PCB  pad  is  provided  for  using  a  digital  PWM signal to control the brightness of the HB LEDs. The EV kit features  both  phase-shifted  PWM  dimming  and  direct PWM dimming, configurable by jumper JU14. Test points are also provided for easy access to the device's V CC .

## Enable (EN)

The EV kit features an enable input that can be used to enable/disable the device and place it in shutdown mode. To  enable  the  EV  kit  whenever  power  is  applied  to  IN, place  the  jumper  across  pins  1-2  on  jumper  JU15.  To enable the EV kit from an external enable signal, place the jumper across pins 2-3 on JU15. In this configuration, apply a logic signal on the EN PCB input pad on the EV kit. A  1MΩ pulldown resistor on the EV kit pulls the EN input to ground in the event that JU15 is left open or the EN signal is high impedance. Refer to the Enable (EN) section  in  the  MAX20056B  IC  data  sheet  for  additional information. See Table 1 for JU15 jumper settings.

## HB LED Current

The  EV  kit  features  jumper  JU13  to  reconfigure  the device's current sinks on all six channels. Place a shunt on JU13 to configure the current-sink limits according to Table 2. To reconfigure the circuit for another current-sink

## Table 1. Enable (JU15)

| SHUNT POSITION   | EN PIN                  | EV KIT OPERATION                |
|------------------|-------------------------|---------------------------------|
| 1-2              | Connected to IN         | Enabled when IN is powered      |
| 2-3              | Connected to EN PCB pad | Enabled by signal on EN PCB pad |

## Evaluates: MAX20056B

threshold,  replace  resistor  R12  and  use  the  following equation to calculate a new value for the desired current:

<!-- formula-not-decoded -->

where I LED  is the desired HB LED current in amps and R12 is  the  new  resistor  value  for  obtaining  the  desired HB  LED  current.  Remove  JU13  when  configuring  for another current-sink threshold. If the HB LED current is reconfigured  for  a  different  current,  other  components on  the  EV  kit  may  need  to  be  modified.  Refer  to  the MAX20056B IC data sheet to calculate other component values.

## Channel 1-Channel 6 Current-Sink Disabling

The  EV  kit  features  jumpers  JU1-JU6  to  disable  each channel's OUT\_ current sink. To disable a channel, install a jumper in the channel's respective OUT\_ jumper across pins 2-3, connecting the OUT\_ to ground through a 12kΩ resistor. Remove the shunt or connect the shunt across pins  1-2  of  the  jumper  to  use  the  channel's  OUT\_  sink capability. The dimming algorithm inside the IC requires that  higher  numbered  OUT\_  current  sinks  be  disabled first.  For  example,  if  only  four  strings  are  needed, OUT1-OUT4  should  be  used,  with  OUT5  and  OUT6 disabled. See Table 3 for JU1-JU6 jumper settings. The 100kΩ bleed resistors are installed to prevent the OUT\_ leakage current from dimly turning on large LED strings even when the DIM signal is low. Refer to the VOUT to OUT\_ Bleed Resistors section in the MAX20056B IC data sheet for more information.

## Table 2. HB LED Current (JU13)

| SHUNT POSITION   | ISET RESISTOR SETTING (kΩ)   |   HB LED CURRENT- SINK SETTING (mA) |
|------------------|------------------------------|-------------------------------------|
| Open             | 75                           |                                  20 |
| 1-4              | 75 &#124;&#124; 25 = 18.75   |                                  80 |
| 1-3              | 75 &#124;&#124; 18.7 = 15    |                                 100 |
| 1-2              | 75 &#124;&#124; 15 = 12.5    |                                 120 |

│

Table 3. Disabling Channel 1-Channel 6 (JU1-JU6)

| OUT_   | JUMPER   | SHUNT POSITION   | CHANNEL OPERATION                                                                                     |
|--------|----------|------------------|-------------------------------------------------------------------------------------------------------|
| OUT1   | JU1      | 1-2              | Channel 1 operational; connect an HB LED string* between VOUT and OUT1. Bleed resistor connected.     |
| OUT1   | JU1      | 2-3              | Channel 1 not used. OUT1 current sink disabled.                                                       |
| OUT1   | JU1      | Open             | Channel 1 operational; connect an HB LED string* between VOUT and OUT1. Bleed resistor not connected. |
| OUT2   | JU2      | 1-2              | Channel 2 operational, connect an HB LED string* between VOUT and OUT2. Bleed resistor connected.     |
| OUT2   | JU2      | 2-3              | Channel 2 not used. OUT2 current sink disabled.                                                       |
| OUT2   | JU2      | Open             | Channel 2 operational; connect an HB LED string* between VOUT and OUT2. Bleed resistor not connected. |
| OUT3   | JU3      | 1-2              | Channel 3 operational; connect an HB LED string* between VOUT and OUT3. Bleed resistor connected.     |
| OUT3   | JU3      | 2-3              | Channel 3 not used. OUT3 current sink disabled.                                                       |
| OUT3   | JU3      | Open             | Channel 3 operational; connect an HB LED string* between VOUT and OUT3. Bleed resistor not connected. |
| OUT4   | JU4      | 1-2              | Channel 4 operational; connect an HB LED string* between VOUT and OUT4. Bleed resistor connected.     |
| OUT4   | JU4      | 2-3              | Channel 4 not used. OUT4 current sink disabled.                                                       |
| OUT4   | JU4      | Open             | Channel 4 operational; connect an HB LED string* between VOUT and OUT4. Bleed resistor not connected. |
| OUT5   | JU5      | 1-2              | Channel 5 operational; connect an HB LED string* between VOUT and OUT5. Bleed resistor connected.     |
| OUT5   | JU5      | 2-3              | Channel 5 not used. OUT5 current sink disabled.                                                       |
| OUT5   | JU5      | Open             | Channel 5 operational; connect an HB LED string* between VOUT and OUT5. Bleed resistor not connected. |
| OUT6   | JU6      | 1-2              | Channel 6 operational; connect an HB LED string* between VOUT and OUT6. Bleed resistor connected.     |
| OUT6   | JU6      | 2-3              | Channel 6 not used. OUT6 current sink disabled.                                                       |
| OUT6   | JU6      | Open             | Channel 6 operational; connect an HB LED string* between VOUT and OUT6. Bleed resistor not connected. |

## HB LED Digital Dimming Control

The EV kit features a DIM PCB input pad for connecting an external digital PWM signal. Apply a digital PWM signal with a 0.8V logic-low level (or less) and 2.1V logic-high level  (or  greater).  The  DIM  signal  frequency  should  be at  least  100Hz.  To  adjust  the  HB  LED  brightness,  vary the  signal  duty  cycle  from  0%  to  100%  and  maintain  a minimum  pulse  width  of  500ns.  Apply  the  digital  PWM signal  to  the  DIM  PCB  pad. The  DIM  input  of  the  IC  is pulled up internally with a 5µA (typ) current source. For additional  information  on  the  device's  dimming  feature, refer to the PWM Dimming section in the MAX20056B IC data sheet.

│

## Phase-Shift Operation

The EV kit demonstrates the phase-shifting feature of the IC. Install a shunt across pins 1-2 on jumper JU14 to enable phase shifting of the LED strings. Install a shunt across pins  2-3  on  JU14  to  enable  direct  dimming  of  the  LED strings (see Table 4). When phase shifting is enabled, each current sink's turn-on is separated by 360º/n, where n is the  number  of  enabled  strings.  When  phase  shifting  is disabled, the dimming of each string is controlled directly by  the  DIM  input,  and  all  current  sinks  turn  on  and  off at  the  same  time.  The  PSEN  input  should  not  be  left unconnected. Refer to the Phase Shifting section in the MAX20056B IC data sheet for more information.

## Switching Frequency

The EV kit  is  optimized  for  400kHz  switching  operation by default. Install jumper JU16 so the total RT resistance is  approximately  20kΩ.  If  another  switching  frequency is  desired,  the  relevant  external  components  should  be replaced according to the calculations in the MAX20056B IC data sheet. Refer to the Oscillator Frequency section in the MAX20056B IC data sheet for more information.

## Fault-Indicator Output ( FLT )

The  EV  kit  features  the  device's FLT output.  The FLT signal is pulled up to V CC  by resistor R1. An open-drain fault-flag  output  ( FLT )  goes  low  when  an  open-LED or  shorted-LED  string  is  detected,  or  during  thermal shutdown.  Refer  to  the Fault  Protections section  in  the MAX20056B IC data sheet for additional information on the FLT signal.

## Table 4. Phase-Shift Enable (JU14)

| SHUNT POSITION   | PSEN PIN          | EV KIT OPERATION                 |
|------------------|-------------------|----------------------------------|
| 1-2              | Connected to VCC  | Phase-shift operation enabled    |
| 2-3              | Connected to SGND | Direct dimming operation enabled |

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX20056BEVKIT# | EV kit |

# Denotes RoHS compliant.

## Shorted-LED Detection and Protection

The  short-LED  threshold  is  programmed  through  the RSDT  input.  R10  and  R11  form  a  resistor-divider  from VCC to RSDT to SGND. A shorted LED is detected when the following condition is satisfied:

<!-- formula-not-decoded -->

When  the  short-LED  threshold  is  reached,  that  current sink is disabled to reduce excess power dissipation and the FLT indicator asserts low.

## Overvoltage Detection and Protection

The device's OVP resistors (R30 and R31) are configured for a V OUT\_OVP  of 29V. This sets the maximum converter output (V OUT ) voltage at 29V. During an open-LED string condition,  the  converter  output  ramps  up  to  the  output overvoltage  threshold.  Capacitor  C16  provides  noise filtering to the OVP signal. To reconfigure the circuit for a different OVP voltage, replace resistor R30 with a different value using the following equation:

<!-- formula-not-decoded -->

Where  R31  is  10kΩ,  V OUT\_OVP  is  the  overvoltageprotection threshold desired, and  R30  is the  new resistor  value  for  obtaining  the  desired  overvoltage  protection. MOSFET N2 is an optional OVP resistor-divider disconnect switch for ultra-low shutdown current. Refer to the Open-LED Management and Overvoltage Protection section  in  the  MAX20056B  IC  data  sheet  for  additional information.

│

## MAX20056B EV Kit Bill of Materials

| QTY                       | REF_DES                     | VALUE                | MFG PART #                                                                                 | MANUFACTURER                                |
|---------------------------|-----------------------------|----------------------|--------------------------------------------------------------------------------------------|---------------------------------------------|
| 1                         | C1                          | 0.1UF                | ECJ-1VB1H104K;GRM188R71H104KA93;CGJ3E2X7R1H104K080AA;                                      | PANASONIC;MURATA;TDK;TDK; ELECTRO-MECHANICS |
| 3                         | C2, C13, C21                | 1UF                  | C1608X7R1H104K080AA;CL10B104KB8NNN UMK107AB7105KA;CC0603KRX7R9BB105                        | SAMSUNG TAIYO YUDEN;YAGEO                   |
| 1                         | C3                          | 2.2UF                | GRM188R71A225KE15;CL10B225KP8NNN; C1608X7R1A225K080AC                                      | MURATA;SAMSUNG;TDK                          |
| 1                         | C4                          | 47UF                 | EEE-TG1H470UP                                                                              | PANASONIC                                   |
| 1                         | C5                          | 2.2UF                | C0603C225K5RAC                                                                             | KEMET                                       |
| 1                         | C6                          | 0.047UF              | C0603C473K5RAC;GRM188R71H473KA61; GCM188R71H473KA55;CGA3E2X7R1H473K080AA                   | KEMET;MURATA;MURATA;TDK                     |
| 6                         | C7, C8, C10, C14, C15       | 1000PF               | GRM1885C1H102JA01;C1608C0G1H102J080AA; GCM1885C1H102JA16                                   | MURATA;TDK;MURATA                           |
| 1                         | C11, C9                     | 100PF                | C0603H101J5GAC                                                                             | KEMET                                       |
| 1                         | C12                         | 10PF                 | ECJ-1VC1H100D                                                                              | PANASONIC                                   |
| 0                         | C16                         | 22PF                 | GRM39C0G220J50V; GRM1885C1H220J; C1608C0G1H220J080AA                                       | MURATA;MURATA;TDK                           |
| 4                         | C17, C22-C24                | 4.7UF                | C1210C475K5RAC;GRM32ER71H475KA88;GRM32ER71H475KA88; GCM32ER71H475KA55;CGA6P3X7R1H475K250AB | KEMET;MURATA;MURATA;                        |
| 1                         | C18                         | 56UF                 | 50HVP56M                                                                                   | MURATA;TDK SUNCON                           |
| 0                         | C19, C20                    | OPEN                 | N/A                                                                                        | N/A                                         |
| 1 D1                      |                             | CMPD914              | CMPD914                                                                                    | CENTRAL SEMICONDUCTOR                       |
| 1                         | D2                          | NRVBS260T3G          | NRVBS260T3G                                                                                | ON SEMICONDUCTOR                            |
| 1 D3 DIM, EN, FLT,        | IN, OUT1-OUT6,              | 18V                  | BZG03C18                                                                                   | VISHAY SEMICONDUCTORS                       |
| 19 PGND, SGND, SGND_PAD1, | PGND_PAD1, PGND_PAD2, VOUT, | MAXIMPAD             | 9020 BUSS                                                                                  | WEICO WIRE                                  |
| 1 FB                      | VOUT_PAD1-VOUT_PAD3         |                      | 0 RC3216J000CS                                                                             | SAMSUNG ELECTRONICS                         |
| 1                         | JU13                        | JUMPER_3WAY          | ANY                                                                                        | ANY                                         |
| 8 JU1-JU6,                | JU14, JU15                  | PEC03SAAN            | PEC03SAAN                                                                                  | SULLINS                                     |
| 7 JU7-JU12, JU16          |                             | PEC02SAAN            | PEC02SAAN                                                                                  | SULLINS                                     |
| 1                         | L1                          | 0.60UH               | XAL4020-601ME                                                                              | COILCRAFT                                   |
| 1 L2                      |                             | 10UH                 | MSS1246T-103ML                                                                             | COILCRAFT                                   |
| 1 N1                      |                             | NVMFS5826NLT1G       | NVMFS5826NLT1G                                                                             | ON SEMICONDUCTOR                            |
| 1                         | N2                          | NDS351AN             | NDS351AN                                                                                   | FAIRCHILD SEMICONDUCTOR                     |
| 1 PCB                     |                             | PCB                  | MAX20056                                                                                   | MAXIM                                       |
| 3 R1, R2, R9              |                             | 10K                  | 301-10K-RC                                                                                 | XICON                                       |
| 1 R3                      |                             | 1M                   | CRCW06031M00JN                                                                             | VISHAY DALE                                 |
| 1 R10                     |                             | 30.1K                | CRCW06033012FK                                                                             | VISHAY DALE                                 |
| 1                         | R11                         | 20K                  | CRCW060320K0JN                                                                             | VISHAY DALE                                 |
| 1 R12                     |                             | 75K                  | ERJ-3EKF7502                                                                               | PANASONIC                                   |
| 6 R13,                    | R14, R20, R21, R28, R29     | 100K                 | CRCW0603100KFK;RC0603FR-07100KL;RC0603FR-13100KL; ERJ-3EKF1003;AC0603FR-07100KL            | VISHAY DALE;YAGEO;YAGEO; PANASONIC          |
| 1                         | R15                         | 20K                  | MCR03EZPFX2002;ERJ-3EKF2002;CR0603-FX-2002ELF; CRCW060320K0FK                              | ROHM;PANASONIC;BOURNS; VISHAY DALE          |
| 1                         | R18                         | 22.1K                | CRCW060322K1FK                                                                             | VISHAY DALE                                 |
| 1                         | R19                         | 280K                 | CRCW0603280KFK                                                                             | VISHAY DALE                                 |
| 1                         | R24                         |                      | 5.1 CRCW06035R10FN                                                                         | VISHAY DALE                                 |
| 1 R25                     |                             | 3.74K                | CRCW06033K74FK                                                                             | VISHAY DALE                                 |
| 2 R26,                    | R27                         | 0.082                | TL2BR082F; 1-1625826-2                                                                     | TE CONNECTIVITY; TE CONNECTIVITY            |
| 1 R30                     |                             | 226K                 | CRCW0805226KFK                                                                             | VISHAY DALE                                 |
| 1                         | R31                         | 10K                  | CRCW080510K0FK;MCR10EZHF1002;ERJ-6ENF1002;                                                 | CRCW080510K0FK; MCR10EZHF1002; ERJ-         |
| 0 R32, R33                |                             | OPEN                 | RC0805FR-0710KL N/A                                                                        | N/A                                         |
| 1 R34                     |                             |                      | 0 RC0805JR-070RL                                                                           | YAGEO PHYCOMP                               |
| 1 R4                      |                             | 15K                  | CRCW060315K0FK                                                                             | VISHAY DALE                                 |
| 6 R5, R6, R16,            | R17, R22, R23 12K           |                      | CRCW060312K0FK                                                                             | VISHAY DALE PANASONIC;VISHAY                |
| 1 R7                      | 18.7K                       |                      | ERJ-3EKF1872;CRCW060318K7FK                                                                |                                             |
| 1 R8                      |                             | 25K                  | PNM0603E2502BS                                                                             | VISHAY DALE                                 |
| 4 SU1-SU4                 |                             | STC02SYAN            | STC02SYAN                                                                                  | SULLINS ELECTRONICS CORP. MAXIM             |
| 1 1                       | U1 VCC                      | MAX20056BAUGA/V+ N/A | MAX20056BAUGA/V+                                                                           | 5011 KEYSTONE                               |

Evaluates: MAX20056B

## MAX20056B EV Kit Schematic

<!-- image -->

Evaluates: MAX20056B

## MAX20056B EV Kit PCB layout diagrams

Silk\_Top

<!-- image -->

Top

<!-- image -->

Internal2

<!-- image -->

│

## MAX20056B EV Kit PCB layout diagrams (continued)

Internal3

<!-- image -->

Bottom

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and speci¿cations without notice at any time.

│

Evaluates: MAX20056B