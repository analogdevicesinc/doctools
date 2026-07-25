<!-- lastmod 2022-08-04 -->
## General Description

The MAX1797 evaluation kit (EV kit) is a high-efficiency, step-up DC-DC converter for portable hand-held devices. Unlike typical boost circuits, the MAX1797 output is completely disconnected from the input in shutdown. The EV kit accepts a positive input voltage between 0.7V and VOUT and converts it to a 3.3V output  for currents up to 500mA. The EV kit provides ultralow quiescent current and high efficiency for maximum battery life.

The MAX1797 EV kit is a fully assembled and tested surface-mount printed circuit (PC) board. It can also be used to evaluate other output voltages in the 2V to 5.5V range. Additional pads on the board accommodate the external feedback resistors for setting different output voltages.

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 803-946-0690 | 803-626-3123 |
| Sprague    | 603-224-1961 | 603-224-1430 |
| Sumida     | 847-956-0666 | 847-956-0702 |

Note: Please indicate that you are using the MAX1797 when contacting these component suppliers

## Component List

| DESIGNATION    |   QTY | DESCRIPTION                                                                   |
|----------------|-------|-------------------------------------------------------------------------------|
| C1, C2         |     2 | 47 µ F, 16V tantalum capacitors AVX TPSD476M016R0150 or Sprague 593D476X0016D |
| C3             |     1 | 0.1 µ F ceramic capacitor (1206)                                              |
| L1             |     1 | 22 µ H, 1.2A inductor Sumida CDRH6D28-220NC                                   |
| R1, R2, R4, R5 |     0 | Not installed                                                                 |
| R3             |     1 | 1M Ω ± 1% resistor (1206)                                                     |
| U1             |     1 | MAX1797EUA (8-pin µ MAX)                                                      |
| JU1            |     1 | 3-pin header                                                                  |
| None           |     1 | Shunt                                                                         |
| None           |     1 | MAX1797 PC board                                                              |
| None           |     1 | MAX1797EVKIT data sheet                                                       |
| None           |     1 | MAX1797 data sheet                                                            |

<!-- image -->

## Features

- ♦ Output Disconnects from Input During Shutdown
- ♦ Operates Down to 0.7V Input Supply Voltage
- ♦ Adjustable Output Voltage (2V to 5.5V, External Divider)
- ♦ Up to 500mA Output Current
- ♦ No External Schottky Diode Required
- ♦ Synchronous Rectification for Improved Efficiency
- ♦ Damping Circuit Reduces EMI
- ♦ 1µA (typ) Shutdown Current
- ♦ Low-Battery Detector (LBI/LBO)
- ♦ 8-Pin µMAX Package
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE      | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX1797EVKIT | 0 ° C to +70 ° C | 8 µ MAX      |

Note: To evaluate the MAX1795 or MAX1796, request a free sample of the MAX1795EUA or MAX1796EUA along with the MAX1797 EV kit.

## Quick Start

The MAX1797 EV kit is a fully assembled and tested surface-mount board. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed:

- 1)  Connect a voltmeter and load (if any) to the VOUT pad.
- 2) Verify that the shunt is across JU1 pins 2 and 3.
- 3)  Connect a 2V supply to the pads marked VIN and GND.
- 4) Turn on the power and verify that the output voltage is 3.3V.
- 5) See the Output Voltage Selection section to modify the board for a different output voltage.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

For price, delivery, and to place orders, please contact Maxim Distribution at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX1797 Evaluation Kit

## Detailed Description

## Input Source

The input source for the MAX1797 EV kit must be greater than 1.0V for guaranteed startup (0.7V for operation once started), and less than the output voltage. A typical  input  voltage  range  would  be  the  2.0V  to  3.3V range of a 2-cell NiCd battery. An input voltage greater than the selected output voltage (but less than 6V) will not damage the circuit; however, the MAX1797 output will  nearly  equal  the  input  voltage  when  the  device  is not  shutdown. In shutdown, the output is high impedance, and the ouput voltage will be 0V if a load is present. If OUT is driven by another voltage source, such as a backup battery, when the MAX1797 is shut down, the IC presents no load to the backup source.

Once started, the MAX1797 operates from the regulated output voltage. This means that the input voltage can fall  below the 1.0V minimum guaranteed startup voltage. Typically, the regulated output will be maintained even if the input voltage drops to 0.7V.

## Shutdown Jumper Selection

The MAX1797 EV kit features a shutdown mode that reduces quiescent current to &lt;1µA to preserve battery life. In shutdown, the output of the boost converter goes to  high  impedance and is fully disconnected from the input.

## Using the Low-Battery Detector

The MAX1797 has an additional comparator useful for monitoring the input source's voltage level. Resistors R4 and R5 are connected as a voltage-divider between the VIN pad and the MAX1797 LBI pin. Note that a PC trace

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

across R5 shorts the LBI pin to VIN when this function is not used. Cut the trace before installing R5. Refer to the Low-Battery Detection section of the MAX1797 data sheet for instructions on selecting values for R4 and R5.

## Output Voltage Selection

The MAX1797 is initially set for a 3.3V output by connecting the FB pin to OUT, or set to 5V by connecting the FB pin to GND. However, by adding external resistors R1 and R2, the output can be adjustable from 2.0V to 5.5V. Cut the trace shorting resistor R1, and install output voltage-divider resistors R1 and R2. The Selecting the Output Voltage section of the MAX1797 data sheet gives instruction for calculating R1 and R2 values.

## Table 1. Jumper JU1 Functions (Shutdown Mode)

| SHUNT LOCATION   | SHDN PIN                      | MAX1797 OUTPUT                |
|------------------|-------------------------------|-------------------------------|
| 1 and 2          | Connected to VIN, SHDN = high | Shutdown mode, V OUT = 0      |
| 2 and 3          | Connected to GND, SHDN = low  | MAX1797 enabled, V OUT = 3.3V |

<!-- image -->

## MAX1797 Evaluation Kit

<!-- image -->

Figure 1. MAX1797 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1797 Evaluation Kit

<!-- image -->

Figure 2. MAX1797 EV Kit Component Placement Guide-Top Silkscreen

Figure 3. MAX1797 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1797 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4