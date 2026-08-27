<!-- lastmod 2022-08-04 -->
<!-- image -->

<!-- image -->

## 100% Duty Cycle, Low-Noise, Step-Down, PWM DC-DC Converter

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX887 high-efficiency, step-down DC-DC converter provides an adjustable output from 1.25V to 10.5V. It accepts inputs from 3.5V to 11V and delivers 600mA. Operation to 100% duty cycle minimizes dropout voltage (300mV typ at 500mA). Synchronous rectification reduces output rectifier losses, resulting in efficiency as high as 95%.

Fixed-frequency pulse-width modulation (PWM) reduces noise in sensitive communications applications.  Using  a  high-frequency  internal  oscillator  allows tiny  surface-mount components to reduce PC board area, and eliminates audio-frequency interference. A SYNC input allows synchronization to an external clock to  avoid interference with sensitive RF and dataacquisition circuits.

The MAX887 features current-mode operation for superior load/line-transient response. Cycle-by-cycle current limiting  protects  the  internal  MOSFET and rectifier. A low-current (2.5µA typ) shutdown mode conserves battery life.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Applications

Portable Instruments

Cellular Phones and Radios

Personal Communicators

Distributed Power Systems

Computer Peripherals

## \_\_\_\_\_\_\_\_\_\_Typical Operating Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' 95% Efficiency
- ' 600mA Output Current
- ' Cycle-by-Cycle Current Limiting
- ' Low-Dropout, 100% Duty-Cycle Operation, 300mV at 500mA
- ' Internal 0.6 Ω (typ) MOSFET
- ' Internal Synchronous Rectifier
- ' High-Frequency Current-Mode PWM
- ' External SYNC or Internal 300kHz Oscillator
- ' Guaranteed 260kHz to 340kHz Internal Oscillator Frequency Limits
- ' 2.5µA Shutdown Mode

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART       | TEMP. RANGE    | PIN-PACKAGE   |
|------------|----------------|---------------|
| MAX887HC/D | 0°C to +70°C   | Dice*         |
| MAX887HESA | -40°C to +85°C | 8 SO          |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Configuration

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

## 100% Duty Cycle, Low-Noise, Step-Down, PWM DC-DC Converter

## ABSOLUTE MAXIMUM RATINGS

REF, FB, SYNC, VL to GND..................................... -0.3V to +6V

V+ to GND............................................................. -0.3V to +12V

SHDN

, LX to GND ....................................... -0.3V to (V+ + 0.3V)

PGND to GND ...................................................... -0.3V to +0.3V

Continuous Power Dissipation (TA = +70°C)

SO (derate 9.09mW/°C above +70°C) .........................471mW

| Operating Temperature Ranges                                                  |
|-------------------------------------------------------------------------------|
| MAX887HC/D.......................................................0°C to +70°C |
| MAX887HESA...................................................-40°C to +85°C   |
| Storage Temperature Range ........................... -65°C to +165°C         |
| Lead Temperature (soldering, 10sec) ............................ +300°C       |

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS

(V+ = +7V, PGND = GND = 0V, SHDN = V+, (TA = 0°C to TMAX) , unless otherwise noted.)

