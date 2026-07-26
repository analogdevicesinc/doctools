<!-- lastmod 2022-08-02 -->
<!-- image -->

## MAX17085B Evaluation Kit

## General Description

## Features

The  MAX17085B  evaluation  kit  (EV  kit)  is  a  complete and  fully  assembled  and  tested  PCB  that  features  the MAX17085B  IC,  a  highly  integrated,  multichemistry battery-charger controller with dual step-down converters and dual LDOs. The EV kit is capable of supplying power to  a  system  load  while  simultaneously  charging multichemistry  battery  packs.  During  operation,  the  EV kit circuit automatically selects the ADAPTER input or the battery as the main power source for supplying power to the  system  load  and  step-down  converters.  Whenever the EV kit circuit current limit is exceeded, the batterycharge current is reduced automatically, giving priority to the system load and converters.

The  EV  kit's  input  source-current  limit,  battery-charge voltage,  maximum  battery-charge  current  threshold, and output current limit on the step-down converters are configurable.  These  thresholds  are  adjusted  by  using on-board  circuitry,  or  by  connecting  analog  signals  to the  EV  kit.  Digital  output  signals  indicate  the  presence of  a  valid  ADAPTER  and  valid  step-down  converter voltages.  An  analog  output  signal  indicates  the  total current drawn from either the adapter or the battery.

- S Analog Control Charge Current, Voltage, and Input Source Current
- S Monitor Outputs

AC Adapter Current/Battery Discharge Current AC Adapter Presence

Valid Step-Down Converter Output Voltages

- S 5V, Up to 8A Step-Down Converter Outputs
- S 3.3V, Up to 8A Step-Down Converter Outputs
- S 5V, 3.3V Linear Regulator Outputs
- S Automatic Power-Source Selection
- S Up to 17.5V (4-Cell) Battery Voltage
- S 8V to 22V Input Operation
- S 4A Input Current Limit
- S System Short-Circuit Protection
- S Cycle-by-Cycle Current Limit
- S Up to 1.4MHz Frequency Operation (Charger)
- S Multichemistry Battery Charger
- S Fully Assembled and Tested

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17085BEVKIT+ | EV Kit |

## Component List

| DESIGNATION                                      |   QTY | DESCRIPTION                                                           |
|--------------------------------------------------|-------|-----------------------------------------------------------------------|
| ADAPTER, BATT_IN, PGND (x5), SYSLD, VOUT3, VOUT5 |    10 | Noninsulated banana-jack connectors                                   |
| C1                                               |     0 | Not installed, ceramic capacitor (0805)                               |
| C2                                               |     1 | 1.0µF Q 10%, 50V X7R ceramic capacitor (0805) Murata GRM21BR71H105K   |
| C3, C11, C25, C26                                |     4 | 0.01µF Q 10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H103K |

| DESIGNATION                 |   QTY | DESCRIPTION                                                          |
|-----------------------------|-------|----------------------------------------------------------------------|
| C4, C9                      |     0 | Not installed, ceramic capacitors (1206)                             |
| C5, C12, C14, C22, C27, C28 |     6 | 0.1uF Q 10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H104K |
| C6, C7, C8                  |     3 | 4.7µF Q 20%, 25V X7R ceramic capacitors (1206) Murata GRM31CR71E475M |
| C10, C17, C21, C29          |     4 | 1.0µF Q 10%, 10V X5R ceramic capacitors (0603) Murata GRM188R61A105K |
| C13, C19, C23, C24          |     4 | 10µF Q 10%, 25V X5R ceramic capacitors (1206) Murata GRM31CR61E106K  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

## MAX17085B Evaluation Kit

## Component List (continued)

