<!-- lastmod 2022-08-05 -->
## General Description

The MAX1198 evaluation kit (EV kit) is a fully assembled and tested circuit board that contains all the components necessary  to  evaluate  the  performance  of  the MAX1195-MAX1198 dual 8-bit analog-to-digital converters (ADCs). The MAX1195-MAX1198 accept differential or single-ended analog inputs and the EV kit allows for evaluation of each ADC with both types of inputs from one single-ended analog signal. The digital output produced by the ADC can be easily sampled with a userprovided high-speed logic analyzer or data-acquisition system. The EV kit operates from 3.3V and 2.5V (MAX1198) power supplies. It includes circuitry that generates a clock signal from an AC signal provided by the user. The EV kit comes with the MAX1198 installed. Order free samples of the pin-compatible MAX1195, MAX1196, or MAX1197 to evaluate these parts.

## Selector Guide

| PART        | SPEED (Msps)           |
|-------------|------------------------|
| MAX1198ECM  | 100                    |
| MAX1197ECM  | 60                     |
| MAX1195ECM  | 40                     |
| MAX1196ECM* | 40, multiplexed output |

| DESIGNATION                                                                           |   QTY | DESCRIPTION                                                                                |
|---------------------------------------------------------------------------------------|-------|--------------------------------------------------------------------------------------------|
| C1-C5, C7, C9, C11, C16-C19, C21, C23, C27, C31, C33, C34, C36-C39, C42-C49, C51, C52 |    32 | 0.1µF ±10%, 16V ceramic capacitors (0603) Taiyo Yuden EMK107BJ104KA or TDK C1608X7R1C104KT |
| C6, C50                                                                               |     0 | Not installed (0603)                                                                       |
| C8, C10, C20, C22, C26, C32, C35, C40, C41                                            |     9 | 2.2µF ±10%, 10V tantalum capacitors (A case) AVX TAJA225K010R or Kemet T494A225K010AS      |
| C12-C15                                                                               |     4 | 10µF ±20%, 10V tantalum capacitors (B case) AVX TAJB106M010 or Kemet T494B106K010AS        |
| C24, C25, C28, C29                                                                    |     4 | 22pF ± 5%, 50V ceramic capacitors (0603) Murata GRM39COHG220J050AD or TDK C1608COG1H220JT  |

<!-- image -->

## Features

- ♦ Up to 100Msps Sampling Rate with MAX1198
- ♦ Low-Voltage and Low-Power Operation
- ♦ Single-Ended or Fully Differential Signal Input Configuration
- ♦ Clock-Shaping Circuit
- ♦ Fully Assembled and Tested
- ♦ Supports Both Nonmultiplexed (MAX1195, MAX1197, MAX1198) and Multiplexed (MAX1196) Output Operation

## Ordering Information

| PART         | TEMP RANGE       | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX1198EVKIT | 0 ° C to +70 ° C | 48 TQFP-EP** |

** EP = Exposed paddle.

Note: To evaluate the MAX1195/MAX1196/MAX1197, request a free sample with the MAX1198 EV kit.

## Component List

| DESIGNATION                               |   QTY | DESCRIPTION                                                                               |
|-------------------------------------------|-------|-------------------------------------------------------------------------------------------|
| C30                                       |     1 | 1000pF ±10%, 50V ceramic capacitor (0603) TDK C1608X7R1H102KT or Murata GRM39X7R102K050AD |
| J1                                        |     1 | 2 × 25-pin header                                                                         |
| JU1-JU8                                   |     8 | 3-pin headers                                                                             |
| L1, L2                                    |     2 | Ferrite chip beads, 90 Ω at 100MHz (1206) Fair-Rite Products Corp. 2512069007Y0           |
| R1, R6, R19, R29, R30, R49, R59, R60, R69 |     0 | Not installed (0603)                                                                      |
| R2-R5, R35, R51-R58, R61-R68, R70, R71    |    26 | 49.9 Ω ±1% resistors (0603)                                                               |
| R7                                        |     1 | 0 Ω ±5% resistor (0603)                                                                   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX1198 Evaluation Kit

## Component List (continued)

