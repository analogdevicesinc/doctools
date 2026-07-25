<!-- lastmod 2022-10-10 -->
Battery-Powered Equipment

Portable Instruments

Computers

Controllers

Intelligent Instruments

Critical µP Power Monitoring

µMAX is a registered trademark of Maxim Integrated Products, Inc.

<!-- image -->

## +3V Voltage Monitoring, Low-Cost µP Supervisory Circuits

## General Description

The MAX706P/R/S/T, MAX706AP/AR/AS/AT, and MAX708R/S/T microprocessor (µP) supervisory circuits reduce the complexity and number of components required to monitor +3V power-supply levels in +3V to +5V µP systems. These devices significantly improve system reliability  and  accuracy compared to separate ICs or discrete components.

The MAX706P/R/S/T and MAX706AP/AR/AS/AT supervisory circuits provide the following four functions:

- 1) A reset output during power-up, power-down, and brownout conditions.
- 2) An independent watchdog output that goes low if the watchdog input has not been toggled within 1.6s.
- 3) A 1.25V threshold detector for power-fail warning, low-battery detection, or for monitoring a power supply other than the main supply.
- 4) An active-low, manual-reset input.

The  only  difference  between  the  MAX706R/AR, MAX706S/AS, and MAX706T/AT is the reset-threshold voltage levels, which are 2.63V, 2.93V, and 3.08V, respectively. All have active-low reset output signals. The MAX706P/AP are identical to the MAX706R/AR, except the reset output signal is active-high. The watchdog timer function for the MAX706AP/AR/AS/AT disables when the WDI input is left open or connected to a high-impedance state of a low-leakage tri-state output.

The MAX708R/S/T provide the same functions as the MAX706R/S/T and MAX706AR/AS/AT except they do not have a watchdog timer. Instead, they provide both RESET and RESET outputs. As with the MAX706, devices with R, S, and T suffixes have reset thresholds of 2.63V, 2.93V, and 3.08V, respectively.

These devices are available in 8-pin SO, DIP, and µMAX ® packages and are fully specified over the operating temperature range.

## Applications

Features

- ♦ µ MAX Package, Small 8-Pin SO
- ♦ Precision Supply-Voltage Monitors 2.63V (MAX706P/R, MAX706AP/AR, and MAX708R) 2.93V (MAX706S, MAX706AS, and MAX708S) 3.08V (MAX706T, MAX706AT, and MAX708T)
- ♦ 200ms Reset Time Delay
- ♦ Debounced TTL/CMOS-Compatible Manual Reset Input
- ♦ 100 µ A Quiescent Current
- ♦ WDI Disable Feature (MAX706AP/AR/AS/AT)
- ♦ Watchdog Timer: 1.6s Timeout
- ♦ Reset Output Signal: Active-High Only (MAX706P, MAX706AP) Active-Low Only (MAX706R/S/T, MAX706AR/AS/AT) Active-High and Active-Low (MAX708R/S/T)
- ♦ Voltage Monitor for Power-Fail or Low-Battery Warning
- ♦ 8-Pin Surface-Mount Package
- ♦ Guaranteed RESET Assertion to VCC = 1V

## Ordering Information

| PART †      | TEMP RANGE     | PIN- PACKAGE   | PKG CODE   |
|-------------|----------------|----------------|------------|
| MAX706P CPA | 0°C to +70°C   | 8 PDIP         | P8-1       |
| MAX706PCSA  | 0°C to +70°C   | 8 SO           | S8-2       |
| MAX706PCUA  | 0°C to +70°C   | 8 µMAX         | U8-1       |
| MAX706PEPA  | -40°C to +85°C | 8 PDIP         | P8-1       |

Ordering Information continued at end of data sheet. Pin Configurations appear at end of data sheet.

## Typical Operating Circuits

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## +3V Voltage Monitoring, Low-Cost µP Supervisory Circuits

## ABSOLUTE MAXIMUM RATINGS

Terminal Voltage (with respect to GND)

VCC........................................................................-0.3V to +6V

All Other Inputs (Note 1)..........................-0.3V to (VCC + 0.3V)

Input Current

VCC ..................................................................................20mA

GND.................................................................................20mA

Output Current (all outputs) ................................................20mA

Continuous Power Dissipation (TA = +70

°

C)

8-Pin CERDIP (derate 8mW/

°

C above +70

°

C)..............640mW

8-Pin PDIP (derate 9.1mW/

°

C above +70

°

C).............727.3mW

8-Pin SO (derate 5.9mW/

°

C above +70

°

C)................470.6mW

8-Pin µMAX (derate 4.5mW/ o C above +70

°

C)..............362mW

Operating Temperature Range

MAX70\_C.............................................................0

°

C to +70

°

C

MAX70\_E ..........................................................-40

°

C to +85

°

C

