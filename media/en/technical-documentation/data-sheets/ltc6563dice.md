<!-- lastmod 2024-04-22 -->
<!-- image -->

## FEATURES

- 600 MHz -3 dB bandwidth with 0.5 pF input capacitance
- Differential output with up to 2 V p-p swing into 100 Ω differential load
- Built-in high-speed ADC driver with output mux
- Selectable 22.2 kΩ, 16.7 kΩ, 11.1 kΩ, or 5.55 kΩ transimpedance gain
- 1.8 pA/√Hz to 3.7 pA/√Hz input current noise density 100 MHz to 600 MHz (0.5 pF)
- 65 nA RMS integrated input-referred current noise over 600 MHz (0.5 pF)
- Large linear input current range 0 µA to 90 µA
- Large transient overload current &gt; 1 A peak
- Fast overload recovery and pulse extension: 2.5 ns
- Fast channel switching time: 10 ns
- Power dissipation (typical): 194 mW to 325 mW on 3.3 V, varies with output mode (13 mW in shutdown)
- Output mux allows multiple LTC6563DICE TIAs to create 8-, 12-, 16-, and 32-channel solutions

## APPLICATIONS

- Automotive LIDAR receiver
- Industrial LIDAR receiver

## 4-Channel, Transimpedance Amplifier with Output Multiplexing

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. Functional Block Diagram

<!-- image -->

## GENERAL DESCRIPTION

The LTC6563DICE is a low noise, 4-channel transimpedance amplifier (TIA) with 600 MHz bandwidth. The low noise, wide linear range, and low power dissipation of the TIA are ideal for light detecting and ranging (LIDAR) receivers using avalanche photodiodes and photodiodes. The amplifier features selectable 22.2 kΩ, 16.7 kΩ, 11.1 kΩ, and 5.55 kΩ transimpedance gain (R T ) and 90 µA linear input current range. Using an avalanche photodiode with a total input capacitance of 0.5 pF, the input current noise density is 1.8 pA/√Hz at 100 MHz and 3.7 pA/√Hz at 600 MHz. The LTC6563DICE consumes between 194 mW and 325 mW on a 3.3 V supply depending on output mode. The power dissipation is calculated by multiplying the typical operating supply voltage of 3.3 V by the typical 25°C total supply current.

An internal 4-to-1 mux simplifies the system design. Additionally, external multiplexing capability allows channel expansion up to 64 channels, saving space and power. Fast overload recovery and fast channel switchover make the LTC6563DICE well suited for LIDAR receivers with multiple avalanche photodiodes. The built-in high-speed differential analog-to-digital (ADC) driver can swing as much as 2 V p-p while driving into 100 Ω external differential load.

Additional application and technical information can be found in the LTC6563 data sheet.

## TABLE OF CONTENTS

| Features................................................................   | 1   |
|----------------------------------------------------------------------------|-----|
| Applications...........................................................    | 1   |
| Functional Block Diagram......................................1            |     |
| General Description...............................................1        |     |
| Specifications........................................................     | 3   |
| AC Electrical Characteristics..............................3               |     |
| DC Electrical Characteristics..............................4               |     |
| Absolute Maximum Ratings...................................6               |     |

## REVISION HISTORY

9/2023-Revision A: Initial Version

...........................................................................................................................................................................

Electrostatic Discharge (ESD) Ratings...............6

ESD Caution.......................................................6

Pin Configuration and Function Descriptions........ 7

Outline Dimensions............................................... 9

Die Specifications and Assembly

Recommendations........................................... 9

Ordering Guide...................................................9

## SPECIFICATIONS

## AC ELECTRICAL CHARACTERISTICS

Specifications are at T A = 25°C, ADJ0 = ADJ1 = PWRMD = OMUX = VCCI = HI = VCCO = 3.3 V, TILT = OFFSET = 0 V, common-mode voltage (V CM ) = 1.5 V. All other input pins are floating unless stated otherwise. V OUTCM is defined as (OUT + OUT)/2 and V OUTDIFF is defined as (OUT OUT). External differential load (R L\_EXT ) = 100 Ω differential. OUT connected to TERM, and OUT connected to TERM.

Table 1. AC Electrical Characteristics

