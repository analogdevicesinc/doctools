<!-- lastmod 2021-05-05 -->
<!-- image -->

Data Sheet

## FEATURES

Comparator with on-chip reference Ultralow power consumption with ICC = 92 nA (typical) Precision low voltage monitoring down to 0.5 V Accurate internal reference level over full temperature range ±1.6% at 1 V ±2.2% at 0.5 V Enable input 23 µs typical propagation delay Open-drain type output Input glitch immunity Available in a 1.46 mm × 0.96 mm WLCSP Operational temperature range: -40°C to +85°C

## APPLICATIONS

Portable/battery-operated equipment Battery monitors Energy harvesting

## GENERAL DESCRIPTION

The ADCMP380 is an ultralow power voltage comparator with internal reference suitable for use in general-purpose applications. The ultralow power consumption of this device makes it suitable for power efficiency sensitive systems, such as battery-powered portable devices and energy meters.

The ADCMP380 is available with a 0.5 V and 1 V internal reference with ±2.2% and ±1.6% accuracy, respectively, over the full temperature range; this internal reference enables the device to monitor the node of interest accurately to 0.5 V . The enable input allows the user to hold the output low regardless of the state of the input.

## Ultralow Power Voltage Comparator with Reference

[ADCMP380](https://www.analog.com/ADCMP380?doc=ADCMP380.pdf)

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

The ADCMP380 is available in a 6-ball, 1.46 mm × 0.96 mm WLCSP and is specified over the temperature range of -40°C to +85°C.

## Table 1. Selection Table

| Part No.   |   Reference Voltage (V) | Output     |
|------------|-------------------------|------------|
| ADCMP380-1 |                       1 | Open-drain |
| ADCMP380-2 |                     0.5 | Open-drain |

## [ADCMP380](https://www.analog.com/ADCMP380?doc=ADCMP380.pdf)

| TABLE OF CONTENTS                                                                                             |
|---------------------------------------------------------------------------------------------------------------|
| Features .............................................................................................. 1     |
| Applications....................................................................................... 1         |
| Functional Block Diagram .............................................................. 1                     |
| General Description......................................................................... 1                |
| Revision History ............................................................................... 2            |
| Specifications..................................................................................... 3         |
| Absolute Maximum Ratings............................................................ 4                        |
| Thermal Resistance ...................................................................... 4                   |
| ESD Caution.................................................................................. 4               |
| Pin Configuration and Function Descriptions............................. 5                                    |
| Typical Performance Characteristics ............................................. 6                           |
| REVISION HISTORY                                                                                              |
| 4/2021-Rev. Ato Rev. B Added VCC Slew Rate Consideration Section ............................. 8              |
| 2/2016-Rev. 0 to Rev.A Changes to Ordering Guide.......................................................... 10 |

3/2015-Revision 0: Initial Version

| Theory of Operation .........................................................................8       |
|------------------------------------------------------------------------------------------------------|
| Transient Immunity......................................................................8            |
| Output.............................................................................................8 |
| EN Input.........................................................................................8   |
| Adding Hysteresis..........................................................................8         |
| VCC Slew Rate Consideration.....................................................8                    |
| Device Options ..................................................................................9   |
| Outline Dimensions....................................................................... 10         |
| Ordering Guide............................................................................... 10     |

## SPECIFICATIONS

VCC = 2 V to 5.5 V , VIN &lt; VCC + 0.3 V , TA = -40°C to +85°C, unless otherwise noted. Typical values are at TA = 25°C.

## Table 2.

| Parameter                                        | Symbol    | Min   |   Typ |   Max | Unit   | Test Conditions/Comments                       |
|--------------------------------------------------|-----------|-------|-------|-------|--------|------------------------------------------------|
| OPERATINGVOLTAGE RANGE                           | V CC      | 2 0.9 |       |   5.5 | V V    | Guarantees valid OUT output Guarantees OUT low |
| UNDERVOLTAGE LOCKOUT (UVLO) Input Voltage Rising |           |       |       |       |        |                                                |
|                                                  | UVLO RISE |       |       |  1.95 | V      |                                                |
| Input Voltage Falling                            | UVLO FALL | 1.65  |       |       | V      |                                                |
|                                                  | UVLO HYS  |       |    90 |       | mV     |                                                |
| Hysteresis                                       |           |       |       |       |        |                                                |
| VCC Quiescent Current                            | I CC      |       |    92 |   190 | nA     | OUT high                                       |
|                                                  |           |       |       |   110 | nA     | OUT high, T A = 25°C                           |
| IN Average Input Current                         | I VIN     |       |     4 |   8.5 | nA     | V IN = 2 V,V CC = 5.5V                         |
|                                                  |           |       |     4 |    32 | nA     | V IN = 2 V,V CC = 2V                           |
| REFERENCEVOLTAGE                                 | V REF     |       |       |       |        | Input falling                                  |
| ADCMP380-1                                       |           | 0.984 |     1 | 1.016 | V      | V REF = 1V                                     |
| ADCMP380-2                                       |           | 0.489 |   0.5 | 0.511 | V      | V REF = 0.5V                                   |
| INPUT HYSTERESIS                                 | V HYST    |       |  10.3 |       | mV     |                                                |
| PROPAGATION DELAY                                |           |       |       |       |        |                                                |
| IN to OUT                                        | t PD      | 13.5  |    23 |    35 | µs     | IN falling withV REF × 10% overdrive           |
|                                                  |           | 22    |  39.5 |    61 | µs     | IN rising withV REF × 10% overdrive            |
| IN GLITCH REJECTION                              | t GR_IN   |       |    21 |       | µs     | IN falling withV REF × 10% overdrive           |
|                                                  |           |       |    38 |       | µs     | IN rising withV REF × 10% overdrive            |
| OUT OUTPUT                                       |           |       |       |       |        |                                                |
| Output Voltage Low                               | V OUT_OL  |       |       |   0.4 | V      | V CC > 4.25 V, I SINK = 6.5mA                  |
|                                                  |           |       |       |   0.4 | V      | V CC > 2.5 V, I SINK =6mA                      |
|                                                  |           |       |       |   0.4 | V      | V CC > 1.2 V, I SINK = 4.6mA                   |
|                                                  |           |       |       |   0.4 | V      | V CC > 0.9 V, I SINK = 0.9mA                   |
| Leakage Current                                  |           |       |       |     5 | nA     | V OUT =V CC = 5.5V                             |
| EN INPUT                                         |           |       |       |       |        |                                                |
| V IL                                             |           |       |       |   0.4 | V      |                                                |
| V IH                                             |           | 0.9   |       |       | V      |                                                |
| EN Glitch Rejection                              |           |       |   0.4 |       | µs     |                                                |
| EN to OUT Delay                                  | t D_EN    |       |  0.65 |       | µs     | EN falling                                     |
| EN Pull-Up Resistance                            |           | 0.5   |   0.6 |  0.82 | MΩ     |                                                |

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

Table 3.

| Parameter                   | Rating              |
|-----------------------------|---------------------|
| VCC OUT IN EN               | -0.3V to +6V        |
|                             | -0.3V to +6V        |
|                             | -0.3V to +6V        |
|                             | -0.3V toV CC + 0.3V |
| Input/Output Current        | 10mA                |
| Storage Temperature Range   | -40°C to +150°C     |
| Operating Temperature Range | -40°C to +85°C      |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

θJA is specified for a device soldered on an FR4 board with a minimum footprint.

## Table 4.

| PackageType   |   θ JA | Unit   |
|---------------|--------|--------|
| 6-BallWLCSP   |  105.6 | °C/W   |

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

Figure 2. Pin Configuration

| Pin No.   | Mnemonic   | Description                                                                                                                        |
|-----------|------------|------------------------------------------------------------------------------------------------------------------------------------|
| A1        | VCC        | Power Supply Input. It isrecommendedtoplace a0.1 µFdecoupling capacitorbetweentheVCCpinandtheGNDpin.                               |
| A2        | GND        | Ground. Both GNDpins on the ADCMP380 must be grounded.                                                                             |
| B1        | EN         | Active High Output Enable Input. If required, a 0.1 μF capacitor between the EN pin and ground provides additional noise immunity. |
| B2        | GND        | Ground. Both GNDpins on the ADCMP380 must be grounded.                                                                             |
| C1        | IN         | Comparator Input.                                                                                                                  |
| C2        | OUT        | Open-Drain Comparator Output.                                                                                                      |

Table 5. Pin Function Descriptions

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 3. Supply Current (ICC) vs. Temperature

<!-- image -->

Figure 4. Supply Current (ICC) vs. Supply Voltage, VCC &lt; 2 V

<!-- image -->

Figure 5. Supply Current (ICC) vs. Supply Voltage

<!-- image -->

Figure 6. Input Current for IN and VCC vs. VIN

Figure 7. Output Voltage vs. Voltage on VCC (with the OUT Pin Pulled up to the VCC Pin Through RPULLUP)

<!-- image -->

Figure 8. Maximum Transient Duration vs. OUT Comparator Overdrive

<!-- image -->

<!-- image -->

Figure 9. IN Pin Leakage Current vs. Temperature

<!-- image -->

Figure 10. OUT Pin Leakage Current vs. Output Voltage, OUT Logic High

<!-- image -->

Figure 11. OUT Low Level Output Voltage (VOUT\_OL) vs. Sink Current (ISINK)

Figure 12. OUT Delay With IN Rising, Channel 2 = IN, Channel 4 = OUT

<!-- image -->

<!-- image -->

Figure 13. OUT Delay With IN Falling, Channel 2 = IN, Channel 4 = OUT

<!-- image -->

## THEORY OF OPERATION

The ADCMP380 ultralow power voltage comparator is especially suited for battery-powered applications due to the maximum 190 nA quiescent current. The internal precision reference and the low input leakage current allow the user to monitor the voltage of interest accurately through external resistor dividers. The device features internal input hysteresis and an open-drain output. The output remains logic high after the voltage on the IN pin is above the internal reference voltage. The device keeps the output in a logic low state whenever the supply voltage on the VCC pin is below the UVLO threshold. The output can be disabled and remains low if the EN pin is pulled low, regardless of the status of the IN pin.

## TRANSIENT IMMUNITY

To avoid unnecessary output state change caused by fast power supply transients, an input glitch filter is added to the IN pin of the ADCMP380 to filter out the transient glitches on the pin.

Figure 8 shows the comparator overdrive (that is, the maximum magnitude of positive and negative going pulses with respect to the reference voltage) vs. the pulse duration without changing the state of the output.

## OUTPUT

The output of ADCMP380 comparator is open-drain. The output is guaranteed to be logic low from when VCC = 0.9 V to when the device exits ULVO.

When the IN voltage falls below the internal reference voltage, the OUT pin asserts low within 23 μs (typical). When the monitored voltage rises above the reference voltage plus hysteresis, the OUT pin asserts high within 39.5 μs.

## EN INPUT

Driving EN low asserts the output low. The EN input has a 0.6 MΩ internal pull-up resistor so that the input is always high when unconnected. To drive the EN input, use an external signal or a push-button switch to ground; debounce circuitry is integrated on-chip for this purpose. Noise immunity is provided on the EN input, and fast, negative going transients of up to 0.4 μs (typical) are ignored. If required, a 0.1 μF capacitor between the EN pin and ground provides additional noise immunity.

Figure 14. Timing Diagram

<!-- image -->

## ADDING HYSTERESIS

To prevent oscillations at the output caused by noise or slowly moving signals passing the switching threshold, positive feedback can add hysteresis to the input.

For the configuration shown in Figure 15, connect the bottom end of the input resistor divider to the output; the effective threshold is altered based on the output state.

The input falling threshold level is given by

<!-- formula-not-decoded -->

where VREF = 0.6 V , assuming RLOAD &gt;&gt; R2 and RPULLUP , where RLOAD is the resistance on the load.

The input rising threshold level is given by

<!-- formula-not-decoded -->

The additional hysteresis is the difference between these voltage levels and is given by

<!-- formula-not-decoded -->

Note that the built in hysteresis of the device is neglected in this calculation.

Figure 15. Configuration with Added Hysteresis

<!-- image -->

## VCC SLEW RATE CONSIDERATION

A fast VCC ramp (µs range) on power-up can cause the device to behave in an irregular manner. In applications where a high slew rate on VCC is possible, for example, powering up using a battery pack, it is recommended that an RC filter is used to reduce the slew rate. RC combinations of 3.3 kΩ + 2.2 µF and 1 kΩ + 10 µF have been tested and identified as safe options.

## DEVICE OPTIONS

Table 6. Reference Voltage (VREF) Options (TA= -40°C to +85°C)

| ModelNumber   |   Min |   Typ |   Max | Unit   |
|---------------|-------|-------|-------|--------|
| ADCMP380-1    | 0.984 |     1 | 1.016 | V      |
| ADCMP380-2    | 0.489 |   0.5 | 0.511 | V      |

<!-- image -->

Figure 16. Ordering Code Structure

<!-- image -->

## OUTLINE DIMENSIONS

PKG-003299

Figure 17. 6-Ball Wafer Level Chip Scale Package [WLCSP]

<!-- image -->

(CB-6-17)

Dimensions shown in millimeters

## ORDERING GUIDE

| Model 1                               | Temperature Range   | Package Description                           | Package Option   | Marking Code   |
|---------------------------------------|---------------------|-----------------------------------------------|------------------|----------------|
| ADCMP380-1ACBZ-RL7 ADCMP380-2ACBZ-RL7 | -40°C to +85°C      | 6-Ball Wafer Level Chip Scale Package [WLCSP] | CB-6-17          | CW             |
|                                       | -40°C to +85°C      | 6-Ball Wafer Level Chip Scale Package [WLCSP] | CB-6-17          | LQZ            |
| ADCMP380-EVALZ                        |                     | Evaluation Board                              |                  |                |

<!-- image -->

08-25-2014-A