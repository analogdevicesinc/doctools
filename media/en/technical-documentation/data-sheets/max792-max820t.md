<!-- lastmod 2022-08-04 -->
<!-- image -->

## Microprocessor and Nonvolatile Memory Supervisory Circuits

## General Description

The MAX792/MAX820 microprocessor (µP) supervisory circuits  provide the most functions for power-supply and watchdog monitoring in systems without battery backup. Built-in features include the following:

- µP reset: Assertion of RESET and RESET outputs during power-up, power-down, and brownout conditions. RESET is guaranteed valid for VCC down to 1V.
- Manual-reset input.
- Two-stage power-fail warning: A separate low-line comparator compares VCC to a preset threshold 120mV above the reset threshold; the low-line and reset thresholds can be programmed externally.
- Watchdog fault output: Assertion of WDO if the watchdog input  is  not  toggled  within  a  preset  timeout period.
- Pulsed watchdog output: Advance warning of impending WDO assertion from watchdog timeout that causes hardware shutdown.
- Write protection of CMOS RAM, EEPROM, or other memory devices.

The MAX792 and MAX820 are identical, except the MAX820 guarantees higher low-line and reset threshold accuracy (±2%).

<!-- image -->

- ♦ Manual-Reset Input
- ♦ 200ms Power-OK/Reset Time Delay
- ♦ Independent Watchdog Timer-Preset or Adjustable
- ♦ On-Board Gating of Chip-Enable Signals
- ♦ Memory Write-Cycle Completion
- ♦ 10ns (max) Chip-Enable Gate Propagation Delay
- ♦ Voltage Monitor for Overvoltage Warning
- ♦ ±2% Reset and Low-Line Threshold Accuracy (MAX820, external programming mode)

## Ordering Information

| PART**      | TEMP. RANGE   | PIN-PACKAGE    |
|-------------|---------------|----------------|
| MAX792 _CPE | 0°C to +70°C  | 16 Plastic DIP |
| MAX792_CSE  | 0°C to +70°C  | 16 Narrow SO   |
| MAX792_C/D  | 0°C to +70°C  | Dice*          |

## Ordering Information continued at end of data sheet.

* Dice are tested at T A = +25°C, DC parameters only.

** These parts offer a choice of five different reset threshold voltages. Select the letter corresponding to the desired nominal reset threshold voltage and insert it into the blank to complete the part number. Devices in PDIP, SO and µMAX packages are available in both leaded and lead-free packaging. Specify lead free by adding the + symbol at the end of the part number when ordering. Lead free not available for CERDIP package.

| SUFFIX    | RESET THRESHOLD (V)      |
|-----------|--------------------------|
| L M T S R | 4.62 4.37 3.06 2.91 2.61 |

## Typical Operating Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For free samples and the latest literature, visit www.maxim-ic.com or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

Features

## Microprocessor and Nonvolatile Memory Supervisory Circuits

## ABSOLUTE MAXIMUM RATINGS

| Input Voltage (with respect to GND)                                                      |
|------------------------------------------------------------------------------------------|
| V CC .......................................................................-0.3V to +6V |
| All Other Inputs.......................................-0.3V to (V CC + 0.3V)            |
| Input Current                                                                            |
| GND................................................................................25mA  |
| All Other Outputs ............................................................25mA       |
| Continuous Power Dissipation (T A = +70°C)                                               |
| Plastic DIP (derate 10.53mW/°C above +70°C) ..........842mW                              |
| Narrow SO (derate 9.52mW/°C above +70°C) ............762mW                               |
| CERDIP (derate 10.00mW/°C above +70°C)...............800mW                               |

| Operating Temperature Ranges:                                             |
|---------------------------------------------------------------------------|
| MAX792_C__/MAX820_C__...............................0°C to +70°C          |
| MAX792_E__/MAX820_E__.............................-40°C to +85°C          |
| MAX792_MJE__/MAX820_MJE__.................-55°C to +125°C                 |
| Storage Temperature Range.............................-65°C to +160°C     |
| Lead Temperature (soldering, 10s) .................................+300°C |

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS

(VCC = 2.75V to 5.5V, TA = TMIN to TMAX, unless otherwise noted.)