| Parameter                                                         | Test Conditions/Comments                                                                                                                                                                                                                                    | Min               | Typ                         | Max                | Unit                                                    |
|-------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|-----------------------------|--------------------|---------------------------------------------------------|
| -3 dB BANDWIDTH                                                   | 200 mV P-P_OUT and C IN_TOT = 0.5 pF                                                                                                                                                                                                                        |                   | 600                         |                    | MHz                                                     |
| SLEW RATE                                                         | C IN_TOT = 0.5 pF                                                                                                                                                                                                                                           |                   | 3000                        |                    | V/μs                                                    |
| RISE AND FALL TIME (t R ,t F )                                    | C IN_TOT = 0.5 pF                                                                                                                                                                                                                                           |                   | 0.6                         |                    | ns                                                      |
| SMALL SIGNAL TRANSIMPEDANCE (R T DIFFERENTIAL)                    | I IN < 2 µA p-p, ADJ1 = logic low, ADJ0 = logic low I IN < 2 µA p-p, ADJ1 = logic low, ADJ0 = logic high I IN < 2 µA p-p, ADJ1 = logic high, ADJ0 = logic low I IN < 2 µA p-p, ADJ1 = logic high, ADJ0 = logic high                                         | 4.9 9.6 14.1 18.1 | 5.55 11.1 16.7 22.2         | 6.5 12.5 18.2 23.4 | kΩ kΩ kΩ kΩ                                             |
| INPUT IMPEDANCE (R IN )                                           | f = 100 kHz active channel f = 100 kHz inactive channel                                                                                                                                                                                                     |                   | 225 409                     |                    | Ω Ω                                                     |
| INTERNAL DIFFERENTIAL TERMINATION IMPEDANCE (R TERM_DIFF )        | Measured from TERM to TERM                                                                                                                                                                                                                                  |                   | 100                         |                    | Ω                                                       |
| INPUT CURRENT NOISE DENSITY (I N ) INTEGRATED INPUT CURRENT NOISE | f = 100 MHz, C IN_TOT = 0.5 pF f = 200 MHz, C IN_TOT = 0.5 pF f = 300 MHz, C IN_TOT = 0.5 pF f = 400 MHz, C IN_TOT = 0.5 pF f = 500 MHz, C IN_TOT = 0.5 pF f = 600 MHz, C IN_TOT = 0.5 pF                                                                   |                   | 1.8 2.3 2.5 3 3.4 3.7 19 27 |                    | pA/√Hz pA/√Hz pA/√Hz pA/√Hz pA/√Hz pA/√Hz nA RMS nA RMS |
|                                                                   | f = 0.1 MHz to 100 MHz, C IN_TOT = 0.5 pF f = 0.1 MHz to 200 MHz, C IN_TOT = 0.5 pF f = 0.1 MHz to 300 MHz, C IN_TOT = 0.5 pF f = 0.1 MHz to 400 MHz, C IN_TOT = 0.5 pF f = 0.1 MHz to 500 MHz, C IN_TOT = 0.5 pF f = 0.1 MHz to 600 MHz, C IN_TOT = 0.5 pF |                   | 36 45 55 65 2.5 10          |                    | nA RMS nA RMS nA RMS nA RMS ns                          |
| OVERLOAD RECOVERY AND PULSE EXTENTION (t RECOVER )                | I IN = -4 mA, C IN_TOT = 0.5 pF                                                                                                                                                                                                                             |                   |                             |                    |                                                         |
| CHANNEL SWITCHING TIME (t CH_SWITCH )                             | Any channel to any channel                                                                                                                                                                                                                                  |                   |                             |                    | ns                                                      |
| OUTPUT MUX SWITCHING TIME (t OMUX_SWITCH )                        | OMUX                                                                                                                                                                                                                                                        |                   | 20                          |                    | ns                                                      |
| CHANNEL TO CHANNEL ISOLATION (ISOLATION)                          | 400 MHz, PWRMD = logic low, selected channel to any unselected channel                                                                                                                                                                                      |                   | 48                          |                    | dB                                                      |

## SPECIFICATIONS

## DC ELECTRICAL CHARACTERISTICS

