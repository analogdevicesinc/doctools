<!-- lastmod 2022-12-16 -->
19-1086; Rev 1; 11/05

<!-- image -->

## 8-Pin µP Supervisory Circuits with ±1.5% Reset Accuracy

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

The MAX801/MAX808 microprocessor (µP) supervisory circuits monitor and control the activities of +5V µPs by providing backup-battery switchover, low-line indication, and µP reset. Additional features include a watchdog for the MAX801 and CMOS RAM write protection for the MAX808.

The MAX801/MAX808 offer a choice of reset-threshold voltage (denoted by suffix letter): 4.675V (L), 4.575V (N),  and 4.425V (M). These devices are available in 8-pin DIP and SO packages.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Applications

Computers

Controllers

Intelligent Instruments

Critical µP Power Monitoring

Portable/Battery-Powered Equipment

Embedded Systems

Pin Configurations appear at end of data sheet.

## \_\_\_\_\_\_\_\_\_\_Typical Operating Circuit

<!-- image -->

- ♦ Precision Voltage Monitoring, ±1.5% Reset Accuracy
- ♦ 200ms Power-OK/Reset Time Delay
- ♦ RESET Output (MAX808)
- RESET and RESET Outputs (MAX801)
- ♦ Watchdog Timer (MAX801)
- ♦ On-Board Gating of Chip-Enable Signals (MAX808): Memory Write-Cycle Completion 3ns CE Gate Propagation Delay
- ♦ 1µA Standby Current
- ♦ Power Switching: 250mA in VCC Mode 20mA in Battery-Backup Mode
- ♦ MaxCap™/SuperCap™ Compatible
- ♦ RESET Guaranteed Valid to VCC = 1V
- ♦ Low-Line Threshold 52mV Above Reset Threshold

MaxCap is a trademark of The Carborundum Corp. SuperCap is a trademark of Baknor Industries.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART*       | TEMP RANGE      | PIN-PACKAGE   |
|-------------|-----------------|---------------|
| MAX801 _CPA | 0°C to +70°C    | 8 Plastic DIP |
| MAX801_CSA  | 0°C to +70°C    | 8 SO          |
| MAX801_EPA  | -40°C to +85°C  | 8 Plastic DIP |
| MAX801_ESA  | -40°C to +85°C  | 8 SO          |
| MAX801_MJA  | -55°C to +125°C | 8 CERDIP**    |
| MAX808 _CPA | 0°C to +70°C    | 8 Plastic DIP |
| MAX808_CSA  | 0°C to +70°C    | 8 SO          |
| MAX808_EPA  | -40°C to +85°C  | 8 Plastic DIP |
| MAX808_ESA  | -40°C to +85°C  | 8 SO          |
| MAX808_MJA  | -55°C to +125°C | 8 CERDIP**    |

Devices in PDIP, SO and µMAX packages are available in both leaded and lead-free packaging. Specify lead free by adding the + symbol at the end of the part number when ordering. Lead free not available for CERDIP package.

| SUFFIX   | RESET THRESHOLD (V)   | RESET THRESHOLD (V)   | RESET THRESHOLD (V)   |
|----------|-----------------------|-----------------------|-----------------------|
| SUFFIX   | MIN                   | TYP                   | MAX                   |
| L        | 4.60                  | 4.675                 | 4.75                  |
| N        | 4.50                  | 4.575                 | 4.65                  |
| M        | 4.35                  | 4.425                 | 4.50                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## 8-Pin µP Supervisory Circuits with ±1.5% Reset Accuracy

## ABSOLUTE MAXIMUM RATINGS

Input Voltage (with respect to GND)

VCC.......................................................................-0.3V to +6V

VBATT....................................................................-0.3V to +6V

All Other Pins........................................-0.3V to (VOUT + 0.3V)

Input Current

VCC Peak ..........................................................................1.0A

VCC Continuous ............................................................500mA

I BATT Peak.....................................................................250mA

I BATT Continuous ............................................................50mA

GND................................................................................50mA

All Other Inputs ...............................................................50mA

Output Current

OUT Peak..........................................................................1.0A

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS

(VCC = 4.6V to 5.5V for the MAX80\_L, VCC = 4.5V to 5.5V for the MAX80\_N, VCC = 4.35V to 5.5V for the MAX80\_M; VBATT = 2.8V; TA = TMIN to TMAX. Typical values are at VCC = 5V and TA = +25°C, unless otherwise noted.)