| PARAMETER                                                | CONDITIONS                             | MIN          | TYP          | MAX          | UNITS   |
|----------------------------------------------------------|----------------------------------------|--------------|--------------|--------------|---------|
| Operating Voltage Range (Note 1)                         |                                        | 2.75         |              |              | V       |
| Supply Current                                           |                                        |              | 70           | 150          | µA      |
| RESET COMPARATOR                                         |                                        |              |              |              |         |
| Reset Threshold Voltage- Internal Threshold Mode (V TH ) | MAX792L, MAX820L                       | 4.50         | 4.62         | 4.75         | V       |
| Reset Threshold Voltage- Internal Threshold Mode (V TH ) | MAX792M, MAX820M                       | 4.25         | 4.37         | 4.50         | V       |
| Reset Threshold Voltage- Internal Threshold Mode (V TH ) | MAX792R, MAX820R                       | 2.55         | 2.61         | 2.70         | V       |
| Reset Threshold Voltage- Internal Threshold Mode (V TH ) | MAX792S, MAX820S                       | 2.85         | 2.91         | 3.00         | V       |
| Reset Threshold Voltage- Internal Threshold Mode (V TH ) | MAX792T, MAX820T                       | 3.00         | 3.06         | 3.15         | V       |
| Reset Threshold Voltage- Internal Threshold Mode (V TH ) | MAX820L, T A = +25°C, V CC falling     | 4.55         |              | 4.70         | V       |
| Reset Threshold Voltage- Internal Threshold Mode (V TH ) | MAX820M, T A = +25°C, V CC falling     | 4.30         |              | 4.45         | V       |
| Reset Threshold Voltage- Internal Threshold Mode (V TH ) | MAX820R, T A = +25°C, V CC falling     | 2.55         |              | 2.66         | V       |
| Reset Threshold Voltage- Internal Threshold Mode (V TH ) | MAX820S, T A = +25°C, V CC falling     | 2.85         |              | 2.96         | V       |
| Reset Threshold Voltage- Internal Threshold Mode (V TH ) | MAX820T, T A = +25°C, V CC falling     | 3.00         |              | 3.11         | V       |
| Reset Threshold Voltage                                  | MAX792, V CC = 5V or V CC = 3V         | 1.25         | 1.30         | 1.35         | V       |
| External Threshold Mode (V TH )                          | MAX820, V CC = 5V or V CC = 3V         | 1.274        | 1.30         | 1.326        | V       |
| RESET IN/ INT Mode Threshold (Note 2)                    | Internal threshold mode                |              |              | 60           | mV      |
| RESET IN/ INT Leakage Current                            |                                        | ±0.01        | ±0.01        | ±25          | nA      |
| Reset Threshold Hysteresis                               |                                        | 0.016 x V TH | 0.016 x V TH | 0.016 x V TH | V       |
| Reset Comparator Delay                                   | V CC falling                           | 70           | 70           | 70           | µs      |
| Reset Active Timeout Period                              | V CC rising                            | 140          | 200          | 280          | ms      |
| RESET Output Voltage                                     | I SINK = 50µA, V CC = 1V, V CC falling |              | 0.01         | 0.3          | V       |
| RESET Output Voltage                                     | I SINK = 1.6mA                         |              | 0.1          | 0.4          | V       |
| RESET Output Voltage                                     | I SOURCE = 1mA                         | V CC - 1     |              |              | V       |
| RESET Output Voltage                                     | I SOURCE = 100µA                       | V CC - 0.5   |              |              | V       |
| RESET Output Voltage                                     | I SINK = 1.6mA                         | 0.1          |              | 0.4          | V       |
| RESET Output Voltage                                     | I SOURCE = 1mA                         | V CC - 1     |              |              | V       |
| RESET Output Voltage                                     | I SOURCE = 100µA                       | V CC - 0.5   |              |              | V       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Microprocessor and Nonvolatile Memory Supervisory Circuits

## ELECTRICAL CHARACTERISTICS (continued)

(VCC = 2.75V to 5.5V, TA = TMIN to TMAX, unless otherwise noted.)

