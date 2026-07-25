<!-- lastmod 2022-08-04 -->
<!-- image -->

## +5V Microprocessor Supervisory Circuits

## General Description

The MAX817/MAX818/MAX819 microprocessor (µP) supervisory circuits simplify power-supply monitoring, battery control, and chip-enable gating in µP systems by reducing the number of components required. These devices are designed for use in +5V-powered systems. Low supply current (11µA typical) and small package size make these devices ideal for portable applications. The MAX817/MAX818/MAX819 are specifically designed to ignore fast transients on VCC. Other supervisory functions include active-low reset, backupbattery switchover, watchdog input, battery freshness seal, and chip-enable gating. The Selector Guide below lists the specific functions available from each device.

These devices offer two pretrimmed reset threshold voltages for ±5% or ±10% power supplies: 4.65V for the L versions and 4.40V for the M versions. The MAX817/ MAX818/MAX819 are available in space-saving µMAX packages, as well as 8-pin DIP/SO.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Selector Guide

| FEATURE                                  | MAX817 L/M       | MAX818 L/M     | MAX819 L/M     |
|------------------------------------------|------------------|----------------|----------------|
| Active-Low Reset                         | ✔                | ✔              | ✔              |
| Backup-Battery Switchover                | ✔                | ✔              | ✔              |
| Power-Fail Comparator                    | ✔                | -              | ✔              |
| Watchdog Input                           | ✔                | ✔              | -              |
| Battery Freshness Seal                   | ✔                | ✔              | ✔              |
| Manual Reset Input                       | -                | -              | ✔              |
| Chip-Enable Gating                       | -                | ✔              | -              |
| Pin-Package                              | 8-DIP/SO/ µMAX   | 8-DIP/SO/ µMAX | 8-DIP/SO/ µMAX |
| Low-Power, Pin- Compatible Upgrades for: | MAX690A/ MAX692A | -              | MAX703/ MAX704 |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Applications

Battery-Powered Computers and Controllers

Embedded Controllers

Intelligent Instruments

Critical µP Monitoring

Portable Equipment

Typical Operating Circuit appears at end of data sheet.

*P

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- Precision Supply-Voltage Monitor:
- ♦ 4.65V (MAX81\_L) 4.40V (MAX81\_M)
- ♦ 11µA Quiescent Supply Current
- ♦ 200ms Reset Time Delay
- ♦ Watchdog Timer with 1.6sec Timeout (MAX817/MAX818)
- ♦ Battery-Backup Power Switching; Battery Voltage Can Exceed VCC
- ♦ Battery Freshness Seal
- ♦ On-Board, 3ns Gating of Chip-Enable Signals (MAX818)
- ♦ Uncommitted Voltage Monitor for Power-Fail or Low-Battery Warning (MAX817/MAX819)
- ♦ Manual Reset Input (MAX819)

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART †      | TEMP. RANGE   | PIN-PACKAGE   |
|-------------|---------------|---------------|
| MAX817 _CPA | 0°C to +70°C  | 8 Plastic DIP |
| MAX817_CSA  | 0°C to +70°C  | 8 SO          |
| MAX817_CUA  | 0°C to +70°C  | 8 µMAX        |

## Ordering Information continued on last page.

† These parts offer a choice of reset threshold voltage. From the table below, select the suffix corresponding to the desired threshold and insert it into the blank to complete the part number.

Devices are available in both leaded and lead-free packaging. Specify lead free by adding the + symbol at the end of the part number when ordering.

| SUFFIX   |   RESET THRESHOLD (V) |
|----------|-----------------------|
| L        |                  4.65 |
| M        |                  4.40 |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Configurations

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## +5V Microprocessor Supervisory Circuits

## ABSOLUTE MAXIMUM RATINGS

Input Voltage

VCC, BATT..........................................................-0.3V to +6.0V

All Other Pins (Note 1).............................-0.3V to (VCC + 0.3V)

Input Current

VCC Peak ..............................................................................1A

VCC Continuous .............................................................250mA

BATT Peak .....................................................................250mA

BATT Continuous .............................................................50mA

GND.................................................................................25mA

Output Current

OUT................................................................................250mA

All Other Outputs .............................................................25mA

OUT Short-Circuit Duration.................................................10sec

Continuous Power Dissipation (TA = +70°C)

Plastic DIP (derate 9.09mW/°C above +70°C) .............727mW

SO (derate 5.88mW/°C above +70°C)..........................471mW

µMAX (derate 4.10mW/°C above +70°C) .....................330mW

Operating Temperature Ranges

MAX81\_ \_C\_A......................................................0°C to +70°C

MAX81\_ \_E\_A ...................................................-40°C to +85°C

Storage Temperature Range.............................-65°C to +160°C

Lead Temperature (soldering, 10sec) .............................+300°C

Note 1: The input voltage limits on PFI and WDI may be exceeded (up to 12V VIN) if the current into these pins is limited to less than 10mA.

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS

(VCC = +4.75V to +5.5V for MAX81\_L, VCC = +4.5V to +5.5V for MAX81\_M, VBATT = 2.8V, TA = TMIN to TMAX, unless otherwise noted. Typical values are at TA = +25°C.)

| PARAMETER                                                 | SYMBOL   | CONDITIONS                                         | CONDITIONS                                         | MIN          | TYP           |   MAX | UNITS   |
|-----------------------------------------------------------|----------|----------------------------------------------------|----------------------------------------------------|--------------|---------------|-------|---------|
| Operating Voltage Range, V CC , V BATT (Note 2)           |          |                                                    |                                                    | 0            |               |   5.5 | V       |
| Supply Current (excluding I OUT )                         | I SUPPLY | As applicable; CE IN = 0V, MAX81_ _C               | As applicable; CE IN = 0V, MAX81_ _C               |              | 11            |    45 | µA      |
| Supply Current (excluding I OUT )                         | I SUPPLY | WDI and MR unconnected MAX81_ _E                   | WDI and MR unconnected MAX81_ _E                   |              | 11            |    60 | µA      |
| Supply Current in Battery- Backup Mode (excluding I OUT ) |          |                                                    | T A = +25°C                                        |              | 0.05          |   1.0 | µA      |
| Supply Current in Battery- Backup Mode (excluding I OUT ) |          | V CC = 0V T A = T MIN to T MAX                     | V CC = 0V T A = T MIN to T MAX                     |              |               |   5.0 | µA      |
| BATT Standby Current (Note 3)                             |          |                                                    | T A = +25°C                                        | -0.10        |               |  0.02 | µA      |
| BATT Standby Current (Note 3)                             |          | T A = T MIN to T MAX 5.5V > V CC > (V BATT + 0.2V) | T A = T MIN to T MAX 5.5V > V CC > (V BATT + 0.2V) | -1.00        |               |  0.02 | µA      |
| BATT Leakage Current, Freshness Seal Enabled              |          | V CC = 0V, V OUT = 0V                              | V CC = 0V, V OUT = 0V                              |              |               |     1 | µA      |
| V OUT Output                                              |          | I OUT = 5mA                                        |                                                    | V CC - 0.05  | V CC - 0.025  |       | V       |
| V OUT Output                                              |          | I OUT = 50mA                                       |                                                    | V CC - 0.5   | V CC - 0.25   |       | V       |
| V CC to OUT On-Resistance                                 |          |                                                    |                                                    |              | 5             |    10 | Ω       |
| BATT to OUT On-Resistance                                 |          |                                                    |                                                    |              | 100           |       | Ω       |
| V OUT in Battery-Backup Mode                              |          | I OUT = 250µA, V CC < (V BATT - 0.2V)              | I OUT = 250µA, V CC < (V BATT - 0.2V)              | V BATT - 0.1 | V BATT - 0.02 |       | V       |
| Battery Switch Threshold (V CC - V BATT )                 |          | V CC < V RST                                       | Power-up                                           |              | 20            |       | mV      |
| Battery Switch Threshold (V CC - V BATT )                 |          | V CC < V RST                                       | Power-down                                         |              | -20           |       | mV      |
| Battery Switchover Hysteresis                             |          |                                                    |                                                    |              | 40            |       | mV      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## +5V Microprocessor Supervisory Circuits

## ELECTRICAL CHARACTERISTICS (continued)

(VCC = +4.75V to +5.5V for MAX81\_L, VCC = +4.5V to +5.5V for MAX81\_M, VBATT = 2.8V, TA = TMIN to TMAX, unless otherwise noted. Typical values are at TA = +25°C.)

