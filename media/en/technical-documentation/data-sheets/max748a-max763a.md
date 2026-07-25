<!-- lastmod 2022-08-04 -->
<!-- image -->

## 3.3V, Step-Down, Current-Mode PWM DC-DC Converters

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX748A/MAX763A are 3.3V-output CMOS, stepdown switching regulators. The MAX748A accepts inputs from 3.3V to 16V and delivers up to 500mA. The MAX763A accepts inputs between 3.3V and 11V and delivers  up  to  500mA.  Typical  efficiencies  are  85%  to 90%. Quiescent supply current is 1.4mA (MAX763A), and only 0.2µA in shutdown.

Pulse-width-modulation (PWM) current-mode control provides precise output regulation and excellent transient responses. Output voltage accuracy is guaranteed to be ±5% over line, load, and temperature variations. Fixed-frequency switching allows easy filtering of output ripple and noise, as well as the use of small external components. A 22µH inductor works in most applications, so no magnetics design is necessary.

The MAX748A/MAX763A also feature cycle-by-cycle current limiting, overcurrent limiting, undervoltage lockout, and programmable soft-start protection. The MAX748A is available in 8-pin DIP and 16-pin wide SO packages; the MAX763A comes in 8-pin DIP and SO packages.

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' Up to 500mA Load Currents
- ' Guaranteed 159kHz to 219.5kHz Current-Mode PWM
- ' 85% to 90% Efficiencies
- ' 1.7mA Quiescent Current (MAX748A) 1.4mA Quiescent Current (MAX763A)
- ' 0.2µA Shutdown Supply Current
- ' 22µH Preselected Inductor Value; No Component Design Required
- ' Overcurrent, Soft-Start, and Undervoltage Lockout Protection
- ' Cycle-by-Cycle Current Limiting
- ' 8-Pin DIP/SO Packages (MAX763A)

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART        | TEMP. RANGE     | PIN-PACKAGE   |
|-------------|-----------------|---------------|
| MAX748A CPA | 0°C to +70°C    | 8 Plastic DIP |
| MAX748ACWE  | 0°C to +70°C    | 16 Wide SO    |
| MAX748AC/D  | 0°C to +70°C    | Dice*         |
| MAX748AEPA  | -40°C to +85°C  | 8 Plastic DIP |
| MAX748AEWE  | -40°C to +85°C  | 16 Wide SO    |
| MAX748AMJA  | -55°C to +125°C | 8 CERDIP      |

## Ordering Information continued on last page.

* Contact factory for dice specifications.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Configurations

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products 1

Call toll free 1-800-998-8800 for free samples or literature.

## 3.3V, Step-Down, Current-Mode PWM DC-DC Converters

## ABSOLUTE MAXIMUM RATINGS

| Pin Voltages:                                                                                                                                                   |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| V+ (MAX748A)......................................................+17V, -0.3V                                                                                   |
| V+ (MAX763A)......................................................+12V, -0.3V                                                                                   |
| LX (MAX748A) .................................(V+ - 21V) to (V+ + 0.3V)                                                                                         |
| LX (MAX763A) .................................(V+ - 12V) to (V+ + 0.3V)                                                                                         |
| OUT.................................................................................±25V                                                                        |
| SS, CC, SHDN ..........................................-0.3V to (V+ + 0.3V)                                                                                     |
| Peak Switch Current (I LX ) .....................................................2.0A                                                                           |
| Reference Current (I REF ) ...................................................2.5mA                                                                             |
| Continuous Power Dissipation (T A = +70°C) 8-Pin Plastic DIP (derate 6.90mW/°C above +70°C)...552mW 8-Pin SO (derate 5.88mW/°C above +70°C)...............471mW |

| 16-Pin Wide SO (derate 9.52mW/°C above +70°C)....762mW 8-Pin CERDIP (derate 8.00mW/°C above +70°C).......640mW   |
|------------------------------------------------------------------------------------------------------------------|
| Operating Temperature Ranges:                                                                                    |
| MAX7__AC__ ....................................................0°C to +70°C                                      |
| MAX7__AE__ .................................................-40°C to +85°C                                       |
| MAX7__AMJA__ ..........................................-55°C to +125°C                                           |
| Junction Temperatures:                                                                                           |
| MAX7__AC/E ..............................................................+150°C                                  |
| MAX7__AM.................................................................+175°C                                  |
| Storage Temperature Range ............................-65°C to +160°C                                            |
| Lead Temperature (soldering, 10sec) ............................+300°C                                           |

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS

(Circuit of Figure 3, V+ = 5V, I LOAD = 0mA, T A = T MIN to T MAX , unless otherwise noted.)

| PARAMETER           | CONDITIONS                                                |   MIN |   MAX748A TYP |   MAX |   MIN |   MAX763A TYP |   MAX | UNITS   |
|---------------------|-----------------------------------------------------------|-------|---------------|-------|-------|---------------|-------|---------|
| Input Voltage Range |                                                           |   3.3 |               |  16.0 |   3.3 |               |  11.0 | V       |
|                     | C/E temp. ranges, V+ = 4.0V to 16V, 0mA < I LOAD < 300mA  | 3.135 |           3.3 | 3.465 |       |               |       | V       |
|                     | M temp. range, V+ = 4.0V to 16V, 0mA < I LOAD < 250mA     | 3.135 |           3.3 | 3.465 |       |               |       | V       |
|                     | C/E temp. ranges, V+ = 4.75V to 16V, 0mA < I LOAD < 500mA | 3.135 |           3.3 | 3.465 |       |               |       | V       |
| Output Voltage      | M temp. range, V+ = 4.75V to 16V, 0mA < I LOAD < 400mA    | 3.135 |           3.3 | 3.465 |       |               |       | V       |
|                     | C/E temp. ranges, V+ = 4.0V to 11V, 0mA < I LOAD < 300mA  |       |               |       | 3.135 |           3.3 | 3.465 | V       |
|                     | M temp. range, V+ = 4.0V to 11V, 0mA < I LOAD < 250mA     |       |               |       | 3.135 |           3.3 | 3.465 | V       |
|                     | C/E temp. ranges, V+ = 4.75V to 11V, 0mA < I LOAD < 500mA |       |               |       | 3.135 |           3.3 | 3.465 | V       |
|                     | M temp. range, V+ = 4.75V to 11V, 0mA < I LOAD < 400mA    |       |               |       | 3.135 |           3.3 | 3.465 | V       |
| Line Regulation     |                                                           |       |          0.13 |       |       |          0.13 |       | %/V     |
| Load Regulation     | I LOAD = 0mA to 500mA                                     |       |         0.001 |       | 0.001 |               |       | %/mA    |

## 2 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 3.3V, Step-Down, Current-Mode PWM DC-DC Converters

## ELECTRICAL CHARACTERISTICS (continued)

(Circuit of Figure 3, V+ = 5V, I LOAD = 0mA, T A = T MIN to T MAX , unless otherwise noted.)

Note 1: The standby current typically settles to 10µA (over temperature) within 2 seconds; however, to decrease test time, the part is guaranteed at a 100µA maximum value.

| PARAMETER                      | CONDITIONS              | CONDITIONS              |   MIN |   MAX748A TYP |   MAX |   MIN |   MAX763A TYP |   MAX | UNITS   |
|--------------------------------|-------------------------|-------------------------|-------|---------------|-------|-------|---------------|-------|---------|
| Efficiency                     |                         | I LOAD = 300mA          |       |            88 |       |       |            88 |       | %       |
| Efficiency                     |                         | I LOAD = 100mA          |       |            90 |       |       |            90 |       | %       |
| Supply Current                 | Includes switch current | Includes switch current |       |           1.7 |   3.0 |       |           1.4 |   2.5 | mA      |
| Shutdown Current               | SHDN = 0V (Note 1)      | SHDN = 0V (Note 1)      |       |           0.2 | 100.0 |       |           0.2 | 100.0 | µA      |
| Shutdown Input Threshold       | V IH                    | V IH                    |   2.0 |               |       |   2.0 |               |       | V       |
| Shutdown Input Threshold       | V IL                    | V IL                    |       |               |  0.25 |       |               |  0.25 | V       |
| Shutdown Input Leakage Current |                         |                         |       |               |   1.0 |       |               |   1.0 | µA      |
| Short-Circuit Current          |                         |                         |       |           1.2 |       |       |           1.2 |       | A       |
| Undervoltage Lockout           | V+ falling              | V+ falling              |       |           2.7 |   3.0 |       |           2.7 |   3.0 | V       |
| LX On Resistance               | I LX = 500mA            | I LX = 500mA            |       |           1.0 |       |       |           1.0 |       | Ω       |
| LX Leakage Current             | V+ = 12V, LX = 0        | V+ = 12V, LX = 0        |       |            10 |       |       |            10 |       | nA      |
| Reference Voltage              | T A = +25°C             | T A = +25°C             |  1.15 |          1.22 |  1.30 |  1.15 |          1.22 |  1.30 | V       |
| Reference Drift                | T A = T MIN to T MAX    | T A = T MIN to T MAX    |       |            50 |       |       |            50 |       | ppm/°C  |
| Oscillator Frequency           |                         |                         |   159 |           180 | 212.5 |   159 |           200 | 212.5 | kHz     |
| Compensation Pin Impedance     |                         |                         |       |          7500 |       |       |          7500 |       | Ω       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_T ypical Operating Characteristics

