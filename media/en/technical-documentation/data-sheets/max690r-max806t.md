<!-- lastmod 2022-08-04 -->
## MAX690T/S/R, MAX704T/S/R,

## MAX802T/S/R, MAX804-MAX806T/S/R

## General Description

These microprocessor (µP) supervisory circuits reduce the complexity  and  number  of  components  required  for  power-supply  monitoring  and  battery-control  functions  in  µP systems.  They  significantly  improve  system  reliability  and accuracy compared to separate ICs or discrete components.

These devices are designed for use in systems powered by 3.0V or 3.3V supplies. See the selector guide in the back of this  data  sheet  for  similar  devices  designed  for 5V systems. The suffixes denote different reset threshold voltages: 3.075V (T), 2.925V (S), and 2.625V (R) (see the Reset Threshold section in the Detailed Description ). All these parts are available in 8-pin DIP and SO packages. Functions offered in this series are as follows:

| Active-Low Reset MAX690   |    | Active-High Reset Watchdog   | Input    | Manual Reset Input Backup-Battery   | Switch Threshold    | Power-Fail Accuracy Power-Fail Comparator ±4%   |    | Reset Window ±75mV   |
|---------------------------|-----|------------------------------|-----------|-------------------------------------|----------------------|-------------------------------------------------|-----|----------------------|
| MAX704                    |    |                              |           |                                    |                     | ±4%                                             |    | ±75mV                |
| MAX802                    |    |                              |          |                                     |                     | ±2%                                             |    | ±2%                  |
| MAX804                    |     |                             |          |                                     |                     | ±2%                                             |    | ±2%                  |
| MAX805                    |     |                             |          |                                     |                     | ±4%                                             |    | ±75mV                |
| MAX806                    |    |                              |           |                                    |                     | ±2%                                             |    | ±2%                  |

## Typical Operating Circuits

Typical Operating Circuits continued at at end of data sheet.

<!-- image -->

## 3.0V/3.3V Microprocessor Supervisory Circuits

## Features

- ● RESET and RESET Outputs
- ● Manual Reset Input
- ● Precision Supply-Voltage Monitor
- ● 200ms Reset Time Delay
- ● Watchdog Timer (1.6sec timeout)
- ● Battery-Backup Power Switching-Battery Can Exceed V CC  in Normal Operation
- ● 40µA V CC  Supply Current
- ● 1µA Battery Supply Current
- ● Voltage Monitor for Power-Fail or Low-Battery Warning
- ● Guaranteed RESET Assertion to V CC  = 1V
- ● 8-Pin DIP and SO Packages

## Applications

- ● Battery-Powered Computers and Controllers
- ● Embedded Controllers
- ● Intelligent Instruments
- ● Critical µP Power Monitoring
- ● Portable Equipment

## Ordering Information

| PART**      | TEMP RANGE      | PIN-PACKAGE   |
|-------------|-----------------|---------------|
| MAX690 _CPA | 0°C to +70°C    | 8 Plastic DIP |
| MAX690_CSA  | 0°C to +70°C    | 8 SO          |
| MAX690_C/D  | 0°C to +70°C    | Dice*         |
| MAX690_EPA  | -40°C to +85°C  | 8 Plastic DIP |
| MAX690_ESA  | -40°C to +85°C  | 8 SO          |
| MAX690_MJA  | -55°C to +125°C | 8 CERDIP      |

## Ordering Information continued at end of data sheet.

* Contact factory for dice specifications.

** These parts offer a choice of reset threshold voltage. Select the letter corresponding to the desired nominal reset threshold voltage (T = 3.075V, S = 2.925V, R = 2.625V) and insert it into the blank to complete the part number.

Devices in PDIP and SO packages are available in both leaded and lead(Pb)-free packaging. Specify lead free by adding the + symbol at the end of the part number when ordering. Lead free not available for CERDIP package.

Pin Configuration appears at end of data sheet.

<!-- image -->

## MAX690T/S/R, MAX704T/S/R, MAX802T/S/R, MAX804-MAX806T/S/R

## Absolute Maximum Ratings

| Terminal Voltage (with respect to GND)                                                    |
|-------------------------------------------------------------------------------------------|
| V CC ...................................................................-0.3V to +6.0V    |
| VBATT...............................................................-0.3V to +6.0V        |
| All Other Inputs................. -0.3V to the higher of V CC or VBATT                    |
| Continuous Input Current                                                                  |
| V CC ...............................................................................100mA |
| VBATT.............................................................................18mA    |
| GND................................................................................18mA   |
| Output Current                                                                            |
| RESET , PFO ...................................................................18mA       |
| V .............................................................................100mA      |

## 3.0V/3.3V Microprocessor Supervisory Circuits

| Continuous Power Dissipation (T A = +70°C)                                |
|---------------------------------------------------------------------------|
| Plastic DIP (derate 9.09mW/°C above +70°C)............727mW               |
| SO (derate 5.88mW/°C above +70°C).........................471mW           |
| CERDIP (derate 8.00mW/°C above +70°C). ................640mW              |
| Operating Temperature Ranges                                              |
| MAX690_C_ _/MAX704_C_ _/MAX80_ _C_ _. .......0°C to +70°C                 |
| MAX690_E_ _/MAX704_E_ _/MAX80_ _E_ _.... -40°C to +85°C                   |
| MAX690_M_ _/MAX704_M_ _/MAX80_ _M_ _... -55°C to +125°C                   |
| Storage Temperature Range............................. -65°C to +160°C    |
| Lead Temperature (soldering, 10s)..................................+300°C |

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## Electrical Characteristics

