<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX17015 Evaluation Kit

## General Description

## Features

The MAX17015 evaluation kit (EV kit) is a complete, fully assembled and tested surface-mount PCB that features the  MAX17015B  highly  integrated,  multichemistry  battery-charger control IC. The MAX17015 EV kit utilizes two single-package  n-channel  MOSFETs  for  high-side  and low-side switching for the MAX17015B internal synchronous step-down converter, and two n-channel MOSFETs and one p-channel MOSFET for the main power-source selection.

The MAX17015 EV kit is capable of supplying power to a system load while simultaneously charging one or more lithium-ion  (Li+)  battery  cells.  During  normal  operation, the  EV  kit  circuit  automatically  selects  the  ADAPTER input or the battery as the main power source for supplying power to the system load. If the ADAPTER input is  selected  as  the  main  source  and  the  EV  kit's  inputcurrent limit is exceeded, the charge current is reduced automatically to give priority to the system load.

The EV kit's input-current limit is set to 4A while the maximum battery-charge voltage and charge-current thresholds can be configured up to 17.4V and 4A, respectively. The thresholds can be adjusted by using on-board circuitry or by connecting analog signals to the respective test points on the EV kit. A digital output signal ( ACOK ) indicates the presence of a valid AC adapter voltage at the ADAPTER input source.

- S Analog/PWM Input-Charge-Current Setting
- S Up to 1.2MHz Switching Frequency
- S Programmable Charge Current Up to 4A
- S Monitors Input/Outputs

Analog Input-Charge-Current-Setting Voltage

AC Adapter Input Current

AC Adapter Presence

- S Automatic System Power-Source Selection
- S Up to 17.4V (max) Battery Voltage
- S 10V to 25V Adapter-Input Operation
- S Cycle-by-Cycle Current Limit
- S Multichemistry Battery Charger
- S Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17015EVKIT+ | EV Kit |

## Component List

| DESIGNATION                |   QTY | DESCRIPTION                                                            |
|----------------------------|-------|------------------------------------------------------------------------|
| ACOK , IINP, ISET, TP1-TP4 |     7 | PC mini red test points                                                |
| ADAPTER, BATT+, SYS_LOAD   |     3 | PC large red test points                                               |
| AGND                       |     1 | PC black test point                                                    |
| BATT-, PGND (x2)           |     3 | PC large black test points                                             |
| C1                         |     1 | 1 F F Q 10%, 25V X5R ceramic capacitor (0805) Murata GRM21BR61E105K    |
| C2, C5, C6                 |     3 | 4.7 F F Q 10%, 25V X5R ceramic capacitors (0805) Murata GRM21BR61E475K |
| C3, C11                    |     2 | 0.1 F F Q 10%, 25V X5R ceramic capacitors (0603) Murata GRM188R61E104K |

| DESIGNATION   |   QTY | DESCRIPTION                                                            |
|---------------|-------|------------------------------------------------------------------------|
| C4            |     1 | 0.68 F F Q 10%, 10V X5R ceramic capacitor (0603) Murata GRM188R61A684K |
| C7            |     1 | 1 F F Q 10%, 10V X5R ceramic capacitor (0603) Murata GRM188R61A105K    |
| C8            |     1 | 0.01 F F Q 10%, 16V X5R ceramic capacitor (0603) Murata GRM188R61C103K |
| C9            |     1 | 10 F F Q 10%, 25V X5R ceramic capacitor (1206) Murata GRM31CR61E106K   |
| C10           |     0 | Not installed, ceramic capacitor (1206)                                |
| C12           |     0 | Not installed, ceramic capacitor (0603)                                |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

## MAX17015 Evaluation Kit

## Component List (continued)

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                                        |
|---------------|-------|------------------------------------------------------------------------------------|
| C13, C15      |     2 | 1000pF Q 5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H102J               |
| C14           |     0 | Not installed, aluminum electro- lytic capacitor                                   |
| D1            |     1 | 200mA, 30V diode (SOD323) Diodes, Inc. BAT54WS (Top Mark: L9)                      |
| D2            |     0 | Not installed, diode (SOD323)                                                      |
| JU1           |     1 | 2-pin header, 0.1in centers                                                        |
| L1            |     1 | 2 F H, 4.3A inductor Sumida CDR7D28MN-2R0NC                                        |
| N1            |     1 | 30V, 5.8A n-channel MOSFET (8 SO) International Rectifier IRF9410PBF               |
| N2            |     1 | 60V, 115mA n-channel MOSFET (SOT23) Vishay 2N7002K (Top Mark: 7K---)               |
| N3            |     1 | 30V, 8.5A n-channel MOSFET (8 SO) Fairchild FDS8884                                |
| N4            |     1 | 30V, 10A n-channel MOSFET (8 SO) Fairchild FDS6690AS                               |
| Q1            |     1 | 30V, 6.5A/-4.9A dual n-/p channel MOSFET (8 SO) International Rectifier IRF7319PBF |

