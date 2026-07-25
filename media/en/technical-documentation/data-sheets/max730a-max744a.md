<!-- lastmod 2022-08-04 -->
<!-- image -->

## 5V, Step-Down, Current-Mode PWM DC-DC Converters

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX730A/MAX738A/MAX744A are 5V-output CMOS, step-down switching regulators. The MAX738A/ MAX744A accept inputs from 6V to 16V and deliver 750mA. The MAX744A guarantees 500mA load capability for inputs above 6V and has tighter oscillator frequency limits for low-noise (radio) applications. The MAX730A accepts inputs between 5.2V and 11V and delivers 450mA for inputs above 6V. Typical efficiencies are 85% to 96%. Quiescent supply current is 1.7mA and only 6µA in shutdown.

Pulse-width modulation (PWM) current-mode control provides precise output regulation and excellent transient  responses. Output voltage accuracy is guaranteed to be ±5% over line, load, and temperature variations. Fixed-frequency switching allows easy filtering of output ripple and noise, as well as the use of small external components. These regulators require only a single inductor value to work in most applications, so no inductor design is necessary.

The MAX730A/MAX738A/MAX744A also feature cycleby-cycle current limiting, overcurrent limiting, undervoltage lockout, and programmable soft-start protection.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Applications

Portable Instruments

Cellular Phones and Radios

Personal Communicators

Distributed Power Systems

Computer Peripherals

## \_\_\_\_\_\_\_\_\_\_Typical Operating Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' 750mA Load Currents (MAX738A/MAX744A)
- ' High-Frequency, Current-Mode PWM
- ' 159kHz to 212.5kHz Guaranteed Oscillator Frequency Limits (MAX744A)
- ' 85% to 96% Efficiencies
- ' 1.7mA Quiescent Current
- ' 6µA Shutdown Supply Current
- ' Single Preselected Inductor Value, No Component Design Required
- ' Overcurrent, Soft-Start, and Undervoltage Lockout Protection
- ' Cycle-by-Cycle Current Limiting
- ' 8-Pin DIP/SO Packages (MAX730A)

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART        | TEMP. RANGE     | PIN-PACKAGE   |
|-------------|-----------------|---------------|
| MAX730A CPA | 0°C to +70°C    | 8 Plastic DIP |
| MAX730ACSA  | 0°C to +70°C    | 8 SO          |
| MAX730AC/D  | 0°C to +70°C    | Dice*         |
| MAX730AEPA  | -40°C to +85°C  | 8 Plastic DIP |
| MAX730AESA  | -40°C to +85°C  | 8 SO          |
| MAX730AMJA  | -55°C to +125°C | 8 CERDIP      |

Ordering Information continued at end of data sheet.

*Contact factory for dice specifications.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Configurations

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800

## 5V, Step-Down, Current-Mode PWM DC-DC Converters

## ABSOLUTE MAXIMUM RATINGS

| Pin Voltages                                                                             |
|------------------------------------------------------------------------------------------|
| V+ (MAX730A)......................................................+12V, -0.3V            |
| V+ (MAX738A/MAX744A).....................................+18V, -0.3V                     |
| LX (MAX730A) .................................(V+ - 12V) to (V+ + 0.3V)                  |
| LX (MAX738A/MAX744A) ................(V+ - 21V) to (V+ + 0.3V)                           |
| OUT.................................................................................±25V |
| SS, CC, SHDN .........................................-0.3V to (V+ + 0.3V)               |
| Peak Switch Current (I LX ) ........................................................2A   |
| Reference Current (I REF ) ...................................................2.5mA      |
| Continuous Power Dissipation (T A = +70°C)                                               |
| 8-Pin CERDIP (derate 8.00mW/°C above +70°C).......640mW                                  |
| 16-Pin Wide SO (derate 9.52mW/°C above +70°C).....762mW                                  |

| Operating Temperature Ranges:   | Operating Temperature Ranges:                                            |
|---------------------------------|--------------------------------------------------------------------------|
| MAX7_ _AC_                      | _....................................................0°C to +70°C        |
| MAX7_ _AE_                      | _.................................................-40°C to +85°C         |
| MAX7_ _AMJA                     | ..............................................-55°C to +125°C            |
| Junction Temperatures:          |                                                                          |
| MAX7_ _AC_ _/AE_                | _...................................................+150°C               |
| MAX7_                           | _AMJA.............................................................+175°C |
| Storage Temperature Range       | ............................-65°C to +160°C                              |
| Lead Temperature (soldering,    | 10sec).............................+300°C                                |

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS

(Circuit of Figure 3, V+ = 9V for the MAX730A, V+ = 12V for the MAX738A/MAX744A, ILOAD = 0mA, TA = TMIN to TMAX, unless otherwise noted.)