(V CC  = 3.17V to 5.5V for the MAX690T/MAX704T/MAX80\_T, V CC  = 3.02V to 5.5V for the MAX690S/MAX704S/MAX80\_S, V CC  = 2.72V to 5.5V for the MAX690R/MAX704R/MAX80\_R; VBATT = 3.6V; T A  = T MIN  to T MAX ; unless otherwise noted. Typical values are at T A  = +25°C.)

| PARAMETER                                                     | SYMBOL   | CONDITIONS                                                |                                                           | MIN          | TYP          |   MAX | UNITS   |
|---------------------------------------------------------------|----------|-----------------------------------------------------------|-----------------------------------------------------------|--------------|--------------|-------|---------|
| Operating Voltage Range, V CC , VBATT (Note 1)                |          | MAX690_C, MAX704_C, MAX80_ _C                             | MAX690_C, MAX704_C, MAX80_ _C                             | 1.0          |              |   5.5 | V       |
| Operating Voltage Range, V CC , VBATT (Note 1)                |          | MAX690_E/M, MAX704_E/M, MAX80_ _E/M                       | MAX690_E/M, MAX704_E/M, MAX80_ _E/M                       | 1.1          |              |   5.5 | V       |
| V CC Supply Current (excluding I OUT )                        | I SUPPLY | MR = V CC (MAX704_/ MAX806_)                              | MAX690_C/E, MAX704_C/E, MAX80_ _C/E, V CC < 3.6V          |              | 40           |    50 | µA      |
| V CC Supply Current (excluding I OUT )                        | I SUPPLY | MR = V CC (MAX704_/ MAX806_)                              | MAX690_C/E, MAX704_C/E, MAX80_ _C/E, V CC < 5.5V          |              | 50           |    65 | µA      |
| V CC Supply Current (excluding I OUT )                        | I SUPPLY | MR = V CC (MAX704_/ MAX806_)                              | MAX690_M, MAX704_M, MAX80_ _M, V CC < 3.6V                |              | 40           |    55 | µA      |
| V CC Supply Current (excluding I OUT )                        | I SUPPLY | MR = V CC (MAX704_/ MAX806_)                              | MAX690_M, MAX704_M, MAX80_ _M, V CC < 5.5V                |              | 50           |    70 | µA      |
| V CC Supply Current in Battery- Backup Mode(excluding I OUT ) |          | MR = V CC (MAX704_/ MAX806_)                              | V CC = 2.0V, VBATT = 2.3V                                 |              | 25           |    50 | µA      |
| VBATT Supply Current, Any Mode (excluding I OUT ) (Note 2)    |          | MAX690_C/E, MAX704_C/E, MAX80_ _C/E                       | MAX690_C/E, MAX704_C/E, MAX80_ _C/E                       |              | 0.4          |     1 | µA      |
| VBATT Supply Current, Any Mode (excluding I OUT ) (Note 2)    |          | MAX690_M, MAX704_M, MAX80_ _M                             | MAX690_M, MAX704_M, MAX80_ _M                             |              | 0.4          |    10 | µA      |
| Battery Leakage Current (Note 3)                              |          | MAX690_C/E, MAX704_C/E, MAX80_ _C/E                       | MAX690_C/E, MAX704_C/E, MAX80_ _C/E                       |              | 0.01         |   0.5 | µA      |
| Battery Leakage Current (Note 3)                              |          | MAX690_M, MAX704_M, MAX80_ _M                             | MAX690_M, MAX704_M, MAX80_ _M                             |              | 0.01         |     5 | µA      |
| V OUT Output Voltage                                          |          | MAX690_C/E, MAX704_C/E, MAX80_ _C/E, I OUT = 5mA (Note 4) | MAX690_C/E, MAX704_C/E, MAX80_ _C/E, I OUT = 5mA (Note 4) | V CC -0.3    | V CC -0.015  |       | V       |
| V OUT Output Voltage                                          |          | MAX690_C/E, MAX704_C/E, MAX80_ _C/E I OUT = 50mA          | MAX690_C/E, MAX704_C/E, MAX80_ _C/E I OUT = 50mA          | V CC -0.3    | V CC -0.15   |       | V       |
| V OUT Output Voltage                                          |          | MAX690_M, MAX704_M, MAX80_ _M I OUT = 5mA (Note 4)        | MAX690_M, MAX704_M, MAX80_ _M I OUT = 5mA (Note 4)        | V CC -0.035  | V CC -0.015  |       | V       |
| V OUT Output Voltage                                          |          | MAX690_M, MAX704_M, MAX80_ _M I OUT = 50mA                | MAX690_M, MAX704_M, MAX80_ _M I OUT = 50mA                | V CC -0.35   | V CC -0.15   |       | V       |
| V OUT Output Voltage                                          |          | I OUT = 250µA, V CC > 2.5V (Note 4)                       | I OUT = 250µA, V CC > 2.5V (Note 4)                       | V CC -0.0015 | V CC -0.0006 |       | V       |

│

## MAX690T/S/R, MAX704T/S/R, MAX802T/S/R, MAX804-MAX806T/S/R

## Electrical Characteristics (continued)

(V CC  = 3.17V to 5.5V for the MAX690T/MAX704T/MAX80\_T, V CC  = 3.02V to 5.5V for the MAX690S/MAX704S/MAX80\_S, V CC  = 2.72V to 5.5V for the MAX690R/MAX704R/MAX80\_R; VBATT = 3.6V; T A  = T MIN  to T MAX ; unless otherwise noted. Typical values are at T A  = +25°C.)