| PARAMETER                                                         | SYMBOL   | CONDITIONS                              | CONDITIONS                              | CONDITIONS                              | MIN           | TYP           | MAX           | UNITS   |
|-------------------------------------------------------------------|----------|-----------------------------------------|-----------------------------------------|-----------------------------------------|---------------|---------------|---------------|---------|
| Operating Voltage Range V CC , BATT (Note 1)                      |          |                                         |                                         |                                         | 0             | X             | 5.5           | V       |
| V OUT in Normal Operating Mode                                    |          | V CC = 4.5V                             | I OUT =25mA                             | I OUT =25mA                             |               | V CC - 0.02   |               | V       |
| V OUT in Normal Operating Mode                                    |          | V CC = 4.5V                             | I OUT =250mA,MAX80_C/E                  | I OUT =250mA,MAX80_C/E                  | V CC - 0.38   | V CC - 0.25   |               | V       |
| V OUT in Normal Operating Mode                                    |          | V CC = 4.5V                             | I OUT =250mA, MAX80_M                   | I OUT =250mA, MAX80_M                   | V CC - 0.45   |               |               | V       |
| V OUT in Normal Operating Mode                                    |          | V CC = 3V, V BATT = 2.8V, I OUT = 100mA | V CC = 3V, V BATT = 2.8V, I OUT = 100mA | V CC = 3V, V BATT = 2.8V, I OUT = 100mA | V CC - 0.25   | V CC - 0.12   |               | V       |
| V CC to OUT On-Resistance                                         |          | V CC =4.5V, I OUT =250mA                | MAX80_C/E                               | MAX80_C/E                               |               | 1.0           | 1.5           | Ω       |
| V CC to OUT On-Resistance                                         |          | V CC =4.5V, I OUT =250mA                | MAX80_M                                 | MAX80_M                                 |               |               | 1.8           | Ω       |
| V CC to OUT On-Resistance                                         |          | V CC = 3V, I OUT = 100mA                | V CC = 3V, I OUT = 100mA                | V CC = 3V, I OUT = 100mA                |               | 1.2           | 2.5           | Ω       |
| V OUT in Battery-Backup Mode                                      |          | V CC = 0V                               | V BATT = 4.5V, I OUT = 20mA             | V BATT = 4.5V, I OUT = 20mA             |               | V BATT - 0.16 |               | V       |
| V OUT in Battery-Backup Mode                                      |          | V CC = 0V                               | V BATT = 2.8V, I OUT = 10mA             | V BATT = 2.8V, I OUT = 10mA             | V BATT - 0.25 | V BATT - 0.12 |               | V       |
| V OUT in Battery-Backup Mode                                      |          | V CC = 0V                               | V BATT = 2.0V, I OUT = 5mA              | V BATT = 2.0V, I OUT = 5mA              | V BATT - 0.20 | V BATT - 0.08 |               | V       |
| BATT to OUT On-Resistance                                         |          | V CC = 0V                               | V BATT = 4.5V, I OUT = 20mA             | V BATT = 4.5V, I OUT = 20mA             |               | 8             |               | Ω       |
| BATT to OUT On-Resistance                                         |          | V CC = 0V                               | V BATT = 2.8V, I OUT = 10mA             | V BATT = 2.8V, I OUT = 10mA             |               | 12            | 25            | Ω       |
| BATT to OUT On-Resistance                                         |          | V CC = 0V                               | V BATT = 2.0V, I OUT = 5mA              | V BATT = 2.0V, I OUT = 5mA              |               | 16            | 40            | Ω       |
| Supply Current in Normal Operating Mode (excludes I OUT )         |          | MAX801                                  | MAX801                                  | MAX801                                  |               | 68            | 110           | µA      |
| Supply Current in Normal Operating Mode (excludes I OUT )         |          | MAX808                                  | MAX808                                  | MAX808                                  |               | 48            | 90            | µA      |
| Supply Current in Battery- Backup Mode (excludes I OUT ) (Note 2) |          | V CC = 0V, V BATT = 2.8V                | T A = +25°C                             | T A = +25°C                             |               | 0.4           | 1             | µA      |
| Supply Current in Battery- Backup Mode (excludes I OUT ) (Note 2) |          | V CC = 0V, V BATT = 2.8V                | T A = T MIN to T MAX                    | MAX80_C/E                               |               |               | 5             | µA      |
| Supply Current in Battery- Backup Mode (excludes I OUT ) (Note 2) |          | V CC = 0V, V BATT = 2.8V                | T A = T MIN to T MAX                    | MAX80_M                                 |               |               | 50            | µA      |
| BATT Standby Current (Note 3)                                     |          | V BATT + 0.2V ≤ V CC                    | T A = +25°C                             | T A = +25°C                             | -0.1          |               | 0.1           | µA      |
| BATT Standby Current (Note 3)                                     |          | V BATT + 0.2V ≤ V CC                    | T A = T MIN to T MAX                    | T A = T MIN to T MAX                    | -1.0          |               | 1.0           | µA      |
| Battery-Switchover Threshold                                      |          | V BATT = 2.8V                           | Power-up                                | Power-up                                | V BATT + 0.05 | V BATT + 0.05 | V BATT + 0.05 | V       |
| Battery-Switchover Threshold                                      |          | V BATT = 2.8V                           | Power-down                              | Power-down                              | V BATT        | V BATT        | V BATT        | V       |
| Hysteresis                                                        |          | Battery-Switchover                      | Battery-Switchover                      | Battery-Switchover                      | 50            | 50            | 50            | mV      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

