<!-- lastmod 2022-08-04 -->
## MAX803/MAX809/ MAX810

## General Description

The MAX803/MAX809/MAX810 are microprocessor (μP) supervisory  circuits  used  to  monitor  the  power  supplies in μP and digital systems. They provide excellent circuit reliability and low cost by eliminating external components and adjustments when used with +5V, +3.3V, +3.0V, or +2.5V powered circuits.

These  circuits  perform  a  single  function:  they  assert  a reset  signal  whenever  the  V CC supply  voltage  declines below a preset threshold, keeping it asserted for at least 140ms  after  V CC has  risen  above  the  reset  threshold. Reset thresholds suitable for operation with a variety of supply voltages are available.

The MAX803 has an open-drain output stage, while the MAX809/MAX810 have push-pull outputs. The MAX803's open-drain RESET output requires a pullup resistor that can  be  connected  to  a  voltage  higher  than  V CC .  The MAX803/MAX809  have  an  active-low RESET output, while the MAX810 has an active-high RESET output. The reset comparator is designed to ignore fast transients on VCC , and the outputs are guaranteed to be in the correct logic state for V CC down to 1V.

Low supply current makes the MAX803/MAX809/MAX810 ideal  for  use  in  portable  equipment.  The  MAX803  is available  in  a  3-pin  SC70  package,  and  the  MAX809/ MAX810 are available in 3-pin SC70 or SOT23 packages.

## Applications

- Computers
- Controllers
- Intelligent Instruments
- Critical μP and μC Power Monitoring
- Portable/Battery-Powered Equipment
- Automotive

## 3-Pin Microprocessor Reset Circuits

## Benefits and Features

- Precision Monitoring of +2.5V, +3V, +3.3V, and +5V Power-Supply Voltages
- Fully Specified Over Temperature
- Available in Three Output Configurations
- Open-Drain RESET Output (MAX803)
- Push-Pull RESET Output (MAX809)
-  Push-Pull RESET Output (MAX810)
- 140ms (min) Power-On-Reset Pulse Width
- 12μA Supply Current
- Guaranteed Reset Valid to V CC  = +1V
- Power Supply Transient Immunity
- No External Components
- 3-Pin SC70 and SOT23 Packages
- AEC-Q100 Qualified. Refer to Ordering Information for Specific /V Versions.

Selector Guide and Ordering Information appear at end of data sheet.

## Typical Operating Circuit

<!-- image -->

<!-- image -->

## MAX803/MAX809/ MAX810

## Absolute Maximum Ratings

| Terminal Voltage (with respect to GND)                                                 |
|----------------------------------------------------------------------------------------|
| V CC ...................................................................-0.3V to +6.0V |
| RESET, RESET (push-pull).................. -0.3V to (V CC + 0.3V)                      |
| RESET (open drain) .........................................-0.3V to +6.0V             |
| Input Current, V CC ............................................................. 20mA |
| Output Current, RESET, RESET ........................................ 20mA             |
| Rate of Rise, V CC ..........................................................100V/μs   |

## 3-Pin Microprocessor Reset Circuits

| Continuous Power Dissipation (T A = +70°C)                                    |
|-------------------------------------------------------------------------------|
| 3-Pin SC70 (derate 2.17mW/°C above +70°C)...........174mW                     |
| 3-Pin SOT23 (derate 4mW/°C above +70°C) .............320mW                    |
| Operating Temperature Range                                                   |
| 3-Pin SC70................................................... -40°C to +125°C |
| 3-Pin SOT23................................................. -40°C to +105°C  |
| Storage Temperature Range .............................-65°C to +150°C        |
| Lead Temperature (soldering, 10s) .................................+300°C     |
| Soldering Temperature (reflow) .......................................+260°C  |

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## Electrical Characteristics

(V CC = full range, T A = -40°C to +105°C (SOT23) or T A = -40°C to +125°C (SC70), unless otherwise noted. Typical values are at T A  = +25°C, V CC  = 5V for L/M/J versions, V CC = 3.3V for T/S versions, V CC  = 3V for R version, and V CC = 2.5V for Z version.) (Note 1)

