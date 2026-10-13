<!-- lastmod 2022-08-04 -->
## General Description

The MAX1855 evaluation kit (EV kit) demonstrates a highpower, dynamically adjustable notebook CPU power-supply application circuit. The MAX1855 DC-DC converter steps down high-voltage batteries and/or AC adapters, generating a precision, low-voltage CPU core VCC rail. The MAX1855 EV kit is designed for CPU core applications requiring a voltage-positioned supply. Voltage positioning and a high-DC-accuracy control loop decrease full-load power dissipation and reduce the required number of output capacitors.

This fully assembled and tested circuit board provides a digitally adjustable 0.6V to 1.75V output voltage from a +7V to +24V battery input range. It delivers up to 18A output current. The EV kit operates at 300kHz switching frequency and has superior line-and load-transient response.

This EV kit can also be used to evaluate the MAX1716 (0.925V to 1.6V output) and the MAX1854 (0.925V to 2.0V output).

Quick-PWM is a trademark of Maxim Integrated Products.

| DESIGNATION   |   QTY | DESCRIPTION                                                                           |
|---------------|-------|---------------------------------------------------------------------------------------|
| C1-C4, C18    |     5 | 10 µ F, 25V ceramic capacitors (1812) Taiyo Yuden TMK432BJ106KM or TDK C4532X5R1E106M |
| C5-C8, C16    |     5 | 220 µ F, 2.5V, 15m Ω low-ESR specialty polymer capacitors Panasonic EEFUE0E221R       |
| C9            |     1 | 0.1 µ F ceramic capacitor (0805)                                                      |
| C10           |     1 | 10 µ F, 6.3V X5R ceramic capacitor (1210) Taiyo Yuden JMK325BJ106MN or equivalent     |
| C11, C12      |     2 | 0.22 µ F, 16V X5R ceramic capacitors (0805) Taiyo Yuden EMK212BJ224KG or equivalent   |
| C13           |     1 | 1000pF ceramic capacitor (0805)                                                       |

## MAXI

<!-- image -->

Features

- ♦ High Speed, Accuracy, and Efficiency
- ♦ Voltage-Positioned Output
- ♦ Low Output Capacitor Count (5)
- ♦ Reduces CPU Power Consumption
- ♦ Fast-response Quick-PWM TM Architecture
- ♦ +7V to +24V Input Voltage Range
- ♦ Adjustable Output Range (5-Bit DAC)

MAX1716: 0.925V to 1.6V

MAX1854: 0.925V to 2.0V

MAX1855: 0.6V to 1.75V

- ♦ 18A Load-Current Capability
- ♦ 300kHz Switching Frequency
- ♦ VGATE Transition-Complete Indicator
- ♦ 24-Pin QSOP Package
- ♦ Low-Profile Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE      | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX1855EVKIT | 0 ° C to +70 ° C | 24 QSOP      |

Note: To evaluate the MAX1716/MAX1854, request a MAX1716EEG/MAX1854EE free sample with the MAX1855EVKIT.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                     |
|---------------|-------|---------------------------------------------------------------------------------|
| C14           |     1 | 47pF ceramic capacitor (0805)                                                   |
| C15           |     1 | 1 µ F, 10V X5R ceramic capacitor (0805) Taiyo Yuden LMK212BJ105MG or equivalent |
| C17           |     0 | Not installed                                                                   |
| R1            |     1 | 20 Ω ± 5% resistor (1206)                                                       |
| R2, R14       |     2 | 0.006 Ω ± 1% 1W resistors (2512) Dale WSL-2512-R006F                            |
| R3, R4        |     2 | 1M Ω ± 5% resistors (0805)                                                      |
| R6            |     1 | 100k Ω ± 1% resistor (0805)                                                     |
| R8            |     1 | 100 Ω ± 5% resistor (0805)                                                      |
| R5, R9, R13   |     3 | 1k Ω ± 1% resistors (0805)                                                      |
| R10           |     0 | Not installed (0805)                                                            |
| R11           |     1 | 100k Ω ± 5% resistor (0805)                                                     |
| R12           |     1 | 200k Ω ± 1% resistor (0805)                                                     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

