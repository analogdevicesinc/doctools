<!-- lastmod 2022-08-05 -->
## General Description

The MAX1193 evaluation kit (EV kit) is a fully assembled and tested circuit board that contains all the components necessary to evaluate the performance of the MAX1191/ MAX1192/MAX1193 dual, 8-bit analog-to-digital converters (ADCs). The MAX1191/MAX1192/MAX1193 accept AC- or DC-coupled, differential, or single-ended analog inputs. The digital output produced by the ADC can be easily captured with a user-provided high-speed logic analyzer or data acquisition system. The EV kit operates from a 3.3V analog and a 2.5V digital power supply. The EV kit includes circuitry that generates a clock signal from an AC sine wave signal provided by the user. The EV kit comes with the MAX1193 installed. Order free samples of the pin-compatible MAX1191 or MAX1192 to evaluate these parts.

## Selector Guide

| PART       |   SPEED (Msps) |
|------------|----------------|
| MAX1191ETI |            7.5 |
| MAX1192ETI |             22 |
| MAX1193ETI |             45 |

| DESIGNATION                                                |   QTY | DESCRIPTION                                                        |
|------------------------------------------------------------|-------|--------------------------------------------------------------------|
| C1-C6, C9, C19, C21-C27, C29, C31, C33, C35, C37, C39, C41 |    22 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C104K   |
| C7, C12, C14, C20                                          |     4 | 1000pF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H102K  |
| C8, C13, C15                                               |     3 | 0.33µF ±10%, 6.3V X5R ceramic capacitors (0603) TDK C1608X5R0J334K |
| C10, C11, C16, C17                                         |     4 | 22pF ±5%, 50V C0G ceramic capacitors (0603) TDK C1608C0G1H220J     |
| C18, C36, C38, C40, C42                                    |     5 | 2.2µF ±10%, 10V tantalum capacitors (A case) AVX TAJA225K010R      |
| C28, C30, C32, C34                                         |     4 | 10µF ±20%, 10V tantalum capacitors (B case) AVX TAJB106M010R       |
| J1                                                         |     1 | Header 2 x 10                                                      |

## MAXIM

<!-- image -->

## Features

- ♦ Up to 45Msps Sampling Rate (MAX1193)
- ♦ Ultra-Low-Power Operation
- ♦ Single-Ended or Fully Differential Input Signal Configuration
- ♦ AC- or DC-Coupled Input Configuration
- ♦ Configurable Reference Voltage
- ♦ On-Board Clock-Shaping Circuit
- ♦ Fully Assembled and Tested
- ♦ Also Evaluates MAX1191 and MAX1192 (IC Replacement Required)

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX1193EVKIT | 0°C to +70°C | 28-Thin QFN  |

Note: To evaluate the MAX1191/MAX1192, request a free sam- ple with the MAX1193 EV kit.

## Component List

| DESIGNATION             |   QTY | DESCRIPTION                                                 |
|-------------------------|-------|-------------------------------------------------------------|
| JU1-JU4, JU7, JU8, JU11 |     7 | 3-pin headers                                               |
| JU5, JU6, JU9, JU10     |     4 | 2-pin headers                                               |
| R1-R4, R18, R31-R40     |    15 | 49.9 Ω ±1% resistors (0603)                                 |
| R5, R6, R41-R44         |     0 | Not installed, resistors (0603)                             |
| R7-R10, R17             |     5 | 2k Ω ±1% resistors (0603)                                   |
| R11-R14                 |     4 | 24.9 Ω ±1% resistors (0603)                                 |
| R15, R20                |     2 | 4.02k Ω ±1% resistors (0603)                                |
| R16                     |     1 | 5k Ω 1/4in potentiometer, 12 turn                           |
| R19                     |     1 | 6.04k Ω ±1% resistor (0603)                                 |
| R21-R30                 |    10 | 100 Ω ±1% resistors (0603)                                  |
| R45, R46                |     0 | Not installed, resistors (0402)                             |
| T1, T2                  |     2 | RF transformers Mini-Circuits TT1-6-KK81                    |
| U1                      |     1 | MAX1193ETI (28-pin TQFN)                                    |
| U2                      |     1 | Dual CMOS differential line receiver (8-pin SO), MAX9113ESA |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX1193 Evaluation Kit

