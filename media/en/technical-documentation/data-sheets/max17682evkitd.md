<!-- lastmod 2022-08-02 -->
MAX17682 Evaluation Kit D

## General Description

The  MAX17682  EV  kit  is  a  fully  assembled  and  tested circuit  board  that  demonstrates  the  performance  of  the MAX17682  high-efficiency,  iso-buck  DC-DC  Converter. The EV kit operates over a wide input-voltage range of 17V to 36V and uses primary-side feedback to regulate the output  voltages.  The  EV  kit  has  isolated  dual  output voltages  programmed  to  ±15V  at  150mA,  along  with  a primary  regulated  +5V  output  voltage  at  1A,  with    10% output voltage regulation.

The EV kit comes installed with the MAX17682 in a 20-pin (4mm x 4mm) TDFN package.

## Features

- 17V to 36V Input Voltage Range
- ±15V,150mA; +5V, 1A Continuous Current
- EN/UVLO Input
- 200kHz Switching Frequency
- 93% Peak Efficiency
- Overcurrent Protection
- No Optocoupler
- Delivers up to 10W Output Power
- Overtemperature Protection
- Proven PCB layout

Ordering Information appears at end of data sheet.

Evaluates: MAX17682 for Isolated ± 15V

## Dual-Output Configuration

## Quick Start

## Recommended Equipment

- One 15V - 60V DC, 1A Power Supply
- One resistive load of 5Ω,1A and two resistive loads of 100Ω,150mA sink capacity
- Three Digital Multimeters (DMM)

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

## Procedure

- 1) Verify that J1 is open and J2 is connected to GND.
- 2) Set the power supply output to 24V. Disable the power supply.
- 3) Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad.
- 4) Connect one DMM configured in voltmeter mode across the +5V PCB pad and the nearest PGND PCB pad, and two DMMs across the ±15V PCB pad and the corresponding nearest GND0 PCB pads.
- 5) Connect a 1A resistive load across the +5V PCB pad and the nearest PGND PCB pad, and two 150mA resistive loads across the ±15V PCB pads and the corresponding nearest GND0 PCB pad.
- 6) Enable the input power supply.
- 7) Verify that the secondary output voltage is at ±15V (with allowable tolerance of  10%) with respect to GND0 and the primary output voltage is +5V with respect to PGND.
- 8) If required, vary the input voltage from 17V to 36V, the primary load current form 100mA to 1A and the secondary load current from 15mA to 150mA, and verify that the output voltages are within the toler -ance limit.

<!-- image -->

## MAX17682 Evaluation Kit D

## Detailed Description

The  MAX17682EVKITD  evaluation  kit  (EV  kit)  is  a  fully assembled and tested circuit board that demonstrates the performance  of  the  MAX17682  high-efficiency,  iso-buck, DC-DC converter designed to provide an isolated power up to 10W. The EV kit generates isolated dual output of ±15 V, 150mA and a primary output of +5V, 1A from a 17V to 36V input supply. The EV kit features a forced-PWM control scheme that provides constant switching-frequency of 200 kHz operation at all load and line conditions.

The EV Kit includes an EN/UVLO PCB pad to monitor and program the EN/UVLO pin of the MAX17682. The VPRI PCB pad helps measure the regulated primary output volt -age (V PRI ). An additional RESETB PCB pad is available for monitoring the health of primary output voltage (V PRI ). RESETB pulls  low  if  FB  voltage  drops  below  92%(typ) of its set value and RESETB goes high impedance 1024 clock cycles after FB voltage rises above 95% of its set value. The programmable soft-start feature allows users to reduce the input inrush current.

## Evaluates: MAX17682 for Isolated ±15V Dual-Output Configuration

This  EV  Kit  is  protected  against  accidental  primary  and secondary output short-circuit conditions. When a shortcircuit fault occurs at any of the secondary isolated output terminals,  the  condition  induces  a  negative  current  in the primary winding of the transformer, which eventually causes  the  current  to  hit  the  negative  current  limit in  MAX17682.  The  part  enters  hiccup  mode  after  16 consecutive events of hitting a negative current limit. If the short circuit happens across the primary output terminals, the  MAX17682  enters  HICCUP  mode  either  when  the high-side switch current hits runaway current limit or when the FB-pin voltage goes below 0.58V. In either case, the part attempts to recover after 32,768 clock cycles.

## Enable Control (J1)

The  EN/UVLO  pin  on  the  device  serves  as  an  on/ off  control  while  also  allowing  the  user  to  program  the input  undervoltage  lockout  (UVLO)  threshold.  Jumper J1configures the EV kit's output for turn-on/turn-off control. Install a shunt across jumper J1 pins 2-3 to disable VOUT. See Table 1 for J1 jumper configurations.