| PARAMETER                                        | SYMBOL   | CONDITIONS                                                                               |                                                                                          | MIN         | TYP           |   MAX | UNITS   |
|--------------------------------------------------|----------|------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|-------------|---------------|-------|---------|
| V OUT in Battery-Backup Mode                     |          | I OUT = 250µA, VBATT = 2.3V                                                              | I OUT = 250µA, VBATT = 2.3V                                                              | VBATT - 0.1 | VBATT - 0.034 |       | V       |
| V OUT in Battery-Backup Mode                     |          | I OUT = 1mA, VBATT = 2.3V                                                                | I OUT = 1mA, VBATT = 2.3V                                                                |             | VBATT -0.14   |       | V       |
| Battery Switch Threshold, V CC Falling           |          | VBATT - V CC , V SW > V CC > 1.75V (Note 5)                                              | VBATT - V CC , V SW > V CC > 1.75V (Note 5)                                              | 65          | 25            |       | mV      |
| Battery Switch Threshold, V CC Falling           | V SW     | VBATT > V CC (Note 6)                                                                    | VBATT > V CC (Note 6)                                                                    | 2.30        | 2.40          |  2.50 | V       |
| Battery Switch Threshold, V CC Rising (Note 7)   |          | This value is identical to the reset threshold, V CC rising                              | This value is identical to the reset threshold, V CC rising                              |             |               |       | V       |
| Reset Threshold (Note 8)                         | V RST    | V CC falling                                                                             | V CC falling                                                                             | 3.00        | 3.075         |  3.15 | V       |
| Reset Threshold (Note 8)                         | V RST    | MAX690T/704T/805T V CC rising                                                            | MAX690T/704T/805T V CC rising                                                            | 3.00        | 3.085         |  3.17 | V       |
| Reset Threshold (Note 8)                         | V RST    | V falling                                                                                | CC                                                                                       | 3.00        | 3.075         |  3.12 | V       |
| Reset Threshold (Note 8)                         | V RST    | MAX802T/804T/806T V CC rising                                                            | MAX802T/804T/806T V CC rising                                                            | 3.00        | 3.085         |  3.14 | V       |
| Reset Threshold (Note 8)                         | V RST    | V CC falling                                                                             | V CC falling                                                                             | 2.85        | 2.925         |  3.00 | V       |
| Reset Threshold (Note 8)                         | V RST    | MAX690S/704S/805S V CC rising                                                            | MAX690S/704S/805S V CC rising                                                            | 2.85        | 2.935         |  3.02 | V       |
| Reset Threshold (Note 8)                         | V RST    | V CC falling                                                                             | V CC falling                                                                             | 2.88        | 2.925         |  3.00 | V       |
| Reset Threshold (Note 8)                         | V RST    | MAX802S/804S/806S V CC rising                                                            | MAX802S/804S/806S V CC rising                                                            | 2.88        | 2.935         |  3.02 | V       |
| Reset Threshold (Note 8)                         | V RST    | V CC falling                                                                             | V CC falling                                                                             | 2.55        | 2.625         |  2.70 | V       |
| Reset Threshold (Note 8)                         | V RST    | MAX690R/704R/805R V CC rising                                                            | MAX690R/704R/805R V CC rising                                                            | 2.55        | 2.635         |  2.72 | V       |
| Reset Threshold (Note 8)                         | V RST    | V CC falling                                                                             | V CC falling                                                                             | 2.59        | 2.625         |  2.70 | V       |
| Reset Threshold (Note 8)                         | V RST    | MAX802R/804R/806S V rising                                                               | CC                                                                                       | 2.59        | 2.635         |  2.72 | V       |
| Reset Timeout Period                             | t WP     | V CC < 3.6V                                                                              | V CC < 3.6V                                                                              | 140         | 200           |   280 | ms      |
| PFO , RESET Output Voltage                       | V OH     | I SOURCE = 50µA                                                                          | I SOURCE = 50µA                                                                          | V CC - 0.3  | V CC - 0.05   |       | V       |
| PFO , RESET Output Short to GND Current (Note 4) | I OS     | V CC = 3.3V, V OH = 0V                                                                   | V CC = 3.3V, V OH = 0V                                                                   |             | 180           |   500 | µV      |
| PFO , RESET , RESET Output Voltage               | V OL     | I SINK = 1.2mA; MAX690_/704_/802_/806_, V CC = V RST min; MAX804_/805_, V CC = V RST max | I SINK = 1.2mA; MAX690_/704_/802_/806_, V CC = V RST min; MAX804_/805_, V CC = V RST max |             | 0.06          |   0.3 | V       |
| PFO , RESET Output Voltage                       | V OL     | VBATT = 0V, V CC = 1.0V, I SINK = 40µA, MAX690_C, MAX704_C, MAX80_ _C                    | VBATT = 0V, V CC = 1.0V, I SINK = 40µA, MAX690_C, MAX704_C, MAX80_ _C                    |             | 0.13          |   0.3 | V       |
| PFO , RESET Output Voltage                       | V OL     | VBATT = 0V, V CC = 1.2V, I SINK = 200µA, MAX690_E/M, MAX704_E/M, MAX80_ _E/M             | VBATT = 0V, V CC = 1.2V, I SINK = 200µA, MAX690_E/M, MAX704_E/M, MAX80_ _E/M             |             | 0.17          |   0.3 | V       |
| RESET Output Leakage Current (Note 9)            |          | VBATT = 0V, V CC = V RST min; V RESET = 0V, V CC                                         | MAX804_C, MAX805_C                                                                       | -1          |               |    +1 | µA      |
| RESET Output Leakage Current (Note 9)            |          | VBATT = 0V, V CC = V RST min; V RESET = 0V, V CC                                         | MAX804_E/M, MAX805_E/M                                                                   | -10         |               |   +10 | µA      |