MAX70\_M .......................................................-55

°

C to +125

°

C

Junction Temperature......................................................+150

°

C

Storage Temperature Range.............................-65

°

C to +150

°

C

Lead Temperature (soldering, 10s) .................................+300

°

C

Note 1: The input-voltage limits on PFI, WDI, and MR can be exceeded if the input current is less than 10mA.

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS

(MAX70\_P/R, MAX706AP/AR: VCC = 2.7V to 5.5V; MAX70\_S, MAX706AS: VCC = 3.0V to 5.5V; MAX70\_T, MAX706AT: VCC = 3.15V to 5.5V; TJ = TA = TMIN to TMAX, unless otherwise noted. Typical values are at TJ = TA = +25 ° C.) (Note 2)

| PARAMETER                                          | SYMBOL       | CONDITIONS                             | CONDITIONS                             | MIN          | TYP          | MAX          | UNITS        |
|----------------------------------------------------|--------------|----------------------------------------|----------------------------------------|--------------|--------------|--------------|--------------|
| Supply Voltage Range                               | V CC         |                                        | MAX70_C                                | 1.0          |              | 5.5          | V            |
|                                                    | V CC         |                                        | MAX70_E/M                              | 1.2          |              | 5.5          | V            |
| Supply Current                                     |              | V CC < 3.6V                            | MAX706_C                               |              | 90           | 200          | µA           |
| Supply Current                                     |              | V CC < 3.6V                            | MAX706_E/M                             |              | 90           | 300          | µA           |
| Supply Current                                     |              | V CC < 3.6V                            | MAX708_C                               |              | 50           | 200          | µA           |
| Supply Current                                     | I            | V CC < 3.6V                            | MAX708_E/M                             |              | 50           | 300          | µA           |
| Supply Current                                     | SUPPLY       | V CC < 5.5V                            | MAX706_C                               |              | 135          | 350          | µA           |
| Supply Current                                     |              | V CC < 5.5V                            | MAX706_E/M                             |              | 135          | 500          | µA           |
| Supply Current                                     |              | V CC < 5.5V                            | MAX708_C                               |              | 65           | 350          | µA           |
| Supply Current                                     |              | V CC < 5.5V                            | MAX708_E/M                             |              | 65           | 500          | µA           |
| Reset Threshold (Note 3) (V CC Falling)            | V RST        | MAX70_P/R, MAX706AP/AR                 | MAX70_P/R, MAX706AP/AR                 | 2.55         | 2.63         | 2.70         | V            |
| Reset Threshold (Note 3) (V CC Falling)            | V RST        | MAX70_S, MAX706AS                      | MAX70_S, MAX706AS                      | 2.85         | 2.93         | 3.00         | V            |
| Reset Threshold (Note 3) (V CC Falling)            | V RST        | MAX70_T, MAX706AT                      | MAX70_T, MAX706AT                      | 3.00         | 3.08         | 3.15         | V            |
| Reset Threshold Hysteresis (Note 3)                | V HYS        |                                        |                                        |              | 20           |              | mV           |
| Reset Pulse Width (Note 3)                         | t RST        | MAX70_P/R, MAX706AP/AR V CC = 3.0V     | MAX70_P/R, MAX706AP/AR V CC = 3.0V     | 140          | 200          | 280          | ms           |
| Reset Pulse Width (Note 3)                         | t RST        | MAX70_S, MAX706AS, V CC = 3.3V         | MAX70_S, MAX706AS, V CC = 3.3V         | 140          | 200          | 280          | ms           |
| Reset Pulse Width (Note 3)                         | t RST        | V CC = 5V                              | V CC = 5V                              |              | 200          |              | ms           |
| RESET OUTPUT                                       | RESET OUTPUT | RESET OUTPUT                           | RESET OUTPUT                           | RESET OUTPUT | RESET OUTPUT | RESET OUTPUT | RESET OUTPUT |
| Output-Voltage High (MAX70_R/S/T) (MAX706AR/AS/AT) | V OH         | V RST(MAX) < V CC < 3.6V               | I SOURCE = 500µA                       | 0.8 x V CC   |              |              | V            |
| Output-Voltage High (MAX70_R/S/T) (MAX706AR/AS/AT) | V OL         | V RST(MAX) < V CC < 3.6V               | I SINK = 1.2mA                         |              |              | 0.3          | V            |
| Output-Voltage High (MAX70_R/S/T) (MAX706AR/AS/AT) | V OH         | 4.5V < V CC < 5.5V                     | I RSOURCE = 800µA                      | V CC - 1.5   |              |              | V            |
| Output-Voltage High (MAX70_R/S/T) (MAX706AR/AS/AT) | V OL         | 4.5V < V CC < 5.5V                     | I SINK = 3.2mA                         |              |              | 0.4          | V            |
| Output-Voltage High (MAX70_R/S/T) (MAX706AR/AS/AT) | V OL         | MAX70_C V CC = 1.0V, I SINK = 50µA     | MAX70_C V CC = 1.0V, I SINK = 50µA     |              |              | 0.3          | V            |
| Output-Voltage High (MAX70_R/S/T) (MAX706AR/AS/AT) | V OL         | MAX70_E/M: V CC = 1.2V, I SINK = 100µA | MAX70_E/M: V CC = 1.2V, I SINK = 100µA |              |              | 0.3          | V            |

