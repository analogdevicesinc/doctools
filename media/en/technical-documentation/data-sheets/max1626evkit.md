<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX1626 evaluation kit (EV kit) provides a selectable 3.3V or 5V output voltage. The MAX1626 has a high-switch duty cycle of up to 100%, allowing the external P-channel transistor to turn on fully. The 100% duty cycle and a low 100mV current-sense level permit very low dropout voltages. The circuit is configured to deliver up to 2A of output current with greater than 90% conversion efficiency.

This EV kit is a fully assembled and tested surfacemount circuit board. It can also be used to evaluate the MAX1627, which has an adjustable output voltage. Additional pads on the bottom of the board accommodate the external feedback resistors for setting different output voltages.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                  |
|---------------|-------|----------------------------------------------------------------------------------------------|
| C1, C2        |     2 | 68µF, 20V tantalum capacitors AVX TPSE686M020R0150 or Sprague 593D686X0020E2W                |
| C3            |     1 | 220µF, 10V tantalum capacitor AVX TPSE227M010R0100 or Sprague 593D227X0010E2W                |
| C4            |     1 | 0.47µF ceramic capacitor                                                                     |
| C5            |     1 | 0.1µF ceramic capacitor                                                                      |
| C6, C7        |     0 | Open                                                                                         |
| D1            |     1 | Schottky diode Nihon NSQ03A03 or Motorola MBRS340T3                                          |
| L1            |     1 | 22µH inductor Sumida CDRH125-220 or Coilcraft DO3316P-223                                    |
| P1            |     1 | P-channel MOSFET International Rectifier IRF7416, Siliconix Si4431DY, or Motorola MMSF3P02HD |
| R1            |     1 | 0.040 Ω , 1%, 1/2W resistor Dale WSL-2010-R040-F or IRC LR2010-01-R040-F                     |
| R2, R3        |     0 | Open                                                                                         |
| U1            |     1 | MAX1626ESA                                                                                   |
| JU1, JU2      |     2 | Three-pin headers                                                                            |
| None          |     2 | Shunts                                                                                       |
| None          |     1 | MAX1626 PC board                                                                             |
| None          |     1 | MAX1626 data sheet                                                                           |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' Selectable 3.3V or 5V Output Voltage
- ' Low Dropout Voltage
- ' 100% Max Duty Cycle
- ' 2A Output Current
- ' 16.5V Max Input Voltage
- ' 1µA Max Shutdown Current
- ' 90µA Max IC Supply Current
- ' Up to 300kHz Switching Frequency
- ' 8-Pin SO, Surface-Mount Construction
- ' Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART            | TEMP. RANGE   | BOARD TYPE    |
|-----------------|---------------|---------------|
| MAX1626EVKIT-SO | 0°C to +70°C  | Surface Mount |

Note:  To evaluate the MAX1627, request a MAX1627ESA free sample with the MAX1626EVKIT-SO.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER                | PHONE                         | FAX            |
|-------------------------|-------------------------------|----------------|
| AVX                     | (803) 946-0690 (800) 282-4975 | (803) 626-3123 |
| Coilcraft               | (847) 639-6400                | (847) 639-1469 |
| Dale-Vishay             | (402) 564-3131                | (402) 563-6418 |
| International Rectifier | (310) 322-3331                | (310) 322-3332 |
| IRC                     | (512) 992-7900                | (512) 992-3377 |
| Motorola                | (602) 303-5454                | (602) 994-6430 |
| Nihon                   | (805) 867-2555                | (805) 867-2698 |
| Siliconix               | (408) 988-8000 (800) 554-5565 | (408) 970-3950 |
| Sprague                 | (603) 224-1961                | (603) 224-1430 |
| Sumida                  | (847) 956-0666                | (847) 956-0702 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800

## MAX1626 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX1626 EV kit is a fully assembled and tested surface-mount printed circuit board. Follow these steps to  verify  board  operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a 5.5V supply to the VIN pad. The ground connects to the GND pad.
- 2) Connect a voltmeter and load, if any, to the VOUT pad.
- 3) For normal operation, place the shunts on JU1 across pins 1 and 2, and place the shunts on JU2 across pins 2 and 3.
- 4) Turn on the power and verify that the output voltage is 5V. For a 3.3V output, remove the shunt from JU2 pins 2 and 3, and place it across JU2 pins 1 and 2.
- 5) Refer to the Evaluating Other Output Voltages section to modify the board for different output voltages.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Jumper Selection

The three-pin header JU1 selects shutdown mode. Table 1 lists the selectable jumper options.

The three-pin header JU2 selects the output voltage mode. Table 2 lists the selectable jumper options.

## Table 1.  Jumper JU1 Functions

| SHUNT LOCATION   | SHDN PIN         | MAX1626 OUTPUT                |
|------------------|------------------|-------------------------------|
| 2 & 3            | Connected to VIN | Shutdown mode, V OUT = 0V     |
| 1 & 2            | Connected to GND | MAX1626 enabled, V OUT = 5.0V |

## Table 2.  Jumper JU2 Functions

| SHUNT LOCATION   | FB PIN           | MAX1626 OUTPUT   |
|------------------|------------------|------------------|
| 2 & 3            | Connected to VIN | V OUT = 5V       |
| 1 & 2            | Connected to GND | V OUT = 3.3V     |

2

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Inductor Selection

The 22µH Sumida CDRH125-220 inductor mounted on the EV kit board is a low-resistance, shielded, mediumcurrent inductor. It provides excellent performance over the line and load ranges. Refer to the Inductor Selection section in the MAX1626/MAX1627 data sheet for instructions on selecting the inductor value.

## Evaluating Other Output Voltages

To generate output voltages other than 3.3V or 5V, replace the MAX1626 with the MAX1627 (adjustable output), and select the external voltage divider resistors R2 and R3 (located on the bottom side of the board). The only other modifications required are cutting the trace across JU3 and removing the shunt from JU2. Refer to the Setting the Output Voltage section in the MAX1626/MAX1627 data sheet for instructions on calculating R2 and R3 values.

Figure 1.  MAX1626 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

## MAX1626 Evaluation Kit

<!-- image -->

Figure 2.  MAX1626 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4.  MAX1626 EV Kit PC Board Layout-Component Side

Figure 3.  MAX1626 EV Kit Component Placement GuideSolder Side

<!-- image -->

Figure 5.  MAX1626 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

- 4 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600
- © 1996 Maxim Integrated Products