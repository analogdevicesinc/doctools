<!-- lastmod 2022-08-04 -->
<!-- image -->

## 5-Pin Microprocessor Supervisory Circuits With Watchdog Timer and Manual Reset

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX823/MAX824/MAX825* microprocessor (µP) supervisory circuits combine reset output, watchdog, and manual reset input functions in 5-pin SOT23 and SC70 packages. They significantly improve system reliability and accuracy compared to separate ICs or discrete components. The MAX823/MAX824/MAX825 are specifically designed to ignore fast transients on VCC.

Seven preprogrammed reset threshold voltages are available (see Reset Threshold Table ). All three devices have an active-low reset output, which is guaranteed to be in the correct state for VCC down to 1V. The MAX823 also offers a watchdog input and manual reset input. The MAX824 offers a watchdog input and a complementary active-high reset. The MAX825 offers a manual reset input and a complementary active-high reset. The Selector Guide explains the functions offered in this series of parts.

*Pg

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Applications

Computers and Controllers Embedded Controllers Intelligent Instruments Automotive Systems Critical µP Monitoring Portable/Battery-Powered Equipment

## Reset Threshold Table

| SUFFIX        |   RESET THRESHOLD (V) |
|---------------|-----------------------|
| L             |                  4.63 |
| M             |                  4.38 |
| T             |                  3.08 |
| S             |                  2.93 |
| R             |                  2.63 |
| Z (SC70 only) |                  2.32 |
| Y (SC70 only) |                  2.19 |

## Features

- ♦ Precision Monitoring of +2.5V, +3V, +3.3V, and +5V Power Supplies
- ♦ Operating Current: 6µA (MAX823L/M) (SC70) 2µA (MAX825T/S/R/Z/Y) (SC70)
- ♦ Fully Specified Over Temperature
- ♦ 140ms min Power-On Reset
- ♦ Guaranteed RESET Valid to VCC = 1V
- ♦ Power-Supply Transient Immunity
- ♦ Watchdog Timer with 1.6s Timeout (MAX823/MAX824)
- ♦ Manual Reset Input (MAX823/MAX825)
- ♦ No External Components

## Ordering Information

| PART †        | TEMP. RANGE     | PIN-PACKAGE   |
|---------------|-----------------|---------------|
| MAX823 _EXK-T | -40°C to +85°C  | 5 SC70-5      |
| MAX823_EUK-T  | -40°C to +125°C | 5 SOT23-5     |
| MAX824 _EXK-T | -40°C to +85°C  | 5 SC70-5      |

† Insert the desired suffix letter (from the Reset Threshold table) into the blank to complete the part number. All devices are available in tape-and-reel only. There is a 2500 piece minimum order increment. Devices are available in both leaded and lead-free packaging. Specify lead-free by replacing '-T' with '+T' when ordering.

Ordering Information continued at end of data sheet.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Selector Guide

| FUNCTION           | MAX823   | MAX824   | MAX825   |
|--------------------|----------|----------|----------|
| Active-Low Reset   | ✔        | ✔        | ✔        |
| Active-High Reset  | -        | ✔        | ✔        |
| Watchdog Input     | ✔        | ✔        | -        |
| Manual Reset Input | ✔        | -        | ✔        |

Typical Operating Circuit appears at end of data sheet. Marking Information appears at end of data sheet.

## Pin Configurations

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## 5-Pin Microprocessor Supervisory Circuits With Watchdog Timer and Manual Reset

## ABSOLUTE MAXIMUM RATINGS

| V CC ........................................................................-0.3V to +6.0V   | 5-Pin SOT23 (derate 7.1mW/ ° C above +70 ° C).............571mW                   |
|-----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| All Other Pins..............................................-0.3V to (V CC + 0.3V)            | Operating Temperature Range                                                       |
| Input Current, All Pins Except RESET and RESET ..............20mA                             | MAX82_EXK......................................................-40 ° C to +85 ° C |
| Output Current, RESET, RESET ..........................................20mA                   | MAX82_EUK ...................................................-40 ° C to +125 ° C  |
| Continuous Power Dissipation (T A = +70 ° C)                                                  | Storage Temperature Range.............................-65 ° C to +150 ° C         |
| 5-Pin SC70 (derate 3.1mW/ ° C above +70 ° C)...............247mW                              | Lead Temperature (soldering, 10s) .................................+300 ° C       |

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS

(VCC = +4.75V to +5.5V for MAX82\_L, VCC = +4.5V to +5.5V for MAX82\_M, VCC = +3.15V to +3.6V for MAX82\_T, VCC = +3V to  +3.6V for MAX82\_S, VCC = +2.7V to +3.6V for MAX82\_R, VCC = +2.38V to +2.75V for MAX82\_Z, VCC = +2.25V to +2.75V for MAX82\_Y, TA = TMIN to TMAX, TA = -40 ° C to +85 ° C (SC70), TA = -40 ° C to +125 ° C (SOT23), unless otherwise noted. Typical values are at TA = +25 ° C.) (Note 1)

| PARAMETER               | SYMBOL   | CONDITIONS             | CONDITIONS                      |   MIN |   TYP |   MAX | UNITS   |
|-------------------------|----------|------------------------|---------------------------------|-------|-------|-------|---------|
| Operating Voltage Range | V CC     | T A = 0°C to +70°C     | T A = 0°C to +70°C              |   1.0 |       |   5.5 | V       |
|                         |          | T A = T MIN to T MAX   | T A = T MIN to T MAX            |   1.2 |       |       | V       |
| Current (SOT23 Only)    | I SUPPLY | WDI and MR unconnected | MAX823L/M MAX824L/M             |       |    10 |    24 | µA      |
| Current (SOT23 Only)    |          | WDI and MR unconnected | MAX823T/S/R/Z/Y MAX824T/S/R/Z/Y |       |     5 |    12 | µA      |
| Current (SOT23 Only)    |          | MR unconnected         | MAX825L/M                       |       |   4.5 |    12 | µA      |
| Current (SOT23 Only)    |          | MR unconnected         | MAX825T/S/R/Z/Y                 |       |     3 |     8 | µA      |
| Supply Current Only)    | I SUPPLY | WDI and MR unconnected | MAX823L/M MAX824L/M             |       |     6 |    17 | µA      |
| (SC70                   |          | WDI and MR unconnected | MAX823T/S/R/Z/Y MAX824T/S/R/Z/Y |       |     4 |    12 | µA      |
| Supply Current Only)    |          | MR unconnected         | MAX825L/M                       |       |     3 |     8 |         |
| Supply Current Only)    |          | MR unconnected         | MAX825T/S/R/Z/Y                 |       |     2 |     6 |         |
| Reset Threshold         |          | MAX82_L                | T A = +25°C                     |  4.56 |  4.63 |  4.70 | V       |
| Reset Threshold         |          |                        | T A = T MIN to T MAX            |  4.50 |       |  4.75 | V       |
| Reset Threshold         |          | MAX82_M                | T A = +25°C                     |  4.31 |  4.38 |  4.45 |         |
| Reset Threshold         |          | MAX82_M                | T A = T MIN to T MAX            |  4.25 |       |  4.50 |         |
| Reset Threshold         |          | MAX82_T                | T A = +25°C                     |  3.04 |  3.08 |  3.11 |         |
| Reset Threshold         |          | MAX82_T                | T A = T MIN to T MAX            |  3.00 |       |  3.15 |         |
| Reset Threshold         | V RST    | MAX82_S                | T A = +25°C                     |  2.89 |  2.93 |  2.96 |         |
| Reset Threshold         | V RST    | MAX82_S                | T A = T MIN to T MAX            |  2.85 |       |  3.00 |         |
| Reset Threshold         |          | MAX82_R                | T A = +25°C                     |  2.59 |  2.63 |  2.66 |         |
| Reset Threshold         |          | MAX82_R                | T A = T MIN to T MAX            |  2.55 |       |  2.70 |         |
| Reset Threshold         |          | MAX82_Z (SC70 only)    | T A = +25°C                     |  2.28 |  2.32 |  2.35 |         |
| Reset Threshold         |          | MAX82_Z (SC70 only)    | T A = T MIN to T MAX            |  2.25 |       |  2.38 |         |
| Reset Threshold         |          | MAX82_Y                | T A = +25°C                     |  2.16 |  2.19 |  2.22 |         |
| Reset Threshold         |          | (SC70 only)            | T A = T MIN to T MAX            |  2.13 |       |  2.25 |         |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 5-Pin Microprocessor Supervisory Circuits With Watchdog Timer and Manual Reset