│

## 3.0V/3.3V Microprocessor Supervisory Circuits

## MAX690T/S/R, MAX704T/S/R, MAX802T/S/R, MAX804-MAX806T/S/R

## Electrical Characteristics (continued)

(V CC  = 3.17V to 5.5V for the MAX690T/MAX704T/MAX80\_T, V CC  = 3.02V to 5.5V for the MAX690S/MAX704S/MAX80\_S, V CC  = 2.72V to 5.5V for the MAX690R/MAX704R/MAX80\_R; VBATT = 3.6V; T A  = T MIN  to T MAX ; unless otherwise noted. Typical values are at T A  = +25C.)

| PARAMETER                  | SYMBOL   | CONDITIONS                               | CONDITIONS                                     | MIN        | TYP        | MAX        | UNITS   |
|----------------------------|----------|------------------------------------------|------------------------------------------------|------------|------------|------------|---------|
| PFI Input Threshold        | V PFT    | V CC < 3.6V V PFI falling                | MAX802_C/E, MAX804_C/E, MAX806_C/E             | 1.212      | 1.237      | 1.262      | V       |
|                            | V PFT    | V CC < 3.6V V PFI falling                | MAX690_/MAX704_/MAX805_                        | 1.187      | 1.237      | 1.287      | V       |
| PFI Input Current          |          | MAX690_C/E, MAX704_C/E, MAX80_ _C/E      | MAX690_C/E, MAX704_C/E, MAX80_ _C/E            | -25        | 2          | 25         | nA      |
| PFI Input Current          |          | MAX690_M, MAX704_M, MAX80_ _M            | MAX690_M, MAX704_M, MAX80_ _M                  | -500       | 2          | 500        | nA      |
| PFI Hysteresis, PFI Rising | V PFH    | V CC < 3.6V                              | MAX690_C/E, MAX704_C/E, MAX80_ _C/E            |            | 10         | 20         | mV      |
| PFI Hysteresis, PFI Rising | V PFH    | V CC < 3.6V                              | MAX690_M, MAX704_M, MAX80_ _M                  |            | 10         | 25         | mV      |
| PFI Input Current          |          | MAX690_C/E, MAX704_C/E, MAX80_ _C/E      | MAX690_C/E, MAX704_C/E, MAX80_ _C/E            | -25        | 2          | 25         | nA      |
| PFI Input Current          |          | MAX690_M, MAX704_M, MAX80_ _M            | MAX690_M, MAX704_M, MAX80_ _M                  | -500       | 2          | 500        | nA      |
| MR Input Threshold         | V IH     |                                          |                                                | 0.7 x V CC | 0.7 x V CC | 0.7 x V CC | V       |
| MR Input Threshold         | V IL     | MAX704_/MAX806_ only                     | MAX704_/MAX806_ only                           | 0.3 x V CC | 0.3 x V CC | 0.3 x V CC | V       |
| MR Pulse Width             | t MR     | MAX704_/MAX806_ only                     | MAX704_/MAX806_ only                           | 100        | 20         |            | ns      |
| MR to Reset Delay          | t MD     | MAX704_/MAX806_ only                     | MAX704_/MAX806_ only                           |            | 60         | 500        | ns      |
| MR Pull-Up Current         |          | MAX704_/MAX806_ only, MR = 0V, V CC = 3V | MAX704_/MAX806_ only, MR = 0V, V CC = 3V       | 20         | 60         | 350        | µA      |
| WDI Input Threshold        | V IH     |                                          |                                                | 0.7 x V CC | 0.7 x V CC | 0.7 x V CC | V       |
| WDI Input Threshold        | V IL     | MAX690_/MAX802_/MAX804_/MAX805_ only     | MAX690_/MAX802_/MAX804_/MAX805_ only           | 0.3 x V CC | 0.3 x V CC | 0.3 x V CC | V       |
| WDI Input Current          |          | 0V< V CC < 5.5V                          | MAX690_C/E, MAX802_C/E, MAX804_C/E, MAX805_C/E | -1         | +0.01      | +1         | µA      |
| WDI Input Current          |          | 0V< V CC < 5.5V                          | MAX690_M, MAX802_M, MAX804_M, MAX805_M         | -10        | +0.01      | +10        | µA      |
| Watchdog Timeout Period    | t WD     | V CC < 3.6V                              | MAX690/MAX802/MAX804/ MAX805 only              | 1.12       | 1.60       | 2.24       | s       |
| WDI Pulse Width            |          | MAX690_/MAX802_/MAX804_/MAX805_ only     | MAX690_/MAX802_/MAX804_/MAX805_ only           | 100        | 20         |            | ns      |

