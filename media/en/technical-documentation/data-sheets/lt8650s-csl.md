<!-- lastmod 2025-05-29 -->
<!-- image -->

## Commercial Space Product

## FEATURES

- Input Voltage Range: 3.0V to 15V
- Silent Switcher ® 2 Architecture:
- Ultralow EMI on Any PCB
- Eliminates PCB Layout Sensitivity
- Internal Bypass Capacitors Reduce Radiated EMI
- Optional Spread Spectrum Modulation
- 4A DC from Each Channel Simultaneously
- Up to 6A on Either Channel
- Ultralow Quiescent Current Burst Mode ®  Operation:
- 6.2uA I Q  Regulating 12V IN to 5V OUT1 and 3.3V OUT2
- Output Ripple &lt;10mV P-P
- Optional External VC Pin: Fast Transient Response and Current Sharing (Extra 50µA I Q /Channel)
- Forced Continuous Mode
- High Efficiency at High Frequency
- 94.6% Efficiency at 2A, 5V OUT from 12V IN at 2MHz
- 93.3% Efficiency at 4A, 5V OUT from 12V IN at 2MHz
- Fast Minimum Switch On-Time: 40ns
- Adjustable and Synchronizable: 300kHz to 3MHz
- Small 6mm × 4mm 32-Lead LQFN Package

## COMMERCIAL SPACE FEATURES

- Support Aerospace Applications
- Wafer Diffusion Lot Traceability
- Radiation Monitors:
- Single-Event Latchup (SEL)
- Total Ionizing Dose (TID)
- Outgassing Characterization

## APPLICATIONS

- Low Earth Orbit (LEO) Satellites
- Avionics
- Point to Point Communication Systems
- General-Purpose Step-Down Voltage Conversion

## LT8650S-CSL

## Dual Channel 4 A, Synchronous Step-Down Silent Switcher 2 with 6.2 μA Quiescent Current

## GENERAL DESCRIPTION

The LT8650S-CSL is a dual step-down regulator that delivers up to 4A of continuous current from both channels and supports loads up to 6A from each channel. The LT8650S-CSL features the second generation Silent Switcher architecture to minimize EMI emissions while delivering high efficiency at high switching frequencies. This includes integration of bypass capacitors to optimize high frequency current loops and make it easy to achieve advertised EMI performance by eliminating layout sensitivity.

The fast, clean, low overshoot, switching edges enable high efficiency operation even at high switching frequencies, leading to a small overall solution size. Peak current mode control with a 40ns minimum on-time allows high step down ratios at high switching frequencies.

Burst Mode operation features a 6.2μA quiescent current resulting in high efficiency at low output currents, forced continuous mode allows fixed switching frequency operation over the entire output load range, and spread spectrum operation can further reduce EMI emissions. External VC pins allow optimal loop compensation for fast transient response.

The LT8650S-CSL is housed in a 6mm × 4mm, 32-lead LQFN package. Additional application and technical information can be found in the Commercial Space Products Program brochure and the LT8650S data sheet.

## TABLE OF CONTENTS

| Features................................................................ 1                                                                              | Outgas Testing................................................... 5                                                                                     |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| Commercial Space Features.................................1                                                                                             | Radiation Features.............................................5                                                                                        |
| Applications........................................................... 1                                                                               | Electrostatic Discharge (ESD) Ratings...............5                                                                                                   |
| General Description...............................................1                                                                                     | ESD Ratings for LT8650S-CSL..........................5                                                                                                  |
| Specifications........................................................ 3                                                                                | ESD Caution.......................................................5                                                                                     |
| Electrical Characteristics....................................3                                                                                         | Pin Configuration and Function Descriptions........ 6                                                                                                   |
| Radiation Test and Limit Specifications..............4                                                                                                  | Typical Performance Characteristics.....................8                                                                                               |
| Absolute Maximum Ratings...................................5                                                                                            | Packaging and Ordering Information.....................9                                                                                                |
| Thermal Resistance........................................... 5                                                                                         | Outline Dimensions............................................9                                                                                         |
| REVISION HISTORY                                                                                                                                        |                                                                                                                                                         |
| 5/2025-Rev. A to Rev. B                                                                                                                                 |                                                                                                                                                         |
| Changes to Features Section.......................................................................................................................... 1 | Changes to Features Section.......................................................................................................................... 1 |