| DESIGNATION                               |   QTY | DESCRIPTION                                                                                                  |
|-------------------------------------------|-------|--------------------------------------------------------------------------------------------------------------|
| R8, R21-R28, R41-R48, R50                 |    21 | 100 Ω ±1% resistors (0603)                                                                                   |
| R9, R10, R13, R14, R36                    |     5 | 2k Ω ±1% resistors (0603)                                                                                    |
| R11                                       |     1 | 6.04k Ω ±1% resistor (0603)                                                                                  |
| R12, R37                                  |     2 | 4.02k Ω ±1% resistors (0603)                                                                                 |
| R15-R18                                   |     4 | 24.9 Ω ±1% resistors (0603)                                                                                  |
| R20                                       |     1 | 10k Ω ±1% resistor (0603)                                                                                    |
| R31, R32, R33                             |     0 | Not installed (0805)                                                                                         |
| R34                                       |     1 | 5k Ω 12-turn potentiometer                                                                                   |
| R38                                       |     1 | 3.9 Ω ±5% resistor (0805)                                                                                    |
| S/E_INA, D/E_INA, S/E_INB, D/E_INB, CLOCK |     5 | SMA PC-mount connectors                                                                                      |
| T1, T2                                    |     2 | RF transformers Mini-Circuits TT1-6-KK81                                                                     |
| U1                                        |     1 | MAX1198ECM (48-pin TQFP-EP)                                                                                  |
| U2                                        |     1 | Dual CMOS differential line receiver (8-pin SO) MAX9113ESA                                                   |
| U3, U4                                    |     2 | Buffers/drivers 3-state output (48-pin TSSOP) Texas Instruments SN74ALVCH16244DGG or Pericom PI74ALVCH16244A |
| None                                      |     8 | Shunts (JU1-JU8)                                                                                             |
| None                                      |     1 | MAX1198 EV kit PC board                                                                                      |
| None                                      |     1 | MAX1198 data sheet                                                                                           |
| None                                      |     1 | MAX1198 EV kit data sheet                                                                                    |

## Quick Start

## Recommended Equipment

- DC power supplies a) Digital: 2.5V, 100mA b) Analog: 3.3V, 200mA
- Function generator with low-phase noise and low jitter for clock input (e.g., HP8662A)
- Function generators for analog signal inputs (e.g., HP8662A)
- Logic analyzer or data-acquisition system (e.g., HP1663EP, HP16500C)

## Procedure

The MAX1198 EV kit is a fully assembled and tested surface-mount board. Follow the steps below for board operation. Do not turn on power supplies or enable function generators until all connections are completed.

- 1) Verify that shunts are installed across pins 2 and 3 of  jumpers JU5 (offset binary digital output), JU6 (normal operation), JU7 (MAX1198 enabled), and JU8 (outputs enabled).
- 2) Connect the clock function generator to the CLOCK SMA connector.
- 3) Connect the output of the analog signal function generator to the input of the bandpass filter.
- 4) a) To evaluate differential analog signals on channel  A,  verify  that  shunts  are  installed  on  pins  2 and 3 of jumpers JU1 and JU2. Connect the output of the analog bandpass filter to the D/E\_INA SMA connector. For single-ended analog signal evaluation on channel A, verify that shunts are installed  on  pins  1  and  2  of  jumpers  JU1  and JU2, and connect the output of the bandpass filter to the S/E\_INA SMA connector.
- b) To evaluate differential analog signals on channel B, verify that shunts are installed on pins 2 and 3 of jumpers JU3 and JU4. Connect the output of the analog bandpass filter to the D/E\_INB  SMA connector. For single-ended analog signal evaluation on channel B, verify that shunts are installed on pins 1 and 2 of jumpers JU3 and JU4, and connect the output of the bandpass filter to the S/E\_INB SMA connector.

Note: Both channels can be operated independently or simultaneously.

- 5) Connect the logic analyzer to the header (J1). For nonmultiplexed output operation, channel A (channel B) data is captured on J1-1 (J1-27) through J115 (J1-41). If evaluating the multiplexed outputs of the MAX1196, channel A and channel B data is captured on a single 8-bit bus (J1-1 through J1-15) and the A/B indicator signal can be monitored on J1-23 (see Table 4 for bit locations and J1 header designations). The system clock for both multiplexed and nonmultiplexed output operation is available on pin J1-43.
- 6) Connect a 3.3V, 200mA power supply to VA and VADUT. Connect the ground terminal of this supply to AGND.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