| DESIGNATION        |   QTY | DESCRIPTION                                                             |
|--------------------|-------|-------------------------------------------------------------------------|
| C15, C20           |     2 | 100µF, 6V, 18m I capacitors (D case) SANYO 6TPE100MI                    |
| C16, C18           |     2 | 4.7µF Q 10%, 6.3V X5R ceramic capacitors (0603) Murata GRM188R60J475K   |
| C30, C31           |     0 | Not installed, ceramic capacitors (0603)                                |
| C32                |     1 | 1000pF Q 20%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H102M    |
| D1, D2             |     2 | 3A, 40V Schottky diodes (SMA) Central Semi CMSH3-40MA                   |
| D3, D4             |     2 | Green LEDs (0603)                                                       |
| D5, D6             |     2 | 200mA, 100V dual diodes (SOT23) Fairchild MMBD4148SE (Top Mark: D4)     |
| D7                 |     1 | 350mA, 40V Schottky diode (SOD123) Diodes Inc. SD103AW (Top Mark: S4)   |
| D8                 |     1 | 100mA, 80V diode (SOD323) Diodes Inc. 1N4148WS-7-F                      |
| JU1, JU2, JU3, JU6 |     4 | 2-pin headers                                                           |
| JU4, JU5           |     2 | 3-pin headers                                                           |
| L1                 |     1 | 2.0µH, 4.5A inductor Sumida CDR7D28MN-2R0                               |
| L2, L3             |     2 | 1.5µH, 11.8A inductors Sumida CEP125NP-1R5MC                            |
| N1, N2             |     2 | 30V, 8.3A n-channel MOSFETs (8 SO) International Rectifier IRF7807D1PBF |
| N3                 |     1 | 30V, 8.5A n-channel MOSFET (8 SO) Fairchild FDS8884                     |
| N4                 |     1 | 30V, 10A n-channel MOSFET with Schottky (8 SO) Fairchild FDS6690AS      |

| DESIGNATION                       |   QTY | DESCRIPTION                                                                                  |
|-----------------------------------|-------|----------------------------------------------------------------------------------------------|
| N5, N7                            |     2 | 30V, 13A n-channel MOSFETs (8 SO) Fairchild FDS6298                                          |
| N6, N8                            |     2 | 30V, 13A n-channel MOSFETs (8 SO) Fairchild FDS6670A                                         |
| N9, N10                           |     2 | 60V, 115mA n-channel MOSFETs (SOT23) Fairchild 2N7002                                        |
| P1                                |     1 | 30V, 8.8A p-channel MOSFET (8 SO) Fairchild FDS4435BZ                                        |
| R1                                |     1 | 249k I Q 1% resistor (0603)                                                                  |
| R2                                |     1 | 36.5k I Q 1% resistor (0603)                                                                 |
| R3                                |     1 | 0.015 I Q 1%, 1W sense resistor (2010) IRC LRC-LRF2010LF-01-R015-F                           |
| R4                                |     1 | 0.01 I Q 1%, 1W sense resistor (2010) IRC LRC-LRF2010LF-01-R010-F                            |
| R5                                |     1 | 150k I Q 5% resistor (0603)                                                                  |
| R6, R7, R26                       |     3 | 1k I Q 5% resistors (0603)                                                                   |
| R8, R36                           |     2 | 0 I Q 5% resistors (0603)                                                                    |
| R9                                |     1 | 200k I potentiometer (single turn) Murata PVG3A204C01R00                                     |
| R10, R17, R18, R25, R28, R29, R30 |     0 | Not installed, resistors (0603) R10, R28, R29, and R30 are short; R17, R18, and R25 are open |
| R11, R15                          |     2 | 66.5k I Q 1% resistors (0603)                                                                |
| R12, R16                          |     2 | 82.5k I Q 1% resistors (0603)                                                                |
| R13                               |     1 | 301k I Q 1% resistor (0603)                                                                  |
| R14                               |     1 | 47 I Q 5% resistor (0603)                                                                    |
| R19, R20, R23, R32                |     4 | 100k I Q 1% resistors (0603)                                                                 |
| R21, R22                          |     2 | 4.7 I Q 5% resistors (0603)                                                                  |
| R24                               |     1 | 21k I Q 1% resistor (0603)                                                                   |
| R27                               |     1 | 10k I Q 1% resistor (0603)                                                                   |
| R31                               |     1 | 78.7k I Q 1% resistor (0603)                                                                 |
| R33, R34                          |     2 | 10 I Q 1% resistors (0603)                                                                   |

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17085B Evaluation Kit

## Component List (continued)

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                  |
|---------------|-------|--------------------------------------------------------------|
| R35           |     1 | 4.99 I Q 1% resistor (0603)                                  |
| TP1-TP5       |     5 | Miniature test points                                        |
| U1            |     1 | Integrated battery charger (40 TQFN-EP*) Maxim MAX17085BETL+ |