...........................................................................................................................................................................

## SPECIFICATIONS

## ELECTRICAL CHARACTERISTICS

All typical specifications are at T J (Junction Temperature) = 25°C and all min and max specifications are across the entire operating temperature range unless otherwise noted.

Table 1. Electrical Characteristics

| Parameter                                     | Conditions                                                                             | Conditions                                                                             | Min                                                                                    | Typ     | Max   | Units   |
|-----------------------------------------------|----------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|---------|-------|---------|
| Minimum Input Voltage                         |                                                                                        |                                                                                        |                                                                                        | 2.6     | 3     | V       |
| V Quiescent Current in Shutdown               |                                                                                        |                                                                                        | T J = 25°C                                                                             | 1.7     | 4     | µA      |
| IN1                                           | V EN/UV1 = V EN/UV2 = 0 V, V SYNC = 0 V                                                | V EN/UV1 = V EN/UV2 = 0 V, V SYNC = 0 V                                                |                                                                                        |         | 10    | µA      |
| V IN1 + V CC Quiescent Current in Sleep with  | V EN/UV1 = V EN/UV2 = 2 V, V FB1 = V FB2 > 0.8V, V VC1 T J = 25°C                      | V EN/UV1 = V EN/UV2 = 2 V, V FB1 = V FB2 > 0.8V, V VC1 T J = 25°C                      |                                                                                        | 3.7     | 8     | µA      |
| Internal Compensation                         | = V VC2 = V CC , V SYNC = 0 V                                                          | = V VC2 = V CC , V SYNC = 0 V                                                          |                                                                                        |         | 20    | µA      |
| V IN1 + V CC Quiescent Current in Sleep with  | V EN/UV1 = V EN/UV2 = 2V, V FB1 = V FB2 > 0.8V, V VC1 T                                | V EN/UV1 = V EN/UV2 = 2V, V FB1 = V FB2 > 0.8V, V VC1 T                                | J = 25°C                                                                               | 90      | 120   | µA      |
| External Compensation                         | = V VC2 = float, V SYNC = 0 V                                                          | = V VC2 = float, V SYNC = 0 V                                                          |                                                                                        |         | 140   | µA      |
| V IN1 + V CC Quiescent Current when Active    | V EN/UV1 = V EN/UV2 = 2V, V FB1 = V FB2 > 0.8 V, V VC1 = V VC2 = V CC , V SYNC = 3.4 V | V EN/UV1 = V EN/UV2 = 2V, V FB1 = V FB2 > 0.8 V, V VC1 = V VC2 = V CC , V SYNC = 3.4 V | V EN/UV1 = V EN/UV2 = 2V, V FB1 = V FB2 > 0.8 V, V VC1 = V VC2 = V CC , V SYNC = 3.4 V | 5       | 7     | mA      |
| V IN Current in Regulation                    | V IN = 12V, V OUT = 3.3 V, V VC1 = V VC2 = V CC ,                                      | V IN = 12V, V OUT = 3.3 V, V VC1 = V VC2 = V CC ,                                      | Output Load = 100µA                                                                    | 45      | 75    | µA      |
| V IN Current in Regulation                    | V SYNC = 0 V                                                                           | V SYNC = 0 V                                                                           | Output Load = 1mA                                                                      | 350     | 550   | µA      |
| Feedback Reference Voltage                    | T                                                                                      | T                                                                                      | J = 25°C 0.794                                                                         | 0.800   | 0.806 | V       |
| Feedback Reference Voltage                    |                                                                                        |                                                                                        | 0.790                                                                                  | 0.800   | 0.810 | V       |
| Feedback Voltage Line Regulation              | V IN = 4.0 V to 36 V                                                                   | V IN = 4.0 V to 36 V                                                                   |                                                                                        | 0.004   | 0.02  | %/V     |
| Feedback Pin Input Current                    | V FB = 0.8 V                                                                           | V FB = 0.8 V                                                                           | -20                                                                                    |         | 20    | nA      |
| Minimum On-Time                               | I LOAD = 3 A, SYNC ≥ 2 V                                                               | I LOAD = 3 A, SYNC ≥ 2 V                                                               |                                                                                        | 40      | 60    | nS      |
|                                               | R T = 133 k                                                                            | R T = 133 k                                                                            | 270                                                                                    | 300     | 330   | kHz     |
| Oscillator Frequency                          | R T = 35.7 k                                                                           | R T = 35.7 k                                                                           | 0.94                                                                                   | 1.0     | 1.06  | MHz     |
|                                               | R T = 15 k                                                                             | R T = 15 k                                                                             | 1.85                                                                                   | 2.00    | 2.15  | MHz     |
| Top Power NMOS Current Limit                  |                                                                                        |                                                                                        | 10                                                                                     | 12      | 14    | A       |
| Bottom Power NMOS Current Limit               |                                                                                        |                                                                                        | 6.5                                                                                    | 8.5     | 10.5  | A       |
| SW Leakage Current                            | V = 42 V, V = 0 V, 42 V                                                                | V = 42 V, V = 0 V, 42 V                                                                | -2                                                                                     |         | 2     | µA      |
| EN/UV Pin Threshold                           | IN SW EN/UV falling                                                                    | IN SW EN/UV falling                                                                    | 0.7                                                                                    | 0.74    | 0.78  | V       |
| EN/UV Pin Hysteresis                          |                                                                                        |                                                                                        |                                                                                        | 30      |       | mV      |
| EN/UV Pin Current                             | V EN/UV = 2 V                                                                          | V EN/UV = 2 V                                                                          | -20                                                                                    |         | 20    | nA      |
| PG Upper Threshold Offset from V FB           | V FB falling                                                                           | V FB falling                                                                           | 5.4                                                                                    | 7.2     | 9     | %       |
| PG Lower Threshold Offset from V FB           | V FB rising                                                                            | V FB rising                                                                            | -9.3                                                                                   | -7.5    | -5.7  | %       |
| PG Hysteresis                                 |                                                                                        |                                                                                        |                                                                                        | 0.3     |       | %       |
| PG Leakage                                    | V PG = 12 V                                                                            | V PG = 12 V                                                                            | -40                                                                                    |         | 40    | nA      |
| PG Pull-Down Resistance                       | V PG = 0.1 V                                                                           | V PG = 0.1 V                                                                           |                                                                                        | 600     | 1200  | Ohm     |
|                                               | SYNC DC and clock low-level voltage                                                    | SYNC DC and clock low-level voltage                                                    | 0.4                                                                                    |         |       | V       |
| SYNC Threshold                                | SYNC Clock high-level voltage                                                          | SYNC Clock high-level voltage                                                          |                                                                                        |         | 1.5   | V       |
|                                               | SYNC DC high-level voltage                                                             | SYNC DC high-level voltage                                                             |                                                                                        |         | 2.8   | V       |
| SYNC Pin Current                              | V SYNC = 6 V                                                                           | V SYNC = 6 V                                                                           |                                                                                        | 120     |       | µA      |
| SS Source Current                             |                                                                                        |                                                                                        | 1.0                                                                                    | 2.0     | 3.0   | µA      |
| SS Pull-Down Resistance                       | Fault Condition, SS = 0.1 V                                                            | Fault Condition, SS = 0.1 V                                                            |                                                                                        | 200     |       | Ω       |
| Error Amplifier Transconductance              | V C = 1.25 V                                                                           | V C = 1.25 V                                                                           |                                                                                        | 0.9     |       | mS      |
| VC Source Current                             | V FB = 0.6 V, V VC = 1.25 V                                                            | V FB = 0.6 V, V VC = 1.25 V                                                            |                                                                                        | 185     |       | µA      |
| VC Sink Current VC Pin to Switch Current Gain | V FB = 1.0 V, V VC = 1.25 V                                                            | V FB = 1.0 V, V VC = 1.25 V                                                            |                                                                                        | 185 9.6 |       | µA A/V  |
|                                               |                                                                                        |                                                                                        | Temperature = 25°C                                                                     | 250     |       | mV      |
| TEMP Output Voltage                           | I TEMP = 0 µA                                                                          | Temperature = 125°C                                                                    |                                                                                        | 1200    |       | mV      |