| DESIGNATION       |   QTY | DESCRIPTION                                                                           |
|-------------------|-------|---------------------------------------------------------------------------------------|
| R1                |     1 | 0.015 I Q 1%, 1/2W resistor (1206) IRC LRC-LRF1206LF-01-R015-F                        |
| R2, R10, R22, R23 |     0 | Not installed, resistors (0603) R2 and R10 are open; R22 and R23 are short (PC trace) |
| R3                |     1 | 1k I Q 1% resistor (0603)                                                             |
| R4, R21           |     2 | 100k I Q 1% resistors (0603)                                                          |
| R5                |     1 | 49.9k I Q 1% resistor (0603)                                                          |
| R6                |     1 | 22.6k I Q 1% resistor (0603)                                                          |
| R7                |     1 | 113k I Q 1% resistor (0603)                                                           |
| R8                |     1 | 2M I Q 5% resistor (0603)                                                             |
| R9                |     1 | 50k I potentiometer (single turn) Murata PVG3A503C01                                  |
| R14               |     1 | 150k I Q 1% resistor (0603)                                                           |
| R15               |     1 | 0 I resistor (0603)                                                                   |
| R16               |     1 | 0.02 I Q 1%, 1/2W resistor (1206) IRC LRC-LRF1206LF-01-R020-F                         |
| R17               |     1 | 30.1k I Q 1% resistor (0603)                                                          |
| R18               |     1 | 10k I Q 1% resistor (0603)                                                            |
| R19               |     1 | 140k I Q 1% resistor (0603)                                                           |
| R20               |     1 | 20k I Q 1% resistor (0603)                                                            |
| U1                |     1 | Multichemistry battery charger (20 TQFN-EP*) Maxim MAX17015BETP+                      |
| -                 |     1 | Shunt                                                                                 |
| -                 |     1 | PCB: MAX17015 EVALUATION KIT+                                                         |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Diodes, Inc.                           | 805-446-4800 | www.diodes.com              |
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| International Rectifier                | 310-322-3331 | www.irf.com                 |
| IRC, Inc.                              | 361-992-7900 | www.irctt.com               |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Sumida Corp.                           | 847-545-6700 | www.sumida.com              |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note: Indicate that you are using the MAX17015B when contacting these component suppliers.

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

- MAX17015 EV kit
- One 10V to 25V, 5A variable power supply
- Four voltmeters

## MAX17015 Evaluation Kit

## Quick Start

## Detailed  Description of Hardware

## Required Equipment

The  MAX17015  is  an  evaluation  kit  (EV  kit)  for  the MAX17015B that utilizes two single-package MOSFETs for  the  MAX17015B  internal  synchronous  step-down converter.

The  MAX17015  EV  kit  is  a  complete,  fully  assembled and  tested  surface-mount  PCB  that  demonstrates  the MAX17015B  highly  integrated,  multichemistry  batterycharger  controller.  The  MAX17015B  integrates  a  highefficiency, synchronous-rectified step-down DC-DC converter  to  implement  a  precision  constant-current  and constant-voltage  charger.  The  MAX17015B  thermally optimized  high-frequency  architecture  adjusts  the  EV kit's maximum switching frequency to 1.2MHz to control the power dissipation in the high-side MOSFET, reducing output capacitance and inductance.

The MAX17015 EV kit utilizes two single-package n-channel MOSFETs for high-side and low-side switching for the MAX17015B synchronous converter, and two n-channel MOSFETs and one p-channel MOSFET for main powersource selection. The EV kit is designed to operate from a single DC power supply that provides 10V to 25V and 5A of current.

The  MAX17015  EV  kit  circuit  is  capable  of  supplying power  to  a  load  connected  to  the  SYS\_LOAD  output while  simultaneously  charging  the  battery  pack  connected  between  BATT+  and  BATT-.  During  normal operation, the EV kit circuit selects the ADAPTER or the BATT+ input, through MOSFET Q1, as the main power source for the load connected at SYS\_LOAD. Once the main AC adapter is selected as the power source, the EV kit circuit monitors the input current through the IINP connector. The input current is defined as the combined system-load  current  and  battery-charge  current  when the  ADAPTER  input  is  the  main  power  source.  When the  input  current  exceeds  the  EV  kit  input-current-limit threshold, the battery-charge current is reduced to give priority to the system load.

The  MAX17015  EV  kit's  input-current-limit  threshold is  configured  to  4A  with  resistor  R1.  The  EV  kit's  cell count  and  maximum  battery-charge-current  thresholds are  programmable  with  user-adjusted  analog  signals.

