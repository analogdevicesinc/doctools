<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The  MAX16955  evaluation  kit  (EV  kit)  is  a  fully  assembled  and  tested  PCB  that  contains  all  the  components necessary to evaluate the performance of the MAX16955 synchronous  PWM  step-down  controller.  The  device  is available  in  a  16-pin  TSSOP  package  and  features  an exposed pad for enhanced thermal dissipation.

The EV kit requires a 6V to 36V power supply for normal operation. The EV kit output is configured to 5V and can deliver up to 5A output current. The EV kit can be easily reconfigured to operate the controller in continuous PWM mode, SKIP mode, or external synchronization operation. The controller switching frequency is set to 400kHz. The EV kit includes a jumper to enable the cir  cuit and an LED to monitor the power-good output.

| DESIGNATION                         |   QTY | DESCRIPTION                                                            |
|-------------------------------------|-------|------------------------------------------------------------------------|
| BIAS, EN, FSYNC, OUT (x2), SUP (x2) |     7 | Red multipurpose test points                                           |
| C1                                  |     1 | 0.22 F F Q 10%, 50V X7R ceramic capacitor (0805) Murata GRM21BR71H224K |
| C2                                  |     1 | 47 F F Q 20%, 50V electrolytic capacitor (D8) Panasonic EEE-FK1H470XP  |
| C4                                  |     1 | 0.1 F F Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H104K  |
| C5, C9                              |     0 | Not installed, ceramic capacitors (0603)                               |
| C6                                  |     1 | 100 F F Q 20%, 6.3V X5R ceramic capacitor (1210) TDK C3325X5R0J107M    |
| C7                                  |     1 | 47 F F Q 20%, 6.3V X7R ceramic capacitor (1210) Murata GRM32ER70J476M  |
| C8                                  |     1 | 1 F F Q 10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C105K    |
| C10                                 |     1 | 6800pF Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H682K   |

<!-- image -->

- S 6V to 36V Input Range
- S 5V at Up to 5A Output
- S 400kHz Switching Frequency
- S Selectable Forced Fixed-Frequency PWM Mode, SKIP Mode, or External Synchronization
- S Power-Good LED Indicator
- S Enable Input
- S Cycle-by-Cycle Current Limit and Thermal Protection
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION     |   QTY | DESCRIPTION                                                           |
|-----------------|-------|-----------------------------------------------------------------------|
| C11             |     1 | 4.7 F F Q 10%, 50V X7R ceramic capacitor (1206) Murata GRM31CR71H475K |
| C13             |     1 | 4.7 F F Q 10%, 50V X7R ceramic capacitor (1210) Murata GRM32ER71H475K |
| D1              |     1 | 60V, 3A Schottky diode (SMB) Diodes Inc. B360B-13-F                   |
| D2              |     1 | Red LED (0603)                                                        |
| D3              |     0 | Not installed, Schottky diode (3 SOT23)                               |
| JU1             |     1 | 3-pin header                                                          |
| JU2             |     1 | 2-pin header                                                          |
| L1              |     1 | 5.5 F H Q 20%,10A inductor Würth 744325550                            |
| N1              |     1 | 40V, 6A dual n-channel MOSFET (8 SO) Fairchild FDS8949                |
| PGND (x5), SGND |     6 | Black multipurpose test points                                        |
| R2, R5, R6      |     0 | Not installed, resistors (0603)                                       |
| R4              |     1 | 0.015 I Q 1%, 1/2W resistor (1206) IRC LRF1206LF-01-R015-F            |
| R7, R12         |     2 | 0 I Q 5% resistors (0603)                                             |
| R8              |     1 | 66.5k I Q 1% resistor (0603)                                          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX16955 Evaluation Kit Evaluates: MAX16955

## Features

| DESIGNATION   |   QTY | DESCRIPTION                                                   |
|---------------|-------|---------------------------------------------------------------|
| R9            |     1 | 13k I Q 1% resistor (0603)                                    |
| R10           |     1 | 10k I Q 5% resistor (0603)                                    |
| R11           |     1 | 51.1k I Q 1% resistor (0603)                                  |
| U1            |     1 | Synchronous buck converter (16 TSSOP-EP) Maxim MAX16955AUE/V+ |