| PARAMETER                                  | SYMBOL                                     | CONDITIONS                                                        | MIN                                        | TYP                                        | MAX                                        | UNITS                                      |
|--------------------------------------------|--------------------------------------------|-------------------------------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|
| RESET AND WATCHDOG TIMER                   | RESET AND WATCHDOG TIMER                   | RESET AND WATCHDOG TIMER                                          | RESET AND WATCHDOG TIMER                   | RESET AND WATCHDOG TIMER                   | RESET AND WATCHDOG TIMER                   | RESET AND WATCHDOG TIMER                   |
| Reset Threshold                            | V RST                                      | MAX81_L                                                           | 4.50                                       | 4.65                                       | 4.75                                       | V                                          |
|                                            | V RST                                      | MAX81_M                                                           | 4.25                                       | 4.40                                       | 4.50                                       | V                                          |
| Reset Threshold Hysteresis                 |                                            |                                                                   |                                            | 25                                         |                                            | mV                                         |
| Reset Timeout Period                       | t RP                                       |                                                                   | 140                                        | 200                                        | 280                                        | ms                                         |
| RESET Output Voltage                       | V OH                                       | V CC > V RST(MAX), I SOURCE = 800µA                               | V CC - 1.5                                 |                                            |                                            |                                            |
|                                            | V OL                                       | V CC < V RST(MIN), I SINK = 3.2mA                                 |                                            |                                            | 0.4                                        |                                            |
|                                            | V OL                                       | MAX81_ _C, V CC = 1V, V CC falling, V BATT = 0V, I SINK = 50µA    |                                            |                                            | 0.3                                        | V                                          |
|                                            | V OL                                       | MAX81_ _E, V CC = 1.2V, V CC falling, V BATT = 0V, I SINK = 100µA |                                            |                                            | 0.3                                        |                                            |
| V CC to RESET Delay                        |                                            | From V RST , V CC falling at 10V/ms                               |                                            | 100                                        |                                            | µs                                         |
| Watchdog Timeout Period                    | tWD                                        |                                                                   | 1.00                                       | 1.60                                       | 2.25                                       | sec                                        |
| WDI Pulse Width                            | t WDI                                      | V IL = 0.4V, V IH = 0.8V CC                                       | 50                                         |                                            |                                            | ns                                         |
| WDI Input Threshold (Note 4)               | V IL                                       |                                                                   |                                            |                                            | 0.8                                        | V                                          |
|                                            | V IH                                       | V CC = 5V                                                         | 3.5                                        |                                            |                                            | V                                          |
| WDI Input Current (Note 5)                 |                                            | WDI = V CC , time average                                         |                                            | 120                                        | 160                                        | µA                                         |
|                                            |                                            | WDI = GND, time average                                           | -20                                        | -15                                        |                                            |                                            |
| POWER-FAIL COMPARATOR (MAX817/MAX819 only) | POWER-FAIL COMPARATOR (MAX817/MAX819 only) | POWER-FAIL COMPARATOR (MAX817/MAX819 only)                        | POWER-FAIL COMPARATOR (MAX817/MAX819 only) | POWER-FAIL COMPARATOR (MAX817/MAX819 only) | POWER-FAIL COMPARATOR (MAX817/MAX819 only) | POWER-FAIL COMPARATOR (MAX817/MAX819 only) |
| PFI Input Threshold                        | V PFT                                      |                                                                   | 1.20                                       | 1.25                                       | 1.30                                       | V                                          |
| PFI Input Hysteresis                       |                                            |                                                                   |                                            | 4                                          |                                            | mV                                         |
| PFI Input Current                          | I PFI                                      |                                                                   | -25                                        | 0.01                                       | 25                                         | nA                                         |
| PFO Output Voltage                         | V OL                                       | V PFI < 1.20V, I SINK = 3.2mA, V CC > 4.50V                       |                                            |                                            | 0.4                                        | V                                          |
|                                            | V OH                                       | V PFI > 1.30V, I SOURCE = 40µA, V CC > 4.5V                       | V CC - 1.5                                 |                                            |                                            |                                            |
| PFO Short-Circuit Current                  |                                            | V PFO = 0V                                                        |                                            | 250                                        | 500                                        | µA                                         |
| MANUAL RESET INPUT (MAX819 only)           | MANUAL RESET INPUT (MAX819 only)           | MANUAL RESET INPUT (MAX819 only)                                  | MANUAL RESET INPUT (MAX819 only)           | MANUAL RESET INPUT (MAX819 only)           | MANUAL RESET INPUT (MAX819 only)           | MANUAL RESET INPUT (MAX819 only)           |
| MR Input Threshold                         | V IL                                       |                                                                   | 0.8                                        |                                            |                                            |                                            |
| MR Input Threshold                         | V IH                                       |                                                                   |                                            |                                            | 2.0                                        | V                                          |
| MR Pulse Width                             |                                            |                                                                   | 1                                          |                                            |                                            | µs                                         |
| MR Pulse that Would Not Cause a Reset      |                                            |                                                                   |                                            | 100                                        |                                            | ns                                         |
| MR to Reset Delay                          |                                            |                                                                   |                                            | 120                                        |                                            | ns                                         |
| MR Pull-Up Resistance                      |                                            |                                                                   | 45                                         | 63                                         | 85                                         | k Ω                                        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## +5V Microprocessor Supervisory Circuits

## ELECTRICAL CHARACTERISTICS (continued)

(VCC = +4.75V to +5.5V for MAX81\_L, VCC = +4.5V to +5.5V for MAX81\_M, VBATT = 2.8V, TA = TMIN to TMAX, unless otherwise noted. Typical values are at TA = +25°C.)

