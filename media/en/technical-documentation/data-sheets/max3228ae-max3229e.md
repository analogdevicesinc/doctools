<!-- lastmod 2022-08-04 -->
<!-- image -->

## ±15kV ESD-Protected +2.5V to +5.5V RS-232 Transceivers in UCSP and WLP

## General Description

The MAX3228E/AE and MAX3229E/AE are +2.5V to +5.5V powered EIA/TIA-232 and V.28/V.24 communications interfaces with low power requirements, high datarate capabilities, and enhanced electrostatic discharge (ESD) protection, in a chip-scale package (UCSP™) and WLP Package. All transmitter outputs and receiver inputs are protected to ±15kV using IEC 1000-4-2 AirGap Discharge, ±8kV using IEC 1000-4-2 Contact Discharge, and ±15kV using the Human Body Model.

The MAX3228E/AE and MAX3229E/AE achieve a 1µA supply current with Maxim's AutoShutdown™ feature. They save power without changes to existing BIOS or operating systems by entering low-power shutdown mode when the RS-232 cable is disconnected, or when the transmitters of the connected peripherals are off.

The transceivers have a proprietary low-dropout transmitter output stage, delivering RS-232 compliant performance from a +3.1V to +5.5V supply, and RS-232 compatible performance with a supply voltage as low as +2.5V. The dual charge pump requires only four small 0.1µF capacitors for operation from a +3.0V supply.  Each device is guaranteed to run at data rates of 250kbps while maintaining RS-232 output levels.

The MAX3228E/AE and MAX3229E/AE offer a separate power-supply input for the logic interface, allowing configurable logic levels on the receiver outputs and transmitter inputs. Operating over a +1.65V to VCC range, VL provides the MAX3228E/AE and MAX3229E/AE compatibility with multiple logic families.

The MAX3229E/AE contains one receiver and one transmitter.  The  MAX3228E/AE contains two receivers and  two  transmitters.  The  MAX3228E/AE  and MAX3229E/AE are available in tiny chip-scale and WLP packaging and are specified across the extended industrial temperature range of -40°C to +85°C.

## Applications

Personal Digital Assistants Cell Phone Data Lump Cables Set-Top Boxes Handheld Devices

Cell Phones

Typical Operating Circuits continued at end of data sheet. Pin Configurations appear at end of data sheet.

UCSP is a trademark of Maxim Integrated Products, Inc. AutoShutdown is a trademark of Maxim Integrated Products, Inc.

## Features

- ♦ 6 ✕ 5 Chip-Scale Package (UCSP) and WLP Package
- ♦ ESD Protection for RS-232 I/O Pins: ±15kV-IEC 1000-4-2 Air-Gap Discharge ±8kV-IEC 1000-4-2 Contact Discharge ±15kV-Human Body Model
- ♦ 1µA Low-Power AutoShutdown
- ♦ 250kbps Guaranteed Data Rate
- ♦ Meets EIA/TIA-232 Specifications Down to +3.1V
- ♦ RS-232 Compatible to +2.5V Allows Operation from Single Li+ Cell
- ♦ Small 0.1µF Capacitors
- ♦ Configurable Logic Levels

## Ordering Information

| PART            | TEMP RANGE               | BUMP-PACKAGE   |
|-----------------|--------------------------|----------------|
| MAX3228E EBV-T  | -40°C to +85°C 6 x 5     | UCSP*          |
| MAX3228AE EWV+T | -40°C to +85°C 6 x 5 WLP |                |
| MAX3229E EBV-T  | -40°C to +85°C           | 6 x 5 UCSP*    |
| MAX3229AE EWV+T | -40°C to +85°C           | 6 x 5 WLP      |

- +Denotes a lead-free/RoHS-compliant package.

*Requires solder temperature profile described in the Absolute Maximum Ratings section.

*UCSP reliability is integrally linked to the user's assembly methods, circuit board material, and environment. Refer to the UCSP Reliabilitly Notice in the UCSP Reliability section of this data sheet for more information.

T = Tape and reel.

## Typical Operating Circuits

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

<!-- image -->

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## ±15kV ESD-Protected +2.5V to +5.5V RS-232 Transceivers in UCSP and WLP

## ABSOLUTE MAXIMUM RATINGS

| V CC to GND...........................................................-0.3V to +6.0V               |
|----------------------------------------------------------------------------------------------------|
| V+ to GND.............................................................-0.3V to +7.0V               |
| V- to GND..............................................................+0.3V to -7.0V              |
| V+ to &#124;V-&#124; (Note 1) ................................................................+13V |
| V L to GND..............................................................-0.3V to +6.0V             |
| Input Voltages                                                                                     |
| T_IN_, FORCEON, FORCEOFF to GND.....-0.3V to (V L + 0.3V)                                          |
| R_IN_ to GND...................................................................±25V                |
| Output Voltages                                                                                    |
| T_OUT to GND...............................................................±13.2V                  |
| R_OUT INVALID to GND............................-0.3V to (V L + 0.3V)                              |
| INVALID to GND..........................................-0.3V to (V CC +0.3V)                      |