- Note 1: V CC  supply current, logic input leakage, watchdog functionality (MAX690\_/802\_/805\_/804\_), MR functionality (MAX704\_/806\_), PFI functionality, state of RESET (MAX690\_/704\_/802\_/806\_), and RESET (MAX804\_/805\_) tested at VBATT = 3.6V, and V CC  = 5.5V. The state of RESET or RESET and PFO is tested at V CC  = V CC  min.
- Note 2: Tested at VBATT = 3.6V, V CC  = 3.5V and 0V. The battery current will rise to 10µA over a narrow transition window around VCC = 1.9V.
- Note 3: Leakage current into the battery is tested under the worst-case conditions at V CC  = 5.5V, VBATT = 1.8V and at V CC  = 1.5V, VBATT= 1.0V.
- Note 4: Guaranteed by design.
- Note 5: When V SW  &gt; V CC  &gt; VBATT, V OUT  remains connected to V CC  until V CC  drops below VBATT. The V CC -to-VBATT comparator has a small 25mV typical hysteresis to prevent oscillation. For V CC  &lt; 1.75V (typ), V OUT  switches to VBATT regardless of the voltage on VBATT.
- Note 6: When VBATT &gt; V CC  &gt; V SW , V OUT  remains connected to V CC  until V CC  drops below the battery switch threshold (V SW ).
- Note 7: VOUT switches from VBATT to V CC  when V CC  rises above the reset threshold, independent of VBATT. Switchover back to VCC occurs at the exact voltage that causes RESET to go high (on the MAX804\_/805\_, RESET goes low); however switchover occurs 200ms prior to reset.
- Note 8: The reset threshold tolerance is wider for V CC  rising than for V CC  falling to accommodate the 10mV typical hysteresis, which prevents internal oscillation.
- Note 9: The leakage current into or out of the RESET pin is tested with RESET asserted (RESET output high impedance).

## 3.0V/3.3V Microprocessor Supervisory Circuits

│

## MAX690T/S/R, MAX704T/S/R, MAX802T/S/R, MAX804-MAX806T/S/R

## Typical Operating Characteristics

(TA = +25°C, unless otherwise noted.)

VCC-TO-VOUT ON-RESISTANCE vs. TEMPERATURE

MAX690 toc01

<!-- image -->

BATTERY SUPPLY CURRENT vs. TEMPERATURE

<!-- image -->

PFI THRESHOLD vs. TEMPERATURE

<!-- image -->

VBATT-TO-VOUT ON-RESISTANCE vs. TEMPERATURE

<!-- image -->

RESET TIMEOUT PERIOD vs. TEMPERATURE

<!-- image -->

## 3.0V/3.3V Microprocessor Supervisory Circuits

<!-- image -->

RESET-COMPARATOR PROPAGATION DELAY vs. TEMPERATURE

<!-- image -->

NORMALIZED RESET THRESHOLD vs. TEMPERATURE

<!-- image -->

│

## MAX690T/S/R, MAX704T/S/R, MAX802T/S/R, MAX804-MAX806T/S/R

## Pin Description

| PIN           | PIN           | PIN           | NAME   |                                                                                                                                                                                                                                                                                                            |
|---------------|---------------|---------------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| MAX690 MAX802 | MAX704 MAX806 | MAX804 MAX805 | NAME   | FUNCTION                                                                                                                                                                                                                                                                                                   |
| 1             | 1             | 1             | V OUT  | Supply Output for CMOS RAM. When V CC is above the reset threshold, V OUT is connected to V CC through a p-channel MOSFET switch. When V CC falls below V SW and VBATT, VBATT connects to V OUT . Connect to V CC if no battery is used.                                                                   |
| 2             | 2             | 2             | V CC   | Main Supply Input                                                                                                                                                                                                                                                                                          |
| 3             | 3             | 3             | GND    | Ground                                                                                                                                                                                                                                                                                                     |
| 4             | 4             | 4             | PFI    | Power-Fail Input. When PFI is less than V PFT or when V CC falls below V SW , PFO goes low; otherwise, PFO remains high. Connect to ground if unused.                                                                                                                                                      |
| 5             | 5             | 5             | PFO    | Power-Fail Output. When PFI is less than V PFT , or V CC falls below V SW , PFO goes low; otherwise, PFO remains high. Leave open if unused.                                                                                                                                                               |
| 6             | -             | 6             | WDI    | Watchdog Input. If WDI remains high or low for 1.6s, the internal watchdog timer runs out and reset is triggered. The internal watchdog timer clears while reset is asserted or when WDI sees a rising or falling edge. The watchdog function cannot be disabled.                                          |
| -             | 6             | -             | MR     | Manual Reset Input. A logic low on MR asserts reset. Reset remains asserted as long as MR is low and for 200ms after MR returns high. This active-low input has an internal 70µA pullup current. It can be driven from a TTL or CMOS logic line, or shorted to ground with a switch. Leave open if unused. |
| 7             | 7             | -             | RESET  | Active-Low Reset Output. Pulses low for 200ms when triggered, and stays low whenever V CC is below the reset threshold or when MR is a logic low. It remains low for 200ms after either V CC rises above the reset threshold, the watchdog triggers a reset, or MR goes from low to high.                  |
| -             | -             | 7             | RESET  | Active-High, Open-Drain Reset Output is the inverse of RESET .                                                                                                                                                                                                                                             |
| 8             | 8             | 8             | VBATT  | Backup-Battery Input. When V CC falls below V SW and VBATT, V OUT switches from V CC to VBATT. When V CC rises above the reset threshold, V OUT reconnects to V CC . VBATT may exceed V CC . Connect to V CC if no battery is used.                                                                        |

## Detailed Description

## Reset Output

A microprocessor's (µP's) reset input starts the µP in a known state. These µP supervisory circuits assert reset to prevent code execution errors during power-up, powerdown, brownout conditions, or a watchdog timeout.