For free samples and the latest literature, visit www.maxim-ic.com or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

## MAX1855 Evaluation Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                            |
|---------------|-------|------------------------------------------------------------------------------------------------------------------------|
| D1            |     1 | 2A Schottky diode Central Semiconductor CMSH2-40 STM-Microelectronics STPS2L25U or International Rectifier 10MQ040     |
| D2            |     1 | 100mA Schottky diode Central Semiconductor CMPSH-3                                                                     |
| D3            |     1 | 1A Schottky diode Motorola MBRS130LT3 or International Rectifier 10BQ040 or Nihon EC10QS03                             |
| L1            |     1 | 0.68 µ H power inductor Sumida CEP125 #4712-T007 or Sumida CDEP134H-0R6 or Panasonic ETQP6F0R6BFA                      |
| N1, N4        |     2 | N-channel MOSFETs (8-pin SO) International Rectifier IRF7811 or International Rectifier IRF7811A                       |
| N2, N3        |     2 | N-channel MOSFETs (8-pin SO) International Rectifier IRF7811 or International Rectifier IRF7811A or Fairchild FDS7764A |

## Quick Start

- 1) Ensure that the circuit is connected correctly to the supplies and dummy load prior to applying any power.
- 2) Ensure that the shunt is connected at JU1 ( SHDN = VCC).
- 3) Turn on battery power prior to +5V bias power; otherwise, the output UVLO timer will time out and the FAULT latch will be set, disabling the regulator until +5V power is cycled or shutdown is toggled.
- 4) Observe the output with the DMM and/or oscilloscope. Look at the LX switching-node and MOSFET gate-drive signals while varying the load current.
- 5) Set switch SW1 per Table 1 to get the desired output voltage.

## Recommended Equipment

- +7V to +24V, &gt;30W power supply, battery, or notebook AC adapter
- DC bias power supply, 5V at 100mA

2

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                     |
|---------------|-------|-----------------------------------------------------------------|
| N5            |     0 | Not installed                                                   |
| U1            |     1 | MAX1855EEG (24-pin QSOP)                                        |
| JU1           |     2 | 2-pin headers                                                   |
| None          |     2 | Shunts (JU1, JU2)                                               |
| SW1           |     1 | DIP-5 dip switch                                                |
| SW2           |     1 | Momentary switch, normally open Digi-Key P8006/7S               |
| J1            |     1 | Scope-probe connector Berg Electronics 33JR135-1                |
| None          |     4 | Rubber bumpers 3M SJ-5007 or Mouser 517-SJ-5007BK or equivalent |
| None          |     1 | MAX1716/MAX1854/MAX1855 PC board                                |
| None          |     1 | MAX1855 EV kit data sheet                                       |
| None          |     1 | MAX1716/MAX1854/MAX1855 data sheet                              |

- Dummy load capable of sinking 18A
- Digital multimeter (DMM)
- 100MHz dual-trace oscilloscope

## Detailed Description

This 18A buck-regulator design is optimized for a 300kHz frequency and output voltage settings around 1.35V to 1.6V. At lower output voltages, transient response degrades slightly and efficiency worsens. At VOUT = 1.6V, inductor ripple is approximately 30%, with a resulting pulse-skipping threshold at roughly ILOAD = 3A with VIN = 12V.

## Setting the Output Voltage

The MAX1855 uses an internal 5-bit DAC as a feedback resistor voltage divider. The output voltage can be digitally set from 0.6V to 1.75V, using the D0-D4 inputs (Table 1).

## Load-Transient Experiment

One interesting experiment is to subject the output to large, fast load transients and observe the output with

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1855 Evaluation Kit

Table 1. MAX1855 Output Voltage Adjustment Settings