| Short-Circuit Duration T _ OUT to GND........................Continuous                                                    |
|----------------------------------------------------------------------------------------------------------------------------|
| Continuous Power Dissipation (T A = +70°C)                                                                                 |
| 6 ✕ 5 UCSP (derate 10.1mW/°C above T A = +70°C)...805mW                                                                    |
| 6 ✕ 5 WLP (derate 20mW/°C above T A = +70°C)............1.6W                                                               |
| Operating Temperature Range ...........................-40°C to +85°C                                                      |
| Junction Temperature......................................................+150°C                                           |
| Storage Temperature Range.............................-65°C to +150°C                                                      |
| Bump Temperature (Soldering) (Note 2) Infrared (15s) ...............................................................+200°C |
| Vapor Phase (20s) .......................................................+215°C                                            |

Note 1: V+ and V- can have maximum magnitudes of 7V, but their absolute difference cannot exceed 13V.

Note 2: This device is constructed using a unique set of packaging techniques that impose a limit on the thermal profile the device can be exposed to during board level solder attach and rework. This limit permits only the use of the solder profiles recommended in the industry-standard specification, JEDEC 020A, paragraph 7.6, Table 3 for IR/VPR and convection reflow. Preheating is required. Hand or wave soldering is not allowed.

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS

(VCC = +2.5V to +5.5V, VL = +1.65V to +5.5V, C1-C4 = 0.1µF, tested at +3.3V ±10%, TA = TMIN to TMAX. Typical values are at TA = +25°C, unless otherwise noted.) (Note 3)

| PARAMETER                                  | SYMBOL             | CONDITIONS                                                   | MIN                | TYP                | MAX                | UNITS              |
|--------------------------------------------|--------------------|--------------------------------------------------------------|--------------------|--------------------|--------------------|--------------------|
| DC CHARACTERISTICS                         | DC CHARACTERISTICS | DC CHARACTERISTICS                                           | DC CHARACTERISTICS | DC CHARACTERISTICS | DC CHARACTERISTICS | DC CHARACTERISTICS |
| V L Input Voltage Range                    | V L                |                                                              | 1.65               |                    | V CC + 0.3         | V                  |
| V CC Supply Current, AutoShutdown          | I CC               | FORCEON = GND FORCEOFF = V L , all R IN open                 |                    |                    | 10                 | µA                 |
| V CC Supply Current, AutoShutdown          | I CC               | FORCEOFF = GND                                               |                    |                    | 10                 | µA                 |
| V CC Supply Current, AutoShutdown          | I CC               | FORCEON, FORCEOFF floating                                   |                    |                    | 1                  | mA                 |
| V CC Supply Current, AutoShutdown Disabled | I CC               | FORCEON = FORCEOFF = V L no load                             | 0.3                |                    | 1                  | mA                 |
| V L Supply Current                         | I L                | FORCEON or FORCEOFF = GND, V CC = V L =+5V                   | 85                 |                    |                    | µA                 |
| V L Supply Current                         | I L                | FORCEON, FORCEOFF floating                                   |                    | 1                  |                    | µA                 |
| LOGIC INPUTS                               | LOGIC INPUTS       | LOGIC INPUTS                                                 | LOGIC INPUTS       | LOGIC INPUTS       | LOGIC INPUTS       | LOGIC INPUTS       |
| Pullup Currents                            |                    | FORCEON, FORCEOFF to V L                                     | 20                 |                    |                    | µA                 |
| Input Logic Low                            |                    | T_IN, FORCEON, FORCEOFF                                      |                    |                    | 0.4                | V                  |
| Input Logic High                           |                    | T_IN, FORCEON, FORCEOFF                                      | 0.66 ✕ V           | L                  |                    | V                  |
| Transmitter Input Hysteresis               |                    |                                                              | 0.5                |                    |                    | V                  |
| Input Leakage Current                      |                    | T_IN                                                         |                    | ±0.01              | ±1                 | µA                 |
| RECEIVER OUTPUTS                           | RECEIVER OUTPUTS   | RECEIVER OUTPUTS                                             | RECEIVER OUTPUTS   | RECEIVER OUTPUTS   | RECEIVER OUTPUTS   | RECEIVER OUTPUTS   |
| Output Leakage Currents                    |                    | R_OUT, receivers disabled, FORCEOFF = GND or in AutoShutdown |                    |                    | ±10                | µA                 |
| Output Voltage Low                         |                    | I OUT = 0.8mA                                                |                    |                    | 0.4                | V                  |
| Output Voltage High                        |                    | I OUT = -0.5mA                                               | V L - 0.4 V L      | - 0.1              |                    | V                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## ±15kV ESD-Protected +2.5V to +5.5V RS-232 Transceivers in UCSP and WLP

