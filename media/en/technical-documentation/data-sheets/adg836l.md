<!-- lastmod 2020-08-12 -->
<!-- image -->

Data Sheet

## FEATURES

0.5 Ω typical on resistance 0.8 Ω maximum on resistance at 125°C 1.65 V to 3.6 V operation Operating temperature range: -40°C to +125°C Guaranteed leakage specifications up to 125°C High current carrying capability: 300 mA continuous Rail-to-rail switching operation Fast switching times: &lt;20 ns Typical power consumption: &lt;0.1 µW

## APPLICATIONS

Cellular phones PDAs MP3 players Power routing Battery-powered systems PCMCIA cards Modems

Audio and video signal routing

Communication systems

## GENERAL DESCRIPTION

The ADG836L is a low voltage CMOS device containing two independently selectable single-pole, double-throw (SPDT) switches. This device offers ultralow on resistance of less than 0.8 Ω over the full temperature range. The ADG836L is fully specified for 3.3 V, 2.5 V, and 1.8 V supply operation.

Each switch conducts equally well in both directions when on and has an input signal range that extends to the supplies. The ADG836L exhibits break-before-make switching action.

The ADG836L is available in a 10-lead package.

## 0.5 Ω, CMOS, 1.65 V to 3.6 V, Dual SPDT/2:1 Mux