| PARAMETER           | CONDITIONS                                | CONDITIONS                                |   MAX730A MIN TYP MAX |   MAX730A MIN TYP MAX |   MAX730A MIN TYP MAX |   MAX738A MIN TYP MAX |   MAX738A MIN TYP MAX |   MAX738A MIN TYP MAX |   MAX744A MIN TYP MAX |   MAX744A MIN TYP MAX |   MAX744A MIN TYP MAX | UNITS   |
|---------------------|-------------------------------------------|-------------------------------------------|-----------------------|-----------------------|-----------------------|-----------------------|-----------------------|-----------------------|-----------------------|-----------------------|-----------------------|---------|
| Output Voltage      | V+ = 6.0V to 11.0V                        | 0mA < I LOAD < 450mA, MAX730AC            |                  4.75 |                  5.00 |                  5.25 |                       |                       |                       |                       |                       |                       | V       |
| Output Voltage      | V+ = 6.0V to 11.0V                        | 0mA < I LOAD < 450mA, MAX730AE            |                  4.75 |                  5.00 |                  5.25 |                       |                       |                       |                       |                       |                       | V       |
| Output Voltage      | V+ = 6.0V to 11.0V                        | 0mA < I LOAD < 300mA, MAX730AM            |                  4.75 |                  5.00 |                  5.25 |                       |                       |                       |                       |                       |                       | V       |
| Output Voltage      | V+ = 6.0V to 16.0V                        | 0mA < I LOAD < 450mA, MAX738AC/AE         |                       |                       |                       |                  4.75 |                  5.00 |                  5.25 |                  4.75 |                  5.00 |                  5.25 |         |
| Output Voltage      | V+ = 6.0V to 16.0V                        | 0mA < I LOAD < 350mA, MAX738AM            |                       |                       |                       |                  4.75 |                  5.00 |                  5.25 |                  4.75 |                  5.00 |                  5.25 |         |
| Output Voltage      | V+ = 6.0V to 16.0V                        | 0mA < I LOAD < 500mA, MAX744AC/AE         |                       |                       |                       |                  4.75 |                  5.00 |                  5.25 |                  4.75 |                  5.00 |                  5.25 |         |
| Output Voltage      | V+ = 6.0V to 16.0V                        | 0mA < I LOAD < 375mA, MAX744AM            |                       |                       |                       |                  4.75 |                  5.00 |                  5.25 |                  4.75 |                  5.00 |                  5.25 |         |
| Output Voltage      | V+ = 10.2V to 16.0V, 0mA < I LOAD < 750mA | V+ = 10.2V to 16.0V, 0mA < I LOAD < 750mA |                       |                       |                       |                  4.75 |                  5.00 |                  5.25 |                       |                       |                       |         |
| Output Voltage      | V+ = 9.0V to 16.0V                        | 0mA < I LOAD < 750mA, MAX744AC/AE         |                       |                       |                       |                       |                       |                       |                  4.75 |                  5.00 |                  5.25 |         |
| Output Voltage      | V+ = 9.0V to 16.0V                        | 0mA < I LOAD < 600mA, MAX744AM            |                       |                       |                       |                       |                       |                       |                  4.75 |                  5.00 |                  5.25 |         |
| Input Voltage Range |                                           |                                           |                   5.2 |                       |                  11.0 |                   6.0 |                       |                  16.0 |                   6.0 |                       |                  16.0 | V       |
| Line Regulation     | V+ = 5.2V to 11.0V                        | V+ = 5.2V to 11.0V                        |                  0.15 |                  0.15 |                  0.15 |                       |                       |                       |                       |                       |                       | %/V     |
| Line Regulation     | V+ = 6.0V to 16.0V                        | V+ = 6.0V to 16.0V                        |                       |                       |                       |                  0.15 |                  0.15 |                  0.15 |                  0.15 |                  0.15 |                  0.15 | %/V     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 5V, Step-Down, Current-Mode PWM DC-DC Converters

## ELECTRICAL CHARACTERISTICS (continued)

(Circuit of Figure 3, V+ = 9V for the MAX730A, V+ = 12V for the MAX738A/MAX744A, ILOAD = 0mA, TA = TMIN to TMAX, unless otherwise noted.)

