<!-- lastmod 2022-08-04 -->
## General Description

The MAX5042 evaluation kit (EV kit) is a fully assembled and tested circuit board that contains a high-efficiency, high-power, isolated, hot-pluggable, 40W (with adequate cooling) forward DC-DC converter in the industrystandard half-brick footprint. The circuit is configured for a +5.0V output voltage and provides up to 8A of current. Power for the circuit can be provided from either a +36V to  +75V or -36V to -75V DC source used in the telecom/datacom markets (48V modules), industrial environments, or in automotive 42V power systems.

A high efficiency of up to 85% at 6A and 30W output power is achieved using a clamped two-transistor topology. Part of the efficiency improvement is due to the recovery of stored leakage and magnetizing inductance energy at the primary side. Galvanic isolation is achieved by an optocoupler and the surface-mount planar transformer.

Operation at 250kHz allows the use of small magnetics and output capacitors. The EV kit provides cycle-bycycle current-limit protection. Additional steady-state fault  protection  is  provided  by  integrating  fault  protection and internal thermal shutdown. The MAX5042 also has a programmable undervoltage lockout (UVLO).

Warning: The MAX5042 EV kit is designed to operate with high voltages. Dangerous voltages are present on this  EV  kit  and  on  equipment  connected to it. Users who power up this EV kit or power the sources connected to it  must be careful to follow safety procedures appropriate to working with high-voltage electrical equipment.

Under severe fault or failure conditions, this EV kit may dissipate large amounts of power, which could result in the mechanical ejection of a component or of component debris at high velocity. Operate this EV kit with care to avoid possible personal injury.

Do not short the -VIN pad to the 'EV kit Ground' when the hot-swap MOSFET N1 is off (please consult the 'Absolute Maximum Voltage Rating Diagram' in the MAX5042 data sheet). The -VIN pad and EV kit ground are at an 80V difference. The EV kit user should not probe the circuit with an oscilloscope probe and ground clip unless they have high-voltage hot-swap experience.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                               |
|---------------|-------|---------------------------------------------------------------------------|
| C1            |     1 | 220µF ±20%, 100V electrolytic capacitor (18 x 16.5) Panasonic EEVFK2A221M |
| C2            |     1 | 0.033µF ±10%, 250V ceramic capacitor (1206) TDK C3216X7R2E333K            |
| C3, C10       |     2 | 1.0µF ±10%, 16V X5R ceramic capacitors (0805) Taiyo Yuden EMK212BJ105KG   |
| C4            |     1 | 0.1µF ±10%, 50V X7R ceramic capacitor (0805) Taiyo Yuden UMK212BJ104KG    |
| C5            |     1 | 0.0047µF ±10%, 250VAC X7R ceramic capacitor (2220) Murata GA355DR7GC472KY |
| C6, C12, C15  |     3 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM39X7R104K016AD    |
| C7            |     1 | 1.0µF ±10%, 50V X7R ceramic capacitor (1210) Taiyo Yuden UMK325BJ105KH    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

<!-- image -->

## Features

- ♦ Isolated, Hot-Pluggable 40W Forward DC-DC Converter
- ♦ ±36V to ±75V Input Range
- ♦ +5V Output Up to 8A (With Adequate Cooling)
- ♦ VOUT Regulation Better than 0.1% Over Line and Load
- ♦ 85% Efficiency at 48V and 6A
- ♦ Half-Brick Module Footprint and Pinout
- ♦ Cycle-by-Cycle Current-Limit Protection
- ♦ Programmable Integrating Fault Protection
- ♦ Internal Thermal Shutdown
- ♦ 250kHz Switching Frequency
- ♦ Designed for 500V Isolation
- ♦ Soft-Start
- ♦ Latched Shutdown
- ♦ Remote Output-Voltage Sense
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE    | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX5042EVKIT | 0°C to +50°C* | 56 QFN       |

* With 100LFM airflow.