## ELECTRICAL CHARACTERISTICS (continued)

(VCC = +2.5V to +5.5V, VL = +1.65V to +5.5V, C1-C4 = 0.1µF, tested at +3.3V ±10%, TA = TMIN to TMAX. Typical values are at TA = +25°C, unless otherwise noted.) (Note 3)

| PARAMETER                                               | SYMBOL   | CONDITIONS                                          |                                                   | MIN        | TYP   | MAX        | UNITS   |
|---------------------------------------------------------|----------|-----------------------------------------------------|---------------------------------------------------|------------|-------|------------|---------|
| RECEIVER INPUTS                                         |          |                                                     |                                                   |            |       |            |         |
| Input Voltage Range                                     |          |                                                     |                                                   | -25        |       | +25        | V       |
|                                                         |          | T A = +25°C                                         | V CC = +3.3V                                      | 0.6        | 1.2   |            | V       |
| Input Threshold Low                                     |          | T A = +25°C                                         | V CC = +5.0V                                      | 0.8        | 1.7   |            | V       |
| Input Threshold High                                    |          | T A = +25°C                                         | V CC = +3.3V                                      |            | 1.3   | 2.4        | V       |
|                                                         |          |                                                     | V CC = +5.0V                                      |            | 1.8   | 2.4        |         |
| Input Hysteresis Input Resistance                       |          |                                                     |                                                   | 3          | 0.5 5 | 7          | V k Ω   |
| AUTO SHUTDOWN                                           |          |                                                     |                                                   |            |       |            |         |
| Receiver Input Threshold to INVALID                     |          | Figure 3a                                           | Positive threshold                                |            |       | 2.7        | V       |
| Output High                                             |          | Figure 3a                                           | Negative threshold                                | -2.7       |       |            | V       |
| Receiver Input Threshold to INVALID Output Low          |          |                                                     |                                                   | -0.3       |       | 0.3        | V       |
| Receiver Positive or Negative Threshold to INVALID High | t INVH   | V CC = +5.0V, Figure 3b                             |                                                   |            | 1     |            | µs      |
| Receiver Positive or Negative Threshold to INVALID Low  | t INVL   | V CC = +5.0V, Figure 3b                             |                                                   |            | 30    |            | µs      |
| Receiver Edge to Transmitters Enabled                   | t WU     | V CC = +5.0V, Figure 3b                             |                                                   |            | 100   |            | µs      |
| INVALID OUTPUT                                          |          |                                                     |                                                   |            |       |            |         |
| Output Voltage Low                                      |          | I OUT = 0.3mA                                       |                                                   |            |       | 0.4        | V       |
| Output Voltage High                                     |          | I OUT = -0.5mA                                      |                                                   | V CC - 0.4 |       | V CC - 0.1 | V       |
| TRANSMITTER OUTPUTS                                     |          |                                                     |                                                   |            |       |            |         |
| V CC Mode Switch Point (V CC Falling)                   |          | T_OUT = ±5.0V to ±3.7V                              |                                                   | 2.85       |       | 3.1        | V       |
| V CC Mode Switch Point (V CC Rising)                    |          | T_OUT = ±3.7V to ±5.0V                              |                                                   | 3.3        |       | 3.7        | V       |
| V CC ModeSwitch Point Hysteresis                        |          |                                                     |                                                   |            | 400   |            | mV      |
| Output Voltage Swing                                    |          | All transmitter outputs loaded with 3k Ω to ground. | V CC = +3.1V to +5.5V, V CC falling (T A = +25°C) | ±5         | ±5.4  |            | V       |
| Output Voltage Swing                                    |          | All transmitter outputs loaded with 3k Ω to ground. | V CC = +2.5V to +3.1V, V CC rising                | ±3.7       |       |            | V       |
| Output Resistance                                       |          | V CC = V+ = V- = 0, T_OUT                           | = ±2V                                             | 300        | 10M   |            | Ω       |
| Output Short-Circuit Current                            |          |                                                     |                                                   |            |       | ±60        | mA      |
| Output Leakage Current                                  |          | T_OUT = ±12V, transmitters                          | disabled                                          |            |       | ±25        | µA      |
| ESD PROTECTION                                          |          |                                                     |                                                   |            |       |            |         |
| R_IN, T_OUT                                             |          | Human Body Model                                    |                                                   |            | ±15   |            |         |
| R_IN, T_OUT                                             |          | IEC 1000-4-2 Air-Gap                                | Discharge                                         |            | ±15   |            | kV      |
| R_IN, T_OUT                                             |          | IEC 1000-4-2 Contact Discharge                      |                                                   |            | ±8    |            |         |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## ±15kV ESD-Protected +2.5V to +5.5V RS-232 Transceivers in UCSP and WLP

## TIMING CHARACTERISTICS

