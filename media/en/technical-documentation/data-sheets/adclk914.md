<!-- lastmod 2026-04-21 -->
<!-- image -->

## Ultrafast, SiGe, Open-Collector HVDS Clock/Data Buffer Data Sheet

## FEATURES

- 7.5 GHz operating frequency
- 160 ps propagation delay
- 100 ps output rise/fall
- 110 fs random jitter
- On-chip input terminations
- Extended industrial temperature range: -40°C to +125°C
- 3.3 V power supply (V CC - V EE )

## APPLICATIONS

- Clock and data signal restoration
- High speed converter clocking
- Broadband communications
- Cellular infrastructure
- High speed line receivers
- ATE and high performance instrumentation
- Level shifting
- Threshold detection

## GENERAL DESCRIPTION

The ADCLK914 is an ultrafast clock/data buffer fabricated on the Analog Devices, Inc., proprietary, complementary bipolar (XFCB-3) silicon-germanium (SiGe) process. The ADCLK914 features high voltage differential signaling (HVDS) outputs suitable for driving the latest Analog Devices high speed digital-to-analog converters (DACs). The ADCLK914 has a single, differential open-collector output.

The ADCLK914 buffer operates up to 7.5 GHz with a 160 ps propagation delay and adds only 110 fs random jitter (RJ).

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

The input has a center tapped, 100 Ω, on-chip termination resistor and accepts LVPECL, CML, CMOS, LVTTL, or LVDS (ac-coupled only). A V REF pin is available for biasing ac-coupled inputs.

The HVDS output stage is designed to directly drive 1.9 V each side into 50 Ω terminated to V CC for a total differential output swing of 3.8 V.

The ADCLK914 is available in a 16-lead LFCSP. It is specified for operation over the extended industrial temperature range of -40°C to +125°C.

| Data Sheet ADCLK914                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Data Sheet ADCLK914                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| TABLE OF CONTENTS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | TABLE OF CONTENTS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Features................................................................ 1 Applications........................................................... 1 Functional Block Diagram......................................1 General Description...............................................1 Specifications........................................................ 3 Electrical Characteristics....................................3 Absolute Maximum Ratings...................................5 Thermal Performance.........................................5 ESD Caution.......................................................5 Pin Configuration and Function Descriptions........ 6 Typical Performance Characteristics.....................7 | Applications Information........................................ 9 Power/Ground Layout and Bypassing................9 HVDS Output Stage...........................................9 Interfacing to High Speed DACs........................ 9 Optimizing High Speed Performance.................9 Random Jitter.....................................................9 Typical Application Circuits...............................10 Outline Dimensions..............................................11 Ordering Guide.................................................11 Evaluation Boards............................................ 11 |
| REVISION HISTORY                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | REVISION HISTORY                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

## SPECIFICATIONS

## ELECTRICAL CHARACTERISTICS

VCC  = 3.3 V, V EE = 0 V, T A = -40°C to +125°C. All outputs terminated through 50 Ω to V CC , unless otherwise noted.

Table 1.