2

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## +3V Voltage Monitoring, Low-Cost µP Supervisory Circuits

## ELECTRICAL CHARACTERISTICS (continued)

(MAX70\_P/R, MAX706AP/AR: VCC = 2.7V to 5.5V; MAX70\_S, MAX706AS: VCC = 3.0V to 5.5V; MAX70\_T, MAX706AT: VCC = 3.15V to 5.5V; TJ = TA = TMIN to TMAX, unless otherwise noted. Typical values are at TJ = TA = +25 ° C.) (Note 2)

| PARAMETER                                    | SYMBOL         | CONDITIONS                          | CONDITIONS                          | MIN            | TYP            | MAX            | UNITS          |
|----------------------------------------------|----------------|-------------------------------------|-------------------------------------|----------------|----------------|----------------|----------------|
| Output-Voltage High (MAX706P) (MAX706AP)     | V OH           | V RST(MAX) < V CC < 3.6V            | I SOURCE = 215µA                    | V CC - 0.6     |                |                | V              |
| Output-Voltage High (MAX706P) (MAX706AP)     | V OL           | V RST(MAX) < V CC < 3.6V            | I SINK = 1.2mA                      |                |                | 0.3            | V              |
| Output-Voltage High (MAX706P) (MAX706AP)     | V OH           | 4.5 < V CC < 5.5V                   | I SOURCE = 800µA                    | V CC - 1.5     |                |                | V              |
| Output-Voltage High (MAX706P) (MAX706AP)     | V OL           | 4.5V < V CC < 5.5V                  | I SINK = 3.2mA                      |                |                | 0.4            | V              |
| Output-Voltage High (MAX708_)                | V OH           | V RST(MAX) < V CC < 3.6V            | I SOURCE = 500µA                    | 0.8xV CC       |                |                | V              |
| Output-Voltage High (MAX708_)                | V OL           | V RST(MAX) < V CC < 3.6V            | I SINK = 500µA                      |                |                | 0.3            | V              |
| Output-Voltage High (MAX708_)                | V OH           | 4.5V < V CC < 5.5V                  | I SOURCE = 800µA                    | V CC - 1.5     |                |                | V              |
| Output-Voltage High (MAX708_)                | V OL           | 4.5V < V CC < 5.5V                  | I SINK = 1.2mA                      |                |                | 0.4            | V              |
| WATCHDOG INPUT                               | WATCHDOG INPUT | WATCHDOG INPUT                      | WATCHDOG INPUT                      | WATCHDOG INPUT | WATCHDOG INPUT | WATCHDOG INPUT | WATCHDOG INPUT |
| Watchdog Timeout Period                      | t WD           | MAX706P/R, MAX706AP/AR, V CC = 3.0V | MAX706P/R, MAX706AP/AR, V CC = 3.0V | 1.00           | 1.6            | 2.25           | s              |
| Watchdog Timeout Period                      |                | MAX706S/T, MAX706AS/AT, V CC = 3.3V | MAX706S/T, MAX706AS/AT, V CC = 3.3V | 1.00           | 1.6            | 2.25           | s              |
| WDI Pulse Width (MAX706_, MAX706A_)          | t WP           | V IL = 0.4V                         | V RST(MAX) < V CC < 3.6V            | 100            |                |                | ns             |
| WDI Pulse Width (MAX706_, MAX706A_)          |                | V IH = 0.8V x V CC                  | 4.5V < V CC < 5.5V                  | 50             |                |                | ns             |
| Watchdog Input Threshold (MAX706_, MAX706A_) | V IL           | V RST(MAX) < V CC < 3.6V            | V RST(MAX) < V CC < 3.6V            |                |                | 0.6            | V              |
| Watchdog Input Threshold (MAX706_, MAX706A_) | V IH           | V RST(MAX) < V CC < 3.6V            | V RST(MAX) < V CC < 3.6V            | 0.7 x V CC     |                |                | V              |
| Watchdog Input Threshold (MAX706_, MAX706A_) | V IL           | V CC = 5.0V                         | V CC = 5.0V                         |                |                | 0.8            | V              |
| Watchdog Input Threshold (MAX706_, MAX706A_) | V IH           | V CC = 5.0V                         | V CC = 5.0V                         | 3.5            |                |                | V              |
| WDI Input Current                            |                | WDI = 0V or V CC                    | MAX706_                             | -1.0           | +0.02          | +1.0           | µA             |
| WDI Input Current                            |                | WDI = 0V or V CC                    | MAX706A_                            | -5             |                | +5             | µA             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