## Component List (continued)

| DESIGNATION                                                                            |   QTY | DESCRIPTION                                                                        |
|----------------------------------------------------------------------------------------|-------|------------------------------------------------------------------------------------|
| U3                                                                                     |     1 | Buffer/drivers tri-state output (48-pin TSSOP) Texas Instruments SN74ALVCH16244DGG |
| C LKIN , D /E _IN A, D /E _IN B, S /E _IN A+ , S /E _IN A- , S /E _IN B+ , S /E _IN B- |     7 | SMA PC-mount connectors                                                            |
| None                                                                                   |    11 | Shunts (JU1-JU11)                                                                  |
| None                                                                                   |     1 | MAX1193 PC board                                                                   |

## Quick Start

## Required Equipment

- DC power supplies: Digital: 2.5V, 100mA

Analog: 3.3V, 200mA

- Function generator with low-phase noise and low jitter for clock input (e.g., HP 8662A)
- Two function generators for analog signal inputs (e.g., HP 8662A)
- Logic analyzer or data-acquisition system (e.g., HP 1673, HP 16500C)
- Analog anti-aliasing filters
- Digital voltmeter

## Procedures

The MAX1193 EV kit is a fully assembled and tested surface-mount board. Follow the steps below for board operation. Do not turn on power supplies or enable function generators until all connections are completed:

- 1) Verify that shunts are installed across pins 2 and 3 of jumpers JU7 and JU8 (fully operational, outputs enabled).
- 2) Verify  that  no  shunts  are  installed  across  jumpers JU9 and JU10.
- 3) Verify that a shunt is installed across pins 1 and 2 of jumper JU11 (internal reference mode).
- 4) Connect the logic analyzer to header J1. Both channel A and channel B data signal are multiplexed on header J1. Control signal A/ B on pin J1-J11 indicates whether data is from channel A (high) or from channel B (low).
- 5) Connect a 3.3V power supply to the VA and VADUT pads. Connect the ground terminal of this supply to the GND pad.
- 6) Connect a 2.5V power supply to the VDB and VODUT pads. Connect the ground terminal of this supply to the OGND pad.
- 7) Turn on both power supplies.
- 8) With a voltmeter, verify that 1.38V is measured across test point TP1 and GND. If the voltage is not 1.38V, adjust potentiometer R16 until 1.38V is obtained.
- 9) Connect the clock function generator to the CLKIN SMA connector.
- 10) Connect the output of the analog signal function generator to the input of the suggested anti-aliasing filters:
- a) To evaluate differential AC-coupled analog signals,  verify  that  shunts  are  installed  on  pins  2 and 3 of jumpers JU1-JU4. Connect the output of the analog anti-aliasing filters to the D/E\_INA and D/E\_INB SMA connectors.
- b) To evaluate single-ended AC-coupled analog signals, verify that shunts are installed on pins 1 and 2 of jumpers JU1-JU6. Verify that resistors R5 and R6 are OPEN. Connect the output of the anti-aliasing  filters  to  the  S/E\_INA+  and S/E\_INB+ SMA connectors.

## Component Suppliers

| SUPPLIER          | PHONE        | FAX          | WEBSITE               |
|-------------------|--------------|--------------|-----------------------|
| AVX               | 843-946-0238 | 843-626-3123 | www.avxcorp.com       |
| Mini-Circuits     | 718-934-4500 | 718-934-7092 | www.minicircuits.com  |
| TDK               | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| Texas Instruments | 972-644-5580 | 214-480-7800 | www.ti.com            |

Note:

Please indicate that you are using the MAX1193 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