OUT Continuous............................................................500mA

All Other Outputs ............................................................50mA

Continuous Power Dissipation (TA = +70°C)

Plastic DIP (derate 9.09mW/°C above +70°C) ............727mW

SO (derate 5.88mW/°C above +70°C).........................471mW

CERDIP (derate 8.00mW/°C above +70°C).................640mW

Operating Temperature Ranges

MAX801\_C\_A/MAX808\_C\_A...............................0°C to +70°C

MAX801\_E\_A/MAX808\_E\_A ............................-40°C to +85°C

MAX801\_MJA/MAX808\_MJA.........................-55°C to +125°C

Storage Temperature Range.............................-65°C to +160°C

Lead Temperature (soldering, 10sec) .............................+300°C

## 8-Pin µP Supervisory Circuits with ±1.5% Reset Accuracy

## ELECTRICAL CHARACTERISTICS (continued)

(VCC = 4.6V to 5.5V for the MAX80\_L, VCC = 4.5V to 5.5V for the MAX80\_N, VCC = 4.35V to 5.5V for the MAX80\_M; VBATT = 2.8V; TA = TMIN to TMAX. Typical values are at VCC = 5V and TA = +25°C, unless otherwise noted.)

| PARAMETER                          | SYMBOL                     |                               | CONDITIONS                   | MIN                     | TYP                     | MAX                     | UNITS                   |
|------------------------------------|----------------------------|-------------------------------|------------------------------|-------------------------|-------------------------|-------------------------|-------------------------|
| RESET AND LOW-LINE                 | RESET AND LOW-LINE         | RESET AND LOW-LINE            | RESET AND LOW-LINE           | RESET AND LOW-LINE      | RESET AND LOW-LINE      | RESET AND LOW-LINE      | RESET AND LOW-LINE      |
| Reset Threshold                    | V RST                      | V CC rising and falling       | MAX80_L                      | 4.600                   | 4.675                   | 4.750                   | V                       |
|                                    |                            | V CC rising and falling       | MAX80_N                      | 4.500                   | 4.575                   | 4.650                   | V                       |
|                                    |                            |                               | MAX80_M                      | 4.350                   | 4.425                   | 4.500                   | V                       |
| Reset-Threshold Hysteresis         | Reset-Threshold Hysteresis | Reset-Threshold Hysteresis    | Reset-Threshold Hysteresis   |                         | 13                      |                         | mV                      |
| LOWLINE to RESET Threshold Voltage | V LR                       | V CC falling                  |                              | 30                      | 52                      | 70                      | mV                      |
| LOWLINE Threshold, V CC Rising     | V LL                       | MAX80_L                       |                              |                         | 4.73                    | 4.81                    | V                       |
|                                    | V LL                       | MAX80_N                       |                              |                         | 4.63                    | 4.71                    | V                       |
|                                    | V LL                       | MAX80_M                       |                              |                         | 4.48                    | 4.56                    | V                       |
| V CC to RESET Delay                | t RD                       | V CC falling at               | 1mV/µs                       |                         | 17                      |                         | µs                      |
| V CC to LOWLINE Delay              | t LL                       | V CC falling at               | 1mV/µs                       |                         | 17                      |                         | µs                      |
| RESET Active Timeout Period        | t RP                       | V CC rising                   |                              | 140                     | 200                     | 280                     | ms                      |
| RESET Output Voltage               |                            | I SINK = 50µA, V = 0V,        | V CC = 1.0V, MAX80_C         |                         |                         | 0.3                     | V                       |
| RESET Output Voltage               |                            | BATT V CC falling             | V CC = 1.2V, MAX80_E/M       |                         |                         | 0.3                     | V                       |
| RESET Output Voltage               |                            | I SINK = 3.2mA, V CC          | = 4.25V                      |                         | 0.1                     | 0.4                     | V                       |
| RESET Output Voltage               |                            | I SOURCE =                    | 0.1mA                        | V CC - 1.5              | V CC - 0.1              |                         | V                       |
| RESET Output                       | I SC                       | Output sink current, V CC =   | 4.25V                        |                         | 40                      |                         | mA                      |
| Short-Circuit Current              | I SC                       | Output source                 | current                      |                         | 1.6                     |                         |                         |
| RESET Output Voltage               | I SC                       | I SINK = 3.2mA                |                              |                         |                         | 0.4                     | V                       |
| (MAX801)                           |                            | I SOURCE = 5mA, V CC =        | 4.25V                        | V CC - 1.5              |                         |                         |                         |
| RESET Output Short-                | I SC                       | Output sink                   | current                      |                         | 55                      |                         | mA                      |
| Circuit Current (MAX801)           | I SC                       | Output source current, V =    | CC 4.25V                     |                         | 15                      | 0.4                     |                         |
| LOWLINE                            | I SC                       | I SINK = 3.2mA, V CC =        | 4.25V                        |                         |                         |                         |                         |
| Output Voltage                     |                            | I SOURCE = 5mA, V CC =        | 4.25V                        | V CC - 1.5              |                         |                         | V                       |
| LOWLINE Output                     |                            | Output sink current, V CC =   | 4.25V                        |                         | 40                      |                         | mA                      |
| Short-Circuit Current              | I SC                       | Output source                 | current                      |                         | 20                      |                         |                         |
| WATCHDOG TIMER (MAX801)            | WATCHDOG TIMER (MAX801)    | WATCHDOG TIMER (MAX801)       | WATCHDOG TIMER (MAX801)      | WATCHDOG TIMER (MAX801) | WATCHDOG TIMER (MAX801) | WATCHDOG TIMER (MAX801) | WATCHDOG TIMER (MAX801) |
| Watchdog Timeout Period            | tWD                        |                               |                              | 1.12                    | 1.6                     | 2.24                    | sec                     |
| Minimum Watchdog Input Pulse Width |                            | V IL = 0.8V, V IH = 0.75V x V | CC                           | 100                     |                         |                         | ns                      |
| WDI Threshold Voltage (Note 4)     | V IH                       |                               |                              | 0.75 x V CC             |                         |                         | V                       |
| WDI Threshold Voltage (Note 4)     | V IL                       |                               |                              |                         |                         | 0.8                     | V                       |
| WDI Input Current                  |                            | RESET deasserted, WDI = 0V    | RESET deasserted, WDI = 0V   | -50                     | -10                     |                         | µA                      |
|                                    |                            | RESET deasserted, WDI = V CC  | RESET deasserted, WDI = V CC |                         | 16                      | 50                      |                         |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 8-Pin µP Supervisory Circuits with ±1.5% Reset Accuracy