The  iso-buck  is  a  synchronous-buck-converter-based topology,  useful  for  generating  isolated  outputs  at  low power level without using an opto-coupler. The detailed procedure for setting the soft-start time, ENABLE/UVLO divider, primary output voltage (V PRI ) selection, adjusting the primary output voltage, primary inductance selection, turns-ratio  selection,  output  capacitor  selection,  output diode selection and external loop compensation are given in MAX17682 IC data sheet.

## External Synchronization (J2)

The  SYNC  pin  on  the  device  allows  synchronization  to an  external  clock.  Jumper  J2  configures  the  frequency  of operation  of  the  EV  kit  by  selecting  the  internal  clock  with frequency  decided  by  the  RT  resistor  value  or  the  external clock to synchronize. See Table 2 for J2 jumper configurations.

## Table 1. Enable Control (EN/UVLO) (J1) Jumper Settings

| SHUNT POSITION   | EN/UVLO PIN                                      | V OUT OUTPUT          |
|------------------|--------------------------------------------------|-----------------------|
| 1-2              | Connected to V IN                                | Always Enabled        |
| 2-3              | Connected to GND                                 | Always Disabled       |
| Open*            | Connected to midpoint of R1, R2 resistor-divider | Enabled at V IN ≥ 15V |

* Default position.

## Table 2. External Synchroniztaion (SYNC) (J2) Jumper Settings

| SHUNT POSITION   | SYNC PIN          | CLOCK FREQUENCY                                  |
|------------------|-------------------|--------------------------------------------------|
| 1-2              | Connected to SYNC | Uses external clock                              |
| 2-3*             | Connected to GND  | Uses Internal clock set according to RT resistor |
| Open             | Unconnected       | Not recommended                                  |

* Default position.

Note 1: The secondary output diodes are rated to carry short-circuit current only for few hundredths of a millisecond and are not rated to carry the continuous short-circuit current.

Note 2: The iso-buck converter typically needs 10% minimum load to regulate the output voltage. In this design when the ±15V rails are healthy, U2 sinks the minimum load current required to regulate the output voltages within ±10% regulation.

## MAX17682 Evaluation Kit D

## EV Kit Performance Report

## EFFICIENCY vs. LOAD CURRENT

<!-- image -->

SECONDARY LOAD TRANSIENT RESPONSE (LOAD CURRENT STEPPED FROM 75mA TO 150mA)

<!-- image -->

## Evaluates: MAX17682 for Isolated ±15V Dual-Output Configuration

## OUTPUT VOLTAGE vs. LOAD CURRENT

<!-- image -->

<!-- image -->

│

## EV Kit Performance Report (continued)

## FULL LOAD SWITCHING WAVEFORMS

<!-- image -->

RECOVERY AFTER MOMENTARY OUTPUT SHORT

<!-- image -->

## OUTPUT SHORT WAVEFORMS

<!-- image -->

PERMANANT OUTPUT SHORT WAVEFORMS

<!-- image -->

│

## Component Suppliers

| SUPPLIER         | WEBSITE                |
|------------------|------------------------|
| Wurth Electronik | www.we-online.com      |
| Murata Americas  | www.murataamericas.com |
| Panasonic Corp.  | www.panasonic.com      |

Note:

Indicate that you are using the MAX17682 when contacting these component suppliers.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17682EVKITD# | EVKIT  |

# Denotes RoHS compliant.

## MAX17682 EV Kit D Bill of Materials