| PARAMETER                                 | SYMBOL       | CONDITIONS                         |   MIN |   TYP | MAX   | UNITS   |
|-------------------------------------------|--------------|------------------------------------|-------|-------|-------|---------|
| Supply Range                              | V+           |                                    |   3.5 |       | 11.0  | V       |
| Quiescent Supply Current (PWM Mode)       | I V+, PWM    | I OUT = 0mA, SYNC = 3.0V           |       |   2.7 | 4.0   | mA      |
| Quiescent Supply Current (PFM Mode)       | I V+, PFM    | I OUT = 0mA, SYNC = GND            |       |   0.2 | 0.5   | mA      |
| Shutdown Supply Current                   | I V+, SHDN   | SHDN = GND                         |       |   2.5 | 5     | µA      |
| Output Voltage Range                      | V OUT, RANGE | Circuit of Figure 2                |  1.25 |       | 10.50 | V       |
| Load Regulation                           |              | I OUT = 0mA to 500mA               |       | 0.005 |       | %/mA    |
| Line Regulation                           |              | V IN = 4V to 11V, PWM mode         |       |   0.2 |       | %/V     |
| PWM FB Feedback Threshold                 | V FB         | SYNC = 3.0V, PWM duty cycle = 50%  | 1.225 | 1.250 | 1.275 | V       |
| FB Input Current                          | I FB         | FB = 1.30V                         |       |       | ±0.10 | µA      |
| SYNC Frequency                            | f SYNC       |                                    |    25 |       | 440   | kHz     |
| SYNC Pulse Width High or Low              | SYNC, PW     |                                    |   500 |       |       | ns      |
| PWM Maximum Duty Cycle                    | PWM, DUTY    | SYNC = 3.0V, FB = 1.18V            |   100 |       |       | %       |
| PWM Switching Frequency                   | f OSC        | SYNC = 3.0V                        |   260 |   300 | 340   | kHz     |
| High-Side Current Limit                   | I LIM+       |                                    |  0.75 |   1.0 | 1.40  | A       |
| LX On-Resistance                          | R ON, LX     | I LX = ±100mA                      |       |   0.6 |       | Ω       |
| LX Leakage Current                        | I LXLKG      | V+ = 12V, LX = GND to 12V          |   -10 |   1.0 | 10    | µA      |
| LX Reverse Leakage Current, Regulator Off | I LXLKGR     | V+ = floating, LX = 5V, SHDN = GND |       |   1.0 | 20    | µA      |
| Undervoltage Lockout                      | V +, UVLO    | V+ falling                         |       |   3.0 | 3.3   | V       |
| Startup Voltage                           | V +, START   | V+ rising                          |       |   3.1 | 3.5   | V       |
| SYNC Input High Voltage                   | V IH, SYNC   |                                    |   2.5 |       |       | V       |
| SYNC Input Low Voltage                    | V IL, SYNC   |                                    |       |       | 0.5   | V       |
| SYNC Input Current                        | I IN, SYNC   | SYNC = GND or 3V                   |       |       | ±1    | µA      |
| SHDN Input High Voltage                   | V IH, SHDN   |                                    |   2.4 |       |       | V       |
| SHDN Input Low Voltage                    | V IL, SHDN   |                                    |       |       | 0.8   | V       |
| SHDN Input Current, Sinking               | I IN-, SHDN  | SHDN = GND or V+                   |       |       | ±1    | µA      |
| SHDN Input Capacitance                    | C IN, SHDN   | (Note 1)                           |       |       | 10    | pF      |
| VL Output Voltage                         | V L          | I VL = 0mA to 1mA                  |       |   3.3 |       | V       |
| REF Output Voltage                        | V REF        | 0µA to 30µA                        |       |  1.25 |       | V       |

Note 1: Guaranteed by design and not production tested.

2

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 100% Duty Cycle, Low-Noise, Step-Down, PWM DC-DC Converter

## ELECTRICAL CHARACTERISTICS

(V+ = +7V, PGND = GND = 0V, SHDN = V+, (TA = -40°C to +85°C) , unless otherwise noted.) (Note 2)

| PARAMETER                           | SYMBOL       | CONDITIONS                        |   MIN |   TYP | MAX   | UNITS   |
|-------------------------------------|--------------|-----------------------------------|-------|-------|-------|---------|
| Supply Range                        | V+           |                                   |   3.5 |       | 11.0  | V       |
| Quiescent Supply Current (PWM Mode) | I V+, PWM    | I OUT = 0mA, SYNC = 3.0V          |       |   2.7 | 4.0   | mA      |
| Quiescent Supply Current (PFM Mode) | I V+, PFM    | I OUT = 0mA, SYNC = GND           |       |   0.2 | 0.6   | mA      |
| Shutdown Supply Current             | I V+, SHDN   | SHDN = GND                        |       |   2.5 | 5     | µA      |
| Output Voltage Range                | V OUT, RANGE | Circuit of Figure 2               |  1.25 |       | 10.50 | V       |
| PWM FB Feedback Threshold           | V FB         | SYNC = 3.0V, PWM duty cycle = 50% | 1.222 | 1.250 | 1.278 | V       |
| FB Input Current                    | I FB         | FB = 1.30V                        |       |       | ±0.10 | µA      |
| PWM Switching Frequency             | f OSC        | SYNC = 3.0V                       |   250 |   300 | 350   | kHz     |
| High-Side Current Limit             | I LIM+       |                                   |  0.75 |  1.00 | 1.50  | A       |
| Undervoltage Lockout                | V +, UVLO    | V+ falling                        |       |   3.0 | 3.3   | V       |
| Startup Voltage                     | V +, START   | V+ rising                         |       |   3.1 | 3.5   | V       |