| PARAMETER       | SYMBOL   |                                      | CONDITIONS                           |   MIN |   TYP |   MAX | UNITS   |
|-----------------|----------|--------------------------------------|--------------------------------------|-------|-------|-------|---------|
|                 |          | T A = 0°C to +70°C                   | T A = 0°C to +70°C                   |   1.0 |       |   5.5 | V       |
| V CC Range      |          | T A = -40°C to +105°C (MAX8_ _ _EUR) | T A = -40°C to +105°C (MAX8_ _ _EUR) |   1.2 |       |   5.5 | V       |
| V CC Range      |          | T A = -40°C to +125°C (MAX8_ _ _EXR) | T A = -40°C to +125°C (MAX8_ _ _EXR) |   1.2 |       |   5.5 | V       |
| Current (SOT23) | I CC     | T A = -40°C                          | V CC < 5.5V, MAX8_ _L/M              |       |    24 |    60 | µA      |
| Current (SOT23) |          | T A = -40°C                          | V CC < 3.6V, MAX8_ _R/S/T/Z          |       |    17 |    50 | µA      |
| Current (SOT23) |          | T A = +85°C to +105°C                | V CC < 5.5V, MAX8_ _L/M              |       |       |   100 | µA      |
| Current (SOT23) |          | T A = +85°C to +105°C                | V CC < 3.6V, MAX8_ _R/S/T/Z          |       |       |   100 | µA      |
| Current (SC70)  | I CC     | T A = -40°C to +85°C                 | V CC < 5.5V, MAX8_ _L/M              |       |    24 |    35 | µA      |
| Current (SC70)  |          | T A = -40°C to +85°C                 | V CC < 3.6V, MAX8_ _R/S/T/Z          |       |    17 |    30 | µA      |
| Current (SC70)  |          | T A = +85°C to +125°C                | V CC < 5.5V, MAX8_ _L/M              |       |       |    60 | µA      |
| Current (SC70)  |          | T A = +85°C to +125°C                | V CC < 3.6V, MAX8_ _R/S/T/Z          |       |       |    60 | µA      |
| Threshold       |          | MAX8_ _L                             | T A = +25°C                          |  4.56 |  4.63 |  4.70 | V       |
| Threshold       |          | MAX8_ _L                             | T A = -40°C to +85°C                 |  4.50 |       |  4.75 | V       |
| Threshold       |          | MAX8_ _L                             | T A = -40°C to +125°C                |  4.40 |       |  4.86 | V       |
| Threshold       |          | MAX8_ _M                             | T A = +25°C                          |  4.31 |  4.38 |  4.45 | V       |
| Threshold       |          | MAX8_ _M                             | T A = -40°C to +85°C                 |  4.25 |       |  4.50 | V       |
| Threshold       |          | MAX8_ _M                             | T A = -40°C to +125°C                |  4.16 |       |  4.56 | V       |
| Threshold       |          | (SOT only)                           | T A = +25°C                          |  3.93 |  4.00 |  4.06 | V       |
| Threshold       |          | (SOT only)                           | T A = -40°C to +85°C                 |  3.89 |       |  4.10 | V       |
| Threshold       | V        | (SOT only)                           | T A = -40°C to +125°C                |  3.80 |       |  4.20 | V       |
| only)           | TH       | T A =                                | T A = +25°C                          |  3.04 |  3.08 |  3.11 | V       |
| Threshold       |          | T A = T A = T A =                    | -40°C to +85°C                       |  3.00 |       |  3.15 | V       |
| Threshold       |          | T A = T A = T A =                    | -40°C to +125°C                      |  2.92 |       |  3.23 | V       |
| Threshold       |          |                                      | +25°C                                |  2.89 |  2.93 |  2.96 | V       |
| Threshold       |          |                                      | -40°C to +85°C                       |  2.85 |       |  3.00 | V       |
| Threshold       |          | A                                    | T = -40°C to +125°C                  |  2.78 |       |  3.08 | V       |
| Threshold       |          | A                                    | T = +25°C                            |  2.59 |  2.63 |  2.66 | V       |
| Threshold       |          | A                                    | T A = -40°C to +85°C                 |  2.55 |       |  2.70 | V       |

## MAX803/MAX809/ MAX810

## Electrical Characteristics (continued)

(V CC = full range, T A = -40°C to +105°C (SOT23) or T A = -40°C to +125°C (SC70), unless otherwise noted. Typical values are at T A  = +25°C, V CC  = 5V for L/M/J versions, V CC = 3.3V for T/S versions, V CC  = 3V for R version, and V CC = 2.5V for Z version.) (Note 1)