## SPECIFICATIONS

## RADIATION TEST AND LIMIT SPECIFICATIONS

All min and max specifications are at T J (Junction Temperature) = 25°C. Total ionizing dose (TID) testing characterized to 30 krads.

Table 2. Radiation Test and Limit Specifications

| Parameter                                                          | Conditions                                                                      |                      | Min   | Typ   | Max   | Units   |
|--------------------------------------------------------------------|---------------------------------------------------------------------------------|----------------------|-------|-------|-------|---------|
| Minimum Input Voltage                                              |                                                                                 |                      |       | 2.6   | 3     | V       |
| V IN1 Quiescent Current in Shutdown                                | V EN/UV1 = V EN/UV2 = 0V, V SYNC = 0 V                                          |                      |       | 1.7   | 6     | µA      |
| V IN1 + V CC Quiescent Current in Sleep with Internal Compensation | V EN/UV1 = V EN/UV2 = 2V, V FB1 = V FB2 > 0.8 V, V VC1 = VC2 CC 0 V             | V = V , V SYNC =     |       | 3.7   | 100   | µA      |
| V IN1 + V CC Quiescent Current in Sleep with External Compensation | V EN/UV1 = V EN/UV2 = 2V, V FB1 = V FB2 > 0.8 V, V VC1 = VC2 = 0 V              | V = Float, V SYNC    |       | 90    | 200   | µA      |
| V IN1 + V CC Quiescent Current when Active                         | V EN/UV1 = V EN/UV2 = 2V, V FB1 = V FB2 > 0.8 V, V CC1 = V CC2 = V CC , V 3.4 V | SYNC =               |       | 5     | 7     | mA      |
| V IN Current in Regulation                                         | V IN = 12V, V OUT = 3.3 V, V CC1 = V CC2 = V CC , V SYNC = 0 V                  | Output load = 100 µA |       | 45    | 75    | µA      |
| V IN Current in Regulation                                         | V IN = 12V, V OUT = 3.3 V, V CC1 = V CC2 = V CC , V SYNC = 0 V                  | Output load = 1 mA   |       | 350   | 550   | µA      |
| Feedback Reference Voltage                                         |                                                                                 |                      | 0.790 | 0.800 | 0.810 | V       |
| Feedback Voltage Line Regulation                                   | V IN = 4.0 V to 36 V                                                            |                      |       | 0.004 | 0.02  | %/V     |
| Feedback Pin Input Current                                         | V FB = 0.8 V                                                                    |                      | -20   |       | 20    | nA      |
| Minimum On-Time                                                    | I LOAD = 3 A, SYNC ≥ 2 V                                                        |                      |       | 40    | 60    | nS      |
| Oscillator Frequency                                               | R T = 133 k                                                                     |                      | 270   | 300   | 330   | kHz     |
| Oscillator Frequency                                               | R T = 35.7 k                                                                    |                      | 0.94  | 1.0   | 1.06  | MHz     |
|                                                                    | R T = 15 k                                                                      |                      | 1.85  | 2.00  | 2.15  | MHz     |
| Top Power NMOS Current Limit                                       |                                                                                 |                      | 10    | 12    | 14    | A       |
| Bottom Power NMOS Current Limit                                    |                                                                                 |                      | 6.5   | 8.5   | 14    | A       |
| Top SW Leakage Current                                             | V IN = 42 V, V SW = 0 V, 42 V                                                   |                      | -2    |       | 2     | mA      |
| Bottom SW Leakage Current                                          | V IN = 42 V, V SW = 0 V, 42 V                                                   |                      | -150  |       | +150  | µA      |
| EN/UV Pin Threshold                                                | EN/UV falling                                                                   |                      | 0.7   | 0.74  | 0.78  | V       |
| EN/UV Pin Current                                                  | V EN/UV = 2 V                                                                   |                      | -20   |       | 20    | nA      |
| PG Upper Threshold Offset from V FB                                | V FB falling                                                                    |                      | 5.4   | 7.2   | 9     | %       |
| PG Lower Threshold Offset from V FB                                | V FB rising                                                                     |                      | -9.3  | -7.5  | -5.7  | %       |
| PG Leakage                                                         | V PG = 12 V                                                                     |                      | -40   |       | +40   | nA      |
| PG Pull-Down Resistance                                            | V PG = 0.1 V                                                                    |                      |       | 600   | 1200  | Ω       |
|                                                                    | SYNC DC and clock low-level voltage                                             |                      | 0.4   |       |       | V       |
| SYNC Threshold                                                     | SYNC Clock high-level voltage                                                   |                      |       |       | 1.5   | V       |
|                                                                    | SYNC DC high-level voltage                                                      |                      |       |       | 2.8   | V       |
| SS Source Current                                                  |                                                                                 |                      | 1.0   | 2.0   | 3.0   | µA      |

