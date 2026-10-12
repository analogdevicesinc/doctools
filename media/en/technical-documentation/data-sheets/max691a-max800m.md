<!-- lastmod 2022-08-04 -->
## MAX691A/MAX693A/ MAX800L/MAX800M

## General Description

The  MAX691A/MAX693A/MAX800L/MAX800M  microprocessor  (μP)  supervisory  circuits  are  pin-compatible upgrades to the MAX691, MAX693, and MAX695. They improve  performance  with  30μA  supply  current,  200ms typ reset active delay on power-up, and 6ns chip-enable propagation  delay.  Features  include  write  protection of  CMOS  RAM  or  EEPROM,  separate  watchdog  out -puts,  backup-battery  switchover,  and  a RESET output that  is  valid  with  V CC   down  to  1V.  The  MAX691A/ MAX800L have a 4.65V typical  reset-threshold  voltage, and  the  MAX693A/MAX800Ms'  reset  threshold  is  4.4V typical.  The  MAX800L/MAX800M  guarantee  power-fail accuracies to ±2%.

## Applications

- ● Computers
- ● Controllers
- ● Intelligent Instruments
- ● Critical μP Power Monitoring

## Typical Operating Circuit

MaxCap is a registered trademark of Kanthal Globar, Inc.

<!-- image -->

## Microprocessor Supervisory Circuits

## Features

- ● 200ms Power-OK/Reset Timeout Period
- ● 1μA Standby Current, 30μA Operating Current
- ● On-Board Gating of Chip-Enable Signals, 10ns max Delay
- ● MaxCap ® or SuperCap Compatible
- ● Guaranteed RESET Assertion to V CC  = +1V
- ● Voltage Monitor for Power-Fail or Low-Battery Warning
- ● Power-Fail Accuracy Guaranteed to ±2% (MAX800L/M)
- ● Available in 16-Pin Narrow SO, Plastic DIP, and TSSOP Packages

## Ordering Information

| PART        | TEMP RANGE     | PIN- PACKAGE   |
|-------------|----------------|----------------|
| MAX691 ACUE | -0°C to +70°C  | 16 TSSOP       |
| MAX691ACSE  | -0°C to +70°C  | 16 Narrow SO   |
| MAX691ACWE  | -0°C to +70°C  | 16 Wide SO     |
| MAX691ACPE  | -0°C to +70°C  | 16 Plastic DIP |
| MAX691AC/D  | -0°C to +70°C  | Dice*          |
| MAX691AEUE  | -0°C to +70°C  | 16 TSSOP       |
| MAX691AESE  | -40°C to +85°C | 16 Narrow SO   |
| MAX691AEWE  | -40°C to +85°C | 16 Wide SO     |
| MAX691AEPE  | -40°C to +85°C | 16 Plastic DIP |

Ordering Information continued at end of data sheet. * Dice are specified at T A  = +25°C, DC parameters only. Devices in PDIP, SO, and TSSOP packages are available in both leaded and lead-free packaging. Specify lead free by adding the + symbol at the end of the part number when ordering. Lead free not available for CERDIP package.

## Pin Configuration

<!-- image -->

<!-- image -->

## MAX691A/MAX693A/ MAX800L/MAX800M

## Absolute Maximum Ratings

| Terminal Voltage (with respect to GND) V CC ......................................................................-0.3V to +6V V VBATT .................................................................-0.3V to All Other Inputs....................................-0.3V to (V OUT + Input Current V CC V CC VBATT VBATT GND, BATT All Other Outputs ............................................................25mA   | Continuous Power Dissipation (T A = +70°C)                                |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
|                                                                                                                                                                                                                                                                                                                                                                                                                           | TSSOP (derate 6.70mW/°C above +70°C)..................533mW               |
| +6V                                                                                                                                                                                                                                                                                                                                                                                                                       | Narrow SO (derate 8.70mW/°C above +70°C) ...........696mW                 |
| 0.3V)                                                                                                                                                                                                                                                                                                                                                                                                                     | Wide SO (derate 9.52mW/°C above +70°C)...............762mW                |
|                                                                                                                                                                                                                                                                                                                                                                                                                           | Plastic DIP (derate 10.53mW/°C above +70°C) ..........842mW               |
| Peak..........................................................................1.0A                                                                                                                                                                                                                                                                                                                                        | CERDIP (derate 10.00mW/°C above +70°C)..............800mW                 |
| Continuous............................................................250mA                                                                                                                                                                                                                                                                                                                                               | Operating Temperature Ranges                                              |
| Peak..................................................................250mA                                                                                                                                                                                                                                                                                                                                               | MAX69_AC_ _/MAX800_C_ _............................0°C to +70°C           |
| Continuous..........................................................25mA                                                                                                                                                                                                                                                                                                                                                  | MAX69_AE_ _/MAX800_E_ _.........................-40°C to +85°C            |
| ON.............................................................100mA                                                                                                                                                                                                                                                                                                                                                      | MAX69_AMJE................................................-55°C to +125°C |
|                                                                                                                                                                                                                                                                                                                                                                                                                           | Storage Temperature Range .............................-65°C to +160°C    |
|                                                                                                                                                                                                                                                                                                                                                                                                                           | Lead Temperature (soldering, 10s) .................................+300°C |

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## Electrical Characteristics

