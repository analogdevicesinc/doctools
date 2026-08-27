<!-- lastmod 2022-08-02 -->
## General Description

The MAX1820 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that contains two separate buck switching-regulator circuits. The top circuit utilizes a MAX1820 and is configured for a +0.4V to  +3.4V  dynamically variable output voltage and provides up to 600mA of guaranteed current. The bottom circuit uses a MAX1821 and is configured for a +1.5V output that provides up to 600mA of guaranteed current. A +2.7VDC to +5.5VDC source could be utilized to power either circuit's input.

The MAX1820/MAX1821 feature an internal MOSFET switch and synchronous rectifier. The MAX1820 EV kit demonstrates low quiescent current and high efficiency up to 97% for maximum battery life. PWM operation at 1MHz allows the use of tiny surface-mount components.

## Component Suppliers

| SUPPLIER                | PHONE        | FAX          |
|-------------------------|--------------|--------------|
| Murata                  | 770-436-1300 | 770-436-3030 |
| Sanyo Electronic Device | 619-661-6835 | 619-661-1055 |
| Sumida                  | 708-956-0666 | 708-956-0702 |
| Taiyo Yuden             | 408-573-4150 | 408-573-4159 |

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| C1, C12       |     2 | 10µF, 6.3V POSCAP capacitors (D1) Sanyo 6APD10M                     |
| C2            |     1 | 4.7µF, 6.3V X5R ceramic capacitor (0805) Taiyo Yuden JMK212BJ475KG  |
| C3, C7        |     2 | 330pF, 50V X7R ceramic capacitors (0603) Murata GRM188R71H331K      |
| C4, C8        |     2 | 12pF, 200V C0G ceramic capacitors (0805) Murata GRM2195C2D120J      |
| C5            |     1 | 0.01µF, 50V X7R ceramic capacitor (0603) Murata GRM188R71H103K      |
| C6            |     1 | 10µF, 6.3V X5R ceramic capacitor (1206) Taiyo Yuden LMK316BJ106KL   |
| C9            |     1 | 0.047µF, 16V X7R ceramic capacitor (0603) Taiyo Yuden EMK107BJ473KA |

- ♦ +2.7V to +5.5V Input Range
- ♦
- Output Voltages +0.4V to +3.4V Output at 600mA (Top Circuit)
- +1.5V Output at 600mA (Bottom Circuit)
- ♦ Dynamically Variable Output Voltage (Top Circuit)
- ♦ Adjustable Output Voltage Through Resistive Voltage-Divider (Bottom Circuit)
- ♦ Internal Switch and Synchronous Rectifier
- ♦ 0.1µA (typ) IC Shutdown Current
- ♦ 1MHz PWM Switching Frequency
- ♦ Syncable to 13MHz Oscillator
- ♦ Normal and Forced PWM Mode
- ♦ All Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMPRANGE    | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX1820EVKIT | 0°C to +70°C | 10 µMAX®     |

µMAX is a registered trademark of Maxim Integrated Products, Inc.

## Component List

| DESIGNATION        |   QTY | DESCRIPTION                                                       |
|--------------------|-------|-------------------------------------------------------------------|
| C10, C11           |     2 | 1µF, 6.3V X5R ceramic capacitors (0603) Taiyo Yuden JMK107BJ105KA |
| J1, J2             |     0 | Not installed scope probe connectors                              |
| J3, J4             |     2 | BNC connectors                                                    |
| JU1, JU2, JU4, JU5 |     4 | 3-pin headers                                                     |
| JU3, JU6           |     2 | 2-pin headers                                                     |
| L1, L2             |     2 | 4.1µH, 1.95A shielded inductors Sumida CDRH5D18-4R1NC             |
| R1                 |     1 | 43k Ω ± 5% resistor (0805)                                        |
| R2                 |     1 | 150k Ω ± 5% resistor (0805)                                       |
| R3                 |     1 | 20k Ω ± 1% resistor (0805)                                        |
| R4                 |     1 | 100k Ω ± 1% resistor (0805)                                       |
| R5, R6, R7         |     3 | 51 Ω ± 5% resistors (0805)                                        |
| U1                 |     1 | MAX1820ZEUB (10-pin µMAX)                                         |
| U2                 |     1 | MAX1821EUB (10-pin µMAX)                                          |
| None               |     4 | Shunts (JU1-JU6)                                                  |
| None               |     1 | MAX1820 PC board                                                  |
| None               |     1 | MAX1820 data sheet                                                |
| None               |     1 | MAX1820EVKIT data sheet                                           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