## ABSOLUTE MAXIMUM RATINGS

## Table 3. Absolute Maximum Ratings

| Parameter                                  | Rating          |
|--------------------------------------------|-----------------|
| V IN1 , V IN2 , EN/UV1, EN/UV2, PG1, PG2 1 | 42 V            |
| BIAS                                       | 30 V            |
| FB1, FB2, SS1, SS2                         | 4 V             |
| V C1 , V C2                                | 3.5 V           |
| SYNC                                       | 6 V             |
| Operating Junction Temperature Range 2     | -40°C to +150°C |
| Storage Temperature Range                  | -65°C to +150°C |
| Maximum Reflow (Package Body) Temperature  | 260°C           |

- 2 The LT8650S-CSL is guaranteed over the full -40°C to +150°C operating junction temperature range. Operating lifetime is derated at junction temperatures greater than +125°C. The junction temperature (T J , in °C) is calculated from the ambient temperature (T A in °C) and power dissipation (P D , in Watts) according to the formula:
- TJ = T A + (P D × θ JA ) where θ JA (in °C/W) is the package thermal impedance.

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Close attention to PCB thermal design is required.

## Table 4. Thermal Resistance

| Package Type                      | θ JA   | Unit   |
|-----------------------------------|--------|--------|
| 32-Lead (6mm × 4mm × 0.94mm) LQFN | 23 1   | °C/W   |

