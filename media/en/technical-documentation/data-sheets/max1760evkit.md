<!-- lastmod 2022-08-04 -->
## General Description

The MAX1760 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that contains a boost switching-regulator circuit. The EV kit provides a regulated +3.3V output at up to 800mA of current. The input voltage range is +0.7V to +5.5V. However, the output voltage rises above the regulation point for input voltages exceeding 3.3V. A 1- or 2-cell battery input can also be used to power the EV kit.

The MAX1760 features an internal n-channel MOSFET switch, a synchronous rectifier, and a pin-selectable forced-PWM mode. The MAX1760 EV kit demonstrates low quiescent current and power efficiency up to 96%, thus increasing battery life. Operation at 1MHz allows the use of tiny surface-mount components.

## Component List

| DESIGNATION    |   QTY | DESCRIPTION                                                        |
|----------------|-------|--------------------------------------------------------------------|
| C1             |     1 | 33µF, 16V, low-ESR electrolytic cap Sanyo 16TPC33M                 |
| C2             |     1 | 100µF, 6.3V, low-ESR electrolytic cap Sanyo 6TPC100M               |
| C3             |     1 | 1µF ±20%, 10V, X5R ceramic cap (0805) Taiyo Yuden LMK212BJ105MG    |
| C4             |     1 | 0.68µF ±10%, 10V, X5R ceramic cap (0805) Panasonic ECJ-2FB1A684K   |
| C5             |     1 | 0.22µF ±10%, 25V, X7R ceramic cap (1206) Taiyo Yuden TMK316BJ224KF |
| C6             |     0 | Not installed, capacitor (0805)                                    |
| D1             |     1 | Not installed, Schottky diode Nihon EP10QY03                       |
| JU1, JU2       |     2 | 3-pin headers                                                      |
| L1             |     1 | 3.3µH, 1.4A inductor Coilcraft DO1606T-332                         |
| R3             |     1 | 4.7 Ω ±5% resistor (0805)                                          |
| R1, R2, R4, R5 |     0 | Not installed, resistor (0805)                                     |
| U1             |     1 | Maxim MAX1760EUB (10-pin µMAX)                                     |
| -              |     2 | Shunts (JU1, JU2)                                                  |
| -              |     1 | MAX1760 PC board                                                   |

## MAXIM

- ♦ +0.7V to +5.5V Input Voltage
- ♦ +3.3V Output Voltage
- ♦ Internal Synchronous Rectifier Provides Up to 96% Efficiency
- ♦ Output Is Adjustable with External Resistors
- ♦ Up to 800mA Output
- ♦ On-Chip N-Channel Switch
- ♦ 1µA Shutdown Current
- ♦ 1MHz Switching Frequency
- ♦ Fixed-Frequency PWM Operation
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX1760EVKIT | 0°C to +70°C | 10 µMAX ®    |

µMAX is a registered trademark of Maxim Integrated Products, Inc.

## Component Suppliers

| SUPPLIER                | PHONE         | WEBSITE             |
|-------------------------|---------------|---------------------|
| Coilcraft               | 847-639-6400  | www.coilcraft.com   |
| Nihon                   | 81-33343-3411 | www.niec.co.jp      |
| Panasonic               | 714-373-7366  | www.panasonic.com   |
| Sanyo Electronic Device | 619-661-6835  | www.sanyodevice.com |
| Taiyo Yuden             | 800-348-2496  | www-t-yuden.com     |

Note: Indicate that you are using the MAX1760 when contacting these component suppliers.

## Quick Start

The MAX1760 EV kit is fully assembled and tested. Follow these steps to verify board operation for a +3.3V output. Do not turn on the power supply until all connections are completed:

- 1) Connect a +1.1V to +3.2V DC power supply to the VIN pad. Connect the supply ground to the GND pad.
- 2) Connect a voltmeter to the VOUT pad.
- 3) Verify that jumper JU1 ( ON ) has a shunt across pins 2 and 3 and jumper JU2 (CLK/SEL) has a shunt across pins 1 and 2.
- 4) Turn on the power supply and verify that the main output is +3.3V.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

<!-- image -->

Features