| Parameter                                     | Symbol   | Min         | Typ          | Max         | Unit   | Test Conditions/Comments                             |
|-----------------------------------------------|----------|-------------|--------------|-------------|--------|------------------------------------------------------|
| DC INPUT CHARACTERISTICS                      |          |             |              |             |        |                                                      |
| Input High Voltage                            | V IH     | V EE + 1.65 |              | V CC        | V      |                                                      |
| Input Low Voltage                             | V IL     | V EE        |              | V CC - 0.2  | V      |                                                      |
| Input Differential Range                      | V ID     | 0.2         |              | 3.4         | V p-p  | T A = -40°C to +85°C (±1.7 V between input pins)     |
|                                               |          | 0.2         |              | 2.8         | V p-p  | T A = 85°C to 125°C (±1.4 V between input pins)      |
| Input Capacitance                             | C IN     |             | 0.4          |             | pF     |                                                      |
| Input Resistance                              |          |             | 50           |             | Ω      |                                                      |
| Differential Mode                             |          |             | 100          |             | Ω      |                                                      |
| Common Mode                                   |          |             | 50           |             | kΩ     | Open termination                                     |
| Input Bias Current                            |          |             | 20           |             | µA     |                                                      |
| DC OUTPUT CHARACTERISTICS                     |          |             |              |             |        |                                                      |
| Output High Voltage                           | V OH     | V CC - 0.55 | V CC - 0.40  | V CC - 0.20 | V      |                                                      |
| Output Low Voltage                            | V OL     | V CC - 2.75 | V CC - 2.35  | V CC - 1.7  | V      |                                                      |
| Output Differential Range                     | V OD     | 1.45        | 1.95         | 2.22        | V      |                                                      |
| Reference Voltage                             | V REF    |             |              |             |        |                                                      |
| Output Voltage                                |          |             | (V CC + 1)/2 |             | V      | -500 μA to +500 μA                                   |
| Output Resistance                             |          |             | 250          |             | Ω      |                                                      |
| AC PERFORMANCE                                |          |             |              |             |        |                                                      |
| Operating Frequency                           |          |             | 7.5          |             | GHz    | >1.1 V differential output swing, V CC = 3.3 V ± 10% |
| Propagation Delay                             | t PD     | 127         | 158          | 202         | ps     | V CC = 3.3 V ± 10%, V ICM = V REF , V ID = 1.6 V p-p |
| Propagation Delay Temperature                 |          |             | 140          |             | fs/°C  |                                                      |
| Coefficient Propagation Delay Skew (Device to |          |             |              | 65          | ps     |                                                      |
| Device)                                       |          |             |              |             |        | V ID = 1.6 V p-p                                     |
| Output Rise Time                              | t R      |             | 100          | 125         | ps     | 20%/80%                                              |
| Output Fall Time                              | t F      |             | 80           | 95          | ps     | 80%/20%                                              |
| Wideband Random Jitter 1                      | RJ       |             | 110          |             | fs rms | V ID = 1.6 V p-p, 6 V/ns, V ICM = 1.85 V             |
| Additive Phase Noise                          |          |             |              |             |        |                                                      |
| 622.08 MHz                                    |          |             | -132         |             | dBc/Hz | @10 Hz offset                                        |
|                                               |          |             | -143         |             | dBc/Hz | @100 Hz offset                                       |
|                                               |          |             | -151         |             | dBc/Hz | @1 kHz offset                                        |
|                                               |          |             | -156         |             | dBc/Hz | @10 kHz offset                                       |
|                                               |          |             | -157         |             | dBc/Hz | @100 kHz offset                                      |
|                                               |          |             | -156         |             | dBc/Hz | >1 MHz offset                                        |
| 245.76 MHz                                    |          |             | -133         |             | dBc/Hz | @10 Hz offset                                        |
|                                               |          |             | -143         |             | dBc/Hz | @100 Hz offset                                       |
|                                               |          |             | -153         |             | dBc/Hz | @1 kHz offset                                        |
|                                               |          |             | -158         |             | dBc/Hz | @10 kHz offset                                       |
|                                               |          |             | -159         |             | dBc/Hz | @100 kHz offset                                      |
|                                               |          |             | -158         |             | dBc/Hz | >1 MHz offset                                        |
| 122.88 MHz                                    |          |             | -150         |             | dBc/Hz | @10 Hz offset                                        |

## SPECIFICATIONS

Table 1. (Continued)