(MAX691A, MAX800L: V CC  = +4.75V to +5.5V; MAX693A, MAX800M: V CC  = +4.5V to +5.5V; V VBATT  = 2.8V, T A  = T MIN  to T MAX , unless otherwise noted.

| PARAMETER                                                         | CONDITIONS                             | CONDITIONS                             | CONDITIONS                             | MIN            | TYP            | MAX           | UNITS   |
|-------------------------------------------------------------------|----------------------------------------|----------------------------------------|----------------------------------------|----------------|----------------|---------------|---------|
| Operating Voltage Range, V CC , V VBATT (Note 1)                  |                                        |                                        |                                        | 0              | 0              | 5.5           | V       |
| V OUT Output                                                      |                                        | I OUT = 25mA                           | I OUT = 25mA                           | V CC - 0.05    | V CC - 0.02    |               | V       |
| V OUT Output                                                      |                                        | I OUT = 250mA                          | MAX69_AC                               | V CC - 0.3     | V CC - 0.2     |               | V       |
| V OUT Output                                                      |                                        | I OUT = 250mA                          | MAX69_AE, MAX800_C/E                   | V CC - 0.35    | V CC - 0.2     |               | V       |
| V OUT Output                                                      |                                        | I OUT = 250mA                          | MAX69_A/M                              | V CC - 0.40    | V CC - 0.40    | V CC - 0.40   | V       |
| V OUT Output                                                      |                                        | I OUT = 210mA                          | MAX69_AC/AE, MAX800_C/E                | V CC - 0.3V    | V CC - 0.17    |               | V       |
| V CC -to-V OUT On-Resistance                                      |                                        | MAX69_AC, MAX800_C                     | MAX69_AC, MAX800_C                     |                | 0.8            | 1.2           |         |
| V CC -to-V OUT On-Resistance                                      |                                        | MAX69_AE, MAX800_E                     | MAX69_AE, MAX800_E                     |                | 0.8            | 1.4           | Ω       |
| V CC -to-V OUT On-Resistance                                      |                                        | MAX69_A/M                              | MAX69_A/M                              |                | 0.8            | 1.6           |         |
| V OUT in Battery-Backup Mode                                      |                                        |                                        |                                        | V VBATT - 0.3  | V VBATT - 0.3  |               | V       |
| V OUT in Battery-Backup Mode                                      | VBATT OUT V VBATT = 2.8V, I OUT = 10mA | VBATT OUT V VBATT = 2.8V, I OUT = 10mA | VBATT OUT V VBATT = 2.8V, I OUT = 10mA | V VBATT - 0.25 | V VBATT - 0.25 |               | V       |
| V OUT in Battery-Backup Mode                                      | V VBATT = 2.0V, I OUT = 5mA            | V VBATT = 2.0V, I OUT = 5mA            | V VBATT = 2.0V, I OUT = 5mA            | V VBATT - 0.15 | V VBATT - 0.15 |               | V       |
| VBATT-to-V OUT                                                    |                                        |                                        |                                        |                |                | 15            | Ω       |
| VBATT-to-V OUT                                                    | V VBATT = 2.8V                         | V VBATT = 2.8V                         | V VBATT = 2.8V                         |                |                | 25            | Ω       |
| On-Resistance                                                     |                                        |                                        |                                        |                |                | 30            |         |
| Supply Current in Normal Operating Mode (excludes I OUT )         |                                        | 1V                                     |                                        |                | 30             | 100           | µA      |
| Supply Current in Battery- Backup Mode (excludes I OUT ) (Note 2) |                                        | T A = +25°C                            | T A = +25°C                            |                | 0.04           | 1             | µA      |
| Supply Current in Battery- Backup Mode (excludes I OUT ) (Note 2) |                                        | T A = T MIN + T MIN                    | T A = T MIN + T MIN                    |                |                | 5             | µA      |
| VBATT Standby Current (Note 3)                                    |                                        | ≤ T A = +25°C                          | ≤ T A = +25°C                          | -0.1           | -0.1           | 0.02          | µA      |
| VBATT Standby Current (Note 3)                                    |                                        | T A = T MIN + T MIN                    | T A = T MIN + T MIN                    | -1.0           | -1.0           | 0.02          |         |
| Battery Switchover Threshold                                      |                                        |                                        |                                        | V VBATT + 0.3  | V VBATT + 0.3  | V VBATT + 0.3 | V       |
| Battery Switchover Threshold                                      | Power-down                             | Power-down                             | Power-down                             | V VBATT - 0.3  | V VBATT - 0.3  | V VBATT - 0.3 | V       |

## Microprocessor Supervisory Circuits

## MAX691A/MAX693A/ MAX800L/MAX800M

## Electrical Characteristics (continued)

(MAX691A, MAX800L: V CC  = +4.75V to +5.5V; MAX693A, MAX800M: V CC  = +4.5V to +5.5V; V VBATT  = 2.8V, T A  = T MIN  to T MAX , unless otherwise noted.

| PARAMETER                                            | CONDITIONS                                         | MIN         |   TYP |   MAX | UNITS        |
|------------------------------------------------------|----------------------------------------------------|-------------|-------|-------|--------------|
| Battery Switchover Hysteresis                        |                                                    |             |    60 |       | mV           |
| BATT ON Output Low                                   | I SINK = 3.2mA                                     |             |   0.1 |   0.4 | V            |
| Voltage                                              | I SINK = 25mA                                      |             |   0.7 |   1.5 | V            |
| BATT ON Output                                       | Sink current                                       |             |    60 |   100 | mA           |
| Short-Circuit Current                                | Source current                                     | 1           |    15 |   100 | µA           |
| RESET AND WATCHDOG TIMER                             | RESET AND WATCHDOG TIMER                           |             |       |       |              |
| Reset Threshold Voltage                              | MAX691A, MAX800L                                   | 4.50        |  4.65 |  4.75 | V            |
| Reset Threshold Voltage                              | MAX693A, MAX800M                                   | 4.25        |  4.40 |  4.50 | V            |
| Reset Threshold Voltage                              | MAX800L, T A = +25°C, V CC falling                 | 4.55        |       |  4.70 | V            |
| Reset Threshold Voltage                              | MAX800M, T A = +25°C, V CC falling                 | 4.30        |       |  4.45 | V            |
| Reset Threshold Hysteresis                           |                                                    |             |    15 |       | mV           |
| V CC to RESET Delay                                  | Power-down                                         |             |    80 |       | µs           |
| LOW LINE -to- RESET Delay                            |                                                    |             |   800 |       | ns           |
| Reset Active Timeout Period, Internal Oscillator     | Power-up                                           | 140         |   200 |   280 | ms           |
| Reset Active Timeout Period, External Clock (Note 4) | Power-up                                           |             |  2048 |       | Clock Cycles |
| Watchdog Timeout Period, Internal Oscillator         | Long period                                        | 1.0         |   1.6 |  2.25 | sec          |
| Watchdog Timeout Period, Internal Oscillator         | Short period                                       | 70          |   100 |   140 | ms           |
| Watchdog Timeout Period,                             | Long period                                        |             |  4096 |       | Clock        |
| External Clock (Note 4)                              | Short period                                       |             |  1024 |       | Cycles       |
| Minimum Watchdog Input Pulse Width                   | V IL = 0.8V, V IH = 0.75 x V CC                    | 100         |       |       | ns           |
| RESET Output Voltage                                 | I SINK = 50μA, V CC = 1V, VBATT = 0V, V CC falling |             | 0.004 |   0.3 | V            |
| RESET Output Voltage                                 | I SINK = 3.2mA, V CC = 4.25V                       |             |   0.1 |   0.4 | V            |
| RESET Output Voltage                                 | I SOURCE = 1.6mA, V CC = 5V                        | 3.5         |       |       | V            |
| RESET Output Short-Circuit Current                   | Output source current                              |             |     7 |    20 | mA           |
| RESET Output Voltage Low (Note 5)                    | I SINK = 3.2mA                                     | 0.1         |   0.4 |       | V            |
| LOW LINE Output Voltage                              | I SINK = 3.2mA, V CC = 4.25V                       |             |       |   0.4 | V            |
| LOW LINE Output Voltage                              | I SOURCE = 1μA, V CC = 5V                          | 3.5         |       |       |              |
| LOW LINE Output Short-Circuit Current                | Output source current                              | 1           |    15 |   100 | µA           |
|                                                      | I SINK = 3.2mA                                     |             |       |   0.4 |              |
| WDO Output Voltage                                   | I SOURCE = 500μA, V CC = 5V                        | 3.5         |       |       |              |
| WDO Output Short-Circuit Current                     | Output source current                              |             |     3 |    10 | mA           |
| WDI Threshold Voltage                                | V IH                                               | 0.75 x V CC |       |       |              |
| (Note 6)                                             | V IL                                               |             |       |   0.8 | V            |
| WDI Input Current                                    | WDI = 0V                                           | -50         |   -10 |       |              |
|                                                      | WDI = V OUT                                        |             |    20 |    50 | µA           |

## Microprocessor Supervisory Circuits

## MAX691A/MAX693A/ MAX800L/MAX800M

## Electrical Characteristics (continued)

(MAX691A, MAX800L: V CC  = +4.75V to +5.5V; MAX693A, MAX800M: V CC  = +4.5V to +5.5V; V VBATT  = 2.8V, T A  = T MIN  to T MAX , unless otherwise noted.

| PARAMETER                                   | CONDITIONS                                 | MIN         | TYP         | MAX   | UNITS   |
|---------------------------------------------|--------------------------------------------|-------------|-------------|-------|---------|
| POWER-FAIL COMPARATOR                       | POWER-FAIL COMPARATOR                      |             |             |       |         |
| PFI Input Threshold                         | MAX69_AC/AE/AM, V CC = 5V                  | 1.2         | 1.25        | 1.3   | V       |
| PFI Input Threshold                         | MAX800_C/E, V CC = 5V                      | 1.225       | 1.25        | 1.275 | V       |
| PFI Leakage Current                         |                                            |             | ±0.01       | ±25   | nA      |
| PFO Output Voltage                          | I SINK = 3.2mA                             |             |             | 0.4   | V       |
| PFO Output Voltage                          | I SOURCE = 1μA, V CC = 5V                  | 3.5         |             |       | V       |
| PFO Output Short-Circuit Current            | Output source current                      | 1           | 15          | 100   | µA      |
| PFI-to-PFO Delay                            | V IN = -20mV, V OD = 15mV                  |             | 25          |       | µs      |
| PFI-to-PFO Delay                            | V IN = 20mV, V OD = 15mV                   |             | 60          |       | µs      |
| CHIP-ENABLE GATING                          | CHIP-ENABLE GATING                         |             |             |       |         |
| CE IN Leakage Current                       | Disable mode                               |             | ±0.005      | ±1    | μA      |
| CE IN-to- CE OUT Resistance (Note 7)        | Enable mode                                |             | 75          | 150   | Ω       |
| CE OUT Short-Circuit Current (Reset Active) | Disable mode, CE OUT = 0V                  | 0.1         | 0.75        | 2.0   | mA      |
| CE IN-to- CE OUT Propagation Delay (Note 8) | 50Ω source impedance driver, C LOAD = 50pF |             | 6           | 10    | ns      |
| CE OUT Output-Voltage                       | V CC = 5V, I OUT = -100μA                  | 3.5         |             |       | V       |
| High (Reset Active)                         | V CC = 0V, VBATT = 2.8V, I OUT = 1μA       | 2.7         |             |       | V       |
| RESET-to- CE OUT Delay                      | Power-down                                 |             | 12          |       | µs      |
| INTERNAL OSCILLATOR                         | INTERNAL OSCILLATOR                        |             |             |       |         |
| OSC IN Leakage Current                      | OSC SEL = 0V                               |             | 0.10        | ±5    | µA      |
| OSC IN Input Pullup Current                 | OSC SEL = V OUT or floating, OSC IN = 0V   |             | 10          | 100   | μA      |
| OSC SEL Input Pullup Current                | OSC SEL = 0V                               |             | 10          | 100   | μA      |
| OSC IN Frequency Range                      | OSC SEL = 0V                               |             | 50          |       | kHz     |
| OSC IN External Oscillator                  | V IH                                       | V OUT - 0.3 | V OUT - 0.6 |       | V       |
| Threshold Voltage                           | V IL                                       |             | 3.65        | 2.00  | V       |
| OSC IN Frequency with External Capacitor    | OSC SEL = 0V, COSC = 47pF                  |             | 100         |       | kHz     |

Note 1: Either V CC  or VBATT can go to 0V, if the other is greater than 2.0V.

Note 2: The supply current drawn by the MAX691A/MAX800L/MAX800M from the battery excluding I OUT  typically goes to 10μA when (VBATT - 1V) &lt; V CC  &lt; VBATT. In most applications, this is a brief period as V CC  falls through this region.

Note 3: '+' = battery-discharging current, '--' = battery-charging current.

Note 4: Although presented as typical values, the number of clock cycles for the reset and watchdog timeout periods are fixed and do not vary with process or temperature.

Note 5: RESET is an open-drain output and sinks current only.

Note 6: WDI is internally connected to a voltage divider between V OUT  and GND. If unconnected, WDI is driven to 1.6V (typ), dis -abling the watchdog function.

Note 7: The chip-enable resistance is tested with V CC  = +4.75V for the MAX691A/MAX800L and V CC  = +4.5V for the MAX693A/ MAX800M. CE IN = CE OUT = V CC /2.

- Note 8: The chip-enable propagation delay is measured from the 50% point at CE IN to the 50% point at CE OUT.

## Microprocessor Supervisory Circuits

## MAX691A/MAX693A/ MAX800L/MAX800M

## Typical Operating Characteristics

(TA = +25°C, unless otherwise noted.)

<!-- image -->

## Microprocessor Supervisory Circuits

## MAX691A/MAX693A/ MAX800L/MAX800M

## Typical Operating Characteristics (continued)

(TA = +25°C, unless otherwise noted.)

<!-- image -->

## Microprocessor Supervisory Circuits

## MAX691A/MAX693A/ MAX800L/MAX800M

## Pin Description

|   PIN | NAME     | FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                                             |
|-------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     1 | VBATT    | Battery-Backup Input. Connect to external battery or capacitor and charging circuit. If backup battery is not used, connect to GND.                                                                                                                                                                                                                                                                                                  |
|     2 | V OUT    | Output Supply Voltage. When V CC is greater than VBATT and above the reset threshold, V OUT connects to V CC . When V CC falls below VBATT and is below the reset threshold, V OUT connects to VBATT. Connect a 0.1µF capacitor from V OUT to GND. Connect V OUT to V CC if no backup battery is used.                                                                                                                               |
|     3 | V CC     | Input Supply Voltage, 5V Input.                                                                                                                                                                                                                                                                                                                                                                                                      |
|     4 | GND      | Ground. 0V reference for all signals.                                                                                                                                                                                                                                                                                                                                                                                                |
|     5 | BATT ON  | Battery-On Output. When V OUT switches to VBATT, BATT ON goes high. When V OUT switches to V CC, BATT ON goes low. Connect the base of a PNP through a current-limiting resistor to BATT ON for V OUT current require- ments greater than 250mA.                                                                                                                                                                                     |
|     6 | LOW LINE | LOW LINE output goes low when V CC falls below the reset threshold. It returns high as soon as V CC rises above the reset threshold.                                                                                                                                                                                                                                                                                                 |
|     7 | OSC IN   | External Oscillator Input. When OSC SEL is unconnected or driven high, a 10µA pull-up connects from V OUT to OSC IN, the internal oscillator sets the reset and watchdog timeout periods, and OSC IN selects between fast and slow watchdog timeout periods. When OSC SEL is driven low, the reset and watchdog timeout periods may be set either by a capacitor from OSC IN to ground or by an external clock at OSC IN (Figure 3). |
|     8 | OSC SEL  | Oscillator Select. When OSC SEL is unconnected or driven high, the internal oscillator sets the reset delay and watchdog timeout period. When OSC SEL is low, the external oscillator input (OSC IN) is enabled (Table 1). OSC SEL has a 10µA internal pull-up.                                                                                                                                                                      |
|     9 | PFI      | Power-Fail Input. This is the noninverting input to the power-fail comparator. When PFI is less than 1.25V, PFO goes low. When PFI is not used, connect PFI to GND or V OUT .                                                                                                                                                                                                                                                        |
|    10 | PFO      | Power-Fail Output. This is the output of the power-fail comparator. PFO goes low when PFI is less than 1.25V. This is an uncommitted comparator, and has no effect on any other internal circuitry.                                                                                                                                                                                                                                  |
|    11 | WDI      | Watchdog Input. WDI is a three-level input. If WDI remains either high or low for longer than the watchdog time- out period, WDO goes low and reset is asserted for the reset timeout period. WDO remains low until the next tran- sition at WDI. Leaving WDI unconnected disables the watchdog function. WDI connects to an internal voltage divider between V OUT and GND, which sets it to mid-supply when left unconnected.      |
|    12 | CE OUT   | Chip-Enable Output. CE OUT goes low only when CE IN is low and V CC is above the reset threshold. If CE IN is low when reset is asserted, CE OUT will stay low for 15µs or until CE IN goes high, whichever occurs first.                                                                                                                                                                                                            |
|    13 | CE IN    | Chip-Enable Input. The input to chip-enable gating circuit. If CE IN is not used, connect CE IN to GND or V OUT.                                                                                                                                                                                                                                                                                                                     |
|    14 | WDO      | Watchdog Output. If WDI remains high or low longer than the watchdog timeout period, WDO goes low and reset is asserted for the reset timeout period. WDO returns high on the next transition at WDI. WDO remains high if WDI is unconnected.                                                                                                                                                                                        |
|    15 | RESET    | RESET Output goes low whenever V CC falls below the reset threshold. RESET will remain low typically for 200ms after VCC crosses the reset threshold on power-up.                                                                                                                                                                                                                                                                    |
|    16 | RESET    | RESET is an active-high output. It is open drain, and the inverse of RESET .                                                                                                                                                                                                                                                                                                                                                         |

## Detailed Description

## RESET and RESET Outputs

The MAX691A/MAX693A/MAX800L/MAX800M's RESET and RESET  outputs ensure that the μP (with reset inputs asserted either high or low) powers up in a known state, and  prevents  code-execution  errors  during  power-down or brownout conditions.

The RESET output is active low, and typically sinks 3.2mA at 0.1V saturation voltage in its active state. When deas -serted, RESET sources  1.6mA  at  typically  V OUT   -  0.5V. RESET  output  is  open  drain,  active  high,  and  typically sinks  3.2mA with a saturation voltage of 0.1V. When no backup battery is used, RESET output is guaranteed to be valid down to V CC  = 1V, and an external 10kΩ pulldown resistor  on RESET insures  that  it  will  be  valid  with  V CC down to GND (Figure 1). As V CC  goes below 1V, the gate drive  to  the RESET output  switch  reduces  accordingly, increasing  the  R DS(ON)   and  the  saturation  voltage.  The 10kΩ  pulldown  resistor  insures  the  parallel  combination of  switch  plus  resistor  is  around  10kΩ  and  the  output saturation voltage is below 0.4V while sinking 40μA. When using a 10kΩ external pulldown resistor, the high state for RESET output with V CC  = 4.75V will be 4.5V typical.

## Microprocessor Supervisory Circuits

## MAX691A/MAX693A/ MAX800L/MAX800M

Figure 1. Adding an external pulldown resistor ensures RESET is valid with V CC  down to GND.

<!-- image -->

For battery voltages ≥ 2V connected to VBATT, RESET and RESET remain valid for V CC  from 0V to 5.5V.

RESET and RESET are asserted when V CC  falls below the  reset  threshold  (4.65V  for  the  MAX691A/MAX800L, 4.4V for the MAX693A/MAX800M) and remain asserted for 200ms typ after V CC  rises above the reset threshold on  power-up  (Figure  5).  The  devices'  batteryswitchover comparator does not affect reset assertion. However, both reset outputs are asserted in batterybackup mode since VCC must be below the reset threshold to enter this mode.

## Watchdog Function

The watchdog monitors μP activity via the Watchdog Input (WDI). If the μP becomes inactive, RESET and  RESET are asserted. To use the watchdog function, connect WDI to a bus line or μP I/O line. If WDI remains high or low for longer than the watchdog timeout period (1.6s nominal), WDO ,  RESET,  and RESET are  asserted  (see  RESET and RESET Outputs section, and the Watchdog Output discussion on this page).

## Watchdog Input

A change of state (high to low, low to high, or a minimum 100ns  pulse)  at  the  WDI  during  the  watchdog  period resets the watchdog timer. The watchdog default timeout is 1.6s.

To disable the watchdog function, leave WDI floating. An internal  resistor  network  (100kΩ  equivalent  impedance at WDI) biases WDI to approximately 1.6V. Internal com -parators detect this level and disable the watchdog timer. When  V CC   is  below  the  reset  threshold,  the  watchdog

## Microprocessor Supervisory Circuits

Figure 2. Watchdog Timeout Period and Reset Active Time

<!-- image -->

function  is  disabled  and  WDI  is  disconnected  from  its internal resistor network, thus becoming high impedance.

## Watchdog Output

The Watchdog Output ( WDO )  remains high if there is a transition  or  pulse  at  WDI  during  the  watchdog  timeout period.  The  watchdog  function  is  disabled  and WDO is  a  logic  high  when  V CC   is  below  the  reset  threshold, battery-backup  mode  is  enabled,  or  WDI  is  an  open circuit. In watchdog mode, if no transition occurs at WDI during the watchdog timeout period, RESET and RESET are asserted for the reset timeout period (200ms typical). WDO goes low and remains low until the next transition at WDI (Figure 2). If WDI is held high or low indefinitely, RESET  and RESET will  generate  200ms  pulses  every 1.6s. WDO has a 2 x TTL output characteristic.

## Selecting an Alternative Watchdog and Reset Timeout Period

The OSC SEL and OSC IN inputs control the watchdog and  reset  timeout  periods.  Floating  OSC  SEL  and  OSC IN  or  tying  them  both  to  V OUT   selects  the  nominal  1.6s watchdog timeout period and 200ms reset timeout period. Connecting  OSC  IN  to  GND  and  floating  or  connecting OSC SEL to V OUT   selects  the  100ms  normal  watchdog timeout delay and 1.6s delay immediately after reset. The reset timeout delay remains 200ms (Figure 2). Select alter -native  timeout  periods  by  connecting  OSC  SEL  to  GND and connecting a capacitor between OSC IN and GND, or by externally driving OSC IN (Table 1 and Figure 3). OSC IN is internally connected to a ±100nA (typ) current source that charges and discharges the timing capacitor to create the oscillator  frequency, which sets the reset and watch -

## MAX691A/MAX693A/ MAX800L/MAX800M

## Microprocessor Supervisory Circuits

## Table 1. Reset Pulse Width and Watchdog Timeout Selections

| OSC SEL   | OSC IN               | WATCHDOG TIMEOUT PERIOD   | WATCHDOG TIMEOUT PERIOD   | RESET TIMEOUT PERIOD   |
|-----------|----------------------|---------------------------|---------------------------|------------------------|
| OSC SEL   | OSC IN               | NORMAL                    | IMMEDIATELY AFTER RESET   | RESET TIMEOUT PERIOD   |
| Low       | External Clock Input | 1024 clks                 | 4096 clks                 | 2048 clks              |
| Low       | External Capacitor   | (600/47pF x C)ms          | (2.4/47pF x C)sec         | (1200/47pF x C)ms      |
| Floating  | Low                  | 100ms                     | 1.6s                      | 200ms                  |
| Floating  | Floating             | 1.6s                      | 1.6s                      | 200ms                  |

Figure 3. Oscillator Circuits

<!-- image -->

dog timeout periods (see Connecting a Timing Capacitor at OSC IN in the Applications Information section).

## Chip-Enable Signal Gating

The  MAX691A/MAX693A/MAX800L/MAX800M  provide internal  gating  of  chip-enable  (CE)  signals  to  prevent erroneous data from being written to CMOS RAM in the event  of  a  power  failure.  During  normal  operation,  the CE gate is enabled and passes all CE transitions. When reset is asserted, this path becomes disabled, preventing erroneous data from corrupting the CMOS RAM. All these parts  use  a  series  transmission  gate  from CE IN  to CE OUT (Figure 4).

The 10ns max CE propagation delay from CE IN  to CE OUT enables the parts to be used with most μPs.

## Chip-Enable Input

The Chip-Enable Input ( CE IN)  is  high  impedance  (dis -abled mode) while RESET and RESET are asserted.

During  a  power-down  sequence  where  V CC   falls  below the reset threshold or a watchdog fault, CE IN assumes a high-impedance state when the voltage at CE IN goes high or 15μs after reset is asserted, whichever occurs first (Figure 5).

During a power-up sequence, CE IN remains high imped -ance,  regardless  of CE IN  activity,  until  reset  is  deas -serted following the reset timeout period.

In  the  high-impedance  mode,  the  leakage  currents  into this terminal are ±1μA max over temperature. In the lowimpedance mode, the impedance of CE IN appears as a 75Ω resistor in series with the load at CE OUT.

The propagation delay through the CE transmission gate depends on both the  source  impedance  of  the  drive  to CE IN  and  the  capacitive  loading  on  the  Chip-Enable Output  ( CE OUT)  (see  Chip-Enable  Propagation  Delay vs. CE OUT Load Capacitance in the Typical Operating Characteristics ). The CE propagation delay is production tested from the 50% point of CE IN to the 50% point of CE OUT using a 50Ω driver and 50pF of load capacitance (Figure  6).  For  minimum  propagation  delay,  minimize the  capacitive  load  at CE OUT,  and  use  a  low  outputimpedance driver.

## Chip-Enable Output

In  the  enabled  mode,  the  impedance  of CE OUT  is equivalent to 75Ω in series with the source driving CE IN. In the disabled mode, the 75Ω transmission gate is off and CE OUT is actively pulled to V OUT . This source turns off when the transmission gate is enabled.

## LOW LINE Output

LOW LINE is  the  buffered  output  of  the  reset  threshold comparator. LOW LINE typically sinks 3.2mA at 0.1V. For normal operation (V CC  above the LOW LINE threshold), LOW LINE is pulled to V OUT .

## Power-Fail Comparator

The power-fail comparator is an uncommitted compara -tor  that  has  no  effect  on  the  other  functions  of  the  IC. Common  uses  include  low-battery  indication  (Figure 7),  and  early  power-fail  warning  (see Typical  Operating Circuit ).

## MAX691A/MAX693A/ MAX800L/MAX800M

## Microprocessor Supervisory Circuits

Figure 4. MAX691A/MAX693A/MAX800L/MAX800M Block Diagram

<!-- image -->

Figure 5. Reset and Chip-Enable Timing

<!-- image -->

## MAX691A/MAX693A/ MAX800L/MAX800M

Figure 6. CE Propagation Delay Test Circuit

<!-- image -->

## Table 2. Input and Output Status in Battery-Backup Mode

*V CC  must be below the reset threshold to enter battery-backup mode.

|   PIN | NAME    | STATUS                                                                                                                                    |
|-------|---------|-------------------------------------------------------------------------------------------------------------------------------------------|
|     1 | VBATT   | Supply current is 1µA max.                                                                                                                |
|     2 | V OUT   | V OUT is connected to VBATT through an internal PMOS switch.                                                                              |
|     3 | V CC    | Battery switchover comparator monitors V CC for active switchover.                                                                        |
|     4 | GND     | GND 0V, 0V reference for all signals.                                                                                                     |
|     5 | BATT ON | Logic high. The open-circuit output is equal to V OUT .                                                                                   |
|     6 | LOWLINE | Logic low*                                                                                                                                |
|     7 | OSC IN  | OSC IN is ignored.                                                                                                                        |
|     8 | OSC SEL | OSC SEL is ignored.                                                                                                                       |
|     9 | PFI     | The power-fail comparator remains active in the battery-backup mode for V CC ≥ VBATT - 1.2V typ.                                          |
|    10 | PFO     | The power-fail comparator remains active in the battery-backup mode for V CC ≥ VBATT - 1.2V typ. Below this volt- age, PFO is forced low. |
|    11 | WDI     | Watchdog is ignored.                                                                                                                      |
|    12 | CE OUT  | Logic high. The open-circuit voltage is equal to V OUT .                                                                                  |
|    13 | CE IN   | High impedance                                                                                                                            |
|    14 | WDO     | Logic high. The open-circuit voltage is equal to V OUT .                                                                                  |
|    15 | RESET   | Logic low*                                                                                                                                |
|    16 | RESET   | High impedance*                                                                                                                           |

## Microprocessor Supervisory Circuits

Figure 7. Low-Battery Indicator

<!-- image -->

## Power-Fail Input

Power-Fail Input (PFI) is the input to the power-fail com -parator. It has a guaranteed input leakage of ±25nA max over temperature. The typical comparator delay is 25μs from  V IL to  V OL   (power  failing),  and  60μs  from  V IH to VOH (power being restored). If PFI is not used, connect it to ground.

## Power-Fail Output

The Power-Fail Output ( PFO )  goes  low  when  PFI  goes below  1.25V.  It  typically  sinks  3.2mA  with  a  saturation voltage  of  0.1V.  With  PFI  above  1.25V, PFO is  actively pulled to V OUT .

## Battery-Backup Mode

Two conditions are required to switch to battery-backup mode: 1) V CC  must be below the reset threshold, and 2) VCC must be below VBATT. Table 2 lists the status of the inputs and outputs in battery-backup mode.

## Battery-On Output

The  Battery-On  (BATT  ON)  output  indicates  the  status of the internal V CC /battery-switchover comparator, which controls  the  internal  VCC  and  VBATT  switches.  For VCC greater than  VBATT (ignoring  the  small  hysteresis effect), BATT ON typically sinks 3.2mA at 0.1V saturation voltage.  In  battery-backup  mode,  this  terminal  sources approximately  10μA  from  V OUT .  Use  BATT  ON  to  indi -cate battery-switchover status or to supply base drive to an external pass transistor for higher-current applications (see Typical Operating Circuit).

## Input Supply Voltage

The  Input  Supply  Voltage  (V CC )  should  be  a  regulated 5V.  V CC   connects  to  V OUT   via  a  parallel  diode  and  a large PMOS switch. The switch carries the entire cur-rent

## MAX691A/MAX693A/ MAX800L/MAX800M

load  for  currents  less  than  250mA.  The  parallel  diode carries any current in excess of 250mA. Both the switch and the diode have impedances less than 1Ω each. The maximum  continuous  current  is  250mA,  but  power-on transients may reach a maximum of 1A.

## Battery-Backup Input

The Battery-Backup Input (VBATT) is similar to the V CC input  except  the  PMOS  switch  and  parallel  diode  are much smaller. Accordingly, the on-resistances of the diode and the switch are each approximately 10Ω. Continuous current should be limited to 25mA and peak currents (only during power-up) limited to 250mA. The reverse leakage of this input is less than 1μA over temperature and supply voltage (Figure 8).

## Output Supply Voltage

The  Output  Supply  Voltage  (V OUT )  pin  is  internally  con -nected to the substrate of the IC and supplies current to the  external  system  and  internal  circuitry.  All  opencircuit outputs will, for example, assume the V OUT  voltage in their high states rather than the V CC  voltage. At the maximum source  current  of  250mA,  V OUT   will  typically  be  200mV below V CC . Decouple this terminal with a 0.1μF capacitor.

## Applications Information

The  MAX691A/MAX693A/MAX800L/MAX800M  are  not short-circuit  protected.  Shorting  V OUT   to  ground,  other than power-up transients such as charging a decoupling capacitor, destroys the device.

All  open-circuit  outputs  swing  between  V OUT   and  GND rather than V CC  and GND.

Figure 8. V CC  and VBATT to VOUT Switch

<!-- image -->

## Microprocessor Supervisory Circuits

If long leads connect to the chip inputs, insure that these leads  are  free  from  ringing  and  other  conditions  that would forward bias the chip's protection diodes.

There are three distinct modes of operation:

- 1)  Normal operating mode with all circuitry powered up. Typical  supply  current  from  V CC   is  35μA  while  only leakage currents flow from the battery.
- 2)  Battery-backup  mode  where  V CC   is  typically  within 0.7V below VBATT. All circuitry is powered up and the supply  current  from  the  battery  is  typically  less  than 60μA.
- 3)  Battery-backup mode where V CC  is less than VBATT by at least 0.7V. VBATT supply current is 1μA max.