| PARAMETER                                   | SYMBOL                           | CONDITIONS                                 | MIN                              | TYP                              | MAX                              | UNITS                            |
|---------------------------------------------|----------------------------------|--------------------------------------------|----------------------------------|----------------------------------|----------------------------------|----------------------------------|
| CHIP-ENABLE GATING (MAX818 only)            | CHIP-ENABLE GATING (MAX818 only) | CHIP-ENABLE GATING (MAX818 only)           | CHIP-ENABLE GATING (MAX818 only) | CHIP-ENABLE GATING (MAX818 only) | CHIP-ENABLE GATING (MAX818 only) | CHIP-ENABLE GATING (MAX818 only) |
| CE IN Leakage Current                       |                                  | Disable mode                               |                                  | ±0.005                           | ±1                               | µA                               |
| CE IN to CE OUT Resistance (Note 6)         |                                  | Enable mode                                |                                  | 40                               | 150                              | Ω                                |
| CE OUT Short-Circuit Current (Reset Active) |                                  | Disable mode, CE OUT = 0V                  | 0.1                              | 0.75                             | 2.0                              | mA                               |
| CE IN to CE OUT Propagation Delay (Note 7)  |                                  | 50 Ω source impedance driver, CLOAD = 50pF |                                  | 3                                | 8                                | ns                               |
| CE OUT Output                               | V OH                             | I OUT = -100µA, V CC = 0V                  | V CC - 1V                        |                                  |                                  | V                                |
| CE OUT Output                               | V OH                             | I OUT = -1µA, V CC = 0V, V BATT = 2.8V     | 2.7                              |                                  |                                  | V                                |
| CE OUT Input Threshold                      | V IH                             | V CC = 5V                                  |                                  |                                  | 0.8                              | V                                |
| CE OUT Input Threshold                      | V IL                             | V CC = 5V                                  | 3.5                              |                                  |                                  | V                                |
| RESET to CE OUT Delay                       |                                  | Power-down                                 |                                  | 15                               |                                  | µs                               |

Note 3: '-' = battery-charging current, '+' = battery-discharging current.

Note 4: WDI is internally serviced within the watchdog timeout period if WDI is left unconnected.

Note 5: WDI input is designed to be driven by a three-stated output device.  To float WDI, the 'high-impedance mode' of the output device must have a maximum leakage current of 10µA and a maximum output capacitance of 200pF. The output device must also be able to source and sink at least 200µA when active.

Note 6: The chip-enable resistance is tested with VCC = +4.75V for the MAX818L and VCC = +4.5V for the MAX818M. V CE IN = V CE OUT = VCC/2.

Note 7: The chip-enable propagation delay is measured from the 50% point at CE IN to the 50% point at CE OUT.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## +5V Microprocessor Supervisory Circuits

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics

(VCC = +5V, VBATT = 3.0V, TA = +25°C, unless otherwise noted.)

<!-- image -->

## +5V Microprocessor Supervisory Circuits

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics (continued)

(VCC = +5V, VBATT = 3.0V, TA = +25°C, unless otherwise noted.)

MAX817/18/19-10

<!-- image -->

CE IN TO CE OUT PROPAGATION DELAY vs. TEMPERATURE

<!-- image -->

6

A)

µ

BATTERY SUPPLY CURRENT (

<!-- image -->

MAX817/MAX819 PFI THRESHOLD vs. TEMPERATURE

<!-- image -->

<!-- image -->

MAX817/MAX819 PFI TO PFO PROPAGATION DELAY vs. TEMPERATURE

<!-- image -->

)

s

µ