## ELECTRICAL CHARACTERISTICS (continued)

(VCC = 4.6V to 5.5V for the MAX80\_L, VCC = 4.5V to 5.5V for the MAX80\_N, VCC = 4.35V to 5.5V for the MAX80\_M; VBATT = 2.8V; TA = TMIN to TMAX. Typical values are at VCC = 5V and TA = +25°C, unless otherwise noted.)

| PARAMETER                                    | SYMBOL                      | CONDITIONS                                            | MIN                         | TYP                         | MAX                         | UNITS                       |
|----------------------------------------------|-----------------------------|-------------------------------------------------------|-----------------------------|-----------------------------|-----------------------------|-----------------------------|
| CHIP-ENABLE GATING (MAX808)                  | CHIP-ENABLE GATING (MAX808) | CHIP-ENABLE GATING (MAX808)                           | CHIP-ENABLE GATING (MAX808) | CHIP-ENABLE GATING (MAX808) | CHIP-ENABLE GATING (MAX808) | CHIP-ENABLE GATING (MAX808) |
| CE IN Leakage Current                        |                             | V CC = 4.25V                                          |                             | ±0.00002                    | ±1                          | µA                          |
| CE IN to CE OUT Resistance (Note 5)          |                             | Enabled mode, V CC = V RST (max)                      |                             | 75                          | 150                         | Ω                           |
| CE OUT Short-Circuit Current ( RESET Active) |                             | V CC = 4.25V, CE OUT = 0V                             |                             | 15                          |                             | mA                          |
| CE IN to CE OUT Propagation Delay (Note 6)   |                             | V CC = 5V, CLOAD = 50pF, 50 Ω source-impedance driver |                             | 3                           | 8                           | ns                          |
| CE OUT Output Voltage High ( RESET Active)   |                             | V CC = 4.25V, I OUT = 2mA                             | 3.5                         |                             |                             | V                           |
| CE OUT Output Voltage High ( RESET Active)   |                             | V CC = 0V, I OUT = 10µA                               | V BATT - 0.1                | V BATT                      |                             | V                           |
| RESET to CE OUT Delay (Note 7)               |                             | V CC falling, CE IN = 0V                              |                             | 18                          |                             | µs                          |