## OUTGAS TESTING

The criteria used for the acceptance and rejection of materials must be determined by the user and based upon specific component and system requirements. Historically, a total mass loss (TML) of 1.00% and collected volatile condensable material (CVCM) of 0.10% have been used as screening levels for rejection of spacecraft materials.

Table 5. Outgas Testing

| Specification (Tested per ASTM E595 - 15)   |   Value | Unit   |
|---------------------------------------------|---------|--------|
| Total Mass Loss                             |    0.1  | %      |
| Collected Volatile Condensable Material     |    0.01 | %      |
| Water Vapor Recovered                       |    0.05 | %      |

## RADIATION FEATURES

## Table 6. Radiation Features

| Specifications                                                                   | Value   | Unit         |
|----------------------------------------------------------------------------------|---------|--------------|
| Maximum Total Dose Available (Dose Rate = 50 rad(Si)/sec to 300 rad(Si)/sec) 1   | 30      | krad(Si)     |
| No Single Event Latchup (SEL) Occurs at Effective Linear Energy Transfer (LET) 2 | ≤40.8   | MeV∙cm 2 /mg |

- 2 Limits are characterized at initial qualification and after any design or process changes specified by customer through the purchase order or contact. If applying an input voltage &gt; 15V or bias voltage &gt; 15V, mitigation must be used to avoid SEL. For more information on single event effect (SEE) test results, contact Analog Devices for further data beyond the published report on the Analog Devices website.

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human Body Model (HBM) per ANSI/ESDA/JEDEC JS-001.

Charged Device Model (CDM) per ANSI/ESDA/JEDEC JS-002.

## ESD RATINGS FOR LT8650S-CSL

Table 7. LT8650S-CSL, 32-Lead LQFN

| ESD Model   | Withstand Threshold (V)   | Class   |
|-------------|---------------------------|---------|
| HBM         | ±4000                     | 3A      |
| CDM         | ±1250                     | C3      |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 1. Pin Configuration

<!-- image -->

Table 8. Pin Function Descriptions