| Parameter                       | Symbol               | Min                  | Typ                  | Max                  | Unit                 | Test Conditions/Comments   |
|---------------------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------------|
|                                 |                      |                      | -156                 |                      | dBc/Hz               | @100 Hz offset             |
|                                 |                      |                      | -160                 |                      | dBc/Hz               | @1 kHz offset              |
|                                 |                      |                      | -161                 |                      | dBc/Hz               | @10 kHz offset             |
|                                 |                      |                      | -161                 |                      | dBc/Hz               | @100 kHz offset            |
|                                 |                      |                      | -160                 |                      | dBc/Hz               | >1 MHz offset              |
| POWER SUPPLY                    | POWER SUPPLY         | POWER SUPPLY         | POWER SUPPLY         | POWER SUPPLY         | POWER SUPPLY         | POWER SUPPLY               |
| Supply Voltage Requirement      | V CC                 | 2.97                 |                      | 3.63                 | V                    |                            |
| Power Supply Current            | Power Supply Current | Power Supply Current | Power Supply Current | Power Supply Current | Power Supply Current | Power Supply Current       |
| Negative Supply Current         | I VEE                | 66                   | 111                  | 150                  | mA                   | Includes output current    |
| Positive Supply Current         | I VCC                | 34                   | 55                   | 73                   | mA                   |                            |
| Power Supply Rejection 2        | PSR VCC              |                      | 13                   |                      | ps/V                 | V CC = 3.3 V ± 10%         |
| Output Swing Supply Rejection 3 |                      |                      | -15                  |                      | dB                   | V CC = 3.3 V ± 10%         |

1 Calculated from SNR of ADC method. See Figure 8 for rms jitter vs. input slew rate.

2 Change in t PD per change in V CC .

3 Change in output swing per change in V CC .

## ABSOLUTE MAXIMUM RATINGS

Table 2.

| Parameter                            | Rating                 |
|--------------------------------------|------------------------|
| Supply Voltage (V CC to GND)         | 6.0 V                  |
| Input Voltage                        | -0.5 V to V CC + 0.5 V |
| Maximum Output Voltage               | V CC + 0.5 V           |
| Minimum Output Voltage               | V EE - 0.5 V           |
| Input Termination                    | ±2 V                   |
| Voltage Reference                    | V CC - V EE            |
| Operating Temperature Range, Ambient | -40°C to +125°C        |
| Operating Temperature, Junction      | 150°C                  |
| Storage Temperature Range            | -65°C to +150°C        |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL PERFORMANCE

The ADCLK914 is specified for a case temperature (T CASE ). To ensure that T CASE is not exceeded, use an airflow source.

To determine the junction temperature on the application PCB

<!-- formula-not-decoded -->

where:

TJ is the junction temperature (°C).

TCASE is the case temperature (°C) measured by the customer at top center of package.

ΨJT is determined by the values listed in Table 3.

PD is the power dissipation.

Values of θ JA are provided for package comparison and PCB design considerations. θ JA can be used for a first-order approximation of T J by the equation

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

where TA is the ambient temperature (°C).

Values of θ JB are provided for package comparison and PCB design considerations.

Table 3. Thermal Parameters for ADCLK914 16-Lead LFCSP

| Symbol   | Description 1                                                                                                   |   Value | Units   |
|----------|-----------------------------------------------------------------------------------------------------------------|---------|---------|
| θ JA     | Junction-to-ambient thermal resistance, 0.0 meters per sec air flow per JEDEC JESD51-2 (still air)              |    78.4 | °C/W    |
| θ JMA    | Junction-to-ambient thermal resistance, 1.0 meter per sec air flow per JEDEC JESD51-6 (moving air)              |    68.5 | °C/W    |
| θ JMA    | Junction-to-ambient thermal resistance, 2.5 m/s air flow per JEDEC JESD51-6 (moving air)                        |    61.4 | °C/W    |
| θ JB     | Junction-to-board thermal resistance, 1.0 meter per sec air flowper JEDEC JESD51-8 (moving air)                 |    48.8 | °C/W    |
| θ JC     | Junction-to-case thermal resistance (die-to- heatsink) per MIL-Std 883, Method 1012.1                           |     1.5 | °C/W    |
| Ψ JT     | Junction-to-top-of-package characterization parameter, 0 meters per sec air flow per JEDEC JESD51-2 (still air) |     2   | °C/W    |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pin Configuration

<!-- image -->

Table 4. Pin Function Descriptions