[ADG836L](http://www.analog.com/adg836L?doc=adg836L.pdf)

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

## PRODUCT HIGHLIGHTS

1. Less than 0.8 Ω over full temperature range of -40°C to +125°C.
2. Single 1.65 V to 3.6 V operation.
3. Compatible with 1.8 V CMOS logic.
4. High current handling capability (300 mA continuous current at 3.3 V).
5. Low THD + N (0.02% typical).
6. Small 10-lead MSOP package.

## ADG836L

## TABLE OF CONTENTS

| Features.............................................................................................. 1                                                 | Truth Table ....................................................................................6     |
|----------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| Applications ...................................................................................... 1                                                    | ESD Caution ..................................................................................6       |
| Functional Block Diagram.............................................................. 1                                                                 | Pin Configuration and Function Descriptions .............................7                            |
| General Description......................................................................... 1                                                           | Typical Performance Characteristics .............................................8                    |
| Product Highlights........................................................................... 1                                                          | Test Circuits .................................................................................... 11 |
| Revision History ............................................................................... 2                                                       | Terminology.................................................................................... 13    |
| Specifications .................................................................................... 3                                                    | Outline Dimensions....................................................................... 14          |
| Absolute Maximum Ratings ........................................................... 6                                                                   | Ordering Guide .......................................................................... 14          |
| REVISION HISTORY                                                                                                                                         |                                                                                                       |
| 8/2020-Rev. B to Rev.C                                                                                                                                   | Changes to Table 6............................................................................7       |
| Changes to Table 1........................................................................... 3                                                          | Added Terminology Section......................................................... 13                 |
| Changes to Table 2........................................................................... 4                                                          | Updated Outline Dimensions ...................................................... 14                  |
| Changes to Table 3........................................................................... 5                                                          | Changes to Ordering Guide.......................................................... 14                |
| 6/2016-Rev. Ato Rev. B                                                                                                                                   | 5/2004-Rev. 0 to Rev.A                                                                                |
| Updated Format ................................................................ Universal                                                                | Updated Ordering Guide.............................................................. 14               |
| Change to On Resistance Match Between Channels (∆R ON ) Parameter, Table 1............................................................................ 3 | 4/2004-Revision 0: Initial Version                                                                    |

## SPECIFICATIONS

VDD = 2.7 V to 3.6 V, GND = 0 V, unless otherwise noted. Temperature range for Y version is -40°C to +125°C.

Table 1.

| Parameter                                     | +25°C     | -40°C to +85°C   | -40°Cto+125°C   | Unit          | Test Conditions/Comments                                                                                |
|-----------------------------------------------|-----------|------------------|-----------------|---------------|---------------------------------------------------------------------------------------------------------|
| ANALOG SWITCH                                 |           |                  |                 |               |                                                                                                         |
| Analog Signal Range                           |           |                  | DD              |               | V                                                                                                       |
| On Resistance (R ON )                         | 0.5       |                  | 0 V to V        | V Ωtyp        | DD = 2.7 V V = 2.7 V, V = 0 V to V , I =10mA                                                            |
|                                               | 0.75      | 0.85             | 0.9             | Ωmax          | DD S DD S See Figure 18                                                                                 |
| On Resistance Match Between Channels (∆R ON ) | 0.04      | 0.075            | 0.08            | Ωtyp          | V DD = 2.7 V, V S = 0.65 V, I S =10mA                                                                   |
| On Resistance Flatness (R FLAT (ON) )         | 0.095 0.1 | 0.095            | 0.1             | Ωmax Ωtyp     | V DD = 2.7 V, V S = 0 V to V DD , I S =10mA                                                             |
|                                               | 0.18      | 0.18             | 0.19            | Ωmax          |                                                                                                         |
| LEAKAGE CURRENTS                              |           |                  |                 |               | V DD = 3.6 V                                                                                            |
| Source Off Leakage I S (Off)                  | ±0.2 ±1   | ±10              | ±100            | nA typ nA max | V S = 0.6 V/3.3 V, V D = 3.3 V/0.6 V See Figure 19                                                      |
| Channel On Leakage I D , I S (On)             | ±0.2 ±1   | ±15              | ±120            | nA typ nA max | V S = V D = 0.6 V or 3.3 V (see Figure 20)                                                              |
| DIGITAL INPUTS                                |           |                  |                 |               |                                                                                                         |
| Input High Voltage, V INH                     |           |                  | 2               | V min         |                                                                                                         |
| Input Low Voltage, V INL                      |           |                  | 0.8             | V max         |                                                                                                         |
| Input Current, I INL or I INH                 | 0.005     |                  | ±0.1            | µA typ µA max | V IN = V INL or V INH                                                                                   |
| C IN , Digital Input Capacitance              | 4         |                  |                 | pF typ        |                                                                                                         |
| DYNAMIC CHARACTERISTICS 1                     |           |                  |                 |               |                                                                                                         |
| t ON                                          | 21 26     | 28               | 29              | ns typ ns max | R L = 50 Ω, C L = 35 pF V S = 1.5 V/0 V (see Figure 21)                                                 |
| t OFF                                         | 4         |                  |                 | ns typ        | R L = 50 Ω, C L = 35 pF                                                                                 |
| Break-Before-Make Time Delay (t BBM )         | 7 17      | 8                | 9               | ns max ns typ | V S = 1.5 V (see Figure 21) R L = 50 Ω, C L = 35 pF                                                     |
| Charge Injection                              |           |                  | 5               | ns min pC typ | V S1 = V S2 = 1.5 V (see Figure 22) V S = 1.5 V, R S = 0 Ω, C L = 1 nF                                  |
|                                               | 40        |                  |                 |               | (see Figure 23)                                                                                         |
| Off Isolation                                 | -67       |                  |                 | dB typ        | R L =50Ω,C L =5pF, f =100kHz (see Figure 24)                                                            |
| Channel-to-Channel Crosstalk                  | -90       |                  |                 | dB typ        | S1AtoS2A/S1Bto S2B(see Figure 27), R L = 50 Ω, C L = 5 pF, f = 100 kHz                                  |
| Total Harmonic Distortion (THD + N)           | -67 0.02  |                  |                 | dB typ %      | S1AtoS1B/S2Ato S2B(see Figure 26), R L = 50 Ω, C L = 5 pF, f = 100 kHz R L = 32 Ω, f = 20 Hz to 20 kHz, |
| Insertion Loss                                | -0.05     |                  |                 | dB typ        | V S = 2 V p-p R L = 50 Ω, C L = 5 pF (see Figure 25)                                                    |
| -3 dB Bandwidth                               | 57        |                  |                 | MHz typ       | R L = 50 Ω, C L = 5 pF (see Figure 25)                                                                  |
| C S (Off)                                     | 25        |                  |                 | pF typ        |                                                                                                         |
|                                               |           |                  |                 | pF typ        |                                                                                                         |
| C D , C S (On) POWER REQUIREMENTS             | 75        |                  |                 |               | V DD = 3.6 V                                                                                            |
| I DD                                          | 0.003     | 1                | 4               | µA typ µA max | Digital inputs = 0 V or 3.6 V                                                                           |

## ADG836L

VDD = 2.5 V ± 0.2 V, GND = 0 V, unless otherwise noted. Temperature range for Y version is -40°C to +125°C.

## Table 2.

| Parameter                                     | +25°C       | -40°C to +85°C   | -40°C to +125°C   | Unit          | Test Conditions/Comments                                          |
|-----------------------------------------------|-------------|------------------|-------------------|---------------|-------------------------------------------------------------------|
| ANALOG SWITCH                                 |             |                  |                   |               |                                                                   |
| Analog Signal Range                           |             |                  |                   | V             |                                                                   |
|                                               |             |                  | 0 V to V DD       | Ωtyp          | V DD = 2.3 V, V S = 0 V to V DD , I S =10mA                       |
| On Resistance (R ON )                         | 0.65 0.84   | 0.92             | 1.0               | Ωmax Ωtyp     | See Figure 18                                                     |
| On Resistance Match Between Channels (∆R ON ) | 0.04        |                  |                   |               | V DD = 2.3 V, V S = 0.7 V, I S =10mA                              |
|                                               | 0.1         | 0.1              | 0.105             | Ωmax          |                                                                   |
| FLAT (ON)                                     |             |                  |                   |               |                                                                   |
| On Resistance Flatness (R )                   | 0.16 0.25   | 0.25             | 0.26              | Ωtyp Ωmax     | V DD = 2.3 V, V S = 0 V to V DD , I S =10mA                       |
| LEAKAGE CURRENTS                              |             |                  |                   |               | V DD = 2.7 V                                                      |
| Source Off Leakage I S (Off)                  | ±0.2        | ±4               | ±45               | nA typ nA max | V S = 0.6 V/2.4 V, V D = 2.4 V/0.6 V See Figure 19                |
| D S                                           | ±0.4        |                  |                   |               |                                                                   |
| Channel On Leakage I , I (On)                 | ±0.2 ±0.6   | ±12              | ±90               | nA typ nA max | V S = V D = 0.6 V or 2.4 V (see Figure 20)                        |
| DIGITAL INPUTS                                |             |                  |                   |               |                                                                   |
| Input High Voltage, V INH                     |             |                  | 1.7               | V min         |                                                                   |
| Input Low Voltage, V INL                      |             |                  | 0.7               | V max         |                                                                   |
| Input Current                                 |             |                  |                   |               |                                                                   |
| I INL or I INH                                | 0.005       |                  |                   | µA typ µA max | V IN = V INL or V INH                                             |
| C IN , Digital Input Capacitance              | 4           |                  | ±0.1              | pF typ        |                                                                   |
| DYNAMIC CHARACTERISTICS 1                     |             |                  |                   |               |                                                                   |
| t ON                                          | 23          |                  |                   | ns typ        | R L = 50 Ω, C L = 35 pF                                           |
|                                               | 29          | 30               | 31                | ns max        | V S = 1.5 V/0 V (see Figure 21)                                   |
| t OFF                                         | 5 7         | 8                | 9                 | ns typ ns max | R L = 50 Ω, C L = 35 pF V S = 1.5 V (see Figure 21)               |
| Break-Before-Make Time Delay (t BBM )         | 17          |                  |                   | ns typ        | R L = 50 Ω, C L = 35 pF                                           |
|                                               |             |                  | 5                 | ns min        | V S1 = V S2 = 1.5 V (see Figure 22)                               |
| Charge Injection                              | 30          |                  |                   | pC typ        | V S = 1.25 V, R S = 0 Ω, C L = 1 nF (see Figure 23)               |
| Off Isolation                                 | -67         |                  |                   | dB typ        | R L = 50 Ω, C L = 5 pF, f = 100 kHz (see Figure 24)               |
| Channel-to-Channel Crosstalk                  | -90         |                  |                   | dB typ        | S1AtoS2A/S1Bto S2B;R L =50V,C L =5pF, f = 100 kHz (see Figure 27) |
|                                               | -67         |                  |                   | dB typ        | S1AtoS1B/S2Ato S2B;R L =50Ω,C L =5pF, f = 100 kHz (see Figure 26) |
| Total Harmonic Distortion (THD + N)           | 0.022 -0.06 |                  |                   | %             | R L = 32 Ω, f = 20 Hz to 20 kHz, V S = 1.5 V p-p                  |
| Insertion Loss                                |             |                  |                   | dB typ        | R L = 50 Ω, C L = 5 pF (see Figure 25)                            |
| -3 dB Bandwidth                               | 57          |                  |                   | MHz typ       | R L = 50 Ω, C L = 5 pF (see Figure 25)                            |
| C S (Off)                                     | 25          |                  |                   | pF typ        |                                                                   |
| C D , C S (On)                                | 75          |                  |                   | pF typ        |                                                                   |
| POWER REQUIREMENTS                            |             |                  |                   |               | V DD = 2.7 V                                                      |
| I DD                                          | 0.003       |                  |                   | µA typ        | Digital inputs = 0 V or 2.7                                       |
|                                               |             | 1                | 4                 | µA max        | V                                                                 |

VDD = 1.65 V ± 1.95 V, GND = 0 V, unless otherwise noted. Temperature range for Y version is -40°C to +125°C.

Table 3.

| Parameter                                     | +25°C   | -40°C to +85°C   | -40°C to +125°C   | Unit    | Test Conditions/Comments                                                   |
|-----------------------------------------------|---------|------------------|-------------------|---------|----------------------------------------------------------------------------|
| ANALOG SWITCH                                 |         |                  |                   |         |                                                                            |
| Analog Signal Range                           |         |                  | DD                | V       |                                                                            |
|                                               | 1       |                  | 0 V to V          | Ωtyp    |                                                                            |
| On Resistance (R ON )                         |         |                  |                   |         | V DD = 1.8 V, V S = 0 V to V DD , I S =10mA                                |
|                                               | 1.6     | 2.4              | 2.4               | Ωmax    | See Figure 18                                                              |
|                                               | 2.7     | 4.2              | 4.2               | Ωtyp    | V DD = 1.65 V, V S = 0 V to V DD , I S =10mA                               |
| On Resistance Match Between Channels (∆R ON ) | 0.1     |                  |                   | Ωtyp    | V DD = 1.65 V, V S = 0.7 V, I S =10mA                                      |
| LEAKAGE CURRENTS                              |         |                  |                   |         | V DD = 1.95 V                                                              |
| Source Off Leakage I S (Off)                  | ±0.2    |                  |                   | nA typ  | V S = 0.6 V/1.65 V, V D = 1.65 V/0.6 V                                     |
|                                               | ±0.4    | ±4               | ±25               | nA max  | See Figure 19                                                              |
| Channel On Leakage I D , I S (On)             | ±0.2    |                  |                   | nA typ  | V S = V D = 0.6 V or 1.65 V (see Figure 20)                                |
| Channel On Leakage I D , I S (On)             | ±0.6    | ±10              | ±75               | nA max  |                                                                            |
| DIGITAL INPUTS                                |         |                  |                   |         |                                                                            |
| Input High Voltage, V INH                     |         |                  | 0.65 V DD         | V min   |                                                                            |
| Input Low Voltage, V INL                      |         |                  | 0.35 V DD         | V max   |                                                                            |
| Input Current                                 | 0.005   |                  |                   |         |                                                                            |
| I INL or I INH                                |         |                  |                   | µA typ  | V IN = V INL or V INH                                                      |
| C IN , Digital Input Capacitance              | 4       |                  |                   | pF typ  |                                                                            |
| DYNAMIC CHARACTERISTICS 1                     |         |                  |                   |         |                                                                            |
| t ON                                          | 28      |                  |                   | ns typ  | R L = 50 Ω, C L = 35 pF                                                    |
|                                               | 37      | 38               | 39                | ns max  | V S = 1.5 Ω/0 V (see Figure 21)                                            |
| t OFF                                         | 7       |                  |                   | ns typ  | R L = 50 Ω, C L = 35 pF                                                    |
|                                               | 9       | 10               | 11                | ns max  | V S = 1.5 V (see Figure 21)                                                |
| Break-before-Make Time Delay                  | 21      |                  |                   | ns typ  | R L = 50 Ω, C L = 35 pF                                                    |
| (t BBM )                                      |         |                  | 5                 | ns min  | V S1 = V S2 = 1 V (see Figure 22)                                          |
| Charge Injection                              | 20      |                  |                   | pC typ  | V S =1V,R S =0V,C L =1nF(seeFigure 23)                                     |
| Off Isolation                                 | -67     |                  |                   | dB typ  | R L = 50 Ω, C L = 5 pF, f = 100 kHz, (see Figure 24)                       |
| Channel-to-Channel Crosstalk                  | -90     |                  |                   | dB typ  | S1A to S2A/S1B to S2B; R L = 50 Ω, C L = 5 pF, f = 100 kHz (see Figure 27) |
|                                               | -67     |                  |                   | dB typ  | S1A to S1B/S2A to S2B; R L = 50 Ω, C L = 5 pF, f = 100 kHz (see Figure 26) |
| TotalHarmonic Distortion(THD+N)               | 0.14    |                  |                   | %       | R L = 32 Ω, f = 20 Hz to 20 kHz, V S = 1.2 V p-p                           |
| Insertion Loss                                | -0.08   |                  |                   | dB typ  | R L = 50 Ω, C L = 5 pF (see Figure 25)                                     |
| -3 dB Bandwidth                               | 57      |                  |                   | MHz typ | R L = 50 Ω, C L = 5 pF (see Figure 25)                                     |
| C S (OFF)                                     | 25      |                  |                   | pF typ  |                                                                            |
| C D , C S (On)                                | 75      |                  |                   | pF typ  |                                                                            |
| POWER REQUIREMENTS                            |         |                  |                   |         | V DD = 1.95 V                                                              |
| I DD                                          | 0.003   |                  |                   | µA typ  | Digital inputs = 0 V or 1.95 V                                             |
|                                               |         | 1.0              | 4                 | µA max  |                                                                            |

## ABSOLUTE MAXIMUM RATINGS

TA = 25°C, unless otherwise noted.

## Table 4.

| Parameter                         | Rating                                           |
|-----------------------------------|--------------------------------------------------|
| V DD toGND                        | -0.3 V to +4.6 V                                 |
| Analog Inputs 1                   | -0.3 V to V DD + 0.3 V                           |
| Digital Inputs 2                  | -0.3 V to 4.6 V or 10 mA, whichever occurs first |
| Peak Current, S orD               |                                                  |
| 3.3 V Operation                   | 500mA                                            |
| 2.5 V Operation                   | 460mA                                            |
| 1.8 V Operation                   | 420 mA(pulsed at 1 ms, 10%dutycyclemaximum)      |
| Continuous Current, Sxx or Dx     |                                                  |
| 3.3 V Operation                   | 300mA                                            |
| 2.5 V Operation                   | 275mA                                            |
| 1.8 V Operation                   | 250mA                                            |
| Operating Temperature Range       | -40°C to +125°C                                  |
| Storage Temperature Range         | -65°C to +150°C                                  |
| Junction Temperature              | 150°C                                            |
| MSOP Package                      |                                                  |
| θ JA Thermal Impedance            | 206°C/W                                          |
| θ JC Thermal Impedance            | 44°C/W                                           |
| IR Reflow, PeakTemperature <20sec | 235°C                                            |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## TRUTH TABLE

## Table 5.

|   Logic | SwitchA   | Switch B   |
|---------|-----------|------------|
|       0 | Off       | On         |
|       1 | On        | Off        |

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

Figure 2. Pin Configuration

| Pin No.    | Mnemonic           | Description                                             |
|------------|--------------------|---------------------------------------------------------|
| 1, 5       | IN1, IN2           | Logic Control Inputs.                                   |
| 2, 4, 7, 9 | S1A, S2A, S2B, S1B | Source Terminals. These pins may be an input or output. |
| 3          | GND                | Ground (0 V) Reference.                                 |
| 6, 10      | D2, D1             | Drain Terminals. These pins may be an input or output.  |
| 8          | V DD               | Most Positive Power Supply Potential.                   |

## Table 6. Pin Function Descriptions

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 3. On Resistance vs. VD (VS), VDD = 2.7 V to 3.6 V

<!-- image -->

Figure 4. On Resistance vs. VD (VS), VDD = 2.5 V ± 0.2 V

<!-- image -->

Figure 5. On Resistance vs. VD (VS), VDD = 1.8 V ± to 0.15 V

<!-- image -->

Figure 6. On Resistance vs. VD (VS) for Different Temperatures, VDD = 3.3 V

Figure 7. On Resistance vs. VD (VS) for Different Temperatures, VDD = 2.5 V

<!-- image -->

Figure 8. On Resistance vs. VD (VS) for Different Temperatures, VDD = 1.8 V

<!-- image -->

<!-- image -->

Figure 9. Leakage Current vs. Temperature, VDD = 3.3 V

<!-- image -->

Figure 10. Leakage Current vs. Temperature, VDD = 2.5 V

<!-- image -->

Figure 11. Leakage Current vs. Temperature, VDD = 1.8 V

<!-- image -->

Figure 12. Charge Injection (QINJ) vs. Source Voltage (VS)

<!-- image -->

Figure 13. tON/tOFF Time vs. Temperature

<!-- image -->

<!-- image -->

Figure 15. Off Isolation vs. Frequency

Figure 16. Crosstalk vs. Frequency

<!-- image -->

Figure 17. Total Harmonic Distortion + Noise (THD + N) vs. Frequency

<!-- image -->

## TEST CIRCUITS

<!-- image -->

Figure 18. On Resistance

Figure 21. Switching Times, tON, tOFF

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

Figure 22. Break-Before-Make Time Delay, tBBM

<!-- image -->

NC

VOUT

Figure 23. Charge Injection

<!-- image -->

VS

IN

D

VDD

S1B

S1A

GND

1nF

## ADG836L

Figure 24. Off Isolation

<!-- image -->

Figure 25. Bandwidth

<!-- image -->

## Data Sheet

Figure 26. Channel-to-Channel Crosstalk (S1A to S1B)

<!-- image -->

Figure 27. Channel-to-Channel Crosstalk (S1A to S2A)

<!-- image -->

## TERMINOLOGY

## IDD

Positive supply current.

## VD (VS)

Analog voltage on terminals, D and S.

## RON

Ohmic resistance between terminals, D and S.

## RFLAT (ON)

Flatness is defined as the difference between the maximum and minimum value of on resistance as measured

## ∆RON

On resistance match between any two channels.

## IS (Off)

Source leakage current with the switch off.

## ID (Off)

Drain leakage current with the switch off.

## ID, IS (On)

Channel leakage current with the switch on.

## VINL

Maximum input voltage for Logic 0.

## VINH

Minimum input voltage for Logic 1.

## IINL (IINH)

Input current of the digital input.

## CS (Off)

Off switch source capacitance. Measured with reference to ground.

## CD (Off)

Off switch drain capacitance. Measured with reference to ground.

## CD, CS (On)

On switch capacitance. Measured with reference to ground.

## CIN

Digital input capacitance.

## tON

Delay time between the 50% and the 90% points of the digital input and switch on condition.

## tOFF

Delay time between the 50% and the 90% points of the digital input and switch off condition.

## tBBM

On or off time measured between the 80% points of both switches when switching from one to another.

## Charge Injection

A measure of the glitch impulse transferred from the digital input to the analog output during on-off switching.

## Off Isolation

A measure of unwanted signal coupling through an off switch.

## Crosstalk

A measure of unwanted signal that is coupled through from one channel to another as a result of parasitic capacitance.

## -3 dB Bandwidth

The frequency at which the output is attenuated by 3 dB.

## On Response

The frequency response of the on switch.

## Insertion Loss

The loss due to the on resistance of the switch.

## THD + N

The ratio of the harmonic amplitudes plus noise of a signal, to the fundamental.

## OUTLINE DIMENSIONS

## ORDERING GUIDE

<!-- image -->

091709-A

| Model 1          | Temperature Range   | Package Description                       | Package Option   | Branding   |
|------------------|---------------------|-------------------------------------------|------------------|------------|
| ADG836LYRM       | -40°C to +125°C     | 10-Lead Mini Small Outline Package [MSOP] | RM-10            | SQA        |
| ADG836LYRMZ      | -40°C to +125°C     | 10-Lead Mini Small Outline Package [MSOP] | RM-10            | S1D        |
| ADG836LYRM-REEL7 | -40°C to +125°C     | 10-Lead Mini Small Outline Package [MSOP] | RM-10            | SQA        |

<!-- image -->