PROPAGATION DELAY (

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## +5V Microprocessor Supervisory Circuits

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Description

| PIN    | PIN    | PIN    | NAME   | FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|--------|--------|--------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| MAX817 | MAX818 | MAX819 | NAME   | FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1      | 1      | 1      | OUT    | Supply Output for CMOS RAM. When V CC rises above the reset threshold or above V BATT , OUT is connected to V CC through an internal P-channel MOSFET switch. When V CC falls below V BATT , BATT connects to OUT.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 2      | 2      | 2      | V CC   | Input Supply Voltage, +5V input.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 3      | 3      | 3      | GND    | Ground. 0V reference for all signals.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 4      | -      | 4      | PFI    | Power-Fail Comparator Input. When V PFI is below V PFT or when V CC is below V BATT , PFO goes low; otherwise, PFO remains high (see Power-Fail Comparator section). Connect to ground if unused.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -      | 4      | -      | CE IN  | Chip-Enable Input. The input to the chip-enable gating circuit. Connect to ground if unused.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 5      | -      | 5      | PFO    | Power-Fail Comparator Output. When PFI is less than V PFT or when V CC is below V BATT , PFO goes low; otherwise PFO remains high. PFO is also used to enable the battery freshness seal (see Battery Freshness Seal and Power-Fail Comparator sections).                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -      | 5      | -      | CE OUT | Chip-Enable Output. CE OUT goes low only if CE IN is low while reset is not asserted. If CE IN is low when reset is asserted, CE OUT will remain low for 15µs or until CE IN goes high, whichever occurs first. CE OUT is pulled up to OUT in battery-backup mode. CE OUT is also used to enable the battery freshness seal (see Battery Freshness Seal section).                                                                                                                                                                                                                                                                                                               |
| 6      | 6      | -      | WDI    | Watchdog Input. If WDI remains either high or low for longer than the watch- dog timeout period, the internal watchdog timer runs out and a reset is trig- gered. If WDI is left unconnected or is connected to a high-impedance three-state buffer, the watchdog feature is disabled. The internal watchdog timer clears whenever reset is asserted, WDI is three-stated, or WDI sees a ris- ing or falling edge. The WDI input is designed to be driven by a three-stated- output device with a maximum high-impedance leakage current of 10µA and a maximum output capacitance of 200pF. The output device must also be capa- ble of sinking and sourcing 200µA when active. |
| -      | -      | 6      | MR     | Manual Reset Input. A logic low on MR asserts reset. Reset remains asserted for as long as MR is held low and for 200ms after MR returns high. The active- low input has an internal 63k Ω pull-up resistor. It can be driven from a TTL- or CMOS-logic line or shorted to ground with a switch. Leave open, or connect to V CC if unused.                                                                                                                                                                                                                                                                                                                                      |
| 7      | 7      | 7      | RESET  | Active-Low Reset Output. Pulses low for 200ms when triggered and remains low whenever V CC is below the reset threshold or when MR is a logic low. It remains low for 200ms after V CC rises above the reset threshold, the watchdog triggers a reset, or MR goes low to high.                                                                                                                                                                                                                                                                                                                                                                                                  |
| 8      | 8      | 8      | BATT   | Backup-Battery Input. When V CC falls below V BATT , OUT switches from V CC to BATT. When V CC rises above V BATT , OUT reconnects to V CC .                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## +5V Microprocessor Supervisory Circuits

Figure 1.  Functional Diagram

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## +5V Microprocessor Supervisory Circuits

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## General Timing Characteristics

Designed for 5V systems, the MAX817/MAX818/ MAX819 provide a number of microprocessor (µP) supervisory functions (see the Selector Guide on the first  page).  Figure  2  shows  the  typical  timing  relationships of the various outputs during power-up and power-down with typical VCC rise and fall times.

## RESET Output

A µP's reset input starts the  µP in a known state. The MAX817/MAX818/MAX819 µP supervisory circuits assert a reset to prevent code-execution errors during power-up, power-down, and brownout conditions. RESET is guaranteed to be a logic low for 0V &lt; VCC &lt; VRST if VBATT is greater than 1V. Without a backup battery  (VBATT = GND) RESET is  guaranteed valid for VCC ≥ 1V. Once VCC exceeds the reset threshold an internal  timer  keeps RESET low for the reset timeout period, tRP. After this interval RESET returns high (Figure 2).

If  a  brownout  condition  occurs  (VCC drops below the reset threshold), RESET goes low. Each time RESET is asserted it stays low for at least the reset timeout period. Any time VCC goes below the reset threshold the internal  timer  clears.  The  reset  timer  starts  when  VCC returns above the reset threshold. RESET both sources and sinks current.

## Manual Reset Input (MAX819)

Many µP-based products require manual reset capability,  allowing the operator, a test technician, or external logic circuitry to initiate a reset. On the MAX819, a logic low on MR asserts reset. Reset remains asserted while MR is  low,  and  for  tRP (200ms) after it returns high.

<!-- image -->

Figure 2.  Power-Up and Power-Down Timing

<!-- image -->

During the reset timeout period (tRP), MR 's  state  is ignored if the battery freshness seal is enabled. MR has an internal 63k Ω pull-up resistor, so it can be left open if  not  used.  This  input  can  be  driven  with  TTL/CMOSlogic levels or with open-drain/collector outputs. Connect a normally open momentary switch from MR to GND to create a manual reset function; external debounce circuitry is not required. If MR is driven from long cables or the device is used in a noisy environment, connect a 0.1µF capacitor from MR to  GND to provide additional noise immunity.

Note that MR must be high or open to enable the battery freshness seal. Once the battery freshness seal is enabled its operation is unaffected by MR .

## Battery Freshness Seal

The MAX817/MAX818/MAX819 battery freshness seal disconnects the backup battery from internal circuitry and OUT until it is needed. This allows an OEM to ensure that the backup battery connected to BATT will be fresh when the final product is put to use. To enable the freshness seal on the MAX817 and MAX819:

- 1) Connect a battery to BATT.
- 2) Ground PFO.
- 3) Bring VCC above the reset threshold and hold it there until reset is deasserted following the reset timeout period.
- 4) Bring VCC down again (Figure 3).

Use the same procedure for the MAX818, but ground CE OUT instead of PFO .  Once the battery freshness seal is enabled (disconnecting the backup battery from internal  circuitry  and  anything  connected to OUT), it remains enabled until VCC is brought above VRST.

Figure 3.  Battery Freshness Seal Timing

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## +5V Microprocessor Supervisory Circuits

On the MAX819, MR must be high or open to enable the battery freshness seal. Once the battery freshness seal is enabled its operation is unaffected by MR .

## Watchdog Input (MAX817/MAX818)

In the MAX817/MAX818, the watchdog circuit monitors the µP's activity. If the µP does not toggle the watchdog input (WDI) within tWD (1.6sec), reset asserts. The internal 1.6sec timer is cleared by either a reset pulse or by toggling WDI, which can detect pulses as short as 50ns. The timer remains cleared and does not count for as long as reset is asserted. As soon as reset is released, the timer starts counting (Figure 4).