<!-- image -->

## Features

## MAX1820 Evaluation Kit

## Quick Start

The MAX1820 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

## Variable Output (Top Circuit)

- 1) Verify that shunts are across pins 1 and 2 of jumpers JU1 ( SHDN ) and JU2 ( SKIP ).
- 2) Verify that a shunt is installed on jumper JU3 (SYNC).
- 3) Connect a +2.7VDC to +5.5VDC power supply to the VIN pad. Set the power supply to more than +3.6V. Connect the supply ground to the PGND pad.
- 4) Connect a voltmeter to the VOUT pad.
- 5) Connect an external voltage reference or DAC output to the reference (REF) BNC connector. The voltage reference or DAC must have an adjustable range of +0.227V to +1.932V.
- 6) Turn on the power supply first, then the voltage reference source.
- 7) Set the reference voltage to +0.227V and verify that VOUT is at +0.4V.
- 8) Set the reference voltage to +1.932V and verify that VOUT is at +3.4V

## +1.5V Output (Bottom Circuit)

- 1) Verify that shunts are across pins 1 and 2 of jumpers JU4 ( SHDN ) and JU5 ( SKIP ).
- 2) Verify that a shunt is installed on jumper JU6 (SYNC).
- 3) Connect a +2.7VDC to +5.5VDC power supply to the VIN pad. Connect the supply ground to the PGND pad.
- 4) Connect a voltmeter to the VOUT pad.
- 5) Turn on the power supply and verify that VOUT is at +1.5V.

For instructions on selecting the feedback resistors for other output voltages, see the Evaluating Other Output Voltages (Bottom Circuit) section.

## Detailed Description

The MAX1820 EV kit contains two separate buck switching-regulator circuits. Either circuit can be powered from a DC power supply with an input range of +2.7V to +5.5V. PC board pads for the SHDN signal are provided on both circuits to interface with an external controller.

The top circuit provides a dynamically variable DC output voltage in the +0.4V to +3.4V range and provides up to 600mA as configured. A MAX1820 in a 10-pin µMAX package is used for this circuit. To obtain up to +3.4V at the output, +3.6V to +5.5V must be fed to the input; 50 Ω terminated BNC connectors are provided for the SYNC and REF signal pins that synchronize the circuit to an external sine-wave source and adjust the output voltage with an external reference source, (for evaluating the MAX1820X and MAX1820Y) respectively.

The bottom circuit supplies a +1.5V output at up to 600mA as configured. A MAX1821 in a 10-pin µMAX package is used for this circuit. A PC board pad is provided for the SYNC signal, which synchronizes the circuit to an external sine-wave source (for evaluating the MAX1821X).

The MAX1820 EV kit provides two jumper-selectable operational modes, Normal and Forced PWM. In Normal mode, the circuit operates in Pulse Skip mode for  light  loads  and  PWM mode for heavy loads. In Forced PWM mode, the circuit always operates in PWM mode for all loads.

## Jumper Selection

## Shutdown Mode (Top and Bottom Circuits)

The MAX1820 EV kit features a shutdown mode that reduces the MAX1820/MAX1821 quiescent current to 0.1µA (typ), thus preserving battery life. The 3-pin jumpers, JU1 and JU4, select the shutdown mode for the MAX1820 EV kit. Table 1 lists the selectable jumper options.

## Table 1. Jumpers JU1 and JU4 Functions