## +3V Voltage Monitoring, Low-Cost µP Supervisory Circuits

## ELECTRICAL CHARACTERISTICS (continued)

(MAX70\_P/R, MAX706AP/AR: VCC = 2.7V to 5.5V; MAX70\_S, MAX706AS: VCC = 3.0V to 5.5V; MAX70\_T, MAX706AT: VCC = 3.15V to 5.5V; TJ = TA = TMIN to TMAX, unless otherwise noted. Typical values are at TJ = TA = +25 ° C.) (Note 2)

| PARAMETER                              | SYMBOL                   | CONDITIONS                                        | CONDITIONS                                        | MIN                      | TYP                      | MAX                      | UNITS                    |
|----------------------------------------|--------------------------|---------------------------------------------------|---------------------------------------------------|--------------------------|--------------------------|--------------------------|--------------------------|
| WATCHDOG OUTPUT                        |                          |                                                   |                                                   |                          |                          |                          |                          |
| WDO Output Voltage (MAX706_, MAX706A_) | V OH                     | V RST(MAX) < V CC < 3.6V                          | I SOURCE = 500µA                                  | 0.8 x V CC               |                          |                          | V                        |
| WDO Output Voltage (MAX706_, MAX706A_) | V OL                     | V RST(MAX) < V CC < 3.6V                          | I SINK = 500µA                                    |                          |                          | 0.3                      | V                        |
| WDO Output Voltage (MAX706_, MAX706A_) | V OH                     | 4.5V < V CC < 5.5V                                | I SOURCE = 800µA                                  | V CC - 1.5               |                          |                          | V                        |
| WDO Output Voltage (MAX706_, MAX706A_) | V OL                     | 4.5V < V CC < 5.5V                                | I SINK = 1.2mA                                    |                          |                          | 0.4                      | V                        |
| MANUAL RESET INPUT                     | MANUAL RESET INPUT       | MANUAL RESET INPUT                                | MANUAL RESET INPUT                                | MANUAL RESET INPUT       | MANUAL RESET INPUT       | MANUAL RESET INPUT       | MANUAL RESET INPUT       |
| MR Pullup Current                      |                          | MR = 0                                            | V RST(MAX) < V CC < 3.6V                          | 25                       | 70                       | 250                      | µA                       |
| MR Pullup Current                      |                          | MR = 0                                            | 4.5V < V CC < 5.5V                                | 100                      | 250                      | 600                      | µA                       |
| MR Pulse Width                         | t MR                     | V RST(MAX) < V CC < 3.6V                          | V RST(MAX) < V CC < 3.6V                          | 500 150                  |                          |                          | ns                       |
|                                        | V IL                     | 4.5V < V CC < 5.5V V RST(MAX) < V CC < 3.6V       | 4.5V < V CC < 5.5V V RST(MAX) < V CC < 3.6V       |                          |                          | 0.6                      |                          |
| MR Input Threshold                     | V IH                     | V RST(MAX) < V CC < 3.6V                          | V RST(MAX) < V CC < 3.6V                          | 0.7 x V CC               |                          |                          | V                        |
|                                        | V IL                     | 4.5V < V CC < 5.5V                                | 4.5V < V CC < 5.5V                                |                          |                          | 0.8                      | V                        |
|                                        | V IH                     | 4.5V < V CC < 5.5V                                | 4.5V < V CC < 5.5V                                | 2.0                      |                          |                          | V                        |
| MR to Reset Output Delay               | t MD                     | V RST(MAX) < V CC < 3.6V 4.5V < V CC < 5.5V       | V RST(MAX) < V CC < 3.6V 4.5V < V CC < 5.5V       |                          |                          | 750 250                  | ns                       |
| POWER-FAILURE COMPARATOR               | POWER-FAILURE COMPARATOR | POWER-FAILURE COMPARATOR                          | POWER-FAILURE COMPARATOR                          | POWER-FAILURE COMPARATOR | POWER-FAILURE COMPARATOR | POWER-FAILURE COMPARATOR | POWER-FAILURE COMPARATOR |
| PFI Input Threshold                    |                          | (MAX70_P/R, MAX706AP/AR) PFI falling V CC = 3.0V  | (MAX70_P/R, MAX706AP/AR) PFI falling V CC = 3.0V  | 1.2                      | 1.25                     | 1.3                      | V                        |
| PFI Input Threshold                    |                          | (MAX70_S/T, MAX706AS/AT) PFI falling, V CC = 3.3V | (MAX70_S/T, MAX706AS/AT) PFI falling, V CC = 3.3V | 1.2                      | 1.25                     | 1.3                      | V                        |
| PFI Input Current                      |                          |                                                   |                                                   | -25                      | +0.01                    | +25                      | nA                       |
| PFO Output Voltage                     | V OH                     | V RST(MAX) < V CC < 3.6V                          | I SOURCE = 500µA                                  | 0.8 x V CC               |                          |                          | V                        |
| PFO Output Voltage                     | V OL                     | V RST(MAX) < V CC < 3.6V                          | I SINK = 1.2mA                                    |                          |                          | 0.3                      | V                        |
| PFO Output Voltage                     | V OH                     | 4.5V < V CC < 5.5V                                | I SOURCE = 800µA                                  | V CC - 1.5               |                          |                          | V                        |
| PFO Output Voltage                     | V OL                     | 4.5V < V CC < 5.5V                                | I SINK = 3.2mA                                    |                          |                          | 0.4                      | V                        |