## Using SuperCap or MaxCap with the MAX691A/MAX693A/MAX800L/MAX800M

VBATT has the same operating voltage  range  as  V CC , and the battery switchover threshold voltages are typically ±30mV centered at VBATT, allowing use of a SuperCap and  a  simple  charging  circuit  as  a  backup  source (Figure 9).

If  V CC   is  above  the  reset  threshold  and  VBATT  is  0.5V above V CC , current flows to V OUT  and V CC  from VBATT until the voltage at VBATT is less than 0.5V above V CC . For example, with a SuperCap connected to VBATT and through a diode to V CC , if V CC  quickly changes from 5.4V to 4.9V, the capacitor discharges through V OUT  and V CC until  VBATT reaches 5.1V typ. Leakage current through the  SuperCap  charging  diode  and  the  internal  power diode eventually discharges the SuperCap to V CC . Also, if V CC  and VBATT start from 0.1V above the reset thresh -

Figure 9. SuperCap or MaxCap on VBATT

<!-- image -->

## MAX691A/MAX693A/ MAX800L/MAX800M

Figure10. Alternate CE Gating

<!-- image -->

old  and  power is  lost  at  V CC ,  the  SuperCap  on  VBATT discharges  through  V CC   until  VBATT  reaches  the  reset threshold; then the battery-backup mode is initiated and the current through V CC  goes to zero.