- Analog bandpass filters (e.g., TTE elliptical function bandpass filter Q56 series)
- Digital voltmeter

## MAX1198 Evaluation Kit

## Component Suppliers

| SUPPLIER           | PHONE        | FAX          | WEBSITE               |
|--------------------|--------------|--------------|-----------------------|
| AVX                | 843-946-0238 | 843-626-3123 | www.avxcorp.com       |
| Fair-Rite Products | 845-895-2055 | 845-895-2629 | www.fair-rite.com     |
| Kemet              | 864-963-6300 | 864-963-6322 | www.kemet.com         |
| Mini-Circuits      | 718-934-4500 | 718-332-4661 | www.minicircuits.com  |
| Pericom            | 800-435-2336 | 408-435-0800 | www.pericom.com       |
| Taiyo Yuden        | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK                | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| Texas Instruments  | 972-644-5580 | 214-480-7800 | www.ti.com            |

Note: Please indicate that you are using the MAX1198 when contacting these component suppliers.

- 7) Connect a 2.5V, 100mA power supply to VD and VDDUT. Connect the ground terminal of this supply to DGND.
- 8) Turn on both power supplies.
- 9) With a voltmeter, verify that 1.32V is measured across test points TP1 and TP2. If the voltage is not 1.32V, adjust potentiometer R34 until 1.32V is obtained.
- 10) Enable the function generators. Set the clock function  generator for an output amplitude of 2.4VP-P and clock frequency ≤ 100MHz. Set the analog input signal generators for an output amplitude ≤ 2VP-P and to the desired input frequency. The two function generators should be phase-locked to each other.
- 11) For nonmultiplexed output operation, set the logic analyzer to capture on the clock's rising edge. In multiplexed output operation mode, channel A data is presented on the falling edge and channel B data is presented on the rising edge of the logic analyzer clock.
- 12) Enable the logic analyzer.
- 13) Collect data using the logic analyzer.

## Detailed Description

The MAX1198 EV kit is a fully assembled and tested circuit  board that contains all the components necessary to evaluate the performance of the MAX1195-MAX1198, dual  8-bit  ADCs.  The  MAX1195,  MAX1197,  and MAX1198 are dual-output, nonmultiplexed ADCs, where data is captured on two separate 8-bit bus lines. The MAX1196 provides digitized data of the two input channels in multiplexed fashion on a single 8-bit bus. The EV kit  comes with the MAX1198, which can be evaluated with a maximum clock frequency of 100MHz. The MAX1198 accepts differential or single-ended analog input signals. With the proper board configuration (as specified below), the ADC can be evaluated with both types of i nputs by supplying only one single-ended analog signal to the EV kit.

<!-- image -->

The EV kit was designed as a four-layer PC board to optimize the performance of the MAX1198. Separate analog and digital power planes minimize noise coupling between analog and digital signals. For simple operation, the EV kit is specified to have 3.3V and 2.5V power supplies applied to analog and digital power planes, respectively. However, the digital plane can be operated down to 1.7V without compromising performance. The logic analyzer's threshold must be adjusted accordingly.

Access to the outputs, channel A and channel B, is provided through connector J1. The 50-pin connector easily interfaces directly with a user-provided logic analyzer or data-acquisition system.

## Power Supplies

The MAX1198 EV kit requires separate analog and digital power supplies for best performance. A 3.3V power supply is used to power the analog portion of the MAX1198 and the clock signal circuit. The MAX1198 analog supply voltage has a range of 2.7V to 3.6V; however, 3.3V must be supplied to the EV kit (VADUT, VA) to meet the minimum input voltage supply to the clock shaping circuit. A separate 2.5V power supply is used to power the digital portion (VDDUT, VD) of the MAX1198 and the buffer/driver; however, it operates with  a  voltage  supply  as  low  as  1.7V  and  as  high  as 3.6V. Enhanced dynamic performance is achieved when the digital supply voltage is lower than the analog supply voltage.

## Clock

An on-board clock-shaping circuit generates a clock signal from a sine-wave signal applied to the CLOCK SMA connector. The input signal should not exceed an

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1198 Evaluation Kit