| PARAMETER                                              | CONDITIONS                                           | CONDITIONS                                           | MIN                 | TYP                 | MAX                 | UNITS               |
|--------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|---------------------|---------------------|---------------------|---------------------|
| LOW-LINE COMPARATOR                                    | LOW-LINE COMPARATOR                                  | LOW-LINE COMPARATOR                                  | LOW-LINE COMPARATOR | LOW-LINE COMPARATOR | LOW-LINE COMPARATOR | LOW-LINE COMPARATOR |
| Low-Line Threshold Voltage                             | MAX792/MAX820L/M                                     | MAX792/MAX820L/M                                     | 50                  | 120                 | 210                 | mV                  |
| (Internal Threshold Mode)-V TH                         | MAX792/MAX820R/S/T                                   | MAX792/MAX820R/S/T                                   | 40                  | 100                 | 210                 | mV                  |
| Low-Line Threshold Voltage (External Programming Mode) | MAX792, V CC = 5V OR V CC = 3V                       | MAX792, V CC = 5V OR V CC = 3V                       | 1.25                | 1.30                | 1.35                | V                   |
| Low-Line Threshold Voltage (External Programming Mode) | MAX820, V CC = 5V OR V CC = 3V                       | MAX820, V CC = 5V OR V CC = 3V                       | 1.274               | 1.30                | 1.326               | V                   |
| Low-Line Hysteresis (Internal Threshold Mode)          |                                                      |                                                      |                     | 20                  |                     | mV                  |
| LLIN/REFOUT Leakage Current External Programming Mode  |                                                      |                                                      |                     | ±0.01               | ±25                 | nA                  |
| Low-Line Comparator Delay                              | V CC falling                                         | V CC falling                                         |                     | 450                 |                     | µs                  |
| LOWLINE Voltage                                        | I SINK = 3.2mA                                       | I SINK = 3.2mA                                       |                     |                     | 0.4                 | V                   |
|                                                        | ISOURCE = 1µA                                        | ISOURCE = 1µA                                        | V CC - 1            |                     |                     |                     |
| LOWLINE Short-Circuit Current                          | Output source current, V CC = 5.5V                   | Output source current, V CC = 5.5V                   |                     | 10                  | 50                  | µA                  |
| WATCHDOG FUNCTION                                      | WATCHDOG FUNCTION                                    | WATCHDOG FUNCTION                                    | WATCHDOG FUNCTION   | WATCHDOG FUNCTION   | WATCHDOG FUNCTION   | WATCHDOG FUNCTION   |
| Watchdog Timeout Period                                | SWT connected to V CC, V CC = 5V                     | SWT connected to V CC, V CC = 5V                     | 1.00                | 1.60                | 2.25                |                     |
| Watchdog Timeout Period                                | SWT connected to V CC, V CC = 3V                     | SWT connected to V CC, V CC = 3V                     | 1.00                | 1.60                | 2.25                | sec                 |
| Watchdog Timeout Period                                | 4.7nF capacitor connected from SWT to GND, V CC = 3V | 4.7nF capacitor connected from SWT to GND, V CC = 3V |                     | 70                  |                     | ms                  |
| Watchdog Timeout Period                                | 4.7nF capacitor connected from SWT to GND, V CC = 5V | 4.7nF capacitor connected from SWT to GND, V CC = 5V |                     | 100                 |                     | ms                  |
| Watchdog Input Pulse Width                             | V IL = 0V, V IH = V CC                               | V CC = 5V V CC = 3V                                  | 100 300             |                     |                     | ns                  |
| WDO Output Voltage                                     | I SINK = 50µA, V CC = 1V, V CC falling               | I SINK = 50µA, V CC = 1V, V CC falling               |                     | 0.01                | 0.30                | ns                  |
| WDO Output Voltage                                     | I SINK = 1.6mA                                       | I SINK = 1.6mA                                       |                     | 0.1                 | 0.4                 | ns                  |
| WDO Output Voltage                                     | I SOURCE = 1mA                                       | I SOURCE = 1mA                                       | V CC - 1            |                     |                     | V                   |
| WDO Output Voltage                                     | I SOURCE = 100µA                                     | I SOURCE = 100µA                                     | V CC - 0.5          |                     |                     | ns                  |
| WDPO to WDO Delay                                      |                                                      |                                                      |                     | 70                  |                     | ns                  |
| WDPO Duration                                          |                                                      |                                                      | 0.5                 | 1.7                 | 6.0                 | ms                  |
| WDPO Output Voltage                                    | I SINK = 50µA, V CC = 1V, V CC falling               | I SINK = 50µA, V CC = 1V, V CC falling               |                     | 0.01                | 0.3                 | V                   |
| WDPO Output Voltage                                    | I SINK = 1.6mA                                       | I SINK = 1.6mA                                       |                     | 0.1                 | 0.4                 | V                   |
| WDPO Output Voltage                                    | I SOURCE = 1mA                                       | I SOURCE = 1mA                                       | V CC - 1            |                     |                     | V                   |
| WDPO Output Voltage                                    | I SOURCE = 100µA                                     | I SOURCE = 100µA                                     | V CC - 0.5          |                     |                     | V                   |
| WDI Threshold Voltage                                  | V CC = 4.25V                                         | V IH                                                 | 0.75 x V CC         |                     |                     | V                   |
| WDI Threshold Voltage                                  |                                                      | V IL                                                 |                     |                     | 0.8                 | V                   |
| WDI Threshold Voltage                                  | V CC = 2.55V                                         | V IH                                                 | 0.9 x V CC          |                     |                     | V                   |
| WDI Threshold Voltage                                  |                                                      | V IL                                                 |                     |                     | 0.2                 | V                   |
| WDI Input Current                                      |                                                      |                                                      |                     |                     | ±1                  | µA                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Microprocessor and Nonvolatile Memory Supervisory Circuits

## ELECTRICAL CHARACTERISTICS (continued)

(VCC = +2.75V to +5.5V, TA = TMIN to TMAX, unless otherwise noted.)