| PARAMETER                       | CONDITIONS                | CONDITIONS                | MAX730A MIN TYP   |    MAX | MAX738A MIN TYP   |   MAX | MAX744A MIN TYP   |   MAX | UNITS   |
|---------------------------------|---------------------------|---------------------------|-------------------|--------|-------------------|-------|-------------------|-------|---------|
| Load Regulation                 | I LOAD = 0mA to 300mA     | I LOAD = 0mA to 300mA     | 0.0005            | 0.0005 |                   |       |                   |       | %/mA    |
| Load Regulation                 | I LOAD = 0mA to 750mA     | I LOAD = 0mA to 750mA     |                   |        | 0.0005            |       | 0.0005            |       | %/mA    |
| Efficiency                      | V+ = 9.0V, I LOAD = 300mA | V+ = 9.0V, I LOAD = 300mA | 92                |        | 90                |       | 90                |       | %       |
| Efficiency                      | V+ = 12V, I LOAD = 750mA  | V+ = 12V, I LOAD = 750mA  |                   |        | 87                |       | 87                |       | %       |
|                                 |                           |                           | 1.7               |    3.0 | 1.7               |   3.0 | 1.7               |   3.0 | mA      |
|                                 | V+ = 6.0V to 9.0V         | MAX744AC/AE               |                   |        |                   |       | 1.2               |   2.5 | mA      |
|                                 | V+ = 6.0V to 9.0V         | MAX744AM                  |                   |        |                   |       |                   |   3.0 | mA      |
| Supply Current (includes switch | V+ = 9.0V to 12.0V        | MAX744AC/AE               |                   |        |                   |       |                   |   3.0 | mA      |
| current)                        | V+ = 9.0V to 12.0V        | MAX744AM                  |                   |        |                   |       |                   |   3.5 | mA      |
|                                 | V+ = 12.0V to 16.0V       | MAX744AC                  |                   |        |                   |       |                   |   4.0 | mA      |
|                                 | V+ = 12.0V to 16.0V       | MAX744AE                  |                   |        |                   |       |                   |   4.3 | mA      |
|                                 | V+ = 12.0V to 16.0V       | MAX744AM                  |                   |        |                   |       |                   |   4.5 | mA      |
| Standby Current                 | SHDN = 0V (Note 1)        | SHDN = 0V (Note 1)        | 6.0               |  100.0 | 6.0               | 100.0 | 6.0               | 100.0 | µA      |
| Shutdown Input Threshold        | V IH                      | V IH                      | 2.0               |        | 2.0               |       | 2.0               |       | V       |
| Shutdown Input Threshold        | V IL                      | V IL                      |                   |   0.25 |                   |  0.25 |                   |  0.25 | V       |
| Shutdown Input Leakage Current  |                           |                           |                   |    1.0 |                   |   1.0 |                   |   1.0 | µA      |
| Short-Circuit Current           |                           |                           | 1.5               |        | 1.5               |       | 1.5               |       | A       |
| Undervoltage Lockout            | V+ rising                 | V+ rising                 | 4.7               |    5.2 | 5.7               |   6.0 | 5.7               |   6.0 | V       |
| Undervoltage Lockout            | V+ falling                | V+ falling                |                   |        |                   |       | 5.0               |   5.7 | V       |
| LX On Resistance                | I LX = 500mA              | I LX = 500mA              | 0.5               |        | 0.5               |       | 0.5               |       | Ω       |
| LX Leakage Current              | V+ = 12V, LX = 0V         | V+ = 12V, LX = 0V         | 1.0               |        | 1.0               |       | 1.0               |       | µA      |
| Reference Voltage               | V+ = 12V, T A = +25°C     | V+ = 12V, T A = +25°C     | 1.15 1.23         |   1.30 | 1.15 1.23         |  1.30 | 1.15 1.23         |  1.30 | V       |
| Reference                       | Drift                     | Drift                     | 50                |        | 50                |       | 50                |       | ppm/°C  |
| Oscillator Frequency            |                           |                           | 130 170           |    210 | 130 160           |   190 |                   |       |         |
| Oscillator Frequency            | V+ = 6.0V to 16.0V        | MAX744AC/AE               |                   |        |                   |       | 159.0 185.0       | 212.5 | kHz     |
| Oscillator Frequency            | V+ = 6.0V to 16.0V        | MAX744AM                  |                   |        |                   |       | 159.0             | 216.5 |         |
| Compensation Pin Impedance      |                           |                           | 7500              |        | 7500              |       | 7500              |       | Ω       |

Note 1: The standby current typically settles to 25µA (over temperature) within 2 seconds; however, to decrease test time, the part is guaranteed at a 100µA maximum value.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

## 5V, Step-Down, Current-Mode PWM DC-DC Converters

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics

(Circuit of Figure 3, TA = +25°C, unless otherwise noted.)

<!-- image -->

## 5V, Step-Down, Current-Mode PWM DC-DC Converters

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics (continued)

(Circuit of Figure 3, TA = +25°C, unless otherwise noted.)

OSCILLATOR FREQUENCY vs. SUPPLY VOLTAGE

<!-- image -->

MAX738A OSCILLATOR FREQUENCY vs. TEMPERATURE

<!-- image -->

Note 3: Commercial temperature range external component values in Table 3.

Note 4: Wide temperature range external component values in Table 3.

Note 5: Standby and shutdown current includes all external component leakage currents.  Capacitor leakage currents dominate at T A &gt; +85°C, Sanyo OS-CON capacitors were used.

Note 6: Operation beyond the specifications listed in the electrical characteristics may exceed the power dissipation ratings of the device.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

MAX744A OSCILLATOR FREQUENCY vs. TEMPERATURE

<!-- image -->

## 5V, Step-Down, Current-Mode PWM DC-DC Converters

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics (continued)

(Circuit of Figure 3, TA = +25°C, unless otherwise noted.)

## MAX738A/MAX744A SWITCHING WAVEFORMS, CONTINUOUS CONDITION

<!-- image -->

2 m s/div

A:  SWITCH VOLTAGE (LX PIN), 5V/div, 0V TO +12V

B:  INDUCTOR CURRENT, 200mA/div