amplitude of 2.6VP-P. The frequency of the signal should not exceed 100MHz for the MAX1198. The clock frequency of the sinusoidal input signal determines the sampling frequency of the ADC. A differential line receiver (U2) processes the input signal to generate the CMOS clock signal. The signal's duty cycle can be adjusted with potentiometer R34. A clock signal with a 50% duty cycle (recommended) can be achieved by adjusting R34 until 1.32V (40% of the analog power supply) is produced across test points TP1 and TP2 when the analog voltage supply is set to 3.3V. The clock signal is available at the J1-43 pin (CK), which can be used as a clock source to the logic analyzer.

## Input Signal

The MAX1198 accepts differential or single-ended analog input signals applied to channels A or B. However, the EV kit requires only single-ended analog input signals, with an amplitude of less than 2VP-P provided by the user. During single-ended operation, the signal is applied directly to the ADC, while in differential mode, an onboard transformer converts the single-ended analog input to a differential analog signal for the ADCs differential input pins. To evaluate single-ended performance, connect the input signal to the S/E\_INA (channel A) or S/E\_INB (channel B) SMA connectors. To evaluate differential performance, connect the input signal to the D/E\_INA (channel A) or D/E\_INB (channel B) SMA connectors. For single-ended or differential operation, see Table 1 for jumper configuration.

Note: When a differential signal is applied to the ADC, positive and negative input pins receive half of the supplied input signal, with an offset voltage of VADUT/2.

## Enable/Power-Down/Sleep Modes

The MAX1198 EV kit also features jumpers that allow the user to enable or disable functions of the data converter.  Jumper JU6 controls the sleep mode, jumper JU7 controls full power-down mode, and jumper JU8 controls the outputs enable/disable mode. See Table 2 for jumper settings.

## Reference Voltage