Note 2: All devices 100% production tested at TA = +85 ° C. Limits over temperature are guaranteed by design.

Note 3: Applies to both RESET in the MAX70\_R/S/T and MAX706AR/AS/AT, and RESET in the MAX706P/MAX706AP.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## +3V Voltage Monitoring, Low-Cost µP Supervisory Circuits

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## +3V Voltage Monitoring, Low-Cost µP Supervisory Circuits

## Pin Description

| MAX706P MAX706AP   | MAX706P MAX706AP   | MAX706R/S/T, MAX706AR/AS/AT   | MAX706R/S/T, MAX706AR/AS/AT   | MAX708R/S/T   | MAX708R/S/T   | NAME   | FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|--------------------|--------------------|-------------------------------|-------------------------------|---------------|---------------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SO/DIP             | µMAX               | SO/DIP                        | µMAX                          | SO/DIP        | µMAX          | NAME   | FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1                  | 3                  | 1                             | 3                             | 1             | 3             | MR     | Active-Low, Manual-Reset Input. Pull MR below 0.6V to trigger a reset pulse. MR isTTL/CMOS compatiblewhen V CC =5V and can beshorted to GNDwitha switch. MR is internallyconnected toa 70µA source current. Connect toV CC or leave unconnected.                                                                                                                                                                                                                                              |
| 2                  | 4                  | 2                             | 4                             | 2             | 4             | V CC   | SupplyVoltage Input                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 3                  | 5                  | 3                             | 5                             | 3             | 5             | GND    | Ground                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 4                  | 6                  | 4                             | 6                             | 4             | 6             | PFI    | Adjustable Power-Fail Comparator Input. Connect PFI to a resistive divider to set the desired PFI threshold. When PFI is less than 1.25V, PFO goes low and sinks current; otherwise, PFO remains high. Connect PFI to GND if not used.                                                                                                                                                                                                                                                        |
| 5                  | 7                  | 5                             | 7                             | 5             | 7             | PFO    | Active-Low, Power-Fail Comparator Output. PFO asserts when PFI is below the internal 1.25V threshold. PFO deasserts when PFI is above the internal 1.25V threshold. Leave PFO unconnected if not used.                                                                                                                                                                                                                                                                                        |
| 6                  | 8                  | 6                             | 8                             | -             | -             | WDI    | Watchdog Input. A falling or rising transition must occur at WDI within 1.6s to prevent WDO from asserting (see Figure 4). The internal watchdog timer is reset to zero when reset is asserted or when transition occurs at WDI. The watchdog function for the MAX706P/R/S/T can not be disabled. The watchdog timer for the MAX706AP/AR/AS/AT disables when WDI input is left open or connected to a tri-state output in its high-impedance state with a leakage current of less than 600nA. |
| 7                  | 1                  | -                             | -                             | 8             | 2             | RESET  | Active-High Reset Output. RESET remains high when V CC is below the reset threshold or MR is held low. It remains low for 200ms after the reset conditions end (Figure 3).                                                                                                                                                                                                                                                                                                                    |
| 8                  | 2                  | 8                             | 2                             | -             | -             | WDO    | Active-Low Watchdog Output. WDO goes low when a transition does not occur at WDI within 1.6s and remains low until a transition occurs at WDI (indicating the watchdog interrupt has been serviced). WDO also goes low when V CC falls below the reset threshold; however, unlike the reset output signal, WDO goes high as soon as V CC rises above the reset threshold.                                                                                                                     |
| -                  | -                  | 7                             | 1                             | 7             | 1             | RESET  | Active-Low Reset Output. RESET remains low when V CC is below the reset threshold or MR is held low. It remains low for 200ms after the reset conditions end (Figure 3).                                                                                                                                                                                                                                                                                                                      |
| -                  | -                  | -                             | -                             | 6             | 8             | N.C.   | No Connection. Not internally connected.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## +3V Voltage Monitoring, Low-Cost µP Supervisory Circuits