| DESIGNATION   |   QTY | DESCRIPTION                                                   |
|---------------|-------|---------------------------------------------------------------|
| U2            |     1 | Single OR gate (5 SOT23) Fairchild NC7S32M5X (Top Mark: 7S32) |
| -             |     6 | Shunts (JU1-JU6)                                              |
| -             |     1 | PCB: MAX17085B EVALUATION KIT+                                |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Central Semiconductor Corp.            | 631-435-1110 | www.centralsemi.com         |
| Diodes Incorporated                    | 805-446-4800 | www.diodes.com              |
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| International Rectifier                | 310-322-3331 | www.irf.com                 |
| IRC, Inc.                              | 361-992-7900 | www.irctt.com               |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| SANYO Electric Co., Ltd.               | 619-661-6835 | www.sanyo.com               |
| Sumida Corp.                           | 847-545-6700 | www.sumida.com              |

Note: Indicate you are using the MAX17085B when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- MAX17085B	EV	kit
- 8V	to	22V,	5A	variable	power	supply
- Nine	voltmeters
- 5) Verify  that  a  shunt  is  installed  on  only  one  pin (forced-PWM mode).
- 6) Verify  that  a  shunt  is  installed  across  jumper  JU6 (relearn disable).
- 7) Connect a voltmeter across the following EV kit PCB pads:
- BATT\_IN	and	PGND
- SYSLD	and	PGND
- VOUT3	and	PGND
- VOUT5	and	PGND
- LDO3	and	PGND
- LDO5	and	PGND
- VAUX	and	PGND
- IINP	and	PGND
- PWM	and	PGND
- 8) Connect  the  power  supply  across  the  ADAPTER and PGND banana jacks.
- 9) Turn on the power supply.

## Procedure

The EV kit is a fully assembled and tested surface-mount board. Follow the steps below to verify board operation.

## Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Verify that a shunt is not installed across jumper JU1 (ISET voltage is set by potentiometer R9).
- 2) Verify  that  a  shunt  is  installed  across  jumper  JU2 (OUT5 enabled).
- 3) Verify  that  a  shunt  is  installed  across  jumper  JU3 (OUT3 enabled).
- 4) Verify  that  a  shunt  is  installed  across  pins  2-3 of jumper JU4 (BATT voltage set to 13.1V [3 cell x 4.375V]).

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX17085B Evaluation Kit

- 10)  Set the power-supply voltage to 20V.
- 11)  Adjust  potentiometer  R9  until  the  PWM  voltmeter measures 425mV. This sets the charge current to 2A.
- 12)  Verify the following :
- 13)  Verify  that  green  LEDs  D3  ( ACOK signal)  and  D4 (PGOOD signal) are on.
- 14)  The EV kit is now ready for additional testing.

| PARAMETER   |   MEASURE OUTPUT (V) |
|-------------|----------------------|
| BATT_IN     |                 13.1 |
| SYSLD       |                   20 |
| VOUT3       |                  3.3 |
| VOUT5       |                    5 |
| LDO5        |                    5 |
| LDO3        |                  3.3 |
| IINP        |                    0 |

## Detailed Description of Hardware

The MAX17085B  EV  kit  is a complete and fully assembled  and  tested  PCB  that  demonstrates  the highly integrated MAX17085B controller of multichemistry battery  charger,  two  step-down  converters,  and  two LDOs. The EV kit circuit is capable of supplying power to a system load (SYSLD) and two converters connected to the SYSLD output, while simultaneously charging the battery  pack.  The  EV  kit  circuit  also  integrates  a  third step-down,  DC-DC converter to  implement  a  precision constant-current/constant-voltage battery charger.

During operation, the EV kit circuit selects the ADAPTER or  the  BATT\_IN  input  as  the  main  power  source  for SYSLD.  Once  the  main  power  source  is  selected,  the EV  kit  circuit  monitors  the  input  source  current.  This input source current is defined as the combined SYSLD current, OUT3 and OUT5 converter input currents, and battery-charge current when the ADAPTER input is the main power source, or as the battery-discharge current when the  battery  is  the  main  power  source.  When  the input  source  current  exceeds  the  EV  kit  input  currentlimit threshold, the battery-charge current is reduced to give priority to the system load.

The  EV  kit  features  on-board  circuitry  that  allows  the user  to  adjust  and  set  battery-charge  voltage  and maximum  battery-charge  current. The  EV  kit also features  a  PWM  PCB  pad  that  is  used  to  connect  an analog  input  signal  or  a  PWM  signal  that  configures maximum battery-charge current up to 3.5A. The BATT battery-charge voltage threshold can be configured up to 17.5V by adjusting the voltage at the VCTL and CELLS input pins.

