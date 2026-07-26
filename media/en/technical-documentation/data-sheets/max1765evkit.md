<!-- lastmod 2022-08-02 -->
## General Description

The MAX1765 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that contains two separate switching-regulator and linear-regulator circuits. Both circuits are configured for a +3.3V DC-DC output, which provides up to 800mA of current. They also contain a low-dropout (LDO) linear regulator that is configured for a +2.85V output and provides up to 500mA at the output. The two circuits differ only in their package type: the low-power circuit (left side) uses a 16-pin QSOP that can dissipate up to 696mW, while the high-power circuit (right side) uses a 16-pin TSSOP-EP that can dissipate up to 1700mW.

The MAX1765 features an internal N-channel MOSFET switch and a P-channel synchronous rectifier, and a pin-selectable forced pulse-width modulation (PWM) mode. The MAX1765 EV kit demonstrates low quiescent current and high efficiency (up to 96%) for maximum battery life. Operation at 1MHz allows the use of tiny surface-mount components.

| DESIGNATION                |   QTY* | DESCRIPTION                                                        |
|----------------------------|--------|--------------------------------------------------------------------|
| C1, C11                    |      2 | 33µF, 16V low-ESR electrolytic caps (POSCAP) Sanyo 16TPC33M        |
| C2, C12                    |      2 | 100µF, 6.3V low-ESR electrolytic caps (POSCAP) Sanyo 6TPC100M      |
| C3, C7, C13, C17, C21, C22 |      6 | 1µF, 10V X5R ceramic caps (0805) Taiyo Yuden LMK212BJ105MG         |
| C4, C14                    |      2 | 0.1µF, 50V X5R ceramic caps (0805) Taiyo Yuden UMK212BJ104KG       |
| C5, C15                    |      2 | 0.68µF, 10V X5R ceramic caps (0805) Taiyo Yuden LMK212BJ684KG      |
| C6, C16                    |      2 | 4.7µF, 6.3V X5R ceramic caps (0805) Taiyo Yuden JMK212BJ475KG      |
| C8, C18                    |      2 | 0.22µF, 25V X7R ceramic caps (1206) Taiyo Yuden TMK316BJ224KF      |
| C9, C19                    |      0 | Not installed (0805)                                               |
| C10, C20                   |      0 | Not installed (POSCAP D2)                                          |
| D1                         |      0 | Not installed Nihon EP10QY03 (recommended for low-voltage startup) |

<!-- image -->

## Features

- ♦ Operation from Inputs as Low as 0.7V
- ♦
- Output Voltages +3.3V Output at 800mA (DC-DC) +2.85V Output at 500mA (LDO)
- ♦ Both Outputs Are Adjustable with External Resistors
- ♦ Two Complete Circuits (Both Package Types)
- ♦ 1µA IC Shutdown Current
- ♦ 1MHz PWM Switching Frequency (for Small, Surface-Mount Components)
- ♦ Programmable Operating Mode
- ♦ Built-In 500mA LDO Linear Regulator
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE   | IC PACKAGE            |
|--------------|---------------|-----------------------|
| MAX1765EVKIT | 0°C to +70°C  | 16 QSOP, 16 TSSOP-EP* |

*Exposed paddle

## Component List

| DESIGNATION                        |   QTY* | DESCRIPTION                           |
|------------------------------------|--------|---------------------------------------|
| D2                                 |      1 | 1A, 30V Schottky diode Nihon EP10QY03 |
| JU1-JU4, JU7-JU10                  |      8 | 3-pin headers                         |
| JU5, JU11                          |      2 | 2-pin headers                         |
| L1, L2                             |      2 | 3.3µH inductors Coilcraft DO1606T-332 |
| R1, R9                             |      2 | 165k Ω ±1% resistors (0805)           |
| R2, R8                             |      2 | 100k Ω ±1% resistors (0805)           |
| R3, R4, R6, R7, R10, R11, R13, R14 |      0 | Not installed (0805)                  |
| R5, R12                            |      2 | 4.7 Ω ±5% resistors (0805)            |
| U1                                 |      1 | MAX1765EEE (16 QSOP)                  |
| U2                                 |      1 | MAX1765EUE (16 TSSOP-EP)              |
| None                               |     10 | Shunts (JU1-JU5, JU7-JU11)            |
| None                               |      1 | MAX1765 PC board                      |
| None                               |      1 | MAX1765 data sheet                    |
| None                               |      1 | MAX1765 EV kit data sheet             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