To disable the watchdog function, leave WDI unconnected or three-state the driver connected to WDI. The watchdog input is internally driven low during the first 7/8  of  the  watchdog  timeout  period,  then  momentarily pulses high, resetting the watchdog counter. When WDI is left open-circuited, this internal driver clears the 1.6sec timer every 1.4sec. When WDI is three-stated or left unconnected, the maximum allowable leakage current is 10µA and the maximum allowable load capacitance is 200pF.

## Chip-Enable Gating (MAX818)

Internal gating of the chip-enable (CE) signal prevents erroneous data from corrupting CMOS RAM in the event of an undervoltage condition. The MAX818 uses a series transmission gate from CE IN to CE OUT (Figure 5). During normal operation (reset not asserted),  the  CE  transmission  gate  is  enabled  and  passes all  CE  transitions.  When reset is asserted, this path becomes disabled, preventing erroneous data from corrupting the CMOS RAM. The short CE propagation delay from CE IN to CE OUT enables the MAX818 to be used with most µPs. If CE IN is low when reset asserts, CE OUT remains low for typically 15µs to permit the current write cycle to complete.

## Chip-Enable Input (MAX818)

The CE transmission gate is disabled and CE IN is high impedance (disabled mode) while reset is asserted. During a power-down sequence when VCC passes the reset threshold, the CE transmission gate disables and CE IN immediately becomes high impedance if the voltage at CE IN is high. If CE IN is low when reset asserts, the CE transmission gate will disable 15µs after reset asserts (Figure 6). This permits the current write cycle to complete during power-down.

<!-- image -->

Figure 4.  Watchdog Timing

Figure 5.  Chip-Enable Transmission Gate

<!-- image -->

Figure 6.  Chip-Enable Timing

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## +5V Microprocessor Supervisory Circuits

Any time a reset is generated, the CE transmission gate remains disabled and CE IN remains high impedance (regardless of CE IN activity) for the reset timeout period. When the CE transmission gate is enabled, the impedance of CE IN appears as a 40 Ω resistor in series with the load at CE OUT. The propagation delay through the CE transmission gate depends on VCC, the source impedance of the drive connected to CE IN, and the loading on CE OUT (see Typical Operating Characteristics ).  The  CE propagation delay is production  tested  from  the  50%  point  on CE IN to the 50% point on CE OUT using a 50 Ω driver and a 50pF load capacitance (Figure 7). For minimum propagation delay, minimize the capacitive load at CE OUT and use a low-output-impedance driver.

## Chip-Enable Output (MAX818)

When the CE transmission gate is enabled, the impedance of CE OUT is equivalent to a 40 Ω resistor in series with  the  source  driving CE IN.  In  the  disabled  mode, the transmission gate is off and an active pull-up connects CE OUT to OUT (Figure 5). This pull-up turns off when the transmission gate is enabled.

<!-- image -->

Figure 7.  CE Propagation Delay Test Circuit

<!-- image -->

## Power-Fail Comparator (MAX817/MAX819)

The MAX817/MAX819 PFI input is compared to an internal reference. If PFI is less than the power-fail threshold (VPFT), PFO goes low. The power-fail comparator is intended for use as an undervoltage detector to signal a failing power supply (Figure 8). However, the comparator does not need to be dedicated to this function because it is completely separate from the rest of the circuitry.

The power-fail comparator turns off and PFO goes low when VCC falls below VBATT. During the reset timeout period (tRP), PFO is forced high, regardless of the state of VPFI (see Battery Freshness Seal section). If the comparator is unused, connect PFI to ground and leave PFO unconnected. PFO can be connected to MR on the MAX819 so that a low voltage on PFI will generate a reset (Figure 9). In this configuration, when the monitored voltage causes PFI to fall below VPFT, PFO pulls MR low, causing a reset to be asserted. Reset remains asserted as long as PFO holds MR low, and for tRP (200ms) after PFO pulls MR high when the monitored supply is above the programmed threshold. When PFO is  connected to MR ,  it  is  not  possible  to  enable  the  battery  freshness seal. Enabling the battery freshness seal requires MR to be high or open. Once the battery freshness seal is enabled, it is no longer affected by PFO 's connection to MR .

Figure 8.  Using the Power-Fail Comparator to Generate a Power-Fail Warning

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## +5V Microprocessor Supervisory Circuits

## Backup-Battery Switchover

In a brownout or power failure, it may be necessary to preserve the contents of RAM. With a backup battery installed  at  BATT,  the  MAX817/MAX818/MAX819 automatically switch RAM to backup power when VCC falls. These devices require two conditions before switching to  battery-backup mode: 1) VCC must be below the reset threshold, and 2) VCC must be below VBATT. Table 1 lists the status of the inputs and outputs in battery-backup mode.

As long as VCC exceeds the reset threshold, OUT connects to VCC through a 5 Ω PMOS power switch. Once VCC falls below the reset threshold, VCC or VBATT (whichever is higher) switches to OUT. When VCC falls below VRST and VBATT, BATT switches to OUT through an 80 Ω switch.