Specifications are at T A = 25°C, ADJ0 = ADJ1 = PWRMD = OMUX = VCCI = HI = VCCO = 3.3 V, TILT = OFFSET = 0 V, and common-mode voltage (V CM ) = 1.5 V. All other input pins are floating, unless stated otherwise. V OUTCM is defined as (OUT + OUT)/2, and V OUTDIFF is defined as (OUT - OUT). External differential load (R L\_EXT ) = 100 Ω differential. OUT connected to TERM, and OUT connected to TERM.

Table 2. DC Electrical Characteristics

| Parameter                                                                    | Test Conditions/Comment                                                                 | Min   | Typ     | Max   | Unit    |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|-------|---------|-------|---------|
| IN1, IN2, IN3, and IN4 PINS                                                  |                                                                                         |       |         |       |         |
| Input Bias Voltage (V IN )                                                   | Active channel                                                                          |       | 0.8     |       | V       |
|                                                                              | Inactive channel                                                                        |       | 0.7     |       | V       |
| DC Input Current Range (I IN )                                               | TILT = 0 V                                                                              |       | 40      |       | µA      |
|                                                                              | TILT = 3.3 V                                                                            |       | 90      |       | µA      |
| OUT AND OUT PINS                                                             |                                                                                         |       |         |       |         |
| Default Output Common-Mode Voltage                                           | ADJ1 = logic low, ADJ0 = logic low                                                      |       | 0.9     |       | V       |
| (V OCM_DEFAULT )                                                             |                                                                                         |       |         |       |         |
| Differential Output Offset Voltage (V OOD )                                  | I IN = 0 µA                                                                             | -75   | ±10     | +75   | mV      |
| Differential Output Voltage Swing (V SWINGDIFF )                             | I IN = 0 to -200 µA, TILT = 3.3 V                                                       | 1.13  | 1.50    |       | V p-p   |
|                                                                              | I IN = 0 to -90 µA, TILT = 3.3 V, R L_EXT = 75 Ω SE on each output with center grounded |       | 2.4     |       | V p-p   |
| Output Voltage Swing Low (V OUTLOW )                                         | Single-ended measurement, I IN = 0 to -200 µA, TILT = 3.3                               |       | 1.02    |       | V       |
| Output Voltage Swing High (V OUTHIGH )                                       | Single-ended measurement, I IN = 0 to -200 µA, TILT = 3.3                               |       | 2.2     |       | V       |
| Output Voltage Compliance (V COMPLIANCE )                                    | Single-ended measurement, I IN = 0 to -200 µA, TILT = 3.3                               | 2.0   | V CCO - |       | V       |
| OUTPUT COMMON-MODE VOLTAGE CONTROL (CM PIN)                                  |                                                                                         |       |         |       |         |
| Common-Mode Voltage Gain, CM to Differential OUT (A CM )                     | V CM = 1.5 V to 1.7 V                                                                   | 0.95  | 1       | 1.05  | V/V     |
| Default Common-Mode Voltage (V CM_DEFAULT )                                  |                                                                                         |       | 0.9     |       | V       |
| Common-Mode Offset Voltage (V CM_OS )                                        | V OUTCM - V CM                                                                          | -50   | +10     | +20   | mV      |
| V OUTCM Minimum Voltage (V OUTCM_MIN )                                       | V CM = 0 V, ADJ1 = logic low, ADJ0 = logic low                                          |       | 0.38    | 0.43  | V       |
| V OUTCM Maximum Voltage (V OUTCM_MAX )                                       | V CM = 2.6 V,ADJ1 = logic high, ADJ0 = logic high                                       | 2.2   | 2.3     |       | V       |
| Common-Mode Input Resistance (R CM )                                         |                                                                                         |       | 16.3    |       | kΩ      |
| Common-Mode Input Capacitance (C CM )                                        |                                                                                         |       | 1.5     |       | pF      |
| OUTPUT CLAMPING (HI PIN) 1                                                   |                                                                                         |       |         |       |         |
| Default HI Voltage (V HI_DEFAULT )                                           | OUT(MAX) HI IN                                                                          |       | 1.8     |       | V       |
| High-Side Clamp Offset Voltage (V HI_VOS )                                   | V - V , HI = 1.7 V, I = -200 µA                                                         | -160  | -65     | +25   | mV      |
| Low-Side Clamp Offset Voltage (V LO_VOS )                                    | V OUT(MIN) - (2 × V CM - V HI ), HI = 1.7 V, I IN = -200 µA                             | -50   | +50     | +150  | mV      |
| HI Input Impedance (R HI ) HI Input Capacitance (C HI )                      |                                                                                         |       | 13.6    |       | kΩ      |
|                                                                              |                                                                                         |       | 1.5     |       | pF      |
| INPUT CURRENT CANCELLATION (OFFSET PIN)                                      |                                                                                         |       |         |       |         |
| Default OFFSET Voltage (V OFFSET_DEFAULT )                                   |                                                                                         |       | 0       |       | V       |
| Minimum Input Cancellation Current (I CANCEL_MIN )                           | V OFFSET = 0 V                                                                          |       | 0       |       | μA      |
| Maximum Input Cancellation Current (I CANCEL_MAX )                           | V OFFSET = 3.3 V, TILT = 3.3 V                                                          | 200   | 240     |       | μA      |
| OFFSET Transconductance (OFFSET Voltage to Input Offset Current) (G OFFSET ) | V OFFSET = 0.2 V to 0.4 V, I IN = -40 µA                                                | -145  | -110    | -75   | μA/V kΩ |
| OFFSET Impedance (R OFFSET )                                                 |                                                                                         |       | 6.6     |       |         |
| Offset Voltage to Output Settling (t S_OFFSET )                              | 1% of final value, I IN = -40 µA                                                        |       | 100     |       | ns      |
| OUTPUT OFFSET (TILT PIN)                                                     |                                                                                         |       |         |       |         |
| Default TILT Voltage (V TILT_DEFAULT )                                       |                                                                                         |       | 2       |       | mV      |
| TILT Slope, TILT to Differential Out (A TILT )                               | V TILT = 0.2 V to 0.4 V                                                                 | -1.25 | -1      | -0.7  | V/V     |
| TILT Input Impedance (R TILT )                                               |                                                                                         |       | 22.7    |       | kΩ      |

