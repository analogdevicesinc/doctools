<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX8848Z Evaluation Kit

## Evaluates:  MAX8847Y/MAX8847Z/ MAX8848Y/MAX8848Z

## General Description

The MAX8848Z evaluation kit (EV kit) is a fully assembled and tested PCB that demonstrates the MAX8848Z highperformance  negative  charge  pump.  The  MAX8848Z integrates an inverting charge pump and 7 current regulators capable of 24mA each to drive up to 7 white LEDs (WLEDs). The EV kit operates from a 2.7V to 5.5V input supply  range  and  includes  two  pulse  generators  that are  used  for  testing  the  MAX8847Y/MAX8848Y  singlewire,  serial-pulse  dimming feature. The EV kit can also evaluate  the  MAX8847Y,  MAX8847Z,  and  MAX8848Y. To evaluate the MAX8847Y, MAX8847Z, or MAX8848Y, request a free sample when ordering the EV kit.

Features

- S Negative 1x/1.5x Charge Pump
- S Adaptive Current Regulators
- S Independent Voltage Supply for Each LED
- S 24mA to 0.1mA Serial-Pulse Dimming (MAX8847Y/ MAX8848Y)
- S 24mA to 0mA PWM Dimming (MAX8847Z/ MAX8848Z)
- S 2% (max) LED Current Accuracy, 1% (typ) Matching
- S Low 120µA Quiescent Current
- S Low 0.4µA Shutdown Current
- S Inrush Current Limit
- S Temperature Derating Function
- S 16-Pin, 3mm x 3mm Thin QFN Package
- S Tiny External Components
- S Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX8848ZEVKIT+ | EV Kit |

## Component List

*EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                               |
|---------------|-------|---------------------------------------------------------------------------|
| C1-C4         |     4 | 1 F F Q 20%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A105K         |
| C5            |     1 | 0.22 F F Q 10%, 10V X5R ceramic capacitor (0402) Murata GRM155R61A224KE19 |
| C6, C8        |     2 | 2.2 F F Q 10%, 6.3V X5R ceramic capacitors (0603) TDK C1608X5R0J225K      |
| C7, C9        |     2 | 1000pF Q 10%, 50V X7R ceramic capacitors (0402) TDK C1005X7R1H102K        |
| D1-D7         |     7 | White LEDs Nichia NSCW215T OSRAM LW Y1SG                                  |

| DESIGNATION        |   QTY | DESCRIPTION                                                             |
|--------------------|-------|-------------------------------------------------------------------------|
| D8, D9             |     2 | 100mA, 30V Schottky diodes (SOD523) Central Semi CMOSH-3                |
| JU1, JU2, JU4, JU5 |     4 | 2-pin headers, 0.1in centers Sullins PEC36SAAN Digi-Key S1012E-36-ND    |
| JU3, JU6, JU7, JU8 |     4 | 3-pin headers, 0.1in centers Sullins PEC36SAAN Digi-Key S1012E-36-ND    |
| R1, R2             |     2 | 2.2k I Q 5% resistors (0402)                                            |
| S1, S2             |     2 | Momentary pushbutton switches Panasonic EVQ-PHP03T Digi-Key P8002STR-ND |
| U1                 |     1 | Negative charge pump (16 TQFN-EP*) Maxim MAX8848ZETE+                   |

## MAX8848Z Evaluation Kit

## Evaluates:  MAX8847Y/MAX8847Z/ MAX8848Y/MAX8848Z

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                            |
|---------------|-------|------------------------------------------------------------------------|
| U2, U3        |     2 | Single-switch debouncer (4 SOT143) Maxim MAX6816EUS+T (Top Mark: KABA) |

| DESIGNATION   |   QTY | DESCRIPTION                                                        |
|---------------|-------|--------------------------------------------------------------------|
| -             |     8 | Shunts (JU1-JU8) Sullins STC02SYAN Digi-Key S9000-ND or equivalent |
| -             |     1 | PCB: MAX8848Z EVALUATION KIT+                                      |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Central Semiconductor Corp.            | 631-435-1110 | www.centralsemi.com         |
| Digi-Key Corp.                         | 800-344-4539 | www.digikey.com             |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Nichia Corp.                           | 248-352-6575 | www.nichia.com              |
| OSRAM Opto Semiconductor               | 888-446-7726 | www.osram-os.com            |
| Sullins Electronics Corp.              | 760-744-0125 | www.sullinselectronics.com  |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX8848Z when contacting these component suppliers.

## Quick Start

## Recommended Equipment

## Detailed Description

The MAX8848Z EV kit default jumper settings are shown in Table 1.

## Evaluating the MAX8847Y/MAX8847Z/MAX8848Y

To evaluate the MAX8847Y, MAX8847Z, and MAX8848Y, carefully  remove  the  MAX8848Z  (U1)  and  install  the MAX8847Y,  MAX8847Z,  or  MAX8848Y.  Capacitor  C5 needs  to  be  removed  for  the  MAX8848Y  evaluation. All  other  components  can  remain  the  same.  Jumper settings need to be adjusted for different operations on different ICs.