(Circuit of Figure 3, TA = +25°C, V OUT = 3.3V, unless otherwise noted.)

<!-- image -->

## 3.3V, Step-Down, Current-Mode PWM DC-DC Converters

MAX748A/MAX763A

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics (continued)

<!-- image -->

## 3.3V, Step-Down, Current-Mode PWM DC-DC Converters

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_T ypical Operating Characteristics (continued)

(Circuit of Figure 3, TA = +25°C, V OUT = 3.3V, unless otherwise noted.)

## SWITCHING WAVEFORMS, CONTINUOUS CONDUCTION

<!-- image -->

2

m

s/div

- A:  SWITCH VOLTAGE (LX PIN), 5V/div, 0V TO +6V
- B:  INDUCTOR CURRENT, 200mA/div
- C:  OUTPUT VOLTAGE RIPPLE, 50mV/div

V+ = 6V, I OUT = 250mA

## LINE-TRANSIENT RESPONSE

<!-- image -->

5ms/div

A:  V OUT , 50mV/div

B:  V+, 5V/div, 7.0V TO 10.0V

I OUT = 350mA

## SWITCHING WAVEFORMS, DISCONTINUOUS CONDUCTION

<!-- image -->

2

m

s/div

- A:  SWITCH VOLTAGE (LX PIN), 5V/div, 0V TO +6V
- B:  INDUCTOR CURRENT, 100mA/div
- C:  OUTPUT VOLTAGE RIPPLE, 50mV/div

V+ = 6V, I OUT = 75mA

## LOAD-TRANSIENT RESPONSE

<!-- image -->

5ms/div

A:  V OUT , 50mV/div

B:  I OUT , 200mA/div, 0mA TO 500mA

V+ = 6V

Note 2: Operation beyond the specifications listed in the Electrical Characteristics may exceed the power dissipation ratings of the device.

- Note 3: Wide temperature range circuit of Figure 5 using Sprague surface-mount capacitors.

Note 4: Standby current includes all external component leakage currents. Capacitor leakage currents dominate at TA = +85°C.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5

## 3.3V, Step-Down, Current-Mode PWM DC-DC Converters

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Description

| PIN #        | PIN #                    |      |                                                                                                                                                                                  |
|--------------|--------------------------|------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 8-PIN DIP/SO | 16-PIN WIDE SO (MAX748A) | NAME | FUNCTION                                                                                                                                                                         |
| 1            | 2                        | SHDN | Shutdown-active low. Connect to ground to power down chip; tie to V+ for normal operation. Output voltage falls to 0V when SHDN is low.                                          |
| 2            | 3                        | REF  | Reference Voltage Output (+1.23V) supplies up to 100µA for external loads. Bypass to GND with a 0.047µF capacitor.                                                               |
| 3            | 7                        | SS   | Soft-Start. Capacitor between SS and GND provides soft-start and short-circuit protection.                                                                                       |
| 4            | 8                        | CC   | Compensation Capacitor Input externally compensates the outer (voltage) feedback loop. Connect to OUT with a 330pF capacitor.                                                    |
| 5            | 9                        | OUT  | Output-Voltage Sense Input provides regulation feedback sensing. Connect to +3.3V output.                                                                                        |
| 6            | 10, 11                   | GND  | Ground*                                                                                                                                                                          |
| 7            | 12, 13, 14               | LX   | Drain of internal P-channel power MOSFET*                                                                                                                                        |
| 8            | 1,15,16                  | V+   | Supply Voltage Input. Bypass to GND with 1µF ceramic and large-value electrolytic capacitor in parallel. The 1µF capacitor must be as close to the GND and V+ pins as possible.* |
|              | 4, 5, 6                  | N.C. | No Connect-no internal connections to these pins.                                                                                                                                |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAX748A/MAX763A switch-mode regulators use a current-mode pulse-width-modulation (PWM) control system in a step-down (buck) regulator topography. They convert an unregulated DC input voltage from 4V to  11V  (MAX763A) or from 4V to 16V (MAX748A) to a regulated 3.3V output at 300mA. For loads less than 300mA, V+ may be less than 4.0V (see the Output Voltage vs. Supply Voltage graph in the Typical Operating  Characteristics).  The  current-mode PWM architecture provides cycle-by-cycle current limiting,  improved load-transient response, and simpler outerloop design.