## Table 1.  Input and Output Status in Battery-Backup Mode

Figure 9.  Monitoring an Additional Supply by Connecting PFO to MR.

| SIGNAL   | STATUS                                                                                                 |
|----------|--------------------------------------------------------------------------------------------------------|
| V CC     | Disconnected from V OUT .                                                                              |
| V OUT    | Connected to V BATT through an internal 80 Ω PMOS switch.                                              |
| V BATT   | Connected to V OUT . Current drawn from the battery is less than 1µA, as long as V CC < V BATT - 0.2V. |
| V RESET  | Logic low                                                                                              |
| V WDI    | Watchdog timer is disabled.                                                                            |
| V CE OUT | Logic high. The open-circuit voltage is equal to V OUT .                                               |
| V CE IN  | High impedance                                                                                         |

<!-- image -->

When VCC exceeds the reset threshold, it is connected to the substrate, regardless of the voltage applied to BATT (Figure 10). During this time, the diode (D1) between BATT and the substrate will conduct current from BATT to  VCC if  VBATT is  0.6V  greater than VCC. When BATT connects to OUT, backup mode is activated and the internal circuitry is powered from the battery (Table 1). When VCC is just below VBATT, the current draw from BATT is typically 6µA. When VCC drops to more than 1V below VBATT, the internal switchover comparator shuts off and the supply current falls to less than 1µA.

## \_\_\_\_\_\_\_\_\_\_Applications Information

The MAX817/MAX818/MAX819 are protected for typical short-circuit conditions of 10sec or less. Shorting OUT to  ground for longer than 10sec destroys the device. Decouple VCC, OUT, and BATT to ground by placing 0.1µF capacitors as close to the device as possible.

Figure 10.  Backup-Battery-Switchover Block Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## +5V Microprocessor Supervisory Circuits

## Watchdog Input Current

The MAX817/MAX818 WDI inputs are internally driven through a buffer and series resistor from the watchdog counter (Figure 1). When WDI is left unconnected, the watchdog timer is serviced within the watchdog timeout period by a low-high-low pulse from the counter chain. For minimum watchdog input current (minimum overall power consumption), leave WDI low for the majority of the watchdog timeout period, pulsing it low-high-low once within  7 /8 of the watchdog timeout period to reset the watchdog timer. If instead WDI is externally driven high for the majority of the timeout period, up to 150µA can flow into WDI.

## Using a SuperCap™ as a Backup Power Source

SuperCaps are capacitors with extremely high capacitance values (on the order of 0.47F) for their size. Since BATT has the same operating voltage range as VCC, and the battery switchover threshold voltages are typically ±30mV centered at VBATT, a SuperCap and simple charging circuit can be used as a backup power source. Figure 11 shows a SuperCap used as a backup source.

If  VCC is  above the reset threshold and VBATT is 0.5V above VCC, current flows to OUT and VCC from BATT until the voltage at BATT is less than 0.5V above VCC. For example, if a SuperCap is connected to BATT through a diode to VCC, and VCC quickly changes from 5.4V to 4.9V, the capacitor discharges through OUT and VCC until VBATT reaches 5.1V typical. Leakage current through the SuperCap charging diode and the i nternal  power diode eventually discharges the SuperCap to VCC. Also, if VCC and VBATT start from 0.1V above the reset threshold and power is lost at

Figure 11.  Using a SuperCap™ as a Backup Power Source with a +5V ±10% Supply

<!-- image -->

SuperCap is a trademark of Baknor Industries.

<!-- image -->

VCC, the SuperCap on BATT discharges through VCC until VBATT reaches the reset threshold. Battery-backup mode is then initiated and the current through VCC goes to zero.

## Operation Without a Backup Power Source

The MAX817/MAX818/MAX819 were designed for battery-backed applications. If a backup battery is not used, connect VCC to OUT, and connect BATT to ground.

## Replacing the Backup Battery

The backup power source can be removed while VCC remains valid, without danger of triggering a reset pulse, if  BATT is  decoupled with a 0.1µF capacitor to ground. As long as VCC stays above the reset threshold, battery-backup mode cannot be entered.

## Adding Hysteresis to the Power-Fail Comparator (MAX817/MAX819)

The power-fail comparator has a typical input hysteresis of 4mV. This is sufficient for most applications where a power-supply line is being monitored through an external voltage divider (see Monitoring an Additional Supply ).

For additional noise margin, connect a resistor between PFO and PFI, as shown in Figure 12. Select the ratio of R1 and R2 such that PFI sees VPFT when VIN falls to the

Figure 12.  Adding Hysteresis to the Power-Fail Comparator

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## +5V Microprocessor Supervisory Circuits