## Using Separate Power Supplies for VBATT and VCC

If  using  separate  power  supplies  for  V CC   and  VBATT, VBATT must be less than 0.3V above V CC  when V CC is above the reset threshold. As described in the previous section, if VBATT exceeds this limit and power is lost at VCC, current flows continuously from VBATT to V CC  via the  VBATT-to-V OUT   diode  and  the  V OUT -to-V CC   switch until the circuit is broken (Figure 8).

## Alternate Chip-Enable Gating

Using memory devices with both CE and CE inputs allows the CE loop to be bypassed. To do this, connect CE IN to ground, pull up CE OUT to V OUT , and connect CE OUT to the CE input of each memory device (Figure 10). The CE input of each part then connects directly to the chip-select logic, which does not have to be gated.

## Microprocessor Supervisory Circuits

Figure 11. Adding Hysteresis to the Power-Fail Comparator

<!-- image -->

Figure 12. Monitoring a Negative Voltage

<!-- image -->

## MAX691A/MAX693A/ MAX800L/MAX800M

Figure 13. Maximum Transient Duration without Causing a Reset Pulse vs. Reset Comparator Overdriv

<!-- image -->

## Adding Hysteresis to the Power-Fail Comparator

Hysteresis adds a noise margin to the power-fail compar -ator and prevents repeated triggering of PFO when V IN is near the power-fail comparator trip point. Figure 11 shows how to add hysteresis to the power-fail comparator. Select the ratio  of  R1  and  R2  such  that  PFI  sees  1.25V  when VIN   falls  to  the  desired  trip  point  (V TRIP ).  Resistor  R3 adds hysteresis. It will typically be an order of magnitude greater than R1 or R2. The current through R1 and R2 should be at least 1μA to ensure that the 25nA (max) PFI input  current  does  not  shift  the  trip  point.  R3  should  be larger than 10kΩ to prevent it from loading down the PFO pin. Capacitor C1 adds noise rejection.