(VCC = +2.5V to +5.5V, VL = +1.65V to +5.5V, C1-C4 = 0.1µF, tested at +3.3V ±10%, TA = TMIN to TMAX. Typical values are at TA = +25°C, unless otherwise noted.) (Note 3)

| PARAMETER                    | SYMBOL               | CONDITIONS                                               |   MIN TYP |   MAX | UNITS   |
|------------------------------|----------------------|----------------------------------------------------------|-----------|-------|---------|
| Maximum Data Rate            |                      | R L = 3k Ω , CL = 1000pF, one transmitter switching      |       250 |       | kbps    |
| Receiver Propagation Delay   |                      | Receiver input to receiver output, CL = 150pF            |      0.15 |       | µ s     |
| Receiver Output Enable-Time  |                      | V CC = V L = +5V                                         |       200 |       | ns      |
| Receiver Output Disable-Time |                      | V CC = V L = +5V                                         |       200 |       | ns      |
| Transmitter Skew             | &#124; t PHL - t PLH | &#124;                                                   |       100 |       | ns      |
| Receiver Skew                | &#124; t PHL - t PLH | &#124;                                                   |        50 |       | ns      |
| Transition Region Slew Rate  |                      | R L = 3k Ω to 7k Ω , CL = 150pF to 1000pF, T A = +25 ° C |         6 |    30 | V/ µ s  |

Note 3: VCC must be greater than VL.

## Typical Operating Characteristics

(VCC = +3.3V, 250kbps data rate, 0.1µF capacitors, all transmitters loaded with 3k Ω and CL, TA = +25°C, unless otherwise noted.)

## TRANSMITTER OUTPUT VOLTAGE vs. LOAD CAPACITANCE

<!-- image -->

<!-- image -->

<!-- image -->

OPERATING SUPPLY CURRENT (mA)

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## ±15kV ESD-Protected +2.5V to +5.5V RS-232 Transceivers in UCSP and WLP

## Typical Operating Characteristics (continued)

(VCC = +3.3V, 250kbps data rate, 0.1µF capacitors, all transmitters loaded with 3k Ω and CL, TA = +25°C, unless otherwise noted.)

<!-- image -->

TRANSMITTER OUTPUT VOLTAGE (V)

MAX3228E/28AE/29E/29AE toc05

<!-- image -->

<!-- image -->

## Pin Description

| PIN                                    | PIN                                    |         |                                                                                                                                                                                           |
|----------------------------------------|----------------------------------------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| MAX3228E/ MAX3228AE                    | MAX3229E/ MAX3229AE                    | NAME    | FUNCTION                                                                                                                                                                                  |
| A1                                     | A1                                     | V CC    | Supply Voltage. +2.5V to +5.5V supply voltage                                                                                                                                             |
| A2                                     | A2                                     | C2+     | Inverting Charge-Pump Capacitor Positive Terminal                                                                                                                                         |
| A3                                     | A3                                     | C2-     | Inverting Charge-Pump Capacitor Negative Terminal                                                                                                                                         |
| A4                                     | A4                                     | V-      | Negative Charge-Pump Output. -5.5V/-4.0V generated by charge pump.                                                                                                                        |
| A5                                     | A5                                     | V L     | Logic Voltage Input. Logic-level input for receiver outputs and transmitter inputs. Connect V L to the system logic supply voltage or V CC if no logic supply is required.                |
| A6, B6                                 | A6                                     | T_IN    | Transmitter Input(s)                                                                                                                                                                      |
| B1                                     | B1                                     | V+      | Positive Charge-Pump Output. +5.5V/+4.0V generated by charge pump. If charge pump is generating +4.0V, the device has switched from RS-232 compliant to RS-232 compatible mode.           |
| B2, B3, B4, C2, C3, C4, D2, D3, D4, D5 | B2, B3, B4, C2, C3, C4, D2, D3, D4, D5 | N.C.    | No Connection. The MAX3228AE/MAX3229AE are not populated with solder bumps at these locations. The MAX3228AE/MAX3229AE are populated with electrically isolated bumps at these locations. |
| B5                                     | B5                                     | FORCEON | Active-High FORCEON Input. Drive FORCEON high to override automatic circuitry, keeping transmitters and charge pumps on. Pulls itself high internally if not connected.                   |
| -                                      | B6, D6, E4, E6                         | N.C.    | No Connection. These locations are populated with solder bumps, but are electrically isolated.                                                                                            |
| C1                                     | C1                                     | C1+     | Positive Regulated Charge-Pump Capacitor Positive Terminal                                                                                                                                |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## ±15kV ESD-Protected +2.5V to +5.5V RS-232 Transceivers in UCSP and WLP

## Pin Description (continued)

