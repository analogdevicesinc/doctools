<!-- lastmod 2019-11-14 -->
<!-- image -->

## Enhanced Product

## FEATURES

8 software-programmable output ranges: 0 V to 5 V, 0 V to 10 V, 0 V to 16 V, 0 V to 20 V, -2.5 V to +7.5 V, ±3 V, ±5 V, and ±10 V; 5% overrange

Low drift 2.5 V reference: ±7 ppm/°C typical TUE: ±0.1% FSR maximum 16-bit relative accuracy (INL): ±8 LSB maximum Guaranteed monotonicity (DNL): ±1 LSB maximum Single channel, 16-bit DAC Output voltage settling time

7.5 µs typical, 10 V step to 1 LSB at 16-bit resolution Integrated reference buffers Low noise: 35 nV/√Hz (±3 V range) Low glitch: 1 nV-sec (0 V to 5 V range) 1.7 V to 5.5 V digital supply range (DVCC) Asynchronous updating via LDAC Asynchronous RESET to zero scale/midscale DSP-/microcontroller-compatible serial interface Robust 4 kV HBM ESD rating 16-lead TSSOP package

Operating temperature range: -55°C to +125°C

## ENHANCED PRODUCT FEATURES

Supports defense and aerospace applications (AQEC standard)

Military temperature range: -55°C to +125°C Controlled manufacturing baseline 1 assembly/test site 1 fabrication site Enhanced product change notification Qualification data available on request

## APPLICATIONS

Industrial automation Instrumentation, data acquisition Open-/closed-loop servo control, process control Programmable logic controllers

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

Figure 1.

## Multiple Range, 16-Bit, Bipolar/Unipolar Voltage Output DAC with 7 ppm/°C Reference