| Pin No   | Name   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|----------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1        | RT     | A resistor is tied between RT and ground to set the switching frequency.                                                                                                                                                                                                                                                                                                                                                                      |
| 4, 5     | V IN1  | The V IN1 pin supplies current to the LT8650S internal circuitry and to the internal top side power switch of channel 1. This pin must be locally bypassed. Be sure to place the positive terminal of the input capacitor as close as possible to the V IN1 pin, and the negative capacitor terminal as close as possible to the GND pins. V IN1 must be 3 V or higher for LT8650S to operate.                                                |
| 7, 8     | V IN2  | The V IN2 pin supplies current to the internal top side power switch of channel 2. This pin must be locally bypassed. Be sure to place the positive terminal of the input capacitor as close as possible to the V IN2 pin, and the negative capacitor terminal as close as possible to the GND pins. This input is capable of operating from a different supply than V IN1 . V IN1 must be present to run channel 2.                          |
| 11       | EN/UV1 | Channel 1 of the LT8650S is shut down when this pin is low and active when this pin is high. The hysteretic threshold voltage is 0.77 V going up and 0.74 V going down. Tie to V IN1 if the shutdown feature is not used. An external resistor divider from V IN1 can be used to program a V IN threshold below which channel 1 of the LT8650S shuts down. Do not float this pin.                                                             |
| 12       | EN/UV2 | Channel 2 of the LT8650S is shut down when this pin is low and active when this pin is high. The hysteretic threshold voltage is 0.77 V going up and 0.74 V going down. Tie to V IN2 if shutdown feature is not used. An external resistor divider from V IN2 can be used to program a V IN threshold below which channel 2 of the LT8650S shuts down. Do not float this pin.                                                                 |
| 13       | TEMP   | Temperature Output Pin. This pin outputs a voltage proportional to junction temperature. The pin is 250 mV for 25°C and has a slope of 9.5 mV/°C. The output of this pin is not valid during light output loads on both channels while in Burst Mode operation. Put the LT8650S in forced continuous mode for the TEMP output to be valid across the entire output load range. See the Applications Information section for more information. |
| 14       | PG1    | The PG1 pin is the open-drain output of an internal comparator. PG1 remains low until the FB1 pin is within ±7.5% of the final regulation voltage, and there are no fault conditions. PG1 is pulled low during V IN1 UVLO, V CC UVLO, Thermal Shutdown, or when the EN/UV1 pin is low.                                                                                                                                                        |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Table 8. Pin Function Descriptions (Continued)