For price, delivery, and to place orders, please contact Maxim Distribution at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX1765 Evaluation Kit

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          |
|-------------|--------------|--------------|
| Coilcraft   | 847-639-6400 | 847-639-1469 |
| Nihon USA   | 661-867-2555 | 661-867-2698 |
| Sanyo USA   | 619-661-6835 | 619-661-1055 |
| Taiyo Yuden | 408-573-4150 | 408-573-4159 |

Note: Please indicate that you are using the MAX1765 when contacting these component suppliers.

## Quick Reference

The MAX1765 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

## Low-Power Circuit (Left Side)

- 1) Connect a voltmeter to the POUT pad.
- 2) Verify that shunts JU1 (ONA), JU2 (CLK/SEL), and JU4 (ONL) are across pins 1 and 2 and that shunt JU3 (TRACK) is across pins 2 and 3. Verify that a shunt is on jumper JU5.
- 3) Connect a +1.1VDC to +3.2VDC power supply to the PIN pad. Connect the supply ground to the GND pad.
- 4) Turn on the power supply and verify that the main output (POUT) is +3.3V.
- 5) Verify that the LDO linear regulator output (OUTL) is +2.85V.

For instructions on selecting the feedback resistors for other output voltages, see the Evaluating Other Output Voltages section.

## High-Power Circuit (Right Side)

- 1) Connect a voltmeter to the POUT pad.
- 2) Verify that shunts JU7 (ONA), JU8 (CLK/SEL), and JU10 (ONL) are across pins 1 and 2 and that shunt JU9 (TRACK) is across pins 2 and 3. Verify that a shunt is on jumper JU11.
- 3) Connect a +1.1VDC to +3.2VDC power supply to the PIN pad. Connect the supply ground to the GND pad.
- 4) Turn on the power supply and verify that the main output (POUT) is +3.3V.
- 5) Verify that the LDO Linear Regulator output (OUTL) is +2.85V.

For instructions on selecting the feedback resistors for other output voltages, see the Evaluating Other Output Voltages ( Both Circuits ) section.

## Detailed Description

The MAX1765 EV kit contains two separate boost switching-regulator circuits that provide +3.3VDC output and linear regulators that provide +2.85V output.

Both circuits require a +1.1V to +3.2V input voltage range. The LDO linear regulators can be powered from the switching regulator output (POUT) or an external DC voltage source.

The circuits differ in their package type. The low-power circuit  (left  side)  features  a  16-pin  QSOP,  while  the high-power circuit (right side) features a thermally enhanced 16-pin TSSOP-EP.

The switching regulators' output voltages can be adjusted from +2.5V to +5.5V with external resistors. The MAX1765 EV kit permits jumper-selectable operational modes: normal (heavy-load PWM/light-load PFM) mode, track mode, forced PWM mode, and forced PWM mode with the internal oscillator synchronized to an external clock.

## Jumper Selection

## Shutdown Mode (Both Circuits)

The MAX1765 EV kit features a shutdown mode that reduces the MAX1765 quiescent current to less than 1µA (typ), preserving battery life. The 3-pin jumpers, JU1 and JU7, select the shutdown mode for the MAX1765. Table 1 lists the selectable jumper options.

## CLK/SEL Operating Mode (Both Circuits)

Jumpers JU2 and JU8 control the CLK/SEL pin operating mode for the left and right circuits, respectively. Options include low-noise forced PWM mode, normal mode, and external clock source driving the CLK/SEL pin. The external clock source must operate in the 500kHz to 1200kHz range. Table 2 lists the CLK/SEL jumper options.

## Table 1. Jumper JU1, JU7  Functions

| SHUNT LOCATION   | ONA PIN           | MAX1765 OUTPUT                      |
|------------------|-------------------|-------------------------------------|
| 1, 2             | Connected to POUT | MAX1765 enabled, POUT = +3.3V       |
| 2, 3             | Connected to GND  | Shutdown mode, POUT = PIN - V DIODE |

## Table 2. Jumper JU2, JU8 Functions

| SHUNT LOCATION   | CLK/SEL PIN                    | OPERATING MODE                                                    |
|------------------|--------------------------------|-------------------------------------------------------------------|
| 1, 2             | Connected to POUT              | Forced PWM mode: PWM operation at all loads                       |
| 2, 3             | Connected to GND               | Normal mode: PFM at light load and PWM at heavy load              |
| None             | Clock connected to CLK/SEL pad | PWM mode synchro- nized to external 500kHz to 1200kHz range clock |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## TRACK Operating Mode (Both Circuits)

The MAX1765 EV kit features a track mode where POUT is set to +0.5V above the LDO linear regulator output voltage to improve efficiency. Use JU3 and JU9 to select track mode for either circuit. Table 3 lists the selectable jumper options.

## LDO Linear Regulator Shutdown Mode (Both Circuits)