| PARAMETER                                      | CONDITIONS                                 | CONDITIONS                  | MIN                    | TYP                    | MAX                    | UNITS                  |
|------------------------------------------------|--------------------------------------------|-----------------------------|------------------------|------------------------|------------------------|------------------------|
| OVERVOLTAGE COMPARATOR                         | OVERVOLTAGE COMPARATOR                     | OVERVOLTAGE COMPARATOR      | OVERVOLTAGE COMPARATOR | OVERVOLTAGE COMPARATOR | OVERVOLTAGE COMPARATOR | OVERVOLTAGE COMPARATOR |
| OVI Input Threshold                            | V CC = 5V or V CC = 3V                     |                             | 1.25                   | 1.30                   | 1.35                   | V                      |
| OVI Leakage Current                            |                                            |                             |                        | ±0.01                  | ±25                    | nA                     |
| OVO Output Voltage                             | I SINK = 3.2mA                             |                             |                        |                        | 0.4                    | V                      |
| OVO Output Voltage                             | I SOURCE = 1µA                             |                             | V CC - 1               |                        |                        | V                      |
| OVO Short-Circuit Current                      | Output source current, V CC = 5.5V         |                             |                        | 10                     | 50                     | µA                     |
| OVI to OVO Delay                               | V OD = 100mV, OVI rising                   |                             |                        | 13                     |                        | µs                     |
| OVI to OVO Delay                               | V OD = 100mV, OVI falling                  |                             |                        | 55                     |                        | µs                     |
| CHIP-ENABLE GATING                             | CHIP-ENABLE GATING                         | CHIP-ENABLE GATING          | CHIP-ENABLE GATING     | CHIP-ENABLE GATING     | CHIP-ENABLE GATING     | CHIP-ENABLE GATING     |
| CE IN Threshold Voltage                        | V CC = 4.25V                               | V IH                        | 0.75 x V CC            |                        |                        | V                      |
| CE IN Threshold Voltage                        | V CC = 4.25V                               | V IL                        |                        |                        | 0.8                    | V                      |
| CE IN Threshold Voltage                        | V CC = 2.55V                               | V IH                        | 0.75 x V CC            |                        |                        |                        |
| CE IN Threshold Voltage                        | V CC = 2.55V                               | V IL                        |                        |                        | 0.2                    |                        |
| CE IN Leakage Current                          | Disabled mode                              |                             |                        | ±0.005                 | ±1                     | µA                     |
| CE IN to CE OUT Resistance                     | Enabled mode                               | V CC = 5V                   |                        | 75                     | 150                    | Ω                      |
| CE IN to CE OUT Resistance                     |                                            | V CC = 3V                   |                        | 150                    | 300                    | Ω                      |
| CE OUT Short-Circuit Current                   | Disabled mode, CE OUT = 0V                 | V CC = 5V                   | 0.5                    |                        | 2.5                    | mA                     |
| CE OUT Short-Circuit Current                   | Disabled mode, CE OUT = 0V                 | V CC = 3V                   | 0.05                   | 0.2                    | 0.4                    | mA                     |
| Chip-Enable Propagation Delay (Note 3)         | 50 Ω source impedance driver, CLOAD = 50pF | V CC = 5V                   |                        | 6                      | 10                     | ns                     |
| Chip-Enable Propagation Delay (Note 3)         | 50 Ω source impedance driver, CLOAD = 50pF | V CC = 3V                   |                        | 8                      | 13                     | ns                     |
| Chip-Enable Output Voltage High (Reset Active) | I OUT = -100µA                             |                             | V CC - 1               |                        |                        | V                      |
| Chip-Enable Output Voltage High (Reset Active) | I OUT = 10µA                               |                             | V CC - 0.5             |                        |                        | V                      |
| Reset Active to CE OUT High                    | V CC falling                               |                             |                        | 15                     |                        | µs                     |
| MANUAL RESET                                   | MANUAL RESET                               | MANUAL RESET                | MANUAL RESET           | MANUAL RESET           | MANUAL RESET           | MANUAL RESET           |
| MR Minimum Pulse Width                         |                                            |                             | 25                     |                        |                        | µs                     |
| MR to RESET Propagation Delay                  |                                            |                             |                        | 12                     |                        | µs                     |
| MR Threshold Range                             |                                            |                             | 1.1                    | 1.3                    | 1.5                    | V                      |
| MR Pull-Up Current                             | MR = 0V                                    | V CC = 4.25V to V CC = 5.5V | 5                      | 23                     | 80                     | µA                     |
| MR Pull-Up Current                             |                                            | V CC = 2.5V                 | 1                      |                        |                        | µA                     |

Note 2: Pulling RESET IN/ INT below 60mV selects internal threshold mode and connects the internal voltage divider to the reset and low-line comparators. External programming mode allows an external resistor divider to set the low-line and reset thresholds (see Figure 4).

Note 3: The Chip-Enable Propagation delay is measured from the 50% point at CE IN to the 50% point at CE OUT.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Microprocessor and Nonvolatile Memory Supervisory Circuits

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics

(TA = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

s)

µ