- MAX16955 EV kit
- 12V, 1A power supply
- An  electronic  load  capable  of  sinking  1A    (e.g.,HP6060B)
- Two digital voltmeters (DVMs)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1)  Verify  that  a  shunt  is  installed  across  pins  2-3  on jumper JU1.
- 2)  Verify that a shunt is not installed across jumper JU2 (output enabled).
- 3)  Connect  the  load  across  the  OUT  and  PGND  test points.
- 4)  Connect the first DVM across the SUP and PGND test points.
- 5)  Connect the second DVM across the OUT and PGND test points.
- 6)  Connect  the  power  supply's  positive  and  ground terminals to the SUP and PGND  test points, respectively.

<!-- image -->

## MAX16955 Evaluation Kit

## Evaluates: MAX16955

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                  |
|---------------|-------|------------------------------|
| -             |     2 | Shunts                       |
| -             |     1 | PCB: MAX16955 EVALUATION KIT |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Diodes Incorporated                    | 805-446-4800 | www.diodes.com              |
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| IRC, Inc.                              | 361-992-7900 | www.irctt.com               |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| Würth Electronik GmbH & Co. KG         | 201-785-8800 | www.we-online.com           |

Note: Indicate that you are using the MAX16955 when contacting these component suppliers.

## Quick Start

## Required Equipment

- 7)  Turn on the power supply and set to 12V with a 1A current limit.
- 8)  Enable the 1A electronic load.
- 9)  Verify that the red LED (D2) is off and the DVM at OUT measures 5V.

## Detailed Description of Hardware

The  MAX16955  EV  kit  is  a  fully  assembled  and  tested PCB  that  contains  all  the  components  neces  sary  to evaluate the performance of the MAX16955 synchronous PWM step-down controller. The device is available in a 16-pin TSSOP package and features an exposed pad for thermal dissipation. The device has a 3.5V to 36V input voltage range. The EV kit circuit is designed to operate from a single DC power supply ranging from 6V to 36V.

The EV kit is configured to output 5V and provides up to 5A load current at the OUT and PGND test points. The switching frequency is set to 400kHz using resistor R8. The  peak  inductor  current  is  set  to  5.3A  using  resistor R4.  The  EV  kit  can  be  configured  to  operate  in  forced fixed-frequency PWM mode, low-quiescent current SKIP mode, or external synchroniza  tion using jumper JU1. The EV  kit  features  test  points  to  evaluate  the  enable  (EN) feature  and  to  monitor  the  BIAS  output  volta  ge.  A red  LED  (D2)  is  available  to  monitor  the  power-good (PGOOD) output signal.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Table 1. Jumper Descriptions (JU1, JU2)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                                                                       |
|----------|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU1      | 1-2              | Connects FSYNC to V BIAS to enable continuous PWM mode.                                                                                                                           |
| JU1      | 2-3*             | Connects FSYNC to AGND to enable SKIP mode under light-load conditions.                                                                                                           |
| JU1      | Open             | When FSYNC is unconnected, or when a clock source is present, continuous PWM mode is enabled. SYNC can be used to synchronize with other supplies when a clock source is present. |
| JU2      | Closed           | Connects EN to AGND (shutdown).                                                                                                                                                   |
| JU2      | Open*            | Connects EN to V SUP through a pullup resistor (normal operation).                                                                                                                |

## Modes of Operation (JU1)

Jumper JU1 configures the EV kit for external synchronization, forced fixed-frequency PWM, or SKIP mode operation. Install a shunt across pins 1-2 on JU1 to operate the EV kit in forced fixed-frequency PWM mode. Place a shunt across pins 2-3 on JU1 to operate in SKIP mode. Remove the shunt on JU1 when synchronizing, using an external digital clock signal at the FSYNC and SGND test points. Refer to the Forced Fixed-Frequency PWM Mode and Light-Load  Low-Quiescent  Operating  (SKIP)  Mode sections  in  the  MAX16955  IC  data  sheet  for  additional information. See Table 1 for JU1 configuration.