## ELECTRICAL CHARACTERISTICS (continued)

(VCC = +4.75V to +5.5V for MAX82\_L, VCC = +4.5V to +5.5V for MAX82\_M, VCC = +3.15V to +3.6V for MAX82\_T, VCC = +3V to  +3.6V for MAX82\_S, VCC = +2.7V to +3.6V for MAX82\_R, VCC = +2.38V to +2.75V for MAX82\_Z, VCC = +2.25V to +2.75V for MAX82\_Y, TA = TMIN to TMAX, TA = -40 ° C to +85 ° C (SC70), TA = -40 ° C to +125 ° C (SOT23), unless otherwise noted. Typical values are at TA = +25 ° C.) (Note 1)

| PARAMETER                                   | SYMBOL                         | CONDITIONS                                                                      | MIN                            | TYP                            | MAX                            | UNITS                          |
|---------------------------------------------|--------------------------------|---------------------------------------------------------------------------------|--------------------------------|--------------------------------|--------------------------------|--------------------------------|
| Reset Threshold Hysteresis                  |                                | MAX82_L/M                                                                       |                                | 10                             |                                | mV                             |
| Reset Threshold Hysteresis                  |                                | MAX82_T/S/R/Z/Y                                                                 |                                | 5                              |                                | mV                             |
| Reset Threshold Temperature Coefficient     |                                |                                                                                 |                                | 40                             |                                | ppm/ ° C                       |
| Reset Timeout Period                        | t RP                           |                                                                                 | 140                            | 200                            | 280                            | ms                             |
| V CC to RESET Delay                         |                                | V RST - V CC = 100mV                                                            |                                | 20                             |                                | µ s                            |
|                                             | V OH                           | MAX82_L/M, V CC = V RST max, I SOURCE = 120 µ A                                 | V CC - 1.5                     | V CC - 1.5                     |                                | V                              |
|                                             | V OH                           | MAX82_T/S/R/Z/Y, V CC = V RST max, I SOURCE = 30 µ A                            | 0.8 ✕ V CC                     | 0.8 ✕ V CC                     |                                | V                              |
|                                             | V OL                           | MAX82_L/M, V CC = V RST min, I SINK = 3.2mA                                     |                                |                                | 0.4                            | V                              |
| RESET Output Voltage                        | V OL                           | MAX82_T/S/R/Z/Y V CC = V RST min, I SINK = 1.2mA                                |                                |                                | 0.3                            | V                              |
|                                             | V OL                           | T A = 0 ° C to +70 ° C, V CC = 1V, V CC falling, I SINK = 50 µ A                |                                |                                | 0.3                            | V                              |
|                                             |                                | T A = T MIN to T MAX , V CC = 1.2V, V CC falling, V BATT = 0V, I SINK = 100 µ A |                                |                                |                                | V                              |
| RESET Output Short-Circuit Current (Note 2) | I SOURCE                       | MAX82_L/M, RESET = 0V, V CC = 5.5V                                              |                                |                                | 800                            | µ A                            |
| RESET Output Short-Circuit Current (Note 2) | I SOURCE                       | MAX82_T/S/R/Z/Y, RESET = 0V, V CC = 3.6V                                        |                                |                                | 400                            | µ A                            |
| RESET Output Voltage                        | V OH                           | V CC > 1.8V, I SOURCE = 150 µ A                                                 | 0.8 ✕ V CC                     |                                |                                | V                              |
| RESET Output Voltage                        | V OL                           | MAX824L/M, MAX825L/M, V CC = V RST max, I SINK = 3.2mA                          |                                | 0.4                            |                                | V                              |
| RESET Output Voltage                        | V OL                           | MAX824T/S/R/Z/Y, MAX825T/S/R/Z/Y, V CC = V RST max, I SINK = 1.2mA              |                                | 0.3                            |                                | V                              |
| WATCHDOG INPUT (MAX823/MAX824)              | WATCHDOG INPUT (MAX823/MAX824) | WATCHDOG INPUT (MAX823/MAX824)                                                  | WATCHDOG INPUT (MAX823/MAX824) | WATCHDOG INPUT (MAX823/MAX824) | WATCHDOG INPUT (MAX823/MAX824) | WATCHDOG INPUT (MAX823/MAX824) |
| Watchdog Timeout Period                     | t WD                           |                                                                                 | 1.12                           | 1.60                           | 2.40                           | s                              |
| WDI Pulse Width                             | t WDI                          | V IL = 0.4V, V IH = 0.8 ✕ V CC                                                  | 50                             |                                |                                | ns                             |
| WDI Input Voltage (Note 3)                  | V IL                           |                                                                                 | 0.3 ✕ V CC                     | 0.3 ✕ V CC                     | 0.3 ✕ V CC                     | V                              |
| WDI Input Voltage (Note 3)                  | V IH                           |                                                                                 | 0.7 ✕ V CC                     | 0.7 ✕ V CC                     |                                | V                              |
| WDI Input Current (Note 4)                  |                                | WDI = V CC , time average                                                       | 120                            |                                | 160                            | µ A                            |
| WDI Input Current (Note 4)                  |                                | WDI = 0, time average                                                           | -20                            | -15                            |                                | µ A                            |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 5-Pin Microprocessor Supervisory Circuits With Watchdog Timer and Manual Reset