## SPECIFICATIONS

Table 2. DC Electrical Characteristics (Continued)

| Parameter                                                                       | Test Conditions/Comment                            | Min   | Typ   | Max   | Unit   |
|---------------------------------------------------------------------------------|----------------------------------------------------|-------|-------|-------|--------|
| ADJ0, ADJ1, CHSEL0, AND CHSEL1 PINS WITH INTERNAL PULL-DOWN RESISTORS           |                                                    |       |       |       |        |
| Input Low Voltage (V IL )                                                       |                                                    |       |       | 0.8   | V      |
| Input High Voltage (V IH )                                                      |                                                    | 2.4   |       |       | V      |
| Input Low Current (I IL )                                                       | Pin voltage = 0.8 V                                |       | 3.8   |       | µA     |
| Input High Current (I IH )                                                      | Pin voltage = 2.4 V                                |       | 7.2   |       | µA     |
| Pin Input Capacitance (C IN )                                                   |                                                    |       | 1.5   |       | pF     |
| Pin Input Impedance (R IN )                                                     | To GND                                             |       | 218   |       | kΩ     |
| OMUX AND PWRMD PINS WITH INTERNAL PULL- UP RESISTORS                            |                                                    |       |       |       |        |
| Input Low Voltage (V IL )                                                       |                                                    |       |       | 0.8   | V      |
| Input High Voltage (V IH )                                                      |                                                    | 2.4   |       |       | V      |
| Input Low Current (I )                                                          | Pin voltage = 0.8 V                                |       |       |       |        |
| IL                                                                              |                                                    |       | -12   |       | µA     |
| Input High Current (I IH )                                                      | Pin voltage = 2.4 V                                |       | -8.6  |       | µA     |
| Pin Input Capacitance (C IN )                                                   |                                                    |       | 1.5   |       | pF     |
| Pin Input Impedance (R IN )                                                     | To VCCI                                            |       | 208   |       | kΩ     |
| POWER SUPPLY                                                                    |                                                    |       |       |       |        |
| Operating Supply Range (V S )                                                   |                                                    | 3.15  | 3.3   | 3.45  | V      |
| Input Supply Current (I VCCI )                                                  | Any adjust setting                                 | 27.8  | 34    | 39.4  | mA     |
| Input Supply Current (I VCCI_SHUTDOWN )                                         | PWRMD = OMUX = logic low                           |       | 4.5   | 5.5   | mA     |
| Output Supply Current (I VCCO )                                                 | ADJ1 = logic high, ADJ0 = logic high V CM = 1.50 V | 49.4  | 64.5  | 81    | mA     |
|                                                                                 | ADJ1 = logic high, ADJ0 = logic low V CM = 1.25 V  |       | 51.5  | 64.9  | mA     |
|                                                                                 | ADJ1 = logic low, ADJ0 = logic high V CM = 1.0 V   |       | 38    | 48    | mA     |
|                                                                                 | ADJ1 = logic low, ADJ0 = logic low V CM = 0.75 V   |       | 24.5  | 30.8  | mA     |
| Output Supply Current (I VCCO_SHUTDOWN )                                        | PWRMD = OMUX = logic low                           |       | 0.1   | 0.2   | mA     |
| Total Supply Current (I S(VCCI) + I S(VCCO) ) (I S )                            | ADJ1 = logic high, ADJ0 = logic high V CM = 1.50 V |       | 98.5  | 120.4 | mA     |
|                                                                                 | ADJ1 = logic high, ADJ0 = logic high V CM = 1.25 V |       | 85.5  | 104.3 | mA     |
|                                                                                 | ADJ1 = logic low, ADJ0 = logic high V CM = 1.0 V   |       | 72    | 87.4  | mA     |
|                                                                                 | ADJ1 = logic low, ADJ0 = logic low V CM = 0.75 V   |       | 58.5  | 70.2  | mA     |
| Total Supply Current (I S(VCCI) + I S(VCCO) ) (I )                              | PWRMD = OMUX = logic low                           |       | 4.6   | 5.8   | mA     |
| S_SHUTDOWN Input Power Supply Rejection Ratio (∆V OUT / ∆V CCI ) (PSRR(V CCI )) | VCCI = 3.15 V to 3.45 V, VCCO = 3.3 V              | 33    | 36    |       | dB     |
| Output Power Supply Rejection Ratio (∆V OUT / ∆V CCO ) (PSRR(V CCO ))           | VCCO = 3.15 V to 3.45 V, VCCI = 3.3 V              | 35    | 38    |       | dB     |