[AD5761R-EP](http://analog.com/ad5761r?doc=AD5761R-EP.pdf)

## [Document Feedback](https://form.analog.com/Form_Pages/feedback/documentfeedback.aspx?doc=AD5761R-EP.pdf&product=AD5761R-EP&rev=0)

## GENERAL DESCRIPTION

The AD5761R-EP is a single-channel, 16-bit serial input, voltage output, digital-to-analog converter (DAC). It operates from single-supply voltages from 4.75 V to 30 V VDD or dual supply voltages from -16.5 V to 0 V VSS and 4.75 V to 16.5 V VDD. The integrated output amplifier, reference buffer, and reference provide an easy to use, universal solution.

The device offers guaranteed monotonicity, integral nonlinearity (INL) of ±8 LSB maximum, 35 nV/√Hz noise, and a 7.5 µs settling time on selected ranges.

The AD5761R-EP uses a serial interface that operates at clock rates of up to 50 MHz and is compatible with digital signal processor (DSP) and microcontroller interface standards. Double buffering allows the asynchronous updating of the DAC output. The input coding is user selectable, twos complement or straight binary. The asynchronous reset function resets all registers to their default state. The output range is user selectable via the RA[2:0] bits in the control register.

The device is available in a 16-lead TSSOP package, and it offers guaranteed specifications over the -55°C to +125°C military temperature range.

Additional application and technical information can be found in the AD5761R data sheet.

## AD5761R-EP

## TABLE OF CONTENTS

| Features .............................................................................................. 1   |
|-------------------------------------------------------------------------------------------------------------|
| Enhanced Product Features ............................................................ 1                    |
| Applications....................................................................................... 1       |
| General Description......................................................................... 1              |
| Functional Block Diagram .............................................................. 1                   |
| Revision History ............................................................................... 2          |
| Specifications..................................................................................... 3       |
| AC Performance Characteristics ................................................ 6                           |

## REVISION HISTORY

3/2017-Revision 0: Initial Version

| Absolute Maximum Ratings ............................................................7          |    |
|-------------------------------------------------------------------------------------------------|----|
| ESD Caution...................................................................................7 |    |
| Pin Configuration and Function Descriptions..............................8                      |    |
| Typical Performance Characterstics ...............................................9             |    |
| Outline Dimensions.......................................................................       | 11 |
| Ordering Guide ..........................................................................       | 11 |

## SPECIFICATIONS

VDD 1 = 4.75 V to 30 V , VSS 1 = -16.5 V to 0 V, AGND = DGND = 0 V, VREFIN/VREFOUT = 2.5 V external, DVCC = 1.7 V to 5.5 V , RLOAD = 1 kΩ for all ranges except 0 V to 16 V and 0 V to 20 V for which RLOAD = 2 kΩ, CLOAD = 200 pF, and all specifications TMIN to TMAX, unless otherwise noted. Temperature range: -55°C to +125°C, typical at +25°C.

Table 1.

| Parameter                                 | Min        | Typ   | Max        | Unit       | Test Conditions/Comments                                                        |
|-------------------------------------------|------------|-------|------------|------------|---------------------------------------------------------------------------------|
| STATIC PERFORMANCE                        |            |       |            |            | External reference 2 and internal reference, outputs unloaded                   |
| Programmable Output Ranges                | 0          |       | 5          | V          |                                                                                 |
|                                           | 0          |       | 10         | V          |                                                                                 |
|                                           | 0          |       | 16         | V          |                                                                                 |
|                                           | 0          |       | 20         | V          |                                                                                 |
|                                           | -2.5       |       | +7.5       | V          |                                                                                 |
|                                           | -3         |       | +3         | V          |                                                                                 |
|                                           | -5         |       | +5         | V          |                                                                                 |
|                                           | -10        |       | +10        | V          |                                                                                 |
| Resolution                                | 16         |       |            | Bits       |                                                                                 |
| Relative Accuracy (INL)                   | -8         |       | +8         | LSB        | External reference 2 and internal reference                                     |
| Differential Nonlinearity (DNL)           | -1         |       | +1         | LSB        |                                                                                 |
| Zero-Scale Error                          | -6         |       | +6         | mV         | All ranges except ±10V and 0V to 20V, external reference 2                      |
|                                           | -10        |       | +10        | mV         | 0V to 20V, ±10V ranges, external reference 2                                    |
|                                           | -6         |       | +6         | mV         | All ranges except ±5V, ±10V, and 0V to 20V, internal reference                  |
|                                           | -8         |       | +8         | mV         | ±5V range, internal reference                                                   |
|                                           | -9         |       | +9         | mV         | 0V to 20V range, internal reference                                             |
|                                           | -13        |       | +13        | mV         | ±10V range, internal reference                                                  |
| Zero-Scale Temperature Coefficient (TC) 3 |            | ±5    |            | µV/°C      | Unipolar ranges, external reference 2 and internal reference                    |
|                                           |            | ±15   |            | µV/°C      | Bipolar ranges, external reference 2 and internal reference                     |
| Bipolar Zero Error                        | -5         |       | +5         | mV         | All bipolar ranges except ±10V                                                  |
|                                           | -7         |       | +7         | mV         | ±10V output range                                                               |
| Bipolar ZeroTC 3                          |            | ±2    |            | µV/°C      | ±3V range, external reference 2 and internal reference                          |
|                                           |            | ±5    |            | µV/°C      | All bipolar ranges except ±3Vrange, external reference 2 and internal reference |
| Offset Error                              | -6         |       | +6         | mV         | All ranges except ±10V and 0V to 20V, external reference 2                      |
|                                           | -10        |       | +10        | mV         | 0V to 20V, ±10V ranges, external reference 2                                    |
|                                           | -6         |       | +6         | mV         | All ranges except ±5V, ±10V, and 0V to 20V; internal reference                  |
|                                           | -8         |       | +8         | mV         | ±5V range, internal reference                                                   |
|                                           | -9         |       | +9         | mV         | 0V to 20V range, internal reference                                             |
|                                           | -18        |       | +18        | mV         | ±10V range, internal reference                                                  |
| Offset Error TC 3                         |            | ±5    |            | µV/°C      | Unipolar ranges, external reference 2 and internal reference                    |
|                                           |            | ±15   |            | µV/°C      | Bipolar ranges, external reference 2 and internal reference                     |
| Gain Error                                | -0.1       |       | +0.1       | %FSR       | External reference 2                                                            |
|                                           | -0.15      |       | +0.15      | %FSR       | Internal reference                                                              |
| Gain Error TC 3                           |            | ±1.5  |            | ppm FSR/°C | External reference 2 and internal reference                                     |
| Total Unadjusted Error (TUE)              | -0.1 -0.15 |       | +0.1 +0.15 | %FSR %FSR  | External reference 2 Internal reference                                         |

## AD5761R-EP

## Enhanced Product

| Parameter                        | Min         | Typ   | Max         | Unit       | Test Conditions/Comments                                                                                                      |
|----------------------------------|-------------|-------|-------------|------------|-------------------------------------------------------------------------------------------------------------------------------|
| REFERENCE INPUT (EXTERNAL) 3     |             |       |             |            |                                                                                                                               |
| Reference Input Voltage (V REF ) |             | 2.5   |             | V          | ±1%for specified performance                                                                                                  |
| Input Current                    | -2          | ±0.5  | +2          | µA         |                                                                                                                               |
| Reference Range                  | 2           |       | 3           | V          |                                                                                                                               |
| REFERENCE OUTPUT (INTERNAL) 3    |             |       |             |            |                                                                                                                               |
| Output Voltage                   |             | 2.5   |             | V          | ±3 mV, at ambient temperature                                                                                                 |
| Voltage Reference TC             |             | 7     | 25          | ppm/°C     |                                                                                                                               |
| Output Impedance                 |             | 25    |             | kΩ         |                                                                                                                               |
| OutputVoltage Noise              |             | 6     |             | µV p-p     | 0.1 Hz to 10 Hz                                                                                                               |
| Noise Spectral Density           |             | 10    |             | nV/√Hz     | At ambient; f = 10 kHz                                                                                                        |
| Line Regulation                  |             | 6     |             | µV/V       | At ambient First temperature cycle                                                                                            |
| Thermal Hysteresis               |             | ±80   |             | ppm        |                                                                                                                               |
|                                  |             | 3.5   |             | ms         | Coming out of power-down mode with a 10 nF capacitor on theV REFIN /V REFOUT pin improves noise performance; outputs unloaded |
| Start-Up Time                    |             |       |             |            |                                                                                                                               |
| OUTPUT CHARACTERISTICS 3         |             |       |             |            |                                                                                                                               |
| Output Voltage Range             | -V OUT      |       | +V OUT      |            | Seethe AD5761R data sheet for the different output voltage ranges available                                                   |
|                                  | -10         |       | +10         | V          | V DD /V SS = ±11V, ±10V output range                                                                                          |
|                                  | -10.5       |       | +10.5       | V          | V DD /V SS = ±11V, ±10V output range with 5%                                                                                  |
| Capacitive Load Stability        |             |       | 1           | nF         |                                                                                                                               |
| Headroom                         |             | 0.5   | 1           | V          | R LOAD = 1 kΩ for all ranges except0V to16V and 0V to 20V ranges (R = 2 kΩ)                                                   |
| Output Voltage TC                |             | ±3    |             | ppm FSR/°C | ±10V range, external reference                                                                                                |
| Short-Circuit Current            |             | 25    |             | mA         | Short on theV OUT pin                                                                                                         |
| Resistive Load                   |             |       | 1 2         | kΩ kΩ      | All ranges except 0Vto16V and 0V to 20V 0V to 16V, 0V to 20V ranges                                                           |
| Load Regulation                  |             | 0.3   |             | mV/mA      | Outputs unloaded                                                                                                              |
| DC Output Impedance              |             | 0.5   |             | Ω          | Outputs unloaded                                                                                                              |
| LOGIC INPUTS 3                   |             |       |             |            | DV CC = 1.7V to 5.5 V, JEDEC compliant                                                                                        |
| Input Voltage                    |             |       |             |            |                                                                                                                               |
| High (V IH )                     | 0.7 × DV    |       |             | V          |                                                                                                                               |
| Low (V IL ) Input Current        | CC          |       | 0.3 × DV CC | V          |                                                                                                                               |
| Leakage Current                  | -1          |       | +1          | µA         | SDI, SCLK, SYNC                                                                                                               |
|                                  | -1          |       | +1          | µA         | LDAC, CLEAR, RESET pins held high                                                                                             |
|                                  | -55         |       |             | µA         | LDAC, CLEAR, RESET pins held low                                                                                              |
| Pin Capacitance                  |             | 5     |             | pF         | Per pin, outputs unloaded                                                                                                     |
| LOGIC OUTPUTS (SDO, ALERT) 3     |             |       |             |            |                                                                                                                               |
| Output Voltage                   |             |       |             |            |                                                                                                                               |
| Low (V )                         |             |       |             |            |                                                                                                                               |
| OL                               |             |       | 0.4         | V          | DV CC = 1.7V to 5.5 V, sinking 200 µA                                                                                         |
| High (V OH )                     | DV CC - 0.5 |       |             | V          | DV CC = 1.7V to 5.5 V, sourcing 200 µA                                                                                        |
| HighImpedance,SDO Pin            |             |       |             |            |                                                                                                                               |
| Leakage Current                  | -1          |       | +1          | µA         |                                                                                                                               |
|                                  |             |       |             | pF         |                                                                                                                               |
| Pin Capacitance                  |             | 5     |             |            |                                                                                                                               |
| POWER REQUIREMENTS               |             |       |             |            |                                                                                                                               |
| Single Supply                    |             |       |             |            |                                                                                                                               |
| V DD                             | 4.75        |       | 30          | V          |                                                                                                                               |
| V SS                             |             | 0     |             | V          |                                                                                                                               |
| Dual Supply                      |             |       |             |            |                                                                                                                               |
| V DD                             | 4.75        |       | 16.5        | V          |                                                                                                                               |
| V SS                             | -16.5       |       | 0           | V          |                                                                                                                               |

## Enhanced Product

| Parameter                                |   Min |   Typ |   Max | Unit   | Test Conditions/Comments                                                     |
|------------------------------------------|-------|-------|-------|--------|------------------------------------------------------------------------------|
| DV CC                                    |   1.7 |       |   5.5 | V      |                                                                              |
| I DD                                     |       |   5.1 |   6.5 | mA     | Outputs unloaded, external reference                                         |
| I SS                                     |       |     1 |     3 | mA     | Outputs unloaded                                                             |
| DI CC                                    |       | 0.005 |     1 | µA     | V IH = DV CC ,V IL = DGND                                                    |
| Power Dissipation                        |       |  67.1 |       | mW     | ±11V operation, outputs unloaded                                             |
| DC Power Supply Rejection Ratio (PSRR) 3 |       |   0.1 |       | mV/V   | V DD ± 10%,V SS = -15V                                                       |
|                                          |       |   0.1 |       | mV/V   | V SS ±10%,V DD = +15V                                                        |
| AC PSRR 3                                |       |    65 |       | dB     | V DD ±200 mV, 50 Hz/60 Hz,V SS = -15V, internal reference, C LOAD = 100 nF   |
|                                          |       |    65 |       | dB     | V SS ±200 mV, 50 Hz/60 Hz,V DD = +15V, internal reference, C LOAD = 100 nF   |
|                                          |       |    80 |       | dB     | V DD ±200 mV, 50 Hz/60 Hz,V SS = -15V, external reference, C LOAD = unloaded |
|                                          |       |    80 |       | dB     | V SS ±200 mV, 50 Hz/60 Hz,V DD = +15V, external reference, C LOAD = unloaded |

## AC PERFORMANCE CHARACTERISTICS

VDD 1 = 4.75 V to 30 V , VSS 1 = -16.5 V to 0 V, AGND = DGND = 0 V, VREFIN/VREFOUT = 2.5 V external, DVCC = 1.7 V to 5.5 V , RLOAD = 1 kΩ for all ranges except 0 V to 16 V and 0 V to 20 V for which RLOAD = 2 kΩ, CLOAD = 200 pF , all specifications TMIN to TMAX, unless otherwise noted. Temperature range: -55°C to +125°C, typical at +25°C. Guaranteed by design and characterization, not production tested.

## Table 2.

| Parameter                                                     | Typ       | Max        | Unit          | Test Conditions/Comments                                                                                                                                                     |
|---------------------------------------------------------------|-----------|------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DYNAMIC PERFORMANCE                                           |           |            |               |                                                                                                                                                                              |
| Output Voltage Settling Time                                  | 9 7.5     | 12.5 8.5 5 | µs µs µs      | 20V step to 1 LSB at 16-bit resolution 10V step to 1 LSB at 16-bit resolution 512 LSB step to 1 LSB at 16-bit resolution                                                     |
| Digital-to-Analog Glitch Impulse                              | 8 1       |            | nV-sec nV-sec | ±10V range 0V to 5V range                                                                                                                                                    |
| Glitch Impulse Peak Amplitude                                 | 15 10     |            | mV mV         | ±10V range 0V to 5V range                                                                                                                                                    |
| Power-On Glitch                                               | 100       |            | mVp-p         |                                                                                                                                                                              |
| Digital Feedthrough                                           | 0.6       |            | nV-sec        |                                                                                                                                                                              |
| Output Noise                                                  |           |            |               |                                                                                                                                                                              |
| 0.1 Hz to 10 Hz Bandwidth 100 kHz Bandwidth                   | 15        |            | µV p-p        |                                                                                                                                                                              |
|                                                               | 45 35     |            | µV rms µV rms | 0V to 20V and 0V to 16V ranges, 2.5V external reference 0V to 10V, ±10V, and -2.5V to +7.5V ranges, 2.5V external reference                                                  |
| Output Noise Spectral Density, at 10 kHz                      | 15 80     |            | µV rms nV/√Hz | 0V to 5V and ±3V ranges, 2.5V external reference ±10V range, 2.5V external reference                                                                                         |
| Total Harmonic Distortion (THD) 2 Signal-to-Noise Ratio (SNR) | -87 92 92 |            | dB dB         | 2.5V external reference, 1 kHz tone At ambient, 2.5V external reference, bandwidth (BW) = 20 kHz, f OUT = 1 kHz At ambient, 2.5V external reference, BW=20kHz, f OUT = 1 kHz |
| Peak Harmonic or Spurious Noise (SFDR)                        |           |            | dB            |                                                                                                                                                                              |
| Signal-to-Noise-and-Distortion (SINAD) Ratio                  | 85        |            |               |                                                                                                                                                                              |
|                                                               |           |            | dB            | At ambient, 2.5V external reference, BW=20kHz, f OUT = 1 kHz                                                                                                                 |

## ABSOLUTE MAXIMUM RATINGS

TA = 25°C, unless otherwise noted. Transient currents of up to 200 mA do not cause silicon controlled rectifier (SCR) latch-up.

## Table 3.

| Parameter                    | Rating                                          |
|------------------------------|-------------------------------------------------|
| V DD toAGND                  | -0.3V to +34V                                   |
| V SS toAGND                  | +0.3V to -17V                                   |
| V DD toV SS                  | -0.3V to +34V                                   |
| DV CC toDGND                 | -0.3V to +7V                                    |
| Digital InputstoDGND         | -0.3V to DV CC + 0.3V or 7V (whichever is less) |
| Digital OutputstoDGND        | -0.3V to DV CC + 0.3V or 7V (whichever is less) |
| V REFIN /V REFOUT toDGND     | -0.3V to +7V                                    |
| V OUT toAGND                 | V SS toV DD                                     |
| AGND toDGND                  | -0.3V to +0.3V                                  |
| Military Temperature Range   | -55°C to +125°C                                 |
| Storage Temperature Range    | -65°C to +150°C                                 |
| Junction Temperature, T JMAX | 150°C                                           |
| θ JA Thermal Impedance       | 113°C/W 1                                       |
| Power Dissipation            | See Figure 2                                    |
| Lead Temperature             | JEDEC industry standard                         |
| Soldering                    | J-STD-020                                       |
| ESD (Human Body Model)       | 4 kV                                            |

1 JEDEC 2S2P test board, still air (0 m/sec airflow).

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

Figure 2. Maximum Power Dissipation vs. Ambient Temperature

<!-- image -->

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 3. Pin Configuration

<!-- image -->

Table 4. Pin Function Descriptions

|   Pin No. | Mnemonic          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                |
|-----------|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|         1 | ALERT             | Active Low Alert. This pin is asserted low when the die temperature exceeds approximately 150°C, or when an output short circuit or a brownout occurs. This pin is also asserted low during power-up, a full software reset, or a hardware reset for which a write to the control register asserts the pin high.                                                                                                                           |
|         2 | CLEAR             | Falling Edge Clear Input. Asserting this pin sets the DAC register to zero-scale, midscale, or full-scale code (user selectable) and updates the DAC output. This pin can be left floating because there is an internal pull-up resistor.                                                                                                                                                                                                  |
|         3 | RESET             | Active Low Reset Input. Asserting this pin returns the AD5761R-EP to its default power-on status where the output is clamped to ground, and the output buffer is powered down. This pin can be left floating because there is an internal pull-up resistor.                                                                                                                                                                                |
|         4 | V REFIN /V REFOUT | Internal Reference Voltage Output and External Reference Voltage Input. For specified performance, V REFIN /V REFOUT = 2.5 V. Connect a 10 nF capacitor with the internal reference to minimize the noise.                                                                                                                                                                                                                                 |
|         5 | AGND              | Ground Reference Pin for Analog Circuitry.                                                                                                                                                                                                                                                                                                                                                                                                 |
|         6 | V SS              | Negative Analog Supply Connection. A voltage in the range of -16.5V to 0V can be connected to this pin. For unipolar output ranges, connect this pin to 0 V.V SS must be decoupled to AGND.                                                                                                                                                                                                                                                |
|         7 | V OUT             | Analog Output Voltage of the DAC. The output amplifier is capable of directly driving a 2 kΩ, 1 nF load.                                                                                                                                                                                                                                                                                                                                   |
|         8 | V DD              | Positive Analog Supply Connection. A voltage in the range of 4.75V to 30V can be connected to this pin for unipolar output ranges. Bipolar output ranges accept a voltage in the range of 4.75V to 16.5 V.V DD must be decoupled to AGND.                                                                                                                                                                                                  |
|         9 | DNC               | Do Not Connect. Do not connect to this pin.                                                                                                                                                                                                                                                                                                                                                                                                |
|        10 | SDO               | Serial Data Output. This pin clocks data from the serial register in daisy-chain or readback mode. Data is clocked out on the rising edge of SCLK and is valid on the falling edge of SCLK.                                                                                                                                                                                                                                                |
|        11 | LDAC              | Load DAC.This logic input updates the DAC register and, consequently, the analog output.When tied permanently low, the DAC register is updated when the input register is updated. If LDAC is held high during the write to the input register, the DAC output register is not updated, and the DAC output update is held off until the falling edge of LDAC. This pin can be left floating because there is an internal pull-up resistor. |
|        12 | SDI               | Serial Data Input. Data must be valid on the falling edge of SCLK.                                                                                                                                                                                                                                                                                                                                                                         |
|        13 | SYNC              | Active Low Synchronization Input. This pin is the frame synchronization signal for the serial interface. While SYNC is low, data is transferred in on the falling edge of SCLK. Data is latched on the rising edge of SYNC.                                                                                                                                                                                                                |
|        14 | SCLK              | Serial Clock Input. Data is clocked into the input shift register on the falling edge of SCLK. This pin operates at clock speeds of up to 50 MHz.                                                                                                                                                                                                                                                                                          |
|        15 | DV CC             | Digital Supply. The voltage range is from 1.7V to 5.5 V.The applied voltage sets the voltage at which the digital interface operates.                                                                                                                                                                                                                                                                                                      |
|        16 | DGND              | Digital Ground.                                                                                                                                                                                                                                                                                                                                                                                                                            |

## TYPICAL PERFORMANCE CHARACTERSTICS

Figure 4. INL Error vs. Temperature

<!-- image -->

Figure 5. DNL Error vs. Temperature

<!-- image -->

15433-314

<!-- image -->

Figure 6. Zero-Scale Error vs. Temperature

<!-- image -->

Figure 7. Midscale Error vs. Temperature

Figure 8. Full-Scale Error vs. Temperature

<!-- image -->

Figure 9. Gain Error vs. Temperature

<!-- image -->

<!-- image -->

Figure 10. Total Unadjusted Error (TUE) vs. Temperature

<!-- image -->

Figure 11. Reference Output Voltage vs. Temperature

<!-- image -->

## OUTLINE DIMENSIONS

## ORDERING GUIDE

<!-- image -->

COMPLIANT TO JEDEC STANDARDS MO-153-AB

Figure 13. 16-Lead Thin Shrink Small Outline Package [TSSOP]

(RU-16) Dimensions shown in millimeters

| Model 1            |   Resolution (Bits) |   Internal Reference (V) | Temperature Range   | INL (LSB)   | Package Description   | Package Option   |
|--------------------|---------------------|--------------------------|---------------------|-------------|-----------------------|------------------|
| AD5761RTRUZ-EP     |                  16 |                      2.5 | -55°C to +125°C     | ±8          | 16-LeadTSSOP          | RU-16            |
| AD5761RTRUZ-EP-RL7 |                  16 |                      2.5 | -55°C to +125°C     | ±8          | 16-LeadTSSOP          | RU-16            |

<!-- image -->