<!-- lastmod 2022-08-04 -->
<!-- image -->

## Adjustable, Step-Down, Current-Mode PWM Regulators

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

The MAX750A/MAX758A are adjustable-output, CMOS, step-down,  DC-DC  switching  regulators.    The MAX758A accepts inputs from 4V to 16V and delivers 750mA, while the MAX750A accepts inputs from 4V to 11V and delivers 450mA.  Typical efficiencies are 85% to  90%.  Typical quiescent current is 1.7mA, or only 6µA in shutdown mode.  The output does not exhibit any ripple at subharmonics of the switching frequency over its specified range.

Pulse-width-modulation (PWM) current-mode control provides precise output regulation and excellent transient  responses.  Output voltage accuracy is guaranteed to be ±4.5% plus feedback-resistor tolerance over line, load, and temperature variations.  Fixed-frequency switching and absence of subharmonic ripple allows easy filtering of output ripple and noise, as well as the use of small external components.  These regulators require only a single inductor value to work in most applications, so no inductor design is necessary.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Applications

Cellular Phones &amp; Radios

Portable Communications Equipment

Portable Instruments

Computer Peripherals

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Configurations

<!-- image -->

- ' Up to 750mA Load Currents
- ' 160kHz High-Frequency, Current-Mode PWM
- ' 85% to 96% Efficiencies
- ' 33µH or 100µH Pre-Selected Inductor Value, No Component Design Required
- ' 1.7mA Quiescent Supply Current
- ' 6µA Shutdown Supply Current
- ' Adjustable Output Voltage
- ' Overcurrent, Soft-Start, and Undervoltage Lockout Protection
- ' Cycle-by-Cycle Current Limiting
- ' 8-Pin DIP/SO Packages (MAX750A)

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART        | TEMP. RANGE     | PIN-PACKAGE   |
|-------------|-----------------|---------------|
| MAX750A CPA | 0°C to +70°C    | 8 Plastic DIP |
| MAX750ACSA  | 0°C to +70°C    | 8 SO          |
| MAX750AC/D  | 0°C to +70°C    | Dice*         |
| MAX750AEPA  | -40°C to +85°C  | 8 Plastic DIP |
| MAX750AESA  | -40°C to +85°C  | 8 SO          |
| MAX750AMJA  | -55°C to +125°C | 8 CERDIP**    |

## Ordering Information continued on last page.

*  Contact factory for dice specifications.
- **Contact factory for availability and processing to MIL-STD-883.

## \_\_\_\_\_\_\_\_\_\_Typical Operating Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

Call toll free 1-800-998-8800 for free samples or literature.

## Adjustable, Step-Down, Current-Mode PWM Regulators

## ABSOLUTE MAXIMUM RATINGS

| Pin Voltages                                                                           |
|----------------------------------------------------------------------------------------|
| V+ (MAX750A).........................................................+12V, -0.3V       |
| V+ (MAX758A).........................................................+18V, -0.3V       |
| LX (MAX750A)....................................(V+ - 12V) to (V+ + 0.3V)              |
| LX (MAX758A)....................................(V+ - 21V) to (V+ + 0.3V)              |
| SS, CC, SHDN .............................................-0.3V to (V+ + 0.3V)         |
| Peak Switch Current (I LX ).........................................................2A |
| Reference Current (I REF ) ...................................................2.5mA    |
| Power Dissipation (T A = +70°C)                                                        |
| 8-Pin Plastic DIP (derate 9.09mW/°C above +70°C) .....727mW                            |
| 8-Pin SO (derate 5.88mW/°C above +70°C)..................471mW                         |
| 16-Pin Wide SO (derate 9.52mW/°C above +70°C) ......762mW                              |

| Operating Temperature Ranges: MAX75_AC_ _.......................................................0°C   | to +70°C                                                           |
|-------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| MAX75_AE_ _                                                                                           | ....................................................-40°C to +85°C |
| MAX75_AMJA..................................................-55°C                                     | to +125°C                                                          |
| Junction Temperatures: MAX75_AC_ _/AE_                                                                | _......................................................+150°C      |
| MAX75_AMJA................................................................+175°C                      |                                                                    |
| Storage Temperature                                                                                   | Range.............................-65°C to +160°C                  |
| Lead Temperature (soldering, 10sec)                                                                   | .............................+300°C                                |

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS

(Circuit of Figure 3, V+ = 9V for the MAX750A, V+ = 12V for the MAX758A, VOUT = 5V, R2 = 40.20k Ω , R3 = 13.0k Ω , I LOAD = 0mA, TA = TMIN to TMAX, unless otherwise noted.)

| PARAMETER                        | CONDITIONS                                                                                                                  |   MIN |   MAX750A TYP |   MAX |   MIN |   MAX758A TYP |   MAX | UNITS   |
|----------------------------------|-----------------------------------------------------------------------------------------------------------------------------|-------|---------------|-------|-------|---------------|-------|---------|
| Output Voltage (Note 1)          | V+ = 6.0V to 11.0V; 0mA < I LOAD < 450mA for MAX750AC, 0mA < I LOAD < 450mA for MAX750AE, 0mA < I LOAD < 300mA for MAX750AM |  4.75 |          5.00 |  5.25 |       |               |       | V       |
| Output Voltage (Note 1)          | V+ = 6.0V to 16.0V; 0mA < I LOAD < 450mA for MAX758AC/AE, 0mA < I LOAD < 350mA for MAX758AM                                 |       |               |       |  4.75 |          5.00 |  5.25 | V       |
| Output Voltage (Note 1)          | V+ = 10.2V to 16.0V, 0mA < I LOAD < 750mA                                                                                   |       |               |       |  4.75 |          5.00 |  5.25 | V       |
| Input Voltage Range              |                                                                                                                             |   4.0 |               |  11.0 |   4.0 |               |  16.0 | V       |
| Line Regulation                  | V+ = 4.0V to 11.0V                                                                                                          |       |          0.15 |       |       |               |       | %/V     |
| Line Regulation                  | V+ = 4.0V to 16.0V                                                                                                          |       |               |       |       |          0.15 |       |         |
| Load Regulation                  | I LOAD = 0mA to 450mA                                                                                                       |       |        0.0005 |       |       |               |       | %/mA    |
| Load Regulation                  | I LOAD = 0mA to 750mA                                                                                                       |       |               |       |       |        0.0005 |       | %/mA    |
| Efficiency                       | V+ = 9.0V, I LOAD = 300mA                                                                                                   |       |            92 |       |       |            90 |       | %       |
| Efficiency                       | V+ = 12V, I LOAD = 750mA                                                                                                    |       |               |       |       |            87 |       | %       |
| Supply Current                   |                                                                                                                             |       |           1.7 |   3.0 |       |           1.7 |   3.0 | mA      |
| Shutdown Supply Current (Note 2) | SHDN = 0V                                                                                                                   |       |           6.0 | 100.0 |       |           6.0 | 100.0 | µA      |
| Shutdown Input Threshold         | V IH                                                                                                                        |   2.0 |               |       |   2.0 |               |       | V       |
| Shutdown Input Threshold         | V IL                                                                                                                        |       |               |  0.25 |       |               |  0.25 | V       |
| Shutdown Input Leakage Current   |                                                                                                                             |       |               |   1.0 |       |               |   1.0 | µA      |
| Short-Circuit Current            |                                                                                                                             |       |           1.5 |       |       |           1.5 |       | A       |

## 2 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Adjustable, Step-Down, Current-Mode PWM Regulators

## ELECTRICAL CHARACTERISTICS (continued)

(Circuit of Figure 3, V+ = 9V for the MAX750A, V+ = 12V for the MAX758A, VOUT = 5V, R2 = 40.20k Ω , R3 = 13.0k Ω , I LOAD = 0mA, TA = TMIN to TMAX, unless otherwise noted.)

| PARAMETER                  | CONDITIONS   |   MIN |   MAX750A TYP |   MAX |   MIN |   MAX758A TYP |   MAX | UNITS   |
|----------------------------|--------------|-------|---------------|-------|-------|---------------|-------|---------|
| Undervoltage Lockout       | V+ rising    |       |          3.75 |  4.00 |       |          3.75 |  4.00 | V       |
| Undervoltage Lockout       | V+ falling   |       |           3.5 |       |       |           3.5 |       | V       |
| LX On Resistance           | I LX = 500mA |       |           0.5 |       |       |           0.5 |       | Ω       |
| LX Leakage Current         |              |       |           1.0 |       |       |           1.0 |       | µA      |
| Reference Voltage          | T A = +25°C  |  1.15 |          1.22 |  1.30 |  1.15 |          1.22 |  1.30 | V       |
| Reference Drift            |              |       |            50 |       |       |            50 |       | ppm/°C  |
| Oscillator Frequency       |              |   130 |           170 |   210 |   130 |           160 |   190 | kHz     |
| Compensation Pin Impedance |              |       |          7500 |       |       |          7500 |       | Ω       |