| PARAMETER                                                                                     | SYMBOL   | CONDITIONS                                                        | MIN        | TYP        | MAX        | UNITS    |
|-----------------------------------------------------------------------------------------------|----------|-------------------------------------------------------------------|------------|------------|------------|----------|
| Reset Threshold (SC70 only)                                                                   |          | _L T A = +25°C T A = -40°C                                        | 4.56       | 4.63       | 4.70       | V        |
|                                                                                               |          | _L T A = +25°C T A = -40°C                                        | 4.50       |            | 4.75       | V        |
|                                                                                               |          | T A = -40°C to +125°C                                             | 4.44       |            | 4.82       | V        |
|                                                                                               |          | T A = +25°C                                                       | 4.31       | 4.38       | 4.45       | V        |
|                                                                                               |          | MAX8_ _M T A = -40°C to +85°C                                     | 4.25       |            | 4.50       | V        |
|                                                                                               |          | T A = -40°C to +125°C                                             | 4.20       |            | 4.56       | V        |
|                                                                                               | V TH     | _T T A = +25°C T A = -40°C T A = -40°C                            | 3.04       | 3.08       | 3.11       | V        |
|                                                                                               | V TH     | _T T A = +25°C T A = -40°C T A = -40°C                            | 3.00       |            | 3.15       | V        |
|                                                                                               | V TH     | to +125°C                                                         | 2.95       |            | 3.21       | V        |
|                                                                                               | V TH     | T A = +25°C                                                       | 2.89       | 2.93       | 2.96       | V        |
|                                                                                               | V TH     | MAX8_ _S T A = -40°C to +85°C                                     | 2.85       |            | 3.00       | V        |
|                                                                                               | V TH     | T = -40°C to +125°C                                               | 2.81       |            | 3.05       | V        |
|                                                                                               | V TH     | A _R T A = +25°C T A = -40°C T A = -40°C                          | 2.59       | 2.63       | 2.66       | V        |
|                                                                                               | V TH     | MAX8_ to +85°C                                                    | 2.55       |            | 2.70       | V        |
|                                                                                               | V TH     | to +125°C _Z only) T A = +25°C T A = -40°C T = -40°C              | 2.52       |            | 2.74       | V        |
|                                                                                               | V TH     | A                                                                 | 2.28       | 2.32       | 2.35       | V        |
|                                                                                               | V TH     | A                                                                 | 2.25       |            | 2.38       | V        |
|                                                                                               | V TH     | A                                                                 | 2.22       |            | 2.42       | V        |
| Reset Threshold Tempco                                                                        |          |                                                                   |            | 30         |            | ppm/ ° C |
| V CC to Reset Delay (Note 2)                                                                  |          | V CC = V TH to (V TH - 100mV)                                     |            | 20         |            | µs       |
| Reset Active Timeout Period                                                                   |          | T A = -40°C to +85°C                                              | 140        | 240        | 560        | ms       |
| (SOT23)                                                                                       |          | T A = +85°C to +105°C                                             | 100        |            | 840        |          |
| Reset Active Timeout Period                                                                   |          | T A = -40°C to +85°C                                              | 140        | 240        | 460        | ms       |
| (SC70)                                                                                        |          | T A = +85°C to +125°C                                             | 100        |            | 840        | ms       |
| RESET Output Voltage Low (push-pull active low and open- drain active low, MAX803 and MAX809) | V OL     | V CC = V TH (min), I SINK = 1.2mA, MAX803R/S/T/Z, MAX809R/S/T/Z   |            |            | 0.3        | V        |
| RESET Output Voltage Low (push-pull active low and open- drain active low, MAX803 and MAX809) | V OL     | V CC = V TH (min), I SINK = 3.2mA, MAX803L/M, MAX809J/L/M         |            |            | 0.4        | V        |
| RESET Output Voltage Low (push-pull active low and open- drain active low, MAX803 and MAX809) | V OL     | V CC > 1.0V, I SINK = 50µA                                        |            |            | 0.3        | V        |
| RESET Output Voltage High (push-pull active low MAX809)                                       | V OH     | V CC > V TH (max), I SOURCE = 500µA, MAX803R/S/T/Z, MAX809R/S/T/Z | 0.8V CC    |            |            | V        |
| RESET Output Voltage High (push-pull active low MAX809)                                       | V OH     | V CC > V TH (max), I SOURCE = 800µA, MAX803L/M, MAX809J/L/M       | V CC - 1.5 | V CC - 1.5 | V CC - 1.5 | V        |
| RESET Output Voltage Low (push-pull active high, MAX810)                                      | V OL     | V CC = V TH (max), I SINK = 1.2mA, MAX810R/S/T/Z                  |            |            | 0.3        | V        |
| RESET Output Voltage Low (push-pull active high, MAX810)                                      | V OL     | V CC = V TH (max), I SINK = 3.2mA, MAX810L/M                      |            |            | 0.4        | V        |