- C:  OUTPUT VOLTAGE RIPPLE, 50mV/div, AC-COUPLED

C OUT = 390 m F, V+ = 12V, I OUT = 150 m A,

## MAX730A LINE-TRANSIENT RESPONSE

<!-- image -->

100ms/div

A:  V OUT , 50mV/div, DC-COUPLED B:  V+, 5V/div, 6.0V TO 11.0V

I OUT = 300mA

6

## MAX738A/MAX744A SWITCHING WAVEFORMS, DISCONTINUOUS CONDITION

<!-- image -->

2 m s/div

A:  SWITCH VOLTAGE (LX PIN), 5V/div, 0V TO +12V

B:  INDUCTOR CURRENT, 200mA/div

C:  OUTPUT VOLTAGE RIPPLE, 50mV/div, AC-COUPLED

C OUT = 390 m F,

V+ = 12V, I OUT = 150 m A

## MAX738A/MAX744A LINE-TRANSIENT RESPONSE

<!-- image -->

100ms/div

A: V OUT , 50mV/div, DC-COUPLED B:  V+, 5V/div, 10.2V TO 16.0V

I OUT = 750mA

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

A

B

<!-- image -->

## 5V, Step-Down, Current-Mode PWM DC-DC Converters

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics (continued)

(Circuit of Figure 3, TA = +25°C, unless otherwise noted.)

MAX730A LOAD-TRANSIENT RESPONSE

<!-- image -->

A:  V OUT , 50mV/div, DC-COUPLED

B:  I OUT , 200mA/div, 20mA TO 300mA

V+ = 9V

## MAX738A/MAX744A LOAD-TRANSIENT RESPONSE

A:  V OUT , 50mV/div, DC-COUPLED

B:  I OUT , 500mA/div, 50mA TO 750mA

<!-- image -->

V+ = 12V

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Description

| PIN          | PIN            |      |                                                                                                                                                                                |
|--------------|----------------|------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 8-PIN DIP/SO | 16-PIN WIDE SO | NAME | FUNCTION                                                                                                                                                                       |
| 1            | 2              | SHDN | Shutdown-active low. Ground to power-down chip, tie to V+ for normal operation. Output voltage falls to 0V when SHDN is low.                                                   |
| 2            | 3              | REF  | Reference-Voltage Output (+1.23V) supplies up to 100µA for extended loads. Bypass to GND with a capacitor that does not exceed 0.047µF.                                        |
| 3            | 7              | SS   | Soft-Start. Capacitor between SS and GND provides soft-start and short-circuit protection. 510k Ω resistor from SS to SHDN provides current boost.                             |
| 4            | 8              | CC   | Compensation Capacitor Input externally compensates the outer feedback loop. Connect to OUT with a 330pF capacitor.                                                            |
| 5            | 9              | OUT  | Output Voltage Sense Input provides regulation feedback sensing. Connect to +5V output.                                                                                        |
| 6            | 10, 11         | GND  | Ground pins are internally connected. Connect both pins to ground.                                                                                                             |
| 7            | 12, 13, 14     | LX   | Drain of internal P-channel power MOSFET.                                                                                                                                      |
| 8            | 1, 15, 16      | V+   | Supply-Voltage Input. Bypass to GND with 1µF ceramic and large-value electrolytic capaci- tors in parallel. The 1µF capacitor must be as close to V+ and GND pins as possible. |
|              | 4, 5, 6        | N.C. | No Connect-no internal connections to these pins.                                                                                                                              |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 5V, Step-Down, Current-Mode PWM DC-DC Converters

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAX730A/MAX738A/MAX744A switch-mode regulators use a current-mode pulse-width-modulation (PWM) control system coupled with a simple step-down (buck) regulator topography. They convert an unregulated DC voltage from 5.2V to 11V for the MAX730A, and from 6V to 16V for the MAX738A/MAX744A. The current-mode PWM architecture provides cycle-bycycle current limiting, improved load-transient response characteristics, and simpler outer-loop design.

The controller consists of two feedback loops: an inner (current) loop that monitors the switch current via the current-sense resistor and amplifier, and an outer (voltage) loop that monitors the output voltage through the error amplifier (Figure 1). The inner loop performs cycle-bycycle current limiting, truncating the power transistor ontime when the switch current reaches a predetermined threshold. This threshold is determined by the outer loop. For example, a sagging output voltage produces an error signal that raises the threshold, allowing the circuit to store and transfer more energy during each cycle.

## Programmable Soft-Start

Figures 1 and 2 show a capacitor and a resistor connected to the soft-start (SS) pin to ensure an orderly power-up. Typical values are 0.1µF and 510k Ω . SS controls both the SS timing and the maximum output current that can be delivered while maintaining regulation.

The charging capacitor slowly raises the clamp on the error-amplifier output voltage, limiting surge currents at power-up by slowly increasing the cycle-by-cycle current-limit  threshold.  The 510k Ω resistor sets the SS clamp at a value high enough to maintain regulation, even at currents exceeding 1A. This resistor is not necessary for lower-current loads. Refer to the Maximum Output Current vs. Supply Voltage graph in the Typical Operating Characteristics. Table 1 lists timing characteristics for selected capacitor values and circuit conditions.