PROPAGATION DELAY (

<!-- image -->

<!-- image -->

NOMINAL WATCHDOG TIMEOUT PERIOD (s)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Microprocessor and Nonvolatile Memory Supervisory Circuits

Typical Operating Characteristics (continued)

<!-- image -->

(TA = +25°C, unless otherwise noted.)

MAX792-6

<!-- image -->

<!-- image -->

MAX792-7

<!-- image -->

CHIP-ENABLE ON-RESISTANCE vs. TEMPERATURE

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

6

## Microprocessor and Nonvolatile Memory Supervisory Circuits

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Description

|   PIN | NAME          | FUNCTION                                                                                                                                                                                                                                                                                                                                                                          |
|-------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     1 | RESET         | Active-Low Reset Output goes low whenever V CC falls below the reset threshold in internal thresh- old programming mode, or RESET IN falls below 1.30V in external threshold programming mode. RESET remains low for 200ms typ after the threshold is exceeded on power-up.                                                                                                       |
|     2 | RESET         | Reset is the inverse of RESET .                                                                                                                                                                                                                                                                                                                                                   |
|     3 | V CC          | Input Supply Voltage                                                                                                                                                                                                                                                                                                                                                              |
|     4 | RESET IN/ INT | Reset-Input/Internal-Mode Select. Connect this input to GND to select internal threshold mode. Select external programming mode by pulling this input 600mV or higher through an external volt- age divider.                                                                                                                                                                      |
|     5 | LLIN/REF OUT  | Low-Line Input/Reference Output connects directly to the low-line comparator in external program- ming mode (RESET IN/ INT ≥ 600mV). Connects directly to the internal 1.30V reference in internal threshold mode (RESET IN/ INT ≤ 60mV).                                                                                                                                         |
|     6 | OVO           | Overvoltage Comparator Output goes low when OVI is greater than 1.30V. This is an uncommitted comparator and has no effect on any other internal circuitry.                                                                                                                                                                                                                       |
|     7 | OVI           | Inverting Input to the Overvoltage Comparator. When OVI is greater than 1.30V, OVO goes low. Connect OVI to GND or V CC when not used.                                                                                                                                                                                                                                            |
|     8 | SWT           | Set Watchdog-Timeout Input. Connect this input to V CC to select the default 1.6sec watchdog timeout period. Connect a capacitor between this input and GND to select another watchdog- timeout period. Watchdog timeout period = k x (capacitor value in nF)mV, where k = 27 for V CC = 5V and k = 16.2 for V CC = 3V. If the watchdog function is unused, connect SWT to V CC . |
|     9 | MR            | Manual-Reset Input. This input can be tied to an external momentary pushbutton switch, or to a logic gate output. Internally pulled up to V CC .                                                                                                                                                                                                                                  |
|    10 | LOW LINE      | Low-Line Output. LOWLINE goes low 120mV above the reset threshold in internal threshold mode, or when LLIN/REFOUT goes below 1.30V in external programming mode.                                                                                                                                                                                                                  |
|    11 | WDI           | Watchdog Input. If WDI remains either high or low for longer than the watchdog timeout period, WDPO pulses low and WDO goes low. WDO remains low until the next transition at WDI. Connect to GND or V CC if unused.                                                                                                                                                              |
|    12 | GND           | Ground                                                                                                                                                                                                                                                                                                                                                                            |
|    13 | CE OUT        | Chip-Enable Output. CE OUT goes low only when CE IN is low and reset is not asserted. If CE IN is low when reset is asserted, CE OUT will stay low for 15µs or until CE IN goes high, whichever occurs first.                                                                                                                                                                     |
|    14 | CE IN         | Chip-Enable Input-the input to the chip-enable transmission gate. Connect to GND or V CC if not used.                                                                                                                                                                                                                                                                             |
|    15 | WDO           | Watchdog Output. WDO goes low if WDI remains either high or low longer than the watchdog time- out period. WDO returns high on the next transition at WDI.                                                                                                                                                                                                                        |
|    16 | WDPO          | Watchdog-Pulse Output. Upon the absence of a transition at WDI, WDPO will pulse low for a mini- mum of 500µs. WDPO precedes WDO by typically 70ns.                                                                                                                                                                                                                                |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Microprocessor and Nonvolatile Memory Supervisory Circuits

## Detailed Description

## Manual-Reset Input

Many µP-based products require manual-reset capability,  allowing the operator to initiate a reset. The manual/external-reset input ( MR) can connect directly to a switch without an external pull-up resistor or debouncing network. MR internally  connects to a 1.30V comparator, and has a high-impedance pull-up to VCC, as shown in Figure 1. The propagation delay from asserting MR to  reset  asserted  is  typically  12µs.  Pulsing MR low for a minimum of 25µs asserts the reset function (see Reset Function section). The reset output remains active as long as MR is held low, and the reset timeout period begins after MR returns high (Figure 2). To provide extra noise immunity in high-noise environments, pull MR up to VCC with a 100k Ω resistor.

Use MR as either a digital logic input or as a second lowline comparator. Normal TTL/CMOS levels can be wire-OR connected via pull-down diodes (Figure 3), and open-drain/collector outputs can be wire-ORed directly.

## Monitoring the Regulated Supply

The MAX792/MAX820 offer two modes for monitoring the regulated supply and providing reset and nonmaskable interrupt (NMI) signals to the µP: internal threshold mode uses the factory preset low-line and reset thresholds, and external programming mode allows the low-line and reset thresholds to be programmed externally using a resistor voltage divider (Figure 4).

## Internal Threshold Mode

Connecting the reset-input/internal-mode select pin (RESET IN/ INT )  to  ground  selects internal threshold mode (Figure 4a). In this mode, the low-line and reset thresholds are factory preset by an internal voltage divider (Figure 1) to the threshold voltages specified in the Electrical Characteristics (Reset Threshold Voltage and Low-Line Threshold Voltage). Connect the low-line output ( LOWLINE )  to  the  µP  NMI  pin,  and  connect  the active-high reset output (RESET) or active-low reset output ( RESET ) to the µP reset input pin.

Additionally, the low-line input/reference-output pin (LLIN/REFOUT) connects to the internal 1.30V reference in internal threshold mode. Buffer LLIN/REFOUT with a high-impedance buffer to use it with external circuitry.  In  this  mode,  when  V CC is  falling, LOWLINE is guaranteed to be asserted prior to reset assertion.

## External Programming Mode

Connecting RESET IN/ INT to a voltage above 600mV selects external programming mode. In this mode, the low-line and reset comparators disconnect from the internal voltage divider and connect to LLIN/REFOUT and RESET IN/ INT ,  respectively (Figure 1). This mode allows flexibility  in  determining where in the operating voltage range the NMI and reset are generated. Set the low-line and reset thresholds with an external resistor divider, as in Figure 4b or Figure 4c. RESET typically remains valid for VCC down to 2.5V; RESET is  guaranteed to be valid with VCC down to 1V.

Calculate the values for the resistor voltage divider in Figure 4b using the following equations:

- 1) R3 = (1.30 x VCC MAX)/(VLOW LINE x IMAX)
- 2) R2 = [(1.30 x VCC MAX)/(VRESET x IMAX)] - R3
- 3) R1 = (VCC MAX/IMAX) - (R2 + R3).