## MAX5042 Evaluation Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                               |
|---------------|-------|---------------------------------------------------------------------------|
| C8            |     1 | 0.33µF ±10%, 10V X5R ceramic capacitor (0603) Taiyo Yuden LMK107BJ334KA   |
| C9            |     1 | 220pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM39C0G221J050AD      |
| C11           |     1 | 0.1µF ±10%, 50V X7R ceramic capacitor (0805) Murata GRM40X7R104K050AD     |
| C13           |     1 | 1.0µF ±10%, 6.3V X5R ceramic capacitor (0603) Taiyo Yuden JMK107BJ105KA   |
| C14           |     1 | 100pF ±2%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H101GA01D     |
| C16           |     1 | 0.001µF, 200V X7R ceramic capacitor (0603) Murata GRM39-X7R102K200        |
| C17, C18      |     2 | 150µF, 6.3V aluminum organic capacitors (X case) Kemet A700X157M006ATE015 |
| C19           |     1 | 0.15µF ±10%, 16V X7R ceramic capacitor (0603) Taiyo Yuden EMK107BJ154KA   |
| C20-C23       |     4 | 0.68µF ±10%, 100V X7R ceramic capacitors (1812) TDK C4532X7R2A684K        |
| C24           |     0 | Not installed, ceramic capacitor (0603)                                   |
| C25           |     1 | 0.22µF ±10%, 10V X7R ceramic capacitor (0603) TDK C1608X7R1C224K          |
| C26           |     1 | 1000pF ±5%, 50V C0G ceramic capacitor (0603) TDK C1608C0G1H102J           |
| D1, D2        |     2 | 100V, 1A Schottky diodes (SMA) Diodes Incorporated B1100                  |
| D3            |     1 | 40V, 20A Schottky diode (TO-220AB) Vishay/General Semiconductor SBL2040CT |
| D4            |     1 | 75V, 200mA ultra-fast diode (SOT-23) Fairchild MMBD4148                   |
| L1            |     1 | 4.4µH, 15A inductor Pulse Engineering PA1494.442                          |

## Component List (continued)

| DESIGNATION      |   QTY | DESCRIPTION                                                                                     |
|------------------|-------|-------------------------------------------------------------------------------------------------|
| N1               |     1 | 100V, 4.6A N-channel MOSFET (SO-8) Vishay Siliconix Si4482DY                                    |
| R1               |     1 | 25.5k, Ω ±1% resistor (0603)                                                                    |
| R2               |     1 | 8.25k Ω ±1% resistor (0603)                                                                     |
| R3               |     1 | 150 Ω ±1% resistor (0805)                                                                       |
| R4, R5           |     2 | 10 Ω ±5% resistors (0805)                                                                       |
| R6               |     1 | 200 Ω ±1% resistor (0603)                                                                       |
| R7, R8, R16, R17 |     0 | Not installed, resistors (0603)                                                                 |
| R9               |     1 | 15 Ω ±5% resistor (0805)                                                                        |
| R10              |     1 | 0.025 Ω , 0.5W ±1% resistor (2010) IRC LRC-2010-R025F or Dale WSL-2010 0.025 1%                 |
| R11              |     1 | 20 Ω ±5% resistor (1206)                                                                        |
| R12              |     1 | 200k Ω ±1% resistor (0603)                                                                      |
| R13              |     1 | 1M Ω ±5% resistor (0603)                                                                        |
| R14              |     1 | 27 Ω ±5% resistor (0805)                                                                        |
| R15              |     1 | 24.9k Ω ±1% resistor (0603)                                                                     |
| R18, R19         |     2 | 5.1 Ω ±5% resistors (0603)                                                                      |
| R20              |     1 | 10k Ω ±5% resistor (1206)                                                                       |
| R21              |     1 | 1.24k Ω ±1% resistor (0603)                                                                     |
| R22              |     1 | 2k Ω ±5% resistor (0603)                                                                        |
| R23              |     1 | 10k Ω ±1% resistor (0603)                                                                       |
| R24              |     1 | 51 Ω ±5% resistor (0603)                                                                        |
| R25              |     1 | 100k Ω ±5% resistor (0805)                                                                      |
| R26              |     1 | 0 Ω ±5% resistor (0603)                                                                         |
| T1               |     1 | 200µH, 50W planar transformer Pulse Engineering PA0365                                          |
| U1               |     1 | MAX5042ATN (56-pin QFN)                                                                         |
| U2               |     1 | 30V, 100% to 200% CTR optically isolated error amplifier (SO-8) Fairchild Semiconductor FOD2712 |
| None             |     1 | MAX5042 PC board                                                                                |
| None             |     2 | Metal screws, 4-40 x 3/8                                                                        |
| None             |     1 | Nylon screw, 6-32 x 1/4                                                                         |
| None             |     1 | TO-220 thermally conductive insulating pad                                                      |
| None             |     1 | L-shaped aluminum heatsink                                                                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5042 Evaluation Kit