## 3-Pin Microprocessor Reset Circuits

## MAX803/MAX809/ MAX810

## Electrical Characteristics (continued)

(V CC = full range, T A = -40°C to +105°C (SOT23) or T A = -40°C to +125°C (SC70), unless otherwise noted. Typical values are at T A  = +25°C, V CC  = 5V for L/M/J versions, V CC = 3.3V for T/S versions, V CC  = 3V for R version, and V CC = 2.5V for Z version.) (Note 1)

| PARAMETER                                                 | SYMBOL   | CONDITIONS                                 | MIN     | TYP   |   MAX | UNITS   |
|-----------------------------------------------------------|----------|--------------------------------------------|---------|-------|-------|---------|
| RESET Output Voltage High (push-pull active high, MAX810) | V OH     | 1.8V < V CC < V TH (min), I SOURCE = 150µA | 0.8V CC |       |       | V       |
| RESET Open-Drain Output Leakage Current (MAX803) (Note 3) |          | V CC > V TH , RESET deasserted             |         |       |     1 | µA      |

Note 1: Production testing done at T A = +25°C; limits over temperature guaranteed by design only.

Note 2: RESET output for MAX803/MAX809; RESET output for MAX810.

Note 3: Guaranteed by design, not production tested.

## Typical Operating Characteristics

(V CC = full range, T A = -40°C to +105°C, unless otherwise noted. Typical values are at T A = +25°C, V CC = +5V for L/M/J versions, VCC = +3.3V for T/S versions, V CC = +3V for R version, and V CC = +2.5V for Z version.)

<!-- image -->

## 3-Pin Microprocessor Reset Circuits

## MAX803/MAX809/ MAX810

## Pin Configuration

<!-- image -->

## Pin Description

|   PIN | NAME                   | FUNCTION                                                                                                                              |
|-------|------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
|     1 | GND                    | Ground                                                                                                                                |
|     2 | RESET (MAX803/ MAX809) | RESET Output remains low while V CC is below the reset threshold, and for at least 140ms after V CC rises above the reset threshold.  |
|     2 | RESET (MAX810)         | RESET Output remains high while V CC is below the reset threshold, and for at least 140ms after V CC rises above the reset threshold. |
|     3 | V CC                   | Supply Voltage (+5V, +3.3V, +3.0V, or +2.5V)                                                                                          |

## Detailed Description

A  microprocessor's  (μP's)  reset  input  starts  the  μP  in  a known state. The MAX803/MAX809/MAX810 assert reset to prevent code-execution errors during power-up, powerdown, or brownout conditions. They assert a reset signal whenever the V CC supply voltage declines below a preset threshold, keeping it asserted for at least 140ms after V CC has  risen  above  the  reset  threshold.  The  MAX803  uses an open-drain output, and the MAX809/MAX810 have a push-pull output stage. Connect a pullup resistor on the MAX803's RESET output to any supply between 0 and 6V.

## Applications Information

## Negative-Going VCC Transients

In addition to issuing a reset to the μP during power-up, power-down,  and  brownout  conditions,  the  MAX803/ MAX809/MAX810 are relatively immune to short-duration negative-going V CC transients (glitches).

Figure 1 shows  typical transient duration vs. reset comparator  overdrive,  for  which  the  MAX803/MAX809/ MAX810  do not generate  a  reset  pulse.  The  graph was  generated  using  a  negative-going  pulse  applied

## 3-Pin Microprocessor Reset Circuits