- Note 1: Either VCC or VBATT can go to 0V if the other is greater than 2V.
- Note 2: The supply current drawn by the MAX80\_ from the battery (excluding IOUT) typically goes to 15µA when (VBATT - 0.1V) &lt; VCC &lt; VBATT. In most applications, this is a brief period as VCC falls through this region (see Typical Operating Characteristics ).
- Note 3: '+' = battery-discharging current, '-' = battery-charging current.
- Note 4: WDI is internally connected to a voltage divider between VCC and GND. If unconnected, WDI is typically driven to 1.8V, disabling the watchdog function.
- Note 5: The chip-enable resistance is tested with V CE IN = VCC / 2 and I CE IN = 1mA.
- Note 6: The chip-enable propagation delay is measured from the 50% point at CE IN to the 50% point at CE OUT.
- Note 7: If CE IN goes high, CE OUT goes high immediately and stays high until reset is deasserted and CE IN is low.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics

(VCC = 5V, VBATT = 2.8V, no load, TA = +25°C, unless otherwise noted.)

<!-- image -->

4

<!-- image -->

BATTERY SUPPLY CURRENT ( µ A)

<!-- image -->

PROPAGATION DELAY (ns)

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

MAX808 CHIP-ENABLE PROPAGATION DELAY vs. TEMPERATURE

<!-- image -->

## 8-Pin µP Supervisory Circuits with ±1.5% Reset Accuracy

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics (continued)

(VCC = 5V, VBATT = 2.8V, no load, TA = +25°C, unless otherwise noted.)

<!-- image -->

## 8-Pin µP Supervisory Circuits with ±1.5% Reset Accuracy

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics (continued)