- c) To evaluate single-ended DC-coupled analog signals, verify that shunts are installed on pins 1 and 2 of jumpers JU2 and JU3, and no shunts are installed on jumpers JU1, JU4, JU5 and JU6. Remove capacitors C2 and C3 and resistors R2 and R3. Install 0 Ω resistors on the R5 and R6. Connect the outputs of the anti-aliasing filters to the S/E\_INA+ and S/E\_INB+ SMA connectors.
- d) To evaluate differential DC-coupled analog signals,  verify  that  shunts  are  installed  on  pins  1 and 2 of jumpers JU2 and JU3, and no shunts are installed on jumpers JU1, JU4, JU5, and JU6. Remove capacitors C2 and C3 and resistors  R2  and  R3.  Install  0 Ω resistors  on  the  R5 and R6. Connect the outputs of the anti-aliasing filters  to  the  S/E\_INA+/-  and  S/E\_INB+/- SMA connectors.
- 11) Enable the function generators. Set the clock function  generator for  an  output  amplitude of 2.4VP-P (+11.6dBm) and a frequency (fCLK) of ≤ 45MHz. Set the analog input signal generators to the desired output test signal amplitudes and frequencies. The two function generators should be phase locked to each other.
- 12) Channel A data is presented on the falling edge and channel B data is presented on the rising edge of the logic analyzer clock.
- 13) Enable the logic analyzer, and begin collecting data.

## Detailed Description

The MAX1193 EV kit is a fully assembled and tested circuit board that contains all the components necessary to evaluate the performance of the MAX1191/MAX1192/ MAX1193 dual 8-bit ADCs. The ADCs provide the digitized data of their two input channels in multiplexed fashion on a single 8-bit bus. The EV kit comes with the MAX1193 installed, which can be evaluated with a maximum clock frequency (fCLK) of 45MHz. The MAX1193 accepts differential or single-ended analog input signals. With the proper board configuration (as specified below), the input signals can be AC- or DC-coupled.

The EV kit is based on a four-layer PC board design to optimize the performance of the MAX1193. Separate analog and digital power planes minimize noise coupling between analog and digital signals. For simple operation, the EV kit is specified to have 3.3V and 2.5V power supplies applied to analog and digital power planes, respectively.  However, the digital plane can be operated from 1.8V to 3.3V without compromising performance. The logic analyzer's threshold must be adjusted accordingly.

<!-- image -->

## MAX1193 Evaluation Kit

Access to the digital outputs is provided through header  J1  for  channels  A  and  B.  The  0.1in  20-pin  header easily interfaces with a user-provided logic analyzer or data acquisition system.

## Power Supplies

The MAX1193 EV kit requires separate analog and digital power supplies for best performance. A 3.3V power supply is used to power the analog portion of the MAX1193 (VADUT) and the on-board clock-shaping circuit (VA). The MAX1193 analog supply voltage has an operating range of 2.7V to 3.6V. Note that 3.3V must be supplied to the VA pads to meet the minimum supply voltage of the clock-shaping circuit. A separate 2.5V power supply is used to power the digital portion (VODUT and VDB) of the MAX1193 and the buffer/driver (U3); however, it can operate with a supply voltage as low as 1.8V and as high as 3.6V. The digital power-supply voltage must not exceed the analog power-supply voltage.

## Clock

An on-board clock-shaping circuit generates a clock signal from an AC sine-wave signal applied to the CLKIN SMA connector. The input signal should not exceed a magnitude of 2.6VP-P (+12.3dBm). The frequency of the signal should not exceed 45MHz for the MAX1193. The frequency of the sinusoidal input signal determines the sampling frequency of the ADC. Differential line receiver U2 processes the input signal to  generate the CMOS clock signal. The signal's duty cycle can be adjusted with potentiometer R16. A clock signal with a 50% duty cycle (recommended) can be achieved by adjusting R16 until 1.38V (40% of the analog power supply) is produced across test points TP1 and GND when the analog supply voltage is set to 3.3V. The clock signal is available at the header pin J11,  which  can  be  used as a clock source for the logic analyzer. Additionally, the signal pin J1-11 (A/ B )  is  an image of the clock signal.