1 Set the HI pin voltage to be at least 0.2 V higher than the V CM .

## ABSOLUTE MAXIMUM RATINGS

## Table 3. Absolute Maximum Ratings

| Parameter                                                                     | Rating                |
|-------------------------------------------------------------------------------|-----------------------|
| Total Supply Voltage                                                          |                       |
| VCCI to GND                                                                   | 3.6 V                 |
| VCCO to GND                                                                   | 3.6 V                 |
| Input Current (CHSEL0, CHSEL1, ADJ0, ADJ1, PWRMD, OMUX, CM, HI, OFFSET, TILT) | ±10 mA                |
| Amplifier Inputs (IN1, IN2, IN3, IN4)                                         |                       |
| Voltage                                                                       | -0.3 V to +3.6 V      |
| Current                                                                       | +10 µA to -400 mA RMS |
| Current 1                                                                     | -1 A transient        |
| Amplifier Outputs (OUT, OUT)                                                  |                       |
| Voltage                                                                       | -0.3 V to +3.6 V      |
| Current                                                                       | ±100 mA               |
| Amplifier Output Termination (TERM, TERM)                                     |                       |
| Voltage                                                                       | -0.3 V to +3.6 V      |
| Current                                                                       | -72 mA to +6 mA       |
| Temperature                                                                   |                       |
| Operating Range                                                               | -40°C to +125°C       |
| Storage Range                                                                 | -65°C to +150°C       |
| T J                                                                           | 150°C                 |

Stressed above those listed under the Absolute Maximum Ratings may cause permanent damage to the device. This is a stress rating only; functional operation of the device at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect device reliability.

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD-protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

## ESD Ratings for LTC6563DICE

Table 4. LTC6563DICE, 24-Pad Bare Die [CHIP]

| ESD Model   |   Withstand Threshold (V) |   Class |
|-------------|---------------------------|---------|
| HBM         |                      2000 |       2 |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pad Configuration

<!-- image -->

Table 5. Pad Configuration Descriptions