The  EV  kit  features  PCB  output  pads  to  access  the 5V/100mA  and  the  3.3V/50mA  LDOs  integrated  in  the IC. The low-current LDOs are available for external use. The  EV  kit's ACOK digital  output  signal  indicates  the presence of a valid input source, such as an AC adapter. The PGOOD digital output signal indicates that the OUT3 and OUT5 converter outputs (3.3V and 5V, respectively) are  within  specification.  The  IINP  analog  output  signal is  a  scaled  voltage  of  the  total  current  drawn  from  the ADAPTER input or the battery.

## Input Source

The  EV  kit  requires  a  5A  power  source  with  an  8V  to 22V  output  voltage  range  connected  to  the  ADAPTER banana-jack  connector,  or  a  power  source  with  an  8V to 19V output voltage range connected to the BATT\_IN banana-jack connector for normal operation. In a typical application,  the  battery  pack  is  connected  to  BATT\_IN and  a  DC  supply,  such  as  an  AC  adapter,  to  the ADAPTER banana-jack connectors. When the ADAPTER voltage is higher than 7.2V and the DCIN pin is greater than VBATT + 500mV, the ADAPTER is selected as the main power source. The battery at BATT\_IN is charged when the adapter is selected as the main power source and the system load current is less than the input current limit.

## Input Current Limit

The  EV  kit  input  source-current  limit  is  set  to  4A  with sense resistor R3 (15m I ). The input current is the sum of the system load current, input current to the OUT3 and OUT5 step-down converters, and battery-charge current when  the  ADAPTER  input  is  the  main  power  source, or  is  the  battery-discharge  current  when  the  battery at  BATT\_IN  is  the  main  power  source.  When  the  input current  exceeds  the  input  current  limit,  the  charging current is reduced to provide priority to the SYSLD load current.  As  the  SYSLD  current  approaches  the  limit threshold, the charge current drops linearly to zero.

The maximum input source-current limit can be reconfigured  by  replacing  sense  resistor  R3.  Use  the following equation to select a new sense resistor value:

<!-- formula-not-decoded -->

where ILIMIT is the new maximum input source-current limit and R3 is the value of the sense resistor.

Refer  to  the Setting  Input  Current  Limit section  in  the MAX17085B IC data sheet for further details.

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17085B Evaluation Kit

## Battery Charging

## Charge Voltage

The  EV  kit  battery-charge  voltage  can  be  configured for  up  to  17.5V  by  configuring  the  per-cell  voltage  at the VCTL pin. The EV kit per-cell voltage is configured to  4.375V  by  default  with  shorting  resistor  R10,  which connects  the  VCTL  pin  to  REF  (2.1V).  However,  the per-cell voltage can be set by setting the VCTL voltage between  0  and  2.1V  and  multiplying  that  voltage  by 2.083. Cut open the PC trace at resistor R10 and install resistors R10 and R18 to reset the VCTL pin voltage. Use the following equations to calculate new resistor values and configure the per-cell voltage:

<!-- formula-not-decoded -->

where  VCELL  is  the  per-cell  voltage,  VCTL  is  the  pin voltage, REF is 2.1V, and R18 is typically 100kΩ.

The resistor  values  should  not  overload  the  REF  linear regulator.  The  VCTL  voltage  must  be  set  between  0 and 2.1V. Note: The cell battery-termination voltage is a function  of  the  battery  chemistry  and  construction. Consult  the  battery  manufacturer  to  determine  this voltage.

The total BATT battery-charge voltage can be calculated with the following equation:

<!-- formula-not-decoded -->

where VBATT is the battery-charge voltage and NCELLS is  the  multiplying  cell  factor  (2,  3,  or  4)  selected.  See Table 1 to select the multiplying factor and jumper JU4 configuration.

Table 1. Mode Configuration (JU4)

| SHUNT POSITION   | CELLS PIN         | BATT VOLTAGE SETTING   |
|------------------|-------------------|------------------------|
| 1-2              | Connected to LDO5 | 4 x VCTL x 2.083       |
| Open             | Not connected     | 2 x VCTL x 2.083       |
| 2-3              | Connected to GND  | 3 x VCTL x 2.083       |

<!-- image -->

## Charge Current

The EV kit maximum battery-charge current can be set up to 3.5A by using potentiometer R9 to vary the ISET voltage between 0 and 2.1V. Set the ISET voltage below 26mV, or install a shunt across jumper JU1, to shut down the charger. See Table 2 for jumper JU1 configuration. The actual battery-charge current depends on the input source-current limit and the system load current. When the  system  load  current  exceeds  the  input  sourcecurrent limit, the charging current is reduced to provide priority to the SYSLD load current. As the SYSLD current increases to 4A, the charge current drops linearly to zero.