| Pin No.               | Mnemonic   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|-----------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1                     | D          | Noninverting Input.                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2                     | D          | Inverting Input.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 3, 4, 5, 6, 9, 10     | NC         | No Connect. No physical connection to the die.                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 7, 14                 | V EE       | Negative Supply Voltage.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 8, 13                 | V CC       | Positive Supply Voltage.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 11                    | Q          | Inverting Output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 12                    | Q          | Noninverting Output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 15                    | V REF      | Reference Voltage. Reference voltage for biasing ac-coupled inputs.                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 16                    | V T        | Center Tap. Center tap of 100 Ω input resistor.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Heat Sink/Exposed Pad | NC         | No Connect. The metallic back surface of the package is not electrically connected to any part of the circuit. It can be left floating for optimal electrical isolation between the package handle and the substrate of the die. It can also be soldered to ground on the application board if improved thermal and/or mechanical stability is needed. Exposed metal at the corners of the package is connected to this back surface. Allow sufficient clearance for vias and other components. |

## TYPICAL PERFORMANCE CHARACTERISTICS

VCC  = 3.3 V, V EE = 0 V, T A = 25°C. All outputs terminated through 50 Ω to V CC , unless otherwise noted.

<!-- image -->

Figure 3. Output Waveform at 1 GHz, V CC = 3.3 V

<!-- image -->

Figure 4. Phase Noise at 122.88 MHz

<!-- image -->

Figure 5. Phase Noise at 245.76 MHz

<!-- image -->

Figure 6. Output Waveform at 1 GHz, V CC = 3.3 V

Figure 7. Phase Noise at 622.08 MHz

<!-- image -->

Figure 8. RMS Jitter vs. Input Slew Rate

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 9. Differential Output Swing vs. Power Supply Voltage

<!-- image -->

Figure 10. Power Supply Current vs. Power Supply Voltage

<!-- image -->

Figure 11. Propagation Delay vs. V ICM ; V ID = 1.6 V p-p

Figure 12. Propagation Delay vs. V ID ; V ICM = 2.15 V

<!-- image -->

Figure 13. Toggle Rate, Differential Output Swing vs. Frequency

<!-- image -->

## APPLICATIONS INFORMATION

## POWER/GROUND LAYOUT AND BYPASSING

The ADCLK914 buffer is designed for very high speed applications. Consequently, high speed design techniques must be used to achieve the specified performance. It is critically important to use low impedance supply planes for both the negative supply (V EE ) and the positive supply (V CC ) planes as part of a multilayer board. Providing the lowest inductance return path for switching currents ensures the best possible performance in the target application.

It is also important to adequately bypass the input and output supplies. Place a 1 µF electrolytic bypass capacitor within several inches of each power supply pin to ground. In addition, place multiple high quality 0.001 µF bypass capacitors as close as possible to each V EE and V CC supply pin and connect these capacitors to the GND plane with redundant vias. Carefully select high frequency bypass capacitors for minimum inductance and ESR. To maximize the effectiveness of the bypass capacitors at high frequencies, strictly avoid parasitic layout inductance.

Slew currents may also appear at the V DD and V SS pins of the device being driven by the ADCLK914.

## HVDS OUTPUT STAGE

The ADCLK914 has been developed to provide a bipolar interface to any CMOS device that requires extremely low jitter, high amplitude clocks. It is intended to be placed as close as possible to the receiving device and allows the rest of the clock distribution to run at standard CML or PECL levels.

Interconnects must be short and very carefully designed because the single terminated design provides much less margin for error than lower voltage, double terminated transmission techniques.

Figure 14. Simplified Schematic Diagram of the ADCLK914 HVDS Output Stage

<!-- image -->

## INTERFACING TO HIGH SPEED DACS