|   D4 |   D3 |   D2 |   D1 |   D0 | OUTPUT VOLTAGE (V)   | OUTPUT VOLTAGE (V)   | OUTPUT VOLTAGE (V)   |
|------|------|------|------|------|----------------------|----------------------|----------------------|
|      |      |      |      |      | MAX1716              | MAX1854              | MAX1855              |
|    0 |    0 |    0 |    0 |    0 | NO CPU*              | 2.000                | 1.750                |
|    0 |    0 |    0 |    0 |    1 | NO CPU*              | 1.950                | 1.700                |
|    0 |    0 |    0 |    1 |    0 | NO CPU*              | 1.900                | 1.650                |
|    0 |    0 |    0 |    1 |    1 | NO CPU*              | 1.850                | 1.600                |
|    0 |    0 |    1 |    0 |    0 | NO CPU*              | 1.800                | 1.550                |
|    0 |    0 |    1 |    0 |    1 | NO CPU*              | 1.750                | 1.500                |
|    0 |    0 |    1 |    1 |    0 | NO CPU*              | 1.700                | 1.450                |
|    0 |    0 |    1 |    1 |    1 | NO CPU*              | 1.650                | 1.400                |
|    0 |    1 |    0 |    0 |    0 | 1.600                | 1.600                | 1.350                |
|    0 |    1 |    0 |    0 |    1 | 1.550                | 1.550                | 1.300                |
|    0 |    1 |    0 |    1 |    0 | 1.500                | 1.500                | 1.250                |
|    0 |    1 |    0 |    1 |    1 | 1.450                | 1.450                | 1.200                |
|    0 |    1 |    1 |    0 |    0 | 1.400                | 1.400                | 1.150                |
|    0 |    1 |    1 |    0 |    1 | 1.350                | 1.350                | 1.100                |
|    0 |    1 |    1 |    1 |    0 | 1.300                | 1.300                | 1.050                |
|    0 |    1 |    1 |    1 |    1 | NO CPU*              | NO CPU*              | 1.000                |
|    1 |    0 |    0 |    0 |    0 | 1.275                | 1.275                | 0.975                |
|    1 |    0 |    0 |    0 |    1 | 1.250                | 1.250                | 0.950                |
|    1 |    0 |    0 |    1 |    0 | 1.225                | 1.225                | 0.925                |
|    1 |    0 |    0 |    1 |    1 | 1.200                | 1.200                | 0.900                |
|    1 |    0 |    1 |    0 |    0 | 1.175                | 1.175                | 0.875                |
|    1 |    0 |    1 |    0 |    1 | 1.150                | 1.150                | 0.850                |
|    1 |    0 |    1 |    1 |    0 | 1.125                | 1.125                | 0.825                |
|    1 |    0 |    1 |    1 |    1 | 1.100                | 1.100                | 0.800                |
|    1 |    1 |    0 |    0 |    0 | 1.075                | 1.075                | 0.775                |
|    1 |    1 |    0 |    0 |    1 | 1.050                | 1.050                | 0.750                |
|    1 |    1 |    0 |    1 |    0 | 1.025                | 1.025                | 0.725                |
|    1 |    1 |    0 |    1 |    1 | 1.000                | 1.000                | 0.700                |
|    1 |    1 |    1 |    0 |    0 | 0.975                | 0.975                | 0.675                |
|    1 |    1 |    1 |    0 |    1 | 0.950                | 0.950                | 0.650                |
|    1 |    1 |    1 |    1 |    0 | 0.925                | 0.925                | 0.625                |
|    1 |    1 |    1 |    1 |    1 | NO CPU*              | NO CPU*              | 0.600                |

an oscilloscope. This necessitates careful instrumentation of the output, using the supplied scope-probe jack. Accurate measurement of output ripple and load-transient response invariably requires that ground clip leads be completely avoided and that the probe hat be removed to expose the GND shield, so the probe can be plugged directly into the jack. Otherwise, EMI and noise pickup will corrupt the waveforms.

<!-- image -->