to  V CC ,  starting  0.5V  above  the  actual  reset  threshold and  ending  below  it  by  the  magnitude  indicated  (reset comparator overdrive). The graph indicates the maximum pulse width a negative-going V CC transient can have without causing a reset pulse. As the magnitude of the transient increases  (goes  farther  below  the  reset  threshold),  the maximum allowable pulse width decreases. Typically,  for the  MAX8\_\_L and MAX8\_\_M, a V CC transient  that  goes 100mV below the reset threshold and lasts 20μs or less will not cause a reset pulse. A 0.1μF bypass capacitor mounted as  close  as  possible  to  the  V CC   pin  provides  additional transient immunity.

## Ensuring a Valid Reset Output Down to VCC = 0V

When V CC falls below 1V, the MAX809 RESET output no longer sinks current-it becomes an open circuit.

Therefore,  high-impedance  CMOS  logic  inputs  connect -ed  to RESET can  drift  to  undetermined  voltages.  This presents  no  problem  in  most  applications  since  most μP and other  circuitry  is  inoperative  with  V CC below  1V. However,  in  applications  where RESET must  be  valid down to 0V, adding a pull-down resistor to RESET causes any  stray  leakage  currents  to  flow  to  ground,  holding RESET low (Figure 2). R1's value is not critical; 100kΩ is large enough not to load RESET and small enough to pull RESET to ground.

A 100kΩ pullup resistor to V CC is also recommended for the MAX810 if RESET is required to remain valid for V CC &lt; 1V.

## Interfacing to μPs with Bidirectional Reset Pins

Since  the RESET output  on  the  MAX803  is  open drain,  this  device  interfaces  easily  with  μPs  that  have bidirectional  reset  pins,  such  as  the  Motorola  68HC11. Connecting the μP supervisor's RESET output directly to the μC's RESET pin  with  a  single  pullup  resistor  allows either device to assert reset (Figure 3).

## MAX803 Open-Drain RESET Output Allows Use with Multiple Supplies

Generally,  the  pullup  connected  to  the  MAX803  will connect to the supply voltage that is being monitored at the IC's V CC pin. However, some systems may use the opendrain output to level-shift from the monitored supply to reset circuitry  powered  by  some  other  supply  (Figure  4).  Note that as the MAX803's V CC decreases below 1V, so does the  IC's  ability  to  sink  current  at RESET .  Also,  with  any pullup, RESET will  be pulled high as V CC decays toward 0.  The  voltage  where  this  occurs  depends  on  the  pullup resistor value and the voltage to which it is connected.

## MAX803/MAX809/ MAX810

## Benefits of Highly Accurate Reset Threshold

Most  μP  supervisor  ICs  have  reset-threshold  voltages between 5% and 10% below the value of nominal supply voltages. This ensures a reset will not occur within 5% of the nominal supply, but will occur when the supply is 10% below nominal.

Figure 1. Maximum Transient Duration Without Causing a Reset Pulse vs. Reset Comparator Overdrive

<!-- image -->

Figure 2. RESET Valid to V CC  = Ground Circuit

<!-- image -->

## 3-Pin Microprocessor Reset Circuits

When using ICs rated at only the nominal supply ±5%, this  leaves  a  zone  of  uncertainty  where  the  supply  is between 5% and 10% low, and where the reset may or may not be asserted.

The MAX8\_ \_L/T/Z use highly accurate circuitry to ensure that  reset  is  asserted  close  to  the  5%  limit,  and  long before the supply has declined to 10% below nominal.

Figure 3. Interfacing to μPs with Bidirectional Reset I/O

<!-- image -->

Figure 4. MAX803 Open-Drain RESET Output Allows Use with Multiple Supplies

<!-- image -->

## MAX803/MAX809/ MAX810

## Selector Guide