| SHUNT LOCATION   | SHDN PIN                                  | MAX1820/MAX1821 OUTPUT                    |
|------------------|-------------------------------------------|-------------------------------------------|
| 1, 2             | Connected to VIN                          | MAX1820, MAX1821 enabled                  |
| 2, 3             | Connected to GND                          | Shutdown mode, disabled                   |
| None             | External controller connected to SHDN pad | Logic high = enabled Logic low = disabled |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Operating Mode (Top and Bottom Circuits)

The MAX1820 EV kit provides a jumper-selectable operating mode feature. Jumpers JU2 and JU5 select the operating mode for the top and bottom circuits, respectively. Options include Low-Noise Forced PWM mode and Normal mode. Table 2 lists the jumper options.

Caution: Do not connect an external controller to the SHDN pad while a shunt is on jumper JU1 or JU4 since the external controller may be damaged.

Table 2. Jumpers JU2 and JU5 Functions

| SHUNT LOCATION   | SKIP PIN         | OPERATING MODE                                                  |
|------------------|------------------|-----------------------------------------------------------------|
| 1, 2             | Connected to VIN | Forced PWM mode: PWM operation at all loads                     |
| 2, 3             | Connected to GND | Normal mode: pulse skipping at light load and PWM at heavy load |

## Clock Select (Top and Bottom Circuits)

The MAX1820 EV kit features a selectable clock input. The MAX1820/MAX1821's internal clock can operate the EV kit or the EV kit can be synchronized to an external clock when evaluating the MAX1820X, MAX1820Y, and MAX1821X. The 2-pin jumpers JU3 and JU6 determine the top and bottom circuits' operating clock, respectively. Table 3 lists the selectable jumper options.

Table 3. Jumpers JU3 and JU6 Functions

| SHUNT LOCATION   | SYNC PIN                             | OPERATING MODE                                                         |
|------------------|--------------------------------------|------------------------------------------------------------------------|
| Installed        | Connected to VIN                     | Internal 1MHz clock used                                               |
| None             | Connected to SYNC pad through C4, C8 | External 13MHz sine- wave generator used to synchronize internal clock |

<!-- image -->

## MAX1820 Evaluation Kit

The sine-wave generator should provide the following signal qualities:

- Output Voltage = 0.2VP-P to 0.8VP-P with approximately 1VDC offset
- Output Frequency = 10MHz to 16MHz (MAX1820X and MAX1821X)
- Output Frequency = 15MHz to 21MHz (MAX1820Y)
- Duty Cycle = 40% to 60%

## Evaluating Other Output Voltages (Bottom Circuit)

The MAX1821 buck switching-regulator output is set to +1.5V by feedback resistors (R3, R4). To generate output voltages other than +1.5V (+1.25V to +5.5V), select different external voltage-divider resistors (R3, R4). Refer to the Setting the Output Voltages section in the MAX1821 data sheet for instructions on selecting the resistors. The minimum input voltage must be +150mV above the selected output voltage at VOUT to avoid possible dropout conditions.

## Variable Output Voltage (Top Circuit)

The MAX1820 EV kit top circuit uses the MAX1820Z IC and features a dynamically variable output voltage in the +0.4V to +3.4V range. An external voltage reference source must be connected to the top circuit's voltage reference (REF) BNC connector. The reference source can be an external voltage reference or the output of a DAC. The range of the voltage reference is +0.227V to +1.932V. This reference voltage range will provide an output voltage in the +0.4V to +3.4V range at VOUT. The output voltage (VOUT) settles within 30µs when changing VREF. When VIN is equal or lower than the desired VOUT, the MAX1820 operates at 100% duty cycle and VOUT will track VIN.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1820 Evaluation Kit

Figure 1. MAX1820 EV Kit Schematic (Top)

<!-- image -->

Figure 2. MAX1821 EV Kit Schematic (Bottom)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

Figure 3. MAX1820 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX1820 Evaluation Kit

Figure 4. MAX1820 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1820 Evaluation Kit

Figure 5. MAX1820 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600