| Pin No                   | Name   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|--------------------------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 15                       | PG2    | The PG2 pin is the open-drain output of an internal comparator. PG2 remains low until the FB2 pin is within ±7.5% of the final regulation voltage, and there are no fault conditions. PG2 is pulled low during V IN1 UVLO, V CC UVLO, Thermal Shutdown, or when both the EN/UV2 pin is low.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 16                       | SYNC   | External Clock Synchronization Input. Ground this pin for low ripple Burst Mode operation at low output loads. Apply a DC voltage of 2.8V to 4V or tie to V CC for forced continuous mode with spread spectrum modulation. Float the SYNC pin for forced continuous mode without spread spectrum modulation. Apply a clock source to the SYNC pin for synchronization to an external frequency. The LT8650S will be in forced continuous mode when an external frequency is applied.                                                                                                                                                                                                                             |
| 17                       | CLKOUT | In forced continuous mode, the CLKOUT pin provides a 50% duty cycle square wave 90 degrees out of phase with channel 1. This allows synchronization with other regulators with up to four phases. When an external clock is applied to the SYNC pin, the CLKOUT pin outputs a waveform with the same phase, duty cycle, and frequency as the SYNC waveform. In burst mode, the CLKOUT pin is low. Float this pin if the CLKOUT function is not used.                                                                                                                                                                                                                                                             |
| 18                       | BST2   | This pin is used to provide a drive voltage, higher than the input voltage, to the top side power switch of channel 2.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 19, 20                   | SW2    | The SW2 pin is the output of the channel 2 internal power switches. Tie these pins together and connect them to the inductor and boost capacitor. This node should be kept small on the PCB for good performance.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 22, 23                   | SW1    | The SW1 pin is the output of the channel 1 internal power switches. Tie these pins together and connect them to the inductor and boost capacitor. This node should be kept small on the PCB for good performance.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 24                       | BST1   | This pin is used to provide a drive voltage, higher than the input voltage, to the top side power switch of channel 1.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 25                       | V CC   | Internal Regulator Bypass Pin. The internal power drivers and control circuits are powered from this voltage. V CC current is supplied from BIAS if V BIAS >3.1V, otherwise current is drawn from V IN1 . Voltage on V CC varies between 2.8 V and 3.3 V when V BIAS is between 3.0 V and 3.5 V. Decouple this pin to ground with at least a 1μF low ESR ceramic capacitor. Do not load the V CC pin with external circuitry.                                                                                                                                                                                                                                                                                    |
| 26                       | BIAS   | The internal regulator draws current from BIAS instead of V IN1 when BIAS is tied to a voltage higher than 3.1V. For output voltages of 3.3V and above, tie this pin to V OUT . If this pin is tied to a supply other than V OUT , use a 1µF local bypass capacitor on this pin.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 27                       | V C1   | Channel 1 Error Amplifier Output and Switching Regulator Compensation Pin. Connect this pin to the appropriate external components to compensate the regulator loop frequency response. Connect this pin to V CC to use the default internal compensation. If internal compensation is used, the burst mode quiescent current is only 2.5 µA for channel 1. If external compensation is used, the burst mode quiescent current is increased to approximately 50 µA for channel 1.                                                                                                                                                                                                                                |
| 28                       | FB1    | The LT8650S regulates the FB1 pin to 800 mV. Connect the feedback resistor divider tap to this pin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 29                       | SS1    | Channel 1 Output Tracking and Soft-Start Pin. This pin allows user control of output voltage ramp rate during startup. A SS1 voltage below 0.8 V forces the LT8650S to regulate the FB1 pin to equal the SS1 pin voltage. When SS1 is above 0.8 V, the tracking function is disabled and the internal reference resumes control of the error amplifier. An internal 2 μA pull-up current from V CC on this pin allows a capacitor to program output voltage slew rate. This pin is pulled to ground with an internal 200 Ω MOSFET during shutdown and fault conditions; use a series resistor if driving from a low-impedance output. This pin can be left floating if the soft-start feature is not being used. |
| 30                       | SS2    | Channel 2 Output Tracking and Soft-Start Pin. This pin allows user control of output voltage ramp rate during startup. A SS2 voltage below 0.8 V forces the LT8650S to regulate the FB2 pin to equal the SS2 pin voltage. When SS2 is above 0.8 V, the tracking function is disabled and the internal reference resumes control of the error amplifier. An internal 2 μA pull-up current from V CC on this pin allows a capacitor to program output voltage slew rate. This pin is pulled to ground with an internal 200 Ω MOSFET during shutdown and fault conditions; use a series resistor if driving from a low impedance output. This pin can be left floating if the soft-start feature is not being used. |
| 31                       | FB2    | The LT8650S regulates the FB2 pin to 800mV. Connect the feedback resistor divider tap to this pin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 32                       | V C2   | Channel 2 Error Amplifier Output and Switching Regulator Compensation Pin. Connect this pin to appropriate external components to compensate the regulator loop frequency response. Connect this pin to V cc to use the default internal compensation. If internal compensation is used, the burst mode quiescent current is only 2.5 µA for channel 2. If external compensation is used, the burst mode quiescent current is increased to about 50 µA for channel 2.                                                                                                                                                                                                                                            |
| 2,10 Exposed Pad (33-38) | GND    | LT8650S System Ground. Connect these pins to the system ground and the board ground plane. Place the negative terminal of the input capacitors as close to the GND pins as possible. The exposed pad must be soldered to the PCB to lower the thermal resistance.                                                                                                                                                                                                                                                                                                                                                                                                                                                |

## TYPICAL PERFORMANCE CHARACTERISTICS

See the LT8650S data sheet for the typical performance characteristics plots.

## PACKAGING AND ORDERING INFORMATION

## OUTLINE DIMENSIONS

| Package Drawing (Option)   | Package Type   | Package Description       |
|----------------------------|----------------|---------------------------|
| 05-08-1665                 | LQFN           | 32 (28)-Lead LQFN Package |

For the latest package outline information and land patterns (footprints), go to Package Index.

## Ordering Guide

## Table 9. Ordering Guide

| Model               | Temperature Range   | Package Description                 | Packing Quantity   | Package Option   |
|---------------------|---------------------|-------------------------------------|--------------------|------------------|
| LT8650SHV-CSL#PBF   | -40°C to +150°C     | 32-Lead LQFN, 6 mm × 4 mm × 0.94 mm | Tray, 490          | 05-08-1665       |
| LT8650SHV-CSL#TRPBF | -40°C to +150°C     | 32-Lead LQFN, 6 mm × 4 mm × 0.94 mm | Reel, 2500         | 05-08-1665       |

<!-- image -->