desired trip point (VTRIP). Resistor R3 adds hysteresis. It will typically be an order of magnitude greater than R1 or R2. The current through R1 and R2 should be at least 1µA to ensure that the 25nA (max) PFI input leakage current does not shift the trip point.  R3 should be larger than 200k Ω to prevent it from loading down the PFO pin. Capacitor C1 adds additional noise rejection.

## Monitoring an Additional Supply (MAX817/MAX819)

The MAX817/MAX819 µP supervisors can monitor either positive or negative supplies using a resistor voltage divider to PFI. PFO can be used to generate an interrupt to the µP or to trigger a reset (Figures 9 and 13).

## Interfacing to µPs with Bidirectional Reset Pins

µPs with bidirectional reset pins, such as the Motorola 68HC11 series, can contend with the MAX817/MAX818/ MAX819 RESET output. If, for example, the RESET output is driven high and the µP wants to pull it low, indeterminate logic levels may result. To correct this, connect a 4.7k Ω resistor  between the RESET output and the µP reset I/O, as in Figure 14. Buffer the RESET output to other system components.

## Negative-Going VCC Transients

These supervisors are relatively immune to short-duration,  negative-going VCC transients (glitches) while issuing a reset to the µP during power-up, power-down, and brownout conditions. Therefore, resetting the µP when VCC experiences only small glitches is usually not desirable.

The Typical Operating Characteristics show a graph of Maximum Transient Duration vs. Reset Threshold Overdrive for which reset pulses are not generated.  The graph was produced using negative-going VCC pulses, starting at 3.3V and ending below the reset threshold by the magnitude indicated (reset threshold overdrive). The graph shows the maximum pulse width that a negativegoing VCC transient can typically have without triggering a reset pulse. As the amplitude of the transient increases (i.e.,  goes  farther  below  the  reset  threshold),  the  maximum allowable pulse width decreases. Typically, a VCC transient that goes 100mV below the reset threshold and lasts for 135µs will not trigger a reset pulse.

A 0.1µF bypass capacitor mounted close to the VCC pin provides additional transient immunity.

Figure 13.  Monitoring a Negative Voltage

<!-- image -->

Figure 14.  Interfacing to µPs with Bidirectional Reset I/O

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## +5V Microprocessor Supervisory Circuits

## Watchdog Software Considerations (MAX817/MAX818)

To help the watchdog timer monitor software execution more closely, set and reset the watchdog input at different points in the program, rather than 'pulsing' the watchdog input high-low-high or low-high-low. This technique avoids a 'stuck' loop, in which the watchdog timer would continue to be reset within the loop, keeping the watchdog from timing out. Figure 15 shows an example of a flow diagram where the I/O driving the watchdog input is set high at the beginning of the program, set low at the beginning of every subroutine or loop, then set high again when the program returns to the beginning. If the program should 'hang' in any subroutine, the problem would quickly be corrected, since the I/O is continually set low and the watchdog timer is allowed to time out, triggering a reset or an interrupt. As described in the Watchdog Input Current section, this scheme results in higher average WDI input current than does the method of leaving WDI low for the majority of the timeout period and periodically pulsing it low-high-low.

## \_\_\_\_\_\_\_\_\_\_Typical Operating Circuit

Figure 15.  Watchdog Flow Diagram

<!-- image -->

<!-- image -->

<!-- image -->

## \_\_\_\_Pin Configurations (continued)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## +5V Microprocessor Supervisory Circuits

## Ordering Information (continued)

| PART †      | TEMP. RANGE    | PIN-PACKAGE   |
|-------------|----------------|---------------|
| MAX817_EPA  | -40°C to +85°C | 8 Plastic DIP |
| MAX817_ESA  | -40°C to +85°C | 8 SO          |
| MAX818 _CPA | 0°C to +70°C   | 8 Plastic DIP |
| MAX818_CSA  | 0°C to +70°C   | 8 SO          |
| MAX818_CUA  | 0°C to +70°C   | 8 µMAX        |
| MAX818_EPA  | -40°C to +85°C | 8 Plastic DIP |
| MAX818_ESA  | -40°C to +85°C | 8 SO          |
| MAX819 _CPA | 0°C to +70°C   | 8 Plastic DIP |
| MAX819_CSA  | 0°C to +70°C   | 8 SO          |
| MAX819_CUA  | 0°C to +70°C   | 8 µMAX        |
| MAX819_EPA  | -40°C to +85°C | 8 Plastic DIP |
| MAX819_ESA  | -40°C to +85°C | 8 SO          |

† These parts offer a choice of reset threshold voltage. From the table below, select the suffix corresponding to the desired threshold and insert it into the blank to complete the part number.

Devices are available in both leaded and lead-free packaging. Specify lead free by adding the + symbol at the end of the part number when ordering.

| SUFFIX   |   RESET THRESHOLD (V) |
|----------|-----------------------|
| L        |                  4.65 |
| M        |                  4.40 |

Chip Information

TRANSISTOR COUNT:  719

## Package Information

(The package drawing(s) in this data sheet may not reflect the most current specifications. For the latest package outline information, go to www.maxim-ic.com/packages .)

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600

<!-- image -->