Figure 1. MAX706\_ Functional Diagram

<!-- image -->

## RESET and RESET Outputs

A microprocessor's (µP's) reset input starts in a known state. When the µP is in an unknown state, it should be held in reset. The MAX706P/R/S/T and the MAX706AP/ AR/AS/AT assert reset when VCC is low, preventing code execution errors during power-up, power-down, or brownout conditions.

On power-up once VCC reaches 1V, RESET is guaranteed to be logic-low and RESET is guaranteed to be logic-high. As VCC rises, RESET and RESET remain asserted. Once VCC exceeds the reset threshold, the i nternal  timer  causes RESET and  RESET  to  be deasserted after a time equal to the reset pulse width, which is typically 200ms (Figure 3).

If  a  power-fail  or  brownout  condition  occurs  (i.e.,  VCC drops below the reset threshold), RESET and RESET are asserted. As long as VCC remains below the reset threshold, the internal timer is continually reset, causing the RESET and RESET outputs to remain asserted. Thus, a brownout condition that interrupts a previously initiated reset pulse causes an additional 200ms delay from the time the latest interruption occurred. On power-down once VCC drops below the reset threshold, RESET and RESET are guaranteed to be asserted for VCC ≥ 1V.

<!-- image -->

Figure 2. MAX708\_ Functional Diagram

<!-- image -->

The MAX706P/MAX706AP provide a RESET signal, and the MAX706R/S/T and MAX706AR/AS/AT provide a RESET signal.  The  MAX708R/S/T provide both RESET and RESET .

## Watchdog Timer

The MAX706P/R/S/T and the MAX706AP/AR/AS/AT watchdog circuit monitor the µP's activity. If the µP does not toggle the watchdog input (WDI) within 1.6s, the watchdog output ( WDO ) goes low (Figure 4). If the reset signal is asserted, the watchdog timer will be reset to zero and disabled. As soon as reset is released, the timer starts counting. WDI can detect pulses as narrow as 100ns with a 2.7V supply and 50ns with a 4.5V supply. The watchdog timer for the MAX706P/R/S/T cannot be disabled. The watchdog timer for the MAX706AP/AR/AS/AT  operates  similarly  to  the MAX706P/R/S/T. However, the watchdog timer for the MAX706AP/AR/AS/AT disables when the WDI input is left  open or connected to a tri-state output in its highimpedance state and with a leakage current of less than 600nA. The watchdog timer can be disabled anytime, provided WDO is not asserted.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## +3V Voltage Monitoring, Low-Cost µP Supervisory Circuits

Figure 3. RESET, RESET , MR , and WDO Timing

<!-- image -->

Figure 4. MAX706AP/AR/AS/AT Watchdog Timing

<!-- image -->

WDO can be connected to the nonmaskable interrupt (NMI) input of a µP. When VCC drops below the reset threshold, WDO immediately goes low, even if the watchdog timer has not timed out (Figure 3). Normally, this  would  trigger  an  NMI,  but  since  reset  is  asserted simultaneously, the NMI is overridden. The WDO should not be connected to RESET directly.  Instead, connect WDO to MR to generate a reset pulse when it times out.

## Manual Reset

The manual reset ( MR ) input allows RESET and RESET to  be  activated  by  a  pushbutton  switch.  The  switch  is effectively  debounced by the 140ms minimum reset pulse width. MR can be driven by an external logic line since it  is  TTL/CMOS compatible. The minimum MR

Figure 5. Monitoring Both +3V/+3.3V and +12V

<!-- image -->

Figure 6. RESET Valid to GND Circuit

<!-- image -->

input pulse width is 500ns when VCC = +3V and 150ns when VCC = +5V. Leave MR unconnected or connect to VCC when not used.

## Power-Fail Comparator

The power-fail comparator can be used for various purposes because its output and noninverting input are not internally connected. The inverting input is internally connected to a 1.25V reference. The power-fail comparator has 10mV of hysteresis, which prevents repeated triggering of the power-fail output ( PFO ).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## +3V Voltage Monitoring, Low-Cost µP Supervisory Circuits

To build an early-warning power-failure circuit, use the power-fail comparator input (PFI) to monitor the unregulated DC supply voltage (see the Typical Operating Circuits). Connect the PFI to a resistive-divider network such that the voltage at PFI falls below 1.25V just before the regulator drops out. Use PFO to interrupt the µP so it can prepare for an orderly power-down.

Regulated and unregulated voltages can be monitored by simply adjusting the PFI resistive-divider network values to the appropriate ratio. In addition, the reset signal can be asserted at voltages other that VCC reset threshold, as shown in Figure 5. Connect PFO to MR to initiate a reset pulse when the 12V supply drops below a user-specified threshold (11V in this example) or when VCC falls below the reset threshold.