| No. Designation                                                                  | Qty Description                                    | Maufacturer Par#1                   | Maufacturer Par#2                          |
|----------------------------------------------------------------------------------|----------------------------------------------------|-------------------------------------|--------------------------------------------|
| 1 C1                                                                             | 1 47µF±20%, 80V, Aluminium electrolytic cappacitor | PANASONIC EEE-FK1K470P              |                                            |
| 2 C2                                                                             | 1 10µF±10%, 50V X7R ceramic capacitor(1210)        | MURATA GRM32ER71H106KA12L           | SAMSUNG ELECTRONICS CL32B106KBJNNN         |
| 3 C3                                                                             | 1 0.1µF±10%, 100V X7R ceramic capacitor(0603)      | MURATA GRM188R72A104KA35            | TDK CC0603KRX7R0BB104                      |
| 4 C4                                                                             | 1 470pF±5%, 25V X7R ceramic capacitor(0402)        | KEMET C0402C393K3RAC7867            |                                            |
| 5 C5                                                                             | 1 0.039µF±10%, 25V X7R cermaic capacitor(0402)     | YAGEO AC0402KRX7R8BB471             |                                            |
| 6 C6                                                                             | 1 .033µF±10%, 25V X7R ceramic capacitor(0402)      | MURATA GRM155R71E333KA88            |                                            |
| 7 C7, C8                                                                         | 2 47µF±10%, 10V X7R ceramic capacitor(1210)        | MURATA GRM32ER71A476KE15            |                                            |
| 8 C9, C10                                                                        | 2 2.2µF±10%, 25V X7R ceramic capacitor(1210)       | MURATA GRM32RR71E225KC01L           |                                            |
| 9 C11                                                                            | 1 2.2µF±20%, 10V X7R ceramic capacitor(0603)       | MURATA GRM188R71A225ME15            |                                            |
| 10 C12                                                                           | 1 0.1µF±10%, 16V X7R ceramic capacitor(0402)       | TDK C1005X7R1C104K050BC             | AMERICAN TECHNICAL CERAMICS ATC530L104KT16 |
| 11 C13                                                                           | 1 2700pF±10%, 3kV X7R ceramic capacitor(1812)      | AVX 1812HC272KAZ1A                  |                                            |
| 12 C14                                                                           | 0 47µF±10%, 10V X7R ceramic capacitor(1210)        | MURATA GRM32ER71A476KE15            |                                            |
| 13 D1, D2                                                                        | 2 Diode, 400V/1A, SMT                              | DIODES INCORPORATED DFLU1400        |                                            |
| 14 R1                                                                            | 1 3.3M Ω±1% resistor(0603)                         | VISHAY DALE CRCW06033M30FK          |                                            |
| 15 R2                                                                            | 1 274kΩ±1% resistor(0603)                          | PANASONIC ERJ-3EKF2743V             |                                            |
| 16 R3                                                                            | 1 102k Ω±1% resistor(0402)                         | VISHAY DALE CRCW0402102KFK          |                                            |
| 17 R4                                                                            | 1 4.42k Ω±1% resistor(0402)                        | PANASONIC ERJ-2RKF4421X             |                                            |
| 18 R5                                                                            | 1 82kΩ±1% resistor(0402)                           | VISHAY DALE CRCW040282K0FK          | ROHMMCR01MZPF8202                          |
| 19 R6                                                                            | 1 18k Ω±1% resistor(0402)                          | VISHAY DALE CRCW040218K0FK          |                                            |
| 20 R7                                                                            | 1 10k Ω±1% resistor(0402)                          | VISHAY DALE CRCW040210K0FK          | YAGEO PHICOMP RC0402FR-0710K               |
| 21 R8                                                                            | 1 931k Ω±1% resistor(0402)                         | VISHAY DALE CRCW0402931KFK          |                                            |
| 22 R9                                                                            | 1 82.5k Ω±1% resistor(0402)                        | VISHAY DALE CRCW040282K5FK          | BOURNS CR0402-FX-8252GLF                   |
| 23 R10                                                                           | 1 562Ω±1% resistor(0402)                           | PANASONIC ERJ-2RKF5620X             |                                            |
| 24 R11                                                                           | 1 0 Ω±1% resistor(0805)                            | VISHAY DALE CRCW08050000ZS          | PANASONIC ERJ-6GEY0R00V                    |
| 25 T1                                                                            | 1 EVKIT PART-TRANSFORMER; SMT-12; 3.2:1            | WURTH ELECTRONICS INC 750343673     |                                            |
| 26 U1                                                                            | 1 MAX17682 TQFN10 4*4mm Iso buck DC-DC converter   | MAXIM MAX17682                      |                                            |
| 27 U2                                                                            | 1 Shunt regulator SOT-23                           | DIODES INCORPORATED TL431BSA        |                                            |
| 28 JU1, JU2                                                                      | 2 Jumper Headers                                   | SULLINS ELECTRONICS CORP. PEC03SAAN |                                            |
| 29 SU1, SU2                                                                      | 2 Jumper pins                                      | SULLINS ELECTRONICS CORP. STC02SYAN |                                            |
| 30 VIN, +5V, +15V, - 15V, GND0, PGND, SGND, SYNC, PGND1, GND0_1, RESETB, EN/UVLO | 12 Test Loops                                      | WEICO WIRE 9020 BUSS                |                                            |

## MAX17682 EV Kit D Schematics

<!-- image -->

## MAX17682 EV Kit D PCB Layout Diagrams

MAX17682 EV Kit D-Top Silkscreen

<!-- image -->

MAX17682 EV Kit D-Top

<!-- image -->

│

## MAX17682 EV Kit D PCB Layout Diagrams (continued)

MAX17682 EV Kit D-Level 2 SGND

<!-- image -->

MAX17682 EV Kit D-Level 3 SGND

<!-- image -->

│

## MAX17682 EV Kit D PCB Layout Diagrams (continued)

MAX17682EV Kit D-Bottom

<!-- image -->

## MAX17682 Evaluation Kit D

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/18            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at w.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX17682 for Isolated ±15V

Dual-Output Configuration