|   Pad No. |   X-axis (µm) |   Y-axis (µm) | Mnemonic   | Description                                                                                                                                                                                                                                                                             |
|-----------|---------------|---------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|         1 |        -303.2 |         417.9 | CHSEL1     | MSB and LSB for Channel Selection. The CHSEL1 pin is CMOS input with internal 218 kΩ pull-down resistors to GND.                                                                                                                                                                        |
|         2 |        -303.2 |         302.9 | VCCO       | Positive Power Supply for the Output Stage. Typically, 3.3 V. Tie the VCCO pin to the VCCI pin for single-supply operation. Use a series ferrite bead, such as the MPZ1005A331ETD25, and place bypass capacitors of 680 pF and 0.1 µF as closely as possible between the V CCO and GND. |
|         3 |        -303.2 |         187.9 | CHSEL0     | MSB and LSB for Channel Selection. The CHSEL0 pin is CMOS input with internal 218 kΩ pull-down resistors to GND.                                                                                                                                                                        |
|         4 |        -303.2 |          72.9 | OFFSET     | Input Offset Adjust. The OFFSET pin accepts a voltage input that controls current sources on each input pin. These current sources can be used to cancel DC currents flowing into the detector. The OFFSET pin has an internal pull-down resistor to GND.                               |
|         5 |        -303.2 |         -72.9 | TILT       | Output Differential Offset. The voltage on the TILT pin controls the output differential offset. The TILT pin has an internal 22.7 kΩ pull-down resistor to GND.                                                                                                                        |
|         6 |        -303.2 |        -187.9 | GND        | Negative Power Supply. Typically tied to ground. All GND pins and the EPAD must be tied to the same voltage.                                                                                                                                                                            |
|         7 |        -303.2 |        -302.9 | IN1        | Transimpedance Amplifier Input Pin for Channel 1. The active channel is internally biased to 0.8 V.                                                                                                                                                                                     |
|         8 |        -303.2 |        -417.9 | GND        | Negative Power Supply. Typically tied to ground. All GND pins and the EPAD must be tied to the same voltage.                                                                                                                                                                            |
|         9 |        -172.5 |        -546.2 | IN2        | Transimpedance Amplifier Input Pin for Channel 2. The active channel is internally biased to 0.8 V.                                                                                                                                                                                     |
|        10 |         -57.5 |        -546.2 | ADJ0       | LSB and MSB for Output Gain and Current Adjusts. The ADJ0 pin sets the output stage quiescent current and current gain. The LSB and MSB are CMOS inputs with internal 218 kΩ pull-down resistors to GND.                                                                                |
|        11 |          57.5 |        -546.2 | ADJ1       | LSB and MSB for Output Gain and Current Adjusts. The ADJ1 pin sets the output stage quiescent current and current gain. The LSB and MSB are CMOS inputs with internal 218 kΩ pull-down resistors to GND.                                                                                |
|        12 |         172.5 |        -546.2 | IN3        | Transimpedance Amplifier Input Pin for Channel 3. The active channel is internally biased to 0.8 V.                                                                                                                                                                                     |
|        13 |         303.2 |        -417.9 | GND        | Negative Power Supply. Typically tied to ground. All GND pins and the EPAD must be tied to the same voltage.                                                                                                                                                                            |
|        14 |         303.2 |        -302.9 | IN4        | Transimpedance Amplifier Input Pin for Channel 4. The active channel is internally biased to 0.8 V.                                                                                                                                                                                     |
|        15 |         303.2 |        -187.9 | GND        | Negative Power Supply. Typically tied to ground. All GND pins and the EPAD must be tied to the same voltage.                                                                                                                                                                            |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Table 5. Pad Configuration Descriptions (Continued)