RESET is  guaranteed to be a logic low for 0V &lt; V CC  &lt; VRST, provided that VBATT is greater than 1V. Without a backup battery, RESET is guaranteed valid for V CC  &gt; 1V. Once VCC exceeds the reset threshold, an internal timer keeps RESET low for the reset timeout period; after this interval, RESET goes high (Figure 2).

If a brownout condition occurs (V CC  dips below the reset threshold), RESET goes low. Each time RESET is asserted, it stays low for the reset timeout period. Any time V CC goes below the reset threshold, the internal timer restarts. The  watchdog  timer  can  also  initiate  a  reset.  See  the Watchdog Input section.

The  MAX804\_/MAX805\_  active-high  RESET  output  is open drain, and the inverse of the MAX690\_/MAX704\_/ MAX802\_/MAX806\_ RESET output.

## Reset Threshold

The MAX690T/MAX704T/MAX805T are intended for 3.3V systems with a ±5% power-supply tolerance and a 10% system tolerance.  Except  for  watchdog  faults,  reset  will not  assert  as  long  as  the  power  supply  remains  above 3.15V (3.3V - 5%). Reset is guaranteed to assert before the power supply falls below 3.0V.

The  MAX690S/MAX704S/MAX805S  are  designed  for 3.3V ±10% power supplies. Except for watchdog faults, they  are  guaranteed  not  to  assert  reset  as  long  as  the supply  remains  above  3.0V  (3.3V  -  10%).  Reset  is guaranteed to assert before the power supply falls below 2.85V (V CC  - 14%).

The  MAX690R/MAX704R/MAX805R  are  optimized  for monitoring  3.0V  ±10%  power  supplies.  Reset  will  not occu r until  V CC   falls  below  2.7V  (3.0V  -  10%),  but  is guaranteed to occur before the supply falls below 2.59V (3.0V - 14%).

The MAX802R/S/T, MAX804R/S/T, and MAX806R/S/T are respectively  similar  to  the  MAX690R/S/T,  MAX805R/S/T, and MAX704R/S/T, but with tightened reset and power-fail threshold tolerances.

## 3.0V/3.3V Microprocessor Supervisory Circuits

## MAX690T/S/R, MAX704T/S/R, MAX802T/S/R, MAX804-MAX806T/S/R

Figure 1. Block Diagram

<!-- image -->

## Watchdog Input (MAX690\_/802\_/804\_/805\_)

The watchdog circuit monitors the µP's activity. If the µP does not toggle the watchdog input (WDI) within 1.6sec, a  reset  pulse  is  triggered.  The  internal  1.6sec  timer  is cleared by either a reset pulse or by a transition (low-tohigh or high-to-low) at WDI. If WDI is tied high or low, a RESET pulse is triggered every 1.8sec (t WD  plus t RS ).

As long as reset is asserted, the timer remains cleared and does not count. As soon as reset is deasserted, the timer starts counting. Unlike the 5V MAX690 family, the watchdog function cannot be disabled.

## 3.0V/3.3V Microprocessor Supervisory Circuits

Figure 2. Timing Diagram

<!-- image -->

## Power-Fail Comparator

The  PFI  input  is  compared  to  an  internal  reference.  If PFI  is  less  than  V PFT , PFO goes  low.  The  power-fail comparator  is  intended  for  use  as  an  undervoltage detector  to  signal  a  failing  power  supply.  However, the  comparator  does  not  need  to  be  dedicated  to  this function because it is completely separate from the rest of the circuitry.

The  power-fail  comparator  turns  off  and PFO goes  low when VCC falls below V SW  on power-down. The powerfail comparator turns on as V CC  crosses V SW  on powerup. If the comparator is not used, connect PFI to ground and leave PFO unconnected. PFO can be connected to MR on the MAX704\_/MAX806\_ so that a low voltage on PFI will generate a reset (Figure 5b).

│

## MAX690T/S/R, MAX704T/S/R, MAX802T/S/R, MAX804-MAX806T/S/R

## Backup-Battery Switchover

In  the  event  of  a  brownout  or  power  failure,  it  may  be necessary to preserve the contents of RAM. With a backup battery installed at VBATT, the devices automatically switch RAM to backup power when V CC  falls.

This family of µP supervisors (designed for 3.3V and 3V systems) doesn't always connect VBATT to V OUT  when VBATT is  greater  than  V CC .  VBATT  connects  to  V OUT (through  a  140Ω  switch)  when  V CC is  below  V SW and VBATT  is  greater  than  V CC ,  or  when  V CC   falls  below 1.75V (typ) regardless of the VBATT voltage. This is done to  allow  the  backup  battery  (e.g.,  a  3.6V  lithium  cell)  to have a higher voltage than V CC .

Switchover at V SW  (2.40V) ensures that battery-backup mode is entered before V OUT  gets too close to the 2.0V minimum required to reliably retain data in CMOS RAM. Switchover  at  higher  V CC   voltages  would  decrease backup-battery  life.  When  V CC   recovers,  switchover  is deferred until V CC  rises above the reset threshold (V RST ) to  ensure  a  stable  supply.  V OUT   is  connected  to  V CC through a 3Ω PMOS power switch.

## Manual Reset

A logic low on MR asserts reset. Reset remains asserted while MR is  low,  and  for  t WP   (200ms)  after MR returns high. This input has an internal 70µA pullup current, so it can be left open if it is not used. MR can be driven with TTL  or  CMOS  logic  levels,  or  with  open-drain/collector outputs. Connect a normally open momentary switch from MR to  GND  to  create  a  manual-reset  function;  external debounce circuitry is not required.