The overcurrent comparator trips when the load exceeds approximately 1.5A. An SS cycle begins when either  an  undervoltage or overcurrent fault condition triggers an internal transistor to momentarily discharge the SS capacitor to ground. An SS cycle also begins at power-up and when coming out of shutdown mode.

## Overcurrent Limiting

The overcurrent comparator triggers when the load current exceeds approximately 1.5A. On each clock cycle, the output FET turns on and attempts to deliver current until cycle-by-cycle or overcurrent limits are exceeded. Note that the SS capacitor must be greater than 0.01µF

for overcurrent protection to function properly. A typical value is 0.1µF.

## Undervoltage Lockout

The MAX738A/MAX744A's undervoltage-lockout feature monitors the supply voltage at V+, and allows operation to start when V+ rises above 5.7V (6V guaranteed). When V+ falls, operation continues until the supply voltage falls below 5.45V (see the MAX738A/MAX744A Quiescent Supply Current vs. Supply Voltage graph in the Typical Operating Characteristics). The MAX730A is similar, starting operation at V+ &gt; 4.7V and continuing to operate down to 4.45V. When an undervoltage condition is detected, control logic turns off the output power FET and discharges the SS capacitor to ground. This prevents partial turn-on of the power MOSFET and avoids excessive power dissipation. The control logic holds the output power FET off until the supply voltage rises above approximately 4.7V (MAX730A) or 5.7V (MAX738A/ MAX744A), at which time an SS cycle begins.

## Shutdown Mode

The MAX730A/MAX738A/MAX744A are shut down by keeping SHDN at ground. In shutdown mode, the output drops to 0V and the output power FET is held in an off state. The internal reference also turns off, which causes the SS capacitor to discharge. Typical standby current in shutdown mode is 6µA. The actual design limit for standby current is much less than the 100µA specified in the Electrical Characteristics (see Standby Current vs. Temperature in the Typical Operating Characteristics). However, testing to tighter limits is prohibitive because the current takes several seconds to settle to a final value. For normal operation, connect SHDN to  V+.  Note  that coming out of shutdown mode initiates an SS cycle.

## Continuous-/DiscontinuousConduction Modes

The input voltage, output voltage, load current, and inductor value determine whether the IC operates in continuous or discontinuous mode. As the inductor value or load current decreases, or the input voltage increases, the MAX730A/MAX738A/MAX744A tend to operate in discontinuous-conduction mode (DCM). In DCM, the inductor current slope is steep enough so it decays to zero before the end of the transistor off-time.  In continuous-conduction mode (CCM), the inductor current never decays to zero, which is typically more efficient than DCM. CCM allows the MAX730A/ MAX738A/MAX744A to deliver maximum load current, and is also slightly less noisy than DCM, because the peak-to-average inductor current ratio is reduced.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 5V, Step-Down, Current-Mode PWM DC-DC Converters

Table 1. Typical Soft-Start Times

| MAX730A CIRCUIT CONDITIONS   | MAX730A CIRCUIT CONDITIONS   | MAX730A CIRCUIT CONDITIONS   | MAX730A CIRCUIT CONDITIONS   | SOFT-START TIME (ms) vs. C1 (µF)   | SOFT-START TIME (ms) vs. C1 (µF)   | SOFT-START TIME (ms) vs. C1 (µF)   | SOFT-START TIME (ms) vs. C1 (µF)   |
|------------------------------|------------------------------|------------------------------|------------------------------|------------------------------------|------------------------------------|------------------------------------|------------------------------------|
| R1 (k Ω )                    | V+ (V)                       | I OUT (mA)                   | C4 (µF)                      | C1 = 0.01                          | C1 = 0.047                         | C1 = 0.1                           | C1 = 0.47                          |
| 510                          | 6                            | 0                            | 100                          | 2                                  | 6                                  | 11                                 | 28                                 |
| 510                          | 9                            | 0                            | 100                          | 1                                  | 4                                  | 6                                  | 15                                 |
| 510                          | 11                           | 0                            | 100                          | 1                                  | 2                                  | 4                                  | 11                                 |
| 510                          | 9                            | 150                          | 100                          | 1                                  | 4                                  | 8                                  | 21                                 |
| 510                          | 9                            | 300                          | 100                          | 1                                  | 5                                  | 9                                  | 27                                 |
| 510                          | 9                            | 150                          | 390                          | 3                                  | 6                                  | 9                                  | 23                                 |
| 510                          | 9                            | 150                          | 680                          | 4                                  | 6                                  | 9                                  | 24                                 |
| None                         | 6                            | 0                            | 100                          | 16                                 | 34                                 | 51                                 | 125                                |
| None                         | 9                            | 0                            | 100                          | 10                                 | 22                                 | 34                                 | 82                                 |
| None                         | 11                           | 0                            | 100                          | 8                                  | 18                                 | 28                                 | 66                                 |
| None                         | 9                            | 150                          | 100                          | 34                                 | 134                                | 270                                | 1263                               |
| None                         | 9                            | 150                          | 390                          | 39                                 | 147                                | 280                                | 1275                               |
| None                         | 9                            | 150                          | 680                          | 40                                 | 152                                | 285                                | 1280                               |