The controller consists of two feedback loops: an inner (current)  loop  that  monitors  the  switch  current  via  the current-sense resistor and amplifier, and an outer (voltage) loop that monitors the output voltage through the error amplifier (Figure 1). The inner loop performs cycle-by-cycle current limiting, truncating the power transistor  on-time  when the switch current reaches a predetermined threshold. This threshold is determined by the outer loop. For example, a sagging output voltage produces an error signal that raises the threshold, allowing the circuit to store and transfer more energy during each cycle.

## Programmable Soft-Start

Figure 2 shows a capacitor connected to the soft-start (SS) pin to ensure orderly power-up. A typical value is 0.047µF. SS controls both the SS timing and the maximum output current that can be delivered while maintaining regulation.

The charging capacitor slowly raises the clamp on the error-amplifier output voltage, limiting surge currents at  power-up by slowly increasing the cycle-by-cycle current-limit  threshold. Table 1 lists timing characteristics for selected capacitor values and circuit conditions.

The overcurrent comparator trips when the load exceeds approximately 1.2A. When either an undervoltage or overcurrent fault condition is detected, an SS cycle is actively initiated, which triggers an internal transistor to discharge the SS capacitor to ground. An SS cycle is also enabled at power-up and when coming out of shutdown mode.

## Overcurrent Limiting

The overcurrent comparator triggers when the load current exceeds approximately 1.2A. On each clock cycle, the output FET turns on and attempts to deliver current until cycle-by-cycle or overcurrent limits are exceeded. Note that the SS capacitor must be greater than 0.01µF for overcurrent protection to function properly. A typical value is 0.047µF.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 3.3V, Step-Down, Current-Mode PWM DC-DC Converters

Figure 1.  Detailed Block Diagram with External Components

<!-- image -->

Figure 2.  Soft-Start Circuitry Block Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Table 1. Typical Soft-Start Times

(Circuit of Figure 3, C4 = 150µF)

| Circuit Cond.   | Circuit Cond.   | Soft-Start Time (ms) vs. C1 (µF)   | Soft-Start Time (ms) vs. C1 (µF)   | Soft-Start Time (ms) vs. C1 (µF)   | Soft-Start Time (ms) vs. C1 (µF)   |
|-----------------|-----------------|------------------------------------|------------------------------------|------------------------------------|------------------------------------|
| V+ (V)          | I OUT (mA)      | C1 = 0.01                          | C1 = 0.047                         | C1 = 0.1                           | C1 = 0.47                          |
| 8               | 0               | 1                                  | 4                                  | 7                                  | 12                                 |
| 12*             | 0               | 1                                  | 2                                  | 3                                  | 6                                  |
| 8               | 200             | 10                                 | 33                                 | 50                                 | 200                                |
| 12*             | 200             | 7                                  | 17                                 | 20                                 | 80                                 |
| 8               | 300             | 13                                 | 44                                 | 65                                 | 325                                |
| 12*             | 300             | 8                                  | 25                                 | 35                                 | 140                                |

* MAX748A only

7

## 3.3V, Step-Down, Current-Mode PWM DC-DC Converters

Table 3. External Component Suppliers