## Table 1. Input and Output Status in Battery-Backup Mode

| PIN NAME   | STATUS                                                 |
|------------|--------------------------------------------------------|
| V OUT      | Connected to VBATT through an internal 140Ω switch     |
| V CC       | Disconnected from V OUT                                |
| PFI        | The power-fail comparator is disabled when V CC < V SW |
| PFO        | Logic low when V CC < V SW or PFI < V PFT              |
| WDI        | The watchdog timer is disabled                         |
| MR         | Disabled                                               |
| RESET      | Low logic                                              |
| RESET      | High impedance                                         |
| VBATT      | Connected to V OUT                                     |

## 3.0V/3.3V Microprocessor Supervisory Circuits

## Applications Information

These  µP  supervisory circuits are not short-circuit protected. Shorting V OUT  to ground-excluding power-up transients  such  as  charging  a  decoupling  capacitordestroys  the  device.  Decouple  both  V CC   and  VBATT pins  to  ground  by  placing  0.1µF  capacitors  as  close  as possible to the device.

## Using a SuperCap as a Backup Power Source

SuperCaps  are  capacitors  with  extremely  high  capacitance values (e.g., order of 0.47F) for their size. Figure 3 shows two ways to use a SuperCap as a backup power source.  The  SuperCap  may  be  connected  through  a diode to the 3V input (Figure 3a) or, if a 5V supply is also available,  the  SuperCap  may  be  charged  up  to  the  5V supply (Figure 3b) allowing a longer backup period. Since VBATT can exceed V CC  while V CC  is a bove the reset threshold,  there  are  no  special  precautions  when  using these µP supervisors with a SuperCap.

## Operation without a Backup Power Source

These µP supervisors were designed for battery-backed applications. If a backup battery is not used, connect both VBATT and V OUT  to V CC , or use a different µP supervisor such as the MAX706T/S/R or MAX708T/S/R.

## Replacing the Backup Battery

The  backup  power  source  can  be  removed  while  V CC remains  valid,  if  VBATT  is  decoupled  with  a  0.1µF capacitor to ground, without danger of triggering RESET/ RESET . As long as V CC  stays above V SW , battery-backup mode cannot be entered.

## Adding Hysteresis to the Power-Fail Comparator

The power-fail comparator has a typical input hysteresis of 10mV. This is sufficient for most applications where a power-supply line is being monitored through an external voltage divider (see the Monitoring an Additional Power Supply section).

If  additional  noise  margin  is  desired,  connect  a  resistor between PFO and PFI as shown in Figure 4a. Select the ratio  of  R1  and  R2  such  that  PFI  sees  1.237V  (V PFT ) when  V IN   falls  to  its  trip  point  (V TRIP ).  R3  adds  the hysteresis  and  will  typically  be  more  than  10  times  the value of R1 or R2. The hysteresis window extends both above (V H ) and below (V L ) the original trip point (V TRIP ). Connecting an ordinary signal diode in series with R3, as shown in Figure 4b, causes the lower trip  point  (V L )  to

## 3.0V/3.3V Microprocessor Supervisory Circuits

Figure 3. Using a SuperCap as a Backup Power Source

<!-- image -->

coincide with the trip point without hysteresis (V TRIP ), so the  entire  hysteresis  window  occurs  above  V TRIP .  This method  provides  additional  noise  margin  without  compromising the accuracy of the power-fail threshold when the monitored voltage is falling. It is useful for accurately detecting when a voltage falls past a threshold.

The current through R1 and R2 should be at least 1µA to ensure that the 25nA (max over extended temperature range) PFI input current does not shift the trip point. R3 should be larger than 10kΩ so it does not load down the PFO pin. Capacitor C1 adds additional noise rejection.

## Monitoring an Additional Power Supply

These  µP  supervisors  can  monitor  either  positive  or negative  supplies  using  a  resistor  voltage  divider  to PFI. PFO can  be  used  to  generate  an  interrupt  to  the µP (Figure  5).  Connecting PFO to MR on  the  MAX704 and MAX806 causes reset to assert when the monitored supply  goes  out  of  tolerance.  Reset  remains  asserted as long as PFO holds MR low, and for 200ms after PFO goes high.

## Interfacing to µPs with Bidirectional Reset Pins

µPs  with  bidirectional  reset  pins,  such  as  the  Motorola 68HC11 series, can contend with the MAX690\_/MAX704\_/ MAX802\_/MAX806\_ RESET output.  If,  for  example,  the RESET output is driven high and the µP wants to pull it low, indeterminate logic levels may result. To correct this, connect a 4.7kΩ resistor between the RESET output and the µP reset I/O, as in Figure 6. Buffer the RESET output to other system components.

## Negative-Going VCC Transients

While issuing resets to the µP during power-up, powerdown,  and  brownout  conditions,  these  supervisors  are relatively  immune  to  short-duration  negative-going  V CC transients (glitches). It is usually undesirable to reset the µP when V CC  experiences only small glitches.

Figure  7  shows  maximum  transient  duration  vs.  resetcomparator  overdrive,  for  which  reset  pulses  are not generated. The graph was produced using negative-going VCC pulses, starting at 3.3V and ending below the reset threshold  by  the  magnitude  indicated  (reset  comparator overdrive). The graph shows the maximum pulse width a negative-going V CC  transient may typically have without causing a reset pulse to be issued. As the amplitude of the transient increases (i.e., goes farther below the reset threshold), the maximum allowable pulse width decreases. Typically, a V CC  transient that goes 100mV below the reset threshold and lasts for 40µs or less will not cause a reset pulse to be issued.