## Monitoring a Negative Voltage

The  power-fail  comparator  can  be  used  to  monitor  a negative supply voltage using Figure 12's circuit. When the negative supply is valid, PFO is low. When the nega -tive  supply  voltage  drops, PFO goes high. This circuit's

## Microprocessor Supervisory Circuits

accuracy is affected by the PFI threshold tolerance, the VCC voltage, and resistors R1 and R2.

## Backup-Battery Replacement

The backup battery  may  be  disconnected  while  V CC is above the reset threshold. No precautions are necessary to avoid spurious reset pulses.

## Negative-Going VCC Transients

While issuing resets to the μP during power-up, power -down,  and  brownout  conditions,  these  supervisors  are relatively  immune to short-duration, negative-going V CC transients (glitches). It is usually undesirable to reset the μP when V CC  experiences only small glitches.

Figure  13  shows  maximum transient duration vs. reset -comparator  overdrive,  for  which  reset  pulses  are not generated. The graph was produced using negativegoing VCC pulses,  starting  at  5V  and  ending  below  the  reset threshold  by  the  magnitude  indicated  (reset  comparator overdrive). The graph shows the maximum pulse width a negative-going V CC  transient may typically have without causing a reset pulse to be issued. As the amplitude of the transient increases (i.e., goes farther below the reset threshold), the maximum allowable pulse width decreas -es. Typically, a V CC  transient that goes 100mV below the reset threshold and lasts for 40μs or less will not cause a reset pulse to be issued.