(VCC = 5V, VBATT = 2.8V, no load, TA = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Description

| PIN    | PIN    | NAME    | FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                                         |
|--------|--------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| MAX801 | MAX808 | NAME    | FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1      | 1      | V CC    | Input Supply Voltage, nominally +5V. Bypass with a 0.1µF capacitor to GND.                                                                                                                                                                                                                                                                                                                                                       |
| 2      | 2      | LOWLINE | Low-Line Comparator Output. This CMOS-logic output goes low when V CC falls to 52mV above the reset threshold. Use LOWLINE to generate an NMI, initiating an orderly shut- down routine when V CC is falling. LOWLINE swings between V CC and GND.                                                                                                                                                                               |
| 3      | 3      | RESET   | Active-Low Reset Output. RESET is triggered and stays low when V CC is below the reset threshold (or during a watchdog timeout for the MAX801). It remains low 200ms after V CC rises above the reset threshold (or 200ms after the watchdog timeout occurs). RESET has a strong pull-down but a relatively weak pull-up, and can be wire-OR con- nected to logic gates. Valid for V CC ≥ 1V. RESET swings between V CC and GND. |
| 4      | 4      | GND     | Ground                                                                                                                                                                                                                                                                                                                                                                                                                           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 8-Pin µP Supervisory Circuits with ±1.5% Reset Accuracy

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Description (continued)

| PIN    | PIN    | NAME   | FUNCTION                                                                                                                                                                                                                                                                                                                          |
|--------|--------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| MAX801 | MAX808 | NAME   | FUNCTION                                                                                                                                                                                                                                                                                                                          |
| 5      | -      | RESET  | Active-High Reset Output. RESET is the inverse of RESET . It is a CMOS output that sources and sinks current. RESET swings between V CC and GND.                                                                                                                                                                                  |
| -      | 5      | CE OUT | Chip-Enable Output. Output to the chip-enable gating circuit. CE OUT is pulled up to the higher of V CC or V BATT when the chip-enable gate is disabled.                                                                                                                                                                          |
| 6      | -      | WDI    | Watchdog Input. If WDI remains high or low longer than the watchdog timeout period (typically 1.6sec), RESET will be asserted for 200ms. Leave unconnected to disable the watchdog function.                                                                                                                                      |
| -      | 6      | CE IN  | Chip-Enable Input                                                                                                                                                                                                                                                                                                                 |
| 7      | 7      | BATT   | Backup-Battery Input. When V CC falls below the reset threshold and V BATT , OUT switch- es from V CC to BATT. V BATT may exceed V CC . The battery can be removed while the MAX801/MAX808 is powered up, provided BATT is bypassed with a 0.1µF capacitor to GND. If no battery is used, connect BATT to ground and V CC to OUT. |
| 8      | 8      | OUT    | Output Supply Voltage to CMOS RAM. When V CC exceeds the reset threshold or V BATT , OUT connects to V CC . When V CC falls below the reset threshold and V BATT , OUT con- nects to BATT. Bypass OUT with a 0.1µF capacitor to GND.                                                                                              |

<!-- image -->

Figure 1.  Functional Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 8-Pin µP Supervisory Circuits with ±1.5% Reset Accuracy

Figure 2a.  Timing Diagram, VCC Rising

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAX801/MAX808 microprocessor (µP) supervisory circuits  provide power-supply monitoring and backupbattery switchover in µP systems. The MAX801 also provides program-execution watchdog functions (Figure 1). Use of BiCMOS technology results in an improved, 1.5% reset-threshold precision while keeping supply currents typically at 68µA (48µA for the MAX808). The MAX801/MAX808 are intended for battery-powered applications that require high resetthreshold precision, allowing a wide power-supply operating range while preventing the system from operating below its specified voltage range.

## RESET and RESET Outputs

The MAX801/MAX808's RESET output ensures that the µP powers up in a known state, and prevents codeexecution errors during power-down and brownout conditions. It does this by resetting the µP, terminating program execution when VCC dips below the reset threshold. Each time RESET is asserted, it stays low for at least the 200ms reset timeout period (set by an internal timer) to ensure the µP has adequate time to return to  an  initial  state.  The  internal  timer  restarts  any  time VCC goes below the reset threshold (VRST) before the reset timeout period is completed. The watchdog timer on the MAX801 can also initiate a reset (see the MAX801 Watchdog Timer section).

Figure 2b.  Timing Diagram, VCC Falling

<!-- image -->

The RESET output is active low, and is implemented with a strong pull-down/relatively weak pull-up structure. It is guaranteed to be a logic low for 0V &lt; VCC &lt; VRST, provided VBATT is greater than 2V. Without a backup battery, RESET is guaranteed valid for VCC ≥ 1V.

The RESET output is the inverse of the RESET output; it both sources and sinks current and cannot be wire-OR connected.

## Low-Line Comparator

The low-line comparator monitors VCC with a threshold voltage typically 52mV above the reset threshold, with 13mV of hysteresis. Use LOWLINE to  provide  a  nonmaskable interrupt (NMI) to the µP when power begins to fall, initiating an orderly software shutdown routine. In most battery-operated portable systems, reserve energy in the battery provides ample time to complete the shutdown routine once the low-line warning is encountered and before reset asserts. If the system must contend with a more rapid VCC fall time (such as when the main battery is disconnected, when a DC-DC converter shuts down, or when a high-side switch is opened during normal operation), use capacitance on the VCC line to provide time to execute the shutdown routine (Figure 3).  First  calculate  the  worst-case  time  required  for  the system to perform its shutdown routine. Then, with worst-case shutdown time, worst-case load current, and minimum low-line to reset threshold (VLR(min)),

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 8-Pin µP Supervisory Circuits with ±1.5% Reset Accuracy

Figure 3.  Using LOWLINE to Provide a Power-Fail Warning to the µP

<!-- image -->

<!-- image -->

calculate the amount of capacitance required to allow the shutdown routine to complete before reset is asserted:

<!-- formula-not-decoded -->

where tSHDN is the time required for the system to complete the shutdown routine (including the VCC to lowline  propagation delay), ILOAD is  the  current  being drained from the capacitor, and VLR is the low-line to reset threshold.

## Output Supply Voltage

The output supply (OUT) transfers power from VCC or BATT to the µP, RAM, and other external circuitry. At the maximum source current of 250mA, VOUT will typically be 220mV below VCC. Decouple OUT with a 0.1µF capacitor to ground.

## Battery-Backup Mode

Battery-backup mode preserves the contents of RAM in the event of a brownout or power failure. With a backup battery installed at BATT, the MAX801/MAX808 automatically switches RAM to backup power when VCC falls. Two conditions are required for switchover to batterybackup mode: 1) VCC must be below the reset threshold; 2) VCC must be below VBATT. Table 1 lists the status of inputs and outputs during battery-backup mode.