| MAX738A/MAX744A CIRCUIT CONDITIONS   | MAX738A/MAX744A CIRCUIT CONDITIONS   | MAX738A/MAX744A CIRCUIT CONDITIONS   | MAX738A/MAX744A CIRCUIT CONDITIONS   | SOFT-START TIME (ms) vs. C1 (µF)   | SOFT-START TIME (ms) vs. C1 (µF)   | SOFT-START TIME (ms) vs. C1 (µF)   | SOFT-START TIME (ms) vs. C1 (µF)   |
|--------------------------------------|--------------------------------------|--------------------------------------|--------------------------------------|------------------------------------|------------------------------------|------------------------------------|------------------------------------|
| R1 (k Ω )                            | V+ (V)                               | I OUT (mA)                           | C4 (µF)                              | C1 = 0.01                          | C1 = 0.047                         | C1 = 0.1                           | C1 = 0.47                          |
| 510                                  | 7                                    | 0                                    | 100                                  | 1                                  | 4                                  | 6                                  | 18                                 |
| 510                                  | 12                                   | 0                                    | 100                                  | 1                                  | 2                                  | 3                                  | 8                                  |
| 510                                  | 16                                   | 0                                    | 100                                  | 1                                  | 1                                  | 2                                  | 6                                  |
| 510                                  | 12                                   | 300                                  | 100                                  | 1                                  | 3                                  | 5                                  | 3                                  |
| 510                                  | 12                                   | 750                                  | 100                                  | 1                                  | 5                                  | 8                                  | 21                                 |
| None                                 | 7                                    | 0                                    | 100                                  | 12                                 | 27                                 | 40                                 | 100                                |
| None                                 | 12                                   | 0                                    | 100                                  | 7                                  | 16                                 | 25                                 | 54                                 |
| None                                 | 16                                   | 0                                    | 100                                  | 6                                  | 13                                 | 20                                 | 68                                 |
| None                                 | 12                                   | 300                                  | 100                                  | 27                                 | 112                                | 215                                | 1114                               |

## Internal Reference

The +1.23V bandgap reference supplies up to 100µA at  REF. Connect a 0.01µF bypass capacitor from REF to GND.

## Oscillator

The internal oscillator of the MAX730A typically operates at 170kHz (160kHz for the MAX738A and 185kHz for  the  MAX744A). The MAX744A is guaranteed to operate at a minimum of 159kHz and a maximum of 212.5kHz over the operating voltage and temperature range, making it ideal for use in portable communications  systems. The Typical Operating Characteristics graphs indicate oscillator frequency stability over temperature and supply voltage.

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_Applications Information

Figure 3 shows the standard 5V step-down application circuits.    Table  3  lists  the  components  for  the  desired operating temperature range. These circuits are useful in  systems that require high current at high efficiency and are powered by an unregulated supply, such as a battery or wall-plug AC-DC transformer. These circuits operate over the entire line, load, and temperature ranges using the single set of component values shown in Figure 3 and listed in Table 3.

## Inductor Selection

The MAX730A/MAX738A/MAX744A require no inductor design because they are tested in-circuit, and are guaranteed to deliver the power specified in the Electrical  Characteristics with high efficiency using a

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 5V, Step-Down, Current-Mode PWM DC-DC Converters

Figure 1.  Detailed Block Diagram with External Components

<!-- image -->

single 100µH (MAX7\_\_AC) or 33µH (MAX7\_\_AE/AM) inductor. The inductor's incremental saturation current rating should be greater than 1A, and its DC resistance should be less than 0.8 Ω .  Table  2  lists  inductor  types and suppliers for various applications. The surfacemount inductors have nearly equivalent efficiencies to the larger through-hole inductors.

## Output Filter Capacitor Selection

The primary criterion for selecting the output filter capacitor is low equivalent series resistance (ESR). The product of the inductor current variation and the output capacitor's ESR determines the amplitude of the sawtooth ripple seen on the output voltage. Also, minimize the output filter capacitor's ESR to maintain AC stability.  The  capacitor's ESR should be less than 0.25 Ω to keep the output ripple less than 50mVp-p over the entire current range (using a 100µH inductor).

Capacitor ESR rises as the temperature falls, and excessive ESR is the most likely cause of trouble at temperatures below 0°C. Sanyo OS-CON series through-hole and surface-mount tantalum capacitors exhibit  low  ESR at temperatures below 0°C. Refer to Table 2 for recommended capacitor values and suggested capacitor suppliers.

## Other Components

The catch diode should be a Schottky or high-speed silicon  rectifier  with  a  peak  current  rating  of  at  least 1.5A for full-load  (750mA) operation. The 1N5817 is a good choice. The 330pF outer-loop compensation capacitor provides the widest input voltage range and best transient characteristics. For low-current applications, the 510k Ω resistor may be omitted (see the Maximum Output Current vs. Supply Voltage graph (R1 removed) in the Typical Operating Characteristics).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 5V, Step-Down, Current-Mode PWM DC-DC Converters