For external synchronization, apply a digital signal at the FSYNC and SGND test points with a frequency between 220kHz and 1.1MHz. For proper frequency synchronization, FSYNC's input frequency must be at least 110% of the  EV  kit's  programmed  internal  oscillator  frequency. When FSYNC is driven with an external digital clock, the device  synchronizes  to  the  rising  edge  of  the  external clock.  The  digital  square-wave  clock  source  at  FSYNC must provide the following signal qualities:

- 0 to 0.4V logic-low
- 1.4V to 5.5V logic-high
- 220kHz to 1.1MHz input frequency
- 100ns minimum pulse width

## Enable Control (JU2)

The EV kit output is enabled through pullup resistor R11 when the power source applied between the SUP and PGND test points is greater than 1.8V. To enable the EV kit output, remove the shunt on jumper JU2. To disable the EV kit output, install a shunt on JU2. See Table 2 for JU2 configuration.  If  the  EN  pin  is  toggled  from  low  to high, the switching regulator shuts down and remains off until the output voltage decays to 1.25V. At that point the EV kit output turns on using the soft-start sequence.

## Switching Frequency

The controller's approximate switching frequency is set to 400kHz by resistor R8. Replace resistor R8 with a new resistor  value  to  set  the  switching  frequency  between 220kHz  and  1MHz.  Refer  to  the Setting  the  Switching Frequency section  in  the  MAX16955  IC  data  sheet  for selecting  R8  when  reconfiguring  the  EV  kit  switching frequency.  When  reconfiguring  the  EV  kit  switching frequency,  it  is  necessary  to  replace  the  compensation  network  components  C9,  C10,  R9,  and  power components. Refer  to  the Design  Procedure section  in the  MAX16955  IC  data  sheet  for  computing  new  compensation and power component values.

<!-- image -->

## Configuring the Output Voltage (OUT)

The EV kit step-down controller's output voltage (OUT) is configured to 5V. OUT can be reconfigured between 1V and 10V by removing resistor R7 and inserting feedback resistors at the R5 and R6 (0603) PCB pads. To configure the EV kit's output voltage, refer to the Setting the Output Voltage section  in  the  MAX16955  IC  data  sheet  for instructions on selecting resistor values. Also refer to the Effective Input-Voltage Range and Output Capacitor sections in the MAX16955 IC data sheet. Refer to the Design Procedure section in the MAX16955 IC data sheet and modify the compensation network accordingly.

## Power-Good Indicator (D2)

The EV kit provides a red LED power-good indicator (D2) to  monitor  undervoltage  and  overvoltage  conditions  at OUT. D2 illuminates when OUT falls below 90% (typ) or rises above 111% (typ) of its nominal regulated voltage.

## Peak Inductor Current Limit

The device's current-limit circuit uses differential currentsense  inputs  (CS  and  OUT)  to  limit  the  peak  inductor current. The EV kit peak inductor current is set to 5.3A using resistor R4. Use the following equation to calculate the resistance needed to reconfigure the inductor peak current limit:

<!-- formula-not-decoded -->

where R4 is in milliohms and IILIM is the peak inductor current in amps.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16955 Evaluation Kit Evaluates: MAX16955

## MAX16955 Evaluation Kit

## Evaluates: MAX16955

<!-- image -->

Figure 1. MAX16955 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX16955 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX16955 Evaluation Kit

## Evaluates: MAX16955

Figure 3. MAX16955 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX16955 EV Kit PCB Layout-VCC Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 5. MAX16955 EV Kit PCB Layout-PGND and SGND Layer 3

<!-- image -->

## MAX16955 Evaluation Kit

## Evaluates: MAX16955

Figure 6. MAX16955 EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 7. MAX16955 EV Kit Component Placement GuideSolder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX16955EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX16955 Evaluation Kit

## Evaluates: MAX16955

## Revision  History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                      | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 2/11            | Initial release                                                                                                  | -               |
|                 1 | 1/12            | Changed V OUT max from 12V to 10V in the Configuring the Output Voltage (OUT) section to match the IC data sheet | 3               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8