| PIN                 | PIN                 |          |                                                                                                                                                                                                                  |
|---------------------|---------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| MAX3228E/ MAX3228AE | MAX3229E/ MAX3229AE | NAME     | FUNCTION                                                                                                                                                                                                         |
| C5                  | C5                  | FORCEOFF | Active-Low FORCEOFF Input. Drive FORCEOFF low to shut down transmitters, receivers, and on-board charge pump. This overrides all automatic circuitry and FORCEON. Pulls itself high internally if not connected. |
| C6, D6              | C6                  | R_OUT    | Receiver Output(s)                                                                                                                                                                                               |
| D1                  | D1                  | C1-      | Positive Regulated Charge-Pump Capacitor Negative Terminal                                                                                                                                                       |
| E1                  | E1                  | GND      | Ground                                                                                                                                                                                                           |
| E2                  | E2                  | INVALID  | Valid Signal Detector Output. INVALID is enabled low if no valid RS-232 level is present on any receiver input.                                                                                                  |
| E3, E4              | E3                  | T_OUT    | RS-232 Transmitter Output(s)                                                                                                                                                                                     |
| E5, E6              | E5                  | R_IN     | RS-232 Receiver Input(s)                                                                                                                                                                                         |

## Table 1. Operating Supply Options

| SYSTEM SUPPLY (V)                     | V CC (V)     | V L (V)                  | RS-232 MODE          |
|---------------------------------------|--------------|--------------------------|----------------------|
| 1 Li+ Cell                            | +2.4 to +4.2 | Regulated System Voltage | Compliant/Compatible |
| 3 NiCad/NiMh Cells                    | +2.4 to +3.8 | Regulated System Voltage | Compliant/Compatible |
| Regulated Voltage Only (V CC falling) | +3.0 to +5.5 | +3.0 to +5.5             | Compliant            |
| Regulated Voltage Only (V CC falling) | +2.5 to +3.0 | +2.5 to +3.0             | Compatible           |

## Detailed Description

## Dual-Mode Regulated Charge-Pump Voltage Converter

The MAX3228E/AE and MAX3229E/AE internal power supply consists of a dual-mode regulated charge pump. For supply voltages above +3.7V, the charge pump will generate +5.5V at V+ and -5.5V at V-. The charge pumps operate in a discontinuous mode. If the output voltages are less than ±5.5V, the charge pumps are enabled, if the output voltages exceed ±5.5V, the charge pumps are disabled.

For supply voltages below +2.85V, the charge pump will generate +4.0V at V+ and -4.0V at V-. The charge pumps operate in a discontinuous mode. If the output voltages are less than ±4.0V, the charge pumps are enabled, if the output voltages exceed ±4.0V, the charge pumps are disabled.

Each charge pump requires a flying capacitor (C1, C2) and a reservoir capacitor (C3, C4) to generate the V+ and V- supply voltages.

## Voltage Generation in the Switchover Region

The MAX3228E/AE and MAX3229E/AE include a switchover circuit between these two modes that have approximately  400mV  of  hysteresis  around  the switchover point. The hysteresis is shown in Figure 1. This large hysteresis eliminates mode changes due to power-supply bounce.

For example, a three-cell NiMh battery system starts at VCC = +3.6V, and the charge pump will generate an output voltage of ±5.5V. As the battery discharges, the

Figure 1. V+ Switchover for Changing VCC

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## ±15kV ESD-Protected +2.5V to +5.5V RS-232 Transceivers in UCSP and WLP

Figure 2a. MAX322\_E Entering 1µA Supply Mode via AutoShutdown

<!-- image -->

MAX3228E/AE and MAX3229E/AE maintain the outputs in regulation until the battery voltage drops below +3.1V. Then the output regulation points change to ±4.0V

When VCC is rising, the charge pump will generate an output voltage of ±4.0V, while VCC is between +2.5V and +3.5V. When VCC rises above the switchover voltage of +3.5V, the charge pump switches modes to generate an output of ±5.5V.

Table 1 shows different supply schemes and their operating voltage ranges.

## RS-232 Transmitters

The transmitters are inverting level translators that convert  CMOS-logic  levels  to  RS-232  levels.  The MAX3228E/AE and MAX3229E/AE will automatically reduce the RS-232 compliant levels (±5.5V) to RS-232 compatible levels (±4.0V) when VCC falls below approximately +3.1V. The reduced levels also reduce supply current requirements, extending battery life. Built-in  hysteresis of approximately 400mV for VCC ensures that the RS-232 output levels do not change if VCC is noisy or has a sudden current draw causing the supply voltage to drop slightly. The outputs will return to RS-232 compliant levels (±5.5V) when VCC rises above approximately +3.5V.

The MAX3228E/AE and MAX3229E/AE transmitters guarantee a 250kbps data rate with worst-case loads of 3k Ω in parallel with 1000pF.

When FORCEOFF is  driven to ground, the transmitters and receivers are disabled and the outputs become high impedance. When the AutoShutdown circuitry senses that all receiver and transmitter inputs are inactive  for  more  than  30µs,  the  transmitters  are  disabled and the outputs go to a high-impedance state. When the power is off, the MAX3228E/AE and MAX3229E/AE permit the transmitter outputs to be driven up to ±12V.