## Operation with +3V and +5V Supplies

The MAX706P/R/S/T, the MAX706AP/AR/AS/AT, and the MAX708R/S/T provide voltage monitoring at the reset threshold (2.63V to 3.08V) when powered from either +3V or +5V. These devices are ideal in portable-instrument applications where power can be supplied from either a +3V battery or an AC-DC wall adapter that generates +5V (a +5V supply allows a µP or a microcontroller  to  run  faster  than  a  +3V  supply).  With  a  +3V supply, these ICs consume less power, but output drive capability is reduced, the MR to RESET delay time increases, and the MR minimum pulse width increases. The Electrical Characteristics table provides specifications for operation with both +3V and +5V supplies.

## Ensuring a Valid RESET Output Down to VCC = 0V

When  VCC falls  below  1V,  the  MAX706R/S/T, MAX706AR/AS/AT, and MAX708R/S/T RESET output no longer sinks current; it becomes an open circuit. Highimpedance, CMOS logic inputs can drift to undetermined voltages if left as open circuit. If a pulldown resistor is added to the RESET pin , as shown in Figure 6,  any  stray  charge or leakage current will flow to ground, holding RESET low. Resistor value R is not critical, but it should not load RESET and should be small enough to pull RESET and the input it is driving to ground. 100k Ω is suggested for R1.

## Applications Information

## Adding Hysteresis to the Power-Fail Comparator

Hysteresis adds a noise margin to the power-fail comparator and prevents repeated triggering of the PFO when VIN is near the power-fail comparator trip point. Figure 7 shows how to add hysteresis to the power-fail comparator. Select the ratio of R1 and R2 such that PFI

<!-- image -->

Figure 7. Adding Hysteresis to the Power-Fail Comparator

<!-- image -->

Figure 8. Monitoring a Negative Voltage

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## +3V Voltage Monitoring, Low-Cost µP Supervisory Circuits

sees 1.25V when VIN falls to the desired trip point (VTRIP).  Resistor  R3  adds hysteresis. R3 will typically be an order of magnitude greater than R1 and R2. The current through R1 and R2 should be at least 1µA to ensure that the 25nA (max) PFI input current does not shift the trip point significantly. R3 should be larger than 10k Ω to  prevent it  from  loading down the PFO pin. Capacitor C1 adds noise rejection.

| PART †       | TEMP RANGE      | PIN- PACKAGE   | PKG CODE   |
|--------------|-----------------|----------------|------------|
| MAX706PEUA   | -40°C to +85°C  | 8 µMAX         | U8-1       |
| MAX706PMJA   | -55°C to +125°C | 8 CERDIP*      | J8-2       |
| MAX706R CPA  | 0°C to +70°C    | 8 Plastic Dip  | P8-1       |
| MAX706RCSA   | 0°C to +70°C    | 8 SO           | S8-2       |
| MAX706RCUA   | 0°C to +70°C    | 8 µMAX         | U8-1       |
| MAX706REPA   | -40°C to +85°C  | 8 Plastic Dip  | P8-1       |
| MAX706RESA   | -40°C to +85°C  | 8 SO           | S8-2       |
| MAX706REUA   | -40°C to +85°C  | 8 µMAX         | U8-1       |
| MAX706RMJA   | -55°C to +125°C | 8 CERDIP*      | J8-2       |
| MAX706S CPA  | 0°C to +70°C    | 8 Plastic Dip  | P8-1       |
| MAX706SCSA   | 0°C to +70°C    | 8 SO           | S8-2       |
| MAX706SCUA   | 0°C to +70°C    | 8 µMAX         | U8-1       |
| MAX706SEPA   | -40°C to +85°C  | 8 Plastic Dip  | P8-1       |
| MAX706SESA   | -40°C to +85°C  | 8 SO           | S8-2       |
| MAX706SEUA   | -40°C to +85°C  | 8 µMAX         | U8-1       |
| MAX706SMJA   | -55°C to +125°C | 8 CERDIP*      | J8-2       |
| MAX706T CPA  | 0°C to +70°C    | 8 Plastic Dip  | P8-1       |
| MAX706TCSA   | 0°C to +70°C    | 8 SO           | S8-2       |
| MAX706TCUA   | 0°C to +70°C    | 8 µMAX         | U8-1       |
| MAX706TEPA   | -40°C to +85°C  | 8 Plastic Dip  | P8-1       |
| MAX706TESA   | -40°C to +85°C  | 8 SO           | S8-2       |
| MAX706TEUA   | -40°C to +85°C  | 8 µMAX         | U8-1       |
| MAX706TMJA   | -55°C to +125°C | 8 CERDIP*      | J8-2       |
| MAX706AP EPA | -40°C to +85°C  | 8 Plastic Dip  | P8-1       |
| MAX706APESA  | -40°C to +85°C  | 8 SO           | S8-2       |
| MAX706APEUA  | -40°C to +85°C  | 8 µMAX         | U8-1       |
| MAX706AR EPA | -40°C to +85°C  | 8 Plastic Dip  | P8-1       |
| MAX706ARESA  | -40°C to +85°C  | 8 SO           | S8-2       |
| MAX706AREUA  | -40°C to +85°C  | 8µMAX          | U8-1       |
| MAX706AS EPA | -40°C to +85°C  | 8 Plastic Dip  | P8-1       |