BATT is designed to conduct up to 20mA to OUT during battery backup. The PMOS switch on-resistance is approximately 12 Ω . Figure 4 shows the two series pass elements (between the BATT input and OUT) that facilitate UL recognition. VBATT can exceed VCC during normal operation without causing a reset.

Figure 4.  VCC and BATT to OUT Switch

<!-- image -->

## Table 1. Input and Output Status in Battery-Backup Mode

| PIN    | PIN    | NAME    | STATUS                                                                   |
|--------|--------|---------|--------------------------------------------------------------------------|
| MAX801 | MAX808 | NAME    | STATUS                                                                   |
| 1      | 1      | V CC    | Battery switchover comparator monitors V CC for active switchover.       |
| 2      | 2      | LOWLINE | Logic low                                                                |
| 3      | 3      | RESET   | Logic low                                                                |
| 4      | 4      | GND     | Ground-0V reference for all signals                                      |
| 5      | -      | RESET   | Logic high; the open-circuit voltage is equal to V CC .                  |
| -      | 5      | CE OUT  | Logic high. The open-circuit output voltage is equal to V BATT (MAX808). |
| 6      | -      | WDI     | WDI is ignored and goes high impedance.                                  |
| -      | 6      | CE IN   | High impedance (MAX808)                                                  |
| 7      | 7      | BATT    | Supply current is 1µA max for V BATT ≤ 2.8V.                             |
| 8      | 8      | OUT     | OUT is connected to BATT through two internal PMOS switches in series.   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 8-Pin µP Supervisory Circuits with ±1.5% Reset Accuracy

## MAX801 Watchdog Timer

The watchdog monitors the µP's activity. If the µP does not toggle the watchdog input (WDI) within 1.6sec, reset  asserts  for  the  reset  timeout  period.  The  internal 1.6sec timer is cleared when reset asserts or when a transition  (low-to-high or high-to-low) occurs at WDI while reset is not asserted. The timer remains cleared and does not count as long as reset is asserted. It starts counting as soon as reset is released (Figure 5). Supply current is typically reduced by 10µA when WDI is at a valid logic level. To disable the watchdog function,  leave WDI unconnected. An internal voltage divider sets WDI to about mid-supply, disabling the watchdog timer/counter.

## MAX808 Chip-Enable Gating

The MAX808 provides internal gating of chip-enable (CE) signals to prevent erroneous data from corrupting CMOS RAM in the event of a power failure. During normal operation, the CE gate is enabled and passes all CE transitions. When reset is asserted, this path becomes disabled, preventing erroneous data from corrupting the CMOS RAM. The MAX808 uses a series transmission gate from the chip-enable input ( CE IN) to the chip-enable output ( CE OUT) (Figure 1). The 8ns max chip-enable propagation from CE IN to CE OUT enables the MAX808 to be used with most µPs.

The MAX808 also features write-cycle-completion circuitry.  If  VCC falls  below  the  reset  threshold  while  the µP is writing to RAM, the MAX808 holds the CE gate enabled for 18µs to allow the µP to complete the write instruction. If the write cycle has not completed by the end of the 18µs period, the CE transmission gate turns off  and CE OUT goes high. If the µP completes the write  instruction  during  the  18µs  period,  the  CE  gate turns off (high impedance) and CE OUT goes high as soon as the µP pulls CE IN high. CE OUT remains high, even if CE IN falls low for any reason (Figure 6).

## Chip-Enable Input

CE IN is high impedance (disabled mode) while reset is asserted. During a power-down sequence when VCC passes the reset threshold, the CE transmission gate disables. CE IN becomes high impedance 18µs after reset asserts, provided CE IN is still low. If the µP completes the write instruction during the 18µs period, the CE gate turns off. CE IN becomes high impedance as soon as the µP pulls CE IN high. CE IN remains high impedance even if the signal at CE IN falls low (Figure 6).  During  a  power-up sequence, CE IN remains high impedance (regardless of CE IN activity)  until  reset  is deasserted following the reset timeout period.

Figure 5.  Watchdog Timing

<!-- image -->

Figure 6.  Chip-Enable Timing

<!-- image -->

In high-impedance mode, the leakage currents into this input are ±1µA max over temperature. In low-impedance mode, the impedance of CE IN appears as a 75 Ω resistor in series with the load at CE OUT.

The propagation delay through the CE transmission gate depends on both the source impedance of the drive to CE IN and the capacitive loading on CE OUT (see the Chip-Enable Propagation Delay vs. CE OUT Load Capacitance graph in the Typical Operating Characteristics ).  The  CE  propagation delay is production  tested  from  the  50%  point  on CE IN to the 50% point on CE OUT using a 50 Ω driver and 50pF of load capacitance (Figure 7). For minimum propagation delay, minimize the capacitive load at CE OUT and use a low-output-impedance driver.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 8-Pin µP Supervisory Circuits with ±1.5% Reset Accuracy