## Component Suppliers

| SUPPLIER                     | PHONE        | FAX          | WEBSITE               |
|------------------------------|--------------|--------------|-----------------------|
| Diodes Inc.                  | 805-446-4800 | 805-446-4850 | www.diodes.com        |
| Fairchild Semiconductor      | 888-522-5372 | -            | www.fairchildsemi.com |
| IRC                          | 361-992-7900 | 361-992-3377 | www.irctt.com         |
| Kemet                        | 864-963-6300 | 864-963-6322 | www.kemet.com         |
| Murata                       | 770-436-1300 | 770-436-3030 | www.murata.com        |
| Panasonic                    | 714-373-7366 | 714-737-7323 | www.panasonic.com     |
| Pulse Engineering            | 858-674-8100 | 858-674-8262 | www.pulseeng.com      |
| Taiyo Yuden                  | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK                          | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| Vishay/Dale                  | 402-564-3131 | 402-563-6296 | www.vishay.com        |
| Vishay/General Semiconductor | 760-804-9258 | 760-804-9259 | www.vishay.com        |
| Vishay/Siliconix             | 610-644-1300 | -            | www.vishay.com        |

Note: Please indicate that you are using the MAX5042 when contacting these component suppliers.

## Quick Start

## Required Equipment

- ±36V to ±75V power supply capable of providing 3A
- Voltmeter
- A fan to provide at least 100LFM airflow for extended operation at 8A.

The MAX5042 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

## Forward DC-DC Converter Output

- 1) Connect a jumper wire from the VOUT pad to the +SENSE pad.
- 2) Connect a jumper wire from the SGND pad to the -SENSE pad.
- 3) Connect a voltmeter to the VOUT and SGND pads.
- 4) Connect the 36V to 75V power supply to the +VIN pad. Connect the power supply's ground to the -VIN pad. Do not exceed 80V input voltage.
- 5) Turn on the power supply above 36V and verify that VOUT provides +5V at the voltmeter.

For instructions on selecting the feedback resistors for other output voltages, see the Evaluating Other Output Voltages section.

<!-- image -->

## Detailed Description

The MAX5042 EV kit is an isolated, hot-pluggable, 40W forward DC-DC converter that provides +5V at up to 8A output with adequate cooling. The circuit can be powered from a +36V to +75V or a -36V to -75V DC source.

Caution: Refer to the 'Absolute Maximum Voltage Rating Diagram' in the MAX5042 data sheet when attempting to connect test equipment to the EV kit.