PROCESS: CMOS

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Monitoring a Negative Voltage

The power-fail comparator can be used to monitor a negative supply voltage using the circuit of Figure 8. When the negative supply is valid, PFO is  low.  When the negative supply voltage drops, PFO goes high. This circuit's accuracy is affected by the PFI threshold tolerance, the VCC voltage, and resistors R1 and R2.

## Bypassing VCC

For noisy systems, bypass VCC with a 0.1µF capacitor to GND.

## Ordering Information (continued)

| PART †       | TEMP RANGE      | PIN- PACKAGE   | PKG CODE   |
|--------------|-----------------|----------------|------------|
| MAX706ASESA  | -40°C to +85°C  | 8 SO           | S8-2       |
| MAX706ASEUA  | -40°C to +85°C  | 8 µMAX         | U8-1       |
| MAX706AT EPA | -40°C to +85°C  | 8 Plastic Dip  | P8-1       |
| MAX706ATESA  | -40°C to +85°C  | 8 SO           | S8-2       |
| MAX706ATEUA  | -40°C to +85°C  | 8 µMAX         | U8-1       |
| MAX708R CPA  | 0°C to +70°C    | 8 Plastic Dip  | P8-1       |
| MAX708RCSA   | 0°C to +70°C    | 8 SO           | S8-2       |
| MAX708RCUA   | 0°C to +70°C    | 8 µMAX         | U8-1       |
| MAX708REPA   | -40°C to +85°C  | 8 Plastic Dip  | P8-1       |
| MAX708RESA   | -40°C to +85°C  | 8 SO           | S8-2       |
| MAX708REUA   | -40°C to +85°C  | 8 µMAX         | U8-1       |
| MAX708RMJA   | -55°C to +125°C | 8 CERDIP*      | J8-2       |
| MAX708S CPA  | 0°C to +70°C    | 8 Plastic Dip  | P8-1       |
| MAX708SCSA   | 0°C to +70°C    | 8 SO           | S8-2       |
| MAX708SCUA   | 0°C to +70°C    | 8 µMAX         | U8-1       |
| MAX708SEPA   | -40°C to +85°C  | 8 Plastic Dip  | P8-1       |
| MAX708SESA   | -40°C to +85°C  | 8 SO           | S8-2       |
| MAX708SEUA   | -40°C to +85°C  | 8 µMAX         | U8-1       |
| MAX708SMJA   | -55°C to +125°C | 8 CERDIP*      | J8-2       |
| MAX708T CPA  | 0°C to +70°C    | 8 Plastic Dip  | P8-1       |
| MAX708TCSA   | 0°C to +70°C    | 8 SO           | S8-2       |
| MAX708TCUA   | 0°C to +70°C    | 8 µMAX         | U8-1       |
| MAX708TEPA   | -40°C to +85°C  | 8 Plastic Dip  | P8-1       |
| MAX708TESA   | -40°C to +85°C  | 8 SO           | S8-2       |
| MAX708TEUA   | -40°C to +85°C  | 8 µMAX         | U8-1       |
| MAX708TMJA   | -55°C to +125°C | 8 CERDIP*      | J8-2       |

Chip Information

<!-- image -->

## +3V Voltage Monitoring, Low-Cost µP Supervisory Circuits

## Pin Configurations

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## +3V Voltage Monitoring, Low-Cost µP Supervisory Circuits

## Package Information

(The package drawing(s) in this data sheet may not reflect the most current specifications. For the latest package outline information go to www.maxim-ic.com/packages .)

<!-- image -->

## +3V Voltage Monitoring, Low-Cost µP Supervisory Circuits

## Package Information (continued)

(The package drawing(s) in this data sheet may not reflect the most current specifications. For the latest package outline information go to www.maxim-ic.com/packages .)

| α   |
|-----|

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## +3V Voltage Monitoring, Low-Cost µP Supervisory Circuits

## Package Information (continued)

(The package drawing(s) in this data sheet may not reflect the most current specifications. For the latest package outline information go to www.maxim-ic.com/packages .)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## +3V Voltage Monitoring, Low-Cost µP Supervisory Circuits

## Package Information (continued)

(The package drawing(s) in this data sheet may not reflect the most current specifications. For the latest package outline information go to www.maxim-ic.com/packages .)

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

15