Use  the  following  equation  to  calculate  the  required voltage at  the  ISET  pin  to  set  a  new  maximum  charge current. The maximum charge current of 3.5A is achieved when the ISET voltage reaches 740mV:

<!-- formula-not-decoded -->

where VISET is the voltage at the ISET pin, REF is 2.1V, ICHG is the charge current, and R4 is the value of the sense resistor (10m I ).

The  maximum  charge  current  can  be  reconfigured  by replacing sense resistor R4. Use the following equation to select a new sense resistor value:

<!-- formula-not-decoded -->

where ICHG is the new maximum charge current and R4 is the value of the new sense resistor.

The maximum 3.5A charge current can also be set by removing the shunt across jumper JU1 and connecting a PWM input signal to the PWM PCB pad. The PWM signal should  have  a  100Hz  to  500kHz  frequency  range  and a duty cycle of 0 to 100%. Refer to the Setting Charge Current (ISET) section in the MAX17085B IC data sheet for more details.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX17085B Evaluation Kit

## IINP Output Signal

The  EV  kit  features  an  analog  output  (IINP)  to  allow current  monitoring  through  sense  resistor  R3.  The measured  current  is  either  the  input  adapter  current (SYSLD  current,  charge  current,  and  input  current  for OUT3  and  OUT5  converters)  or  the  battery  discharge current.  Use  an  ADC  to  measure  the  voltage  at  the IINP  PCB  pad.  The  voltage  at  the  IINP  output  can  be calculated with the following equation:

<!-- formula-not-decoded -->

where VIINP is the voltage at the IINP output pad, IINPUT is  the  ADAPTER  input  current  or  the  battery-discharge current, and R3 is the value of the sense resistor (15m I ).

The IINP output can be enabled or disabled by configuring jumper JU1. Battery charging is also disabled when IINP is disabled. See Table 2 for jumper JU1 configuration.

## VOUT3 and VOUT5 Step-Down Converters

The  MAX17085B  IC  also  integrates  two  step-down converters  (VOUT5  and  VOUT3)  with  the  outputs  set internally to 5V and 3.3V, respectively. The VOUT5 DC output-current limit is set to 8A (typ) with resistors R11 and  R12.  The  VOUT3  DC  output-current  limit  is  set  to 8A (typ) with resistors R15 and R16. Use the following equations to select new resistor values to reconfigure the current limit for each step-down converter output:

## Table 2. ISET Configuration (JU1)

| SHUNT POSITION   | ISET PIN         | EV KIT FUNCTION                                          |
|------------------|------------------|----------------------------------------------------------|
| Open             | Not connected    | Set maximum current with potentiometer R27 or PWM signal |
| Installed        | Connected to GND | Charger and IINP output are disabled                     |

## Table 3. ON5 Configuration (JU2)

| SHUNT POSITION   | ON5 PIN                               | OUT5 OUTPUT   |
|------------------|---------------------------------------|---------------|
| Installed        | Connected to LDO5                     | Enabled       |
| Open             | Connected to GND through resistor R20 | Disabled      |

## Table 4. ON3 Configuration (JU3)

| SHUNT POSITION   | ON3 PIN                               | OUT3 OUTPUT   |
|------------------|---------------------------------------|---------------|
| Installed        | Connected to LDO5                     | Enabled       |
| Open             | Connected to GND through resistor R19 | Disabled      |

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- formula-not-decoded -->

where  ILIM5  is  the  current-limit  valley  for  the  OUT5 converter  and  ILIM3  is  the  current-limit  valley  for  the OUT3  converter,  REF  equals  2.1V,  N8RDS(ON)  is  the static  drain-to-source  on-resistance  for  MOSFET  N8, N6RDS(ON)  is  the  static  drain-to-source  on-resistance for  MOSFET  N6,  R11  and  R12  are  the  voltage-divider resistors for the OUT5 converter, and R15 and R16 are the voltage-divider resistors for the OUT3 converter.

The  IC includes two input pins to independently enable and disable the VOUT5 and VOUT3 step-down converters.  The  EV  kit  features  jumpers  JU2  and  JU3 to  configure  control  input  pins  for  VOUT5  and  VOUT3, respectively. See Tables 3 and 4 for jumpers JU2 and JU3 configuration.

## Switching Frequency

The  IC's  switching  frequency  is  set  to  542kHz  with resistor  R13  (301kΩ).  Replace resistor  R13 with a new resistor  value  to  reconfigure  the  switching  frequency between 300kHz and 800kHz.