A 100nF bypass capacitor mounted close to the V CC  pin provides additional transient immunity.

## Connecting a Timing Capacitor at OSC IN

When OSC SEL is connected to ground, OSC IN discon -nects from its internal 10μA (typ) pullup and is internally connected to a ±100nA current source. When a capacitor is connected from OSC IN to ground (to select alternative reset and watchdog timeout periods), the current source charges and discharges the timing capacitor to create the oscillator  that  controls  the  reset  and  watchdog  timeout period. To prevent timing errors or oscillator startup prob -

## MAX691A/MAX693A/ MAX800L/MAX800M

lems,  minimize  external  current  leakage  sources  at  this pin, and locate the capacitor as close to OSC IN as pos -sible. The sum of PC-board leakage plus OSC capacitor leakage must be small compared to ±100nA.

## Maximum VCC Fall Time

The V CC  fall time is limited by the propagation delay of the battery switchover comparator and should not exceed 0.03V/μs. A standard rule of thumb for filter capacitance on most regulators is on the order of 100μF per amp of current.  When the power supply is shut off or the main battery is disconnected, the associated initial V CC  fall rate is just the inverse or 1A/100μF = 0.01V/μs. The V CC  fall rate decreases with time as V CC  falls exponentially, which more than satisfies the maximum fall-time requirement.