| Pad No.    | X-axis (µm)   | Y-axis (µm)   | Mnemonic   | Description                                                                                                                                                                                                                                                                                                                                                                                                                             |
|------------|---------------|---------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 16         | +303.2        | -72.9         | PWRMD      | Power Mode. A CMOS input for controlling the power consumption. The PWRMD pin has a 208 kΩ internal pull-up resistor to V CCI . Default value is 3.3 V.                                                                                                                                                                                                                                                                                 |
| 17         | +303.2        | +72.9         | VCCI       | Positive Power Supply for the Input Stages. Typically, 3.3 V. Use a series ferrite bead, such as the MPZ1005A331ETD25, and place bypass capacitors of 680 pF and 0.1 µF as closely to the part as possible between V CCI and GND.                                                                                                                                                                                                       |
| 18         | +303.2        | +187.9        | OMUX       | Output MUX. The OMUX pin is a CMOS input for controlling the output multiplexing function. The OMUX pin has internal 208 kΩ pull-up resistor to V CCI . Default value is 3.3 V.                                                                                                                                                                                                                                                         |
| 19         | +303.2        | +302.9        | CM         | Output Common Mode Reference Voltage. The voltage on this pin sets the output common-mode voltage level. On a 3.3 V supply, the CM pin floats to a default 0.9 V. The CM pin has an input impedance of 16.3 kΩ. Bypass the CM pin with a high-quality ceramic capacitor of at least 0.01 µF.                                                                                                                                            |
| 20         | +303.2        | +417.9        | HI         | High-Side Clamp Voltage. The voltage applied to the HI pin sets the upper voltage limit to OUT and OUT pins. The HI voltage also limits the lower voltage swing on both output pins to 2 V CM to HI for symmetrical clamping around the CM voltage. On a 3.3 V supply, the HI pin floats to a default 1.8 V. The HI pin has an input impedance of 13.6 kΩ. Bypass the HI pin with a high-quality ceramic capacitor of at least 0.01 µF. |
| 21         | +172.5        | +546.2        | OUT        | Differential Output. For voltage mode output, connect OUT to TERM and OUT to TERM. For current mode output or when using external load resistors, float TERM and TERM.                                                                                                                                                                                                                                                                  |
| 22         | +57.5         | +546.2        | TERM       | Internal Termination. The TERM pin has a 50 Ω load resistor coupled to GND and is connected to the differential output pins.                                                                                                                                                                                                                                                                                                            |
| 23         | -57.5         | +546.2        | TERM       | Internal Termination. The TERM pin has a 50 Ω load resistor coupled to GND and is connected to the differential output pins.                                                                                                                                                                                                                                                                                                            |
| 24         | -172.5        | +546.2        | OUT        | Differential Output. For voltage mode output, connect OUT to TERM and OUT to TERM. For current mode output or when using external load resistors, float TERM and TERM.                                                                                                                                                                                                                                                                  |
| Die Bottom |               |               |            | Backside of Die. Must be tied to the same voltage as all GND pins and have multiple via holes to the underlying ground plane for low inductance and improved heat transfer.                                                                                                                                                                                                                                                             |

## OUTLINE DIMENSIONS

Figure 3. 24-Pad Bare Die [CHIP] (C-24-6) Dimensions shown in millimeters

<!-- image -->

## DIE SPECIFICATIONS AND ASSEMBLY RECOMMENDATIONS

## Table 6. Die Specifications

| Parameter                     | Value                              | Unit   |
|-------------------------------|------------------------------------|--------|
| Chip Size                     | 910 × 1395                         | µm     |
| Scribe Line Width             | 80 × 80                            | µm     |
| Die Size Maximum              | 830 × 1315                         | µm     |
| Die Thickness                 | 200 ± 25                           | µm     |
| Bond Pad Size                 | 100 × 100                          | µm     |
| Minimum Bond Pad Opening Size | 82 × 82                            | µm     |
| Bond Pad Composition          | Aluminum (Al) and Copper (Cu) 0.5% | %      |
| Backside Metal                | None                               | N/A 1  |
| Passivation                   | 0.2 SiO2 + 0.7 SiN                 | µm     |
| Overcoat                      | Polyimide-5                        | µm     |
| Die Marker                    | 6563                               | N/A 1  |
| Substrate Bias                | Ground                             | V      |

## Table 7. Assembly Recommendations

| Assembly Component   | Recommendation                                    |
|----------------------|---------------------------------------------------|
| Die Attach           | Adhesive-conductive epoxy                         |
| Bonding Method       | Thermosonic gold ball bonding (1.0 mil gold wire) |
| Bonding Sequence     | Unspecified                                       |

## ORDERING GUIDE

| Model 1     | Temperature Range   | Package Description    | Package Option   | Package Quantity   |
|-------------|---------------------|------------------------|------------------|--------------------|
| LTC6563DICE | -40°C to +125°C     | 24-Pad Bare Die [CHIP] | C-24-6           | Waffle Pack, 270   |

<!-- image -->