## ELECTRICAL CHARACTERISTICS (continued)

(VCC = +4.75V to +5.5V for MAX82\_L, VCC = +4.5V to +5.5V for MAX82\_M, VCC = +3.15V to +3.6V for MAX82\_T, VCC = +3V to  +3.6V for MAX82\_S, VCC = +2.7V to +3.6V for MAX82\_R, VCC = +2.38V to +2.75V for MAX82\_Z, VCC = +2.25V to +2.75V for MAX82\_Y, TA = TMIN to TMAX, TA = -40 ° C to +85 ° C (SC70), TA = -40 ° C to +125 ° C (SOT23), unless otherwise noted. Typical values are at TA = +25 ° C.) (Note 1)

| PARAMETER                                     | SYMBOL                             | MIN                                | TYP                                | MAX                                | UNITS                              |                                    |
|-----------------------------------------------|------------------------------------|------------------------------------|------------------------------------|------------------------------------|------------------------------------|------------------------------------|
| MANUAL RESET INPUT (MAX823/MAX825)            | MANUAL RESET INPUT (MAX823/MAX825) | MANUAL RESET INPUT (MAX823/MAX825) | MANUAL RESET INPUT (MAX823/MAX825) | MANUAL RESET INPUT (MAX823/MAX825) | MANUAL RESET INPUT (MAX823/MAX825) | MANUAL RESET INPUT (MAX823/MAX825) |
| MR Input Voltage                              | V IL                               | 0.3 ✕ V CC                         | 0.3 ✕ V CC                         | 0.3 ✕ V CC                         | V                                  |                                    |
| MR Input Voltage                              | V IH                               | 0.7 ✕ V CC                         | 0.7 ✕ V CC                         | 0.7 ✕ V CC                         | V                                  |                                    |
| MR Pulse Width                                |                                    | 1.0                                |                                    |                                    | µ s                                |                                    |
| MR Noise Immunity (pulse width with no reset) |                                    | 100                                | 100                                | 100                                | ns                                 |                                    |
| MR to Reset Delay                             |                                    | 500                                | 500                                | 500                                | ns                                 |                                    |
| MR Pullup Resistance (internal)               |                                    | 35                                 | 52                                 | 75                                 | k Ω                                |                                    |

Note 2: The RESET short-circuit current is the maximum pullup current when RESET is driven low by a µP bidirectional reset pin.

Note 3: WDI is internally serviced within the watchdog period if WDI is left unconnected.

Note 4: The WDI input current is specified as the average input current when the WDI input is driven high or low. The WDI input is designed to drive a three-stated output device with a 10µA maximum leakage current and a maximum capacitive load of 200pF. This output device must be able to source and sink at least 200µA when active.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 5-Pin Microprocessor Supervisory Circuits With Watchdog Timer and Manual Reset

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics

MAX823\_, VCC = +5V, TA = +25°C, unless otherwise noted.)

MAX823/4/5 toc01

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

s)

µ