<!-- image -->

Figure 2b. MAX322\_E with Transmitters Enabled Using AutoShutdown

<!-- image -->

The transmitter inputs do not have pullup resistors. Connect unused inputs to GND or VL.

## RS-232 Receivers

The MAX3228E/AE and MAX3229E/AE receivers convert RS-232 signals to logic output levels. All receivers have inverting three-state outputs and can be active or i nactive.  In  shutdown  ( FORCEOFF =  low)  or  in AutoShutdown, the MAX3228E/AE and MAX3229E/AE receivers are in a high-impedance state (Table 3).

The MAX3228E/AE and MAX3229E/AE feature an INVALID output  that  is  enabled  low  when  no  valid RS-232 signal levels have been detected on any receiver inputs. INVALID is  functional  in  any  mode (Figures 2 and 3).

Figure 2c. MAX322\_E AutoShutdown Logic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## ±15kV ESD-Protected +2.5V to +5.5V RS-232 Transceivers in UCSP and WLP

Figure 3. AutoShutdown Trip Levels

<!-- image -->

Figure 4. AutoShutdown with Initial Turn-On to Wake Up a Mouse or Another System

<!-- image -->

## AutoShutdown

The MAX3228E/AE and MAX3229E/AE achieve a 1µA supply current with Maxim's AutoShutdown feature, which operates when FORCEON is low and FORCEOFF is high. When these devices sense no valid signal levels on all receiver inputs for 30µs, the on-board charge pump and drivers are shut off, reducing VCC supply current to 1µA. This occurs if the RS-232 cable is disconnected or the connected peripheral transmitters are turned off. The device turns on again when a valid level is applied to any RS-232 receiver input. As a result, the system saves power without changes to the existing BIOS or operating system.

Table 3 and Figure 2c summarize the MAX3228E/AE and MAX3229E/AE operating modes. FORCEON and FORCEOFF override AutoShutdown. When neither control  is  asserted,  the  IC  selects  between  these  states automatically, based on receiver input levels. Figures 2a, 2b, and 3a depict valid and invalid RS-232 receiver levels. Figures 3a and 3b show the input levels and timing diagram for AutoShutdown operation.

A system with AutoShutdown may need time to wake up. Figure 4 shows a circuit that forces the transmitters on for 100ms, allowing enough time for the other system  to  realize  that  the  MAX3228E/AE  and MAX3229E/AE are active. If the other system transmits valid RS-232 signals within that time, the RS-232 ports on both systems remain enabled.

When shut down, the device's charge pumps are off, V+ is pulled to VCC, V- is pulled to ground, and the transmitter outputs are high-impedance. The time required to exit shutdown is typically 100µs (Figure 3b).

## FORCEON and FORCEOFF

In  case FORCEON and FORCEOFF are inaccessible, these pins have 60k Ω (typ) pullup resistors connected to VL (Table 2). Therefore, if FORCEON and FORCEOFF are not connected, the MAX3228E/AE and MAX3229E/AE will  always be active. Pulling these pins to ground will draw current from the VL supply. This current can be calculated from the voltage supplied at VL and the 60k Ω (typ) pullup resistor.

## VL Logic Supply Input

Unlike other RS-232 interface devices, where the receiver outputs swing between 0 and VCC, the

## Table 2. Power-On Default States

| PIN NAME   | POWER-ON DEFAULT   | MECHANISM       |
|------------|--------------------|-----------------|
| FORCEON    | High               | Internal pullup |
| FORCEOFF   | High               | Internal pullup |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## ±15kV ESD-Protected +2.5V to +5.5V RS-232 Transceivers in UCSP and WLP

## Table 3. Output Control Truth Table

| TRANSCEIVER STATUS              | FORCEON   | FORCEOFF   | RECEIVER STATUS   | INVALID   |
|---------------------------------|-----------|------------|-------------------|-----------|
| Shutdown (AutoShutdown)         | Low       | High       | High-Z            | L         |
| Shutdown (Forced Off)           | X         | Low        | High-Z            | †         |
| Normal Operation (Forced On)    | High      | High       | Active            | †         |
| Normal Operation (AutoShutdown) | Low       | High       | Active            | H         |

X = Don't care.

† = I NVALID output state is determined by R\_IN input levels.

MAX3228E/AE and MAX3229E/AE feature a separate logic  supply input (VL) that sets VOH for  the  receiver and INVALID outputs. The transmitter inputs (T\_IN), FORCEON and FORCEOFF ,  are  also  referred  to  VL. This feature allows maximum flexibility in interfacing to different  systems and logic levels. Connect VL to  the system's logic supply voltage (+1.65V to +5.5V), and bypass it with a 0.1µF capacitor to GND. If the logic supply is the same as VCC, connect VL to VCC. Always enable VCC before enabling the VL supply. VCC must be greater than or equal to the VL supply.