## Watchdog Software Considerations

A  way  to  help  the  watchdog  timer  keep  a  closer  watch on software execution involves setting and resetting the watchdog input at different points in the program, rather than  'pulsing'  the  watchdog  input  high-low-high  or  lowhigh-low. This technique avoids a 'stuck' loop where the watchdog  timer  continues  to  be  reset  within  the  loop, keeping the watchdog from timing out. Figure 14 shows an example flow diagram where the I/O driving the watch -dog input is set high at the beginning of the program, set low at the beginning of every subroutine or loop, then set high again when the program returns to the beginning. If the program should 'hang' in any subroutine, the I/O is continually set low and the watchdog timer is allowed to time out, causing a reset or interrupt to be issued.

## Microprocessor Supervisory Circuits

Figure 14. Watchdog Flow Diagram

<!-- image -->

## MAX691A/MAX693A/ MAX800L/MAX800M

## Ordering Information (continued)

| PART            | TEMP RANGE      | PIN- PACKAGE   |
|-----------------|-----------------|----------------|
| MAX691AEJE      | -40°C to +85°C  | 16 CERDIP      |
| MAX691AMJE      | -55°C to +125°C | 16 CERDIP**    |
| MAX691AMSE/PR   | -55°C to +125°C | 16 Narrow SO** |
| MAX691AMSE/PR-T | -55°C to +125°C | 16 Narrow SO** |
| MAX693A CUE     | -0°C to +70°C   | 16 TSSOP       |
| MAX693ACSE      | -0°C to +70°C   | 16 Narrow SO   |
| MAX693ACWE      | -0°C to +70°C   | 16 Wide SO     |
| MAX693ACPE      | -0°C to +70°C   | 16 Plastic DIP |
| MAX693AC/D      | -0°C to +70°C   | Dice*          |
| MAX693AEUE      | -40°C to +85°C  | 16 TSSOP       |
| MAX693AESE      | -40°C to +85°C  | 16 Narrow SO   |
| MAX693AEWE      | -40°C to +85°C  | 16 Wide SO     |
| MAX693AEPE      | -40°C to +85°C  | 16 Plastic DIP |
| MAX693AEJE      | -40°C to +85°C  | 16 CERDIP      |
| MAX693AMJE      | -55°C to +125°C | 16 CERDIP      |
| MAX800L CUE     | -0°C to +70°C   | 16 TSSOP       |
| MAX800LCSE      | -0°C to +70°C   | 16 Narrow SO   |
| MAX800LCPE      | -0°C to +70°C   | 16 Plastic DIP |
| MAX800LEUE      | -40°C to +85°C  | 16 TSSOP       |
| MAX800LESE      | -40°C to +85°C  | 16 Narrow SO   |
| MAX800LEPE      | -40°C to +85°C  | 16 Plastic DIP |
| MAX800M CUE     | -0°C to +70°C   | 16 TSSOP       |
| MAX800MCSE      | -0°C to +70°C   | 16 Narrow SO   |
| MAX800MCPE      | -0°C to +70°C   | 16 Plastic DIP |
| MAX800MEUE      | -40°C to +85°C  | 16 TSSOP       |
| MAX800MESE      | -40°C to +85°C  | 16 Narrow SO   |
| MAX800MEPE      | -40°C to +85°C  | 16 Plastic DIP |