## PWM Dimming Control (MAX8847Y/MAX8847Z/MAX8848Z)

Apply  an  external  PWM  signal  to  ENA  to  set  the corresponding  LED  current  that  is  proportional  to  the signal  duty  cycle  (0%  duty  cycle  corresponds  to  zero LED  current  and  100%  duty  cycle  corresponds  to  full LED  current).  The  allowed  PWM  frequency  range  is between 200Hz and  200kHz. If PWM dimming control is not required, ENA works as a simple on/off control.

- MAX8848Z	EV	kit
- Variable	6V	power	supply	or	a	Li+	battery	capable of supplying 1A of output current

## Procedure

The EV kit is a fully assembled and tested surface-mount board. Follow the steps below to verify board operation. Caution:  Do  not  turn  on  the  power  supply  until  all connections are made.

- 1) Verify that the jumpers on the EV kit are configured in their default positions, as shown in Table 1.
- 2) Preset the power supply to 3.6V. Turn off the power supply.
- 3) Connect the positive lead of the 3.6V power supply to the IN pad. Connect the negative lead of the 3.6V power supply to the GND pad.
- 4) Turn on the power supply.
- 5) Verify that all the WLEDs (D1-D7) are lit.

## MAX8848Z Evaluation Kit

## Evaluates:  MAX8847Y/MAX8847Z/ MAX8848Y/MAX8848Z

## Serial Pulse-Dimming Control (MAX8847Y/MAX8848Y)

On-board  pulse  generators  are  provided  to  evaluate the  serial-pulse  dimming  feature  of  the  MAX8847Y/ MAX8848Y.  When  first  enabled,  the  LEDs  are  at  full brightness.  Repeatedly  pressing  the  S1  or  S2  switch generates pulses to reduce the LED current from 24mA to  0.1mA  in  31  steps,  as  shown  in  Table  2.  After  the current  reaches  0.1mA,  the  next  button  press  restores the  LED  current  to  24mA.  Refer  to  the  MAX8847Y/ MAX8847Z  and  MAX8848Y/MAX8848Z  IC  data  sheets for timing diagrams.

To use the ENA on-board pulse generator, remove the JU3 shunt and install shunts on JU1 and JU2. To use the ENB on-board pulse generator,  remove  the  JU6  shunt and install shunts on JU5 and JU4, or across pins 1-2 of JU7.

To  use  external  pulse  generators,  remove  the  shunts on jumper JU1, JU4, or JU7 to disconnect the on-board pulse generators. Connect the external pulse generator to the ENA and ENB pads-

## Table 1. Default Jumper Settings

| JUMPER   | SHUNT POSITION   |
|----------|------------------|
| JU1      | Open             |
| JU2      | Open             |
| JU3      | Pins 1-2         |
| JU4      | Open             |
| JU5      | Open             |
| JU6      | Open             |
| JU7      | Pins 2-3         |
| JU8      | Open             |

## Table 2. ENA/ENB Serial-Pulse-Dimming Count and Programmed LED\_ Currents

| ENA/ENB PULSE COUNT   |   PROGRAMMED LED CURRENT (mA) |   ENA/ENB PULSE COUNT |   PROGRAMMED LED CURRENT (mA) |
|-----------------------|-------------------------------|-----------------------|-------------------------------|
| Startup or EN_ high   |                          24.0 |                    16 |                           2.8 |
| 1                     |                          22.4 |                    17 |                           2.4 |
| 2                     |                          20.8 |                    18 |                           2.0 |
| 3                     |                          19.2 |                    19 |                           1.6 |
| 4                     |                          17.6 |                    20 |                           1.4 |
| 5                     |                          16.0 |                    21 |                           1.2 |
| 6                     |                          14.4 |                    22 |                           1.0 |
| 7                     |                          12.8 |                    23 |                           0.8 |
| 8                     |                          11.2 |                    24 |                           0.7 |
| 9                     |                           9.6 |                    25 |                           0.6 |
| 10                    |                           8.0 |                    26 |                           0.5 |
| 11                    |                           6.4 |                    27 |                           0.4 |
| 12                    |                           5.6 |                    28 |                           0.3 |
| 13                    |                           4.8 |                    29 |                           0.2 |
| 14                    |                           4.0 |                    30 |                           0.1 |
| 15                    |                           3.2 |                    31 |                          24.0 |

## MAX8848Z Evaluation Kit

## Evaluates:  MAX8847Y/MAX8847Z/ MAX8848Y/MAX8848Z

Figure 1. MAX8848Z EV Kit Schematic

<!-- image -->

## MAX8848Z Evaluation Kit

## Evaluates:  MAX8847Y/MAX8847Z/ MAX8848Y/MAX8848Z

<!-- image -->

Figure 2. MAX8848Z EV Kit Component Placement GuideTop Layer

Figure 3. MAX8848Z EV Kit PCB Layout-Top Layer

<!-- image -->

Figure 4. MAX8848Z EV Kit PCB Layout-Bottom Layer

<!-- image -->

## Evaluates:  MAX8847Y/MAX8847Z/ MAX8848Y/MAX8848Z MAX8848Z Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/10           | Initial release | -               |

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.