First  choose the desired maximum current through the voltage divider (IMAX) when VCC is  at  its  highest  (V CC MAX). There are two things to consider here. First, IMAX contributes to the overall supply current for the circuit, so you would generally make it as small as possible. Second, IMAX cannot be too small or leakage currents will adversely affect the programmed threshold voltages; 5µA is often appropriate. Determine R3 after you have chosen IMAX. Use the value for R3 to determine R2, then use both R2 and R3 to determine R1.

For example, to program a 4.75V low-line threshold and a 4.4V reset threshold, first choose IMAX to be 5µA when VCC = 5.5V and substitute into equation 1.

<!-- formula-not-decoded -->

301k Ω is  the  nearest  standard  0.1%  value.  Substitute into equation 2:

<!-- formula-not-decoded -->

The nearest 0.1% resistor value is 23.7k Ω . Finally, substitute into equation 3:

<!-- formula-not-decoded -->

The nearest 0.1% value resistor is 787k Ω . Determine the actual low-line threshold by rearranging equation 1 and plugging in the standard resistor values. The actual lowline  threshold is 4.75V and the actual reset threshold is 4.40V. An additional resistor allows the MAX792/MAX820 to  monitor the unregulated supply and provide an NMI before the regulated supply begins to fall (Figure 4c).

Both of these thresholds will vary from circuit to circuit with resistor tolerance, reference variation, and comparator  offset  variation.  The  initial  thresholds  for  each  circuit will also vary with temperature due to reference and offset drift. For highest accuracy, use the MAX820.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Microprocessor and Nonvolatile Memory Supervisory Circuits

<!-- image -->

Figure 1. MAX792/MAX820 Block Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Microprocessor and Nonvolatile Memory Supervisory Circuits

Figure 2. Manual-Reset Timing Diagram

<!-- image -->

Figure 3. Diode "OR" connections allow multiple reset sources to connect to MR .

<!-- image -->

## Low-Line Output

In  internal  threshold  mode, the low-line comparator monitors VCC with a threshold voltage typically 120mV above the reset threshold, and with 15mV of hysteresis. For normal operation (VCC above the reset threshold), LOWLINE is pulled to VCC. Use LOWLINE to provide an NMI to  the  µP,  as  described  in  the  previous  section,  when VCC begins to fall (Figure 4).

## Reset Function

The MAX792/MAX820 provide both RESET and RESET outputs. The RESET and RESET outputs ensure that the µP powers up in a known state, and prevent code-execution errors during power-up, power-down, or brownout conditions.

The reset function will be asserted during the following conditions:

- 1) VCC less than the programmed reset threshold.
- 2) MR less than 1.30V typ.
- 3) Reset remains asserted for 200ms typ after VCC rises above the reset threshold or after MR has exceeded 1.30V typ.

Figure 4a. Connection for Internal Threshold Mode

<!-- image -->

Figure 4b. Connection for External Threshold Programming Mode

<!-- image -->

When reset is asserted, all the internal counters are reset,  the  watchdog output ( WDO ) and watchdog-pulse output ( WDPO ) are set high, and the set watchdog-timeout input (SWT) is set to (VCC - 0.6V) if it is not already connected to VCC (for  internal  timeouts).  The  chipenable transmission gate is also disabled while reset is asserted; the chip-enable input ( CE IN)  becomes high impedance and the chip-enable output ( CE OUT) is pulled up to VCC.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Microprocessor and Nonvolatile Memory Supervisory Circuits

Figure 4c. Alternative Connection for External Programming Mode

<!-- image -->

## Reset Outputs (RESET and RESET )

The RESET output is active low and typically sinks 1.6mA at 0.1V. When deasserted, RESET sources 1.6mA at typically  V CC  -  1.5V.  The  RESET  output  is  the  inverse  of RESET . RESET is guaranteed to be valid down to VCC = 1V, and an external 10k Ω pull-down resistor on RESET ensures that it will be valid with VCC down to GND (Figure 5). As VCC goes below 1V, the gate drive to the RESET output switch reduces accordingly, increasing the r DS(ON) and the saturation voltage. The 10k Ω pull-down resistor ensures that the parallel combination of switch plus resistor will  be  around 10k Ω and the saturation voltage will be below 0.4V while sinking 40µA. When using an external pull-down resistor of 10k Ω ,  the  high state for the RESET output with VCC = 4.75V is typically 4.60V.

## Overvoltage Comparator

The overvoltage comparator is an uncommitted comparator that has no effect on the operation of other chip functions. Use this input to provide overvoltage indication by connecting a voltage divider from the input supply, as in Figure 6.

Connect OVI to ground if the overvoltage function is not used. OVO goes low when OVI goes above 1.30V. With OVI below 1.30V, OVO is actively pulled to VCC and can source1µA.

<!-- image -->

