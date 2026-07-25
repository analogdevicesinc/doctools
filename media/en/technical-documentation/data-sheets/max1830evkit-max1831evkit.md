<!-- lastmod 2022-08-04 -->
## General Description

The MAX1830 evaluation kit (EV kit) provides a 1.8V output from a 3V to 5.5V input voltage source. It delivers up to 3A output current with a 94% (max) efficiency. The MAX1830 EV kit includes the MAX1830 step-down switching regulator with an internal synchronous rectifier  to  increase  efficiency  and  reduce the number of external components. The resistor-programmable fixedoff-time,  current-mode architecture allows an optimum response to load and line transients. This EV kit, as configured, operates at approximately 550kHz from 3.3V inputs and 770kHz from 5V inputs.

The MAX1830 EV kit can be configured to produce a preset output voltage of 1.5V, 1.8V, 2.5V, or is feedback adjustable from 1.1V to VIN.

This EV kit can also be used to evaluate the MAX1831 with preset output voltages of 1.5V, 2.5V, and 3.3V, or adjustable output voltage from 1.1V to VIN.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                         |
|---------------|-------|-------------------------------------------------------------------------------------|
| C1            |     1 | 22µF, 6.3V ceramic capacitor (1210) TDK C3225X5R0J226M                              |
| C2            |     1 | 2.2µF, 10V ceramic capacitor (0805) TDK C2012X5R1A225M or Taiyo Yuden LMK212BJ225MG |
| C3            |     1 | 470pF ceramic capacitor (0603)                                                      |
| C4            |     1 | 1µF, 10V ceramic capacitor (0805) TDK C2012X5R1A105M or Taiyo Yuden LMK212BJ105MG   |
| C5            |     1 | 120µF, 4V, SP capacitor Panasonic EEFUD0G121R                                       |
| D1            |     1 | Schottky diode (not installed)                                                      |
| L1            |     1 | 1.5µH inductor Sumida CDRH6D28-4762T064                                             |
| R1            |     1 | 10 Ω ± 5% resistor (0603)                                                           |
| R2            |     1 | 1M Ω ± 5% resistor (0603)                                                           |
| R3            |     1 | 84.5k Ω ± 1% resistor (0805)                                                        |
| R4            |     1 | Not installed (0805)                                                                |
| R5            |     1 | Not installed (0805)                                                                |
| U1            |     1 | MAX1830EEE (16-pin QSOP)                                                            |
| JU1           |     1 | 2-pin header                                                                        |
| JU2           |     1 | 4-pin header                                                                        |
| JU3           |     0 | Not installed (shorted with PC board trace)                                         |
| None          |     2 | Shunts                                                                              |

<!-- image -->

Features

- ♦ Delivering 3A Output Current 94% Efficiency
- ♦ Synchronous Rectifier Improves Efficiency
- ♦ Output Voltage Preset to 1.8V
- ♦ 1.5V, 1.8V, or 2.5V Selectable 1.1V to VIN Adjustable
- ♦ 3V to 5.5V Input Voltage Range
- ♦ No External Schottky Diode Required
- ♦ Less than 1µA (typ) IC Shutdown Current
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX1830EVKIT | 0°C to +70°C | 16 QSOP      |

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          |
|-------------|--------------|--------------|
| Panasonic   | 201-392-7522 | 201-392-4441 |
| Sumida      | 847-956-0666 | 847-956-0702 |
| Taiyo Yuden | 408-573-4150 | 408-573-4159 |
| TDK         | 847-803-6100 | 847-803-6296 |

Note: Please indicate that you are using the MAX1830 when contacting these component suppliers.

## Quick Start

The MAX1830 EV kit is a fully assembled and tested surface-mount board. Follow the steps below for proper board operation. Do not turn on the power supply until all connections are completed:

- 1) Connect a voltmeter and load (if any) from VOUT to GND.
- 2) Verify  that  there  is  a  shunt  on  JU1  (shutdown  disabled).
- 3) Verify that the JU2 shunt is connected across pins 1 and 4 to set the output to 1.8V.
- 4) Connect a 3V to 5.5V supply to the pads marked VIN and GND (supply off).
- 5) Turn on the power supply and verify that the output voltage is 1.8V.
- 6) See the Output Voltage Selection section to modify the board for a different output voltage.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX1830 Evaluation Kit

## Detailed Description

The MAX1830 EV kit can be configured to produce a preset output voltage of 1.5V, 1.8V, 2.5V, or is feedback adjustable from 1.1V to VIN. As configured, the kit is preset for 1.8V. It operates from an input voltage range of 3V to 5.5V and delivers up to 3A of output current.

## Jumper Selection

Jumper JU1 controls the MAX1830's shutdown function. Table 1 lists the jumper options.

## Output Voltage Selection

The output voltage can be modified from the preset 1.8V output voltage two different ways. The first way is to change the output voltage to one of the other preset output voltages (1.5V or 2.5V). This is done by changing the jumper JU2 setting (Table 2). The second way is to add feedback resistors (R4 and R5) and connect FBSEL to GND, which allows an adjustable output voltage of 1.1V to VIN.

Note: Adjustable operation may require replacement of C5 with output capacitor rated for higher voltage.

The resistors can be calculated according to the following equation:

<!-- formula-not-decoded -->

Select R5 between 10k Ω and 25k Ω .

The inductor provided in the MAX1830 EV kit is optimized for a 3V to 5.5V input voltage range and a 1.8V/3A output voltage. If the output needs to be changed to another output voltage, refer to the MAX1830 data sheet for the recommended inductor value for your application.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Table 1. Jumper JU1 Function

| SHUNT LOCATION   | SHDN PIN                          | MAX1830 OUTPUT          |
|------------------|-----------------------------------|-------------------------|
| Open             | Logic low: 1M Ω pulldown resistor | Output voltage disabled |
| Closed (Default) | Connected to VIN                  | Output voltage enabled  |

## Table 2. Output Voltage Configuration

| OUTPUT VOLTAGE (V)            | JU2                             | JU3                                                                              |
|-------------------------------|---------------------------------|----------------------------------------------------------------------------------|
| 1.5                           | Not installed (FBSEL = OPEN)    | Installed (preset output voltage)                                                |
| 1.8* (MAX1830) 3.3* (MAX1831) | Connect 1 and 4 (FBSEL = REF)   | Installed (preset output voltage)                                                |
| 2.5                           | Connect 1 and 2 (FBSEL = V CC ) | Installed (preset output voltage)                                                |
| Adjustable                    | Connect 1 and 3 (FBSEL = GND)   | Not installed (JU3 PC board trace must be cut) (output voltage set by R4 and R5) |

* Default setting.

<!-- image -->

## MAX1830 Evaluation Kit

<!-- image -->

Figure 1. MAX1830 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1830 Evaluation Kit

<!-- image -->

Figure 2. MAX1830 Component Placement GuideComponent Side

Figure 3. MAX1830 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1830 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4