## Input Signals

The MAX1193 accepts differential or single-ended, ACDC-coupled analog input signals. The EV kit accepts input signals with full-scale amplitude of less than 1.024VP-P (+4dBm). See Table 1 for proper jumper configuration.

Note: When a differential signal is applied to the ADC, the  positive  and  negative  input  pins  of  the  ADC  each receive half of the input signal supplied at SMA connectors D/E\_INA and D/E\_INB with a DC offset voltage of VADUT/2.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1193 Evaluation Kit

Table 1. Single-Ended/Differential, AC-/DC-Coupled Jumper Configuration

| JUMPER        | SHUNT POSITION                                                   | PIN CONNECTION                                                                                                                                | EV KIT OPERATION                              |
|---------------|------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|
| 1 and 2       | INA- pin connected to COM pin through R11                        | Analog input signal is applied to channel A. Single-ended input, AC-coupled. • R5 opened (default)                                            | JU1                                           |
| 1 and 2       | INA+ pin AC-coupled to SMA connector S/E_INA+ through R12 and C2 | Analog input signal is applied to channel A. Single-ended input, AC-coupled. • R5 opened (default)                                            | JU2                                           |
| Installed     | INA+ pin assumes the DC offset at the REFP and REFN common       | Analog input signal is applied to channel A. Single-ended input, AC-coupled. • R5 opened (default)                                            | JU5                                           |
| Not installed | INA- pin assumes no DC offset                                    | Analog input signal is applied to channel A. Single-ended input, DC-coupled. • R5 shorted (0 Ω )) • C2 opened (removed)                       | JU1                                           |
| 1 and 2       | INA+ pin DC-coupled to SMA connector S/E_INA+ through R12 and R5 | Analog input signal is applied to channel A. Single-ended input, DC-coupled. • R5 shorted (0 Ω )) • C2 opened (removed)                       | JU2                                           |
| Not installed | INA+ pin assumes the DC offset from the analog input source      | Analog input signal is applied to channel A. Single-ended input, DC-coupled. • R5 shorted (0 Ω )) • C2 opened (removed)                       | JU5 • R2 opened (removed)                     |
| 2 and 3       | INA- pin connected to low-side of transformer T1 through R11     | Analog input signal is applied to channel A. Differential input, AC-coupled.                                                                  | JU1                                           |
| 2 and 3       | INA+ pin connected to high-side of transformer T1 through R12    | Analog input signal is applied to channel A. Differential input, AC-coupled.                                                                  | JU2                                           |
| Not installed | INA- pin DC-coupled to SMA connector S/E_INA- through R11        | Differential input, DC-coupled. • R5 shorted (0 Ω )) • C2 opened (removed) • R2 opened (removed)                                              | JU1 Analog input signal is applied to channel |
| 1 and 2       | INA+ pin DC-coupled to SMA connector S/E_INA+ through R12 and R5 | Differential input, DC-coupled. • R5 shorted (0 Ω )) • C2 opened (removed) • R2 opened (removed)                                              | JU2                                           |
| Not installed | INA+ pin assumes the DC offset from the analog input source      | Differential input, DC-coupled. • R5 shorted (0 Ω )) • C2 opened (removed) • R2 opened (removed)                                              | JU5                                           |
| 1 and 2       | INB+ pin AC-coupled to SMA connector S/E_INB+ through R13 and C3 | Analog input signal is applied to channel B. Single-ended input, AC-coupled. • R6 opened (default)                                            | JU3                                           |
| 1 and 2       | INB- pin connected to COM pin through R14                        | Analog input signal is applied to channel B. Single-ended input, AC-coupled. • R6 opened (default)                                            | JU4                                           |
| Installed     | INB+ pin assumes the DC offset at the REFP and REFN common       | Analog input signal is applied to channel B. Single-ended input, AC-coupled. • R6 opened (default)                                            | JU6                                           |
| 1 and 2       | INB+ pin DC-coupled to SMA connector S/E_INB+ through R13 and R6 | Analog input signal is applied to channel B. Single-ended input, DC-coupled. • R6 shorted (0 Ω )) • C3 opened (removed) • R3 opened (removed) | JU3                                           |
| Not installed | INB- pin assumes no DC offset                                    | Analog input signal is applied to channel B. Single-ended input, DC-coupled. • R6 shorted (0 Ω )) • C3 opened (removed) • R3 opened (removed) | JU4                                           |
| Not installed | INB+ pin assumes the DC offset from the analog input source      | Analog input signal is applied to channel B. Single-ended input, DC-coupled. • R6 shorted (0 Ω )) • C3 opened (removed) • R3 opened (removed) | JU6                                           |
| 2 and 3       | INB+ pin connected to high side of transformer T1 through R13    | Analog input signal is applied to channel B. Differential input, AC-coupled.                                                                  | JU3                                           |
| 2 and 3       | INB- pin connected to low side of transformer T1 through R14     | Analog input signal is applied to channel B. Differential input, AC-coupled.                                                                  | JU4                                           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1193 Evaluation Kit

