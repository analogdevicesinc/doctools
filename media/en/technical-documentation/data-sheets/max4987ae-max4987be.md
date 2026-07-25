<!-- lastmod 2022-08-03 -->
## MAX4987AE

## General Description

The MAX4987AE are overvoltage protection devices with built-in ESD protection for USB data lines. These devices feature a low 100mΩ (typ) R ON internal nFET switch and protect low-voltage systems against voltage faults up to +28V.  When  the  input  voltage  exceeds  the  overvoltage threshold or decreases below the undervoltage threshold, the internal nFET switch is turned off to prevent damage to the protected components.

All  switches  feature  a  minimum  1.5A  current-limit  protection.  During  a  short-circuit  occurrence,  the  switch operates in an autoretry mode where the internal nFET switch is turned on to check if the fault has been removed. The autoretry interval is 30ms, and if the fault is removed, the nFET switch remains on.

The  MAX4987AE  feature  low-capacitance  (3pF)  ESD protection  for  USB  data  lines  that  allow  transmission  of high-speed USB 2.0 signals.

The  overvoltage  threshold  (OVLO)  is  preset  to  6.15V. The undervoltage thresholds (UVLO) are preset to 2.55V (MAX4987AE). When the input voltage drops below the undervoltage  (UVLO)  threshold,  the  devices  enter  a low-current standby mode.

All  devices  are  offered  in  a  small  2mm  x  3mm,  8-pin TDFN  package  and  operate  over  the  -40°C  to  +85°C extended temperature range.

## Applications

- Cell Phones
- Media Players

## Overvoltage-Protection Controller with USB ESD Protection

## Features

- Input Voltage Protection Up to +28V
- Integrated Low R ON (100mΩ) nFET Switch
- Internal Overcurrent Protection 1.5A (min)
- Overcurrent Protection (Autoretry)
- Enable Input
- Internal 30ms Startup Delay
- Low-Capacitance USB High-Speed Data Line ESD Protection (3pF)
- ±15kV Human Body Model
- ±15kV IEC61000-4-2 Air Gap
- ±6kV IEC61000-4-2 Contact
- Thermal-Shutdown Protection
- 2mm x 3mm, 8-Pin TDFN Package

Ordering Information and Typical Operating Circuit appears at end of data sheet.

<!-- image -->

## MAX4987AE

## Absolute Maximum Ratings

| (All voltages referenced to GND.)                                                                                          |
|----------------------------------------------------------------------------------------------------------------------------|
| IN............................................................................ 0.3V to +30V                                |
| OUT........................................................... -0.3V to +(IN + 0.3V)                                       |
| V CC , EN , ACOK , CD+, CD- .................................... -0.3V to +6V                                              |
| Continuous Power Dissipation (T A = +70°C) for multilayer board: 8-Pin TDFN (derate 16.7mW/°C above +70°C) ........ 1333mW |

## Overvoltage-Protection Controller with USB ESD Protection

| Operating Temperature Range ........................... -40°C to +85°C           |
|----------------------------------------------------------------------------------|
| Junction Temperature......................................................+150°C |
| Storage Temperature Range ............................ -65°C to +150°C           |
| Lead Temperature (soldering) ......................................... +300°C    |

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## Package Information

| PACKAGE TYPE: 8 TDFN                 | PACKAGE TYPE: 8 TDFN                 |
|--------------------------------------|--------------------------------------|
| Package Code                         | T823-1                               |
| Outline Number                       | 21-0174                              |
| THERMAL RESISTANCE, FOUR-LAYER BOARD | THERMAL RESISTANCE, FOUR-LAYER BOARD |
| Junction to Ambient (θ JA )          | 60.0°C/W                             |
| Junction to Case (θ JC )             | 10.8°C/W                             |

Package thermal resistances were obtained using the method described in JEDEC specification JESD51-7, using a four-layer board. For detailed information on package thermal considerations, refer to www.maximintegrated.com/thermal-tutorial .

For the latest package outline information and land patterns (footprints), go to www.maximintegrated.com/packages . Note that a '+', '#', or '-' in the package code indicates RoHS status only. Package drawings may show a different suffix character, but the drawing pertains to the package regardless of RoHS status.

## Electrical Characteristics

(V IN  = +2.2V to +28V, T A = -40°C to +85°C, unless otherwise noted. Typical values are at V IN  = +5V and T A = +25°C.)