The MAX5042 IC controls the hot-pluggable circuit, limiting the inrush current and rise time of the voltage to the 40W forward DC-DC converter circuit. The hot-pluggable circuit feature is provided by MOSFET N1, UVLO resistors R16/R17, the HSOK pad, and one MAX5042. When the MAX5042 EV kit is inserted into a live backplane system, the MAX5042 controls the turn-on rate of MOSFET N1 once the UVLO is above +30V (default UVLO). After MOSFET N1 is completely enhanced, the HSOK pad open-drain signal pulls low indicating that the hot swap was successful. Next, the 40W forward DC-DC converter circuit starts switching at 250kHz. Note that the IC paddle is connected to the -VIN power rail and when MOSFET N1 is  fully  enhanced, the primary-side ground is connected to the -VIN power rail. Jumper JU2 is provided to bypass hot-plugging MOSFET N1. When using JU2, note that it will carry the full primary current.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5042 Evaluation Kit

The 40W forward converter achieves high efficiency by using a clamped two-transistor power topology with both power transistors integrated on the MAX5042 IC. Cycleby-cycle current limiting protects the converter against short circuits at the output. Current-sense resistor R10 senses the current through the primary of transformer T1 and then turns off both internal transistors when the 156mV trip level is reached. For a continuous short circuit at the output, the MAX5042's fault integration feature provides hiccup fault protection, thus greatly minimizing destructive temperature rise.

The planar surface-mount transformer features a bias winding, which, along with diode D4, resistor R9, and capacitor C7, powers the MAX5042 IC after PWM startup is complete. A reset winding is not required with a clamped two-transistor power topology. Schottky diodes D1 and D2 recover the magnetic energy stored in  the  core  and  feed  it  back  to  the  +VIN  input  when both internal transistors turn off. The transformer provides galvanic isolation.

On the transformer's secondary side, optically isolated error amplifier U2 along with feedback resistors R1 and R2 provide voltage feedback to the primary side. The MAX5042 receives the voltage feedback signal on the primary side. Biasing resistor R21 provides biasing for the optocoupler transistor while the resistor/capacitor network R6/C8 provides compensation.

Remote output-voltage sensing is provided by the +SENSE and -SENSE for accurate output-voltage regulation across the load. The soft-start feature allows the output voltage to slowly ramp up in a controlled manner within 4ms. The MAX5042 switches at a preconfigured 250kHz frequency set by resistor R15 and capacitor C14. The output provides up to 8A of continuous current when a cooling fan with at least 100LFM airflow is used. Dual-diode D3's heatsink is connected to SGND.

The 6-layer PC board layout and component placement has been designed for the industry-standard half-brick footprint and pinout. Resistor/capacitor network R14 and C2 prevent voltage overshoot as a result of the ±VIN input line inductance when hot plugging the EV kit.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Shutdown

## Shutdown Mode

The MAX5042 EV kit features a jumper pad (JU1) and a hole-pad ( SHDN )  to  remotely shut down the hot-pluggable,  40W  forward  DC-DC converter.  Once the MAX5042 EV kit is shut down by either jumper method, the power to the EV kit must be cycled on/off before the MAX5042 starts switching again. Jumper pad JU1 can be used to manually shut down. An isolated optocoupler with an open-collector/drain transistor or relay contact can be connected across jumper JU1 to remotely shut down the EV kit.

## Evaluating Other Output Voltages, Current Limits, Soft-Starts and UVLOs

## VOUT Output Voltage

The MAX5042 EV kit's output (VOUT) is set to +5.0V by feedback resistors R1 and R2. To generate output voltages other than +5.0V (from +3.2V to +5.0V), select different voltage-divider resistors (R1, R2). Resistor R1 is typically chosen to be less than 25k Ω .  Using the desired output voltage, resistor R2 is then found by the following equation:

<!-- formula-not-decoded -->

where VREF is 1.24V and VOUT is the desired output voltage.

The maximum output current should be limited to less than 8A. The usable output voltage range for the EV kit is +3.2V to +5.0V. U2 and resistor R3 limit the minimum output voltage (VOUT) to +3.2V.

## Current Limiting