## Software-Controlled Shutdown

If  direct  software  control  is  desired,  connect FORCEOFF and FORCEON together to disable AutoShutdown. The microcontroller then drives FORCEOFF and FORCEON like a SHDN input, INVALID can be used to alert the microcontroller to indicate serial data activity.

## ±15kV ESD Protection

As with all Maxim devices, ESD-protection structures are incorporated on all pins to protect against electrostatic discharges encountered during handling and assembly. The  driver  outputs  and  receiver  inputs  of  the MAX3228E/AE and MAX3229E/AE have extra protection against static electricity. Maxim's engineers have developed state-of-the-art structures to protect these pins against ESD of ±15kV without damage. The ESD structures withstand high ESD in all states: normal operation, shutdown, and powered down. After an ESD event Maxim's E versions keep working without latchup, whereas competing RS-232 products can latch and must be powered down to remove latchup.

ESD protection can be tested in various ways; the transmitter outputs and receiver inputs of this product family are characterized for protection to the following limits:

- 1) ±15kV using the Human Body Model.
- 2) ±8kV using the Contact Discharge method specified in IEC 1000-4-2.
- 3) ±15kV using the IEC 1000-4-2 Air-Gap method.

Figure 5a. Human Body ESD Test Models

<!-- image -->

Figure 5b. Human Body Model Current Waveform

<!-- image -->

## ESD Test Conditions

ESD performance depends on a variety of conditions. Contact Maxim for a reliability report that documents test setup, test methodology, and test results.

## Human Body Model

Figure 5a shows the Human Body Model, and Figure 5b shows the current waveform it generates when discharged into a low impedance. This model consists of a 100pF capacitor charged to the ESD voltage of interest, which is then discharged into the test device through a 1.5k Ω resistor.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## ±15kV ESD-Protected +2.5V to +5.5V RS-232 Transceivers in UCSP and WLP

## IEC 1000-4-2

The IEC 1000-4-2 standard covers ESD testing and performance of finished equipment; it does not specifically refer to integrated circuits. The MAX3228E/AE and MAX3229E/AE help you design equipment that meets Level 4 (the highest level) of IED 1000-4-2, without the need for additional ESD-protection components.

The major difference between tests done using the Human Body Model and IEC 1000-4-2 is a higher peak current in IEC 1000-4-2, because series resistance is lower in the IEC 1000-4-2 model. Hence, the ESD withstand voltage measured to IEC 1000-4-2 is generally lower than that measured using the Human Body Model. Figure 6a shows the IEC 1000-4-2 model, and Figure 6b shows the current waveform for the ±8kV IEC 1000-4-2 Level 4 ESD contact discharge test.

The air-gap test involves approaching the device with a charged probe. The Contact Discharge method connects the probe to the device before the probe is energized.

Figure 6a. IEC 1000-4-2 ESD Test Model

<!-- image -->

Figure 6b. IEC 1000-4-2 ESD Generator Current Waveform

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Machine Model

The Machine Model for ESD tests all pins using a 200pF storage capacitor and zero discharge resistance. Its objective is to emulate the stress caused by contact that occurs with handling and assembly during manufacturing.  Of  course, all  pins  require  this  protection  during manufacturing, not just RS-232 inputs and outputs. Therefore, after PC board assembly, the Machine Model is less relevant to I/O ports.

## Applications Information

## Capacitor Selection

The capacitor type used for C1-C4 is not critical for proper operation; either polarized or non polarized capacitors may be used. However, ceramic chip capacitors with an X7R or X5R dielectric work best. The charge pump requires 0.1µF capacitors for 3.3V operation.  For  other  supply  voltages,  refer  to  Table  4  for required capacitor values. Do not use values smaller than those listed in Table 4. Increasing the capacitor values (e.g., by a factor of 2) reduces ripple on the transmitter outputs and slightly reduces power consumption. C2, C3, and C4 can be increased without changing C1's value. However, do not increase C1 without also increasing the values of C2, C3, and C4 to maintain the proper ratios (C1 to the other capacitors).

When using the minimum required capacitor values, make sure the capacitor value does not degrade excessively with temperature. If in doubt, use capacitors with a larger nominal value. The capacitor's equival ent  series  resistance (ESR) usually rises at low temperatures and influences the amount of ripple on V+ and V-.

## Power-Supply Decoupling

In most circumstances, a 0.1µF VCC bypass capacitor is adequate. In applications that are sensitive to powersupply noise, use a capacitor of the same value as the charge-pump capacitor C1. Connect bypass capacitors as close to the IC as possible.

## Table 4. Required Capacitor Values

| V CC (V)   |   C1, CBYPASS (µF) |   C2, C3, C4 (µF) |
|------------|--------------------|-------------------|
| 2.5 to 3.0 |               0.22 |              0.22 |
| 3.0 to 3.6 |                0.1 |               0.1 |
| 4.5 to 5.5 |              0.047 |              0.33 |
| 3.0 to 5.5 |               0.22 |                 1 |