Use the following equation to choose the appropriate R13 resistor value to reconfigure the switching frequency (fSW):

<!-- formula-not-decoded -->

## MAX17085B Evaluation Kit

## Switching Mode

The  IC's  switching  mode  can  be  configured  to  one of three modes:  pulse  skipping,  forced  PWM,  or ultrasonic.  The  EV  kit  circuit  provides  jumper  JU5  to configure the switching mode. See Table 5 for jumper JU5 configuration.  Refer  to  the Modes of Operation section in the MAX17085B IC data sheet for details on the three switching modes.

## LDO3, LDO5 Linear Regulators and VAUX Output

The  IC  integrates  two  low-dropout  linear  regulators: LDO3 and LDO5. The EV kit circuit provides access to these linear regulators with PCB pads. The LDO3 output provides  50mA at 3.3V and the LDO5 output provides 100mA at 5V. The linear regulators can be used to power external circuitry.

The EV kit also includes circuitry that uses the VOUT5 output  and  the  DL5  gate-driver  output  to  generate  an unregulated 12V to 15V, 30mA output at the VAUX output pad (shunt installed on pins 1-2 of jumper JU5).

## ACOK and PGOOD Output Logic Signals

The  EV  kit  features  the ACOK output-logic  signal  that indicates  whether  a  valid  DC  source  is  connected  to the ADAPTER banana-jack connector. The ACOK signal is pulled low and green LED D3 is turned on when the voltage  at  the  ADAPTER  input  is  greater  than  16.5V; otherwise, ACOK is  pulled  high  to  5V  and  LED  D3  is turned off.

## Table 5. Switching Mode Configuration (JU5)

| SHUNT POSITION   | SKIP PIN          | SWITCHING MODE         |
|------------------|-------------------|------------------------|
| 1-2              | Connected to LDO5 | Pulse skipping         |
| Open             | Not connected     | Determined by feedback |
| 2-3              | Connected to GND  | Ultrasonic             |

<!-- image -->

The  EV  kit's  PGOOD  output-logic  signal  indicates whether the VOUT3 and VOUT5 outputs are within the specified limits. The PGOOD signal is pulled high to 5V and the green LED (D4) is turned on when the VOUT3 and  VOUT5  voltages  are  above  VOUT\_  -  250mV  and below VOUT\_ x 1.16; otherwise, PGOOD is pulled low and LED D3 is turned off.

## Relearn Mode

Relearn mode is implemented on the EV kit by configuring  jumper  JU6.  To  enable  relearn  mode,  remove  the shunt  on  JU6.  In  relearn  mode,  the  IC's  PDSL  gatedrive  adapter-selector  MOSFET  (N2)  is  disabled,  thus enabling the battery-selector MOSFET (P1). The battery applied at the BATT\_IN and PGND PCB pads services the loads applied at SYSLD, VOUT5, and VOUT3.

The EV kit  also  monitors  the  battery-discharge  voltage during relearn, when the ADAPTER power source is not present. When the battery reaches its critical dischargevoltage threshold, the system attempts to reenable the ADAPTER selection MOSFET (N1) if the proper voltage is applied at the ADPTER input.

Note: Before activating relearn mode, battery charging should be disabled (shunt installed at jumper JU1).

To disable relearn mode, install a shunt on jumper JU6. See Table 6 for jumper JU6 configuration.

An external signal can also be applied at the RELEARN PCB pad to enable/disable the EV kit relearn feature.

Table 6. Relearn Mode Configuration (JU6)

| SHUNT POSITION   | EV KIT FUNCTION       |
|------------------|-----------------------|
| Not installed    | Relearn mode enabled  |
| Installed        | Relearn mode disabled |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## MAX17085B Evaluation Kit

Figure 1. MAX17085B EV Kit Schematic

<!-- image -->

8      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

## MAX17085B Evaluation Kit

Figure 2. MAX17085B EV Kit Component Placement GuideComponent Side

<!-- image -->

<!-- image -->

Figure 3. MAX17085B EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX17085B EV Kit PCB Layout-Ground Planes (Layer 2)

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    9

## MAX17085B Evaluation Kit

<!-- image -->

Figure 5. MAX17085B EV Kit PCB Layout-Power Planes (Layer 3)

Figure 6. MAX17085B EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 7. MAX17085B EV Kit Component Placement GuideSolder Side

<!-- image -->

10      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17085B Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/10           | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.