The EV kit features cycle-by-cycle current limiting for the transformer primary current. The MAX5042 IC turns off both internal switching transistors when the voltage across the CSP and CSN pins of the MAX5042 reaches 156mV. Current-sense resistor R10 (R10 = 0.025 Ω ) limits  the  peak  primary current to approximately 6.2A (156mV/0.025 Ω = 6.2A). This limits short-circuit current on the secondary output (VOUT) to approximately 14A. To evaluate lower current limits, current-sense resistor R10 must be replaced with a different value surfacemount resistor (1206 size) as determined by the following equation:

<!-- formula-not-decoded -->

where  VSENSE =  0.156V,  NS =  4,  NP =  10  and IOUT(MAX) = maximum DC output current (8A as configured). There are errors introduced as a result of the presence of the transformer's magnetic inductance and output inductor ripple current.

## Soft-Start

The MAX5042 EV kit limits the output voltage rate of rise  with  a  soft-start  feature.  Capacitor  C11  (0.1µF), sets the ramp time to approximately 4ms. To evaluate other soft-start ramp times, replace capacitor C11 with another surface-mount capacitor (0805 size) as determined by the following equation:

<!-- formula-not-decoded -->

where soft start\_time is the desired soft-start time in seconds.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5042 Evaluation Kit

## Undervoltage Lockout (UVLO)

The MAX5042 EV kit features a UVLO circuit that prevents operation below the programmed input supply start voltage. Resistors R7 and R8 set the EV kit's input voltage brownout UVLO. To evaluate input UVLO voltages other than the default (31.5V), install resistors R7 and R8 (0603 size) with the desired resistor values. Using the startup voltage, resistor R7 is then found by the following equation:

<!-- formula-not-decoded -->

where VIN(STARTUP) is the desired startup voltage at which the EV kit starts and resistor R8 is typically 10k Ω .

## Calculating the Hot-Swap MOSFET Snubber Resistor/Capacitor Values

Resistor R14 and capacitor C2 are series connected across the drain/source terminals of hot-swap MOSFET N1 to prevent voltage overshoot as a result of the ±VIN input line inductance when hot-plugging the EV kit. To calculate new values for capacitor C2 and resistor R14 use the following equations:

<!-- formula-not-decoded -->

where: CDS\_30V is the hot-swap MOSFET N1 drain-tosource approximate capacitance at a 30V bias point. LWIRING is the total approximate inductance of the wiring or backplane connected to the EV kit's ±VIN inputs.

## MAX5042 Evaluation Kit

## Forward DC-DC Converter Waveforms

<!-- image -->

Figure 2. Output Voltage Transient at Power-Up (+VIN = 48V, I OUT = 5A)

<!-- image -->

Figure 4. Diode D2 Cathode to PWMPNEG Plane (MAX5042 QH* Transistor) Voltage Waveform, +VIN = 48V. *QH is the MAX5042 Internal High-Side Transistor.

Figure 1. Efficiency vs. Output Current (+VIN = 48V)

<!-- image -->

Figure 3. Diode D1 Anode to Resistor R10 (MAX5042 QL* Transistor) Voltage Waveform, +VIN = 48V.

<!-- image -->

*QL is the MAX5042 Internal Low-Side Transistor.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5042 Evaluation Kit

Figure 5. MAX5042 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5042 Evaluation Kit

<!-- image -->

Figure 6. MAX5042 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 8. MAX5042 EV Kit PC Board Layout-Inner Layer, GND Layer 2

Figure 7. MAX5042 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 9. MAX5042 EV Kit PC Board Layout-Inner Layer, VCC Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 10. MAX5042 EV Kit PC Board Layout-Inner Layer, GND Layer 4

<!-- image -->

Figure 12. MAX5042 EV Kit PC Board Layout-Solder Side

<!-- image -->

## MAX5042 Evaluation Kit

Figure 11. MAX5042 EV Kit PC Board Layout-Inner Layer, VCC Layer 5

<!-- image -->

Figure 13. MAX5042 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

9

## Evaluates: MAX5042