The MAX1198 requires an input voltage reference at the REFIN pin to set the full-scale analog signal voltage input. The stable on-chip voltage reference of 2.048V can be accessed at REFOUT. The EV kit was designed to use the on-chip voltage reference by connecting REFIN to REFOUT through resistor R20. The user can externally adjust the reference level, and hence the full-scale range, by installing a resistor at the R19 pad (located on the board's component side). The adjusted reference level can be calculated by applying the following equation:

<!-- formula-not-decoded -->

where R19 is the value of the resistor installed, R20 is a 10k Ω resistor, and VREFOUT is 2.048V. Alternatively, the user can apply a stable, low-noise, external voltage reference directly at the REFIN pad to set the full-scale range.

## Digital Output Format

The MAX1198 features two 8-bit, parallel, CMOS-compatible, digital outputs (channels A and B). The digital output coding can be chosen to be either in two's complement format or straight offset binary format by configuring jumper JU5. See Table 3 for jumper configuration.

Two drivers buffer the ADC's channel A and B digital outputs. Each buffer is able to drive large capacitive loads, which can be present at the logic analyzer connection, without compromising the digital output signal. The outputs of the buffers are connected to a 50-pin header (J1) located on the right side of the EV kit, where the user can connect a logic analyzer or data-acquisition system. See Table 4 for channel and bit location on header J1.

## Table 1. Single-Ended/Differential Operation Jumper Configuration

| JUMPER   | SHUNT POSITION   | PIN CONNECTION                                                                | EV KIT OPERATION                                                     |
|----------|------------------|-------------------------------------------------------------------------------|----------------------------------------------------------------------|
| JU1, JU2 | 1 and 2          | INA+ pin connected to SMA connector S/E_INA and INA- pin connected to COM pin | Analog input signal is applied to channel A as a single-ended input. |
| JU1, JU2 | 2 and 3          | INA+ and INA- pins connected to transformer T1                                | Analog input signal is applied to channel A as a differential input. |
| JU3, JU4 | 1 and 2          | INB+ pin connected to SMA connector S/E_INB and INB- pin connected to COM pin | Analog input signal is applied to channel B as a single-ended input. |
| JU3, JU4 | 2 and 3          | INB+ and INB- pins connected to transformer T2                                | Analog input signal is applied to channel B as a differential input. |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1198 Evaluation Kit

Table 2. Output Enable/Power-Down/Sleep-Mode Configuration

| JUMPER   | SHUNT POSITION   | PIN CONNECTION           | EV KIT OPERATION                                       |
|----------|------------------|--------------------------|--------------------------------------------------------|
| JU6      | 1 and 2          | SLEEP connected to VDDUT | MAX1198 is disabled except for the internal reference. |
| JU6      | 2 and 3          | SLEEP connected to DGND  | MAX1198 in normal operation mode.                      |
| JU7      | 1 and 2          | PD connected to VDDUT    | MAX1198 is powered down.                               |
| JU7      | 2 and 3          | PD connected to DGND     | MAX1198 in normal operation mode.                      |
| JU8      | 1 and 2          | OE connected to VDDUT    | Digital outputs disabled.                              |
| JU8      | 2 and 3          | OE connected to DGND     | Digital outputs enabled.                               |

## Table 3. Output Format

| JUMPER   | SHUNT POSITION   | MAX1198 T/B PIN    | OPERATION                                |
|----------|------------------|--------------------|------------------------------------------|
| JU5      | 1 and 2          | Connected to VDDUT | Digital output in two's complement       |
| JU5      | 2 and 3          | Connected to DGND  | Digital output in straight offset binary |

Table 4. Output Bit Location (Nonmultiplexed/Multiplexed Output Operation)

| CHANNEL                         | A/B STATE                       | BIT D0                          | BIT D1                          | BIT D2                          | BIT D3                          | BIT D4                          | BIT D5                          | BIT D6                          | BIT D7                          |
|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|
| NONMULTIPLEXED OUTPUT OPERATION | NONMULTIPLEXED OUTPUT OPERATION | NONMULTIPLEXED OUTPUT OPERATION | NONMULTIPLEXED OUTPUT OPERATION | NONMULTIPLEXED OUTPUT OPERATION | NONMULTIPLEXED OUTPUT OPERATION | NONMULTIPLEXED OUTPUT OPERATION | NONMULTIPLEXED OUTPUT OPERATION | NONMULTIPLEXED OUTPUT OPERATION | NONMULTIPLEXED OUTPUT OPERATION |
| A CLK ↑                         | N/A                             | J1-15 A0                        | J1-13 A1                        | J1-11 A2                        | J1-9 A3                         | J1-7 A4                         | J1-5 A5                         | J1-3 A6                         | J1-1 A7                         |
| B CLK ↑                         | N/A                             | J1-27 B0                        | J1-29 B1                        | J1-31 B2                        | J1-33 B3                        | J1-35 B4                        | J1-37 B5                        | J1-39 B6                        | J1-41 B7                        |
| MULTIPLEXED OUTPUT OPERATION*   | MULTIPLEXED OUTPUT OPERATION*   | MULTIPLEXED OUTPUT OPERATION*   | MULTIPLEXED OUTPUT OPERATION*   | MULTIPLEXED OUTPUT OPERATION*   | MULTIPLEXED OUTPUT OPERATION*   | MULTIPLEXED OUTPUT OPERATION*   | MULTIPLEXED OUTPUT OPERATION*   | MULTIPLEXED OUTPUT OPERATION*   | MULTIPLEXED OUTPUT OPERATION*   |
| A CLK ↓                         | 1                               | J1-15 A0                        | J1-13 A1                        | J1-11 A2                        | J1-9 A3                         | J1-7 A4                         | J1-5 A5                         | J1-3 A6                         | J1-1 A7                         |
| B CLK ↑                         | 0                               | J1-15 A0                        | J1-13 A1                        | J1-11 A2                        | J1-9 A3                         | J1-7 A4                         | J1-5 A5                         | J1-3 A6                         | J1-1 A7                         |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1198 Evaluation Kit

Figure 1. MAX1198 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1198 Evaluation Kit

<!-- image -->

Figure 1. MAX1198 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evaluates: MAX1195-MAX1198

## MAX1198 Evaluation Kit

Figure 2. MAX1198 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX1198 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 4. MAX1198 EV Kit PC Board Layout-Ground Planes

<!-- image -->

## MAX1198 Evaluation Kit

Figure 5. MAX1198 EV Kit PC Board Layout-Power Planes

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evaluates: MAX1195-MAX1198

## Evaluates: MAX1195-MAX1198

## MAX1198 Evaluation Kit

Figure 6. MAX1198 EV Kit PC Board Layout-Solder Side

<!-- image -->

Figure 7. MAX1198 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

10

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600