Figure 5. Adding an external pull-down resistor ensures RESET is valid with VCC down to GND.

<!-- image -->

Figure 6. Detecting an Overvoltage Condition

<!-- image -->

## Watchdog Function

The watchdog monitors µP activity via the watchdog input (WDI). If the µP becomes inactive, WDO and WDPO are asserted. To use the watchdog function, connect WDI to a µP bus line or I/O line. If WDI remains high or low for longer than the watchdog timeout period (1.6s nominal), WDPO and WDO are asserted, indicating a software fault condition (see Watchdog-Pulse Output and Watchdog Output sections).

## Watchdog Input

If the watchdog function is unused, connect WDI to VCC or GND. A change of state (high-to-low, low-to-high, or a  minimum 100ns pulse) at WDI during the watchdog period resets the watchdog timer. The watchdog timer

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Microprocessor and Nonvolatile Memory Supervisory Circuits

Figure 7. WDI, WDO, and WDPO Timing Diagram

<!-- image -->

default is 1.6s. Select alternative timeout periods by connecting an external capacitor from SWT to GND (see Selecting an Alternative Watchdog Timeout section). When VCC is below the reset threshold, the watchdog function is disabled.

## Watchdog Output

WDO remains high if there is a transition or pulse at WDI during the watchdog timeout period. The watchdog function is disabled and WDO is a logic high when VCC is below the reset threshold. If a system reset is desired on every watchdog fault, simply diode-OR connect WDO to MR (Figure 8). When a watchdog fault occurs in this mode, WDO goes low, pulling MR low and causing a reset pulse to be issued. As soon as reset is asserted, the watchdog timer clears and WDO goes high. With WDO connected to MR , a continuous high or low on WDI will  cause 200ms reset pulses to be issued every 1.6sec (SWT connected to VCC). When reset is not asserted, if no transition occurs at WDI during the watchdog timeout period, WDO goes low 70ns after the falling edge of WDPO and remains low until the next transition at WDI (Figure 7). A single additional flip-flop can force the system into a hardware shutdown if there are two successive watchdog faults (Figure 8). When the MAX792/MAX820 are operated from a 5V supply, WDO has a 2 x TTL output characteristic.

## Watchdog-Pulse Output

As described in the preceding section, WDPO can be used as the clock input to an external D flip-flop. Upon the absence of a watchdog edge or pulse at WDI at the end of a watchdog timeout period, WDPO will pulse low for  1.7ms.  The  falling  edge  of WDPO precedes WDO by 70ns. Since WDO is  high when WDPO goes low, the flipflop's Q output remains high after WDO goes low (Figure 8). If the watchdog timer is not reset by a transition at WDI, WDO remains low and the next WDPO following a second watchdog timeout period clocks a logic low to the  Q  output,  pulling MR l ow  and  causing  the MAX792/MAX820 latch in reset. If the watchdog timer is reset  by  a  transition  at  WDI, WDO will  go  high  and  the flip-flop's  Q  output  will  remain  high.  Thus  a  system shutdown is only caused by two successive watchdog faults.

Figure 8. Two consecutive watchdog faults latch the system in reset.

<!-- image -->

## Selecting an Alternative Watchdog Timeout Period

The SWT input controls the watchdog timeout period. Connecting SWT to VCC selects the internal 1.6sec watchdog timeout period. Select an alternative watchdog timeout period by connecting a capacitor between SWT and GND. Do not leave SWT floating and do not connect it to ground. The following formula determines the watchdog timeout period:

Watchdog Timeout Period = k x (capacitor value in nF)ms

where k = 27 for VCC = 3V, and k = 16.2 for VCC = 5V. This applies for capacitor values in excess of 4.7nF. If the watchdog function is unused, connect SWT to VCC.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Microprocessor and Nonvolatile Memory Supervisory Circuits

## Chip-Enable Signal Gating

The MAX792/MAX820 provide internal gating of chipenable (CE) signals, which prevents erroneous data from corrupting CMOS RAM in the event of an undervoltage condition. The MAX792/MAX820 use a series transmission gate from CE IN to CE OUT (Figure 1).

During normal operation (reset not asserted), the CE transmission gate is enabled and passes all CE transitions.  When reset is asserted, this path becomes disabled, preventing erroneous data from corrupting the CMOS RAM. The 10ns max CE propagation delay from CE IN to CE OUT enables the MAX792/MAX820 to be used with most µPs. If CE IN is low when reset asserts, CE OUT remains low for a short period to permit completion of the current write cycle.

## Chip-Enable Input

The CE transmission gate is disabled and CE IN is high impedance (disabled mode) while reset is asserted.

During a power-down sequence when VCC passes the reset threshold, the CE transmission gate disables and CE IN immediately becomes high impedance if the voltage at CE IN is high. If CE IN is low when reset is asserted, the CE transmission gate will disable at the moment CE IN goes high or 15µs after reset is asserted, whichever occurs first (Figure 9). This permits the current write cycle to complete during power-down.

During a power-up sequence, the CE transmission gate remains disabled and CE IN remains high impedance regardless of CE IN activity, until reset is deasserted following the reset timeout period.

While disabled, CE IN is high impedance. When the CE transmission gate is enabled, the impedance of CE IN will appear as a 75 Ω (VCC = 5V) resistor in series with the load at CE OUT.