Note 2: Specifications from 0°C to -40°C are guaranteed by design and not production tested.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics (Circuit of Figure 2, TA = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

## 100% Duty Cycle, Low-Noise, Step-Down, PWM DC-DC Converter

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics (continued)

(Circuit of Figure 2, TA = +25°C, unless otherwise noted.)

4

<!-- image -->

<!-- image -->

## 100% Duty Cycle, Low-Noise, Step-Down, PWM DC-DC Converter

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics (continued)

(Circuit of Figure 2, TA = +25°C, unless otherwise noted.)

<!-- image -->

## LIGHT-LOAD, PFM-MODE SWITCHING WAVEFORMS

<!-- image -->

VIN  = 5V, V OUT  = 3.3V, LOAD = 0mA A:  LX, 5V/div

B:  V OUT , 20mV/div, AC COUPLED

C:  INDUCTOR CURRENT, 200mA/div

<!-- image -->

## MEDIUM-LOAD, PFM-MODE SWITCHING WAVEFORMS

<!-- image -->

VIN  = 5V, V OUT  = 3.3V, LOAD = 70mA A:  LX, 5V/div

B:  V OUT , 20mV/div, AC COUPLED

C:  INDUCTOR CURRENT, 200mA/div

## 100% Duty Cycle, Low-Noise, Step-Down, PWM DC-DC Converter

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics (continued)

(Circuit of Figure 2, TA = +25°C, unless otherwise noted.)

## LOAD-TRANSIENT RESPONSE

<!-- image -->

VIN  = 5V, V OUT  = 3.3V, LOAD = 0mA TO 500mA, PWM MODE A:  LX, 5V/div B:  V OUT , 50mV/div, AC COUPLED C:  LOAD CURRENT, 500mA/div

## RECOVERY FROM 100% DUTY CYCLE (DROP OUT)

<!-- image -->

VIN  = 3.3V TO 11V, V OUT  = 3.3V, LOAD = 500mA, PWM MODE A:  V IN , 5V/div B:  V OUT , 50mV/div, AC COUPLED C:  LX, 10V/div

## LINE-TRANSIENT RESPONSE

<!-- image -->

VIN  = 5V TO 11V, V OUT  = 3.3V,

LOAD = 500mA, PWM MODE

A:  V IN , 5V/div

B:  V OUT , 20mV/div, AC COUPLED

## SHUTDOWN AND STARTUP RESPONSE

<!-- image -->

500

m

s/div

VIN  = 5V, V OUT  = 3.3V,

LOAD = 100mA, PWM MODE

A:  SHDN, 5V/div

B:  V OUT , 2V/div, AC COUPLED

C:  LX, 5V/div

D:  INDUCTOR CURRENT, 500mA/div

## 100% Duty Cycle, Low-Noise, Step-Down, PWM DC-DC Converter

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Description

|   PIN | NAME   | FUNCTION                                                                                                                                                                                                                                                                                                                                                                   |
|-------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     1 | SHDN   | Shutdown, Active-Low, Logic-Level Input. Connect SHDN to V+ for normal operation.                                                                                                                                                                                                                                                                                          |
|     2 | FB     | Feedback Input. Connect FB to a resistor voltage divider between the output and GND.                                                                                                                                                                                                                                                                                       |
|     3 | REF    | Reference Bypass Output. Connect a 0.047µF capacitor to GND very close to the MAX887, within 0.2 in. (5mm).                                                                                                                                                                                                                                                                |
|     4 | VL     | 3.3V Internal Logic Regulator Output. Bypass VL to GND with a 2.2µF capacitor very close to the MAX887, within 0.2 in. (5mm).                                                                                                                                                                                                                                              |
|     5 | GND    | Ground                                                                                                                                                                                                                                                                                                                                                                     |
|     6 | SYNC   | Oscillator Synchronization and PWM Control Input. SYNC is a logic-level input. Tie SYNC to VL for internal 300kHz PWM operation at all loads. The oscillator synchronizes to the negative edge of an external clock between 10kHz and 400kHz. The MAX887 operates in PWM mode when SYNC is clocked. Tying SYNC to GND allows a reduced supply-current mode at light loads. |
|     7 | LX     | Inductor Connection to the drain of an internal P-channel MOSFET                                                                                                                                                                                                                                                                                                           |
|     8 | V+     | Supply-Voltage Input. 3.5V min to 11V max. Bypass V+ to GND with a 0.33µF and large-value electrolytic capacitor in parallel. These capacitors must be as close to the V+ and GND pins as possible. Place the 0.33µF capacitor within 0.2 in. (5mm) of the MAX887.                                                                                                         |

<!-- image -->

Figure 1.  Simplified Functional Block Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 100% Duty Cycle, Low-Noise, Step-Down, PWM DC-DC Converter

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAX887 is a step-down, pulse-width modulation (PWM) DC-DC converter that provides an adjustable output from 1.25V to 10.5V. It accepts inputs from 3.5V to 11V and delivers up to 600mA. An internal MOSFET and synchronous rectifier reduce PC board area while maintaining high efficiency. Cycle-by-cycle current limiting  protects  the  internal  MOSFETs  and  reduces system stress during overload conditions. Operation with up to 100% duty cycle for an output of 3V and higher minimizes dropout voltage. Fixed-frequency PWM operation reduces interference in sensitive communications and data-acquisition applications. A SYNC input allows synchronization to an external clock. When enabled, Idle  Mode™ extends battery life under light loads by placing the regulator in low quiescent current (200µA typ) pulse-frequency modulation (PFM) operation. Shutdown quiescent current is 2.5µA typ.

## PWM Control Scheme

The MAX887 uses an oscillator-triggered minimum/ maximum on-time current-mode control scheme. The minimum on-time is approximately 280ns unless in dropout. The maximum on-time is approximately 4/fOSC, allowing operation to 100% duty cycle. Currentmode feedback provides cycle-by-cycle current limiting for superior load and line response and protection of the internal MOSFET and rectifier.

At each falling edge of the internal oscillator, the SYNC cell  sends  a  PWM ON signal to the control and drive logic, turning on the internal P-channel MOSFET (main switch) (Figures 1 and 2). This allows current to ramp up through the inductor (Figure 2) to the load, and stores energy in a magnetic field. The switch remains on until either the current-limit (ILIM) comparator is tripped, the maximum on-time is reached (not shown),

Figure 2.  Typical Operating Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

or  the  PWM comparator signals that the output is in regulation. When the switch turns off, during the second half of each cycle, the inductor's magnetic field collapses, releasing the stored energy and forcing current through the output diode to the output filter capacitor  and  load.  The  output  filter  capacitor  stores  charge when the inductor current is high and releases it when the inductor current is low, smoothing the voltage across the load.

During normal operation, the MAX887 regulates output voltage by switching at a constant frequency and then modulating the power transferred to the load per pulse using the PWM comparator. A multi-input comparator sums three weighted differential signals (the output voltage with respect to the reference, the main switch current sense, and the slope-compensation ramp) and changes states when a threshold is reached. It modulates output power by adjusting the inductor peak current during the first half of each cycle, based on the output error voltage. The MAX887's loop gain is relatively low to  enable the use of a small, low-valued output filter capacitor. The resulting load regulation is 2.5% typ at 500mA. Slope compensation is added to account for the inductor current waveform's down slope during the second half of each cycle, and to eliminate the inductor current staircasing characteristic of current-mode controllers at high duty cycles.

## 100% Duty-Cycle Operation

For the internal oscillator frequency, the fOSC/4 maximum on-time exceeds one cycle and permits operation to  100% duty cycle. As the input voltage drops, the duty cycle increases until the P-channel MOSFET is held on continuously and 100% duty cycle is reached. Dropout voltage in 100% duty cycle is the output current multiplied by the on-resistance of the internal switch and inductor around 300mV (IOUT = 500mA). In PWM mode, subharmonic oscillation can occur near dropout, but subharmonic voltage ripple is small, since the ripple current is low. When using synchronization to an external oscillator, 100% duty cycle is available for SYNC frequencies higher than fOSC/4.

## Synchronous Rectification

Although an external Schottky diode is used as the primary output rectifier, an N-channel synchronous rectifier turns on to reduce power loss across the diode and improve efficiency. During the second half of each cycle, when the inductor current ramps below the threshold set by the NEGLIM comparator or when the end of the oscillator period is reached, the synchronous rectifier turns off. This keeps excess current from flowing

<!-- image -->

## 100% Duty Cycle, Low-Noise, Step-Down, PWM DC-DC Converter

backward through the inductor, from the output filter capacitor to GND, or through the switch and synchronous rectifier to GND.

During PWM operation, the NEGLIM threshold adjusts to permit small amounts of reverse current to flow from the output during light loads. This allows regulation with a constant switching frequency and eliminates minimum load requirements. The NEGLIM comparator threshold is 0mA if VFB &lt; 1.25V, and decreases as VFB exceeds 1.25V to prevent the output from rising. The NEGLIM threshold in PFM mode is 0mA. (See Forced PWM and Idle Mode operation.)

Forced PWM and Idle Mode Operation Connect SYNC to VL for normal forced PWM operation. Forced PWM operation is desirable in sensitive RF and data-acquisition applications, to ensure that switchingnoise harmonics do not interfere with sensitive IF and data-sampling frequencies. A minimum load is not required during forced PWM operation, since the synchronous rectifier passes reverse inductor current as needed to allow constant-frequency operation with no load.

Connecting SYNC to GND enables Idle Mode operation.  This  proprietary control scheme places the MAX887 in PFM mode at light loads to improve efficiency and reduce quiescent current to 200µA typ. With Idle Mode enabled, the MAX887 initiates PFM operation when the output current drops below 100mA. During PFM operation, the MAX887 switches only as needed to  service  the  load,  reducing  the  switching  frequency and associated losses in the internal switch and synchronous rectifier, Schottky diode, and external inductor.

During PFM mode, a switching cycle is initiated when the PFM comparator senses that the output voltage has dropped too low. The P-channel MOSFET switch turns on and conducts current to the output filter capacitor and load until the inductor current reaches the PFM peak current limit (100mA). Then the switch turns off and the magnetic field in the inductor collapses, forcing current through the output diode to the output filter capacitor and load. The output filter capacitor stores charge when the inductor current is high and releases charge when it is low, smoothing the voltage across the load. Then the MAX887 waits until the PFM comparator senses a low output voltage again. During PFM mode, the synchronous rectifier is disabled and the external Schottky diode is used as an output rectifier.

The PFM current comparator controls both entry into PWM mode and the peak switching current during PFM mode. Consequently, some jitter is normal during tran- sition  from PFM to PWM modes with loads around 100mA, and has no adverse impact on regulation. Output ripple is higher during PFM operation, and the output filter capacitor should be selected on this basis when PFM mode is used. Output ripple and noise are higher during PFM operation.

<!-- image -->

## SYNC Input and Frequency Control

The MAX887H comes with an internal oscillator set for a fixed switching frequency of 300kHz. Connect SYNC to VL for normal forced-PWM operation. Do not leave SYNC floating. Connecting SYNC to GND enables Idle Mode operation to reduce supply current at light loads.

SYNC is a logic-level input useful for operating-mode selection and frequency control. It is a negative edge triggered input that allows synchronization to an external frequency between 25kHz and 440kHz. When SYNC is clocked by an external signal, the converter operates in PWM mode. If SYNC is low or high for more than 100µs, the oscillator defaults to 300kHz. Operating at a lower switching frequency reduces quiescent current, but reduces maximum load current as well (Table 1). For example, at 330kHz, maximum output current is 600mA, while at 30kHz, maximum output current is only 30mA. Note that 100% duty cycle will only occur for fSYNC &gt; fOSC/4.

## VL Regulator

The MAX887 uses an internal 3.3V linear regulator for logic power in the IC. This logic supply is brought out using the VL pin for bypassing and compensation with an external 2.2µF capacitor to GND. Connect this capacitor close to the MAX887, within 0.2in (5mm).

## Shutdown

Connecting SHDN to GND places the MAX887 in a lowcurrent shutdown mode (IQ = 2.5µA typ at V+ = 7V). In shutdown, the reference, VL regulator, control circuitry, internal switching MOSFET, and the synchronous rectifier turn off and the output falls to 0V. Connect SHDN to V+ for normal operation.

## Current-Sense Comparators

Several internal current-sense comparators are used inside the MAX887. In PWM operation, the PWM comparator is used for current-mode control. Current-mode control imparts cycle-by-cycle current limiting and provides improved load and line response, allowing tighter specification of the inductor saturation current limit to reduce inductor cost. A second 100mA current-sense comparator is used across the P-channel switch to control  entry  into  PFM  mode.  A  third  current-sense  comparator monitors current through the internal N-channel MOSFET to set the NEGLIM threshold and determine

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 100% Duty Cycle, Low-Noise, Step-Down, PWM DC-DC Converter

when to turn off this synchronous rectifier. A fourth comparator (ILIM) is used at the P-channel MOSFET switch for overcurrent detection. This protects the system, external components, and internal MOSFETs under overload conditions.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Design Information

## Output Voltage Selection

To select an output voltage between 1.25V and 10.5V, connect FB to a resistor voltage divider between the output and GND (Figure 2). Select feedback resistor R2 in  the  5k Ω to  100k Ω range, since FB input leakage is ±100nA max. R1 is then given by:

<!-- formula-not-decoded -->

where VFB = 1.25V. A small ceramic capacitor (C1) around 100pF to 470pF should be added in parallel with R1 to compensate for stray capacitance at the FB pin,  and  output  capacitor  equivalent  series  resistance (ESR).

## Inductor Selection

A 1.3A inductor with the value recommended in Table 1 is  sufficient  for  most  applications.  However,  the  exact inductor value is not critical, and values within 50% of those in Table 1 are acceptable. For best efficiency, the inductor's DC resistance should be less than 0.25 Ω . The inductor saturation current rating must exceed the 1A ILIM current limit. Table 2 lists component suppliers.

## Capacitor Selection

Input and output filter capacitors should be chosen to service inductor currents with acceptable voltage ripple.  The  input  filter  capacitor  also  reduces  peak  currents and noise at the voltage source. See Table 1 for suggested values. The MAX887's loop gain is relatively low, to enable the use of small, low-valued output filter capacitors. Higher values provide improved output rip- ple and transient response. Lower oscillator frequencies require a larger-value output capacitor. When Idle Mode is used, verify capacitor selection with light loads during PFM operation, since output ripple is higher under these conditions.

Table 1.  Inductor and Output Filter vs. Sync Frequency

| SYNC RANGE (kHz)   |   L1 (µH) |   C OUT (µF) |
|--------------------|-----------|--------------|
| 300-400            |        33 |           33 |
| 200-300            |        47 |           47 |
| 150-200            |        68 |           68 |
| 100-150            |       100 |          100 |
| 75-100             |       150 |          150 |

Low-ESR capacitors are recommended. Capacitor ESR is  a  major  contributor  to  output  ripple  (usually  more than 60%). Ordinary aluminum-electrolytic capacitors have high ESR and should be avoided. Low-ESR aluminum-electrolytic capacitors are acceptable and relatively  inexpensive.  Low-ESR tantalum capacitors are better and provide a compact solution for spaceconstrained surface-mount designs. Do not  exceed the ripple current ratings of tantalum capacitors.

Ceramic capacitors have the lowest ESR overall, and OS-CON capacitors have the lowest ESR of the highvalue electrolytic types. It is generally not necessary to use ceramic and OS-CON capacitors for the MAX887; they need only be considered in very compact, highreliability,  or  wide-temperature  applications,  where  the expense is justified. When using very-low-ESR capacitors,  such  as  ceramic  or  OS-CON, check for stability while examining load-transient response, and increase the compensation capacitor C1 if needed. Table 2 lists suppliers for the various components used with the MAX887.

Table 2.  Component Suppliers

| COMPANY                 | PHONE     | PHONE                         | FAX                           |
|-------------------------|-----------|-------------------------------|-------------------------------|
| AVX                     | USA       | (803) 946-0690 (800) 282-4975 | (803) 626-3123                |
| Coilcraft               | USA       | (847) 639-6400                | (847) 639-1469                |
| Coiltronics             | USA       | (561) 241-7876                | (561) 241-9339                |
| Dale                    | USA       | (605) 668-4131                | (605) 665-1627                |
| International Rectifier | USA       | (310) 322-3331                | (310) 322-3332                |
| Motorola                | USA       | (602) 303-5454                | (602) 994-6430                |
| Nichicon                | USA Japan | (847) 843-7500 81-7-5231-8461 | (847) 843-2798 81-7-5256-4158 |
| Nihon                   | USA Japan | (805) 867-2555 81-3-3494-7411 | (805) 867-2698 81-3-3494-7414 |
| Sanyo                   | USA Japan | (619) 661-6835 81-7-2070-6306 | (619) 661-1055 81-7-2070-1174 |
| Siliconix               | USA       | (408) 988-8000 (800) 554-5565 | (408) 970-3950                |
| Sprague                 | USA       | (603) 224-1961                | (603) 224-1430                |
| Sumida                  | USA Japan | (847) 956-0666 81-3-3607-5111 | (847) 956-0702 81-3-3607-5144 |
| United Chemi-Con        | USA       | (714) 255-9500                | (714) 255-9400                |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 100% Duty Cycle, Low-Noise, Step-Down, PWM DC-DC Converter

Bypass V+ to GND using a 0.33µF capacitor. Also bypass VL to GND with a 2.2µF capacitor, and VREF to GND using a 0.047µF capacitor. These capacitors should be placed within 0.2in (5mm) of their respective pins. A small ceramic capacitor (C1) of around 100pF to 470pF should be added in parallel with R1 to compensate for stray capacitance at the FB pin and output capacitor ESR.

## Output Diode Selection

A 1A external diode (D1) is required as an output rectifier  to  pass  inductor  current  during the second half of each cycle. This diode operates in PFM mode and during transition periods while the synchronous rectifier is off.  Use  a  Schottky  diode  to  prevent  the  slow  internal diode of the N-channel MOSFET from turning on.

## PC Board Layout and Routing

High switching frequencies and large peak currents make PC board layout a very important part of design. Poor design can result in excessive EMI on the feedback paths and voltage gradients in the ground plane, both of which can result in instability or regulation errors. Power components, such as the MAX887, inductor, input filter capacitor, and output filter capacitor  should  be  placed as close together as possible, and their traces kept short, direct, and wide. Connect their  ground  pins  at  a  common  node in a star-ground configuration. Keep the extra copper on the board and integrate into  ground as a pseudo-ground plane. The external voltage-feedback network should be very close to the FB pin, within 0.2in (5mm). Keep noisy traces, such as from the LX pin, away from the voltagefeedback network, and separate using grounded copper. Place the small bypass capacitors (C1, C3, C5, and C6) within 0.2in (5mm) of their respective pins. The MAX887 evaluation kit manual illustrates an example PC board layout, routing, and pseudo-ground plane.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Chip Information

TRANSISTOR COUNT: 2006

SUBSTRATE CONNECTED TO GND

## 100% Duty Cycle, Low-Noise,

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Package Information

<!-- image -->

12