## Procedure

The  MAX17015 EV kit is  a  fully  assembled  and  tested surface-mount  PCB.  Follow  the  steps  below  to  verify board operation. Caution:  Do  not  turn  on  the  power supply until all connections are completed.

- 1) Verify  that  a  shunt  is  installed  across  jumper  JU1 (battery charging disabled).
- 2) Connect the power supply across the ADAPTER and PGND test points.
- 3) Connect a voltmeter across the BATT+ and BATTPCB test points.
- 4) Connect  a  voltmeter  across  the  SYS\_LOAD  and PGND test points.
- 5) Connect a voltmeter across the ISET and AGND test points.
- 6) Connect a voltmeter across the ACOK and  AGND test points.
- 7) Turn on the power supply.
- 8) Set the power-supply voltage to 20V.
- 9) Remove the shunt at jumper JU1 (battery charging enabled).
- 10)  Adjust potentiometer R9 until the voltmeter connected to the ISET pad measures approximately 612mV. This sets the charge current to 3.5A.
- 11)  Verify the following:
- 12)  The EV kit is ready for additional testing.

| PARAMETER      |   MEASURED OUTPUT (V) |
|----------------|-----------------------|
| BATT+ to BATT- |                   8.4 |
| SYS_LOAD       |                    20 |
| ISET           |                  1.23 |
| ACOK           |                     0 |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX17015 Evaluation Kit

The  feedback  resistors  (R17  and  R18)  configure  the charge voltage (i.e.,  cell  count)  and  are  initially  set  for 2-cell evaluation. The charge current can be configured from 0.14A to 4A by adjusting the analog DC voltage at the ISET test point connector using potentiometer R9, or by applying a PWM signal at ISET. The EV kit also features an ACOK output test point to monitor the presence of a valid input source connected at ADAPTER.

## Power-Source Selection for System Load

The  MAX17015  EV  kit  requires  a  10V  to  25V  power source  connected  to  the  ADAPTER  and  PGND  test points,  or  a  power  source  with  a  6V  to  17.4V  outputvoltage range connected to the BATT+ and BATT- test points, to provide power at SYS\_LOAD.

In  a  typical  battery-charging  application,  the  battery pack is connected between the BATT+ and BATT- terminals and an AC adapter power supply is connected between the ADAPTER and PGND terminals. When the voltage  at  the  MAX17015B  DCIN  pin  is  greater  than BATT+  by  420mV,  the  MAX17015B  BST  output  drives the gates of n-channel MOSFETs N1 and Q1-A 5V above the ADAPTER voltage, selecting ADAPTER as the main power source for supplying the load at SYS\_LOAD. As long as the ADAPTER power source is present, though the charger is off, there are forced BST refresh pulses at  a  5ms  (min)  period  at  the  MAX17015B  BST  pin  to properly  conduct  the  system-load  current  through  N1 and Q1-A.

The MAX17015 EV kit charges the batteries connected between the BATT+ and BATT- terminals when the following conditions are met:

- 1)  ADAPTER  &gt;  (BATT+)  +  420mV  (300mV  falling hysteresis)
- 2)  SYS\_LOAD current is less  than  the  input-current limit
- 3)  Jumper  JU1  is  not  installed  and  a  DC  analog voltage &gt; 26mV or a PWM signal is present at the ISET test point

When  the  ADAPTER  power  source  is  removed,  the MAX17015 stops generating BST refresh pulses and N2

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

forces N1 off. BATT+ is then selected as the SYS\_LOAD power  source  by  conducting  the  system-load  current through the p-channel MOSFET, Q1-B.

## ACOK Output Logic Signal

The MAX17015 EV kit features the ACOK output-logic signal that indicates the presence of a valid source connected  to  the  ADAPTER  terminal. ACOK is  pulled  low when  the  voltage  at  ADAPTER  is  greater  than  16.9V; otherwise, ACOK is pulled to the MAX17015B reference output voltage VAA (4.2V).

## Input-Current Limit

The  MAX17015  EV  kit  input-current  limit  is  set  at  4A using  resistor  R1.  The  input  current  is  the  sum  of  the system-load  current  and  battery-charge  current  when the  ADAPTER  input  is  the  main  power  source.  When the  input  current  exceeds  the  input-current  limit,  the charging  current  is  reduced  to  provide  priority  to  the SYS\_LOAD current. As the SYS\_LOAD current approaches the current-limit threshold, the charge current drops linearly to zero.

The maximum input-current limit can be set by replacing sense resistor R1. Use the following equation to select a new sense-resistor value:

<!-- formula-not-decoded -->