Note 1:

Output voltage tolerance over temperature is ±4.5% plus the tolerances of R3 and R4 in Figure 3.

Note 2: The standby current typically settles to 25µA (over temperature) within 2 seconds; however, to decrease test time, the part is guaranteed at a 100µA maximum value.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics

(Circuit of Figure 3, VOUT = 5V, TA = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

MAX750A/MAX758A

## Adjustable, Step-Down, Current-Mode PWM Regulators

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics (continued)

<!-- image -->

## Adjustable, Step-Down, Current-Mode PWM Regulators

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics (continued)

(Circuit of Figure 3, VOUT = 5V, TA = +25°C, unless otherwise noted.)

<!-- image -->

MAX758A SWITCHING WAVEFORMS CONTINUOUS CONDUCTION

<!-- image -->

- A:  SWITCH VOLTAGE (LX PIN), 5V/div, 0V TO +12V
- B:  INDUCTOR CURRENT, 200mA/div
- C:  OUTPUT VOLTAGE RIPPLE, 50mV/div

C OUT = 390 m F, V+ = 12V, I OUT = 150mA

<!-- image -->

MAX758A SWITCHING WAVEFORMS DISCONTINUOUS CONDUCTION

<!-- image -->

- A:  SWITCH VOLTAGE (LX PIN), 5V/div, 0V TO +12V
- B:  INDUCTOR CURRENT, 100mA/div
- C:  OUTPUT VOLTAGE RIPPLE, 50mV/div

C OUT = 390 m F, V+ = 12V, I OUT = 20mA

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5

## MAX750A/MAX758A

## Adjustable, Step-Down, Current-Mode PWM Regulators

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics (continued)

(Circuit of Figure 3, VOUT = 5V, TA = +25°C, unless otherwise noted.)

## MAX750A LINE-TRANSIENT RESPONSE

<!-- image -->

100ms/div

A:  V OUT , 50mV/div, AC-COUPLED

B:  V+, 5V/div, 6.0V TO 11.0V

I OUT = 300mA

## MAX750A LOAD-TRANSIENT RESPONSE

<!-- image -->

50ms/div

A:  V OUT , 50mV/div, AC-COUPLED

B:  I OUT , 200mA/div, 20mA TO 300mA

V+ = 9V

<!-- image -->

## MAX758A LOAD-TRANSIENT RESPONSE

<!-- image -->

50ms/div

A:  V OUT , 50mV/div, AC-COUPLED

B:  I OUT , 500mA/div, 50mA TO 750mA

V+ = 12V

Note 3: Commercial temperature range external component values in Table 2.

Note 4: Wide temperature range external component values in Table 2.

Note 5: Supply current includes all external component leakage currents.  External capacitor leakage currents dominate at T A &gt; +85°C. C3 and C4 = Sanyo Oscon through-hole capacitors.

Note 6: Operation beyond the specifications listed in the Electrical Characteristics may exceed the power dissipation ratings of the device.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Adjustable, Step-Down, Current-Mode PWM Regulators

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Description

| PIN          | PIN            |      |                                                                                                                                                                                                                                                                       |
|--------------|----------------|------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 8-PIN DIP/SO | 16-PIN WIDE SO | NAME | FUNCTION                                                                                                                                                                                                                                                              |
| 1            | 2              | SHDN | Shutdown-active low. Ground to power-down chip, tie to V+ for normal operation. Output voltage falls to 0V when SHDN is low.                                                                                                                                          |
| 2            | 3              | REF  | Reference Voltage Output (+1.22V) supplies up to 100µA for external loads. Bypass to GND with a capacitor that does not exceed 0.047µF.                                                                                                                               |
| 3            | 7              | SS   | Soft-Start. Capacitor between SS and GND provides soft-start and short-circuit protec- tion. 510k Ω resistor from SS to SHDN provides current boost.                                                                                                                  |
| 4            | 8              | CC   | External voltage divider feedback point. When an external voltage divider is connected from the output voltage to CC and GND, this pin becomes the feedback input for adjusting the output voltage. Connect a 330pF compensation capacitor between the output and CC. |
| 5            | 9              | I.C. | Internal Connection. Make no external connection to this pin.                                                                                                                                                                                                         |
| 6            | 10, 11         | GND  | Ground*                                                                                                                                                                                                                                                               |
| 7            | 12, 13, 14     | LX   | Drain of internal P-channel power MOSFET*                                                                                                                                                                                                                             |
| 8            | 1, 15, 16      | V+   | Supply Voltage Input. Bypass to GNDwith 1.0µF ceramic and large-value electrolytic capaci- tors in parallel. The 1µF capacitor must be as close to the V+ and GNDpins are possible.*                                                                                  |
| -            | 4, 5, 6        | N.C. | No Connect-not internally connected.                                                                                                                                                                                                                                  |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAX750A/MAX758A switch-mode regulators use a current-mode pulse-width-modulation (PWM) control system coupled with a simple step-down (buck) regulator topography.  Input voltages range from 4V to 11V for the MAX750A, and from 4V to 16V for the MAX758A. The current-mode PWM architecture provides cycle-bycycle current limiting, improved load transient response characteristics, and simpler outer-loop design.

The controller consists of two feedback loops:  an inner (current)  loop  that  monitors  the  switch  current  via  the current-sense resistor and amplifier, and an outer (voltage) loop that monitors the output voltage through the error amplifier (Figure 1).  The inner loop performs cycle-by-cycle current limiting, truncating the powertransistor  on-time  when the switch current reaches a predetermined threshold.  This threshold is determined by the outer loop.  For example, a sagging output voltage produces an error signal that raises the threshold, allowing the circuit to store and transfer more energy during each cycle.

<!-- image -->

## Programmable Soft-Start

Figures 1 and 2 show a capacitor and a resistor connected to the soft-start (SS) pin to ensure an orderly powerup.  Typical values are 0.1µF and 510k Ω .    SS  controls both the soft-start timing and the maximum output current that can be delivered while maintaining regulation.

The charging capacitor slowly raises the clamp on the error-amplifier output voltage, limiting surge currents at power-up by slowly increasing the cycle-by-cycle currentlimit  threshold.  The 510k Ω resistor sets the soft-start clamp at a value high enough to maintain regulation, even at currents exceeding 1A.  This resistor is not necessary for  lower current loads.  Refer to the Maximum Output Current vs. Supply Voltage, No. R1 graph in the Typical Operating Characteristics.  Table 1 lists timing characteristics for selected capacitor values and circuit conditions.

The overcurrent comparator trips if the load exceeds approximately 1.5A.  A soft-start cycle begins when either  an  undervoltage  or  overcurrent  fault  condition triggers  an  internal  transistor  to  discharge  the  softstart  capacitor  to  ground.    A  soft-start  cycle  also begins at power-up and when coming out of the shutdown mode.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Adjustable, Step-Down, Current-Mode PWM Regulators

Figure 1.  Detailed Block Diagram with External Components

<!-- image -->

## Overcurrent Limiting

The overcurrent comparator triggers when the load current exceeds approximately 1.5A.  On each clock cycle, the output FET turns on and attempts to deliver current until cycle-by-cycle or overcurrent limits are exceeded.  Note that the soft-start capacitor must be greater than 0.01µF for overcurrent protection to function  properly.    A  typical  value  is  0.1µF.    A  soft-start cycle is initiated  when the overcurrent comparator is triggered.

## Undervoltage Lockout

The undervoltage lockout feature monitors the supply voltage at V+ and allows operation to start when V+ rises above 3.75V.  When V+ falls, operation continues until  the  supply  voltage  falls  below  3.50V.    When  an

8

undervoltage condition is detected, control logic turns off the output power FET and discharges the soft-start capacitor to ground.  This prevents partial turn-on of the power MOSFET and avoids excessive power dissipation.    The  control  logic  holds  the  output  power  FET off  until  the  supply  voltage  rises  above  approximately 3.75V, at which time a soft-start cycle begins.

## Shutdown Mode

The MAX750A/MAX758A are shut down by keeping SHDN at ground.  In shutdown mode, the output power FET is held off and the output drops to 0V.  The internal reference also turns off, which causes the soft-start capacitor to discharge.  The 6µA typical standby current includes external-component leakage currents.  As temperature increases past +85°C, the external capaci-

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Adjustable, Step-Down, Current-Mode PWM Regulators

Figure 2.  Block Diagram of Soft-Start Circuitry

<!-- image -->

tors' leakage currents rises sharply.  The actual design limit  for  standby  current  is  much  less  than  the  100µA specified in the Electrical Characteristics (see the Standby Current vs. Temperature graph in the Typical Operating Characteristics).  However, testing to tighter limits  is  prohibitive  because  the  current  takes  several seconds to settle to a final value.  For normal operation, connect SHDN to  V+.    Coming  out  of  shutdown  mode initiates a soft-start cycle.

## Continuous-/DiscontinuousConduction Modes

The input voltage, output voltage, load current, and inductor value determine whether the IC operates in continuous or discontinuous mode.  As the inductor value or load current decreases, or the input voltage increases, the MAX750A/MAX758A tend to operate in discontinuous-conduction mode (DCM).  In DCM, the inductor-current slope is steep enough so it decays to zero before the end of the transistor off-time.  In continuous-conduction mode (CCM), the inductor current never decays to zero, which is typically more efficient than DCM.  CCM allows the MAX750A/MAX758A to deliver maximum load current, and is also slightly less noisy than DCM because the ripple current in the output capacitor is smaller.

## Internal Reference

The +1.23V bandgap reference supplies up to 100µA at REF.  Connect a 0.01µF bypass capacitor from REF to GND.

## Oscillator

The internal oscillator of the MAX750A typically operates at 170kHz (160kHz for the MAX758A).  The Typical Operating Characteristics indicate stability of the oscillator frequency over temperature and supply voltage.

## \_\_\_\_\_\_\_\_\_\_Applications Information

Figure 3 shows the MAX750A/MAX758A configured for a standard 5V step-down application.  Table 2 lists the components for the desired operating temperature range. These circuits are useful in systems that require high current at high efficiency and are powered by an unregulated supply, such as a battery or wall-plug AC-DC transformer. They will operate over the entire line, load, and temperature ranges using the single set of component values shown in Figure 3 and listed in Table 2.

## Inductor Selection

The MAX750A/MAX758A require no inductor design because they are tested in-circuit, and are guaranteed to  deliver  the  power  specified  in  the Electrical Characteristics with high efficiency using a single 100µH (MAX75\_AC) or 33µH (MAX75\_AE/AM) inductor The inductor's incremental saturation-current rating should be greater than 1A, and its DC resistance should be less than 0.8 Ω .    Table 2 lists inductor types and suppliers for various applications.  The surfacemount inductors and the larger-size through-hole inductors have nearly equivalent efficiencies.

## Adjusting the Output Voltage

The MAX750A/MAX758A have outputs adjustable from 1.25V to the input voltage.  To set the output voltage, connect a voltage divider to the feedback input pin (CC) as shown in Figure 3.  The output voltage is set by R2 and R3 as follows:

Let R3 be any resistance in the 10k Ω to  20k Ω range (typically 10k Ω ), then

<!-- formula-not-decoded -->

Output tolerance over temperature is ±4.5% plus external resistor tolerances.

## Output Filter Capacitor Selection

The primary criterion for selecting the output filter capacitor is low equivalent series resistance (ESR). The product of the inductor-current variation and the ESR of the output capacitor determines the amplitude of  the  sawtooth  ripple  seen  on  the  output  voltage.    In addition, the ESR of the output filter capacitor should be minimized to maintain AC stability.  The ESR of the capacitor should be less than 0.25 Ω to keep the output ripple less than 50mVp-p over the entire current range (using a 100µH inductor).  Capacitor ESR ususally rises

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Adjustable, Step-Down, Current-Mode PWM Regulators

Table 1.  Typical Soft-Start Times

| MAX750A CIRCUIT CONDITIONS   | MAX750A CIRCUIT CONDITIONS   | MAX750A CIRCUIT CONDITIONS   | MAX750A CIRCUIT CONDITIONS   | SOFT-START TIME (ms) vs. C1 (µF)   | SOFT-START TIME (ms) vs. C1 (µF)   | SOFT-START TIME (ms) vs. C1 (µF)   | SOFT-START TIME (ms) vs. C1 (µF)   |
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

| MAX750A CIRCUIT CONDITIONS   | MAX750A CIRCUIT CONDITIONS   | MAX750A CIRCUIT CONDITIONS   | MAX750A CIRCUIT CONDITIONS   | SOFT-START TIME (ms) vs. C1 (µF)   | SOFT-START TIME (ms) vs. C1 (µF)   | SOFT-START TIME (ms) vs. C1 (µF)   | SOFT-START TIME (ms) vs. C1 (µF)   |
|------------------------------|------------------------------|------------------------------|------------------------------|------------------------------------|------------------------------------|------------------------------------|------------------------------------|
| R1 (k Ω )                    | V+ (V)                       | I OUT (mA)                   | C4 (µF)                      | C1 = 0.01                          | C1 = 0.047                         | C1 = 0.1                           | C1 = 0.47                          |
| 510                          | 7                            | 0                            | 100                          | 1                                  | 4                                  | 6                                  | 18                                 |
| 510                          | 12                           | 0                            | 100                          | 1                                  | 2                                  | 3                                  | 8                                  |
| 510                          | 16                           | 0                            | 100                          | 1                                  | 1                                  | 2                                  | 6                                  |
| 510                          | 12                           | 300                          | 100                          | 1                                  | 3                                  | 5                                  | 3                                  |
| 510                          | 12                           | 750                          | 100                          | 1                                  | 5                                  | 8                                  | 21                                 |
| None                         | 7                            | 0                            | 100                          | 12                                 | 27                                 | 40                                 | 100                                |
| None                         | 12                           | 0                            | 100                          | 7                                  | 16                                 | 25                                 | 54                                 |
| None                         | 16                           | 0                            | 100                          | 6                                  | 13                                 | 20                                 | 68                                 |
| None                         | 12                           | 300                          | 100                          | 27                                 | 112                                | 215                                | 1114                               |

as the temperature falls, and excessive ESR is the most likely  cause of trouble at temperatures below 0°C. Sanyo OS-CON series through-hole and surface-mount tantalum capacitors exhibit low ESR at temperatures below 0°C.  Refer to Table 2 for recommended capacitor values and suggested capacitor suppliers.

## Other Components

The catch diode should be a Schottky or high-speed silicon  rectifier  with  a  peak  current  rating  of  about  1A for full-load (750mA) operation.  The 1N5817 is a good choice.  The 330pF outer-loop compensation capacitor provides the widest input voltage range and best transient  characteristics.    For  low-current  applications,  the 510k Ω resistor may be omitted (see the Maximum Output Current vs. Supply Voltage, R1 Removed graph in the Typical Operating Characteristics).

## Printed Circuit Layouts

A good layout is essential for clean, stable operation. The layouts and component placement diagrams given in  Figures  4-7  have  been successfully tested over a wide range of operating conditions. The 1µF bypass capacitor (C2) must be positioned as close to the V+

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Adjustable, Step-Down, Current-Mode PWM Regulators

| PART    | INPUT SUPPLY RANGE (V)   |   GUARANTEED OUTPUT CURRENT AT 5V OUTPUT (mA) |
|---------|--------------------------|-----------------------------------------------|
| MAX750A | 6.0 to 11.0              |                                           450 |
| MAX758A | 6.0 to 16.0              |                                           450 |
| MAX758A | 10.2 to 16.0             |                                           750 |

Figure 3.  Standard Step-Down Circuit

<!-- image -->

and GND pins as possible .    Also,  place  the  output capacitor as close to the inductor and the GND pin as possible.  The traces connecting the input and output filter  capacitors  and  the  catch  diode must be short to minimize inductance and capacitance.  For this reason, avoid using sockets, and solder the IC directly to the PC board.  Use an uninterrupted ground plane if possible; otherwise, use a star ground connection.

<!-- image -->

## Output-Ripple Filtering

A simple lowpass pi-filter (Figure 3) can be added to the output to reduce output ripple to about 5mVp-p. The cutoff frequency with the values shown is 21kHz. Since the filter inductor is in series with the circuit output, its resistance should be kept to a minimum so the voltage drop across it is not excessive.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Adjustable, Step-Down, Current-Mode PWM Regulators

## Table 2.  Component Values and Suppliers

| ASSEMBLY METHOD         | MAX750AC/MAX758AC COMMERCIAL TEMPERATURE RANGE                                                                                 | MAX750AC/MAX758AC COMMERCIAL TEMPERATURE RANGE                                                            | MAX750AE/M, MAX758AE/M WIDE TEMPERATURE RANGE                                                                        | MAX750AE/M, MAX758AE/M WIDE TEMPERATURE RANGE                                                                                                                                                                                |
|-------------------------|--------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                         | INDUCTORS                                                                                                                      | CAPACITORS                                                                                                | INDUCTORS                                                                                                            | CAPACITORS                                                                                                                                                                                                                   |
| Surface Mount           | L1 = 33µH to 100µH Sumida (708) 956-0666 CD54-101KC (MAX750AC) CD105-101KC (MAX758AC) Coiltronics (305) 781-8900 CTX100 series | C3 = 68µF, 16V C4 = 100µF, 6.3V Matsuo (714) 969-2491 267 series Sprague (603) 224-1961 595D/293D series  | L1 = 33µH Sumida (708) 956-0666 CD54-33ON (MAX750AC) CD105-33ON (MAX758AE/M) Coiltronics (305) 781-8900 CTX50 series | C3 = 68µF, 16V C4 = 100µF, 6.3V Matsuo (714) 969-2491 267 series Sprague (603) 224-1961 595D/295D series                                                                                                                     |
| Miniature Through- Hole | L1 = 33µH to 100µH Sumida (708) 956-0666 RCH654-101K (MAX750A) RCH895-101K (MAX758A)                                           | C3 = 150µF, 16V C4 = 150µF, 16V or 390µF, 6.3V Nichicon (708) 843-7500 PL series Low-ESR electrolytics    | L1 = 33µH Sumida (708) 956-0666 RCH654-330M (MAX750A) RCH895-330M (MAX758A)                                          | C3 = 150µF, 16V C4 = 220µF, 10V Sanyo (619) 661-6322 OS-CON series Low-ESR organic semiconductor (Rated from -55°C to +105°C) Mallory (317) 273-0090 THF series C3 = 100µF, 20V C4 = 220µF, 10V (Rated from -55°C to +125°C) |
| Low-Cost Through- Hole  | L1 = 100µH Maxim MAXL001 100µH iron-powder toroid Renco (516) 586-5566 RL1284-100                                              | C3 = 150µF, 16V C4 = 390µF, 6.3V Maxim MAXC001 150µF, low-ESR electrolytic United Chemicon (708) 843-7500 |                                                                                                                      |                                                                                                                                                                                                                              |

## 12 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Adjustable, Step-Down, Current-Mode PWM Regulators

<!-- image -->

Figure 4.  DIP PC Layout, Through-Hole Component Placement Diagram (1x Scale)

<!-- image -->

<!-- image -->

Figure 6.  DIP PC Layout, Solder Side (1x Scale)

Figure 5.  DIP PC Layout, Component Side (1x Scale)

<!-- image -->

Figure 7.  DIP PC Layout, Drill Guide (1x Scale)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX750A/MAX758A

## Adjustable, Step-Down, Current-Mode PWM Regulators

<!-- image -->

\_\_Ordering Information (continued)

| PART        | TEMP. RANGE     | PIN-PACKAGE   |
|-------------|-----------------|---------------|
| MAX758A CPA | 0°C to +70°C    | 8 Plastic DIP |
| MAX758ACWE  | 0°C to +70°C    | 16 Wide SO    |
| MAX758AC/D  | 0°C to +70°C    | Dice*         |
| MAX758AEPA  | -40°C to +85°C  | 8 Plastic DIP |
| MAX758AEWE  | -40°C to +85°C  | 16 Wide SO    |
| MAX758AMJA  | -55°C to +125°C | 8 CERDIP**    |

*  Contact factory for dice specifications.

**Contact factory for availability and processing to MIL-STD-883.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Chip Topographies

MAX750A

<!-- image -->

<!-- image -->

TRANSISTOR COUNT:  274 (MAX750A) 286 (MAX758A); SUBSTRATE CONNECTED TO V+.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

14

## Adjustable, Step-Down, Current-Mode PWM Regulators

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Package Information

<!-- image -->

## MAX750A/MAX758A

## Adjustable, Step-Down, Current-Mode PWM Regulators

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

16

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600

is a registered trademark of Maxim Integrated Products.