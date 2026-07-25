<!-- lastmod 2022-08-04 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX1642 evaluation kit (EV kit) is a step-up switching  regulator  for  one-cell,  battery-powered  systems.  It accepts a positive input between 0.9V and 1.65V and converts it to a 3.3V preset output for currents up to 20mA. The MAX1642 EV kit provides ultra-low quiescent current and high efficiency for maximum battery life. Operation up to 50kHz allows the use of a tiny surface-mount inductor while minimizing interference with sensitive intermediate frequencies in pagers and other RF applications.

This EV kit is a fully assembled and tested surfacemount circuit board. Additional pads on the bottom of the board accommodate the external feedback resistors for setting different output voltages. It can also be used to evaluate the MAX1643.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION   |   QTY | DESCRIPTION                                            |
|---------------|-------|--------------------------------------------------------|
| C1, C2        |     2 | 22µF, 6.3V tantalum capacitors Sprague 595D226X06R3B2T |
| C3            |     1 | 0.1µF ceramic capacitor                                |
| C4            |     0 | Open                                                   |
| JU1           |     1 | 3-pin header                                           |
| L1            |     1 | 100µH, 520mA inductor Sumida CD54-101                  |
| R1, R2, R4    |     0 | Open                                                   |
| R3, R5        |     2 | 100k Ω , 5% resistors                                  |
| U1            |     1 | MAX1642EUA (8-pin µMAX)                                |
| None          |     1 | Shunt                                                  |
| None          |     1 | MAX1642/MAX1643 PC board                               |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER*       | PHONE          | FAX            |
|-----------------|----------------|----------------|
| AVX             | (803) 946-0690 | (803) 626-3123 |
| Coilcraft       | (847) 639-6400 | (847) 639-1469 |
| Coiltronics     | (561) 241-7876 | (561) 241-9339 |
| Dale-Vishay     | (402) 564-3131 | (402) 563-6418 |
| Sprague         | (603) 224-1961 | (603) 224-1430 |
| Sumida          | (847) 956-0666 | (847) 956-0702 |
| Vishay/Vitramon | (203) 268-6261 | (203) 452-5670 |

*Please indicate that you are using the MAX1642 when you contact these suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

## MAX1642 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' 0.9V to 1.65V Input Voltage Range
- ' 3.3V ±4% Output Voltage
- ' Adjustable Output Voltage (2V to 5.2V)
- ' 80% Efficiency (VIN = 1.2V, ILOAD = 20mA)
- ' Internal 500mA Synchronous Rectifier
- ' 2µA Shutdown Mode (MAX1642)
- ' Low-Battery Detector (MAX1643)
- ' Ultra-Small, 8-Pin µMAX Package
- ' Power-Fail Output
- ' Surface-Mount Components
- ' Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART         | TEMP. RANGE   | BOARD TYPE    |
|--------------|---------------|---------------|
| MAX1642EVKIT | 0°C to +70°C  | Surface Mount |

Note: To evaluate the MAX1643, request a MAX1643EUA free sample with the MAX1642 EV kit.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX1642 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a 1V supply voltage to the VIN pad. The ground connects to the GND pad.
- 2) Connect a voltmeter and load, if any, to the VOUT pad.
- 3) For normal operation, place the shunt on JU1 across pins 1 and 2.
- 4) Turn on the power supply to the board and verify that the output voltage is 3.3V.

1

## MAX1642 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAX1642 EV kit provides a 3.3V output from a 0.9V to 1.65V input voltage. It delivers up to 20mA with 80% typical conversion efficiency.

## Jumper Selection

The 3-pin header JU1 selects shutdown mode. Table 1 lists  the  selectable  jumper  options.  In  shutdown,  the internal  switching  MOSFET turns off, PFO goes into a high-impedance state, and the synchronous rectifier turns off to prevent reverse current from flowing through the output back to the input. However, there is still  a  forward  current  path  through  the  synchronousrectifier body diode from the input to the output. Thus, the output doesn't drop lower than a diode drop below the  battery  voltage.  Connect  the SHDN pin  to  VIN  for normal operation.

## Table 1. Jumper JU1 Functions

| SHUNT LOCATION   | SHDN PIN         | MAX1642 OUTPUT                        |
|------------------|------------------|---------------------------------------|
| 1 and 2          | Connected to VIN | MAX1642 enabled, V OUT = 3.3V         |
| 2 and 3          | Connected to GND | Shutdown mode, V OUT = V IN - V DIODE |

## Evaluating Other Output Voltages

The MAX1642 is preset for a 3.3V output voltage. However, its output can be adjusted via an external voltage divider formed by R1 and R2 (located on the bottom of the board). The only other modification required is to cut the trace across R2. Since FB leakage is 10nA max, select feedback resistor R2 in the 100k W to 1M W range. R1 is given by the following equation:

<!-- formula-not-decoded -->

where VREF = 1.23V (the internal reference voltage).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Power-Fail Output

The MAX1642 has an on-chip comparator for power-fail detection. This comparator can be used to detect loss of power at the input or output. The MAX1642 EV kit detects power loss at the input. If the voltage at PFI falls below 614mV ±3%, the PFO output sinks current to GND.

The power-fail monitor's threshold is set by two resistors: R3 and R4. Refer to the Power-Fail Detection section in the MAX1642 data sheet for instructions on selecting resistors R3 and R4.

## Evaluating the MAX1643

The MAX1642 EV kit can also be used to evaluate the MAX1643. The only modifications required are to replace the MAX1642 with the MAX1643 and remove the shunt from JU1. Refer to the Detailed Description and Pin Description sections of the data sheets for the differences between the MAX1642 and MAX1643.

<!-- image -->

## MAX1642 Evaluation Kit

<!-- image -->

Figure 1.  MAX1642 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Evaluates:  MAX1642/MAX1643

## MAX1642 Evaluation Kit

<!-- image -->

Figure 2.  MAX1642 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4.  MAX1642 EV Kit PC Board Layout-Component Side

Figure 3.  MAX1642 EV Kit Component Placement GuideSolder Side

<!-- image -->

Figure 5.  MAX1642 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

- 4 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600