Most bench-top electronic loads intended for powersupply testing lack the ability to subject the DC-DC converter to ultra-fast load transients. Emulating the supply current di/dt at the CPU VCORE pins requires at

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1855 Evaluation Kit

least 10A/µs load transients. One easy method for generating such an abusive load transient is to solder a MOSFET, such as an MTP3055 or 12N05, directly across the scope-probe jack. Then drive its gate with a strong pulse generator at a low duty cycle (10%) to minimize heat stress in the MOSFET. Vary the high-level output voltage of the pulse generator to vary the load current.

To determine the load current, you might expect to insert a meter in the load path, but this method is prohibited here by the need for low resistance and inductance in the path of the dummy-load MOSFET. There are two easy alternative methods of determining how much load current a particular pulse-generator amplitude is causing. The first and best is to observe the inductor current with a calibrated AC current probe, such as a Tektronix AM503. In the buck topology, the load current is equal to the average value of the inductor current. The second method is to first put on a static dummy load and measure the battery current. Then, connect the MOSFET dummy load at 100% duty momentarily, and adjust the gate-drive signal until the battery current rises to the appropriate level (the MOSFET load must be well heatsinked for this to work without causing smoke and flames).

## Component Suppliers

| SUPPLIER                    | PHONE        | FAX          |
|-----------------------------|--------------|--------------|
| Central Semiconductor       | 516-435-1110 | 516-435-1824 |
| Dale-Vishay                 | 402-564-3131 | 402-563-6418 |
| Fairchild                   | 408-721-2181 | 408-721-1635 |
| International Rectifier     | 310-322-3331 | 310-322-3332 |
| Kemet                       | 408-986-0424 | 408-986-1442 |
| Nihon                       | 847-843-7500 | 847-843-2798 |
| ON Semiconductor (Motorola) | 602-303-5454 | 602-994-6430 |
| Panasonic                   | 714-373-7939 | 714-373-7183 |
| Sanyo                       | 619-661-6835 | 619-661-1055 |
| STM- Microelectronics       | 617-259-0300 | 617-259-9442 |
| Sumida                      | 708-956-0666 | 708-956-0702 |
| Taiyo Yuden                 | 408-573-4150 | 408-573-4159 |
| TDK                         | 847-390-4373 | 847-390-4428 |

Note: Please indicate that you are using the MAX1855, MAX1716, or MAX1854 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Jumper Settings

Table 2. Jumper JU1 Functions (Shutdown Mode)

| SHUNT LOCATION   | SHDN PIN          | MAX1855 OUTPUT            |
|------------------|-------------------|---------------------------|
| ON               | Connected to V CC | MAX1855 enabled           |
| OFF              | Connected to GND  | Shutdown mode, V OUT = 0V |

Table 3. Jumper JU2 Functions (Low-Noise Mode)

| SHUNT LOCATION   | SKIP PIN          | MAX1855 OUTPUT                                                                                                          |
|------------------|-------------------|-------------------------------------------------------------------------------------------------------------------------|
| ON               | Connected to V CC | Low-noise mode, forced fixed-frequency PWM operation                                                                    |
| OFF              | Connected to GND  | Normal operation, allows automatic PWM/PFM switchover for pulse-skipping at light load, resulting in highest efficiency |

Table 4. Jumpers JU3/JU4/JU5 Functions (Switching-Frequency Selection)

| JUMPER        | SHUNT LOCATION   | TON PIN           |   FREQUENCY (kHz) |
|---------------|------------------|-------------------|-------------------|
| JU3           | ON               | Connected to REF  |               400 |
| JU4, JU5      | OFF              | Connected to REF  |               400 |
| JU4           | ON               | Connected to V CC |               200 |
| JU3, JU5      | OFF              | Connected to V CC |               200 |
| JU5           | ON               | Connected to GND  |               550 |
| JU3, JU4      | OFF              | Connected to GND  |               550 |
| JU3, JU4, JU5 | OFF              | Floating          |               300 |