| PARAMETER                          | SYMBOL   | CONDITIONS                         | CONDITIONS                         |   MIN |   TYP |   MAX | UNITS   |
|------------------------------------|----------|------------------------------------|------------------------------------|-------|-------|-------|---------|
| ANALOG SWITCH                      |          |                                    |                                    |       |       |       |         |
| Input-Voltage Range                | V IN     |                                    |                                    |   2.2 |       |    28 | V       |
| V CC Input Voltage                 | V CC     |                                    |                                    |       |       |   5.5 | V       |
| Input Supply Current               | I IN     | EN = 0V, V IN > V UVLO             | EN = 0V, V IN > V UVLO             |       |    60 |   150 | µA      |
| Input Supply Current               | I IN     | EN = 5V, V IN > V UVLO             | EN = 5V, V IN > V UVLO             |       |    50 |   100 | µA      |
| UVLO Supply Current                | I UVLO   | V IN < V UVLO                      | V IN < V UVLO                      |       |       |    40 | µA      |
| IN Undervoltage Lockout            | V UVLO   | (V IN falling)                     | MAX4987AE                          |   2.3 |       |       | V       |
| IN Undervoltage Lockout            | V UVLO   | (V IN rising)                      | MAX4987AE                          |  2.35 |  2.55 |  2.75 | V       |
| IN Undervoltage Lockout Hysteresis |          |                                    |                                    |       |     1 |       | %       |
| Overvoltage Trip Level             | V OVLO   | (V IN rising)                      | (V IN rising)                      |  5.55 |  6.15 |  6.45 | V       |
| Overvoltage Trip Level             | V OVLO   | (V IN falling)                     | (V IN falling)                     |   5.5 |       |       | V       |
| IN Overvoltage Lockout Hysteresis  |          |                                    |                                    |       |     1 |       | %       |
| Switch On-Resistance               | R ON     | V IN = 5V, I OUT = 500mA           | V IN = 5V, I OUT = 500mA           |       |   100 |   200 | mΩ      |
| Overcurrent Protection Threshold   | I LIM    |                                    |                                    |   1.5 |       |   4.2 | A       |
| Maximum Output Capacitance         |          | V IN = 5V, no overcurrent shutdown | V IN = 5V, no overcurrent shutdown |       |  1000 |       | µF      |
| CD+ and CD- Leakage Current        | I LKG_CD | V CC = 5.5V, V CD_ = 0V, 3.3V      | V CC = 5.5V, V CD_ = 0V, 3.3V      |  -300 |       |  +300 | nA      |
| CD+ and CD- Capacitance            | C CD     | f = 1MHz, V CD_ = 0.5 P-P          | f = 1MHz, V CD_ = 0.5 P-P          |       |     3 |       | pF      |

│

## Electrical Characteristics (continued)

(V IN  = +2.2V to +28V, T A = -40°C to +85°C, unless otherwise noted. Typical values are at V IN  = +5V and T A = +25°C.)

| PARAMETER                       | SYMBOL                          | CONDITIONS                                                           | MIN TYP   |   MAX | UNITS   |
|---------------------------------|---------------------------------|----------------------------------------------------------------------|-----------|-------|---------|
| DIGITAL SIGNALS                 |                                 |                                                                      |           |       |         |
| ACOK Output Low Voltage         | V OL                            | I SINK = 1mA                                                         |           |   0.4 | V       |
| ACOK High-Leakage Current       |                                 | V ACOK = 5.5V, flag deasserted                                       |           |     1 | µA      |
| EN Input-Voltage High           | V IH                            |                                                                      | 1.4       |       | V       |
| EN Input-Voltage Low            | V IL                            |                                                                      |           |   0.4 | V       |
| EN Input-Leakage Current        | I LEAK                          | V EN = 5.5V                                                          | -1        |    +1 | µA      |
| TIMING CHARACTERISTICS (Note 1) | TIMING CHARACTERISTICS (Note 1) |                                                                      |           |       |         |
| Debounce Time                   | t INDBC                         | Time from V UVLO < V IN < V OVLO to charge-pump enable               | 30        |       | ms      |
| ACOK Assertion Time             | t ACOK                          | V UVLO < V IN < V OVLO , to ACOK low                                 | 30        |       | ms      |
| Switch Turn-On Time             | t ON                            | V UVLO < V IN < V OVLO , R LOAD = 100Ω, from 10% to 90% of V OUT     | 3         |       | ms      |
| Switch Turn-Off Time            | t OFF                           | V IN < V UVLO or V IN > V OVLO to internal switch off, R LOAD = 100Ω |           |    10 | µs      |
| Current-Limit Turn-Off Time     | t BLANK                         | Overcurrent fault to internal switch off                             | 10        |       | µs      |
| Autoretry Time                  | t RETRY                         | From overcurrent fault to internal switch turn-on                    | 30        |       | ms      |
| THERMAL PROTECTION              |                                 |                                                                      |           |       |         |
| Thermal Shutdown                | T SHDN                          |                                                                      | 150       |       | °C      |
| Thermal-Shutdown Hysteresis     |                                 |                                                                      | 40        |       | °C      |
| ESD PROTECTION                  |                                 |                                                                      |           |       |         |
| CD+ and CD-                     |                                 | Human Body Model                                                     | ±15       |       | kV      |
| CD+ and CD-                     |                                 | IEC61000-4-2 Air Gap                                                 | ±15       |       | kV      |
| CD+ and CD-                     |                                 | IEC61000-4-2 Contact                                                 | ±6        |       | kV      |
| All Other Pins                  |                                 | Human Body Model                                                     | ±12       |       | kV      |