PROPAGATION DELAY (

MAXIMUM VCC TRANSIENT DURATION

vs. RESET THRESHOLD OVERDRIVE

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 5-Pin Microprocessor Supervisory Circuits With Watchdog Timer and Manual Reset

## Pin Description

| PIN    | PIN    | PIN    | NAME   | FUNCTION                                                                                                                                                                                                                                                                                                                                                                                      |
|--------|--------|--------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| MAX823 | MAX824 | MAX825 | NAME   | FUNCTION                                                                                                                                                                                                                                                                                                                                                                                      |
| 1      | 1      | 1      | RESET  | Active-Low Reset Output. Pulses low for 200ms when triggered, and remains low whenever V CC is below the reset threshold or when MR is a logic low. It remains low for 200ms after one of the following occurs: V CC rises above the reset threshold, the watchdog triggers a reset, or MR goes low to high.                                                                                  |
| 2      | 2      | 2      | GND    | Ground                                                                                                                                                                                                                                                                                                                                                                                        |
| 3      | -      | 4      | MR     | Manual Reset Input. A logic low on MR asserts reset. Reset remains asserted as long as MR is held low and for 200ms after MR returns high. The active-low input has an internal 52k Ω pullup resistor. It can be driven from a CMOS logic line or shorted to ground with a switch. Leave open or connect to V CC if unused.                                                                   |
| -      | 3      | 3      | RESET  | Active-High Reset Output. Inverse of RESET .                                                                                                                                                                                                                                                                                                                                                  |
| 4      | 4      | -      | WDI    | Watchdog Input. If WDI remains either high or low for longer than the watch- dog timeout period, the internal watchdog timer runs out and a reset is trig- gered. The internal watchdog timer clears whenever reset is asserted, or whenever WDI sees a rising or falling edge. If WDI is left unconnected or is connected to a three-stated buffer output, the watchdog feature is disabled. |
| 5      | 5      | 5      | V CC   | Supply Voltage                                                                                                                                                                                                                                                                                                                                                                                |

Figure 1. Functional Diagram

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 5-Pin Microprocessor Supervisory Circuits With Watchdog Timer and Manual Reset

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## RESET Output

A microprocessor's (µP's) reset input starts the µP in a known state. The MAX823/MAX824/MAX825 µP supervisory circuits assert a reset to prevent code-execution errors during power-up, power-down, and brownout conditions. RESET is  guaranteed to be a logic low for VCC down to 1V. Once VCC exceeds the reset threshold, an internal timer keeps RESET low for the specified reset timeout period (tRP); after this interval, RESET returns high (Figure 2).

If  a  brownout  condition occurs (VCC dips below the reset threshold), RESET goes low. Each time RESET is asserted it stays low for the reset timeout period. Any time VCC goes below the reset threshold the internal timer  restarts. RESET both sources and sinks current. RESET on the MAX824/MAX825 is the inverse of RESET .

## Manual Reset Input (MAX823/MAX825)

Many µP-based products require manual reset capability,  allowing  the  operator,  a  test  technician,  or  external logic circuitry to initiate a reset. On the MAX823/ MAX825, a logic low on MR asserts reset. Reset remains asserted while MR is  low,  and for tRP (200ms nominal) after  it  returns  high. MR has an internal 52k Ω pullup resistor, so it can be left open if not used. This input can be driven with CMOS logic levels or with open-drain/ collector outputs. Connect a normally open momentary switch from MR to GND to create a manual-reset function; external debounce circuitry is not required. If MR is driven from long cables or the device is used in a noisy environment, connect a 0.1µF capacitor from MR to GND to provide additional noise immunity.

Figure 2. Reset Timing Diagram

<!-- image -->

## Watchdog Input (MAX823/MAX824)

In the MAX823/MAX824, the watchdog circuit monitors the µP's activity. If the µP does not toggle the watchdog input (WDI) within tWD (1.6s), reset asserts. The internal 1.6s timer is cleared by either a reset pulse or by toggling WDI, which detects pulses as short as 50ns. While reset is asserted, the timer remains cleared and does not count. As soon as reset is released, the timer starts counting (Figure 3).

Disable the watchdog function by leaving WDI unconnected or by three-stating the driver connected to WDI. The watchdog input is internally driven low during the first 7/8 of the watchdog timeout period and high for the last  1/8  of  the  watchdog  timeout  period.  When WDI is left  unconnected, this internal driver clears the 1.6s timer every 1.4s. When WDI is three-stated or unconnected, the maximum allowable leakage current is 10µA and the maximum allowable load capacitance is 200pF.