Table 1. Single-Ended/Differential, AC-/DC-Coupled Jumper Configuration (continued)

| JUMPER        | SHUNT POSITION                                                   | PIN CONNECTION                                                                                                                               | EV KIT OPERATION   |
|---------------|------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|--------------------|
| 1 and 2       | INB+ pin DC-coupled to SMA connector S/E_INB+ through R13 and R6 | Analog input signal is applied to channel B. Differential input, DC-coupled. • R6 shorted (0 Ω ) • C3 opened (removed) • R3 opened (removed) | JU3                |
| Not installed | INB- pin DC-coupled to SMA connector S/E_INB- through R14        | Analog input signal is applied to channel B. Differential input, DC-coupled. • R6 shorted (0 Ω ) • C3 opened (removed) • R3 opened (removed) | JU4                |
| Not installed | INB+ pin assumes the DC offset from the analog input source      | Analog input signal is applied to channel B. Differential input, DC-coupled. • R6 shorted (0 Ω ) • C3 opened (removed) • R3 opened (removed) | JU6                |

Table 2. Power-Down/Standby/Idle/Operating Mode Configurations

| JUMPER   | SHUNT POSITION                                                           | PIN CONNECTION                                                                                                   | EV KIT OPERATION   |
|----------|--------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|--------------------|
| 1 and 2  | PD0 connected to OGND                                                    | MAX1193 in power-down mode-ADC off, Ref off, output Three-stated                                                 | JU7                |
| 1 and 2  | PD1 connected to OGND                                                    | MAX1193 in power-down mode-ADC off, Ref off, output Three-stated                                                 | JU8                |
| 1 and 2  | PD0 connected to OGND                                                    | MAX1193 in standby mode-ADC off, Ref on, output Three-stated                                                     | JU7                |
| 2 and 3  | PD1 connected to VODUT                                                   | MAX1193 in standby mode-ADC off, Ref on, output Three-stated                                                     | JU8                |
| 2 and 3  | PD0 connected to VODUT                                                   | MAX1193 in idle mode-ADC on, Ref on, output Three-stated                                                         | JU7                |
| 1 and 2  | PD1 connected to OGND                                                    | MAX1193 in idle mode-ADC on, Ref on, output Three-stated                                                         | JU8                |
| 2 and 3  | PD0 connected to VODUT                                                   | MAX1193 in operating mode-ADC on, Ref on, output enabled                                                         | JU7                |
| 2 and 3  | PD1 connected to VODUT                                                   | MAX1193 in operating mode-ADC on, Ref on, output enabled                                                         | JU8                |
| None     | PD0, PD1 pads connected to external control source (TTL/CMOS compatible) | PD0, PD1 = 00; power-down mode PD0, PD1 = 01; standby mode PD0, PD1 = 10; idle mode PD0, PD1 = 11; operting mode | JU7, JU8           |