Table 2.  Component Values and Suppliers

| Production Method       | MAX730AC/MAX738AC/MAX744AC Commercial Temp. Range                                                                                       | MAX730AC/MAX738AC/MAX744AC Commercial Temp. Range                                                         | MAX730AE/M, MAX738AE/M, MAX744AE/M Wide Temp. Range                                                                              | MAX730AE/M, MAX738AE/M, MAX744AE/M Wide Temp. Range                                                                                                                                                                          |
|-------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                         | Inductors                                                                                                                               | Capacitors                                                                                                | Inductors                                                                                                                        | Capacitors                                                                                                                                                                                                                   |
| Surface Mount           | L1 = 33µH to 100µH Sumida (708) 956-0666 CD54-101KC (MAX730AC) CD105-101KC (MAX738AC/MAX744AC) Coiltronics (407) 241-7876 CTX100 series | C3 = 68µF, 16V C4 = 100µF, 6.3V Matsuo (714) 969-2491 267 series Sprague (603) 224-1961 595D/293D series  | L1 = 33µH Sumida (708) 956-0666 CD54-330N (MAX730AC) CD105-330N (MAX738AE/M, MAX744AE/M) Coiltronics (407) 241-7876 CTX50 series | C3 = 68µF, 16V C4 = 100µF, 6.3V Matsuo (714) 969-2491 267 series Sprague (603) 224-1961 595D/293D series                                                                                                                     |
| Miniature Through- Hole | L1 = 33µH to 100µH Sumida (708) 956-0666 RCH654-101K (MAX730A) RCH895-101K (MAX738A/MAX744A)                                            | C3 = 150µF, 16V C4 = 150µF, 16V or 390µF, 6.3V Nichicon (708) 843-7500 PL series Low-ESR electrolytics    | L1 = 33µH Sumida (708) 956-0666 RCH654-330M (MAX730A) RCH895-330M (MAX738A/MAX744A)                                              | C3 = 150µF, 16V C4 = 220µF, 10V Sanyo (619) 661-6322 OS-CON series Low-ESR organic semiconductor (Rated from -55°C to +105°C) Mallory (317) 273-0090 THF series C3 = 100µF, 20V C4 = 220µF, 10V (Rated from -55°C to +125°C) |
| Low-Cost Through- Hole  | L1 = 100µH Maxim MAXL001 100µH iron-power toroid Renco (516) 586-5566 RL1284-100                                                        | C3 = 150µF, 16V C4 = 390µF, 6.3V Maxim MAXC001 150µF, low-ESR electrolytic United Chemicon (708) 843-7500 |                                                                                                                                  |                                                                                                                                                                                                                              |

## Printed Circuit Layouts

A good layout is essential for clean, stable operation. The layouts and component placement diagrams given in Figures 4, 5, 6, and 7 have been successfully tested over a wide range of operating conditions. Note that the 1µF bypass capacitor (C2) must be positioned as close to the V+ and GND pins as possible. Also, place the output capacitor as close to the OUT and GND pins as possible.  The traces connecting the input and output filter capacitors and the catch diode must be short to minimize inductance and capacitance. For this reason, avoid using sockets, and solder the IC directly to the PC board. Use an uninterrupted ground plane if possible.

<!-- image -->

## Output-Ripple Filtering

A simple lowpass pi-filter (Figure 3) can be added to the output to reduce output ripple to about 5mVp-p. The cutoff frequency shown is 21kHz. Since the filter inductor is in series with the circuit output, its resistance should be minimized so the voltage drop across it is not excessive.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 5V, Step-Down, Current-Mode PWM DC-DC Converters

Figure 2.  Block Diagram of Soft-Start Circuitry

<!-- image -->

Figure 3.  Standard +5V Step-Down Application Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| PART    | INPUT SUPPLY RANGE (V)   |   GUARANTEED OUTPUT CURRENT AT 5V (mA) |
|---------|--------------------------|----------------------------------------|
| MAX730A | 6.0 to 11.0              |                                    450 |
| MAX738A | 6.0 to 16.0              |                                    450 |
| MAX738A | 10.2 to 16.0             |                                    750 |
| MAX744A | 6.0 to 9.0               |                                    500 |
| MAX744A | 9.0 to 16.0              |                                    750 |

<!-- image -->

## 5V, Step-Down, Current-Mode PWM DC-DC Converters

<!-- image -->

Figure 4.  DIP PC Layout, Through-Hole Component Placement Diagram (1x scale)

<!-- image -->

Figure 6.  DIP PC Layout, Solder Side (1x scale)

<!-- image -->

Figure 5.  DIP PC Layout, Component Side (1x scale)

<!-- image -->

Figure 7.  DIP PC Layout, Drill Guide (1x scale)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 5V, Step-Down, Current-Mode PWM DC-DC Converters

\_\_\_\_Pin Configurations (continued)