## Microprocessor Supervisory Circuits

## Chip Topography

<!-- image -->

## Package Information

For  the  latest  package  outline  information  and  land  patterns (footprints), go to www.maximintegrated.com/packages . Note that a '+', '#', or '-' in the package code indicates RoHS status only. Package drawings may show a different suffix character, but the drawing pertains to the package regardless of RoHS status.

| PACKAGE TYPE   | PKG CODE   | OUTLINE NO.   | LAND PATTERN NO.   |
|----------------|------------|---------------|--------------------|
| 16 TSSOP       | U16-1      | 21-0066       | 90-0117            |
| 16 CERDIP      | J16-3      | 21-0045       | -                  |
| 16 Narrow SO   | S16-3      | 21-0041       | 90-0097            |
| 16 Plastic DIP | P16-1      | 21-0043       | -                  |
| 16 Wide SO     | W16-1      | 21-0042       | 90-0107            |

## MAX691A/MAX693A/ MAX800L/MAX800M

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                             | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 09/92           | Initial release                                                                                         | -               |
|                 1 | 12/92           | Update Electrical Characteristics table.                                                                | 2, 3, 4         |
|                 2 | 5/93            | Update Electrical Characteristics table, Tables 1 and 2.                                                | 2, 3, 4, 9, 11  |
|                 3 | 12/93           | Update Electrical Characteristics table.                                                                | 2, 3, 4         |
|                 4 | 3/94            | Update Electrical Characteristics table.                                                                | 2, 3, 4         |
|                 5 | 8/94            | Correction to Figure 4.                                                                                 | 10              |
|                 6 | 1/95            | Update to new revision and correct errors.                                                              | -               |
|                 7 | 12/96           | Update Electrical Characteristics table.                                                                | 2, 3, 4         |
|                 8 | 12/99           | Updated Ordering Information , Pin Configuration , Absolute Maximum Ratings , and Package Information . | 1, 2, 16        |
|                 9 | 4/02            | Corrected Ordering Information .                                                                        | 1               |
|                10 | 11/05           | Added lead-free information.                                                                            | 1, 16           |
|                11 | 8/08            | Updated Ordering Information .                                                                          | 1, 16           |
|                12 | 9/14            | No /V OPNs; removed automotive reference from Applications section; updated Package Information table   | 1, 16           |
|                13 | 11/17           | Updated Electrical Characteristics table                                                                | 2               |
|                14 | 4/18            | Updated Ordering Information table                                                                      | 16              |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

## Microprocessor Supervisory Circuits