| PART/SUFFIX   |   RESET THRESHOLD (V) | OUTPUT TYPE      |
|---------------|-----------------------|------------------|
| MAX803L       |                  4.63 | Open-Drain RESET |
| MAX803M       |                  4.38 | Open-Drain RESET |
| MAX803T       |                  3.08 | Open-Drain RESET |
| MAX803S       |                  2.93 | Open-Drain RESET |
| MAX803R       |                  2.63 | Open-Drain RESET |
| MAX803Z       |                  2.32 | Open-Drain RESET |
| MAX809L       |                  4.63 | Push-Pull RESET  |
| MAX809M       |                  4.38 | Push-Pull RESET  |
| MAX809J       |                  4.00 | Push-Pull RESET  |
| MAX809T       |                  3.08 | Push-Pull RESET  |
| MAX809S       |                  2.93 | Push-Pull RESET  |
| MAX809R       |                  2.63 | Push-Pull RESET  |
| MAX809Z       |                  2.32 | Push-Pull RESET  |
| MAX810L       |                  4.63 | Push-Pull RESET  |
| MAX810M       |                  4.38 | Push-Pull RESET  |
| MAX810T       |                  3.08 | Push-Pull RESET  |
| MAX810S       |                  2.93 | Push-Pull RESET  |
| MAX810R       |                  2.63 | Push-Pull RESET  |
| MAX810Z       |                  2.32 | Push-Pull RESET  |

## Ordering Information

| PART           | TEMP RANGE      | PIN-PACKAGE   |
|----------------|-----------------|---------------|
| MAX803 _EXR-T  | -40ºC to +125ºC | 3 SC70        |
| MAX803_EXR+T   | -40ºC to +125ºC | 3 SC70        |
| MAX803_EXR/V+  | -40ºC to +125ºC | 3 SC70        |
| MAX803_EXR/V+T | -40ºC to +125ºC | 3 SC70        |
| MAX803LEXR/V+  | -40ºC to +125ºC | 3 SC70        |
| MAX803MEXR/V+T | -40ºC to +125ºC | 3 SC70        |
| MAX803SEXR/V+T | -40ºC to +125ºC | 3 SC70        |
| MAX803TEXR/V+T | -40ºC to +125ºC | 3 SC70        |
| MAX809 _EXR-T  | -40ºC to +125ºC | 3 SC70        |
| MAX809_EXR+T   | -40ºC to +125ºC | 3 SC70        |
| MAX809_EUR-T   | -40ºC to +105ºC | 3 SOT23       |
| MAX809_EUR+T   | -40ºC to +105ºC | 3 SOT23       |
| MAX810 _EXR+T  | -40ºC to +125ºC | 3 SC70        |
| MAX810_EUR+T   | -40ºC to +105ºC | 3 SOT23       |

Note: These parts are offered in 2.5k reels, and must be ordered in 2.5k increments. Insert the desired suffix letter from the Selector Guide into the blank to complete the part number. All versions of these products may not be available at the time of announcement. Contact factory for availability.

Some devices are available in both leaded and lead-free packaging.

+ Denotes a lead(Pb)-free/RoHS-compliant package.

/V denotes an automotive qualified part.

T = Tape and reel.

## Chip Information

TRANSISTOR COUNT: 275 (SOT23)

380 (SC70)

## Package Information

For  the  latest  package  outline  information  and  land  patterns (footprints), go to www.maximintegrated.com/packages . Note that a '+', '#', or '-' in the package code indicates RoHS status only. Package drawings may show a different suffix character, but the drawing pertains to the package regardless of RoHS status.

| PACKAGE TYPE   | PACKAGE CODE   | DOCUMENT NO.   |
|----------------|----------------|----------------|
| 3 SC70         | X3+2, X3-2     | 21-0075        |
| 3 SOT23        | U3+1, U3-1     | 21-0051        |

## 3-Pin Microprocessor Reset Circuits

## MAX803/MAX809/ MAX810

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                     | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 12/94           | Initial release.                                                                                                                                                | -               |
|                 7 | 2/10            | Updated Ordering Information , added lead-free note, and added soldering temperature in the Absolute Maximum Ratings                                            | 1, 2            |
|                 8 | 12/12           | Added MAX803_EXR/V+ to Ordering Information                                                                                                                     | 1               |
|                 9 | 6/15            | Added MAX803_EXR/V+ to Ordering Information, moved Ordering Information , Pin Configuration , and Selector Guide to end of data sheet, and rebranded data sheet | 1-8             |
|                10 | 12/15           | Added lead-free package code information and removed top mark information from Selector Guide                                                                   | 7               |
|                11 | 10/17           | AddedAEC qualification statement to Benefits and Features section and updated Ordering Information table                                                        | 1, 7            |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-462, or visit Maxim Integrated's website at w.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

## 3-Pin Microprocessor Reset Circuits