The MAX1765 EV kit features a shutdown mode for the built-in  LDO linear regulator. The 3-pin jumpers, JU4 and JU10, disable and enable the left and right LDO linear  regulators,  respectively.  Table  4  lists  the  selectable jumper options.

## LDO Linear Regulator Source Selection (Both Circuits)

The MAX1765 EV kit allows each built-in LDO linear regulator to be powered from the boost switching regulator  or  an  external  voltage  source.  Jumpers  JU5  and JU11 select the DC voltage source for the left and right LDO linear regulators, respectively. Table 5 lists the jumper options.

Table 3. Jumper JU3, JU9 Functions

| SHUNT LOCATION   | TRACK PIN         | OPERATING MODE     |
|------------------|-------------------|--------------------|
| 1, 2             | Connected to POUT | Track mode enabled |
| 2, 3             | Connected to GND  | Normal operation   |

Table 4. Jumper JU4, JU10 Functions

| SHUNT LOCATION   | ONL PIN           | LDO OPERATING MODE          |
|------------------|-------------------|-----------------------------|
| 1, 2             | Connected to POUT | Linear regulator enabled    |
| 2, 3             | Connected to GND  | Linear regulator dis- abled |

Table 5. Jumper JU5, JU11 Functions

| LOCATION   | INL PIN                         | LDO POWER SOURCE                                          |
|------------|---------------------------------|-----------------------------------------------------------|
| Installed  | Connected to POUT               | POUT supplies the LDO linear regulator power              |
| None       | Connected to external DC source | External source sup- plies the LDO linear regulator power |

Note: INL must be powered to use the boost switching regulator circuit. If the LDO linear regulator is not used, INL must be connected to POUT (JU5 or JU11 installed) or a higher external source applied to the INL pad.

## MAX1765 Evaluation Kit

## Evaluating Lower Startup Input Voltages

The MAX1765 EV kit can operate from DC supply voltages down to +0.7V. When PIN is below +1.1V, a Schottky diode is required to guarantee startup below 1.1V. A Shottky diode is supplied with the high-power circuit (right side), but the user must add it to the lowpower circuit (left side). Refer to the Selecting the Output Diode section in the MAX1765 data sheet for instructions on selecting D1.

## Evaluating Other Output Voltages (Both Circuits)

The MAX1765 EV kit's boost switching regulator outputs are set to +3.3V by feedback resistors R1, R2, R8, and R9. To generate output voltages other than +3.3V (+2.5V to  +5.5V), select different external voltage-divider resistors (R1, R2 left side and R8, R9 right side). Refer to Setting the Output Voltages section in the MAX1765 data sheet for instructions on selecting the resistors.

## Evaluating Other LDO Linear Regulator Output Voltages (Both Circuits)

The MAX1765 EV kit's LDO linear regulator output (OUTL) has been set to +2.85V by shorting the FBL pin to  ground. To generate output voltages other than +2.85V (+1.25V to +5V), cut open the PC board trace across resistor R4 or R10 for the left and right sides, respectively. Select different external voltage-divider resistors. Refer to the Setting the Output Voltages section in the MAX1765 data sheet for instructions on the resistors (R3, R4 left side or R10, R11 right side).

## Evaluating Other Current Limits (Both Circuits)

The EV kit inductor current limit can be set from 400mA to  1250mA. The EV kit is factory configured for a 1250mA inductor current limit. To evaluate other current limits, cut open the PC board trace shorting R6 or R14 for the left and right sides, respectively. Resistors must be selected and installed to set the current limit. Refer to Setting the Switch Current Limit and Soft-Start section of the MAX1765 data sheet for selecting the resistors (R6, R7 left side or R13, R14 right side).

## Enabling Soft-Start (Both Circuits)

The MAX1765 soft-start feature will limit in-rush current during startup. To evaluate soft-start, cut open the PC board trace shorting R6 or R14 for the left and right sides, respectively. Install capacitor C9 or C19 and resistors R6 or R14. Refer to the Setting the Switch Current Limit and Soft-Start section in the MAX1765 data sheet for instructions on selecting C9 or C19 and R6 or R14 to activate soft-start.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1765 Evaluation Kit

Figure 1. MAX1765 EV Kit Schematic (Left Side)

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1765 Evaluation Kit

Figure 2. MAX1765 EV Kit Schematic (Right Side)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1765 Evaluation Kit

Figure 3. MAX1765 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 4. MAX1765 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1765 Evaluation Kit

Figure 5. MAX1765 EV Kit PC Board Layout-Solder Side

<!-- image -->

Figure 6. MAX1765 EV Kit Component Placement Guide-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

7