<!-- image -->

## ±15kV ESD-Protected +2.5V to +5.5V RS-232 Transceivers in UCSP and WLP

## Transmitter Outputs when Exiting Shutdown

Figure 7 shows a transmitter output when exiting shutdown mode. The transmitter is loaded with 3k Ω in parallel  with  1000pF.  The  transmitter  output  displays  no ringing or undesirable transients as it comes out of shutdown, and is enabled only when the magnitude of V- exceeds approximately -3V.

## High Data Rates

The MAX3228E/AE and MAX3229E/AE maintain the RS232 ±5.0V minimum transmitter output voltage even at high data rates. Figure 8 shows a transmitter loopback test circuit. Figure 9 shows a loopback test result at 120kbps, and Figure 10 shows the same test at 250kbps.

<!-- image -->

Figure 7. Transmitter Outputs Exiting Shutdown or Powering Up

<!-- image -->

Figure 8. Transmitter Loopback Test Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For Figure 9, the transmitter was driven at 120kbps into an RS-232 load in parallel with 1000pF. For Figure 10, a single transmitter was driven at 250kbps, and loaded with an RS-232 receiver in parallel with 1000pF.

Figure 9. Loopback Test Result at 120kbps

<!-- image -->

Figure 10. Loopback Test Result at 250kbps

<!-- image -->

## ±15kV ESD-Protected +2.5V to +5.5V RS-232 Transceivers in UCSP and WLP

## Typical Operating Circuits (continued)

<!-- image -->

Table 2. Reliability Test Data

| TEST                            | CONDITIONS                              | DURATION               | NO. OF FAILURES PER SAMPLE SIZE   |
|---------------------------------|-----------------------------------------|------------------------|-----------------------------------|
| Temperature Cycle               | -35 ° C to +85 ° C, -40 ° C to +100 ° C | 150 cycles, 900 cycles | 0/10, 0/200                       |
| Operating Life                  | T A = +70 ° C                           | 240hr                  | 0/10                              |
| Moisture Resistance             | +20 ° C to +60 ° C, 90% RH              | 240hr                  | 0/10                              |
| Low-Temperature Storage         | -20 ° C                                 | 240hr                  | 0/10                              |
| Low-Temperature Operational     | -10 ° C                                 | 24hr                   | 0/10                              |
| Solderability                   | 8hr steam age                           | -                      | 0/15                              |
| ESD                             | ± 2000V, Human Body Model               | -                      | 0/5                               |
| High-Temperature Operating Life | T J = +150 ° C                          | 168hr                  | 0/45                              |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## UCSP Reliability

The UCSP represents a unique packaging form factor that may not perform equally to a packaged product through traditional mechanical reliability tests. CSP reliability is integrally linked to the user's assembly methods, circuit board material, and usage environment. The user should closely review these areas when considering use of  a  CSP package. Performance through Operating Life Test and Moisture Resistance remains uncompromised as it is primarily determined by the wafer-fabrication process.

Mechanical stress performance is a greater consideration for a CSP package. CSPs are attached through direct solder contact to the user's PC board, foregoing the inherent stress relief of a packaged product lead frame. Solder joint contact integrity must be considered. Table 2 shows the testing done to characterize the CSP reliability performance. In conclusion, the UCSP is capable of performing reliably through environmental stresses as indicated by the results in the table. Additional usage data and recommendations are detailed in the UCSP application note, which can be found on Maxim's website at www.maxim-ic.com .

## Chip Information

TRANSISTOR COUNT: 698

PROCESS TECHNOLOGY: CMOS

## ±15kV ESD-Protected +2.5V to +5.5V RS-232 Transceivers in UCSP and WLP

## Pin Configurations

<!-- image -->

## ±15kV ESD-Protected +2.5V to +5.5V RS-232 Transceivers in UCSP and WLP

## Pin Configurations (continued)

<!-- image -->

## ±15kV ESD-Protected +2.5V to +5.5V RS-232 Transceivers in UCSP and WLP

Package Information .

For the latest package outline information and land patterns, go to www.maxim-ic.com/packages

| PACKAGE TYPE   | PACKAGE CODE   | DOCUMENT NO.   |
|----------------|----------------|----------------|
| 6 x 5 UCSP     | B30-2          | 21-0123        |
| 6 x 5 WLP      | W302A3-2       | 21-0016        |

15

## ±15kV ESD-Protected +2.5V to +5.5V RS-232 Transceivers in UCSP and WLP

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                         | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------|-----------------|
|                 0 | 8/01            | Initial release                     | -               |
|                 1 | 5/04            | Changed output voltage swing spec   | 3               |
|                 2 | 10/08           | Addition of lead-free WLP packaging | 1, 5, 6, 7, 15  |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

16 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600