| Production Method                        | Production Method                        | Production Method                                                                                                         | Inductors                                                                                                                 | Inductors                                                      | Capacitors                                                                                                                                      |
|------------------------------------------|------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| Surface Mount                            | Surface Mount                            | Surface Mount                                                                                                             | Sumida CD105 series Coiltronics CTX series Coilcraft DT series                                                            | Sumida CD105 series Coiltronics CTX series Coilcraft DT series | Matsuo 267 series Sprague 595D/293D series                                                                                                      |
| High Performance/ Miniature Through-Hole | High Performance/ Miniature Through-Hole | High Performance/ Miniature Through-Hole                                                                                  | Sumida RCH895 series                                                                                                      | Sumida RCH895 series                                           | Sanyo OS-CON series (very low ESR)                                                                                                              |
| Through-Hole                             | Through-Hole                             | Through-Hole                                                                                                              | Renco RL1284 series                                                                                                       | Renco RL1284 series                                            | Nichicon PL series (low ESR)                                                                                                                    |
| Phone and FAX Numbers:                   | Phone and FAX Numbers:                   | Phone and FAX Numbers:                                                                                                    | Phone and FAX Numbers:                                                                                                    | Phone and FAX Numbers:                                         | Phone and FAX Numbers:                                                                                                                          |
| Coilcraft Coiltronics Matsuo Nichicon    | USA: USA: USA: Japan: USA: Japan:        | (708) 639-6400, FAX: (708) 639-1469 (305) 781-8900, FAX: (305) 782-4163 (714) 969-2491, FAX: (714) 960-6492 (06) 332-0871 | (708) 639-6400, FAX: (708) 639-1469 (305) 781-8900, FAX: (305) 782-4163 (714) 969-2491, FAX: (714) 960-6492 (06) 332-0871 | Renco Sanyo Sprague Elec. Co. Sumida                           | (516) 586-5566, FAX: (516) 586-5562 (0720) 70-1005, FAX: (0720) 70-1174 (603) 224-1961, FAX: (603) 224-1430 (708) 956-0666, FAX: (708) 956-0702 |

## Undervoltage Lockout

The undervoltage lockout feature monitors the supply voltage at V+ and allows operation to start when V+ rises above 2.95V. When V+ falls, operation continues until the supply voltage falls below 2.7V (typ).  When an undervoltage condition is detected, control logic turns off the output power FET and discharges the SS capacitor to ground. This prevents partial turn-on of the power MOSFET and avoids excessive power dissipation. The control logic holds the output power FET off until the supply voltage rises above approximately 2.95V, at which time an SS cycle begins. When the input voltage exceeds the undervoltage lockout threshold, switching action will occur, but the output will not be regulated until  the  input  voltage  exceeds 3.3V (no load). The exact input voltage required for regulation depends on load conditions (see the Output Voltage vs. Supply Voltage graph in the Typical Operating Characteristics).

## Shutdown Mode

The MAX748A/MAX763A are held in shutdown mode by keeping SHDN at  ground. In shutdown mode, the output drops to 0V and the output power FET is held in an off state. The internal reference also turns off, which causes the SS capacitor to discharge. Typical supply current in shutdown mode is 0.2µA. The actual design limit for shutdown current is much less than the 100µA specified in the Electrical Characteristics. However, testing  to  tighter  limits  is  prohibitive  because  the  current takes several seconds to settle to a final value. For

8

normal operation, connect SHDN to V+.  Coming out of shutdown mode initiates an SS cycle.

## Continuous-/DiscontinuousConduction Modes

The input voltage, output voltage, load current, and inductor value determine whether the IC operates in continuous or discontinuous mode. As the inductor value or load current decreases, or the input voltage increases, the MAX748A/MAX763A tend to operate in discontinuous-conduction mode (DCM). In DCM, the inductor current slope is steep enough so it decays to zero before the end of the transistor off-time. In continuous-conduction mode (CCM), the inductor current never decays to zero, which is typically more efficient than DCM. CCM allows the MAX748A/MAX763A to deliver maximum load current, and is also slightly less noisy than DCM, because it doesn't exhibit the ringing that occurs when the inductor current reaches zero.

## Internal Reference

The +1.23V bandgap reference supplies up to 100µA at REF. A 1000pF bypass capacitor from REF to GND is required.

## Oscillator

The MAX748A/MAX763A's internal oscillator is guaranteed to operate in the 159kHz to 212.5 kHz range over temperature for V+ = 5V. Temperature stability over the military temperature range is about 0.04%/°C.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 3.3V, Step-Down, Current-Mode PWM DC-DC Converters

Figure 3.  Standard 3.3V Step-Down Application Circuit Using Through-Hole Components (commercial temperture range)

<!-- image -->

## Table 2. Component Table for Wide Temperature Applications

|               |   C1(µF) |   C2(µF) | C3(µF)   | C4(µF)   |   C5(pF) |   C6(pF) |   L1(µH) |
|---------------|----------|----------|----------|----------|----------|----------|----------|
| Through- Hole |    0.047 |      1.0 | 150*     | 220*     |      330 |     1000 |       22 |
| SO            |    0.047 |      1.0 | 68**     | 100***   |      330 |     1000 |       22 |

* Sanyo OS-CON Series (very low ESR)
- ** 16V or greater maximum voltage rating.
- *** 6.3V or greater maximum voltage rating.

## \_\_\_\_\_\_\_\_\_\_\_\_Applications Information

## Fixed +3.3V Step-Down Converter Application