where ILIMIT is the input-current limit in amperes and R1 is the value of the sense resistor in milliohms.

Refer  to  the Setting  Input-Current  Limit section  in  the MAX17005B/MAX17006B/MAX17015B IC data sheet for additional information on setting the input-current limit if populating resistors at the R2 and R3 PCB pads.

## Battery Charging

The MAX17015 EV kit supports charging of one or more series  Li+  battery  cells.  See  the  following  subsections for  details  on  setting  the  charge  voltage  (i.e.,  batterycell  count),  charge  current,  and  enabling/disabling  the charger.

<!-- image -->

## MAX17015 Evaluation Kit

## Setting Charge Voltage

The MAX17015B battery-charge voltage has a minimum 2.1V  FB  regulation  set-point  (VFB\_SETPOINT)  requirement. Resistor PCB pads R17 and R18 are available to set the total battery regulation voltage. Use the following equation to set the battery regulation voltage:

<!-- formula-not-decoded -->

where  R18  is  10k I (typ)  and  VBATT+  is  the  BATT+ battery regulation voltage.

## Setting Charge Current

The MAX17015 EV kit charge current can be set up to 4A using an analog DC voltage or PWM signal applied at the ISET terminal.

Potentiometer R9 adjusts the battery-charge current by applying the proper analog DC voltage at the ISET pin. While  monitoring  the  ISET  voltage  through  the  EV  kit's ISET test point, use the following equation to adjust the maximum battery-charge current to the desired value:

<!-- formula-not-decoded -->

where VISET is the voltage at the ISET test point, R16 is the 20m I battery current-sense resistor, and ICHARGE is the desired battery-charge current.

A  digital  PWM  signal  with  a  128Hz  to  500kHz  frequency  range  can  be  applied  at  the  ISET  terminal  to control  the  battery-charge  current.  Refer  to  the Setting Charge Current section in the MAX17005B/MAX17006B/ MAX17015B IC data sheet  for  proper  logic  levels  and charge-current setting when using a PWM signal at ISET. As the duty cycle increases/decreases, the charge current linearly increases/decreases.

The EV kit's  actual  battery-charge  current  depends  on the  input-current  limit  and  the  load  connected  at  SYS\_ LOAD.  As  the  battery  and  SYS\_LOAD  current  exceed the input-current limit, the charging current is reduced to provide priority to the SYS\_LOAD current.

<!-- image -->

## Charger Shutdown

Jumper JU1 places the charger in shutdown mode. To place  the  charger  in  shutdown  mode,  install  a  shunt across jumper JU1. To enable the charger, remove the shunt at jumper JU1 and apply the appropriate analog DC voltage or PWM signal at ISET. See Table1 for proper jumper configuration to place the charger in shutdown mode.

## IINP Output Signal

The  MAX17015  EV  kit  features  an  analog  output  test point (IINP) to monitor the adapter current through sense resistor  R1.  The  measured  current  is  the  sum  of  the current  applied  at  SYS\_LOAD  and  the  battery-charge current. The system current can be estimated using the following equation:

<!-- formula-not-decoded -->

where VIINP is the voltage at the IINP test point, IINPUT is  the  ADAPTER  input  current,  R1  is  the  value  of  the sense resistor (15m I ), and R6 is the value of the resistor (22.6k I ) connected to the MAX17015B IINP pin and ground.

The  IINP  output  pad  can  also  be  used  to  monitor  the battery-discharge  current.  To  monitor  the  battery-discharge current, remove resistor R7 and place a voltage source  between  1V  and  5V  at  the  ISET  connector.  To limit  excessive  power  dissipated  across  potentiometer R9,  rotate  R9  fully  clockwise  such  that  the  resistance measures 0 I between terminals 2 and 3.

Table 1. Battery-Charger Control (JU1)

| SHUNT POSITION   | EV KIT CHARGE MODE                                                 |
|------------------|--------------------------------------------------------------------|
| Not installed    | Charger enabled and charge current set by R9 or PWM signal at ISET |
| Installed        | Charger disabled                                                   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX17015 Evaluation Kit

Figure 1. MAX17015 EV Kit Schematic

<!-- image -->

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17015 Evaluation Kit

<!-- image -->

<!-- image -->

Figure 2. MAX17015 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX17015 EV Kit PCB Layout-Component Side

Figure 4. MAX17015 EV Kit PCB Layout-Ground Layer

<!-- image -->

Figure 5. MAX17015 EV Kit PCB Layout-Power Layer

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## MAX17015 Evaluation Kit

## Evaluates:  MAX17015B

Figure 6. MAX17015 EV Kit PCB Layout-Solder Side

<!-- image -->

1.0''

Figure 7. MAX17015 EV Kit Component Placement GuideSolder Side

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

8