## Applications Information

## Watchdog Input Current

The MAX823/MAX824 WDI inputs are internally driven through a buffer and series resistor from the watchdog counter (Figure 1). When WDI is left unconnected, the watchdog timer is serviced within the watchdog timeout period by a low-high-low pulse from the counter chain. For minimum watchdog input current (minimum overall power consumption), leave WDI low for the majority of the watchdog timeout period, pulsing it low-high-low once within the first 7/8 of the watchdog timeout period to reset the watchdog timer. If WDI is externally driven high for the majority of the timeout period, up to 160µA can flow into WDI.

Figure 3. MAX823/MAX824 Watchdog Timing Relationship

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 5-Pin Microprocessor Supervisory Circuits With Watchdog Timer and Manual Reset

## Interfacing to µPs with Bidirectional Reset Pins

The RESET output maximum pullup current is 800µA for L/M versions (400µA for T/S/R/Z/Y versions). This allows µPs with bidirectional resets, such as the 68HC11, to force RESET low when the MAX823/MAX824/MAX825 are pulling RESET high (Figure 4).

## Negative-Going VCC Transients

These supervisors are relatively immune to shortduration, negative-going VCC transients (glitches), which usually do not require the entire system to shut down. Resets are issued to the µP during power-up, powerdown, and brownout conditions.

The Typical Operating Characteristics show a graph of the MAX823\_'s Maximum VCC Transient Duration vs. Reset Threshold Overdrive, for which reset pulses are not generated. The graph was produced using negative-going VCC pulses, starting at 5V and ending below the reset threshold by the magnitude indicated (reset threshold overdrive). The graph shows the maximum pulse width that a negative-going VCC transient can typically  have  without  triggering  a  reset  pulse.  As  the amplitude of the transient increases (i.e., goes farther below the reset threshold), the maximum allowable pulse width decreases.

Figure 4. Interfacing to µPs with Bidirectional Resets

<!-- image -->

An optional 0.1µF bypass capacitor mounted close to VCC provides additional transient immunity.

## Watchdog Software Considerations (MAX823/MAX824)

One way to help the watchdog timer monitor software execution more closely is to set and reset the watchdog input at different points in the program, rather than pulsing the watchdog input high-low-high or low-highlow.  This  technique avoids a stuck loop, in which the watchdog timer would continue to be reset inside the loop, keeping the watchdog from timing out.

Figure 5 shows an example of a flow diagram where the I/O driving the watchdog input is set high at the beginning of the program, set low at the beginning of every subroutine or loop, then set high again when the program returns to the beginning. If the program should hang in any subroutine, the problem would quickly be corrected, since the I/O is continually set low and the watchdog timer is allowed to time out, causing a reset or interrupt to be issued. As described in the Watchdog Input Current section, this scheme results in higher time average WDI input current than does leaving WDI low for  the  majority  of  the  timeout  period  and  periodically pulsing it low-high-low.

Figure 5. Watchdog Flow Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 5-Pin Microprocessor Supervisory Circuits With Watchdog Timer and Manual Reset

## Typical Operating Circuit

<!-- image -->

## Ordering Information (continued)

| PART †        | TEMP. RANGE     | PIN-PACKAGE   |
|---------------|-----------------|---------------|
| MAX824_EUK-T  | -40°C to +125°C | 5 SOT23-5     |
| MAX825 _EXK-T | -40°C to +85°C  | 5 SC70-5      |
| MAX825_EUK-T  | -40°C to +125°C | 5 SOT23-5     |

† Insert the desired suffix letter (from the Reset Threshold table) into the blank to complete the part number. All devices are available in tape-and-reel only. There is a 2,500 piece minimum order increment. Devices are available in both leaded and lead-free packaging. Specify lead-free by replacing '-T' with '+T' when ordering.

<!-- image -->

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Chip Information

TRANSISTOR COUNT:  607

PROCESS TECHNOLOGY:  BiCMOS

## Marking Information

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 5-Pin Microprocessor Supervisory Circuits With Watchdog Timer and Manual Reset

## Package Information

(The package drawing(s) in this data sheet may not reflect the most current specifications. For the latest package outline information, go to www.maxim-ic.com/packages .)

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

10

<!-- image -->