Figure 3 shows the standard 3.3V step-down circuit with components shown for commercial temperature range applications. Figures 4, 5, and Table 2 suggest external component values for both SO and through-hole wide temperature range applications. These circuits are useful in systems that require high current and high efficiency and are powered by an unregulated supply, such as a battery or wall-plug AC-DC adapter.

The MAX748A delivers a guaranteed 300mA for input voltages of 4V to 16V, and a guaranteed 500mA for input voltages of 4.75V to 16V with 800mA typical output currents. The MAX763A delivers a guaranteed 300mA for input voltages of 4V to 11V, a guaranteed 500mA for input voltages of 4.75V to 11V, and has 700mA typical  output  currents.  The  MAX748A/ MAX763A operate from an input down to 3V (the upper limit of undervoltage lockout), but with some reduction in output voltage and maximum output current.

<!-- image -->

## Inductor Selection

The MAX748A/MAX763A require no inductor design because they are tested in-circuit, and are guaranteed to  deliver  the  power specified in the Electrical Characteristics with high efficiency using a single 22µH inductor. The 22µH inductor's incremental saturation current rating should be greater than 1A for 500mA load operation. Table 3 lists inductor types and suppliers for various applications.  The surface-mount inductors have nearly equivalent efficiencies to the larger through-hole inductors.

## Output Filter Capacitor Selection

The primary criterion for selecting the output filter capacitor is low effective series resistance (ESR). The product of the inductor-current variation and the output capacitor's ESR determines the amplitude of the sawtooth  ripple  seen  on  the  output  voltage.  Minimize  the output filter  capacitor's  ESR  to  maintain  AC  stability.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 3.3V, Step-Down, Current-Mode PWM DC-DC Converters

Figure 4.  Standard 3.3V Step-Down Application Circuit Using Through-Hole Components (all temperature ranges)

<!-- image -->

The capacitor's ESR should be less than 0.25 Ω to keep the output ripple less than 50mV p-p over the entire current range (using a 22µH inductor). Capacitor ESR usually rises at low temperatures, but OS-CON capacitors  provide very low ESR below 0°C. Table 3 lists capacitor suppliers.

## Other Components

The catch diode should be a Schottky or high-speed silicon  rectifier  with  a  peak  current  rating  of  at  least 1.0A for full-load (500mA) operation. The 1N5817 is a good choice. The 330pF outer-loop compensation capacitor provides the widest input voltage range and best transient characteristics.

## Printed Circuit Layouts

A good layout is essential for stable, low-noise operation. The layouts and component placement diagrams in  Figures  6-9  have  been  tested  successfully over a wide range of operating conditions. The 1µF input bypass capacitor must be positioned as close to the V+ and GND pins as possible. Also, place the output capacitor as close to the OUT and GND pins as possible. The traces connecting ground to the input and output filter capacitors and to the catch diode must be short to reduce inductance. Use an uninterrupted ground plane if possible.

Figure 5.  Standard 3.3V Step-Down Application Circuit Using Surface-Mount Components (Commercial and Extended Industrial Temperature Ranges)

<!-- image -->

## Output-Ripple Filtering

A simple lowpass pi-filter (Figure 3) can be added to the output to reduce output ripple to about 5mV p-p . The cutoff frequency shown is 21kHz.  Since the filter inductor is in series with the circuit output, minimize the filter inductor's resistance so the voltage drop across it is not excessive.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 3.3V, Step-Down, Current-Mode PWM DC-DC Converters

<!-- image -->

Figure 6.  DIP PC Layout, Through-Hole Component Placement Diagram (1X Scale)

<!-- image -->

Figure 8.  DIP PC Layout, Solder Side (1X Scale)

<!-- image -->

Figure 7.  DIP PC Layout, Component Side (1X Scale)

<!-- image -->

Figure 9.  DIP PC Layout, Drill Guide (1X Scale)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 3.3V, Step-Down, Current-Mode PWM DC-DC Converters

| PART        | TEMP. RANGE     | PIN-PACKAGE   |
|-------------|-----------------|---------------|
| MAX763A CPA | 0°C to +70°C    | 8 Plastic DIP |
| MAX763ACSA  | 0°C to +70°C    | 8 SO          |
| MAX763AC/D  | 0°C to +70°C    | Dice*         |
| MAX763AEPA  | -40°C to +85°C  | 8 Plastic DIP |
| MAX763AESA  | -40°C to +85°C  | 8 SO          |
| MAX763AMJA  | -55°C to +125°C | 8 CERDIP      |

<!-- image -->