## MAX1760 Evaluation Kit

## Table 1. Jumper JU1 Functions

| SHUNT LOCATION   | ON PIN            | MAX1760 OUTPUT                        |
|------------------|-------------------|---------------------------------------|
| 1-2              | Connected to VOUT | Shutdown mode, V OUT = V IN - V DIODE |
| 2-3              | Connected to GND  | MAX1760 enabled, V OUT = +3.3V        |

## Detailed Description

The MAX1760 EV kit contains a boost switching-regulator circuit that provides a +3.3V output. The circuit requires a +0.7V to +3.2V input voltage to maintain regulation. The output supplies up to 800mA as configured.

The output voltage can also be adjusted from +2.5V to +5.5V with external resistors. The MAX1760 EV kit permits jumper-selectable operational modes: normal mode, forced PWM mode, and forced PWM mode with the internal oscillator synchronized to an external clock.

## Jumper Selection

Two PC board jumpers provide the user with various operating configurations. Shutdown mode and CLK/ SEL mode are configurable through jumpers.

## Shutdown Mode

The MAX1760 EV kit features a shutdown mode that reduces the IC's quiescent current to 1µA (typ), preserving battery life. The 3-pin jumper, JU1, selects the shutdown mode for the circuit. Table 1 lists the selectable jumper options.

## CLK/SEL Operating Mode

Jumper JU2 controls the CLK/SEL pin operating mode. Options include low-noise, forced-PWM mode, normal mode, and an external clock source to drive the CLK/SEL pin. The external clock source must operate in the 500kHz to 1200kHz range. Table 2 lists the CLK/SEL jumper options.

## Evaluating Lower Startup Input Voltages

The MAX1760 EV kit can operate from DC supply voltages down to +0.7V. Install Schottky diode, D1, to ensure startup when VIN i s  below  +1.1V.  Refer to the Output Diode section in the MAX1760 data sheet for  instructions  on  selecting  D1.  D1  is  not  needed for input voltages above +1.1V.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Table 2. Jumper JU2 Functions

| SHUNT LOCATION   | CLK/SEL PIN                    | OPERATING MODE                                                    |
|------------------|--------------------------------|-------------------------------------------------------------------|
| 1-2              | Connected to VOUT              | Forced PWM mode: PWM operation at all loads                       |
| 2-3              | Connected to GND               | Normal mode: PFM at light load and PWM at medium to heavy load    |
| None             | Clock connected to CLK/SEL pad | PWM mode synchro- nized to external 500kHz to 1200kHz range clock |

## Evaluating Other Output Voltages

The output is set to +3.3V by grounding the feedback pin (FB). To generate output voltages other than +3.3V (+2.5V to +5.5V), cut open the PC board trace shorting R2, and select the external voltage-divider resistors (R1, R2). Refer to the Setting the Output Voltage section in the MAX1760 data sheet for instructions on selecting R1 and R2. To maintain a regulated output, the input voltage range is +0.7V to VOUT to maintain a regulated output.

## Evaluating Other Current Limits

The EV kit inductor current limit can be set from 625mA to 1250mA. The EV kit is factory configured for 1250mA. To set the current limit to 625mA, cut open the PC board trace shorting R4, and insert 1M Ω resistors for R4 and R5. Refer to the Setting the Switch Current and Soft-Start section of the MAX1760 data sheet to select other R4 and R5 values.

## Enabling Soft-Start

The MAX1760 soft-start feature limits inrush current during startup. Installing capacitor C6 activates this feature.  Refer  to  the Setting the Switch Current and SoftStart section in the MAX1760 data sheet for instructions on selecting C6 values.

<!-- image -->

## MAX1760 Evaluation Kit

Figure 1. MAX1760 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evaluates:  MAX1760

## MAX1760 Evaluation Kit

<!-- image -->

Figure 2. MAX1760 EV Kit Component Placement GuideTop Silkscreen

<!-- image -->

Figure 4. MAX1760 EV Kit PC Board Layout-Component Side

Figure 3. MAX1760 EV Kit Component Placement GuideBottom Silkscreen

<!-- image -->

Figure 5. MAX1760 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600