Figure 7.  MAX808 CE Gate Test Circuit

<!-- image -->

<!-- image -->

## Chip-Enable Output

In enabled mode, CE OUT's impedance is equivalent to 75 Ω in series with the source driving CE IN. In disabled mode, the 75 Ω transmission gate is off and CE OUT is actively pulled to the higher of VCC or  VBATT. The source turns off when the transmission gate is enabled.

## \_\_\_\_\_\_\_\_\_\_Applications Information

The MAX801/MAX808 are not short-circuit protected. Shorting OUT to ground, other than power-up transients such as charging a decoupling capacitor, may destroy the device. If long leads connect to the IC's inputs, ensure that these lines are free from ringing and other conditions that would forward bias the IC's protection diodes. Bypass OUT, VCC, and BATT with 0.1µF capacitors to GND.

The MAX801/MAX808 operate in two distinct modes:

- 1) Normal Operating Mode, with all circuitry powered up. Typical supply current from VCC is 68µA (48µA for  the  MAX808), while only leakage currents flow from the battery.
- 2) Battery-Backup Mode, where VCC is below VBATT and VRST. The supply current from the battery is typically less than 1µA.

## Using SuperCaps™ or MaxCaps™ with the MAX801/MAX808

BATT has the same operating voltage range as VCC, and the battery-switchover threshold voltage is typically VBATT when VCC is decreasing or VBATT + 0.05V when VCC is increasing. This hysteresis allows use of a SuperCap (e.g., around 0.47F) and a simple charging

Figure 8.  Using the MAX801/MAX808 with a SuperCap

<!-- image -->

circuit as a backup source (Figure 8). Since VBATT can exceed VCC while VCC is above the reset threshold, no special precautions are needed when using these µP supervisors with a SuperCap.

## Backup-Battery Replacement

The backup battery can be disconnected while VCC is above the reset threshold, provided BATT is bypassed with  a  0.1µF  capacitor  to  ground.  No  precautions  are necessary to avoid spurious reset pulses.

## Negative-Going VCC Transients

While issuing resets to the µP during power-up, powerdown, and brownout conditions, these supervisors are relatively immune to short-duration, negative-going VCC transients (glitches). It  is  usually  undesirable  to  reset the µP when VCC experiences only small glitches.

The Typical Operating Characteristics show a  graph of Maximum Transient Duration vs. Reset Threshold Overdrive, for which reset pulses are not generated. The graph was produced using negative-going VCC pulses, starting at 5V and ending below the reset threshold by the magnitude indicated (reset comparator  overdrive).  The  graph shows the maximum pulse width that a negative-going VCC transient may typically have without causing a reset pulse to be issued. As the amplitude of the transient increases (i.e., goes farther below the reset threshold), the maximum allowable pulse width decreases. Typically, a VCC transient that goes 40mV below the reset threshold and lasts for 3µs or  less  will  not  cause  a  reset  pulse  to  be  issued.  A 0.1µF bypass capacitor mounted close to the VCC pin provides additional transient immunity.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 8-Pin µP Supervisory Circuits with ±1.5% Reset Accuracy

## Watchdog Software Considerations

To help the watchdog timer keep a closer watch on software execution, you can set and reset the watchdog input at different points in the program, rather than 'pulsing' the watchdog input high-low-high or low-highlow. This technique avoids a 'stuck' loop, where the watchdog timer continues to be reset within the loop, keeping the watchdog from timing out.

Figure 9 shows a sample flow diagram where the I/O driving the watchdog input is set high at the beginning of  the  program, low at the beginning of every subroutine or loop, then high again when the program returns to  the  beginning.  If  the  program  should  'hang'  in  any subroutine, the I/O would be continually set low and the watchdog timer would be allowed to time out, causing a reset or interrupt to be issued.

## Maximum VCC Fall Time

The VCC fall time is limited by the propagation delay of the battery switchover comparator and should not exceed 0.03V/µs. A standard rule for filter capacitance on most regulators is around 100µF per Ampere of current. When the power supply is shut off or the main battery is disconnected, the associated initial VCC fall rate is just the inverse, or 1A/100µF = 0.01V/µs.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Configurations

<!-- image -->

Figure 9.  Watchdog Flow Diagram

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Chip Information

TRANSISTOR COUNT:  922

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->