<!-- image -->

\_\_Ordering Information (continued)

| PART        | TEMP. RANGE     | PIN-PACKAGE   |
|-------------|-----------------|---------------|
| MAX738A CPA | 0°C to +70°C    | 8 Plastic DIP |
| MAX738ACWE  | 0°C to +70°C    | 16 Wide SO    |
| MAX738AC/D  | 0°C to +70°C    | Dice*         |
| MAX738AEPA  | -40°C to +85°C  | 8 Plastic DIP |
| MAX738AEWE  | -40°C to +85°C  | 16 Wide SO    |
| MAX738AMJA  | -55°C to +125°C | 8 CERDIP      |
| MAX744A CPA | 0°C to +70°C    | 8 Plastic DIP |
| MAX744ACWE  | 0°C to +70°C    | 16 Wide SO    |
| MAX744AC/D  | 0°C to +70°C    | Dice*         |
| MAX744AEPA  | -40°C to +85°C  | 8 Plastic DIP |
| MAX744AEWE  | -40°C to +85°C  | 16 Wide SO    |
| MAX744AMJA  | -55°C to +125°C | 8 CERDIP      |

*Contact factory for dice specifications.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Chip Topographies

<!-- image -->

TRANSISTOR COUNT:  274 (MAX730A) 286 (MAX738A/MAX744A); SUBSTRATE CONNECTED TO V+.

<!-- image -->

<!-- image -->

## 5V, Step-Down, Current-Mode PWM DC-DC Converters

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Package Information

| DIM   | INCHES    | INCHES    | MILLIMETERS   | MILLIMETERS   |
|-------|-----------|-----------|---------------|---------------|
| DIM   | MIN       | MAX       | MIN           | MAX           |
| A     | 0.053     | 0.069     | 1.35          | 1.75          |
| A1    | 0.004     | 0.010     | 0.10          | 0.25          |
| B     | 0.014     | 0.019     | 0.35          | 0.49          |
| C     | 0.007     | 0.010     | 0.19          | 0.25          |
| D     | 0.189     | 0.197     | 4.80          | 5.00          |
| E     | 0.150     | 0.157     | 3.80          | 4.00          |
| e     | 0.050 BSC | 0.050 BSC | 1.27 BSC      | 1.27 BSC      |
| H     | 0.228     | 0.244     | 5.80          | 6.20          |
| h     | 0.010     | 0.020     | 0.25          | 0.50          |
| L     | 0.016     | 0.050     | 0.40          | 1.27          |
| a     | 0˚        | 8˚        | 0˚            | 8˚            |

15

<!-- image -->

## 5V, Step-Down, Current-Mode PWM DC-DC Converters

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Package Information (continued)

| DIM   | INCHES    | INCHES    | MILLIMETERS   | MILLIMETERS   |
|-------|-----------|-----------|---------------|---------------|
|       | MIN       | MAX       | MIN           | MAX           |
| A     | -         | 0.200     | -             | 5.08          |
| B     | 0.014     | 0.023     | 0.36          | 0.58          |
| B1    | 0.038     | 0.065     | 0.97          | 1.65          |
| B2    | 0.023     | 0.045     | 0.58          | 1.14          |
| C     | 0.008     | 0.015     | 0.20          | 0.38          |
| D     | -         | 0.405     | -             | 10.29         |
| E     | 0.220     | 0.310     | 5.59          | 7.87          |
| E1    | 0.290     | 0.320     | 7.37          | 8.13          |
| e     | 0.100 BSC | 0.100 BSC | 2.54 BSC      | 2.54 BSC      |
| L     | 0.125     | 0.200     | 3.18          | 5.08          |
| L1    | 0.150     | -         | 3.81          | -             |
| Q     | 0.015     | 0.060     | 0.38          | 1.52          |
| S     | -         | 0.055     | -             | 1.40          |
| S1    | 0.005     | -         | 0.13          | -             |
| a     | 0˚        | 15˚       | 0˚            | 15˚           |

<!-- image -->

| DIM   | INCHES    | INCHES    | MILLIMETERS   | MILLIMETERS   |
|-------|-----------|-----------|---------------|---------------|
|       | MIN       | MAX       | MIN           | MAX           |
| A     | 0.093     | 0.104     | 2.35          | 2.65          |
| A1    | 0.004     | 0.012     | 0.10          | 0.30          |
| B     | 0.014     | 0.019     | 0.35          | 0.49          |
| C     | 0.009     | 0.013     | 0.23          | 0.32          |
| D     | 0.398     | 0.413     | 10.10         | 10.50         |
| E     | 0.291     | 0.299     | 7.40          | 7.60          |
| e     | 0.050 BSC | 0.050 BSC | 1.27 BSC      | 1.27 BSC      |
| H     | 0.394     | 0.419     | 10.00         | 10.65         |
| h     | 0.010     | 0.030     | 0.25          | 0.75          |
| L     | 0.016     | 0.050     | 0.40          | 1.27          |
| a     | 0˚        | 8˚        | 0˚            | 8˚            |

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

16

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600