A 100nF bypass capacitor mounted close to the V CC  pin provides additional transient immunity.

│

## 3.0V/3.3V Microprocessor Supervisory Circuits

Figure 4. a) Adding Additional Hysteresis to the Power-Fail Comparator b) Shifting the Additional Hysteresis above V PFT

<!-- image -->

Figure 5. Using the Power-Fail Comparator to Monitor an Additional Power Supply

<!-- image -->

│

## MAX690T/S/R, MAX704T/S/R, MAX802T/S/R, MAX804-MAX806T/S/R

Figure 6. Interfacing to μPs with Bidirectional Reset I/O

<!-- image -->

Figure 7. Maximum Transient Duration without Causing a Reset Pulse vs. Reset Comparator Overdrive

<!-- image -->

## Chip Information

TRANSISTOR COUNT: 802;

SUBSTRATE  IS  CONNECTED  TO  THE  HIGHER  OF VCC  OR  VBATT,  AND  MUST  BE  FLOATED  IN  ANY HYBRID DESIGN.

## 3.0V/3.3V Microprocessor Supervisory Circuits

## Typical Operating Circuits (continued)

<!-- image -->

## Chip Topography

<!-- image -->

- ( ) ARE FOR MAX804T/S/R, MAX805T/S/R.
- [ ] ARE FOR MAX704T/S/R, MAX806T/S/R.

│

## MAX690T/S/R, MAX704T/S/R,

## MAX802T/S/R, MAX804-MAX806T/S/R

## Pin Configuration

<!-- image -->

## Package Information

For the latest package outline information and land patterns, go to www.maximintegrated.com/packages . Note that a '+', '#', or '-' in the package code indicates RoHS status only. Package drawings may show a different suffix character, but the drawing pertains to the package regardless of RoHS status.

| PACKAGE TYPE   | PACKAGE e CODE   | OUTLINE NO.   | LAND PATTERN NO.   |
|----------------|------------------|---------------|--------------------|
| 8 PDIP         | P8+2             | 21-0043       | -                  |
| 8 CDIP         | J8+2             | 21-0045       | -                  |
| 8 SOIC         | S8+4             | 21-0041       | 90-0096            |

## 3.0V/3.3V Microprocessor

## Supervisory Circuits

## Ordering Information (continued)

| PART**      | TEMP RANGE      | PIN-PACKAGE   |
|-------------|-----------------|---------------|
| MAX704 _CPA | 0°C to +70°C    | 8 Plastic DIP |
| MAX704_CSA  | 0°C to +70°C    | 8 SO          |
| MAX704_C/D  | 0°C to +70°C    | Dice*         |
| MAX704_EPA  | -40°C to +85°C  | 8 Plastic DIP |
| MAX704_ESA  | -40°C to +85°C  | 8 SO          |
| MAX704_MJA  | -55°C to +125°C | 8 CERDIP      |
| MAX802 _CPA | 0°C to +70°C    | 8 Plastic DIP |
| MAX802_CSA  | 0°C to +70°C    | 8 SO          |
| MAX802_C/D  | 0°C to +70°C    | Dice*         |
| MAX802_EPA  | -40°C to +85°C  | 8 Plastic DIP |
| MAX802_ESA  | -40°C to +85°C  | 8 SO          |
| MAX802_MJA  | -55°C to +125°C | 8 CERDIP      |
| MAX804 _CPA | 0°C to +70°C    | 8 Plastic DIP |
| MAX804_CSA  | 0°C to +70°C    | 8 SO          |
| MAX804_C/D  | 0°C to +70°C    | Dice*         |
| MAX804_EPA  | -40°C to +85°C  | 8 Plastic DIP |
| MAX804_ESA  | -40°C to +85°C  | 8 SO          |
| MAX804_MJA  | -55°C to +125°C | 8 CERDIP      |
| MAX805 _CPA | 0°C to +70°C    | 8 Plastic DIP |
| MAX805_CSA  | 0°C to +70°C    | 8 SO          |
| MAX805_C/D  | 0°C to +70°C    | Dice*         |
| MAX805_EPA  | -40°C to +85°C  | 8 Plastic DIP |
| MAX805_ESA  | -40°C to +85°C  | 8 SO          |
| MAX805_MJA  | -55°C to +125°C | 8 CERDIP      |
| MAX806 _CPA | 0°C to +70°C    | 8 Plastic DIP |
| MAX806_CSA  | 0°C to +70°C    | 8 SO          |
| MAX806_C/D  | 0°C to +70°C    | Dice*         |
| MAX806_EPA  | -40°C to +85°C  | 8 Plastic DIP |
| MAX806_ESA  | -40°C to +85°C  | 8 SO          |
| MAX806_MJA  | -55°C to +125°C | 8 CERDIP      |

Devices in PDIP and SO packages are available in both leaded and lead(Pb)-free packaging. Specify lead free by adding the + symbol at the end of the part number when ordering. Lead free not available for CERDIP package.

│

## MAX690T/S/R, MAX704T/S/R, MAX802T/S/R, MAX804-MAX806T/S/R

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 3 | 4/15            | No /V OPNs in Ordering Information ; deleted Automotive Systems in Applications Information section; added Package Information and Revision History tables | 1, 12, 13       |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

│

## 3.0V/3.3V Microprocessor Supervisory Circuits