## Power-Down/Standby/ Idle/Operating Modes

The MAX1193 EV kit also features jumpers that allow the user to enable or disable certain functions of the data converter. Jumpers JU7 and JU8 control the power-down, standby, idle, and operating modes of the MAX1193 EV kit. See Table 2 for jumper settings.

## Reference Modes

The MAX1193 EV kit provides three modes of operation for  the  reference:  internal  reference,  buffered  external reference, and unbuffered external reference modes. In internal  reference  mode, the REFIN pad is connected to  VADUT. In buffered external reference mode, an external user-provided reference voltage of 1.024V may be connected at the REFIN pad. In unbuffered external reference mode, REFIN is connected to GND, and three external reference voltages should be used to drive REFP, REFN, and COM. Jumper JU11 selects the reference modes of the MAX1193 EV kit. See Table 3 for jumper settings.

<!-- image -->

## Table 3. Reference Modes Configuration (Jumper JU11)

| SHUNT POSITION   | REFIN PIN CONNECTION                            | EV KIT OPERATION                                                                    |
|------------------|-------------------------------------------------|-------------------------------------------------------------------------------------|
| 1 and 2          | Connected to VADUT                              | Internal reference mode. V REF = V REFP - V REFN = 0.512V                           |
| 2 and 3          | Connected to GND                                | Unbuffered external reference mode. REFP, REFN, COM pins driven by external sources |
| None             | Connected to external reference source (1.024V) | Buffered external reference mode. V REF = V REFP - V REFN = 0.512V                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1193 Evaluation Kit

## Digital Output Format

The MAX1193 features a single 8-bit, multiplex CMOScompatible digital output bus. Channel A is available at the  output  during  A/ B high.  Channel B is available at the output during A/ B low. The channel selection signal (A/ B ) is an image of the clock that may be used to synchronize the output data. Refer to the MAX1193 data sheet for more information.

A driver is used to buffer the ADC's digital outputs. This buffer is able to drive large capacitive loads, which may be present at the logic analyzer connection, without compromising the digital output signals. The outputs of the buffers are connected to header J1 located on the right side of the EV kit, where the user can connect a logic analyzer or data-acquisition system. See Table 4 for channel and bit locations on header J1.

All  even-number pins on header J1 are connected to OGND.

Table 4. Header J1 Output Bit Location (Multiplexed Output Operation)

| CHANNEL             |   A/ B | BIT D0   | BIT D1   | BIT D2   | BIT D3   | BIT D4   | BIT D5   | BIT D6   | BIT D7   |
|---------------------|--------|----------|----------|----------|----------|----------|----------|----------|----------|
| A (CLK barb2down )* |      1 | J1-3 A0  | J1-5 A1  | J1-7 A2  | J1-9 A3  | J1-13 A4 | J1-15 A5 | J1-17 A6 | J1-19 A7 |
| B (CLK barb2up )*   |      0 | J1-3 B0  | J1-5 B1  | J1-7 B2  | J1-9 B3  | J1-13 B4 | J1-15 B5 | J1-17 B6 | J1-19 B7 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1193 Evaluation Kit

Figure 1. MAX1193 EV Kit Schematic

<!-- image -->

MAXIM

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1193 Evaluation Kit

Figure 2. MAX1193 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1193 Evaluation Kit

Figure 3. MAX1193 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1193 Evaluation Kit

Figure 4. MAX1193 EV Kit PC Board Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1193 Evaluation Kit

<!-- image -->

Figure 5. MAX1193 EV Kit PC Board Layout-Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1193 Evaluation Kit

Figure 6. MAX1193 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1193 Evaluation Kit

Figure 7. MAX1193 EV Kit Component Placement Guide-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.