The propagation delay through the CE transmission gate depends on VCC, the source impedance of the drive connected to CE IN,  and the loading on CE OUT (see the Chip-Enable Propagation Delay vs. CE OUT Load Capacitance graph in the Typical Operating Characteristics ).  The  CE propagation delay is production  tested  from  the  50% point on CE IN to the 50% point on CE OUT using a 50 Ω driver and 50pF of load capacitance (Figure 10). For minimum propagation delay, minimize the capacitive load at CE OUT, and use a low-output-impedance driver.

<!-- image -->

Figure 9. Reset and Chip-Enable Timing

<!-- image -->

Figure 10. CE Propagation Delay Test Circuit

<!-- image -->

## Chip-Enable Output

When the CE transmission gate is enabled, the impedance of CE OUT is equivalent to 75 Ω in series with the source driving CE IN.  In  the  disabled  mode,  the  75 Ω transmission gate is off and an active pull-up connects from CE OUT to VCC. This source turns off when the transmission gate is enabled.

## Applications Information

Connect a 0.1µF ceramic capacitor from VCC to GND, as close to the device pins as possible. This reduces the probability of resets due to high-frequency powersupply transients. In a high-noise environment, additional bypass capacitance from VCC to ground may be required. If long leads connect to the chip inputs, ensure that these lines are free from ringing, etc., which would forward bias the chip's protection diodes.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Microprocessor and Nonvolatile Memory Supervisory Circuits

Figure 11. Alternate CE Gating

<!-- image -->

## Alternative Chip-Enable Gating

Using memory devices with both CE and CE inputs allows  the  MAX792/MAX820 CE propagation delay to be bypassed. To do this, connect CE IN to ground, pull up CE OUT to VCC, and connect CE OUT to the CE input of each memory device (Figure 11). The CE input of  each memory device then connects directly to the chip-select logic, which does not have to be gated by the MAX792/MAX820.

## Interfacing to µPs with Bidirectional Reset Inputs

µPs with bidirectional reset pins, such as the Motorola 68HC11 series, can contend with the MAX792/MAX820 RESET output. If, for example, the MAX792/MAX820 RESET output is asserted high and the µP wants to pull it low, indeterminate logic levels may result. To avoid this, connect a 4.7k Ω resistor between the MAX792/MAX820 RESET output and the µP reset I/O, as in Figure 12. Buffer the MAX792/MAX820 RESET output to other system components.

## Negative-Going VCC Transients

While issuing resets to the µP during power-up, powerdown, and brownout conditions, these supervisors are relatively immune to short-duration negative-going V CC transients (glitches). It  is  usually  undesirable  to  reset the µP when V CC experiences only small glitches.

Figure 13 shows maximum transient duration vs. resetcomparator overdrive, for which reset pulses are not generated. The graph was produced using negative- going V CC pulses, starting at 5V and ending below the reset threshold by the magnitude indicated (resetcomparator overdrive). The graph shows the maximum pulse width a negative-going V CC transient  may typically have without causing a reset pulse to be issued. As the amplitude of the transient increases (i.e., goes farther below the reset threshold), the maximum allowable pulse width decreases. Typically, a V CC transient that goes 100mV below the reset threshold and lasts for 30µs or less will not cause a reset pulse to be issued.

Figure 12. Interfacing to µPs with Bidirectional RESET Pins

<!-- image -->

A 100nF bypass capacitor mounted close to the V CC pin provides additional transient immunity.

Figure 13. Maximum Transient Duration Without Causing a Reset Pulse vs. Reset-Comparator Overdrive

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Microprocessor and Nonvolatile Memory Supervisory Circuits

## \_Ordering Information (continued)

| PART**      | TEMP. RANGE     | PIN-PACKAGE    |
|-------------|-----------------|----------------|
| MAX792_EPE  | -40°C to +85°C  | 16 Plastic DIP |
| MAX792_ESE  | -40°C to +85°C  | 16 Narrow SO   |
| MAX792_EJE  | -40°C to +85°C  | 16 CERDIP      |
| MAX792_MJE  | -55°C to +125°C | 16 CERDIP      |
| MAX820 _CPE | -0°C to +70°C   | 16 Plastic DIP |
| MAX820_CSE  | -0°C to +70°C   | 16 Narrow SO   |
| MAX820_EPE  | -40°C to +85°C  | 16 Plastic DIP |
| MAX820_ESE  | -40°C to +85°C  | 16 Narrow SO   |
| MAX820_EJE  | -40°C to +85°C  | 16 CERDIP      |
| MAX820_MJE  | -55°C to +125°C | 16 CERDIP      |

Devices in PDIP, SO and µMAX packages are available in both leaded and lead-free packaging. Specify lead free by adding the + symbol at the end of the part number when ordering. Lead free not available for CERDIP package.

| SUFFIX    | RESET THRESHOLD (V)      |
|-----------|--------------------------|
| L M T S R | 4.62 4.37 3.06 2.91 2.61 |

<!-- image -->

## Pin Configuration

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Chip Topography

<!-- image -->

TRANSISTOR COUNT: 950 SUBSTRATE CONNECTED TO VCC

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Microprocessor and Nonvolatile Memory Supervisory Circuits

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Package Information

<!-- image -->

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600