The ADCLK914 is designed to drive high amplitude, low jitter clock signals into high speed, multi-GSPS DACs. The ADCLK914 should be placed as close as possible to the clock input of the DAC so that the high slew rate and high amplitude clock signal that these devices require do not cause routing difficulties, generate EMI, or become degraded by dielectric and other losses. The ADCLK914, in turn, may be driven directly by standard or low swing PECL, CML, CMOS, or LVTTL sources, or by LVDS with simple ac coupling, as illustrated in Figure 15 through Figure 19.

## OPTIMIZING HIGH SPEED PERFORMANCE

As with any high speed circuit, proper design and layout techniques are essential to obtaining the specified performance. Stray capacitance, inductance, inductive power, and ground impedances, as well as other layout issues, can severely limit performance and can cause oscillation. Discontinuities along input and output transmission lines can also severely limit the specified jitter performance by reducing the effective input slew rate.

Input and output matching have a significant impact on performance. The ADCLK914 buffer provides internal 50 Ω termination resistors for both D and D inputs. The return side can be connected to the reference pin provided or to a current sink at V CC - 2 V for use with differential PECL, or to V CC for direct coupled CML. The V REF pin should be left floating any time that it is not used to minimize power consumption.

Note that the ADCLK914 V REF source is current-limited to resist damage from momentary shorts to V EE or V CC and from capacitor charging currents; for this reason, the V REF source cannot be used as a PECL termination supply.

Carefully bypass the termination potential using ceramic capacitors to prevent undesired aberrations on the input signal due to parasitic inductance in the termination return path. If the inputs are directly coupled to a source, care must be taken to ensure that the pins remain within the rated input differential and common-mode ranges.

If the return is floated, the device exhibits 100 Ω cross-term-ination, but the source must then control the common-mode voltage and supply the input bias currents.

ESD/clamp diodes between the input pins prevent the appli-cation of excessive offsets to the input transistors. ESD diodes are not optimized for best ac performance. If a clamp is needed, it is recommended that appropriate external diodes be used.

## RANDOM JITTER

The ADCLK914 buffer has been specifically designed to minimize random jitter over a wide input range. Provided that sufficient voltage swing is present, random jitter is affected most by the slew rate of the input signal. Whenever possible, clamp excessively large input signals with fast Schottky diodes because attenuators reduce the slew rate. Input signal runs of more than a few centimeters should be over low loss dielectrics or cables with good high frequency characteristics.

## APPLICATIONS INFORMATION

## TYPICAL APPLICATION CIRCUITS

<!-- image -->

Figure 15. Interfacing to CML Inputs

<!-- image -->

Figure 16. AC Coupling Differential Signals

<!-- image -->

Figure 17. Interfacing to High Speed DAC

Figure 18. Interfacing to ECL Inputs

<!-- image -->

Figure 19. Interfacing to AC-Coupled, Single-Ended Inputs

<!-- image -->

## OUTLINE DIMENSIONS

| Package Drawing (Option)   | Package Type   | Package Description              |
|----------------------------|----------------|----------------------------------|
| CP-16-22                   | LFCSP          | 16-Lead Lead Frame Scale Package |

For the latest package outline information and land patterns (footprints), go to Package Index.

## ORDERING GUIDE

| Model 1         | Temperature Range   | Package Description                           | Package Option   |
|-----------------|---------------------|-----------------------------------------------|------------------|
| ADCLK914BCPZ-WP | -40°C to +125°C     | 16-Lead Lead Frame Chip Scale Package [LFCSP] | CP-16-22         |
| ADCLK914BCPZ-R7 | -40°C to +125°C     | 16-Lead Lead Frame Chip Scale Package [LFCSP] | CP-16-22         |
| ADCLK914BCPZ-R2 | -40°C to +125°C     | 16-Lead Lead Frame Chip Scale Package [LFCSP] | CP-16-22         |

## EVALUATION BOARDS

| Model 1       | Description      |
|---------------|------------------|
| ADCLK914/PCBZ | Evaluation Board |

## Legal Terms and Conditions

Information furnished by Analog Devices is believed to be accurate and reliable "as is". However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners. All Analog Devices products contained herein are subject to release and availability.