Note 1:

All timing is specified using 20% and 80% levels, unless otherwise noted.

## Typical Operating Characteristics

(T A = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

## Overvoltage-Protection Controller with USB ESD Protection

NORMALIZED UVLO THRESHOLD vs. TEMPERATURE

<!-- image -->

│

## Typical Operating Characteristics (continued)

(T A = +25°C, unless otherwise noted.)

<!-- image -->

│

## Overvoltage-Protection Controller with USB ESD Protection

## MAX4987AE

## Pin Configuration

<!-- image -->

## Pin Description

| PIN   | NAME   | FUNCTION                                                                                                                                                                                                                |
|-------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1     | IN     | Voltage Input. Bypass IN with a 1μF ceramic capacitor as close to the device as possible to obtain ±15kV HBM ESD protection. No capacitor required to obtain ±2kV HBM ESD protection.                                   |
| 2     | CD+    | USB Data Line                                                                                                                                                                                                           |
| 3     | GND    | Ground                                                                                                                                                                                                                  |
| 4     | CD-    | USB Data Line                                                                                                                                                                                                           |
| 5     | V CC   | Positive Supply-Voltage Input. V CC is required only when USB signals are present.                                                                                                                                      |
| 6     | EN     | Enable Active-Low Input. Drive EN low to enable the switch. Drive EN high to disable the switch.                                                                                                                        |
| 7     | ACOK   | Open-Drain Adapter-Voltage Indicator Output. ACOK is driven low after the V IN voltage is stable between UVLO and OVLO for 30ms (typ). Connect a pullup resistor from ACOK to the logic I/O voltage of the host system. |
| 8     | OUT    | Output Voltage. Output of internal switch.                                                                                                                                                                              |
| EP    | EP     | Exposed Pad. Connect exposed pad to ground. Do not use EP as a sole ground connection.                                                                                                                                  |

│

## MAX4987AE

## Functional Diagram

<!-- image -->

│

## Overvoltage-Protection Controller with USB ESD Protection

Figure 1. MAX4987AE Timing Diagram

<!-- image -->

## Detailed Description

The  MAX4987AE  are  overvoltage  protection  devices with integrated ESD protection for USB data lines. These devices  feature  a  low  R ON  internal  FET  and  protect low-voltage  systems  against  voltage  faults  up  to  +28V. If  the  input  voltage  exceeds  the  overvoltage  threshold, the internal nFET switch is turned off to prevent damage to  the  protected components. The 30ms debounce time prevents false turn-on of the internal nFET switch during startup. An open-drain active-low logic output is available to signal that a successful power-up has occurred.

## Device Operation

The MAX4987AE have an internal oscillator and charge pump that control the turn-on of the internal nFET switch. The internal oscillator controls the timers that enable the turn-on of the charge pump and controls the state of the open-drain ACOK output.  If  V IN   &lt;  V UVLO or  if  V IN   &gt; V OVLO , the internal oscillator remains off, thus disabling the charge pump. If V UVLO &lt; V IN  &lt; V OVLO , the internal charge pump is enabled. The charge-pump startup, after a 30ms internal delay, turns on the internal nFET switch and  asserts ACOK (see  Figure  1).  At  any  time,  if  V IN drops  below  V UVLO or  rises  above  V OVLO , ACOK is pulled high and the charge pump is disabled.

## Internal nFET Switch

The  MAX4987AE  incorporate  an  internal  nFET  switch with  a  100mΩ  (typ)  on-resistance.  The  nFET  switch  is internally  driven  by  a  charge  pump  that  generates  a voltage  above  the  input  voltage.  The  MAX4987AE  is equipped  with  a  1.5A  (min)  current-limit  protection  that turns off the nFET switch within 5µs (typ) during an over -current fault condition.

## Autoretry

The MAX4987AE have an overcurrent autoretry function that  turns  on  the  nFET  switch  again  after  a  30ms  (typ) retry time (see Figure 2). If the faulty load condition is still present after the blanking time, the switch turns off again and the cycle is repeated. The fast turn-off time and 30ms retry time result in a very low duty cycle in order to keep power consumption low. If the faulty load condition is not present, the switch remains on.

## Undervoltage Lockout (UVLO)

The  MAX4987AE  has  a  2.55V  undervoltage-lockout threshold (UVLO). When V IN  is less than V UVLO , ACOK is high impedance.

│

## MAX4987AE

## Overvoltage Lockout (OVLO)

The MAX4987AE have a 6.15V (typ) overvoltage thresh -old (OVLO). When V IN  is greater than V OVLO , ACOK is high impedance.

## ACOK

ACOK is an active-low open-drain output that asserts low when  V UVLO &lt;  V IN   &lt;  V OVLO  following  the  30ms  (typ) debounce period. Connect a pullup resistor from ACOK to the logic I/O voltage of the host system. During a shortcircuit fault, ACOK may deassert due to V IN  not being in the valid operating voltage range.

## Thermal-Shutdown Protection

The MAX4987AE feature thermal-shutdown circuitry. The internal  nFET  switch  turns  off  when  the  junction  temperature  exceeds  T SHDN  and  immediately  goes  into  a fault mode. The device exits thermal shutdown after the junction temperature cools by +40°C (typ).

## Applications Information

## IN Bypass Capacitor

For  most  applications,  bypass  IN  to  GND  with  a  1µF ceramic capacitor as close to the device as possible to enable ±15kV HBM ESD protection on IN. If ±15kV HBM ESD  protection  is  not  required,  there  is  no  capacitor required at IN. If the power source has significant induc -tance due to long lead length, take care to prevent overshoots due to the LC tank circuit and provide protection if necessary to prevent exceeding the absolute maximum rating on IN.

## ESD Test Conditions

ESD performance  depends  on  a  number  of  conditions. The MAX4987AE are specified for ±15kV HBM ESD pro -tection on the CD+, CD-, and IN pins when IN is bypassed to ground with a 1µF ceramic capacitor. The CD+ and CDinputs are also protected against ±15kV airgap and ±6kV contact IEC61000-4-2 ESD events.

## Human Body Model

Figure  3  shows  the  Human  Body  Model,  and  Figure  4 shows the current waveform it generates when discharged into  a  low  impedance.  This  model  consists  of  a  100pF capacitor charged to the ESD voltage of interest, that is then discharged into the device through a 1.5kΩ resistor.

## IEC 61000-4-2

The  IEC  61000-4-2  standard  covers  ESD  testing  and performance  of  finished  equipment.  It  does  not  spe -cifically refer to integrated circuits. The MAX4987AE are

## Overvoltage-Protection Controller with USB ESD Protection

<!-- image -->

Figure 2. Autoretry Timing Diagram

Figure 3. Human Body ESD Test Model

<!-- image -->

Figure 4. Human Body Current Waveform

<!-- image -->

## MAX4987AE

specified for ±15kV Air-Gap Discharge and ±6kV Contact Discharge IEC 61000-4-2 on the CD+ and CD- pins.

The  major  difference  between  tests  done  using  the Human Body Model and IEC 61000-4-2 is a higher peak current in IEC 61000-4-2, due to lower series resistance. Hence,  the  ESD  withstand  voltage  measured  to  IEC 61000-4-2  generally  is  lower  than  that  measured  using the Human Body Model. Figure 5 shows the IEC 610004-2 model. The Contact Discharge method connects the probe to the device before the probe is charged. The AirGap Discharge test involves approaching the device with a charged probe.

## Typical Operating Circuit

<!-- image -->

│

## Overvoltage-Protection Controller with USB ESD Protection

Figure 5. IEC 61000-4-2 ESD Test Model

<!-- image -->

## Ordering Information

| PART           | PIN- PACKAGE   | TOP MARK   | PACKAGE CODE   |   UVLO (V) |   OVLO (V) | OVERCURRENT MODE   |
|----------------|----------------|------------|----------------|------------|------------|--------------------|
| MAX4987AE ETA+ | 8 TDFN-EP*     | AAI        | T823-1         |       2.55 |       6.15 | Autoretry          |

Note: All devices are specified over the -40°C to +85°C operating temperature range.

+Denotes a lead-free package.

*EP = Exposed paddle.

## Chip Information

PROCESS: BiCMOS

M

A

X

4

9

8

7

E

## Overvoltage-Protection Controller with USB ESD Protection

## MAX4987AE

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                      | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------|-----------------|
|                 0 | 11/07           | Initial release                  | -               |
|                 1 | 4/19            | Removed all MAX4987BE references | 1-9             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and speci¿cations without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

│

## Overvoltage-Protection Controller with USB ESD Protection