Note: Don't change the operating frequency without first recalculating component values because the frequency has a significant effect on the peak current-limit level, MOSFET heating, preferred inductor value, PFM/PWM switchover point, output noise, efficiency, and other critical parameters.

<!-- image -->

Table 5. Jumper JU6 Functions (Fixed/Adjustable Current-Limit Selection)

| SHUNT LOCATION   | ILIM PIN                                                                                                                             | CURRENT-LIMIT THRESHOLD            |
|------------------|--------------------------------------------------------------------------------------------------------------------------------------|------------------------------------|
| ON               | Connected to V CC                                                                                                                    | 120mV                              |
| OFF              | Connected to resistor divider R6/R12. Refer to the Setting the Current Limit section in the MAX1855 data sheet for more information. | Adjustable between 50mV and 200mV. |

## Table 6. Troubleshooting Guide

| SYMPTOM                                                                                                                                         | POSSIBLE PROBLEM                                                                                    | POSSIBLE PROBLEM                                                                                                                                                                                                                                             |
|-------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Circuit won't start when power is applied.                                                                                                      | Power-supply sequencing: +5V bias supply was applied first.                                         | Cycle SHDN Press the RESET button.                                                                                                                                                                                                                           |
| Circuit won't start when RESET is pressed, +5V bias supply cycled.                                                                              | Output overvoltage due to shorted high-side MOSFET.                                                 | Replace the MOSFET.                                                                                                                                                                                                                                          |
| Circuit won't start when RESET is pressed, +5V bias supply cycled.                                                                              | Output overvoltage due to load recovery overshoot.                                                  | Reduce the inductor value, raise the switching frequency, or add more output capacitance.                                                                                                                                                                    |
| Circuit won't start when RESET is pressed, +5V bias supply cycled.                                                                              | Transient overload condition.                                                                       | Add more low-ESR output capacitors.                                                                                                                                                                                                                          |
| Circuit won't start when RESET is pressed, +5V bias supply cycled.                                                                              | Broken connection, bad MOSFET, or other catastrophic problem.                                       | Troubleshoot the power stage. Are the DH and DL gate-drive signals present? Is the 2V V REF present?                                                                                                                                                         |
| On-time pulses are erratic or have unexpected changes in period.                                                                                | VBATT power source has poor impedance characteristic.                                               | Add a bulk electrolytic bypass capacitor across the bench-top power supply or substitute a real battery.                                                                                                                                                     |
| Load-transient waveform shows excess ringing. OR LX switching waveform exhibits double-pulsing (pulses separated only by a 400ns min off-time). | Instability due to low-ESR ceramic or polymer capacitors placed across fast feedback path (FB-GND). | Add parasitic PC board trace resistance between the LX-FB connection and the ceramic capacitor. OR Substitute a different capacitor type (OS-CON, tantalum, aluminum electrolytic, and polymer types work well).                                             |
| Excessive EMI, poor efficiency at high input voltages.                                                                                          | Gate-drain capacitance of N2/N3 is causing shoot-through cross-conduction.                          | Observe the gate-source voltage of N2/N3 during the low-to-high LX node transition (this requires careful instrumentation). Is the gate voltage being pulled above 1.5V, causing N2/N3 to turn on? Use a smaller low-side MOSFET or add a BST resistor (R7). |
| Poor efficiency at high input voltages, N1/N4 get hot.                                                                                          | N1/N4 have excessive gate capacitance.                                                              | Use a smaller high-side MOSFET or add more heatsinking.                                                                                                                                                                                                      |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1855 Evaluation Kit

## MAX1855 Evaluation Kit

Figure 1. MAX1855 EV Kit Schematic

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

MAXIM

<!-- image -->

Figure 2. MAX1855 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

Figure 4. MAX1855 EV Kit PC Board Layout-Layers 2 and 3

<!-- image -->

## MAX1855 Evaluation Kit

Figure 3. MAX1855 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX1855 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1855 Evaluation Kit

Figure 6. MAX1855 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

<!-- image -->