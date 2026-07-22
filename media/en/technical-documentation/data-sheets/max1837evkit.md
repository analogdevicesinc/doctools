<!-- lastmod 2022-08-02 -->
## General Description

The MAX1837 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that demonstrates the performance of the MAX1837 step-down DC-DC converter. The EV kit provides a +3.3V output from a +4.5V to +24.0V input and can deliver up to 250mA of load current. The EV kit circuit includes the MAX1837EUT33 DC-DC converter, which is preset to regulate the output voltage to +3.3V but can be reconfigured to output voltages in the  +1.25V to +5.5V range. This EV kit can also be used to evaluate other preset voltage parts in the MAX1836/ MAX1837 family.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                               |
|---------------|-------|-------------------------------------------------------------------------------------------|
| C1            |     1 | 10 µ F, 25V X5R ceramic capacitor (1812) Taiyo Yuden TMK432BJ106MM or TDK C4532X7R1E106KT |
| C2            |     1 | 150 µ F, 6.3V low-ESR capacitor (D3) Sanyo 6TPB150M                                       |
| C3            |     0 | Not installed (0805)                                                                      |
| D1            |     1 | 0.5A, 30V Schottky diode (SOD-123) Nihon EP05Q03L                                         |
| L1            |     1 | 22 µ H, 0.8A inductor Sumida CDRH5D18-220                                                 |
| R1, R2        |     0 | Not installed, resistors (0805)                                                           |
| U1            |     1 | MAX1837EUT33 (6-pin SOT23) Top mark: AANZ                                                 |
| JU1           |     1 | 3-pin header                                                                              |
| None          |     1 | Shunt                                                                                     |
| None          |     1 | MAX1837 PC board                                                                          |
| None          |     1 | MAX1836/MAX1837 data sheet                                                                |
| None          |     1 | MAX1837 EV kit data sheet                                                                 |

<!-- image -->

## Features

- ♦ Preset +3.3V Output Voltage
- ♦ 250mA Output Current
- ♦ +4.5V to +24.0V Input Voltage Range
- ♦ Adjustable Output Voltages (+1.25 to +5.5V)
- ♦ Low 12µA (typ) Quiescent Supply Current
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE      | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX1837EVKIT | 0 ° C to +70 ° C | 6 SOT23      |

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          |
|-------------|--------------|--------------|
| Nihon       | 661-867-2555 | 661-867-2698 |
| Sanyo       | 619-661-6835 | 619-661-1055 |
| Sumida      | 847-956-0666 | 847-956-0702 |
| Taiyo Yuden | 408-573-4150 | 408-573-4159 |
| TDK         | 847-803-6100 | 847-803-6296 |

Note: Please indicate that you are using the MAX1836/ MAX1837 when contacting these component suppliers.

## Quick Start

The MAX1837 EV kit is a fully assembled and tested surface-mount board. Follow the steps below for board operation. Do not turn on the power supply until all connections are completed:

- 1) Verify that a shunt is connected across pins 1 and 2 of jumper JU1.
- 2)  Connect a voltmeter across the VOUT and GND pads to monitor output voltage.
- 3) Connect a +4.5V to +24.0V supply to the VIN pad. Connect the ground terminal to the GND pad.
- 4) Turn on the power supply and verify that the output voltage is +3.3V.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

For price, delivery, and to place orders, please contact Maxim Distribution at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX1837 Evaluation Kit

## Detailed Description

The MAX1837 EV kit provides a +3.3V output from a +4.5V to +24.0V input. The EV kit delivers up to 250mA and operates up to 100% duty cycle for low dropout voltage. The MAX1837 features a low-current (12µA typ)  quiescent supply current as well as a low-current (3µA typ) shutdown mode.

The EV kit utilizes the MAX1837EUT33 IC, and the circuit  regulates  the  output  voltage  to  +3.3V  without  an external feedback network. The output can be adjusted for  voltages  in  the  +1.25V  to  +5.5V  range  by  adding feedback resistors R1 and R2. For instructions on adjusting the output voltage, see the Output Voltages section. Other versions of the MAX1836/MAX1837, with different  preset  voltages  and different maximum currents  loads,  can  also  be  evaluated  on  this  board.  For instructions on how to evaluate other converters using this  EV kit board, see the Evaluating Other Converters section.

## Output Voltages

The MAX1837 EV kit circuit is configured to regulate to the  +3.3V  output  voltage  by  connecting  the MAX1837EUT33 FB pin to ground. The output can be adjusted to a different voltage (+1.25V to +5.5V) by cutting open the PC board short at JU2, the short located at  R2,  and  installing  resistors  R1  and  R2.  Refer  to  the Output Voltage Selection section of the MAX1836/ MAX1837 data sheet for instructions on selecting R1 and R2. R2's resistance value should be between 10k Ω and 100k Ω . The output voltage (VOUT) is determined by the following equation:

<!-- formula-not-decoded -->

where VFB = 1.25V.

## Enable/Disable

The EV kit contains a 3-pin jumper (JU1) that allows the user to enable or disable the MAX1837. See Table 1 for jumper configurations. The IC can also be shut down by removing the shunt on jumper JU1 and applying a CMOS logic level signal at pin 2 of the jumper.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evaluating Other Converters

The MAX1837 EV kit circuit board has a MAX1837EUT33 IC preinstalled. To evaluate other converters  on  the  MAX1837  EV  kit  board,  replace MAX1837EUT33 IC with an alternate part (Table 2). To evaluate the alternate part at its preset output voltage, verify that the FB pin is connected to ground (R2 shorted) and that the OUT pin is connected to VOUT (JU2 shorted). Refer to the Inductor Selection and Output Capacitor section of the MAX1836/MAX1837 data sheet to verify or resize the inductor and capacitor values for the application.

Table 1. Jumper JU1 Function Table

| SHUNT LOCATION   | SHDN PIN         | EV KIT OPERATION          |
|------------------|------------------|---------------------------|
| 1 and 2          | Connected to VIN | U1 enabled, V OUT = +3.3V |
| 2 and 3          | Connected to GND | Shutdown mode, V OUT = 0  |

Table 2. Alternate Step-Down Converters

| PART NUMBER   |   PRESET OUTPUT VOLTAGE (V) |   MAXIMUM OUTPUT CURRENT (mA) | TOP MARK   |
|---------------|-----------------------------|-------------------------------|------------|
| MAX1836EUT50  |                         5.0 |                           125 | AANW       |
| MAX1836EUT33  |                         3.3 |                           125 | AANY       |
| MAX1837EUT50  |                         5.0 |                           250 | AANX       |
| MAX1837EUT33  |                         3.3 |                           250 | AANZ       |

<!-- image -->

## MAX1837 Evaluation Kit

Figure 1. MAX1837 EV Kit Schematic

<!-- image -->

Figure 2. MAX1837 EV Kit Component Placement GuideComponent Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1837 Evaluation Kit

Figure 3. MAX1837 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1837 EV Kit  PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4